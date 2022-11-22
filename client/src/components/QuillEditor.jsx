import React from "react";
import "../css/Quill.css";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";
import { useEffect, useCallback, useState } from "react";

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

  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();

  // function connectToServer() {
  //   const s = io("http://localhost:3001/");
  //   setSocket(s);
  //   // s.on("connection", () => {});
  //   return () => {
  //     console.log("trying to connect");
  //     s.disconnect();
  //   };
  // }
  // function displayEditor() {
  //   const editor = document.createElement("div");
  //   wrapperRef.current.append(editor);
  //   const q = new Quill(editor, {
  //     modules: { toolbar: TOOLBAR_OPTIONS },
  //     theme: "snow",
  //     // placeholder: "Compose and epic...",
  //   });

  //   setQuill(q);

  //   return () => {
  //     wrapperRef.innerHTML = "";
  //   };
  // }

  useEffect(() => {
    const s = io("http://localhost:3001");
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  // Sending Changes
  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      socket.emit("send-changes", delta);
    };
    quill.on("text-change", handler);
    return () => {
      quill.off("text-change");
    };
  }, [socket, quill]);

  // Receiving Changes
  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta) => {
      quill.updateContents(delta);
    };

    socket.on("recieve-changes", handler);
    return () => {
      socket.off("recieve-changes");
    };
  }, [socket, quill]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
    setQuill(q);
  }, []);

  return <div className="container" ref={wrapperRef}></div>;
}
