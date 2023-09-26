import mailSender from "./mailSender";

const verificationMail = async (email, otp) => {
    try {
        const mail = await mailSender(email, "Verification email from code playground", otp);
        console.log("Verification mail is" , mail);
    } catch (error) {
        console.log("Error while sending otp mail");
    }
}

export default verificationMail;