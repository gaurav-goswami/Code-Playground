import React, { useState } from "react";
import MainWrapper from "../../Wrappers/MainWrapper";
import OTPInput from "react-otp-input";
import CTAButton from "../../Components/Button/CTAButton";
import { useAppSelector } from "../../app/hooks";

const VerifyEmail: React.FC = () => {
  const [otp, setOtp] = useState("");

  const details = useAppSelector((state) => state.SignUp.user);
  console.log(details);

  return (
    <>
      <MainWrapper>
        <div className="grid place-items-center h-screen">
          <div className="w-max h-max justify-center items-center m-auto flex flex-col gap-4">
            <p className="text-3xl font-bold text-white">Enter OTP</p>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
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
              <button
                className="text-white cursor-pointer"
              >
                Resend Now
              </button>
            </div>

            <CTAButton
                style="text-white bg-[#3a67da] font-medium h-10 flex justify-center items-center gap-2 px-3 py-3 rounded-md md:min-w-[8rem] max-w-full transition-all duration-100 hover:bg-[#2f66ee] border-none"
            >
              Create Account
            </CTAButton>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default VerifyEmail;
