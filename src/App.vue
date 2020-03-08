<template>
  <div id="app" class="app">
    <div class="menu-bar">
      <div class="menu-item menu-title">
        <img src="./assets/logo.png" class="logo_img" alt="logo" />
        <span class="logo_name">Math Explorer {{version}}</span>
      </div>
      <router-link to="/" class="menu-item menu-button">Calculator</router-link>
      <router-link to="/settings" class="menu-item menu-button"
        >Settings</router-link
      >
      <router-link to="/manual" class="menu-item menu-button"
        >Manual</router-link
      >
      <router-link to="/about" class="menu-item menu-button">About</router-link>
    </div>
    <div class="content nopm">
      <router-view />
    </div>
  </div>
</template>

<script>
const pjson = require('../package.json');

export default {
  data: function() {
    return {version: pjson.version};
  },
};
</script>

<style scoped>
.logo_img {
  height: 100%;
  margin-right: 20px;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
}

.logo_name {
  height: 100%;
  line-height: 80px;
  margin: 0;
  position: absolute;
  left: 100px;
  top: 0;
}

.menu-bar {
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: rgb(32, 32, 32);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 26pt;
  text-align: left;
  font-family: Verdana, Geneva, sans-serif;
  border-bottom: 2px solid white;
  display: grid;
  grid-template-columns: 40% 15% 15% 15% 15%;
  grid-template-rows: 100%;
}

.menu-item {
  color: white;
  text-decoration: none;
  padding: 15px 10px 10px;
}

.menu-item:hover {
  text-decoration: none;
}

.menu-button {
  text-align: center;
}

.menu-button:hover {
  background-color: orange;
}

.menu-button:focus {
  border: 2px solid orange;
}

.menu-title {
  letter-spacing: 6px;
  padding-left: 20px;
}

.content {
  position: fixed;
  height: calc(100% - 100px);
  width: 100%;
  top: 100px;
}
</style>

<style lang="scss">
.debug {
  border: 1px solid blue;
}

.debug:focus {
  background-color: blue;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(16, 16, 16);
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
