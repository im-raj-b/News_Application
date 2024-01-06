import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import NewsCards from "./components/NewsCards";
import ActiveRouteState from "./context/states/ActiveRoute";
import NavBarState from "./context/states/NavBarState";
import CountryState from "./context/states/CountryState";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/cards",
//     element: <NewsCards />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <RouterProvider router={router} />
  <BrowserRouter>
    <ActiveRouteState>
      <App />
    </ActiveRouteState>
  </BrowserRouter>
);
