<template>
    <div id="app" class="col-12">
        <div class="container">
            <div class="row">
                <table class="table table-striped table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">نوع</th>
                            <th scope="col">ملیت</th>
                            <th scope="col">تعداد</th>
                            <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td scope="col">گروهی</td>
                            <td scope="col">ایرانی</td>
                            <td scope="col">۲۴</td>
                            <td scope="col" class="btn btn-dark">بیشتر</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'TourRegistrationDetail'
}
</script>

<style scoped>
@import url(../assets/css/bootstrap.css);

#app {
    margin-top:30px;
    background-color: transparent;
}

.tour_registration_detail{
    background-color: blueviolet;
    margin-top:20px;
}
.btn {
    margin-bottom: 5px;
    margin-left: 10px;
    cursor: pointer;
}
* {
    direction: rtl;
    
}
.table {
    opacity: 0.8;
}
.info {
    text-align: center;
}
</style>
