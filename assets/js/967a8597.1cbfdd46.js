"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[9445],{7968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(1527),i=t(6274);const r={id:"Invoke-SCCMTask",title:"Invoke-SCCMTask",description:'Help page for the "Invoke-SCCMTask" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},s=void 0,a={id:"reference/functions/Invoke-SCCMTask",title:"Invoke-SCCMTask",description:'Help page for the "Invoke-SCCMTask" command',source:"@site/docs/reference/functions/Invoke-SCCMTask.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Invoke-SCCMTask",permalink:"/docs/reference/functions/Invoke-SCCMTask",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Invoke-SCCMTask",title:"Invoke-SCCMTask",description:'Help page for the "Invoke-SCCMTask" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Invoke-RegisterOrUnregisterDLL",permalink:"/docs/reference/functions/Invoke-RegisterOrUnregisterDLL"},next:{title:"New-Folder",permalink:"/docs/reference/functions/New-Folder"}},l={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-ScheduleID",id:"-scheduleid",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"None",id:"none-1",level:3},{value:"This function does not return any objects.",id:"this-function-does-not-return-any-objects",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,o.jsx)(n.p,{children:"Triggers SCCM to invoke the requested schedule task id."}),"\n",(0,o.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"Invoke-SCCMTask [-ScheduleID] <String> [[-ContinueOnError] <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,o.jsx)(n.p,{children:"Triggers SCCM to invoke the requested schedule task id."}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,o.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"Invoke-SCCMTask 'SoftwareUpdatesScan'\n"})}),"\n",(0,o.jsx)(n.h3,{id:"example-2",children:"EXAMPLE 2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"Invoke-SCCMTask\n"})}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,o.jsx)(n.h3,{id:"-scheduleid",children:"-ScheduleID"}),"\n",(0,o.jsx)(n.p,{children:"Name of the schedule id to trigger."}),"\n",(0,o.jsx)(n.p,{children:"Options: HardwareInventory, SoftwareInventory, HeartbeatDiscovery, SoftwareInventoryFileCollection, RequestMachinePolicy, EvaluateMachinePolicy,\nLocationServicesCleanup, SoftwareMeteringReport, SourceUpdate, PolicyAgentCleanup, RequestMachinePolicy2, CertificateMaintenance, PeerDistributionPointStatus,\nPeerDistributionPointProvisioning, ComplianceIntervalEnforcement, SoftwareUpdatesAgentAssignmentEvaluation, UploadStateMessage, StateMessageManager,\nSoftwareUpdatesScan, AMTProvisionCycle, UpdateStorePolicy, StateSystemBulkSend, ApplicationManagerPolicyAction, PowerManagementStartSummarizer"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-continueonerror",children:"-ContinueOnError"}),"\n",(0,o.jsx)(n.p,{children:"Continue if an error is encountered.\nDefault is: $true."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,o.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,o.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,o.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,o.jsx)(n.h3,{id:"none",children:"None"}),"\n",(0,o.jsx)(n.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,o.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,o.jsx)(n.h3,{id:"none-1",children:"None"}),"\n",(0,o.jsx)(n.h3,{id:"this-function-does-not-return-any-objects",children:"This function does not return any objects."}),"\n",(0,o.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,o.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6274:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(959);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);