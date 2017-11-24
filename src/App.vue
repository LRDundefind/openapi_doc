<template>
    <!--<el-container :style="{height: clientHeight +'px'}" style="border: 1px solid #eee">-->
    <el-container style="border: 1px solid #eee">
        <el-header id="header">
            <el-row>
                <el-col :span="17">
                    <img class="f-r" src="../static/openApi_logo.png" height="32" width="261"/>
                </el-col>
                <!--<el-col :span="1">-->
                    <!--<i class="el-icon-search header-icon"></i>-->
                <!--</el-col>-->
                <!--<el-col :span="3">-->
                    <!--<el-input class="el-input  f-l" placeholder="搜索"></el-input>-->
                <!--</el-col>-->
                <!--<el-col :span="3">-->
                    <!--<h4 class="header-text">联系我们</h4>-->
                    <!--&lt;!&ndash;<router-link to="/address">联系我们</router-link>&ndash;&gt;-->
                <!--</el-col>-->
            </el-row>
        </el-header>
        <el-main>
        <el-container  :style="{height: clientHeight +'px'}">
            <el-aside width="15%" id="aside">
                <el-menu default-active="/createMember" :router="true">
                    <div class="el-menu-title">
                        开发前必读
                    </div>
                    <el-menu-item index='/summary'>
                        <span slot="title" class="li-text">概述</span>
                    </el-menu-item>
                    <el-menu-item index='/startDevelopment'>
                        <span slot="title" class="li-text">开始开发</span>
                    </el-menu-item>
                    <el-menu-item index='/developerTools'>
                        <span slot="title" class="li-text">开发者调试</span>
                    </el-menu-item>
                    <el-menu-item index='/updateLog'>
                        <span slot="title" class="li-text">更新日志</span>
                    </el-menu-item>

                    <div class="el-menu-title" style="margin-top: -8%">
                        通讯录管理
                    </div>
                    <el-submenu index="1">
                        <template slot="title" class="is-active">成员管理</template>
                        <el-menu-item index="/createMember">创建成员</el-menu-item>
                        <el-menu-item index="/readMember">读取成员</el-menu-item>
                        <!--<el-menu-item index="/activePublic">读取成员</el-menu-item>-->
                        <!--<el-menu-item index="/activePublic">读取成员</el-menu-item>-->
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title">部门管理</template>
                        <!--<el-menu-item-group>-->
                        <!--<template slot="title">分组一</template>-->
                        <el-menu-item index="/establishDepartment">创建部门</el-menu-item>
                        <el-menu-item index="/updateDepartment">更新部门</el-menu-item>
                        <!--</el-menu-item-group>-->
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">标签管理</template>
                        <!--<el-menu-item-group>-->
                        <!--<template slot="title">分组一</template>-->
                        <el-menu-item index="/createLabel">创建标签</el-menu-item>
                        <el-menu-item index="/UpdateName">更新标签名字</el-menu-item>
                        <el-menu-item index="/deleteLabel">删除标签</el-menu-item>
                        <el-menu-item index="/getMembers">获取标签成员</el-menu-item>
                    </el-submenu>
                    <li style="min-height: 500px">
                    </li>
                </el-menu>
            </el-aside>

            <el-main id="main-right">
                <div class="view">
                    <transition name="fade">
                        <router-view class="view"></router-view>
                    </transition>
                </div>
            </el-main>
        </el-container>
        </el-main>
    </el-container>
    <!--</el-container>-->
</template>


<script>
    import Vue from 'vue'
    import Element from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css'
    import $ from 'jquery'


    import json from '@/utils/service/jquery.json-viewer.js';


    Vue.use(Element)
    export default {
        name: 'app',
        data: function () {
            return {
                active: true,
                headerFixed: true,
                clientHeight: document.documentElement.clientHeight,
            }
        },

        created: function () {
            this.$router.push('/createMember');
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
                that.clientHeight = `${document.documentElement.clientHeight}`;
            }
        }
    }

</script>

<style>
    /*主体*/
    body{
        overflow-y: hidden;
    }

    .el-main {
        border: 0;
        background-color: #ffffff;
        padding: 0!important;
        /*overflow-x: hidden;*/
    }

    #main-right {
        background-color: #ffffff;
        /*margin-bottom: 2%;*/
    }

    .el-submenu.is-active .el-submenu__title {
        padding-left: 15% !important;
    }

    .el-submenu__title {
        padding-left: 15% !important;
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

    main .el-menu {
        background-color: transparent !important;
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

    img {
        margin-top: 0.8%;
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
        font-weight: 700;
        padding-top: 10%;
        font-size: 14px;
        overflow: hidden;
        zoom: 1;
        height: 100%;
        color: #999;
        line-height: 32px;
        cursor: default;
        padding-left: 15%;
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
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: #F5F5F5;
    }

    .li-text {
        padding-left: 10%;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .group {
        width: 57%;
        margin-bottom: 7%;
        padding-left: 25% !important;
    }

    .group .create {
        font-weight: 700;
        line-height: 1.5;
    }

    .el-table--fit{
        width: 95%!important;
    }

</style>