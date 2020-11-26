import {createStore} from "redux";
import {rootReducer} from "./index";

export default () => createStore(rootReducer);