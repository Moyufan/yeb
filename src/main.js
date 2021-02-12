import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

Vue.config.productionTip = false
Vue.use(ElementUI, { locale });

new Vue({
  // 渲染引入的router
  router,
  // 渲染app组件，上面import的
  render: h => h(App)
}).$mount('#app')
