(this["webpackJsonpo-right"]=this["webpackJsonpo-right"]||[]).push([[0],{34:function(e,t,o){},35:function(e,t,o){},36:function(e,t,o){},57:function(e,t,o){},58:function(e,t,o){},64:function(e,t,o){},65:function(e,t,o){},66:function(e,t,o){},67:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n),c=o(25),s=o.n(c),u=(o(34),o(4)),l=o(9),a=o(2),i=(o(35),o(36),o(0));var d,j=function(){return Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 255.26 108.96",children:[Object(i.jsx)("path",{className:"cls-1",d:"M28.5 69.32A25.89 25.89 0 102.61 43.43 25.91 25.91 0 0028.5 69.32zm0-36.1a10.21 10.21 0 11-10.21 10.21A10.22 10.22 0 0128.5 33.22z"}),Object(i.jsx)("path",{className:"cls-1",d:"M144.58 17.43a25.89 25.89 0 100 51.78h7.47V53.53h-7.47a10.21 10.21 0 1110.21-10.21v22.26a6.63 6.63 0 01-6.62 6.62H4.84v15.69h143.33a22.34 22.34 0 0022.3-22.31V43.32a25.92 25.92 0 00-25.89-25.89z"}),Object(i.jsx)("path",{className:"cls-1",d:"M137.39 43.32a7.19 7.19 0 107.19-7.18 7.18 7.18 0 00-7.19 7.18z"}),Object(i.jsx)("path",{className:"cls-2",d:"M63.13 67.44A7.18 7.18 0 1056 60.26a7.18 7.18 0 007.13 7.18zm0-13.36A6.18 6.18 0 1157 60.26a6.18 6.18 0 016.13-6.18z"}),Object(i.jsx)("path",{className:"cls-1",d:"M191.15 43.32a7.18 7.18 0 107.18-7.18 7.17 7.17 0 00-7.18 7.18zM28.49 50.5a7.18 7.18 0 10-7.19-7.18 7.18 7.18 0 007.19 7.18zM109 34a7.18 7.18 0 10-7.19-7.18A7.18 7.18 0 00109 34zM88.24 45.43a10.22 10.22 0 0110.21-10.21V19.54a25.91 25.91 0 00-25.89 25.89v23.78h15.68zM242.45 61.46v-23h9.77V22.78h-9.77V2.61h-15.69v58.85a25.93 25.93 0 0025.9 25.9V71.67a10.22 10.22 0 01-10.21-10.21z"}),Object(i.jsx)("path",{className:"cls-1",d:"M188.25 43.14a10.21 10.21 0 0120.42 0v14.45l15.69 13.61V42.26a25.88 25.88 0 00-36.08-22.9V2.61h-15.71v66.6h15.68zM100.95 35.62h15.68v33.59h-15.68zM56.5 35.71h13.67V50.5H56.5z"}),Object(i.jsx)("path",{className:"cls-2",fill:"url(#linear-gradient)",d:"M172.48 73.07h26.21V53.51l30.57 26.42-30.57 26.42V86.79h-26.21V73.07zM59.98 59.79h6.35v1h-6.35z"}),Object(i.jsx)("path",{className:"cls-2",fill:"url(#linear-gradient)",d:"M62.98 64.67l-.71-.7 3.68-3.68-3.68-3.68.71-.71 4.38 4.39-4.38 4.38z"})]})},w=o(14),b=o.n(w),f=o(26),h=o(27),M=o.n(h);!function(e){e.DOWN="down",e.UP="up",e.LEFT="left",e.RIGHT="right"}(d||(d={}));var O=[{direction:d.DOWN,keys:["c","v","b","n","j","h","g"]},{direction:d.UP,keys:["e","r","t","y","u","d","f"]},{direction:d.LEFT,keys:["q","w","a","s","z","x"]},{direction:d.RIGHT,keys:["i","o","p","k","l","m"]}],p=function(e){return O.find((function(t){return t.keys.some((function(t){return t===e}))?t:null}))},v="userLevel",x={start:{row:0,col:0},end:{row:1,col:1}},m="/o-right/svg/icons.svg",N=(o(57),function(e){for(var t=e.gridData,o=[],n=function(o,n){var r=t[o][n];return Object(i.jsx)("div",{className:"".concat(function(){if(e.currentLevel)return(r.isCurrentSquare?"current ":"")+(r.isGoalSquare?"goal ":"")+(r.isMineSquare?"mine ":"")+(r.isKeySquare?"key ":"")}(),"square"),children:e.keyDown&&r.isCurrentSquare?Object(i.jsx)("svg",{className:"arrow-".concat(e.keyDown),children:Object(i.jsx)("use",{href:"".concat(m,"#arrow")})}):Object(i.jsx)("span",{children:r.letter.toUpperCase()})},"square-".concat(o,"-").concat(n))},r=0;r<5;r++){for(var c=[],s=0;s<5;s++)c.push(Object(i.jsx)("span",{children:n(r,s)},"wrapper-".concat(r,"-").concat(s)));o.push(Object(i.jsx)("div",{className:"row",children:c},"row-".concat(r)))}return Object(i.jsx)("div",{className:"".concat("".concat(e.currentLevel?"shown ":"","\n            ").concat(e.isShaking?"shaking ":"")," grid"),children:Object(i.jsx)("div",{className:"wrapper",children:o})})}),D=(o(58),function(e){return Object(i.jsx)("div",{className:(e.isPlayingStatus&&!e.showMap?"hidden ":"")+"modal",children:e.isPlayingStatus?e.showMap?Object(i.jsxs)("div",{className:"box",children:[Object(i.jsxs)("div",{className:"text",children:[Object(i.jsx)("h2",{children:"MAP"}),Object(i.jsx)("img",{src:"".concat("/o-right/svg/keyboard.svg")})]}),Object(i.jsx)("div",{className:"buttons",children:Object(i.jsx)("button",{onClick:e.hideMap,children:"OKAY"})})]}):void 0:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsxs)("div",{className:"text",children:[Object(i.jsx)("h2",{children:e.winStatus?"Well done":"Unlucky"}),Object(i.jsxs)("p",{children:[e.currentWord.toUpperCase(),e.winStatus?" is a valid word":" is not a valid word"]})]}),Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("button",{onClick:e.restart,children:"RESTART"}),Object(i.jsx)(l.b,{className:"button",to:"/",children:"MAP"})]})]})})}),U=function(e){Object(n.useEffect)((function(){var t=function(t){var o=p(t.key);o&&e(t.key,o.direction)};return window.addEventListener("keyup",t),function(){return window.removeEventListener("keyup",t)}}))},g=(o(64),[{start:{row:3,col:0},end:{row:3,col:4}},{start:{row:2,col:3},end:{row:2,col:0}},{start:{row:4,col:0},end:{row:0,col:0}},{start:{row:2,col:3},end:{row:2,col:2}},{start:{row:0,col:3},end:{row:3,col:2}},{start:{row:3,col:4},end:{row:3,col:0}},{start:{row:4,col:4},end:{row:2,col:0}},{start:{row:0,col:1},end:{row:3,col:3}},{start:{row:0,col:4},end:{row:3,col:0}},{start:{row:4,col:4},end:{row:0,col:0}},{start:{row:1,col:2},end:{row:1,col:3},mines:[{row:2,col:2}]},{start:{row:4,col:3},end:{row:2,col:3},mines:[{row:3,col:3}]},{start:{row:1,col:1},end:{row:1,col:3},mines:[{row:1,col:2}]},{start:{row:2,col:0},end:{row:0,col:2},mines:[{row:2,col:1},{row:0,col:1}]},{start:{row:3,col:0},end:{row:0,col:3},mines:[{row:2,col:0},{row:1,col:2}]},{start:{row:1,col:0},end:{row:0,col:4},mines:[{row:0,col:1},{row:1,col:1}]},{start:{row:4,col:3},end:{row:0,col:0},mines:[{row:4,col:0},{row:3,col:3}]},{start:{row:4,col:2},end:{row:0,col:1},mines:[{row:3,col:2},{row:4,col:1}]},{start:{row:0,col:2},end:{row:4,col:2},mines:[{row:2,col:2}]},{start:{row:0,col:3},end:{row:4,col:1},mines:[{row:1,col:1},{row:1,col:3}]},{start:{row:1,col:2},end:{row:2,col:2},keys:[{row:3,col:1}]},{start:{row:1,col:1},end:{row:0,col:3},keys:[{row:0,col:0}]},{start:{row:3,col:4},end:{row:1,col:3},keys:[{row:4,col:3}]},{start:{row:1,col:1},end:{row:3,col:3},keys:[{row:4,col:2}]},{start:{row:4,col:1},end:{row:1,col:1},keys:[{row:3,col:3}]},{start:{row:1,col:2},end:{row:4,col:2},keys:[{row:3,col:1},{row:3,col:3}]},{start:{row:3,col:4},end:{row:1,col:3},keys:[{row:0,col:1},{row:3,col:1}]},{start:{row:3,col:4},end:{row:1,col:0},keys:[{row:4,col:3}]},{start:{row:2,col:1},end:{row:1,col:2},keys:[{row:3,col:0},{row:1,col:3}]},{start:{row:2,col:2},end:{row:3,col:3},keys:[{row:0,col:0}]}]),k=function(e){Object(n.useEffect)((function(){var t=function(t){var o=p(t.key);o&&e(o.direction)};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}))},y=(o(65),function(e){return Object(i.jsxs)("div",{className:"keyboard",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("button",{className:"left",onMouseDown:function(){return e.letterMouseDown("q")},onMouseUp:function(){return e.letterMouseUp("q")},children:"Q"}),Object(i.jsx)("button",{className:"left",onMouseDown:function(){return e.letterMouseDown("w")},onMouseUp:function(){return e.letterMouseUp("w")},children:"W"}),Object(i.jsx)("button",{className:"up",onMouseDown:function(){return e.letterMouseDown("e")},onMouseUp:function(){return e.letterMouseUp("e")},children:"E"}),Object(i.jsx)("button",{className:"up",onMouseDown:function(){return e.letterMouseDown("r")},onMouseUp:function(){return e.letterMouseUp("r")},children:"R"}),Object(i.jsx)("button",{className:"up",onMouseDown:function(){return e.letterMouseDown("t")},onMouseUp:function(){return e.letterMouseUp("t")},children:"T"}),Object(i.jsx)("button",{className:"up",onMouseDown:function(){return e.letterMouseDown("y")},onMouseUp:function(){return e.letterMouseUp("y")},children:"Y"}),Object(i.jsx)("button",{className:"up",onMouseDown:function(){return e.letterMouseDown("u")},onMouseUp:function(){return e.letterMouseUp("u")},children:"U"}),Object(i.jsx)("button",{className:"right",onMouseDown:function(){return e.letterMouseDown("i")},onMouseUp:function(){return e.letterMouseUp("i")},children:"I"}),Object(i.jsx)("button",{className:"right",onMouseDown:function(){return e.letterMouseDown("o")},onMouseUp:function(){return e.letterMouseUp("o")},children:"O"}),Object(i.jsx)("button",{className:"right",onMouseDown:function(){return e.letterMouseDown("p")},onMouseUp:function(){return e.letterMouseUp("p")},children:"P"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("button",{className:"left",onMouseDown:function(){return e.letterMouseDown("a")},onMouseUp:function(){return e.letterMouseUp("a")},children:"A"}),Object(i.jsx)("button",{className:"left",onMouseDown:function(){return e.letterMouseDown("s")},onMouseUp:function(){return e.letterMouseUp("s")},children:"S"}),Object(i.jsx)("button",{className:"up",onMouseDown:function(){return e.letterMouseDown("d")},onMouseUp:function(){return e.letterMouseUp("d")},children:"D"}),Object(i.jsx)("button",{className:"up",onMouseDown:function(){return e.letterMouseDown("f")},onMouseUp:function(){return e.letterMouseUp("f")},children:"F"}),Object(i.jsx)("button",{className:"down",onMouseDown:function(){return e.letterMouseDown("g")},onMouseUp:function(){return e.letterMouseUp("g")},children:"G"}),Object(i.jsx)("button",{className:"down",onMouseDown:function(){return e.letterMouseDown("h")},onMouseUp:function(){return e.letterMouseUp("h")},children:"H"}),Object(i.jsx)("button",{className:"down",onMouseDown:function(){return e.letterMouseDown("j")},onMouseUp:function(){return e.letterMouseUp("j")},children:"J"}),Object(i.jsx)("button",{className:"right",onMouseDown:function(){return e.letterMouseDown("k")},onMouseUp:function(){return e.letterMouseUp("k")},children:"K"}),Object(i.jsx)("button",{className:"right",onMouseDown:function(){return e.letterMouseDown("l")},onMouseUp:function(){return e.letterMouseUp("l")},children:"L"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("button",{className:"left",onMouseDown:function(){return e.letterMouseDown("z")},onMouseUp:function(){return e.letterMouseUp("z")},children:"Z"}),Object(i.jsx)("button",{className:"left",onMouseDown:function(){return e.letterMouseDown("x")},onMouseUp:function(){return e.letterMouseUp("x")},children:"X"}),Object(i.jsx)("button",{className:"down",onMouseDown:function(){return e.letterMouseDown("c")},onMouseUp:function(){return e.letterMouseUp("c")},children:"C"}),Object(i.jsx)("button",{className:"down",onMouseDown:function(){return e.letterMouseDown("v")},onMouseUp:function(){return e.letterMouseUp("v")},children:"V"}),Object(i.jsx)("button",{className:"down",onMouseDown:function(){return e.letterMouseDown("b")},onMouseUp:function(){return e.letterMouseUp("b")},children:"B"}),Object(i.jsx)("button",{className:"down",onMouseDown:function(){return e.letterMouseDown("n")},onMouseUp:function(){return e.letterMouseUp("n")},children:"N"}),Object(i.jsx)("button",{className:"right",onMouseDown:function(){return e.letterMouseDown("m")},onMouseUp:function(){return e.letterMouseUp("m")},children:"M"})]})]})}),S=function(e){for(var t=[],o=function(o){for(var n=[],r=function(t){var r,c,s={isCurrentSquare:e.start.row===o&&e.start.col===t,isGoalSquare:e.end.row===o&&e.end.col===t,isMineSquare:(null===(r=e.mines)||void 0===r?void 0:r.some((function(e){return e.row===o&&e.col===t})))||!1,isKeySquare:(null===(c=e.keys)||void 0===c?void 0:c.some((function(e){return e.row===o&&e.col===t})))||!1,letter:"",coords:{row:o,col:t}};n.push(s)},c=0;c<5;c++)r(c);t.push(n)},n=0;n<5;n++)o(n);return t},q=function(e){var t;return e?Number(null===(t=e.find((function(e){return e.includes("f:")})))||void 0===t?void 0:t.replace("f:","")):0},L=function(e){var t=Object(a.g)().pathname,o=Object(n.useState)(),r=Object(u.a)(o,2),c=r[0],s=r[1],j=Object(n.useState)(),w=Object(u.a)(j,2),h=w[0],O=w[1],v=Object(n.useState)(""),L=Object(u.a)(v,2),z=L[0],E=L[1],C=Object(n.useState)(!1),V=Object(u.a)(C,2),A=V[0],T=V[1],P=Object(n.useState)(S(x)),G=Object(u.a)(P,2),I=G[0],W=G[1],H=Object(n.useState)(!1),R=Object(u.a)(H,2),F=R[0],K=R[1],B=Object(n.useState)(!0),J=Object(u.a)(B,2),Y=J[0],Q=J[1],X=Object(n.useState)(!1),Z=Object(u.a)(X,2),$=Z[0],_=Z[1],ee=Object(n.useState)(!1),te=Object(u.a)(ee,2),oe=te[0],ne=te[1],re=Object(n.useState)(!1),ce=Object(u.a)(re,2),se=ce[0],ue=ce[1],le=Object(n.useState)(null),ae=Object(u.a)(le,2),ie=ae[0],de=ae[1];k((function(e){de(e)})),U((function(e,t){de(null),je(e,t)})),Object(n.useEffect)((function(){var e=Number(t.split("/")[2]);s(g[e-1]),O(e)}),[]),Object(n.useEffect)((function(){c&&W(S(c))}),[c]),Object(n.useEffect)((function(){K(!0),function(){var e=Object(f.a)(b.a.mark((function e(){var t,o,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=be(),!(z.length>2&&t&&t.isGoalSquare)){e.next=13;break}return e.next=4,M()("https://api.datamuse.com/words?sp=".concat(z,"&md=fr,d,p&max=1"));case 4:if(o=e.sent,(n=o.data[0])&&n.tags){e.next=9;break}return T(!1),e.abrupt("return");case 9:r=q(n.tags),T(n.word===z&&n.tags&&!n.tags.includes("prop")&&r>.01||!1),e.next=14;break;case 13:T(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){K(!1)}))}),[z]),Object(n.useEffect)((function(){var e=be();!1===F&&e&&e.isGoalSquare&&(_(A&&fe()),Q(!1))}),[F]),Object(n.useEffect)((function(){$&&e.userLevel===h&&e.nextLevel()}),[$]);var je=function(e,t){if(I){var o,n=I,r=be();switch(t){case d.UP:if(0===(null===r||void 0===r?void 0:r.coords.row))return void he();o=I[r.coords.row-1][r.coords.col];break;case d.DOWN:if(4===(null===r||void 0===r?void 0:r.coords.row))return void he();o=I[r.coords.row+1][r.coords.col];break;case d.LEFT:if(0===(null===r||void 0===r?void 0:r.coords.col))return void he();o=I[r.coords.row][r.coords.col-1];break;case d.RIGHT:if(4===(null===r||void 0===r?void 0:r.coords.col))return void he();o=I[r.coords.row][r.coords.col+1]}if(o.letter||o.isMineSquare)he();else{o.isCurrentSquare=!0,n[o.coords.row][o.coords.col]=o;var c=n[r.coords.row][r.coords.col];c.isCurrentSquare=!1,c.letter=e,E(z+e),W(n)}}},we=function(){E(""),W(S(c)),Q(!0),_(!1)},be=function(){return I&&I.flat().find((function(e){return e.isCurrentSquare}))},fe=function(){var e=I.flat().filter((function(e){return e.isKeySquare}));return!e||!e.some((function(e){return""===e.letter}))},he=function(){ue(!0),setTimeout((function(){ue(!1)}),600)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{children:[Object(i.jsx)(N,{gridData:I,currentLevel:c,isShaking:se,keyDown:ie}),Object(i.jsx)(y,{letterMouseDown:function(e){var t=p(e);de((null===t||void 0===t?void 0:t.direction)||null)},letterMouseUp:function(e){de(null);var t=p(e);t&&je(e,t.direction)}}),Object(i.jsx)("div",{className:"text-box",children:Object(i.jsx)("h3",{children:z.toUpperCase()})})]}),Object(i.jsx)(D,{isPlayingStatus:Y,winStatus:$,currentWord:z,restart:we,showMap:oe,hideMap:function(){return ne(!1)}}),Object(i.jsxs)("div",{className:"side-bar",children:[Object(i.jsx)("button",{className:"square-btn",onClick:we,children:Object(i.jsx)("svg",{children:Object(i.jsx)("use",{href:"".concat(m,"#reset")})})}),Object(i.jsx)(l.b,{className:"button square-btn",to:"/",children:Object(i.jsx)("svg",{className:"arrow-left",children:Object(i.jsx)("use",{href:"".concat(m,"#arrow")})})}),Object(i.jsx)("button",{className:"square-btn",onClick:function(){return ne(!0)},children:Object(i.jsx)("svg",{children:Object(i.jsx)("use",{href:"".concat(m,"#map")})})})]})]})},z=(o(66),function(e){for(var t=[],o=1;o<g.length+1;o++){var n=o>e.userLevel,r=n?"":"".concat(o);t.push(Object(i.jsx)(l.b,{className:(n?"disabled ":"")+"square button",to:"level/".concat(o),children:r},"menu-".concat(o)))}return Object(i.jsx)("div",{className:"menu-grid",children:t})}),E=function(e){return Number(e.location&&e.location.pathname.split("/")[2])<=e.userLevel?Object(i.jsx)(a.b,{path:e.path,children:Object(i.jsx)(L,{userLevel:e.userLevel,nextLevel:e.nextLevel})}):Object(i.jsx)(a.a,{to:"/"})},C=function(){var e=Object(n.useState)(1),t=Object(u.a)(e,2),o=t[0],r=t[1];Object(n.useEffect)((function(){var e=localStorage.getItem(v);r(Number(e||1))}),[]);return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{children:Object(i.jsx)(j,{})}),Object(i.jsx)("main",{children:Object(i.jsx)(l.a,{basename:"/",children:Object(i.jsxs)(a.d,{children:[Object(i.jsx)(E,{path:"/level/:id",component:L,userLevel:o,nextLevel:function(){var e=o+1;r(e),localStorage.setItem(v,"".concat(e))}}),Object(i.jsx)(a.b,{exact:!0,path:"/",children:Object(i.jsx)(z,{userLevel:o})})]})})})]})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.fa9197ca.chunk.js.map