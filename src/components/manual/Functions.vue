<template>
  <Category
      :name="$t('manual.categories.functions')"
      v-if="this.$store.getters.getFilteredFunctions(filter).length > 0"
  >
    <Item
        v-for="func in this.$store.getters.getFilteredFunctions(filter)"
        :key="func.name"
        :name="func.name"
        :synopsis="func.synopsis[getLanguage()]"
        :description="func.description[getLanguage()]"
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


  methods: {
    getLanguage: function () {
      return this.$store.state.settings.language;
    }
  },

  props: {
    filter: String,
  },
}
</script>
