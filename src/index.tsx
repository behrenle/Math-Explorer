import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./components/app/AppWrapper";
import { register as registerServiceWorker } from "./serviceWorker";
import "./googlefonts.css";

registerServiceWorker();
ReactDOM.render(<AppWrapper />, document.getElementById("root"));
