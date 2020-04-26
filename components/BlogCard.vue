<template>
  <div class="card">
    <div class="card-content">
      <p class="title">
        {{ blogPost.title }}
      </p>
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="personImage" :alt="person.name" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5">{{ person.name }}</p>
          <p class="subtitle is-6">{{ person.highlight }}</p>
        </div>
      </div>
      <RichTextRenderer :document="blogPost.shortDescription" />
    </div>
    <footer class="card-footer">
      <a :href="'/blog/' + blogPost.id" class="card-footer-item">
        Read
      </a>
    </footer>
  </div>
</template>

<script>
import RichTextRenderer from "contentful-rich-text-vue-renderer";
export default {
  components: {
    RichTextRenderer
  },
  props: {
    blogPost: Object
  },
  computed: {
    person() {
      if (!this.blogPost || !this.blogPost.person) {
        return {};
      }
      return this.blogPost.person.fields;
    },
    personImage() {
      console.log(this.person.picture.fields.file);
      return this.person.picture.fields.file.url;
    }
  }
};
</script>