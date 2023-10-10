import React from "react";
import { useAppSelector } from "../app/hooks";
import { Navigate, Outlet } from "react-router-dom";

const LoginProtected: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  console.log("isAuth is", isAuth);

  if (isAuth) {
    return <Outlet />;
  }
  return <Navigate to={"/auth"} />;
};

export default LoginProtected;
