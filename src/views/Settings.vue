<template>
  <div class="settings theme-settings">
    <GeneralSettings/>
    <LanguageSettings/>
    <AdvancedInputSettings/>
  </div>
</template>

<script>
import GeneralSettings from "../components/settings/GeneralSettings.vue";
import LanguageSettings from "../components/settings/LanguageSettings.vue";
import AdvancedInputSettings from "../components/settings/AdvancedInputSettings.vue"

export default {
  name: "Settings",
  components: {
    GeneralSettings,
    LanguageSettings,
    AdvancedInputSettings
  }
};
</script>

<style scoped>
.settings {
  color: white;
  font-size: 32pt;
  text-align: left;
  width: 100%;
  height: auto;
  max-height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  overflow-y: scroll;
}

.settings::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

@media only screen and (max-width: 1300px) {
  .settings {
    grid-template-columns: 1fr;
  }
}
</style>
