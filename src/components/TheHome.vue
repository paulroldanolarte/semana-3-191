<template>
<div>

    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light"> -->
        
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
  <a class="navbar-brand" href="#">INICIO</a>
  <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> -->
    <!-- <span class="navbar-toggler-icon"></span> -->

  <!-- </button> -->
  <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->


    <!-- <form class="form-inline my-2 my-lg-0"> -->
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button 
      class="btn btn-danger justify-content-md-end" 
      type="button"
      @click="logOut"
      >SALIR</button>

        <!-- </form> -->
    </div>
    </div>
</nav>

<div class="card">
  <div class="card-body">
    <h2 class="card-title">Bienvenid@ {{user.name}}</h2>
    <p class="card-text"><i>Para nosotros es un placer que hagas parte de nuestro equipo </i> <b>{{user.email}}</b></p>
    <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
  </div>
  <img class="card-img-bottom" src="https://i0.wp.com/emmaleaauthor.com/wp-content/uploads/2016/12/christmasbanner.jpg" height="250px" alt="Card image cap">
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