<template>
  <div class="outer">
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
    name: "Item",
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
    display: flex;
    overflow: hidden;
  }

  .name {
    margin: 0;
    flex-basis: 15%;
    float: left;
    padding-right: 20px;
    box-sizing: border-box;
  }

  .synopsis {
    flex-basis: 30%;
    float: left;
    padding-left: 1em;
    padding-right: 20px;
    box-sizing: border-box;
    text-indent: -1em;
    word-wrap: break-word;
    white-space: pre-wrap
  }

  .description {
    padding-left: 20px;
    flex-basis: 50%;
    float: left;
    box-sizing: border-box;
  }
</style>
