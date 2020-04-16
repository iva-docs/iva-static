<template>
  <div class="container content" style="margin-top:100px">
    <h1 class="has-text-centered has-text-white">Iva blog</h1>
    <br />
    <br />
    <div v-for="b in blogs" :key="b.id">
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
  methods: {},
  components: {
    BlogCard
  }
};
</script>
