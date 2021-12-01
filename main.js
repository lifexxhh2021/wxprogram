import Vue from 'vue'
import App from './App'
import uView from "uview-ui"
Vue.use(uView)

import {RouterMount} from 'uni-simple-router'
import router from './router'

import store from '@/store'
let vuexStore = require("@/store/mixins.js");
Vue.mixin(vuexStore);

Vue.prototype.appTitle = '个性定制'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/js/http.interceptor.js'
Vue.use(httpInterceptor, app)

// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/common/js/http.api.js'
Vue.use(httpApi, app)

// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
