/*! For license information please see 14b7b083.f847c9bc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[912547],{603905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,d=u["".concat(l,".").concat(g)]||u[g]||h[g]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},280269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>u});a(827378);var n=a(603905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"v1.11.0",title:"v1.11.0",description:"Backstage Release v1.11.0"},l=void 0,p={unversionedId:"releases/v1.11.0",id:"releases/v1.11.0",title:"v1.11.0",description:"Backstage Release v1.11.0",source:"@site/../docs/releases/v1.11.0.md",sourceDirName:"releases",slug:"/releases/v1.11.0",permalink:"/docs/releases/v1.11.0",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.11.0.md",tags:[],version:"current",frontMatter:{id:"v1.11.0",title:"v1.11.0",description:"Backstage Release v1.11.0"},sidebar:"releases",previous:{title:"v1.12.0",permalink:"/docs/releases/v1.12.0"},next:{title:"v1.10.0",permalink:"/docs/releases/v1.10.0"}},c={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Scaffolder Alpha",id:"scaffolder-alpha",level:3},{value:"Backend System Alpha",id:"backend-system-alpha",level:3},{value:"New package: <code>@backstage/eslint-plugin</code>",id:"new-package-backstageeslint-plugin",level:3},{value:"New plugin: Entity Feedback",id:"new-plugin-entity-feedback",level:3},{value:"New plugin: Entity Validator",id:"new-plugin-entity-validator",level:3},{value:"New Plugin: Microsoft Calendar",id:"new-plugin-microsoft-calendar",level:3},{value:"New plugin: GraphQL Voyager",id:"new-plugin-graphql-voyager",level:3},{value:"New plugin: Linguist",id:"new-plugin-linguist",level:3},{value:"Lighthouse Backend",id:"lighthouse-backend",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}],h={toc:u};function g(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"These are the release notes for the v1.11.0 release of ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/"},"Backstage"),"."),(0,n.kt)("p",null,"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."),(0,n.kt)("h2",{id:"highlights"},"Highlights"),(0,n.kt)("h3",{id:"scaffolder-alpha"},"Scaffolder Alpha"),(0,n.kt)("p",null,"With this release, we\u2019ve been working on getting things ready for testing for the upcoming Scaffolder v2.0.0 release, and there\u2019s now the ability to test the upcoming version in the form of an alpha! It would be great if you have the time to test out the new release to see if all your templates work as expected. There\u2019s some documentation on how to test out the new version and what\u2019s new under ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-templates/testing-scaffolder-alpha"},"testing scaffolder alpha"),"."),(0,n.kt)("p",null,"We\u2019d love to hear if you have any issues when testing the new version, please reach out on Discord or ",(0,n.kt)("a",{parentName:"p",href:"http://github.com/backstage/backstage/issues/new"},"create a new issue")," if there\u2019s anything you find!"),(0,n.kt)("h3",{id:"backend-system-alpha"},"Backend System Alpha"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/backend-system/"},"new Backend System")," is now in alpha. We encourage plugin owners to try out the new system by adding support for it in their plugin backends, but we do not yet recommend migrating over to using this new system for production backend deployments."),(0,n.kt)("p",null,"This new system aims to greatly simplify the setup and wiring of Backstage backends. It formalizes and simplifies how common services and plugins are installed and interact with each other, and restructures both plugins and backends to make them much easier to maintain."),(0,n.kt)("p",null,"The documentation starts ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/backend-system/"},"here"),". Migration guides exist to help you get your ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/backend-system/building-backends/migrating"},"backend")," and ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/backend-system/building-plugins-and-modules/migrating"},"plugins")," migrated, but you don\u2019t have to do it all in one go - the path forward can be incremental."),(0,n.kt)("p",null,"If you were already using the new backend system before this release, you may also be interested in the following."),(0,n.kt)("p",null,"There have been a number of tweaks to types and exports, following a thorough API review before its alpha release. Notably,"),(0,n.kt)("p",null,"Service factories are now exported with the pattern ",(0,n.kt)("inlineCode",{parentName:"p"},"<id>ServiceFactory")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"<id>Factory"),", e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"configServiceFactory"),"\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"createBackendPlugin")," parameter that used to be named ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," is now ",(0,n.kt)("inlineCode",{parentName:"p"},"pluginId"),"\nThe interface of the ",(0,n.kt)("inlineCode",{parentName:"p"},"CacheService")," has changed slightly, so you may want to use the new ",(0,n.kt)("inlineCode",{parentName:"p"},"cacheToPluginCacheManager")," to get compatibility with your not-yet-converted backend plugins\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"scaffolderCatalogModule")," that was exported from the Scaffolder backend is renamed to ",(0,n.kt)("inlineCode",{parentName:"p"},"catalogModuleTemplateKind"),", to fit the proper naming patterns"),(0,n.kt)("p",null,"There are a few smaller tweaks as well, that you can read about in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/packages/backend-app-api/CHANGELOG.md"},(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/backend-app-api"))," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/packages/backend-plugin-api/CHANGELOG.md"},(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/backend-plugin-api"))," changelogs."),(0,n.kt)("h3",{id:"new-package-backstageeslint-plugin"},"New package: ",(0,n.kt)("inlineCode",{parentName:"h3"},"@backstage/eslint-plugin")),(0,n.kt)("p",null,"We created a separate ESlint plugin package that houses some rules that are helpful for Backstage monorepos. Not only does it make a convenient bundle of them all, it also comes with a pretty healthy speed boost. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/16174"},"The pull request")," contains some more details."),(0,n.kt)("h3",{id:"new-plugin-entity-feedback"},"New plugin: Entity Feedback"),(0,n.kt)("p",null,"A plugin that allows users to rate the quality of entities in your Backstage catalog. Allowing your users to rate entities brings them into the feedback loop that can help notify owners if something is wrong with their entity (i.e. taking inspiration from the feedback model of TechDocs). Check out ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/entity-feedback"},"the README"),"!"),(0,n.kt)("p",null,"Contributed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kuangp"},"@kuangp")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/15881"},"#15881")),(0,n.kt)("h3",{id:"new-plugin-entity-validator"},"New plugin: Entity Validator"),(0,n.kt)("p",null,"This plugin helps users create and edit their YAML definitions of entities, with live validation. It leverages the actual catalog backend for checks, so that you can submit catalog info file changes that fit your particular organization with greater confidence. Installation instructions and details are in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/entity-validation"},"the README"),"."),(0,n.kt)("p",null,"Contributed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ivangonzalezacuna"},"@ivangonzalezacuna")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/16050"},"#16050")),(0,n.kt)("h3",{id:"new-plugin-microsoft-calendar"},"New Plugin: Microsoft Calendar"),(0,n.kt)("p",null,"This plugin lets you show your MS calendars directly in Backstage. More information and installation instructions in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/microsoft-calendar"},"the README"),"!"),(0,n.kt)("p",null,"Contributed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Abhay-soni-developer"},"@Abhay-soni-developer")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/16101"},"#16101")),(0,n.kt)("h3",{id:"new-plugin-graphql-voyager"},"New plugin: GraphQL Voyager"),(0,n.kt)("p",null,"This nifty plugin presents a graph structure of your entire GraphQL API. Check out ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/graphql-voyager"},"its README")," for a screenshot and instructions on installing it."),(0,n.kt)("p",null,"Contributed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MitchWijt"},"@MitchWijt")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/16015"},"#16015")),(0,n.kt)("h3",{id:"new-plugin-linguist"},"New plugin: Linguist"),(0,n.kt)("p",null,"This plugin lets you see a nice visual representation of the breakdown of languages that a component\u2019s repository is using, similar to the repository information that e.g. GitHub presents. More about that ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/linguist"},"in the README"),"!"),(0,n.kt)("p",null,"Contributed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ahhhndre"},"@ahhhndre")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/14718"},"#14718")),(0,n.kt)("h3",{id:"lighthouse-backend"},"Lighthouse Backend"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/lighthouse"},"Lighthouse plugin")," now has a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/lighthouse-backend"},"corresponding backend"),". This allows you to conveniently schedule audits from within Backstage."),(0,n.kt)("p",null,"Note that as part of this, a ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-lighthouse-common")," package was also created, and types that were common to the frontend and backend were moved there. This means that if you were explicitly importing types from the frontend package, you may see compilation errors and need to add a dependency on the new common package and point your imports there instead."),(0,n.kt)("p",null,"Contributed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dpfaffenbauer"},"@dpfaffenbauer")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/15846"},"#15846")),(0,n.kt)("h2",{id:"security-fixes"},"Security Fixes"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/core-components"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/catalog-model"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-catalog-backend"),", have all had precautionary validation added, please upgrade to the latest versions of these packages. Special thanks to Philip Olausson (",(0,n.kt)("a",{parentName:"p",href:"https://www.programmatic.se/"},"Programmatic"),") who found these issues as part of ",(0,n.kt)("a",{parentName:"p",href:"https://roadie.io/"},"Roadie's")," regular third-party pen testing."),(0,n.kt)("h2",{id:"upgrade-path"},"Upgrade path"),(0,n.kt)("p",null,"We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/getting-started/keeping-backstage-updated"},"keeping Backstage updated"),"."),(0,n.kt)("h2",{id:"links-and-references"},"Links and References"),(0,n.kt)("p",null,"Below you can find a list of links and references to help you learn about and start using this new release."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/"},"Backstage official website"),", ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/"},"documentation"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/getting-started/"},"getting started guide"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage"},"GitHub repository"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Backstage's ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/overview/versioning-policy"},"versioning and support policy"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/backstage-687207715902193673"},"Community Discord")," for discussions and support")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.11.0-changelog.md"},"Changelog"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Backstage ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/demos"},"Demos"),", ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/blog"},"Blog"),", ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/overview/roadmap"},"Roadmap")," and ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/plugins"},"Plugins")))),(0,n.kt)("p",null,"Sign up for our ",(0,n.kt)("a",{parentName:"p",href:"https://mailchi.mp/spotify/backstage-community"},"newsletter")," if you want to be informed about what is happening in the world of Backstage."))}g.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(e,o){for(var i,s,l=r(e),p=1;p<arguments.length;p++){for(var c in i=Object(arguments[p]))a.call(i,c)&&(l[c]=i[c]);if(t){s=t(i);for(var u=0;u<s.length;u++)n.call(i,s[u])&&(l[s[u]]=i[s[u]])}}return l}},541535:(e,t,a)=>{var n=a(862525),r=60103,o=60106;var i=60109,s=60110,l=60112;var p=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;r=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),s=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),c=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function k(e,t,a){this.props=e,this.context=t,this.refs=f,this.updater=a||d}function m(){}function b(e,t,a){this.props=e,this.context=t,this.refs=f,this.updater=a||d}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=k.prototype;var y=b.prototype=new m;y.constructor=b,n(y,k.prototype),y.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,a){var n,o={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=a;else if(1<l){for(var p=Array(l),c=0;c<l;c++)p[c]=arguments[c+2];o.children=p}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:r,type:e,key:i,ref:s,props:o,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,a,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case o:l=!0}}if(l)return i=i(l=e),e=""===n?"."+P(l,0):n,Array.isArray(i)?(a="",null!=e&&(a=e.replace(C,"$&/")+"/"),S(i,t,a,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var c=n+P(s=e[p],p);l+=S(s,t,a,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),p=0;!(s=e.next()).done;)l+=S(s=s.value,t,a,c=n+P(s,p++),i);else if("object"===s)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function E(e,t,a){if(null==e)return e;var n=[],r=0;return S(e,n,"","",(function(e){return t.call(a,e,r++)})),n}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function A(){var e=x.current;if(null===e)throw Error(g(321));return e}},827378:(e,t,a)=>{a(541535)}}]);