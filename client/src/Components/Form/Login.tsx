import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { ISignInProps, ISignInUserState } from "../../Interface/Interface";
import CTAButton from "../Button/CTAButton";
import FormWrapper from "../../Wrappers/FormWrapper";
import { BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import changeHandler from "../../utils/changeHandler";
import { useLoginMutation } from "../../app/service/Authentication";
import { loginUser } from "../../lib/AuthApi";
import { useDispatch } from "react-redux";
import { setAuth } from "../../app/feature/AuthSlice";

const Login: React.FC<ISignInProps> = (props) => {
  const { setPage } = props;

  const [loginDetails, setLoginDetails] = useState<ISignInUserState>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeHandler(e, setLoginDetails, loginDetails);
  };

  const [disable, setDisable] = useState(false);
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = loginUser(login, loginDetails, setDisable, navigate);
      dispatch(setAuth(await res));
      setLoginDetails({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log("Error while login");
    }
  };

  return (
    <>
      <FormWrapper>
        <form
          className="max-[420px]:w-[90%] max-[580px]:w-[75%] w-[23rem] h-max min-[2200px]:min-w-[400px] flex flex-col gap-4 px-2 py-8 rounded-md min-[1120px]:justify-center min-[1120px]:bg-transparent bg-white"
          onSubmit={handleLogin}
        >
          <p className="text-gray-500">Test Accounts</p>
          <div className="flex gap-6">
            <p>
              Email :- <span className="text-green-500">johndoe@gmail.com</span>
            </p>
            <p>
              Pass :- <span className="text-green-500">johndoe</span>
            </p>
          </div>
          <div className="flex gap-6">
            <p>
              Email :- <span className="text-green-500">janedoe@gmail.com</span>
            </p>
            <p>
              Pass :- <span className="text-green-500">janedoe</span>
            </p>
          </div>
          <h2 className="text-center font-lato md:text-4xl text-2xl text-gray-800 tracking-wide font-bold">
            Code <span className="text-blue-600">Playground</span>
          </h2>
          <CustomInput
            name="email"
            type="email"
            autocomplete="off"
            placeholder="Enter email"
            required={true}
            onChange={handleChange}
            value={loginDetails.email}
          />

          <CustomInput
            name="password"
            type="password"
            autocomplete="off"
            placeholder="Enter password"
            required={true}
            onChange={handleChange}
            value={loginDetails.password}
            icon={BiShow}
          />

          <CTAButton
            style="border-blue-600 hover:bg-blue-600"
            disable={disable}
          >
            Login
          </CTAButton>
        </form>
        <p className="">
          Don't have an account?{" "}
          <span
            className="cursor-pointer text-blue-600 font-medium"
            onClick={() => setPage(false)}
          >
            SignUp
          </span>
        </p>

        <Link to="/" className="text-gray-400">
          Back to home
        </Link>
      </FormWrapper>
    </>
  );
};

export default Login;
