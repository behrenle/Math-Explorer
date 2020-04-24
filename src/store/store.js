import Vue from "vue";
import Vuex from "vuex";
import settings from "./settings";
import shortkeys from "./shortkeys";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    settings,
    shortkeys
  },

  state: {
    currentInput: "",
    script: new NumberDrive.Script(),
  },

  mutations: {
    setCurrentInput(state, input) {
      state.currentInput = input;
    },
  }
});
