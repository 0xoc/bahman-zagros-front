<template>
    <div class="row" >
            <table class="table table-striped table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">عنوان</th>
                        <th scope="col">نوع</th>
                        <th scope="col">ایرانی / خارجی</th>
                        <th scope="col">تعداد ثبت نام</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="new_tg" class="small-row-hide">
                        <th scope="row"> جدید 
                            <form id="form" type="hidden" @submit.prevent="make_new()"></form>
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
                        <td scope="col"></td>
                        <td scope="col"> <input form="form" class="btn btn-dark" type="submit" value="ثبت" /></td>
                    </tr>
                    <tr v-if="new_tg" class="small-row-show">
                        <td colspan="6">
                            <table class="table">
                                <tr>
                                    <td colspan="3">
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
                                        <select v-model="is_persian" form="form"  class="form-control">
                                <option value="true">
                                    ایرانی
                                </option>
                                <option value="false">
                                    خارجی
                                </option>
                            </select>
                                    </td>
                                    <td>
                                        <input form="form" class="btn btn-dark" type="submit" value="ثبت" />
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr v-for="(tour_registration, i) in tour_registrations" :key="tour_registration.pk">
                        <th scope="row"> {{ position(i) }}</th>
                        <td scope="col">{{ tour_registration.title }}</td>
                        <td scope="col">{{ (tour_registration.group) ? "گروهی": "فردی" }}</td>
                        <td scope="col">{{ (tour_registration.is_persian) ? "ایرانی": "خارجی" }}</td>
                        <td scope="col">{{ tour_registration.quantity }}</td>
                        <td scope="col" class="btn btn-dark">بیشتر</td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    name: "TourRegistrationDetail",
    data: () => {
        return {
            title: "",
            group: "true",
            is_persian: "true"
        }
    },
    props:{
        'tour': Number,
        'tour_registrations': Object,
        'new_tg': Boolean,
    },
    methods: {
        ...mapActions(['createTourRegistration']),
        position: i => i+1,
        make_new: function () {
            let c = confirm("Are you sure?")
            if (c){
                this.createTourRegistration({
                    token: this.getToken,
                    reg_info: {
                        tour: this.tour,
                        title: this.title, 
                        group: this.group, 
                        is_persian: this.is_persian
                    }
                })
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

</style>



