<template>
<div id="app" class="row">
    <div class="col-lg-9 body">
        <h1>{{ item_info.title }}</h1>
        <p>
            {{ item_info.description }}
        </p>
        <div class="view_btn">
            مشاهده
        </div>
    </div>
    <div class="col-lg-3 image">
        <img :src="item_info.image" />
    </div>
</div>
</template>

<script>
export default {
    name: "TourGroupDetail",
    props: {
        'item_info': Object,
        'detail_view': Boolean
    },
    data: function()  {
        return {
            
        }
    },
    computed: {
        
    }
}
</script>

<style scoped>
@import url(../assets/css/bootstrap.css);
#app {
    margin-top: 30px;
    display: flex;
}

h1 {
    color: #454045;
    font-size: 30px;
}

.body {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    background-color: #ffffff;
    border-radius: 27px;    
    padding:20px;
    padding-right:50px;
    text-align: right;
    order:1;
}

.image {
    order: 2;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 27px;
    padding:0px;
    overflow: hidden;
    margin-left: -30px;
    text-align: center;
    max-height:200px;
}

img {
    width: 100%;
    height: 100%;
}

.view_btn {
    border-radius: 25px;
    background-color: #ba2c73;
    float:left;
    padding:10px;
    padding-left: 15px;
    padding-right: 15px;
    color: #fff;
    cursor: pointer;
}

@media only screen and (max-width: 992px) {
    .image{
        order: 1;
        margin:auto;
        margin-bottom: -50px;
    }
    .body{
        order: 2;
        padding-top: 60px; 
    }
}
</style>
