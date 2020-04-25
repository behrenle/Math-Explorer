<template>
  <div
    class="outer theme-history-object"
    :lang="this.$store.state.settings.mathLangTag"
  >
    <div
      v-if="$store.state.settings.showCellNumbers"
      class="index theme-history-object-index"
    >
      #{{index}}
    </div>

    <div
      v-bind:class="{
        'field-width1': $store.state.settings.showCellNumbers,
        'field-width2': !$store.state.settings.showCellNumbers,
        'theme-calc-history-object-field': $store.state.settings.showCellNumbers
      }"
    >
      <span class="theme-calc-copyable" v-on:click="copyInput">
        {{input}}
      </span>
    </div>

    <div
      v-bind:class="{
        'field-width1': $store.state.settings.showCellNumbers,
        'field-width2': !$store.state.settings.showCellNumbers,
        'theme-calc-history-object-field': $store.state.settings.showCellNumbers
      }"
    >
      &rarr;
      <span class="theme-calc-copyable" v-on:click="copyOutput">
        {{output}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HistoryItem",
    props: {
        input: String,
        output: String,
        index: Number,
    },

    methods: {
      copyInput: function() {
        if (this.$store.state.copyOnClick)
          this.$eventBus.$emit("copy-history-text", this.input);
      },
      copyOutput: function() {
        if (this.$store.state.copyOnClick)
          this.$eventBus.$emit("copy-history-text", this.output);
      }
    },

    mounted() {
      var historyObj = document.getElementById("history");
      if (historyObj) {
          historyObj.scrollTop = historyObj.scrollHeight;
      }
    }
  }
</script>

<style scoped>
  .outer {
    border-bottom: 1px solid white;
    font-size: 30pt;
    text-align: left;
    width: auto;
    margin-bottom: 10px;
    margin-left: 10px;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .field-width1 { /* index is displayed */
    flex-basis: calc(100% - 130px);
    margin-left: auto;
    padding-left: 20px;
  }

  .field-width2 { /* index is not displayed */
    flex-basis: 100%
  }

  .index {
    align-self: stretch;
  }
</style>
