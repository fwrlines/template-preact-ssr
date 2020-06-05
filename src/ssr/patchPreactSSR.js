let path = require('path')
let moduleAlias = require('module-alias')

console.log('PATCHING PREACT FOR SSR', __dirname)

moduleAlias.addAliases({
  'react'             :'preact/compat',
  'react-dom'         :'preact/compat',
  'create-react-class':path.resolve(__dirname, './create-preact-class')
})
