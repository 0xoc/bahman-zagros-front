<template>
    <div id="app" class="col-12">
        <div class="container">
            <TourGroupDetail :item_info="tour_group_variants.tour_group" detail_view>
            </TourGroupDetail>

            <TourVariantDetail :variants="tour_group_variants.variants" />
 
        </div>
    </div>
</template>

<script>
import TourGroupDetail from './TourGroupDetail'
import TourVariantDetail from './TourVariantDetail'

import {mapGetters} from 'vuex'

export default {
    name: 'TourVariantList',
    data: () => {
        return {
            
        }
    },
    components: {
        TourGroupDetail,
        TourVariantDetail
    },
    computed: {
        ...mapGetters(['tour_group_variants']),
    },
    mounted: function () {
        let store = this.$store
        let token = store.getters.getToken
        let tour_id = this.$route.params.tour_id
        let self = this;
        store.dispatch('updateTourGroupVariants', {token, tour_id})

        store.watch(()=>store.getters.getToken, (token) => {
            if (store.getters.isLogedIn)
                store.dispatch('updateTourGroupVariants', {token, tour_id})
            else
                self.$router.push({name:'login'})
        })
    }
}
</script>

<style scoped>
@import url(../assets/css/bootstrap.css);

#app {
    margin-top: 20px;
    background-color: transparent;
    padding-bottom: 30px;
}




</style>
