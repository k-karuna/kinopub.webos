(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[10],{1062:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(73),c=n(2),a=n(32),u=n(919),i=n.n(u),o=n(954),l=n(888),s=n(903),d=n(899),f=n(11),b={useHistoryReplace:!1,deserialize:function(e){return e},serialize:function(e){return String(e)}};var j=function(e,t,n){var r=Object(a.h)(),u=Object(c.useMemo)((function(){return Object(f.a)(Object(f.a)({},b),n)}),[n]),i=Object(c.useMemo)((function(){var n=new URLSearchParams(r.location.search).get(e);return n?u.deserialize(n):t}),[e,t,u,r.location.search]),o=Object(c.useCallback)((function(t,n){var c=r.location,a=c.search,i=new URLSearchParams(a),o=u.serialize(t);o?i.set(e,o):i.delete(e);var l="?".concat(i);a!==l&&(n||u.useHistoryReplace?r.replace:r.push)({search:l,hash:c.hash,pathname:c.pathname},c.state)}),[e,u,r]),l=Object(c.useCallback)((function(e){o(t,e)}),[t,o]);return[i,o,l]},v=n(3);function O(e){return i()(e,"year","desc")}var h=function(){var e,t,n=Object(a.i)(),u=j("q",""),i=Object(r.a)(u,2),f=i[0],b=i[1],h=Object(d.a)("itemsSearch",[{q:f,type:null===(e=n.state)||void 0===e?void 0:e.type,field:null===(t=n.state)||void 0===t?void 0:t.field}]),m=Object(c.useCallback)((function(e){b(e)}),[b]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.a,{title:"\u041f\u043e\u0438\u0441\u043a"}),Object(v.jsx)("div",{className:"m-1 mb-3 mr-2",children:Object(v.jsx)(o.a,{autoFocus:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430 \u0438\u043b\u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u0430...",value:f,onChange:m})}),f.length>=3&&Object(v.jsx)(s.a,{queryResult:h,processItems:O})]})}},888:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(11),c=n(892),a=n(3),u=function(e){return Object(a.jsx)(c.a,Object(r.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},889:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(11),c=n(57),a=n(2),u=n(52),i=n.n(u),o=n(73),l=n(106),s=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},c=t.onEnterViewport,u=t.onLeaveViewport,i=Object(a.useState)(),s=Object(o.a)(i,2),d=s[1],f=Object(a.useRef)(null),b=Object(a.useRef)(!1),j=Object(a.useRef)(!1),v=Object(a.useRef)(0),O=Object(a.useRef)(0),h=Object(a.useCallback)((function(){if(e.current&&f.current){var t=Object(l.findDOMNode)(e.current);t&&f.current.observe(t)}}),[e,f]),m=Object(a.useCallback)((function(){if(e.current&&f.current){var t=Object(l.findDOMNode)(e.current);t&&(f.current.unobserve(t),f.current.disconnect(),f.current=null)}}),[e,f]),p=Object(a.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,a=t.intersectionRatio,i="undefined"!==typeof n?n:a>0;if(!j.current&&i)return j.current=!0,null===c||void 0===c||c(),v.current+=1,b.current=i,void d(i);j.current&&!i&&(j.current=!1,null===u||void 0===u||u(),r.disconnectOnLeave&&f.current&&f.current.disconnect(),O.current+=1,b.current=i,d(i))}),[f,r.disconnectOnLeave,c,u]),x=Object(a.useCallback)((function(){f.current||(f.current=new IntersectionObserver(p,n))}),[f,n,p]);return Object(a.useEffect)((function(){return x(),h(),function(){m()}}),[x,h,m]),{inViewport:b.current,enterCount:v.current,leaveCount:O.current}},d=n(3),f=["children","className","onScrollToEnd"],b=function(e){var t=e.children,n=e.className,u=e.onScrollToEnd,o=Object(c.a)(e,f),l=Object(a.useRef)(null);return s(l,{onEnterViewport:u}),Object(d.jsxs)("div",Object(r.a)(Object(r.a)({className:i()("overflow-y-auto h-full",n)},o),{},{children:[t,Object(d.jsx)("div",{className:"h-40",ref:l})]}))}},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(11),c=n(57),a=n(52),u=n.n(a),i=n(250),o=n(3),l=["title","className"],s=function(e){var t=e.title,n=e.className,a=Object(c.a)(e,l);return t?Object(o.jsx)(i.a,Object(r.a)(Object(r.a)({},a),{},{className:u()("m-1 mb-3",n),children:t})):null}},891:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(11),c=n(57),a=n(52),u=n.n(a),i=n(251),o=n(3),l=["className","wrapperClassName","source","caption","children"],s=function(e){var t=e.className,n=e.wrapperClassName,a=e.source,s=e.caption,d=e.children,f=Object(c.a)(e,l);return Object(o.jsx)(i.a,Object(r.a)(Object(r.a)({},f),{},{className:u()("rounded-xl w-1/5",n),children:Object(o.jsxs)("div",{className:u()("h-40 m-1 flex flex-col relative overflow-hidden cursor-pointer",t),children:[Object(o.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:a,alt:s}),Object(o.jsx)("div",{className:"px-2",children:Object(o.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden whitespace-nowrap",children:s})}),d]})}))}},895:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(105),c=n(2),a=n(52),u=n.n(a),i=n(193),o=n.n(i),l=n(889),s=n(890),d=n(32),f=n(891),b=n(7),j=n(3),v=function(e){var t=e.item,n=e.className,r=Object(d.h)(),a=Object(c.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),i=Object(c.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&r.push(Object(b.b)(b.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,r]);return Object(j.jsx)(f.a,{onClick:i,source:null===t||void 0===t?void 0:t.posters.medium,caption:a,className:u()("h-72",n),children:(null===t||void 0===t?void 0:t.new)&&Object(j.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-gray-200 px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===t||void 0===t?void 0:t.new})})},O=function(e){var t=e.title,n=e.items,c=e.loading,a=e.onScrollToEnd,i=e.scrollable,d=void 0===i||i,f=e.className,b=Object(j.jsxs)("div",{children:[Object(j.jsx)(s.a,{title:t}),Object(j.jsxs)("div",{className:u()("flex flex-wrap",f),children:[o()(n,(function(e){return Object(j.jsx)(v,{item:e},e.id)})),c&&o()(Object(r.a)(new Array(15)),(function(e,t){return Object(j.jsx)(v,{},t)}))]})]});return d?Object(j.jsx)(l.a,{onScrollToEnd:a,children:b}):b}},898:function(e,t,n){"use strict";var r=n(73),c=n(2),a=n(897),u=n.n(a),i=n(912),o=n.n(i),l=n(900),s=n.n(l);t.a=function(e,t){var n=e.data,a=e.isLoading,i=e.isFetchingNextPage,l=e.fetchNextPage,d=Object(c.useState)(!1),f=Object(r.a)(d,2),b=f[0],j=f[1],v=Object(c.useMemo)((function(){return s()(u()(o()(null===n||void 0===n?void 0:n.pages,(function(e){return e.items}))),"id")}),[null===n||void 0===n?void 0:n.pages]),O=Object(c.useMemo)((function(){return t?t(v):v}),[v,t]),h=Object(c.useCallback)((function(){b&&(l(),j(!1))}),[b,l]);return Object(c.useEffect)((function(){j(!0)}),[v.length]),[O,a||i,h]}},899:function(e,t,n){"use strict";var r=n(11),c=n(105),a=n(2),u=n(1077),i=n(252);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,o=Object(a.useMemo)((function(){return new i.c}),[]),l=Object(u.a)([e].concat(Object(c.a)(t)),(function(n){var r=n.pageParam;return o[e].apply(o,Object(c.a)(t).concat([r]))}),Object(r.a)({getNextPageParam:function(e){var t;return(null===e||void 0===e||null===(t=e.pagination)||void 0===t?void 0:t.current)+1||1}},n));return l}},903:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(73),c=n(895),a=n(898),u=n(3),i=function(e){var t=e.title,n=e.queryResult,i=e.processItems,o=Object(a.a)(n,i),l=Object(r.a)(o,3),s=l[0],d=l[1],f=l[2];return Object(u.jsx)(c.a,{title:t,items:s,loading:d,onScrollToEnd:f})}},919:function(e,t,n){var r=n(948),c=n(58);e.exports=function(e,t,n,a){return null==e?[]:(c(t)||(t=null==t?[]:[t]),c(n=a?void 0:n)||(n=null==n?[]:[n]),r(e,t,n))}},948:function(e,t,n){var r=n(261),c=n(262),a=n(378),u=n(394),i=n(949),o=n(392),l=n(950),s=n(389),d=n(58);e.exports=function(e,t,n){t=t.length?r(t,(function(e){return d(e)?function(t){return c(t,1===e.length?e[0]:e)}:e})):[s];var f=-1;t=r(t,o(a));var b=u(e,(function(e,n,c){return{criteria:r(t,(function(t){return t(e)})),index:++f,value:e}}));return i(b,(function(e,t){return l(e,t,n)}))}},949:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},950:function(e,t,n){var r=n(951);e.exports=function(e,t,n){for(var c=-1,a=e.criteria,u=t.criteria,i=a.length,o=n.length;++c<i;){var l=r(a[c],u[c]);if(l)return c>=o?l:l*("desc"==n[c]?-1:1)}return e.index-t.index}},951:function(e,t,n){var r=n(194);e.exports=function(e,t){if(e!==t){var n=void 0!==e,c=null===e,a=e===e,u=r(e),i=void 0!==t,o=null===t,l=t===t,s=r(t);if(!o&&!s&&!u&&e>t||u&&i&&l&&!o&&!s||c&&i&&l||!n&&l||!a)return 1;if(!c&&!u&&!s&&e<t||s&&n&&a&&!c&&!u||o&&n&&a||!i&&a||!l)return-1}return 0}},954:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(11),c=n(57),a=n(2),u=n(106),i=n(973),o=n.n(i),l=n(52),s=n.n(l),d=n(3),f=["className","onChange","autoFocus"],b=function(e){var t=e.className,n=e.onChange,i=e.autoFocus,l=Object(c.a)(e,f),b=Object(a.useRef)(null),j=Object(a.useCallback)((function(e){var t=e.value;null===n||void 0===n||n(t)}),[n]);return Object(a.useEffect)((function(){var e;return i&&(e=requestAnimationFrame((function(){var e,t=Object(u.findDOMNode)(b.current);null===t||void 0===t||null===(e=t.querySelector("input"))||void 0===e||e.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[b,i]),Object(d.jsx)(o.a,Object(r.a)(Object(r.a)({},l),{},{ref:b,className:s()("w-full",t),onChange:j}))}}}]);
//# sourceMappingURL=10.2997eea2.chunk.js.map