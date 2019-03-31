import api from '../../api/bahman_zagros'

const state = {
    tour_groups: [],
}

const getters = {
    getTourGps: state => {
        return state.tour_groups
    }
}

const actions = {
    updateTourGpsList: ({commit}, token) => {
        api.get_tour_gps(token).then(response => {
            commit('setTourGps', response)
        })
    }
}

const mutations = {
    setTourGps: (state, tour_list) => {
        state.tour_groups = tour_list
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}