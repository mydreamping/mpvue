import Vue from 'vue';
import App from './App';
import store from './store/index';
import interfaces from './utils/interfaces';
import https from './utils/https';
import methods from './utils/methods'

Vue.config.productionTip = false;
Vue.prototype.$store = store;
Vue.prototype.$interfaces = interfaces;
Vue.prototype.$https = https;
Vue.prototype.$methods = methods;

App.mpType = 'app'

const app = new Vue(App)
app.$mount()
