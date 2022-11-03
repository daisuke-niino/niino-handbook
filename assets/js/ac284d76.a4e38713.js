"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[945],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=d(a),c=r,k=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(k,p(p({ref:t},o),{},{components:a})):n.createElement(k,p({ref:t},o))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9925:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={title:"\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9(\u9806\u6b21\u66f4\u65b0\u4e88\u5b9a)",description:"\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9\u3092\u307e\u3068\u3081\u3066\u304a\u304d\u307e\u3059\u3002",sidebar_label:"\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9",sidebar_position:99,tags:["Ubuntu","\u958b\u767a\u74b0\u5883","apt","dpkg","\u30b3\u30de\u30f3\u30c9"],keywords:["Ubuntu","\u958b\u767a\u74b0\u5883","apt","dpkg","\u30b3\u30de\u30f3\u30c9"]},p=void 0,i={unversionedId:"dev_env/Ubuntu/apt_cmd",id:"dev_env/Ubuntu/apt_cmd",title:"\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9(\u9806\u6b21\u66f4\u65b0\u4e88\u5b9a)",description:"\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9\u3092\u307e\u3068\u3081\u3066\u304a\u304d\u307e\u3059\u3002",source:"@site/docs/dev_env/Ubuntu/apt_cmd.md",sourceDirName:"dev_env/Ubuntu",slug:"/dev_env/Ubuntu/apt_cmd",permalink:"/docs/dev_env/Ubuntu/apt_cmd",draft:!1,tags:[{label:"Ubuntu",permalink:"/docs/tags/ubuntu"},{label:"\u958b\u767a\u74b0\u5883",permalink:"/docs/tags/\u958b\u767a\u74b0\u5883"},{label:"apt",permalink:"/docs/tags/apt"},{label:"dpkg",permalink:"/docs/tags/dpkg"},{label:"\u30b3\u30de\u30f3\u30c9",permalink:"/docs/tags/\u30b3\u30de\u30f3\u30c9"}],version:"current",sidebarPosition:99,frontMatter:{title:"\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9(\u9806\u6b21\u66f4\u65b0\u4e88\u5b9a)",description:"\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9\u3092\u307e\u3068\u3081\u3066\u304a\u304d\u307e\u3059\u3002",sidebar_label:"\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9",sidebar_position:99,tags:["Ubuntu","\u958b\u767a\u74b0\u5883","apt","dpkg","\u30b3\u30de\u30f3\u30c9"],keywords:["Ubuntu","\u958b\u767a\u74b0\u5883","apt","dpkg","\u30b3\u30de\u30f3\u30c9"]},sidebar:"defaultSidebar",previous:{title:"Ubuntu\u306bCUDA/cuDNN\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",permalink:"/docs/dev_env/Ubuntu/install_cuda"}},u={},d=[{value:"apt\u30b3\u30de\u30f3\u30c9",id:"apt\u30b3\u30de\u30f3\u30c9",level:2},{value:"dpkg",id:"dpkg",level:2},{value:"adduser",id:"adduser",level:2},{value:"mount\u30b3\u30de\u30f3\u30c9",id:"mount\u30b3\u30de\u30f3\u30c9",level:2}],o={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"apt\u30b3\u30de\u30f3\u30c9"},"apt\u30b3\u30de\u30f3\u30c9"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30b3\u30de\u30f3\u30c9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apt update")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u60c5\u5831\u3092\u6700\u65b0\u306b\u3059\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apt upgrade")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u66f4\u65b0\u3059\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apt install \u30d1\u30c3\u30b1\u30fc\u30b8\u540d or deb\u30d5\u30a1\u30a4\u30eb\u540d")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apt remove \u30d1\u30c3\u30b1\u30fc\u30b8\u540d")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u524a\u9664(\u8a2d\u5b9a\u60c5\u5831\u306f\u6b8b\u308b)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apt remove --purge \u30d1\u30c3\u30b1\u30fc\u30b8\u540d")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u524a\u9664(\u8a2d\u5b9a\u60c5\u5831\u3082\u6d88\u3059)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apt autoremove")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u66f4\u65b0\u3084\u524a\u9664\u306a\u3069\u306b\u3088\u308a\u4e0d\u8981\u306b\u306a\u3063\u305f\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3059\u308b")))),(0,r.kt)("h2",{id:"dpkg"},"dpkg"),(0,r.kt)("p",null,"deb\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u3063\u3066\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u30b3\u30de\u30f3\u30c9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dpkg -i \u30d1\u30c3\u30b1\u30fc\u30b8\u30d5\u30a1\u30a4\u30eb\u540d\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u4e00\u89a7\u306e\u53c2\u7167"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dpkg -l\n")))),(0,r.kt)("h2",{id:"adduser"},"adduser"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ubuntu\u306b\u65b0\u305f\u306b\u30e6\u30fc\u30b6\u3092\u8ffd\u52a0\u3059\u308b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo adduser \u30e6\u30fc\u30b6\u540d\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ba1\u7406\u8005\u6a29\u9650\u3092\u3064\u3051\u308b\u3068\u304d\u306f\u4ee5\u4e0b\u3082\u5b9f\u884c\u3059\u308b\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gpasswd -a \u30e6\u30fc\u30b6\u540d sudo\n")))),(0,r.kt)("h2",{id:"mount\u30b3\u30de\u30f3\u30c9"},"mount\u30b3\u30de\u30f3\u30c9"),(0,r.kt)("p",null,"  TODO"))}m.isMDXComponent=!0}}]);