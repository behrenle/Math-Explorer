<template>
  <div class="container">
    <History></History>
    <input
      type="text"
      :lang="this.$store.state.mathLangTag"
      class="
        inputfield
        theme-calc-inputfield
        theme-focus-border"
      :placeholder="$t('calculator.input_placeholder')"
      v-on:keypress="calculate"
      ref="inputfield"
    />
  </div>
</template>

<script>
import History from "./advancedInput/History.vue";

export default {
  name: "AdvancedInput",

  components: {
    History
  },

  methods: {
    calculate(e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        this.$store.commit("evaluateInput", this.$refs.inputfield.value);
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 100px;
  grid-gap: 10px;
  padding: 20px;
  padding-left: 10px;
  box-sizing: border-box;
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
</style>
