(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[10],{1079:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return V}));var c=n(30),i=n.n(c),r=n(52),l=n(73),a=n(2),o=n(31),s=n(192),u=n.n(s),d=n(251),b=n(898),v=n(910),j=n(266),f=n(936),m=n(890),O=n(924),h=n(893),x=n(6),p=n(3),g=function(e){var t=e.item,n=e.season,c=e.onEpisodeFocus,i=e.onEpisodeBlur,r=Object(o.h)(),l=Object(a.useCallback)((function(e){return function(){(null===e||void 0===e?void 0:e.id)&&r.push(Object(x.b)(x.a.Video,{videoId:e.id}),{item:t,video:e,season:n})}}),[t,n,r]),s=Object(a.useCallback)((function(e){return function(){null===c||void 0===c||c(e)}}),[c]),b=Object(a.useCallback)((function(e){return function(){null===i||void 0===i||i(e)}}),[i]);return Object(p.jsx)("div",{className:"flex flex-col",children:Object(p.jsx)(O.a,{title:"\u0421\u0435\u0437\u043e\u043d ".concat(n.number),children:Object(p.jsx)("div",{className:"flex flex-wrap",children:u()(n.episodes,(function(e){return Object(p.jsx)(h.a,{source:e.thumbnail,caption:"\u042d\u043f\u0438\u0437\u043e\u0434 ".concat(e.number),onClick:l(e),onFocus:s(e),onBlur:b(e),children:e.watched===d.b.Watched&&Object(p.jsx)("div",{className:"absolute flex justify-center items-center rounded-xl bg-black bg-opacity-60 top-0 bottom-0 left-0 right-0",children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043e"})},e.id)}))})})})},y=n(252),N=n(256),w=function(e){var t=e.item,n=e.seasons,c=e.className,i=e.onSeasonToggle,r=e.onEpisodeToggle,o=Object(a.useState)(null),s=Object(l.a)(o,2),d=s[0],b=s[1],v=Object(a.useState)(null),j=Object(l.a)(v,2),f=j[0],m=j[1],O=Object(a.useCallback)((function(e){return function(t){b(e),m(t)}}),[]),h=Object(a.useCallback)((function(){b(null),m(null)}),[]),x=Object(a.useCallback)((function(){if(d&&i)return i(d),!1}),[d,i]),w=Object(a.useCallback)((function(){if(f&&r)return r(f,d),!1}),[f,d,r]);return Object(N.a)("Yellow",x),Object(N.a)("Blue",w),(null===n||void 0===n?void 0:n.length)?Object(p.jsxs)("div",{className:c,children:[Object(p.jsx)(y.a,{className:"text-gray-500",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0435\u0437\u043e\u043d\u043e\u0432"}),u()(n,(function(e){return Object(p.jsx)(g,{item:t,season:e,onEpisodeFocus:O(e),onEpisodeBlur:h},e.id)}))]}):null},k=n(889),C=n(902),E=n(912),M=n(891),I=n(195),T=function(e){var t=e.itemId,n=Object(M.a)("bookmarks").data,c=Object(M.a)("itemBookmarks",[t]),l=c.data,o=c.dataUpdatedAt,s=c.refetch,d=Object(I.a)("bookmarkToggleItem").bookmarkToggleItemAsync,b=Object(a.useMemo)((function(){return(null===l||void 0===l?void 0:l.folders.map((function(e){return e.id})))||[]}),[null===l||void 0===l?void 0:l.folders]),v=Object(a.useCallback)((function(e){return Object(r.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d([t,e.id]);case 2:s();case 3:case"end":return n.stop()}}),n)})))}),[t,d,s]);return Object(p.jsx)("div",{className:"flex flex-wrap",children:u()(null===n||void 0===n?void 0:n.items,(function(e){return Object(p.jsx)("div",{className:"w-1/5 p-1",children:Object(p.jsx)(E.a,{defaultChecked:b.includes(e.id),onChange:v(e),children:e.title})},e.updated)}))},o)},S=n(950),_=n.n(S),A=n(259);var F=function(){var e=Object(M.a)("streamingTypes").data,t=Object(M.a)("deviceInfo").data,n=Object(A.a)("streaming_type"),c=Object(l.a)(n,2)[1],i=Object(a.useMemo)((function(){var e,n,c;return _()(null===t||void 0===t||null===(e=t.device)||void 0===e||null===(n=e.settings)||void 0===n||null===(c=n.streamingType)||void 0===c?void 0:c.value,(function(e){return e.selected===d.a.True}))}),[null===t||void 0===t?void 0:t.device]),r=Object(a.useMemo)((function(){return _()(null===e||void 0===e?void 0:e.items,(function(e){return(null===e||void 0===e?void 0:e.id)===(null===i||void 0===i?void 0:i.id)}))}),[null===e||void 0===e?void 0:e.items,i]);Object(a.useEffect)((function(){(null===r||void 0===r?void 0:r.code)&&c(null===r||void 0===r?void 0:r.code)}),[c,null===r||void 0===r?void 0:r.code])},z=n(934),R=n(896),B=n(935),P=function(e){var t,n=e.itemId,c=e.className,i=Object(M.a)("itemSmiliar",[n]).data;return i&&(null===(t=i.items)||void 0===t?void 0:t.length)>0?Object(p.jsx)("div",{className:c,children:Object(p.jsx)(v.a,{title:"\u041f\u043e\u0445\u043e\u0436\u0438\u0435",titleClassName:"text-gray-500",items:i.items,scrollable:!1})}):null},V=function(){var e,t,n,c,s,v,O,h,g,E,S,_,A,V,q,W,L,U,D,G,H,K=Object(o.h)(),Y=Object(o.j)().itemId,J=Object(a.useState)(!1),X=Object(l.a)(J,2),$=X[0],Q=X[1],Z=Object(M.a)("itemMedia",[Y],{staleTime:0}),ee=Z.data,te=Z.refetch,ne=Object(I.a)("watchingToggle").watchingToggleAsync,ce=Object(I.a)("watchingToggleWatchlist").watchingToggleWatchlistAsync,ie=Object(a.useMemo)((function(){var e,t;return(null===ee||void 0===ee||null===(e=ee.item.videos)||void 0===e?void 0:e.find((function(e){return e.watching.status!==d.b.Watched})))||(null===ee||void 0===ee||null===(t=ee.item.videos)||void 0===t?void 0:t[0])}),[null===ee||void 0===ee?void 0:ee.item]),re=Object(a.useMemo)((function(){var e,t;return(null===ee||void 0===ee||null===(e=ee.item.seasons)||void 0===e?void 0:e.find((function(e){return e.watching.status!==d.b.Watched})))||(null===ee||void 0===ee||null===(t=ee.item.seasons)||void 0===t?void 0:t[0])}),[null===ee||void 0===ee?void 0:ee.item]),le=Object(a.useMemo)((function(){return(null===re||void 0===re?void 0:re.episodes.find((function(e){return e.watching.status!==d.b.Watched})))||(null===re||void 0===re?void 0:re.episodes[0])}),[re]),ae=Object(a.useMemo)((function(){return null===ee||void 0===ee?void 0:ee.item.trailer}),[null===ee||void 0===ee?void 0:ee.item]),oe=ie||le,se=Object(a.useMemo)((function(){return Object(R.c)(null===ee||void 0===ee?void 0:ee.item,oe,re)}),[null===ee||void 0===ee?void 0:ee.item,re,oe]),ue=Object(a.useMemo)((function(){var e,t;return Object(z.a)(null===ee||void 0===ee||null===(e=ee.item)||void 0===e||null===(t=e.duration)||void 0===t?void 0:t.average)}),[null===ee||void 0===ee?void 0:ee.item]),de=Object(a.useMemo)((function(){var e,t;return Object(z.a)(null===ee||void 0===ee||null===(e=ee.item)||void 0===e||null===(t=e.duration)||void 0===t?void 0:t.total)}),[null===ee||void 0===ee?void 0:ee.item]),be=Object(a.useMemo)((function(){var e;return Object(B.a)((null===(e=ie||le)||void 0===e?void 0:e.audios)||[])}),[ie,le]),ve=Object(a.useMemo)((function(){var e;return Object(B.c)((null===(e=ie||le)||void 0===e?void 0:e.subtitles)||[])}),[ie,le]),je=Object(a.useCallback)((function(){(null===oe||void 0===oe?void 0:oe.id)&&K.push(Object(x.b)(x.a.Video,{videoId:oe.id}),{item:null===ee||void 0===ee?void 0:ee.item,video:oe,season:re})}),[K,null===ee||void 0===ee?void 0:ee.item,re,oe]),fe=Object(a.useCallback)((function(){(null===ae||void 0===ae?void 0:ae.id)&&K.push(Object(x.b)(x.a.Trailer,{trailerId:ae.id}),{item:null===ee||void 0===ee?void 0:ee.item,trailer:ae})}),[K,null===ee||void 0===ee?void 0:ee.item,ae]),me=Object(a.useCallback)((function(){Q(!0)}),[]),Oe=Object(a.useCallback)((function(){Q(!1)}),[]),he=Object(a.useCallback)(function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne([Y,void 0,null===t||void 0===t?void 0:t.number]);case 2:te();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[Y,te,ne]),xe=Object(a.useCallback)(function(){var e=Object(r.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne([Y,t.number,null===n||void 0===n?void 0:n.number]);case 2:te();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[Y,te,ne]),pe=Object(a.useCallback)(Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce([Y]);case 2:te();case 3:case"end":return e.stop()}}),e)}))),[Y,ce,te]);return F(),Object(N.a)(["Play","Red"],je),Object(N.a)("Green",fe),Object(N.a)("Yellow",me),Object(N.a)("Blue",pe),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k.a,{title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440: ".concat(se)}),Object(p.jsxs)(m.b,{children:[Object(p.jsxs)("div",{className:"relative w-screen h-screen",children:[Object(p.jsx)("img",{className:"absolute w-screen h-screen object-cover -z-1",src:(null===ee||void 0===ee||null===(e=ee.item)||void 0===e?void 0:e.posters.wide)||(null===ee||void 0===ee||null===(t=ee.item)||void 0===t?void 0:t.posters.big),alt:se}),Object(p.jsx)(y.a,{className:"p-4 absolute top-0",children:se}),Object(p.jsxs)("div",{className:"absolute flex bottom-8 left-4 right-4",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(b.a,{icon:"play_circle_outline",onClick:je,className:"text-red-600",children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c"}),Object(p.jsx)(b.a,{icon:"bookmark",onClick:me,className:"text-yellow-600",children:"\u0412 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"}),Object(p.jsx)(f.a,{visible:$,onClose:Oe,closeButton:"Yellow",children:Object(p.jsx)(T,{itemId:Y},"".concat(Y,"-").concat($))})]}),Object(p.jsxs)("div",{children:[ae&&Object(p.jsx)(b.a,{icon:"videocam",onClick:fe,className:"text-green-600",children:"\u0422\u0440\u0435\u0439\u043b\u0435\u0440"}),"boolean"===typeof(null===ee||void 0===ee||null===(n=ee.item)||void 0===n?void 0:n.subscribed)&&Object(p.jsx)(b.a,{icon:(null===ee||void 0===ee||null===(c=ee.item)||void 0===c?void 0:c.subscribed)?"visibility_off":"visibility",onClick:pe,className:"text-blue-600",children:(null===ee||void 0===ee?void 0:ee.item.subscribed)?"\u041d\u0435 \u0431\u0443\u0434\u0443 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c":"\u0411\u0443\u0434\u0443 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"})]})]})]}),Object(p.jsxs)("div",{className:"flex flex-col p-6",children:[Object(p.jsxs)("div",{className:"flex pb-6",children:[Object(p.jsx)("div",{className:"flex flex-shrink-0 items-start w-58 pr-8",children:Object(p.jsx)(C.a,{item:null===ee||void 0===ee?void 0:ee.item,wrapperClassName:"w-full",showViews:!0,noCaption:!0,disableNavigation:!0})}),Object(p.jsxs)("div",{className:"flex flex-col",children:[Object(p.jsx)(y.a,{className:"text-2xl",children:null===ee||void 0===ee||null===(s=ee.item)||void 0===s?void 0:s.title}),Object(p.jsxs)(y.a,{className:"text-gray-500",children:[null===ee||void 0===ee||null===(v=ee.item)||void 0===v?void 0:v.year,u()(null===ee||void 0===ee||null===(O=ee.item)||void 0===O?void 0:O.countries,(function(e){return Object(p.jsx)("span",{className:"ml-2",children:e.title},e.id)}))]}),!!(null===ee||void 0===ee||null===(h=ee.item)||void 0===h||null===(g=h.genres)||void 0===g?void 0:g.length)&&Object(p.jsx)("div",{className:"flex py-2",children:u()(null===ee||void 0===ee||null===(E=ee.item)||void 0===E?void 0:E.genres,(function(e){var t;return Object(p.jsx)(j.a,{href:Object(x.b)(x.a.Category,{categoryId:null===ee||void 0===ee||null===(t=ee.item)||void 0===t?void 0:t.type},{genre:e.id}),className:"border-2 border-gray-200 rounded-xl px-2 mr-2",children:e.title},e.id)}))}),(de||ue)&&Object(p.jsxs)("div",{className:"py-2",children:[Object(p.jsx)(y.a,{className:"text-gray-500",children:"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"}),Object(p.jsx)("div",{className:"flex",children:de===ue?Object(p.jsx)(y.a,{className:"pl-1",children:de}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"flex mr-2",children:[Object(p.jsx)(y.a,{className:"text-gray-500 mr-2",children:"\u0421\u0435\u0440\u0438\u044f:"}),Object(p.jsxs)(y.a,{children:["\u2248",ue]})]}),Object(p.jsxs)("div",{className:"flex mr-2",children:[Object(p.jsx)(y.a,{className:"text-gray-500 mr-2",children:"\u0421\u0435\u0440\u0438\u0430\u043b:"}),Object(p.jsx)(y.a,{children:de})]})]})})]}),(null===ee||void 0===ee||null===(S=ee.item)||void 0===S?void 0:S.plot)&&Object(p.jsxs)("div",{className:"py-2",children:[Object(p.jsx)(y.a,{className:"text-gray-500",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(p.jsx)(y.a,{className:"text-gray-300 pl-1",children:null===ee||void 0===ee||null===(_=ee.item)||void 0===_?void 0:_.plot})]}),be.length>0&&Object(p.jsxs)("div",{className:"py-2",children:[Object(p.jsx)(y.a,{className:"text-gray-500",children:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434"}),Object(p.jsx)("div",{className:"flex flex-wrap",children:u()(be,(function(e){return Object(p.jsx)(y.a,{className:"w-1/2 px-1",children:e.name},e.name)}))})]}),ve.length>0&&Object(p.jsxs)("div",{className:"py-2",children:[Object(p.jsx)(y.a,{className:"text-gray-500",children:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"}),Object(p.jsx)("div",{className:"flex flex-wrap pl-1",children:u()(ve,(function(e){return Object(p.jsx)(y.a,{className:"w-1/6",children:e.name},e.name)}))})]})]})]}),!!(null===ee||void 0===ee||null===(A=ee.item)||void 0===A||null===(V=A.tracklist)||void 0===V?void 0:V.length)&&Object(p.jsxs)("div",{className:"flex flex-col pb-6",children:[Object(p.jsx)(y.a,{className:"text-gray-500",children:"\u0422\u0440\u0435\u043a\u043b\u0438\u0441\u0442"}),Object(p.jsx)("div",{className:"flex flex-wrap flex-col",children:u()(null===ee||void 0===ee?void 0:ee.item.tracklist,(function(e,t){return Object(p.jsxs)(y.a,{children:[t+1,". ",e.title]},t)}))})]}),Object(p.jsx)(w,{className:"pb-6",item:null===ee||void 0===ee?void 0:ee.item,seasons:null===ee||void 0===ee||null===(q=ee.item)||void 0===q?void 0:q.seasons,onSeasonToggle:he,onEpisodeToggle:xe}),((null===ee||void 0===ee||null===(W=ee.item)||void 0===W?void 0:W.director)||(null===ee||void 0===ee||null===(L=ee.item)||void 0===L?void 0:L.cast))&&Object(p.jsxs)("div",{className:"flex pb-6",children:[(null===ee||void 0===ee||null===(U=ee.item)||void 0===U?void 0:U.director)&&Object(p.jsxs)("div",{className:"flex-shrink-0 w-58 pr-8",children:[Object(p.jsx)(y.a,{className:"text-gray-500",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u0438"}),u()(null===ee||void 0===ee||null===(D=ee.item)||void 0===D?void 0:D.director.split(", "),(function(e){return Object(p.jsx)(j.a,{href:Object(x.b)(x.a.Search,{},{q:e,mode:"director"}),children:e},e)}))]}),(null===ee||void 0===ee||null===(G=ee.item)||void 0===G?void 0:G.cast)&&Object(p.jsxs)("div",{className:"flex flex-col",children:[Object(p.jsx)(y.a,{className:"text-gray-500",children:"\u0412 \u0440\u043e\u043b\u044f\u0445"}),Object(p.jsx)("div",{className:"flex flex-wrap",children:u()(null===ee||void 0===ee||null===(H=ee.item)||void 0===H?void 0:H.cast.split(", "),(function(e,t,n){return Object(p.jsxs)(j.a,{href:Object(x.b)(x.a.Search,{},{q:e,mode:"actor"}),children:[e,t!==n.length-1&&", "]},e)}))})]})]}),Object(p.jsx)(P,{className:"pb-6",itemId:Y})]})]})]})}},889:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(11),i=n(894),r=n(3),l=function(e){return Object(r.jsx)(i.a,Object(c.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},890:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return f}));var c=n(11),i=n(56),r=n(2),l=n(51),a=n.n(l),o=n(73),s=n(105),u=function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},i=t.onEnterViewport,l=t.onLeaveViewport,a=Object(r.useState)(),u=Object(o.a)(a,2),d=u[1],b=Object(r.useRef)(null),v=Object(r.useRef)(!1),j=Object(r.useRef)(!1),f=Object(r.useRef)(0),m=Object(r.useRef)(0),O=Object(r.useCallback)((function(){if(e.current&&b.current){var t=Object(s.findDOMNode)(e.current);t&&b.current.observe(t)}}),[e,b]),h=Object(r.useCallback)((function(){if(e.current&&b.current){var t=Object(s.findDOMNode)(e.current);t&&(b.current.unobserve(t),b.current.disconnect(),b.current=null)}}),[e,b]),x=Object(r.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,r=t.intersectionRatio,a="undefined"!==typeof n?n:r>0;if(!j.current&&a)return j.current=!0,null===i||void 0===i||i(),f.current+=1,v.current=a,void d(a);j.current&&!a&&(j.current=!1,null===l||void 0===l||l(),c.disconnectOnLeave&&b.current&&b.current.disconnect(),m.current+=1,v.current=a,d(a))}),[b,c.disconnectOnLeave,i,l]),p=Object(r.useCallback)((function(){b.current||(b.current=new IntersectionObserver(x,n))}),[b,n,x]);return Object(r.useEffect)((function(){return p(),O(),function(){h()}}),[p,O,h]),{inViewport:v.current,enterCount:f.current,leaveCount:m.current}},d=n(1076);var b=function(e){var t=Object(d.a)();return Object(r.useMemo)((function(){return"".concat(e,"-").concat(t)}),[e,t])},v=n(3),j=["children","className","onScrollToEnd"],f=Object(r.createContext)({}),m=function(e){var t=e.children,n=e.className,l=e.onScrollToEnd,o=Object(i.a)(e,j),s=Object(r.useRef)(null),d=b("scrollable"),m=Object(r.useMemo)((function(){return{id:d}}),[d]);return u(s,{onEnterViewport:l}),Object(v.jsxs)("div",Object(c.a)(Object(c.a)({className:a()("overflow-y-auto h-full",n)},o),{},{id:d,children:[Object(v.jsx)(f.Provider,{value:m,children:t}),l&&Object(v.jsx)("div",{className:"h-40",ref:s})]}))}},891:function(e,t,n){"use strict";var c=n(104),i=n(2),r=n(928),l=n(251);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,a=Object(i.useMemo)((function(){return new l.c}),[]),o=Object(r.a)([e].concat(Object(c.a)(t)),(function(){return a[e].apply(a,Object(c.a)(t))}),n);return o}},892:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(11),i=n(56),r=n(51),l=n.n(r),a=n(252),o=n(3),s=["title","className"],u=function(e){var t=e.title,n=e.className,r=Object(i.a)(e,s);return t?Object(o.jsx)(a.a,Object(c.a)(Object(c.a)({},r),{},{className:l()("m-1 mb-3",n),children:t})):null}},893:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var c=n(11),i=n(56),r=n(51),l=n.n(r),a=n(2),o=n(913),s=n.n(o),u=n(890),d=n(3),b=function(e){var t=Object(a.useContext)(u.a).id;return Object(d.jsx)(s.a,Object(c.a)(Object(c.a)({once:!0,offset:100,scrollContainer:t&&"#".concat(t)},e),{},{placeholder:Object(d.jsx)("div",{className:"w-full h-full"})}))};var v=b,j=n(250),f=["className","wrapperClassName","source","caption","children"],m=function(e){var t=e.className,n=e.wrapperClassName,r=e.source,a=e.caption,o=e.children,s=Object(i.a)(e,f);return Object(d.jsxs)(j.a,Object(c.a)(Object(c.a)({},s),{},{className:l()("rounded-xl w-1/5 cursor-pointer",n),children:[Object(d.jsxs)(v,{className:l()("h-40 m-1 flex flex-col relative",t),children:[Object(d.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:r,alt:a}),o]}),a&&Object(d.jsx)("div",{className:"px-2",children:Object(d.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden overflow-ellipsis whitespace-nowrap",children:a})})]}))}},896:function(e,t,n){"use strict";function c(e,t,n){var c=(null===e||void 0===e?void 0:e.title)||"";return n?"".concat(c," (s").concat(n.number,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):c}function i(e,t,n){var c=(null===t||void 0===t?void 0:t.title)||"",i="s".concat((null===n||void 0===n?void 0:n.number)||1,"e").concat((null===t||void 0===t?void 0:t.number)||1);return n?c?"".concat(c," (").concat(i,")"):i:c}function r(e){return(null===e||void 0===e?void 0:e.quality)?2160===e.quality?"4k":1080===e.quality||720===e.quality?"hd":"sd":null}n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}))},897:function(e,t,n){var c=n(382),i=n(899),r=n(375),l=n(57);e.exports=function(e,t){return(l(e)?c:i)(e,r(t,3))}},898:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(11),i=n(56),r=n(2),l=n(51),a=n.n(l),o=n(253),s=n(250),u=n(3),d=["icon","iconOnly","children","autoFocus","className"],b=function(e){var t=e.icon,n=e.iconOnly,l=e.children,b=e.autoFocus,v=e.className,j=Object(i.a)(e,d),f=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e;return b&&(e=requestAnimationFrame((function(){var e,t;null===(e=f.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[f,b]),Object(u.jsx)(s.a,Object(c.a)(Object(c.a)({},j),{},{ref:f,className:a()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",v),role:"button",children:Object(u.jsxs)("div",{className:"flex items-center",children:[t&&Object(u.jsx)(o.a,{className:a()({"mr-2":!n}),name:t}),!n&&l]})}))}},899:function(e,t,n){var c=n(381);e.exports=function(e,t){var n=[];return c(e,(function(e,c,i){t(e,c,i)&&n.push(e)})),n}},900:function(e,t){e.exports=function(e,t,n,c){for(var i=e.length,r=n+(c?1:-1);c?r--:++r<i;)if(t(e[r],r,e))return r;return-1}},901:function(e,t,n){"use strict";var c=n(73),i=n(2);t.a=function(e){var t=Object(i.useState)(e),n=Object(c.a)(t,2),r=n[0],l=n[1];return Object(i.useEffect)((function(){l(e)}),[e]),[r,l]}},902:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var c,i,r=n(2),l=n(31),a=n(51),o=n.n(a),s=n(251),u=n(253),d=n(893),b=n(6),v=["title","titleId"];function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,c,i=function(e,t){if(null==e)return{};var n,c,i={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function m(e,t){var n=e.title,l=e.titleId,a=f(e,v);return r.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":l},a),n?r.createElement("title",{id:l},n):null,c||(c=r.createElement("path",{d:"M436.714 26.001H75.287c-27.21 0-49.285 22.075-49.285 49.286v361.427c0 27.211 22.075 49.285 49.285 49.285h361.427c27.211 0 49.284-22.074 49.284-49.285V75.287c0-27.211-22.073-49.286-49.284-49.286z",fill:"#fbbf14"})),i||(i=r.createElement("path",{fill:"#273238",d:"M91.716 190.287h33.883v131.222H91.716zM241.831 321.509h-29.469v-88.714l-11.912 88.714H179.3l-12.528-86.763v86.763h-29.776V190.287h43.947c3.39 20.329 6.16 40.968 8.934 61.504l7.803-61.504h44.152v131.222zM330.544 236.8c0-8.317.31-17.25-1.438-25.055-4.414-23.102-32.24-21.458-50.311-21.458h-25.261v131.222c88.408.103 77.01 6.16 77.01-84.709zm-43.022 61.913v-85.94c12.219 0 10.576 6.47 10.576 16.428v50.622c.001 9.958 1.951 19.199-10.576 18.89zM395.949 223.656c-9.137 0-15.298 2.773-21.457 9.447v-42.816h-32.55v131.222h30.597l1.953-8.317c5.852 6.982 12.218 10.063 21.457 10.063 20.331 0 22.795-15.607 22.795-31.729v-36.963c0-17.763-.821-30.907-22.795-30.907zm-16.427 80.706c-1.642 0-3.081-.823-3.902-2.465-2.26-5.237-1.128-45.281-1.128-45.897 0-3.901-1.132-13.04 5.03-13.04 7.496 0 6.364 7.496 6.364 13.04v33.574c.001 5.546 1.644 14.788-6.364 14.788z"})))}var O,h=r.forwardRef(m),x=(n.p,["title","titleId"]);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,c,i=function(e,t){if(null==e)return{};var n,c,i={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function y(e,t){var n=e.title,c=e.titleId,i=g(e,x);return r.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"#ff6600",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,O||(O=r.createElement("path",{d:"M15.518 10.736A8 8 0 11.482 5.264a8 8 0 0115.036 5.472zM8.94 8.342a1 1 0 10-1.88-.684 1 1 0 001.88.684zm-2.906 2.135A2 2 0 102.275 9.11a2 2 0 003.76 1.368zM8.086 4.84A2 2 0 104.328 3.47a2 2 0 003.758 1.368zm5.639 2.052a2 2 0 10-3.76-1.368 2 2 0 003.76 1.368zm-2.053 5.638a2 2 0 10-3.758-1.368 2 2 0 003.758 1.368z"})))}var N=r.forwardRef(y),w=(n.p,n(896)),k=n(904),C=n.n(k);var E=n(3),M=function(e){var t=e.item,n=e.className,c=e.wrapperClassName,i=e.showViews,a=e.noCaption,v=e.disableNavigation,j=Object(l.h)(),f=Object(r.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),m=Object(r.useMemo)((function(){return i&&(null===t||void 0===t?void 0:t.views)&&(e=null===t||void 0===t?void 0:t.views,C()(e))||"";var e}),[i,null===t||void 0===t?void 0:t.views]),O=Object(r.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&!v&&j.push(Object(b.b)(b.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,v,j]),x=Object(w.b)(t);return Object(E.jsxs)(d.a,{onClick:O,source:null===t||void 0===t?void 0:t.posters.medium,caption:a?"":f,className:o()("h-72",n),wrapperClassName:c,children:[(null===t||void 0===t?void 0:t.new)&&Object(E.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-gray-200 px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===t||void 0===t?void 0:t.new}),m&&Object(E.jsxs)("div",{className:"absolute top-2 right-2 h-6 pr-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex items-center",children:[Object(E.jsx)(u.a,{name:"visibility"}),m]}),(x||(null===t||void 0===t?void 0:t.ac3)||(null===t||void 0===t?void 0:t.advert))&&Object(E.jsxs)("div",{className:"absolute top-2 left-2 h-6 bg-black bg-opacity-50 rounded flex items-center",children:[x&&Object(E.jsx)(u.a,{name:x}),(null===t||void 0===t?void 0:t.ac3)===s.a.True&&Object(E.jsx)(u.a,{name:"graphic_eq"}),(null===t||void 0===t?void 0:t.advert)&&Object(E.jsx)(u.a,{name:"report"})]}),((null===t||void 0===t?void 0:t.rating)||(null===t||void 0===t?void 0:t.imdb_rating)||(null===t||void 0===t?void 0:t.kinopoisk_rating))&&Object(E.jsxs)("div",{className:"absolute bottom-2 left-2 right-2 h-6 px-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex justify-between items-center",children:[Object(E.jsxs)("div",{className:"flex items-center justify-start w-1/3",children:[Object(E.jsx)(h,{className:"h-3 w-3 mr-1"}),Object(E.jsx)("span",{children:(t.imdb_rating||0).toFixed(1)})]}),Object(E.jsxs)("div",{className:"flex items-center justify-center w-1/3",children:[Object(E.jsx)(N,{className:"h-3 w-3 mr-1"}),Object(E.jsx)("span",{children:(t.kinopoisk_rating||0).toFixed(1)})]}),Object(E.jsxs)("div",{className:"flex items-center justify-end w-1/3",children:[Object(E.jsx)(u.a,{name:"thumb_up"}),Object(E.jsxs)("span",{children:[t.rating_percentage||0,"%"]})]})]})]})}},904:function(e,t,n){"use strict";var c=n(905),i=n(30),r=i.mark(o);Object.defineProperty(t,"__esModule",{value:!0}),t.millify=void 0;var l=n(908),a=n(909);function o(e){var t,n;return i.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:t=1e3;case 1:if(!((n=e/t)<1)){c.next=5;break}return c.abrupt("return");case 5:return c.next=7,n;case 7:t*=1e3,c.next=1;break;case 10:case"end":return c.stop()}}),r)}function s(e,t){var n,i=t?Object.assign(Object.assign({},l.defaultOptions),t):l.defaultOptions;if(!Array.isArray(i.units)||!i.units.length)throw new Error("Option `units` must be a non-empty array");var r=a.parseValue(e),s=r<0?"-":"";r=Math.abs(r);var u,d=0,b=c(o(r));try{for(b.s();!(u=b.n()).done;){r=u.value,d+=1}}catch(p){b.e(p)}finally{b.f()}if(d>=i.units.length)return e.toString();var v,j=a.roundTo(r,i.precision),f=c(o(j));try{for(f.s();!(v=f.n()).done;){j=v.value,d+=1}}catch(p){f.e(p)}finally{f.f()}var m=null!==(n=i.units[d])&&void 0!==n?n:"",O=i.lowercase?m.toLowerCase():m,h=i.space?" ":"",x=j.toString().replace(l.defaultOptions.decimalSeparator,i.decimalSeparator);return"".concat(s).concat(x).concat(h).concat(O)}t.millify=s,t.default=s},905:function(e,t,n){var c=n(906);e.exports=function(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=c(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){o=!0,l=e},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw l}}}}},906:function(e,t,n){var c=n(907);e.exports=function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}},907:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}},908:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0,t.defaultOptions={decimalSeparator:".",lowercase:!1,precision:1,space:!1,units:["","K","M","B","T","P","E"]}},909:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.roundTo=t.parseValue=void 0,t.parseValue=function(e){var t=parseFloat(e.toString());if(isNaN(t))throw new Error("Input value is not a number");if(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)throw new RangeError("Input value is outside of safe integer range");return t},t.roundTo=function(e,t){if(!Number.isFinite(e))throw new Error("Input value is not a finite number");if(!Number.isInteger(t)||t<0)throw new Error("Precision is not a positive integer");return Number.isInteger(e)?e:parseFloat(e.toFixed(t))}},910:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(104),i=(n(2),n(51)),r=n.n(i),l=n(192),a=n.n(l),o=n(890),s=n(892),u=n(902),d=n(3),b=function(e){var t=e.title,n=e.items,i=e.loading,l=e.onScrollToEnd,b=e.scrollable,v=void 0===b||b,j=e.className,f=e.titleClassName,m=Object(d.jsxs)("div",{children:[Object(d.jsx)(s.a,{title:t,className:f}),Object(d.jsxs)("div",{className:r()("flex flex-wrap",j),children:[a()(n,(function(e){return Object(d.jsx)(u.a,{item:e},e.id)})),i&&a()(Object(c.a)(new Array(15)),(function(e,t){return Object(d.jsx)(u.a,{},t)}))]})]});return v?Object(d.jsx)(o.b,{onScrollToEnd:l,children:m}):m}},912:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(11),i=n(56),r=n(2),l=n(51),a=n.n(l),o=n(250),s=n(260),u=n(3),d=["defaultChecked","checked","onChange","className","children"],b=function(e){var t=e.defaultChecked,n=e.checked,l=e.onChange,b=e.className,v=e.children,j=Object(i.a)(e,d),f=Object(r.useRef)(null),m=Object(r.useCallback)((function(e){null===l||void 0===l||l(e.target.checked,e)}),[l]),O=Object(r.useCallback)((function(e){var t;Object(s.a)(e,"Enter")&&(null===(t=f.current)||void 0===t||t.click())}),[]);return Object(u.jsx)(o.a,{component:"label",className:a()("text-gray-200 p-2",b),onKeyPress:O,role:"button",children:Object(u.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(u.jsx)("input",Object(c.a)(Object(c.a)({type:"checkbox"},j),{},{ref:f,className:"inline-block w-4 h-4",defaultChecked:t,checked:n,onChange:m})),Object(u.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:v})]})})}},924:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(73),i=n(2),r=n(51),l=n.n(r),a=n(253),o=n(250),s=n(252),u=n(901),d=n(3),b=function(e){var t=e.open,n=e.onToggle,r=e.title,b=e.subtitle,v=e.className,j=e.children,f=Object(u.a)(t),m=Object(c.a)(f,2),O=m[0],h=m[1],x=Object(i.useCallback)((function(){var e=!O;null===n||void 0===n||n(e),h(e)}),[O,h,n]);return Object(d.jsxs)("div",{className:"flex flex-col w-full",children:[Object(d.jsx)(o.a,{onClick:x,className:l()("p-1 cursor-pointer",v),children:Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)(s.a,{children:r}),Object(d.jsx)(a.a,{name:O?"expand_less":"expand_more"})]}),!O&&b&&Object(d.jsx)(s.a,{className:"mt-2",children:b})]})}),O&&j]})}},928:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(927),i=n(5),r=n(895);function l(e,t,n){var l=Object(i.l)(e,t,n);return Object(r.a)(l,c.a)}},934:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(951),i=n.n(c);function r(e){return i()(1e3*(e||0),{leading:!0})}},935:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return j}));var c=n(897),i=n.n(c),r=n(192),l=n.n(r),a=n(940),o=n.n(a),s=n(952),u=n.n(s),d=function(e){return e<10?"0".concat(e):e};function b(e){return l()(e,(function(e,t){var n,c,r,l,a,o,s;return{lang:e.lang,name:i()(["".concat(d(t+1),"."),(null===(n=e.type)||void 0===n?void 0:n.title)&&(null===(c=e.author)||void 0===c?void 0:c.title)?"".concat(null===(r=e.type)||void 0===r?void 0:r.title,"."):null===(l=e.type)||void 0===l?void 0:l.title,null===(a=e.author)||void 0===a?void 0:a.title,(null===(o=e.type)||void 0===o?void 0:o.title)||(null===(s=e.author)||void 0===s?void 0:s.title)?"(".concat(u()(e.lang),")"):u()(e.lang),"aac"!==e.codec&&u()(e.codec)]).join(" ")}}))}function v(e,t){return o()(l()(e,(function(e){var n="string"===typeof e.url?e.url:e.url[t]||e.url.http;return{src:n,name:e.quality,type:n.includes(".m3u8")?"application/x-mpegURL":"video/mp4"}})),(function(e){var t=e.name;return parseInt(t)}),"desc")}function j(e){return l()(e,(function(e,t){return{src:e.url,lang:e.lang,name:"".concat(u()(e.lang)," #").concat(d(t+1))}}))}},936:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var c=n(11),i=n(56),r=n(2),l=n(255),a=n.n(l),o=n(51),s=n.n(o),u=n(890),d=n(938),b=n.n(d),v=n(3),j=b()({enterTo:"default-element",defaultElement:".spottable",selector:".spottable",overflow:!0,preserveId:!0},(function(e){return Object(v.jsx)("div",Object(c.a)({},e))})),f=n(256),m=n(31);var O=function(e,t,n){var c=Object(m.h)(),i=Object(r.useCallback)((function(){return c.location.hash.includes(e)}),[e,c]),l=Object(r.useCallback)((function(){i()||c.push({hash:e,state:c.location.state,search:c.location.search,pathname:c.location.pathname}),null===n||void 0===n||n()}),[e,i,c,n]),a=Object(r.useCallback)((function(){i()&&c.goBack(),null===t||void 0===t||t()}),[i,c,t]);return Object(r.useEffect)((function(){var e=setTimeout((function(){i()?l():a()}),100);return function(){clearTimeout(e)}}),[i,l,a,c.location.hash]),Object(r.useMemo)((function(){return{open:l,close:a}}),[l,a])},h=["visible","onClose","children","className","closeButton"],x=function(e){var t=e.visible,n=e.onClose,l=e.children,o=e.className,d=e.closeButton,b=void 0===d?"Blue":d,m=Object(i.a)(e,h),x=Object(r.useMemo)((function(){return a.a.add({})}),[]),p=Object(r.useCallback)((function(){n()}),[n]),g=Object(r.useCallback)((function(){if(t)return p(),!1}),[t,p]),y=Object(r.useCallback)((function(){if(!a.a.focus(x)){var e=a.a.getCurrent();e&&e.blur(),a.a.setActiveContainer(x),setTimeout((function(){a.a.setPointerMode(!1),a.a.focus(x)}),500)}}),[x]);Object(f.a)("Back",g),Object(f.a)(b,g);var N=O("popup",g);return Object(r.useEffect)((function(){t?(y(),N.open()):N.close()}),[t,y,N]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:s()("fixed z-999 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50",{hidden:!t}),onClick:p}),Object(v.jsx)(j,Object(c.a)(Object(c.a)({},m),{},{spotlightId:x,spotlightRestrict:"self-only",spotlightDisabled:!t,className:s()("fixed z-999 bottom-0 left-0 right-0 p-4 bg-black ring",{hidden:!t},o),children:Object(v.jsx)(u.b,{className:"max-h-screen",children:l})}))]})}}}]);
//# sourceMappingURL=10.7b663a07.chunk.js.map