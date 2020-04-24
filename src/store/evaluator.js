const NumberDrive = require("@behrenle/number-drive");
import { load } from "./utils";
import { defaults } from "./settings.js";

// Settings module for veux store
export default {
  namespaced: false,

  state: {
    script: new NumberDrive.Script(load().decimalMode || defaults.decimalMode)
  },

  mutations: {
    setDecimalMode(state, language) {
      state.script.setLanguage(language);
    },

    setDecimalPlaces(state, n) {
      state.script.setSetting("sigDigits", n);
    }
  }
}
