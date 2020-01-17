import 'babel-polyfill';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/app.scss';
import '@/mock' // simulation data

// 全局注册的组件和指令
import '@/components';
import '@/directive';

import dayjs from 'dayjs';
import reminder from '@/components/Reminder/index.js'
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: store.getters.size
});

Object.defineProperty(Vue.prototype, '$dayjs', {
  value: dayjs
});
Object.defineProperty(Vue.prototype, '$reminder', {
  value: reminder
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
