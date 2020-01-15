(this.webpackJsonpcakelabs=this.webpackJsonpcakelabs||[]).push([[0],{30:function(e,t,a){e.exports=a(47)},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),i=a(8),s=a(12),o=a(6),m=a(11),u=a(25),E=a(22),d={list:[],loading:!0,error:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_EVENTS_BEGIN":return Object(E.a)({},e,{loading:!0});case"FETCH_EVENTS_SUCCESS":return{loading:!1,error:null,list:t.payload};case"FETCH_EVENTS_FAILURE":return Object(E.a)({},e,{loading:!1,error:t.payload.error});default:return e}},f={order:"asc"},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOOGLE_ORDER":return{order:"asc"===e.order?"desc":"asc"};default:return e}},h=function(e){return Object(m.c)({router:Object(s.b)(e),events:v,order:p})},g=a(28),_=[{filter:"".concat("events"),name:"\u0412\u0441\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"},{filter:"movie",name:"\u041a\u0438\u043d\u043e"},{filter:"theatre",name:"\u0422\u0435\u0430\u0442\u0440"},{filter:"concert",name:"\u041a\u043e\u043d\u0446\u0435\u0440\u0442\u044b"},{filter:"exhibition",name:"\u0412\u044b\u0441\u0442\u0430\u0432\u043a\u0438"},{filter:"festival",name:"\u0424\u0435\u0441\u0442\u0438\u0432\u0430\u043b\u0438"},{filter:"favourite",name:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}],N=Object(o.a)({basename:"/cakelabs"});a(40),a(41);var b,w=a(3),y=a(16),O=function(e){var t=e.filter,a=e.children;return r.a.createElement(y.b,{exact:!0,activeClassName:"active",className:"menu__link",to:""===t?"/":"/".concat(t)},a)},C=(a(42),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"menu"},_.map((function(e){return r.a.createElement(O,{key:e.filter,filter:e.filter},e.name)})))))}),k=function(e){if(!e.tags)return!1;return r.a.createElement("ul",{className:"tags"},e.tags.map((function(e){return r.a.createElement("li",{className:"tag",key:e},e)})))},x=(a(43),function(e){return r.a.createElement("ul",{className:"events"},e.list.map((function(e){var t=e.id,a=e.title,n=e.is_free,c=e.categories,l=e.price,i=e.slug;return r.a.createElement("li",{className:"event",key:t},r.a.createElement(y.a,{to:"/events/".concat(i),className:"event__link"},a),n&&r.a.createElement("span",{className:"event__label"},"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e!"),l&&r.a.createElement("span",{className:"event__price"},l," \u0440."),r.a.createElement(k,{tags:c}))})))}),j=function(e){e.error;return r.a.createElement("div",null,"error")},S=function(e){var t=e.width,a=e.height;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 460.088 460.088",width:t,height:a},r.a.createElement("path",{className:"line",d:"M25.555 139.872h257.526V88.761H25.555C11.442 88.761 0 100.203 0 114.316s11.442 25.556 25.555 25.556z"}),r.a.createElement("path",{className:"line",d:"M25.555 242.429h257.526v-51.111H25.555C11.442 191.318 0 202.76 0 216.874s11.442 25.555 25.555 25.555z"}),r.a.createElement("path",{className:"line",d:"M25.555 293.874v.001C11.442 293.875 0 305.316 0 319.43s11.442 25.555 25.555 25.555h178.91a63.12 63.12 0 01-3.088-19.523c0-11.277 2.957-22.094 8.48-31.588H25.555z"}),r.a.createElement("path",{className:"arrow",d:"M450.623 302.611c-12.62-12.621-33.083-12.621-45.704 0l-26.535 26.535V52.926c0-17.849-14.469-32.317-32.318-32.317s-32.318 14.469-32.318 32.317v276.22l-26.535-26.535c-12.621-12.62-33.083-12.621-45.704 0-12.621 12.621-12.621 33.083 0 45.704l81.7 81.699c12.596 12.6 33.084 12.643 45.714 0l81.7-81.699c12.62-12.621 12.621-33.083 0-45.704z"}))},T=(a(44),Object(i.c)((function(e,t){var a=e.events,n=e.order,r=t.match.params.filter;return{events:r?function(e,t){return e.filter((function(e){return e.type.toLowerCase()===t}))}(a.list,r):a.list,isLoading:a.loading,isError:a.error,order:n.order}}),(function(e){return{toggleEventsOrder:function(){return e({type:"TOOGLE_ORDER"})}}}))((function(e){var t=e.events,a=e.isLoading,n=e.isError,c=e.order,l=e.toggleEventsOrder,i="asc"===c?"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e":"\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",s=function(e,t){var a="asc"===t?1:-1;return e.sort((function(e,t){return+e.price>=+t.price?1*a:-1*a}))}(t,c);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home__header"},r.a.createElement("h1",null,"\u0421\u043e\u0431\u044b\u0442\u0438\u044f \u0432 \u0433\u043e\u0440\u043e\u0434\u0435"),r.a.createElement("button",{onClick:function(){return l()},className:"order-toggler ".concat(c)},i,r.a.createElement(S,{width:"1.5rem",height:"1.5rem"}))),a&&r.a.createElement("div",null,"Loading"),n&&r.a.createElement(j,{error:n}),!a&&!n&&r.a.createElement(x,{list:s}))}))),L=function(e){var t=e.width,a=e.height;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 100.353 100.352",width:t,height:a},r.a.createElement("path",{d:"M58.23 69.992l14.993-24.108c.049-.078.09-.16.122-.245a26.697 26.697 0 003.956-13.969c0-14.772-12.018-26.79-26.79-26.79S23.72 16.898 23.72 31.67c0 4.925 1.369 9.75 3.96 13.975.03.074.065.146.107.216l14.455 24.191c-11.221 1.586-18.6 6.2-18.6 11.797 0 6.935 11.785 12.366 26.829 12.366S77.3 88.783 77.3 81.849c.001-5.623-7.722-10.34-19.07-11.857zM30.373 44.294A23.708 23.708 0 0126.72 31.67c0-13.118 10.672-23.79 23.791-23.79 13.118 0 23.79 10.672 23.79 23.79 0 4.457-1.263 8.822-3.652 12.624-.05.08-.091.163-.124.249L54.685 70.01c-.238.365-.285.448-.576.926l-4 6.432-19.602-32.804a1.508 1.508 0 00-.134-.27zm20.099 46.921c-14.043 0-23.829-4.937-23.829-9.366 0-4.02 7.37-7.808 17.283-8.981l4.87 8.151c.269.449.751.726 1.274.73h.013c.518 0 1-.268 1.274-.708l5.12-8.232C66.548 73.9 74.3 77.784 74.3 81.849c.001 4.43-9.785 9.366-23.828 9.366z"}),r.a.createElement("path",{d:"M60.213 31.67c0-5.371-4.37-9.741-9.741-9.741s-9.741 4.37-9.741 9.741 4.37 9.741 9.741 9.741c5.371 0 9.741-4.37 9.741-9.741zm-16.482 0c0-3.717 3.024-6.741 6.741-6.741s6.741 3.024 6.741 6.741-3.023 6.741-6.741 6.741-6.741-3.024-6.741-6.741z"}))},z=a(29),F=a.n(z),H=(a(45),Object(i.c)((function(e,t){var a=e.events,n=t.match.params.event;return{event:function(e,t){return e.find((function(e){return e.slug===t}))}(a.list,n),isLoading:a.loading,error:a.error}}))((function(e){if(e.error)return r.a.createElement(j,{error:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"});if(e.isLoading)return r.a.createElement("div",null,"Loading");var t=e.event,a=t.title,n=t.price,c=t.date,l=t.description,i=t.is_free,s=t.place,o=t.categories,m=t.body,u=new Date(c).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}),E=F()({"page-event__price":!0,"page-event__price--free":i});return r.a.createElement("div",{className:"page-event"},r.a.createElement("h1",{className:"page-event__title"},a),r.a.createElement("h2",{className:"page-event__description"},l),r.a.createElement("div",{className:"page-event__info"},r.a.createElement("time",{className:"page-event__date",dateTime:c},u),s&&r.a.createElement("div",{className:"page-event__place"},r.a.createElement(L,{height:"2rem",width:"2rem"}),s),r.a.createElement("div",{className:E},n||i&&"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e")),r.a.createElement("p",null,m),r.a.createElement(k,{tags:o}))}))),V=a(17),M=a.n(V),R="".concat("https://my-json-server.typicode.com/OlgaPavlyuk/cakelabs","/events"),B=function(){return function(e){var t,a;return M.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("fetching data"),e({type:"FETCH_EVENTS_BEGIN",payload:{}}),n.next=4,M.a.awrap(fetch(R));case 4:if(!(t=n.sent).ok){n.next=12;break}return n.next=8,M.a.awrap(t.json());case 8:a=n.sent,e({type:"FETCH_EVENTS_SUCCESS",payload:a}),n.next=13;break;case 12:e({type:"FETCH_EVENTS_FAILURE",payload:{error:t.status}});case 13:case"end":return n.stop()}}))}},I=Object(i.c)(null,(function(e){return{fetchEvents:function(){return e(B())}}}))((function(e){return Object(n.useEffect)((function(){e.fetchEvents()})),r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:T}),r.a.createElement(w.a,{exact:!0,path:"/events",component:T}),r.a.createElement(w.a,{exact:!0,path:"/:filter",component:T}),r.a.createElement(w.a,{exact:!0,path:"/events/:event",component:H})))))})),A=Object(m.e)(h(N),b,Object(m.d)(Object(m.a)(Object(u.a)(N),g.a)));l.a.render(r.a.createElement(i.a,{store:A},r.a.createElement(s.a,{history:N},r.a.createElement(I,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a4640e66.chunk.js.map