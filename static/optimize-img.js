function downloadAtOnload() {
  // Dynamically load CSS
  var ls = document.createElement("link");
  ls.rel = "stylesheet";
  ls.href = "css/my-css.css";
  document.getElementsByTagName("head")[0].appendChild(ls);

  // Dynamically load Javascript/jQuery
  element = document.createElement("script");
  element.src = "js/my-js.js";
  document.body.appendChild(element);
}
if (window.addEventListener)
  window.addEventListener("load", downloadAtOnload, false);
else if (window.attachEvent) window.attachEvent("onload", downloadAtOnload);
else window.onload = downloadAtOnload;
