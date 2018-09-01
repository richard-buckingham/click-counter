import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// create the model for the application
let model = { clicks: -12 };

function render() {
  ReactDOM.render(
    <App
      clicks={model.clicks}
      onClick={() => {
        model.clicks += 1;
        render();
      }}
    />,
    document.getElementById("root")
  );
}

render();

registerServiceWorker();
