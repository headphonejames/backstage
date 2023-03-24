/*! For license information please see e1e59819.c50641ab.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[700713],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||c;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},959790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});r(827378);var n=r(603905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.putindextemplate",title:"ElasticSearchClientWrapper.putIndexTemplate()",description:"API reference for ElasticSearchClientWrapper.putIndexTemplate()"},l=void 0,p={unversionedId:"reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.putindextemplate",id:"reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.putindextemplate",title:"ElasticSearchClientWrapper.putIndexTemplate()",description:"API reference for ElasticSearchClientWrapper.putIndexTemplate()",source:"@site/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.putindextemplate.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.putindextemplate",permalink:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.putindextemplate",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.putindextemplate.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.putindextemplate",title:"ElasticSearchClientWrapper.putIndexTemplate()",description:"API reference for ElasticSearchClientWrapper.putIndexTemplate()"}},s={},u=[{value:"Parameters",id:"parameters",level:2}],f={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",c(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/reference/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/plugin-search-backend-module-elasticsearch"},(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-search-backend-module-elasticsearch"))," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper"},(0,n.kt)("inlineCode",{parentName:"a"},"ElasticSearchClientWrapper"))," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.putindextemplate"},(0,n.kt)("inlineCode",{parentName:"a"},"putIndexTemplate"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'putIndexTemplate(template: ElasticSearchCustomIndexTemplate): import("@opensearch-project/opensearch/lib/Transport").TransportRequestPromise<import("@opensearch-project/opensearch").ApiResponse<Record<string, any>, unknown>> | import("@elastic/elasticsearch/lib/Transport").TransportRequestPromise<import("@elastic/elasticsearch").ApiResponse<Record<string, any>, unknown>>;\n')),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"template"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchcustomindextemplate"},"ElasticSearchCustomIndexTemplate")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,'import("@opensearch-project/opensearch/lib/Transport").TransportRequestPromise',"<",'import("@opensearch-project/opensearch").ApiResponse',"<","Record","<","string, any",">",", unknown",">",">"," ","|",' import("@elastic/elasticsearch/lib/Transport").TransportRequestPromise',"<",'import("@elastic/elasticsearch").ApiResponse',"<","Record","<","string, any",">",", unknown",">",">"))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,c){for(var o,i,l=a(e),p=1;p<arguments.length;p++){for(var s in o=Object(arguments[p]))r.call(o,s)&&(l[s]=o[s]);if(t){i=t(o);for(var u=0;u<i.length;u++)n.call(o,i[u])&&(l[i[u]]=o[i[u]])}}return l}},541535:(e,t,r)=>{var n=r(862525),a=60103,c=60106;var o=60109,i=60110,l=60112;var p=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),c=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),o=u("react.provider"),i=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),s=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var O=g.prototype=new b;O.constructor=g,n(O,y.prototype),O.isPureReactComponent=!0;var k={current:null},v=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,c={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,n)&&!j.hasOwnProperty(n)&&(c[n]=t[n]);var l=arguments.length-2;if(1===l)c.children=r;else if(1<l){for(var p=Array(l),s=0;s<l;s++)p[s]=arguments[s+2];c.children=p}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===c[n]&&(c[n]=l[n]);return{$$typeof:a,type:e,key:o,ref:i,props:c,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var x=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,r,n,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case c:l=!0}}if(l)return o=o(l=e),e=""===n?"."+S(l,0):n,Array.isArray(o)?(r="",null!=e&&(r=e.replace(x,"$&/")+"/"),T(o,t,r,"",(function(e){return e}))):null!=o&&(P(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(x,"$&/")+"/")+e)),t.push(o)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var s=n+S(i=e[p],p);l+=T(i,t,r,s,o)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),p=0;!(i=e.next()).done;)l+=T(i=i.value,t,r,s=n+S(i,p++),o);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function E(e,t,r){if(null==e)return e;var n=[],a=0;return T(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function N(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function C(){var e=_.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);