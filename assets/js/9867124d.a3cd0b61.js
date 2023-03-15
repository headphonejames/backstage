/*! For license information please see 9867124d.a3cd0b61.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[893749],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,g=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},191440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});n(827378);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"getting-started",title:"Getting Started with Search",description:"How to set up and install Backstage Search"},c=void 0,i={unversionedId:"features/search/getting-started",id:"features/search/getting-started",title:"Getting Started with Search",description:"How to set up and install Backstage Search",source:"@site/../docs/features/search/getting-started.md",sourceDirName:"features/search",slug:"/features/search/getting-started",permalink:"/docs/features/search/getting-started",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/search/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started with Search",description:"How to set up and install Backstage Search"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/features/search/"},next:{title:"Search Concepts",permalink:"/docs/features/search/concepts"}},l={},u=[{value:"Adding Search to the Frontend",id:"adding-search-to-the-frontend",level:2},{value:"Using the Search Modal",id:"using-the-search-modal",level:3},{value:"Adding Search to the Backend",id:"adding-search-to-the-backend",level:2},{value:"Customizing Search",id:"customizing-search",level:2},{value:"Frontend",id:"frontend",level:3},{value:"Backend",id:"backend",level:3}],p={toc:u};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Search functions as a plugin to Backstage, so you will need to use Backstage to\nuse Search."),(0,r.kt)("p",null,"If you haven't setup Backstage already, start\n",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/getting-started/"}),"here"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you used ",(0,r.kt)("inlineCode",{parentName:"p"},"npx @backstage/create-app"),", and you have a search page defined in\n",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/components/search"),", skip to\n",(0,r.kt)("a",a({parentName:"p"},{href:"#customizing-search"}),(0,r.kt)("inlineCode",{parentName:"a"},"Customizing Search"))," below.")),(0,r.kt)("h2",a({},{id:"adding-search-to-the-frontend"}),"Adding Search to the Frontend"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# From your Backstage root directory\nyarn add --cwd packages/app @backstage/plugin-search @backstage/plugin-search-react\n")),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/components/search/SearchPage.tsx")," file in your\nBackstage app with the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { Content, Header, Page } from '@backstage/core-components';\nimport { Grid, List, Card, CardContent } from '@material-ui/core';\nimport {\n  SearchBar,\n  SearchResult,\n  DefaultResultListItem,\n  SearchFilter,\n} from '@backstage/plugin-search-react';\nimport { CatalogSearchResultListItem } from '@backstage/plugin-catalog';\n\nexport const searchPage = (\n  <Page themeId=\"home\">\n    <Header title=\"Search\" />\n    <Content>\n      <Grid container direction=\"row\">\n        <Grid item xs={12}>\n          <SearchBar />\n        </Grid>\n        <Grid item xs={3}>\n          <Card>\n            <CardContent>\n              <SearchFilter.Select\n                name=\"kind\"\n                values={['Component', 'Template']}\n              />\n            </CardContent>\n            <CardContent>\n              <SearchFilter.Checkbox\n                name=\"lifecycle\"\n                values={['experimental', 'production']}\n              />\n            </CardContent>\n          </Card>\n        </Grid>\n        <Grid item xs={9}>\n          <SearchResult>\n            {({ results }) => (\n              <List>\n                {results.map(result => {\n                  switch (result.type) {\n                    case 'software-catalog':\n                      return (\n                        <CatalogSearchResultListItem\n                          key={result.document.location}\n                          result={result.document}\n                          highlight={result.highlight}\n                        />\n                      );\n                    default:\n                      return (\n                        <DefaultResultListItem\n                          key={result.document.location}\n                          result={result.document}\n                          highlight={result.highlight}\n                        />\n                      );\n                  }\n                })}\n              </List>\n            )}\n          </SearchResult>\n        </Grid>\n      </Grid>\n    </Content>\n  </Page>\n);\n")),(0,r.kt)("p",null,"Bind the above Search Page to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/search")," route in your\n",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/App.tsx")," file, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"import { SearchPage } from '@backstage/plugin-search';\nimport { searchPage } from './components/search/SearchPage';\n\nconst routes = (\n  <FlatRoutes>\n    <Route path=\"/search\" element={<SearchPage />}>\n      {searchPage}\n    </Route>\n  </FlatRoutes>\n);\n")),(0,r.kt)("h3",a({},{id:"using-the-search-modal"}),"Using the Search Modal"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Root.tsx"),", add the ",(0,r.kt)("inlineCode",{parentName:"p"},"SidebarSearchModal")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"import { SidebarSearchModal } from '@backstage/plugin-search';\n\nexport const Root = ({ children }: PropsWithChildren<{}>) => (\n  <SidebarPage>\n    <Sidebar>\n      <SidebarLogo />\n      <SidebarSearchModal />\n      <SidebarDivider />\n...\n")),(0,r.kt)("p",null,"For more information about using ",(0,r.kt)("inlineCode",{parentName:"p"},"Root.tsx"),", please see\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/packages/create-app/CHANGELOG.md#0315"}),"the changelog"),"."),(0,r.kt)("h2",a({},{id:"adding-search-to-the-backend"}),"Adding Search to the Backend"),(0,r.kt)("p",null,"Add the following plugins into your backend app:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# From your Backstage root directory\nyarn add --cwd packages/backend @backstage/plugin-search-backend @backstage/plugin-search-backend-node\n")),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/search.ts")," file containing the following\ncode:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"import { useHotCleanup } from '@backstage/backend-common';\nimport { createRouter } from '@backstage/plugin-search-backend';\nimport {\n  IndexBuilder,\n  LunrSearchEngine,\n} from '@backstage/plugin-search-backend-node';\nimport { PluginEnvironment } from '../types';\nimport { DefaultCatalogCollator } from '@backstage/plugin-catalog-backend';\nimport { Router } from 'express';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const searchEngine = new LunrSearchEngine({\n    logger: env.logger,\n  });\n  const indexBuilder = new IndexBuilder({\n    logger: env.logger,\n    searchEngine,\n  });\n\n  const every10MinutesSchedule = env.scheduler.createScheduledTaskRunner({\n    frequency: { minutes: 10 },\n    timeout: { minutes: 15 },\n    initialDelay: { seconds: 3 },\n  });\n\n  indexBuilder.addCollator({\n    schedule: every10MinutesSchedule,\n    factory: DefaultCatalogCollatorFactory.fromConfig(env.config, {\n      discovery: env.discovery,\n      tokenManager: env.tokenManager,\n    }),\n  });\n\n  const { scheduler } = await indexBuilder.build();\n\n  scheduler.start();\n  useHotCleanup(module, () => scheduler.stop());\n\n  return await createRouter({\n    engine: indexBuilder.getSearchEngine(),\n    logger: env.logger,\n  });\n}\n")),(0,r.kt)("p",null,"Make the following modifications to your ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/backend/src/index.ts")," file:"),(0,r.kt)("p",null,"Import the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/search")," file you created above:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"import search from './plugins/search';\n")),(0,r.kt)("p",null,"Set up an environment for search:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"const searchEnv = useHotMemoize(module, () => createEnv('search'));\n")),(0,r.kt)("p",null,"Register the search service with the router:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"apiRouter.use('/search', await search(searchEnv));\n")),(0,r.kt)("h2",a({},{id:"customizing-search"}),"Customizing Search"),(0,r.kt)("h3",a({},{id:"frontend"}),"Frontend"),(0,r.kt)("p",null,"The Search Plugin web library (",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-search-react"),") exposes several default filter types as static properties,\nincluding ",(0,r.kt)("inlineCode",{parentName:"p"},"<SearchFilter.Select />")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<SearchFilter.Checkbox />"),". These allow\nyou to provide values relevant to your Backstage instance that, when selected,\nget passed to the backend."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx",metastring:"{2-5,8-11}","{2-5,8-11}":!0}),"<CardContent>\n  <SearchFilter.Select\n    name=\"kind\"\n    values={['Component', 'Template']}\n  />\n</CardContent>\n<CardContent>\n  <SearchFilter.Checkbox\n    name=\"lifecycle\"\n    values={['production', 'experimental']}\n  />\n</CardContent>\n")),(0,r.kt)("p",null,"If you have advanced filter needs, you can specify your own filter component\nlike this (although new core filter contributions are welcome):"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"import { useSearch, SearchFilter } from '@backstage/plugin-search-react';\n\nconst MyCustomFilter = () => {\n  // Note: filters contain filter data from other filter components. Be sure\n  // not to clobber other filters' data!\n  const { filters, setFilters } = useSearch();\n\n  return (/* ... */);\n};\n\n// Which could be rendered like this:\n<SearchFilter component={MyCustomFilter} />\n")),(0,r.kt)("p",null,"It's good practice for search results to highlight information that was used to\nreturn it in the first place! The code below highlights how you might specify a\ncustom result item component, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<CatalogSearchResultListItem />")," component as\nan example:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx",metastring:"{7-13}","{7-13}":!0}),"<SearchResult>\n  {({ results }) => (\n    <List>\n      {results.map(result => {\n        // result.type is the index type defined by the collator.\n        switch (result.type) {\n          case 'software-catalog':\n            return (\n              <CatalogSearchResultListItem\n                key={result.document.location}\n                result={result.document}\n                highlight={result.highlight}\n              />\n            );\n          // ...\n        }\n      })}\n    </List>\n  )}\n</SearchResult>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more advanced customization of the Search frontend, also see how to guides such as ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/features/search/how-to-guides#how-to-implement-your-own-search-api"}),"How to implement your own Search API")," and ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/features/search/how-to-guides#how-to-customize-search-results-highlighting-styling"}),"How to customize search results highlighting styling"))),(0,r.kt)("h3",a({},{id:"backend"}),"Backend"),(0,r.kt)("p",null,"Backstage Search isn't a search engine itself, rather, it provides an interface\nbetween your Backstage instance and a\n",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/features/search/concepts#search-engines"}),"Search Engine")," of your choice. Currently, we only\nsupport two engines, an in-memory search Engine called Lunr and Elasticsearch.\nSee ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/features/search/search-engines"}),"Search Engines")," documentation for more information how\nto configure these in your Backstage instance."),(0,r.kt)("p",null,"Backstage Search can be used to power search of anything! Plugins like the\nCatalog offer default ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/features/search/concepts#collators"}),"collators")," (e.g.\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/df12cc25aa4934a98bc42ed03c07f64a1a0a9d72/plugins/catalog-backend/src/search/DefaultCatalogCollator.ts"}),"DefaultCatalogCollator"),")\nwhich are responsible for providing documents\n",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/features/search/concepts#documents-and-indices"}),"to be indexed"),". You can register any\nnumber of collators with the ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexBuilder")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"const indexBuilder = new IndexBuilder({ logger: env.logger, searchEngine });\n\nconst every10MinutesSchedule = env.scheduler.createScheduledTaskRunner({\n  frequency: { minutes: 10 },\n  timeout: { minutes: 15 },\n  initialDelay: { seconds: 3 },\n});\n\nconst everyHourSchedule = env.scheduler.createScheduledTaskRunner({\n  frequency: { hours: 1 },\n  timeout: { minutes: 90 },\n  initialDelay: { seconds: 3 },\n});\n\nindexBuilder.addCollator({\n  schedule: every10MinutesSchedule,\n  factory: DefaultCatalogCollatorFactory.fromConfig(env.config, {\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n  }),\n});\n\nindexBuilder.addCollator({\n  schedule: everyHourSchedule,\n  factory: new MyCustomCollatorFactory(),\n});\n")),(0,r.kt)("p",null,"Backstage Search builds and maintains its index\n",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/features/search/concepts#the-scheduler"}),"on a schedule"),". You can change how often the\nindexes are rebuilt for a given type of document. You may want to do this if\nyour documents are updated more or less frequently. You can do so by configuring\na scheduled ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskRunner")," to pass into the ",(0,r.kt)("inlineCode",{parentName:"p"},"schedule")," value, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript",metastring:"{3}","{3}":!0}),"const every10MinutesSchedule = env.scheduler.createScheduledTaskRunner({\n  frequency: { minutes: 10 },\n  timeout: { minutes: 15 },\n  initialDelay: { seconds: 3 },\n});\n\nindexBuilder.addCollator({\n  schedule: every10MinutesSchedule,\n  factory: DefaultCatalogCollatorFactory.fromConfig(env.config, {\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n  }),\n});\n")),(0,r.kt)("p",null,"Note: if you are using the in-memory Lunr search engine, you probably want to\nimplement a non-distributed ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskRunner")," like the following to ensure consistency\nif you're running multiple search backend nodes (alternatively, you can configure\nthe search plugin to use a non-distributed database such as\n",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/tutorials/configuring-plugin-databases#postgresql-and-sqlite-3"}),"SQLite"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"import { TaskInvocationDefinition, TaskRunner } from '@backstage/backend-tasks';\n\nconst schedule: TaskRunner = {\n  run: async (task: TaskInvocationDefinition) => {\n    const startRefresh = async () => {\n      while (!task.signal?.aborted) {\n        try {\n          await task.fn(task.signal);\n        } catch {\n          // ignore intentionally\n        }\n\n        await new Promise(resolve => setTimeout(resolve, 600 * 1000));\n      }\n    };\n    startRefresh();\n  },\n};\n\nindexBuilder.addCollator({\n  schedule,\n  factory: DefaultCatalogCollatorFactory.fromConfig(env.config, {\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n  }),\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more advanced customization of the Search backend, also see how to guides such as ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/features/search/how-to-guides#how-to-index-techdocs-documents"}),"How to index TechDocs documents")," and ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/features/search/how-to-guides#how-to-limit-what-can-be-searched-in-the-software-catalog"}),"How to limit what can be searched in the Software Catalog"))))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var s,c,i=a(e),l=1;l<arguments.length;l++){for(var u in s=Object(arguments[l]))n.call(s,u)&&(i[u]=s[u]);if(t){c=t(s);for(var p=0;p<c.length;p++)r.call(s,c[p])&&(i[c[p]]=s[c[p]])}}return i}},541535:(e,t,n)=>{var r=n(862525),a=60103,o=60106;var s=60109,c=60110,i=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),c=p("react.context"),i=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function m(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||g}function k(){}function y(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||g}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=m.prototype;var b=y.prototype=new k;b.constructor=y,r(b,m.prototype),b.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,o={},s=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:a,type:e,key:s,ref:c,props:o,_owner:v.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var x=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,n,r,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case o:i=!0}}if(i)return s=s(i=e),e=""===r?"."+O(i,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),j(s,t,n,"",(function(e){return e}))):null!=s&&(N(s)&&(s=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(x,"$&/")+"/")+e)),t.push(s)),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+O(c=e[l],l);i+=j(c,t,n,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)i+=j(c=c.value,t,n,u=r+O(c,l++),s);else if("object"===c)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function P(e,t,n){if(null==e)return e;var r=[],a=0;return j(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var B={current:null};function E(){var e=B.current;if(null===e)throw Error(h(321));return e}},827378:(e,t,n)=>{n(541535)}}]);