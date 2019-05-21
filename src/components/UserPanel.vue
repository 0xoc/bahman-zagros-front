<template>
    <div class="col-12" id='app'>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="history_title_holder">
                        <h1 class="history_title">
                            تاریخچه فعالیت
                        </h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <table class="table table-striped table-light table-hover">
        <thead>
            <tr>
                <th scope="col">تور</th>
                <th scope="col">تاریخ ثبت</th>
                <th scope="col">تعداد</th>
                <th scope="col">نوع</th>
                <th scope="col">قیمت</th>
                <th scope="col">وضعیت</th>
                <th scope="col">تعداد تایید شده</th>
                <th scope="col">قیمت تایید شده</th>

            </tr>
        </thead>
        <tbody v-if="!single">
            <tr 
            v-for="(variant,i) in variants" 
            :key="variant.pk"
            >
                <th scope="row">{{position(i)}}</th>
                <td scope="col">{{ (variant.start == null) ? "روزانه" : variant.start }}</td>
                <td scope="col">{{ (variant.end == null) ? "روزانه" : variant.end }}</td>
                <td scope="col">{{ variant.price }}</td>
                <router-link :to="select_link(variant.pk)">
                <td scope="col" class="btn btn-light btn-block">انتخاب</td>
                </router-link>
            </tr>
            
        </tbody>
        <tbody v-else>
            <tr>
                <td scope="col">{{ variant.tour_group.title }}</td>
                <td scope="col">{{ (variant.start == null) ? "روزانه" : variant.start }}</td>
                <td scope="col">{{ (variant.end == null) ? "روزانه" : variant.end }}</td>
                <td scope="col">{{ variant.price }}</td>

            </tr>
            <tr>
                <td colspan="4" class="tour_plan">
                    <h4 class="plan h4">
                        برنامه تور
                    </h4>
                    <p>
                        {{ variant.description }}
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'UserPanel',
}
</script>

<style scoped>
@import url(../assets/css/bootstrap.css);

#app {
    margin:20px;
    background-color: transparent;
    text-align: right;
    margin-left: auto;
    margin-right: auto;
    direction: rtl;
}


.history_title_holder {
    background-color: #454d55;
    color:white;
    padding: 10px;
}
.history_title {
    font-size: 20px;
}
</style>
