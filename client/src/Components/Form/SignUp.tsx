import React, { useState } from "react";
import { IRegisterUserState } from "../../Interface/Interface";
import CustomInput from "./CustomInput";
import CTAButton from "../Button/CTAButton";

const SignUp: React.FC = () => {

  const [registerDetails, setRegisterDetails] = useState<IRegisterUserState>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterDetails({ ...registerDetails, [name]: value });
  };

  return (
    <>
      <div className="flex h-[95vh] justify-center items-center min-[1120px]:bg-white min-[1120px]:lg:w-[50%] w-full rounded-s-3xl">
        <form className="max-[420px]:w-[90%] max-[580px]:w-[75%] w-[23rem] h-max min-[2200px]:min-w-[400px] flex flex-col gap-4 px-2 py-8 rounded-md min-[1120px]:h-full min-[1120px]:justify-center">

          <h2 className="text-center font-lato md:text-4xl text-2xl text-gray-800 tracking-wide">Code Playground</h2>
            
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
          />

          <CTAButton>Signup</CTAButton>
        </form>
      </div>
    </>
  );
};

export default SignUp;
