<template>
    <div class="col-12 h-100">
        <div class="content">
            <div class="history">
                <HistoryObject
                        v-for   = "line in lines"
                        :input  = "line.input"
                        :output = "line.output"
                >
                </HistoryObject>
            </div>
            <input
                    type="text"
                    class="inputfield"
                    placeholder="Input"
                    v-on:keypress="calculate"
                    ref="inputfield"
            >
        </div>
        <div class="sidemenu">
            <button
                    class="sidemenu-button"
                    v-on:click="clearHistory"
            >Clear history</button>

            <button
                    class="sidemenu-button"
                    v-on:click="clearInput"
            >Clear input</button>
        </div>
    </div>
</template>

<script>
    import HistoryObject from "@/components/HistoryObject.vue";
    var math = require("mathjs");

    export default {
        name: "Calculator",
        components: {
            HistoryObject
        },
        methods: {
            calculate: function(e) {
                var key = e.which || e.keyCode;
                if (key === 13) { // 13 is enter
                    var line = {
                        input: this.$refs.inputfield.value,
                        output:math.evaluate(this.$refs.inputfield.value)
                    };
                    this.lines.push(line);
                }
            },
            clearHistory: function() {
                this.lines = [];
            },
            clearInput: function() {
                this.$refs.inputfield.value = "";
            }
        },
        data: function() {
            return {
                lines: []
            };
        }
    }


</script>

<style scoped>
    .content {
        width: 80%;
        height: 100%;
        float: left;
    }

    .sidemenu {
        width: 20%;
        height: 100%;
        float: right;
        padding-left: 20px;
    }

    .history {
        background-color: rgb(8,8,8);
        width: 100%;
        height: calc(100% - 120px);
        border: 2px solid white;
        overflow-y: scroll;
    }

    .inputfield {
        background-color: rgb(32,32,32);
        width: 100%;
        height: 80px;
        border: 2px solid white;
        font-size: 32pt;
        color: white;
        padding: 10px;
        float: left;
        font-family: Monospace;
        margin-top: 20px;
    }

    .sidemenu-button {
        width: 100%;
        margin: 0;
        height: 80px;
        float: right;
        font-size: 30pt;
        background-color: rgb(32,32,32);
        padding-bottom: 10px;
        margin-bottom: 20px;
        color: white;
    }

    .sidemenu-button:hover {
        background-color: orange;
    }

    .bottom-bar {
        height: 100px;
        padding-top: 20px;
    }


    .inputfield:focus {
        border: 2px solid orange;
    }
</style>