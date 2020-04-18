<template>
  <div class="outer theme-settings-category">
    <h1>{{ name }}</h1>
    <slot class="inner"></slot>
  </div>
</template>

<script>
  export default {
    name: "SettingsCategory",
    props: {
      name: String,
    },
  }
</script>

<style scoped>
  .outer {
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .outer h1{
    text-align: center;
    font-size: 32pt;
  }

  .inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
  }
</style>
