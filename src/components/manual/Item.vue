<template>
  <div class="outer">
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
      synopsis: String,
      description: String,
    },
  }
</script>

<style scoped>
  .outer {
    width: 100%;
    min-height: 80px;
    font-size: 24pt;
    padding: 20px;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 20px;
    display: flex;
    overflow: hidden;
  }

  .synopsis {
    flex-basis: 30%;
    padding-left: 1em;
    padding-right: 20px;
    box-sizing: border-box;
    text-indent: -1em;
    word-wrap: break-word;
    white-space: pre-wrap
  }

  .description {
    padding-left: 20px;
    flex-basis: 70%;
    box-sizing: border-box;
  }
</style>
