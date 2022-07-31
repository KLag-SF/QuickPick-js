const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  PublicPath: process.env.NODE_ENV === 'production'
            ? '/quickpick-js/'
            : '/',

})
