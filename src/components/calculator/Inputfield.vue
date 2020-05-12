<template>
  <input
    id="inputfield"
    spellcheck="false"
    autocomplete="off"
    type="text"
    :lang="this.$store.state.mathLangTag"
    class="
      inputfield
      theme-calc-inputfield
      theme-focus-border"
    :placeholder="$t('calculator.input_placeholder')"
    v-on:keypress="calculate"
    ref="inputfield"
    v-model="inputStr"
    v-shortkey="this.$store.state.shortkeys.inputfield"
    @shortkey="setFocus('inputfield')"
  />
</template>

<script>
export default {
  name: "Inputfield",

  created: function() {
    this.$eventBus.$on("copy-history-text", this.setInputStr);
  },

  methods: {
    setInputStr(text) {
      this.inputStr = text;
    },

    calculate(e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        this.$store.dispatch("evaluate");
        if (this.$store.state.settings.inputMode == "simple" && this.$refs.inputfield.value.length > 0) {
          this.setFocus("outputfield");
        }
      }
    },

    setFocus(elementId) {
      document.getElementById(elementId).focus();
    }
  },

  computed: {
    inputStr: {
      get() {
        return this.$store.state.currentInput;
      },

      set(value) {
        this.$store.commit("setCurrentInput", value);
      }
    },
  }
}
</script>

<style scoped>
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
