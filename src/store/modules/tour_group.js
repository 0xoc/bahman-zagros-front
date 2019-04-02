import api from '../../api/bahman_zagros'

const state = {
    tour_groups: [],
    tour_group_variants: [],

}


const getters = {
    tour_groups: state => state.tour_groups,
    tour_group_variants: state => state.tour_group_variants
}

const actions = {
    updateTourGroups: (context, payload) => {
        api.get_tour_groups(payload.token).
        then(response => {
            context.commit('setTourGroups', response)
        }).then(error => console.log(error))
    },
    updateTourGroupVariants: (context, payload) => {
        api.get_tour_group_variants(payload.token, payload.tour_id).then( response => {
            console.log(response)
            context.commit('setTourGroupVariants', response)
        }).catch(error => {
            console.log(error)
        })
    }
}

const mutations = {
    setTourGroups: (state, tour_groups) => {
        state.tour_groups = tour_groups
    },
    setTourGroupVariants: (state, tgv) =>{
        state.tour_group_variants = tgv
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}