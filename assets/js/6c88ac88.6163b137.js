"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9342],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(r),g=o,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9078:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={title:"DVC\u3068\u306f\uff1f",description:"DVC\u3068\u306f\u4f55\u304b\u8aac\u660e\u3057\u307e\u3059\u3002",sidebar_label:"DVC\u3068\u306f\uff1f",sidebar_position:1,tags:["\u958b\u767a\u74b0\u5883","\u6a5f\u68b0\u5b66\u7fd2","\u30c7\u30fc\u30bf\u7ba1\u7406","git","DVC"],keywords:["\u958b\u767a\u74b0\u5883","\u6a5f\u68b0\u5b66\u7fd2","\u30c7\u30fc\u30bf\u7ba1\u7406","git","DVC"]},l=void 0,a={unversionedId:"ml_tools/dvc/intro",id:"ml_tools/dvc/intro",title:"DVC\u3068\u306f\uff1f",description:"DVC\u3068\u306f\u4f55\u304b\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/ml_tools/dvc/intro.md",sourceDirName:"ml_tools/dvc",slug:"/ml_tools/dvc/intro",permalink:"/docs/ml_tools/dvc/intro",draft:!1,tags:[{label:"\u958b\u767a\u74b0\u5883",permalink:"/docs/tags/\u958b\u767a\u74b0\u5883"},{label:"\u6a5f\u68b0\u5b66\u7fd2",permalink:"/docs/tags/\u6a5f\u68b0\u5b66\u7fd2"},{label:"\u30c7\u30fc\u30bf\u7ba1\u7406",permalink:"/docs/tags/\u30c7\u30fc\u30bf\u7ba1\u7406"},{label:"git",permalink:"/docs/tags/git"},{label:"DVC",permalink:"/docs/tags/dvc"}],version:"current",sidebarPosition:1,frontMatter:{title:"DVC\u3068\u306f\uff1f",description:"DVC\u3068\u306f\u4f55\u304b\u8aac\u660e\u3057\u307e\u3059\u3002",sidebar_label:"DVC\u3068\u306f\uff1f",sidebar_position:1,tags:["\u958b\u767a\u74b0\u5883","\u6a5f\u68b0\u5b66\u7fd2","\u30c7\u30fc\u30bf\u7ba1\u7406","git","DVC"],keywords:["\u958b\u767a\u74b0\u5883","\u6a5f\u68b0\u5b66\u7fd2","\u30c7\u30fc\u30bf\u7ba1\u7406","git","DVC"]},sidebar:"defaultSidebar",previous:{title:"DVC (\u30c7\u30fc\u30bf\u7ba1\u7406)",permalink:"/docs/category/dvc-\u30c7\u30fc\u30bf\u7ba1\u7406"},next:{title:"DVC\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1f",permalink:"/docs/ml_tools/dvc/tutorial"}},c={},s=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,o.kt)("p",null,"DVC(Data Version Control)\u3068\u306f\u3001\u30c7\u30fc\u30bf\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u30c4\u30fc\u30eb\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u6a5f\u68b0\u5b66\u7fd2\u306e\u958b\u767a\u3092\u884c\u3046\u3068\u304d\u3001\u300cgit\u3067\u30b3\u30fc\u30c9\u3092\u7ba1\u7406\u3059\u308b\u306e\u3068\u540c\u3058\u3088\u3046\u306b\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3082\u884c\u3044\u305f\u3044\u300d \u3068\u601d\u3046\u3053\u3068\u304c\u3042\u308b\u306e\u3067\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u304b\uff1f\n\u65b9\u6cd5\u306e\u4e00\u3064\u3068\u3057\u3066\u3071\u3063\u3068\u601d\u3044\u6d6e\u304b\u3076\u306e\u306f\u300c\u30b3\u30fc\u30c9\u3082\u30c7\u30fc\u30bf\u3082\u307e\u3068\u3081\u3066git\u3067\u7ba1\u7406\u3057\u3066\u3057\u307e\u3046\u300d\u3068\u3044\u3046\u3053\u3068\u3067\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u304b\u3002\n\u56f3\u306b\u3059\u308b\u3068\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/docs/ml_tools/dvc/intro/all_git.png",width:"450"})),"\u3053\u3046\u3059\u308c\u3070\u3001\u30b7\u30f3\u30d7\u30eb\u306b\u30b3\u30fc\u30c9\u3068\u30c7\u30fc\u30bf\u3092\u7ba1\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u304b\u3068\u601d\u3044\u307e\u3059\u3002 \u4e00\u65b9\u3067\u3001",(0,o.kt)("strong",null,"\u30c7\u30fc\u30bf\u306e\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3044\u5834\u5408\u306f\u3001git\u304c\u91cd\u305f\u304f\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),"git add \u3057\u3066\u6570\u5206~\u6570\u5341\u5206\u5f85\u305f\u3055\u308c\u308b\u3068\u304b\u5acc\u3067\u3059\u3088\u306d\u3002",(0,o.kt)("p",null,"\u305d\u3053\u3067\u767b\u5834\u3059\u308b\u306e\u304c\u300cDVC\u300d\u3067\u3059\uff01\nDVC\u3092\u6d3b\u7528\u3059\u308b\u5834\u5408\u3001\u30b3\u30fc\u30c9\u3068",(0,o.kt)("strong",null,"\u30c7\u30fc\u30bf\u306e\u30e1\u30bf\u60c5\u5831"),"\u3092git\u3067\u7ba1\u7406\u3057\u3001\u30b5\u30a4\u30ba\u304c\u5927\u304d\u304f\u306a\u308b\u3053\u3068\u304c\u61f8\u5ff5\u3055\u308c\u308b",(0,o.kt)("strong",null,"\u30c7\u30fc\u30bf\u306e\u5b9f\u4f53\u305d\u306e\u3082\u306e\u306fAWS S3\u3084GoogleDrive\u306a\u3069\u3067\u7ba1\u7406\u3059\u308b"),"\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u56f3\u306b\u3059\u308b\u3068\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/docs/ml_tools/dvc/intro/dvc.png",width:"450"})),(0,o.kt)("p",null,"\u3053\u3046\u3059\u308b\u3053\u3068\u3067\u3001\u30b5\u30a4\u30ba\u304c\u5927\u304d\u304f\u306a\u308a\u3084\u3059\u3044\u30c7\u30fc\u30bf\u305d\u306e\u3082\u306e\u3092\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u3067\u7ba1\u7406\u3057\u3064\u3064\u3001\u30c7\u30fc\u30bf\u3084\u30b3\u30fc\u30c9\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u5f93\u6765\u901a\u308agit\u3067\u7ba1\u7406\u3067\u304d\u308b\u3068\u3044\u3046\u308f\u3051\u3067\u3059\u3002"),(0,o.kt)("p",null,"DVC\u306e\u4f7f\u3044\u65b9\u306b\u3064\u3044\u3066\u306f\u3001\u6b21\u306e\u7ae0\u4ee5\u964d\u3067\u8aac\u660e\u3057\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);