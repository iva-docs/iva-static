<template>
  <div class="snap">
    <div class="overlay"></div>
    <div class="hero is-fixed is-fullheight is-hidden-mobile">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-8 is-offset-4">
              <div
                :class="`box content ${
                  (selected.text && selected.text.length > 0) ||
                  selected.hasPricing === true
                    ? 'is-visible-box'
                    : 'is-invisible-box'
                }`"
              >
                <h1 v-if="selected.hasPricing !== true">
                  {{ selected.titleExtended }}
                </h1>
                <div
                  class="has-margin-bottom has-text-left"
                  v-if="selected.hasPricing !== true"
                  v-html="markdown(selected)"
                />

                <div class="columns is-multiline content has-text-left" v-else>
                  <div class="column is-12" v-for="p in prices" :key="p.name">
                    <h3>
                      {{ p.name }} {{ p.price && p.price > 0 ? p.price : ""
                      }}{{ p.price && p.price > 0 ? "$ per Month" : "" }}
                    </h3>
                    <ul>
                      <li v-for="f in p.features" :key="(p.name + f)">
                        {{ f }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      v-for="h in heroes"
      :id="h.ancher"
      :key="h.title"
      class="hero is-fullheight"
    >
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-4 has-text-white">
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
            <div
              class="column is-8 is-hidden-desktop-only is-hidden-widescreen-only is-hidden-tablet-only"
              v-if="(h.text && h.text.length > 0) || h.hasPricing === true"
            >
              <div :class="`box content`">
                <h1 v-if="h.hasPricing !== true">
                  {{ h.titleExtended }}
                </h1>
                <div
                  class="has-margin-bottom has-text-left"
                  v-if="h.hasPricing !== true"
                  v-html="markdown(h)"
                />

                <div class="columns is-multiline content has-text-left" v-else>
                  <div class="column is-12" v-for="p in prices" :key="p.name">
                    <h3>
                      {{ p.name }} {{ p.price && p.price > 0 ? p.price : ""
                      }}{{ p.price && p.price > 0 ? "$ per Month" : "" }}
                    </h3>
                    <ul>
                      <li v-for="f in p.features" :key="(p.name + f)">
                        {{ f }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
import mdConstructor from "markdown-it";
const md = mdConstructor({
  html: true,
  linkify: true,
  typographer: true,
});
export default {
  data() {
    return {
      heroes: [],
      prices: [],
      selected: {},
      viewHeight: Math.max(
        document.documentElement ? document.documentElement.clientHeight : 0,
        window.innerHeight || 0
      ),
    };
  },
  async mounted() {
    const client = Contentful.createClient();
    const resHeroes = await client.getEntries({
      content_type: process.env.CTF_INDEX_HERO_ID,
    });
    this.heroes = resHeroes.items
      .map((e) => e.fields)
      .sort((a, b) => (a.order > b.order ? 1 : -1));
    this.heroes.forEach((e) => {
      document.addEventListener("scroll", () => this.inView(e.ancher));
    });
    if (this.heroes.find((e) => e.hasPricing === true)) {
      const resPricing = await client.getEntries({
        content_type: process.env.CTF_PRICING_ID,
      });
      this.prices = resPricing.items
        .map((e) => e.fields)
        .sort((a, b) => (a.order > b.order ? 1 : -1));
    }
  },
  methods: {
    inView(id) {
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;
      var scrollPosition = scrollY + windowHeight;
      const element = document.getElementById(id);
      var elementHeight = element.clientHeight;
      var elementPosition =
        element.getBoundingClientRect().top + scrollY + elementHeight;
      if (scrollPosition > elementPosition - 100) {
        this.selected = this.heroes.find((e) => e.ancher === id);
        return true;
      }

      return false;
    },
    markdown(selected) {
      return selected && selected.textExtended
        ? md.render(selected.textExtended)
        : "<span />";
    },
  },
  components: {
    PricingCard,
    FooterComp,
  },
};
</script>

<style scoped>
.hero.is-transparent.is-fullheight {
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.is-fixed {
  position: fixed;
  top: 0px;
  width: 100%;
}
.is-fixed .box {
  min-height: 70vh;
  text-align: center;
}
.overlay {
  background-color: black;
  opacity: 0.6;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
}
.has-margin-bottom {
  margin-bottom: 24px;
}
.snap {
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-image: url("/images/hero2-background.jpg");
}
a:hover {
  transform: scale(1.04);
  transition: 200ms transform ease-in-out;
}
.box {
  opacity: 1;
  padding: 24px;
}
.box.is-visible-box {
  opacity: 1;
  transition: opacity 300ms ease-out;
}
.box.is-invisible-box {
  opacity: 0;
  transition: opacity 300ms ease-in;
}
.has-text-white .title,
.has-text-white .subtitle {
  color: white;
}
.snap {
  scroll-behavior: smooth;
}
</style>
