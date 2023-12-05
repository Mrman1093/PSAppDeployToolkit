"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[4626],{2918:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(1527),i=t(3883);const r={id:"Get-Shortcut",title:"Get-Shortcut",description:'Help page for the "Get-Shortcut" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},l=void 0,a={id:"reference/functions/Get-Shortcut",title:"Get-Shortcut",description:'Help page for the "Get-Shortcut" command',source:"@site/docs/reference/functions/Get-Shortcut.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Get-Shortcut",permalink:"/docs/reference/functions/Get-Shortcut",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Get-Shortcut",title:"Get-Shortcut",description:'Help page for the "Get-Shortcut" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Get-ServiceStartMode",permalink:"/docs/reference/functions/Get-ServiceStartMode"},next:{title:"Get-UniversalDate",permalink:"/docs/reference/functions/Get-UniversalDate"}},s={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Path",id:"-path",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.Collections.Hashtable.",id:"systemcollectionshashtable",level:3},{value:"Returns a hashtable with the following keys",id:"returns-a-hashtable-with-the-following-keys",level:3},{value:"- TargetPath",id:"--targetpath",level:3},{value:"- Arguments",id:"--arguments",level:3},{value:"- Description",id:"--description",level:3},{value:"- WorkingDirectory",id:"--workingdirectory",level:3},{value:"- WindowStyle",id:"--windowstyle",level:3},{value:"- Hotkey",id:"--hotkey",level:3},{value:"- IconLocation",id:"--iconlocation",level:3},{value:"- IconIndex",id:"--iconindex",level:3},{value:"- RunAsAdmin",id:"--runasadmin",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,o.jsx)(n.p,{children:"Get information from a new .lnk or .url type shortcut"}),"\n",(0,o.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"Get-Shortcut [-Path] <String> [-ContinueOnError <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,o.jsx)(n.p,{children:"Get information from a new .lnk or .url type shortcut.\nReturns a hashtable."}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,o.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:'Get-Shortcut -Path "$envProgramData\\Microsoft\\Windows\\Start Menu\\My Shortcut.lnk"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,o.jsx)(n.h3,{id:"-path",children:"-Path"}),"\n",(0,o.jsx)(n.p,{children:"Path to the shortcut to get information from"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-continueonerror",children:"-ContinueOnError"}),"\n",(0,o.jsx)(n.p,{children:"Continue if an error is encountered.\nDefault is: $true."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,o.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,o.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,o.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,o.jsx)(n.h3,{id:"none",children:"None"}),"\n",(0,o.jsx)(n.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,o.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,o.jsx)(n.h3,{id:"systemcollectionshashtable",children:"System.Collections.Hashtable."}),"\n",(0,o.jsx)(n.h3,{id:"returns-a-hashtable-with-the-following-keys",children:"Returns a hashtable with the following keys"}),"\n",(0,o.jsx)(n.h3,{id:"--targetpath",children:"- TargetPath"}),"\n",(0,o.jsx)(n.h3,{id:"--arguments",children:"- Arguments"}),"\n",(0,o.jsx)(n.h3,{id:"--description",children:"- Description"}),"\n",(0,o.jsx)(n.h3,{id:"--workingdirectory",children:"- WorkingDirectory"}),"\n",(0,o.jsx)(n.h3,{id:"--windowstyle",children:"- WindowStyle"}),"\n",(0,o.jsx)(n.h3,{id:"--hotkey",children:"- Hotkey"}),"\n",(0,o.jsx)(n.h3,{id:"--iconlocation",children:"- IconLocation"}),"\n",(0,o.jsx)(n.h3,{id:"--iconindex",children:"- IconIndex"}),"\n",(0,o.jsx)(n.h3,{id:"--runasadmin",children:"- RunAsAdmin"}),"\n",(0,o.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,o.jsx)(n.p,{children:"Url shortcuts only support TargetPath, IconLocation and IconIndex."}),"\n",(0,o.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3883:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var o=t(959);const i={},r=o.createContext(i);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);