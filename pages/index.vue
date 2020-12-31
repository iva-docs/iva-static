<template>
  <section>
    <div class="hero is-fullheight has-background-1">
      <div class="hero-body has-text-left">
        <div class="container">
          <h1 class="title is-1 has-text-left">
            Stop editing documents
          </h1>
          <h2 class="title has-text-left is-hidden-mobile">
            The only document automation software you need
          </h2>
          <h3 class="has-text-left">
            A Powerful, simplified tool to automate your workflow with
            documents.
          </h3>
          <a
            href="https://app.iva-docs.com/auth/register"
            class="button is-primary is-large has-margin-top"
          >
            Sign up for free
          </a>
          <p>
            <br />No credit card required - free forever plan - Cancel anytime
          </p>
        </div>
      </div>
    </div>

    <div class="hero is-fullheight is-hidden-mobile">
      <div class="container content">
        <div
          class="tabs is-centered is-large is-toggle is-fullwidth is-hidden-mobile"
        >
          <ul>
            <li :class="tab === 'automate' ? 'is-active' : ''">
              <a href="#automate" @click="tab = 'automate'"
                ><i class="fa fa-magic" /> Automate</a
              >
            </li>
            <li :class="tab === 'customize' ? 'is-active' : ''">
              <a href="#customize" @click="tab = 'customize'"
                ><i class="fa fa-users-cog" /> Customize</a
              >
            </li>
            <li :class="tab === 'integrate' ? 'is-active' : ''">
              <a href="#integrate" @click="tab = 'integrate'"
                ><i class="fa fa-plug" /> Integrate</a
              >
            </li>
          </ul>
        </div>
        <div class="columns is-multiline">
          <div
            class="column is-12"
            v-if="tab === 'automate' ? 'is-active' : ''"
          >
            <div class="columns is-multiline">
              <div class="column is-12">
                <h2>
                  Iva takes away repetitive work through automation
                </h2>
                <p>
                  Through templates, Iva can generate documents with your data.
                  Instead of manually creating a new document and updating some
                  sections, Iva can use your input to fill those sections. Iva
                  has read a special set of instructions written as
                  <span> {{ "{{=" }}first_name}{{ "}" }} </span> and fills it up
                  with the first name from your data sample.
                </p>
              </div>
              <div class="column is-4">
                <h5>Your data</h5>
                <figure class="image">
                  <img src="images/data.png" alt="" />
                </figure>
                <p>
                  Whether it is in an Excel sheet or another app, Iva can
                  connect to it.
                </p>
              </div>
              <div class="column is-4">
                <h5>Your template</h5>
                <figure class="image">
                  <img src="images/word.jpg" alt="" />
                </figure>
                <p>
                  Prepare your document template for Iva so she can combine it
                  with your data.
                </p>
              </div>
              <div class="column is-4">
                <h5>Your document</h5>
                <figure class="image">
                  <img src="images/logo.png" alt="" />
                </figure>
                <p>
                  Get your document delivered on your cloud storage of choice,
                  via email, or directly to your customers.
                </p>
              </div>
            </div>
          </div>
          <div
            class="column is-12"
            v-if="tab === 'integrate' ? 'is-active' : ''"
          >
            <div class="columns is-multiline">
              <div class="column is-12">
                <h2 class="title">
                  Use Iva with your daily tools !
                </h2>
                <p class="has-text-centered">
                  Iva can connect to more than 2000 apps through Zapier and
                  more.
                </p>
              </div>
              <div class="column is-4">
                <h5>Zapier</h5>
                <figure class="image">
                  <img src="images/zapier.png" alt="" />
                </figure>
                <p>
                  Easy automation for busy people. Zapier moves info between
                  your web apps automatically, so you can focus on your most
                  important work. Iva has a native integration with Zapier
                  allowing it to connect to over 2000 apps.
                </p>
                <a href="https://zapier.com/apps/iva-docs/integrations"
                  >See our integration</a
                >
              </div>
              <div class="column is-4">
                <h5>Typeform</h5>
                <figure class="image">
                  <img src="images/typeform.png" alt="" />
                </figure>
                <p>
                  People-friendly forms and surveys Turn a list of questions
                  into a conversation.Typeform helps you get better data to fuel
                  your business through forms. Iva has a native integration
                  allowing you to directly connect to those forms without
                  leaving Iva.
                </p>
                <a href="https://www.typeform.com/"
                  >Get started with Typeform</a
                >
              </div>
              <div class="column is-4">
                <h5>Google Drive</h5>
                <figure class="image">
                  <img src="images/drive.png" alt="" />
                </figure>
                <p>
                  Easy and secure access to all of your content Store, share,
                  and collaborate on files and folders from any mobile device,
                  tablet, or computer. Iva can deliver to Google drive batches
                  of documents so you don't have to worry about it.
                </p>
                <a href="https://drive.google.com/">Go to Drive</a>
              </div>
            </div>
          </div>
          <div
            class="column is-12"
            v-if="tab === 'customize' ? 'is-active' : ''"
          >
            <h2 class="title">
              Iva is a member of your team!
            </h2>
            <p>
              Iva can send emails as a member of your team. Through domain name
              validation, Iva can send an email from your domain name. You can
              also customize the content those emails.
            </p>

            <figure>
              <img src="images/email-custom.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>

    <div class="hero is-fullheight">
      <div class="container content">
        <h2>
          A personalized tools for who you are
        </h2>
        <div class="columns is-multiline">
          <div class="column is-4">
            <div class="box">
              <h3>Teachers</h3>
              <div class="title is-1 has-text-centered">
                <i class="fa fa-chalkboard-teacher fa-2x" />
              </div>
              <p>
                Generate Report cards, Certificates , etc., through integration
                with your students' data. Iva will deliver them to you or to
                your students.
              </p>
            </div>
          </div>
          <div class="column is-4">
            <div class="box">
              <h3>Online Seller</h3>
              <div class="title is-1 has-text-centered">
                <i class="fa fa-receipt fa-2x" />
              </div>
              <p>
                Generate Orders and Receipts through integrating with forms. Iva
                will deliver the order to you and the receipt to your customers.
              </p>
            </div>
          </div>
          <div class="column is-4">
            <div class="box">
              <h3>Freelancer</h3>
              <div class="title is-1 has-text-centered">
                <i class="fa fa-laptop-house fa-2x" />
              </div>
              <p>
                Generate Dynamic invoices with styled items. Iva can deliver
                them from your company's domain name.
              </p>
            </div>
          </div>
          <div class="column is-4">
            <div class="box">
              <h3>Event Organizer</h3>
              <div class="title is-1 has-text-centered">
                <i class="fa fa-calendar-alt fa-2x" />
              </div>
              <p>
                Generate invitations and certificates from the list of people
                who attend your events.
              </p>
            </div>
          </div>
          <div class="column is-4">
            <div class="box">
              <h3>Sales Person</h3>
              <div class="title is-1 has-text-centered">
                <i class="fa fa-comments-dollar fa-2x" />
              </div>
              <p>
                Generate contracts with the data relative to the clients and
                deliver them to your clients automatically.
              </p>
            </div>
          </div>
          <div class="column is-4">
            <div class="box">
              <h3>HR Manager</h3>
              <div class="title is-1 has-text-centered">
                <i class="fa fa-user-shield fa-2x" />
              </div>
              <p>
                Generate contracts, onboarding documents , etc., by integrating
                to your favorite HR tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero is-fullheight has-background-2">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h2 class="title">
            Join the businesses already growing with us
          </h2>
          <p class="has-text-centered">
            Our goal is empowering you to run your business with the software
            tools that you need.<br />Take the next step forward and join our
            growing community by letting Iva do your work for you.
          </p>
          <a
            href="https://app.iva-docs.com/auth/register"
            class="button is-primary is-large has-margin-top"
          >
            Try Iva for free
          </a>
          <p class="has-text-centered">
            <br />No credit card required - free forever plan - Cancel anytime
          </p>
        </div>
      </div>
    </div>

    <!-- <div class="hero is-fullheight">
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
    </div> -->
  </section>
</template>

<script>
import Contentful from "../plugins/contentful.js";
export default {
  data() {
    return {
      prices: [],
      tab: "automate"
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

<style lang="scss" scoped>
.card {
  border-radius: 6px;
}
.has-margin-top {
  margin-top: 1rem;
}
.has-background-1 {
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1521&q=80");
}
.has-background-2 {
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1516910817563-4df1c1b69058?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
}
h2,
h3,
h5 {
  text-align: center;
}
p {
  text-align: justify;
}
.columns .column.is-4 {
  padding: 32px 64px;
}
figure.image img {
  max-width: 196px;
}
</style>
