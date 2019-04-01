<template>
    
<div id="app" class="col-12">
<div class="container">
    <div class="row">
        <table class="table table-striped table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">نام</th>
                    <th scope="col">نام خانوادگی</th>
                    <th v-if="is_persian" scope="col">شماره ملی</th>
                    <th v-else scope="col">پاسپورت</th>
                    <th scope="col">ایمیل</th>
                    <th scope="col">شماره تماس</th>
                    <th v-if="is_persian" scope="col">شهر</th>
                    <th v-else scope="col">ملیت</th>                    
                    <th scope="col">تاریخ تولد</th>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tiket in tickets" :key="tiket.pk">
                    <th scope="row">1</th>
                    <td scope="col">{{ tiket.first_name }}</td>
                    <td scope="col">{{ tiket.last_name }}</td>
                    <td scope="col">{{ (tiket.is_persian)? tiket.national_id: tiket.passport_number }}</td>
                    <td scope="col">{{ tiket.email }}</td>
                    <td scope="col">{{ tiket.phone }}</td>
                    <td scope="col">{{ (tiket.is_persian)? tiket.city: tiket.nationality }}</td>
                    <td scope="col">{{ tiket.birth_date }}</td>
                    <td scope="col" class="btn btn-dark">بیشتر</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</div>    
</template>

<script>
import api from '../api/bahman_zagros'

export default {
    name: "TourRegistrationDetail",
    data: () => {
        return {
            tickets: [],
            is_persian: false``
        }
    },
    methods: {

    },
    
    computed: {
            
        // get is persian
        is_persian: function() {
            api.get_tour_registration_detail(token,id).
            then(response => this.is_persian = response.is_persian).
            catch(error => console.log(error))
        },

        // get tickets
        tickets: function() {
            api.get_tour_registration_tickets(token, id).
            then(response => {this.tickets=response}).
            catch(error => console.log(error))
        }
    }
}


/*


*/
</script>

<style scoped>
* {
    direction: rtl;
}
#app {
    margin-top:30px;
    background-color: transparent;
}

</style>



