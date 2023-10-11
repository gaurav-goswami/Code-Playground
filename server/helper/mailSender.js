const nodemailer = require("nodemailer");
const {Config} = require("../config/config");

const mailSender = async (email, title, body) => {
    try {

        let transporter = nodemailer.createTransport({
            host: Config.MAIL_HOST,
            auth: {
                user: Config.MAIL_USER,
                pass: Config.MAIL_PASS
            }
        });

        let mailContent = await transporter.sendMail({
            from: "Code Playground",
            to: email,
            subject: title,
            html: body
        });

        return mailContent;

    } catch (error) {
        console.log("Something went wrong while sending mail")
        console.log(error);
    }
}

module.exports = mailSender;