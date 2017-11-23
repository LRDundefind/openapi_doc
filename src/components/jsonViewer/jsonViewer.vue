<template>
  <div class="jsonViewer">
    	<label class="checkbox-inline">
            <input type="checkbox" :id="idName+'collapsed'" @click="handelJson()">
            收缩所有的节点 </label>
        <label class="checkbox-inline" @input="handelJson()">
            <input type="checkbox" :id="idName+'with-quotes'" @click="handelJson()">
            为Key添加双引号 </label>
        <pre :id="idName" class="pre-text">格式化Json数据</pre>
  </div>

</template>

<style type="text/css">
/* Syntax highlighting for JSON objects */
    ul.json-dict, ol.json-array {
        list-style-type: none;
        margin: 0 0 0 1px;
        border-left: 1px dotted #ccc;
        padding-left: 2em;
        font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
        font-size: 13px;
        line-height: 1.42857143;
        word-break: break-all;
    }

    ul.json-dict li {
        font-weight: bold;
        color: #CC0000;
    }

    .json-string {
        font-weight: bold;
        color: #007777;
    }

    .json-literal {
        color: #AA00AA;
        font-weight: bold;
    }

    /* Toggle button */
    a.json-toggle {
        position: relative;
        /*color: inherit;*/
        text-decoration: none;
        color: #CC0000;
        font-weight: bold;
    }

    a.json-toggle:before {
        color: #aaa;
        content: "\25BC"; /* down arrow */
        position: absolute;
        display: inline-block;
        width: 1em;
        left: -1em;
    }

    a.json-toggle.collapsed:before {
        transform: rotate(-90deg); 
        -ms-transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
    }

    /* Collapsable placeholder links */
    a.json-placeholder {
        color: #aaa;
        padding: 0 1em;
        text-decoration: none;
    }

    a.json-placeholder:hover {
        text-decoration: underline;
    }

    .pre-text {
        counter-reset:section;
        font-family: Lucida Console, Georgia;
        font-size: 13px;
        background-color: #ECECEC;
        color: #000000;
        border: solid 1px #CECECE;
        padding: 3%;
        width: 97%;
    }
</style>

<script>

  import $ from 'jquery'
  import json from '@/utils/service/jquery.json-viewer.js';


export default {
  	name: 'json-viewer',
  	props: ['data','idName'],
  	data () {
  		return{

  		}
  	}, 
  	mounted() {
        this.handelJson();
    },
    methods: {
    	handelJson() {
            try {
                if (this.data != "") {
                    var input = this.data;
                }
                else {
                    var input = '';
                }
            }
            catch (error) {
                var input = 'json格式有误';
            }
            var options = {
                collapsed: $('#'+this.idName+'collapsed').is(':checked'),
                withQuotes: $('#'+this.idName+'with-quotes').is(':checked')
            };
            $('#'+this.idName).jsonViewer(input, options);
        }
    }
}
</script>

