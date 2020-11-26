/* state types */
export type Language = "en" | "de";
export type SignificantDigits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;

export interface MathSettings {
    significantDigits: SignificantDigits,
    numberFormat: Language
}

export interface InterfaceSettings {
    language: Language,
    htmlLanguageAttribute: Language,
    inputMode: "advanced" | "simple",
    advanced: {
        showLineNumbers: boolean,
        copyOnClick: boolean,
    }
}

export interface Settings {
    mathSettings: MathSettings,
    interfaceSettings: InterfaceSettings
}

/* action types */
interface SetSettingsAction {
    type: "SET_SETTINGS",
    payload: Settings
}

interface SetMathSettingsAction {
    type: "SET_MATH_SETTINGS",
    payload: MathSettings
}

interface SetInterfaceSettingsAction {
    type: "SET_INTERFACE_SETTINGS",
    payload: InterfaceSettings
}

export type SettingsAction = SetSettingsAction | SetMathSettingsAction | SetInterfaceSettingsAction;