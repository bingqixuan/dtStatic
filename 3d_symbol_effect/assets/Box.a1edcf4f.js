var p=(o,s,t)=>{if(!s.has(o))throw TypeError("Cannot "+t)};var a=(o,s,t)=>{if(s.has(o))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(o):s.set(o,t)};var i=(o,s,t)=>(p(o,s,"access private method"),t);import{V as y,B,a as x}from"./cannon-es.2062a824.js";import{P as w}from"./Body.39ca5822.js";var e,n;class g extends w{constructor(t,h){super(t,h);a(this,e);i(this,e,n).call(this)}}e=new WeakSet,n=function(){const{position:t,quaternion:h}=this.mesh,{width:r,height:c,depth:d}=this.mesh.geometry.parameters,m=new y(r/2,c/2,d/2);this.body=new B({mass:1,position:t,quaternion:h,shape:new x(m)})};export{g as PhysicsBox};