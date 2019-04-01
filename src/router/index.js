import VueRouter from 'vue-router'
import Login from '../components/Login'
import TourList from '../components/TourList'
import Vue from 'vue'
import Page from '../components/Page'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/login',
        component: Login,
        name: 'login'
    },
    
    { 
        path: '/tours',
        component: Page,
        children: 
        [
            {
                path: 'all',
                component: TourList,
                name: 'all-tours'
            }
        ]
    }
]

export default new VueRouter ({
    mode: 'history',
    routes
})
