<template>
    <div class="col-12">
        <div class="container" >
            <div v-if="!new_form" class="row holder">
                <div class="col-lg-4  col-md-12 col-sm-12 col-xs-12">
                    <div class="info_pack">
                        <div class="container">
                            <div class="row">
                                <span class="col-12 label">نام:</span>
                                <span class="col-12 data"> {{ ticket.first_name }} </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>
                <div class="col-lg-4  col-md-12 col-sm-12 col-xs-12" >
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span class="col-12 label">نام خانوادگی:</span>
                                <span class="col-12 data"> {{ ticket.last_name }} </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>

                <div class="col-lg-2  col-md-12 col-sm-12 col-xs-12">
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span class="  col-12 label">شماره تماس:</span>
                                <span class="  col-12 data"> {{ ticket.phone }} </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>
                
                <div class="col-lg-2  col-md-12 col-sm-12 col-xs-12">
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span v-if="ticket.is_persian" class="  col-12 label">شهر:</span>
                                <span v-else class="  col-12 label">ملیت:</span>
                                <span v-if="ticket.is_persian" class="  col-12 data">
                                    {{ (ticket.city == "") ? "-" : ticket.city }} 
                                </span>
                                <span v-else class="  col-12 data"> 
                                    {{ (ticket.nationality == "") ? "-": ticket.nationality }} 
                                </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>

                <div class="col-lg-4  col-md-12 col-sm-12 col-xs-12" >
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span class="col-12 label">آدرس:</span>
                                <span class="col-12 data"> {{ (ticket.address == "") ? "-" : ticket.address }} </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>

                <div class="col-lg-3  col-md-12 col-sm-12 col-xs-12">
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span v-if="ticket.is_persian" class="  col-12 label">شماره ملی:</span>
                                <span v-else class="  col-12 label">شماره پاسپورت:</span>
                                <span v-if="ticket.is_persian" class="  col-12 data"> 
                                    {{ (ticket.national_id == "" )? "-" : ticket.national_id }}
                                </span>
                                <span v-else class="  col-12 data"> 
                                    {{ (ticket.passport_number == "") ? "-" : ticket.passport_number }} 
                                </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>

                <div class="col-lg-3  col-md-12 col-sm-12 col-xs-12">
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span class="col-12 label">تاریخ تولد:</span>
                                <span class=" col-12 data"> {{ (ticket.birth_date == null) ? "-" : ticket.birth_date }} </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>
                
                <div class="col-3">
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span class="col-12 label">ایمیل:</span>
                                <span class="col-12 data"> {{ ticket.email }} </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>

            </div>

            <div v-else class="row holder">
                <form :id="form" type="hidden" @submit.prevent="createNewTicket"></form>
                <div class="col-lg-4  col-md-12 col-sm-12 col-xs-12">
                    <div class="info_pack">
                        <div class="container">
                            <div class="row">
                                <span class="col-12 data"> 
                                    <input v-model="first_name"  required :form="form" type="text" placeholder="نام" class="form-control" />
                                </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>
                <div class="col-lg-4  col-md-12 col-sm-12 col-xs-12" >
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span class="col-12 data">
                                    <input type="text" v-model="last_name" required :form="form" placeholder="نام خانوادگی" class="form-control" /> 
                                </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>
                <div class="col-lg-2  col-md-12 col-sm-12 col-xs-12">
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span class="col-12 data"> 
                                    <input type="text" v-model="phone" required :form="form" placeholder="شماره تماس" class="form-control" />
                                </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>
                
                <div class="col-lg-2  col-md-12 col-sm-12 col-xs-12">
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span v-if="tour_reg.is_persian" class="col-12 data">
                                    <input type="text" v-model="city" :form="form" placeholder="شهر" class="form-control" />
                                </span>
                                <span v-else class="  col-12 data">
                                    <input type="text" v-model="nationality" :form="form" placeholder="ملیت" class="form-control" />
                                </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>

                <div class="col-lg-4  col-md-12 col-sm-12 col-xs-12" >
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span class="col-12 data">
                                    <input type="text" v-model="address" :form="form" placeholder="آدرس" class="form-control" /> 
                                </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>

                <div class="col-lg-3  col-md-12 col-sm-12 col-xs-12">
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span v-if="tour_reg.is_persian" class="  col-12 data">
                                    <input type="text" v-model="national_id"  :form="form" placeholder="شماره ملی" class="form-control" />
                                </span>
                                <span v-else class="  col-12 data">
                                    <input type="text" v-model="passport_number" :form="form" placeholder="شماره پاسپورت" class="form-control" />
                                </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>

                <div class="col-lg-3  col-md-12 col-sm-12 col-xs-12">
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span class=" col-12 data" >
                                    <input type="text" v-model="birth_date"  :form="form" placeholder="تاریخ تولد yyyy-mm-dd" class="form-control" />
                                </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>

                <div class="col-lg-3  col-md-12 col-sm-12 col-xs-12">
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span class="col-12 data" >
                                    <input type="email" v-model="email" required :form="form" placeholder="ایمیل" class="form-control" />
                                </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>


                <div class="col-lg-3  col-md-12 col-sm-12 col-xs-12">
                    <div class="info_pack">
                        <div class="container ">
                            <div class="row">
                                <span class=" col-12 data" >
                                    <input :form="form" type="submit" class="btn btn-info btn-block" value="ثبت نام" />
                                </span>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>

            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'TicketFormDetail',
    props: {
        'ticket': Object,
        'new_form': Boolean,
        'tour_reg': Object,
    },
    methods: {
        createNewTicket: function (e) {
            let c = confirm("Are you sure?")
            if (c) {
                let id = this.tour_reg.pk;
                let store = this.$store;
                let token = store.getters.getToken;
                let self = this;
                store.dispatch("createTicket", {token, ticket: {
                    tour_registration: id,
                    first_name: self.first_name,
                    email: self.email,
                    phone: self.phone,
                    passport_number: self.passport_number,
                    last_name: self.last_name,
                    national_id: self.national_id,
                    nationality: self.nationality,
                    city: self.city,
                    address: self.address,
                    birth_date: self.birth_date,
                    description: null,
                    is_persian: self.tour_reg.is_persian
                }});

                self.first_name = null;
                self.email = null;
                self.phone = null;
                self.passport_number = null;
                self.last_name = null;
                self.national_id = null;
                self.nationality = null;
                self.city = null;
                self.address = null,
                self.birth_date = null;
                self.description = null;
                self.is_persian = false;

                e.target.reset();
            }

        }
    },
    data: () => {
        return {
            first_name: "",
            email: "",
            phone: "",
            passport_number: "",
            last_name: "",
            national_id: "",
            nationality: "",
            city: "",
            address: "",
            birth_date: null,
            description: "",
            is_persian: false
        }
    },
    computed: {
        form: () => {
            var S4 = function() {
                return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            };
            
            return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        },
    }
}
</script>

<style scoped>

.info_pack{
    text-align: right;
    display: inline;
    margin:20px;
    font-size: 15px;
}

.holder {
    direction: rtl;
    background: #e6dedd;
    padding: 10px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
}

.label {
    color: #393e46;
    margin-bottom: 10px;
}
.data {
    color: #222831;
    font-weight: bold;
}


</style>
