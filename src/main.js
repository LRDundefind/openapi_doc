// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routeConfig from './router/index'
import 'element-ui/lib/theme-chalk/index.css';

import store from './store.js'
import utils from './utils/util'
Vue.use(utils);


//加载路由中间件
Vue.use(VueRouter);
Vue.use(VueResource);

//定义路由
const router = new VueRouter({
  routes: routeConfig
});

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
});
