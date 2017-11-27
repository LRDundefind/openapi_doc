<template>
  <div class="group">
    <h2>概述</h2>

    <el-row>
      <el-col :span="24" style="margin:20px 0">
        <div><strong class="create">欢迎使用魔学院开放平台：</strong></div>
      </el-col>
    </el-row>

    <div class="create-content">
      接入魔学院开发平台可实现通讯录同步、身份验证、移动端SDK等API，管理员可以使用这些API，为企业接入更多个性化的办公应用。


    </div>


  </div>

</template>
<script>
    export default {
        name: 'group',
        data: function () {
            return {
                totalActiveNum: 3,
                totalSignUp: 204,
                auditNum: 15,
                activeNum: 0,
                currentType: '全部',
                selectItems: [],
                types: ['全部', '测试活动', '免费活动', '收费活动'],
                tableData1: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],

                Data: [
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
//        computed: {
//            filteredTableData: function () {
//                var type = this.currentType;
//                return this.tableData.filter(function (data) {
//                    if (type == '全部' || type == '') {
//                        return true
//                    } else {
//                        return data.type == type
//                    }
//                })
//            }
//        },
        methods: {
//            handleSelect: function (row, column, cell, event) {
//                if (column.label == '操作') {
//                    this.$router.push('/activeManage/detail/page1');
//                } else if(column.type == 'selection'){
//                    row.$info = !row.$selected;
//                }else{
//                    row.$selected = !row.$selected;
//                    row.$info = row.$selected;
//                }
//            },
//            selectionchange: function (val) {
//                var arr = [];
//                val.forEach(function (item) {
//                    arr.push(item.id);
//                });
//                this.selectItems = arr;
//                this.activeNum = this.selectItems.length;
//            },
//            handleRemove:function(){
//                var tableData = this.tableData;
//                this.selectItems.forEach(function (id) {
//                    tableData.forEach(function (data) {
//                        if(id == data.id){
//                            tableData.splice(tableData.indexOf(data),1)
//                        }
//                    })
//                });
//                this.selectItems = [];
//            },
        }
    }
</script>
<style>

  .group {
    width: 57%;
    margin-left: 15%;
  }

  .group .create {
    font-weight: 700;
    line-height: 26px;
  }

  .group .create-content {
    width: 100%;
    min-height: 50px;
    padding: 0;
    border: 1px solid #ddd;
    white-space: pre-wrap;
    word-wrap: break-word;
    background-color: rgb(247, 248, 251);
  }

  .group .create-content li {
    list-style-type: decimal;
    padding-left: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    color: #333;
    font-size: 15px;
  }

  .group .create-content li code {
    display: inline;
    max-width: initial;
    padding: 0;
    margin: 0;
    overflow: initial;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
    font-size: 15px;
  }

  .pln {
    color: #000;
  }

  .str {
    color: #080;
  }

  .clo, .opn, .pun {
    color: #660;
  }

  /*.group .create-content ol .line {*/
  /*color: red;*/
  /*font-size: 15px;*/
  /*}*/

  .group > .head > .el-col > .el-col {
    padding: 20px 0;
    border-right: solid 1px #fff;
  }

  .group .head {
    text-align: center;
    color: #fff;
    font-size: 30px;
    margin-bottom: 50px;
  }

  .allActive .head span {
    font-size: 16px;
  }

</style>
