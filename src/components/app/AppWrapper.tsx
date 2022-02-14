import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import initStore from "../../store/createStore";

const store = initStore();

const AppWrapper: React.FC = () => {
  useEffect(() => {
    window.addEventListener("beforeunload", (event) => {
      event.returnValue = "";
    });
  }, []);

  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
};

export default AppWrapper;
