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
                apiName: '删除标签',
                apiUrl: this.apiUrl('v1/contacts/label/delete?access_token=ACCESS_TOKEN'),
                requestData: {
                    "tagid": "1",

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
                    date: 'tagid',
                    name: '是',
                    province: '标签id，非负整型',
                }],
                responseTableData: [{
                    date: 'id',
                    province: '标签自增ID',
                }]
            }
        },
        created() {

        },

        methods: {}
    }

</script>

