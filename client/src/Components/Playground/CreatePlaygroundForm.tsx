import React, { useState } from "react";
import CustomInput from "../Form/CustomInput";
import NavigationButton from "../Button/NavigationButton";
import generateRoomId from "../../utils/uuidGenerator";
import { ICreatePlayground } from "../../Interface/Interface";
import changeHandler from "../../utils/changeHandler";

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
  
  return (
    <>
      <form className="w-full py-4 bg-[#282a2a] px-2 flex gap-5 flex-col rounded-md">
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

        <NavigationButton
          style="px-3 py-1 rounded-sm tracking-wide text-lg text-gray-400 font-inconsolata font-medium w-full border border-[#35fb7b] hover:bg-[#35fb7b] hover:text-black"
          path={`/playground/${roomDetails.roomId}`}
        >
          Create Playground
        </NavigationButton>

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
