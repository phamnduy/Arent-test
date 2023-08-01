// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./contexts/app-provider";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import { DialogProvider } from "./contexts/dialog-provider";
import ThemeProvider from "./theme/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider>
        <DialogProvider>
          <App />

        </DialogProvider>
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
