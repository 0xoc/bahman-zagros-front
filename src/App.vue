<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },

  mounted() {
    if (localStorage.token) {
        this.$store.dispatch('token_login',localStorage.token)
    }

    this.$store.watch(()=>this.$store.getters.getToken, (new_token) => {
        localStorage.token = new_token;
    })
  },
}
</script>

<style scoped>
    #app {
        background-color: #303e9f;
        display: table;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -10;
      }
</style>
