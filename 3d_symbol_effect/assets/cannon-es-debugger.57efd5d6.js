import{V as g,Q as X,b as y}from"./cannon-es.2062a824.js";import{M as Y,S as M,B as k,P as G,a as m,b as z,c as w,F as E}from"./index.0eaaf2ec.js";function W(d,O,b){let{color:I=65280,scale:u=1,onInit:x,onUpdate:N}=b===void 0?{}:b;const p=[],f=new Y({color:I!=null?I:65280,wireframe:!0}),H=new g,P=new g,h=new g,v=new X,B=new M(1),L=new k(1,1,1),S=new G(10,10,10,10);S.translate(0,0,1e-4);function R(t){const e=new w,s=[];for(let n=0;n<t.vertices.length;n++){const o=t.vertices[n];s.push(o.x,o.y,o.z)}e.setAttribute("position",new E(s,3));const r=[];for(let n=0;n<t.faces.length;n++){const o=t.faces[n],i=o[0];for(let a=1;a<o.length-1;a++){const c=o[a],l=o[a+1];r.push(i,c,l)}}return e.setIndex(r),e.computeBoundingSphere(),e.computeVertexNormals(),e}function V(t){const e=new w,s=[],r=H,n=P,o=h;for(let i=0;i<t.indices.length/3;i++)t.getTriangleVertices(i,r,n,o),s.push(r.x,r.y,r.z),s.push(n.x,n.y,n.z),s.push(o.x,o.y,o.z);return e.setAttribute("position",new E(s,3)),e.computeBoundingSphere(),e.computeVertexNormals(),e}function C(t){const e=new w,s=t.elementSize||1,r=t.data.flatMap((o,i)=>o.flatMap((a,c)=>[i*s,c*s,a])),n=[];for(let o=0;o<t.data.length-1;o++)for(let i=0;i<t.data[o].length-1;i++){const a=t.data[o].length,c=o*a+i;n.push(c+1,c+a,c+a+1),n.push(c+a,c+1,c)}return e.setIndex(n),e.setAttribute("position",new E(r,3)),e.computeBoundingSphere(),e.computeVertexNormals(),e}function D(t){let e=new m;const{SPHERE:s,BOX:r,PLANE:n,CYLINDER:o,CONVEXPOLYHEDRON:i,TRIMESH:a,HEIGHTFIELD:c}=y.types;switch(t.type){case s:{e=new m(B,f);break}case r:{e=new m(L,f);break}case n:{e=new m(S,f);break}case o:{const l=new z(t.radiusTop,t.radiusBottom,t.height,t.numSegments);e=new m(l,f),t.geometryId=l.id;break}case i:{const l=R(t);e=new m(l,f),t.geometryId=l.id;break}case a:{const l=V(t);e=new m(l,f),t.geometryId=l.id;break}case c:{const l=C(t);e=new m(l,f),t.geometryId=l.id;break}}return d.add(e),e}function T(t,e){const{SPHERE:s,BOX:r,PLANE:n,CYLINDER:o,CONVEXPOLYHEDRON:i,TRIMESH:a,HEIGHTFIELD:c}=y.types;switch(e.type){case s:{const{radius:l}=e;t.scale.set(l*u,l*u,l*u);break}case r:{t.scale.copy(e.halfExtents),t.scale.multiplyScalar(2*u);break}case n:break;case o:{t.scale.set(1*u,1*u,1*u);break}case i:{t.scale.set(1*u,1*u,1*u);break}case a:{t.scale.copy(e.scale).multiplyScalar(u);break}case c:{t.scale.set(1*u,1*u,1*u);break}}}function _(t,e){if(!t)return!1;const{geometry:s}=t;return s instanceof M&&e.type===y.types.SPHERE||s instanceof k&&e.type===y.types.BOX||s instanceof G&&e.type===y.types.PLANE||s.id===e.geometryId&&e.type===y.types.CYLINDER||s.id===e.geometryId&&e.type===y.types.CONVEXPOLYHEDRON||s.id===e.geometryId&&e.type===y.types.TRIMESH||s.id===e.geometryId&&e.type===y.types.HEIGHTFIELD}function A(t,e){let s=p[t],r=!1;return _(s,e)||(s&&d.remove(s),p[t]=s=D(e),r=!0),T(s,e),r}function F(){const t=p,e=H,s=v;let r=0;for(const n of O.bodies)for(let o=0;o!==n.shapes.length;o++){const i=n.shapes[o],a=A(r,i),c=t[r];c&&(n.quaternion.vmult(n.shapeOffsets[o],e),n.position.vadd(e,e),n.quaternion.mult(n.shapeOrientations[o],s),c.position.copy(e),c.quaternion.copy(s),a&&x instanceof Function&&x(n,c,i),!a&&N instanceof Function&&N(n,c,i)),r++}for(let n=r;n<t.length;n++){const o=t[n];o&&d.remove(o)}t.length=r}return{update:F}}export{W as default};