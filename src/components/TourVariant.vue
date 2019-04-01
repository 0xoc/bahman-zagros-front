<template>
    <div id="app" class="col-12">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 tour_variant">
                    <div class="date">
                        <label class="label">از</label>
                        <span class="date_output">{{ variant.start_date }}</span>
                    </div>
                    <div class="date">
                        <label class="label">تا</label>
                        <span class="date_output">{{ variant.end_date }}</span>
                    </div>
                    <div class="price_holder">
                        <label class="label">قیمت</label>
                        <span class="price">{{ variant.price }}</span>
                        <label class="label_left">یورو</label>
                    </div>
                    <div class="select">
                        انتخاب
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TourVariant',
}
</script>

<style scoped>
@import url(../assets/css/bootstrap.css);

#app {
    margin-top: 20px;
    background-color: transparent
}

.tour_variant{
    background-color: #454045;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    padding:20px;
    margin:10px;
}

.select{
    margin-left:auto;
    margin-right: auto;
    width:80%;
    text-align:center;
    color:white;
    cursor: pointer;
    padding:10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 41px;
    background-color: #ba2c73;
}

.date{
    
    margin-bottom: 20px;
}

.label_left {
    float: left;
    color: white;
}

.label {
    float: right;
    color: white;
}

.price_holder {
    text-align:center;
}

@font-face {
      font-family: iran-sans;
      src: url(../assets/fonts/irsans.ttf);
}

.price {
    margin-left: auto;
    margin-right: auto;
    color: #c86dd7;
    font-size: 2em;
    font-family: iran-sans !important
}

.date_output{
    border-radius: 25px;
    background-color:white;
    color: #454045;
    padding:10px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
}
</style>
