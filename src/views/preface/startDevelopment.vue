<template>
    <div class="group">
        <api-doc
                :api-name="apiName"
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
                <p>开发者需要缓存access_token，用于后续接口的调用（注意：不能频繁调用get-token接口，否则会受到频率拦截）。当access_token失效或过期时，需要重新获取。</p>
                <p>access_token的有效期通过返回的expires_in来传达，正常情况下为7200秒（2小时），有效期内重复获取返回相同结果，过期后获取会返回新的access_token。同时之前的过期后获取会返回新的access_token将失效。</p>
                <p>access_token至少保留512字节的存储空间。</p>
                <p>魔学院可能会出于运营需要，提前使access_token失效，开发者应实现access_token失效时重新获取的逻辑。</p>
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
                apiName: '开始开发',
                apiUrl: this.apiUrl('v1/connect/get-token?corpid=CORPID&corpsecret=CORPSECRET'),
                requestData: {
                    "corpid": "MXY98702456780",
                    "corpsecret": "",
                },
                responseData: {
                    "status": "Y",
                    "errmsg": "",
                    "errcode": 0,
                    "results": {
                        "access_token": "a89a40cc81c08f390a1971576726a98434b59657",
                        "expires_in": 1511252368
                    }
                },

                requestTableData: [{
                    date: 'corpid',
                    name: '是',
                    province: '企业ID',
                }, {
                    date: 'corpsecret',
                    name: '是',
                    province: '企业的凭证密钥(魔学院分配)',
                }],
                responseTableData: [{
                    date: 'access_token',
                    province: '获取到的凭证,最长为512字节',
                }, {
                    date: 'expires_in',
                    province: '凭证的有效时间（Unix时间戳）',
                }],
                notes: ''
            }
        },

        mounted() {

        },

        methods: {}
    }

</script>

