<template>
  <div class="calculator">
    <div id = "history" class="history" ref="history" v-if="inputMode === 'advanced'">
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
      class="inputfield theme-calc-inputfield"
      placeholder="Input"
      v-on:keypress="calculate"
      ref="inputfield"
    />
    <div v-if="inputMode === 'simple'" class="simpleContainer">
      <input
        type="text"
        class="inputfield theme-calc-inputfield"
        placeholder="Input"
        v-on:keypress="calculate"
        ref="inputfield"
      />
      <input
        class="outputfield theme-calc-inputfield"
        :value="getLastOutput()"
        readonly="readonly"
        placeholder="Output"
      />
    </div>
    <div class="sidemenu theme-calc-sidemenu">
      <button
        class="sidemenu-button clear-history theme-calc-button"
        v-if="inputMode === 'advanced'"
        v-on:click="clearHistory"
      >
        Clear history
      </button>
      <button
        class="sidemenu-button clear-history theme-calc-button"
        v-if="inputMode === 'simple'"
        v-on:click="clearHistory"
      >
        Clear output
      </button>

      <button class="sidemenu-button clear-input theme-calc-button" v-on:click="clearInput">
        Clear input
      </button>
      <button class="sidemenu-button clear-scope theme-calc-button" v-on:click="clearScope">
        Clear memory
      </button>
      <button class="sidemenu-button clear-scope theme-calc-button" v-on:click="clearAll">
        Clear all
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
  computed: {
    ...mapState({
      history: "history",
      decimalMode: "decimalMode",
      inputMode: "inputMode"
    })
    // other stuff
  },
  methods: {
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
      if (key === 13) {
        // 13 is enter
        this.evaluateInput(this.$refs.inputfield.value);
      }
      var historyObj = document.getElementById("history");
      if (historyObj) {
        historyObj.scrollTop = historyObj.scrollHeight;
      }
    },
    clearHistory: function() {
      this.CLEAR_HISTORY();
    },
    clearInput: function() {
      this.$refs.inputfield.value = "";
    },
    clearScope: function() {
      this.CLEAR_SCOPE();
    },
    ...mapMutations(["EVALUATE_INPUT", "CLEAR_HISTORY", "CLEAR_SCOPE"]),
    evaluateInput(input) {
      this.EVALUATE_INPUT(input);
    },
    clearAll: function() {
      this.clearHistory();
      this.clearScope();
      this.clearInput();
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
  font-family: Monospace;
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
