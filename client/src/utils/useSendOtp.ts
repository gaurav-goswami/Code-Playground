import { useDispatch } from "react-redux";
import { useSendOtpMutation } from "../app/service/Authentication";
import { useNavigate } from "react-router-dom";
import { IRegisterUserState } from "../Interface/Interface";
import { setUserDetails } from "../app/feature/SignupSlice";
import { sendOtp } from "../lib/AuthApi";

const useSendOtp = () => {
  const [sendOtpFn] = useSendOtpMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const otpSender = (
    setDisable: (x: boolean) => void,
    details: IRegisterUserState
  ) => {
    try {
      sendOtp(sendOtpFn, details, setDisable, navigate);
      dispatch(setUserDetails(details));
    } catch (error) {
      console.log(error);
      console.log("Error while sending otp");
    }
  };

  return otpSender;
};

export default useSendOtp;
