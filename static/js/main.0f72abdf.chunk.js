(this.webpackJsonpmama=this.webpackJsonpmama||[]).push([[0],{148:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(59),r=t.n(c),o=(t(78),t(22)),m=t(2),i=(t(41),t(16)),s=t(17),u=t(18),d=t(19),E=(t(79),t(26)),p=(t(81),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",null,"\u9996\u9875"),l.a.createElement("div",null,"\u5173\u4e8e\u6211\u4eec"),l.a.createElement("div",null,"\u56e2\u961f\u4ecb\u7ecd"))}}]),t}(n.Component)),v=t(61),h=t.n(v),f=(t(82),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"header-model"},l.a.createElement("div",{className:"title"},"\u670d\u52a1\u54a8\u8be2"),l.a.createElement("div",{className:"link"},l.a.createElement("a",null,"\u7cfb\u7edf\u5236\u4f5c"),l.a.createElement("a",null,"\u5feb\u901f\u6210\u957f"),l.a.createElement("a",null,"\u5b9a\u5236\u670d\u52a1"))),l.a.createElement("div",{className:"header-model"},l.a.createElement("div",{className:"title"},"\u5feb\u901f\u4e0b\u5355"),l.a.createElement("div",{className:"link"},l.a.createElement("a",null,"\u8f6f\u4ef6\u5b89\u88c5"),l.a.createElement("a",null,"\u7f51\u7ad9\u5236\u4f5c"),l.a.createElement("a",null,"APP\u5236\u4f5c"))),l.a.createElement("div",{className:"header-model"},l.a.createElement("div",{className:"title"},"\u6846\u67b6\u4e0b\u8f7d"),l.a.createElement("div",{className:"link"},l.a.createElement("a",null,"React\u6846\u67b6"),l.a.createElement("a",null,"Vue\u6846\u67b6"),l.a.createElement("a",null,"Angular\u6846\u67b6"))),l.a.createElement("div",{className:"header-model"},l.a.createElement("div",{className:"title"},"\u53cb \u60c5 \u94fe \u63a5"),l.a.createElement("div",{className:"link"},l.a.createElement("a",null,"\u54d4\u54e9\u54d4\u54e9"),l.a.createElement("a",null,"\u83dc\u9e1f\u6559\u7a0b"),l.a.createElement("a",null,"W3CSchool"))),l.a.createElement("div",{className:"header-model"},l.a.createElement("div",null,l.a.createElement("div",{className:"title"},"\u5173\u6ce8\u7801\u7801\u516c\u4f17\u53f7")),l.a.createElement("div",null,l.a.createElement("img",{src:h.a,alt:"mama",className:"footer-img"}))))}}]),t}(n.Component)),N=(t(83),t(67)),g=(t(85),t(62)),b=t.n(g),j=t(63),k=t.n(j),O=t(64),y=t.n(O),w=t(65),C=t.n(w),x=t(66),W=t.n(x),A=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).formRef=l.a.createRef(),n.state={cooperationData:[]},n}return Object(s.a)(t,[{key:"getCooperation",value:function(e){var a=[];return this.state.cooperationData.forEach((function(e,t){a.push(l.a.createElement("div",{className:"cooperation-model",key:t},l.a.createElement("div",{className:"cooperation-model-top"},l.a.createElement("img",{src:e.img,width:"100%",height:"100%",className:"cooperation-img",alt:e.title})),l.a.createElement("div",{className:"cooperation-model-title"},e.title)))})),a}},{key:"UNSAFE_componentWillMount",value:function(){var e=this;W.a.get("https://www.fastmock.site/mock/38b63f3a46203fadc7c390612ad9a2ba/nomama/cooperation/project").then((function(a){console.log(a);var t=a.data;e.setState({cooperationData:t})}))}},{key:"render",value:function(){return console.log(this.formRef),l.a.createElement("div",{className:"content"},l.a.createElement(N.a,{autoplay:!0},l.a.createElement("div",null,l.a.createElement("img",{src:b.a,className:"carousel",alt:"\u4e0d\u6101\u7801\u7801"})),l.a.createElement("div",null,l.a.createElement("img",{src:k.a,className:"carousel",alt:"\u4e0d\u6101\u7801\u7801"})),l.a.createElement("div",null,l.a.createElement("img",{src:y.a,className:"carousel",alt:"\u4e0d\u6101\u7801\u7801"})),l.a.createElement("div",null,l.a.createElement("img",{src:C.a,className:"carousel",alt:"\u4e0d\u6101\u7801\u7801"}))),l.a.createElement("div",{className:"cooperation-header"},l.a.createElement("div",{className:"cooperation-title"},"\u5e73\u53f0\u670d\u52a1"),l.a.createElement("div",{className:"cooperation-container"},this.getCooperation()),l.a.createElement("div",{className:"cooperation-title"},"\u5e73\u53f0\u670d\u52a1"),l.a.createElement("div",{className:"cooperation-container"},this.getCooperation())))}}]),t}(n.Component),R=E.a.Header,S=E.a.Footer,D=E.a.Content,F=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement(R,{className:"header"},l.a.createElement(o.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",component:p})))),l.a.createElement(D,null,l.a.createElement(o.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",component:A})))),l.a.createElement(S,{className:"footer",style:{height:150}},l.a.createElement(o.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",component:f})))))}}]),t}(n.Component);var B=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",component:F}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,a,t){},61:function(e,a,t){e.exports=t.p+"static/media/WxCode.6e0ad98d.jpg"},62:function(e,a,t){e.exports=t.p+"static/media/aboutOne.9852845e.png"},63:function(e,a,t){e.exports=t.p+"static/media/aboutTwo.9e9d0310.png"},64:function(e,a,t){e.exports=t.p+"static/media/aboutThree.6cfc9048.png"},65:function(e,a,t){e.exports=t.p+"static/media/aboutFour.1de33a22.png"},73:function(e,a,t){e.exports=t(148)},78:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},85:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.0f72abdf.chunk.js.map