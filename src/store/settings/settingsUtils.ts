import {Settings} from "./types";

const defaultSettings: Settings = {
    mathSettings: {
        numberFormat: "en",
        significantDigits: 6
    },
    interfaceSettings: {
        htmlLanguageAttribute: "en",
        language: "en",
        inputMode: "simple",
        advanced: {
            copyOnClick: true,
            showLineNumbers: true
        },
    }
};

const localStorageSettingsKey = "settings";
export const loadSettings = (): Settings => {
    const settingsData = localStorage.getItem(localStorageSettingsKey);
    console.log(settingsData);
    console.log(typeof settingsData);
    const settings = settingsData !== undefined && settingsData !== null
        ? JSON.parse(settingsData)
        : {};

    return {...defaultSettings, ...settings};
};

export const saveSettings = (settings: Settings) => {
    localStorage.removeItem(localStorageSettingsKey); // kind of unnecessary lol
    localStorage.setItem(localStorageSettingsKey, JSON.stringify(settings));
};

