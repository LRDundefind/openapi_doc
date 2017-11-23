<template>
    <div class="group">
        <h2>创建成员</h2>
        <el-row>
            <el-col :span="24">
                <div class=" "><strong class="create">请求方式：</strong> POST（HTTPS） </div>
            </el-col>
            <el-col :span="24">
                <div class=" "><strong class="create">请求地址：</strong>
                    https://qyapi.weixin.qq.com/cgi-bin/user/create?access_token=ACCESS_TOKEN）
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" style="margin:20px 0">
                <div><strong class="create">请求包体：</strong></div>
            </el-col>
        </el-row>

        <!-- 转换json格式组件 -->
        <json-viewer ref="jsonViewer1" :data="tableData3"></json-viewer>
        <!-- <json-viewer ref="jsonViewer2" :data="Data" :idName="jsonId.jsonViewer2"></json-viewer> -->
        <el-row>
            <el-col :span="24" style="margin:20px 0">
                <div><strong class="create">参数说明：</strong></div>
            </el-col>
        </el-row>
       
        <el-table
                :data="tableData3"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="参数"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="必须"
                    width="120">
            </el-table-column>

            <el-table-column
                    prop="province"
                    label="说明"
                    width="600">
            </el-table-column>

        </el-table>

        <el-row>
            <el-col :span="24" style="margin-top: 20px">
                <div><strong class="create">权限说明：</strong></div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24" style="margin-top: 20px">
                <div>系统应用须拥有指定部门的管理权限。</div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24" style="margin:20px 0">
                <div><strong class="create">返回结果：</strong></div>
            </el-col>
        </el-row>

        <div class="create-content" style="margin-bottom: 50px">
            <ol>
                <li>
                    <code class="code"><span class="pun">{</span></code>
                </li>
                <li>
                    <code class="code">
                        <span class="pln">   </span>
                        <span class="str">"errcode"</span>
                        <span class="pun">:</span>
                        <span class="pln"> </span>
                        <span class="lit">0</span>
                        <span class="pun">,</span>
                    </code>
                </li>
                <li>
                    <code class="code">
                        <span class="pln">   </span>
                        <span class="str">"errmsg"</span>
                        <span class="pun">:</span>
                        <span class="pln"> </span>
                        <span class="str">"created"</span>
                    </code>
                </li>
                <li>
                    <code class="code">
                        <span class="pun">}</span>
                    </code>
                </li>
            </ol>
        </div>
    </div>
</template>
<script>
import jsonViewer from '@/components/jsonViewer/jsonViewer';

    export default {
        name: 'group',
        data: function () {
            return {
                totalActiveNum: 3,
                totalSignUp: 204,
                auditNum: 15,
                activeNum: 0,
                currentType: '全部',
                selectItems: [],
                jsonId: {
                    jsonViewer1: "Data",
                    jsonViewer2: "tableData3"
                },
                
                types: ['全部', '测试活动', '免费活动', '收费活动'],

                Data: [
                    {
                        id: '001',
                        title: '"userid"',
                        type: '"zhangsan"',
                    }, {
                        id: '002',
                        title: '"userid"',
                        type: '"张三" ',
                    }, {
                        id: '003',
                        title: '"userid"',
                        type: '"zhangsan"',
                    }, {
                        id: '004',
                        title: '"english_name"',
                        type: '"jackzhang"',
                    }],

                tableData3: [{
                    date: 'access_token',
                    name: '是',
                    province: '调用接口凭证',
                }, {
                    date: 'userid',
                    name: '是',
                    province: '成员UserID。对应管理端的帐号，企业内必须唯一。不区分大小写，长度为1~64个字节',
                }, {
                    date: 'name',
                    name: '是',
                    province: '成员名称。长度为1~64个字节',
                }, {
                    date: 'english_name',
                    name: '否',
                    province: '英文名。长度为1-64个字节。',
                }, {
                    date: 'mobile',
                    name: '否',
                    province: '手机号码。企业内必须唯一，mobile/email二者不能同时为空',
                }, {
                    date: 'department',
                    name: '是',
                    province: '成员所属部门id列表,不超过20个',
                }, {
                    date: 'order',
                    name: '否',
                    province: '部门内的排序值，默认为0。数量必须和department一致，数值越大排序越前面。有效的值范围是[0, 2^32)',
                }]
            }
        },
        components: { jsonViewer },
        mounted() {

        },

        methods: {
            handelJson() {
                try {
                    if ($('#json-input').val() != "") {
                        var input = eval('(' + $('#json-input').val() + ')');
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

                // Display JSON sample on load
                $('#btn-json-viewer').click();
            },
        }
    }

</script>

<style>

    .group {
        width: 57%;
        margin-left: 15%;
    }

    .group .create {
        font-weight: 700;
        line-height: 26px;
    }

    .group .create-content {
        background: none !important;
        border: none !important;
        width: 100%;
        min-height: 50px;
        padding: 0;
        /*border: 1px solid #ddd;*/
        white-space: pre-wrap;
        word-wrap: break-word;
        /*background-color: rgb(247, 248, 251);*/
    }

    .group .create-content li {
        list-style-type: decimal;
        padding-left: 10px;
        padding-top: 2px;
        padding-bottom: 2px;
        color: #333;
        font-size: 15px;
    }

    .group .create-content li code {
        display: inline;
        max-width: initial;
        padding: 0;
        margin: 0;
        overflow: initial;
        line-height: inherit;
        word-wrap: normal;
        background-color: transparent;
        border: 0;
        font-size: 15px;
    }

    .pln {
        color: #000;
    }

    .str {
        color: #080;
    }

    .clo, .opn, .pun {
        color: #660;
    }

    .group > .head > .el-col > .el-col {
        padding: 20px 0;
        border-right: solid 1px #fff;
    }

    .group .head {
        text-align: center;
        color: #fff;
        font-size: 30px;
        margin-bottom: 50px;
    }

    .allActive .head span {
        font-size: 16px;
    }

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
        /*color: #007777;*/
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
        transform: rotate(-90deg); /* Use rotated down arrow, prevents right arrow appearing smaller than down arrow in some browsers */
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
        font-family: Lucida Console, Georgia;
        font-size: 13px;
        background-color: #ECECEC;
        color: #000000;
        border: solid 1px #CECECE;
        padding: 3%;
        width: 97%;
    }

    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }


</style>
