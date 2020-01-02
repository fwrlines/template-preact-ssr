import { h, render } from 'preact'

import { ApolloProvider } from '@apollo/react-hooks'
import { getClient } from 'graphql/getClient'


import App from 'site/App'
//import Clock from 'components/Clock'


import '@fwrlines/alphabet-scss/main.scss'

const client = getClient(process.env.GRAPHQL_ENDPOINT)

const rootElement = document.getElementById('main')

const jsx = (
  <ApolloProvider
    client={client}
  >
	  <App />
  </ApolloProvider>
)

render(jsx, rootElement)
