import React from "react";
import "../css/Header.css";
import { Button, IconButton } from "@material-tailwind/react";
export default function Header() {
  return (
    <div className="flex items-center">
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="dark"
        class="p-4 space-y-2 bg-white-600 rounded shadow"
      >
        <span class="block w-8 h-0.5 bg-blue-600 animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-blue-600 animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-blue-600 animate-pulse"></span>
      </button>
    </div>
  );
}
