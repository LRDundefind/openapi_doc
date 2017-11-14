<template>
    <div class="group">
        <h2>读取成员</h2>
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

        <div class="create-content">
            <!--<el-card class="box-card">-->
            <!--<div v-for="o in 4" :key="o" class="text item">-->
            <!--{{'列表内容 ' + o }}-->
            <!--</div>-->
            <!--</el-card>-->
            <ol class="line">
                <li>
                    <code><span class="pun">{</span></code>
                </li>
                <!--<li v-for="data in Data">-->
                    <!--<code class="code">-->
                        <!--<span class="pln">&nbsp;</span>-->
                        <!--<span class="str">{{data.title}}</span>-->
                        <!--<span class="pun">:</span>-->
                        <!--<span class="pln"> </span>-->
                        <!--<span class="str">{{data.type}}</span>-->
                        <!--<span class="pun">,</span></code>-->
                <!--</li>-->
                <li>
                    <code class="code">
                        <span class="pln">&nbsp;</span>
                        <span class="str">"name"</span>
                        <span class="pun">:</span>
                        <span class="pln"> </span><span class="str">"张三"</span>
                        <span class="pun">,</span>
                    </code>
                </li>
                <li>
                    <code class="code">
                        <span class="pln">&nbsp;</span>
                        <span class="str">"userid"</span>
                        <span class="pun">:</span>
                        <span class="pln"> </span>
                        <span class="str">"zhangsan"</span>
                        <span class="pun">,</span></code>
                </li>
                <li>
                    <code class="code">
                        <span class="pln">&nbsp;</span>
                        <span class="str">"english_name"</span>
                        <span class="pun">:</span>
                        <span class="pln"> </span>
                        <span class="str">"jackzhang"</span>
                        <span class="pun">,</span>
                    </code>
                </li>
                <li><code><span class="pun">}</span></code></li>
            </ol>


        </div>
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

            <!--<el-table-column-->
            <!--prop="province"-->
            <!--label="省份"-->
            <!--width="120">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
            <!--prop="city"-->
            <!--label="市区"-->
            <!--width="120">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
            <!--prop="address"-->
            <!--label="地址"-->
            <!--width="300">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
            <!--prop="zip"-->
            <!--label="邮编"-->
            <!--width="120">-->
            <!--</el-table-column>-->
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

        <div class="create-content">
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
                types: ['全部', '测试活动', '免费活动', '收费活动'],
                tableData: [
                    {
                        id: '001',
                        title: '王小虎',
                        type: '测试活动',
                        status: '已结束',
                        readNum: 200,
                        signUpNum: 100,
                        auditNum: 100
                    }, {
                        id: '002',
                        title: '王小虎',
                        type: '测试活动',
                        status: '已结束',
                        readNum: 200,
                        signUpNum: 100,
                        auditNum: 100
                    }, {
                        id: '003',
                        title: '王小虎',
                        type: '测试活动',
                        status: '已结束',
                        readNum: 200,
                        signUpNum: 100,
                        auditNum: 100
                    }, {
                        id: '004',
                        title: '王小虎',
                        type: '测试活动',
                        status: '已结束',
                        readNum: 200,
                        signUpNum: 100,
                        auditNum: 100
                    }],
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
        computed: {
//            filteredTableData: function () {
//                var type = this.currentType;
//                return type;
//                console.log(type);
//            }
        },
        methods: {
//            handleSelect: function (row, column, cell, event) {
//                if (column.label == '操作') {
//                    this.$router.push('/activeManage/detail/page1');
//                } else if(column.type == 'selection'){
//                    row.$info = !row.$selected;
//                }else{
//                    row.$selected = !row.$selected;
//                    row.$info = row.$selected;
//                }
//            },
//            selectionchange: function (val) {
//                var arr = [];
//                val.forEach(function (item) {
//                    arr.push(item.id);
//                });
//                this.selectItems = arr;
//                this.activeNum = this.selectItems.length;
//            },
//            handleRemove:function(){
//                var tableData = this.tableData;
//                this.selectItems.forEach(function (id) {
//                    tableData.forEach(function (data) {
//                        if(id == data.id){
//                            tableData.splice(tableData.indexOf(data),1)
//                        }
//                    })
//                });
//                this.selectItems = [];
//            },
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
        width: 100%;
        min-height: 50px;
        padding: 0;
        border: 1px solid #ddd;
        white-space: pre-wrap;
        word-wrap: break-word;
        background-color: rgb(247, 248, 251);
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

    /*.group .create-content ol .line {*/
    /*color: red;*/
    /*font-size: 15px;*/
    /*}*/

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
</style>
