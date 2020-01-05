module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.e=function(){return Promise.resolve()},n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){process.nextTick((function(){throw e}))},n(n.s=0)}({"./public/loadable-stats.json":
/*!************************************!*\
  !*** ./public/loadable-stats.json ***!
  \************************************/
/*! exports provided: errors, warnings, version, hash, publicPath, outputPath, assetsByChunkName, assets, filteredAssets, entrypoints, namedChunkGroups, logging, children, default */function(e){e.exports=JSON.parse('{"errors":[],"warnings":[],"version":"4.41.5","hash":"88f34ff332c14b3db872","publicPath":"/","outputPath":"/home/adrian_villa/code/fwrlines/template-preact-ssr/public","assetsByChunkName":{"chunk-bar-baz":"0.main.js","main":["1326e.css","main.js"]},"assets":[{"name":"0.main.js","size":2037,"chunks":[0],"chunkNames":["chunk-bar-baz"],"info":{},"emitted":false},{"name":"1326e.css","size":10755,"chunks":[1],"chunkNames":["main"],"info":{"immutable":true},"emitted":false},{"name":"index.html","size":961,"chunks":[],"chunkNames":[],"info":{},"emitted":false},{"name":"main.js","size":237181,"chunks":[1],"chunkNames":["main"],"info":{},"emitted":false}],"filteredAssets":0,"entrypoints":{"main":{"chunks":[1],"assets":["1326e.css","main.js"],"children":{"preload":[{"name":"chunk-bar-baz","chunks":[0],"assets":["0.main.js"]}]},"childAssets":{"preload":["0.main.js"]}}},"namedChunkGroups":{"main":{"chunks":[1],"assets":["1326e.css","main.js"],"children":{"preload":[{"name":"chunk-bar-baz","chunks":[0],"assets":["0.main.js"]}]},"childAssets":{"preload":["0.main.js"]}},"chunk-bar-baz":{"chunks":[0],"assets":["0.main.js"],"children":{},"childAssets":{}}},"logging":{"webpack.buildChunkGraph.visitModules":{"entries":[],"filteredEntries":5,"debug":false}},"children":[{"errors":[],"warnings":[],"publicPath":"/","outputPath":"/home/adrian_villa/code/fwrlines/template-preact-ssr/public","assetsByChunkName":{},"assets":[{"name":"index.html","size":546520,"chunks":[0],"chunkNames":[],"info":{},"emitted":false}],"filteredAssets":0,"entrypoints":{"undefined":{"chunks":[0],"assets":["index.html"],"children":{},"childAssets":{}}},"namedChunkGroups":{"undefined":{"chunks":[0],"assets":["index.html"],"children":{},"childAssets":{}}},"logging":{"webpack.buildChunkGraph.visitModules":{"entries":[],"filteredEntries":2,"debug":false}},"children":[],"name":"html-webpack-plugin for \\"index.html\\""},{"errors":[],"warnings":[],"publicPath":"/","outputPath":"/home/adrian_villa/code/fwrlines/template-preact-ssr/public","assetsByChunkName":{},"assets":[],"filteredAssets":0,"entrypoints":{"mini-css-extract-plugin":{"chunks":[0],"assets":["*"],"children":{},"childAssets":{}}},"namedChunkGroups":{"mini-css-extract-plugin":{"chunks":[0],"assets":["*"],"children":{},"childAssets":{}}},"logging":{"webpack.buildChunkGraph.visitModules":{"entries":[],"filteredEntries":2,"debug":false}},"children":[],"name":"mini-css-extract-plugin node_modules/css-loader/dist/cjs.js!node_modules/postcss-loader/src/index.js!node_modules/sass-loader/dist/cjs.js!node_modules/@fwrlines/alphabet-scss/main.scss"}]}')},"./src/components/AsyncClock.js":
/*!**************************************!*\
  !*** ./src/components/AsyncClock.js ***!
  \**************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ../utils */"./src/utils/index.js");t.default=Object(r.loadable)({resolved:{},chunkName:()=>"chunk-bar-baz",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.resolve().then(n.bind(null,/*! ./Clock.js */"./src/components/Clock.js")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){/*! ./Clock.js */
return"./src/components/Clock.js"}})},"./src/components/Clock.js":
/*!*********************************!*\
  !*** ./src/components/Clock.js ***!
  \*********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! preact */"preact");class s extends r.Component{constructor(...e){var t,n,r;super(...e),t=this,n="state",r={time:Date.now()},n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}componentDidMount(){this.timer=setInterval(()=>{this.setState({time:Date.now()})},1e3)}componentWillUnmount(){clearInterval(this.timer)}render(){let e=new Date(this.state.time).toLocaleTimeString();return Object(r.h)("h1",{class:"x-secondary cx"},e," ","local time")}}t.default=s},"./src/components/QueryTester.js":
