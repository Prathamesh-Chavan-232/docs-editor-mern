import React from "react";
import "./css/index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./testing/reportWebVitals";
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

reportWebVitals();
