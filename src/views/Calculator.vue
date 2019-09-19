<template>
  <div class="calculator">
    <div class="history" ref="history">
      <HistoryObject
        v-for="line in history"
        :input="formatEnglish2German(line.input)"
        :output="formatEnglish2German(line.output)"
      >
      </HistoryObject>
    </div>
    <input
      type="text"
      class="inputfield"
      placeholder="Input"
      v-on:keypress="calculate"
      ref="inputfield"
    />
    <div class="sidemenu">
      <button class="sidemenu-button clear-history" v-on:click="clearHistory">
        Clear history
      </button>

      <button class="sidemenu-button clear-input" v-on:click="clearInput">
        Clear input
      </button>
      <button class="sidemenu-button clear-scope" v-on:click="clearScope">
        Clear scope
      </button>
      <button class="sidemenu-button clear-scope" v-on:click="clearAll">
        Clear all
      </button>
    </div>
  </div>
</template>

<script>
import HistoryObject from "@/components/HistoryObject.vue";
import { mapState, mapMutations } from "vuex";
const math = require("mathjs");

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
      numberMode: "numberMode"
    })
    // other stuff
  },
  methods: {
    formatEnglish2German: function(str) {
        if (this.numberMode == "german") {
        return str
          .toString()
          .replace(/;/g, "|")
          .replace(/,/g, ";")
          .replace(/\./g, ",");
        }
        return str
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
  grid-template-columns: auto 300px;
  grid-template-rows: auto 100px;
  grid-gap: 20px;
  padding: 20px;
  padding-top: 0;
  box-sizing: border-box;
}

.history {
  background-color: rgb(8, 8, 8);
  width: 100%;
  height: 100%;
  height: 100%;
  border: 2px solid white;
  overflow-y: scroll;
  box-sizing: border-box;
  scrollbar-color: white black;
}

.inputfield {
  background-color: rgb(32, 32, 32);
  width: 100%;
  height: 100px;
  border: 2px solid white;
  font-size: 32pt;
  color: white;
  padding: 10px;
  float: left;
  font-family: Monospace;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.sidemenu-button {
  width: 100%;
  margin: 0;
  height: 80px;
  float: right;
  font-size: 30pt;
  background-color: rgb(32, 32, 32);
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: white;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border: 2px solid white;
}

.sidemenu-button:hover {
  background-color: orange;
}

.sidemenu-button:focus {
  border: 2px solid orange;
}

.sidemenu {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
}

.inputfield:focus {
  border: 2px solid orange;
}
</style>
