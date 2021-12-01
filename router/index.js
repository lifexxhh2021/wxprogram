import Vue from 'vue'
import Router from 'uni-simple-router'
Vue.use(Router)

const router = new Router({
	//路由表(通过uni-read-pages插件读取pages.json中的配置)
	routes: ROUTES
})
console.log('ROUTES => ', ROUTES)

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log('router beforeEach => ', to)
	next()
})

// 全局路由后置守卫
router.afterEach((to, from) => {})

export default router