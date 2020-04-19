<template>
  <div class="manual theme-manual">
    <input
      type="text"
      :placeholder="$t('manual.search')"
      class="search-field theme-help-search-field"
      v-model="search"
    />
    <Constants :filter="search" class="category"/>
    <Functions :filter="search" class="category"/>
  </div>
</template>

<script>
import Constants from "../components/manual/Constants.vue";
import Functions from "../components/manual/Functions.vue";

export default {
  name: "Manual",
  components: {
    Constants,
    Functions
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
  height: 100%;
  width: 100%;
  padding: 20px 20px 0px 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  box-sizing: border-box;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

.manual::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
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

.category {
  padding-top: 10px;
}
</style>
