/*! For license information please see e21c0f05.d6b4eae5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[821287],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},914381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(827378);var r=n(603905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={id:"custom-rules",title:"Defining custom permission rules",description:"How to define custom permission rules for existing resources"},a=void 0,l={unversionedId:"permissions/custom-rules",id:"permissions/custom-rules",title:"Defining custom permission rules",description:"How to define custom permission rules for existing resources",source:"@site/../docs/permissions/custom-rules.md",sourceDirName:"permissions",slug:"/permissions/custom-rules",permalink:"/docs/permissions/custom-rules",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/custom-rules.md",tags:[],version:"current",frontMatter:{id:"custom-rules",title:"Defining custom permission rules",description:"How to define custom permission rules for existing resources"},sidebar:"docs",previous:{title:"Frontend Integration",permalink:"/docs/permissions/frontend-integration"},next:{title:"1. Tutorial setup",permalink:"/docs/permissions/plugin-authors/01-setup"}},u={},c=[{value:"Define a custom rule",id:"define-a-custom-rule",level:2},{value:"Provide the rule during plugin setup",id:"provide-the-rule-during-plugin-setup",level:2},{value:"Use the rule in a policy",id:"use-the-rule-in-a-policy",level:2}],p={toc:c};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For some use cases, you may want to define custom ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/permissions/concepts#resources-and-rules"}),"rules")," in addition to the ones provided by a plugin. In the ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/permissions/writing-a-policy"}),"previous section")," we used the ",(0,r.kt)("inlineCode",{parentName:"p"},"isEntityOwner")," rule to control access for catalog entities. Let's extend this policy with a custom rule that checks what ",(0,r.kt)("a",i({parentName:"p"},{href:"https://backstage.io/docs/features/software-catalog/system-model#system"}),"system")," an entity is part of."),(0,r.kt)("h2",i({},{id:"define-a-custom-rule"}),"Define a custom rule"),(0,r.kt)("p",null,"Plugins should export a rule factory that provides type-safety that ensures compatibility with the plugin's backend. The catalog plugin exports ",(0,r.kt)("inlineCode",{parentName:"p"},"createCatalogPermissionRule")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-catalog-backend/alpha")," for this purpose. Note: the ",(0,r.kt)("inlineCode",{parentName:"p"},"/alpha")," path segment is temporary until this API is marked as stable. For this example, we'll define the rule in ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/permission.ts"),", but you can put it anywhere that's accessible by your ",(0,r.kt)("inlineCode",{parentName:"p"},"backend")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-typescript",metastring:'title="packages/backend/src/plugins/permission.ts"',title:'"packages/backend/src/plugins/permission.ts"'}),"import type { Entity } from '@backstage/catalog-model';\nimport { createCatalogPermissionRule } from '@backstage/plugin-catalog-backend/alpha';\nimport { createConditionFactory } from '@backstage/plugin-permission-node';\nimport { z } from 'zod';\n\nexport const isInSystemRule = createCatalogPermissionRule({\n  name: 'IS_IN_SYSTEM',\n  description: 'Checks if an entity is part of the system provided',\n  resourceType: 'catalog-entity',\n  paramsSchema: z.object({\n    systemRef: z\n      .string()\n      .describe('SystemRef to check the resource is part of'),\n  }),\n  apply: (resource: Entity, { systemRef }) => {\n    if (!resource.relations) {\n      return false;\n    }\n\n    return resource.relations\n      .filter(relation => relation.type === 'partOf')\n      .some(relation => relation.targetRef === systemRef);\n  },\n  toQuery: ({ systemRef }) => ({\n    key: 'relations.partOf',\n    values: [systemRef],\n  }),\n});\n\nconst isInSystem = createConditionFactory(isInSystemRule);\n")),(0,r.kt)("p",null,"For a more detailed explanation on defining rules, refer to the ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/permissions/plugin-authors/03-adding-a-resource-permission-check#adding-support-for-conditional-decisions"}),"documentation for plugin authors"),"."),(0,r.kt)("h2",i({},{id:"provide-the-rule-during-plugin-setup"}),"Provide the rule during plugin setup"),(0,r.kt)("p",null,"Now that we have a custom rule defined, we need provide it to the catalog plugin. This step is important because the catalog plugin will use the rule's ",(0,r.kt)("inlineCode",{parentName:"p"},"toQuery")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"apply")," methods while evaluating conditional authorize results. There's no guarantee that the catalog and permission backends are running on the same server, so we must explicitly link the rule to ensure that it's available at runtime."),(0,r.kt)("p",null,"The api for providing custom rules may differ between plugins, but there should typically be some integration point during the creation of the backend router. For the catalog, this integration point is exposed via ",(0,r.kt)("inlineCode",{parentName:"p"},"CatalogBuilder.addPermissionRules"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-typescript",metastring:'title="packages/backend/src/plugins/catalog.ts"',title:'"packages/backend/src/plugins/catalog.ts"'}),"import { isInSystemRule } from './permission';\n// The CatalogBuilder with the addPermissionRules function is in the alpha path\nimport { CatalogBuilder } from '@backstage/plugin-catalog-backend/alpha';\n\n...\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  builder.addPermissionRules(isInSystemRule);\n  ...\n  return router;\n}\n")),(0,r.kt)("p",null,"The new rule is now ready for use in a permission policy!"),(0,r.kt)("h2",i({},{id:"use-the-rule-in-a-policy"}),"Use the rule in a policy"),(0,r.kt)("p",null,"Let's bring this all together by extending the example policy from the previous section."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-ts",metastring:'title="packages/backend/src/plugins/permission.ts"',title:'"packages/backend/src/plugins/permission.ts"'}),"/* highlight-add-next-line */\nimport { isInSystem } from './catalog';\n\nclass TestPermissionPolicy implements PermissionPolicy {\n  async handle(\n    request: PolicyQuery,\n    user?: BackstageIdentityResponse,\n  ): Promise<PolicyDecision> {\n    if (isResourcePermission(request.permission, 'catalog-entity')) {\n      return createCatalogConditionalDecision(\n        request.permission,\n        /* highlight-remove-start */\n        catalogConditions.isEntityOwner({\n          claims: user?.identity.ownershipEntityRefs ?? [],\n        }),\n        /* highlight-remove-end */\n        /* highlight-add-start */\n        {\n          anyOf: [\n            catalogConditions.isEntityOwner({\n              claims: user?.identity.ownershipEntityRefs ?? []\n            }),\n            isInSystem('interviewing')\n          ]\n        }\n        /* highlight-add-end */\n      );\n    }\n\n    return { result: AuthorizeResult.ALLOW };\n  }\n")),(0,r.kt)("p",null,"The updated policy will allow catalog entity resource permissions if any of the following are true:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User owns the target entity"),(0,r.kt)("li",{parentName:"ul"},"Target entity is part of the ",(0,r.kt)("inlineCode",{parentName:"li"},"'interviewing'")," system")))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,o){for(var s,a,l=i(e),u=1;u<arguments.length;u++){for(var c in s=Object(arguments[u]))n.call(s,c)&&(l[c]=s[c]);if(t){a=t(s);for(var p=0;p<a.length;p++)r.call(s,a[p])&&(l[a[p]]=s[a[p]])}}return l}},541535:(e,t,n)=>{var r=n(862525),i=60103,o=60106;var s=60109,a=60110,l=60112;var u=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;i=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),a=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),c=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}function h(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var k=b.prototype=new h;k.constructor=b,r(k,g.prototype),k.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:i,type:e,key:s,ref:a,props:o,_owner:v.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case o:l=!0}}if(l)return s=s(l=e),e=""===r?"."+S(l,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),x(s,t,n,"",(function(e){return e}))):null!=s&&(P(s)&&(s=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=r+S(a=e[u],u);l+=x(a,t,n,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(a=e.next()).done;)l+=x(a=a.value,t,n,c=r+S(a,u++),s);else if("object"===a)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function N(e,t,n){if(null==e)return e;var r=[],i=0;return x(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function E(){var e=_.current;if(null===e)throw Error(m(321));return e}},827378:(e,t,n)=>{n(541535)}}]);