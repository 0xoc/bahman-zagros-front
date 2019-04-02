<template>
    <div id="app" class="col-12">
        <div class="container">
            <TourGroupDetail :item_info="tour_group_variants.tour_group" detail_view>
            </TourGroupDetail>

            <div class="row">
                <table class="table table-striped table-light table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">تاریخ شروع</th>
                            <th scope="col">تاریخ ‍پایان</th>
                            <th scope="col">قیمت</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr 
                        v-for="(variant,i) in tour_group_variants.variants" 
                        :key="variant.pk"
                        :variant="variant"
                        :i="position(i)"
                        >
                            <th scope="row">{{i}}</th>
                            <td scope="col">{{ variant.start }}</td>
                            <td scope="col">{{ variant.end }}</td>
                            <td scope="col">{{ variant.price }} یورو</td>
                            <td scope="col" class="btn btn-light">انتخاب</td>
                        </tr>
                    </tbody>
                </table>
            </div>
 
        </div>
    </div>
</template>

<script>
import TourGroupDetail from './TourGroupDetail'
import {mapGetters} from 'vuex'

export default {
    name: 'TourVariantList',
    data: () => {
        return {
            
        }
    },
    components: {
        TourGroupDetail,
    },
    methods: {
        position: i => i + 1
    },
    computed: {
        ...mapGetters(['tour_group_variants']),
    },
    mounted: function () {
        let store = this.$store
        let token = store.getters.getToken
        let tour_id = this.$route.params.tour_id
        let self = this;
        store.dispatch('updateTourGroupVariants', {token, tour_id})

        store.watch(()=>store.getters.getToken, (token) => {
            if (store.getters.isLogedIn)
                store.dispatch('updateTourGroupVariants', {token, tour_id})
            else
                self.$router.push({name:'login'})
        })
    }
}
</script>

<style scoped>
@import url(../assets/css/bootstrap.css);

#app {
    margin-top: 20px;
    background-color: transparent;
    padding-bottom: 30px;
}

.table {
    direction: rtl;
    border-radius: 27px;
    overflow: hidden;
}

</style>
