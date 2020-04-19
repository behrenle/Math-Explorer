<template>
  <div class="container">
    <input
      type="text"
      id="inputfield"
      :lang="this.$store.state.mathLangTag"
      class="
        inputfield
        theme-calc-inputfield
        theme-focus-border"
      :placeholder="$t('calculator.input_placeholder')"
      v-on:keypress="calculate"
      ref="inputfield"
      v-shortkey.once="['ctrl', 'o']"
      @shortkey="test()"
    />

    <input
      id="outputfield"
      :lang="this.$store.state.mathLangTag"
      class="
        outputfield
        theme-calc-inputfield
        theme-focus-border"
      :value="getLastOutput()"
      readonly="readonly"
      :placeholder="$t('calculator.output_placeholder')"
      v-on:keypress="this.setFocus('inputfield')"
    />
  </div>
</template>

<script>
export default {
  name: "SimpleInput",

  mounted() {
    this.setFocus("inputfield");
  },

  methods: {
    calculate(e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        this.$store.commit("evaluateInput", this.$refs.inputfield.value);
        this.setFocus("outputfield")
      }
    },

    setFocus(elementId) {
      document.getElementById(elementId).focus();
    },

    getLastOutput() {
      let items = this.$store.state.history.getItems();
      if (items.length > 0) {
        return items[items.length - 1].output;
      } else {
        return "";
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 100px 100px;
  grid-gap: 20px;
  padding: 20px;
  padding-left: 10px;
}

.inputfield {
  width: auto;
  height: 100px;
  font-size: 32pt;
  padding: 10px;
  margin-left: 10px;
  float: left;
  font-family: Verdana, Geneva, sans-serif;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.outputfield {
  font-family: Verdana, Geneva, sans-serif;
  padding: 10px;
  text-align: left;
  font-size: 32pt;
  height: 100px;
  box-sizing: border-box;
  width: auto;
  margin-left: 10px;
}
</style>
