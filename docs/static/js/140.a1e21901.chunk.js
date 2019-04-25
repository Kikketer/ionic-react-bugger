(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{841:function(t,e,n){"use strict";n.r(e),n.d(e,"IonReorder",function(){return s}),n.d(e,"IonReorderGroup",function(){return c});var r=n(899),o=n(711),i=n(907),s=function(){function t(){}return t.prototype.onClick=function(t){t.preventDefault(),t.stopImmediatePropagation()},t.prototype.hostData=function(){var t;return{class:(t={},t[""+this.mode]=!0,t)}},t.prototype.render=function(){return Object(o.b)("slot",null,Object(o.b)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"}))},Object.defineProperty(t,"is",{get:function(){return"ion-reorder"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick",capture:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}return t.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.componentDidLoad=function(){return r.a(this,void 0,void 0,function(){var t,e,o,i=this;return r.c(this,function(r){switch(r.label){case 0:return(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:[3,3];case 1:return r.sent(),e=this,[4,t.getScrollElement()];case 2:e.scrollEl=r.sent(),r.label=3;case 3:return o=this,[4,n.e(0).then(n.bind(null,903))];case 4:return o.gesture=r.sent().createGesture({el:this.el,queue:this.queue,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(t){return i.canStart(t)},onStart:function(t){return i.onStart(t)},onMove:function(t){return i.onMove(t)},onEnd:function(){return i.onEnd()}}),this.disabledChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.complete=function(t){return Promise.resolve(this.completeSync(t))},t.prototype.canStart=function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var n=function(t,e){for(var n;t;){if((n=t.parentElement)===e)return t;t=n}}(e,this.el);return!!n&&(t.data=n,!0)},t.prototype.onStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,n=this.cachedHeights;n.length=0;var r=this.el,o=r.children;if(o&&0!==o.length){for(var s=0,c=0;c<o.length;c++){var u=o[c];n.push(s+=u.offsetHeight),u.$ionIndex=c}var h=r.getBoundingClientRect();if(this.containerTop=h.top,this.containerBottom=h.bottom,this.scrollEl){var f=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=f.top+a,this.scrollElBottom=f.bottom-a}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=l(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(d),Object(i.b)()}},t.prototype.onMove=function(t){var e=this.selectedItemEl;if(e){var n=this.autoscroll(t.currentY),r=this.containerTop-n,o=Math.max(r,Math.min(t.currentY,this.containerBottom-n)),s=n+o-t.startY,c=this.itemIndexForTop(o-r);if(c!==this.lastToIndex){var a=l(e);this.lastToIndex=c,Object(i.a)(),this.reorderMove(a,c)}e.style.transform="translateY("+s+"px)"}},t.prototype.onEnd=function(){var t=this,e=this.selectedItemEl;if(this.state=2,e){var n=this.lastToIndex,r=l(e);n===r?(e.style.transition="transform 200ms ease-in-out",setTimeout(function(){return t.completeSync()},200)):this.ionItemReorder.emit({from:r,to:n,complete:this.completeSync.bind(this)}),Object(i.c)()}else this.state=0},t.prototype.completeSync=function(t){var e=this.selectedItemEl;if(e&&2===this.state){var n=this.el.children,r=n.length,o=this.lastToIndex,i=l(e);!0===t&&this.el.insertBefore(e,i<o?n[o+1]:n[o]),Array.isArray(t)&&(t=function(t,e,n){var r=t[e];return t.splice(e,1),t.splice(n,0,r),t.slice()}(t,i,o));for(var s=0;s<r;s++)n[s].style.transform="";e.style.transition="",e.classList.remove(d),this.selectedItemEl=void 0,this.state=0}return t},t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,n=0;for(n=0;n<e.length&&!(e[n]>t);n++);return n},t.prototype.reorderMove=function(t,e){for(var n=this.selectedItemHeight,r=this.el.children,o=0;o<r.length;o++){var i="";o>t&&o<=e?i="translateY("+-n+"px)":o<t&&o>=e&&(i="translateY("+n+"px)"),r[o].style.transform=i}},t.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-u:t>this.scrollElBottom&&(e=u),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},t.prototype.hostData=function(){var t;return{class:(t={},t[""+this.mode]=!0,t["reorder-enabled"]=!this.disabled,t["reorder-list-active"]=0!==this.state,t)}},Object.defineProperty(t,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},queue:{context:"queue"},state:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionItemReorder",method:"ionItemReorder",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"},enumerable:!0,configurable:!0}),t}();function l(t){return t.$ionIndex}var a=60,u=10,d="reorder-selected"},899:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return s});var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function i(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{l(r.next(t))}catch(e){i(e)}}function c(t){try{l(r.throw(t))}catch(e){i(e)}}function l(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,c)}l((r=r.apply(t,e||[])).next())})}function s(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}},907:function(t,e,n){"use strict";function r(){var t=window.TapticEngine;t&&t.selection()}function o(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function i(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function s(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return r})}}]);
//# sourceMappingURL=140.a1e21901.chunk.js.map