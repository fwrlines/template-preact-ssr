import React from 'react'
//import ReactDOMServer from 'react-dom/server'
import { ApolloProvider } from '@apollo/react-hooks'
import { ChunkExtractor  } from '@loadable/server'

import { StaticRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { getClient } from './apiClientSSR'
import { renderToStringWithData  } from '@apollo/react-ssr'

import Terser from 'terser'

import { SCP } from 'ui/service'

//import { TestComponent } from 'test'
import AsyncTestComponent from 'test/AsyncTestComponent'
//import App from 'pages/App'

import template from 'html/index.prod.html'

import stats from '../dist/loadable-stats.json'
/* const statsFile = path.resolve(__dirname, '../dist/loadable-stats.json')
   We create an extractor from the statsFile */

const client = getClient(process.env.GRAPHQL_ENDPOINT_SRV)

const routerContext = {}


export default async(req, res) => {

  const extractor = new ChunkExtractor({ stats })



  const appJsx=
    <StaticRouter
      location={req.url}
      context={routerContext}
    >

      <ApolloProvider
        client={client}
      >
        <SCP>
          <AsyncTestComponent />
        </SCP>
      </ApolloProvider>
    </StaticRouter>

  const html = await renderToStringWithData(
    extractor.collectChunks(appJsx)
  )

  console.log(req.method, ' ', req.baseUrl || req.url)

  // You can now collect your script tags

  const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();
  // console.log('SCRIPT', extractor.getScriptTags())

  // You can also collect your "preload/prefetch" links

  const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
  // console.log('LINK', extractor.getLinkTags())

  // And you can even collect your style tags (if you use "mini-css-extract-plugin")

  const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();
  //   console.log('STYLE', extractor.getStyleTags())

  const helmet = Helmet.renderStatic()


  return res.send(
    template
      .replace('<div id="main"></div>', `<div id="main">${html}</div>`)
      .replace('</body>', scriptTags + `<script>window.__APOLLO_STATE__ = ${JSON.stringify(client.extract())}</script>` + '</body>')
      .replace('<title></title>', helmet.title.toString() + helmet.meta.toString() + linkTags + styleTags)
    /* .replace(/(\r\n|\n|\r)/gm,'')
       .replace(/\s\s+/g, '') */
  )

}


