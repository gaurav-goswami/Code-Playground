import React from "react";
import { IMainWrapperProps } from "../Interface/Interface";

const MainWrapper: React.FC<IMainWrapperProps> = (props) => {
  const { children } = props;

  return (
    <div className="lg:w-11/12 min-h-screen max-h-max mx-auto">
      {children}
    </div>
  );
};

export default MainWrapper;
