import Vue from 'vue'
import App from './App.vue'
import store from './store'

// mian.js 入口文件
// 职责:做全局范围内的依赖和配置
// 职责:创建一个根VUE实例
// 日志的详细与否,生产环境 开发环境

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
