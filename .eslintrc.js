module.exports = {
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'webpack.config.js'
      }
    }
  },
  'env': {
    'browser': true,
    'node': true,
    'commonjs': true,
    'es6': true
  },
  'extends': [
    'eslint:recommended',
    'eslint-config-synacor'
  ],
  'parser': 'babel-eslint',
  'rules':{
    'indent': [
      'error',
      2,
    ],
    'semi':[
      'error',
      'never'
    ],
    'key-spacing': [
      "error", {
        "multiLine": {
          "beforeColon": false,
          "afterColon": false
        },
         "align": {
          "beforeColon": false,
          "afterColon": false,
          "on": "colon"
        }
      }
    ]
  },
}
