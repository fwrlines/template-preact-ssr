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
    ],
    alias:{
      'react'               :'preact/compat',
      'react-dom/test-utils':'preact/test-utils',
      'react-dom'           :'preact/compat'
      // Must be below test-utils
    }
  },

  context:__dirname,

  devServer:{
    contentBase:[
      path.resolve(__dirname, './public'),
      path.resolve(__dirname, './src/assets/fonts'),
      path.resolve(__dirname, './src/assets/images')
    ],
    watchContentBase  :true,
    historyApiFallback:true,
    port              :3000,
    host              :'0.0.0.0',
    hot               :true,
    liveReload        :false,
    clientLogLevel    :'debug',
    disableHostCheck  :true //rdp
  },

  node:{
    __filename:true,
    __dirname :true
  },

  entry:[
    path.resolve(path.join(__dirname, 'src/server.js'))
  ],

  output:{
    path         :path.resolve(__dirname, 'public/'),
    publicPath   :'/',
    filename     :'express.js',
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
    ]

  }

}


