"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[405],{60912:function(R,i,_){_.r(i);var E=_(15009),a=_.n(E),g=_(99289),P=_.n(g),D=_(5574),t=_.n(D),r=_(35312),l=_(62435),s=_(86074);function M(){var O=(0,l.useState)(""),d=t()(O,2),m=d[0],y=d[1],v=(0,l.useState)(""),h=t()(v,2),j=h[0],c=h[1],u=(0,r.useRequest)(P()(a()().mark(function A(){var n,o,p;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.request)("https://api.ipify.org?format=json");case 2:return n=e.sent,e.next=5,(0,r.request)("/api/api/ipinfo?ip="+n.ip);case 5:return o=e.sent,y(n.ip),p=o.region,c(p),e.abrupt("return",o.data);case 10:case"end":return e.stop()}},A)}))),T=u.data,b=u.error,f=u.loading;return(0,s.jsxs)("div",{className:"App",children:[f&&(0,s.jsx)("p",{children:"Loading..."}),b&&(0,s.jsxs)("p",{children:["Error: ",b.message]}),m&&(0,s.jsxs)("p",{children:["Your IP address is: ",m]}),j&&(0,s.jsxs)("p",{children:["Your address is: ",j]})]})}i.default=M}}]);
