var G=Object.defineProperty,H=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var D=(e,n,t)=>n in e?G(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))b.call(n,t)&&D(e,t,n[t]);if(O)for(var t of O(n))q.call(n,t)&&D(e,t,n[t]);return e},R=(e,n)=>H(e,U(n));import{lE as v,a0 as u,a2 as x,lY as E,mm as T,mn as y,lZ as I,l_ as N,aU as g,aK as w,aL as C,aO as M,mo as S,eB as h,ls as k}from"./vendor.d5f590a2.js";function j(e,n){return B(e,()=>n)}function B(e,n){const t=g(),p=g();let o=!1;return s=>{const i=n(s);if(s.action==="start"){const a=E(s.screenStart,T(y.get())),r=I(e.state.camera,a,$);u(r)&&(o=N(i,r,t))}if(!o)return null;const f=E(s.screenEnd,T(y.get())),c=I(e.state.camera,f,$);return x(c)?null:N(i,c,p)?R(m({},s),{renderStart:t,renderEnd:p,plane:i,ray:c}):null}}var d;function z(e){let n=null;return t=>{switch(t.action){case"start":n=e.disableDisplay();break;case"end":case"cancel":u(n)&&(n.remove(),n=null)}return t}}function A(e,n=null){const t=w(e.state.viewingMode);t.options.selectionMode=!0,t.options.store=C.MIN,t.options.hud=!1;const p=k(),o={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},s=g(),i=M(n,e.spatialReference),f=a=>{e.map.ground&&e.map.ground.opacity<1?o.exclude.add(S):o.exclude.delete(S),e.sceneIntersectionHelper.intersectIntersectorScreen(E(a,p),t,o);const r=t.results.min;let l;if(r.getIntersectionPoint(s))l=r.intersector===h.TERRAIN?d.GROUND:d.OTHER;else{if(!t.results.ground.getIntersectionPoint(s))return null;l=d.GROUND}return{location:e.renderCoordsHelper.fromRenderCoords(s,i),surfaceType:l}};let c;return a=>{if(a.action==="start"){const l=f(a.screenStart);c=u(l)?l.location:null}if(x(c))return null;const r=f(a.screenEnd);return u(r)&&u(r.location)?R(m({},a),{mapStart:c,mapEnd:r.location,surfaceType:r.surfaceType}):null}}(function(e){e[e.GROUND=0]="GROUND",e[e.OTHER=1]="OTHER"})(d||(d={}));const $=v();export{A as B,j as C,z};