// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import '@/assets/js/common/rem'
import router from './router'
import api from '@/api'
import tapConfig from '@/assets/js/common/tapCount'
import loading from '@/assets/js/common/loading'
import msgBox from '@/assets/js/common/msgBox'
import { Lazyload } from 'vant';
import {errorHandler} from '@/assets/js/common/errorHandler'
// import 'vant/lib/index.css'

// vue错误监控
Vue.config.errorHandler = errorHandler;
Vue.config.warnHandler = errorHandler;

// 懒加载
Vue.use(Lazyload, {
    preLoad: 2,
    // error: 'static/error.png',
    loading: require('@/assets/images/common/loading_pic.png'),
    // attempt: 3,
    // listenEvents: ['scroll','touchmove']
});
Vue.use(msgBox)
Vue.use(loading)
Vue.config.productionTip = false
Vue.prototype.$tapConfig = tapConfig

Vue.use(api)
// Vue.prototype.$http = axiosWrap



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App,
    },
    template: '<App/>'
})