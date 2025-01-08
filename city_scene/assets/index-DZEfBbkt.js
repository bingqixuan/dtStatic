(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const _=function(){this._listeners=[],this._lookUp={}};_.prototype={bind:function(e,t){this._lookUp[e]=this._listeners.length;var n=t?e.bind(t):e;this._listeners.push(n)},unbind:function(e){var t=this._lookUp[e];this._listeners.splice(t,1),delete this._lookUp[e]},dispatch:function(e){for(var t=this._listeners.length,n=0;n<t;++n)this._listeners[n](e)},get hasListeners(){return this._listeners.length>0}};const c=function(e){this._numLoaded=0,this._queue=[],this._assets={},e&&e.charAt(e.length-1)!="/"&&(e=e+"/"),this._basePath=e||"",this.onComplete=new _,this.onProgress=new _};c.Type={JSON:0,MODEL:1,TEXTURE_2D:2,TEXTURE_CUBE:3,PLAIN_TEXT:4};c.prototype={queueAsset:function(e,t,n,i){this._queue.push({id:e,filename:this._basePath+t,type:n,parser:i})},load:function(){if(this._queue.length===0){this.onComplete.dispatch();return}var e=this._queue[this._numLoaded];switch(e.type){case c.Type.JSON:this._json(e.filename,e.id);break;case c.Type.MODEL:this._model(e.filename,e.id,e.parser);break;case c.Type.TEXTURE_2D:this._texture2D(e.filename,e.id);break;case c.Type.TEXTURE_CUBE:this._textureCube(e.filename,e.id);break;case c.Type.PLAIN_TEXT:this._plainText(e.filename,e.id);break}},get:function(e){return this._assets[e]},_json:function(e,t){var n=this,i=new XMLHttpRequest;i.overrideMimeType("application/json"),i.open("GET",e,!0),i.onreadystatechange=function(){i.readyState===4&&i.status=="200"&&(n._assets[t]=JSON.parse(i.responseText),n._onAssetLoaded())},i.send(null)},_plainText:function(e,t){var n=this,i=new XMLHttpRequest;i.overrideMimeType("application/json"),i.open("GET",e,!0),i.onreadystatechange=function(){i.readyState===4&&i.status=="200"&&(n._assets[t]=i.responseText,n._onAssetLoaded())},i.send(null)},_textureCube:function(e,t){var n=this,i=new THREE.CubeTextureLoader;this._assets[t]=i.load([e+"posX.jpg",e+"negX.jpg",e+"posY.jpg",e+"negY.jpg",e+"negZ.jpg",e+"posZ.jpg"],function(){n._onAssetLoaded()}),this._assets[t].mapping=THREE.CubeReflectionMapping},_texture2D:function(e,t){var n=this,i=new THREE.TextureLoader,o=this._assets[t]=i.load(e,function(){n._onAssetLoaded()});o.wrapS=THREE.RepeatWrapping,o.wrapT=THREE.RepeatWrapping,o.minFilter=THREE.LinearMipMapLinearFilter,o.magFilter=THREE.LinearFilter,highPerformance&&(o.anisotropy=16)},_model:function(e,t,n){var i=this,o=new n;o.options=o.options||{},o.options.convertUpAxis=!0,o.load(e,function(r){i._assets[t]=r,i._onAssetLoaded()})},_onAssetLoaded:function(){this.onProgress.dispatch(this._numLoaded/this._queue.length),++this._numLoaded===this._queue.length?this.onComplete.dispatch(this):this.load()}};const k=function(){this._updateableEntities=[]};k.prototype={registerEntity:function(e){e._onRequireUpdatesChange.bind(this._onEntityUpdateChange,this),e._requiresUpdates&&this._addUpdatableEntity(e)},unregisterEntity:function(e){e._onRequireUpdatesChange.unbind(this),e._requiresUpdates&&this._removeUpdatableEntity(e)},_onEntityUpdateChange:function(e){e._requiresUpdates?this._addUpdatableEntity(e):this._removeUpdatableEntity(e)},_addUpdatableEntity:function(e){this._updateableEntities.push(e)},_removeUpdatableEntity:function(e){var t=this._updateableEntities.indexOf(e);this._updateableEntities.splice(t,1)},update:function(e){for(var t=this._updateableEntities,n=t.length,i=0;i<n;++i)t[i].update(e)}};const f=function(){this._components=null,this._requiresUpdates=!1,this._onRequireUpdatesChange=new _,this._entityEngine=null};f.convert=function(e,t){f.call(e);for(var n in f.prototype)f.prototype.hasOwnProperty(n)&&(e[n]=f.prototype[n]);e.parent&&e.parent._entityEngine&&e._setEntityEngine(e.parent._entityEngine);var i=e.add,o=e.remove;e.add=function(s){i.call(e,s),s.hasOwnProperty("_setEntityEngine")||f.convert(s),s._setEntityEngine(this._entityEngine)},e.remove=function(s){o.call(e,s),s.hasOwnProperty("_setEntityEngine")&&s._setEntityEngine(null)},t&&e.addComponents(t);for(var r=0;r<e.children.length;++r)e.children[r].hasOwnProperty("_setEntityEngine")||f.convert(e.children[r])};f.prototype.addComponents=function(e){for(var t=0;t<e.length;++t)this.addComponent(e[t])};f.prototype.removeComponents=function(e){for(var t=0;t<e.length;++t)this.removeComponent(e[t])};f.prototype.addComponent=function(e){if(e._entity)throw new Error("Component already added to an entity!");this._components=this._components||[],this._components.push(e),this._updateRequiresUpdates(this._requiresUpdates||!!e.onUpdate),e._entity=this,e.onAdded()};f.prototype._updateRequiresUpdates=function(e){e!==this._requiresUpdates&&(this._requiresUpdates=e,this._onRequireUpdatesChange.dispatch(this))};f.prototype.hasComponent=function(e){return this._components&&this._components.indexOf(e)>=0};f.prototype.removeComponent=function(e){if(!this.hasComponent(e))throw new Error("Component wasn't added to this entity!");e.onRemoved();for(var t=!1,n=this._components.length,i=0,o=[],r=0;r<n;++r){var s=this._components[r];s!==e&&(o[i++]=s,t=t||!!e.onUpdate)}this._components=i===0?null:o,e._entity=null,this._updateRequiresUpdates(t)};f.prototype.update=function(e){var t=this._components;if(t)for(var n=t.length,i=0;i<n;++i){var o=t[i];o.onUpdate&&o.onUpdate(e)}};f.prototype._setEntityEngine=function(e){this._entityEngine&&this._entityEngine.unregisterEntity(this),this._entityEngine=e,this._entityEngine&&this._entityEngine.registerEntity(this);for(var t=0;t<this.children.length;++t)this.children[t]._setEntityEngine(e)};const q=function(){THREE.Scene.call(this),f.convert(this),this._entityEngine=new k};q.prototype=Object.create(THREE.Scene.prototype,{entityEngine:{get:function(){return this._entityEngine}}});function G(){this.scene=null,this.camera=null,this.renderer=null,this.assetLibrary=null,this.container=null,this.timeScale=1,this._content=null,this._stats=null,this._renderStats=null,this._time=null,this._isRunning=!1,this._initialized=!1}G.prototype={init:function(e,t){this.assetLibrary=t,this._initRenderer(),this._debugMode=e,e&&this._initStats();var n=this;window.addEventListener("resize",function(){n._resizeCanvas()},!1),this._initialized=!0,this._resizeCanvas(),this._content&&this._content.init(this)},get debugMode(){return this._debugMode},get content(){return this._content},set content(e){this._time=null,this._content&&this._content.destroy(),this._content=e,this._initialized&&this._content.init(this),this._isRunning&&this._content.start(),this._resizeCanvas()},_initRenderer:function(){var e=window.devicePixelRatio;this.renderer=new THREE.WebGLRenderer({antialias:!0,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(e),this.container=document.getElementById("webglcontainer"),this.scene=new q,this.camera=new THREE.PerspectiveCamera,f.convert(this.camera),this.camera.near=.1,this.camera.far=100,this.scene.add(this.camera),this.container.appendChild(this.renderer.domElement)},_initStats:function(){this._stats=new Stats,this._stats.domElement.style.position="absolute",this._stats.domElement.style.bottom="0px",this._stats.domElement.style.right="0px",this._stats.domElement.style.zIndex=100,this.container.appendChild(this._stats.domElement),this._renderStats=new THREEx.RendererStats,this._renderStats.domElement.style.position="absolute",this._renderStats.domElement.style.bottom="0px",this._renderStats.domElement.style.zIndex=100,this.container.appendChild(this._renderStats.domElement)},_resizeCanvas:function(){if(this.renderer){var e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.renderer.domElement.style.width=e+"px",this.renderer.domElement.style.height=t+"px",this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this._content&&this._content.resize(e,t)}},stop:function(){this._isRunning=!1},start:function(){this._isRunning=!0,this._content&&this._content.start(),this._requestAnimationFrame()},_render:function(){if(this._isRunning){var e=new Date().getTime(),t=0;this._time!=null&&(t=e-this._time),t*=this.timeScale,this._time=e,this._requestAnimationFrame(),this.scene.entityEngine.update(t),this._content&&this._content.update(t),this._content&&this._content.effectComposer?this._content.effectComposer.render(t/1e3):this.renderer.render(this.scene,this.camera),this._stats&&(this._renderStats.update(this.renderer),this._stats.update())}},_requestAnimationFrame:function(){var e=this;requestAnimationFrame(function(){e._render()})}};const m=function(){this._entity=null};m.prototype={onAdded:function(){},onRemoved:function(){},onUpdate:null,get entity(){return this._entity}};const a={get:function(e){return a["include_common.glsl"]+`
`+a[e+".glsl"]}};a["include_common.glsl"]=`vec4 encodeHDRE(vec3 color)
{
#ifdef HDRE
    float maxValue = max(max(color.r, color.g), color.b) + .01;
    float e = floor(max(log(maxValue), 0.0));
    color /= exp(e);
    return vec4(color, e / 5.0);
#else
    return vec4(color, 1.0);
#endif
}

vec3 decodeHDRE(vec4 hdre)
{
#ifdef HDRE
    float e = hdre.a * 5.0;
    hdre.xyz *= exp(e);
    return hdre.xyz;
#else
    return hdre.xyz;
#endif
}

float luminance(vec3 color)
{
    return dot(color, vec3(.30, 0.59, .11));
}

float luminance(vec4 color)
{
    return luminance(color.xyz);
}

float linearStep(float lower, float upper, float x)
{
    return clamp((x - lower) / (upper - lower), 0.0, 1.0);
}

// Only for 0 - 1
vec4 floatToRGBA8(float value)
{
    vec4 enc = value * vec4(1.0, 255.0, 65025.0, 16581375.0);
    // cannot fract first value or 1 would not be encodable
    enc.yzw = fract(enc.yzw);
    return enc - enc.yzww * vec4(1.0/255.0, 1.0/255.0, 1.0/255.0, 0.0);
}

float RGBA8ToFloat(vec4 rgba)
{
    return dot(rgba, vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0));
}

vec2 floatToRG8(float value)
{
    vec2 enc = vec2(1.0, 255.0) * value;
    enc.y = fract(enc.y);
    enc.x -= enc.y / 255.0;
    return enc;
}

float RG8ToFloat(vec2 rg)
{
    return dot(rg, vec2(1.0, 1.0/255.0));
}`;a["clouds_fragment.glsl"]=`varying vec2 texCoords;
uniform sampler2D map;

uniform float density;
uniform float startDistance;
uniform samplerCube irradianceProbe;
uniform float irradianceProbeBoost;
uniform float minHeight;
uniform float heightRange;

varying vec3 worldPosition;

uniform vec3 lightWorldDir;

void main() {
    vec3 viewWorldDir = worldPosition - cameraPosition;
    float dist = -viewWorldDir.y;
    viewWorldDir = normalize(viewWorldDir);
    vec4 samp = texture2D(map, texCoords);
    float rescale = clamp((worldPosition.y - minHeight) / heightRange, 0.0, 1.0) ;

    float height = max(samp.z - rescale, 0.0) / (1.0 - rescale); //smoothstep(rescale, 1.0, samp.z);
    vec3 normal;
    normal.xz = samp.xy * 2.0 - 1.0;
    normal.y = .7;
    normal = normalize(normal);

    float d = clamp(exp2(-dist * height * density), 0.0, 1.0);

    vec3 reflected = reflect(viewWorldDir, normal);
    vec3 horizonSample = normalize(vec3(reflected.x, 0.5, reflected.z));
    vec4 diffuseSample = textureCube(irradianceProbe, horizonSample);
    vec3 diffuseLight = decodeHDRE(diffuseSample);
    diffuseLight *= diffuseLight;

    diffuseLight *= irradianceProbeBoost;

//    float lambert = max(lightWorldDir.y * .7 + .3, 0.0); // wrap around a bit
    float NDotL = dot(lightWorldDir, normal);
    float lambert = max(NDotL * .9 + .1, 0.0); // wrap around a bit
    diffuseLight += vec3(lambert) * 1.0;

    vec3 color = diffuseLight;

    gl_FragColor = vec4(sqrt(color), 1.0 - d);
}
`;a["clouds_vertex.glsl"]=`varying vec2 texCoords;

varying vec3 worldPosition;

uniform float uvScale;
uniform vec2 uvOffset;

void main() {
    vec3 localPos = position;
    vec4 viewPos = modelViewMatrix * vec4(localPos, 1.0);
    gl_Position = projectionMatrix * viewPos;
    worldPosition = (modelMatrix * vec4(localPos, 1.0)).xyz;
    texCoords = uv * uvScale + uvOffset;
}`;a["dielectric_fragment.glsl"]=`#define MIN_VARIANCE -0.0001
#define LIGHT_BLEED_REDUCTION .5

varying vec3 worldPosition;
varying vec3 viewPosition;
varying vec3 worldNormal;

#if defined(SSAO_MAP) || defined(ALBEDO_MAP) || defined(NORMAL_MAP) || defined(ROUGHNESS_MAP) || defined(EMISSION_MAP)
varying vec2 texCoords;
#endif

#ifdef SSAO_MAP
varying vec4 projection;
uniform sampler2D ssaoMap;
#endif

uniform float shadowMapSize;
uniform float shadowMapPixelSize;

#ifdef SHADOW_MAP
uniform sampler2D shadowMap;

varying vec4 shadowCoord;

#ifdef PCF_SHADOW_MAP
uniform vec2 shadowOffsets[NUM_SHADOW_SAMPLES]; // w contains bias
#endif
#endif


#ifdef ALBEDO_MAP
uniform sampler2D albedoMap;

#ifdef ALBEDO_MAP_2
uniform sampler2D albedoMap2;
uniform float albedoBlend;
#endif

#endif

uniform vec3 color;

uniform float roughness;
uniform float normalSpecularReflection;

#ifdef NORMAL_MAP
uniform sampler2D normalMap;
#endif

#ifdef ROUGHNESS_MAP
uniform sampler2D roughnessMap;
uniform float roughnessMapRange;
#endif

#ifdef EMISSION_MAP
uniform sampler2D emissionMap;
#endif

uniform vec3 emissionColor;

#ifdef AMBIENT_OCCLUSION_MAP
uniform sampler2D aoMap;
varying vec2 texCoords2;
#endif

#ifdef LOCAL_SKYBOX
// this could also be applied to irradiance map
uniform vec3 skyboxPosition;
uniform float skyboxSize;
#endif

#ifdef SPECULAR_PROBE
uniform samplerCube specularProbe;
uniform vec3 specularProbeColor;
#endif

#ifdef FOG_PROBE
uniform samplerCube fogProbe;
uniform float fogProbeBoost;
#endif

#ifdef IRRADIANCE_PROBE
uniform samplerCube irradianceProbe;
uniform float irradianceProbeBoost;
#endif

// internal
uniform vec3 ambientLightColor;

uniform float alpha;

#ifdef FOG
uniform float fogDensity;
uniform vec3 fogColor;
#endif

#if NUM_POINT_LIGHTS > 0
struct PointLight {
    vec3 position;
    vec3 color;
    float distance;
    float decay;
    int shadow;
    float shadowBias;
    float shadowRadius;
    vec2 shadowMapSize;
};

uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
#endif

#if NUM_DIR_LIGHTS > 0
struct DirectionalLight {
    vec3 direction;
    vec3 color;
    int shadow;
    float shadowBias;
    float shadowRadius;
    vec2 shadowMapSize;
};
uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
#endif

vec3 intersectCubeMap(vec3 rayOrigin, vec3 rayDir, float cubeSize)
{
    vec3 t = (cubeSize * sign(rayDir) - rayOrigin) / rayDir;
    float minT = min(min(t.x, t.y), t.z);
    return rayOrigin + minT * rayDir;
}

#ifdef NORMAL_MAP
vec3 perturbNormal2Arb(vec3 position, vec3 worldNormal, vec3 normalSample)
{
    vec3 q0 = dFdx( position.xyz );
    vec3 q1 = dFdy( position.xyz );
    vec2 st0 = dFdx( texCoords.st );
    vec2 st1 = dFdy( texCoords.st );
    vec3 S = normalize( q0 * st1.t - q1 * st0.t );
    vec3 T = normalize( -q0 * st1.s + q1 * st0.s );
    vec3 N = normalize( worldNormal );
    mat3 tsn = mat3( S, T, N );
    return normalize( tsn * normalSample );
}
#endif

vec3 getNormal()
{
#if defined(NORMAL_MAP)
    vec4 normalSample = texture2D( normalMap, texCoords );
    vec3 normal = normalSample.xyz * 2.0 - 1.0;
    return perturbNormal2Arb(worldPosition, worldNormal, normal);
#else
    #ifdef FACE_NORMALS
        vec3 q0 = dFdx( worldPosition.xyz );
        vec3 q1 = dFdy( worldPosition.xyz );
        return normalize(cross(q0, q1));
    #else
        return normalize(worldNormal);
    #endif
#endif
}

#ifdef VSM_SHADOW_MAP
vec2 getVSMMoments(vec2 uv)
{
    vec4 s = texture2D(shadowMap, uv);
    #ifdef VSM_FLOAT
    return s.xy;
    #else
    return vec2(RG8ToFloat(s.xy), RG8ToFloat(s.zw));
    #endif
}
#endif

float getShadow() {
#ifdef SHADOW_MAP

    #ifdef PCF_SHADOW_MAP
        #if NUM_SHADOW_SAMPLES > 1
        float shadow = 0.0;
        for (int i = 0; i < NUM_SHADOW_SAMPLES; ++i) {
            // pseudo random
            #ifdef DITHER_SHADOW
            float angle = fract (sin((gl_FragCoord.x + 0.5) * (gl_FragCoord.y + 1.0)) * 43758.5453123) * 3.1415 * 2.0;
            float c = cos(angle);
            float s = sin(angle);
            vec2 offset;
            offset.x = c * shadowOffsets[i].x - s * shadowOffsets[i].y;
            offset.y = s * shadowOffsets[i].x + c * shadowOffsets[i].y;
            #else
            vec2 offset = shadowOffsets[i];
            #endif

            float occlDepth = RGBA8ToFloat(texture2D(shadowMap, shadowCoord.xy + offset));
            float diff = shadowCoord.z - occlDepth;
            shadow += float(diff <= 0.0);
        }

        shadow *= RCP_NUM_SHADOW_SAMPLES;
        #else
            float occlDepth = RGBA8ToFloat(texture2D(shadowMap, shadowCoord.xy));
            float diff = shadowCoord.z - occlDepth;
            float shadow = float(diff <= 0.0);
        #endif
    #endif

    #ifdef VSM_SHADOW_MAP

// the moments seem correct on ipad... why do the calculations differ?
        vec2 moments = getVSMMoments(shadowCoord.xy);
        float p = linearStep(shadowCoord.z - 0.02, shadowCoord.z, moments.x);
        float variance = moments.y - moments.x * moments.x;
        variance = max(variance, MIN_VARIANCE);

        float diff = shadowCoord.z - moments.x;
        float upperBound = variance / (variance + diff*diff);
        float shadow = linearStep(LIGHT_BLEED_REDUCTION, 1.0, upperBound);
        shadow = clamp(max(shadow, p), 0.0, 1.0);
    #endif

    vec2 edges = abs(shadowCoord.xy * 2.0 - 1.0);
    float edge = max(edges.x, edges.y);
    edge = linearStep(.8, 1.0, edge);
    shadow = mix(shadow, 1.0, edge);
    return shadow;
#else
    return 1.0;
#endif
}

float fresnel(float NdotL, float lowProfileDefault)
{
#ifdef PERFORMANCE_PROFILE_HIGH
// angle to the power of 5
    float angle = 1.0 - NdotL;
    float fresnelFactor = angle * angle;
    fresnelFactor *= fresnelFactor;
    fresnelFactor *= angle;
    return normalSpecularReflection + (1.0 - normalSpecularReflection) * fresnelFactor;
#else
    return lowProfileDefault;
#endif
}

float trowbridgeReitz(float roughnessSqr, vec3 lightDir, vec3 normal, vec3 viewDir)
{
    vec3 halfVec = normalize(lightDir + viewDir);
    float micro = max(dot(halfVec, normal), 0.0);
    float denom = (micro * micro) * (roughnessSqr - 1.0) + 1.0;
    return roughnessSqr / (denom * denom);
}

void accumulate(vec3 lightDir, vec3 lightColor, vec3 normal, vec3 viewDir, float roughnessSqr, out vec3 diffuseLight, out vec3 specularLight)
{
    float NdotL = max(dot(lightDir, normal), 0.0);
    vec3 irradiance = lightColor * NdotL;
    diffuseLight += irradiance;

#ifndef IGNORESPECULAR
    float F = fresnel(NdotL, .08);
    float D = trowbridgeReitz(roughnessSqr, lightDir, normal, viewDir);
    float amount = D * F;

    specularLight += irradiance * amount;
#endif
}

void main() {
    float roughnessSqr = roughness;
    #ifdef ROUGHNESS_MAP
    roughnessSqr -= (texture2D(roughnessMap, texCoords).x - .5) * roughnessMapRange;
    roughnessSqr = clamp(roughnessSqr, 0.0, 1.0);
    #endif
    roughnessSqr *= roughnessSqr;
    vec3 viewWorldDir = normalize(worldPosition - cameraPosition);
    vec3 viewDir = -normalize(viewPosition);

    vec3 normal = getNormal();
    vec3 viewNormal = mat3(viewMatrix) * normal;

    vec3 albedo = vec3(1.0);

#ifdef ALBEDO_MAP
    albedo = texture2D(albedoMap, texCoords).xyz;
    albedo *= albedo;

    #ifdef ALBEDO_MAP_2
        vec3 albedo2 = texture2D(albedoMap2, texCoords).xyz;
        albedo = mix(albedo, albedo2 * albedo2, albedoBlend);
    #endif
#endif

    albedo *= color;

    vec3 diffuseLight = vec3(0.0);

    #ifdef IRRADIANCE_PROBE
        vec4 diffuseSample = textureCube(irradianceProbe, normal);
        diffuseLight = decodeHDRE(diffuseSample);

        diffuseLight *= diffuseLight * irradianceProbeBoost;
    #endif

    float ao = 1.0;
    #ifdef AMBIENT_OCCLUSION_MAP
        ao = texture2D(aoMap, texCoords2).x;
    #endif

    #ifdef SSAO_MAP
        vec2 screenUV = projection.xy / projection.w * .5 + .5;
        ao = texture2D(ssaoMap, screenUV).x;
    #endif

    diffuseLight += ambientLightColor;
    #ifndef AO_ON_DIFFUSE
    diffuseLight *= ao;
    #endif

    vec3 specularLight = vec3(0.0);

    #ifdef SPECULAR_PROBE
        vec3 reflectedView = reflect(viewWorldDir, normal);
        float fresnelFactor = fresnel(max(dot(viewWorldDir, normal), 0.0), .35);

        #ifdef LOCAL_SKYBOX
            vec3 offsetRefl = intersectCubeMap(worldPosition - skyboxPosition, reflectedView, skyboxSize);
        #else
            vec3 offsetRefl = reflectedView;
        #endif

        vec4 reflectionSample = textureCube(specularProbe, reflectedView);
        vec3 reflection;

        reflection = decodeHDRE(reflectionSample);

        reflection *= reflection * specularProbeColor;

        specularLight = reflection * fresnelFactor;

        #ifdef AMBIENT_OCCLUSION_MAP
//        specularLight *= ao;
        #endif
    #endif

    #if NUM_POINT_LIGHTS > 0
    for (int i = 0; i < NUM_POINT_LIGHTS; ++i) {
        vec3 worldDir = pointLights[i].position - worldPosition;
        float sqrDist = dot(worldDir, worldDir);
        worldDir /= sqrt(sqrDist);
        vec3 fallOffColor = pointLights[i].color / max(sqrDist, .001);
        accumulate(worldDir, fallOffColor, normal, viewDir, roughnessSqr, diffuseLight, specularLight);
    }
    #endif

    float shadow = getShadow();

    #if NUM_DIR_LIGHTS > 0
    for (int i = 0; i < NUM_DIR_LIGHTS; ++i) {
        float NdotL = max(dot(directionalLights[i].direction, viewNormal), 0.0);
        vec3 irradiance = directionalLights[i].color * NdotL;
        irradiance *= shadow;
        diffuseLight += irradiance;

        #ifndef IGNORESPECULAR
        float F = fresnel(NdotL, .04);
        float D = trowbridgeReitz(roughnessSqr, directionalLights[i].direction, viewNormal, viewDir);
        float amount = D * F;

        specularLight += irradiance * amount;
        #endif
    }
    #endif

    #ifdef AO_ON_DIFFUSE
    diffuseLight *= ao;
    #endif

    vec3 color = albedo * diffuseLight + specularLight;

    vec3 emission = emissionColor;
    #ifdef EMISSION_MAP
    vec3 emissionSample = texture2D(emissionMap, texCoords).xyz;
    emissionSample *= emissionSample;
    emission *= emissionSample;
    #endif
    color += emission;

    #ifdef FOG
        float fogAmount = clamp(exp2(viewPosition.z * fogDensity), 0.0, 1.0);
        vec3 fogCol = fogColor;
        #ifdef FOG_PROBE
            vec4 fogSample = textureCube(fogProbe, vec3(viewWorldDir.x , 0.0, viewWorldDir.z));
            fogSample.xyz = decodeHDRE(fogSample);
            fogSample.xyz *= fogSample.xyz * fogProbeBoost;
            fogCol *= fogSample.xyz;
        #endif
        color = mix(fogCol, color, fogAmount);

// ONLY FOR THIS PROJECT, this provides a fade-out for the horizon
        fogAmount = smoothstep(100.0, 250.0, length(worldPosition.xz));
        color = mix(color, fogCol, fogAmount);
    #endif


    gl_FragColor = encodeHDRE(sqrt(color));
//    gl_FragColor = vec4(shadow);
}
`;a["dielectric_vertex.glsl"]=`varying vec3 worldPosition;
varying vec3 viewPosition;
varying vec3 worldNormal;

#if defined(SSAO_MAP) || defined(ALBEDO_MAP) || defined(NORMAL_MAP) || defined(ROUGHNESS_MAP) || defined(EMISSION_MAP)
varying vec2 texCoords;
#endif

#if defined(AMBIENT_OCCLUSION_MAP)
attribute vec2 uv2;

varying vec2 texCoords2;
#endif

#ifdef SSAO_MAP
varying vec4 projection;
#endif

#ifdef SHADOW_MAP
uniform mat4 shadowMatrix;

varying vec4 shadowCoord;
#endif

void main() {
    worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    // normalMatrix seems to be view space... need world space, but it's okay since we're using uniform scaling only
    vec4 viewPos = modelViewMatrix * vec4(position,1.0);
    worldNormal = mat3(modelMatrix) * normalize(normal);
    gl_Position = projectionMatrix * viewPos;
    viewPosition = viewPos.xyz;

    #if defined(SSAO_MAP) || defined(ALBEDO_MAP) || defined(NORMAL_MAP) || defined(ROUGHNESS_MAP) || defined(EMISSION_MAP)
    texCoords = uv;
    #endif

    #if defined(AMBIENT_OCCLUSION_MAP)
    texCoords2 = uv2;
    #endif

    #ifdef SSAO_MAP
    projection = gl_Position;
    #endif

    #ifdef SHADOW_MAP
    shadowCoord = (shadowMatrix * vec4(worldPosition, 1.0)) * .5 + .5;
    #endif

    #ifdef AO_MAP
    texCoords2 = uv2;
    #endif
}`;a["dynamic_sky_fragment.glsl"]=`#define NUM_SAMPLES 3
#define PI 3.14159265

varying vec4 worldPosition;

uniform vec3 lightDir;

#ifdef CLOUD_MAP
uniform samplerCube cloudMap;
#endif

#ifdef NIGHT_MAP
uniform sampler2D nightMap;
#endif

float getRayleighPhase(float dot)
{
	return 0.75 + 0.75 * dot * dot;
}

float getMiePhase(float dot, float g)
{
    float g2 = g * g;
	return pow(1.0 - g, 2.0) / pow(1.0 + g2 - 2.0 * g * dot, 1.5);
}

float scale(float fCos)
{
	float x = 1.0 - fCos;
	return 0.25 * exp(-0.00287 + x*(0.459 + x*(3.83 + x*(-6.80 + x*5.25))));
}

void main()
{

// how much atmosphere to get through when we're on the floor?
    // Get intersection with outer atmosphere
    const float earthRadius = 10.0;
    float atmosphereRadius = 10.25;
    const float rayleighFactor = 0.0025;
    const float mieFactor = 0.0005;
    float rayleighFactor4PI = rayleighFactor * 4.0 * PI;
    float mieFactor4PI = mieFactor * 4.0 * PI;
    float miePhaseFactor = -.65;

// in earth space:
// assume camera is in centre
    vec3 origin = vec3(0.0, earthRadius, 0.0);
    vec3 origViewDir = normalize(worldPosition.xyz);
    vec3 viewDir = origViewDir;
    #ifdef CLOUD_MAP
        float cloudThickness = textureCube(cloudMap, origViewDir).x;
//    atmosphereRadius -= 0.24 * cloudThickness;
    viewDir.y *= cloudThickness * .03 + .97;
    viewDir = normalize(viewDir.xyz);
        miePhaseFactor -= cloudThickness * .2;
        rayleighFactor4PI += cloudThickness * .1;
    #endif

    float atmosphereThickness = atmosphereRadius - earthRadius;

    float dotLO = dot(viewDir, origin);
    // this is the distance the ray travels through the atmosphere from the origin
    float scatterDistance = -dotLO + sqrt(dotLO * dotLO - dot(origin, origin) + atmosphereRadius * atmosphereRadius);

    vec3 waveLen = vec3(0.650, 0.570, 0.475);
    vec3 rcpWaveLen4 = 1.0 / (waveLen * waveLen * waveLen * waveLen);

    // Initialize the scattering loop variables
    float stepLength = scatterDistance / float(NUM_SAMPLES);
    vec3 rayStep = viewDir * stepLength;

    float LdotV = dot(-lightDir, viewDir);
    float rayleighPhase = getRayleighPhase(LdotV);
    float miePhase = getMiePhase(LdotV, miePhaseFactor);
    miePhase = min(miePhase, 70.0);

    vec3 samplePoint = rayStep * 0.5 + origin;
    scatterDistance -= stepLength * .5;
    vec3 attenuate = exp(-(rayleighFactor4PI * rcpWaveLen4 + mieFactor4PI) * stepLength);
    vec3 lightColor = vec3(1.5); // + max(1.0 - lightDir.y, 0.0);
    vec3 accum = vec3(0.0);

    for (int i = 0; i < NUM_SAMPLES; ++i) {
        float dotLS = dot(lightDir, samplePoint);
        float f = dotLS * dotLS - dot(samplePoint, samplePoint);
        float sunTravelDistance = -dotLS + sqrt(f + atmosphereRadius * atmosphereRadius);

        vec3 attenuatedLight = lightColor * exp(-(rayleighFactor4PI * rcpWaveLen4 + mieFactor4PI) * sunTravelDistance);
        vec3 inScatter = attenuatedLight * (rayleighFactor4PI * rcpWaveLen4 * rayleighPhase + mieFactor4PI * miePhase) * stepLength;

        accum = accum * attenuate + inScatter;
        scatterDistance -= stepLength;

        samplePoint += rayStep;
    }

    // TODO: Could implement a different raytrace target point when we're hitting the floor to simulate scattering from the floor?

    float isAboveHorizon = linearStep(-0.1, -0.05, origViewDir.y);
    vec3 ground = vec3(0.1) * max(lightDir.y, 0.0) + vec3(0.02, 0.02, 0.025);
    accum = mix(ground, accum, 0.8);

//    gl_FragColor = encodeHDRE(sqrt(accum));
    gl_FragColor = vec4(sqrt(accum), 0.0);
}
`;a["dynamic_sky_vertex.glsl"]=`varying vec4 worldPosition;

void main()
{
    worldPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPos = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPos;
}
`;a["flat_fragment.glsl"]=`#ifdef ALBEDO_MAP
varying vec2 texCoords;
uniform sampler2D albedoMap;
#endif

uniform vec3 color;
uniform float opacity;

#ifdef FOG
varying vec3 viewPosition;

uniform float fogDensity;
uniform vec3 fogColor;
#endif

void main() {
    float alpha = opacity;
#ifdef ALBEDO_MAP
    vec4 albedo = texture2D(albedoMap, texCoords);
    alpha *= albedo.w;
    albedo.xyz *= albedo.xyz;
    albedo.xyz *= color;
    vec3 col = albedo.xyz;
#else
    vec3 col = color;
#endif

    #ifdef FOG
    float fogAmount = clamp(exp2(viewPosition.z * fogDensity), 0.0, 1.0);
    col = mix(fogColor, col, fogAmount);
    #endif

    #ifdef HDRE
    gl_FragColor = encodeHDRE(sqrt(col));
    #else
//    col *= alpha;
    gl_FragColor = vec4(sqrt(col), alpha);
    #endif
}
`;a["flat_vertex.glsl"]=`#ifdef ALBEDO_MAP
varying vec2 texCoords;
#endif

#ifdef FOG
varying vec3 viewPosition;
#endif

void main() {
    vec3 localPos = position;
    vec4 viewPos = modelViewMatrix * vec4(localPos, 1.0);
    gl_Position = projectionMatrix * viewPos;
    #ifdef FOG
    viewPosition = viewPos.xyz;
    #endif

    #ifdef ALBEDO_MAP
    texCoords = uv;
    #endif
}`;a["linear_depth_fragment.glsl"]=`varying float linearDepth;

// Only for 0 - 1
vec4 hx_floatToRGBA8(float value)
{
    vec4 enc = value * vec4(1.0, 255.0, 65025.0, 16581375.0);
    // cannot fract first value or 1 would not be encodable
    enc.yzw = fract(enc.yzw);
    return enc - enc.yzww * vec4(1.0/255.0, 1.0/255.0, 1.0/255.0, 0.0);
}

void main()
{
    gl_FragColor = hx_floatToRGBA8(linearDepth);
}
`;a["linear_depth_vertex.glsl"]=`varying float linearDepth;

uniform float nearClip;
uniform float farClip;

void main()
{
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    linearDepth = (-viewPosition.z - nearClip) / (farClip - nearClip);
    gl_Position = projectionMatrix * viewPosition;
}`;a["sky_fragment.glsl"]=`varying vec3 worldViewDir;

uniform samplerCube envMap;
uniform vec3 color;
uniform float invert;

void main()
{
    vec3 elementDir = normalize(worldViewDir * invert);
    gl_FragColor = textureCube(envMap, elementDir) * vec4(color, 1.0);
}
`;a["sky_vertex.glsl"]=`varying vec3 worldViewDir;

void main() {
    vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    worldViewDir = worldPosition - cameraPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;a["water_fragment.glsl"]=`#define MIN_VARIANCE -0.0001
#define LIGHT_BLEED_REDUCTION .5

varying vec2 normalCoords1;
varying vec2 normalCoords2;

varying vec3 worldPosition;
varying vec3 viewPosition;
varying vec3 worldNormal;

#ifdef SSAO_MAP
varying vec4 projection;
uniform sampler2D ssaoMap;
#endif

uniform float shadowMapSize;
uniform float shadowMapPixelSize;

#ifdef SHADOW_MAP
uniform sampler2D shadowMap;

varying vec4 shadowCoord;

#ifdef PCF_SHADOW_MAP
uniform vec2 shadowOffsets[NUM_SHADOW_SAMPLES]; // w contains bias
#endif
#endif


uniform vec3 color;

uniform float roughnessSqr;
uniform float normalSpecularReflection;
uniform float rcpNormalStrength;

uniform sampler2D normalMap;

#ifdef AMBIENT_OCCLUSION_MAP
uniform sampler2D aoMap;
varying vec2 texCoords2;
#endif

#ifdef LOCAL_SKYBOX
// this could also be applied to irradiance map
uniform vec3 skyboxPosition;
uniform float skyboxSize;
#endif

#ifdef SPECULAR_PROBE
uniform samplerCube specularProbe;
uniform vec3 specularProbeColor;
#endif

#ifdef FOG_PROBE
uniform samplerCube fogProbe;
uniform float fogProbeBoost;
#endif

#ifdef IRRADIANCE_PROBE
uniform samplerCube irradianceProbe;
uniform float irradianceProbeBoost;
#endif

// internal
uniform vec3 ambientLightColor;

uniform float alpha;

#ifdef FOG
uniform float fogDensity;
uniform vec3 fogColor;
#endif

#if NUM_POINT_LIGHTS > 0
struct PointLight {
    vec3 position;
    vec3 color;
    float distance;
    float decay;
    int shadow;
    float shadowBias;
    float shadowRadius;
    vec2 shadowMapSize;
};

uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
#endif

#if NUM_DIR_LIGHTS > 0
struct DirectionalLight {
    vec3 direction;
    vec3 color;
    int shadow;
    float shadowBias;
    float shadowRadius;
    vec2 shadowMapSize;
};
uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
#endif

vec3 intersectCubeMap(vec3 rayOrigin, vec3 rayDir, float cubeSize)
{
    vec3 t = (cubeSize * sign(rayDir) - rayOrigin) / rayDir;
    float minT = min(min(t.x, t.y), t.z);
    return rayOrigin + minT * rayDir;
}

#ifdef NORMAL_MAP
vec3 perturbNormal2Arb(vec3 position, vec3 worldNormal, vec3 normalSample)
{
    vec3 q0 = dFdx( position.xyz );
    vec3 q1 = dFdy( position.xyz );
    vec2 st0 = dFdx( texCoords.st );
    vec2 st1 = dFdy( texCoords.st );
    vec3 S = normalize( q0 * st1.t - q1 * st0.t );
    vec3 T = normalize( -q0 * st1.s + q1 * st0.s );
    vec3 N = normalize( worldNormal );
    mat3 tsn = mat3( S, T, N );
    return normalize( tsn * normalSample );
}
#endif

vec3 getNormal()
{
    vec4 normalSample1 = texture2D( normalMap, normalCoords1 ) - .5;
    vec4 normalSample2 = texture2D( normalMap, normalCoords2 ) - .5;
    vec3 normal = normalSample1.xzy + normalSample2.xzy;
    normal.y *= rcpNormalStrength;
    return normalize(normal);
}

#ifdef VSM_SHADOW_MAP
vec2 getVSMMoments(vec2 uv)
{
    vec4 s = texture2D(shadowMap, uv);
    #ifdef VSM_FLOAT
    return s.xy;
    #else
    return vec2(RG8ToFloat(s.xy), RG8ToFloat(s.zw));
    #endif
}
#endif

float getShadow() {
#ifdef SHADOW_MAP

    #ifdef PCF_SHADOW_MAP
        #if NUM_SHADOW_SAMPLES > 1
        float shadow = 0.0;
        for (int i = 0; i < NUM_SHADOW_SAMPLES; ++i) {
            // pseudo random
            #ifdef DITHER_SHADOW
            float angle = fract (sin((gl_FragCoord.x + 0.5) * (gl_FragCoord.y + 1.0)) * 43758.5453123) * 3.1415 * 2.0;
            float c = cos(angle);
            float s = sin(angle);
            vec2 offset;
            offset.x = c * shadowOffsets[i].x - s * shadowOffsets[i].y;
            offset.y = s * shadowOffsets[i].x + c * shadowOffsets[i].y;
            #else
            vec2 offset = shadowOffsets[i];
            #endif

            float occlDepth = RGBA8ToFloat(texture2D(shadowMap, shadowCoord.xy + offset));
            float diff = shadowCoord.z - occlDepth;
            shadow += float(diff <= 0.0);
        }

        shadow *= RCP_NUM_SHADOW_SAMPLES;
        #else
            float occlDepth = RGBA8ToFloat(texture2D(shadowMap, shadowCoord.xy));
            float diff = shadowCoord.z - occlDepth;
            float shadow = float(diff <= 0.0);
        #endif
    #endif

    #ifdef VSM_SHADOW_MAP

// the moments seem correct on ipad... why do the calculations differ?
        vec2 moments = getVSMMoments(shadowCoord.xy);
        float p = linearStep(shadowCoord.z - 0.02, shadowCoord.z, moments.x);
        float variance = moments.y - moments.x * moments.x;
        variance = max(variance, MIN_VARIANCE);

        float diff = shadowCoord.z - moments.x;
        float upperBound = variance / (variance + diff*diff);
        float shadow = linearStep(LIGHT_BLEED_REDUCTION, 1.0, upperBound);
        shadow = clamp(max(shadow, p), 0.0, 1.0);
    #endif

    vec2 edges = abs(shadowCoord.xy * 2.0 - 1.0);
    float edge = max(edges.x, edges.y);
    edge = linearStep(.8, 1.0, edge);
    shadow = mix(shadow, 1.0, edge);
    return shadow;
#else
    return 1.0;
#endif
}

float fresnel(float NdotL, float lowProfileDefault)
{
#ifdef PERFORMANCE_PROFILE_HIGH
// angle to the power of 5
    float angle = 1.0 - NdotL;
    float fresnelFactor = angle * angle;
    fresnelFactor *= fresnelFactor;
    fresnelFactor *= angle;
    return normalSpecularReflection + (1.0 - normalSpecularReflection) * fresnelFactor;
#else
    return lowProfileDefault;
#endif
}

float trowbridgeReitz(float roughnessSqr, vec3 lightDir, vec3 normal, vec3 viewDir)
{
    vec3 halfVec = normalize(lightDir + viewDir);
    float micro = max(dot(halfVec, normal), 0.0);
    float denom = (micro * micro) * (roughnessSqr - 1.0) + 1.0;
    return roughnessSqr / (denom * denom);
}

void accumulate(vec3 lightDir, vec3 lightColor, vec3 normal, vec3 viewDir, float roughnessSqr, out vec3 diffuseLight, out vec3 specularLight)
{
    diffuseLight += lightColor * max(lightDir.y, 0.0);

#ifndef IGNORESPECULAR
    float NdotL = max(dot(lightDir, normal), 0.0);
    vec3 irradiance = lightColor * NdotL;
    float F = fresnel(NdotL, .08);
    float D = trowbridgeReitz(roughnessSqr, lightDir, normal, viewDir);
    float amount = D * F;

    specularLight += irradiance * amount;
#endif
}

void main() {
    vec3 viewWorldDir = normalize(worldPosition - cameraPosition);
    vec3 viewDir = -normalize(viewPosition);

    vec3 normal = getNormal();
    vec3 viewNormal = mat3(viewMatrix) * normal;

    vec3 diffuseLight = vec3(0.0);

    #ifdef IRRADIANCE_PROBE
        vec4 diffuseSample = textureCube(irradianceProbe, vec3(0.0, 1.0, 0.0));
        diffuseLight = decodeHDRE(diffuseSample);

        diffuseLight *= diffuseLight * irradianceProbeBoost;
    #endif

    float ao = 1.0;
    #ifdef AMBIENT_OCCLUSION_MAP
        ao = texture2D(aoMap, texCoords2).x;
    #endif

    vec3 albedo = color;

    #ifdef SSAO_MAP
        vec2 screenUV = projection.xy / projection.w * .5 + .5;
        ao = texture2D(ssaoMap, screenUV).x;
    #endif

    diffuseLight += ambientLightColor;

    vec3 specularLight = vec3(0.0);

    #ifdef SPECULAR_PROBE
        vec3 reflectedView = reflect(viewWorldDir, normal);
        float fresnelFactor = fresnel(max(dot(viewWorldDir, normal), 0.0), .35);

        #ifdef LOCAL_SKYBOX
            vec3 offsetRefl = intersectCubeMap(worldPosition - skyboxPosition, reflectedView, skyboxSize);
        #else
            vec3 offsetRefl = reflectedView;
        #endif

        vec4 reflectionSample = textureCube(specularProbe, reflectedView);
        vec3 reflection;

        reflection = decodeHDRE(reflectionSample);

        reflection *= reflection * specularProbeColor;

        specularLight = reflection * fresnelFactor;

        #ifdef AMBIENT_OCCLUSION_MAP
//        specularLight *= ao;
        #endif
    #endif

    #if NUM_POINT_LIGHTS > 0
    for (int i = 0; i < NUM_POINT_LIGHTS; ++i) {
        vec3 worldDir = pointLights[i].position - worldPosition;
        float sqrDist = dot(worldDir, worldDir);
        worldDir /= sqrt(sqrDist);
        vec3 fallOffColor = pointLights[i].color / max(sqrDist, .001);
        accumulate(worldDir, fallOffColor, normal, viewDir, roughnessSqr, diffuseLight, specularLight);
    }
    #endif

    float shadow = getShadow();

    #if NUM_DIR_LIGHTS > 0
    for (int i = 0; i < NUM_DIR_LIGHTS; ++i) {
        float NdotL = max(dot(directionalLights[i].direction, viewNormal), 0.0);
        diffuseLight += max(directionalLights[i].direction.y, 0.0) * directionalLights[i].color * shadow;

        #ifndef IGNORESPECULAR
        vec3 irradiance = directionalLights[i].color * NdotL;
        irradiance *= shadow;
        float F = fresnel(NdotL, .04);
        float D = trowbridgeReitz(roughnessSqr, directionalLights[i].direction, viewNormal, viewDir);
        float amount = D * F;

        specularLight += irradiance * amount;
        #endif
    }
    #endif

    vec3 color = albedo * diffuseLight + specularLight;
    color *= ao * ao;

    #ifdef FOG
        float fogAmount = clamp(exp2(viewPosition.z * fogDensity), 0.0, 1.0);
        vec3 fogCol = fogColor;
        #ifdef FOG_PROBE
            vec4 fogSample = textureCube(fogProbe, vec3(viewWorldDir.x , 0.0, viewWorldDir.z));
            fogSample.xyz = decodeHDRE(fogSample);
            fogSample.xyz *= fogSample.xyz * fogProbeBoost;
            fogCol *= fogSample.xyz;
        #endif
        color = mix(fogCol, color, fogAmount);

// ONLY FOR THIS PROJECT
        fogAmount = smoothstep(100.0, 250.0, length(worldPosition.xz));
        color = mix(color, fogCol, fogAmount);
    #endif

    gl_FragColor = encodeHDRE(sqrt(color));
}
`;a["water_vertex.glsl"]=`varying vec3 worldPosition;
varying vec3 viewPosition;
varying vec3 worldNormal;

varying vec2 normalCoords1;
varying vec2 normalCoords2;

#if defined(AMBIENT_OCCLUSION_MAP)
attribute vec2 uv2;

varying vec2 texCoords2;
#endif

#ifdef SSAO_MAP
varying vec4 projection;
#endif

#ifdef SHADOW_MAP
uniform mat4 shadowMatrix;

varying vec4 shadowCoord;
#endif

uniform float normalMapScale1;
uniform float normalMapScale2;
uniform vec2 normalMapOffset1;
uniform vec2 normalMapOffset2;

void main() {
    worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    // normalMatrix seems to be view space... need world space, but it's okay since we're using uniform scaling only
    vec4 viewPos = modelViewMatrix * vec4(position,1.0);
    worldNormal = mat3(modelMatrix) * normalize(normal);
    gl_Position = projectionMatrix * viewPos;
    viewPosition = viewPos.xyz;

    normalCoords1 = worldPosition.xz * normalMapScale1 + normalMapOffset1;
    normalCoords2 = worldPosition.xz * normalMapScale2 + normalMapOffset2;

    #if defined(AMBIENT_OCCLUSION_MAP)
    texCoords2 = uv2;
    #endif

    #ifdef SSAO_MAP
    projection = gl_Position;
    #endif

    #ifdef SHADOW_MAP
    shadowCoord = (shadowMatrix * vec4(worldPosition, 1.0)) * .5 + .5;
    #endif

    #ifdef AO_MAP
    texCoords2 = uv2;
    #endif
}`;a["hbao_fragment.glsl"]=`uniform float cameraFrustumRange;
uniform float cameraNearPlaneDistance;
uniform vec2 rcpRenderTargetResolution;

uniform float strengthPerRay;
uniform float bias;
uniform float rcpFallOffDistance;
uniform vec2 ditherScale;
uniform vec2 radiiProjection;

uniform sampler2D tDiffuse;
uniform sampler2D sampleDirTexture;
uniform sampler2D ditherTexture;

varying vec2 vUv;
varying vec3 viewDir;
varying vec3 frustumCorner;

float RGBA8ToFloat(vec4 rgba)
{
    return dot(rgba, vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0));
}

float readDepth(vec2 uv)
{
    vec4 s = texture2D(tDiffuse, uv);
    return RGBA8ToFloat(s);
}

vec3 getViewPos(vec2 sampleUV)
{
    float depth = readDepth(sampleUV);
    float viewZ = depth * cameraFrustumRange + cameraNearPlaneDistance;
    vec3 viewPos = frustumCorner * vec3(sampleUV * 2.0 - 1.0, 1.0);
    return viewPos * viewZ;
}

// Retrieves the occlusion factor for a particular sample
float getSampleOcclusion(vec2 sampleUV, vec3 centerViewPos, vec3 centerNormal, vec3 tangent, inout float topOcclusion)
{
    vec3 sampleViewPos = getViewPos(sampleUV);

    // get occlusion factor based on candidate horizon elevation
    vec3 horizonVector = sampleViewPos - centerViewPos;
    float horizonVectorLength = length(horizonVector);

    float occlusion;

    // If the horizon vector points away from the tangent, make an estimate
    if (dot(tangent, horizonVector) < 0.0)
        occlusion = .5;
    else
        occlusion = dot(centerNormal, horizonVector) / horizonVectorLength;

    // this adds occlusion only if angle of the horizon vector is higher than the previous highest one without branching
    float diff = max(occlusion - topOcclusion, 0.0);
    topOcclusion = max(occlusion, topOcclusion);

    // attenuate occlusion contribution using distance function 1 - (d/f)^2
    float distanceFactor = clamp(horizonVectorLength * rcpFallOffDistance, 0.0, 1.0);
    distanceFactor = 1.0 - distanceFactor * distanceFactor;
    return diff * distanceFactor;
}

// Retrieves the occlusion for a given ray
float getRayOcclusion(vec2 direction, float jitter, vec2 projectedRadii, vec3 centerViewPos, vec3 centerNormal)
{
    // calculate the nearest neighbour sample along the direction vector
    vec2 texelSizedStep = direction * rcpRenderTargetResolution;
    direction *= projectedRadii;

    // gets the tangent for the current ray, this will be used to handle opposing horizon vectors
    // Tangent is corrected with respect to face normal by projecting it onto the tangent plane defined by the normal
    vec3 tangent = getViewPos(vUv + texelSizedStep) - centerViewPos;
    tangent -= dot(centerNormal, tangent) * centerNormal;

    vec2 stepUV = direction.xy / float(NUM_SAMPLES_PER_RAY - 1);

    // jitter the starting position for ray marching between the nearest neighbour and the sample step size
    vec2 jitteredOffset = mix(texelSizedStep, stepUV, jitter);
    //stepUV *= 1.0 + jitter * .1;
    vec2 sampleUV = vUv + jitteredOffset;

    // top occlusion keeps track of the occlusion contribution of the last found occluder.
    // set to bias value to avoid near-occluders
    float topOcclusion = bias;
    float occlusion = 0.0;

    // march!
    for (int step = 0; step < NUM_SAMPLES_PER_RAY; ++step) {
        occlusion += getSampleOcclusion(sampleUV, centerViewPos, centerNormal, tangent, topOcclusion);
        sampleUV += stepUV;
    }

    return occlusion;
}

void main()
{
    float centerDepth = readDepth(vUv);
    float viewZ = cameraNearPlaneDistance + centerDepth * cameraFrustumRange;
    vec3 centerViewPos = viewZ * viewDir;
    vec3 tangentX = dFdx(centerViewPos);
    vec3 tangentY = dFdy(centerViewPos);
    vec3 centerNormal = normalize(cross(tangentX, tangentY));

    // clamp z to a minimum, so the radius does not get excessively large in screen-space
    vec2 projectedRadii = radiiProjection / max(-centerViewPos.z, 7.0);

    // do not take more steps than there are pixels
    float totalOcclusion = 0.0;

    vec2 randomFactors = texture2D(ditherTexture, vUv * ditherScale).xy;

    vec2 rayUV = vec2(0.0);
    for (int i = 0; i < NUM_RAYS; ++i) {
        rayUV.x = (float(i) + randomFactors.x) / float(NUM_RAYS);
        vec2 sampleDir = texture2D(sampleDirTexture, rayUV).xy * 2.0 - 1.0;
        totalOcclusion += getRayOcclusion(sampleDir, randomFactors.y, projectedRadii, centerViewPos, centerNormal);
    }

    totalOcclusion = 1.0 - clamp(strengthPerRay * totalOcclusion, 0.0, 1.0);
    gl_FragColor = vec4(vec3(totalOcclusion), 1.0);
}`;a["hbao_vertex.glsl"]=`uniform mat4 inverseProjectionMatrix;

varying vec2 vUv;
varying vec3 viewDir;
varying vec3 frustumCorner;

// view vector with z = -1, so we can use nearPlaneDist + linearDepth * (farPlaneDist - nearPlaneDist) as a scale factor to find view space position
vec3 hx_getLinearDepthViewVector(vec2 position)
{
    vec4 unproj = inverseProjectionMatrix * vec4(position, 0.0, 1.0);
    unproj /= unproj.w;
    return -unproj.xyz / unproj.z;
}

void main() {
    vUv = uv;
    viewDir = hx_getLinearDepthViewVector(position.xy);
    frustumCorner = hx_getLinearDepthViewVector(vec2(1.0, 1.0));
    gl_Position = vec4(position, 1.0);
}`;a["ssao_blur_fragment.glsl"]=`varying vec2 vUv1;
varying vec2 vUv2;
varying vec2 vUv3;
varying vec2 vUv4;

uniform sampler2D tDiffuse;

void main() {
    vec4 sum =  texture2D(tDiffuse, vUv1) +
                texture2D(tDiffuse, vUv2) +
                texture2D(tDiffuse, vUv3) +
                texture2D(tDiffuse, vUv4);

    gl_FragColor = sum * .25;
}`;a["ssao_blur_vertex.glsl"]=`varying vec2 vUv1;
varying vec2 vUv2;
varying vec2 vUv3;
varying vec2 vUv4;

uniform vec2 pixelSize;

void main() {
    vUv1 = uv + pixelSize * vec2(-1.5, .5);
    vUv2 = uv + pixelSize * vec2(.5, .5);
    vUv3 = uv + pixelSize * vec2(.5, -1.5);
    vUv4 = uv + pixelSize * vec2(-1.5, -1.5);
    gl_Position = vec4(position, 1.0);
}`;a["ssao_fragment.glsl"]=`#extension GL_OES_standard_derivatives : enable

uniform sampler2D tDiffuse;
uniform sampler2D ditherTexture;
uniform vec2 ditherScale;
uniform float cameraFrustumRange;
uniform float cameraNearPlaneDistance;
uniform float rcpFallOffDistance;
uniform float strengthPerSample;
uniform float sampleRadius;
uniform vec2 radiiProjection;   // .5 * proj[0][0] * sampleRadius, .5 * proj[1][1] * sampleRadius
uniform vec3 samples[NUM_SAMPLES]; // w contains bias

varying vec2 vUv;
varying vec3 viewDir;
varying vec3 frustumCorner;

float RGBA8ToFloat(vec4 rgba)
{
    return dot(rgba, vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0));
}

float readDepth(vec2 uv)
{
    vec4 s = texture2D(tDiffuse, uv);
    return RGBA8ToFloat(s);
}

vec3 getViewPos(vec2 sampleUV)
{
    float depth = readDepth(sampleUV);
    float viewZ = depth * cameraFrustumRange + cameraNearPlaneDistance;
    vec3 viewPos = frustumCorner * vec3(sampleUV * 2.0 - 1.0, 1.0);
    return viewPos * viewZ;
}

void main()
{
    float centerDepth = readDepth(vUv);
    float viewZ = cameraNearPlaneDistance + centerDepth * cameraFrustumRange;
    vec3 centerViewPos = viewZ * viewDir;
    vec3 tangentX = dFdx(centerViewPos);
    vec3 tangentY = dFdy(centerViewPos);
    vec3 centerNormal = normalize(cross(tangentX, tangentY));

    float totalOcclusion = 0.0;

    vec3 dither = texture2D(ditherTexture, vUv * ditherScale).xyz;
    vec3 randomPlaneNormal = normalize(dither - .5);

    float w = centerDepth * cameraFrustumRange + cameraNearPlaneDistance;
    vec3 sampleRadii;
    sampleRadii.xy = radiiProjection.xy / w;
    sampleRadii.z = sampleRadius;

    for (int i = 0; i < NUM_SAMPLES; ++i) {
        vec3 sampleOffset = reflect(samples[i], randomPlaneNormal);
        vec3 normOffset = sampleOffset;
        float cosFactor = dot(normOffset, centerNormal);
        float sign = sign(cosFactor);
        sampleOffset *= sign;
        cosFactor *= sign;

        vec3 scaledOffset = sampleOffset * sampleRadii;

        vec2 samplePos = vUv + scaledOffset.xy;
        float occluderDepth = readDepth(samplePos);
        float diffZ = (centerDepth - occluderDepth) * cameraFrustumRange;

        // distanceFactor: from 1 to 0, near to far
        float distanceFactor = clamp(diffZ * rcpFallOffDistance, 0.0, 1.0);
        distanceFactor = 1.0 - distanceFactor;

        // sampleOcclusion: 1 if occluding, 0 otherwise
        float sampleOcclusion = float(diffZ > scaledOffset.z);
        cosFactor = float(cosFactor > .1);
        totalOcclusion += sampleOcclusion * distanceFactor * cosFactor;
    }
    gl_FragColor = vec4(vec3(1.0 - totalOcclusion * strengthPerSample), 1.0);
}`;a["ssao_vertex.glsl"]=`uniform mat4 inverseProjectionMatrix;

varying vec2 vUv;
varying vec3 viewDir;
varying vec3 frustumCorner;

// view vector with z = -1, so we can use nearPlaneDist + linearDepth * (farPlaneDist - nearPlaneDist) as a scale factor to find view space position
vec3 hx_getLinearDepthViewVector(vec2 position)
{
    vec4 unproj = inverseProjectionMatrix * vec4(position, 0.0, 1.0);
    unproj /= unproj.w;
    return -unproj.xyz / unproj.z;
}

void main() {
    vUv = uv;
    viewDir = hx_getLinearDepthViewVector(position.xy);
    frustumCorner = hx_getLinearDepthViewVector(vec2(1.0, 1.0));
    gl_Position = vec4(position, 1.0);
}`;a["dof_fragment.glsl"]=`uniform sampler2D source;
uniform sampler2D blurred1;
uniform sampler2D blurred2;
uniform sampler2D depth;

uniform float strength;
uniform float focusDepth;
uniform float focusRange;
uniform float focusFalloff;

varying vec2 vUv;

void main()
{
    const float blendCutoff = .5;
    float depth = RGBA8ToFloat(texture2D(depth, vUv));
    float distance = abs(depth - focusDepth);

    float blurAmount = clamp((distance - focusRange) / focusFalloff, 0.0, 1.0);

    vec3 mainCol = decodeHDRE(texture2D(source, vUv));
    vec3 blurredCol1 = decodeHDRE(texture2D(blurred1, vUv));
    vec3 blurredCol2 = decodeHDRE(texture2D(blurred2, vUv));

    // for little blurs (0.0 - 0.25), use smaller amount, for (.5, 1.0), use larger blur
    float smallBlur = linearStep(0.0, blendCutoff, blurAmount);
    float largeBlur = linearStep(blendCutoff, 1.0, blurAmount);
    vec3 color = mix(blurredCol1, blurredCol2, largeBlur);
    color = mix(mainCol, color, smallBlur * strength);

    gl_FragColor = encodeHDRE(color);
}
`;a["gaussian_blur_hdre_fragment.glsl"]=`uniform sampler2D tDiffuse;

varying vec2 vUv;

uniform vec2 sampleStep;
uniform float weights[NUM_WEIGHTS];

void main()
{
    vec3 col = decodeHDRE(texture2D(tDiffuse, vUv)) * weights[0];

    for (int i = 1; i <= KERNEL_RADIUS; ++i) {
        vec2 offset = float(i) * sampleStep;
        col += (decodeHDRE(texture2D(tDiffuse, vUv + offset)) + decodeHDRE(texture2D(tDiffuse, vUv - offset))) * weights[i];
    }

    gl_FragColor = encodeHDRE(col);
}
`;a["lensflare_composite_fragment.glsl"]=`uniform sampler2D source;
uniform sampler2D flare;
uniform sampler2D lensDirt;
uniform float strength;

varying vec2 vUv;

void main()
{
// some kind of glare texture could be used to make the flare more interesting
    vec4 hdre = texture2D(source, vUv);
    vec3 color1 = decodeHDRE(hdre);
    vec3 lensDirt = texture2D(lensDirt, vUv).xyz;

    vec2 dir = .5 - vUv;
    vec4 hdreR = texture2D(flare, vUv);
    vec4 hdreG = texture2D(flare, vUv + dir * .03);
    vec4 hdreB = texture2D(flare, vUv + dir * .06);
    float r = (decodeHDRE(hdreR)).r;
    float g = (decodeHDRE(hdreG)).g;
    float b = (decodeHDRE(hdreB)).b;
    vec3 color2 = vec3(r, g, b) * lensDirt;
    // adding in gamma space, no one will know...
	gl_FragColor = encodeHDRE(color1 + color2 * strength);
}
`;a["lensflare_feature_fragment.glsl"]=`uniform sampler2D tDiffuse;
uniform float threshold;

varying vec2 uv1;
varying vec2 uv2;
varying vec2 uv3;
varying vec2 uv4;

vec3 readWithThreshold(vec2 uv)
{
    vec4 hdre = texture2D(tDiffuse, uv);
    vec3 color = decodeHDRE(hdre);
    color = max(color - vec3(threshold), vec3(0.0));

    return color;
}

float boundMask(vec2 uv)
{
    return float(uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0);
}

void main()
{
    vec3 color1 = readWithThreshold(uv1) * boundMask(uv1);
    vec3 color2 = readWithThreshold(uv2) * boundMask(uv2);
    vec3 color3 = readWithThreshold(uv3) * boundMask(uv3);
    vec3 color4 = readWithThreshold(uv4) * boundMask(uv4);
	gl_FragColor = encodeHDRE(color1 + color2 + color3 + color4);
}
`;a["lensflare_feature_vertex.glsl"]=`varying vec2 uv1;
varying vec2 uv2;
varying vec2 uv3;
varying vec2 uv4;

uniform float ratio1;
uniform float ratio2;
uniform float ratio3;
uniform float ratio4;

vec2 getFlippedUV(float ratio)
{
    return (uv * 2.0 - 1.0) * ratio * .5 + .5;
}

void main()
{
    gl_Position = vec4(position, 1.0);
    uv1 = getFlippedUV(ratio1);
    uv2 = getFlippedUV(ratio2);
    uv3 = getFlippedUV(ratio3);
    uv4 = getFlippedUV(ratio4);
}
`;a["post_vertex.glsl"]=`varying vec2 vUv;

void main()
{
    gl_Position = vec4(position, 1.0);
    vUv = uv;
}
`;a["post_z_vertex.glsl"]=`varying vec2 vUv;
varying vec3 viewVector;

uniform mat4 unprojectionMatrix;
uniform float nearClip;
uniform float farClip;


void main()
{
    gl_Position = vec4(position, 1.0);
    vUv = uv;
    vec4 unproj = unprojectionMatrix * vec4(position.xy, 0.0, 1.0);
    unproj /= unproj.w;
    viewVector = -unproj.xyz / unproj.z;
}
`;a["tiny_blur_hdre_fragment.glsl"]=`uniform sampler2D tDiffuse;

varying vec2 vUv;

uniform vec2 sampleStep;

void main()
{
    vec3 col = decodeHDRE(texture2D(tDiffuse, vUv - sampleStep * .5));
    col += decodeHDRE(texture2D(tDiffuse, vUv + sampleStep * vec2(1.5, -.5)));
    col += decodeHDRE(texture2D(tDiffuse, vUv + sampleStep * vec2(-.5, 1.5)));
    col += decodeHDRE(texture2D(tDiffuse, vUv + sampleStep * 1.5));

    gl_FragColor = encodeHDRE(col * .25);
}
`;a["tonemap_fragment.glsl"]=`uniform sampler2D tDiffuse;
uniform float exposure;

varying vec2 vUv;

void main()
{
    vec4 hdre = texture2D(tDiffuse, vUv);
    vec3 color = decodeHDRE(hdre);

//    color *= color * exposure;
//    color = max(vec3(0.0), color.xyz - 0.004);

	// this has pow 2.2 gamma included, not valid if using fast gamma correction

    // Jim Hejl and Richard Burgess-Dawson
	float a = 6.2;
    float b = .5;
    float c = 6.2;
    float d = 1.7;
    float e = 0.06;

	// ACES
	/*float a = 2.51;
    float b = 0.03;
    float c = 2.43;
    float d = 0.59;
    float e = 0.14;*/

//	gl_FragColor = vec4(saturate((color*(a*color+b))/(color*(c*color+d)+e)), 1.0);
	gl_FragColor = vec4(color, 1.0);
}
`;a["shadow_fragment.glsl"]=`varying vec4 projection;

uniform float depthBias;

void main()
{
    float depth = projection.z * .5 + .5;

    gl_FragColor = floatToRGBA8(depth + depthBias);
}
`;a["shadow_vertex.glsl"]=`varying vec4 projection;

void main()
{
    gl_Position = projection = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;a["vsm_blur_fragment.glsl"]=`#define RADIUS 1
#define NUM_SAMPLES (RADIUS * 2 + 1)

uniform sampler2D tDiffuse;
uniform vec2 step;

varying vec2 vUv;

vec2 getShadowValue(vec2 uv)
{
    vec4 s = texture2D(tDiffuse, uv);
    #ifdef FLOAT_TEX
    return s.xy;
    #else
    return vec2(RG8ToFloat(s.xy), RG8ToFloat(s.zw));
    #endif
}

void main() {
    vec2 sum = getShadowValue(vUv);

    for (int i = 1; i <= RADIUS; ++i) {
        float fi = float(i);
        sum += getShadowValue(vUv - step * fi);
        sum += getShadowValue(vUv + step * fi);
    }

    sum /= float(NUM_SAMPLES);
    #ifdef FLOAT_TEX
    gl_FragColor = vec4(sum, 0.0, 1.0);
    #else
    gl_FragColor.xy = floatToRG8(sum.x);
    gl_FragColor.zw = floatToRG8(sum.y);
    #endif
}`;a["vsm_blur_vertex.glsl"]=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}`;a["vsm_fragment.glsl"]=`varying vec4 projection;

void main()
{
    float depth = projection.z * .5 + .5;
    float dx = dFdx(depth);
    float dy = dFdy(depth);
    float moment2 = depth * depth + 0.25*(dx*dx + dy*dy);

    #ifdef FLOAT_TEX
    gl_FragColor = vec4(depth, moment2, 0.0, 1.0);
    #else
    gl_FragColor = vec4(floatToRG8(depth), floatToRG8(moment2));
    #endif
}
`;const w=function(e){e=e||{};var t="";e.color&&(e.color=new THREE.Color(e.color),e.color.convertGammaToLinear()),(e.fogDensity||e.fogColor)&&(t+=`#define FOG
`),e.hdre&&!e.blending&&(t+=`#define HDRE
`),e.map&&(t+=`#define ALBEDO_MAP
`);var n={color:{value:e.color||new THREE.Color(1,1,1)},albedoMap:{value:e.map},opacity:{value:e.opacity===void 0?1:e.opacity},fogDensity:{value:e.fogDensity||.1},fogColor:{value:e.fogColor}};THREE.ShaderMaterial.call(this,{uniforms:n,vertexShader:t+a.get("flat_vertex"),fragmentShader:t+a.get("flat_fragment")}),e.blending&&(this.blending=e.blending,this.transparent=!0,e.blending===THREE.AdditiveBlending&&e.hdre&&(this.blending=THREE.CustomBlending,this.blendSrc=THREE.OneFactor,this.blendDst=THREE.OneFactor,this.blendSrcAlpha=THREE.ZeroFactor,this.blendDstAlpha=THREE.ZeroFactor),e.blending===THREE.NormalBlending&&e.hdre&&(this.blending=THREE.CustomBlending,this.blendEquation=THREE.AddEquation,this.blendSrc=THREE.SrcAlphaFactor,this.blendDst=THREE.OneMinusSrcAlphaFactor,this.blendSrcAlpha=THREE.ZeroFactor,this.blendDstAlpha=THREE.OneMinusSrcAlphaFactor,this.blendEquationAlpha=THREE.AddEquation))};w.prototype=Object.create(THREE.ShaderMaterial.prototype);function P(e,t){m.call(this),this._texture=e,this._sunMesh=null,this._originObject=new THREE.Object3D,this._hdre=t,this._rotation=new THREE.Quaternion,this._rotation.setFromAxisAngle(new THREE.Vector3(0,0,1),60/180*Math.PI)}P.prototype=Object.create(m.prototype,{dayTime:{get:function(){return this._dayTime},set:function(e){var t=this.entity;this._dayTime=e;var n=(e-.5)*Math.PI*2;t.position.x=0,t.position.y=Math.cos(n),t.position.z=Math.sin(n),t.position.applyQuaternion(this._rotation),t.position.multiplyScalar(950),t.intensity=Math.max(Math.cos(n)+.25,0),this._originObject.position.copy(t.position),this._originObject.position.negate(),this._sunMesh.lookAt(this._originObject.position)}}});P.prototype.onAdded=function(){var e=new THREE.PlaneBufferGeometry(150,150,1,1),t=new w({map:this._texture,blending:THREE.AdditiveBlending,hdre:this._hdre});this._sunMesh=new THREE.Mesh(e,t),this.entity.add(this._sunMesh),e=new THREE.SphereGeometry(25,15,10),t=new w({color:new THREE.Color(10,10,10),hdre:this._hdre,opacity:.5});var n=new THREE.Mesh(e,t);this.entity.add(n)};P.prototype.onRemoved=function(){this._sunMesh=null,this.entity.remove(this._sunMesh)};const j=function(e){var t="";e=e||{},e.hdre&&(t+=`#define HDRE
`),e.cloudMap&&(t+=`#define CLOUD_MAP
`),e.nightMap&&(t+=`#define NIGHT_MAP
`);var n={lightDir:{value:new THREE.Vector3},cloudMap:{value:e.cloudMap},nightMap:{value:e.nightMap}};THREE.ShaderMaterial.call(this,{uniforms:n,vertexShader:t+a.get("dynamic_sky_vertex"),fragmentShader:t+a.get("dynamic_sky_fragment")})};j.prototype=Object.create(THREE.ShaderMaterial.prototype,{});const U=function(e){this._color=e.color||new THREE.Color(16777215),this._envMap=e.envMap;var t={invert:{value:e.flip?-1:1},envMap:{value:this._envMap},color:{value:this._color}};THREE.ShaderMaterial.call(this,{uniforms:t,vertexShader:a.get("sky_vertex"),fragmentShader:a.get("sky_fragment"),depthWrite:!1})};U.prototype=Object.create(THREE.ShaderMaterial.prototype,{color:{get:function(){return this._color},set:function(e){this._color=new THREE.Color(e),this.uniforms.color.value=e}},envMap:{get:function(){return this._envMap},set:function(e){this._envMap=e,this.uniforms.envMap.value=e}}});function W(e,t,n,i,o,r){this._skyboxCubeCamera=new THREE.CubeCamera(.1,100,n||512),this._irradianceCubeCamera=new THREE.CubeCamera(.1,100,4),this.skyboxTexture.format=THREE.RGBAFormat,this.irradianceTexture.format=THREE.RGBAFormat,this.skyboxTexture.minFilter=THREE.LinearMipMapLinearFilter,this.skyboxTexture.generateMipmaps=!0,this._light=t,this._renderer=e,this._lightPos=new THREE.Vector3,this._lightDir=new THREE.Vector3,this._initScene(i,o,r)}W.prototype={get skyboxTexture(){return this._skyboxCubeCamera.renderTarget.texture},get irradianceTexture(){return this._irradianceCubeCamera.renderTarget.texture},update:function(){this._lightPos.equals(this._light.position)||(this._lightPos.copy(this._light.position),this._lightDir.copy(this._light.position),this._lightDir.normalize(),this._skyboxMaterial.uniforms.lightDir.value=this._lightDir,this._skyboxCubeCamera.updateCubeMap(this._renderer,this._skyboxScene),this._irradianceCubeCamera.updateCubeMap(this._renderer,this._irradianceScene))},_initScene:function(e,t,n){this._skyboxMaterial=new j({hdre:e,cloudMap:t,nightMap:n});var i=new THREE.BoxGeometry(10,10,10);i.scale(1,-1,1);var o=new THREE.Mesh(i,this._skyboxMaterial);this._skyboxScene=new THREE.Scene,this._skyboxScene.add(o);var r=new U({envMap:this.skyboxTexture});o=new THREE.Mesh(i,r),this._irradianceScene=new THREE.Scene,this._irradianceScene.add(o)}};const X=function(e){var t="";e&&(t+=`#define FLOAT_TEX
`),THREE.ShaderMaterial.call(this,{vertexShader:a.get("shadow_vertex"),fragmentShader:t+a.get("vsm_fragment")}),this.extensions.derivatives=!0,this.side=THREE.BackSide};X.prototype=Object.create(THREE.ShaderMaterial.prototype);new THREE.Vector2,a.get("ssao_blur_vertex"),a.get("ssao_blur_fragment");const L={uniforms:{tDiffuse:{value:null},step:{value:new THREE.Vector2(1/512,0)}},vertexShader:a.get("vsm_blur_vertex"),fragmentShader:a.get("vsm_blur_fragment")},z={uniforms:{tDiffuse:{type:"t",value:null},exposure:{type:"f",value:1}},vertexShader:a.get("post_vertex"),fragmentShader:a.get("tonemap_fragment")},b={defines:{KERNEL_RADIUS:"5",NUM_WEIGHTS:"6"},uniforms:{tDiffuse:{value:null},sampleStep:{value:new THREE.Vector2},weights:{value:[]}},vertexShader:a.get("post_vertex"),fragmentShader:a.get("gaussian_blur_hdre_fragment")},N={uniforms:{source:{value:null},flare:{value:null},lensDirt:{value:null},strength:{value:1}},vertexShader:a.get("post_vertex"),fragmentShader:a.get("lensflare_composite_fragment")},I={uniforms:{tDiffuse:{type:"t",value:null},threshold:{type:"f",value:1},ratio1:{type:"f",value:1},ratio2:{type:"f",value:1/.5},ratio3:{type:"f",value:-1/.3},ratio4:{type:"f",value:-1/.6}},vertexShader:a.get("lensflare_feature_vertex"),fragmentShader:a.get("lensflare_feature_fragment")},B={uniforms:{tDiffuse:{value:null},sampleStep:{value:new THREE.Vector2},weights:{value:[]}},vertexShader:a.get("post_vertex"),fragmentShader:a.get("tiny_blur_hdre_fragment")},V={uniforms:{source:{value:null},blurred1:{value:null},blurred2:{value:null},depth:{value:null},strength:{value:1},focusDepth:{value:.5},focusRange:{value:.1},focusFalloff:{value:.1}},vertexShader:a.get("post_vertex"),fragmentShader:a.get("dof_fragment")};function S(e,t,n,i,o){i=i===void 0?1024:i,this.onUpdate=new _,this._shadowMap=new THREE.WebGLRenderTarget(i,i,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat,type:o?THREE.HalfFloatType:THREE.UnsignedByteType}),this._light=n,this._lightCamera=new THREE.OrthographicCamera(-30,30,-30,30,-50,50),this._size=i,this.shadowMapMatrix=new THREE.Matrix4,this.renderPass=new THREE.RenderPass(e,this._lightCamera,new X(o)),this.renderPass.clearColor=new THREE.Color(1,1,1),this.renderPass.clearAlpha=1,this.effectComposer=new THREE.EffectComposer(t,this._shadowMap),this.effectComposer.addPass(this.renderPass),L.defines=o?{FLOAT_TEX:1}:void 0,this.hBlur=new THREE.ShaderPass(L),this.vBlur=new THREE.ShaderPass(L),this.hBlur.uniforms.step.value=new THREE.Vector2(1/i,0),this.vBlur.uniforms.step.value=new THREE.Vector2(0,1/i),this.effectComposer.addPass(this.hBlur),this.effectComposer.addPass(this.vBlur),this.effectComposer.addPass(this.hBlur),this.effectComposer.addPass(this.vBlur)}S.prototype={get shadowMap(){return this._shadowMap.texture},get size(){return this._size},render:function(){var e=this._lightCamera;e.position.copy(this._light.position),e.lookAt(new THREE.Vector3(0,0,0)),e.position.set(0,0,0),e.updateProjectionMatrix(),e.updateMatrixWorld(),this.shadowMapMatrix.getInverse(e.matrixWorld),this.shadowMapMatrix.multiplyMatrices(e.projectionMatrix,this.shadowMapMatrix),this.effectComposer.render(1/60),this.onUpdate.dispatch()}};function Y(e,t){t=t||100;var n=new THREE.BoxGeometry(t,t,t);n.scale(-1,1,1);var i=new U({envMap:e});THREE.Mesh.call(this,n,i)}Y.prototype=Object.create(THREE.Mesh.prototype,{texture:{get:function(){return this.material.envMap},set:function(e){this.material.envMap=e}}});const K=function(e,t){this._bubbles=[],this._bubbleFalse=!0,this._camera=e,this._raycaster=new THREE.Raycaster,this._v=new THREE.Vector3,this._m=new THREE.Matrix4,this.onBubbleClicked=new _,this._container=t,this._initEventHandlers(),this.start()};K.prototype={get bubbles(){return this._bubbles},addBubble:function(e){this._bubbles.push(e)},start:function(){this._container.addEventListener("mousedown",this._onMouseDown),this._container.addEventListener("mouseup",this._onMouseUp),this._container.addEventListener("mousemove",this._onMouseMove),this._container.addEventListener("touchmove",this._onTouchMove),this._container.addEventListener("touchstart",this._onTouchStart),this._container.addEventListener("touchend",this._onTouchEnd)},stop:function(){this._container.removeEventListener("mousedown",this._onMouseDown),this._container.removeEventListener("mouseup",this._onMouseUp),this._container.removeEventListener("mousemove",this._onMouseMove),this._container.removeEventListener("touchmove",this._onTouchMove),this._container.removeEventListener("touchstart",this._onTouchStart),this._container.removeEventListener("touchend",this._onTouchEnd)},_initEventHandlers:function(){var e=this,t,n,i=!1;this._onMouseDown=function(o){window.isIdlePlay=!1,window._flightStarted=!0,window.stopIdleMode(),parent.userInteractionReceived&&parent.userInteractionReceived(),t=o.clientX,n=o.clientY,i=!0},this._onMouseMove=function(o){window.isIdlePlay=!1,window.stopIdleMode(),parent.userInteractionReceived&&parent.userInteractionReceived();var r=t-o.clientX,s=n-o.clientY;Math.sqrt(r*r+s*s)>5&&(i=!1)},this._onMouseUp=function(o){i&&e._handleClick(o.clientX,o.clientY),i=!1},this._onTouchStart=function(o){if(window.isIdlePlay=!1,window._flightStarted=!0,window.stopIdleMode(),parent.userInteractionReceived&&parent.userInteractionReceived(),i=!0,o.touches.length>=2){i=!1;return}else t=o.touches[0].clientX,n=o.touches[0].clientY},this._onTouchMove=function(o){window.isIdlePlay=!1,window.stopIdleMode(),parent.userInteractionReceived&&parent.userInteractionReceived();var r=o.touches[0].clientX-t,s=o.touches[0].clientY-n;Math.sqrt(r*r+s*s)>5&&(i=!1)},this._onTouchEnd=function(o){i&&e._handleClick(t,n),i=!1}},_getBubbleAt:function(e,t){var n=new THREE.Vector4;this._clientToNDC(e,t,n),this._raycaster.setFromCamera(n,this._camera);for(var i=this._raycaster.intersectObjects(this._bubbles),o=i.length,r=.094,s=.05,h=0;h<o;++h){var l=i[h];if(!(l.object.material.uniforms.opacity.value<1)){this._v.copy(l.point),this._m.getInverse(l.object.matrixWorld),this._v.applyMatrix4(this._m);var e=this._v.x,t=this._v.y-r,A=Math.sqrt(e*e+t*t);if(A<s)return l.object}}return null},_handleClick:function(e,t){var n=this._getBubbleAt(e,t);n&&this.onBubbleClicked.dispatch(n.name)},_clientToNDC:function(e,t,n){n.x=e/window.innerWidth*2-1,n.y=-(t/window.innerHeight)*2+1,n.z=-1,n.w=1}};function x(e,t,n,i,o,r){this.lookAtTarget=new THREE.Vector3(e,t,n),this.azimuth=i||0,this.polar=o||0,this.radius=r||0,this.quat=new THREE.Quaternion,this.position=new THREE.Vector3,this._updateTransform()}x.prototype={copyFromOrbitController:function(e){this.x=e.lookAtTarget.x,this.y=e.lookAtTarget.y,this.z=e.lookAtTarget.z,this.azimuth=e.azimuth,this.polar=e.polar,this.radius=e.radius,this._updateTransform()},_updateTransform:function(){this.position=this._fromSphericalCoordinates(this.radius,this.azimuth,this.polar),this.position.add(this.lookAtTarget);var e=new THREE.Matrix4;e.lookAt(this.position,this.lookAtTarget,new THREE.Vector3(0,1,0)),this.quat.setFromRotationMatrix(e)},_fromSphericalCoordinates:function(e,t,n){var i=new THREE.Vector3;return i.x=e*Math.sin(n)*Math.cos(t),i.y=e*Math.cos(n),i.z=e*Math.sin(n)*Math.sin(t),i}};const p=function(){m.call(this),this.onTravelComplete=new _,this._position=new THREE.Vector3(0,0,0),this._quat=new THREE.Quaternion(0,0,0),this._originalMatrixAutoUpdate=!1,this._tween=null,this._focusPoints={}};p.prototype=Object.create(m.prototype);p.prototype.onAdded=function(){this._originalMatrixAutoUpdate=this.entity.matrixAutoUpdate,this.entity.matrixAutoUpdate=!1};p.prototype.onRemoved=function(){this.entity.matrixAutoUpdate=this._originalMatrixAutoUpdate,this._tween&&this._tween.kill()};p.prototype._updateCamera=function(){var e=this.entity.matrix;e.makeRotationFromQuaternion(this._quat),e.setPosition(this._position),this.entity.matrixWorldNeedsUpdate=!0};p.prototype._fromSphericalCoordinates=function(e,t,n){var i=new THREE.Vector3;return i.x=e*Math.sin(n)*Math.cos(t),i.y=e*Math.cos(n),i.z=e*Math.sin(n)*Math.sin(t),i};p.prototype.addTarget=function(e,t){this._focusPoints[e]=t};p.prototype.copyState=function(e){this._position.setFromMatrixPosition(e.matrix),this._quat.setFromRotationMatrix(e.matrix)};p.prototype.goTo=function(e){var t=this._focusPoints[e];this._tween&&this._tween.kill();var n={ratio:0},i=this,o=this._quat.clone(),r=this._position.clone();this._tween=TweenLite.to(n,2,{ratio:1,onUpdate:function(){i._quat.copy(o),i._quat.slerp(t.quat,n.ratio),i._position.copy(r),i._position.lerp(t.position,n.ratio),i._updateCamera()},onComplete:function(){i.onTravelComplete.dispatch()}})};const v=function(e,t,n){m.call(this),this._container=t,this._coords=new THREE.Vector3(0,Math.PI*.4,2),this._localAcceleration=new THREE.Vector3(0,0,0),this._localVelocity=new THREE.Vector3(0,0,0),this.lookAtTarget=e||new THREE.Vector3(0,0,0),this.zoomSpeed=2,this.maxRadius=20,this.minRadius=.1,this.dampen=.9,this._oldMouseX=0,this._oldMouseY=0,this.maxAzimuth=void 0,this.minAzimuth=void 0,this.minPolar=.1,this.maxPolar=Math.PI-.1,this._originalMatrixAutoUpdate=!1,this._moveWithKeys=n,this.moveAcceleration=.02,this._moveAcceleration=new THREE.Vector3,this._moveVelocity=new THREE.Vector3,this._isDown=!1,this._initListeners()};v.prototype=Object.create(m.prototype,{radius:{get:function(){return this._coords.z},set:function(e){this._coords.z=e}},azimuth:{get:function(){return this._coords.x},set:function(e){this._coords.x=e}},polar:{get:function(){return this._coords.y},set:function(e){this._coords.y=e}}});v.prototype.setFrom=function(e){this._coords.x=e.azimuth,this._coords.y=e.polar,this._coords.z=e.radius,this.lookAtTarget.copy(e.lookAtTarget)};v.prototype.onAdded=function(){this._originalMatrixAutoUpdate=this.entity.matrixAutoUpdate,this.entity.matrixAutoUpdate=!1,this._isDown=!1;var e=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel";this._container.addEventListener(e,this._onMouseWheel),this._container.addEventListener("mousemove",this._onMouseMove),this._container.addEventListener("touchmove",this._onTouchMove),this._container.addEventListener("mousedown",this._onMouseDown),this._container.addEventListener("touchstart",this._onTouchDown),this._container.addEventListener("mouseup",this._onUp),this._container.addEventListener("touchend",this._onUp),this._moveWithKeys&&(document.addEventListener("keyup",this._onKeyUp),document.addEventListener("keydown",this._onKeyDown))};v.prototype.onRemoved=function(){this.entity.matrixAutoUpdate=this._originalMatrixAutoUpdate;var e=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel";this._container.removeEventListener(e,this._onMouseWheel),this._container.removeEventListener("mousemove",this._onMouseMove),this._container.removeEventListener("touchmove",this._onTouchMove),this._container.removeEventListener("mousedown",this._onMouseDown),this._container.removeEventListener("touchstart",this._onTouchDown),this._container.removeEventListener("mouseup",this._onUp),this._container.removeEventListener("touchend",this._onUp),this._moveWithKeys&&(document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("keydown",this._onKeyDown))};v.prototype.onUpdate=function(e){if(this._moveWithKeys){this._moveVelocity.x*=this.dampen,this._moveVelocity.y*=this.dampen,this._moveVelocity.z*=this.dampen,this._moveVelocity.x+=this._moveAcceleration.x,this._moveVelocity.y+=this._moveAcceleration.y,this._moveVelocity.z+=this._moveAcceleration.z;var t=new THREE.Vector3;t.copy(this._moveVelocity),t.applyQuaternion(this.entity.quaternion.setFromRotationMatrix(this.entity.matrixWorld)),this.lookAtTarget.x+=t.x,this.lookAtTarget.y+=this._moveVelocity.y,this.lookAtTarget.z+=t.z}this._localVelocity.x*=this.dampen,this._localVelocity.y*=this.dampen,this._localVelocity.z*=this.dampen,this._localVelocity.x+=this._localAcceleration.x,this._localVelocity.y+=this._localAcceleration.y,this._localVelocity.z+=this._localAcceleration.z,this._localAcceleration.x=0,this._localAcceleration.y=0,this._localAcceleration.z=0,this._coords.add(this._localVelocity),this._coords.y=THREE.Math.clamp(this._coords.y,this.minPolar,this.maxPolar),this._coords.z=THREE.Math.clamp(this._coords.z,this.minRadius,this.maxRadius),this.maxAzimuth!==void 0&&this.minAzimuth!==void 0&&(this._coords.x=THREE.Math.clamp(this._coords.x,this.minAzimuth,this.maxAzimuth));var n=this.entity.matrix,i=this._fromSphericalCoordinates(this._coords.z,this._coords.x,this._coords.y);i.add(this.lookAtTarget),n.lookAt(i,this.lookAtTarget,new THREE.Vector3(0,1,0)),n.setPosition(i),this.entity.matrixWorldNeedsUpdate=!0};v.prototype._fromSphericalCoordinates=function(e,t,n){var i=new THREE.Vector3;return i.x=e*Math.sin(n)*Math.cos(t),i.y=e*Math.cos(n),i.z=e*Math.sin(n)*Math.sin(t),i};v.prototype.setAzimuthImpulse=function(e){this._localAcceleration.x=e};v.prototype.setPolarImpulse=function(e){this._localAcceleration.y=e};v.prototype.setZoomImpulse=function(e){this._localAcceleration.z=e};v.prototype._updateMove=function(e,t){if(this._oldMouseX!==void 0){var n=e-this._oldMouseX,i=t-this._oldMouseY;this.setAzimuthImpulse(n*.0015),this.setPolarImpulse(-i*.0015)}this._oldMouseX=e,this._oldMouseY=t};v.prototype._initListeners=function(){var e=this;this._onMouseWheel=function(t){var n=t.detail?-120*t.detail:t.wheelDelta;e.setZoomImpulse(-n*e.zoomSpeed*1e-4)},this._onMouseDown=function(t){e._oldMouseX=void 0,e._oldMouseY=void 0,e._isDown=!0},this._onMouseMove=function(t){e._isDown&&e._updateMove(t.screenX,t.screenY)},this._onTouchDown=function(t){if(e._oldMouseX=void 0,e._oldMouseY=void 0,t.touches.length===2){var n=t.touches[0],i=t.touches[1],o=n.screenX-i.screenX,r=n.screenY-i.screenY;e._startPitchDistance=Math.sqrt(o*o+r*r),e._startZoom=e.radius}e._isDown=!0},this._onTouchMove=function(t){if(t.preventDefault(),!!e._isDown){var n=t.touches.length;if(n===1){var i=t.touches[0];e._updateMove(i.screenX,i.screenY)}else if(n===2){var o=t.touches[0],r=t.touches[1],s=o.screenX-r.screenX,h=o.screenY-r.screenY,l=Math.sqrt(s*s+h*h),A=e._startPitchDistance-l;e.radius=e._startZoom+A*.2}}},this._onUp=function(t){e._isDown=!1},this._onKeyUp=function(t){switch(t.keyCode){case 69:case 81:e._moveAcceleration.y=0;break;case 37:case 65:case 39:case 68:e._moveAcceleration.x=0;break;case 38:case 87:case 40:case 83:e._moveAcceleration.z=0;break}},this._onKeyDown=function(t){switch(t.keyCode){case 81:e._moveAcceleration.y=-e.moveAcceleration;break;case 69:e._moveAcceleration.y=e.moveAcceleration;break;case 37:case 65:e._moveAcceleration.x=-e.moveAcceleration;break;case 38:case 87:e._moveAcceleration.z=-e.moveAcceleration;break;case 39:case 68:e._moveAcceleration.x=e.moveAcceleration;break;case 40:case 83:e._moveAcceleration.z=e.moveAcceleration;break}}};const R=function(e){this._amplitude=1/Math.sqrt(2*e*Math.PI),this._expScale=-1/(2*e)};R.prototype={getValueAt:function(e){return this._amplitude*Math.pow(Math.E,e*e*this._expScale)}};R.fromRadius=function(e,t){t=t||.01;var n=e/Math.sqrt(-2*Math.log(t));return new R(n*n)};const O=function(e,t,n,i){THREE.Pass.call(this),e=e||10,t=t||1,i&&(N.defines=I.defines={HDRE:"1"},b.defines.HDRE="1"),this.featureSelection=new THREE.ShaderMaterial(I),this.featureSelection.uniforms.threshold.value=t,this.composite=new THREE.ShaderMaterial(N),this.composite.uniforms.strength.value=.5,this.composite.uniforms.lensDirt.value=n,b.defines.KERNEL_RADIUS=e,b.defines.NUM_WEIGHTS=e+1,this.blur=new THREE.ShaderMaterial(b),this.blur.uniforms.weights.value=this._getGaussian(e),this.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new THREE.Scene,this.quad=new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null),this.scene.add(this.quad)};O.prototype=Object.assign(Object.create(THREE.Pass.prototype),{constructor:O,render:function(e,t,n,i,o){var r=this.renderTarget1.width,s=this.renderTarget1.height;this.quad.material=this.featureSelection,this.featureSelection.uniforms.tDiffuse.value=n.texture,e.render(this.scene,this.camera,this.renderTarget1),this.quad.material=this.blur,this.blur.uniforms.tDiffuse.value=this.renderTarget1,this.blur.uniforms.sampleStep.value.x=1/r,this.blur.uniforms.sampleStep.value.y=0,e.render(this.scene,this.camera,this.renderTarget2),this.blur.uniforms.tDiffuse.value=this.renderTarget2,this.blur.uniforms.sampleStep.value.x=0,this.blur.uniforms.sampleStep.value.y=1/s,e.render(this.scene,this.camera,this.renderTarget1),this.quad.material=this.composite,this.composite.uniforms.source.value=n.texture,this.composite.uniforms.flare.value=this.renderTarget1.texture,e.render(this.scene,this.camera,t)},setSize:function(e,t){this.resolutionX=Math.floor(e),this.resolutionY=Math.floor(t);var n={minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat};this.renderTarget1=new THREE.WebGLRenderTarget(this.resolutionX,this.resolutionY,n),this.renderTarget2=new THREE.WebGLRenderTarget(this.resolutionX,this.resolutionY,n),this.renderTarget1.texture.generateMipmaps=!1,this.renderTarget2.texture.generateMipmaps=!1},_getGaussian:function(e){for(var t=R.fromRadius(e,.01),n=[],i=0,o=0;o<=e;++o){var r=t.getValueAt(o);n[o]=r,i+=o===0?r:r*2}for(var o=0;o<=e;++o)n[o]/=i;return n}});const Z=function(){var e={nearClip:{type:"f",value:0},farClip:{type:"f",value:0}};THREE.ShaderMaterial.call(this,{uniforms:e,vertexShader:a.get("linear_depth_vertex"),fragmentShader:a.get("linear_depth_fragment")})};Z.prototype=Object.create(THREE.ShaderMaterial.prototype);const H=function(e,t,n,i){THREE.Pass.call(this),n&&(V.defines=B.defines={HDRE:1}),this._focusPosition=new THREE.Vector3,this._focusFalloff=.5,this._focusRange=.5,this._v=new THREE.Vector3,this._hideList=i||[],this._visibilityState=[],this._camera=e,this._scene=t,this._linearDepthMaterial=new Z,this._linearDepthMaterial.uniforms.nearClip.value=e.near,this._linearDepthMaterial.uniforms.farClip.value=e.far,this._strength=1,this.copy=new THREE.ShaderMaterial(THREE.CopyShader),this.blur=new THREE.ShaderMaterial(B),this.composite=new THREE.ShaderMaterial(V),this._postCamera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),this._postScene=new THREE.Scene,this._postQuad=new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null),this._postScene.add(this._postQuad),this.focusRange=2,this.focusFalloff=5};H.prototype=Object.assign(Object.create(THREE.Pass.prototype,{focusPosition:{get:function(){return this._focusPosition},set:function(e){this._focusPosition=e}},focusFalloff:{get:function(){return this._focusFalloff},set:function(e){this._focusFalloff=e,this.composite.uniforms.focusFalloff.value=e/(this._camera.far-this._camera.near)}},focusRange:{get:function(){return this._focusRange},set:function(e){this._focusRange=e,this.composite.uniforms.focusRange.value=e/(this._camera.far-this._camera.near)}},strength:{get:function(){return this._strength},set:function(e){this._strength=e,this.composite.uniforms.strength.value=e,this.enabled=this._strength!==0}}}),{constructor:H,render:function(e,t,n,i,o){this._v.copy(this._focusPosition),this._v.applyMatrix4(this._camera.matrixWorldInverse),this.composite.uniforms.focusDepth.value=(-this._v.z-this._camera.near)/(this._camera.far-this._camera.near);for(var r=this.smallBlurRadiusTex.width,s=this.smallBlurRadiusTex.height,h=this._hideList.length,l=0;l<h;++l)this._visibilityState[l]=this._hideList[l].visible,this._hideList[l].visible=!1;this._scene.overrideMaterial=this._linearDepthMaterial,e.render(this._scene,this._camera,this.depthTarget),this._scene.overrideMaterial=null;for(var l=0;l<h;++l)this._hideList[l].visible=this._visibilityState[l];this._postQuad.material=this.copy,this.copy.uniforms.tDiffuse.value=n.texture,e.render(this._postScene,this._postCamera,this.smallBlurRadiusTex2),this._postQuad.material=this.blur,this.blur.uniforms.tDiffuse.value=this.smallBlurRadiusTex2.texture,this.blur.uniforms.sampleStep.value.x=1/r,this.blur.uniforms.sampleStep.value.y=1/s,e.render(this._postScene,this._postCamera,this.smallBlurRadiusTex),this.blur.uniforms.tDiffuse.value=this.smallBlurRadiusTex.texture,this.blur.uniforms.sampleStep.value.x=1.5/r,this.blur.uniforms.sampleStep.value.y=1.5/s,e.render(this._postScene,this._postCamera,this.largeBlurRadiusTex),this._postQuad.material=this.composite,this.composite.uniforms.depth.value=this.depthTarget.texture,this.composite.uniforms.source.value=n.texture,this.composite.uniforms.blurred1.value=this.smallBlurRadiusTex.texture,this.composite.uniforms.blurred2.value=this.largeBlurRadiusTex.texture,e.render(this._postScene,this._postCamera,t)},setSize:function(e,t){if(e=Math.floor(e),t=Math.floor(t),!(this.resolutionX===e&&this.resolutionY===t)){this.resolutionX=e,this.resolutionY=t;var n={minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat},i=e>>1,o=t>>1;this.depthTarget=new THREE.WebGLRenderTarget(e,t,n),this.smallBlurRadiusTex=new THREE.WebGLRenderTarget(i,o,n),this.smallBlurRadiusTex2=new THREE.WebGLRenderTarget(i,o,n),i=e>>2,o=t>>2,this.largeBlurRadiusTex=new THREE.WebGLRenderTarget(i,o,n),this.smallBlurRadiusTex.texture.generateMipmaps=!1,this.largeBlurRadiusTex.texture.generateMipmaps=!1}}});const y=function(){m.call(this),this._speed=.025,this._angle=0,this._lookAtRotationTarget=0,this._lookAtRotation=0,this._axisSpin=new THREE.Vector3(0,1,0),this._axisLook=new THREE.Vector3(0,0,1),this._lookQuat=new THREE.Quaternion,this._spinQuat=new THREE.Quaternion,this._totalQuat=new THREE.Quaternion};y.prototype=Object.create(m.prototype,{speed:{get:function(){return this._speed},set:function(e){this._speed=e}},axis:{get:function(){return this._axis},set:function(e){this._axis=e}},angle:{get:function(){return this._angle},set:function(e){this._angle=e}},lookAtRotation:{get:function(){return this._lookAtRotation},set:function(e){this._lookAtRotationTarget!==e&&(this._lookAtRotationTarget=e,TweenLite.to(this,2,{_lookAtRotation:e}))}}});y.prototype.onAdded=function(){console.log(this.entity.rotation.z),this.entity.rotation.z=Math.PI*2,console.log(this.entity.rotation.z)};y.prototype.onRemoved=function(){};y.prototype.onUpdate=function(e){this._angle+=e/1e3,this.entity.rotation.y+=this._speed};const T=function(e){m.call(this),this._bubbleIndex=0,this._bubbles=e,this._handle=null,this._tween=null};T.prototype=Object.create(m.prototype);T.prototype.onAdded=function(){this.entity.position.y=.095;var e=this;e.entity.material.uniforms.opacity.value=0,e.entity.scale.set(.75,.75,.75);var t=function(){if(e.entity){var n=e._bubbles[e._bubbleIndex++];e._bubbleIndex===e._bubbles.length&&(e._bubbleIndex=0),n.add(e.entity);var i={ratio:0};e._tween=TweenLite.to(i,2,{ratio:1,onUpdate:function(){var o=i.ratio,r=.75+o*.25;e.entity.material.uniforms.opacity.value=1-o,e.entity.scale.set(r,r,r)}}),e._handle=setTimeout(t,5e3)}};this._handle=setTimeout(t,5e3)};T.prototype.onRemoved=function(){clearTimeout(this._handle),this._tween&&this._tween.kill()};function F(e,t,n,i){i=i===void 0?1024:i,this.onUpdate=new Signal,this._renderer=t,this._scene=e,this._shadowMap=new THREE.WebGLRenderTarget(i,i,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat,stencilBuffer:!1}),this._light=n,this._lightCamera=new THREE.OrthographicCamera(-30,30,-30,30,-50,50),this._size=i,this.shadowMapMatrix=new THREE.Matrix4,this._shadowMaterial=new ShadowMaterial,this._white=new THREE.Color(1,1,1)}F.prototype={get shadowMap(){return this._shadowMap.texture},get size(){return this._size},render:function(){var e=this._lightCamera;e.position.copy(this._light.position),e.lookAt(new THREE.Vector3(0,0,0)),e.position.set(0,0,0),e.updateProjectionMatrix(),e.updateMatrixWorld(),this.shadowMapMatrix.getInverse(e.matrixWorld),this.shadowMapMatrix.multiplyMatrices(e.projectionMatrix,this.shadowMapMatrix),this._scene.overrideMaterial=this._shadowMaterial;var t=this._renderer.getClearColor();this._renderer.setClearColor(this._white),this._renderer.render(this._scene,e,this._shadowMap),this._renderer.setClearColor(t),this._scene.overrideMaterial=null,this.onUpdate.dispatch()},update:function(){}};const D=function(e){var t="";(e.skyboxPosition||e.skyboxSize)&&(t+=`#define LOCAL_SKYBOX
`),e.specularProbe&&(t+=`#define SPECULAR_PROBE
`),e.fogProbe&&(t+=`#define FOG_PROBE
`),e.irradianceProbe&&(t+=`#define IRRADIANCE_PROBE
`),e.hdre&&(t+=`#define HDRE
`),e.aoMap&&(t+=`#define AMBIENT_OCCLUSION_MAP
`),e.ditherShadow&&(t+=`#define DITHER_SHADOW
`),e.vsmFloat&&(t+=`#define VSM_FLOAT
`),e.lowPerformance||(t+=`#define PERFORMANCE_PROFILE_HIGH
`),e.faceNormals&&(t+=`#define FACE_NORMALS
`),e.ssaoRenderer&&(t+=`#define SSAO_MAP
`),e.color?(e.color=new THREE.Color(e.color),e.color.copyGammaToLinear(e.color)):e.color=new THREE.Color(16777215),e.specularProbeColor?(e.specularProbeColor=new THREE.Color(e.specularProbeColor),e.specularProbeColor.copyGammaToLinear(e.specularProbeColor)):e.specularProbeColor=new THREE.Color(1,1,1),this._specularProbeBoost=e.specularProbeBoost?Math.pow(2,e.specularProbeBoost):1,e.specularProbeColor.multiplyScalar(this._specularProbeBoost),e.roughness=e.roughness===void 0?.05:e.roughness,e.roughness===1&&(t+=`#define IGNORESPECULAR
`);var n;if(e.shadowRenderer&&(this._shadowRenderer=e.shadowRenderer,t+=`#define SHADOW_MAP
`,this._shadowRenderer.onUpdate.bind(this._onShadowUpdate,this)),e.shadowRenderer instanceof S)t+=`#define VSM_SHADOW_MAP
`;else if(e.shadowRenderer instanceof F){t+=`#define PCF_SHADOW_MAP
`;var i=e.lowPerformance?1:6;t+="#define NUM_SHADOW_SAMPLES "+i+`
`,t+="#define RCP_NUM_SHADOW_SAMPLES float("+1/i+`)
`,this._shadowRadius=e.shadowRadius||.75,n=this._generateShadowPoints(i,this._shadowRadius)}(e.fogDensity||e.fogColor)&&(t+=`#define FOG
`),e.fogColor=new THREE.Color(e.fogColor||16777215),e.fogColor.copyGammaToLinear(e.fogColor);var o={alpha:{value:1},fogProbe:{value:e.fogProbe},fogProbeBoost:{value:e.fogProbeBoost?Math.pow(2,e.irradianceProbeBoost):1},fogDensity:{value:e.fogDensity||.1},fogColor:{value:e.fogColor},shadowOffsets:{value:n},color:{value:e.color},normalMapScale1:{value:e.normalMapScale1||.25},normalMapScale2:{value:e.normalMapScale2||.1},normalMapOffset1:{value:e.normalMapOffset1||new THREE.Vector2},normalMapOffset2:{value:e.normalMapOffset2||new THREE.Vector2(.3,.3)},rcpNormalStrength:{value:e.normalStrength===void 0?4:1/e.normalStrength},celSpecularCutOff:{value:e.celSpecularCutOff||1},roughnessSqr:{value:e.roughness*e.roughness},normalSpecularReflection:{value:.027},normalMap:{value:e.normalMap},ssaoMap:{value:e.ssaoRenderer?e.ssaoRenderer.texture:null},shadowMapSize:{value:this._shadowRenderer?this._shadowRenderer.size:1},shadowMapPixelSize:{value:this._shadowRenderer?1/this._shadowRenderer.size:1},aoMap:{value:e.aoMap},shadowMap:{value:this._shadowRenderer?this._shadowRenderer.shadowMap:null},shadowMatrix:{value:new THREE.Matrix4},skyboxPosition:{value:e.skyboxPosition?e.skyboxPosition:new THREE.Vector3},skyboxSize:{value:e.skyboxSize?e.skyboxSize:10},specularProbe:{value:e.specularProbe},specularProbeColor:{value:e.specularProbeColor},irradianceProbe:{value:e.irradianceProbe},irradianceProbeBoost:{value:e.irradianceProbeBoost?Math.pow(2,e.irradianceProbeBoost):1}},r=e.ignoreLights?o:THREE.UniformsUtils.merge([o,THREE.UniformsLib.lights]);THREE.ShaderMaterial.call(this,{uniforms:r,lights:!e.ignoreLights,vertexShader:t+a.get("water_vertex"),fragmentShader:t+a.get("water_fragment")}),e.map&&(this.uniforms.albedoMap.value=e.map),e.map2&&(this.uniforms.albedoMap2.value=e.map2),this.uniforms.normalMap.value=e.normalMap,e.specularProbe&&(this.uniforms.specularProbe.value=e.specularProbe),e.fogProbe&&(this.uniforms.fogProbe.value=e.fogProbe),e.irradianceProbe&&(this.uniforms.irradianceProbe.value=e.irradianceProbe),e.aoMap&&(this.uniforms.aoMap.value=e.aoMap),e.ssaoRenderer&&(this.uniforms.ssaoMap.value=e.ssaoRenderer.target),this._shadowRenderer&&(this.uniforms.shadowMap.value=this._shadowRenderer.shadowMap,this.uniforms.shadowMapSize.value=this._shadowRenderer.size,this.uniforms.shadowMapPixelSize.value=1/this._shadowRenderer.size)};D.prototype=Object.create(THREE.ShaderMaterial.prototype);D.prototype._onShadowUpdate=function(){this.uniforms.shadowMatrix.value=this._shadowRenderer.shadowMapMatrix,this.uniforms.shadowMap.value=this._shadowRenderer.shadowMap,this.uniforms.shadowMapSize.value=this._shadowRenderer.size,this.uniforms.shadowMapPixelSize.value=1/this._shadowRenderer.size};D.prototype._generateShadowPoints=function(e,t){var n;if(t/=this._shadowRenderer.size,e===5)n=[],n.push(new THREE.Vector2),n.push(new THREE.Vector2(.5*t,-t)),n.push(new THREE.Vector2(t,.5*t)),n.push(new THREE.Vector2(-.5*t,t)),n.push(new THREE.Vector2(-t,-.5*t));else{var i=new PoissonDisk;i.generatePoints(e),n=i.getPoints();for(var o=0;o<e;++o){var r=n[o];r.multiplyScalar(t)}}return n};const C=function(e){var t="";e.map&&(t+=`#define ALBEDO_MAP
`),(e.skyboxPosition||e.skyboxSize)&&(t+=`#define LOCAL_SKYBOX
`),e.specularProbe&&(t+=`#define SPECULAR_PROBE
`),e.fogProbe&&(t+=`#define FOG_PROBE
`),e.irradianceProbe&&(t+=`#define IRRADIANCE_PROBE
`),e.normalMap&&(t+=`#define NORMAL_MAP
`),e.roughnessMap&&(t+=`#define ROUGHNESS_MAP
`),e.emissionMap&&(t+=`#define EMISSION_MAP
`),e.hdre&&(t+=`#define HDRE
`),e.aoMap&&(t+=`#define AMBIENT_OCCLUSION_MAP
`),e.aoOnDiffuse&&(t+=`#define AO_ON_DIFFUSE
`),e.ditherShadow&&(t+=`#define DITHER_SHADOW
`),e.vsmFloat&&(t+=`#define VSM_FLOAT
`),e.lowPerformance||(t+=`#define PERFORMANCE_PROFILE_HIGH
`),e.faceNormals&&(t+=`#define FACE_NORMALS
`),e.ssaoRenderer&&(t+=`#define SSAO_MAP
`),e.color?(e.color=new THREE.Color(e.color),e.color.copyGammaToLinear(e.color)):e.color=new THREE.Color(16777215),e.emissionColor?(e.emissionColor=new THREE.Color(e.emissionColor),e.emissionColor.copyGammaToLinear(e.emissionColor)):e.emissionColor=new THREE.Color(0,0,0),e.specularProbeColor?(e.specularProbeColor=new THREE.Color(e.specularProbeColor),e.specularProbeColor.copyGammaToLinear(e.specularProbeColor)):e.specularProbeColor=new THREE.Color(1,1,1),this._specularProbeBoost=e.specularProbeBoost?Math.pow(2,e.specularProbeBoost):1,e.specularProbeColor.multiplyScalar(this._specularProbeBoost),e.roughness=e.roughness===void 0?.05:e.roughness,e.roughness===1&&(t+=`#define IGNORESPECULAR
`);var n;if(e.shadowRenderer&&(this._shadowRenderer=e.shadowRenderer,t+=`#define SHADOW_MAP
`,this._shadowRenderer.onUpdate.bind(this._onShadowUpdate,this)),e.shadowRenderer instanceof S)t+=`#define VSM_SHADOW_MAP
`;else if(e.shadowRenderer instanceof F){t+=`#define PCF_SHADOW_MAP
`;var i=e.lowPerformance?1:6;t+="#define NUM_SHADOW_SAMPLES "+i+`
`,t+="#define RCP_NUM_SHADOW_SAMPLES float("+1/i+`)
`,this._shadowRadius=e.shadowRadius||.75,n=this._generateShadowPoints(i,this._shadowRadius)}(e.fogDensity||e.fogColor)&&(t+=`#define FOG
`),e.fogColor=new THREE.Color(e.fogColor||16777215),e.fogColor.copyGammaToLinear(e.fogColor);var o={alpha:{value:1},fogProbe:{value:e.fogProbe},fogProbeBoost:{value:e.fogProbeBoost?Math.pow(2,e.irradianceProbeBoost):1},fogDensity:{value:e.fogDensity||.1},fogColor:{value:e.fogColor},albedoMap:{value:e.map},shadowOffsets:{value:n},color:{value:e.color},celSpecularCutOff:{value:e.celSpecularCutOff||1},roughness:{value:e.roughness},normalSpecularReflection:{value:.027},normalMap:{value:e.normalMap},ssaoMap:{value:e.ssaoRenderer?e.ssaoRenderer.texture:null},emissionMap:{value:e.emissionMap},emissionColor:{value:e.emissionColor},roughnessMap:{value:e.roughnessMap},roughnessMapRange:{value:e.roughnessMapRange||.3},shadowMapSize:{value:this._shadowRenderer?this._shadowRenderer.size:1},shadowMapPixelSize:{value:this._shadowRenderer?1/this._shadowRenderer.size:1},aoMap:{value:e.aoMap},shadowMap:{value:this._shadowRenderer?this._shadowRenderer.shadowMap:null},shadowMatrix:{value:new THREE.Matrix4},skyboxPosition:{value:e.skyboxPosition?e.skyboxPosition:new THREE.Vector3},skyboxSize:{value:e.skyboxSize?e.skyboxSize:10},specularProbe:{value:e.specularProbe},specularProbeColor:{value:e.specularProbeColor},irradianceProbe:{value:e.irradianceProbe},irradianceProbeBoost:{value:e.irradianceProbeBoost?Math.pow(2,e.irradianceProbeBoost):1}},r=e.ignoreLights?o:THREE.UniformsUtils.merge([o,THREE.UniformsLib.lights]);THREE.ShaderMaterial.call(this,{uniforms:r,lights:!e.ignoreLights,vertexShader:t+a.get("dielectric_vertex"),fragmentShader:t+a.get("dielectric_fragment")}),e.map&&(this.uniforms.albedoMap.value=e.map),e.map2&&(this.uniforms.albedoMap2.value=e.map2),e.normalMap&&(this.extensions.derivatives=!0,this.uniforms.normalMap.value=e.normalMap),e.faceNormals&&(this.extensions.derivatives=!0),e.specularProbe&&(this.uniforms.specularProbe.value=e.specularProbe),e.fogProbe&&(this.uniforms.fogProbe.value=e.fogProbe),e.irradianceProbe&&(this.uniforms.irradianceProbe.value=e.irradianceProbe),e.aoMap&&(this.uniforms.aoMap.value=e.aoMap),e.roughnessMap&&(this.uniforms.roughnessMap.value=e.roughnessMap),e.emissionMap&&(this.uniforms.emissionMap.value=e.emissionMap),e.ssaoRenderer&&(this.uniforms.ssaoMap.value=e.ssaoRenderer.target),this._shadowRenderer&&(this.uniforms.shadowMap.value=this._shadowRenderer.shadowMap,this.uniforms.shadowMapSize.value=this._shadowRenderer.size,this.uniforms.shadowMapPixelSize.value=1/this._shadowRenderer.size)};C.prototype=Object.create(THREE.ShaderMaterial.prototype);C.prototype._onShadowUpdate=function(){this.uniforms.shadowMatrix.value=this._shadowRenderer.shadowMapMatrix,this.uniforms.shadowMap.value=this._shadowRenderer.shadowMap,this.uniforms.shadowMapSize.value=this._shadowRenderer.size,this.uniforms.shadowMapPixelSize.value=1/this._shadowRenderer.size};C.prototype._generateShadowPoints=function(e,t){var n;if(t/=this._shadowRenderer.size,e===5)n=[],n.push(new THREE.Vector2),n.push(new THREE.Vector2(.5*t,-t)),n.push(new THREE.Vector2(t,.5*t)),n.push(new THREE.Vector2(-.5*t,t)),n.push(new THREE.Vector2(-t,-.5*t));else{var i=new PoissonDisk;i.generatePoints(e),n=i.getPoints();for(var o=0;o<e;++o){var r=n[o];r.multiplyScalar(t)}}return n};const E=function(e,t){this._camera=e,this._constantSize=t,this._v=new THREE.Vector3};E.prototype=Object.create(m.prototype);E.prototype.onAdded=function(){};E.prototype.onRemoved=function(){};E.prototype.onUpdate=function(e){this._v.setFromMatrixPosition(this._camera.matrixWorld),this.entity.lookAt(this._v),this._constantSize&&(this._v.copy(this.entity.position),this._v.applyMatrix4(this._camera.matrixWorldInverse),this.entity.scale.set(-this._v.z,-this._v.z,-this._v.z))};const g={setAll:function(e,t){for(var n=0;n<e.children.length;++n){var i=e.children[n];i.material=t,g.setAll(i,t)}},swapSelect:function(e,t){for(var n=0;n<e.children.length;++n){var i=e.children[n];t.hasOwnProperty(i.name)&&(i.material=t[i.name]),g.swapSelect(i,t)}},swapSelectPartialMatch:function(e,t){for(var n=0;n<e.children.length;++n){var i=e.children[n];for(var o in t)t.hasOwnProperty(o)&&i.name.indexOf(o)>=0&&(i.material=t[o]);g.swapSelect(i,t)}}},Q={findByNamePartial:function(e,t,n){n===void 0&&(n=[]);for(var i=0;i<e.children.length;++i){var o=e.children[i];o.name.indexOf(t)>=0&&n.push(o),Q.findByNamePartial(o,t,n)}return n}},M={"focus-hotels":{camera:{focus:[-4.19,2.5,-9.39],orbit:[-1.58,1.44,20.86]},bubble:{assetName:"bubble-hotels",position:[-25.6102486,-106.3891144,70.6502304]},dof:{position:[3,.5,-10],range:5}},"focus-retail":{camera:{focus:[51.67,-1.5,-28.15],orbit:[28.59,1.47,57.2]},bubble:{assetName:"bubble-retail",position:[-143.525,-440.092,17.628]},dof:{position:[14.05,.5,-43.41],range:5}},"focus-logistics":{camera:{focus:[88.76,-12.9,30.38],orbit:[-2.68,1.28,64.62]},bubble:{assetName:"bubble-logistics",position:[-526.959549,123.0580902,20.5037594]},dof:{position:[1.68,1.28,94.62],range:2}},"focus-office":{camera:{focus:[22.22,.5,15.97],orbit:[-2.45,1.17,42.8]},bubble:{assetName:"bubble-office",position:[-124.65652,-11.85072,110.1954]},dof:{position:[16.38,5.5,-3.39],range:2}},"focus-residential":{camera:{focus:[3.1,.5,-26.25],orbit:[-2.79,1.34,10]},bubble:{assetName:"bubble-residential",position:[-60.071,-307.962,22]},dof:{position:[5.58,.5,-30.47],range:2}},"focus-property":{camera:{focus:[29.35,-6,8.24],orbit:[28.92,1.47,75.8]},bubble:{assetName:"bubble-property",position:[193.4118347,-334.03006,13.81783]},dof:{position:[-19.05,.5,-33.24],range:3}},"focus-energy":{camera:{focus:[-38.11,2.5,27.7],orbit:[30.99,1.44,57.56]},bubble:{assetName:"bubble-energy",position:[196.9653625,393.73688,55]},dof:{position:[-16.59,4.5,35.6],range:9}}};function J(){this.onActiveMarkerChanged=new _,this._shadowRenderer=null,this._skyboxRenderer=null,this._skybox=null,this._scene=null,this._camera=null,this._assetLibrary=null,this.effectComposer=null,this._hdre=highPerformance,this._timeOfDayInvalid=!0,this._floatExt=null,this._bubbleClickDetector=null,this._currentState="home",this._turbineComponents=null,this._waterMaterial=null,this._bubbleAnimation=null,this._bubbleAnimationComponent=null,this._homeTravelPoint=null,this._dofEffect=null,this._historyStack=[this._currentState],this._focusNames=[],this._isFirstRun=!0,window.isIdlePlay=!0,window._flightStarted=!1,window._idleMode=null,window.idleCount=0}J.prototype={init:function(e){var t=this;this._scene=e.scene,this._camera=e.camera,this._renderer=e.renderer,this._assetLibrary=e.assetLibrary,this._container=document.getElementById("webglcontainer");var n=this._renderer.extensions;this._bubbleClickDetector=new K(this._camera,this._container),this._bubbleClickDetector.onBubbleClicked.bind(this._onBubbleClicked,this);var i=this._renderer.extensions.get("WEBGL_debug_renderer_info");if(!highPerformance&&i!==null){var o=this._renderer.getContext().getParameter(i.UNMASKED_RENDERER_WEBGL);o.indexOf("PowerVR")>=0&&(this._floatExt=highPerformance?null:n.get("OES_texture_half_float_linear"))}if(this._initCameraController(e.debugMode),this._camera.far=3e3,this._sunComponent=new P(this._assetLibrary.get("solar-flare")),this._light=new THREE.DirectionalLight(16777215),f.convert(this._light,[this._sunComponent]),this._skyboxRenderer=new W(this._renderer,this._light,256,this._hdre,this._assetLibrary.get("cloud-env")),this._shadowRenderer=new S(this._scene,this._renderer,this._light,1024,this._floatExt),this._skybox=new Y(this._skyboxRenderer.skyboxTexture,this._camera.far),this._scene.add(this._skybox),this._scene.add(this._light),this._initScene(),e.debugMode){var r=document.getElementById("dayTimeSlider");r.addEventListener("input",function(){TweenLite.to(t._sunComponent,.25,{dayTime:r.value,onUpdate:function(){t._timeOfDayInvalid=!0}})}),this._sunComponent.dayTime=r.value}else this._sunComponent.dayTime=.5;this._processData(),this._initBubbleAnimation(),this._initEffectChain()},jumpNext:function(){var e=this._focusNames.indexOf(this._currentState);e=(e+1)%this._focusNames.length;var t=this._focusNames[e];this._setActiveState(t),this._historyStack.push(t)},startIdleMode:function(){window.idleCount=0,window._idleMode&&clearInterval(window._idleMode),window._idleMode=setInterval(function(){window.isIdlePlay&&(mainProject.content.jumpNext(),window._flightStarted=!0,window.idleCount++,window.idleCount===9&&(parent.idleRotationEnded&&parent.idleRotationEnded(),window.isIdlePlay=!1,clearInterval(window._idleMode))),window.isIdlePlay=!0},3e3)},stopIdleMode:function(){clearInterval(window._idleMode),window.isIdlePlay=!1},jumpPrevious:function(){var e=this._focusNames.indexOf(this._currentState);e<=0&&(e=this._focusNames.length);var t=this._focusNames[--e];this._setActiveState(t),this._historyStack.push(t)},jumpBack:function(){if(this._historyStack.length!==1){this._historyStack.pop();var e=this._historyStack[this._historyStack.length-1];this._setActiveState(e)}},jumpHome:function(){this._setActiveState("home"),this._historyStack.push("home")},start:function(){if(this._isFirstRun){this._isFirstRun=!1;var e=this._homeTravelPoint.lookAtTarget;TweenLite.to(this._orbitController.lookAtTarget,3,{ease:Power2.easeOut,x:e.x,y:e.y,z:e.z}),TweenLite.to(this._orbitController,3,{ease:Power2.easeInOut,azimuth:this._homeTravelPoint.azimuth,radius:this._homeTravelPoint.radius,polar:this._homeTravelPoint.polar})}},resize:function(e,t){this._lensFlare.setSize(e*.18,t*.18),this._dofEffect.setSize(e,t)},update:function(e){if(this._waterMaterial.uniforms.normalMapOffset1.value.x+=e*1e-4,this._waterMaterial.uniforms.normalMapOffset1.value.y+=e*7e-5,this._waterMaterial.uniforms.normalMapOffset2.value.x+=-e*15e-6,this._waterMaterial.uniforms.normalMapOffset2.value.y+=-e*5e-6,this._shadowRenderer&&this._timeOfDayInvalid){this._skyboxRenderer.update(),this._skybox.visible=!1;for(var t=this._bubbleClickDetector.bubbles,n=0;n<t.length;++n)t[n].visible=!1;this._shadowRenderer.render(),this._skybox.visible=!0;for(var n=0;n<t.length;++n)this._timeOfDayInvalid=!1}var i=document.getElementById("positionField");i.innerHTML=this._orbitController.lookAtTarget.x.toFixed(2)+", "+this._orbitController.lookAtTarget.y.toFixed(2)+", "+this._orbitController.lookAtTarget.z.toFixed(2),i=document.getElementById("orientationField"),i.innerHTML=this._orbitController._coords.x.toFixed(2)+", "+this._orbitController._coords.y.toFixed(2)+", "+this._orbitController._coords.z.toFixed(2)},destroy:function(){},_initEffectChain:function(){this._hdre&&(z.defines={HDRE:"1"});var e=new THREE.RenderPass(this._scene,this._camera),t=new O(10,1,this._assetLibrary.get("lens-dirt"),this._hdre),n=new THREE.ShaderPass(z);this._dofEffect=new H(this._camera,this._scene,this._hdre),this._dofEffect.strength=0,this.effectComposer=new THREE.EffectComposer(this._renderer),this.effectComposer.addPass(e),this.effectComposer.addPass(this._dofEffect),this._hdre&&this.effectComposer.addPass(t,this._renderer.width*.25,this._renderer.height*.25),this.effectComposer.addPass(n),n.renderToScreen=!0,this._lensFlare=t},_initScene:function(){var e=this._createMaterial(this._assetLibrary.get("city-atlas"),this._assetLibrary.get("city-ao"),!0),o=this._assetLibrary.get("city-model");f.convert(o),o.scale.set(.1,.1,.1),this._scene.add(o),g.setAll(o,e),this._waterMaterial=this._createWaterMaterial(this._assetLibrary.get("city-ao")),g.swapSelect(o,{water:this._waterMaterial});var t=Q.findByNamePartial(o,"Windraxxxd");this._turbineComponents=[];for(var n=0;n<t.length;++n)this._turbineComponents.push(new y),t[n].addComponent(this._turbineComponents[n]);e=this._createMaterial(null,null,!1);var i=new THREE.PlaneBufferGeometry(2e3,2e3,5,5);i.rotateX(-Math.PI*.5);var o=new THREE.Mesh(i,e);o.position.y=-1,o.renderOrder=5e4,this._scene.add(o),this._initCloudLayers()},_initBubbleAnimation:function(){var e=new w({map:this._assetLibrary.get("bubble-animation"),blending:THREE.NormalBlending,hdre:this._hdre});e.depthWrite=!1;var t=new THREE.PlaneBufferGeometry(.15,.15,1,1);this._bubbleAnimation=new THREE.Mesh(t,e),this._bubbleAnimation.renderOrder=5e3,this._scene.add(this._bubbleAnimation),this._bubbleAnimationComponent=new T(this._bubbleClickDetector.bubbles),this._bubbleAnimation.addComponent(this._bubbleAnimationComponent)},_initCloudLayers:function(){},_createWaterMaterial:function(e){return new D({color:3034998,aoMap:e,normalMap:this._assetLibrary.get("water-normals"),fogProbe:this._skyboxRenderer.skyboxTexture,irradianceProbe:this._skyboxRenderer.irradianceTexture,specularProbe:this._skyboxRenderer.skyboxTexture,roughness:.01,hdre:this._hdre,fogDensity:.004,shadowRenderer:this._shadowRenderer,lowPerformance:!highPerformance,vsmFloat:this._floatExt})},_createMaterial:function(e,t,n){return new C({map:e,aoMap:t,fogProbe:this._skyboxRenderer.skyboxTexture,irradianceProbe:this._skyboxRenderer.irradianceTexture,irradianceProbeBoost:0,roughness:.25,hdre:this._hdre,fogDensity:.004,shadowRenderer:n?this._shadowRenderer:null,aoOnDiffuse:!0,lowPerformance:!highPerformance,vsmFloat:this._floatExt})},_addMarker:function(e,t,n,i,o){var r=new w({map:this._assetLibrary.get(e),blending:THREE.NormalBlending,hdre:this._hdre});r.depthWrite=!1,n*=.1,i*=.1,o*=.1;var s=.16,h=new THREE.PlaneBufferGeometry(s,s,1,1);h.translate(0,s*.5,0);var l=new THREE.Mesh(h,r);l.renderOrder=1e4,l.position.set(-n,o,i),l.name=t,l.visible=!1,this._scene.add(l),l.addComponent(new E(this._camera,1)),this._focusNames.push(t),this._bubbleClickDetector.addBubble(l)},_onBubbleClicked:function(e){this._setActiveState(e),window.isIdlePlay||this._historyStack.push(e)},_setActiveState:function(e){if(this._currentState==="home"&&(this._camera.hasComponent(this._orbitController)&&(this._camera.removeComponent(this._orbitController),this._homeTravelPoint.copyFromOrbitController(this._orbitController),this._camera.addComponent(this._travelController),this._travelController.copyState(this._camera)),this._bubbleAnimation.removeComponent(this._bubbleAnimationComponent),this._bubbleAnimation.visible=!1),e!=="home"){var t=M[e].dof;this._dofEffect.focusPosition.x=t.position[0],this._dofEffect.focusPosition.y=t.position[1],this._dofEffect.focusPosition.z=t.position[2],this._dofEffect.focusRange=t.range}window.isIdlePlay?TweenLite.to(this._dofEffect,2,{strength:0}):TweenLite.to(this._dofEffect,2,{strength:e==="home"?0:.5}),this._travelController.goTo(e);for(var n=0;n<this._turbineComponents.length;++n)this._turbineComponents[n].lookAtRotation=e==="focus-energy"?-1:0;this._currentState=e,this._currentState==="home"&&(this._bubbleAnimation.addComponent(this._bubbleAnimationComponent),this._bubbleAnimation.visible=!0);var i=this._bubbleClickDetector.bubbles,o=i.length;if(!window.isIdlePlay){var r={opacity:1};TweenLite.to(r,2,{opacity:0,onUpdate:function(){for(var s=0;s<o;++s){var h=e==="home"?1:r.opacity;i[s].material.uniforms.opacity.value=h}}})}if(window.isIdlePlay)for(var n=0;n<o;++n)i[n].material.uniforms.opacity.value=1},_initCameraController:function(e){this._homeTravelPoint=new x(3,.5,-10,-1.7,1.35,64.62);var t=new p,n=new v(null,this._container,e);n.zoomSpeed=20,n.minRadius=19,e&&(n.minRadius=10),n.maxRadius=90,n.maxPolar=Math.PI*.5-.1,n.minPolar=.5,n.setFrom(new x(3,.5,-10,-1.72,.82,90)),f.convert(this._camera,[n]),t.onTravelComplete.bind(this.onTravelComplete,this),this._travelController=t,this._orbitController=n},onTravelComplete:function(){this._currentState==="home"&&(this._camera.removeComponent(this._travelController),this._camera.addComponent(this._orbitController)),this.onActiveMarkerChanged.dispatch(this._currentState)},_processData:function(){this._focusNames=[];for(var e in M)if(M.hasOwnProperty(e)){var t=M[e],n=t.bubble.position,i=t.camera.focus,o=t.camera.orbit;this._travelController.addTarget(e,new x(i[0],i[1],i[2],o[0],o[1],o[2])),this._addMarker(t.bubble.assetName,e,n[0],n[1],n[2])}this._travelController.addTarget("home",this._homeTravelPoint)}};var $;window.highPerformance=$;var u;window.mainProject=u;var d;window.assetLibrary=d;var ee=function(){for(var e={},t=window.location.search.substring(1),n=t.split("&"),i=0;i<n.length;i++){var o=n[i].split("=");if(typeof e[o[0]]>"u")e[o[0]]=decodeURIComponent(o[1]);else if(typeof e[o[0]]=="string"){var r=[e[o[0]],decodeURIComponent(o[1])];e[o[0]]=r}else e[o[0]].push(decodeURIComponent(o[1]))}return e}();function te(){$=!me()&&!ee.lowPerformance,d=new c("assets/"),d.queueAsset("city-model","models/Stadtlayout_39.json",c.Type.MODEL,THREE.ObjectLoader),d.queueAsset("city-atlas","textures/Atlas_albedo.png",c.Type.TEXTURE_2D),d.queueAsset("city-ao","textures/Stadt_AO.png",c.Type.TEXTURE_2D),d.queueAsset("water-normals","textures/wavemap2.png",c.Type.TEXTURE_2D),d.queueAsset("lens-dirt","textures/testLensDirt.jpg",c.Type.TEXTURE_2D),d.queueAsset("solar-flare","textures/solar-flare.png",c.Type.TEXTURE_2D),d.queueAsset("cloud-layer","textures/sky/cloud-layer.png",c.Type.TEXTURE_2D),d.queueAsset("cloud-env","textures/sky/clouds-cube/",c.Type.TEXTURE_CUBE),d.queueAsset("bubble-energy","textures/bubbles/bubble-vorlage_energy.png",c.Type.TEXTURE_2D),d.queueAsset("bubble-hotels","textures/bubbles/bubble-vorlage_hotels.png",c.Type.TEXTURE_2D),d.queueAsset("bubble-logistics","textures/bubbles/bubble-vorlage_logistics.png",c.Type.TEXTURE_2D),d.queueAsset("bubble-office","textures/bubbles/bubble-vorlage_office.png",c.Type.TEXTURE_2D),d.queueAsset("bubble-property","textures/bubbles/bubble-vorlage_property.png",c.Type.TEXTURE_2D),d.queueAsset("bubble-residential","textures/bubbles/bubble-vorlage_residential.png",c.Type.TEXTURE_2D),d.queueAsset("bubble-retail","textures/bubbles/bubble-vorlage_retail.png",c.Type.TEXTURE_2D),d.queueAsset("bubble-animation","textures/bubbles/bubble-animation.png",c.Type.TEXTURE_2D),d.onComplete.bind(oe),d.onProgress.bind(ie),d.load()}var ne=!0;window.onload=te;function ie(e){try{application.webglProgress(e)}catch{}}function oe(e){var t=document.getElementById("debugBox");t&&(t.style.display="inline"),u=new G,u.init(ne,e),u.content=new J,u.content.onActiveMarkerChanged.bind(fe);try{application.webglInitComplete()}catch{}u.start()}function re(){u.content.startIdleMode()}window.startIdleMode=re;function ae(){u.content.stopIdleMode()}window.stopIdleMode=ae;function se(){u.content.jumpNext()}window.jumpNext=se;function le(){u.content.jumpPrevious()}window.jumpPrevious=le;function ce(){u.content.jumpHome()}window.jumpHome=ce;function de(){u.content.jumpBack()}window.jumpBack=de;function fe(e){try{window.isIdlePlay?window._flightStarted=!1:application.openLayer(e)}catch{}}function he(){u.start()}window.startRendering=he;function ue(){u.stop()}window.stopRendering=ue;function me(){var e=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent);return e||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent)}
