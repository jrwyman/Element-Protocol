(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,c,t){},62:function(e,c,t){},70:function(e,c,t){},71:function(e,c,t){},72:function(e,c,t){},74:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),s=t(29),l=t.n(s),r=t(10),i=t(2),o=(t(36),t(0));var j=function(){return Object(o.jsx)("div",{className:"container-fluid nav",children:Object(o.jsxs)("div",{className:"row w-100 nav-bar",children:[Object(o.jsx)("div",{className:"col nav-logo",children:Object(o.jsxs)("h1",{className:"logo",children:["E",Object(o.jsx)("span",{className:"fancy-letter",children:"L"}),"E",Object(o.jsx)("span",{className:"fancy-letter",children:"M"}),"E",Object(o.jsx)("span",{className:"fancy-letter",children:"N"}),"T"]})}),Object(o.jsx)("div",{className:"col nav-links",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(r.b,{className:"col nav-link",to:"/explorer",children:"Explorer"}),Object(o.jsx)(r.b,{className:"col nav-link",to:"/miner",children:"Miner"}),Object(o.jsx)(r.b,{className:"col nav-link",to:"/wallet",children:"Wallet"})]})})]})})},b=t(8),d=t.n(b),u=t(11),h=t(9),x=t(12),O=t.n(x),m=t(15),p=t.n(m),v=t(31),f=t.n(v),N=(t(62),t(63));p.a.extend(N);var w=function(){var e=Object(n.useState)(""),c=Object(h.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(!1),l=Object(h.a)(s,2),r=l[0],i=l[1],j=Object(n.useState)(void 0),b=Object(h.a)(j,2),x=b[0],m=b[1];function v(){return(v=Object(u.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,O.a.post("/miner/".concat(t));case 3:c=e.sent,i(!1),m(c.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)("div",{className:"container miner",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",align:"center",children:Object(o.jsx)("input",{value:t,onChange:function(e){return a(e.target.value)},className:"miner-address w-100",type:"text",placeholder:"Enter your unique public key here"})})}),Object(o.jsx)("div",{className:"row miner-start",children:Object(o.jsx)("div",{className:"col",align:"center",children:Object(o.jsx)("button",{onClick:function(){return v.apply(this,arguments)},className:"btn btn-dark w-25",children:"MINE A BLOCK"})})}),Object(o.jsx)("div",{className:"row miner-block",children:Object(o.jsx)("div",{className:"col",align:"center",children:x?r?Object(o.jsx)(f.a,{color:"white"}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{className:"miner-block-header",children:["Congratulations! You mined block # ",x.blockHeight," on ",p()(x.timestamp).format("L")," at ",p()(x.timestamp).format("LT")]}),Object(o.jsxs)("div",{className:"miner-block-info w-25",align:"left",children:[Object(o.jsxs)("div",{children:["Block Height: ",x.blockHeight]}),Object(o.jsxs)("div",{children:["Block Difficulty: ",x.difficulty]})]})]}):null})})]})};t(70);var g=function(){var e=Object(n.useState)([]),c=Object(h.a)(e,2),t=c[0],a=c[1];function s(){return(s=Object(u.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/explore");case 2:c=e.sent,a(c.data.blocks);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[t]),Object(o.jsxs)("div",{className:"container explorer",children:[Object(o.jsx)("div",{className:"row blocks-header",children:Object(o.jsx)("p",{className:"blocks-header-text",align:"center",children:"Latest Blocks"})}),Object(o.jsx)("div",{className:"row blocks",children:t.slice(t.length-6,t.length).reverse().map((function(e){return Object(o.jsxs)("div",{className:t.indexOf(e)===t.length-6?"col block-no-margin":"col block",children:[Object(o.jsxs)("div",{children:["Block Height: ",e.blockHeight]}),Object(o.jsxs)("div",{children:["Difficulty: ",e.difficulty]}),Object(o.jsxs)("div",{children:["Miner: ",Object(o.jsx)("a",{className:"minedBy",href:"",children:0===e.blockHeight?"0":"".concat(e.minedBy.substring(0,6),"...")})]})]})}))})]})};t(71);var k=function(){var e=Object(n.useState)({publicKey:null,privateKey:null}),c=Object(h.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(""),l=Object(h.a)(s,2),r=l[0],i=l[1],j=Object(n.useState)(0),b=Object(h.a)(j,2),x=b[0],m=b[1];function p(){return(p=Object(u.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/keygen");case 2:c=e.sent,a({publicKey:c.data.publicKey,privateKey:c.data.privateKey});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(u.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/balance/".concat(r));case 2:c=e.sent,m(c.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)("div",{className:"container wallet",children:[Object(o.jsxs)("div",{className:"row wallet-info",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"row",align:"center",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("input",{className:"wallet-info-balance-input w-100 h-100",value:r,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Enter your unique public key here"})})}),Object(o.jsxs)("div",{className:"row wallet-info-buttons",children:[Object(o.jsx)("div",{className:"col wallet-info-buttons-balance",align:"center",children:Object(o.jsx)("button",{onClick:function(){return v.apply(this,arguments)},className:"btn btn-dark",children:"CHECK BALANCE"})}),Object(o.jsx)("div",{className:"col wallet-info-buttons-keygen",align:"center",children:Object(o.jsx)("button",{onClick:function(){return p.apply(this,arguments)},className:"btn btn-dark",children:"GENERATE WALLET"})})]})]}),Object(o.jsx)("div",{className:"row wallet-balance",children:Object(o.jsx)("div",{className:"col",align:"center",children:Object(o.jsxs)("h1",{children:["BALANCE: ",x," LMN"]})})})]}),Object(o.jsxs)("div",{className:"row wallet-generator",children:[Object(o.jsxs)("div",{className:"col wallet-generator-public",children:[Object(o.jsx)("div",{className:"row wallet-generator-public-label",children:Object(o.jsx)("h1",{children:"Public"})}),Object(o.jsx)("h1",{children:t.publicKey})]}),Object(o.jsxs)("div",{className:"col wallet-generator-private",children:[Object(o.jsx)("div",{className:"row wallet-generator-private-label",children:Object(o.jsx)("h1",{children:"Private"})}),Object(o.jsx)("h1",{children:t.privateKey})]})]})]})};t(72);var y=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",component:g}),Object(o.jsx)(i.a,{exact:!0,path:"/explorer",component:g}),Object(o.jsx)(i.a,{exact:!0,path:"/miner",component:w}),Object(o.jsx)(i.a,{exact:!0,path:"/wallet",component:k})]})]})};l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(r.a,{children:Object(o.jsx)(y,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.b41a14f8.chunk.js.map