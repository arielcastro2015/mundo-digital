import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App.jsx";
import { StrictMode } from "react/cjs/react.production.min";
import { ContextProvider } from "./context/context.jsx";

ReactDOM.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
  document.getElementById("root")
);
