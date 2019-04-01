import VueRouter from 'vue-router'
import Login from '../components/Login'
import TourList from '../components/TourList'
import Vue from 'vue'
import Page from '../components/Page'
import TourVariant from '../components/TourVariant'
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
            },
            {
                path: 'variant/:tour_gp',
                component:TourVariant
            }
        ]
    }
]

export default new VueRouter ({
    mode: 'history',
    routes
})
