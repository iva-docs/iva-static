<template>
  <section>
    <div class="hero is-fullheight">
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
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="columns is-multiline">
          <div class="column is-6">
            <h2 class="has-text-centered">3 step process</h2>
          </div>
          <div class="column is-6">
            <div class="columns is-multiline content">
              <div class="column is-12">
                <h3>🔴 En LIVE et en replay</h3>
                <p>
                  Les coachs les plus motivants de Paris et leurs meilleures
                  playlists pour un entrainement LIVE complètement immersif chez
                  vous.
                </p>
              </div>
              <div class="column is-12">
                <h3>🙌🏻 Des progrès rapides</h3>
                <p>
                  Fixez vous de nouveaux défis chaque semaine, et partagez-les à
                  la communauté.
                </p>
              </div>
              <div class="column is-12">
                <h3>🏋🏻🏋🏼‍♂️ Pour tous les niveaux</h3>
                <p>
                  Que vous soyez débutant ou confirmé, vous trouverez la séance
                  et le coach qui convient à votre niveau.​
                </p>
              </div>
              <div class="column is-12">
                <a
                  href="https://app.iva-docs.com/auth/register"
                  class="button is-primary"
                >
                  Je m'inscris!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero is-fullheight">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h2 class="title is-1">
            Atteignez vos objectifs grâce à Meoh live
          </h2>
          <figure class="image is-5by3">
            <img
              src="https://images.unsplash.com/photo-1563953715689-335fe4271a1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
          </figure>
        </div>
      </div>
    </div>
    <div class="hero is-fullheight">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h2 class="title">
            Faites votre sport où vous voulez !
          </h2>
          <a
            href="https://app.iva-docs.com/auth/register"
            class="button is-primary is-large has-margin-top"
          >
            Je veux essayer!
          </a>
        </div>
      </div>
    </div>
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container content">
          <div class="columns is-multiline">
            <div class="column is-12 has-text-centered">
              <h2>
                Témoignages des #meoheureux
              </h2>
            </div>
            <div class="column is-12">
              <div class="columns is-multiline">
                <div class="column is-4">
                  <div class="box">
                    <h4>Bapt W</h4>
                    <p>
                      <i class="fa fa-star has-text-warning" /><i
                        class="fa fa-star has-text-warning"
                      /><i class="fa fa-star has-text-warning" /><i
                        class="fa fa-star has-text-warning"
                      /><i class="fa fa-star has-text-warning" />
                    </p>
                    <hr />
                    <p>
                      J'emporte Endorphi partout avec moi sur mon iPhone et je
                      peux m'entrainer un peu partout, et surtout quand je veux
                      !​
                    </p>
                  </div>
                </div>
                <div class="column is-4">
                  <div class="box">
                    <h4>Bapt W</h4>
                    <p>
                      <i class="fa fa-star has-text-warning" /><i
                        class="fa fa-star has-text-warning"
                      /><i class="fa fa-star has-text-warning" /><i
                        class="fa fa-star has-text-warning"
                      /><i class="fa fa-star has-text-warning" />
                    </p>
                    <hr />
                    <p>
                      J'emporte Endorphi partout avec moi sur mon iPhone et je
                      peux m'entrainer un peu partout, et surtout quand je veux
                      !​
                    </p>
                  </div>
                </div>
                <div class="column is-4">
                  <div class="box">
                    <h4>Bapt W</h4>
                    <p>
                      <i class="fa fa-star has-text-warning" /><i
                        class="fa fa-star has-text-warning"
                      /><i class="fa fa-star has-text-warning" /><i
                        class="fa fa-star has-text-warning"
                      /><i class="fa fa-star has-text-warning" />
                    </p>
                    <hr />
                    <p>
                      J'emporte Endorphi partout avec moi sur mon iPhone et je
                      peux m'entrainer un peu partout, et surtout quand je veux
                      !​
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-6">
              <h2 class="title">
                Toujours pas convaincu ?
              </h2>
              <p>NOUS OUVRONS NOS PRÉVENTES AUX 100 PLUS RAPIDES.</p>
            </div>
            <div class="column is-6 has-text-centered">
              <a
                href="https://app.iva-docs.com/auth/register"
                class="button is-primary is-large has-margin-top"
              >
                Je veux essayer!
              </a>
            </div>
          </div>
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
  margin-top: 1rem;
}
</style>
