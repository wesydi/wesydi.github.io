(this.webpackJsonpelfsight=this.webpackJsonpelfsight||[]).push([[0],{48:function(t,e,n){},50:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n(0),a=n(17),r=n.n(a),l=n(10),u=n(18),o=n(13),i={photos:[],currentAlbumId:0},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_PHOTOS":return Object(o.a)(Object(o.a)({},t),{},{photos:e.photos,currentAlbumId:e.photos[0]?e.photos[0].albumId:0});default:return t}},j=(n(47),n(48),n(11)),h=n(3),d=n(15),m=n.n(d),p=n(22),O=n(9),f=(n(50),n(16)),x=n.n(f),_=(n(69),n(70),function(){return Object(c.jsx)("div",{className:"loader"})}),g=function(t){var e=t.data,n=t.isAlbum,a=Object(h.f)(),r=Object(s.useState)(window.innerWidth),l=Object(O.a)(r,2),u=l[0],o=l[1],i=Object(s.useState)(!1),b=Object(O.a)(i,2),d=b[0],m=b[1],p=Object(s.useState)(!1),f=Object(O.a)(p,2),x=f[0],g=f[1],v=a.pathname.split("/")[2];Object(s.useEffect)((function(){window.addEventListener("resize",(function(){o(window.innerWidth)}))}),[]),Object(s.useEffect)((function(){g(!1)}),[v]);return Object(c.jsxs)("nav",{className:"menu ".concat(d?"menu_full":""),children:[u<=768?Object(c.jsx)("div",{role:"presentation",onClick:function(){return m(!d)},className:"menu-btn ".concat(d?"menu-btn_open":""),children:Object(c.jsx)("div",{className:"menu-btn__burger"})}):null,u>768||d?e.length>0?Object(c.jsxs)(c.Fragment,{children:[n?Object(c.jsx)(j.b,{to:"/users",className:"menu__button",children:"\u2190"}):null,n&&!x?Object(c.jsx)(_,{}):null,Object(c.jsx)("div",{className:"menu__list ".concat(n&&!x?"menu__list_empty":""),children:Object(c.jsx)("ul",{children:e.map((function(t,s){return Object(c.jsxs)("li",{children:[n?Object(c.jsx)("img",{onLoad:function(){return s===e.length-1?g(!0):null},className:"menu__cover",src:t.cover,alt:"Cover of album"}):null,Object(c.jsx)(j.c,{onClick:function(){return d&&n?m(!1):null},activeClassName:"menu__link_active",className:"menu__link",to:n?"/users/".concat(v,"/albums/").concat(t.id,"/photos"):"/users/".concat(t.id,"/albums"),children:t.name||"".concat(t.title," (").concat(t.length,")")}),Object(c.jsx)("hr",{})]},t.id)}))})})]}):Object(c.jsx)(_,{}):null]})};g.defaultProps={data:[],isAlbum:!1};var v=Object(l.b)()(g),N=(n(74),function(t){var e=t.photos,n=t.currentAlbumId,a=Object(s.useState)(!1),r=Object(O.a)(a,2),l=r[0],u=r[1],o=Object(h.f)();return Object(s.useEffect)((function(){u(!1)}),[n]),Object(c.jsxs)("div",{className:"gallery",children:[l?null:Object(c.jsx)(_,{}),Object(c.jsx)("ul",{className:"gallery__list ".concat(l?"":"gallery__list_empty"),children:e.length>0?e.map((function(t,n){return Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"".concat(o.pathname,"/fullscreen/").concat(t.id),children:Object(c.jsx)("img",{className:"gallery__photo",onLoad:function(){return n===e.length-1?u(!0):null},src:t.thumbnailUrl,alt:t.id})})},t.id)})):null})]})});N.defaultProps={photos:[],currentAlbumId:0};var k=Object(l.b)((function(t){return{photos:t.photos,currentAlbumId:t.currentAlbumId}}))(N),y=function(t){return{addPhotos:function(e){return t({type:"ADD_PHOTOS",photos:e})}}},w=(n(75),function(t){var e=t.photos,n=Object(s.useState)(""),a=Object(O.a)(n,2),r=a[0],l=a[1],u=Object(h.f)().pathname.split("/"),o=Object(h.e)(),i=Number(u[u.length-1]);return Object(s.useEffect)((function(){if(e.length>0){var t=e.find((function(t){return t.id===i}));l(t.url)}}),[e,i]),Object(c.jsxs)("div",{className:"lightbox",children:[Object(c.jsxs)("div",{className:"lightbox__buttons",children:[Object(c.jsx)("button",{onClick:function(){return o.push(u.slice(0,6).join("/"))},type:"button",className:"lightbox__button lightbox__button_close",children:"\xd7"}),Object(c.jsx)("button",{onClick:function(){i+=1,o.push(String(i))},type:"button",className:"lightbox__button lightbox__button_next",disabled:e.length>0&&i===e[e.length-1].id,children:"\u2192"}),Object(c.jsx)("button",{onClick:function(){i-=1,o.push(String(i))},type:"button",className:"lightbox__button lightbox__button_prev",disabled:e.length>0&&i===e[0].id,children:"\u2190"})]}),Object(c.jsx)("div",{className:"lightbox__content",children:r.length>0?Object(c.jsx)("img",{alt:"",src:r}):null})]})});w.defaultProps={photos:[]};var A=Object(l.b)((function(t){return{photos:t.photos}}))(w),S="https://jsonplaceholder.typicode.com",P=function(t){var e=t.dispatch,n=Object(s.useState)([]),a=Object(O.a)(n,2),r=a[0],l=a[1],u=Object(s.useState)(!1),i=Object(O.a)(u,2),b=i[0],j=i[1],d=Object(h.f)(),f=d.pathname.split("/");return Object(s.useEffect)(Object(p.a)(m.a.mark((function t(){var n,c,s,a,r,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(j(d.pathname.includes("albums")),t.prev=1,"/"!==d.pathname&&"/users"!==d.pathname){t.next=7;break}return t.next=5,x.a.get("".concat(S,"/users"));case 5:n=t.sent,l(n.data);case 7:if(!d.pathname.includes("users")||!d.pathname.includes("albums")){t.next=14;break}return c="".concat(f.slice(0,4).join("/")),t.next=11,x.a.get("".concat(S).concat(c));case 11:s=t.sent,a=s.data.map(function(){var t=Object(p.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("".concat(S,"/albums/").concat(e.id,"/photos"));case 2:return n=t.sent,t.abrupt("return",Object(o.a)(Object(o.a)({},e),{},{length:n.data.length,cover:n.data[0].thumbnailUrl}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Promise.all(a).then((function(t){l(t)}));case 14:if(!d.pathname.includes("photos")){t.next=20;break}return r="".concat(f.slice(3,6).join("/")),t.next=18,x.a.get("".concat(S,"/").concat(r));case 18:u=t.sent,y(e).addPhotos(u.data);case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(1),console.error(t.t0);case 25:case"end":return t.stop()}}),t,null,[[1,22]])}))),[d]),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)(v,{data:r,isAlbum:b}),Object(c.jsx)(h.a,{exact:!0,path:["/","/users","/users/:id/albums"],children:Object(c.jsx)("div",{className:"placeholder",children:Object(c.jsx)("span",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0443\u043d\u043a\u0442 \u0438\u0437 \u043c\u0435\u043d\u044e"})})}),Object(c.jsx)(h.a,{path:"/users/:id/albums/:id/photos",children:Object(c.jsx)(k,{})}),Object(c.jsx)(h.a,{path:"/users/:id/albums/:id/photos/fullscreen/:id",children:Object(c.jsx)(A,{})})]})};P.defaultProps={dispatch:function(){}};var I=Object(l.b)()(P),C=function(){return Object(c.jsx)(j.a,{children:Object(c.jsx)(h.a,{path:"/",children:Object(c.jsx)(I,{})})})},E=Object(u.b)(b);r.a.render(Object(c.jsx)(l.a,{store:E,children:Object(c.jsx)(C,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.50d1b639.chunk.js.map