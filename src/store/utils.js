const settingsKey = "settings";

export const save = function(state) {
  localStorage.setItem(settingsKey, JSON.stringify(state.settings));
};

export const load = function() {
  return JSON.parse(localStorage.getItem(settingsKey)) || {};
};
