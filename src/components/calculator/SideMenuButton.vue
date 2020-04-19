<template>
  <button class="
    sidemenu-button
    theme-calc-button
    theme-focus-border"
    v-on:click="callback()"
  >
    <slot>

    </slot>
  </button>
</template>

<script>
export default {
  name: "SideMenuButton",
  props: {
    callback: { type: Function },
  }
}
</script>

<style scoped>
.sidemenu-button {
  width: 100%;
  height: 120px;
  font-size: 32pt;
  text-align: left;
  padding-left: 25px;
  outline: none;
}

@media only screen and (max-width: 1300px) {
  .sidemenu-button {
    text-align: center;
    padding: 0px 20px;
  }
}
</style>
