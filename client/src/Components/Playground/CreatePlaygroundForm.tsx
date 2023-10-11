import React, { useState } from "react";
import CustomInput from "../Form/CustomInput";
// import NavigationButton from "../Button/NavigationButton";
import generateRoomId from "../../utils/uuidGenerator";
import { ICreatePlayground } from "../../Interface/Interface";
import changeHandler from "../../utils/changeHandler";
import { useCreatePlaygroundMutation } from "../../app/service/Playground";
// import CTAButton from "../Button/CTAButton";
import { useNavigate } from "react-router-dom";
import { createPlayground } from "../../lib/PlaygroundApi";

const CreatePlaygroundForm: React.FC = () => {

  const [roomDetails, setRoomDetails] = useState <ICreatePlayground> ({
    roomId : "",
    roomPassword : ""
  })

  const generateId = async () => {
    const id = await generateRoomId();
    setRoomDetails((prevRoomDetails) => ({
      ...prevRoomDetails,
      roomId : id
    }))
  };

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    changeHandler(e, setRoomDetails, roomDetails);
  }

  const [createPlaygroundFn] = useCreatePlaygroundMutation();
  const [disable, setDisable] = useState <boolean>(false);
  const navigate = useNavigate();
  const initPlayground = (e : React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      createPlayground(createPlaygroundFn , roomDetails, setDisable, navigate);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      <form className="w-full py-4 bg-[#282a2a] px-2 flex gap-5 flex-col rounded-md" onSubmit={initPlayground}>
        <CustomInput
          name="roomId"
          type="text"
          autocomplete="off"
          placeholder="Create room ID"
          required={true}
          value={roomDetails.roomId}
          onChange={handleChange}
          style="bg-[#1c1f1f] border-none text-white py-2 rounded-md"
        />

        <CustomInput
          name="roomPassword"
          type="password"
          autocomplete="off"
          placeholder="Create room password"
          required={true}
          value={roomDetails.roomPassword}
          onChange={handleChange}
          style="bg-[#1c1f1f] border-none text-white py-2 rounded-md"
        />

      <button
          className="px-3 py-1 rounded-sm tracking-wide text-lg text-gray-400 font-inconsolata font-medium w-full border border-[#35fb7b] hover:bg-[#35fb7b] hover:text-black"
          disabled={disable}
          type="submit"
        >
          Create Playground
        </button>

        <span
          className="cursor-pointer text-gray-500 w-max"
          onClick={generateId}
        >
          Generate a random room ID
        </span>
      </form>
    </>
  );
};

export default CreatePlaygroundForm;
