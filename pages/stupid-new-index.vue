<template>
  <div>
    <section class="hero is-fullheight content">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-6">
              <h1 class="has-text-white">
                Connect your data with your documents
              </h1>
              <h3 class="has-text-white">
                Iva moves data from you day to day tools into your documents, so
                you can focus on what's important.
              </h3>
              <a
                href="https://app.iva-docs.com/auth/register"
                class="button is-primary is-large is-fullwidth is-hidden-mobile is-info"
              >
                Try now
              </a>
            </div>

            <div class="column is-6">
              <img src="/images/logo-border.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight is-hero-integrations">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-4">
              <Dialog
                h3="Set up"
                p="Configure your document with instructions for Iva to execute."
                :v2="true"
              />
            </div>
            <div class="column is-4">
              <Dialog
                h3="Send data"
                p="Connect Iva to your other tools. Import data from you CSV."
                :v2="true"
              />
            </div>
            <div class="column is-4">
              <Dialog
                h3="Focus"
                p="Let Iva do the repetitive work. Focus of what's important."
                :v2="true"
              />
            </div>

            <div class="column is-offset-3 is-5" style="padding-top:24px">
              <Dialog
                h3="Your time is precious, that's why we automate"
                :v3="true"
              />
            </div>
            <div class="column is-2" style="padding-top:24px;z-index:1;">
              <img src="/images/Big-me.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight is-hero1">
      <div class="hero-body content">
        <div class="columns is-multiline">
          <div class="column is-offset-2 is-4">
            <Dialog h3="Iva at the center of your process" p="" />
          </div>
          <div class="column is-3">
            <img src="/images/logo-border.png" />
          </div>
          <div class="column is-offset-1 is-4">
            <Dialog
              h3=""
              p="Iva will handle all your documents and moves them into your day to day tools. Import data from Zapier, CSV files and more. Find your documents in your e-mail inbox, Cloud storage such as Google drive or connect it to zapier to more automation."
            />
          </div>
          <div class="column is-3">
            <img src="/images/integrations.png" />
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight is-hero2">
      <div class="hero-body content">
        <div class="columns is-multiline">
          <div class="column is-offset-2 is-4">
            <Dialog h3="My team saves around an hour a day. Spent talking to client instead of writing documents" p="" />
          </div>
          <div class="column is-offset-2 is-3">
            <img src="/images/pauline.jpeg" />
          </div>
          <div class="column is-offset-2 is-3">
            <img src="/images/sharon.jpeg" />
          </div>
          <div class="column is-4">
            <Dialog h3="I can't see myselft editing documents anymore" p="" />
          </div>
        </div>
      </div>
    </section>
    <footer-component />
  </div>
</template>

<script>
import Dialog from "../components/Dialog.vue";
import DialogName from "../components/DialogName.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  components: {
    Dialog,
    DialogName,
    FooterComponent: FooterComponent
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
.is-hero1 {
  background-image: url("/images/hero1.png");
}
.is-hero2 {
  background-image: url("/images/hero2.png");
}
.is-hero-integrations {
  background-image: url("/images/hero-integrations.png");
}
.content h1 {
  font-size: 3rem;
}
.content h3 {
  font-size: 1.5rem;
}
</style>
