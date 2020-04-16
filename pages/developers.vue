<template>
  <section class="hero is-fullheight is-hero-integrations" id="developers">
    <div class="hero-body content">
      <div class="container">
        <div class="columns is-multiline is-hidden-mobile">
          <div class="column is-4 has-text-centered" style="padding-top:10vh">
            <img src="/images/npm-logo.png" />
          </div>
          <div class="column is-4 has-text-centered">
            <img src="/images/zapier-logo.png" style="padding-top:10vh" />
          </div>
          <div class="column is-4 has-text-centered">
            <img src="/images/postman-logo.png" style="padding-top:10vh" />
          </div>
          <div class="column is-4">
            <Dialog
              h3="Find us on NPM. "
              p=""
              href="https://www.npmjs.com/package/iva-converter"
              button="Iva-converter"
            />
          </div>
          <div class="column is-4">
            <Dialog
              h3="Find us on Zapier. "
              p=""
              href="https://zapier.com/apps/iva-docs/integrations"
              button="Iva integration"
            />
          </div>
          <div class="column is-4">
            <Dialog
              h3="Read our dev docs. "
              p=""
              href="https://documenter.getpostman.com/view/11039305/SzYgRvVW?version=latest"
              button="Documentation"
            />
          </div>
        </div>
        <div class="columns is-multiline is-hidden-tablet">
          <div class="column is-12 has-text-centered">
            <img src="/images/npm-logo.png" />
          </div>
          <div class="column is-12" style="margin-bottom:40vh;">
            <Dialog
              h3="Find us on NPM. "
              p=""
              href="https://www.npmjs.com/package/iva-converter"
              button="Iva-converter"
            />
          </div>
          <div class="column is-12 has-text-centered">
            <img src="/images/zapier-logo.png" />
          </div>
          <div class="column is-12" style="margin-bottom:40vh;">
            <Dialog
              h3="Find us on Zapier. "
              p=""
              href="https://zapier.com/apps/iva-docs/integrations"
              button="Iva integration"
            />
          </div>
          <div class="column is-12 has-text-centered">
            <img src="/images/postman-logo.png" />
          </div>
          <div class="column is-12" style="margin-bottom:40vh;">
            <Dialog
              h3="Read our dev docs. "
              p=""
              href="https://documenter.getpostman.com/view/11039305/SzYgRvVW?version=latest"
              button="Documentation"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Dialog from "../components/Dialog.vue";

export default {
  components: {
    Dialog
  }
};
</script>
<style lang="scss" scoped>
@import "../scss/colors.scss";

.hero {
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
@media (min-width: 969px) {
  .is-hero1 {
    background-image: url("/images/hero1.png");
  }
  .is-hero2 {
    background-image: url("/images/hero2.png");
  }
  .is-hero3 {
    background-image: url("/images/hero3.png");
  }
  .is-hero-integrations {
    background-image: url("/images/hero-integrations.png");
  }
}
</style>