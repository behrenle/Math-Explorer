<template>
  <Category :name="$t('manual.categories.functions')">
    <Item
      v-for="func in this.$store.getters.getFilteredFunctions(filter)"
      :key="func.name"
      :name="func.name"
      :synopsis="func.synopsis || 'n. a.'"
      :description="func.description"
    ></Item>
  </Category>
</template>

<script>
import Category from "../common/Category.vue";
import Item from "./Item.vue";

export default {
  name: "Functions",

  components: {
    Category,
    Item
  },

  props: {
    filter: String,
  },
}
</script>
