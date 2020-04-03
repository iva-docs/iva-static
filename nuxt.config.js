require("dotenv").config();

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Let Iva do it for you",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Let Iva do it - Iva is a document generator that integrates with all your work tools",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "/drift.js" },
      { src: "/optimize-img.js" },
      { src: "https://cdn.iubenda.com/cs/iubenda_cs.js" },
      { src: "ibuenda.js" },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  env: { ...process.env },
  /*
   ** Build configuration
   */
  mode: "spa",
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
