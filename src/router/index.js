import VueRouter from 'vue-router'
import Login from '../components/Login'
import TourList from '../components/TourList'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login},
    { path: '/list', component: TourList},
]

export default new VueRouter ({
    mode: 'history',
    routes
})
