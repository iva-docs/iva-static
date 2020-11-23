<template>
  <section>
    <div class="hero is-fullheight" id="home">
      <div class="hero-body has-text-left">
        <div class="container">
          <h2 class="title">
            L'entrainement sportif le plus addictif ❤️
          </h2>
          <h3 class="subtitle">
            #live #home #workout
          </h3>
          <a
            href="https://app.iva-docs.com/auth/register"
            class="button is-primary is-large has-margin-top"
          >
            Je m'inscris!
          </a>
        </div>
      </div>
    </div>
    <div class="hero is-fullheight" id="solution">
      <div class="hero-body">
        <div class="columns is-multiline">
          <div class="column is-6">
            <h2 class="has-text-centered">3 step process</h2>
          </div>
          <div class="column is-6">
            <div class="columns is-multiline">
              <div class="column is-12">
                <div class="box has-text-centered">
                  <h3>Create</h3>
                  <p>
                    Build your template on Microsoft Word with instructions for
                    Iva.
                  </p>
                </div>
              </div>
              <div class="column is-12">
                <div class="box has-text-centered">
                  <h3>Connect</h3>
                  <p>
                    Connect Iva to your other tools for automated generation.
                  </p>
                </div>
              </div>
              <div class="column is-12">
                <div class="box has-text-centered">
                  <h3>Focus</h3>
                  <p>
                    Let Iva do the repetitive work. Focus on what's important.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero is-fullheight" id="integrations">
      <div class="hero-body">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="has-text-centered">
              Integrations
            </h2>
          </div>
          <div class="column is-3">
            <div class="box is-compact has-text-centered">
              <h3>Email</h3>
              <p>
                Iva can send the generated document to any email address
              </p>
            </div>
          </div>
          <div class="column is-3">
            <div class="box is-compact has-text-centered">
              <h3>Google Drive</h3>
              <p>Iva deposits the generated document on google drive</p>
            </div>
          </div>
          <div class="column is-3">
            <div class="box is-compact has-text-centered">
              <h3>Zapier</h3>
              <p>Integrate to 2000+ apps through Zapier</p>
            </div>
          </div>
          <div class="column is-3">
            <div class="box is-compact has-text-centered">
              <h3>CSV</h3>
              <p>
                Deposit your CSV file to generate documents for each row
              </p>
            </div>
          </div>
          <div class="column is-3">
            <div class="box is-compact is-paddingless has-text-centered">
              <h3>Web hooks</h3>
              <p>Iva Sends the generated documents to your web hook</p>
            </div>
          </div>
          <div class="column is-3">
            <div class="box is-compact has-text-centered">
              <h3>Typeform</h3>
              <p>You can generate a document for form responses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="has-text-centered">
              Hear it from our customers
            </h2>
          </div>
          <div class="column is-6">
            <article class="media">
              <figure class="media-left">
                <span class="image is-128x128">
                  <img src="/images/pauline.jpeg" />
                </span>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h5>
                    Pauline Wuilleme
                    <span class="is-pulled-right"
                      >Head of customer success</span
                    >
                  </h5>
                  <p>
                    My team saves around an hour a day. Spent talking to client
                    instead of writing documents.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div class="column is-6">
            <article class="media">
              <figure class="media-left">
                <span class="image is-128x128">
                  <img src="/images/sharon.jpeg" />
                </span>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h5>
                    Sharon Journo
                    <span class="is-pulled-right"
                      >Customer success manager</span
                    >
                  </h5>
                  <p>
                    I can't see myselft editing documents anymore. Now they just
                    pop up in my inbox.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div class="hero is-fullheight" id="pricing">
      <div class="hero-body">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="has-text-centered">
              Prices that fit your needs
            </h2>
          </div>
          <div v-for="p in prices" :key="p.name" class="column is-4">
            <div class="box content">
              <h4>
                {{ p.name }}
                <span
                  class="is-pulled-right"
                  v-if="p.price !== 0 && p.price !== -1"
                >
                  {{ p.price }}€/Month</span
                >
                <span class="is-pulled-right" v-if="p.price === -1">
                  Contact us</span
                >
              </h4>
              <ul>
                <li v-for="f in p.features" :key="f">{{ f }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero is-fullheight" id="home">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h2 class="title">
            Did we convince you?
          </h2>
          <h3 class="subtitle">
            You can ask us questions in our chat right here in the corner!
          </h3>
          <a
            href="https://app.iva-docs.com/auth/register"
            class="button is-primary is-large has-margin-top"
          >
            Yes, let me try it!
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Contentful from "../plugins/contentful.js";
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
  }
};
</script>

<style scoped>
.card {
  border-radius: 6px;
}
.has-margin-top {
  margin-top: 5rem;
  @media screen and (max-width: $tablet - 1px) {
    margin-top: 2rem;
  }
}
</style>
