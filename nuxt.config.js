require("dotenv").config();

module.exports = {
  lang: "english",
  /*
   ** Headers of the page
   */
  head: {
    title: "Iva - Your document Generator",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Iva - Your document Generator",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap",
      },
    ],
    script: [
      { src: "/drift.js", defer: true },
      { src: "/segment.js", defer: true },
      { src: "/ga.js" },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-115J9KGDC3",
        defer: true,
      },
    ],
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
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
