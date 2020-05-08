<template>
  <div
    :class="
      'pricing-plan ' +
        (price === -1
          ? 'is-warning'
          : price === 0
          ? 'is-success'
          : 'is-primary')
    "
  >
    <div class="plan-header">{{ name }}</div>
    <div class="plan-price" v-if="price !== -1">
      <span class="plan-price-amount">
        <span class="plan-price-currency">€</span>{{ price }}
      </span>
      /month
    </div>
    <div class="plan-price" v-if="price === -1">
      <span class="plan-price-amount">
        <span class="plan-price-currency">
          Contact us
        </span>
      </span>
    </div>
    <div class="plan-items">
      <div class="plan-item" v-for="f in features" :key="f">{{ f }}</div>
    </div>
    <div class="plan-footer">
      <a
        href="https://app.iva-docs.com/auth/register"
        class="button is-fullwidth"
        v-if="price !== -1"
      >
        Choose plan
      </a>
      <a
        href="mailto:khaled@iva-docs.com"
        class="button is-fullwidth"
        v-if="price === -1"
        >Talk to us</a
      >
    </div>
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
