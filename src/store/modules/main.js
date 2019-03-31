import api from '../../api/bahman_zagros'

const state = {
    token: "",
    user_full_name: "",
    tour_groups : [],
    
}

const getters = {
    isLogedIn: state => !!state.token,
    getToken: state => state.token,
    tour_groups: state => state.tour_groups,
    full_name: state => state.user_full_name,
    
}

const actions = {
    login: (context, credentials) => {
        api.getToken(credentials.username, credentials.password).then(token => {
            context.commit('setToken', token)
            context.dispatch('updateUserFullName')
        }).catch(response => {
            if (response.status == 400)
                alert("Wrong Username Or Password")
            else
                alert("Something went wrong, please try again later")
        })
    },
    token_login: (context, token) => {
        context.commit('setToken', token)
        context.dispatch('updateUserFullName')
    },
    updateTourGroups: ( context ) => {
        if (context.getters.isLogedIn){
        api.get_tour_gps(context.getters.getToken).then( response => {
            context.commit("setTourGroups", response)
        }
        ).catch(error => console.log(error))
    }},

    updateUserFullName: (context) => {
        if (context.getters.isLogedIn){
            api.get_user_detail(context.getters.getToken).then(response => {
                let full_name = response.user.first_name + " " + response.user.last_name
                context.commit("setUserFullName", full_name)
            }).catch(error => console.log(error))
        }
    },
    
    logout: ({commit}) => {
        commit('setToken', "")
        commit('setUserFullName', "")
        commit('setTourGroups', [])
    },

}

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },
    setUserFullName: (state, full_name) => {
        state.user_full_name = full_name
    },
    setTourGroups: (state, gps) => {
        state.tour_groups = gps
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}