import React, { useEffect, useRef } from "react";
import Editor from "../Components/Editor/Editor";
import CodeMembers from "../Components/Member/CodeMembers";
import CodeWrapper from "../Wrappers/CodeWrapper";
import { initSocket } from "../utils/socket";
import EVENTS from "../utils/Events";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast/headless";
import handleError from "../utils/SocketError";

const EditorPage: React.FC = () => {
  const socketRef = useRef <any>(null);
   
  // const location = useLocation();
  const {roomId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    const init = async () => {
      socketRef.current = await initSocket();

      socketRef.current.on("connect_error" , (err : any) => handleError(err, navigate))
      socketRef.current.on("connect_failed" , (err : any) => handleError(err, navigate))

      socketRef.current.emit(EVENTS.JOIN , {
        roomId,
        username : "demo"
      });

      socketRef.current.on(EVENTS.JOINED , (data : any) => {
        const {clients, username, socketId}  = data;
        if(username !== "demo"){
          toast.success(`${username} has joined the playground`);
          console.log(`${username} joined`)
        }
      })
    }

    init();

  } , [])

  return (
    <>
      <CodeWrapper>
        <div className="flex relative max-h-screen gap-1">
          <CodeMembers />
          <Editor />
        </div>
      </CodeWrapper>
    </>
  );
};

export default EditorPage;
