<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>
<script>
import Navbar from "../components/navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";
</style>
