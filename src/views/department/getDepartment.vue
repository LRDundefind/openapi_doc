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
    </div>
</template>
<script>

    import apiDoc from '@/components/apiDoc/api-doc';

    export default {
        components: {apiDoc},
        data: function () {
            return {
                apiName: '获取标签列表',
                requestJson: '',
                responseJson: '',
                apiUrl: this.apiUrl('v1/contacts/department/list?access_token=ACCESS_TOKEN'),
                requestData: {
                    "catid": "1",
                },
                responseData: {
                    "runtime": 0.04,
                    "status": "Y",
                    "errmsg": "",
                    "errcode": 0,
                    "results": [

                        {
                            "id": "100",
                            "parentid": "0",
                            "name": "JAVA",
                            "children": []
                        },
                        {
                            "id": "0",
                            "parentid": "0",
                            "name": "WEB",
                            "children": [
                                {
                                    "did": "44992",
                                    "department_id": "0",
                                    "parentid": "34936",
                                    "name": "JAVASCRIPT",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },

                requestTableData: [
                    {
                        date: 'id',
                        name: '否',
                        province: '部门id，为空时返回全量部门树结构',
                    }
                ],
                responseTableData: [
                    {
                        date: 'id',
                        province: '部门ID',
                    },
                    {
                        date: 'name',
                        province: '部门名称',
                    },
                    {
                        date: 'parentid',
                        province: '父部门ID',
                    },
                    {
                        date: 'children',
                        province: '子部门列表',
                    }
                ]
            }
        },
        created() {

        },

        methods: {}
    }

</script>

