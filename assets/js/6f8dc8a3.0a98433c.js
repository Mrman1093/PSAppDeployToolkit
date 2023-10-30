"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[587],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(8957),a=(n(9496),n(9613));const l={id:"Get-RegistryKey",title:"Get-RegistryKey",description:'Help page for the "Get-RegistryKey" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},i=void 0,o={unversionedId:"reference/functions/Get-RegistryKey",id:"reference/functions/Get-RegistryKey",title:"Get-RegistryKey",description:'Help page for the "Get-RegistryKey" command',source:"@site/docs/reference/functions/Get-RegistryKey.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Get-RegistryKey",permalink:"/docs/reference/functions/Get-RegistryKey",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Get-RegistryKey",title:"Get-RegistryKey",description:'Help page for the "Get-RegistryKey" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Get-PendingReboot",permalink:"/docs/reference/functions/Get-PendingReboot"},next:{title:"Get-RunningProcesses",permalink:"/docs/reference/functions/Get-RunningProcesses"}},s={},p=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"EXAMPLE 4",id:"example-4",level:3},{value:"EXAMPLE 5",id:"example-5",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Key",id:"-key",level:3},{value:"-Value",id:"-value",level:3},{value:"-SID",id:"-sid",level:3},{value:"-ReturnEmptyKeyIfExists",id:"-returnemptykeyifexists",level:3},{value:"-DoNotExpandEnvironmentNames",id:"-donotexpandenvironmentnames",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.String",id:"systemstring",level:3},{value:"Returns the value of the registry key or value.",id:"returns-the-value-of-the-registry-key-or-value",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,"Retrieves value names and value data for a specified registry key or optionally, a specific value."),(0,a.kt)("h2",{id:"syntax"},"SYNTAX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-RegistryKey [-Key] <String> [[-Value] <String>] [[-SID] <String>] [-ReturnEmptyKeyIfExists]\n [-DoNotExpandEnvironmentNames] [[-ContinueOnError] <Boolean>] [<CommonParameters>]\n")),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"Retrieves value names and value data for a specified registry key or optionally, a specific value."),(0,a.kt)("p",null,"If the registry key does not exist or contain any values, the function will return $null by default.\nTo test for existence of a registry key path, use built-in Test-Path cmdlet."),(0,a.kt)("h2",{id:"examples"},"EXAMPLES"),(0,a.kt)("h3",{id:"example-1"},"EXAMPLE 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-RegistryKey -Key 'HKLM:SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\{1AD147D0-BE0E-3D6C-AC11-64F6DC4163F1}'\n")),(0,a.kt)("h3",{id:"example-2"},"EXAMPLE 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-RegistryKey -Key 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\iexplore.exe'\n")),(0,a.kt)("h3",{id:"example-3"},"EXAMPLE 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-RegistryKey -Key 'HKLM:Software\\Wow6432Node\\Microsoft\\Microsoft SQL Server Compact Edition\\v3.5' -Value 'Version'\n")),(0,a.kt)("h3",{id:"example-4"},"EXAMPLE 4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-RegistryKey -Key 'HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment' -Value 'Path' -DoNotExpandEnvironmentNames\n")),(0,a.kt)("p",null,"Returns %ProgramFiles%\\Java instead of C:\\Program Files\\Java"),(0,a.kt)("h3",{id:"example-5"},"EXAMPLE 5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-RegistryKey -Key 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Example' -Value '(Default)'\n")),(0,a.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,a.kt)("h3",{id:"-key"},"-Key"),(0,a.kt)("p",null,"Path of the registry key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-value"},"-Value"),(0,a.kt)("p",null,"Value to retrieve (optional)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-sid"},"-SID"),(0,a.kt)("p",null,"The security identifier (SID) for a user.\nSpecifying this parameter will convert a HKEY_CURRENT_USER registry key to the HKEY_USERS\\$SID format."),(0,a.kt)("p",null,"Specify this parameter from the Invoke-HKCURegistrySettingsForAllUsers function to read/edit HKCU registry settings for all users on the system."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 3\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-returnemptykeyifexists"},"-ReturnEmptyKeyIfExists"),(0,a.kt)("p",null,"Return the registry key if it exists but it has no property/value pairs underneath it.\nDefault is: $false."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-donotexpandenvironmentnames"},"-DoNotExpandEnvironmentNames"),(0,a.kt)("p",null,"Return unexpanded REG_EXPAND_SZ values.\nDefault is: $false."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-continueonerror"},"-ContinueOnError"),(0,a.kt)("p",null,"Continue if an error is encountered.\nDefault is: $true."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 4\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,a.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,a.kt)("h2",{id:"inputs"},"INPUTS"),(0,a.kt)("h3",{id:"none"},"None"),(0,a.kt)("h3",{id:"you-cannot-pipe-objects-to-this-function"},"You cannot pipe objects to this function."),(0,a.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,a.kt)("h3",{id:"systemstring"},"System.String"),(0,a.kt)("h3",{id:"returns-the-value-of-the-registry-key-or-value"},"Returns the value of the registry key or value."),(0,a.kt)("h2",{id:"notes"},"NOTES"),(0,a.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://psappdeploytoolkit.com"},"https://psappdeploytoolkit.com")))}d.isMDXComponent=!0}}]);