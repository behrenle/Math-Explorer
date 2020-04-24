const settingsKey = "settings";

export const save = function(state) {
  localStorage.setItem(settingsKey, JSON.stringify(state.settings));
};

export const load = function() {
  return JSON.parse(localStorage.getItem(settingsKey)) || {};
};

function getThemeId(name) {
  return "theme-style-" + name;
}

export const loadTheme = function(name, path) {
  let themeLink = document.createElement("link");
  themeLink.setAttribute("rel", "stylesheet");
  themeLink.setAttribute("href", path);
  themeLink.setAttribute("id", getThemeId(name));
  let docHead = document.querySelector("head");
  docHead.append(themeLink);
};

export const unloadTheme = function(name) {
  let themeLink = document.querySelector("#" + getThemeId(name));
  let parentNode = themeLink.parentNode;
  parentNode.removeChild(themeLink);
};
