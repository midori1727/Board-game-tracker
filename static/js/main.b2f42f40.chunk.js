(this.webpackJsonpboard=this.webpackJsonpboard||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(13),s=c.n(n),i=(c(34),c(35),c(11)),r=c(4),j=(c(36),c(0)),o=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{id:"Button",onClick:e.onClick,children:e.ButtonName})})},l=(c(38),c.p+"static/media/frontPageImg.c25e757f.svg"),b=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title frontTitle",children:"Board Game Tracker"}),Object(j.jsxs)("div",{className:"FrontPageButton",children:[Object(j.jsx)("div",{className:"frontPageImg",children:Object(j.jsx)("img",{src:l,alt:"frontPageImage"})}),Object(j.jsx)(i.b,{to:"/create",children:Object(j.jsx)(o,{ButtonName:"Create new game"})}),Object(j.jsx)(i.b,{to:"/history",children:Object(j.jsx)(o,{ButtonName:"History"})})]})]})},u=c(10),d=c(2),m=c(9),O=(c(45),c(46),function(){return Object(j.jsx)("header",{children:Object(j.jsx)(i.b,{to:"/",children:"< Back to home"})})}),h=c(61),x=function(){var e=Object(m.b)(),t=Object(r.f)(),c=Object(h.a)(),n=Object(a.useState)(""),s=Object(d.a)(n,2),i=s[0],l=s[1],b=Object(a.useState)(""),x=Object(d.a)(b,2),p=x[0],f=x[1],g=Object(a.useState)(""),v=Object(d.a)(g,2),N=v[0],C=v[1],y=Object(a.useState)(""),S=Object(d.a)(y,2),E=S[0],D=S[1],P=Object(a.useState)("white"),A=Object(a.useState)([]),G=Object(d.a)(A,2),L=G[0],T=G[1],B=Object(a.useState)(""),k=Object(d.a)(B,2),w=k[0],F=k[1],H=Object(a.useState)(""),M=Object(d.a)(H,2),I=M[0],_=M[1],R=Object(a.useState)(""),V=Object(d.a)(R,2),W=V[0],q=V[1],Y=Object(a.useState)(!0),J=Object(d.a)(Y,2),K=J[0],z=J[1],Q=Object(a.useState)(""),U=Object(d.a)(Q,2),X=U[0],Z=U[1],$=Object(a.useState)(!0),ee=Object(d.a)($,2),te=ee[0],ce=ee[1],ae=Object(a.useState)(!0),ne=Object(d.a)(ae,2),se=ne[0],ie=ne[1],re=Object(a.useState)(!0),je=Object(d.a)(re,2),oe=je[0],le=je[1],be=Object(a.useState)(""),ue=Object(d.a)(be,2),de=ue[0],me=ue[1],Oe=Object(a.useState)(!0),he=Object(d.a)(Oe,2),xe=he[0],pe=he[1],fe=Object(a.useState)(""),ge=Object(d.a)(fe,2),ve=ge[0],Ne=ge[1];Object(a.useEffect)((function(){var e=new Date,t=e.getFullYear(),c=("0"+(e.getMonth()+1)).slice(-2),a=("0"+e.getDate()).slice(-2),n="".concat(t,"-").concat(c,"-").concat(a);q(n)}),[]);var Ce=L.map((function(e){return e.color}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{children:Object(j.jsx)(O,{})}),Object(j.jsx)("h1",{className:"title",children:"Create New Game"}),Object(j.jsx)("div",{className:"createNewGameWrapper",children:Object(j.jsxs)("form",{className:"createNewGameForm",children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:"createNewGameH2",children:"Title:"}),Object(j.jsx)("input",{className:"inputTitle",type:"text",value:i,onChange:function(e){l(e.target.value),z(!0)}}),!K&&Object(j.jsx)("div",{className:"error-message",children:X})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:"createNewGameH2",children:"Scenario:"}),Object(j.jsx)("textarea",{className:"inputScenario",value:p,onChange:function(e){f(e.target.value)}})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:"createNewGameH2",children:"Player:"}),Object(j.jsx)("input",{type:"text",value:N,maxLength:"30",onChange:function(e){C(e.target.value)}}),!te&&Object(j.jsx)("div",{className:"error-message",children:se})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:"createNewGameH2",children:"Points:"}),Object(j.jsx)("input",{type:"text",value:E,onChange:function(e){D(e.target.value),pe(!0)}}),!xe&&Object(j.jsx)("div",{className:"error-message",children:ve})]}),Object(j.jsx)("button",{className:"addMemberButton",onClick:function(e){if(e.preventDefault(),""!==N&&""!==E){if(E.match(/[^0-9]+/))return pe(!1),void Ne("Please only use digit");T([].concat(Object(u.a)(L),[{name:N,points:E,color:P}])),C(""),D(""),ce(!0)}},children:"+ Add"}),L&&Object(j.jsx)("ul",{children:L.map((function(e,t){return Object(j.jsxs)("div",{style:{color:Ce[t]},children:[e.name," ",e.points," points",Object(j.jsx)("button",{className:"removeButton",onClick:function(){return function(e){var t=Object(u.a)(L);t.splice(e,1),T(t)}(t)},children:"Remove"}),Object(j.jsxs)("select",{name:"memberColor",className:"selectColor",onChange:function(e){return function(e,t){var c=Object(u.a)(L),a=c[t].color;a=e.target.value,c[t].color=a,T(c)}(e,t)},children:[Object(j.jsx)("option",{value:"",hidden:!0,children:"Change color"}),Object(j.jsx)("option",{defaultValue:"white",children:"White"}),Object(j.jsx)("option",{value:"rgb(250, 84, 84)",children:"Red"}),Object(j.jsx)("option",{value:"lightblue",children:"Blue"}),Object(j.jsx)("option",{value:"lightgreen",children:"Green"}),Object(j.jsx)("option",{value:"yellow",children:"Yellow"}),Object(j.jsx)("option",{value:"#FF8574",children:"Orange"}),Object(j.jsx)("option",{value:"pink",children:"Pink"}),Object(j.jsx)("option",{value:"lightgray",children:"Gray"}),Object(j.jsx)("option",{value:"rgb(207, 98, 207)",children:"Purple"})]})]},t)}))}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:"createNewGameH2",children:"Total time:"}),Object(j.jsx)("input",{type:"time",value:w,onChange:function(e){F(e.target.value),le(!0)}}),!oe&&Object(j.jsx)("div",{className:"error-message",children:de})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:"createNewGameH2",children:"Comment:"}),Object(j.jsx)("textarea",{className:"inputComment",value:I,onChange:function(e){_(e.target.value)},required:!0})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:"createNewGameH2",children:"Created date:"}),Object(j.jsx)("input",{type:"date",value:W,name:"createdDate",onChange:function(e){q(e.target.value)}})]}),Object(j.jsx)("div",{className:"addButton",children:Object(j.jsx)(o,{ButtonName:"ADD GAME",onClick:function(a){return a.preventDefault(),i?0===L.length?(ce(!1),void ie("Please add at least one player")):w?(e({type:"GAME_LIST_ADD",payload:{id:(n={id:c,title:i,scenario:p,memberAndPoints:L,time:w,comment:I,createdDate:W}).id,title:n.title,scenario:n.scenario,memberAndPoints:n.memberAndPoints,time:n.time,comment:n.comment,createdDate:n.createdDate}}),void t.push("/history")):(le(!1),void me("Please input total time")):(z(!1),void Z("Please input title"));var n}})})]})})]})},p=(c(47),function(){var e=Object(m.c)((function(e){return e})).gameList.gameLists,t=Object(r.g)(),c=Object(m.b)(),n=Object(r.f)(),s=e.filter((function(e){return e.id===t.id})),i=Object(a.useState)(""),l=Object(d.a)(i,2),b=l[0],h=l[1],x=Object(a.useState)(""),p=Object(d.a)(x,2),f=p[0],g=p[1],v=Object(a.useState)([]),N=Object(d.a)(v,2),C=N[0],y=N[1],S=Object(a.useState)([]),E=Object(d.a)(S,2),D=E[0],P=E[1],A=Object(a.useState)(""),G=Object(d.a)(A,2),L=G[0],T=G[1],B=Object(a.useState)(""),k=Object(d.a)(B,2),w=k[0],F=k[1],H=Object(a.useState)(""),M=Object(d.a)(H,2),I=M[0],_=M[1],R=[],V=[],W=Object(a.useState)(!0),q=Object(d.a)(W,2),Y=q[0],J=q[1],K=Object(a.useState)(""),z=Object(d.a)(K,2),Q=z[0],U=z[1],X=Object(a.useState)(!0),Z=Object(d.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)(""),ce=Object(d.a)(te,2),ae=ce[0],ne=ce[1];Object(a.useEffect)((function(){s.forEach((function(e){h(e.title),g(e.scenario),T(e.time),F(e.comment),_(e.createdDate),e.memberAndPoints.forEach((function(e){R=[].concat(Object(u.a)(R),[{name:e.name,points:e.points,color:e.color}]),P(R),V=[].concat(Object(u.a)(V),[e.color]),y(V)}))}))}),[]);var se=function(e){h(e.target.value),J(!0)},ie=function(e){g(e.target.value)},re=function(e){T(e.target.value),ee(!0)},je=function(e){F(e.target.value)},oe=function(e){_(e.target.value)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{children:Object(j.jsx)(O,{})}),Object(j.jsx)("h1",{className:"title",children:"Edit Game"}),Object(j.jsx)("div",{className:"editGameWrapper",children:Object(j.jsx)("div",{className:"editGameForm",children:s.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:"editGameH2",children:"Title:"}),Object(j.jsx)("input",{className:"editTitle",value:b,onChange:se}),!Y&&Object(j.jsx)("div",{className:"error-message",children:Q})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:"editGameH2",children:"Scenario:"}),Object(j.jsx)("textarea",{className:"editScenario",value:f,onChange:ie})]}),Object(j.jsx)("h2",{className:"editGameH2",children:"Members:"}),C&&Object(j.jsx)("ul",{children:e.memberAndPoints.map((function(e,t){return Object(j.jsxs)("div",{className:"EditmemberAndPoints",children:[Object(j.jsx)("p",{className:"editName",style:{color:C[t]},children:e.name}),D.length>=1&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("input",{value:D[t].points,onChange:function(e){return function(e,t){var c=Object(u.a)(D),a=c[t].points;a=e.target.value,c[t].points=a,a.match(/[^0-9]+/)||P(c)}(e,t)}})}),D.length>=1&&""===D[t].points&&Object(j.jsx)("div",{className:"error-message points-error-message",children:"Please input points"})]},t)}))}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:"editGameH2",children:"Total Time:"}),Object(j.jsx)("input",{type:"time",value:L,onChange:re}),!$&&Object(j.jsx)("div",{className:"error-message",children:ae})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:"editGameH2",children:"Comment:"}),Object(j.jsx)("textarea",{className:"editComment",value:w,onChange:je})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:"editGameH2",children:"Created Date:"}),Object(j.jsx)("input",{type:"date",value:I,onChange:oe})]}),Object(j.jsxs)("div",{className:"editButton",children:[Object(j.jsx)(o,{ButtonName:"CANCEL",onClick:function(){return n.goBack()}}),Object(j.jsx)(o,{ButtonName:"SAVE",onClick:function(){return function(e){var t;if(!D.map((function(e){return e.points})).includes(""))return b?L?(c({type:"GAME_LIST_EDIT",payload:{id:(t={id:e,title:b,scenario:f,memberAndPoints:D,time:L,comment:w,createdDate:I}).id,title:t.title,scenario:t.scenario,memberAndPoints:t.memberAndPoints,time:t.time,comment:t.comment,createdDate:t.createdDate}}),void n.push("/history")):(ee(!1),void ne("Please input total time")):(J(!1),void U("Please input title"))}(e.id)}})]})]},e.id)}))})})]})}),f=(c(48),function(){var e=Object(m.c)((function(e){return e})).gameList.gameLists,t=Object(r.f)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{children:Object(j.jsx)(O,{})}),Object(j.jsx)("h1",{className:"title",children:"History"}),Object(j.jsx)("div",{className:"gameListsWrapper",children:Object(j.jsx)("div",{className:"gameLists",children:e.map((function(e){return Object(j.jsxs)("div",{className:"gameListCard",onClick:function(){return c=e.id,void t.push("/history/"+c);var c},children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("p",{children:e.scenario}),Object(j.jsxs)("p",{children:["Created: ",e.createdDate]})]},e.id)}))})})]})}),g=(c(49),c(18)),v=c.n(g);v.a.setAppElement("#root");var N=function(){var e=Object(m.c)((function(e){return e})).gameList.gameLists,t=Object(r.g)(),c=Object(m.b)(),n=Object(r.f)(),s=Object(a.useState)(""),i=Object(d.a)(s,2),l=i[0],b=i[1],h=Object(a.useState)([]),x=Object(d.a)(h,2),p=x[0],f=x[1],g=Object(a.useState)(!1),N=Object(d.a)(g,2),C=N[0],y=N[1],S=Object(a.useState)(!1),E=Object(d.a)(S,2),D=E[0],P=E[1],A=[],G=e.filter((function(e){return e.id===t.id}));Object(a.useEffect)((function(){G.forEach((function(e){b(e.id),e.memberAndPoints.forEach((function(e){A=[].concat(Object(u.a)(A),[e.color]),f(A)}))}))}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{children:Object(j.jsx)(O,{})}),Object(j.jsx)("h1",{className:"title",children:"History"}),Object(j.jsxs)("div",{className:"gameDetailsWrapper",children:[G.map((function(e){return Object(j.jsxs)("div",{className:"gameDetails",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsxs)("p",{className:"gameDetailsScenario",children:["Scenario: ",e.scenario]}),p&&Object(j.jsx)(j.Fragment,{children:e.memberAndPoints.map((function(e,t){return Object(j.jsxs)("div",{className:"gameMemberAndPoints",children:[Object(j.jsx)("p",{style:{color:p[t]},children:e.name}),Object(j.jsxs)("p",{style:{color:p[t]},children:[e.points," Points"]})]},t)}))}),Object(j.jsxs)("p",{className:"gameTotalTime",children:["Total Time: ",e.time]}),Object(j.jsxs)("p",{className:"gameComment",children:["Comment: ",e.comment]}),Object(j.jsxs)("p",{className:"gameCreatedDate",children:["Created Date: ",e.createdDate]}),Object(j.jsx)(o,{ButtonName:"REMOVE",onClick:function(){return y(!0)}}),Object(j.jsx)(o,{ButtonName:"EDIT",onClick:function(){return function(e){n.push("/edit/"+e)}(e.id)}})]},e.id)})),Object(j.jsxs)(v.a,{isOpen:C,onRequestClose:function(){return y(!1)},overlayClassName:{base:"overlay-base",afterOpen:"overlay-after",beforeClose:"overlay-before"},className:{base:"content-base",afterOpen:"content-after",beforeClose:"content-before"},closeTimeoutMS:500,children:[Object(j.jsx)("p",{children:"Do you really want to remove this game?"}),Object(j.jsx)(o,{ButtonName:"REMOVE",onClick:function(){return function(e){c({type:"GAME_LIST_REMOVE",payload:{id:{id:e}.id}}),y(!1),P(!0)}(l)}}),Object(j.jsx)(o,{ButtonName:"CANCEL",onClick:function(){return y(!1)}})]}),Object(j.jsxs)(v.a,{isOpen:D,onRequestClose:function(){P(!1),n.push("/history")},overlayClassName:{base:"overlay-base",afterOpen:"overlay-after",beforeClose:"overlay-before"},className:{base:"content-base",afterOpen:"content-after",beforeClose:"content-before"},closeTimeoutMS:500,children:[Object(j.jsx)("p",{children:"Removed"}),Object(j.jsx)(o,{ButtonName:"BACK TO HISTORY",onClick:function(){y(!1),P(!1),n.push("/history")}})]})]})]})};var C=function(){return Object(j.jsx)(i.a,{basename:"/",children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/create",component:x}),Object(j.jsx)(r.a,{path:"/edit/:id",component:p}),Object(j.jsx)(r.a,{path:"/history/:id",component:N}),Object(j.jsx)(r.a,{path:"/history",component:f}),Object(j.jsx)(r.a,{exact:!0,path:"/",component:b})]})})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))},S=c(17),E=c(23),D="GAME_LIST_ADD",P="GAME_LIST_REMOVE",A="GAME_LIST_EDIT",G={gameLists:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(E.a)(Object(E.a)({},e),{},{gameLists:[].concat(Object(u.a)(e.gameLists),[t.payload])});case P:var c=e.gameLists.filter((function(e){return e.id!==t.payload.id}));return{gameLists:c};case A:var a=e.gameLists.map((function(e){return e.id===t.payload.id?t.payload:e}));return{gameLists:a};default:return e}},T=Object(S.a)({gameList:L}),B=Object(S.b)(T);s.a.render(Object(j.jsx)(m.a,{store:B,children:Object(j.jsx)(C,{})}),document.getElementById("root")),y()}},[[59,1,2]]]);
//# sourceMappingURL=main.b2f42f40.chunk.js.map