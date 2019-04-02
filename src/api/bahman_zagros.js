import axios from 'axios'

const ROOT_URL = "http://192.168.1.55:8000";


let getToken = (username,password) => {
    return new Promise(function (resolve, reject) {
        let api_token_auth_url = `${ROOT_URL}/api-token-auth/`;
        
        axios.post(api_token_auth_url, {
            username,
            password
        }).then(response => {
            resolve(response.data.token)
        })
        .catch(error => {
            reject(error.response)
        });
        
    });
}

let get_tour_groups = (token) => {
    return new Promise((resolve, reject) => {
        let endpoint = `${ROOT_URL}/api/v2/tour-groups/`
        axios.get(endpoint,{
            headers: {
                // headers
                Authorization: `Token ${token}`
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error.response)
        })
    })
}

let get_tour_group_variants = (token, tour_id) => {
    return new Promise((resolve,reject) => {
        let endpoint = `${ROOT_URL}/api/v2/tour-groups/${tour_id}/variants/`
        axios.get(endpoint,{
            headers: {
                // headers
                Authorization: `Token ${token}`
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })

    })
}

let get_tour_registration_tickets = (token, tr_id) => {
    return new Promise((resolve, reject) => {
        let endpoint = `${ROOT_URL}/api/v2/tour-registration/${tr_id}/tickets/`
        
        axios.get(endpoint,{
            headers: {
                // headers
                Authorization: `Token ${token}`
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error.response)
        })
    })
}

let get_tour_registrations = (token, variant_id) => {
    return new Promise((resolve, reject) => {
        let endpoint = `${ROOT_URL}/api/v2/tour-variants/${variant_id}/registrations/`
        axios.get(endpoint,{
            headers: {
                // headers
                Authorization: `Token ${token}`
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error.response)
        })
    })
}


let get_user_detail = (token) => {
    return new Promise((resolve,reject) => {
        let endpoint = `${ROOT_URL}/api/v2/profile/detail/`
        axios.get(endpoint,{
            headers: {
                Authorization: `Token ${token}`
            }
        }).then(response => resolve(response.data)).catch(error => reject(error.response))
    })
}

export default {
    getToken,
    get_tour_groups,
    get_user_detail,
    get_tour_registration_tickets,
    get_tour_registrations,
    get_tour_group_variants,
    
};