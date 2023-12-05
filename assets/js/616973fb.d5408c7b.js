"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[6969],{6830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(1527),i=t(3883);const r={id:"Set-Shortcut",title:"Set-Shortcut",description:'Help page for the "Set-Shortcut" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},l=void 0,o={id:"reference/functions/Set-Shortcut",title:"Set-Shortcut",description:'Help page for the "Set-Shortcut" command',source:"@site/docs/reference/functions/Set-Shortcut.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Set-Shortcut",permalink:"/docs/reference/functions/Set-Shortcut",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Set-Shortcut",title:"Set-Shortcut",description:'Help page for the "Set-Shortcut" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Set-ServiceStartMode",permalink:"/docs/reference/functions/Set-ServiceStartMode"},next:{title:"Show-BalloonTip",permalink:"/docs/reference/functions/Show-BalloonTip"}},s={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"Default (Default)",id:"default-default",level:3},{value:"Pipeline",id:"pipeline",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Path",id:"-path",level:3},{value:"-PathHash",id:"-pathhash",level:3},{value:"-TargetPath",id:"-targetpath",level:3},{value:"-Arguments",id:"-arguments",level:3},{value:"-IconLocation",id:"-iconlocation",level:3},{value:"-IconIndex",id:"-iconindex",level:3},{value:"-Description",id:"-description",level:3},{value:"-WorkingDirectory",id:"-workingdirectory",level:3},{value:"-WindowStyle",id:"-windowstyle",level:3},{value:"-RunAsAdmin",id:"-runasadmin",level:3},{value:"-Hotkey",id:"-hotkey",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"PSOjbect",id:"psojbect",level:3},{value:"Path to the shortcut to be changed or a hashtable of parameters to be changed",id:"path-to-the-shortcut-to-be-changed-or-a-hashtable-of-parameters-to-be-changed",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"None",id:"none",level:3},{value:"This function does not generate any output.",id:"this-function-does-not-generate-any-output",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,a.jsx)(n.p,{children:"Modifies a .lnk or .url type shortcut"}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,a.jsx)(n.h3,{id:"default-default",children:"Default (Default)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"Set-Shortcut [-Path] <String> [-TargetPath <String>] [-Arguments <String>] [-IconLocation <String>]\n [-IconIndex <String>] [-Description <String>] [-WorkingDirectory <String>] [-WindowStyle <String>]\n [-RunAsAdmin <Boolean>] [-Hotkey <String>] [-ContinueOnError <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"pipeline",children:"Pipeline"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:"Set-Shortcut [-PathHash] <Hashtable> [-TargetPath <String>] [-Arguments <String>] [-IconLocation <String>]\n [-IconIndex <String>] [-Description <String>] [-WorkingDirectory <String>] [-WindowStyle <String>]\n [-RunAsAdmin <Boolean>] [-Hotkey <String>] [-ContinueOnError <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,a.jsx)(n.p,{children:"Modifies a shortcut - .lnk or .url file, with configurable options."}),"\n",(0,a.jsx)(n.p,{children:"Only specify the parameters that you want to change."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,a.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:'Set-Shortcut -Path "$envProgramData\\Microsoft\\Windows\\Start Menu\\My Shortcut.lnk" -TargetPath "$envWinDir\\System32\\notepad.exe" -IconLocation "$envWinDir\\System32\\notepad.exe" -IconIndex 0 -Description \'Notepad\' -WorkingDirectory "$envHomeDrive\\$envHomePath"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,a.jsx)(n.h3,{id:"-path",children:"-Path"}),"\n",(0,a.jsx)(n.p,{children:"Path to the shortcut to be changed"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: Default\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-pathhash",children:"-PathHash"}),"\n",(0,a.jsx)(n.p,{children:"{{ Fill PathHash Description }}"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: Hashtable\nParameter Sets: Pipeline\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-targetpath",children:"-TargetPath"}),"\n",(0,a.jsx)(n.p,{children:"Changes target path or URL that the shortcut launches"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-arguments",children:"-Arguments"}),"\n",(0,a.jsx)(n.p,{children:"Changes Arguments to be passed to the target path"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-iconlocation",children:"-IconLocation"}),"\n",(0,a.jsx)(n.p,{children:"Changes location of the icon used for the shortcut"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-iconindex",children:"-IconIndex"}),"\n",(0,a.jsx)(n.p,{children:"Change the index of the icon.\nExecutables, DLLs, ICO files with multiple icons need the icon index to be specified.\nThis parameter is an Integer.\nThe first index is 0."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-description",children:"-Description"}),"\n",(0,a.jsx)(n.p,{children:"Changes description of the shortcut"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-workingdirectory",children:"-WorkingDirectory"}),"\n",(0,a.jsx)(n.p,{children:"Changes Working Directory to be used for the target path"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-windowstyle",children:"-WindowStyle"}),"\n",(0,a.jsx)(n.p,{children:"Changes the Windows style of the application.\nOptions: Normal, Maximized, Minimized, DontChange.\nDefault is: DontChange."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: DontChange\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-runasadmin",children:"-RunAsAdmin"}),"\n",(0,a.jsx)(n.p,{children:"Set shortcut to run program as administrator.\nThis option will prompt user to elevate when executing shortcut.\nIf not specified or set to $null, the flag will not be changed."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-hotkey",children:"-Hotkey"}),"\n",(0,a.jsx)(n.p,{children:'Changes the Hotkey to launch the shortcut, e.g.\n"CTRL+SHIFT+F"'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"-continueonerror",children:"-ContinueOnError"}),"\n",(0,a.jsx)(n.p,{children:"Continue if an error is encountered.\nDefault is: $true."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,a.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,a.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,a.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,a.jsx)(n.h3,{id:"psojbect",children:"PSOjbect"}),"\n",(0,a.jsx)(n.h3,{id:"path-to-the-shortcut-to-be-changed-or-a-hashtable-of-parameters-to-be-changed",children:"Path to the shortcut to be changed or a hashtable of parameters to be changed"}),"\n",(0,a.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,a.jsx)(n.h3,{id:"none",children:"None"}),"\n",(0,a.jsx)(n.h3,{id:"this-function-does-not-generate-any-output",children:"This function does not generate any output."}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,a.jsx)(n.p,{children:"Url shortcuts only support TargetPath, IconLocation and IconIndex.\nOther parameters are ignored."}),"\n",(0,a.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3883:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var a=t(959);const i={},r=a.createContext(i);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);