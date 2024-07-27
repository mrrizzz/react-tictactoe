import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./components/Game.jsx";
// import HomePage from "./practice/try1.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Game />
    {/* <App /> */}
    {/* <HomePage /> */}
  </React.StrictMode>,
);
