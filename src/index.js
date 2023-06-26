import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider, teamsTheme } from "@fluentui/react-northstar";
ReactDOM.render(
  <BrowserRouter>
    <Provider theme={teamsTheme}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
