// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Icon, Calendar, Collapse, CollapseItem } from 'vant'
Vue.use(Button)
Vue.use(Icon)
Vue.use(Calendar)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
