import {Settings, SettingsAction} from "./types";
import {loadSettings, saveSettings} from "./settingsUtils";

const initialState = loadSettings();

/* todo use redux-create-reducer package */
const settingsReducer = (state = initialState, action: SettingsAction): Settings => {
    switch (action.type) {
        case "SET_SETTINGS":
            return saveSettings(action.payload);

        case "SET_INTERFACE_SETTINGS":
            return saveSettings({...state, interfaceSettings: action.payload});

        case "SET_MATH_SETTINGS":
            return saveSettings({...state, mathSettings: action.payload});

        default:
            return state;
    }
};

export default settingsReducer;