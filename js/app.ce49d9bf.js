(function(e){function t(t){for(var r,a,s=t[0],l=t[1],u=t[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-swipeable/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push(["0e00","chunk-vendors"]),n()})({"0e00":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col items-center justify-center h-screen",attrs:{id:"app"}},[n("button",{directives:[{name:"swipeable",rawName:"v-swipeable",value:e.directiveOptions,expression:"directiveOptions"}],staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",on:{swiped:e.swipedEvent}},[e._v(" TEST-BUTTON ")])])},o=[],a={name:"App",data(){return{test:"test",directiveOptions:{type:"horizontal",swipeOut:!0,swipeOutBy:"200px",swipeOutThreshold:"50px",debug:!0}}},methods:{swipedEvent(e){console.log("SWIPED:",e)}}},s=a,l=n("2877"),u=Object(l["a"])(s,i,o,!1,null,null,null),c=u.exports,p=n("49b4");r["a"].config.productionTip=!1,r["a"].directive("swipeable",p["Swipeable"]),new r["a"]({render:e=>e(c)}).$mount("#app")},"49b4":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("d6ad"));t.Swipeable=i.default},d6ad:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{l(r.next(e))}catch(t){o(t)}}function s(e){try{l(r["throw"](e))}catch(t){o(t)}}function l(e){e.done?n(e.value):i(e.value).then(a,s)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var a={swipeOutThreshold:"25%",backTime:.5,swipeTime:.5,type:"horizontal",swipeOut:!1,swipeOutBy:"50%",threshold:5,allowedDirection:null,debug:!1,max:null,swipeAway:!1,swipeAwayBy:"1000%",swipeAwayThreshold:"55%"},s={bind:function(e,t,n){return i(void 0,void 0,void 0,(function(){var i,s,b,w,y,g,m,O,T,x,_,M,E,A,P,S,j,D,k,z,B,N,Y;return o(this,(function(o){switch(o.label){case 0:return[4,v()];case 1:return o.sent(),i=!1,s=!1,b=r(r({},a),t.value),w=b.swipeOutThreshold,y=b.backTime,g=b.swipeTime,m=b.type,O=b.swipeOut,T=b.swipeOutBy,x=b.threshold,_=b.allowedDirection,M=b.debug,E=b.max,A=b.swipeAway,P=b.swipeAwayBy,S=b.swipeAwayThreshold,j=d(_),D=u(w,e,m),k=u(T,e,m),z=u(S,e,m),B=u(P,e,m),N=0,Y=0,e.addEventListener("touchstart",(function(t){if(e.style.transition="",!("vertical"===m&&(e.getBoundingClientRect().top-e.offsetTop)*j<0)){var n=t.changedTouches[0];s?p(M,"START: starting (ALREADY OPEN)"):(N=n.pageX,Y=n.pageY,p(M,"START: starting",N,Y))}}),!1),e.addEventListener("touchmove",(function(t){if(null===i&&"vertical"===m&&(e.getBoundingClientRect().top-e.offsetTop)*j<0)i=!0;else{var n=t.changedTouches[0];if(i)p(M,"MOVE: detectedScroll");else if(l(m,n.pageY,Y,n.pageX,N,x,M)&&null==i)p(M,"MOVE: shouldSkip");else{var r,o;if(r="horizontal"===m?n.pageX-N:n.pageY-Y,!(null===i&&0!==j&&j*r<0)){if(i=!1,t.cancelable&&t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),A){var a=u(P,e,m);o=a<Math.abs(r)?a:Math.abs(r)}else if(O){a=Math.max(k,D,A?B:0);o=a<Math.abs(r)?a:Math.abs(r)}else if(E){a=u(E,e,m);o=a<Math.abs(r)?a:Math.abs(r)}else o=Math.abs(r);return p(M,r,"movedBy"),requestAnimationFrame((function(){if(p(M,"MOVE: translating"),"horizontal"===m){if("right"===_&&r<0)return;if("left"===_&&r>0)return;e.style.transform="translate3d("+Math.sign(r)*o+"px, 0, 0)"}else{if("bottom"===_&&r<0)return;if("top"===_&&r>0)return;null===i&&(i=!1),e.style.transform="translate3d(0, "+Math.sign(r)*o+"px, 0)"}})),!1}i=!0}}}),!1),e.addEventListener("touchend",(function(t){var r=t.changedTouches[0];if(i)return p(M,"END: detectedscroll"),void(i=null);i=null;var o=Math.abs("horizontal"===m?r.pageX-N:r.pageY-Y),a=o>=D,l=o>=z;"horizontal"===m?requestAnimationFrame((function(){if(A&&l?h(e,B,g,y,m,r.pageX-N>0):O&&a?h(e,k,g,y,m,r.pageX-N>0):(c(e,y),s=!1,p(M,"END: resettings")),l||a){s=!0;var t={direction:r.pageX-N>0?"right":"left"};f(n,t,l),p(M,"END: emitting swipe")}})):"vertical"===m&&requestAnimationFrame((function(){if(A&&l&&h(e,B,g,y,m,r.pageY-Y>0),O&&a?(h(e,k,g,y,m,r.pageY-Y>0),s=!0):(c(e,y),s=!1,p(M,"END: resettings")),l||a){var t={direction:r.pageY-Y>0?"top":"bottom"};f(n,t,l),p(M,"END: emitting swipe")}}))}),!1),[2]}}))}))}};function l(e,t,n,i,o,a,s){return p(s,"SKIP_CHECK -> ",r({},arguments)),"horizontal"===e?Math.abs(i-o)<a:Math.abs(t-n)<a}function u(e,t,n){var r;if(null==e.includes)return+e;if(e.includes("%"))r="horizontal"===n?t.clientWidth*+e.slice(0,-1)/100:t.clientHeight*+e.slice(0,-1)/100;else{if(!e.includes("px"))return+e;r=+e.slice(0,-2)}return r}function c(e,t){e.style.transition="transform "+t+"s",e.style.transform="",requestAnimationFrame((function(){setTimeout((function(){e.style.transition=""}),1e3*t)}))}function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&console.log(t)}function f(e,t,n){void 0===n&&(n=!1);var r=n?"swiped-away":"swiped";e.context.$emit(r,t),e.componentInstance?e.componentInstance.$emit(r,t):e.elm.dispatchEvent(new CustomEvent(r,{detail:t}))}function d(e){return e?"top"===e||"left"===e?-1:1:0}function h(e,t,n,r,i,o){void 0===n&&(n=.5);var a=(o?1:-1)*t;e.style.transition="all "+n+"s",e.style.transform="horizontal"==i?"translate3d("+a+"px, 0, 0)":"translate3d(0, "+a+"px, 0)",requestAnimationFrame((function(){setTimeout((function(){e.style.transition=""}),1e3*n)}))}function v(){return new Promise((function(e){requestAnimationFrame((function(){e()}))}))}t.default=s}});
//# sourceMappingURL=app.ce49d9bf.js.map