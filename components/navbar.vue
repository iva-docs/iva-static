<template>
  <nav class="navbar is-transparent is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/images/iva-logo.png" alt="Iva logo" />
      </a>
      <div class="navbar-burger burger" @click="toggleNavbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div
      :class="'navbar-menu '.concat(hasOpenMenu === true ? 'is-active' : '')"
    >
      <div class="navbar-end" @click="toggleNavbar">
        <a class="navbar-item" href="/#home">
          Home
        </a>
        <a class="navbar-item" href="/#solution">
          Solution
        </a>
        <a class="navbar-item" href="/#integrations">
          Integrations
        </a>
        <a class="navbar-item" href="/#pricing">
          Pricing
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      hasOpenMenu: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.hasOpenMenu = !this.hasOpenMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
}
.navbar-item img {
  padding: 0px;
  width: 44px;
  height: 44px;
  max-height: 44px;
}
</style>
