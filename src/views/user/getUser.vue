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
                apiName: '读取用户',
                requestJson: '',
                responseJson: '',
                apiUrl: this.apiUrl('v1/contacts/user/get?access_token=ACCESS_TOKEN'),
                requestData: {
                    "catid": "1",
                },
                responseData: {
                    "status": "Y",
                    "errmsg": "",
                    "errcode": 0,
                    "results": [
                        {
                            "id": "2",
                            "tagname": "性别",
                            "catid": "0",
                            "tagid": "1000",
                            "children": [
                                {
                                    "id": "12",
                                    "tagname": "男",
                                    "catid": "2",
                                    "tagid": "1236",
                                    "children": []
                                },
                                {
                                    "id": "13",
                                    "tagname": "女",
                                    "catid": "2",
                                    "tagid": "1237",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "3",
                            "tagname": "城市",
                            "catid": "0",
                            "tagid": "1001",
                            "children": [
                                {
                                    "id": "8",
                                    "tagname": "北京",
                                    "catid": "3",
                                    "tagid": "1234",
                                    "children": []
                                },
                                {
                                    "id": "9",
                                    "tagname": "上海",
                                    "catid": "3",
                                    "tagid": "1235",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },

                requestTableData: [
                    {
                        date: 'catid',
                        name: '否',
                        province: '标签分类id，为空返回所有标签',
                    }
                ],
                responseTableData: [
                    {
                        date: 'tagid',
                        province: '标签ID/标签分类ID',
                    },
                    {
                        date: 'catname',
                        province: '标签名称/标签分类',
                    },
                    {
                        date: 'catid',
                        province: '标签分类ID',
                    },
                    {
                        date: 'children',
                        province: '分类下标签列表',
                    }
                ]
            }
        },
        created() {

        },

        methods: {}
    }

</script>

