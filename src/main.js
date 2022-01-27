import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//导入字体图标
import './assets/fonts/iconfont.css'
//导入全局样式表
import './assets/css/global.css'
import axios from "axios";
import TreeTable from 'vue-table-with-tree-grid'
//配置请求的根路径
//axios.defaults.baseURL='http://172.16.20.65:8888/api/private/v1/'
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
//进行拦截
axios.interceptors.request.use(config => {
    console.log(config);
    // 登录授权 请求验证是否有token  需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌
    config.headers.Authorization = window.sessionStorage.getItem('token');
    // 在最后必须return
    return config
})
//挂载到原型
Vue.prototype.$http=axios
Vue.config.productionTip = false

Vue.component('tree-table',TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
