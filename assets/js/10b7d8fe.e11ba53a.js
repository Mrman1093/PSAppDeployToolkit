"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[497],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var i=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,w=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(w,r(r({ref:t},p),{},{components:n})):i.createElement(w,r({ref:t},p))}));function w(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:l,r[1]=a;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(8957),l=(n(9496),n(9613));const o={id:"Get-WindowTitle",title:"Get-WindowTitle",description:'Help page for the "Get-WindowTitle" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},r=void 0,a={unversionedId:"reference/functions/Get-WindowTitle",id:"reference/functions/Get-WindowTitle",title:"Get-WindowTitle",description:'Help page for the "Get-WindowTitle" command',source:"@site/docs/reference/functions/Get-WindowTitle.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Get-WindowTitle",permalink:"/docs/reference/functions/Get-WindowTitle",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Get-WindowTitle",title:"Get-WindowTitle",description:'Help page for the "Get-WindowTitle" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Get-UserProfiles",permalink:"/docs/reference/functions/Get-UserProfiles"},next:{title:"Install-MSUpdates",permalink:"/docs/reference/functions/Install-MSUpdates"}},s={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"SearchWinTitle",id:"searchwintitle",level:3},{value:"GetAllWinTitles",id:"getallwintitles",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-WindowTitle",id:"-windowtitle",level:3},{value:"-GetAllWindowTitles",id:"-getallwindowtitles",level:3},{value:"-DisableFunctionLogging",id:"-disablefunctionlogging",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.Management.Automation.PSObject",id:"systemmanagementautomationpsobject",level:3},{value:"Returns a PSObject with the following properties: WindowTitle, WindowHandle, ParentProcess, ParentProcessMainWindowHandle, ParentProcessId.",id:"returns-a-psobject-with-the-following-properties-windowtitle-windowhandle-parentprocess-parentprocessmainwindowhandle-parentprocessid",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,l.kt)("p",null,"Search for an open window title and return details about the window."),(0,l.kt)("h2",{id:"syntax"},"SYNTAX"),(0,l.kt)("h3",{id:"searchwintitle"},"SearchWinTitle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-WindowTitle -WindowTitle <String> [-DisableFunctionLogging] [<CommonParameters>]\n")),(0,l.kt)("h3",{id:"getallwintitles"},"GetAllWinTitles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-WindowTitle [-GetAllWindowTitles] [-DisableFunctionLogging] [<CommonParameters>]\n")),(0,l.kt)("h2",{id:"description"},"DESCRIPTION"),(0,l.kt)("p",null,"Search for a window title.\nIf window title searched for returns more than one result, then details for each window will be displayed."),(0,l.kt)("p",null,"Returns the following properties for each window: WindowTitle, WindowHandle, ParentProcess, ParentProcessMainWindowHandle, ParentProcessId."),(0,l.kt)("p",null,'Function does not work in SYSTEM context unless launched with "psexec.exe -s -i" to run it as an interactive process under the SYSTEM account.'),(0,l.kt)("h2",{id:"examples"},"EXAMPLES"),(0,l.kt)("h3",{id:"example-1"},"EXAMPLE 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-WindowTitle -WindowTitle 'Microsoft Word'\n")),(0,l.kt)("p",null,'Gets details for each window that has the words "Microsoft Word" in the title.'),(0,l.kt)("h3",{id:"example-2"},"EXAMPLE 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-WindowTitle -GetAllWindowTitles\n")),(0,l.kt)("p",null,"Gets details for all windows with a title."),(0,l.kt)("h3",{id:"example-3"},"EXAMPLE 3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-WindowTitle -GetAllWindowTitles | Where-Object { $_.ParentProcess -eq 'WINWORD' }\n")),(0,l.kt)("p",null,'Get details for all windows belonging to Microsoft Word process with name "WINWORD".'),(0,l.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,l.kt)("h3",{id:"-windowtitle"},"-WindowTitle"),(0,l.kt)("p",null,"The title of the application window to search for using regex matching."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: SearchWinTitle\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-getallwindowtitles"},"-GetAllWindowTitles"),(0,l.kt)("p",null,"Get titles for all open windows on the system."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: GetAllWinTitles\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-disablefunctionlogging"},"-DisableFunctionLogging"),(0,l.kt)("p",null,"Disables logging messages to the script log file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,l.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,l.kt)("h2",{id:"inputs"},"INPUTS"),(0,l.kt)("h3",{id:"none"},"None"),(0,l.kt)("h3",{id:"you-cannot-pipe-objects-to-this-function"},"You cannot pipe objects to this function."),(0,l.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,l.kt)("h3",{id:"systemmanagementautomationpsobject"},"System.Management.Automation.PSObject"),(0,l.kt)("h3",{id:"returns-a-psobject-with-the-following-properties-windowtitle-windowhandle-parentprocess-parentprocessmainwindowhandle-parentprocessid"},"Returns a PSObject with the following properties: WindowTitle, WindowHandle, ParentProcess, ParentProcessMainWindowHandle, ParentProcessId."),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://psappdeploytoolkit.com"},"https://psappdeploytoolkit.com")))}u.isMDXComponent=!0}}]);