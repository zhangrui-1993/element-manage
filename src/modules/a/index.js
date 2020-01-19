import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/app.scss'
import '@/mock' // simulation data

//引入css 视频播放的插件
import VideoPlayer from 'vue-video-player'
require('vue-video-player/src/custom-theme.css')
import 'video.js/dist/video-js.css'
// 全局注册的组件和指令  components 引入的是svg的icons图标
import '@/components'
import '@/directive'

import dayjs from 'dayjs'
import reminder from '@/components/Reminder/index.js'
Vue.prototype.$http = axios
Vue.config.productionTip = false


Vue.use(VideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

Vue.use(ElementUI, {
  size: store.getters.size
})

Object.defineProperty(Vue.prototype, '$dayjs', {
  value: dayjs
})
Object.defineProperty(Vue.prototype, '$reminder', {
  value: reminder
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
