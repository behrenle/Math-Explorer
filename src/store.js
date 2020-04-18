import Vue from "vue";
import Vuex from "vuex";
import storeUtils from "./storeUtils.js"

const settings    = storeUtils.settings;
const theme       = storeUtils.theme;
const misc        = storeUtils.misc;

Vue.use(Vuex);

// store
export default new Vuex.Store({
  state: storeUtils.initState(),
  mutations: {
    evaluateInput: function(state, inputLine) {
      state.history.pushString(inputLine);
    },

    clearHistory: function(state) {
      state.history.clearHistory();
    },

    clearScope: function(state) {
      state.history.clearUserScope();
    },

    setLanguage(state, lang) {
      state.language = lang == "de" ? "de" : "en";
      misc.setLanguage(state.language);
      misc.setHtmlLang(state.language);
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

    setCopyOnClick(state, value) {
      state.copyOnClick = value ? true : false;
      settings.save(state);
    },

    setShowCellNumbers(state, value) {
      state.showCellNumbers = value ? true : false;
      settings.save(state);
    }
  },
  actions: {}
});
