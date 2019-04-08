import Vue from 'vue';
import Vuex from 'vuex';
//*代表所有 引入getters，mutations，actions的所有暴露的方法
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

//使用Vue的插件引入函数Vue.use()使用Vuex
Vue.use(Vuex)

//所需的常量
const state = {
    isAuthenticated:false,
    user:null,
    openId:'',
    lessonInfo:null
}

//暴露方法
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})