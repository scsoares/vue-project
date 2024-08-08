<template>
  <nav class="navbar-drawer-hidden">
    <ul class="navbar-list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
  <div id="navbar">
    <img class="logo" src="../../assets/img/logo.png" alt="Logo" />
    <img
      class="menu-icon"
      src="../../assets/icons/menu-icon.png"
      alt="Menu icon"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
@import "./Navbar.scss";
</style>
