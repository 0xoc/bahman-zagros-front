<template>
    <div id="app">
        fucker:
        {{ id }}
    </div>
</template>

<script>
export default {
    name: 'TourDetial',
    computed: {
        tour_id: function () {
            console.log(this.$router)
            return this.$route.params.tour_gp
        }
    }
}
</script>

<style scoped>
#app {
    background-color: #D8D8D8;
    color: black;
}
</style>


