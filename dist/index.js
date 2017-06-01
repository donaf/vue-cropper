!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-cropper",[],t):"object"==typeof exports?exports["vue-cropper"]=t():e["vue-cropper"]=t()}(this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var i=r[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,r){r(7);var o=r(5)(r(1),r(6),"data-v-7f57ac98",null);e.exports=o.exports},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,canScale:!0,crop:!1,cropping:!1,cropW:0,cropH:0,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0}},props:{img:{type:String,default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"}},computed:{cropInfo:function(){return this.cropOffsertY>20?"-21px":"1px"}},watch:{img:function(){var e=this;this.loading=!0,this.scale=1,this.clearCrop(),this.$refs.cropperImg.onload=function(){e.reload()}}},methods:{startMove:function(e){this.move&&!this.crop?(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg),window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),this.moveX=(e.clientX?e.clientX:e.touches[0].clientX)-this.x,this.moveY=(e.clientY?e.clientY:e.touches[0].clientY)-this.y):(this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=e.offsetX?e.offsetX:e.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=e.offsetY?e.offsetY:e.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX=e.clientX?e.clientX:e.touches[0].clientX,this.cropY=e.clientY?e.clientY:e.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0)},moveImg:function(e){var t=this,r=e.clientX?e.clientX:e.touches[0].clientX,o=e.clientY?e.clientY:e.touches[0].clientY;this.$nextTick(function(){t.x=~~(r-t.moveX),t.y=~~(o-t.moveY)})},leaveImg:function(e){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg)},scaleImg:function(){this.canScale&&window.addEventListener("mousewheel",this.changeSize)},cancleScale:function(){this.canScale&&window.removeEventListener("mousewheel",this.changeSize)},changeSize:function(e){e.deltaY<0?this.scale+=.05:this.scale>.05?this.scale-=.05:this.scale,e.preventDefault()},createCrop:function(e){var t=this,r=e.clientX?e.clientX:e.touches[0].clientX,o=e.clientY?e.clientY:e.touches[0].clientY;this.$nextTick(function(){var e=~~(r-t.cropX),i=~~(o-t.cropY);e>0?(t.cropW=e,t.cropOffsertX=t.cropChangeX):(t.cropW=Math.abs(e),t.cropOffsertX=t.cropChangeX+e),i>0?(t.cropH=i,t.cropOffsertY=t.cropChangeY):(t.cropH=Math.abs(i),t.cropOffsertY=t.cropChangeY+i)})},endCrop:function(){0===this.cropW&&0===this.cropH&&(this.cropping=!1),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop:function(){this.crop=!0,console.log("开始截图")},stopCrop:function(){this.crop=!1,console.log("停止截图")},clearCrop:function(){this.cropping=!1,this.cropW=0,this.cropH=0,console.log("清除截图")},cropMove:function(e){window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop),this.cropX=(e.clientX?e.clientX:e.touches[0].clientX)-this.cropOffsertX,this.cropY=(e.clientY?e.clientY:e.touches[0].clientY)-this.cropOffsertY},moveCrop:function(e){var t=this,r=e.clientX?e.clientX:e.touches[0].clientX,o=e.clientY?e.clientY:e.touches[0].clientY;this.$nextTick(function(){var e=~~(r-t.cropX),i=~~(o-t.cropY);e<=1?t.cropOffsertX=1:~~(e+t.cropW)>t.w?t.cropOffsertX=t.w-t.cropW-1:t.cropOffsertX=e,i<=1?t.cropOffsertY=1:~~(i+t.cropH)>t.h?t.cropOffsertY=t.h-t.cropH-1:t.cropOffsertY=i})},leaveCrop:function(e){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop)},getCropDate:function(){var e=document.createElement("canvas");if(e.width=this.cropW,e.height=this.cropH,0!=~~e.width){var t=e.getContext("2d"),r=this.x-this.cropOffsertX+this.trueWidth*(1-this.scale)/2,o=this.y-this.cropOffsertY+this.trueHeight*(1-this.scale)/2;t.drawImage(this.$refs.cropperOutput,r,o,this.trueWidth*this.scale,this.trueHeight*this.scale)}else{e.width=this.trueWidth*this.scale,e.height=this.trueHeight*this.scale;e.getContext("2d").drawImage(this.$refs.cropperOutput,0,0,this.trueWidth*this.scale,this.trueHeight*this.scale)}return e.toDataURL("image/"+this.outputType,this.outputSize)},finish:function(){},reload:function(){var e=this;this.w=window.getComputedStyle(this.$refs.cropper).width.replace("px",""),this.h=window.getComputedStyle(this.$refs.cropper).height.replace("px",""),this.trueWidth=this.$refs.cropperImg.width,this.trueHeight=this.$refs.cropperImg.height,this.trueWidth>this.w&&(this.scale=this.w/this.trueWidth),this.trueHeight*this.scale>this.h&&(this.scale=this.h/this.trueHeight),this.$nextTick(function(){e.x=-(e.trueWidth-e.trueWidth*e.scale)/2+(e.w-e.trueWidth*e.scale)/2,e.y=-(e.trueHeight-e.trueHeight*e.scale)/2+(e.h-e.trueHeight*e.scale)/2,e.loading=!1,console.log("reload")})},refresh:function(){console.log("refresh")}},mounted:function(){var e=this;this.$refs.cropperImg.onload=function(){e.reload()}}}},function(e,t,r){"use strict";var o=r(0);e.exports=o},function(e,t,r){t=e.exports=r(4)(),t.push([e.i,'.vue-cropper[data-v-7f57ac98]{position:relative;width:100%;height:100%;box-sizing:border-box;user-select:none;direction:ltr;touch-action:none;overflow:hidden;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-box-canvas[data-v-7f57ac98],.cropper-box[data-v-7f57ac98],.cropper-crop-box[data-v-7f57ac98],.cropper-drag-box[data-v-7f57ac98],.cropper-face[data-v-7f57ac98]{position:absolute;top:0;right:0;bottom:0;left:0}.cropper-box-canvas img[data-v-7f57ac98]{position:relative;user-select:none}.cropper-move[data-v-7f57ac98]{cursor:move}.cropper-crop[data-v-7f57ac98]{cursor:crosshair}.cropper-modal[data-v-7f57ac98]{background:rgba(0,0,0,.5)}.cropper-view-box[data-v-7f57ac98]{display:block;overflow:hidden;width:100%;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75)}.cropper-face[data-v-7f57ac98]{top:0;left:0;background-color:#fff;opacity:.1}.crop-info[data-v-7f57ac98]{position:absolute;left:0;min-width:65px;text-align:center;color:#fff;line-height:20px;background-color:rgba(0,0,0,.8);font-size:12px}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var n=this[i][0];"number"==typeof n&&(o[n]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&o[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(e,t){e.exports=function(e,t,r,o){var i,n=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,n=e.default);var c="function"==typeof n?n.options:n;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),r&&(c._scopeId=r),o){var a=Object.create(c.computed||null);Object.keys(o).forEach(function(e){var t=o[e];a[e]=function(){return t}}),c.computed=a}return{esModule:i,exports:n,options:c}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"cropper",staticClass:"vue-cropper"},[r("img",{ref:"cropperOutput",staticStyle:{display:"none"},attrs:{src:e.img,crossOrigin:"*"}}),e._v(" "),r("div",{staticClass:"cropper-box"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"cropper-box-canvas",style:{width:e.trueWidth+"px",height:e.trueHeight+"px",transform:"scale("+e.scale+","+e.scale+") translate3d("+e.x/e.scale+"px,"+e.y/e.scale+"px,0)"}},[r("img",{ref:"cropperImg",attrs:{src:e.img,alt:"cropper-img",crossOrigin:"*"}})])]),e._v(" "),r("div",{staticClass:"cropper-drag-box",class:{"cropper-move":e.move&&!e.crop,"cropper-crop":e.crop,"cropper-modal":e.cropping},on:{mousedown:e.startMove,touchstart:e.startMove,mouseover:e.scaleImg,mouseout:e.cancleScale}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.cropping,expression:"cropping"}],staticClass:"cropper-crop-box",style:{width:e.cropW+"px",height:e.cropH+"px",transform:"translate3d("+e.cropOffsertX+"px,"+e.cropOffsertY+"px,0)"}},[r("span",{staticClass:"cropper-view-box"},[r("img",{style:{width:e.trueWidth+"px",height:e.trueHeight+"px",transform:"scale("+e.scale+","+e.scale+") translate3d("+(e.x-e.cropOffsertX)/e.scale+"px,"+(e.y-e.cropOffsertY)/e.scale+"px,0)"},attrs:{src:e.img,alt:"cropper-img"}})]),e._v(" "),r("span",{staticClass:"cropper-face cropper-move",on:{mousedown:e.cropMove,touchstart:e.cropMove}}),e._v(" "),r("span",{staticClass:"crop-info",style:{top:e.cropInfo}},[e._v(e._s(this.cropW)+" × "+e._s(this.cropH))]),e._v(" "),r("span",{staticClass:"crop-line line-w"}),e._v(" "),r("span",{staticClass:"crop-line line-a"}),e._v(" "),r("span",{staticClass:"crop-line line-s"}),e._v(" "),r("span",{staticClass:"crop-line line-d"})])])},staticRenderFns:[]}},function(e,t,r){var o=r(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(8)("86f24dac",o,!0)},function(e,t,r){function o(e){for(var t=0;t<e.length;t++){var r=e[t],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(n(r.parts[i]));o.parts.length>r.parts.length&&(o.parts.length=r.parts.length)}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(n(r.parts[i]));h[r.id]={id:r.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function n(e){var t,r,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(d)return v;o.parentNode.removeChild(o)}if(m){var n=f++;o=l||(l=i()),t=s.bind(null,o,n,!1),r=s.bind(null,o,n,!0)}else o=i(),t=c.bind(null,o),r=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else r()}}function s(e,t,r,o){var i=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var n=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(n,s[t]):e.appendChild(n)}}function c(e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p=r(9),h={},u=a&&(document.head||document.getElementsByTagName("head")[0]),l=null,f=0,d=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){d=r;var i=p(e,t);return o(i),function(t){for(var r=[],n=0;n<i.length;n++){var s=i[n],c=h[s.id];c.refs--,r.push(c)}t?(i=p(e,t),o(i)):i=[];for(var n=0;n<r.length;n++){var c=r[n];if(0===c.refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete h[c.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],o={},i=0;i<t.length;i++){var n=t[i],s=n[0],c=n[1],a=n[2],p=n[3],h={id:e+":"+i,css:c,media:a,sourceMap:p};o[s]?o[s].parts.push(h):r.push(o[s]={id:s,parts:[h]})}return r}}])});