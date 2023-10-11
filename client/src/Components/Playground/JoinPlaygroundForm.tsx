import React, { useState } from "react";
import CustomInput from "../Form/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useJoinPlaygroundMutation } from "../../app/service/Playground";
import { joinPlayground } from "../../lib/PlaygroundApi";
import { ICreatePlayground } from "../../Interface/Interface";
import changeHandler from "../../utils/changeHandler";

const JoinPlaygroundForm: React.FC = () => {

  const [roomDetails, setRoomDetails] = useState <ICreatePlayground> ({
    roomId : "",
    roomPassword : ""
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    changeHandler(e, setRoomDetails, roomDetails);
  }

  const [disable, setDisable] = useState <boolean>(false);
  const navigate = useNavigate();
  const [JoinPlaygroundFn] = useJoinPlaygroundMutation();

  const enterPlayground = (e : React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      joinPlayground(JoinPlaygroundFn , roomDetails , setDisable, navigate);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form className="w-full py-4 bg-[#282a2a] px-2 flex gap-5 flex-col rounded-md" onSubmit={enterPlayground}>
        <CustomInput
          name="roomId"
          type="text"
          autocomplete="off"
          placeholder="Enter room ID"
          required={true}
          value={roomDetails.roomId}
          onChange={handleChange}
          style="bg-[#1c1f1f] border-none text-white py-2 rounded-md"
        />

        <CustomInput
          name="roomPassword"
          type="password"
          autocomplete="off"
          placeholder="Enter room password"
          required={true}
          value={roomDetails.roomPassword}
          onChange={handleChange}
          style="bg-[#1c1f1f] border-none text-white py-2 rounded-md"
        />

        <button
          className="px-3 py-1 rounded-sm tracking-wide text-lg text-gray-400 font-inconsolata font-medium w-full border border-blue-600 hover:bg-blue-600 hover:text-white"
          disabled={disable}
          type="submit"
        >
          Join Playground
        </button>

        <Link to="/" className="cursor-pointer text-gray-500 w-max">
            Back to home
        </Link>
      </form>
    </>
  );
};

export default JoinPlaygroundForm;
