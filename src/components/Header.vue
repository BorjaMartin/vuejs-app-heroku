<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo">
        <router-link to="/">
          <img src="../assets/images/logo.png" class="app-logo" alt="Logotipo" />
          <span id="brand">
            <strong>App</strong>Trainers
          </span>
        </router-link>
      </div>

      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/Result">Información de entrenadores</router-link>
          </li>
        </ul>
      </nav>

      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  
};
</script>