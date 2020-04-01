<template>
  <div class="snap">
    <section
      v-for="h in heroes"
      :key="h.title"
      class="hero is-transparent is-fullheight"
      :style="
        h.background
          ? `background-image: url(https:${h.background.fields.file.url +
              '?h=' +
              viewHeight});`
          : ''
      "
    >
      <div class="hero-overlay"></div>
      <div class="hero-body">
        <div class="container">
          <div class="columns" v-if="h.hasPricing !== true">
            <div
              :class="
                `column ${h.background ? 'is-4' : 'is-12'} ${
                  h.order % 2 === 0 && h.background ? 'is-offset-8' : ''
                }`
              "
            >
              <h1 class="title">
                {{ h.title }}
              </h1>
              <h2 class="subtitle" v-if="h.subtitle && h.subtitle.length > 0">
                {{ h.subtitle }}
              </h2>
              <p class="has-margin-bottom" v-if="h.text && h.text.length > 0">
                {{ h.text }}
              </p>
              <a :href="h.href" class="button is-primary is-large is-fullwidth">
                {{ h.callToAction }}
              </a>
            </div>
          </div>
          <div class="columns is-multiline content" v-else>
            <div class="column is-12">
              <h1>Pricing</h1>
            </div>
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
    <footer-comp />
  </div>
</template>

<script>
import Contentful from "../plugins/contentful.js";
import PricingCard from "../components/Billing/PricingCard.vue";
import FooterComp from "../components/Footer.vue";
export default {
  data() {
    return {
      heroes: [],
      prices: [],
      viewHeight: Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )
    };
  },
  async mounted() {
    const client = Contentful.createClient();
    const resHeroes = await client.getEntries({
      content_type: process.env.CTF_INDEX_HERO_ID
    });
    this.heroes = resHeroes.items
      .map(e => e.fields)
      .sort((a, b) => (a.order > b.order ? 1 : -1));
    console.log(this.heroes);
    if (this.heroes.find(e => e.hasPricing === true)) {
      const resPricing = await client.getEntries({
        content_type: process.env.CTF_PRICING_ID
      });
      console.log(this.heroes);
      this.prices = resPricing.items
        .map(e => e.fields)
        .sort((a, b) => (a.order > b.order ? 1 : -1));
    }
  },
  components: {
    PricingCard,
    FooterComp
  }
};
</script>

<style scoped>
.hero.is-transparent.is-fullheight {
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.hero-overlay {
  background-color: black;
  opacity: 0.6;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  margin-bottom: -100vh;
}
h1 {
  color: white;
}
h2 {
  color: white;
}
p {
  color: white;
}
.has-margin-bottom {
  margin-bottom: 24px;
}
a:hover {
  transform: scale(1.04);
  transition: 200ms transform ease-in-out;
}
</style>
