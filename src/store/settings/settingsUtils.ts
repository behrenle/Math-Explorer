import {Settings} from "./types";

const defaultSettings: Settings = {
    mathSettings: {
        numberFormat: "inherit",
        significantDigits: 6
    },
    interfaceSettings: {
        cellLanguageTag: "inherit",
        language: "en",
        advancedInputMode: false,
        copyOnClick: true,
        showLineNumbers: true
    }
};

const localStorageSettingsKey = "settings";

export const loadSettings = (): Settings => {
    const settingsData = localStorage.getItem(localStorageSettingsKey);
    const settings = settingsData !== undefined && settingsData !== null
        ? JSON.parse(settingsData)
        : {};

    return {...defaultSettings, ...settings};
};

export const saveSettings = (settings: Settings) => {
    localStorage.removeItem(localStorageSettingsKey); // kind of unnecessary lol
    localStorage.setItem(localStorageSettingsKey, JSON.stringify(settings));
    return settings;
};

