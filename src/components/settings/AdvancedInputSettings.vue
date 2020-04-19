<template>
  <Category :name="$t('settings.categories.advanced_input_mode')">
    <Item
      :name="$t('settings.copy_on_click')"
      type="select"
      :variants="variants.toggle"
      storeGet="copyOnClick"
      storeSet="setCopyOnClick"
    />

    <Item
      :name="$t('settings.show_cell_numbers')"
      type="select"
      :variants="variants.toggle"
      storeGet="showCellNumbers"
      storeSet="setShowCellNumbers"
    />
  </Category>
</template>

<script>
import Category from "./Category.vue";
import Item from "./Item.vue";

export default {
  name: "AdvancedInputSettings",

  components: {
    Category,
    Item
  },

  data() {
    return {
      variants: {
        toggle: [
          { label: this.$t("misc.on"), value: true },
          { label: this.$t("misc.off"), value: false }
        ]
      }
    }
  },
}
</script>
