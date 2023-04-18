import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthModeContextProvider } from "./context/authContext";
import { DarkModeContextProvider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthModeContextProvider>
        <App />
      </AuthModeContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
