<template>
  <div class="box is-primary content">
    <div class="container">
      <div class="column is-12">
        <h3>{{ blogPost.title }}</h3>
        <a class="button is-link is-pulled-right" :href="'/blog/' + blogPost.id"
          >Read</a
        >
      </div>
      <div class="column is-12">
        <p>
          {{ blogPost.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogPost: Object
  }
};
</script>