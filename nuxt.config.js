export default {
  head: {
    title: 'nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // 设置源代码目录
  srcDir: 'src/',

  css: ['ant-design-vue/dist/antd.css'],

  plugins: ['@/plugins/antd-ui'],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  modules: ['@nuxtjs/axios'],

  axios: {},

  build: {},
}
