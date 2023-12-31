export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  router: {
    base: '/vue-components/'
  },
  head: {
    title: 'Vue/Nuxt Components',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'description', content: '뷰/넉스트 컴포넌트입니다.' },
      { property: 'og:title', content: 'Vue/Nuxt Components'},
      { property: 'og:description', content: '뷰/넉스트 컴포넌트입니다.'},
      { property: 'og:image', content: 'https://heejae0811.github.io/vue-components/meta.jpg'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://heejae0811.github.io/vue-components/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/common.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
