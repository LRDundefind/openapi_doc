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
            <el-aside width="13%" id="aside">
                <el-menu default-active="/user/create" :router="true">
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

                    <div class="el-menu-title" style="margin-top: -3%">
                        通讯录管理
                    </div>
                    <el-submenu index="1">
                        <template slot="title" class="is-active">用户管理</template>
                        <el-menu-item index="/user/create">创建用户</el-menu-item>
                        <el-menu-item index="/user/get">读取用户</el-menu-item>
                        <el-menu-item index="/user/update">更新用户</el-menu-item>
                        <el-menu-item index="/user/delete">删除用户</el-menu-item>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title">部门管理</template>
                        <!--<el-menu-item-group>-->
                        <!--<template slot="title">分组一</template>-->
                        <el-menu-item index="/createDepartment">创建部门</el-menu-item>
                        <el-menu-item index="/updateDepartment">更新部门</el-menu-item>
                        <el-menu-item index="/updateDepartment">删除部门</el-menu-item>
                        <el-menu-item index="/getDepartment">获取部门列表</el-menu-item>
                        <!--</el-menu-item-group>-->
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">标签管理</template>
                        <!--<el-menu-item-group>-->
                        <!--<template slot="title">分组一</template>-->
                        <el-menu-item index="/createLabel">创建标签</el-menu-item>
                        <el-menu-item index="/UpdateName">更新标签名字</el-menu-item>
                        <el-menu-item index="/deleteLabel">删除标签</el-menu-item>
                        <el-menu-item index="/getLabel">获取标签列表</el-menu-item>
                    </el-submenu>
                    <li style="min-height: 800px">
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

    import './style/index.scss'



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
            this.$router.push('/user/create')
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

