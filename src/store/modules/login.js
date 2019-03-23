import api from '../../api/bahman_zagros'

const state = {
    token: "",
}

const getters = {
    isLogedIn: state => {
        console.log("from getter: " + !!state.token)
        return !!state.token
    },
    getToken: state => state.token
}

const actions = {
    login: ({commit}, credentials) => {
        api.getToken(credentials.username, credentials.password).then(token => {
            commit('setToken', token)
        }).catch(response => {
            if (response.status == 400)
                alert("Wrong Username Or Password")
            else
                alert("Something went wrong, please try again later")
        })
    },

    logout: ({commit}) => commit('setToken', ""),

}

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}