// In a production application we must use a service that generates the otp.
const generateOtp = () => {
  return String(Math.floor(1000 + Math.random() * 9000));
};
module.exports= generateOtp;
