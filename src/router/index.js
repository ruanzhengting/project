// 引入Vue
import Vue from 'vue'
// 引入路由模块
import Router from 'vue-router'
// 引入组件模块
import Index from '@/view/index/index'
import Cart from '@/view/cart/index'
// 安装注册 在vue中初始化
Vue.use(Router)

const router = new Router({
  // 路由组
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
// 导出模块
export default router
