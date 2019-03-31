import axios from 'axios'

const ROOT_URL = "http://localhost:8000";


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

let get_tour_gps = (token) => {
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
    get_tour_gps,
    get_user_detail,
    
};