var Ta=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var tr=(s,e,t)=>(Ta(s,e,"read from private field"),t?t.call(s):e.get(s)),ct=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)};var rt=(s,e,t)=>(Ta(s,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Nc="modulepreload",Uc=function(s,e){return new URL(s,e).href},Ea={},Di=function(e,t,n){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=Uc(i,n),i in Ea)return;Ea[i]=!0;const r=i.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Nc,r||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),r)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wi="145",Qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fc=0,Aa=1,Oc=2,Sl=1,zc=2,ki=3,Cn=0,xt=1,bt=2,wt=0,_i=1,Is=2,Ra=3,Ca=4,Bc=5,mi=100,kc=101,Gc=102,La=103,Pa=104,Hc=200,Vc=201,Wc=202,Xc=203,bl=204,wl=205,jc=206,qc=207,Yc=208,Kc=209,$c=210,Zc=0,Jc=1,Qc=2,Gr=3,eu=4,tu=5,nu=6,iu=7,Tl=0,su=1,ru=2,un=0,au=1,ou=2,lu=3,cu=4,uu=5,El=300,vi=301,xi=302,Hr=303,Vr=304,Ks=306,yi=1e3,Ot=1001,Ns=1002,ht=1003,Wr=1004,Xr=1005,ot=1006,Al=1007,Ti=1008,Tt=1009,hu=1010,du=1011,Rl=1012,fu=1013,En=1014,An=1015,Wi=1016,pu=1017,mu=1018,Hn=1020,gu=1021,_u=1022,Xt=1023,vu=1024,xu=1025,Vn=1026,qn=1027,yu=1028,Mu=1029,Su=1030,bu=1031,wu=1033,nr=33776,ir=33777,sr=33778,rr=33779,Da=35840,Ia=35841,Na=35842,Ua=35843,Tu=36196,Fa=37492,Oa=37496,za=37808,Ba=37809,ka=37810,Ga=37811,Ha=37812,Va=37813,Wa=37814,Xa=37815,ja=37816,qa=37817,Ya=37818,Ka=37819,$a=37820,Za=37821,Ja=36492,Xi=2300,Mi=2301,ar=2302,Qa=2400,eo=2401,to=2402,Eu=2500,Au=1,Cl=2,hn=3e3,Se=3001,es=3200,Ll=3201,aa=0,Ru=1,on="srgb",kn="srgb-linear",or=7680,Cu=519,jr=35044,no="300 es",qr=1035;class $t{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let io=1234567;const Hi=Math.PI/180,ji=180/Math.PI;function jt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[s&255]+mt[s>>8&255]+mt[s>>16&255]+mt[s>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function _t(s,e,t){return Math.max(e,Math.min(t,s))}function oa(s,e){return(s%e+e)%e}function Lu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Pu(s,e,t){return s!==e?(t-s)/(e-s):0}function Vi(s,e,t){return(1-t)*s+t*e}function Du(s,e,t,n){return Vi(s,e,1-Math.exp(-t*n))}function Iu(s,e=1){return e-Math.abs(oa(s,e*2)-e)}function Nu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Uu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Fu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ou(s,e){return s+Math.random()*(e-s)}function zu(s){return s*(.5-Math.random())}function Bu(s){s!==void 0&&(io=s);let e=io+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ku(s){return s*Hi}function Gu(s){return s*ji}function Yr(s){return(s&s-1)===0&&s!==0}function Pl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Us(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hu(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function We(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Vu=Object.freeze({__proto__:null,DEG2RAD:Hi,RAD2DEG:ji,generateUUID:jt,clamp:_t,euclideanModulo:oa,mapLinear:Lu,inverseLerp:Pu,lerp:Vi,damp:Du,pingpong:Iu,smoothstep:Nu,smootherstep:Uu,randInt:Fu,randFloat:Ou,randFloatSpread:zu,seededRandom:Bu,degToRad:ku,radToDeg:Gu,isPowerOfTwo:Yr,ceilPowerOfTwo:Pl,floorPowerOfTwo:Us,setQuaternionFromProperEuler:Hu,normalize:We,denormalize:cn});class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],_=i[6],M=i[1],w=i[4],x=i[7],S=i[2],A=i[5],P=i[8];return r[0]=a*p+o*M+l*S,r[3]=a*f+o*w+l*A,r[6]=a*_+o*x+l*P,r[1]=c*p+u*M+h*S,r[4]=c*f+u*w+h*A,r[7]=c*_+u*x+h*P,r[2]=d*p+m*M+g*S,r[5]=d*f+m*w+g*A,r[8]=d*_+m*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,m=c*r-a*l,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*a)*p,e[3]=d*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-o*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*r+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Dl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const lr={[on]:{[kn]:Wn},[kn]:{[on]:Ps}},kt={legacyMode:!0,get workingColorSpace(){return kn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(lr[e]&&lr[e][t]!==void 0){const n=lr[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nt={r:0,g:0,b:0},Gt={h:0,s:0,l:0},as={h:0,s:0,l:0};function cr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function os(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=kn){return this.r=e,this.g=t,this.b=n,kt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=kn){if(e=oa(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=cr(a,r,e+1/3),this.g=cr(a,r,e),this.b=cr(a,r,e-1/3)}return kt.toWorkingColorSpace(this,i),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,kt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,kt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,kt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,kt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=on){const n=Il[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return kt.fromWorkingColorSpace(os(this,nt),e),_t(nt.r*255,0,255)<<16^_t(nt.g*255,0,255)<<8^_t(nt.b*255,0,255)<<0}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kn){kt.fromWorkingColorSpace(os(this,nt),t);const n=nt.r,i=nt.g,r=nt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=kn){return kt.fromWorkingColorSpace(os(this,nt),t),e.r=nt.r,e.g=nt.g,e.b=nt.b,e}getStyle(e=on){return kt.fromWorkingColorSpace(os(this,nt),e),e!==on?`color(${e} ${nt.r} ${nt.g} ${nt.b})`:`rgb(${nt.r*255|0},${nt.g*255|0},${nt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Gt),Gt.h+=e,Gt.s+=t,Gt.l+=n,this.setHSL(Gt.h,Gt.s,Gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gt),e.getHSL(as);const n=Vi(Gt.h,as.h,t),i=Vi(Gt.s,as.s,t),r=Vi(Gt.l,as.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ge.NAMES=Il;let ti;class Nl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=qi("canvas")),ti.width=e.width,ti.height=e.height;const n=ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ul{constructor(e=null){this.isSource=!0,this.uuid=jt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ur(i[a].image)):r.push(ur(i[a]))}else r=ur(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ur(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wu=0;class dt extends $t{constructor(e=dt.DEFAULT_IMAGE,t=dt.DEFAULT_MAPPING,n=Ot,i=Ot,r=ot,a=Ti,o=Xt,l=Tt,c=1,u=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=jt(),this.name="",this.source=new Ul(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==El)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yi:e.x=e.x-Math.floor(e.x);break;case Ot:e.x=e.x<0?0:1;break;case Ns:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yi:e.y=e.y-Math.floor(e.y);break;case Ot:e.y=e.y<0?0:1;break;case Ns:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}dt.DEFAULT_IMAGE=null;dt.DEFAULT_MAPPING=El;class Ve{constructor(e=0,t=0,n=0,i=1){Ve.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],p=l[2],f=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(m+1)/2,S=(_+1)/2,A=(u+d)/4,P=(h+p)/4,v=(g+f)/4;return w>x&&w>S?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=A/n,r=P/n):x>S?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=v/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=P/r,i=v/r),this.set(n,i,r,t),this}let M=Math.sqrt((f-g)*(f-g)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(h-p)/M,this.z=(d-u)/M,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ft extends $t{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ot,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ul(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fl extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xu extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],m=r[a+1],g=r[a+2],p=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==d||c!==m||u!==g){let f=1-o;const _=l*d+c*m+u*g+h*p,M=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const S=Math.sqrt(w),A=Math.atan2(S,_*M);f=Math.sin(f*A)/S,o=Math.sin(o*A)/S}const x=o*M;if(l=l*f+d*x,c=c*f+m*x,u=u*f+g*x,h=h*f+p*x,f===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-o*m,e[t+2]=c*g+u*m+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(so.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(so.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,d=-r*t-a*n-o*i;return this.x=c*l+d*-r+u*-o-h*-a,this.y=u*l+d*-a+h*-r-c*-o,this.z=h*l+d*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hr.copy(this).projectOnVector(e),this.sub(hr)}reflect(e){return this.sub(hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hr=new C,so=new dn;class Ei{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)Dn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Dn)}else n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox),dr.applyMatrix4(e.matrixWorld),this.union(dr);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),ls.subVectors(this.max,Ii),ni.subVectors(e.a,Ii),ii.subVectors(e.b,Ii),si.subVectors(e.c,Ii),mn.subVectors(ii,ni),gn.subVectors(si,ii),In.subVectors(ni,si);let t=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-In.z,In.y,mn.z,0,-mn.x,gn.z,0,-gn.x,In.z,0,-In.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-In.y,In.x,0];return!fr(t,ni,ii,si,ls)||(t=[1,0,0,0,1,0,0,0,1],!fr(t,ni,ii,si,ls))?!1:(cs.crossVectors(mn,gn),t=[cs.x,cs.y,cs.z],fr(t,ni,ii,si,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Dn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new C,new C,new C,new C,new C,new C,new C,new C],Dn=new C,dr=new Ei,ni=new C,ii=new C,si=new C,mn=new C,gn=new C,In=new C,Ii=new C,ls=new C,cs=new C,Nn=new C;function fr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Nn.fromArray(s,r);const o=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),u=n.dot(Nn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ju=new Ei,ro=new C,us=new C,pr=new C;class Ai{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ju.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(pr.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?us.set(0,0,1).multiplyScalar(e.radius):us.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ro.copy(e.center).add(us)),this.expandByPoint(ro.copy(e.center).sub(us)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new C,mr=new C,hs=new C,_n=new C,gr=new C,ds=new C,_r=new C;class la{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.direction).multiplyScalar(t).add(this.origin),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){mr.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(mr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hs),o=_n.dot(this.direction),l=-_n.dot(hs),c=_n.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const p=1/u;h*=p,d*=p,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(hs).multiplyScalar(d).add(mr),m}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),i=en.dot(en)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,i,r){gr.subVectors(t,e),ds.subVectors(n,e),_r.crossVectors(gr,ds);let a=this.direction.dot(_r),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,e);const l=o*this.direction.dot(ds.crossVectors(_n,ds));if(l<0)return null;const c=o*this.direction.dot(gr.cross(_n));if(c<0||l+c>a)return null;const u=-o*_n.dot(_r);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,l,c,u,h,d,m,g,p,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ri.setFromMatrixColumn(e,0).length(),r=1/ri.setFromMatrixColumn(e,1).length(),a=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*h,g=o*u,p=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-p*c,t[9]=-o*l,t[2]=p-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,g=c*u,p=c*h;t[0]=d+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,g=c*u,p=c*h;t[0]=d-p*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,g=o*u,p=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+p,t[1]=l*h,t[5]=p*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-p*h}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+p,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qu,e,Yu)}lookAt(e,t,n){const i=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),vn.crossVectors(n,Ct),vn.lengthSq()===0&&(Math.abs(n.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),vn.crossVectors(n,Ct)),vn.normalize(),fs.crossVectors(Ct,vn),i[0]=vn.x,i[4]=fs.x,i[8]=Ct.x,i[1]=vn.y,i[5]=fs.y,i[9]=Ct.y,i[2]=vn.z,i[6]=fs.z,i[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],M=n[3],w=n[7],x=n[11],S=n[15],A=i[0],P=i[4],v=i[8],E=i[12],I=i[1],q=i[5],K=i[9],B=i[13],D=i[2],k=i[6],Y=i[10],J=i[14],W=i[3],F=i[7],z=i[11],te=i[15];return r[0]=a*A+o*I+l*D+c*W,r[4]=a*P+o*q+l*k+c*F,r[8]=a*v+o*K+l*Y+c*z,r[12]=a*E+o*B+l*J+c*te,r[1]=u*A+h*I+d*D+m*W,r[5]=u*P+h*q+d*k+m*F,r[9]=u*v+h*K+d*Y+m*z,r[13]=u*E+h*B+d*J+m*te,r[2]=g*A+p*I+f*D+_*W,r[6]=g*P+p*q+f*k+_*F,r[10]=g*v+p*K+f*Y+_*z,r[14]=g*E+p*B+f*J+_*te,r[3]=M*A+w*I+x*D+S*W,r[7]=M*P+w*q+x*k+S*F,r[11]=M*v+w*K+x*Y+S*z,r[15]=M*E+w*B+x*J+S*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*m-n*l*m)+p*(+t*l*m-t*c*d+r*a*d-i*a*m+i*c*u-r*l*u)+f*(+t*c*h-t*o*m-r*a*h+n*a*m+r*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],_=e[15],M=h*f*c-p*d*c+p*l*m-o*f*m-h*l*_+o*d*_,w=g*d*c-u*f*c-g*l*m+a*f*m+u*l*_-a*d*_,x=u*p*c-g*h*c+g*o*m-a*p*m-u*o*_+a*h*_,S=g*h*l-u*p*l-g*o*d+a*p*d+u*o*f-a*h*f,A=t*M+n*w+i*x+r*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=M*P,e[1]=(p*d*r-h*f*r-p*i*m+n*f*m+h*i*_-n*d*_)*P,e[2]=(o*f*r-p*l*r+p*i*c-n*f*c-o*i*_+n*l*_)*P,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*m-n*l*m)*P,e[4]=w*P,e[5]=(u*f*r-g*d*r+g*i*m-t*f*m-u*i*_+t*d*_)*P,e[6]=(g*l*r-a*f*r-g*i*c+t*f*c+a*i*_-t*l*_)*P,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*m+t*l*m)*P,e[8]=x*P,e[9]=(g*h*r-u*p*r-g*n*m+t*p*m+u*n*_-t*h*_)*P,e[10]=(a*p*r-g*o*r+g*n*c-t*p*c-a*n*_+t*o*_)*P,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*m-t*o*m)*P,e[12]=S*P,e[13]=(u*p*i-g*h*i+g*n*d-t*p*d-u*n*f+t*h*f)*P,e[14]=(g*o*i-a*p*i-g*n*l+t*p*l+a*n*f-t*o*f)*P,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,m=r*u,g=r*h,p=a*u,f=a*h,_=o*h,M=l*c,w=l*u,x=l*h,S=n.x,A=n.y,P=n.z;return i[0]=(1-(p+_))*S,i[1]=(m+x)*S,i[2]=(g-w)*S,i[3]=0,i[4]=(m-x)*A,i[5]=(1-(d+_))*A,i[6]=(f+M)*A,i[7]=0,i[8]=(g+w)*P,i[9]=(f-M)*P,i[10]=(1-(d+p))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ri.set(i[0],i[1],i[2]).length();const a=ri.set(i[4],i[5],i[6]).length(),o=ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ht.copy(this);const c=1/r,u=1/a,h=1/o;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=h,Ht.elements[9]*=h,Ht.elements[10]*=h,t.setFromRotationMatrix(Ht),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),h=(t+e)*l,d=(n+i)*c,m=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ri=new C,Ht=new Pe,qu=new C(0,0,0),Yu=new C(1,1,1),vn=new C,fs=new C,Ct=new C,ao=new Pe,oo=new dn;class ts{constructor(e=0,t=0,n=0,i=ts.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ao.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ao,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oo.setFromEuler(this),this.setFromQuaternion(oo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ts.DefaultOrder="XYZ";ts.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ku=0;const lo=new C,ai=new dn,tn=new Pe,ps=new C,Ni=new C,$u=new C,Zu=new dn,co=new C(1,0,0),uo=new C(0,1,0),ho=new C(0,0,1),Ju={type:"added"},fo={type:"removed"};class Ye extends $t{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=jt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DefaultUp.clone();const e=new C,t=new ts,n=new dn,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new zt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=Ye.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ye.DefaultMatrixWorldAutoUpdate,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(co,e)}rotateY(e){return this.rotateOnAxis(uo,e)}rotateZ(e){return this.rotateOnAxis(ho,e)}translateOnAxis(e,t){return lo.copy(e).applyQuaternion(this.quaternion),this.position.add(lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(co,e)}translateY(e){return this.translateOnAxis(uo,e)}translateZ(e){return this.translateOnAxis(ho,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ps.copy(e):ps.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Ni,ps,this.up):tn.lookAt(ps,Ni,this.up),this.quaternion.setFromRotationMatrix(tn),i&&(tn.extractRotation(i.matrixWorld),ai.setFromRotationMatrix(tn),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ju)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(fo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,$u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Zu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ye.DefaultUp=new C(0,1,0);Ye.DefaultMatrixAutoUpdate=!0;Ye.DefaultMatrixWorldAutoUpdate=!0;const Vt=new C,nn=new C,vr=new C,sn=new C,oi=new C,li=new C,po=new C,xr=new C,yr=new C,Mr=new C;class ln{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vt.subVectors(e,t),i.cross(Vt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Vt.subVectors(i,t),nn.subVectors(n,t),vr.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(nn),l=Vt.dot(vr),c=nn.dot(nn),u=nn.dot(vr),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const d=1/h,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,sn),sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,sn),l.set(0,0),l.addScaledVector(r,sn.x),l.addScaledVector(a,sn.y),l.addScaledVector(o,sn.z),l}static isFrontFacing(e,t,n,i){return Vt.subVectors(n,t),nn.subVectors(e,t),Vt.cross(nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Vt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ln.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;oi.subVectors(i,n),li.subVectors(r,n),xr.subVectors(e,n);const l=oi.dot(xr),c=li.dot(xr);if(l<=0&&c<=0)return t.copy(n);yr.subVectors(e,i);const u=oi.dot(yr),h=li.dot(yr);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(oi,a);Mr.subVectors(e,r);const m=oi.dot(Mr),g=li.dot(Mr);if(g>=0&&m<=g)return t.copy(r);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(li,o);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return po.subVectors(r,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(po,o);const _=1/(f+p+d);return a=p*_,o=d*_,t.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qu=0;class Bt extends $t{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=jt(),this.name="",this.type="Material",this.blending=_i,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bl,this.blendDst=wl,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rn extends Bt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Je=new C,ms=new de;class Qe{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=jr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ms.fromBufferAttribute(this,t),ms.applyMatrix3(e),this.setXY(t,ms.x,ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix3(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix4(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.applyNormalMatrix(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.transformDirection(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),i=We(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),i=We(i,this.array),r=We(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class zl extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bl extends Qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends Qe{constructor(e,t,n){super(new Float32Array(e),t,n)}}let eh=0;const Ft=new Pe,Sr=new Ye,ci=new C,Lt=new Ei,Ui=new Ei,at=new C;class Et extends $t{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=jt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dl(e)?Bl:zl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Lt.setFromBufferAttribute(r),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(at.addVectors(Lt.min,Ui.min),Lt.expandByPoint(at),at.addVectors(Lt.max,Ui.max),Lt.expandByPoint(at)):(Lt.expandByPoint(Ui.min),Lt.expandByPoint(Ui.max))}Lt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)at.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(at));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)at.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),at.add(ci)),i=Math.max(i,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new C,u[I]=new C;const h=new C,d=new C,m=new C,g=new de,p=new de,f=new de,_=new C,M=new C;function w(I,q,K){h.fromArray(i,I*3),d.fromArray(i,q*3),m.fromArray(i,K*3),g.fromArray(a,I*2),p.fromArray(a,q*2),f.fromArray(a,K*2),d.sub(h),m.sub(h),p.sub(g),f.sub(g);const B=1/(p.x*f.y-f.x*p.y);!isFinite(B)||(_.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(B),M.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(B),c[I].add(_),c[q].add(_),c[K].add(_),u[I].add(M),u[q].add(M),u[K].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let I=0,q=x.length;I<q;++I){const K=x[I],B=K.start,D=K.count;for(let k=B,Y=B+D;k<Y;k+=3)w(n[k+0],n[k+1],n[k+2])}const S=new C,A=new C,P=new C,v=new C;function E(I){P.fromArray(r,I*3),v.copy(P);const q=c[I];S.copy(q),S.sub(P.multiplyScalar(P.dot(q))).normalize(),A.crossVectors(v,q);const B=A.dot(u[I])<0?-1:1;l[I*4]=S.x,l[I*4+1]=S.y,l[I*4+2]=S.z,l[I*4+3]=B}for(let I=0,q=x.length;I<q;++I){const K=x[I],B=K.start,D=K.count;for(let k=B,Y=B+D;k<Y;k+=3)E(n[k+0]),E(n[k+1]),E(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,f),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,f=l.length;p<f;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let _=0;_<u;_++)d[g++]=c[m++]}return new Qe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const mo=new Pe,ui=new la,br=new Ai,xn=new C,yn=new C,Mn=new C,wr=new C,Tr=new C,Er=new C,gs=new C,_s=new C,vs=new C,xs=new de,ys=new de,Ms=new de,Ar=new C,Ss=new C;class Pt extends Ye{constructor(e=new Et,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),e.ray.intersectsSphere(br)===!1)||(mo.copy(r).invert(),ui.copy(e.ray).applyMatrix4(mo),n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const _=m[p],M=i[_.materialIndex],w=Math.max(_.start,g.start),x=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let S=w,A=x;S<A;S+=3){const P=o.getX(S),v=o.getX(S+1),E=o.getX(S+2);a=bs(this,M,e,ui,l,c,u,h,d,P,v,E),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),f=Math.min(o.count,g.start+g.count);for(let _=p,M=f;_<M;_+=3){const w=o.getX(_),x=o.getX(_+1),S=o.getX(_+2);a=bs(this,i,e,ui,l,c,u,h,d,w,x,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const _=m[p],M=i[_.materialIndex],w=Math.max(_.start,g.start),x=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let S=w,A=x;S<A;S+=3){const P=S,v=S+1,E=S+2;a=bs(this,M,e,ui,l,c,u,h,d,P,v,E),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let _=p,M=f;_<M;_+=3){const w=_,x=_+1,S=_+2;a=bs(this,i,e,ui,l,c,u,h,d,w,x,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function th(s,e,t,n,i,r,a,o){let l;if(e.side===xt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side!==bt,o),l===null)return null;Ss.copy(o),Ss.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ss);return c<t.near||c>t.far?null:{distance:c,point:Ss.clone(),object:s}}function bs(s,e,t,n,i,r,a,o,l,c,u,h){xn.fromBufferAttribute(i,c),yn.fromBufferAttribute(i,u),Mn.fromBufferAttribute(i,h);const d=s.morphTargetInfluences;if(r&&d){gs.set(0,0,0),_s.set(0,0,0),vs.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const f=d[g],_=r[g];f!==0&&(wr.fromBufferAttribute(_,c),Tr.fromBufferAttribute(_,u),Er.fromBufferAttribute(_,h),a?(gs.addScaledVector(wr,f),_s.addScaledVector(Tr,f),vs.addScaledVector(Er,f)):(gs.addScaledVector(wr.sub(xn),f),_s.addScaledVector(Tr.sub(yn),f),vs.addScaledVector(Er.sub(Mn),f)))}xn.add(gs),yn.add(_s),Mn.add(vs)}s.isSkinnedMesh&&(s.boneTransform(c,xn),s.boneTransform(u,yn),s.boneTransform(h,Mn));const m=th(s,e,t,n,xn,yn,Mn,Ar);if(m){o&&(xs.fromBufferAttribute(o,c),ys.fromBufferAttribute(o,u),Ms.fromBufferAttribute(o,h),m.uv=ln.getUV(Ar,xn,yn,Mn,xs,ys,Ms,new de)),l&&(xs.fromBufferAttribute(l,c),ys.fromBufferAttribute(l,u),Ms.fromBufferAttribute(l,h),m.uv2=ln.getUV(Ar,xn,yn,Mn,xs,ys,Ms,new de));const g={a:c,b:u,c:h,normal:new C,materialIndex:0};ln.getNormal(xn,yn,Mn,g.normal),m.face=g}return m}class ns extends Et{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function g(p,f,_,M,w,x,S,A,P,v,E){const I=x/P,q=S/v,K=x/2,B=S/2,D=A/2,k=P+1,Y=v+1;let J=0,W=0;const F=new C;for(let z=0;z<Y;z++){const te=z*q-B;for(let $=0;$<k;$++){const ie=$*I-K;F[p]=ie*M,F[f]=te*w,F[_]=D,c.push(F.x,F.y,F.z),F[p]=0,F[f]=0,F[_]=A>0?1:-1,u.push(F.x,F.y,F.z),h.push($/P),h.push(1-z/v),J+=1}}for(let z=0;z<v;z++)for(let te=0;te<P;te++){const $=d+te+k*z,ie=d+te+k*(z+1),ue=d+(te+1)+k*(z+1),ye=d+(te+1)+k*z;l.push($,ie,ye),l.push(ie,ue,ye),W+=6}o.addGroup(m,W,E),m+=W,d+=J}}static fromJSON(e){return new ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Si(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function gt(s){const e={};for(let t=0;t<s.length;t++){const n=Si(s[t]);for(const i in n)e[i]=n[i]}return e}function nh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}const kl={clone:Si,merge:gt};var ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pt extends Bt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ih,this.fragmentShader=sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ca extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vt extends ca{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=90,di=1;class rh extends Ye{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new vt(hi,di,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new C(1,0,0)),this.add(i);const r=new vt(hi,di,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new C(-1,0,0)),this.add(r);const a=new vt(hi,di,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new C(0,1,0)),this.add(a);const o=new vt(hi,di,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new C(0,-1,0)),this.add(o);const l=new vt(hi,di,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new C(0,0,1)),this.add(l);const c=new vt(hi,di,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new C(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=un,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Gl extends dt{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:vi,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ah extends ft{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ns(5,5,5),r=new pt({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:wt});r.uniforms.tEquirect.value=t;const a=new Pt(i,r),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=ot),new rh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Rr=new C,oh=new C,lh=new zt;class Fn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Rr.subVectors(n,t).cross(oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Rr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lh.getNormalMatrix(e),i=this.coplanarPoint(Rr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Ai,ws=new C;class ua{constructor(e=new Fn,t=new Fn,n=new Fn,i=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],M=n[14],w=n[15];return t[0].setComponents(o-i,h-l,p-d,w-f).normalize(),t[1].setComponents(o+i,h+l,p+d,w+f).normalize(),t[2].setComponents(o+r,h+c,p+m,w+_).normalize(),t[3].setComponents(o-r,h-c,p-m,w-_).normalize(),t[4].setComponents(o-a,h-u,p-g,w-M).normalize(),t[5].setComponents(o+a,h+u,p+g,w+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ws.x=i.normal.x>0?e.max.x:e.min.x,ws.y=i.normal.y>0?e.max.y:e.min.y,ws.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hl(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ch(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,m=u.updateRange;s.bindBuffer(h,c),m.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class ha extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,m=[],g=[],p=[],f=[];for(let _=0;_<u;_++){const M=_*d-a;for(let w=0;w<c;w++){const x=w*h-r;g.push(x,-M,0),p.push(0,0,1),f.push(w/o),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<o;M++){const w=M+c*_,x=M+c*(_+1),S=M+1+c*(_+1),A=M+1+c*_;m.push(w,x,A),m.push(x,S,A)}this.setIndex(m),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(p,3)),this.setAttribute("uv",new St(f,2))}static fromJSON(e){return new ha(e.width,e.height,e.widthSegments,e.heightSegments)}}var uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gh="vec3 transformed = vec3( position );",_h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,xh=`#ifdef USE_IRIDESCENCE
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
#endif`,yh=`#ifdef USE_BUMPMAP
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
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ch=`#define PI 3.141592653589793
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
}`,Lh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
#endif`,Ph=`vec3 transformedNormal = objectNormal;
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
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ih=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zh=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Bh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kh=`#ifdef USE_ENVMAP
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
#endif`,Gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
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
#endif`,Vh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qh=`#ifdef USE_GRADIENTMAP
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
}`,Yh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$h=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Jh=`uniform bool receiveShadow;
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
#endif`,Qh=`#if defined( USE_ENVMAP )
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
#endif`,ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,sd=`PhysicalMaterial material;
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
#endif`,rd=`struct PhysicalMaterial {
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
}`,ad=`
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,od=`#if defined( RE_IndirectDiffuse )
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
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yd=`#ifdef USE_MORPHNORMALS
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
#endif`,Md=`#ifdef USE_MORPHTARGETS
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
#endif`,Sd=`#ifdef USE_MORPHTARGETS
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
#endif`,bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,wd=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rd=`#ifdef USE_NORMALMAP
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
#endif`,Cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Wd=`float getShadowMask() {
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
}`,Xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,Kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qd=`#ifdef USE_TRANSMISSION
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
#endif`,ef=`#ifdef USE_TRANSMISSION
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
#endif`,tf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,nf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,sf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,rf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,af=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,of=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ff=`#include <common>
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
}`,pf=`#if DEPTH_PACKING == 3200
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
}`,mf=`#define DISTANCE
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
}`,gf=`#define DISTANCE
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xf=`uniform float scale;
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
}`,yf=`uniform vec3 diffuse;
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
}`,Mf=`#include <common>
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
}`,Sf=`uniform vec3 diffuse;
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
}`,bf=`#define LAMBERT
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
}`,wf=`#define LAMBERT
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
}`,Tf=`#define MATCAP
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
}`,Ef=`#define MATCAP
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
}`,Af=`#define NORMAL
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
}`,Rf=`#define NORMAL
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
}`,Cf=`#define PHONG
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
}`,Lf=`#define PHONG
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
}`,Pf=`#define STANDARD
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
}`,Df=`#define STANDARD
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
}`,If=`#define TOON
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
}`,Nf=`#define TOON
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
}`,Uf=`uniform float size;
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
}`,Ff=`uniform vec3 diffuse;
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
}`,Of=`#include <common>
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
}`,zf=`uniform vec3 color;
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
}`,Bf=`uniform float rotation;
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
}`,kf=`uniform vec3 diffuse;
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
}`,Re={alphamap_fragment:uh,alphamap_pars_fragment:hh,alphatest_fragment:dh,alphatest_pars_fragment:fh,aomap_fragment:ph,aomap_pars_fragment:mh,begin_vertex:gh,beginnormal_vertex:_h,bsdfs:vh,iridescence_fragment:xh,bumpmap_pars_fragment:yh,clipping_planes_fragment:Mh,clipping_planes_pars_fragment:Sh,clipping_planes_pars_vertex:bh,clipping_planes_vertex:wh,color_fragment:Th,color_pars_fragment:Eh,color_pars_vertex:Ah,color_vertex:Rh,common:Ch,cube_uv_reflection_fragment:Lh,defaultnormal_vertex:Ph,displacementmap_pars_vertex:Dh,displacementmap_vertex:Ih,emissivemap_fragment:Nh,emissivemap_pars_fragment:Uh,encodings_fragment:Fh,encodings_pars_fragment:Oh,envmap_fragment:zh,envmap_common_pars_fragment:Bh,envmap_pars_fragment:kh,envmap_pars_vertex:Gh,envmap_physical_pars_fragment:Qh,envmap_vertex:Hh,fog_vertex:Vh,fog_pars_vertex:Wh,fog_fragment:Xh,fog_pars_fragment:jh,gradientmap_pars_fragment:qh,lightmap_fragment:Yh,lightmap_pars_fragment:Kh,lights_lambert_fragment:$h,lights_lambert_pars_fragment:Zh,lights_pars_begin:Jh,lights_toon_fragment:ed,lights_toon_pars_fragment:td,lights_phong_fragment:nd,lights_phong_pars_fragment:id,lights_physical_fragment:sd,lights_physical_pars_fragment:rd,lights_fragment_begin:ad,lights_fragment_maps:od,lights_fragment_end:ld,logdepthbuf_fragment:cd,logdepthbuf_pars_fragment:ud,logdepthbuf_pars_vertex:hd,logdepthbuf_vertex:dd,map_fragment:fd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:vd,morphcolor_vertex:xd,morphnormal_vertex:yd,morphtarget_pars_vertex:Md,morphtarget_vertex:Sd,normal_fragment_begin:bd,normal_fragment_maps:wd,normal_pars_fragment:Td,normal_pars_vertex:Ed,normal_vertex:Ad,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Pd,iridescence_pars_fragment:Dd,output_fragment:Id,packing:Nd,premultiplied_alpha_fragment:Ud,project_vertex:Fd,dithering_fragment:Od,dithering_pars_fragment:zd,roughnessmap_fragment:Bd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Gd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Vd,shadowmask_pars_fragment:Wd,skinbase_vertex:Xd,skinning_pars_vertex:jd,skinning_vertex:qd,skinnormal_vertex:Yd,specularmap_fragment:Kd,specularmap_pars_fragment:$d,tonemapping_fragment:Zd,tonemapping_pars_fragment:Jd,transmission_fragment:Qd,transmission_pars_fragment:ef,uv_pars_fragment:tf,uv_pars_vertex:nf,uv_vertex:sf,uv2_pars_fragment:rf,uv2_pars_vertex:af,uv2_vertex:of,worldpos_vertex:lf,background_vert:cf,background_frag:uf,cube_vert:hf,cube_frag:df,depth_vert:ff,depth_frag:pf,distanceRGBA_vert:mf,distanceRGBA_frag:gf,equirect_vert:_f,equirect_frag:vf,linedashed_vert:xf,linedashed_frag:yf,meshbasic_vert:Mf,meshbasic_frag:Sf,meshlambert_vert:bf,meshlambert_frag:wf,meshmatcap_vert:Tf,meshmatcap_frag:Ef,meshnormal_vert:Af,meshnormal_frag:Rf,meshphong_vert:Cf,meshphong_frag:Lf,meshphysical_vert:Pf,meshphysical_frag:Df,meshtoon_vert:If,meshtoon_frag:Nf,points_vert:Uf,points_frag:Ff,shadow_vert:Of,shadow_frag:zf,sprite_vert:Bf,sprite_frag:kf},ne={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zt},uv2Transform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}}},Wt={basic:{uniforms:gt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:gt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ge(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:gt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:gt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:gt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ge(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:gt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:gt([ne.points,ne.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:gt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:gt([ne.common,ne.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:gt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:gt([ne.sprite,ne.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:gt([ne.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:gt([ne.common,ne.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:gt([ne.lights,ne.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Wt.physical={uniforms:gt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new de(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function Gf(s,e,t,n,i,r){const a=new ge(0);let o=i===!0?0:1,l,c,u=null,h=0,d=null;function m(p,f){let _=!1,M=f.isScene===!0?f.background:null;M&&M.isTexture&&(M=e.get(M));const w=s.xr,x=w.getSession&&w.getSession();x&&x.environmentBlendMode==="additive"&&(M=null),M===null?g(a,o):M&&M.isColor&&(g(M,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ks)?(c===void 0&&(c=new Pt(new ns(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:Si(Wt.cube.uniforms),vertexShader:Wt.cube.vertexShader,fragmentShader:Wt.cube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,(u!==M||h!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Pt(new ha(2,2),new pt({name:"BackgroundMaterial",uniforms:Si(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,r)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),o=f,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function Hf(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=f(null);let c=l,u=!1;function h(D,k,Y,J,W){let F=!1;if(a){const z=p(J,Y,k);c!==z&&(c=z,m(c.object)),F=_(D,J,Y,W),F&&M(D,J,Y,W)}else{const z=k.wireframe===!0;(c.geometry!==J.id||c.program!==Y.id||c.wireframe!==z)&&(c.geometry=J.id,c.program=Y.id,c.wireframe=z,F=!0)}W!==null&&t.update(W,34963),(F||u)&&(u=!1,v(D,k,Y,J),W!==null&&s.bindBuffer(34963,t.get(W).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function p(D,k,Y){const J=Y.wireframe===!0;let W=o[D.id];W===void 0&&(W={},o[D.id]=W);let F=W[k.id];F===void 0&&(F={},W[k.id]=F);let z=F[J];return z===void 0&&(z=f(d()),F[J]=z),z}function f(D){const k=[],Y=[],J=[];for(let W=0;W<i;W++)k[W]=0,Y[W]=0,J[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:J,object:D,attributes:{},index:null}}function _(D,k,Y,J){const W=c.attributes,F=k.attributes;let z=0;const te=Y.getAttributes();for(const $ in te)if(te[$].location>=0){const ue=W[$];let ye=F[$];if(ye===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor)),ue===void 0||ue.attribute!==ye||ye&&ue.data!==ye.data)return!0;z++}return c.attributesNum!==z||c.index!==J}function M(D,k,Y,J){const W={},F=k.attributes;let z=0;const te=Y.getAttributes();for(const $ in te)if(te[$].location>=0){let ue=F[$];ue===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor));const ye={};ye.attribute=ue,ue&&ue.data&&(ye.data=ue.data),W[$]=ye,z++}c.attributes=W,c.attributesNum=z,c.index=J}function w(){const D=c.newAttributes;for(let k=0,Y=D.length;k<Y;k++)D[k]=0}function x(D){S(D,0)}function S(D,k){const Y=c.newAttributes,J=c.enabledAttributes,W=c.attributeDivisors;Y[D]=1,J[D]===0&&(s.enableVertexAttribArray(D),J[D]=1),W[D]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),W[D]=k)}function A(){const D=c.newAttributes,k=c.enabledAttributes;for(let Y=0,J=k.length;Y<J;Y++)k[Y]!==D[Y]&&(s.disableVertexAttribArray(Y),k[Y]=0)}function P(D,k,Y,J,W,F){n.isWebGL2===!0&&(Y===5124||Y===5125)?s.vertexAttribIPointer(D,k,Y,W,F):s.vertexAttribPointer(D,k,Y,J,W,F)}function v(D,k,Y,J){if(n.isWebGL2===!1&&(D.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const W=J.attributes,F=Y.getAttributes(),z=k.defaultAttributeValues;for(const te in F){const $=F[te];if($.location>=0){let ie=W[te];if(ie===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),ie!==void 0){const ue=ie.normalized,ye=ie.itemSize,X=t.get(ie);if(X===void 0)continue;const Fe=X.buffer,ve=X.type,Me=X.bytesPerElement;if(ie.isInterleavedBufferAttribute){const ce=ie.data,ze=ce.stride,Ee=ie.offset;if(ce.isInstancedInterleavedBuffer){for(let me=0;me<$.locationSize;me++)S($.location+me,ce.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let me=0;me<$.locationSize;me++)x($.location+me);s.bindBuffer(34962,Fe);for(let me=0;me<$.locationSize;me++)P($.location+me,ye/$.locationSize,ve,ue,ze*Me,(Ee+ye/$.locationSize*me)*Me)}else{if(ie.isInstancedBufferAttribute){for(let ce=0;ce<$.locationSize;ce++)S($.location+ce,ie.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ce=0;ce<$.locationSize;ce++)x($.location+ce);s.bindBuffer(34962,Fe);for(let ce=0;ce<$.locationSize;ce++)P($.location+ce,ye/$.locationSize,ve,ue,ye*Me,ye/$.locationSize*ce*Me)}}else if(z!==void 0){const ue=z[te];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv($.location,ue);break;case 3:s.vertexAttrib3fv($.location,ue);break;case 4:s.vertexAttrib4fv($.location,ue);break;default:s.vertexAttrib1fv($.location,ue)}}}}A()}function E(){K();for(const D in o){const k=o[D];for(const Y in k){const J=k[Y];for(const W in J)g(J[W].object),delete J[W];delete k[Y]}delete o[D]}}function I(D){if(o[D.id]===void 0)return;const k=o[D.id];for(const Y in k){const J=k[Y];for(const W in J)g(J[W].object),delete J[W];delete k[Y]}delete o[D.id]}function q(D){for(const k in o){const Y=o[k];if(Y[D.id]===void 0)continue;const J=Y[D.id];for(const W in J)g(J[W].object),delete J[W];delete Y[D.id]}}function K(){B(),u=!0,c!==l&&(c=l,m(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:B,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfProgram:q,initAttributes:w,enableAttribute:x,disableUnusedAttributes:A}}function Vf(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Wf(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),f=s.getParameter(36347),_=s.getParameter(36348),M=s.getParameter(36349),w=d>0,x=a||e.has("OES_texture_float"),S=w&&x,A=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:w,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:A}}function Xf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Fn,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,d,m){const g=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,_=s.get(h);if(!i||g===null||g.length===0||r&&!f)r?u(null):c();else{const M=r?0:n,w=M*4;let x=_.clippingState||null;l.value=x,x=u(g,d,w,m);for(let S=0;S!==w;++S)x[S]=t[S];_.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=l.value,g!==!0||f===null){const _=m+p*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<_)&&(f=new Float32Array(_));for(let w=0,x=m;w!==p;++w,x+=4)a.copy(h[w]).applyMatrix4(M,o),a.normal.toArray(f,x),f[x+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function jf(s){let e=new WeakMap;function t(a,o){return o===Hr?a.mapping=vi:o===Vr&&(a.mapping=xi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Hr||o===Vr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ah(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class da extends ca{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gi=4,go=[.125,.215,.35,.446,.526,.582],Bn=20,Cr=new da,_o=new ge;let Lr=null;const On=(1+Math.sqrt(5))/2,pi=1/On,vo=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,On,pi),new C(0,On,-pi),new C(pi,0,On),new C(-pi,0,On),new C(On,pi,0),new C(-On,pi,0)];class xo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Lr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=So(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lr),e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ot,minFilter:ot,generateMipmaps:!1,type:Wi,format:Xt,encoding:hn,depthBuffer:!1},i=yo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qf(r)),this._blurMaterial=Yf(r,e,t)}return i}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,n,i){const o=new vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_o),u.toneMapping=un,u.autoClear=!1;const m=new Rn({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),g=new Pt(new ns,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(_o),p=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):M===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const w=this._cubeSize;Ts(i,M*w,_>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===vi||e.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=So()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=vo[(i-1)%vo.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pt(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),p=r/g,f=isFinite(r)?1+Math.floor(u*p):Bn;f>Bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Bn}`);const _=[];let M=0;for(let P=0;P<Bn;++P){const v=P/p,E=Math.exp(-v*v/2);_.push(E),P===0?M+=E:P<f&&(M+=2*E)}for(let P=0;P<_.length;P++)_[P]=_[P]/M;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const x=this._sizeLods[i],S=3*x*(i>w-gi?i-w+gi:0),A=4*(this._cubeSize-x);Ts(t,S,A,3*x,2*x),l.setRenderTarget(t),l.render(h,Cr)}}function qf(s){const e=[],t=[],n=[];let i=s;const r=s-gi+1+go.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-gi?l=go[a-s+gi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,f=2,_=1,M=new Float32Array(p*g*m),w=new Float32Array(f*g*m),x=new Float32Array(_*g*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,v=A>2?0:-1,E=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];M.set(E,p*g*A),w.set(d,f*g*A);const I=[A,A,A,A,A,A];x.set(I,_*g*A)}const S=new Et;S.setAttribute("position",new Qe(M,p)),S.setAttribute("uv",new Qe(w,f)),S.setAttribute("faceIndex",new Qe(x,_)),e.push(S),i>gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yo(s,e,t){const n=new ft(s,e,t);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Yf(s,e,t){const n=new Float32Array(Bn),i=new C(0,1,0);return new pt({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fa(),fragmentShader:`

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
		`,blending:wt,depthTest:!1,depthWrite:!1})}function Mo(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:wt,depthTest:!1,depthWrite:!1})}function So(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}function Kf(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Hr||l===Vr,u=l===vi||l===xi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new xo(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new xo(s));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function $f(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zf(s,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const M=m.array;p=m.version;for(let w=0,x=M.length;w<x;w+=3){const S=M[w+0],A=M[w+1],P=M[w+2];d.push(S,A,A,P,P,S)}}else{const M=g.array;p=g.version;for(let w=0,x=M.length/3-1;w<x;w+=3){const S=w+0,A=w+1,P=w+2;d.push(S,A,A,P,P,S)}}const f=new(Dl(d)?Bl:zl)(d,1);f.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,f)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Jf(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){s.drawElements(r,m,o,d*l),t.update(m,r,1)}function h(d,m,g){if(g===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,m,o,d*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Qf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ep(s,e){return s[0]-e[0]}function tp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function np(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ve,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let f=r.get(u);if(f===void 0||f.count!==p){let k=function(){B.dispose(),r.delete(u),u.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();const w=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let E=0;w===!0&&(E=1),x===!0&&(E=2),S===!0&&(E=3);let I=u.attributes.position.count*E,q=1;I>e.maxTextureSize&&(q=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const K=new Float32Array(I*q*4*p),B=new Fl(K,I,q,p);B.type=An,B.needsUpdate=!0;const D=E*4;for(let Y=0;Y<p;Y++){const J=A[Y],W=P[Y],F=v[Y],z=I*q*4*Y;for(let te=0;te<J.count;te++){const $=te*D;w===!0&&(a.fromBufferAttribute(J,te),K[z+$+0]=a.x,K[z+$+1]=a.y,K[z+$+2]=a.z,K[z+$+3]=0),x===!0&&(a.fromBufferAttribute(W,te),K[z+$+4]=a.x,K[z+$+5]=a.y,K[z+$+6]=a.z,K[z+$+7]=0),S===!0&&(a.fromBufferAttribute(F,te),K[z+$+8]=a.x,K[z+$+9]=a.y,K[z+$+10]=a.z,K[z+$+11]=F.itemSize===4?a.w:1)}}f={count:p,texture:B,size:new de(I,q)},r.set(u,f),u.addEventListener("dispose",k)}let _=0;for(let w=0;w<m.length;w++)_+=m[w];const M=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",m),d.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const g=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let x=0;x<g;x++)p[x]=[x,0];n[u.id]=p}for(let x=0;x<g;x++){const S=p[x];S[0]=x,S[1]=m[x]}p.sort(tp);for(let x=0;x<8;x++)x<g&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(ep);const f=u.morphAttributes.position,_=u.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const S=o[x],A=S[0],P=S[1];A!==Number.MAX_SAFE_INTEGER&&P?(f&&u.getAttribute("morphTarget"+x)!==f[A]&&u.setAttribute("morphTarget"+x,f[A]),_&&u.getAttribute("morphNormal"+x)!==_[A]&&u.setAttribute("morphNormal"+x,_[A]),i[x]=P,M+=P):(f&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),_&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const w=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",w),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function ip(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Vl=new dt,Wl=new Fl,Xl=new Xu,jl=new Gl,bo=[],wo=[],To=new Float32Array(16),Eo=new Float32Array(9),Ao=new Float32Array(4);function Ri(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=bo[i];if(r===void 0&&(r=new Float32Array(i),bo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function it(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function st(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function $s(s,e){let t=wo[e];t===void 0&&(t=new Int32Array(e),wo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function sp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function rp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;s.uniform2fv(this.addr,e),st(t,e)}}function ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;s.uniform3fv(this.addr,e),st(t,e)}}function op(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;s.uniform4fv(this.addr,e),st(t,e)}}function lp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(it(t,n))return;Ao.set(n),s.uniformMatrix2fv(this.addr,!1,Ao),st(t,n)}}function cp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(it(t,n))return;Eo.set(n),s.uniformMatrix3fv(this.addr,!1,Eo),st(t,n)}}function up(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(it(t,n))return;To.set(n),s.uniformMatrix4fv(this.addr,!1,To),st(t,n)}}function hp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function dp(s,e){const t=this.cache;it(t,e)||(s.uniform2iv(this.addr,e),st(t,e))}function fp(s,e){const t=this.cache;it(t,e)||(s.uniform3iv(this.addr,e),st(t,e))}function pp(s,e){const t=this.cache;it(t,e)||(s.uniform4iv(this.addr,e),st(t,e))}function mp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function gp(s,e){const t=this.cache;it(t,e)||(s.uniform2uiv(this.addr,e),st(t,e))}function _p(s,e){const t=this.cache;it(t,e)||(s.uniform3uiv(this.addr,e),st(t,e))}function vp(s,e){const t=this.cache;it(t,e)||(s.uniform4uiv(this.addr,e),st(t,e))}function xp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Vl,i)}function yp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xl,i)}function Mp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jl,i)}function Sp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wl,i)}function bp(s){switch(s){case 5126:return sp;case 35664:return rp;case 35665:return ap;case 35666:return op;case 35674:return lp;case 35675:return cp;case 35676:return up;case 5124:case 35670:return hp;case 35667:case 35671:return dp;case 35668:case 35672:return fp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return gp;case 36295:return _p;case 36296:return vp;case 35678:case 36198:case 36298:case 36306:case 35682:return xp;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return Sp}}function wp(s,e){s.uniform1fv(this.addr,e)}function Tp(s,e){const t=Ri(e,this.size,2);s.uniform2fv(this.addr,t)}function Ep(s,e){const t=Ri(e,this.size,3);s.uniform3fv(this.addr,t)}function Ap(s,e){const t=Ri(e,this.size,4);s.uniform4fv(this.addr,t)}function Rp(s,e){const t=Ri(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Cp(s,e){const t=Ri(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Lp(s,e){const t=Ri(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Pp(s,e){s.uniform1iv(this.addr,e)}function Dp(s,e){s.uniform2iv(this.addr,e)}function Ip(s,e){s.uniform3iv(this.addr,e)}function Np(s,e){s.uniform4iv(this.addr,e)}function Up(s,e){s.uniform1uiv(this.addr,e)}function Fp(s,e){s.uniform2uiv(this.addr,e)}function Op(s,e){s.uniform3uiv(this.addr,e)}function zp(s,e){s.uniform4uiv(this.addr,e)}function Bp(s,e,t){const n=this.cache,i=e.length,r=$s(t,i);it(n,r)||(s.uniform1iv(this.addr,r),st(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Vl,r[a])}function kp(s,e,t){const n=this.cache,i=e.length,r=$s(t,i);it(n,r)||(s.uniform1iv(this.addr,r),st(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Xl,r[a])}function Gp(s,e,t){const n=this.cache,i=e.length,r=$s(t,i);it(n,r)||(s.uniform1iv(this.addr,r),st(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||jl,r[a])}function Hp(s,e,t){const n=this.cache,i=e.length,r=$s(t,i);it(n,r)||(s.uniform1iv(this.addr,r),st(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Wl,r[a])}function Vp(s){switch(s){case 5126:return wp;case 35664:return Tp;case 35665:return Ep;case 35666:return Ap;case 35674:return Rp;case 35675:return Cp;case 35676:return Lp;case 5124:case 35670:return Pp;case 35667:case 35671:return Dp;case 35668:case 35672:return Ip;case 35669:case 35673:return Np;case 5125:return Up;case 36294:return Fp;case 36295:return Op;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Hp}}class Wp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=bp(t.type)}}class Xp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Vp(t.type)}}class jp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Pr=/(\w+)(\])?(\[|\.)?/g;function Ro(s,e){s.seq.push(e),s.map[e.id]=e}function qp(s,e,t){const n=s.name,i=n.length;for(Pr.lastIndex=0;;){const r=Pr.exec(n),a=Pr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ro(t,c===void 0?new Wp(o,s,e):new Xp(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new jp(o),Ro(t,h)),t=h}}}class Ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);qp(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Co(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Yp=0;function Kp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function $p(s){switch(s){case hn:return["Linear","( value )"];case Se:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Lo(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Kp(s.getShaderSource(e),a)}else return i}function Zp(s,e){const t=$p(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Jp(s,e){let t;switch(e){case au:t="Linear";break;case ou:t="Reinhard";break;case lu:t="OptimizedCineon";break;case cu:t="ACESFilmic";break;case uu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qp(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gi).join(`
`)}function em(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tm(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Gi(s){return s!==""}function Po(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Do(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(s){return s.replace(nm,im)}function im(s,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Kr(t)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Io(s){return s.replace(sm,rm)}function rm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function No(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function am(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function om(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vi:case xi:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xi:e="ENVMAP_MODE_REFRACTION";break}return e}function cm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Tl:e="ENVMAP_BLENDING_MULTIPLY";break;case su:e="ENVMAP_BLENDING_MIX";break;case ru:e="ENVMAP_BLENDING_ADD";break}return e}function um(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hm(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=am(t),c=om(t),u=lm(t),h=cm(t),d=um(t),m=t.isWebGL2?"":Qp(t),g=em(r),p=i.createProgram();let f,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Gi).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(Gi).join(`
`),_.length>0&&(_+=`
`)):(f=[No(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),_=[m,No(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Re.tonemapping_pars_fragment:"",t.toneMapping!==un?Jp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,Zp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gi).join(`
`)),a=Kr(a),a=Po(a,t),a=Do(a,t),o=Kr(o),o=Po(o,t),o=Do(o,t),a=Io(a),o=Io(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=M+f+a,x=M+_+o,S=Co(i,35633,w),A=Co(i,35632,x);if(i.attachShader(p,S),i.attachShader(p,A),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(S).trim(),q=i.getShaderInfoLog(A).trim();let K=!0,B=!0;if(i.getProgramParameter(p,35714)===!1){K=!1;const D=Lo(i,S,"vertex"),k=Lo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+D+`
`+k)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(I===""||q==="")&&(B=!1);B&&(this.diagnostics={runnable:K,programLog:E,vertexShader:{log:I,prefix:f},fragmentShader:{log:q,prefix:_}})}i.deleteShader(S),i.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new Ds(i,p)),P};let v;return this.getAttributes=function(){return v===void 0&&(v=tm(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Yp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=A,this}let dm=0;class fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pm(e),t.set(e,n)),n}}class pm{constructor(e){this.id=dm++,this.code=e,this.usedTimes=0}}function mm(s,e,t,n,i,r,a){const o=new Ol,l=new fm,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,E,I,q,K){const B=q.fog,D=K.geometry,k=v.isMeshStandardMaterial?q.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),J=!!Y&&Y.mapping===Ks?Y.image.height:null,W=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const F=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,z=F!==void 0?F.length:0;let te=0;D.morphAttributes.position!==void 0&&(te=1),D.morphAttributes.normal!==void 0&&(te=2),D.morphAttributes.color!==void 0&&(te=3);let $,ie,ue,ye;if(W){const ze=Wt[W];$=ze.vertexShader,ie=ze.fragmentShader}else $=v.vertexShader,ie=v.fragmentShader,l.update(v),ue=l.getVertexShaderID(v),ye=l.getFragmentShaderID(v);const X=s.getRenderTarget(),Fe=v.alphaTest>0,ve=v.clearcoat>0,Me=v.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:v.type,vertexShader:$,fragmentShader:ie,defines:v.defines,customVertexShaderID:ue,customFragmentShaderID:ye,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:d,outputEncoding:X===null?s.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:hn,map:!!v.map,matcap:!!v.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:J,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Ru,tangentSpaceNormalMap:v.normalMapType===aa,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Se,clearcoat:ve,clearcoatMap:ve&&!!v.clearcoatMap,clearcoatRoughnessMap:ve&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!v.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!v.iridescenceMap,iridescenceThicknessMap:Me&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===_i,alphaMap:!!v.alphaMap,alphaTest:Fe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!B,useFog:v.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:un,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bt,flipSided:v.side===xt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(_(E,v),M(E,v),E.push(s.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function _(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.physicallyCorrectLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),v.push(o.mask)}function w(v){const E=g[v.type];let I;if(E){const q=Wt[E];I=kl.clone(q.uniforms)}else I=v.uniforms;return I}function x(v,E){let I;for(let q=0,K=c.length;q<K;q++){const B=c[q];if(B.cacheKey===E){I=B,++I.usedTimes;break}}return I===void 0&&(I=new hm(s,E,v,r),c.push(I)),I}function S(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:w,acquireProgram:x,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:P}}function gm(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function _m(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Uo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fo(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,m,g,p,f){let _=s[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:f},s[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=f),e++,_}function o(h,d,m,g,p,f){const _=a(h,d,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(h,d,m,g,p,f){const _=a(h,d,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||_m),n.length>1&&n.sort(d||Uo),i.length>1&&i.sort(d||Uo)}function u(){for(let h=e,d=s.length;h<d;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function vm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Fo,s.set(n,[a])):i>=r.length?(a=new Fo,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function xm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ge};break;case"SpotLight":t={position:new C,direction:new C,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function ym(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Mm=0;function Sm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bm(s,e){const t=new xm,n=ym(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new C);const r=new C,a=new Pe,o=new Pe;function l(u,h){let d=0,m=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let p=0,f=0,_=0,M=0,w=0,x=0,S=0,A=0,P=0,v=0;u.sort(Sm);const E=h!==!0?Math.PI:1;for(let q=0,K=u.length;q<K;q++){const B=u[q],D=B.color,k=B.intensity,Y=B.distance,J=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=D.r*k*E,m+=D.g*k*E,g+=D.b*k*E;else if(B.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(B.sh.coefficients[W],k);else if(B.isDirectionalLight){const W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*E),B.castShadow){const F=B.shadow,z=n.get(B);z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=B.shadow.matrix,x++}i.directional[p]=W,p++}else if(B.isSpotLight){const W=t.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(D).multiplyScalar(k*E),W.distance=Y,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,i.spot[_]=W;const F=B.shadow;if(B.map&&(i.spotLightMap[P]=B.map,P++,F.updateMatrices(B),B.castShadow&&v++),i.spotLightMatrix[_]=F.matrix,B.castShadow){const z=n.get(B);z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=J,A++}_++}else if(B.isRectAreaLight){const W=t.get(B);W.color.copy(D).multiplyScalar(k),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),i.rectArea[M]=W,M++}else if(B.isPointLight){const W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*E),W.distance=B.distance,W.decay=B.decay,B.castShadow){const F=B.shadow,z=n.get(B);z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,z.shadowCameraNear=F.camera.near,z.shadowCameraFar=F.camera.far,i.pointShadow[f]=z,i.pointShadowMap[f]=J,i.pointShadowMatrix[f]=B.shadow.matrix,S++}i.point[f]=W,f++}else if(B.isHemisphereLight){const W=t.get(B);W.skyColor.copy(B.color).multiplyScalar(k*E),W.groundColor.copy(B.groundColor).multiplyScalar(k*E),i.hemi[w]=W,w++}}M>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==p||I.pointLength!==f||I.spotLength!==_||I.rectAreaLength!==M||I.hemiLength!==w||I.numDirectionalShadows!==x||I.numPointShadows!==S||I.numSpotShadows!==A||I.numSpotMaps!==P)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=M,i.point.length=f,i.hemi.length=w,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=A+P-v,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=v,I.directionalLength=p,I.pointLength=f,I.spotLength=_,I.rectAreaLength=M,I.hemiLength=w,I.numDirectionalShadows=x,I.numPointShadows=S,I.numSpotShadows=A,I.numSpotMaps=P,i.version=Mm++)}function c(u,h){let d=0,m=0,g=0,p=0,f=0;const _=h.matrixWorldInverse;for(let M=0,w=u.length;M<w;M++){const x=u[M];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),d++}else if(x.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),o.identity(),a.copy(x.matrixWorld),a.premultiply(_),o.extractRotation(a),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),m++}else if(x.isHemisphereLight){const S=i.hemi[f];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:i}}function Oo(s,e){const t=new bm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function wm(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Oo(s,e),t.set(r,[l])):a>=o.length?(l=new Oo(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ql extends Bt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=es,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yl extends Bt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Em=`uniform sampler2D shadow_pass;
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
}`;function Am(s,e,t){let n=new ua;const i=new de,r=new de,a=new Ve,o=new ql({depthPacking:Ll}),l=new Yl,c={},u=t.maxTextureSize,h={0:xt,1:Cn,2:bt},d=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Tm,fragmentShader:Em}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Pt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sl,this.render=function(x,S,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||x.length===0)return;const P=s.getRenderTarget(),v=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),I=s.state;I.setBlending(wt),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let q=0,K=x.length;q<K;q++){const B=x[q],D=B.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const k=D.getFrameExtents();if(i.multiply(k),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/k.x),i.x=r.x*k.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/k.y),i.y=r.y*k.y,D.mapSize.y=r.y)),D.map===null){const J=this.type!==ki?{minFilter:ht,magFilter:ht}:{};D.map=new ft(i.x,i.y,J),D.map.texture.name=B.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const Y=D.getViewportCount();for(let J=0;J<Y;J++){const W=D.getViewport(J);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),I.viewport(a),D.updateMatrices(B,J),n=D.getFrustum(),w(S,A,D.camera,B,this.type)}D.isPointLightShadow!==!0&&this.type===ki&&_(D,A),D.needsUpdate=!1}f.needsUpdate=!1,s.setRenderTarget(P,v,E)};function _(x,S){const A=e.update(p);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new ft(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(S,null,A,d,p,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(S,null,A,m,p,null)}function M(x,S,A,P,v,E){let I=null;const q=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(q!==void 0?I=q:I=A.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const K=I.uuid,B=S.uuid;let D=c[K];D===void 0&&(D={},c[K]=D);let k=D[B];k===void 0&&(k=I.clone(),D[B]=k),I=k}return I.visible=S.visible,I.wireframe=S.wireframe,E===ki?I.side=S.shadowSide!==null?S.shadowSide:S.side:I.side=S.shadowSide!==null?S.shadowSide:h[S.side],I.alphaMap=S.alphaMap,I.alphaTest=S.alphaTest,I.clipShadows=S.clipShadows,I.clippingPlanes=S.clippingPlanes,I.clipIntersection=S.clipIntersection,I.displacementMap=S.displacementMap,I.displacementScale=S.displacementScale,I.displacementBias=S.displacementBias,I.wireframeLinewidth=S.wireframeLinewidth,I.linewidth=S.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(A.matrixWorld),I.nearDistance=P,I.farDistance=v),I}function w(x,S,A,P,v){if(x.visible===!1)return;if(x.layers.test(S.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&v===ki)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);const q=e.update(x),K=x.material;if(Array.isArray(K)){const B=q.groups;for(let D=0,k=B.length;D<k;D++){const Y=B[D],J=K[Y.materialIndex];if(J&&J.visible){const W=M(x,J,P,A.near,A.far,v);s.renderBufferDirect(A,null,q,W,x,Y)}}}else if(K.visible){const B=M(x,K,P,A.near,A.far,v);s.renderBufferDirect(A,null,q,B,x,null)}}const I=x.children;for(let q=0,K=I.length;q<K;q++)w(I[q],S,A,P,v)}}function Rm(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const ae=new Ve;let ee=null;const j=new Ve(0,0,0,0);return{setMask:function(se){ee!==se&&!L&&(s.colorMask(se,se,se,se),ee=se)},setLocked:function(se){L=se},setClear:function(se,xe,Xe,Ke,fn){fn===!0&&(se*=Ke,xe*=Ke,Xe*=Ke),ae.set(se,xe,Xe,Ke),j.equals(ae)===!1&&(s.clearColor(se,xe,Xe,Ke),j.copy(ae))},reset:function(){L=!1,ee=null,j.set(-1,0,0,0)}}}function r(){let L=!1,ae=null,ee=null,j=null;return{setTest:function(se){se?Fe(2929):ve(2929)},setMask:function(se){ae!==se&&!L&&(s.depthMask(se),ae=se)},setFunc:function(se){if(ee!==se){switch(se){case Zc:s.depthFunc(512);break;case Jc:s.depthFunc(519);break;case Qc:s.depthFunc(513);break;case Gr:s.depthFunc(515);break;case eu:s.depthFunc(514);break;case tu:s.depthFunc(518);break;case nu:s.depthFunc(516);break;case iu:s.depthFunc(517);break;default:s.depthFunc(515)}ee=se}},setLocked:function(se){L=se},setClear:function(se){j!==se&&(s.clearDepth(se),j=se)},reset:function(){L=!1,ae=null,ee=null,j=null}}}function a(){let L=!1,ae=null,ee=null,j=null,se=null,xe=null,Xe=null,Ke=null,fn=null;return{setTest:function(je){L||(je?Fe(2960):ve(2960))},setMask:function(je){ae!==je&&!L&&(s.stencilMask(je),ae=je)},setFunc:function(je,Jt,Nt){(ee!==je||j!==Jt||se!==Nt)&&(s.stencilFunc(je,Jt,Nt),ee=je,j=Jt,se=Nt)},setOp:function(je,Jt,Nt){(xe!==je||Xe!==Jt||Ke!==Nt)&&(s.stencilOp(je,Jt,Nt),xe=je,Xe=Jt,Ke=Nt)},setLocked:function(je){L=je},setClear:function(je){fn!==je&&(s.clearStencil(je),fn=je)},reset:function(){L=!1,ae=null,ee=null,j=null,se=null,xe=null,Xe=null,Ke=null,fn=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,p=[],f=null,_=!1,M=null,w=null,x=null,S=null,A=null,P=null,v=null,E=!1,I=null,q=null,K=null,B=null,D=null;const k=s.getParameter(35661);let Y=!1,J=0;const W=s.getParameter(7938);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=J>=2);let F=null,z={};const te=s.getParameter(3088),$=s.getParameter(2978),ie=new Ve().fromArray(te),ue=new Ve().fromArray($);function ye(L,ae,ee){const j=new Uint8Array(4),se=s.createTexture();s.bindTexture(L,se),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let xe=0;xe<ee;xe++)s.texImage2D(ae+xe,0,6408,1,1,0,6408,5121,j);return se}const X={};X[3553]=ye(3553,3553,1),X[34067]=ye(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(2929),l.setFunc(Gr),et(!1),At(Aa),Fe(2884),$e(wt);function Fe(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function ve(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Me(L,ae){return m[L]!==ae?(s.bindFramebuffer(L,ae),m[L]=ae,n&&(L===36009&&(m[36160]=ae),L===36160&&(m[36009]=ae)),!0):!1}function ce(L,ae){let ee=p,j=!1;if(L)if(ee=g.get(ae),ee===void 0&&(ee=[],g.set(ae,ee)),L.isWebGLMultipleRenderTargets){const se=L.texture;if(ee.length!==se.length||ee[0]!==36064){for(let xe=0,Xe=se.length;xe<Xe;xe++)ee[xe]=36064+xe;ee.length=se.length,j=!0}}else ee[0]!==36064&&(ee[0]=36064,j=!0);else ee[0]!==1029&&(ee[0]=1029,j=!0);j&&(t.isWebGL2?s.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function ze(L){return f!==L?(s.useProgram(L),f=L,!0):!1}const Ee={[mi]:32774,[kc]:32778,[Gc]:32779};if(n)Ee[La]=32775,Ee[Pa]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ee[La]=L.MIN_EXT,Ee[Pa]=L.MAX_EXT)}const me={[Hc]:0,[Vc]:1,[Wc]:768,[bl]:770,[$c]:776,[Yc]:774,[jc]:772,[Xc]:769,[wl]:771,[Kc]:775,[qc]:773};function $e(L,ae,ee,j,se,xe,Xe,Ke){if(L===wt){_===!0&&(ve(3042),_=!1);return}if(_===!1&&(Fe(3042),_=!0),L!==Bc){if(L!==M||Ke!==E){if((w!==mi||A!==mi)&&(s.blendEquation(32774),w=mi,A=mi),Ke)switch(L){case _i:s.blendFuncSeparate(1,771,1,771);break;case Is:s.blendFunc(1,1);break;case Ra:s.blendFuncSeparate(0,769,0,1);break;case Ca:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case _i:s.blendFuncSeparate(770,771,1,771);break;case Is:s.blendFunc(770,1);break;case Ra:s.blendFuncSeparate(0,769,0,1);break;case Ca:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,S=null,P=null,v=null,M=L,E=Ke}return}se=se||ae,xe=xe||ee,Xe=Xe||j,(ae!==w||se!==A)&&(s.blendEquationSeparate(Ee[ae],Ee[se]),w=ae,A=se),(ee!==x||j!==S||xe!==P||Xe!==v)&&(s.blendFuncSeparate(me[ee],me[j],me[xe],me[Xe]),x=ee,S=j,P=xe,v=Xe),M=L,E=null}function lt(L,ae){L.side===bt?ve(2884):Fe(2884);let ee=L.side===xt;ae&&(ee=!ee),et(ee),L.blending===_i&&L.transparent===!1?$e(wt):$e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const j=L.stencilWrite;c.setTest(j),j&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Fe(32926):ve(32926)}function et(L){I!==L&&(L?s.frontFace(2304):s.frontFace(2305),I=L)}function At(L){L!==Fc?(Fe(2884),L!==q&&(L===Aa?s.cullFace(1029):L===Oc?s.cullFace(1028):s.cullFace(1032))):ve(2884),q=L}function tt(L){L!==K&&(Y&&s.lineWidth(L),K=L)}function Be(L,ae,ee){L?(Fe(32823),(B!==ae||D!==ee)&&(s.polygonOffset(ae,ee),B=ae,D=ee)):ve(32823)}function Dt(L){L?Fe(3089):ve(3089)}function It(L){L===void 0&&(L=33984+k-1),F!==L&&(s.activeTexture(L),F=L)}function T(L,ae,ee){ee===void 0&&(F===null?ee=33984+k-1:ee=F);let j=z[ee];j===void 0&&(j={type:void 0,texture:void 0},z[ee]=j),(j.type!==L||j.texture!==ae)&&(F!==ee&&(s.activeTexture(ee),F=ee),s.bindTexture(L,ae||X[L]),j.type=L,j.texture=ae)}function y(){const L=z[F];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function R(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function U(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(L){ie.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ie.copy(L))}function le(L){ue.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function fe(L,ae){let ee=h.get(ae);ee===void 0&&(ee=new WeakMap,h.set(ae,ee));let j=ee.get(L);j===void 0&&(j=s.getUniformBlockIndex(ae,L.name),ee.set(L,j))}function be(L,ae){const j=h.get(ae).get(L);u.get(L)!==j&&(s.uniformBlockBinding(ae,j,L.__bindingPointIndex),u.set(L,j))}function Ue(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},F=null,z={},m={},g=new WeakMap,p=[],f=null,_=!1,M=null,w=null,x=null,S=null,A=null,P=null,v=null,E=!1,I=null,q=null,K=null,B=null,D=null,ie.set(0,0,s.canvas.width,s.canvas.height),ue.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Fe,disable:ve,bindFramebuffer:Me,drawBuffers:ce,useProgram:ze,setBlending:$e,setMaterial:lt,setFlipSided:et,setCullFace:At,setLineWidth:tt,setPolygonOffset:Be,setScissorTest:Dt,activeTexture:It,bindTexture:T,unbindTexture:y,compressedTexImage2D:G,texImage2D:U,texImage3D:oe,updateUBOMapping:fe,uniformBlockBinding:be,texStorage2D:_e,texStorage3D:R,texSubImage2D:Z,texSubImage3D:Q,compressedTexSubImage2D:re,scissor:he,viewport:le,reset:Ue}}function Cm(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,y){return _?new OffscreenCanvas(T,y):qi("canvas")}function w(T,y,G,Z){let Q=1;if((T.width>Z||T.height>Z)&&(Q=Z/Math.max(T.width,T.height)),Q<1||y===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const re=y?Us:Math.floor,_e=re(Q*T.width),R=re(Q*T.height);p===void 0&&(p=M(_e,R));const U=G?M(_e,R):p;return U.width=_e,U.height=R,U.getContext("2d").drawImage(T,0,0,_e,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+_e+"x"+R+")."),U}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function x(T){return Yr(T.width)&&Yr(T.height)}function S(T){return o?!1:T.wrapS!==Ot||T.wrapT!==Ot||T.minFilter!==ht&&T.minFilter!==ot}function A(T,y){return T.generateMipmaps&&y&&T.minFilter!==ht&&T.minFilter!==ot}function P(T){s.generateMipmap(T)}function v(T,y,G,Z,Q=!1){if(o===!1)return y;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re=y;return y===6403&&(G===5126&&(re=33326),G===5131&&(re=33325),G===5121&&(re=33321)),y===33319&&(G===5126&&(re=33328),G===5131&&(re=33327),G===5121&&(re=33323)),y===6408&&(G===5126&&(re=34836),G===5131&&(re=34842),G===5121&&(re=Z===Se&&Q===!1?35907:32856),G===32819&&(re=32854),G===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function E(T,y,G){return A(T,G)===!0||T.isFramebufferTexture&&T.minFilter!==ht&&T.minFilter!==ot?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function I(T){return T===ht||T===Wr||T===Xr?9728:9729}function q(T){const y=T.target;y.removeEventListener("dispose",q),B(y),y.isVideoTexture&&g.delete(y)}function K(T){const y=T.target;y.removeEventListener("dispose",K),k(y)}function B(T){const y=n.get(T);if(y.__webglInit===void 0)return;const G=T.source,Z=f.get(G);if(Z){const Q=Z[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(T),Object.keys(Z).length===0&&f.delete(G)}n.remove(T)}function D(T){const y=n.get(T);s.deleteTexture(y.__webglTexture);const G=T.source,Z=f.get(G);delete Z[y.__cacheKey],a.memory.textures--}function k(T){const y=T.texture,G=n.get(T),Z=n.get(y);if(Z.__webglTexture!==void 0&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)s.deleteFramebuffer(G.__webglFramebuffer[Q]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[Q]);else{if(s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let Q=0;Q<G.__webglColorRenderbuffer.length;Q++)G.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[Q]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Q=0,re=y.length;Q<re;Q++){const _e=n.get(y[Q]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(y[Q])}n.remove(y),n.remove(T)}let Y=0;function J(){Y=0}function W(){const T=Y;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Y+=1,T}function F(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.encoding),y.join()}function z(T,y){const G=n.get(T);if(T.isVideoTexture&&Dt(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(G,T,y);return}}t.bindTexture(3553,G.__webglTexture,33984+y)}function te(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){ve(G,T,y);return}t.bindTexture(35866,G.__webglTexture,33984+y)}function $(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){ve(G,T,y);return}t.bindTexture(32879,G.__webglTexture,33984+y)}function ie(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){Me(G,T,y);return}t.bindTexture(34067,G.__webglTexture,33984+y)}const ue={[yi]:10497,[Ot]:33071,[Ns]:33648},ye={[ht]:9728,[Wr]:9984,[Xr]:9986,[ot]:9729,[Al]:9985,[Ti]:9987};function X(T,y,G){if(G?(s.texParameteri(T,10242,ue[y.wrapS]),s.texParameteri(T,10243,ue[y.wrapT]),(T===32879||T===35866)&&s.texParameteri(T,32882,ue[y.wrapR]),s.texParameteri(T,10240,ye[y.magFilter]),s.texParameteri(T,10241,ye[y.minFilter])):(s.texParameteri(T,10242,33071),s.texParameteri(T,10243,33071),(T===32879||T===35866)&&s.texParameteri(T,32882,33071),(y.wrapS!==Ot||y.wrapT!==Ot)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,10240,I(y.magFilter)),s.texParameteri(T,10241,I(y.minFilter)),y.minFilter!==ht&&y.minFilter!==ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(y.type===An&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===Wi&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(T,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Fe(T,y){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",q));const Z=y.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const re=F(y);if(re!==T.__cacheKey){Q[re]===void 0&&(Q[re]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[re].usedTimes++;const _e=Q[T.__cacheKey];_e!==void 0&&(Q[T.__cacheKey].usedTimes--,_e.usedTimes===0&&D(y)),T.__cacheKey=re,T.__webglTexture=Q[re].texture}return G}function ve(T,y,G){let Z=3553;y.isDataArrayTexture&&(Z=35866),y.isData3DTexture&&(Z=32879);const Q=Fe(T,y),re=y.source;t.bindTexture(Z,T.__webglTexture,33984+G);const _e=n.get(re);if(re.version!==_e.__version||Q===!0){t.activeTexture(33984+G),s.pixelStorei(37440,y.flipY),s.pixelStorei(37441,y.premultiplyAlpha),s.pixelStorei(3317,y.unpackAlignment),s.pixelStorei(37443,0);const R=S(y)&&x(y.image)===!1;let U=w(y.image,R,!1,u);U=It(y,U);const oe=x(U)||o,he=r.convert(y.format,y.encoding);let le=r.convert(y.type),fe=v(y.internalFormat,he,le,y.encoding,y.isVideoTexture);X(Z,y,oe);let be;const Ue=y.mipmaps,L=o&&y.isVideoTexture!==!0,ae=_e.__version===void 0||Q===!0,ee=E(y,U,oe);if(y.isDepthTexture)fe=6402,o?y.type===An?fe=36012:y.type===En?fe=33190:y.type===Hn?fe=35056:fe=33189:y.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Vn&&fe===6402&&y.type!==Rl&&y.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=En,le=r.convert(y.type)),y.format===qn&&fe===6402&&(fe=34041,y.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Hn,le=r.convert(y.type))),ae&&(L?t.texStorage2D(3553,1,fe,U.width,U.height):t.texImage2D(3553,0,fe,U.width,U.height,0,he,le,null));else if(y.isDataTexture)if(Ue.length>0&&oe){L&&ae&&t.texStorage2D(3553,ee,fe,Ue[0].width,Ue[0].height);for(let j=0,se=Ue.length;j<se;j++)be=Ue[j],L?t.texSubImage2D(3553,j,0,0,be.width,be.height,he,le,be.data):t.texImage2D(3553,j,fe,be.width,be.height,0,he,le,be.data);y.generateMipmaps=!1}else L?(ae&&t.texStorage2D(3553,ee,fe,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,he,le,U.data)):t.texImage2D(3553,0,fe,U.width,U.height,0,he,le,U.data);else if(y.isCompressedTexture){L&&ae&&t.texStorage2D(3553,ee,fe,Ue[0].width,Ue[0].height);for(let j=0,se=Ue.length;j<se;j++)be=Ue[j],y.format!==Xt?he!==null?L?t.compressedTexSubImage2D(3553,j,0,0,be.width,be.height,he,be.data):t.compressedTexImage2D(3553,j,fe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage2D(3553,j,0,0,be.width,be.height,he,le,be.data):t.texImage2D(3553,j,fe,be.width,be.height,0,he,le,be.data)}else if(y.isDataArrayTexture)L?(ae&&t.texStorage3D(35866,ee,fe,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,he,le,U.data)):t.texImage3D(35866,0,fe,U.width,U.height,U.depth,0,he,le,U.data);else if(y.isData3DTexture)L?(ae&&t.texStorage3D(32879,ee,fe,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,he,le,U.data)):t.texImage3D(32879,0,fe,U.width,U.height,U.depth,0,he,le,U.data);else if(y.isFramebufferTexture){if(ae)if(L)t.texStorage2D(3553,ee,fe,U.width,U.height);else{let j=U.width,se=U.height;for(let xe=0;xe<ee;xe++)t.texImage2D(3553,xe,fe,j,se,0,he,le,null),j>>=1,se>>=1}}else if(Ue.length>0&&oe){L&&ae&&t.texStorage2D(3553,ee,fe,Ue[0].width,Ue[0].height);for(let j=0,se=Ue.length;j<se;j++)be=Ue[j],L?t.texSubImage2D(3553,j,0,0,he,le,be):t.texImage2D(3553,j,fe,he,le,be);y.generateMipmaps=!1}else L?(ae&&t.texStorage2D(3553,ee,fe,U.width,U.height),t.texSubImage2D(3553,0,0,0,he,le,U)):t.texImage2D(3553,0,fe,he,le,U);A(y,oe)&&P(Z),_e.__version=re.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Me(T,y,G){if(y.image.length!==6)return;const Z=Fe(T,y),Q=y.source;t.bindTexture(34067,T.__webglTexture,33984+G);const re=n.get(Q);if(Q.version!==re.__version||Z===!0){t.activeTexture(33984+G),s.pixelStorei(37440,y.flipY),s.pixelStorei(37441,y.premultiplyAlpha),s.pixelStorei(3317,y.unpackAlignment),s.pixelStorei(37443,0);const _e=y.isCompressedTexture||y.image[0].isCompressedTexture,R=y.image[0]&&y.image[0].isDataTexture,U=[];for(let j=0;j<6;j++)!_e&&!R?U[j]=w(y.image[j],!1,!0,c):U[j]=R?y.image[j].image:y.image[j],U[j]=It(y,U[j]);const oe=U[0],he=x(oe)||o,le=r.convert(y.format,y.encoding),fe=r.convert(y.type),be=v(y.internalFormat,le,fe,y.encoding),Ue=o&&y.isVideoTexture!==!0,L=re.__version===void 0||Z===!0;let ae=E(y,oe,he);X(34067,y,he);let ee;if(_e){Ue&&L&&t.texStorage2D(34067,ae,be,oe.width,oe.height);for(let j=0;j<6;j++){ee=U[j].mipmaps;for(let se=0;se<ee.length;se++){const xe=ee[se];y.format!==Xt?le!==null?Ue?t.compressedTexSubImage2D(34069+j,se,0,0,xe.width,xe.height,le,xe.data):t.compressedTexImage2D(34069+j,se,be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(34069+j,se,0,0,xe.width,xe.height,le,fe,xe.data):t.texImage2D(34069+j,se,be,xe.width,xe.height,0,le,fe,xe.data)}}}else{ee=y.mipmaps,Ue&&L&&(ee.length>0&&ae++,t.texStorage2D(34067,ae,be,U[0].width,U[0].height));for(let j=0;j<6;j++)if(R){Ue?t.texSubImage2D(34069+j,0,0,0,U[j].width,U[j].height,le,fe,U[j].data):t.texImage2D(34069+j,0,be,U[j].width,U[j].height,0,le,fe,U[j].data);for(let se=0;se<ee.length;se++){const Xe=ee[se].image[j].image;Ue?t.texSubImage2D(34069+j,se+1,0,0,Xe.width,Xe.height,le,fe,Xe.data):t.texImage2D(34069+j,se+1,be,Xe.width,Xe.height,0,le,fe,Xe.data)}}else{Ue?t.texSubImage2D(34069+j,0,0,0,le,fe,U[j]):t.texImage2D(34069+j,0,be,le,fe,U[j]);for(let se=0;se<ee.length;se++){const xe=ee[se];Ue?t.texSubImage2D(34069+j,se+1,0,0,le,fe,xe.image[j]):t.texImage2D(34069+j,se+1,be,le,fe,xe.image[j])}}}A(y,he)&&P(34067),re.__version=Q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ce(T,y,G,Z,Q){const re=r.convert(G.format,G.encoding),_e=r.convert(G.type),R=v(G.internalFormat,re,_e,G.encoding);n.get(y).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,R,y.width,y.height,y.depth,0,re,_e,null):t.texImage2D(Q,0,R,y.width,y.height,0,re,_e,null)),t.bindFramebuffer(36160,T),Be(y)?d.framebufferTexture2DMultisampleEXT(36160,Z,Q,n.get(G).__webglTexture,0,tt(y)):s.framebufferTexture2D(36160,Z,Q,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(T,y,G){if(s.bindRenderbuffer(36161,T),y.depthBuffer&&!y.stencilBuffer){let Z=33189;if(G||Be(y)){const Q=y.depthTexture;Q&&Q.isDepthTexture&&(Q.type===An?Z=36012:Q.type===En&&(Z=33190));const re=tt(y);Be(y)?d.renderbufferStorageMultisampleEXT(36161,re,Z,y.width,y.height):s.renderbufferStorageMultisample(36161,re,Z,y.width,y.height)}else s.renderbufferStorage(36161,Z,y.width,y.height);s.framebufferRenderbuffer(36160,36096,36161,T)}else if(y.depthBuffer&&y.stencilBuffer){const Z=tt(y);G&&Be(y)===!1?s.renderbufferStorageMultisample(36161,Z,35056,y.width,y.height):Be(y)?d.renderbufferStorageMultisampleEXT(36161,Z,35056,y.width,y.height):s.renderbufferStorage(36161,34041,y.width,y.height),s.framebufferRenderbuffer(36160,33306,36161,T)}else{const Z=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0;Q<Z.length;Q++){const re=Z[Q],_e=r.convert(re.format,re.encoding),R=r.convert(re.type),U=v(re.internalFormat,_e,R,re.encoding),oe=tt(y);G&&Be(y)===!1?s.renderbufferStorageMultisample(36161,oe,U,y.width,y.height):Be(y)?d.renderbufferStorageMultisampleEXT(36161,oe,U,y.width,y.height):s.renderbufferStorage(36161,U,y.width,y.height)}}s.bindRenderbuffer(36161,null)}function Ee(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const Z=n.get(y.depthTexture).__webglTexture,Q=tt(y);if(y.depthTexture.format===Vn)Be(y)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,Q):s.framebufferTexture2D(36160,36096,3553,Z,0);else if(y.depthTexture.format===qn)Be(y)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,Q):s.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function me(T){const y=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ee(y.__webglFramebuffer,T)}else if(G){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(36160,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]=s.createRenderbuffer(),ze(y.__webglDepthbuffer[Z],T,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),ze(y.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function $e(T,y,G){const Z=n.get(T);y!==void 0&&ce(Z.__webglFramebuffer,T,T.texture,36064,3553),G!==void 0&&me(T)}function lt(T){const y=T.texture,G=n.get(T),Z=n.get(y);T.addEventListener("dispose",K),T.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=y.version,a.memory.textures++);const Q=T.isWebGLCubeRenderTarget===!0,re=T.isWebGLMultipleRenderTargets===!0,_e=x(T)||o;if(Q){G.__webglFramebuffer=[];for(let R=0;R<6;R++)G.__webglFramebuffer[R]=s.createFramebuffer()}else{if(G.__webglFramebuffer=s.createFramebuffer(),re)if(i.drawBuffers){const R=T.texture;for(let U=0,oe=R.length;U<oe;U++){const he=n.get(R[U]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Be(T)===!1){const R=re?y:[y];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let U=0;U<R.length;U++){const oe=R[U];G.__webglColorRenderbuffer[U]=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer[U]);const he=r.convert(oe.format,oe.encoding),le=r.convert(oe.type),fe=v(oe.internalFormat,he,le,oe.encoding,T.isXRRenderTarget===!0),be=tt(T);s.renderbufferStorageMultisample(36161,be,fe,T.width,T.height),s.framebufferRenderbuffer(36160,36064+U,36161,G.__webglColorRenderbuffer[U])}s.bindRenderbuffer(36161,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,Z.__webglTexture),X(34067,y,_e);for(let R=0;R<6;R++)ce(G.__webglFramebuffer[R],T,y,36064,34069+R);A(y,_e)&&P(34067),t.unbindTexture()}else if(re){const R=T.texture;for(let U=0,oe=R.length;U<oe;U++){const he=R[U],le=n.get(he);t.bindTexture(3553,le.__webglTexture),X(3553,he,_e),ce(G.__webglFramebuffer,T,he,36064+U,3553),A(he,_e)&&P(3553)}t.unbindTexture()}else{let R=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?R=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(R,Z.__webglTexture),X(R,y,_e),ce(G.__webglFramebuffer,T,y,36064,R),A(y,_e)&&P(R),t.unbindTexture()}T.depthBuffer&&me(T)}function et(T){const y=x(T)||o,G=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Z=0,Q=G.length;Z<Q;Z++){const re=G[Z];if(A(re,y)){const _e=T.isWebGLCubeRenderTarget?34067:3553,R=n.get(re).__webglTexture;t.bindTexture(_e,R),P(_e),t.unbindTexture()}}}function At(T){if(o&&T.samples>0&&Be(T)===!1){const y=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],G=T.width,Z=T.height;let Q=16384;const re=[],_e=T.stencilBuffer?33306:36096,R=n.get(T),U=T.isWebGLMultipleRenderTargets===!0;if(U)for(let oe=0;oe<y.length;oe++)t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,R.__webglFramebuffer),s.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,R.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,R.__webglFramebuffer);for(let oe=0;oe<y.length;oe++){re.push(36064+oe),T.depthBuffer&&re.push(_e);const he=R.__ignoreDepthValues!==void 0?R.__ignoreDepthValues:!1;if(he===!1&&(T.depthBuffer&&(Q|=256),T.stencilBuffer&&(Q|=1024)),U&&s.framebufferRenderbuffer(36008,36064,36161,R.__webglColorRenderbuffer[oe]),he===!0&&(s.invalidateFramebuffer(36008,[_e]),s.invalidateFramebuffer(36009,[_e])),U){const le=n.get(y[oe]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,le,0)}s.blitFramebuffer(0,0,G,Z,0,0,G,Z,Q,9728),m&&s.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),U)for(let oe=0;oe<y.length;oe++){t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+oe,36161,R.__webglColorRenderbuffer[oe]);const he=n.get(y[oe]).__webglTexture;t.bindFramebuffer(36160,R.__webglFramebuffer),s.framebufferTexture2D(36009,36064+oe,3553,he,0)}t.bindFramebuffer(36009,R.__webglMultisampledFramebuffer)}}function tt(T){return Math.min(h,T.samples)}function Be(T){const y=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Dt(T){const y=a.render.frame;g.get(T)!==y&&(g.set(T,y),T.update())}function It(T,y){const G=T.encoding,Z=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===qr||G!==hn&&(G===Se?o===!1?e.has("EXT_sRGB")===!0&&Z===Xt?(T.format=qr,T.minFilter=ot,T.generateMipmaps=!1):y=Nl.sRGBToLinear(y):(Z!==Xt||Q!==Tt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),y}this.allocateTextureUnit=W,this.resetTextureUnits=J,this.setTexture2D=z,this.setTexture2DArray=te,this.setTexture3D=$,this.setTextureCube=ie,this.rebindTextures=$e,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Be}function Lm(s,e,t){const n=t.isWebGL2;function i(r,a=null){let o;if(r===Tt)return 5121;if(r===pu)return 32819;if(r===mu)return 32820;if(r===hu)return 5120;if(r===du)return 5122;if(r===Rl)return 5123;if(r===fu)return 5124;if(r===En)return 5125;if(r===An)return 5126;if(r===Wi)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===gu)return 6406;if(r===Xt)return 6408;if(r===vu)return 6409;if(r===xu)return 6410;if(r===Vn)return 6402;if(r===qn)return 34041;if(r===yu)return 6403;if(r===_u)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===qr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Mu)return 36244;if(r===Su)return 33319;if(r===bu)return 33320;if(r===wu)return 36249;if(r===nr||r===ir||r===sr||r===rr)if(a===Se)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===nr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ir)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===sr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===nr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ir)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===sr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Da||r===Ia||r===Na||r===Ua)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Da)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ia)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Na)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ua)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fa||r===Oa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Fa)return a===Se?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Oa)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===za||r===Ba||r===ka||r===Ga||r===Ha||r===Va||r===Wa||r===Xa||r===ja||r===qa||r===Ya||r===Ka||r===$a||r===Za)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===za)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ba)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ka)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ga)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ha)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Va)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wa)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xa)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ja)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qa)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ya)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ka)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$a)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Za)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ja)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ja)return a===Se?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Hn?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Pm extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gn extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dm={type:"move"};class Dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const M=new Gn;M.matrixAutoUpdate=!1,M.visible=!1,c.joints[p.jointName]=M,c.add(M)}const _=c.joints[p.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class Kl extends dt{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:Vn,u!==Vn&&u!==qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vn&&(n=En),n===void 0&&u===qn&&(n=Hn),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ht,this.minFilter=l!==void 0?l:ht,this.flipY=!1,this.generateMipmaps=!1}}class Im extends $t{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,d=null,m=null;const g=t.getContextAttributes();let p=null,f=null;const _=[],M=[],w=new vt;w.layers.enable(1),w.viewport=new Ve;const x=new vt;x.layers.enable(2),x.viewport=new Ve;const S=[w,x],A=new Pm;A.layers.enable(1),A.layers.enable(2);let P=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let z=_[F];return z===void 0&&(z=new Dr,_[F]=z),z.getTargetRaySpace()},this.getControllerGrip=function(F){let z=_[F];return z===void 0&&(z=new Dr,_[F]=z),z.getGripSpace()},this.getHand=function(F){let z=_[F];return z===void 0&&(z=new Dr,_[F]=z),z.getHandSpace()};function E(F){const z=M.indexOf(F.inputSource);if(z===-1)return;const te=_[z];te!==void 0&&te.dispatchEvent({type:F.type,data:F.inputSource})}function I(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",q);for(let F=0;F<_.length;F++){const z=M[F];z!==null&&(M[F]=null,_[F].disconnect(z))}P=null,v=null,e.setRenderTarget(p),d=null,h=null,u=null,i=null,f=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",I),i.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,z),i.updateRenderState({baseLayer:d}),f=new ft(d.framebufferWidth,d.framebufferHeight,{format:Xt,type:Tt,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let z=null,te=null,$=null;g.depth&&($=g.stencil?35056:33190,z=g.stencil?qn:Vn,te=g.stencil?Hn:En);const ie={colorFormat:32856,depthFormat:$,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ie),i.updateRenderState({layers:[h]}),f=new ft(h.textureWidth,h.textureHeight,{format:Xt,type:Tt,depthTexture:new Kl(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ue=e.properties.get(f);ue.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function q(F){for(let z=0;z<F.removed.length;z++){const te=F.removed[z],$=M.indexOf(te);$>=0&&(M[$]=null,_[$].dispatchEvent({type:"disconnected",data:te}))}for(let z=0;z<F.added.length;z++){const te=F.added[z];let $=M.indexOf(te);if($===-1){for(let ue=0;ue<_.length;ue++)if(ue>=M.length){M.push(te),$=ue;break}else if(M[ue]===null){M[ue]=te,$=ue;break}if($===-1)break}const ie=_[$];ie&&ie.dispatchEvent({type:"connected",data:te})}}const K=new C,B=new C;function D(F,z,te){K.setFromMatrixPosition(z.matrixWorld),B.setFromMatrixPosition(te.matrixWorld);const $=K.distanceTo(B),ie=z.projectionMatrix.elements,ue=te.projectionMatrix.elements,ye=ie[14]/(ie[10]-1),X=ie[14]/(ie[10]+1),Fe=(ie[9]+1)/ie[5],ve=(ie[9]-1)/ie[5],Me=(ie[8]-1)/ie[0],ce=(ue[8]+1)/ue[0],ze=ye*Me,Ee=ye*ce,me=$/(-Me+ce),$e=me*-Me;z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX($e),F.translateZ(me),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const lt=ye+me,et=X+me,At=ze-$e,tt=Ee+($-$e),Be=Fe*X/et*lt,Dt=ve*X/et*lt;F.projectionMatrix.makePerspective(At,tt,Be,Dt,lt,et)}function k(F,z){z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;A.near=x.near=w.near=F.near,A.far=x.far=w.far=F.far,(P!==A.near||v!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,v=A.far);const z=F.parent,te=A.cameras;k(A,z);for(let ie=0;ie<te.length;ie++)k(te[ie],z);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),F.matrix.copy(A.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const $=F.children;for(let ie=0,ue=$.length;ie<ue;ie++)$[ie].updateMatrixWorld(!0);te.length===2?D(A,w,x):A.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(F){h!==null&&(h.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)};let Y=null;function J(F,z){if(c=z.getViewerPose(l||a),m=z,c!==null){const te=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let $=!1;te.length!==A.cameras.length&&(A.cameras.length=0,$=!0);for(let ie=0;ie<te.length;ie++){const ue=te[ie];let ye=null;if(d!==null)ye=d.getViewport(ue);else{const Fe=u.getViewSubImage(h,ue);ye=Fe.viewport,ie===0&&(e.setRenderTargetTextures(f,Fe.colorTexture,h.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(f))}let X=S[ie];X===void 0&&(X=new vt,X.layers.enable(ie),X.viewport=new Ve,S[ie]=X),X.matrix.fromArray(ue.transform.matrix),X.projectionMatrix.fromArray(ue.projectionMatrix),X.viewport.set(ye.x,ye.y,ye.width,ye.height),ie===0&&A.matrix.copy(X.matrix),$===!0&&A.cameras.push(X)}}for(let te=0;te<_.length;te++){const $=M[te],ie=_[te];$!==null&&ie!==void 0&&ie.update($,z,l||a)}Y&&Y(F,z),m=null}const W=new Hl;W.setAnimationLoop(J),this.setAnimationLoop=function(F){Y=F},this.dispose=function(){}}}function Nm(s,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,M,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),c(p,f)):f.isMeshStandardMaterial?(i(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,w)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,_,M):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===xt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===xt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let M;f.map?M=f.map:f.specularMap?M=f.specularMap:f.displacementMap?M=f.displacementMap:f.normalMap?M=f.normalMap:f.bumpMap?M=f.bumpMap:f.roughnessMap?M=f.roughnessMap:f.metalnessMap?M=f.metalnessMap:f.alphaMap?M=f.alphaMap:f.emissiveMap?M=f.emissiveMap:f.clearcoatMap?M=f.clearcoatMap:f.clearcoatNormalMap?M=f.clearcoatNormalMap:f.clearcoatRoughnessMap?M=f.clearcoatRoughnessMap:f.iridescenceMap?M=f.iridescenceMap:f.iridescenceThicknessMap?M=f.iridescenceThicknessMap:f.specularIntensityMap?M=f.specularIntensityMap:f.specularColorMap?M=f.specularColorMap:f.transmissionMap?M=f.transmissionMap:f.thicknessMap?M=f.thicknessMap:f.sheenColorMap?M=f.sheenColorMap:f.sheenRoughnessMap&&(M=f.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let w;f.aoMap?w=f.aoMap:f.lightMap&&(w=f.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uv2Transform.value.copy(w.matrix))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,_,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=M*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let w;f.map?w=f.map:f.alphaMap&&(w=f.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===xt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Um(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(35375):0;function l(M,w){const x=w.program;n.uniformBlockBinding(M,x)}function c(M,w){let x=i[M.id];x===void 0&&(g(M),x=u(M),i[M.id]=x,M.addEventListener("dispose",f));const S=w.program;n.updateUBOMapping(M,S);const A=e.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function u(M){const w=h();M.__bindingPointIndex=w;const x=s.createBuffer(),S=M.__size,A=M.usage;return s.bindBuffer(35345,x),s.bufferData(35345,S,A),s.bindBuffer(35345,null),s.bindBufferBase(35345,w,x),x}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const w=i[M.id],x=M.uniforms,S=M.__cache;s.bindBuffer(35345,w);for(let A=0,P=x.length;A<P;A++){const v=x[A];if(m(v,A,S)===!0){const E=v.value,I=v.__offset;typeof E=="number"?(v.__data[0]=E,s.bufferSubData(35345,I,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):E.toArray(v.__data),s.bufferSubData(35345,I,v.__data))}}s.bindBuffer(35345,null)}function m(M,w,x){const S=M.value;if(x[w]===void 0)return typeof S=="number"?x[w]=S:x[w]=S.clone(),!0;if(typeof S=="number"){if(x[w]!==S)return x[w]=S,!0}else{const A=x[w];if(A.equals(S)===!1)return A.copy(S),!0}return!1}function g(M){const w=M.uniforms;let x=0;const S=16;let A=0;for(let P=0,v=w.length;P<v;P++){const E=w[P],I=p(E);if(E.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=x,P>0){A=x%S;const q=S-A;A!==0&&q-I.boundary<0&&(x+=S-A,E.__offset=x)}x+=I.storage}return A=x%S,A>0&&(x+=S-A),M.__size=x,M.__cache={},this}function p(M){const w=M.value,x={boundary:0,storage:0};return typeof w=="number"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function f(M){const w=M.target;w.removeEventListener("dispose",f);const x=a.indexOf(w.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function _(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function Fm(){const s=qi("canvas");return s.style.display="block",s}function $l(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Fm(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=hn,this.physicallyCorrectLights=!1,this.toneMapping=un,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,_=0,M=0,w=null,x=-1,S=null;const A=new Ve,P=new Ve;let v=null,E=e.width,I=e.height,q=1,K=null,B=null;const D=new Ve(0,0,E,I),k=new Ve(0,0,E,I);let Y=!1;const J=new ua;let W=!1,F=!1,z=null;const te=new Pe,$=new de,ie=new C,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return w===null?q:1}let X=t;function Fe(b,O){for(let H=0;H<b.length;H++){const N=b[H],V=e.getContext(N,O);if(V!==null)return V}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wi}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Ue,!1),X===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),X=Fe(O,b),X===null)throw Fe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ve,Me,ce,ze,Ee,me,$e,lt,et,At,tt,Be,Dt,It,T,y,G,Z,Q,re,_e,R,U,oe;function he(){ve=new $f(X),Me=new Wf(X,ve,s),ve.init(Me),R=new Lm(X,ve,Me),ce=new Rm(X,ve,Me),ze=new Qf,Ee=new gm,me=new Cm(X,ve,ce,Ee,Me,R,ze),$e=new jf(p),lt=new Kf(p),et=new ch(X,Me),U=new Hf(X,ve,et,Me),At=new Zf(X,et,ze,U),tt=new ip(X,At,et,ze),Q=new np(X,Me,me),y=new Xf(Ee),Be=new mm(p,$e,lt,ve,Me,U,y),Dt=new Nm(p,Ee),It=new vm,T=new wm(ve,Me),Z=new Gf(p,$e,ce,tt,u,a),G=new Am(p,tt,Me),oe=new Um(X,ze,Me,ce),re=new Vf(X,ve,ze,Me),_e=new Jf(X,ve,ze,Me),ze.programs=Be.programs,p.capabilities=Me,p.extensions=ve,p.properties=Ee,p.renderLists=It,p.shadowMap=G,p.state=ce,p.info=ze}he();const le=new Im(p,X);this.xr=le,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(E,I,!1))},this.getSize=function(b){return b.set(E,I)},this.setSize=function(b,O,H){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=b,I=O,e.width=Math.floor(b*q),e.height=Math.floor(O*q),H!==!1&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(E*q,I*q).floor()},this.setDrawingBufferSize=function(b,O,H){E=b,I=O,q=H,e.width=Math.floor(b*H),e.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,O,H,N){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,O,H,N),ce.viewport(A.copy(D).multiplyScalar(q).floor())},this.getScissor=function(b){return b.copy(k)},this.setScissor=function(b,O,H,N){b.isVector4?k.set(b.x,b.y,b.z,b.w):k.set(b,O,H,N),ce.scissor(P.copy(k).multiplyScalar(q).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(b){ce.setScissorTest(Y=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){B=b},this.getClearColor=function(b){return b.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(b=!0,O=!0,H=!0){let N=0;b&&(N|=16384),O&&(N|=256),H&&(N|=1024),X.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Ue,!1),It.dispose(),T.dispose(),Ee.dispose(),$e.dispose(),lt.dispose(),tt.dispose(),U.dispose(),oe.dispose(),Be.dispose(),le.dispose(),le.removeEventListener("sessionstart",xe),le.removeEventListener("sessionend",Xe),z&&(z.dispose(),z=null),Ke.stop()};function fe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const b=ze.autoReset,O=G.enabled,H=G.autoUpdate,N=G.needsUpdate,V=G.type;he(),ze.autoReset=b,G.enabled=O,G.autoUpdate=H,G.needsUpdate=N,G.type=V}function Ue(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function L(b){const O=b.target;O.removeEventListener("dispose",L),ae(O)}function ae(b){ee(b),Ee.remove(b)}function ee(b){const O=Ee.get(b).programs;O!==void 0&&(O.forEach(function(H){Be.releaseProgram(H)}),b.isShaderMaterial&&Be.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,N,V,pe){O===null&&(O=ue);const we=V.isMesh&&V.matrixWorld.determinant()<0,Ae=Lc(b,O,H,N,V);ce.setMaterial(N,we);let Te=H.index;const ke=H.attributes.position;if(Te===null){if(ke===void 0||ke.count===0)return}else if(Te.count===0)return;let De=1;N.wireframe===!0&&(Te=At.getWireframeAttribute(H),De=2),U.setup(V,N,Ae,H,Te);let Ie,qe=re;Te!==null&&(Ie=et.get(Te),qe=_e,qe.setIndex(Ie));const Ln=Te!==null?Te.count:ke.count,$n=H.drawRange.start*De,Zn=H.drawRange.count*De,Yt=pe!==null?pe.start*De:0,Oe=pe!==null?pe.count*De:1/0,Jn=Math.max($n,Yt),Ze=Math.min(Ln,$n+Zn,Yt+Oe)-1,Ut=Math.max(0,Ze-Jn+1);if(Ut!==0){if(V.isMesh)N.wireframe===!0?(ce.setLineWidth(N.wireframeLinewidth*ye()),qe.setMode(1)):qe.setMode(4);else if(V.isLine){let pn=N.linewidth;pn===void 0&&(pn=1),ce.setLineWidth(pn*ye()),V.isLineSegments?qe.setMode(1):V.isLineLoop?qe.setMode(2):qe.setMode(3)}else V.isPoints?qe.setMode(0):V.isSprite&&qe.setMode(4);if(V.isInstancedMesh)qe.renderInstances(Jn,Ut,V.count);else if(H.isInstancedBufferGeometry){const pn=Math.min(H.instanceCount,H._maxInstanceCount);qe.renderInstances(Jn,Ut,pn)}else qe.render(Jn,Ut)}},this.compile=function(b,O){function H(N,V,pe){N.transparent===!0&&N.side===bt?(N.side=xt,N.needsUpdate=!0,rs(N,V,pe),N.side=Cn,N.needsUpdate=!0,rs(N,V,pe),N.side=bt):rs(N,V,pe)}d=T.get(b),d.init(),g.push(d),b.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(p.physicallyCorrectLights),b.traverse(function(N){const V=N.material;if(V)if(Array.isArray(V))for(let pe=0;pe<V.length;pe++){const we=V[pe];H(we,b,N)}else H(V,b,N)}),g.pop(),d=null};let j=null;function se(b){j&&j(b)}function xe(){Ke.stop()}function Xe(){Ke.start()}const Ke=new Hl;Ke.setAnimationLoop(se),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(b){j=b,le.setAnimationLoop(b),b===null?Ke.stop():Ke.start()},le.addEventListener("sessionstart",xe),le.addEventListener("sessionend",Xe),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(O),O=le.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,O,w),d=T.get(b,g.length),d.init(),g.push(d),te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(te),F=this.localClippingEnabled,W=y.init(this.clippingPlanes,F,O),h=It.get(b,m.length),h.init(),m.push(h),fn(b,O,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(K,B),W===!0&&y.beginShadows();const H=d.state.shadowsArray;if(G.render(H,b,O),W===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(h,b),d.setupLights(p.physicallyCorrectLights),O.isArrayCamera){const N=O.cameras;for(let V=0,pe=N.length;V<pe;V++){const we=N[V];je(h,b,we,we.viewport)}}else je(h,b,O);w!==null&&(me.updateMultisampleRenderTarget(w),me.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(p,b,O),U.resetDefaultState(),x=-1,S=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function fn(b,O,H,N){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){N&&ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(te);const we=tt.update(b),Ae=b.material;Ae.visible&&h.push(b,we,Ae,H,ie.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==ze.render.frame&&(b.skeleton.update(),b.skeleton.frame=ze.render.frame),!b.frustumCulled||J.intersectsObject(b))){N&&ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(te);const we=tt.update(b),Ae=b.material;if(Array.isArray(Ae)){const Te=we.groups;for(let ke=0,De=Te.length;ke<De;ke++){const Ie=Te[ke],qe=Ae[Ie.materialIndex];qe&&qe.visible&&h.push(b,we,qe,H,ie.z,Ie)}}else Ae.visible&&h.push(b,we,Ae,H,ie.z,null)}}const pe=b.children;for(let we=0,Ae=pe.length;we<Ae;we++)fn(pe[we],O,H,N)}function je(b,O,H,N){const V=b.opaque,pe=b.transmissive,we=b.transparent;d.setupLightsView(H),pe.length>0&&Jt(V,O,H),N&&ce.viewport(A.copy(N)),V.length>0&&Nt(V,O,H),pe.length>0&&Nt(pe,O,H),we.length>0&&Nt(we,O,H),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Jt(b,O,H){const N=Me.isWebGL2;z===null&&(z=new ft(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Wi:Tt,minFilter:Ti,samples:N&&r===!0?4:0})),p.getDrawingBufferSize($),N?z.setSize($.x,$.y):z.setSize(Us($.x),Us($.y));const V=p.getRenderTarget();p.setRenderTarget(z),p.clear();const pe=p.toneMapping;p.toneMapping=un,Nt(b,O,H),p.toneMapping=pe,me.updateMultisampleRenderTarget(z),me.updateRenderTargetMipmap(z),p.setRenderTarget(V)}function Nt(b,O,H){const N=O.isScene===!0?O.overrideMaterial:null;for(let V=0,pe=b.length;V<pe;V++){const we=b[V],Ae=we.object,Te=we.geometry,ke=N===null?we.material:N,De=we.group;Ae.layers.test(H.layers)&&Cc(Ae,O,H,Te,ke,De)}}function Cc(b,O,H,N,V,pe){b.onBeforeRender(p,O,H,N,V,pe),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(p,O,H,N,b,pe),V.transparent===!0&&V.side===bt?(V.side=xt,V.needsUpdate=!0,p.renderBufferDirect(H,O,N,V,b,pe),V.side=Cn,V.needsUpdate=!0,p.renderBufferDirect(H,O,N,V,b,pe),V.side=bt):p.renderBufferDirect(H,O,N,V,b,pe),b.onAfterRender(p,O,H,N,V,pe)}function rs(b,O,H){O.isScene!==!0&&(O=ue);const N=Ee.get(b),V=d.state.lights,pe=d.state.shadowsArray,we=V.state.version,Ae=Be.getParameters(b,V.state,pe,O,H),Te=Be.getProgramCacheKey(Ae);let ke=N.programs;N.environment=b.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(b.isMeshStandardMaterial?lt:$e).get(b.envMap||N.environment),ke===void 0&&(b.addEventListener("dispose",L),ke=new Map,N.programs=ke);let De=ke.get(Te);if(De!==void 0){if(N.currentProgram===De&&N.lightsStateVersion===we)return ba(b,Ae),De}else Ae.uniforms=Be.getUniforms(b),b.onBuild(H,Ae,p),b.onBeforeCompile(Ae,p),De=Be.acquireProgram(Ae,Te),ke.set(Te,De),N.uniforms=Ae.uniforms;const Ie=N.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=y.uniform),ba(b,Ae),N.needsLights=Dc(b),N.lightsStateVersion=we,N.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.directionalShadowMap.value=V.state.directionalShadowMap,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotShadowMap.value=V.state.spotShadowMap,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMap.value=V.state.pointShadowMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix);const qe=De.getUniforms(),Ln=Ds.seqWithValue(qe.seq,Ie);return N.currentProgram=De,N.uniformsList=Ln,De}function ba(b,O){const H=Ee.get(b);H.outputEncoding=O.outputEncoding,H.instancing=O.instancing,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Lc(b,O,H,N,V){O.isScene!==!0&&(O=ue),me.resetTextureUnits();const pe=O.fog,we=N.isMeshStandardMaterial?O.environment:null,Ae=w===null?p.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:hn,Te=(N.isMeshStandardMaterial?lt:$e).get(N.envMap||we),ke=N.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,De=!!N.normalMap&&!!H.attributes.tangent,Ie=!!H.morphAttributes.position,qe=!!H.morphAttributes.normal,Ln=!!H.morphAttributes.color,$n=N.toneMapped?p.toneMapping:un,Zn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Yt=Zn!==void 0?Zn.length:0,Oe=Ee.get(N),Jn=d.state.lights;if(W===!0&&(F===!0||b!==S)){const Rt=b===S&&N.id===x;y.setState(N,b,Rt)}let Ze=!1;N.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Jn.state.version||Oe.outputEncoding!==Ae||V.isInstancedMesh&&Oe.instancing===!1||!V.isInstancedMesh&&Oe.instancing===!0||V.isSkinnedMesh&&Oe.skinning===!1||!V.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Te||N.fog===!0&&Oe.fog!==pe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==y.numPlanes||Oe.numIntersection!==y.numIntersection)||Oe.vertexAlphas!==ke||Oe.vertexTangents!==De||Oe.morphTargets!==Ie||Oe.morphNormals!==qe||Oe.morphColors!==Ln||Oe.toneMapping!==$n||Me.isWebGL2===!0&&Oe.morphTargetsCount!==Yt)&&(Ze=!0):(Ze=!0,Oe.__version=N.version);let Ut=Oe.currentProgram;Ze===!0&&(Ut=rs(N,O,V));let pn=!1,Pi=!1,Js=!1;const yt=Ut.getUniforms(),Pn=Oe.uniforms;if(ce.useProgram(Ut.program)&&(pn=!0,Pi=!0,Js=!0),N.id!==x&&(x=N.id,Pi=!0),pn||S!==b){if(yt.setValue(X,"projectionMatrix",b.projectionMatrix),Me.logarithmicDepthBuffer&&yt.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),S!==b&&(S=b,Pi=!0,Js=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Rt=yt.map.cameraPosition;Rt!==void 0&&Rt.setValue(X,ie.setFromMatrixPosition(b.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&yt.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||V.isSkinnedMesh)&&yt.setValue(X,"viewMatrix",b.matrixWorldInverse)}if(V.isSkinnedMesh){yt.setOptional(X,V,"bindMatrix"),yt.setOptional(X,V,"bindMatrixInverse");const Rt=V.skeleton;Rt&&(Me.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),yt.setValue(X,"boneTexture",Rt.boneTexture,me),yt.setValue(X,"boneTextureSize",Rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qs=H.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0&&Me.isWebGL2===!0)&&Q.update(V,H,N,Ut),(Pi||Oe.receiveShadow!==V.receiveShadow)&&(Oe.receiveShadow=V.receiveShadow,yt.setValue(X,"receiveShadow",V.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Pn.envMap.value=Te,Pn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Pi&&(yt.setValue(X,"toneMappingExposure",p.toneMappingExposure),Oe.needsLights&&Pc(Pn,Js),pe&&N.fog===!0&&Dt.refreshFogUniforms(Pn,pe),Dt.refreshMaterialUniforms(Pn,N,q,I,z),Ds.upload(X,Oe.uniformsList,Pn,me)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ds.upload(X,Oe.uniformsList,Pn,me),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&yt.setValue(X,"center",V.center),yt.setValue(X,"modelViewMatrix",V.modelViewMatrix),yt.setValue(X,"normalMatrix",V.normalMatrix),yt.setValue(X,"modelMatrix",V.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Rt=N.uniformsGroups;for(let er=0,Ic=Rt.length;er<Ic;er++)if(Me.isWebGL2){const wa=Rt[er];oe.update(wa,Ut),oe.bind(wa,Ut)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ut}function Pc(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Dc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,O,H){Ee.get(b.texture).__webglTexture=O,Ee.get(b.depthTexture).__webglTexture=H;const N=Ee.get(b);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=H===void 0,N.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const H=Ee.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,H=0){w=b,_=O,M=H;let N=!0;if(b){const Te=Ee.get(b);Te.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),N=!1):Te.__webglFramebuffer===void 0?me.setupRenderTarget(b):Te.__hasExternalTextures&&me.rebindTextures(b,Ee.get(b.texture).__webglTexture,Ee.get(b.depthTexture).__webglTexture)}let V=null,pe=!1,we=!1;if(b){const Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture)&&(we=!0);const ke=Ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(V=ke[O],pe=!0):Me.isWebGL2&&b.samples>0&&me.useMultisampledRTT(b)===!1?V=Ee.get(b).__webglMultisampledFramebuffer:V=ke,A.copy(b.viewport),P.copy(b.scissor),v=b.scissorTest}else A.copy(D).multiplyScalar(q).floor(),P.copy(k).multiplyScalar(q).floor(),v=Y;if(ce.bindFramebuffer(36160,V)&&Me.drawBuffers&&N&&ce.drawBuffers(b,V),ce.viewport(A),ce.scissor(P),ce.setScissorTest(v),pe){const Te=Ee.get(b.texture);X.framebufferTexture2D(36160,36064,34069+O,Te.__webglTexture,H)}else if(we){const Te=Ee.get(b.texture),ke=O||0;X.framebufferTextureLayer(36160,36064,Te.__webglTexture,H||0,ke)}x=-1},this.readRenderTargetPixels=function(b,O,H,N,V,pe,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){ce.bindFramebuffer(36160,Ae);try{const Te=b.texture,ke=Te.format,De=Te.type;if(ke!==Xt&&R.convert(ke)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===Wi&&(ve.has("EXT_color_buffer_half_float")||Me.isWebGL2&&ve.has("EXT_color_buffer_float"));if(De!==Tt&&R.convert(De)!==X.getParameter(35738)&&!(De===An&&(Me.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-N&&H>=0&&H<=b.height-V&&X.readPixels(O,H,N,V,R.convert(ke),R.convert(De),pe)}finally{const Te=w!==null?Ee.get(w).__webglFramebuffer:null;ce.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(b,O,H=0){const N=Math.pow(2,-H),V=Math.floor(O.image.width*N),pe=Math.floor(O.image.height*N);me.setTexture2D(O,0),X.copyTexSubImage2D(3553,H,0,0,b.x,b.y,V,pe),ce.unbindTexture()},this.copyTextureToTexture=function(b,O,H,N=0){const V=O.image.width,pe=O.image.height,we=R.convert(H.format),Ae=R.convert(H.type);me.setTexture2D(H,0),X.pixelStorei(37440,H.flipY),X.pixelStorei(37441,H.premultiplyAlpha),X.pixelStorei(3317,H.unpackAlignment),O.isDataTexture?X.texSubImage2D(3553,N,b.x,b.y,V,pe,we,Ae,O.image.data):O.isCompressedTexture?X.compressedTexSubImage2D(3553,N,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):X.texSubImage2D(3553,N,b.x,b.y,we,Ae,O.image),N===0&&H.generateMipmaps&&X.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(b,O,H,N,V=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=b.max.x-b.min.x+1,we=b.max.y-b.min.y+1,Ae=b.max.z-b.min.z+1,Te=R.convert(N.format),ke=R.convert(N.type);let De;if(N.isData3DTexture)me.setTexture3D(N,0),De=32879;else if(N.isDataArrayTexture)me.setTexture2DArray(N,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,N.flipY),X.pixelStorei(37441,N.premultiplyAlpha),X.pixelStorei(3317,N.unpackAlignment);const Ie=X.getParameter(3314),qe=X.getParameter(32878),Ln=X.getParameter(3316),$n=X.getParameter(3315),Zn=X.getParameter(32877),Yt=H.isCompressedTexture?H.mipmaps[0]:H.image;X.pixelStorei(3314,Yt.width),X.pixelStorei(32878,Yt.height),X.pixelStorei(3316,b.min.x),X.pixelStorei(3315,b.min.y),X.pixelStorei(32877,b.min.z),H.isDataTexture||H.isData3DTexture?X.texSubImage3D(De,V,O.x,O.y,O.z,pe,we,Ae,Te,ke,Yt.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(De,V,O.x,O.y,O.z,pe,we,Ae,Te,Yt.data)):X.texSubImage3D(De,V,O.x,O.y,O.z,pe,we,Ae,Te,ke,Yt),X.pixelStorei(3314,Ie),X.pixelStorei(32878,qe),X.pixelStorei(3316,Ln),X.pixelStorei(3315,$n),X.pixelStorei(32877,Zn),V===0&&N.generateMipmaps&&X.generateMipmap(De),ce.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?me.setTextureCube(b,0):b.isData3DTexture?me.setTexture3D(b,0):b.isDataArrayTexture?me.setTexture2DArray(b,0):me.setTexture2D(b,0),ce.unbindTexture()},this.resetState=function(){_=0,M=0,w=null,ce.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Om extends $l{}Om.prototype.isWebGL1Renderer=!0;class $r extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class zm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=jt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mt=new C;class pa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array),i=We(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array),i=We(i,this.array),r=We(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const zo=new C,Bo=new Ve,ko=new Ve,Bm=new C,Go=new Pe;class km extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ve,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Bo.fromBufferAttribute(i.attributes.skinIndex,e),ko.fromBufferAttribute(i.attributes.skinWeight,e),zo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=ko.getComponent(r);if(a!==0){const o=Bo.getComponent(r);Go.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Bm.copy(zo).applyMatrix4(Go),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zl extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gm extends dt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=ht,u=ht,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ho=new Pe,Hm=new Pe;class ma{constructor(e=[],t=[]){this.uuid=jt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Hm;Ho.multiplyMatrices(o,t[r]),Ho.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ma(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Pl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Gm(t,e,e,Xt,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Zl),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Zr extends Qe{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vo=new Pe,Wo=new Pe,Es=[],Fi=new Pt;class Vm extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Vo),Wo.multiplyMatrices(n,Vo),Fi.matrixWorld=Wo,Fi.raycast(e,Es);for(let a=0,o=Es.length;a<o;a++){const l=Es[a];l.instanceId=r,l.object=this,t.push(l)}Es.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Jl extends Bt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xo=new C,jo=new C,qo=new Pe,Ir=new la,As=new Ai;class ga extends Ye{constructor(e=new Et,t=new Jl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Xo.fromBufferAttribute(t,i-1),jo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xo.distanceTo(jo);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(i),As.radius+=r,e.ray.intersectsSphere(As)===!1)return;qo.copy(i).invert(),Ir.copy(e.ray).applyMatrix4(qo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,u=new C,h=new C,d=new C,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let w=_,x=M-1;w<x;w+=m){const S=g.getX(w),A=g.getX(w+1);if(c.fromBufferAttribute(f,S),u.fromBufferAttribute(f,A),Ir.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),M=Math.min(f.count,a.start+a.count);for(let w=_,x=M-1;w<x;w+=m){if(c.fromBufferAttribute(f,w),u.fromBufferAttribute(f,w+1),Ir.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Yo=new C,Ko=new C;class Wm extends ga{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Yo.fromBufferAttribute(t,i),Ko.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yo.distanceTo(Ko);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xm extends ga{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ql extends Bt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $o=new Pe,Jr=new la,Rs=new Ai,Cs=new C;class ec extends Ye{constructor(e=new Et,t=new Ql){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=r,e.ray.intersectsSphere(Rs)===!1)return;$o.copy(i).invert(),Jr.copy(e.ray).applyMatrix4($o);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,p=m;g<p;g++){const f=c.getX(g);Cs.fromBufferAttribute(h,f),Zo(Cs,f,l,i,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,p=m;g<p;g++)Cs.fromBufferAttribute(h,g),Zo(Cs,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zo(s,e,t,n,i,r,a){const o=Jr.distanceSqToPoint(s);if(o<t){const l=new C;Jr.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class tc extends Et{constructor(e=1,t=1,n=1,i=8,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],m=[];let g=0;const p=[],f=n/2;let _=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(m,2));function M(){const x=new C,S=new C;let A=0;const P=(t-e)/n;for(let v=0;v<=r;v++){const E=[],I=v/r,q=I*(t-e)+e;for(let K=0;K<=i;K++){const B=K/i,D=B*l+o,k=Math.sin(D),Y=Math.cos(D);S.x=q*k,S.y=-I*n+f,S.z=q*Y,h.push(S.x,S.y,S.z),x.set(k,P,Y).normalize(),d.push(x.x,x.y,x.z),m.push(B,1-I),E.push(g++)}p.push(E)}for(let v=0;v<i;v++)for(let E=0;E<r;E++){const I=p[E][v],q=p[E+1][v],K=p[E+1][v+1],B=p[E][v+1];u.push(I,q,B),u.push(q,K,B),A+=6}c.addGroup(_,A,0),_+=A}function w(x){const S=g,A=new de,P=new C;let v=0;const E=x===!0?e:t,I=x===!0?1:-1;for(let K=1;K<=i;K++)h.push(0,f*I,0),d.push(0,I,0),m.push(.5,.5),g++;const q=g;for(let K=0;K<=i;K++){const D=K/i*l+o,k=Math.cos(D),Y=Math.sin(D);P.x=E*Y,P.y=f*I,P.z=E*k,h.push(P.x,P.y,P.z),d.push(0,I,0),A.x=k*.5+.5,A.y=Y*.5*I+.5,m.push(A.x,A.y),g++}for(let K=0;K<i;K++){const B=S+K,D=q+K;x===!0?u.push(D,D+1,B):u.push(D+1,D,B),v+=3}c.addGroup(_,v,x===!0?1:2),_+=v}}static fromJSON(e){return new tc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nc extends Et{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new C,d=new C,m=[],g=[],p=[],f=[];for(let _=0;_<=n;_++){const M=[],w=_/n;let x=0;_==0&&a==0?x=.5/t:_==n&&l==Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){const A=S/t;h.x=-e*Math.cos(i+A*r)*Math.sin(a+w*o),h.y=e*Math.cos(a+w*o),h.z=e*Math.sin(i+A*r)*Math.sin(a+w*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),p.push(d.x,d.y,d.z),f.push(A+x,1-w),M.push(c++)}u.push(M)}for(let _=0;_<n;_++)for(let M=0;M<t;M++){const w=u[_][M+1],x=u[_][M],S=u[_+1][M],A=u[_+1][M+1];(_!==0||a>0)&&m.push(w,x,A),(_!==n-1||l<Math.PI)&&m.push(x,S,A)}this.setIndex(m),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(p,3)),this.setAttribute("uv",new St(f,2))}static fromJSON(e){return new nc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zs extends Bt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kn extends Zs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Sn(s,e,t){return ic(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Ls(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ic(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function jm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Jo(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function sc(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class is{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qm extends is{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qa,endingEnd:Qa}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case eo:r=e,o=2*t-n;break;case to:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case eo:a=e,l=2*n-t;break;case to:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),p=g*g,f=p*g,_=-d*f+2*d*p-d*g,M=(1+d)*f+(-1.5-2*d)*p+(-.5+d)*g+1,w=(-1-m)*f+(1.5+m)*p+.5*g,x=m*f-m*p;for(let S=0;S!==o;++S)r[S]=_*a[u+S]+M*a[c+S]+w*a[l+S]+x*a[h+S];return r}}class Ym extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class Km extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ls(t,this.TimeBufferType),this.values=Ls(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ls(e.times,Array),values:Ls(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Km(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ym(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xi:t=this.InterpolantFactoryMethodDiscrete;break;case Mi:t=this.InterpolantFactoryMethodLinear;break;case ar:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xi;case this.InterpolantFactoryMethodLinear:return Mi;case this.InterpolantFactoryMethodSmooth:return ar}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=Sn(n,r,a),this.values=Sn(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&ic(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Sn(this.times),t=Sn(this.values),n=this.getValueSize(),i=this.getInterpolation()===ar,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[d+g]||p!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Sn(e,0,a),this.values=Sn(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Sn(this.times,0),t=Sn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=Mi;class Ci extends Zt{}Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Xi;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;class rc extends Zt{}rc.prototype.ValueTypeName="color";class Yi extends Zt{}Yi.prototype.ValueTypeName="number";class $m extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)dn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Yn extends Zt{InterpolantFactoryMethodLinear(e){return new $m(this.times,this.values,this.getValueSize(),e)}}Yn.prototype.ValueTypeName="quaternion";Yn.prototype.DefaultInterpolation=Mi;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;class Li extends Zt{}Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Xi;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;class Ki extends Zt{}Ki.prototype.ValueTypeName="vector";class Zm{constructor(e,t=-1,n,i=Eu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Qm(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Zt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=jm(l);l=Jo(l,1,u),c=Jo(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Yi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,m,g,p){if(m.length!==0){const f=[],_=[];sc(m,f,_,g),f.length!==0&&p.push(new h(d,f,_))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)m[d[g].morphTargets[p]]=-1;for(const p in m){const f=[],_=[];for(let M=0;M!==d[g].morphTargets.length;++M){const w=d[g];f.push(w.time),_.push(w.morphTarget===p?1:0)}i.push(new Yi(".morphTargetInfluence["+p+"]",f,_))}l=m.length*a}else{const m=".bones["+t[h].name+"]";n(Ki,m+".position",d,"pos",i),n(Yn,m+".quaternion",d,"rot",i),n(Ki,m+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yi;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return rc;case"quaternion":return Yn;case"bool":case"boolean":return Ci;case"string":return Li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Qm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jm(s.type);if(s.times===void 0){const t=[],n=[];sc(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const bi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ac{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const eg=new ac;class ss{constructor(e){this.manager=e!==void 0?e:eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const rn={};class tg extends Error{constructor(e,t){super(e),this.response=t}}class oc extends ss{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=bi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(rn[e]!==void 0){rn[e].push({onLoad:t,onProgress:n,onError:i});return}rn[e]=[],rn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=rn[e],h=c.body.getReader(),d=c.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0;let p=0;const f=new ReadableStream({start(_){M();function M(){h.read().then(({done:w,value:x})=>{if(w)_.close();else{p+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let A=0,P=u.length;A<P;A++){const v=u[A];v.onProgress&&v.onProgress(S)}_.enqueue(x),M()}})}}});return new Response(f)}else throw new tg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{bi.add(e,c);const u=rn[e];delete rn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=rn[e];if(u===void 0)throw this.manager.itemError(e),c;delete rn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ng extends ss{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=qi("img");function l(){u(),bi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class lc extends ss{constructor(e){super(e)}load(e,t,n,i){const r=new dt,a=new ng(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class _a extends Ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Nr=new Pe,Qo=new C,el=new C;class va{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qo),el.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(el),t.updateMatrixWorld(),Nr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ig extends va{constructor(){super(new vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ji*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sg extends _a{constructor(e,t,n=0,i=Math.PI/3,r=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.target=new Ye,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ig}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const tl=new Pe,Oi=new C,Ur=new C;class rg extends va{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oi),Ur.copy(n.position),Ur.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ur),n.updateMatrixWorld(),i.makeTranslation(-Oi.x,-Oi.y,-Oi.z),tl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl)}}class ag extends _a{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class og extends va{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lg extends _a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.target=new Ye,this.shadow=new og}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xn{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class cg extends ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){bi.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class ug{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nl(){return(typeof performance>"u"?Date:performance).now()}const xa="\\[\\]\\.:\\/",hg=new RegExp("["+xa+"]","g"),ya="[^"+xa+"]",dg="[^"+xa.replace("\\.","")+"]",fg=/((?:WC+[\/:])*)/.source.replace("WC",ya),pg=/(WCOD+)?/.source.replace("WCOD",dg),mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ya),gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ya),_g=new RegExp("^"+fg+pg+mg+gg+"$"),vg=["material","materials","bones","map"];class xg{constructor(e,t,n){const i=n||Ge.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ge{constructor(e,t,n){this.path=t,this.parsedPath=n||Ge.parseTrackName(t),this.node=Ge.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ge.Composite(e,t,n):new Ge(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hg,"")}static parseTrackName(e){const t=_g.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);vg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ge.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ge.Composite=xg;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class He{constructor(e){this.value=e}clone(){return new He(this.value.clone===void 0?this.value:this.value.clone())}}class il{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yg extends ft{constructor(e,t,n){console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'),super(e,t,n),this.samples=4}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wi);const sl={type:"change"},Fr={type:"start"},rl={type:"end"};class Mg extends $t{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qn.ROTATE,MIDDLE:Qn.DOLLY,RIGHT:Qn.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",It),this._domElementKeyEvents=R},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(sl),n.update(),r=i.NONE},this.update=function(){const R=new C,U=new dn().setFromUnitVectors(e.up,new C(0,1,0)),oe=U.clone().invert(),he=new C,le=new dn,fe=2*Math.PI;return function(){const Ue=n.object.position;R.copy(Ue).sub(n.target),R.applyQuaternion(U),o.setFromVector3(R),n.autoRotate&&r===i.NONE&&E(P()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let L=n.minAzimuthAngle,ae=n.maxAzimuthAngle;return isFinite(L)&&isFinite(ae)&&(L<-Math.PI?L+=fe:L>Math.PI&&(L-=fe),ae<-Math.PI?ae+=fe:ae>Math.PI&&(ae-=fe),L<=ae?o.theta=Math.max(L,Math.min(ae,o.theta)):o.theta=o.theta>(L+ae)/2?Math.max(L,o.theta):Math.min(ae,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(o),R.applyQuaternion(oe),Ue.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||he.distanceToSquared(n.object.position)>a||8*(1-le.dot(n.object.quaternion))>a?(n.dispatchEvent(sl),he.copy(n.object.position),le.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",$e),n.domElement.removeEventListener("pointercancel",At),n.domElement.removeEventListener("wheel",Dt),n.domElement.removeEventListener("pointermove",lt),n.domElement.removeEventListener("pointerup",et),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",It)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new il,l=new il;let c=1;const u=new C;let h=!1;const d=new de,m=new de,g=new de,p=new de,f=new de,_=new de,M=new de,w=new de,x=new de,S=[],A={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function E(R){l.theta-=R}function I(R){l.phi-=R}const q=function(){const R=new C;return function(oe,he){R.setFromMatrixColumn(he,0),R.multiplyScalar(-oe),u.add(R)}}(),K=function(){const R=new C;return function(oe,he){n.screenSpacePanning===!0?R.setFromMatrixColumn(he,1):(R.setFromMatrixColumn(he,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(oe),u.add(R)}}(),B=function(){const R=new C;return function(oe,he){const le=n.domElement;if(n.object.isPerspectiveCamera){const fe=n.object.position;R.copy(fe).sub(n.target);let be=R.length();be*=Math.tan(n.object.fov/2*Math.PI/180),q(2*oe*be/le.clientHeight,n.object.matrix),K(2*he*be/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(q(oe*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),K(he*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(R){d.set(R.clientX,R.clientY)}function J(R){M.set(R.clientX,R.clientY)}function W(R){p.set(R.clientX,R.clientY)}function F(R){m.set(R.clientX,R.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const U=n.domElement;E(2*Math.PI*g.x/U.clientHeight),I(2*Math.PI*g.y/U.clientHeight),d.copy(m),n.update()}function z(R){w.set(R.clientX,R.clientY),x.subVectors(w,M),x.y>0?D(v()):x.y<0&&k(v()),M.copy(w),n.update()}function te(R){f.set(R.clientX,R.clientY),_.subVectors(f,p).multiplyScalar(n.panSpeed),B(_.x,_.y),p.copy(f),n.update()}function $(R){R.deltaY<0?k(v()):R.deltaY>0&&D(v()),n.update()}function ie(R){let U=!1;switch(R.code){case n.keys.UP:B(0,n.keyPanSpeed),U=!0;break;case n.keys.BOTTOM:B(0,-n.keyPanSpeed),U=!0;break;case n.keys.LEFT:B(n.keyPanSpeed,0),U=!0;break;case n.keys.RIGHT:B(-n.keyPanSpeed,0),U=!0;break}U&&(R.preventDefault(),n.update())}function ue(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),U=.5*(S[0].pageY+S[1].pageY);d.set(R,U)}}function ye(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),U=.5*(S[0].pageY+S[1].pageY);p.set(R,U)}}function X(){const R=S[0].pageX-S[1].pageX,U=S[0].pageY-S[1].pageY,oe=Math.sqrt(R*R+U*U);M.set(0,oe)}function Fe(){n.enableZoom&&X(),n.enablePan&&ye()}function ve(){n.enableZoom&&X(),n.enableRotate&&ue()}function Me(R){if(S.length==1)m.set(R.pageX,R.pageY);else{const oe=_e(R),he=.5*(R.pageX+oe.x),le=.5*(R.pageY+oe.y);m.set(he,le)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const U=n.domElement;E(2*Math.PI*g.x/U.clientHeight),I(2*Math.PI*g.y/U.clientHeight),d.copy(m)}function ce(R){if(S.length===1)f.set(R.pageX,R.pageY);else{const U=_e(R),oe=.5*(R.pageX+U.x),he=.5*(R.pageY+U.y);f.set(oe,he)}_.subVectors(f,p).multiplyScalar(n.panSpeed),B(_.x,_.y),p.copy(f)}function ze(R){const U=_e(R),oe=R.pageX-U.x,he=R.pageY-U.y,le=Math.sqrt(oe*oe+he*he);w.set(0,le),x.set(0,Math.pow(w.y/M.y,n.zoomSpeed)),D(x.y),M.copy(w)}function Ee(R){n.enableZoom&&ze(R),n.enablePan&&ce(R)}function me(R){n.enableZoom&&ze(R),n.enableRotate&&Me(R)}function $e(R){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",lt),n.domElement.addEventListener("pointerup",et)),Z(R),R.pointerType==="touch"?T(R):tt(R))}function lt(R){n.enabled!==!1&&(R.pointerType==="touch"?y(R):Be(R))}function et(R){Q(R),S.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",lt),n.domElement.removeEventListener("pointerup",et)),n.dispatchEvent(rl),r=i.NONE}function At(R){Q(R)}function tt(R){let U;switch(R.button){case 0:U=n.mouseButtons.LEFT;break;case 1:U=n.mouseButtons.MIDDLE;break;case 2:U=n.mouseButtons.RIGHT;break;default:U=-1}switch(U){case Qn.DOLLY:if(n.enableZoom===!1)return;J(R),r=i.DOLLY;break;case Qn.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;W(R),r=i.PAN}else{if(n.enableRotate===!1)return;Y(R),r=i.ROTATE}break;case Qn.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;Y(R),r=i.ROTATE}else{if(n.enablePan===!1)return;W(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Fr)}function Be(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;F(R);break;case i.DOLLY:if(n.enableZoom===!1)return;z(R);break;case i.PAN:if(n.enablePan===!1)return;te(R);break}}function Dt(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(Fr),$(R),n.dispatchEvent(rl))}function It(R){n.enabled===!1||n.enablePan===!1||ie(R)}function T(R){switch(re(R),S.length){case 1:switch(n.touches.ONE){case ei.ROTATE:if(n.enableRotate===!1)return;ue(),r=i.TOUCH_ROTATE;break;case ei.PAN:if(n.enablePan===!1)return;ye(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Fe(),r=i.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Fr)}function y(R){switch(re(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ce(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(R),n.update();break;default:r=i.NONE}}function G(R){n.enabled!==!1&&R.preventDefault()}function Z(R){S.push(R)}function Q(R){delete A[R.pointerId];for(let U=0;U<S.length;U++)if(S[U].pointerId==R.pointerId){S.splice(U,1);return}}function re(R){let U=A[R.pointerId];U===void 0&&(U=new de,A[R.pointerId]=U),U.set(R.pageX,R.pageY)}function _e(R){const U=R.pointerId===S[0].pointerId?S[1]:S[0];return A[U.pointerId]}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",$e),n.domElement.addEventListener("pointercancel",At),n.domElement.addEventListener("wheel",Dt,{passive:!1}),this.update()}}const cc=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Qr(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=Re[i];return r?Qr(r):n}return s.replace(e,t)}const ut=[];for(let s=0;s<256;s++)ut[s]=(s<16?"0":"")+s.toString(16);function Sg(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[s&255]+ut[s>>8&255]+ut[s>>16&255]+ut[s>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toUpperCase()}const Un=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)n.hasOwnProperty(i)&&(s[i]=n[i])}return s},bg=Date.now(),al=new WeakMap,ol=new Map;let wg=1e10;function ea(s,e){const t=Rg(e);let n=al.get(s);if(n||al.set(s,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c){s.onBeforeCompile.call(this,c);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=ol[u];if(!h){const d=Tg(c,e,t);h=ol[u]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,Un(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-bg}}),this[i]&&this[i](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:wg++}),u.uuid=Sg(),u.uniforms=Un({},c.uniforms,e.uniforms),u.defines=Un({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Un({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(Un(this.extensions,c.extensions),Un(this.defines,c.defines),Un(this.uniforms,kl.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=ea(s.isDerivedMaterial?s.getDepthMaterial():new ql({depthPacking:Ll}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=ea(s.isDerivedMaterial?s.getDistanceMaterial():new Yl,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return n[t]=a,new a}function Tg({vertexShader:s,fragmentShader:e},t,n){let{vertexDefs:i,vertexMainIntro:r,vertexMainOutro:a,vertexTransform:o,fragmentDefs:l,fragmentMainIntro:c,fragmentMainOutro:u,fragmentColorTransform:h,customRewriter:d,timeUniform:m}=t;if(i=i||"",r=r||"",a=a||"",l=l||"",c=c||"",u=u||"",(o||d)&&(s=Qr(s)),(h||d)&&(e=e.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),e=Qr(e)),d){let g=d({vertexShader:s,fragmentShader:e});s=g.vertexShader,e=g.fragmentShader}if(h){let g=[];e=e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(g.push(p),"")),u=`${h}
${g.join(`
`)}
${u}`}if(m){const g=`
uniform float ${m};
`;i=g+i,l=g+l}return o&&(s=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${s}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${o}
}
`,r=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${r}
`,s=s.replace(/\b(position|normal|uv)\b/g,(g,p,f,_)=>/\battribute\s+vec[23]\s+$/.test(_.substr(0,f))?p:`troika_${p}_${n}`)),s=ll(s,n,i,r,a),e=ll(e,n,l,c,u),{vertexShader:s,fragmentShader:e}}function ll(s,e,t,n,i){return(n||i||t)&&(s=s.replace(cc,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),s}function Eg(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Ag=0;const cl=new Map;function Rg(s){const e=JSON.stringify(s,Eg);let t=cl.get(e);return t==null&&cl.set(e,t=++Ag),t}const Cg={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function Lg(s){let e=Cg[s.type];return e?Wt[e]:s}function ul(s){let e=/\buniform\s+(int|float|vec[234]|mat[34])\s+([A-Za-z_][\w]*)/g,t=Object.create(null),n;for(;(n=e.exec(s))!==null;)t[n[2]]=n[1];return t}function Pg(s){let e=[],t="";const n=ea(s,{chained:!0,customRewriter({vertexShader:r,fragmentShader:a}){let o=[],l=[],c=[],u=ul(r),h=ul(a);return e.forEach(d=>{let m=u[d],g=h[d];const p=m||g;if(p){const f=new RegExp(`\\buniform\\s+${p}\\s+${d}\\s*;`,"g"),_=new RegExp(`\\b${d}\\b`,"g"),M=`troika_attr_${d}`,w=`troika_vary_${d}`;if(o.push(`attribute ${p} ${M};`),m&&(r=r.replace(f,""),r=r.replace(_,M)),g){a=a.replace(f,""),a=a.replace(_,w);let x=`varying ${g} ${w};`;o.push(x),c.push(x),l.push(`${w} = ${M};`)}}}),r=`${o.join(`
`)}
${r.replace(cc,`
$&
${l.join(`
`)}`)}`,c.length&&(a=`${c.join(`
`)}
${a}`),{vertexShader:r,fragmentShader:a}}});n.setUniformNames=function(r){e=r||[];const a=e.sort().join("|");a!==t&&(t=a,this.needsUpdate=!0)};const i=n.customProgramCacheKey();return n.customProgramCacheKey=function(){return i+"|"+t},n.isInstancedUniformsMaterial=!0,n}class Dg extends Vm{constructor(e,t,n){super(e,t,n),this._instancedUniformNames=[]}get geometry(){let e=this._derivedGeometry;const t=this._baseGeometry;return(!e||e.baseGeometry!==t)&&(e=this._derivedGeometry=Object.create(t),e.baseGeometry=t,e.attributes=Object.create(t.attributes),t.addEventListener("dispose",function(){e.dispose()})),e}set geometry(e){this._baseGeometry=e}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=new Rn);return(!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=Pg(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),e.setUniformNames(this._instancedUniformNames),e}set material(e){if(Array.isArray(e))throw new Error("InstancedUniformsMesh does not support multiple materials");for(;e&&e.isInstancedUniformsMaterial;)e=e.baseMaterial;this._baseMaterial=e}get customDepthMaterial(){return this.material.getDepthMaterial()}get customDistanceMaterial(){return this.material.getDistanceMaterial()}setUniformAt(e,t,n){const i=this.geometry.attributes,r=`troika_attr_${e}`;let a=i[r];if(!a){const o=Ig(this._baseMaterial,e),l=Ng(o);if(a=i[r]=new Zr(new Float32Array(l*this.count),l),o!==null)for(let c=0;c<this.count;c++)hl(a,c,o);this._instancedUniformNames=[...this._instancedUniformNames,e]}hl(a,t,n),a.needsUpdate=!0}unsetUniform(e){this.geometry.deleteAttribute(`troika_attr_${e}`),this._instancedUniformNames=this._instancedUniformNames.filter(t=>t!==e)}}function hl(s,e,t){let n=s.itemSize;n===1?s.setX(e,t):n===2?s.setXY(e,t.x,t.y):n===3?t.isColor?s.setXYZ(e,t.r,t.g,t.b):s.setXYZ(e,t.x,t.y,t.z):n===4?s.setXYZW(e,t.x,t.y,t.z,t.w):t.toArray?t.toArray(s.array,e*n):s.set(t,e*n)}function Ig(s,e){let t=s.uniforms;return t&&t[e]||(t=Lg(s).uniforms,t&&t[e])?t[e].value:null}function Ng(s){return s==null?0:typeof s=="number"?1:s.isVector2?2:s.isVector3||s.isColor?3:s.isVector4||s.isQuaternion?4:s.elements?s.elements.length:Array.isArray(s)?s.length:0}/**
 * postprocessing v6.28.7 build Wed Aug 31 2022
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2022 Raoul van Rüschen
 * @license Zlib
 */var uc="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Le={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},jn={NONE:0,DEPTH:1,CONVOLUTION:2},Ne={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Ma={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},Ug=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <encodings_fragment>
}`,Fg="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",Og=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],zg=class extends pt{constructor(s=new Ve){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new He(null),texelSize:new He(new Ve),scale:new He(1),kernel:new He(0)},blending:wt,depthWrite:!1,depthTest:!1,fragmentShader:Ug,vertexShader:Fg}),this.toneMapped=!1,this.setTexelSize(s.x,s.y),this.kernelSize=Ma.MEDIUM}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.inputBuffer=s}get kernelSequence(){return Og[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(s){this.uniforms.scale.value=s}getScale(){return this.uniforms.scale.value}setScale(s){this.uniforms.scale.value=s}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(s){this.uniforms.kernel.value=s}setKernel(s){this.kernel=s}setTexelSize(s,e){this.uniforms.texelSize.value.set(s,e,s*.5,e*.5)}setSize(s,e){const t=1/s,n=1/e;this.uniforms.texelSize.value.set(t,n,t*.5,n*.5)}},Bg=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <encodings_fragment>
#include <dithering_fragment>
}`,hc=class extends pt{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new He(null),opacity:new He(1)},blending:wt,depthWrite:!1,depthTest:!1,fragmentShader:Bg,vertexShader:uc}),this.toneMapped=!1}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}getOpacity(s){return this.uniforms.opacity.value}setOpacity(s){this.uniforms.opacity.value=s}},kg=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <encodings_fragment>
}`,Gg="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",Hg=class extends pt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new He(null),texelSize:new He(new de)},blending:wt,depthWrite:!1,depthTest:!1,fragmentShader:kg,vertexShader:Gg}),this.toneMapped=!1}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setSize(s,e){this.uniforms.texelSize.value.set(1/s,1/e)}},Vg=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEADvoid main(){FRAGMENT_MAIN_UVvec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGEgl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <encodings_fragment>
#endif
#include <dithering_fragment>
}`,Wg="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEADvoid main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORTgl_Position=vec4(position.xy,1.0,1.0);}",Xg=class extends pt{constructor(s,e,t,n,i=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:wi.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new He(null),depthBuffer:new He(null),resolution:new He(new de),texelSize:new He(new de),cameraNear:new He(.3),cameraFar:new He(1e3),aspect:new He(1),time:new He(0)},blending:wt,depthWrite:!1,depthTest:!1,dithering:i}),this.toneMapped=!1,s&&this.setShaderParts(s),e&&this.setDefines(e),t&&this.setUniforms(t),this.adoptCameraSettings(n)}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){this.uniforms.depthBuffer.value=s}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}setDepthBuffer(s,e=es){this.depthBuffer=s,this.depthPacking=e}setShaderData(s){this.setShaderParts(s.shaderParts),this.setDefines(s.defines),this.setUniforms(s.uniforms),this.setExtensions(s.extensions)}setShaderParts(s){var e,t,n,i,r;return this.fragmentShader=Vg.replace(Ne.FRAGMENT_HEAD,(e=s.get(Ne.FRAGMENT_HEAD))!=null?e:"").replace(Ne.FRAGMENT_MAIN_UV,(t=s.get(Ne.FRAGMENT_MAIN_UV))!=null?t:"").replace(Ne.FRAGMENT_MAIN_IMAGE,(n=s.get(Ne.FRAGMENT_MAIN_IMAGE))!=null?n:""),this.vertexShader=Wg.replace(Ne.VERTEX_HEAD,(i=s.get(Ne.VERTEX_HEAD))!=null?i:"").replace(Ne.VERTEX_MAIN_SUPPORT,(r=s.get(Ne.VERTEX_MAIN_SUPPORT))!=null?r:""),this.needsUpdate=!0,this}setDefines(s){for(const e of s.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(s){for(const e of s.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(s){this.extensions={};for(const e of s)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(s){this.encodeOutput!==s&&(s?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(s){return this.encodeOutput}setOutputEncodingEnabled(s){this.encodeOutput=s}get time(){return this.uniforms.time.value}set time(s){this.uniforms.time.value=s}setDeltaTime(s){this.uniforms.time.value+=s}adoptCameraSettings(s){s&&(this.uniforms.cameraNear.value=s.near,this.uniforms.cameraFar.value=s.far,s instanceof vt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(s,e){const t=this.uniforms;t.resolution.value.set(s,e),t.texelSize.value.set(1/s,1/e),t.aspect.value=s/e}static get Section(){return Ne}},jg=`#include <common>
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*l,l);
#else
gl_FragColor=vec4(l);
#endif
}`,qg=class extends pt{constructor(s=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:wi.replace(/\D+/g,"")},uniforms:{inputBuffer:new He(null),threshold:new He(0),smoothing:new He(1),range:new He(null)},blending:wt,depthWrite:!1,depthTest:!1,fragmentShader:jg,vertexShader:uc}),this.toneMapped=!1,this.colorOutput=s,this.luminanceRange=e}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}get threshold(){return this.uniforms.threshold.value}set threshold(s){this.smoothing>0||s>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=s}getThreshold(){return this.threshold}setThreshold(s){this.threshold=s}get smoothing(){return this.uniforms.smoothing.value}set smoothing(s){this.threshold>0||s>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=s}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(s){this.smoothing=s}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(s){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(s){s?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(s){return this.colorOutput}setColorOutputEnabled(s){this.colorOutput=s}get useRange(){return this.luminanceRange!==null}set useRange(s){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(s){s!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=s,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(s){this.luminanceRange=s}},Yg=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <encodings_fragment>
}`,Kg="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",$g=class extends pt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new He(null),supportBuffer:new He(null),texelSize:new He(new de),radius:new He(.85)},blending:wt,depthWrite:!1,depthTest:!1,fragmentShader:Yg,vertexShader:Kg}),this.toneMapped=!1}set inputBuffer(s){this.uniforms.inputBuffer.value=s}set supportBuffer(s){this.uniforms.supportBuffer.value=s}get radius(){return this.uniforms.radius.value}set radius(s){this.uniforms.radius.value=s}setSize(s,e){this.uniforms.texelSize.value.set(1/s,1/e)}},Zg=new ca,bn=null;function Jg(){if(bn===null){const s=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);bn=new Et,bn.setAttribute!==void 0?(bn.setAttribute("position",new Qe(s,3)),bn.setAttribute("uv",new Qe(e,2))):(bn.addAttribute("position",new Qe(s,3)),bn.addAttribute("uv",new Qe(e,2)))}return bn}var qt=class{constructor(s="Pass",e=new $r,t=Zg){this.name=s,this.renderer=null,this.scene=e,this.camera=t,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(s){if(this.rtt===s){const e=this.fullscreenMaterial;e!==null&&(e.needsUpdate=!0),this.rtt=!s}}setRenderer(s){this.renderer=s}isEnabled(){return this.enabled}setEnabled(s){this.enabled=s}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(s){let e=this.screen;e!==null?e.material=s:(e=new Pt(Jg(),s),e.frustumCulled=!1,this.scene===null&&(this.scene=new $r),this.scene.add(e),this.screen=e)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(s){this.fullscreenMaterial=s}getDepthTexture(){return null}setDepthTexture(s,e=es){}render(s,e,t,n,i){throw new Error("Render method not implemented!")}setSize(s,e){}initialize(s,e,t){}dispose(){for(const s of Object.keys(this)){const e=this[s];(e instanceof ft||e instanceof Bt||e instanceof dt||e instanceof qt)&&this[s].dispose()}}},Qg=class extends qt{constructor(s,e=!0){super("CopyPass"),this.fullscreenMaterial=new hc,this.needsSwap=!1,this.renderTarget=s,s===void 0&&(this.renderTarget=new ft(1,1,{minFilter:ot,magFilter:ot,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(s){this.autoResize=s}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(s){this.autoResize=s}render(s,e,t,n,i){this.fullscreenMaterial.inputBuffer=e.texture,s.setRenderTarget(this.renderToScreen?null:this.renderTarget),s.render(this.scene,this.camera)}setSize(s,e){this.autoResize&&this.renderTarget.setSize(s,e)}initialize(s,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Tt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":s.outputEncoding===Se&&(this.renderTarget.texture.encoding=Se))}},e_=class extends qt{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(s,e,t,n,i){const r=s.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},Or=new ge,dc=class extends qt{constructor(s=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=s,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(s,e,t){this.color=s,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(s){this.overrideClearColor=s}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(s){this.overrideClearAlpha=s}render(s,e,t,n,i){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=s.getClearAlpha(),l=r!==null,c=a>=0;l?(Or.copy(s.getClearColor(Or)),s.setClearColor(r,c?a:o)):c&&s.setClearAlpha(a),s.setRenderTarget(this.renderToScreen?null:e),s.clear(this.color,this.depth,this.stencil),l?s.setClearColor(Or,o):c&&s.setClearAlpha(o)}},wn=-1,Kt=class extends $t{constructor(s,e=wn,t=wn,n=1){super(),this.resizable=s,this.baseSize=new de(1,1),this.preferredSize=new de(e,t),this.target=this.preferredSize,this.s=n,this.effectiveSize=new de,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const s=this.baseSize,e=this.preferredSize,t=this.effectiveSize,n=this.scale;e.width!==wn?t.width=e.width:e.height!==wn?t.width=Math.round(e.height*(s.width/Math.max(s.height,1))):t.width=Math.round(s.width*n),e.height!==wn?t.height=e.height:e.width!==wn?t.height=Math.round(e.width/Math.max(s.width/Math.max(s.height,1),1)):t.height=Math.round(s.height*n)}get width(){return this.effectiveSize.width}set width(s){this.preferredWidth=s}get height(){return this.effectiveSize.height}set height(s){this.preferredHeight=s}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(s){this.s!==s&&(this.s=s,this.preferredSize.setScalar(wn),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(s){this.scale=s}get baseWidth(){return this.baseSize.width}set baseWidth(s){this.baseSize.width!==s&&(this.baseSize.width=s,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(s){this.baseWidth=s}get baseHeight(){return this.baseSize.height}set baseHeight(s){this.baseSize.height!==s&&(this.baseSize.height=s,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(s){this.baseHeight=s}setBaseSize(s,e){(this.baseSize.width!==s||this.baseSize.height!==e)&&(this.baseSize.set(s,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(s){this.preferredSize.width!==s&&(this.preferredSize.width=s,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(s){this.preferredWidth=s}get preferredHeight(){return this.preferredSize.height}set preferredHeight(s){this.preferredSize.height!==s&&(this.preferredSize.height=s,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(s){this.preferredHeight=s}setPreferredSize(s,e){(this.preferredSize.width!==s||this.preferredSize.height!==e)&&(this.preferredSize.set(s,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(s){this.s=s.scale,this.baseSize.set(s.getBaseWidth(),s.getBaseHeight()),this.preferredSize.set(s.getPreferredWidth(),s.getPreferredHeight()),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return wn}},zr=!1,dl=class{constructor(s=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(s),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case bt:t=this.materialsFlatShadedDoubleSide;break;case xt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case bt:t=this.materialsDoubleSide;break;case xt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}setMaterial(s){if(this.disposeMaterials(),this.material=s,s!==null){const e=this.materials=[s.clone(),s.clone(),s.clone()];for(const t of e)t.uniforms=Object.assign({},s.uniforms),t.side=Cn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const n=t.clone();return n.uniforms=Object.assign({},s.uniforms),n.side=xt,n}),this.materialsDoubleSide=e.map(t=>{const n=t.clone();return n.uniforms=Object.assign({},s.uniforms),n.side=bt,n}),this.materialsFlatShaded=e.map(t=>{const n=t.clone();return n.uniforms=Object.assign({},s.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=e.map(t=>{const n=t.clone();return n.uniforms=Object.assign({},s.uniforms),n.flatShading=!0,n.side=xt,n}),this.materialsFlatShadedDoubleSide=e.map(t=>{const n=t.clone();return n.uniforms=Object.assign({},s.uniforms),n.flatShading=!0,n.side=bt,n})}}render(s,e,t){const n=s.shadowMap.enabled;if(s.shadowMap.enabled=!1,zr){const i=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),s.render(e,t);for(const r of i)r[0].material=r[1];this.meshCount!==i.size&&i.clear()}else{const i=e.overrideMaterial;e.overrideMaterial=this.material,s.render(e,t),e.overrideMaterial=i}s.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const s=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of s)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return zr}static set workaroundEnabled(s){zr=s}},t_=class extends qt{constructor(s,e,t=null){super("RenderPass",s,e),this.needsSwap=!1,this.clearPass=new dc,this.overrideMaterialManager=t===null?null:new dl(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}get renderToScreen(){return super.renderToScreen}set renderToScreen(s){super.renderToScreen=s,this.clearPass.renderToScreen=s}get overrideMaterial(){const s=this.overrideMaterialManager;return s!==null?s.material:null}set overrideMaterial(s){const e=this.overrideMaterialManager;s!==null?e!==null?e.setMaterial(s):this.overrideMaterialManager=new dl(s):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(s){this.overrideMaterial=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getSelection(){return this.selection}setSelection(s){this.selection=s}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(s){this.ignoreBackground=s}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(s){this.skipShadowMapUpdate=s}getClearPass(){return this.clearPass}render(s,e,t,n,i){const r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,u=s.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(s.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(s,e),s.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(s,r,a):s.render(r,a),a.layers.mask=l,r.background=c,s.shadowMap.autoUpdate=u}};function fl(s,e,t){for(const n of e){const i="$1"+s+n.charAt(0).toUpperCase()+n.slice(1),r=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,i))}}function n_(s,e,t){var n,i,r,a,o;let l=e.getFragmentShader(),c=e.getVertexShader();const u=l!==void 0&&/mainImage/.test(l),h=l!==void 0&&/mainUv/.test(l);if(t.attributes|=e.getAttributes(),l===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(h&&(t.attributes&jn.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!u&&!h)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const d=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,m=t.shaderParts;let g=(n=m.get(Ne.FRAGMENT_HEAD))!=null?n:"",p=(i=m.get(Ne.FRAGMENT_MAIN_UV))!=null?i:"",f=(r=m.get(Ne.FRAGMENT_MAIN_IMAGE))!=null?r:"",_=(a=m.get(Ne.VERTEX_HEAD))!=null?a:"",M=(o=m.get(Ne.VERTEX_MAIN_SUPPORT))!=null?o:"";const w=new Set,x=new Set;if(h&&(p+=`	${s}MainUv(UV);
`,t.uvTransformation=!0),c!==null&&/mainSupport/.test(c)){const P=/mainSupport *\([\w\s]*?uv\s*?\)/.test(c);M+=`	${s}MainSupport(`,M+=P?`vUv);
`:`);
`;for(const v of c.matchAll(/(?:varying\s+\w+\s+(\w*))/g))t.varyings.add(v[1]),w.add(v[1]),x.add(v[1]);for(const v of c.matchAll(d))x.add(v[1])}for(const P of l.matchAll(d))x.add(P[1]);for(const P of e.defines.keys())x.add(P.replace(/\([\w\s,]*\)/g,""));for(const P of e.uniforms.keys())x.add(P);x.delete("while"),x.delete("for"),x.delete("if"),e.uniforms.forEach((P,v)=>t.uniforms.set(s+v.charAt(0).toUpperCase()+v.slice(1),P)),e.defines.forEach((P,v)=>t.defines.set(s+v.charAt(0).toUpperCase()+v.slice(1),P));const S=new Map([["fragment",l],["vertex",c]]);fl(s,x,t.defines),fl(s,x,S),l=S.get("fragment"),c=S.get("vertex");const A=e.blendMode;if(t.blendModes.set(A.blendFunction,A),u){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(f+=e.inputColorSpace===Se?`color0 = LinearTosRGB(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==null?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const P=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;f+=`${s}MainImage(color0, UV, `,(t.attributes&jn.DEPTH)!==0&&P.test(l)&&(f+="depth, ",t.readDepth=!0),f+=`color1);
	`;const v=s+"BlendOpacity";t.uniforms.set(v,A.opacity),f+=`color0 = blend${A.blendFunction}(color0, color1, ${v});

	`,g+=`uniform float ${v};

`}if(g+=l+`
`,c!==null&&(_+=c+`
`),m.set(Ne.FRAGMENT_HEAD,g),m.set(Ne.FRAGMENT_MAIN_UV,p),m.set(Ne.FRAGMENT_MAIN_IMAGE,f),m.set(Ne.VERTEX_HEAD,_),m.set(Ne.VERTEX_MAIN_SUPPORT,M),e.extensions!==null)for(const P of e.extensions)t.extensions.add(P)}}var i_=class extends qt{constructor(s,...e){super("EffectPass"),this.fullscreenMaterial=new Xg(null,null,null,s),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(s){this.fullscreenMaterial.encodeOutput=s}get dithering(){return this.fullscreenMaterial.dithering}set dithering(s){const e=this.fullscreenMaterial;e.dithering=s,e.needsUpdate=!0}setEffects(s){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=s.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const s=new h_;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===Le.DST)s.attributes|=a.getAttributes()&jn.DEPTH;else{if((s.attributes&a.getAttributes()&jn.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);n_("e"+e++,a,s)}let t=s.shaderParts.get(Ne.FRAGMENT_HEAD),n=s.shaderParts.get(Ne.FRAGMENT_MAIN_IMAGE),i=s.shaderParts.get(Ne.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of s.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(s.attributes&jn.DEPTH)!==0?(s.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,s.colorSpace===Se&&(n+=`color0 = sRGBToLinear(color0);
	`),s.uvTransformation?(i=`vec2 transformedUv = vUv;
`+i,s.defines.set("UV","transformedUv")):s.defines.set("UV","vUv"),s.shaderParts.set(Ne.FRAGMENT_HEAD,t),s.shaderParts.set(Ne.FRAGMENT_MAIN_IMAGE,n),s.shaderParts.set(Ne.FRAGMENT_MAIN_UV,i),s.shaderParts.forEach((a,o,l)=>l.set(o,a==null?void 0:a.trim().replace(/^#/,`
#`))),this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(s)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(s,e=es){this.fullscreenMaterial.depthBuffer=s,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(s,e)}render(s,e,t,n,i){for(const r of this.effects)r.update(s,e,n);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=n,s.setRenderTarget(this.renderToScreen?null:t),s.render(this.scene,this.camera)}}setSize(s,e){this.fullscreenMaterial.setSize(s,e);for(const t of this.effects)t.setSize(s,e)}initialize(s,e,t){this.renderer=s;for(const n of this.effects)n.initialize(s,e,t);this.updateMaterial(),t!==void 0&&t!==Tt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const s of this.effects)s.removeEventListener("change",this.listener),s.dispose()}handleEvent(s){switch(s.type){case"change":this.recompile();break}}},s_=class extends qt{constructor({kernelSize:s=Ma.MEDIUM,resolutionScale:e=.5,width:t=Kt.AUTO_SIZE,height:n=Kt.AUTO_SIZE,resolutionX:i=t,resolutionY:r=n}={}){super("KawaseBlurPass"),this.renderTargetA=new ft(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new Kt(this,i,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this.blurMaterial=new zg,this.copyMaterial=new hc}getResolution(){return this.resolution}get dithering(){return this.copyMaterial.dithering}set dithering(s){this.copyMaterial.dithering=s}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(s){this.blurMaterial.kernelSize=s}get width(){return this.resolution.width}set width(s){this.resolution.preferredWidth=s}get height(){return this.resolution.height}set height(s){this.resolution.preferredHeight=s}get scale(){return this.blurMaterial.scale}set scale(s){this.blurMaterial.scale=s}getScale(){return this.blurMaterial.scale}setScale(s){this.blurMaterial.scale=s}getKernelSize(){return this.kernelSize}setKernelSize(s){this.kernelSize=s}getResolutionScale(){return this.resolution.scale}setResolutionScale(s){this.resolution.scale=s}render(s,e,t,n,i){const r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence;let h=e;this.fullscreenMaterial=c;for(let d=0,m=u.length;d<m;++d){const g=(d&1)===0?o:l;c.kernel=u[d],c.inputBuffer=h.texture,s.setRenderTarget(g),s.render(r,a),h=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,s.setRenderTarget(this.renderToScreen?null:t),s.render(r,a)}setSize(s,e){const t=this.resolution;t.setBaseSize(s,e);const n=t.width,i=t.height;this.renderTargetA.setSize(n,i),this.renderTargetB.setSize(n,i),this.blurMaterial.setSize(s,e)}initialize(s,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Tt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):s.outputEncoding===Se&&(this.renderTargetA.texture.encoding=Se,this.renderTargetB.texture.encoding=Se))}static get AUTO_SIZE(){return Kt.AUTO_SIZE}},r_=class extends qt{constructor({renderTarget:s,luminanceRange:e,colorOutput:t,resolutionScale:n=1,width:i=Kt.AUTO_SIZE,height:r=Kt.AUTO_SIZE,resolutionX:a=i,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new qg(t,e),this.needsSwap=!1,this.renderTarget=s,this.renderTarget===void 0&&(this.renderTarget=new ft(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new Kt(this,a,o,n);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(s,e,t,n,i){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,s.setRenderTarget(this.renderToScreen?null:this.renderTarget),s.render(this.scene,this.camera)}setSize(s,e){const t=this.resolution;t.setBaseSize(s,e),this.renderTarget.setSize(t.width,t.height)}initialize(s,e,t){t!==void 0&&t!==Tt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},a_=class extends qt{constructor(s,e){super("MaskPass",s,e),this.needsSwap=!1,this.clearPass=new dc(!1,!1,!0),this.inverse=!1}get inverted(){return this.inverse}set inverted(s){this.inverse=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(s){this.inverted=s}render(s,e,t,n,i){const r=s.getContext(),a=s.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,h=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,u,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(s,null):(c.render(s,e),c.render(s,t))),this.renderToScreen?(s.setRenderTarget(null),s.render(o,l)):(s.setRenderTarget(e),s.render(o,l),s.setRenderTarget(t),s.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},o_=class extends qt{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new ft(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new Hg,this.upsamplingMaterial=new $g,this.resolution=new de}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(s){if(this.levels!==s){const e=this.renderTarget;this.dispose();for(let t=0;t<s;++t){const n=e.clone();n.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(n)}this.upsamplingMipmaps.push(e);for(let t=1,n=s-1;t<n;++t){const i=e.clone();i.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(i)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(s){this.upsamplingMaterial.radius=s}render(s,e,t,n,i){const{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this;let h=e;this.fullscreenMaterial=o;for(let d=0,m=c.length;d<m;++d){const g=c[d];o.setSize(h.width,h.height),o.inputBuffer=h.texture,s.setRenderTarget(g),s.render(r,a),h=g}this.fullscreenMaterial=l;for(let d=u.length-1;d>=0;--d){const m=u[d];l.setSize(h.width,h.height),l.inputBuffer=h.texture,l.supportBuffer=c[d].texture,s.setRenderTarget(m),s.render(r,a),h=m}}setSize(s,e){const t=this.resolution;t.set(s,e);let n=t.width,i=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)n=Math.round(n*.5),i=Math.round(i*.5),this.downsamplingMipmaps[r].setSize(n,i),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(n,i)}initialize(s,e,t){if(t!==void 0){const n=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const i of n)i.texture.type=t;if(t!==Tt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(s.outputEncoding===Se)for(const i of n)i.texture.encoding=Se}}dispose(){super.dispose();for(const s of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))s.dispose()}},Br=1/1e3,l_=1e3,c_=class{constructor(){this.previousTime=0,this.currentTime=0,this.delta=0,this.fixedDelta=1e3/60,this.elapsed=0,this.timescale=1,this.fixedDeltaEnabled=!1,this.autoReset=!1}setFixedDeltaEnabled(s){return this.fixedDeltaEnabled=s,this}isAutoResetEnabled(s){return this.autoReset}setAutoResetEnabled(s){return typeof document<"u"&&document.hidden!==void 0&&(s?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this.autoReset=s),this}getDelta(){return this.delta*Br}getFixedDelta(){return this.fixedDelta*Br}setFixedDelta(s){return this.fixedDelta=s*l_,this}getElapsed(){return this.elapsed*Br}getTimescale(){return this.timescale}setTimescale(s){return this.timescale=s,this}update(s){return this.fixedDeltaEnabled?this.delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=s!==void 0?s:performance.now(),this.delta=this.currentTime-this.previousTime),this.delta*=this.timescale,this.elapsed+=this.delta,this}reset(){return this.delta=0,this.elapsed=0,this.currentTime=performance.now(),this}handleEvent(s){document.hidden||(this.currentTime=performance.now())}dispose(){this.setAutoResetEnabled(!1)}},u_=class{constructor(s=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:n=0,frameBufferType:i}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,i,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Qg,this.depthTexture=null,this.passes=[],this.timer=new c_,this.autoRenderToScreen=!0,this.setRenderer(s)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(s){const e=this.inputBuffer,t=this.multisampling;t>0&&s>0?(this.inputBuffer.samples=s,this.outputBuffer.samples=s,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==s&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,s),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(s){if(this.renderer=s,s!==null){const e=s.getSize(new de),t=s.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===Tt&&s.outputEncoding===Se&&(this.inputBuffer.texture.encoding=Se,this.outputBuffer.texture.encoding=Se,this.inputBuffer.dispose(),this.outputBuffer.dispose()),s.autoClear=!1,this.setSize(e.width,e.height);for(const i of this.passes)i.initialize(s,t,n)}}replaceRenderer(s,e=!0){const t=this.renderer,n=t.domElement.parentNode;return this.setRenderer(s),e&&n!==null&&(n.removeChild(t.domElement),n.appendChild(s.domElement)),t}createDepthTexture(){const s=this.depthTexture=new Kl;return this.inputBuffer.depthTexture=s,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(s.format=qn,s.type=Hn):s.type=En,s}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const s of this.passes)s.setDepthTexture(null)}}createBuffer(s,e,t,n){const i=this.renderer,r=i===null?new de:i.getDrawingBufferSize(new de),a={minFilter:ot,magFilter:ot,stencilBuffer:e,depthBuffer:s,type:t};let o;return n>0?(o=Number(wi.replace(/\D+/g,""))<138?new yg(r.width,r.height,a):new ft(r.width,r.height,a),o.ignoreDepthForMultisampleCopy=!1,o.samples=n):o=new ft(r.width,r.height,a),t===Tt&&i!==null&&i.outputEncoding===Se&&(o.texture.encoding=Se),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}addPass(s,e){const t=this.passes,n=this.renderer,i=n.getDrawingBufferSize(new de),r=n.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(s.setRenderer(n),s.setSize(i.width,i.height),s.initialize(n,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),s.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,s):t.push(s),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),s.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(s of t)s.setDepthTexture(o)}else s.setDepthTexture(this.depthTexture)}removePass(s){const e=this.passes,t=e.indexOf(s);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(o,l)=>o||l.needsDepthTexture;e.reduce(r,!1)||(s.getDepthTexture()===this.depthTexture&&s.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(s.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const s=this.passes;this.deleteDepthTexture(),s.length>0&&(this.autoRenderToScreen&&(s[s.length-1].renderToScreen=!1),this.passes=[])}render(s){const e=this.renderer,t=this.copyPass;let n=this.inputBuffer,i=this.outputBuffer,r=!1,a,o,l;s===void 0&&(s=this.timer.update().getDelta());for(const c of this.passes)c.enabled&&(c.render(e,n,i,s,r),c.needsSwap&&(r&&(t.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,n,i,s,r),o.setFunc(a.EQUAL,1,4294967295)),l=n,n=i,i=l),c instanceof a_?r=!0:c instanceof e_&&(r=!1))}setSize(s,e,t){const n=this.renderer;if(s===void 0||e===void 0){const r=n.getSize(new de);s=r.width,e=r.height}n.setSize(s,e,t);const i=n.getDrawingBufferSize(new de);this.inputBuffer.setSize(i.width,i.height),this.outputBuffer.setSize(i.width,i.height);for(const r of this.passes)r.setSize(i.width,i.height)}reset(){const s=this.timer.isAutoResetEnabled();this.dispose(),this.autoRenderToScreen=!0,this.timer.setAutoResetEnabled(s)}dispose(){for(const s of this.passes)s.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},h_=class{constructor(){this.shaderParts=new Map([[Ne.FRAGMENT_HEAD,null],[Ne.FRAGMENT_MAIN_UV,null],[Ne.FRAGMENT_MAIN_IMAGE,null],[Ne.VERTEX_HEAD,null],[Ne.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=jn.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=hn}},d_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",f_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",p_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",m_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",g_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",__="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",v_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",x_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",y_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",M_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",S_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",b_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",w_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",T_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",E_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",A_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",R_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",C_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",L_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",P_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",D_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",I_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",N_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",U_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",F_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",O_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",z_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",B_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",k_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",G_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",H_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",V_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",W_=new Map([[Le.ADD,d_],[Le.ALPHA,f_],[Le.AVERAGE,p_],[Le.COLOR,m_],[Le.COLOR_BURN,g_],[Le.COLOR_DODGE,__],[Le.DARKEN,v_],[Le.DIFFERENCE,x_],[Le.DIVIDE,y_],[Le.DST,null],[Le.EXCLUSION,M_],[Le.HARD_LIGHT,S_],[Le.HARD_MIX,b_],[Le.HUE,w_],[Le.INVERT,T_],[Le.INVERT_RGB,E_],[Le.LIGHTEN,A_],[Le.LINEAR_BURN,R_],[Le.LINEAR_DODGE,C_],[Le.LINEAR_LIGHT,L_],[Le.LUMINOSITY,P_],[Le.MULTIPLY,D_],[Le.NEGATION,I_],[Le.NORMAL,N_],[Le.OVERLAY,U_],[Le.PIN_LIGHT,F_],[Le.REFLECT,O_],[Le.SATURATION,z_],[Le.SCREEN,B_],[Le.SOFT_LIGHT,k_],[Le.SRC,G_],[Le.SUBTRACT,H_],[Le.VIVID_LIGHT,V_]]),X_=class extends $t{constructor(s,e=1){super(),this._blendFunction=s,this.opacity=new He(e)}getOpacity(){return this.opacity.value}setOpacity(s){this.opacity.value=s}get blendFunction(){return this._blendFunction}set blendFunction(s){this._blendFunction=s,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(s){this.blendFunction=s}getShaderCode(){return W_.get(this.blendFunction)}},j_=class extends $t{constructor(s,e,{attributes:t=jn.NONE,blendFunction:n=Le.NORMAL,defines:i=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=s,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=i,this.uniforms=r,this.extensions=a,this.blendMode=new X_(n),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=hn,this._outputColorSpace=null}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(s){this._inputColorSpace=s,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(s){this._outputColorSpace=s,this.setChanged()}getName(){return this.name}setRenderer(s){this.renderer=s}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(s){this.attributes=s,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(s){this.fragmentShader=s,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(s){this.vertexShader=s,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(s,e=es){}update(s,e,t){}setSize(s,e){}initialize(s,e,t){}dispose(){for(const s of Object.keys(this)){const e=this[s];(e instanceof ft||e instanceof Bt||e instanceof dt||e instanceof qt)&&this[s].dispose()}}},q_=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,Y_=class extends j_{constructor({blendFunction:s=Le.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,mipmapBlur:n=!1,intensity:i=1,radius:r=.85,levels:a=8,kernelSize:o=Ma.LARGE,resolutionScale:l=.5,width:c=Kt.AUTO_SIZE,height:u=Kt.AUTO_SIZE,resolutionX:h=c,resolutionY:d=u}={}){super("BloomEffect",q_,{blendFunction:s,uniforms:new Map([["map",new He(null)],["intensity",new He(i)]])}),this.renderTarget=new ft(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new s_({kernelSize:o}),this.luminancePass=new r_({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new o_,this.mipmapBlurPass.enabled=n,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=n?this.mipmapBlurPass.texture:this.renderTarget.texture;const m=this.resolution=new Kt(this,h,d,l);m.addEventListener("change",g=>this.setSize(m.baseWidth,m.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(s){this.resolution.preferredWidth=s}get height(){return this.resolution.height}set height(s){this.resolution.preferredHeight=s}get dithering(){return this.blurPass.dithering}set dithering(s){this.blurPass.dithering=s}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(s){this.blurPass.kernelSize=s}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(s){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(s){this.uniforms.get("intensity").value=s}getIntensity(){return this.intensity}setIntensity(s){this.intensity=s}getResolutionScale(){return this.resolution.scale}setResolutionScale(s){this.resolution.scale=s}update(s,e,t){const n=this.renderTarget,i=this.luminancePass;i.enabled?(i.render(s,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(s,i.renderTarget):this.blurPass.render(s,i.renderTarget,n)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(s,e):this.blurPass.render(s,e,n)}setSize(s,e){const t=this.resolution;t.setBaseSize(s,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(s,e),this.mipmapBlurPass.setSize(s,e)}initialize(s,e,t){this.blurPass.initialize(s,e,t),this.luminancePass.initialize(s,e,t),this.mipmapBlurPass.initialize(s,e,t),t!==void 0&&(this.renderTarget.texture.type=t,s.outputEncoding===Se&&(this.renderTarget.texture.encoding=Se))}};new C;new Pe;new ge;new C;new C;var K_=`varying vec2 vUv;
varying float vAnimProgress;

uniform float u_Time;
uniform float u_Index;

#define PI 3.1415926535897932384626433832795

mat2 rotate(in float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat2(c, -s, s, c);
}

void main() {
  #include <begin_vertex>

  
  transformed.y += cos(uv.x*PI*16.0) * step(0.5, uv.y) * 0.07;
  transformed.y += sin(uv.x*PI*188.0) * step(0.5, uv.y) * 0.074;
  transformed.y += cos(uv.x*PI*24.0) * step(0.5, uv.y) * 0.08;

  
  transformed.y -= cos(uv.x*PI*34.0 + u_Time*8.0) * step(0.5, uv.y) * 0.05;

  float instanceOffset = 1.0 / float(NUM_INSTANCES) * u_Index;
  float animProgress = fract(instanceOffset + u_Time*0.4);

  
  transformed.y *= 2.8 - sin(animProgress)*2.7;

  
  transformed.xz *= 0.7 + animProgress*0.8;

  
  transformed.xz *= rotate(u_Time*0.11);

  #include <project_vertex>

  vUv = uv;
  vAnimProgress = animProgress;
}`,$_=`varying vec2 vUv;
varying float vAnimProgress;

uniform vec3 u_Color;
uniform float u_Opacity;

void main() {
  vec3 color = u_Color*smoothstep(1.0, 0.0, vUv.y);

  float opacity = u_Opacity;
  opacity *= smoothstep(0.0, 0.45, vAnimProgress);
  opacity *= smoothstep(1.0, 0.6, vAnimProgress);

  gl_FragColor = vec4(color, 1.0)*opacity;
}`;const pl=new pt({vertexShader:K_,fragmentShader:$_,transparent:!0,side:bt,blending:Is,depthWrite:!1,defines:{NUM_INSTANCES:4},uniforms:{u_Time:{value:0},u_Color:{value:new ge(0,144/255,1)},u_Opacity:{value:1},u_Index:{value:0}}});var Z_=`varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  vUv = uv;
  vNormal = vec3(modelMatrix * vec4(normal, 0.0)).xyz;
  vPosition = vec3(modelMatrix * vec4(position, 1.0)).xyz;
}`,J_=`varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

uniform vec3 u_Color;
uniform float u_FresnelFalloff;
uniform float u_FresnelStrength;

void main() {
  vec3 color = u_Color;

  vec3 normal = normalize(vNormal);
  vec3 cameraDir = normalize(cameraPosition - vPosition);
  float d = dot(normal, cameraDir);

  
  float fresnel = 1.0 - max(0.0, d);
  fresnel = pow(fresnel, u_FresnelFalloff);

  color += fresnel*u_FresnelStrength;

  gl_FragColor = vec4(color, 1.0);
}`;const Q_=new pt({vertexShader:Z_,fragmentShader:J_,transparent:!1,uniforms:{u_Color:{value:new ge(4558273)},u_FresnelFalloff:{value:3.3},u_FresnelStrength:{value:.8}}});var ev=`varying vec2 vUv;
varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  vUv = uv;

  
  vColor = color.rgb;
  vPosition = (modelMatrix * vec4(position, 0.0)).xyz;
  vNormal = (modelMatrix * vec4(normal, 0.0)).xyz;
}`,tv=`varying vec2 vUv;
varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vPosition;

uniform vec3 u_FrontColor;
uniform vec3 u_BackColor;
uniform float u_LightFalloff;
uniform float u_LightStrength;

void main() {
  vec3 color = mix(u_BackColor, u_FrontColor, vColor.r);

  vec3 cameraDir = normalize(cameraPosition - vPosition);
  vec3 normal = normalize(vNormal);
  float d = dot(cameraDir, normal);
  d = clamp(d, 0.0, 0.9);
  d = pow(d, u_LightFalloff);
  d *= u_LightStrength;

  color += d;

  gl_FragColor = vec4(color, 1.0);
}`;const nv=new pt({vertexShader:ev,fragmentShader:tv,transparent:!1,vertexColors:!0,uniforms:{u_FrontColor:{value:new ge(12865748)},u_BackColor:{value:new ge(4521471)},u_LightFalloff:{value:9.78},u_LightStrength:{value:1.43}}});var iv=`attribute float a_Random;

uniform float u_Time;

varying float vAnimProgress;
varying float vRandom;

void main() {
  vec3 pos = position;

  float animProgress = fract(0.3*u_Time + a_Random);

  pos.y += animProgress*1.4;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = a_Random*(200.0 / -mvPosition.z);

  vAnimProgress = animProgress;
  vRandom = a_Random;
}`,sv=`varying float vAnimProgress;
varying float vRandom;

uniform vec3 u_ColorA;
uniform vec3 u_ColorB;

void main() {
  vec2 uv = gl_PointCoord.xy;

  
  uv.y = 1.0 - uv.y;

  
  uv = uv*2.0 - 1.0;

  
  uv.x *= 7.0;

  float d = distance(uv, vec2(0.0));
  float c = 1.0 - smoothstep(0.45, 0.9, d);

  vec3 particleColor = mix(u_ColorA, u_ColorB, smoothstep(0.4, 0.6, vRandom));

  vec3 color = (particleColor+particleColor) * c;

  float opacity = smoothstep(0.0, 0.1, vAnimProgress);
  opacity *= smoothstep(1.0, 0.8, vAnimProgress);

  gl_FragColor = vec4(color, 1.0)*opacity;
}`;const rv=new pt({vertexShader:iv,fragmentShader:sv,transparent:!0,depthWrite:!1,blending:Is,uniforms:{u_Time:{value:0},u_ColorA:{value:new ge(82/255,45/255,226/255)},u_ColorB:{value:new ge(11/255,103/255,201/255)}}});var Zi,ta;class av{constructor(e){ct(this,Zi);this.loader=new lc(e)}async load(e){if(Array.isArray(e)){const t=e.map(n=>rt(this,Zi,ta).call(this,n));return await Promise.all(t)}else return await rt(this,Zi,ta).call(this,e)}}Zi=new WeakSet,ta=function(e){return new Promise(t=>{this.loader.load(e,n=>{t(n)})})};class ov extends ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new Mv(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Xn.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new oc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={};if(typeof e=="string")r=e;else if(Xn.decodeText(new Uint8Array(e,0,4))===fc){try{a[Ce.KHR_BINARY_GLTF]=new Sv(e)}catch(h){i&&i(h);return}r=a[Ce.KHR_BINARY_GLTF].content}else r=Xn.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Uv(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,a[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const h=l.extensionsUsed[u],d=l.extensionsRequired||[];switch(h){case Ce.KHR_MATERIALS_UNLIT:a[h]=new uv;break;case Ce.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[h]=new Tv;break;case Ce.KHR_DRACO_MESH_COMPRESSION:a[h]=new bv(l,this.dracoLoader);break;case Ce.KHR_TEXTURE_TRANSFORM:a[h]=new wv;break;case Ce.KHR_MESH_QUANTIZATION:a[h]=new Ev;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function lv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ce={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class cv{constructor(e){this.parser=e,this.name=Ce.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ge(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new lg(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ag(u),c.distance=h;break;case"spot":c=new sg(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class uv{constructor(){this.name=Ce.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(e,t,n){const i=[];e.color=new ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Se))}return Promise.all(i)}}class hv{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class dv{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(o,o)}return Promise.all(r)}}class fv{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class pv{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Se)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class mv{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class gv{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ge(o[0],o[1],o[2]),Promise.all(r)}}class _v{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class vv{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ge(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Se)),Promise.all(r)}}class xv{constructor(e){this.parser=e,this.name=Ce.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class yv{constructor(e){this.parser=e,this.name=Ce.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Mv{constructor(e){this.name=Ce.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(m),u,h,d,i.mode,i.filter),m})})}else return null}}const fc="glTF",zi=12,ml={JSON:1313821514,BIN:5130562};class Sv{constructor(e){this.name=Ce.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zi);if(this.header={magic:Xn.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-zi,i=new DataView(e,zi);let r=0;for(;r<n;){const a=i.getUint32(r,!0);r+=4;const o=i.getUint32(r,!0);if(r+=4,o===ml.JSON){const l=new Uint8Array(e,zi+r,a);this.content=Xn.decodeText(l)}else if(o===ml.BIN){const l=zi+r;this.body=e.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ce.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=ia[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=ia[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],m=$i[d.componentType];c[h]=m.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const m in d.attributes){const g=d.attributes[m],p=l[m];p!==void 0&&(g.normalized=p)}h(d)},o,c)})})}}class wv{constructor(){this.name=Ce.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class na extends Zs{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new ge().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",a)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Tv{constructor(){this.name=Ce.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return na}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new ge(1,1,1),e.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const a=i.diffuseFactor;e.color.fromArray(a),e.opacity=a[3]}if(i.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",i.diffuseTexture,Se)),e.emissive=new ge(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new ge(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const a=i.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",a)),r.push(n.assignTexture(e,"specularMap",a,Se))}return Promise.all(r)}createMaterial(e){const t=new na(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=aa,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class Ev{constructor(){this.name=Ce.KHR_MESH_QUANTIZATION}}class pc extends is{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,m=d*h,g=e*c,p=g-c,f=-2*m+3*d,_=m-d,M=1-f,w=_-d+h;for(let x=0;x!==o;x++){const S=a[p+x+o],A=a[p+x+l]*u,P=a[g+x+o],v=a[g+x]*u;r[x]=M*S+w*A+f*P+_*v}return r}}const Av=new dn;class Rv extends pc{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Av.fromArray(r).normalize().toArray(r),r}}const an={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$i={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gl={9728:ht,9729:ot,9984:Wr,9985:Al,9986:Xr,9987:Ti},_l={33071:Ot,33648:Ns,10497:yi},vl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ia={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Tn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cv={CUBICSPLINE:void 0,LINEAR:Mi,STEP:Xi},kr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Zs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Cn})),s.DefaultMaterial}function Bi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Pv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Dv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Iv(s){const e=s.extensions&&s.extensions[Ce.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+xl(e.attributes):t=s.indices+":"+xl(s.attributes)+":"+s.mode,t}function xl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function sa(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Nv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class Uv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lv,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new lc(this.options.manager):this.textureLoader=new cg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};Bi(r,o,i),zn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ce.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Xn.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=vl[i.type],c=$i[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,f;if(m&&m!==h){const _=Math.floor(d/m),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let w=t.cache.get(M);w||(p=new c(o,_*m,i.count*m/u),w=new zm(p,m/u),t.cache.add(M,w)),f=new pa(w,l,d%m/u,g)}else o===null?p=new c(i.count*l):p=new c(o,d,i.count*l),f=new Qe(p,l,g);if(i.sparse!==void 0){const _=vl.SCALAR,M=$i[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,S=new M(a[1],w,i.sparse.count*_),A=new c(a[2],x,i.sparse.count*l);o!==null&&(f=new Qe(f.array.slice(),f.itemSize,f.normalized));for(let P=0,v=S.length;P<v;P++){const E=S[P];if(f.setX(E,A[P*l]),l>=2&&f.setY(E,A[P*l+1]),l>=3&&f.setZ(E,A[P*l+2]),l>=4&&f.setW(E,A[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,a.name&&(u.name=a.name);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=gl[d.magFilter]||ot,u.minFilter=gl[d.minFilter]||Ti,u.wrapS=_l[d.wrapS]||yi,u.wrapT=_l[d.wrapT]||yi,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(p){const f=new dt(p);f.needsUpdate=!0,d(f)}),t.load(Xn.resolveURL(h,r.path),g,void 0,m)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||Nv(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Ce.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ce.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ce.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ql,Bt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Jl,Bt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Zs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ce.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=i[Ce.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else if(l[Ce.KHR_MATERIALS_UNLIT]){const h=i[Ce.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new ge(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Se)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=bt);const u=r.alphaMode||kr.OPAQUE;if(u===kr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===kr.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Rn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&a!==Rn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Rn&&(o.emissive=new ge().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==Rn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Se)),Promise.all(c).then(function(){let h;return a===na?h=i[Ce.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):h=new a(o),r.name&&(h.name=r.name),zn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Bi(i,h,r),h})}createUniqueName(e){const t=Ge.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ce.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return yl(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Iv(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Ce.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=yl(new Et,c,t),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Lv(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,g=u.length;m<g;m++){const p=u[m],f=a[m];let _;const M=c[m];if(f.mode===an.TRIANGLES||f.mode===an.TRIANGLE_STRIP||f.mode===an.TRIANGLE_FAN||f.mode===void 0)_=r.isSkinnedMesh===!0?new km(p,M):new Pt(p,M),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),f.mode===an.TRIANGLE_STRIP?_.geometry=Ml(_.geometry,Au):f.mode===an.TRIANGLE_FAN&&(_.geometry=Ml(_.geometry,Cl));else if(f.mode===an.LINES)_=new Wm(p,M);else if(f.mode===an.LINE_STRIP)_=new ga(p,M);else if(f.mode===an.LINE_LOOP)_=new Xm(p,M);else if(f.mode===an.POINTS)_=new ec(p,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(_.geometry.morphAttributes).length>0&&Dv(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),zn(_,r),f.extensions&&Bi(i,_,f),t.assignFinalMaterial(_),h.push(_)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return h[0];const d=new Gn;t.associations.set(d,{meshes:e});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vt(Vu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new da(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],a=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],d=n.samplers[h.sampler],m=h.target,g=m.node,p=n.parameters!==void 0?n.parameters[d.input]:d.input,f=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",p)),a.push(this.getDependency("accessor",f)),o.push(d),l.push(m)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],m=c[3],g=c[4],p=[];for(let _=0,M=u.length;_<M;_++){const w=u[_],x=h[_],S=d[_],A=m[_],P=g[_];if(w===void 0)continue;w.updateMatrix();let v;switch(Tn[P.path]){case Tn.weights:v=Yi;break;case Tn.rotation:v=Yn;break;case Tn.position:case Tn.scale:default:v=Ki;break}const E=w.name?w.name:w.uuid,I=A.interpolation!==void 0?Cv[A.interpolation]:Mi,q=[];Tn[P.path]===Tn.weights?w.traverse(function(B){B.morphTargetInfluences&&q.push(B.name?B.name:B.uuid)}):q.push(E);let K=S.array;if(S.normalized){const B=sa(K.constructor),D=new Float32Array(K.length);for(let k=0,Y=K.length;k<Y;k++)D[k]=K[k]*B;K=D}for(let B=0,D=q.length;B<D;B++){const k=new v(q[B]+"."+Tn[P.path],x.array,K,I);A.interpolation==="CUBICSPLINE"&&(k.createInterpolant=function(J){const W=this instanceof Yn?Rv:pc;return new W(this.times,this.values,this.getValueSize()/3,J)},k.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(k)}}const f=n.name?n.name:"animation_"+e;return new Zm(f,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(!!o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"";return function(){const o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(r.isBone===!0?l=new Zl:o.length>1?l=new Gn:o.length===1?l=o[0]:l=new Ye,l!==o[0])for(let c=0,u=o.length;c<u;c++)l.add(o[c]);if(r.name&&(l.userData.name=r.name,l.name=a),zn(l,r),r.extensions&&Bi(n,l,r),r.matrix!==void 0){const c=new Pe;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,a=new Gn;i.name&&(a.name=r.createUniqueName(i.name)),zn(a,i),i.extensions&&Bi(n,a,i);const o=i.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(mc(o[c],a,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[d,m]of r.associations)(d instanceof Bt||d instanceof dt)&&h.set(d,m);return u.traverse(d=>{const m=r.associations.get(d);m!=null&&h.set(d,m)}),h};return r.associations=c(a),a})}}function mc(s,e,t,n){const i=t.nodes[s];return n.getDependency("node",s).then(function(r){if(i.skin===void 0)return r;let a;return n.getDependency("skin",i.skin).then(function(o){a=o;const l=[];for(let c=0,u=a.joints.length;c<u;c++)l.push(n.getDependency("node",a.joints[c]));return Promise.all(l)}).then(function(o){return r.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,d=o.length;h<d;h++){const m=o[h];if(m){c.push(m);const g=new Pe;a.inverseBindMatrices!==void 0&&g.fromArray(a.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',a.joints[h])}l.bind(new ma(c,u),l.matrixWorld)}),r})}).then(function(r){e.add(r);const a=[];if(i.children){const o=i.children;for(let l=0,c=o.length;l<c;l++){const u=o[l];a.push(mc(u,r,t,n))}}return Promise.all(a)})}function Fv(s,e,t){const n=e.attributes,i=new Ei;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){const u=sa($i[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new C,l=new C;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const p=sa($i[d.componentType]);l.multiplyScalar(p)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Ai;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function yl(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=ia[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return zn(s,e),Fv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Pv(s,e.targets,t):s})}function Ml(s,e){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Cl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r}var Ji,ra;class Ov{constructor(e){ct(this,Ji);this.loader=new ov(e)}async load(e){if(Array.isArray(e)){const t=e.map(n=>rt(this,Ji,ra).call(this,n));return await Promise.all(t)}else return await rt(this,Ji,ra).call(this,e)}}Ji=new WeakSet,ra=function(e){return new Promise(t=>{this.loader.load(e,n=>{t(n)})})};const Sa=new ac;Sa.onProgress=(s,e,t)=>{console.log(`Loaded ${e} resources out of ${t} -> ${s}`)};new av(Sa);const zv=new Ov(Sa);var Qi,Fs,gc,Os,_c,zs,vc,Bs,xc,ks,yc,Gs,Mc,Hs,Sc,Vs,bc,Ws,wc,Xs,Tc,js,Ec,qs,Ac,Ys,Rc;class Bv{constructor(e,t={physics:!1,debug:!1}){ct(this,Fs);ct(this,Os);ct(this,zs);ct(this,Bs);ct(this,ks);ct(this,Gs);ct(this,Hs);ct(this,Vs);ct(this,Ws);ct(this,Xs);ct(this,js);ct(this,qs);ct(this,Ys);ct(this,Qi,()=>rt(this,Ys,Rc).call(this));this.container=document.querySelector(e),this.screen=new de(this.container.clientWidth,this.container.clientHeight),this.hasPhysics=t.physics,this.hasDebug=t.debug}async init(){if(rt(this,zs,vc).call(this),rt(this,Bs,xc).call(this),rt(this,ks,yc).call(this),this.hasPhysics){const{Simulation:e}=await Di(()=>import("./Simulation.62024dc7.js"),["Simulation.62024dc7.js","cannon-es.2062a824.js"],import.meta.url);this.simulation=new e(this);const{PhysicsBox:t}=await Di(()=>import("./Box.a1edcf4f.js"),["Box.a1edcf4f.js","cannon-es.2062a824.js","Body.39ca5822.js"],import.meta.url),{PhysicsFloor:n}=await Di(()=>import("./Floor.2e1cfe31.js"),["Floor.2e1cfe31.js","cannon-es.2062a824.js","Body.39ca5822.js"],import.meta.url);Object.assign(this,{PhysicsBox:t,PhysicsFloor:n})}if(rt(this,Xs,Tc).call(this),rt(this,js,Ec).call(this),rt(this,Ws,wc).call(this),await rt(this,Hs,Sc).call(this),rt(this,Vs,bc).call(this),rt(this,Gs,Mc).call(this),this.hasDebug){const{Debug:e}=await Di(()=>import("./Debug.31405cf2.js"),["Debug.31405cf2.js","_commonjsHelpers.4e997714.js"],import.meta.url);new e(this);const{default:t}=await Di(()=>import("./stats.min.5a92ba8e.js").then(n=>n.s),["stats.min.5a92ba8e.js","_commonjsHelpers.4e997714.js"],import.meta.url);this.stats=new t,document.body.appendChild(this.stats.dom)}this.renderer.setAnimationLoop(()=>{var e,t;(e=this.stats)==null||e.begin(),rt(this,Fs,gc).call(this),rt(this,Os,_c).call(this),(t=this.stats)==null||t.end()}),console.log(this)}destroy(){this.renderer.dispose(),rt(this,qs,Ac).call(this)}}Qi=new WeakMap,Fs=new WeakSet,gc=function(){var t;const e=this.clock.getElapsedTime();this.savePoint.material.uniforms.u_Time.value=e,this.savePoint.children[0].rotation.y=e*.45,this.savePoint.children[1].rotation.y=e*.88,this.particles.material.uniforms.u_Time.value=e,(t=this.simulation)==null||t.update()},Os=new WeakSet,_c=function(){this.composer.render()},zs=new WeakSet,vc=function(){this.scene=new $r},Bs=new WeakSet,xc=function(){this.camera=new vt(75,this.screen.x/this.screen.y,.1,100),this.camera.position.set(0,4,5)},ks=new WeakSet,yc=function(){this.renderer=new $l({powerPreference:"high-performance",alpha:!0,antialias:!1,stencil:!1,depth:!1}),this.container.appendChild(this.renderer.domElement),this.renderer.setSize(this.screen.x,this.screen.y),this.renderer.setPixelRatio(Math.min(1.5,window.devicePixelRatio)),this.renderer.setClearColor(1184274),this.renderer.physicallyCorrectLights=!1},Gs=new WeakSet,Mc=function(){this.composer=new u_(this.renderer),this.passes={};const e=new t_(this.scene,this.camera);this.composer.addPass(e),Object.assign(this.passes,{renderPass:e});{const t=new Y_({intensity:3,luminanceThreshold:.7,luminanceSmoothing:.663}),n=new i_(this.camera,t);this.composer.addPass(n),Object.assign(this.passes,{bloomPass:n})}},Hs=new WeakSet,Sc=async function(){const e=await zv.load("./save-point.glb"),t=new Pe;this.savePoint=new Dg(e.scene.children[0].geometry,pl,pl.defines.NUM_INSTANCES),this.savePoint.name="Base";for(let r=0;r<this.savePoint.count;r++)this.savePoint.setMatrixAt(r,t.identity()),this.savePoint.setUniformAt("u_Index",r,r);const n=e.scene.getObjectByName("Prism");n.material=Q_;const i=e.scene.getObjectByName("Top");i.material=nv,this.savePoint.add(n,i),this.scene.add(this.savePoint)},Vs=new WeakSet,bc=function(){const e=new Et,t=30;{const n=new Float32Array(t*3);for(let i=0;i<t;i++){const r=Math.random()*Math.PI*2;n[i*3+0]=Math.cos(r)*(.5+Math.random()*.85),n[i*3+1]=Math.random(),n[i*3+2]=Math.sin(r)*(.5+Math.random()*.85)}e.setAttribute("position",new Qe(n,3))}{const n=new Float32Array(t);for(let i=0;i<t;i++)n[i]=Math.random();e.setAttribute("a_Random",new Qe(n,1))}this.particles=new ec(e,rv),this.particles.name="Particles",this.scene.add(this.particles)},Ws=new WeakSet,wc=function(){this.controls=new Mg(this.camera,this.renderer.domElement),this.controls.target=new C(0,2,0),this.controls.update(),this.controls.enabled=this.hasDebug},Xs=new WeakSet,Tc=function(){this.clock=new ug},js=new WeakSet,Ec=function(){window.addEventListener("resize",tr(this,Qi),{passive:!0})},qs=new WeakSet,Ac=function(){window.removeEventListener("resize",tr(this,Qi),{passive:!0})},Ys=new WeakSet,Rc=function(){this.screen.set(this.container.clientWidth,this.container.clientHeight),this.camera.aspect=this.screen.x/this.screen.y,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.screen.x,this.screen.y),this.composer.setSize(this.screen.x,this.screen.y)};window._APP_=new Bv("#app",{physics:!1,debug:!0});window._APP_.init();export{ns as B,ge as C,St as F,Rn as M,ha as P,nc as S,Di as _,Pt as a,tc as b,Et as c};
