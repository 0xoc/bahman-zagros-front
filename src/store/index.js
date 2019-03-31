import Vuex from 'vuex'
import Vue from 'vue'
import main from './modules/main'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        main,
    }
})  