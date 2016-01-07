/*! angular-popups@0.0.1-beta8 | https://github.com/aui/angular-popups */
!function(t){function o(i){if(e[i])return e[i].exports;var u=e[i]={exports:{},id:i,loaded:!1};return t[i].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){e(13),e(10),e(11),e(12),e(15),t.exports={}},function(t,o,e){o=t.exports=e(2)(),o.push([t.id,".ui-popup{position:absolute;font-family:Helvetica,arial,sans-serif}.ui-popup:focus{outline:0}.ui-popup-show{display:block}.ui-popup-modal:before{content:'';position:fixed;left:0;right:0;top:0;bottom:0;background:#000;opacity:.7;-webkit-transform:scale(3);transform:scale(3);-webkit-animation:ui-popup-opacity .15s 1 linear;animation:ui-popup-opacity .15s 1 linear}.ui-popup-modal>*{position:relative}@-webkit-keyframes ui-popup-opacity{0%{opacity:0}to{opacity:.7}}@keyframes ui-popup-opacity{0%{opacity:0}to{opacity:.7}}",""])},function(t,o){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],o=0;o<this.length;o++){var e=this[o];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(o,e){"string"==typeof o&&(o=[[null,o,""]]);for(var i={},u=0;u<this.length;u++){var n=this[u][0];"number"==typeof n&&(i[n]=!0)}for(u=0;u<o.length;u++){var p=o[u];"number"==typeof p[0]&&i[p[0]]||(e&&!p[2]?p[2]=e:e&&(p[2]="("+p[2]+") and ("+e+")"),t.push(p))}},t}},function(t,o,e){"use strict";function i(t){var o=document.createElement("popup");return document.body.appendChild(o),o.appendChild(t[0]),n(o)}var u=e(5),n=u.element,p=e(14),r=e(6),a=function(){};r.createPopup=function(t,o){return r.directive(t,function(){var t={template:o.template,restrict:"AE",transclude:!0,replace:!0,scope:{ngIf:"=",ngShow:"=",ngHide:"=",close:"&",closeAction:"@","for":"@",align:"@",fixed:"@",modal:"@",duration:"@"},controller:["$scope",function(t){this.closeAction=["esc","timeout"],this.close=function(o){t.close(),o&&t.$apply()}}],link:function(t,e,r,l){function s(t){var o=c(r["for"]);u.isUndefined(t)||(u.isObject(t)&&(o=t),t?(e.css("visibility","hidden"),setTimeout(function(){e.css("visibility","visible"),m[d(r.modal)?"showModal":"show"](o),h(t)},0)):(m.close(),h(t)))}function c(t){return document.getElementById(t)}function d(t){return"string"==typeof t}function f(t){var o=t.target,e=o.nodeName,i=/^input|textarea$/i,u=p.current===m,n=i.test(e)&&"button"!==o.type,r=t.keyCode;u&&!n&&27===r&&l.close(t)}function b(t){e[0].contains(t.target)||l.close(t)}function g(){r.duration&&(g.timer=setTimeout(function(){l.close(!0)},Number(r.duration)))}function h(t){l.closeAction.forEach(function(o){switch(o){case"esc":t?v.on("keydown",f):v.off("keydown",f);break;case"timeout":t?g():clearTimeout(g.timer);break;case"outerchick":t?v.on("ontouchend",b).on("click",b):v.off("ontouchend",b).off("click",b);break;case"click":t?e.on(o,l.close):e.off(o,l.close)}})}var m=new p({node:e[0],fixed:d(r.fixed),align:r.align,showElement:a,hideElement:a,removeElement:a}),x=i(e),v=n(document);r.closeAction&&(l.closeAction=r.closeAction.split(/\s+/)),r.ngIf&&t.$watch("ngIf",s),r.ngShow&&t.$watch("ngShow",s),r.ngHide&&t.$watch("ngHide",function(t){s(!t)}),e.one("$destroy",function(){s(!1),m.remove(),x.remove()}),(o.link||function(){}).apply(this,arguments)}};return u.extend(t.scope,o.scope),t})},t.exports=r},function(t,o,e){function i(t,o){for(var e=0;e<t.length;e++){var i=t[e],u=f[i.id];if(u){u.refs++;for(var n=0;n<u.parts.length;n++)u.parts[n](i.parts[n]);for(;n<i.parts.length;n++)u.parts.push(l(i.parts[n],o))}else{for(var p=[],n=0;n<i.parts.length;n++)p.push(l(i.parts[n],o));f[i.id]={id:i.id,refs:1,parts:p}}}}function u(t){for(var o=[],e={},i=0;i<t.length;i++){var u=t[i],n=u[0],p=u[1],r=u[2],a=u[3],l={css:p,media:r,sourceMap:a};e[n]?e[n].parts.push(l):o.push(e[n]={id:n,parts:[l]})}return o}function n(t,o){var e=h(),i=v[v.length-1];if("top"===t.insertAt)i?i.nextSibling?e.insertBefore(o,i.nextSibling):e.appendChild(o):e.insertBefore(o,e.firstChild),v.push(o);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(o)}}function p(t){t.parentNode.removeChild(t);var o=v.indexOf(t);o>=0&&v.splice(o,1)}function r(t){var o=document.createElement("style");return o.type="text/css",n(t,o),o}function a(t){var o=document.createElement("link");return o.rel="stylesheet",n(t,o),o}function l(t,o){var e,i,u;if(o.singleton){var n=x++;e=m||(m=r(o)),i=s.bind(null,e,n,!1),u=s.bind(null,e,n,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=a(o),i=d.bind(null,e),u=function(){p(e),e.href&&URL.revokeObjectURL(e.href)}):(e=r(o),i=c.bind(null,e),u=function(){p(e)});return i(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;i(t=o)}else u()}}function s(t,o,e,i){var u=e?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(o,u);else{var n=document.createTextNode(u),p=t.childNodes;p[o]&&t.removeChild(p[o]),p.length?t.insertBefore(n,p[o]):t.appendChild(n)}}function c(t,o){var e=o.css,i=o.media;o.sourceMap;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function d(t,o){var e=o.css,i=(o.media,o.sourceMap);i&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var u=new Blob([e],{type:"text/css"}),n=t.href;t.href=URL.createObjectURL(u),n&&URL.revokeObjectURL(n)}var f={},b=function(t){var o;return function(){return"undefined"==typeof o&&(o=t.apply(this,arguments)),o}},g=b(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=b(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,x=0,v=[];t.exports=function(t,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=g()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var e=u(t);return i(e,o),function(t){for(var n=[],p=0;p<e.length;p++){var r=e[p],a=f[r.id];a.refs--,n.push(a)}if(t){var l=u(t);i(l,o)}for(var p=0;p<n.length;p++){var a=n[p];if(0===a.refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete f[a.id]}}}};var y=function(){var t=[];return function(o,e){return t[o]=e,t.filter(Boolean).join("\n")}}()},function(t,o){t.exports=angular},function(t,o,e){t.exports=e(5).module("angular-popups",[])},function(t,o,e){o=t.exports=e(2)(),o.i(e(1),""),o.push([t.id,"body,html{-webkit-tap-highlight-color:rgba(255,255,255,0)}.ui-bubble{position:relative;background:hsla(50,89%,93%,.9);border:1px solid rgba(206,157,72,.7);border-radius:3px;outline:0;background-clip:padding-box;line-height:1.428571429;color:#cd9c4f}.ui-popup-focus .ui-bubble{box-shadow:0 0 5px rgba(0,0,0,.1)}.ui-bubble-content{padding:5px}.ui-popup-top-left .ui-bubble,.ui-popup-top-right .ui-bubble,.ui-popup-top .ui-bubble{top:-5px}.ui-popup-bottom-left .ui-bubble,.ui-popup-bottom-right .ui-bubble,.ui-popup-bottom .ui-bubble{top:5px}.ui-popup-left-bottom .ui-bubble,.ui-popup-left-top .ui-bubble,.ui-popup-left .ui-bubble{left:-5px}.ui-popup-right-bottom .ui-bubble,.ui-popup-right-top .ui-bubble,.ui-popup-right .ui-bubble{left:5px}.ui-bubble:after,.ui-bubble:before{content:'';position:absolute;display:none;width:0;height:0;overflow:hidden;border:5px dashed transparent}.ui-popup-anchor .ui-bubble:after,.ui-popup-anchor .ui-bubble:before{display:block}.ui-popup-top-left .ui-bubble:before,.ui-popup-top-right .ui-bubble:before,.ui-popup-top .ui-bubble:before{bottom:-10px;border-top:5px solid #cd9c4f}.ui-popup-top-left .ui-bubble:after,.ui-popup-top-right .ui-bubble:after,.ui-popup-top .ui-bubble:after{bottom:-9px;border-top:5px solid #fdf8df}.ui-popup-top-left .ui-bubble:after,.ui-popup-top-left .ui-bubble:before{left:9px}.ui-popup-top .ui-bubble:after,.ui-popup-top .ui-bubble:before{left:50%;margin-left:-5px}.ui-popup-top-right .ui-bubble:after,.ui-popup-top-right .ui-bubble:before{right:9px}.ui-popup-bottom-left .ui-bubble:before,.ui-popup-bottom-right .ui-bubble:before,.ui-popup-bottom .ui-bubble:before{top:-10px;border-bottom:5px solid #cd9c4f}.ui-popup-bottom-left .ui-bubble:after,.ui-popup-bottom-right .ui-bubble:after,.ui-popup-bottom .ui-bubble:after{top:-9px;border-bottom:5px solid #fdf8df}.ui-popup-bottom-left .ui-bubble:after,.ui-popup-bottom-left .ui-bubble:before{left:9px}.ui-popup-bottom .ui-bubble:after,.ui-popup-bottom .ui-bubble:before{margin-left:-5px;left:50%}.ui-popup-bottom-right .ui-bubble:after,.ui-popup-bottom-right .ui-bubble:before{right:9px}.ui-popup-left-bottom .ui-bubble:before,.ui-popup-left-top .ui-bubble:before,.ui-popup-left .ui-bubble:before{right:-10px;border-left:5px solid #cd9c4f}.ui-popup-left-bottom .ui-bubble:after,.ui-popup-left-top .ui-bubble:after,.ui-popup-left .ui-bubble:after{right:-9px;border-left:5px solid #fdf8df}.ui-popup-left-top .ui-bubble:after,.ui-popup-left-top .ui-bubble:before{top:9px}.ui-popup-left .ui-bubble:after,.ui-popup-left .ui-bubble:before{margin-top:-5px;top:50%}.ui-popup-left-bottom .ui-bubble:after,.ui-popup-left-bottom .ui-bubble:before{bottom:9px}.ui-popup-right-bottom .ui-bubble:before,.ui-popup-right-top .ui-bubble:before,.ui-popup-right .ui-bubble:before{left:-10px;border-right:5px solid #cd9c4f}.ui-popup-right-bottom .ui-bubble:after,.ui-popup-right-top .ui-bubble:after,.ui-popup-right .ui-bubble:after{left:-9px;border-right:5px solid #fdf8df}.ui-popup-right-top .ui-bubble:after,.ui-popup-right-top .ui-bubble:before{top:9px}.ui-popup-right .ui-bubble:after,.ui-popup-right .ui-bubble:before{margin-top:-5px;top:50%}.ui-popup-right-bottom .ui-bubble:after,.ui-popup-right-bottom .ui-bubble:before{bottom:9px}",""])},function(t,o,e){o=t.exports=e(2)(),o.i(e(1),""),o.push([t.id,".ui-dialog{position:relative;background-color:#fff;border:1px solid rgba(0,0,0,.3);border-radius:6px;outline:0;background-clip:padding-box;font-size:14px;line-height:1.428571429;text-align:left;color:#333}@media (max-width:768px){.ui-dialog{width:90vw}}.ui-popup-focus .ui-dialog{box-shadow:0 0 8px rgba(0,0,0,.1)}.ui-popup-modal .ui-dialog{box-shadow:none}.ui-dialog-header{white-space:nowrap}.ui-dialog-header:after{content:'';display:block;height:0;border-bottom:1px solid #e5e5e5}.ui-dialog-close{position:relative;float:right;top:13px;right:13px;margin-top:-1px;padding:0;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;cursor:pointer;background:transparent;border:0;-webkit-appearance:none;-webkit-tap-highlight-color:rgba(255,255,255,0)}.ui-dialog-close:active,.ui-dialog-close:focus,.ui-dialog-close:hover{color:#000;text-decoration:none;cursor:pointer;outline:0;opacity:.5}.ui-dialog-title{margin:0;line-height:1.428571429;min-height:16.428571429px;padding:15px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:700;cursor:default}.ui-dialog-body{padding:20px;text-align:center}.ui-dialog-content{display:inline-block;position:relative;vertical-align:middle;text-align:left}.ui-dialog-footer{padding:0 20px 20px;text-align:center}.ui-dialog-footer:after{content:'';display:block;clear:both;height:0;overflow:hidden}.ui-dialog-statusbar{float:left;margin-right:20px;padding:6px 0;line-height:1.428571429;font-size:14px;color:#888;white-space:nowrap}.ui-dialog-statusbar label:hover{color:#333}.ui-dialog-statusbar .label,.ui-dialog-statusbar input{vertical-align:middle}.ui-dialog-buttons{float:right;white-space:nowrap}.ui-dialog-footer button+button{margin-bottom:0;margin-left:5px}.ui-dialog-footer button{width:auto;overflow:visible;display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.428571429;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;background-image:none;border:1px solid transparent;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.ui-dialog-footer button:focus{outline:thin dotted #333;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.ui-dialog-footer button:focus,.ui-dialog-footer button:hover{color:#333;text-decoration:none}.ui-dialog-footer button:active{background-image:none;outline:0;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.ui-dialog-footer button:disabled{pointer-events:none;cursor:not-allowed;opacity:.65;box-shadow:none}.ui-dialog-footer button{color:#333;background-color:#fff;border-color:#ccc}.ui-dialog-footer button:active,.ui-dialog-footer button:focus,.ui-dialog-footer button:hover{color:#333;background-color:#ebebeb;border-color:#adadad}.ui-dialog-footer button:active{background-image:none}.ui-dialog-footer button:disabled,.ui-dialog-footer button:disabled:active,.ui-dialog-footer button:disabled:focus,.ui-dialog-footer button:disabled:hover{background-color:#fff;border-color:#ccc}.ui-dialog-footer button[autofocus]{color:#fff;background-color:#428bca;border-color:#357ebd}.ui-dialog-footer button[autofocus]:active,.ui-dialog-footer button[autofocus]:focus,.ui-dialog-footer button[autofocus]:hover{color:#fff;background-color:#3276b1;border-color:#285e8e}.ui-dialog-footer button[autofocus]:active{background-image:none}.ui-popup-top-left .ui-dialog,.ui-popup-top-right .ui-dialog,.ui-popup-top .ui-dialog{top:-8px}.ui-popup-bottom-left .ui-dialog,.ui-popup-bottom-right .ui-dialog,.ui-popup-bottom .ui-dialog{top:8px}.ui-popup-left-bottom .ui-dialog,.ui-popup-left-top .ui-dialog,.ui-popup-left .ui-dialog{left:-8px}.ui-popup-right-bottom .ui-dialog,.ui-popup-right-top .ui-dialog,.ui-popup-right .ui-dialog{left:8px}.ui-dialog:after,.ui-dialog:before{content:'';position:absolute;display:none;width:0;height:0;overflow:hidden;border:8px dashed transparent}.ui-popup-anchor .ui-dialog:after,.ui-popup-anchor .ui-dialog:before{display:block}.ui-popup-top-left .ui-dialog:before,.ui-popup-top-right .ui-dialog:before,.ui-popup-top .ui-dialog:before{bottom:-16px;border-top:8px solid #7c7c7c}.ui-popup-top-left .ui-dialog:after,.ui-popup-top-right .ui-dialog:after,.ui-popup-top .ui-dialog:after{bottom:-15px;border-top:8px solid #fff}.ui-popup-top-left .ui-dialog:after,.ui-popup-top-left .ui-dialog:before{left:15px}.ui-popup-top .ui-dialog:after,.ui-popup-top .ui-dialog:before{left:50%;margin-left:-8px}.ui-popup-top-right .ui-dialog:after,.ui-popup-top-right .ui-dialog:before{right:15px}.ui-popup-bottom-left .ui-dialog:before,.ui-popup-bottom-right .ui-dialog:before,.ui-popup-bottom .ui-dialog:before{top:-16px;border-bottom:8px solid #7c7c7c}.ui-popup-bottom-left .ui-dialog:after,.ui-popup-bottom-right .ui-dialog:after,.ui-popup-bottom .ui-dialog:after{top:-15px;border-bottom:8px solid #fff}.ui-popup-bottom-left .ui-dialog:after,.ui-popup-bottom-left .ui-dialog:before{left:15px}.ui-popup-bottom .ui-dialog:after,.ui-popup-bottom .ui-dialog:before{margin-left:-8px;left:50%}.ui-popup-bottom-right .ui-dialog:after,.ui-popup-bottom-right .ui-dialog:before{right:15px}.ui-popup-left-bottom .ui-dialog:before,.ui-popup-left-top .ui-dialog:before,.ui-popup-left .ui-dialog:before{right:-16px;border-left:8px solid #7c7c7c}.ui-popup-left-bottom .ui-dialog:after,.ui-popup-left-top .ui-dialog:after,.ui-popup-left .ui-dialog:after{right:-15px;border-left:8px solid #fff}.ui-popup-left-top .ui-dialog:after,.ui-popup-left-top .ui-dialog:before{top:15px}.ui-popup-left .ui-dialog:after,.ui-popup-left .ui-dialog:before{margin-top:-8px;top:50%}.ui-popup-left-bottom .ui-dialog:after,.ui-popup-left-bottom .ui-dialog:before{bottom:15px}.ui-popup-right-bottom .ui-dialog:before,.ui-popup-right-top .ui-dialog:before,.ui-popup-right .ui-dialog:before{left:-16px;border-right:8px solid #7c7c7c}.ui-popup-right-bottom .ui-dialog:after,.ui-popup-right-top .ui-dialog:after,.ui-popup-right .ui-dialog:after{left:-15px;border-right:8px solid #fff}.ui-popup-right-top .ui-dialog:after,.ui-popup-right-top .ui-dialog:before{top:15px}.ui-popup-right .ui-dialog:after,.ui-popup-right .ui-dialog:before{margin-top:-8px;top:50%}.ui-popup-right-bottom .ui-dialog:after,.ui-popup-right-bottom .ui-dialog:before{bottom:15px}.ui-dialog-loading{vertical-align:middle;display:inline-block;overflow:hidden;width:32px;height:32px;font-size:0;text-indent:-999em;color:#666;width:100%\\9;text-indent:0;line-height:32px\\9;text-align:center\\9;font-size:12px\\9}.ui-dialog-loading:after{position:absolute;content:'';width:3px;height:3px;margin:14.5px 0 0 14.5px;border-radius:100%;box-shadow:0 -10px 0 1px #ccc,10px 0 #ccc,0 10px #ccc,-10px 0 #ccc,-7px -7px 0 .5px #ccc,7px -7px 0 1.5px #ccc,7px 7px #ccc,-7px 7px #ccc;-webkit-transform:rotate(1turn);-webkit-animation:ui-dialog-loading 1.5s infinite linear;transform:rotate(1turn);animation:ui-dialog-loading 1.5s infinite linear;display:none\\9}@-webkit-keyframes ui-dialog-loading{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes ui-dialog-loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""])},function(t,o,e){o=t.exports=e(2)(),o.i(e(1),""),o.push([t.id,".ui-notice{padding:10px;border:1px solid rgba(0,0,0,9);border-radius:5px;background:rgba(0,0,0,.7);color:#fff}",""])},function(t,o,e){"use strict";e(16);var i=e(3);i.createPopup("bubble",{template:'<div class="ui-popup"><div class="ui-bubble"><div ng-transclude class="ui-bubble-content"></div></div></div>',link:function(t,o,e,i){e.closeAction||(i.closeAction=["esc","timeout","outerchick"])}})},function(t,o,e){"use strict";function i(t,o){p.directive(t,function(){return u.extend({require:"^dialog",restrict:"AE",transclude:!0,link:function(t,o,e,i){t.$dialogId="ui-dialog"+t.$parent.$id,t.$close=i.close},replace:!0},o)})}e(17);var u=e(5),n=u.element,p=e(3),r='<div class="ui-dialog"><div class="ui-dialog-header"></div><div class="ui-dialog-body"></div><div class="ui-dialog-footer"></div></div>',a='<div class="ui-dialog-title" id="{{$dialogId}}-title" ng-transclude></div>',l='<button class="ui-dialog-close" aria-label="Close" type="button"><span aria-hidden="true">&times;</span></button>',s='<div class="ui-dialog-content" id="{{$dialogId}}-content" ng-transclude></div>',c='<span class="ui-dialog-statusbar" ng-transclude></span>',d='<span class="ui-dialog-buttons" ng-transclude></span>';p.createPopup("dialog",{template:'<div class="ui-popup" aria-labelledby="{{$dialogId}}-title" aria-describedby="{{$dialogId}}-content" ng-transclude></div>',link:function(t,o,e,i){function u(t){var o=document.createElement("div");return o.innerHTML=t,o.firstChild}function p(t,o){o&&t.appendChild(o)}var a=o[0],s=u(r);t.$dialogId="ui-dialog"+t.$id;var c=function(t){var o="dialog",e=o+"-"+t,i=o+"\\:"+t,u="["+e+"]",n="["+i+"]",p=".ui-dialog-"+t;return a.querySelector([e,i,u,n,p].join(","))},d=function(t){return s.querySelector(".ui-dialog-"+t)},f=e.close?u(l):null,b=c("title"),g=c("content"),h=c("statusbar"),m=c("buttons"),x=d("header"),v=d("body"),y=d("footer");p(x,f),p(x,b),p(v,g),p(y,h),p(y,m),b||n(x).remove(),h||m||n(y).remove(),f&&f.addEventListener("click",i.close,!1),p(a,s)}}),i("dialogTitle",{template:a}),i("dialogContent",{template:s}),i("dialogStatusbar",{template:c}),i("dialogButtons",{template:d})},function(t,o,e){"use strict";e(18);var i=e(3);i.createPopup("notice",{template:'<div class="ui-popup"><div class="ui-notice" ng-transclude></div></div>'})},function(t,o,e){"use strict";e(19);var i=e(3);i.createPopup("popup",{template:'<div class="ui-popup"><div ng-transclude></div></div>'})},function(t,o){"use strict";function e(t){this.options=Object.create(e.defaults),Object.keys(t||{}).forEach(function(o){var e=t[o];"undefined"!=typeof e&&(this.options[o]=e)},this);var o=this.options.node||document.createElement("div");o.style.position="absolute",o.setAttribute("tabindex","-1"),document.body.appendChild(o),this.options.hideElement(o),this.node=o,this.destroyed=!1}function i(t){return document.documentElement["client"+t]}function u(t){var o={Left:"pageXOffset",Top:"pageYOffset"};return window[o[t]]}function n(t){t.parentNode.removeChild(t)}function p(t){t.style.display="block"}function r(t){t.style.display="none"}function a(t,o){return t.className.match(new RegExp("(\\s|^)"+o+"(\\s|$)"))}function l(t,o){a(t,o)||(t.className+=" "+o)}function s(t,o){if(a(t,o)){var e=new RegExp("(\\s|^)"+o+"(\\s|$)");t.className=t.className.replace(e," ")}}function c(t,o,e){t.addEventListener(o,e,!1)}function d(t,o,e){t.removeEventListener(o,e)}function f(){try{var t=document.activeElement,o=t.contentDocument,e=o&&o.activeElement||t;return e}catch(i){}}e.defaults={node:null,fixed:!1,autofocus:!0,align:"bottom left",className:"ui-popup",showElement:p,hideElement:r,removeElement:n},e.prototype={constructor:e,destroyed:!0,open:!1,returnValue:"",show:function(t){if(this.destroyed)return this;var o=this.node;return this.__activeElement=f(),this.open=!0,this.anchor=t,l(o,this.options.className),l(o,this.__name("show")),o.setAttribute("role",this.modal?"alertdialog":"dialog"),this.__show||(this.focus=this.focus.bind(this),this.reset=this.reset.bind(this),this.__show=!0),this.modal&&(l(o,this.__name("modal")),c(document,"focusin",this.focus)),this.options.showElement(o),c(window,"resize",this.reset),this.reset().focus(),this},showModal:function(){return this.modal=!0,this.show.apply(this,arguments)},close:function(t){if(!this.destroyed&&this.open){var o=this.node;void 0!==t&&(this.returnValue=t),s(o,this.__name("show")),s(o,this.__name("modal")),this.options.hideElement(o),this.open=!1,this.blur(),d(document,"focusin",this.focus),d(window,"resize",this.reset)}return this},remove:function(){if(this.destroyed)return this;this.open&&this.close(),e.current===this&&(e.current=null),this.options.removeElement(this.node);for(var t in this)delete this[t];return this},reset:function(){if(this.open){var t=this.anchor;return"string"==typeof t&&(t=this.anchor=document.querySelector(t)),this.node.style.position=this.options.fixed?"fixed":"absolute",t?this.__anchor(t):this.__center(),this}},focus:function(){var t=this.node,o=e.current,i=this.zIndex=e.zIndex++;if(o&&o!==this&&o.blur(!1),!t.contains(f())){var u=t.querySelector("[autofocus]");!this.__autofocus&&u?this.__autofocus=!0:u=t,this.__focus(u)}return t.style.zIndex=i,e.current=this,l(t,this.__name("focus")),this},blur:function(){var t=this.__activeElement,o=f(),e=arguments[0],i=this.node;return e!==!1&&i.contains(o)&&this.__focus(t),this.__autofocus=!1,s(i,this.__name("focus")),this},__name:function(t){return this.options.className+"-"+t},__focus:function(t){try{this.options.autofocus&&!/^iframe$/i.test(t.nodeName)&&t.focus()}catch(o){}},__center:function(){var t=this.node,o=this.options.fixed,e=o?0:u("Left"),n=o?0:u("Top"),p=i("Width"),r=i("Height"),a=t.offsetWidth,l=t.offsetHeight,s=(p-a)/2+e,c=382*(r-l)/1e3+n,d=t.style;d.left=Math.max(parseInt(s),e)+"px",d.top=Math.max(parseInt(c),n)+"px"},__anchor:function(t){function o(){if(e){var o=window,i=document.documentElement,u=t.getBoundingClientRect();return{top:u.top+o.pageYOffset-i.clientTop,left:u.left+o.pageXOffset-i.clientLeft}}return{left:t.pageX,top:t.pageY}}var e=t.parentNode&&t,n=this.node;if(this.__anchorClass&&(s(n,this.__anchorClass),s(n,this.__name("anchor"))),e&&t.offsetLeft*t.offsetTop<0)return this.__center();var p=this,r=this.options,a=r.fixed,c=i("Width"),d=i("Height"),f=u("Left"),b=u("Top"),g=n.offsetWidth,h=n.offsetHeight,m=t.offsetWidth||0,x=t.offsetHeight||0,v=o(),y=v.left,w=v.top,k=a?y-f:y,$=a?w-b:w,_=a?0:f,E=a?0:b,C=_+c-g,P=E+d-h,L={},I=r.align.split(" "),A=this.__name(""),N={top:"bottom",bottom:"top",left:"right",right:"left"},S={top:"top",bottom:"top",left:"left",right:"left"},O=[{top:$-h,bottom:$+x,left:k-g,right:k+m},{top:$,bottom:$-h+x,left:k,right:k-g+m}],R={left:k+m/2-g/2,top:$+x/2-h/2},T={left:[_,C],top:[E,P]};I.forEach(function(t,o){O[o][t]>T[S[t]][1]&&(t=I[o]=N[t]),O[o][t]<T[S[t]][0]&&(I[o]=N[t])}),I[1]||(S[I[1]]="left"===S[I[0]]?"top":"left",O[1][I[1]]=R[S[I[1]]]),e&&(A+=I.join("-"),p.__anchorClass=A,l(n,A),l(n,this.__name("anchor"))),L[S[I[0]]]=parseInt(O[0][I[0]]),L[S[I[1]]]=parseInt(O[1][I[1]]),n.style.left=L.left+"px",n.style.top=L.top+"px"}},e.zIndex=1024,e.current=null,t.exports=e},function(t,o,e){"use strict";function i(t){var o=document.createElement("div");return o.innerHTML=t,o.firstChild}var u=e(5),n=e(6);n.provider("Popup",function(){var t=this,o=!1,e=function(){},n={title:"Message",okValue:"Ok",cancelValue:"Cancel"},p={open:!0,title:null,content:null,duration:null,okValue:null,cancelValue:null,ok:null,cancel:null,notice:!1,$destroy:e,$ok:function(){this.ok&&this.ok()!==!1&&(this.open=!1,this.$destroy())},$cancel:function(){this.cancel&&this.cancel()!==!1&&(this.open=!1,this.$destroy())},$close:function(){this.cancel?this.$cancel():this.$ok()}},r={close:function(){p.$close()}},a='<dialog ng-if="$$Popup.open && !$$Popup.notice" modal fixed close="$$Popup.$close()"><div dialog-title ng-bind="$$Popup.title"></div><div dialog-content ng-bind="$$Popup.content"></div><div dialog-buttons><button ng-if="$$Popup.ok" autofocus ng-click="$$Popup.$ok()">{{$$Popup.okValue}}</button><button ng-if="$$Popup.cancel" ng-click="$$Popup.$cancel()">{{$$Popup.cancelValue}}</button></dialog>',l='<notice ng-if="$$Popup.open && $$Popup.notice" fixed duration="{{$$Popup.duration}}" close="$$Popup.$close()">{{$$Popup.content}}</notice>';u.extend(this,n),this.$get=["$compile","$rootScope",function(n,s){function c(e){if(!o){var c=i(a);document.body.appendChild(c),n(c)(s);var d=i(l);document.body.appendChild(d),n(d)(s),o=!0}var f=Object.create(p);return f=u.extend(f,t,e),f.$destroy=function(){delete s.$$Popup},s.$$Popup=f,r}return{alert:function(t,o){return c({content:t,ok:o||e})},confirm:function(t,o,i){return c({content:t,ok:o||e,cancel:i||e})},notice:function(t,o,i){return c({content:t,duration:o||2e3,ok:i||e,notice:!0})}}}]})},function(t,o,e){var i=e(7);"string"==typeof i&&(i=[[t.id,i,""]]);e(4)(i,{});i.locals&&(t.exports=i.locals)},function(t,o,e){var i=e(8);"string"==typeof i&&(i=[[t.id,i,""]]);e(4)(i,{});i.locals&&(t.exports=i.locals)},function(t,o,e){var i=e(9);"string"==typeof i&&(i=[[t.id,i,""]]);e(4)(i,{});i.locals&&(t.exports=i.locals)},function(t,o,e){var i=e(1);"string"==typeof i&&(i=[[t.id,i,""]]);e(4)(i,{});i.locals&&(t.exports=i.locals)}]);
//# sourceMappingURL=angular-popups.js.map