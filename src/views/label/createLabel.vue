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
                <p>在魔学院标签体系中，对标签是有进行分类的，比如：性别分类下：男和女两个标签。</p>
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
                apiName: '创建标签',
                methodType: 'POST',

                apiUrl: this.apiUrl('v1/contacts/label/create?access_token=ACCESS_TOKEN'),
                requestData: {
                    "tagid": "1",
                    "tagname": "",
                    "catid": "",
                },
                responseData: {
                    "errmsg": "",
                    "errcode": 0,
                    "results": {
                        "id": "5",
                    }
                },

                requestTableData: [{
                    date: 'tagid',
                    name: '是',
                    province: '标签id，非负整型, 企业下唯一',
                }, {
                    date: 'tagname',
                    name: '是',
                    province: '标签名称，长度限制为32个字（汉字或英文字母）',
                }, {
                    date: 'catid',
                    name: '是',
                    province: '标签分类ID，0为标签分类',
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

