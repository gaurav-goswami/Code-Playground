import React from "react";
import NavigationButton from "../NavigationButton";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="w-full p-2 h-screen flex flex-col gap-6 min-[480px]:gap-10 items-center justify-center">
        <h1 className="font-lato text-3xl md:text-6xl lg:text-7xl font-extrabold tracking-wider text-[#33e872] text-center max-[322px]:text-2xl">
          Code Playground
        </h1>

        <div className="md:w-[100%] lg:w-[60%] xl:w-[65%] p-1 flex flex-col gap-8 items-center">
          <p className="text-gray-400 text-lg md:text-xl font-inconsolata text-center max-[420px]:text-sm">
            Collaborate seamlessly with friends and colleagues using our
            feature-rich real-time synced code editor. Code together
            effortlessly in multiple languages like Java, C++, Python, JS, and
            more, all within your shared room.
          </p>

          <NavigationButton
            path="/playground"
            style="px-3 py-1.5 md:px-5 md:py-2.5 bg-[#35fb7b] rounded-sm tracking-wide text-lg text-gray-900 font-inconsolata font-medium"
          >
            Create Playground
          </NavigationButton>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
