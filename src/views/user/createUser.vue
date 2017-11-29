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
                    "userid": "zhangshan",
                    "name": "张三",
                    "mobile": "13987654321",
                    "department": ["1"],
                    "avatar": "http://xxx.com/1.png"
                },
                responseData: {
                    "errcode": 0,
                    "errmsg": "created",
                    "results": {}
                },

                requestTableData: [
                    {
                        date: 'userid',
                        name: '是',
                        province: '用户id，长度限制为50字符, 企业下唯一，无法修改',
                    }, {
                        date: 'name',
                        name: '是',
                        province: '成员名称。长度为1~30个字节',
                    }, {
                        date: 'mobile',
                        name: '否',
                        province: '手机号',
                    },
                    {
                        date: 'email',
                        name: '否',
                        province: '邮箱。长度为0~60个字节。企业内必须唯一',
                    },
                    {
                        date: 'gender',
                        name: '否',
                        province: '性别。1表示男性，2表示女性',
                    },
                    {
                        date: 'department',
                        name: '否',
                        province: '部门ID，多个用,隔开',
                    },
                    {
                        date: 'avatar',
                        name: '否',
                        province: '用户头像超链接',
                    },
                    {
                        date: 'disabled',
                        name: '否',
                        province: '启用/禁用成员。0表示启用用户，1表示禁用用户（禁用的用户将无法登录）',
                    }
                ],
                responseTableData: []
            }
        },
        created() {
        }

    }

</script>

