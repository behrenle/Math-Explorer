<template>
  <div class="outer theme-help-object">
    <div class="name">
      {{name}}
    </div>
    <div class="synopsis">
      {{synopsis}}
    </div>
    <div class="descripton">
      {{descripton}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "HelpObject",
    props: {
      name: String,
      synopsis: String,
      descripton: String,
    },
  }
</script>

<style scoped>
  .outer {
    width: 100%;
    min-height: 80px;
    font-size: 30pt;
    padding: 20px;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 20px;
    display: block;
    overflow: auto;
  }

  .name {
    margin: 0;
    width: 15%;
    float: left;
    padding-right: 20px;
    box-sizing: border-box;
  }

  .synopsis {
    width: 25%;
    float: left;
    padding-left: 1em;
    padding-right: 20px;
    box-sizing: border-box;
    text-indent: -1em;
  }

  .descripton {
    width: 60%;
    float: left;
    box-sizing: border-box;
  }
</style>
