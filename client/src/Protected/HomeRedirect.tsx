import React from "react";
import { useAppSelector } from "../app/hooks";
import { Navigate, Outlet } from "react-router-dom";

const HomeRedirect: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  if(!isAuth){
    return <Outlet />
  }else{
    return <Navigate to={"/"}/>
  }
};

export default HomeRedirect;
