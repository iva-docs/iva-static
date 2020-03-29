<template>
  <div class="snap">
    <section
      v-for="h in heroes"
      :key="h.title"
      class="hero is-transparent is-fullheight"
      :style="`background-image: url(${h.background.fields.file.url});`"
    >
      <div class="hero-overlay"></div>
      <div class="hero-body">
        <div class="container">
          <div class="columns" v-if="h.hasPricing !== true">
            <div
              :class="`column is-4 ${h.order % 2 === 0 ? 'is-offset-8' : ''}`"
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
  </div>
</template>

<script>
import Contentful from "../plugins/contentful.js";
import PricingCard from "../components/Billing/PricingCard.vue";
export default {
  data() {
    return {
      heroes: [],
      prices: []
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
    if (this.heroes.find(e => e.hasPricing === true)) {
      const resPricing = await client.getEntries({
        content_type: process.env.CTF_PRICING_ID
      });
      this.prices = resPricing.items
        .map(e => e.fields)
        .sort((a, b) => (a.order > b.order ? 1 : -1));
    }
  },
  components: {
    PricingCard
  }
};
</script>

<style scoped>
.hero.is-transparent.is-fullheight {
  background-size: cover;
  background-position: center;
}
.hero-overlay {
  background-color: black;
  opacity: 0.6;
  position: relative;
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
  transform: scale(1.08);
  transition: 200ms transform ease-in-out;
}
</style>
