/**
 * 项目的启动入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'

Vue.config.productionTip = false
// 创建vue根实例
// 把router/store配置到vue中
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
