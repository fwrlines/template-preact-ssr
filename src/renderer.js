import 'config/patchPreactSSR'
import { h } from 'preact'
//import React from 'react'

//import ReactDOMServer from 'react-dom/server' //Not in use if we use apollo own renderer


import { ApolloProvider } from '@apollo/react-hooks'
import { ChunkExtractor  } from '@loadable/server'

import { StaticRouter } from 'react-router-dom'

//import { Helmet } from 'react-helmet'

import { getClient } from './graphql/getClientSSR'
import { getMarkupFromTree  } from '@apollo/react-ssr'

//import Terser from 'terser'

//import { SCP } from 'ui/service'

import App from 'site/App.js'

import template from 'assets/html/index.prod.html'

import render from 'preact-render-to-string' //By default we use apollo's renderer

import stats from '../public/loadable-stats.json'

/* const statsFile = path.resolve(__dirname, '../dist/loadable-stats.json')
   We create an extractor from the statsFile */


function renderToStringWithData(component) {
  return getMarkupFromTree({
    tree          :component,
    renderFunction:render
  })
}

const client = getClient(process.env.GRAPHQL_ENDPOINT)

const routerContext = {}

export default async(req, res) => {

  const extractor = new ChunkExtractor({ stats })

  const appJsx=(
    <ApolloProvider
      client={client}
    >
      <StaticRouter
        location={req.url}
        context={routerContext}
      >
        <App />
      </StaticRouter>
    </ApolloProvider>
  )

  const html = await renderToStringWithData(
    extractor.collectChunks(appJsx)
  )

  /* eslint-disable no-console */
  console.log(req.method, ' ', req.baseUrl || req.url)
  /* eslint-enable no-console */


  // You can now collect your script tags

  const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();
  // console.log('SCRIPT', extractor.getScriptTags())

  // You can also collect your "preload/prefetch" links

  const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
  // console.log('LINK', extractor.getLinkTags())

  // And you can even collect your style tags (if you use "mini-css-extract-plugin")

  const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();
  // console.log('STYLE', extractor.getStyleTags())

  /*
  const helmet = Helmet.renderStatic()
  */


  return res.send(
    template
      .replace('<div id="main"></div>', `<div id="main">${html}</div>`)
      .replace('</body>',
        scriptTags
        + `<script>window.__APOLLO_STATE__ = ${JSON.stringify(client.extract())}</script>`
        + '</body>')
      .replace('<title></title>', linkTags + styleTags)
      //.replace('<title></title>', helmet.title.toString() + helmet.meta.toString() + linkTags + styleTags)
    /* .replace(/(\r\n|\n|\r)/gm,'')
       .replace(/\s\s+/g, '') */
  )

}


