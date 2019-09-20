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

function formatGerman2English(state, str) {
  if (state.decimalMode === "german") {
    return str
      .replace(/,/g, ".")
      .replace(/;/g, ",")
      .replace(/\|/g, ";");
  } else {
    return str
  }
}

export default new Vuex.Store({
  state: {
    history: [],
    scope: {},
    decimalMode: "german",
    language: "english",
    inputMode: "advanced",

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
        state.decimalMode = "english"
      } else {
        state.decimalMode = "german"
      }
    },
    SWITCH_LANGUAGE: state => {
      if (state.language === "german") {
        state.language = "english"
      } else {
        state.language = "german"
      }
    },
    SWITCH_INPUT_MODE: state => {
      if (state.inputMode === "simple") {
        state.inputMode = "advanced"
      } else {
        state.inputMode = "simple"
      }
    }
  },
  actions: {}
});
