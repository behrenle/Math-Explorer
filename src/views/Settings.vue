<template>
  <div class="settings theme-settings">
    <GeneralSettings />

    <SettingsCategory :name="$t('settings.categories.language')">
      <SettingsItem :name="$t('settings.language')">
        <select v-model="language" class="settings-button theme-settings-button">
          <option value="en">{{ $t("langs.english") }}</option>
          <option value="de">{{ $t("langs.german") }}</option>
        </select>
      </SettingsItem>

      <SettingsItem :name="$t('settings.decimal_mode')">
        <select v-model="decimalMode" class="settings-button theme-settings-button">
          <option value="english">{{ $t("langs.english") }}</option>
          <option value="german">{{ $t("langs.german") }}</option>
        </select>
      </SettingsItem>

      <SettingsItem :name="$t('settings.math_lang_tag')">
        <select v-model="mathLangTag" class="settings-button theme-settings-button">
          <option value="en">{{ $t("langs.english") }}</option>
          <option value="de">{{ $t("langs.german") }}</option>
        </select>
      </SettingsItem>
    </SettingsCategory>

    <SettingsCategory :name="$t('settings.categories.advanced_input_mode')">
      <SettingsItem :name="$t('settings.copy_on_click')">
        <select v-model="copyOnClick" class="settings-button theme-settings-button">
          <option :value="true">{{ $t("misc.on") }}</option>
          <option :value="false">{{ $t("misc.off") }}</option>
        </select>
      </SettingsItem>

      <SettingsItem :name="$t('settings.show_cell_numbers')">
        <select v-model="showCellNumbers" class="settings-button theme-settings-button">
          <option :value="true">{{ $t("misc.on") }}</option>
          <option :value="false">{{ $t("misc.off") }}</option>
        </select>
      </SettingsItem>
    </SettingsCategory>

  </div>
</template>

<script>
import SettingsCategory from "@/components/SettingsCategory.vue";
import SettingsItem from "@/components/SettingsItem.vue";
import GeneralSettings from "../components/settings/GeneralSettings.vue";

export default {
  name: "Settings",
  components: {
    SettingsCategory,
    SettingsItem,
    GeneralSettings
  },
  computed: {
    language: {
      get() {
        return this.$store.state.language;
      },
      set(value) {
        this.$store.commit("setLanguage", value);
        this.$root.$i18n.locale = this.$store.state.language;
      }
    },

    decimalMode: {
      get() {
        return this.$store.state.decimalMode;
      },
      set(value) {
        this.$store.commit("setDecimalMode", value);
      }
    },

    inputMode: {
      get() {
        return this.$store.state.inputMode;
      },
      set(value) {
        this.$store.commit("setInputMode", value);
      }
    },

    sDecimalPlaces: {
      get() {
        return this.$store.state.sDecimalPlaces;
      },
      set(value) {
        this.$store.commit("setSDecimalPlaces", value);
      }
    },

    mathLangTag: {
      get() {
        return this.$store.state.mathLangTag;
      },

      set(value) {
        this.$store.commit("setMathLangTag", value);
      }
    },

    copyOnClick: {
      get() {
        return this.$store.state.copyOnClick;
      },

      set(value) {
        this.$store.commit("setCopyOnClick", value);
      }
    },

    showCellNumbers: {
      get() {
        return this.$store.state.showCellNumbers;
      },

      set(value) {
        this.$store.commit("setShowCellNumbers", value);
      }
    }
  },
  methods: {
    input_sDecimalPlaces: function() {
      var n = this.$refs.input_sn_decimal.value;
      if (!isNaN(parseInt(n))) {
        console.log("call");
        this.CHANGE_S_DECIMAL_PLACES(parseInt(n));
      }
    },
  }
};
</script>

<style scoped>
.settings {
  color: white;
  font-size: 32pt;
  text-align: left;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  overflow-y: scroll;
}

.settings::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}

@media only screen and (max-width: 1300px) {
  .settings {
    grid-template-columns: 1fr;
  }
}

.settings-button {
  height: calc(32pt + 20px);
  padding: 10px 10px;
  cursor: pointer;
  min-width: 200px;
  font-size: 32pt;
  box-sizing: border-box;
  outline: none;
  float: right;
}

</style>
