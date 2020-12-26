import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from "./components/app/AppWrapper";
import {register as registerServiceWorker} from "./serviceWorker";
import "./googlefonts.css";
import {initialize} from "react-ga";
import {id as analyticsId} from "./analytics.json";

initialize(analyticsId, {
    //debug: true,
    gaOptions: {
        siteSpeedSampleRate: 100
    }
});

registerServiceWorker();
ReactDOM.render(
    <AppWrapper/>,
    document.getElementById('root')
);
