import React from "react";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <span className={`${styles["loader"]}`}></span>
      </div>
    </>
  );
};

export default Loader;
