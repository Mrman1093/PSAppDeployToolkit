"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[6457],{2808:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=l(1527),t=l(6274);const a={id:"Show-InstallationWelcome",title:"Show-InstallationWelcome",description:'Help page for the "Show-InstallationWelcome" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},s=void 0,o={id:"reference/functions/Show-InstallationWelcome",title:"Show-InstallationWelcome",description:'Help page for the "Show-InstallationWelcome" command',source:"@site/docs/reference/functions/Show-InstallationWelcome.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Show-InstallationWelcome",permalink:"/docs/reference/functions/Show-InstallationWelcome",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Show-InstallationWelcome",title:"Show-InstallationWelcome",description:'Help page for the "Show-InstallationWelcome" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Show-InstallationRestartPrompt",permalink:"/docs/reference/functions/Show-InstallationRestartPrompt"},next:{title:"Show-WelcomePrompt",permalink:"/docs/reference/functions/Show-WelcomePrompt"}},r={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"None (Default)",id:"none-default",level:3},{value:"CheckDiskSpaceParameterSet",id:"checkdiskspaceparameterset",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"EXAMPLE 4",id:"example-4",level:3},{value:"EXAMPLE 5",id:"example-5",level:3},{value:"EXAMPLE 6",id:"example-6",level:3},{value:"EXAMPLE 7",id:"example-7",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-CloseApps",id:"-closeapps",level:3},{value:"-Silent",id:"-silent",level:3},{value:"-CloseAppsCountdown",id:"-closeappscountdown",level:3},{value:"-ForceCloseAppsCountdown",id:"-forcecloseappscountdown",level:3},{value:"-PromptToSave",id:"-prompttosave",level:3},{value:"-PersistPrompt",id:"-persistprompt",level:3},{value:"-BlockExecution",id:"-blockexecution",level:3},{value:"-AllowDefer",id:"-allowdefer",level:3},{value:"-AllowDeferCloseApps",id:"-allowdefercloseapps",level:3},{value:"-DeferTimes",id:"-defertimes",level:3},{value:"-DeferDays",id:"-deferdays",level:3},{value:"-DeferDeadline",id:"-deferdeadline",level:3},{value:"-CheckDiskSpace",id:"-checkdiskspace",level:3},{value:"-RequiredDiskSpace",id:"-requireddiskspace",level:3},{value:"-MinimizeWindows",id:"-minimizewindows",level:3},{value:"-TopMost",id:"-topmost",level:3},{value:"-ForceCountdown",id:"-forcecountdown",level:3},{value:"-CustomText",id:"-customtext",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"None",id:"none-1",level:3},{value:"This function does not return objects.",id:"this-function-does-not-return-objects",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,i.jsx)(n.p,{children:"Show a welcome dialog prompting the user with information about the installation and actions to be performed before the installation can begin."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,i.jsx)(n.h3,{id:"none-default",children:"None (Default)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Show-InstallationWelcome [-CloseApps <String>] [-Silent] [-CloseAppsCountdown <Int32>]\n [-ForceCloseAppsCountdown <Int32>] [-PromptToSave] [-PersistPrompt] [-BlockExecution] [-AllowDefer]\n [-AllowDeferCloseApps] [-DeferTimes <Int32>] [-DeferDays <Int32>] [-DeferDeadline <String>]\n [-MinimizeWindows <Boolean>] [-TopMost <Boolean>] [-ForceCountdown <Int32>] [-CustomText] [<CommonParameters>]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"checkdiskspaceparameterset",children:"CheckDiskSpaceParameterSet"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Show-InstallationWelcome [-CloseApps <String>] [-Silent] [-CloseAppsCountdown <Int32>]\n [-ForceCloseAppsCountdown <Int32>] [-PromptToSave] [-PersistPrompt] [-BlockExecution] [-AllowDefer]\n [-AllowDeferCloseApps] [-DeferTimes <Int32>] [-DeferDays <Int32>] [-DeferDeadline <String>] [-CheckDiskSpace]\n [-RequiredDiskSpace <Int32>] [-MinimizeWindows <Boolean>] [-TopMost <Boolean>] [-ForceCountdown <Int32>]\n [-CustomText] [<CommonParameters>]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,i.jsx)(n.p,{children:"The following prompts can be included in the welcome dialog:\na) Close the specified running applications, or optionally close the applications without showing a prompt (using the -Silent switch).\nb) Defer the installation a certain number of times, for a certain number of days or until a deadline is reached.\nc) Countdown until applications are automatically closed.\nd) Prevent users from launching the specified applications while the installation is in progress."}),"\n",(0,i.jsx)(n.p,{children:"Notes:\nThe process descriptions are retrieved from WMI, with a fall back on the process name if no description is available.\nAlternatively, you can specify the description yourself with a '=' symbol - see examples.\nThe dialog box will timeout after the timeout specified in the XML configuration file (default 1 hour and 55 minutes) to prevent SCCM installations from timing out and returning a failure code to SCCM.\nWhen the dialog times out, the script will exit and return a 1618 code (SCCM fast retry code)."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,i.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Show-InstallationWelcome -CloseApps 'iexplore,winword,excel'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Prompt the user to close Internet Explorer, Word and Excel."}),"\n",(0,i.jsx)(n.h3,{id:"example-2",children:"EXAMPLE 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Show-InstallationWelcome -CloseApps 'winword,excel' -Silent\n"})}),"\n",(0,i.jsx)(n.p,{children:"Close Word and Excel without prompting the user."}),"\n",(0,i.jsx)(n.h3,{id:"example-3",children:"EXAMPLE 3"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Show-InstallationWelcome -CloseApps 'winword,excel' -BlockExecution\n"})}),"\n",(0,i.jsx)(n.p,{children:"Close Word and Excel and prevent the user from launching the applications while the installation is in progress."}),"\n",(0,i.jsx)(n.h3,{id:"example-4",children:"EXAMPLE 4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Show-InstallationWelcome -CloseApps 'winword=Microsoft Office Word,excel=Microsoft Office Excel' -CloseAppsCountdown 600\n"})}),"\n",(0,i.jsx)(n.p,{children:"Prompt the user to close Word and Excel, with customized descriptions for the applications and automatically close the applications after 10 minutes."}),"\n",(0,i.jsx)(n.h3,{id:"example-5",children:"EXAMPLE 5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Show-InstallationWelcome -CloseApps 'winword,msaccess,excel' -PersistPrompt\n"})}),"\n",(0,i.jsx)(n.p,{children:"Prompt the user to close Word, MSAccess and Excel."}),"\n",(0,i.jsx)(n.p,{children:"By using the PersistPrompt switch, the dialog will return to the center of the screen every couple of seconds, specified in the AppDeployToolkitConfig.xml, so the user cannot ignore it by dragging it aside."}),"\n",(0,i.jsx)(n.h3,{id:"example-6",children:"EXAMPLE 6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Show-InstallationWelcome -AllowDefer -DeferDeadline '25/08/2013'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Allow the user to defer the installation until the deadline is reached."}),"\n",(0,i.jsx)(n.h3,{id:"example-7",children:"EXAMPLE 7"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Show-InstallationWelcome -CloseApps 'winword,excel' -BlockExecution -AllowDefer -DeferTimes 10 -DeferDeadline '25/08/2013' -CloseAppsCountdown 600\n"})}),"\n",(0,i.jsx)(n.p,{children:"Close Word and Excel and prevent the user from launching the applications while the installation is in progress."}),"\n",(0,i.jsx)(n.p,{children:"Allow the user to defer the installation a maximum of 10 times or until the deadline is reached, whichever happens first."}),"\n",(0,i.jsx)(n.p,{children:"When deferral expires, prompt the user to close the applications and automatically close them after 10 minutes."}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,i.jsx)(n.h3,{id:"-closeapps",children:"-CloseApps"}),"\n",(0,i.jsx)(n.p,{children:'Name of the process to stop (do not include the .exe).\nSpecify multiple processes separated by a comma.\nSpecify custom descriptions like this: "winword=Microsoft Office Word,excel=Microsoft Office Excel"'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-silent",children:"-Silent"}),"\n",(0,i.jsx)(n.p,{children:"Stop processes without prompting the user."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-closeappscountdown",children:"-CloseAppsCountdown"}),"\n",(0,i.jsx)(n.p,{children:"Option to provide a countdown in seconds until the specified applications are automatically closed.\nThis only takes effect if deferral is not allowed or has expired."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: 0\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-forcecloseappscountdown",children:"-ForceCloseAppsCountdown"}),"\n",(0,i.jsx)(n.p,{children:"Option to provide a countdown in seconds until the specified applications are automatically closed regardless of whether deferral is allowed."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: 0\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-prompttosave",children:"-PromptToSave"}),"\n",(0,i.jsx)(n.p,{children:'Specify whether to prompt to save working documents when the user chooses to close applications by selecting the "Close Programs" button.\nOption does not work in SYSTEM context unless toolkit launched with "psexec.exe -s -i" to run it as an interactive process under the SYSTEM account.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-persistprompt",children:"-PersistPrompt"}),"\n",(0,i.jsx)(n.p,{children:"Specify whether to make the Show-InstallationWelcome prompt persist in the center of the screen every couple of seconds, specified in the AppDeployToolkitConfig.xml.\nThe user will have no option but to respond to the prompt.\nThis only takes effect if deferral is not allowed or has expired."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-blockexecution",children:"-BlockExecution"}),"\n",(0,i.jsx)(n.p,{children:"Option to prevent the user from launching processes/applications, specified in -CloseApps, during the installation."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-allowdefer",children:"-AllowDefer"}),"\n",(0,i.jsx)(n.p,{children:"Enables an optional defer button to allow the user to defer the installation."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-allowdefercloseapps",children:"-AllowDeferCloseApps"}),"\n",(0,i.jsx)(n.p,{children:"Enables an optional defer button to allow the user to defer the installation only if there are running applications that need to be closed.\nThis parameter automatically enables -AllowDefer"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-defertimes",children:"-DeferTimes"}),"\n",(0,i.jsx)(n.p,{children:"Specify the number of times the installation can be deferred."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: 0\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-deferdays",children:"-DeferDays"}),"\n",(0,i.jsx)(n.p,{children:"Specify the number of days since first run that the installation can be deferred.\nThis is converted to a deadline."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: 0\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-deferdeadline",children:"-DeferDeadline"}),"\n",(0,i.jsx)(n.p,{children:"Specify the deadline date until which the installation can be deferred."}),"\n",(0,i.jsx)(n.p,{children:"Specify the date in the local culture if the script is intended for that same culture."}),"\n",(0,i.jsx)(n.p,{children:'If the script is intended to run on EN-US machines, specify the date in the format: "08/25/2013" or "08-25-2013" or "08-25-2013 18:00:00"'}),"\n",(0,i.jsx)(n.p,{children:'If the script is intended for multiple cultures, specify the date in the universal sortable date/time format: "2013-08-22 11:51:52Z"'}),"\n",(0,i.jsx)(n.p,{children:"The deadline date will be displayed to the user in the format of their culture."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-checkdiskspace",children:"-CheckDiskSpace"}),"\n",(0,i.jsx)(n.p,{children:"Specify whether to check if there is enough disk space for the installation to proceed."}),"\n",(0,i.jsx)(n.p,{children:"If this parameter is specified without the RequiredDiskSpace parameter, the required disk space is calculated automatically based on the size of the script source and associated files."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: CheckDiskSpaceParameterSet\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-requireddiskspace",children:"-RequiredDiskSpace"}),"\n",(0,i.jsx)(n.p,{children:"Specify required disk space in MB, used in combination with CheckDiskSpace."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: Int32\nParameter Sets: CheckDiskSpaceParameterSet\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: 0\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-minimizewindows",children:"-MinimizeWindows"}),"\n",(0,i.jsx)(n.p,{children:"Specifies whether to minimize other windows when displaying prompt.\nDefault: $true."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-topmost",children:"-TopMost"}),"\n",(0,i.jsx)(n.p,{children:"Specifies whether the windows is the topmost window.\nDefault: $true."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-forcecountdown",children:"-ForceCountdown"}),"\n",(0,i.jsx)(n.p,{children:"Specify a countdown to display before automatically proceeding with the installation when a deferral is enabled."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: 0\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-customtext",children:"-CustomText"}),"\n",(0,i.jsx)(n.p,{children:"Specify whether to display a custom message specified in the XML file.\nCustom message must be populated for each language section in the XML."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,i.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,i.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,i.jsx)(n.h3,{id:"none",children:"None"}),"\n",(0,i.jsx)(n.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,i.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,i.jsx)(n.h3,{id:"none-1",children:"None"}),"\n",(0,i.jsx)(n.h3,{id:"this-function-does-not-return-objects",children:"This function does not return objects."}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,i.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6274:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>s});var i=l(959);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);