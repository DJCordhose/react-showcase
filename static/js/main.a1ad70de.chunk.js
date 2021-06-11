(this["webpackJsonpreact-showcase"]=this["webpackJsonpreact-showcase"]||[]).push([[0],{32:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return l})),t.d(n,"e",(function(){return f})),t.d(n,"d",(function(){return g})),t.d(n,"f",(function(){return h})),t.d(n,"g",(function(){return m})),t.d(n,"h",(function(){return v})),t.d(n,"i",(function(){return O})),t.d(n,"j",(function(){return w}));var r=t(8),a=t.n(r),c=t(13),o=t(24),i=(t(44),Object(o.b)({name:"counter",initialState:{value:0,operationInProgress:{}},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload},setValue:function(e,n){e.value=n.payload},startOperation:function(e,n){e.operationInProgress[n.payload]=!0},endOperation:function(e,n){e.operationInProgress[n.payload]=!1},configureBackend:function(e,n){e.backendApiUrl=n.payload.url,e.backendApiSuffix=n.payload.suffix}}})),u=i.actions,s=u.increment,l=u.decrement,f=u.incrementByAmount,d=u.setValue,b=u.startOperation,p=u.endOperation,j=u.configureBackend,g=function(e){return function(){var n=Object(c.a)(a.a.mark((function n(t){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(b("ADD_ASYNC")),n.next=3,new Promise((function(e){return setTimeout(e,1e3)}));case 3:t(f(e)),t(p("ADD_ASYNC"));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(){return function(){var e=Object(c.a)(a.a.mark((function e(n,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(t())){e.next=3;break}return e.next=3,n(function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1e3)}));case 2:console.log("."),n(j({url:"./mockapi/",suffix:".json"}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 3:return e.next=5,Promise.all([n(m())]);case 5:console.log("all initialized");case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"users";return function(){var n=Object(c.a)(a.a.mark((function n(t,r){var c,o,i,u,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=r().counter.backendApiUrl,o=r().counter.backendApiSuffix,c){n.next=4;break}throw new Error("backend not not configured");case 4:return i=c+e+o,console.log("loading from ".concat(i)),u=t(x(i)),console.log(u),n.next=10,u;case 10:s=n.sent,console.log(u),console.log(s);case 13:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},x=function(e){return function(){var n=Object(c.a)(a.a.mark((function n(t){var r,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(b("LOAD")),n.prev=1,n.next=4,fetch(e,{headers:{Accept:"application/json"}});case 4:return r=n.sent,n.next=7,r.json();case 7:return c=n.sent,t(d(c.count)),n.abrupt("return",c.count);case 12:n.prev=12,n.t0=n.catch(1),console.error("Fetch failed",n.t0);case 15:return n.prev=15,t(p("LOAD")),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,12,15,18]])})));return function(e){return n.apply(this,arguments)}}()},v=function(e){return e.counter.value},O=function(e){return e.counter.operationInProgress},w=function(e){return void 0!==e.counter.backendApiUrl};n.b=i.reducer},33:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));t(0);var r=t(43),a=t.n(r),c=t(1);function o(e){var n=e.title;return Object(c.jsx)("div",{className:a.a.loading,children:n})}},43:function(e,n,t){e.exports={loading:"LoadingIndicator_loading__S3DGW"}},55:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(21),o=t.n(c),i=(t(55),t(56),t(33)),u=t(24),s=t(32),l=Object(u.a)({reducer:{counter:s.b}}),f=t(42);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=t(16),b=t(30),p=t(19),j=t(46);b.a.use(j.a).use(p.e).init({debug:!1,lng:"en",fallbackLng:"en",whitelist:["en","de"],interpolation:{escapeValue:!1,format:function(e,n,t){return"euro"===n?new Intl.NumberFormat(t,{style:"currency",currency:"EUR"}).format(e):e instanceof Date?new Intl.DateTimeFormat(t).format(e):e instanceof Number?new Intl.NumberFormat(t).format(e.valueOf()):"number"===typeof e?new Intl.NumberFormat(t).format(e):e}},backend:{loadPath:"./locales/{{lng}}/{{ns}}.json"}});b.a;var g=t(87),h=t(27),m=t(1);function x(){var e=Object(g.a)(),n=e.t,t=e.i18n;return Object(m.jsxs)("div",{className:"flex justify-end",children:["de"!==t.language&&Object(m.jsx)(h.a,{testid:"language:switch:de",label:"Change Language",text:n("de"),onClick:function(){return t.changeLanguage("de")}}),"en"!==t.language&&Object(m.jsx)(h.a,{testid:"language:switch:en",label:"Change Language",text:n("en"),onClick:function(){return t.changeLanguage("en")}})]})}var v=t(18);function O(){var e=Object(g.a)().t;return Object(m.jsx)("div",{className:"flex justify-end",children:Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(v.b,{exact:!0,activeClassName:"bg-gray-300",className:"bg-gray-100",to:"/",children:e("home")})}),Object(m.jsx)("li",{children:Object(m.jsx)(v.b,{exact:!0,activeClassName:"bg-gray-300",className:"bg-gray-100",to:"/hello",children:e("hello")})})]})})})}var w=t(3),y=Object(r.lazy)((function(){return t.e(4).then(t.bind(null,95))})),k=Object(r.lazy)((function(){return Promise.all([t.e(3),t.e(5)]).then(t.bind(null,94))}));var A=function(){return Object(m.jsx)("div",{id:"cnt-app",className:"p-6 max-w-sm mx-auto space-x-5",children:Object(m.jsxs)(v.a,{basename:".",children:[Object(m.jsx)(O,{}),Object(m.jsx)(x,{}),Object(m.jsxs)(w.c,{children:[Object(m.jsx)(w.a,{exact:!0,path:"/",component:y}),Object(m.jsx)(w.a,{path:"/hello",component:k})]})]})})};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(f.a,{store:l,children:Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)(i.a,{title:"Loading..."}),children:Object(m.jsx)(A,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Object(d.e)(console.log),Object(d.b)(console.log),Object(d.d)(console.log),Object(d.c)(console.log),Object(d.a)(console.log)}},[[86,1,2]]]);
//# sourceMappingURL=main.a1ad70de.chunk.js.map