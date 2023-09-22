import React from "react";
import MainWrapper from "../Wrappers/MainWrapper";
import Tab from "../Components/Button/Tab";
import CustomInput from "../Components/Form/CustomInput";
import NavigationButton from "../Components/NavigationButton";

const CreatePlayground: React.FC = () => {
  return (
    <>
      <MainWrapper>
        <div className="w-full h-screen flex justify-center items-center">

          {/* playground (join/create) container */}
          <div className="max-[580px]:w-[90%] w-[30rem] h-max min-[2200px]:min-w-[550px] px-2.5 py-5 bg-[#1c1f1f] rounded-sm flex flex-col items-start gap-4">

            <div className="flex w-full gap-2 justify-between">
              <Tab style="bg-[#131515]">Create</Tab>
              <Tab>Join</Tab>
            </div>

            <form className="w-full py-4 bg-[#282a2a] px-2 flex gap-5 flex-col rounded-md">
              <CustomInput 
                name="roomId"
                type="text"
                autocomplete="off"
                placeholder="Create room ID"
                required={true}
                value=""
                onChange={() => console.log("changed")}
                style="bg-[#1c1f1f] border-none text-white py-2 rounded-md"
              />

              <CustomInput 
                name="roomId"
                type="password"
                autocomplete="off"
                placeholder="Create room password"
                required={true}
                value=""
                onChange={() => console.log("changed")}
                style="bg-[#1c1f1f] border-none text-white py-2 rounded-md"
              />

              <NavigationButton style="px-3 py-1 rounded-sm tracking-wide text-lg text-gray-400 font-inconsolata font-medium w-full border border-[#35fb7b] hover:bg-[#35fb7b] hover:text-black" path="/playground/uuid">Create Playground</NavigationButton>

              <span className="cursor-pointer text-gray-500 w-max">Generate a random room ID</span>
            </form>

          </div>
        </div>

      </MainWrapper>
    </>
  );
};

export default CreatePlayground;
