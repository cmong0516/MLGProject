(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(22),i=c.n(r),a=(c(70),c(8)),j=c(28),o=c(104),l=c(103),b=c(105),d=(c(49),c(29)),h=c(19),x=c(9),O=c(26),u=c.n(O),p=c(1),m=s.a.createContext();var v,g,f=function(e){var t=Object(n.useState)(),c=Object(a.a)(t,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){u.a.get("/api/newbook").then((function(e){r(e.data)})).catch((function(e){alert("\ub3c4\uc11c \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc624\ub294 \ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),console.log(e)}))}),[]),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)(m.Provider,{value:s,children:[e.getBooks(s),Object(p.jsx)(N,{})]})})},k=d.a.div(v||(v=Object(j.a)(["\n  width: 80%;\n  margin-top: 2rem;\n  text-align: left;\n  cursor: pointer; \n\n  p {\n    font-size: 13pt;\n    font-weight: 600;\n    margin: 0.5rem 0 0 0;\n  }\n\n  h3 {\n    color: yellowgreen;\n    text-shadow: 1px 1px 1px darkgreen;\n    font-style: italic;\n    font-weight: bolder;\n  }\n"]))),w=d.a.div(g||(g=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n\n  img {\n    width: 11rem; \n    height: 16rem;\n    object-fit: cover;\n    border: solid 0.1rem darkgreen;\n  }\n"])));function y(e){var t=Object(x.f)();return Object(p.jsx)("div",{className:"row",children:e.books&&e.books.map((function(e,c){return Object(p.jsx)("div",{className:"col-lg-3 col-sm-4",onClick:function(){t.push("/detail/"+e.isbn)},children:Object(p.jsxs)(k,{children:[Object(p.jsx)("h3",{children:e.rank}),Object(p.jsx)(w,{children:Object(p.jsx)("img",{src:e.coverLargeUrl})}),Object(p.jsx)("p",{children:e.title}),e.author," / ",e.publisher]})},e.itemId)}))})}var N=function(){var e=Object(n.useContext)(C),t=Object(n.useContext)(m);return Object(p.jsx)("div",{children:e?Object(p.jsx)(y,{books:e}):Object(p.jsx)(y,{books:t})})},C=s.a.createContext();var B=function(e){var t=Object(n.useState)(),c=Object(a.a)(t,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){u.a.get("/api/bestseller").then((function(e){r(e.data)})).catch((function(e){alert("\ub3c4\uc11c \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc624\ub294 \ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),console.log(e)}))}),[]),Object(p.jsx)("div",{children:Object(p.jsxs)(C.Provider,{value:s,children:[e.getBooks(s),Object(p.jsx)(N,{})]})})},I=c(102);function P(e){var t=Object(x.g)().isbn,c=e.books&&e.books.find((function(e){return e.isbn==t}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:c.coverLargeUrl,width:"300rem"}),c.title,Object(p.jsx)("br",{}),c.author,Object(p.jsx)("br",{}),c.translator,Object(p.jsx)("br",{}),c.pubDate,Object(p.jsx)("br",{}),c.publisher,Object(p.jsx)("br",{}),c.categoryId,Object(p.jsx)("br",{}),c.categoryName,Object(p.jsx)("br",{}),c.isbn,Object(p.jsx)("br",{}),c.customerReviewRank,Object(p.jsx)("br",{}),c.description,Object(p.jsx)("br",{}),Object(p.jsx)(S,{})]})}function S(){return Object(p.jsx)(I.a,{variant:"dark",size:"lg",children:"\ubc18\ub0a9\ud558\uae30"})}var W=function(){var e=Object(n.useContext)(G);return Object(p.jsx)("div",{children:e?Object(p.jsx)(P,{books:e}):alert("\uc0c8\ub85c\uace0\uce68\uc73c\ub85c \uc778\ud574 state\uac00 \uc720\uc9c0\ub418\uc9c0 \uc54a\uc544 \ub3c4\uc11c\ub370\uc774\ud130 \uc218\uc2e0\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")})};var E=function(e){var t=Object(n.useState)(),c=Object(a.a)(t,2),s=c[0],r=c[1],i=e.searchWord;return Object(n.useEffect)((function(){u.a.get("/search",{params:{query:i}}).then((function(e){r(e.data)})).catch((function(e){alert("\uac80\uc0c9\uacb0\uacfc \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc624\ub294 \ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),console.log(i),console.log(e)}))}),[i]),Object(p.jsx)("div",{children:s&&s.map((function(e,t){return Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:e.thumbnail}),e.title,Object(p.jsx)("br",{}),"\uc904\uac70\ub9ac : ",e.contents,"...",Object(p.jsx)("br",{}),e.authors,"/",e.publisher,"/",e.dateTime,"/",e.translator,"/",e.isbn]},e.itemId)}))})};var L=function(){return Object(p.jsx)("div",{className:"loginform",children:Object(p.jsxs)("form",{children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"loginformtext",children:"ID"}),Object(p.jsx)("input",{type:"text",name:"userId",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"loginformtext",children:"PassWord"}),Object(p.jsx)("input",{type:"password",name:"userPw",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(I.a,{variant:"outline-primary",type:"submit",children:"Login"}),Object(p.jsx)(I.a,{variant:"outline-warning",type:"reset",children:"Reset"})]})]})})};var D=function(){return Object(p.jsx)("div",{className:"loginform",children:Object(p.jsxs)("form",{action:"signin",method:"POST",children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"loginformtext",children:"ID"}),Object(p.jsx)("input",{type:"text",name:"userId",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"loginformtext",children:"PassWord"}),Object(p.jsx)("input",{type:"password",name:"userPw",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"loginformtext",children:"Name"}),Object(p.jsx)("input",{type:"text",name:"userName",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"loginformtext",children:"Email"}),Object(p.jsx)("input",{type:"email",name:"userEmail",placeholder:"\uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(I.a,{variant:"outline-primary",type:"submit",children:"Signin"}),Object(p.jsx)(I.a,{variant:"outline-warning",type:"reset",children:"Reset"})]})]})})},q=c(106),R=c(107);var U,z,F=function(e){var t=Object(x.f)();return Object(p.jsx)("div",{children:Object(p.jsxs)(q.a,{className:"my-5 w-50 mx-auto",children:[Object(p.jsx)(R.a,{size:"lg",type:"search",placeholder:"\uac80\uc0c9\uc744 \uc6d0\ud558\ub294 \ucc45, \uc800\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",onKeyDown:function(t){"Enter"===t.key&&e.searchWordChange(t.target.value)},onKeyUp:function(c){"Enter"===c.key&&t.push("/search?query="+e.searchWord)}}),Object(p.jsx)(I.a,{className:"rounded-1",variant:"outline-light",onClick:function(){t.push("/search?query="+e.searchWord)},children:"\uac80\uc0c9"})]})})},T=d.a.div(U||(U=Object(j.a)(["\n  width : 70%;\n  margin : auto;\n"]))),A=d.a.div(z||(z=Object(j.a)(["\n  text-align: right;\n  padding : 2rem;\n  font-size : 13pt;\n  background-color: hsl(146, 45%, 36%);\n  color: floralwhite;\n  span {\n    margin: 0.5rem;\n  }\n"]))),G=s.a.createContext();var J=function(){var e=Object(n.useState)(),t=Object(a.a)(e,2),c=t[0],s=t[1],r=function(e){s(e)},i=Object(n.useState)(""),j=Object(a.a)(i,2),d=j[0],O=j[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)(A,{children:[Object(p.jsxs)("div",{className:"nav",children:[Object(p.jsx)("div",{className:"titleImg",children:Object(p.jsxs)("a",{href:"/",children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReIJDl-BNU7poDMxewQcEWm7ZLBeoxSfvVlQ&usqp=CAU"})}),Object(p.jsx)("div",{children:"Go Book Go Book"})]})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(h.b,{to:"/loginpage",children:Object(p.jsx)("span",{children:"\ub85c\uadf8\uc778"})}),Object(p.jsx)("span",{children:"|"}),Object(p.jsx)(h.b,{to:"/signinpage",children:Object(p.jsx)("span",{children:"\ud68c\uc6d0\uac00\uc785"})}),Object(p.jsx)("span",{children:"|"}),Object(p.jsx)("span",{children:"\ub9c8\uc774\ud398\uc774\uc9c0\xa0"})]})]}),Object(p.jsx)(F,{searchWord:d,searchWordChange:O})]}),Object(p.jsx)(o.a,{bg:"success",variant:"dark",children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(o.a.Brand,{className:"fs-3",children:"\ub3c4\uc11c"}),Object(p.jsxs)(b.a,{className:"me-auto fs-5",children:[Object(p.jsx)(b.a.Link,{as:h.b,to:"/api/bestseller",children:"\ubca0\uc2a4\ud2b8\uc140\ub7ec"}),Object(p.jsx)(b.a.Link,{as:h.b,to:"/api/newbook",children:"\uc2e0\uac04\ub3c4\uc11c"})]})]})}),Object(p.jsx)(x.c,{children:Object(p.jsxs)(T,{children:[Object(p.jsx)(x.a,{exact:!0,path:"/api/bestseller",children:Object(p.jsx)(B,{getBooks:r})}),Object(p.jsx)(x.a,{path:"/api/newbook",children:Object(p.jsx)(f,{getBooks:r})}),Object(p.jsx)(x.a,{path:"/detail/:isbn",children:Object(p.jsx)(G.Provider,{value:c,children:Object(p.jsx)(W,{})})}),Object(p.jsx)(x.a,{path:"/search",children:Object(p.jsx)(E,{searchWord:d})}),Object(p.jsx)(x.a,{path:"/loginpage",children:Object(p.jsx)(L,{})}),Object(p.jsx)(x.a,{path:"/signinpage",children:Object(p.jsx)(D,{})})]})})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(h.a,{children:Object(p.jsx)(J,{})})}),document.getElementById("root")),K()},49:function(e,t,c){},70:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.e9838f26.chunk.js.map