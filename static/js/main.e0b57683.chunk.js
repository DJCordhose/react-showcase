(this["webpackJsonpreact-showcase"]=this["webpackJsonpreact-showcase"]||[]).push([[0],{26:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return l})),t.d(n,"e",(function(){return f})),t.d(n,"d",(function(){return p})),t.d(n,"f",(function(){return b})),t.d(n,"g",(function(){return j})),t.d(n,"h",(function(){return v}));var r=t(21),o=t.n(r),a=t(31),c=t(18),u=Object(c.b)({name:"counter",initialState:{value:0,operationInProgress:{}},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload},setValue:function(e,n){e.value=n.payload},startOperation:function(e,n){e.operationInProgress[n.payload]=!0},endOperation:function(e,n){e.operationInProgress[n.payload]=!1}}}),i=u.actions,s=i.increment,l=i.decrement,f=i.incrementByAmount,d=i.setValue,m=i.startOperation,h=i.endOperation,p=function(e){return function(n){n(m("ADD_ASYNC")),setTimeout((function(){n(f(e)),n(h("ADD_ASYNC"))}),1e3)}},b=function(){return function(){var e=Object(a.a)(o.a.mark((function e(n){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(m("LOAD")),e.prev=1,e.next=4,fetch("/api/users.json");case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,n(d(r.count)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("Fetch failed",e.t0);case 14:return e.prev=14,n(h("LOAD")),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(n){return e.apply(this,arguments)}}()},j=function(e){return e.counter.value},v=function(e){return e.counter.operationInProgress};n.b=u.reducer},41:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(14),c=t.n(a),u=(t(41),t(6));function i(e){var n=e.title;return Object(u.jsx)("h1",{children:n})}var s=t(18),l=t(26),f=Object(s.a)({reducer:{counter:l.b}}),d=t(27);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=t(25),h=t(51),p=t(34);m.a.use(p.a).use(h.e).init({debug:!0,lng:"en",fallbackLng:"en",whitelist:["en","de"],interpolation:{escapeValue:!1,format:function(e,n,t){return"euro"===n?new Intl.NumberFormat(t,{style:"currency",currency:"EUR"}).format(e):e instanceof Date?new Intl.DateTimeFormat(t).format(e):e instanceof Number?new Intl.NumberFormat(t).format(e.valueOf()):"number"===typeof e?new Intl.NumberFormat(t).format(e):e}},backend:{loadPath:"/react-showcase/locales/{{lng}}/{{ns}}.json"}});m.a;var b=t(29),j=t(2),v=Object(r.lazy)((function(){return t.e(3).then(t.bind(null,61))})),O=Object(r.lazy)((function(){return t.e(4).then(t.bind(null,60))}));c.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(d.a,{store:f,children:Object(u.jsx)(b.a,{children:Object(u.jsx)(r.Suspense,{fallback:Object(u.jsx)(i,{title:"Loading..."}),children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/",component:v}),Object(u.jsx)(j.a,{path:"/hello",component:O})]})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.e0b57683.chunk.js.map