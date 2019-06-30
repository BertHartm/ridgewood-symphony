/*! iFrame Resizer (iframeSizer.min.js ) - v2.4.8 - 2014-05-20
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2014 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(){"use strict";function a(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function b(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!v;a+=1)v=window[b[a]+"RequestAnimationFrame"];v||c(" RequestAnimationFrame not supported")}function c(a){x.log&&"object"==typeof console&&console.log(r+"[Host page"+t+"]"+a)}function d(a){function b(){function a(){h(v),f()}i(a,v,"resetPage")}function d(a){c(" Removing iFrame: "+a.id),a.parentNode.removeChild(a),c(" --")}function e(){var a=u.substr(s).split(":");return{iframe:document.getElementById(a[0]),id:a[0],height:a[1],width:a[2],type:a[3]}}function j(){var b=a.origin,d=v.iframe.src.split("/").slice(0,3).join("/");if(x.checkOrigin&&(c(" Checking conection is from: "+d),""+b!="null"&&b!==d))throw new Error("Unexpected message received from: "+b+" for "+v.iframe.id+". Message was: "+a.data+". This error can be disabled by adding the checkOrigin: false option.");return!0}function k(){return r===(""+u).substr(0,s)}function l(){var a=v.type in{"true":1,"false":1};return a&&c(" Ignoring init message from meta parent page"),a}function m(){var a=u.substr(u.indexOf(":")+q+6);c(" MessageCallback passed: {iframe: "+v.iframe.id+", message: "+a+"}"),x.messageCallback({iframe:v.iframe,message:a}),c(" --")}function n(){if(null===v.iframe)throw new Error("iFrame ("+v.id+") does not exist on "+t);return!0}function p(){switch(v.type){case"close":d(v.iframe),x.resizedCallback(v);break;case"message":m();break;case"reset":g(v);break;default:b(),x.resizedCallback(v)}}var u=a.data,v={};k()&&(c(" Received: "+u),v=e(),!l()&&n()&&j()&&(o=!1,p()))}function e(){null===u&&(u={x:void 0!==window.pageXOffset?window.pageXOffset:document.documentElement.scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop},c(" Get position: "+u.x+","+u.y))}function f(){null!==u&&(window.scrollTo(u.x,u.y),c(" Set position: "+u.x+","+u.y),u=null)}function g(a){function b(){h(a),j("reset","reset",a.iframe)}c(" Size reset requested by "+("init"===a.type?"host page":"iFrame")),e(),i(b,a,"init")}function h(a){function b(b){a.iframe.style[b]=a[b]+"px",c(" IFrame ("+a.iframe.id+") "+b+" set to "+a[b]+"px")}x.sizeHeight&&b("height"),x.sizeWidth&&b("width")}function i(a,b,d){d!==b.type&&v?(c(" Requesting animation frame"),v(a)):a()}function j(a,b,d){c("["+a+"] Sending msg to iframe ("+b+")"),d.contentWindow.postMessage(r+b,"*")}function k(){function b(a){return""===a&&(i.id=a="iFrameResizer"+n++,c(" Added missing iframe ID: "+a)),a}function d(){c(" IFrame scrolling "+(x.scrolling?"enabled":"disabled")+" for "+k),i.style.overflow=!1===x.scrolling?"hidden":"auto",i.scrolling=!1===x.scrolling?"no":"yes"}function e(){("number"==typeof x.bodyMargin||"0"===x.bodyMargin)&&(x.bodyMarginV1=x.bodyMargin,x.bodyMargin=""+x.bodyMargin+"px")}function f(){return k+":"+x.bodyMarginV1+":"+x.sizeWidth+":"+x.log+":"+x.interval+":"+x.enablePublicMethods+":"+x.autoResize+":"+x.bodyMargin+":"+x.heightCalculationMethod+":"+x.bodyBackground+":"+x.bodyPadding}function h(b){a(i,"load",function(){j("iFrame.onload",b,i),!o&&x.heightCalculationMethod in w&&g({iframe:i,height:0,width:0,type:"init"})}),j("init",b,i)}var i=this,k=b(i.id);d(),e(),h(f())}function l(){function a(a){if("IFRAME"!==a.tagName)throw new TypeError("Expected <IFRAME> tag, found <"+a.tagName+">.");k.call(a)}function b(a){if(a=a||{},"object"!=typeof a)throw new TypeError("Options is not an object.");for(var b in y)y.hasOwnProperty(b)&&(x[b]=a.hasOwnProperty(b)?a[b]:y[b])}window.iFrameResize=function(c,d){b(c),Array.prototype.forEach.call(document.querySelectorAll(d||"iframe"),a)}}function m(a){a.fn.iFrameResize=function(b){return x=a.extend({},y,b),this.filter("iframe").each(k).end()}}var n=0,o=!0,p="message",q=p.length,r="[iFrameSizer]",s=r.length,t="",u=null,v=window.requestAnimationFrame,w={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},x={},y={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,enablePublicMethods:!1,heightCalculationMethod:"offset",interval:32,log:!1,messageCallback:function(){},resizedCallback:function(){},scrolling:!1,sizeHeight:!0,sizeWidth:!1};b(),a(window,"message",d),l(),"jQuery"in window&&m(jQuery)}();
//# sourceMappingURL=../src/iframeResizer.map

(function(e){e.fn.ticketTailorModal=function(){var t=function(t){e("body").append('<div class="tt-widget-modal"><div class="tt-widget-background-shadow"></div><div class="tt-widget-modal-wrapper"><iframe frameBorder="0" scrolling="auto" allowtransparency="true" src="'+t+'?widget=true&bg_fill=true"></iframe><a class="tt-widget-close" href="#close">CLOSE</a></div></div>');e("body").addClass("tt-widget-overflow-hidden");e(".tt-widget-close").click(function(){n();return false});e(".tt-widget-modal").fadeIn(750)};var n=function(){e(".tt-widget-modal").fadeOut(750);setTimeout(function(){e("body").removeClass("tt-widget-overflow-hidden");e(".tt-widget-modal").remove()},750)};this.click(function(){t(e(this).attr("href"));return false});this.attr("target","");return this}})(jQuery);

jQuery( document ).ready(function() { jQuery("a[target='tt-widget-modal']").ticketTailorModal(); });