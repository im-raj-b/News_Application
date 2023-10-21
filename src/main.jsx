import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import NewsCards from "./components/NewsCards";

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
    <App />
  </BrowserRouter>
);
