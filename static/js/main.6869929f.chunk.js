(this["webpackJsonpo-right"]=this["webpackJsonpo-right"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(25),a=c.n(s),o=(c(34),c(8)),i=c(9),l=c(2),u=(c(35),c(36),c(0));var d,j=function(){return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 255.26 108.96",children:[Object(u.jsx)("path",{className:"cls-1",d:"M28.5 69.32A25.89 25.89 0 102.61 43.43 25.91 25.91 0 0028.5 69.32zm0-36.1a10.21 10.21 0 11-10.21 10.21A10.22 10.22 0 0128.5 33.22z"}),Object(u.jsx)("path",{className:"cls-1",d:"M144.58 17.43a25.89 25.89 0 100 51.78h7.47V53.53h-7.47a10.21 10.21 0 1110.21-10.21v22.26a6.63 6.63 0 01-6.62 6.62H4.84v15.69h143.33a22.34 22.34 0 0022.3-22.31V43.32a25.92 25.92 0 00-25.89-25.89z"}),Object(u.jsx)("path",{className:"cls-1",d:"M137.39 43.32a7.19 7.19 0 107.19-7.18 7.18 7.18 0 00-7.19 7.18z"}),Object(u.jsx)("path",{className:"cls-2",d:"M63.13 67.44A7.18 7.18 0 1056 60.26a7.18 7.18 0 007.13 7.18zm0-13.36A6.18 6.18 0 1157 60.26a6.18 6.18 0 016.13-6.18z"}),Object(u.jsx)("path",{className:"cls-1",d:"M191.15 43.32a7.18 7.18 0 107.18-7.18 7.17 7.17 0 00-7.18 7.18zM28.49 50.5a7.18 7.18 0 10-7.19-7.18 7.18 7.18 0 007.19 7.18zM109 34a7.18 7.18 0 10-7.19-7.18A7.18 7.18 0 00109 34zM88.24 45.43a10.22 10.22 0 0110.21-10.21V19.54a25.91 25.91 0 00-25.89 25.89v23.78h15.68zM242.45 61.46v-23h9.77V22.78h-9.77V2.61h-15.69v58.85a25.93 25.93 0 0025.9 25.9V71.67a10.22 10.22 0 01-10.21-10.21z"}),Object(u.jsx)("path",{className:"cls-1",d:"M188.25 43.14a10.21 10.21 0 0120.42 0v14.45l15.69 13.61V42.26a25.88 25.88 0 00-36.08-22.9V2.61h-15.71v66.6h15.68zM100.95 35.62h15.68v33.59h-15.68zM56.5 35.71h13.67V50.5H56.5z"}),Object(u.jsx)("path",{className:"cls-2",fill:"url(#linear-gradient)",d:"M172.48 73.07h26.21V53.51l30.57 26.42-30.57 26.42V86.79h-26.21V73.07zM59.98 59.79h6.35v1h-6.35z"}),Object(u.jsx)("path",{className:"cls-2",fill:"url(#linear-gradient)",d:"M62.98 64.67l-.71-.7 3.68-3.68-3.68-3.68.71-.71 4.38 4.39-4.38 4.38z"})]})},b=c(14),h=c.n(b),v=c(26),O=c(27),f=c.n(O),x="userLevel",w=(c(57),function(e){for(var t=e.gridData,c=[],r=function(c,r){var n=t[c][r];return Object(u.jsx)("div",{className:(n.isCurrentSquare&&e.currentLevel?"current ":"")+(n.goalSquare&&e.currentLevel?"goal ":"")+"square",children:n.letter.toUpperCase()},"square-".concat(c,"-").concat(r))},n=0;n<5;n++){for(var s=[],a=0;a<5;a++)s.push(Object(u.jsx)("span",{children:r(n,a)},"wrapper-".concat(n,"-").concat(a)));c.push(Object(u.jsx)("div",{className:"row",children:s},"row-".concat(n)))}return Object(u.jsx)("div",{className:(e.currentLevel?"shown ":"")+"grid",children:Object(u.jsx)("div",{className:"wrapper",children:c})})}),p=(c(58),function(e){return Object(u.jsx)("div",{className:(e.isPlayingStatus&&!e.showMap?"hidden ":"")+"modal",children:e.isPlayingStatus?e.showMap?Object(u.jsxs)("div",{className:"box",children:[Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)("h2",{children:"MAP"}),Object(u.jsx)("img",{src:"".concat("/o-right/svg/keyboard.svg")})]}),Object(u.jsx)("div",{className:"buttons",children:Object(u.jsx)("button",{onClick:e.hideMap,children:"OKAY"})})]}):void 0:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)("h2",{children:e.winStatus?"Well done":"Unlucky"}),Object(u.jsxs)("p",{children:[e.currentWord.toUpperCase(),e.winStatus?" is a valid word":" is not a valid word"]})]}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:e.restart,children:"RESTART"}),Object(u.jsx)(i.b,{className:"button",to:"/",children:"MAP"})]})]})})});!function(e){e[e.DOWN=0]="DOWN",e[e.UP=1]="UP",e[e.LEFT=2]="LEFT",e[e.RIGHT=3]="RIGHT"}(d||(d={}));var m=[{direction:d.DOWN,keys:["c","v","b","n","j","h","g"]},{direction:d.UP,keys:["e","r","t","y","u","d","f"]},{direction:d.LEFT,keys:["q","w","a","s","z","x"]},{direction:d.RIGHT,keys:["i","o","p","k","l","m"]}],g=function(e){return m.find((function(t){return t.keys.some((function(t){return t===e}))?t:null}))},N=function(e){Object(r.useEffect)((function(){var t=function(t){var c=g(t.key);c&&e(t.key,c.direction)};return window.addEventListener("keyup",t),function(){return window.removeEventListener("keyup",t)}}))},S=(c(64),[{start:{row:2,col:3},end:{row:2,col:0}},{start:{row:0,col:1},end:{row:2,col:3}},{start:{row:2,col:3},end:{row:2,col:2}},{start:{row:2,col:2},end:{row:3,col:0}},{start:{row:2,col:2},end:{row:4,col:4}},{start:{row:4,col:4},end:{row:4,col:0}},{start:{row:1,col:1},end:{row:3,col:0}},{start:{row:0,col:2},end:{row:3,col:4}},{start:{row:0,col:4},end:{row:4,col:0}},{start:{row:4,col:4},end:{row:0,col:0}}]),k=function(e,t){for(var c=[],r=0;r<5;r++){for(var n=[],s=0;s<5;s++){var a={isCurrentSquare:e.row===r&&e.col===s,goalSquare:t.row===r&&t.col===s,letter:"",coords:{row:r,col:s}};n.push(a)}c.push(n)}return c},M=function(e){var t;return e?Number(null===(t=e.find((function(e){return e.includes("f:")})))||void 0===t?void 0:t.replace("f:","")):0},L=function(e){var t=Object(l.g)().pathname,c="/o-right/svg/icons.svg",n=Object(r.useState)(),s=Object(o.a)(n,2),a=s[0],j=s[1],b=Object(r.useState)(),O=Object(o.a)(b,2),x=O[0],m=O[1],g=Object(r.useState)(""),L=Object(o.a)(g,2),z=L[0],q=L[1],y=Object(r.useState)(!1),E=Object(o.a)(y,2),C=E[0],V=E[1],A=Object(r.useState)(k({row:0,col:0},{row:1,col:1})),T=Object(o.a)(A,2),P=T[0],U=T[1],I=Object(r.useState)(!1),W=Object(o.a)(I,2),D=W[0],H=W[1],R=Object(r.useState)(!0),F=Object(o.a)(R,2),G=F[0],B=F[1],J=Object(r.useState)(!1),K=Object(o.a)(J,2),Y=K[0],Q=K[1],X=Object(r.useState)(!1),Z=Object(o.a)(X,2),$=Z[0],_=Z[1];N((function(e,t){ee(e,t)})),Object(r.useEffect)((function(){var e=Number(t.split("/")[2]);j(S[e-1]),m(e)}),[]),Object(r.useEffect)((function(){a&&U(k(a.start,a.end))}),[a]),Object(r.useEffect)((function(){H(!0),function(){var e=Object(v.a)(h.a.mark((function e(){var t,c,r,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=ce(),!(z.length>2&&t&&t.goalSquare)){e.next=13;break}return e.next=4,f()("https://api.datamuse.com/words?sp=".concat(z,"&md=fr,d,p&max=1"));case 4:if(c=e.sent,(r=c.data[0])&&r.tags){e.next=9;break}return V(!1),e.abrupt("return");case 9:n=M(r.tags),V(r.defs&&r.defs.length>0&&r.word===z&&r.tags&&!r.tags.includes("prop")&&n>.15||!1),e.next=14;break;case 13:V(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){H(!1)}))}),[z]),Object(r.useEffect)((function(){var e=ce();!1===D&&e&&e.goalSquare&&(Q(C),B(!1))}),[D]),Object(r.useEffect)((function(){Y&&e.userLevel===x&&e.nextLevel()}),[Y]);var ee=function(e,t){if(P){var c,r=P,n=ce();switch(t){case d.UP:if(0===(null===n||void 0===n?void 0:n.coords.row))return;c=P[n.coords.row-1][n.coords.col];break;case d.DOWN:if(4===(null===n||void 0===n?void 0:n.coords.row))return;c=P[n.coords.row+1][n.coords.col];break;case d.LEFT:if(0===(null===n||void 0===n?void 0:n.coords.col))return;c=P[n.coords.row][n.coords.col-1];break;case d.RIGHT:if(4===(null===n||void 0===n?void 0:n.coords.col))return;c=P[n.coords.row][n.coords.col+1]}if(!c.letter){c.isCurrentSquare=!0,r[c.coords.row][c.coords.col]=c;var s=r[n.coords.row][n.coords.col];s.isCurrentSquare=!1,s.letter=e,q(z+e),U(r)}}},te=function(){q(""),U(k(a.start,a.end)),B(!0),Q(!1)},ce=function(){return P?P.find((function(e){return e.some((function(e){return!0===e.isCurrentSquare}))})).find((function(e){return e.isCurrentSquare})):null};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{children:[Object(u.jsx)(w,{gridData:P,currentLevel:a}),Object(u.jsx)("div",{className:"text-box",children:Object(u.jsx)("h3",{children:z.toUpperCase()})})]}),Object(u.jsx)(p,{isPlayingStatus:G,winStatus:Y,currentWord:z,restart:te,showMap:$,hideMap:function(){return _(!1)}}),Object(u.jsxs)("div",{className:"side-bar",children:[Object(u.jsx)("button",{className:"square-btn",onClick:te,children:Object(u.jsx)("svg",{children:Object(u.jsx)("use",{href:"".concat(c,"#reset")})})}),Object(u.jsx)(i.b,{className:"button square-btn",to:"/",children:Object(u.jsx)("svg",{className:"arrow-left",children:Object(u.jsx)("use",{href:"".concat(c,"#arrow")})})}),Object(u.jsx)("button",{className:"square-btn",onClick:function(){return _(!0)},children:Object(u.jsx)("svg",{children:Object(u.jsx)("use",{href:"".concat(c,"#map")})})})]})]})},z=(c(65),function(e){for(var t=[],c=1;c<S.length+1;c++){var r=c>e.userLevel,n=r?"":"".concat(c);t.push(Object(u.jsx)(i.b,{className:(r?"disabled ":"")+"square button",to:"level/".concat(c),children:n},"menu-".concat(c)))}return Object(u.jsx)("div",{className:"menu-grid",children:t})}),q=function(e){return Number(e.location&&e.location.pathname.split("/")[2])<=e.userLevel?Object(u.jsx)(l.b,{path:e.path,children:Object(u.jsx)(L,{userLevel:e.userLevel,nextLevel:e.nextLevel})}):Object(u.jsx)(l.a,{to:"/"})},y=function(){var e=Object(r.useState)(1),t=Object(o.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){var e=localStorage.getItem(x);n(Number(e||1))}),[]);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{children:Object(u.jsx)(j,{})}),Object(u.jsx)("main",{children:Object(u.jsx)(i.a,{basename:"/",children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(q,{path:"/level/:id",component:L,userLevel:c,nextLevel:function(){var e=c+1;n(e),localStorage.setItem(x,"".concat(e))}}),Object(u.jsx)(l.b,{exact:!0,path:"/",children:Object(u.jsx)(z,{userLevel:c})})]})})})]})};a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.6869929f.chunk.js.map