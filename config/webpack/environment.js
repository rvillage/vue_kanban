const { environment } = require('@rails/webpacker')

const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const pug = require('./loaders/pug')
const typescript = require('./loaders/typescript')
const aliasConfig = require('./configs/alias')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('pug', pug)
environment.loaders.prepend('typescript', typescript)

environment.config.merge(aliasConfig)

module.exports = environment
