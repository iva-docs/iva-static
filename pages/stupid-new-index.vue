<template>
  <div>
    <section class="hero is-fullheight content" id="home">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-6" style="padding-top:5vh;">
              <h1 class="has-text-white">
                Connect your data with your documents
              </h1>
              <h3 class="has-text-white">
                Iva moves data from you day to day tools into your documents, so
                you can focus on what's important.
              </h3>
              <a
                href="https://app.iva-docs.com/auth/register"
                class="button is-primary is-large is-fullwidth is-info"
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
    <section class="hero is-fullheight is-hero-integrations" id="solution">
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

            <div class="column is-3 is-offset-1" style="padding-top:48px">
              <img src="/images/logo-border.png" />
            </div>
            <div class="column  is-4" style="padding-top:24px">
              <Dialog
                h3="Software in itself doesn't save you time, adding it to your process does."
                :v3="true"
              />
            </div>
            <div class="column is-2" style="padding-top:24px;z-index:3;">
              <img src="/images/Big-me.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight is-hero1" id="integrations">
      <div class="hero-body content">
        <div class="columns is-multiline">
          <div class="column is-offset-2 is-4">
            <Dialog
              h3="Iva at the center of your process. Repetitive work can be automated"
              p=""
            />
          </div>
          <div class="column is-3 is-hidden-mobile">
            <img src="/images/logo-border.png" />
          </div>
          <div class="column is-offset-1 is-4">
            <Dialog
              h3=""
              p="Iva will handle all your documents and moves them into your day to day tools. Import data from Zapier, CSV files and more. Find your documents in your e-mail inbox, Cloud storage such as Google drive or connect it to zapier to more automation."
            />
          </div>
          <div class="column is-3 is-hidden-mobile">
            <img src="/images/integrations.png" />
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight is-hero2" id="happy-customers">
      <div class="hero-body content">
        <div class="container">
          <div class="columns is-multiline is-hidden-mobile">
            <div class="column is-offset-1 is-2">
              <img src="/images/zap-iva.png" />
            </div>
            <div class="column is-4" style="margin-left:10vw;">
              <Dialog
                h3="My team saves around an hour a day. Spent talking to client instead of writing documents."
                p=""
              />
            </div>
            <div class="column is-4" style="max-height:40vh;margin-left:-10vw;">
              <img src="/images/pauline.png" />
            </div>
            <div
              class="column is-offset-1 is-4"
              style="max-height:40vh;margin-left:5vw;"
            >
              <img src="/images/sharon.png" />
            </div>
            <div class="column is-4" style="padding-top:20vh;margin-left:-5vw;">
              <Dialog
                h3="I can't see myselft editing documents anymore. Now they just popup in my inbox."
                p=""
              />
            </div>
          </div>
          <!-- Mobile -->
          <div class="columns is-multiline is-hidden-tablet">
            <div class="column is-12">
              <img src="/images/pauline.png" />
            </div>
            <div
              class="column is-12"
              style="margin-top:-5vh;margin-bottom:20vh;"
            >
              <Dialog
                h3="My team saves around an hour a day. Spent talking to client instead of writing documents."
                p=""
              />
            </div>

            <div class="column is-12">
              <img src="/images/sharon.png" />
            </div>
            <div
              class="column is-12"
              style="margin-top:-20vh;margin-bottom:20vh;"
            >
              <Dialog
                h3="I can't see myselft editing documents anymore. Now they just popup in my inbox."
                p=""
              />
            </div>
          </div>
          <!-- <div class="column is-2" style="padding-top:20vh">
            <img src="/images/gmail-iva.png" />
          </div> -->
        </div>
      </div>
    </section>
    <section class="hero is-fullheight is-hero3" id="developers">
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

    <section class="hero is-fullheight is-hero2" id="pricing">
      <div class="hero-body content">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-4" v-for="p in prices" :key="p.name">
              <pricing-card
                :name="p.name"
                :price="p.price"
                :isFeatured="p.isFeatured"
                :featuredText="p.featuredText"
                :features="p.features"
              />
            </div>
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
import Contentful from "../plugins/contentful.js";
import PricingCard from "../components/Billing/PricingCard.vue";

export default {
  data() {
    return {
      prices: []
    };
  },
  async mounted() {
    const client = Contentful.createClient();
    const resPricing = await client.getEntries({
      content_type: process.env.CTF_PRICING_ID
    });
    this.prices = resPricing.items
      .map(e => e.fields)
      .sort((a, b) => (a.order > b.order ? 1 : -1));
  },
  components: {
    Dialog,
    DialogName,
    FooterComponent: FooterComponent,
    PricingCard
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
.content h1 {
  font-size: 3rem;
}
.content h3 {
  font-size: 1.5rem;
}
</style>
