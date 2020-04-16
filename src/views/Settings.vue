<template>
  <div class="settings theme-settings">
    <SettingsCategory :name="$t('settings.categories.general')">
      <div class="settings_element theme-settings-element">
        <span class="label">{{ $t("settings.significant_decimal_places") }}</span>
        <select v-model="sDecimalPlaces" class="settings_button theme-settings-button">
          <option :value="i" v-for="i in 16">{{i}}</option>
        </select>
      </div>

      <div class="settings_element theme-settings-element">
        <span class="label">{{ $t("settings.input_mode") }}</span>
        <select v-model="inputMode" class="settings_button theme-settings-button">
          <option value="simple">{{ $t("settings.input_mode_simple") }}</option>
          <option value="advanced">{{ $t("settings.input_mode_advanced") }}</option>
        </select>
      </div>
    </SettingsCategory>

    <SettingsCategory :name="$t('settings.categories.language')">
      <div class="settings_element theme-settings-element">
        <span class="label">{{ $t("settings.language") }}</span>
        <select v-model="language" class="settings_button theme-settings-button">
          <option value="en">{{ $t("langs.english") }}</option>
          <option value="de">{{ $t("langs.german") }}</option>
        </select>
      </div>

      <div class="settings_element theme-settings-element">
        <span class="label">{{ $t("settings.decimal_mode") }}</span>
        <select v-model="decimalMode" class="settings_button theme-settings-button">
          <option value="english">{{ $t("langs.english") }}</option>
          <option value="german">{{ $t("langs.german") }}</option>
        </select>
      </div>

      <div class="settings_element theme-settings-element">
        <span class="label">{{ $t("settings.math_lang_tag") }}</span>
        <select v-model="mathLangTag" class="settings_button theme-settings-button">
          <option value="en">{{ $t("langs.english") }}</option>
          <option value="de">{{ $t("langs.german") }}</option>
        </select>
      </div>
    </SettingsCategory>
  </div>
</template>

<script>
import SettingsCategory from "@/components/SettingsCategory.vue";

export default {
  name: "Settings",
  components: {
    SettingsCategory
  },
  computed: {
    language: {
      get() {
        return this.$store.state.language;
      },
      set(value) {
        this.$store.commit("setLanguage", value);
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
  font-size: var(--app-font-size);
  text-align: left;
  width: calc(100% - 40px);
  height: auto;
  display: grid;
  grid-template-columns: var(--settings-grid-columns);
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  padding: 0;
  box-sizing: border-box;
  margin: 20px;
}

.settings_element {
  box-sizing: border-box;
  padding: 10px 15px;
  overflow: auto;
}

.settings_button {
  padding: 10px 10px;
  min-width: var(--settings-button-min-width);
  cursor: pointer;
  font-size: var(--app-font-size);
  box-sizing: border-box;
  outline: none;
  float: right;
}

.wrapper {

}

.label {
  padding: 5px 0px;
}

.number_input {
  width: 150px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance:textfield; /* Firefox */
}
</style>
