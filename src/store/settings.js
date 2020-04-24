import { save, load } from "./utils";

// default settings
const defaults = {
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
  return state;
}

// Settings module for veux store
export default {
  namespaced: true,
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
