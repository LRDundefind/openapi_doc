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
                apiName: '删除用户',
                apiUrl: this.apiUrl('v1/contacts/user/delete?access_token=ACCESS_TOKEN'),
                requestData: {
                    "userid": "001",

                },
                responseData: {
                    "errmsg": "deleted",
                    "errcode": 0,
                    "results": {}
                },

                requestTableData: [{
                    date: 'userid',
                    name: '是',
                    province: '用户id',
                }],
                responseTableData: []
            }
        },
        created() {

        },
        methods: {}
    }
</script>

