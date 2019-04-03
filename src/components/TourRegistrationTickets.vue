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
        <div class="row" >
            <div class="container" >
                <div class="row">
                    <div class="col-lg-4" >
                        <div class="b">
                            a
                        </div>
                    </div>
                    <div class="col-lg-4" >
                        <div class="b">
                            a
                        </div>
                    </div>
                    <div class="col-lg-4" >
                        <div class="b">
                            a
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
    name: 'TourRegistrationTickets',
    computed:{
        ...mapGetters(['tour_registration_tickets', 'getToken']),
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
}

</style>
