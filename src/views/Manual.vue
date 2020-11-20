<template>
  <div class="manual theme-manual" tabindex="1000">
    <input
        type="text"
        :placeholder="$t('manual.search')"
        class="search-field theme-help-search-field"
        v-model="search"
        tabindex="999"
        ref="search"
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
  mounted: function () {
    this.$refs.search.focus();
  },
  data: function () {
    return {
      search: "",
    };
  },
};
</script>

<style scoped>
.manual {
  height: 100%;
  width: 100%;
  padding: 20px 40px 0px 40px;
  box-sizing: border-box;
  overflow-y: scroll;
  box-sizing: border-box;
}

.search-field {
  font-size: 32pt;
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.category {
  padding-top: 10px;
}
</style>
