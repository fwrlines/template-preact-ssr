const path = require('path')
const webpack = require('webpack')

/* PLUGINS */


// A. Externals

const nodeExternals = require('webpack-node-externals')

// B. Optimization

const TerserPlugin = require('terser-webpack-plugin')


//


module.exports = {
  resolve:{
    alias:{
      'react'               :path.resolve('./node_modules/preact/compat'),
      'react-dom/test-utils':path.resolve('./node_modules/preact/test-utils'),
      'react-dom'           :path.resolve('./node_modules/preact/compat'),
      '@fwrlines/utils'     :path.resolve('./node_modules/@fwrlines/utils')
      // Must be below test-utils
    },
    modules:[
      path.resolve(__dirname, './src'),
      'node_modules'
    ],
    extensions:[
      '.js'
    ]
  },

  entry:[
    path.resolve(path.join(__dirname, 'src/ssr/renderer.simple.js'))
    //path.resolve(path.join(__dirname, 'src/renderer.js'))
  ],

  output:{
    path         :path.resolve(__dirname, 'api/'),
    publicPath   :'/',
    filename     :'renderer.js',
    //newparameter :'something',
    libraryTarget:'commonjs2'
  },

  plugins:[
    new webpack.optimize.LimitChunkCountPlugin({
		      maxChunks:1

    })

  ],

  optimization:process.env.COMPILE ? {
    nodeEnv  :'production',
    minimize :true,
    minimizer:[
      new TerserPlugin({})
    ]
  } : {},

  target   :'node',
  mode     :'development',
  devtool  :'inline-cheap-source-map',
  externals:[nodeExternals()],

  module:{
    rules:[
      {
        test   :/\.(js)$/,
        exclude:/node_modules/,
        use    :{
          loader:'babel-loader'
        }
      }

      /*
      {
        test  :/\.(scss|css)$/,
        loader:'ignore-loader'
      }
      */
    ]
  }

}


