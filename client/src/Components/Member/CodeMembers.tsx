import React from "react";
import CTAButton from "../Button/CTAButton";

const CodeMembers: React.FC = () => {
  return (
    <>
      <div className="w-[220px] max-h-full md:flex hidden flex-col bg-[#1a1818] px-1 rounded-sm">
        <div className="flex w-full flex-1 flex-col overflow-y-scroll gap-5">
          <h2 className="text-center font-inconsolata text-3xl font-bold text-[#33e872]">
            Code Playground
          </h2>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <p className="text-white">member</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full p-1 h-[10%]">
          <CTAButton style="text-sm border-none bg-blue-600 text-white hover:bg-blue-700">Copy ID</CTAButton>
          <CTAButton style="text-sm bg-red-600 border-none text-white hover:bg-red-700">Leave</CTAButton>
        </div>
      </div>
    </>
  );
};

export default CodeMembers;
