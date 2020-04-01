<template>
  <div class="card is-primary">
    <header
      :class="'card-header ' + (isFeatured === true ? 'is-featured' : '')"
    >
      <p class="card-header-title">
        {{ name }} {{ isFeatured === true ? `(${featuredText})` : "" }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <ul>
          <li v-for="f in features" :key="name + f">{{ f }}</li>
        </ul>
      </div>
    </div>
    <footer
      :class="
        'card-footer ' + (isFeatured === true ? 'is-featured-footer' : '')
      "
    >
      <div class="card-footer-item">
        <a href="https://app.iva-docs.com/auth/register">
          {{
            price === 0
              ? "Free"
              : price === -1
              ? "Talk to us"
              : price + "$ per month"
          }}
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true
    },
    price: {
      required: true
    },
    isFeatured: {
      required: true
    },
    featuredText: {
      required: false
    },
    features: {
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/colors.scss";
.card {
  border-radius: 12px;
}
.card-content {
  min-height: 260px;
}
.is-featured {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: $primary;
}
.is-featured-footer {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: $primary;
}
.is-featured .card-header-title {
  color: white;
}
.is-featured-footer a {
  color: white;
}
</style>
