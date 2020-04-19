<template>
  <div class="sidemenu theme-calc-sidemenu">
    <SideMenuButton v-on:click="clearHistory">
      {{ $t("calculator.clear_history") }}
    </SideMenuButton>

    <SideMenuButton v-on:click="clearHistory">
      {{ $t("calculator.clear_output") }}
    </SideMenuButton>

    <SideMenuButton v-on:click="clearInput">
      {{ $t("calculator.clear_input") }}
    </SideMenuButton>

    <SideMenuButton v-on:click="clearScope">
      {{ $t("calculator.clear_memory") }}
    </SideMenuButton>

    <SideMenuButton v-on:click="clearAll">
      {{ $t("calculator.clear_all") }}
    </SideMenuButton>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SideMenuButton from "./SideMenuButton.vue";

export default {
  name: "SideMenu",
  
  components: {
    SideMenuButton,
  },

  methods: {
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

    clearAll: function() {
      this.clearHistory();
      this.clearScope();
      this.clearInput();
      this.focusInput();
    }
  },

  computed: {
    ...mapState({
      inputMode: "inputMode"
    })
  },
}
</script>

<style scoped>
.sidemenu {
  height: 100%;
  grid-row-start: 1;
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 1300px) {
  .sidemenu {
    grid-row-start: 1;
    grid-column-start: 1;
    flex-direction: row;
    z-index: 1;
  }
}
</style>
