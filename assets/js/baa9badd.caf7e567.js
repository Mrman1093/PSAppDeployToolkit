"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[6993],{3084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(1527),r=n(6274);const s={id:"Test-Battery",title:"Test-Battery",description:'Help page for the "Test-Battery" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},a=void 0,l={id:"reference/functions/Test-Battery",title:"Test-Battery",description:'Help page for the "Test-Battery" command',source:"@site/docs/reference/functions/Test-Battery.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Test-Battery",permalink:"/docs/reference/functions/Test-Battery",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Test-Battery",title:"Test-Battery",description:'Help page for the "Test-Battery" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Stop-ServiceAndDependencies",permalink:"/docs/reference/functions/Stop-ServiceAndDependencies"},next:{title:"Test-IsMutexAvailable",permalink:"/docs/reference/functions/Test-IsMutexAvailable"}},o={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-PassThru",id:"-passthru",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.Hashtable.",id:"systemhashtable",level:3},{value:"Returns a hashtable containing the following properties",id:"returns-a-hashtable-containing-the-following-properties",level:3},{value:"- IsLaptop",id:"--islaptop",level:3},{value:"- IsUsingACPower",id:"--isusingacpower",level:3},{value:"- ACPowerLineStatus",id:"--acpowerlinestatus",level:3},{value:"- BatteryChargeStatus",id:"--batterychargestatus",level:3},{value:"- BatteryLifePercent",id:"--batterylifepercent",level:3},{value:"- BatteryLifeRemaining",id:"--batteryliferemaining",level:3},{value:"- BatteryFullLifetime",id:"--batteryfulllifetime",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,i.jsx)(t.p,{children:"Tests whether the local machine is running on AC power or not."}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"Test-Battery [-PassThru] [<CommonParameters>]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,i.jsx)(t.p,{children:"Tests whether the local machine is running on AC power and returns true/false.\nFor detailed information, use -PassThru option."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,i.jsx)(t.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"Test-Battery\n"})}),"\n",(0,i.jsx)(t.h3,{id:"example-2",children:"EXAMPLE 2"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"(Test-Battery -PassThru).IsLaptop\n"})}),"\n",(0,i.jsx)(t.p,{children:"Determines if the current system is a laptop or not."}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,i.jsx)(t.h3,{id:"-passthru",children:"-PassThru"}),"\n",(0,i.jsx)(t.p,{children:"Outputs a hashtable containing the following properties:"}),"\n",(0,i.jsx)(t.p,{children:"IsLaptop, IsUsingACPower, ACPowerLineStatus, BatteryChargeStatus, BatteryLifePercent, BatteryLifeRemaining, BatteryFullLifetime"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(t.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,i.jsxs)(t.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,i.jsx)(t.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,i.jsx)(t.h3,{id:"none",children:"None"}),"\n",(0,i.jsx)(t.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,i.jsx)(t.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,i.jsx)(t.h3,{id:"systemhashtable",children:"System.Hashtable."}),"\n",(0,i.jsx)(t.h3,{id:"returns-a-hashtable-containing-the-following-properties",children:"Returns a hashtable containing the following properties"}),"\n",(0,i.jsx)(t.h3,{id:"--islaptop",children:"- IsLaptop"}),"\n",(0,i.jsx)(t.h3,{id:"--isusingacpower",children:"- IsUsingACPower"}),"\n",(0,i.jsx)(t.h3,{id:"--acpowerlinestatus",children:"- ACPowerLineStatus"}),"\n",(0,i.jsx)(t.h3,{id:"--batterychargestatus",children:"- BatteryChargeStatus"}),"\n",(0,i.jsx)(t.h3,{id:"--batterylifepercent",children:"- BatteryLifePercent"}),"\n",(0,i.jsx)(t.h3,{id:"--batteryliferemaining",children:"- BatteryLifeRemaining"}),"\n",(0,i.jsx)(t.h3,{id:"--batteryfulllifetime",children:"- BatteryFullLifetime"}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"NOTES"}),"\n",(0,i.jsx)(t.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6274:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var i=n(959);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);