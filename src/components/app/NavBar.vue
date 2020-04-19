<template>
  <div class="menu-bar theme-app-menu-bar">
    <img src="../../assets/logo.png" class="menu-logo" alt="logo" />
    <div class="menu-title theme-app-menu-title">
      Math Explorer {{version}}
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
</template>

<script>
  const packageJSON = require('../../../package.json');

  export default {
    name: "NavBar",
    data: function() {
      return {version: pjson.version};
    }
  }

</script>

<style scoped>
  .menu-bar {
    height: 80px;
    width: 100%;
    color: white;
    font-size: 32pt;
    text-align: left;
    font-family: Verdana, Geneva, sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    grid-template-columns: 40% 15% 15% 15% 15%;
    grid-template-rows: 100%;
    z-index: 2;
  }

  .menu-logo {
    height: 80px;
    width: 80px;
    padding: 10px;
    box-sizing: border-box;
  }

  .menu-title {
    letter-spacing: 2px;
    margin-right: auto;
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 1400px) {
    .menu-title {
      display: none;
    }

    .menu-logo {
      margin-right: auto;
    }
  }

  .menu-item {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0px 20px;
  }

  .menu-button {
    text-align: center;
  }
</style>
