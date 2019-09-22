<template>
  <div class="settings">
    <div class="settings_element">
      <span class="label">Decimal mode:</span>
      <button class="settings_button" v-on:click="SWITCH_DECIMAL_MODE">
        {{ decimalMode }}
      </button>
    </div>
    <div class="settings_element">
      <span class="label">Language:</span>
      <button class="settings_button" v-on:click="SWITCH_LANGUAGE">
        {{ language }}
      </button>
    </div>
    <div class="settings_element">
      <span class="label">Input mode:</span>
      <button class="settings_button" v-on:click="SWITCH_INPUT_MODE">
        {{ inputMode }}
      </button>
    </div>
    <div class="settings_element">
      <span class="label">Significant decimal places:</span>
      <input
        class="settings_button number_input"
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
      language: "language",
      sDecimalPlaces: "sDecimalPlaces"
    })
  },
  methods: {
    input_sDecimalPlaces: function() {
      var n = this.$refs.input_sn_decimal.value;
      if (parseInt(n) != NaN) {
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
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  padding-top: 0;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  background-color: black;
}

.settings_element {
  border: 2px solid rgb(128,128,128);
  box-sizing: border-box;
  padding: 10px 30px;
  background-color: rgb(16,16,16);

}

.settings_button {
  float: right;
  border: 2px solid white;
  padding: 5px 10px;
  background-color: rgb(32,32,32);
  cursor: pointer;
  color: white;
  font-size: 30pt;
}

.settings_button:hover {
  background-color: orange;
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
