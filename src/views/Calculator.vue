<template>
  <div class="calculator">
    <div class="history" ref="history" v-if="inputMode === 'advanced'">
      <HistoryObject
        v-for="item in history.getItems()"
        v-bind:key="item.index"
        :input="item.input"
        :output="item.output"
      >
      </HistoryObject>
    </div>
    <input
      v-if="inputMode === 'advanced'"
      type="text"
      class="inputfield"
      placeholder="Input"
      v-on:keypress="calculate"
      ref="inputfield"
    />
    <div v-if="inputMode === 'simple'">
      <input
        type="text"
        class="inputfield"
        placeholder="Input"
        v-on:keypress="calculate"
        ref="inputfield"
      />
      <input
        class="outputfield"
        :value="getLastOutput()"
        readonly="readonly"
        placeholder="Output"
      />
    </div>
    <div class="sidemenu">
      <button
        class="sidemenu-button clear-history"
        v-if="inputMode === 'advanced'"
        v-on:click="clearHistory"
      >
        Clear history
      </button>
      <button
        class="sidemenu-button clear-history"
        v-if="inputMode === 'simple'"
        v-on:click="clearHistory"
      >
        Clear output
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
      if (this.history.length > 0) {
        return this.history[this.history.length - 1].output;
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

.outputfield {
  border: 2px solid white;
  padding: 25px 10px;
  text-align: left;
  font-size: 32pt;
  margin-top: 20px;
  position: relative;
  height: 100px;
  box-sizing: border-box;
  color: white;
  background-color: rgb(32, 32, 32);
  width: 100%;
}

.outputfield:focus {
  border: 2px solid orange;
}
</style>
