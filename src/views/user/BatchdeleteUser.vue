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
        ></api-doc>
    </div>
</template>
<script>

    import apiDoc from '@/components/apiDoc/api-doc';

    export default {
        components: {apiDoc},
        data: function () {
            return {
                apiName: '批量删除用户',
                methodType: 'POST',
                apiUrl: this.apiUrl('v1/contacts/user/batchdelete?access_token=ACCESS_TOKEN'),
                requestData: {
                    "useridlist": ["001", "lisi"]
                },
                responseData: {
                    "errmsg": "deleted",
                    "errcode": 0,
                    "results": {}
                },

                requestTableData: [{
                    date: 'useridlist',
                    name: '是',
                    province: '要删除的用户userid，(最多支持200个)',
                }],
                responseTableData: null
            }
        },
        created() {

        },

        methods: {}
    }

</script>

