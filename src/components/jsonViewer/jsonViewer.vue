<template>
    <div class="jsonViewer">
        <pre :id="idName" class="pre-text">Loading...</pre>
    </div>
</template>

<style type="text/css">


</style>

<script>
    import $ from "jquery";
    import json from "@/utils/service/jquery.json-viewer.js";

    export default {
        name: "json-viewer",
        props: ["data", "idName"],
        data() {
            return {};
        },
        created() {
            this.handelJson();
        },
        methods: {
            handelJson() {
                try {
                    if (this.data != "") {
                        var input = this.data;
                    } else {
                        var input = "";
                    }
                } catch (error) {
                    var input = "json格式有误";
                }
                var options = {
                    collapsed: $("#" + this.idName + "collapsed").is(":checked"),
                    withQuotes: $("#" + this.idName + "with-quotes").is(":checked")
                };
                $("#" + this.idName).jsonViewer(input, options);
            }
        }
    };
</script>

