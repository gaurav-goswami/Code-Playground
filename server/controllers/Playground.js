const { Config } from "../config/config";
const Playground from "../model/Playground";
const User from "../model/User";
const crypto from "crypto";

class PlaygroundController {

    static createPlayground = async (req, res, next) => {
        try {
            const { roomId, roomPassword, user_id, } = req.body;
            if (!roomId || !roomPassword || !user_id) return res.status(400).json({
                success: false,
                message: "All fields are required"
            });

            // check if the user (host) exists or not;
            let host = await User.findById(user_id);
            if (!host) return res.status(404).json({
                success: false,
                message: "User with this ID does not exist"
            })
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
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            })
        }
    }

    static joinPlayground = async (req, res, next) => {
        try {

            const { roomId, roomPassword } = req.body;
            const {id} = req.user;
            if (!roomId || !roomPassword) return res.status(400).json({
                success: false,
                message: "Playground Id and password are required"
            });
            // check if the room exists or not 
            let room = await Playground.findOne({roomId});
            if(!room) return res.status(404).json({
                success : false,
                message : "Playground does not exists"
            });

            await Playground.findOneAndUpdate({roomId} , {$push : {members : id}} , {new : true});
            console.log("user with id " , id , "has successfully joined " , roomId);
            return res.status(200).json({
                success : true,
                message : "Playground joined"
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            })
        }
    }

    static leavePlayground = async (req, res, next) => {
        try {

            // if host leave the playground then room will be deleted 
            const {roomId} = req.body;
            const {id} = req.user;
            if(!roomId) return res.status(400).json({
                success : false,
                message : "Playground ID is required"
            });

            let playground = await Playground.findById(roomId);
            if(!playground) return res.status(404).json({
                success : false,
                message : "Playground not found"
            })
            if(playground.host === id) {
                await Playground.findByIdAndDelete({roomId});
                return res.status(200).json({
                    success : true,
                    message : "Playground deleted successfully"
                })
            }else{
                await Playground.findOneAndUpdate({roomId} , {$pull : {members : {$eq : id}}} , {new : true});
                return res.status(200).json({
                    success : true,
                    message : "Playground left"
                })
            }
            
        } catch (error) {
            return res.status(500).json({
                success : false,
                message : "Internal server error"
            })
        }
    }

}

module.exports= PlaygroundController;