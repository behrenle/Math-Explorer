<template>
  <div
    class="outer theme-history-object"
    :lang="this.$store.state.mathLangTag"
  >
    <div class="index theme-history-object-index">
      #{{index}}
    </div>

    <div class="input theme-calc-history-object-field">
      <span class="theme-calc-copyable" v-on:click="copyInput">
        {{input}}
      </span>
    </div>

    <div class="output theme-calc-history-object-field">
      &rarr;
      <span class="theme-calc-copyable" v-on:click="copyOutput">
        {{output}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HistoryObject",
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
  }

  .input {
    width: calc(100% - 130px);
    padding-left: 20px;
    float: right;
  }

  .output {
    width: calc(100% - 130px);
    padding-left: 20px;
    float: right;
  }

  .index {
    width: 100px;
    top: 0;
    bottom: 0;
    float: left;
  }
</style>
