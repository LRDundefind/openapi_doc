<template>
    <div class="group">
        <h2>全局错误码</h2>

        <el-row>
            <el-col :span="24" style="margin:20px 0">
                <div><strong class="create">全局返回码说明如下：</strong></div>
            </el-col>
        </el-row>

        <el-table
                :data="tableData">
            <el-table-column
                    prop="date"
                    label="错误码"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="错误说明"
                    width="120">
            </el-table-column>

            <el-table-column
                    prop="province"
                    label="排查方法"
                    width="600">
            </el-table-column>

        </el-table>


    </div>
</template>
<script>

    export default {
        name: 'group',
        data: function () {
            return {
                tableData: [
                    {
                        date: '-1',
                        name: '系统繁忙',
                        province: '服务器暂不可用，建议稍候重试。建议重试次数不超过3次。',
                    },
                    {
                        date: '0',
                        name: '请求成功',
                        province: '接口调用成功',
                    },
                    {
                        date: '61001',
                        name: '手机号已在魔学院注册',
                        province: '手机号已在魔学院注册',
                    },
                    {
                        date: '62001',
                        name: 'parentid 不存在',
                        province: '部门父级ID不存在',
                    },
                    {
                        date: '63001',
                        name: 'catid 不存在',
                        province: 'catid为空，或者没有在魔学院系统创建',
                    },
                    {
                        date: '63002',
                        name: 'tagid 不能重复',
                        province: '添加新标签时，tagid 在系统中必须唯一',
                    },
                    {
                        date: '63003',
                        name: 'tagname 在同分类下不能重复',
                        province: 'tagname 在同分类不能重复',
                    },
                    {
                        date: '63004',
                        name: '创建标签时，标签字段格式或长度不符合规范',
                        province: '请按errmsg 提示修正',
                    },
                    {
                        date: '63100',
                        name: 'tagid 不存在',
                        province: 'tagid 为空，或者不在通讯录中',
                    },
                    {
                        date: '63101',
                        name: '修改标签时，标签字段格式或长度不符合规范',
                        province: '请按errmsg 提示修正',
                    },
                    {
                        date: '64100',
                        name: '删除指定标签时，tagid不存在',
                        province: '',
                    }
                ]
            }
        },
        mounted() {

        },

        methods: {}
    }

</script>

