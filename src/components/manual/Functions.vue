<template>
  <Category :name="$t('manual.categories.functions')">
    <Item v-for="func in filteredFunctions" :key="func.name"
      :name="func.name"
      :synopsis="func.synopsis || 'n. a.'"
      :description="func.description"
    ></Item>
  </Category>
</template>

<script>
import Category from "../common/Category.vue";
import Item from "./Item.vue";
import { functions } from "../../help.json";

export default {
  name: "Functions",

  components: {
    Category,
    Item
  },

  props: {
    filter: String,
  },

  data() {
    return {
      functions: functions
    };
  },

  computed: {
    filteredFunctions: function() {
      return this.functions.filter((func) => {
        return func.name.match(this.filter);
      });
    },
  },
}
</script>

<style scoped>

</style>
