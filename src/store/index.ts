import {combineReducers} from "redux";
import settingsReducer from "./settings/reducers";
import sessionReducer from "./session/reducers";

export const rootReducer = combineReducers({
    settings: settingsReducer,
    session: sessionReducer
});

export type RootState = ReturnType<typeof rootReducer>;
