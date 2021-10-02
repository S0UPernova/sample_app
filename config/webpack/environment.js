const { environment } = require('@rails/webpacker')
const { webpack } = require('webpack')

// in the book, but does not seem to be needed
// although I am leaving it in 

// const webpack = require('webpack')

environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
)

module.exports = environment
