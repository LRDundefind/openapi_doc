<template>
    <div class="group">
        <api-doc
                :api-name="apiName"
                :method-type="methodType"
                :api-url="apiUrl"
                :request-data="requestData"
                :response-data="responseData"
                :request-table-data="requestTableData"
                :response-table-data="responseTableData"
        >
        </api-doc>
        <el-row>
            <el-col :span="24" style="margin-top: 20px">
                <div><strong class="create">注意事项：</strong></div>
            </el-col>
            <el-col :span="24" style="margin-top: 20px">
            </el-col>
        </el-row>
    </div>
</template>

<script>

    import apiDoc from '@/components/apiDoc/api-doc';

    export default {
        components: {apiDoc},
        data: function () {
            return {
                apiName: '创建用户',
                methodType: 'POST',

                apiUrl: this.apiUrl('v1/contacts/user/create?access_token=ACCESS_TOKEN'),
                requestData: {
                    "userid": "1",
                    "name": "张三",
                    "mobile": "13987654321",
                    "department": "1",
                },
                responseData: {
                    "errmsg": "",
                    "errcode": 0,
                    "results": {
                        "uid": "5",
                    }
                },

                requestTableData: [
                    {
                        date: 'userid',
                        name: '是',
                        province: '用户id，长度限制为50字符, 企业下唯一',
                    }, {
                        date: 'name',
                        name: '是',
                        province: '用户名',
                    }, {
                        date: 'mobile',
                        name: '否',
                        province: '手机号',
                    },
                    {
                        date: 'department',
                        name: '否',
                        province: '部门ID，多个用,隔开',
                    }],
                responseTableData: [{
                    date: 'id',
                    province: '用户UID',
                }]
            }
        },
        created() {

        }


    }

</script>

