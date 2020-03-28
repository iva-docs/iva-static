<template>
  <div class="snap">
    <section class="hero is-transparent is-fullheight is-first-hero">
      <div class="hero-overlay"></div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-4">
              <h1 class="title">
                {{ indexData.heroTitle }}
              </h1>
              <h2 class="subtitle">
                {{ indexData.heroSubtitle }}
              </h2>
              <button class="button is-primary is-large is-fullwidth">
                {{ indexData.heroCallToAction }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-transparent is-fullheight is-second-hero">
      <div class="hero-overlay"></div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-offset-8 is-4">
              <h1 class="title">
                {{ indexData.howToTitle }}
              </h1>
              <p class="has-margin-bottom">
                {{ indexData.howToText }}
              </p>
              <button class="button is-primary is-large is-fullwidth">
                {{ indexData.howToCallToAction }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-transparent is-fullheight is-third-hero">
      <div class="hero-overlay"></div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-4">
              <h1 class="title">
                {{ indexData.integrateTitle }}
              </h1>
              <p class="has-margin-bottom">
                {{ indexData.integrateText }}
              </p>
              <button class="button is-primary is-large is-fullwidth">
                {{ indexData.integrateCallToAction }}
              </button>
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
      indexData: {}
    };
  },
  async mounted() {
    const client = Contentful.createClient();
    const res = await client.getEntries({
      content_type: process.env.CTF_INDEX_ID
    });
    this.indexData = res.items[0].fields;
  }
};
</script>

<style scoped>
.is-first-hero {
  background-image: url("/images/hero-background.jpg");
  background-size: cover;
  background-position: center;
}
.is-second-hero {
  background-image: url("/images/hero2-background.jpg");
  background-size: cover;
  background-position: center;
}
.is-third-hero {
  background-image: url("/images/hero3-background.jpg");
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
