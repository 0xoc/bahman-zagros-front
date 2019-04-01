<template>
    <div id="app">
        <div v-if="!isLogedIn">
            <div id="input_form">
            <form @submit.prevent="login({username, password})" >
                <input class="input_field" id="username_input" v-model="username" />
                <input class="input_field" id="password_input" type="password" v-model="password" />

                <input value = "ورود" type="submit" id="login_btn" />
            </form>
            </div>
            <img src="../assets/image/form_holder.svg" id="login-wrapper">
            <img id="bottom-logo" src="../assets/image/logo.png" />
        </div>
        <div v-else>
            {{ redirectToTourList() }}
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    name: 'Login',
    data: () => {
        return {
            username: null,
            password: null
        }
    },
    methods:{
        ...mapActions(['login',]),
        
        redirectToTourList: function ()  {
            this.$router.push({name:'all-tour-groups'})
        }

    },
    computed: {
        ...mapGetters({
            isLogedIn: 'isLogedIn',
        })
    }
}
</script>


<style scoped>

#app {
    background-image: url("../assets/image/background_login.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    width: 100%;
    height: 100%;
    position: fixed;
}

#login-wrapper {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: -1;
    width: 730px;
    height: 600px;

}

#bottom-logo {
    position: absolute;
    width: 300px;
    height: 150px;
    z-index: -1;
}


.input_field{
    background-size: contain;
    background-repeat:   no-repeat;
    background-position: center center; 
    border: none;
    height: 41px;
    opacity: 0.7;
    padding-right:35px;
    padding-left: 20px;
    border-radius: 26px;
    margin-top:20px;
    display: block;
}

#username_input {
    background-image: url("../assets/image/username_bg.png");
}
#password_input {
    background-image: url("../assets/image/password_bg.png");
}

#login_btn {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 38px;
    margin-top: 20px;
    border: none;
    height: 41px;
}

#input_form {
    margin-top: 160px;
}



@media only screen and (min-width: 768px) {
    body {
        overflow: hidden;
    }

    .input_field {
        width : 250px;
    }

    #login_btn {
        width : 305px;
    }

    #bottom-logo {
        bottom: 0px;
        right: -66px;
    }

    #input_form {
        margin-left: 200px;
    }
}


@media only screen and (max-width: 768px) {


    #bottom-logo {
        top: 700px;
    }

    .input_field {
        width : 200px;
        margin-left: auto;
        margin-right: auto;
    }

    #login_btn {
        width : 255px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    #input_form {
        margin-left: auto;
        margin-right:auto;
    }
}



</style>