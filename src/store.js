import Vue from "vue";
import Vuex from "vuex";
import i18n from "./i18n"
import storeUtils from "./storeUtils.js"

const settings    = storeUtils.settings;
const theme       = storeUtils.theme;
const NumberDrive = require("@behrenle/number-drive");

Vue.use(Vuex);

function setHtmlLang(lang) {
  document.querySelector("html").lang = lang == "de" ? "de" : "en";
}

// init lang
setHtmlLang(settings.load("language"))
i18n.locale = settings.load("language") == "de" ? "de" : "en";

// store
export default new Vuex.Store({
  state: {
    history: new NumberDrive.Script(
      settings.load("decimalMode") != null
        ? settings.load("decimalMode")
        : "german"
    ),
    decimalMode:
      settings.load("decimalMode") != null
        ? settings.load("decimalMode")
        : "german",
    language:
      settings.load("language") != null
        ? settings.load("language")
        : "de",
    mathLangTag:
      settings.load("mathLangTag") != null
        ? settings.load("mathLangTag")
        : "de",
    inputMode:
      settings.load("inputMode") != null
        ? settings.load("inputMode")
        : "simple",
    sDecimalPlaces:
      settings.load("sDecimalPlaces") != null
        ? settings.load("sDecimalPlaces")
        : 6,
    avialableThemes: {
      bright: "./themes/bright-theme.css"
    },
    currentTheme: theme.init(),
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

    setLanguage(state, lang) {
      state.language = lang == "de" ? "de" : "en";
      i18n.locale = state.language;
      setHtmlLang(state.language);
      settings.save(state);
    },

    setDecimalMode(state, mode) {
      state.history.lang = mode == "german" ? "german" : "english";
      state.decimalMode = state.history.lang;
      settings.save(state);
    },

    setInputMode(state, mode) {
      state.inputMode = mode == "simple" ? "simple" : "advanced";
      settings.save(state);
    },

    setSDecimalPlaces(state, n) {
      var p = parseInt(n) || 6;
      if (p < 1 || p > 16) {
        p = 6;
      }
      state.sDecimalPlaces = p;
      settings.save(state);
    },

    setMathLangTag(state, lang) {
      state.mathLangTag = lang == "de" ? "de" : "en";
      settings.save(state);
    },
  },
  actions: {}
});
