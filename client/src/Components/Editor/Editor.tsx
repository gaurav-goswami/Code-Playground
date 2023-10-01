import React, { useEffect, useRef, useState } from "react";
import Codemirror from "codemirror";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/lib/codemirror.css";
import './imports/themeImports';
import './imports/modeImport';
import themeOptions from "./ThemeOptions";
import modeOption from "./ModeOptions";
import { IEditorOption } from "../../Interface/Interface";
import changeHandler from "../../utils/changeHandler";
import Select from "../Select/Select";

const Editor: React.FC = () => {
  const editorRef = useRef<HTMLTextAreaElement | null>(null);
  const codeMirrorInstance = useRef<CodeMirror.Editor | null>(null);

  const [editorOption , setEditorOption] = useState <IEditorOption> ({
    theme : "duotone-dark",
    mode : "javascript"
  });

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeHandler(e , setEditorOption , editorOption);
  }

  console.log(editorOption);

  useEffect(() => {
    async function init() {
      if (editorRef.current !== null) {
        codeMirrorInstance.current = Codemirror.fromTextArea(
          editorRef.current,
          {
            mode: {
              name: editorOption.mode,
              json: true,
            },
            theme : editorOption.theme,
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
  }, [editorOption]);

  return (
    <div className="lg:w-11/12 h-screen w-screen">
      <div className="h-[6%] w-full py-1 flex gap-4 px-5 justify-end">

        {/* theme select options */}
        <Select name="theme" change={handleOptionChange}>
          {themeOptions.map((theme , index) => {
              return <option value={theme} key={index}>{theme}</option>;
          })}
        </Select>

        {/* language mode options */}
        <Select name="mode" change={handleOptionChange}>
          {modeOption.map((mode , index) => {
            return <option value={mode.mode} key={index}>{mode.name}</option>;
          })}
        </Select>

      </div>
      <textarea className="max-w-[100%] p-1" ref={editorRef}></textarea>
    </div>
  );
};

export default Editor;
