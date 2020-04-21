<template>
  <div class="container">
    <History />
    <Inputfield />
  </div>
</template>

<script>
import History from "./advancedInput/History.vue";
import Inputfield from "./Inputfield.vue";

export default {
  name: "AdvancedInput",

  components: {
    History,
    Inputfield
  },

  created() {
    this.$eventBus.$on("copy-history-text", e => {
      document.getElementById("inputfield").value = e;
    });
  },

  mounted() {
    document.getElementById("inputfield").focus();
    document.getElementById("inputfield").value = this.$store.state.currentInput
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
</style>
