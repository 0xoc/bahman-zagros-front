<template>
    <div id="app" class="col-12">
        <div class="container">
            <TourVariantDetail :variants="tour_variant_registrations.variant" single/>
        </div>
    </div>    
</template>

<script>

import { mapGetters } from 'vuex'
import TourVariantDetail from './TourVariantDetail'

export default {
    name: 'TourRegistrationDetail',
    components: {
        TourVariantDetail
    },
    data: function () {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['tour_variant_registrations']),
    },
    mounted: function () {
        let self = this;
        let store = self.$store
        let token = store.getters.getToken
        let variant_id = self.$route.params.variant_id

        store.dispatch("updateTourVariantRegistrations", {token, variant_id})

        store.watch(()=>store.getters.getToken, (token) => {
            store.dispatch("updateTourVariantRegistrations", {token, variant_id})
        })
    }
    
}
</script>

<style scoped>
@import url(../assets/css/bootstrap.css);

#app {
    margin-top:30px;
    background-color: transparent;
}

.tour_registration_detail{
    background-color: blueviolet;
    margin-top:20px;
}
.btn {
    margin-bottom: 5px;
    margin-left: 10px;
    cursor: pointer;
}
* {
    direction: rtl;
    
}
.table {
    opacity: 0.8;
}
.info {
    text-align: center;
}
</style>
