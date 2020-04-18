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
import { identify } from "../plugins/utils.js";
export default {
  components: {
    Navbar,
    FooterComponent
  },
  mounted() {
    identify();
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";
</style>
