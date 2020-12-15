<template>
<div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>

  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <form class="form-inline my-2 my-lg-0">
      <button 
      class="btn btn-outline-success my-2 my-sm-0" 
      type="button"
      @click="logOut"
      >SALIR</button>

    </form>
  </div>
</nav>
<div class="container">
    <p>
        <!-- {{user.nombre}} -->
        
        {{user.name}}
    </p>
    <p>
        {{user.email}}
    </p>
</div>
</div>


</template>

<script>
import VueJwtDecode from 'vue-jwt-decode'
import swal from 'sweetalert';
export default {
    data(){
        return{
            user:{}

        }
    },
    methods:{
        getUserDetails(){
        //    let user = localStorage.getItem('user');
           let token = localStorage.getItem('jwt');
           let user = VueJwtDecode.decode(token);
           console.log(user);
        //    console.log(username);
           
           
           if(token){
               this.user = user;
           }

        },
        logOut(){
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        swal("LogOut", "Sesión cerrada!", "success");
        this.$router.push('/');
    }
    },
    created(){
        this.getUserDetails();
    }

}
</script>