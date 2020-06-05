const path = require('path')

module.exports = function (api) {
  api.cache(false)

  const presets = [
    [
      '@babel/preset-env',
      {
        //modules:'commonjs',
        targets:{
          node:'12'
        }
        //debug:true
      }
    ],
    //'@babel/preset-react'
    'preact'
  ]
  const plugins = [
    'inline-dotenv',
    [
      'module-resolver', {
        root:['./src'],

        alias:{
          'react'               :path.resolve('./node_modules/preact/compat'),
          'react-dom/test-utils':path.resolve('./node_modules/preact/test-utils'),
          'react-dom'           :path.resolve('./node_modules/preact/compat')
          // Must be below test-utils
        }
      }
    ],
    '@babel/plugin-proposal-class-properties',
    ['babel-plugin-inline-import',
      {
        extensions:[
          '.html',
          '.xml',
          '.graphql',
          '.gql'
        ]
      }
    ],
    ['@babel/plugin-transform-react-jsx', {
      pragma          :'h', // default pragma is React.createElement
      pragmaFrag      :'Fragment', // default is React.Fragment
      throwIfNamespace:false // defaults to true
    }],
    '@loadable/babel-plugin'
  ]

  const ignore = [
    '*.scss'
  ]

  //['add-module-exports']
  //

  return {
    presets,
    plugins,
    ignore
  }
}
