<template>
    <div class="col-12">
        <div class="container">
            <TourGroupDetail v-for="tour_gp in tour_groups" :key=tour_gp.pk :item_info="tour_gp" >
            </TourGroupDetail>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import TourGroupDetail from './TourGroupDetail'
import UserMeta from './UserMeta'

export default {
    name: 'TourGroupList',
    components: {
        TourGroupDetail,
        UserMeta
    },
    data: function () {
        return {
        }
    },
    methods: {

    },
    computed: {
        ...mapGetters(['tour_groups'])
    },
    mounted: function() {
        let store = this.$store
        store.watch(()=>store.getters.getToken, (token)=>{
            if (store.getters.isLogedIn)
                store.dispatch('updateTourGroups', {token: token})
            else
                store.commit('setTourGroups', [])
        });
    }
}
</script>

<style scoped>
@import url(../assets/css/bootstrap.css);

</style>
