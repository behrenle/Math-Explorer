<template>
  <div id="app" class="app theme-app">
    <div class="menu-bar theme-app-menu-bar">
      <div class="menu-item menu-title theme-app-menu-item theme-app-menu-title">
        <img src="./assets/logo.png" class="logo_img" alt="logo" />
        <span class="logo_name">Math Explorer {{version}}</span>
      </div>
      <router-link to="/" class="
        menu-item
        menu-button
        theme-app-menu-item
        theme-app-menu-button
        theme-focus-border">
        {{ $t("menu_bar.calculator") }}
      </router-link>
      <router-link to="/settings" class="
        menu-item
        menu-button
        theme-app-menu-item
        theme-app-menu-button
        theme-focus-border">
        {{ $t("menu_bar.settings") }}
      </router-link>
      <router-link to="/manual" class="
        menu-item
        menu-button
        theme-app-menu-item
        theme-app-menu-button
        theme-focus-border">
        {{ $t("menu_bar.manual") }}
      </router-link>
      <router-link to="/about" class="
        menu-item
        menu-button
        theme-app-menu-item
        theme-app-menu-button
        theme-focus-border">
        {{ $t("menu_bar.about") }}
      </router-link>
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
  padding: 0;
  box-sizing: border-box;
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
  height: 80px;
  width: 100%;
  color: white;
  font-size: 26pt;
  text-align: left;
  font-family: Verdana, Geneva, sans-serif;
  display: grid;
  grid-template-columns: 40% 15% 15% 15% 15%;
  grid-template-rows: 100%;
  z-index: 2;
  border: 2px solid red;
}

.menu-item {
  text-decoration: none;
  padding: 15px 10px 10px;
}

.menu-button {
  text-align: center;
}

.menu-title {
  letter-spacing: 6px;
  padding-left: 20px;
}

.content {
  height: 100%;
  width: 100%;
  z-index: 1;
  border: 2px solid lime;
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
  border: 2px solid blue;
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
