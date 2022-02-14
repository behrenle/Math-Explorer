import { createStore } from "redux";
import { rootReducer } from "./index";

const initStore = () => createStore(rootReducer);
export default initStore;
