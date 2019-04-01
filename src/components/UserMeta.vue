<template>
    <div id="app" class="container">
        <div class="row">
        <div  class="col-lg-4 col-md-6 cols-sm-12">
            <div class="top_meta_info user_info">
                
                <span v-if="isLogedIn">
                    {{ full_name }}
                    <span @click="logout" class="io_btn">
                        خروج
                    </span>
                </span>
                <span v-else @click="redirectToLogin" class="io_btn">
                    ورود
                </span>
            </div>
        </div>
        <div class="col-lg-4 offset-lg-4 col-md-6  cols-sm-12">
            <div class="top_meta_info tour_info">
                رزرو تور بهمن زاگرس
            </div>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'UserMeta',
    methods:{
        logout: function(){
            this.$store.dispatch('logout');
        },
        redirectToLogin: function() {
            this.$router.push({name:'login'})
        },
    },
    computed:{
        full_name: function () {
            return this.$store.getters.full_name
        },
        isLogedIn: function () {
            return this.$store.getters.isLogedIn
        }
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

</style>
