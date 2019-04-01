import api from '../../api/bahman_zagros'

const state = {
    tour_groups: []
}


const getters = {
    tour_groups: state => state.tour_groups
}

const actions = {
    updateTourGroups: (context, payload) => {
        api.get_tour_groups(payload.token).
        then(response => {
            context.commit('setTourGroups', response)
        }).then(error => console.log(error))
    }
}

const mutations = {
    setTourGroups: (state, tour_groups) => {
        state.tour_groups = tour_groups
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}