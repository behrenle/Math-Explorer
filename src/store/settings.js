import { save, load } from "./utils";
import i18n from "../i18n";

// default settings
export const defaults = {
  decimalMode: "de",
  language: "de",
  mathLangTag: "de",
  inputMode: "simple",
  decimalPlaces: 6,
  theme: "bright",
  copyOnClick: true,
  showCellNumbers: true,
};

// state initializer
function init() {
  let settings = load();
  let state    = {};
  for (let key of Object.keys(defaults)) {
    state[key] = settings[key] || defaults[key];
  }
  i18n.locale = state.language;
  return state;
}

// Settings module for veux store
export default {
  namespaced: false,
  state: init(),
  munations: {
    setDecimalMode(state, mode) {
      state.decimalMode = mode;
    },

    setLanguage(state, language) {
      state.language = language;
    },

    setMathLangTag(state, mlt) {
      state.mathLangTag = mlt;
    },

    setInputMode(state, mode) {
      state.inputMode = mode;
    },

    setDecimalPlaces(state, n) {
      state.decimalPlaces = n;
    },

    setTheme(state, theme) {
      state.theme = theme;
    },

    setCopyOnClick(state, mode) {
      state.copyOnClick = mode;
    },

    setShowCellNumbers(state, mode) {
      state.showCellNumbers = mode;
    }
  },
};
