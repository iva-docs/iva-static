<template>
  <div>
    <section class="hero is-fullheight is-hero1" id="pricing">
      <div class="hero-body content">
        <div class="pricing-table">
          <pricing-card
            v-for="p in prices"
            :key="p.name"
            :name="p.name"
            :price="p.price"
            :isFeatured="p.isFeatured"
            :featuredText="p.featuredText"
            :features="p.features"
          />
        </div>
      </div>
    </section>
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
  async asyncData() {
    const client = Contentful.createClient();
    const resPricing = await client.getEntries({
      content_type: process.env.CTF_PRICING_ID
    });
    return {
      prices: resPricing.items
        .map(e => e.fields)
        .sort((a, b) => (a.order > b.order ? 1 : -1))
    };
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
</style>