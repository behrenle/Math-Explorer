<template>
  <div class="sidemenu theme-calc-sidemenu">
    <SideMenuButton
      :callback="clearHistory"
      v-if="inputMode === 'advanced'"
      v-shortkey="this.$store.state.shortkeys.clearHistory"
      @shortkey.native="clearHistory()"
    >
      {{ $t("calculator.clear_history") }}
    </SideMenuButton>

    <SideMenuButton
      :callback="clearHistory"
      v-if="inputMode === 'simple'"
      v-shortkey="this.$store.state.shortkeys.clearOutput"
      @shortkey.native="clearHistory()"
    >
      {{ $t("calculator.clear_output") }}
    </SideMenuButton>

    <SideMenuButton
      :callback="clearInput"
      v-shortkey="this.$store.state.shortkeys.clearInput"
      @shortkey.native="clearInput()"
    >
      {{ $t("calculator.clear_input") }}
    </SideMenuButton>

    <SideMenuButton
      :callback="clearScope"
      v-shortkey="this.$store.state.shortkeys.clearMemory"
      @shortkey.native="clearScope()"
    >
      {{ $t("calculator.clear_memory") }}
    </SideMenuButton>

    <SideMenuButton
      :callback="clearAll"
      v-shortkey="this.$store.state.shortkeys.clearAll"
      @shortkey.native="clearAll()"
    >
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
      document.getElementById("inputfield").value = "";
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
    },

    focusInput() {
      document.getElementById("inputfield").focus();
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
