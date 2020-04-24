const settingsKey = "settings";

export save(state) {
  localStorage.setItem(settingsKey, JSON.stringify(state.settings));
}

export load() {
  return JSON.parse(localStorage.getItem(settingsKey)) || {};
}
