const { environment } = require('@rails/webpacker')

const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const pug = require('./loaders/pug')
const typescript = require('./loaders/typescript')
const sass = require('./loaders/sass')
const scss = require('./loaders/scss')
const aliasConfig = require('./configs/alias')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('pug', pug)
environment.loaders.prepend('typescript', typescript)
environment.loaders.prepend('sass', sass)
environment.loaders.prepend('scss', scss)

environment.config.merge(aliasConfig)

module.exports = environment
