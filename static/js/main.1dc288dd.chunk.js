(this["webpackJsonpreact-showcase"]=this["webpackJsonpreact-showcase"]||[]).push([[0],{33:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return l})),t.d(n,"e",(function(){return f})),t.d(n,"d",(function(){return h})),t.d(n,"f",(function(){return g})),t.d(n,"g",(function(){return m})),t.d(n,"h",(function(){return v})),t.d(n,"i",(function(){return O})),t.d(n,"j",(function(){return w}));var r=t(8),a=t.n(r),c=t(14),o=t(25),i=(t(45),Object(o.b)({name:"counter",initialState:{value:0,operationInProgress:{}},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload},setValue:function(e,n){e.value=n.payload},startOperation:function(e,n){e.operationInProgress[n.payload]=!0},endOperation:function(e,n){e.operationInProgress[n.payload]=!1},configureBackendUrl:function(e,n){e.backendApiUrl=n.payload}}})),u=i.actions,s=u.increment,l=u.decrement,f=u.incrementByAmount,d=u.setValue,b=u.startOperation,j=u.endOperation,p=u.configureBackendUrl,h=function(e){return function(){var n=Object(c.a)(a.a.mark((function n(t){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(b("ADD_ASYNC")),n.next=3,new Promise((function(e){return setTimeout(e,1e3)}));case 3:t(f(e)),t(j("ADD_ASYNC"));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(){return function(){var e=Object(c.a)(a.a.mark((function e(n,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(t())){e.next=3;break}return e.next=3,n(function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1e3)}));case 2:n(p("/react-showcase/api/"));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 3:return e.next=5,Promise.all([n(m())]);case 5:console.log("all initialized");case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"users.json";return function(){var n=Object(c.a)(a.a.mark((function n(t,r){var c,o,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=r().counter.backendApiUrl){n.next=3;break}throw new Error("backend not not configured");case 3:return o=t(x(c+e)),console.log(o),n.next=8,o;case 8:i=n.sent,console.log(o),console.log(i);case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},x=function(e){return function(){var n=Object(c.a)(a.a.mark((function n(t){var r,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(b("LOAD")),n.prev=1,n.next=4,fetch(e);case 4:return r=n.sent,n.next=7,r.json();case 7:return c=n.sent,t(d(c.count)),n.abrupt("return",c.count);case 12:n.prev=12,n.t0=n.catch(1),console.error("Fetch failed",n.t0);case 15:return n.prev=15,t(j("LOAD")),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,12,15,18]])})));return function(e){return n.apply(this,arguments)}}()},v=function(e){return e.counter.value},O=function(e){return e.counter.operationInProgress},w=function(e){return void 0!==e.counter.backendApiUrl};n.b=i.reducer},34:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));t(0);var r=t(44),a=t.n(r),c=t(1);function o(e){var n=e.title;return Object(c.jsx)("div",{className:a.a.loading,children:n})}},44:function(e,n,t){e.exports={loading:"LoadingIndicator_loading__S3DGW"}},56:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(22),o=t.n(c),i=(t(56),t(57),t(34)),u=t(25),s=t(33),l=Object(u.a)({reducer:{counter:s.b}}),f=t(43);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=t(17),b=t(31),j=t(20),p=t(47);b.a.use(p.a).use(j.e).init({debug:!1,lng:"en",fallbackLng:"en",whitelist:["en","de"],interpolation:{escapeValue:!1,format:function(e,n,t){return"euro"===n?new Intl.NumberFormat(t,{style:"currency",currency:"EUR"}).format(e):e instanceof Date?new Intl.DateTimeFormat(t).format(e):e instanceof Number?new Intl.NumberFormat(t).format(e.valueOf()):"number"===typeof e?new Intl.NumberFormat(t).format(e):e}},backend:{loadPath:"/react-showcase/locales/{{lng}}/{{ns}}.json"}});b.a;var h=t(88),g=t(28),m=t(1);function x(){var e=Object(h.a)(),n=e.t,t=e.i18n;return Object(m.jsxs)("div",{className:"flex justify-end",children:["de"!==t.language&&Object(m.jsx)(g.a,{testid:"language:switch:de",label:"Change Language",text:n("de"),onClick:function(){return t.changeLanguage("de")}}),"en"!==t.language&&Object(m.jsx)(g.a,{testid:"language:switch:en",label:"Change Language",text:n("en"),onClick:function(){return t.changeLanguage("en")}})]})}var v=t(19);function O(){var e=Object(h.a)().t;return Object(m.jsx)("div",{className:"flex justify-end",children:Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(v.b,{exact:!0,activeClassName:"bg-gray-300",className:"bg-gray-100",to:"/",children:e("home")})}),Object(m.jsx)("li",{children:Object(m.jsx)(v.b,{exact:!0,activeClassName:"bg-gray-300",className:"bg-gray-100",to:"/hello",children:e("hello")})})]})})})}var w=t(3),y=Object(r.lazy)((function(){return t.e(4).then(t.bind(null,96))})),k=Object(r.lazy)((function(){return Promise.all([t.e(3),t.e(5)]).then(t.bind(null,95))}));var N=function(){return Object(m.jsx)("div",{id:"cnt-app",className:"p-6 max-w-sm mx-auto space-x-5",children:Object(m.jsxs)(v.a,{basename:"/react-showcase",children:[Object(m.jsx)(O,{}),Object(m.jsx)(x,{}),Object(m.jsxs)(w.c,{children:[Object(m.jsx)(w.a,{exact:!0,path:"/",component:y}),Object(m.jsx)(w.a,{path:"/hello",component:k})]})]})})};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(f.a,{store:l,children:Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)(i.a,{title:"Loading..."}),children:Object(m.jsx)(N,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Object(d.e)(console.log),Object(d.b)(console.log),Object(d.d)(console.log),Object(d.c)(console.log),Object(d.a)(console.log)}},[[87,1,2]]]);
//# sourceMappingURL=main.1dc288dd.chunk.js.map