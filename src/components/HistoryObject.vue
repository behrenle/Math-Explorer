<template>
    <div class="outer">
        <div class="input copyable" v-on:click="copyInput">
            {{input}}
        </div>
        <div class="output copyable" v-on:click="copyOutput">
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
        },
        methods: {
            copyInput: function() {
                this.$eventBus.$emit("copy-history-text", this.input);
            },
            copyOutput: function() {
                this.$eventBus.$emit("copy-history-text", this.output);
            }
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
        box-sizing: border-box;
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

    .copyable:hover {
        background-color: orange;
    }

    .copyable:focus {
        border: 2px solid orange;
    }
</style>