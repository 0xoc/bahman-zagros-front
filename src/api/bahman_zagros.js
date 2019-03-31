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



export default {
    getToken,
};