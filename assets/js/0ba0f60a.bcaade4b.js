"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[1722],{4565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(1527),i=t(6274);const o={id:"Set-ServiceStartMode",title:"Set-ServiceStartMode",description:'Help page for the "Set-ServiceStartMode" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},a=void 0,l={id:"reference/functions/Set-ServiceStartMode",title:"Set-ServiceStartMode",description:'Help page for the "Set-ServiceStartMode" command',source:"@site/docs/reference/functions/Set-ServiceStartMode.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Set-ServiceStartMode",permalink:"/docs/reference/functions/Set-ServiceStartMode",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Set-ServiceStartMode",title:"Set-ServiceStartMode",description:'Help page for the "Set-ServiceStartMode" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Set-RegistryKey",permalink:"/docs/reference/functions/Set-RegistryKey"},next:{title:"Set-Shortcut",permalink:"/docs/reference/functions/Set-Shortcut"}},s={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Name",id:"-name",level:3},{value:"-ComputerName",id:"-computername",level:3},{value:"-StartMode",id:"-startmode",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"None",id:"none-1",level:3},{value:"This function does not return any objects.",id:"this-function-does-not-return-any-objects",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,r.jsx)(n.p,{children:"Set the service startup mode."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"Set-ServiceStartMode [-Name] <String> [[-ComputerName] <String>] [-StartMode] <String>\n [[-ContinueOnError] <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,r.jsx)(n.p,{children:"Set the service startup mode."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,r.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"Set-ServiceStartMode -Name 'wuauserv' -StartMode 'Automatic (Delayed Start)'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,r.jsx)(n.h3,{id:"-name",children:"-Name"}),"\n",(0,r.jsx)(n.p,{children:"Specify the name of the service."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-computername",children:"-ComputerName"}),"\n",(0,r.jsx)(n.p,{children:"Specify the name of the computer.\nDefault is: the local computer."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: $env:ComputerName\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-startmode",children:"-StartMode"}),"\n",(0,r.jsx)(n.p,{children:"Specify startup mode for the service.\nOptions: Automatic, Automatic (Delayed Start), Manual, Disabled, Boot, System."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 3\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-continueonerror",children:"-ContinueOnError"}),"\n",(0,r.jsx)(n.p,{children:"Continue if an error is encountered.\nDefault is: $true."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 4\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,r.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,r.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,r.jsx)(n.h3,{id:"none",children:"None"}),"\n",(0,r.jsx)(n.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,r.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,r.jsx)(n.h3,{id:"none-1",children:"None"}),"\n",(0,r.jsx)(n.h3,{id:"this-function-does-not-return-any-objects",children:"This function does not return any objects."}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,r.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6274:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(959);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);