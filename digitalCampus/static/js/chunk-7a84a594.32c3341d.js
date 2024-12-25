(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-7a84a594"], {
        "0103": function(t, a, i) {
            "use strict";
            i("2be8")
        },
        "03ce": function(t, a, i) {
            "use strict";
            i("6014")
        },
        "03d7": function(t, a, i) {},
        1861: function(t, a, i) {
            "use strict";
            i("1b5d")
        },
        "1b5d": function(t, a, i) {},
        "2be8": function(t, a, i) {},
        "2c7f": function(t, a, i) {
            "use strict";
            var e = function() {
                    var t = this,
                        a = t.$createElement,
                        i = t._self._c || a;
                    return i("div", {
                        staticClass: "gradient-ring-svg-wapper"
                    }, [i("component-progress", {
                        staticClass: "upgrade-progress",
                        attrs: {
                            idIndex: t.idIndex,
                            isAnimation: t.options.isAnimation,
                            isRound: t.options.isRound,
                            width: t.options.width,
                            radius: t.options.radius,
                            progress: 1 * t.progressPro,
                            barColor: {
                                barColorStart: t.barColorStart,
                                barColorEnd: t.barColorEnd
                            },
                            duration: t.options.duration,
                            timeFunction: t.options.timeFunction,
                            backgroundColor: t.bgColor,
                            title: t.options.title,
                            number: t.number
                        }
                    }), i("div", {
                        staticClass: "grs-bottom"
                    }, [i("span", {
                        style: {
                            background: "linear-gradient(90deg, " + t.barColorStart + " 0%," + t.barColorEnd + " 100%)"
                        }
                    }), i("span", [t._v(t._s(t.title))])])], 1)
                },
                s = [],
                n = (i("3828"), function() {
                    var t = this,
                        a = t.$createElement,
                        i = t._self._c || a;
                    return i("div", {
                        staticClass: "progress-container",
                        style: {
                            height: t.width + "px"
                        }
                    }, [i("svg", {
                        staticStyle: {
                            transform: "rotate(-90deg)"
                        },
                        attrs: {
                            width: t.width,
                            height: t.width
                        }
                    }, [i("defs", [i("linearGradient", {
                        attrs: {
                            id: "grad" + t.idIndex,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%"
                        }
                    }, [i("stop", {
                        style: {
                            "stop-color": 0 === t.progress ? "#D8D8D8" : t.barColor.barColorEnd
                        },
                        attrs: {
                            offset: (100 - t.progress) / 100
                        }
                    }), i("stop", {
                        style: {
                            "stop-color": 0 === t.progress ? "#D8D8D8" : t.barColor.barColorStart
                        },
                        attrs: {
                            offset: "100%"
                        }
                    })], 1)], 1), i("circle", {
                        attrs: {
                            "data-des": "背景",
                            r: (t.width - t.radius) / 2,
                            cy: t.width / 2,
                            cx: t.width / 2,
                            "stroke-width": t.radius,
                            stroke: t.backgroundColor,
                            fill: "none",
                            "stroke-linecap": t.isRound ? "round" : "square",
                            "stroke-dasharray": 3.14 * (t.width - t.radius) * 1
                        }
                    }), i("circle", {
                        ref: "$bar",
                        attrs: {
                            "data-des": "主圈",
                            r: (t.width - t.radius) / 2,
                            cy: t.width / 2,
                            cx: t.width / 2,
                            stroke: "url(#grad" + t.idIndex + ")",
                            "stroke-width": t.radius,
                            "stroke-linecap": t.isRound ? "round" : "square",
                            "stroke-dasharray": 3.14 * (t.width - t.radius),
                            "stroke-dashoffset": t.isAnimation ? 3.14 * (t.width - t.radius) : 3.14 * (t.width - t.radius) * (100 - t.progress) / 100,
                            fill: "none"
                        }
                    })]), i("div", {
                        staticClass: "progress-text"
                    }, [i("p", {
                        staticClass: "progress-number"
                    }, [t._v(t._s(t.number))])])])
                }),
                r = [],
                o = (i("4789"), {
                    name: "ComponentProgress",
                    props: {
                        idIndex: String,
                        width: [Number, String],
                        radius: [Number, String],
                        progress: [Number, String],
                        barColor: Object,
                        backgroundColor: String,
                        number: Number,
                        title: String,
                        isAnimation: {
                            type: Boolean,
                            default: !0
                        },
                        isRound: {
                            type: Boolean,
                            default: !0
                        },
                        id: {
                            type: [String, Number],
                            default: 1
                        },
                        duration: {
                            type: [String, Number],
                            default: 1e3
                        },
                        delay: {
                            type: [String, Number],
                            default: 50
                        },
                        timeFunction: {
                            type: String,
                            default: "cubic-bezier(0.99, 0.01, 0.22, 0.94)"
                        }
                    },
                    mounted: function() {
                        if (this.isAnimation) {
                            var t = document.createElement("style");
                            t.type = "text/css";
                            var a = this.id + this.idIndex;
                            t.innerHTML = "\n    @keyframes circle_progress_keyframes_name_".concat(a, " {\n    from {stroke-dashoffset: ").concat(3.14 * (this.width - this.radius), "px}\n    to {stroke-dashoffset: ").concat(3.14 * (this.width - this.radius) * (100 - this.progress) / 100, "px}}\n    .circle_progress_bar").concat(a, " {animation: circle_progress_keyframes_name_").concat(a, " ").concat(this.duration, "ms ").concat(this.delay, "ms ").concat(this.timeFunction, " forwards}"), document.getElementsByTagName("head")[0].appendChild(t), this.$refs.$bar.classList.add("circle_progress_bar".concat(a))
                        }
                    }
                }),
                c = o,
                d = (i("1861"), i("cba8")),
                l = Object(d["a"])(c, n, r, !1, null, "54c810f6", null),
                u = l.exports,
                g = {
                    name: "gradient-ring-svg",
                    components: {
                        componentProgress: u
                    },
                    props: {
                        idIndex: {
                            type: String
                        },
                        progressPro: {
                            type: Number,
                            default: function() {
                                return 0
                            }
                        },
                        number: {
                            type: [Number, String],
                            default: function() {
                                return "-"
                            }
                        },
                        bgColor: {
                            type: String,
                            defalut: function() {
                                return ""
                            }
                        },
                        barColorStart: {
                            type: String,
                            defalut: function() {
                                return ""
                            }
                        },
                        barColorEnd: {
                            type: String,
                            defalut: function() {
                                return ""
                            }
                        },
                        title: {
                            type: String,
                            defalut: function() {
                                return ""
                            }
                        }
                    },
                    data: function() {
                        return {
                            radius: "26",
                            position: "30",
                            strokeWidth: 4,
                            percentage: "",
                            options: {
                                width: 60,
                                radius: 5,
                                barColors: {
                                    barColorStart: "red",
                                    barColorEnd: "green"
                                },
                                duration: 1e3,
                                title: "",
                                number: 0,
                                backgroundColor: "#DCDADD",
                                timeFunction: "cubic-bezier(.49,.12,.62,.97)",
                                isAnimation: !0,
                                isRound: !1
                            }
                        }
                    },
                    created: function() {},
                    mounted: function() {},
                    methods: {},
                    watch: {}
                },
                p = g,
                m = (i("03ce"), Object(d["a"])(p, e, s, !1, null, "f728355e", null));
            a["a"] = m.exports
        },
        "36c1": function(t, a, i) {},
        6006: function(t, a, i) {
            "use strict";
            i("03d7")
        },
        6014: function(t, a, i) {},
        a0dc: function(t, a, i) {
            t.exports = i.p + "static/img/xty-video.b8b61fbe.png"
        },
        ae67: function(t, a, i) {
            "use strict";
            i("36c1")
        },
        ce35: function(t, a, i) {
            "use strict";
            i.r(a);
            var e = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
                        staticClass: "home-wapper"
                    }, [0 == t.xiaotaiyang.pageMode ? e("div", {
                        staticClass: "home-left",
                        attrs: {
                            "data-msg": "首页左边内容"
                        }
                    }, [e("div", {
                        staticClass: "home-l-top"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-200 animate__fadeInLeft",
                        attrs: {
                            title: "告警趋势"
                        }
                    }, [e("digital-subtitle-contetn", {
                        attrs: {
                            slot: "content",
                            number: t.xiaotaiyang.xtyMock["首页"]["告警趋势"]["告警数"],
                            title: "告警数",
                            switchData: [{
                                name: "年"
                            }, {
                                name: "月"
                            }]
                        },
                        slot: "content"
                    }, [e("div", {
                        attrs: {
                            slot: "ds-content"
                        },
                        slot: "ds-content"
                    }, [e("line-chart", {
                        attrs: {
                            echartsData: t.xiaotaiyang.xtyMock["首页"]["告警趋势"]["图表"],
                            yaxisLeftText: "告警数",
                            yaxisRightText: "最近一月告警数"
                        }
                    })], 1)])], 1)], 1), e("div", {
                        staticClass: "home-l-center"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-400 animate__fadeInLeft",
                        attrs: {
                            title: "能源趋势"
                        }
                    }, [e("digital-subtitle-contetn", {
                        attrs: {
                            slot: "content",
                            number: t.xiaotaiyang.xtyMock["首页"]["能源趋势"]["能源消耗"],
                            title: "能源消耗",
                            switchData: [{
                                name: "年"
                            }, {
                                name: "月"
                            }, {
                                name: "日"
                            }]
                        },
                        slot: "content"
                    }, [e("div", {
                        attrs: {
                            slot: "ds-content"
                        },
                        slot: "ds-content"
                    }, [e("line-chart", {
                        attrs: {
                            echartsData: t.xiaotaiyang.xtyMock["首页"]["能源趋势"]["图表"],
                            yaxisLeftText: "电量/千瓦时"
                        }
                    })], 1)])], 1)], 1), e("div", {
                        staticClass: "home-l-bottom"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-600 animate__fadeInLeft",
                        attrs: {
                            title: "设备状态"
                        }
                    }, [e("div", {
                        staticClass: "home-lb-main",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [e("div", {
                        staticClass: "home-lb-top"
                    }, [e("div", [e("span", [t._v("设备总数")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["首页"]["设备状态"]["设备总数"]))])]), e("div", [e("span", [t._v("上一小时能耗")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["首页"]["设备状态"]["上一小时能耗"]) + "kw/h")])])]), e("div", {
                        staticClass: "home-lb-bottom"
                    }, [e("div", [e("span", [t._v("开启设备")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["首页"]["设备状态"]["开启设备"]))])]), e("div", [e("span", [t._v("关闭设备")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["首页"]["设备状态"]["关闭设备"]))])]), e("div", [e("span", [t._v("故障设备")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["首页"]["设备状态"]["故障设备"]))])])])])])], 1)]) : t._e(), 0 == t.xiaotaiyang.pageMode ? e("div", {
                        staticClass: "home-right",
                        attrs: {
                            "data-msg": "首页右边内容"
                        }
                    }, [e("div", {
                        staticClass: "home-r-top"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-200 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "校园预警"
                        }
                    }, [e("div", {
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [e("campus-warning", {
                        attrs: {
                            currentList: t.xiaotaiyang.xtyMock["首页"]["校园预警"]["列表"],
                            slidesPerView: 5
                        }
                    })], 1)])], 1), e("div", {
                        staticClass: "home-r-center"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-400 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "考勤管理"
                        }
                    }, [e("div", {
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [e("div", {
                        staticClass: "home-r-attendance"
                    }, [e("div", {
                        staticClass: "home-ra-header"
                    }, [e("div", {
                        staticClass: "home-ra-left"
                    }, [e("span", [t._v(" 应到人数 ")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(" " + t._s(t.xiaotaiyang.xtyMock["首页"]["考勤管理"]["应到人数"]) + " ")])]), e("div", {
                        staticClass: "home-ra-right"
                    }, [e("span", [t._v("出勤率")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["首页"]["考勤管理"]["出勤率"]) + "%")])])]), e("div", {
                        staticClass: "home-ra-content"
                    }, [e("div", [e("gradient-ring-svg", {
                        staticClass: "ring-svg",
                        attrs: {
                            idIndex: "1",
                            bgColor: "#4a5d75",
                            barColorStart: "#219dff",
                            barColorEnd: "#aad9ff",
                            progressPro: 50,
                            number: t.xiaotaiyang.xtyMock["首页"]["考勤管理"]["正常"],
                            title: "正常"
                        }
                    })], 1), e("div", [e("gradient-ring-svg", {
                        staticClass: "ring-svg",
                        attrs: {
                            idIndex: "2",
                            bgColor: "#4e4340",
                            barColorStart: "#ff8518",
                            barColorEnd: "#ffcfa5",
                            progressPro: 10,
                            number: t.xiaotaiyang.xtyMock["首页"]["考勤管理"]["请假"],
                            title: "请假"
                        }
                    })], 1), e("div", [e("gradient-ring-svg", {
                        staticClass: "ring-svg",
                        attrs: {
                            idIndex: "3",
                            bgColor: "#444843",
                            barColorStart: "#ffbd10",
                            barColorEnd: "#ffe8ad",
                            progressPro: 7,
                            number: t.xiaotaiyang.xtyMock["首页"]["考勤管理"]["缺勤"],
                            title: "缺勤"
                        }
                    })], 1), e("div", [e("gradient-ring-svg", {
                        staticClass: "ring-svg",
                        attrs: {
                            idIndex: "4",
                            bgColor: "#194150",
                            barColorStart: "#64e5dd",
                            barColorEnd: "#acf4f0",
                            progressPro: 3,
                            number: t.xiaotaiyang.xtyMock["首页"]["考勤管理"]["迟到"],
                            title: "迟到"
                        }
                    })], 1)])])])])], 1), e("div", {
                        staticClass: "home-r-bottom"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-600 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "重点监控"
                        }
                    }, [e("div", {
                        staticClass: "home-rb-vidoe",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [e("div", {
                        staticClass: "home-rb-header"
                    }, [e("div"), e("div", [e("el-select", {
                        staticClass: "xty-select",
                        attrs: {
                            placeholder: "请选择",
                            "popper-class": "xty-pop-select"
                        },
                        model: {
                            value: t.value,
                            callback: function(a) {
                                t.value = a
                            },
                            expression: "value"
                        }
                    }, t._l(t.xiaotaiyang.xtyMock["首页"]["重点监控"]["查看设备"], (function(t) {
                        return e("el-option", {
                            key: t.value,
                            attrs: {
                                label: t.label,
                                value: t.value
                            }
                        })
                    })), 1)], 1)]), e("div", {
                        staticClass: "home-rb-monitor"
                    }, [e("img", {
                        attrs: {
                            src: i("a0dc"),
                            alt: ""
                        }
                    }), e("i", {
                        staticClass: "iconfont icon-icon-fangda"
                    })])])])], 1)]) : t._e()])
                },
                s = [],
                n = i("06c4"),
                r = i("7b25"),
                o = i("cc62"),
                c = i("6e5d"),
                d = i("7eb3"),
                l = i("2c7f"),
                u = i("e123"),
                g = i("52c1"),
                p = {
                    name: "home",
                    components: {
                        digitalContainer: r["a"],
                        timeSwitchTab: o["a"],
                        digitalSubtitleContetn: c["a"],
                        lineChart: d["a"],
                        gradientRingSvg: l["a"],
                        campusWarning: u["a"]
                    },
                    props: {},
                    data: function() {
                        return {
                            options: [{
                                value: "1",
                                label: "监控"
                            }, {
                                value: "2",
                                label: "热成像"
                            }],
                            value: "1"
                        }
                    },
                    created: function() {},
                    mounted: function() {},
                    methods: {},
                    watch: {},
                    computed: Object(n["a"])({}, Object(g["c"])(["xiaotaiyang"]))
                },
                m = p,
                f = (i("ae67"), i("6006"), i("cba8")),
                b = Object(f["a"])(m, e, s, !1, null, "982f0abc", null);
            a["default"] = b.exports
        },
        e123: function(t, a, i) {
            "use strict";
            var e = function() {
                    var t = this,
                        a = t.$createElement,
                        i = t._self._c || a;
                    return i("div", {
                        staticClass: "campus-warning-wapper"
                    }, [t._m(0), t.currentList.length > 1 ? i("swiper", {
                        ref: "mySwiper",
                        staticClass: "cw-swiper",
                        attrs: {
                            options: t.swiperOptions,
                            "data-msg": 'v-if="loop.length>1" 不能删除 解决不轮播的问题'
                        }
                    }, t._l(t.currentList, (function(a, e) {
                        return i("swiper-slide", {
                            key: e,
                            staticClass: "slide-list"
                        }, [i("div", {
                            staticClass: "rw-td"
                        }, [t._v(" " + t._s(a.name) + " ")]), i("div", {
                            staticClass: "rw-td"
                        }, [t._v(" " + t._s(a.area) + " ")]), i("div", {
                            staticClass: "rw-td"
                        }, [t._v(" " + t._s(a.type) + " ")]), i("div", {
                            staticClass: "rw-td"
                        }, [t._v(" " + t._s(a.time) + " ")])])
                    })), 1) : t._e()], 1)
                },
                s = [function() {
                    var t = this,
                        a = t.$createElement,
                        i = t._self._c || a;
                    return i("div", {
                        staticClass: "cw-header"
                    }, [i("div", {
                        staticClass: "rw-td"
                    }, [t._v(" 预警设备 ")]), i("div", {
                        staticClass: "rw-td"
                    }, [t._v(" 所在区域 ")]), i("div", {
                        staticClass: "rw-td"
                    }, [t._v(" 预警类型 ")]), i("div", {
                        staticClass: "rw-td"
                    }, [t._v(" 时间 ")])])
                }],
                n = (i("3828"), {
                    name: "campus-warning",
                    components: {},
                    props: {
                        slidesPerView: {
                            type: Number,
                            default: function() {
                                return 2
                            }
                        },
                        currentList: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        }
                    },
                    data: function() {
                        return {
                            swiperOptions: {
                                direction: "vertical",
                                loop: !0,
                                speed: 400,
                                slidesPerView: this.slidesPerView,
                                spaceBetween: 2,
                                autoplay: {
                                    delay: 2e3,
                                    stopOnLastSlide: !1,
                                    disableOnInteraction: !0
                                },
                                updateOnImagesReady: !0,
                                mousewheel: !0,
                                observer: !0,
                                observeParents: !0
                            }
                        }
                    },
                    created: function() {},
                    mounted: function() {},
                    methods: {},
                    watch: {}
                }),
                r = n,
                o = (i("0103"), i("cba8")),
                c = Object(o["a"])(r, e, s, !1, null, "d94750c4", null);
            a["a"] = c.exports
        }
    }
]);