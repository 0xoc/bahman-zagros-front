<template>
    <div class="row" >
            <table class="table table-striped table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">عنوان</th>
                        <th scope="col">نوع</th>
                        <th scope="col">تاریخ</th>
                        <th scope="col">ایرانی / خارجی</th>
                        <th scope="col">تعداد ثبت نام</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="new_tg" class="small-row-hide">
                        <th scope="row"> جدید 
                            <form id="form" type="hidden" @submit.prevent="make_new"></form>
                        </th>

                        <td scope="col">
                            <input 
                                form="form" type="text" 
                                placeholder="عنوان" class="form-control" required 
                                v-model="title"
                            />
                        </td>
                        <td scope="col">
                            <select v-model="group" form="form"  class="form-control">
                                <option value="true">
                                    گروهی
                                </option>
                                <option value="false">
                                    فردی
                                </option>
                            </select>
                        </td>
                        <td>
                            <Datepicker  wrapper-class="calendar" required v-model="date" format="yyyy-M-d"></Datepicker>
                        </td>
                        <td scope="col">
                            <select v-model="is_persian" form="form"  class="form-control">
                                <option value="true">
                                    ایرانی
                                </option>
                                <option value="false">
                                    خارجی
                                </option>
                            </select>
                        </td>
                        <td v-if="is_group()" scope="col">
                            <input form="form" type="number" class="form-control" v-model="count" min="4" required/>
                        </td>
                        <td v-else scope="col"></td>
                        <td scope="col"> <input form="form" class="btn btn-dark" type="submit" value="ثبت" /></td>
                    </tr>
                    <tr v-if="new_tg" class="small-row-show">
                        <td colspan="6">
                            <table class="table">
                                <tr>
                                    <td v-if="!is_group" colspan="3">
                                        <input 
                                            form="form" type="text" 
                                            placeholder="عنوان" class="form-control" required 
                                            v-model="title"
                                        />
                                    </td>
                                    <td v-else colspan="4">
                                        <input 
                                            form="form" type="text" 
                                            placeholder="عنوان" class="form-control" required 
                                            v-model="title"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <select v-model="group" form="form"  class="form-control">
                                            <option value="true">
                                                گروهی
                                            </option>
                                            <option value="false">
                                                فردی
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <Datepicker  wrapper-class="calendar" required v-model="date"  format="yyyy-M-d"></Datepicker>
                                        <!-- <input 
                                            form="form" type="text" 
                                            placeholder="تاریخ (۰۱-۰۱-۱۳۹۸)" class="form-control" required 
                                            v-model="date"
                                        /> -->
                                    
                                        
                                    </td>
                                    <td>
                                        <select v-model="is_persian" form="form"  class="form-control">
                                            <option value="true">
                                                ایرانی
                                            </option>
                                            <option value="false">
                                                خارجی
                                            </option>
                                        </select>
                                    </td>
                                    <td v-if="is_group()" scope="col">
                                        <input form="form" type="number" class="form-control" v-model="count" min="4" required/>
                                    </td>
                                    <td>
                                        <input form="form" class="btn btn-dark btn-block" type="submit" value="ثبت" />
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr v-for="(tour_registration, i) in tour_registrations" :key="tour_registration.pk">
                        <th scope="row"> {{ position(i) }}</th>
                        <td scope="col">{{ tour_registration.title }}</td>
                        <td scope="col">{{ (tour_registration.group) ? "گروهی": "فردی" }}</td>
                        <td scope="col">{{ tour_registration.date }}</td>
                        <td scope="col">{{ (tour_registration.is_persian) ? "ایرانی": "خارجی" }}</td>
                        <td scope="col">{{ tour_registration.quantity }}</td>
                        <router-link :to="reg_link(tour_registration.pk)">
                        <td scope="col" class="btn btn-dark btn-block">ثبت نام</td>
                        </router-link>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import Datepicker from 'vuejs-datepicker';
import Vue from 'vue'


export default {
    name: "TourRegistrationDetail",
    data: () => {
        return {
            title: "",
            group: "true",
            date: "",
            is_persian: "true",
            count: 4,
        }
    },
    components: {
        Datepicker,
    }
    ,
    props:{
        'tour': Number,
        'tour_registrations': Array,
        'new_tg': Boolean,
    },
    methods: {
        ...mapActions(['createTourRegistration']),
        position: i => i+1,
        is_group: function () {
            if (this.group == "true")
                return true
            return false
        },
        is_daily: function () {
            if (this.tour.is_daily == "true")
                return true
            return false
        },
        reg_link: (id) => {
            return {
                name: "tour-registration-tickets",
                params: {reg_id: id}
            }
        },
        make_new: function (e) {
            let c = confirm("Are you sure?")
            
            let year = this.date.getFullYear();
            let month = this.date.getMonth() + 1;
            let _date = this.date.getDate();
            let the_date = `${year}-${month}-${_date}`
            if (c){
                this.createTourRegistration({
                    token: this.getToken,
                    reg_info: {
                        tour: this.tour,
                        title: this.title,
                        group: this.group,
                        date: the_date,
                        count: this.count,
                        is_persian: this.is_persian
                    }
                })
                
                this.title = "",
                this.count = "4"

                e.target.reset();
            }
        }
    },
    
    computed: {
        ...mapGetters(['getToken'])
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

table {
    text-align: center;
}

.form-control {
    background-color: #454d55;
    color:#fff;
}

.small-row-hide {
    display: table-row;
}

.small-row-show {
    display: none;
}

@media only screen and (max-width: 768px) {
    .small-row-hide {
    display: none;
}

.small-row-show {
    display: table-row;
}
}

.calendar {
    color: black;
}
</style>


