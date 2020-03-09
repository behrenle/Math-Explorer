<template>
  <div class="settings theme-settings">
    <div class="settings_element theme-settings-element">
      <span class="label">Decimal mode</span>
      <button class="settings_button theme-settings-button" v-on:click="SWITCH_DECIMAL_MODE">
        {{ history.lang }}
      </button>
    </div>
    <div class="settings_element theme-settings-element">
      <span class="label">Language</span>
      <button class="settings_button theme-settings-button" v-on:click="SWITCH_LANGUAGE">
        {{ language }}
      </button>
    </div>
    <div class="settings_element theme-settings-element">
      <span class="label">Input mode</span>
      <button class="settings_button theme-settings-button" v-on:click="SWITCH_INPUT_MODE">
        {{ inputMode }}
      </button>
    </div>
    <div class="settings_element theme-settings-element">
      <span class="label">Significant decimal places</span>
      <input
        class="settings_button number_input theme-settings-button theme-settings-input"
        type="number"
        min="0"
        :value="sDecimalPlaces"
        v-on:input="input_sDecimalPlaces()"
        ref="input_sn_decimal"
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Settings",
  computed: {
    ...mapState({
      decimalMode: "decimalMode",
      inputMode: "inputMode",
      sDecimalPlaces: "sDecimalPlaces",
      language: "language",
      history: "history",
    })
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
