const nodemailer = require("nodemailer");
const { Config } = require("../config/config");

const mailSender = async (email, title, body = null) => {
    try {
        const transporter = nodemailer.createTransport({
            host : Config.MAIL_HOST,
            auth : {
                user : Config.MAIL_USER,
                pass : Config.MAIL_PASS
            }
        })
        let mail = await transporter.sendMail({
            from : "Code Playground",
            to : email,
            subject : title,
            html : body
        });
        return mail;
    } catch (error) {
        console.log("Error while sending mail");
    }
}

module.exports= mailSender;