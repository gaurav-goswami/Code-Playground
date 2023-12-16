import React, { useEffect, useRef, useState } from "react";
import Codemirror from "codemirror";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/lib/codemirror.css";
import "./imports/themeImports";
import "./imports/modeImport";
import themeOptions from "./ThemeOptions";
import modeOption from "./ModeOptions";
import { IEditorOption } from "../../Interface/Interface";
import changeHandler from "../../utils/changeHandler";
import Select from "../Select/Select";
import EVENTS from "../../utils/Events";
import { RiMenu4Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setOpen } from "../../app/feature/ShowSlice";
import { useAppSelector } from "../../app/hooks";
import { MdOutlineCancel } from "react-icons/md";

interface IEditorProps {
  socket: any;
  roomId: string | undefined;
  onCodeChange: any;
}

const Editor: React.FC<IEditorProps> = (props) => {
  const { socket, roomId, onCodeChange } = props;

  const editorRef = useRef<HTMLTextAreaElement | null>(null);
  const codeMirrorInstance = useRef<CodeMirror.Editor | null>(null);

  const [editorOption, setEditorOption] = useState<IEditorOption>({
    theme: "duotone-dark",
    mode: "javascript",
  });

  const [editorCode, setEditorCode] = useState<string>("");

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeHandler(e, setEditorOption, editorOption);
    // console.log(e.target.name); theme mode
    if (e.target.name === "theme") {
      socket.current.emit(EVENTS.CHANGE_THEME, {
        theme: e.target.value,
        roomId,
      });
    } else if (e.target.name === "mode") {
      socket.current.emit(EVENTS.CHANGE_LANGUAGE, {
        mode: e.target.value,
        roomId,
      });
    }
  };

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
            theme: editorOption.theme,
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineNumbers: true,
          }
        );
        codeMirrorInstance.current.on("change", (instance, changes) => {
          // console.log("changes" , changes);
          const { origin } = changes;
          const code = instance.getValue();
          setEditorCode(code);
          onCodeChange(code);
          if (origin !== "setValue") {
            socket.current.emit(EVENTS.CODE_CHANGE, {
              roomId,
              code,
            });
          }
        });
        codeMirrorInstance.current.setValue(editorCode);
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

  useEffect(() => {
    if (socket.current) {
      socket.current.on(EVENTS.CODE_CHANGE, (data: { code: any }) => {
        const { code } = data;
        if (code !== null) {
          codeMirrorInstance.current?.setValue(code);
        }
      });
      // Handling theme change

      socket.current.on(EVENTS.CHANGE_THEME, (data: any) => {
        const { theme } = data;
        setEditorOption((prev) => ({
          ...prev,
          theme,
        }));
        const themeDropdown = document.getElementById(
          "themeDropdown"
        ) as HTMLSelectElement;
        if (themeDropdown) {
          themeDropdown.value = theme;
        }
      });

      socket.current.on(EVENTS.CHANGE_LANGUAGE, (data: any) => {
        const { mode } = data;
        setEditorOption((prev) => ({
          ...prev,
          mode,
        }));
        const languageDropdown = document.getElementById(
          "languageDropdown"
        ) as HTMLSelectElement;
        if (languageDropdown) {
          languageDropdown.value = mode;
        }
      });
    }
  }, [socket.current]);

  const dispatch = useDispatch();

  const { open } = useAppSelector((state) => state.slide);

  const handleShow = (x: boolean) => {
    dispatch(setOpen(x));
  };

  return (
    <div className="lg:w-11/12 h-screen w-screen mx-auto flex flex-col gap-1">
      <div className="h-max w-full py-1 flex gap-4 px-5 justify-end items-center bg-[#1a1818] rounded-sm">
        {/* hamburger menu here */}

        <div className="absolute md:hidden p-2 left-5">
          {open ? (
            <MdOutlineCancel
              className="text-white cursor-pointer text-xl md:hidden z-50 absolute -top-1 -left-1"
              onClick={() => handleShow(false)}
            />
          ) : (
            <RiMenu4Fill
              className="text-white cursor-pointer text-xl md:hidden z-50 absolute -top-1 -left-1"
              onClick={() => handleShow(true)}
            />
          )}
        </div>

        {/* theme select options */}
        <div className="space-x-4">
          <Select name="theme" change={handleOptionChange} id="themeDropdown">
            {themeOptions.map((theme, index) => {
              return (
                <option value={theme} key={index}>
                  {theme}
                </option>
              );
            })}
          </Select>

          {/* language mode options */}
          <Select name="mode" change={handleOptionChange} id="languageDropdown">
            {modeOption.map((mode, index) => {
              return (
                <option value={mode.mode} key={index}>
                  {mode.name}
                </option>
              );
            })}
          </Select>
        </div>
      </div>
      <textarea
        className="max-w-[100%] p-1"
        ref={editorRef}
        id="editor"
      ></textarea>
    </div>
  );
};

export default Editor;
