"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4472],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(r),y=o,m=p["".concat(u,".").concat(y)]||p[y]||d[y]||i;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=y;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6779:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),s=["components"],a={id:"security",title:"Security"},u=void 0,l={unversionedId:"community/security",id:"version-7.0.x/community/security",title:"Security",description:"OAuth2 Proxy is a community project.",source:"@site/versioned_docs/version-7.0.x/community/security.md",sourceDirName:"community",slug:"/community/security",permalink:"/oauth2-proxy/docs/7.0.x/community/security",draft:!1,editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-7.0.x/community/security.md",tags:[],version:"7.0.x",frontMatter:{id:"security",title:"Security"},sidebar:"version-7.0.x/docs",previous:{title:"Request Signatures",permalink:"/oauth2-proxy/docs/7.0.x/features/request_signatures"}},c={},p=[{value:"Security Disclosures",id:"security-disclosures",level:2},{value:"How will we respond to disclosures?",id:"how-will-we-respond-to-disclosures",level:3}],d={toc:p},y="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)(y,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"OAuth2 Proxy is a community project.\nMaintainers do not work on this project full time, and as such,\nwhile we endeavour to respond to disclosures as quickly as possible,\nthis may take longer than in projects with corporate sponsorship.")),(0,i.kt)("h2",{id:"security-disclosures"},"Security Disclosures"),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"If you believe you have found a vulnerability within OAuth2 Proxy or any of its\ndependencies, please do NOT open an issue or PR on GitHub, please do NOT post\nany details publicly.")),(0,i.kt)("p",null,"Security disclosures MUST be done in private.\nIf you have found an issue that you would like to bring to the attention of the\nmaintenance team for OAuth2 Proxy, please compose an email and send it to the\nlist of maintainers in our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oauth2-proxy/oauth2-proxy/blob/master/MAINTAINERS"},"MAINTAINERS")," file."),(0,i.kt)("p",null,"Please include as much detail as possible.\nIdeally, your disclosure should include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A reproducible case that can be used to demonstrate the exploit"),(0,i.kt)("li",{parentName:"ul"},"How you discovered this vulnerability"),(0,i.kt)("li",{parentName:"ul"},"A potential fix for the issue (if you have thought of one)"),(0,i.kt)("li",{parentName:"ul"},"Versions affected (if not present in master)"),(0,i.kt)("li",{parentName:"ul"},"Your GitHub ID")),(0,i.kt)("h3",{id:"how-will-we-respond-to-disclosures"},"How will we respond to disclosures?"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/managing-security-vulnerabilities/about-github-security-advisories"},"GitHub Security Advisories"),"\nto privately discuss fixes for disclosed vulnerabilities.\nIf you include a GitHub ID with your disclosure we will add you as a collaborator\nfor the advisory so that you can join the discussion and validate any fixes\nwe may propose."),(0,i.kt)("p",null,"For minor issues and previously disclosed vulnerabilities (typically for\ndependencies), we may use regular PRs for fixes and forego the security advisory."),(0,i.kt)("p",null,"Once a fix has been agreed upon, we will merge the fix and create a new release.\nIf we have multiple security issues in flight simultaneously, we may delay\nmerging fixes until all patches are ready.\nWe may also backport the fix to previous releases,\nbut this will be at the discretion of the maintainers."))}m.isMDXComponent=!0}}]);