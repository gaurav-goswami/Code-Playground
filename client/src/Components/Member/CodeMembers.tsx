import React, { useState } from "react";
import Member from "./Member";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useExitPlaygroundMutation } from "../../app/service/Playground";
import { leavePlayground } from "../../lib/PlaygroundApi";

interface ICodeMembers {
  clients : [any]
}

const CodeMembers: React.FC <ICodeMembers> = (props) => {

  const {clients} = props;

  const { roomId } = useParams();
  const navigate = useNavigate();
  const [disable, setDisable] = useState<boolean>(false);
  const [exitPlayground] = useExitPlaygroundMutation();

  const handleLeavePlayground = () => {
    try {
      leavePlayground(exitPlayground, roomId, setDisable, navigate);
    } catch (error) {
      console.log("Error in exit playground api");
    }
  };

  return (
    <>
      <div className="w-[220px] max-h-full md:flex hidden flex-col bg-[#1a1818] px-1 rounded-sm">
        <div className="flex w-full flex-1 flex-col overflow-y-scroll gap-5">
          <Link
            to="/"
            className="text-center font-inconsolata text-2xl font-bold text-[#33e872]"
          >
            Code Playground
          </Link>
          <div className="flex flex-wrap items-center gap-1 p-1">
            {
              clients.map((member) => {
                return <Member username={member.username} key={member.socketId}/>
              })
            }
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full p-1 h-[10%]">
          <button className="text-sm border-none bg-blue-600 text-white hover:bg-blue-700 py-1">
            Copy ID
          </button>
          <button
            className="text-sm bg-red-600 border-none text-white hover:bg-red-700 py-1"
            onClick={handleLeavePlayground}
            disabled={disable}
            >
            Leave
          </button>
        </div>
      </div>
    </>
  );
};

export default CodeMembers;
