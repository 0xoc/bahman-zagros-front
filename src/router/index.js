import VueRouter from 'vue-router'
import Login from '../components/Login'
import TourList from '../components/TourList'
import TourDetail from '../components/TourDetail'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login},
    { path: '/list', component: TourList},
    { path: '/detail/:tour_gp', component: TourDetail},
]

export default new VueRouter ({
    mode: 'history',
    routes
})