/*!***************************************!*\
  !*** ./src/components/QueryTester.js ***!
  \***************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! preact */"preact"),s=n(/*! @apollo/react-hooks */"@apollo/react-hooks"),o=n(/*! react-helmet */"react-helmet"),i=n(/*! graphql-tag */"graphql-tag"),a=n.n(i);t.default=({props:e})=>{const{loading:t,error:n,data:{i:i}={}}=Object(s.useQuery)(a()("query {\n  i {\n    makes {\n      id\n      name\n      car\n      motorcycle\n      slug\n      seotext\n    }\n    services {\n      id\n      name\n      car\n      motorcycle\n      slug\n      seotext\n      icon\n      carbutton\n      motobutton\n      invisible\n    }\n  }\n}\n"));return t?Object(r.h)("p",null,"Loading ..."):Object(r.h)(r.Fragment,null,Object(r.h)(o.Helmet,null,Object(r.h)("title",null,"Preact SSR Example with GraphQl"),Object(r.h)("link",{rel:"canonical",href:"http://mysite.com/example"})),i.services.map((e,t)=>Object(r.h)("p",{key:t},Object(r.h)("strong",null,e.name," "),e.seotext)))}},"./src/config/patchPreactSSR.js":
/*!**************************************!*\
  !*** ./src/config/patchPreactSSR.js ***!
  \**************************************/
/*! no exports provided */function(e,t,n){"use strict";n.r(t),function(e){var t=n(/*! path */"path"),r=n.n(t),s=n(/*! module-alias */"module-alias");n.n(s).a.addAliases({react:"preact/compat","react-dom":"preact","create-react-class":r.a.resolve(e,"./create-preact-class")})}.call(this,"/")},"./src/graphql/getClientSSR.js":
/*!*************************************!*\
  !*** ./src/graphql/getClientSSR.js ***!
  \*************************************/
/*! exports provided: getClient */function(e,t,n){"use strict";n.r(t),n.d(t,"getClient",(function(){return u}));var r=n(/*! apollo-client */"apollo-client"),s=n(/*! apollo-link */"apollo-link"),o=n(/*! apollo-link-http */"apollo-link-http"),i=n(/*! apollo-link-retry */"apollo-link-retry"),a=n(/*! apollo-cache-inmemory */"apollo-cache-inmemory"),c=n(/*! node-fetch */"node-fetch"),l=n.n(c);function u(e){const t=function(e){const t=Object(o.createHttpLink)({uri:e,fetch:l.a}),n=new i.RetryLink({delay:{initial:1e4,max:2e3,jitter:!0},attempts:{max:2,retryIf:(e,t)=>!!e}});return s.ApolloLink.from([n,t])}(e);return new r.ApolloClient({link:t,cache:new a.InMemoryCache,ssrForceFetchDelay:900,ssrMode:!0})}},"./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);n(/*! ./config/patchPreactSSR */"./src/config/patchPreactSSR.js");var r=n(/*! preact */"preact"),s=n(/*! @apollo/react-hooks */"@apollo/react-hooks"),o=n(/*! @loadable/server */"@loadable/server"),i=n(/*! react-router-dom */"react-router-dom"),a=n(/*! react-helmet */"react-helmet"),c=n(/*! ./graphql/getClientSSR */"./src/graphql/getClientSSR.js"),l=n(/*! @apollo/react-ssr */"@apollo/react-ssr"),u=n(/*! ./site/App.js */"./src/site/App.js"),p=n(/*! preact-render-to-string */"preact-render-to-string"),d=n.n(p),h=n(/*! ../public/loadable-stats.json */"./public/loadable-stats.json");const m=Object(c.getClient)(process&&process.env&&process.env.GRAPHQL_ENDPOINT||"https://s.meccamico.com/graphql"),f={};t.default=async(e,t)=>{const n=new o.ChunkExtractor({stats:h}),c=Object(r.h)(s.ApolloProvider,{client:m},Object(r.h)(i.StaticRouter,{location:e.url,context:f},Object(r.h)(u.default,null))),p=await(b=n.collectChunks(c),Object(l.getMarkupFromTree)({tree:b,renderFunction:d.a}));var b;console.log(e.method," ",e.baseUrl||e.url);const g=n.getScriptTags(),j=n.getLinkTags(),k=n.getStyleTags(),v=a.Helmet.renderStatic();return t.send('<!DOCTYPE html>\n<html lang="it">\n  <head>\n    <title></title>\n\t\t<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n\t\t<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n\t\t<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n\t\t<link rel="manifest" href="/manifest.json">\n\t\t<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#060930">\n\t\t<meta name="robots" content="index, follow">\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t<meta name="msapplication-TileColor" content="#060930">\n\t\t<meta name="theme-color" content="#ffffff">\n    <meta name=\'twitter:site\' content="@meccamico" />\n    <meta name=\'twitter:creator\' content="@meccamico" />\n    <meta property=\'og:site_name\' content="Meccamico" />\n  </head>\n  <body>\n\t\t<div id="main"></div>\n  </body>\n</html>\n\n\n'.replace('<div id="main"></div>',`<div id="main">${p}</div>`).replace("</body>",g+`<script>window.__APOLLO_STATE__ = ${JSON.stringify(m.extract())}<\/script>`+"</body>").replace("<title></title>",v.title.toString()+v.meta.toString()+j+k).replace(/(\r\n|\n|\r)/gm,"").replace(/\s\s+/g,""))}},"./src/site/App.js":
/*!*************************!*\
  !*** ./src/site/App.js ***!
  \*************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! preact */"preact"),s=n(/*! ../components/AsyncClock */"./src/components/AsyncClock.js"),o=n(/*! ../components/QueryTester */"./src/components/QueryTester.js");t.default=()=>Object(r.h)(r.Fragment,null,Object(r.h)("h1",null,"Preact test"),Object(r.h)("h2",null,"Includes"),Object(r.h)("ul",null,Object(r.h)("li",null,"SSR"),Object(r.h)("li",null,"Lighthouse 100/100 ootb"),Object(r.h)("li",null,"Apollo")),Object(r.h)(s.default,{thing:"thing",thing2:"thing2"}),Object(r.h)(o.default,null))},"./src/site/Loading.js":
