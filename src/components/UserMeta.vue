<template>
    <div id="app" class="container">
        <div class="row">
        <div  class="col-lg-4 col-md-4 col-sm-12">
            <div  class="top_meta_info user_info">
                <span v-if="isLogedIn">
                    {{ full_name }}
                    <span @click="logout" class="io_btn">
                        خروج
                    </span>
                </span>
                <span v-else @click="redirectToLogin" class="io_btn">
                    ورود
                    {{ redirectToLogin() }}
                </span>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="top_meta_info navigation">
                <div class="container">
                    <div class="row"> 
                        <div class="col-4">
                            <img @click="back()" src="../assets/image/left-arrow.png" class="left"/>
                        </div>
                        <div class="col-4">
                            <img @click="home()" src="../assets/image/home.png" class="center"/>
                        </div>

                        <div class="col-4">
                            <img @click="fd()" src="../assets/image/right-arrow.png" class="right"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4  col-sm-12">
            <div class="top_meta_info tour_info">
                رزرو تور بهمن زاگرس
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'UserMeta',
    methods:{
        logout: function(){
            let c = confirm("Are You Sure? ")
            if (c)
                this.$store.dispatch('logout');                
        },
        redirectToLogin: function() {
            this.$router.push({name:'login', params:{'fd': "true"}})
        },
        home: function () {
            this.$router.push({name:'all-tour-groups'})   
        },
        back: function () {
            this.$router.go(-1);
        },
        fd: function () {
            this.$router.go(1);
        }
    },
    computed:{
        ...mapGetters(['isLogedIn','full_name']),
    }
}
</script>


<style>
@import url(../assets/css/bootstrap.css);

.io_btn{
    float: left;
    cursor: pointer;
    margin-left:10px;
}

.top_meta_info{
    border-radius: 0px;
    height: 50px;
    margin-top:0px;    
    padding:12px; 
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    text-align: right;
}

.user_info {
    background-image: linear-gradient(+90deg, #722599 0%, #D94A7C 100%);
    background: #f4f3f3;
    color: #000;
}

.tour_info {
    background: #c5c5c5;
}

.center {
    margin-left: auto;
    margin-right: auto;
}

.left {
    float:left;
}

.right {
    float: right;
}

img {
    height: 25px;
    display: block;
    cursor: pointer;
}

.navigation {
    background: #dfdfdf;
}

</style>
