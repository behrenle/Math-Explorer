import NumberDrive from "@behrenle/number-drive";

export default {
    namespaced: false,

    state: NumberDrive.Manual,

    getters: {
        getFilteredConstants: (state, getters, rootState) => filter => {
            const language = rootState.settings.language;
            return state.constants.filter(constant => {
                return (
                    constant.synopsis[language].match(filter) ||
                    constant.description[language].match(filter)
                );
            });
        },

        getFilteredFunctions: (state, getters, rootState) => filter => {
            const language = rootState.settings.language;
            return state.functions.filter(func => {
                return (
                    func.synopsis[language].match(filter) ||
                    func.description[language].match(filter)
                );
            });
        }
    }
};
