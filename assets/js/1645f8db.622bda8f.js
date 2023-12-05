"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[8310],{1862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=t(1527),s=t(3883);const l={id:"Send-Keys",title:"Send-Keys",description:'Help page for the "Send-Keys" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},o=void 0,r={id:"reference/functions/Send-Keys",title:"Send-Keys",description:'Help page for the "Send-Keys" command',source:"@site/docs/reference/functions/Send-Keys.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Send-Keys",permalink:"/docs/reference/functions/Send-Keys",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Send-Keys",title:"Send-Keys",description:'Help page for the "Send-Keys" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Resolve-Error",permalink:"/docs/reference/functions/Resolve-Error"},next:{title:"Set-ActiveSetup",permalink:"/docs/reference/functions/Set-ActiveSetup"}},a={},d=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-WindowTitle",id:"-windowtitle",level:3},{value:"-GetAllWindowTitles",id:"-getallwindowtitles",level:3},{value:"-WindowHandle",id:"-windowhandle",level:3},{value:"-Keys",id:"-keys",level:3},{value:"-WaitSeconds",id:"-waitseconds",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"None",id:"none-1",level:3},{value:"This function does not return any objects.",id:"this-function-does-not-return-any-objects",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,i.jsx)(n.p,{children:"Send a sequence of keys to one or more application windows."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Send-Keys [[-WindowTitle] <String>] [-GetAllWindowTitles] [[-WindowHandle] <IntPtr>] [[-Keys] <String>]\n [[-WaitSeconds] <Int32>] [<CommonParameters>]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,i.jsx)(n.p,{children:"Send a sequence of keys to one or more application window.\nIf window title searched for returns more than one window, then all of them will receive the sent keys."}),"\n",(0,i.jsx)(n.p,{children:'Function does not work in SYSTEM context unless launched with "psexec.exe -s -i" to run it as an interactive process under the SYSTEM account.'}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,i.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Send-Keys -WindowTitle 'foobar - Notepad' -Key 'Hello world'\n"})}),"\n",(0,i.jsx)(n.p,{children:'Send the sequence of keys "Hello world" to the application titled "foobar - Notepad".'}),"\n",(0,i.jsx)(n.h3,{id:"example-2",children:"EXAMPLE 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Send-Keys -WindowTitle 'foobar - Notepad' -Key 'Hello world' -WaitSeconds 5\n"})}),"\n",(0,i.jsx)(n.p,{children:'Send the sequence of keys "Hello world" to the application titled "foobar - Notepad" and wait 5 seconds.'}),"\n",(0,i.jsx)(n.h3,{id:"example-3",children:"EXAMPLE 3"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Send-Keys -WindowHandle ([IntPtr]17368294) -Key 'Hello world'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Send the sequence of keys \"Hello world\" to the application with a Window Handle of '17368294'."}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,i.jsx)(n.h3,{id:"-windowtitle",children:"-WindowTitle"}),"\n",(0,i.jsx)(n.p,{children:"The title of the application window to search for using regex matching."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-getallwindowtitles",children:"-GetAllWindowTitles"}),"\n",(0,i.jsx)(n.p,{children:"Get titles for all open windows on the system."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-windowhandle",children:"-WindowHandle"}),"\n",(0,i.jsx)(n.p,{children:"Send keys to a specific window where the Window Handle is already known."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: IntPtr\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 3\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-keys",children:"-Keys"}),"\n",(0,i.jsxs)(n.p,{children:["The sequence of keys to send.\nInfo on Key input at: ",(0,i.jsx)(n.a,{href:"http://msdn.microsoft.com/en-us/library/System.Windows.Forms.SendKeys(v=vs.100).aspx",children:"http://msdn.microsoft.com/en-us/library/System.Windows.Forms.SendKeys(v=vs.100).aspx"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 4\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-waitseconds",children:"-WaitSeconds"}),"\n",(0,i.jsx)(n.p,{children:"An optional number of seconds to wait after the sending of the keys."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 5\nDefault value: 0\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,i.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,i.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,i.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,i.jsx)(n.h3,{id:"none",children:"None"}),"\n",(0,i.jsx)(n.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,i.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,i.jsx)(n.h3,{id:"none-1",children:"None"}),"\n",(0,i.jsx)(n.h3,{id:"this-function-does-not-return-any-objects",children:"This function does not return any objects."}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,i.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,i.jsxs)(n.p,{children:["[",(0,i.jsx)(n.a,{href:"http://msdn.microsoft.com/en-us/library/System.Windows.Forms.SendKeys(v=vs.100).aspx",children:"http://msdn.microsoft.com/en-us/library/System.Windows.Forms.SendKeys(v=vs.100).aspx"}),"]"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3883:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(959);const s={},l=i.createContext(s);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);