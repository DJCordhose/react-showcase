(this["webpackJsonpreact-showcase"]=this["webpackJsonpreact-showcase"]||[]).push([[4],{96:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var r=n(0),c=n(43),a=function(){return Object(c.b)()},o=c.c,i=n(33),u=n(88),s=n(28),l=n(34);function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(u){c=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=n(1);function f(){var t=o(i.i),e=a(),n=d(Object(r.useState)(2),2),c=n[0],l=n[1],b=Object(u.a)().t;return Object(j.jsxs)(s.b,{children:[Object(j.jsx)("input",{className:"px-2 py-2 m-2 w-20","aria-label":"Set increment amount",type:"number",inputMode:"numeric",value:c,onChange:function(t){return l(Number.parseInt(t.target.value))}}),Object(j.jsx)(s.a,{testid:"count:incrementByAmount",label:b("add",{mode:"sync"}),text:b("add",{mode:"sync"}),onClick:function(){return e(Object(i.e)(null!==c&&void 0!==c?c:0))}}),Object(j.jsx)(s.a,{testid:"count:incrementByAmountAsync",label:b("add",{mode:"async"}),text:b("add",{mode:"async"}),onClick:function(){return e(Object(i.d)(null!==c&&void 0!==c?c:0))},inProgress:t.ADD_ASYNC})]})}function m(t){var e=t.count,n=Object(u.a)().t;return Object(j.jsx)("p",{children:n("users",{date:new Date,count:e,revenue:e*Math.PI})})}function O(){var t=o(i.h),e=o(i.i),n=o(i.j),c=a(),b=Object(u.a)().t;Object(r.useEffect)((function(){c(Object(i.f)())}),[c]);var d=Object(j.jsxs)("div",{children:[Object(j.jsxs)(s.b,{children:[Object(j.jsx)(s.a,{testid:"count:increment",label:"Increment value",text:"+",onClick:function(){return c(Object(i.c)())}}),Object(j.jsx)("span",{"data-testid":"count:value",className:"px-5 py-2 border-gray-900 border-2  m-2","aria-label":"Value",role:"presentation",children:t}),Object(j.jsx)(s.a,{testid:"count:decrement",label:"Decrement value",text:"-",onClick:function(){return c(Object(i.a)())}})]}),Object(j.jsx)(f,{}),Object(j.jsx)(s.b,{center:!0,children:Object(j.jsx)(s.a,{testid:"count:load",label:b("load"),text:b("load"),flat:!0,onClick:function(){return c(Object(i.g)("users2.json"))},inProgress:e.LOAD})}),Object(j.jsx)(m,{count:t})]});return n?d:Object(j.jsx)(l.a,{title:"Loading configuration..."})}}}]);
//# sourceMappingURL=4.2492b240.chunk.js.map