import Vue from 'vue';
import Vuex from 'vuex';

const math = require("mathjs");

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        history: [],
        scope: {},
    },
    mutations: {
        EVALUATE_INPUT: (state, inputLine) => {
            let outputLine;
            try {
                outputLine = math.evaluate(inputLine, state.scope);
            }
            catch {
                outputLine = "Input not correct!"
            }
            let line = {
                input: inputLine,
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
    actions: {

    }
});