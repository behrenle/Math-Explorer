<template>
  <div class="container">
    <Inputfield />

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
      v-on:keypress="setFocus('inputfield')"
      v-shortkey="this.$store.state.shortkeys.outputfield"
      @shortkey="setFocus('outputfield')"
    />
  </div>
</template>

<script>
import Inputfield from "./Inputfield.vue";

export default {
  name: "SimpleInput",

  components: {
    Inputfield
  },

  mounted() {
    this.setFocus("inputfield");
  },

  methods: {
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
