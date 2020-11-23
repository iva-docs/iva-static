<template>
  <div class="container content" style="margin-top:100px">
    <h1 class="has-text-centered">Iva blog</h1>
    <br />
    <br />
    <div v-for="b in blogs" :key="b.id" style="margin-bottom:24px;">
      <blog-card :blogPost="b" />
    </div>
  </div>
</template>
<script>
import Contentful from "../../plugins/contentful.js";
import BlogCard from "../../components/BlogCard.vue";

export default {
  data() {
    return { blogs: [] };
  },
  async asyncData() {
    const client = Contentful.createClient();
    const resPricing = await client.getEntries({
      content_type: process.env.CTF_BLOG_POST_ID,
      order: "sys.createdAt"
    });
    return {
      blogs: resPricing.items.map(e => {
        const aux = Object.assign({}, e.fields);
        aux.id = e.sys.id;
        return aux;
      })
    };
  },
  mounted() {
    (function(m, a, i, l, e, r) {
      m["MailerLiteObject"] = e;
      function f() {
        var c = { a: arguments, q: [] };
        var r = this.push(c);
        return "number" != typeof r ? r : f.bind(c.q);
      }
      f.q = f.q || [];
      m[e] = m[e] || f.bind(f.q);
      m[e].q = m[e].q || f.q;
      r = a.createElement(i);
      var _ = a.getElementsByTagName(i)[0];
      r.async = 1;
      r.src = l + "?v" + ~~(new Date().getTime() / 1000000);
      _.parentNode.insertBefore(r, _);
    })(
      window,
      document,
      "script",
      "https://static.mailerlite.com/js/universal.js",
      "ml"
    );

    var ml_account = ml("accounts", "2003320", "k7r4d1e0o8", "load");
  },
  methods: {},
  components: {
    BlogCard
  }
};
</script>
<style scoped>
.container {
  min-height: 100vh;
}
</style>
