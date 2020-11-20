<template>
  <div class="history" id="history">
    <HistoryItem
        v-for="item in getHistory()"
        v-bind:key="item.index"
        :input="item.input"
        :output="item.output"
        :index="item.index"
    />
  </div>
</template>

<script>
import HistoryItem from "./HistoryItem.vue";

export default {
  name: "History",

  components: {
    HistoryItem
  },

  methods: {
    getHistory() {
      return this.$store.state.evaluator.script.getItems();
    }
  }
}
</script>

<style scoped>
.history {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.history::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
