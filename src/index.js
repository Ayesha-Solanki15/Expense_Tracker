import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//ReactDOM.render(<App/>, document.getElementById('root'));
//Used to render this APP component in place of element that has an id of root

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//HTML IN JS IS JSX HERE IN IT WORKS BECAUSE OF THE OVERALL SETUP AND THE TRANSFORMATION THAT'S TAKING PLACE BEHIND THE SCENES
