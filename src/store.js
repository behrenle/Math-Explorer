import Vue from "vue";
import Vuex from "vuex";

const NumberDrive = require("@behrenle/number-drive");

Vue.use(Vuex);

const COOKIE_EXPIRE_DAYS = 365 * 10;
const COOKIE_SETTINGS_NAME = "settings";

function saveSettings2Cookie(state) {
  let settings = {
    decimalMode: state.decimalMode,
    inputMode: state.inputMode,
    language: state.language,
    sDecimalPlaces: state.sDecimalPlaces,
    theme: state.currentTheme,
    themePath: state.avialableThemes[
      state.currentTheme ? state.currentTheme : "bright"
    ],
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

function getThemeID(name) {
  return "theme-style-" + name;
}

function loadTheme(name, path) {
  let themeLink = document.createElement("link");
  themeLink.setAttribute("rel", "stylesheet");
  themeLink.setAttribute("href", path);
  themeLink.setAttribute("id", getThemeID(name));

  let docHead = document.querySelector("head");
  docHead.append(themeLink);
}

/*function unloadTheme(name) {
  let themeLink = document.querySelector("#" + getThemeID(name));
  let parentNode = themeLink.parentNode;
  parentNode.removeChild(themeLink);
}*/

function initTheme() {
  var theme     = loadSettingsValue("theme") ? loadSettingsValue("theme") : "bright";
  var themePath = loadSettingsValue("themePath") ? loadSettingsValue("themePath") : "./themes/bright-theme.css"
  loadTheme(theme, themePath);
  return theme;
}

export default new Vuex.Store({
  state: {
    history: new NumberDrive.Script(
      loadSettingsValue("decimalMode") != null
        ? loadSettingsValue("decimalMode")
        : "german"
    ),
    decimalMode:
      loadSettingsValue("decimalMode") != null
        ? loadSettingsValue("decimalMode")
        : "german",
    language:
      loadSettingsValue("language") != null
        ? loadSettingsValue("language")
        : "german",
    inputMode:
      loadSettingsValue("inputMode") != null
        ? loadSettingsValue("inputMode")
        : "simple",
    sDecimalPlaces:
      loadSettingsValue("sDecimalPlaces") != null
        ? loadSettingsValue("sDecimalPlaces")
        : 6,
    avialableThemes: {
      bright: "./themes/bright-theme.css"
    },
    currentTheme: initTheme(),
  },
  mutations: {
    EVALUATE_INPUT: (state, inputLine) => {
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

    setLanguage(state, lang) {
      state.language = lang == "german" ? "german" : "english";
      saveSettings2Cookie(state);
    },

    setDecimalMode(state, mode) {
      state.history.lang = mode == "german" ? "german" : "english";
      state.decimalMode = state.history.lang;
      saveSettings2Cookie(state);
    },

    setInputMode(state, mode) {
      state.inputMode = mode == "simple" ? "simple" : "advanced";
      saveSettings2Cookie(state);
    },

    setSDecimalPlaces(state, n) {
      var p = parseInt(n) || 6;
      if (p < 1 || p > 16) {
        console.log("p out of bounds!!!!");
        p = 6;
      }
      state.sDecimalPlaces = p;
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
