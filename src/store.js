import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        history: [],
    },
    mutations: {
        ADD_HISTORY_LINE: (state, line) => {
            state.history.push(line);
        }
    },
    actions: {

    }
});