(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class b{constructor(t,e,i,n,a="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),b.nextNameID=b.nextNameID||0,this.$name.id=`lil-gui-name-${++b.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",d=>d.stopPropagation()),this.domElement.addEventListener("keyup",d=>d.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Y extends b{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function T(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const X={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:T,toHexString:T},S={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},G={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,t,e=1){const i=S.fromHexString(s);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([s,t,e],i=1){i=255/i;const n=s*i<<16^t*i<<8^e*i<<0;return S.toHexString(n)}},N={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const i=S.fromHexString(s);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:s,g:t,b:e},i=1){i=255/i;const n=s*i<<16^t*i<<8^e*i<<0;return S.toHexString(n)}},W=[X,S,G,N];function j(s){return W.find(t=>t.match(s))}class J extends b{constructor(t,e,i,n){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=j(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=T(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class F extends b{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class K extends b{constructor(t,e,i,n,a,d){super(t,e,i,"number"),this._initInput(),this.min(n),this.max(a);const g=d!==void 0;this.step(g?d:this._getImplicitStep(),g),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let o=parseFloat(this.$input.value);isNaN(o)||(this._stepExplicit&&(o=this._snap(o)),this.setValue(this._clamp(o)))},i=o=>{const m=parseFloat(this.$input.value);isNaN(m)||(this._snapClampSetValue(m+o),this.$input.value=this.getValue())},n=o=>{o.key==="Enter"&&this.$input.blur(),o.code==="ArrowUp"&&(o.preventDefault(),i(this._step*this._arrowKeyMultiplier(o))),o.code==="ArrowDown"&&(o.preventDefault(),i(this._step*this._arrowKeyMultiplier(o)*-1))},a=o=>{this._inputFocused&&(o.preventDefault(),i(this._step*this._normalizeMouseWheel(o)))};let d=!1,g,w,x,f,p;const h=5,v=o=>{g=o.clientX,w=x=o.clientY,d=!0,f=this.getValue(),p=0,window.addEventListener("mousemove",A),window.addEventListener("mouseup",c)},A=o=>{if(d){const m=o.clientX-g,L=o.clientY-w;Math.abs(L)>h?(o.preventDefault(),this.$input.blur(),d=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(m)>h&&c()}if(!d){const m=o.clientY-x;p-=m*this._step*this._arrowKeyMultiplier(o),f+p>this._max?p=this._max-f:f+p<this._min&&(p=this._min-f),this._snapClampSetValue(f+p)}x=o.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",c)},C=()=>{this._inputFocused=!0},l=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",a,{passive:!1}),this.$input.addEventListener("mousedown",v),this.$input.addEventListener("focus",C),this.$input.addEventListener("blur",l)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(l,o,m,L,U)=>(l-o)/(m-o)*(U-L)+L,e=l=>{const o=this.$slider.getBoundingClientRect();let m=t(l,o.left,o.right,this._min,this._max);this._snapClampSetValue(m)},i=l=>{this._setDraggingStyle(!0),e(l.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",a)},n=l=>{e(l.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",a)};let d=!1,g,w;const x=l=>{l.preventDefault(),this._setDraggingStyle(!0),e(l.touches[0].clientX),d=!1},f=l=>{l.touches.length>1||(this._hasScrollBar?(g=l.touches[0].clientX,w=l.touches[0].clientY,d=!0):x(l),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",h))},p=l=>{if(d){const o=l.touches[0].clientX-g,m=l.touches[0].clientY-w;Math.abs(o)>Math.abs(m)?x(l):(window.removeEventListener("touchmove",p),window.removeEventListener("touchend",h))}else l.preventDefault(),e(l.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",h)},v=this._callOnFinishChange.bind(this),A=400;let c;const C=l=>{if(Math.abs(l.deltaX)<Math.abs(l.deltaY)&&this._hasScrollBar)return;l.preventDefault();const m=this._normalizeMouseWheel(l)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout(c),c=setTimeout(v,A)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",f,{passive:!1}),this.$slider.addEventListener("wheel",C,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Z extends b{constructor(t,e,i,n){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Q extends b{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var q=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function tt(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let M=!1;class z{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:n,title:a="Controls",closeFolders:d=!1,injectStyles:g=!0,touchStyles:w=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),w&&this.domElement.classList.add("allow-touch-styles"),!M&&g&&(tt(q),M=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=d}add(t,e,i,n,a){if(Object(i)===i)return new Z(this,t,e,i);const d=t[e];switch(typeof d){case"number":return new K(this,t,e,i,n,a);case"boolean":return new Y(this,t,e);case"string":return new Q(this,t,e);case"function":return new F(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,d)}addColor(t,e,i=1){return new J(this,t,e,i)}addFolder(t){const e=new z({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof F||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof F)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const et=`
    precision mediump float;

    varying vec2 vUv;
    attribute vec2 a_position;

    void main() {
        vUv = .5 * (a_position + 1.);
        gl_Position = vec4(a_position, 0.0, 1.0);
    }
`,it=`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D u_image_texture;
    uniform float u_edge_thickness;
    uniform float u_ratio;
    uniform vec2 u_pointer_position;
    uniform float u_img_ratio;
    uniform float u_click_randomizer;
    uniform float u_rotation;
    uniform float u_effect;
    uniform float u_effect_active;

    #define TWO_PI 6.28318530718
    #define PI 3.14159265358979323846


    float random(float x) {
        return fract(sin(x * 12.9898) * 43758.5453);
    }

    float random2(vec2 p) {
        return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453);
    }

    float noise(vec2 p) {
        vec2 ip = floor(p);
        vec2 u = fract(p);
        u = u*u*(3.0-2.0*u);

        float res = mix(
        mix(random2(ip), random2(ip+vec2(1.0, 0.0)), u.x),
        mix(random2(ip+vec2(0.0, 1.0)), random2(ip+vec2(1.0, 1.0)), u.x), u.y);
        return res*res;
    }

    float get_sector_shape(float d, float a, float angle, float edges) {
        float angle1 = PI;
        float angle2 = angle1 + angle;

        float edge1 = smoothstep(angle1 - edges / d, angle1 + edges / d, a);
        float edge2 = smoothstep(angle2 - edges / d, angle2 + edges / d, a);

        return edge1 * (1. - edge2);
    }


    float get_img_frame_alpha(vec2 uv, float img_frame_width) {
        float img_frame_alpha = smoothstep(0., img_frame_width, uv.x) * smoothstep(1., 1. - img_frame_width, uv.x);
        img_frame_alpha *= smoothstep(0., img_frame_width, uv.y) * smoothstep(1., 1. - img_frame_width, uv.y);
        return img_frame_alpha;
    }


    float get_simple_cracks(float a, float d, float n) {
        a *= (1. + sin(2. * a + PI + 2. * u_click_randomizer));
        float simple_cracks_number = 10.;
        float simple_cracks_angle_step = TWO_PI / simple_cracks_number;
        float simple_crack_angle = mod(a + n + u_click_randomizer, simple_cracks_angle_step);
        float cracks_shape = 4. * abs(simple_crack_angle - .5 * simple_cracks_angle_step);
        cracks_shape = mix(cracks_shape, 1., smoothstep(.9, 1., d));
        cracks_shape *= pow(d + .4 * u_click_randomizer * max(0., cos(2. * a + u_click_randomizer) * sin(1. * a)), 12.);
        cracks_shape = (1. + n) * (1. + sin(4. * a)) * step(.9, cracks_shape);
        return cracks_shape;
    }

    vec2 get_img_uv() {
        vec2 img_uv = vUv;
        img_uv -= .5;
        if (u_ratio > u_img_ratio) {
            img_uv.x = img_uv.x * u_ratio / u_img_ratio;
        } else {
            img_uv.y = img_uv.y * u_img_ratio / u_ratio;
        }
        float scale_factor = 1.4;
        img_uv *= scale_factor;
        img_uv += .5;
        img_uv.y = 1. - img_uv.y;

        return img_uv;
    }

    vec2 get_disturbed_uv(vec2 uv, float section_constant, float edge, vec2 direction, float border) {
        float img_distortion = u_effect * (section_constant - .5);
        vec2 discurbed_uv = uv;
        discurbed_uv += 2. * img_distortion;
        discurbed_uv.x -= mix(.03 * edge * direction.x, -.1 * edge, border);
        discurbed_uv.y -= mix(.03 * edge * direction.y, -.1 * edge, border);
        vec2 center = vec2(0.5, 0.5);
        discurbed_uv = discurbed_uv - center;
        float cosA = cos(4. * img_distortion);
        float sinA = sin(4. * img_distortion);
        float perspective = 1. + img_distortion * discurbed_uv.y;
        discurbed_uv = vec2(
        perspective * (cosA * discurbed_uv.x - sinA * discurbed_uv.y),
        perspective * (sinA * discurbed_uv.x + cosA * discurbed_uv.y)
        );
        discurbed_uv += center;
        return discurbed_uv;
    }


    void main() {
        vec2 uv = vUv;
        uv.y = 1. - uv.y;
        uv.x *= u_ratio;

        vec2 pointer = u_pointer_position;
        vec2 pointer_direction = normalize(u_pointer_position - vec2(vUv.x, 1. - vUv.y));
        pointer.x *= u_ratio;
        pointer = pointer - uv;
        float pointer_angle = atan(pointer.y, pointer.x);
        float pointer_distance = length(pointer);
        float pointer_distance_normalized = (1. - clamp(pointer_distance, 0., 1.));

        vec3 color = vec3(0.);

        vec2 img_uv = get_img_uv();

        float sector_constant = 0.;
        float sector_start_angle = 0.;
        float is_sector_edge = 0.;
        float is_grid_edge = 0.;
        float is_central_edge = 0.;

        float angle_noise = .3 * noise(3. * img_uv);

        for (int i = 0; i < 12; i++) {
            float sector_seed = float(i) + u_click_randomizer + 2.;

            float angle_normalised = mod((pointer_angle - sector_start_angle) / TWO_PI, 1.);
            angle_normalised += .1 * angle_noise;

            float angle = angle_normalised * TWO_PI;
            float sector_size = (.01 + 2. * random2(vec2(float(i) + u_click_randomizer, u_pointer_position.x)));
            sector_size = min(sector_size, TWO_PI - sector_start_angle);

            float thickness = u_edge_thickness * (.2 + random(3. * sector_seed));
            thickness += angle_noise * .03 * pow(pointer_distance_normalized, 80.);

            float shape = get_sector_shape(pointer_distance, angle, sector_size, thickness);
            is_sector_edge = max(is_sector_edge, smoothstep(.6, 1., shape));
            sector_constant = mix(sector_constant, random(sector_seed), smoothstep(.2, .8, shape));

            vec2 grid_uv = 2. * (.8 + .5 * pointer_distance_normalized) * img_uv;
            float grid_noise = noise(grid_uv + sector_seed);
            float grid_thickness = (.4 + .4 * random(10. * sector_seed)) * u_edge_thickness;
            float grid_shape = shape * smoothstep(.27, .27 + grid_thickness, grid_noise);
            is_grid_edge += (smoothstep(.1, .5, grid_shape) * smoothstep(.9, .6, grid_shape));

            sector_constant = mix(sector_constant, random(sector_seed + 100.), smoothstep(.2, .8, grid_shape));

            vec2 central_grid_uv = img_uv * (3. + 3. * pow(pointer_distance_normalized, 10.));
            float central_grid_noise = noise(central_grid_uv + sector_seed);
            float central_grid_thickness = (1. + .5 * random(-2. + sector_seed)) * u_edge_thickness;
            float central_grid_shape = step(.7, shape) * smoothstep(.27, .27 + central_grid_thickness, central_grid_noise);
            is_central_edge += (smoothstep(.0, .5, central_grid_shape) * smoothstep(1., .5, central_grid_shape));
            is_central_edge *= (step(.8, pointer_distance_normalized));

            sector_constant = mix(sector_constant, random(sector_seed + 100.), smoothstep(.2, .8, central_grid_shape));


            sector_start_angle += sector_size;
        }

        float img_edge_alpha = get_img_frame_alpha(img_uv, .004);

        is_sector_edge = 1. - is_sector_edge;

        float cracks_edge = max(is_grid_edge, is_sector_edge);
        cracks_edge = max(cracks_edge, is_central_edge);

        float central_cracks = get_simple_cracks(pointer_angle, pointer_distance_normalized, angle_noise);
        cracks_edge += central_cracks;

        if (u_effect_active > 0.) {
            img_uv = get_disturbed_uv(img_uv, sector_constant, cracks_edge, pointer_direction, get_img_frame_alpha(img_uv, .2));
        }

        vec4 img = texture2D(u_image_texture, img_uv);
        color = img.rgb;
        color += .12 * u_effect_active * (sector_constant - .5);

        img_edge_alpha = get_img_frame_alpha(img_uv, .004);
        float opacity = img_edge_alpha;
        opacity -= .3 * u_effect_active * pow(is_grid_edge, 4.);
        opacity -= .3 * u_effect_active * is_central_edge;
        opacity -= .03 * u_effect_active * pow(central_cracks, 4.);

        gl_FragColor = vec4(color, opacity);
    }
`,y=document.querySelector("canvas"),O=document.querySelector("#image-selector-input"),R=Math.min(window.devicePixelRatio,2),u={clickRandomizer:.332,distance:.015,effectOn:!0,edgeThickness:.006,loadMyImage:()=>{O.click()}},k={x:.55*window.innerWidth,y:.5*window.innerHeight};O.onchange=()=>{const[s]=O.files;if(s){const t=new FileReader;t.onload=e=>{P(e.target.result)},t.readAsDataURL(s)}};let E,_,I;const r=st();$();P("https://ksenia-k.com/img/codepen/for-glass-crack-demo-1.jpg");nt();rt();B();window.addEventListener("resize",H);let D=!0;function V(){u.clickRandomizer-=.03,k.x+=70*(D?1:-1),k.y+=40,$(),D=!D}setTimeout(V,500);setTimeout(V,1e3);function st(){const s=et,t=it,e=y.getContext("webgl");function i(h,v,A){const c=h.createShader(A);return h.shaderSource(c,v),h.compileShader(c),h.getShaderParameter(c,h.COMPILE_STATUS)?c:(console.error("An error occurred compiling the shaders: "+h.getShaderInfoLog(c)),h.deleteShader(c),null)}const n=i(e,s,e.VERTEX_SHADER),a=i(e,t,e.FRAGMENT_SHADER);function d(h,v,A){const c=h.createProgram();return h.attachShader(c,v),h.attachShader(c,A),h.linkProgram(c),h.getProgramParameter(c,h.LINK_STATUS)?c:(console.error("Unable to initialize the shader program: "+h.getProgramInfoLog(c)),null)}const g=d(e,n,a);_=w(g);function w(h){let v=[],A=e.getProgramParameter(h,e.ACTIVE_UNIFORMS);for(let c=0;c<A;c++){let C=e.getActiveUniform(h,c).name;v[C]=e.getUniformLocation(h,C)}return v}const x=new Float32Array([-1,-1,1,-1,-1,1,1,1]),f=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,f),e.bufferData(e.ARRAY_BUFFER,x,e.STATIC_DRAW),e.useProgram(g);const p=e.getAttribLocation(g,"a_position");return e.enableVertexAttribArray(p),e.bindBuffer(e.ARRAY_BUFFER,f),e.vertexAttribPointer(p,2,e.FLOAT,!1,0,0),e}function $(){r.uniform1f(_.u_click_randomizer,u.clickRandomizer),r.uniform1f(_.u_rotation,u.rotation),r.uniform1f(_.u_effect,u.distance),r.uniform1f(_.u_effect_active,u.effectOn?1:0),r.uniform1f(_.u_edge_thickness,u.edgeThickness),r.uniform2f(_.u_pointer_position,k.x/window.innerWidth,k.y/window.innerHeight)}function P(s){E=new Image,E.crossOrigin="anonymous",E.src=s,E.onload=()=>{const t=r.createTexture();r.bindTexture(r.TEXTURE_2D,t),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,E),r.uniform1i(_.u_image_texture,0),H()}}function B(){const s=performance.now();r.uniform1f(_.u_time,s),r.drawArrays(r.TRIANGLE_STRIP,0,4),requestAnimationFrame(B)}function H(){const s=E.naturalWidth/E.naturalHeight;y.width=window.innerWidth*R,y.height=window.innerHeight*R,r.viewport(0,0,y.width,y.height),r.uniform1f(_.u_ratio,y.width/y.height),r.uniform1f(_.u_img_ratio,s)}function nt(){y.addEventListener("click",s=>{k.x=s.pageX,k.y=s.pageY,u.clickRandomizer=Math.random(),$()}),document.addEventListener("keydown",s=>{event.code==="Space"&&(u.effectOn=!u.effectOn,I&&I.setValue(u.effectOn))})}function rt(){const s=new z;s.close(),s.add(u,"loadMyImage").name("加载图片");const t=s.addFolder("shader参数");I=t.add(u,"effectOn").onChange($),t.add(u,"distance",0,.2).onChange($),t.add(u,"clickRandomizer",0,1).onChange($),t.add(u,"edgeThickness",0,.02).onChange($)}
