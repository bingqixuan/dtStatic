(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-e1858382"], {
        "03eb": function(t, i, a) {
            var e = a("a230"),
                n = a("6aab"),
                s = a("c8a8");
            e({
                target: "Array",
                proto: !0
            }, {
                fill: n
            }), s("fill")
        },
        "1d67": function(t, i, a) {
            "use strict";
            var e = a("a230"),
                n = a("eb50"),
                s = a("1054"),
                r = a("6729"),
                c = a("204f"),
                o = 1..toFixed,
                l = Math.floor,
                d = function(t, i, a) {
                    return 0 === i ? a : i % 2 === 1 ? d(t, i - 1, a * t) : d(t * t, i / 2, a)
                },
                u = function(t) {
                    var i = 0,
                        a = t;
                    while (a >= 4096) i += 12, a /= 4096;
                    while (a >= 2) i += 1, a /= 2;
                    return i
                },
                h = function(t, i, a) {
                    var e = -1,
                        n = a;
                    while (++e < 6) n += i * t[e], t[e] = n % 1e7, n = l(n / 1e7)
                },
                f = function(t, i) {
                    var a = 6,
                        e = 0;
                    while (--a >= 0) e += t[a], t[a] = l(e / i), e = e % i * 1e7
                },
                g = function(t) {
                    var i = 6,
                        a = "";
                    while (--i >= 0)
                        if ("" !== a || 0 === i || 0 !== t[i]) {
                            var e = String(t[i]);
                            a = "" === a ? e : a + r.call("0", 7 - e.length) + e
                        }
                    return a
                },
                p = o && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !c((function() {
                    o.call({})
                }));
            e({
                target: "Number",
                proto: !0,
                forced: p
            }, {
                toFixed: function(t) {
                    var i, a, e, c, o = s(this),
                        l = n(t),
                        p = [0, 0, 0, 0, 0, 0],
                        m = "",
                        v = "0";
                    if (l < 0 || l > 20) throw RangeError("Incorrect fraction digits");
                    if (o != o) return "NaN";
                    if (o <= -1e21 || o >= 1e21) return String(o);
                    if (o < 0 && (m = "-", o = -o), o > 1e-21)
                        if (i = u(o * d(2, 69, 1)) - 69, a = i < 0 ? o * d(2, -i, 1) : o / d(2, i, 1), a *= 4503599627370496, i = 52 - i, i > 0) {
                            h(p, 0, a), e = l;
                            while (e >= 7) h(p, 1e7, 0), e -= 7;
                            h(p, d(10, e, 1), 0), e = i - 1;
                            while (e >= 23) f(p, 1 << 23), e -= 23;
                            f(p, 1 << e), h(p, 1, 1), f(p, 2), v = g(p)
                        } else h(p, 0, a), h(p, 1 << -i, 0), v = g(p) + r.call("0", l);
                    return l > 0 ? (c = v.length, v = m + (c <= l ? "0." + r.call("0", l - c) + v : v.slice(0, c - l) + "." + v.slice(c - l))) : v = m + v, v
                }
            })
        },
        "311f": function(t, i, a) {},
        "34df": function(t, i, a) {
            "use strict";
            var e = a("a230"),
                n = a("479b").map,
                s = a("9b32"),
                r = s("map");
            e({
                target: "Array",
                proto: !0,
                forced: !r
            }, {
                map: function(t) {
                    return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        6729: function(t, i, a) {
            "use strict";
            var e = a("eb50"),
                n = a("69a8"),
                s = a("c499");
            t.exports = function(t) {
                var i = n(s(this)),
                    a = "",
                    r = e(t);
                if (r < 0 || r == 1 / 0) throw RangeError("Wrong number of repetitions");
                for (; r > 0;
                    (r >>>= 1) && (i += i)) 1 & r && (a += i);
                return a
            }
        },
        "675a": function(t, i, a) {
            t.exports = a.p + "static/img/xty-classroom.aa5e25f2.png"
        },
        "6aab": function(t, i, a) {
            "use strict";
            var e = a("a83a"),
                n = a("17c3"),
                s = a("2566");
            t.exports = function(t) {
                var i = e(this),
                    a = s(i),
                    r = arguments.length,
                    c = n(r > 1 ? arguments[1] : void 0, a),
                    o = r > 2 ? arguments[2] : void 0,
                    l = void 0 === o ? a : n(o, a);
                while (l > c) i[c++] = t;
                return i
            }
        },
        "892f": function(t, i, a) {
            "use strict";
            var e = function() {
                    var t = this,
                        i = t.$createElement,
                        a = t._self._c || i;
                    return a("div", {
                        staticClass: "circle-progress-container-wapper"
                    }, [a("div", {
                        staticClass: "cp-top",
                        staticStyle: {
                            width: "142PX",
                            height: "142PX"
                        }
                    }, [t._m(0), a("circle-progress", {
                        staticClass: "sh-canvas-cirlce",
                        attrs: {
                            "data-msg": t.healthProportion,
                            "circle-color": "#13273b",
                            "circle-radius": 58,
                            "circle-width": 13,
                            "line-width": 13,
                            duration: 1.8,
                            "start-deg": 270,
                            "use-gradient": !0,
                            "line-color-stops": t.lineColorStops,
                            percentage: t.healthProportion,
                            "point-radius": 0,
                            "show-text": !0,
                            "bottom-text": "体温正常率",
                            "font-color": "#7ec7ff",
                            "font-size": 25
                        }
                    })], 1), a("div", {
                        staticClass: "cp-bottom"
                    }, [a("div", [a("span", [t._v("体温正常数")]), a("span", [t._v(t._s(t.normal))])]), a("div", [a("span", [t._v("体温异常数")]), a("span", [t._v(t._s(t.abnormal))])])])])
                },
                n = [function() {
                    var t = this,
                        i = t.$createElement,
                        a = t._self._c || i;
                    return a("div", {
                        staticClass: "sh-outer-circle",
                        attrs: {
                            "data-msg": "装饰"
                        }
                    }, [a("div"), a("div"), a("div")])
                }],
                s = (a("3828"), function() {
                    var t = this,
                        i = t.$createElement,
                        a = t._self._c || i;
                    return a("canvas", {
                        ref: "canvasDemo",
                        attrs: {
                            width: t.canvasSize,
                            height: t.canvasSize
                        }
                    })
                }),
                r = [],
                c = a("0344"),
                o = (a("34df"), a("d835"), a("4b0c"), a("aa0c"), a("1d67"), a("03eb"), a("ca57")),
                l = a.n(o),
                d = {
                    name: "VueAwesomeProgress",
                    props: {
                        startDeg: {
                            type: Number,
                            default: 270,
                            validator: function(t) {
                                return t >= 0 && t < 360
                            }
                        },
                        percentage: {
                            type: Number,
                            default: 0,
                            validator: function(t) {
                                return t >= 0 && t <= 100
                            }
                        },
                        circleRadius: {
                            type: Number,
                            default: 40
                        },
                        circleWidth: {
                            type: Number,
                            default: 2
                        },
                        circleColor: {
                            type: String,
                            default: "#e5e5e5"
                        },
                        lineWidth: {
                            type: Number,
                            default: 8
                        },
                        useGradient: {
                            type: Boolean,
                            default: !1
                        },
                        lineColor: {
                            type: String,
                            default: "#3B77E3"
                        },
                        lineColorStops: {
                            type: Array,
                            default: function() {
                                return [{
                                    percent: 0,
                                    color: "#13CDE3"
                                }, {
                                    percent: 1,
                                    color: "#3B77E3"
                                }]
                            }
                        },
                        showText: {
                            type: Boolean,
                            default: !0
                        },
                        fontSize: {
                            type: Number,
                            default: 14
                        },
                        fontColor: {
                            type: String,
                            default: "#444"
                        },
                        pointRadius: {
                            type: Number,
                            default: 6
                        },
                        pointColor: {
                            type: String,
                            default: "#3B77E3"
                        },
                        animated: {
                            type: Boolean,
                            default: !0
                        },
                        easing: {
                            type: String,
                            default: "0.42,0,1,1",
                            validator: function(t) {
                                return /^(\-?\d+(\.\d+)?,){3}\-?\d+(\.\d+)?$/.test(t)
                            }
                        },
                        duration: {
                            type: Number,
                            default: .6
                        },
                        format: {
                            type: Function
                        },
                        bottomText: {
                            type: String,
                            defalut: ""
                        }
                    },
                    data: function() {
                        return {
                            gradient: null,
                            darkGradient: null,
                            easingFunc: null,
                            animationId: null,
                            canvasInstance: null,
                            ctx: null
                        }
                    },
                    computed: {
                        outerRadius: function() {
                            return this.pointRadius > 0 ? this.circleRadius + this.pointRadius : this.circleRadius + this.lineWidth
                        },
                        canvasSize: function() {
                            return 2 * this.outerRadius + "px"
                        },
                        steps: function() {
                            return 60 * this.duration
                        }
                    },
                    watch: {
                        percentage: function(t, i) {
                            if (!(t >= 0 && t <= 100)) throw new Error("数组 ".concat(t, " 的范围必须在1~100内"));
                            0 != t && (window.cancelAnimationFrame(this.animationId), this.animateDrawArc(i, t, 1, 18))
                        }
                    },
                    mounted: function() {
                        var t = this.easing.split(",").map((function(t) {
                            return Number(t)
                        }));
                        this.easingFunc = l.a.apply(void 0, Object(c["a"])(t)), this.initCanvas()
                    },
                    beforeDestroy: function() {
                        window.cancelAnimationFrame(this.animationId)
                    },
                    methods: {
                        initCanvas: function() {
                            var t = this;
                            this.canvasInstance = this.$refs.canvasDemo, this.ctx = this.canvasInstance.getContext("2d"), this.useGradient && (this.gradient = this.ctx.createLinearGradient(this.circleRadius, 0, this.circleRadius, 2 * this.circleRadius), this.darkGradient = this.ctx.createLinearGradient(this.circleRadius, 0, this.circleRadius, 2 * this.circleRadius), this.lineColorStops.forEach((function(i) {
                                t.gradient.addColorStop(i.percent, "rgba(".concat(i.color, ",1)")), t.darkGradient.addColorStop(i.percent, "rgba(".concat(i.color, ",0.7)"))
                            }))), 0 === this.percentage ? this.animateDrawArc(0, 0, 0, 0) : this.animated ? this.animateDrawArc(0, this.percentage, 1, this.steps) : this.animateDrawArc(0, this.percentage, this.steps, this.steps)
                        },
                        animateDrawArc: function(t, i, a, e) {
                            this.ctx.clearRect(0, 0, this.canvasInstance.clientWidth, this.canvasInstance.clientHeight);
                            var n, s = t + (i - t) * this.easingFunc(a / e),
                                r = this.getTargetDegByPercentage(s),
                                c = this.deg2Arc(this.startDeg),
                                o = this.deg2Arc(r);
                            (this.ctx.strokeStyle = this.circleColor, this.ctx.lineWidth = this.circleWidth, this.ctx.beginPath(), this.ctx.arc(this.outerRadius, this.outerRadius, this.circleRadius, 0, this.deg2Arc(360)), this.ctx.stroke(), this.showText) && (this.ctx.font = "".concat(this.fontSize - 3, "px font-pmzd"), this.ctx.fillStyle = this.fontColor, this.ctx.textAlign = "center", this.ctx.textBaseline = "bottom", n = "function" === typeof this.format ? this.format(s) : Number(s).toFixed(2) + "%", this.ctx.fillText(n, this.canvasInstance.clientWidth / 2, this.canvasInstance.clientWidth / 2 + 5), this.ctx.font = "".concat(this.fontSize - 13, "px font-pmzd"), this.ctx.fillStyle = this.fontColor, this.ctx.textAlign = "center", this.ctx.textBaseline = "top", this.ctx.fillText(this.bottomText, this.canvasInstance.clientWidth / 2, this.canvasInstance.clientWidth / 2 + 10));
                            if (e > 0 && (this.ctx.strokeStyle = this.useGradient ? this.darkGradient : this.lineColor, this.ctx.lineWidth = this.lineWidth, this.ctx.beginPath(), this.ctx.arc(this.outerRadius, this.outerRadius, .88 * this.circleRadius, c, o), this.ctx.stroke()), e > 0 && (this.ctx.strokeStyle = this.useGradient ? this.gradient : this.lineColor, this.ctx.lineWidth = this.lineWidth, this.ctx.beginPath(), this.ctx.arc(this.outerRadius, this.outerRadius, this.circleRadius, c, o), this.ctx.stroke()), this.pointRadius > 0) {
                                this.ctx.fillStyle = this.pointColor;
                                var l = this.getPositionsByDeg(r);
                                this.ctx.beginPath(), this.ctx.arc(l.x + this.pointRadius, l.y + this.pointRadius, this.pointRadius, 0, this.deg2Arc(360)), this.ctx.fill()
                            }
                            a !== e ? (a++, this.animationId = window.requestAnimationFrame(this.animateDrawArc.bind(null, t, i, a, e))) : window.cancelAnimationFrame(this.animationId)
                        },
                        getTargetDegByPercentage: function(t) {
                            if (100 === t) return this.startDeg + 360;
                            var i = (this.startDeg + 360 * t / 100) % 360;
                            return i
                        },
                        getPositionsByDeg: function(t) {
                            var i = 0,
                                a = 0;
                            return t >= 0 && t <= 90 ? (i = this.circleRadius * (1 + Math.cos(this.deg2Arc(t))), a = this.circleRadius * (1 + Math.sin(this.deg2Arc(t)))) : t > 90 && t <= 180 ? (i = this.circleRadius * (1 - Math.cos(this.deg2Arc(180 - t))), a = this.circleRadius * (1 + Math.sin(this.deg2Arc(180 - t)))) : t > 180 && t <= 270 ? (i = this.circleRadius * (1 - Math.sin(this.deg2Arc(270 - t))), a = this.circleRadius * (1 - Math.cos(this.deg2Arc(270 - t)))) : (i = this.circleRadius * (1 + Math.cos(this.deg2Arc(360 - t))), a = this.circleRadius * (1 - Math.sin(this.deg2Arc(360 - t)))), {
                                x: i,
                                y: a
                            }
                        },
                        deg2Arc: function(t) {
                            return t / 180 * Math.PI
                        }
                    }
                },
                u = d,
                h = a("cba8"),
                f = Object(h["a"])(u, s, r, !1, null, null, null),
                g = f.exports,
                p = {
                    name: "circle-progress-container",
                    components: {
                        circleProgress: g
                    },
                    props: {
                        normal: {
                            type: Number,
                            default: function() {
                                return 0
                            }
                        },
                        abnormal: {
                            type: Number,
                            default: function() {
                                return 0
                            }
                        },
                        healthProportion: {
                            type: Number,
                            default: function() {
                                return 0
                            }
                        }
                    },
                    data: function() {
                        return {
                            lineColorStops: [{
                                percent: 0,
                                color: "44, 161, 255"
                            }, {
                                percent: 1,
                                color: "12, 214, 251"
                            }]
                        }
                    },
                    created: function() {},
                    mounted: function() {},
                    methods: {},
                    watch: {}
                },
                m = p,
                v = (a("ee52"), Object(h["a"])(m, e, n, !1, null, "479823a6", null));
            i["a"] = v.exports
        },
        c82d: function(t, i, a) {
            "use strict";
            a.r(i);
            var e = function() {
                    var t = this,
                        i = t.$createElement,
                        e = t._self._c || i;
                    return e("div", {
                        staticClass: "gate-wapper"
                    }, [0 == t.xiaotaiyang.pageMode ? e("div", {
                        staticClass: "gate-left",
                        attrs: {
                            "data-msg": "首页左边内容"
                        }
                    }, [e("div", {
                        staticClass: "gate-l-top"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-200 animate__fadeInLeft",
                        attrs: {
                            title: "访客统计"
                        }
                    }, [e("digital-subtitle-contetn", {
                        attrs: {
                            slot: "content",
                            number: t.xiaotaiyang.xtyMock["校门口"]["访客统计"]["近7天访客总数"],
                            title: "近7天访客总数"
                        },
                        slot: "content"
                    }, [e("div", {
                        staticClass: "gate-lt-content",
                        attrs: {
                            slot: "ds-content"
                        },
                        slot: "ds-content"
                    }, [e("ul", {
                        staticClass: "gate-lt-top"
                    }, [e("li", [e("span", [t._v("今日访客数")]), e("span", [t._v(t._s(t.xiaotaiyang.xtyMock["校门口"]["访客统计"]["今日访客数"]))])]), e("li", [e("span", [t._v("已到访")]), e("span", [t._v(t._s(t.xiaotaiyang.xtyMock["校门口"]["访客统计"]["已到访"]))])]), e("li", [e("span", [t._v("待来访")]), e("span", [t._v(t._s(t.xiaotaiyang.xtyMock["校门口"]["访客统计"]["待来访"]))])])]), e("div", {
                        staticClass: "gate-lt-bottom"
                    }, [e("line-chart", {
                        attrs: {
                            echartsData: t.xiaotaiyang.xtyMock["校门口"]["访客统计"]["图表"],
                            yaxisLeftText: "人数"
                        }
                    })], 1)])])], 1)], 1), e("div", {
                        staticClass: "gate-l-bottom"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-400 animate__fadeInLeft",
                        attrs: {
                            title: "进出统计"
                        }
                    }, [e("div", {
                        staticClass: "gate-lb-main",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [e("div", {
                        staticClass: "gate-lb-top"
                    }, [e("div", [e("span", [t._v("当天进校")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["校门口"]["进出统计"]["当天进校"]) + "人/次")])]), e("div", [e("span", [t._v("当天出校")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["校门口"]["进出统计"]["当天出校"]) + "人/次")])])]), e("div", {
                        staticClass: "gate-lb-bottom"
                    }, [e("div", [e("span", [t._v("校内总车辆")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["校门口"]["进出统计"]["校内总车辆"]))])]), e("div", [e("span", [t._v("固定车辆")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["校门口"]["进出统计"]["固定车辆"]))])]), e("div", [e("span", [t._v("访客车辆")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["校门口"]["进出统计"]["访客车辆"]))])])])])])], 1)]) : t._e(), 0 == t.xiaotaiyang.pageMode ? e("div", {
                        staticClass: "gate-right",
                        attrs: {
                            "data-msg": "首页右边内容"
                        }
                    }, [e("div", {
                        staticClass: "gate-r-top"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-200 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "体温检测"
                        }
                    }, [e("div", {
                        staticClass: "gate-rt-content",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [e("circle-progress-container", {
                        attrs: {
                            normal: t.xiaotaiyang.xtyMock["校门口"]["体温检测"]["体温正常数"],
                            abnormal: t.xiaotaiyang.xtyMock["校门口"]["体温检测"]["体温异常数"],
                            healthProportion: t.xiaotaiyang.xtyMock["校门口"]["体温检测"]["体温正常率"]
                        }
                    })], 1)])], 1), e("div", {
                        staticClass: "gate-r-center"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-400 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "监控视频"
                        }
                    }, [e("div", {
                        staticClass: "gate-rc-monitor",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [e("img", {
                        attrs: {
                            src: a("675a"),
                            alt: ""
                        }
                    }), e("i", {
                        staticClass: "iconfont icon-icon-fangda"
                    })])])], 1)]) : t._e()])
                },
                n = [],
                s = a("06c4"),
                r = a("7b25"),
                c = a("cc62"),
                o = a("6e5d"),
                l = a("7eb3"),
                d = a("892f"),
                u = a("52c1"),
                h = {
                    name: "home",
                    components: {
                        digitalContainer: r["a"],
                        timeSwitchTab: c["a"],
                        digitalSubtitleContetn: o["a"],
                        lineChart: l["a"],
                        circleProgressContainer: d["a"]
                    },
                    props: {},
                    data: function() {
                        return {}
                    },
                    created: function() {},
                    mounted: function() {},
                    methods: {},
                    watch: {},
                    computed: Object(s["a"])({}, Object(u["c"])(["xiaotaiyang"]))
                },
                f = h,
                g = (a("fa2c"), a("cba8")),
                p = Object(g["a"])(f, e, n, !1, null, "2fcd24fe", null);
            i["default"] = p.exports
        },
        ca57: function(t, i) {
            var a = 4,
                e = .001,
                n = 1e-7,
                s = 10,
                r = 11,
                c = 1 / (r - 1),
                o = "function" === typeof Float32Array;

            function l(t, i) {
                return 1 - 3 * i + 3 * t
            }

            function d(t, i) {
                return 3 * i - 6 * t
            }

            function u(t) {
                return 3 * t
            }

            function h(t, i, a) {
                return ((l(i, a) * t + d(i, a)) * t + u(i)) * t
            }

            function f(t, i, a) {
                return 3 * l(i, a) * t * t + 2 * d(i, a) * t + u(i)
            }

            function g(t, i, a, e, r) {
                var c, o, l = 0;
                do {
                    o = i + (a - i) / 2, c = h(o, e, r) - t, c > 0 ? a = o : i = o
                } while (Math.abs(c) > n && ++l < s);
                return o
            }

            function p(t, i, e, n) {
                for (var s = 0; s < a; ++s) {
                    var r = f(i, e, n);
                    if (0 === r) return i;
                    var c = h(i, e, n) - t;
                    i -= c / r
                }
                return i
            }

            function m(t) {
                return t
            }
            t.exports = function(t, i, a, n) {
                if (!(0 <= t && t <= 1 && 0 <= a && a <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                if (t === i && a === n) return m;
                for (var s = o ? new Float32Array(r) : new Array(r), l = 0; l < r; ++l) s[l] = h(l * c, t, a);

                function d(i) {
                    for (var n = 0, o = 1, l = r - 1; o !== l && s[o] <= i; ++o) n += c;
                    --o;
                    var d = (i - s[o]) / (s[o + 1] - s[o]),
                        u = n + d * c,
                        h = f(u, t, a);
                    return h >= e ? p(i, u, t, a) : 0 === h ? u : g(i, n, n + c, t, a)
                }
                return function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : h(d(t), i, n)
                }
            }
        },
        cd26: function(t, i, a) {},
        ee52: function(t, i, a) {
            "use strict";
            a("cd26")
        },
        fa2c: function(t, i, a) {
            "use strict";
            a("311f")
        }
    }
]);