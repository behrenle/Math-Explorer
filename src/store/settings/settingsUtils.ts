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
        showBackgroundImage: true,
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

    const state = {
        interfaceSettings: {...defaultSettings.interfaceSettings, ...settings.interfaceSettings},
        mathSettings: {...defaultSettings.mathSettings, ...settings.mathSettings},
        id: defaultSettings.id
    };

    if (settings.id != defaultSettings.id)
        saveSettings(state);

    return state;
};

export const saveSettings = (settings: Settings) => {
    localStorage.removeItem(localStorageSettingsKey); // kind of unnecessary lol
    localStorage.setItem(localStorageSettingsKey, JSON.stringify(settings));
    return settings;
};

