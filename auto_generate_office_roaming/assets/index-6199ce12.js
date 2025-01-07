(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Ko="147",du=0,ga=1,pu=2,bc=1,mu=2,ps=3,Mn=0,zt=1,Le=2,Fn=0,zi=1,Po=2,xa=3,va=4,gu=5,Di=100,xu=101,vu=102,ya=103,_a=104,yu=200,_u=201,Mu=202,bu=203,wc=204,Sc=205,wu=206,Su=207,Tu=208,Au=209,Eu=210,Cu=0,Lu=1,Pu=2,Do=3,Du=4,Ru=5,Iu=6,Nu=7,Tc=0,zu=1,Uu=2,yn=0,Fu=1,Bu=2,Ou=3,ku=4,Vu=5,Ac=300,ki=301,Vi=302,wr=303,Ro=304,Pr=306,Ze=1e3,kt=1001,Sr=1002,Xe=1003,Io=1004,No=1005,ht=1006,Ec=1007,ci=1008,Gu=1008,oi=1009,Hu=1010,Wu=1011,Cc=1012,Xu=1013,ei=1014,$t=1015,_s=1016,qu=1017,ju=1018,Ui=1020,Yu=1021,Ku=1022,Vt=1023,Zu=1024,Ju=1025,ni=1026,Gi=1027,Qu=1028,$u=1029,eh=1030,th=1031,nh=1033,Fr=33776,Br=33777,Or=33778,kr=33779,Ma=35840,ba=35841,wa=35842,Sa=35843,ih=36196,Ta=37492,Aa=37496,Ea=37808,Ca=37809,La=37810,Pa=37811,Da=37812,Ra=37813,Ia=37814,Na=37815,za=37816,Ua=37817,Fa=37818,Ba=37819,Oa=37820,ka=37821,Va=36492,Ms=2300,Hi=2301,Vr=2302,Ga=2400,Ha=2401,Wa=2402,sh=2500,rh=1,Lc=2,ai=3e3,Pe=3001,oh=3200,ah=3201,Pc=0,lh=1,Kt="srgb",bs="srgb-linear",Gr=7680,ch=519,zo=35044,Xa="300 es",Uo=1035;class ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qa=1234567;const xs=Math.PI/180,ws=180/Math.PI;function qt(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[a&255]+pt[a>>8&255]+pt[a>>16&255]+pt[a>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function gt(a,e,t){return Math.max(e,Math.min(t,a))}function Zo(a,e){return(a%e+e)%e}function uh(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function hh(a,e,t){return a!==e?(t-a)/(e-a):0}function vs(a,e,t){return(1-t)*a+t*e}function fh(a,e,t,n){return vs(a,e,1-Math.exp(-t*n))}function dh(a,e=1){return e-Math.abs(Zo(a,e*2)-e)}function ph(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function mh(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function gh(a,e){return a+Math.floor(Math.random()*(e-a+1))}function xh(a,e){return a+Math.random()*(e-a)}function vh(a){return a*(.5-Math.random())}function yh(a){a!==void 0&&(qa=a);let e=qa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _h(a){return a*xs}function Mh(a){return a*ws}function Fo(a){return(a&a-1)===0&&a!==0}function Dc(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Tr(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function bh(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),u=r((e+n)/2),h=s((e-n)/2),f=r((e-n)/2),d=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*f,o*c);break;case"YZY":a.set(l*f,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*f,o*u,o*c);break;case"XZX":a.set(o*u,l*g,l*d,o*c);break;case"YXY":a.set(l*d,o*u,l*g,o*c);break;case"ZYZ":a.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vn(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ge(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var wh=Object.freeze({__proto__:null,DEG2RAD:xs,RAD2DEG:ws,generateUUID:qt,clamp:gt,euclideanModulo:Zo,mapLinear:uh,inverseLerp:hh,lerp:vs,damp:fh,pingpong:dh,smoothstep:ph,smootherstep:mh,randInt:gh,randFloat:xh,randFloatSpread:vh,seededRandom:yh,degToRad:_h,radToDeg:Mh,isPowerOfTwo:Fo,ceilPowerOfTwo:Dc,floorPowerOfTwo:Tr,setQuaternionFromProperEuler:bh,normalize:Ge,denormalize:vn});class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],m=i[0],p=i[3],v=i[6],_=i[1],w=i[4],S=i[7],M=i[2],E=i[5],R=i[8];return s[0]=r*m+o*_+l*M,s[3]=r*p+o*w+l*E,s[6]=r*v+o*S+l*R,s[1]=c*m+u*_+h*M,s[4]=c*p+u*w+h*E,s[7]=c*v+u*S+h*R,s[2]=f*m+d*_+g*M,s[5]=f*p+d*w+g*E,s[8]=f*v+d*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-n*s*u+n*o*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*r-o*c,f=o*l-u*s,d=c*s-r*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(i*c-u*n)*m,e[2]=(o*n-i*r)*m,e[3]=f*m,e[4]=(u*t-i*l)*m,e[5]=(i*s-o*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(r*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hr.makeScale(e,t)),this}rotate(e){return this.premultiply(Hr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new Nt;function Rc(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ss(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function ii(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function yr(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Wr={[Kt]:{[bs]:ii},[bs]:{[Kt]:yr}},bt={legacyMode:!0,get workingColorSpace(){return bs},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Wr[e]&&Wr[e][t]!==void 0){const n=Wr[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},it={r:0,g:0,b:0},Ht={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function Xr(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function zs(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=Zo(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Xr(r,s,e+1/3),this.g=Xr(r,s,e),this.b=Xr(r,s,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,bt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,bt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,bt.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Kt){const n=Ic[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return bt.fromWorkingColorSpace(zs(this,it),e),gt(it.r*255,0,255)<<16^gt(it.g*255,0,255)<<8^gt(it.b*255,0,255)<<0}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(zs(this,it),t);const n=it.r,i=it.g,s=it.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=u<=.5?h/(r+o):h/(2-r-o),r){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(zs(this,it),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=Kt){return bt.fromWorkingColorSpace(zs(this,it),e),e!==Kt?`color(${e} ${it.r} ${it.g} ${it.b})`:`rgb(${it.r*255|0},${it.g*255|0},${it.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ht),Ht.h+=e,Ht.s+=t,Ht.l+=n,this.setHSL(Ht.h,Ht.s,Ht.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ht),e.getHSL(Ns);const n=vs(Ht.h,Ns.h,t),i=vs(Ht.s,Ns.s,t),s=vs(Ht.l,Ns.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Se.NAMES=Ic;let fi;class Nc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=Ss("canvas")),fi.width=e.width,fi.height=e.height;const n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ii(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class zc{constructor(e=null){this.isSource=!0,this.uuid=qt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(qr(i[r].image)):s.push(qr(i[r]))}else s=qr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function qr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Nc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sh=0;class tt extends ui{constructor(e=tt.DEFAULT_IMAGE,t=tt.DEFAULT_MAPPING,n=kt,i=kt,s=ht,r=ci,o=Vt,l=oi,c=tt.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=qt(),this.name="",this.source=new zc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ze:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ze:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}tt.DEFAULT_IMAGE=null;tt.DEFAULT_MAPPING=Ac;tt.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,t=0,n=0,i=1){He.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(d+1)/2,M=(v+1)/2,E=(u+f)/4,R=(h+m)/4,b=(g+p)/4;return w>S&&w>M?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=E/n,s=R/n):S>M?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=E/i,s=b/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=R/s,i=b/s),this.set(n,i,s,t),this}let _=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(h-m)/_,this.z=(f-u)/_,this.w=Math.acos((c+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ct extends ui{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new He(0,0,e,t),this.scissorTest=!1,this.viewport=new He(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jo extends tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Th extends tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[r+0],d=s[r+1],g=s[r+2],m=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==d||u!==g){let p=1-o;const v=l*f+c*d+u*g+h*m,_=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const M=Math.sqrt(w),E=Math.atan2(M,v*_);p=Math.sin(p*E)/M,o=Math.sin(o*E)/M}const S=o*_;if(l=l*p+f*S,c=c*p+d*S,u=u*p+g*S,h=h*p+m*S,p===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[r],f=s[r+1],d=s[r+2],g=s[r+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(r-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(r-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*o+i*c-s*l,this._y=i*u+r*l+s*o-n*c,this._z=s*u+r*c+n*l-i*o,this._w=r*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*r+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=l*t+r*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-r*t,f=-s*t-r*n-o*i;return this.x=c*l+f*-s+u*-o-h*-r,this.y=u*l+f*-r+h*-s-c*-o,this.z=h*l+f*-o+c*-r-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jr.copy(this).projectOnVector(e),this.sub(jr)}reflect(e){return this.sub(jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new L,ja=new kn;class ut{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>r&&(r=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>r&&(r=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)qn.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(qn)}else n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox),Yr.applyMatrix4(e.matrixWorld),this.union(Yr);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Us.subVectors(this.max,ts),di.subVectors(e.a,ts),pi.subVectors(e.b,ts),mi.subVectors(e.c,ts),wn.subVectors(pi,di),Sn.subVectors(mi,pi),jn.subVectors(di,mi);let t=[0,-wn.z,wn.y,0,-Sn.z,Sn.y,0,-jn.z,jn.y,wn.z,0,-wn.x,Sn.z,0,-Sn.x,jn.z,0,-jn.x,-wn.y,wn.x,0,-Sn.y,Sn.x,0,-jn.y,jn.x,0];return!Kr(t,di,pi,mi,Us)||(t=[1,0,0,0,1,0,0,0,1],!Kr(t,di,pi,mi,Us))?!1:(Fs.crossVectors(wn,Sn),t=[Fs.x,Fs.y,Fs.z],Kr(t,di,pi,mi,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return qn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new L,new L,new L,new L,new L,new L,new L,new L],qn=new L,Yr=new ut,di=new L,pi=new L,mi=new L,wn=new L,Sn=new L,jn=new L,ts=new L,Us=new L,Fs=new L,Yn=new L;function Kr(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Yn.fromArray(a,s);const o=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ah=new ut,ns=new L,Zr=new L;class hi{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ah.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ns,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Zr)),this.expandByPoint(ns.copy(e.center).sub(Zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new L,Jr=new L,Bs=new L,Tn=new L,Qr=new L,Os=new L,$r=new L;class We{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.direction).multiplyScalar(t).add(this.origin),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jr.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(Jr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Bs),o=Tn.dot(this.direction),l=-Tn.dot(Bs),c=Tn.lengthSq(),u=Math.abs(1-r*r);let h,f,d,g;if(u>0)if(h=r*l-o,f=r*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,d=h*(h+r*f+2*o)+f*(r*h+f+2*l)+c}else f=s,h=Math.max(0,-(r*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(r*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-r*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(r*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=r>0?-s:s,h=Math.max(0,-(r*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Bs).multiplyScalar(f).add(Jr),d}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,r=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,r=(e.min.y-f.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,i,s){Qr.subVectors(t,e),Os.subVectors(n,e),$r.crossVectors(Qr,Os);let r=this.direction.dot($r),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Tn.subVectors(this.origin,e);const l=o*this.direction.dot(Os.crossVectors(Tn,Os));if(l<0)return null;const c=o*this.direction.dot(Qr.cross(Tn));if(c<0||l+c>r)return null;const u=-o*Tn.dot($r);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,l,c,u,h,f,d,g,m,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=r,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=f,v[3]=d,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gi.setFromMatrixColumn(e,0).length(),s=1/gi.setFromMatrixColumn(e,1).length(),r=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=r*u,d=r*h,g=o*u,m=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-m*c,t[9]=-o*l,t[2]=m-f*c,t[6]=g+d*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f+m*o,t[4]=g*o-d,t[8]=r*c,t[1]=r*h,t[5]=r*u,t[9]=-o,t[2]=d*o-g,t[6]=m+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f-m*o,t[4]=-r*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=r*u,t[9]=m-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*u,d=r*h,g=o*u,m=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,d=r*c,g=o*l,m=o*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+d,t[1]=h,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=r*l,d=r*c,g=o*l,m=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=r*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eh,e,Ch)}lookAt(e,t,n){const i=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),An.crossVectors(n,Rt),An.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),An.crossVectors(n,Rt)),An.normalize(),ks.crossVectors(Rt,An),i[0]=An.x,i[4]=ks.x,i[8]=Rt.x,i[1]=An.y,i[5]=ks.y,i[9]=Rt.y,i[2]=An.z,i[6]=ks.z,i[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],v=n[14],_=n[3],w=n[7],S=n[11],M=n[15],E=i[0],R=i[4],b=i[8],P=i[12],I=i[1],y=i[5],T=i[9],A=i[13],C=i[2],z=i[6],V=i[10],B=i[14],O=i[3],Q=i[7],$=i[11],H=i[15];return s[0]=r*E+o*I+l*C+c*O,s[4]=r*R+o*y+l*z+c*Q,s[8]=r*b+o*T+l*V+c*$,s[12]=r*P+o*A+l*B+c*H,s[1]=u*E+h*I+f*C+d*O,s[5]=u*R+h*y+f*z+d*Q,s[9]=u*b+h*T+f*V+d*$,s[13]=u*P+h*A+f*B+d*H,s[2]=g*E+m*I+p*C+v*O,s[6]=g*R+m*y+p*z+v*Q,s[10]=g*b+m*T+p*V+v*$,s[14]=g*P+m*A+p*B+v*H,s[3]=_*E+w*I+S*C+M*O,s[7]=_*R+w*y+S*z+M*Q,s[11]=_*b+w*T+S*V+M*$,s[15]=_*P+w*A+S*B+M*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],v=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+m*(+t*l*d-t*c*f+s*r*f-i*r*d+i*c*u-s*l*u)+p*(+t*c*h-t*o*d-s*r*h+n*r*d+s*o*u-n*c*u)+v*(-i*o*u-t*l*h+t*o*f+i*r*h-n*r*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],v=e[15],_=h*p*c-m*f*c+m*l*d-o*p*d-h*l*v+o*f*v,w=g*f*c-u*p*c-g*l*d+r*p*d+u*l*v-r*f*v,S=u*m*c-g*h*c+g*o*d-r*m*d-u*o*v+r*h*v,M=g*h*l-u*m*l-g*o*f+r*m*f+u*o*p-r*h*p,E=t*_+n*w+i*S+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=_*R,e[1]=(m*f*s-h*p*s-m*i*d+n*p*d+h*i*v-n*f*v)*R,e[2]=(o*p*s-m*l*s+m*i*c-n*p*c-o*i*v+n*l*v)*R,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*R,e[4]=w*R,e[5]=(u*p*s-g*f*s+g*i*d-t*p*d-u*i*v+t*f*v)*R,e[6]=(g*l*s-r*p*s-g*i*c+t*p*c+r*i*v-t*l*v)*R,e[7]=(r*f*s-u*l*s+u*i*c-t*f*c-r*i*d+t*l*d)*R,e[8]=S*R,e[9]=(g*h*s-u*m*s-g*n*d+t*m*d+u*n*v-t*h*v)*R,e[10]=(r*m*s-g*o*s+g*n*c-t*m*c-r*n*v+t*o*v)*R,e[11]=(u*o*s-r*h*s-u*n*c+t*h*c+r*n*d-t*o*d)*R,e[12]=M*R,e[13]=(u*m*i-g*h*i+g*n*f-t*m*f-u*n*p+t*h*p)*R,e[14]=(g*o*i-r*m*i-g*n*l+t*m*l+r*n*p-t*o*p)*R,e[15]=(r*h*i-u*o*i+u*n*l-t*h*l-r*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,u=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*r,0,c*l-i*o,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,u=r+r,h=o+o,f=s*c,d=s*u,g=s*h,m=r*u,p=r*h,v=o*h,_=l*c,w=l*u,S=l*h,M=n.x,E=n.y,R=n.z;return i[0]=(1-(m+v))*M,i[1]=(d+S)*M,i[2]=(g-w)*M,i[3]=0,i[4]=(d-S)*E,i[5]=(1-(f+v))*E,i[6]=(p+_)*E,i[7]=0,i[8]=(g+w)*R,i[9]=(p-_)*R,i[10]=(1-(f+m))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=gi.set(i[0],i[1],i[2]).length();const r=gi.set(i[4],i[5],i[6]).length(),o=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Wt.copy(this);const c=1/s,u=1/r,h=1/o;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=u,Wt.elements[5]*=u,Wt.elements[6]*=u,Wt.elements[8]*=h,Wt.elements[9]*=h,Wt.elements[10]*=h,t.setFromRotationMatrix(Wt),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(r+s)/(r-s),d=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(r-s),h=(t+e)*l,f=(n+i)*c,d=(r+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new L,Wt=new pe,Eh=new L(0,0,0),Ch=new L(1,1,1),An=new L,ks=new L,Rt=new L,Ya=new pe,Ka=new kn;class ji{constructor(e=0,t=0,n=0,i=ji.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-gt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ya.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ya,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ji.DefaultOrder="XYZ";ji.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Qo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lh=0;const Za=new L,xi=new kn,un=new pe,Vs=new L,is=new L,Ph=new L,Dh=new kn,Ja=new L(1,0,0),Qa=new L(0,1,0),$a=new L(0,0,1),Rh={type:"added"},el={type:"removed"};class Ye extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DefaultUp.clone();const e=new L,t=new ji,n=new kn,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new Nt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ye.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ye.DefaultMatrixWorldAutoUpdate,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(Ja,e)}rotateY(e){return this.rotateOnAxis(Qa,e)}rotateZ(e){return this.rotateOnAxis($a,e)}translateOnAxis(e,t){return Za.copy(e).applyQuaternion(this.quaternion),this.position.add(Za.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ja,e)}translateY(e){return this.translateOnAxis(Qa,e)}translateZ(e){return this.translateOnAxis($a,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(is,Vs,this.up):un.lookAt(Vs,is,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),xi.setFromRotationMatrix(un),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(el)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(el)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Ph),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),h=r(e.shapes),f=r(e.skeletons),d=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ye.DefaultUp=new L(0,1,0);Ye.DefaultMatrixAutoUpdate=!0;Ye.DefaultMatrixWorldAutoUpdate=!0;const Xt=new L,hn=new L,eo=new L,fn=new L,vi=new L,yi=new L,tl=new L,to=new L,no=new L,io=new L;class ft{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xt.subVectors(e,t),i.cross(Xt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Xt.subVectors(i,t),hn.subVectors(n,t),eo.subVectors(e,t);const r=Xt.dot(Xt),o=Xt.dot(hn),l=Xt.dot(eo),c=hn.dot(hn),u=hn.dot(eo),h=r*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,g=(r*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,fn),l.set(0,0),l.addScaledVector(s,fn.x),l.addScaledVector(r,fn.y),l.addScaledVector(o,fn.z),l}static isFrontFacing(e,t,n,i){return Xt.subVectors(n,t),hn.subVectors(e,t),Xt.cross(hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Xt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ft.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ft.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ft.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ft.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ft.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;vi.subVectors(i,n),yi.subVectors(s,n),to.subVectors(e,n);const l=vi.dot(to),c=yi.dot(to);if(l<=0&&c<=0)return t.copy(n);no.subVectors(e,i);const u=vi.dot(no),h=yi.dot(no);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(vi,r);io.subVectors(e,s);const d=vi.dot(io),g=yi.dot(io);if(g>=0&&d<=g)return t.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(yi,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return tl.subVectors(s,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(tl,o);const v=1/(p+m+f);return r=m*v,o=f*v,t.copy(n).addScaledVector(vi,r).addScaledVector(yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ih=0;class en extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=qt(),this.name="",this.type="Material",this.blending=zi,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wc,this.blendDst=Sc,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Un extends en{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new L,Gs=new J;class Je{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=zo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uc extends Je{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fc extends Je{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends Je{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nh=0;const Bt=new pe,so=new Ye,_i=new L,It=new ut,ss=new ut,ct=new L;class Et extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=qt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rc(e)?Fc:Uc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ut);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(It.min,ss.min),It.expandByPoint(ct),ct.addVectors(It.max,ss.max),It.expandByPoint(ct)):(It.expandByPoint(ss.min),It.expandByPoint(ss.max))}It.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ct));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ct.fromBufferAttribute(o,c),l&&(_i.fromBufferAttribute(e,c),ct.add(_i)),i=Math.max(i,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new L,u[I]=new L;const h=new L,f=new L,d=new L,g=new J,m=new J,p=new J,v=new L,_=new L;function w(I,y,T){h.fromArray(i,I*3),f.fromArray(i,y*3),d.fromArray(i,T*3),g.fromArray(r,I*2),m.fromArray(r,y*2),p.fromArray(r,T*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const A=1/(m.x*p.y-p.x*m.y);isFinite(A)&&(v.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(A),_.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(A),c[I].add(v),c[y].add(v),c[T].add(v),u[I].add(_),u[y].add(_),u[T].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let I=0,y=S.length;I<y;++I){const T=S[I],A=T.start,C=T.count;for(let z=A,V=A+C;z<V;z+=3)w(n[z+0],n[z+1],n[z+2])}const M=new L,E=new L,R=new L,b=new L;function P(I){R.fromArray(s,I*3),b.copy(R);const y=c[I];M.copy(y),M.sub(R.multiplyScalar(R.dot(y))).normalize(),E.crossVectors(b,y);const A=E.dot(u[I])<0?-1:1;l[I*4]=M.x,l[I*4+1]=M.y,l[I*4+2]=M.z,l[I*4+3]=A}for(let I=0,y=S.length;I<y;++I){const T=S[I],A=T.start,C=T.count;for(let z=A,V=A+C;z<V;z+=3)P(n[z+0]),P(n[z+1]),P(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,r=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,p),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){o.isInterleavedBufferAttribute?d=l[m]*o.data.stride+o.offset:d=l[m]*u;for(let v=0;v<u;v++)f[g++]=c[d++]}return new Je(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const nl=new pe,Mi=new We,ro=new hi,En=new L,Cn=new L,Ln=new L,oo=new L,ao=new L,lo=new L,Hs=new L,Ws=new L,Xs=new L,qs=new J,js=new J,Ys=new J,co=new L,Ks=new L;class Ke extends Ye{constructor(e=new Et,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),e.ray.intersectsSphere(ro)===!1)||(nl.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(nl),n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,p=d.length;m<p;m++){const v=d[m],_=i[v.materialIndex],w=Math.max(v.start,g.start),S=Math.min(o.count,Math.min(v.start+v.count,g.start+g.count));for(let M=w,E=S;M<E;M+=3){const R=o.getX(M),b=o.getX(M+1),P=o.getX(M+2);r=Zs(this,_,e,Mi,l,c,u,h,f,R,b,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const m=Math.max(0,g.start),p=Math.min(o.count,g.start+g.count);for(let v=m,_=p;v<_;v+=3){const w=o.getX(v),S=o.getX(v+1),M=o.getX(v+2);r=Zs(this,i,e,Mi,l,c,u,h,f,w,S,M),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,p=d.length;m<p;m++){const v=d[m],_=i[v.materialIndex],w=Math.max(v.start,g.start),S=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let M=w,E=S;M<E;M+=3){const R=M,b=M+1,P=M+2;r=Zs(this,_,e,Mi,l,c,u,h,f,R,b,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let v=m,_=p;v<_;v+=3){const w=v,S=v+1,M=v+2;r=Zs(this,i,e,Mi,l,c,u,h,f,w,S,M),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function zh(a,e,t,n,i,s,r,o){let l;if(e.side===zt?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side!==Le,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:a}}function Zs(a,e,t,n,i,s,r,o,l,c,u,h){En.fromBufferAttribute(i,c),Cn.fromBufferAttribute(i,u),Ln.fromBufferAttribute(i,h);const f=a.morphTargetInfluences;if(s&&f){Hs.set(0,0,0),Ws.set(0,0,0),Xs.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=f[g],v=s[g];p!==0&&(oo.fromBufferAttribute(v,c),ao.fromBufferAttribute(v,u),lo.fromBufferAttribute(v,h),r?(Hs.addScaledVector(oo,p),Ws.addScaledVector(ao,p),Xs.addScaledVector(lo,p)):(Hs.addScaledVector(oo.sub(En),p),Ws.addScaledVector(ao.sub(Cn),p),Xs.addScaledVector(lo.sub(Ln),p)))}En.add(Hs),Cn.add(Ws),Ln.add(Xs)}a.isSkinnedMesh&&(a.boneTransform(c,En),a.boneTransform(u,Cn),a.boneTransform(h,Ln));const d=zh(a,e,t,n,En,Cn,Ln,co);if(d){o&&(qs.fromBufferAttribute(o,c),js.fromBufferAttribute(o,u),Ys.fromBufferAttribute(o,h),d.uv=ft.getUV(co,En,Cn,Ln,qs,js,Ys,new J)),l&&(qs.fromBufferAttribute(l,c),js.fromBufferAttribute(l,u),Ys.fromBufferAttribute(l,h),d.uv2=ft.getUV(co,En,Cn,Ln,qs,js,Ys,new J));const g={a:c,b:u,c:h,normal:new L,materialIndex:0};ft.getNormal(En,Cn,Ln,g.normal),d.face=g}return d}class Yi extends Et{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(h,2));function g(m,p,v,_,w,S,M,E,R,b,P){const I=S/R,y=M/b,T=S/2,A=M/2,C=E/2,z=R+1,V=b+1;let B=0,O=0;const Q=new L;for(let $=0;$<V;$++){const H=$*y-A;for(let j=0;j<z;j++){const te=j*I-T;Q[m]=te*_,Q[p]=H*w,Q[v]=C,c.push(Q.x,Q.y,Q.z),Q[m]=0,Q[p]=0,Q[v]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(j/R),h.push(1-$/b),B+=1}}for(let $=0;$<b;$++)for(let H=0;H<R;H++){const j=f+H+z*$,te=f+H+z*($+1),ie=f+(H+1)+z*($+1),oe=f+(H+1)+z*$;l.push(j,te,oe),l.push(te,ie,oe),O+=6}o.addGroup(d,O,P),d+=O,f+=B}}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tt(a){const e={};for(let t=0;t<a.length;t++){const n=Wi(a[t]);for(const i in n)e[i]=n[i]}return e}function Uh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Bc(a){return a.getRenderTarget()===null&&a.outputEncoding===Pe?Kt:bs}const si={clone:Wi,merge:Tt};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xt extends en{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Oc extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class At extends Oc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=-90,wi=1;class Oh extends Ye{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new At(bi,wi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new At(bi,wi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new At(bi,wi,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new At(bi,wi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new At(bi,wi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new At(bi,wi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=yn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class kc extends tt{constructor(e,t,n,i,s,r,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ki,super(e,t,n,i,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kh extends Ct{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new kc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yi(5,5,5),s=new xt({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Fn});s.uniforms.tEquirect.value=t;const r=new Ke(i,s),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=ht),new Oh(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const uo=new L,Vh=new L,Gh=new Nt;class mn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=uo.subVectors(n,t).cross(Vh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(uo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gh.getNormalMatrix(e),i=this.coplanarPoint(uo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new hi,Js=new L;class $o{constructor(e=new mn,t=new mn,n=new mn,i=new mn,s=new mn,r=new mn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],v=n[13],_=n[14],w=n[15];return t[0].setComponents(o-i,h-l,m-f,w-p).normalize(),t[1].setComponents(o+i,h+l,m+f,w+p).normalize(),t[2].setComponents(o+s,h+c,m+d,w+v).normalize(),t[3].setComponents(o-s,h-c,m-d,w-v).normalize(),t[4].setComponents(o-r,h-u,m-g,w-_).normalize(),t[5].setComponents(o+r,h+u,m+g,w+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Js.x=i.normal.x>0?e.max.x:e.min.x,Js.y=i.normal.y>0?e.max.y:e.min.y,Js.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vc(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Hh(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=a.createBuffer();a.bindBuffer(u,d),a.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;a.bindBuffer(h,c),d.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):a.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:r,remove:o,update:l}}class gn extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],m=[],p=[];for(let v=0;v<u;v++){const _=v*f-r;for(let w=0;w<c;w++){const S=w*h-s;g.push(S,-_,0),m.push(0,0,1),p.push(w/o),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let _=0;_<o;_++){const w=_+c*v,S=_+c*(v+1),M=_+1+c*(v+1),E=_+1+c*v;d.push(w,S,E),d.push(S,M,E)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(m,3)),this.setAttribute("uv",new Lt(p,2))}static fromJSON(e){return new gn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zh="vec3 transformed = vec3( position );",Jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,$h=`#ifdef USE_IRIDESCENCE
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
#endif`,ef=`#ifdef USE_BUMPMAP
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uf=`#define PI 3.141592653589793
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
}`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ff=`vec3 transformedNormal = objectNormal;
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
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
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
#endif`,Nf=`#if defined( USE_ENVMAP )
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
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
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
#endif`,kf=`struct PhysicalMaterial {
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
}`,Vf=`
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ed=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,td=`#ifdef USE_MORPHNORMALS
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
#endif`,nd=`#ifdef USE_MORPHTARGETS
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
#endif`,id=`#ifdef USE_MORPHTARGETS
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
#endif`,sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,rd=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cd=`#ifdef USE_NORMALMAP
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
#endif`,ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,md=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Td=`float getShadowMask() {
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
}`,Ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,Cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ld=`#ifdef USE_SKINNING
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
#endif`,Pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Id=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nd=`#ifdef USE_TRANSMISSION
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
#endif`,zd=`#ifdef USE_TRANSMISSION
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
#endif`,Ud=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Fd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Bd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Od=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,kd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Vd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wd=`uniform sampler2D t2D;
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kd=`#include <common>
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
}`,Zd=`#if DEPTH_PACKING == 3200
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
}`,Jd=`#define DISTANCE
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
}`,Qd=`#define DISTANCE
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tp=`uniform float scale;
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
}`,np=`uniform vec3 diffuse;
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
}`,ip=`#include <common>
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
}`,sp=`uniform vec3 diffuse;
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
}`,rp=`#define LAMBERT
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
}`,op=`#define LAMBERT
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
}`,ap=`#define MATCAP
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
}`,lp=`#define MATCAP
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
}`,cp=`#define NORMAL
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
}`,up=`#define NORMAL
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
}`,hp=`#define PHONG
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
}`,fp=`#define PHONG
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
}`,dp=`#define STANDARD
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
}`,pp=`#define STANDARD
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
}`,mp=`#define TOON
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
}`,gp=`#define TOON
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
}`,xp=`uniform float size;
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
}`,vp=`uniform vec3 diffuse;
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
}`,yp=`#include <common>
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
}`,_p=`uniform vec3 color;
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
}`,Mp=`uniform float rotation;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Te={alphamap_fragment:Wh,alphamap_pars_fragment:Xh,alphatest_fragment:qh,alphatest_pars_fragment:jh,aomap_fragment:Yh,aomap_pars_fragment:Kh,begin_vertex:Zh,beginnormal_vertex:Jh,bsdfs:Qh,iridescence_fragment:$h,bumpmap_pars_fragment:ef,clipping_planes_fragment:tf,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:rf,color_fragment:of,color_pars_fragment:af,color_pars_vertex:lf,color_vertex:cf,common:uf,cube_uv_reflection_fragment:hf,defaultnormal_vertex:ff,displacementmap_pars_vertex:df,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:gf,encodings_fragment:xf,encodings_pars_fragment:vf,envmap_fragment:yf,envmap_common_pars_fragment:_f,envmap_pars_fragment:Mf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:Nf,envmap_vertex:wf,fog_vertex:Sf,fog_pars_vertex:Tf,fog_fragment:Af,fog_pars_fragment:Ef,gradientmap_pars_fragment:Cf,lightmap_fragment:Lf,lightmap_pars_fragment:Pf,lights_lambert_fragment:Df,lights_lambert_pars_fragment:Rf,lights_pars_begin:If,lights_toon_fragment:zf,lights_toon_pars_fragment:Uf,lights_phong_fragment:Ff,lights_phong_pars_fragment:Bf,lights_physical_fragment:Of,lights_physical_pars_fragment:kf,lights_fragment_begin:Vf,lights_fragment_maps:Gf,lights_fragment_end:Hf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:jf,map_fragment:Yf,map_pars_fragment:Kf,map_particle_fragment:Zf,map_particle_pars_fragment:Jf,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:$f,morphcolor_vertex:ed,morphnormal_vertex:td,morphtarget_pars_vertex:nd,morphtarget_vertex:id,normal_fragment_begin:sd,normal_fragment_maps:rd,normal_pars_fragment:od,normal_pars_vertex:ad,normal_vertex:ld,normalmap_pars_fragment:cd,clearcoat_normal_fragment_begin:ud,clearcoat_normal_fragment_maps:hd,clearcoat_pars_fragment:fd,iridescence_pars_fragment:dd,output_fragment:pd,packing:md,premultiplied_alpha_fragment:gd,project_vertex:xd,dithering_fragment:vd,dithering_pars_fragment:yd,roughnessmap_fragment:_d,roughnessmap_pars_fragment:Md,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:wd,shadowmap_vertex:Sd,shadowmask_pars_fragment:Td,skinbase_vertex:Ad,skinning_pars_vertex:Ed,skinning_vertex:Cd,skinnormal_vertex:Ld,specularmap_fragment:Pd,specularmap_pars_fragment:Dd,tonemapping_fragment:Rd,tonemapping_pars_fragment:Id,transmission_fragment:Nd,transmission_pars_fragment:zd,uv_pars_fragment:Ud,uv_pars_vertex:Fd,uv_vertex:Bd,uv2_pars_fragment:Od,uv2_pars_vertex:kd,uv2_vertex:Vd,worldpos_vertex:Gd,background_vert:Hd,background_frag:Wd,backgroundCube_vert:Xd,backgroundCube_frag:qd,cube_vert:jd,cube_frag:Yd,depth_vert:Kd,depth_frag:Zd,distanceRGBA_vert:Jd,distanceRGBA_frag:Qd,equirect_vert:$d,equirect_frag:ep,linedashed_vert:tp,linedashed_frag:np,meshbasic_vert:ip,meshbasic_frag:sp,meshlambert_vert:rp,meshlambert_frag:op,meshmatcap_vert:ap,meshmatcap_frag:lp,meshnormal_vert:cp,meshnormal_frag:up,meshphong_vert:hp,meshphong_frag:fp,meshphysical_vert:dp,meshphysical_frag:pp,meshtoon_vert:mp,meshtoon_frag:gp,points_vert:xp,points_frag:vp,shadow_vert:yp,shadow_frag:_p,sprite_vert:Mp,sprite_frag:bp},re={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Nt},uv2Transform:{value:new Nt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}}},Zt={basic:{uniforms:Tt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Tt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Se(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Tt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Tt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Tt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Se(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Tt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Tt([re.points,re.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Tt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Tt([re.common,re.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Tt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Tt([re.sprite,re.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Tt([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Tt([re.lights,re.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Zt.physical={uniforms:Tt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new J(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Qs={r:0,b:0,g:0};function wp(a,e,t,n,i,s,r){const o=new Se(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(p,v){let _=!1,w=v.isScene===!0?v.background:null;w&&w.isTexture&&(w=(v.backgroundBlurriness>0?t:e).get(w));const S=a.xr,M=S.getSession&&S.getSession();M&&M.environmentBlendMode==="additive"&&(w=null),w===null?m(o,l):w&&w.isColor&&(m(w,1),_=!0),(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Pr)?(u===void 0&&(u=new Ke(new Yi(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:Wi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,(h!==w||f!==w.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=a.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ke(new gn(2,2),new xt({name:"BackgroundMaterial",uniforms:Wi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,v){p.getRGB(Qs,Bc(a)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,v,r)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(o,l)},render:g}}function Sp(a,e,t,n){const i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(C,z,V,B,O){let Q=!1;if(r){const $=m(B,V,z);c!==$&&(c=$,d(c.object)),Q=v(C,B,V,O),Q&&_(C,B,V,O)}else{const $=z.wireframe===!0;(c.geometry!==B.id||c.program!==V.id||c.wireframe!==$)&&(c.geometry=B.id,c.program=V.id,c.wireframe=$,Q=!0)}O!==null&&t.update(O,34963),(Q||u)&&(u=!1,b(C,z,V,B),O!==null&&a.bindBuffer(34963,t.get(O).buffer))}function f(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function d(C){return n.isWebGL2?a.bindVertexArray(C):s.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?a.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function m(C,z,V){const B=V.wireframe===!0;let O=o[C.id];O===void 0&&(O={},o[C.id]=O);let Q=O[z.id];Q===void 0&&(Q={},O[z.id]=Q);let $=Q[B];return $===void 0&&($=p(f()),Q[B]=$),$}function p(C){const z=[],V=[],B=[];for(let O=0;O<i;O++)z[O]=0,V[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:B,object:C,attributes:{},index:null}}function v(C,z,V,B){const O=c.attributes,Q=z.attributes;let $=0;const H=V.getAttributes();for(const j in H)if(H[j].location>=0){const ie=O[j];let oe=Q[j];if(oe===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor)),ie===void 0||ie.attribute!==oe||oe&&ie.data!==oe.data)return!0;$++}return c.attributesNum!==$||c.index!==B}function _(C,z,V,B){const O={},Q=z.attributes;let $=0;const H=V.getAttributes();for(const j in H)if(H[j].location>=0){let ie=Q[j];ie===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor));const oe={};oe.attribute=ie,ie&&ie.data&&(oe.data=ie.data),O[j]=oe,$++}c.attributes=O,c.attributesNum=$,c.index=B}function w(){const C=c.newAttributes;for(let z=0,V=C.length;z<V;z++)C[z]=0}function S(C){M(C,0)}function M(C,z){const V=c.newAttributes,B=c.enabledAttributes,O=c.attributeDivisors;V[C]=1,B[C]===0&&(a.enableVertexAttribArray(C),B[C]=1),O[C]!==z&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,z),O[C]=z)}function E(){const C=c.newAttributes,z=c.enabledAttributes;for(let V=0,B=z.length;V<B;V++)z[V]!==C[V]&&(a.disableVertexAttribArray(V),z[V]=0)}function R(C,z,V,B,O,Q){n.isWebGL2===!0&&(V===5124||V===5125)?a.vertexAttribIPointer(C,z,V,O,Q):a.vertexAttribPointer(C,z,V,B,O,Q)}function b(C,z,V,B){if(n.isWebGL2===!1&&(C.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const O=B.attributes,Q=V.getAttributes(),$=z.defaultAttributeValues;for(const H in Q){const j=Q[H];if(j.location>=0){let te=O[H];if(te===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),te!==void 0){const ie=te.normalized,oe=te.itemSize,K=t.get(te);if(K===void 0)continue;const Ne=K.buffer,he=K.type,Me=K.bytesPerElement;if(te.isInterleavedBufferAttribute){const ue=te.data,ke=ue.stride,Ae=te.offset;if(ue.isInstancedInterleavedBuffer){for(let _e=0;_e<j.locationSize;_e++)M(j.location+_e,ue.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let _e=0;_e<j.locationSize;_e++)S(j.location+_e);a.bindBuffer(34962,Ne);for(let _e=0;_e<j.locationSize;_e++)R(j.location+_e,oe/j.locationSize,he,ie,ke*Me,(Ae+oe/j.locationSize*_e)*Me)}else{if(te.isInstancedBufferAttribute){for(let ue=0;ue<j.locationSize;ue++)M(j.location+ue,te.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ue=0;ue<j.locationSize;ue++)S(j.location+ue);a.bindBuffer(34962,Ne);for(let ue=0;ue<j.locationSize;ue++)R(j.location+ue,oe/j.locationSize,he,ie,oe*Me,oe/j.locationSize*ue*Me)}}else if($!==void 0){const ie=$[H];if(ie!==void 0)switch(ie.length){case 2:a.vertexAttrib2fv(j.location,ie);break;case 3:a.vertexAttrib3fv(j.location,ie);break;case 4:a.vertexAttrib4fv(j.location,ie);break;default:a.vertexAttrib1fv(j.location,ie)}}}}E()}function P(){T();for(const C in o){const z=o[C];for(const V in z){const B=z[V];for(const O in B)g(B[O].object),delete B[O];delete z[V]}delete o[C]}}function I(C){if(o[C.id]===void 0)return;const z=o[C.id];for(const V in z){const B=z[V];for(const O in B)g(B[O].object),delete B[O];delete z[V]}delete o[C.id]}function y(C){for(const z in o){const V=o[z];if(V[C.id]===void 0)continue;const B=V[C.id];for(const O in B)g(B[O].object),delete B[O];delete V[C.id]}}function T(){A(),u=!0,c!==l&&(c=l,d(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:T,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:y,initAttributes:w,enableAttribute:S,disableUnusedAttributes:E}}function Tp(a,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,u){a.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=a,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=r,this.render=o,this.renderInstances=l}function Ap(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),d=a.getParameter(3379),g=a.getParameter(34076),m=a.getParameter(34921),p=a.getParameter(36347),v=a.getParameter(36348),_=a.getParameter(36349),w=f>0,S=r||e.has("OES_texture_float"),M=w&&S,E=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:w,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:E}}function Ep(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new mn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,v=a.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const _=s?0:n,w=_*4;let S=v.clippingState||null;l.value=S,S=u(g,f,w,d);for(let M=0;M!==w;++M)S[M]=t[M];v.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const v=d+m*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<v)&&(p=new Float32Array(v));for(let w=0,S=d;w!==m;++w,S+=4)r.copy(h[w]).applyMatrix4(_,o),r.normal.toArray(p,S),p[S+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Cp(a){let e=new WeakMap;function t(r,o){return o===wr?r.mapping=ki:o===Ro&&(r.mapping=Vi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===wr||o===Ro)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new kh(l.height/2);return c.fromEquirectangularTexture(a,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ps extends Oc{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,il=[.125,.215,.35,.446,.526,.582],Jn=20,ho=new Ps,sl=new Se;let fo=null;const Zn=(1+Math.sqrt(5))/2,Ti=1/Zn,rl=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Zn,Ti),new L(0,Zn,-Ti),new L(Ti,0,Zn),new L(-Ti,0,Zn),new L(Zn,Ti,0),new L(-Zn,Ti,0)];class ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fo),e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:_s,format:Vt,encoding:ai,depthBuffer:!1},i=al(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=al(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lp(s)),this._blurMaterial=Pp(s,e,t)}return i}_compileMaterial(e){const t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,ho)}_sceneToCubeUV(e,t,n,i){const o=new At(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(sl),u.toneMapping=yn,u.autoClear=!1;const d=new Un({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new Ke(new Yi,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(sl),m=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):_===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const w=this._cubeSize;$s(i,_*w,v>2?w:0,w,w),u.setRenderTarget(i),m&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ki||e.mapping===Vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ll());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Ke(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$s(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,ho)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=rl[(i-1)%rl.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ke(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Jn-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):Jn;p>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);const v=[];let _=0;for(let R=0;R<Jn;++R){const b=R/m,P=Math.exp(-b*b/2);v.push(P),R===0?_+=P:R<p&&(_+=2*P)}for(let R=0;R<v.length;R++)v[R]=v[R]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const S=this._sizeLods[i],M=3*S*(i>w-Ri?i-w+Ri:0),E=4*(this._cubeSize-S);$s(t,M,E,3*S,2*S),l.setRenderTarget(t),l.render(h,ho)}}function Lp(a){const e=[],t=[],n=[];let i=a;const s=a-Ri+1+il.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>a-Ri?l=il[r-a+Ri-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,v=1,_=new Float32Array(m*g*d),w=new Float32Array(p*g*d),S=new Float32Array(v*g*d);for(let E=0;E<d;E++){const R=E%3*2/3-1,b=E>2?0:-1,P=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];_.set(P,m*g*E),w.set(f,p*g*E);const I=[E,E,E,E,E,E];S.set(I,v*g*E)}const M=new Et;M.setAttribute("position",new Je(_,m)),M.setAttribute("uv",new Je(w,p)),M.setAttribute("faceIndex",new Je(S,v)),e.push(M),i>Ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function al(a,e,t){const n=new Ct(a,e,t);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Pp(a,e,t){const n=new Float32Array(Jn),i=new L(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ea(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ll(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function cl(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ea(){return`

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
	`}function Dp(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===wr||l===Ro,u=l===ki||l===Vi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new ol(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new ol(a));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Rp(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ip(a,e,t,n){const i={},s=new WeakMap;function r(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const _=d.array;m=d.version;for(let w=0,S=_.length;w<S;w+=3){const M=_[w+0],E=_[w+1],R=_[w+2];f.push(M,E,E,R,R,M)}}else{const _=g.array;m=g.version;for(let w=0,S=_.length/3-1;w<S;w+=3){const M=w+0,E=w+1,R=w+2;f.push(M,E,E,R,R,M)}}const p=new(Rc(f)?Fc:Uc)(f,1);p.version=m;const v=s.get(h);v&&e.remove(v),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Np(a,e,t,n){const i=n.isWebGL2;let s;function r(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){a.drawElements(s,d,o,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let m,p;if(i)m=a,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,o,f*l,g),t.update(d,s,g)}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=h}function zp(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Up(a,e){return a[0]-e[0]}function Fp(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Bp(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new He,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==p){let V=function(){C.dispose(),s.delete(u),u.removeEventListener("dispose",V)};var g=V;v!==void 0&&v.texture.dispose();const S=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let I=0;S===!0&&(I=1),M===!0&&(I=2),E===!0&&(I=3);let y=u.attributes.position.count*I,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*T*4*p),C=new Jo(A,y,T,p);C.type=$t,C.needsUpdate=!0;const z=I*4;for(let B=0;B<p;B++){const O=R[B],Q=b[B],$=P[B],H=y*T*4*B;for(let j=0;j<O.count;j++){const te=j*z;S===!0&&(r.fromBufferAttribute(O,j),A[H+te+0]=r.x,A[H+te+1]=r.y,A[H+te+2]=r.z,A[H+te+3]=0),M===!0&&(r.fromBufferAttribute(Q,j),A[H+te+4]=r.x,A[H+te+5]=r.y,A[H+te+6]=r.z,A[H+te+7]=0),E===!0&&(r.fromBufferAttribute($,j),A[H+te+8]=r.x,A[H+te+9]=r.y,A[H+te+10]=r.z,A[H+te+11]=$.itemSize===4?r.w:1)}}v={count:p,texture:C,size:new J(y,T)},s.set(u,v),u.addEventListener("dispose",V)}let _=0;for(let S=0;S<d.length;S++)_+=d[S];const w=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(a,"morphTargetBaseInfluence",w),f.getUniforms().setValue(a,"morphTargetInfluences",d),f.getUniforms().setValue(a,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==m){p=[];for(let M=0;M<m;M++)p[M]=[M,0];n[u.id]=p}for(let M=0;M<m;M++){const E=p[M];E[0]=M,E[1]=d[M]}p.sort(Fp);for(let M=0;M<8;M++)M<m&&p[M][1]?(o[M][0]=p[M][0],o[M][1]=p[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Up);const v=u.morphAttributes.position,_=u.morphAttributes.normal;let w=0;for(let M=0;M<8;M++){const E=o[M],R=E[0],b=E[1];R!==Number.MAX_SAFE_INTEGER&&b?(v&&u.getAttribute("morphTarget"+M)!==v[R]&&u.setAttribute("morphTarget"+M,v[R]),_&&u.getAttribute("morphNormal"+M)!==_[R]&&u.setAttribute("morphNormal"+M,_[R]),i[M]=b,w+=b):(v&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),_&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const S=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(a,"morphTargetBaseInfluence",S),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Op(a,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const Gc=new tt,Hc=new Jo,Wc=new Th,Xc=new kc,ul=[],hl=[],fl=new Float32Array(16),dl=new Float32Array(9),pl=new Float32Array(4);function Ki(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=ul[i];if(s===void 0&&(s=new Float32Array(i),ul[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function st(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function rt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Dr(a,e){let t=hl[e];t===void 0&&(t=new Int32Array(e),hl[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function kp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Vp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;a.uniform2fv(this.addr,e),rt(t,e)}}function Gp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;a.uniform3fv(this.addr,e),rt(t,e)}}function Hp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;a.uniform4fv(this.addr,e),rt(t,e)}}function Wp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;pl.set(n),a.uniformMatrix2fv(this.addr,!1,pl),rt(t,n)}}function Xp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;dl.set(n),a.uniformMatrix3fv(this.addr,!1,dl),rt(t,n)}}function qp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;fl.set(n),a.uniformMatrix4fv(this.addr,!1,fl),rt(t,n)}}function jp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Yp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;a.uniform2iv(this.addr,e),rt(t,e)}}function Kp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;a.uniform3iv(this.addr,e),rt(t,e)}}function Zp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;a.uniform4iv(this.addr,e),rt(t,e)}}function Jp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Qp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;a.uniform2uiv(this.addr,e),rt(t,e)}}function $p(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;a.uniform3uiv(this.addr,e),rt(t,e)}}function em(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;a.uniform4uiv(this.addr,e),rt(t,e)}}function tm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Gc,i)}function nm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wc,i)}function im(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xc,i)}function sm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hc,i)}function rm(a){switch(a){case 5126:return kp;case 35664:return Vp;case 35665:return Gp;case 35666:return Hp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return jp;case 35667:case 35671:return Yp;case 35668:case 35672:return Kp;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Qp;case 36295:return $p;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return sm}}function om(a,e){a.uniform1fv(this.addr,e)}function am(a,e){const t=Ki(e,this.size,2);a.uniform2fv(this.addr,t)}function lm(a,e){const t=Ki(e,this.size,3);a.uniform3fv(this.addr,t)}function cm(a,e){const t=Ki(e,this.size,4);a.uniform4fv(this.addr,t)}function um(a,e){const t=Ki(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function hm(a,e){const t=Ki(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function fm(a,e){const t=Ki(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function dm(a,e){a.uniform1iv(this.addr,e)}function pm(a,e){a.uniform2iv(this.addr,e)}function mm(a,e){a.uniform3iv(this.addr,e)}function gm(a,e){a.uniform4iv(this.addr,e)}function xm(a,e){a.uniform1uiv(this.addr,e)}function vm(a,e){a.uniform2uiv(this.addr,e)}function ym(a,e){a.uniform3uiv(this.addr,e)}function _m(a,e){a.uniform4uiv(this.addr,e)}function Mm(a,e,t){const n=this.cache,i=e.length,s=Dr(t,i);st(n,s)||(a.uniform1iv(this.addr,s),rt(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Gc,s[r])}function bm(a,e,t){const n=this.cache,i=e.length,s=Dr(t,i);st(n,s)||(a.uniform1iv(this.addr,s),rt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Wc,s[r])}function wm(a,e,t){const n=this.cache,i=e.length,s=Dr(t,i);st(n,s)||(a.uniform1iv(this.addr,s),rt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Xc,s[r])}function Sm(a,e,t){const n=this.cache,i=e.length,s=Dr(t,i);st(n,s)||(a.uniform1iv(this.addr,s),rt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Hc,s[r])}function Tm(a){switch(a){case 5126:return om;case 35664:return am;case 35665:return lm;case 35666:return cm;case 35674:return um;case 35675:return hm;case 35676:return fm;case 5124:case 35670:return dm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return xm;case 36294:return vm;case 36295:return ym;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Sm}}class Am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=rm(t.type)}}class Em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Tm(t.type)}}class Cm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const po=/(\w+)(\])?(\[|\.)?/g;function ml(a,e){a.seq.push(e),a.map[e.id]=e}function Lm(a,e,t){const n=a.name,i=n.length;for(po.lastIndex=0;;){const s=po.exec(n),r=po.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){ml(t,c===void 0?new Am(o,a,e):new Em(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new Cm(o),ml(t,h)),t=h}}}class _r{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Lm(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function gl(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Pm=0;function Dm(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Rm(a){switch(a){case ai:return["Linear","( value )"];case Pe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function xl(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Dm(a.getShaderSource(e),r)}else return i}function Im(a,e){const t=Rm(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Nm(a,e){let t;switch(e){case Fu:t="Linear";break;case Bu:t="Reinhard";break;case Ou:t="OptimizedCineon";break;case ku:t="ACESFilmic";break;case Vu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zm(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function Um(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fm(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function ms(a){return a!==""}function vl(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yl(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(a){return a.replace(Bm,Om)}function Om(a,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Bo(t)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(a){return a.replace(km,Vm)}function Vm(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ml(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gm(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===bc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ps&&(e="SHADOWMAP_TYPE_VSM"),e}function Hm(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ki:case Vi:e="ENVMAP_TYPE_CUBE";break;case Pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wm(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Xm(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Tc:e="ENVMAP_BLENDING_MULTIPLY";break;case zu:e="ENVMAP_BLENDING_MIX";break;case Uu:e="ENVMAP_BLENDING_ADD";break}return e}function qm(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jm(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=Gm(t),c=Hm(t),u=Wm(t),h=Xm(t),f=qm(t),d=t.isWebGL2?"":zm(t),g=Um(s),m=i.createProgram();let p,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(ms).join(`
`),p.length>0&&(p+=`
`),v=[d,g].filter(ms).join(`
`),v.length>0&&(v+=`
`)):(p=[Ml(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),v=[d,Ml(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Te.tonemapping_pars_fragment:"",t.toneMapping!==yn?Nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,Im("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),r=Bo(r),r=vl(r,t),r=yl(r,t),o=Bo(o),o=vl(o,t),o=yl(o,t),r=_l(r),o=_l(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===Xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=_+p+r,S=_+v+o,M=gl(i,35633,w),E=gl(i,35632,S);if(i.attachShader(m,M),i.attachShader(m,E),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),a.debug.checkShaderErrors){const P=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(M).trim(),y=i.getShaderInfoLog(E).trim();let T=!0,A=!0;if(i.getProgramParameter(m,35714)===!1){T=!1;const C=xl(i,M,"vertex"),z=xl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+P+`
`+C+`
`+z)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(I===""||y==="")&&(A=!1);A&&(this.diagnostics={runnable:T,programLog:P,vertexShader:{log:I,prefix:p},fragmentShader:{log:y,prefix:v}})}i.deleteShader(M),i.deleteShader(E);let R;this.getUniforms=function(){return R===void 0&&(R=new _r(i,m)),R};let b;return this.getAttributes=function(){return b===void 0&&(b=Fm(i,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Pm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=E,this}let Ym=0;class Km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zm(e),t.set(e,n)),n}}class Zm{constructor(e){this.id=Ym++,this.code=e,this.usedTimes=0}}function Jm(a,e,t,n,i,s,r){const o=new Qo,l=new Km,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,P,I,y,T){const A=y.fog,C=T.geometry,z=b.isMeshStandardMaterial?y.environment:null,V=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),B=V&&V.mapping===Pr?V.image.height:null,O=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const Q=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,$=Q!==void 0?Q.length:0;let H=0;C.morphAttributes.position!==void 0&&(H=1),C.morphAttributes.normal!==void 0&&(H=2),C.morphAttributes.color!==void 0&&(H=3);let j,te,ie,oe;if(O){const ke=Zt[O];j=ke.vertexShader,te=ke.fragmentShader}else j=b.vertexShader,te=b.fragmentShader,l.update(b),ie=l.getVertexShaderID(b),oe=l.getFragmentShaderID(b);const K=a.getRenderTarget(),Ne=b.alphaTest>0,he=b.clearcoat>0,Me=b.iridescence>0;return{isWebGL2:u,shaderID:O,shaderName:b.type,vertexShader:j,fragmentShader:te,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:oe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:T.isInstancedMesh===!0,instancingColor:T.isInstancedMesh===!0&&T.instanceColor!==null,supportsVertexTextures:f,outputEncoding:K===null?a.outputEncoding:K.isXRRenderTarget===!0?K.texture.encoding:ai,map:!!b.map,matcap:!!b.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:B,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===lh,tangentSpaceNormalMap:b.normalMapType===Pc,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Pe,clearcoat:he,clearcoatMap:he&&!!b.clearcoatMap,clearcoatRoughnessMap:he&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!b.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!b.iridescenceMap,iridescenceThicknessMap:Me&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===zi,alphaMap:!!b.alphaMap,alphaTest:Ne,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!C.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!A,useFog:b.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:T.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:H,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:b.toneMapped?a.toneMapping:yn,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Le,flipSided:b.side===zt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)P.push(I),P.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(v(P,b),_(P,b),P.push(a.outputEncoding)),P.push(b.customProgramCacheKey),P.join()}function v(b,P){b.push(P.precision),b.push(P.outputEncoding),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.combine),b.push(P.vertexUvs),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function _(b,P){o.disableAll(),P.isWebGL2&&o.enable(0),P.supportsVertexTextures&&o.enable(1),P.instancing&&o.enable(2),P.instancingColor&&o.enable(3),P.map&&o.enable(4),P.matcap&&o.enable(5),P.envMap&&o.enable(6),P.lightMap&&o.enable(7),P.aoMap&&o.enable(8),P.emissiveMap&&o.enable(9),P.bumpMap&&o.enable(10),P.normalMap&&o.enable(11),P.objectSpaceNormalMap&&o.enable(12),P.tangentSpaceNormalMap&&o.enable(13),P.clearcoat&&o.enable(14),P.clearcoatMap&&o.enable(15),P.clearcoatRoughnessMap&&o.enable(16),P.clearcoatNormalMap&&o.enable(17),P.iridescence&&o.enable(18),P.iridescenceMap&&o.enable(19),P.iridescenceThicknessMap&&o.enable(20),P.displacementMap&&o.enable(21),P.specularMap&&o.enable(22),P.roughnessMap&&o.enable(23),P.metalnessMap&&o.enable(24),P.gradientMap&&o.enable(25),P.alphaMap&&o.enable(26),P.alphaTest&&o.enable(27),P.vertexColors&&o.enable(28),P.vertexAlphas&&o.enable(29),P.vertexUvs&&o.enable(30),P.vertexTangents&&o.enable(31),P.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.skinning&&o.enable(4),P.morphTargets&&o.enable(5),P.morphNormals&&o.enable(6),P.morphColors&&o.enable(7),P.premultipliedAlpha&&o.enable(8),P.shadowMapEnabled&&o.enable(9),P.physicallyCorrectLights&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.specularIntensityMap&&o.enable(15),P.specularColorMap&&o.enable(16),P.transmission&&o.enable(17),P.transmissionMap&&o.enable(18),P.thicknessMap&&o.enable(19),P.sheen&&o.enable(20),P.sheenColorMap&&o.enable(21),P.sheenRoughnessMap&&o.enable(22),P.decodeVideoTexture&&o.enable(23),P.opaque&&o.enable(24),b.push(o.mask)}function w(b){const P=g[b.type];let I;if(P){const y=Zt[P];I=si.clone(y.uniforms)}else I=b.uniforms;return I}function S(b,P){let I;for(let y=0,T=c.length;y<T;y++){const A=c[y];if(A.cacheKey===P){I=A,++I.usedTimes;break}}return I===void 0&&(I=new jm(a,P,b,s),c.push(I)),I}function M(b){if(--b.usedTimes===0){const P=c.indexOf(b);c[P]=c[c.length-1],c.pop(),b.destroy()}}function E(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:S,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:R}}function Qm(){let a=new WeakMap;function e(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function t(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function $m(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function bl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function wl(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(h,f,d,g,m,p){let v=a[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},a[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=d,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=m,v.group=p),e++,v}function o(h,f,d,g,m,p){const v=r(h,f,d,g,m,p);d.transmission>0?n.push(v):d.transparent===!0?i.push(v):t.push(v)}function l(h,f,d,g,m,p){const v=r(h,f,d,g,m,p);d.transmission>0?n.unshift(v):d.transparent===!0?i.unshift(v):t.unshift(v)}function c(h,f){t.length>1&&t.sort(h||$m),n.length>1&&n.sort(f||bl),i.length>1&&i.sort(f||bl)}function u(){for(let h=e,f=a.length;h<f;h++){const d=a[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function eg(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new wl,a.set(n,[r])):i>=s.length?(r=new wl,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function tg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Se};break;case"SpotLight":t={position:new L,direction:new L,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new L,halfWidth:new L,halfHeight:new L};break}return a[e.id]=t,t}}}function ng(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let ig=0;function sg(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function rg(a,e){const t=new tg,n=ng(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new L);const s=new L,r=new pe,o=new pe;function l(u,h){let f=0,d=0,g=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,p=0,v=0,_=0,w=0,S=0,M=0,E=0,R=0,b=0;u.sort(sg);const P=h!==!0?Math.PI:1;for(let y=0,T=u.length;y<T;y++){const A=u[y],C=A.color,z=A.intensity,V=A.distance,B=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)f+=C.r*z*P,d+=C.g*z*P,g+=C.b*z*P;else if(A.isLightProbe)for(let O=0;O<9;O++)i.probe[O].addScaledVector(A.sh.coefficients[O],z);else if(A.isDirectionalLight){const O=t.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity*P),A.castShadow){const Q=A.shadow,$=n.get(A);$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=A.shadow.matrix,S++}i.directional[m]=O,m++}else if(A.isSpotLight){const O=t.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(C).multiplyScalar(z*P),O.distance=V,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,i.spot[v]=O;const Q=A.shadow;if(A.map&&(i.spotLightMap[R]=A.map,R++,Q.updateMatrices(A),A.castShadow&&b++),i.spotLightMatrix[v]=Q.matrix,A.castShadow){const $=n.get(A);$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=B,E++}v++}else if(A.isRectAreaLight){const O=t.get(A);O.color.copy(C).multiplyScalar(z),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),i.rectArea[_]=O,_++}else if(A.isPointLight){const O=t.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity*P),O.distance=A.distance,O.decay=A.decay,A.castShadow){const Q=A.shadow,$=n.get(A);$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,i.pointShadow[p]=$,i.pointShadowMap[p]=B,i.pointShadowMatrix[p]=A.shadow.matrix,M++}i.point[p]=O,p++}else if(A.isHemisphereLight){const O=t.get(A);O.skyColor.copy(A.color).multiplyScalar(z*P),O.groundColor.copy(A.groundColor).multiplyScalar(z*P),i.hemi[w]=O,w++}}_>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==m||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==w||I.numDirectionalShadows!==S||I.numPointShadows!==M||I.numSpotShadows!==E||I.numSpotMaps!==R)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=_,i.point.length=p,i.hemi.length=w,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,I.directionalLength=m,I.pointLength=p,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=w,I.numDirectionalShadows=S,I.numPointShadows=M,I.numSpotShadows=E,I.numSpotMaps=R,i.version=ig++)}function c(u,h){let f=0,d=0,g=0,m=0,p=0;const v=h.matrixWorldInverse;for(let _=0,w=u.length;_<w;_++){const S=u[_];if(S.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),f++}else if(S.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),g++}else if(S.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(v),o.identity(),r.copy(S.matrixWorld),r.premultiply(v),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(v),d++}else if(S.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:i}}function Sl(a,e){const t=new rg(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function og(a,e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new Sl(a,e),t.set(s,[l])):r>=o.length?(l=new Sl(a,e),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ag extends en{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lg extends en{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ug=`uniform sampler2D shadow_pass;
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
}`;function hg(a,e,t){let n=new $o;const i=new J,s=new J,r=new He,o=new ag({depthPacking:ah}),l=new lg,c={},u=t.maxTextureSize,h={0:zt,1:Mn,2:Le},f=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:cg,fragmentShader:ug}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ke(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc,this.render=function(S,M,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const R=a.getRenderTarget(),b=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),I=a.state;I.setBlending(Fn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let y=0,T=S.length;y<T;y++){const A=S[y],C=A.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",A,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;i.copy(C.mapSize);const z=C.getFrameExtents();if(i.multiply(z),s.copy(C.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/z.x),i.x=s.x*z.x,C.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/z.y),i.y=s.y*z.y,C.mapSize.y=s.y)),C.map===null){const B=this.type!==ps?{minFilter:Xe,magFilter:Xe}:{};C.map=new Ct(i.x,i.y,B),C.map.texture.name=A.name+".shadowMap",C.camera.updateProjectionMatrix()}a.setRenderTarget(C.map),a.clear();const V=C.getViewportCount();for(let B=0;B<V;B++){const O=C.getViewport(B);r.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),I.viewport(r),C.updateMatrices(A,B),n=C.getFrustum(),w(M,E,C.camera,A,this.type)}C.isPointLightShadow!==!0&&this.type===ps&&v(C,E),C.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(R,b,P)};function v(S,M){const E=e.update(m);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ct(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(M,null,E,f,m,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(M,null,E,d,m,null)}function _(S,M,E,R,b,P){let I=null;const y=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(y!==void 0?I=y:I=E.isPointLight===!0?l:o,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const T=I.uuid,A=M.uuid;let C=c[T];C===void 0&&(C={},c[T]=C);let z=C[A];z===void 0&&(z=I.clone(),C[A]=z),I=z}return I.visible=M.visible,I.wireframe=M.wireframe,P===ps?I.side=M.shadowSide!==null?M.shadowSide:M.side:I.side=M.shadowSide!==null?M.shadowSide:h[M.side],I.alphaMap=M.alphaMap,I.alphaTest=M.alphaTest,I.map=M.map,I.clipShadows=M.clipShadows,I.clippingPlanes=M.clippingPlanes,I.clipIntersection=M.clipIntersection,I.displacementMap=M.displacementMap,I.displacementScale=M.displacementScale,I.displacementBias=M.displacementBias,I.wireframeLinewidth=M.wireframeLinewidth,I.linewidth=M.linewidth,E.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(E.matrixWorld),I.nearDistance=R,I.farDistance=b),I}function w(S,M,E,R,b){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===ps)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const y=e.update(S),T=S.material;if(Array.isArray(T)){const A=y.groups;for(let C=0,z=A.length;C<z;C++){const V=A[C],B=T[V.materialIndex];if(B&&B.visible){const O=_(S,B,R,E.near,E.far,b);a.renderBufferDirect(E,null,y,O,S,V)}}}else if(T.visible){const A=_(S,T,R,E.near,E.far,b);a.renderBufferDirect(E,null,y,A,S,null)}}const I=S.children;for(let y=0,T=I.length;y<T;y++)w(I[y],M,E,R,b)}}function fg(a,e,t){const n=t.isWebGL2;function i(){let F=!1;const q=new He;let ee=null;const ce=new He(0,0,0,0);return{setMask:function(de){ee!==de&&!F&&(a.colorMask(de,de,de,de),ee=de)},setLocked:function(de){F=de},setClear:function(de,Be,at,dt,Gn){Gn===!0&&(de*=dt,Be*=dt,at*=dt),q.set(de,Be,at,dt),ce.equals(q)===!1&&(a.clearColor(de,Be,at,dt),ce.copy(q))},reset:function(){F=!1,ee=null,ce.set(-1,0,0,0)}}}function s(){let F=!1,q=null,ee=null,ce=null;return{setTest:function(de){de?Ne(2929):he(2929)},setMask:function(de){q!==de&&!F&&(a.depthMask(de),q=de)},setFunc:function(de){if(ee!==de){switch(de){case Cu:a.depthFunc(512);break;case Lu:a.depthFunc(519);break;case Pu:a.depthFunc(513);break;case Do:a.depthFunc(515);break;case Du:a.depthFunc(514);break;case Ru:a.depthFunc(518);break;case Iu:a.depthFunc(516);break;case Nu:a.depthFunc(517);break;default:a.depthFunc(515)}ee=de}},setLocked:function(de){F=de},setClear:function(de){ce!==de&&(a.clearDepth(de),ce=de)},reset:function(){F=!1,q=null,ee=null,ce=null}}}function r(){let F=!1,q=null,ee=null,ce=null,de=null,Be=null,at=null,dt=null,Gn=null;return{setTest:function(je){F||(je?Ne(2960):he(2960))},setMask:function(je){q!==je&&!F&&(a.stencilMask(je),q=je)},setFunc:function(je,on,Ft){(ee!==je||ce!==on||de!==Ft)&&(a.stencilFunc(je,on,Ft),ee=je,ce=on,de=Ft)},setOp:function(je,on,Ft){(Be!==je||at!==on||dt!==Ft)&&(a.stencilOp(je,on,Ft),Be=je,at=on,dt=Ft)},setLocked:function(je){F=je},setClear:function(je){Gn!==je&&(a.clearStencil(je),Gn=je)},reset:function(){F=!1,q=null,ee=null,ce=null,de=null,Be=null,at=null,dt=null,Gn=null}}}const o=new i,l=new s,c=new r,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,m=[],p=null,v=!1,_=null,w=null,S=null,M=null,E=null,R=null,b=null,P=!1,I=null,y=null,T=null,A=null,C=null;const z=a.getParameter(35661);let V=!1,B=0;const O=a.getParameter(7938);O.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(O)[1]),V=B>=1):O.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),V=B>=2);let Q=null,$={};const H=a.getParameter(3088),j=a.getParameter(2978),te=new He().fromArray(H),ie=new He().fromArray(j);function oe(F,q,ee){const ce=new Uint8Array(4),de=a.createTexture();a.bindTexture(F,de),a.texParameteri(F,10241,9728),a.texParameteri(F,10240,9728);for(let Be=0;Be<ee;Be++)a.texImage2D(q+Be,0,6408,1,1,0,6408,5121,ce);return de}const K={};K[3553]=oe(3553,3553,1),K[34067]=oe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(2929),l.setFunc(Do),_t(!1),Ut(ga),Ne(2884),vt(Fn);function Ne(F){f[F]!==!0&&(a.enable(F),f[F]=!0)}function he(F){f[F]!==!1&&(a.disable(F),f[F]=!1)}function Me(F,q){return d[F]!==q?(a.bindFramebuffer(F,q),d[F]=q,n&&(F===36009&&(d[36160]=q),F===36160&&(d[36009]=q)),!0):!1}function ue(F,q){let ee=m,ce=!1;if(F)if(ee=g.get(q),ee===void 0&&(ee=[],g.set(q,ee)),F.isWebGLMultipleRenderTargets){const de=F.texture;if(ee.length!==de.length||ee[0]!==36064){for(let Be=0,at=de.length;Be<at;Be++)ee[Be]=36064+Be;ee.length=de.length,ce=!0}}else ee[0]!==36064&&(ee[0]=36064,ce=!0);else ee[0]!==1029&&(ee[0]=1029,ce=!0);ce&&(t.isWebGL2?a.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function ke(F){return p!==F?(a.useProgram(F),p=F,!0):!1}const Ae={[Di]:32774,[xu]:32778,[vu]:32779};if(n)Ae[ya]=32775,Ae[_a]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(Ae[ya]=F.MIN_EXT,Ae[_a]=F.MAX_EXT)}const _e={[yu]:0,[_u]:1,[Mu]:768,[wc]:770,[Eu]:776,[Tu]:774,[wu]:772,[bu]:769,[Sc]:771,[Au]:775,[Su]:773};function vt(F,q,ee,ce,de,Be,at,dt){if(F===Fn){v===!0&&(he(3042),v=!1);return}if(v===!1&&(Ne(3042),v=!0),F!==gu){if(F!==_||dt!==P){if((w!==Di||E!==Di)&&(a.blendEquation(32774),w=Di,E=Di),dt)switch(F){case zi:a.blendFuncSeparate(1,771,1,771);break;case Po:a.blendFunc(1,1);break;case xa:a.blendFuncSeparate(0,769,0,1);break;case va:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case zi:a.blendFuncSeparate(770,771,1,771);break;case Po:a.blendFunc(770,1);break;case xa:a.blendFuncSeparate(0,769,0,1);break;case va:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,M=null,R=null,b=null,_=F,P=dt}return}de=de||q,Be=Be||ee,at=at||ce,(q!==w||de!==E)&&(a.blendEquationSeparate(Ae[q],Ae[de]),w=q,E=de),(ee!==S||ce!==M||Be!==R||at!==b)&&(a.blendFuncSeparate(_e[ee],_e[ce],_e[Be],_e[at]),S=ee,M=ce,R=Be,b=at),_=F,P=!1}function yt(F,q){F.side===Le?he(2884):Ne(2884);let ee=F.side===zt;q&&(ee=!ee),_t(ee),F.blending===zi&&F.transparent===!1?vt(Fn):vt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const ce=F.stencilWrite;c.setTest(ce),ce&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ve(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ne(32926):he(32926)}function _t(F){I!==F&&(F?a.frontFace(2304):a.frontFace(2305),I=F)}function Ut(F){F!==du?(Ne(2884),F!==y&&(F===ga?a.cullFace(1029):F===pu?a.cullFace(1028):a.cullFace(1032))):he(2884),y=F}function nt(F){F!==T&&(V&&a.lineWidth(F),T=F)}function Ve(F,q,ee){F?(Ne(32823),(A!==q||C!==ee)&&(a.polygonOffset(q,ee),A=q,C=ee)):he(32823)}function rn(F){F?Ne(3089):he(3089)}function Gt(F){F===void 0&&(F=33984+z-1),Q!==F&&(a.activeTexture(F),Q=F)}function U(F,q,ee){ee===void 0&&(Q===null?ee=33984+z-1:ee=Q);let ce=$[ee];ce===void 0&&(ce={type:void 0,texture:void 0},$[ee]=ce),(ce.type!==F||ce.texture!==q)&&(Q!==ee&&(a.activeTexture(ee),Q=ee),a.bindTexture(F,q||K[F]),ce.type=F,ce.texture=q)}function D(){const F=$[Q];F!==void 0&&F.type!==void 0&&(a.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function X(){try{a.compressedTexImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{a.compressedTexImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{a.texSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{a.texSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{a.texStorage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{a.texStorage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{a.texImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{a.texImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(F){te.equals(F)===!1&&(a.scissor(F.x,F.y,F.z,F.w),te.copy(F))}function me(F){ie.equals(F)===!1&&(a.viewport(F.x,F.y,F.z,F.w),ie.copy(F))}function Ue(F,q){let ee=h.get(q);ee===void 0&&(ee=new WeakMap,h.set(q,ee));let ce=ee.get(F);ce===void 0&&(ce=a.getUniformBlockIndex(q,F.name),ee.set(F,ce))}function qe(F,q){const ce=h.get(q).get(F);u.get(F)!==ce&&(a.uniformBlockBinding(q,ce,F.__bindingPointIndex),u.set(F,ce))}function ot(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},Q=null,$={},d={},g=new WeakMap,m=[],p=null,v=!1,_=null,w=null,S=null,M=null,E=null,R=null,b=null,P=!1,I=null,y=null,T=null,A=null,C=null,te.set(0,0,a.canvas.width,a.canvas.height),ie.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:he,bindFramebuffer:Me,drawBuffers:ue,useProgram:ke,setBlending:vt,setMaterial:yt,setFlipSided:_t,setCullFace:Ut,setLineWidth:nt,setPolygonOffset:Ve,setScissorTest:rn,activeTexture:Gt,bindTexture:U,unbindTexture:D,compressedTexImage2D:X,compressedTexImage3D:ne,texImage2D:ye,texImage3D:fe,updateUBOMapping:Ue,uniformBlockBinding:qe,texStorage2D:Z,texStorage3D:xe,texSubImage2D:se,texSubImage3D:ae,compressedTexSubImage2D:be,compressedTexSubImage3D:le,scissor:ve,viewport:me,reset:ot}}function dg(a,e,t,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,D){return v?new OffscreenCanvas(U,D):Ss("canvas")}function w(U,D,X,ne){let se=1;if((U.width>ne||U.height>ne)&&(se=ne/Math.max(U.width,U.height)),se<1||D===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const ae=D?Tr:Math.floor,be=ae(se*U.width),le=ae(se*U.height);m===void 0&&(m=_(be,le));const Z=X?_(be,le):m;return Z.width=be,Z.height=le,Z.getContext("2d").drawImage(U,0,0,be,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+be+"x"+le+")."),Z}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function S(U){return Fo(U.width)&&Fo(U.height)}function M(U){return o?!1:U.wrapS!==kt||U.wrapT!==kt||U.minFilter!==Xe&&U.minFilter!==ht}function E(U,D){return U.generateMipmaps&&D&&U.minFilter!==Xe&&U.minFilter!==ht}function R(U){a.generateMipmap(U)}function b(U,D,X,ne,se=!1){if(o===!1)return D;if(U!==null){if(a[U]!==void 0)return a[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ae=D;return D===6403&&(X===5126&&(ae=33326),X===5131&&(ae=33325),X===5121&&(ae=33321)),D===33319&&(X===5126&&(ae=33328),X===5131&&(ae=33327),X===5121&&(ae=33323)),D===6408&&(X===5126&&(ae=34836),X===5131&&(ae=34842),X===5121&&(ae=ne===Pe&&se===!1?35907:32856),X===32819&&(ae=32854),X===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function P(U,D,X){return E(U,X)===!0||U.isFramebufferTexture&&U.minFilter!==Xe&&U.minFilter!==ht?Math.log2(Math.max(D.width,D.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?D.mipmaps.length:1}function I(U){return U===Xe||U===Io||U===No?9728:9729}function y(U){const D=U.target;D.removeEventListener("dispose",y),A(D),D.isVideoTexture&&g.delete(D)}function T(U){const D=U.target;D.removeEventListener("dispose",T),z(D)}function A(U){const D=n.get(U);if(D.__webglInit===void 0)return;const X=U.source,ne=p.get(X);if(ne){const se=ne[D.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(U),Object.keys(ne).length===0&&p.delete(X)}n.remove(U)}function C(U){const D=n.get(U);a.deleteTexture(D.__webglTexture);const X=U.source,ne=p.get(X);delete ne[D.__cacheKey],r.memory.textures--}function z(U){const D=U.texture,X=n.get(U),ne=n.get(D);if(ne.__webglTexture!==void 0&&(a.deleteTexture(ne.__webglTexture),r.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)a.deleteFramebuffer(X.__webglFramebuffer[se]),X.__webglDepthbuffer&&a.deleteRenderbuffer(X.__webglDepthbuffer[se]);else{if(a.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&a.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&a.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let se=0;se<X.__webglColorRenderbuffer.length;se++)X.__webglColorRenderbuffer[se]&&a.deleteRenderbuffer(X.__webglColorRenderbuffer[se]);X.__webglDepthRenderbuffer&&a.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let se=0,ae=D.length;se<ae;se++){const be=n.get(D[se]);be.__webglTexture&&(a.deleteTexture(be.__webglTexture),r.memory.textures--),n.remove(D[se])}n.remove(D),n.remove(U)}let V=0;function B(){V=0}function O(){const U=V;return U>=l&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l),V+=1,U}function Q(U){const D=[];return D.push(U.wrapS),D.push(U.wrapT),D.push(U.wrapR||0),D.push(U.magFilter),D.push(U.minFilter),D.push(U.anisotropy),D.push(U.internalFormat),D.push(U.format),D.push(U.type),D.push(U.generateMipmaps),D.push(U.premultiplyAlpha),D.push(U.flipY),D.push(U.unpackAlignment),D.push(U.encoding),D.join()}function $(U,D){const X=n.get(U);if(U.isVideoTexture&&rn(U),U.isRenderTargetTexture===!1&&U.version>0&&X.__version!==U.version){const ne=U.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(X,U,D);return}}t.bindTexture(3553,X.__webglTexture,33984+D)}function H(U,D){const X=n.get(U);if(U.version>0&&X.__version!==U.version){he(X,U,D);return}t.bindTexture(35866,X.__webglTexture,33984+D)}function j(U,D){const X=n.get(U);if(U.version>0&&X.__version!==U.version){he(X,U,D);return}t.bindTexture(32879,X.__webglTexture,33984+D)}function te(U,D){const X=n.get(U);if(U.version>0&&X.__version!==U.version){Me(X,U,D);return}t.bindTexture(34067,X.__webglTexture,33984+D)}const ie={[Ze]:10497,[kt]:33071,[Sr]:33648},oe={[Xe]:9728,[Io]:9984,[No]:9986,[ht]:9729,[Ec]:9985,[ci]:9987};function K(U,D,X){if(X?(a.texParameteri(U,10242,ie[D.wrapS]),a.texParameteri(U,10243,ie[D.wrapT]),(U===32879||U===35866)&&a.texParameteri(U,32882,ie[D.wrapR]),a.texParameteri(U,10240,oe[D.magFilter]),a.texParameteri(U,10241,oe[D.minFilter])):(a.texParameteri(U,10242,33071),a.texParameteri(U,10243,33071),(U===32879||U===35866)&&a.texParameteri(U,32882,33071),(D.wrapS!==kt||D.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(U,10240,I(D.magFilter)),a.texParameteri(U,10241,I(D.minFilter)),D.minFilter!==Xe&&D.minFilter!==ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(D.type===$t&&e.has("OES_texture_float_linear")===!1||o===!1&&D.type===_s&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||n.get(D).__currentAnisotropy)&&(a.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,i.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy)}}function Ne(U,D){let X=!1;U.__webglInit===void 0&&(U.__webglInit=!0,D.addEventListener("dispose",y));const ne=D.source;let se=p.get(ne);se===void 0&&(se={},p.set(ne,se));const ae=Q(D);if(ae!==U.__cacheKey){se[ae]===void 0&&(se[ae]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,X=!0),se[ae].usedTimes++;const be=se[U.__cacheKey];be!==void 0&&(se[U.__cacheKey].usedTimes--,be.usedTimes===0&&C(D)),U.__cacheKey=ae,U.__webglTexture=se[ae].texture}return X}function he(U,D,X){let ne=3553;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(ne=35866),D.isData3DTexture&&(ne=32879);const se=Ne(U,D),ae=D.source;t.bindTexture(ne,U.__webglTexture,33984+X);const be=n.get(ae);if(ae.version!==be.__version||se===!0){t.activeTexture(33984+X),a.pixelStorei(37440,D.flipY),a.pixelStorei(37441,D.premultiplyAlpha),a.pixelStorei(3317,D.unpackAlignment),a.pixelStorei(37443,0);const le=M(D)&&S(D.image)===!1;let Z=w(D.image,le,!1,u);Z=Gt(D,Z);const xe=S(Z)||o,ye=s.convert(D.format,D.encoding);let fe=s.convert(D.type),ve=b(D.internalFormat,ye,fe,D.encoding,D.isVideoTexture);K(ne,D,xe);let me;const Ue=D.mipmaps,qe=o&&D.isVideoTexture!==!0,ot=be.__version===void 0||se===!0,F=P(D,Z,xe);if(D.isDepthTexture)ve=6402,o?D.type===$t?ve=36012:D.type===ei?ve=33190:D.type===Ui?ve=35056:ve=33189:D.type===$t&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===ni&&ve===6402&&D.type!==Cc&&D.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=ei,fe=s.convert(D.type)),D.format===Gi&&ve===6402&&(ve=34041,D.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=Ui,fe=s.convert(D.type))),ot&&(qe?t.texStorage2D(3553,1,ve,Z.width,Z.height):t.texImage2D(3553,0,ve,Z.width,Z.height,0,ye,fe,null));else if(D.isDataTexture)if(Ue.length>0&&xe){qe&&ot&&t.texStorage2D(3553,F,ve,Ue[0].width,Ue[0].height);for(let q=0,ee=Ue.length;q<ee;q++)me=Ue[q],qe?t.texSubImage2D(3553,q,0,0,me.width,me.height,ye,fe,me.data):t.texImage2D(3553,q,ve,me.width,me.height,0,ye,fe,me.data);D.generateMipmaps=!1}else qe?(ot&&t.texStorage2D(3553,F,ve,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Z.width,Z.height,ye,fe,Z.data)):t.texImage2D(3553,0,ve,Z.width,Z.height,0,ye,fe,Z.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){qe&&ot&&t.texStorage3D(35866,F,ve,Ue[0].width,Ue[0].height,Z.depth);for(let q=0,ee=Ue.length;q<ee;q++)me=Ue[q],D.format!==Vt?ye!==null?qe?t.compressedTexSubImage3D(35866,q,0,0,0,me.width,me.height,Z.depth,ye,me.data,0,0):t.compressedTexImage3D(35866,q,ve,me.width,me.height,Z.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(35866,q,0,0,0,me.width,me.height,Z.depth,ye,fe,me.data):t.texImage3D(35866,q,ve,me.width,me.height,Z.depth,0,ye,fe,me.data)}else{qe&&ot&&t.texStorage2D(3553,F,ve,Ue[0].width,Ue[0].height);for(let q=0,ee=Ue.length;q<ee;q++)me=Ue[q],D.format!==Vt?ye!==null?qe?t.compressedTexSubImage2D(3553,q,0,0,me.width,me.height,ye,me.data):t.compressedTexImage2D(3553,q,ve,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(3553,q,0,0,me.width,me.height,ye,fe,me.data):t.texImage2D(3553,q,ve,me.width,me.height,0,ye,fe,me.data)}else if(D.isDataArrayTexture)qe?(ot&&t.texStorage3D(35866,F,ve,Z.width,Z.height,Z.depth),t.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,ye,fe,Z.data)):t.texImage3D(35866,0,ve,Z.width,Z.height,Z.depth,0,ye,fe,Z.data);else if(D.isData3DTexture)qe?(ot&&t.texStorage3D(32879,F,ve,Z.width,Z.height,Z.depth),t.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,ye,fe,Z.data)):t.texImage3D(32879,0,ve,Z.width,Z.height,Z.depth,0,ye,fe,Z.data);else if(D.isFramebufferTexture){if(ot)if(qe)t.texStorage2D(3553,F,ve,Z.width,Z.height);else{let q=Z.width,ee=Z.height;for(let ce=0;ce<F;ce++)t.texImage2D(3553,ce,ve,q,ee,0,ye,fe,null),q>>=1,ee>>=1}}else if(Ue.length>0&&xe){qe&&ot&&t.texStorage2D(3553,F,ve,Ue[0].width,Ue[0].height);for(let q=0,ee=Ue.length;q<ee;q++)me=Ue[q],qe?t.texSubImage2D(3553,q,0,0,ye,fe,me):t.texImage2D(3553,q,ve,ye,fe,me);D.generateMipmaps=!1}else qe?(ot&&t.texStorage2D(3553,F,ve,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,ye,fe,Z)):t.texImage2D(3553,0,ve,ye,fe,Z);E(D,xe)&&R(ne),be.__version=ae.version,D.onUpdate&&D.onUpdate(D)}U.__version=D.version}function Me(U,D,X){if(D.image.length!==6)return;const ne=Ne(U,D),se=D.source;t.bindTexture(34067,U.__webglTexture,33984+X);const ae=n.get(se);if(se.version!==ae.__version||ne===!0){t.activeTexture(33984+X),a.pixelStorei(37440,D.flipY),a.pixelStorei(37441,D.premultiplyAlpha),a.pixelStorei(3317,D.unpackAlignment),a.pixelStorei(37443,0);const be=D.isCompressedTexture||D.image[0].isCompressedTexture,le=D.image[0]&&D.image[0].isDataTexture,Z=[];for(let q=0;q<6;q++)!be&&!le?Z[q]=w(D.image[q],!1,!0,c):Z[q]=le?D.image[q].image:D.image[q],Z[q]=Gt(D,Z[q]);const xe=Z[0],ye=S(xe)||o,fe=s.convert(D.format,D.encoding),ve=s.convert(D.type),me=b(D.internalFormat,fe,ve,D.encoding),Ue=o&&D.isVideoTexture!==!0,qe=ae.__version===void 0||ne===!0;let ot=P(D,xe,ye);K(34067,D,ye);let F;if(be){Ue&&qe&&t.texStorage2D(34067,ot,me,xe.width,xe.height);for(let q=0;q<6;q++){F=Z[q].mipmaps;for(let ee=0;ee<F.length;ee++){const ce=F[ee];D.format!==Vt?fe!==null?Ue?t.compressedTexSubImage2D(34069+q,ee,0,0,ce.width,ce.height,fe,ce.data):t.compressedTexImage2D(34069+q,ee,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(34069+q,ee,0,0,ce.width,ce.height,fe,ve,ce.data):t.texImage2D(34069+q,ee,me,ce.width,ce.height,0,fe,ve,ce.data)}}}else{F=D.mipmaps,Ue&&qe&&(F.length>0&&ot++,t.texStorage2D(34067,ot,me,Z[0].width,Z[0].height));for(let q=0;q<6;q++)if(le){Ue?t.texSubImage2D(34069+q,0,0,0,Z[q].width,Z[q].height,fe,ve,Z[q].data):t.texImage2D(34069+q,0,me,Z[q].width,Z[q].height,0,fe,ve,Z[q].data);for(let ee=0;ee<F.length;ee++){const de=F[ee].image[q].image;Ue?t.texSubImage2D(34069+q,ee+1,0,0,de.width,de.height,fe,ve,de.data):t.texImage2D(34069+q,ee+1,me,de.width,de.height,0,fe,ve,de.data)}}else{Ue?t.texSubImage2D(34069+q,0,0,0,fe,ve,Z[q]):t.texImage2D(34069+q,0,me,fe,ve,Z[q]);for(let ee=0;ee<F.length;ee++){const ce=F[ee];Ue?t.texSubImage2D(34069+q,ee+1,0,0,fe,ve,ce.image[q]):t.texImage2D(34069+q,ee+1,me,fe,ve,ce.image[q])}}}E(D,ye)&&R(34067),ae.__version=se.version,D.onUpdate&&D.onUpdate(D)}U.__version=D.version}function ue(U,D,X,ne,se){const ae=s.convert(X.format,X.encoding),be=s.convert(X.type),le=b(X.internalFormat,ae,be,X.encoding);n.get(D).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,le,D.width,D.height,D.depth,0,ae,be,null):t.texImage2D(se,0,le,D.width,D.height,0,ae,be,null)),t.bindFramebuffer(36160,U),Ve(D)?f.framebufferTexture2DMultisampleEXT(36160,ne,se,n.get(X).__webglTexture,0,nt(D)):(se===3553||se>=34069&&se<=34074)&&a.framebufferTexture2D(36160,ne,se,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(U,D,X){if(a.bindRenderbuffer(36161,U),D.depthBuffer&&!D.stencilBuffer){let ne=33189;if(X||Ve(D)){const se=D.depthTexture;se&&se.isDepthTexture&&(se.type===$t?ne=36012:se.type===ei&&(ne=33190));const ae=nt(D);Ve(D)?f.renderbufferStorageMultisampleEXT(36161,ae,ne,D.width,D.height):a.renderbufferStorageMultisample(36161,ae,ne,D.width,D.height)}else a.renderbufferStorage(36161,ne,D.width,D.height);a.framebufferRenderbuffer(36160,36096,36161,U)}else if(D.depthBuffer&&D.stencilBuffer){const ne=nt(D);X&&Ve(D)===!1?a.renderbufferStorageMultisample(36161,ne,35056,D.width,D.height):Ve(D)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,D.width,D.height):a.renderbufferStorage(36161,34041,D.width,D.height),a.framebufferRenderbuffer(36160,33306,36161,U)}else{const ne=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let se=0;se<ne.length;se++){const ae=ne[se],be=s.convert(ae.format,ae.encoding),le=s.convert(ae.type),Z=b(ae.internalFormat,be,le,ae.encoding),xe=nt(D);X&&Ve(D)===!1?a.renderbufferStorageMultisample(36161,xe,Z,D.width,D.height):Ve(D)?f.renderbufferStorageMultisampleEXT(36161,xe,Z,D.width,D.height):a.renderbufferStorage(36161,Z,D.width,D.height)}}a.bindRenderbuffer(36161,null)}function Ae(U,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,U),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),$(D.depthTexture,0);const ne=n.get(D.depthTexture).__webglTexture,se=nt(D);if(D.depthTexture.format===ni)Ve(D)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,se):a.framebufferTexture2D(36160,36096,3553,ne,0);else if(D.depthTexture.format===Gi)Ve(D)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,se):a.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function _e(U){const D=n.get(U),X=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!D.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ae(D.__webglFramebuffer,U)}else if(X){D.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,D.__webglFramebuffer[ne]),D.__webglDepthbuffer[ne]=a.createRenderbuffer(),ke(D.__webglDepthbuffer[ne],U,!1)}else t.bindFramebuffer(36160,D.__webglFramebuffer),D.__webglDepthbuffer=a.createRenderbuffer(),ke(D.__webglDepthbuffer,U,!1);t.bindFramebuffer(36160,null)}function vt(U,D,X){const ne=n.get(U);D!==void 0&&ue(ne.__webglFramebuffer,U,U.texture,36064,3553),X!==void 0&&_e(U)}function yt(U){const D=U.texture,X=n.get(U),ne=n.get(D);U.addEventListener("dispose",T),U.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=a.createTexture()),ne.__version=D.version,r.memory.textures++);const se=U.isWebGLCubeRenderTarget===!0,ae=U.isWebGLMultipleRenderTargets===!0,be=S(U)||o;if(se){X.__webglFramebuffer=[];for(let le=0;le<6;le++)X.__webglFramebuffer[le]=a.createFramebuffer()}else{if(X.__webglFramebuffer=a.createFramebuffer(),ae)if(i.drawBuffers){const le=U.texture;for(let Z=0,xe=le.length;Z<xe;Z++){const ye=n.get(le[Z]);ye.__webglTexture===void 0&&(ye.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&U.samples>0&&Ve(U)===!1){const le=ae?D:[D];X.__webglMultisampledFramebuffer=a.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let Z=0;Z<le.length;Z++){const xe=le[Z];X.__webglColorRenderbuffer[Z]=a.createRenderbuffer(),a.bindRenderbuffer(36161,X.__webglColorRenderbuffer[Z]);const ye=s.convert(xe.format,xe.encoding),fe=s.convert(xe.type),ve=b(xe.internalFormat,ye,fe,xe.encoding,U.isXRRenderTarget===!0),me=nt(U);a.renderbufferStorageMultisample(36161,me,ve,U.width,U.height),a.framebufferRenderbuffer(36160,36064+Z,36161,X.__webglColorRenderbuffer[Z])}a.bindRenderbuffer(36161,null),U.depthBuffer&&(X.__webglDepthRenderbuffer=a.createRenderbuffer(),ke(X.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ne.__webglTexture),K(34067,D,be);for(let le=0;le<6;le++)ue(X.__webglFramebuffer[le],U,D,36064,34069+le);E(D,be)&&R(34067),t.unbindTexture()}else if(ae){const le=U.texture;for(let Z=0,xe=le.length;Z<xe;Z++){const ye=le[Z],fe=n.get(ye);t.bindTexture(3553,fe.__webglTexture),K(3553,ye,be),ue(X.__webglFramebuffer,U,ye,36064+Z,3553),E(ye,be)&&R(3553)}t.unbindTexture()}else{let le=3553;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(o?le=U.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ne.__webglTexture),K(le,D,be),ue(X.__webglFramebuffer,U,D,36064,le),E(D,be)&&R(le),t.unbindTexture()}U.depthBuffer&&_e(U)}function _t(U){const D=S(U)||o,X=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let ne=0,se=X.length;ne<se;ne++){const ae=X[ne];if(E(ae,D)){const be=U.isWebGLCubeRenderTarget?34067:3553,le=n.get(ae).__webglTexture;t.bindTexture(be,le),R(be),t.unbindTexture()}}}function Ut(U){if(o&&U.samples>0&&Ve(U)===!1){const D=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],X=U.width,ne=U.height;let se=16384;const ae=[],be=U.stencilBuffer?33306:36096,le=n.get(U),Z=U.isWebGLMultipleRenderTargets===!0;if(Z)for(let xe=0;xe<D.length;xe++)t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,le.__webglFramebuffer),a.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,le.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,le.__webglFramebuffer);for(let xe=0;xe<D.length;xe++){ae.push(36064+xe),U.depthBuffer&&ae.push(be);const ye=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ye===!1&&(U.depthBuffer&&(se|=256),U.stencilBuffer&&(se|=1024)),Z&&a.framebufferRenderbuffer(36008,36064,36161,le.__webglColorRenderbuffer[xe]),ye===!0&&(a.invalidateFramebuffer(36008,[be]),a.invalidateFramebuffer(36009,[be])),Z){const fe=n.get(D[xe]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,fe,0)}a.blitFramebuffer(0,0,X,ne,0,0,X,ne,se,9728),d&&a.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let xe=0;xe<D.length;xe++){t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+xe,36161,le.__webglColorRenderbuffer[xe]);const ye=n.get(D[xe]).__webglTexture;t.bindFramebuffer(36160,le.__webglFramebuffer),a.framebufferTexture2D(36009,36064+xe,3553,ye,0)}t.bindFramebuffer(36009,le.__webglMultisampledFramebuffer)}}function nt(U){return Math.min(h,U.samples)}function Ve(U){const D=n.get(U);return o&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function rn(U){const D=r.render.frame;g.get(U)!==D&&(g.set(U,D),U.update())}function Gt(U,D){const X=U.encoding,ne=U.format,se=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===Uo||X!==ai&&(X===Pe?o===!1?e.has("EXT_sRGB")===!0&&ne===Vt?(U.format=Uo,U.minFilter=ht,U.generateMipmaps=!1):D=Nc.sRGBToLinear(D):(ne!==Vt||se!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),D}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=te,this.rebindTextures=vt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ve}function pg(a,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===oi)return 5121;if(s===qu)return 32819;if(s===ju)return 32820;if(s===Hu)return 5120;if(s===Wu)return 5122;if(s===Cc)return 5123;if(s===Xu)return 5124;if(s===ei)return 5125;if(s===$t)return 5126;if(s===_s)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Yu)return 6406;if(s===Vt)return 6408;if(s===Zu)return 6409;if(s===Ju)return 6410;if(s===ni)return 6402;if(s===Gi)return 34041;if(s===Ku)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Uo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Qu)return 6403;if(s===$u)return 36244;if(s===eh)return 33319;if(s===th)return 33320;if(s===nh)return 36249;if(s===Fr||s===Br||s===Or||s===kr)if(r===Pe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Fr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Fr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Br)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Or)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ma||s===ba||s===wa||s===Sa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ma)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ba)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ih)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ta||s===Aa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ta)return r===Pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Aa)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ea||s===Ca||s===La||s===Pa||s===Da||s===Ra||s===Ia||s===Na||s===za||s===Ua||s===Fa||s===Ba||s===Oa||s===ka)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ea)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ca)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===La)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pa)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Da)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ra)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ia)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Na)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===za)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ua)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fa)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ba)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Oa)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ka)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Va)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Va)return r===Pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ui?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class mg extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ti extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gg={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),v=this._getHandJoint(c,m);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qc extends tt{constructor(e,t,n,i,s,r,o,l,c,u){if(u=u!==void 0?u:ni,u!==ni&&u!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ni&&(n=ei),n===void 0&&u===Gi&&(n=Ui),super(null,i,s,r,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1}}class xg extends ui{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const v=[],_=[],w=new Set,S=new Map,M=new At;M.layers.enable(1),M.viewport=new He;const E=new At;E.layers.enable(2),E.viewport=new He;const R=[M,E],b=new mg;b.layers.enable(1),b.layers.enable(2);let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=v[H];return j===void 0&&(j=new mo,v[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=v[H];return j===void 0&&(j=new mo,v[H]=j),j.getGripSpace()},this.getHand=function(H){let j=v[H];return j===void 0&&(j=new mo,v[H]=j),j.getHandSpace()};function y(H){const j=_.indexOf(H.inputSource);if(j===-1)return;const te=v[j];te!==void 0&&te.dispatchEvent({type:H.type,data:H.inputSource})}function T(){i.removeEventListener("select",y),i.removeEventListener("selectstart",y),i.removeEventListener("selectend",y),i.removeEventListener("squeeze",y),i.removeEventListener("squeezestart",y),i.removeEventListener("squeezeend",y),i.removeEventListener("end",T),i.removeEventListener("inputsourceschange",A);for(let H=0;H<v.length;H++){const j=_[H];j!==null&&(_[H]=null,v[H].disconnect(j))}P=null,I=null,e.setRenderTarget(m),f=null,h=null,u=null,i=null,p=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",y),i.addEventListener("selectstart",y),i.addEventListener("selectend",y),i.addEventListener("squeeze",y),i.addEventListener("squeezestart",y),i.addEventListener("squeezeend",y),i.addEventListener("end",T),i.addEventListener("inputsourceschange",A),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:f}),p=new Ct(f.framebufferWidth,f.framebufferHeight,{format:Vt,type:oi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let j=null,te=null,ie=null;g.depth&&(ie=g.stencil?35056:33190,j=g.stencil?Gi:ni,te=g.stencil?Ui:ei);const oe={colorFormat:32856,depthFormat:ie,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(oe),i.updateRenderState({layers:[h]}),p=new Ct(h.textureWidth,h.textureHeight,{format:Vt,type:oi,depthTexture:new qc(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const K=e.properties.get(p);K.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(o),$.setContext(i),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function A(H){for(let j=0;j<H.removed.length;j++){const te=H.removed[j],ie=_.indexOf(te);ie>=0&&(_[ie]=null,v[ie].disconnect(te))}for(let j=0;j<H.added.length;j++){const te=H.added[j];let ie=_.indexOf(te);if(ie===-1){for(let K=0;K<v.length;K++)if(K>=_.length){_.push(te),ie=K;break}else if(_[K]===null){_[K]=te,ie=K;break}if(ie===-1)break}const oe=v[ie];oe&&oe.connect(te)}}const C=new L,z=new L;function V(H,j,te){C.setFromMatrixPosition(j.matrixWorld),z.setFromMatrixPosition(te.matrixWorld);const ie=C.distanceTo(z),oe=j.projectionMatrix.elements,K=te.projectionMatrix.elements,Ne=oe[14]/(oe[10]-1),he=oe[14]/(oe[10]+1),Me=(oe[9]+1)/oe[5],ue=(oe[9]-1)/oe[5],ke=(oe[8]-1)/oe[0],Ae=(K[8]+1)/K[0],_e=Ne*ke,vt=Ne*Ae,yt=ie/(-ke+Ae),_t=yt*-ke;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(_t),H.translateZ(yt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Ut=Ne+yt,nt=he+yt,Ve=_e-_t,rn=vt+(ie-_t),Gt=Me*he/nt*Ut,U=ue*he/nt*Ut;H.projectionMatrix.makePerspective(Ve,rn,Gt,U,Ut,nt)}function B(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;b.near=E.near=M.near=H.near,b.far=E.far=M.far=H.far,(P!==b.near||I!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,I=b.far);const j=H.parent,te=b.cameras;B(b,j);for(let oe=0;oe<te.length;oe++)B(te[oe],j);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),H.matrix.copy(b.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const ie=H.children;for(let oe=0,K=ie.length;oe<K;oe++)ie[oe].updateMatrixWorld(!0);te.length===2?V(b,M,E):b.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(H){h!==null&&(h.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.getPlanes=function(){return w};let O=null;function Q(H,j){if(c=j.getViewerPose(l||r),d=j,c!==null){const te=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ie=!1;te.length!==b.cameras.length&&(b.cameras.length=0,ie=!0);for(let oe=0;oe<te.length;oe++){const K=te[oe];let Ne=null;if(f!==null)Ne=f.getViewport(K);else{const Me=u.getViewSubImage(h,K);Ne=Me.viewport,oe===0&&(e.setRenderTargetTextures(p,Me.colorTexture,h.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(p))}let he=R[oe];he===void 0&&(he=new At,he.layers.enable(oe),he.viewport=new He,R[oe]=he),he.matrix.fromArray(K.transform.matrix),he.projectionMatrix.fromArray(K.projectionMatrix),he.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),oe===0&&b.matrix.copy(he.matrix),ie===!0&&b.cameras.push(he)}}for(let te=0;te<v.length;te++){const ie=_[te],oe=v[te];ie!==null&&oe!==void 0&&oe.update(ie,j,l||r)}if(O&&O(H,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let te=null;for(const ie of w)j.detectedPlanes.has(ie)||(te===null&&(te=[]),te.push(ie));if(te!==null)for(const ie of te)w.delete(ie),S.delete(ie),n.dispatchEvent({type:"planeremoved",data:ie});for(const ie of j.detectedPlanes)if(!w.has(ie))w.add(ie),S.set(ie,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ie});else{const oe=S.get(ie);ie.lastChangedTime>oe&&(S.set(ie,ie.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ie}))}}d=null}const $=new Vc;$.setAnimationLoop(Q),this.setAnimationLoop=function(H){O=H},this.dispose=function(){}}}function vg(a,e){function t(m,p){p.color.getRGB(m.fogColor.value,Bc(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,_,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),u(m,p)):p.isMeshPhongMaterial?(i(m,p),c(m,p)):p.isMeshStandardMaterial?(i(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(i(m,p),d(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?o(m,p,v,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const S=a.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===zt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function yg(a,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(_,w){const S=w.program;n.uniformBlockBinding(_,S)}function c(_,w){let S=i[_.id];S===void 0&&(g(_),S=u(_),i[_.id]=S,_.addEventListener("dispose",p));const M=w.program;n.updateUBOMapping(_,M);const E=e.render.frame;s[_.id]!==E&&(f(_),s[_.id]=E)}function u(_){const w=h();_.__bindingPointIndex=w;const S=a.createBuffer(),M=_.__size,E=_.usage;return a.bindBuffer(35345,S),a.bufferData(35345,M,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,w,S),S}function h(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const w=i[_.id],S=_.uniforms,M=_.__cache;a.bindBuffer(35345,w);for(let E=0,R=S.length;E<R;E++){const b=S[E];if(d(b,E,M)===!0){const P=b.value,I=b.__offset;typeof P=="number"?(b.__data[0]=P,a.bufferSubData(35345,I,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):P.toArray(b.__data),a.bufferSubData(35345,I,b.__data))}}a.bindBuffer(35345,null)}function d(_,w,S){const M=_.value;if(S[w]===void 0)return typeof M=="number"?S[w]=M:S[w]=M.clone(),!0;if(typeof M=="number"){if(S[w]!==M)return S[w]=M,!0}else{const E=S[w];if(E.equals(M)===!1)return E.copy(M),!0}return!1}function g(_){const w=_.uniforms;let S=0;const M=16;let E=0;for(let R=0,b=w.length;R<b;R++){const P=w[R],I=m(P);if(P.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,R>0){E=S%M;const y=M-E;E!==0&&y-I.boundary<0&&(S+=M-E,P.__offset=S)}S+=I.storage}return E=S%M,E>0&&(S+=M-E),_.__size=S,_.__cache={},this}function m(_){const w=_.value,S={boundary:0,storage:0};return typeof w=="number"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function p(_){const w=_.target;w.removeEventListener("dispose",p);const S=r.indexOf(w.__bindingPointIndex);r.splice(S,1),a.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function v(){for(const _ in i)a.deleteBuffer(i[_]);r=[],i={},s={}}return{bind:l,update:c,dispose:v}}function _g(){const a=Ss("canvas");return a.style.display="block",a}function jc(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:_g(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ai,this.physicallyCorrectLights=!1,this.toneMapping=yn,this.toneMappingExposure=1;const m=this;let p=!1,v=0,_=0,w=null,S=-1,M=null;const E=new He,R=new He;let b=null,P=e.width,I=e.height,y=1,T=null,A=null;const C=new He(0,0,P,I),z=new He(0,0,P,I);let V=!1;const B=new $o;let O=!1,Q=!1,$=null;const H=new pe,j=new J,te=new L,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return w===null?y:1}let K=t;function Ne(N,G){for(let W=0;W<N.length;W++){const k=N[W],Y=e.getContext(k,G);if(Y!==null)return Y}return null}try{const N={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ko}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Ue,!1),K===null){const G=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&G.shift(),K=Ne(G,N),K===null)throw Ne(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let he,Me,ue,ke,Ae,_e,vt,yt,_t,Ut,nt,Ve,rn,Gt,U,D,X,ne,se,ae,be,le,Z,xe;function ye(){he=new Rp(K),Me=new Ap(K,he,a),he.init(Me),le=new pg(K,he,Me),ue=new fg(K,he,Me),ke=new zp,Ae=new Qm,_e=new dg(K,he,ue,Ae,Me,le,ke),vt=new Cp(m),yt=new Dp(m),_t=new Hh(K,Me),Z=new Sp(K,he,_t,Me),Ut=new Ip(K,_t,ke,Z),nt=new Op(K,Ut,_t,ke),se=new Bp(K,Me,_e),D=new Ep(Ae),Ve=new Jm(m,vt,yt,he,Me,Z,D),rn=new vg(m,Ae),Gt=new eg,U=new og(he,Me),ne=new wp(m,vt,yt,ue,nt,u,r),X=new hg(m,nt,Me),xe=new yg(K,ke,Me,ue),ae=new Tp(K,he,ke,Me),be=new Np(K,he,ke,Me),ke.programs=Ve.programs,m.capabilities=Me,m.extensions=he,m.properties=Ae,m.renderLists=Gt,m.shadowMap=X,m.state=ue,m.info=ke}ye();const fe=new xg(m,K);this.xr=fe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const N=he.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=he.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return y},this.setPixelRatio=function(N){N!==void 0&&(y=N,this.setSize(P,I,!1))},this.getSize=function(N){return N.set(P,I)},this.setSize=function(N,G,W){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=N,I=G,e.width=Math.floor(N*y),e.height=Math.floor(G*y),W!==!1&&(e.style.width=N+"px",e.style.height=G+"px"),this.setViewport(0,0,N,G)},this.getDrawingBufferSize=function(N){return N.set(P*y,I*y).floor()},this.setDrawingBufferSize=function(N,G,W){P=N,I=G,y=W,e.width=Math.floor(N*W),e.height=Math.floor(G*W),this.setViewport(0,0,N,G)},this.getCurrentViewport=function(N){return N.copy(E)},this.getViewport=function(N){return N.copy(C)},this.setViewport=function(N,G,W,k){N.isVector4?C.set(N.x,N.y,N.z,N.w):C.set(N,G,W,k),ue.viewport(E.copy(C).multiplyScalar(y).floor())},this.getScissor=function(N){return N.copy(z)},this.setScissor=function(N,G,W,k){N.isVector4?z.set(N.x,N.y,N.z,N.w):z.set(N,G,W,k),ue.scissor(R.copy(z).multiplyScalar(y).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(N){ue.setScissorTest(V=N)},this.setOpaqueSort=function(N){T=N},this.setTransparentSort=function(N){A=N},this.getClearColor=function(N){return N.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(N=!0,G=!0,W=!0){let k=0;N&&(k|=16384),G&&(k|=256),W&&(k|=1024),K.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Ue,!1),Gt.dispose(),U.dispose(),Ae.dispose(),vt.dispose(),yt.dispose(),nt.dispose(),Z.dispose(),xe.dispose(),Ve.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ce),fe.removeEventListener("sessionend",de),$&&($.dispose(),$=null),Be.stop()};function ve(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const N=ke.autoReset,G=X.enabled,W=X.autoUpdate,k=X.needsUpdate,Y=X.type;ye(),ke.autoReset=N,X.enabled=G,X.autoUpdate=W,X.needsUpdate=k,X.type=Y}function Ue(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function qe(N){const G=N.target;G.removeEventListener("dispose",qe),ot(G)}function ot(N){F(N),Ae.remove(N)}function F(N){const G=Ae.get(N).programs;G!==void 0&&(G.forEach(function(W){Ve.releaseProgram(W)}),N.isShaderMaterial&&Ve.releaseShaderCache(N))}this.renderBufferDirect=function(N,G,W,k,Y,ge){G===null&&(G=ie);const we=Y.isMesh&&Y.matrixWorld.determinant()<0,Ee=cu(N,G,W,k,Y);ue.setMaterial(k,we);let Ce=W.index,Fe=1;k.wireframe===!0&&(Ce=Ut.getWireframeAttribute(W),Fe=2);const De=W.drawRange,Re=W.attributes.position;let Qe=De.start*Fe,Pt=(De.start+De.count)*Fe;ge!==null&&(Qe=Math.max(Qe,ge.start*Fe),Pt=Math.min(Pt,(ge.start+ge.count)*Fe)),Ce!==null?(Qe=Math.max(Qe,0),Pt=Math.min(Pt,Ce.count)):Re!=null&&(Qe=Math.max(Qe,0),Pt=Math.min(Pt,Re.count));const an=Pt-Qe;if(an<0||an===1/0)return;Z.setup(Y,k,Ee,W,Ce);let Hn,$e=ae;if(Ce!==null&&(Hn=_t.get(Ce),$e=be,$e.setIndex(Hn)),Y.isMesh)k.wireframe===!0?(ue.setLineWidth(k.wireframeLinewidth*oe()),$e.setMode(1)):$e.setMode(4);else if(Y.isLine){let Ie=k.linewidth;Ie===void 0&&(Ie=1),ue.setLineWidth(Ie*oe()),Y.isLineSegments?$e.setMode(1):Y.isLineLoop?$e.setMode(2):$e.setMode(3)}else Y.isPoints?$e.setMode(0):Y.isSprite&&$e.setMode(4);if(Y.isInstancedMesh)$e.renderInstances(Qe,an,Y.count);else if(W.isInstancedBufferGeometry){const Ie=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ir=Math.min(W.instanceCount,Ie);$e.renderInstances(Qe,an,Ir)}else $e.render(Qe,an)},this.compile=function(N,G){function W(k,Y,ge){k.transparent===!0&&k.side===Le?(k.side=zt,k.needsUpdate=!0,Ft(k,Y,ge),k.side=Mn,k.needsUpdate=!0,Ft(k,Y,ge),k.side=Le):Ft(k,Y,ge)}f=U.get(N),f.init(),g.push(f),N.traverseVisible(function(k){k.isLight&&k.layers.test(G.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(m.physicallyCorrectLights),N.traverse(function(k){const Y=k.material;if(Y)if(Array.isArray(Y))for(let ge=0;ge<Y.length;ge++){const we=Y[ge];W(we,N,k)}else W(Y,N,k)}),g.pop(),f=null};let q=null;function ee(N){q&&q(N)}function ce(){Be.stop()}function de(){Be.start()}const Be=new Vc;Be.setAnimationLoop(ee),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(N){q=N,fe.setAnimationLoop(N),N===null?Be.stop():Be.start()},fe.addEventListener("sessionstart",ce),fe.addEventListener("sessionend",de),this.render=function(N,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(G),G=fe.getCamera()),N.isScene===!0&&N.onBeforeRender(m,N,G,w),f=U.get(N,g.length),f.init(),g.push(f),H.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),B.setFromProjectionMatrix(H),Q=this.localClippingEnabled,O=D.init(this.clippingPlanes,Q,G),h=Gt.get(N,d.length),h.init(),d.push(h),at(N,G,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(T,A),O===!0&&D.beginShadows();const W=f.state.shadowsArray;if(X.render(W,N,G),O===!0&&D.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(h,N),f.setupLights(m.physicallyCorrectLights),G.isArrayCamera){const k=G.cameras;for(let Y=0,ge=k.length;Y<ge;Y++){const we=k[Y];dt(h,N,we,we.viewport)}}else dt(h,N,G);w!==null&&(_e.updateMultisampleRenderTarget(w),_e.updateRenderTargetMipmap(w)),N.isScene===!0&&N.onAfterRender(m,N,G),Z.resetDefaultState(),S=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function at(N,G,W,k){if(N.visible===!1)return;if(N.layers.test(G.layers)){if(N.isGroup)W=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(G);else if(N.isLight)f.pushLight(N),N.castShadow&&f.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||B.intersectsSprite(N)){k&&te.setFromMatrixPosition(N.matrixWorld).applyMatrix4(H);const we=nt.update(N),Ee=N.material;Ee.visible&&h.push(N,we,Ee,W,te.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(N.isSkinnedMesh&&N.skeleton.frame!==ke.render.frame&&(N.skeleton.update(),N.skeleton.frame=ke.render.frame),!N.frustumCulled||B.intersectsObject(N))){k&&te.setFromMatrixPosition(N.matrixWorld).applyMatrix4(H);const we=nt.update(N),Ee=N.material;if(Array.isArray(Ee)){const Ce=we.groups;for(let Fe=0,De=Ce.length;Fe<De;Fe++){const Re=Ce[Fe],Qe=Ee[Re.materialIndex];Qe&&Qe.visible&&h.push(N,we,Qe,W,te.z,Re)}}else Ee.visible&&h.push(N,we,Ee,W,te.z,null)}}const ge=N.children;for(let we=0,Ee=ge.length;we<Ee;we++)at(ge[we],G,W,k)}function dt(N,G,W,k){const Y=N.opaque,ge=N.transmissive,we=N.transparent;f.setupLightsView(W),ge.length>0&&Gn(Y,G,W),k&&ue.viewport(E.copy(k)),Y.length>0&&je(Y,G,W),ge.length>0&&je(ge,G,W),we.length>0&&je(we,G,W),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Gn(N,G,W){const k=Me.isWebGL2;$===null&&($=new Ct(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?_s:oi,minFilter:ci,samples:k&&s===!0?4:0})),m.getDrawingBufferSize(j),k?$.setSize(j.x,j.y):$.setSize(Tr(j.x),Tr(j.y));const Y=m.getRenderTarget();m.setRenderTarget($),m.clear();const ge=m.toneMapping;m.toneMapping=yn,je(N,G,W),m.toneMapping=ge,_e.updateMultisampleRenderTarget($),_e.updateRenderTargetMipmap($),m.setRenderTarget(Y)}function je(N,G,W){const k=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,ge=N.length;Y<ge;Y++){const we=N[Y],Ee=we.object,Ce=we.geometry,Fe=k===null?we.material:k,De=we.group;Ee.layers.test(W.layers)&&on(Ee,G,W,Ce,Fe,De)}}function on(N,G,W,k,Y,ge){N.onBeforeRender(m,G,W,k,Y,ge),N.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Y.onBeforeRender(m,G,W,k,N,ge),Y.transparent===!0&&Y.side===Le?(Y.side=zt,Y.needsUpdate=!0,m.renderBufferDirect(W,G,k,Y,N,ge),Y.side=Mn,Y.needsUpdate=!0,m.renderBufferDirect(W,G,k,Y,N,ge),Y.side=Le):m.renderBufferDirect(W,G,k,Y,N,ge),N.onAfterRender(m,G,W,k,Y,ge)}function Ft(N,G,W){G.isScene!==!0&&(G=ie);const k=Ae.get(N),Y=f.state.lights,ge=f.state.shadowsArray,we=Y.state.version,Ee=Ve.getParameters(N,Y.state,ge,G,W),Ce=Ve.getProgramCacheKey(Ee);let Fe=k.programs;k.environment=N.isMeshStandardMaterial?G.environment:null,k.fog=G.fog,k.envMap=(N.isMeshStandardMaterial?yt:vt).get(N.envMap||k.environment),Fe===void 0&&(N.addEventListener("dispose",qe),Fe=new Map,k.programs=Fe);let De=Fe.get(Ce);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===we)return da(N,Ee),De}else Ee.uniforms=Ve.getUniforms(N),N.onBuild(W,Ee,m),N.onBeforeCompile(Ee,m),De=Ve.acquireProgram(Ee,Ce),Fe.set(Ce,De),k.uniforms=Ee.uniforms;const Re=k.uniforms;(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Re.clippingPlanes=D.uniform),da(N,Ee),k.needsLights=hu(N),k.lightsStateVersion=we,k.needsLights&&(Re.ambientLightColor.value=Y.state.ambient,Re.lightProbe.value=Y.state.probe,Re.directionalLights.value=Y.state.directional,Re.directionalLightShadows.value=Y.state.directionalShadow,Re.spotLights.value=Y.state.spot,Re.spotLightShadows.value=Y.state.spotShadow,Re.rectAreaLights.value=Y.state.rectArea,Re.ltc_1.value=Y.state.rectAreaLTC1,Re.ltc_2.value=Y.state.rectAreaLTC2,Re.pointLights.value=Y.state.point,Re.pointLightShadows.value=Y.state.pointShadow,Re.hemisphereLights.value=Y.state.hemi,Re.directionalShadowMap.value=Y.state.directionalShadowMap,Re.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Re.spotShadowMap.value=Y.state.spotShadowMap,Re.spotLightMatrix.value=Y.state.spotLightMatrix,Re.spotLightMap.value=Y.state.spotLightMap,Re.pointShadowMap.value=Y.state.pointShadowMap,Re.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Qe=De.getUniforms(),Pt=_r.seqWithValue(Qe.seq,Re);return k.currentProgram=De,k.uniformsList=Pt,De}function da(N,G){const W=Ae.get(N);W.outputEncoding=G.outputEncoding,W.instancing=G.instancing,W.skinning=G.skinning,W.morphTargets=G.morphTargets,W.morphNormals=G.morphNormals,W.morphColors=G.morphColors,W.morphTargetsCount=G.morphTargetsCount,W.numClippingPlanes=G.numClippingPlanes,W.numIntersection=G.numClipIntersection,W.vertexAlphas=G.vertexAlphas,W.vertexTangents=G.vertexTangents,W.toneMapping=G.toneMapping}function cu(N,G,W,k,Y){G.isScene!==!0&&(G=ie),_e.resetTextureUnits();const ge=G.fog,we=k.isMeshStandardMaterial?G.environment:null,Ee=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:ai,Ce=(k.isMeshStandardMaterial?yt:vt).get(k.envMap||we),Fe=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,De=!!k.normalMap&&!!W.attributes.tangent,Re=!!W.morphAttributes.position,Qe=!!W.morphAttributes.normal,Pt=!!W.morphAttributes.color,an=k.toneMapped?m.toneMapping:yn,Hn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$e=Hn!==void 0?Hn.length:0,Ie=Ae.get(k),Ir=f.state.lights;if(O===!0&&(Q===!0||N!==M)){const Dt=N===M&&k.id===S;D.setState(k,N,Dt)}let lt=!1;k.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Ir.state.version||Ie.outputEncoding!==Ee||Y.isInstancedMesh&&Ie.instancing===!1||!Y.isInstancedMesh&&Ie.instancing===!0||Y.isSkinnedMesh&&Ie.skinning===!1||!Y.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==Ce||k.fog===!0&&Ie.fog!==ge||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==D.numPlanes||Ie.numIntersection!==D.numIntersection)||Ie.vertexAlphas!==Fe||Ie.vertexTangents!==De||Ie.morphTargets!==Re||Ie.morphNormals!==Qe||Ie.morphColors!==Pt||Ie.toneMapping!==an||Me.isWebGL2===!0&&Ie.morphTargetsCount!==$e)&&(lt=!0):(lt=!0,Ie.__version=k.version);let Wn=Ie.currentProgram;lt===!0&&(Wn=Ft(k,G,Y));let pa=!1,es=!1,Nr=!1;const Mt=Wn.getUniforms(),Xn=Ie.uniforms;if(ue.useProgram(Wn.program)&&(pa=!0,es=!0,Nr=!0),k.id!==S&&(S=k.id,es=!0),pa||M!==N){if(Mt.setValue(K,"projectionMatrix",N.projectionMatrix),Me.logarithmicDepthBuffer&&Mt.setValue(K,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),M!==N&&(M=N,es=!0,Nr=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Dt=Mt.map.cameraPosition;Dt!==void 0&&Dt.setValue(K,te.setFromMatrixPosition(N.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Mt.setValue(K,"isOrthographic",N.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||Y.isSkinnedMesh)&&Mt.setValue(K,"viewMatrix",N.matrixWorldInverse)}if(Y.isSkinnedMesh){Mt.setOptional(K,Y,"bindMatrix"),Mt.setOptional(K,Y,"bindMatrixInverse");const Dt=Y.skeleton;Dt&&(Me.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),Mt.setValue(K,"boneTexture",Dt.boneTexture,_e),Mt.setValue(K,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zr=W.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0&&Me.isWebGL2===!0)&&se.update(Y,W,k,Wn),(es||Ie.receiveShadow!==Y.receiveShadow)&&(Ie.receiveShadow=Y.receiveShadow,Mt.setValue(K,"receiveShadow",Y.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Xn.envMap.value=Ce,Xn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),es&&(Mt.setValue(K,"toneMappingExposure",m.toneMappingExposure),Ie.needsLights&&uu(Xn,Nr),ge&&k.fog===!0&&rn.refreshFogUniforms(Xn,ge),rn.refreshMaterialUniforms(Xn,k,y,I,$),_r.upload(K,Ie.uniformsList,Xn,_e)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(_r.upload(K,Ie.uniformsList,Xn,_e),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Mt.setValue(K,"center",Y.center),Mt.setValue(K,"modelViewMatrix",Y.modelViewMatrix),Mt.setValue(K,"normalMatrix",Y.normalMatrix),Mt.setValue(K,"modelMatrix",Y.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Dt=k.uniformsGroups;for(let Ur=0,fu=Dt.length;Ur<fu;Ur++)if(Me.isWebGL2){const ma=Dt[Ur];xe.update(ma,Wn),xe.bind(ma,Wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wn}function uu(N,G){N.ambientLightColor.needsUpdate=G,N.lightProbe.needsUpdate=G,N.directionalLights.needsUpdate=G,N.directionalLightShadows.needsUpdate=G,N.pointLights.needsUpdate=G,N.pointLightShadows.needsUpdate=G,N.spotLights.needsUpdate=G,N.spotLightShadows.needsUpdate=G,N.rectAreaLights.needsUpdate=G,N.hemisphereLights.needsUpdate=G}function hu(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(N,G,W){Ae.get(N.texture).__webglTexture=G,Ae.get(N.depthTexture).__webglTexture=W;const k=Ae.get(N);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=W===void 0,k.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,G){const W=Ae.get(N);W.__webglFramebuffer=G,W.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(N,G=0,W=0){w=N,v=G,_=W;let k=!0,Y=null,ge=!1,we=!1;if(N){const Ce=Ae.get(N);Ce.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),k=!1):Ce.__webglFramebuffer===void 0?_e.setupRenderTarget(N):Ce.__hasExternalTextures&&_e.rebindTextures(N,Ae.get(N.texture).__webglTexture,Ae.get(N.depthTexture).__webglTexture);const Fe=N.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(we=!0);const De=Ae.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Y=De[G],ge=!0):Me.isWebGL2&&N.samples>0&&_e.useMultisampledRTT(N)===!1?Y=Ae.get(N).__webglMultisampledFramebuffer:Y=De,E.copy(N.viewport),R.copy(N.scissor),b=N.scissorTest}else E.copy(C).multiplyScalar(y).floor(),R.copy(z).multiplyScalar(y).floor(),b=V;if(ue.bindFramebuffer(36160,Y)&&Me.drawBuffers&&k&&ue.drawBuffers(N,Y),ue.viewport(E),ue.scissor(R),ue.setScissorTest(b),ge){const Ce=Ae.get(N.texture);K.framebufferTexture2D(36160,36064,34069+G,Ce.__webglTexture,W)}else if(we){const Ce=Ae.get(N.texture),Fe=G||0;K.framebufferTextureLayer(36160,36064,Ce.__webglTexture,W||0,Fe)}S=-1},this.readRenderTargetPixels=function(N,G,W,k,Y,ge,we){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ae.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){ue.bindFramebuffer(36160,Ee);try{const Ce=N.texture,Fe=Ce.format,De=Ce.type;if(Fe!==Vt&&le.convert(Fe)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=De===_s&&(he.has("EXT_color_buffer_half_float")||Me.isWebGL2&&he.has("EXT_color_buffer_float"));if(De!==oi&&le.convert(De)!==K.getParameter(35738)&&!(De===$t&&(Me.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=N.width-k&&W>=0&&W<=N.height-Y&&K.readPixels(G,W,k,Y,le.convert(Fe),le.convert(De),ge)}finally{const Ce=w!==null?Ae.get(w).__webglFramebuffer:null;ue.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(N,G,W=0){const k=Math.pow(2,-W),Y=Math.floor(G.image.width*k),ge=Math.floor(G.image.height*k);_e.setTexture2D(G,0),K.copyTexSubImage2D(3553,W,0,0,N.x,N.y,Y,ge),ue.unbindTexture()},this.copyTextureToTexture=function(N,G,W,k=0){const Y=G.image.width,ge=G.image.height,we=le.convert(W.format),Ee=le.convert(W.type);_e.setTexture2D(W,0),K.pixelStorei(37440,W.flipY),K.pixelStorei(37441,W.premultiplyAlpha),K.pixelStorei(3317,W.unpackAlignment),G.isDataTexture?K.texSubImage2D(3553,k,N.x,N.y,Y,ge,we,Ee,G.image.data):G.isCompressedTexture?K.compressedTexSubImage2D(3553,k,N.x,N.y,G.mipmaps[0].width,G.mipmaps[0].height,we,G.mipmaps[0].data):K.texSubImage2D(3553,k,N.x,N.y,we,Ee,G.image),k===0&&W.generateMipmaps&&K.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(N,G,W,k,Y=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=N.max.x-N.min.x+1,we=N.max.y-N.min.y+1,Ee=N.max.z-N.min.z+1,Ce=le.convert(k.format),Fe=le.convert(k.type);let De;if(k.isData3DTexture)_e.setTexture3D(k,0),De=32879;else if(k.isDataArrayTexture)_e.setTexture2DArray(k,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,k.flipY),K.pixelStorei(37441,k.premultiplyAlpha),K.pixelStorei(3317,k.unpackAlignment);const Re=K.getParameter(3314),Qe=K.getParameter(32878),Pt=K.getParameter(3316),an=K.getParameter(3315),Hn=K.getParameter(32877),$e=W.isCompressedTexture?W.mipmaps[0]:W.image;K.pixelStorei(3314,$e.width),K.pixelStorei(32878,$e.height),K.pixelStorei(3316,N.min.x),K.pixelStorei(3315,N.min.y),K.pixelStorei(32877,N.min.z),W.isDataTexture||W.isData3DTexture?K.texSubImage3D(De,Y,G.x,G.y,G.z,ge,we,Ee,Ce,Fe,$e.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(De,Y,G.x,G.y,G.z,ge,we,Ee,Ce,$e.data)):K.texSubImage3D(De,Y,G.x,G.y,G.z,ge,we,Ee,Ce,Fe,$e),K.pixelStorei(3314,Re),K.pixelStorei(32878,Qe),K.pixelStorei(3316,Pt),K.pixelStorei(3315,an),K.pixelStorei(32877,Hn),Y===0&&k.generateMipmaps&&K.generateMipmap(De),ue.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?_e.setTextureCube(N,0):N.isData3DTexture?_e.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?_e.setTexture2DArray(N,0):_e.setTexture2D(N,0),ue.unbindTexture()},this.resetState=function(){v=0,_=0,w=null,ue.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Mg extends jc{}Mg.prototype.isWebGL1Renderer=!0;class bg extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class wg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new L;class ta{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Je(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ta(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Tl=new L,Al=new He,El=new He,Sg=new L,Cl=new pe;class Tg extends Ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new pe,this.bindMatrixInverse=new pe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new He,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Al.fromBufferAttribute(i.attributes.skinIndex,e),El.fromBufferAttribute(i.attributes.skinWeight,e),Tl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=El.getComponent(s);if(r!==0){const o=Al.getComponent(s);Cl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Sg.copy(Tl).applyMatrix4(Cl),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Yc extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Kc extends tt{constructor(e=null,t=1,n=1,i,s,r,o,l,c=Xe,u=Xe,h,f){super(null,r,o,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ll=new pe,Ag=new pe;class na{constructor(e=[],t=[]){this.uuid=qt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:Ag;Ll.multiplyMatrices(o,t[s]),Ll.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new na(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Dc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Kc(t,e,e,Vt,$t);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Yc),this.bones.push(r),this.boneInverses.push(new pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Pl extends Je{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Dl=new pe,Rl=new pe,er=[],Eg=new pe,rs=new Ke;class Cg extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Eg)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Dl),Rl.multiplyMatrices(n,Dl),rs.matrixWorld=Rl,rs.raycast(e,er);for(let r=0,o=er.length;r<o;r++){const l=er[r];l.instanceId=s,l.object=this,t.push(l)}er.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Zc extends en{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Il=new L,Nl=new L,zl=new pe,go=new We,tr=new hi;class ia extends Ye{constructor(e=new Et,t=new Zc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Il.fromBufferAttribute(t,i-1),Nl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Il.distanceTo(Nl);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(i),tr.radius+=s,e.ray.intersectsSphere(tr)===!1)return;zl.copy(i).invert(),go.copy(e.ray).applyMatrix4(zl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,u=new L,h=new L,f=new L,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const v=Math.max(0,r.start),_=Math.min(g.count,r.start+r.count);for(let w=v,S=_-1;w<S;w+=d){const M=g.getX(w),E=g.getX(w+1);if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,E),go.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,r.start),_=Math.min(p.count,r.start+r.count);for(let w=v,S=_-1;w<S;w+=d){if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,w+1),go.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Ul=new L,Fl=new L;class Lg extends ia{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ul.fromBufferAttribute(t,i),Fl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ul.distanceTo(Fl);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pg extends ia{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jc extends en{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bl=new pe,Oo=new We,nr=new hi,ir=new L;class Dg extends Ye{constructor(e=new Et,t=new Jc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(i),nr.radius+=s,e.ray.intersectsSphere(nr)===!1)return;Bl.copy(i).invert(),Oo.copy(e.ray).applyMatrix4(Bl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=f,m=d;g<m;g++){const p=c.getX(g);ir.fromBufferAttribute(h,p),Ol(ir,p,l,i,e,t,this)}}else{const f=Math.max(0,r.start),d=Math.min(h.count,r.start+r.count);for(let g=f,m=d;g<m;g++)ir.fromBufferAttribute(h,g),Ol(ir,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ol(a,e,t,n,i,s,r){const o=Oo.distanceSqToPoint(a);if(o<t){const l=new L;Oo.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:r})}}class Nn extends en{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vn extends Nn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Pn(a,e,t){return Qc(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function sr(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Qc(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Rg(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function kl(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[r++]=a[o+l]}return i}function $c(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class Ds{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ig extends Ds{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ga,endingEnd:Ga}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ha:s=e,o=2*t-n;break;case Wa:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ha:r=e,l=2*n-t;break;case Wa:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),m=g*g,p=m*g,v=-f*p+2*f*m-f*g,_=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,w=(-1-d)*p+(1.5+d)*m+.5*g,S=d*p-d*m;for(let M=0;M!==o;++M)s[M]=v*r[u+M]+_*r[c+M]+w*r[l+M]+S*r[h+M];return s}}class Ng extends Ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)s[f]=r[c+f]*h+r[l+f]*u;return s}}class zg extends Ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sr(t,this.TimeBufferType),this.values=sr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sr(e.times,Array),values:sr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ng(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ig(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case Hi:t=this.InterpolantFactoryMethodLinear;break;case Vr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Hi;case this.InterpolantFactoryMethodSmooth:return Vr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=Pn(n,s,r),this.values=Pn(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&Qc(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Pn(this.times),t=Pn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Vr,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[d+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const h=o*n,f=r*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=Pn(e,0,r),this.values=Pn(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=Pn(this.times,0),t=Pn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Hi;class Zi extends sn{}Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Ms;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class eu extends sn{}eu.prototype.ValueTypeName="color";class Ts extends sn{}Ts.prototype.ValueTypeName="number";class Ug extends Ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)kn.slerpFlat(s,0,r,c-o,r,c,l);return s}}class li extends sn{InterpolantFactoryMethodLinear(e){return new Ug(this.times,this.values,this.getValueSize(),e)}}li.prototype.ValueTypeName="quaternion";li.prototype.DefaultInterpolation=Hi;li.prototype.InterpolantFactoryMethodSmooth=void 0;class Ji extends sn{}Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Ms;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends sn{}As.prototype.ValueTypeName="vector";class Fg{constructor(e,t=-1,n,i=sh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=qt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Og(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(sn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Rg(l);l=kl(l,1,u),c=kl(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Ts(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,m){if(d.length!==0){const p=[],v=[];$c(d,p,v,g),p.length!==0&&m.push(new h(f,p,v))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(const m in d){const p=[],v=[];for(let _=0;_!==f[g].morphTargets.length;++_){const w=f[g];p.push(w.time),v.push(w.morphTarget===m?1:0)}i.push(new Ts(".morphTargetInfluence["+m+"]",p,v))}l=d.length*r}else{const d=".bones["+t[h].name+"]";n(As,d+".position",f,"pos",i),n(li,d+".quaternion",f,"rot",i),n(As,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Bg(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ts;case"vector":case"vector2":case"vector3":case"vector4":return As;case"color":return eu;case"quaternion":return li;case"bool":case"boolean":return Zi;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Og(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Bg(a.type);if(a.times===void 0){const t=[],n=[];$c(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Xi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class kg{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Vg=new kg;class Qi{constructor(e){this.manager=e!==void 0?e:Vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const dn={};class Gg extends Error{constructor(e,t){super(e),this.response=t}}class sa extends Qi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(dn[e]!==void 0){dn[e].push({onLoad:t,onProgress:n,onError:i});return}dn[e]=[],dn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=dn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(v){_();function _(){h.read().then(({done:w,value:S})=>{if(w)v.close();else{m+=S.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let E=0,R=u.length;E<R;E++){const b=u[E];b.onProgress&&b.onProgress(M)}v.enqueue(S),_()}})}}});return new Response(p)}else throw new Gg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Xi.add(e,c);const u=dn[e];delete dn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=dn[e];if(u===void 0)throw this.manager.itemError(e),c;delete dn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Hg extends Qi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Xi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=Ss("img");function l(){u(),Xi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Ar extends Qi{constructor(e){super(e)}load(e,t,n,i){const s=new tt,r=new Hg(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ra extends Ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const xo=new pe,Vl=new L,Gl=new L;class oa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wg extends oa{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ws*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xg extends ra{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.target=new Ye,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Wg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Hl=new pe,os=new L,vo=new L;class qg extends oa{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),n.position.copy(os),vo.copy(n.position),vo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vo),n.updateMatrixWorld(),i.makeTranslation(-os.x,-os.y,-os.z),Hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl)}}class jg extends ra{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yg extends oa{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kg extends ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.target=new Ye,this.shadow=new Yg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ri{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Zg extends Qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Xi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Xi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let rr;class Jg{static getContext(){return rr===void 0&&(rr=new(window.AudioContext||window.webkitAudioContext)),rr}static setContext(e){rr=e}}class Qg extends Qi{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new sa(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){try{const l=o.slice(0);Jg.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class tu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wl(){return(typeof performance>"u"?Date:performance).now()}const aa="\\[\\]\\.:\\/",$g=new RegExp("["+aa+"]","g"),la="[^"+aa+"]",ex="[^"+aa.replace("\\.","")+"]",tx=/((?:WC+[\/:])*)/.source.replace("WC",la),nx=/(WCOD+)?/.source.replace("WCOD",ex),ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",la),sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",la),rx=new RegExp("^"+tx+nx+ix+sx+"$"),ox=["material","materials","bones","map"];class ax{constructor(e,t,n){const i=n||Oe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Oe{constructor(e,t,n){this.path=t,this.parsedPath=n||Oe.parseTrackName(t),this.node=Oe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Oe.Composite(e,t,n):new Oe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($g,"")}static parseTrackName(e){const t=rx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);ox.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Oe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Oe.Composite=ax;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class lx{constructor(e,t,n=0,i=1/0){this.ray=new We(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ko(e,this,n,t),n.sort(Xl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ko(e[i],this,n,t);return n.sort(Xl),n}}function Xl(a,e){return a.distance-e.distance}function ko(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let s=0,r=i.length;s<r;s++)ko(i[s],e,t,!0)}}const ql=new J;class jl{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ql.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ql.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yl=new L,or=new L;class jt{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Yl.subVectors(e,this.start),or.subVectors(this.end,this.start);const n=or.dot(or);let s=or.dot(Yl)/n;return t&&(s=gt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);const Er={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Rs{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cx=new Ps(-1,1,1,-1,0,1),ca=new Et;ca.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3));ca.setAttribute("uv",new Lt([0,2,0,0,2,0],2));class ua{constructor(e){this._mesh=new Ke(ca,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Qn extends Rs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=si.clone(e.uniforms),this.material=new xt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ua(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kl extends Rs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class ux extends Rs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hx{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new J);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Ct(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Er===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Qn===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Qn(Er),this.clock=new tu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Kl!==void 0&&(r instanceof Kl?n=!0:r instanceof ux&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Ps(-1,1,1,-1,0,1);const nu=new Et;nu.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3));nu.setAttribute("uv",new Lt([0,2,0,0,2,0],2));const as={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new J(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ar={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new J(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},yo={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new J(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class fx extends Rs{constructor(e,t){super(),this.edgesRT=new Ct(e,t,{depthBuffer:!1}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Ct(e,t,{depthBuffer:!1}),this.weightsRT.texture.name="SMAAPass.weights";const n=this,i=new Image;i.src=this.getAreaTexture(),i.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new tt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=i,this.areaTexture.minFilter=ht,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const s=new Image;s.src=this.getSearchTexture(),s.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new tt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=Xe,this.searchTexture.minFilter=Xe,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,as===void 0&&console.error("THREE.SMAAPass relies on SMAAShader"),this.uniformsEdges=si.clone(as.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new xt({defines:Object.assign({},as.defines),uniforms:this.uniformsEdges,vertexShader:as.vertexShader,fragmentShader:as.fragmentShader}),this.uniformsWeights=si.clone(ar.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new xt({defines:Object.assign({},ar.defines),uniforms:this.uniformsWeights,vertexShader:ar.vertexShader,fragmentShader:ar.fragmentShader}),this.uniformsBlend=si.clone(yo.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new xt({uniforms:this.uniformsBlend,vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader}),this.needsSwap=!1,this.fsQuad=new ua(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const dx={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = LinearTosRGB( tex );

		}`},px={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},projMat:{value:new pe},viewMat:{value:new pe},projViewMat:{value:new pe},projectionMatrixInv:{value:new pe},viewMatrixInv:{value:new pe},cameraPos:{value:new L},resolution:{value:new J},time:{value:0},r:{value:5}},vertexShader:`
varying vec2 vUv;
void main() {
vUv = uv;
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`
uniform sampler2D sceneDiffuse;
uniform sampler2D sceneDepth;
uniform mat4 projectionMatrixInv;
uniform mat4 viewMatrixInv;
uniform mat4 projMat;
uniform mat4 viewMat;
uniform mat4 projViewMat;
uniform vec3 cameraPos;
uniform vec2 resolution;
uniform float time;
uniform float r;
  varying vec2 vUv;
  highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
  {
      highp float z_n = 2.0 * d - 1.0;
      return 2.0 * zNear * zFar / (zFar + zNear - z_n * (zFar - zNear));
  }
  vec3 getWorldPos(float depth, vec2 coord) {
    float z = depth * 2.0 - 1.0;
    vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
    vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
    // Perspective division
   vec4 worldSpacePosition = viewMatrixInv * viewSpacePosition;
   worldSpacePosition.xyz /= worldSpacePosition.w;
    return worldSpacePosition.xyz;
}
vec3 computeNormal(vec3 worldPos, vec2 vUv) {
    vec2 downUv = vUv + vec2(0.0, 1.0 / resolution.y);
    vec3 downPos = getWorldPos( texture2D(sceneDepth, downUv).x, downUv).xyz;
    vec2 rightUv = vUv + vec2(1.0 / resolution.x, 0.0);
    vec3 rightPos = getWorldPos(texture2D(sceneDepth, rightUv).x, rightUv).xyz;
    vec2 upUv = vUv - vec2(0.0, 1.0 / resolution.y);
    vec3 upPos = getWorldPos(texture2D(sceneDepth, upUv).x, upUv).xyz;
    vec2 leftUv = vUv - vec2(1.0 / resolution.x, 0.0);
    vec3 leftPos = getWorldPos(texture2D(sceneDepth, leftUv).x, leftUv).xyz;
    int hChoice;
    int vChoice;
    if (length(leftPos - worldPos) < length(rightPos - worldPos)) {
      hChoice = 0;
    } else {
      hChoice = 1;
    }
    if (length(upPos - worldPos) < length(downPos - worldPos)) {
      vChoice = 0;
    } else {
      vChoice = 1;
    }
    vec3 hVec;
    vec3 vVec;
    if (hChoice == 0 && vChoice == 0) {
      hVec = leftPos - worldPos;
      vVec = upPos - worldPos;
    } else if (hChoice == 0 && vChoice == 1) {
      hVec = leftPos - worldPos;
      vVec = worldPos - downPos;
    } else if (hChoice == 1 && vChoice == 1) {
      hVec = rightPos - worldPos;
      vVec = downPos - worldPos;
    } else if (hChoice == 1 && vChoice == 0) {
      hVec = rightPos - worldPos;
      vVec = worldPos - upPos;
    }
    return normalize(cross(hVec, vVec));
  }
float rand(float n){return fract(sin(n) * 43758.5453123);}
float rand(vec2 n) { 
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(float p){
float fl = floor(p);
float fc = fract(p);
return mix(rand(fl), rand(fl + 1.0), fc);
}
float noise(vec2 n) {
const vec2 d = vec2(0.0, 1.0);
vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
}
float seed = 0.0;
uint hash( uint x ) {
x += ( x << 10u );
x ^= ( x >>  6u );
x += ( x <<  3u );
x ^= ( x >> 11u );
x += ( x << 15u );
return x;
}
// Compound versions of the hashing algorithm I whipped together.
uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }
// Construct a float with half-open range [0:1] using low 23 bits.
// All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
float floatConstruct( uint m ) {
const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
m |= ieeeOne;                          // Add fractional part to 1.0
float  f = uintBitsToFloat( m );       // Range [1:2]
return f - 1.0;                        // Range [0:1]
}
// Pseudo-random value in half-open range [0:1].
float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
float random( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
float random( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
float random( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
float rand()
{
/*float result = fract(sin(seed + mod(time, 1000.0) + dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
//_Seed += 1.0;
seed += 1.0;
return result;*/
float result = random(vec4(gl_FragCoord.xy, seed, 0.0));
seed += 1.0;
return result;
}
void main() {
    vec4 diffuse = texture2D(sceneDiffuse, vUv);
    float depth = texture2D(sceneDepth, vUv).x;
    if (depth == 1.0) {
      gl_FragColor = vec4(vec3(1.0), 1.0);
      return;
    }
    vec3 worldPos = getWorldPos(depth, vUv);
    vec3 normal = computeNormal(worldPos, vUv);
    float occluded = 0.0;
    float radius = r;
    for(float i = 0.0; i < 16.0; i++) {
      vec3 sampleDirection = normalize(vec3(
        rand() /*rand (vUv.x + vUv.y + i)*/ - 0.5,
        rand() /*rand (vUv.x + vUv.y + i * (i + 1.0))*/ - 0.5,
        rand() /*rand (vUv.x + vUv.y + i * (i + 1.0) * (i + 2.0))*/ - 0.5
      ));
      if (dot(normal, sampleDirection) < 0.0) {
        sampleDirection *= -1.0;
      }
      float moveAmt = rand() * rand() /*rand(vUv.x + vUv.y + i) * rand(2.0 * (vUv.x + vUv.y + i))*/;
      vec3 samplePos = worldPos + radius * moveAmt * sampleDirection;
      vec4 offset = projViewMat * vec4(samplePos, 1.0);
      offset.xyz /= offset.w;
      offset.xyz = offset.xyz * 0.5 + 0.5;
      float sampleDepth = texture2D(sceneDepth, offset.xy).x;
      float distSample =linearize_depth(sampleDepth, 0.1, 1000.0);// length(getWorldPos(sampleDepth, vUv) - cameraPos);
      float distWorld = linearize_depth(offset.z, 0.1, 1000.0);//length(samplePos - cameraPos);
      float rangeCheck = smoothstep(0.0, 1.0, radius / (radius/*max(25.0 - 0.5 * distSample, 1.0)*/ * abs(distSample - distWorld)));
      if (distSample < distWorld) {
        occluded += rangeCheck * dot(sampleDirection, normal);
      }
    }
    gl_FragColor = vec4(vec3(clamp(1.0 - occluded / 16.0, 0.0, 1.0)), 1.0);
}`};new pe,new pe,new pe,new pe,new L,new J;const mx={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},projMat:{value:new pe},viewMat:{value:new pe},projectionMatrixInv:{value:new pe},viewMatrixInv:{value:new pe},cameraPos:{value:new L},resolution:{value:new J},time:{value:0},r:{value:5}},vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D sceneDiffuse;
    uniform sampler2D sceneDepth;
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float r;
    varying vec2 vUv;
    void main() {
        vec3 texel = texture2D(sceneDiffuse, vUv).rgb;
        float occlusion = texture2D(tDiffuse, vUv).r;
        gl_FragColor = vec4(texel * pow(occlusion, 3.0), 1.0);
    }
    `};class Vo extends Qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _x(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Px(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=ri.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new sa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(ri.decodeText(new Uint8Array(e,0,4))===iu){try{r[ze.KHR_BINARY_GLTF]=new Dx(e)}catch(u){i&&i(u);return}s=JSON.parse(r[ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(ri.decodeText(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Hx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);o[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const u=s.extensionsUsed[c],h=s.extensionsRequired||[];switch(u){case ze.KHR_MATERIALS_UNLIT:r[u]=new vx;break;case ze.KHR_DRACO_MESH_COMPRESSION:r[u]=new Rx(s,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:r[u]=new Ix;break;case ze.KHR_MESH_QUANTIZATION:r[u]=new Nx;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function gx(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xx{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Se(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Kg(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new jg(u),c.distance=h;break;case"spot":c=new Xg(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,In(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class vx{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Un}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Pe))}return Promise.all(i)}}class yx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class _x{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new J(o,o)}return Promise.all(s)}}class Mx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class bx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Pe)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class wx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Sx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Se(o[0],o[1],o[2]),Promise.all(s)}}class Tx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Ax{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Se(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Pe)),Promise.all(s)}}class Ex{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Cx{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Lx{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):r.ready.then(function(){const d=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class Px{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ot.TRIANGLES&&c.mode!==Ot.TRIANGLE_STRIP&&c.mode!==Ot.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const m=new pe,p=new L,v=new kn,_=new L(1,1,1),w=new Cg(g.geometry,g.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,S),l.SCALE&&_.fromBufferAttribute(l.SCALE,S),w.setMatrixAt(S,m.compose(p,v,_));for(const S in l)S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);Ye.prototype.copy.call(w,g),w.frustumCulled=!1,this.parser.assignFinalMaterial(w),d.push(w)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const iu="glTF",ls=12,Zl={JSON:1313821514,BIN:5130562};class Dx{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ls);if(this.header={magic:ri.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==iu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-ls,i=new DataView(e,ls);let s=0;for(;s<n;){const r=i.getUint32(s,!0);s+=4;const o=i.getUint32(s,!0);if(s+=4,o===Zl.JSON){const l=new Uint8Array(e,ls+s,r);this.content=ri.decodeText(l)}else if(o===Zl.BIN){const l=ls+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Rx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const u in r){const h=Go[u]||u.toLowerCase();o[h]=r[u]}for(const u in e.attributes){const h=Go[u]||u.toLowerCase();if(r[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Fi[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],m=l[d];m!==void 0&&(g.normalized=m)}h(f)},o,c)})})}}class Ix{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Nx{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class su extends Ds{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,m=g-c,p=-2*d+3*f,v=d-f,_=1-p,w=v-f+h;for(let S=0;S!==o;S++){const M=r[m+S+o],E=r[m+S+l]*u,R=r[g+S+o],b=r[g+S]*u;s[S]=_*M+w*E+p*R+v*b}return s}}const zx=new kn;class Ux extends su{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return zx.fromArray(s).normalize().toArray(s),s}}const Ot={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jl={9728:Xe,9729:ht,9984:Io,9985:Ec,9986:No,9987:ci},Ql={33071:kt,33648:Sr,10497:Ze},_o={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Go={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Dn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fx={CUBICSPLINE:void 0,LINEAR:Hi,STEP:Ms},Mo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Bx(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Nn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mn})),a.DefaultMaterial}function cs(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function In(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ox(a,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;r.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),s&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function kx(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vx(a){const e=a.extensions&&a.extensions[ze.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+$l(e.attributes):t=a.indices+":"+$l(a.attributes)+":"+a.mode,t}function $l(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Ho(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gx(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class Hx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gx,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Ar(this.options.manager):this.textureLoader=new Zg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};cs(s,o,i),In(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,u]of r.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(ri.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=_o[i.type],o=Fi[i.componentType],l=i.normalized===!0,c=new o(i.count*r);return Promise.resolve(new Je(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=_o[i.type],c=Fi[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,p;if(d&&d!==h){const v=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let w=t.cache.get(_);w||(m=new c(o,v*d,i.count*d/u),w=new wg(m,d/u),t.cache.add(_,w)),p=new ta(w,l,f%d/u,g)}else o===null?m=new c(i.count*l):m=new c(o,f,i.count*l),p=new Je(m,l,g);if(i.sparse!==void 0){const v=_o.SCALAR,_=Fi[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,M=new _(r[1],w,i.sparse.count*v),E=new c(r[2],S,i.sparse.count*l);o!==null&&(p=new Je(p.array.slice(),p.itemSize,p.normalized));for(let R=0,b=M.length;R<b;R++){const P=M[R];if(p.setX(P,E[R*l]),l>=2&&p.setY(P,E[R*l+1]),l>=3&&p.setZ(P,E[R*l+2]),l>=4&&p.setW(P,E[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||o.name||"";const f=(s.samplers||{})[r.sampler]||{};return u.magFilter=Jl[f.magFilter]||ht,u.minFilter=Jl[f.minFilter]||ci,u.wrapS=Ql[f.wrapS]||Ze,u.wrapT=Ql[f.wrapT]||Ze,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:r.mimeType});return l=o.createObjectURL(f),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){const p=new tt(m);p.needsUpdate=!0,f(p)}),t.load(ri.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=r.mimeType||Gx(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(r);r=s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Jc,en.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Zc,en.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Nn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},l=s.extensions||{},c=[];if(l[ze.KHR_MATERIALS_UNLIT]){const h=i[ze.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Pe)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Le);const u=s.alphaMode||Mo.OPAQUE;if(u===Mo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Mo.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Un&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new J(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&r!==Un&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Un&&(o.emissive=new Se().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==Un&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Pe)),Promise.all(c).then(function(){const h=new r(o);return s.name&&(h.name=s.name),In(h,s),t.associations.set(h,{materials:e}),s.extensions&&cs(i,h,s),h})}createUniqueName(e){const t=Oe.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ec(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Vx(c),h=i[u];if(h)r.push(h.promise);else{let f;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=ec(new Et,c,t),i[u]={primitive:c,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?Bx(this.cache):this.getDependency("material",r[l].material);o.push(u)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const m=u[d],p=r[d];let v;const _=c[d];if(p.mode===Ot.TRIANGLES||p.mode===Ot.TRIANGLE_STRIP||p.mode===Ot.TRIANGLE_FAN||p.mode===void 0)v=s.isSkinnedMesh===!0?new Tg(m,_):new Ke(m,_),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),p.mode===Ot.TRIANGLE_STRIP?v.geometry=tc(v.geometry,rh):p.mode===Ot.TRIANGLE_FAN&&(v.geometry=tc(v.geometry,Lc));else if(p.mode===Ot.LINES)v=new Lg(m,_);else if(p.mode===Ot.LINE_STRIP)v=new ia(m,_);else if(p.mode===Ot.LINE_LOOP)v=new Pg(m,_);else if(p.mode===Ot.POINTS)v=new Dg(m,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(v.geometry.morphAttributes).length>0&&kx(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),In(v,s),p.extensions&&cs(i,v,p),t.assignFinalMaterial(v),h.push(v)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new ti;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new At(wh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ps(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),In(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],l=[];for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h){o.push(h);const f=new pe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new na(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],d=h.target,g=d.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),r.push(this.getDependency("accessor",p)),o.push(f),l.push(d)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],d=c[3],g=c[4],m=[];for(let v=0,_=u.length;v<_;v++){const w=u[v],S=h[v],M=f[v],E=d[v],R=g[v];if(w===void 0)continue;w.updateMatrix();let b;switch(Dn[R.path]){case Dn.weights:b=Ts;break;case Dn.rotation:b=li;break;case Dn.position:case Dn.scale:default:b=As;break}const P=w.name?w.name:w.uuid,I=E.interpolation!==void 0?Fx[E.interpolation]:Hi,y=[];Dn[R.path]===Dn.weights?w.traverse(function(A){A.morphTargetInfluences&&y.push(A.name?A.name:A.uuid)}):y.push(P);let T=M.array;if(M.normalized){const A=Ho(T.constructor),C=new Float32Array(T.length);for(let z=0,V=T.length;z<V;z++)C[z]=T[z]*A;T=C}for(let A=0,C=y.length;A<C;A++){const z=new b(y[A]+"."+Dn[R.path],S.array,T,I);E.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(B){const O=this instanceof li?Ux:su;return new O(this.times,this.values,this.getValueSize()/3,B)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(z)}}const p=n.name?n.name:"animation_"+e;return new Fg(p,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){const o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(s.isBone===!0?l=new Yc:o.length>1?l=new ti:o.length===1?l=o[0]:l=new Ye,l!==o[0])for(let c=0,u=o.length;c<u;c++)l.add(o[c]);if(s.name&&(l.userData.name=s.name,l.name=r),In(l,s),s.extensions&&cs(n,l,s),s.matrix!==void 0){const c=new pe;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,r=new ti;i.name&&(r.name=s.createUniqueName(i.name)),In(r,i),i.extensions&&cs(n,r,i);const o=i.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(ru(o[c],r,t,s));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof en||f instanceof tt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}}function ru(a,e,t,n){const i=t.nodes[a];return n.getDependency("node",a).then(function(s){return i.skin===void 0?s:n.getDependency("skin",i.skin).then(function(r){return s.traverse(function(o){o.isSkinnedMesh&&o.bind(r,o.matrixWorld)}),s})}).then(function(s){e.add(s);const r=[];if(i.children){const o=i.children;for(let l=0,c=o.length;l<c;l++){const u=o[l];r.push(ru(u,s,t,n))}}return Promise.all(r)})}function Wx(a,e,t){const n=e.attributes,i=new ut;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){const u=Ho(Fi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,l=new L;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const m=Ho(Fi[f.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new hi;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function ec(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in n){const o=Go[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return In(a,e),Wx(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ox(a,e.targets,t):a})}function tc(a,e){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===Lc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s}new Vo;new Qg;var ys=function(){var a=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++a%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===u?"block":"none";a=u}var i=(performance||Date).now(),s=i,r=0,o=t(new ys.Panel("FPS","#0ff","#002")),l=t(new ys.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new ys.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){r++;var u=(performance||Date).now();if(l.update(u-i,200),u>=s+1e3&&(o.update(r*1e3/(u-s),100),s=u,r=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){i=this.end()},domElement:e,setMode:n}};ys.Panel=function(a,e,t){var n=1/0,i=0,s=Math.round,r=s(window.devicePixelRatio||1),o=80*r,l=48*r,c=3*r,u=2*r,h=3*r,f=15*r,d=74*r,g=30*r,m=document.createElement("canvas");m.width=o,m.height=l,m.style.cssText="width:80px;height:48px";var p=m.getContext("2d");return p.font="bold "+9*r+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,o,l),p.fillStyle=e,p.fillText(a,c,u),p.fillRect(h,f,d,g),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(h,f,d,g),{dom:m,update:function(v,_){n=Math.min(n,v),i=Math.max(i,v),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,o,f),p.fillStyle=e,p.fillText(s(v)+" "+a+" ("+s(n)+"-"+s(i)+")",c,u),p.drawImage(m,h+r,f,d-r,g,h,f,d-r,g),p.fillRect(h+d-r,f,r,g),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(h+d-r,f,r,s((1-v/_)*g))}}};function lr(a,e=!1){const t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),s={},r={},o=a[0].morphTargetsRelative,l=new Et;let c=0;for(let u=0;u<a.length;++u){const h=a[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const h=[];for(let f=0;f<a.length;++f){const d=a[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=a[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=nc(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in r){const h=r[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let m=0;m<r[u].length;++m)d.push(r[u][m][f]);const g=nc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function nc(a){let e,t,n,i=0;for(let o=0;o<a.length;++o){const l=a[o];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=l.array.length}const s=new e(i);let r=0;for(let o=0;o<a.length;++o)s.set(a[o].array,r),r+=a[o].array.length;return new Je(s,t,n)}var $n=$n||{};(function(a){a.less=function(y,T,A){return A(y,T)<0},a.exchange=function(y,T,A){var C=y[T];y[T]=y[A],y[A]=C};var e=function(y){this.value=y,this.next=null};a.StackNode=e;var t=function(){this.N=0,this.first=null};t.prototype.push=function(y){this.first=this._push(this.first,y)},t.prototype._push=function(y,T){if(y==null)return this.N++,new a.StackNode(T);var A=y;return this.N++,y=new a.StackNode(T),y.next=A,y},t.prototype.pop=function(){if(this.first!=null){var y=this.first,T=y.value;return this.first=y.next,this.N--,T}},t.prototype.size=function(){return this.N},t.prototype.isEmpty=function(){return this.N==0},t.prototype.peep=function(){if(this.first!=null)return this.first.value},t.prototype.toArray=function(){var y=[];for(x=this.first;x!=null;)y.push(x.value),x=x.next;return y},a.Stack=t;var n=function(y){this.value=y,this.next=null};a.QueueNode=n;var i=function(){this.first=null,this.last=null,this.N=0};i.prototype.enqueue=function(y){var T=this.last;this.last=new a.QueueNode(y),T!=null&&(T.next=this.last),this.first==null&&(this.first=this.last),this.N++},i.prototype.dequeue=function(){if(this.first!=null){var y=this.first,T=y.value;return this.first=y.next,this.first==null&&(this.last=null),this.N--,T}},i.prototype.size=function(){return this.N},i.prototype.isEmpty=function(){return this.N==0},i.prototype.toArray=function(){for(var y=[],T=this.first;T!=null;)y.push(T.value),T=T.next;return y},a.Queue=i;var s=function(y){this.s=[],this.N=0,y||(y=function(T,A){return T-A}),this.compare=y};s.prototype.enqueue=function(y){for(;this.s.lengh<=this.N+1;)this.s.push(0);this.s[++this.N]=y,this.swim(this.N)},s.prototype.swim=function(y){for(;y>1;){var T=Math.floor(y/2);if(!a.less(this.s[y],this.s[T],this.compare))break;a.exchange(this.s,y,T),y=T}},s.prototype.delMin=function(){if(this.N!=0){var y=this.s[1];return a.exchange(this.s,1,this.N--),this.sink(1),y}},s.prototype.sink=function(y){for(;2*y<=this.N;){var T=2*y;if(T<this.N&&a.less(this.s[T+1],this.s[T],this.compare)&&T++,!a.less(this.s[T],this.s[y],this.compare))break;a.exchange(this.s,T,y),y=T}},s.prototype.size=function(){return this.N},s.prototype.isEmpty=function(){return this.N==0},a.MinPQ=s;var r=function(y){this.id=[];for(var T=0;T<y;++T)this.id.push(T)};r.prototype.union=function(y,T){var A=this.root(y),C=this.root(T);C!=A&&(this.id[C]=A)},r.prototype.root=function(y){for(;this.id[y]!=y;)y=this.id[y];return y},r.prototype.connected=function(y,T){return this.root(y)==this.root(T)},a.QuickUnion=r;var o=function(y,T){this.keys=[],this.pq=[],this.qp=[];for(var A=0;A<=y;++A)this.keys.push(null),this.pq.push(0),this.qp.push(-1);this.N=0,T||(T=function(C,z){return C-z}),this.compare=T};o.prototype.insert=function(y,T){this.keys[y]=T,this.pq[++this.N]=y,this.qp[y]=this.N,this.swim(this.N)},o.prototype.decreaseKey=function(y,T){a.less(T,this.keys[y],this.compare)&&(this.keys[y]=T,this.swim(this.qp[y]))},o.prototype.minKey=function(){return this.keys[this.pq[1]]},o.prototype.min=function(){return this.pq[1]},o.prototype.delMin=function(){var y=this.pq[1];return a.exchange(this.pq,1,this.N),this.qp[this.pq[1]]=1,this.qp[this.pq[this.N]]=-1,this.keys[this.pq[this.N]]=null,this.N--,this.sink(1),y},o.prototype.swim=function(y){for(;y>1;){var T=Math.floor(y/2);if(!a.less(this.keys[this.pq[y]],this.keys[this.pq[T]],this.compare))break;a.exchange(this.pq,y,T),this.qp[this.pq[y]]=y,this.qp[this.pq[T]]=T,y=T}},o.prototype.sink=function(y){for(;2*y<=this.N;){var T=2*y;if(T<this.N&&a.less(this.keys[this.pq[T+1]],this.keys[this.pq[T]],this.compare)&&T++,!a.less(this.keys[this.pq[T]],this.keys[this.pq[y]],this.compare))break;a.exchange(this.pq,y,T),this.qp[this.pq[y]]=y,this.qp[this.pq[T]]=T,y=T}},o.prototype.containsIndex=function(y){return this.qp[y]!=-1},o.prototype.isEmpty=function(){return this.N==0},o.prototype.size=function(){return this.N},a.IndexMinPQ=o;var l=function(y){this.V=y,this.adjList=[],this.nodeInfo=[],this.edges={};for(var T=0;T<y;++T)this.adjList.push([]),this.nodeInfo.push({})};l.prototype.addEdge=function(y,T){this.adjList[y].push(T),this.adjList[T].push(y);var A=y+"_"+T;y>T&&(A=T+"_"+y),this.edges[A]=new a.Edge(y,T,0)},l.prototype.adj=function(y){return this.adjList[y]},l.prototype.node=function(y){return this.nodeInfo[y]},l.prototype.edge=function(y,T){var A=y+"_"+T;return y>T&&(A=T+"_"+y),A in this.edges?this.edges[A]:null},a.Graph=l;var c=function(y){this.V=y,this.adjList=[],this.nodeInfo=[],this.edges={};for(var T=0;T<y;++T)this.adjList.push([]),this.nodeInfo.push({})};c.prototype.addEdge=function(y,T){this.adjList[y].push(T);var A=y+"_"+T;this.edges[A]=new a.Edge(y,T,0)},c.prototype.edge=function(y,T){var A=y+"_"+T;return A in this.edges?this.edges[A]:null},c.prototype.adj=function(y){return this.adjList[y]},c.prototype.node=function(y){return this.nodeInfo[y]},c.prototype.reverse=function(){for(var y=new c(this.V),T=0;T<this.V;++T)for(var A=this.adjList[T],C=0;C<A.length;++C){var z=A[C];y.addEdge(z,T)}return y},a.DiGraph=c;var u=function(y,T,A){this.v=y,this.w=T,this.weight=A};u.prototype.either=function(){return this.v},u.prototype.other=function(y){return y==this.v?this.w:this.v},u.prototype.from=function(){return this.v},u.prototype.to=function(){return this.w},a.Edge=u;var h=function(y){this.V=y,this.adjList=[],this.nodeInfo=[];for(var T=0;T<y;++T)this.adjList.push([]),this.nodeInfo.push({})};h.prototype.adj=function(y){return this.adjList[y]},h.prototype.edge=function(y,T){for(var A=this.adjList[y],C=0;C<A.length;++C)if(A[C].other(y)==T)return A[C];return null},h.prototype.node=function(y){return this.nodeInfo[y]},h.prototype.addEdge=function(y){var T=y.either(),A=y.other(T);this.adjList[T].push(y),this.adjList[A].push(y)},a.WeightedGraph=h;var f=function(y){h.call(this,y)};(f.prototype=Object.create(a.WeightedGraph.prototype)).addEdge=function(y){var T=y.from();this.adjList[T].push(y)},f.prototype.edge=function(y,T){for(var A=this.adjList[y],C=0;C<A.length;++C)if(A[C].other(y)==T)return A[C];return null},f.prototype.toDiGraph=function(){for(var y=new a.DiGraph(this.V),T=0;T<this.V;++T)for(var A=this.adjList[T],C=0;C<A.length;++C){var z=A[C].other(T);y.addEdge(T,z)}return y},a.WeightedDiGraph=f;var d=function(y,T,A){this.v=y,this.w=T,this.capacity=A,this.flow=0};d.prototype.residualCapacityTo=function(y){return y==this.v?this.flow:this.capacity-this.flow},d.prototype.addResidualFlowTo=function(y,T){y==this.v?this.flow-=T:y==this.w&&(this.flow+=T)},d.prototype.from=function(){return this.v},d.prototype.to=function(){return this.w},d.prototype.other=function(y){return y==this.v?this.w:this.v},a.FlowEdge=d;var g=function(y){this.V=y,this.adjList=[],this.nodeInfo=[];for(var T=0;T<y;++T)this.adjList.push([]),this.nodeInfo.push({})};g.prototype.node=function(y){return this.nodeInfo[y]},g.prototype.edge=function(y,T){for(var A=this.adjList[y],C=0;C<A.length;++C)if(A[C].other(y)==T)return A[C];return null},g.prototype.addEdge=function(y){var T=y.from();this.adjList[T].push(y);var A=y.other(T);this.adjList[A].push(y)},g.prototype.adj=function(y){return this.adjList[y]},a.FlowNetwork=g;var m=function(y,T){this.s=T;var A=y.V;this.marked=[],this.edgeTo=[];for(var C=0;C<A;++C)this.marked.push(!1),this.edgeTo.push(-1);this.dfs(y,T)};m.prototype.dfs=function(y,T){this.marked[T]=!0;for(var A=y.adj(T),C=0;C<A.length;++C){var z=A[C];this.marked[z]||(this.edgeTo[z]=T,this.dfs(y,z))}},m.prototype.hasPathTo=function(y){return this.marked[y]},m.prototype.pathTo=function(y){var T=new a.Stack;if(y==this.s)return[y];for(var A=y;A!=this.s;A=this.edgeTo[A])T.push(A);return T.push(this.s),T.toArray()},a.DepthFirstSearch=m;var p=function(y,T){var A=y.V;this.s=T;var C=new a.Queue;for(C.enqueue(T),this.marked=[],this.edgeTo=[],z=0;z<A;++z)this.marked.push(!1),this.edgeTo.push(-1);for(;!C.isEmpty();){var z=C.dequeue();this.marked[z]=!0;for(var V=y.adj(z),B=0;B<V.length;++B){var O=V[B];this.marked[O]||(this.edgeTo[O]=z,C.enqueue(O))}}};p.prototype.hasPathTo=function(y){return this.marked[y]},p.prototype.pathTo=function(y){var T=new a.Stack;if(y==this.s)return[y];for(var A=y;A!=this.s;A=this.edgeTo[A])T.push(A);return T.push(this.s),T.toArray()},a.BreadthFirstSearch=p;var v=function(y){this.count=0;var T=y.V;for(this.marked=[],this.id=[],A=0;A<T;++A)this.marked.push(!1),this.id.push(-1);for(var A=0;A<T;++A)this.marked[A]||(this.dfs(y,A),this.count++)};v.prototype.dfs=function(y,T){this.marked[T]=!0,this.id[T]=this.count;for(var A=y.adj(T),C=0;C<A.length;++C){var z=A[C];this.marked[z]||this.dfs(y,z)}},v.prototype.componentId=function(y){return this.id[y]},v.prototype.componentCount=function(){return this.count},a.ConnectedComponents=v;var _=function(y){this.postOrder=new a.Stack,this.marked=[];for(var T=y.V,A=0;A<T;++A)this.marked.push(!1);for(A=0;A<T;++A)this.marked[A]||this.dfs(y,A)};_.prototype.dfs=function(y,T){this.marked[T]=!0;for(var A=y.adj(T),C=0;C<A.length;++C){var z=A[C];this.marked[z]||this.dfs(y,z)}this.postOrder.push(T)},_.prototype.order=function(){return this.postOrder.toArray()},a.TopologicalSort=_;var w=function(y){var T=y.V;for(this.count=0,this.marked=[],this.id=[],z=0;z<T;++z)this.marked.push(!1),this.id.push(-1);for(var A=new a.TopologicalSort(y.reverse()).order(),C=0;C<A.length;++C){var z=A[C];this.marked[z]||(this.dfs(y,z),this.count++)}};w.prototype.dfs=function(y,T){this.marked[T]=!0,this.id[T]=this.count;for(var A=y.adj(T),C=0;C<A.length;++C){var z=A[C];this.marked[z]||this.dfs(y,z)}},w.prototype.componentId=function(y){return this.id[y]},w.prototype.componentCount=function(){return this.count},a.StronglyConnectedComponents=w;var S=function(y){for(var T=y.V,A=new a.MinPQ(function($,H){return $.weight-H.weight}),C=0;C<y.V;++C)for(var z=y.adj(C),V=0;V<z.length;++V)(O=z[V]).either()==C&&A.enqueue(O);this.mst=[];for(var B=new a.QuickUnion(T);!A.isEmpty()&&this.mst.length<T-1;){var O=A.delMin(),C=O.either(),Q=O.other(C);B.connected(C,Q)||(B.union(C,Q),this.mst.push(O))}};a.KruskalMST=S;var M=function(y){var T=y.V;for(this.marked=[],C=0;C<T;++C)this.marked.push(!1);for(this.pq=new a.MinPQ(function(V,B){return V.weight-B.weight}),this.mst=[],this.visit(y,0);!this.pq.isEmpty()&&this.mst.length<T-1;){var A=this.pq.delMin(),C=A.either(),z=A.other(C);this.marked[C]&&this.marked[z]||(this.mst.push(A),this.marked[C]||this.visit(y,C),this.marked[z]||this.visit(y,z))}};M.prototype.visit=function(y,T){this.marked[T]=!0;for(var A=y.adj(T),C=0;C<A.length;++C){var z=A[C];this.marked[z.other(T)]||this.pq.enqueue(z)}},a.LazyPrimMST=M;var E=function(y){var T=y.V;this.pq=new a.IndexMinPQ(T,function(V,B){return V.weight-B.weight}),this.marked=[];for(var A=0;A<T;++A)this.marked.push(!1);for(this.mst=[],this.visit(y,0);!this.pq.isEmpty();){var C=this.pq.minKey(),z=this.pq.delMin();this.mst.push(C),this.marked[z]||this.visit(y,z)}};E.prototype.visit=function(y,T){this.marked[T]=!0;for(var A=y.adj(T),C=0;C<A.length;++C){var z=A[C],V=z.other(T);this.marked[V]||(this.pq.containsIndex(V)?this.pq.decreaseKey(V,z):this.pq.insert(V,z))}},a.EagerPrimMST=E;var R=function(y,T){var A=y.V;for(this.s=T,this.marked=[],this.edgeTo=[],this.cost=[],this.pq=new a.IndexMinPQ(A,function(O,Q){return Q}),C=0;C<A;++C)this.marked.push(!1),this.edgeTo.push(null),this.cost.push(Number.MAX_VALUE);for(this.cost[T]=0,this.pq.insert(T,this.cost[T]);!this.pq.isEmpty();){var C=this.pq.delMin();this.marked[C]=!0;for(var z=y.adj(C),V=0;V<z.length;++V){var B=z[V];this.relax(B)}}};R.prototype.relax=function(y){var T=y.from(),A=y.to();this.cost[A]>this.cost[T]+y.weight&&(this.cost[A]=this.cost[T]+y.weight,this.edgeTo[A]=y,this.pq.containsIndex(A)?this.pq.decreaseKey(A,this.cost[A]):this.pq.insert(A,this.cost[A]))},R.prototype.hasPathTo=function(y){return this.marked[y]},R.prototype.pathTo=function(y){for(var T=new a.Stack,A=y;A!=this.s;A=this.edgeTo[A].other(A))T.push(this.edgeTo[A]);return T.toArray()},R.prototype.distanceTo=function(y){return this.cost[y]},a.Dijkstra=R;var b=function(y,T){var A=y.V;for(this.s=T,this.marked=[],this.edgeTo=[],this.cost=[],z=0;z<A;++z)this.marked.push(!1),this.edgeTo.push(null),this.cost.push(Number.MAX_VALUE);this.cost[T]=0,this.marked[T]=!0;for(var C=0;C<A;++C)for(var z=0;z<A;++z)for(var V=y.adj(z),B=0;B<V.length;++B){var O=V[B];this.relax(O)}};b.prototype.relax=function(y){var T=y.from(),A=y.to();this.cost[A]>this.cost[T]+y.weight&&(this.cost[A]=this.cost[T]+y.weight,this.marked[A]=!0,this.edgeTo[A]=y)},b.prototype.hasPathTo=function(y){return this.marked[y]},b.prototype.pathTo=function(y){for(var T=new a.Stack,A=y;A!=this.s;A=this.edgeTo[A].other(A))T.push(this.edgeTo[A]);return T.toArray()},b.prototype.distanceTo=function(y){return this.cost[y]},a.BellmanFord=b;var P=function(y,T){var A=y.V;for(this.s=T,this.marked=[],this.edgeTo=[],this.cost=[],V=0;V<A;++V)this.marked.push(!1),this.edgeTo.push(null),this.cost.push(Number.MAX_VALUE);this.cost[T]=0,this.marked[T]=!0;for(var C=new a.TopologicalSort(y.toDiGraph()).order(),z=0;z<C.length;++z)for(var V=C[z],B=y.adj(V),O=0;O<B.length;++O){var Q=B[O];this.relax(Q)}};P.prototype.relax=function(y){var T=y.from(),A=y.to();this.cost[A]>this.cost[T]+y.weight&&(this.cost[A]=this.cost[T]+y.weight,this.marked[A]=!0,this.edgeTo[A]=y)},P.prototype.hasPathTo=function(y){return this.marked[y]},P.prototype.pathTo=function(y){for(var T=new a.Stack,A=y;A!=this.s;A=this.edgeTo[A].other(A))T.push(this.edgeTo[A]);return T.toArray()},P.prototype.distanceTo=function(y){return this.cost[y]},a.TopologicalSortShortestPaths=P;var I=function(y,T,A){this.value=0,y.V;var C=Number.MAX_VALUE;for(this.marked=null,this.edgeTo=null,this.s=T,this.t=A;this.hasAugmentedPath(y);){for(z=this.t;z!=this.s;z=this.edgeTo[z].other(z))C=Math.min(C,this.edgeTo[z].residualCapacityTo(z));for(var z=this.t;z!=this.s;z=this.edgeTo[z].other(z))this.edgeTo[z].addResidualFlowTo(z,C);this.value+=C}};I.prototype.hasAugmentedPath=function(y){var T=y.V;for(this.marked=[],this.edgeTo=[],C=0;C<T;++C)this.marked.push(!1),this.edgeTo.push(null);var A=new a.Queue;for(A.enqueue(this.s),this.marked[this.s]=!0;!A.isEmpty();)for(var C=A.dequeue(),z=y.adj(C),V=0;V<z.length;++V){var B=z[V],O=B.other(C);if(!this.marked[O]&&B.residualCapacityTo(O)>0){if(this.edgeTo[O]=B,this.marked[O]=!0,O==this.t)return!0;A.enqueue(O)}}return!1},I.prototype.minCut=function(y){for(var T=[],A=y.V,C=0;C<A;++C)for(var z=y.adj(C),V=0;V<z.length;++V){var B=z[V];B.from()==C&&B.residualCapacityTo(B.other(C))==0&&T.push(B)}return T},a.FordFulkerson=I})($n);class Rr extends Ye{constructor({position:e}){super(),this.position.copy(e),this.world=null}update(){}}class Xx extends Rr{constructor({position:e,bounds:t}){super({position:e}),this.bounds=t}}class qx extends Rr{constructor({position:e,bounds:t}){super({position:e}),this.bounds=t}}class jx extends Rr{constructor(e,t,n){super({position:e}),this.box=new ut,this.velocity=new L,this.horizontalVelocity=new L,this.radius=t,this.size=n,this.onGround=!1,this.gravity=-300,this.segment=new jt(new L,new L(0,-n,0)),this.friction=.975}update(e,t){const n=t;n.matrixWorld||(n.matrixWorld=new pe),this.velocity.y+=this.onGround?0:e*this.gravity,this.position.addScaledVector(this.velocity,e),this.position.add(this.horizontalVelocity),this.horizontalVelocity.multiplyScalar(this.friction),this.updateMatrixWorld();const i=new ut,s=new pe,r=new jt;i.makeEmpty(),s.copy(n.matrixWorld).invert(),r.copy(this.segment),r.start.applyMatrix4(this.matrixWorld).applyMatrix4(s),r.end.applyMatrix4(this.matrixWorld).applyMatrix4(s),i.expandByPoint(r.start),i.expandByPoint(r.end),i.min.addScalar(-this.radius),i.max.addScalar(this.radius);const o=new L,l=new L;n.shapecast({intersectsBounds:f=>f.intersectsBox(i),intersectsTriangle:f=>{const d=o,g=l,m=f.closestPointToSegment(r,d,g);if(m<this.radius){const p=this.radius-m,v=g.sub(d).normalize();r.start.addScaledVector(v,p),r.end.addScaledVector(v,p)}}});const c=o;c.copy(r.start).applyMatrix4(n.matrixWorld);const u=l;u.subVectors(c,this.position),this.onGround=u.y>Math.abs(e*this.velocity.y*.25);const h=Math.max(0,u.length()-1e-5);u.normalize().multiplyScalar(h),this.position.add(u),this.onGround?this.velocity.set(0,0,0):(u.normalize(),this.velocity.addScaledVector(u,-u.dot(this.velocity)))}}class Yx extends jx{constructor({position:e}){super(e,.75,5)}update(e,t){super.update(e,t)}}const Kx=a=>1-4*(a-.5)*(a-.5);class bo extends Rr{constructor({position:e,bounds:t,model:n}){super({position:e}),this.bounds=t,this.model=n,this.open=!1,this.openTicks=0,this.openDir=1,this.facingDir=new L(1,0,0),this.bounds.getSize(new L).x>this.bounds.getSize(new L).z&&this.facingDir.set(0,0,1)}update(e){this.openTicks-=e*.5,this.open&&(this.model.children[0].rotation.y=Math.PI/2*Kx(this.openTicks)*this.openDir),this.openTicks<0&&(this.open=!1,this.model.children[0].rotation.y=0)}openUp(e){this.open=!0,this.openTicks=1,this.openDir=e.clone().sub(this.position).normalize().dot(this.facingDir)>0?1:-1}}const ou=0,Zx=1,Wo=2,ic=2,wo=1.25,sc=1,Mr=6*4+4+4,Xo=65535,Jx=Math.pow(2,-24);class cr{constructor(){}}function Qt(a,e,t){return t.min.x=e[a],t.min.y=e[a+1],t.min.z=e[a+2],t.max.x=e[a+3],t.max.y=e[a+4],t.max.z=e[a+5],t}function rc(a){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=a[n+3]-a[n];i>t&&(t=i,e=n)}return e}function oc(a,e){e.set(a)}function ac(a,e,t){let n,i;for(let s=0;s<3;s++){const r=s+3;n=a[s],i=e[s],t[s]=n<i?n:i,n=a[r],i=e[r],t[r]=n>i?n:i}}function ur(a,e,t){for(let n=0;n<3;n++){const i=e[a+2*n],s=e[a+2*n+1],r=i-s,o=i+s;r<t[n]&&(t[n]=r),o>t[n+3]&&(t[n+3]=o)}}function us(a){const e=a[3]-a[0],t=a[4]-a[1],n=a[5]-a[2];return 2*(e*t+t*n+n*e)}function Qx(a,e){if(!a.index){const t=a.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;let i;t>65535?i=new Uint32Array(new n(4*t)):i=new Uint16Array(new n(2*t)),a.setIndex(new Je(i,1));for(let s=0;s<t;s++)i[s]=s}}function $x(a){if(!a.groups||!a.groups.length)return[{offset:0,count:a.index.count/3}];const e=[],t=new Set;for(const i of a.groups)t.add(i.start),t.add(i.start+i.count);const n=Array.from(t.values()).sort((i,s)=>i-s);for(let i=0;i<n.length-1;i++){const s=n[i],r=n[i+1];e.push({offset:s/3,count:(r-s)/3})}return e}function So(a,e,t,n,i=null){let s=1/0,r=1/0,o=1/0,l=-1/0,c=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,g=-1/0,m=-1/0,p=-1/0;const v=i!==null;for(let _=e*6,w=(e+t)*6;_<w;_+=6){const S=a[_+0],M=a[_+1],E=S-M,R=S+M;E<s&&(s=E),R>l&&(l=R),v&&S<h&&(h=S),v&&S>g&&(g=S);const b=a[_+2],P=a[_+3],I=b-P,y=b+P;I<r&&(r=I),y>c&&(c=y),v&&b<f&&(f=b),v&&b>m&&(m=b);const T=a[_+4],A=a[_+5],C=T-A,z=T+A;C<o&&(o=C),z>u&&(u=z),v&&T<d&&(d=T),v&&T>p&&(p=T)}n[0]=s,n[1]=r,n[2]=o,n[3]=l,n[4]=c,n[5]=u,v&&(i[0]=h,i[1]=f,i[2]=d,i[3]=g,i[4]=m,i[5]=p)}function e0(a,e,t,n){let i=1/0,s=1/0,r=1/0,o=-1/0,l=-1/0,c=-1/0;for(let u=e*6,h=(e+t)*6;u<h;u+=6){const f=a[u+0];f<i&&(i=f),f>o&&(o=f);const d=a[u+2];d<s&&(s=d),d>l&&(l=d);const g=a[u+4];g<r&&(r=g),g>c&&(c=g)}n[0]=i,n[1]=s,n[2]=r,n[3]=o,n[4]=l,n[5]=c}function t0(a,e,t,n,i){let s=t,r=t+n-1;const o=i.pos,l=i.axis*2;for(;;){for(;s<=r&&e[s*6+l]<o;)s++;for(;s<=r&&e[r*6+l]>=o;)r--;if(s<r){for(let c=0;c<3;c++){let u=a[s*3+c];a[s*3+c]=a[r*3+c],a[r*3+c]=u;let h=e[s*6+c*2+0];e[s*6+c*2+0]=e[r*6+c*2+0],e[r*6+c*2+0]=h;let f=e[s*6+c*2+1];e[s*6+c*2+1]=e[r*6+c*2+1],e[r*6+c*2+1]=f}s++,r--}else return s}}const pn=32,n0=(a,e)=>a.candidate-e.candidate,Rn=new Array(pn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),hr=new Float32Array(6);function i0(a,e,t,n,i,s){let r=-1,o=0;if(s===ou)r=rc(e),r!==-1&&(o=(e[r]+e[r+3])/2);else if(s===Zx)r=rc(a),r!==-1&&(o=s0(t,n,i,r));else if(s===Wo){const l=us(a);let c=wo*i;const u=n*6,h=(n+i)*6;for(let f=0;f<3;f++){const d=e[f],p=(e[f+3]-d)/pn;if(i<pn/4){const v=[...Rn];v.length=i;let _=0;for(let S=u;S<h;S+=6,_++){const M=v[_];M.candidate=t[S+2*f],M.count=0;const{bounds:E,leftCacheBounds:R,rightCacheBounds:b}=M;for(let P=0;P<3;P++)b[P]=1/0,b[P+3]=-1/0,R[P]=1/0,R[P+3]=-1/0,E[P]=1/0,E[P+3]=-1/0;ur(S,t,E)}v.sort(n0);let w=i;for(let S=0;S<w;S++){const M=v[S];for(;S+1<w&&v[S+1].candidate===M.candidate;)v.splice(S+1,1),w--}for(let S=u;S<h;S+=6){const M=t[S+2*f];for(let E=0;E<w;E++){const R=v[E];M>=R.candidate?ur(S,t,R.rightCacheBounds):(ur(S,t,R.leftCacheBounds),R.count++)}}for(let S=0;S<w;S++){const M=v[S],E=M.count,R=i-M.count,b=M.leftCacheBounds,P=M.rightCacheBounds;let I=0;E!==0&&(I=us(b)/l);let y=0;R!==0&&(y=us(P)/l);const T=sc+wo*(I*E+y*R);T<c&&(r=f,c=T,o=M.candidate)}}else{for(let w=0;w<pn;w++){const S=Rn[w];S.count=0,S.candidate=d+p+w*p;const M=S.bounds;for(let E=0;E<3;E++)M[E]=1/0,M[E+3]=-1/0}for(let w=u;w<h;w+=6){let E=~~((t[w+2*f]-d)/p);E>=pn&&(E=pn-1);const R=Rn[E];R.count++,ur(w,t,R.bounds)}const v=Rn[pn-1];oc(v.bounds,v.rightCacheBounds);for(let w=pn-2;w>=0;w--){const S=Rn[w],M=Rn[w+1];ac(S.bounds,M.rightCacheBounds,S.rightCacheBounds)}let _=0;for(let w=0;w<pn-1;w++){const S=Rn[w],M=S.count,E=S.bounds,b=Rn[w+1].rightCacheBounds;M!==0&&(_===0?oc(E,hr):ac(E,hr,hr)),_+=M;let P=0,I=0;_!==0&&(P=us(hr)/l);const y=i-_;y!==0&&(I=us(b)/l);const T=sc+wo*(P*_+I*y);T<c&&(r=f,c=T,o=S.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:r,pos:o}}function s0(a,e,t,n){let i=0;for(let s=e,r=e+t;s<r;s++)i+=a[s*6+n*2];return i/t}function r0(a,e){const t=a.attributes.position,n=a.index.array,i=n.length/3,s=new Float32Array(i*6),r=t.normalized,o=t.array,l=t.offset||0;let c=3;t.isInterleavedBufferAttribute&&(c=t.data.stride);const u=["getX","getY","getZ"];for(let h=0;h<i;h++){const f=h*3,d=h*6;let g,m,p;r?(g=n[f+0],m=n[f+1],p=n[f+2]):(g=n[f+0]*c+l,m=n[f+1]*c+l,p=n[f+2]*c+l);for(let v=0;v<3;v++){let _,w,S;r?(_=t[u[v]](g),w=t[u[v]](m),S=t[u[v]](p)):(_=o[g+v],w=o[m+v],S=o[p+v]);let M=_;w<M&&(M=w),S<M&&(M=S);let E=_;w>E&&(E=w),S>E&&(E=S);const R=(E-M)/2,b=v*2;s[d+b+0]=M+R,s[d+b+1]=R+(Math.abs(M)+R)*Jx,M<e[v]&&(e[v]=M),E>e[v+3]&&(e[v+3]=E)}}return s}function o0(a,e){function t(v){f&&f(v/d)}function n(v,_,w,S=null,M=0){if(!g&&M>=l&&(g=!0,c&&(console.warn(`MeshBVH: Max depth of ${l} reached when generating BVH. Consider increasing maxDepth.`),console.warn(a))),w<=u||M>=l)return t(_+w),v.offset=_,v.count=w,v;const E=i0(v.boundingData,S,r,_,w,h);if(E.axis===-1)return t(_+w),v.offset=_,v.count=w,v;const R=t0(o,r,_,w,E);if(R===_||R===_+w)t(_+w),v.offset=_,v.count=w;else{v.splitAxis=E.axis;const b=new cr,P=_,I=R-_;v.left=b,b.boundingData=new Float32Array(6),So(r,P,I,b.boundingData,s),n(b,P,I,s,M+1);const y=new cr,T=R,A=w-I;v.right=y,y.boundingData=new Float32Array(6),So(r,T,A,y.boundingData,s),n(y,T,A,s,M+1)}return v}Qx(a,e);const i=new Float32Array(6),s=new Float32Array(6),r=r0(a,i),o=a.index.array,l=e.maxDepth,c=e.verbose,u=e.maxLeafTris,h=e.strategy,f=e.onProgress,d=a.index.count/3;let g=!1;const m=[],p=$x(a);if(p.length===1){const v=p[0],_=new cr;_.boundingData=i,e0(r,v.offset,v.count,s),n(_,v.offset,v.count,s),m.push(_)}else for(let v of p){const _=new cr;_.boundingData=new Float32Array(6),So(r,v.offset,v.count,_.boundingData,s),n(_,v.offset,v.count,s),m.push(_)}return m}function a0(a,e){const t=o0(a,e);let n,i,s;const r=[],o=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let u=0;u<t.length;u++){const h=t[u];let f=l(h);const d=new o(Mr*f);n=new Float32Array(d),i=new Uint32Array(d),s=new Uint16Array(d),c(0,h),r.push(d)}return r;function l(u){return u.count?1:1+l(u.left)+l(u.right)}function c(u,h){const f=u/4,d=u/2,g=!!h.count,m=h.boundingData;for(let p=0;p<6;p++)n[f+p]=m[p];if(g){const p=h.offset,v=h.count;return i[f+6]=p,s[d+14]=v,s[d+15]=Xo,u+Mr}else{const p=h.left,v=h.right,_=h.splitAxis;let w;if(w=c(u+Mr,p),w/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return i[f+6]=w/4,w=c(w,v),i[f+7]=_,w}}}class tn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let s=0,r=e.length;s<r;s++){const l=e[s][t];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let s=0,r=t.length;s<r;s++){const o=t[s],l=e.dot(o);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}tn.prototype.setFromBox=function(){const a=new L;return function(t,n){const i=n.min,s=n.max;let r=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){a.x=i.x*l+s.x*(1-l),a.y=i.y*c+s.y*(1-c),a.z=i.z*u+s.z*(1-u);const h=t.dot(a);r=Math.min(h,r),o=Math.max(h,o)}this.min=r,this.max=o}}();(function(){const a=new tn;return function(t,n){const i=t.points,s=t.satAxes,r=t.satBounds,o=n.points,l=n.satAxes,c=n.satBounds;for(let u=0;u<3;u++){const h=r[u],f=s[u];if(a.setFromPoints(f,o),h.isSeparated(a))return!1}for(let u=0;u<3;u++){const h=c[u],f=l[u];if(a.setFromPoints(f,i),h.isSeparated(a))return!1}}})();const l0=function(){const a=new L,e=new L,t=new L;return function(i,s,r){const o=i.start,l=a,c=s.start,u=e;t.subVectors(o,c),a.subVectors(i.end,i.start),e.subVectors(s.end,s.start);const h=t.dot(u),f=u.dot(l),d=u.dot(u),g=t.dot(l),p=l.dot(l)*d-f*f;let v,_;p!==0?v=(h*f-g*d)/p:v=0,_=(h+v*f)/d,r.x=v,r.y=_}}(),ha=function(){const a=new J,e=new L,t=new L;return function(i,s,r,o){l0(i,s,a);let l=a.x,c=a.y;if(l>=0&&l<=1&&c>=0&&c<=1){i.at(l,r),s.at(c,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),i.closestPointToPoint(o,!0,r);return}else if(c>=0&&c<=1){l<0?i.at(0,r):i.at(1,r),s.closestPointToPoint(r,!0,o);return}else{let u;l<0?u=i.start:u=i.end;let h;c<0?h=s.start:h=s.end;const f=e,d=t;if(i.closestPointToPoint(h,!0,e),s.closestPointToPoint(u,!0,t),f.distanceToSquared(h)<=d.distanceToSquared(u)){r.copy(f),o.copy(h);return}else{r.copy(u),o.copy(d);return}}}}(),c0=function(){const a=new L,e=new L,t=new mn,n=new jt;return function(s,r){const{radius:o,center:l}=s,{a:c,b:u,c:h}=r;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,a).distanceTo(l)<=o||(n.start=c,n.end=h,n.closestPointToPoint(l,!0,a).distanceTo(l)<=o)||(n.start=u,n.end=h,n.closestPointToPoint(l,!0,a).distanceTo(l)<=o))return!0;const m=r.getPlane(t);if(Math.abs(m.distanceToPoint(l))<=o){const v=m.projectPoint(l,e);if(r.containsPoint(v))return!0}return!1}}(),u0=1e-15;function Ai(a){return Math.abs(a)<u0}class bn extends ft{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new tn),this.points=[this.a,this.b,this.c],this.sphere=new hi,this.plane=new mn,this.needsUpdate=!0}intersectsSphere(e){return c0(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,s=this.satAxes,r=this.satBounds,o=s[0],l=r[0];this.getNormal(o),l.setFromPoints(o,i);const c=s[1],u=r[1];c.subVectors(e,t),u.setFromPoints(c,i);const h=s[2],f=r[2];h.subVectors(t,n),f.setFromPoints(h,i);const d=s[3],g=r[3];d.subVectors(n,e),g.setFromPoints(d,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}bn.prototype.closestPointToSegment=function(){const a=new L,e=new L,t=new jt;return function(i,s=null,r=null){const{start:o,end:l}=i,c=this.points;let u,h=1/0;for(let f=0;f<3;f++){const d=(f+1)%3;t.start.copy(c[f]),t.end.copy(c[d]),ha(t,i,a,e),u=a.distanceToSquared(e),u<h&&(h=u,s&&s.copy(a),r&&r.copy(e))}return this.closestPointToPoint(o,a),u=o.distanceToSquared(a),u<h&&(h=u,s&&s.copy(a),r&&r.copy(o)),this.closestPointToPoint(l,a),u=l.distanceToSquared(a),u<h&&(h=u,s&&s.copy(a),r&&r.copy(l)),Math.sqrt(h)}}();bn.prototype.intersectsTriangle=function(){const a=new bn,e=new Array(3),t=new Array(3),n=new tn,i=new tn,s=new L,r=new L,o=new L,l=new L,c=new jt,u=new jt,h=new jt;return function(d,g=null){this.needsUpdate&&this.update(),d.isExtendedTriangle?d.needsUpdate&&d.update():(a.copy(d),a.update(),d=a);const m=this.plane,p=d.plane;if(Math.abs(m.normal.dot(p.normal))>1-1e-10){const v=this.satBounds,_=this.satAxes;t[0]=d.a,t[1]=d.b,t[2]=d.c;for(let M=0;M<4;M++){const E=v[M],R=_[M];if(n.setFromPoints(R,t),E.isSeparated(n))return!1}const w=d.satBounds,S=d.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let M=0;M<4;M++){const E=w[M],R=S[M];if(n.setFromPoints(R,e),E.isSeparated(n))return!1}for(let M=0;M<4;M++){const E=_[M];for(let R=0;R<4;R++){const b=S[R];if(s.crossVectors(E,b),n.setFromPoints(s,e),i.setFromPoints(s,t),n.isSeparated(i))return!1}}return g&&(console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),g.start.set(0,0,0),g.end.set(0,0,0)),!0}else{const v=this.points;let _=!1,w=0;for(let A=0;A<3;A++){const C=v[A],z=v[(A+1)%3];c.start.copy(C),c.end.copy(z),c.delta(r);const V=_?u.start:u.end,B=Ai(p.distanceToPoint(C));if(Ai(p.normal.dot(r))&&B){u.copy(c),w=2;break}if((p.intersectLine(c,V)||B)&&!Ai(V.distanceTo(z))){if(w++,_)break;_=!0}}if(w===1&&d.containsPoint(u.end))return g&&(g.start.copy(u.end),g.end.copy(u.end)),!0;if(w!==2)return!1;const S=d.points;let M=!1,E=0;for(let A=0;A<3;A++){const C=S[A],z=S[(A+1)%3];c.start.copy(C),c.end.copy(z),c.delta(o);const V=M?h.start:h.end,B=Ai(m.distanceToPoint(C));if(Ai(m.normal.dot(o))&&B){h.copy(c),E=2;break}if((m.intersectLine(c,V)||B)&&!Ai(V.distanceTo(z))){if(E++,M)break;M=!0}}if(E===1&&this.containsPoint(h.end))return g&&(g.start.copy(h.end),g.end.copy(h.end)),!0;if(E!==2)return!1;if(u.delta(r),h.delta(o),r.dot(o)<0){let A=h.start;h.start=h.end,h.end=A}const R=u.start.dot(r),b=u.end.dot(r),P=h.start.dot(r),I=h.end.dot(r),y=b<P,T=R<I;return R!==I&&P!==b&&y===T?!1:(g&&(l.subVectors(u.start,h.start),l.dot(r)>0?g.start.copy(u.start):g.start.copy(h.start),l.subVectors(u.end,h.end),l.dot(r)<0?g.end.copy(u.end):g.end.copy(h.end)),!0)}}}();bn.prototype.distanceToPoint=function(){const a=new L;return function(t){return this.closestPointToPoint(t,a),t.distanceTo(a)}}();bn.prototype.distanceToTriangle=function(){const a=new L,e=new L,t=["a","b","c"],n=new jt,i=new jt;return function(r,o=null,l=null){const c=o||l?n:null;if(this.intersectsTriangle(r,c))return(o||l)&&(o&&c.getCenter(o),l&&c.getCenter(l)),0;let u=1/0;for(let h=0;h<3;h++){let f;const d=t[h],g=r[d];this.closestPointToPoint(g,a),f=g.distanceToSquared(a),f<u&&(u=f,o&&o.copy(a),l&&l.copy(g));const m=this[d];r.closestPointToPoint(m,a),f=m.distanceToSquared(a),f<u&&(u=f,o&&o.copy(m),l&&l.copy(a))}for(let h=0;h<3;h++){const f=t[h],d=t[(h+1)%3];n.set(this[f],this[d]);for(let g=0;g<3;g++){const m=t[g],p=t[(g+1)%3];i.set(r[m],r[p]),ha(n,i,a,e);const v=a.distanceToSquared(e);v<u&&(u=v,o&&o.copy(a),l&&l.copy(e))}}return Math.sqrt(u)}}();class nn{constructor(e,t,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new pe,this.invMatrix=new pe,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new tn),this.alignedSatBounds=new Array(3).fill().map(()=>new tn),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}nn.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*c|2*u|4*h,d=i[f];d.x=c?n.x:t.x,d.y=u?n.y:t.y,d.z=h?n.z:t.z,d.applyMatrix4(e)}const s=this.satBounds,r=this.satAxes,o=i[0];for(let c=0;c<3;c++){const u=r[c],h=s[c],f=1<<c,d=i[f];u.subVectors(o,d),h.setFromPoints(u,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();nn.prototype.intersectsBox=function(){const a=new tn;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,s=this.satBounds,r=this.satAxes,o=this.alignedSatBounds;if(a.min=n.x,a.max=i.x,o[0].isSeparated(a)||(a.min=n.y,a.max=i.y,o[1].isSeparated(a))||(a.min=n.z,a.max=i.z,o[2].isSeparated(a)))return!1;for(let l=0;l<3;l++){const c=r[l],u=s[l];if(a.setFromBox(c,t),u.isSeparated(a))return!1}return!0}}();nn.prototype.intersectsTriangle=function(){const a=new bn,e=new Array(3),t=new tn,n=new tn,i=new L;return function(r){this.needsUpdate&&this.update(),r.isExtendedTriangle?r.needsUpdate&&r.update():(a.copy(r),a.update(),r=a);const o=this.satBounds,l=this.satAxes;e[0]=r.a,e[1]=r.b,e[2]=r.c;for(let f=0;f<3;f++){const d=o[f],g=l[f];if(t.setFromPoints(g,e),d.isSeparated(t))return!1}const c=r.satBounds,u=r.satAxes,h=this.points;for(let f=0;f<3;f++){const d=c[f],g=u[f];if(t.setFromPoints(g,h),d.isSeparated(t))return!1}for(let f=0;f<3;f++){const d=l[f];for(let g=0;g<4;g++){const m=u[g];if(i.crossVectors(d,m),t.setFromPoints(i,e),n.setFromPoints(i,h),t.isSeparated(n))return!1}}return!0}}();nn.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();nn.prototype.distanceToPoint=function(){const a=new L;return function(t){return this.closestPointToPoint(t,a),t.distanceTo(a)}}();nn.prototype.distanceToBox=function(){const a=["x","y","z"],e=new Array(12).fill().map(()=>new jt),t=new Array(12).fill().map(()=>new jt),n=new L,i=new L;return function(r,o=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(r))return(l||c)&&(r.getCenter(i),this.closestPointToPoint(i,n),r.closestPointToPoint(n,i),l&&l.copy(n),c&&c.copy(i)),0;const u=o*o,h=r.min,f=r.max,d=this.points;let g=1/0;for(let p=0;p<8;p++){const v=d[p];i.copy(v).clamp(h,f);const _=v.distanceToSquared(i);if(_<g&&(g=_,l&&l.copy(v),c&&c.copy(i),_<u))return Math.sqrt(_)}let m=0;for(let p=0;p<3;p++)for(let v=0;v<=1;v++)for(let _=0;_<=1;_++){const w=(p+1)%3,S=(p+2)%3,M=v<<w|_<<S,E=1<<p|v<<w|_<<S,R=d[M],b=d[E];e[m].set(R,b);const I=a[p],y=a[w],T=a[S],A=t[m],C=A.start,z=A.end;C[I]=h[I],C[y]=v?h[y]:f[y],C[T]=_?h[T]:f[y],z[I]=f[I],z[y]=v?h[y]:f[y],z[T]=_?h[T]:f[y],m++}for(let p=0;p<=1;p++)for(let v=0;v<=1;v++)for(let _=0;_<=1;_++){i.x=p?f.x:h.x,i.y=v?f.y:h.y,i.z=_?f.z:h.z,this.closestPointToPoint(i,n);const w=i.distanceToSquared(n);if(w<g&&(g=w,l&&l.copy(n),c&&c.copy(i),w<u))return Math.sqrt(w)}for(let p=0;p<12;p++){const v=e[p];for(let _=0;_<12;_++){const w=t[_];ha(v,w,n,i);const S=n.distanceToSquared(i);if(S<g&&(g=S,l&&l.copy(n),c&&c.copy(i),S<u))return Math.sqrt(S)}}return Math.sqrt(g)}}();const fr=new L,dr=new L,pr=new L,lc=new J,cc=new J,uc=new J,hc=new L;function h0(a,e,t,n,i,s){let r;return s===zt?r=a.intersectTriangle(n,t,e,!0,i):r=a.intersectTriangle(e,t,n,s!==Le,i),r===null?null:{distance:a.origin.distanceTo(i),point:i.clone()}}function f0(a,e,t,n,i,s,r){fr.fromBufferAttribute(e,n),dr.fromBufferAttribute(e,i),pr.fromBufferAttribute(e,s);const o=h0(a,fr,dr,pr,hc,r);if(o){t&&(lc.fromBufferAttribute(t,n),cc.fromBufferAttribute(t,i),uc.fromBufferAttribute(t,s),o.uv=ft.getUV(hc,fr,dr,pr,lc,cc,uc,new J));const l={a:n,b:i,c:s,normal:new L,materialIndex:0};ft.getNormal(fr,dr,pr,l.normal),o.face=l,o.faceIndex=n}return o}function au(a,e,t,n,i){const s=n*3,r=a.index.getX(s),o=a.index.getX(s+1),l=a.index.getX(s+2),c=f0(t,a.attributes.position,a.attributes.uv,r,o,l,e);return c?(c.faceIndex=n,i&&i.push(c),c):null}function d0(a,e,t,n,i,s){for(let r=n,o=n+i;r<o;r++)au(a,e,t,r,s)}function p0(a,e,t,n,i){let s=1/0,r=null;for(let o=n,l=n+i;o<l;o++){const c=au(a,e,t,o);c&&c.distance<s&&(r=c,s=c.distance)}return r}function Jt(a,e,t,n){const i=a.a,s=a.b,r=a.c;let o=e,l=e+1,c=e+2;t&&(o=t.getX(e),l=t.getX(e+1),c=t.getX(e+2)),i.x=n.getX(o),i.y=n.getY(o),i.z=n.getZ(o),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c)}function fc(a,e,t,n,i,s,r){const o=t.index,l=t.attributes.position;for(let c=a,u=e+a;c<u;c++)if(Jt(r,c*3,o,l),r.needsUpdate=!0,n(r,c,i,s))return!0;return!1}class lu{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}function zn(a,e){return e[a+15]===65535}function Bi(a,e){return e[a+6]}function Es(a,e){return e[a+14]}function Cs(a){return a+8}function Ls(a,e){return e[a+6]}function m0(a,e){return e[a+7]}const Ii=new ut,Cr=new L,g0=["x","y","z"];function qo(a,e,t,n,i){let s=a*2,r=$i,o=Bn,l=On;if(zn(s,o)){const u=Bi(a,l),h=Es(s,o);d0(e,t,n,u,h,i)}else{const u=Cs(a);Lr(u,r,n,Cr)&&qo(u,e,t,n,i);const h=Ls(a,l);Lr(h,r,n,Cr)&&qo(h,e,t,n,i)}}function jo(a,e,t,n){let i=a*2,s=$i,r=Bn,o=On;if(zn(i,r)){const c=Bi(a,o),u=Es(i,r);return p0(e,t,n,c,u)}else{const c=m0(a,o),u=g0[c],f=n.direction[u]>=0;let d,g;f?(d=Cs(a),g=Ls(a,o)):(d=Ls(a,o),g=Cs(a));const p=Lr(d,s,n,Cr)?jo(d,e,t,n):null;if(p){const w=p.point[u];if(f?w<=s[g+c]:w>=s[g+c+3])return p}const _=Lr(g,s,n,Cr)?jo(g,e,t,n):null;return p&&_?p.distance<=_.distance?p:_:p||_||null}}const x0=function(){let a,e;const t=[],n=new lu(()=>new ut);return function(...r){a=n.getPrimitive(),e=n.getPrimitive(),t.push(a,e);const o=i(...r);n.releasePrimitive(a),n.releasePrimitive(e),t.pop(),t.pop();const l=t.length;return l>0&&(e=t[l-1],a=t[l-2]),o};function i(s,r,o,l,c=null,u=0,h=0){function f(w){let S=w*2,M=Bn,E=On;for(;!zn(S,M);)w=Cs(w),S=w*2;return Bi(w,E)}function d(w){let S=w*2,M=Bn,E=On;for(;!zn(S,M);)w=Ls(w,E),S=w*2;return Bi(w,E)+Es(S,M)}let g=s*2,m=$i,p=Bn,v=On;if(zn(g,p)){const w=Bi(s,v),S=Es(g,p);return Qt(s,m,a),l(w,S,!1,h,u+s,a)}else{const w=Cs(s),S=Ls(s,v);let M=w,E=S,R,b,P,I;if(c&&(P=a,I=e,Qt(M,m,P),Qt(E,m,I),R=c(P),b=c(I),b<R)){M=S,E=w;const B=R;R=b,b=B,P=I}P||(P=a,Qt(M,m,P));const y=zn(M*2,p),T=o(P,y,R,h+1,u+M);let A;if(T===ic){const B=f(M),Q=d(M)-B;A=l(B,Q,!0,h+1,u+M,P)}else A=T&&i(M,r,o,l,c,u,h+1);if(A)return!0;I=e,Qt(E,m,I);const C=zn(E*2,p),z=o(I,C,b,h+1,u+E);let V;if(z===ic){const B=f(E),Q=d(E)-B;V=l(B,Q,!0,h+1,u+E,I)}else V=z&&i(E,r,o,l,c,u,h+1);return!!V}}}(),v0=function(){const a=new bn,e=new bn,t=new pe,n=new nn,i=new nn;return function s(r,o,l,c,u=null){let h=r*2,f=$i,d=Bn,g=On;if(u===null&&(l.boundingBox||l.computeBoundingBox(),n.set(l.boundingBox.min,l.boundingBox.max,c),u=n),zn(h,d)){const p=o,v=p.index,_=p.attributes.position,w=l.index,S=l.attributes.position,M=Bi(r,g),E=Es(h,d);if(t.copy(c).invert(),l.boundsTree)return Qt(r,f,i),i.matrix.copy(t),i.needsUpdate=!0,l.boundsTree.shapecast({intersectsBounds:b=>i.intersectsBox(b),intersectsTriangle:b=>{b.a.applyMatrix4(c),b.b.applyMatrix4(c),b.c.applyMatrix4(c),b.needsUpdate=!0;for(let P=M*3,I=(E+M)*3;P<I;P+=3)if(Jt(e,P,v,_),e.needsUpdate=!0,b.intersectsTriangle(e))return!0;return!1}});for(let R=M*3,b=E+M*3;R<b;R+=3){Jt(a,R,v,_),a.a.applyMatrix4(t),a.b.applyMatrix4(t),a.c.applyMatrix4(t),a.needsUpdate=!0;for(let P=0,I=w.count;P<I;P+=3)if(Jt(e,P,w,S),e.needsUpdate=!0,a.intersectsTriangle(e))return!0}}else{const p=r+8,v=g[r+6];return Qt(p,f,Ii),!!(u.intersectsBox(Ii)&&s(p,o,l,c,u)||(Qt(v,f,Ii),u.intersectsBox(Ii)&&s(v,o,l,c,u)))}}}();function Lr(a,e,t,n){return Qt(a,e,Ii),t.intersectBox(Ii,n)}const Yo=[];let br,$i,Bn,On;function gs(a){br&&Yo.push(br),br=a,$i=new Float32Array(a),Bn=new Uint16Array(a),On=new Uint32Array(a)}function mr(){br=null,$i=null,Bn=null,On=null,Yo.length&&gs(Yo.pop())}const To=Symbol("skip tree generation"),Ao=new ut,Eo=new ut,Ei=new pe,Kn=new nn,hs=new nn,fs=new L,gr=new L,y0=new L,_0=new L,M0=new L,dc=new ut,Yt=new lu(()=>new bn);class Oi{static serialize(e,t={}){if(t.isBufferGeometry)return console.warn("MeshBVH.serialize: The arguments for the function have changed. See documentation for new signature."),Oi.serialize(arguments[0],{cloneBuffers:arguments[2]===void 0?!0:arguments[2]});t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,s=n.getIndex();let r;return t.cloneBuffers?r={roots:i.map(o=>o.slice()),index:s.array.slice()}:r={roots:i,index:s.array},r}static deserialize(e,t,n={}){if(typeof n=="boolean")return console.warn("MeshBVH.deserialize: The arguments for the function have changed. See documentation for new signature."),Oi.deserialize(arguments[0],arguments[1],{setIndex:arguments[2]===void 0?!0:arguments[2]});n={setIndex:!0,...n};const{index:i,roots:s}=e,r=new Oi(t,{...n,[To]:!0});if(r._roots=s,n.setIndex){const o=t.getIndex();if(o===null){const l=new Je(e.index,1,!1);t.setIndex(l)}else o.array!==i&&(o.array.set(i),o.needsUpdate=!0)}return r}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({strategy:ou,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,[To]:!1},t),t.useSharedArrayBuffer&&typeof SharedArrayBuffer>"u")throw new Error("MeshBVH: SharedArrayBuffer is not available.");this._roots=null,t[To]||(this._roots=a0(e,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ut))),this.geometry=e}refit(e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=this.geometry,n=t.index.array,i=t.attributes.position;let s,r,o,l,c=0;const u=this._roots;for(let f=0,d=u.length;f<d;f++)s=u[f],r=new Uint32Array(s),o=new Uint16Array(s),l=new Float32Array(s),h(0,c),c+=s.byteLength;function h(f,d,g=!1){const m=f*2;if(o[m+15]===Xo){const v=r[f+6],_=o[m+14];let w=1/0,S=1/0,M=1/0,E=-1/0,R=-1/0,b=-1/0;for(let P=3*v,I=3*(v+_);P<I;P++){const y=n[P],T=i.getX(y),A=i.getY(y),C=i.getZ(y);T<w&&(w=T),T>E&&(E=T),A<S&&(S=A),A>R&&(R=A),C<M&&(M=C),C>b&&(b=C)}return l[f+0]!==w||l[f+1]!==S||l[f+2]!==M||l[f+3]!==E||l[f+4]!==R||l[f+5]!==b?(l[f+0]=w,l[f+1]=S,l[f+2]=M,l[f+3]=E,l[f+4]=R,l[f+5]=b,!0):!1}else{const v=f+8,_=r[f+6],w=v+d,S=_+d;let M=g,E=!1,R=!1;e?M||(E=e.has(w),R=e.has(S),M=!E&&!R):(E=!0,R=!0);const b=M||E,P=M||R;let I=!1;b&&(I=h(v,d,M));let y=!1;P&&(y=h(_,d,M));const T=I||y;if(T)for(let A=0;A<3;A++){const C=v+A,z=_+A,V=l[C],B=l[C+3],O=l[z],Q=l[z+3];l[f+A]=V<O?V:O,l[f+A+3]=B>Q?B:Q}return T}}}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),s=new Uint16Array(n);r(0);function r(o,l=0){const c=o*2,u=s[c+15]===Xo;if(u){const h=i[o+6],f=s[c+14];e(l,u,new Float32Array(n,o*4,6),h,f)}else{const h=o+Mr/4,f=i[o+6],d=i[o+7];e(l,u,new Float32Array(n,o*4,6),d)||(r(h,l+1),r(f,l+1))}}}raycast(e,t=Mn){const n=this._roots,i=this.geometry,s=[],r=t.isMaterial,o=Array.isArray(t),l=i.groups,c=r?t.side:t;for(let u=0,h=n.length;u<h;u++){const f=o?t[l[u].materialIndex].side:c,d=s.length;if(gs(n[u]),qo(0,i,f,e,s),mr(),o){const g=l[u].materialIndex;for(let m=d,p=s.length;m<p;m++)s[m].face.materialIndex=g}}return s}raycastFirst(e,t=Mn){const n=this._roots,i=this.geometry,s=t.isMaterial,r=Array.isArray(t);let o=null;const l=i.groups,c=s?t.side:t;for(let u=0,h=n.length;u<h;u++){const f=r?t[l[u].materialIndex].side:c;gs(n[u]);const d=jo(0,i,f,e);mr(),d!=null&&(o==null||d.distance<o.distance)&&(o=d,r&&(d.face.materialIndex=l[u].materialIndex))}return o}intersectsGeometry(e,t){const n=this.geometry;let i=!1;for(const s of this._roots)if(gs(s),i=v0(0,n,e,t),mr(),i)break;return i}shapecast(e,t,n){const i=this.geometry;if(e instanceof Function){if(t){const f=t;t=(d,g,m,p)=>{const v=g*3;return f(d,v,v+1,v+2,m,p)}}e={boundsTraverseOrder:n,intersectsBounds:e,intersectsTriangle:t,intersectsRange:null},console.warn("MeshBVH: Shapecast function signature has changed and now takes an object of callbacks as a second argument. See docs for new signature.")}const s=Yt.getPrimitive();let{boundsTraverseOrder:r,intersectsBounds:o,intersectsRange:l,intersectsTriangle:c}=e;if(l&&c){const f=l;l=(d,g,m,p,v)=>f(d,g,m,p,v)?!0:fc(d,g,i,c,m,p,s)}else l||(c?l=(f,d,g,m)=>fc(f,d,i,c,g,m,s):l=(f,d,g)=>g);let u=!1,h=0;for(const f of this._roots){if(gs(f),u=x0(0,i,o,l,r,h),mr(),u)break;h+=f.byteLength}return Yt.releasePrimitive(s),u}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:s}=n;const r=this.geometry.index,o=this.geometry.attributes.position,l=e.geometry.index,c=e.geometry.attributes.position;Ei.copy(t).invert();const u=Yt.getPrimitive(),h=Yt.getPrimitive();if(s){let g=function(m,p,v,_,w,S,M,E){for(let R=v,b=v+_;R<b;R++){Jt(h,R*3,l,c),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let P=m,I=m+p;P<I;P++)if(Jt(u,P*3,r,o),u.needsUpdate=!0,s(u,h,P,R,w,S,M,E))return!0}return!1};var d=g;if(i){const m=i;i=function(p,v,_,w,S,M,E,R){return m(p,v,_,w,S,M,E,R)?!0:g(p,v,_,w,S,M,E,R)}}else i=g}e.getBoundingBox(Eo),Eo.applyMatrix4(t);const f=this.shapecast({intersectsBounds:g=>Eo.intersectsBox(g),intersectsRange:(g,m,p,v,_,w)=>(Ao.copy(w),Ao.applyMatrix4(Ei),e.shapecast({intersectsBounds:S=>Ao.intersectsBox(S),intersectsRange:(S,M,E,R,b)=>i(g,m,S,M,v,_,R,b)}))});return Yt.releasePrimitive(u),Yt.releasePrimitive(h),f}intersectsBox(e,t){return Kn.set(e.min,e.max,t),Kn.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Kn.intersectsBox(n),intersectsTriangle:n=>Kn.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},s=0,r=1/0){e.boundingBox||e.computeBoundingBox(),Kn.set(e.boundingBox.min,e.boundingBox.max,t),Kn.needsUpdate=!0;const o=this.geometry,l=o.attributes.position,c=o.index,u=e.attributes.position,h=e.index,f=Yt.getPrimitive(),d=Yt.getPrimitive();let g=gr,m=y0,p=null,v=null;i&&(p=_0,v=M0);let _=1/0,w=null,S=null;return Ei.copy(t).invert(),hs.matrix.copy(Ei),this.shapecast({boundsTraverseOrder:M=>Kn.distanceToBox(M),intersectsBounds:(M,E,R)=>R<_&&R<r?(E&&(hs.min.copy(M.min),hs.max.copy(M.max),hs.needsUpdate=!0),!0):!1,intersectsRange:(M,E)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:R=>hs.distanceToBox(R),intersectsBounds:(R,b,P)=>P<_&&P<r,intersectsRange:(R,b)=>{for(let P=R*3,I=(R+b)*3;P<I;P+=3){Jt(d,P,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let y=M*3,T=(M+E)*3;y<T;y+=3){Jt(f,y,c,l),f.needsUpdate=!0;const A=f.distanceToTriangle(d,g,p);if(A<_&&(m.copy(g),v&&v.copy(p),_=A,w=y/3,S=P/3),A<s)return!0}}}});{const R=h?h.count:u.count;for(let b=0,P=R;b<P;b+=3){Jt(d,b,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let I=M*3,y=(M+E)*3;I<y;I+=3){Jt(f,I,c,l),f.needsUpdate=!0;const T=f.distanceToTriangle(d,g,p);if(T<_&&(m.copy(g),v&&v.copy(p),_=T,w=I/3,S=b/3),T<s)return!0}}}}}),Yt.releasePrimitive(f),Yt.releasePrimitive(d),_===1/0?null:(n.point?n.point.copy(m):n.point=m.clone(),n.distance=_,n.faceIndex=w,i&&(i.point?i.point.copy(v):i.point=v.clone(),i.point.applyMatrix4(Ei),m.applyMatrix4(Ei),i.distance=m.sub(i.point).length(),i.faceIndex=S),n)}closestPointToPoint(e,t={},n=0,i=1/0){const s=n*n,r=i*i;let o=1/0,l=null;if(this.shapecast({boundsTraverseOrder:u=>(fs.copy(e).clamp(u.min,u.max),fs.distanceToSquared(e)),intersectsBounds:(u,h,f)=>f<o&&f<r,intersectsTriangle:(u,h)=>{u.closestPointToPoint(e,fs);const f=e.distanceToSquared(fs);return f<o&&(gr.copy(fs),o=f,l=h),f<s}}),o===1/0)return null;const c=Math.sqrt(o);return t.point?t.point.copy(gr):t.point=gr.clone(),t.distance=c,t.faceIndex=l,t}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Qt(0,new Float32Array(n),dc),e.union(dc)}),e}}const _n=11102230246251565e-32,mt=134217729,b0=(3+8*_n)*_n;function Co(a,e,t,n,i){let s,r,o,l,c=e[0],u=n[0],h=0,f=0;u>c==u>-c?(s=c,c=e[++h]):(s=u,u=n[++f]);let d=0;if(h<a&&f<t)for(u>c==u>-c?(r=c+s,o=s-(r-c),c=e[++h]):(r=u+s,o=s-(r-u),u=n[++f]),s=r,o!==0&&(i[d++]=o);h<a&&f<t;)u>c==u>-c?(r=s+c,l=r-s,o=s-(r-l)+(c-l),c=e[++h]):(r=s+u,l=r-s,o=s-(r-l)+(u-l),u=n[++f]),s=r,o!==0&&(i[d++]=o);for(;h<a;)r=s+c,l=r-s,o=s-(r-l)+(c-l),c=e[++h],s=r,o!==0&&(i[d++]=o);for(;f<t;)r=s+u,l=r-s,o=s-(r-l)+(u-l),u=n[++f],s=r,o!==0&&(i[d++]=o);return(s!==0||d===0)&&(i[d++]=s),d}function w0(a,e){let t=e[0];for(let n=1;n<a;n++)t+=e[n];return t}function Is(a){return new Float64Array(a)}const S0=(3+16*_n)*_n,T0=(2+12*_n)*_n,A0=(9+64*_n)*_n*_n,Ci=Is(4),pc=Is(8),mc=Is(12),gc=Is(16),St=Is(4);function E0(a,e,t,n,i,s,r){let o,l,c,u,h,f,d,g,m,p,v,_,w,S,M,E,R,b;const P=a-i,I=t-i,y=e-s,T=n-s;S=P*T,f=mt*P,d=f-(f-P),g=P-d,f=mt*T,m=f-(f-T),p=T-m,M=g*p-(S-d*m-g*m-d*p),E=y*I,f=mt*y,d=f-(f-y),g=y-d,f=mt*I,m=f-(f-I),p=I-m,R=g*p-(E-d*m-g*m-d*p),v=M-R,h=M-v,Ci[0]=M-(v+h)+(h-R),_=S+v,h=_-S,w=S-(_-h)+(v-h),v=w-E,h=w-v,Ci[1]=w-(v+h)+(h-E),b=_+v,h=b-_,Ci[2]=_-(b-h)+(v-h),Ci[3]=b;let A=w0(4,Ci),C=T0*r;if(A>=C||-A>=C||(h=a-P,o=a-(P+h)+(h-i),h=t-I,c=t-(I+h)+(h-i),h=e-y,l=e-(y+h)+(h-s),h=n-T,u=n-(T+h)+(h-s),o===0&&l===0&&c===0&&u===0)||(C=A0*r+b0*Math.abs(A),A+=P*u+T*o-(y*c+I*l),A>=C||-A>=C))return A;S=o*T,f=mt*o,d=f-(f-o),g=o-d,f=mt*T,m=f-(f-T),p=T-m,M=g*p-(S-d*m-g*m-d*p),E=l*I,f=mt*l,d=f-(f-l),g=l-d,f=mt*I,m=f-(f-I),p=I-m,R=g*p-(E-d*m-g*m-d*p),v=M-R,h=M-v,St[0]=M-(v+h)+(h-R),_=S+v,h=_-S,w=S-(_-h)+(v-h),v=w-E,h=w-v,St[1]=w-(v+h)+(h-E),b=_+v,h=b-_,St[2]=_-(b-h)+(v-h),St[3]=b;const z=Co(4,Ci,4,St,pc);S=P*u,f=mt*P,d=f-(f-P),g=P-d,f=mt*u,m=f-(f-u),p=u-m,M=g*p-(S-d*m-g*m-d*p),E=y*c,f=mt*y,d=f-(f-y),g=y-d,f=mt*c,m=f-(f-c),p=c-m,R=g*p-(E-d*m-g*m-d*p),v=M-R,h=M-v,St[0]=M-(v+h)+(h-R),_=S+v,h=_-S,w=S-(_-h)+(v-h),v=w-E,h=w-v,St[1]=w-(v+h)+(h-E),b=_+v,h=b-_,St[2]=_-(b-h)+(v-h),St[3]=b;const V=Co(z,pc,4,St,mc);S=o*u,f=mt*o,d=f-(f-o),g=o-d,f=mt*u,m=f-(f-u),p=u-m,M=g*p-(S-d*m-g*m-d*p),E=l*c,f=mt*l,d=f-(f-l),g=l-d,f=mt*c,m=f-(f-c),p=c-m,R=g*p-(E-d*m-g*m-d*p),v=M-R,h=M-v,St[0]=M-(v+h)+(h-R),_=S+v,h=_-S,w=S-(_-h)+(v-h),v=w-E,h=w-v,St[1]=w-(v+h)+(h-E),b=_+v,h=b-_,St[2]=_-(b-h)+(v-h),St[3]=b;const B=Co(V,mc,4,St,gc);return gc[B-1]}function xr(a,e,t,n,i,s){const r=(e-s)*(t-i),o=(a-i)*(n-s),l=r-o;if(r===0||o===0||r>0!=o>0)return l;const c=Math.abs(r+o);return Math.abs(l)>=S0*c?l:-E0(a,e,t,n,i,s,c)}const xc=Math.pow(2,-52),vr=new Uint32Array(512);class fa{static from(e,t=R0,n=I0){const i=e.length,s=new Float64Array(i*2);for(let r=0;r<i;r++){const o=e[r];s[2*r]=t(o),s[2*r+1]=n(o)}return new fa(s)}constructor(e){const t=e.length>>1;if(t>0&&typeof e[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=e;const n=Math.max(2*t-5,0);this._triangles=new Uint32Array(n*3),this._halfedges=new Int32Array(n*3),this._hashSize=Math.ceil(Math.sqrt(t)),this._hullPrev=new Uint32Array(t),this._hullNext=new Uint32Array(t),this._hullTri=new Uint32Array(t),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(t),this._dists=new Float64Array(t),this.update()}update(){const{coords:e,_hullPrev:t,_hullNext:n,_hullTri:i,_hullHash:s}=this,r=e.length>>1;let o=1/0,l=1/0,c=-1/0,u=-1/0;for(let I=0;I<r;I++){const y=e[2*I],T=e[2*I+1];y<o&&(o=y),T<l&&(l=T),y>c&&(c=y),T>u&&(u=T),this._ids[I]=I}const h=(o+c)/2,f=(l+u)/2;let d=1/0,g,m,p;for(let I=0;I<r;I++){const y=Lo(h,f,e[2*I],e[2*I+1]);y<d&&(g=I,d=y)}const v=e[2*g],_=e[2*g+1];d=1/0;for(let I=0;I<r;I++){if(I===g)continue;const y=Lo(v,_,e[2*I],e[2*I+1]);y<d&&y>0&&(m=I,d=y)}let w=e[2*m],S=e[2*m+1],M=1/0;for(let I=0;I<r;I++){if(I===g||I===m)continue;const y=P0(v,_,w,S,e[2*I],e[2*I+1]);y<M&&(p=I,M=y)}let E=e[2*p],R=e[2*p+1];if(M===1/0){for(let T=0;T<r;T++)this._dists[T]=e[2*T]-e[0]||e[2*T+1]-e[1];Ni(this._ids,this._dists,0,r-1);const I=new Uint32Array(r);let y=0;for(let T=0,A=-1/0;T<r;T++){const C=this._ids[T];this._dists[C]>A&&(I[y++]=C,A=this._dists[C])}this.hull=I.subarray(0,y),this.triangles=new Uint32Array(0),this.halfedges=new Uint32Array(0);return}if(xr(v,_,w,S,E,R)<0){const I=m,y=w,T=S;m=p,w=E,S=R,p=I,E=y,R=T}const b=D0(v,_,w,S,E,R);this._cx=b.x,this._cy=b.y;for(let I=0;I<r;I++)this._dists[I]=Lo(e[2*I],e[2*I+1],b.x,b.y);Ni(this._ids,this._dists,0,r-1),this._hullStart=g;let P=3;n[g]=t[p]=m,n[m]=t[g]=p,n[p]=t[m]=g,i[g]=0,i[m]=1,i[p]=2,s.fill(-1),s[this._hashKey(v,_)]=g,s[this._hashKey(w,S)]=m,s[this._hashKey(E,R)]=p,this.trianglesLen=0,this._addTriangle(g,m,p,-1,-1,-1);for(let I=0,y,T;I<this._ids.length;I++){const A=this._ids[I],C=e[2*A],z=e[2*A+1];if(I>0&&Math.abs(C-y)<=xc&&Math.abs(z-T)<=xc||(y=C,T=z,A===g||A===m||A===p))continue;let V=0;for(let H=0,j=this._hashKey(C,z);H<this._hashSize&&(V=s[(j+H)%this._hashSize],!(V!==-1&&V!==n[V]));H++);V=t[V];let B=V,O;for(;O=n[B],xr(C,z,e[2*B],e[2*B+1],e[2*O],e[2*O+1])>=0;)if(B=O,B===V){B=-1;break}if(B===-1)continue;let Q=this._addTriangle(B,A,n[B],-1,-1,i[B]);i[A]=this._legalize(Q+2),i[B]=Q,P++;let $=n[B];for(;O=n[$],xr(C,z,e[2*$],e[2*$+1],e[2*O],e[2*O+1])<0;)Q=this._addTriangle($,A,O,i[A],-1,i[$]),i[A]=this._legalize(Q+2),n[$]=$,P--,$=O;if(B===V)for(;O=t[B],xr(C,z,e[2*O],e[2*O+1],e[2*B],e[2*B+1])<0;)Q=this._addTriangle(O,A,B,-1,i[B],i[O]),this._legalize(Q+2),i[O]=Q,n[B]=B,P--,B=O;this._hullStart=t[A]=B,n[B]=t[$]=A,n[A]=$,s[this._hashKey(C,z)]=A,s[this._hashKey(e[2*B],e[2*B+1])]=B}this.hull=new Uint32Array(P);for(let I=0,y=this._hullStart;I<P;I++)this.hull[I]=y,y=n[y];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,t){return Math.floor(C0(e-this._cx,t-this._cy)*this._hashSize)%this._hashSize}_legalize(e){const{_triangles:t,_halfedges:n,coords:i}=this;let s=0,r=0;for(;;){const o=n[e],l=e-e%3;if(r=l+(e+2)%3,o===-1){if(s===0)break;e=vr[--s];continue}const c=o-o%3,u=l+(e+1)%3,h=c+(o+2)%3,f=t[r],d=t[e],g=t[u],m=t[h];if(L0(i[2*f],i[2*f+1],i[2*d],i[2*d+1],i[2*g],i[2*g+1],i[2*m],i[2*m+1])){t[e]=m,t[o]=f;const v=n[h];if(v===-1){let w=this._hullStart;do{if(this._hullTri[w]===h){this._hullTri[w]=e;break}w=this._hullPrev[w]}while(w!==this._hullStart)}this._link(e,v),this._link(o,n[r]),this._link(r,h);const _=c+(o+1)%3;s<vr.length&&(vr[s++]=_)}else{if(s===0)break;e=vr[--s]}}return r}_link(e,t){this._halfedges[e]=t,t!==-1&&(this._halfedges[t]=e)}_addTriangle(e,t,n,i,s,r){const o=this.trianglesLen;return this._triangles[o]=e,this._triangles[o+1]=t,this._triangles[o+2]=n,this._link(o,i),this._link(o+1,s),this._link(o+2,r),this.trianglesLen+=3,o}}function C0(a,e){const t=a/(Math.abs(a)+Math.abs(e));return(e>0?3-t:1+t)/4}function Lo(a,e,t,n){const i=a-t,s=e-n;return i*i+s*s}function L0(a,e,t,n,i,s,r,o){const l=a-r,c=e-o,u=t-r,h=n-o,f=i-r,d=s-o,g=l*l+c*c,m=u*u+h*h,p=f*f+d*d;return l*(h*p-m*d)-c*(u*p-m*f)+g*(u*d-h*f)<0}function P0(a,e,t,n,i,s){const r=t-a,o=n-e,l=i-a,c=s-e,u=r*r+o*o,h=l*l+c*c,f=.5/(r*c-o*l),d=(c*u-o*h)*f,g=(r*h-l*u)*f;return d*d+g*g}function D0(a,e,t,n,i,s){const r=t-a,o=n-e,l=i-a,c=s-e,u=r*r+o*o,h=l*l+c*c,f=.5/(r*c-o*l),d=a+(c*u-o*h)*f,g=e+(r*h-l*u)*f;return{x:d,y:g}}function Ni(a,e,t,n){if(n-t<=20)for(let i=t+1;i<=n;i++){const s=a[i],r=e[s];let o=i-1;for(;o>=t&&e[a[o]]>r;)a[o+1]=a[o--];a[o+1]=s}else{const i=t+n>>1;let s=t+1,r=n;ds(a,i,s),e[a[t]]>e[a[n]]&&ds(a,t,n),e[a[s]]>e[a[n]]&&ds(a,s,n),e[a[t]]>e[a[s]]&&ds(a,t,s);const o=a[s],l=e[o];for(;;){do s++;while(e[a[s]]<l);do r--;while(e[a[r]]>l);if(r<s)break;ds(a,s,r)}a[t+1]=a[r],a[r]=o,n-s+1>=r-t?(Ni(a,e,s,n),Ni(a,e,t,r-1)):(Ni(a,e,t,r-1),Ni(a,e,s,n))}}function ds(a,e,t){const n=a[e];a[e]=a[t],a[t]=n}function R0(a){return a[0]}function I0(a){return a[1]}const xn=new L,vc=function(a){return a.getWorldDirection(xn),xn.y=0,xn.normalize(),xn},yc=function(a){return a.getWorldDirection(xn),xn.y=0,xn.normalize(),xn.cross(a.up),xn};class N0{constructor(e,t,n,{controls:i,keys:s}){this.entities=[],this.SIZE=2048,this.resolution=t,this.roomData=new Uint8Array(this.SIZE*this.SIZE),this.metaData=new Uint8Array(this.SIZE*this.SIZE),this.scene=e,this.loader=new Ar,this.player=new Yx({position:new L(0,0,0)}),this.camera=n,this.controls=i,this.keys=s}async initMaterials(){const e=await this.loader.loadAsync("textures/carpet.png");e.wrapS=Ze,e.wrapT=Ze,e.repeat.set(1,1),e.anisotropy=16,e.encoding=Pe;const t=await this.loader.loadAsync("textures/carpetDisplacement.png");t.wrapS=Ze,t.wrapT=Ze,t.repeat.set(1,1),t.anisotropy=16;const n=await this.loader.loadAsync("textures/bluenoise.png");n.wrapS=Ze,n.wrapT=Ze,n.repeat.set(1,1),n.minFilter=Xe,n.magFilter=Xe;const i=await this.loader.loadAsync("textures/whitenoise.png");i.wrapS=Ze,i.wrapT=Ze,i.repeat.set(1,1),i.anisotropy=16,this.floorMaterial=new Nn({side:Le,alphaTest:.5,map:e,envMap:this.scene.background}),this.floorMaterial.onBeforeCompile=u=>{u.uniforms.heightMap={value:t},u.uniforms.bluenoise={value:n},u.uniforms.resolution={value:this.resolution},u.uniforms.noise={value:i},u.vertexShader=u.vertexShader.replace("#ifdef USE_TRANSMISSION","").replace("#ifdef USE_TRANSMISSION",""),u.vertexShader=u.vertexShader.replace("#endif","").replace("#endif",""),u.vertexShader=u.vertexShader.replace("#include <worldpos_vertex>",`
            vec4 worldPosition = vec4( transformed, 1.0 );
            #ifdef USE_INSTANCING
                worldPosition = instanceMatrix * worldPosition;
            #endif
            worldPosition = modelMatrix * worldPosition;    
            `),u.fragmentShader=`varying vec3 vWorldPosition;
uniform sampler2D heightMap;
uniform sampler2D bluenoise;
uniform vec2 resolution;
uniform sampler2D noise;

            float sum( vec3 v ) { return v.x+v.y+v.z; }
            vec4 textureNoTile( sampler2D tex, in vec2 x, in vec2 gradX, in vec2 gradY)
            {
                float k = texture( noise, 0.005*x ).x; // cheap (cache friendly) lookup
                
                vec2 duvdx = dFdx( x );
                vec2 duvdy = dFdy( x );
                
                float l = k*8.0;
                float f = fract(l);
                
            #if 1
                float ia = floor(l); // my method
                float ib = ia + 1.0;
            #else
                float ia = floor(l+0.5); // suslik's method (see comments)
                float ib = floor(l);
                f = min(f, 1.0-f)*2.0;
            #endif    
                
                vec2 offa = sin(vec2(3.0,7.0)*ia); // can replace with any other hash
                vec2 offb = sin(vec2(3.0,7.0)*ib); // can replace with any other hash

                vec3 cola = textureGrad( tex, x + offa, gradX, gradY ).xyz;
                vec3 colb = textureGrad( tex, x + offb, gradX, gradY ).xyz;
                
                return vec4(mix( cola, colb, smoothstep(0.2,0.8,f-0.1*sum(cola-colb)) ), 1.0);
            }
            `+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <map_fragment>",`
            vec4 jitter = texture2D(bluenoise, gl_FragCoord.xy / resolution * (resolution / 1024.0));
            vec3 startPos = vWorldPosition;
            vec3 rd = normalize(vWorldPosition - cameraPosition);
            vec3 endPos = startPos + rd * (-0.025 / rd.y);
            float steps = 14.0 + 4.0 * jitter.x;
            vec2 finalUv;
            float scale = 0.5;
            vec2 gradX = dFdx(vWorldPosition.xz * scale);
            vec2 gradY = dFdy(vWorldPosition.xz * scale);
            float i = 0.0;
            for(i = 0.0; i < 1.0; i += 1.0 / steps) {
                vec3 stepPos = mix(startPos, endPos, i);
                vec2 worldUv = stepPos.xz * scale;
                vec4 heightTexel = textureNoTile( heightMap, worldUv, gradX, gradY);
                finalUv = worldUv;
                if ((1.0 - i) < heightTexel.r) {
                    break;
                }
            }
              /*  float refinementSteps = 8.0;
                float dir = 1.0 / steps;
                for(float j = 0.0; j < refinementSteps; j++) {
                    vec3 stepPos = mix(startPos, endPos, i);
                    vec2 worldUv = stepPos.xz * scale;
                    vec4 heightTexel = textureNoTile( heightMap, worldUv, gradX, gradY);
                    finalUv = worldUv;
                    dir *= 0.5;
                    if ((1.0 - i) < heightTexel.r) {
                        i -= dir;
                    } else {
                        i += dir;
                    }
                }*/
                vec2 texelSize = vec2(1.0 / 450.0);
                vec3 texelNormal = normalize(vec3(
                    textureNoTile(heightMap, finalUv + vec2(texelSize.x, 0.0), gradX, gradY).r - textureNoTile(heightMap, finalUv - vec2(texelSize.x, 0.0), gradX, gradY).r,
                    1.0,
                    textureNoTile(heightMap, finalUv + vec2(0.0, texelSize.y), gradX, gradY).r - textureNoTile(heightMap, finalUv - vec2(0.0, texelSize.y), gradX, gradY).r
                ));
            vec4 mapTexel = textureNoTile( map, finalUv, gradX, gradY);
            float ao = pow(dot(vec3(0.0, 1.0, 0.0), texelNormal), 2.0) * (0.5 + 0.5 * (1.0 - i));
            diffuseColor *= mapTexel;
            diffuseColor.rgb *= ao;
            `).replace("#include <normal_fragment_begin>",`
               vec3 normal = normalize((viewMatrix * vec4(texelNormal, 0.0)).xyz);
               vec3 geometryNormal = normal;
            `)};const s=await this.loader.loadAsync("textures/plaster.jpeg");s.wrapS=Ze,s.wrapT=Ze,s.repeat.set(1,1),s.anisotropy=16,s.encoding=Pe;const r=await this.loader.loadAsync("textures/plasternormal.png");r.wrapS=Ze,r.wrapT=Ze,r.repeat.set(1,1),r.anisotropy=16,this.wallMaterial=new Nn({side:Le,color:new Se(.8,.8,.8),alphaTest:.5,envMap:this.scene.background}),this.wallMaterial.onBeforeCompile=u=>{u.uniforms.plaster={value:s},u.uniforms.plasterNormal={value:r},u.uniforms.noise={value:i},u.vertexShader=u.vertexShader.replace("#ifdef USE_TRANSMISSION","").replace("#ifdef USE_TRANSMISSION",""),u.vertexShader=u.vertexShader.replace("#endif","").replace("#endif",""),u.vertexShader=u.vertexShader.replace("#include <worldpos_vertex>",`
            vec4 worldPosition = vec4( transformed, 1.0 );
            #ifdef USE_INSTANCING
                worldPosition = instanceMatrix * worldPosition;
            #endif
            worldPosition = modelMatrix * worldPosition;    
            `),u.fragmentShader=`varying vec3 vWorldPosition;
uniform sampler2D plaster;
uniform sampler2D noise;
uniform sampler2D plasterNormal;

            float sum( vec3 v ) { return v.x+v.y+v.z; }
            vec3 textureNoTile( sampler2D tex, in vec2 x)
            {
                float k = texture( noise, 0.005*x ).x; // cheap (cache friendly) lookup
                
                vec2 duvdx = dFdx( x );
                vec2 duvdy = dFdy( x );
                
                float l = k*8.0;
                float f = fract(l);
                
            #if 1
                float ia = floor(l); // my method
                float ib = ia + 1.0;
            #else
                float ia = floor(l+0.5); // suslik's method (see comments)
                float ib = floor(l);
                f = min(f, 1.0-f)*2.0;
            #endif    
                
                vec2 offa = sin(vec2(3.0,7.0)*ia); // can replace with any other hash
                vec2 offb = sin(vec2(3.0,7.0)*ib); // can replace with any other hash

                vec3 cola = textureGrad( tex, x + offa, duvdx, duvdy ).xyz;
                vec3 colb = textureGrad( tex, x + offb, duvdx, duvdy ).xyz;
                
                return mix( cola, colb, smoothstep(0.2,0.8,f-0.1*sum(cola-colb)) );
            }
            vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection, vec2 vUv ) {
                vec3 q0 = dFdx( eye_pos.xyz );
                vec3 q1 = dFdy( eye_pos.xyz );
                vec2 st0 = dFdx( vUv.st );
                vec2 st1 = dFdy( vUv.st );
                vec3 N = surf_norm; // normalized
                vec3 q1perp = cross( q1, N );
                vec3 q0perp = cross( N, q0 );
                vec3 T = q1perp * st0.x + q0perp * st1.x;
                vec3 B = q1perp * st0.y + q0perp * st1.y;
                float det = max( dot( T, T ), dot( B, B ) );
                float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
                return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
            }
            `+u.fragmentShader.replace("#include <map_fragment>",`
            mat4 viewMatrixInv = inverse(viewMatrix);
            vec3 norm = (viewMatrixInv * vec4(vNormal, 0.0)).xyz * ( gl_FrontFacing ? 1.0 : - 1.0);
            vec2 worldUv;
            if (abs(norm.y) > 0.9) {
                worldUv = vWorldPosition.xz * 0.5;
            } else if (abs(norm.x) > 0.9) {
                worldUv = vWorldPosition.zy * 0.5;
            } else {
                worldUv = vWorldPosition.xy * 0.5;
            }
            vec4 mapTexel = vec4(textureNoTile(plaster, worldUv), 1.0);
            bool molding = false;
            vec3 rayDir = normalize(vWorldPosition - cameraPosition);
            // Divide raydir by the dot product of it and the camera's world direction
            //rayDir /= dot(rayDir, -viewMatrixInv[2].xyz);
            if (vWorldPosition.y < 0.75) {
                diffuseColor.rgb *= 1.5;
                if (vWorldPosition.y > 0.5 + 0.25 * (1.0 + rayDir.y)) {
                    diffuseColor.rgb *= 1.25;
                    norm = vec3(0.0, 1.0, 0.0);
                }
                molding = true;
            }
            
            if (!molding) {
                diffuseColor *= mapTexel;
            }
            `).replace("#include <normal_fragment_begin>",`
            vec3 normal = normalize((viewMatrix * vec4(norm, 0.0)).xyz);
            vec3 geometryNormal = normal;
         `).replace("#include <normal_fragment_maps>",`
            vec3 mapN = textureNoTile(plasterNormal, worldUv) * 2.0 - 1.0;
	        mapN.xy *= gl_FrontFacing ? 1.0 : - 1.0;
            mapN.xy *= 0.5;
            if (molding) {
                mapN.xy *= 0.0;
            }
            #ifdef USE_TANGENT
            normal = normalize( vTBN * mapN );
            #else
                normal = perturbNormal2Arb( - vViewPosition, normal, mapN, gl_FrontFacing ? 1.0 : - 1.0, worldUv );
            #endif
            `)};const o=await this.loader.loadAsync("textures/tile.png");o.wrapS=Ze,o.wrapT=Ze,o.repeat.set(1,1),o.anisotropy=16,o.encoding=Pe,this.ceilingMaterial=new Nn({side:Le,alphaTest:.5,map:e,envMap:this.scene.background}),this.ceilingShader=null,this.ceilingMaterial.onBeforeCompile=u=>{this.ceilingShader=u,u.uniforms.plaster={value:o},u.uniforms.time={value:performance.now()/1e3},u.vertexShader=u.vertexShader.replace("#ifdef USE_TRANSMISSION","").replace("#ifdef USE_TRANSMISSION",""),u.vertexShader=u.vertexShader.replace("#endif","").replace("#endif",""),u.vertexShader=u.vertexShader.replace("#include <worldpos_vertex>",`
            vec4 worldPosition = vec4( transformed, 1.0 );
            #ifdef USE_INSTANCING
                worldPosition = instanceMatrix * worldPosition;
            #endif
            worldPosition = modelMatrix * worldPosition;    
            `),u.fragmentShader=`varying vec3 vWorldPosition;
uniform sampler2D plaster;
uniform float time;

                vec2 posToUv(vec2 pos) {
                    vec2 size = vec2(${this.SIZE}.0);
                    vec2 uv = pos + size / 2.0;
                    uv /= size;
                    uv.y = 1.0 - uv.y;
                    return uv;
                }
                vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //  x0 = x0 - 0. + 0.0 * C 
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

// Permutations
  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients
// ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0/7.0; // N=7
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}
float lightFunc(float x) {
    if (x > 0.01 || x < -0.01) {
        return 1.0;
    }
    return 0.5 + 0.5 * cos(x * 800.0 * 6.283185307179586);
}
            `+u.fragmentShader.replace("#include <map_fragment>",`
                vec4 mapTexel = vec4(texture2D(plaster, vWorldPosition.xz * 0.5).rgb, 1.0);
                diffuseColor *= mapTexel;
                vec2 nearestCell = floor(vWorldPosition.xz * 0.5);
                if (mod(nearestCell.x, 3.0) == 1.0) {
                    nearestCell.x -= 1.0;
                }
                if (mod(nearestCell.y, 3.0) == 1.0) {
                    nearestCell.y -= 1.0;
                }
                if (mod(nearestCell.x, 3.0) == 2.0) {
                    nearestCell.x += 1.0;
                }
                if (mod(nearestCell.y, 3.0) == 2.0) {
                    nearestCell.y += 1.0;
                }
                float illum = lightFunc(snoise(vec3(nearestCell, time * 0.025)));
               vec2 cell = floor(vWorldPosition.xz * 0.5);
               if (mod(cell.x, 3.0) == 0.0 && mod(cell.y, 3.0) == 0.0) {
                vec2 cellWorld = cell * 2.0;
                vec2 corner1 = posToUv(cellWorld);
                vec2 corner2 = posToUv(cellWorld + vec2(2.01, 2.01));
                vec2 corner3 = posToUv(cellWorld + vec2(2.01, 0.0));
                vec2 corner4 = posToUv(cellWorld + vec2(0.0, 2.01));
                vec2 corner5 = posToUv(cellWorld + vec2(1.01, 1.01));
                if (textureLod(alphaMap, corner1, 0.0).a == 1.0 && textureLod(alphaMap, corner2, 0.0).a == 1.0 && textureLod(alphaMap, corner3, 0.0).a == 1.0 && textureLod(alphaMap, corner4, 0.0).a == 1.0 && textureLod(alphaMap, corner5, 0.0).a == 1.0) {
                    totalEmissiveRadiance += vec3(illum);
                    diffuseColor = vec4(vec3(1.0), 1.0);
                }
            } {
                    vec2 cellWorld = nearestCell * 2.0;
                    vec2 corner1 = posToUv(cellWorld);
                    vec2 corner2 = posToUv(cellWorld + vec2(2.01, 2.01));
                    vec2 corner3 = posToUv(cellWorld + vec2(2.01, 0.0));
                    vec2 corner4 = posToUv(cellWorld + vec2(0.0, 2.01));
                    vec2 corner5 = posToUv(cellWorld + vec2(1.01, 1.01));
                    if (textureLod(alphaMap, corner1, 0.0).a == 1.0 && textureLod(alphaMap, corner2, 0.0).a == 1.0 && textureLod(alphaMap, corner3, 0.0).a == 1.0 && textureLod(alphaMap, corner4, 0.0).a == 1.0 && textureLod(alphaMap, corner5, 0.0).a == 1.0) {
                        totalEmissiveRadiance += 0.1 * illum * sqrt(pow(mod(vWorldPosition.x * 0.5 - 0.5, 3.0) - 1.5, 2.0) * pow(mod(vWorldPosition.z * 0.5 - 0.5, 3.0) - 1.5, 2.0));
                    }
                }            
            `)},this.door=await new Vo().loadAsync("models/door.glb"),this.door.scene.scale.set(.5*(8/9),.5,.5*(8/9)),this.door.scene.traverse(u=>{u.isMesh&&(u.material.envMap=this.scene.background,u.material instanceof Vn&&(u.material.roughness=0,u.material.thickness=.1,u.material.ior=1.5),u.material.map&&(u.material.map.encoding=Pe,u.material.needsUpdate=!0,u.material.map.needsUpdate=!0))}),this.door=this.door.scene,this.frames=(await new Vo().loadAsync("models/frames.glb")).scene,this.frames.traverse(u=>{u.isMesh&&(u.material.envMap=this.scene.background,u.material.map&&(u.material.map.encoding=Pe,u.material.needsUpdate=!0,u.material.map.needsUpdate=!0))}),this.frameMaterial=this.frames.children[0].material,this.paintings=[];let l=[];for(let u=1;u<33;u++){const h=await this.loader.loadAsync("textures/paintings/art"+u+".png");l.push(h)}l.forEach((u,h)=>{u.encoding=Pe,u.needsUpdate=!0,this.paintings.push(u)}),this.paintingsTexture=new Jo(this.texArrToArray(this.paintings,1024,1024,64),1024,1024,64),this.paintingsTexture.encoding=Pe,this.paintingsTexture.needsUpdate=!0,this.paintingsTexture.generateMipmaps=!0,this.paintingsTexture.magFilter=ht,this.paintingsTexture.minFilter=ci,this.paintingsTexture.anisotropy=16,this.paintingMaterial=new Nn({envMap:this.scene.background,side:Le,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,map:new tt,dithering:!0}),this.paintingMaterial.onBeforeCompile=u=>{u.uniforms.paintings={value:this.paintingsTexture},u.vertexShader=`attribute float id;
varying float vId;
`+u.vertexShader.replace("#include <begin_vertex>",`
            #include <begin_vertex>
            vId = id;`),u.fragmentShader=`precision highp sampler2DArray;
uniform sampler2DArray paintings;
varying float vId;
`+u.fragmentShader.replace("#include <map_fragment>",`
            vec4 mapTexel = vec4(0.0);
            float bias = -0.5;
            vec2 dx = dFdx(vUv) * 0.25;
            vec2 dy = dFdy(vUv) * 0.25;
            mapTexel += textureLod(paintings, vec3(vUv + dx + dy, vId), -0.5);
            mapTexel += textureLod(paintings, vec3(vUv - dx + dy, vId), -0.5);
            mapTexel += textureLod(paintings, vec3(vUv + dx - dy, vId), -0.5);
            mapTexel += textureLod(paintings, vec3(vUv - dx - dy, vId), -0.5);
            mapTexel *= 0.25;
              // mapTexel = vec4(textureLod(paintings, vec3(vUv, vId), -0.5).rgb, 1.0);
            diffuseColor *= mapTexel;`)}}texArrToArray(e,t,n,i){const s=t*n*4,r=new Uint8Array(s*i),o=document.createElement("canvas"),l=o.getContext("2d");return o.width=t,o.height=n,l.translate(t/2,n/2),l.scale(1,-1),e.forEach((c,u)=>{l.drawImage(c.image,-t/2,-n/2,t,n),r.set(l.getImageData(0,0,t,n).data,s*u)}),r}async generateWorld(){await this.initMaterials();const e=500;let t=this.makeRoomList(e);const n=this.findEdges(t,e),i=this.makeLineBoxes(n,t);t=t.filter(M=>M.main||M.side),this.addBoxesAsEntities(t,qx),this.addBoxesAsEntities(i,Xx);let s=this.calcSegments(i,t);const r=this.SIZE;this.splatRooms(t),this.splatHalls(i);let o=new Et;const l=this.calcVerts();o.setAttribute("position",new Lt(l,3));const c=o.clone(),{doors:u,holes:h}=this.computeDoorsAndHoles(c,s),f=u.map(M=>new ut().setFromObject(M,!0));u.forEach((M,E)=>{for(let P=E+1;P<u.length;P++)if(f[E].intersectsBox(f[P]))return;this.scene.add(M);const R=new ut().setFromObject(M,!0),b=new bo({position:R.getCenter(new L),bounds:R,model:M});this.add(b)}),o=this.finalizeGeometry(o,h);const d=this.wallMaterial,g=new Ke(o,d);this.scene.add(g);const m=this.makeRoomAlphaMap();this.floorMaterial.alphaMap=m,this.ceilingMaterial.alphaMap=m;const p=new Ke(new gn(r,r).rotateX(-Math.PI/2),this.floorMaterial);p.position.set(-.5,0,-.5);const v=new Ke(new gn(r,r).rotateX(-Math.PI/2),this.ceilingMaterial);v.position.set(-.5,12,-.5),this.scene.add(p),this.scene.add(v),p.updateMatrix(),v.updateMatrix(),p.updateMatrixWorld(),v.updateMatrixWorld();const _=lr([g.geometry.clone().applyMatrix4(g.matrixWorld),p.geometry.toNonIndexed().applyMatrix4(p.matrixWorld),v.geometry.toNonIndexed().applyMatrix4(v.matrixWorld)].map(M=>{for(const E of Object.keys(M.attributes))E!=="position"&&E!=="normal"&&delete M.attributes[E];return M}),!0);this.mergedGeo=_;const w=new Oi(_,{lazyGeneration:!1,strategy:Wo});this.bvh=w,this.generatePaintings(t);const S=t[0].getCenter(new J);this.player.position.set(S.x,6,S.y)}add(e){e.world=this,this.entities.push(e)}update(e){for(const s of this.entities)s.update(e);this.ceilingShader.uniforms.time.value=performance.now()/1e3;for(let s=0;s<5;s++){this.player.update(e/5,this.bvh);for(const r of this.entities)if(r instanceof bo&&!r.open&&r.bounds.containsPoint(this.player.position)){const o=r.bounds.getCenter(new L),l=this.player.position;l.y=6,o.y=6;const c=o.clone().sub(l).normalize(),u=r.bounds.getSize(new L),h=new J(Math.abs(l.x-o.x),Math.abs(l.z-o.z)).sub(new J(u.x/2,u.z/2));u.x>u.z?c.x=0:c.z=0;const f=Math.min(Math.max(h.x,h.y),0)+new J(Math.max(h.x,0),Math.max(h.y,0)).length();this.player.position.add(c.multiplyScalar(f))}}this.camera.position.copy(this.player.position);const t=.25;this.controls.isLocked&&(this.keys.w&&this.player.horizontalVelocity.add(vc(this.camera).multiplyScalar(t*e)),this.keys.s&&this.player.horizontalVelocity.add(vc(this.camera).multiplyScalar(-t*e)),this.keys.a&&this.player.horizontalVelocity.add(yc(this.camera).multiplyScalar(-t*e)),this.keys.d&&this.player.horizontalVelocity.add(yc(this.camera).multiplyScalar(t*e)));const n=.25*Math.sin(performance.now()/1e3),i=.25*Math.sin(performance.now()/75);this.camera.position.y+=n+(i-n)*Math.min(10*this.player.horizontalVelocity.length(),1)}registerClick(){const e=new lx;e.setFromCamera(new J(0,0),this.camera);const t=this.entities.filter(r=>r instanceof bo),n=e.ray,i=t.filter(r=>n.intersectsBox(r.bounds)&&!r.open).map(r=>[r,n.intersectBox(r.bounds,new L)]),s=this.bvh.raycastFirst(n,Le);if(i.sort((r,o)=>r[1].distanceTo(n.origin)-o[1].distanceTo(n.origin)),i.length>0){const r=i[0][1].distanceTo(n.origin);r<s.distance&&r<7.5&&i[0][0].openUp(n.origin)}}generatePaintings(e){const t=[];e.forEach(o=>{for(let l=0;l<1+Math.floor(Math.random()*Math.random()*3);l++){const c=o.getCenter(new J),u=o.getSize(new J),h=Math.floor(Math.random()*4);let f,d,g=Math.random(),m=Math.floor(g*64);g<.25?(f=5,d=5):g<.5?(f=5,d=7.5):(f=7.5,d=5);let p;if(h===0){c.z+=(Math.random()-.5)*u.z*.5;const v=new We(new L(c.x,6-f/2,c.y-d/2),new L(1,0,0)),_=new We(new L(c.x,6-f/2,c.y+d/2),new L(1,0,0)),w=new We(new L(c.x,6+f/2,c.y-d/2),new L(1,0,0)),S=new We(new L(c.x,6+f/2,c.y+d/2),new L(1,0,0)),M=new We(new L(c.x,6,c.y),new L(1,0,0)),E=[],R=this.bvh.raycastFirst(v,Le),b=this.bvh.raycastFirst(_,Le),P=this.bvh.raycastFirst(w,Le),I=this.bvh.raycastFirst(S,Le),y=this.bvh.raycastFirst(M,Le);if(R&&b&&P&&I&&y&&(E.push(R,b,P,I,y),E.every(T=>T.distance===E[0].distance))){p=new Ke(new gn(f,d),this.paintingMaterial),p.rotateY(Math.PI/2);let T=E[0].point,A=E[1].point,C=E[2].point,z=E[3].point;p.position.set((T.x+A.x+C.x+z.x)/4,(T.y+A.y+C.y+z.y)/4,(T.z+A.z+C.z+z.z)/4)}}else if(h===1){c.z+=(Math.random()-.5)*u.z*.5;const v=new We(new L(c.x,6-f/2,c.y-d/2),new L(-1,0,0)),_=new We(new L(c.x,6-f/2,c.y+d/2),new L(-1,0,0)),w=new We(new L(c.x,6+f/2,c.y-d/2),new L(-1,0,0)),S=new We(new L(c.x,6+f/2,c.y+d/2),new L(-1,0,0)),M=new We(new L(c.x,6,c.y),new L(-1,0,0)),E=[],R=this.bvh.raycastFirst(v,Le),b=this.bvh.raycastFirst(_,Le),P=this.bvh.raycastFirst(w,Le),I=this.bvh.raycastFirst(S,Le),y=this.bvh.raycastFirst(M,Le);if(R&&b&&P&&I&&y&&(E.push(R,b,P,I,y),E.every(T=>T.distance===E[0].distance))){p=new Ke(new gn(f,d),this.paintingMaterial),p.rotateY(-Math.PI/2);let T=R.point,A=b.point,C=P.point,z=I.point;p.position.set((T.x+A.x+C.x+z.x)/4,(T.y+A.y+C.y+z.y)/4,(T.z+A.z+C.z+z.z)/4)}}else if(h===2){c.x+=(Math.random()-.5)*u.x*.5;const v=new We(new L(c.x-f/2,6-d/2,c.y),new L(0,0,1)),_=new We(new L(c.x+f/2,6-d/2,c.y),new L(0,0,1)),w=new We(new L(c.x-f/2,6+d/2,c.y),new L(0,0,1)),S=new We(new L(c.x+f/2,6+d/2,c.y),new L(0,0,1)),M=new We(new L(c.x,6,c.y),new L(0,0,1)),E=[],R=this.bvh.raycastFirst(v,Le),b=this.bvh.raycastFirst(_,Le),P=this.bvh.raycastFirst(w,Le),I=this.bvh.raycastFirst(S,Le),y=this.bvh.raycastFirst(M,Le);if(R&&b&&P&&I&&y&&(E.push(R,b,P,I,y),E.every(T=>T.distance===E[0].distance))){p=new Ke(new gn(f,d),this.paintingMaterial);let T=R.point,A=b.point,C=P.point,z=I.point;p.position.set((T.x+A.x+C.x+z.x)/4,(T.y+A.y+C.y+z.y)/4,(T.z+A.z+C.z+z.z)/4)}}else if(h===3){c.x+=(Math.random()-.5)*u.x*.5;const v=new We(new L(c.x-f/2,6-d/2,c.y),new L(0,0,-1)),_=new We(new L(c.x+f/2,6-d/2,c.y),new L(0,0,-1)),w=new We(new L(c.x-f/2,6+d/2,c.y),new L(0,0,-1)),S=new We(new L(c.x+f/2,6+d/2,c.y),new L(0,0,-1)),M=new We(new L(c.x,6,c.y),new L(0,0,-1)),E=[],R=this.bvh.raycastFirst(v,Le),b=this.bvh.raycastFirst(_,Le),P=this.bvh.raycastFirst(w,Le),I=this.bvh.raycastFirst(S,Le),y=this.bvh.raycastFirst(M,Le);if(R&&b&&P&&I&&y&&(E.push(R,b,P,I,y),E.every(T=>T.distance===E[0].distance))){p=new Ke(new gn(f,d),this.paintingMaterial),p.rotateY(Math.PI);let T=R.point,A=b.point,C=P.point,z=I.point;p.position.set((T.x+A.x+C.x+z.x)/4,(T.y+A.y+C.y+z.y)/4,(T.z+A.z+C.z+z.z)/4)}}if(p){const v=new ut().setFromObject(p,!0).expandByScalar(.25);if(t.some(w=>w.box.intersectsBox(v))){p.geometry.dispose();return}p.geometry.setAttribute("id",new Je(new Float32Array(p.geometry.attributes.position.count).fill(m),1)),t.push(p);const _=this.frames.children[m<16?0:m<32?2:1].clone();_.position.set(p.position.x,p.position.y,p.position.z),_.rotation.y=p.rotation.y+Math.PI/2,p.frame=_,p.box=v}}}),t.forEach(o=>{o.rotation.y+=Math.PI,o.updateMatrix(),o.updateMatrixWorld(),o.frame.updateMatrix(),o.frame.updateMatrixWorld()});const n=lr(t.map(o=>o.geometry.clone().applyMatrix4(o.matrixWorld)),!0),i=lr(t.map(o=>o.frame.geometry.clone().applyMatrix4(o.frame.matrixWorld)),!0),s=new Ke(n,this.paintingMaterial),r=new Ke(i,this.frameMaterial);this.scene.add(s),this.scene.add(r)}makeRoomList(e){let t=[];for(let r=0;r<e;r++){const o=new jl;o.setFromCenterAndSize(new J(Math.random()*100-50,Math.random()*100-50),new J(15+25*Math.random()**2,15+25*Math.random()**2)),t.push(o)}const n=new J,i=new J,s=new J;for(;;){let r=0;if(t.forEach(o=>{const l=new J;let c=0;t.forEach(h=>{if(o.intersectsBox(h)){const f=o.getCenter(n),d=h.getCenter(i);l.add(d.sub(f)),c+=1}}),r+=c,l.multiplyScalar(1/c),l.multiplyScalar(-1);const u=o.getCenter(s);u.add(l),o.setFromCenterAndSize(u,o.max.sub(o.min))}),r===t.length)break}t.sort((r,o)=>o.getSize(new J).length()-r.getSize(new J).length()),t.map(r=>{r.min.x=Math.floor(r.min.x),r.min.y=Math.floor(r.min.y),r.max.x=Math.ceil(r.max.x),r.max.y=Math.ceil(r.max.y)});for(let r=0;r<Math.floor(e/3);r++)t[r].main=!0;return t}calcSegments(e,t){let n=[];return e.forEach(i=>{t.forEach(s=>{if(s.intersectsBox(i)){const r=i.clone().intersect(s),o=[new J(r.min.x,r.min.y),new J(r.max.x,r.min.y)],l=[new J(r.max.x,r.min.y),new J(r.max.x,r.max.y)],c=[new J(r.max.x,r.max.y),new J(r.min.x,r.max.y)],u=[new J(r.min.x,r.max.y),new J(r.min.x,r.min.y)];o.normal=o[0].clone().add(o[1]).multiplyScalar(.5).sub(s.getCenter(new L)).normalize(),l.normal=l[0].clone().add(l[1]).multiplyScalar(.5).sub(s.getCenter(new L)).normalize(),c.normal=c[0].clone().add(c[1]).multiplyScalar(.5).sub(s.getCenter(new L)).normalize(),u.normal=u[0].clone().add(u[1]).multiplyScalar(.5).sub(s.getCenter(new L)).normalize();const h=s.clone().expandByScalar(-.1),f=s.clone(),d=s.getSize(new J);s.max.x-s.min.x>s.max.y-s.min.y?(f.min.x+=d.x/8,f.max.x-=d.x/8):(f.min.y+=d.y/8,f.max.y-=d.y/8),Math.abs(r.max.x-r.min.x)>Math.abs(r.max.y-r.min.y)?s.main&&(!h.containsPoint(l[0])&&!h.containsPoint(l[1])&&n.push(l),!h.containsPoint(u[0])&&!h.containsPoint(u[1])&&n.push(u)):s.main&&(!h.containsPoint(o[0])&&!h.containsPoint(o[1])&&n.push(o),!h.containsPoint(c[0])&&!h.containsPoint(c[1])&&n.push(c))}})}),n=n.filter(i=>i[0].distanceTo(i[1])===4),n}calcVerts(){const e=this.SIZE,t=[],n=-e/2,i=-e/2;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const o=s+r*e;this.roomData[o]===0&&(this.roomData[o-1]>0&&(t.push(s+n-.5,0,r+i-.5),t.push(s+n-.5,0,r+i+.5),t.push(s+n-.5,8,r+i+.5),t.push(s+n-.5,8,r+i-.5),t.push(s+n-.5,8,r+i+.5),t.push(s+n-.5,0,r+i-.5)),this.roomData[o+1]>0&&(t.push(s+n+.5,0,r+i-.5),t.push(s+n+.5,0,r+i+.5),t.push(s+n+.5,8,r+i+.5),t.push(s+n+.5,8,r+i-.5),t.push(s+n+.5,8,r+i+.5),t.push(s+n+.5,0,r+i-.5)),this.roomData[o-e]>0&&(t.push(s+n-.5,0,r+i-.5),t.push(s+n+.5,0,r+i-.5),t.push(s+n+.5,8,r+i-.5),t.push(s+n-.5,8,r+i-.5),t.push(s+n+.5,8,r+i-.5),t.push(s+n-.5,0,r+i-.5)),this.roomData[o+e]>0&&(t.push(s+n-.5,0,r+i+.5),t.push(s+n+.5,0,r+i+.5),t.push(s+n+.5,8,r+i+.5),t.push(s+n-.5,8,r+i+.5),t.push(s+n+.5,8,r+i+.5),t.push(s+n-.5,0,r+i+.5)))}return t}splatRooms(e){const t=this.SIZE;e.forEach(n=>{const i=n;for(let s=i.min.x+t/2;s<i.max.x+t/2;s++)for(let r=i.min.y+t/2;r<i.max.y+t/2;r++){const o=s+r*t;this.roomData[o]=1,this.metaData[o]=n.main?2:1}})}splatHalls(e){const t=this.SIZE;e.forEach(n=>{const i=n;for(let s=i.min.x+t/2;s<i.max.x+t/2;s++)for(let r=i.min.y+t/2;r<i.max.y+t/2;r++){const o=s+r*t;this.roomData[o]=1,this.metaData[o]=3}})}findEdges(e,t){const n=e.filter(_=>_.main).map(_=>[_.getCenter(new J).x,_.getCenter(new J).y]).flat(),i=e.filter(_=>_.main).map(_=>_.getCenter(new J)),s=new fa(n),r=new $n.WeightedGraph(Math.floor(t/3));for(let _=0;_<Math.floor(s.triangles.length/3);_++)r.addEdge(new $n.Edge(s.triangles[_*3],s.triangles[_*3+1],0)),r.addEdge(new $n.Edge(s.triangles[_*3+1],s.triangles[_*3+2],0)),r.addEdge(new $n.Edge(s.triangles[_*3+2],s.triangles[_*3],0));const o=Array.from(s.triangles).map(_=>i[_]),l=[];for(let _=0;_<o.length;_++)l[Math.floor(_/3)]===void 0&&(l[Math.floor(_/3)]=[]),l[Math.floor(_/3)].push(o[_]);var u=new $n.KruskalMST(r).mst;let h=[];const f=[];for(var d=0;d<u.length;++d){var g=u[d],m=g.either(),p=g.other(m);h.push([i[m],i[p]]),f.push([m,p])}const v=[];for(let _=0;_<Math.floor(s.triangles.length/3);_++)v.push([s.triangles[_*3],s.triangles[_*3+1]]),v.push([s.triangles[_*3+1],s.triangles[_*3+2]]),v.push([s.triangles[_*3+2],s.triangles[_*3]]);return v.forEach(_=>{Math.random()<.15&&(f.some(([w,S])=>w===_[0]&&S===_[1]||w===_[1]&&S===_[0])||h.push([i[_[0]],i[_[1]]]))}),h=h.map(_=>[[new J(_[0].x,_[0].y),new J(_[1].x,_[0].y)],[new J(_[1].x,_[0].y),new J(_[1].x,_[1].y)]]).flat(),h}makeRoomAlphaMap(){const e=this.roomData,t=this.SIZE,n=new Uint8Array(t*t*4);for(let s=0;s<t;s++)for(let r=0;r<t;r++){const o=s+r*t,l=s+(t-1-r)*t;n[o*4]=e[l]>0?255:0,n[o*4+1]=e[l]>0?255:0,n[o*4+2]=e[l]>0?255:0,n[o*4+3]=e[l]>0?255:0}const i=new Kc(n,t,t);return i.generateMipmaps=!0,i.magFilter=Xe,i.minFilter=Gu,i.anisotropy=16,i.needsUpdate=!0,i}computeDoorsAndHoles(e,t){function n(o){return Math.abs(o.x)>Math.abs(o.y)?Math.sign(o.x):Math.sign(o.y)}const i=[],s=[],r=new Oi(e,{lazyGeneration:!1,strategy:Wo});return t.forEach(o=>{const l=new Yi(4,8,.25);l.translate(0,0,.125*n(o.normal));const c=new L((o[0].x+o[1].x)/2,4,(o[0].y+o[1].y)/2),u=new Ke(l,new Nn({color:new Se(.5,.5,0)}));u.position.copy(c),u.position.x-=.5,u.position.z-=.5,Math.abs(o[0].x-o[1].x)<Math.abs(o[0].y-o[1].y)&&(u.rotation.y=Math.PI/2);let h=u.clone();h.updateMatrix(),h.updateMatrixWorld(),h.geometry.deleteAttribute("uv");const f=this.door.clone();f.position.copy(u.position),f.position.y-=4.01,f.rotation.y=u.rotation.y,u.rotation.y===0?f.position.z+=.125*n(o.normal):u.rotation.y===Math.PI/2&&(f.position.x+=.125*n(o.normal));const d=new ut().setFromObject(u,!0).getCenter(new L),g=new We(d.clone(),Math.abs(o[0].x-o[1].x)>Math.abs(o[0].y-o[1].y)?new L(1,0,0):new L(0,0,1)),m=new We(d.clone(),Math.abs(o[0].x-o[1].x)>Math.abs(o[0].y-o[1].y)?new L(-1,0,0):new L(0,0,-1)),p=r.raycastFirst(g,Le),v=r.raycastFirst(m,Le);p&&v&&p.point.distanceTo(v.point)<=4&&(i.push(f),s.push(h))}),{doors:i,holes:s}}addBoxesAsEntities(e,t){e.forEach(n=>{const i=new t({position:n.getCenter(new L),bounds:n});i.position.z=6,this.add(i)})}makeLineBoxes(e,t){const n=[];return e.forEach(i=>{const s=new jl;s.setFromPoints([new J(i[0].x,i[0].y),new J(i[1].x,i[1].y)]),s.min.x-=2,s.min.y-=2,s.max.x+=2,s.max.y+=2,s.rooms=[],t.forEach(r=>{r.intersectsBox(s)&&!r.main&&(r.side=!0)}),n.push(s)}),n.map(i=>{i.min.x=Math.floor(i.min.x),i.min.y=Math.floor(i.min.y),i.max.x=Math.ceil(i.max.x),i.max.y=Math.ceil(i.max.y)}),n}finalizeGeometry(e,t){e.setAttribute("normal",new Je(new Float32Array(e.attributes.position.count*3),3));const n=[],i=[],s=e.attributes.position;for(let h=0;h<s.count;h+=3){const f=new ft(new L(s.getX(h),s.getY(h),s.getZ(h)),new L(s.getX(h+1),s.getY(h+1),s.getZ(h+1)),new L(s.getX(h+2),s.getY(h+2),s.getZ(h+2))),d=f.getNormal(new L);Math.abs(d.z)>Math.abs(d.x)?i.push(f):n.push(f)}const r=new Uint8Array(this.SIZE*this.SIZE),o=new Uint8Array(this.SIZE*this.SIZE);n.forEach(h=>{const f=this.SIZE/2+Math.floor(h.a.x),d=this.SIZE/2+Math.floor((Math.min(h.a.z,h.b.z,h.c.z)+Math.max(h.a.z,h.b.z,h.c.z))/2);r[f+d*this.SIZE]=1}),i.forEach(h=>{const f=this.SIZE/2+Math.floor((Math.min(h.a.x,h.b.x,h.c.x)+Math.max(h.a.x,h.b.x,h.c.x))/2),d=this.SIZE/2+Math.floor(h.a.z);o[f+d*this.SIZE]=1});const l=[];for(let h=0;h<this.SIZE;h++){let f=!1,d=new J,g=new J;for(let m=0;m<this.SIZE;m++)o[m+h*this.SIZE]?f||(f=!0,d=new J(m-.5,h+.5)):f&&(f=!1,g=new J(m-.5,h+.5),l.push(new ft(new L(d.x-this.SIZE/2,0,d.y-this.SIZE/2),new L(g.x-this.SIZE/2,0,g.y-this.SIZE/2),new L(d.x-this.SIZE/2,8,g.y-this.SIZE/2))),l.push(new ft(new L(g.x-this.SIZE/2,0,g.y-this.SIZE/2),new L(g.x-this.SIZE/2,8,d.y-this.SIZE/2),new L(d.x-this.SIZE/2,8,d.y-this.SIZE/2))))}for(let h=0;h<this.SIZE;h++){let f=!1,d=new J,g=new J;for(let m=0;m<this.SIZE;m++)r[h+m*this.SIZE]?f||(f=!0,d=new J(h+.5,m-.5)):f&&(f=!1,g=new J(h+.5,m-.5),l.push(new ft(new L(d.x-this.SIZE/2,0,d.y-this.SIZE/2),new L(g.x-this.SIZE/2,0,g.y-this.SIZE/2),new L(d.x-this.SIZE/2,8,g.y-this.SIZE/2))),l.push(new ft(new L(d.x-this.SIZE/2,8,g.y-this.SIZE/2),new L(g.x-this.SIZE/2,8,d.y-this.SIZE/2),new L(d.x-this.SIZE/2,0,d.y-this.SIZE/2))))}const c=new Et;c.setAttribute("position",new Je(new Float32Array(l.length*3*3),3));const u=c.attributes.position;for(let h=0;h<l.length;h++){const f=l[h];u.setXYZ(h*3,f.a.x,f.a.y,f.a.z),u.setXYZ(h*3+1,f.b.x,f.b.y,f.b.z),u.setXYZ(h*3+2,f.c.x,f.c.y,f.c.z)}return c.computeVertexNormals(),e=c,e.scale(1,1.5,1),e=lr([e,...t.map(h=>h.geometry.clone().applyMatrix4(h.matrixWorld).scale(1,.5,1).translate(0,8,0).toNonIndexed())],!0),e.computeVertexNormals(),e}}const z0={uniforms:{tDiffuse:{value:null},sceneDepth:{value:null},blurSharp:{value:0},depthBias:{value:3},near:{value:0},far:{value:0},h:{value:1/512},resolution:{value:new J},blurThreshold:{value:1}},vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform sampler2D sceneDepth;
		uniform float blurSharp;
		uniform float h;
		uniform float near;
		uniform float far;
		uniform vec2 resolution;
		uniform float blurThreshold;
		uniform float depthBias;
		varying vec2 vUv;
		float linearize_depth(float d,float zNear,float zFar)
        {
            return zNear * zFar / (zFar + d * (zNear - zFar));
        }
		float depthFalloff(vec2 uv, float d) {
			float uvDepth = linearize_depth(texture2D(sceneDepth, uv).x, 0.1, 1000.0);
			return exp(-1.0 * depthBias * abs(uvDepth - d));
		}
		void main() {
			vec4 sum = vec4( 0.0 );
			float[9] weights =  float[9](0.051, 0.0918, 0.12245, 0.1531, 0.1633, 0.1531, 0.12245, 0.0918, 0.051);
			float weightSum = 0.0;
			float d = texture2D(sceneDepth, vUv).x;
			float b = texture2D(tDiffuse, vUv).x;
			float uvDepth = linearize_depth(d, 0.1, 1000.0);
			float radius = max((h / resolution.x) * (1.0 - d) * (-blurSharp * pow(b - 0.5, 2.0) + 1.0), blurThreshold / resolution.x);
			for(float i = -4.0; i <= 4.0; i++) {
				vec2 sampleUv = vec2( vUv.x + i * radius, vUv.y );
				float w = weights[int(i + 4.0)] * depthFalloff(sampleUv, uvDepth);
				sum += texture2D( tDiffuse, sampleUv) * w;
				weightSum += w;
			}
			sum /= weightSum;
		/*	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * radius, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * radius, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * radius, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * radius, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * radius, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * radius, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * radius, vUv.y ) ) * 0.051;*/
			gl_FragColor = sum;
		}`},U0={uniforms:{tDiffuse:{value:null},sceneDepth:{value:null},blurSharp:{value:0},depthBias:{value:3},near:{value:0},far:{value:0},v:{value:1/512},resolution:{value:new J},blurThreshold:{value:1}},vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform sampler2D sceneDepth;
		uniform vec2 resolution;
		uniform float v;
		uniform float near;
		uniform float blurSharp;
		uniform float blurThreshold;
		uniform float depthBias;
		uniform float far;
		varying vec2 vUv;
		float linearize_depth(float d,float zNear,float zFar)
        {
            return zNear * zFar / (zFar + d * (zNear - zFar));
        }
		float depthFalloff(vec2 uv, float d) {
			float uvDepth = linearize_depth(texture2D(sceneDepth, uv).x, 0.1, 1000.0);
			return exp(-1.0 * depthBias * abs(uvDepth - d));
		}
		void main() {
			vec4 sum = vec4( 0.0 );
			float[9] weights =  float[9](0.051, 0.0918, 0.12245, 0.1531, 0.1633, 0.1531, 0.12245, 0.0918, 0.051);
			float weightSum = 0.0;
			float d = texture2D(sceneDepth, vUv).x;
			float b = texture2D(tDiffuse, vUv).x;
			float uvDepth = linearize_depth(d, 0.1, 1000.0);
			float radius = max((v / resolution.y) * (1.0 - d) * (-blurSharp * pow(b - 0.5, 2.0) + 1.0), blurThreshold / resolution.y);
			for(float i = -4.0; i <= 4.0; i++) {
				vec2 sampleUv = vec2( vUv.x, vUv.y + i * radius );
				float w = weights[int(i + 4.0)] * depthFalloff(sampleUv, uvDepth);
				sum += texture2D( tDiffuse, sampleUv) * w;
				weightSum += w;
			}
			sum /= weightSum;
		/*	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * radius, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * radius, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * radius, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * radius, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * radius, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * radius, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * radius, vUv.y ) ) * 0.051;*/
			gl_FragColor = sum;
		}`},_c={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class qi extends Rs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new J(e.x,e.y):new J(256,256),this.clearColor=new Se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ct(s,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Ct(s,r);f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Ct(s,r);d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}_c===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const o=_c;this.highPassUniforms=si.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new J(s,r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Er===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=Er;this.copyUniforms=si.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new xt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Po,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Se,this.oldClearAlpha=1,this.basic=new Un,this.fsQuad=new ua(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new J(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=qi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=qi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){return new xt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}qi.BlurDirectionX=new J(1,0);qi.BlurDirectionY=new J(0,1);const Li=new ji(0,0,0,"YXZ"),Pi=new L,F0={type:"change"},B0={type:"lock"},O0={type:"unlock"},Mc=Math.PI/2;class k0 extends ui{constructor(e,t){super(),this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1;const n=this;function i(o){if(n.isLocked===!1)return;const l=o.movementX||o.mozMovementX||o.webkitMovementX||0,c=o.movementY||o.mozMovementY||o.webkitMovementY||0;Li.setFromQuaternion(e.quaternion),Li.y-=l*.002*n.pointerSpeed,Li.x-=c*.002*n.pointerSpeed,Li.x=Math.max(Mc-n.maxPolarAngle,Math.min(Mc-n.minPolarAngle,Li.x)),e.quaternion.setFromEuler(Li),n.dispatchEvent(F0)}function s(){n.domElement.ownerDocument.pointerLockElement===n.domElement?(n.dispatchEvent(B0),n.isLocked=!0):(n.dispatchEvent(O0),n.isLocked=!1)}function r(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}this.connect=function(){n.domElement.ownerDocument.addEventListener("mousemove",i),n.domElement.ownerDocument.addEventListener("pointerlockchange",s),n.domElement.ownerDocument.addEventListener("pointerlockerror",r)},this.disconnect=function(){n.domElement.ownerDocument.removeEventListener("mousemove",i),n.domElement.ownerDocument.removeEventListener("pointerlockchange",s),n.domElement.ownerDocument.removeEventListener("pointerlockerror",r)},this.dispose=function(){this.disconnect()},this.getObject=function(){return e},this.getDirection=function(){const o=new L(0,0,-1);return function(l){return l.copy(o).applyQuaternion(e.quaternion)}}(),this.moveForward=function(o){Pi.setFromMatrixColumn(e.matrix,0),Pi.crossVectors(e.up,Pi),e.position.addScaledVector(Pi,o)},this.moveRight=function(o){Pi.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Pi,o)},this.lock=function(){this.domElement.requestPointerLock()},this.unlock=function(){n.domElement.ownerDocument.exitPointerLock()},this.connect()}}async function V0(){const a=window.innerWidth,e=window.innerHeight,t=new bg,n=new At(75,a/e,.1,1e3),i=new jc;i.setSize(a,e),document.body.appendChild(i.domElement);const s=new k0(n,document.body);t.add(s.getObject());const r=new ys;r.showPanel(0),document.body.appendChild(r.dom);const o=await new Ar().loadAsync("textures/office.png");o.encoding=Pe,o.mapping=wr,t.background=o;const l={};document.addEventListener("keydown",S=>{l[S.key]=!0}),document.addEventListener("keyup",S=>{l[S.key]=!1});const c=new N0(t,new J(a,e),n,{controls:s,keys:l});await c.generateWorld();const u={radius:15},h=new Ct(a,e,{minFilter:ht,magFilter:Xe,type:$t});h.depthTexture=new qc(a,e,$t);const f=new hx(i),d=new fx(a,e),g=new Qn(px),m=[];for(let S=0;S<4;S++){const M=new Qn(z0),E=new Qn(U0),R=1;M.uniforms.h.value=R,E.uniforms.v.value=R,m.push([M,E])}const p=new Qn(mx);f.addPass(g);for(const[S,M]of m)f.addPass(S),f.addPass(M);f.addPass(p),f.addPass(new Qn(dx)),f.addPass(new qi(new J(a,e),.5,.4,.9)),f.addPass(d);const v=await new Ar().loadAsync("textures/bluenoise.png");v.wrapS=Ze,v.wrapT=Ze,v.repeat.set(1,1),v.minFilter=Xe,v.magFilter=Xe;const _=new tu;document.addEventListener("click",()=>{s.lock(),s.isLocked&&c.registerClick()});function w(){const S=Math.min(_.getDelta(),.03333333333333333);try{c.update(S)}catch{}i.setRenderTarget(h),i.clear(),i.render(t,n),g.uniforms.sceneDiffuse.value=h.texture,g.uniforms.sceneDepth.value=h.depthTexture,g.uniforms.projMat.value=n.projectionMatrix,g.uniforms.viewMat.value=n.matrixWorldInverse,g.uniforms.projViewMat.value=n.projectionMatrix.clone().multiply(n.matrixWorldInverse.clone()),g.uniforms.projectionMatrixInv.value=n.projectionMatrixInverse,g.uniforms.viewMatrixInv.value=n.matrixWorld,g.uniforms.cameraPos.value=n.position,g.uniforms.resolution.value=new J(a,e),g.uniforms.time.value=performance.now()/1e3,g.uniforms.r.value=u.radius,m.forEach(([M,E],R)=>{const b=2**R;M.uniforms.sceneDepth.value=h.depthTexture,M.uniforms.resolution.value=new J(a,e),E.uniforms.sceneDepth.value=h.depthTexture,E.uniforms.resolution.value=new J(a,e),M.uniforms.h.value=b,E.uniforms.v.value=b}),p.uniforms.sceneDiffuse.value=h.texture,p.uniforms.sceneDepth.value=h.depthTexture,p.uniforms.projMat.value=n.projectionMatrix,p.uniforms.viewMat.value=n.matrixWorldInverse,p.uniforms.projectionMatrixInv.value=n.projectionMatrixInverse,p.uniforms.viewMatrixInv.value=n.matrixWorld,p.uniforms.cameraPos.value=n.position,p.uniforms.resolution.value=new J(a,e),p.uniforms.time.value=performance.now()/1e3,p.uniforms.r.value=u.radius,f.render(),r.update(),requestAnimationFrame(w)}requestAnimationFrame(w)}V0();
