<template>
  <div id="app" class="app">
    <NavBar></NavBar>
    <div class="content theme-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
const pjson = require('../package.json');
import NavBar from "./components/app/NavBar";

export default {
  components: {
    NavBar
  },
  data: function () {
    return {version: pjson.version};
  },
};
</script>

<style scoped>
.content {
  height: 100%;
  width: 100%;
  z-index: 1;
  overflow: hidden;
}
</style>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 80px auto;
  grid-gap: 0;
}

body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.nopm {
  padding: 0;
  margin: 0;
}
</style>
