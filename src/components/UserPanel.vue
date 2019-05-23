<template>
    <div class="col-12" id='app'>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="history_title_holder">
                        <h1 class="history_title">
                            تاریخچه فعالیت
                        </h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <table class="table table-striped table-light table-hover">
                        <thead>
                            <tr>
                                <th scope="col">تور</th>
                                <th scope="col">گروه</th>
                                <th scope="col">تاریخ ثبت</th>
                                <th scope="col">تعداد</th>
                                <th scope="col">نوع</th>
                                <th scope="col">قیمت</th>
                                <th scope="col">وضعیت</th>
                                <th scope="col">تعداد تایید شده</th>
                                <th scope="col">قیمت تایید شده</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="reg in profile_tour_regs" :key="reg.pk">
                                <td>{{ reg.tour_group_title }}</td> 
                                <td>{{ reg.title }}</td> 
                                <td>{{ reg.date }}</td> 
                                <td>{{ reg.quantity }}</td> 
                                <td>{{ reg.is_persian ? "ایرانی" : "خارجی"}}</td> 
                                <td>{{ reg.price }}</td> 
                                <td>{{ reg.verified ? "تایید شده" : "در انتظار تایید" }}</td> 
                                <td>{{ reg.verified_count }}</td> 
                                <td>{{ reg.verified_price }}</td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    name: 'UserPanel',
    data: () => {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['profile_tour_regs']),
    },
    mounted:function () {
        let store = this.$store
        let token = store.getters.getToken
        let self = this;
        
        store.dispatch('getProfileTourRegs', {token})

        store.watch(()=>store.getters.getToken, (token) => {
            if (store.getters.isLogedIn)
                store.dispatch('getProfileTourRegs', {token})
        })
    }
}
</script>

<style scoped>
@import url(../assets/css/bootstrap.css);

#app {
    margin:20px;
    background-color: transparent;
    text-align: right;
    margin-left: auto;
    margin-right: auto;
    direction: rtl;
}


.history_title_holder {
    background-color: #454d55;
    color:white;
    padding: 10px;
}
.history_title {
    font-size: 20px;
}
</style>
