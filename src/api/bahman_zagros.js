import Vue from 'vue'
import axios from 'axios'
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.component('date-picker', VuePersianDatetimePicker);

const ROOT_URL = "http://bahmantours.ir";


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

let create_ticket = (token, ticket) => {
    return new Promise(function (resolve, reject) {
        let api_token_auth_url = `${ROOT_URL}/api/v2/ticket/`;
        // console.log('create_ticket')
        // console.log(ticket.address)
        // resolve()
        axios.post(api_token_auth_url, {
            "tour_registration": ticket.tour_registration,
            "first_name": ticket.first_name,
            "email": ticket.email,
            "phone": ticket.phone,
            "passport_number": ticket.passport_number,
            "last_name": ticket.last_name,
            "national_id": ticket.national_id,
            "nationality": ticket.nationality,
            "city": ticket.city,
            "address": ticket.address,
            "birth_date": ticket.birth_date,
            "description": ticket.description,
            "is_persian": ticket.is_persian
        }).then(response => {
            resolve(response.data.token)
        })
        .catch(error => {
            reject(error.response)
        });
        
    });
}


let create_tour_registration = (token, reg_data) => {
    return new Promise((resolve,reject) => {
        let endpoint = `${ROOT_URL}/api/v2/tour-variants/registrations/create/`
        
        axios.post(endpoint, {
            'tour': reg_data.tour,
            'title': reg_data.title,
            'date': reg_data.date,
            'group': reg_data.group,
            'count': reg_data.count,
            'is_persian': reg_data.is_persian
        }, {
            headers: {
                // headers
                Authorization: `Token ${token}`,
            }
        }).then(response => {
            console.log("success");
            resolve(response.data.token);
        })
        .catch(error => {
            console.log("error");
            reject(error.response);
            console.log("end error")
        });
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


let get_tour_registration_tickets = (token, tour_reg_id) => {
    return new Promise((resolve,reject) => {
        let endpoint = `${ROOT_URL}/api/v2/tour-registrations/${tour_reg_id}/tickets/`
        axios.get(endpoint,{
            headers: {
                Authorization: `Token ${token}`
            }
        }).then(response => {
            //jdnc
            resolve(response.data)
        }).catch(error => reject(error.response))
    })
}

export default {
    getToken,
    get_tour_groups,
    get_user_detail,
    get_tour_registration_tickets,
    get_tour_registrations,
    get_tour_group_variants,
    create_tour_registration,
    create_ticket,
    
};
