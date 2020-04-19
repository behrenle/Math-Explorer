<template>
  <div class="calculator">
    <AdvancedInput v-if="inputMode === 'advanced'" />

    <div v-if="inputMode === 'simple'" class="simple-container">
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
        id="simple-outputfield"
        :lang="this.$store.state.mathLangTag"
        class="
          outputfield
          theme-calc-inputfield
          theme-focus-border"
        :value="getLastOutput()"
        readonly="readonly"
        :placeholder="$t('calculator.output_placeholder')"
        v-on:keypress="returnFocus"
      />
    </div>

    <SideMenu></SideMenu>
  </div>
</template>

<script>
//import HistoryObject from "@/components/HistoryObject.vue";
import AdvancedInput from "../components/calculator/AdvancedInput.vue";
import SideMenu from "../components/calculator/SideMenu.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Calculator",
  components: {
    AdvancedInput,
    SideMenu
  },

  created: function() {
    this.$eventBus.$on("copy-history-text", this.copyHistoryText);
  },

  mounted: function() {
    this.focusInput();
  },

  computed: {
    ...mapState({
      history: "history",
      inputMode: "inputMode"
    })
  },

  methods: {
    test() {
      alert("test");
    },

    getLastOutput() {
      if (this.history.getItems().length > 0) {
        return this.history.getItems()[this.history.getItems().length - 1].output;
      } else {
        return "";
      }
    },

    copyHistoryText(e) {
      this.$refs.inputfield.value = e;
    },

    calculate(e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        this.evaluateInput(this.$refs.inputfield.value);
        if (this.inputMode === "simple") {
          document.getElementById("simple-outputfield").focus();
        }
      }
    },

    returnFocus(e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        this.focusInput();
      }
    },

    focusInput() {
      document.getElementById("inputfield").focus();
    },

    evaluateInput(input) {
      this.$store.commit("evaluateInput",input);
    },
  }
};
</script>

<style scoped>
.calculator {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 375px;
  padding: 0px;
  padding-top: 0;
  box-sizing: border-box;
  overflow-y: hidden;
}

@media only screen and (max-width: 1300px) {
  .calculator {
    grid-template-columns: auto;
    grid-template-rows: 120px auto;
  }
}

.simple-container {
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
