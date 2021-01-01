<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/images/logo.png" alt="Iva logo" />
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
        <a class="navbar-item" href="/"> Home </a>
        <a class="navbar-item" href="/#pricing"> Pricing </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Resources </a>
          <div class="navbar-dropdown">
            <a
              class="navbar-item"
              href="https://iva-docs.slite.com/p/channel/GEi1bpXDurJzK5GmC3nPcf"
            >
              Our product documentation
            </a>
            <!-- <a class="navbar-item" href="/blog">
              Our blog
            </a> -->
            <a
              class="navbar-item"
              target="_blank"
              href="https://zapier.com/apps/iva-docs/integrations"
            >
              Our Zapier integration
            </a>
            <a
              class="navbar-item"
              target="_blank"
              href="https://www.npmjs.com/package/iva-converter"
            >
              Our Npm package
            </a>
          </div>
        </div>
        <!-- <a class="navbar-item" href="/developers"> Developers </a> -->
        <a class="navbar-item" href="https://app.iva-docs.com/auth/login">
          <button class="button">Sign up for free</button>
        </a>
        <a class="navbar-item" href="https://app.iva-docs.com/auth/login">
          <button class="button is-primary">Sign in</button>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      hasOpenMenu: false
    };
  },
  methods: {
    toggleNavbar() {
      this.hasOpenMenu = !this.hasOpenMenu;
    }
  }
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
