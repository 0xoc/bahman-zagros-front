import VueRouter from 'vue-router'
import Login from '../components/Login'
import TourGroupList from '../components/TourGroupList'
import Vue from 'vue'
import Page from '../components/Page'
import TourRegistrationList from '../components/TourRegistrationList'
import TourRegistrationDetail from '../components/TourRegistrationDetail'
import TourVariantList from '../components/TourVariantList'
import TourRegistrationTickets from '../components/TourRegistrationTickets'
Vue.use(VueRouter)

const routes = [
    { path: '/:fd', component: Login, name: 'login-f'},
    { path: '/', component: Login, name: 'login'},
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
                path: 'tour-registrations/:variant_id',
                component: TourRegistrationList,
                name: 'all-tour-registrations'
            },
            {
                path: 'tour-registrations/detail/:id',
                component: TourRegistrationDetail,
                name: 'tour-registration-detail'
            },
            {
                path: 'tour-registrations/:reg_id/tickets',
                component: TourRegistrationTickets,
                name: 'tour-registration-tickets'
            }
        ]
    }
]

export default new VueRouter ({
    mode: 'history',
    routes
})
