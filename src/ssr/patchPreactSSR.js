let path = require('path')
let moduleAlias = require('module-alias')

moduleAlias.addAliases({
  'react'             :path.resolve(__dirname, '../../node_modules/preact/compat'),
  'react-dom'         :path.resolve(__dirname, '../../node_modules/preact/compat'),
  'create-react-class':path.resolve(__dirname, './create-preact-class')
})
