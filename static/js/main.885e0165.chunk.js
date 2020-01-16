(this.webpackJsonpcakelabs=this.webpackJsonpcakelabs||[]).push([[0],{32:function(e,t,a){e.exports=a(49)},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),l=a(5),o=a(14),s=a(7),u=a(11),m=a(27),v=a(31),d=a(12),f=function(e){return{type:"ADD_FAVOURITE",payload:e}},E=function(e){return{type:"DELETE_FAVOURITE",payload:e}},h={list:[],loading:!0,error:null,order:"asc",favourites:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_EVENTS_BEGIN":return Object(d.a)({},e,{loading:!0});case"FETCH_EVENTS_SUCCESS":return Object(d.a)({},e,{loading:!1,error:null,list:t.payload});case"FETCH_EVENTS_FAILURE":return Object(d.a)({},e,{loading:!1,error:t.payload.error});case"TOOGLE_ORDER":return Object(d.a)({},e,{order:"asc"===e.order?"desc":"asc"});case"ADD_FAVOURITE":return Object(d.a)({},e,{favourites:[].concat(Object(v.a)(e.favourites),[t.payload])});case"DELETE_FAVOURITE":return Object(d.a)({},e,{favourites:e.favourites.filter((function(e){return e!==t.payload}))});default:return e}},g=function(e){return Object(u.c)({router:Object(o.b)(e),events:p})},_=a(30),w=[{filter:"".concat("events"),name:"\u0412\u0441\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"},{filter:"movie",name:"\u041a\u0438\u043d\u043e"},{filter:"theatre",name:"\u0422\u0435\u0430\u0442\u0440"},{filter:"concert",name:"\u041a\u043e\u043d\u0446\u0435\u0440\u0442\u044b"},{filter:"exhibition",name:"\u0412\u044b\u0441\u0442\u0430\u0432\u043a\u0438"},{filter:"festival",name:"\u0424\u0435\u0441\u0442\u0438\u0432\u0430\u043b\u0438"},{filter:"favourites",name:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}],N=Object(s.a)({basename:"/cakelabs"});a(42),a(43);var b,O=a(3),y=a(24),k=a(18),j=function(e){var t=e.filter,a=e.title,n=e.favouritesCount,c=e.onClick,i="favourites"===t?" (".concat(n,")"):"";return r.a.createElement(k.b,{exact:!0,activeClassName:"active",className:"menu__link",to:""===t?"/":"/".concat(t),onClick:c},a,i)},C=a(13),F=a.n(C),x=(a(44),Object(l.c)((function(e){return{favourites:e.events.favourites}}))((function(e){var t=Object(n.useState)(!1),a=Object(y.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(window.innerWidth<991),o=Object(y.a)(l,2),s=o[0],u=o[1],m=function(){return u(window.innerWidth<991)};Object(n.useEffect)((function(){c?document.body.classList.add("menu-is-open"):document.body.classList.remove("menu-is-open")})),Object(n.useEffect)((function(){return window.addEventListener("resize",m),function(){window.removeEventListener("resize",m)}}));var v=function(){return i(!c)};return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header__inner"},r.a.createElement("button",{className:"burger",onClick:v},r.a.createElement("span",{className:"burger__line"})),r.a.createElement("nav",{className:F()({menu:!0,"is-open":c})},w.map((function(t){return r.a.createElement(j,{key:t.filter,filter:t.filter,favouritesCount:e.favourites.length,title:t.name,onClick:s?v:null})})),r.a.createElement("button",{className:"menu__btn-close",onClick:v})),r.a.createElement("div",{className:"menu__overlay",onClick:v}))))}))),S=function(e){if(!e.tags)return!1;return r.a.createElement("ul",{className:"tags"},e.tags.map((function(e){return r.a.createElement("li",{className:"tag",key:e},e)})))},T=function(e){var t=e.width,a=e.height;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 151.57 151.57",width:t,height:a},r.a.createElement("circle",{cx:"1241.57",cy:"670.08",r:"72.28",className:"circle",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"7",transform:"rotate(-45 -58.702 1780.165)"}),r.a.createElement("path",{className:"star",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"5",d:"M75.78 41.23l11.23 22.75 25.11 3.65-18.17 17.7 4.29 25.01-22.46-11.81-22.45 11.81 4.29-25.01-18.17-17.7 25.11-3.65 11.22-22.75z"}))},L=function(e){var t=e.isFavourite,a=e.onClick,n=F()({"favourites-toggler":!0,active:t});return r.a.createElement("button",{className:n,title:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",onClick:a},r.a.createElement(T,{width:"2rem",height:"2rem"}))},z=Object(l.c)(null,(function(e){return{addFavourite:function(t){return e(f(t))},deleteFavourite:function(t){return e(E(t))}}}))((function(e){var t=e.title,a=e.is_free,n=e.categories,c=e.price,i=e.slug,l=e.isFavourite;return r.a.createElement("li",{className:"event"},r.a.createElement("div",{className:"event__actions"},r.a.createElement(k.a,{to:"/events/".concat(i),className:"event__link"},t),r.a.createElement(L,{onClick:function(){e.isFavourite?e.deleteFavourite(e.id):e.addFavourite(e.id)},isFavourite:l})),a&&r.a.createElement("span",{className:"event__label"},"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e!"),c&&r.a.createElement("span",{className:"event__price"},c," \u0440."),r.a.createElement(S,{tags:n}))})),V=(a(45),function(e){return r.a.createElement("ul",{className:"events"},e.list.map((function(t){var a=e.favourites.find((function(e){return t.id===e}))||!1;return r.a.createElement(z,Object.assign({},t,{key:t.id,isFavourite:a}))})))}),H=function(e){e.error;return r.a.createElement("div",null,"error")},M=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"),r.a.createElement("span",{className:"loader__dots"},r.a.createElement("span",{className:"loader__dot"},"."),r.a.createElement("span",{className:"loader__dot"},"."),r.a.createElement("span",{className:"loader__dot"},".")))},A=function(e){var t=e.width,a=e.height;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 460.088 460.088",width:t,height:a},r.a.createElement("path",{className:"line",d:"M25.555 139.872h257.526V88.761H25.555C11.442 88.761 0 100.203 0 114.316s11.442 25.556 25.555 25.556z"}),r.a.createElement("path",{className:"line",d:"M25.555 242.429h257.526v-51.111H25.555C11.442 191.318 0 202.76 0 216.874s11.442 25.555 25.555 25.555z"}),r.a.createElement("path",{className:"line",d:"M25.555 293.874v.001C11.442 293.875 0 305.316 0 319.43s11.442 25.555 25.555 25.555h178.91a63.12 63.12 0 01-3.088-19.523c0-11.277 2.957-22.094 8.48-31.588H25.555z"}),r.a.createElement("path",{className:"arrow",d:"M450.623 302.611c-12.62-12.621-33.083-12.621-45.704 0l-26.535 26.535V52.926c0-17.849-14.469-32.317-32.318-32.317s-32.318 14.469-32.318 32.317v276.22l-26.535-26.535c-12.621-12.62-33.083-12.621-45.704 0-12.621 12.621-12.621 33.083 0 45.704l81.7 81.699c12.596 12.6 33.084 12.643 45.714 0l81.7-81.699c12.62-12.621 12.621-33.083 0-45.704z"}))},I=(a(46),Object(l.c)((function(e,t){var a,n,r=e.events,c=t.match.params.filter,i=[];return"favourites"===c?(a=r.list,i=(n=r.favourites).length<1?[]:n.map((function(e){return a.find((function(t){return t.id===e}))}))):i=c?function(e,t){return e.filter((function(e){return e.type.toLowerCase()===t}))}(r.list,c):r.list,{events:i,isLoading:r.loading,isError:r.error,order:r.order,filter:c,favourites:r.favourites}}),(function(e){return{toggleEventsOrder:function(){return e({type:"TOOGLE_ORDER"})}}}))((function(e){if(e.isError)return r.a.createElement(H,{error:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"});if(e.isLoading)return r.a.createElement(M,null);var t=e.events,a=e.order,n=e.toggleEventsOrder,c=e.filter,i=c?w.find((function(e){return e.filter===c})).name:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f \u0432 \u0433\u043e\u0440\u043e\u0434\u0435";if(t.length<1)return r.a.createElement("h2",null,'\u041d\u0435\u0442 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435: "',i,'"');var l="asc"===a?"\u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e":"\u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",o=function(e,t){var a="asc"===t?1:-1;return e.sort((function(e,t){return+e.price>+t.price?1*a:+e.price<+t.price?-1*a:0}))}(t,a);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"events__header"},r.a.createElement("h1",{className:"events__title"},i),r.a.createElement("button",{onClick:function(){return n()},className:"order-toggler ".concat(a),title:l},r.a.createElement(A,{width:"1.5rem",height:"1.5rem"}))),r.a.createElement(V,{list:o,favourites:e.favourites}))}))),R=function(e){var t=e.width,a=e.height;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 395.71 395.71",width:t,height:a},r.a.createElement("path",{d:"M197.849 0C122.131 0 60.531 61.609 60.531 137.329c0 72.887 124.591 243.177 129.896 250.388l4.951 6.738a3.064 3.064 0 002.471 1.255 3.08 3.08 0 002.486-1.255l4.948-6.738c5.308-7.211 129.896-177.501 129.896-250.388C335.179 61.609 273.569 0 197.849 0zm0 88.138c27.13 0 49.191 22.062 49.191 49.191 0 27.115-22.062 49.191-49.191 49.191-27.114 0-49.191-22.076-49.191-49.191 0-27.129 22.076-49.191 49.191-49.191z"}))},D=function(e){var t=e.width,a=e.height;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 330 330",width:t,height:a},r.a.createElement("path",{d:"M180 170c46.869 0 85-38.131 85-85S226.869 0 180 0c-.183 0-.365.003-.546.01H110.02l-.019-.001c-8.284 0-15 6.716-15 15V200H80c-8.284 0-15 6.716-15 15s6.716 15 15 15h15v85c0 8.284 6.716 15 15 15s15-6.716 15-15v-85h55c8.284 0 15-6.716 15-15s-6.716-15-15-15h-55v-30h55zm0-139.99c.162 0 .324-.003.484-.008C210.59 30.262 235 54.834 235 85c0 30.327-24.673 55-55 55h-55V30.01h55z"}))},B=function(e){var t=e.width,a=e.height;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 31.622 31.621",width:t,height:a},r.a.createElement("path",{d:"M31.43 4.945a2.162 2.162 0 00-2.162-2.162h-3.656V.882A.882.882 0 0024.73 0h-1.905a.884.884 0 00-.883.882v1.902H9.802V.882A.882.882 0 008.92 0H7.142a.882.882 0 00-.882.882v1.902H2.35A2.162 2.162 0 00.188 4.946v7.704h1.139v16.749c0 1.229.995 2.223 2.223 2.223h24.394a2.221 2.221 0 002.223-2.223v-16.75h1.267l-.004-7.704zM26.624 25.73a2.221 2.221 0 01-2.223 2.223H7.218a2.222 2.222 0 01-2.223-2.223V12.649h21.628V25.73h.001z"}),r.a.createElement("path",{d:"M8.031 15.051h3.541v3.669H8.031z"}),r.a.createElement("path",{d:"M14.102 15.051h3.541v3.669h-3.541z"}),r.a.createElement("path",{d:"M20.172 15.051h3.542v3.669h-3.542z"}),r.a.createElement("path",{d:"M8.031 21.502h3.541v3.668H8.031z"}),r.a.createElement("path",{d:"M14.102 21.502h3.541v3.668h-3.541z"}),r.a.createElement("path",{d:"M20.172 21.502h3.542v3.668h-3.542z"}))},U=(a(47),Object(l.c)((function(e,t){var a=e.events,n=t.match.params.event;return{event:function(e,t){return e.find((function(e){return e.slug===t}))}(a.list,n),isLoading:a.loading,error:a.error,favourites:a.favourites}}),(function(e){return{addFavourite:function(t){return e(f(t))},deleteFavourite:function(t){return e(E(t))}}}))((function(e){if(e.error)return r.a.createElement(H,{error:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"});if(e.isLoading)return r.a.createElement(M,null);var t=e.event,a=t.id,n=t.title,c=t.price,i=t.date,l=t.description,o=t.is_free,s=t.place,u=t.categories,m=t.body,v=e.favourites.find((function(e){return a===e}))||!1,d=new Date(i).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}),f=F()({"page-event__price":!0,"page-event__price--free":o});return r.a.createElement("div",{className:"page-event"},r.a.createElement("h1",{className:"page-event__title"},n),r.a.createElement(L,{onClick:function(){v?e.deleteFavourite(e.event.id):e.addFavourite(e.event.id)},isFavourite:v}),r.a.createElement("h2",{className:"page-event__description"},l),r.a.createElement("div",{className:"page-event__info"},r.a.createElement("time",{className:"page-event__date",dateTime:i},r.a.createElement(B,{height:"1.5rem",width:"1.5rem"}),d),s&&r.a.createElement("div",{className:"page-event__place"},r.a.createElement(R,{height:"1.5rem",width:"1.5rem"}),s),r.a.createElement("div",{className:f},r.a.createElement(D,{height:"1.75rem",width:"1.5rem"}),c||o&&"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e")),r.a.createElement("p",null,m),r.a.createElement(S,{tags:u}))}))),G=a(19),J=a.n(G),W="".concat("https://my-json-server.typicode.com/OlgaPavlyuk/cakelabs","/events"),P=function(){return function(e){var t,a;return J.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("fetching data"),e({type:"FETCH_EVENTS_BEGIN",payload:{}}),n.next=4,J.a.awrap(fetch(W));case 4:if(!(t=n.sent).ok){n.next=12;break}return n.next=8,J.a.awrap(t.json());case 8:a=n.sent,e({type:"FETCH_EVENTS_SUCCESS",payload:a}),n.next=13;break;case 12:e({type:"FETCH_EVENTS_FAILURE",payload:{error:t.status}});case 13:case"end":return n.stop()}}))}},q=Object(l.c)(null,(function(e){return{fetchEvents:function(){return e(P())}}}))((function(e){return Object(n.useEffect)((function(){e.fetchEvents()})),r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/",component:I}),r.a.createElement(O.a,{exact:!0,path:"/events",component:I}),r.a.createElement(O.a,{exact:!0,path:"/:filter",component:I}),r.a.createElement(O.a,{exact:!0,path:"/events/:event",component:U})))))})),K=localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):{},Q={events:{list:[],loading:!0,error:null,order:K.order||"asc",favourites:K.favourites||[]}},X=(b=Q,Object(u.e)(g(N),b,Object(u.d)(Object(u.a)(Object(m.a)(N),_.a))));X.subscribe((function(){var e=X.getState().events,t={order:e.order,favourites:e.favourites};localStorage.setItem("state",JSON.stringify(t))})),i.a.render(r.a.createElement(l.a,{store:X},r.a.createElement(o.a,{history:N},r.a.createElement(q,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.885e0165.chunk.js.map