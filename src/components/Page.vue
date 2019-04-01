<template>
 <div id="app">
        
        <div id="top_left_bg"  > </div>
        <div id="main_container" class="container">
            <div class="row">
               <UserMeta></UserMeta>
            </div>

            <div class="row">
                <router-view></router-view>
            </div>
        </div>
 </div>
</template>

<script>
import UserMeta from './UserMeta'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    name: "Page",
    components: {
        UserMeta,
    },
    data: function()  {
        return {
            view_mode: this.$route.params.mode,
            isLogedIn: this.$store.getters.isLogedIn
        }
    },
}
</script>


<style>
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
