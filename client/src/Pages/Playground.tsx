import React , {useState} from "react";
import MainWrapper from "../Wrappers/MainWrapper";
import Tab from "../Components/Button/Tab";
import CreatePlaygroundForm from "../Components/Playground/CreatePlaygroundForm";
import JoinPlaygroundForm from "../Components/Playground/JoinPlaygroundForm";

const Playground: React.FC = () => {

  const [isCreatePlayground, setIsCreatePlayground] = useState (true);

  return (
    <>
      <MainWrapper>
        <div className="w-full h-screen flex justify-center items-center">

          {/* playground (join/create) container */}
          <div className="max-[580px]:w-[90%] w-[30rem] h-max min-[2200px]:min-w-[550px] px-2.5 py-5 bg-[#1c1f1f] rounded-sm flex flex-col items-start gap-4">

            <div className="flex w-full gap-2 justify-between">

              <Tab style={`${isCreatePlayground ? "bg-[#131515]" : "bg-[#282a2a]"}`} setTab={() => setIsCreatePlayground(true)}>Create</Tab>

              <Tab style={`${isCreatePlayground ? "bg-[#282a2a]" : "bg-[#131515]"}`} setTab={() => setIsCreatePlayground(false)}>Join</Tab>

            </div>
            {
              isCreatePlayground === true ? <CreatePlaygroundForm /> : <JoinPlaygroundForm />
            }
          </div>
        </div>

      </MainWrapper>
    </>
  );
};

export default Playground;
