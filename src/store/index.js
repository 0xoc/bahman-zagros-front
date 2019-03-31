import Vuex from 'vuex'
import Vue from 'vue'
import login from './modules/login'
import tour from './modules/tour'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        login,
        tour
    }
})  