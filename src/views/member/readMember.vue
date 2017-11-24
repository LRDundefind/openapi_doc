<template>
    <div class="group">
        <h2>读取成员</h2>
        <el-row>
            <el-col :span="24">
                <div class=" "><strong class="create">请求方式：</strong> POST（HTTPS） </div>
            </el-col>
            <el-col :span="24">
                <div class=" "><strong class="create">请求地址：</strong>
                    https://qyapi.weixin.qq.com/cgi-bin/user/create?access_token=ACCESS_TOKEN）
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" style="margin:20px 0">
                <div><strong class="create">请求包体：</strong></div>
            </el-col>
        </el-row>

        <!-- 转换json格式组件 -->
        <json-viewer :data="memberData2" :id-name="jsonId.jsonViewer1"></json-viewer>
        <!--<json-viewer :data="Data1" :id-name="jsonId.jsonViewer2"></json-viewer>-->
        <el-row>
            <el-col :span="24" style="margin:20px 0">
                <div><strong class="create">参数说明：</strong></div>
            </el-col>
        </el-row>

        <el-table
                :data="tableData3">
            <el-table-column
                    prop="date"
                    label="参数"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="必须"
                    width="120">
            </el-table-column>

            <el-table-column
                    prop="province"
                    label="说明"
                    width="600">
            </el-table-column>

        </el-table>

        <el-row>
            <el-col :span="24" style="margin-top: 20px">
                <div><strong class="create">权限说明：</strong></div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24" style="margin-top: 20px">
                <div>系统应用须拥有指定部门的管理权限。</div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24" style="margin:20px 0">
                <div><strong class="create">返回结果：</strong></div>
            </el-col>
        </el-row>
        <json-viewer :data="memberData3" :id-name="jsonId.jsonViewer2"></json-viewer>

    </div>
</template>
<script>
    import jsonViewer from '@/components/jsonViewer/jsonViewer';

    export default {
        name: 'group',
        data: function () {
            return {
                jsonId: {
                    jsonViewer1: "memberData2",
                    jsonViewer2: "memberData3"
                },

                memberData2: [
                    {
                        id: '001',
                        title: '"userid"',
                        type: '"zhangsan"',
                    }, {
                        id: '002',
                        title: '"userid"',
                        type: '"张三" ',
                    }, {
                        id: '003',
                        title: '"userid"',
                        type: '"zhangsan"',
                    }, {
                        id: '004',
                        title: '"english_name"',
                        type: '"jackzhang"',
                    }],
                memberData3: [
                    {
                        id: '001',
                        title: '"userid"',
                        type: '"zhangsan"',
                    }, {
                        id: '002',
                        title: '"userid"',
                        type: '"李四" ',
                    }, {
                        id: '003',
                        title: '"userid"',
                        type: '"zhangsan"',
                    }, {
                        id: '004',
                        title: '"english_name"',
                        type: '"jackzhang"',
                    }],

                tableData3: [{
                    date: 'access_token',
                    name: '是',
                    province: '调用接口凭证',
                }, {
                    date: 'userid',
                    name: '是',
                    province: '成员UserID。对应管理端的帐号，企业内必须唯一。不区分大小写，长度为1~64个字节',
                }, {
                    date: 'name',
                    name: '是',
                    province: '成员名称。长度为1~64个字节',
                }, {
                    date: 'english_name',
                    name: '否',
                    province: '英文名。长度为1-64个字节。',
                }, {
                    date: 'mobile',
                    name: '否',
                    province: '手机号码。企业内必须唯一，mobile/email二者不能同时为空',
                }, {
                    date: 'department',
                    name: '是',
                    province: '成员所属部门id列表,不超过20个',
                }, {
                    date: 'order',
                    name: '否',
                    province: '部门内的排序值，默认为0。数量必须和department一致，数值越大排序越前面。有效的值范围是[0, 2^32)',
                }]
            }
        },
        components: {jsonViewer},
        mounted() {

        },

        methods: {

        }
    }

</script>

<style>


</style>
