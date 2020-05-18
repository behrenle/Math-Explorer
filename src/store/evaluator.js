import NumberDrive from "@behrenle/number-drive";
import { load } from "./utils";
import { defaults } from "./settings.js";

function init() {
  let settings = load();
  let script = new NumberDrive.Script(
    settings.decimalMode || defaults.decimalMode
  );
  script.setSetting("sigDigits",
    settings.decimalPlaces || defaults.decimalPlaces
  );
  return { script };
}

// Settings module for veux store
export default {
  namespaced: false,

  state: init(),

  mutations: {
    setDecimalMode(state, language) {
      state.script.setLanguage(language);
    },

    setDecimalPlaces(state, n) {
      state.script.setSetting("sigDigits", n);
    },

    evaluate(state, inputStr) {
      if (inputStr.length > 0)
        state.script.pushString(inputStr);
    },

    clearHistory(state) {
      state.script.clearHistory();
    },

    clearScope(state) {
      state.script.clearUserScope();
    },
  },

  actions: {
    evaluate({ commit, rootState }) {
      commit("evaluate", rootState.currentInput);
    }
  }
}
