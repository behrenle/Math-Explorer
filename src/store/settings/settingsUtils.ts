import {Settings} from "./types";
import {storeId} from "./storeId.json";

const defaultSettings: Settings = {
    id: storeId,
    mathSettings: {
        numberFormat: "inherit",
        significantDigits: 6
    },
    interfaceSettings: {
        cellLanguageTag: "inherit",
        language: "de",
        inputForm: "simple",
        copyManualContentOnClick: true,
        copyCellContentOnClick: true,
        showLineNumbers: true,
        theme: "light",
        fontSize: "normal"
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

