(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[14],{1087:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var r=n(11),i=n(31),o=n(889),c=n(941),u=n(926),a=n(970),s=n(3),f={movie:"\u0424\u0438\u043b\u044c\u043c\u044b",serial:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b",concert:"\u041a\u043e\u043d\u0446\u0435\u0440\u0442\u044b",documovie:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b",docuserial:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b",tvshow:"\u0422\u0412 \u0428\u043e\u0443"},h=function(){var t=Object(i.j)().categoryId,e=Object(a.a)(),n=Object(i.i)().state||{},h=n.params,l=n.title,v=void 0===l?function(t){return(t?f[t]:t)||""}(t):l,p=Object(u.a)("items",[Object(r.a)(Object(r.a)(Object(r.a)({},e),h),{},{type:t})]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o.a,{title:v}),Object(s.jsx)(c.a,{title:v,queryResult:p})]})}},897:function(t,e,n){var r=n(382),i=n(899),o=n(375),c=n(57);t.exports=function(t,e){return(c(t)?r:i)(t,o(e,3))}},899:function(t,e,n){var r=n(381);t.exports=function(t,e){var n=[];return r(t,(function(t,r,i){e(t,r,i)&&n.push(t)})),n}},900:function(t,e){t.exports=function(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}},911:function(t,e,n){var r=n(375),i=n(916);t.exports=function(t,e){return t&&t.length?i(t,r(e,2)):[]}},914:function(t,e,n){var r=n(388),i=n(915);t.exports=function t(e,n,o,c,u){var a=-1,s=e.length;for(o||(o=i),u||(u=[]);++a<s;){var f=e[a];n>0&&o(f)?n>1?t(f,n-1,o,c,u):r(u,f):c||(u[u.length]=f)}return u}},915:function(t,e,n){var r=n(151),i=n(258),o=n(57),c=r?r.isConcatSpreadable:void 0;t.exports=function(t){return o(t)||i(t)||!!(c&&t&&t[c])}},916:function(t,e,n){var r=n(386),i=n(917),o=n(921),c=n(387),u=n(922),a=n(379);t.exports=function(t,e,n){var s=-1,f=i,h=t.length,l=!0,v=[],p=v;if(n)l=!1,f=o;else if(h>=200){var b=e?null:u(t);if(b)return a(b);l=!1,f=c,p=new r}else p=e?[]:v;t:for(;++s<h;){var g=t[s],d=e?e(g):g;if(g=n||0!==g?g:0,l&&d===d){for(var O=p.length;O--;)if(p[O]===d)continue t;e&&p.push(d),v.push(g)}else f(p,d,n)||(p!==v&&p.push(d),v.push(g))}return v}},917:function(t,e,n){var r=n(918);t.exports=function(t,e){return!!(null==t?0:t.length)&&r(t,e,0)>-1}},918:function(t,e,n){var r=n(900),i=n(919),o=n(920);t.exports=function(t,e,n){return e===e?o(t,e,n):r(t,i,n)}},919:function(t,e){t.exports=function(t){return t!==t}},920:function(t,e){t.exports=function(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}},921:function(t,e){t.exports=function(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}},922:function(t,e,n){var r=n(389),i=n(923),o=n(379),c=r&&1/o(new r([,-0]))[1]==1/0?function(t){return new r(t)}:i;t.exports=c},923:function(t,e){t.exports=function(){}},932:function(t,e,n){var r=n(914),i=n(192);t.exports=function(t,e){return r(i(t,e),1)}},953:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(10),i=n(66),o=n(927),c=n(261),u=function(t){function e(e,n){return t.call(this,e,n)||this}Object(i.a)(e,t);var n=e.prototype;return n.bindMethods=function(){t.prototype.bindMethods.call(this),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)},n.setOptions=function(e){t.prototype.setOptions.call(this,Object(r.a)({},e,{behavior:Object(c.c)()}))},n.getOptimisticResult=function(e){return e.behavior=Object(c.c)(),t.prototype.getOptimisticResult.call(this,e)},n.fetchNextPage=function(t){return this.fetch({cancelRefetch:!0,throwOnError:null==t?void 0:t.throwOnError,meta:{fetchMore:{direction:"forward",pageParam:null==t?void 0:t.pageParam}}})},n.fetchPreviousPage=function(t){return this.fetch({cancelRefetch:!0,throwOnError:null==t?void 0:t.throwOnError,meta:{fetchMore:{direction:"backward",pageParam:null==t?void 0:t.pageParam}}})},n.createResult=function(e,n){var i,o,u,a,s,f,h=e.state,l=t.prototype.createResult.call(this,e,n);return Object(r.a)({},l,{fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Object(c.a)(n,null==(i=h.data)?void 0:i.pages),hasPreviousPage:Object(c.b)(n,null==(o=h.data)?void 0:o.pages),isFetchingNextPage:h.isFetching&&"forward"===(null==(u=h.fetchMeta)||null==(a=u.fetchMore)?void 0:a.direction),isFetchingPreviousPage:h.isFetching&&"backward"===(null==(s=h.fetchMeta)||null==(f=s.fetchMore)?void 0:f.direction)})},e}(o.a),a=n(5),s=n(895);function f(t,e,n){var r=Object(a.l)(t,e,n);return Object(s.a)(r,u)}},970:function(t,e,n){"use strict";var r=n(2),i=n(31);e.a=function(){var t=Object(i.i)();return Object(r.useMemo)((function(){return e=t.search,Object.fromEntries(new URLSearchParams(e).entries());var e}),[t.search])}}}]);
//# sourceMappingURL=14.f513cc69.chunk.js.map