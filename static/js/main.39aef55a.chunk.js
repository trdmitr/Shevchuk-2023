(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(43),l=t.n(c),i=(t(69),t(70),t(1)),o=t(12),m=t(21),s=t.n(m),d=function(){return r.a.createElement("div",{className:"device device-iphone-x"},r.a.createElement("div",{className:"device-frame"},r.a.createElement("div",{className:"device-content"},r.a.createElement("div",null,r.a.createElement("span",{className:s.a.navLink},"\u0421\u0431\u043e\u0440\u043d\u0438\u043a \u0437\u0430 3 \u0433\u043e\u0434\u0430"),r.a.createElement(o.b,{to:"/cavers21",className:s.a.navLink21},"2021"),r.a.createElement(o.b,{to:"/cavers22",className:s.a.navLink22},"2022"),r.a.createElement(o.b,{to:"/cavers23",className:s.a.navLink23},"2023"),r.a.createElement("div",{className:s.a.main},r.a.createElement("div",{className:s.a.article},r.a.createElement("p",null,"\u041a\u0430\u0432\u0435\u0440\u044b \u042e\u0440\u0438\u044f \u042e\u043b\u0438\u0430\u043d\u043e\u0432\u0438\u0447\u0430!")),r.a.createElement("div",{className:s.a.article},r.a.createElement("img",{fetchpriority:"high",role:"presentation",src:"https://sun9-71.userapi.com/impg/W5TPeo4tfEygrsmHtwS-y-kdOOyzckmms_QxZw/-pAZJLdYnv8.jpg?size=450x405&quality=96&sign=868f6dc8110292f457a5aee6406b014d&type=album",width:100,alt:"\u041a\u0430\u0432\u0435\u0440\u044b \u041f\u043e\u0434\u0437\u0435\u043c\u043a\u0438"})))))),r.a.createElement("div",{className:"device-stripe"}),r.a.createElement("div",{className:"device-header"},r.a.createElement("div",{className:"device-sensors"})),r.a.createElement("div",{className:"device-btns"}),r.a.createElement("div",{className:"device-power"}))},u=t(5),v=t(25),_=t.n(v),E=t(37),p=t.n(E),g=t(59),f=(t(73),t(32)),b=t.n(f),N=function(){return r.a.createElement("div",{className:b.a.percentloader})},h=t(7),k=function(e){var a=Object(n.useState)(),t=Object(u.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)(function(){e&&l(e)},[]);var l=function(){var a=e.map(function(e){var a={};return a.name=e.name,a.src=e.audio1,a.aud_name=e.audio_name1,a}),t=e.map(function(e){var a={};return a.name=e.name,a.src=e.audio2,a.aud_name=e.audio_name2,a}),n=e.map(function(e){var a={};return a.name=e.name,a.src=e.audio3,a.aud_name=e.audio_name3,a}),r=e.map(function(e){var a={};return a.name=e.name,a.src=e.video1,a.aud_name=e.video_name1,a}),l=e.map(function(e){var a={};return a.name=e.name,a.src=e.video2,a.aud_name=e.video_name2,a}),i=e.map(function(e){var a={};return a.name=e.name,a.src=e.video3,a.aud_name=e.video_name3,a}),o=[].concat(Object(h.a)(a),Object(h.a)(t),Object(h.a)(n),Object(h.a)(r),Object(h.a)(l),Object(h.a)(i)).filter(function(e){return""!==e.src});return c(o)};return{audioList:r,listNow:l}},y=t(14),O=r.a.memo(function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(y.c)(function(e){return e.songs_reducer.all_songs}),i=k(l).audioList;if(!i)return r.a.createElement("div",{className:"loadBlock"},r.a.createElement(N,null));var o=function(){c(function(e){return e<i.length-1?e+1:0})};return r.a.createElement("div",{className:p.a.player},r.a.createElement(g.a,{className:p.a.rap_container,style:{borderTopLeftRadius:"0rem",borderTopRightRadius:"0rem",borderBottomLeftRadius:"1em",borderBottomRightRadius:"1em",backgroundColor:"#green"},src:i[t].src,showSkipControls:!0,showJumpControls:!1,header:"\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0433\u0440\u0430\u0435\u0442: ".concat(i[t].name),footer:"".concat(i[t].aud_name),onClickPrevious:function(){c(function(e){return 0===e?i.length-1:e-1})},onClickNext:o,onEnded:o}))}),S=t(27),j=t.n(S),C=function(e){var a=e.children,t=e.visible,n=e.setVisible,c=[j.a.myModal];return t&&c.push(j.a.active),r.a.createElement("div",{className:c.join(" ")},r.a.createElement("div",{className:j.a.myModalContent,onClick:function(){return n(!1)}},a))},L=function(){return r.a.createElement("div",{className:"container_mdl"},r.a.createElement("h2",null,"\u041e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435"),r.a.createElement("p",null,"\u0410\u0432\u0442\u043e\u0440\u044b: MaKriDi media group"),r.a.createElement("p",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),r.a.createElement("p",null,"trdmitr@gmail.com"))},w=t(60),T=function(e){var a=e.children,t=Object(w.a)(e,["children"]);return r.a.createElement("button",Object.assign({},t,{className:j.a.playBtn}),r.a.createElement("i",{className:"fa-play-circle","aria-hidden":"true"}),a," ")},B=function(){return r.a.createElement("div",{className:b.a.roundloader})},x=r.a.memo(function(e){var a=e.all_songs,t=e.loading_songs;return a.map(function(e){var a=e.photo,n=e.name,c=e.id;return r.a.createElement(o.b,{key:c,to:"/cavers/".concat(c)},r.a.createElement("div",{className:_.a.media},r.a.createElement("div",{className:_.a.mediaImage},t?r.a.createElement(B,null):r.a.createElement("img",{loading:"lazy",src:a,width:100,alt:n})),r.a.createElement("div",null,r.a.createElement("p",null," ",n," "))))})}),H=t(57),M=t.n(H),P=function(e){return{type:"SONGS_ARE_LOADED",payload:e}},A=function(e){return{type:"LOADING_SONGS",payload:e}},I=function(e){return{type:"FETCH_DATA_ERROR",payload:{error:e}}},F=function(e,a){var t=Object(y.b)();function r(e){t(A(!0)),M.a.parse(e,{download:!0,header:!0,complete:function(e){t(P(e.data)),t(A(!1))},skipEmptyLines:!0,error:function(e){console.error(e),t(A(!1)),t(I("error"))}})}return Object(n.useEffect)(function(){e&&r(e)},[e]),{fetchNow:r}},R=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(i.k)().pathname,m=l.includes("cavers21")?"https://docs.google.com/spreadsheets/d/e/2PACX-1vSJpAqJmngxzKzdpaHbqA9kxuJkx0eljTICVi0qJ6Qk6-1YcpFBitfQOV2C2qHZ9uZF04zeNLYUSXov/pub?output=csv":l.includes("cavers22")?"https://docs.google.com/spreadsheets/d/e/2PACX-1vTqMSBKbaIPUyfikTyHNpByUzLbxWxChMy96gx1a7WKMXFGNydi2ZTgotnDwgbhLjGkXuTlhGGgsKZ8/pub?output=csv":l.includes("cavers23")?"https://docs.google.com/spreadsheets/d/e/2PACX-1vRhlDODyncSUfe3jagFmcINmAn2-k2h4Yp1cIJPX0-B9bNyrqIVCOZyTCJpaU38pns0C6qnR7GMmuAF/pub?output=csv":"";F(m);var s=Object(y.c)(function(e){return e.songs_reducer.all_songs}),d=Object(y.c)(function(e){return e.songs_reducer.loading_songs});return r.a.createElement("div",{className:"device device-iphone-x"},r.a.createElement("div",{className:"device-frame"},r.a.createElement("div",{className:"device-content"},r.a.createElement("div",{className:_.a.row},r.a.createElement(C,{visible:t,setVisible:c},r.a.createElement(L,null)),r.a.createElement(T,{onClick:function(){return c(!0)}},r.a.createElement("span",{role:"img","aria-label":"emoji name"}," \ud83d\udccc ")),r.a.createElement("div",{className:_.a.column50},r.a.createElement(x,{loading_songs:d,all_songs:s})),r.a.createElement("a",{style:{color:"white"},href:"https://trdmitr.github.io/alltributes/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",null,"\u0412\u0441\u0435 \u0442\u0440\u0438\u0431\u044c\u044e\u0442\u044b ")),d?r.a.createElement("div",{className:"loadBlock"},r.a.createElement(N,null)):r.a.createElement(O,null)),r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{className:_.a.btnHome},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")))),r.a.createElement("div",{className:"device-stripe"}),r.a.createElement("div",{className:"device-header"},r.a.createElement("div",{className:"device-sensors"})),r.a.createElement("div",{className:"device-btns"}),r.a.createElement("div",{className:"device-power"}))},D=t(8),z=t.n(D),J=t(58),G=t.n(J),q=function(e,a){return r.a.createElement("div",null,r.a.createElement("p",{className:e?"":z.a.mediaHidden},a," "),r.a.createElement("audio",{controls:!0,className:e?"":z.a.mediaHidden,src:e,type:"audio/mpeg"}))},X=function(e,a){return r.a.createElement("div",null,r.a.createElement("p",{className:e?"":z.a.mediaHidden},a),e.includes("youtube.com")?r.a.createElement(G.a,{className:e?"":z.a.mediaHidden.join(" "),id:z.a.videoFrame,url:e,controls:!0,origin:window.location.hostname}):r.a.createElement("video",{className:[z.a.videoBlock,e?"":z.a.mediaHidden].join(" "),src:e,controls:!0,type:"video/mp4"}))},K=r.a.memo(function(){var e=Object(i.m)(),a=Object(i.o)(),t=Object(y.c)(function(e){return e.songs_reducer.all_songs.filter(function(e){return e.id===a.id})});return t.length?t.map(function(a){var t,c=a.id,l=a.photo,i=a.name,o=a.linkTo,m=a.audio1,s=a.audio_name1,d=a.audio2,u=a.audio_name2,v=a.audio3,_=a.audio_name3,E=a.video1,p=a.video_name1,g=a.video2,f=a.video_name2,b=a.video3,N=a.video_name3,h=a.picture;return r.a.createElement(n.Fragment,{key:c},r.a.createElement("div",{className:z.a.mediaSong},r.a.createElement("img",{className:z.a.mediaImage_modal,src:l,alt:i}),r.a.createElement("div",{className:z.a.headerSong},r.a.createElement("p",null,i)),r.a.createElement("a",{className:[z.a.linkTo,o?"":z.a.mediaHidden].join(" "),href:o,target:"_blank",rel:"noopener noreferrer"}," \u041a\u0430\u043d\u0430\u043b \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044f "),r.a.createElement("div",{className:z.a.audioBlock},q(m,s),q(d,u),q(v,_)),r.a.createElement("div",{className:z.a.videoBlock},X(E,p),X(g,f),X(b,N)),(t=h,r.a.createElement("div",{className:z.a.tziTata},t.includes("http")?r.a.createElement("img",{className:z.a.tziTata,src:t,width:80,alt:"\u0426\u0438\u0442\u0430\u0442\u044b"}):r.a.createElement("p",{className:z.a.tziTata},t))),r.a.createElement("button",{className:z.a.bTnSing,onClick:function(){return e(-1)}},"\u041d\u0430\u0437\u0430\u0434")))}):r.a.createElement("div",{className:"loadBlock"},r.a.createElement(B,null),r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{className:z.a.btnError}," \u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e!")))}),Z=function(){return r.a.createElement("div",{className:"device device-iphone-x"},r.a.createElement("div",{className:"device-frame"},r.a.createElement("div",{className:"device-content"},r.a.createElement(K,null))),r.a.createElement("div",{className:"device-stripe"}),r.a.createElement("div",{className:"device-header"},r.a.createElement("div",{className:"device-sensors"})),r.a.createElement("div",{className:"device-btns"}),r.a.createElement("div",{className:"device-power"}))};function U(){var e=Object(i.k)();return r.a.createElement("div",null,r.a.createElement("h3",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ",r.a.createElement("code",null,e.pathname)," \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430!"),r.a.createElement(o.b,{to:"/"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"))}var W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(n.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",element:r.a.createElement(d,null)}),r.a.createElement(i.a,{path:"/cavers21",element:r.a.createElement(R,null)}),r.a.createElement(i.a,{path:"/cavers22",element:r.a.createElement(R,null)}),r.a.createElement(i.a,{path:"/cavers23",element:r.a.createElement(R,null)}),r.a.createElement(i.a,{path:"/cavers/:id",element:r.a.createElement(Z,null)}),r.a.createElement(i.a,{path:"*",element:r.a.createElement(U,null)})))))},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,101)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,l=a.getTTFB;t(e),n(e),r(e),c(e),l(e)})},Y=t(28),Q=t(13),$={all_songs:[],loading_songs:[],fetchDataError:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SONGS_ARE_LOADED":return Object(Q.a)({},e,{all_songs:a.payload});case"LOADING_SONGS":return Object(Q.a)({},e,{loading_songs:a.payload});case"FETCH_DATA_ERROR":return Object(Q.a)({},e,{fetchDataError:a.payload});default:return e}},ae=Object(Y.b)({songs_reducer:ee}),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.c,ne=Object(Y.d)(ae,te(Object(Y.a)()));l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y.a,{store:ne},r.a.createElement(W,null)))),V()},21:function(e,a,t){e.exports={main:"HomePage_main__1jzTO",article:"HomePage_article__2xJyM",navLink:"HomePage_navLink__O4k3d",navLink21:"HomePage_navLink21__33Ku3",navLink22:"HomePage_navLink22__2LxvK",navLink23:"HomePage_navLink23__3tW_e"}},25:function(e,a,t){e.exports={row:"CaverPage_row__3WFj_",media:"CaverPage_media__36sB1",mediaImage:"CaverPage_mediaImage__2U27n",btnHome:"CaverPage_btnHome__3WfBL"}},27:function(e,a,t){e.exports={myModal:"MyModal_myModal__3qSXk",myModalContent:"MyModal_myModalContent__3zs3a",active:"MyModal_active__2wzOg",playBtn:"MyModal_playBtn__5Z9Zb"}},32:function(e,a,t){e.exports={loader:"Loader_loader__3AS3h",left:"Loader_left__3WBtN",right:"Loader_right__6jHl9",roundloader:"Loader_roundloader__CyKh6",rotate:"Loader_rotate__JupvP",percentloader:"Loader_percentloader__bjkgl",loading:"Loader_loading__Kx_St",percentage:"Loader_percentage__aLxm8"}},37:function(e,a,t){e.exports={player:"Player_player__3u-B_"}},61:function(e,a,t){e.exports=t(100)},69:function(e,a,t){},70:function(e,a,t){},8:function(e,a,t){e.exports={mediaImage:"SingContent_mediaImage__ESNlI",mediaHidden:"SingContent_mediaHidden__3pbg5",mediaSong:"SingContent_mediaSong__jJL2S",mediaImage_modal:"SingContent_mediaImage_modal__2pwvr",headerSong:"SingContent_headerSong__2cXk5",linkTo:"SingContent_linkTo__2ffia",audioBlock:"SingContent_audioBlock__1wMpk",videoBlock:"SingContent_videoBlock__vttLa",videoFrame:"SingContent_videoFrame__pTFeq",tziTata:"SingContent_tziTata__3YPq3",bTnSing:"SingContent_bTnSing__2GuLe",btnError:"SingContent_btnError__1iU3C"}}},[[61,1,2]]]);
//# sourceMappingURL=main.39aef55a.chunk.js.map