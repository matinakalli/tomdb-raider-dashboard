import { Provider } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import "./index.css";
import themeStore from "./stores/themeStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider themeStore={themeStore}>
      <Dashboard />
    </Provider>
  </BrowserRouter>
);
