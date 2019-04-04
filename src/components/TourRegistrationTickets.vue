<template>
    <div id= "app" class="col-12">
        <div class="row">
            <div class="col-12">
                <table class="table table-striped table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">تور</th>
                            <th scope="col">عنوان</th>
                            <th scope="col">نوع</th>
                            <th scope="col">ایرانی / خارجی</th>
                            <th scope="col">تعداد ثبت نام</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="col">{{ tour_registration_tickets.tour.tour.tour_group.title }}</td>
                            <td scope="col">{{ tour_registration_tickets.tour.title }}</td>
                            <td scope="col">{{ (tour_registration_tickets.tour.group) ? "گروهی": "فردی" }}</td>
                            <td scope="col">{{ (tour_registration_tickets.tour.is_persian) ? "ایرانی": "خارجی" }}</td>
                            <td scope="col">{{ tour_registration_tickets.tour.quantity }}</td>
                        </tr>              
                    </tbody>
                </table>
            </div>
        </div>
        
        <div class="row item">
            <TicketFormDetail :tour_reg="tour_registration_tickets.tour" new_form/>
        </div>
        
        <div v-for="ticket in tour_registration_tickets.tickets" :key="ticket.pk" class="row item" >
            <keep-alive>
            <transition name="slide-fade">
                <TicketFormDetail :ticket="ticket" />
            </transition>
            </keep-alive>

        </div>
    </div>    
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import TicketFormDetail from './TicketFormDetail'

export default {
    name: 'TourRegistrationTickets',
    computed:{
        ...mapGetters(['tour_registration_tickets', 'getToken']),
    },
    components: {
        TicketFormDetail
    },
    methods: {
        position: (i) => i+1,
    },
    mounted: function () {
        let store = this.$store;
        let token = this.getToken;
        let tour_reg_id = this.$route.params.reg_id;
        
        console.log("id: " + tour_reg_id);
        store.dispatch("updateTourRegistrationTickets", {token, tour_reg_id});
    }
}
</script>

<style scoped>


#app {
    margin-top: 30px;
    background: transparent;
}
table {
    direction: rtl;
    text-align: center;
    background: #444444;
}


.item {
    margin-bottom: 20px;
}


.slide-fade-enter-active {
  transition: all .9s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
