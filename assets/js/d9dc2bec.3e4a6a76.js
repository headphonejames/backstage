/*! For license information please see d9dc2bec.3e4a6a76.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[951881],{603905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(667294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},f="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),f=u(r),p=a,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||o;return r?n.createElement(m,l(l({ref:e},s),{},{components:r})):n.createElement(m,l({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[f]="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9865:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});r(827378);var n=r(603905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const l={id:"catalog-model.commonvalidatorfunctions",title:"CommonValidatorFunctions",description:"API reference for CommonValidatorFunctions"},i=void 0,c={unversionedId:"reference/catalog-model.commonvalidatorfunctions",id:"reference/catalog-model.commonvalidatorfunctions",title:"CommonValidatorFunctions",description:"API reference for CommonValidatorFunctions",source:"@site/../docs/reference/catalog-model.commonvalidatorfunctions.md",sourceDirName:"reference",slug:"/reference/catalog-model.commonvalidatorfunctions",permalink:"/docs/reference/catalog-model.commonvalidatorfunctions",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-model.commonvalidatorfunctions.md",tags:[],version:"current",frontMatter:{id:"catalog-model.commonvalidatorfunctions",title:"CommonValidatorFunctions",description:"API reference for CommonValidatorFunctions"}},u={},s=[{value:"Methods",id:"methods",level:2}],f={toc:s};function d(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)("wrapper",a({},f,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/catalog-model"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/catalog-model"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/catalog-model.commonvalidatorfunctions"}),(0,n.kt)("inlineCode",{parentName:"a"},"CommonValidatorFunctions"))),(0,n.kt)("p",null,"Contains various helper validation and normalization functions that can be composed to form a Validator."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class CommonValidatorFunctions \n")),(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-model.commonvalidatorfunctions.isjsonsafe"}),"isJsonSafe(value)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Checks that the value can be safely transferred as JSON.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-model.commonvalidatorfunctions.isnonemptystring"}),"isNonEmptyString(value)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Checks that the value is a string value that's not empty.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-model.commonvalidatorfunctions.isvaliddnslabel"}),"isValidDnsLabel(value)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Checks that the value is a valid DNS label.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-model.commonvalidatorfunctions.isvaliddnssubdomain"}),"isValidDnsSubdomain(value)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Checks that the value is a valid DNS subdomain name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-model.commonvalidatorfunctions.isvalidprefixandorsuffix"}),"isValidPrefixAndOrSuffix(value, separator, isValidPrefix, isValidSuffix)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Checks that the value is on the form ",(0,n.kt)("code",null,"<","suffix",">")," or ",(0,n.kt)("code",null,"<","prefix",">","<","separator",">","<","suffix",">"),", and validates those parts separately.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-model.commonvalidatorfunctions.isvalidstring"}),"isValidString(value)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Checks that the value is a non empty string value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-model.commonvalidatorfunctions.isvalidtag"}),"isValidTag(value)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Checks that the value is a valid tag.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-model.commonvalidatorfunctions.isvalidurl"}),"isValidUrl(value)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Checks that the value is a valid string URL.")))))}d.isMDXComponent=!0},862525:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(t,o){for(var l,i,c=a(t),u=1;u<arguments.length;u++){for(var s in l=Object(arguments[u]))r.call(l,s)&&(c[s]=l[s]);if(e){i=e(l);for(var f=0;f<i.length;f++)n.call(l,i[f])&&(c[i[f]]=l[i[f]])}}return c}},541535:(t,e,r)=>{var n=r(862525),a=60103,o=60106;var l=60109,i=60110,c=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;a=f("react.element"),o=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),l=f("react.provider"),i=f("react.context"),c=f("react.forward_ref"),f("react.suspense"),u=f("react.memo"),s=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function v(t,e,r){this.props=t,this.context=e,this.refs=y,this.updater=r||m}function g(){}function h(t,e,r){this.props=t,this.context=e,this.refs=y,this.updater=r||m}v.prototype.isReactComponent={},v.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(p(85));this.updater.enqueueSetState(this,t,e,"setState")},v.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},g.prototype=v.prototype;var k=h.prototype=new g;k.constructor=h,n(k,v.prototype),k.isPureReactComponent=!0;var b={current:null},N=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(t,e,r){var n,o={},l=null,i=null;if(null!=e)for(n in void 0!==e.ref&&(i=e.ref),void 0!==e.key&&(l=""+e.key),e)N.call(e,n)&&!O.hasOwnProperty(n)&&(o[n]=e[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];o.children=u}if(t&&t.defaultProps)for(n in c=t.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:t,key:l,ref:i,props:o,_owner:b.current}}function w(t){return"object"==typeof t&&null!==t&&t.$$typeof===a}var S=/\/+/g;function C(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function P(t,e,r,n,l){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var c=!1;if(null===t)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case o:c=!0}}if(c)return l=l(c=t),t=""===n?"."+C(c,0):n,Array.isArray(l)?(r="",null!=t&&(r=t.replace(S,"$&/")+"/"),P(l,e,r,"",(function(t){return t}))):null!=l&&(w(l)&&(l=function(t,e){return{$$typeof:a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(l,r+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(S,"$&/")+"/")+t)),e.push(l)),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+C(i=t[u],u);c+=P(i,e,r,s,l)}else if(s=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=d&&t[d]||t["@@iterator"])?t:null}(t),"function"==typeof s)for(t=s.call(t),u=0;!(i=t.next()).done;)c+=P(i=i.value,e,r,s=n+C(i,u++),l);else if("object"===i)throw e=""+t,Error(p(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return c}function x(t,e,r){if(null==t)return t;var n=[],a=0;return P(t,n,"","",(function(t){return e.call(r,t,a++)})),n}function _(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var E={current:null};function V(){var t=E.current;if(null===t)throw Error(p(321));return t}},827378:(t,e,r)=>{r(541535)}}]);