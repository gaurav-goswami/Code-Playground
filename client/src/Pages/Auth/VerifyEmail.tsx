import React, { useState } from "react";
import MainWrapper from "../../Wrappers/MainWrapper";
import OTPInput from "react-otp-input";
import { useAppSelector } from "../../app/hooks";
import { useSignUpMutation } from "../../app/service/Authentication";
import { signUpUser } from "../../lib/AuthApi";
import { useNavigate } from "react-router-dom";
import useSendOtp from "../../utils/useSendOtp";
import toast from "react-hot-toast";

const VerifyEmail: React.FC = () => {
  const [otp, setOtp] = useState("");
  const [disabled, setDisable] = useState<boolean>(false);
  const navigate = useNavigate();
  const details = useAppSelector((state) => state.signUp.user);
  const [signUpFn] = useSignUpMutation();

  console.log(details);

  const handleSignUp = async () => {
    try {
      signUpUser(signUpFn, details, otp, setDisable, navigate);
    } catch (error) {
      console.log(error);
      console.log("Error while signing up");
    }
  };

  const sendOtp = useSendOtp();

  const handleResendOtp = () => {
    if(!details || details === null){
      toast.error("Please fill you details again");
      navigate("/auth");
      return;
    }
    sendOtp(setDisable, details);
  }

  return (
    <>
      <MainWrapper>
        <div className="grid place-items-center h-screen">
          <div className="w-max h-max justify-center items-center m-auto flex flex-col gap-4">
            <p className="text-3xl font-bold text-white">Enter OTP</p>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  style={{
                    color: "#000",
                    width: "50px",
                    textAlign: "center",
                    height: "50px",
                    backgroundColor: "rgba(255, 255, 255)",
                    borderRadius: "2px",
                  }}
                />
              )}
            />
            <div className="p-2 w-full flex gap-2">
              <p className="text-gray-500">Didn't received the otp ? </p>
              <button className="text-white cursor-pointer" onClick={handleResendOtp} disabled={disabled}>Resend Now</button>
            </div>

            <button
              className="text-white bg-[#3a67da] font-medium h-10 flex justify-center items-center gap-2 px-3 py-3 rounded-md md:min-w-[8rem] max-w-full transition-all duration-100 hover:bg-[#2f66ee] border-none"
              disabled={disabled}
              onClick={handleSignUp}
            >
              Create Account
            </button>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default VerifyEmail;
