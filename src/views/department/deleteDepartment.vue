<template>
    <div class="group">
        <api-doc
                :api-name="apiName"
                :api-url="apiUrl"
                :request-data="requestData"
                :response-data="responseData"
                :request-table-data="requestTableData"
                :response-table-data="responseTableData"
        ></api-doc>
        <el-row>
            <el-col :span="24" style="margin-top: 20px">
                <div><strong class="create">注意事项：</strong></div>
            </el-col>
            <el-col :span="24" style="margin-top: 20px">
                部门下有子部门时，需先删除子部门。
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
                apiName: '删除标签',
                apiUrl: this.apiUrl('v1/contacts/department/delete?access_token=ACCESS_TOKEN'),
                requestData: {
                    "id": "1",

                },
                responseData: {
                    "status": "Y",
                    "errmsg": "",
                    "errcode": 0,
                    "results": {
                        "id": "5",
                    }
                },

                requestTableData: [{
                    date: 'id',
                    name: '是',
                    province: '部门id。（注：不能删除根部门；不能删除含有子部门、用户的部门）',
                }],
                responseTableData: [{
                    date: 'id',
                    province: '部门自增ID',
                }]
            }
        },
        created() {

        },

        methods: {}
    }

</script>

