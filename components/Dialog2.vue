<template>
  <div class="container content">
    <img src="/images/bubbl.png" alt="Snow" :id="'bubbl-img' + hash" />
    <div class="bubbl-body" :id="'bubbl-body' + hash">
      <h3 v-if="h3">{{ h3 }}</h3>
      <p v-if="p">{{ p }}</p>
      <img v-if="img" :src="img" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    p: String,
    h3: String,
    img: String,
    button: String,
    href: {
      type: String,
      default: "https://app.iva-docs.com/auth/register"
    }
  },
  data() {
    return {
      hash: Math.random()
    };
  },
  mounted() {
    this.updateStyle();
    setTimeout(this.updateStyle, 100);
    setTimeout(this.updateStyle, 200);
    setTimeout(this.updateStyle, 500);
    setTimeout(this.updateStyle, 1000);
  },
  methods: {
    updateStyle() {
      const body = document.getElementById("bubbl-body" + this.hash);
      const img = document.getElementById("bubbl-img" + this.hash);
      img.style = "height:" + body.clientHeight + "px;width:100%;";
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  text-align: center;
}
img {
  max-width: 100%;
}
.bubbl-body {
  position: absolute;
  top: 0;
  padding: 24px;
  width: 100%;
}
</style>
