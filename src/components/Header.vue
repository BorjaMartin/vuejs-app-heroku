<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo" >
          <a href="/mainConfig" v-on:click="goBack">
        <img src="../assets/images/logo.png" class="app-logo" alt="Logotipo" />
        <span id="brand">
          <strong>App</strong>Trainers
        </span>
        </a>
      </div>

      <!-- MENU -->
      <nav id="menu">
        
      </nav>

      <!--LIMPIAR FLOTADOS-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      
    }
  },
  methods:{
    goBack() {
       this.$router.push("/");
    },

  }
};
</script>