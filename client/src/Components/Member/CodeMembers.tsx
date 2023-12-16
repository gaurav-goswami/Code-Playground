import React, { useState } from "react";
import Member from "./Member";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useExitPlaygroundMutation } from "../../app/service/Playground";
import { leavePlayground } from "../../lib/PlaygroundApi";
import toast from "react-hot-toast";
import { useAppSelector } from "../../app/hooks";

interface ICodeMembers {
  clients: [any];
}

const CodeMembers: React.FC<ICodeMembers> = (props) => {
  const { clients } = props;

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

  const copyRoomId = async () => {
    try {
      if (typeof roomId === "string") {
        await navigator.clipboard.writeText(roomId);
        toast.success('Playground ID copied to clipboard');
      }
    } catch (error) {
      toast.error("Could not copy the playground ID");
    }
  };

  const {open} = useAppSelector((state) => state.slide);

  return (
    <>
      <div className={`w-[220px] max-h-full md:flex flex-col bg-[#1a1818] px-1 rounded-sm ${open ? "flex absolute top-0 bottom-0 left-0 z-10" : "hidden"}`}>
        <div className="flex w-full flex-1 flex-col overflow-y-scroll gap-5">
          <Link
            to="/"
            className="text-center font-inconsolata text-2xl font-bold text-[#33e872] invisible md:visible"
          >
            Code Playground
          </Link>
          <div className="flex flex-wrap items-center gap-1 p-1">
            {clients.map((member) => {
              return (
                <Member username={member.username} key={member.socketId} />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full p-1 h-[10%]">
          <button
            className="text-sm border-none bg-blue-600 text-white hover:bg-blue-700 py-1"
            onClick={copyRoomId}
          >
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
