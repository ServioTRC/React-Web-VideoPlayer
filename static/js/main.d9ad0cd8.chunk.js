(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(n,e,t){n.exports=t(60)},60:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),i=t(15),r=t.n(i),l=t(9),c=t(39),d=t(1),s=t(34),u=t.n(s),p=t(2);function f(){var n=Object(p.a)(["\n  width: 100%;\n  padding-bottom: 56.25%;\n  position: relative;\n"]);return f=function(){return n},n}var m=d.c.div(f());function b(){var n=Object(p.a)(["\n  position: relative;\n  -webkit-box-flex: 2;\n  -ms-flex: 2 0 900px;\n  flex: 2 0 900px;\n\n  @media screen and (max-width: 1400px) {\n    width: 100%;\n    display: block;\n  }\n"]);return b=function(){return n},n}var h=d.c.div(b()),v=function(n){var e=n.active,t=n.autoplay,a=n.endCallback,i=n.progressCallback;return o.a.createElement(h,null,o.a.createElement(m,null,o.a.createElement(u.a,{width:"100%",height:"100%",style:{position:"absolute",top:"0"},playing:t,controls:!0,url:e.video,onEnded:a,onProgress:i})))};function x(){var n=Object(p.a)(['\n  background: #696969;\n  font-family: "Hind", sans-serif;\n  font-weight: 800;\n  font-size: 1.6em;\n  color: #fff;\n  padding: 0 20px;\n  margin: 0 0 20px 0;\n  min-height: 80px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n']);return x=function(){return n},n}var g=d.c.div(x());function w(){var n=Object(p.a)(["\n  background: #565656;\n  font-size: 0.8em;\n  padding: 2px 5px;\n  height: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 5px;\n"]);return w=function(){return n},n}var y=d.c.div(w()),k=function(n){var e=n.active,t=n.total;return o.a.createElement(g,null,o.a.createElement("p",null,e.title),o.a.createElement(y,null,e.num," / ",t))};function E(){var n=Object(p.a)(['\n  font-family: "Hind", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: none;\n  border: ',";\n  font-size: 1.6em;\n  color: ",";\n  min-height: 50px;\n  padding: 10px 20px;\n  margin: 0 0 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: ",";\n  cursor: pointer;\n  position: relative;\n\n  ::before {\n    display: ",';\n    content: "";\n    width: 10px;\n    min-height: 10px;\n    background: #409f4e;\n    border-radius: 50px;\n    position: absolute;\n    left: 0;\n    top: 19px;\n  }\n\n  .wbn-player__video-nr {\n    flex-grow: 1; /* default 0 */\n    max-width: 30px;\n    padding-right: 20px;\n    border-right: 2px solid #565656;\n  }\n\n  .wbn-player__video-name,\n  .wbn-player__video-name a {\n    flex-grow: 10; /* default 0 */\n    padding: 0 0 0 10px;\n    color: ',";\n    text-align: left;\n    text-decoration: none;\n    display: block;\n  }\n\n  .wbn-player__video-time {\n    background: #565656;\n    min-width: 45px;\n    color: #fff;\n    font-size: 0.8em;\n    padding: 0px 5px;\n    height: 20px;\n    text-align: center;\n    border-radius: 5px;\n    margin: 0 0 0 5px;\n  }\n\n  .wbn-player__video-download {\n    flex-grow: 1; /* default 0 */\n    color: ",';\n    margin: 0 0 0 20px;\n    max-width: 30px;\n    padding: 0 20px;\n    border-left: 2px solid #565656;\n    font-family: "fontello";\n    font-style: normal;\n    font-weight: normal;\n  }\n\n  .wbn-player__video-download a {\n    color: ',";\n  }\n\n  .active {\n    opacity: 0.1;\n  }\n"]);return E=function(){return n},n}var O=d.c.div(E(),function(n){return n.active?"2px dotted #696969":"none"},function(n){return n.theme.color},function(n){return n.active?"5px":"0"},function(n){return n.active||!n.played?"none":"block"},function(n){return n.theme.color},function(n){return n.played?"#fff":n.theme.color},function(n){return n.played&&!n.active?"#fff":n.theme.color}),j=function(n){var e=n.video,t=n.active,a=n.played;return o.a.createElement(O,{active:t,played:a},o.a.createElement("div",{className:"wbn-player__video-nr"},e.num),o.a.createElement("div",{className:"wbn-player__video-name"},e.title),o.a.createElement("div",{className:"wbn-player__video-time"},e.duration))},_=t(16),M=function(n){return function(e){var t=Object(l.a)({},e,{video:Object(l.a)({},e.video,{title:o.a.createElement(_.b,{to:{pathname:"/".concat(e.video.id),autoplay:!0}},e.video.title)})});return o.a.createElement(n,t)}};function I(){var n=Object(p.a)(["\n  padding: 0 20px 0 20px;\n  overflow-y: auto;\n  height: 28vw;\n  max-height: 500px;\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 5px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #888;\n    border-radius: 2px;\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n"]);return I=function(){return n},n}var V=d.c.div(I()),N=M(j),S=function(n){var e=n.videos,t=n.active;return o.a.createElement(V,null,e.map(function(n){return o.a.createElement(N,{key:n.id,video:n,active:n.id===t.id,played:n.played})}))};function C(){var n=Object(p.a)(['\n  font-family: "Hind", sans-serif;\n  font-weight: 800;\n  font-size: 1.6em;\n  color: ',';\n  padding: 0;\n  margin: 20px;\n\n  /* CSS taken from https://www.w3schools.com/howto/howto_css_switch.asp */\n  /* The switch - the box around the slider */\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 40px;\n    height: 24px;\n  }\n\n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n\n  .slider:before {\n    position: absolute;\n    content: "";\n    height: 16px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n\n  input:checked + .slider {\n    background-color: #3d5138;\n  }\n\n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196f3;\n  }\n\n  input:checked + .slider:before {\n    -webkit-transform: translateX(16px);\n    -ms-transform: translateX(16px);\n    transform: translateX(16px);\n  }\n\n  /* Rounded sliders */\n  .slider.round {\n    border-radius: 30px;\n  }\n\n  .slider.round:before {\n    border-radius: 50%;\n  }\n']);return C=function(){return n},n}var z=d.c.div(C(),function(n){return n.theme.color}),H=function(n){var e=n.nightModeCallback,t=n.nightMode;return o.a.createElement(z,null,o.a.createElement("span",null,"NightMode: "),o.a.createElement("label",{className:"switch"},o.a.createElement("input",{type:"checkbox",checked:t,onChange:e}),o.a.createElement("span",{className:"slider round"})))};function P(){var n=Object(p.a)(["\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 450px;\n  flex: 1 1 450px;\n  overflow: hidden;\n  color: blue;\n  /* height: 0;\n  padding-top:50px;\n  padding-bottom: 36%; */\n\n  @media screen and (max-width: 1400px) {\n    width: 100%;\n    display: block;\n  }\n"]);return P=function(){return n},n}var J=d.c.div(P()),T=function(n){var e=n.videos,t=n.active,a=n.nightModeCallback,i=n.nightMode;return o.a.createElement(J,null,o.a.createElement(H,{nightModeCallback:a,nightMode:i}),o.a.createElement(k,{active:t,total:e.length}),o.a.createElement(S,{videos:e,active:t}))};function A(){var n=Object(p.a)(["\n  background: ","; /* #353535; */\n  border: ",";\n  max-width: 1800px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  max-height: 863px;\n  transition: all 0.5s ease;\n\n  @media screen and (max-width: 1400px) {\n    display: block;\n    max-height: 10000px;\n  }\n"]);return A=function(){return n},n}var W=d.c.div(A(),function(n){return n.theme.bgcolor},function(n){return n.theme.border}),X={bgcolor:"#353535",bgcolorItem:"#414141",bgcolorItemActive:"#405c63",bgcolorPlay:"#526d4e",border:"none",borderPlayed:"none",color:"#fff"},B={bgcolor:"#fff",bgcolorItem:"#fff",bgcolorItemActive:"#80a7b1",bgcolorPlay:"#526d4e",border:"1px solid #353535",borderPlayed:"none",color:"#353535"},F=function(n){var e=JSON.parse(document.querySelector('[name="videos"]').value),t=JSON.parse(localStorage.getItem("".concat(e.playlistId))),i=Object(a.useState)({videos:t?t.videos:e.playlist,activeVideo:t?t.activeVideo:e.playlist[0],nightMode:!t||t.nightMode,playlistId:t?t.playlistId:e.playlistId,autoplay:!1}),r=Object(c.a)(i,2),s=r[0],u=r[1];Object(a.useEffect)(function(){localStorage.setItem("".concat(s.playlistId),JSON.stringify(Object(l.a)({},s)))},[s]),Object(a.useEffect)(function(){var e=n.match.params.activeVideo;if(void 0!==e){var t=s.videos.findIndex(function(n){return n.id===e});u(Object(l.a)({},s,{activeVideo:s.videos[t],autoplay:n.location.autoplay}))}else n.history.push({pathname:"/".concat(s.activeVideo.id),autoplay:!1})},[n.match.params.activeVideo]);return o.a.createElement(d.a,{theme:s.nightMode?X:B},null!==s.videos?o.a.createElement(W,null,o.a.createElement(v,{active:s.activeVideo,autoplay:s.autoplay,endCallback:function(){var e=n.match.params.activeVideo,t=s.videos.findIndex(function(n){return n.id===e}),a=t===s.videos.length-1?0:t+1;n.history.push({pathname:"".concat(s.videos[a].id),autoplay:!1})},progressCallback:function(n){n.playedSeconds>10&&n.playedSeconds<11&&u(Object(l.a)({},s,{videos:s.videos.map(function(n){return n.id===s.activeVideo.id?Object(l.a)({},n,{played:!0}):n})}))}}),o.a.createElement(T,{videos:s.videos,active:s.activeVideo,nightModeCallback:function(){u(function(n){return Object(l.a)({},n,{nightMode:!n.nightMode})})},nightMode:s.nightMode})):null)},R=function(n){return o.a.createElement("div",null,"NO PAGE FOUND!!! :(")},q=t(10);function D(){var n=Object(p.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-size: 10px;\n    font-family: 'Hind', sans-serif;\n  }\n"]);return D=function(){return n},n}var G=Object(d.b)(D()),L=function(){return o.a.createElement(_.a,{basement:"/React-Web-VideoPlayer/"},o.a.createElement(o.a.Fragment,null,o.a.createElement(q.c,null,o.a.createElement(q.a,{exact:!0,path:"/",component:F}),o.a.createElement(q.a,{exact:!0,path:"/:activeVideo",component:F}),o.a.createElement(q.a,{component:R})),o.a.createElement(G,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.d9ad0cd8.chunk.js.map