const { environment } = require('@rails/webpacker')

const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const pug = require('./loaders/pug')
const aliasConfig = require('./configs/alias')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('pug', pug)
environment.config.merge(aliasConfig)

module.exports = environment
