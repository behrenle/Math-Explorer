import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from "./components/app/AppWrapper";
import {register as registerServiceWorker} from "./serviceWorker";

registerServiceWorker();
ReactDOM.render(
    <React.StrictMode>
        <AppWrapper/>
    </React.StrictMode>,
    document.getElementById('root')
);
