(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{66:function(e,t,c){},85:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(20),i=c.n(s),r=(c(66),c(40)),j=c(100),l=c(99),o=c(101),b=c(27),d=c(8),h=c(11),O=c(32),x=c.n(O),u=c(1);var g=function(){var e=Object(n.useState)(),t=Object(h.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){x.a.get("/api/bestseller").then((function(e){a(e.data)})).catch((function(e){alert("\ub3c4\uc11c \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc624\ub294 \ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),console.log(e)}))}),[]),Object(u.jsx)("div",{className:"row",children:c&&c.map((function(e,t){return Object(u.jsxs)("div",{className:"col-lg-2 col-md-3 col-sm-4",children:[Object(u.jsx)("img",{src:e.coverLargeUrl,width:"90%"}),Object(u.jsx)("p",{children:e.title}),e.author," | ",e.publisher]},e.itemId)}))})};var p,f,m=function(){var e=Object(n.useState)(),t=Object(h.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){x.a.get("/api/newbook").then((function(e){console.log(e.data),console.log(Array.isArray(e.data)),a(e.data)})).catch((function(e){alert("\ub3c4\uc11c \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc624\ub294 \ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),console.log(e)}))}),[]),Object(u.jsx)("div",{className:"row",children:c&&c.map((function(e,t){return Object(u.jsxs)("div",{className:"col-lg-2 col-md-3 col-sm-4",children:[Object(u.jsx)("img",{src:e.coverLargeUrl,width:"90%"}),Object(u.jsx)("p",{children:e.title}),e.author," | ",e.publisher]},e.itemId)}))})},v=(c(85),c(41)),w=v.a.div(p||(p=Object(r.a)(["\n  width : 80%;\n  margin : auto;\n"]))),k=v.a.div(f||(f=Object(r.a)(["\n  text-align: right;\n  padding : 20pt;\n"])));var L=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)(k,{children:[Object(u.jsx)("span",{children:"\ub85c\uadf8\uc778"}),Object(u.jsx)("span",{children:" | "}),Object(u.jsx)("span",{children:"\ud68c\uc6d0\uac00\uc785"}),Object(u.jsx)("span",{children:" | "}),Object(u.jsx)("span",{children:"\ub9c8\uc774\ud398\uc774\uc9c0"})]}),Object(u.jsx)("div",{children:Object(u.jsxs)("form",{action:"/search",method:"POST",children:[Object(u.jsx)("label",{for:"searching",children:"\uac80\uc0c9\uc744 \uc6d0\ud558\ub294 \ucc45 , \uc800\uc790 \ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),Object(u.jsx)("input",{type:"text",name:"searching",id:"searching"})]})}),Object(u.jsx)(j.a,{bg:"light",expand:"lg",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(j.a.Brand,{children:"\ub3c4\uc11c"}),Object(u.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(o.a,{className:"me-auto",children:[Object(u.jsx)(o.a.Link,{as:b.b,to:"/bestseller",children:"\ubca0\uc2a4\ud2b8\uc140\ub7ec"}),Object(u.jsx)(o.a.Link,{as:b.b,to:"/newbook",children:"\uc2e0\uac04\ub3c4\uc11c"})]})})]})}),Object(u.jsx)("hr",{}),Object(u.jsx)(d.c,{children:Object(u.jsxs)(w,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/bestseller",children:Object(u.jsx)(g,{})}),Object(u.jsx)(d.a,{path:"/newbook",children:Object(u.jsx)(m,{})})]})})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,102)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b.a,{children:Object(u.jsx)(L,{})})}),document.getElementById("root")),N()}},[[96,1,2]]]);
//# sourceMappingURL=main.a4ddd336.chunk.js.map