<template>
    <el-container :style ="{height: clientHeight +'px'}" style="border: 1px solid #eee">
        <el-container>
            <el-header id="header">
                <el-row>
                    <el-col :span="17">
                        <img class="f-r" src="../static/logo.png" height="50" width="100"/>
                    </el-col>
                    <el-col :span="1">
                        <i class="el-icon-search header-icon"></i>
                    </el-col>
                    <el-col :span="3">
                        <el-input class="el-input  f-l" placeholder="搜索"></el-input>
                    </el-col>
                    <el-col :span="3">
                        <h4 class="header-text">联系我们</h4>
                    </el-col>
                </el-row>
            </el-header>

            <el-container>
                <el-aside width="15%" id="aside">
                    <el-menu default-active="/activePublic" :router="true">
                        <div class="el-menu-title">
                            通讯录管理
                        </div>
                        <el-submenu index="1">
                            <template slot="title" class="is-active">成员管理</template>
                            <el-menu-item index="/activePublic">创建成员</el-menu-item>
                            <el-menu-item index="/group">读取成员</el-menu-item>
                            <!--<el-menu-item index="/activePublic">读取成员</el-menu-item>-->
                            <!--<el-menu-item index="/activePublic">读取成员</el-menu-item>-->
                        </el-submenu>

                        <el-submenu index="2">
                            <template slot="title">部门管理</template>
                            <!--<el-menu-item-group>-->
                            <!--<template slot="title">分组一</template>-->
                            <el-menu-item index="/group1">创建部门</el-menu-item>
                            <el-menu-item index="/group2">更新部门</el-menu-item>
                            <!--</el-menu-item-group>-->
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">标签管理</template>
                            <!--<el-menu-item-group>-->
                            <!--<template slot="title">分组一</template>-->
                            <el-menu-item index="/group3">创建标签</el-menu-item>
                            <el-menu-item index="/group4">更新标签名字</el-menu-item>
                            <el-menu-item index="/group5">删除标签</el-menu-item>
                            <el-menu-item index="/group6">获取标签成员</el-menu-item>
                            <!--<el-menu-item>选项5</el-menu-item>-->
                            <!--<el-menu-item>选项6</el-menu-item>-->
                            <!--<el-menu-item>选项7</el-menu-item>-->
                            <!--<el-menu-item>选项8</el-menu-item>-->
                            <!--<el-menu-item>选项9</el-menu-item>-->
                            <!--<el-menu-item>选项10</el-menu-item>-->
                            <!--<el-menu-item>选项11</el-menu-item>-->
                            <!--<el-menu-item>选项12</el-menu-item>-->
                            <!--<el-menu-item>选13</el-menu-item>-->
                            <!--<el-menu-item>选项14</el-menu-item>-->
                            <!--<el-menu-item>选项15</el-menu-item>-->
                            <!--<el-menu-item>选项16</el-menu-item>-->
                            <!--<el-menu-item>选项17</el-menu-item>-->
                            <!--<el-menu-item>选项18</el-menu-item>-->
                            <!--<el-menu-item>选项19</el-menu-item>-->
                            <!--<el-menu-item>选项20</el-menu-item>-->
                            <!--</el-menu-item-group>-->
                            <!--<el-menu-item-group title="分组2">-->
                            <!--<el-menu-item index="3-3">选项3</el-menu-item>-->
                            <!--</el-menu-item-group>-->
                            <!--<el-submenu index="3-4">-->
                            <!--<template slot="title">选项4</template>-->
                            <!--<el-menu-item index="3-4-1">选项4-1</el-menu-item>-->
                            <!--</el-submenu>-->
                        </el-submenu>
                        <li style="min-height: 800px">
                        </li>
                    </el-menu>
                </el-aside>
                <el-main id="main-right">
                    <div class="group view">
                        <transition name="fade">
                            <router-view class="view"></router-view>
                        </transition>
                    </div>
                </el-main>
            </el-container>
        </el-container>


        <!--<div id="app">-->
        <!--&lt;!&ndash; 头部导航 &ndash;&gt;-->
        <!--<header class="header">-->
        <!--<div class="container">-->
        <!--<img src="./assets/logo.png" alt="logo" class="logo">-->
        <!--<ul class="nav">-->
        <!--<li class="nav-item"><el-input placeholder="搜索文档"></el-input></li>-->
        <!--<li class="nav-item"><router-link :to="'/guide'">指南</router-link></li>-->
        <!--<li class="nav-item"><router-link :to="'/component'">组件</router-link></li>-->
        <!--<li class="nav-item"><router-link :to="'/resource'">资源</router-link></li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--</header>-->

        <!--<main>-->

        <!--<div class="page-container">-->
        <!--<div class="left">-->
        <!--<div class="aside">-->
        <!--<h4>组件</h4>-->
        <!--<ul class="side-nav">-->
        <!--<li class="nav-item"><router-link :to="{name:'component/uploadCover'}">封面上传</router-link></li>-->
        <!--<li class="nav-item"><router-link :to="{name:'component/assignDialog'}">部门，人员，标签选择</router-link></li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--</div>-->

        <!--&lt;!&ndash; 右侧主内容区 &ndash;&gt;-->
        <!--<div  class="right">-->
        <!--<div class="comMain">-->
        <!--<router-view></router-view>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->

        <!--</main>-->
        <!--</div>-->
    </el-container>>
</template>


