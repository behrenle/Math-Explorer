<template>
  <div id="app" class="app">
    <div class="menu-bar theme-app-menu-bar">
      <img src="./assets/logo.png" class="menu-logo" alt="logo" />
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
    <div class="content nopm theme-content">
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
.menu-logo {
  height: 80px;
  width: 80px;
  padding: var(--app-menu-item-padding);
  box-sizing: border-box;
}

.menu-title {
  /*letter-spacing: 3px;
  padding: 0;
  padding-left: 20px;
  margin-right: auto;*/
  /*color: black;*/
  margin-right: auto;
  display: flex;
  align-items: center;
}

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

.menu-item {
  text-decoration: none;
  padding: var(--app-menu-item-padding);
}

.menu-button {
  text-align: center;
}

.content {
  height: 100%;
  width: 100%;
  z-index: 1;
}
</style>

<style>
  :root {
    --app-font-size: 10pt;
    --app-menu-item-padding: calc(40px - 5pt) 10px;
    --app-grid: 80px auto;

    --settings-button-min-width: 250px;
    --settings-grid-columns: 1fr;
  }

  @media only screen and (min-width: 600px) {
    :root {
      --app-font-size: 14pt;
      --app-menu-item-padding: calc(20px - 7pt) 10px;
      --app-grid: 40px auto;

      --settings-button-min-width: 150px;
      --settings-grid-columns: 1fr;
    }
  }

  @media only screen and (min-width: 1100px) {
    :root {
      --app-font-size: 18pt;
      --app-menu-item-padding: calc(25px - 9pt) 10px;
      --app-grid: 50px auto;

      --settings-button-min-width: 175px;
      --settings-grid-columns: 1fr 1fr;
    }
  }

  @media only screen and (min-width: 1300px) {
    :root {
      --app-font-size: 22pt;
      --app-menu-item-padding: calc(30px - 11pt) 10px;
      --app-grid: 60px auto;

      --settings-button-min-width: 200px;
      --settings-grid-columns: 1fr 1fr;

    }
  }

  @media only screen and (min-width: 1500px) {
    :root {
      --app-font-size: 26pt;
      --app-menu-item-padding: calc(35px - 13pt) 10px;
      --app-grid: 70px auto;

      --settings-button-min-width: 225px;
      --settings-grid-columns: 1fr 1fr;
    }
  }

  @media only screen and (min-width: 1800px) {
    :root {
      --app-font-size: 32pt;
      --app-menu-item-padding: calc(40px - 16pt) 10px;
      --app-grid: 80px auto;

      --settings-button-min-width: 250px;
      --settings-grid-columns: 1fr 1fr;
    }
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
