import VueRouter from 'vue-router'
import Login from '../components/Login'
import TourGroupList from '../components/TourGroupList'
import TourDetail from '../components/TourDetail'
import Vue from 'vue'
import Page from '../components/Page'
import TourRegistrationList from '../components/TourRegistrationList'
import TourRegistrationDetail from '../components/TourRegistrationDetail'
Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login, name: 'login'},
    { path: '/detail/:tour_gp', component: TourDetail},
    {
        path:'/tours',
        component: Page,
        children: [
            {
                path: 'tour-groups/list',
                component: TourGroupList,
                name: 'all-tour-groups'
            },
            {
                path: 'tour-registrations/:gp',
                component: TourRegistrationList,
                name: 'all-tour-registrations'
            },
            {
                path: 'tour-registrations/detail/:id',
                component: TourRegistrationDetail,
                name: 'tour-registration-detail'
            }
        ]
    }
]

export default new VueRouter ({
    mode: 'history',
    routes
})
