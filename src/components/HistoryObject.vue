<template>
    <div class="outer">
        <div class="input">
            {{input}}
        </div>
        <div class="output">
            &rarr; {{output}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "HistoryObject",
        props: {
            input: String,
            output: String,
        }
    }
</script>

<style scoped>
    .outer {
        background-color: rgb(32,32,32);
        border-bottom: 1px solid white;;
        font-size: 30pt;
        text-align: left;
        width: 100%;
        overflow: hidden;
        padding: 10px;
    }

    .input {
        width: 100%;
        float: left;
    }

    .output {
        width: 100%;
        float: left;
        padding-left: 10px;
    }

</style>