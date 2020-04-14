<template>
  <div class="settings theme-settings">
    <div class="settings_element theme-settings-element">
      <span class="label">Decimal mode</span>
      <select v-model="decimalMode" class="settings_button theme-settings-button">
        <option value="german">Deutsch</option>
        <option value="english">Engish</option>
      </select>
    </div>

    <div class="settings_element theme-settings-element">
      <span class="label">Language</span>
      <select v-model="language" class="settings_button theme-settings-button">
        <option value="de">Deutsch</option>
        <option value="en">Engish</option>
      </select>
    </div>

    <div class="settings_element theme-settings-element">
      <span class="label">Input mode</span>
      <select v-model="inputMode" class="settings_button theme-settings-button">
        <option value="simple">Simple</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>

    <div class="settings_element theme-settings-element">
      <span class="label">Significant decimal places</span>
      <select v-model="sDecimalPlaces" class="settings_button theme-settings-button">
        <option :value="i" v-for="i in 16">{{i}}</option>

      </select>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Settings",
  computed: {
    ...mapState({
      //decimalMode: "decimalMode",
      //inputMode: "inputMode",
      //sDecimalPlaces: "sDecimalPlaces",
      //language: "language",
    }),
    language: {
      get() {
        return this.$store.state.language;
      },
      set(value) {
        this.$store.commit("setLanguage", value);
      }
    },

    decimalMode: {
      get() {
        return this.$store.state.decimalMode;
      },
      set(value) {
        this.$store.commit("setDecimalMode", value);
      }
    },

    inputMode: {
      get() {
        return this.$store.state.inputMode;
      },
      set(value) {
        this.$store.commit("setInputMode", value);
      }
    },

    sDecimalPlaces: {
      get() {
        return this.$store.state.sDecimalPlaces;
      },
      set(value) {
        this.$store.commit("setSDecimalPlaces", value);
      }
    },
  },
  methods: {
    input_sDecimalPlaces: function() {
      var n = this.$refs.input_sn_decimal.value;
      if (!isNaN(parseInt(n))) {
        console.log("call");
        this.CHANGE_S_DECIMAL_PLACES(parseInt(n));
      }
    },
    ...mapMutations([
      "SWITCH_DECIMAL_MODE",
      "SWITCH_INPUT_MODE",
      "SWITCH_LANGUAGE",
      "CHANGE_S_DECIMAL_PLACES"
    ])
  }
};
</script>

<style scoped>
.settings {
  color: white;
  font-size: 30pt;
  text-align: left;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  padding: 0;
  box-sizing: border-box;
  margin: 20px;
}

.settings_element {
  box-sizing: border-box;
  padding: 10px 30px;
}

.settings_button {
  float: right;
  padding: 10px 10px;
  min-width: 250px;
  cursor: pointer;
  font-size: 30pt;
  box-sizing: border-box;
  outline: none;
}

.label {
  float: left;
  padding: 5px 0px;
}

.number_input {
  width: 150px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance:textfield; /* Firefox */
}
</style>
