(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{207:function(e,t,c){},234:function(e,t,c){},242:function(e,t,c){},377:function(e,t,c){},378:function(e,t,c){},380:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(56),r=c.n(n),l=c(47),i=c(17),o=c(95),d=c(389),j=(c(207),c(1));var b=function(){return Object(o.useMediaQuery)({query:"(max-width: 578px)"})?Object(j.jsx)("div",{className:"container-fluid nav",children:Object(j.jsxs)("div",{className:"row w-100 nav-bar",children:[Object(j.jsx)("div",{className:"col nav-logo",children:Object(j.jsxs)("h1",{className:"logo",children:["E",Object(j.jsx)("span",{className:"fancy-letter",children:"L"}),"E",Object(j.jsx)("span",{className:"fancy-letter",children:"M"}),"E",Object(j.jsx)("span",{className:"fancy-letter",children:"N"}),"T"]})}),Object(j.jsxs)(d.a,{className:"col drop-down",align:"right",children:[Object(j.jsxs)(d.a.Toggle,{bsPrefix:"hamburger-button btn",children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(j.jsx)("i",{className:"fa fa-bars hamburger-icon"})]}),Object(j.jsxs)(d.a.Menu,{className:"drop-drop-menu",children:[Object(j.jsx)(d.a.Item,{href:"#/",children:"Explorer"}),Object(j.jsx)(d.a.Item,{href:"#/miner",children:"Miner"}),Object(j.jsx)(d.a.Item,{href:"#/wallet",children:"Wallet"})]})]})]})}):Object(j.jsx)("div",{className:"container-fluid nav",children:Object(j.jsxs)("div",{className:"row w-100 nav-bar",children:[Object(j.jsx)("div",{className:"col nav-logo",children:Object(j.jsxs)("h1",{className:"logo",children:["E",Object(j.jsx)("span",{className:"fancy-letter",children:"L"}),"E",Object(j.jsx)("span",{className:"fancy-letter",children:"M"}),"E",Object(j.jsx)("span",{className:"fancy-letter",children:"N"}),"T"]})}),Object(j.jsx)("div",{className:"col nav-links",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(l.b,{className:"col nav-link",to:"/explorer",children:"Explorer"}),Object(j.jsx)(l.b,{className:"col nav-link",to:"/miner",children:"Miner"}),Object(j.jsx)(l.b,{className:"col nav-link",to:"/wallet",children:"Wallet"})]})})]})})},h=c(20),x=c.n(h),O=c(197),m=c(39),u=c(12),p=c(40),v=c.n(p),N=c(52),f=c.n(N),g=c(179),w=c.n(g),y=(c(234),c(235));f.a.extend(y);var k=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),r=Object(u.a)(n,2),l=r[0],i=r[1],o=Object(a.useState)(void 0),d=Object(u.a)(o,2),b=d[0],h=d[1],p=Object(a.useState)([]),N=Object(u.a)(p,2),g=N[0],y=N[1];function k(){return E.apply(this,arguments)}function E(){return(E=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(!0),130!==c.length){e.next=9;break}return e.next=4,v.a.post("/miner/".concat(c));case 4:t=e.sent,i(!1),h(t.data),e.next=11;break;case 9:y([].concat(Object(O.a)(g),["Invalid Address Length, Must be at Least 130 characters"])),i(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"container miner",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col",align:"center",children:[Object(j.jsx)("input",{value:c,onChange:function(e){return s(e.target.value)},className:"miner-address w-100",type:"text",placeholder:"Enter your unique public key here"}),g.map((function(e){return Object(j.jsx)("li",{children:e})}))]})}),Object(j.jsx)("div",{className:"row miner-start",children:Object(j.jsx)("div",{className:"col",align:"center",children:l?Object(j.jsx)("button",{onClick:k,className:"btn btn-dark w-25",disabled:!0,children:"MINE A BLOCK"}):Object(j.jsx)("button",{onClick:k,className:"btn btn-dark w-25",children:"MINE A BLOCK"})})}),Object(j.jsx)("div",{className:"row miner-block",children:Object(j.jsx)("div",{className:"col",align:"center",children:b?l?Object(j.jsx)(w.a,{color:"white"}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{className:"miner-block-header",children:["Congratulations! You mined block # ",b.blockHeight," on ",f()(b.timestamp).format("L")," at ",f()(b.timestamp).format("LT")]}),Object(j.jsxs)("div",{className:"miner-block-info w-25",align:"left",children:[Object(j.jsxs)("div",{children:["Block Height: ",b.blockHeight]}),Object(j.jsxs)("div",{children:["Block Difficulty: ",b.difficulty]})]})]}):null})})]})},E=c(124),C=c.n(E),S=c(391),L=c(195),M=c(84),T=c(198);c(242);var A=function(){var e=Object(o.useMediaQuery)({query:"(max-width: 765px)"}),t=Object(a.useState)([]),c=Object(u.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(null),l=Object(u.a)(r,2),i=l[0],d=l[1],b=Object(a.useState)([]),h=Object(u.a)(b,2),O=h[0],p=h[1],N=Object(a.useState)(0),g=Object(u.a)(N,2),w=g[0],y=g[1];function k(){return(k=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/explore");case 2:t=e.sent,n(t.data.blocks),y(t.data.blockReward),d(t.data.difficulty);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/transactions");case 2:t=e.sent,p(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){k.apply(this,arguments)}(),function(){E.apply(this,arguments)}()}),[s.length,O.length]),Object(j.jsxs)("div",{className:"container explorer",children:[Object(j.jsx)("div",{className:"row explorer-header",children:Object(j.jsx)("div",{className:"col explorer-header-data",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col explorer-header-data-block",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col explorer-header-data-block-border",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",align:"center",children:Object(j.jsx)("div",{className:"explorer-header-data-price-symbol",children:"\ud83d\ude80"})}),Object(j.jsxs)("div",{className:"col explorer-header-data-info",children:[Object(j.jsx)("div",{children:"LMN PRICE"}),Object(j.jsxs)("div",{children:["$",C()(Math.random()+3).format("0.000")]})]})]})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",align:"center",children:Object(j.jsx)("div",{className:"explorer-header-data-marketcap-symbol",children:"\ud83c\udf10"})}),Object(j.jsxs)("div",{className:"col explorer-header-data-info",children:[Object(j.jsx)("div",{children:"MARKET CAP"}),Object(j.jsxs)("div",{children:["$",C()(Math.random()+1245927).format("0,0.000")]})]})]})})})]}),Object(j.jsxs)("div",{className:e?"col explorer-header-data-block no-border":"col explorer-header-data-block",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col explorer-header-data-block-border",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",align:"center",children:Object(j.jsx)("div",{className:"explorer-header-data-difficulty-symbol",children:"\u26cf\ufe0f"})}),Object(j.jsxs)("div",{className:"col explorer-header-data-info",children:[Object(j.jsx)("div",{children:"DIFFICULTY"}),Object(j.jsx)("div",{children:i})]})]})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",align:"center",children:Object(j.jsx)("div",{className:"explorer-header-data-transactions-symbol",children:"\ud83d\udcb2"})}),Object(j.jsxs)("div",{className:"col explorer-header-data-info",children:[Object(j.jsx)("div",{children:"TRANSACTIONS"}),Object(j.jsx)("div",{children:O.length})]})]})})})]}),Object(j.jsxs)("div",{className:"col explorer-header-data-info explorer-header-data-block no-border",align:"center",children:[Object(j.jsx)("div",{children:"TRANSACTIONS PER BLOCK"}),Object(j.jsxs)(S.a,{width:250,height:70,data:s,margin:{top:5,right:10,left:10,bottom:5},children:[Object(j.jsx)(L.a,{dataKey:"blockHeight",axisLine:!1,interval:1}),Object(j.jsx)(M.a,{labelFormatter:function(e){return"Block: ".concat(e)}}),Object(j.jsx)(T.a,{type:"monotone",dataKey:"transactionCount",dot:!1})]})]})]})})}),Object(j.jsxs)("div",{className:"row explorer-info",children:[Object(j.jsx)("div",{className:"col-lg-6 col-md-12 px-0 explorer-info-latest-blocks-col",children:Object(j.jsxs)("div",{className:"explorer-info-latest-blocks",children:[Object(j.jsx)("div",{className:"explorer-info-latest-blocks-header",children:Object(j.jsx)("strong",{children:"Latest Blocks"})}),Object(j.jsx)("div",{className:"explorer-info-latest-blocks-blocks",children:s.slice(s.length>=6?s.length-6:0,s.length).reverse().map((function(e){return Object(j.jsxs)("div",{className:"row block-data",children:[Object(j.jsx)("div",{className:"col-1 block-symbol",align:"center",children:"B"}),Object(j.jsxs)("div",{className:"col-2 block-stamp",align:"center",children:[Object(j.jsx)("div",{children:e.blockHeight}),Object(j.jsx)("div",{className:"block-stamp-timestamp",children:f()(e.timestamp).format("LT")})]}),Object(j.jsxs)("div",{className:"col-6 block-miner",align:"center",children:["Miner ",Object(j.jsx)("a",{className:"block-miner-minedBy",href:"",children:0===e.blockHeight?"The Source":"".concat(e.minedBy.substring(0,5),"...")}),Object(j.jsx)("div",{children:Object(j.jsxs)("a",{className:"block-miner-transaction-count",href:"",children:[e.transactions.length," txns"]})})]}),Object(j.jsx)("div",{className:"col-3 block-reward",align:"center",children:"".concat(w," LMN")})]})}))})]})}),Object(j.jsx)("div",{className:"col-lg-6 col-md-12 px-0 explorer-info-latest-transactions-col",children:Object(j.jsxs)("div",{className:"explorer-info-latest-transactions",children:[Object(j.jsx)("div",{className:"explorer-info-latest-transactions-header",children:Object(j.jsx)("strong",{children:"Latest Transactions"})}),Object(j.jsx)("div",{className:"explorer-info-latest-transactions-transactions",children:O.slice(O.length>=6?O.length-6:0,O.length).reverse().map((function(e){return Object(j.jsxs)("div",{className:"row transaction-data",children:[Object(j.jsx)("div",{className:"col-1 transaction-symbol",align:"center",children:"T"}),Object(j.jsxs)("div",{className:"col-4 transaction-sender",align:"center",children:[Object(j.jsx)("a",{className:"transaction-sender-sentBy",href:"",children:"".concat(void 0===e.signature?"Blockchain Reward":"".concat(e.signature.substring(0,5),"..."))}),Object(j.jsx)("div",{className:"transaction-sender-timestamp",children:f()(e.timestamp).format("LT")})]}),Object(j.jsxs)("div",{className:"col-4 transaction-parties",align:"center",children:[Object(j.jsxs)("div",{children:["From ",Object(j.jsx)("a",{href:"",children:null===e.sender?"The Source":"".concat(e.sender.substring(0,5),"...")})]}),Object(j.jsxs)("div",{children:["To ",Object(j.jsx)("a",{href:"",children:"".concat(e.receiver.substring(0,5),"...")})]})]}),Object(j.jsx)("div",{className:"col-3 transaction-reward",align:"center",children:"".concat(e.amount," LMN")})]})}))})]})})]})]})};c(377);var K=function(){var e=Object(a.useState)({publicKey:null,privateKey:null}),t=Object(u.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(u.a)(n,2),l=r[0],i=r[1],o=Object(a.useState)(0),d=Object(u.a)(o,2),b=d[0],h=d[1],O=Object(a.useState)(""),p=Object(u.a)(O,2),N=p[0],f=p[1],g=Object(a.useState)(""),w=Object(u.a)(g,2),y=w[0],k=w[1],E=Object(a.useState)(0),C=Object(u.a)(E,2),S=C[0],L=C[1],M=Object(a.useState)(""),T=Object(u.a)(M,2),A=T[0],K=T[1],B=Object(a.useState)(""),I=Object(u.a)(B,2),R=I[0],H=I[1];function q(){return(q=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/keygen");case 2:t=e.sent,s({publicKey:t.data.publicKey,privateKey:t.data.privateKey});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"post",url:"/transact",params:{sender:N,receiver:y,amount:S,privateKey:A}});case 2:"string"!==typeof(t=e.sent).data||R.includes(t.data)?alert("Transaction Sent!"):H(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/balance/".concat(l));case 2:t=e.sent,h(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"container wallet",children:[Object(j.jsxs)("div",{className:"row wallet-info",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"row",align:"center",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("input",{className:"wallet-info-balance-input w-100 h-100",value:l,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Enter your unique public key here"})})}),Object(j.jsxs)("div",{className:"row wallet-info-buttons",children:[Object(j.jsx)("div",{className:"col wallet-info-buttons-balance",align:"center",children:Object(j.jsx)("button",{onClick:function(){return F.apply(this,arguments)},className:"btn btn-dark",children:"CHECK BALANCE"})}),Object(j.jsx)("div",{className:"col wallet-info-buttons-keygen",align:"center",children:Object(j.jsx)("button",{onClick:function(){return q.apply(this,arguments)},className:"btn btn-dark",children:"GENERATE WALLET"})})]})]}),Object(j.jsx)("div",{className:"row wallet-balance",children:Object(j.jsx)("div",{className:"col",align:"center",children:Object(j.jsxs)("h1",{children:["BALANCE: ",b," LMN"]})})})]}),Object(j.jsx)("div",{className:"row wallet-transactions justify-content-center",children:Object(j.jsxs)("div",{className:"col-6 wallet-transactions-box",children:[Object(j.jsx)("div",{className:"row wallet-transactions-box-input",children:Object(j.jsx)("input",{type:"text",placeholder:"Enter your unique public key",onChange:function(e){return f(e.target.value)}})}),Object(j.jsx)("div",{className:"row wallet-transactions-box-input",children:Object(j.jsx)("input",{type:"text",placeholder:"Enter the address of the receiving party",onChange:function(e){return k(e.target.value)}})}),Object(j.jsx)("div",{className:"row wallet-transactions-box-input",children:Object(j.jsx)("input",{type:"text",placeholder:"Enter the amount to send (LMN)",onChange:function(e){return L(e.target.value)}})}),Object(j.jsx)("div",{className:"row wallet-transactions-box-input",children:Object(j.jsx)("input",{type:"text",placeholder:"Enter your unique private key",onChange:function(e){return K(e.target.value)}})}),Object(j.jsx)("div",{className:"row wallet-transactions-box-input",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-dark",onClick:function(){return P.apply(this,arguments)},children:"SEND"})}),Object(j.jsx)("div",{className:"wallet-transactions-errors",children:R})]})}),Object(j.jsxs)("div",{className:"row wallet-generator",children:[Object(j.jsxs)("div",{className:"col wallet-generator-public",children:[Object(j.jsx)("div",{className:"row wallet-generator-public-label",children:Object(j.jsx)("h1",{children:"Public"})}),Object(j.jsx)("h1",{children:c.publicKey})]}),Object(j.jsxs)("div",{className:"col wallet-generator-private",children:[Object(j.jsx)("div",{className:"row wallet-generator-private-label",children:Object(j.jsx)("h1",{children:"Private"})}),Object(j.jsx)("h1",{children:c.privateKey})]})]})]})};c(378);var B=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",component:A}),Object(j.jsx)(i.a,{exact:!0,path:"/explorer",component:A}),Object(j.jsx)(i.a,{exact:!0,path:"/miner",component:k}),Object(j.jsx)(i.a,{exact:!0,path:"/wallet",component:K})]})]})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(B,{})})}),document.getElementById("root"))}},[[380,1,2]]]);
//# sourceMappingURL=main.ffb1ae40.chunk.js.map