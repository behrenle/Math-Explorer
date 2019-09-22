import Vue from "vue";
import Vuex from "vuex";
import { create, all } from "mathjs";

const math = create(all);

math.import(
  {
    s_round: function(x, n) {
      return s_round(x, n);
    },
    deg: Math.PI / 180,
    pi: Math.PI,
    sin: function(x) {
      if (x % (Math.PI * 2) === 0) {
        return 1;
      } else if (x % Math.PI === 0) {
        return -1;
      } else if (x % (Math.PI / 2) === 0) {
        return 0;
      } else {
        return Math.sin(x);
      }
    },
    cos: function(x) {
      if (x % Math.Pi === 0) {
        return 1;
      } else if (x % (2 * Math.PI) === Math.PI / 2) {
        return 0;
      } else if (x % (2 * Math.PI) === (Math.PI / 2) * 3) {
        return 0;
      } else {
        return Math.cos(x);
      }
    }
  },
  {
    wrap: true,
    override: true
  });

Vue.use(Vuex);

const COOKIE_EXPIRE_DAYS = 365 * 10;
const COOKIE_SETTINGS_NAME = "settings";

function s_round(x, n) {
  if (Array.isArray(x) === true) {
    var r = [];
    for (var i = 0; i < x.length; i++) {
      r[i] = s_round(x[i], n);
    }
    return r;
  } else if (typeof x === "number") {
    var k = 0;
    if (x != 0) {
      while (Math.abs(x) <= Math.pow(10, -k)) {
        k++;
      }
    } else {
      k = -n;
    }
    return Math.round(x * Math.pow(10,n + k)) / Math.pow(10,n + k);
  }
}

function formatGerman2English(state, str) {
  if (state.decimalMode === "german") {
    return str
      .replace(/,/g, ".")
      .replace(/;/g, ",")
      .replace(/\|/g, ";");
  } else {
    return str;
  }
}

function saveSettings2Cookie(state) {
  let settings = {
    decimalMode: state.decimalMode,
    inputMode: state.inputMode,
    language: state.language,
    sDecimalPlaces: state.sDecimalPlaces
  };
  let d = new Date();
  d.setTime(d.getTime() + COOKIE_EXPIRE_DAYS * 24 * 3600000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    COOKIE_SETTINGS_NAME +
    "=" +
    JSON.stringify(settings) +
    ";" +
    expires +
    ";path=/";
}

function loadSettingsValue(vName) {
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

export default new Vuex.Store({
  state: {
    history: [],
    scope: {},
    decimalMode:
      loadSettingsValue("decimalMode") != null
        ? loadSettingsValue("decimalMode")
        : "german",
    language:
      loadSettingsValue("language") != null
        ? loadSettingsValue("language")
        : "english",
    inputMode:
      loadSettingsValue("inputMode") != null
        ? loadSettingsValue("inputMode")
        : "advanced",
    sDecimalPlaces:
      loadSettingsValue("sDecimalPlaces") != null
        ? loadSettingsValue("sDecimalPlaces")
        : 6
  },
  mutations: {
    EVALUATE_INPUT: (state, inputLine) => {
      let outputLine;
      try {
        if (state.sDecimalPlaces > 0) {
          outputLine = math.evaluate(
            "s_round(" +
            formatGerman2English(
              state,
              inputLine
            ) + "," + state.sDecimalPlaces + ")",
            state.scope
          );
        } else {
          outputLine = math.evaluate(
            formatGerman2English(state, inputLine),
            state.scope
          );
        }
      } catch {
        outputLine = "Input not correct!";
      }
      let line = {
        input: formatGerman2English(state, inputLine),
        output: outputLine
      };
      state.history.push(line);
    },
    CLEAR_HISTORY: state => {
      state.history = [];
    },
    CLEAR_SCOPE: state => {
      state.scope = {};
    },
    SWITCH_DECIMAL_MODE: state => {
      if (state.decimalMode === "german") {
        state.decimalMode = "english";
      } else {
        state.decimalMode = "german";
      }
      saveSettings2Cookie(state);
    },
    SWITCH_LANGUAGE: state => {
      if (state.language === "german") {
        state.language = "english";
      } else {
        state.language = "german";
      }
      saveSettings2Cookie(state);
    },
    SWITCH_INPUT_MODE: state => {
      if (state.inputMode === "simple") {
        state.inputMode = "advanced";
      } else {
        state.inputMode = "simple";
      }
      saveSettings2Cookie(state);
    },
    CHANGE_S_DECIMAL_PLACES: (state, n) => {
      state.sDecimalPlaces = n;
      saveSettings2Cookie(state);
    }
  },
  actions: {}
});
