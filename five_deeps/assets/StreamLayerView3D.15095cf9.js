import{Z as r,d as o,n as l,cX as x,cY as E,y as R,id as G,l as m,a0 as d,g as M,e6 as T,a9 as U,ao as V,ai as j}from"./vendor.d5f590a2.js";import{t as L,h as k}from"./createConnection.6f8d8bc3.js";import{r as F}from"./EventedSet.f1673157.js";import{E as N}from"./FeatureLikeLayerView3D.75bc9518.js";import{n as z}from"./LayerView3D.62b80713.js";import{u as C}from"./LayerView.1c740ad8.js";import"./Graphics3DFeatureProcessor.868e6e8c.js";import"./Graphics3DScaleVisibility.63b5c5e0.js";import"./optimizedFeatureQueryEngineAdapter.25ca2118.js";import"./centroid.154267fd.js";import"./Graphics3DObjectStates.a099b37f.js";import"./floorFilterUtils.69500d62.js";import"./QueryEngine.8e63f643.js";import"./QueryEngineResult.f4c92a8d.js";import"./WhereClause.b4219540.js";import"./utils.636e4519.js";import"./ClassBreaksDefinition.662b56be.js";import"./json.d1a0fa35.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./attributeUtils.99d8ee08.js";import"./FeatureStore.b5dc4fa6.js";import"./projectExtentUtils.d863d691.js";const J=2500;let c=class extends M{getObjectId(){return this.objectId}};r([o({type:Number,json:{read:!0}})],c.prototype,"objectId",void 0),c=r([l("esri.layers.graphics.controllers.StreamGraphic")],c);class P{constructor(t){this.onUpdate=t,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(t){this._idToGraphic.set(t.objectId,t)}get(t){return this._idToGraphic.get(t)}forEach(t){this._idToGraphic.forEach(t)}removeById(t){const i=this._idToGraphic.get(t);return i?(i.sourceLayer=i.layer=null,this._idToGraphic.delete(t),i):null}update(t,i){this.onUpdate(t,i)}get size(){return this._idToGraphic.size}}let n=class extends x(E(R)){constructor(){super(...arguments),this._updateInfo={websocket:0,client:0},this.graphics=new F}initialize(){this.addResolvingPromise(this.layer.when(()=>this._startup()))}destroy(){this.clear()}_clearInterval(){this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=0)}clear(){this._clearInterval(),this.connection&&(this.connection.destroy(),this.connection=null),this.store&&(this.store.destroy(),this.store=null),this.graphics.clear(),this.handles.removeAll()}get updating(){return!this.connection||this.connection.connectionStatus==="connected"}_startup(){const{layer:e,layerView:t}=this,{parsedUrl:i,spatialReference:a,definitionExpression:p,geometryDefinition:h,objectIdField:f,timeInfo:v,purgeOptions:g,maxReconnectionAttempts:_,maxReconnectionInterval:I,customParameters:w}=e,S=G.toJSON(e.geometryType),b=a,u=t.view.spatialReference,O={geometry:h,where:p};this.clear(),this._set("connection",L(i,b,u,S,O,_,I,w)),this._outSpatialReference=u.toJSON(),this.store=new P(this._onUpdate.bind(this)),this.featuresManager=new k(this.store,f,v.toJSON(),g);const y="startup-watches";this.handles.remove(y),this.handles.add([this.connection.on("feature",$=>this._onFeature($)),m(()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions],()=>this._startup())],y),this._initUpdateInterval()}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{d(e.geometry)&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._outSpatialReference);const t=c.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch{}}_onUpdate(e,t){d(t)&&this.graphics.removeMany(t),d(e)&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval(()=>{const i=performance.now(),a=i-t;if(a>J){t=i;const p=Math.round(this._updateInfo.client/(a/1e3)),h=Math.round(this._updateInfo.websocket/(a/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:p,websocket:h})}this.featuresManager.checkForUpdates()},e)}pauseStream(){this._clearInterval()}resumeStream(){this._initUpdateInterval()}};r([o()],n.prototype,"connection",void 0),r([o()],n.prototype,"layer",void 0),r([o()],n.prototype,"layerView",void 0),r([o({readOnly:!0})],n.prototype,"updating",null),n=r([l("esri.layers.graphics.controllers.StreamController")],n);const A=e=>{let t=class extends e{constructor(...i){super(...i),this.connectionError=null,this.connectionStatus="disconnected",this.filter=null}};return r([o({readOnly:!0})],t.prototype,"connectionError",void 0),r([o({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],t.prototype,"connectionStatus",void 0),r([o({type:T})],t.prototype,"filter",void 0),t=r([l("esri.layers.mixins.StreamLayerView")],t),t};let s=class extends A(N(z(C))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=U.ASYNC,this.hasZ=!0,this.hasM=!1}initialize(){this.handles.add(m(()=>this.suspended,e=>{this.controller&&(e?this.controller.pauseStream():this.controller.resumeStream())}))}get connectionError(){const e=this.get("controller.connection.errorString");if(e)return new V("stream-controller",e)}createQuery(){return new j({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),t==null?void 0:t.signal)}createController(){return new n({layer:this.layer,layerView:this})}beforeSetController(){}};r([o({readOnly:!0})],s.prototype,"updatePolicy",void 0),r([o({readOnly:!0})],s.prototype,"connectionError",null),r([o()],s.prototype,"controller",void 0),r([o({readOnly:!0})],s.prototype,"hasZ",void 0),r([o({readOnly:!0})],s.prototype,"hasM",void 0),s=r([l("esri.views.3d.layers.StreamLayerView3D")],s);const dt=s;export{dt as default};