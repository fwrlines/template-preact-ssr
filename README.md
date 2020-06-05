## Features 

+ 100/100 pagespeed BEFORE cdn caching
+ 60kb client transfer size (gzip)
+ modular scss library
+ modular component library
+ includes apollo gql client lib
+ optimizations : terser minification, postcss reduction, css minification, es6 tree shaking, 
+ uses preact rather than react

## Required context

+ GRAPHQL_ENDPOINT, for instance 'https://api.mysite.com/graphql'

## Install


```
npm i
```

## Caveats

+ Before each push the code needs to be precompiled (not after). This is due to Vercel not being able to read the interior of the api folder built at runtime.
+ If using npm link, SSR or now dev wont work. This is due to the runtime of the packages not being able to find the aliases. A dirty fix would be to install preact inside the linked folders
