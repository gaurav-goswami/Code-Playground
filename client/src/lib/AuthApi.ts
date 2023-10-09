import { toast } from "react-hot-toast";
import { ISendOtp, ISignupUser, ILoginUser } from "../Interface/Interface";

export const sendOtp = async (
  otpFunc: ISendOtp["otpFunc"],
  userDetails: ISendOtp["userDetails"],
  setDisable: ISendOtp["setDisable"],
  navigate: ISendOtp["navigate"]
) => {
  const toastId = toast.loading("Sending otp...");
  setDisable(true);
  try {
    const response = await otpFunc(userDetails).unwrap();
    console.log("otp api response", response);
    setDisable(false);
    navigate("/");
  } catch (error) {
    console.log("Error in send otp api", error);
    toast.error(
      "Something went wrong while sending otp. Please try again later"
    );
  }
  toast.dismiss(toastId);
  setDisable(false);
};

export const signUpUser = async (
  signUpFunc: ISignupUser["signUpFunc"],
  userDetails: ISignupUser["userDetails"],
  setDisable: ISignupUser["setDisable"],
  navigate: ISignupUser["navigate"]
) => {
  const toastId = toast.loading("Signing up...");
  setDisable(true);
  try {
    const response = await signUpFunc(userDetails).unwrap();
    console.log("signup user api response", response);
    localStorage.setItem("username", response.data?.username);
    localStorage.setItem("isAuth", "true");
    toast.success("Signup successfully");
    setDisable(false);
    navigate("/");
  } catch (error: any) {
    console.log("Error in signup api", error);
    toast.error(error.data?.message);
  }
  toast.dismiss(toastId);
  setDisable(false);
};

export const LoginUser = async (
  loginFunc: ILoginUser["loginFunc"],
  userDetails: ILoginUser["userDetails"],
  setDisable: ILoginUser["setDisable"],
  navigate: ILoginUser["navigate"]
) => {
  const toastId = toast.loading("Logging in...");
  setDisable(true);
  try {
    const response = await loginFunc(userDetails).unwrap();
    console.log("login api response", response);
    localStorage.setItem("username", response.data?.username);
    localStorage.setItem("isAuth", "true");
    setDisable(false);
    navigate("/");
  } catch (error: any) {
    console.log("Error in login api", error);
    toast.error(error.data?.message);
  }
  toast.dismiss(toastId);
  setDisable(false);
};
