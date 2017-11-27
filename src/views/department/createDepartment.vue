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
                apiName: '创建部门',
                methodType: 'POST',

                apiUrl: this.apiUrl('v1/contacts/department/create?access_token=ACCESS_TOKEN'),
                requestData: {
                    "name": "JAVA",
                    "parentid": "0",
                    "id": "2",
                    "order": "2",
                },
                responseData: {
                    "errmsg": "",
                    "errcode": 0,
                    "results": {
                        "id": "5",
                    }
                },

                requestTableData: [
                    {
                        date: 'id',
                        name: '是',
                        province: '部门id，非负整型, 企业下唯一, 11位整型',
                    },
                    {
                        date: 'name',
                        name: '是',
                        province: '部门名称，长度限制为32个字（汉字或英文字母），不能包含特殊字符',
                    }, {
                        date: 'parentid',
                        name: '是',
                        province: '父部门ID，0为一级分类, 11位整型',
                    }, {
                        date: 'order',
                        name: '是',
                        province: '在父部门中的排序值',
                    }
                ],
                responseTableData: [{
                    date: 'id',
                    province: '部门自增ID',
                }]
            }
        },
        created() {

        }


    }

</script>

