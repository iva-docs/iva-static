<template>
  <a
    href="https://www.iubenda.com/terms-and-conditions/49574808"
    class="iubenda-white iubenda-embed iub-body-embed"
    title="Terms and Conditions"
    >Terms and Conditions</a
  >
</template>

<script>
export default {
  mounted() {
    (function(w, d) {
      var loader = function() {
        var s = d.createElement("script"),
          tag = d.getElementsByTagName("script")[0];
        s.src = "https://cdn.iubenda.com/iubenda.js";
        tag.parentNode.insertBefore(s, tag);
      };
      if (w.addEventListener) {
        w.addEventListener("load", loader, false);
      } else if (w.attachEvent) {
        w.attachEvent("onload", loader);
      } else {
        w.onload = loader;
      }
    })(window, document);
  }
};
</script>

<style scoped>
.iubenda-white,
#iubenda_policy.iubenda_fluid_policy .iub_container.iub_base_container {
  margin-top: 48px;
}
</style>