(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[0],{100:function(e,t){e.exports="attribute vec4 vPosition;\nvoid main() {\n\tgl_Position = vPosition;\n}\n"},101:function(e,t){e.exports="precision mediump float;\nvoid main() {\n\tgl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n}\n"},102:function(e,t){e.exports="attribute vec4 vPosition;\nvoid main() {\n\tgl_Position = vPosition;\n}\n"},103:function(e,t){e.exports="precision mediump float;\nvoid main() {\n\tgl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n}\n"},104:function(e,t){e.exports="attribute vec4 vPosition;\nvarying vec4 fColor;\nvoid main() {\n\tfColor = vec4((1.0 + vPosition.xyz) / 2.0, 1.0);\n\tgl_Position = vPosition;\n}\n"},105:function(e,t){e.exports="precision mediump float;\nvarying vec4 fColor;\nvoid main() {\n\tgl_FragColor = fColor;\n}\n"},106:function(e,t){e.exports="attribute vec3 vPosition;\nattribute vec3 vColor;\nvarying vec4 color;\nvoid main() {\n\tgl_Position = vec4(vPosition, 1.0);\n\tcolor = vec4(vColor, 1.0);\n}\n"},107:function(e,t){e.exports="precision mediump float;\nvarying vec4 color;\nvoid main() {\n\tgl_FragColor = color;\n}\n"},113:function(e,t,r){},114:function(e,t,r){},115:function(e,t,r){},116:function(e,t,r){},118:function(e,t,r){},249:function(e,t,r){},250:function(e,t,r){"use strict";r.r(t);var n,a=r(9),c=r.n(a),i=r(96),o=r.n(i),s=(r(113),r(114),r(115),r(116),r(117),r(30)),l=r(19),u=r(15),f=(r(118),r(97)),h=["title","titleId"];function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e,t){var r=e.title,c=e.titleId,i=b(e,h);return a.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",className:"inline",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24","data-v-939756fc":"",style:{verticalAlign:"sub"},ref:t,"aria-labelledby":c},i),r?a.createElement("title",{id:c},r):null,n||(n=a.createElement("path",{d:"M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415a1.2 1.2 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182zM20.737 5.377c.032-.125.063-.264.09-.42a6.278 6.278 0 0 0-.408-3.293a1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83a8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.678 1.678 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738a4.258 4.258 0 0 1 .92-2.713a3.022 3.022 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.388 3.388 0 0 1-.155-.555a4.094 4.094 0 0 1 .079-1.616a7.543 7.543 0 0 1 2.415 1.18a1.009 1.009 0 0 0 .827.133a11.777 11.777 0 0 1 6.173.001a1.005 1.005 0 0 0 .83-.138a7.572 7.572 0 0 1 2.406-1.19a4.04 4.04 0 0 1 .087 1.578a3.205 3.205 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311a4.256 4.256 0 0 0-.116-.416a6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826z",fill:"currentColor"})))}var j=a.forwardRef(m),v=(r.p,[{url:"https://github.com/EchoZhaoH/vscode-lsp-demo",title:"Vscode Lsp Demo (\u4e00\u4e2a\u4e2d\u6587\u683c\u5f0f\u5316\u63d2\u4ef6)"},{url:"https://github.com/EchoZhaoH/learn-rust",title:"Rust \u5b66\u4e60"}]),p=r(8);function g(){return Object(p.jsxs)("div",{className:"flex flex-row px-10 mt-10",children:[Object(p.jsx)(l.b,{to:"/",children:"Echo"}),Object(p.jsx)("a",{href:"https://github.com/EchoZhaoH",title:"github",className:"ml-4",children:Object(p.jsx)(j,{})}),Object(p.jsx)("span",{className:"flex-1"}),Object(p.jsx)(l.b,{to:"/articles",children:"\u968f\u60f3"}),Object(p.jsx)(l.b,{to:"/webgl",className:"ml-4",children:"WebGl"}),Object(p.jsx)(l.b,{to:"/graffiti",className:"ml-4",children:"\ud83d\uddbc"})]})}var x=r(17),O=r.n(x),w=r(28),A=r(108),R=r(70),E=r(39),y=r(18),F=r(99),_=r(71),T=["modelUrl","onLoad"];R.a.registerPlugin(y.b),_.Live2DModel.registerTicker(y.a),E.Renderer.registerPlugin("interaction",F.a);var P="model/tororo.model.json";var N=r(31),L=r.n(N);function S(e){var t=e.className,r=Object(a.useRef)(null),n=L()("mx-auto rounded-1/2",t);return function(e,t){var r=t.modelUrl,n=t.onLoad,c=Object(A.a)(t,T);Object(a.useEffect)((function(){function t(){return(t=Object(w.a)(O.a.mark((function t(){var a,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new R.a(Object(s.a)(Object(s.a)({},c),{},{view:e.current})),t.next=3,_.Live2DModel.from(r||P);case 3:(i=t.sent).scale.set(.08),i.position.set(30,5),a.stage.addChild(i),n&&n(i);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.current&&function(){t.apply(this,arguments)}()}),[e,c,r,n])}(r,{width:200,height:200,backgroundColor:5131340}),Object(p.jsx)("canvas",{ref:r,className:n})}function B(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(S,{className:"mt-20"}),Object(p.jsxs)("div",{className:"content mt-4",children:[Object(p.jsx)(f.a,{as:"div",options:{cursor:!1},children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{className:"text-center",children:"Hi \u6211\u662f Echo"}),Object(p.jsx)("p",{className:"mgt-l mgl-l mgr-l text-center",children:Object(p.jsx)("span",{children:"\u524d\u7aef\u5de5\u7a0b\u5e08\uff0c\u559c\u6b22\u6444\u5f71\uff0c\u76ee\u524d\u6b63\u5728\u5b66\u4e60 rust\u3002"})})]})}),Object(p.jsxs)("div",{className:"mt-4",children:[Object(p.jsx)("h4",{className:"text-center mt-4 font-700",children:"\u76ee\u524d\u6b63\u5728\u66f4\u65b0\u7684\u4ed3\u5e93"}),Object(p.jsx)("ul",{className:"text-center",children:v.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.url,children:e.title})},e.url)}))})]})]})]})}var C=function(){return Object(p.jsx)(B,{})},D=r(24);function I(e){var t=Object(a.useState)(null),r=Object(D.a)(t,2),n=r[0],c=r[1];return Object(a.useEffect)((function(){var t=e.current;if(t){var r=t.getContext("webgl");r.viewport(0,0,t.width,t.height),r.clearColor(1,1,1,1),c(r)}}),[e]),n}function k(e,t,r){var n=Object(a.useState)(!1),c=Object(D.a)(n,2),i=c[0],o=c[1],s=Object(a.useState)(t),l=Object(D.a)(s,2),u=l[0],f=l[1];return Object(a.useEffect)((function(){var t,n;o(!0),(t=e,n=r,fetch(t,n).then((function(e){if(200===e.status&&e.ok)return e.json();throw Error("request error")})).catch((function(e){console.log(e.message)}))).then((function(e){f(e)})).finally((function(){o(!1)}))}),[e,r]),{fetching:i,data:u}}function H(e){var t=e.url,r=void 0===t?"/":t,n=e.className,a=L()(n,"mt-10","inline-block");return Object(p.jsx)(l.b,{to:r,className:a,children:"cd .."})}function M(e){var t=e.data;return Object(p.jsxs)("section",{className:"not-last:mt-5",children:[Object(p.jsx)(l.b,{to:"articles/".concat(t.id),className:"inline-block text-lg",children:Object(p.jsx)("h3",{children:t.title})}),Object(p.jsxs)("p",{className:"mt-2 light:text-gray-500",children:[Object(p.jsx)("span",{children:t.date}),t.tag&&Object(p.jsx)("sup",{className:"ml-2 px-1 rounded-sm border light:border-gray-500",children:t.tag})]}),Object(p.jsx)("p",{className:"mt-2 light:text-gray-500",children:t.body})]})}r(249);function U(){var e=k("/articles/list.json",[]).data;return Object(p.jsxs)("div",{className:"py-4 mx-auto sm:w-screen-sm <sm:px-4",children:[e.map((function(e){return Object(p.jsx)(M,{data:e},e.id)})),Object(p.jsx)(H,{})]})}function Y(e){var t=k("/articles/".concat(e.id,".json"),{}).data;return Object(p.jsxs)("div",{className:"py-4 mx-auto sm:w-screen-sm <sm:px-4",children:[Object(p.jsx)("h4",{className:"text-lg",children:t.title}),Object(p.jsxs)("div",{className:L()("mgt-s"),children:[!!t.tag&&Object(p.jsx)("span",{className:"mgr-s",children:t.tag}),Object(p.jsx)("span",{children:t.date})]}),Object(p.jsx)("article",{className:L()("mgt-l","prose"),dangerouslySetInnerHTML:{__html:t.body}}),Object(p.jsx)(H,{url:"/articles"})]})}var W=r(54);function G(){var e=Object(a.useRef)(null);return Object(a.useEffect)((function(){if(e.current){var t=new W.a.Stage({container:e.current,width:window.innerWidth,height:window.innerHeight}),r=new W.a.Layer,n=new W.a.Line({points:[0,0],fill:"red",stroke:"red",strokeWidth:2,draggable:!0});t.addEventListener("mousemove",(function(e){var a=e.clientX,c=e.clientY;n.points(n.points().concat([a,c])),n.draw(),r.batchDraw(),t.batchDraw()})),r.add(n),t.add(r)}}),[e]),Object(p.jsx)("div",{ref:function(t){return e.current=t}})}var V=r(23),z=r.p+"static/media/stage-1.ea9dd4be.jpeg";function X(){var e=Object(a.useRef)(null);return Object(a.useEffect)((function(){var t=e.current;if(t){var r=new V.f,n=new V.d(75,window.innerWidth/window.innerHeight,.1,1e3),a=new V.i;a.setSize(window.innerWidth,window.innerHeight),t.appendChild(a.domElement);var c=new V.g,i=new V.c({map:(new V.h).load(z)}),o=new V.b(c,i);r.add(o);var s=(new V.h).load(z);s.mapping=V.a,s.wrapS=V.e,s.wrapT=V.e,s.repeat.set(1,1),r.background=s,n.position.z=5;var l=null;return function e(){l=requestAnimationFrame(e),o.rotation.x+=.01,o.rotation.y+=.01,a.render(r,n)}(),function(){cancelAnimationFrame(l)}}}),[]),Object(p.jsx)("div",{ref:e})}var K=r(35);function Z(e){return Object(K.a)(e)}function q(){var e=Z(arguments);switch(e.length){case 0:e.push(0);case 1:e.push(0)}return e.splice(0,2)}function J(){var e=Z(arguments);switch(e.length){case 0:e.push(0);case 1:e.push(0);case 2:e.push(0)}return e.splice(0,3)}function Q(){var e=Z(arguments);switch(e.length){case 0:e.push(0);case 1:e.push(0);case 2:e.push(0);case 3:e.push(1)}return e.splice(0,4)}function $(){var e=Z(arguments),t=[];switch(e.length){case 0:e[0]=1;case 1:t=[q(e[0],0),q(0,e[0])];break;default:t.push(q(e)),e.splice(0,2),t.push(q(e))}return t.matrix=!0,t}function ee(){var e=Z(arguments),t=[];switch(e.length){case 0:e[0]=1;case 1:t=[J(e[0],0,0),J(0,e[0],0),J(0,0,e[0])];break;default:t.push(J(e)),e.splice(0,3),t.push(J(e)),e.splice(0,3),t.push(J(e))}return t.matrix=!0,t}function te(){var e=Z(arguments),t=[];switch(e.length){case 0:e[0]=1;case 1:t=[Q(e[0],0,0,0),Q(0,e[0],0,0),Q(0,0,e[0],0),Q(0,0,0,e[0])];break;default:t.push(Q(e)),e.splice(0,4),t.push(Q(e)),e.splice(0,4),t.push(Q(e)),e.splice(0,4),t.push(Q(e))}return t.matrix=!0,t}function re(e,t){var r=[];if(e.matrix&&t.matrix){if(e.length!=t.length)throw"add(): trying to add matrices of different dimensions";for(var n=0;n<e.length;++n){if(e[n].length!=t[n].length)throw"add(): trying to add matrices of different dimensions";r.push([]);for(var a=0;a<e[n].length;++a)r[n].push(e[n][a]+t[n][a])}return r.matrix=!0,r}if(e.matrix&&!t.matrix||!e.matrix&&t.matrix)throw"add(): trying to add matrix and non-matrix variables";if(e.length!=t.length)throw"add(): vectors are not the same dimension";for(n=0;n<e.length;++n)r.push(e[n]+t[n]);return r}function ne(e){if(!e.matrix)return"transpose(): trying to transpose a non-matrix";for(var t=[],r=0;r<e.length;++r){t.push([]);for(var n=0;n<e[r].length;++n)t[r].push(e[n][r])}return t.matrix=!0,t}function ae(e,t,r){if("number"!==typeof r)throw"mix: the last paramter "+r+" must be a number";if(e.length!=t.length)throw"vector dimension mismatch";for(var n=[],a=0;a<e.length;++a)n.push((1-r)*e[a]+r*t[a]);return n}function ce(e,t){if(!Array.isArray(t))throw"scale: second parameter "+t+" is not a vector";for(var r=[],n=0;n<t.length;++n)r.push(e*t[n]);return r}function ie(e){!0===e.matrix&&(e=ne(e));var t=e.length,r=!1;Array.isArray(e[0])&&(r=!0,t*=e[0].length);var n=new Float32Array(t);if(r)for(var a=0,c=0;c<e.length;++c)for(var i=0;i<e[c].length;++i)n[a++]=e[c][i];else for(c=0;c<e.length;++c)n[c]=e[c];return n}new Float32Array(ie(q())).byteLength,new Float32Array(ie(J())).byteLength,new Float32Array(ie(Q())).byteLength,new Float32Array(ie($())).byteLength,new Float32Array(ie(ee())).byteLength,new Float32Array(ie(te())).byteLength;function oe(e,t,r){var n=e.createShader(r);if(e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS))throw Error("shader ".concat(r," create failed, the error log is: ").concat(e.getShaderInfoLog(n)));return n}function se(e,t){var r=e.createProgram();if(t.forEach((function(t){e.attachShader(r,t)})),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw Error("shader program failed to link, the error log is: ".concat(e.getProgramInfoLog(r)));return r}var le=r(100),ue=r.n(le),fe=r(101),he=r.n(fe);function de(){var e=Object(a.useRef)(null),t=I(e);return Object(a.useEffect)((function(){if(t){var e=Math.pow(3,6);!function(){var e=[q(-1,-1),q(0,1),q(1,-1)],r=[];!function e(t,n,a,c){if(0===c)!function(e,t,n){r.push(e),r.push(t),r.push(n)}(t,n,a);else{var i=ae(t,n,.5),o=ae(t,a,.5),s=ae(n,a,.5);e(t,i,o,c-=1),e(a,o,s,c),e(n,s,i,c)}}(e[0],e[1],e[2],5);var n=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,ie(r),t.STATIC_DRAW)}(),function(){var e=se(t,[oe(t,ue.a,t.VERTEX_SHADER),oe(t,he.a,t.FRAGMENT_SHADER)]);t.useProgram(e);var r=t.getAttribLocation(e,"vPosition"),n=t.FLOAT;t.vertexAttribPointer(r,2,n,!1,0,0),t.enableVertexAttribArray(r)}(),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLES,0,e)}}),[t]),Object(p.jsx)("div",{children:Object(p.jsx)("canvas",{width:"500px",height:"500px",ref:e,style:{backgroundColor:"#fff"}})})}var be=r(102),me=r.n(be),je=r(103),ve=r.n(je);function pe(){var e=Object(a.useRef)(null),t=I(e);return Object(a.useEffect)((function(){if(t){!function(){for(var e=[q(-1,-1),q(0,1),q(1,-1)],r=ce(.5,re(e[0],e[1])),n=ce(.5,re(e[0],e[2])),a=ce(.5,re(r,n)),c=[a],i=1;i<=5e3;i++){var o=Math.floor(3*Math.random());a=ce(.5,re(c[i-1],e[o])),c.push(a)}var s=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,s),t.bufferData(t.ARRAY_BUFFER,ie(c),t.STATIC_DRAW)}(),function(){var e=se(t,[oe(t,me.a,t.VERTEX_SHADER),oe(t,ve.a,t.FRAGMENT_SHADER)]);t.useProgram(e);var r=t.getAttribLocation(e,"vPosition"),n=t.FLOAT;t.vertexAttribPointer(r,2,n,!1,0,0),t.enableVertexAttribArray(r)}(),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.POINTS,0,5e3)}}),[t]),Object(p.jsx)("div",{children:Object(p.jsx)("canvas",{width:"500px",height:"500px",ref:e,style:{backgroundColor:"#fff"}})})}var ge=r(104),xe=r.n(ge),Oe=r(105),we=r.n(Oe);function Ae(){var e=Object(a.useRef)(null),t=I(e);return Object(a.useEffect)((function(){if(t){!function(){for(var e=[J(-.5,-.5,-.5),J(.5,-.5,-.5),J(0,.5,0),J(0,-.5,.5)],r=[J(0,0,0)],n=0;r.length<5e3;n++){var a=Math.floor(4*Math.random());r.push(ae(r[n],e[a],.5))}var c=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,c),t.bufferData(t.ARRAY_BUFFER,ie(r),t.STATIC_DRAW)}(),function(){var e=se(t,[oe(t,xe.a,t.VERTEX_SHADER),oe(t,we.a,t.FRAGMENT_SHADER)]);t.useProgram(e);var r=t.getAttribLocation(e,"vPosition"),n=t.FLOAT;t.vertexAttribPointer(r,3,n,!1,0,0),t.enableVertexAttribArray(r)}(),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.POINTS,0,5e3)}}),[t]),Object(p.jsx)("div",{children:Object(p.jsx)("canvas",{width:"500px",height:"500px",ref:e,style:{backgroundColor:"#fff"}})})}var Re=r(106),Ee=r.n(Re),ye=r(107),Fe=r.n(ye);function _e(){var e=Object(a.useRef)(null),t=I(e);return Object(a.useEffect)((function(){if(t){var e=[],r=[];!function(){var n=[J(0,0,-1),J(0,.9428,.3333),J(-.8165,-.4714,.3333),J(.8165,-.4714,.3333)];function a(t,n,a,c){var i=[J(1,0,0),J(0,1,0),J(0,0,1),J(0,0,0)];r.push(i[c]),e.push(t),r.push(i[c]),e.push(n),r.push(i[c]),e.push(a)}!function e(t,r,n,c,i){if(0===i)!function(e,t,r,n){a(e,r,t,0),a(e,r,n,1),a(e,t,n,2),a(t,r,n,3)}(t,r,n,c);else{var o=ae(t,r,.5),s=ae(t,n,.5),l=ae(t,c,.5),u=ae(r,n,.5),f=ae(r,c,.5),h=ae(n,c,.5);e(t,o,s,l,i-=1),e(o,r,u,f,i),e(s,u,n,h,i),e(l,f,h,c,i)}}(n[0],n[1],n[2],n[3],3),t.enable(t.DEPTH_TEST)}(),function(){var n=se(t,[oe(t,Ee.a,t.VERTEX_SHADER),oe(t,Fe.a,t.FRAGMENT_SHADER)]);t.useProgram(n);var a=t.FLOAT,c=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,c),t.bufferData(t.ARRAY_BUFFER,ie(r),t.STATIC_DRAW);var i=t.getAttribLocation(n,"vColor");t.vertexAttribPointer(i,3,a,false,0,0),t.enableVertexAttribArray(i);var o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,ie(e),t.STATIC_DRAW);var s=t.getAttribLocation(n,"vPosition");t.vertexAttribPointer(s,3,a,false,0,0),t.enableVertexAttribArray(s)}(),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.drawArrays(t.TRIANGLES,0,e.length)}}),[t]),Object(p.jsx)("div",{children:Object(p.jsx)("canvas",{width:"500px",height:"500px",ref:e,style:{backgroundColor:"#fff"}})})}var Te,Pe=[{title:"demo",path:"/v-world"},{title:"demo1",path:"/webgl/class1/demo1"},{title:"demo2",path:"/webgl/class1/demo2"},{title:"demo3",path:"/webgl/class1/demo3"},{title:"demo4",path:"/webgl/class1/demo4"}];function Ne(){return Object(p.jsxs)("div",{className:"py-4 mx-auto sm:w-screen-sm <sm:px-4",children:[Object(p.jsx)("h5",{className:"text-lg",children:"\u4ea4\u4e92\u5f0f\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66"}),Object(p.jsxs)("p",{className:"light:text-gray-500 mt-5",children:["\u57fa\u4e8e WebGL \u7684\u81ea\u9876\u5411\u4e0b\u65b9\u6cd5\uff08\u7b2c\u4e03\u7248\uff09",Object(p.jsx)("br",{}),"\u8fd9\u6709\u6211\u8ddf\u7740\u7ec3\u4e60\u7684 demo"]}),Object(p.jsx)("ul",{children:Pe.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(l.b,{to:e.path,children:e.title})},e.path)}))}),Object(p.jsx)(H,{})]})}function Le(){return Object(a.useEffect)((function(){window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.add("light")}),[]),Object(p.jsx)(l.a,{children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{exact:!0,path:"/graffiti",component:G}),Object(p.jsx)(u.a,{exact:!0,path:"/v-world",component:X}),Object(p.jsx)(u.a,{exact:!0,path:"/webgl/class1/demo4",component:_e}),Object(p.jsx)(u.a,{exact:!0,path:"/webgl/class1/demo3",component:Ae}),Object(p.jsx)(u.a,{exact:!0,path:"/webgl/class1/demo2",component:pe}),Object(p.jsx)(u.a,{exact:!0,path:"/webgl/class1/demo1",component:de}),Object(p.jsx)(u.a,{exact:!0,path:"/webgl",component:Ne}),Object(p.jsx)(u.a,{exact:!0,path:"/articles/:id",render:function(e){return Object(p.jsx)(Y,Object(s.a)({id:e.match.params.id},e))}}),Object(p.jsx)(u.a,{exact:!0,path:"/articles",component:U}),Object(p.jsx)(u.a,{path:"/",component:C})]})})}!function(e){e[e.DARK=0]="DARK",e[e.LIGHT=1]="LIGHT"}(Te||(Te={})),o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(Le,{})}),document.getElementById("root"))}},[[250,1,2]]]);
//# sourceMappingURL=main.0b923b92.chunk.js.map