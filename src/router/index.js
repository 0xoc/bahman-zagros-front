import VueRouter from 'vue-router'
import Login from '../components/Login'
import TourGroupList from '../components/TourGroupList'
import Vue from 'vue'
import Page from '../components/Page'
import TourRegistrationList from '../components/TourRegistrationList'
import TourRegistrationDetail from '../components/TourRegistrationDetail'
import TourVariantList from '../components/TourVariantList'
Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login, name: 'login'},
    {
        path:'/tours',
        component: Page,
        children: [
            {
                path: 'tour-variants/:tour_id/list',
                component: TourVariantList,
                name: 'all-tour-variants'
            },
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
