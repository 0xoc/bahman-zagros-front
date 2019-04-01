<template>
    
<div class="col-12">
    <div class="container">
        <div class="row tour_item">
            <div class="col-lg-10 tour_item_description">
                <h1 class="tour_item_title" >{{ item_info.title }}</h1>
                <p class="tour_item_content">
                    {{ item_info.description }}
                </p>
                <span v-if="!detail_view" class="tour_item_view" >
                    مشاهده
                </span>
            </div>
            <div class="col-lg-2 tour_item_image_container">
                <img :src="item_info.image" class="tour_item_image" />
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name: "TourItem",
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

<style>
@import url(../assets/css/bootstrap.css);
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
        padding-top:50px; 
    }
    .tour_item_image_container {
        order: 1;
        text-align: center;
        z-index: 10;
    }
    .tour_item_image {
        margin: 0px;
        max-width: 80%;
        margin-bottom: -50px;
    }
}
</style>
