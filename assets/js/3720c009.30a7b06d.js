"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[3751],{6741:(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});s(959);var a=s(5924),r=s(1026),l=s(6908),n=s(485),c=s(3412),i=s(5),o=s(4407),g=s(1527);function d(t){let{title:e}=t;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.d,{title:e}),(0,g.jsx)(i.Z,{tag:"doc_tags_list"})]})}function u(t){let{tags:e,title:s}=t;return(0,g.jsx)(r.FG,{className:(0,a.Z)(l.k.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.Z,{as:"h1",children:s}),(0,g.jsx)(c.Z,{tags:e})]})})})})}function h(t){const e=(0,n.M)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{...t,title:e}),(0,g.jsx)(u,{...t,title:e})]})}},5090:(t,e,s)=>{s.d(e,{Z:()=>c});s(959);var a=s(5924),r=s(3548);const l={tag:"tag_zty6",tagRegular:"tagRegular_AtT4",tagWithCount:"tagWithCount_HZiZ"};var n=s(1527);function c(t){let{permalink:e,label:s,count:c}=t;return(0,n.jsxs)(r.Z,{href:e,className:(0,a.Z)(l.tag,c?l.tagWithCount:l.tagRegular),children:[s,c&&(0,n.jsx)("span",{children:c})]})}},3412:(t,e,s)=>{s.d(e,{Z:()=>o});s(959);var a=s(485),r=s(5090),l=s(4407);const n={tag:"tag_mMGP"};var c=s(1527);function i(t){let{letterEntry:e}=t;return(0,c.jsxs)("article",{children:[(0,c.jsx)(l.Z,{as:"h2",id:e.letter,children:e.letter}),(0,c.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,c.jsx)("li",{className:n.tag,children:(0,c.jsx)(r.Z,{...t})},t.permalink)))}),(0,c.jsx)("hr",{})]})}function o(t){let{tags:e}=t;const s=(0,a.P)(e);return(0,c.jsx)("section",{className:"margin-vert--lg",children:s.map((t=>(0,c.jsx)(i,{letterEntry:t},t.letter)))})}},485:(t,e,s)=>{s.d(e,{M:()=>r,P:()=>l});var a=s(8402);const r=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(t){const e={};return Object.values(t).forEach((t=>{const s=function(t){return t[0].toUpperCase()}(t.label);e[s]??=[],e[s].push(t)})),Object.entries(e).sort(((t,e)=>{let[s]=t,[a]=e;return s.localeCompare(a)})).map((t=>{let[e,s]=t;return{letter:e,tags:s.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}}}]);