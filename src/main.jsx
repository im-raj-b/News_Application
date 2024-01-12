import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ActiveRouteState from "./context/states/ActiveRoute";
import CountryState from "./context/states/CountryState";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <RouterProvider router={router} />
  <BrowserRouter>
    <ActiveRouteState>
      <App />
    </ActiveRouteState>
  </BrowserRouter>
);
