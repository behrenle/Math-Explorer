<template>
  <div class="settings-element theme-settings-element">
    <span class="label">{{ name }}</span>
    <slot> </slot>
  </div>
</template>

<script>
  export default {
    name: "SettingsItem",
    props: {
      name: String,
    },
  }
</script>

<style scoped>
  .settings-element {
    box-sizing: border-box;
    padding: 10px 15px;
    overflow: auto;
    display: flex;
  }

  .label {
    padding: 5px 0px;
    margin-right: auto;
  }
</style>
