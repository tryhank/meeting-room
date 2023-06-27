import React from "react";
import ReactDOM from "react-dom/client";

import "@unocss/reset/eric-meyer.css";
import "virtual:uno.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
