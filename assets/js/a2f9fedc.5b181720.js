"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[1947],{9613:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(9496);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),g=s(o),m=l,d=g["".concat(p,".").concat(m)]||g[m]||c[m]||i;return o?n.createElement(d,a(a({ref:t},u),{},{components:o})):n.createElement(d,a({ref:t},u))}));function d(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=o.length,a=new Array(i);a[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[g]="string"==typeof e?e:l,a[1]=r;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9625:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var n=o(8957),l=(o(9496),o(9613));const i={sidebar_position:3,title:"\ud83d\udebf Customizing Deployments",description:"How to leverage the zero-configuration feature for zero-effort deployments.",slug:"/usage/customizing-deployments",hide_title:!0,tags:["Usage","Customizing"]},a="Customising deployments",r={unversionedId:"usage/customizing-deployments",id:"usage/customizing-deployments",title:"\ud83d\udebf Customizing Deployments",description:"How to leverage the zero-configuration feature for zero-effort deployments.",source:"@site/docs/usage/customizing-deployments.mdx",sourceDirName:"usage",slug:"/usage/customizing-deployments",permalink:"/docs/usage/customizing-deployments",draft:!1,tags:[{label:"Usage",permalink:"/docs/tags/usage"},{label:"Customizing",permalink:"/docs/tags/customizing"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83d\udebf Customizing Deployments",description:"How to leverage the zero-configuration feature for zero-effort deployments.",slug:"/usage/customizing-deployments",hide_title:!0,tags:["Usage","Customizing"]},sidebar:"documentation",previous:{title:"\ud83d\udc84 Adding UI Elements",permalink:"/docs/usage/adding-ui-elements"},next:{title:"Examples",permalink:"/docs/category/examples"}},p={},s=[{value:"AppDeployToolkitConfig.xml",id:"appdeploytoolkitconfigxml",level:3},{value:"AppDeployToolkitLogo.ico",id:"appdeploytoolkitlogoico",level:3},{value:"AppDeployToolkitBanner.png",id:"appdeploytoolkitbannerpng",level:3},{value:"Logging",id:"logging",level:3},{value:"Log Compression",id:"log-compression",level:4}],u={toc:s},g="wrapper";function c(e){let{components:t,...o}=e;return(0,l.kt)(g,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"customising-deployments"},"Customising deployments"),(0,l.kt)("p",null,"Aside from customizing the ",(0,l.kt)("inlineCode",{parentName:"p"},"Deploy-Application.ps1")," script to deploy your application, no configuration is necessary out of the box. The following components can be configured as required:"),(0,l.kt)("h3",{id:"appdeploytoolkitconfigxml"},"AppDeployToolkitConfig.xml"),(0,l.kt)("p",null,"Configure the default UI messages, MSI parameters, log file location, whether Admin rights should be required, whether log files should be compressed, log style (CMTrace or Legacy), max log size, whether debug messages should be logged, whether log entries should be written to the console, whether toolkit should re-launch as elevated logged-on console user when in SYSTEM context, whether toolkit should fall back to SYSTEM context if failure to launch toolkit as user, and whether toolkit should attempt to launch as a non-console logged on user (e.g. user logged on via terminal services) when in SYSTEM context."),(0,l.kt)("h3",{id:"appdeploytoolkitlogoico"},"AppDeployToolkitLogo.ico"),(0,l.kt)("p",null,"To brand the balloon notifications and UI window title bars with your own custom/corporate logo, replace the ",(0,l.kt)("inlineCode",{parentName:"p"},"AppDeployToolkitLogo.ico")," file with your own .ico file (retaining the file name)"),(0,l.kt)("h3",{id:"appdeploytoolkitbannerpng"},"AppDeployToolkitBanner.png"),(0,l.kt)("p",null,"To brand the PSAppDeployToolkit UI prompts with your own custom/corporate banner, replace the ",(0,l.kt)("inlineCode",{parentName:"p"},"AppDeployToolkitBanner.png")," file with your own .png file (retaining the file name). The file must be in PNG format and must be 450 x 50 in size."),(0,l.kt)("h3",{id:"logging"},"Logging"),(0,l.kt)("p",null,"The PSAppDeployToolkit generates extensive logging for all toolkit and MSI operations."),(0,l.kt)("p",null,"The default log folder for the PSAppDeployToolkit and MSI log files can be specified in the XML configuration file. The default folder is ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Windows\\Logs\\Software"),"."),(0,l.kt)("p",null,"The PSAppDeployToolkit log file is named after the application with _PSAppDeployToolkit appended to the end, e.g."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Oracle_JavaRuntime_1.7.0.17_EN_01_PSAppDeployToolkit.log"))),(0,l.kt)("p",null,"All MSI actions are logged and the log file is named according to the MSI file used on the command line, with the action appended to the log file name. For uninstallations, the MSI product code is resolved to the MSI application name and version to keep the same log file format, e.g."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Oracle_JavaRuntimeEnvironmentx86_1.7.0.17_EN_01_Install.log")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Oracle_JavaRuntimeEnvironmentx86_1.7.0.17_EN_01_Repair.log")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Oracle_JavaRuntimeEnvironmentx86_1.7.0.17_EN_01_Patch.log")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Oracle_JavaRuntimeEnvironmentx86_1.7.0.17_EN_01_Uninstall.log"))),(0,l.kt)("h4",{id:"log-compression"},"Log Compression"),(0,l.kt)("p",null,"One of the PSAppDeployToolkit Options in the ",(0,l.kt)("inlineCode",{parentName:"p"},"AppDeployToolkitConfig.xml")," file is CompressLogs. Enabling this option will create a temporary logging folder where you can save all of the log files you want to include in the single ZIP file that will be created from this folder."),(0,l.kt)("p",null,"To enable the CompressLogs feature, set the follow option in ",(0,l.kt)("inlineCode",{parentName:"p"},"AppDeployToolkitConfig.xml")," to True:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<Toolkit_CompressLogs>True</Toolkit_CompressLogs>\n")),(0,l.kt)("p",null,"When set to True, the following happens:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Both toolkit and MSI logs are temporally placed in $envTemp\\$installName which gets cleaned up at the end of the install."),(0,l.kt)("li",{parentName:"ul"},"At the end of the install / uninstall, the logs are compressed into a new zip file which is placed in the LogFolder location in the config file."),(0,l.kt)("li",{parentName:"ul"},"The Zip file name indicates whether it is an Install / Uninstall and has the timestamp in the filename so previous logs do not get overwritten."),(0,l.kt)("li",{parentName:"ul"},"If your package creates other log files, you can send them to the temporary logging folder at $envTemp\\$installName.")))}c.isMDXComponent=!0}}]);