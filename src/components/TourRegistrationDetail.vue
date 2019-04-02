<template>
    <div class="row">
        <table class="table table-striped table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">عنوان</th>
                    <th scope="col">نوع</th>
                    <th scope="col">تعداد ثبت نام</th>
                    <th scope="col">ایرانی / خارجی</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tiket, i) in tickets" :key="tiket.pk">
                    <th scope="row"> {{ i }}</th>
                    <td scope="col">{{ tiket.first_name }}</td>
                    <td scope="col">{{ tiket.last_name }}</td>
                    <td scope="col">{{ (tiket.is_persian)? tiket.national_id: tiket.passport_number }}</td>
                    <td scope="col">{{ tiket.email }}</td>
                    <td scope="col">{{ tiket.phone }}</td>
                    <td scope="col">{{ (tiket.is_persian)? tiket.city: tiket.nationality }}</td>
                    <td scope="col">{{ tiket.birth_date }}</td>
                    <td scope="col" class="btn btn-dark">بیشتر</td>
                </tr>
            </tbody>
        </table>
    </div> 
</template>

<script>

export default {
    name: "TourRegistrationDetail",
    data: () => {
        return {
        }
    },
    methods: {

    },
    
    computed: {

    }
}


/*


*/
</script>

<style scoped>
* {
    direction: rtl;
}
#app {
    margin-top:30px;
    background-color: transparent;
}

</style>



