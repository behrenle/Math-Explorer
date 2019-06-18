<template>
    <div class="col-12 h-100">
        <div class="content">
            <div class="history" ref="history">
                <HistoryObject
                        v-for   = "line in history"
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
            <button
                    class="sidemenu-button"
                    v-on:click="clearScope"
            >Clear scope</button>
        </div>
    </div>
</template>

<script>
    import HistoryObject from "@/components/HistoryObject.vue";
    import { mapState, mapMutations } from 'vuex';
    const math = require("mathjs");

    export default {
        name: "Calculator",
        components: {
            HistoryObject
        },
        created: function() {
            this.$eventBus.$on("copy-history-text", this.copyHistoryText)
        },
        computed: {
            ...mapState({
                history: "history",
            }),
            // other stuff
        },
        methods: {
            copyHistoryText: function(e) {
              this.$refs.inputfield.value = e;
            },
            calculate: function(e) {
                var key = e.which || e.keyCode;
                if (key === 13) { // 13 is enter
                    var line;
                    try {
                        line = {
                            input:  this.$refs.inputfield.value,
                            output: math.evaluate(this.$refs.inputfield.value, this.scope).toString()
                        };
                    }
                    catch {
                        line = {
                            input:  this.$refs.inputfield.value,
                            output: "Input not correct!"
                        };
                    }
                    this.$refs.history.scrollTop = this.$refs.history.scrollHeight;
                    this.lines.push(line);
                    this.addHistoryLine(line);
                }
            },
            clearHistory: function() {
                this.lines = [];
            },
            clearInput: function() {
                this.$refs.inputfield.value = "";
            },
            clearScope: function() {
                this.scope = {};
            },
            ...mapMutations([
                "ADD_HISTORY_LINE",
            ]),
            addHistoryLine: function (line) {
                this.ADD_HISTORY_LINE(line);
            }
        },
        data: function() {
            return {
                lines: [],
                scope: {},
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
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        border: 2px solid white;
    }

    .sidemenu-button:hover {
        background-color: orange;
    }

    .sidemenu-button:focus {
        border: 2px solid orange;
    }

    .bottom-bar {
        height: 100px;
        padding-top: 20px;
    }


    .inputfield:focus {
        border: 2px solid orange;
    }
</style>