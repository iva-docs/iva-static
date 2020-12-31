require("dotenv").config();

module.exports = {
  lang: "english",
  /*
   ** Headers of the page
   */
  head: {
    title: "Meoh Live - La salle de sport s'est chez vous",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Meoh live"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap"
      }
    ],
    script: [
      { src: "/drift.js", mode: "client", defer: true },
      { src: "/segment.js", mode: "server", defer: true },
      { src: "/ibuenda.js", mode: "server" },
      {
        src: "https://cdn.iubenda.com/cs/iubenda_cs.js",
        mode: "client",
        defer: true
      }
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
