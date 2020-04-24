const NumberDrive = require("@behrenle/number-drive");

export default {
  namespaced: false,

  state: NumberDrive.Manual,

  getters: {
    getFilteredConstants: (state) => (filter) => {
      return state.constants.filter((constant) => {
        return constant.name.match(filter);
      });
    },

    getFilteredFunctions: (state) => (filter) => {
      return state.functions.filter((func) => {
        return func.name.match(filter);
      });
    }
  }
}
