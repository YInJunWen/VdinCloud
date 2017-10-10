// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入muse-ui
import MuseUI from 'muse-ui'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 light 主题
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;
/* eslint-disable no-new */
Vue.use(MuseUI);
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});


