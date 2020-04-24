<template>
  <div class="calculator">
    <AdvancedInput v-if="this.$store.state.settings.inputMode === 'advanced'" />
    <SimpleInput v-if="this.$store.state.settings.inputMode === 'simple'" />
    <SideMenu></SideMenu>
  </div>
</template>

<script>
import AdvancedInput from "../components/calculator/AdvancedInput.vue";
import SimpleInput from "../components/calculator/SimpleInput.vue";
import SideMenu from "../components/calculator/SideMenu.vue";

export default {
  name: "Calculator",
  components: {
    AdvancedInput,
    SimpleInput,
    SideMenu
  },
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
</style>
