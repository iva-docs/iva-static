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
          <div class="columns">
            <div class="column is-4">
              <h1 class="title">
                {{ h.title }}
              </h1>
              <h2 class="subtitle" v-if="h.subtitle && h.subtitle.length > 0">
                {{ h.subtitle }}
              </h2>
              <p class="has-margin-bottom" v-if="h.text && h.text.length > 0">
                {{ h.text }}
              </p>
              <a
                href="/catalog"
                class="button is-primary is-large is-fullwidth"
              >
                {{ h.callToAction }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Contentful from "../plugins/contentful.js";
export default {
  data() {
    return {
      indexData: {},
      heroes: []
    };
  },
  async mounted() {
    const client = Contentful.createClient();
    const res = await client.getEntries({
      content_type: process.env.CTF_INDEX_ID
    });
    this.indexData = res.items[0].fields;
    const resHeroes = await client.getEntries({
      content_type: process.env.CTF_INDEX_HERO_ID
    });
    this.heroes = resHeroes.items
      .map(e => e.fields)
      .sort((a, b) => (a.order > b.order ? 1 : -1));
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
.hero {
  scroll-snap-align: start;
}
.has-margin-bottom {
  margin-bottom: 24px;
}
.snap {
  scroll-snap-type: y proximity;
}
</style>
