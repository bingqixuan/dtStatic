(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-0ea7b972"], {
        "21fe": function(e, t, a) {},
        "27d7": function(e, t, a) {},
        "2a2f": function(e, t, a) {},
        "30de": function(e, t, a) {
            "use strict";
            a("ee74")
        },
        "3be2": function(e, t, a) {},
        "3de7": function(e, t, a) {
            "use strict";
            a.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "index-wapper "
                    }, [a("div", {
                        staticClass: "school3D-stats",
                        class: {
                            showStatas: e.showStatas
                        },
                        attrs: {
                            "data-msg": "帧速率"
                        }
                    }), e.showUI ? a("div", {
                        staticClass: "index-mask",
                        class: [0 == e.xiaotaiyang.timeMode ? "day" : "night", 0 == e.xiaotaiyang.pageMode ? "hasMask" : "hasPureMask"]
                    }) : e._e(), a("school3D", {
                        ref: "school3d",
                        staticClass: "index-school3d"
                    }), e.showUI ? a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == e.xiaotaiyang.loader.loaderStatus,
                            expression: "xiaotaiyang.loader.loaderStatus == 1"
                        }],
                        staticClass: "index-main"
                    }, [a("div", {
                        staticClass: "index-header"
                    }, [a("xty-header"), a("div", {
                        staticClass: "index-h-button"
                    }, [a("switch-tab", {
                        attrs: {
                            data: e.model
                        },
                        on: {
                            swicthTab: e.swicthTab
                        }
                    })], 1)], 1), a("div", {
                        staticClass: "router-main"
                    }, [a("router-view")], 1), a("xty-footer", {
                        staticClass: "index-footer"
                    })], 1) : e._e()], 1)
                },
                s = [],
                n = a("06c4"),
                o = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "school3D-wapper",
                        class: e.currentScene
                    }, [0 == e.xiaotaiyang.loader.loaderStatus ? a("div", {
                        staticClass: "school3D-loader"
                    }, [e._m(0), a("p", [e._v(" 当前正在加载第："), a("span", [e._v(e._s(e.xiaotaiyang.loader.loaderCurrent))]), e._v("个文件，总共："), a("span", [e._v(e._s(e.xiaotaiyang.loader.loaderTotal))]), e._v("个文件 ")])]) : e._e(), a("div", {
                        attrs: {
                            id: "js-canvas"
                        }
                    })])
                },
                r = [function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "loading"
                    }, [a("div", {
                        staticClass: "arc"
                    }), a("div", {
                        staticClass: "arc"
                    }), a("div", {
                        staticClass: "arc"
                    })])
                }],
                c = (a("d30f"), a("0344")),
                l = a("97ee"),
                h = a("b42e"),
                u = (a("aa0c"), a("4789"), a("6819"), a("34df"), a("a297"), a("551d")),
                d = (a("f749"), a("85c3")),
                m = a("faa4"),
                g = a("bdab"),
                f = a("9680"),
                p = a("6f88"),
                x = a("5bb6"),
                y = a("794d"),
                v = a("aa4f"),
                w = a("a18c"),
                b = (a("324e"), a("d835"), a("c424"), a("4360")),
                T = a("3859"),
                M = a("fe2f"),
                P = a("ed1c"),
                C = a("8568"),
                _ = "./digital/xiaotaiyang",
                j = "lowp",
                S = {
                    data: [{
                        switchTimeMode: !0,
                        CHS_NAME: "智能设备",
                        name: "equipment",
                        modelPath: "".concat(_, "/models/glb/monitoring.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/monitoring.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/monitoring.jpg")
                    }, {
                        switchTimeMode: !0,
                        CHS_NAME: "路灯",
                        name: "streetLamp",
                        modelPath: "".concat(_, "/models/glb/streetLamp.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/monitoring.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/monitoring.jpg")
                    }, {
                        CHS_NAME: "图书馆",
                        name: "library",
                        switchTimeMode: !0,
                        modelPath: "".concat(_, "/models/glb/library.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/library.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/library.jpg")
                    }, {
                        switchTimeMode: !0,
                        CHS_NAME: "体育馆",
                        name: "stadium",
                        modelPath: "".concat(_, "/models/glb/stadium.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/stadium.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/stadium.jpg")
                    }, {
                        switchTimeMode: !0,
                        CHS_NAME: "食堂",
                        name: "dining",
                        modelPath: "".concat(_, "/models/glb/dining.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/dining.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/dining.jpg")
                    }, {
                        switchTimeMode: !0,
                        CHS_NAME: "围栏",
                        name: "fence",
                        modelPath: "".concat(_, "/models/glb/fence.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/fence.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/fence.jpg")
                    }, {
                        switchTimeMode: !0,
                        CHS_NAME: "钟表",
                        name: "clock",
                        modelPath: "".concat(_, "/models/glb/clock.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/clock.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/clock.jpg")
                    }, {
                        switchTimeMode: !0,
                        CHS_NAME: "操场",
                        name: "playground",
                        modelPath: "".concat(_, "/models/glb/playground.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/playground.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/playground.jpg")
                    }, {
                        CHS_NAME: "宿舍",
                        switchTimeMode: !0,
                        name: "dorm",
                        modelPath: "".concat(_, "/models/glb/dorm.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/dorm.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/dorm.jpg")
                    }, {
                        switchTimeMode: !0,
                        CHS_NAME: "地面",
                        name: "ground",
                        modelPath: "".concat(_, "/models/glb/ground.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/ground.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/ground.jpg")
                    }, {
                        CHS_NAME: "教学楼A1",
                        switchTimeMode: !0,
                        group: "teaching",
                        name: "teaching_A1",
                        modelPath: "".concat(_, "/models/glb/teaching_A1.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/teaching_A1.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/teaching_A1.jpg")
                    }, {
                        CHS_NAME: "教学楼A2",
                        switchTimeMode: !0,
                        group: "teaching",
                        name: "teaching_A2",
                        modelPath: "".concat(_, "/models/glb/teaching_A2.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/teaching_A2.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/teaching_A2.jpg")
                    }, {
                        CHS_NAME: "教学楼A3",
                        switchTimeMode: !0,
                        group: "teaching",
                        name: "teaching_A3",
                        modelPath: "".concat(_, "/models/glb/teaching_A3.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/teaching_A3.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/teaching_A3.jpg")
                    }, {
                        CHS_NAME: "教学楼A4",
                        switchTimeMode: !0,
                        group: "teaching",
                        name: "teaching_A4",
                        modelPath: "".concat(_, "/models/glb/teaching_A4.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/teaching_A4.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/teaching_A4.jpg")
                    }, {
                        CHS_NAME: "教学楼B1",
                        switchTimeMode: !0,
                        group: "teaching",
                        name: "teaching_B1",
                        modelPath: "".concat(_, "/models/glb/teaching_B1.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/teaching_A1.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/teaching_A1.jpg")
                    }, {
                        CHS_NAME: "教学楼B2",
                        switchTimeMode: !0,
                        group: "teaching",
                        name: "teaching_B2",
                        modelPath: "".concat(_, "/models/glb/teaching_B2.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/teaching_A2.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/teaching_A2.jpg")
                    }, {
                        CHS_NAME: "教学楼B3",
                        switchTimeMode: !0,
                        group: "teaching",
                        name: "teaching_B3",
                        modelPath: "".concat(_, "/models/glb/teaching_B3.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/teaching_A3.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/teaching_A3.jpg")
                    }, {
                        CHS_NAME: "教学楼B4",
                        switchTimeMode: !0,
                        group: "teaching",
                        name: "teaching_B4",
                        modelPath: "".concat(_, "/models/glb/teaching_B4.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/teaching_A4.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/teaching_A4.jpg")
                    }, {
                        switchTimeMode: !0,
                        CHS_NAME: "校门",
                        name: "gate",
                        modelPath: "".concat(_, "/models/glb/gate.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/gate.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/gate.jpg")
                    }, {
                        CHS_NAME: "行政楼A1",
                        switchTimeMode: !0,
                        group: "office",
                        name: "office_A1",
                        modelPath: "".concat(_, "/models/glb/office_A1.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/office_A1.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/office_A1.jpg")
                    }, {
                        CHS_NAME: "行政楼A2",
                        switchTimeMode: !0,
                        group: "office",
                        name: "office_A2",
                        modelPath: "".concat(_, "/models/glb/office_A2.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/teaching_A1.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/teaching_A1.jpg")
                    }, {
                        CHS_NAME: "行政楼A3",
                        switchTimeMode: !0,
                        group: "office",
                        name: "office_A3",
                        modelPath: "".concat(_, "/models/glb/office_A3.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/office_A3.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/office_A3.jpg")
                    }, {
                        CHS_NAME: "监控",
                        switchTimeMode: !0,
                        category: "classroom",
                        name: "monitoring",
                        modelPath: "".concat(_, "/models/glb/classroom/monitoring.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/classroom/monitoring.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/classroom/monitoring.jpg")
                    }, {
                        CHS_NAME: "教室",
                        category: "classroom",
                        switchTimeMode: !0,
                        name: "classroom",
                        modelPath: "".concat(_, "/models/glb/classroom/classroom.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/classroom/classroom.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/classroom/classroom.jpg")
                    }, {
                        CHS_NAME: "桌椅",
                        category: "classroom",
                        switchTimeMode: !0,
                        name: "tablesAndChairs",
                        modelPath: "".concat(_, "/models/glb/classroom/tablesAndChairs.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/classroom/tablesAndChairs.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/classroom/tablesAndChairs.jpg")
                    }, {
                        CHS_NAME: "其他",
                        category: "classroom",
                        switchTimeMode: !0,
                        name: "other",
                        modelPath: "".concat(_, "/models/glb/classroom/other.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/classroom/other.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/classroom/other.jpg")
                    }, {
                        CHS_NAME: "书本",
                        category: "classroom",
                        name: "book",
                        modelPath: "".concat(_, "/models/glb/classroom/book.obj"),
                        color: 16777215
                    }, {
                        CHS_NAME: "窗户",
                        category: "classroom",
                        switchTimeMode: !0,
                        name: "window",
                        modelPath: "".concat(_, "/models/glb/classroom/window.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/classroom/window.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/classroom/window.jpg")
                    }, {
                        CHS_NAME: "窗帘",
                        category: "classroom",
                        switchTimeMode: !0,
                        name: "curtain",
                        modelPath: "".concat(_, "/models/glb/classroom/curtain.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/classroom/curtain.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/classroom/curtain.jpg")
                    }, {
                        CHS_NAME: "门",
                        switchTimeMode: !0,
                        category: "classroom",
                        name: "door",
                        modelPath: "".concat(_, "/models/glb/classroom/door.glb"),
                        dayTexturesPath: "".concat(_, "/images/textures/").concat(j, "/day/classroom/door.jpg"),
                        nightTexturesPath: "".concat(_, "/images/textures/").concat(j, "/night/classroom/door.jpg")
                    }, {
                        CHS_NAME: "标题",
                        name: "title",
                        modelPath: "".concat(_, "/models/glb/title.obj"),
                        color: 12531254
                    }, {
                        CHS_NAME: "NPC城市",
                        name: "npc",
                        modelPath: "".concat(_, "/models/glb/npc.obj"),
                        color: 16777215
                    }, {
                        CHS_NAME: "特效_飞线",
                        name: "effects_line",
                        texturesPath: "".concat(_, "/images/effects/line.png")
                    }, {
                        CHS_NAME: "转场图",
                        name: "transition03",
                        texturesPath: "./digital/public/transition/transition3.png"
                    }],
                    sky: {
                        day: {
                            path: "./digital/xiaotaiyang/images/sky/",
                            names: ["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]
                        },
                        night: {
                            path: "./digital/xiaotaiyang/images/sky/",
                            names: ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]
                        }
                    }
                },
                k = function() {
                    function e(t) {
                        Object(l["a"])(this, e), this.fnc = t, this.models = {}, this.textures = {
                            day: {},
                            night: {}
                        }, this.skyResources = S.sky, this.skyDayTexture = null, this.skyNightTexture = null, this.effects = {}, this.LoadingResources()
                    }
                    return Object(h["a"])(e, [{
                        key: "LoadingResources",
                        value: function() {
                            var e = this;
                            this.manager = new u["LoadingManager"], this.manager.onStart = function(e, t, a) {
                                console.log("开始加载资源文件")
                            }, this.manager.onLoad = function(t, a, i) {
                                var s = {
                                    loaderText: "",
                                    loaderCurrent: a,
                                    loaderTotal: i,
                                    loaderUrl: t,
                                    loaderStatus: 1
                                };
                                b["a"].commit("xiaotaiyang/SET_LOADER", s), e.fnc()
                            }, this.manager.onProgress = function(e, t, a, i) {
                                var s = S.data.find((function(t) {
                                        return t.modelPath == e || t.texturesPath == e
                                    })),
                                    n = "全景背景";
                                s && (n = s.CHS_NAME);
                                var o = {
                                    loaderText: n,
                                    loaderCurrent: t,
                                    loaderTotal: a,
                                    loaderUrl: e,
                                    loaderStatus: 0
                                };
                                b["a"].commit("xiaotaiyang/SET_LOADER", o)
                            }, this.manager.onError = function(e) {
                                console.log("加载失败：" + e)
                            }, this.skyDayTexture = new u["CubeTextureLoader"](this.manager).setPath(this.skyResources.day.path).load(this.skyResources.day.names), this.skyNightTexture = new u["CubeTextureLoader"](this.manager).setPath(this.skyResources.night.path).load(this.skyResources.night.names), this.textureLoader = new u["TextureLoader"](this.manager), this.objLoader = new M["a"](this.manager);
                            var t = new T["a"](this.manager),
                                a = new P["a"];
                            a.setDecoderPath("./three/draco/gltf/"), t.setDRACOLoader(a), t.setDDSLoader(new C["a"]), S.data.forEach((function(a) {
                                var i = a.texturesPath ? a.texturesPath.match(/\.([a-z]+)$/) : null;
                                if (i && i[1]) {
                                    var s = i[1];
                                    "png" !== s && "jpg" !== s || e.textureLoader.load(a.texturesPath, (function(t) {
                                        t.extData = a, t.name = a.name, e.textures[a.name] = t
                                    }))
                                }
                                var n = a.dayTexturesPath ? a.dayTexturesPath.match(/\.([a-z]+)$/) : null;
                                if (n && n[1]) {
                                    var o = n[1];
                                    "png" !== o && "jpg" !== o || e.textureLoader.load(a.dayTexturesPath, (function(t) {
                                        t.extData = a, t.name = a.name, t.timeMOde = "day", e.textures["day"][a.name] = t
                                    }))
                                }
                                var r = a.nightTexturesPath ? a.nightTexturesPath.match(/\.([a-z]+)$/) : null;
                                if (r && r[1]) {
                                    var c = r[1];
                                    "png" !== c && "jpg" !== c || e.textureLoader.load(a.nightTexturesPath, (function(t) {
                                        t.extData = a, t.name = a.name, t.timeMOde = "night", e.textures["night"][a.name] = t
                                    }))
                                }
                                var l = a.modelPath ? a.modelPath.match(/\.([a-z]+)$/) : null;
                                if (l && l[1]) {
                                    var h = l[1];
                                    "obj" === h ? e.objLoader.load(a.modelPath, (function(t) {
                                        t.extData = a, t.hasMode = !!a.switchTimeMode, t.format = "obj", e.models[a.name] = t
                                    })) : "glb" !== h && "gltf" !== h || t.load(a.modelPath, (function(t) {
                                        var i = t.scene;
                                        i.extData = a, i.hasMode = !!a.switchTimeMode, i.format = "glb", e.models[a.name] = i
                                    }))
                                }
                            }))
                        }
                    }]), e
                }(),
                A = a("cef1"),
                L = !1,
                D = 1;
            D = L ? 1 : 10;
            var E = {
                    spectorFlag: !1,
                    statsFlag: !0,
                    gridHelperFlag: !1,
                    axesHelpr: 0,
                    useBgTexture: 2,
                    showGUI: !0,
                    scale: D,
                    useShader: L,
                    controls: {
                        resistanceFlag: !0,
                        classroomResistanceFlag: !0,
                        enabled: !0,
                        autoRotate: !0,
                        autoRotateSpeed: .4
                    },
                    camera: {
                        position: {
                            x: 0 * D,
                            y: 150 * D,
                            z: 280 * D
                        },
                        rotation: {
                            x: -.5835044583339193,
                            y: -.02798370845439764,
                            z: -.01847001720125269
                        }
                    },
                    light: {
                        day: {
                            ambientLightIntensity: .6,
                            directionalLightIntensity: .3
                        },
                        night: {
                            ambientLightIntensity: .2,
                            directionalLightIntensity: .1
                        }
                    }
                },
                H = function() {
                    function e(t) {
                        Object(l["a"])(this, e), this._options = t, this.scene = null, this.camera = null, this.controls = null, this.render = null, this.initScenes(), this.createControls()
                    }
                    return Object(h["a"])(e, [{
                        key: "initScenes",
                        value: function() {
                            var e = this;
                            this.scene = new u["Scene"], this.scene.fog = new u["FogExp2"](12311805, 1e-5, 1e4);
                            var t = {
                                minFilter: u["LinearFilter"],
                                magFilter: u["LinearFilter"],
                                format: u["RGBFormat"],
                                stencilBuffer: !1
                            };
                            this.scene.fbo = new u["WebGLRenderTarget"](window.innerWidth, window.innerHeight, t), this.scene.render = function(t, a) {
                                a ? (e._options.renderer.setRenderTarget(e.scene.fbo), e._options.renderer.clear(), e._options.renderer.render(e.scene, e.camera)) : (e._options.renderer.setRenderTarget(null), e._options.renderer.render(e.scene, e.camera))
                            }, this.camera = new u["PerspectiveCamera"](45, window.innerWidth / window.innerHeight, 1, 1e5), Object.assign(this.camera.position, E.camera.position)
                        }
                    }, {
                        key: "createControls",
                        value: function() {
                            this.controls = new A["a"](this.camera, this._options.renderer.domElement), this.controls.autoRotate = E.controls.autoRotate, this.controls.autoRotateSpeed = E.controls.autoRotateSpeed, this.controls.enabled = E.controls.enabled, this.controls.enableDamping = !0, this.controls.enableZoom = !0, this.controls.enablePan = !0, this.controls.dynamicDampingFactor = 2
                        }
                    }]), e
                }(),
                O = (a("ae77"), a("0b10"), a("14b1"), a("e203"), a("ac1c"), a("2a11"), a("337c"), a("9b5f"), a("a21f"), a("f40f"), a("ae20"), a("fe9e"), a("3911"), a("7946"), a("caae"), a("03ef"), a("c2bd"), a("8a57"), a("e5ee"), a("26a9"), a("e5e4"), a("1a34"), a("4ab0"), a("e56a"), a("5a28"), a("0777"), a("c21f"), a("73f5"), a("50d9"), a("d0b9")),
                R = function() {
                    function e() {
                        Object(l["a"])(this, e), this.particlesGroup = new u["Group"], this.spriteLightTexture3 = null, this.firefliesMaterial = null
                    }
                    return Object(h["a"])(e, [{
                        key: "animation",
                        value: function() {
                            var e = 5e-5 * Date.now();
                            this.particlesGroup.children.forEach((function(t, a) {
                                t.rotation.y = e * (a < 4 ? a + 1 : -(a + 1))
                            })), this.firefliesMaterial && (this.firefliesMaterial.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2)), this.spriteLightTexture3 && (this.spriteLightTexture3.offset.x -= .01)
                        }
                    }, {
                        key: "createFireflies",
                        value: function(e) {
                            for (var t = "\n        void main()\n        {\n            float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n            float strength = 0.05 / distanceToCenter - 0.1;\n\n            gl_FragColor = vec4(1.0, 1.0, 1.0, strength);\n            \n        }", a = "\n      uniform float uTime;\n      uniform float uPixelRatio;\n      uniform float uSize;\n      \n      attribute float aScale;\n      \n      void main()\n      {\n          vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n          modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2;\n      \n          vec4 viewPosition = viewMatrix * modelPosition;\n          vec4 projectionPosition = projectionMatrix * viewPosition;\n      \n          gl_Position = projectionPosition;\n          \n          gl_PointSize = uSize * aScale * uPixelRatio;\n          // gl_PointSize *= (1.0 / - viewPosition.z);\n          gl_PointSize = 20.0;\n      }", i = new u["BufferGeometry"], s = 300, n = new Float32Array(3 * s), o = new Float32Array(s), r = 0; r < s; r++) n[3 * r + 0] = 40 * (Math.random() - .5), n[3 * r + 1] = 1.5 * Math.random() * 5, n[3 * r + 2] = 40 * (Math.random() - .5), o[r] = Math.random();
                            i.setAttribute("position", new u["BufferAttribute"](n, 3)), i.setAttribute("aScale", new u["BufferAttribute"](o, 1)), this.firefliesMaterial = new u["ShaderMaterial"]({
                                uniforms: {
                                    uTime: {
                                        value: 0
                                    },
                                    uPixelRatio: {
                                        value: Math.min(window.devicePixelRatio, 2)
                                    },
                                    uSize: {
                                        value: 1e3
                                    }
                                },
                                vertexShader: a,
                                fragmentShader: t,
                                transparent: !1,
                                blending: u["AdditiveBlending"],
                                depthWrite: !1
                            });
                            var c = new u["Points"](i, this.firefliesMaterial);
                            return c.renderOrder = 9, c.scale.set(50, 50, 50), c
                        }
                    }, {
                        key: "createParticle",
                        value: function(e) {
                            this.geometry = new u["Geometry"];
                            for (var t = 200, a = new u["PointsMaterial"]({
                                    size: .7 * E.scale * 2,
                                    transparent: !0,
                                    opactity: 1,
                                    color: 1680351
                                }), i = 0; i < t; i++) {
                                var s = new u["Vector3"];
                                s.x = 600 * Math.random() - 300, s.y = 200 * Math.random() - 0, s.z = 600 * Math.random() - 300, this.geometry.vertices.push(s)
                            }
                            var n = new u["PointCloud"](this.geometry, a);
                            return n.layers = e, this.particlesGroup.add(n), this.particlesGroup.scale.set(E.scale, E.scale, E.scale), this.particlesGroup
                        }
                    }, {
                        key: "createLine",
                        value: function(e) {
                            for (var t = this, a = 10, i = [], s = 0; s < a; s++) {
                                var n = [];
                                n[0] = 600 * Math.random() - 300, n[1] = 0, n[2] = 600 * Math.random() - 300, i.push(n)
                            }
                            var o = new u["Group"];
                            this.spriteLightTexture3 = e, this.spriteLightTexture3.wrapS = this.spriteLightTexture3.wrapT = u["RepeatWrapping"], this.spriteLightTexture3.repeat.set(1, 1), this.spriteLightTexture3.needsUpdate = !0;
                            var r = new u["MeshBasicMaterial"]({
                                map: this.spriteLightTexture3,
                                transparent: !0,
                                depthTest: !1
                            });
                            return i.forEach((function(e, a) {
                                var i = t.createAnimateLine({
                                    type: "pipe",
                                    pointList: [e, [e[0], e[1] + 200, e[2]]],
                                    material: r,
                                    number: 100,
                                    radius: .5
                                });
                                o.add(i)
                            })), o.scale.set(E.scale, E.scale, E.scale), o
                        }
                    }, {
                        key: "createAnimateLine",
                        value: function(e) {
                            var t;
                            if ("sphere" === e.kind) {
                                var a = e.sphereHeightPointsArgs,
                                    i = this.getSphereHeightPoints.apply(this, Object(c["a"])(a));
                                t = new CubicBezierCurve3(a[0], i[0], i[1], a[1])
                            } else {
                                var s = [];
                                e.pointList.forEach((function(e) {
                                    return s.push(new u["Vector3"](e[0], e[1], e[2]))
                                })), t = new u["CatmullRomCurve3"](s)
                            }
                            if ("pipe" === e.type) {
                                var n = new u["TubeGeometry"](t, e.number || 50, e.radius || 1, e.radialSegments);
                                return new u["Mesh"](n, e.material)
                            }
                            if (O["MeshLine"] && MeshLineMaterial) {
                                var o = new u["Geometry"];
                                o.vertices = t.getPoints(e.number || 50);
                                var r = new O["MeshLine"];
                                return r.setGeometry(o), new u["Mesh"](r.geometry, e.material)
                            }
                            console.error("you need import MeshLine & MeshLineMaterial!")
                        }
                    }, {
                        key: "getSphereHeightPoints",
                        value: function(e, t, a, i, s) {
                            var n = function(e, t, a) {
                                    return e.lerp(t, a / e.distanceTo(t))
                                },
                                o = 180 * e.angleTo(t) / Math.PI / 10,
                                r = o * (a || 10),
                                c = o * o * (i || 120);
                            s = s || new u["Vector3"](0, 0, 0);
                            var l = new u["Ray"](s, e.clone().add(t.clone()).divideScalar(2)),
                                h = l.at(c / l.at(1).distanceTo(s));
                            return [n(e.clone(), h, r), n(t.clone(), h, r)]
                        }
                    }, {
                        key: "createGeometry",
                        value: function(e, t) {
                            var a = e,
                                i = [],
                                s = [];
                            a.forEach((function(e) {
                                i.push(e), s.push(e.x), s.push(e.y)
                            }));
                            for (var n = s, o = [], r = 0, c = 0; r < n.length - 2; r += 2, c++) 0 === r ? o[0] = Math.sqrt((n[2] - n[0]) * (n[2] - n[0]) + (n[3] - n[1]) * (n[3] - n[1])) : o[c] = o[c - 1] + Math.sqrt((n[r + 2] - n[r]) * (n[r + 2] - n[r]) + (n[r + 3] - n[r + 1]) * (n[r + 3] - n[r + 1]));
                            for (var l = [], h = [], d = o[o.length - 1], m = 0, g = l.length, f = h.length; m < i.length - 1; m++) {
                                var p = i[m],
                                    x = i[m + 1],
                                    y = o[m];
                                l[g++] = p.x, l[g++] = p.y, l[g++] = 0, h[f++] = 0 === m ? 0 : o[m - 1] / d, h[f++] = 0, l[g++] = x.x, l[g++] = x.y, l[g++] = 0, h[f++] = y / d, h[f++] = 0, l[g++] = p.x, l[g++] = p.y, l[g++] = t, h[f++] = 0 === m ? 0 : o[m - 1] / d, h[f++] = 1, l[g++] = p.x, l[g++] = p.y, l[g++] = t, h[f++] = 0 === m ? 0 : o[m - 1] / d, h[f++] = 1, l[g++] = x.x, l[g++] = x.y, l[g++] = 0, h[f++] = y / d, h[f++] = 0, l[g++] = x.x, l[g++] = x.y, l[g++] = t, h[f++] = y / d, h[f++] = 1
                            }
                            var v = new u["BufferGeometry"];
                            return v.setAttribute("position", new u["BufferAttribute"](new Float32Array(l), 3)), v.setAttribute("uv", new u["BufferAttribute"](new Float32Array(h), 2)), v
                        }
                    }]), e
                }(),
                N = {
                    finalPass: {
                        vex: "\n    \n    varying vec2 vUv;\n\n    void main() {\n\n      vUv = uv;\n\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    }\n    ",
                        fra: "\n\n    uniform sampler2D baseTexture;\n    uniform sampler2D bloomTexture;\n\n    varying vec2 vUv;\n\n    vec4 getTexture(sampler2D texelToLinearTexture) {\n\n      return mapTexelToLinear(texture2D(texelToLinearTexture, vUv));\n\n    }\n\n    void main() {\n\n      gl_FragColor = (getTexture(baseTexture) + vec4(1.0) * getTexture(bloomTexture));\n\n    }\n    "
                    }
                },
                B = function() {
                    function e(t) {
                        Object(l["a"])(this, e), this._options = t, this.scene = null;
                        var a = new H(this._options);
                        this.scene = a.scene, this.scene.name = "classroom", this.camera = a.camera, this.renderer = a.renderer, this.controls = a.controls, this.controls.autoRotate = !1, this.controls.enabled = !0, this.createLight(), this.controls.target = new u["Vector3"](.5, 50, -40), this.camera.position.x = 0, this.camera.position.y = 45, this.camera.position.z = -70, this.cursor = {
                            x: 0,
                            y: 0
                        }, E.controls.classroomResistanceFlag && (this.controls.enableZoom = !1, this.controls.enablePan = !1, this.controls.minDistance = 30, this.controls.maxDistance = 400, this.controls.minPolarAngle = Math.PI / 2.2, this.controls.maxPolarAngle = Math.PI / 3)
                    }
                    return Object(h["a"])(e, [{
                        key: "onDocumentMouseMove",
                        value: function(e) {
                            this.cursor.x = e.clientX / window.innerWidth
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            var e = window.innerWidth,
                                t = window.innerHeight;
                            this.camera.aspect = e / t, this.camera.updateProjectionMatrix()
                        }
                    }, {
                        key: "animation",
                        value: function() {
                            this.controls.update()
                        }
                    }, {
                        key: "createLight",
                        value: function() {
                            this.ambientLight = new u["AmbientLight"](new u["Color"](16777215)), this.ambientLight.intensity = E.light.day.ambientLightIntensity + .2, this.scene.add(this.ambientLight), this.directionalLight = new u["DirectionalLight"](16777215), this.directionalLight.position.set(0, 100, 100), this.directionalLight.intensity = E.light.day.directionalLightIntensity, this.scene.add(this.directionalLight)
                        }
                    }]), e
                }(),
                F = function() {
                    function e(t) {
                        var a = this;
                        Object(l["a"])(this, e), this._options = t, this.timeMode = t.timeMode, this.$canvas = t.$canvas, this.transitionParams = {
                            useTexture: !0,
                            transition: .5,
                            transitionSpeed: 2,
                            texture: 5,
                            loopTexture: !0,
                            animateTransition: !0,
                            textureThreshold: .3
                        }, this.clock = new u["Clock"], this.renderer = null, this.createRenderer(), this._options.renderer = this.renderer;
                        var i = new H(this._options);
                        this.scene = i.scene, this.scene.name = "school", this.camera = i.camera, this.controls = i.controls, this.sceneComplete = !1, E.controls.resistanceFlag && (this.controls.minDistance = 3 * E.scale, this.controls.maxDistance = 450 * E.scale, this.controls.minPolarAngle = Math.PI / 4, this.controls.maxPolarAngle = Math.PI / 2.1), this.classroom = new B(this._options), this.transition = null, this.change = !0, this.number = 0, this.timeModeModels = [], this.switchTimer = 1, this.timeShader = {}, this.firstPerson = null, this.selectObjects = {
                            classroom: [],
                            school: {
                                equipment: [],
                                building: []
                            }
                        }, this.raycaster = new u["Raycaster"], this.mouse = new u["Vector2"], this.effectComposer = null, this.renderPass = null, this.bloomPass = null, this.finalComposer = null, this.outlinePass = null, this.materials = {}, this.darkMaterial = null, this.bloomLayer = null, this.normalLayer = null, this.labelRenderer = null, this.labelObjects = {}, this.params = {
                            exposure: .1,
                            bloomThreshold: .1,
                            bloomStrength: 1,
                            bloomRadius: .1
                        }, this.createLayer(), this.createConfig(), this.createLight(), this.createEffectComposer(), this.resources = new k((function() {
                            a.init()
                        }))
                    }
                    return Object(h["a"])(e, [{
                        key: "init",
                        value: function() {
                            if (this.createModel(), this.addSky(E.useBgTexture), this.createEffects(), this.animation(), this.transition = new this.Transition(this.scene, this.classroom.scene, this), E.spectorFlag) {
                                var e = a("2e02"),
                                    t = new e.Spector;
                                t.displayUI()
                            }
                            E.showGUI && this.createGUI(), this.setRouter(), this.sceneComplete = !0
                        }
                    }, {
                        key: "setRouter",
                        value: function() {
                            var e = this;
                            "xtyClassroom" == w["a"].currentRoute.name ? this.switchScene("classroom") : this.switchScene("school"), setTimeout((function() {
                                w["a"].currentRoute.meta.building ? (console.log("聚焦模型", w["a"].currentRoute.meta.building), e.focusModel(w["a"].currentRoute.meta.building)) : "home" == w["a"].currentRoute.meta.name ? e.goHome() : e.closeFocus()
                            }), 1e3)
                        }
                    }, {
                        key: "createRenderer",
                        value: function() {
                            this.renderer = new u["WebGLRenderer"]({
                                alpha: !0,
                                precision: "highp",
                                antialias: !0,
                                logarithmicDepthBuffer: !0
                            }), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = u["PCFSoftShadowMap"], this.renderer.shadowMapEnabled = !0, this.renderer.context.getShaderInfoLog = function() {
                                return ""
                            }, this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.toneMapping = u["LinearToneMapping"], this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.sortObjects = !1, this._options.$canvas.appendChild(this.renderer.domElement)
                        }
                    }, {
                        key: "createTestBox",
                        value: function() {
                            var e = this,
                                t = new u["Group"],
                                a = new u["BoxGeometry"](10, 10, 10),
                                i = new u["MeshBasicMaterial"]({
                                    color: 65280
                                }),
                                s = new u["Mesh"](a, i);
                            s.position.y = 50;
                            var n = new u["ConeGeometry"](5, 20, 32),
                                o = new u["Mesh"](n, i);
                            o.position.y = 60, t.add(o), t.add(s), t.children.forEach((function(t) {
                                e.scene.add(t)
                            }));
                            for (var r = t.children.length - 1; r >= 0; r--) this.scene.add(t.children[r])
                        }
                    }, {
                        key: "createModel",
                        value: function() {
                            this.modelsGroup = new u["Group"], this.classroomModelGroup = new u["Group"], this.modelsGroup.scale.set(E.scale, E.scale, E.scale), this.classroomModelGroup.scale.set(E.scale, E.scale, E.scale);
                            var e = {};
                            for (var t in this.resources.models)
                                for (var a = this.resources.models[t], i = a.extData.color || "", s = void 0, n = null, o = a.children.length - 1; o >= 0; o--) {
                                    if (s = a.children[o], "glb" === a.format)
                                        for (var r = s.children.length - 1; r >= 0; r--) {
                                            var c = s.children[r];
                                            c.renderOrder = 1e3, a.hasMode ? (this.resources.textures["day"][t].flipY = !1, this.resources.textures["night"][t].flipY = !1, E.useShader ? (this.timeShader = {
                                                uniforms: {
                                                    uTextureNight: {
                                                        value: this.resources.textures["night"][t]
                                                    },
                                                    uTextureDay: {
                                                        value: this.resources.textures["day"][t]
                                                    },
                                                    uTime: {
                                                        value: 1
                                                    }
                                                }
                                            }, n = new u["ShaderMaterial"]({
                                                side: u["DoubleSide"],
                                                uniforms: this.timeShader.uniforms,
                                                vertexShader: "\n                  varying vec2 vUv; // uv 只有在顶点着色器里有\n                  void main(){\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n                    vUv = uv;\n                  }\n                ",
                                                fragmentShader: "\n                  varying vec2 vUv;\n                  uniform float uTime;\n                  uniform sampler2D uTextureNight;\n                  uniform sampler2D uTextureDay;\n                  void main(){\n                    gl_FragColor = mix(texture2D(uTextureNight, vUv), texture2D(uTextureDay, vUv), uTime);\n                  }\n                "
                                            })) : n = new u["MeshBasicMaterial"]({
                                                side: u["DoubleSide"],
                                                map: this.resources.textures[this.timeMode][t],
                                                color: i
                                            }), s.routerName = this.resources.models[t]["extData"]["name"], c["dayTexture"] = this.resources.textures["day"][t], c["nightTexture"] = this.resources.textures["night"][t], c.material = n, c.layers = this.normalLayer, c.routerName = this.resources.models[t]["extData"]["name"], this.timeModeModels.push(c), console.log(s, c, this.resources.models[t]["extData"]["name"])) : (c.layers = this.normalLayer, n = new u["MeshPhongMaterial"]({
                                                side: u["DoubleSide"],
                                                color: i
                                            }), c.material = n, c.layers = this.normalLayer, c.routerName = this.resources.models[t]["extData"]["name"])
                                        } else "obj" === a.format && (s.renderOrder = 100, a.hasMode ? (n = new u["MeshBasicMaterial"]({
                                            side: u["DoubleSide"],
                                            map: this.resources.textures[this.timeMode][t],
                                            color: i
                                        }), s["dayTexture"] = this.resources.textures["day"][t], s["nightTexture"] = this.resources.textures["night"][t], this.timeModeModels.push(s), s.material = n, s.layers = this.normalLayer, s.routerName = this.resources.models[t]["extData"]["name"]) : (n = E.useShader ? new u["ShaderMaterial"]({
                                            side: u["DoubleSide"],
                                            uniform: {
                                                uColor: {
                                                    value: new u["Color"](i)
                                                }
                                            },
                                            vertexShader: "\n                  void main(){\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n                  }\n                ",
                                            fragmentShader: "\n                  precision mediump float;\n                  uniform vec3 uColor;\n                  void main(){\n                    gl_FragColor = vec4(uColor, 1.0);\n                  }\n                "
                                        }) : new u["MeshLambertMaterial"]({
                                            side: u["DoubleSide"],
                                            color: i
                                        }), s && (s.material = n, s.layers = this.normalLayer, s.routerName = this.resources.models[t]["extData"]["name"])));
                                    if (this.resources.models[t]["extData"]["group"]) {
                                        var l = this.resources.models[t]["extData"]["group"];
                                        e[l] ? e[l].add(s) : (e[l] = new u["Object3D"], e[l].add(s), e[l].layers = this.bloomLayer), e[l].routerName = this.resources.models[t]["extData"]["group"]
                                    } else if ("classroom" === this.resources.models[t].extData.category) this.classroomModelGroup.add(s), this.selectObjects["classroom"].push(s);
                                    else if (this.modelsGroup.add(s), "equipment" === s.routerName)
                                        if (s.isObject3D)
                                            for (var h = s.children.length - 1; h >= 0; h--) {
                                                var d = s.children[h];
                                                d.layers.enable(3), this.selectObjects["school"]["equipment"].push(d)
                                            } else s.layers.enable(3), this.selectObjects["school"]["equipment"].push(s);
                                        else this.selectObjects["school"]["building"].push(s)
                                }
                            for (var m in e) this.modelsGroup.add(e[m]), this.selectObjects["school"]["building"].push(e[m]);
                            this.scene.add(this.modelsGroup), this.classroom.scene.add(this.classroomModelGroup)
                        }
                    }, {
                        key: "createConfig",
                        value: function() {
                            if (this.camera.layers.enable(0), this.camera.layers.enable(1), this.camera.layers.enable(2), this.scene.layers = this.normalLayer, this.classroom.camera.layers.enable(0), this.classroom.camera.layers.enable(1), this.classroom.camera.layers.enable(2), this.classroom.scene.layers = this.normalLayer, this.onWindowResize(), E.statsFlag && (this.stats = new d["a"], document.querySelector(".school3D-stats").appendChild(this.stats.dom)), E.axesHelpr) {
                                var e = new u["AxesHelper"](E.axesHelpr);
                                this.scene.add(e), this.classroom.scene.add(e)
                            }
                            if (E.gridHelperFlag) {
                                var t = 10,
                                    a = 10,
                                    i = new u["GridHelper"](t, a);
                                this.scene.add(i), this.classroom.scene.add(i)
                            }
                            this.$canvas.addEventListener("click", this.onMouseClick.bind(this), !1)
                        }
                    }, {
                        key: "onMousemove",
                        value: function(e) {
                            if (this.change) {
                                var t = this.getIntersects(e, this.selectObjects["school"]);
                                if (0 != t.length) t[0].object
                            } else this.moveCamera(e)
                        }
                    }, {
                        key: "moveCamera",
                        value: function(e) {
                            mouseX = e.clientX - windowHalfX, mouseY = e.clientY - windowHalfY
                        }
                    }, {
                        key: "onMouseClick",
                        value: function(e) {
                            if (this.change) {
                                var t = this.getIntersects(e, this.selectObjects["school"]["equipment"]);
                                if (t.length > 0) {
                                    var a = t[0].object;
                                    this.createCSS3DWindow(a)
                                }
                            }
                        }
                    }, {
                        key: "onMouseDblClick",
                        value: function(e) {
                            var t = this.getIntersects(e, this.selectObjects[this.change ? "school" : "classroom"]);
                            if (0 != t.length && t[0].object.isMesh) {
                                var a = t[0].object;
                                this.focusModel(a)
                            }
                        }
                    }, {
                        key: "getIntersects",
                        value: function(e, t) {
                            e.preventDefault(), this.mouse.x = e.clientX / window.innerWidth * 2 - 1, this.mouse.y = -e.clientY / window.innerHeight * 2 + 1, this.raycaster.layers.set(0), this.raycaster.layers.set(1), this.raycaster.layers.set(2), this.raycaster.layers.set(3), this.raycaster.setFromCamera(this.mouse, this.camera);
                            var a = this.raycaster.intersectObjects(t, !0);
                            return a
                        }
                    }, {
                        key: "closeWindow",
                        value: function(e) {
                            this.scene.remove(this.labelObjects[e]), delete this.labelObjects[e]
                        }
                    }, {
                        key: "createCSS3DWindow",
                        value: function(e) {
                            for (var t in this.labelObjects) this.scene.remove(this.labelObjects[t]), delete this.labelObjects[t];
                            if (window.closeWindow = this.closeWindow.bind(this), !this.labelObjects[e.uuid]) {
                                var a = this.createBox3(e);
                                a.y += 12 * E.scale;
                                var i = document.createElement("div");
                                i.className = "equipment-window", i.innerHTML = '\n        <div class="fire-div animate__animated animate__zoomIn" uuid="'.concat(e.uuid, '">\n            <div class="fire-header" >\n                <div>').concat(e.name, "</div>\n                <i onclick=\"closeWindow('").concat(e.uuid, '\')" class="iconfont icon-close" ></i>\n            </div>\n            <div class="fire-main">\n              <video id="video" controls autoplay loop muted>\n                <source src="https://support.wpyun.com/file/bigdata/yssp/001.mp4">\n              </video>\n            </div>\n        </div>');
                                var s = new g["a"](i);
                                s.position.copy(a), s.scale.set(.07 * E.scale, .07 * E.scale, .07 * E.scale), this.labelObjects[e.uuid] = s, this.scene.add(s), this.labelRenderer = new g["b"], this.labelRenderer.setSize(window.innerWidth, window.innerHeight), this.labelRenderer.domElement.style.position = "absolute", this.labelRenderer.domElement.style.top = 0, this.labelRenderer.domElement.className = "css3d-wapper", this.$canvas.appendChild(this.labelRenderer.domElement)
                            }
                        }
                    }, {
                        key: "createVideoSprite",
                        value: function(e) {
                            var t = this.createBox3(e);
                            t.y += 150;
                            var a = document.getElementById("video");
                            a.play();
                            var i = new u["VideoTexture"](a);
                            i.minFilter = u["LinearFilter"], i.magFilter = u["LinearFilter"], i.format = u["RGBFormat"];
                            var s = new u["SpriteMaterial"]({
                                    map: i,
                                    transparent: !0,
                                    side: u["DoubleSide"]
                                }),
                                n = new u["Sprite"](s);
                            n.position.copy(t), this.scene.add(n)
                        }
                    }, {
                        key: "createGUI",
                        value: function() {}
                    }, {
                        key: "focusModel",
                        value: function(e) {
                            var t = this.modelsGroup.children.filter((function(t) {
                                return t.routerName === e
                            }));
                            if (0 != t.length) {
                                var a = this.createBox3.apply(this, Object(c["a"])(t));
                                "equipment" == e ? this.focusAmi(new u["Vector3"](0 * E.scale, 60 * E.scale, 180 * E.scale), new u["Vector3"](0, 0, 0)) : this.focusAmi(a), this.outlinePass.selectedObjects = t
                            }
                        }
                    }, {
                        key: "goHome",
                        value: function() {
                            this.outlinePass.selectedObjects = [], this.focusAmi(E.camera.position, new u["Vector3"](0, 0, 0))
                        }
                    }, {
                        key: "closeFocus",
                        value: function() {
                            this.outlinePass.selectedObjects = []
                        }
                    }, {
                        key: "focusAmi",
                        value: function(e) {
                            var t, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = this.camera.position,
                                s = new m["a"].Tween(i),
                                n = this.controls.target;
                            t = a || e;
                            var o = new m["a"].Tween(n);
                            o.to(t).easing(m["a"].Easing.Quadratic.Out).onUpdate((function() {})).start().onComplete((function() {})), s.to({
                                x: e.x,
                                y: e.y + 50 * E.scale,
                                z: e.z + 80 * E.scale
                            }).easing(m["a"].Easing.Quadratic.Out).onUpdate((function() {})).start().onComplete((function() {}))
                        }
                    }, {
                        key: "createBox3",
                        value: function(e) {
                            var t = new u["Box3"];
                            t.expandByObject(e);
                            var a = new u["Vector3"];
                            t.getSize(a);
                            var i = new u["Vector3"];
                            return t.getCenter(i), i
                        }
                    }, {
                        key: "createLayer",
                        value: function() {
                            this.normalLayer = new u["Layers"], this.normalLayer.set(1), this.bloomLayer = new u["Layers"], this.bloomLayer.set(2), this.darkMaterial = new u["MeshBasicMaterial"]({
                                color: "black"
                            })
                        }
                    }, {
                        key: "darkenNonBloomed",
                        value: function(e) {
                            var t = !1 === this.bloomLayer.test(e.layers);
                            e.isMesh && t ? (this.materials[e.uuid] = e.material, e.material = this.darkMaterial) : e.isScene && t && (this.materials[e.uuid] = e.background, e.background = new u["Color"](0))
                        }
                    }, {
                        key: "restoreMaterial",
                        value: function(e) {
                            this.materials[e.uuid] && (e.isScene ? e.background = this.materials[e.uuid] : e.material = this.materials[e.uuid], delete this.materials[e.uuid])
                        }
                    }, {
                        key: "renderBloom",
                        value: function(e) {
                            !0 === e ? (this.scene.traverse(this.darkenNonBloomed.bind(this)), this.effectComposer.render(), this.scene.traverse(this.restoreMaterial.bind(this))) : (this.camera.layers.set(1), this.effectComposer.render(), this.camera.layers.set(2))
                        }
                    }, {
                        key: "createEffects",
                        value: function() {
                            this.effects = new R, this.scene.add(this.effects.createParticle(this.bloomLayer)), this.scene.add(this.effects.createLine(this.resources.textures.effects_line))
                        }
                    }, {
                        key: "createLight",
                        value: function() {
                            this.ambientLight = new u["AmbientLight"](new u["Color"](16777215)), this.ambientLight.intensity = E.light[this.timeMode].ambientLightIntensity, this.scene.add(this.ambientLight), this.directionalLight = new u["DirectionalLight"](16777215), this.directionalLight.position.set(0, 100, 100), this.directionalLight.intensity = E.light[this.timeMode].directionalLightIntensity, this.scene.add(this.directionalLight)
                        }
                    }, {
                        key: "createEffectComposer",
                        value: function() {
                            this.effectComposer = new f["a"](this.renderer), this.effectComposer.renderToScreen = !1, this.effectComposer.setSize(window.innerWidth, window.innerHeight), this.effectComposer.setPixelRatio(1), this.renderPass = new p["a"](this.scene, this.camera), this.effectComposer.addPass(this.renderPass), this.bloomPass = new y["a"](new u["Vector2"](window.innerWidth, window.innerHeight), this.params.bloomStrength, this.params.radius, this.params.bloomThreshold), this.outlinePass = new v["a"](new u["Vector2"](window.innerWidth, window.innerHeight), this.scene, this.camera), this.outlinePass.edgeStrength = 3, this.outlinePass.edgeGlow = 0, this.outlinePass.edgeThickness = 1, this.outlinePass.pulsePeriod = 5, this.outlinePass.visibleEdgeColor = new u["Color"]("#f69c34"), this.outlinePass.hiddenEdgeColor = new u["Color"]("#f69c34"), this.effectComposer.addPass(this.outlinePass), this.effectComposer.addPass(this.bloomPass);
                            var e = new x["a"](new u["ShaderMaterial"]({
                                uniforms: {
                                    baseTexture: {
                                        value: null
                                    },
                                    bloomTexture: {
                                        value: this.effectComposer.renderTarget2.texture
                                    }
                                },
                                vertexShader: N.finalPass.vex,
                                fragmentShader: N.finalPass.fra,
                                defines: {}
                            }), "baseTexture");
                            e.needsSwap = !0, this.finalComposer = new f["a"](this.renderer), this.finalComposer.addPass(this.renderPass), this.finalComposer.addPass(e), this.finalComposer.setSize(window.innerWidth, window.innerHeight)
                        }
                    }, {
                        key: "addSky",
                        value: function() {
                            1 == E.useBgTexture ? this.scene.background = new u["Color"](0) : 2 == E.useBgTexture && (this.scene.backgroundModel = {
                                day: null,
                                night: null
                            }, this.scene.backgroundModel["day"] = this.resources.skyDayTexture, this.scene.backgroundModel["night"] = this.resources.skyNightTexture, this.scene.background = this.scene.backgroundModel[this.timeMode])
                        }
                    }, {
                        key: "switchTime",
                        value: function(e) {
                            var t = this;
                            this.sceneComplete && (this.timeMode = e, this.scene.background = this.scene.backgroundModel[this.timeMode], this.ambientLight.intensity = E.light[this.timeMode].ambientLightIntensity, this.directionalLight.intensity = E.light[this.timeMode].directionalLightIntensity, this.timeModeModels.forEach((function(e) {
                                E.useShader ? 1 == e.material.uniforms.uTime.value ? e.material.uniforms.uTime.value = 0 : e.material.uniforms.uTime.value = 1 : e.material.map = e["".concat(t.timeMode, "Texture")]
                            })))
                        }
                    }, {
                        key: "Transition",
                        value: function(e, t, a) {
                            this.scene = new u["Scene"], this.cameraOrtho = new u["OrthographicCamera"](window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -10, 10), this.quadmaterial = new u["ShaderMaterial"]({
                                uniforms: {
                                    tDiffuse1: {
                                        value: null
                                    },
                                    tDiffuse2: {
                                        value: null
                                    },
                                    mixRatio: {
                                        value: 0
                                    },
                                    threshold: {
                                        value: .1
                                    },
                                    useTexture: {
                                        value: 1
                                    },
                                    tMixTexture: {
                                        value: a.resources.textures.transition03
                                    }
                                },
                                vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = vec2( uv.x, uv.y );", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
                                fragmentShader: ["uniform float mixRatio;", "uniform sampler2D tDiffuse1;", "uniform sampler2D tDiffuse2;", "uniform sampler2D tMixTexture;", "uniform int useTexture;", "uniform float threshold;", "varying vec2 vUv;", "void main() {", "\tvec4 texel1 = texture2D( tDiffuse1, vUv );", "\tvec4 texel2 = texture2D( tDiffuse2, vUv );", "\tif (useTexture==1) {", "\t\tvec4 transitionTexel = texture2D( tMixTexture, vUv );", "\t\tfloat r = mixRatio * (1.0 + threshold * 2.0) - threshold;", "\t\tfloat mixf=clamp((transitionTexel.r - r)*(1.0/threshold), 0.0, 1.0);", "\t\tgl_FragColor = mix( texel1, texel2, mixf );", "\t} else {", "\t\tgl_FragColor = mix( texel2, texel1, mixRatio );", "\t}", "}"].join("\n")
                            });
                            var i = new u["PlaneBufferGeometry"](window.innerWidth, window.innerHeight);
                            this.quad = new u["Mesh"](i, this.quadmaterial), this.scene.add(this.quad), this.sceneA = e, this.sceneB = t, this.quadmaterial.uniforms.tDiffuse1.value = e.fbo.texture, this.quadmaterial.uniforms.tDiffuse2.value = t.fbo.texture, this.needChange = !1, this.setTextureThreshold = function(e) {
                                this.quadmaterial.uniforms.threshold.value = e
                            }, this.useTexture = function(e) {
                                this.quadmaterial.uniforms.useTexture.value = e ? 1 : 0
                            }, this.setTexture = function(e) {
                                this.quadmaterial.uniforms.tMixTexture.value = a.resources.textures.transition03
                            };
                            var s = 0;
                            s = "xtyClassroom" == w["a"].currentRoute.name ? 0 : 1, this.render = function(e, t) {
                                a.transitionParams.animateTransition && (t ? (s += .02, s >= 1 && (s = 1)) : (s -= .02, s <= 0 && (s = 0)), a.transitionParams.transition = u["MathUtils"].smoothstep(s, .04, .96)), this.quadmaterial.uniforms.mixRatio.value = a.transitionParams.transition, 0 == a.transitionParams.transition ? this.sceneB.render(e, !1) : 1 == a.transitionParams.transition ? this.sceneA.render(e, !1) : (this.sceneA.render(e, !0), this.sceneB.render(e, !0), a.renderer.setRenderTarget(null), a.renderer.clear(), a.renderer.render(this.scene, this.cameraOrtho))
                            }
                        }
                    }, {
                        key: "switchScene",
                        value: function(e) {
                            "classroom" == e ? (this.change = !1, this.controls.enabled = !1, this.classroom.controls.enabled = !0) : "school" == e && (this.change = !0, this.controls.autoRotate = E.controls.autoRotate, this.controls.enabled = !0, this.classroom.controls.enabled = !1)
                        }
                    }, {
                        key: "animation",
                        value: function() {
                            this.reqAniFrame = requestAnimationFrame(this.animation.bind(this)), this.controls && this.controls.update(), this.classroom.controls && this.classroom.controls.update(), m["a"].update(), this.stats && this.stats.update(), this.effects && this.effects.animation(), this.transition && this.transition.render(this.clock.getDelta(), this.change, this.number), this.change && this.labelRenderer && this.labelRenderer.render(this.scene, this.camera)
                        }
                    }, {
                        key: "onWindowResize",
                        value: function() {
                            var e = this;
                            window.addEventListener("resize", (function() {
                                var t = window.innerWidth,
                                    a = window.innerHeight;
                                e.renderer.setSize(t, a), e.camera.aspect = t / a, e.camera.updateProjectionMatrix(), e.classroom.resize(), e.effectComposer && e.effectComposer.setSize(t, a)
                            }))
                        }
                    }, {
                        key: "destructor",
                        value: function() {}
                    }]), e
                }(),
                G = a("52c1"),
                z = {
                    name: "school3D",
                    components: {},
                    props: {},
                    data: function() {
                        return {
                            application: null,
                            currentScene: "school"
                        }
                    },
                    created: function() {},
                    mounted: function() {
                        this.$route.query.time && this.$store.commit("xiaotaiyang/SET_TIMEMODE", this.$route.query.time), this.application = new F({
                            $canvas: document.querySelector("#js-canvas"),
                            useComposer: !0,
                            timeMode: 0 === this.xiaotaiyang.timeMode ? "day" : "night"
                        }), window.application = this.application
                    },
                    methods: {},
                    watch: {
                        "xiaotaiyang.timeMode": {
                            handler: function(e) {
                                0 == e ? application.switchTime("day") : application.switchTime("night")
                            }
                        },
                        $route: {
                            handler: function(e, t) {
                                var a = this;
                                "xtyClassroom" == e.name ? (application.switchScene("classroom"), setTimeout((function() {
                                    a.currentScene = "classroom"
                                }), 300)) : (application.switchScene("school"), setTimeout((function() {
                                    a.currentScene = "school"
                                }), 500)), e.meta.building ? application.focusModel(e.meta.building) : "home" == e.meta.name ? application.goHome() : application.closeFocus()
                            }
                        }
                    },
                    beforeDestroy: function() {
                        application.destructor()
                    },
                    computed: Object(n["a"])({}, Object(G["c"])(["xiaotaiyang"]))
                },
                I = z,
                $ = (a("9e2d"), a("fddd"), a("cba8")),
                q = Object($["a"])(I, o, r, !1, null, "4f19d150", null),
                U = q.exports,
                W = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "xty-header-wapper"
                    }, [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == e.xiaotaiyang.loader.loaderStatus,
                            expression: "xiaotaiyang.loader.loaderStatus == 1"
                        }],
                        staticClass: "font-FZZZHONGJW xty-h-title",
                        attrs: {
                            "data-text": e.xiaotaiyang.xtyMock["学校名"]
                        }
                    }, [a("span", {
                        staticClass: " gcani title-float",
                        attrs: {
                            "data-splitting": ""
                        }
                    }, [e._v(e._s(e.xiaotaiyang.xtyMock["学校名"]))])]), a("div", {
                        staticClass: "xty-header-left"
                    }, [a("span", {
                        staticClass: "xty-year"
                    }, [e._v(e._s(e.year))]), a("span", {
                        staticClass: "xty-week"
                    }, [e._v(e._s(e.week))]), a("span", {
                        staticClass: "xty-hour"
                    }, [e._v(e._s(e.hour))])]), a("div", {
                        staticClass: "xty-header-right"
                    }, [a("div", {
                        staticClass: "xty-hr-mode"
                    }, [null != e.timeMode ? a("switch-tab", {
                        attrs: {
                            active: e.timeMode,
                            data: e.timeModeData
                        },
                        on: {
                            swicthTab: e.swicthTab
                        }
                    }) : e._e()], 1), e._e()])])
                },
                V = [],
                Y = (a("d916"), function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "switchTab-wapper"
                    }, e._l(e.data, (function(t, i) {
                        return a("div", {
                            key: i,
                            staticClass: "switch-item",
                            class: {
                                active: i == e.switchActive
                            },
                            on: {
                                click: function(t) {
                                    return e.switchTab(i)
                                }
                            }
                        }, [t.icon ? a("i", {
                            staticClass: "iconfont",
                            class: t.icon
                        }) : e._e(), a("span", [e._v(e._s(t.name))])])
                    })), 0)
                }),
                J = [],
                X = (a("3828"), {
                    name: "switchTab",
                    components: {},
                    props: {
                        data: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        active: {
                            type: Number,
                            default: function() {
                                return 0
                            }
                        }
                    },
                    data: function() {
                        return {
                            switchActive: 0
                        }
                    },
                    created: function() {},
                    mounted: function() {
                        this.switchActive = this.active
                    },
                    methods: {
                        switchTab: function(e) {
                            e != this.switchActive && (this.switchActive = e, this.$emit("swicthTab", e))
                        }
                    },
                    watch: {}
                }),
                Z = X,
                Q = (a("a2dc"), Object($["a"])(Z, Y, J, !1, null, "338d9240", null)),
                K = Q.exports,
                ee = {
                    name: "xty-header",
                    components: {
                        switchTab: K
                    },
                    props: {},
                    data: function() {
                        return {
                            timeModeData: [{
                                name: "日间模式",
                                icon: "icon-icon-day"
                            }, {
                                name: "夜间模式",
                                icon: "icon-icon-night"
                            }],
                            hour: "",
                            year: "",
                            week: "",
                            timeMode: null
                        }
                    },
                    created: function() {},
                    mounted: function() {
                        var e = this;
                        this.getTime(), this.$dayjs.locale("zh-cn"), setInterval((function() {
                            e.getTime()
                        }), 1e3), this.$Splitting(), this.$route.query.time ? this.timeMode = this.$route.query.time : this.timeMode = this.xiaotaiyang.timeMode
                    },
                    methods: {
                        getTime: function() {
                            this.hour = this.$dayjs().format("H:mm:ss"), this.year = this.$dayjs().format("YYYY.MM.DD"), this.week = this.$dayjs().format("dddd")
                        },
                        swicthTab: function(e) {
                            this.$store.commit("xiaotaiyang/SET_TIMEMODE", e)
                        },
                        handlerNavigation: function() {
                            console.log("进入校园导航模式")
                        }
                    },
                    watch: {},
                    computed: Object(n["a"])({}, Object(G["c"])(["xiaotaiyang"]))
                },
                te = ee,
                ae = (a("a769"), Object($["a"])(te, W, V, !1, null, "7efe9433", null)),
                ie = ae.exports,
                se = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "xty-footer-wapper"
                    }, [a("div", {
                        staticClass: "xty-f-left"
                    }, [a("router-link", {
                        staticClass: "xty-link",
                        attrs: {
                            to: "pass"
                        }
                    }, [a("i", {
                        staticClass: "iconfont icon-icon-tongxingguanli"
                    }), a("span", [e._v("通行管理")])]), a("router-link", {
                        staticClass: "xty-link",
                        attrs: {
                            to: "safety"
                        }
                    }, [a("i", {
                        staticClass: "iconfont icon-icon-xiaoyuananquan"
                    }), a("span", [e._v("校园安全")])])], 1), a("div", {
                        staticClass: "xty-f-center"
                    }, [a("div", {
                        staticClass: "xty-fc-bottom"
                    }, [a("div", {
                        staticClass: "xty-fc-home xty-link",
                        on: {
                            dblclick: e.handlerDblclick,
                            click: e.handlerClick
                        }
                    }, [a("i", {
                        staticClass: "iconfont icon-icon-home"
                    })]), a("div", {
                        staticClass: "xty-fc-otherScenes",
                        class: {
                            active: e.showMenu
                        }
                    }, e._l(e.popMenuData, (function(t, i) {
                        return a("router-link", {
                            key: i,
                            staticClass: "xty-fc-link",
                            attrs: {
                                to: t.url
                            }
                        }, [a("div", {
                            staticClass: "xty-fco-item"
                        }, [a("i", {
                            staticClass: "iconfont",
                            class: t.icon
                        }), a("span", {
                            on: {
                                click: function(a) {
                                    return e.handlerJump(t.url)
                                }
                            }
                        }, [e._v(e._s(t.name))])])])
                    })), 1)])]), a("div", {
                        staticClass: "xty-f-right"
                    }, [a("router-link", {
                        staticClass: "xty-link",
                        attrs: {
                            to: "equipment"
                        }
                    }, [a("i", {
                        staticClass: "iconfont icon-icon-zhinengshebei"
                    }), a("span", [e._v("智能设备")])]), a("router-link", {
                        staticClass: "xty-link",
                        attrs: {
                            to: "classroom"
                        }
                    }, [a("i", {
                        staticClass: "iconfont icon-icon-zhinengjiaoshi"
                    }), a("span", [e._v("智能教室")])])], 1)])
                },
                ne = [],
                oe = {
                    name: "xty-footer",
                    components: {},
                    props: {},
                    data: function() {
                        return {
                            popMenuData: [{
                                icon: "icon-icon-sushe",
                                name: "宿舍",
                                url: "dorm"
                            }, {
                                icon: "icon-icon-xiaomen",
                                name: "校门口",
                                url: "gate"
                            }, {
                                icon: "icon-icon-jiaoxuelou",
                                name: "教学楼",
                                url: "teaching"
                            }, {
                                icon: "icon-icon-tushuguan",
                                name: "图书馆",
                                url: "library"
                            }, {
                                icon: "icon-icon-caochang",
                                name: "操场",
                                url: "playground"
                            }, {
                                icon: "icon-icon-shitang",
                                name: "食堂",
                                url: "dining"
                            }, {
                                icon: "icon-icon-bangongshi",
                                name: "行政楼",
                                url: "office"
                            }],
                            menuTimer: null,
                            showMenu: !1,
                            click: null
                        }
                    },
                    created: function() {},
                    mounted: function() {},
                    methods: {
                        handlerClick: function() {
                            var e = this;
                            clearTimeout(this.click), this.click = setTimeout((function(t) {
                                e.showItemPop()
                            }), 200)
                        },
                        handlerDblclick: function() {
                            clearTimeout(this.click), this.handlerJump("home")
                        },
                        showItemPop: function() {
                            this.showMenu = !this.showMenu
                        },
                        handlerJump: function(e) {
                            clearTimeout(this.time), this.$router.push({
                                path: e
                            })
                        }
                    },
                    watch: {},
                    beforeDestroy: function() {}
                },
                re = oe,
                ce = (a("9d00"), Object($["a"])(re, se, ne, !1, null, "710bbf00", null)),
                le = ce.exports,
                he = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "digital-main-wapper"
                    }, [a("router-view", {
                        key: e.key
                    })], 1)
                },
                ue = [],
                de = {
                    name: "digital-main",
                    components: {},
                    props: {},
                    data: function() {
                        return {}
                    },
                    created: function() {},
                    mounted: function() {},
                    methods: {},
                    watch: {},
                    computed: {
                        key: function() {
                            return this.$route.path
                        }
                    }
                },
                me = de,
                ge = (a("30de"), Object($["a"])(me, he, ue, !1, null, "661d4dd6", null)),
                fe = ge.exports,
                pe = {
                    name: "index",
                    components: {
                        school3D: U,
                        xtyHeader: ie,
                        xtyFooter: le,
                        switchTab: K,
                        digitalMain: fe
                    },
                    props: {},
                    provide: function() {
                        return {
                            reload: this.reload
                        }
                    },
                    data: function() {
                        return {
                            showUI: !0,
                            firstFlag: !0,
                            model: [{
                                name: "统计模式"
                            }, {
                                name: "纯净模式"
                            }],
                            showStatas: !1
                        }
                    },
                    created: function() {},
                    mounted: function() {},
                    methods: {
                        enterFirstPerson: function() {
                            this.$refs.school3d.enterFirstPerson()
                        },
                        swicthTab: function(e) {
                            this.$store.commit("xiaotaiyang/SET_PAGEMODE", e)
                        }
                    },
                    watch: {
                        $route: {
                            handler: function(e, t) {
                                -1 != e.hash.indexOf("GUI") ? this.showStatas = !0 : this.showStatas = !1
                            },
                            immediate: !0
                        }
                    },
                    computed: Object(n["a"])({}, Object(G["c"])(["xiaotaiyang"]))
                },
                xe = pe,
                ye = (a("f5d9"), a("560d"), Object($["a"])(xe, i, s, !1, null, "69d1b96c", null));
            t["default"] = ye.exports
        },
        "560d": function(e, t, a) {
            "use strict";
            a("27d7")
        },
        "5f2b": function(e, t, a) {},
        "8e5d": function(e, t, a) {},
        "9d00": function(e, t, a) {
            "use strict";
            a("2a2f")
        },
        "9e2d": function(e, t, a) {
            "use strict";
            a("8e5d")
        },
        a2dc: function(e, t, a) {
            "use strict";
            a("5f2b")
        },
        a769: function(e, t, a) {
            "use strict";
            a("21fe")
        },
        bcb0: function(e, t, a) {},
        ee74: function(e, t, a) {},
        f5d9: function(e, t, a) {
            "use strict";
            a("3be2")
        },
        fddd: function(e, t, a) {
            "use strict";
            a("bcb0")
        }
    }
]);