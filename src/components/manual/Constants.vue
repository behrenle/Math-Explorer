<template>
  <Category :name="$t('manual.categories.constants')">
    <Item v-for="constant in filteredConstants" :key="constant.name"
      :name="constant.name"
      :synopsis="constant.synopsis || 'n. a.'"
      :description="constant.description"
    ></Item>
  </Category>
</template>

<script>
import Category from "../common/Category.vue";
import Item from "./Item.vue";
import { constants } from "../../help.json";


export default {
  name: "Constants",

  components: {
    Category,
    Item
  },

  props: {
    filter: String,
  },

  data() {
    return {
      constants: constants
    };
  },

  computed: {
    filteredConstants: function() {
      return this.constants.filter((constant) => {
        return constant.name.match(this.filter);
      });
    },
  },
}
</script>

<style scoped>

</style>
