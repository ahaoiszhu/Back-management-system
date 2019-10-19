// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  Router from  'vue-router'
import axios from 'axios'
import { Button, Select } from 'element-ui'
import VideoPlayer from 'vue-video-player'
import SlideVerify from 'vue-monoplasty-slide-verify';
// import VueCookies from 'vue-cookies'
Vue.use(SlideVerify);
// Vue.use(VueCookies);
import {setCookie,getCookie,delCookie} from '@/assets/cookie'
Vue.prototype.$cookieStore = {setCookie,getCookie,delCookie}
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.prototype.$axios = axios
Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.prototype.Router = Router
Vue.use(ElementUI,Button,Select,Router,VideoPlayer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
