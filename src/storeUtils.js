import i18n from "./i18n"

const NumberDrive          = require("@behrenle/number-drive");
const COOKIE_EXPIRE_DAYS   = 365 * 10;
const COOKIE_SETTINGS_NAME = "settings";

const settings = {
  save: function(state) {
    let settings = {
      decimalMode: state.decimalMode,
      inputMode: state.inputMode,
      language: state.language,
      sDecimalPlaces: state.sDecimalPlaces,
      theme: state.currentTheme,
      themePath: state.avialableThemes[
        state.currentTheme ? state.currentTheme : "bright"
      ],
      mathLangTag: state.mathLangTag ? state.mathLangTag : "de"
    };
    let d = new Date();
    d.setTime(d.getTime() + COOKIE_EXPIRE_DAYS * 24 * 3600000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = COOKIE_SETTINGS_NAME + "=" +
      JSON.stringify(settings) + ";" +
      expires + ";path=/";
  },

  load: function(vName) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieParts = decodedCookie.split(";");
    for (var i = 0; i < cookieParts.length; i++) {
      let cookiePart = cookieParts[i];
      while (cookiePart.charAt(0) === " ") {
        cookiePart = cookiePart.substring(1);
      }
      if (cookiePart.indexOf(COOKIE_SETTINGS_NAME + "=") === 0) {
        let settings = JSON.parse(
          cookiePart.substring(
            (COOKIE_SETTINGS_NAME + "=").length,
            cookiePart.length
          )
        );
        return settings[vName];
      }
    }
  }
}


const theme = {
  getID: function(name) {
    return "theme-style-" + name;
  },

  load: function(name, path) {
    let themeLink = document.createElement("link");
    themeLink.setAttribute("rel", "stylesheet");
    themeLink.setAttribute("href", path);
    themeLink.setAttribute("id", this.getID(name));

    let docHead = document.querySelector("head");
    docHead.append(themeLink);
  },

  unload: function(name) {
    let themeLink = document.querySelector("#" + this.getID(name));
    let parentNode = themeLink.parentNode;
    parentNode.removeChild(themeLink);
  },

  init: function() {
    var theme     = settings.load("theme") ? settings.load("theme") : "bright";
    var themePath = settings.load("themePath") ? settings.load("themePath") : "./themes/bright-theme.css"
    this.load(theme, themePath);
    return theme;
  }
}

const misc = {
  setHtmlLang: function(lang) {
    document.querySelector("html").lang = lang == "de" ? "de" : "en";
  },

  setLanguage(lang) {
    i18n.lang = lang == "de" ? "de" : "en";
  },
}

function initSetting(name, defaultValue) {
  return settings.load(name) != null
        ? settings.load(name)
        : defaultValue;
}

function initState() {
  let decimalMode = initSetting("decimalMode", "german");
  let language    = initSetting("language", "de");

  i18n.locale = language;
  misc.setHtmlLang(language);

  return {
    history: new NumberDrive.Script(decimalMode),
    decimalMode: decimalMode,
    language: language,
    mathLangTag: initSetting("mathLangTag", "de"),
    inputMode: initSetting("inputMode", "simple"),
    sDecimalPlaces: initSetting("sDecimalPlaces", 6),
    avialableThemes: {
      bright: "./themes/bright-theme.css"
    },
    currentTheme: theme.init()
  };
}

export default {
  settings: settings,
  theme: theme,
  misc: misc,
  initState: initState
};
