<template>
  <a
    href="https://www.iubenda.com/privacy-policy/49574808"
    class="iubenda-white iubenda-embed iub-body-embed"
    title="Privacy Policy"
    >Privacy Policy</a
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
        // @ts-ignore
        tag.parentNode.insertBefore(s, tag);
      };
      if (w.addEventListener) {
        w.addEventListener("load", loader, false);
        // @ts-ignore
      } else if (w.attachEvent) {
        // @ts-ignore
        w.attachEvent("onload", loader);
      } else {
        w.onload = loader;
      }
    })(window, document);
  }
};
</script>

<style>
.iubenda-white,
#iubenda_policy.iubenda_fluid_policy {
  margin-top: 48px;
  background-color: white;
}
</style>