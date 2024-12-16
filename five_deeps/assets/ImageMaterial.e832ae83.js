var O=Object.defineProperty;var T=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var f=(a,e,t)=>e in a?O(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,g=(a,e)=>{for(var t in e||(e={}))S.call(e,t)&&f(a,t,e[t]);if(T)for(var t of T(e))x.call(e,t)&&f(a,t,e[t]);return a};import{di as A,dj as w,dk as E,d2 as m,dl as F,a0 as C,dm as b,dn as d,dp as N,dq as D,dr as M,ds as q,dt as o,du as _,dv as R,dw as c,dx as I,dy as P,Z as n,dz as l,dA as v,dB as L,dC as U,dD as W,dE as B,dF as G,dG as z,dH as H,dI as j,dJ as Q,dK as V,dL as k,dM as J,dN as K,dO as X,dP as Y,dQ as Z,dR as ee,dS as te,dT as ae,bP as u,dU as se,dV as re,dW as ie,dX as oe,dY as ne}from"./vendor.d5f590a2.js";function le(a){const e=new A;w(e,a),e.include(E),e.attributes.add(m.POSITION,"vec3"),e.attributes.add(m.UV0,"vec2"),e.varyings.add("vpos","vec3"),a.hasMultipassTerrain&&e.varyings.add("depth","float");const{vertex:t,fragment:s}=e;return t.uniforms.add(new F("textureCoordinateScaleFactor",r=>C(r.texture)&&C(r.texture.descriptor.textureCoordinateScaleFactor)?r.texture.descriptor.textureCoordinateScaleFactor:b)),t.code.add(d`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(N,a),e.include(D,a),s.uniforms.add([new M("tex",r=>r.texture),new q("opacity",r=>r.opacity)]),e.varyings.add("vTexCoord","vec2"),a.output===o.Alpha?s.code.add(d`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${d.float(_)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(s.include(R),s.code.add(d`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${d.float(_)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${a.transparencyPassType===c.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),e}const de=Object.freeze(Object.defineProperty({__proto__:null,build:le},Symbol.toStringTag,{value:"Module"}));class p extends W{initializeProgram(e){const t=p.shader.get().build(this.configuration);return new B(e.rctx,t,G)}_setPipelineState(e,t){const s=this.configuration,r=e===c.NONE,h=e===c.FrontFace;return z({blending:s.output!==o.Color&&s.output!==o.Alpha||!s.transparent?null:r?ue:H(e),culling:j(s.cullFace),depthTest:{func:Q(e)},depthWrite:r?s.writeDepth&&V:k(e),colorWrite:J,stencilWrite:s.hasOccludees?K:null,stencilTest:s.hasOccludees?t?X:Y:null,polygonOffset:r||h?null:Z(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}p.shader=new L(de,()=>import("./ImageMaterial.glsl.e855d289.js"));const ue=I(P.ONE,P.ONE_MINUS_SRC_ALPHA);class i extends U{constructor(){super(...arguments),this.output=o.Color,this.cullFace=v.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=c.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}n([l({count:o.COUNT})],i.prototype,"output",void 0),n([l({count:v.COUNT})],i.prototype,"cullFace",void 0),n([l()],i.prototype,"hasSlicePlane",void 0),n([l()],i.prototype,"transparent",void 0),n([l()],i.prototype,"enableOffset",void 0),n([l()],i.prototype,"writeDepth",void 0),n([l()],i.prototype,"hasOccludees",void 0),n([l({count:c.COUNT})],i.prototype,"transparencyPassType",void 0),n([l()],i.prototype,"hasMultipassTerrain",void 0),n([l()],i.prototype,"cullAboveGround",void 0);class ve extends ee{constructor(e){super(e,new pe),this.supportsEdges=!0,this.techniqueConfig=new i}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<te,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig}intersect(e,t,s,r,h,y,$){ae(e,t,r,h,y,void 0,$)}requiresSlot(e,t){return e===u.DRAPED_MATERIAL?!0:se(t)===o.Highlight?e===u.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?u.TRANSPARENT_MATERIAL:u.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:u.OPAQUE_MATERIAL)}createGLMaterial(e){return e.output===o.Color||e.output===o.Alpha||e.output===o.Highlight?new ce(e):void 0}createBufferWriter(){return new re(ie)}}class ce extends oe{constructor(e){super(g(g({},e),e.material.parameters))}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(p,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==o.Color&&this._output!==o.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class pe extends ne{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=v.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{le as f,ve as m};
