var Dh=Object.defineProperty;var kh=(a,e,t)=>e in a?Dh(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Ps=(a,e,t)=>(kh(a,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const U={};U.register=(a,e,t)=>{let n=U;if(a){const i=a.split(".");for(const s of i)n[s]||(n[s]={}),n=n[s]}n[e]=t};class Ms{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){const n=this;return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(function(s){const r=n.resolveName(s);n.callbacks[r.namespace]instanceof Object||(n.callbacks[r.namespace]={}),n.callbacks[r.namespace][r.value]instanceof Array||(n.callbacks[r.namespace][r.value]=[]),n.callbacks[r.namespace][r.value].push(t)}),this)}off(e){const t=this;return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(function(i){const s=t.resolveName(i);if(s.namespace!=="base"&&s.value==="")delete t.callbacks[s.namespace];else if(s.namespace==="base")for(const r in t.callbacks)t.callbacks[r]instanceof Object&&t.callbacks[r][s.value]instanceof Array&&(delete t.callbacks[r][s.value],Object.keys(t.callbacks[r]).length===0&&delete t.callbacks[r]);else t.callbacks[s.namespace]instanceof Object&&t.callbacks[s.namespace][s.value]instanceof Array&&(delete t.callbacks[s.namespace][s.value],Object.keys(t.callbacks[s.namespace]).length===0&&delete t.callbacks[s.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;const n=this;let i=null;const s=t instanceof Array?t:[];let r=this.resolveNames(e);if(r=this.resolveName(r[0]),r.namespace==="base")for(const o in n.callbacks)n.callbacks[o]instanceof Object&&n.callbacks[o][r.value]instanceof Array&&n.callbacks[o][r.value].forEach(function(l){l.apply(n,s)});else if(this.callbacks[r.namespace]instanceof Object){if(r.value==="")return console.warn("wrong name"),this;n.callbacks[r.namespace][r.value].forEach(function(o){o.apply(n,s)})}return i}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},n=e.split(".");return t.original=e,t.value=n[0],t.namespace="base",n.length>1&&n[1]!==""&&(t.namespace=n[1]),t}}U.register("UTILS","EventEmitter",Ms);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ja="149",Ih=0,So=1,Nh=2,xc=1,Fh=2,ss=3,Tn=0,Rt=1,wn=2,Fn=0,ni=1,rr=2,wo=3,ya=4,Oh=5,bi=100,Bh=101,Uh=102,Mo=103,bo=104,Hh=200,Vh=201,Gh=202,Jh=203,yc=204,Sc=205,Wh=206,Zh=207,Xh=208,jh=209,qh=210,Yh=0,Kh=1,Qh=2,Sa=3,$h=4,eu=5,tu=6,nu=7,pr=0,iu=1,su=2,_n=0,ru=1,au=2,ou=3,lu=4,cu=5,Wa=300,Ci=301,Ri=302,ar=303,wa=304,mr=306,cn=1e3,mt=1001,or=1002,pt=1003,Ma=1004,tr=1005,$e=1006,wc=1007,On=1008,ri=1009,hu=1010,uu=1011,Mc=1012,du=1013,ei=1014,Gt=1015,Mn=1016,fu=1017,pu=1018,Ei=1020,mu=1021,Nt=1023,gu=1024,vu=1025,ii=1026,Li=1027,Au=1028,xu=1029,yu=1030,Su=1031,wu=1033,_r=33776,Tr=33777,Er=33778,Pr=33779,_o=35840,To=35841,Eo=35842,Po=35843,Mu=36196,Co=37492,Ro=37496,Lo=37808,zo=37809,Do=37810,ko=37811,Io=37812,No=37813,Fo=37814,Oo=37815,Bo=37816,Uo=37817,Ho=37818,Vo=37819,Go=37820,Jo=37821,Cr=36492,bu=36283,Wo=36284,Zo=36285,Xo=36286,vs=2300,zi=2301,Rr=2302,jo=2400,qo=2401,Yo=2402,_u=2500,Tu=0,bc=1,ba=2,Bn=3e3,Le=3001,Eu=3200,Pu=3201,gr=0,Cu=1,an="srgb",As="srgb-linear",Lr=7680,Ru=519,_a=35044,Ko="300 es",Ta=1035;class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qo=1234567;const as=Math.PI/180,xs=180/Math.PI;function sn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[a&255]+yt[a>>8&255]+yt[a>>16&255]+yt[a>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function ot(a,e,t){return Math.max(e,Math.min(t,a))}function Za(a,e){return(a%e+e)%e}function Lu(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function zu(a,e,t){return a!==e?(t-a)/(e-a):0}function os(a,e,t){return(1-t)*a+t*e}function Du(a,e,t,n){return os(a,e,1-Math.exp(-t*n))}function ku(a,e=1){return e-Math.abs(Za(a,e*2)-e)}function Iu(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Nu(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Fu(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Ou(a,e){return a+Math.random()*(e-a)}function Bu(a){return a*(.5-Math.random())}function Uu(a){a!==void 0&&(Qo=a);let e=Qo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hu(a){return a*as}function Vu(a){return a*xs}function Ea(a){return(a&a-1)===0&&a!==0}function _c(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function lr(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Gu(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),u=r((e+n)/2),h=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*d,o*c);break;case"YZY":a.set(l*d,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*d,o*u,o*c);break;case"XZX":a.set(o*u,l*g,l*f,o*c);break;case"YXY":a.set(l*f,o*u,l*g,o*c);break;case"ZYZ":a.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Je(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var tn=Object.freeze({__proto__:null,DEG2RAD:as,RAD2DEG:xs,ceilPowerOfTwo:_c,clamp:ot,damp:Du,degToRad:Hu,denormalize:bn,euclideanModulo:Za,floorPowerOfTwo:lr,generateUUID:sn,inverseLerp:zu,isPowerOfTwo:Ea,lerp:os,mapLinear:Lu,normalize:Je,pingpong:ku,radToDeg:Vu,randFloat:Ou,randFloatSpread:Bu,randInt:Fu,seededRandom:Uu,setQuaternionFromProperEuler:Gu,smootherstep:Nu,smoothstep:Iu});class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ct{constructor(){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],m=i[0],p=i[3],v=i[6],S=i[1],A=i[4],x=i[7],w=i[2],T=i[5],P=i[8];return s[0]=r*m+o*S+l*w,s[3]=r*p+o*A+l*T,s[6]=r*v+o*x+l*P,s[1]=c*m+u*S+h*w,s[4]=c*p+u*A+h*T,s[7]=c*v+u*x+h*P,s[2]=d*m+f*S+g*w,s[5]=d*p+f*A+g*T,s[8]=d*v+f*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-n*s*u+n*o*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*r-o*c,d=o*l-u*s,f=c*s-r*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(i*c-u*n)*m,e[2]=(o*n-i*r)*m,e[3]=d*m,e[4]=(u*t-i*l)*m,e[5]=(i*s-o*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(r*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zr.makeScale(e,t)),this}rotate(e){return this.premultiply(zr.makeRotation(-e)),this}translate(e,t){return this.premultiply(zr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new Ct;function Tc(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ys(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function si(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function nr(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Dr={[an]:{[As]:si},[As]:{[an]:nr}},bt={legacyMode:!0,get workingColorSpace(){return As},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Dr[e]&&Dr[e][t]!==void 0){const n=Dr[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},at={r:0,g:0,b:0},Yt={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function kr(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function Rs(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=Za(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=kr(r,s,e+1/3),this.g=kr(r,s,e),this.b=kr(r,s,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=an){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,bt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,bt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,bt.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=an){const n=Ec[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return bt.fromWorkingColorSpace(Rs(this,at),e),ot(at.r*255,0,255)<<16^ot(at.g*255,0,255)<<8^ot(at.b*255,0,255)<<0}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(Rs(this,at),t);const n=at.r,i=at.g,s=at.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=u<=.5?h/(r+o):h/(2-r-o),r){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(Rs(this,at),t),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=an){return bt.fromWorkingColorSpace(Rs(this,at),e),e!==an?`color(${e} ${at.r} ${at.g} ${at.b})`:`rgb(${at.r*255|0},${at.g*255|0},${at.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Yt),Yt.h+=e,Yt.s+=t,Yt.l+=n,this.setHSL(Yt.h,Yt.s,Yt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yt),e.getHSL(Cs);const n=os(Yt.h,Cs.h,t),i=os(Yt.s,Cs.s,t),s=os(Yt.l,Cs.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}le.NAMES=Ec;let li;class Pc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{li===void 0&&(li=ys("canvas")),li.width=e.width,li.height=e.height;const n=li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=si(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Cc{constructor(e=null){this.isSource=!0,this.uuid=sn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Ir(i[r].image)):s.push(Ir(i[r]))}else s=Ir(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ir(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Pc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ju=0;class Ke extends Bi{constructor(e=Ke.DEFAULT_IMAGE,t=Ke.DEFAULT_MAPPING,n=mt,i=mt,s=$e,r=On,o=Nt,l=ri,c=Ke.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=sn(),this.name="",this.source=new Cc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cn:e.x=e.x-Math.floor(e.x);break;case mt:e.x=e.x<0?0:1;break;case or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cn:e.y=e.y-Math.floor(e.y);break;case mt:e.y=e.y<0?0:1;break;case or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Wa;Ke.DEFAULT_ANISOTROPY=1;class Ue{constructor(e=0,t=0,n=0,i=1){Ue.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],m=l[2],p=l[6],v=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,x=(f+1)/2,w=(v+1)/2,T=(u+d)/4,P=(h+m)/4,y=(g+p)/4;return A>x&&A>w?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=T/n,s=P/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=y/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=P/s,i=y/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-m)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lt extends Bi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$e,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rc extends Ke{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wu extends Ke{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],m=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==d||c!==f||u!==g){let p=1-o;const v=l*d+c*f+u*g+h*m,S=v>=0?1:-1,A=1-v*v;if(A>Number.EPSILON){const w=Math.sqrt(A),T=Math.atan2(w,v*S);p=Math.sin(p*T)/w,o=Math.sin(o*T)/w}const x=o*S;if(l=l*p+d*x,c=c*p+f*x,u=u*p+g*x,h=h*p+m*x,p===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*o+i*c-s*l,this._y=i*u+r*l+s*o-n*c,this._z=s*u+r*c+n*l-i*o,this._w=r*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($o.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=l*t+r*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-r*t,d=-s*t-r*n-o*i;return this.x=c*l+d*-s+u*-o-h*-r,this.y=u*l+d*-r+h*-s-c*-o,this.z=h*l+d*-o+c*-r-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nr.copy(this).projectOnVector(e),this.sub(Nr)}reflect(e){return this.sub(Nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nr=new C,$o=new Jt;class Ui{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>r&&(r=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>r&&(r=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)jn.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(jn)}else n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox),Fr.applyMatrix4(e.matrixWorld),this.union(Fr);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),Ls.subVectors(this.max,Xi),ci.subVectors(e.a,Xi),hi.subVectors(e.b,Xi),ui.subVectors(e.c,Xi),En.subVectors(hi,ci),Pn.subVectors(ui,hi),qn.subVectors(ci,ui);let t=[0,-En.z,En.y,0,-Pn.z,Pn.y,0,-qn.z,qn.y,En.z,0,-En.x,Pn.z,0,-Pn.x,qn.z,0,-qn.x,-En.y,En.x,0,-Pn.y,Pn.x,0,-qn.y,qn.x,0];return!Or(t,ci,hi,ui,Ls)||(t=[1,0,0,0,1,0,0,0,1],!Or(t,ci,hi,ui,Ls))?!1:(zs.crossVectors(En,Pn),t=[zs.x,zs.y,zs.z],Or(t,ci,hi,ui,Ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return jn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pn=[new C,new C,new C,new C,new C,new C,new C,new C],jn=new C,Fr=new Ui,ci=new C,hi=new C,ui=new C,En=new C,Pn=new C,qn=new C,Xi=new C,Ls=new C,zs=new C,Yn=new C;function Or(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Yn.fromArray(a,s);const o=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zu=new Ui,ji=new C,Br=new C;class Hi{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ji,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(Br)),this.expandByPoint(ji.copy(e.center).sub(Br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new C,Ur=new C,Ds=new C,Cn=new C,Hr=new C,ks=new C,Vr=new C;class Xa{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.direction).multiplyScalar(t).add(this.origin),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ur.copy(e).add(t).multiplyScalar(.5),Ds.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(Ur);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ds),o=Cn.dot(this.direction),l=-Cn.dot(Ds),c=Cn.lengthSq(),u=Math.abs(1-r*r);let h,d,f,g;if(u>0)if(h=r*l-o,d=r*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const m=1/u;h*=m,d*=m,f=h*(h+r*d+2*o)+d*(r*h+d+2*l)+c}else d=s,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-r*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(r*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=r>0?-s:s,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Ds).multiplyScalar(d).add(Ur),f}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,i,s){Hr.subVectors(t,e),ks.subVectors(n,e),Vr.crossVectors(Hr,ks);let r=this.direction.dot(Vr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(ks.crossVectors(Cn,ks));if(l<0)return null;const c=o*this.direction.dot(Hr.cross(Cn));if(c<0||l+c>r)return null;const u=-o*Cn.dot(Vr);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,l,c,u,h,d,f,g,m,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=r,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=d,v[3]=f,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/di.setFromMatrixColumn(e,0).length(),s=1/di.setFromMatrixColumn(e,1).length(),r=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=r*u,f=r*h,g=o*u,m=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,m=c*h;t[0]=d+m*o,t[4]=g*o-f,t[8]=r*c,t[1]=r*h,t[5]=r*u,t[9]=-o,t[2]=f*o-g,t[6]=m+d*o,t[10]=r*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,m=c*h;t[0]=d-m*o,t[4]=-r*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*u,t[9]=m-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const d=r*u,f=r*h,g=o*u,m=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+m,t[1]=l*h,t[5]=m*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,g=o*l,m=o*c;t[0]=l*u,t[4]=m-d*h,t[8]=g*h+f,t[1]=h,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-m*h}else if(e.order==="XZY"){const d=r*l,f=r*c,g=o*l,m=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+m,t[5]=r*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xu,e,ju)}lookAt(e,t,n){const i=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Rn.crossVectors(n,kt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Rn.crossVectors(n,kt)),Rn.normalize(),Is.crossVectors(kt,Rn),i[0]=Rn.x,i[4]=Is.x,i[8]=kt.x,i[1]=Rn.y,i[5]=Is.y,i[9]=kt.y,i[2]=Rn.z,i[6]=Is.z,i[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],m=n[6],p=n[10],v=n[14],S=n[3],A=n[7],x=n[11],w=n[15],T=i[0],P=i[4],y=i[8],b=i[12],R=i[1],I=i[5],H=i[9],D=i[13],z=i[2],O=i[6],X=i[10],Y=i[14],V=i[3],Q=i[7],q=i[11],me=i[15];return s[0]=r*T+o*R+l*z+c*V,s[4]=r*P+o*I+l*O+c*Q,s[8]=r*y+o*H+l*X+c*q,s[12]=r*b+o*D+l*Y+c*me,s[1]=u*T+h*R+d*z+f*V,s[5]=u*P+h*I+d*O+f*Q,s[9]=u*y+h*H+d*X+f*q,s[13]=u*b+h*D+d*Y+f*me,s[2]=g*T+m*R+p*z+v*V,s[6]=g*P+m*I+p*O+v*Q,s[10]=g*y+m*H+p*X+v*q,s[14]=g*b+m*D+p*Y+v*me,s[3]=S*T+A*R+x*z+w*V,s[7]=S*P+A*I+x*O+w*Q,s[11]=S*y+A*H+x*X+w*q,s[15]=S*b+A*D+x*Y+w*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],m=e[7],p=e[11],v=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*f-n*l*f)+m*(+t*l*f-t*c*d+s*r*d-i*r*f+i*c*u-s*l*u)+p*(+t*c*h-t*o*f-s*r*h+n*r*f+s*o*u-n*c*u)+v*(-i*o*u-t*l*h+t*o*d+i*r*h-n*r*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],m=e[13],p=e[14],v=e[15],S=h*p*c-m*d*c+m*l*f-o*p*f-h*l*v+o*d*v,A=g*d*c-u*p*c-g*l*f+r*p*f+u*l*v-r*d*v,x=u*m*c-g*h*c+g*o*f-r*m*f-u*o*v+r*h*v,w=g*h*l-u*m*l-g*o*d+r*m*d+u*o*p-r*h*p,T=t*S+n*A+i*x+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=S*P,e[1]=(m*d*s-h*p*s-m*i*f+n*p*f+h*i*v-n*d*v)*P,e[2]=(o*p*s-m*l*s+m*i*c-n*p*c-o*i*v+n*l*v)*P,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*P,e[4]=A*P,e[5]=(u*p*s-g*d*s+g*i*f-t*p*f-u*i*v+t*d*v)*P,e[6]=(g*l*s-r*p*s-g*i*c+t*p*c+r*i*v-t*l*v)*P,e[7]=(r*d*s-u*l*s+u*i*c-t*d*c-r*i*f+t*l*f)*P,e[8]=x*P,e[9]=(g*h*s-u*m*s-g*n*f+t*m*f+u*n*v-t*h*v)*P,e[10]=(r*m*s-g*o*s+g*n*c-t*m*c-r*n*v+t*o*v)*P,e[11]=(u*o*s-r*h*s-u*n*c+t*h*c+r*n*f-t*o*f)*P,e[12]=w*P,e[13]=(u*m*i-g*h*i+g*n*d-t*m*d-u*n*p+t*h*p)*P,e[14]=(g*o*i-r*m*i-g*n*l+t*m*l+r*n*p-t*o*p)*P,e[15]=(r*h*i-u*o*i+u*n*l-t*h*l-r*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,u=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*r,0,c*l-i*o,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,u=r+r,h=o+o,d=s*c,f=s*u,g=s*h,m=r*u,p=r*h,v=o*h,S=l*c,A=l*u,x=l*h,w=n.x,T=n.y,P=n.z;return i[0]=(1-(m+v))*w,i[1]=(f+x)*w,i[2]=(g-A)*w,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(d+v))*T,i[6]=(p+S)*T,i[7]=0,i[8]=(g+A)*P,i[9]=(p-S)*P,i[10]=(1-(d+m))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=di.set(i[0],i[1],i[2]).length();const r=di.set(i[4],i[5],i[6]).length(),o=di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Kt.copy(this);const c=1/s,u=1/r,h=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=h,Kt.elements[9]*=h,Kt.elements[10]*=h,t.setFromRotationMatrix(Kt),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(r+s)/(r-s),f=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(r-s),h=(t+e)*l,d=(n+i)*c,f=(r+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new C,Kt=new ue,Xu=new C(0,0,0),ju=new C(1,1,1),Rn=new C,Is=new C,kt=new C,el=new ue,tl=new Jt;class Wt{constructor(e=0,t=0,n=0,i=Wt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ot(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return el.makeRotationFromQuaternion(e),this.setFromRotationMatrix(el,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tl.setFromEuler(this),this.setFromQuaternion(tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wt.DEFAULT_ORDER="XYZ";class Lc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qu=0;const nl=new C,fi=new Jt,gn=new ue,Ns=new C,qi=new C,Yu=new C,Ku=new Jt,il=new C(1,0,0),sl=new C(0,1,0),rl=new C(0,0,1),Qu={type:"added"},al={type:"removed"};class Xe extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const e=new C,t=new Wt,n=new Jt,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ct}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(il,e)}rotateY(e){return this.rotateOnAxis(sl,e)}rotateZ(e){return this.rotateOnAxis(rl,e)}translateOnAxis(e,t){return nl.copy(e).applyQuaternion(this.quaternion),this.position.add(nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(il,e)}translateY(e){return this.translateOnAxis(sl,e)}translateZ(e){return this.translateOnAxis(rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ns.copy(e):Ns.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(qi,Ns,this.up):gn.lookAt(Ns,qi,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),fi.setFromRotationMatrix(gn),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(al)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(al)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,Ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),h=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Xe.DEFAULT_UP=new C(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new C,vn=new C,Gr=new C,An=new C,pi=new C,mi=new C,ol=new C,Jr=new C,Wr=new C,Zr=new C;class yn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qt.subVectors(e,t),i.cross(Qt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Qt.subVectors(i,t),vn.subVectors(n,t),Gr.subVectors(e,t);const r=Qt.dot(Qt),o=Qt.dot(vn),l=Qt.dot(Gr),c=vn.dot(vn),u=vn.dot(Gr),h=r*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,f=(c*l-o*u)*d,g=(r*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,An),l.set(0,0),l.addScaledVector(s,An.x),l.addScaledVector(r,An.y),l.addScaledVector(o,An.z),l}static isFrontFacing(e,t,n,i){return Qt.subVectors(n,t),vn.subVectors(e,t),Qt.cross(vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Qt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return yn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;pi.subVectors(i,n),mi.subVectors(s,n),Jr.subVectors(e,n);const l=pi.dot(Jr),c=mi.dot(Jr);if(l<=0&&c<=0)return t.copy(n);Wr.subVectors(e,i);const u=pi.dot(Wr),h=mi.dot(Wr);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(pi,r);Zr.subVectors(e,s);const f=pi.dot(Zr),g=mi.dot(Zr);if(g>=0&&f<=g)return t.copy(s);const m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(mi,o);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return ol.subVectors(s,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(ol,o);const v=1/(p+m+d);return r=m*v,o=d*v,t.copy(n).addScaledVector(pi,r).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let $u=0;class jt extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=sn(),this.name="",this.type="Material",this.blending=ni,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yc,this.blendDst=Sc,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zt extends jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new C,Fs=new te;class Ge{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_a,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fs.fromBufferAttribute(this,t),Fs.applyMatrix3(e),this.setXY(t,Fs.x,Fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_a&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ja extends Ge{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zc extends Ge{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ie extends Ge{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ed=0;const Ut=new ue,Xr=new Xe,gi=new C,It=new Ui,Yi=new Ui,ft=new C;class Qe extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tc(e)?zc:ja)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ct().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return Xr.lookAt(e),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ie(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(It.min,Yi.min),It.expandByPoint(ft),ft.addVectors(It.max,Yi.max),It.expandByPoint(ft)):(It.expandByPoint(Yi.min),It.expandByPoint(Yi.max))}It.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ft.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(e,c),ft.add(gi)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new C,u[R]=new C;const h=new C,d=new C,f=new C,g=new te,m=new te,p=new te,v=new C,S=new C;function A(R,I,H){h.fromArray(i,R*3),d.fromArray(i,I*3),f.fromArray(i,H*3),g.fromArray(r,R*2),m.fromArray(r,I*2),p.fromArray(r,H*2),d.sub(h),f.sub(h),m.sub(g),p.sub(g);const D=1/(m.x*p.y-p.x*m.y);isFinite(D)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(D),S.copy(f).multiplyScalar(m.x).addScaledVector(d,-p.x).multiplyScalar(D),c[R].add(v),c[I].add(v),c[H].add(v),u[R].add(S),u[I].add(S),u[H].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let R=0,I=x.length;R<I;++R){const H=x[R],D=H.start,z=H.count;for(let O=D,X=D+z;O<X;O+=3)A(n[O+0],n[O+1],n[O+2])}const w=new C,T=new C,P=new C,y=new C;function b(R){P.fromArray(s,R*3),y.copy(P);const I=c[R];w.copy(I),w.sub(P.multiplyScalar(P.dot(I))).normalize(),T.crossVectors(y,I);const D=T.dot(u[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=D}for(let R=0,I=x.length;R<I;++R){const H=x[R],D=H.start,z=H.count;for(let O=D,X=D+z;O<X;O+=3)b(n[O+0]),b(n[O+1]),b(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,s=new C,r=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),m=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,p),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let m=0,p=l.length;m<p;m++){o.isInterleavedBufferAttribute?f=l[m]*o.data.stride+o.offset:f=l[m]*u;for(let v=0;v<u;v++)d[g++]=c[f++]}return new Ge(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ll=new ue,vi=new Xa,jr=new Hi,Ki=new C,Qi=new C,$i=new C,qr=new C,Os=new C,Bs=new te,Us=new te,Hs=new te,Yr=new C,Vs=new C;class We extends Xe{constructor(e=new Qe,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(qr.fromBufferAttribute(h,e),r?Os.addScaledVector(qr,u):Os.addScaledVector(qr.sub(t),u))}t.add(Os)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),e.ray.intersectsSphere(jr)===!1)||(ll.copy(s).invert(),vi.copy(e.ray).applyMatrix4(ll),n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let f=0,g=h.length;f<g;f++){const m=h[f],p=i[m.materialIndex],v=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let A=v,x=S;A<x;A+=3){const w=o.getX(A),T=o.getX(A+1),P=o.getX(A+2);r=Gs(this,p,e,vi,c,u,w,T,P),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=f,p=g;m<p;m+=3){const v=o.getX(m),S=o.getX(m+1),A=o.getX(m+2);r=Gs(this,i,e,vi,c,u,v,S,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let f=0,g=h.length;f<g;f++){const m=h[f],p=i[m.materialIndex],v=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let A=v,x=S;A<x;A+=3){const w=A,T=A+1,P=A+2;r=Gs(this,p,e,vi,c,u,w,T,P),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=f,p=g;m<p;m+=3){const v=m,S=m+1,A=m+2;r=Gs(this,i,e,vi,c,u,v,S,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function td(a,e,t,n,i,s,r,o){let l;if(e.side===Rt?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===Tn,o),l===null)return null;Vs.copy(o),Vs.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Vs);return c<t.near||c>t.far?null:{distance:c,point:Vs.clone(),object:a}}function Gs(a,e,t,n,i,s,r,o,l){a.getVertexPosition(r,Ki),a.getVertexPosition(o,Qi),a.getVertexPosition(l,$i);const c=td(a,e,t,n,Ki,Qi,$i,Yr);if(c){i&&(Bs.fromBufferAttribute(i,r),Us.fromBufferAttribute(i,o),Hs.fromBufferAttribute(i,l),c.uv=yn.getUV(Yr,Ki,Qi,$i,Bs,Us,Hs,new te)),s&&(Bs.fromBufferAttribute(s,r),Us.fromBufferAttribute(s,o),Hs.fromBufferAttribute(s,l),c.uv2=yn.getUV(Yr,Ki,Qi,$i,Bs,Us,Hs,new te));const u={a:r,b:o,c:l,normal:new C,materialIndex:0};yn.getNormal(Ki,Qi,$i,u.normal),c.face=u}return c}class bs extends Qe{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(h,2));function g(m,p,v,S,A,x,w,T,P,y,b){const R=x/P,I=w/y,H=x/2,D=w/2,z=T/2,O=P+1,X=y+1;let Y=0,V=0;const Q=new C;for(let q=0;q<X;q++){const me=q*I-D;for(let F=0;F<O;F++){const K=F*R-H;Q[m]=K*S,Q[p]=me*A,Q[v]=z,c.push(Q.x,Q.y,Q.z),Q[m]=0,Q[p]=0,Q[v]=T>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(F/P),h.push(1-q/y),Y+=1}}for(let q=0;q<y;q++)for(let me=0;me<P;me++){const F=d+me+O*q,K=d+me+O*(q+1),ie=d+(me+1)+O*(q+1),re=d+(me+1)+O*q;l.push(F,K,re),l.push(K,ie,re),V+=6}o.addGroup(f,V,b),f+=V,d+=Y}}static fromJSON(e){return new bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tt(a){const e={};for(let t=0;t<a.length;t++){const n=Di(a[t]);for(const i in n)e[i]=n[i]}return e}function nd(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Dc(a){return a.getRenderTarget()===null&&a.outputEncoding===Le?an:As}const cr={clone:Di,merge:Tt};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tt extends jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=nd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let kc=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class St extends kc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ai=-90,xi=1;class rd extends Xe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new St(Ai,xi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new St(Ai,xi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new St(Ai,xi,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new St(Ai,xi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new St(Ai,xi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new St(Ai,xi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=_n,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ic extends Ke{constructor(e,t,n,i,s,r,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,n,i,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ad extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ic(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$e}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bs(5,5,5),s=new tt({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Fn});s.uniforms.tEquirect.value=t;const r=new We(i,s),o=t.minFilter;return t.minFilter===On&&(t.minFilter=$e),new rd(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Kr=new C,od=new C,ld=new Ct;class Kn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Kr.subVectors(n,t).cross(od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Kr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ld.getNormalMatrix(e),i=this.coplanarPoint(Kr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Hi,Js=new C;class qa{constructor(e=new Kn,t=new Kn,n=new Kn,i=new Kn,s=new Kn,r=new Kn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],f=n[9],g=n[10],m=n[11],p=n[12],v=n[13],S=n[14],A=n[15];return t[0].setComponents(o-i,h-l,m-d,A-p).normalize(),t[1].setComponents(o+i,h+l,m+d,A+p).normalize(),t[2].setComponents(o+s,h+c,m+f,A+v).normalize(),t[3].setComponents(o-s,h-c,m-f,A-v).normalize(),t[4].setComponents(o-r,h-u,m-g,A-S).normalize(),t[5].setComponents(o+r,h+u,m+g,A+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Js.x=i.normal.x>0?e.max.x:e.min.x,Js.y=i.normal.y>0?e.max.y:e.min.y,Js.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nc(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function cd(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=a.createBuffer();a.bindBuffer(u,f),a.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,f=u.updateRange;a.bindBuffer(h,c),f.count===-1?a.bufferSubData(h,0,d):(t?a.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):a.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:r,remove:o,update:l}}class Un extends Qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],m=[],p=[];for(let v=0;v<u;v++){const S=v*d-r;for(let A=0;A<c;A++){const x=A*h-s;g.push(x,-S,0),m.push(0,0,1),p.push(A/o),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let S=0;S<o;S++){const A=S+c*v,x=S+c*(v+1),w=S+1+c*(v+1),T=S+1+c*v;f.push(A,x,T),f.push(x,w,T)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(m,3)),this.setAttribute("uv",new Ie(p,2))}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}var hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gd="vec3 transformed = vec3( position );",vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ad=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$d=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,af=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,of=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ff=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,_f=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,If=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$f=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ep=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,tp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,np=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ip=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,sp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,rp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ap=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,op=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Hp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:hd,alphamap_pars_fragment:ud,alphatest_fragment:dd,alphatest_pars_fragment:fd,aomap_fragment:pd,aomap_pars_fragment:md,begin_vertex:gd,beginnormal_vertex:vd,bsdfs:Ad,iridescence_fragment:xd,bumpmap_pars_fragment:yd,clipping_planes_fragment:Sd,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Md,clipping_planes_vertex:bd,color_fragment:_d,color_pars_fragment:Td,color_pars_vertex:Ed,color_vertex:Pd,common:Cd,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Ld,displacementmap_pars_vertex:zd,displacementmap_vertex:Dd,emissivemap_fragment:kd,emissivemap_pars_fragment:Id,encodings_fragment:Nd,encodings_pars_fragment:Fd,envmap_fragment:Od,envmap_common_pars_fragment:Bd,envmap_pars_fragment:Ud,envmap_pars_vertex:Hd,envmap_physical_pars_fragment:$d,envmap_vertex:Vd,fog_vertex:Gd,fog_pars_vertex:Jd,fog_fragment:Wd,fog_pars_fragment:Zd,gradientmap_pars_fragment:Xd,lightmap_fragment:jd,lightmap_pars_fragment:qd,lights_lambert_fragment:Yd,lights_lambert_pars_fragment:Kd,lights_pars_begin:Qd,lights_toon_fragment:ef,lights_toon_pars_fragment:tf,lights_phong_fragment:nf,lights_phong_pars_fragment:sf,lights_physical_fragment:rf,lights_physical_pars_fragment:af,lights_fragment_begin:of,lights_fragment_maps:lf,lights_fragment_end:cf,logdepthbuf_fragment:hf,logdepthbuf_pars_fragment:uf,logdepthbuf_pars_vertex:df,logdepthbuf_vertex:ff,map_fragment:pf,map_pars_fragment:mf,map_particle_fragment:gf,map_particle_pars_fragment:vf,metalnessmap_fragment:Af,metalnessmap_pars_fragment:xf,morphcolor_vertex:yf,morphnormal_vertex:Sf,morphtarget_pars_vertex:wf,morphtarget_vertex:Mf,normal_fragment_begin:bf,normal_fragment_maps:_f,normal_pars_fragment:Tf,normal_pars_vertex:Ef,normal_vertex:Pf,normalmap_pars_fragment:Cf,clearcoat_normal_fragment_begin:Rf,clearcoat_normal_fragment_maps:Lf,clearcoat_pars_fragment:zf,iridescence_pars_fragment:Df,output_fragment:kf,packing:If,premultiplied_alpha_fragment:Nf,project_vertex:Ff,dithering_fragment:Of,dithering_pars_fragment:Bf,roughnessmap_fragment:Uf,roughnessmap_pars_fragment:Hf,shadowmap_pars_fragment:Vf,shadowmap_pars_vertex:Gf,shadowmap_vertex:Jf,shadowmask_pars_fragment:Wf,skinbase_vertex:Zf,skinning_pars_vertex:Xf,skinning_vertex:jf,skinnormal_vertex:qf,specularmap_fragment:Yf,specularmap_pars_fragment:Kf,tonemapping_fragment:Qf,tonemapping_pars_fragment:$f,transmission_fragment:ep,transmission_pars_fragment:tp,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:sp,uv2_pars_fragment:rp,uv2_pars_vertex:ap,uv2_vertex:op,worldpos_vertex:lp,background_vert:cp,background_frag:hp,backgroundCube_vert:up,backgroundCube_frag:dp,cube_vert:fp,cube_frag:pp,depth_vert:mp,depth_frag:gp,distanceRGBA_vert:vp,distanceRGBA_frag:Ap,equirect_vert:xp,equirect_frag:yp,linedashed_vert:Sp,linedashed_frag:wp,meshbasic_vert:Mp,meshbasic_frag:bp,meshlambert_vert:_p,meshlambert_frag:Tp,meshmatcap_vert:Ep,meshmatcap_frag:Pp,meshnormal_vert:Cp,meshnormal_frag:Rp,meshphong_vert:Lp,meshphong_frag:zp,meshphysical_vert:Dp,meshphysical_frag:kp,meshtoon_vert:Ip,meshtoon_frag:Np,points_vert:Fp,points_frag:Op,shadow_vert:Bp,shadow_frag:Up,sprite_vert:Hp,sprite_frag:Vp},se={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ct},uv2Transform:{value:new Ct},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}}},on={basic:{uniforms:Tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new le(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Tt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Tt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new le(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Tt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Tt([se.points,se.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Tt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Tt([se.common,se.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Tt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Tt([se.sprite,se.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Tt([se.common,se.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Tt([se.lights,se.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};on.physical={uniforms:Tt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new te(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Ws={r:0,b:0,g:0};function Gp(a,e,t,n,i,s,r){const o=new le(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(p,v){let S=!1,A=v.isScene===!0?v.background:null;A&&A.isTexture&&(A=(v.backgroundBlurriness>0?t:e).get(A));const x=a.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(A=null),A===null?m(o,l):A&&A.isColor&&(m(A,1),S=!0),(a.autoClear||S)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),A&&(A.isCubeTexture||A.mapping===mr)?(u===void 0&&(u=new We(new bs(1,1,1),new tt({name:"BackgroundCubeMaterial",uniforms:Di(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,P,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=A.encoding!==Le,(h!==A||d!==A.version||f!==a.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=a.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new We(new Un(2,2),new tt({name:"BackgroundMaterial",uniforms:Di(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=A.encoding!==Le,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,f=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,v){p.getRGB(Ws,Dc(a)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,v,r)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(o,l)},render:g}}function Jp(a,e,t,n){const i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(z,O,X,Y,V){let Q=!1;if(r){const q=m(Y,X,O);c!==q&&(c=q,f(c.object)),Q=v(z,Y,X,V),Q&&S(z,Y,X,V)}else{const q=O.wireframe===!0;(c.geometry!==Y.id||c.program!==X.id||c.wireframe!==q)&&(c.geometry=Y.id,c.program=X.id,c.wireframe=q,Q=!0)}V!==null&&t.update(V,34963),(Q||u)&&(u=!1,y(z,O,X,Y),V!==null&&a.bindBuffer(34963,t.get(V).buffer))}function d(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function f(z){return n.isWebGL2?a.bindVertexArray(z):s.bindVertexArrayOES(z)}function g(z){return n.isWebGL2?a.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function m(z,O,X){const Y=X.wireframe===!0;let V=o[z.id];V===void 0&&(V={},o[z.id]=V);let Q=V[O.id];Q===void 0&&(Q={},V[O.id]=Q);let q=Q[Y];return q===void 0&&(q=p(d()),Q[Y]=q),q}function p(z){const O=[],X=[],Y=[];for(let V=0;V<i;V++)O[V]=0,X[V]=0,Y[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:Y,object:z,attributes:{},index:null}}function v(z,O,X,Y){const V=c.attributes,Q=O.attributes;let q=0;const me=X.getAttributes();for(const F in me)if(me[F].location>=0){const ie=V[F];let re=Q[F];if(re===void 0&&(F==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),F==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),ie===void 0||ie.attribute!==re||re&&ie.data!==re.data)return!0;q++}return c.attributesNum!==q||c.index!==Y}function S(z,O,X,Y){const V={},Q=O.attributes;let q=0;const me=X.getAttributes();for(const F in me)if(me[F].location>=0){let ie=Q[F];ie===void 0&&(F==="instanceMatrix"&&z.instanceMatrix&&(ie=z.instanceMatrix),F==="instanceColor"&&z.instanceColor&&(ie=z.instanceColor));const re={};re.attribute=ie,ie&&ie.data&&(re.data=ie.data),V[F]=re,q++}c.attributes=V,c.attributesNum=q,c.index=Y}function A(){const z=c.newAttributes;for(let O=0,X=z.length;O<X;O++)z[O]=0}function x(z){w(z,0)}function w(z,O){const X=c.newAttributes,Y=c.enabledAttributes,V=c.attributeDivisors;X[z]=1,Y[z]===0&&(a.enableVertexAttribArray(z),Y[z]=1),V[z]!==O&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,O),V[z]=O)}function T(){const z=c.newAttributes,O=c.enabledAttributes;for(let X=0,Y=O.length;X<Y;X++)O[X]!==z[X]&&(a.disableVertexAttribArray(X),O[X]=0)}function P(z,O,X,Y,V,Q){n.isWebGL2===!0&&(X===5124||X===5125)?a.vertexAttribIPointer(z,O,X,V,Q):a.vertexAttribPointer(z,O,X,Y,V,Q)}function y(z,O,X,Y){if(n.isWebGL2===!1&&(z.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const V=Y.attributes,Q=X.getAttributes(),q=O.defaultAttributeValues;for(const me in Q){const F=Q[me];if(F.location>=0){let K=V[me];if(K===void 0&&(me==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),me==="instanceColor"&&z.instanceColor&&(K=z.instanceColor)),K!==void 0){const ie=K.normalized,re=K.itemSize,B=t.get(K);if(B===void 0)continue;const Me=B.buffer,fe=B.type,ge=B.bytesPerElement;if(K.isInterleavedBufferAttribute){const he=K.data,Ze=he.stride,Te=K.offset;if(he.isInstancedInterleavedBuffer){for(let we=0;we<F.locationSize;we++)w(F.location+we,he.meshPerAttribute);z.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let we=0;we<F.locationSize;we++)x(F.location+we);a.bindBuffer(34962,Me);for(let we=0;we<F.locationSize;we++)P(F.location+we,re/F.locationSize,fe,ie,Ze*ge,(Te+re/F.locationSize*we)*ge)}else{if(K.isInstancedBufferAttribute){for(let he=0;he<F.locationSize;he++)w(F.location+he,K.meshPerAttribute);z.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<F.locationSize;he++)x(F.location+he);a.bindBuffer(34962,Me);for(let he=0;he<F.locationSize;he++)P(F.location+he,re/F.locationSize,fe,ie,re*ge,re/F.locationSize*he*ge)}}else if(q!==void 0){const ie=q[me];if(ie!==void 0)switch(ie.length){case 2:a.vertexAttrib2fv(F.location,ie);break;case 3:a.vertexAttrib3fv(F.location,ie);break;case 4:a.vertexAttrib4fv(F.location,ie);break;default:a.vertexAttrib1fv(F.location,ie)}}}}T()}function b(){H();for(const z in o){const O=o[z];for(const X in O){const Y=O[X];for(const V in Y)g(Y[V].object),delete Y[V];delete O[X]}delete o[z]}}function R(z){if(o[z.id]===void 0)return;const O=o[z.id];for(const X in O){const Y=O[X];for(const V in Y)g(Y[V].object),delete Y[V];delete O[X]}delete o[z.id]}function I(z){for(const O in o){const X=o[O];if(X[z.id]===void 0)continue;const Y=X[z.id];for(const V in Y)g(Y[V].object),delete Y[V];delete X[z.id]}}function H(){D(),u=!0,c!==l&&(c=l,f(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:x,disableUnusedAttributes:T}}function Wp(a,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,u){a.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,f;if(i)d=a,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,u,h),t.update(u,s,h)}this.setMode=r,this.render=o,this.renderInstances=l}function Zp(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),d=a.getParameter(35660),f=a.getParameter(3379),g=a.getParameter(34076),m=a.getParameter(34921),p=a.getParameter(36347),v=a.getParameter(36348),S=a.getParameter(36349),A=d>0,x=r||e.has("OES_texture_float"),w=A&&x,T=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:A,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:T}}function Xp(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Kn,o=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,v=a.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,A=S*4;let x=v.clippingState||null;l.value=x,x=u(g,d,A,f);for(let w=0;w!==A;++w)x[w]=t[w];v.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const v=f+m*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<v)&&(p=new Float32Array(v));for(let A=0,x=f;A!==m;++A,x+=4)r.copy(h[A]).applyMatrix4(S,o),r.normal.toArray(p,x),p[x+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function jp(a){let e=new WeakMap;function t(r,o){return o===ar?r.mapping=Ci:o===wa&&(r.mapping=Ri),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===ar||o===wa)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new ad(l.height/2);return c.fromEquirectangularTexture(a,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Vi extends kc{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ti=4,cl=[.125,.215,.35,.446,.526,.582],$n=20,Qr=new Vi,hl=new le;let $r=null;const Qn=(1+Math.sqrt(5))/2,Si=1/Qn,ul=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Qn,Si),new C(0,Qn,-Si),new C(Si,0,Qn),new C(-Si,0,Qn),new C(Qn,Si,0),new C(-Qn,Si,0)];class dl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$r=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($r),e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$r=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Mn,format:Nt,encoding:Bn,depthBuffer:!1},i=fl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(s)),this._blurMaterial=Yp(s,e,t)}return i}_compileMaterial(e){const t=new We(this._lodPlanes[0],e);this._renderer.compile(t,Qr)}_sceneToCubeUV(e,t,n,i){const o=new St(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(hl),u.toneMapping=_n,u.autoClear=!1;const f=new Zt({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new We(new bs,f);let m=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,m=!0):(f.color.copy(hl),m=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):S===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const A=this._cubeSize;Zs(i,S*A,v>2?A:0,A,A),u.setRenderTarget(i),m&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ci||e.mapping===Ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new We(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=ul[(i-1)%ul.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new We(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*$n-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):$n;p>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$n}`);const v=[];let S=0;for(let P=0;P<$n;++P){const y=P/m,b=Math.exp(-y*y/2);v.push(b),P===0?S+=b:P<p&&(S+=2*b)}for(let P=0;P<v.length;P++)v[P]=v[P]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=v,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-n;const x=this._sizeLods[i],w=3*x*(i>A-Ti?i-A+Ti:0),T=4*(this._cubeSize-x);Zs(t,w,T,3*x,2*x),l.setRenderTarget(t),l.render(h,Qr)}}function qp(a){const e=[],t=[],n=[];let i=a;const s=a-Ti+1+cl.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>a-Ti?l=cl[r-a+Ti-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,m=3,p=2,v=1,S=new Float32Array(m*g*f),A=new Float32Array(p*g*f),x=new Float32Array(v*g*f);for(let T=0;T<f;T++){const P=T%3*2/3-1,y=T>2?0:-1,b=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];S.set(b,m*g*T),A.set(d,p*g*T);const R=[T,T,T,T,T,T];x.set(R,v*g*T)}const w=new Qe;w.setAttribute("position",new Ge(S,m)),w.setAttribute("uv",new Ge(A,p)),w.setAttribute("faceIndex",new Ge(x,v)),e.push(w),i>Ti&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fl(a,e,t){const n=new Lt(a,e,t);return n.texture.mapping=mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Yp(a,e,t){const n=new Float32Array($n),i=new C(0,1,0);return new tt({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function pl(){return new tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ml(){return new tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kp(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ar||l===wa,u=l===Ci||l===Ri;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new dl(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new dl(a));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Qp(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $p(a,e,t,n){const i={},s=new WeakMap;function r(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const f=h.morphAttributes;for(const g in f){const m=f[g];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let m=0;if(f!==null){const S=f.array;m=f.version;for(let A=0,x=S.length;A<x;A+=3){const w=S[A+0],T=S[A+1],P=S[A+2];d.push(w,T,T,P,P,w)}}else{const S=g.array;m=g.version;for(let A=0,x=S.length/3-1;A<x;A+=3){const w=A+0,T=A+1,P=A+2;d.push(w,T,T,P,P,w)}}const p=new(Tc(d)?zc:ja)(d,1);p.version=m;const v=s.get(h);v&&e.remove(v),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function em(a,e,t,n){const i=n.isWebGL2;let s;function r(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,f){a.drawElements(s,f,o,d*l),t.update(f,s,1)}function h(d,f,g){if(g===0)return;let m,p;if(i)m=a,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,f,o,d*l,g),t.update(f,s,g)}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=h}function tm(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function nm(a,e){return a[0]-e[0]}function im(a,e){return Math.abs(e[1])-Math.abs(a[1])}function sm(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new Ue,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==m){let O=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",O)};p!==void 0&&p.texture.dispose();const A=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let b=0;A===!0&&(b=1),x===!0&&(b=2),w===!0&&(b=3);let R=u.attributes.position.count*b,I=1;R>e.maxTextureSize&&(I=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const H=new Float32Array(R*I*4*m),D=new Rc(H,R,I,m);D.type=Gt,D.needsUpdate=!0;const z=b*4;for(let X=0;X<m;X++){const Y=T[X],V=P[X],Q=y[X],q=R*I*4*X;for(let me=0;me<Y.count;me++){const F=me*z;A===!0&&(r.fromBufferAttribute(Y,me),H[q+F+0]=r.x,H[q+F+1]=r.y,H[q+F+2]=r.z,H[q+F+3]=0),x===!0&&(r.fromBufferAttribute(V,me),H[q+F+4]=r.x,H[q+F+5]=r.y,H[q+F+6]=r.z,H[q+F+7]=0),w===!0&&(r.fromBufferAttribute(Q,me),H[q+F+8]=r.x,H[q+F+9]=r.y,H[q+F+10]=r.z,H[q+F+11]=Q.itemSize===4?r.w:1)}}p={count:m,texture:D,size:new te(R,I)},s.set(u,p),u.addEventListener("dispose",O)}let v=0;for(let A=0;A<f.length;A++)v+=f[A];const S=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(a,"morphTargetBaseInfluence",S),d.getUniforms().setValue(a,"morphTargetInfluences",f),d.getUniforms().setValue(a,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let m=n[u.id];if(m===void 0||m.length!==g){m=[];for(let x=0;x<g;x++)m[x]=[x,0];n[u.id]=m}for(let x=0;x<g;x++){const w=m[x];w[0]=x,w[1]=f[x]}m.sort(im);for(let x=0;x<8;x++)x<g&&m[x][1]?(o[x][0]=m[x][0],o[x][1]=m[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(nm);const p=u.morphAttributes.position,v=u.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const w=o[x],T=w[0],P=w[1];T!==Number.MAX_SAFE_INTEGER&&P?(p&&u.getAttribute("morphTarget"+x)!==p[T]&&u.setAttribute("morphTarget"+x,p[T]),v&&u.getAttribute("morphNormal"+x)!==v[T]&&u.setAttribute("morphNormal"+x,v[T]),i[x]=P,S+=P):(p&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),v&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const A=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(a,"morphTargetBaseInfluence",A),d.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function rm(a,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const Fc=new Ke,Oc=new Rc,Bc=new Wu,Uc=new Ic,gl=[],vl=[],Al=new Float32Array(16),xl=new Float32Array(9),yl=new Float32Array(4);function Gi(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=gl[i];if(s===void 0&&(s=new Float32Array(i),gl[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function lt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function ct(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function vr(a,e){let t=vl[e];t===void 0&&(t=new Int32Array(e),vl[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function am(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function om(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;a.uniform2fv(this.addr,e),ct(t,e)}}function lm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;a.uniform3fv(this.addr,e),ct(t,e)}}function cm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;a.uniform4fv(this.addr,e),ct(t,e)}}function hm(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;yl.set(n),a.uniformMatrix2fv(this.addr,!1,yl),ct(t,n)}}function um(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;xl.set(n),a.uniformMatrix3fv(this.addr,!1,xl),ct(t,n)}}function dm(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Al.set(n),a.uniformMatrix4fv(this.addr,!1,Al),ct(t,n)}}function fm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function pm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;a.uniform2iv(this.addr,e),ct(t,e)}}function mm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;a.uniform3iv(this.addr,e),ct(t,e)}}function gm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;a.uniform4iv(this.addr,e),ct(t,e)}}function vm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Am(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;a.uniform2uiv(this.addr,e),ct(t,e)}}function xm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;a.uniform3uiv(this.addr,e),ct(t,e)}}function ym(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;a.uniform4uiv(this.addr,e),ct(t,e)}}function Sm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Fc,i)}function wm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bc,i)}function Mm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Uc,i)}function bm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Oc,i)}function _m(a){switch(a){case 5126:return am;case 35664:return om;case 35665:return lm;case 35666:return cm;case 35674:return hm;case 35675:return um;case 35676:return dm;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return vm;case 36294:return Am;case 36295:return xm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return bm}}function Tm(a,e){a.uniform1fv(this.addr,e)}function Em(a,e){const t=Gi(e,this.size,2);a.uniform2fv(this.addr,t)}function Pm(a,e){const t=Gi(e,this.size,3);a.uniform3fv(this.addr,t)}function Cm(a,e){const t=Gi(e,this.size,4);a.uniform4fv(this.addr,t)}function Rm(a,e){const t=Gi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Lm(a,e){const t=Gi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function zm(a,e){const t=Gi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Dm(a,e){a.uniform1iv(this.addr,e)}function km(a,e){a.uniform2iv(this.addr,e)}function Im(a,e){a.uniform3iv(this.addr,e)}function Nm(a,e){a.uniform4iv(this.addr,e)}function Fm(a,e){a.uniform1uiv(this.addr,e)}function Om(a,e){a.uniform2uiv(this.addr,e)}function Bm(a,e){a.uniform3uiv(this.addr,e)}function Um(a,e){a.uniform4uiv(this.addr,e)}function Hm(a,e,t){const n=this.cache,i=e.length,s=vr(t,i);lt(n,s)||(a.uniform1iv(this.addr,s),ct(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Fc,s[r])}function Vm(a,e,t){const n=this.cache,i=e.length,s=vr(t,i);lt(n,s)||(a.uniform1iv(this.addr,s),ct(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Bc,s[r])}function Gm(a,e,t){const n=this.cache,i=e.length,s=vr(t,i);lt(n,s)||(a.uniform1iv(this.addr,s),ct(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Uc,s[r])}function Jm(a,e,t){const n=this.cache,i=e.length,s=vr(t,i);lt(n,s)||(a.uniform1iv(this.addr,s),ct(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Oc,s[r])}function Wm(a){switch(a){case 5126:return Tm;case 35664:return Em;case 35665:return Pm;case 35666:return Cm;case 35674:return Rm;case 35675:return Lm;case 35676:return zm;case 5124:case 35670:return Dm;case 35667:case 35671:return km;case 35668:case 35672:return Im;case 35669:case 35673:return Nm;case 5125:return Fm;case 36294:return Om;case 36295:return Bm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Jm}}class Zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=_m(t.type)}}class Xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Wm(t.type)}}class jm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function Sl(a,e){a.seq.push(e),a.map[e.id]=e}function qm(a,e,t){const n=a.name,i=n.length;for(ea.lastIndex=0;;){const s=ea.exec(n),r=ea.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Sl(t,c===void 0?new Zm(o,a,e):new Xm(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new jm(o),Sl(t,h)),t=h}}}class ir{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);qm(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function wl(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Ym=0;function Km(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Qm(a){switch(a){case Bn:return["Linear","( value )"];case Le:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Ml(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Km(a.getShaderSource(e),r)}else return i}function $m(a,e){const t=Qm(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function eg(a,e){let t;switch(e){case ru:t="Linear";break;case au:t="Reinhard";break;case ou:t="OptimizedCineon";break;case lu:t="ACESFilmic";break;case cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tg(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function ng(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ig(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function rs(a){return a!==""}function bl(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(a){return a.replace(sg,rg)}function rg(a,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Pa(t)}const ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tl(a){return a.replace(ag,og)}function og(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function El(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lg(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===xc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ss&&(e="SHADOWMAP_TYPE_VSM"),e}function cg(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ci:case Ri:e="ENVMAP_TYPE_CUBE";break;case mr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hg(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ri:e="ENVMAP_MODE_REFRACTION";break}return e}function ug(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case pr:e="ENVMAP_BLENDING_MULTIPLY";break;case iu:e="ENVMAP_BLENDING_MIX";break;case su:e="ENVMAP_BLENDING_ADD";break}return e}function dg(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fg(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=lg(t),c=cg(t),u=hg(t),h=ug(t),d=dg(t),f=t.isWebGL2?"":tg(t),g=ng(s),m=i.createProgram();let p,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(rs).join(`
`),p.length>0&&(p+=`
`),v=[f,g].filter(rs).join(`
`),v.length>0&&(v+=`
`)):(p=[El(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),v=[f,El(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Ee.tonemapping_pars_fragment:"",t.toneMapping!==_n?eg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,$m("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),r=Pa(r),r=bl(r,t),r=_l(r,t),o=Pa(o),o=bl(o,t),o=_l(o,t),r=Tl(r),o=Tl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const A=S+p+r,x=S+v+o,w=wl(i,35633,A),T=wl(i,35632,x);if(i.attachShader(m,w),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),a.debug.checkShaderErrors){const b=i.getProgramInfoLog(m).trim(),R=i.getShaderInfoLog(w).trim(),I=i.getShaderInfoLog(T).trim();let H=!0,D=!0;if(i.getProgramParameter(m,35714)===!1){H=!1;const z=Ml(i,w,"vertex"),O=Ml(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+b+`
`+z+`
`+O)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(R===""||I==="")&&(D=!1);D&&(this.diagnostics={runnable:H,programLog:b,vertexShader:{log:R,prefix:p},fragmentShader:{log:I,prefix:v}})}i.deleteShader(w),i.deleteShader(T);let P;this.getUniforms=function(){return P===void 0&&(P=new ir(i,m)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=ig(i,m)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Ym++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}let pg=0;class mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gg(e),t.set(e,n)),n}}class gg{constructor(e){this.id=pg++,this.code=e,this.usedTimes=0}}function vg(a,e,t,n,i,s,r){const o=new Lc,l=new mg,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,b,R,I,H){const D=I.fog,z=H.geometry,O=y.isMeshStandardMaterial?I.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),Y=X&&X.mapping===mr?X.image.height:null,V=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const Q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,q=Q!==void 0?Q.length:0;let me=0;z.morphAttributes.position!==void 0&&(me=1),z.morphAttributes.normal!==void 0&&(me=2),z.morphAttributes.color!==void 0&&(me=3);let F,K,ie,re;if(V){const Ze=on[V];F=Ze.vertexShader,K=Ze.fragmentShader}else F=y.vertexShader,K=y.fragmentShader,l.update(y),ie=l.getVertexShaderID(y),re=l.getFragmentShaderID(y);const B=a.getRenderTarget(),Me=y.alphaTest>0,fe=y.clearcoat>0,ge=y.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:y.type,vertexShader:F,fragmentShader:K,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:d,outputEncoding:B===null?a.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Bn,map:!!y.map,matcap:!!y.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:Y,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Cu,tangentSpaceNormalMap:y.normalMapType===gr,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Le,clearcoat:fe,clearcoatMap:fe&&!!y.clearcoatMap,clearcoatRoughnessMap:fe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!y.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!y.iridescenceMap,iridescenceThicknessMap:ge&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===ni,alphaMap:!!y.alphaMap,alphaTest:Me,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!z.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:me,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:y.toneMapped?a.toneMapping:_n,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wn,flipSided:y.side===Rt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)b.push(R),b.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(v(b,y),S(b,y),b.push(a.outputEncoding)),b.push(y.customProgramCacheKey),b.join()}function v(y,b){y.push(b.precision),y.push(b.outputEncoding),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.combine),y.push(b.vertexUvs),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function S(y,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.map&&o.enable(4),b.matcap&&o.enable(5),b.envMap&&o.enable(6),b.lightMap&&o.enable(7),b.aoMap&&o.enable(8),b.emissiveMap&&o.enable(9),b.bumpMap&&o.enable(10),b.normalMap&&o.enable(11),b.objectSpaceNormalMap&&o.enable(12),b.tangentSpaceNormalMap&&o.enable(13),b.clearcoat&&o.enable(14),b.clearcoatMap&&o.enable(15),b.clearcoatRoughnessMap&&o.enable(16),b.clearcoatNormalMap&&o.enable(17),b.iridescence&&o.enable(18),b.iridescenceMap&&o.enable(19),b.iridescenceThicknessMap&&o.enable(20),b.displacementMap&&o.enable(21),b.specularMap&&o.enable(22),b.roughnessMap&&o.enable(23),b.metalnessMap&&o.enable(24),b.gradientMap&&o.enable(25),b.alphaMap&&o.enable(26),b.alphaTest&&o.enable(27),b.vertexColors&&o.enable(28),b.vertexAlphas&&o.enable(29),b.vertexUvs&&o.enable(30),b.vertexTangents&&o.enable(31),b.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.physicallyCorrectLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.specularIntensityMap&&o.enable(15),b.specularColorMap&&o.enable(16),b.transmission&&o.enable(17),b.transmissionMap&&o.enable(18),b.thicknessMap&&o.enable(19),b.sheen&&o.enable(20),b.sheenColorMap&&o.enable(21),b.sheenRoughnessMap&&o.enable(22),b.decodeVideoTexture&&o.enable(23),b.opaque&&o.enable(24),y.push(o.mask)}function A(y){const b=g[y.type];let R;if(b){const I=on[b];R=cr.clone(I.uniforms)}else R=y.uniforms;return R}function x(y,b){let R;for(let I=0,H=c.length;I<H;I++){const D=c[I];if(D.cacheKey===b){R=D,++R.usedTimes;break}}return R===void 0&&(R=new fg(a,b,y,s),c.push(R)),R}function w(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:x,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:P}}function Ag(){let a=new WeakMap;function e(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function t(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function xg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Pl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Cl(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(h,d,f,g,m,p){let v=a[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},a[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=f,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=m,v.group=p),e++,v}function o(h,d,f,g,m,p){const v=r(h,d,f,g,m,p);f.transmission>0?n.push(v):f.transparent===!0?i.push(v):t.push(v)}function l(h,d,f,g,m,p){const v=r(h,d,f,g,m,p);f.transmission>0?n.unshift(v):f.transparent===!0?i.unshift(v):t.unshift(v)}function c(h,d){t.length>1&&t.sort(h||xg),n.length>1&&n.sort(d||Pl),i.length>1&&i.sort(d||Pl)}function u(){for(let h=e,d=a.length;h<d;h++){const f=a[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function yg(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new Cl,a.set(n,[r])):i>=s.length?(r=new Cl,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function Sg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new le};break;case"SpotLight":t={position:new C,direction:new C,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new le,groundColor:new le};break;case"RectAreaLight":t={color:new le,position:new C,halfWidth:new C,halfHeight:new C};break}return a[e.id]=t,t}}}function wg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Mg=0;function bg(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function _g(a,e){const t=new Sg,n=wg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new C);const s=new C,r=new ue,o=new ue;function l(u,h){let d=0,f=0,g=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let m=0,p=0,v=0,S=0,A=0,x=0,w=0,T=0,P=0,y=0;u.sort(bg);const b=h!==!0?Math.PI:1;for(let I=0,H=u.length;I<H;I++){const D=u[I],z=D.color,O=D.intensity,X=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=z.r*O*b,f+=z.g*O*b,g+=z.b*O*b;else if(D.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(D.sh.coefficients[V],O);else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const Q=D.shadow,q=n.get(D);q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,i.directionalShadow[m]=q,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=D.shadow.matrix,x++}i.directional[m]=V,m++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(z).multiplyScalar(O*b),V.distance=X,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,i.spot[v]=V;const Q=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,Q.updateMatrices(D),D.castShadow&&y++),i.spotLightMatrix[v]=Q.matrix,D.castShadow){const q=n.get(D);q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=Y,T++}v++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(z).multiplyScalar(O),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),i.rectArea[S]=V,S++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*b),V.distance=D.distance,V.decay=D.decay,D.castShadow){const Q=D.shadow,q=n.get(D);q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,i.pointShadow[p]=q,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=D.shadow.matrix,w++}i.point[p]=V,p++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(O*b),V.groundColor.copy(D.groundColor).multiplyScalar(O*b),i.hemi[A]=V,A++}}S>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==m||R.pointLength!==p||R.spotLength!==v||R.rectAreaLength!==S||R.hemiLength!==A||R.numDirectionalShadows!==x||R.numPointShadows!==w||R.numSpotShadows!==T||R.numSpotMaps!==P)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=S,i.point.length=p,i.hemi.length=A,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=T+P-y,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=y,R.directionalLength=m,R.pointLength=p,R.spotLength=v,R.rectAreaLength=S,R.hemiLength=A,R.numDirectionalShadows=x,R.numPointShadows=w,R.numSpotShadows=T,R.numSpotMaps=P,i.version=Mg++)}function c(u,h){let d=0,f=0,g=0,m=0,p=0;const v=h.matrixWorldInverse;for(let S=0,A=u.length;S<A;S++){const x=u[S];if(x.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),d++}else if(x.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),g++}else if(x.isRectAreaLight){const w=i.rectArea[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(v),o.identity(),r.copy(x.matrixWorld),r.premultiply(v),o.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(v),f++}else if(x.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:i}}function Rl(a,e){const t=new _g(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Tg(a,e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new Rl(a,e),t.set(s,[l])):r>=o.length?(l=new Rl(a,e),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Eg extends jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pg extends jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lg(a,e,t){let n=new qa;const i=new te,s=new te,r=new Ue,o=new Eg({depthPacking:Pu}),l=new Pg,c={},u=t.maxTextureSize,h={[Tn]:Rt,[Rt]:Tn,[wn]:wn},d=new tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Cg,fragmentShader:Rg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Qe;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new We(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc,this.render=function(x,w,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const P=a.getRenderTarget(),y=a.getActiveCubeFace(),b=a.getActiveMipmapLevel(),R=a.state;R.setBlending(Fn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let I=0,H=x.length;I<H;I++){const D=x[I],z=D.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const O=z.getFrameExtents();if(i.multiply(O),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/O.x),i.x=s.x*O.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/O.y),i.y=s.y*O.y,z.mapSize.y=s.y)),z.map===null){const Y=this.type!==ss?{minFilter:pt,magFilter:pt}:{};z.map=new Lt(i.x,i.y,Y),z.map.texture.name=D.name+".shadowMap",z.camera.updateProjectionMatrix()}a.setRenderTarget(z.map),a.clear();const X=z.getViewportCount();for(let Y=0;Y<X;Y++){const V=z.getViewport(Y);r.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),R.viewport(r),z.updateMatrices(D,Y),n=z.getFrustum(),A(w,T,z.camera,D,this.type)}z.isPointLightShadow!==!0&&this.type===ss&&v(z,T),z.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(P,y,b)};function v(x,w){const T=e.update(m);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Lt(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,a.setRenderTarget(x.mapPass),a.clear(),a.renderBufferDirect(w,null,T,d,m,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,a.setRenderTarget(x.map),a.clear(),a.renderBufferDirect(w,null,T,f,m,null)}function S(x,w,T,P,y,b){let R=null;const I=T.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(I!==void 0)R=I;else if(R=T.isPointLight===!0?l:o,a.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=R.uuid,D=w.uuid;let z=c[H];z===void 0&&(z={},c[H]=z);let O=z[D];O===void 0&&(O=R.clone(),z[D]=O),R=O}return R.visible=w.visible,R.wireframe=w.wireframe,b===ss?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:h[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(T.matrixWorld),R.nearDistance=P,R.farDistance=y),R}function A(x,w,T,P,y){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&y===ss)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,x.matrixWorld);const I=e.update(x),H=x.material;if(Array.isArray(H)){const D=I.groups;for(let z=0,O=D.length;z<O;z++){const X=D[z],Y=H[X.materialIndex];if(Y&&Y.visible){const V=S(x,Y,P,T.near,T.far,y);a.renderBufferDirect(T,null,I,V,x,X)}}}else if(H.visible){const D=S(x,H,P,T.near,T.far,y);a.renderBufferDirect(T,null,I,D,x,null)}}const R=x.children;for(let I=0,H=R.length;I<H;I++)A(R[I],w,T,P,y)}}function zg(a,e,t){const n=t.isWebGL2;function i(){let L=!1;const G=new Ue;let $=null;const ce=new Ue(0,0,0,0);return{setMask:function(pe){$!==pe&&!L&&(a.colorMask(pe,pe,pe,pe),$=pe)},setLocked:function(pe){L=pe},setClear:function(pe,He,ut,xt,Jn){Jn===!0&&(pe*=xt,He*=xt,ut*=xt),G.set(pe,He,ut,xt),ce.equals(G)===!1&&(a.clearColor(pe,He,ut,xt),ce.copy(G))},reset:function(){L=!1,$=null,ce.set(-1,0,0,0)}}}function s(){let L=!1,G=null,$=null,ce=null;return{setTest:function(pe){pe?Me(2929):fe(2929)},setMask:function(pe){G!==pe&&!L&&(a.depthMask(pe),G=pe)},setFunc:function(pe){if($!==pe){switch(pe){case Yh:a.depthFunc(512);break;case Kh:a.depthFunc(519);break;case Qh:a.depthFunc(513);break;case Sa:a.depthFunc(515);break;case $h:a.depthFunc(514);break;case eu:a.depthFunc(518);break;case tu:a.depthFunc(516);break;case nu:a.depthFunc(517);break;default:a.depthFunc(515)}$=pe}},setLocked:function(pe){L=pe},setClear:function(pe){ce!==pe&&(a.clearDepth(pe),ce=pe)},reset:function(){L=!1,G=null,$=null,ce=null}}}function r(){let L=!1,G=null,$=null,ce=null,pe=null,He=null,ut=null,xt=null,Jn=null;return{setTest:function(Ye){L||(Ye?Me(2960):fe(2960))},setMask:function(Ye){G!==Ye&&!L&&(a.stencilMask(Ye),G=Ye)},setFunc:function(Ye,dn,Bt){($!==Ye||ce!==dn||pe!==Bt)&&(a.stencilFunc(Ye,dn,Bt),$=Ye,ce=dn,pe=Bt)},setOp:function(Ye,dn,Bt){(He!==Ye||ut!==dn||xt!==Bt)&&(a.stencilOp(Ye,dn,Bt),He=Ye,ut=dn,xt=Bt)},setLocked:function(Ye){L=Ye},setClear:function(Ye){Jn!==Ye&&(a.clearStencil(Ye),Jn=Ye)},reset:function(){L=!1,G=null,$=null,ce=null,pe=null,He=null,ut=null,xt=null,Jn=null}}}const o=new i,l=new s,c=new r,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,m=[],p=null,v=!1,S=null,A=null,x=null,w=null,T=null,P=null,y=null,b=!1,R=null,I=null,H=null,D=null,z=null;const O=a.getParameter(35661);let X=!1,Y=0;const V=a.getParameter(7938);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=Y>=2);let Q=null,q={};const me=a.getParameter(3088),F=a.getParameter(2978),K=new Ue().fromArray(me),ie=new Ue().fromArray(F);function re(L,G,$){const ce=new Uint8Array(4),pe=a.createTexture();a.bindTexture(L,pe),a.texParameteri(L,10241,9728),a.texParameteri(L,10240,9728);for(let He=0;He<$;He++)a.texImage2D(G+He,0,6408,1,1,0,6408,5121,ce);return pe}const B={};B[3553]=re(3553,3553,1),B[34067]=re(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(2929),l.setFunc(Sa),At(!1),Ot(So),Me(2884),wt(Fn);function Me(L){d[L]!==!0&&(a.enable(L),d[L]=!0)}function fe(L){d[L]!==!1&&(a.disable(L),d[L]=!1)}function ge(L,G){return f[L]!==G?(a.bindFramebuffer(L,G),f[L]=G,n&&(L===36009&&(f[36160]=G),L===36160&&(f[36009]=G)),!0):!1}function he(L,G){let $=m,ce=!1;if(L)if($=g.get(G),$===void 0&&($=[],g.set(G,$)),L.isWebGLMultipleRenderTargets){const pe=L.texture;if($.length!==pe.length||$[0]!==36064){for(let He=0,ut=pe.length;He<ut;He++)$[He]=36064+He;$.length=pe.length,ce=!0}}else $[0]!==36064&&($[0]=36064,ce=!0);else $[0]!==1029&&($[0]=1029,ce=!0);ce&&(t.isWebGL2?a.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ze(L){return p!==L?(a.useProgram(L),p=L,!0):!1}const Te={[bi]:32774,[Bh]:32778,[Uh]:32779};if(n)Te[Mo]=32775,Te[bo]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Te[Mo]=L.MIN_EXT,Te[bo]=L.MAX_EXT)}const we={[Hh]:0,[Vh]:1,[Gh]:768,[yc]:770,[qh]:776,[Xh]:774,[Wh]:772,[Jh]:769,[Sc]:771,[jh]:775,[Zh]:773};function wt(L,G,$,ce,pe,He,ut,xt){if(L===Fn){v===!0&&(fe(3042),v=!1);return}if(v===!1&&(Me(3042),v=!0),L!==Oh){if(L!==S||xt!==b){if((A!==bi||T!==bi)&&(a.blendEquation(32774),A=bi,T=bi),xt)switch(L){case ni:a.blendFuncSeparate(1,771,1,771);break;case rr:a.blendFunc(1,1);break;case wo:a.blendFuncSeparate(0,769,0,1);break;case ya:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ni:a.blendFuncSeparate(770,771,1,771);break;case rr:a.blendFunc(770,1);break;case wo:a.blendFuncSeparate(0,769,0,1);break;case ya:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,w=null,P=null,y=null,S=L,b=xt}return}pe=pe||G,He=He||$,ut=ut||ce,(G!==A||pe!==T)&&(a.blendEquationSeparate(Te[G],Te[pe]),A=G,T=pe),($!==x||ce!==w||He!==P||ut!==y)&&(a.blendFuncSeparate(we[$],we[ce],we[He],we[ut]),x=$,w=ce,P=He,y=ut),S=L,b=!1}function Ft(L,G){L.side===wn?fe(2884):Me(2884);let $=L.side===Rt;G&&($=!$),At($),L.blending===ni&&L.transparent===!1?wt(Fn):wt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const ce=L.stencilWrite;c.setTest(ce),ce&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ve(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Me(32926):fe(32926)}function At(L){R!==L&&(L?a.frontFace(2304):a.frontFace(2305),R=L)}function Ot(L){L!==Ih?(Me(2884),L!==I&&(L===So?a.cullFace(1029):L===Nh?a.cullFace(1028):a.cullFace(1032))):fe(2884),I=L}function rt(L){L!==H&&(X&&a.lineWidth(L),H=L)}function Ve(L,G,$){L?(Me(32823),(D!==G||z!==$)&&(a.polygonOffset(G,$),D=G,z=$)):fe(32823)}function un(L){L?Me(3089):fe(3089)}function qt(L){L===void 0&&(L=33984+O-1),Q!==L&&(a.activeTexture(L),Q=L)}function E(L,G,$){$===void 0&&(Q===null?$=33984+O-1:$=Q);let ce=q[$];ce===void 0&&(ce={type:void 0,texture:void 0},q[$]=ce),(ce.type!==L||ce.texture!==G)&&(Q!==$&&(a.activeTexture($),Q=$),a.bindTexture(L,G||B[L]),ce.type=L,ce.texture=G)}function M(){const L=q[Q];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function W(){try{a.compressedTexImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{a.compressedTexImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{a.texSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{a.texSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{a.texStorage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{a.texStorage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{a.texImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{a.texImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(L){K.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function ve(L){ie.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),ie.copy(L))}function Oe(L,G){let $=h.get(G);$===void 0&&($=new WeakMap,h.set(G,$));let ce=$.get(L);ce===void 0&&(ce=a.getUniformBlockIndex(G,L.name),$.set(L,ce))}function qe(L,G){const ce=h.get(G).get(L);u.get(G)!==ce&&(a.uniformBlockBinding(G,ce,L.__bindingPointIndex),u.set(G,ce))}function ht(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},Q=null,q={},f={},g=new WeakMap,m=[],p=null,v=!1,S=null,A=null,x=null,w=null,T=null,P=null,y=null,b=!1,R=null,I=null,H=null,D=null,z=null,K.set(0,0,a.canvas.width,a.canvas.height),ie.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Me,disable:fe,bindFramebuffer:ge,drawBuffers:he,useProgram:Ze,setBlending:wt,setMaterial:Ft,setFlipSided:At,setCullFace:Ot,setLineWidth:rt,setPolygonOffset:Ve,setScissorTest:un,activeTexture:qt,bindTexture:E,unbindTexture:M,compressedTexImage2D:W,compressedTexImage3D:ee,texImage2D:Se,texImage3D:de,updateUBOMapping:Oe,uniformBlockBinding:qe,texStorage2D:j,texStorage3D:xe,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:be,compressedTexSubImage3D:oe,scissor:ye,viewport:ve,reset:ht}}function Dg(a,e,t,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,M){return v?new OffscreenCanvas(E,M):ys("canvas")}function A(E,M,W,ee){let ne=1;if((E.width>ee||E.height>ee)&&(ne=ee/Math.max(E.width,E.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ae=M?lr:Math.floor,be=ae(ne*E.width),oe=ae(ne*E.height);m===void 0&&(m=S(be,oe));const j=W?S(be,oe):m;return j.width=be,j.height=oe,j.getContext("2d").drawImage(E,0,0,be,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+be+"x"+oe+")."),j}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function x(E){return Ea(E.width)&&Ea(E.height)}function w(E){return o?!1:E.wrapS!==mt||E.wrapT!==mt||E.minFilter!==pt&&E.minFilter!==$e}function T(E,M){return E.generateMipmaps&&M&&E.minFilter!==pt&&E.minFilter!==$e}function P(E){a.generateMipmap(E)}function y(E,M,W,ee,ne=!1){if(o===!1)return M;if(E!==null){if(a[E]!==void 0)return a[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae=M;return M===6403&&(W===5126&&(ae=33326),W===5131&&(ae=33325),W===5121&&(ae=33321)),M===33319&&(W===5126&&(ae=33328),W===5131&&(ae=33327),W===5121&&(ae=33323)),M===6408&&(W===5126&&(ae=34836),W===5131&&(ae=34842),W===5121&&(ae=ee===Le&&ne===!1?35907:32856),W===32819&&(ae=32854),W===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function b(E,M,W){return T(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==pt&&E.minFilter!==$e?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function R(E){return E===pt||E===Ma||E===tr?9728:9729}function I(E){const M=E.target;M.removeEventListener("dispose",I),D(M),M.isVideoTexture&&g.delete(M)}function H(E){const M=E.target;M.removeEventListener("dispose",H),O(M)}function D(E){const M=n.get(E);if(M.__webglInit===void 0)return;const W=E.source,ee=p.get(W);if(ee){const ne=ee[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&z(E),Object.keys(ee).length===0&&p.delete(W)}n.remove(E)}function z(E){const M=n.get(E);a.deleteTexture(M.__webglTexture);const W=E.source,ee=p.get(W);delete ee[M.__cacheKey],r.memory.textures--}function O(E){const M=E.texture,W=n.get(E),ee=n.get(M);if(ee.__webglTexture!==void 0&&(a.deleteTexture(ee.__webglTexture),r.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)a.deleteFramebuffer(W.__webglFramebuffer[ne]),W.__webglDepthbuffer&&a.deleteRenderbuffer(W.__webglDepthbuffer[ne]);else{if(a.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&a.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&a.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ne=0;ne<W.__webglColorRenderbuffer.length;ne++)W.__webglColorRenderbuffer[ne]&&a.deleteRenderbuffer(W.__webglColorRenderbuffer[ne]);W.__webglDepthRenderbuffer&&a.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,ae=M.length;ne<ae;ne++){const be=n.get(M[ne]);be.__webglTexture&&(a.deleteTexture(be.__webglTexture),r.memory.textures--),n.remove(M[ne])}n.remove(M),n.remove(E)}let X=0;function Y(){X=0}function V(){const E=X;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),X+=1,E}function Q(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function q(E,M){const W=n.get(E);if(E.isVideoTexture&&un(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(W,E,M);return}}t.bindTexture(3553,W.__webglTexture,33984+M)}function me(E,M){const W=n.get(E);if(E.version>0&&W.__version!==E.version){fe(W,E,M);return}t.bindTexture(35866,W.__webglTexture,33984+M)}function F(E,M){const W=n.get(E);if(E.version>0&&W.__version!==E.version){fe(W,E,M);return}t.bindTexture(32879,W.__webglTexture,33984+M)}function K(E,M){const W=n.get(E);if(E.version>0&&W.__version!==E.version){ge(W,E,M);return}t.bindTexture(34067,W.__webglTexture,33984+M)}const ie={[cn]:10497,[mt]:33071,[or]:33648},re={[pt]:9728,[Ma]:9984,[tr]:9986,[$e]:9729,[wc]:9985,[On]:9987};function B(E,M,W){if(W?(a.texParameteri(E,10242,ie[M.wrapS]),a.texParameteri(E,10243,ie[M.wrapT]),(E===32879||E===35866)&&a.texParameteri(E,32882,ie[M.wrapR]),a.texParameteri(E,10240,re[M.magFilter]),a.texParameteri(E,10241,re[M.minFilter])):(a.texParameteri(E,10242,33071),a.texParameteri(E,10243,33071),(E===32879||E===35866)&&a.texParameteri(E,32882,33071),(M.wrapS!==mt||M.wrapT!==mt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(E,10240,R(M.magFilter)),a.texParameteri(E,10241,R(M.minFilter)),M.minFilter!==pt&&M.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===pt||M.minFilter!==tr&&M.minFilter!==On||M.type===Gt&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Mn&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(a.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Me(E,M){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",I));const ee=M.source;let ne=p.get(ee);ne===void 0&&(ne={},p.set(ee,ne));const ae=Q(M);if(ae!==E.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,W=!0),ne[ae].usedTimes++;const be=ne[E.__cacheKey];be!==void 0&&(ne[E.__cacheKey].usedTimes--,be.usedTimes===0&&z(M)),E.__cacheKey=ae,E.__webglTexture=ne[ae].texture}return W}function fe(E,M,W){let ee=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=35866),M.isData3DTexture&&(ee=32879);const ne=Me(E,M),ae=M.source;t.bindTexture(ee,E.__webglTexture,33984+W);const be=n.get(ae);if(ae.version!==be.__version||ne===!0){t.activeTexture(33984+W),a.pixelStorei(37440,M.flipY),a.pixelStorei(37441,M.premultiplyAlpha),a.pixelStorei(3317,M.unpackAlignment),a.pixelStorei(37443,0);const oe=w(M)&&x(M.image)===!1;let j=A(M.image,oe,!1,u);j=qt(M,j);const xe=x(j)||o,Se=s.convert(M.format,M.encoding);let de=s.convert(M.type),ye=y(M.internalFormat,Se,de,M.encoding,M.isVideoTexture);B(ee,M,xe);let ve;const Oe=M.mipmaps,qe=o&&M.isVideoTexture!==!0,ht=be.__version===void 0||ne===!0,L=b(M,j,xe);if(M.isDepthTexture)ye=6402,o?M.type===Gt?ye=36012:M.type===ei?ye=33190:M.type===Ei?ye=35056:ye=33189:M.type===Gt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ii&&ye===6402&&M.type!==Mc&&M.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ei,de=s.convert(M.type)),M.format===Li&&ye===6402&&(ye=34041,M.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ei,de=s.convert(M.type))),ht&&(qe?t.texStorage2D(3553,1,ye,j.width,j.height):t.texImage2D(3553,0,ye,j.width,j.height,0,Se,de,null));else if(M.isDataTexture)if(Oe.length>0&&xe){qe&&ht&&t.texStorage2D(3553,L,ye,Oe[0].width,Oe[0].height);for(let G=0,$=Oe.length;G<$;G++)ve=Oe[G],qe?t.texSubImage2D(3553,G,0,0,ve.width,ve.height,Se,de,ve.data):t.texImage2D(3553,G,ye,ve.width,ve.height,0,Se,de,ve.data);M.generateMipmaps=!1}else qe?(ht&&t.texStorage2D(3553,L,ye,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,Se,de,j.data)):t.texImage2D(3553,0,ye,j.width,j.height,0,Se,de,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&ht&&t.texStorage3D(35866,L,ye,Oe[0].width,Oe[0].height,j.depth);for(let G=0,$=Oe.length;G<$;G++)ve=Oe[G],M.format!==Nt?Se!==null?qe?t.compressedTexSubImage3D(35866,G,0,0,0,ve.width,ve.height,j.depth,Se,ve.data,0,0):t.compressedTexImage3D(35866,G,ye,ve.width,ve.height,j.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(35866,G,0,0,0,ve.width,ve.height,j.depth,Se,de,ve.data):t.texImage3D(35866,G,ye,ve.width,ve.height,j.depth,0,Se,de,ve.data)}else{qe&&ht&&t.texStorage2D(3553,L,ye,Oe[0].width,Oe[0].height);for(let G=0,$=Oe.length;G<$;G++)ve=Oe[G],M.format!==Nt?Se!==null?qe?t.compressedTexSubImage2D(3553,G,0,0,ve.width,ve.height,Se,ve.data):t.compressedTexImage2D(3553,G,ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(3553,G,0,0,ve.width,ve.height,Se,de,ve.data):t.texImage2D(3553,G,ye,ve.width,ve.height,0,Se,de,ve.data)}else if(M.isDataArrayTexture)qe?(ht&&t.texStorage3D(35866,L,ye,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,Se,de,j.data)):t.texImage3D(35866,0,ye,j.width,j.height,j.depth,0,Se,de,j.data);else if(M.isData3DTexture)qe?(ht&&t.texStorage3D(32879,L,ye,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,Se,de,j.data)):t.texImage3D(32879,0,ye,j.width,j.height,j.depth,0,Se,de,j.data);else if(M.isFramebufferTexture){if(ht)if(qe)t.texStorage2D(3553,L,ye,j.width,j.height);else{let G=j.width,$=j.height;for(let ce=0;ce<L;ce++)t.texImage2D(3553,ce,ye,G,$,0,Se,de,null),G>>=1,$>>=1}}else if(Oe.length>0&&xe){qe&&ht&&t.texStorage2D(3553,L,ye,Oe[0].width,Oe[0].height);for(let G=0,$=Oe.length;G<$;G++)ve=Oe[G],qe?t.texSubImage2D(3553,G,0,0,Se,de,ve):t.texImage2D(3553,G,ye,Se,de,ve);M.generateMipmaps=!1}else qe?(ht&&t.texStorage2D(3553,L,ye,j.width,j.height),t.texSubImage2D(3553,0,0,0,Se,de,j)):t.texImage2D(3553,0,ye,Se,de,j);T(M,xe)&&P(ee),be.__version=ae.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ge(E,M,W){if(M.image.length!==6)return;const ee=Me(E,M),ne=M.source;t.bindTexture(34067,E.__webglTexture,33984+W);const ae=n.get(ne);if(ne.version!==ae.__version||ee===!0){t.activeTexture(33984+W),a.pixelStorei(37440,M.flipY),a.pixelStorei(37441,M.premultiplyAlpha),a.pixelStorei(3317,M.unpackAlignment),a.pixelStorei(37443,0);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,j=[];for(let G=0;G<6;G++)!be&&!oe?j[G]=A(M.image[G],!1,!0,c):j[G]=oe?M.image[G].image:M.image[G],j[G]=qt(M,j[G]);const xe=j[0],Se=x(xe)||o,de=s.convert(M.format,M.encoding),ye=s.convert(M.type),ve=y(M.internalFormat,de,ye,M.encoding),Oe=o&&M.isVideoTexture!==!0,qe=ae.__version===void 0||ee===!0;let ht=b(M,xe,Se);B(34067,M,Se);let L;if(be){Oe&&qe&&t.texStorage2D(34067,ht,ve,xe.width,xe.height);for(let G=0;G<6;G++){L=j[G].mipmaps;for(let $=0;$<L.length;$++){const ce=L[$];M.format!==Nt?de!==null?Oe?t.compressedTexSubImage2D(34069+G,$,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(34069+G,$,ve,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+G,$,0,0,ce.width,ce.height,de,ye,ce.data):t.texImage2D(34069+G,$,ve,ce.width,ce.height,0,de,ye,ce.data)}}}else{L=M.mipmaps,Oe&&qe&&(L.length>0&&ht++,t.texStorage2D(34067,ht,ve,j[0].width,j[0].height));for(let G=0;G<6;G++)if(oe){Oe?t.texSubImage2D(34069+G,0,0,0,j[G].width,j[G].height,de,ye,j[G].data):t.texImage2D(34069+G,0,ve,j[G].width,j[G].height,0,de,ye,j[G].data);for(let $=0;$<L.length;$++){const pe=L[$].image[G].image;Oe?t.texSubImage2D(34069+G,$+1,0,0,pe.width,pe.height,de,ye,pe.data):t.texImage2D(34069+G,$+1,ve,pe.width,pe.height,0,de,ye,pe.data)}}else{Oe?t.texSubImage2D(34069+G,0,0,0,de,ye,j[G]):t.texImage2D(34069+G,0,ve,de,ye,j[G]);for(let $=0;$<L.length;$++){const ce=L[$];Oe?t.texSubImage2D(34069+G,$+1,0,0,de,ye,ce.image[G]):t.texImage2D(34069+G,$+1,ve,de,ye,ce.image[G])}}}T(M,Se)&&P(34067),ae.__version=ne.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function he(E,M,W,ee,ne){const ae=s.convert(W.format,W.encoding),be=s.convert(W.type),oe=y(W.internalFormat,ae,be,W.encoding);n.get(M).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,oe,M.width,M.height,M.depth,0,ae,be,null):t.texImage2D(ne,0,oe,M.width,M.height,0,ae,be,null)),t.bindFramebuffer(36160,E),Ve(M)?d.framebufferTexture2DMultisampleEXT(36160,ee,ne,n.get(W).__webglTexture,0,rt(M)):(ne===3553||ne>=34069&&ne<=34074)&&a.framebufferTexture2D(36160,ee,ne,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ze(E,M,W){if(a.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let ee=33189;if(W||Ve(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Gt?ee=36012:ne.type===ei&&(ee=33190));const ae=rt(M);Ve(M)?d.renderbufferStorageMultisampleEXT(36161,ae,ee,M.width,M.height):a.renderbufferStorageMultisample(36161,ae,ee,M.width,M.height)}else a.renderbufferStorage(36161,ee,M.width,M.height);a.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){const ee=rt(M);W&&Ve(M)===!1?a.renderbufferStorageMultisample(36161,ee,35056,M.width,M.height):Ve(M)?d.renderbufferStorageMultisampleEXT(36161,ee,35056,M.width,M.height):a.renderbufferStorage(36161,34041,M.width,M.height),a.framebufferRenderbuffer(36160,33306,36161,E)}else{const ee=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<ee.length;ne++){const ae=ee[ne],be=s.convert(ae.format,ae.encoding),oe=s.convert(ae.type),j=y(ae.internalFormat,be,oe,ae.encoding),xe=rt(M);W&&Ve(M)===!1?a.renderbufferStorageMultisample(36161,xe,j,M.width,M.height):Ve(M)?d.renderbufferStorageMultisampleEXT(36161,xe,j,M.width,M.height):a.renderbufferStorage(36161,j,M.width,M.height)}}a.bindRenderbuffer(36161,null)}function Te(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ee=n.get(M.depthTexture).__webglTexture,ne=rt(M);if(M.depthTexture.format===ii)Ve(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ne):a.framebufferTexture2D(36160,36096,3553,ee,0);else if(M.depthTexture.format===Li)Ve(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ne):a.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function we(E){const M=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Te(M.__webglFramebuffer,E)}else if(W){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=a.createRenderbuffer(),Ze(M.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=a.createRenderbuffer(),Ze(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function wt(E,M,W){const ee=n.get(E);M!==void 0&&he(ee.__webglFramebuffer,E,E.texture,36064,3553),W!==void 0&&we(E)}function Ft(E){const M=E.texture,W=n.get(E),ee=n.get(M);E.addEventListener("dispose",H),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=a.createTexture()),ee.__version=M.version,r.memory.textures++);const ne=E.isWebGLCubeRenderTarget===!0,ae=E.isWebGLMultipleRenderTargets===!0,be=x(E)||o;if(ne){W.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)W.__webglFramebuffer[oe]=a.createFramebuffer()}else{if(W.__webglFramebuffer=a.createFramebuffer(),ae)if(i.drawBuffers){const oe=E.texture;for(let j=0,xe=oe.length;j<xe;j++){const Se=n.get(oe[j]);Se.__webglTexture===void 0&&(Se.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&Ve(E)===!1){const oe=ae?M:[M];W.__webglMultisampledFramebuffer=a.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let j=0;j<oe.length;j++){const xe=oe[j];W.__webglColorRenderbuffer[j]=a.createRenderbuffer(),a.bindRenderbuffer(36161,W.__webglColorRenderbuffer[j]);const Se=s.convert(xe.format,xe.encoding),de=s.convert(xe.type),ye=y(xe.internalFormat,Se,de,xe.encoding,E.isXRRenderTarget===!0),ve=rt(E);a.renderbufferStorageMultisample(36161,ve,ye,E.width,E.height),a.framebufferRenderbuffer(36160,36064+j,36161,W.__webglColorRenderbuffer[j])}a.bindRenderbuffer(36161,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=a.createRenderbuffer(),Ze(W.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,ee.__webglTexture),B(34067,M,be);for(let oe=0;oe<6;oe++)he(W.__webglFramebuffer[oe],E,M,36064,34069+oe);T(M,be)&&P(34067),t.unbindTexture()}else if(ae){const oe=E.texture;for(let j=0,xe=oe.length;j<xe;j++){const Se=oe[j],de=n.get(Se);t.bindTexture(3553,de.__webglTexture),B(3553,Se,be),he(W.__webglFramebuffer,E,Se,36064+j,3553),T(Se,be)&&P(3553)}t.unbindTexture()}else{let oe=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?oe=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ee.__webglTexture),B(oe,M,be),he(W.__webglFramebuffer,E,M,36064,oe),T(M,be)&&P(oe),t.unbindTexture()}E.depthBuffer&&we(E)}function At(E){const M=x(E)||o,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,ne=W.length;ee<ne;ee++){const ae=W[ee];if(T(ae,M)){const be=E.isWebGLCubeRenderTarget?34067:3553,oe=n.get(ae).__webglTexture;t.bindTexture(be,oe),P(be),t.unbindTexture()}}}function Ot(E){if(o&&E.samples>0&&Ve(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],W=E.width,ee=E.height;let ne=16384;const ae=[],be=E.stencilBuffer?33306:36096,oe=n.get(E),j=E.isWebGLMultipleRenderTargets===!0;if(j)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,oe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){ae.push(36064+xe),E.depthBuffer&&ae.push(be);const Se=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Se===!1&&(E.depthBuffer&&(ne|=256),E.stencilBuffer&&(ne|=1024)),j&&a.framebufferRenderbuffer(36008,36064,36161,oe.__webglColorRenderbuffer[xe]),Se===!0&&(a.invalidateFramebuffer(36008,[be]),a.invalidateFramebuffer(36009,[be])),j){const de=n.get(M[xe]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,de,0)}a.blitFramebuffer(0,0,W,ee,0,0,W,ee,ne,9728),f&&a.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+xe,36161,oe.__webglColorRenderbuffer[xe]);const Se=n.get(M[xe]).__webglTexture;t.bindFramebuffer(36160,oe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+xe,3553,Se,0)}t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}}function rt(E){return Math.min(h,E.samples)}function Ve(E){const M=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function un(E){const M=r.render.frame;g.get(E)!==M&&(g.set(E,M),E.update())}function qt(E,M){const W=E.encoding,ee=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ta||W!==Bn&&(W===Le?o===!1?e.has("EXT_sRGB")===!0&&ee===Nt?(E.format=Ta,E.minFilter=$e,E.generateMipmaps=!1):M=Pc.sRGBToLinear(M):(ee!==Nt||ne!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),M}this.allocateTextureUnit=V,this.resetTextureUnits=Y,this.setTexture2D=q,this.setTexture2DArray=me,this.setTexture3D=F,this.setTextureCube=K,this.rebindTextures=wt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ve}function kg(a,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===ri)return 5121;if(s===fu)return 32819;if(s===pu)return 32820;if(s===hu)return 5120;if(s===uu)return 5122;if(s===Mc)return 5123;if(s===du)return 5124;if(s===ei)return 5125;if(s===Gt)return 5126;if(s===Mn)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===mu)return 6406;if(s===Nt)return 6408;if(s===gu)return 6409;if(s===vu)return 6410;if(s===ii)return 6402;if(s===Li)return 34041;if(s===Ta)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Au)return 6403;if(s===xu)return 36244;if(s===yu)return 33319;if(s===Su)return 33320;if(s===wu)return 36249;if(s===_r||s===Tr||s===Er||s===Pr)if(r===Le)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===_r)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===_r)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Tr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Er)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_o||s===To||s===Eo||s===Po)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===_o)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===To)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Eo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Po)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Co||s===Ro)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Co)return r===Le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ro)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Lo||s===zo||s===Do||s===ko||s===Io||s===No||s===Fo||s===Oo||s===Bo||s===Uo||s===Ho||s===Vo||s===Go||s===Jo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Lo)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zo)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Do)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ko)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Io)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===No)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fo)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oo)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bo)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Uo)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ho)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vo)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Go)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jo)return r===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Cr)return r===Le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===bu||s===Wo||s===Zo||s===Xo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Cr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Wo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ei?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class Ig extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xt extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ng={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),v=this._getHandJoint(c,m);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Fg extends Ke{constructor(e,t,n,i,s,r,o,l,c,u){if(u=u!==void 0?u:ii,u!==ii&&u!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ii&&(n=ei),n===void 0&&u===Li&&(n=Ei),super(null,i,s,r,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:pt,this.minFilter=l!==void 0?l:pt,this.flipY=!1,this.generateMipmaps=!1}}class Og extends Bi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const m=t.getContextAttributes();let p=null,v=null;const S=[],A=[],x=new Set,w=new Map,T=new St;T.layers.enable(1),T.viewport=new Ue;const P=new St;P.layers.enable(2),P.viewport=new Ue;const y=[T,P],b=new Ig;b.layers.enable(1),b.layers.enable(2);let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=S[F];return K===void 0&&(K=new ta,S[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=S[F];return K===void 0&&(K=new ta,S[F]=K),K.getGripSpace()},this.getHand=function(F){let K=S[F];return K===void 0&&(K=new ta,S[F]=K),K.getHandSpace()};function H(F){const K=A.indexOf(F.inputSource);if(K===-1)return;const ie=S[K];ie!==void 0&&ie.dispatchEvent({type:F.type,data:F.inputSource})}function D(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",z);for(let F=0;F<S.length;F++){const K=A[F];K!==null&&(A[F]=null,S[F].disconnect(K))}R=null,I=null,e.setRenderTarget(p),f=null,d=null,h=null,i=null,v=null,me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",D),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),v=new Lt(f.framebufferWidth,f.framebufferHeight,{format:Nt,type:ri,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let K=null,ie=null,re=null;m.depth&&(re=m.stencil?35056:33190,K=m.stencil?Li:ii,ie=m.stencil?Ei:ei);const B={colorFormat:32856,depthFormat:re,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(B),i.updateRenderState({layers:[d]}),v=new Lt(d.textureWidth,d.textureHeight,{format:Nt,type:ri,depthTexture:new Fg(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const Me=e.properties.get(v);Me.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(F){for(let K=0;K<F.removed.length;K++){const ie=F.removed[K],re=A.indexOf(ie);re>=0&&(A[re]=null,S[re].disconnect(ie))}for(let K=0;K<F.added.length;K++){const ie=F.added[K];let re=A.indexOf(ie);if(re===-1){for(let Me=0;Me<S.length;Me++)if(Me>=A.length){A.push(ie),re=Me;break}else if(A[Me]===null){A[Me]=ie,re=Me;break}if(re===-1)break}const B=S[re];B&&B.connect(ie)}}const O=new C,X=new C;function Y(F,K,ie){O.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(ie.matrixWorld);const re=O.distanceTo(X),B=K.projectionMatrix.elements,Me=ie.projectionMatrix.elements,fe=B[14]/(B[10]-1),ge=B[14]/(B[10]+1),he=(B[9]+1)/B[5],Ze=(B[9]-1)/B[5],Te=(B[8]-1)/B[0],we=(Me[8]+1)/Me[0],wt=fe*Te,Ft=fe*we,At=re/(-Te+we),Ot=At*-Te;K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ot),F.translateZ(At),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const rt=fe+At,Ve=ge+At,un=wt-Ot,qt=Ft+(re-Ot),E=he*ge/Ve*rt,M=Ze*ge/Ve*rt;F.projectionMatrix.makePerspective(un,qt,E,M,rt,Ve)}function V(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;b.near=P.near=T.near=F.near,b.far=P.far=T.far=F.far,(R!==b.near||I!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,I=b.far);const K=F.parent,ie=b.cameras;V(b,K);for(let B=0;B<ie.length;B++)V(ie[B],K);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),F.matrix.copy(b.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const re=F.children;for(let B=0,Me=re.length;B<Me;B++)re[B].updateMatrixWorld(!0);ie.length===2?Y(b,T,P):b.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.getPlanes=function(){return x};let Q=null;function q(F,K){if(u=K.getViewerPose(c||r),g=K,u!==null){const ie=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let re=!1;ie.length!==b.cameras.length&&(b.cameras.length=0,re=!0);for(let B=0;B<ie.length;B++){const Me=ie[B];let fe=null;if(f!==null)fe=f.getViewport(Me);else{const he=h.getViewSubImage(d,Me);fe=he.viewport,B===0&&(e.setRenderTargetTextures(v,he.colorTexture,d.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(v))}let ge=y[B];ge===void 0&&(ge=new St,ge.layers.enable(B),ge.viewport=new Ue,y[B]=ge),ge.matrix.fromArray(Me.transform.matrix),ge.projectionMatrix.fromArray(Me.projectionMatrix),ge.viewport.set(fe.x,fe.y,fe.width,fe.height),B===0&&b.matrix.copy(ge.matrix),re===!0&&b.cameras.push(ge)}}for(let ie=0;ie<S.length;ie++){const re=A[ie],B=S[ie];re!==null&&B!==void 0&&B.update(re,K,c||r)}if(Q&&Q(F,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let ie=null;for(const re of x)K.detectedPlanes.has(re)||(ie===null&&(ie=[]),ie.push(re));if(ie!==null)for(const re of ie)x.delete(re),w.delete(re),n.dispatchEvent({type:"planeremoved",data:re});for(const re of K.detectedPlanes)if(!x.has(re))x.add(re),w.set(re,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:re});else{const B=w.get(re);re.lastChangedTime>B&&(w.set(re,re.lastChangedTime),n.dispatchEvent({type:"planechanged",data:re}))}}g=null}const me=new Nc;me.setAnimationLoop(q),this.setAnimationLoop=function(F){Q=F},this.dispose=function(){}}}function Bg(a,e){function t(m,p){p.color.getRGB(m.fogColor.value,Dc(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,S,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),u(m,p)):p.isMeshPhongMaterial?(i(m,p),c(m,p)):p.isMeshStandardMaterial?(i(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,A)):p.isMeshMatcapMaterial?(i(m,p),f(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?o(m,p,v,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Rt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Rt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=a.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix));let A;p.aoMap?A=p.aoMap:p.lightMap&&(A=p.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),m.uv2Transform.value.copy(A.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A;p.map?A=p.map:p.alphaMap&&(A=p.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),m.uvTransform.value.copy(A.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Rt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ug(a,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(S,A){const x=A.program;n.uniformBlockBinding(S,x)}function c(S,A){let x=i[S.id];x===void 0&&(g(S),x=u(S),i[S.id]=x,S.addEventListener("dispose",p));const w=A.program;n.updateUBOMapping(S,w);const T=e.render.frame;s[S.id]!==T&&(d(S),s[S.id]=T)}function u(S){const A=h();S.__bindingPointIndex=A;const x=a.createBuffer(),w=S.__size,T=S.usage;return a.bindBuffer(35345,x),a.bufferData(35345,w,T),a.bindBuffer(35345,null),a.bindBufferBase(35345,A,x),x}function h(){for(let S=0;S<o;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const A=i[S.id],x=S.uniforms,w=S.__cache;a.bindBuffer(35345,A);for(let T=0,P=x.length;T<P;T++){const y=x[T];if(f(y,T,w)===!0){const b=y.__offset,R=Array.isArray(y.value)?y.value:[y.value];let I=0;for(let H=0;H<R.length;H++){const D=R[H],z=m(D);typeof D=="number"?(y.__data[0]=D,a.bufferSubData(35345,b+I,y.__data)):D.isMatrix3?(y.__data[0]=D.elements[0],y.__data[1]=D.elements[1],y.__data[2]=D.elements[2],y.__data[3]=D.elements[0],y.__data[4]=D.elements[3],y.__data[5]=D.elements[4],y.__data[6]=D.elements[5],y.__data[7]=D.elements[0],y.__data[8]=D.elements[6],y.__data[9]=D.elements[7],y.__data[10]=D.elements[8],y.__data[11]=D.elements[0]):(D.toArray(y.__data,I),I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,b,y.__data)}}a.bindBuffer(35345,null)}function f(S,A,x){const w=S.value;if(x[A]===void 0){if(typeof w=="number")x[A]=w;else{const T=Array.isArray(w)?w:[w],P=[];for(let y=0;y<T.length;y++)P.push(T[y].clone());x[A]=P}return!0}else if(typeof w=="number"){if(x[A]!==w)return x[A]=w,!0}else{const T=Array.isArray(x[A])?x[A]:[x[A]],P=Array.isArray(w)?w:[w];for(let y=0;y<T.length;y++){const b=T[y];if(b.equals(P[y])===!1)return b.copy(P[y]),!0}}return!1}function g(S){const A=S.uniforms;let x=0;const w=16;let T=0;for(let P=0,y=A.length;P<y;P++){const b=A[P],R={boundary:0,storage:0},I=Array.isArray(b.value)?b.value:[b.value];for(let H=0,D=I.length;H<D;H++){const z=I[H],O=m(z);R.boundary+=O.boundary,R.storage+=O.storage}if(b.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=x,P>0){T=x%w;const H=w-T;T!==0&&H-R.boundary<0&&(x+=w-T,b.__offset=x)}x+=R.storage}return T=x%w,T>0&&(x+=w-T),S.__size=x,S.__cache={},this}function m(S){const A={boundary:0,storage:0};return typeof S=="number"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),A}function p(S){const A=S.target;A.removeEventListener("dispose",p);const x=r.indexOf(A.__bindingPointIndex);r.splice(x,1),a.deleteBuffer(i[A.id]),delete i[A.id],delete s[A.id]}function v(){for(const S in i)a.deleteBuffer(i[S]);r=[],i={},s={}}return{bind:l,update:c,dispose:v}}function Hg(){const a=ys("canvas");return a.style.display="block",a}function Hc(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:Hg(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Bn,this.physicallyCorrectLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;const m=this;let p=!1,v=0,S=0,A=null,x=-1,w=null;const T=new Ue,P=new Ue;let y=null,b=e.width,R=e.height,I=1,H=null,D=null;const z=new Ue(0,0,b,R),O=new Ue(0,0,b,R);let X=!1;const Y=new qa;let V=!1,Q=!1,q=null;const me=new ue,F=new te,K=new C,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return A===null?I:1}let B=t;function Me(_,N){for(let J=0;J<_.length;J++){const k=_[J],Z=e.getContext(k,N);if(Z!==null)return Z}return null}try{const _={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ja}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),B===null){const N=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&N.shift(),B=Me(N,_),B===null)throw Me(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let fe,ge,he,Ze,Te,we,wt,Ft,At,Ot,rt,Ve,un,qt,E,M,W,ee,ne,ae,be,oe,j,xe;function Se(){fe=new Qp(B),ge=new Zp(B,fe,a),fe.init(ge),oe=new kg(B,fe,ge),he=new zg(B,fe,ge),Ze=new tm,Te=new Ag,we=new Dg(B,fe,he,Te,ge,oe,Ze),wt=new jp(m),Ft=new Kp(m),At=new cd(B,ge),j=new Jp(B,fe,At,ge),Ot=new $p(B,At,Ze,j),rt=new rm(B,Ot,At,Ze),ne=new sm(B,ge,we),M=new Xp(Te),Ve=new vg(m,wt,Ft,fe,ge,j,M),un=new Bg(m,Te),qt=new yg,E=new Tg(fe,ge),ee=new Gp(m,wt,Ft,he,rt,u,r),W=new Lg(m,rt,ge),xe=new Ug(B,Ze,ge,he),ae=new Wp(B,fe,Ze,ge),be=new em(B,fe,Ze,ge),Ze.programs=Ve.programs,m.capabilities=ge,m.extensions=fe,m.properties=Te,m.renderLists=qt,m.shadowMap=W,m.state=he,m.info=Ze}Se();const de=new Og(m,B);this.xr=de,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const _=fe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=fe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(_){_!==void 0&&(I=_,this.setSize(b,R,!1))},this.getSize=function(_){return _.set(b,R)},this.setSize=function(_,N,J){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=_,R=N,e.width=Math.floor(_*I),e.height=Math.floor(N*I),J!==!1&&(e.style.width=_+"px",e.style.height=N+"px"),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set(b*I,R*I).floor()},this.setDrawingBufferSize=function(_,N,J){b=_,R=N,I=J,e.width=Math.floor(_*J),e.height=Math.floor(N*J),this.setViewport(0,0,_,N)},this.getCurrentViewport=function(_){return _.copy(T)},this.getViewport=function(_){return _.copy(z)},this.setViewport=function(_,N,J,k){_.isVector4?z.set(_.x,_.y,_.z,_.w):z.set(_,N,J,k),he.viewport(T.copy(z).multiplyScalar(I).floor())},this.getScissor=function(_){return _.copy(O)},this.setScissor=function(_,N,J,k){_.isVector4?O.set(_.x,_.y,_.z,_.w):O.set(_,N,J,k),he.scissor(P.copy(O).multiplyScalar(I).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(_){he.setScissorTest(X=_)},this.setOpaqueSort=function(_){H=_},this.setTransparentSort=function(_){D=_},this.getClearColor=function(_){return _.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(_=!0,N=!0,J=!0){let k=0;_&&(k|=16384),N&&(k|=256),J&&(k|=1024),B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),qt.dispose(),E.dispose(),Te.dispose(),wt.dispose(),Ft.dispose(),rt.dispose(),j.dispose(),xe.dispose(),Ve.dispose(),de.dispose(),de.removeEventListener("sessionstart",ce),de.removeEventListener("sessionend",pe),q&&(q.dispose(),q=null),He.stop()};function ye(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const _=Ze.autoReset,N=W.enabled,J=W.autoUpdate,k=W.needsUpdate,Z=W.type;Se(),Ze.autoReset=_,W.enabled=N,W.autoUpdate=J,W.needsUpdate=k,W.type=Z}function Oe(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function qe(_){const N=_.target;N.removeEventListener("dispose",qe),ht(N)}function ht(_){L(_),Te.remove(_)}function L(_){const N=Te.get(_).programs;N!==void 0&&(N.forEach(function(J){Ve.releaseProgram(J)}),_.isShaderMaterial&&Ve.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,J,k,Z,Ae){N===null&&(N=ie);const _e=Z.isMesh&&Z.matrixWorld.determinant()<0,Pe=Ch(_,N,J,k,Z);he.setMaterial(k,_e);let Ce=J.index,Be=1;k.wireframe===!0&&(Ce=Ot.getWireframeAttribute(J),Be=2);const ze=J.drawRange,De=J.attributes.position;let nt=ze.start*Be,zt=(ze.start+ze.count)*Be;Ae!==null&&(nt=Math.max(nt,Ae.start*Be),zt=Math.min(zt,(Ae.start+Ae.count)*Be)),Ce!==null?(nt=Math.max(nt,0),zt=Math.min(zt,Ce.count)):De!=null&&(nt=Math.max(nt,0),zt=Math.min(zt,De.count));const fn=zt-nt;if(fn<0||fn===1/0)return;j.setup(Z,k,Pe,J,Ce);let Wn,it=ae;if(Ce!==null&&(Wn=At.get(Ce),it=be,it.setIndex(Wn)),Z.isMesh)k.wireframe===!0?(he.setLineWidth(k.wireframeLinewidth*re()),it.setMode(1)):it.setMode(4);else if(Z.isLine){let ke=k.linewidth;ke===void 0&&(ke=1),he.setLineWidth(ke*re()),Z.isLineSegments?it.setMode(1):Z.isLineLoop?it.setMode(2):it.setMode(3)}else Z.isPoints?it.setMode(0):Z.isSprite&&it.setMode(4);if(Z.isInstancedMesh)it.renderInstances(nt,fn,Z.count);else if(J.isInstancedBufferGeometry){const ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Sr=Math.min(J.instanceCount,ke);it.renderInstances(nt,fn,Sr)}else it.render(nt,fn)},this.compile=function(_,N){function J(k,Z,Ae){k.transparent===!0&&k.side===wn&&k.forceSinglePass===!1?(k.side=Rt,k.needsUpdate=!0,Bt(k,Z,Ae),k.side=Tn,k.needsUpdate=!0,Bt(k,Z,Ae),k.side=wn):Bt(k,Z,Ae)}d=E.get(_),d.init(),g.push(d),_.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(m.physicallyCorrectLights),_.traverse(function(k){const Z=k.material;if(Z)if(Array.isArray(Z))for(let Ae=0;Ae<Z.length;Ae++){const _e=Z[Ae];J(_e,_,k)}else J(Z,_,k)}),g.pop(),d=null};let G=null;function $(_){G&&G(_)}function ce(){He.stop()}function pe(){He.start()}const He=new Nc;He.setAnimationLoop($),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(_){G=_,de.setAnimationLoop(_),_===null?He.stop():He.start()},de.addEventListener("sessionstart",ce),de.addEventListener("sessionend",pe),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(N),N=de.getCamera()),_.isScene===!0&&_.onBeforeRender(m,_,N,A),d=E.get(_,g.length),d.init(),g.push(d),me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(me),Q=this.localClippingEnabled,V=M.init(this.clippingPlanes,Q),h=qt.get(_,f.length),h.init(),f.push(h),ut(_,N,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(H,D),V===!0&&M.beginShadows();const J=d.state.shadowsArray;if(W.render(J,_,N),V===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(h,_),d.setupLights(m.physicallyCorrectLights),N.isArrayCamera){const k=N.cameras;for(let Z=0,Ae=k.length;Z<Ae;Z++){const _e=k[Z];xt(h,_,_e,_e.viewport)}}else xt(h,_,N);A!==null&&(we.updateMultisampleRenderTarget(A),we.updateRenderTargetMipmap(A)),_.isScene===!0&&_.onAfterRender(m,_,N),j.resetDefaultState(),x=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function ut(_,N,J,k){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)J=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Y.intersectsSprite(_)){k&&K.setFromMatrixPosition(_.matrixWorld).applyMatrix4(me);const _e=rt.update(_),Pe=_.material;Pe.visible&&h.push(_,_e,Pe,J,K.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(_.isSkinnedMesh&&_.skeleton.frame!==Ze.render.frame&&(_.skeleton.update(),_.skeleton.frame=Ze.render.frame),!_.frustumCulled||Y.intersectsObject(_))){k&&K.setFromMatrixPosition(_.matrixWorld).applyMatrix4(me);const _e=rt.update(_),Pe=_.material;if(Array.isArray(Pe)){const Ce=_e.groups;for(let Be=0,ze=Ce.length;Be<ze;Be++){const De=Ce[Be],nt=Pe[De.materialIndex];nt&&nt.visible&&h.push(_,_e,nt,J,K.z,De)}}else Pe.visible&&h.push(_,_e,Pe,J,K.z,null)}}const Ae=_.children;for(let _e=0,Pe=Ae.length;_e<Pe;_e++)ut(Ae[_e],N,J,k)}function xt(_,N,J,k){const Z=_.opaque,Ae=_.transmissive,_e=_.transparent;d.setupLightsView(J),V===!0&&M.setGlobalState(m.clippingPlanes,J),Ae.length>0&&Jn(Z,N,J),k&&he.viewport(T.copy(k)),Z.length>0&&Ye(Z,N,J),Ae.length>0&&Ye(Ae,N,J),_e.length>0&&Ye(_e,N,J),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Jn(_,N,J){const k=ge.isWebGL2;q===null&&(q=new Lt(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Mn:ri,minFilter:On,samples:k&&s===!0?4:0})),m.getDrawingBufferSize(F),k?q.setSize(F.x,F.y):q.setSize(lr(F.x),lr(F.y));const Z=m.getRenderTarget();m.setRenderTarget(q),m.clear();const Ae=m.toneMapping;m.toneMapping=_n,Ye(_,N,J),m.toneMapping=Ae,we.updateMultisampleRenderTarget(q),we.updateRenderTargetMipmap(q),m.setRenderTarget(Z)}function Ye(_,N,J){const k=N.isScene===!0?N.overrideMaterial:null;for(let Z=0,Ae=_.length;Z<Ae;Z++){const _e=_[Z],Pe=_e.object,Ce=_e.geometry,Be=k===null?_e.material:k,ze=_e.group;Pe.layers.test(J.layers)&&dn(Pe,N,J,Ce,Be,ze)}}function dn(_,N,J,k,Z,Ae){_.onBeforeRender(m,N,J,k,Z,Ae),_.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),Z.onBeforeRender(m,N,J,k,_,Ae),Z.transparent===!0&&Z.side===wn&&Z.forceSinglePass===!1?(Z.side=Rt,Z.needsUpdate=!0,m.renderBufferDirect(J,N,k,Z,_,Ae),Z.side=Tn,Z.needsUpdate=!0,m.renderBufferDirect(J,N,k,Z,_,Ae),Z.side=wn):m.renderBufferDirect(J,N,k,Z,_,Ae),_.onAfterRender(m,N,J,k,Z,Ae)}function Bt(_,N,J){N.isScene!==!0&&(N=ie);const k=Te.get(_),Z=d.state.lights,Ae=d.state.shadowsArray,_e=Z.state.version,Pe=Ve.getParameters(_,Z.state,Ae,N,J),Ce=Ve.getProgramCacheKey(Pe);let Be=k.programs;k.environment=_.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(_.isMeshStandardMaterial?Ft:wt).get(_.envMap||k.environment),Be===void 0&&(_.addEventListener("dispose",qe),Be=new Map,k.programs=Be);let ze=Be.get(Ce);if(ze!==void 0){if(k.currentProgram===ze&&k.lightsStateVersion===_e)return Ao(_,Pe),ze}else Pe.uniforms=Ve.getUniforms(_),_.onBuild(J,Pe,m),_.onBeforeCompile(Pe,m),ze=Ve.acquireProgram(Pe,Ce),Be.set(Ce,ze),k.uniforms=Pe.uniforms;const De=k.uniforms;(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(De.clippingPlanes=M.uniform),Ao(_,Pe),k.needsLights=Lh(_),k.lightsStateVersion=_e,k.needsLights&&(De.ambientLightColor.value=Z.state.ambient,De.lightProbe.value=Z.state.probe,De.directionalLights.value=Z.state.directional,De.directionalLightShadows.value=Z.state.directionalShadow,De.spotLights.value=Z.state.spot,De.spotLightShadows.value=Z.state.spotShadow,De.rectAreaLights.value=Z.state.rectArea,De.ltc_1.value=Z.state.rectAreaLTC1,De.ltc_2.value=Z.state.rectAreaLTC2,De.pointLights.value=Z.state.point,De.pointLightShadows.value=Z.state.pointShadow,De.hemisphereLights.value=Z.state.hemi,De.directionalShadowMap.value=Z.state.directionalShadowMap,De.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,De.spotShadowMap.value=Z.state.spotShadowMap,De.spotLightMatrix.value=Z.state.spotLightMatrix,De.spotLightMap.value=Z.state.spotLightMap,De.pointShadowMap.value=Z.state.pointShadowMap,De.pointShadowMatrix.value=Z.state.pointShadowMatrix);const nt=ze.getUniforms(),zt=ir.seqWithValue(nt.seq,De);return k.currentProgram=ze,k.uniformsList=zt,ze}function Ao(_,N){const J=Te.get(_);J.outputEncoding=N.outputEncoding,J.instancing=N.instancing,J.skinning=N.skinning,J.morphTargets=N.morphTargets,J.morphNormals=N.morphNormals,J.morphColors=N.morphColors,J.morphTargetsCount=N.morphTargetsCount,J.numClippingPlanes=N.numClippingPlanes,J.numIntersection=N.numClipIntersection,J.vertexAlphas=N.vertexAlphas,J.vertexTangents=N.vertexTangents,J.toneMapping=N.toneMapping}function Ch(_,N,J,k,Z){N.isScene!==!0&&(N=ie),we.resetTextureUnits();const Ae=N.fog,_e=k.isMeshStandardMaterial?N.environment:null,Pe=A===null?m.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:Bn,Ce=(k.isMeshStandardMaterial?Ft:wt).get(k.envMap||_e),Be=k.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ze=!!k.normalMap&&!!J.attributes.tangent,De=!!J.morphAttributes.position,nt=!!J.morphAttributes.normal,zt=!!J.morphAttributes.color,fn=k.toneMapped?m.toneMapping:_n,Wn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,it=Wn!==void 0?Wn.length:0,ke=Te.get(k),Sr=d.state.lights;if(V===!0&&(Q===!0||_!==w)){const Dt=_===w&&k.id===x;M.setState(k,_,Dt)}let dt=!1;k.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Sr.state.version||ke.outputEncoding!==Pe||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Ce||k.fog===!0&&ke.fog!==Ae||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==M.numPlanes||ke.numIntersection!==M.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==ze||ke.morphTargets!==De||ke.morphNormals!==nt||ke.morphColors!==zt||ke.toneMapping!==fn||ge.isWebGL2===!0&&ke.morphTargetsCount!==it)&&(dt=!0):(dt=!0,ke.__version=k.version);let Zn=ke.currentProgram;dt===!0&&(Zn=Bt(k,N,Z));let xo=!1,Zi=!1,wr=!1;const Mt=Zn.getUniforms(),Xn=ke.uniforms;if(he.useProgram(Zn.program)&&(xo=!0,Zi=!0,wr=!0),k.id!==x&&(x=k.id,Zi=!0),xo||w!==_){if(Mt.setValue(B,"projectionMatrix",_.projectionMatrix),ge.logarithmicDepthBuffer&&Mt.setValue(B,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),w!==_&&(w=_,Zi=!0,wr=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Dt=Mt.map.cameraPosition;Dt!==void 0&&Dt.setValue(B,K.setFromMatrixPosition(_.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Mt.setValue(B,"isOrthographic",_.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||Z.isSkinnedMesh)&&Mt.setValue(B,"viewMatrix",_.matrixWorldInverse)}if(Z.isSkinnedMesh){Mt.setOptional(B,Z,"bindMatrix"),Mt.setOptional(B,Z,"bindMatrixInverse");const Dt=Z.skeleton;Dt&&(ge.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),Mt.setValue(B,"boneTexture",Dt.boneTexture,we),Mt.setValue(B,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Mr=J.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0&&ge.isWebGL2===!0)&&ne.update(Z,J,k,Zn),(Zi||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,Mt.setValue(B,"receiveShadow",Z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Xn.envMap.value=Ce,Xn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Zi&&(Mt.setValue(B,"toneMappingExposure",m.toneMappingExposure),ke.needsLights&&Rh(Xn,wr),Ae&&k.fog===!0&&un.refreshFogUniforms(Xn,Ae),un.refreshMaterialUniforms(Xn,k,I,R,q),ir.upload(B,ke.uniformsList,Xn,we)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ir.upload(B,ke.uniformsList,Xn,we),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Mt.setValue(B,"center",Z.center),Mt.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Mt.setValue(B,"normalMatrix",Z.normalMatrix),Mt.setValue(B,"modelMatrix",Z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Dt=k.uniformsGroups;for(let br=0,zh=Dt.length;br<zh;br++)if(ge.isWebGL2){const yo=Dt[br];xe.update(yo,Zn),xe.bind(yo,Zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zn}function Rh(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function Lh(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(_,N,J){Te.get(_.texture).__webglTexture=N,Te.get(_.depthTexture).__webglTexture=J;const k=Te.get(_);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=J===void 0,k.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(_,N){const J=Te.get(_);J.__webglFramebuffer=N,J.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(_,N=0,J=0){A=_,v=N,S=J;let k=!0,Z=null,Ae=!1,_e=!1;if(_){const Ce=Te.get(_);Ce.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),k=!1):Ce.__webglFramebuffer===void 0?we.setupRenderTarget(_):Ce.__hasExternalTextures&&we.rebindTextures(_,Te.get(_.texture).__webglTexture,Te.get(_.depthTexture).__webglTexture);const Be=_.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(_e=!0);const ze=Te.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Z=ze[N],Ae=!0):ge.isWebGL2&&_.samples>0&&we.useMultisampledRTT(_)===!1?Z=Te.get(_).__webglMultisampledFramebuffer:Z=ze,T.copy(_.viewport),P.copy(_.scissor),y=_.scissorTest}else T.copy(z).multiplyScalar(I).floor(),P.copy(O).multiplyScalar(I).floor(),y=X;if(he.bindFramebuffer(36160,Z)&&ge.drawBuffers&&k&&he.drawBuffers(_,Z),he.viewport(T),he.scissor(P),he.setScissorTest(y),Ae){const Ce=Te.get(_.texture);B.framebufferTexture2D(36160,36064,34069+N,Ce.__webglTexture,J)}else if(_e){const Ce=Te.get(_.texture),Be=N||0;B.framebufferTextureLayer(36160,36064,Ce.__webglTexture,J||0,Be)}x=-1},this.readRenderTargetPixels=function(_,N,J,k,Z,Ae,_e){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Te.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_e!==void 0&&(Pe=Pe[_e]),Pe){he.bindFramebuffer(36160,Pe);try{const Ce=_.texture,Be=Ce.format,ze=Ce.type;if(Be!==Nt&&oe.convert(Be)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=ze===Mn&&(fe.has("EXT_color_buffer_half_float")||ge.isWebGL2&&fe.has("EXT_color_buffer_float"));if(ze!==ri&&oe.convert(ze)!==B.getParameter(35738)&&!(ze===Gt&&(ge.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-k&&J>=0&&J<=_.height-Z&&B.readPixels(N,J,k,Z,oe.convert(Be),oe.convert(ze),Ae)}finally{const Ce=A!==null?Te.get(A).__webglFramebuffer:null;he.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(_,N,J=0){const k=Math.pow(2,-J),Z=Math.floor(N.image.width*k),Ae=Math.floor(N.image.height*k);we.setTexture2D(N,0),B.copyTexSubImage2D(3553,J,0,0,_.x,_.y,Z,Ae),he.unbindTexture()},this.copyTextureToTexture=function(_,N,J,k=0){const Z=N.image.width,Ae=N.image.height,_e=oe.convert(J.format),Pe=oe.convert(J.type);we.setTexture2D(J,0),B.pixelStorei(37440,J.flipY),B.pixelStorei(37441,J.premultiplyAlpha),B.pixelStorei(3317,J.unpackAlignment),N.isDataTexture?B.texSubImage2D(3553,k,_.x,_.y,Z,Ae,_e,Pe,N.image.data):N.isCompressedTexture?B.compressedTexSubImage2D(3553,k,_.x,_.y,N.mipmaps[0].width,N.mipmaps[0].height,_e,N.mipmaps[0].data):B.texSubImage2D(3553,k,_.x,_.y,_e,Pe,N.image),k===0&&J.generateMipmaps&&B.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(_,N,J,k,Z=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=_.max.x-_.min.x+1,_e=_.max.y-_.min.y+1,Pe=_.max.z-_.min.z+1,Ce=oe.convert(k.format),Be=oe.convert(k.type);let ze;if(k.isData3DTexture)we.setTexture3D(k,0),ze=32879;else if(k.isDataArrayTexture)we.setTexture2DArray(k,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,k.flipY),B.pixelStorei(37441,k.premultiplyAlpha),B.pixelStorei(3317,k.unpackAlignment);const De=B.getParameter(3314),nt=B.getParameter(32878),zt=B.getParameter(3316),fn=B.getParameter(3315),Wn=B.getParameter(32877),it=J.isCompressedTexture?J.mipmaps[0]:J.image;B.pixelStorei(3314,it.width),B.pixelStorei(32878,it.height),B.pixelStorei(3316,_.min.x),B.pixelStorei(3315,_.min.y),B.pixelStorei(32877,_.min.z),J.isDataTexture||J.isData3DTexture?B.texSubImage3D(ze,Z,N.x,N.y,N.z,Ae,_e,Pe,Ce,Be,it.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(ze,Z,N.x,N.y,N.z,Ae,_e,Pe,Ce,it.data)):B.texSubImage3D(ze,Z,N.x,N.y,N.z,Ae,_e,Pe,Ce,Be,it),B.pixelStorei(3314,De),B.pixelStorei(32878,nt),B.pixelStorei(3316,zt),B.pixelStorei(3315,fn),B.pixelStorei(32877,Wn),Z===0&&k.generateMipmaps&&B.generateMipmap(ze),he.unbindTexture()},this.initTexture=function(_){_.isCubeTexture?we.setTextureCube(_,0):_.isData3DTexture?we.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?we.setTexture2DArray(_,0):we.setTexture2D(_,0),he.unbindTexture()},this.resetState=function(){v=0,S=0,A=null,he.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Vg extends Hc{}Vg.prototype.isWebGL1Renderer=!0;class Ka extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Gg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_a,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _t=new C;class Qa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ge(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ll=new C,zl=new Ue,Dl=new Ue,Jg=new C,kl=new ue;class Vc extends We{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ue,this.bindMatrixInverse=new ue}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ue,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;zl.fromBufferAttribute(i.attributes.skinIndex,e),Dl.fromBufferAttribute(i.attributes.skinWeight,e),Ll.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Dl.getComponent(s);if(r!==0){const o=zl.getComponent(s);kl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Jg.copy(Ll).applyMatrix4(kl),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class hr extends Xe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $a extends Ke{constructor(e=null,t=1,n=1,i,s,r,o,l,c=pt,u=pt,h,d){super(null,r,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Il=new ue,Wg=new ue;class Ar{constructor(e=[],t=[]){this.uuid=sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:Wg;Il.multiplyMatrices(o,t[s]),Il.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ar(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=_c(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $a(t,e,e,Nt,Gt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new hr),this.bones.push(r),this.boneInverses.push(new ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Nl extends Ge{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fl=new ue,Ol=new ue,Xs=[],Zg=new ue,es=new We;class Xg extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Zg)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Fl),Ol.multiplyMatrices(n,Fl),es.matrixWorld=Ol,es.raycast(e,Xs);for(let r=0,o=Xs.length;r<o;r++){const l=Xs[r];l.instanceId=s,l.object=this,t.push(l)}Xs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class eo extends jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bl=new C,Ul=new C,Hl=new ue,na=new Xa,js=new Hi;class xr extends Xe{constructor(e=new Qe,t=new eo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Bl.fromBufferAttribute(t,i-1),Ul.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bl.distanceTo(Ul);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(i),js.radius+=s,e.ray.intersectsSphere(js)===!1)return;Hl.copy(i).invert(),na.copy(e.ray).applyMatrix4(Hl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,u=new C,h=new C,d=new C,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const v=Math.max(0,r.start),S=Math.min(g.count,r.start+r.count);for(let A=v,x=S-1;A<x;A+=f){const w=g.getX(A),T=g.getX(A+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,T),na.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,r.start),S=Math.min(p.count,r.start+r.count);for(let A=v,x=S-1;A<x;A+=f){if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,A+1),na.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Vl=new C,Gl=new C;class jg extends xr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Vl.fromBufferAttribute(t,i),Gl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vl.distanceTo(Gl);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qg extends xr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Gc extends jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jl=new ue,Ca=new Xa,qs=new Hi,Ys=new C;class to extends Xe{constructor(e=new Qe,t=new Gc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;Jl.copy(i).invert(),Ca.copy(e.ray).applyMatrix4(Jl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,m=f;g<m;g++){const p=c.getX(g);Ys.fromBufferAttribute(h,p),Wl(Ys,p,l,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let g=d,m=f;g<m;g++)Ys.fromBufferAttribute(h,g),Wl(Ys,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wl(a,e,t,n,i,s,r){const o=Ca.distanceSqToPoint(a);if(o<t){const l=new C;Ca.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:r})}}class rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(r-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),l=t||(r.isVector2?new te:new C);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],s=[],r=[],o=new C,l=new ue;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new C)}s[0]=new C,r[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ot(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}r[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ot(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class no extends rn{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new te,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Yg extends no{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function io(){let a=0,e=0,t=0,n=0;function i(s,r,o,l){a=s,e=o,t=-3*s+3*r-2*o-l,n=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){i(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,u,h){let d=(r-s)/c-(o-s)/(c+u)+(o-r)/u,f=(o-r)/u-(l-r)/(u+h)+(l-o)/h;d*=u,f*=u,i(r,o,d,f)},calc:function(s){const r=s*s,o=r*s;return a+e*s+t*r+n*o}}}const Ks=new C,ia=new io,sa=new io,ra=new io;class Kg extends rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Ks.subVectors(i[0],i[1]).add(i[0]),c=Ks);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Ks.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ks),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),ia.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,m,p),sa.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,m,p),ra.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,m,p)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),sa.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ra.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ia.calc(l),sa.calc(l),ra.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zl(a,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*o+s*a+t}function Qg(a,e){const t=1-a;return t*t*e}function $g(a,e){return 2*(1-a)*a*e}function e0(a,e){return a*a*e}function ls(a,e,t,n){return Qg(a,e)+$g(a,t)+e0(a,n)}function t0(a,e){const t=1-a;return t*t*t*e}function n0(a,e){const t=1-a;return 3*t*t*a*e}function i0(a,e){return 3*(1-a)*a*a*e}function s0(a,e){return a*a*a*e}function cs(a,e,t,n,i){return t0(a,e)+n0(a,t)+i0(a,n)+s0(a,i)}class Jc extends rn{constructor(e=new te,t=new te,n=new te,i=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new te){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(cs(e,i.x,s.x,r.x,o.x),cs(e,i.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class r0 extends rn{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(cs(e,i.x,s.x,r.x,o.x),cs(e,i.y,s.y,r.y,o.y),cs(e,i.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class so extends rn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new te;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a0 extends rn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wc extends rn{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(ls(e,i.x,s.x,r.x),ls(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class o0 extends rn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(ls(e,i.x,s.x,r.x),ls(e,i.y,s.y,r.y),ls(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zc extends rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,l=i[r===0?r:r-1],c=i[r],u=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(Zl(o,l.x,c.x,u.x,h.x),Zl(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new te().fromArray(i))}return this}}var l0=Object.freeze({__proto__:null,ArcCurve:Yg,CatmullRomCurve3:Kg,CubicBezierCurve:Jc,CubicBezierCurve3:r0,EllipseCurve:no,LineCurve:so,LineCurve3:a0,QuadraticBezierCurve:Wc,QuadraticBezierCurve3:o0,SplineCurve:Zc});class c0 extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new so(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new l0[i.type]().fromJSON(i))}return this}}class h0 extends c0{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new so(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Wc(this.currentPoint.clone(),new te(e,t),new te(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){const o=new Jc(this.currentPoint.clone(),new te(e,t),new te(n,i),new te(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Zc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,r,o,l),this}absellipse(e,t,n,i,s,r,o,l){const c=new no(e,t,n,i,s,r,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ro extends Qe{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ot(i,0,Math.PI*2);const s=[],r=[],o=[],l=[],c=[],u=1/t,h=new C,d=new te,f=new C,g=new C,m=new C;let p=0,v=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:p=e[S+1].x-e[S].x,v=e[S+1].y-e[S].y,f.x=v*1,f.y=-p,f.z=v*0,m.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:p=e[S+1].x-e[S].x,v=e[S+1].y-e[S].y,f.x=v*1,f.y=-p,f.z=v*0,g.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),l.push(f.x,f.y,f.z),m.copy(g)}for(let S=0;S<=t;S++){const A=n+S*u*i,x=Math.sin(A),w=Math.cos(A);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*x,h.y=e[T].y,h.z=e[T].x*w,r.push(h.x,h.y,h.z),d.x=S/t,d.y=T/(e.length-1),o.push(d.x,d.y);const P=l[3*T+0]*x,y=l[3*T+1],b=l[3*T+0]*w;c.push(P,y,b)}}for(let S=0;S<t;S++)for(let A=0;A<e.length-1;A++){const x=A+S*e.length,w=x,T=x+e.length,P=x+e.length+1,y=x+1;s.push(w,T,y),s.push(P,y,T)}this.setIndex(s),this.setAttribute("position",new Ie(r,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(c,3))}static fromJSON(e){return new ro(e.points,e.segments,e.phiStart,e.phiLength)}}class ao extends ro{constructor(e=1,t=1,n=4,i=8){const s=new h0;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new ao(e.radius,e.length,e.capSegments,e.radialSegments)}}class oo extends Qe{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],o=[],l=[],c=new C,u=new te;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(r[d]/e+1)/2,u.y=(r[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(o,3)),this.setAttribute("uv",new Ie(l,2))}static fromJSON(e){return new oo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class lo extends Qe{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const u=[],h=new C,d=new C,f=[],g=[],m=[],p=[];for(let v=0;v<=n;v++){const S=[],A=v/n;let x=0;v==0&&r==0?x=.5/t:v==n&&l==Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const T=w/t;h.x=-e*Math.cos(i+T*s)*Math.sin(r+A*o),h.y=e*Math.cos(r+A*o),h.z=e*Math.sin(i+T*s)*Math.sin(r+A*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),m.push(d.x,d.y,d.z),p.push(T+x,1-A),S.push(c++)}u.push(S)}for(let v=0;v<n;v++)for(let S=0;S<t;S++){const A=u[v][S+1],x=u[v][S],w=u[v+1][S],T=u[v+1][S+1];(v!==0||r>0)&&f.push(A,x,T),(v!==n-1||l<Math.PI)&&f.push(x,w,T)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(m,3)),this.setAttribute("uv",new Ie(p,2))}static fromJSON(e){return new lo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class u0 extends tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class co extends jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ai extends co{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class aa extends jt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new le(16777215),this.specular=new le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class d0 extends jt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ln(a,e,t){return Xc(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function Qs(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Xc(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function f0(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Xl(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[r++]=a[o+l]}return i}function jc(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class _s{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class p0 extends _s{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jo,endingEnd:jo}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case qo:s=e,o=2*t-n;break;case Yo:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qo:r=e,l=2*n-t;break;case Yo:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),m=g*g,p=m*g,v=-d*p+2*d*m-d*g,S=(1+d)*p+(-1.5-2*d)*m+(-.5+d)*g+1,A=(-1-f)*p+(1.5+f)*m+.5*g,x=f*p-f*m;for(let w=0;w!==o;++w)s[w]=v*r[u+w]+S*r[c+w]+A*r[l+w]+x*r[h+w];return s}}class m0 extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=r[c+d]*h+r[l+d]*u;return s}}class g0 extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new g0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new m0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new p0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vs:t=this.InterpolantFactoryMethodDiscrete;break;case zi:t=this.InterpolantFactoryMethodLinear;break;case Rr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return zi;case this.InterpolantFactoryMethodSmooth:return Rr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=Ln(n,s,r),this.values=Ln(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&Xc(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Ln(this.times),t=Ln(this.values),n=this.getValueSize(),i=this.getInterpolation()===Rr,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[d+g]||m!==t[f+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const h=o*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=Ln(e,0,r),this.values=Ln(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=Ln(this.times,0),t=Ln(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=zi;class Ji extends hn{}Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=vs;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class qc extends hn{}qc.prototype.ValueTypeName="color";class ki extends hn{}ki.prototype.ValueTypeName="number";class v0 extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Jt.slerpFlat(s,0,r,c-o,r,c,l);return s}}class Hn extends hn{InterpolantFactoryMethodLinear(e){return new v0(this.times,this.values,this.getValueSize(),e)}}Hn.prototype.ValueTypeName="quaternion";Hn.prototype.DefaultInterpolation=zi;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;class Wi extends hn{}Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=vs;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ii extends hn{}Ii.prototype.ValueTypeName="vector";class Yc{constructor(e,t=-1,n,i=_u){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=sn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(x0(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(hn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=f0(l);l=Xl(l,1,u),c=Xl(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new ki(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,m){if(f.length!==0){const p=[],v=[];jc(f,p,v,g),p.length!==0&&m.push(new h(d,p,v))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let m=0;m<d[g].morphTargets.length;m++)f[d[g].morphTargets[m]]=-1;for(const m in f){const p=[],v=[];for(let S=0;S!==d[g].morphTargets.length;++S){const A=d[g];p.push(A.time),v.push(A.morphTarget===m?1:0)}i.push(new ki(".morphTargetInfluence["+m+"]",p,v))}l=f.length*r}else{const f=".bones["+t[h].name+"]";n(Ii,f+".position",d,"pos",i),n(Hn,f+".quaternion",d,"rot",i),n(Ii,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function A0(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ki;case"vector":case"vector2":case"vector3":case"vector4":return Ii;case"color":return qc;case"quaternion":return Hn;case"bool":case"boolean":return Ji;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function x0(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=A0(a.type);if(a.times===void 0){const t=[],n=[];jc(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Ni={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class y0{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const S0=new y0;let Vn=class{constructor(e){this.manager=e!==void 0?e:S0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const xn={};class w0 extends Error{constructor(e,t){super(e),this.response=t}}class Fi extends Vn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ni.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(xn[e]!==void 0){xn[e].push({onLoad:t,onProgress:n,onError:i});return}xn[e]=[],xn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=xn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let m=0;const p=new ReadableStream({start(v){S();function S(){h.read().then(({done:A,value:x})=>{if(A)v.close();else{m+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:f});for(let T=0,P=u.length;T<P;T++){const y=u[T];y.onProgress&&y.onProgress(w)}v.enqueue(x),S()}})}}});return new Response(p)}else throw new w0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ni.add(e,c);const u=xn[e];delete xn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=xn[e];if(u===void 0)throw this.manager.itemError(e),c;delete xn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class M0 extends Vn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Ni.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=ys("img");function l(){u(),Ni.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class b0 extends Vn{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new $a,o=new Fi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?r.image=c.image:c.data!==void 0&&(r.image.width=c.width,r.image.height=c.height,r.image.data=c.data),r.wrapS=c.wrapS!==void 0?c.wrapS:mt,r.wrapT=c.wrapT!==void 0?c.wrapT:mt,r.magFilter=c.magFilter!==void 0?c.magFilter:$e,r.minFilter=c.minFilter!==void 0?c.minFilter:$e,r.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(r.encoding=c.encoding),c.flipY!==void 0&&(r.flipY=c.flipY),c.format!==void 0&&(r.format=c.format),c.type!==void 0&&(r.type=c.type),c.mipmaps!==void 0&&(r.mipmaps=c.mipmaps,r.minFilter=On),c.mipmapCount===1&&(r.minFilter=$e),c.generateMipmaps!==void 0&&(r.generateMipmaps=c.generateMipmaps),r.needsUpdate=!0,t&&t(r,c))},n,i),r}}class Kc extends Vn{constructor(e){super(e)}load(e,t,n,i){const s=new Ke,r=new M0(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class yr extends Xe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const oa=new ue,jl=new C,ql=new C;class ho{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qa,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jl.setFromMatrixPosition(e.matrixWorld),t.position.copy(jl),ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ql),t.updateMatrixWorld(),oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _0 extends ho{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=xs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qc extends yr{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new _0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yl=new ue,ts=new C,la=new C;class T0 extends ho{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(ts),la.copy(n.position),la.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(la),n.updateMatrixWorld(),i.makeTranslation(-ts.x,-ts.y,-ts.z),Yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl)}}class Ra extends yr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new T0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class E0 extends ho{constructor(){super(new Vi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $c extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new E0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class P0 extends yr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ur{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class C0 extends Vn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Ni.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Ni.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class R0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kl(){return(typeof performance>"u"?Date:performance).now()}const uo="\\[\\]\\.:\\/",L0=new RegExp("["+uo+"]","g"),fo="[^"+uo+"]",z0="[^"+uo.replace("\\.","")+"]",D0=/((?:WC+[\/:])*)/.source.replace("WC",fo),k0=/(WCOD+)?/.source.replace("WCOD",z0),I0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fo),N0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fo),F0=new RegExp("^"+D0+k0+I0+N0+"$"),O0=["material","materials","bones","map"];class B0{constructor(e,t,n){const i=n||Ne.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ne{constructor(e,t,n){this.path=t,this.parsedPath=n||Ne.parseTrackName(t),this.node=Ne.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ne.Composite(e,t,n):new Ne(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(e){const t=F0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);O0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ne.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ne.Composite=B0;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Sn=U0();function U0(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:o}}function H0(a){Math.abs(a)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),a=ot(a,-65504,65504),Sn.floatView[0]=a;const e=Sn.uint32View[0],t=e>>23&511;return Sn.baseTable[t]+((e&8388607)>>Sn.shiftTable[t])}function V0(a){const e=a>>10;return Sn.uint32View[0]=Sn.mantissaTable[Sn.offsetTable[e]+(a&1023)]+Sn.exponentTable[e],Sn.floatView[0]}var $s=Object.freeze({__proto__:null,fromHalfFloat:V0,toHalfFloat:H0});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);function Ql(a,e){if(e===Tu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===ba||e===bc){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===ba)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class G0 extends Vn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new j0(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new Y0(t)}),this.register(function(t){return new K0(t)}),this.register(function(t){return new Q0(t)}),this.register(function(t){return new $0(t)}),this.register(function(t){return new X0(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new q0(t)}),this.register(function(t){return new W0(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new sv(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=ur.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Fi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===eh){try{r[Fe.KHR_BINARY_GLTF]=new rv(e)}catch(h){i&&i(h);return}s=JSON.parse(r[Fe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Av(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Fe.KHR_MATERIALS_UNLIT:r[h]=new Z0;break;case Fe.KHR_DRACO_MESH_COMPRESSION:r[h]=new av(s,this.dracoLoader);break;case Fe.KHR_TEXTURE_TRANSFORM:r[h]=new ov;break;case Fe.KHR_MESH_QUANTIZATION:r[h]=new lv;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function J0(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Fe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class W0{constructor(e){this.parser=e,this.name=Fe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new le(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $c(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ra(u),c.distance=h;break;case"spot":c=new Qc(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,In(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Z0{constructor(){this.name=Fe.KHR_MATERIALS_UNLIT}getMaterialType(){return Zt}extendParams(e,t,n){const i=[];e.color=new le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Le))}return Promise.all(i)}}class X0{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class j0{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(o,o)}return Promise.all(s)}}class q0{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Y0{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new le(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Le)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class K0{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Q0{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new le(o[0],o[1],o[2]),Promise.all(s)}}class $0{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class ev{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new le(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Le)),Promise.all(s)}}class tv{constructor(e){this.parser=e,this.name=Fe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class nv{constructor(e){this.parser=e,this.name=Fe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iv{constructor(e){this.name=Fe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class sv{constructor(e){this.name=Fe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ht.TRIANGLES&&c.mode!==Ht.TRIANGLE_STRIP&&c.mode!==Ht.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const m=new ue,p=new C,v=new Jt,S=new C(1,1,1),A=new Xg(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,x),l.SCALE&&S.fromBufferAttribute(l.SCALE,x),A.setMatrixAt(x,m.compose(p,v,S));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Xe.prototype.copy.call(A,g),A.frustumCulled=!1,this.parser.assignFinalMaterial(A),f.push(A)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const eh="glTF",ns=12,$l={JSON:1313821514,BIN:5130562};class rv{constructor(e){this.name=Fe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ns),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==eh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ns,s=new DataView(e,ns);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===$l.JSON){const c=new Uint8Array(e,ns+r,o);this.content=n.decode(c)}else if(l===$l.BIN){const c=ns+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class av{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Fe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const u in r){const h=La[u]||u.toLowerCase();o[h]=r[u]}for(const u in e.attributes){const h=La[u]||u.toLowerCase();if(r[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Pi[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const f in d.attributes){const g=d.attributes[f],m=l[f];m!==void 0&&(g.normalized=m)}h(d)},o,c)})})}}class ov{constructor(){this.name=Fe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class lv{constructor(){this.name=Fe.KHR_MESH_QUANTIZATION}}class th extends _s{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,m=g-c,p=-2*f+3*d,v=f-d,S=1-p,A=v-d+h;for(let x=0;x!==o;x++){const w=r[m+x+o],T=r[m+x+l]*u,P=r[g+x+o],y=r[g+x]*u;s[x]=S*w+A*T+p*P+v*y}return s}}const cv=new Jt;class hv extends th{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return cv.fromArray(s).normalize().toArray(s),s}}const Ht={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Pi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ec={9728:pt,9729:$e,9984:Ma,9985:wc,9986:tr,9987:On},tc={33071:mt,33648:or,10497:cn},ca={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},La={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uv={CUBICSPLINE:void 0,LINEAR:zi,STEP:vs},ha={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dv(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new co({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Tn})),a.DefaultMaterial}function is(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function In(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fv(a,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;r.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),s&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function pv(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mv(a){const e=a.extensions&&a.extensions[Fe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+nc(e.attributes):t=a.indices+":"+nc(a.attributes)+":"+a.mode,t}function nc(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function za(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gv(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const vv=new ue;class Av{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new J0,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Kc(this.options.manager):this.textureLoader=new C0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};is(s,o,i),In(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,u]of r.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Fe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(ur.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=ca[i.type],o=Pi[i.componentType],l=i.normalized===!0,c=new o(i.count*r);return Promise.resolve(new Ge(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=ca[i.type],c=Pi[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,p;if(f&&f!==h){const v=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let A=t.cache.get(S);A||(m=new c(o,v*f,i.count*f/u),A=new Gg(m,f/u),t.cache.add(S,A)),p=new Qa(A,l,d%f/u,g)}else o===null?m=new c(i.count*l):m=new c(o,d,i.count*l),p=new Ge(m,l,g);if(i.sparse!==void 0){const v=ca.SCALAR,S=Pi[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,w=new S(r[1],A,i.sparse.count*v),T=new c(r[2],x,i.sparse.count*l);o!==null&&(p=new Ge(p.array.slice(),p.itemSize,p.normalized));for(let P=0,y=w.length;P<y;P++){const b=w[P];if(p.setX(b,T[P*l]),l>=2&&p.setY(b,T[P*l+1]),l>=3&&p.setZ(b,T[P*l+2]),l>=4&&p.setW(b,T[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||o.name||"";const d=(s.samplers||{})[r.sampler]||{};return u.magFilter=ec[d.magFilter]||$e,u.minFilter=ec[d.minFilter]||On,u.wrapS=tc[d.wrapS]||cn,u.wrapT=tc[d.wrapT]||cn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:r.mimeType});return l=o.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(m){const p=new Ke(m);p.needsUpdate=!0,d(p)}),t.load(ur.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=r.mimeType||gv(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Fe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Fe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(r);r=s.extensions[Fe.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Gc,jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new eo,jt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return co}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},l=s.extensions||{},c=[];if(l[Fe.KHR_MATERIALS_UNLIT]){const h=i[Fe.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new le(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Le)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=wn);const u=s.alphaMode||ha.OPAQUE;if(u===ha.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ha.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Zt&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new te(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&r!==Zt&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Zt&&(o.emissive=new le().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==Zt&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Le)),Promise.all(c).then(function(){const h=new r(o);return s.name&&(h.name=s.name),In(h,s),t.associations.set(h,{materials:e}),s.extensions&&is(i,h,s),h})}createUniqueName(e){const t=Ne.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Fe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ic(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=mv(c),h=i[u];if(h)r.push(h.promise);else{let d;c.extensions&&c.extensions[Fe.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=ic(new Qe,c,t),i[u]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?dv(this.cache):this.getDependency("material",r[l].material);o.push(u)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const m=u[f],p=r[f];let v;const S=c[f];if(p.mode===Ht.TRIANGLES||p.mode===Ht.TRIANGLE_STRIP||p.mode===Ht.TRIANGLE_FAN||p.mode===void 0)v=s.isSkinnedMesh===!0?new Vc(m,S):new We(m,S),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),p.mode===Ht.TRIANGLE_STRIP?v.geometry=Ql(v.geometry,bc):p.mode===Ht.TRIANGLE_FAN&&(v.geometry=Ql(v.geometry,ba));else if(p.mode===Ht.LINES)v=new jg(m,S);else if(p.mode===Ht.LINE_STRIP)v=new xr(m,S);else if(p.mode===Ht.LINE_LOOP)v=new qg(m,S);else if(p.mode===Ht.POINTS)v=new to(m,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(v.geometry.morphAttributes).length>0&&pv(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),In(v,s),p.extensions&&is(i,v,p),t.assignFinalMaterial(v),h.push(v)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return h[0];const d=new Xt;t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new St(tn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Vi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),In(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],l=[];for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h){o.push(h);const d=new ue;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ar(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],d=n.samplers[h.sampler],f=h.target,g=f.node,m=n.parameters!==void 0?n.parameters[d.input]:d.input,p=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),r.push(this.getDependency("accessor",p)),o.push(d),l.push(f)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],f=c[3],g=c[4],m=[];for(let v=0,S=u.length;v<S;v++){const A=u[v],x=h[v],w=d[v],T=f[v],P=g[v];if(A===void 0)continue;A.updateMatrix();let y;switch(zn[P.path]){case zn.weights:y=ki;break;case zn.rotation:y=Hn;break;case zn.position:case zn.scale:default:y=Ii;break}const b=A.name?A.name:A.uuid,R=T.interpolation!==void 0?uv[T.interpolation]:zi,I=[];zn[P.path]===zn.weights?A.traverse(function(D){D.morphTargetInfluences&&I.push(D.name?D.name:D.uuid)}):I.push(b);let H=w.array;if(w.normalized){const D=za(H.constructor),z=new Float32Array(H.length);for(let O=0,X=H.length;O<X;O++)z[O]=H[O]*D;H=z}for(let D=0,z=I.length;D<z;D++){const O=new y(I[D]+"."+zn[P.path],x.array,H,R);T.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function(Y){const V=this instanceof Hn?hv:th;return new V(this.times,this.values,this.getValueSize()/3,Y)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(O)}}const p=n.name?n.name:"animation_"+e;return new Yc(p,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){const o=[],l=i._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(d){return i._getNodeRef(i.cameraCache,s.camera,d)})),i._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){o.push(d)});const c=[],u=s.children||[];for(let d=0,f=u.length;d<f;d++)c.push(i.getDependency("node",u[d]));const h=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(o),Promise.all(c),h])}().then(function(o){const l=o[0],c=o[1],u=o[2];let h;if(s.isBone===!0?h=new hr:l.length>1?h=new Xt:l.length===1?h=l[0]:h=new Xe,h!==l[0])for(let d=0,f=l.length;d<f;d++)h.add(l[d]);if(s.name&&(h.userData.name=s.name,h.name=r),In(h,s),s.extensions&&is(n,h,s),s.matrix!==void 0){const d=new ue;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,vv)});for(let d=0,f=c.length;d<f;d++)h.add(c[d]);return h})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Xt;n.name&&(s.name=i.createUniqueName(n.name)),In(s,n),n.extensions&&is(t,s,n);const r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof jt||d instanceof Ke)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}}function xv(a,e,t){const n=e.attributes,i=new Ui;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){const u=za(Pi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new C,l=new C;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const m=za(Pi[d.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new Hi;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function ic(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in n){const o=La[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return In(a,e),xv(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?fv(a,e.targets,t):a})}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var sc=function(a){return URL.createObjectURL(new Blob([a],{type:"text/javascript"}))};try{URL.revokeObjectURL(sc(""))}catch{sc=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var Vt=Uint8Array,Nn=Uint16Array,Da=Uint32Array,nh=new Vt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ih=new Vt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),yv=new Vt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),sh=function(a,e){for(var t=new Nn(31),n=0;n<31;++n)t[n]=e+=1<<a[n-1];for(var i=new Da(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return[t,i]},rh=sh(nh,2),ah=rh[0],Sv=rh[1];ah[28]=258,Sv[258]=28;var wv=sh(ih,0),Mv=wv[0],ka=new Nn(32768);for(var je=0;je<32768;++je){var Dn=(je&43690)>>>1|(je&21845)<<1;Dn=(Dn&52428)>>>2|(Dn&13107)<<2,Dn=(Dn&61680)>>>4|(Dn&3855)<<4,ka[je]=((Dn&65280)>>>8|(Dn&255)<<8)>>>1}var hs=function(a,e,t){for(var n=a.length,i=0,s=new Nn(e);i<n;++i)++s[a[i]-1];var r=new Nn(e);for(i=0;i<e;++i)r[i]=r[i-1]+s[i-1]<<1;var o;if(t){o=new Nn(1<<e);var l=15-e;for(i=0;i<n;++i)if(a[i])for(var c=i<<4|a[i],u=e-a[i],h=r[a[i]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)o[ka[h]>>>l]=c}else for(o=new Nn(n),i=0;i<n;++i)a[i]&&(o[i]=ka[r[a[i]-1]++]>>>15-a[i]);return o},Ts=new Vt(288);for(var je=0;je<144;++je)Ts[je]=8;for(var je=144;je<256;++je)Ts[je]=9;for(var je=256;je<280;++je)Ts[je]=7;for(var je=280;je<288;++je)Ts[je]=8;var oh=new Vt(32);for(var je=0;je<32;++je)oh[je]=5;var bv=hs(Ts,9,1),_v=hs(oh,5,1),ua=function(a){for(var e=a[0],t=1;t<a.length;++t)a[t]>e&&(e=a[t]);return e},$t=function(a,e,t){var n=e/8|0;return(a[n]|a[n+1]<<8)>>(e&7)&t},da=function(a,e){var t=e/8|0;return(a[t]|a[t+1]<<8|a[t+2]<<16)>>(e&7)},Tv=function(a){return(a/8|0)+(a&7&&1)},Ev=function(a,e,t){(e==null||e<0)&&(e=0),(t==null||t>a.length)&&(t=a.length);var n=new(a instanceof Nn?Nn:a instanceof Da?Da:Vt)(t-e);return n.set(a.subarray(e,t)),n},Pv=function(a,e,t){var n=a.length;if(!n||t&&!t.l&&n<5)return e||new Vt(0);var i=!e||t,s=!t||t.i;t||(t={}),e||(e=new Vt(n*3));var r=function(B){var Me=e.length;if(B>Me){var fe=new Vt(Math.max(Me*2,B));fe.set(e),e=fe}},o=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,d=t.m,f=t.n,g=n*8;do{if(!u){t.f=o=$t(a,l,1);var m=$t(a,l+1,3);if(l+=3,m)if(m==1)u=bv,h=_v,d=9,f=5;else if(m==2){var A=$t(a,l,31)+257,x=$t(a,l+10,15)+4,w=A+$t(a,l+5,31)+1;l+=14;for(var T=new Vt(w),P=new Vt(19),y=0;y<x;++y)P[yv[y]]=$t(a,l+y*3,7);l+=x*3;for(var b=ua(P),R=(1<<b)-1,I=hs(P,b,1),y=0;y<w;){var H=I[$t(a,l,R)];l+=H&15;var p=H>>>4;if(p<16)T[y++]=p;else{var D=0,z=0;for(p==16?(z=3+$t(a,l,3),l+=2,D=T[y-1]):p==17?(z=3+$t(a,l,7),l+=3):p==18&&(z=11+$t(a,l,127),l+=7);z--;)T[y++]=D}}var O=T.subarray(0,A),X=T.subarray(A);d=ua(O),f=ua(X),u=hs(O,d,1),h=hs(X,f,1)}else throw"invalid block type";else{var p=Tv(l)+4,v=a[p-4]|a[p-3]<<8,S=p+v;if(S>n){if(s)throw"unexpected EOF";break}i&&r(c+v),e.set(a.subarray(p,S),c),t.b=c+=v,t.p=l=S*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}i&&r(c+131072);for(var Y=(1<<d)-1,V=(1<<f)-1,Q=l;;Q=l){var D=u[da(a,l)&Y],q=D>>>4;if(l+=D&15,l>g){if(s)throw"unexpected EOF";break}if(!D)throw"invalid length/literal";if(q<256)e[c++]=q;else if(q==256){Q=l,u=null;break}else{var me=q-254;if(q>264){var y=q-257,F=nh[y];me=$t(a,l,(1<<F)-1)+ah[y],l+=F}var K=h[da(a,l)&V],ie=K>>>4;if(!K)throw"invalid distance";l+=K&15;var X=Mv[ie];if(ie>3){var F=ih[ie];X+=da(a,l)&(1<<F)-1,l+=F}if(l>g){if(s)throw"unexpected EOF";break}i&&r(c+131072);for(var re=c+me;c<re;c+=4)e[c]=e[c-X],e[c+1]=e[c+1-X],e[c+2]=e[c+2-X],e[c+3]=e[c+3-X];c=re}}t.l=u,t.p=Q,t.b=c,u&&(o=1,t.m=d,t.d=h,t.n=f)}while(!o);return c==e.length?e:Ev(e,0,c)},Cv=new Vt(0),Rv=function(a){if((a[0]&15)!=8||a[0]>>>4>7||(a[0]<<8|a[1])%31)throw"invalid zlib data";if(a[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Lv(a,e){return Pv((Rv(a),a.subarray(2,-4)),e)}var zv=typeof TextDecoder<"u"&&new TextDecoder,Dv=0;try{zv.decode(Cv,{stream:!0}),Dv=1}catch{}function lh(a,e,t){const n=t.length-a-1;if(e>=t[n])return n-1;if(e<=t[a])return a;let i=a,s=n,r=Math.floor((i+s)/2);for(;e<t[r]||e>=t[r+1];)e<t[r]?s=r:i=r,r=Math.floor((i+s)/2);return r}function kv(a,e,t,n){const i=[],s=[],r=[];i[0]=1;for(let o=1;o<=t;++o){s[o]=e-n[a+1-o],r[o]=n[a+o]-e;let l=0;for(let c=0;c<o;++c){const u=r[c+1],h=s[o-c],d=i[c]/(u+h);i[c]=l+u*d,l=h*d}i[o]=l}return i}function Iv(a,e,t,n){const i=lh(a,n,e),s=kv(i,n,a,e),r=new Ue(0,0,0,0);for(let o=0;o<=a;++o){const l=t[i-a+o],c=s[o],u=l.w*c;r.x+=l.x*u,r.y+=l.y*u,r.z+=l.z*u,r.w+=l.w*c}return r}function Nv(a,e,t,n,i){const s=[];for(let h=0;h<=t;++h)s[h]=0;const r=[];for(let h=0;h<=n;++h)r[h]=s.slice(0);const o=[];for(let h=0;h<=t;++h)o[h]=s.slice(0);o[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[a+1-h],c[h]=i[a+h]-e;let d=0;for(let f=0;f<h;++f){const g=c[f+1],m=l[h-f];o[h][f]=g+m;const p=o[f][h-1]/o[h][f];o[f][h]=d+g*p,d=m*p}o[h][h]=d}for(let h=0;h<=t;++h)r[0][h]=o[h][t];for(let h=0;h<=t;++h){let d=0,f=1;const g=[];for(let m=0;m<=t;++m)g[m]=s.slice(0);g[0][0]=1;for(let m=1;m<=n;++m){let p=0;const v=h-m,S=t-m;h>=m&&(g[f][0]=g[d][0]/o[S+1][v],p=g[f][0]*o[v][S]);const A=v>=-1?1:-v,x=h-1<=S?m-1:t-h;for(let T=A;T<=x;++T)g[f][T]=(g[d][T]-g[d][T-1])/o[S+1][v+T],p+=g[f][T]*o[v+T][S];h<=S&&(g[f][m]=-g[d][m-1]/o[S+1][h],p+=g[f][m]*o[h][S]),r[m][h]=p;const w=d;d=f,f=w}}let u=t;for(let h=1;h<=n;++h){for(let d=0;d<=t;++d)r[h][d]*=u;u*=t-h}return r}function Fv(a,e,t,n,i){const s=i<a?i:a,r=[],o=lh(a,n,e),l=Nv(o,n,a,s,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),d=h.w;h.x*=d,h.y*=d,h.z*=d,c[u]=h}for(let u=0;u<=s;++u){const h=c[o-a].clone().multiplyScalar(l[u][0]);for(let d=1;d<=a;++d)h.add(c[o-a+d].clone().multiplyScalar(l[u][d]));r[u]=h}for(let u=s+1;u<=i+1;++u)r[u]=new Ue(0,0,0);return r}function Ov(a,e){let t=1;for(let i=2;i<=a;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=a-e;++i)n*=i;return t/n}function Bv(a){const e=a.length,t=[],n=[];for(let s=0;s<e;++s){const r=a[s];t[s]=new C(r.x,r.y,r.z),n[s]=r.w}const i=[];for(let s=0;s<e;++s){const r=t[s].clone();for(let o=1;o<=s;++o)r.sub(i[s-o].clone().multiplyScalar(Ov(s,o)*n[o]));i[s]=r.divideScalar(n[0])}return i}function Uv(a,e,t,n,i){const s=Fv(a,e,t,n,i);return Bv(s)}class Hv extends rn{constructor(e,t,n,i,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||this.knots.length-1;for(let r=0;r<n.length;++r){const o=n[r];this.controlPoints[r]=new Ue(o.x,o.y,o.z,o.w)}}getPoint(e,t=new C){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=Iv(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new C){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=Uv(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}}let Re,et,Pt;class Vv extends Vn{constructor(e){super(e)}load(e,t,n,i){const s=this,r=s.path===""?ur.extractUrlBase(e):s.path,o=new Fi(this.manager);o.setPath(s.path),o.setResponseType("arraybuffer"),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(l){try{t(s.parse(l,r))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){if(jv(e))Re=new Xv().parse(e);else{const i=dh(e);if(!qv(i))throw new Error("THREE.FBXLoader: Unknown format.");if(ac(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+ac(i));Re=new Zv().parse(i)}const n=new Kc(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Gv(n,this.manager).parse(Re)}}class Gv{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){et=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),s=new Jv().parse(i);return this.parseScene(i,s,n),Pt}parseConnections(){const e=new Map;return"Connections"in Re&&Re.Connections.connections.forEach(function(n){const i=n[0],s=n[1],r=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const o={ID:s,relationship:r};e.get(i).parents.push(o),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:i,relationship:r};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Re.Objects){const n=Re.Objects.Video;for(const i in n){const s=n[i],r=parseInt(i);if(e[r]=s.RelativeFilename||s.Filename,"Content"in s){const o=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(o||l){const c=this.parseImage(n[i]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const r=new Uint8Array(t);return window.URL.createObjectURL(new Blob([r],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Re.Objects){const n=Re.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],e);t.set(parseInt(i),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,s=e.WrapModeV,r=i!==void 0?i.value:0,o=s!==void 0?s.value:0;if(n.wrapS=r===0?cn:mt,n.wrapT=o===0?cn:mt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,s=et.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let r;const o=e.FileName.slice(-3).toLowerCase();if(o==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),r=new Ke):(l.setPath(this.textureLoader.path),r=l.load(n))}else o==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),r=new Ke):r=this.textureLoader.load(n);return this.textureLoader.setPath(i),r}parseMaterials(e){const t=new Map;if("Material"in Re.Objects){const n=Re.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],e);s!==null&&t.set(parseInt(i),s)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!et.has(n))return null;const r=this.parseParameters(e,t,n);let o;switch(s.toLowerCase()){case"phong":o=new aa;break;case"lambert":o=new d0;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),o=new aa;break}return o.setValues(r),o.name=i,o}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new le().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new le().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new le().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new le().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new le().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new le().fromArray(e.SpecularColor.value));const s=this;return et.get(n).children.forEach(function(r){const o=r.relationship;switch(o){case"Bump":i.bumpMap=s.getTexture(t,r.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(t,r.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(t,r.ID),i.map!==void 0&&(i.map.encoding=Le);break;case"DisplacementColor":i.displacementMap=s.getTexture(t,r.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(t,r.ID),i.emissiveMap!==void 0&&(i.emissiveMap.encoding=Le);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(t,r.ID);break;case"ReflectionColor":i.envMap=s.getTexture(t,r.ID),i.envMap!==void 0&&(i.envMap.mapping=ar,i.envMap.encoding=Le);break;case"SpecularColor":i.specularMap=s.getTexture(t,r.ID),i.specularMap!==void 0&&(i.specularMap.encoding=Le);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(t,r.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),i}getTexture(e,t){return"LayeredTexture"in Re.Objects&&t in Re.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=et.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Re.Objects){const n=Re.Objects.Deformer;for(const i in n){const s=n[i],r=et.get(parseInt(i));if(s.attrType==="Skin"){const o=this.parseSkeleton(r,n);o.ID=i,r.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=r.parents[0].ID,e[i]=o}else if(s.attrType==="BlendShape"){const o={id:i};o.rawTargets=this.parseMorphTargets(r,n),o.id=i,r.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const s=t[i.ID];if(s.attrType!=="Cluster")return;const r={ID:i.ID,indices:[],weights:[],transformLink:new ue().fromArray(s.TransformLink.a)};"Indexes"in s&&(r.indices=s.Indexes.a,r.weights=s.Weights.a),n.push(r)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const s=e.children[i],r=t[s.ID],o={name:r.attrName,initialWeight:r.DeformPercent,id:r.id,fullWeights:r.FullWeights.a};if(r.attrType!=="BlendShapeChannel")return;o.geoID=et.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){Pt=new Xt;const i=this.parseModels(e.skeletons,t,n),s=Re.Objects.Model,r=this;i.forEach(function(l){const c=s[l.ID];r.setLookAtProperties(l,c),et.get(l.ID).parents.forEach(function(h){const d=i.get(h.ID);d!==void 0&&d.add(l)}),l.parent===null&&Pt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),Pt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=hh(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new Wv().parse();Pt.children.length===1&&Pt.children[0].isGroup&&(Pt.children[0].animations=o,Pt=Pt.children[0]),Pt.animations=o}parseModels(e,t,n){const i=new Map,s=Re.Objects.Model;for(const r in s){const o=parseInt(r),l=s[r],c=et.get(o);let u=this.buildSkeleton(c,e,o,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new hr;break;case"Null":default:u=new Xt;break}u.name=l.attrName?Ne.sanitizeNodeName(l.attrName):"",u.ID=o}this.getTransformData(u,l),i.set(o,u)}return i}buildSkeleton(e,t,n,i){let s=null;return e.parents.forEach(function(r){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,u){if(c.ID===r.ID){const h=s;s=new hr,s.matrixWorld.copy(c.transformLink),s.name=i?Ne.sanitizeNodeName(i):"",s.ID=n,l.bones[u]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(i){const s=Re.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new Xe;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let r=1e3;n.FarPlane!==void 0&&(r=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const c=o/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new St(u,c,s,r),h!==null&&t.setFocalLength(h);break;case 1:t=new Vi(-o/2,o/2,l/2,-l/2,s,r);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new Xe;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const s=Re.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new Xe;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new le().fromArray(n.Color.value));let r=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(r=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Ra(s,r,o,l);break;case 1:t=new $c(s,r);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=tn.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=tn.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new Qc(s,r,o,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Ra(s,r);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,s=null,r=null;const o=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?r=o:o.length>0?r=o[0]:(r=new aa({color:13421772}),o.push(r)),"color"in s.attributes&&o.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(i=new Vc(s,r),i.normalizeSkinWeights()):i=new We(s,r),i}createCurve(e,t){const n=e.children.reduce(function(s,r){return t.has(r.ID)&&(s=t.get(r.ID)),s},null),i=new eo({color:3342591,linewidth:1});return new xr(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=uh(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&et.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=Re.Objects.Model[i.ID];if("Lcl_Translation"in s){const r=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(r),Pt.add(e.target)):e.lookAt(new C().fromArray(r))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const s in e){const r=e[s];et.get(parseInt(r.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;et.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new Ar(r.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Re.Objects){const t=Re.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(s){e[s.Node]=new ue().fromArray(s.Matrix.a)}):e[i.Node]=new ue().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Re&&"AmbientColor"in Re.GlobalSettings){const e=Re.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const s=new le(t,n,i);Pt.add(new P0(s,1))}}}}class Jv{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Re.Objects){const n=Re.Objects.Geometry;for(const i in n){const s=et.get(parseInt(i)),r=this.parseGeometry(s,n[i],e);t.set(parseInt(i),r)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,s=[],r=e.parents.map(function(h){return Re.Objects.Model[h.ID]});if(r.length===0)return;const o=e.children.reduce(function(h,d){return i[d.ID]!==void 0&&(h=i[d.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&s.push(n.morphTargets[h.ID])});const l=r[0],c={};"RotationOrder"in l&&(c.eulerOrder=uh(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=hh(c);return this.genGeometry(t,o,s,u)}genGeometry(e,t,n,i){const s=new Qe;e.attrName&&(s.name=e.attrName);const r=this.parseGeoNode(e,t),o=this.genBuffers(r),l=new Ie(o.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),o.colors.length>0&&s.setAttribute("color",new Ie(o.colors,3)),t&&(s.setAttribute("skinIndex",new ja(o.weightsIndices,4)),s.setAttribute("skinWeight",new Ie(o.vertexWeights,4)),s.FBX_Deformer=t),o.normal.length>0){const c=new Ct().getNormalMatrix(i),u=new Ie(o.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(o.uvs.forEach(function(c,u){let h="uv"+(u+1).toString();u===0&&(h="uv"),s.setAttribute(h,new Ie(o.uvs[u],2))}),r.material&&r.material.mappingType!=="AllSame"){let c=o.materialIndex[0],u=0;if(o.materialIndex.forEach(function(h,d){h!==c&&(s.addGroup(u,d-u,c),c=h,u=d)}),s.groups.length>0){const h=s.groups[s.groups.length-1],d=h.start+h.count;d!==o.materialIndex.length&&s.addGroup(d,o.materialIndex.length-d,c)}s.groups.length===0&&s.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(s,e,n,i),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,s){i.indices.forEach(function(r,o){n.weightTable[r]===void 0&&(n.weightTable[r]=[]),n.weightTable[r].push({id:s,weight:i.weights[o]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,r=[],o=[],l=[],c=[],u=[],h=[];const d=this;return e.vertexIndices.forEach(function(f,g){let m,p=!1;f<0&&(f=f^-1,p=!0);let v=[],S=[];if(r.push(f*3,f*3+1,f*3+2),e.color){const A=er(g,n,f,e.color);l.push(A[0],A[1],A[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(A){S.push(A.weight),v.push(A.id)}),S.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const A=[0,0,0,0],x=[0,0,0,0];S.forEach(function(w,T){let P=w,y=v[T];x.forEach(function(b,R,I){if(P>b){I[R]=P,P=b;const H=A[R];A[R]=y,y=H}})}),v=A,S=x}for(;S.length<4;)S.push(0),v.push(0);for(let A=0;A<4;++A)u.push(S[A]),h.push(v[A])}if(e.normal){const A=er(g,n,f,e.normal);o.push(A[0],A[1],A[2])}e.material&&e.material.mappingType!=="AllSame"&&(m=er(g,n,f,e.material)[0],m<0&&(d.negativeMaterialIndices=!0,m=0)),e.uv&&e.uv.forEach(function(A,x){const w=er(g,n,f,A);c[x]===void 0&&(c[x]=[]),c[x].push(w[0]),c[x].push(w[1])}),i++,p&&(i>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),d.genFace(t,e,r,m,o,l,c,u,h,i),n++,i=0,r=[],o=[],l=[],c=[],u=[],h=[])}),t}genFace(e,t,n,i,s,r,o,l,c,u){for(let h=2;h<u;h++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(h-1)*3]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(h-1)*4]),e.weightsIndices.push(c[(h-1)*4+1]),e.weightsIndices.push(c[(h-1)*4+2]),e.weightsIndices.push(c[(h-1)*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3])),t.color&&(e.colors.push(r[0]),e.colors.push(r[1]),e.colors.push(r[2]),e.colors.push(r[(h-1)*3]),e.colors.push(r[(h-1)*3+1]),e.colors.push(r[(h-1)*3+2]),e.colors.push(r[h*3]),e.colors.push(r[h*3+1]),e.colors.push(r[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(h-1)*3]),e.normal.push(s[(h-1)*3+1]),e.normal.push(s[(h-1)*3+2]),e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2])),t.uv&&t.uv.forEach(function(d,f){e.uvs[f]===void 0&&(e.uvs[f]=[]),e.uvs[f].push(o[f][0]),e.uvs[f].push(o[f][1]),e.uvs[f].push(o[f][(h-1)*2]),e.uvs[f].push(o[f][(h-1)*2+1]),e.uvs[f].push(o[f][h*2]),e.uvs[f].push(o[f][h*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(r){r.rawTargets.forEach(function(o){const l=Re.Objects.Geometry[o.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,i,o.name)})})}genMorphGeometry(e,t,n,i,s){const r=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],o=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const m=l[g]*3;u[m]=o[g*3],u[m+1]=o[g*3+1],u[m+2]=o[g*3+2]}const h={vertexIndices:r,vertexPositions:u},d=this.genBuffers(h),f=new Ie(d.vertex,3);f.name=s||n.attrName,f.applyMatrix4(i),e.morphAttributes.position.push(f)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let s=[];return n==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:i,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,s=[];for(let r=0;r<i.length;++r)s.push(r);return{dataSize:1,buffer:i,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Qe;const n=t-1,i=e.KnotVector.a,s=[],r=e.Points.a;for(let h=0,d=r.length;h<d;h+=4)s.push(new Ue().fromArray(r,h));let o,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){o=n,l=i.length-1-o;for(let h=0;h<n;++h)s.push(s[h])}const u=new Hv(n,i,s,o,l).getPoints(s.length*12);return new Qe().setFromPoints(u)}}class Wv{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],s=this.addClip(i);e.push(s)}return e}parseClips(){if(Re.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Re.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Re.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(Yv),values:t[n].KeyValueFloat.a},s=et.get(i.id);if(s!==void 0){const r=s.parents[0].ID,o=s.parents[0].relationship;o.match(/X/)?e.get(r).curves.x=i:o.match(/Y/)?e.get(r).curves.y=i:o.match(/Z/)?e.get(r).curves.z=i:o.match(/d|DeformPercent/)&&e.has(r)&&(e.get(r).curves.morph=i)}}}parseAnimationLayers(e){const t=Re.Objects.AnimationLayer,n=new Map;for(const i in t){const s=[],r=et.get(parseInt(i));r!==void 0&&(r.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const h=et.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(h!==void 0){const d=Re.Objects.Model[h.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?Ne.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Pt.traverse(function(g){g.ID===d.id&&(f.transform=g.matrix,g.userData.transformData&&(f.eulerOrder=g.userData.transformData.eulerOrder))}),f.transform||(f.transform=new ue),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),s[c]=f}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const h=et.get(l.ID).parents.filter(function(v){return v.relationship!==void 0})[0].ID,d=et.get(h).parents[0].ID,f=et.get(d).parents[0].ID,g=et.get(f).parents[0].ID,m=Re.Objects.Model[g],p={modelName:m.attrName?Ne.sanitizeNodeName(m.attrName):"",morphName:Re.Objects.Deformer[h].attrName};s[c]=p}s[c][u.attr]=u}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(e){const t=Re.Objects.AnimationStack,n={};for(const i in t){const s=et.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const r=e.get(s[0].ID);n[i]={name:t[i].attrName,layer:r}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Yc(e.name,-1,t)}generateTracks(e){const t=[];let n=new C,i=new Jt,s=new C;if(e.transform&&e.transform.decompose(n,i,s),n=n.toArray(),i=new Wt().setFromQuaternion(i,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const s=this.getTimesForAllAxes(t),r=this.getKeyframeTrackValues(s,t,n);return new Ii(e+"."+i,s,r)}generateRotationTrack(e,t,n,i,s,r){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(tn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(tn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(tn.degToRad));const o=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(o,t,n);i!==void 0&&(i=i.map(tn.degToRad),i.push(r),i=new Wt().fromArray(i),i=new Jt().setFromEuler(i)),s!==void 0&&(s=s.map(tn.degToRad),s.push(r),s=new Wt().fromArray(s),s=new Jt().setFromEuler(s).invert());const c=new Jt,u=new Wt,h=[];for(let d=0;d<l.length;d+=3)u.set(l[d],l[d+1],l[d+2],r),c.setFromEuler(u),i!==void 0&&c.premultiply(i),s!==void 0&&c.multiply(s),c.toArray(h,d/3*4);return new Hn(e+".quaternion",o,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),i=Pt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new ki(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let s=1;s<t.length;s++){const r=t[s];r!==i&&(t[n]=r,i=r,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,s=[];let r=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(r=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),r!==-1){const u=t.x.values[r];s.push(u),i[0]=u}else s.push(i[0]);if(o!==-1){const u=t.y.values[o];s.push(u),i[1]=u}else s.push(i[1]);if(l!==-1){const u=t.z.values[l];s.push(u),i[2]=u}else s.push(i[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,s=Math.abs(i);if(s>=180){const r=s/180,o=i/r;let l=n+o;const c=e.times[t-1],h=(e.times[t]-c)/r;let d=c+h;const f=[],g=[];for(;d<e.times[t];)f.push(d),d+=h,g.push(l),l+=o;e.times=oc(e.times,t,f),e.values=oc(e.values,t,g)}}}}class Zv{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new ch,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,s){const r=i.match(/^[\s\t]*;/),o=i.match(/^[\s\t]*$/);if(r||o)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++s]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},r=this.parseNodeAttr(i),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in o?(n==="PoseNode"?o.PoseNode.push(s):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),r.id!==""&&(o[n][r.id]=s)):typeof r.id=="number"?(o[n]={},o[n][r.id]=s):n!=="Properties70"&&(n==="PoseNode"?o[n]=[s]:o[n]=s),typeof r.id=="number"&&(s.id=r.id),r.name!==""&&(s.attrName=r.name),r.type!==""&&(s.attrType=r.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const r=this.getCurrentNode();if(r.name==="Properties70"){this.parseNodeSpecialProperty(e,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=s.split(",").slice(3);h=h.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",s=[c,u],Qv(s,h),r[i]===void 0&&(r[i]=[])}i==="Node"&&(r.id=s),i in r&&Array.isArray(r[i])?r[i].push(s):i!=="a"?r[i]=s:r.a=s,this.setCurrentProp(r,i),i==="a"&&s.slice(-1)!==","&&(r.a=pa(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=pa(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],r=i[1],o=i[2],l=i[3];let c=i[4];switch(r){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=pa(c);break}this.getPrevNode()[s]={type:r,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class Xv{parse(e){const t=new rc(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new ch;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&i.add(s.name,s)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const r=e.getUint8(),o=e.getString(r);if(i===0)return null;const l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===i;i>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(o,n,d)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,r){r!==0&&i.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const r=n.propertyList[2],o=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:s,type2:r,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),s=e.getUint32(),r=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const o=Lv(new Uint8Array(e.getArrayBuffer(r))),l=new rc(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class rc{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class ch{add(e,t){this[e]=t}}function jv(a){const e="Kaydara FBX Binary  \0";return a.byteLength>=e.length&&e===dh(a,0,e.length)}function qv(a){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const s=a[i-1];return a=a.slice(t+i),t++,s}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function ac(a){const e=/FBXVersion: (\d+)/,t=a.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Yv(a){return a/46186158e3}const Kv=[];function er(a,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=a;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,r=s+n.dataSize;return $v(Kv,n.buffer,s,r)}const fa=new Wt,wi=new C;function hh(a){const e=new ue,t=new ue,n=new ue,i=new ue,s=new ue,r=new ue,o=new ue,l=new ue,c=new ue,u=new ue,h=new ue,d=new ue,f=a.inheritType?a.inheritType:0;if(a.translation&&e.setPosition(wi.fromArray(a.translation)),a.preRotation){const R=a.preRotation.map(tn.degToRad);R.push(a.eulerOrder||Wt.DEFAULT_ORDER),t.makeRotationFromEuler(fa.fromArray(R))}if(a.rotation){const R=a.rotation.map(tn.degToRad);R.push(a.eulerOrder||Wt.DEFAULT_ORDER),n.makeRotationFromEuler(fa.fromArray(R))}if(a.postRotation){const R=a.postRotation.map(tn.degToRad);R.push(a.eulerOrder||Wt.DEFAULT_ORDER),i.makeRotationFromEuler(fa.fromArray(R)),i.invert()}a.scale&&s.scale(wi.fromArray(a.scale)),a.scalingOffset&&o.setPosition(wi.fromArray(a.scalingOffset)),a.scalingPivot&&r.setPosition(wi.fromArray(a.scalingPivot)),a.rotationOffset&&l.setPosition(wi.fromArray(a.rotationOffset)),a.rotationPivot&&c.setPosition(wi.fromArray(a.rotationPivot)),a.parentMatrixWorld&&(h.copy(a.parentMatrix),u.copy(a.parentMatrixWorld));const g=t.clone().multiply(n).multiply(i),m=new ue;m.extractRotation(u);const p=new ue;p.copyPosition(u);const v=p.clone().invert().multiply(u),S=m.clone().invert().multiply(v),A=s,x=new ue;if(f===0)x.copy(m).multiply(g).multiply(S).multiply(A);else if(f===1)x.copy(m).multiply(S).multiply(g).multiply(A);else{const I=new ue().scale(new C().setFromMatrixScale(h)).clone().invert(),H=S.clone().multiply(I);x.copy(m).multiply(g).multiply(H).multiply(A)}const w=c.clone().invert(),T=r.clone().invert();let P=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(w).multiply(o).multiply(r).multiply(s).multiply(T);const y=new ue().copyPosition(P),b=u.clone().multiply(y);return d.copyPosition(b),P=d.clone().multiply(x),P.premultiply(u.invert()),P}function uh(a){a=a||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return a===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[a]}function pa(a){return a.split(",").map(function(t){return parseFloat(t)})}function dh(a,e,t){return e===void 0&&(e=0),t===void 0&&(t=a.byteLength),new TextDecoder().decode(new Uint8Array(a,e,t))}function Qv(a,e){for(let t=0,n=a.length,i=e.length;t<i;t++,n++)a[n]=e[t]}function $v(a,e,t,n){for(let i=t,s=0;i<n;i++,s++)a[s]=e[i];return a}function oc(a,e,t){return a.slice(0,e).concat(t).concat(a.slice(e))}const ma=new WeakMap;class lc extends Vn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Fi(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.decodeDracoFile(r,t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const s={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(ma.has(e)){const l=ma.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(s,r).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),ma.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Qe;e.index&&t.setIndex(new Ge(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,o=i.itemSize;t.setAttribute(s,new Ge(r,o))}return t}_loadLibrary(e,t){const n=new Fi(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=eA.toString(),r=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function eA(){let a,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":a=o.decoderConfig,e=new Promise(function(u){a.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(a)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder,f=new h.DecoderBuffer;f.Init(new Int8Array(l),l.byteLength);try{const g=t(h,d,f,c),m=g.attributes.map(p=>p.array.buffer);g.index&&m.push(g.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:g},m)}catch(g){console.error(g),self.postMessage({type:"error",id:o.id,error:g.message})}finally{h.destroy(f),h.destroy(d)}});break}};function t(r,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,f;const g=o.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)d=new r.Mesh,f=o.DecodeBufferToMesh(l,d);else if(g===r.POINT_CLOUD)d=new r.PointCloud,f=o.DecodeBufferToPointCloud(l,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const m={index:null,attributes:[]};for(const p in u){const v=self[h[p]];let S,A;if(c.useUniqueIDs)A=u[p],S=o.GetAttributeByUniqueId(d,A);else{if(A=o.GetAttributeId(d,r[u[p]]),A===-1)continue;S=o.GetAttribute(d,A)}m.attributes.push(i(r,o,d,p,v,S))}return g===r.TRIANGULAR_MESH&&(m.index=n(r,o,d)),r.destroy(d),m}function n(r,o,l){const u=l.num_faces()*3,h=u*4,d=r._malloc(h);o.GetTrianglesUInt32Array(l,h,d);const f=new Uint32Array(r.HEAPF32.buffer,d,u).slice();return r._free(d),{array:f,itemSize:1}}function i(r,o,l,c,u,h){const d=h.num_components(),g=l.num_points()*d,m=g*u.BYTES_PER_ELEMENT,p=s(r,u),v=r._malloc(m);o.GetAttributeDataArrayForAllPoints(l,h,p,m,v);const S=new u(r.HEAPF32.buffer,v,g).slice();return r._free(v),{name:c,array:S,itemSize:d}}function s(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class tA extends b0{constructor(e){super(e),this.type=Mn}parse(e){const o=function(A,x){switch(A){case 1:console.error("THREE.RGBELoader Read Error: "+(x||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(x||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(x||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(x||""))}return-1},h=`
`,d=function(A,x,w){x=x||1024;let P=A.pos,y=-1,b=0,R="",I=String.fromCharCode.apply(null,new Uint16Array(A.subarray(P,P+128)));for(;0>(y=I.indexOf(h))&&b<x&&P<A.byteLength;)R+=I,b+=I.length,P+=128,I+=String.fromCharCode.apply(null,new Uint16Array(A.subarray(P,P+128)));return-1<y?(w!==!1&&(A.pos+=b+y+1),R+I.slice(0,y)):!1},f=function(A){const x=/^#\?(\S+)/,w=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,y=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,b={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let R,I;if(A.pos>=A.byteLength||!(R=d(A)))return o(1,"no header found");if(!(I=R.match(x)))return o(3,"bad initial token");for(b.valid|=1,b.programtype=I[1],b.string+=R+`
`;R=d(A),R!==!1;){if(b.string+=R+`
`,R.charAt(0)==="#"){b.comments+=R+`
`;continue}if((I=R.match(w))&&(b.gamma=parseFloat(I[1])),(I=R.match(T))&&(b.exposure=parseFloat(I[1])),(I=R.match(P))&&(b.valid|=2,b.format=I[1]),(I=R.match(y))&&(b.valid|=4,b.height=parseInt(I[1],10),b.width=parseInt(I[2],10)),b.valid&2&&b.valid&4)break}return b.valid&2?b.valid&4?b:o(3,"missing image size specifier"):o(3,"missing format specifier")},g=function(A,x,w){const T=x;if(T<8||T>32767||A[0]!==2||A[1]!==2||A[2]&128)return new Uint8Array(A);if(T!==(A[2]<<8|A[3]))return o(3,"wrong scanline width");const P=new Uint8Array(4*x*w);if(!P.length)return o(4,"unable to allocate buffer space");let y=0,b=0;const R=4*T,I=new Uint8Array(4),H=new Uint8Array(R);let D=w;for(;D>0&&b<A.byteLength;){if(b+4>A.byteLength)return o(1);if(I[0]=A[b++],I[1]=A[b++],I[2]=A[b++],I[3]=A[b++],I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=T)return o(3,"bad rgbe scanline format");let z=0,O;for(;z<R&&b<A.byteLength;){O=A[b++];const Y=O>128;if(Y&&(O-=128),O===0||z+O>R)return o(3,"bad scanline data");if(Y){const V=A[b++];for(let Q=0;Q<O;Q++)H[z++]=V}else H.set(A.subarray(b,b+O),z),z+=O,b+=O}const X=T;for(let Y=0;Y<X;Y++){let V=0;P[y]=H[Y+V],V+=T,P[y+1]=H[Y+V],V+=T,P[y+2]=H[Y+V],V+=T,P[y+3]=H[Y+V],y+=4}D--}return P},m=function(A,x,w,T){const P=A[x+3],y=Math.pow(2,P-128)/255;w[T+0]=A[x+0]*y,w[T+1]=A[x+1]*y,w[T+2]=A[x+2]*y,w[T+3]=1},p=function(A,x,w,T){const P=A[x+3],y=Math.pow(2,P-128)/255;w[T+0]=$s.toHalfFloat(Math.min(A[x+0]*y,65504)),w[T+1]=$s.toHalfFloat(Math.min(A[x+1]*y,65504)),w[T+2]=$s.toHalfFloat(Math.min(A[x+2]*y,65504)),w[T+3]=$s.toHalfFloat(1)},v=new Uint8Array(e);v.pos=0;const S=f(v);if(S!==-1){const A=S.width,x=S.height,w=g(v.subarray(v.pos),A,x);if(w!==-1){let T,P,y;switch(this.type){case Gt:y=w.length/4;const b=new Float32Array(y*4);for(let I=0;I<y;I++)m(w,I*4,b,I*4);T=b,P=Gt;break;case Mn:y=w.length/4;const R=new Uint16Array(y*4);for(let I=0;I<y;I++)p(w,I*4,R,I*4);T=R,P=Mn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:A,height:x,data:T,header:S.string,gamma:S.gamma,exposure:S.exposure,type:P}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(r,o){switch(r.type){case Gt:case Mn:r.encoding=Bn,r.minFilter=$e,r.magFilter=$e,r.generateMipmaps=!1,r.flipY=!0;break}t&&t(r,o)}return super.load(e,s,n,i)}}class fh extends Ms{constructor(){super(),this.setLoaders(),this.toLoad=0,this.loaded=0,this.items={}}setLoaders(){this.loaders=[],this.loaders.push({extensions:["jpg","png"],action:s=>{const r=new Image;r.addEventListener("load",()=>{this.fileLoadEnd(s,r)}),r.addEventListener("error",()=>{this.fileLoadEnd(s,r)}),r.src=s.source}});const e=new lc;e.setDecoderPath("draco/"),e.setDecoderConfig({type:"js"}),this.loaders.push({extensions:["drc"],action:s=>{e.load(s.source,r=>{this.fileLoadEnd(s,r),lc.releaseDecoderModule()})}});const t=new G0;t.setDRACOLoader(e),this.loaders.push({extensions:["glb","gltf"],action:s=>{t.load(s.source,r=>{this.fileLoadEnd(s,r)})}});const n=new Vv;this.loaders.push({extensions:["fbx"],action:s=>{n.load(s.source,r=>{this.fileLoadEnd(s,r)})}});const i=new tA;this.loaders.push({extensions:["hdr"],action:s=>{i.load(s.source,r=>{this.fileLoadEnd(s,r)})}})}load(e=[]){for(const t of e){this.toLoad++;const n=t.source.match(/\.([a-z]+)$/);if(typeof n[1]<"u"){const i=n[1],s=this.loaders.find(r=>r.extensions.find(o=>o===i));s?s.action(t):console.warn(`Cannot found loader for ${t}`)}else console.warn(`Cannot found extension of ${t}`)}}fileLoadEnd(e,t){this.loaded++,this.items[e.name]=t,this.trigger("fileEnd",[e,t]),this.loaded===this.toLoad&&this.trigger("end")}}U.register("UTILS","Loader",fh);class ph{distance(e,t,n,i){return Math.hypot(e-n,t-i)}}U.register("UTILS","MathUtils",ph);class mh extends Ms{constructor(){super(),this.start=Date.now()/1e3,this.current=this.start,this.elapsed=0,this.delta=16/1e3,this.playing=!0,this.tick=this.tick.bind(this),this.tick()}play(){this.playing=!0}pause(){this.playing=!1}tick(){this.ticker=window.requestAnimationFrame(this.tick);const e=Date.now()/1e3;this.delta=e-this.current,this.elapsed+=this.playing?this.delta:0,this.current=e,this.delta>60/1e3&&(this.delta=60/1e3),this.playing&&this.trigger("tick")}stop(){window.cancelAnimationFrame(this.ticker)}}U.register("UTILS","Time",mh);class gh{constructor(){location.hash==="#debug"&&this.activate()}activate(){this.active||(this.active=!0,this.ui=new U.DEBUG.UI,this.stats=new U.DEBUG.Stats)}}U.register("DEBUG","Debug",gh);class vh extends Ms{constructor(e){super(),this.items={},this.loader=new fh({renderer:this.renderer}),this.groups={},this.groups.assets=[...e],this.groups.loaded=[],this.groups.current=null,this.loadNextGroup(),this.loader.on("fileEnd",(t,n)=>{let i=n;t.type==="texture"&&(i instanceof Ke||(i=new Ke(n)),i.needsUpdate=!0),this.items[t.name]=i,this.groups.current.loaded++,this.trigger("progress",[this.groups.current,t,i])}),this.loader.on("end",()=>{this.groups.loaded.push(this.groups.current),this.trigger("groupEnd",[this.groups.current]),this.groups.assets.length>0?this.loadNextGroup():this.trigger("end")})}loadNextGroup(){this.groups.current=this.groups.assets.shift(),this.groups.current.toLoad=this.groups.current.items.length,this.groups.current.loaded=0,this.loader.load(this.groups.current.items)}createInstancedMeshes(e,t){const n=[];for(const s of t)n.push({name:s.name,regex:s.regex,meshesGroups:[],instancedMeshes:[]});const i={};for(const s of n)i[s.name]=s.instancedMeshes;return i}destroy(){for(const e in this.items){const t=this.items[e];t instanceof Ke&&t.dispose()}}}U.register("","Resources",vh);class Ah extends Ms{constructor(){super(),this.world=new iA,this.viewport=this.world.viewport,this.debug=this.world.debug,this.scene=this.world.scene,this.camera=this.world.camera,this.setKeys(),this.setPointer(),this.on("pointerLockDown",()=>{this.viewport.pointerLock.toggle()}),this.on("fullscreenDown",()=>{this.viewport.fullscreen.toggle()}),this.on("debugDown",()=>{location.hash==="#debug"?location.hash="":location.hash="debug",location.reload()})}setKeys(){this.keys={},this.keys.map=[{codes:["ArrowUp","KeyW"],name:"forward"},{codes:["ArrowRight","KeyD"],name:"strafeRight"},{codes:["ArrowDown","KeyS"],name:"backward"},{codes:["ArrowLeft","KeyA"],name:"strafeLeft"},{codes:["ShiftLeft","ShiftRight"],name:"boost"},{codes:["KeyP"],name:"pointerLock"},{codes:["KeyV"],name:"viewMode"},{codes:["KeyB"],name:"debug"},{codes:["KeyF"],name:"fullscreen"},{codes:["Space"],name:"jump"},{codes:["ControlLeft","KeyC"],name:"crouch"}],this.keys.down={};for(const e of this.keys.map)this.keys.down[e.name]=!1;this.keys.findPerCode=e=>this.keys.map.find(t=>t.codes.includes(e)),window.addEventListener("keydown",e=>{const t=this.keys.findPerCode(e.code);t&&(this.trigger("keyDown",[t.name]),this.trigger(`${t.name}Down`),this.keys.down[t.name]=!0)}),window.addEventListener("keyup",e=>{const t=this.keys.findPerCode(e.code);t&&(this.trigger("keyUp",[t.name]),this.trigger(`${t.name}Up`),this.keys.down[t.name]=!1)})}setPointer(){this.pointer={},this.pointer.down=!1,this.pointer.deltaTemp={x:0,y:0},this.pointer.delta={x:0,y:0},this.pointer.normalise=(e,t)=>({x:e/this.viewport.width,y:t/this.viewport.height}),window.addEventListener("pointerdown",e=>{this.pointer.down=!0}),window.addEventListener("pointermove",e=>{const t=this.pointer.normalise(e.movementX,e.movementY);this.pointer.deltaTemp.x+=t.x,this.pointer.deltaTemp.y+=t.y}),window.addEventListener("pointerup",()=>{this.pointer.down=!1})}update(){this.pointer.delta.x=this.pointer.deltaTemp.x,this.pointer.delta.y=this.pointer.deltaTemp.y,this.pointer.deltaTemp.x=0,this.pointer.deltaTemp.y=0}}U.register("","Controls",Ah);const ps=class{constructor(e){if(ps.instance)return ps.instance;ps.instance=this,this.world=new U.World,this.day=new U.STATE.Day,this.sun=new U.STATE.Sun,this.player=new U.STATE.Player,this.terrains=new U.STATE.Terrains,this.chunks=new U.STATE.Chunks}update(){this.day.update(),this.sun.update(),this.player.update(),this.chunks.update()}};let us=ps;Ps(us,"instance");U.register("STATE","State",us);const ms=class{constructor(e){if(ms.instance)return ms.instance;ms.instance=this,this.world=new U.World,this.scene=new Ka,this.camera=new U.RENDER.Camera,this.renderer=new U.RENDER.Renderer,this.noises=new U.RENDER.Noises,this.sky=new U.RENDER.Sky,this.water=new U.RENDER.Water,this.terrains=new U.RENDER.Terrains,this.chunks=new U.RENDER.Chunks,this.player=new U.RENDER.Player,this.grass=new U.RENDER.Grass}resize(){this.camera.resize(),this.renderer.resize(),this.sky.resize(),this.terrains.resize()}update(){this.sky.update(),this.water.update(),this.terrains.update(),this.chunks.update(),this.player.update(),this.grass.update(),this.camera.update(),this.renderer.update()}destroy(){}};let ds=ms;Ps(ds,"instance");U.register("RENDER","Render",ds);const nA=[{name:"base",data:{},items:[]}];class xh{constructor(){this.world=new U.World,this.domElement=this.world.domElement,this.width=null,this.height=null,this.smallestSide=null,this.biggestSide=null,this.pixelRatio=null,this.clampedPixelRatio=null,this.setPointerLock(),this.setFullscreen(),this.update()}setPointerLock(){this.pointerLock={},this.pointerLock.active=!1,this.pointerLock.toggle=()=>{this.pointerLock.active?this.pointerLock.deactivate():this.pointerLock.activate()},this.pointerLock.activate=()=>{this.domElement.requestPointerLock()},this.pointerLock.deactivate=()=>{document.exitPointerLock()},document.addEventListener("pointerlockchange",()=>{this.pointerLock.active=!!document.pointerLockElement})}setFullscreen(){this.fullscreen={},this.fullscreen.active=!1,this.fullscreen.toggle=()=>{this.fullscreen.active?this.fullscreen.deactivate():this.fullscreen.activate()},this.fullscreen.activate=()=>{this.domElement.requestFullscreen()},this.fullscreen.deactivate=()=>{document.exitFullscreen()},document.addEventListener("fullscreenchange",()=>{this.fullscreen.active=!!document.fullscreenElement})}update(){this.width=window.innerWidth,this.height=window.innerHeight,this.smallestSide=this.width<this.height?this.width:this.height,this.biggestSide=this.width>this.height?this.width:this.height,this.pixelRatio=window.devicePixelRatio,this.clampedPixelRatio=Math.min(this.pixelRatio,2)}}U.register("","Viewport",xh);const gs=class{constructor(e={}){if(gs.instance)return gs.instance;if(gs.instance=this,this.domElement=e.domElement,!this.domElement){console.warn("Missing 'domElement' property");return}this.seed="p",this.time=new mh,this.debug=new gh,this.mathUtils=new ph,this.setViewport(),this.setResources(),this.setControls(),this.setState(),this.setRender(),window.addEventListener("resize",()=>{this.resize()}),this.update()}setViewport(){this.viewport=new xh}setResources(){this.resources=new vh(nA)}setControls(){this.controls=new Ah}setState(){this.state=new us}setRender(){this.render=new ds}update(){this.controls.update(),this.state.update(),this.render.update(),window.requestAnimationFrame(()=>{this.update()})}resize(){this.viewport.update(),this.render.resize()}destroy(){}};let fs=gs;Ps(fs,"instance");U.register("","World",fs);const iA=fs;var Gn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sA(a){if(a.__esModule)return a;var e=a.default;if(typeof e=="function"){var t=function n(){if(this instanceof n){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(a).forEach(function(n){var i=Object.getOwnPropertyDescriptor(a,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return a[n]}})}),t}var dr={},rA={get exports(){return dr},set exports(a){dr=a}};(function(a,e){(function(t,n){a.exports=n()})(Gn,function(){var t=function(){function n(f){return r.appendChild(f.dom),f}function i(f){for(var g=0;g<r.children.length;g++)r.children[g].style.display=g===f?"block":"none";s=f}var s=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(f){f.preventDefault(),i(++s%r.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,u=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:r,addPanel:n,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(h.update(f-o,200),f>l+1e3&&(u.update(1e3*c/(f-l),100),l=f,c=0,d)){var g=performance.memory;d.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return f},update:function(){o=this.end()},domElement:r,setMode:i}};return t.Panel=function(n,i,s){var r=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,d=3*c,f=2*c,g=3*c,m=15*c,p=74*c,v=30*c,S=document.createElement("canvas");S.width=u,S.height=h,S.style.cssText="width:80px;height:48px";var A=S.getContext("2d");return A.font="bold "+9*c+"px Helvetica,Arial,sans-serif",A.textBaseline="top",A.fillStyle=s,A.fillRect(0,0,u,h),A.fillStyle=i,A.fillText(n,d,f),A.fillRect(g,m,p,v),A.fillStyle=s,A.globalAlpha=.9,A.fillRect(g,m,p,v),{dom:S,update:function(x,w){r=Math.min(r,x),o=Math.max(o,x),A.fillStyle=s,A.globalAlpha=1,A.fillRect(0,0,u,m),A.fillStyle=i,A.fillText(l(x)+" "+n+" ("+l(r)+"-"+l(o)+")",d,f),A.drawImage(S,g+c,m,p-c,v,g,m,p-c,v),A.fillRect(g+p-c,m,c,v),A.fillStyle=s,A.globalAlpha=.9,A.fillRect(g+p-c,m,c,l((1-x/w)*v))}}},t})})(rA);class aA{constructor(){this.instance=new dr,this.instance.showPanel(3),this.active=!1,this.max=40,this.ignoreMaxed=!0,this.activate()}activate(){this.active=!0,document.body.appendChild(this.instance.dom)}deactivate(){this.active=!1,document.body.removeChild(this.instance.dom)}setRenderPanel(e){this.render={},this.render.context=e,this.render.extension=this.render.context.getExtension("EXT_disjoint_timer_query_webgl2"),this.render.panel=this.instance.addPanel(new dr.Panel("Render (ms)","#f8f","#212")),(!(typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext)||!this.render.extension)&&this.deactivate()}beforeRender(){if(!this.active)return;this.queryCreated=!1;let e=!1;if(this.render.query){e=this.render.context.getQueryParameter(this.render.query,this.render.context.QUERY_RESULT_AVAILABLE);const t=this.render.context.getParameter(this.render.extension.GPU_DISJOINT_EXT);if(e&&!t){const n=this.render.context.getQueryParameter(this.render.query,this.render.context.QUERY_RESULT),i=Math.min(n/1e3/1e3,this.max);i===this.max&&this.ignoreMaxed||this.render.panel.update(i,this.max)}}(e||!this.render.query)&&(this.queryCreated=!0,this.render.query=this.render.context.createQuery(),this.render.context.beginQuery(this.render.extension.TIME_ELAPSED_EXT,this.render.query))}afterRender(){this.active&&this.queryCreated&&this.render.context.endQuery(this.render.extension.TIME_ELAPSED_EXT)}update(){this.active&&this.instance.update()}destroy(){this.deactivate()}}U.register("DEBUG","Stats",aA);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class ln{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),ln.nextNameID=ln.nextNameID||0,this.$name.id=`lil-gui-name-${++ln.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class oA extends ln{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ia(a){let e,t;return(e=a.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const lA={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:Ia,toHexString:Ia},Ss={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},cA={isPrimitive:!1,match:Array.isArray,fromHexString(a,e,t=1){const n=Ss.fromHexString(a);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([a,e,t],n=1){n=255/n;const i=a*n<<16^e*n<<8^t*n<<0;return Ss.toHexString(i)}},hA={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,e,t=1){const n=Ss.fromHexString(a);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:a,g:e,b:t},n=1){n=255/n;const i=a*n<<16^e*n<<8^t*n<<0;return Ss.toHexString(i)}},uA=[lA,Ss,cA,hA];function dA(a){return uA.find(e=>e.match(a))}class fA extends ln{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=dA(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Ia(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ga extends ln{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class pA extends ln{constructor(e,t,n,i,s,r){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const o=r!==void 0;this.step(o?r:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},t=v=>{const S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+v),this.$input.value=this.getValue())},n=v=>{v.code==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),t(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),t(this._step*this._arrowKeyMultiplier(v)*-1))},i=v=>{this._inputFocused&&(v.preventDefault(),t(this._step*this._normalizeMouseWheel(v)))};let s=!1,r,o,l,c,u;const h=5,d=v=>{r=v.clientX,o=l=v.clientY,s=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",g)},f=v=>{if(s){const S=v.clientX-r,A=v.clientY-o;Math.abs(A)>h?(v.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>h&&g()}if(!s){const S=v.clientY-l;u-=S*this._step*this._arrowKeyMultiplier(v),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}l=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(v,S,A,x,w)=>(v-S)/(A-S)*(w-x)+x,t=v=>{const S=this.$slider.getBoundingClientRect();let A=e(v,S.left,S.right,this._min,this._max);this._snapClampSetValue(A)},n=v=>{this._setDraggingStyle(!0),t(v.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=v=>{t(v.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let r=!1,o,l;const c=v=>{v.preventDefault(),this._setDraggingStyle(!0),t(v.touches[0].clientX),r=!1},u=v=>{v.touches.length>1||(this._hasScrollBar?(o=v.touches[0].clientX,l=v.touches[0].clientY,r=!0):c(v),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=v=>{if(r){const S=v.touches[0].clientX-o,A=v.touches[0].clientY-l;Math.abs(S)>Math.abs(A)?c(v):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else v.preventDefault(),t(v.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let m;const p=v=>{if(Math.abs(v.deltaX)<Math.abs(v.deltaY)&&this._hasScrollBar)return;v.preventDefault();const A=this._normalizeMouseWheel(v)*this._step;this._snapClampSetValue(this.getValue()+A),this.$input.value=this.getValue(),clearTimeout(m),m=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class mA extends ln{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const r=document.createElement("option");r.innerHTML=s,this.$select.appendChild(r)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class gA extends ln{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const vA=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
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
  .lil-gui.allow-touch-styles {
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
.lil-gui.force-touch-styles {
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
.lil-gui .controller.boolean .widget {
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
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
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
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
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

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
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
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
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
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function AA(a){const e=document.createElement("style");e.innerHTML=a;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let cc=!1;class po{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",injectStyles:r=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),o&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!cc&&r&&(AA(vA),cc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,s){if(Object(n)===n)return new mA(this,e,t,n);const r=e[t];switch(typeof r){case"number":return new pA(this,e,t,n,i,s);case"boolean":return new oA(this,e,t);case"string":return new gA(this,e,t);case"function":return new ga(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,r)}addColor(e,t,n=1){return new fA(this,e,t,n)}addFolder(e){return new po({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof ga||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ga)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class xA{constructor(){this.instance=new po({width:320,title:"debug"});const e=window.document.styleSheets[0];e.insertRule(`
            .lil-gui .lil-gui > .children
            {
                border: none;
                margin-left: var(--folder-indent);
                border-left: 2px solid var(--widget-color);
            }
        `,e.cssRules.length),e.insertRule(`
            .lil-gui.root > .children > .lil-gui > .title
            {
                border-width: 1px 0 0 0;
            }
        `,e.cssRules.length),this.tree={},this.tree.folder=this.instance,this.tree.children={}}getFolder(e){const t=e.split("/");let n=this.tree;for(const i of t){let s=n.children[i];s||(s={},s.folder=n.folder.addFolder(i),s.folder.close(),s.children={}),n.children[i]=s,n=s}return n.folder}}U.register("DEBUG","UI",xA);class yA{constructor(e){this.world=new U.World,this.state=new U.STATE.State,this.render=new U.RENDER.Render,this.scene=this.render.scene,this.viewport=this.world.viewport,this.setInstance()}setInstance(){this.instance=new St(45,this.viewport.width/this.viewport.height,.1,5e3),this.instance.rotation.reorder("YXZ"),this.scene.add(this.instance)}resize(){this.instance.aspect=this.viewport.width/this.viewport.height,this.instance.updateProjectionMatrix()}update(){const e=this.state.player;this.instance.position.set(e.view.position[0],e.view.position[1],e.view.position[2]),this.instance.quaternion.set(e.view.quaternion[0],e.view.quaternion[1],e.view.quaternion[2],e.view.quaternion[3])}destroy(){}}U.register("RENDER","Camera",yA);let SA=class{constructor(e){this.world=new U.World,this.state=new U.STATE.State,this.scene=this.world.scene,this.chunkState=e,this.helper=new U.RENDER.ChunkHelper(this.chunkState)}update(){}destroy(){}};U.register("RENDER","Chunk",SA);const wA="data:image/png;base64,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",MA=a=>{typeof a=="number"&&(a=a.toString(10)[0]);const e=bA.indexOf(a);if(e===-1)return[0,0];const t=e%uc,n=Math.floor(e/uc);return[t,n]},hc=(a,e=4)=>{typeof a=="number"&&(a=Math.floor(a).toString(10)),a.length>e&&(a=a.slice(0,e));const t=a.length;a.length<e&&(a=a.padEnd(e," "));const n=[...a].map(MA);return{count:t,offsets:n}},bA="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz #@&$%?!+-_=*/\\|[](){}<>.;:,×",_A=4096,TA=256,uc=64,dc=64,fc=120,EA=wA;var PA=`precision highp float;
#define GLSLIFY 1

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float z_offset;

attribute vec3 position;

attribute float char_count;
varying float v_char_count;

attribute float size;

attribute vec3 color;
varying vec3 v_color;

// REPLACE-DECLARE:
attribute vec2 char_offset_X;
varying vec2 v_char_offset_X;
// REPLACE-END

void main() {

  v_char_count = char_count;
  v_color = color;
  
  // REPLACE-COMPUTE:
  v_char_offset_X = char_offset_X;
  // REPLACE-END
  
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
  gl_Position.z += z_offset;
	gl_PointSize = size * 2000.0 / -mvPosition.z;
}`,CA=`precision highp float;
#define GLSLIFY 1

// #define MULTIPLY

uniform sampler2D atlas_texture;
uniform float char_max;
uniform vec2 char_size;
uniform float char_aspect;
uniform float opacity;

varying float v_char_count;
varying vec3 v_color;

// REPLACE-DECLARE:
varying vec2 v_char_offset_X;
// REPLACE-END

vec2 get_uv_coords(in vec2 position, in vec2 offset, float index) {
  float x = 
    (position.x * char_max 
    + offset.x 
    - index) * char_size.x;
  float y = 1.0 - (
    position.y 
    + offset.y
    ) * char_size.y;
  return vec2(x, y);
}

vec4 get_texel(in vec2 position, in vec2 offset, float index) {
#ifdef MULTIPLY
  float a = texture2D(atlas_texture, get_uv_coords(position, offset, index)).a;
  return vec4(mix(vec3(1.0), v_color, opacity * a), 1.0);
#else
  return vec4(v_color, opacity * texture2D(atlas_texture, get_uv_coords(position, offset, index)).a);
#endif
}

void main() {

  vec2 position = gl_PointCoord;

  position.x += -(char_max - v_char_count) / char_max / 2.0;

  position.y *= char_max * char_aspect;
  position.y += (1.0 - char_max * char_aspect) / 2.0;

  bool x_out = position.x < 0.0 || position.x > v_char_count / char_max;
  bool y_out = position.y < 0.0 || position.y > 1.0;

  if (x_out || y_out) {
    // gl_FragColor = vec4(1.0);
    // return;
    discard;
  }

  // REPLACE-COMPUTE:
  if (position.x < 1.0 / char_max) {
    gl_FragColor = get_texel(position, v_char_offset_X, 0.0);
  } else if (position.x < 2.0 / char_max) {
    gl_FragColor = get_texel(position, v_char_offset_X, 1.0);
  } else {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
  // REPLACE-END
}
`;const va=a=>{const e=new Array(a);for(let t=0;t<a;t++)e[t]=t;return e},_i="  ",RA=a=>`
attribute vec2 char_offset_${a};
varying vec2 v_char_offset_${a};
`.slice(1),LA=a=>`
${_i}v_char_offset_${a} = char_offset_${a};
`.slice(1),zA=a=>`
varying vec2 v_char_offset_${a};
`.slice(1),DA=a=>{const e=va(a).map(RA).join(""),t=va(a).map(LA).join(""),n=PA.replace(/ *\/\/ REPLACE-DECLARE[\s\S]*?REPLACE-END/,e).replace(/ *\/\/ REPLACE-COMPUTE[\s\S]*?REPLACE-END/,t),i=va(a).map(zA).join(""),s=new Array;for(let l=0;l<a;l++)s.push(l===0?_i:`${_i}} else `),s.push(l<a-1?`if (position.x < ${l+1}.0 / char_max) `:""),s.push(`{
`),s.push(`${_i}${_i}gl_FragColor = get_texel(position, v_char_offset_${l}, ${l}.0);
`);s.push(`${_i}}
`);const r=s.join(""),o=CA.replace(/ *\/\/ REPLACE-DECLARE[\s\S]*?REPLACE-END/,i).replace(/ *\/\/ REPLACE-COMPUTE[\s\S]*?REPLACE-END/,r);return[n,o]},mo=document.createElement("img");mo.src=EA;const yh=new Ke(mo);mo.onload=()=>yh.needsUpdate=!0;function kA(a,e,t){const[n,i]=DA(a),s={atlas_texture:{value:yh},opacity:{value:1},z_offset:{value:t},char_max:{value:a},char_size:{value:new te(dc/_A,fc/TA)},char_aspect:{value:dc/fc}},r={};e===ya&&(r.MULTIPLY=!0);const o=new u0({uniforms:s,defines:r,vertexShader:n,fragmentShader:i,blending:e,transparent:e===ni,vertexColors:!0,depthWrite:!1});return Object.defineProperty(o,"opacity",{get:()=>o.uniforms.opacity.value,set:l=>o.uniforms.opacity.value=l}),o}const Aa=12,pc={position:{x:0,y:0,z:0},color:"white",size:1,text:"foo"};class mc extends to{constructor({charMax:e=4,blending:t=rr,zOffset:n=-.01}={}){e>Aa&&(console.warn(`max chars is ${Aa}`),e=Aa);const i=new Qe;i.setAttribute("position",new Ge(new Float32Array(0),3)),i.setAttribute("color",new Ge(new Float32Array(0),3)),i.setAttribute("size",new Ge(new Float32Array(0),1)),i.setAttribute("char_count",new Ge(new Float32Array(0),1));for(let r=0;r<e;r++)i.setAttribute(`char_offset_${r}`,new Ge(new Float32Array(0),2));const s=kA(e,t,n);super(i,s),this.charMax=e}push(e,t){const n=this.geometry,i=n.getAttribute(e),s=new Float32Array(i.array.length+t.length);s.set(i.array,0),s.set(t,i.array.length),n.setAttribute(e,new Ge(s,i.itemSize))}pushFill(e,t,n){const i=this.geometry,s=i.getAttribute(e),r=new Float32Array(s.array.length+n);r.set(s.array,0),r.fill(t,s.array.length),i.setAttribute(e,new Ge(r,s.itemSize))}display(e=pc){if(Array.isArray(e)){e.forEach(h=>this.display(h));return}e=Object.assign(Object.assign({},pc),e);const{x:t,y:n,z:i}=e.position;this.push("position",[t,n,i]);const{r:s,g:r,b:o}=new le(e.color);this.push("color",[s,r,o]),this.push("size",[e.size]);const{charMax:l}=this,{count:c,offsets:u}=hc(e.text,l);this.push("char_count",[c]);for(let h=0;h<l;h++)this.push(`char_offset_${h}`,u[h])}displayVertices(e,t={}){var n;if(e instanceof Qe)return this.displayVertices(e.getAttribute("position").array,t);const{color:i="white",size:s=1,format:r=void 0}=t,o=e instanceof Float32Array,l=typeof i=="function"?v=>new le(i(v)):(()=>{const v=new le(i);return()=>v})(),c=typeof s=="function"?v=>s(v):()=>s,u=o?e.length/3:e.length,{charMax:h}=this,d=o?e:new Float32Array(u*3),f=new Float32Array(u*3),g=new Float32Array(u),m=new Float32Array(u),p=new Array(h);for(let v=0;v<h;v++)p[v]=new Float32Array(u*2);if(o===!1)for(let v=0;v<u;v++){const{x:S,y:A,z:x}=e[v];d[v*3+0]=S,d[v*3+1]=A,d[v*3+2]=x}for(let v=0;v<u;v++){const S=l(v);f[v*3+0]=S.r,f[v*3+1]=S.g,f[v*3+2]=S.b,g[v]=c(v);const A=(n=r==null?void 0:r(v))!==null&&n!==void 0?n:v.toString(10),{count:x,offsets:w}=hc(A,h);m[v]=x;for(let T=0;T<h;T++){const[P,y]=w[T];p[T][v*2+0]=P,p[T][v*2+1]=y}}this.push("position",d),this.push("color",f),this.push("size",g),this.push("char_count",m);for(let v=0;v<h;v++)this.push(`char_offset_${v}`,p[v])}displayFaces(e,{color:t="white",size:n=1,format:i=void 0}={}){if(e.isBufferGeometry){e=e;const s=e.index.array,r=e.getAttribute("position").array,o=s.length/3,l=new Float32Array(o*3);for(let c=0;c<o;c++){const u=s[c*3+0],h=r[u*3+0],d=r[u*3+1],f=r[u*3+2],g=s[c*3+1],m=r[g*3+0],p=r[g*3+1],v=r[g*3+2],S=s[c*3+2],A=r[S*3+0],x=r[S*3+1],w=r[S*3+2];l[c*3+0]=(h+m+A)/3,l[c*3+1]=(d+p+x)/3,l[c*3+2]=(f+v+w)/3}this.displayVertices(l,{color:t,size:n,format:i})}}get zOffset(){return this.material.uniforms.z_offset.value}set zOffset(e){const t=this.material;t.uniforms.z_offset.value!==e&&(t.uniforms.z_offset.value=e,t.uniformsNeedUpdate=!0)}get z_offset(){return this.zOffset}set z_offset(e){this.zOffset=e}get opacity(){return this.material.opacity}set opacity(e){this.material.opacity=e}}class IA{constructor(e){this.world=new U.World,this.state=new U.STATE.State,this.render=new U.RENDER.Render,this.scene=this.render.scene,this.chunkState=e,this.areaVisible=!0,this.idVisible=!0,this.neighboursIdVisible=!0}setGroup(){this.group=new Xt,this.group.position.x=this.chunkState.x,this.group.position.z=this.chunkState.z,this.scene.add(this.group)}destroyGroup(){this.group&&this.scene.remove(this.group)}setArea(){this.destroyArea(),this.areaVisible&&(this.area=new We(new Un(this.chunkState.size,this.chunkState.size),new Zt({wireframe:!0})),this.area.geometry.rotateX(Math.PI*.5),this.area.material.color.multiplyScalar((this.chunkState.depth+1)/this.state.chunks.maxDepth),this.group.add(this.area))}destroyArea(){this.area&&(this.area.geometry.dispose(),this.area.material.dispose(),this.group.remove())}setId(){this.destroyId(),this.idVisible&&(console.log(this.chunkState),this.id=new mc({charMax:4}),this.id.material.depthTest=!1,this.id.material.onBeforeRender=()=>{},this.id.material.onBuild=()=>{},this.id.display({text:this.chunkState.id,color:"#ffc800",size:(this.state.chunks.maxDepth-this.chunkState.depth+1)*6,position:new C(0,(this.state.chunks.maxDepth-this.chunkState.depth)*10,0)}),this.group.add(this.id))}destroyId(){this.id&&(this.id.geometry.dispose(),this.id.material.dispose(),this.group.remove(this.id))}setNeighboursIds(){if(this.destroyNeighboursIds(),!this.neighboursIdVisible||this.chunkState.neighbours.size===0)return;this.neighboursIds=new mc({charMax:4}),this.neighboursIds.material.depthTest=!1,this.neighboursIds.material.onBeforeRender=()=>{},this.neighboursIds.material.onBuild=()=>{},this.group.add(this.neighboursIds);const e=this.chunkState.neighbours.get("n"),t=this.chunkState.neighbours.get("e"),n=this.chunkState.neighbours.get("s"),i=this.chunkState.neighbours.get("w"),s=(this.state.chunks.maxDepth-this.chunkState.depth+1)*6,r=(this.state.chunks.maxDepth-this.chunkState.depth)*10,o=e?e.id:"";this.neighboursIds.display({text:o,color:"#00bfff",size:s,position:new C(0,r,-this.chunkState.quarterSize)});const l=t?t.id:"";this.neighboursIds.display({text:l,color:"#00bfff",size:s,position:new C(this.chunkState.quarterSize,r,0)});const c=n?n.id:"";this.neighboursIds.display({text:c,color:"#00bfff",size:s,position:new C(0,r,this.chunkState.quarterSize)});const u=i?i.id:"";this.neighboursIds.display({text:u,color:"#00bfff",size:s,position:new C(-this.chunkState.quarterSize,r,0)})}destroyNeighboursIds(){this.neighboursIds&&(this.neighboursIds.geometry.dispose(),this.neighboursIds.material.dispose(),this.group.remove(this.neighboursIds))}destroy(){this.destroyGroup(),this.destroyArea(),this.destroyId(),this.destroyNeighboursIds()}}U.register("RENDER","ChunkHelper",IA);let NA=class{constructor(){this.world=new U.World,this.state=new U.STATE.State,this.state.chunks.on("create",e=>{const t=new U.RENDER.Chunk(e);e.on("destroy",()=>{t.destroy()})})}update(){}};U.register("RENDER","Chunks",NA);let FA=class{constructor(){this.world=new U.World,this.render=new U.RENDER.Render,this.state=new U.STATE.State,this.time=this.world.time,this.scene=this.render.scene,this.noises=this.render.noises,this.details=200,this.size=this.state.chunks.minSize,this.count=this.details*this.details,this.fragmentSize=this.size/this.details,this.bladeWidthRatio=1.5,this.bladeHeightRatio=4,this.bladeHeightRandomness=.5,this.positionRandomness=.5,this.noiseTexture=this.noises.create(128,128),this.setGeometry(),this.setMaterial(),this.setMesh()}setGeometry(){const e=new Float32Array(this.count*3*2),t=new Float32Array(this.count*3*3);for(let n=0;n<this.details;n++){const i=(n/this.details-.5)*this.size+this.fragmentSize*.5;for(let s=0;s<this.details;s++){const r=(s/this.details-.5)*this.size+this.fragmentSize*.5,o=(n*this.details+s)*9,l=(n*this.details+s)*6,c=i+(Math.random()-.5)*this.fragmentSize*this.positionRandomness,u=r+(Math.random()-.5)*this.fragmentSize*this.positionRandomness;e[l]=c,e[l+1]=u,e[l+2]=c,e[l+3]=u,e[l+4]=c,e[l+5]=u;const d=this.fragmentSize*this.bladeWidthRatio*.5,f=this.fragmentSize*this.bladeHeightRatio*(1-this.bladeHeightRandomness+Math.random()*this.bladeHeightRandomness);t[o]=-d,t[o+1]=0,t[o+2]=0,t[o+3]=0,t[o+4]=f,t[o+5]=0,t[o+6]=d,t[o+7]=0,t[o+8]=0}}this.geometry=new Qe,this.geometry.setAttribute("center",new Ie(e,2)),this.geometry.setAttribute("position",new Ie(t,3))}setMaterial(){const e=this.state.chunks,t=this.state.terrains;this.material=new U.RENDER.MATERIALS.Grass,this.material.uniforms.uTime.value=0,this.material.uniforms.uGrassDistance.value=this.size,this.material.uniforms.uPlayerPosition.value=new C,this.material.uniforms.uTerrainSize.value=e.minSize,this.material.uniforms.uTerrainTextureSize.value=t.segments,this.material.uniforms.uTerrainATexture.value=null,this.material.uniforms.uTerrainAOffset.value=new te,this.material.uniforms.uTerrainBTexture.value=null,this.material.uniforms.uTerrainBOffset.value=new te,this.material.uniforms.uTerrainCTexture.value=null,this.material.uniforms.uTerrainCOffset.value=new te,this.material.uniforms.uTerrainDTexture.value=null,this.material.uniforms.uTerrainDOffset.value=new te,this.material.uniforms.uNoiseTexture.value=this.noiseTexture,this.material.uniforms.uFresnelOffset.value=0,this.material.uniforms.uFresnelScale.value=.5,this.material.uniforms.uFresnelPower.value=2,this.material.uniforms.uSunPosition.value=new C(-.5,-.5,-.5)}setMesh(){this.mesh=new We(this.geometry,this.material),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}update(){const t=this.state.player.position.current,n=this.state.chunks,i=this.state.sun;this.material.uniforms.uTime.value=this.time.elapsed,this.material.uniforms.uSunPosition.value.set(i.position.x,i.position.y,i.position.z),this.mesh.position.set(t[0],0,t[2]),this.material.uniforms.uPlayerPosition.value.set(t[0],t[1],t[2]);const s=n.getDeepestChunkForPosition(t[0],t[2]);if(s&&s.terrain&&s.terrain.renderInstance.texture){this.material.uniforms.uTerrainATexture.value=s.terrain.renderInstance.texture,this.material.uniforms.uTerrainAOffset.value.set(s.x-s.size*.5,s.z-s.size*.5);const r=(t[0]-s.x+s.size*.5)/s.size,o=(t[2]-s.z+s.size*.5)/s.size,l=s.neighbours.get(r<.5?"w":"e");l&&l.terrain&&l.terrain.renderInstance.texture&&(this.material.uniforms.uTerrainBTexture.value=l.terrain.renderInstance.texture,this.material.uniforms.uTerrainBOffset.value.set(l.x-l.size*.5,l.z-l.size*.5));const c=s.neighbours.get(o<.5?"n":"s");c&&c.terrain&&c.terrain.renderInstance.texture&&(this.material.uniforms.uTerrainCTexture.value=c.terrain.renderInstance.texture,this.material.uniforms.uTerrainCOffset.value.set(c.x-c.size*.5,c.z-c.size*.5));const u=l.neighbours.get(o<.5?"n":"s");u&&u.terrain&&u.terrain.renderInstance.texture&&(this.material.uniforms.uTerrainDTexture.value=u.terrain.renderInstance.texture,this.material.uniforms.uTerrainDOffset.value.set(u.x-u.size*.5,u.z-u.size*.5))}}};U.register("RENDER","Grass",FA);let OA=class{constructor(){this.world=new U.World,this.render=new U.RENDER.Render,this.renderer=this.render.renderer,this.scene=this.render.scene,this.setCustomRender(),this.setMaterial(),this.setPlane()}setCustomRender(){this.customRender={},this.customRender.scene=new Ka,this.customRender.camera=new Vi(-1,1,1,-1,.1,10)}setMaterial(){this.material=new U.RENDER.MATERIALS.Noises}setPlane(){this.plane=new We(new Un(2,2),this.material),this.plane.frustumCulled=!1,this.customRender.scene.add(this.plane)}setDebugPlane(){this.debugPlane={},this.debugPlane.geometry=new Un(1,1),this.debugPlane.material=new Zt;const e=new We(this.debugPlane.geometry,this.debugPlane.material);e.position.y=5+1,e.position.x=-1,e.scale.set(2,2,2);const t=new We(this.debugPlane.geometry,this.debugPlane.material);t.position.y=5+1,t.position.x=1,t.scale.set(2,2,2);const n=new We(this.debugPlane.geometry,this.debugPlane.material);n.position.y=5-1,n.position.x=-1,n.scale.set(2,2,2);const i=new We(this.debugPlane.geometry,this.debugPlane.material);i.position.y=5-1,i.position.x=1,i.scale.set(2,2,2),window.requestAnimationFrame(()=>{this.scene.add(e)})}create(e,t){const n=new Lt(e,t,{generateMipmaps:!1,wrapS:cn,wrapT:cn});this.renderer.instance.setRenderTarget(n),this.renderer.instance.render(this.customRender.scene,this.customRender.camera),this.renderer.instance.setRenderTarget(null);const i=n.texture;return this.debugPlane&&(this.debugPlane.material.map=i),i}};U.register("RENDER","Noises",OA);let BA=class{constructor(){this.world=new U.World,this.state=new U.STATE.State,this.render=new U.RENDER.Render,this.scene=this.render.scene,this.setGroup(),this.setHelper(),this.setDebug()}setGroup(){this.group=new Xt,this.scene.add(this.group)}setHelper(){this.helper=new We,this.helper.material=new U.RENDER.MATERIALS.Player,this.helper.material.uniforms.uColor.value=new le("#fff8d6"),this.helper.material.uniforms.uSunPosition.value=new C(-.5,-.5,-.5),this.helper.geometry=new ao(.5,.8,3,16),this.helper.geometry.translate(0,.9,0),this.group.add(this.helper)}setDebug(){const e=this.world.debug;if(!e.active)return;e.ui.getFolder("render/player").addColor(this.helper.material.uniforms.uColor,"value")}update(){const e=this.state.player,t=this.state.sun;this.group.position.set(e.position.current[0],e.position.current[1],e.position.current[2]),this.helper.rotation.y=e.rotation,this.helper.material.uniforms.uSunPosition.value.set(t.position.x,t.position.y,t.position.z)}};U.register("RENDER","Player",BA);const Sh={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Es{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const UA=new Vi(-1,1,1,-1,0,1),go=new Qe;go.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3));go.setAttribute("uv",new Ie([0,2,0,0,2,0],2));class wh{constructor(e){this._mesh=new We(go,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,UA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class HA extends Es{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cr.clone(e.uniforms),this.material=new tt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new wh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class gc extends Es{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class VA extends Es{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class GA{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new te);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Lt(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new HA(Sh),this.clock=new R0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}gc!==void 0&&(r instanceof gc?n=!0:r instanceof VA&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class JA extends Es{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new le}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==void 0&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=r),e.autoClear=i}}const WA={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Oi extends Es{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new le(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Lt(s,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Lt(s,r);d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Lt(s,r);f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}const o=WA;this.highPassUniforms=cr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new te(s,r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Sh;this.copyUniforms=cr.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new tt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:rr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new le,this.oldClearAlpha=1,this.basic=new Zt,this.fsQuad=new wh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new te(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Oi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Oi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){return new tt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Oi.BlurDirectionX=new te(1,0);Oi.BlurDirectionY=new te(0,1);class ZA{constructor(e={}){this.world=new U.World,this.render=new U.RENDER.Render,this.scene=this.render.scene,this.domElement=this.world.domElement,this.viewport=this.world.viewport,this.debug=this.world.debug,this.time=this.world.time,this.camera=this.render.camera,this.usePostprocess=!1,this.setInstance(),this.setPostProcess(),this.setDebug()}setInstance(){this.clearColor="#222222",this.instance=new Hc({alpha:!1,antialias:!0}),this.instance.sortObjects=!1,this.instance.domElement.style.position="absolute",this.instance.domElement.style.top=0,this.instance.domElement.style.left=0,this.instance.domElement.style.width="100%",this.instance.domElement.style.height="100%",this.instance.setClearColor(this.clearColor,1),this.instance.setSize(this.viewport.width,this.viewport.height),this.instance.setPixelRatio(this.viewport.clampedPixelRatio),this.context=this.instance.getContext(),this.domElement.appendChild(this.instance.domElement),this.debug.stats&&this.debug.stats.setRenderPanel(this.context)}setPostProcess(){this.postProcess={},this.postProcess.renderPass=new JA(this.scene,this.camera.instance),this.postProcess.unrealBloomPass=new Oi(new te(this.viewport.width,this.viewport.height),.8,.315,0),this.postProcess.unrealBloomPass.enabled=!0,this.postProcess.unrealBloomPass.tintColor={},this.postProcess.unrealBloomPass.tintColor.value="#7f00ff",this.postProcess.unrealBloomPass.tintColor.instance=new le(this.postProcess.unrealBloomPass.tintColor.value),this.postProcess.unrealBloomPass.compositeMaterial.uniforms.uTintColor={value:this.postProcess.unrealBloomPass.tintColor.instance},this.postProcess.unrealBloomPass.compositeMaterial.uniforms.uTintStrength={value:.15},this.postProcess.unrealBloomPass.compositeMaterial.fragmentShader=`
varying vec2 vUv;
uniform sampler2D blurTexture1;
uniform sampler2D blurTexture2;
uniform sampler2D blurTexture3;
uniform sampler2D blurTexture4;
uniform sampler2D blurTexture5;
uniform sampler2D dirtTexture;
uniform float bloomStrength;
uniform float bloomRadius;
uniform float bloomFactors[NUM_MIPS];
uniform vec3 bloomTintColors[NUM_MIPS];
uniform vec3 uTintColor;
uniform float uTintStrength;

float lerpBloomFactor(const in float factor) {
    float mirrorFactor = 1.2 - factor;
    return mix(factor, mirrorFactor, bloomRadius);
}

void main() {
    vec4 color = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
        lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
        lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
        lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
        lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );

    color.rgb = mix(color.rgb, uTintColor, uTintStrength);
    gl_FragColor = color;
}
        `,this.renderTarget=new Lt(this.viewport.width,this.viewport.height,{generateMipmaps:!1,minFilter:$e,magFilter:$e,format:void 0,encoding:Le,samples:8}),this.postProcess.composer=new GA(this.instance,this.renderTarget),this.postProcess.composer.setSize(this.viewport.width,this.viewport.height),this.postProcess.composer.setPixelRatio(this.viewport.clampedPixelRatio),this.postProcess.composer.addPass(this.postProcess.renderPass),this.postProcess.composer.addPass(this.postProcess.unrealBloomPass)}resize(){this.instance.setSize(this.viewport.width,this.viewport.height),this.instance.setPixelRatio(this.viewport.clampedPixelRatio),this.postProcess.composer.setSize(this.viewport.width,this.viewport.height),this.postProcess.composer.setPixelRatio(this.viewport.clampedPixelRatio)}update(){this.debug.stats&&this.debug.stats.beforeRender(),this.usePostprocess?this.postProcess.composer.render():this.instance.render(this.scene,this.camera.instance),this.debug.stats&&this.debug.stats.afterRender()}destroy(){this.instance.renderLists.dispose(),this.instance.dispose(),this.renderTarget.dispose(),this.postProcess.composer.renderTarget1.dispose(),this.postProcess.composer.renderTarget2.dispose()}setDebug(){}}U.register("RENDER","Renderer",ZA);class XA{constructor(){this.world=new U.World,this.render=new U.RENDER.Render,this.viewport=this.world.viewport,this.renderer=this.render.renderer,this.scene=this.render.scene,this.outerDistance=1e3,this.group=new Xt,this.scene.add(this.group),this.setCustomRender(),this.setBackground(),this.setSphere(),this.setSun(),this.setStars(),this.setDebug()}setCustomRender(){this.customRender={},this.customRender.scene=new Ka,this.customRender.camera=this.render.camera.instance.clone(),this.customRender.resolutionRatio=.1,this.customRender.renderTarget=new Lt(this.viewport.width*this.customRender.resolutionRatio,this.viewport.height*this.customRender.resolutionRatio,{generateMipmaps:!1}),this.customRender.texture=this.customRender.renderTarget.texture}setBackground(){this.background={},this.background.geometry=new Un(2,2),this.background.material=new U.RENDER.MATERIALS.SkyBackground,this.background.material.uniforms.uTexture.value=this.customRender.renderTarget.texture,this.background.material.depthTest=!1,this.background.material.depthWrite=!1,this.background.mesh=new We(this.background.geometry,this.background.material),this.background.mesh.frustumCulled=!1,this.group.add(this.background.mesh)}setSphere(){this.sphere={},this.sphere.widthSegments=128,this.sphere.heightSegments=64,this.sphere.update=()=>{const e=new lo(10,this.sphere.widthSegments,this.sphere.heightSegments);this.sphere.geometry&&(this.sphere.geometry.dispose(),this.sphere.mesh.geometry=this.sphere.geometry),this.sphere.geometry=e},this.sphere.material=new U.RENDER.MATERIALS.SkySphere,this.sphere.material.uniforms.uColorDayLow.value.set("#f0fff9"),this.sphere.material.uniforms.uColorDayHigh.value.set("#2e89ff"),this.sphere.material.uniforms.uColorNightLow.value.set("#004794"),this.sphere.material.uniforms.uColorNightHigh.value.set("#001624"),this.sphere.material.uniforms.uColorSun.value.set("#ff531a"),this.sphere.material.uniforms.uColorDawn.value.set("#ff1900"),this.sphere.material.uniforms.uDayProgress.value=0,this.sphere.material.side=Rt,this.sphere.update(),this.sphere.mesh=new We(this.sphere.geometry,this.sphere.material),this.customRender.scene.add(this.sphere.mesh)}setSun(){this.sun={},this.sun.distance=this.outerDistance-50;const e=new oo(.02*this.sun.distance,32),t=new Zt({color:16777215});this.sun.mesh=new We(e,t),this.group.add(this.sun.mesh)}setStars(){this.stars={},this.stars.count=1e3,this.stars.distance=this.outerDistance,this.stars.update=()=>{const e=new Float32Array(this.stars.count*3),t=new Float32Array(this.stars.count),n=new Float32Array(this.stars.count*3);for(let s=0;s<this.stars.count;s++){const r=s*3,o=new C;o.setFromSphericalCoords(this.stars.distance,Math.acos(Math.random()),2*Math.PI*Math.random()),e[r]=o.x,e[r+1]=o.y,e[r+2]=o.z,t[s]=Math.pow(Math.random()*.9,10)+.1;const l=new le;l.setHSL(Math.random(),1,.5+Math.random()*.5),n[r]=l.r,n[r+1]=l.g,n[r+2]=l.b}const i=new Qe;i.setAttribute("position",new Ie(e,3)),i.setAttribute("aSize",new Ie(t,1)),i.setAttribute("aColor",new Ie(n,3)),this.stars.geometry&&(this.stars.geometry.dispose(),this.stars.points.geometry=this.stars.geometry),this.stars.geometry=i},this.stars.update(),this.stars.material=new U.RENDER.MATERIALS.Stars,this.stars.material.uniforms.uHeightFragments.value=this.viewport.height*this.viewport.clampedPixelRatio,this.stars.points=new to(this.stars.geometry,this.stars.material),this.group.add(this.stars.points)}setDebug(){const e=this.world.debug;if(!e.active)return;const t=e.ui.getFolder("render/sky/sphere/geometry");t.add(this.sphere,"widthSegments").min(4).max(512).step(1).name("widthSegments").onChange(()=>{this.sphere.update()}),t.add(this.sphere,"heightSegments").min(4).max(512).step(1).name("heightSegments").onChange(()=>{this.sphere.update()});const n=e.ui.getFolder("render/sky/sphere/material");n.add(this.sphere.material.uniforms.uAtmosphereElevation,"value").min(0).max(5).step(.01).name("uAtmosphereElevation"),n.add(this.sphere.material.uniforms.uAtmospherePower,"value").min(0).max(20).step(1).name("uAtmospherePower"),n.addColor(this.sphere.material.uniforms.uColorDayLow,"value").name("uColorDayLow"),n.addColor(this.sphere.material.uniforms.uColorDayHigh,"value").name("uColorDayHigh"),n.addColor(this.sphere.material.uniforms.uColorNightLow,"value").name("uColorNightLow"),n.addColor(this.sphere.material.uniforms.uColorNightHigh,"value").name("uColorNightHigh"),n.add(this.sphere.material.uniforms.uDawnAngleAmplitude,"value").min(0).max(1).step(.001).name("uDawnAngleAmplitude"),n.add(this.sphere.material.uniforms.uDawnElevationAmplitude,"value").min(0).max(1).step(.01).name("uDawnElevationAmplitude"),n.addColor(this.sphere.material.uniforms.uColorDawn,"value").name("uColorDawn"),n.add(this.sphere.material.uniforms.uSunAmplitude,"value").min(0).max(3).step(.01).name("uSunAmplitude"),n.add(this.sphere.material.uniforms.uSunMultiplier,"value").min(0).max(1).step(.01).name("uSunMultiplier"),n.addColor(this.sphere.material.uniforms.uColorSun,"value").name("uColorSun");const i=e.ui.getFolder("render/sky/stars");i.add(this.stars,"count").min(100).max(5e4).step(100).name("count").onChange(()=>{this.stars.update()}),i.add(this.stars.material.uniforms.uSize,"value").min(0).max(1).step(1e-4).name("uSize"),i.add(this.stars.material.uniforms.uBrightness,"value").min(0).max(1).step(.001).name("uBrightness")}update(){const e=this.world.state.day,t=this.world.state.sun,n=this.world.state.player;this.group.position.set(n.position.current[0],n.position.current[1],n.position.current[2]),this.sphere.material.uniforms.uSunPosition.value.set(t.position.x,t.position.y,t.position.z),this.sphere.material.uniforms.uDayProgress.value=e.progress,this.sun.mesh.position.set(t.position.x*this.sun.distance,t.position.y*this.sun.distance,t.position.z*this.sun.distance),this.sun.mesh.lookAt(n.position.current[0],n.position.current[1],n.position.current[2]),this.stars.material.uniforms.uSunPosition.value.set(t.position.x,t.position.y,t.position.z),this.stars.material.uniforms.uHeightFragments.value=this.viewport.height*this.viewport.clampedPixelRatio,this.customRender.camera.quaternion.copy(this.render.camera.instance.quaternion),this.renderer.instance.setRenderTarget(this.customRender.renderTarget),this.renderer.instance.render(this.customRender.scene,this.customRender.camera),this.renderer.instance.setRenderTarget(null)}resize(){this.customRender.renderTarget.width=this.viewport.width*this.customRender.resolutionRatio,this.customRender.renderTarget.height=this.viewport.height*this.customRender.resolutionRatio}}U.register("RENDER","Sky",XA);let jA=class{constructor(e,t){this.world=new U.World,this.state=new U.STATE.State,this.render=new U.RENDER.Render,this.scene=this.render.scene,this.terrains=e,this.terrainState=t,this.terrainState.renderInstance=this,this.created=!1,this.terrainState.on("ready",()=>{this.create()})}create(){const e=this.state.terrains;this.created?(this.geometry.dispose(),this.geometry=new Qe,this.geometry.setAttribute("position",new Ge(this.terrainState.positions,3)),this.geometry.setAttribute("normal",new Ge(this.terrainState.normals,3)),this.geometry.index=new Ge(this.terrainState.indices,1,!1),this.mesh.geometry=this.geometry):(this.geometry=new Qe,this.geometry.setAttribute("position",new Ie(this.terrainState.positions,3)),this.geometry.setAttribute("normal",new Ie(this.terrainState.normals,3)),this.geometry.setAttribute("uv",new Ie(this.terrainState.uv,2)),this.geometry.index=new Ge(this.terrainState.indices,1,!1),this.texture=new $a(this.terrainState.texture,e.segments,e.segments,Nt,Gt,Wa,mt,mt,$e,$e),this.texture.flipY=!1,this.texture.needsUpdate=!0,this.mesh=new We(this.geometry,this.terrains.material),this.mesh.userData.texture=this.texture,this.scene.add(this.mesh),this.created=!0)}update(){}destroy(){this.created&&(this.geometry.dispose(),this.scene.remove(this.mesh))}};U.register("RENDER","Terrain",jA);class qA{constructor(){this.world=new U.World,this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.texture=new Ke(this.canvas),this.colors={aboveFar:"#ffffff",aboveClose:"#a6c33c",belowClose:"#2f3d36",belowFar:"#011018"},this.width=1,this.height=512,this.update(),this.setDebug()}update(){const e=this.context.createLinearGradient(0,0,0,this.height);e.addColorStop(0,this.colors.aboveFar),e.addColorStop(.49999,this.colors.aboveClose),e.addColorStop(.51111,this.colors.belowClose),e.addColorStop(1,this.colors.belowFar),this.context.fillStyle=e,this.context.fillRect(0,0,this.width,this.height),this.texture.needsUpdate=!0}setDebug(){const e=this.world.debug;if(!e.active)return;const t=e.ui.getFolder("render/terrains/gradient");for(const n in this.colors)t.addColor(this.colors,n).onChange(()=>this.update())}}U.register("RENDER","TerrainGradient",qA);let YA=class{constructor(){this.world=new U.World,this.state=new U.STATE.State,this.render=new U.RENDER.Render,this.viewport=this.world.viewport,this.sky=this.render.sky,this.setGradient(),this.setMaterial(),this.setDebug(),this.state.terrains.on("create",e=>{const t=new U.RENDER.Terrain(this,e);e.on("destroy",()=>{t.destroy()})})}setGradient(){this.gradient=new U.RENDER.TerrainGradient}setMaterial(){this.material=new U.RENDER.MATERIALS.Terrain,this.material.uniforms.uPlayerPosition.value=new C,this.material.uniforms.uGradientTexture.value=this.gradient.texture,this.material.uniforms.uLightnessSmoothness.value=.25,this.material.uniforms.uFresnelOffset.value=0,this.material.uniforms.uFresnelScale.value=.5,this.material.uniforms.uFresnelPower.value=2,this.material.uniforms.uSunPosition.value=new C(-.5,-.5,-.5),this.material.uniforms.uFogTexture.value=this.sky.customRender.texture,this.material.uniforms.uGrassDistance.value=this.state.chunks.minSize,this.material.onBeforeRender=(e,t,n,i,s)=>{this.material.uniforms.uTexture.value=s.userData.texture,this.material.uniformsNeedUpdate=!0}}setDebug(){const e=this.world.debug;if(!e.active)return;const t=e.ui.getFolder("render/terrains");t.add(this.material,"wireframe"),t.add(this.material.uniforms.uLightnessSmoothness,"value").min(0).max(1).step(.001).name("uLightnessSmoothness"),t.add(this.material.uniforms.uFresnelOffset,"value").min(-1).max(1).step(.001).name("uFresnelOffset"),t.add(this.material.uniforms.uFresnelScale,"value").min(0).max(2).step(.001).name("uFresnelScale"),t.add(this.material.uniforms.uFresnelPower,"value").min(1).max(10).step(1).name("uFresnelPower")}update(){const t=this.state.player.position.current,n=this.state.sun;this.material.uniforms.uPlayerPosition.value.set(t[0],t[1],t[2]),this.material.uniforms.uSunPosition.value.set(n.position.x,n.position.y,n.position.z)}resize(){}};U.register("RENDER","Terrains",YA);class KA{constructor(){this.world=new U.World,this.render=new U.RENDER.Render,this.state=new U.STATE.State,this.scene=this.render.scene,this.mesh=new We(new Un(1e3,1e3),new Zt({color:"#1d3456"})),this.mesh.geometry.rotateX(-Math.PI*.5)}update(){const e=this.world.state.player;this.mesh.position.set(e.position.current[0],0,e.position.current[2])}}U.register("RENDER","Water",KA);var QA=`#define M_PI 3.1415926535897932384626433832795

uniform float uTime;
uniform float uGrassDistance;
uniform vec3 uPlayerPosition;
uniform float uTerrainSize;
uniform float uTerrainTextureSize;
uniform sampler2D uTerrainATexture;
uniform vec2 uTerrainAOffset;
uniform sampler2D uTerrainBTexture;
uniform vec2 uTerrainBOffset;
uniform sampler2D uTerrainCTexture;
uniform vec2 uTerrainCOffset;
uniform sampler2D uTerrainDTexture;
uniform vec2 uTerrainDOffset;
uniform sampler2D uNoiseTexture;
uniform float uFresnelOffset;
uniform float uFresnelScale;
uniform float uFresnelPower;
uniform vec3 uSunPosition;

attribute vec2 center;

varying vec3 vColor;

float getSunShade(vec3 normal)
{
    float sunShade = dot(normal, - uSunPosition);
    sunShade = sunShade * 0.5 + 0.5;

    return sunShade;
}
vec3 getSunShadeColor(vec3 baseColor, float sunShade)
{
    vec3 shadeColor = baseColor * vec3(0.0, 0.5, 0.7);
    return mix(baseColor, shadeColor, sunShade);
}
float getGrassAttenuation(vec2 position)
{
    float distanceAttenuation = distance(uPlayerPosition.xz, position) / uGrassDistance * 2.0;
    return 1.0 - clamp(0.0, 1.0, smoothstep(0.3, 1.0, distanceAttenuation));
}
vec2 getRotatePivot2d(vec2 uv, float rotation, vec2 pivot)
{
    return vec2(
        cos(rotation) * (uv.x - pivot.x) + sin(rotation) * (uv.y - pivot.y) + pivot.x,
        cos(rotation) * (uv.y - pivot.y) - sin(rotation) * (uv.x - pivot.x) + pivot.y
    );
}
float getSunReflection(vec3 viewDirection, vec3 worldNormal, vec3 viewNormal)
{
    vec3 sunViewReflection = reflect(uSunPosition, viewNormal);
    float sunViewStrength = max(0.2, dot(sunViewReflection, viewDirection));

    float fresnel = uFresnelOffset + uFresnelScale * (1.0 + dot(viewDirection, worldNormal));
    float sunReflection = fresnel * sunViewStrength;
    sunReflection = pow(sunReflection, uFresnelPower);

    return sunReflection;
}
vec3 getSunReflectionColor(vec3 baseColor, float sunReflection)
{
    return mix(baseColor, vec3(1.0, 1.0, 1.0), clamp(sunReflection, 0.0, 1.0));
}

void main()
{
    
    vec2 newCenter = center;
    newCenter -= uPlayerPosition.xz;
    float halfSize = uGrassDistance * 0.5;
    newCenter.x = mod(newCenter.x + halfSize, uGrassDistance) - halfSize;
    newCenter.y = mod(newCenter.y + halfSize, uGrassDistance) - halfSize; 
    vec4 modelCenter = modelMatrix * vec4(newCenter.x, 0.0, newCenter.y, 1.0);

    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.xz += newCenter; 

    
    float angleToCamera = atan(modelCenter.x - cameraPosition.x, modelCenter.z - cameraPosition.z);
    modelPosition.xz = getRotatePivot2d(modelPosition.xz, angleToCamera, modelCenter.xz);

    
    vec2 terrainAUv = (modelPosition.xz - uTerrainAOffset.xy) / uTerrainSize;
    vec2 terrainBUv = (modelPosition.xz - uTerrainBOffset.xy) / uTerrainSize;
    vec2 terrainCUv = (modelPosition.xz - uTerrainCOffset.xy) / uTerrainSize;
    vec2 terrainDUv = (modelPosition.xz - uTerrainDOffset.xy) / uTerrainSize;

    float fragmentSize = 1.0 / uTerrainTextureSize;
    vec4 terrainAColor = texture2D(uTerrainATexture, terrainAUv * (1.0 - fragmentSize) + fragmentSize * 0.5);
    vec4 terrainBColor = texture2D(uTerrainBTexture, terrainBUv * (1.0 - fragmentSize) + fragmentSize * 0.5);
    vec4 terrainCColor = texture2D(uTerrainCTexture, terrainCUv * (1.0 - fragmentSize) + fragmentSize * 0.5);
    vec4 terrainDColor = texture2D(uTerrainDTexture, terrainDUv * (1.0 - fragmentSize) + fragmentSize * 0.5);

    vec4 terrainColor = vec4(0);
    terrainColor += step(0.0, terrainAUv.x) * step(terrainAUv.x, 1.0) * step(0.0, terrainAUv.y) * step(terrainAUv.y, 1.0) * terrainAColor;
    terrainColor += step(0.0, terrainBUv.x) * step(terrainBUv.x, 1.0) * step(0.0, terrainBUv.y) * step(terrainBUv.y, 1.0) * terrainBColor;
    terrainColor += step(0.0, terrainCUv.x) * step(terrainCUv.x, 1.0) * step(0.0, terrainCUv.y) * step(terrainCUv.y, 1.0) * terrainCColor;
    terrainColor += step(0.0, terrainDUv.x) * step(terrainDUv.x, 1.0) * step(0.0, terrainDUv.y) * step(terrainDUv.y, 1.0) * terrainDColor;

    modelPosition.y += terrainColor.a;
    modelCenter.y += terrainColor.a;

    
    float distanceScale = getGrassAttenuation(modelCenter.xz);
    float terrainScale = terrainColor.g;
    float scale = distanceScale * terrainScale;
    modelPosition.xyz = mix(modelCenter.xyz, modelPosition.xyz, scale);

    
    float tipness = step(2.0, mod(float(gl_VertexID) + 1.0, 3.0));

    
    vec2 noiseUv = modelPosition.xz * 0.02 + uTime * 0.05;
    vec4 noiseColor = texture2D(uNoiseTexture, noiseUv);
    modelPosition.x += (noiseColor.x - 0.5) * tipness * scale;
    modelPosition.z += (noiseColor.y - 0.5) * tipness * scale;

    
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;
    
    vec3 viewDirection = normalize(modelPosition.xyz - cameraPosition);
    vec3 normal = vec3(0.0, 1.0, 0.0);
    vec3 worldNormal = normalize(mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal);
    vec3 viewNormal = normalize(normalMatrix * normal);

    
    vec3 uGrassLowColor = vec3(0.4, 0.5, 0.2);
    vec3 uGrassHighColor = vec3(0.4 * 1.3, 0.5 * 1.3, 0.2 * 1.3);
    vec3 lowColor = mix(uGrassLowColor, uGrassHighColor, 1.0 - scale);
    vec3 color = mix(lowColor, uGrassHighColor, tipness);

    
    float sunShade = getSunShade(normal);
    color = getSunShadeColor(color, sunShade);

    
    float sunReflection = getSunReflection(viewDirection, vec3(0.0, 1.0, 0.0), viewNormal);
    color = getSunReflectionColor(color, sunReflection);

    vColor = color;
    
    
}`,$A=`varying vec3 vColor;

void main()
{
    gl_FragColor = vec4(vColor, 1.0);
}`;function ex(){return new tt({uniforms:{uTime:{value:null},uGrassDistance:{value:null},uPlayerPosition:{value:null},uTerrainSize:{value:null},uTerrainTextureSize:{value:null},uTerrainATexture:{value:null},uTerrainAOffset:{value:null},uTerrainBTexture:{value:null},uTerrainBOffset:{value:null},uTerrainCTexture:{value:null},uTerrainCOffset:{value:null},uTerrainDTexture:{value:null},uTerrainDOffset:{value:null},uNoiseTexture:{value:null},uFresnelOffset:{value:null},uFresnelScale:{value:null},uFresnelPower:{value:null},uSunPosition:{value:null}},vertexShader:QA,fragmentShader:$A})}U.register("RENDER.MATERIALS","Grass",ex);var tx=`varying vec2 vUv;

void main()
{
    gl_Position = vec4(position, 1.0);

    vUv = uv;
}`,nx=`varying vec2 vUv;

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float perlin3dPeriodic(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); 
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

void main()
{
    float uFrequency = 8.0;

    float noiseR = perlin3dPeriodic(vec3(vUv * uFrequency, 123.456), vec3(uFrequency)) * 0.5 + 0.5;
    float noiseG = perlin3dPeriodic(vec3(vUv * uFrequency, 456.789), vec3(uFrequency)) * 0.5 + 0.5;
    float noiseB = perlin3dPeriodic(vec3(vUv * uFrequency, 789.123), vec3(uFrequency)) * 0.5 + 0.5;

    gl_FragColor = vec4(noiseR, noiseG, noiseB, 1.0);
}`;function ix(){return new tt({uniforms:{},vertexShader:tx,fragmentShader:nx})}U.register("RENDER.MATERIALS","Noises",ix);var sx=`varying vec2 vUv;

void main()
{
    gl_Position = vec4(position, 1.0);

    vUv = uv;
}`,rx=`uniform sampler2D uTexture;

varying vec2 vUv;

void main()
{
    vec3 color = texture2D(uTexture, vUv).rgb;
    gl_FragColor = vec4(color, 1.0);
}`;function ax(){return new tt({uniforms:{uTexture:{value:null}},vertexShader:sx,fragmentShader:rx})}U.register("RENDER.MATERIALS","SkyBackground",ax);var ox=`#define M_PI 3.1415926535897932384626433832795

uniform vec3 uSunPosition;

uniform float uAtmosphereElevation;
uniform float uAtmospherePower;
uniform vec3 uColorDayLow;
uniform vec3 uColorDayHigh;
uniform vec3 uColorNightLow;
uniform vec3 uColorNightHigh;

uniform float uDawnAngleAmplitude;
uniform float uDawnElevationAmplitude;
uniform vec3 uColorDawn;

uniform float uSunAmplitude;
uniform float uSunMultiplier;
uniform vec3 uColorSun;

uniform float uDayProgress;

varying vec3 vColor;

vec3 blendAdd(vec3 base, vec3 blend)
{
	return min(base + blend, vec3(1.0));
}

vec3 blendAdd(vec3 base, vec3 blend, float opacity)
{
	return (blendAdd(base, blend) * opacity + base * (1.0 - opacity));
}

void main()
{
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    vec3 normalizedPosition = normalize(position);

    
    
    float horizonIntensity = (uv.y - 0.5) / uAtmosphereElevation;
    horizonIntensity = pow(1.0 - horizonIntensity, uAtmospherePower);

    
    vec3 colorDay = mix(uColorDayHigh, uColorDayLow, horizonIntensity);
    
    
    vec3 colorNight = mix(uColorNightHigh, uColorNightLow, horizonIntensity);
    
    
    float dayIntensity = abs(uDayProgress - 0.5) * 2.0;
    vec3 color = mix(colorNight, colorDay, dayIntensity);

    /**
     * Sun glow
     */
    
    float distanceToSun = distance(normalizedPosition, uSunPosition);

    /**
     * Dawn
     */
    
    float dawnAngleIntensity = dot(normalize(uSunPosition.xz), normalize(normalizedPosition.xz));
    dawnAngleIntensity = smoothstep(0.0, 1.0, (dawnAngleIntensity - (1.0 - uDawnAngleAmplitude)) / uDawnAngleAmplitude);

    
    float dawnElevationIntensity = 1.0 - min(1.0, (uv.y - 0.5) / uDawnElevationAmplitude);

    
    float dawnDayIntensity = cos(uDayProgress * 4.0 * M_PI + M_PI) * 0.5 + 0.5;

    
    float dawnIntensity = clamp(dawnAngleIntensity * dawnElevationIntensity * dawnDayIntensity, 0.0, 1.0);
    color = blendAdd(color, uColorDawn, dawnIntensity);

    /**
     * Sun glow
     */
    
    float sunIntensity = smoothstep(0.0, 1.0, clamp(1.0 - distanceToSun / uSunAmplitude, 0.0, 1.0)) * uSunMultiplier;
    color = blendAdd(color, uColorSun, sunIntensity);

    float sunGlowStrength = pow(max(0.0, 1.0 + 0.05 - distanceToSun * 2.5), 2.0);
    color = blendAdd(color, uColorSun, sunGlowStrength);

    vColor = vec3(color);
    
}`,lx=`varying vec3 vColor;

void main()
{
    gl_FragColor = vec4(vColor, 1.0);
}`;function cx(){return new tt({uniforms:{uSunPosition:{value:new C},uAtmosphereElevation:{value:.5},uAtmospherePower:{value:10},uColorDayLow:{value:new le},uColorDayHigh:{value:new le},uColorNightLow:{value:new le},uColorNightHigh:{value:new le},uDawnAngleAmplitude:{value:1},uDawnElevationAmplitude:{value:.2},uColorDawn:{value:new le},uSunAmplitude:{value:.75},uSunMultiplier:{value:1},uColorSun:{value:new le},uDayProgress:{value:0}},vertexShader:ox,fragmentShader:lx})}U.register("RENDER.MATERIALS","SkySphere",cx);var hx=`#define M_PI 3.1415926535897932384626433832795

uniform vec3 uSunPosition;
uniform float uSize;
uniform float uBrightness;
uniform float uHeightFragments;

attribute float aSize;
attribute vec3 aColor;

varying vec3 vColor;

void main()
{
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    
    vec3 normalizedPosition = normalize(modelPosition.xyz);
    float sunSizeMultiplier = 1.0 - (dot(normalize(uSunPosition), normalizedPosition) * 0.5 + 0.5);
    

    gl_PointSize = aSize * uSize * sunSizeMultiplier * uHeightFragments;

    
    if(gl_PointSize < 0.5)
        gl_Position = vec4(2.0, 2.0, 2.0, 1.0);

    vColor = mix(aColor, vec3(1.0), uBrightness);
}`,ux=`varying vec3 vColor;

void main()
{
    gl_FragColor = vec4(vColor, 1.0);
}`;function dx(){return new tt({uniforms:{uSunPosition:{value:new C},uSize:{value:.01},uBrightness:{value:.5},uHeightFragments:{value:null}},vertexShader:hx,fragmentShader:ux})}U.register("RENDER.MATERIALS","Stars",dx);var fx=`uniform vec3 uPlayerPosition;
uniform float uLightnessSmoothness;
uniform float uFresnelOffset;
uniform float uFresnelScale;
uniform float uFresnelPower;
uniform vec3 uSunPosition;
uniform float uGrassDistance;
uniform sampler2D uTexture;
uniform sampler2D uFogTexture;

varying vec3 vColor;

float getSunShade(vec3 normal)
{
    float sunShade = dot(normal, - uSunPosition);
    sunShade = sunShade * 0.5 + 0.5;

    return sunShade;
}
float getGrassAttenuation(vec2 position)
{
    float distanceAttenuation = distance(uPlayerPosition.xz, position) / uGrassDistance * 2.0;
    return 1.0 - clamp(0.0, 1.0, smoothstep(0.3, 1.0, distanceAttenuation));
}
vec3 getSunShadeColor(vec3 baseColor, float sunShade)
{
    vec3 shadeColor = baseColor * vec3(0.0, 0.5, 0.7);
    return mix(baseColor, shadeColor, sunShade);
}
float getSunReflection(vec3 viewDirection, vec3 worldNormal, vec3 viewNormal)
{
    vec3 sunViewReflection = reflect(uSunPosition, viewNormal);
    float sunViewStrength = max(0.2, dot(sunViewReflection, viewDirection));

    float fresnel = uFresnelOffset + uFresnelScale * (1.0 + dot(viewDirection, worldNormal));
    float sunReflection = fresnel * sunViewStrength;
    sunReflection = pow(sunReflection, uFresnelPower);

    return sunReflection;
}
vec3 getSunReflectionColor(vec3 baseColor, float sunReflection)
{
    return mix(baseColor, vec3(1.0, 1.0, 1.0), clamp(sunReflection, 0.0, 1.0));
}
vec3 getFogColor(vec3 baseColor, float depth, vec2 screenUv)
{
    float uFogIntensity = 0.0025;
    vec3 fogColor = texture2D(uFogTexture, screenUv).rgb;
    
    float fogIntensity = 1.0 - exp(- uFogIntensity * uFogIntensity * depth * depth );
    return mix(baseColor, fogColor, fogIntensity);
}

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    float depth = - viewPosition.z;
    gl_Position = projectionMatrix * viewPosition;

    vec3 viewDirection = normalize(modelPosition.xyz - cameraPosition);
    vec3 worldNormal = normalize(mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal);
    vec3 viewNormal = normalize(normalMatrix * normal);

    
    vec4 terrainColor = texture2D(uTexture, uv);

    vec3 uGrassLowColor = vec3(0.4, 0.5, 0.2);
    vec3 uGrassHighColor = vec3(0.4 * 1.3, 0.5 * 1.3, 0.2 * 1.3);
    
    
    float grassDistanceAttenuation = getGrassAttenuation(modelPosition.xz);
    vec3 grassColor = mix(uGrassLowColor, uGrassHighColor, 1.0 - (grassDistanceAttenuation * terrainColor.g));

    vec3 color = grassColor;

    
    float sunShade = getSunShade(normal);
    color = getSunShadeColor(color, sunShade);

    
    float sunReflection = getSunReflection(viewDirection, worldNormal, viewNormal);
    color = getSunReflectionColor(color, sunReflection);

    
    vec2 screenUv = (gl_Position.xy / gl_Position.w * 0.5) + 0.5;
    color = getFogColor(color, depth, screenUv);

    
    

    
    vColor = color;
    
}`,px=`uniform sampler2D uGradientTexture;

varying vec3 vColor;

void main()
{
    vec3 color = vColor;
    
    gl_FragColor = vec4(color, 1.0);
    
}`;function mx(){return new tt({uniforms:{uPlayerPosition:{value:null},uGradientTexture:{value:null},uLightnessSmoothness:{value:null},uFresnelOffset:{value:null},uFresnelScale:{value:null},uFresnelPower:{value:null},uSunPosition:{value:null},uFogTexture:{value:null},uGrassDistance:{value:null},uTexture:{value:null}},vertexShader:fx,fragmentShader:px})}U.register("RENDER.MATERIALS","Terrain",mx);var gx=`varying vec3 vWorldNormal;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;

    vec3 worldNormal = normalize(mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal);

    
    vWorldNormal = worldNormal;
}`,vx=`uniform vec3 uSunPosition;
uniform vec3 uColor;

varying vec3 vWorldNormal;

float getSunShade(vec3 normal)
{
    float sunShade = dot(normal, - uSunPosition);
    sunShade = sunShade * 0.5 + 0.5;

    return sunShade;
}
vec3 getSunShadeColor(vec3 baseColor, float sunShade)
{
    vec3 shadeColor = baseColor * vec3(0.0, 0.5, 0.7);
    return mix(baseColor, shadeColor, sunShade);
}

void main()
{
    vec3 color = uColor;

    float sunShade = getSunShade(vWorldNormal);
    color = getSunShadeColor(color, sunShade);
    
    gl_FragColor = vec4(color, 1.0);
    
}`;function Ax(){return new tt({uniforms:{uColor:{value:null},uLightnessSmoothness:{value:null},uSunPosition:{value:null}},vertexShader:gx,fragmentShader:vx})}U.register("RENDER.MATERIALS","Player",Ax);class xx extends U.UTILS.EventEmitter{constructor(e,t,n,i,s,r,o,l){super(),this.world=new U.World,this.state=new U.STATE.State,this.mathUtils=this.world.mathUtils,this.id=e,this.chunks=t,this.parent=n,this.quadPosition=i,this.size=s,this.x=r,this.z=o,this.depth=l,this.precision=this.depth/this.chunks.maxDepth,this.maxSplit=this.depth===this.chunks.maxDepth,this.splitted=!1,this.splitting=!1,this.unsplitting=!1,this.quadsNeedsUpdate=!0,this.terrainNeedsUpdate=!0,this.neighbours=new Map,this.children=new Map,this.ready=!1,this.final=!1,this.halfSize=s*.5,this.quarterSize=this.halfSize*.5,this.bounding={xMin:this.x-this.halfSize,xMax:this.x+this.halfSize,zMin:this.z-this.halfSize,zMax:this.z+this.halfSize},this.throttleUpdate(),this.splitted||this.createFinal(),this.testReady()}throttleUpdate(){if(!this.quadsNeedsUpdate)return;this.quadsNeedsUpdate=!1,this.chunks.underSplitDistance(this.size,this.x,this.z)?!this.maxSplit&&!this.splitted&&this.split():this.splitted&&this.unsplit();for(const[t,n]of this.children)n.throttleUpdate()}update(){this.final&&this.terrainNeedsUpdate&&this.neighbours.size===4&&(this.createTerrain(),this.terrainNeedsUpdate=!1);for(const[e,t]of this.children)t.update()}updateNeighbours(e,t,n,i){this.neighbours.set("n",e),this.neighbours.set("e",t),this.neighbours.set("s",n),this.neighbours.set("w",i)}testReady(){if(this.splitted){let e=0;for(const[t,n]of this.children)n.ready&&e++;e===4&&this.setReady()}else this.terrain&&this.terrain.ready&&this.setReady()}setReady(){if(!this.ready){if(this.ready=!0,this.splitting&&(this.splitting=!1,this.destroyFinal()),this.unsplitting){this.unsplitting=!1;for(const[e,t]of this.children)t.destroy();this.children.clear()}this.trigger("ready")}}unsetReady(){this.ready&&(this.ready=!1,this.trigger("unready"))}split(){this.splitting=!0,this.splitted=!0,this.unsetReady();const e=this.chunks.create(this,"ne",this.halfSize,this.x+this.quarterSize,this.z-this.quarterSize,this.depth+1);this.children.set("ne",e);const t=this.chunks.create(this,"nw",this.halfSize,this.x-this.quarterSize,this.z-this.quarterSize,this.depth+1);this.children.set("nw",t);const n=this.chunks.create(this,"sw",this.halfSize,this.x-this.quarterSize,this.z+this.quarterSize,this.depth+1);this.children.set("sw",n);const i=this.chunks.create(this,"se",this.halfSize,this.x+this.quarterSize,this.z+this.quarterSize,this.depth+1);this.children.set("se",i);for(const[s,r]of this.children)r.on("ready",()=>{this.testReady()})}unsplit(){this.splitted&&(this.splitted=!1,this.unsplitting=!0,this.unsetReady(),this.createFinal())}createTerrain(){this.destroyTerrain(),this.terrain=this.state.terrains.create(this.size,this.x,this.z,this.precision),this.terrain.on("ready",()=>{this.testReady()})}destroyTerrain(){this.terrain&&this.state.terrains.destroyTerrain(this.terrain.id)}createFinal(){this.final||(this.final=!0,this.terrainNeedsUpdate=!0)}destroyFinal(){this.final&&(this.final=!1,this.terrainNeedsUpdate=!1,this.destroyTerrain())}destroy(){for(const[e,t]of this.children)t.off("ready");if(this.splitted)this.unsplit();else if(this.unsplitting){for(const[e,t]of this.children)t.destroy();this.children.clear()}this.destroyFinal(),this.trigger("destroy")}isInside(e,t){return e>this.bounding.xMin&&e<this.bounding.xMax&&t>this.bounding.zMin&&t<this.bounding.zMax}getChunkForPosition(e,t){if(!this.splitted)return this;for(const[n,i]of this.children)if(i.isInside(e,t))return i.getChunkForPosition(e,t);return!1}}U.register("STATE","Chunk",xx);var yx=1e-6,gt=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var a=0,e=arguments.length;e--;)a+=arguments[e]*arguments[e];return Math.sqrt(a)});function Sx(){var a=new gt(9);return gt!=Float32Array&&(a[1]=0,a[2]=0,a[3]=0,a[5]=0,a[6]=0,a[7]=0),a[0]=1,a[4]=1,a[8]=1,a}function Mh(){var a=new gt(16);return gt!=Float32Array&&(a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0),a[0]=1,a[5]=1,a[10]=1,a[15]=1,a}function wx(a,e,t){var n=Math.sin(t),i=Math.cos(t),s=e[4],r=e[5],o=e[6],l=e[7],c=e[8],u=e[9],h=e[10],d=e[11];return e!==a&&(a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a[4]=s*i+c*n,a[5]=r*i+u*n,a[6]=o*i+h*n,a[7]=l*i+d*n,a[8]=c*i-s*n,a[9]=u*i-r*n,a[10]=h*i-o*n,a[11]=d*i-l*n,a}function Mx(a,e,t){var n=Math.sin(t),i=Math.cos(t),s=e[0],r=e[1],o=e[2],l=e[3],c=e[8],u=e[9],h=e[10],d=e[11];return e!==a&&(a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a[0]=s*i-c*n,a[1]=r*i-u*n,a[2]=o*i-h*n,a[3]=l*i-d*n,a[8]=s*n+c*i,a[9]=r*n+u*i,a[10]=o*n+h*i,a[11]=l*n+d*i,a}function bx(a,e){return a[0]=e[12],a[1]=e[13],a[2]=e[14],a}function _x(a,e){var t=e[0],n=e[1],i=e[2],s=e[4],r=e[5],o=e[6],l=e[8],c=e[9],u=e[10];return a[0]=Math.hypot(t,n,i),a[1]=Math.hypot(s,r,o),a[2]=Math.hypot(l,c,u),a}function Tx(a,e){var t=new gt(3);_x(t,e);var n=1/t[0],i=1/t[1],s=1/t[2],r=e[0]*n,o=e[1]*i,l=e[2]*s,c=e[4]*n,u=e[5]*i,h=e[6]*s,d=e[8]*n,f=e[9]*i,g=e[10]*s,m=r+u+g,p=0;return m>0?(p=Math.sqrt(m+1)*2,a[3]=.25*p,a[0]=(h-f)/p,a[1]=(d-l)/p,a[2]=(o-c)/p):r>u&&r>g?(p=Math.sqrt(1+r-u-g)*2,a[3]=(h-f)/p,a[0]=.25*p,a[1]=(o+c)/p,a[2]=(d+l)/p):u>g?(p=Math.sqrt(1+u-r-g)*2,a[3]=(d-l)/p,a[0]=(o+c)/p,a[1]=.25*p,a[2]=(h+f)/p):(p=Math.sqrt(1+g-r-u)*2,a[3]=(o-c)/p,a[0]=(d+l)/p,a[1]=(h+f)/p,a[2]=.25*p),a}function Ex(a,e,t,n){var i=e[0],s=e[1],r=e[2],o=n[0],l=n[1],c=n[2],u=i-t[0],h=s-t[1],d=r-t[2],f=u*u+h*h+d*d;f>0&&(f=1/Math.sqrt(f),u*=f,h*=f,d*=f);var g=l*d-c*h,m=c*u-o*d,p=o*h-l*u;return f=g*g+m*m+p*p,f>0&&(f=1/Math.sqrt(f),g*=f,m*=f,p*=f),a[0]=g,a[1]=m,a[2]=p,a[3]=0,a[4]=h*p-d*m,a[5]=d*g-u*p,a[6]=u*m-h*g,a[7]=0,a[8]=u,a[9]=h,a[10]=d,a[11]=0,a[12]=i,a[13]=s,a[14]=r,a[15]=1,a}function en(){var a=new gt(3);return gt!=Float32Array&&(a[0]=0,a[1]=0,a[2]=0),a}function sr(a){var e=new gt(3);return e[0]=a[0],e[1]=a[1],e[2]=a[2],e}function Px(a){var e=a[0],t=a[1],n=a[2];return Math.hypot(e,t,n)}function nn(a,e,t){var n=new gt(3);return n[0]=a,n[1]=e,n[2]=t,n}function ws(a,e){return a[0]=e[0],a[1]=e[1],a[2]=e[2],a}function kn(a,e,t){return a[0]=e[0]+t[0],a[1]=e[1]+t[1],a[2]=e[2]+t[2],a}function Cx(a,e,t){return a[0]=e[0]-t[0],a[1]=e[1]-t[1],a[2]=e[2]-t[2],a}function Rx(a,e,t){return a[0]=e[0]*t,a[1]=e[1]*t,a[2]=e[2]*t,a}function Mi(a,e){return a[0]=-e[0],a[1]=-e[1],a[2]=-e[2],a}function bh(a,e){var t=e[0],n=e[1],i=e[2],s=t*t+n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),a[0]=e[0]*s,a[1]=e[1]*s,a[2]=e[2]*s,a}function fr(a,e){return a[0]*e[0]+a[1]*e[1]+a[2]*e[2]}function ti(a,e,t){var n=e[0],i=e[1],s=e[2],r=t[0],o=t[1],l=t[2];return a[0]=i*l-s*o,a[1]=s*r-n*l,a[2]=n*o-i*r,a}function Lx(a,e,t){var n=e[0],i=e[1],s=e[2],r=t[3]*n+t[7]*i+t[11]*s+t[15];return r=r||1,a[0]=(t[0]*n+t[4]*i+t[8]*s+t[12])/r,a[1]=(t[1]*n+t[5]*i+t[9]*s+t[13])/r,a[2]=(t[2]*n+t[6]*i+t[10]*s+t[14])/r,a}function zx(a,e,t){var n=t[0],i=t[1],s=t[2],r=t[3],o=e[0],l=e[1],c=e[2],u=i*c-s*l,h=s*o-n*c,d=n*l-i*o,f=i*d-s*h,g=s*u-n*d,m=n*h-i*u,p=r*2;return u*=p,h*=p,d*=p,f*=2,g*=2,m*=2,a[0]=o+u+f,a[1]=l+h+g,a[2]=c+d+m,a}function vc(a,e){var t=a[0],n=a[1],i=a[2],s=e[0],r=e[1],o=e[2],l=Math.sqrt(t*t+n*n+i*i),c=Math.sqrt(s*s+r*r+o*o),u=l*c,h=u&&fr(a,e)/u;return Math.acos(Math.min(Math.max(h,-1),1))}var Dx=Cx,_h=Px;(function(){var a=en();return function(e,t,n,i,s,r){var o,l;for(t||(t=3),n||(n=0),i?l=Math.min(i*t+n,e.length):l=e.length,o=n;o<l;o+=t)a[0]=e[o],a[1]=e[o+1],a[2]=e[o+2],s(a,a,r),e[o]=a[0],e[o+1]=a[1],e[o+2]=a[2];return e}})();function kx(){var a=new gt(4);return gt!=Float32Array&&(a[0]=0,a[1]=0,a[2]=0,a[3]=0),a}function Ix(a,e){var t=e[0],n=e[1],i=e[2],s=e[3],r=t*t+n*n+i*i+s*s;return r>0&&(r=1/Math.sqrt(r)),a[0]=t*r,a[1]=n*r,a[2]=i*r,a[3]=s*r,a}(function(){var a=kx();return function(e,t,n,i,s,r){var o,l;for(t||(t=4),n||(n=0),i?l=Math.min(i*t+n,e.length):l=e.length,o=n;o<l;o+=t)a[0]=e[o],a[1]=e[o+1],a[2]=e[o+2],a[3]=e[o+3],s(a,a,r),e[o]=a[0],e[o+1]=a[1],e[o+2]=a[2],e[o+3]=a[3];return e}})();function Na(){var a=new gt(4);return gt!=Float32Array&&(a[0]=0,a[1]=0,a[2]=0),a[3]=1,a}function Nx(a,e,t){t=t*.5;var n=Math.sin(t);return a[0]=n*e[0],a[1]=n*e[1],a[2]=n*e[2],a[3]=Math.cos(t),a}function xa(a,e,t,n){var i=e[0],s=e[1],r=e[2],o=e[3],l=t[0],c=t[1],u=t[2],h=t[3],d,f,g,m,p;return f=i*l+s*c+r*u+o*h,f<0&&(f=-f,l=-l,c=-c,u=-u,h=-h),1-f>yx?(d=Math.acos(f),g=Math.sin(d),m=Math.sin((1-n)*d)/g,p=Math.sin(n*d)/g):(m=1-n,p=n),a[0]=m*i+p*l,a[1]=m*s+p*c,a[2]=m*r+p*u,a[3]=m*o+p*h,a}function Fx(a,e){var t=e[0]+e[4]+e[8],n;if(t>0)n=Math.sqrt(t+1),a[3]=.5*n,n=.5/n,a[0]=(e[5]-e[7])*n,a[1]=(e[6]-e[2])*n,a[2]=(e[1]-e[3])*n;else{var i=0;e[4]>e[0]&&(i=1),e[8]>e[i*3+i]&&(i=2);var s=(i+1)%3,r=(i+2)%3;n=Math.sqrt(e[i*3+i]-e[s*3+s]-e[r*3+r]+1),a[i]=.5*n,n=.5/n,a[3]=(e[s*3+r]-e[r*3+s])*n,a[s]=(e[s*3+i]+e[i*3+s])*n,a[r]=(e[r*3+i]+e[i*3+r])*n}return a}var Th=Ix;(function(){var a=en(),e=nn(1,0,0),t=nn(0,1,0);return function(n,i,s){var r=fr(i,s);return r<-.999999?(ti(a,e,i),_h(a)<1e-6&&ti(a,t,i),bh(a,a),Nx(n,a,Math.PI),n):r>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(ti(a,i,s),n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=1+r,Th(n,n))}})();(function(){var a=Na(),e=Na();return function(t,n,i,s,r,o){return xa(a,n,r,o),xa(e,i,s,o),xa(t,a,e,2*o*(1-o)),t}})();(function(){var a=Sx();return function(e,t,n,i){return a[0]=n[0],a[3]=n[1],a[6]=n[2],a[1]=i[0],a[4]=i[1],a[7]=i[2],a[2]=-t[0],a[5]=-t[1],a[8]=-t[2],Th(e,Fx(e,a))}})();function vo(){var a=new gt(8);return gt!=Float32Array&&(a[0]=0,a[1]=0,a[2]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0),a[3]=1,a}function Ox(a,e,t){var n=t[0]*.5,i=t[1]*.5,s=t[2]*.5,r=e[0],o=e[1],l=e[2],c=e[3];return a[0]=r,a[1]=o,a[2]=l,a[3]=c,a[4]=n*c+i*l-s*o,a[5]=i*c+s*r-n*l,a[6]=s*c+n*o-i*r,a[7]=-n*r-i*o-s*l,a}function Eh(a,e){var t=Na();Tx(t,e);var n=new gt(3);return bx(n,e),Ox(a,t,n),a}function Ac(a,e){return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a}function Ph(){var a=new gt(2);return gt!=Float32Array&&(a[0]=0,a[1]=0),a}function Bx(a,e,t){return a[0]=e,a[1]=t,a}(function(){var a=Ph();return function(e,t,n,i,s,r){var o,l;for(t||(t=2),n||(n=0),i?l=Math.min(i*t+n,e.length):l=e.length,o=n;o<l;o+=t)a[0]=e[o],a[1]=e[o+1],s(a,a,r),e[o]=a[0],e[o+1]=a[1];return e}})();class Ux extends U.UTILS.EventEmitter{constructor(){super(),this.world=new U.World,this.state=new U.STATE.State,this.mathUtils=this.world.mathUtils,this.reference=Ph(),this.minSize=64,this.maxDepth=4,this.maxSize=this.minSize*Math.pow(2,this.maxDepth),this.splitRatioPerSize=1.3,this.lastId=0,this.children=new Map,this.allChildren=new Map,this.setThrottle(),this.throttleUpdate()}setThrottle(){this.throttle={},this.throttle.lastKey=null,this.throttle.test=()=>{const e=`${Math.round(this.reference[0]/this.minSize*2+.5)}${Math.round(this.reference[1]/this.minSize*2+.5)}`;e!==this.throttle.lastKey&&(this.throttle.lastKey=e,this.throttleUpdate())}}throttleUpdate(){for(const[t,n]of this.allChildren)n.quadsNeedsUpdate=!0;const e=this.getProximityChunkCoordinates();for(const[t,n]of this.children)e.find(i=>i.key===t)||(n.destroy(),this.children.delete(t));for(const t of e)if(!this.children.has(t.key)){const n=this.create(null,null,this.maxSize,t.x,t.z,0);this.children.set(t.key,n)}for(const[t,n]of this.children)n.throttleUpdate();this.updateNeighbours()}update(){const e=this.state.player;Bx(this.reference,e.position.current[0],e.position.current[2]),this.throttle.test();for(const[t,n]of this.children)n.update()}create(e,t,n,i,s,r){const o=this.lastId++,l=new U.STATE.Chunk(o,this,e,t,n,i,s,r);return this.allChildren.set(o,l),this.trigger("create",[l]),l}underSplitDistance(e,t,n){return this.mathUtils.distance(this.reference[0],this.reference[1],t,n)<e*this.splitRatioPerSize}updateNeighbours(){for(const[t,n]of this.children){const i=t.split(","),s=parseFloat(i[0]),r=parseFloat(i[1]),o=`${s},${r-1}`,l=`${s+1},${r}`,c=`${s},${r+1}`,u=`${s-1},${r}`,h=this.children.get(o)??!1,d=this.children.get(l)??!1,f=this.children.get(c)??!1,g=this.children.get(u)??!1;n.updateNeighbours(h,d,f,g)}const e=[...this.allChildren.values()].filter(t=>t.depth>0).sort((t,n)=>t.depth-n.depth);for(const t of e){let n=!1,i=!1,s=!1,r=!1;if(t.quadPosition==="sw")n=t.parent.children.get("nw");else if(t.quadPosition==="se")n=t.parent.children.get("ne");else{const o=t.parent.neighbours.get("n");o&&(o.splitted?n=o.children.get(t.quadPosition==="nw"?"sw":"se"):n=o)}if(t.quadPosition==="nw")i=t.parent.children.get("ne");else if(t.quadPosition==="sw")i=t.parent.children.get("se");else{const o=t.parent.neighbours.get("e");o&&(o.splitted?i=o.children.get(t.quadPosition==="ne"?"nw":"sw"):i=o)}if(t.quadPosition==="nw")s=t.parent.children.get("sw");else if(t.quadPosition==="ne")s=t.parent.children.get("se");else{const o=t.parent.neighbours.get("s");o&&(o.splitted?s=o.children.get(t.quadPosition==="sw"?"nw":"ne"):s=o)}if(t.quadPosition==="ne")r=t.parent.children.get("nw");else if(t.quadPosition==="se")r=t.parent.children.get("sw");else{const o=t.parent.neighbours.get("w");o&&(o.splitted?r=o.children.get(t.quadPosition==="nw"?"ne":"se"):r=o)}t.updateNeighbours(n,i,s,r)}}getProximityChunkCoordinates(){const e=Math.round(this.reference[0]/this.maxSize),t=Math.round(this.reference[1]/this.maxSize),n=[{x:e,z:t},{x:e,z:t+1},{x:e+1,z:t+1},{x:e+1,z:t},{x:e+1,z:t-1},{x:e,z:t-1},{x:e-1,z:t-1},{x:e-1,z:t},{x:e-1,z:t+1}];for(const i of n)i.coordinatesX=i.x,i.coordinatesZ=i.z,i.key=`${i.x},${i.z}`,i.x*=this.maxSize,i.z*=this.maxSize;return n}getChunkForPosition(e,t){for(const[n,i]of this.children)if(i.isInside(e,t))return i}getTopologyForPosition(e,t){const n=this.getDeepestChunkForPosition(e,t);return!n||!n.terrain?!1:n.terrain.getTopologyForPosition(e,t)}getDeepestChunkForPosition(e,t){const n=this.getChunkForPosition(e,t);return n?n.getChunkForPosition(e,t):!1}}U.register("STATE","Chunks",Ux);class Hx{constructor(){this.world=new U.World,this.autoUpdate=!0,this.timeProgress=0,this.progress=0,this.duration=15,this.setDebug()}update(){const e=this.world.time;this.autoUpdate&&(this.timeProgress+=e.delta/this.duration,this.progress=this.timeProgress%1)}setDebug(){const e=this.world.debug;if(!e.active)return;const t=e.ui.getFolder("state/day");t.add(this,"autoUpdate"),t.add(this,"progress").min(0).max(1).step(.001),t.add(this,"duration").min(5).max(100).step(1)}}U.register("STATE","Day",Hx);class Vx{constructor(){this.world=new U.World,this.state=new U.STATE.State,this.time=this.world.time,this.controls=this.world.controls,this.rotation=0,this.inputSpeed=10,this.inputBoostSpeed=30,this.speed=0,this.position={},this.position.current=nn(10,0,1),this.position.previous=sr(this.position.current),this.position.delta=en(),this.view=new U.STATE.PlayerView(this)}update(){if(this.view.mode!==U.STATE.PlayerView.MODE_FLY&&(this.controls.keys.down.forward||this.controls.keys.down.backward||this.controls.keys.down.strafeLeft||this.controls.keys.down.strafeRight)){this.rotation=this.view.thirdPerson.theta,this.controls.keys.down.forward?this.controls.keys.down.strafeLeft?this.rotation+=Math.PI*.25:this.controls.keys.down.strafeRight&&(this.rotation-=Math.PI*.25):this.controls.keys.down.backward?this.controls.keys.down.strafeLeft?this.rotation+=Math.PI*.75:this.controls.keys.down.strafeRight?this.rotation-=Math.PI*.75:this.rotation-=Math.PI:this.controls.keys.down.strafeLeft?this.rotation+=Math.PI*.5:this.controls.keys.down.strafeRight&&(this.rotation-=Math.PI*.5);const n=this.controls.keys.down.boost?this.inputBoostSpeed:this.inputSpeed,i=Math.sin(this.rotation)*this.time.delta*n,s=Math.cos(this.rotation)*this.time.delta*n;this.position.current[0]-=i,this.position.current[2]-=s}Dx(this.position.delta,this.position.current,this.position.previous),ws(this.position.previous,this.position.current),this.speed=_h(this.position.delta),this.view.update();const t=this.state.chunks.getTopologyForPosition(this.position.current[0],this.position.current[2]);t?this.position.current[1]=t.elevation:this.position.current[1]=0}updateView(){}}U.register("STATE","Player",Vx);class vt{constructor(e){this.world=new U.World,this.viewport=this.world.viewport,this.controls=this.world.controls,this.debug=this.world.debug,this.player=e,this.position=en(),this.quaternion=vo(),this.mode=vt.MODE_THIRDPERSON,this.thirdPerson=new U.STATE.PlayerViewThirdPerson(this.player),this.fly=new U.STATE.PlayerViewFly(this.player),this.mode===vt.MODE_THIRDPERSON?this.thirdPerson.activate():this.mode===vt.MODE_FLY&&this.fly.activate(),this.controls.on("viewModeDown",()=>{this.mode===vt.MODE_THIRDPERSON?(this.mode=vt.MODE_FLY,this.fly.activate(this.position,this.quaternion),this.thirdPerson.deactivate()):this.mode===vt.MODE_FLY&&(this.mode=vt.MODE_THIRDPERSON,this.fly.deactivate(),this.thirdPerson.activate())}),this.setDebug()}update(){this.thirdPerson.update(),this.fly.update(),this.mode===vt.MODE_THIRDPERSON?(ws(this.position,this.thirdPerson.position),Ac(this.quaternion,this.thirdPerson.quaternion)):this.mode===vt.MODE_FLY&&(ws(this.position,this.fly.position),Ac(this.quaternion,this.fly.quaternion))}setDebug(){const e=this.world.debug;if(!e.active)return;e.ui.getFolder("state/player/view").add(this,"mode",{MODE_THIRDPERSON:vt.MODE_THIRDPERSON,MODE_FLY:vt.MODE_FLY}).onChange(()=>{this.mode===vt.MODE_THIRDPERSON?(this.fly.deactivate(),this.thirdPerson.activate()):this.mode===vt.MODE_FLY&&(this.fly.activate(this.position,this.quaternion),this.thirdPerson.deactivate())})}}vt.MODE_THIRDPERSON=1;vt.MODE_FLY=2;U.register("STATE","PlayerView",vt);class Gx{constructor(e){this.world=new U.World,this.viewport=this.world.viewport,this.time=this.world.time,this.controls=this.world.controls,this.player=e,this.active=!1,this.worldUp=nn(0,1,0),this.defaultForward=nn(0,0,1),this.forward=sr(this.defaultForward),this.rightward=en(),this.upward=en(),this.backward=en(),this.leftward=en(),this.downward=en(),ti(this.rightward,this.worldUp,this.forward),ti(this.upward,this.forward,this.rightward),Mi(this.backward,this.forward),Mi(this.leftward,this.rightward),Mi(this.downward,this.upward),this.position=nn(40,10,40),this.quaternion=vo(),this.rotateX=-Math.PI*.15,this.rotateY=Math.PI*.25,this.rotateXLimits={min:-Math.PI*.5,max:Math.PI*.5}}activate(e=null,t=null){if(this.active=!0,e!==null&&t!==null){ws(this.position,e);const n=sr(this.defaultForward);zx(n,n,t);const i=sr(n);i[1]=0,this.rotateY=vc(this.defaultForward,i),fr(n,nn(1,0,0))<0&&(this.rotateY*=-1),this.rotateX=vc(n,i),fr(n,nn(0,1,0))>0&&(this.rotateX*=-1)}}deactivate(){this.active=!1}update(){if(!this.active)return;(this.controls.pointer.down||this.viewport.pointerLock.active)&&(this.rotateX-=this.controls.pointer.delta.y*2,this.rotateY-=this.controls.pointer.delta.x*2,this.rotateX<this.rotateXLimits.min&&(this.rotateX=this.rotateXLimits.min),this.rotateX>this.rotateXLimits.max&&(this.rotateX=this.rotateXLimits.max));const e=Mh();Mx(e,e,this.rotateY),wx(e,e,this.rotateX),Eh(this.quaternion,e),ws(this.forward,this.defaultForward),Lx(this.forward,this.forward,e),ti(this.rightward,this.worldUp,this.forward),ti(this.upward,this.forward,this.rightward),Mi(this.backward,this.forward),Mi(this.leftward,this.rightward),Mi(this.downward,this.upward);const t=en();this.controls.keys.down.forward&&kn(t,t,this.backward),this.controls.keys.down.backward&&kn(t,t,this.forward),this.controls.keys.down.strafeRight&&kn(t,t,this.rightward),this.controls.keys.down.strafeLeft&&kn(t,t,this.leftward),this.controls.keys.down.jump&&kn(t,t,this.upward),this.controls.keys.down.crouch&&kn(t,t,this.downward);const n=(this.controls.keys.down.boost?30:10)*this.time.delta;bh(t,t),Rx(t,t,n),kn(this.position,this.position,t)}}U.register("STATE","PlayerViewFly",Gx);class Jx{constructor(e){this.world=new U.World,this.state=new U.STATE.State,this.viewport=this.world.viewport,this.controls=this.world.controls,this.player=e,this.active=!1,this.worldUp=nn(0,1,0),this.position=en(),this.quaternion=vo(),this.distance=15,this.phi=Math.PI*.45,this.theta=-Math.PI*.25,this.aboveOffset=2,this.phiLimits={min:.1,max:Math.PI-.1}}activate(){this.active=!0}deactivate(){this.active=!1}update(){if(!this.active)return;(this.controls.pointer.down||this.viewport.pointerLock.active)&&(this.phi-=this.controls.pointer.delta.y*2,this.theta-=this.controls.pointer.delta.x*2,this.phi<this.phiLimits.min&&(this.phi=this.phiLimits.min),this.phi>this.phiLimits.max&&(this.phi=this.phiLimits.max));const e=Math.sin(this.phi)*this.distance,t=nn(e*Math.sin(this.theta),Math.cos(this.phi)*this.distance,e*Math.cos(this.theta));kn(this.position,this.player.position.current,t);const n=nn(this.player.position.current[0],this.player.position.current[1]+this.aboveOffset,this.player.position.current[2]),i=Mh();Ex(i,this.position,n,this.worldUp),Eh(this.quaternion,i);const r=this.state.chunks.getTopologyForPosition(this.position[0],this.position[2]);r&&this.position[1]<r.elevation+1&&(this.position[1]=r.elevation+1)}}U.register("STATE","PlayerViewThirdPerson",Jx);class Wx{constructor(){this.world=new U.World,this.state=new U.STATE.State,this.theta=Math.PI*.8,this.phi=Math.PI*.45,this.position={x:0,y:0,z:0}}update(){const t=-(this.state.day.progress+.25)*Math.PI*2;this.phi=(Math.sin(t)*.3+.5)*Math.PI,this.theta=(Math.cos(t)*.3+.5)*Math.PI;const n=Math.sin(this.phi);this.position.x=n*Math.sin(this.theta),this.position.y=Math.cos(this.phi),this.position.z=n*Math.cos(this.theta)}}U.register("STATE","Sun",Wx);class Zx extends U.UTILS.EventEmitter{constructor(e,t,n,i,s,r,o){super(),this.world=new U.World,this.mathUtils=this.world.mathUtils,this.terrains=e,this.id=t,this.size=n,this.x=i,this.z=s,this.precision=r,this.elevationOffset=o,this.halfSize=this.size*.5,this.ready=!1,this.renderInstance=null}create(e){this.positions=e.positions,this.normals=e.normals,this.indices=e.indices,this.texture=e.texture,this.uv=e.uv,this.ready=!0,this.trigger("ready")}getTopologyForPosition(e,t){if(!this.ready)return;const n=this.terrains.subdivisions,i=n+1,s=this.size/n,r=e-this.x+this.halfSize,o=t-this.z+this.halfSize,l=r/s%1,c=o/s%1,u=Math.floor(r/s),h=Math.floor(o/s),d=u+1,f=h+1,g=l<c?u:u+1,m=l<c?h+1:h,p=(h*i+u)*3,v=(m*i+g)*3,S=(f*i+d)*3,A=l<c?1-c:1-l,x=l<c?-(l-c):l-c,w=1-A-x,T=this.positions[p+1],P=this.positions[v+1],y=this.positions[S+1],b=T*A+P*x+y*w,R=this.normals[p],I=this.normals[p+1],H=this.normals[p+2],D=this.normals[v],z=this.normals[v+1],O=this.normals[v+2],X=this.normals[S],Y=this.normals[S+1],V=this.normals[S+2],Q=[R*A+D*x+X*w,I*A+z*x+Y*w,H*A+O*x+V*w];return{elevation:b,normal:Q}}destroy(){this.trigger("destroy")}}U.register("STATE","Terrain",Zx);var Fa={},Xx={get exports(){return Fa},set exports(a){Fa=a}};(function(a){(function(e,t,n){function i(l){var c=this,u=o();c.next=function(){var h=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=h|0)},c.c=1,c.s0=u(" "),c.s1=u(" "),c.s2=u(" "),c.s0-=u(l),c.s0<0&&(c.s0+=1),c.s1-=u(l),c.s1<0&&(c.s1+=1),c.s2-=u(l),c.s2<0&&(c.s2+=1),u=null}function s(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function r(l,c){var u=new i(l),h=c&&c.state,d=u.next;return d.int32=function(){return u.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&s(h,u),d.state=function(){return s(u,{})}),d}function o(){var l=4022871197,c=function(u){u=String(u);for(var h=0;h<u.length;h++){l+=u.charCodeAt(h);var d=.02519603282416938*l;l=d>>>0,d-=l,d*=l,l=d>>>0,d-=l,l+=d*4294967296}return(l>>>0)*23283064365386963e-26};return c}t&&t.exports?t.exports=r:n&&n.amd?n(function(){return r}):this.alea=r})(Gn,a,!1)})(Xx);var Oa={},jx={get exports(){return Oa},set exports(a){Oa=a}};(function(a){(function(e,t,n){function i(o){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var h=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^h^h>>>8},o===(o|0)?l.x=o:c+=o;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,l.next()}function s(o,l){return l.x=o.x,l.y=o.y,l.z=o.z,l.w=o.w,l}function r(o,l){var c=new i(o),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&s(u,c),h.state=function(){return s(c,{})}),h}t&&t.exports?t.exports=r:n&&n.amd?n(function(){return r}):this.xor128=r})(Gn,a,!1)})(jx);var Ba={},qx={get exports(){return Ba},set exports(a){Ba=a}};(function(a){(function(e,t,n){function i(o){var l=this,c="";l.next=function(){var h=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(h^h<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,o===(o|0)?l.x=o:c+=o;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,u==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function s(o,l){return l.x=o.x,l.y=o.y,l.z=o.z,l.w=o.w,l.v=o.v,l.d=o.d,l}function r(o,l){var c=new i(o),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&s(u,c),h.state=function(){return s(c,{})}),h}t&&t.exports?t.exports=r:n&&n.amd?n(function(){return r}):this.xorwow=r})(Gn,a,!1)})(qx);var Ua={},Yx={get exports(){return Ua},set exports(a){Ua=a}};(function(a){(function(e,t,n){function i(o){var l=this;l.next=function(){var u=l.x,h=l.i,d,f;return d=u[h],d^=d>>>7,f=d^d<<24,d=u[h+1&7],f^=d^d>>>10,d=u[h+3&7],f^=d^d>>>3,d=u[h+4&7],f^=d^d<<7,d=u[h+7&7],d=d^d<<13,f^=d^d<<9,u[h]=f,l.i=h+1&7,f};function c(u,h){var d,f=[];if(h===(h|0))f[0]=h;else for(h=""+h,d=0;d<h.length;++d)f[d&7]=f[d&7]<<15^h.charCodeAt(d)+f[d+1&7]<<13;for(;f.length<8;)f.push(0);for(d=0;d<8&&f[d]===0;++d);for(d==8?f[7]=-1:f[d],u.x=f,u.i=0,d=256;d>0;--d)u.next()}c(l,o)}function s(o,l){return l.x=o.x.slice(),l.i=o.i,l}function r(o,l){o==null&&(o=+new Date);var c=new i(o),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(u.x&&s(u,c),h.state=function(){return s(c,{})}),h}t&&t.exports?t.exports=r:n&&n.amd?n(function(){return r}):this.xorshift7=r})(Gn,a,!1)})(Yx);var Ha={},Kx={get exports(){return Ha},set exports(a){Ha=a}};(function(a){(function(e,t,n){function i(o){var l=this;l.next=function(){var u=l.w,h=l.X,d=l.i,f,g;return l.w=u=u+1640531527|0,g=h[d+34&127],f=h[d=d+1&127],g^=g<<13,f^=f<<17,g^=g>>>15,f^=f>>>12,g=h[d]=g^f,l.i=d,g+(u^u>>>16)|0};function c(u,h){var d,f,g,m,p,v=[],S=128;for(h===(h|0)?(f=h,h=null):(h=h+"\0",f=0,S=Math.max(S,h.length)),g=0,m=-32;m<S;++m)h&&(f^=h.charCodeAt((m+32)%h.length)),m===0&&(p=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,m>=0&&(p=p+1640531527|0,d=v[m&127]^=f+p,g=d==0?g+1:0);for(g>=128&&(v[(h&&h.length||0)&127]=-1),g=127,m=4*128;m>0;--m)f=v[g+34&127],d=v[g=g+1&127],f^=f<<13,d^=d<<17,f^=f>>>15,d^=d>>>12,v[g]=f^d;u.w=p,u.X=v,u.i=g}c(l,o)}function s(o,l){return l.i=o.i,l.w=o.w,l.X=o.X.slice(),l}function r(o,l){o==null&&(o=+new Date);var c=new i(o),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(u.X&&s(u,c),h.state=function(){return s(c,{})}),h}t&&t.exports?t.exports=r:n&&n.amd?n(function(){return r}):this.xor4096=r})(Gn,a,!1)})(Kx);var Va={},Qx={get exports(){return Va},set exports(a){Va=a}};(function(a){(function(e,t,n){function i(o){var l=this,c="";l.next=function(){var h=l.b,d=l.c,f=l.d,g=l.a;return h=h<<25^h>>>7^d,d=d-f|0,f=f<<24^f>>>8^g,g=g-h|0,l.b=h=h<<20^h>>>12^d,l.c=d=d-f|0,l.d=f<<16^d>>>16^g,l.a=g-h|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,o===Math.floor(o)?(l.a=o/4294967296|0,l.b=o|0):c+=o;for(var u=0;u<c.length+20;u++)l.b^=c.charCodeAt(u)|0,l.next()}function s(o,l){return l.a=o.a,l.b=o.b,l.c=o.c,l.d=o.d,l}function r(o,l){var c=new i(o),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&s(u,c),h.state=function(){return s(c,{})}),h}t&&t.exports?t.exports=r:n&&n.amd?n(function(){return r}):this.tychei=r})(Gn,a,!1)})(Qx);var Ga={},$x={get exports(){return Ga},set exports(a){Ga=a}};const ey={},ty=Object.freeze(Object.defineProperty({__proto__:null,default:ey},Symbol.toStringTag,{value:"Module"})),ny=sA(ty);(function(a){(function(e,t,n){var i=256,s=6,r=52,o="random",l=n.pow(i,s),c=n.pow(2,r),u=c*2,h=i-1,d;function f(x,w,T){var P=[];w=w==!0?{entropy:!0}:w||{};var y=v(p(w.entropy?[x,A(t)]:x??S(),3),P),b=new g(P),R=function(){for(var I=b.g(s),H=l,D=0;I<c;)I=(I+D)*i,H*=i,D=b.g(1);for(;I>=u;)I/=2,H/=2,D>>>=1;return(I+D)/H};return R.int32=function(){return b.g(4)|0},R.quick=function(){return b.g(4)/4294967296},R.double=R,v(A(b.S),t),(w.pass||T||function(I,H,D,z){return z&&(z.S&&m(z,b),I.state=function(){return m(b,{})}),D?(n[o]=I,H):I})(R,y,"global"in w?w.global:this==n,w.state)}function g(x){var w,T=x.length,P=this,y=0,b=P.i=P.j=0,R=P.S=[];for(T||(x=[T++]);y<i;)R[y]=y++;for(y=0;y<i;y++)R[y]=R[b=h&b+x[y%T]+(w=R[y])],R[b]=w;(P.g=function(I){for(var H,D=0,z=P.i,O=P.j,X=P.S;I--;)H=X[z=h&z+1],D=D*i+X[h&(X[z]=X[O=h&O+H])+(X[O]=H)];return P.i=z,P.j=O,D})(i)}function m(x,w){return w.i=x.i,w.j=x.j,w.S=x.S.slice(),w}function p(x,w){var T=[],P=typeof x,y;if(w&&P=="object")for(y in x)try{T.push(p(x[y],w-1))}catch{}return T.length?T:P=="string"?x:x+"\0"}function v(x,w){for(var T=x+"",P,y=0;y<T.length;)w[h&y]=h&(P^=w[h&y]*19)+T.charCodeAt(y++);return A(w)}function S(){try{var x;return d&&(x=d.randomBytes)?x=x(i):(x=new Uint8Array(i),(e.crypto||e.msCrypto).getRandomValues(x)),A(x)}catch{var w=e.navigator,T=w&&w.plugins;return[+new Date,e,T,e.screen,A(t)]}}function A(x){return String.fromCharCode.apply(0,x)}if(v(n.random(),t),a.exports){a.exports=f;try{d=ny}catch{}}else n["seed"+o]=f})(typeof self<"u"?self:Gn,[],Math)})($x);var iy=Fa,sy=Oa,ry=Ba,ay=Ua,oy=Ha,ly=Va,oi=Ga;oi.alea=iy;oi.xor128=sy;oi.xorwow=ry;oi.xorshift7=ay;oi.xor4096=oy;oi.tychei=ly;var cy=oi;function hy(){return new Worker(""+new URL("Terrain-54dcffe5.js",import.meta.url).href)}class Et extends U.UTILS.EventEmitter{constructor(){super(),this.world=new U.World,this.state=new U.STATE.State,this.debug=this.world.debug,this.seed=this.world.seed+"b",this.random=new cy(this.seed),this.subdivisions=40,this.lacunarity=2.05,this.persistence=.45,this.maxIterations=6,this.baseFrequency=.003,this.baseAmplitude=180,this.power=2,this.elevationOffset=1,this.segments=this.subdivisions+1,this.iterationsFormula=Et.ITERATIONS_FORMULA_POWERMIX,this.lastId=0,this.terrains=new Map,this.iterationsOffsets=[];for(let e=0;e<this.maxIterations;e++)this.iterationsOffsets.push([(this.random()-.5)*2e5,(this.random()-.5)*2e5]);this.setWorkers(),this.setDebug()}setWorkers(){this.worker=hy(),this.worker.onmessage=e=>{const t=this.terrains.get(e.data.id);t&&t.create(e.data)}}getIterationsForPrecision(e){if(this.iterationsFormula===Et.ITERATIONS_FORMULA_MAX)return this.maxIterations;if(this.iterationsFormula===Et.ITERATIONS_FORMULA_MIN)return Math.floor((this.maxIterations-1)*e)+1;if(this.iterationsFormula===Et.ITERATIONS_FORMULA_MIX)return Math.round((this.maxIterations*e+this.maxIterations)/2);if(this.iterationsFormula===Et.ITERATIONS_FORMULA_POWERMIX)return Math.round((this.maxIterations*(1-Math.pow(1-e,2))+this.maxIterations)/2)}create(e,t,n,i){const s=this.lastId++,r=this.getIterationsForPrecision(i),o=new U.STATE.Terrain(this,s,e,t,n,i);return this.terrains.set(o.id,o),this.worker.postMessage({id:o.id,x:t,z:n,seed:this.seed,subdivisions:this.subdivisions,size:e,lacunarity:this.lacunarity,persistence:this.persistence,iterations:r,baseFrequency:this.baseFrequency,baseAmplitude:this.baseAmplitude,power:this.power,elevationOffset:this.elevationOffset,iterationsOffsets:this.iterationsOffsets}),this.trigger("create",[o]),o}destroyTerrain(e){const t=this.terrains.get(e);t&&(t.destroy(),this.terrains.delete(e))}recreate(){for(const[e,t]of this.terrains){const n=this.getIterationsForPrecision(t.precision);this.worker.postMessage({id:t.id,size:t.size,x:t.x,z:t.z,seed:this.seed,subdivisions:this.subdivisions,lacunarity:this.lacunarity,persistence:this.persistence,iterations:n,baseFrequency:this.baseFrequency,baseAmplitude:this.baseAmplitude,power:this.power,elevationOffset:this.elevationOffset,iterationsOffsets:this.iterationsOffsets})}}setDebug(){const e=this.world.debug;if(!e.active)return;const t=e.ui.getFolder("state/terrains");t.add(this,"subdivisions").min(1).max(400).step(1).onFinishChange(()=>this.recreate()),t.add(this,"lacunarity").min(1).max(5).step(.01).onFinishChange(()=>this.recreate()),t.add(this,"persistence").min(0).max(1).step(.01).onFinishChange(()=>this.recreate()),t.add(this,"maxIterations").min(1).max(10).step(1).onFinishChange(()=>this.recreate()),t.add(this,"baseFrequency").min(0).max(.01).step(1e-4).onFinishChange(()=>this.recreate()),t.add(this,"baseAmplitude").min(0).max(500).step(.1).onFinishChange(()=>this.recreate()),t.add(this,"power").min(1).max(10).step(1).onFinishChange(()=>this.recreate()),t.add(this,"elevationOffset").min(-10).max(10).step(1).onFinishChange(()=>this.recreate()),t.add(this,"iterationsFormula",{max:Et.ITERATIONS_FORMULA_MAX,min:Et.ITERATIONS_FORMULA_MIN,mix:Et.ITERATIONS_FORMULA_MIX,powerMix:Et.ITERATIONS_FORMULA_POWERMIX}).onFinishChange(()=>this.recreate())}}Et.ITERATIONS_FORMULA_MAX=1;Et.ITERATIONS_FORMULA_MIN=2;Et.ITERATIONS_FORMULA_MIX=3;Et.ITERATIONS_FORMULA_POWERMIX=4;U.register("STATE","Terrains",Et);window.world=new U.World({domElement:document.querySelector(".game")});
