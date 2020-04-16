<template>
  <div class="calculator">
    <div id="history" class="history" ref="history" v-if="inputMode === 'advanced'">
      <HistoryObject
        v-for="item in history.getItems()"
        v-bind:key="item.index"
        :input="item.input"
        :output="item.output"
        :index="item.index"
      >
      </HistoryObject>
    </div>
    <input
      v-if="inputMode === 'advanced'"
      type="text"
      :lang="this.$store.state.mathLangTag"
      class="inputfield theme-calc-inputfield theme-focus-border"
      :placeholder="$t('calculator.input_placeholder')"
      v-on:keypress="calculate"
      ref="inputfield"
    />
    <div v-if="inputMode === 'simple'" class="simpleContainer">
      <input
        type="text"
        id="inputfield"
        :lang="this.$store.state.mathLangTag"
        class="inputfield theme-calc-inputfield theme-focus-border"
        :placeholder="$t('calculator.input_placeholder')"
        v-on:keypress="calculate"
        ref="inputfield"
        v-shortkey.once="['ctrl', 'o']"
        @shortkey="test()"
      />
      <input
        id="simple-outputfield"
        :lang="this.$store.state.mathLangTag"
        class="outputfield theme-calc-inputfield theme-focus-border"
        :value="getLastOutput()"
        readonly="readonly"
        :placeholder="$t('calculator.output_placeholder')"
        v-on:keypress="returnFocus"
      />
    </div>
    <div class="sidemenu theme-calc-sidemenu">
      <button
        class="sidemenu-button clear-history theme-calc-button theme-focus-border"
        v-if="inputMode === 'advanced'"
        v-on:click="clearHistory"
      >
        {{ $t("calculator.clear_history") }}
      </button>

      <button
        class="sidemenu-button clear-history theme-calc-button theme-focus-border"
        v-if="inputMode === 'simple'"
        v-on:click="clearHistory"
      >
        {{ $t("calculator.clear_output") }}
      </button>

      <button class="sidemenu-button clear-input theme-calc-button theme-focus-border" v-on:click="clearInput">
        {{ $t("calculator.clear_input") }}
      </button>

      <button class="sidemenu-button clear-scope theme-calc-button theme-focus-border" v-on:click="clearScope">
        {{ $t("calculator.clear_memory") }}
      </button>

      <button class="sidemenu-button clear-scope theme-calc-button theme-focus-border" v-on:click="clearAll">
        {{ $t("calculator.clear_all") }}
      </button>
    </div>
  </div>
</template>

<script>
import HistoryObject from "@/components/HistoryObject.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Calculator",
  components: {
    HistoryObject
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
      decimalMode: "decimalMode",
      inputMode: "inputMode"
    })
    // other stuff
  },
  methods: {
    test: function() {
      alert("test");
    },
    getLastOutput: function() {
      if (this.history.getItems().length > 0) {
        return this.history.getItems()[this.history.getItems().length - 1].output;
      } else {
        return "";
      }
    },
    copyHistoryText: function(e) {
      this.$refs.inputfield.value = e;
    },
    calculate: function(e) {
      var key = e.which || e.keyCode;
      console.log("store", this.$store);
      if (key === 13) {
        // 13 is enter
        this.evaluateInput(this.$refs.inputfield.value);

        if (this.inputMode === "simple") {
          document.getElementById("simple-outputfield").focus();
        }
      }
    },
    returnFocus: function(e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        this.focusInput();
      }
    },
    focusInput: function() {
      document.getElementById("inputfield").focus();
    },
    clearHistory: function() {
      this.$store.commit("clearHistory");
      this.focusInput();
    },
    clearInput: function() {
      this.$refs.inputfield.value = "";
      this.focusInput();
    },
    clearScope: function() {
      this.$store.commit("clearScope");
      this.focusInput();
    },
    evaluateInput(input) {
      this.$store.commit("evaluateInput",input);
    },
    clearAll: function() {
      this.clearHistory();
      this.clearScope();
      this.clearInput();
      this.focusInput();
    }
  }
};
</script>

<style scoped>
.calculator {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 22%;
  grid-template-rows: auto 120px;
  grid-gap: 20px;
  padding: 0px;
  padding-top: 0;
  box-sizing: border-box;
}

.history {
  width: 100%;
  margin-top: 20px;
  height: calc(100% - 20px);
  overflow-y: scroll;
  box-sizing: border-box;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

.history::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}

.simpleContainer {
  padding: 0;
  margin: 20px 0 0 0;
}

.inputfield {
  width: calc(100% - 20px);
  height: 100px;
  font-size: 32pt;
  padding: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  float: left;
  font-family: Verdana, Geneva, sans-serif;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.sidemenu-button {
  width: 100%;
  margin: 0;
  height: 120px;
  float: right;
  font-size: 30pt;
  padding-bottom: 10px;
  margin-top: 0px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  text-align: left;
  padding-left: 15%;
  outline: none;
}

.sidemenu {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
}

.outputfield {
  font-family: Verdana, Geneva, sans-serif;
  padding: 10px;
  text-align: left;
  font-size: 32pt;
  margin-top: 20px;
  position: relative;
  height: 100px;
  box-sizing: border-box;
  width: calc(100% - 20px);
  left: 10px;
  margin: 0;
}
</style>
