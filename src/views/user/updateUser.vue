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
                apiName: '更新用户',
                apiUrl: this.apiUrl('v1/contacts/user/update?access_token=ACCESS_TOKEN'),
                requestData: {
                    "tagid": "1",
                    "tagname": "JAVA",
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
                }, {
                    date: 'tagname',
                    name: '是',
                    province: '标签名称，长度限制为32个字（汉字或英文字母）',
                }],
                responseTableData: [{
                    date: 'id',
                    province: '标签自增ID',
                }]
            }
        },
        created() {

        }
    }
</script>

