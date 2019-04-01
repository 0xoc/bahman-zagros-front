<template>
       <div>
        <TourItem v-for="tour_gp in tour_groups" :key=tour_gp.pk :item_info="tour_gp" >
            
        </TourItem>
    </div>

</template>

<script>

import TourItem from './TourItem'

import api from '../api/bahman_zagros'

export default {
    name: 'TourList',
    components: {
        TourItem,
    },
    data: function () {
        return {
            tours: self.tour_gps
        }
    },
    computed: {
        tour_groups: function () {
            return this.$store.getters.tour_groups
        }
    },
    mounted: function() {
        this.$store.dispatch('updateTourGroups');
    }
}
</script>