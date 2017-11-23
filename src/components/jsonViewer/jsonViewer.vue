<template>
  <div class="jsonViewer">
    	<label class="checkbox-inline">
            <input type="checkbox" id="collapsed" @click="handelJson()">
            收缩所有的节点 </label>
        <label class="checkbox-inline" @input="handelJson()">
            <input type="checkbox" id="with-quotes" @click="handelJson()">
            为Key添加双引号 </label>
        <pre id="json-renderer" class="pre-text">格式化Json数据</pre>
  </div>

</template>

<script>

  import $ from 'jquery'
  import json from '@/utils/service/jquery.json-viewer.js';


export default {
  	name: 'json-viewer',
  	props: ['data'],
  	data () {
  		return{}
  	}, 
  	mounted() {
        this.handelJson();
        console.log(this.data.length)
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
                collapsed: $('#collapsed').is(':checked'),
                withQuotes: $('#with-quotes').is(':checked')
            };
            $('#json-renderer').jsonViewer(input, options);
        }
        
    }
}
</script>

