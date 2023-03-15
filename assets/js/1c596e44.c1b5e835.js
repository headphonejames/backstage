/*! For license information please see 1c596e44.c1b5e835.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[246287],{603905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>d});var o=t(667294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),u=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},f=function(e){var r=u(e.components);return o.createElement(i.Provider,{value:r},e.children)},s="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},y=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=u(t),y=n,d=s["".concat(i,".").concat(y)]||s[y]||l[y]||a;return t?o.createElement(d,p(p({ref:r},f),{},{components:t})):o.createElement(d,p({ref:r},f))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=y;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[s]="string"==typeof e?e:n,p[1]=c;for(var u=2;u<a;u++)p[u]=t[u];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},633177:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>p,metadata:()=>i,toc:()=>f});t(827378);var o=t(603905);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},n.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const p={id:"core-app-api.booterrorpageprops",title:"BootErrorPageProps",description:"API reference for BootErrorPageProps"},c=void 0,i={unversionedId:"reference/core-app-api.booterrorpageprops",id:"reference/core-app-api.booterrorpageprops",title:"BootErrorPageProps",description:"API reference for BootErrorPageProps",source:"@site/../docs/reference/core-app-api.booterrorpageprops.md",sourceDirName:"reference",slug:"/reference/core-app-api.booterrorpageprops",permalink:"/docs/reference/core-app-api.booterrorpageprops",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.booterrorpageprops.md",tags:[],version:"current",frontMatter:{id:"core-app-api.booterrorpageprops",title:"BootErrorPageProps",description:"API reference for BootErrorPageProps"}},u={},f=[],s={toc:f};function l(e){var{components:r}=e,t=a(e,["components"]);return(0,o.kt)("wrapper",n({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",n({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-app-api"}),(0,o.kt)("inlineCode",{parentName:"a"},"@backstage/core-app-api"))," ",">"," ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-app-api.booterrorpageprops"}),(0,o.kt)("inlineCode",{parentName:"a"},"BootErrorPageProps"))),(0,o.kt)("p",null,"Props for the ",(0,o.kt)("inlineCode",{parentName:"p"},"BootErrorPage")," component of ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-app-api.appcomponents"}),"AppComponents"),"."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"type BootErrorPageProps = {\n    step: 'load-config' | 'load-chunk';\n    error: Error;\n};\n")))}l.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(n){return!1}}()?Object.assign:function(e,a){for(var p,c,i=n(e),u=1;u<arguments.length;u++){for(var f in p=Object(arguments[u]))t.call(p,f)&&(i[f]=p[f]);if(r){c=r(p);for(var s=0;s<c.length;s++)o.call(p,c[s])&&(i[c[s]]=p[c[s]])}}return i}},541535:(e,r,t)=>{var o=t(862525),n=60103,a=60106;var p=60109,c=60110,i=60112;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;n=s("react.element"),a=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),p=s("react.provider"),c=s("react.context"),i=s("react.forward_ref"),s("react.suspense"),u=s("react.memo"),f=s("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function m(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||d}function g(){}function v(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var h=v.prototype=new g;h.constructor=v,o(h,m.prototype),h.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var o,a={},p=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(p=""+r.key),r)j.call(r,o)&&!P.hasOwnProperty(o)&&(a[o]=r[o]);var i=arguments.length-2;if(1===i)a.children=t;else if(1<i){for(var u=Array(i),f=0;f<i;f++)u[f]=arguments[f+2];a.children=u}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:n,type:e,key:p,ref:c,props:a,_owner:O.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,o,p){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case a:i=!0}}if(i)return p=p(i=e),e=""===o?"."+_(i,0):o,Array.isArray(p)?(t="",null!=e&&(t=e.replace(E,"$&/")+"/"),S(p,r,t,"",(function(e){return e}))):null!=p&&(w(p)&&(p=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(p,t+(!p.key||i&&i.key===p.key?"":(""+p.key).replace(E,"$&/")+"/")+e)),r.push(p)),1;if(i=0,o=""===o?".":o+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=o+_(c=e[u],u);i+=S(c,r,t,f,p)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(c=e.next()).done;)i+=S(c=c.value,r,t,f=o+_(c,u++),p);else if("object"===c)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function x(e,r,t){if(null==e)return e;var o=[],n=0;return S(e,o,"","",(function(e){return r.call(t,e,n++)})),o}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var N={current:null};function $(){var e=N.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);