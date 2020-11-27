import Vue from "vue";
import Vuex from "vuex";
import settings from "./settings";
import shortkeys from "./shortkeys";
import evaluator from "./evaluator";
import manual from "./manual";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        settings,
        shortkeys,
        evaluator,
        manual
    },

    state: {
        currentInput: "",
    },

    mutations: {
        setCurrentInput(state, input) {
            state.currentInput = input;
        },
    }
});