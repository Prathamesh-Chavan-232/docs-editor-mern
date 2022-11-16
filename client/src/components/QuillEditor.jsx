import React from "react";
import "../css/Quill.css";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";
import { useEffect, useRef } from "react";

export default function QuillEditor() {
  const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ align: [] }],
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [({ list: "ordered" }, { list: "bullet" })],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["image", "blockquote", "code-block"],
    ["clean"],
  ];

  const wrapperRef = useRef();

  function connectToServer() {
    const socket = io("http://localhost:3001/");
    socket.on("connection", () => {});
    return () => {
      console.log("trying to connect");
      socket.disconnect();
    };
  }
  function displayEditor() {
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
  }
  useEffect(() => {
    connectToServer();
    displayEditor();
  });

  return <div className="container" ref={wrapperRef}></div>;
}
