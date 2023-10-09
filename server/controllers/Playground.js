const ErrorHandler = require("../utils/ErrorHandler");
const { Config } = require("../config/config");
const Playground = require("../model/Playground");
const User = require("../model/User");
const crypto = require("crypto");

class PlaygroundController {

    static createPlayground = async (req, res, next) => {
        try {
            const { roomId, roomPassword, user_id, } = req.body;
            if (!roomId || !roomPassword || !user_id) return next(new ErrorHandler("All fields are required", 400));

            // check if the user (host) exists or not;
            let host = await User.findById(user_id);
            if (!host) return next(new ErrorHandler("User with this ID does not exist", 404));

            // hash the room password
            const salt = Config.SALT;
            const hashPin = crypto.createHash("sha256").update(roomPassword + salt).digest("hex");

            const playground = await Playground.create({ roomId, roomPassword: hashPin, host: user_id });
            console.log("playground created", playground);

            return res.status(201).json({
                success: true,
                message: "Playground created"
            });

        } catch (error) {
            return next(new ErrorHandler("Internal server error", 500));
        }
    }

    static joinPlayground = async (req, res, next) => {
        try {

            const { roomId, roomPassword } = req.body;
            const { id } = req.user;
            if (!roomId || !roomPassword) return next(new ErrorHandler("Room Id and password are required", 400));

            // check if the room exists or not 
            let room = await Playground.findOne({ roomId });
            if (!room) return next(new ErrorHandler("Playground does not exist", 404));

            await Playground.findOneAndUpdate({ roomId }, { $push: { members: id } }, { new: true });
            console.log("user with id ", id, "has successfully joined ", roomId);
            return res.status(200).json({
                success: true,
                message: "Playground joined"
            })

        } catch (error) {
            return next(new ErrorHandler("Internal server error", 500));
        }
    }

    static leavePlayground = async (req, res, next) => {
        try {

            // if host leave the playground then room will be deleted 
            const { roomId } = req.body;
            const { id } = req.user;
            if (!roomId) return next(new ErrorHandler("Playground ID is required", 400));

            let playground = await Playground.findById(roomId);
            if (!playground) return next(new ErrorHandler("Playground not found", 404));

            if (playground.host === id) {
                await Playground.findByIdAndDelete({ roomId });
                return res.status(200).json({
                    success: true,
                    message: "Playground deleted successfully"
                })
            } else {
                await Playground.findOneAndUpdate({ roomId }, { $pull: { members: { $eq: id } } }, { new: true });
                return res.status(200).json({
                    success: true,
                    message: "Playground left"
                })
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            })
        }
    }
}

module.exports = PlaygroundController;