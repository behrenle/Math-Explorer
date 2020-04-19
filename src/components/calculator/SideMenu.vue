<template>
  <div class="sidemenu theme-calc-sidemenu">
    <button
      class="sidemenu-button clear-history theme-calc-button theme-focus-border"
      v-if="inputMode === 'advanced'"
      v-on:click="clearHistory"
    >
      {{ $t("calculator.clear_history") }}
    </button>

    <button
      class="sidemenu-button clear-history theme-calc-button theme-focus-border"
      v-if="inputMode === 'simple'"
      v-on:click="clearHistory"
    >
      {{ $t("calculator.clear_output") }}
    </button>

    <button class="sidemenu-button clear-input theme-calc-button theme-focus-border" v-on:click="clearInput">
      {{ $t("calculator.clear_input") }}
    </button>

    <button class="sidemenu-button clear-scope theme-calc-button theme-focus-border" v-on:click="clearScope">
      {{ $t("calculator.clear_memory") }}
    </button>

    <button class="sidemenu-button clear-scope theme-calc-button theme-focus-border" v-on:click="clearAll">
      {{ $t("calculator.clear_all") }}
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SideMenu",
  
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

  .sidemenu-button {
    width: 100%;
    height: 120px;
    font-size: 32pt;
    text-align: left;
    padding-left: 25px;
    outline: none;
  }

  @media only screen and (max-width: 1300px) {
    .sidemenu-button {
      text-align: center;
      padding: 0px 20px;
    }
  }
</style>
