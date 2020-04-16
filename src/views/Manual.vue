<template>
  <div class="manual theme-manual">
    <input
      type="text"
      placeholder="Search"
      class="search-field theme-help-search-field"
      v-model="search"
    />

    <HelpObject v-for="help in filteredHelpList"
      :name="help.name"
      :synopsis="help.synopsis"
      :description="help.description"
    ></HelpObject>
  </div>
</template>

<script>
import HelpObject from "@/components/HelpObject.vue";


export default {
  name: "Manual",
  components: {
    HelpObject
  },
  data: function() {
    return {
      helpList: require("../help.json"),
      search: "",
    };
  },
  computed: {
    filteredHelpList: function() {
      return this.helpList.filter((help) => {
        return help.name.match(this.search);
      });
    },
  },
};
</script>

<style scoped>
  .manual {
    margin: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    padding: 20px 20px 0px 20px;
    box-sizing: border-box;
    overflow-y: scroll;
    box-sizing: border-box;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }

  .search-field {
    font-size: 32pt;
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-bottom: 50px;
    box-sizing: border-box;
  }

.manual::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}
</style>
