import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from "./components/app/AppWrapper";
import {register as registerServiceWorker} from "./serviceWorker";
import "./googlefonts.css";
import {initialize, event} from "react-ga";
import {id as analyticsId} from "./analytics.json";

initialize(analyticsId, {
    debug: true,
    gaOptions: {
        siteSpeedSampleRate: 100
    }
});

event({
    action: "Test",
    category: "Tests"
});

registerServiceWorker();
ReactDOM.render(
    <AppWrapper/>,
    document.getElementById('root')
);
