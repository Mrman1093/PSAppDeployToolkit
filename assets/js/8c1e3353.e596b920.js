"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[8877],{3914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var i=n(1527),r=n(6274);const a={id:"Set-ActiveSetup",title:"Set-ActiveSetup",description:'Help page for the "Set-ActiveSetup" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},s=void 0,l={id:"reference/functions/Set-ActiveSetup",title:"Set-ActiveSetup",description:'Help page for the "Set-ActiveSetup" command',source:"@site/docs/reference/functions/Set-ActiveSetup.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Set-ActiveSetup",permalink:"/docs/reference/functions/Set-ActiveSetup",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Set-ActiveSetup",title:"Set-ActiveSetup",description:'Help page for the "Set-ActiveSetup" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Send-Keys",permalink:"/docs/reference/functions/Send-Keys"},next:{title:"Set-DeferHistory",permalink:"/docs/reference/functions/Set-DeferHistory"}},c={},o=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"Create",id:"create",level:3},{value:"Purge",id:"purge",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-StubExePath",id:"-stubexepath",level:3},{value:"-Arguments",id:"-arguments",level:3},{value:"-Description",id:"-description",level:3},{value:"-Key",id:"-key",level:3},{value:"-Version",id:"-version",level:3},{value:"-Locale",id:"-locale",level:3},{value:"-DisableActiveSetup",id:"-disableactivesetup",level:3},{value:"-PurgeActiveSetupKey",id:"-purgeactivesetupkey",level:3},{value:"-ExecuteForCurrentUser",id:"-executeforcurrentuser",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.Boolean",id:"systemboolean",level:3},{value:"Returns $true if Active Setup entry was created or updated, $false if Active Setup entry was not created or updated.",id:"returns-true-if-active-setup-entry-was-created-or-updated-false-if-active-setup-entry-was-not-created-or-updated",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,i.jsx)(t.p,{children:"Creates an Active Setup entry in the registry to execute a file for each user upon login."}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,i.jsx)(t.h3,{id:"create",children:"Create"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"Set-ActiveSetup -StubExePath <String> [-Arguments <String>] [-Description <String>] [-Key <String>]\n [-Version <String>] [-Locale <String>] [-DisableActiveSetup] [-ExecuteForCurrentUser <Boolean>]\n [-ContinueOnError <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"purge",children:"Purge"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"Set-ActiveSetup [-Key <String>] [-PurgeActiveSetupKey] [-ContinueOnError <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,i.jsx)(t.p,{children:'Active Setup allows handling of per-user changes registry/file changes upon login.\nA registry key is created in the HKLM registry hive which gets replicated to the HKCU hive when a user logs in.\nIf the "Version" value of the Active Setup entry in HKLM is higher than the version value in HKCU, the file referenced in "StubPath" is executed.'}),"\n",(0,i.jsx)(t.p,{children:"This Function:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Creates the registry entries in HKLM",":SOFTWARE","\\Microsoft\\Active Setup\\Installed Components$installName."]}),"\n",(0,i.jsx)(t.li,{children:"Creates StubPath value depending on the file extension of the $StubExePath parameter."}),"\n",(0,i.jsx)(t.li,{children:"Handles Version value with YYYYMMDDHHMMSS granularity to permit re-installs on the same day and still trigger Active Setup after Version increase."}),"\n",(0,i.jsx)(t.li,{children:"Copies/overwrites the StubPath file to $StubExePath destination path if file exists in 'Files' subdirectory of script directory."}),"\n",(0,i.jsx)(t.li,{children:"Executes the StubPath file for the current user based on $ExecuteForCurrentUser (no need to logout/login to trigger Active Setup)."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,i.jsx)(t.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"Set-ActiveSetup -StubExePath 'C:\\Users\\Public\\Company\\ProgramUserConfig.vbs' -Arguments '/Silent' -Description 'Program User Config' -Key 'ProgramUserConfig' -Locale 'en'\n"})}),"\n",(0,i.jsx)(t.h3,{id:"example-2",children:"EXAMPLE 2"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:'Set-ActiveSetup -StubExePath "$envWinDir\\regedit.exe" -Arguments "/S `"%SystemDrive%\\Program Files (x86)\\PS App Deploy\\PSAppDeployHKCUSettings.reg`"" -Description \'PS App Deploy Config\' -Key \'PS_App_Deploy_Config\' -ContinueOnError $true\n'})}),"\n",(0,i.jsx)(t.h3,{id:"example-3",children:"EXAMPLE 3"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"Set-ActiveSetup -Key 'ProgramUserConfig' -PurgeActiveSetupKey\n"})}),"\n",(0,i.jsx)(t.p,{children:'Deletes "ProgramUserConfig" active setup entry from all registry hives.'}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,i.jsx)(t.h3,{id:"-stubexepath",children:"-StubExePath"}),"\n",(0,i.jsx)(t.p,{children:"Use this parameter to specify the destination path of the file that will be executed upon user login."}),"\n",(0,i.jsx)(t.p,{children:"Note: Place the file you want users to execute in the '\\Files' subdirectory of the script directory and the toolkit will install it to the path specificed in this parameter."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"Type: String\nParameter Sets: Create\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(t.h3,{id:"-arguments",children:"-Arguments"}),"\n",(0,i.jsx)(t.p,{children:"Arguments to pass to the file being executed."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"Type: String\nParameter Sets: Create\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(t.h3,{id:"-description",children:"-Description"}),"\n",(0,i.jsx)(t.p,{children:'Description for the Active Setup.\nUsers will see "Setting up personalized settings for: $Description" at logon.\nDefault is: $installName.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"Type: String\nParameter Sets: Create\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: $installName\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(t.h3,{id:"-key",children:"-Key"}),"\n",(0,i.jsx)(t.p,{children:"Name of the registry key for the Active Setup entry.\nDefault is: $installName."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: $installName\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(t.h3,{id:"-version",children:"-Version"}),"\n",(0,i.jsx)(t.p,{children:"Optional.\nSpecify version for Active setup entry.\nActive Setup is not triggered if Version value has more than 8 consecutive digits.\nUse commas to get around this limitation.\nDefault: YYYYMMDDHHMMSS"}),"\n",(0,i.jsx)(t.p,{children:"Note:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Do not use this parameter if it is not necessary.\nPSADT will handle this parameter automatically using the time of the installation as the version number."}),"\n",(0,i.jsx)(t.li,{children:"In Windows 10, Scripts and EXEs might be blocked by AppLocker.\nEnsure that the path given to -StubExePath will permit end users to run Scripts and EXEs unelevated."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"Type: String\nParameter Sets: Create\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: ((Get-Date -Format 'yyMM,ddHH,mmss').ToString())\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(t.h3,{id:"-locale",children:"-Locale"}),"\n",(0,i.jsx)(t.p,{children:"Optional.\nArbitrary string used to specify the installation language of the file being executed.\nNot replicated to HKCU."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"Type: String\nParameter Sets: Create\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(t.h3,{id:"-disableactivesetup",children:"-DisableActiveSetup"}),"\n",(0,i.jsx)(t.p,{children:"Disables the Active Setup entry so that the StubPath file will not be executed.\nThis also disables -ExecuteForCurrentUser"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: Create\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(t.h3,{id:"-purgeactivesetupkey",children:"-PurgeActiveSetupKey"}),"\n",(0,i.jsx)(t.p,{children:"Remove Active Setup entry from HKLM registry hive.\nWill also load each logon user's HKCU registry hive to remove Active Setup entry.\nFunction returns after purging."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: Purge\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(t.h3,{id:"-executeforcurrentuser",children:"-ExecuteForCurrentUser"}),"\n",(0,i.jsx)(t.p,{children:"Specifies whether the StubExePath should be executed for the current user.\nSince this user is already logged in, the user won't have the application started without logging out and logging back in.\nDefault: $true"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: Create\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(t.h3,{id:"-continueonerror",children:"-ContinueOnError"}),"\n",(0,i.jsx)(t.p,{children:"Continue if an error is encountered.\nDefault is: $true."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(t.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,i.jsxs)(t.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,i.jsx)(t.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,i.jsx)(t.h3,{id:"none",children:"None"}),"\n",(0,i.jsx)(t.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,i.jsx)(t.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,i.jsx)(t.h3,{id:"systemboolean",children:"System.Boolean"}),"\n",(0,i.jsx)(t.h3,{id:"returns-true-if-active-setup-entry-was-created-or-updated-false-if-active-setup-entry-was-not-created-or-updated",children:"Returns $true if Active Setup entry was created or updated, $false if Active Setup entry was not created or updated."}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"NOTES"}),"\n",(0,i.jsx)(t.p,{children:"Original code borrowed from: Denis St-Pierre (Ottawa, Canada), Todd MacNaught (Ottawa, Canada)"}),"\n",(0,i.jsx)(t.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},6274:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var i=n(959);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);