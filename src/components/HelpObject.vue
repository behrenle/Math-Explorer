<template>
  <div class="outer theme-help-object">
    <div class="name" v-html="name">
    </div>
    <div class="synopsis" v-html="synopsis">
    </div>
    <div class="description" v-html="description">
    </div>
  </div>
</template>

<script>
  export default {
    name: "HelpObject",
    props: {
      name: String,
      synopsis: String,
      description: String,
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

  .description {
    width: 60%;
    float: left;
    box-sizing: border-box;
  }
</style>
