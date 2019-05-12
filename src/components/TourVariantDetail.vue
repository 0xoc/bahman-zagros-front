<template>
<div class="row" id="table_row">
    <table class="table table-striped table-light table-hover">
        <thead>
            <tr>
                <th v-if="!single" scope="col">#</th>
                <th v-else scope="col">تور</th>
                <th scope="col">تاریخ شروع</th>
                <th scope="col">تاریخ ‍پایان</th>
                <th scope="col">قیمت</th>
                <th v-if="!single" scope="col"></th>
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
                <td scope="col">{{ variant.price }} یورو</td>
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
        </tbody>
    </table>
</div>    
</template>

<script>

export default {
    name: 'TourVariantDetail',
    props: {
        'variants': Array,
        'variant': Object,
        'single': Boolean
        },
    methods: {
        position: i => i + 1,
        select_link : (id) => {
            return {
                name: "all-tour-registrations",
                params: {
                    variant_id: id
                }
            }
        }
    },
}
</script>

<style scoped>
@import url(../assets/css/bootstrap.css);

table{
    text-align: center;
}

#table_row {
    direction: rtl;
    border-radius: 27px;
    overflow: hidden;
}
</style>
