(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,c){},65:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(31),r=c.n(s),l=c(12),i=c(2),o=(c(39),c(0));var j=function(){return Object(o.jsx)("div",{className:"container-fluid nav",children:Object(o.jsxs)("div",{className:"row w-100 nav-bar",children:[Object(o.jsx)("div",{className:"col nav-logo",children:Object(o.jsxs)("h1",{className:"logo",children:["E",Object(o.jsx)("span",{className:"fancy-letter",children:"L"}),"E",Object(o.jsx)("span",{className:"fancy-letter",children:"M"}),"E",Object(o.jsx)("span",{className:"fancy-letter",children:"N"}),"T"]})}),Object(o.jsx)("div",{className:"col nav-links",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(l.b,{className:"col nav-link",to:"/explorer",children:"Explorer"}),Object(o.jsx)(l.b,{className:"col nav-link",to:"/miner",children:"Miner"}),Object(o.jsx)(l.b,{className:"col nav-link",to:"/wallet",children:"Wallet"})]})})]})})},b=c(6),d=c.n(b),u=c(34),h=c(10),x=c(4),O=c(11),p=c.n(O),m=c(14),v=c.n(m),f=c(33),N=c.n(f),w=(c(65),c(66));v.a.extend(w);var g=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(x.a)(s,2),l=r[0],i=r[1],j=Object(n.useState)(void 0),b=Object(x.a)(j,2),O=b[0],m=b[1],f=Object(n.useState)([]),w=Object(x.a)(f,2),g=w[0],k=w[1];function y(){return E.apply(this,arguments)}function E(){return(E=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(!0),130!==c.length){e.next=9;break}return e.next=4,p.a.post("/miner/".concat(c));case 4:t=e.sent,i(!1),m(t.data),e.next=11;break;case 9:k([].concat(Object(u.a)(g),["Invalid Address Length, Must be at Least 130 characters"])),i(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)("div",{className:"container miner",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col",align:"center",children:[Object(o.jsx)("input",{value:c,onChange:function(e){return a(e.target.value)},className:"miner-address w-100",type:"text",placeholder:"Enter your unique public key here"}),g.map((function(e){return Object(o.jsx)("li",{children:e})}))]})}),Object(o.jsx)("div",{className:"row miner-start",children:Object(o.jsx)("div",{className:"col",align:"center",children:l?Object(o.jsx)("button",{onClick:y,className:"btn btn-dark w-25",disabled:!0,children:"MINE A BLOCK"}):Object(o.jsx)("button",{onClick:y,className:"btn btn-dark w-25",children:"MINE A BLOCK"})})}),Object(o.jsx)("div",{className:"row miner-block",children:Object(o.jsx)("div",{className:"col",align:"center",children:O?l?Object(o.jsx)(N.a,{color:"white"}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{className:"miner-block-header",children:["Congratulations! You mined block # ",O.blockHeight," on ",v()(O.timestamp).format("L")," at ",v()(O.timestamp).format("LT")]}),Object(o.jsxs)("div",{className:"miner-block-info w-25",align:"left",children:[Object(o.jsxs)("div",{children:["Block Height: ",O.blockHeight]}),Object(o.jsxs)("div",{children:["Block Difficulty: ",O.difficulty]})]})]}):null})})]})};c(73);var k=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(x.a)(s,2),l=r[0],i=r[1],j=Object(n.useState)(0),b=Object(x.a)(j,2),u=b[0],O=b[1];function m(){return(m=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/explore");case 2:t=e.sent,a(t.data.blocks),O(t.data.blockReward);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/transactions");case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){m.apply(this,arguments)}(),function(){f.apply(this,arguments)}()}),[c,l]),Object(o.jsx)("div",{className:"container explorer",children:Object(o.jsxs)("div",{className:"row explorer-info",children:[Object(o.jsxs)("div",{className:"col px-0 explorer-info-latest-blocks",children:[Object(o.jsx)("div",{className:"explorer-info-latest-blocks-header",children:Object(o.jsx)("strong",{children:"Latest Blocks"})}),Object(o.jsx)("div",{className:"explorer-info-latest-blocks-blocks",children:c.slice(c.length>=6?c.length-6:0,c.length).reverse().map((function(e){return Object(o.jsxs)("div",{className:"row block-data",children:[Object(o.jsx)("div",{className:"col-1 block-symbol",align:"center",children:"B"}),Object(o.jsxs)("div",{className:"col-2 block-stamp",align:"center",children:[Object(o.jsx)("div",{children:e.blockHeight}),Object(o.jsx)("div",{className:"block-stamp-timestamp",children:v()(e.timestamp).format("LT")})]}),Object(o.jsxs)("div",{className:"col-6 block-miner",align:"center",children:["Miner ",Object(o.jsx)("a",{className:"block-miner-minedBy",href:"",children:0===e.blockHeight?"The Source":"".concat(e.minedBy.substring(0,5),"...")}),Object(o.jsx)("div",{children:Object(o.jsxs)("a",{className:"block-miner-transaction-count",href:"",children:[e.transactions.length," txns"]})})]}),Object(o.jsx)("div",{className:"col-3 block-reward",align:"center",children:"".concat(u," LMN")})]})}))})]}),Object(o.jsxs)("div",{className:"col px-0 explorer-info-latest-transactions",children:[Object(o.jsx)("div",{className:"explorer-info-latest-transactions-header",children:Object(o.jsx)("strong",{children:"Latest Transactions"})}),Object(o.jsx)("div",{className:"explorer-info-latest-transactions-transactions",children:l.slice(l.length>=6?l.length-6:0,l.length).reverse().map((function(e){return Object(o.jsxs)("div",{className:"row transaction-data",children:[Object(o.jsx)("div",{className:"col-1 transaction-symbol",align:"center",children:"T"}),Object(o.jsx)("div",{className:"col-4 transaction-sender",align:"center",children:Object(o.jsx)("a",{className:"transaction-sender-sentBy",href:"",children:"".concat(void 0===e.signature?"Blockchain Reward":"".concat(e.signature.substring(0,5),"..."))})}),Object(o.jsxs)("div",{className:"col-4 transaction-parties",align:"center",children:[Object(o.jsxs)("div",{children:["From ",Object(o.jsx)("a",{href:"",children:null===e.sender?"The Source":"".concat(e.sender.substring(0,5),"...")})]}),Object(o.jsxs)("div",{children:["To ",Object(o.jsx)("a",{href:"",children:"".concat(e.receiver.substring(0,5),"...")})]})]}),Object(o.jsx)("div",{className:"col-3 transaction-reward",align:"center",children:"".concat(e.amount," LMN")})]})}))})]})]})})};c(74);var y=function(){var e=Object(n.useState)({publicKey:null,privateKey:null}),t=Object(x.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(x.a)(s,2),l=r[0],i=r[1],j=Object(n.useState)(0),b=Object(x.a)(j,2),u=b[0],O=b[1],m=Object(n.useState)(""),v=Object(x.a)(m,2),f=v[0],N=v[1],w=Object(n.useState)(""),g=Object(x.a)(w,2),k=g[0],y=g[1],E=Object(n.useState)(0),C=Object(x.a)(E,2),L=C[0],S=C[1],B=Object(n.useState)(""),K=Object(x.a)(B,2),M=K[0],A=K[1];function T(){return(T=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/keygen");case 2:t=e.sent,a({publicKey:t.data.publicKey,privateKey:t.data.privateKey});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"post",url:"/transact",params:{sender:f,receiver:k,amount:L,privateKey:M}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/balance/".concat(l));case 2:t=e.sent,O(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)("div",{className:"container wallet",children:[Object(o.jsxs)("div",{className:"row wallet-info",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"row",align:"center",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("input",{className:"wallet-info-balance-input w-100 h-100",value:l,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Enter your unique public key here"})})}),Object(o.jsxs)("div",{className:"row wallet-info-buttons",children:[Object(o.jsx)("div",{className:"col wallet-info-buttons-balance",align:"center",children:Object(o.jsx)("button",{onClick:function(){return q.apply(this,arguments)},className:"btn btn-dark",children:"CHECK BALANCE"})}),Object(o.jsx)("div",{className:"col wallet-info-buttons-keygen",align:"center",children:Object(o.jsx)("button",{onClick:function(){return T.apply(this,arguments)},className:"btn btn-dark",children:"GENERATE WALLET"})})]})]}),Object(o.jsx)("div",{className:"row wallet-balance",children:Object(o.jsx)("div",{className:"col",align:"center",children:Object(o.jsxs)("h1",{children:["BALANCE: ",u," LMN"]})})})]}),Object(o.jsx)("div",{className:"row wallet-transactions justify-content-center",children:Object(o.jsxs)("div",{className:"col-6 wallet-transactions-box",children:[Object(o.jsx)("div",{className:"row wallet-transactions-box-input",children:Object(o.jsx)("input",{type:"text",placeholder:"Enter your unique public key",onChange:function(e){return N(e.target.value)}})}),Object(o.jsx)("div",{className:"row wallet-transactions-box-input",children:Object(o.jsx)("input",{type:"text",placeholder:"Enter the address of the receiving party",onChange:function(e){return y(e.target.value)}})}),Object(o.jsx)("div",{className:"row wallet-transactions-box-input",children:Object(o.jsx)("input",{type:"text",placeholder:"Enter the amount to send (LMN)",onChange:function(e){return S(e.target.value)}})}),Object(o.jsx)("div",{className:"row wallet-transactions-box-input",children:Object(o.jsx)("input",{type:"text",placeholder:"Enter your unique private key",onChange:function(e){return A(e.target.value)}})}),Object(o.jsx)("div",{className:"row wallet-transactions-box-input",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-dark",onClick:function(){return H.apply(this,arguments)},children:"SEND"})})]})}),Object(o.jsxs)("div",{className:"row wallet-generator",children:[Object(o.jsxs)("div",{className:"col wallet-generator-public",children:[Object(o.jsx)("div",{className:"row wallet-generator-public-label",children:Object(o.jsx)("h1",{children:"Public"})}),Object(o.jsx)("h1",{children:c.publicKey})]}),Object(o.jsxs)("div",{className:"col wallet-generator-private",children:[Object(o.jsx)("div",{className:"row wallet-generator-private-label",children:Object(o.jsx)("h1",{children:"Private"})}),Object(o.jsx)("h1",{children:c.privateKey})]})]})]})};c(75);var E=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",component:k}),Object(o.jsx)(i.a,{exact:!0,path:"/explorer",component:k}),Object(o.jsx)(i.a,{exact:!0,path:"/miner",component:g}),Object(o.jsx)(i.a,{exact:!0,path:"/wallet",component:y})]})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(E,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.baa9f126.chunk.js.map