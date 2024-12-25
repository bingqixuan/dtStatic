(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-fb54a244"], {
        "61c1": function(t, a, i) {
            "use strict";
            i.r(a);
            var e = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
                        staticClass: "library-wapper"
                    }, [0 == t.xiaotaiyang.pageMode ? e("div", {
                        staticClass: "library-left",
                        attrs: {
                            "data-msg": "首页左边内容"
                        }
                    }, [e("div", {
                        staticClass: "library-l-top"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-200 animate__fadeInLeft",
                        attrs: {
                            title: "借书统计"
                        }
                    }, [e("digital-subtitle-contetn", {
                        attrs: {
                            slot: "content",
                            number: t.xiaotaiyang.xtyMock["图书馆"]["借书统计"]["近7天访客总数"],
                            title: "借书本数",
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
                        staticClass: "library-lt-content",
                        attrs: {
                            slot: "ds-content"
                        },
                        slot: "ds-content"
                    }, [e("div", {
                        staticClass: "library-lt-bottom"
                    }, [e("line-chart", {
                        attrs: {
                            echartsData: t.xiaotaiyang.xtyMock["图书馆"]["借书统计"]["图表"],
                            yaxisLeftText: "本"
                        }
                    })], 1)])])], 1)], 1), e("div", {
                        staticClass: "library-l-center"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-400 animate__fadeInLeft",
                        attrs: {
                            title: "设备状态"
                        }
                    }, [e("div", {
                        staticClass: "library-lc-main",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [e("div", {
                        staticClass: "library-lc-top"
                    }, [e("div", [e("span", [t._v("设备总数")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["图书馆"]["设备状态"]["设备总数"]))])]), e("div", [e("span", [t._v("上一小时能耗")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["图书馆"]["设备状态"]["上一小时能耗"]) + "kw/h")])])]), e("div", {
                        staticClass: "library-lc-bottom"
                    }, [e("div", [e("span", [t._v("开启设备")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["图书馆"]["设备状态"]["开启设备"]))])]), e("div", [e("span", [t._v("关闭设备")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["图书馆"]["设备状态"]["关闭设备"]))])]), e("div", [e("span", [t._v("故障设备")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["图书馆"]["设备状态"]["故障设备"]))])])])])])], 1), e("div", {
                        staticClass: "library-l-bottom"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-600 animate__fadeInLeft",
                        attrs: {
                            title: "设备控制"
                        }
                    }, [e("div", {
                        staticClass: "library-lb-content",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [e("switch-radio", {
                        attrs: {
                            active: !0,
                            label: "空调1"
                        }
                    }), e("switch-radio", {
                        attrs: {
                            active: !1,
                            label: "电子班牌"
                        }
                    }), e("switch-radio", {
                        attrs: {
                            active: !0,
                            label: "照明"
                        }
                    }), e("switch-radio", {
                        attrs: {
                            active: !0,
                            label: "电子班牌"
                        }
                    }), e("switch-radio", {
                        attrs: {
                            active: !1,
                            label: "窗帘"
                        }
                    }), e("switch-radio", {
                        attrs: {
                            active: !1,
                            label: "环境检测"
                        }
                    }), e("switch-radio", {
                        attrs: {
                            active: !0,
                            label: "空调3"
                        }
                    })], 1)])], 1)]) : t._e(), 0 == t.xiaotaiyang.pageMode ? e("div", {
                        staticClass: "library-right",
                        attrs: {
                            "data-msg": "首页右边内容"
                        }
                    }, [e("div", {
                        staticClass: "library-r-top"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-200 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "馆藏统计"
                        }
                    }, [e("div", {
                        staticClass: "library-rt-container",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [e("div", {
                        staticClass: "library-rt-header"
                    }, [e("span", [t._v("馆藏总数")]), e("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["图书馆"]["馆藏统计"]["馆藏总数"]))])]), e("div", {
                        staticClass: "library-rt-content"
                    }, [e("div", {
                        staticClass: "library-rtc-left"
                    }, [e("span", {
                        staticClass: "l-rtc-number"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["图书馆"]["馆藏统计"]["在藏数"]))]), e("img", {
                        attrs: {
                            src: i("bde3"),
                            alt: ""
                        }
                    }), e("span", {
                        staticClass: "l-rtc-text"
                    }, [t._v("在藏数")])]), e("div", {
                        staticClass: "library-rtc-right"
                    }, [e("span", {
                        staticClass: "l-rtc-number"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["图书馆"]["馆藏统计"]["已借"]))]), e("img", {
                        attrs: {
                            src: i("79e3"),
                            alt: ""
                        }
                    }), e("span", {
                        staticClass: "l-rtc-text"
                    }, [t._v("已借")])])])])])], 1), e("div", {
                        staticClass: "library-r-center"
                    }, [e("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-400 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "热门书籍排行"
                        }
                    }, [e("div", {
                        staticClass: "library-rc-container",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [e("div", {
                        staticClass: "library-rc-header"
                    }, [e("span", [t._v("书名")]), e("span", [t._v("借阅次数")])]), e("div", {
                        staticClass: "library-rc-content"
                    }, [e("energy-consumption", {
                        attrs: {
                            slot: "ds-content",
                            energyConsumptionData: t.xiaotaiyang.xtyMock["图书馆"]["热门书籍排行"]["列表"],
                            unit: "次"
                        },
                        slot: "ds-content"
                    })], 1)])])], 1)]) : t._e()])
                },
                s = [],
                n = i("06c4"),
                c = i("7b25"),
                r = i("cc62"),
                l = i("6e5d"),
                o = i("7eb3"),
                d = i("acba"),
                u = i("8872"),
                p = i("52c1"),
                g = {
                    name: "home",
                    components: {
                        digitalContainer: c["a"],
                        timeSwitchTab: r["a"],
                        digitalSubtitleContetn: l["a"],
                        lineChart: o["a"],
                        switchRadio: d["a"],
                        energyConsumption: u["a"]
                    },
                    props: {},
                    data: function() {
                        return {}
                    },
                    created: function() {},
                    mounted: function() {},
                    methods: {},
                    watch: {},
                    computed: Object(n["a"])({}, Object(p["c"])(["xiaotaiyang"]))
                },
                v = g,
                y = (i("e6b3"), i("cba8")),
                _ = Object(y["a"])(v, e, s, !1, null, "1d7dacec", null);
            a["default"] = _.exports
        },
        7629: function(t, a, i) {},
        "79cb": function(t, a, i) {
            "use strict";
            i("e35f")
        },
        "79e3": function(t, a, i) {
            t.exports = i.p + "static/img/xty-chassis-yellow.750e8768.png"
        },
        8872: function(t, a, i) {
            "use strict";
            var e = function() {
                    var t = this,
                        a = t.$createElement,
                        i = t._self._c || a;
                    return i("div", {
                        staticClass: "energy-consumption-wapper"
                    }, [t.energyConsumptionData.length > 1 ? i("swiper", {
                        ref: "mySwiper",
                        staticClass: "ec-mySwiper",
                        attrs: {
                            options: t.swiperOptions,
                            "data-msg": 'v-if="loop.length>1" 不能删除 解决不轮播的问题'
                        }
                    }, t._l(t.energyConsumptionData, (function(a, e) {
                        return i("swiper-slide", {
                            key: e,
                            staticClass: "slide-list"
                        }, [i("span", [t._v(t._s(e + 1))]), i("div", [i("div", {
                            staticClass: "ec-text"
                        }, [i("span", [t._v(t._s(a.name))]), i("span", [t._v(t._s(a.energy) + t._s(t.unit))])]), i("div", {
                            staticClass: "ec-barBg"
                        }, [i("div", {
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
                r = (i("c13c"), i("cba8")),
                l = Object(r["a"])(c, e, s, !1, null, "52743ffc", null);
            a["a"] = l.exports
        },
        "99f6": function(t, a, i) {},
        acba: function(t, a, i) {
            "use strict";
            var e = function() {
                    var t = this,
                        a = t.$createElement,
                        i = t._self._c || a;
                    return i("div", {
                        staticClass: "switch-radio-wapper"
                    }, [i("span", {
                        staticClass: "sr-text"
                    }, [t._v(t._s(t.label))]), i("div", [i("input", {
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
                                var i = t.toggle,
                                    e = a.target,
                                    s = e.checked ? t.value1 : t.value2;
                                if (Array.isArray(i)) {
                                    var n = null,
                                        c = t._i(i, n);
                                    e.checked ? c < 0 && (t.toggle = i.concat([n])) : c > -1 && (t.toggle = i.slice(0, c).concat(i.slice(c + 1)))
                                } else t.toggle = s
                            }
                        }
                    }), i("label", {
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
                r = (i("79cb"), i("cba8")),
                l = Object(r["a"])(c, e, s, !1, null, "6703e28c", null);
            a["a"] = l.exports
        },
        bde3: function(t, a, i) {
            t.exports = i.p + "static/img/xty-chassis.da81351a.png"
        },
        c13c: function(t, a, i) {
            "use strict";
            i("99f6")
        },
        e35f: function(t, a, i) {},
        e6b3: function(t, a, i) {
            "use strict";
            i("7629")
        }
    }
]);