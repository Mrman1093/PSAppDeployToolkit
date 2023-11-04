"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[3978],{2647:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=r(1527),t=r(6274);const l={id:"Remove-RegistryKey",title:"Remove-RegistryKey",description:'Help page for the "Remove-RegistryKey" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},s=void 0,o={id:"reference/functions/Remove-RegistryKey",title:"Remove-RegistryKey",description:'Help page for the "Remove-RegistryKey" command',source:"@site/docs/reference/functions/Remove-RegistryKey.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Remove-RegistryKey",permalink:"/docs/reference/functions/Remove-RegistryKey",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Remove-RegistryKey",title:"Remove-RegistryKey",description:'Help page for the "Remove-RegistryKey" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Remove-MSIApplications",permalink:"/docs/reference/functions/Remove-MSIApplications"},next:{title:"Resolve-Error",permalink:"/docs/reference/functions/Resolve-Error"}},a={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Key",id:"-key",level:3},{value:"-Name",id:"-name",level:3},{value:"-Recurse",id:"-recurse",level:3},{value:"-SID",id:"-sid",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"None",id:"none-1",level:3},{value:"This function does not generate any output.",id:"this-function-does-not-generate-any-output",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,i.jsx)(n.p,{children:"Deletes the specified registry key or value."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Remove-RegistryKey [-Key] <String> [[-Name] <String>] [-Recurse] [[-SID] <String>]\n [[-ContinueOnError] <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,i.jsx)(n.p,{children:"Deletes the specified registry key or value."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,i.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Remove-RegistryKey -Key 'HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\RunOnce'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-2",children:"EXAMPLE 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Remove-RegistryKey -Key 'HKLM:SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run' -Name 'RunAppInstall'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-3",children:"EXAMPLE 3"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Remove-RegistryKey -Key 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Example' -Name '(Default)'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,i.jsx)(n.h3,{id:"-key",children:"-Key"}),"\n",(0,i.jsx)(n.p,{children:"Path of the registry key to delete."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-name",children:"-Name"}),"\n",(0,i.jsx)(n.p,{children:"Name of the registry value to delete."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-recurse",children:"-Recurse"}),"\n",(0,i.jsx)(n.p,{children:"Delete registry key recursively."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-sid",children:"-SID"}),"\n",(0,i.jsx)(n.p,{children:"The security identifier (SID) for a user.\nSpecifying this parameter will convert a HKEY_CURRENT_USER registry key to the HKEY_USERS$SID format."}),"\n",(0,i.jsx)(n.p,{children:"Specify this parameter from the Invoke-HKCURegistrySettingsForAllUsers function to read/edit HKCU registry settings for all users on the system."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 3\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-continueonerror",children:"-ContinueOnError"}),"\n",(0,i.jsx)(n.p,{children:"Continue if an error is encountered.\nDefault is: $true."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 4\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,i.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,i.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,i.jsx)(n.h3,{id:"none",children:"None"}),"\n",(0,i.jsx)(n.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,i.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,i.jsx)(n.h3,{id:"none-1",children:"None"}),"\n",(0,i.jsx)(n.h3,{id:"this-function-does-not-generate-any-output",children:"This function does not generate any output."}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,i.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6274:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var i=r(959);const t={},l=i.createContext(t);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);