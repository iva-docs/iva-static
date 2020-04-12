<template>
  <div class="dialog-box content" style="margin-top:-5vw">
    <div class="box-content">
      <img src="/images/dialogv3.png" />
      <h3>
        {{ h3 }}
      </h3>
      <h5>
        {{ h5 }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    h3: String,
    h5: String
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
  padding-left: 5vw;
  padding-right: 2vw;
  margin-top: 2vw;
  margin-bottom: 0;
}
.box-content > h5 {
  position: relative;
  padding-left: 5vw;
  padding-right: 2vw;
}
</style>