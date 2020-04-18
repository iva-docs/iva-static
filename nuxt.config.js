require("dotenv").config();

module.exports = {
  lang: "english",
  /*
   ** Headers of the page
   */
  head: {
    title: "Iva - Word document generator",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Let Iva do it - Iva is a word document generator that integrates with all your work tools"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "/drift.js", mode: "client", defer: true },
      { src: "/segment.js", mode: "server", defer: true },
      {
        src: "https://cdn.iubenda.com/cs/iubenda_cs.js",
        mode: "client",
        defer: true
      },
      { src: "ibuenda.js", mode: "server", defer: true }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#28549c" },
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
          exclude: /(node_modules)/
        });
      }
    }
  }
};
