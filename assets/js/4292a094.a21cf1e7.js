"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[2775],{4726:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(1527),r=t(6274);const l={id:"Get-MsiTableProperty",title:"Get-MsiTableProperty",description:'Help page for the "Get-MsiTableProperty" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},i=void 0,o={id:"reference/functions/Get-MsiTableProperty",title:"Get-MsiTableProperty",description:'Help page for the "Get-MsiTableProperty" command',source:"@site/docs/reference/functions/Get-MsiTableProperty.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Get-MsiTableProperty",permalink:"/docs/reference/functions/Get-MsiTableProperty",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Get-MsiTableProperty",title:"Get-MsiTableProperty",description:'Help page for the "Get-MsiTableProperty" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Get-MsiExitCodeMessage",permalink:"/docs/reference/functions/Get-MsiExitCodeMessage"},next:{title:"Get-ObjectProperty",permalink:"/docs/reference/functions/Get-ObjectProperty"}},s={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"TableInfo (Default)",id:"tableinfo-default",level:3},{value:"SummaryInfo",id:"summaryinfo",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Path",id:"-path",level:3},{value:"-TransformPath",id:"-transformpath",level:3},{value:"-Table",id:"-table",level:3},{value:"-TablePropertyNameColumnNum",id:"-tablepropertynamecolumnnum",level:3},{value:"-TablePropertyValueColumnNum",id:"-tablepropertyvaluecolumnnum",level:3},{value:"-GetSummaryInformation",id:"-getsummaryinformation",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.Management.Automation.PSObject",id:"systemmanagementautomationpsobject",level:3},{value:"Returns a custom object with the following properties: &#39;Name&#39; and &#39;Value&#39;.",id:"returns-a-custom-object-with-the-following-properties-name-and-value",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,a.jsx)(n.p,{children:"Get all of the properties from a Windows Installer database table or the Summary Information stream and return as a custom object."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,a.jsx)(n.h3,{id:"tableinfo-default",children:"TableInfo (Default)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"Get-MsiTableProperty -Path <String> [-TransformPath <String[]>] [-Table <String>]\n [-TablePropertyNameColumnNum <Int32>] [-TablePropertyValueColumnNum <Int32>] [-ContinueOnError <Boolean>]\n [<CommonParameters>]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"summaryinfo",children:"SummaryInfo"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"Get-MsiTableProperty -Path <String> [-TransformPath <String[]>] [-GetSummaryInformation]\n [-ContinueOnError <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,a.jsx)(n.p,{children:"Use the Windows Installer object to read all of the properties from a Windows Installer database table or the Summary Information stream."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,a.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"Get-MsiTableProperty -Path 'C:\\Package\\AppDeploy.msi' -TransformPath 'C:\\Package\\AppDeploy.mst'\n"})}),"\n",(0,a.jsx)(n.p,{children:"Retrieve all of the properties from the default 'Property' table."}),"\n",(0,a.jsx)(n.h3,{id:"example-2",children:"EXAMPLE 2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"Get-MsiTableProperty -Path 'C:\\Package\\AppDeploy.msi' -TransformPath 'C:\\Package\\AppDeploy.mst' -Table 'Property' | Select-Object -ExpandProperty ProductCode\n"})}),"\n",(0,a.jsx)(n.p,{children:"Retrieve all of the properties from the 'Property' table and then pipe to Select-Object to select the ProductCode property."}),"\n",(0,a.jsx)(n.h3,{id:"example-3",children:"EXAMPLE 3"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"Get-MsiTableProperty -Path 'C:\\Package\\AppDeploy.msi' -GetSummaryInformation\n"})}),"\n",(0,a.jsx)(n.p,{children:"Retrieves the Summary Information for the Windows Installer database."}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,a.jsx)(n.h3,{id:"-path",children:"-Path"}),"\n",(0,a.jsx)(n.p,{children:"The fully qualified path to an database file.\nSupports .msi and .msp files."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-transformpath",children:"-TransformPath"}),"\n",(0,a.jsx)(n.p,{children:"The fully qualified path to a list of MST file(s) which should be applied to the MSI file."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: String[]\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-table",children:"-Table"}),"\n",(0,a.jsx)(n.p,{children:"The name of the the MSI table from which all of the properties must be retrieved.\nDefault is: 'Property'."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: TableInfo\nAliases:\n\nRequired: False\nPosition: Named\n        Default value: $(If ([IO.Path]::GetExtension($Path) -eq '.msi') {\n                'Property'\n            }\n            Else {\n                'MsiPatchMetadata'\n            })\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-tablepropertynamecolumnnum",children:"-TablePropertyNameColumnNum"}),"\n",(0,a.jsx)(n.p,{children:"Specify the table column number which contains the name of the properties.\nDefault is: 1 for MSIs and 2 for MSPs."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: Int32\nParameter Sets: TableInfo\nAliases:\n\nRequired: False\nPosition: Named\n        Default value: $(If ([IO.Path]::GetExtension($Path) -eq '.msi') {\n                1\n            }\n            Else {\n                2\n            })\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-tablepropertyvaluecolumnnum",children:"-TablePropertyValueColumnNum"}),"\n",(0,a.jsx)(n.p,{children:"Specify the table column number which contains the value of the properties.\nDefault is: 2 for MSIs and 3 for MSPs."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: Int32\nParameter Sets: TableInfo\nAliases:\n\nRequired: False\nPosition: Named\n        Default value: $(If ([IO.Path]::GetExtension($Path) -eq '.msi') {\n                2\n            }\n            Else {\n                3\n            })\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-getsummaryinformation",children:"-GetSummaryInformation"}),"\n",(0,a.jsx)(n.p,{children:"Retrieves the Summary Information for the Windows Installer database."}),"\n",(0,a.jsxs)(n.p,{children:["Summary Information property descriptions: ",(0,a.jsx)(n.a,{href:"https://msdn.microsoft.com/en-us/library/aa372049(v=vs.85).aspx",children:"https://msdn.microsoft.com/en-us/library/aa372049(v=vs.85).aspx"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: SummaryInfo\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-continueonerror",children:"-ContinueOnError"}),"\n",(0,a.jsx)(n.p,{children:"Continue if an error is encountered.\nDefault is: $true."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,a.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,a.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,a.jsx)(n.h3,{id:"none",children:"None"}),"\n",(0,a.jsx)(n.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,a.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,a.jsx)(n.h3,{id:"systemmanagementautomationpsobject",children:"System.Management.Automation.PSObject"}),"\n",(0,a.jsx)(n.h3,{id:"returns-a-custom-object-with-the-following-properties-name-and-value",children:"Returns a custom object with the following properties: 'Name' and 'Value'."}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,a.jsx)(n.p,{children:"This is an internal script function and should typically not be called directly."}),"\n",(0,a.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},6274:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(959);const r={},l=a.createContext(r);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);