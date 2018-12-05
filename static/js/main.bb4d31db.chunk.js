(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),c=a.n(s),l=a(42),o=a(27),i=a(20),u={url:"https://api.bitbay.net/rest/trading/orderbook/",currency:"BTC-PLN",response:{},loading:!0},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOADER":return Object(i.a)({},e,{loading:t.toggle});case"FETCH_API":return Object(i.a)({},e,{response:Object(i.a)({},t.response),highestBid:t.response.data.buy[0].ra,lowestBid:t.response.data.sell[0].ra});case"FETCH_ERROR":return Object(i.a)({},e,{response:Object(i.a)({},t.error)});case"UPDATE_WEBSOCKET":return Object(i.a)({},e,{highestBid:t.bids.highestBid,lowestBid:t.bids.lowestAsk});case"CHANGE_CURRENCY":return Object(i.a)({},e,{currency:t.currency});default:return e}},p=a(34),h=a(24),d=a(25),E=a(28),b=a(26),y=a(29),g=(a(108),a(95)),f=a.n(g),v=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"fetchApi",value:function(){var e=this;this.props.toggleLoader(!0),f.a.get(this.props.state.url+this.props.state.currency).then(function(t){"Fail"!==t.data.status?(e.props.fetchApi(t),e.props.toggleLoader(!1)):e.props.fetchError(t)}).catch(function(t){e.props.fetchError(t)})}},{key:"websocket",value:function(){var e=this,t=new WebSocket("wss://api2.bitbay.net/websocket/");t.onopen=function(){t.send('{"action": "subscribe-public", "module": "trading", "path": "ticker"}')},t.onmessage=function(t){var a=t.data,n=JSON.parse(a);n.hasOwnProperty("message")&&n.message.market.code===e.props.state.currency&&e.props.updateWebsocket(n.message)}}},{key:"componentDidMount",value:function(){this.fetchApi(),this.websocket()}},{key:"componentDidUpdate",value:function(e){e.state.currency!==this.props.state.currency&&(this.fetchApi(),this.websocket())}},{key:"render",value:function(){return null}}]),t}(n.Component),N=Object(o.b)(function(e){return{state:e}},function(e){return{toggleLoader:function(t){e({type:"TOGGLE_LOADER",toggle:t})},fetchApi:function(t){e({type:"FETCH_API",response:t})},fetchError:function(t){e({type:"FETCH_ERROR",error:t})},updateWebsocket:function(t){e({type:"UPDATE_WEBSOCKET",bids:t})}}})(v),C=function(){return r.a.createElement("header",null,r.a.createElement("h2",{className:"site-title"},"BootyBay"))},w=a(96),O=a.n(w),B=a(97),k=a.n(B),j=a(98),L=a.n(j),P=a(17),A=a.n(P),T=function(e){var t=e.currency,a=e.onChange;return r.a.createElement(O.a,{className:"currency-select"},r.a.createElement(k.a,{htmlFor:"currency-simple"},"Waluta"),r.a.createElement(L.a,{value:t,onChange:function(e){return a(e)},inputProps:{name:"currency",id:"currency-simple"}},r.a.createElement(A.a,{value:"BTC-PLN"},"BTC-PLN"),r.a.createElement(A.a,{value:"BTC-EUR"},"BTC-EUR"),r.a.createElement(A.a,{value:"BTC-USD"},"BTC-USD"),r.a.createElement(A.a,{value:"ETH-PLN"},"ETH-PLN"),r.a.createElement(A.a,{value:"LSK-PLN"},"LSK-PLN"),r.a.createElement(A.a,{value:"LTC-PLN"},"LTC-PLN"),r.a.createElement(A.a,{value:"GAME-PLN"},"GAME-PLN"),r.a.createElement(A.a,{value:"DASH-PLN"},"DASH-PLN")))},S=function(e){var t=e.response,a=e.currency,n=e.buySell;if(t.hasOwnProperty("data")){var s,c,l,o=a.split("-");"buy"===n?(s=t.data.buy,c="Oferty skupu - ",l="BID"):(s=t.data.sell,c="Oferty sprzeda\u017cy - ",l="ASK");var i=s.slice(0,10).map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.ra),r.a.createElement("td",null,e.pa),r.a.createElement("td",null,(e.ra*e.pa).toFixed(2)))});return r.a.createElement("div",{className:"orderbook "+l},r.a.createElement("h4",null,c,r.a.createElement("span",null,l)),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table-head"},r.a.createElement("th",null,"Kurs"),r.a.createElement("th",null,"Ilo\u015b\u0107 ",r.a.createElement("span",null,o[0])),r.a.createElement("th",null,"Suma ",r.a.createElement("span",null,o[1]))),i))))}return r.a.createElement("h2",null,"Fetching data from API")},R=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.state,t=e.currency,a=e.response;return r.a.createElement("div",{className:"offers"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(S,{buySell:"buy",response:a,currency:t})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(S,{buySell:"sell",response:a,currency:t}))))}}]),t}(n.Component),D=function(e){var t=e.highestBid,a=e.lowestBid,n=e.highestClass,s=e.lowestClass;return r.a.createElement("div",{className:"buy-sell-bar"},r.a.createElement("p",{className:"buy"},r.a.createElement("b",null,"SKUP \u2022 BID: "),r.a.createElement("span",{className:n},t)),r.a.createElement("p",{className:"sell"},r.a.createElement("b",null,"SPRZEDA\u017b \u2022 ASK: "),r.a.createElement("span",{className:s},a)))},U=function(){return r.a.createElement("div",{className:"loader-wrap"},r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader-item"}),r.a.createElement("span",{className:"loader-item"}),r.a.createElement("span",{className:"loader-item"}),r.a.createElement("span",{className:"loader-item"}),r.a.createElement("span",{className:"loader-item"}),r.a.createElement("span",{className:"loader-item"}),r.a.createElement("span",{className:"loader-item"}),r.a.createElement("span",{className:"loader-item"}),r.a.createElement("span",{className:"loader-item"}),r.a.createElement("span",{className:"loader-item"})))},H=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={lowestClass:"",highestClass:""},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"changeCurrency",value:function(e){var t=e.target.value;this.props.changeCurrencyR(t)}},{key:"highlightChanges",value:function(e){var t=this;this.setState(Object(p.a)({},e,"updated"),function(){return setTimeout(function(){t.setState(Object(p.a)({},e,""))},250)})}},{key:"componentDidUpdate",value:function(e){e.highestBid!==this.props.highestBid&&this.highlightChanges("highestClass"),e.lowestBid!==this.props.lowestBid&&this.highlightChanges("lowestClass")}},{key:"render",value:function(){var e=this,t=this.props.response.hasOwnProperty("data")&&"Fail"!==this.props.response.data.status&&!this.props.loading;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(N,null),r.a.createElement(C,null),t?r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(T,{currency:this.props.currency,onChange:function(t){return e.changeCurrency(t)}}),r.a.createElement(D,{highestBid:this.props.highestBid,lowestBid:this.props.lowestBid,highestClass:this.state.highestClass,lowestClass:this.state.lowestClass}),r.a.createElement(R,{state:this.props})):r.a.createElement(U,null))}}]),t}(n.Component),_=Object(o.b)(function(e){return{currency:e.currency,response:e.response,highestBid:e.highestBid,lowestBid:e.lowestBid,loading:e.loading}},function(e){return{changeCurrencyR:function(t){e({type:"CHANGE_CURRENCY",currency:t})}}})(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=Object(l.b)(m);c.a.render(r.a.createElement(o.a,{store:F},r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,t,a){e.exports=a(262)}},[[99,2,1]]]);
//# sourceMappingURL=main.bb4d31db.chunk.js.map