import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./components/app/AppWrapper";
import { register as registerServiceWorker } from "./serviceWorker";
import "@fontsource/jetbrains-mono";
import "@fontsource/roboto";

registerServiceWorker();
ReactDOM.render(<AppWrapper />, document.getElementById("root"));
