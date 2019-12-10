<template>
    <div class="outer">
        <div class="input">
            <span class="copyable" v-on:click="copyInput">
                {{input}}
            </span>

        </div>
        <div class="output">
            &rarr;
            <span class="copyable" v-on:click="copyOutput">
                {{output}}
            </span>
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
        border-bottom: 1px solid white;
        border-right: 2px solid white;
        font-size: 30pt;
        text-align: left;
        width: 100%;
        overflow: hidden;
        padding: 10px;
        padding-bottom: 20px;
        box-sizing: border-box;
    }

    .input {
        width: 100%;
        float: left;
        padding-left: 10px;
    }

    .output {
        width: 100%;
        float: left;
        padding-left: 10px;
    }

    .copyable:hover {
        text-decoration: underline;
    }

</style>