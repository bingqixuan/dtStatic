import{aJ as L,cC as m,ca as F,ao as n,cM as R,cN as D,K as M,b8 as _,a2 as q,cO as z,c9 as B,cP as C,a0 as $}from"./vendor.d5f590a2.js";import{i as w}from"./originUtils.68552ec1.js";import{fetchFeatureService as U}from"./arcgisLayers.a6b9ab84.js";import{o as v}from"./jsonContext.07f408b1.js";import{i as f,a as Y,c as g,f as c}from"./portalItemUtils.7f1d927b.js";import"./multiOriginJSONSupportUtils.8128aa52.js";import"./lazyLayerLoader.cc0bd079.js";const j=L.getLogger("esri.layers.FeatureLayer"),y="Feature Service";function d(a,e){return`Layer (title: ${a.title}, id: ${a.id}) of type '${a.declaredClass}' ${e}`}function O(a,e){if(e.type!==y)throw new n("feature-layer:portal-item-wrong-type",d(a,`should have portal item of type "${y}"`))}async function A(a){if(await a.load(),R(a))throw new n("feature-layer:save",d(a,"using an in-memory source cannot be saved to a portal item"))}function G(a,e){let t=a.messages.filter(({type:r})=>r==="error").map(({name:r,message:s,details:o})=>new n(r,s,o));if(e!=null&&e.ignoreUnsupported&&(t=t.filter(({name:r})=>r!=="layer:unsupported"&&r!=="symbol:unsupported"&&r!=="symbol-layer:unsupported"&&r!=="property:unsupported"&&r!=="url:unsupported")),t.length>0)throw new n("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:t})}async function h(a,e,t){"beforeSave"in a&&typeof a.beforeSave=="function"&&await a.beforeSave();const r=a.write({},e);return G(e,t),r}function P(a){const{layer:e,layerJSON:t}=a;return e.isTable?{layers:[],tables:[t]}:{layers:[t],tables:[]}}function b(a){f(a,c.JSAPI),a.typeKeywords&&(a.typeKeywords=a.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t))}function k(a){const e=a.portalItem;if(!e)throw j.error("save: requires the portalItem property to be set"),new n("feature-layer:portal-item-not-set",d(a,"requires the portalItem property to be set"));if(!e.loaded)throw new n("feature-layer:portal-item-not-loaded",d(a,"cannot be saved to a portal item that does not exist or is inaccessible"));O(a,e)}async function E(a,e){return/\/\d+\/?$/.test(a.url)?P(e[0]):H(a,e)}async function H(a,e){const{layer:{url:t,customParameters:r,apiKey:s}}=e[0];let o=await a.fetchData("json");o&&o.layers!=null&&o.tables!=null||(o=await Q(o,{url:t,customParameters:r,apiKey:s},e.map(l=>l.layer.layerId)));for(const l of e)K(l.layer,l.layerJSON,o);return o}async function Q(a,e,t){var r,s;a||(a={}),(r=a).layers||(r.layers=[]),(s=a).tables||(s.tables=[]);const{url:o,customParameters:l,apiKey:i}=e,{serviceJSON:u,layersJSON:p}=await U(o,{customParameters:l,apiKey:i}),S=J(a.layers,u.layers,t),I=J(a.tables,u.tables,t);a.layers=S.itemResources,a.tables=I.itemResources;const T=[...S.added,...I.added],x=p?[...p.layers,...p.tables]:[];return await V(a,T,o,x),a}function J(a,e,t){const r=D(a,e,(o,l)=>o.id===l.id);a=a.filter(o=>!r.removed.some(l=>l.id===o.id));const s=r.added.map(({id:o})=>({id:o}));return s.forEach(({id:o})=>{a.push({id:o})}),{itemResources:a,added:s.filter(({id:o})=>!t.includes(o))}}async function V(a,e,t,r){const s=e.map(({id:o})=>new M({url:t,layerId:o,sourceJSON:r.find(({id:l})=>l===o)}));await _(s.map(o=>o.load())),s.forEach(o=>{const{layerId:l,loaded:i,defaultPopupTemplate:u}=o;!i||q(u)||K(o,{id:l,popupInfo:u.toJSON()},a)})}function K(a,e,t){a.isTable?N(t.tables,e):N(t.layers,e)}function N(a,e){const t=a.findIndex(({id:r})=>r===e.id);t===-1?a.push(e):a[t]=e}function W(a){const{portalItem:e}=a;return z(a)&&!a.dynamicDataSource&&!!(e!=null&&e.loaded)&&e.type===y}async function X(a){if(!(a!=null&&a.length))throw new n("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(a.map(r=>r.load()));for(const r of a)if(!W(r))throw new n("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${d(r,"does not conform")}`,{layer:r});const e=a.map(r=>r.portalItem.id);if(new Set(e).size>1)throw new n("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const t=a.map(r=>r.layerId);if(new Set(t).size!==t.length)throw new n("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function Z(a,e){var o,l;var t,r;let s=B.from(e);return s.id&&(s=s.clone(),s.id=null),(o=(t=s).type)!=null||(t.type=y),(l=(r=s).portal)!=null||(r.portal=F.getDefault()),O(a,s),s}async function aa(a,e){const{url:t,layerId:r,title:s,fullExtent:o,isTable:l}=a,i=C(t),u=$(i)&&i.serverType==="FeatureServer";e.url=u?t:`${t}/${r}`,e.title||(e.title=s),e.extent=null,!l&&$(o)&&(e.extent=await Y(o)),g(e,c.METADATA),g(e,c.MULTI_LAYER),f(e,c.SINGLE_LAYER),l&&f(e,c.TABLE),b(e)}async function ea(a,e,t){const r=a.portal;await r._signIn(),await r.user.addItem({item:a,data:e,folder:t==null?void 0:t.folder})}const da=m(ta);async function ta(a,e){await A(a),k(a);const t=a.portalItem,r=v(t),s=await h(a,r,e),o=await E(t,[{layer:a,layerJSON:s}]);return b(t),await t.update({data:o}),w(r),t}const ya=m(async(a,e)=>{await X(a);const t=a[0].portalItem,r=v(t),s=await Promise.all(a.map(l=>h(l,r,e))),o=await E(t,a.map((l,i)=>({layer:l,layerJSON:s[i]})));return b(t),await t.update({data:o}),await Promise.all(a.slice(1).map(l=>l.portalItem.reload())),w(r),t.clone()}),pa=m(ra);async function ra(a,e,t){await A(a);const r=Z(a,e),s=v(r),o=P({layer:a,layerJSON:await h(a,s,t)});return await aa(a,r),await ea(r,o,t),a.portalItem=r,w(s),r}export{da as save,ya as saveAll,pa as saveAs};