import{kG as V,gU as X,kH as Y,kI as Z,ao as S,kA as tt,kJ as g,k as et,bh as nt,bj as at,bk as st,kK as it,kL as rt,kM as G,c3 as x,kN as ot,kO as ct,kP as ut,kQ as ht,kR as lt}from"./vendor.d5f590a2.js";import{b as ft}from"./Segment.0dc98287.js";const Rt={readOnly:!0,get(){return V(this.view)}};var F;(function(t){t[t.Auto=0]="Auto",t[t.Euclidean=1]="Euclidean",t[t.Geodesic=2]="Geodesic"})(F||(F={}));function O(t){if(!t)return null;if(X(t)&&t.wkid){const e=Y[t.wkid];if(e)return e}if(t.wkt){const e=Mt(t.wkt);if(e)return e}return null}function Mt(t){const e=Z.exec(t);if(!e||e.length!==2)return null;const n=e[1].split(",");if(!n||n.length<3)return null;const a=parseFloat(n[1]),s=parseFloat(n[2]);return isNaN(a)||isNaN(s)?null:{a,f:s===0?0:1/s}}function pt(t){const e=O(t||et.WGS84);if(dt(e))return e;const n=e.a*(1-e.f);return Object.assign(e,{b:n,eSq:1-(n/e.a)**2,radius:(2*e.a+n)/3,densificationRatio:1e4/((2*e.a+n)/3)})}function dt(t){return"b"in t&&"eSq"in t&&"radius"in t}function mt(t){return O(t)!==null}function _t(t,e="meters"){if(!t)throw new S("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some(a=>!mt(a.spatialReference)))throw new S("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const n=[];for(let a=0;a<t.length;a++){const s=t[a],{spatialReference:m}=s,b=s.type==="polyline"?s.paths:s.rings;let r=0;for(let v=0;v<b.length;v++){const o=b[v];let f=0;for(let M=1;M<o.length;M++){const $=o[M-1][0],R=o[M][0],_=o[M-1][1],u=o[M][1];if(_!==u||$!==R){const c={distance:null};gt(c,[$,_],[R,u],m),f+=c.distance}}r+=f}r=tt(r,"meters",e),n.push(r)}return n}function gt(t,e,n,a){const s=e[0]*g,m=e[1]*g,b=n[0]*g,r=n[1]*g,{a:v,b:o,f,radius:M}=pt(a),$=b-s,R=Math.atan((1-f)*Math.tan(m)),_=Math.atan((1-f)*Math.tan(r)),u=Math.sin(R),c=Math.cos(R),k=Math.sin(_),h=Math.cos(_);let q,z,p,i,w,y,N,A,P,U,D=1e3,l=$;do{if(N=Math.sin(l),A=Math.cos(l),p=Math.sqrt(h*N*(h*N)+(c*k-u*h*A)*(c*k-u*h*A)),p===0)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;w=u*k+c*h*A,y=Math.atan2(p,w),P=c*h*N/p,z=1-P*P,i=w-2*u*k/z,isNaN(i)&&(i=0),U=f/16*z*(4+f*(4-3*z)),q=l,l=$+(1-U)*f*P*(y+U*p*(i+U*w*(2*i*i-1)))}while(Math.abs(l-q)>1e-12&&--D>0);if(D===0){const K=M,L=Math.acos(Math.sin(m)*Math.sin(r)+Math.cos(m)*Math.cos(r)*Math.cos(b-s))*K,E=b-s,Q=Math.sin(E)*Math.cos(r),W=Math.cos(m)*Math.sin(r)-Math.sin(m)*Math.cos(r)*Math.cos(E),B=Math.atan2(Q,W);return t.azimuth=B/g,t.distance=L,t.reverseAzimuth=void 0,t}const d=z*(v*v-o*o)/(o*o),j=d/1024*(256+d*(d*(74-47*d)-128)),C=o*(1+d/16384*(4096+d*(d*(320-175*d)-768)))*(y-j*p*(i+j/4*(w*(2*i*i-1)-j/6*i*(4*p*p-3)*(4*i*i-3)))),H=Math.atan2(h*Math.sin(l),c*k-u*h*Math.cos(l)),J=Math.atan2(c*Math.sin(l),c*k*Math.cos(l)-u*h);return t.azimuth=H/g,t.distance=C,t.reverseAzimuth=J/g,t}function zt(t,e){if(nt(e,0,0,0),t.length>0){for(let n=0;n<t.length;++n)at(e,e,t[n]);st(e,e,1/t.length)}}function wt(t,e,n,a){a.projectToRenderScreen(t,I),a.projectToRenderScreen(e,T),it(n,vt,bt),rt(n,n)}const I=G(),bt=I,T=G(),vt=T;class Nt{constructor(e=null){this.spatialReference=e}get spatialReference(){return this._spatialReference}set spatialReference(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors())}normalizeDistance(e){return e*this._metersPerDistanceUnit}normalizeElevation(e){return e*this._metersPerElevationUnit}normalizeArea(e){return e*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=x(this._spatialReference,1),this._metersPerElevationUnit=x(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}function At(t,e,n,a=2,s="abbr"){return ot(t,ft(e,n).value,n,a,s)}function Pt(t,e,n=2,a="abbr"){return ht(t,e.value,e.unit,n,a)}function Ut(t,e,n=2,a="abbr"){return lt(t,e.value,e.unit,n,a)}function yt(t,e,n=2,a="abbr"){return ct(t,e.value,e.unit,n,a)}function jt(t,e,n=2,a="abbr"){return ut(t,e.value,e.unit,n,a)}export{mt as M,yt as a,Pt as b,zt as c,F as e,At as g,wt as i,jt as j,Rt as r,Nt as t,Ut as w,_t as y,gt as z};