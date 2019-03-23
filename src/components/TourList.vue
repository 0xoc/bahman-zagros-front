<template>
    <div id="app">
        <div v-if="isLogedIn()">
        <div id="top_left_bg"  > </div>
        <div id="main_container" class="container">
            <div class="row">
               <div class="col-lg-4 col-md-6 cols-sm-12">
                   <div class="top_meta_info user_info">
                        علی پرویزی
                        <span @click="logout" class="logout_btn">
                            خروج
                        </span>
                   </div>
               </div>
               <div class="col-lg-4 offset-lg-4 col-md-6  cols-sm-12">
                    <div class="top_meta_info tour_info">
                        رزرو تور بهمن زاگرس
                    </div>
                </div>
            </div>
            
            <div class="row">
                    <div class="col-12">
                        <div class="container">
                            <div class="row tour_item">
                                <div class="col-lg-10 tour_item_description">
                                    <h1 class="tour_item_title" >تور</h1>
                                    <p class="tour_item_content">
                                        توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور 
                                    </p>
                                    <span class="tour_item_view" >
                                        مشاهده
                                    </span>
                                </div>
                                <div class="col-lg-2 tour_item_image_container">
                                    <img src="../assets/image/background_login.jpg" class="tour_item_image" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


        </div>
        </div>
        <div v-else>
            fuckerrrs
            {{ redirectToLogin() }}
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'TourList',
    methods: {
        logout: function(){
            this.$store.dispatch('logout');
        },
        redirectToLogin: function() {
            this.$router.push('login')
        },
        ...mapGetters(['isLogedIn']),
    }
}
</script>


<style scoped>
@import url(../assets/css/bootstrap.css);

    #app {
        background-color: #D8D8D8;
    }

    .logout_btn{
        float: left;
        cursor: pointer;
        margin-left:10px;
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

    .top_meta_info{
        border-radius: 27px;
        height: 50px;
        margin-top:10px;    
        padding:12px; 
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
        text-align: right;
    }

    .user_info {
        background-image: linear-gradient(+90deg, #722599 0%, #D94A7C 100%);
        color: #fff;
    }
    .tour_info {
        background-color: #fff;
        color: #000;
    }

    .tour_item {
        margin-top:30px;
        display: flex;
    }

    .tour_item_description{
        background: #fff;
        color: #000;
        border-radius: 27px; 
        padding: 20px;
        padding-right:50px;
        
        text-align: right;
    }

    .tour_item_title{
        color: #979797;
    }

    .tour_item_image{
        
        max-width: 150%;
        max-height: 150%;
        border-radius: 27px;
        margin-left: -45px;
        margin-top: 20px;
    }

    .tour_item_view {
        float: left;
        padding:10px;
        padding-left: 40px;
        padding-right: 40px; 
        color: #fff;
        background: #BA2C73;
        border-radius: 27px;

    }
    @media only screen and (max-width: 992px) {
        .tour_item_description{
            order:2;
            padding-top:100px; 
        }
        .tour_item_image_container {
            order: 1;
            text-align: center;
        }
        .tour_item_image {
            margin: 0px;
            max-width: 60%;
            margin-bottom: -100px;
        }


    }
</style>

