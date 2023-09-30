import React, { useEffect, useRef, useState } from "react";
import Codemirror from "codemirror";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/lib/codemirror.css";
import './imports/themeImports';

import themeOptions from "./ThemeOptions";

const Editor: React.FC = () => {
  const editorRef = useRef<HTMLTextAreaElement | null>(null);
  const codeMirrorInstance = useRef<CodeMirror.Editor | null>(null);

  const [theme, setTheme] = useState <string> ("dracula");

  console.log("theme is" , theme);
  useEffect(() => {
    async function init() {
      if (editorRef.current !== null) {
        codeMirrorInstance.current = Codemirror.fromTextArea(
          editorRef.current,
          {
            mode: {
              name: "javascript",
              json: true,
            },
            theme,
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineNumbers: true,
          }
        );
      }
    }
    init();

    return () => {
      if (codeMirrorInstance.current) {
        const codeMirrorElement =
          codeMirrorInstance.current.getWrapperElement();
        if (codeMirrorElement && codeMirrorElement.parentNode) {
          codeMirrorElement.parentNode.removeChild(codeMirrorElement);
        }
      }
    };
  }, [theme]);

  return (
    <div className="lg:w-11/12 h-screen w-screen">
      <div className="h-[6%] p-1 w-full bg-green-600">
        <select name="" id="" onChange={(e) => setTheme(e.target.value)}>
          {themeOptions.map((theme , index) => {
            return <option value={theme} key={index}>{theme}</option>;
          })}
        </select>
      </div>
      <textarea className="max-w-[100%] p-1" ref={editorRef}></textarea>
    </div>
  );
};

export default Editor;
