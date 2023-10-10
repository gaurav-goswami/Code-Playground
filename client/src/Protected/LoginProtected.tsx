import React from "react";
import { useAppSelector } from "../app/hooks";
import { Navigate, Outlet } from "react-router-dom";

const LoginProtected: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  if (isAuth) {
    return <Outlet />;
  }
  return <Navigate to={"/auth"} />;
};

export default LoginProtected;
