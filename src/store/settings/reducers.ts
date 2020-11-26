import {Settings, SettingsAction} from "./types";
import {loadSettings, saveSettings} from "./settingsUtils";

const initialState = loadSettings();

const settingsReducer = (state = initialState, action: SettingsAction): Settings => {
    if (state === null || state === undefined || action === null || action === undefined)
        return initialState;

    let newSettings: Settings = initialState;
    switch (action.type) {
        case "SET_SETTINGS":
            newSettings = action.payload;
            break;

        case "SET_INTERFACE_SETTINGS":
            newSettings = {...state, interfaceSettings: action.payload};
            break;

        case "SET_MATH_SETTINGS":
            newSettings = {...state, mathSettings: action.payload};
            break;
    }
    saveSettings(newSettings);
    return newSettings;
};

export default settingsReducer;