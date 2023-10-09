import React from "react";
import Editor from "../Components/Editor/Editor";
import CodeMembers from "../Components/Member/CodeMembers";
import CodeWrapper from "../Wrappers/CodeWrapper";

const EditorPage: React.FC = () => {
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
