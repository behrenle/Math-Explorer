<template>
  <div id="app" class="nopm">
    <div class="col-12 menu-bar container ">
      <div class="row h-100">
        <div class="col-6 menu-item menu-title">
          Math Toolbox v0.1
        </div>
        <router-link to="/"         class="col-2 menu-item menu-button">Calculator</router-link>
        <router-link to="/settings" class="col-2 menu-item menu-button">Settings</router-link>
        <router-link to="/manual"   class="col-2 menu-item menu-button">Manual</router-link>
      </div>
    </div>
    <div class="content nopm">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
  .menu-bar {
    position: fixed;
    height: 80px;
    width: 100%;
    background-color: rgb(32,32,32);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    color: white;
    font-size: 26pt;
    text-align: left;
    font-family: Verdana;
    border-bottom: 2px solid white;
  }

  .menu-item {
    padding: 10px;
    color: white;
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

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(16,16,16);
  }

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .row {
    padding: 0;
    margin: 0;
  }

  .container {
    padding: 0;
    margin: 0;
  }

  .nopm {
    padding: 0;
    margin: 0;
  }

  .row.no-gutters {
    margin-right: 0;
    margin-left: 0;

    & > [class^="col-"],
    & > [class*=" col-"] {
      padding-right: 0;
      padding-left: 0;
    }
  }
</style>
