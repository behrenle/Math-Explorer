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

function formatGerman2English(str) {
  return str
    .replace(/,/g, ".")
    .replace(/;/g, ",")
    .replace(/\|/g, ";");
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
        if (state.decimalMode == "german") {
          outputLine = math.evaluate(
            formatGerman2English(inputLine),
            state.scope
          );
        } else {
          outputLine = math.evaluate(inputLine, state.scope);
        } // numberMode is "english"
      } catch {
        outputLine = "Input not correct!";
      }
      let line = {
        input: formatGerman2English(inputLine),
        output: outputLine
      };
      state.history.push(line);
    },
    CLEAR_HISTORY: state => {
      state.history = [];
    },
    CLEAR_SCOPE: state => {
      state.scope = {};
    }
  },
  actions: {}
});
