<template>
  <Category
    :name="$t('manual.categories.constants')"
    v-if="this.$store.getters.getFilteredConstants(filter).length > 0"
  >
    <Item
      v-for="constant in this.$store.getters.getFilteredConstants(filter)"
      :key="constant.name"
      :name="constant.name"
      :synopsis="constant.synopsis || 'n. a.'"
      :description="constant.description"
    ></Item>
  </Category>
</template>

<script>
import Category from "../common/Category.vue";
import Item from "./Item.vue";

export default {
  name: "Constants",

  components: {
    Category,
    Item
  },

  props: {
    filter: String,
  },
}
</script>
