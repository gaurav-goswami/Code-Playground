import { toast } from "react-hot-toast";
import { ISendOtp, ISignupUser, ILoginUser, ICommonInterface } from "../Interface/Interface";
import axios from "axios";

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
    toast.success("OTP sent successfully. Check you email Id 🤩");
    navigate("/auth/verify");
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
  otp : string,
  setDisable: ISignupUser["setDisable"],
  navigate: ISignupUser["navigate"]
) => {
  const toastId = toast.loading("Signing up...");
  setDisable(true);
  try {
    const response = await signUpFunc({...userDetails, otp}).unwrap();
    console.log("signup user api response", response);
    localStorage.setItem("username", response.data?.username);
    localStorage.setItem("isAuth", "true");
    toast.success("Signup successfully");
    setDisable(false);
    navigate("/playground");
  } catch (error: any) {
    console.log("Error in signup api", error);
    toast.error(error.data?.message);
  }
  toast.dismiss(toastId);
  setDisable(false);
};

export const loginUser = async (
  loginFunc: ILoginUser["loginFunc"],
  userDetails: ILoginUser["userDetails"],
  setDisable: ILoginUser["setDisable"],
  navigate: ILoginUser["navigate"]
) => {
  const toastId = toast.loading("Logging in...");
  setDisable(true);
  try {
    const response = await loginFunc(userDetails).unwrap();
    toast.success("Logged In");
    localStorage.setItem("set_auth", JSON.stringify(response));
    setDisable(false);
    toast.dismiss(toastId);
    navigate("/");
    return response;
  } catch (error: any) {
    console.log("Error in login api", error);
    toast.error(error.data?.message);
  }
  toast.dismiss(toastId);
  setDisable(false);
};

export const logout = async (setDisable : ICommonInterface['setDisable'], navigate : ICommonInterface['navigate']) => {
  const toastId = toast.loading("Loading...");
  setDisable(true)
  try {
    const url = `${import.meta.env.VITE_REACT_APP_SERVER_URL}/auth/logout`;
    const {data} = await axios.get(url, {
      withCredentials: true,
    });
    localStorage.removeItem('set_auth');
    toast.success("Logged out");
    console.log("logout response" , data);
    navigate("/");
  } catch (error) {
    console.log("Error in logout api" , error);
  }
  toast.dismiss(toastId)
};
