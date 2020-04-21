<template>
  <div class="container">
    <History></History>
    <input
      id="inputfield"
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

  created() {
    this.$eventBus.$on("copy-history-text", e => {
      document.getElementById("inputfield").value = e;
    });
  },

  mounted() {
    this.setFocus("inputfield");
    document.getElementById("inputfield").value = this.$store.state.currentInput
  },

  methods: {
    calculate(e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        this.$store.commit("evaluateInput", this.$refs.inputfield.value);
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
  },
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
