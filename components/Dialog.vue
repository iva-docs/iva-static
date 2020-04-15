<template>
  <div class="dialog-box content">
    <div
      :class="
        `box-content ${isSmall ? 'is-small' : ''} ${
          isMedium ? 'is-medium' : ''
        } ${isLarge ? 'is-large' : ''}`
      "
    >
      <img src="/images/dialogv3.png" v-if="isSmall" />
      <img src="/images/dialog-box.png" v-if="isMedium" />
      <img src="/images/dialogv2.png" v-if="isLarge" />
      <h3>
        {{ h3 }}
      </h3>
      <p>
        {{ p }}
      </p>
      <a
        :href="href"
        class="button is-primary is-large"
        target="_blank"
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
    button: String,
    href: {
      type: String,
      default: "https://app.iva-docs.com/auth/register"
    }
  },
  computed: {
    innerWidth() {
      return window.innerWidth;
    },
    isSmall() {
      return innerWidth > 1408 && (!this.p || (this.p && this.p.length < 80));
    },
    isMedium() {
      return (
        (innerWidth < 1408 &&
          innerWidth > 1024 &&
          (!this.p || this.p.length < 80)) ||
        (innerWidth > 1408 && this.p && this.p.length >= 80) ||
        (innerWidth < 1024 && (!this.p || (this.p && this.p.length < 80)))
      );
    },
    isLarge() {
      return (
        (innerWidth < 1024 && this.p && this.p.length >= 80) ||
        (innerWidth > 1024 &&
          this.p &&
          this.p.length >= 80 &&
          innerWidth < 1408)
      );
    }
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
.box-content.is-small {
  padding-top: 15vh;
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
  padding-left: 5vw;
  padding-top: 3vh;
  padding-right: 5vw;
}
.box-content.is-small > h3 {
  padding-top: 2vh;
  margin-top: 0;
}
.box-content.is-medium > h3 {
  padding-left: 5vh;
  padding-right: 2vh;
  padding-top: 2vh;
}

.box-content.is-medium > p {
  padding-left: 5vw;
}
.box-content.is-large > p {
  padding-left: 4vw;
  padding-right: 4vw;
}

.box-content > p {
  position: relative;
  padding-left: 5vw;
  padding-right: 3vw;
}
.box-content.is-medium > p {
  padding-left: 5vw;
  padding-right: 5vw;
}

.box-content > a {
  position: relative;
  margin-left: 5vw;
  margin-right: 3vw;
}

h3 {
  margin-bottom: 0;
}
</style>
