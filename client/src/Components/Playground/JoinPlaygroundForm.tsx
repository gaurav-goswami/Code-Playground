import React from "react";
import CustomInput from "../Form/CustomInput";
import NavigationButton from "../NavigationButton";
import { Link } from "react-router-dom";

const JoinPlaygroundForm: React.FC = () => {
  return (
    <>
      <form className="w-full py-4 bg-[#282a2a] px-2 flex gap-5 flex-col rounded-md">
        <CustomInput
          name="roomId"
          type="text"
          autocomplete="off"
          placeholder="Enter room ID"
          required={true}
          value=""
          onChange={() => console.log("changed")}
          style="bg-[#1c1f1f] border-none text-white py-2 rounded-md"
        />

        <CustomInput
          name="roomId"
          type="password"
          autocomplete="off"
          placeholder="Enter room password"
          required={true}
          value=""
          onChange={() => console.log("changed")}
          style="bg-[#1c1f1f] border-none text-white py-2 rounded-md"
        />

        <NavigationButton
          style="px-3 py-1 rounded-sm tracking-wide text-lg text-gray-400 font-inconsolata font-medium w-full border border-blue-600 hover:bg-blue-600 hover:text-white"
          path="/playground/uuid"
        >
          Join Playground
        </NavigationButton>

        <Link to="/" className="cursor-pointer text-gray-500 w-max">
            Back to home
        </Link>
      </form>
    </>
  );
};

export default JoinPlaygroundForm;
