import React, { useEffect, useRef } from "react";
import Codemirror from "codemirror";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/dracula.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/lib/codemirror.css";

const Editor: React.FC = () => {
  const editorRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    async function init() {
      if (editorRef.current !== null) {
        Codemirror.fromTextArea(
          editorRef.current,
          {
            mode: {
              name: "javascript",
              json: true,
            },
            theme: "dracula",
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineNumbers: true,
          }
        );
      }
    }
    init();

  }, []);

  return (
    <div className="lg:w-11/12 h-screen w-screen">
      <textarea
        className="max-h-[100%] max-w-[100%] p-1"
        ref={editorRef}
      ></textarea>
    </div>
  );
};

export default Editor;
