import {Settings, SettingsAction} from "./types";
import {loadSettings, saveSettings} from "./settingsUtils";
import i18n from "../../i18n/index";

const initialState = loadSettings();

/* todo use redux-create-reducer package */
const settingsReducer = (state = initialState, action: SettingsAction): Settings => {
    switch (action.type) {
        case "SET_SETTINGS":
            i18n.changeLanguage(action.payload.interfaceSettings.language).catch(console.error);
            return saveSettings(action.payload);

        case "SET_INTERFACE_SETTINGS":
            return settingsReducer(state, {
                type: "SET_SETTINGS",
                payload: {...state, interfaceSettings: action.payload}
            });

        case "SET_MATH_SETTINGS":
            return settingsReducer(state, {
                type: "SET_SETTINGS",
                payload: {...state, mathSettings: action.payload}
            });

        default:
            i18n.changeLanguage(state.interfaceSettings.language).catch(console.error)
            return state;
    }
};

export default settingsReducer;