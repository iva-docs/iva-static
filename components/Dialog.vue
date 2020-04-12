<template>
  <div class="dialog-box content" :style="v2 ? 'margin-top:-40vh;' : ''">
    <div class="box-content">
      <img src="/images/dialog-box.png" v-if="!v2 && !v3" />
      <img src="/images/dialogv2.png" v-if="v2" />
      <img src="/images/dialogv3.png" v-if="v3" />
      <h3>
        {{ h3 }}
      </h3>
      <p>
        {{ p }}
      </p>
      <a
        href="https://app.iva-docs.com/auth/register"
        class="button is-primary is-large is-hidden-mobile"
        v-if="button"
      >
        {{ button }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    p: String,
    h3: String,
    v2: Boolean,
    v3: Boolean,
    button: String
  }
};
</script>


<style lang="scss" scoped>
.dialog-box {
  width: 100%;
  height: 100%;
}

.box-content {
  display: inline-block;
  position: relative;
  width: 100%;
}

.box-content > img {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 0;
}

.box-content > h3 {
  position: relative;
  padding-left: 8vw;
  padding-top: 5vh;
  padding-right: 8vw;
}

.box-content > p {
  position: relative;
  padding-left: 5vw;
  padding-right: 3vw;
}
.box-content > a {
  position: relative;
}
</style>