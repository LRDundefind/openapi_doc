<template>
    <div class="api-doc">
        <el-row>
        <h2 v-text="apiName" class="name-text"></h2>
        </el-row>
        <el-row>
            <el-col :span="24" class="markdown-body">
                <p class="create"><strong>请求方式：</strong> {{methodType}}（HTTPS）Content-Type: application/json
                </p>
                <p class="create"><strong>请求地址：</strong>
                    {{apiUrl}}
                </p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" style="margin:20px 0">
                <div><strong class="create">请求包体：</strong></div>
            </el-col>
        </el-row>

        <!-- 转换json格式组件 -->
        <div class="json-viewer" v-html="requestJson"></div>

        <el-row>
            <el-col :span="24" style="margin:20px 0">
                <div><strong class="create">参数说明：</strong></div>
            </el-col>
        </el-row>

        <el-table
                :data="requestTableData"
                border
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
            >
            </el-table-column>

        </el-table>

        <el-row v-if="permissionText != ''">
            <el-col :span="24" style="margin-top: 20px">
                <div><strong class="create">权限说明：</strong></div>
            </el-col>
            <el-col :span="24" style="margin-top: 20px">
                <div v-html="permissionText"></div>
            </el-col>
        </el-row>


        <el-row>
            <el-col :span="24" style="margin:20px 0">
                <div><strong class="create">返回结果：</strong></div>
            </el-col>
        </el-row>
        <div class="json-viewer" v-html="responseJson"></div>
        <el-row>
            <el-col :span="24" style="margin:20px 0">
                <div><strong class="create">参数说明：</strong></div>
            </el-col>
        </el-row>
        <el-row>
            <el-table
                    :data="responseTableData"
                    border
                    style="width: 100%;">
                <el-table-column
                        prop="date"
                        label="参数"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="说明"
                >
                </el-table-column>

            </el-table>
        </el-row>
        <el-row v-if="notes != ''">
            <el-col :span="24" style="margin-top: 20px">
                <div><strong class="create">注意事项：</strong></div>
            </el-col>
            <el-col :span="24" style="margin-top: 20px">
                <div v-html="notes">


                </div>
            </el-col>
        </el-row>


    </div>
</template>
<script>

    export default {
        name: "api-doc",
        props: {
            apiName: {
                type: String,
                default: function () {
                    return ''
                }
            },
            methodType: {
                type: String,
                default: function () {
                    return 'GET'
                }
            },
            //右侧已选数据的文本
            apiUrl: {
                type: String,
                default: function () {
                    return ''
                }
            },
            requestData: {
                type: Object,
                default: function () {
                    return {}
                }
            },
            responseData: {
                type: Object,
                default: function () {
                    return {}
                }
            },
            notes: {
                type: String,
                default: function () {
                    return ''
                }
            },
            permissionText: {
                type: String,
                default: function () {
                    return ''
                }
            },
            requestTableData: {
                type: Array,
                default: function () {
                    return []
                }
            },
            responseTableData: {
                type: Array,
                default: function () {
                    return []
                }
            },
        },
        data: function () {
            return {
                requestJson: '',
                responseJson: '',

            }
        },
        created() {
            this.requestJson = this.json2html(this.requestData);
            this.responseJson = this.json2html(this.responseData);
        },

        methods: {}
    }

</script>

<style>
    .api-doc .el-table__header th {
        background-color: #F7F8FB;

    }

    .name-text{
        font-size: 28px;
        line-height: 40px;
        padding-right: 8px;
        color: #333;
        font-weight: 400;
        padding-top: 3%;
    }


</style>

