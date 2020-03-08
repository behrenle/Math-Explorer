import Vue from "vue";
import Vuex from "vuex";

const NumberDrive = require("@behrenle/number-drive");

Vue.use(Vuex);

const COOKIE_EXPIRE_DAYS = 365 * 10;
const COOKIE_SETTINGS_NAME = "settings";

/*function formatGerman2English(state, str) {
  if (state.decimalMode === "german") {
    return str
      .replace(/,/g, ".")
      .replace(/;/g, ",")
      .replace(/\|/g, ";");
  } else {
    return str;
  }
}*/

function saveSettings2Cookie(state) {
  let settings = {
    decimalMode: state.decimalMode,
    inputMode: state.inputMode,
    language: state.language,
    sDecimalPlaces: state.sDecimalPlaces
  };
  let d = new Date();
  d.setTime(d.getTime() + COOKIE_EXPIRE_DAYS * 24 * 3600000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    COOKIE_SETTINGS_NAME +
    "=" +
    JSON.stringify(settings) +
    ";" +
    expires +
    ";path=/";
}

function loadSettingsValue(vName) {
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieParts = decodedCookie.split(";");
  for (var i = 0; i < cookieParts.length; i++) {
    let cookiePart = cookieParts[i];
    while (cookiePart.charAt(0) === " ") {
      cookiePart = cookiePart.substring(1);
    }
    if (cookiePart.indexOf(COOKIE_SETTINGS_NAME + "=") === 0) {
      let settings = JSON.parse(
        cookiePart.substring(
          (COOKIE_SETTINGS_NAME + "=").length,
          cookiePart.length
        )
      );
      return settings[vName];
    }
  }
}

export default new Vuex.Store({
  state: {
    history: new NumberDrive.Script(
      loadSettingsValue("decimalMode") != null
        ? loadSettingsValue("decimalMode")
        : "german"
    ),
    scope: {},
    decimalMode:
      loadSettingsValue("decimalMode") != null
        ? loadSettingsValue("decimalMode")
        : "german",
    language:
      loadSettingsValue("language") != null
        ? loadSettingsValue("language")
        : "english",
    inputMode:
      loadSettingsValue("inputMode") != null
        ? loadSettingsValue("inputMode")
        : "advanced",
    sDecimalPlaces:
      loadSettingsValue("sDecimalPlaces") != null
        ? loadSettingsValue("sDecimalPlaces")
        : 6
  },
  mutations: {
    EVALUATE_INPUT: (state, inputLine) => {
      console.log("inputstr: ", inputLine);
      state.history.pushString(inputLine);
    },

    CLEAR_HISTORY: state => {
      state.history.clearHistory();
    },

    CLEAR_SCOPE: state => {
      state.history.clearUserScope();
    },

    SWITCH_LANGUAGE: state => {
      if (state.language === "german") {
        state.language = "english";
      } else {
        state.language = "german";
      }
      saveSettings2Cookie(state);
    },

    SWITCH_DECIMAL_MODE: state => {
      if (state.history.lang === "german") {
        state.history.lang = "english";
      } else {
        state.history.lang = "german";
      }
      saveSettings2Cookie(state);
    },

    SWITCH_INPUT_MODE: state => {
      if (state.inputMode === "simple") {
        state.inputMode = "advanced";
      } else {
        state.inputMode = "simple";
      }
      saveSettings2Cookie(state);
    },

    CHANGE_S_DECIMAL_PLACES: (state, n) => {
      state.sDecimalPlaces = n;
      saveSettings2Cookie(state);
    }
  },
  actions: {}
});
