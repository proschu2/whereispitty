import "./index.css";
import "./fonts/fonts.css";

import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PitMap from "./components/PitMap";
import Day from "./components/Day";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PitMap />,
  },
  { path: "/day", element: <Day /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
