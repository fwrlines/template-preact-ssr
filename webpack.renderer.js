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
    modules:[
      path.resolve(__dirname, './src'),
      'node_modules'
    ],
    extensions:[
      '.js'
    ]
  },

  entry:[
    path.resolve(path.join(__dirname, 'src/renderer.simple.js'))
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
      },
      {
        test  :/\.(scss|css)$/,
        loader:'ignore-loader'
      }
    ]
  }

}


