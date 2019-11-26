(window["webpackJsonpreact-redux-rxjs"]=window["webpackJsonpreact-redux-rxjs"]||[]).push([[0],{46:function(e,t,n){e.exports=n(62)},55:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"counter$",function(){return h}),n.d(r,"useSimplyCounter",function(){return O}),n.d(r,"CounterDataSources",function(){return v});var o={};n.r(o),n.d(o,"init",function(){return T}),n.d(o,"UserCountDataSource",function(){return R});var u={};n.r(u),n.d(u,"userCountChanged",function(){return z}),n.d(u,"onCountWithRxJS",function(){return F});var a=n(0),c=n.n(a),i=n(20),l=n.n(i),s=n(25),f=n(26),b=n(12),d=function(){return c.a.createElement("div",{className:"home-page-container"},c.a.createElement("h1",{className:"h1-home-page"},"Welcome To Home Page"))},m=n(65),p=n(66),h=new m.a(0),v=h.pipe(Object(p.a)());function O(e){var t=Object(a.useState)(),n=Object(f.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)(function(){var t=e.subscribe(o);return function(){return t.unsubscribe()}},[e]),{addCounterHandler:function(){h.next(r+1)},deleteCounterHandler:function(){h.next(r-1)},value:r}}h.subscribe({next:function(e){return console.log("got value "+e)},error:function(e){return console.error("something wrong occurred: "+e)},complete:function(){return console.log("done")}});n(55);var C=function(){var e=Object(s.b)(function(e){return{userCount:e.userCount,counter:e.counter}}),t=O(h),n=t.addCounterHandler,r=t.deleteCounterHandler,o=t.value;return c.a.createElement("div",null,c.a.createElement("div",{className:"container-box"},c.a.createElement("div",{className:"container-buttons"},c.a.createElement("button",{className:"button-counter btn btn-lft",onClick:function(e){return n(e)}},"+"),c.a.createElement("button",{className:"button-counter btn btn-rgt",onClick:function(e){return r(e)}},"-")),c.a.createElement("div",null,"Current user's: ",e.userCount,"."),c.a.createElement("div",null,"Date to rxjs: ",o),c.a.createElement("div",null,"Date to redux from rxjs: ",e.counter)))};function j(){return c.a.createElement("div",null,c.a.createElement(b.c,null,c.a.createElement(b.a,{exact:!0,path:"/",component:d}),c.a.createElement(b.a,{path:"/home",component:d}),c.a.createElement(b.a,{path:"/user-count",component:C})))}var g=n(32),E=n(42),y=n.n(E),w=[{id:"home",label:"Home",path:"/"},{id:"userCount",label:"UserCount",path:"/user-count"}],x=n(43),N=n.n(x),S=function(e){var t=e.isOpen,n=e.menuClicked;return c.a.createElement("div",{className:"wrapper-to-hamburger-menu"},c.a.createElement(N.a,{isOpen:t,menuClicked:n,width:32,height:24,strokeWidth:4,rotate:0,color:"black",borderRadius:0,animationDuration:.2}))};var k=function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement(g.a,null,c.a.createElement(y.a,{active:n,nav:w,tagLine:"Made by",companyName:"SeN",closeMenu:function(){r(!n)}},c.a.createElement(S,{isOpen:n,menuClicked:function(){return r(!n)}}),c.a.createElement(j,null))))},D=n(15),P=n(23),U=n(27),H=n(24),J=n(28),M=new m.a(null),R=M.pipe(Object(p.a)());function T(){setInterval(function(){M.next(Math.round(20*Math.random()))},1e3),setTimeout(function(){M.complete()},1e4)}M.subscribe({next:function(e){return console.log("got value "+e)},error:function(e){return console.error("something wrong occurred: "+e)},complete:function(){return console.log("done")}});var W=n(17),A=n(67),I=(n(61),n(44)),_="USER_COUNT_CHANGED",B="COUNT";function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach(function(t){Object(I.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var $={userCount:null,counter:0};function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case _:return L({},e,{userCount:r});case B:return L({},e,{counter:r});default:return e}}function z(e){return{type:_,payload:e}}function F(e){return{type:B,payload:e}}var K=Object(A.a)(),Q=null;function V(){return Q||(Q=Object(W.c)(q,Object(W.a)(K)))}var X=function e(t){Object(D.a)(this,e),this.store=t},Y=function(e){function t(){return Object(D.a)(this,t),Object(U.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(P.a)(t,[{key:"onUserCountChanged",value:function(e){this.store.dispatch(u.userCountChanged(e))}}]),t}(X),Z=null;function ee(){o.UserCountDataSource.subscribe(function(e){return Z.onUserCountChanged(e)})}function te(e){!function(e){Z=new Y(e)}(e),ee()}var ne,re=function(e){function t(){return Object(D.a)(this,t),Object(U.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(P.a)(t,[{key:"onCount",value:function(e){this.store.dispatch(u.onCountWithRxJS(e))}}]),t}(X),oe=null;function ue(){r.CounterDataSources.subscribe(function(e){return oe.onCount(e)})}function ae(e){!function(e){oe=new re(e)}(e),ue()}te(ne=V()),ae(ne),T(),l.a.render(c.a.createElement(s.a,{store:V()},c.a.createElement(k,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ec72b1d2.chunk.js.map