!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=78)}({0:function(t,e,n){"use strict";var r=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.isMd=function(){return $("#cnblogs_post_body").hasClass("cnblogs-markdown")},e.randomImgurl=function(){var t=Math.floor(78*Math.random());return"".concat(i.animeImages,"/").concat(t,".jpg")},e.randomNum=function(t,e){return parseInt(Math.random()*(t-e+1)+e,10),Math.floor(Math.random()*(t-e+1)+e)},e.pageName=function(){if($("#post_detail").length>0)return"post";if($(".day").length>0)return"index";if($("#taglist_main").length>0)return"tag";if($(".entrylistPosttitle").length>0)return"list";if($("#myposts").length>0)return"tag"},e.userAgent=function(){return $(window).width()>768?"pc":"phone"},e.getClientRect=function(t){var e=t.getBoundingClientRect(),n=e.top,r=e.bottom,o=e.left,a=e.right,i=e.height,c=e.width;return{top:n,bottom:r,left:o,right:a,height:i||r-n,width:c||a-o}},e.hasPostTitle=function(){return 0!==$("#cnblogs_post_body>h1,#cnblogs_post_body>h2,#cnblogs_post_body>h3,#cnblogs_post_body>h4").length},e.poll=function(t,e){if(t)e();else var n=1,r=setInterval((function(){t&&(e(),clearInterval(r)),10===n&&clearInterval(r),n++}),800)},e.unpass=function(t){if(t){var e=document.body;e.style.position="";var n=e.style.top;document.body.scrollTop=document.documentElement.scrollTop=-parseInt(n),e.style.top=""}else{var r=document.body.scrollTop||document.documentElement.scrollTop;document.body.style.cssText+="position:fixed;width:100%;top:-"+r+"px;"}},e.randomArrayElements=function(t){var e,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=t.slice(0),a=t.length,i=a-r;for(;a-- >i;)n=Math.floor((a+1)*Math.random()),e=o[n],o[n]=o[a],o[a]=e;return o.slice(i)},e.getData=function(t,e,n){$.ajax({url:t,type:e,dataType:"jsonp",success:function(t){n(t)},error:function(t){console.log("error",t)}})},e.getDate=function(){var t=new Date,e=t.getFullYear(),n=("0"+(t.getMonth()+1)).slice(-2),r=("0"+t.getDate()).slice(-2);return"".concat(e,"-").concat(n,"-").concat(r)},e.prettyLog=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#ffb3cc";console.log("%c  ".concat(t),"color: ".concat(e,"; font-weight: bold;"))},e.cacheScript=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};$.ajax({type:"GET",dataType:"script",cache:!0,url:t,success:function(){e()}})},e.sleep=function(t){return c.apply(this,arguments)},e.addCss=function(t){$("head").append("<link>"),$("head").children(":last").attr({rel:"stylesheet",type:"text/css",href:t})},e.throttle=e.debounce=e.randomColor=e.randomProperty=void 0;var o=r(n(6)),a=r(n(7)),i=n(4);function c(){return(c=(0,a.default)(o.default.mark((function t(e){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.debounce=function(t,e,n){var r;return function(){var o=this,a=arguments,i=function(){r=null,n||t.apply(o,a)},c=n&&!r;clearTimeout(r),r=setTimeout(i,e),c&&t.apply(o,a)}};e.throttle=function(t,e,n){var r,o=new Date;return function(){var a=this,i=arguments,c=new Date;clearTimeout(r),c-o>=n?(t.apply(a,i),o=c):r=setTimeout(t,e)}};e.randomProperty=function(t){var e,n=0;for(var r in t)Math.random()<1/++n&&(e=r);return e};e.randomColor=function(t){var e="";if("rgba"===t){var n=Math.floor(256*Math.random()),r=Math.floor(256*Math.random()),o=Math.floor(256*Math.random());e="rgba(".concat(n,",").concat(r,",").concat(o,",").concat(.6,")")}else if("16"===t)e="#"+Math.floor(16777215*Math.random()).toString(16);else{var a=t||["#FE0302","#FF7204","#FFAA02","#FFD302","#FFFF00","#A0EE00","#00CD00","#019899","#4266BE","#89D5FF","#CC0273","#CC0273"];e=a[Math.floor(Math.random()*a.length)]}return e}},1:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},13:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,a=Object.create(o.prototype),i=new x(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return F()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function l(){}function h(){}function d(){}var f={};f[o]=function(){return this};var p=Object.getPrototypeOf,g=p&&p(p(E([])));g&&g!==e&&n.call(g,o)&&(f=g);var m=d.prototype=l.prototype=Object.create(f);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function v(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:void 0,done:!0}}return h.prototype=m.constructor=d,d.constructor=h,d[i]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(v.prototype),v.prototype[a]=function(){return this},t.AsyncIterator=v,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new v(c(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(m),m[i]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={theme:{name:"reacg",color:"#FFB3CC",title:"",avatar:"//pic.cnblogs.com/avatar/1501373/20200119190802.png",favicon:"https://guangzan.gitee.io/imagehost/awescnb/favicon.png",headerBackground:"https://guangzan.gitee.io/imagehost/awescnb/images/anime/22.jpg"},darkMode:{enable:!0,autoDark:!1,autoLight:!1},signature:{enable:!1,contents:[]},qrcode:{enable:!1,img:"",desc:""},notice:{enable:!1,text:[]},indexListImg:{enable:!1,imgs:[]},postTopimage:{enable:!0,imgs:[],position:"top"},emoji:{enable:!0,showRecents:!0,recentsCount:20,showPreview:!0,showSearch:!0},highLight:{type:"atomOneDark"},imagebox:{enable:!0},lineNumbers:{enable:!0},catalog:{enable:!0,position:"left"},back2top:{enable:!0,type:"complex"},tools:{enable:!0,initialOpen:!0,draggable:!1},live2d:{enable:!0,page:"all",agent:"pc",model:"haru-01",width:150,height:200,position:"left",gap:"default"},github:{enable:!0,color:"#ffb3cc",url:"https://github.com/guangzan/awescnb"},gitee:{enable:!0,color:"#C71D23",url:"https://gitee.com/guangzan/awescnb"},click:{enable:!0,auto:!1,colors:["#FF1461","#18FF92","#5A87FF","#FBF38C"],size:30,maxCount:50},topProgress:{enable:!1,page:"all",agent:"pc",background:"#FFB3CC",height:"5px"},postSignature:{enable:!1,content:[],licenseLink:""},musicPlayer:{enable:!0,page:"all",agent:"pc",autoplay:!1,volume:.4,lrc:{enable:!0,type:1,color:""},audio:[{name:"404 not found",artist:"REOL",url:"http://music.163.com/song/media/outer/url?id=436016480.mp3",cover:"http://p2.music.126.net/cu1sEIDxXOJm5huZ3Wjs0Q==/18833534672880379.jpg?param=300x300",lrc:"[ti:404 not found][ar:REOL][al:Σ][by:菜籽酱][00:00.000] 作曲 : Reol[00:00.008] 作词 : Reol[00:00.25][00:01.69]fade away...do over again...[00:13.35][00:13.76]歌い始めの一文字目 いつも迷ってる[00:18.57]どうせとりとめのないことだけど[00:22.85]伝わらなきゃもっと意味がない[00:26.84][00:27.38]どうしたってこんなに複雑なのに[00:30.75]噛み砕いてやらなきゃ伝わらない[00:34.18]ほら結局歌詞なんかどうだっていい[00:37.64]僕の音楽なんかこの世になくたっていいんだよ[00:41.32][00:54.74]Everybody don't know why.[00:58.20]Everybody don't know much.[01:01.56]僕は気にしない 君は気付かない[01:04.99]何処にももういないいない[01:08.17][01:08.59]Everybody don't know why.[01:11.86]Everybody don't know much.[01:15.25]忘れていく 忘れられていく[01:18.61]We don't know,We don't know.[01:22.86][01:39.61]目の前 広がる現実世界がまた歪んだ[01:46.30]何度リセットしても[01:47.57]僕は僕以外の誰かには生まれ変われない[01:51.88]「そんなの知ってるよ」[01:53.41]気になるあの子の噂話も[01:56.52]シニカル標的は次の速報[01:59.75][02:00.22]麻痺しちゃってるこっからエスケープ[02:03.57]遠く遠くまで行けるよ[02:06.71][02:07.15]安定なんてない 不安定な世界[02:14.04]安定なんてない きっと明日には忘れるよ[02:20.52][02:22.35]fade away...do over again...[02:33.62][02:34.41]そうだ世界はどこかがいつも嘘くさい[02:37.51]綺麗事だけじゃ大事な人たちすら守れない[02:41.06]くだらない 僕らみんなどこか狂ってるみたい[02:44.48]本当のことなんか全部神様も知らない[02:48.56][03:03.39]Everybody don't know why.[03:06.80]Everybody don't know much.[03:10.17]僕は気にしない 君は気付かない[03:13.62]何処にももういないいない[03:17.02][03:17.46]Everybody don't know why.[03:20.49]Everybody don't know much.[03:23.88]忘れていく 忘れられていく[03:27.18]We don't know,We don't know.[03:29.83]"}]},bodyBackground:{enable:!1,type:"img",value:"https://guangzan.gitee.io/imagehost/awescnb/images/anime/22.jpg",opacity:1,repeat:!1},barrage:{enable:!1,opacity:.6,colors:["#FE0302","#FF7204","#FFAA02","#FFD302","#FFFF00","#A0EE00","#00CD00","#019899","#4266BE","#89D5FF","#CC0273","#CC0273"],barrages:[],indexBarrages:[],postPageBarrages:[]},charts:{enable:!1,pie:{title:"My skills",data:{labels:["JavaScript","css","Vue","React","wechat"],values:[40,30,20,10,20]}}},lock:{enable:!0,background:"",strings:["<i>Powered by</i> webpack.","&amp; Theme in awescnb","快去自定义你的个性签名吧~"]},links:[{name:"awescnb",link:"https://gitee.com/guangzan/awescnb"}]};e.default=r},4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.jqueryui=e.linenumbersjs=e.materialize=e.aplayercss=e.aplayerjs=e.live2djs=e.emojijs=e.viz=e.animeImages=e.themeRepository=e.randomAva=e.dummyimage=e.randomImage=e.live2d=void 0;e.live2d={url:"https://cdn.jsdelivr.net/gh/github923665892/awesCnb-live2dModels",version:"1.7"};e.randomImage="https://api.mz-moe.cn/img.php";e.dummyimage="https://www.dummyimage.com/50";e.randomAva="https://i.pravatar.cc/125?image=3";e.themeRepository="https://guangzan.gitee.io/awescnb";e.animeImages="https://guangzan.gitee.io/imagehost/awescnb/images/anime";e.viz="https://guangzan.gitee.io/imagehost/awescnb/js/rough-viz.js";e.emojijs="https://guangzan.gitee.io/imagehost/awescnb/js/emoji.min.js";e.live2djs="https://guangzan.gitee.io/imagehost/awescnb/js/live2d.min.js";e.aplayerjs="https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.js";e.aplayercss="https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.css";e.materialize="https://cdn.bootcdn.net/ajax/libs/materialize/0.98.0/js/materialize.min.js";e.linenumbersjs="https://cdn.bootcdn.net/ajax/libs/highlightjs-line-numbers.js/2.7.0/highlightjs-line-numbers.min.js";e.jqueryui="https://code.jquery.com/ui/1.12.0/jquery-ui.js"},6:function(t,e,n){t.exports=n(13)},7:function(t,e){function n(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}},78:function(t,e,n){"use strict";(0,n(1)(n(79)).default)()},79:function(t,e,n){"use strict";var r=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(0),a=r(n(14)),i=n(4);var c=function(){$.extend({awesCnb:function(t){t&&$.extend(!0,a.default,t),window.opts=a.default,function(){var t=window.opts.theme.name;"light"===t&&(t="reacg");var e="".concat(i.themeRepository,"/").concat(t,".js");(0,o.cacheScript)(e)}()}})};e.default=c}});