<template>
  <div class="manual theme-manual">
    <HelpObject v-for="help in helpList"
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
    return {helpList: require("../help.json")};
  },
};
</script>

<style scoped>
  .manual {
    position: absolute;
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

.manual::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}
</style>
