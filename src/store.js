import Vue from "vue";
import Vuex from "vuex";
import { create, all } from "mathjs";

const math = create(all);

/*
math.import({
    // import stuff here
})
 */

Vue.use(Vuex);

const COOKIE_EXPIRE_DAYS = 32;
const COOKIE_SETTINGS_NAME = "settings";

function formatGerman2English(state, str) {
  if (state.decimalMode === "german") {
    return str
      .replace(/,/g, ".")
      .replace(/;/g, ",")
      .replace(/\|/g, ";");
  } else {
    return str;
  }
}

function saveSettings2Cookie(state) {
  let settings = {
    decimalMode: state.decimalMode,
    inputMode: state.inputMode,
    language: state.language
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
    history: [],
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
        : "advanced"
  },
  mutations: {
    EVALUATE_INPUT: (state, inputLine) => {
      let outputLine;
      try {
        outputLine = math.evaluate(
          formatGerman2English(state, inputLine),
          state.scope
        );
      } catch {
        outputLine = "Input not correct!";
      }
      let line = {
        input: formatGerman2English(state, inputLine),
        output: outputLine
      };
      state.history.push(line);
    },
    CLEAR_HISTORY: state => {
      state.history = [];
    },
    CLEAR_SCOPE: state => {
      state.scope = {};
    },
    SWITCH_DECIMAL_MODE: state => {
      if (state.decimalMode === "german") {
        state.decimalMode = "english";
      } else {
        state.decimalMode = "german";
      }
      saveSettings2Cookie(state);
    },
    SWITCH_LANGUAGE: state => {
      if (state.language === "german") {
        state.language = "english";
      } else {
        state.language = "german";
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
    }
  },
  actions: {}
});
