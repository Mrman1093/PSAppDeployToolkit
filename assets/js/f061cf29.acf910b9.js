"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[9474],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,r(r({ref:t},s),{},{components:n})):a.createElement(k,r({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(8957),o=(n(9496),n(9613));const l={sidebar_position:1,title:"\ud83d\uddc3\ufe0f Extracted Archive",description:"The layout of the PSAppDeployToolkit archive explained.",slug:"/understanding-the-layout/extracted-archive",hide_title:!0,tags:["Usage","Archive"]},r="Extracted Archive",i={unversionedId:"understanding-the-layout/extracted-archive",id:"understanding-the-layout/extracted-archive",title:"\ud83d\uddc3\ufe0f Extracted Archive",description:"The layout of the PSAppDeployToolkit archive explained.",source:"@site/docs/understanding-the-layout/extracted-archive.mdx",sourceDirName:"understanding-the-layout",slug:"/understanding-the-layout/extracted-archive",permalink:"/docs/understanding-the-layout/extracted-archive",draft:!1,tags:[{label:"Usage",permalink:"/docs/tags/usage"},{label:"Archive",permalink:"/docs/tags/archive"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\ud83d\uddc3\ufe0f Extracted Archive",description:"The layout of the PSAppDeployToolkit archive explained.",slug:"/understanding-the-layout/extracted-archive",hide_title:!0,tags:["Usage","Archive"]},sidebar:"documentation",previous:{title:"Understanding the Layout",permalink:"/docs/category/understanding-the-layout"},next:{title:"\ud83d\udcdc Deployment Script",permalink:"/docs/understanding-the-layout/deployment-script"}},p={},d=[{value:"File &amp; Folder layout",id:"file--folder-layout",level:2},{value:"Root folder",id:"root-folder",level:4},{value:"Toolkit Folder",id:"toolkit-folder",level:3},{value:"AppDeployToolkit Sub-Folder",id:"appdeploytoolkit-sub-folder",level:3}],s={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extracted-archive"},"Extracted Archive"),(0,o.kt)("p",null,"The PSAppDeployToolkit archive, when unziped, archive package consists of the following folders and files, and should reflect what you see when you unzip the PSAppDeployToolkit archive:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Toolkit/\n\u251c\u2500\u2500 Deploy-Application.ps1\n\u251c\u2500\u2500 Deploy-Application.exe\n\u251c\u2500\u2500 Deploy-Application.exe.config\n\u2514\u2500\u2500 AppDeployToolkit/\n    \u251c\u2500\u2500 AppDeployToolkitBanner.png\n    \u251c\u2500\u2500 AppDeployToolkitConfig.xml\n    \u251c\u2500\u2500 AppDeployToolkitExtensions.ps1\n    \u251c\u2500\u2500 AppDeployToolkitHelp.ps1\n    \u251c\u2500\u2500 AppDeployToolkitLogo.ico\n    \u251c\u2500\u2500 AppDeployToolkitMain.cs\n    \u2514\u2500\u2500 AppDeplotToolkitMain.ps1\n    \nExamples/\n\u251c\u2500\u2500 AdobeReader/\n\u2502   \u2514\u2500\u2500 Deploy-Application.ps1\n\u2514\u2500\u2500 Office2013/\n    \u2514\u2500\u2500 Deploy-Application.ps1\nPSAppDeployToolkit.pdf\nCHANGELOG.txt\nLICENSE.txt\n")),(0,o.kt)("h2",{id:"file--folder-layout"},"File & Folder layout"),(0,o.kt)("p",null,"Here we will examine each of the files and folders and describe their function:"),(0,o.kt)("h4",{id:"root-folder"},"Root folder"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Folder Name")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Toolkit/")),(0,o.kt)("td",{parentName:"tr",align:null},"Contains PSAppDeployToolkit itself and all of the files / folder structure required to create a deployment package.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Examples/")),(0,o.kt)("td",{parentName:"tr",align:null},"Contains example deployments for both Adobe Reader and Microsoft Office 2013.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PSAppDeployToolkit.pdf")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Deprecated")," - A PDF with all docuementation. This has proven difficult to maintain. We hope that recent chagnes to the website will mean this can be removed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CHANGELOG.txt")),(0,o.kt)("td",{parentName:"tr",align:null},"The changelog for the current release of the PSAppDeployToolkit.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"LICENSE.txt")),(0,o.kt)("td",{parentName:"tr",align:null},"The LGPL license under which the PSAppDeployToolkit is distributed.")))),(0,o.kt)("h3",{id:"toolkit-folder"},"Toolkit Folder"),(0,o.kt)("p",null,"This contains all of the files needed to create a new deployment package"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Folder / File Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"AppDeployToolkit/")),(0,o.kt)("td",{parentName:"tr",align:null},"Contains the PSAppDeployToolkit dependency files.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Files/")),(0,o.kt)("td",{parentName:"tr",align:null},"Contains the primary installation file(s), e.g. MSI file. This folder is empty by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"SupportFiles/")),(0,o.kt)("td",{parentName:"tr",align:null},"Contains any supporting resources or assets, e.g. files you need to copy to the target machine using the PSAppDeployToolkit during deployment. This folder is empty by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Deploy_Application.ps1")),(0,o.kt)("td",{parentName:"tr",align:null},"PowerShell script that contains the logic to perform the actual install / uninstall / repair. This is the only file that needs to be modified, depending on your level of customization.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Deploy-Application.exe")),(0,o.kt)("td",{parentName:"tr",align:null},"An optional executable that can be used to launch the ",(0,o.kt)("inlineCode",{parentName:"td"},"Deploy-Application.ps1")," script without opening a PowerShell console window. Supports passing command-line parameters to the script.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Deploy-Application.exe.config")),(0,o.kt)("td",{parentName:"tr",align:null},"A .NET configuration file required for ",(0,o.kt)("inlineCode",{parentName:"td"},"Deploy-Application.exe")," to function correctly.")))),(0,o.kt)("h3",{id:"appdeploytoolkit-sub-folder"},"AppDeployToolkit Sub-Folder"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"File Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AppDeployToolkitBanner.png")),(0,o.kt)("td",{parentName:"tr",align:null},"The default PSAppDeployToolkit branded header, used on any messaging displayed to the end user if interaction is reqauired. To brand the PSAppDeployToolkit User Interface with your own custom / corporate banner, replace this file with your own image.  The file must be in PNG format and must be 450 x 50 in size.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AppDeployToolkitConfig.xml")),(0,o.kt)("td",{parentName:"tr",align:null},"PSAppDeployToolkit global configuration file. Used by the ",(0,o.kt)("inlineCode",{parentName:"td"},"AppDeployToolkitMain.ps1")," script, and sets default values for how the toolkit should behave overall. This is intended to be a static file that is configured once, not on a per-deployment basis.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AppDeployToolkitExtensions.ps1")),(0,o.kt)("td",{parentName:"tr",align:null},"This is an optional PowerShell script that can be used to extend the PSAppDeployToolkit functionality with custom functions. It is automatically dot-sourced by the ",(0,o.kt)("inlineCode",{parentName:"td"},"AppDeployToolkitMain.ps1")," script.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AppDeployToolkitHelp.ps1")),(0,o.kt)("td",{parentName:"tr",align:null},"PowerShell script to display a Help consoleThis is a script that displays a help console to browse the functions included in the PSAppDeployToolkit and copy and paste examples in to your deployment script.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AppDeployToolkitLogo.ico")),(0,o.kt)("td",{parentName:"tr",align:null},"Contains the default PSAppDeployToolkit branded icon. To brand the balloon notifications and UI window title bars with your own custom / corporate logo, replace this file with your own icon.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AppDeployToolkitMain.cs")),(0,o.kt)("td",{parentName:"tr",align:null},"Contains additional classes and methods referred by the ",(0,o.kt)("inlineCode",{parentName:"td"},"AppDeployToolkitMain.ps1")," script.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AppDeployToolkitMain.ps1")),(0,o.kt)("td",{parentName:"tr",align:null},"Contains all of the functions and logic used by the installation script. By Separating the logic from the installation script, we can obfuscate away the complex code and make enhancements independently of the installation scripts that contain per-application actions.")))))}u.isMDXComponent=!0}}]);