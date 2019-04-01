import Vuex from 'vuex'
import Vue from 'vue'
import auth from './modules/auth'
import tour_group from './modules/tour_group'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        auth,
        tour_group,
    }
})  