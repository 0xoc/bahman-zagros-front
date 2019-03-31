import axios from 'axios'

const ROOT_URL = "http://192.168.1.57:8000";


let getToken = (username,password) => {
    return new Promise(function (resolve, reject) {
        let api_token_auth_url = `${ROOT_URL}/api-token-auth/`;
        
        // eslint-disable-next-line
        console.log("about to send request")
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
        axios.post(endpoint, {
            // params
        }, {
            headers: {
                // headers
                Authorization: `token: ${token}`
            }
        }).then(response => {
            
            // eslint-disable-next-line
            console.log(response.data)
            
            resolve(response.data)
        }).catch(error => {

            // eslint-disable-next-line
            console.log(error.response)

            reject(error.response)
        })
    })
}



export default {
    getToken,
    get_tour_gps,
};