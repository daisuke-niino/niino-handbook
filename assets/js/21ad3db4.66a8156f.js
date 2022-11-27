"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,w=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(w,l(l({ref:t},u),{},{components:n})):r.createElement(w,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"WSL\u3068\u306f\uff1f",description:"WSL\u306e\u6982\u8981\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",sidebar_label:"WSL\u3068\u306f\uff1f",sidebar_position:1,tags:["Windows","WSL","\u958b\u767a\u74b0\u5883"],keywords:["Windows","WSL","\u958b\u767a\u74b0\u5883"]},l=void 0,o={unversionedId:"dev_env/windows/wsl/intro",id:"dev_env/windows/wsl/intro",title:"WSL\u3068\u306f\uff1f",description:"WSL\u306e\u6982\u8981\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/dev_env/windows/wsl/intro.md",sourceDirName:"dev_env/windows/wsl",slug:"/dev_env/windows/wsl/intro",permalink:"/docs/dev_env/windows/wsl/intro",draft:!1,tags:[{label:"Windows",permalink:"/docs/tags/windows"},{label:"WSL",permalink:"/docs/tags/wsl"},{label:"\u958b\u767a\u74b0\u5883",permalink:"/docs/tags/\u958b\u767a\u74b0\u5883"}],version:"current",sidebarPosition:1,frontMatter:{title:"WSL\u3068\u306f\uff1f",description:"WSL\u306e\u6982\u8981\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",sidebar_label:"WSL\u3068\u306f\uff1f",sidebar_position:1,tags:["Windows","WSL","\u958b\u767a\u74b0\u5883"],keywords:["Windows","WSL","\u958b\u767a\u74b0\u5883"]},sidebar:"defaultSidebar",previous:{title:"WSL",permalink:"/docs/category/wsl"},next:{title:"USB\u30c7\u30d0\u30a4\u30b9\u3092\u8a8d\u8b58\u3055\u305b\u308b",permalink:"/docs/dev_env/windows/wsl/connect_usb_device"}},s={},p=[{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u65b9\u6cd5",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u65b9\u6cd5",level:2},{value:"\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9",id:"\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"WSL(Windows Subsystem for Linux)\u3068\u306f\uff0cWindows\u4e0a\u3067Ubuntu\u306a\u3069\u306eLinux\u306e\u6a5f\u80fd\u3092\u52d5\u304b\u3059\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3067\u3059\uff0e\nWindows\u4e0a\u3067Linux\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084Bash\u306a\u3069\u3092\u4f7f\u3048\u308b\u4fbf\u5229\u6a5f\u80fd\u3068\u3044\u3046\u30a4\u30e1\u30fc\u30b8\u3067\u3059\u306d\uff0e"),(0,a.kt)("h2",{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u65b9\u6cd5"},"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u65b9\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u308b\u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u4e00\u89a7\u3092\u78ba\u8a8d\u3059\u308b\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> wsl --list --online\n\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u308b\u6709\u52b9\u306a\u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u4e00\u89a7\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002\n\u65e2\u5b9a\u306e\u5206\u5e03\u306f ' * ' \u3067\u8868\u3055\u308c\u307e\u3059\u3002\n'wsl --install -d <Distro>'\u3092\u4f7f\u7528\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\nNAME               FRIENDLY NAME\n* Ubuntu             Ubuntu\nDebian             Debian GNU/Linux\nkali-linux         Kali Linux Rolling\nSLES-12            SUSE Linux Enterprise Server v12\nSLES-15            SUSE Linux Enterprise Server v15\nUbuntu-18.04       Ubuntu 18.04 LTS\nUbuntu-20.04       Ubuntu 20.04 LTS\nOracleLinux_8_5    Oracle Linux 8.5\nOracleLinux_7_9    Oracle Linux 7.9\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wsl --install -d Ubuntu-20.04\n")))),(0,a.kt)("h2",{id:"\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9"},"\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u8868\u793a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wsl --list --verbose\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u5b9f\u884c\u3059\u308b\u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wsl --set-default <Distribution Name>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u30b7\u30e3\u30c3\u30c8\u30c0\u30a6\u30f3\u3059\u308b\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wsl --shutdown\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8d77\u52d5\u3059\u308b\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wsl -d <Distribution Name>\n")))),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/windows/wsl/basic-commands"},"https://learn.microsoft.com/ja-jp/windows/wsl/basic-commands"))))}c.isMDXComponent=!0}}]);