/*! For license information please see 1d1fd888.bbde9316.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[773572],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),f=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=f(r),m=o,h=l["".concat(u,".").concat(m)]||l[m]||p[m]||a;return r?n.createElement(h,c(c({ref:t},s),{},{components:r})):n.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:o,c[1]=i;for(var f=2;f<a;f++)c[f]=r[f];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},716320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>s});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"theme.backstagetheme.getpagetheme",title:"BackstageTheme.getPageTheme",description:"API reference for BackstageTheme.getPageTheme"},i=void 0,u={unversionedId:"reference/theme.backstagetheme.getpagetheme",id:"reference/theme.backstagetheme.getpagetheme",title:"BackstageTheme.getPageTheme",description:"API reference for BackstageTheme.getPageTheme",source:"@site/../docs/reference/theme.backstagetheme.getpagetheme.md",sourceDirName:"reference",slug:"/reference/theme.backstagetheme.getpagetheme",permalink:"/docs/reference/theme.backstagetheme.getpagetheme",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/theme.backstagetheme.getpagetheme.md",tags:[],version:"current",frontMatter:{id:"theme.backstagetheme.getpagetheme",title:"BackstageTheme.getPageTheme",description:"API reference for BackstageTheme.getPageTheme"}},f={},s=[],l={toc:s};function p(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/theme"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/theme"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/theme.backstagetheme"}),(0,n.kt)("inlineCode",{parentName:"a"},"BackstageTheme"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/theme.backstagetheme.getpagetheme"}),(0,n.kt)("inlineCode",{parentName:"a"},"getPageTheme"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"getPageTheme: (selector: PageThemeSelector) => PageTheme;\n")))}p.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var c,i,u=o(e),f=1;f<arguments.length;f++){for(var s in c=Object(arguments[f]))r.call(c,s)&&(u[s]=c[s]);if(t){i=t(c);for(var l=0;l<i.length;l++)n.call(c,i[l])&&(u[i[l]]=c[i[l]])}}return u}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var c=60109,i=60110,u=60112;var f=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),c=l("react.provider"),i=l("react.context"),u=l("react.forward_ref"),l("react.suspense"),f=l("react.memo"),s=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function b(){}function d(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=d.prototype=new b;v.constructor=d,n(v,y.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var f=Array(u),s=0;s<u;s++)f[s]=arguments[s+2];a.children=f}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return c=c(u=e),e=""===n?"."+_(u,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(T,"$&/")+"/"),S(c,t,r,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(T,"$&/")+"/")+e)),t.push(c)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var s=n+_(i=e[f],f);u+=S(i,t,r,s,c)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),f=0;!(i=e.next()).done;)u+=S(i=i.value,t,r,s=n+_(i,f++),c);else if("object"===i)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function E(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function N(){var e=C.current;if(null===e)throw Error(m(321));return e}},827378:(e,t,r)=>{r(541535)}}]);