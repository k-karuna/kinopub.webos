(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[20],{1089:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n(11),r=n(2),a=n(31),u=n(944),o=n(889),i=n(935),l=n(3),s=function(){var e=Object(a.h)(),t=(Object(a.i)().state||{}).channel,n=Object(r.useMemo)((function(){return{title:t.title,poster:t.logos.m,sources:Object(i.b)([{url:t.stream}])}}),[t]),s=Object(r.useCallback)((function(){e.goBack()}),[e]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{title:"\u041a\u0430\u043d\u0430\u043b: ".concat(t.title)}),Object(l.jsx)(u.a,Object(c.a)(Object(c.a)({},n),{},{onEnded:s}))]})}},889:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(11),r=n(894),a=n(3),u=function(e){return Object(a.jsx)(r.a,Object(c.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},890:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return O}));var c=n(11),r=n(56),a=n(2),u=n(51),o=n.n(u),i=n(73),l=n(105),s=function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},r=t.onEnterViewport,u=t.onLeaveViewport,o=Object(a.useState)(),s=Object(i.a)(o,2),b=s[1],d=Object(a.useRef)(null),f=Object(a.useRef)(!1),j=Object(a.useRef)(!1),O=Object(a.useRef)(0),v=Object(a.useRef)(0),m=Object(a.useCallback)((function(){if(e.current&&d.current){var t=Object(l.findDOMNode)(e.current);t&&d.current.observe(t)}}),[e,d]),p=Object(a.useCallback)((function(){if(e.current&&d.current){var t=Object(l.findDOMNode)(e.current);t&&(d.current.unobserve(t),d.current.disconnect(),d.current=null)}}),[e,d]),k=Object(a.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,a=t.intersectionRatio,o="undefined"!==typeof n?n:a>0;if(!j.current&&o)return j.current=!0,null===r||void 0===r||r(),O.current+=1,f.current=o,void b(o);j.current&&!o&&(j.current=!1,null===u||void 0===u||u(),c.disconnectOnLeave&&d.current&&d.current.disconnect(),v.current+=1,f.current=o,b(o))}),[d,c.disconnectOnLeave,r,u]),h=Object(a.useCallback)((function(){d.current||(d.current=new IntersectionObserver(k,n))}),[d,n,k]);return Object(a.useEffect)((function(){return h(),m(),function(){p()}}),[h,m,p]),{inViewport:f.current,enterCount:O.current,leaveCount:v.current}},b=n(1076);var d=function(e){var t=Object(b.a)();return Object(a.useMemo)((function(){return"".concat(e,"-").concat(t)}),[e,t])},f=n(3),j=["children","className","onScrollToEnd"],O=Object(a.createContext)({}),v=function(e){var t=e.children,n=e.className,u=e.onScrollToEnd,i=Object(r.a)(e,j),l=Object(a.useRef)(null),b=d("scrollable"),v=Object(a.useMemo)((function(){return{id:b}}),[b]);return s(l,{onEnterViewport:u}),Object(f.jsxs)("div",Object(c.a)(Object(c.a)({className:o()("overflow-y-auto h-full",n)},i),{},{id:b,children:[Object(f.jsx)(O.Provider,{value:v,children:t}),u&&Object(f.jsx)("div",{className:"h-40",ref:l})]}))}},898:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(11),r=n(56),a=n(2),u=n(51),o=n.n(u),i=n(253),l=n(250),s=n(3),b=["icon","iconOnly","children","autoFocus","className"],d=function(e){var t=e.icon,n=e.iconOnly,u=e.children,d=e.autoFocus,f=e.className,j=Object(r.a)(e,b),O=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;return d&&(e=requestAnimationFrame((function(){var e,t;null===(e=O.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[O,d]),Object(s.jsx)(l.a,Object(c.a)(Object(c.a)({},j),{},{ref:O,className:o()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",f),role:"button",children:Object(s.jsxs)("div",{className:"flex items-center",children:[t&&Object(s.jsx)(i.a,{className:o()({"mr-2":!n}),name:t}),!n&&u]})}))}},901:function(e,t,n){"use strict";var c=n(73),r=n(2);t.a=function(e){var t=Object(r.useState)(e),n=Object(c.a)(t,2),a=n[0],u=n[1];return Object(r.useEffect)((function(){u(e)}),[e]),[a,u]}},912:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(11),r=n(56),a=n(2),u=n(51),o=n.n(u),i=n(250),l=n(260),s=n(3),b=["defaultChecked","checked","onChange","className","children"],d=function(e){var t=e.defaultChecked,n=e.checked,u=e.onChange,d=e.className,f=e.children,j=Object(r.a)(e,b),O=Object(a.useRef)(null),v=Object(a.useCallback)((function(e){null===u||void 0===u||u(e.target.checked,e)}),[u]),m=Object(a.useCallback)((function(e){var t;Object(l.a)(e,"Enter")&&(null===(t=O.current)||void 0===t||t.click())}),[]);return Object(s.jsx)(i.a,{component:"label",className:o()("text-gray-200 p-2",d),onKeyPress:m,role:"button",children:Object(s.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(s.jsx)("input",Object(c.a)(Object(c.a)({type:"checkbox"},j),{},{ref:O,className:"inline-block w-4 h-4",defaultChecked:t,checked:n,onChange:v})),Object(s.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:f})]})})}},924:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(73),r=n(2),a=n(51),u=n.n(a),o=n(253),i=n(250),l=n(252),s=n(901),b=n(3),d=function(e){var t=e.open,n=e.onToggle,a=e.title,d=e.subtitle,f=e.className,j=e.children,O=Object(s.a)(t),v=Object(c.a)(O,2),m=v[0],p=v[1],k=Object(r.useCallback)((function(){var e=!m;null===n||void 0===n||n(e),p(e)}),[m,p,n]);return Object(b.jsxs)("div",{className:"flex flex-col w-full",children:[Object(b.jsx)(i.a,{onClick:k,className:u()("p-1 cursor-pointer",f),children:Object(b.jsxs)("div",{className:"flex flex-col",children:[Object(b.jsxs)("div",{className:"flex items-center",children:[Object(b.jsx)(l.a,{children:a}),Object(b.jsx)(o.a,{name:m?"expand_less":"expand_more"})]}),!m&&d&&Object(b.jsx)(l.a,{className:"mt-2",children:d})]})}),m&&j]})}},934:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(951),r=n.n(c);function a(e){return r()(1e3*(e||0),{leading:!0})}},935:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return j}));var c=n(897),r=n.n(c),a=n(192),u=n.n(a),o=n(940),i=n.n(o),l=n(952),s=n.n(l),b=function(e){return e<10?"0".concat(e):e};function d(e){return u()(e,(function(e,t){var n,c,a,u,o,i,l;return{lang:e.lang,name:r()(["".concat(b(t+1),"."),(null===(n=e.type)||void 0===n?void 0:n.title)&&(null===(c=e.author)||void 0===c?void 0:c.title)?"".concat(null===(a=e.type)||void 0===a?void 0:a.title,"."):null===(u=e.type)||void 0===u?void 0:u.title,null===(o=e.author)||void 0===o?void 0:o.title,(null===(i=e.type)||void 0===i?void 0:i.title)||(null===(l=e.author)||void 0===l?void 0:l.title)?"(".concat(s()(e.lang),")"):s()(e.lang),"aac"!==e.codec&&s()(e.codec)]).join(" ")}}))}function f(e,t){return i()(u()(e,(function(e){var n="string"===typeof e.url?e.url:e.url[t]||e.url.http;return{src:n,name:e.quality,type:n.includes(".m3u8")?"application/x-mpegURL":"video/mp4"}})),(function(e){var t=e.name;return parseInt(t)}),"desc")}function j(e){return u()(e,(function(e,t){return{src:e.url,lang:e.lang,name:"".concat(s()(e.lang)," #").concat(b(t+1))}}))}},936:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var c=n(11),r=n(56),a=n(2),u=n(255),o=n.n(u),i=n(51),l=n.n(i),s=n(890),b=n(938),d=n.n(b),f=n(3),j=d()({enterTo:"default-element",defaultElement:".spottable",selector:".spottable",overflow:!0,preserveId:!0},(function(e){return Object(f.jsx)("div",Object(c.a)({},e))})),O=n(256),v=n(31);var m=function(e,t,n){var c=Object(v.h)(),r=Object(a.useCallback)((function(){return c.location.hash.includes(e)}),[e,c]),u=Object(a.useCallback)((function(){r()||c.push({hash:e,state:c.location.state,search:c.location.search,pathname:c.location.pathname}),null===n||void 0===n||n()}),[e,r,c,n]),o=Object(a.useCallback)((function(){r()&&c.goBack(),null===t||void 0===t||t()}),[r,c,t]);return Object(a.useEffect)((function(){var e=setTimeout((function(){r()?u():o()}),100);return function(){clearTimeout(e)}}),[r,u,o,c.location.hash]),Object(a.useMemo)((function(){return{open:u,close:o}}),[u,o])},p=["visible","onClose","children","className","closeButton"],k=function(e){var t=e.visible,n=e.onClose,u=e.children,i=e.className,b=e.closeButton,d=void 0===b?"Blue":b,v=Object(r.a)(e,p),k=Object(a.useMemo)((function(){return o.a.add({})}),[]),h=Object(a.useCallback)((function(){n()}),[n]),g=Object(a.useCallback)((function(){if(t)return h(),!1}),[t,h]),T=Object(a.useCallback)((function(){if(!o.a.focus(k)){var e=o.a.getCurrent();e&&e.blur(),o.a.setActiveContainer(k),setTimeout((function(){o.a.setPointerMode(!1),o.a.focus(k)}),500)}}),[k]);Object(O.a)("Back",g),Object(O.a)(d,g);var C=m("popup",g);return Object(a.useEffect)((function(){t?(T(),C.open()):C.close()}),[t,T,C]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:l()("fixed z-999 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50",{hidden:!t}),onClick:h}),Object(f.jsx)(j,Object(c.a)(Object(c.a)({},v),{},{spotlightId:k,spotlightRestrict:"self-only",spotlightDisabled:!t,className:l()("fixed z-999 bottom-0 left-0 right-0 p-4 bg-black ring",{hidden:!t},i),children:Object(f.jsx)(s.b,{className:"max-h-screen",children:u})}))]})}},937:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var c=n(73),r=n(2),a=n(192),u=n.n(a),o=n(924),i=n(11),l=n(912),s=n(3),b=function(e){return Object(s.jsx)(l.a,Object(i.a)(Object(i.a)({},e),{},{type:"radio"}))},d=n(901),f=function(e){var t=e.label,n=e.options,a=e.defaultValue,i=e.value,l=e.onChange,f=e.closeOnChange,j=e.className,O=e.splitIn,v=Object(r.useState)(!1),m=Object(c.a)(v,2),p=m[0],k=m[1],h=Object(d.a)(i||a),g=Object(c.a)(h,2),T=g[0],C=g[1],y=Object(r.useMemo)((function(){return Array.isArray(n)?n.map((function(e,t){return"string"===typeof e?{title:e,value:t}:e})):[]}),[n]),x=Object(r.useMemo)((function(){return y.find((function(e){return e.value===T}))}),[y,T]),N=Object(r.useCallback)((function(e){C(e),null===l||void 0===l||l(e),f&&k(!1)}),[C,l,f]),S=Object(r.useCallback)((function(e){return function(t){t&&N(e.value)}}),[N]);return Object(s.jsx)(o.a,{open:p,onToggle:k,title:t,subtitle:null===x||void 0===x?void 0:x.title,className:j,children:Object(s.jsx)("div",{className:"flex flex-wrap",children:u()(y,(function(e){return Object(s.jsx)(b,{className:O?"w-1/".concat(O):"w-full",checked:e.value===T,onChange:S(e),children:e.title},e.value)}))})})}},944:function(e,t,n){"use strict";n.d(t,"a",(function(){return q}));var c=n(11),r=n(30),a=n.n(r),u=n(52),o=n(73),i=n(56),l=n(2),s=n.n(l),b=n(954),d=n.n(b),f=n(898),j=n(94),O=n(51),v=n.n(O),m=n(958),p=n.n(m),k=n(950),h=n.n(k),g=n(965),T=n.n(g),C=n(911),y=n.n(C),x=n(259),N=n(90),S=n(91),E=function(){function e(t){Object(N.a)(this,e),this.resource=void 0,this.objectURL=void 0,this.resource=t}return Object(S.a)(e,[{key:"blobToBuffer",value:function(){var e=this;return new Promise((function(t,n){var c=new FileReader;c.addEventListener("loadend",(function(e){var n,c=null===(n=e.target)||void 0===n?void 0:n.result;t(new Uint8Array(c))})),c.addEventListener("error",(function(){return n("Error while reading the Blob object")})),c.readAsArrayBuffer(e.resource)}))}},{key:"getURL",value:function(){var t=this;return new Promise((function(n,c){return t.resource instanceof Blob?FileReader?TextDecoder?e.blobToString(t.resource,(function(c){var r="WEBVTT FILE\r\n\r\n".concat(e.toVTT(c)),a=new Blob([r],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(a),n(t.objectURL)}),(function(){t.blobToBuffer().then((function(c){var r=new TextDecoder("utf-8").decode(c),a="WEBVTT FILE\r\n\r\n".concat(e.toVTT(r)),u=new Blob([a],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(u),n(t.objectURL)}))})):c("No TextDecoder constructor found"):c("No FileReader constructor found"):c("Expecting resource to be a Blob but something else found.")}))}},{key:"release",value:function(){URL.createObjectURL(this.objectURL)}}],[{key:"blobToString",value:function(e,t,n){var c=new FileReader;c.addEventListener("loadend",(function(e){var n,c=null===(n=e.target)||void 0===n?void 0:n.result;t(c)})),c.addEventListener("error",(function(){return n()})),c.readAsText(e)}},{key:"toVTT",value:function(e){return e.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}},{key:"toTypedArray",value:function(e){var t=[];return e.split("").forEach((function(e){t.push(parseInt("".concat(e.charCodeAt(0)),16))})),Uint8Array.from(t)}}]),e}();function w(){return(w=Object(u.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.blob();case 4:return n=e.sent,c=new E(n),e.abrupt("return",c.getURL());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=n(3),L=["autoPlay","audioTracks","sourceTracks","subtitleTracks","streamingType","isSettingsOpen","onUpdate","className","mediaComponent"];function A(e){var t=e.autoPlay,n=e.audioTracks,c=e.sourceTracks,r=e.subtitleTracks,a=e.streamingType,u=e.isSettingsOpen,i=Object(l.useRef)(null),s=Object(l.useRef)(null),b=Object(l.useRef)(0),d=Object(l.useRef)(!1),f=Object(x.a)("is_hls.js_active"),j=Object(o.a)(f,1)[0],O=Object(l.useState)(null===n||void 0===n?void 0:n[0]),v=Object(o.a)(O,2),m=v[0],k=v[1],g=Object(l.useState)(null===c||void 0===c?void 0:c[0]),C=Object(o.a)(g,2),N=C[0],S=C[1],E=Object(l.useState)(null),R=Object(o.a)(E,2),L=R[0],A=R[1],P=Object(l.useCallback)((function(){return"hls2"===a?[]:n}),[n,a]),M=Object(l.useCallback)((function(){return null===m||void 0===m?void 0:m.name}),[m]),U=Object(l.useCallback)((function(e){var t=null===n||void 0===n?void 0:n.find((function(t){return t.name===e}));t&&k(t)}),[n]),I=Object(l.useCallback)((function(){return y()(c,"src")}),[c]),B=Object(l.useCallback)((function(){return null===N||void 0===N?void 0:N.name}),[N]),V=Object(l.useCallback)((function(e){var t=null===c||void 0===c?void 0:c.find((function(t){return t.name===e}));t&&S(t)}),[c]),F=Object(l.useCallback)((function(){return r}),[r]),D=Object(l.useCallback)((function(){return null===L||void 0===L?void 0:L.name}),[L]),_=Object(l.useCallback)((function(e){var t=null===r||void 0===r?void 0:r.find((function(t){return t.name===e}));A(t||null)}),[r]),W=Object(l.useMemo)((function(){var e;return null!==(e=null===n||void 0===n?void 0:n.findIndex((function(e){return e.name===m.name})))&&void 0!==e?e:0}),[n,m]),$=Object(l.useMemo)((function(){return"hls"===a?null===N||void 0===N?void 0:N.src.replace(/master-v1a\d/,"master-v1a".concat(W+1)):null===N||void 0===N?void 0:N.src}),[a,W,null===N||void 0===N?void 0:N.src]),z=Object(l.useCallback)((function(){if(i.current){for(i.current.removeEventListener("canplay",z);i.current.firstChild;)i.current.lastChild.track.mode="disabled",i.current.removeChild(i.current.lastChild);if(s.current){var e=h()(s.current.audioTracks,(function(e){return e.name===(null===m||void 0===m?void 0:m.name)}));e&&(s.current.audioTrack=e.id)}else{var n;(null===(n=i.current.audioTracks)||void 0===n?void 0:n[W])&&T()(i.current.audioTracks,(function(e,t){e.enabled=t===W}))}if(b.current>0?(i.current.currentTime=b.current,d.current?i.current.pause():i.current.play()):t&&i.current.play(),L){var c=function(e){if(i.current){var t=document.createElement("track");i.current.appendChild(t),t.src=e,t.kind="captions",t.id=L.name,t.label=L.name,t.srclang=L.lang,t.track.mode="showing"}};L.src.endsWith(".srt")?function(e){return w.apply(this,arguments)}(L.src).then(c):c(L.src)}}}),[t,W,null===m||void 0===m?void 0:m.name,L]);return Object(l.useEffect)((function(){if(i.current&&$){if(!1!==j&&$.includes(".m3u8")&&p.a.isSupported()){var e=s.current=new p.a({enableWebVTT:!1,enableCEA708Captions:!1});e.attachMedia(i.current),e.on(p.a.Events.MEDIA_ATTACHED,(function(){e.loadSource($)}))}else i.current.src=$;i.current.addEventListener("canplay",z)}return function(){i.current&&(i.current.currentTime>0&&(b.current=i.current.currentTime),i.current.removeEventListener("canplay",z)),s.current&&(s.current.destroy(),s.current=null)}}),[$,i,b,z,j,a,m,N,L,W,n]),Object(l.useEffect)((function(){d.current=Boolean(u)}),[u]),Object(l.useMemo)((function(){return{videoRef:i,getAudioTracks:P,getAudioTrack:M,setAudioTrack:U,getSourceTracks:I,getSourceTrack:B,setSourceTrack:V,getSubtitleTracks:F,getSubtitleTrack:D,setSubtitleTrack:_}}),[i,P,M,U,I,B,V,F,D,_])}var P=["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],M=s.a.forwardRef((function(e,t){var n=e.autoPlay,r=e.audioTracks,o=e.sourceTracks,s=e.subtitleTracks,b=e.streamingType,d=e.isSettingsOpen,f=e.onUpdate,O=e.className,m=(e.mediaComponent,Object(i.a)(e,L)),p=Object(l.useCallback)((function(){null===f||void 0===f||f()}),[f]),k=Object(l.useMemo)((function(){return P.reduce((function(e,t){return Object(c.a)(Object(c.a)({},e),{},Object(j.a)({},t,(function(){var e;p();for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];null===(e=m[t])||void 0===e||e.call.apply(e,[m].concat(c))})))}),{})}),[m,p]),h=function(e,t){var n=A(t),c=n.videoRef,r=Object(l.useCallback)((function(){return c.current?c.current.currentTime:0}),[c]),o=Object(l.useCallback)((function(e){c.current&&(c.current.currentTime=e)}),[c]),i=Object(l.useCallback)((function(){return c.current?c.current.playbackRate:1}),[c]),s=Object(l.useCallback)((function(e){c.current&&(c.current.playbackRate=e)}),[c]),b=Object(l.useCallback)((function(){return!!c.current&&c.current.paused}),[c]),d=Object(l.useCallback)((function(){return c.current?c.current.duration:0}),[c]),f=Object(l.useCallback)((function(){return!!c.current&&c.current.networkState===c.current.NETWORK_NO_SOURCE}),[c]),j=Object(l.useCallback)((function(){return!c.current||c.current.readyState<c.current.HAVE_ENOUGH_DATA}),[c]),O=Object(l.useCallback)((function(){return c.current?c.current.buffered.length&&c.current.buffered.end(c.current.buffered.length-1)/c.current.duration:0}),[c]),v=Object(l.useCallback)((function(){return c.current?c.current.currentTime/c.current.duration:0}),[c]),m=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=c.current)||void 0===t?void 0:t.play();case 2:case"end":return e.stop()}}),e)}))),[c]),p=Object(l.useCallback)((function(){var e;null===(e=c.current)||void 0===e||e.pause()}),[c]),k=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b()){e.next=5;break}return e.next=3,m();case 3:e.next=6;break;case 5:p();case 6:case"end":return e.stop()}}),e)}))),[m,p,b]),h=Object(l.useCallback)((function(){var e;null===(e=c.current)||void 0===e||e.load()}),[c]),g=Object(l.useMemo)((function(){return{play:m,pause:p,playPause:k,load:h,get currentTime(){return r()},set currentTime(e){o(e)},get audioTracks(){return n.getAudioTracks()},get audioTrack(){return n.getAudioTrack()},set audioTrack(e){n.setAudioTrack(e)},get sourceTracks(){return n.getSourceTracks()},get sourceTrack(){return n.getSourceTrack()},set sourceTrack(e){n.setSourceTrack(e)},get subtitleTracks(){return n.getSubtitleTracks()},get subtitleTrack(){return n.getSubtitleTrack()},set subtitleTrack(e){n.setSubtitleTrack(e)},get playbackRate(){return i()},set playbackRate(e){s(e)},get paused(){return b()},get duration(){return d()},get error(){return f()},get loading(){return j()},get proportionLoaded(){return O()},get proportionPlayed(){return v()}}}),[n,m,p,k,h,r,o,i,s,b,d,f,j,O,v]);return Object(l.useImperativeHandle)(e,(function(){return g}),[g]),Object(l.useMemo)((function(){return{api:g,player:n}}),[g,n])}(t,{autoPlay:n,audioTracks:r,sourceTracks:o,subtitleTracks:s,streamingType:b,isSettingsOpen:d}).player;return Object(R.jsx)("video",Object(c.a)(Object(c.a)(Object(c.a)({},m),k),{},{autoPlay:!1,className:v()("w-screen h-screen",O),ref:h.videoRef}))})),U=n(252),I=n(256),B=n(104),V=n(192),F=n.n(V),D=n(936),_=n(937),W="NONE",$=function(e){var t=e.visible,n=e.onClose,c=e.player,r=Object(l.useState)(t),a=Object(o.a)(r,2),u=a[0],i=a[1],s=Object(l.useState)([]),b=Object(o.a)(s,2),d=b[0],f=b[1],j=Object(l.useState)(null),O=Object(o.a)(j,2),v=O[0],m=O[1],p=Object(l.useState)([]),k=Object(o.a)(p,2),h=k[0],g=k[1],T=Object(l.useState)(null),C=Object(o.a)(T,2),y=C[0],x=C[1],N=Object(l.useState)([]),S=Object(o.a)(N,2),E=S[0],w=S[1],L=Object(l.useState)(W),A=Object(o.a)(L,2),P=A[0],M=A[1],U=Object(l.useMemo)((function(){return F()(d,(function(e){return{title:e.name,value:e.name}}))}),[d]),I=Object(l.useMemo)((function(){return F()(h,(function(e){return{title:e.name,value:e.name}}))}),[h]),V=Object(l.useMemo)((function(){return[{title:"\u041d\u0435\u0442",value:W}].concat(Object(B.a)(F()(E,(function(e){return{title:e.name,value:e.name}}))))}),[E]),$=Object(l.useCallback)((function(e,t){c.current&&(c.current.getVideoNode()[e]=t)}),[c]),z=Object(l.useCallback)((function(e){m(e),$("audioTrack",e)}),[$]),H=Object(l.useCallback)((function(e){x(e),$("sourceTrack",e)}),[$]),K=Object(l.useCallback)((function(e){M(e),$("subtitleTrack",e)}),[$]),q=Object(l.useCallback)((function(){n()}),[n]);return Object(l.useEffect)((function(){if(t&&c.current){var e=c.current.getVideoNode(),n=e.audioTracks,r=e.audioTrack,a=e.sourceTracks,u=e.sourceTrack,o=e.subtitleTracks,i=e.subtitleTrack;(null===n||void 0===n?void 0:n.length)>1||(null===a||void 0===a?void 0:a.length)>1||(null===o||void 0===o?void 0:o.length)>0?(f(n),m(r),g(a),x(u),w(o),M(i||W)):q()}}),[t,c,q]),Object(l.useEffect)((function(){var e;return t?e=setTimeout((function(){i(!0)}),100):i(!1),function(){clearTimeout(e)}}),[t]),Object(R.jsxs)(D.a,{visible:u,onClose:q,children:[U.length>1&&Object(R.jsx)(_.a,{className:"my-4",label:"\u0417\u0432\u0443\u043a",value:v,options:U,onChange:z,splitIn:2,closeOnChange:!0}),I.length>1&&Object(R.jsx)(_.a,{className:"my-4",label:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e",value:y,options:I,onChange:H,splitIn:5,closeOnChange:!0}),V.length>1&&Object(R.jsx)(_.a,{className:"my-4",label:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b",value:P,options:V,onChange:K,splitIn:5,closeOnChange:!0})]})},z=n(934),H=function(e){var t=e.startTime,n=e.startInDelay,c=void 0===n?5:n,r=e.player,a=Object(l.useState)(!0),u=Object(o.a)(a,2),i=u[0],s=u[1],b=Object(l.useState)(c),d=Object(o.a)(b,2),j=d[0],O=d[1],v=Object(l.useMemo)((function(){return Object(z.a)(t)}),[t]),m=Object(l.useCallback)((function(){r.current&&(s(!1),r.current.getVideoNode().currentTime=t)}),[t,r]),p=Object(l.useCallback)((function(){s(!1)}),[]);return Object(l.useEffect)((function(){var e;return i&&(e=setInterval((function(){O((function(e){var t=e-1;return t<=0&&m(),t}))}),1e3)),function(){clearInterval(e)}}),[i,m]),t&&i?Object(R.jsxs)("div",{className:"flex justify-center absolute w-full z-101 bottom-32",children:[Object(R.jsxs)(f.a,{onClick:m,children:["\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 ",v," \u0447\u0435\u0440\u0435\u0437 ",j]}),Object(R.jsx)(f.a,{autoFocus:!0,onClick:p,children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 \u043d\u0430\u0447\u0430\u043b\u0430"})]}):null},K=["title","description","poster","audios","sources","subtitles","startTime","timeSyncInterval","streamingType","onPlay","onPause","onEnded","onTimeSync"],q=function(e){var t=e.title,n=e.description,r=e.poster,s=e.audios,b=e.sources,j=e.subtitles,O=e.startTime,v=e.timeSyncInterval,m=void 0===v?30:v,p=e.streamingType,k=e.onPlay,h=e.onPause,g=e.onEnded,T=e.onTimeSync,C=Object(i.a)(e,K),y=Object(l.useRef)(),x=Object(l.useState)(!0),N=Object(o.a)(x,2),S=N[0],E=N[1],w=Object(l.useState)(!1),L=Object(o.a)(w,2),A=L[0],P=L[1],B=Object(l.useState)(!1),V=Object(o.a)(B,2),F=V[0],D=V[1],_=Object(l.useCallback)((function(){E(!1),D(!1),null===k||void 0===k||k()}),[k]),W=Object(l.useCallback)((function(e){E(!0),null===h||void 0===h||h(e.currentTime)}),[h]),z=Object(l.useCallback)((function(e){null===g||void 0===g||g(e.target.currentTime)}),[g]),q=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y.current||!T){e.next=5;break}return t=y.current.getVideoNode(),n=t.currentTime,e.next=5,T(n);case 5:case"end":return e.stop()}}),e)}))),[T,y]),J=Object(l.useCallback)((function(){P(!0)}),[]),G=Object(l.useCallback)((function(){y.current&&(D(!0),y.current.getVideoNode().pause())}),[y]),Q=Object(l.useCallback)((function(){y.current&&(D(!1),y.current.getVideoNode().play())}),[]),X=Object(l.useCallback)((function(){y.current&&y.current.getVideoNode().pause()}),[y]);return Object(l.useEffect)((function(){var e;return S&&(e=setTimeout((function(){E(!1)}),5e3)),function(){e&&clearTimeout(e)}}),[S]),Object(l.useEffect)((function(){var e;return T&&(e=setInterval(q,1e3*m)),function(){e&&clearInterval(e)}}),[m,T,q]),Object(I.a)("Back",q),Object(I.a)("Blue",G),Object(I.a)("Play",Q),Object(I.a)("Pause",X),Object(I.a)("ArrowUp",G),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)($,{visible:F,onClose:Q,player:y}),S&&Object(R.jsx)(U.a,{className:"absolute z-10 top-0 p-4",children:t}),S&&Object(R.jsx)(f.a,{className:"absolute z-101 bottom-8 right-10 text-blue-600",icon:"settings",iconOnly:!0,onClick:G}),A&&O>0&&Object(R.jsx)(H,{startTime:O,player:y}),Object(R.jsx)(d.a,Object(c.a)(Object(c.a)({},C),{},{ref:y,locale:"ru",poster:r,title:n,jumpBy:15,onPlay:_,onPause:W,onEnded:z,onLoadedMetadata:J,streamingType:p,isSettingsOpen:F,audioTracks:s,sourceTracks:b,subtitleTracks:j,videoComponent:Object(R.jsx)(M,{})}))]})}}}]);
//# sourceMappingURL=20.3de0ec37.chunk.js.map