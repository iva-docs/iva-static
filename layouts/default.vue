<template>
  <div>
    <navbar />
    <nuxt />
    <footer-component />
  </div>
</template>
<script>
import Navbar from "../components/navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  components: {
    Navbar,
    FooterComponent
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";
</style>
