import { ThemeName } from "../../hooks/useTheme";

/* state types */
export type Language = "en" | "de";
export type InputForm = "simple" | "advanced" | "document";
export type FontSize = "small" | "normal" | "large";
export type LanguageOrInherit = Language | "inherit";
export type SignificantDigits =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16;

export interface MathSettings {
  significantDigits: SignificantDigits;
  numberFormat: LanguageOrInherit;
}

// todo remove advanced input mode settings
export interface InterfaceSettings {
  language: Language;
  cellLanguageTag: LanguageOrInherit;
  inputForm: InputForm;
  showLineNumbers: boolean;
  showBackgroundImage: boolean;
  copyCellContentOnClick: boolean;
  copyManualContentOnClick: boolean;
  theme: ThemeName;
  fontSize: FontSize;
}

export interface Settings {
  id: string;
  useAnalytics: boolean;
  cookieBannerHasBeenAccepted: boolean;
  mathSettings: MathSettings;
  interfaceSettings: InterfaceSettings;
}

/* action types */
interface SetSettingsAction {
  type: "SET_SETTINGS";
  payload: Settings;
}

interface SetMathSettingsAction {
  type: "SET_MATH_SETTINGS";
  payload: MathSettings;
}

interface SetInterfaceSettingsAction {
  type: "SET_INTERFACE_SETTINGS";
  payload: InterfaceSettings;
}

export type SettingsAction =
  | SetSettingsAction
  | SetMathSettingsAction
  | SetInterfaceSettingsAction;
