(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["app"], {
        0: function(e, n, t) {
            e.exports = t("56d7")
        },
        4360: function(e, n, t) {
            "use strict";
            var a = t("6e6d"),
                i = t("52c1"),
                r = (t("d30f"), {
                    sidebar: function(e) {
                        return e.app.sidebar
                    },
                    device: function(e) {
                        return e.app.device
                    },
                    token: function(e) {
                        return e.user.token
                    },
                    avatar: function(e) {
                        return e.user.avatar
                    },
                    name: function(e) {
                        return e.user.name
                    }
                }),
                o = r,
                c = t("8c92"),
                u = t.n(c),
                m = {
                    sidebar: {
                        opened: !u.a.get("sidebarStatus") || !!+u.a.get("sidebarStatus"),
                        withoutAnimation: !1
                    },
                    device: "desktop"
                },
                l = {
                    TOGGLE_SIDEBAR: function(e) {
                        e.sidebar.opened = !e.sidebar.opened, e.sidebar.withoutAnimation = !1, e.sidebar.opened ? u.a.set("sidebarStatus", 1) : u.a.set("sidebarStatus", 0)
                    },
                    CLOSE_SIDEBAR: function(e, n) {
                        u.a.set("sidebarStatus", 0), e.sidebar.opened = !1, e.sidebar.withoutAnimation = n
                    },
                    TOGGLE_DEVICE: function(e, n) {
                        e.device = n
                    }
                },
                s = {
                    toggleSideBar: function(e) {
                        var n = e.commit;
                        n("TOGGLE_SIDEBAR")
                    },
                    closeSideBar: function(e, n) {
                        var t = e.commit,
                            a = n.withoutAnimation;
                        t("CLOSE_SIDEBAR", a)
                    },
                    toggleDevice: function(e, n) {
                        var t = e.commit;
                        t("TOGGLE_DEVICE", n)
                    }
                },
                d = {
                    namespaced: !0,
                    state: m,
                    mutations: l,
                    actions: s
                },
                p = t("83d6"),
                f = t.n(p),
                h = f.a.showSettings,
                b = f.a.fixedHeader,
                g = f.a.sidebarLogo,
                y = {
                    showSettings: h,
                    fixedHeader: b,
                    sidebarLogo: g
                },
                v = {
                    CHANGE_SETTING: function(e, n) {
                        var t = n.key,
                            a = n.value;
                        e.hasOwnProperty(t) && (e[t] = a)
                    }
                },
                k = {
                    changeSetting: function(e, n) {
                        var t = e.commit;
                        t("CHANGE_SETTING", n)
                    }
                },
                x = {
                    namespaced: !0,
                    state: y,
                    mutations: v,
                    actions: k
                },
                E = (t("0b10"), t("2c31"), t("f753")),
                S = t.n(E),
                T = t("b705"),
                w = t("5f87"),
                _ = S.a.create({
                    baseURL: "/",
                    timeout: 5e3
                });
            _.interceptors.request.use((function(e) {
                return F.getters.token && (e.headers["X-Token"] = Object(w["a"])()), e
            }), (function(e) {
                return console.log(e), Promise.reject(e)
            })), _.interceptors.response.use((function(e) {
                var n = e.data;
                return 2e4 !== n.code ? (Object(T["Message"])({
                    message: n.message || "Error",
                    type: "error",
                    duration: 5e3
                }), 50008 !== n.code && 50012 !== n.code && 50014 !== n.code || T["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again", "Confirm logout", {
                    confirmButtonText: "Re-Login",
                    cancelButtonText: "Cancel",
                    type: "warning"
                }).then((function() {
                    F.dispatch("user/resetToken").then((function() {
                        location.reload()
                    }))
                })), Promise.reject(new Error(n.message || "Error"))) : n
            }), (function(e) {
                return console.log("err" + e), Object(T["Message"])({
                    message: e.message,
                    type: "error",
                    duration: 5e3
                }), Promise.reject(e)
            }));
            var O = _;

            function P(e) {
                return O({
                    url: "/vue-admin-template/user/login",
                    method: "post",
                    data: e
                })
            }

            function A(e) {
                return O({
                    url: "/vue-admin-template/user/info",
                    method: "get",
                    params: {
                        token: e
                    }
                })
            }

            function C() {
                return O({
                    url: "/vue-admin-template/user/logout",
                    method: "post"
                })
            }
            var j = t("a18c"),
                I = function() {
                    return {
                        token: Object(w["a"])(),
                        name: "",
                        avatar: ""
                    }
                },
                N = I(),
                R = {
                    RESET_STATE: function(e) {
                        Object.assign(e, I())
                    },
                    SET_TOKEN: function(e, n) {
                        e.token = n
                    },
                    SET_NAME: function(e, n) {
                        e.name = n
                    },
                    SET_AVATAR: function(e, n) {
                        e.avatar = n
                    }
                },
                L = {
                    login: function(e, n) {
                        var t = e.commit,
                            a = n.username,
                            i = n.password;
                        return new Promise((function(e, n) {
                            P({
                                username: a.trim(),
                                password: i
                            }).then((function(n) {
                                var a = n.data;
                                t("SET_TOKEN", a.token), Object(w["c"])(a.token), e()
                            })).catch((function(e) {
                                n(e)
                            }))
                        }))
                    },
                    getInfo: function(e) {
                        var n = e.commit,
                            t = e.state;
                        return new Promise((function(e, a) {
                            A(t.token).then((function(t) {
                                var i = t.data;
                                if (!i) return a("Verification failed, please Login again.");
                                var r = i.name,
                                    o = i.avatar;
                                n("SET_NAME", r), n("SET_AVATAR", o), e(i)
                            })).catch((function(e) {
                                a(e)
                            }))
                        }))
                    },
                    logout: function(e) {
                        var n = e.commit,
                            t = e.state;
                        return new Promise((function(e, a) {
                            C(t.token).then((function() {
                                Object(w["b"])(), Object(j["b"])(), n("RESET_STATE"), e()
                            })).catch((function(e) {
                                a(e)
                            }))
                        }))
                    },
                    resetToken: function(e) {
                        var n = e.commit;
                        return new Promise((function(e) {
                            Object(w["b"])(), n("RESET_STATE"), e()
                        }))
                    }
                },
                M = {
                    namespaced: !0,
                    state: N,
                    mutations: R,
                    actions: L
                },
                B = t("e9ff"),
                D = (t("e186"), {
                    getScenesConfig: "/idaas-admin/option/getEduScenesConfig",
                    getIcon: "/idaas/common/theme/getBgUrl"
                });

            function G() {
                return O({
                    url: D.getScenesConfig,
                    method: "get"
                })
            }

            function q() {
                return O({
                    url: D.getIcon,
                    method: "get"
                })
            }
            var H = {
                    title: ""
                },
                $ = {
                    SET_TITLE: function(e, n) {
                        e.title = n
                    }
                },
                V = {
                    getScenesTitle: function(e) {
                        return Object(B["a"])(regeneratorRuntime.mark((function n() {
                            var t;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, G();
                                    case 2:
                                        t = n.sent, 0 == t.data.code && (e.commit("SET_TITLE", t.data.data.regionName), document.getElementsByTagName("title")[0].innerText = t.data.data.regionName + "智慧校园可视化");
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    getScenesIcon: function(e) {
                        return Object(B["a"])(regeneratorRuntime.mark((function e() {
                            var n, t, a;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, q();
                                    case 2:
                                        n = e.sent, 0 == n.data.code && (t = function(e) {
                                            var n = document.querySelector('link[rel="icon"]');
                                            null !== n ? n.href = e : (n = document.createElement("link"), n.rel = "icon", n.href = e, document.head.appendChild(n))
                                        }, a = n.data.data.bi.logoUrl, t(a));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                },
                U = {
                    namespaced: !0,
                    state: H,
                    mutations: $,
                    actions: V
                },
                J = t("9654"),
                K = {
                    xtyMock: J,
                    pageMode: 0,
                    timeMode: 0,
                    loader: {
                        loaderText: "",
                        loaderCurrent: "",
                        loaderTotal: "",
                        loaderUrl: "",
                        loaderStatus: 0
                    }
                },
                z = {
                    SET_PAGEMODE: function(e, n) {
                        e.pageMode = n
                    },
                    SET_TIMEMODE: function(e, n) {
                        e.timeMode = n
                    },
                    SET_LOADER: function(e, n) {
                        e.loader = n
                    }
                },
                W = {},
                X = {
                    namespaced: !0,
                    state: K,
                    mutations: z,
                    actions: W
                };
            a["default"].use(i["a"]);
            var Y = new i["a"].Store({
                    modules: {
                        app: d,
                        settings: x,
                        user: M,
                        config: U,
                        xiaotaiyang: X
                    },
                    getters: o
                }),
                F = n["a"] = Y
        },
        "56d7": function(e, n, t) {
            "use strict";
            t.r(n);
            t("21ad"), t("59d3"), t("48f2"), t("1176");
            var a = t("6e6d"),
                i = function() {
                    var e = this,
                        n = e.$createElement,
                        t = e._self._c || n;
                    return t("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [t("router-view")], 1)
                },
                r = [],
                o = t("e9ff"),
                c = (t("e186"), {
                    name: "App",
                    created: function() {
                        return Object(o["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                }),
                u = c,
                m = t("cba8"),
                l = Object(m["a"])(u, i, r, !1, null, null, null),
                s = l.exports,
                d = t("4360"),
                p = t("a18c"),
                f = (t("aa93"), t("b705")),
                h = t.n(f),
                b = (t("3880"), t("255a")),
                g = t.n(b),
                y = (t("a1c56"), t("b20f"), t("f1d6")),
                v = t.n(y),
                k = function() {
                    var e = this,
                        n = e.$createElement,
                        t = e._self._c || n;
                    return e.isExternal ? t("div", e._g({
                        staticClass: "svg-external-icon svg-icon",
                        style: e.styleExternalIcon
                    }, e.$listeners)) : t("svg", e._g({
                        class: e.svgClass,
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, e.$listeners), [t("use", {
                        attrs: {
                            "xlink:href": e.iconName
                        }
                    })])
                },
                x = [],
                E = t("61f7"),
                S = {
                    name: "SvgIcon",
                    props: {
                        iconClass: {
                            type: String,
                            required: !0
                        },
                        className: {
                            type: String,
                            default: ""
                        }
                    },
                    computed: {
                        isExternal: function() {
                            return Object(E["a"])(this.iconClass)
                        },
                        iconName: function() {
                            return "#icon-".concat(this.iconClass)
                        },
                        svgClass: function() {
                            return this.className ? "svg-icon " + this.className : "svg-icon"
                        },
                        styleExternalIcon: function() {
                            return {
                                mask: "url(".concat(this.iconClass, ") no-repeat 50% 50%"),
                                "-webkit-mask": "url(".concat(this.iconClass, ") no-repeat 50% 50%")
                            }
                        }
                    }
                },
                T = S,
                w = (t("68fa"), Object(m["a"])(T, k, x, !1, null, "f9f7fefc", null)),
                _ = w.exports;
            a["default"].component("svg-icon", _);
            t("d30f");
            var O = t("38bc"),
                P = t.n(O),
                A = (t("70e7"), t("5f87")),
                C = (t("4789"), t("83d6")),
                j = t.n(C),
                I = j.a.title || "";

            function N(e) {
                return e ? "".concat(e).concat(I) : "".concat(I)
            }
            P.a.configure({
                showSpinner: !1
            });
            var R = ["/login"];
            p["a"].beforeEach(function() {
                var e = Object(o["a"])(regeneratorRuntime.mark((function e(n, t, a) {
                    var i, r;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (document.title = N(n.meta.title), Object(A["a"])(), i = "暂时免登录", !i) {
                                    e.next = 25;
                                    break
                                }
                                if ("/login" !== n.path) {
                                    e.next = 8;
                                    break
                                }
                                a({
                                    path: "/"
                                }), e.next = 23;
                                break;
                            case 8:
                                if (r = d["a"].getters.name, !r) {
                                    e.next = 13;
                                    break
                                }
                                a(), e.next = 23;
                                break;
                            case 13:
                                e.prev = 13, a(), e.next = 23;
                                break;
                            case 17:
                                return e.prev = 17, e.t0 = e["catch"](13), e.next = 21, d["a"].dispatch("user/resetToken");
                            case 21:
                                f["Message"].error(e.t0 || "Has Error"), a("/login?redirect=".concat(n.path));
                            case 23:
                                e.next = 26;
                                break;
                            case 25:
                                -1 !== R.indexOf(n.path) ? a() : a("/login?redirect=".concat(n.path));
                            case 26:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [13, 17]
                    ])
                })));
                return function(n, t, a) {
                    return e.apply(this, arguments)
                }
            }()), p["a"].afterEach((function() {}));
            var L = t("4d28"),
                M = t.n(L);
            t("6819"), t("3828"), t("d835"), t("8a82"), t("0b10"), t("9940"), t("4b0c");
            a["default"].filter("parseNumber", (function(e) {
                if (!e) return "0.00";
                var n = Number(e) - Number(e) % 1,
                    t = n.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"),
                    a = "",
                    i = e.toString().split(".");
                return 2 == i.length ? (a = i[1].toString(), t + "." + a) : t + a
            })), a["default"].directive("resize", {
                bind: function(e, n) {
                    var t = "",
                        a = "";

                    function i() {
                        var i = document.defaultView.getComputedStyle(e);
                        t === i.width && a === i.height || n.value(), t = i.width, a = i.height
                    }
                    e.__vueSetInterval__ = setInterval(i, 300)
                },
                unbind: function(e) {
                    clearInterval(e.__vueSetInterval__)
                }
            });
            var B = t("f89a"),
                D = t.n(B),
                G = t("d02f"),
                q = t.n(G);
            t("967f");
            a["default"].prototype.$echarts = M.a, a["default"].prototype.$Splitting = D.a, a["default"].prototype.$echarts = M.a, a["default"].prototype.$dayjs = v.a, a["default"].use(q.a), a["default"].use(h.a, {
                locale: g.a
            }), a["default"].config.productionTip = !1, new a["default"]({
                el: "#app",
                router: p["a"],
                store: d["a"],
                render: function(e) {
                    return e(s)
                },
                components: {
                    App: s
                }
            })
        },
        "5f87": function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return o
            })), t.d(n, "c", (function() {
                return c
            })), t.d(n, "b", (function() {
                return u
            }));
            var a = t("8c92"),
                i = t.n(a),
                r = "vue_admin_template_token";

            function o() {
                return i.a.get(r)
            }

            function c(e) {
                return i.a.set(r, e)
            }

            function u() {
                return i.a.remove(r)
            }
        },
        "61f7": function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return a
            })), t.d(n, "b", (function() {
                return i
            }));
            t("2c31");

            function a(e) {
                return /^(https?:|mailto:|tel:)/.test(e)
            }

            function i(e) {
                var n = ["admin", "editor"];
                return n.indexOf(e.trim()) >= 0
            }
        },
        "68fa": function(e, n, t) {
            "use strict";
            t("c881")
        },
        "83d6": function(e, n) {
            e.exports = {
                title: " - 智慧校园孪生可视化",
                fixedHeader: !1,
                sidebarLogo: !1
            }
        },
        9654: function(e) {
            e.exports = JSON.parse('{"学校名":"3D可视化智慧校园","学校名1":"小太阳数字孪生校园","通行管理":{"访客统计":{"近7天访客总数":80,"今日访客数":15,"已到访":10,"待来访":5,"图表":{"label":["7.20","7.21","7.22","7.23","7.24","7.25","7.26"],"value":[10,15,11,8,12,9,15]}},"考勤管理":{"应到人数":1200,"出勤率":91.67,"正常":1100,"请假":10,"缺勤":10,"迟到":80},"进出统计":{"当天进校":2195,"当天出校":1000,"校内总车辆":40,"固定车辆":36,"访客车辆":4},"体温检测":{"体温正常数":1190,"体温异常数":5,"体温正常率":99.67},"请假汇总":{"请假人数":10,"图表数据":[{"name":"病假","value":3},{"name":"事假","value":7}]}},"校园安全":{"告警趋势":{"告警数":1288,"图表":{"label":["1月","2月","3月","4月","5月","6月","7月"],"value":[33,53,200,180,199,233,210,180]}},"校车安全":{"图表":{"标签":["7.20","7.21","7.22","7.23","7.24","7.25","7.26"],"上学":["400","450","435","463","446","407","480"],"放学":["380","420","465","445","463","466","480"]}},"校园预警":{"列表":[{"time":"2021-07-27 16:16:23","name":"北门监控","area":"校门口","type":"黑名单报警"},{"time":"2021-07-27 15:16:23","name":"围墙监控","area":"围墙","type":"周界预防"},{"time":"2021-07-27 14:16:23","name":"北门监控","area":"校门口","type":"陌生人预警"},{"time":"2021-07-27 13:16:23","name":"一号教学楼一楼","area":"教学楼","type":"陌生人预警"},{"time":"2021-07-27 12:16:23","name":"消防传感器","area":"食堂","type":"消防安全"},{"time":"2021-07-27 11:16:23","name":"智能电表","area":"宿舍楼","type":"异常用电"},{"time":"2021-07-27 10:16:23","name":"电梯","area":"教学楼","type":"电梯预警"},{"time":"2021-07-27 09:16:23","name":"一号教学楼一楼","area":"校门口","type":"黑名单报警"}]},"消防安全":{"列表":[{"name":"1号教学楼","proportion":90,"rating":"优"},{"name":"2号教学楼","proportion":86,"rating":"优"},{"name":"3号教学楼","proportion":83,"rating":"优"},{"name":"1号宿舍楼","proportion":81,"rating":"优"},{"name":"食堂","proportion":73,"rating":"良"},{"name":"图书馆","proportion":70,"rating":"良"},{"name":"行政楼","proportion":70,"rating":"良"},{"name":"2号宿舍楼","proportion":70,"rating":"良"}]},"视频监控":{"查看设备":[{"value":"1","label":"一号教学楼一楼"},{"value":"2","label":"北门"},{"value":"3","label":"宿舍楼一楼"}]}},"首页":{"告警趋势":{"告警数":1288,"图表":{"label":["1月","2月","3月","4月","5月","6月","7月"],"value":[33,53,200,180,199,233,210]}},"能源趋势":{"能源消耗":151411,"图表":{"label":["1月","2月","3月","4月","5月","6月","7月"],"value":[12333,10028,19000,23000,21420,19630,21000]}},"设备状态":{"设备总数":689,"上一小时能耗":103,"开启设备":400,"关闭设备":210,"故障设备":79},"校园预警":{"列表":[{"time":"2021-07-27 16:16:23","name":"北门监控","area":"校门口","type":"黑名单报警"},{"time":"2021-07-27 15:16:23","name":"围墙监控","area":"围墙","type":"周界预防"},{"time":"2021-07-27 14:16:23","name":"北门监控","area":"校门口","type":"陌生人预警"},{"time":"2021-07-27 13:16:23","name":"一号教学楼一楼","area":"教学楼","type":"陌生人预警"},{"time":"2021-07-27 12:16:23","name":"消防传感器","area":"食堂","type":"消防安全"},{"time":"2021-07-27 11:16:23","name":"智能电表","area":"宿舍楼","type":"异常用电"},{"time":"2021-07-27 10:16:23","name":"电梯","area":"教学楼","type":"电梯预警"},{"time":"2021-07-27 09:16:23","name":"一号教学楼一楼","area":"校门口","type":"黑名单报警"}]},"考勤管理":{"应到人数":1200,"出勤率":91.67,"正常":1100,"请假":10,"缺勤":10,"迟到":80},"重点监控":{"查看设备":[{"value":"1","label":"一号教学楼一楼"},{"value":"2","label":"北门"},{"value":"3","label":"宿舍楼一楼"}]}},"宿舍":{"人员统计":{"宿舍总人数":400,"在寝人数":369,"离寝人数":31,"今日访客总数":26,"访客未出人数":12},"设备状态":{"设备总数":300,"上一小时能耗":436,"开启设备":288,"关闭设备":10,"故障设备":2},"监控视频":{"查看设备":[{"value":"1","label":"宿舍门口"},{"value":"2","label":"宿舍二楼"}]},"能源趋势":{"能源消耗":15141,"图表":{"label":["1月","2月","3月","4月","5月","6月","7月"],"value":[1233,1002,1900,2300,2142,1963,2100,2500]}},"宿舍预警":{"列表":[{"time":"2021-07-27 16:16:23","name":"宿舍门口","area":"宿舍","type":"黑名单报警"},{"time":"2021-07-27 15:16:23","name":"宿舍围墙","area":"宿舍","type":"周界预防"},{"time":"2021-07-27 14:16:23","name":"宿舍门口","area":"宿舍","type":"陌生人预警"},{"time":"2021-07-27 13:16:23","name":"宿舍楼一楼","area":"宿舍","type":"陌生人预警"},{"time":"2021-07-27 12:16:23","name":"消防传感器","area":"宿舍","type":"消防安全"},{"time":"2021-07-27 11:16:23","name":"智能电表","area":"宿舍","type":"异常用电"},{"time":"2021-07-27 10:16:23","name":"宿舍楼二楼","area":"宿舍","type":"陌生人预警"},{"time":"2021-07-27 09:16:23","name":"宿舍楼门口","area":"宿舍","type":"黑名单报警"}]},"用电排行":{"列表":[{"name":"1108","energy":30,"proportion":80},{"name":"1305","energy":28,"proportion":60},{"name":"1331","energy":25,"proportion":50},{"name":"1530","energy":20,"proportion":40},{"name":"1221","energy":15,"proportion":20}]}},"校门口":{"访客统计":{"近7天访客总数":80,"今日访客数":15,"已到访":10,"待来访":5,"图表":{"label":["7.20","7.21","7.22","7.23","7.24","7.25","7.26"],"value":[10,15,11,8,12,9,15]}},"进出统计":{"当天进校":2195,"当天出校":1000,"校内总车辆":40,"固定车辆":36,"访客车辆":4},"体温检测":{"体温正常数":1190,"体温异常数":5,"体温正常率":99.67}},"教学楼":{"能源趋势":{"能源消耗":15141,"图表":{"label":["1月","2月","3月","4月","5月","6月","7月"],"value":[12333,10028,19000,23000,21420,19630,21000]}},"校园预警":{"列表":[{"time":"2021-07-27 16:16:23","name":"一号教学楼入口","area":"教学楼","type":"黑名单报警"},{"time":"2021-07-27 15:16:23","name":"教学楼外侧监控","area":"教学楼","type":"周界预防"},{"time":"2021-07-27 14:16:23","name":"教学楼外侧监控","area":"教学楼","type":"陌生人预警"},{"time":"2021-07-27 13:16:23","name":"一号教学楼入口","area":"教学楼","type":"陌生人预警"},{"time":"2021-07-27 12:16:23","name":"消防传感器","area":"教学楼","type":"消防安全"},{"time":"2021-07-27 11:16:23","name":"智能电表24号","area":"教学楼","type":"异常用电"},{"time":"2021-07-27 10:16:23","name":"智能电表12号","area":"教学楼","type":"异常用电"},{"time":"2021-07-27 09:16:23","name":"一号教学楼一楼","area":"教学楼","type":"黑名单报警"}]},"设备状态":{"设备总数":46,"上一小时能耗":183,"开启设备":40,"关闭设备":4,"故障设备":2},"设备使用率":{"照明":80,"空调":40,"多媒体":50,"监控":74,"消防":90}},"图书馆":{"借书统计":{"近7天访客总数":300,"图表":{"label":["7.20","7.21","7.22","7.23","7.24","7.25","7.26"],"value":[60,40,50,50,42,33,25]}},"设备状态":{"设备总数":46,"上一小时能耗":183,"开启设备":40,"关闭设备":4,"故障设备":2},"馆藏统计":{"馆藏总数":13000,"在藏数":11500,"已借":1500},"热门书籍排行":{"列表":[{"name":"活着","energy":600,"proportion":80},{"name":"朝花夕拾","energy":280,"proportion":60},{"name":"悲惨世界","energy":250,"proportion":50},{"name":"泰戈尔诗集","energy":200,"proportion":40},{"name":"三体","energy":150,"proportion":20}]}},"操场":{"设备状态":{"设备总数":20,"上一小时能耗":44,"开启设备":16,"关闭设备":3,"故障设备":1},"重点监控":{"查看设备":[{"value":"1","label":"围墙"},{"value":"2","label":"操场门口"}]}},"食堂":{"设备状态":{"设备总数":118,"上一小时能耗":300,"开启设备":110,"关闭设备":8,"故障设备":0},"监控视频":{"查看设备":[{"value":"1","label":"食堂门口"},{"value":"2","label":"后厨"}]},"消费情况":{"消费金额":113258,"图表":{"label":["7.20","7.21","7.22","7.23","7.24","7.25","7.26"],"value":[15000,18000,17500,16300,14860,13258,19000]}}},"行政楼":{"能源趋势":{"能源消耗":15141,"图表":{"label":["1月","2月","3月","4月","5月","6月","7月"],"value":[12333,10028,19000,23000,21420,19630,21000]}},"校园预警":{"列表":[{"time":"2021-07-27 16:16:23","name":"行政楼入口","area":"行政楼","type":"黑名单报警"},{"time":"2021-07-27 15:16:23","name":"行政楼外侧监控","area":"行政楼","type":"周界预防"},{"time":"2021-07-27 14:16:23","name":"行政楼外侧监控","area":"行政楼","type":"陌生人预警"},{"time":"2021-07-27 13:16:23","name":"行政楼入口","area":"行政楼","type":"陌生人预警"},{"time":"2021-07-27 12:16:23","name":"消防传感器8号","area":"行政楼","type":"消防安全"},{"time":"2021-07-27 11:16:23","name":"智能电表11号","area":"行政楼","type":"异常用电"},{"time":"2021-07-27 10:16:23","name":"智能电表33号","area":"行政楼","type":"异常用电"},{"time":"2021-07-27 09:16:23","name":"行政楼二楼监控","area":"行政楼","type":"黑名单报警"}]},"设备状态":{"设备总数":46,"上一小时能耗":183,"开启设备":40,"关闭设备":4,"故障设备":2},"设备使用率":{"照明":80,"空调":40,"多媒体":50,"监控":74,"消防":90}},"智能设备":{"体温检测":{"体温正常数":1190,"体温异常数":5,"体温正常率":99.67},"校车安全":{"图表":{"标签":["7.20","7.21","7.22","7.23","7.24","7.25","7.26"],"上学":["400","450","435","463","446","407","480"],"放学":["380","420","465","445","463","466","480"]}},"设备使用率":{"照明":80,"空调":40,"多媒体":50,"其他":74},"区域能耗排行":{"当月能耗排行":18000,"列表":[{"name":"1号教学楼","energy":2400,"proportion":80},{"name":"2号宿舍楼","energy":2100,"proportion":60},{"name":"食堂","energy":1800,"proportion":50},{"name":"行政楼","energy":1500,"proportion":40},{"name":"体育馆","energy":1300,"proportion":20}]}},"智能教室":{"课堂状态":{"班级":" 高三（1）班","课堂状态":"上课","课程名称":"数学","老师":"陶阳","实到":34,"迟到":4,"请假":5},"设备状态":{"设备总数":8,"上一小时能耗":12,"开启设备":6,"关闭设备":2,"故障设备":0}}}')
        },
        a18c: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return s
            }));
            var a = t("0344"),
                i = (t("4789"), t("0b10"), t("2806"), t("bb8c"), t("6e6d")),
                r = t("1e6f"),
                o = [{
                    path: "/demo/xiaotaiyang2020",
                    name: "xiaotaiyang2020",
                    redirect: "/demo/xiaotaiyang2020/home",
                    component: function() {
                        return Promise.all([t.e("chunk-7a5b6a6f"), t.e("chunk-949d3972"), t.e("chunk-a6ee6a1e"), t.e("chunk-cee23dba")]).then(t.bind(null, "c582"))
                    },
                    meta: {
                        title: "智慧校园孪生可视化",
                        icon: "index"
                    },
                    children: [{
                        path: "/demo/xiaotaiyang2020/home",
                        name: "xtyHome2020",
                        component: function() {
                            return Promise.all([t.e("chunk-66f3db3c"), t.e("chunk-3956d878")]).then(t.bind(null, "3984"))
                        },
                        meta: {
                            title: "首页",
                            icon: "home",
                            building: "home"
                        }
                    }, {
                        path: "/demo/xiaotaiyang2020/pass",
                        name: "xtyPass2020",
                        component: function() {
                            return Promise.all([t.e("chunk-66f3db3c"), t.e("chunk-8de62a48")]).then(t.bind(null, "2e60"))
                        },
                        meta: {
                            title: "通行管理",
                            icon: "pass"
                        }
                    }, {
                        path: "/demo/xiaotaiyang2020/safety",
                        name: "xtySafety2020",
                        component: function() {
                            return Promise.all([t.e("chunk-66f3db3c"), t.e("chunk-636caeac")]).then(t.bind(null, "e78b"))
                        },
                        meta: {
                            title: "校园安全",
                            icon: "safety"
                        }
                    }, {
                        path: "/demo/xiaotaiyang2020/equipment",
                        name: "xtyEquipment2020",
                        component: function() {
                            return t.e("chunk-b2010e44").then(t.bind(null, "f575"))
                        },
                        meta: {
                            title: "智能设备",
                            icon: "equipment"
                        }
                    }, {
                        path: "/demo/xiaotaiyang2020/classroom",
                        name: "xtyClassroom2020",
                        component: function() {
                            return Promise.all([t.e("chunk-66f3db3c"), t.e("chunk-becec24c")]).then(t.bind(null, "6390"))
                        },
                        meta: {
                            title: "智能教室",
                            icon: "classroom"
                        }
                    }, {
                        path: "/demo/xiaotaiyang2020/dorm",
                        name: "xtyDorm2020",
                        component: function() {
                            return Promise.all([t.e("chunk-66f3db3c"), t.e("chunk-efa456e2")]).then(t.bind(null, "f270"))
                        },
                        meta: {
                            title: "宿舍",
                            icon: "dorm",
                            building: "dorm"
                        }
                    }, {
                        path: "/demo/xiaotaiyang2020/gate",
                        name: "xtyGate2020",
                        component: function() {
                            return Promise.all([t.e("chunk-66f3db3c"), t.e("chunk-da186f26")]).then(t.bind(null, "5d1e"))
                        },
                        meta: {
                            building: "gate",
                            title: "校门口",
                            icon: "gate"
                        }
                    }, {
                        path: "/demo/xiaotaiyang2020/teaching",
                        name: "xtyTeaching2020",
                        component: function() {
                            return t.e("chunk-90df4140").then(t.bind(null, "a3aa"))
                        },
                        meta: {
                            building: "teaching",
                            title: "教学楼",
                            icon: "teaching"
                        }
                    }, {
                        path: "/demo/xiaotaiyang2020/library",
                        name: "xtyLibrary2020",
                        component: function() {
                            return Promise.all([t.e("chunk-66f3db3c"), t.e("chunk-0264f6d9")]).then(t.bind(null, "dc4e"))
                        },
                        meta: {
                            building: "library",
                            title: "图书馆",
                            icon: "library"
                        }
                    }, {
                        path: "/demo/xiaotaiyang2020/playground",
                        name: "xtyPlayground2020",
                        component: function() {
                            return t.e("chunk-96a23f62").then(t.bind(null, "f79f"))
                        },
                        meta: {
                            building: "playground",
                            title: "操场",
                            icon: "playground"
                        }
                    }, {
                        path: "/demo/xiaotaiyang2020/dining",
                        name: "xtyDining2020",
                        component: function() {
                            return Promise.all([t.e("chunk-66f3db3c"), t.e("chunk-2c60b1fc")]).then(t.bind(null, "552a"))
                        },
                        meta: {
                            building: "dining",
                            title: "食堂",
                            icon: "dining"
                        }
                    }, {
                        path: "/demo/xiaotaiyang2020/office",
                        name: "xtyOffice2020",
                        component: function() {
                            return t.e("chunk-3befdf05").then(t.bind(null, "c5ef"))
                        },
                        meta: {
                            building: "office",
                            title: "办公室",
                            icon: "office"
                        }
                    }]
                }, {
                    path: "/demo/hebi",
                    name: "hebi",
                    component: function() {
                        return t.e("chunk-411a8765").then(t.bind(null, "6200"))
                    },
                    redirect: "/demo/hebi/home",
                    meta: {
                        title: "智慧校园孪生可视化",
                        icon: "table"
                    },
                    children: [{
                        path: "/demo/hebi/preview",
                        name: "preview",
                        component: function() {
                            return t.e("chunk-745de591").then(t.bind(null, "57f9"))
                        },
                        meta: {
                            title: "智慧校园孪生可视化",
                            icon: "table"
                        }
                    }, {
                        path: "/demo/hebi/home",
                        name: "home",
                        component: function() {
                            return Promise.all([t.e("chunk-7a5b6a6f"), t.e("chunk-52fdd4b4"), t.e("chunk-390f9b44")]).then(t.bind(null, "0af3"))
                        },
                        meta: {
                            title: "智慧校园孪生可视化",
                            icon: "table"
                        }
                    }]
                }],
                c = [{
                    path: "/demo/xiaotaiyang",
                    name: "xiaotaiyang",
                    redirect: "/demo/xiaotaiyang/home",
                    component: function() {
                        return Promise.all([t.e("chunk-7a5b6a6f"), t.e("chunk-949d3972"), t.e("chunk-622deadc"), t.e("chunk-0ea7b972")]).then(t.bind(null, "3de7"))
                    },
                    meta: {
                        title: "智慧校园孪生可视化",
                        icon: "index"
                    },
                    children: [{
                        path: "/demo/xiaotaiyang/home",
                        name: "xtyHome",
                        component: function() {
                            return Promise.all([t.e("chunk-375602b4"), t.e("chunk-7a84a594")]).then(t.bind(null, "ce35"))
                        },
                        meta: {
                            title: "首页",
                            name: "home"
                        }
                    }, {
                        path: "pass",
                        name: "xtyPass",
                        component: function() {
                            return Promise.all([t.e("chunk-375602b4"), t.e("chunk-64231f1b")]).then(t.bind(null, "8f2e"))
                        },
                        meta: {
                            title: "通行管理",
                            name: "pass"
                        }
                    }, {
                        path: "safety",
                        name: "xtySafety",
                        component: function() {
                            return Promise.all([t.e("chunk-375602b4"), t.e("chunk-6cec1b35")]).then(t.bind(null, "9f79"))
                        },
                        meta: {
                            title: "校园安全",
                            name: "safety"
                        }
                    }, {
                        path: "equipment",
                        name: "xtyEquipment",
                        component: function() {
                            return t.e("chunk-d2ae315c").then(t.bind(null, "6be9"))
                        },
                        meta: {
                            title: "智能设备",
                            name: "equipment",
                            building: "equipment"
                        }
                    }, {
                        path: "classroom",
                        name: "xtyClassroom",
                        component: function() {
                            return Promise.all([t.e("chunk-375602b4"), t.e("chunk-5f879df8")]).then(t.bind(null, "1a57"))
                        },
                        meta: {
                            title: "智能教室",
                            name: "classroom"
                        }
                    }, {
                        path: "dorm",
                        name: "xtyDorm",
                        component: function() {
                            return Promise.all([t.e("chunk-375602b4"), t.e("chunk-3dc0611e")]).then(t.bind(null, "a921"))
                        },
                        meta: {
                            title: "宿舍",
                            name: "dorm",
                            building: "dorm"
                        }
                    }, {
                        path: "gate",
                        name: "xtyGate",
                        component: function() {
                            return Promise.all([t.e("chunk-375602b4"), t.e("chunk-e1858382")]).then(t.bind(null, "c82d"))
                        },
                        meta: {
                            building: "gate",
                            title: "校门口",
                            name: "gate"
                        }
                    }, {
                        path: "teaching",
                        name: "xtyTeaching",
                        component: function() {
                            return Promise.all([t.e("chunk-375602b4"), t.e("chunk-4aaa02e8")]).then(t.bind(null, "3384"))
                        },
                        meta: {
                            building: "teaching",
                            title: "教学楼",
                            name: "teaching"
                        }
                    }, {
                        path: "library",
                        name: "xtyLibrary",
                        component: function() {
                            return Promise.all([t.e("chunk-375602b4"), t.e("chunk-fb54a244")]).then(t.bind(null, "61c1"))
                        },
                        meta: {
                            building: "library",
                            title: "图书馆",
                            name: "library"
                        }
                    }, {
                        path: "playground",
                        name: "xtyPlayground",
                        component: function() {
                            return t.e("chunk-01bd3a4d").then(t.bind(null, "bdf0"))
                        },
                        meta: {
                            building: "playground",
                            title: "操场",
                            name: "playground"
                        }
                    }, {
                        path: "dining",
                        name: "xtyDining",
                        component: function() {
                            return Promise.all([t.e("chunk-375602b4"), t.e("chunk-b37519bc")]).then(t.bind(null, "a7a2"))
                        },
                        meta: {
                            building: "dining",
                            title: "食堂",
                            name: "dining"
                        }
                    }, {
                        path: "office",
                        name: "xtyOffice",
                        component: function() {
                            return Promise.all([t.e("chunk-375602b4"), t.e("chunk-6d990e8a")]).then(t.bind(null, "23a4"))
                        },
                        meta: {
                            building: "office",
                            title: "办公室",
                            name: "office"
                        }
                    }]
                }];
            i["default"].use(r["a"]);
            var u = [{
                    path: "/login",
                    component: function() {
                        return t.e("chunk-503f4006").then(t.bind(null, "9ed6"))
                    },
                    hidden: !0
                }, {
                    path: "/404",
                    component: function() {
                        return t.e("chunk-15ac51ae").then(t.bind(null, "8cdb"))
                    },
                    hidden: !0
                }, {
                    path: "/",
                    redirect: "/demo/xiaotaiyang",
                    component: function() {
                        return t.e("chunk-c673996c").then(t.bind(null, "c1f7"))
                    }
                }].concat(Object(a["a"])(o), Object(a["a"])(c), [{
                    path: "*",
                    redirect: "/404",
                    hidden: !0
                }]),
                m = function() {
                    return new r["a"]({
                        mode: "hash",
                        scrollBehavior: function() {
                            return {
                                y: 0
                            }
                        },
                        routes: u
                    })
                },
                l = m();

            function s() {
                var e = m();
                l.matcher = e.matcher
            }
            n["a"] = l
        },
        b20f: function(e, n, t) {
            e.exports = {
                menuText: "#bfcbd9",
                menuActiveText: "#409eff",
                subMenuActiveText: "#f4f4f5",
                menuBg: "#304156",
                menuHover: "#263445",
                subMenuBg: "#1f2d3d",
                subMenuHover: "#001528",
                sideBarWidth: "11rem"
            }
        },
        c881: function(e, n, t) {}
    },
    [
        [0, "runtime", "chunk-elementUI", "chunk-libs"]
    ]
]);