<script>
    import Vue from 'vue'
    import Element from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css'
    import $ from 'jquery'
    Vue.use(Element)
    export default {
        name: 'app',
        data: function () {
            return {
                active: true,
                headerFixed: true,
                clientHeight :document.documentElement.clientHeight,
            }
        },

        created: function () {
            this.$router.push('/activePublic');
        },
        methods: {
            handleOpen(key, keyPath) {
//                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
//                console.log(key, keyPath);
            }

        },

        computed: {
            filteredTableData: function () {
//                var bodyheight =  document.documentElement.clientHeight;
//                alert(bodyheight);

            }
        },
        mounted(){
            const that = this;
            window.onresize = function temp() {
                that.clientHeight = `${document.documentElement.clientHeight}` ;
            }
        },


//        watch: {
//            '$route': function (to,from) {
//                if(to.path == '/activePublic'){
//                    this.active = true ;
//                }
//                else if(to.path == '/activeManage'){
//                   this.active = false ;
//                }
//            }
//        }
    }


</script>

<style>


    /*主体*/
    .el-main{
        border: 0;
        background-color: #ffffff;
        overflow-x: hidden;
    }

    #main-right{
        background-color: #ffffff;
    }

    .el-submenu.is-active .el-submenu__title{
        padding-left: 15%!important;
    }

    .el-submenu__title{
        padding-left: 15%!important;
    }

    body {
        margin: 0;
    }

    #app {
        min-width: 1200px;
        margin: 0 auto;
        font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
    }

    /* 头部导航 */
    header {
        z-index: 1000;
        min-width: 1200px;
        transition: all 0.5s ease;
        border-top: solid 4px #ffffff;
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    }

    header.header-fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    header .el-menu-demo {
        padding-left: 300px !important;
    }

    /* 主内容区 */
    main {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        /*min-height: 800px;*/
        border: solid 40px #E9ECF1;
        background-color: #FCFCFC;
    }

    main .main-left {
        width: 15%;
        padding-top: 50px;
        position: fixed;
        overflow-y: scroll;
        overflow-x: hidden;
        text-align: center;
        height: -moz-calc(900px - 150px);
        height: -webkit-calc(900px - 150px);
        height: calc(900px - 1px);
        background-color: rgb(237, 239, 242);
        max-height: 900px;
    }

    main .main-right {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        background-color: #fff;
        padding: 50px 70px;
        padding-left: 20.8%;
    }

    main .el-menu {
        background-color: transparent !important;
        /*min-height: 1000px;*/
    }

    /*  */
    .router-link {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        color: #475669;
        text-decoration: none;
    }

    .is-active .router-link {
        color: #20a0ff;
    }

    /* 单选框 */
    .el-form-item .el-radio + .el-radio {
        margin-left: 30px !important;
    }

    /* 路由切换动效 */
    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-active {
        opacity: 0;
        transform: translateY(30px);
    }

    /* 导航栏菜单选中效果 */
    .isActive {
        color: #20a0ff !important;
    }

    #app main .aside .is-active {
        color: #475669;
    }

    /*!* 卡片 *!*/
    /*.el-card {*/
    /*overflow: visible !important;*/
    /*}*/

    /*.el-menu-vertical-demo:not(.el-menu--collapse) {*/
    /*width: 200px;*/
    /*min-height: 400px;*/
    /*}*/

    /*.el-header {*/
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    /*line-height: 60px;*/
    /*}*/

    /*.el-aside {*/
    /*color: #333;*/
    /*}*/

    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    .main-left::-webkit-scrollbar { /*滚动条整体样式*/
        /*width: 8px; !*高宽分别对应横竖滚动的尺寸*!*/
        /*height: 4px;*/
        /*background-color: rgb(204, 204, 204);*/
        width: 8px;
        height: 10px;
    }

    .main-left::-webkit-scrollbar-corner {
        background-color: transparent;
    }

    /*定义滑块 内阴影+圆角*/
    .main-left::-webkit-scrollbar-thumb { /*滚动条里面的小方块*/
        /*border-radius: 5px;*/
        /*-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);*/
        /*background-color: #ccc;*/
        background-color: #ccc;
        border-radius: 5px;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    .main-left::-webkit-scrollbar-track { /*滚动条里面轨道*/
        /*-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.01);*/
        /*border-radius: 10px;*/
        /*background: #EDEDED;*/
        background: 0 0;
    }

     img {
        margin-left: 1%;
    }

    .el-input {
        padding-left: 10%;
        margin-top: 2%;
    }

    .el-icon-search:before {
        position: absolute;
        right: 22%;
        z-index: 10;
        cursor: pointer;
        font-size: 17px;
        color: #99a9bf;
    }

    .el-input__inner {
        text-indent: 11%;
    }

    .header-text {
        font-weight: normal;
        margin-top: 4%;
        margin-left: 13%;
        color: #0C4C7F;
        -webkit-tap-highlight-color: #0C4C7F;
        cursor: pointer;
    }

    .el-menu-title {
        padding-top: 10%;
        overflow: hidden;
        zoom: 1;
        height: 100%;
        /*font-weight: 700;*/
        color: #999;
        font-weight: 500;
        line-height: 32px;
        cursor: default;
        /* margin-left: 13%; */
        padding-left: 13%;
        /* margin-top: 5%; */
        /* padding: 0 40px; */
    }

    .el-submenu .el-menu-item {
        margin-left: 20px !important;
    }

    ::-webkit-scrollbar-thumb {
        min-height: 20px;
        border-radius: 5px;
        background-clip: content-box;
        box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2) inset;
    }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    ::-webkit-scrollbar
    {
        width: 6px;
        height: 6px;
        background-color: #F5F5F5;
    }

</style>