/*!*****************************!*\
  !*** ./src/site/Loading.js ***!
  \*****************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));n(/*! preact/compat */"preact/compat");var r=n(/*! preact */"preact");function s(){return Object(r.h)("h1",null,"A module is loading")}},"./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: loadable, urljoin */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./loadable */"./src/utils/loadable.js");n.d(t,"loadable",(function(){return r.default}));var s=n(/*! ./urljoin */"./src/utils/urljoin.js");n.d(t,"urljoin",(function(){return s.default}))},"./src/utils/loadable.js":
/*!*******************************!*\
  !*** ./src/utils/loadable.js ***!
  \*******************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n(/*! preact */"preact"),s=n(/*! @loadable/component */"@loadable/component"),o=n.n(s),i=n(/*! ../site/Loading */"./src/site/Loading.js");function a(e){return o()(e,{fallback:Object(r.h)(i.default,null)})}},"./src/utils/urljoin.js":
/*!******************************!*\
  !*** ./src/utils/urljoin.js ***!
  \******************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t),t.default=function(...e){let t,n;return n="*"!=e[-1]||e[-1].endsWith("/")?"/":"",t=e[0].startsWith("http")||e[0].startsWith("/")?"":"/",t+e.join("/")+n}},0:
/*!*******************************!*\
  !*** multi ./src/renderer.js ***!
  \*******************************/
/*! no static exports found */function(e,t,n){e.exports=n(/*! /home/adrian_villa/code/fwrlines/template-preact-ssr/src/renderer.js */"./src/renderer.js")},"@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */function(e,t){e.exports=require("@apollo/react-hooks")},"@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */function(e,t){e.exports=require("@apollo/react-ssr")},"@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */function(e,t){e.exports=require("@loadable/component")},"@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */function(e,t){e.exports=require("@loadable/server")},"apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */function(e,t){e.exports=require("apollo-cache-inmemory")},"apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */function(e,t){e.exports=require("apollo-client")},"apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */function(e,t){e.exports=require("apollo-link")},"apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */function(e,t){e.exports=require("apollo-link-http")},"apollo-link-retry":
/*!************************************!*\
  !*** external "apollo-link-retry" ***!
  \************************************/
/*! no static exports found */function(e,t){e.exports=require("apollo-link-retry")},"graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */function(e,t){e.exports=require("graphql-tag")},"module-alias":
/*!*******************************!*\
  !*** external "module-alias" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("module-alias")},"node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=require("node-fetch")},path:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */function(e,t){e.exports=require("path")},preact:
/*!*************************!*\
  !*** external "preact" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("preact")},"preact-render-to-string":
/*!******************************************!*\
  !*** external "preact-render-to-string" ***!
  \******************************************/
/*! no static exports found */function(e,t){e.exports=require("preact-render-to-string")},"preact/compat":
/*!********************************!*\
  !*** external "preact/compat" ***!
  \********************************/
/*! no static exports found */function(e,t){e.exports=require("preact/compat")},"react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("react-helmet")},"react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */function(e,t){e.exports=require("react-router-dom")}});