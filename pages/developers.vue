<template>
  <section>
    <div class="hero is-fullheight" id="home">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h2 class="title">
            Make Iva a part of your App
          </h2>
          <h3 class="subtitle">
            Focus on your UX. Let Iva handle your documents
          </h3>
          <button class="button is-primary is-large has-margin-top">
            Register for your API key
          </button>
        </div>
      </div>
    </div>
    <div class="hero is-fullheight">
      <div class="hero-body content">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-12">
              <h2 class="has-text-centered">Resources</h2>
            </div>
            <div class="column is-4">
              <div class="box has-text-centered">
                <h3>NPM</h3>
                <p>
                  We have an NPM package that exposes our PDF conversion API.
                </p>
                <a
                  href="https://www.npmjs.com/package/iva-converter"
                  class="button is-primary is-large"
                  >Iva-converter</a
                >
              </div>
            </div>
            <div class="column is-4">
              <div class="box has-text-centered">
                <h3>Zapier</h3>
                <p>
                  Keep in mind a lot of solutions can be found on Zapier with
                  minimal code.
                </p>
                <a
                  href="https://zapier.com/apps/iva-docs/integrations"
                  class="button is-primary is-large"
                  >Go to Zapier</a
                >
              </div>
            </div>
            <div class="column is-4">
              <div class="box has-text-centered">
                <h3>Api Docs</h3>
                <p>
                  Our official documentation on Postman.
                </p>
                <a
                  href="https://documenter.getpostman.com/view/11039305/SzYgRvVW?version=latest"
                  class="button is-primary is-large"
                  >Documentation</a
                >
              </div>
            </div>
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
<style lang="scss" scoped></style>
