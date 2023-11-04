"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[4893],{308:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=i(1527),o=i(6274);const r={id:"Update-SessionEnvironmentVariables",title:"Update-SessionEnvironmentVariables",description:'Help page for the "Update-SessionEnvironmentVariables" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},s=void 0,a={id:"reference/functions/Update-SessionEnvironmentVariables",title:"Update-SessionEnvironmentVariables",description:'Help page for the "Update-SessionEnvironmentVariables" command',source:"@site/docs/reference/functions/Update-SessionEnvironmentVariables.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Update-SessionEnvironmentVariables",permalink:"/docs/reference/functions/Update-SessionEnvironmentVariables",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Update-SessionEnvironmentVariables",title:"Update-SessionEnvironmentVariables",description:'Help page for the "Update-SessionEnvironmentVariables" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Update-GroupPolicy",permalink:"/docs/reference/functions/Update-GroupPolicy"},next:{title:"Write-FunctionHeaderOrFooter",permalink:"/docs/reference/functions/Write-FunctionHeaderOrFooter"}},l={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-LoadLoggedOnUserEnvironmentVariables",id:"-loadloggedonuserenvironmentvariables",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"None. This function does not return objects.",id:"none-this-function-does-not-return-objects",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,t.jsx)(n.p,{children:"Updates the environment variables for the current PowerShell session with any environment variable changes that may have occurred during script execution."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"Update-SessionEnvironmentVariables [-LoadLoggedOnUserEnvironmentVariables] [[-ContinueOnError] <Boolean>]\n [<CommonParameters>]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,t.jsx)(n.p,{children:"Environment variable changes that take place during script execution are not visible to the current PowerShell session."}),"\n",(0,t.jsx)(n.p,{children:"Use this function to refresh the current PowerShell session with all environment variable settings."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"Update-SessionEnvironmentVariables\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,t.jsx)(n.h3,{id:"-loadloggedonuserenvironmentvariables",children:"-LoadLoggedOnUserEnvironmentVariables"}),"\n",(0,t.jsx)(n.p,{children:"If script is running in SYSTEM context, this option allows loading environment variables from the active console user.\nIf no console user exists but users are logged in, such as on terminal servers, then the first logged-in non-console user."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,t.jsx)(n.h3,{id:"-continueonerror",children:"-ContinueOnError"}),"\n",(0,t.jsx)(n.p,{children:"Continue if an error is encountered.\nDefault is: $true."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 1\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,t.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,t.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,t.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,t.jsx)(n.h3,{id:"none",children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,t.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,t.jsx)(n.h3,{id:"none-this-function-does-not-return-objects",children:"None. This function does not return objects."}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,t.jsx)(n.p,{children:"This function has an alias: Refresh-SessionEnvironmentVariables"}),"\n",(0,t.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6274:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(959);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);