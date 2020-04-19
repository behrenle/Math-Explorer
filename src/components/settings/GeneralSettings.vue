<template>
  <Category :name="$t('settings.categories.general')">
    <Item
      :name="$t('settings.significant_decimal_places')"
      type="select"
      :variants="variants.sDecimalPlaces"
      :getter="get_sDecimalPlaces"
      :setter="set_sDecimalPlaces"
    />

    <Item
      :name="$t('settings.input_mode')"
      type="select"
      :variants="variants.inputMode"
      :getter="get_inputMode"
      :setter="set_inputMode"
    />
  </Category>
</template>

<script>
import Category from "./Category.vue";
import Item from "./Item.vue";

export default {
  name: "GeneralSettings",

  components: {
    Category,
    Item
  },

  data() {
    return {
      variants: {
        sDecimalPlaces: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
          .map(i => {return { label: i, value: i }}),

        inputMode: [
          {
            label: this.$t("settings.input_mode_simple"),
            value: "simple"
          },
          {
            label: this.$t("settings.input_mode_advanced"),
            value: "advanced"
          }
        ]
      }
    }
  },

  methods: {
    get_sDecimalPlaces() {
      return this.$store.state.sDecimalPlaces;
    },

    get_inputMode() {
      return this.$store.state.inputMode;
    },

    set_sDecimalPlaces(value) {
      this.$store.commit("setSDecimalPlaces", value);
    },

    set_inputMode(value) {
      this.$store.commit("setInputMode", value);
    }
  },
}
</script>

<style scoped>
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
