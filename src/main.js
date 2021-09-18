import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'//引入共同css
import './assets/iconfont/iconfont.css'//引入字体图标css
import './assets/iconfont/iconfont_new.css'
import axios from 'axios'   //引入axios
Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
