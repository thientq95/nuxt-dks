export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  router: {
    base: '/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DKS - Trường Đại học kiểm sát Hà nội',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DKS - Trường Đại học kiểm sát Hà nội' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/assets/img/favicon.png' },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/css/all.min.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/style.css'
  ],

  script: [
    {
      src: "~/assets/js/jquery.min.js",
      type: "text/javascript"
    },
    {
      src: "~/assets/js/boostrap.min.js",
      type: "text/javascript"
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-carousel.js', mode: 'client' },
    { src: './plugins/vue-boostrap.js' },
    // { src: './plugins/vue-store.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxt/http',
    '@nuxtjs/i18n'
  ],
  // i18n: {
  //   locales: ['en', 'vi'],
  //   defaultLocale: 'vi',
  //   vueI18n: {
  //     messages: {
  //       en: {
  //         welcome: 'Welcome',
  //         contact: 'Contact'
  //       },
  //       vi: {
  //         welcome: 'xin chào',
  //         contact: 'Liên hệ'
  //       }
  //     }
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: {
    color: 'DodgerBlue',
    height: '5px',
    continuous: true,
    duration: 3000
  }
}
