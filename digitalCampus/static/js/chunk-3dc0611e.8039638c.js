(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-3dc0611e"], {
        "0103": function(t, a, e) {
            "use strict";
            e("2be8")
        },
        "17ee": function(t, a, e) {},
        "2be8": function(t, a, e) {},
        4219: function(t, a, e) {
            "use strict";
            e("9082")
        },
        "79cb": function(t, a, e) {
            "use strict";
            e("e35f")
        },
        8872: function(t, a, e) {
            "use strict";
            var i = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
                        staticClass: "energy-consumption-wapper"
                    }, [t.energyConsumptionData.length > 1 ? e("swiper", {
                        ref: "mySwiper",
                        staticClass: "ec-mySwiper",
                        attrs: {
                            options: t.swiperOptions,
                            "data-msg": 'v-if="loop.length>1" 不能删除 解决不轮播的问题'
                        }
                    }, t._l(t.energyConsumptionData, (function(a, i) {
                        return e("swiper-slide", {
                            key: i,
                            staticClass: "slide-list"
                        }, [e("span", [t._v(t._s(i + 1))]), e("div", [e("div", {
                            staticClass: "ec-text"
                        }, [e("span", [t._v(t._s(a.name))]), e("span", [t._v(t._s(a.energy) + t._s(t.unit))])]), e("div", {
                            staticClass: "ec-barBg"
                        }, [e("div", {
                            staticClass: "ec-bar",
                            style: {
                                width: a.proportion + "%"
                            }
                        })])])])
                    })), 1) : t._e()], 1)
                },
                s = [],
                n = {
                    name: "energy-consumption",
                    components: {},
                    props: {
                        energyConsumptionData: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        unit: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        }
                    },
                    data: function() {
                        return {
                            swiperOptions: {
                                direction: "vertical",
                                observer: !0,
                                observeParents: !0,
                                loop: !0,
                                speed: 400,
                                slidesPerView: "auto",
                                height: 40,
                                spaceBetween: 20,
                                autoplay: {
                                    delay: 1e3,
                                    stopOnLastSlide: !1,
                                    disableOnInteraction: !1
                                },
                                updateOnImagesReady: !0,
                                mousewheel: !0
                            }
                        }
                    },
                    created: function() {},
                    mounted: function() {},
                    methods: {},
                    watch: {}
                },
                c = n,
                o = (e("c13c"), e("cba8")),
                l = Object(o["a"])(c, i, s, !1, null, "52743ffc", null);
            a["a"] = l.exports
        },
        9082: function(t, a, e) {},
        "99f6": function(t, a, e) {},
        a0dc: function(t, a, e) {
            t.exports = e.p + "static/img/xty-video.b8b61fbe.png"
        },
        a921: function(t, a, e) {
            "use strict";
            e.r(a);
            var i = function() {
                    var t = this,
                        a = t.$createElement,
                        i = t._self._c || a;
                    return i("div", {
                        staticClass: "dorm-wapper"
                    }, [0 == t.xiaotaiyang.pageMode ? i("div", {
                        staticClass: "dorm-left",
                        attrs: {
                            "data-msg": "首页左边内容"
                        }
                    }, [i("div", {
                        staticClass: "dorm-l-top"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-200 animate__fadeInLeft",
                        attrs: {
                            title: "人员统计"
                        }
                    }, [i("ul", {
                        staticClass: "classroom-lt-content",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("li", [i("span", [t._v("宿舍总人数")]), i("span", [t._v(t._s(t.xiaotaiyang.xtyMock["宿舍"]["人员统计"]["宿舍总人数"]))])]), i("li", [i("span", [t._v("在寝人数")]), i("span", [t._v(t._s(t.xiaotaiyang.xtyMock["宿舍"]["人员统计"]["在寝人数"]))])]), i("li", [i("span", [t._v("离寝人数")]), i("span", [t._v(t._s(t.xiaotaiyang.xtyMock["宿舍"]["人员统计"]["离寝人数"]))])]), i("li", [i("span", [t._v("今日访客总数")]), i("span", [t._v(t._s(t.xiaotaiyang.xtyMock["宿舍"]["人员统计"]["今日访客总数"]))])]), i("li", [i("span", [t._v("访客未出人数")]), i("span", [t._v(t._s(t.xiaotaiyang.xtyMock["宿舍"]["人员统计"]["访客未出人数"]))])])])])], 1), i("div", {
                        staticClass: "dorm-l-center"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-400 animate__fadeInLeft",
                        attrs: {
                            title: "设备状态"
                        }
                    }, [i("div", {
                        staticClass: "dorm-lb-main",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("div", {
                        staticClass: "dorm-lb-top"
                    }, [i("div", [i("span", [t._v("设备总数")]), i("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["宿舍"]["设备状态"]["设备总数"]))])]), i("div", [i("span", [t._v("上一小时能耗")]), i("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["宿舍"]["设备状态"]["上一小时能耗"]) + "kw/h")])])]), i("div", {
                        staticClass: "dorm-lb-bottom"
                    }, [i("div", [i("span", [t._v("开启设备")]), i("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["宿舍"]["设备状态"]["开启设备"]))])]), i("div", [i("span", [t._v("关闭设备")]), i("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["宿舍"]["设备状态"]["关闭设备"]))])]), i("div", [i("span", [t._v("故障设备")]), i("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["宿舍"]["设备状态"]["故障设备"]))])])])])])], 1), i("div", {
                        staticClass: "dorm-l-bottom"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-600 animate__fadeInLeft",
                        attrs: {
                            title: "设备控制"
                        }
                    }, [i("div", {
                        staticClass: "dorm-lb-content",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("switch-radio", {
                        attrs: {
                            active: !0,
                            label: "空调1"
                        }
                    }), i("switch-radio", {
                        attrs: {
                            active: !1,
                            label: "电子班牌"
                        }
                    }), i("switch-radio", {
                        attrs: {
                            active: !0,
                            label: "照明"
                        }
                    }), i("switch-radio", {
                        attrs: {
                            active: !0,
                            label: "电子班牌"
                        }
                    }), i("switch-radio", {
                        attrs: {
                            active: !1,
                            label: "窗帘"
                        }
                    }), i("switch-radio", {
                        attrs: {
                            active: !1,
                            label: "环境检测"
                        }
                    }), i("switch-radio", {
                        attrs: {
                            active: !0,
                            label: "空调3"
                        }
                    })], 1)])], 1), i("div", {
                        staticClass: "dorm-l-under"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-800 animate__fadeInLeft",
                        attrs: {
                            title: "监控视频"
                        }
                    }, [i("div", {
                        staticClass: "dorm-lu-vidoe",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("div", {
                        staticClass: "dorm-lu-header"
                    }, [i("div"), i("div", [i("el-select", {
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
                    }, t._l(t.xiaotaiyang.xtyMock["宿舍"]["监控视频"]["查看设备"], (function(t) {
                        return i("el-option", {
                            key: t.value,
                            attrs: {
                                label: t.label,
                                value: t.value
                            }
                        })
                    })), 1)], 1)]), i("div", {
                        staticClass: "dorm-lu-monitor"
                    }, [i("img", {
                        attrs: {
                            src: e("a0dc"),
                            alt: ""
                        }
                    }), i("i", {
                        staticClass: "iconfont icon-icon-fangda"
                    })])])])], 1)]) : t._e(), 0 == t.xiaotaiyang.pageMode ? i("div", {
                        staticClass: "dorm-right",
                        attrs: {
                            "data-msg": "首页右边内容"
                        }
                    }, [i("div", {
                        staticClass: "dorm-r-top"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-200 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "能源趋势"
                        }
                    }, [i("digital-subtitle-contetn", {
                        attrs: {
                            slot: "content",
                            number: t.xiaotaiyang.xtyMock["宿舍"]["能源趋势"]["告警数"],
                            title: "告警数",
                            switchData: [{
                                name: "年"
                            }, {
                                name: "月"
                            }]
                        },
                        slot: "content"
                    }, [i("div", {
                        attrs: {
                            slot: "ds-content"
                        },
                        slot: "ds-content"
                    }, [i("line-chart", {
                        attrs: {
                            echartsData: t.xiaotaiyang.xtyMock["宿舍"]["能源趋势"]["图表"],
                            yaxisLeftText: "预警数",
                            yaxisRightText: "最近一月告警数"
                        }
                    })], 1)])], 1)], 1), i("div", {
                        staticClass: "dorm-r-center"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-400 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "宿舍预警"
                        }
                    }, [i("campus-warning", {
                        attrs: {
                            slot: "content",
                            currentList: t.xiaotaiyang.xtyMock["宿舍"]["宿舍预警"]["列表"],
                            slidesPerView: 3
                        },
                        slot: "content"
                    })], 1)], 1), i("div", {
                        staticClass: "dorm-r-bottom"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-600 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "用电排行"
                        }
                    }, [i("div", {
                        staticClass: "library-rc-container",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("div", {
                        staticClass: "library-rc-header"
                    }, [i("span", [t._v("宿舍号")]), i("span", [t._v("近一周用电量")])]), i("div", {
                        staticClass: "library-rc-content"
                    }, [i("energy-consumption", {
                        attrs: {
                            slot: "ds-content",
                            energyConsumptionData: t.xiaotaiyang.xtyMock["宿舍"]["用电排行"]["列表"],
                            unit: "kw/h"
                        },
                        slot: "ds-content"
                    })], 1)])])], 1)]) : t._e()])
                },
                s = [],
                n = e("06c4"),
                c = e("7b25"),
                o = e("cc62"),
                l = e("6e5d"),
                r = e("acba"),
                d = e("8872"),
                u = e("e123"),
                p = e("7eb3"),
                v = e("52c1"),
                _ = {
                    name: "home",
                    components: {
                        digitalContainer: c["a"],
                        timeSwitchTab: o["a"],
                        digitalSubtitleContetn: l["a"],
                        switchRadio: r["a"],
                        energyConsumption: d["a"],
                        campusWarning: u["a"],
                        lineChart: p["a"]
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
                    computed: Object(n["a"])({}, Object(v["c"])(["xiaotaiyang"]))
                },
                m = _,
                g = (e("4219"), e("ad65"), e("cba8")),
                f = Object(g["a"])(m, i, s, !1, null, "fa58b31e", null);
            a["default"] = f.exports
        },
        acba: function(t, a, e) {
            "use strict";
            var i = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
                        staticClass: "switch-radio-wapper"
                    }, [e("span", {
                        staticClass: "sr-text"
                    }, [t._v(t._s(t.label))]), e("div", [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.toggle,
                            expression: "toggle"
                        }],
                        attrs: {
                            type: "checkbox",
                            "true-value": t.value1,
                            "false-value": t.value2
                        },
                        domProps: {
                            checked: Array.isArray(t.toggle) ? t._i(t.toggle, null) > -1 : t._q(t.toggle, t.value1)
                        },
                        on: {
                            change: function(a) {
                                var e = t.toggle,
                                    i = a.target,
                                    s = i.checked ? t.value1 : t.value2;
                                if (Array.isArray(e)) {
                                    var n = null,
                                        c = t._i(e, n);
                                    i.checked ? c < 0 && (t.toggle = e.concat([n])) : c > -1 && (t.toggle = e.slice(0, c).concat(e.slice(c + 1)))
                                } else t.toggle = s
                            }
                        }
                    }), e("label", {
                        on: {
                            click: t.switchCheckbox
                        }
                    })])])
                },
                s = [],
                n = {
                    name: "switch-radio",
                    components: {},
                    props: {
                        label: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        },
                        active: {
                            type: Boolean,
                            default: function() {
                                return !1
                            }
                        }
                    },
                    data: function() {
                        return {
                            toggle: !1,
                            value1: !0,
                            value2: !1
                        }
                    },
                    created: function() {},
                    mounted: function() {},
                    methods: {
                        switchCheckbox: function() {
                            this.toggle = !this.toggle
                        }
                    },
                    watch: {
                        active: {
                            handler: function(t) {
                                t && (this.toggle = t)
                            },
                            immediate: !0
                        }
                    }
                },
                c = n,
                o = (e("79cb"), e("cba8")),
                l = Object(o["a"])(c, i, s, !1, null, "6703e28c", null);
            a["a"] = l.exports
        },
        ad65: function(t, a, e) {
            "use strict";
            e("17ee")
        },
        c13c: function(t, a, e) {
            "use strict";
            e("99f6")
        },
        e123: function(t, a, e) {
            "use strict";
            var i = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
                        staticClass: "campus-warning-wapper"
                    }, [t._m(0), t.currentList.length > 1 ? e("swiper", {
                        ref: "mySwiper",
                        staticClass: "cw-swiper",
                        attrs: {
                            options: t.swiperOptions,
                            "data-msg": 'v-if="loop.length>1" 不能删除 解决不轮播的问题'
                        }
                    }, t._l(t.currentList, (function(a, i) {
                        return e("swiper-slide", {
                            key: i,
                            staticClass: "slide-list"
                        }, [e("div", {
                            staticClass: "rw-td"
                        }, [t._v(" " + t._s(a.name) + " ")]), e("div", {
                            staticClass: "rw-td"
                        }, [t._v(" " + t._s(a.area) + " ")]), e("div", {
                            staticClass: "rw-td"
                        }, [t._v(" " + t._s(a.type) + " ")]), e("div", {
                            staticClass: "rw-td"
                        }, [t._v(" " + t._s(a.time) + " ")])])
                    })), 1) : t._e()], 1)
                },
                s = [function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
                        staticClass: "cw-header"
                    }, [e("div", {
                        staticClass: "rw-td"
                    }, [t._v(" 预警设备 ")]), e("div", {
                        staticClass: "rw-td"
                    }, [t._v(" 所在区域 ")]), e("div", {
                        staticClass: "rw-td"
                    }, [t._v(" 预警类型 ")]), e("div", {
                        staticClass: "rw-td"
                    }, [t._v(" 时间 ")])])
                }],
                n = (e("3828"), {
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
                c = n,
                o = (e("0103"), e("cba8")),
                l = Object(o["a"])(c, i, s, !1, null, "d94750c4", null);
            a["a"] = l.exports
        },
        e35f: function(t, a, e) {}
    }
]);