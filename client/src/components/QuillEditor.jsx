import React from "react";
import "./css/Quill.css";
import Quill from "quill";
import { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";

export default function QuillEditor() {
  const wrapperRef = useRef();
  const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
  ];
  var OPTIONS = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  useEffect(() => {
    const editor = document.createElement("div");
    wrapperRef.current.append(editor);
    new Quill(editor, {
      modules: { toolbar: TOOLBAR_OPTIONS },
      theme: "snow",
      // placeholder: "Compose and epic...",
    });

    return () => {
      wrapperRef.innerHTML = "";
    };
  }, []);

  return <div className="container" ref={wrapperRef}></div>;
}
