<template>
  <Category :name="$t('settings.categories.general')">
    <Item
        :name="$t('settings.significant_decimal_places')"
        type="select"
        :variants="variants.decimalPlaces"
        storeGet="decimalPlaces"
        storeSet="setDecimalPlaces"
    />

    <Item
        :name="$t('settings.input_mode')"
        type="select"
        :variants="variants.inputMode"
        storeGet="inputMode"
        storeSet="setInputMode"
    />
  </Category>
</template>

<script>
import Category from "../common/Category.vue";
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
        decimalPlaces: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            .map(i => {
              return {label: i, value: i}
            }),

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
}
</script>
