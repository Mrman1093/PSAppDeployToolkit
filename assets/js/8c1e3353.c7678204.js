"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[8877],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(8957),a=(n(9496),n(9613));const i={id:"Set-ActiveSetup",title:"Set-ActiveSetup",description:'Help page for the "Set-ActiveSetup" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},l=void 0,o={unversionedId:"reference/functions/Set-ActiveSetup",id:"reference/functions/Set-ActiveSetup",title:"Set-ActiveSetup",description:'Help page for the "Set-ActiveSetup" command',source:"@site/docs/reference/functions/Set-ActiveSetup.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Set-ActiveSetup",permalink:"/docs/reference/functions/Set-ActiveSetup",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Set-ActiveSetup",title:"Set-ActiveSetup",description:'Help page for the "Set-ActiveSetup" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Send-Keys",permalink:"/docs/reference/functions/Send-Keys"},next:{title:"Set-DeferHistory",permalink:"/docs/reference/functions/Set-DeferHistory"}},s={},u=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"Create",id:"create",level:3},{value:"Purge",id:"purge",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-StubExePath",id:"-stubexepath",level:3},{value:"-Arguments",id:"-arguments",level:3},{value:"-Description",id:"-description",level:3},{value:"-Key",id:"-key",level:3},{value:"-Version",id:"-version",level:3},{value:"-Locale",id:"-locale",level:3},{value:"-DisableActiveSetup",id:"-disableactivesetup",level:3},{value:"-PurgeActiveSetupKey",id:"-purgeactivesetupkey",level:3},{value:"-ExecuteForCurrentUser",id:"-executeforcurrentuser",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.Boolean",id:"systemboolean",level:3},{value:"Returns $true if Active Setup entry was created or updated, $false if Active Setup entry was not created or updated.",id:"returns-true-if-active-setup-entry-was-created-or-updated-false-if-active-setup-entry-was-not-created-or-updated",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,"Creates an Active Setup entry in the registry to execute a file for each user upon login."),(0,a.kt)("h2",{id:"syntax"},"SYNTAX"),(0,a.kt)("h3",{id:"create"},"Create"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ActiveSetup -StubExePath <String> [-Arguments <String>] [-Description <String>] [-Key <String>]\n [-Version <String>] [-Locale <String>] [-DisableActiveSetup] [-ExecuteForCurrentUser <Boolean>]\n [-ContinueOnError <Boolean>] [<CommonParameters>]\n")),(0,a.kt)("h3",{id:"purge"},"Purge"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ActiveSetup [-Key <String>] [-PurgeActiveSetupKey] [-ContinueOnError <Boolean>] [<CommonParameters>]\n")),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,'Active Setup allows handling of per-user changes registry/file changes upon login.\nA registry key is created in the HKLM registry hive which gets replicated to the HKCU hive when a user logs in.\nIf the "Version" value of the Active Setup entry in HKLM is higher than the version value in HKCU, the file referenced in "StubPath" is executed.'),(0,a.kt)("p",null,"This Function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Creates the registry entries in HKLM:SOFTWARE\\Microsoft\\Active Setup\\Installed Components\\$installName.\n- Creates StubPath value depending on the file extension of the $StubExePath parameter.\n- Handles Version value with YYYYMMDDHHMMSS granularity to permit re-installs on the same day and still trigger Active Setup after Version increase.\n- Copies/overwrites the StubPath file to $StubExePath destination path if file exists in 'Files' subdirectory of script directory.\n- Executes the StubPath file for the current user based on $ExecuteForCurrentUser (no need to logout/login to trigger Active Setup).\n")),(0,a.kt)("h2",{id:"examples"},"EXAMPLES"),(0,a.kt)("h3",{id:"example-1"},"EXAMPLE 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ActiveSetup -StubExePath 'C:\\Users\\Public\\Company\\ProgramUserConfig.vbs' -Arguments '/Silent' -Description 'Program User Config' -Key 'ProgramUserConfig' -Locale 'en'\n")),(0,a.kt)("h3",{id:"example-2"},"EXAMPLE 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'Set-ActiveSetup -StubExePath "$envWinDir\\regedit.exe" -Arguments "/S `"%SystemDrive%\\Program Files (x86)\\PS App Deploy\\PSAppDeployHKCUSettings.reg`"" -Description \'PS App Deploy Config\' -Key \'PS_App_Deploy_Config\' -ContinueOnError $true\n')),(0,a.kt)("h3",{id:"example-3"},"EXAMPLE 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ActiveSetup -Key 'ProgramUserConfig' -PurgeActiveSetupKey\n")),(0,a.kt)("p",null,'Deletes "ProgramUserConfig" active setup entry from all registry hives.'),(0,a.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,a.kt)("h3",{id:"-stubexepath"},"-StubExePath"),(0,a.kt)("p",null,"Use this parameter to specify the destination path of the file that will be executed upon user login."),(0,a.kt)("p",null,"Note: Place the file you want users to execute in the '\\Files' subdirectory of the script directory and the toolkit will install it to the path specificed in this parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: Create\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-arguments"},"-Arguments"),(0,a.kt)("p",null,"Arguments to pass to the file being executed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: Create\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-description"},"-Description"),(0,a.kt)("p",null,'Description for the Active Setup.\nUsers will see "Setting up personalized settings for: $Description" at logon.\nDefault is: $installName.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: Create\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: $installName\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-key"},"-Key"),(0,a.kt)("p",null,"Name of the registry key for the Active Setup entry.\nDefault is: $installName."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: $installName\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-version"},"-Version"),(0,a.kt)("p",null,"Optional.\nSpecify version for Active setup entry.\nActive Setup is not triggered if Version value has more than 8 consecutive digits.\nUse commas to get around this limitation.\nDefault: YYYYMMDDHHMMSS"),(0,a.kt)("p",null,"Note: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Do not use this parameter if it is not necessary.\n")),(0,a.kt)("p",null,"PSADT will handle this parameter automatically using the time of the installation as the version number."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- In Windows 10, Scripts and EXEs might be blocked by AppLocker.\n")),(0,a.kt)("p",null,"Ensure that the path given to -StubExePath will permit end users to run Scripts and EXEs unelevated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: Create\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: ((Get-Date -Format 'yyMM,ddHH,mmss').ToString())\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-locale"},"-Locale"),(0,a.kt)("p",null,"Optional.\nArbitrary string used to specify the installation language of the file being executed.\nNot replicated to HKCU."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: Create\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-disableactivesetup"},"-DisableActiveSetup"),(0,a.kt)("p",null,"Disables the Active Setup entry so that the StubPath file will not be executed.\nThis also disables -ExecuteForCurrentUser"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: Create\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-purgeactivesetupkey"},"-PurgeActiveSetupKey"),(0,a.kt)("p",null,"Remove Active Setup entry from HKLM registry hive.\nWill also load each logon user's HKCU registry hive to remove Active Setup entry.\nFunction returns after purging."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: Purge\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-executeforcurrentuser"},"-ExecuteForCurrentUser"),(0,a.kt)("p",null,"Specifies whether the StubExePath should be executed for the current user.\nSince this user is already logged in, the user won't have the application started without logging out and logging back in.\nDefault: $true"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Boolean\nParameter Sets: Create\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-continueonerror"},"-ContinueOnError"),(0,a.kt)("p",null,"Continue if an error is encountered.\nDefault is: $true."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,a.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,a.kt)("h2",{id:"inputs"},"INPUTS"),(0,a.kt)("h3",{id:"none"},"None"),(0,a.kt)("h3",{id:"you-cannot-pipe-objects-to-this-function"},"You cannot pipe objects to this function."),(0,a.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,a.kt)("h3",{id:"systemboolean"},"System.Boolean"),(0,a.kt)("h3",{id:"returns-true-if-active-setup-entry-was-created-or-updated-false-if-active-setup-entry-was-not-created-or-updated"},"Returns $true if Active Setup entry was created or updated, $false if Active Setup entry was not created or updated."),(0,a.kt)("h2",{id:"notes"},"NOTES"),(0,a.kt)("p",null,"Original code borrowed from: Denis St-Pierre (Ottawa, Canada), Todd MacNaught (Ottawa, Canada)"),(0,a.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://psappdeploytoolkit.com"},"https://psappdeploytoolkit.com")))}d.isMDXComponent=!0}}]);