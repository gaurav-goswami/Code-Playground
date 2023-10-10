import React, { useState } from "react";
import { IRegisterUserState, ISignUpProps } from "../../Interface/Interface";
import CustomInput from "./CustomInput";
import CTAButton from "../Button/CTAButton";
import FormWrapper from "../../Wrappers/FormWrapper";
import { BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import changeHandler from "../../utils/changeHandler";
import { useSendOtpMutation } from "../../app/service/Authentication";
import { sendOtp } from "../../lib/AuthApi";
// import { useAppDispatch } from "../../app/hooks";
// import { setUserDetails } from "../../app/feature/SignupSlice";
// import { Dispatch } from "@reduxjs/toolkit";

const SignUp: React.FC<ISignUpProps> = (props) => {
  const { setPage } = props;

  const [registerDetails, setRegisterDetails] = useState <IRegisterUserState>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeHandler(e, setRegisterDetails, registerDetails);
  };

  const [sendOtpFn] = useSendOtpMutation();
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  const handleSendOtp = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      sendOtp(sendOtpFn, registerDetails, setDisable, navigate);
      // (dispatch as Dispatch)(setUserDetails(registerDetails));
    } catch (error) {
      console.log(error);
      console.log("Error while signing up");
    }
  };

  return (
    <>
      <FormWrapper>
        <form
          className="max-[420px]:w-[90%] max-[580px]:w-[75%] w-[23rem] h-max min-[2200px]:min-w-[400px] flex flex-col gap-4 px-2 py-8 rounded-md min-[1120px]:justify-center min-[1120px]:bg-none bg-white"
          onSubmit={handleSendOtp}
        >
          <h2 className="text-center font-lato md:text-4xl text-2xl text-gray-800 tracking-wide font-bold">
            Code <span className="text-[#32d8af]">Playground</span>
          </h2>

          <CustomInput
            name="username"
            type="text"
            autocomplete="off"
            placeholder="Enter username"
            required={true}
            onChange={handleChange}
            value={registerDetails.username}
          />

          <CustomInput
            name="email"
            type="email"
            autocomplete="off"
            placeholder="Enter email"
            required={true}
            onChange={handleChange}
            value={registerDetails.email}
          />

          <CustomInput
            name="password"
            type="password"
            autocomplete="off"
            placeholder="Enter password"
            required={true}
            onChange={handleChange}
            value={registerDetails.password}
            icon={BiShow}
          />

          <CTAButton
            style="border-green-500 hover:bg-green-500"
            disable={disable}
          >
            Signup
          </CTAButton>
        </form>
        <p className="">
          Already have an account?{" "}
          <span
            className="cursor-pointer text-green-600 font-medium"
            onClick={() => setPage(true)}
          >
            Login
          </span>
        </p>

        <Link to="/" className="text-gray-400">
          Back to home
        </Link>
      </FormWrapper>
    </>
  );
};

export default SignUp;
