const { environment } = require('@rails/webpacker')
// const { webpack } = require('webpack')

// in the book, but does not seem to be needed
// although I am leaving it in 

// update it is in the book, but it causes it to fail on compile at heroku

// const webpack = require('webpack')
// environment.plugins.prepend('Provide',
// new webpack.ProvidePlugin({
//     $: 'jquery/src/jquery',
//     jQuery: 'jquery/src/jquery'
// })
// )
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
  })
)

module.exports = environment