"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[1379],{3732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(1527),l=t(6274);const r={id:"Get-SchedulerTask",title:"Get-SchedulerTask",description:'Help page for the "Get-SchedulerTask" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},i=void 0,a={id:"reference/functions/Get-SchedulerTask",title:"Get-SchedulerTask",description:'Help page for the "Get-SchedulerTask" command',source:"@site/docs/reference/functions/Get-SchedulerTask.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Get-SchedulerTask",permalink:"/docs/reference/functions/Get-SchedulerTask",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Get-SchedulerTask",title:"Get-SchedulerTask",description:'Help page for the "Get-SchedulerTask" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Get-RunningProcesses",permalink:"/docs/reference/functions/Get-RunningProcesses"},next:{title:"Get-ServiceStartMode",permalink:"/docs/reference/functions/Get-ServiceStartMode"}},o={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-TaskName",id:"-taskname",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"PSOjbect. This function returns a PSObject with all scheduled task properties.",id:"psojbect-this-function-returns-a-psobject-with-all-scheduled-task-properties",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,s.jsx)(n.p,{children:"Retrieve all details for scheduled tasks on the local computer."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Get-SchedulerTask [[-TaskName] <String>] [[-ContinueOnError] <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,s.jsx)(n.p,{children:"Retrieve all details for scheduled tasks on the local computer using schtasks.exe.\nAll property names have spaces and colons removed."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Get-SchedulerTask\n"})}),"\n",(0,s.jsx)(n.p,{children:"To display a list of all scheduled task properties."}),"\n",(0,s.jsx)(n.h3,{id:"example-2",children:"EXAMPLE 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Get-SchedulerTask | Out-GridView\n"})}),"\n",(0,s.jsx)(n.p,{children:"To display a grid view of all scheduled task properties."}),"\n",(0,s.jsx)(n.h3,{id:"example-3",children:"EXAMPLE 3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Get-SchedulerTask | Select-Object -Property TaskName\n"})}),"\n",(0,s.jsx)(n.p,{children:"To display a list of all scheduled task names."}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,s.jsx)(n.h3,{id:"-taskname",children:"-TaskName"}),"\n",(0,s.jsx)(n.p,{children:"Specify the name of the scheduled task to retrieve details for.\nUses regex match to find scheduled task."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,s.jsx)(n.h3,{id:"-continueonerror",children:"-ContinueOnError"}),"\n",(0,s.jsx)(n.p,{children:"Continue if an error is encountered.\nDefault: $true."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,s.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,s.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,s.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,s.jsx)(n.h3,{id:"none",children:"None"}),"\n",(0,s.jsx)(n.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,s.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,s.jsx)(n.h3,{id:"psojbect-this-function-returns-a-psobject-with-all-scheduled-task-properties",children:"PSOjbect. This function returns a PSObject with all scheduled task properties."}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,s.jsx)(n.p,{children:"This function has an alias: Get-ScheduledTask if Get-ScheduledTask is not defined"}),"\n",(0,s.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6274:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(959);const l={},r=s.createContext(l);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);