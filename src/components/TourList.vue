<template>
    <div id="app">
        <div v-if="isLogedIn()">
        <div id="top_left_bg"  > </div>
        <div id="main_container" class="container">
            <div class="row">
               <UserMeta></UserMeta>
            </div>
            
            <div class="row">
                <TourItem v-for="tour_gp in tour_groups" :key=tour_gp.pk :TourItem="tour_gp">

                </TourItem>
            </div>
        </div>
        </div>
        <div v-else>
            {{ redirectToLogin() }}
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
import TourItem from './TourItem'
import UserMeta from './UserMeta'
import api from '../api/bahman_zagros'

export default {
    name: 'TourList',
    components: {
        TourItem,
        UserMeta
    },
    methods: {
        redirectToLogin: function() {
            this.$router.push('login')
        },
        ...mapGetters(['isLogedIn', getToken]),
    },
    computed: {
        tour_groups: function () {
            return api.get_tour_gps(self.getToken).then(response => {
                return response
            })
        }
    }
}
</script>


<style scoped>
@import url(../assets/css/bootstrap.css);

#app {
    background-color: #D8D8D8;
    
}

#top_left_bg {
position: fixed;
top:0px;
right: 0px;

width: 650px;
height: 600px;

background-image: url("../assets/image/bg_list.svg") ;
background-size: cover; 
}


#main_container{
    margin-top:20px;
} 
  
</style>

