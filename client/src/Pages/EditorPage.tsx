import React, { useEffect, useRef } from "react";
import Editor from "../Components/Editor/Editor";
import CodeMembers from "../Components/Member/CodeMembers";
import CodeWrapper from "../Wrappers/CodeWrapper";
import { initSocket } from "../utils/socket";
import EVENTS from "../utils/Events";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast/headless";
import handleError from "../utils/SocketError";
import isPlaygroundExists from "../utils/checkPlayground";

const EditorPage: React.FC = () => {
  const socketRef = useRef<any>(null);

  const { roomId } = useParams();
  const navigate = useNavigate();
  let details: string | null = localStorage.getItem("set_auth");
  let username: string;
  if (details !== null) {
    username = JSON.parse(details)?.username;
  }

  // only render the editor if the roomID exists else redirect back to home;
  useEffect(() => {
    const check = async () => {
      const res = await isPlaygroundExists(roomId);
      if (res !== true) {
        navigate("/");
      }
      return res;
    };
    check();
  }, []);

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();

      socketRef.current.on("connect_error", (err: any) =>
        handleError(err, navigate)
      );
      socketRef.current.on("connect_failed", (err: any) =>
        handleError(err, navigate)
      );

      socketRef.current.emit(EVENTS.JOIN, {
        roomId,
        username,
      });

      socketRef.current.on(EVENTS.JOINED, (data: any) => {
        const { clients, username, socketId } = data;
        if (username !== "demo") {
          toast.success(`${username} has joined the playground`);
          console.log(`${username} joined`);
        }
      });
    };

    // disconnected
    if (socketRef.current !== null) {
      socketRef.current.on(EVENTS.DISCONNECTED, ({ socketId, username }) => {
        toast.success(`${username} left the playground`);
      });
    }

    init();

    return () => {
      socketRef.current.disconnect();
      socketRef.current.off(EVENTS.JOINED);
      socketRef.current.off(EVENTS.DISCONNECTED);
    };
  }, []);

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
