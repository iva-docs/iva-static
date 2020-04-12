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
                p="Let Iva do the repetitive work. Find all your documents in your Email inbox, Cloudstorage and other integrations"
                :v2="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight is-hero1">
      <div class="hero-body content">
        <div class="columns is-multiline">
          <div class="column is-6">
            <Dialog
              h3="Never write a document yourself"
              p="I belive your time is precious"
            />
          </div>
          <div class="column is-offset-2 is-4">
            <img src="/images/Big-me.png" />
            <DialogName h3="Khaled Romdhane" h5="Iva-docs" />
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight is-hero2">
      <div class="hero-body content">
        <div class="columns is-multiline">
          <div class="column is-6">
            <Dialog h3="Never write a document yourself" p="" />
          </div>
          <div class="column is-offset-2 is-4">
            <img src="/images/pauline.jpeg" />
            <DialogName h3="Pauline Wuilleme" h5="MedGo" />
          </div>
          <div class="column is-4">
            <img src="/images/sharon.jpeg" />
            <DialogName h3="Sharon Journo" h5="MedGo" />
          </div>
          <div class="column is-offset-2 is-6">
            <Dialog
              h3="Never write a document yourself"
              p="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius corporis ex ullam blanditiis eaque ea deleniti incidunt laboriosam laborum? Deserunt expedita, cumque animi neque tempore distinctio ea sed officia."
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Dialog from "../components/Dialog.vue";
import DialogName from "../components/DialogName.vue";
export default {
  components: {
    Dialog,
    DialogName
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
