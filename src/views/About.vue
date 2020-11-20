<template>
  <div class="outer theme-about">
    <span class="label"> {{ $t('about.author') }}: </span> Lennard Behrens<br>
    <span class="label"> {{ $t('about.license') }}: </span> MIT
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.outer {
  font-size: 32pt;
  text-align: left;
  padding: 20px;
  margin: 20px;
}

.label {
  font-weight: bold;
}
</style>
