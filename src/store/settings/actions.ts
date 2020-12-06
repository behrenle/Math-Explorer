import {InterfaceSettings, MathSettings, Settings, SettingsAction} from "./types";

export const setSettings = (settings: Settings): SettingsAction => {
    return {
        type: "SET_SETTINGS",
        payload: settings
    };
};

export const setMathSettings = (mathSettings: MathSettings): SettingsAction => {
    return {
        type: "SET_MATH_SETTINGS",
        payload: mathSettings
    };
};

export const setInterfaceSettings = (interfaceSettings: InterfaceSettings): SettingsAction => {
    return {
        type: "SET_INTERFACE_SETTINGS",
        payload: interfaceSettings
    };
};