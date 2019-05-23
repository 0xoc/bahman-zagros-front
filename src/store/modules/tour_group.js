import api from '../../api/bahman_zagros'

const state = {
    tour_groups: [],
    tour_group_variants: [],
    tour_variant_registrations: [],
    tour_registration_tickets: [],
    profile_tour_regs: [],
}


const getters = {
    tour_groups: state => state.tour_groups,
    tour_group_variants: state => state.tour_group_variants,
    tour_variant_registrations: state => state.tour_variant_registrations,
    tour_registration_tickets: state => state.tour_registration_tickets,
    profile_tour_regs: state => state.profile_tour_regs
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
    },
    updateTourVariantRegistrations: (context, payload) => {
        api.get_tour_registrations(payload.token, payload.variant_id).then(
            response => {
                context.commit('setTourVariantRegistrations', response)
            }
        ).catch(error => console.log(error))
    },

    createTourRegistration: (context, payload) => {
        api.create_tour_registration(payload.token, payload.reg_info).then(response => {
            context.dispatch("updateTourVariantRegistrations", {
                token: payload.token, variant_id: payload.reg_info.tour
            })
        }).catch(error => console.log(error))
    },
    updateTourRegistrationTickets: (context, payload) => {
        api.get_tour_registration_tickets(payload.token, payload.tour_reg_id).then(response => {
                context.commit("setTourRegistrationTickets", response)
            }
        ).catch(error => console.log(error))
    },

    createTicket: (context, payload) => {
        api.create_ticket(payload.token, payload.ticket).then(response => {
            context.dispatch("updateTourRegistrationTickets", {
                token: payload.token,
                tour_reg_id: payload.ticket.tour_registration
            })
            alert("Ticket Created")
        }).catch(error => alert("Ticket Not Created, please try again"));
    },

    getProfileTourRegs: (context, payload) => {
        api.get_profile_tour_regs(payload.token).then(response => {
            console.log("form actions");
            console.log(response)
            console.log("form actions");
            context.commit("setProfileTourRegs", response)
        }).catch(error => console.log(error))
    }
}

const mutations = {
    setTourGroups: (state, tour_groups) => {
        state.tour_groups = tour_groups
    },
    setTourGroupVariants: (state, tgv) =>{
        state.tour_group_variants = tgv
    },

    setTourVariantRegistrations: (state, tvr) => {
        state.tour_variant_registrations = tvr
    },
    setTourRegistrationTickets: (state, trt) => {
        state.tour_registration_tickets = trt
    },
    setProfileTourRegs: (state, response) => {
        state.profile_tour_regs = response
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}