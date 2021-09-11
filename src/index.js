import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { io } from "socket.io-client";

// Global values
const ENDPOINT = "http://localhost:8081";
const socket = io(ENDPOINT);

ReactDOM.render(
  <React.StrictMode>
    <App socket={socket} ENDPOINT={ENDPOINT} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
