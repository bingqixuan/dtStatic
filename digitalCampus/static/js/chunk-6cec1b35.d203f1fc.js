(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6cec1b35"], {
        "0103": function(t, e, a) {
            "use strict";
            a("2be8")
        },
        "02ea": function(t, e, a) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.loading,
                            expression: "loading"
                        }],
                        staticClass: "echarts-wapper",
                        attrs: {
                            "element-loading-text": "加载中",
                            "element-loading-spinner": "el-icon-loading",
                            "element-loading-background": "rgba(0, 0, 0, 0.0)"
                        }
                    }, [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == t.hasDataFlag,
                            expression: "hasDataFlag == 1"
                        }, {
                            name: "resize",
                            rawName: "v-resize",
                            value: t.resize,
                            expression: "resize"
                        }],
                        ref: "section",
                        staticClass: "pie"
                    }), 2 == t.hasDataFlag ? a("charts-status") : t._e()], 1)
                },
                n = [],
                s = (a("4789"), a("cbdc")),
                r = {
                    name: "line-chart",
                    components: {
                        chartsStatus: s["a"]
                    },
                    props: {
                        echartsData: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        yaxisLeftText: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        },
                        yaxisRightText: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        }
                    },
                    data: function() {
                        return {
                            option: null,
                            myChart: null,
                            timeout: null,
                            timeoutloop: null,
                            minCount: 0,
                            zbSumCount: 0,
                            loading: !1,
                            hasDataFlag: 1
                        }
                    },
                    watch: {},
                    mounted: function() {
                        var t = this;
                        this.drawPie(), this.myChart.on("mouseout", (function(e) {
                            t.myChart.dispatchAction({
                                type: "downplay",
                                seriesIndex: 0,
                                dataIndex: e.dataIndex
                            }), clearTimeout(t.timeout), t.timeout = setTimeout((function() {
                                t.pieActive()
                            }), 1e3)
                        })), this.$nextTick((function() {
                            t.myChart.resize()
                        })), clearTimeout(this.timeout), this.pieActive(), this.timeout = setTimeout((function() {
                            t.pieActive()
                        }), 2e3), window.addEventListener("resize", (function() {
                            t.myChart.resize()
                        }), !1)
                    },
                    beforeDestroy: function() {
                        this.myChart.dispose(), clearTimeout(this.timeout), clearInterval(this.timeoutloop), window.removeEventListener("resize", this.myChart.resize(), !1)
                    },
                    methods: {
                        resize: function() {
                            this.myChart.resize()
                        },
                        echartsResize: function() {
                            this.myChart.resize()
                        },
                        refontSize: function(t) {
                            document.documentElement;
                            var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                            if (e) {
                                var a = e / 1920 * 100;
                                return t * a
                            }
                        },
                        drawPie: function() {
                            this.myChart = this.$echarts.init(this.$refs.section, null, {
                                renderer: "canvas"
                            });
                            var t = this.echartsData["标签"],
                                e = this.echartsData["上学"],
                                a = this.echartsData["放学"];
                            this.option = {
                                tooltip: {
                                    trigger: "axis",
                                    backgroundColor: "transparent",
                                    axisPointer: {
                                        lineStyle: {
                                            color: {
                                                type: "linear",
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0,
                                                    color: "rgba(126,199,255,0)"
                                                }, {
                                                    offset: .5,
                                                    color: "rgba(126,199,255,1)"
                                                }, {
                                                    offset: 1,
                                                    color: "rgba(126,199,255,0)"
                                                }],
                                                global: !1
                                            }
                                        }
                                    },
                                    formatter: function(t) {
                                        var e = '<div style="width: 79px;\n\theight: 50px;;color:#fff;position: relative;">\n        <svg style="position: absolute;top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);" class="svg" xmlns="http://www.w3.org/2000/svg" width="100" height="71" viewBox="0 0 84 55">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: #07172c;\n            fill-opacity: 0.8;\n            stroke: #a7d8ff;\n            stroke-linejoin: round;\n            stroke-opacity: 0.2;\n            stroke-width: 1px;\n            fill-rule: evenodd;\n          }\n\n        </style>\n      </defs>\n      <path id="矩形_419" data-name="矩形 419" class="cls-1" d="M266,595h74v50H266V624.046L261,620l5-3.984V595Z"\n        transform="translate(-258.5 -592.5)" />\n    </svg>\n        <div style="padding: 4px 8px 4px 14px;display: flex;\n        justify-content: space-between;\n        align-items: center;\n        flex-direction: column;position: relative;z-index: 1;">\n            <div style="margin-bottom: 4px;width:100%;display:flex;justify-content:space-between;align-items:center;">\n                <span style="font-size:14px;color:#7ec7ff;">'.concat(t[0].seriesName, '</span>\n                <span style="font-size:14px;color:#fff;">').concat(t[0].data, '</span>\n            </div>\n            <div style="width:100%;display:flex;justify-content:space-between;align-items:center;">\n                <span style="font-size:14px;color:#7ec7ff;">').concat(t[1].seriesName, '</span>\n                <span style="font-size:14px;color:#fff;">').concat(t[1].data, "</span>\n            </div>\n        </div>\n    </div>");
                                        return e
                                    }
                                },
                                legend: {
                                    align: "left",
                                    right: "5%",
                                    top: "2%",
                                    type: "plain",
                                    textStyle: {
                                        color: "#7ec7ff",
                                        fontSize: 16
                                    },
                                    itemGap: 25,
                                    itemWidth: 18,
                                    icon: "path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
                                    data: [{
                                        name: "上学"
                                    }, {
                                        name: "放学"
                                    }]
                                },
                                grid: {
                                    top: "27%",
                                    left: "8%",
                                    right: "5%",
                                    bottom: "15%"
                                },
                                xAxis: [{
                                    type: "category",
                                    boundaryGap: !1,
                                    axisLine: {
                                        show: !0,
                                        lineStyle: {
                                            color: "rgba(103,126,170,0.5)"
                                        }
                                    },
                                    axisLabel: {
                                        textStyle: {
                                            color: "#7ec7ff",
                                            padding: 2,
                                            fontSize: 14
                                        },
                                        formatter: function(t) {
                                            return t
                                        }
                                    },
                                    splitLine: {
                                        show: !0,
                                        lineStyle: {
                                            color: "rgba(103,126,170,0.5)"
                                        }
                                    },
                                    axisTick: {
                                        show: !1
                                    },
                                    data: t
                                }],
                                yAxis: [{
                                    name: "人数",
                                    nameTextStyle: {
                                        color: "#7ec7ff",
                                        fontSize: 14,
                                        padding: 0
                                    },
                                    min: 0,
                                    splitLine: {
                                        show: !0,
                                        lineStyle: {
                                            color: "rgba(103,126,170,0.5)"
                                        }
                                    },
                                    axisLine: {
                                        show: !0,
                                        lineStyle: {
                                            color: "rgba(103,126,170,0.5)"
                                        }
                                    },
                                    axisLabel: {
                                        show: !0,
                                        textStyle: {
                                            color: "#7ec7ff",
                                            padding: 0
                                        },
                                        formatter: function(t) {
                                            return t
                                        }
                                    },
                                    axisTick: {
                                        show: !1
                                    }
                                }],
                                series: [{
                                    name: "上学",
                                    type: "line",
                                    symbol: "circle",
                                    showAllSymbol: !0,
                                    symbolSize: 0,
                                    smooth: !0,
                                    lineStyle: {
                                        normal: {
                                            width: 4,
                                            color: "rgba(25,163,223,1)"
                                        },
                                        borderColor: "rgba(0,0,0,.4)"
                                    },
                                    itemStyle: {
                                        color: "rgba(25,163,223,1)",
                                        borderColor: "#646ace",
                                        borderWidth: 2
                                    },
                                    tooltip: {
                                        show: !0
                                    },
                                    areaStyle: {
                                        normal: {
                                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0,
                                                color: "rgba(25,163,223,.3)"
                                            }, {
                                                offset: 1,
                                                color: "rgba(25,163,223, 0)"
                                            }], !1),
                                            shadowColor: "rgba(25,163,223, 0.5)",
                                            shadowBlur: 20
                                        }
                                    },
                                    data: e
                                }, {
                                    name: "放学",
                                    type: "line",
                                    symbol: "circle",
                                    showAllSymbol: !0,
                                    symbolSize: 0,
                                    smooth: !0,
                                    lineStyle: {
                                        normal: {
                                            width: 4,
                                            color: "rgba(10,219,250,1)"
                                        },
                                        borderColor: "rgba(0,0,0,.4)"
                                    },
                                    itemStyle: {
                                        color: "rgba(10,219,250,1)",
                                        borderColor: "#646ace",
                                        borderWidth: 2
                                    },
                                    tooltip: {
                                        show: !0
                                    },
                                    areaStyle: {
                                        normal: {
                                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0,
                                                color: "rgba(10,219,250,.3)"
                                            }, {
                                                offset: 1,
                                                color: "rgba(10,219,250, 0)"
                                            }], !1),
                                            shadowColor: "rgba(10,219,250, 0.5)",
                                            shadowBlur: 20
                                        }
                                    },
                                    data: a
                                }]
                            }, this.myChart.setOption(this.option)
                        },
                        pieActive: function() {
                            var t = this,
                                e = -1,
                                a = this.option.series[0].data.length;
                            clearInterval(this.timeoutloop), this.myChart.dispatchAction({
                                type: "showTip",
                                seriesIndex: 0,
                                dataIndex: 0
                            }), e = (e + 1) % a, this.myChart.dispatchAction({
                                type: "showTip",
                                seriesIndex: 0,
                                dataIndex: e
                            }), this.timeoutloop = setInterval((function() {
                                t.myChart.dispatchAction({
                                    type: "hideTip",
                                    seriesIndex: 0,
                                    dataIndex: e
                                }), e = (e + 1) % a, t.myChart.dispatchAction({
                                    type: "showTip",
                                    seriesIndex: 0,
                                    dataIndex: e
                                })
                            }), 3e3), this.myChart.on("mouseover", (function(a) {
                                clearInterval(t.timeoutloop), clearTimeout(t.timeout), t.myChart.dispatchAction({
                                    type: "hideTip",
                                    seriesIndex: 0,
                                    dataIndex: e
                                }), t.myChart.dispatchAction({
                                    type: "showTip",
                                    seriesIndex: 0,
                                    dataIndex: a.dataIndex
                                })
                            }))
                        }
                    }
                },
                o = r,
                c = (a("d56f"), a("cba8")),
                l = Object(c["a"])(o, i, n, !1, null, "1f6f7477", null);
            e["a"] = l.exports
        },
        "271f": function(t, e, a) {
            "use strict";
            a("83b5")
        },
        "2be8": function(t, e, a) {},
        "43f9": function(t, e, a) {
            "use strict";
            a("f006")
        },
        "83b5": function(t, e, a) {},
        "898e": function(t, e, a) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "fire-safety-wapper"
                    }, [t._m(0), 0 != t.securityLevelData.length ? a("ul", {
                        staticClass: "fs-content"
                    }, t._l(t.securityLevelData, (function(e, i) {
                        return a("li", {
                            key: i
                        }, [a("span", [t._v(t._s(e.name))]), a("div", {
                            staticClass: "fs-barBg"
                        }, t._l(30, (function(i, n) {
                            return a("span", {
                                key: n,
                                staticClass: "fs-bar",
                                class: {
                                    active: n > e.proportion / 100 * 30
                                },
                                style: {
                                    background: "" + t.gradientArray[n]
                                }
                            })
                        })), 0), a("span", [t._v(t._s(e.rating))])])
                    })), 0) : t._e()])
                },
                n = [function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "fs-header"
                    }, [a("span", [t._v("区域")]), a("span", [t._v("消防安全级别")])])
                }],
                s = a("0344");
            a("4789"), a("d835"), a("4b0c"), a("0b10"), a("9940");

            function r(t, e, a) {
                var i, n, s = /^rgb|RGB\((([0-9]|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])),){2}([0-9]|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\)$/,
                    r = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
                r.test(t) ? i = o(t) : s.test(t) && (i = t.substring(3, 15).split(",")), r.test(e) ? n = o(e) : s.test(t) && (n = e.substring(3, 15).split(","));
                for (var l = i[0], d = i[1], u = i[2], f = n[0], p = n[1], h = n[2], m = (f - l) / a, y = (p - d) / a, g = (h - u) / a, v = [], b = 0; b < a; b++) v.push(c(parseInt(m * b + l), parseInt(y * b + d), parseInt(g * b + u)));
                return v
            }

            function o(t) {
                t = t.toLowerCase().substring(1, t.length);
                var e = [];
                return e.push(parseInt(t.substring(0, 2), 16)), e.push(parseInt(t.substring(2, 4), 16)), e.push(parseInt(t.substring(4, 6), 16)), e
            }

            function c(t, e, a) {
                var i = "#" + l(t.toString(16)) + l(e.toString(16)) + l(a.toString(16));
                return i
            }

            function l(t) {
                var e = "00" + t;
                return e.substring(e.length - 2, e.length)
            }
            var d = {
                    name: "fire-safety",
                    components: {},
                    props: {
                        securityLevelData: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        }
                    },
                    data: function() {
                        return {
                            gradientArray: []
                        }
                    },
                    created: function() {},
                    mounted: function() {
                        this.gradientArray = [].concat(Object(s["a"])(r("#e9ba60", "#0fdbf6", 12)), Object(s["a"])(r("#0fdbf6", "#2ba2ff", 18)))
                    },
                    methods: {},
                    watch: {}
                },
                u = d,
                f = (a("271f"), a("cba8")),
                p = Object(f["a"])(u, i, n, !1, null, "6b10a2f2", null);
            e["a"] = p.exports
        },
        "8ab3": function(t, e, a) {},
        "9f79": function(t, e, a) {
            "use strict";
            a.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "safety-wapper"
                    }, [0 == t.xiaotaiyang.pageMode ? i("div", {
                        staticClass: "safety-left",
                        attrs: {
                            "data-msg": "pass左边内容"
                        }
                    }, [i("div", {
                        staticClass: "safety-l-top"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-200 animate__fadeInLeft",
                        attrs: {
                            title: "告警趋势"
                        }
                    }, [i("digital-subtitle-contetn", {
                        attrs: {
                            slot: "content",
                            number: t.xiaotaiyang.xtyMock["校园安全"]["告警趋势"]["告警数"],
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
                            echartsData: t.xiaotaiyang.xtyMock["校园安全"]["告警趋势"]["图表"],
                            yaxisLeftText: "预警数",
                            yaxisRightText: "最近一月告警数"
                        }
                    })], 1)])], 1)], 1), i("div", {
                        staticClass: "safety-l-center"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-400 animate__fadeInLeft",
                        attrs: {
                            title: "校车安全"
                        }
                    }, [i("div", {
                        staticClass: "safety-lc-container",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("div", {
                        staticClass: "safety-lc-header"
                    }, [t._v(" 近一周上学/放学坐校车统计 ")]), i("div", {
                        staticClass: "safety-lc-content"
                    }, [i("school-bus-safety", {
                        attrs: {
                            echartsData: t.xiaotaiyang.xtyMock["校园安全"]["校车安全"]["图表"]
                        }
                    })], 1)])])], 1), i("div", {
                        staticClass: "safety-l-bottom"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-600 animate__fadeInLeft",
                        attrs: {
                            title: "校园预警"
                        }
                    }, [i("div", {
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("campus-warning", {
                        attrs: {
                            currentList: t.xiaotaiyang.xtyMock["校园安全"]["校园预警"]["列表"],
                            slidesPerView: 3
                        }
                    })], 1)])], 1)]) : t._e(), 0 == t.xiaotaiyang.pageMode ? i("div", {
                        staticClass: "safety-right",
                        attrs: {
                            "data-msg": "pass右边内容"
                        }
                    }, [i("div", {
                        staticClass: "safety-r-top"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-200 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "消防安全"
                        }
                    }, [i("div", {
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("fire-safety", {
                        attrs: {
                            securityLevelData: t.xiaotaiyang.xtyMock["校园安全"]["消防安全"]["列表"]
                        }
                    })], 1)])], 1), i("div", {
                        staticClass: "safety-r-center"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-400 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "视频监控"
                        }
                    }, [i("div", {
                        staticClass: "safety-rb-vidoe",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("div", {
                        staticClass: "safety-rb-header"
                    }, [i("div"), i("div", [i("el-select", {
                        staticClass: "xty-select",
                        attrs: {
                            placeholder: "请选择",
                            "popper-class": "xty-pop-select"
                        },
                        model: {
                            value: t.value,
                            callback: function(e) {
                                t.value = e
                            },
                            expression: "value"
                        }
                    }, t._l(t.xiaotaiyang.xtyMock["校园安全"]["视频监控"]["查看设备"], (function(t) {
                        return i("el-option", {
                            key: t.value,
                            attrs: {
                                label: t.label,
                                value: t.value
                            }
                        })
                    })), 1)], 1)]), i("div", {
                        staticClass: "safety-rb-monitor"
                    }, [i("img", {
                        attrs: {
                            src: a("a0dc"),
                            alt: ""
                        }
                    }), i("i", {
                        staticClass: "iconfont icon-icon-fangda"
                    })])])])], 1)]) : t._e()])
                },
                n = [],
                s = a("06c4"),
                r = a("7b25"),
                o = a("cc62"),
                c = a("6e5d"),
                l = a("7eb3"),
                d = a("e123"),
                u = a("898e"),
                f = a("02ea"),
                p = a("52c1"),
                h = {
                    name: "home",
                    components: {
                        digitalContainer: r["a"],
                        timeSwitchTab: o["a"],
                        digitalSubtitleContetn: c["a"],
                        lineChart: l["a"],
                        campusWarning: d["a"],
                        fireSafety: u["a"],
                        schoolBusSafety: f["a"]
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
                    computed: Object(s["a"])({}, Object(p["c"])(["xiaotaiyang"]))
                },
                m = h,
                y = (a("9fdf"), a("43f9"), a("cba8")),
                g = Object(y["a"])(m, i, n, !1, null, "35a19dbc", null);
            e["default"] = g.exports
        },
        "9fdf": function(t, e, a) {
            "use strict";
            a("e646")
        },
        a0dc: function(t, e, a) {
            t.exports = a.p + "static/img/xty-video.b8b61fbe.png"
        },
        d56f: function(t, e, a) {
            "use strict";
            a("8ab3")
        },
        e123: function(t, e, a) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "campus-warning-wapper"
                    }, [t._m(0), t.currentList.length > 1 ? a("swiper", {
                        ref: "mySwiper",
                        staticClass: "cw-swiper",
                        attrs: {
                            options: t.swiperOptions,
                            "data-msg": 'v-if="loop.length>1" 不能删除 解决不轮播的问题'
                        }
                    }, t._l(t.currentList, (function(e, i) {
                        return a("swiper-slide", {
                            key: i,
                            staticClass: "slide-list"
                        }, [a("div", {
                            staticClass: "rw-td"
                        }, [t._v(" " + t._s(e.name) + " ")]), a("div", {
                            staticClass: "rw-td"
                        }, [t._v(" " + t._s(e.area) + " ")]), a("div", {
                            staticClass: "rw-td"
                        }, [t._v(" " + t._s(e.type) + " ")]), a("div", {
                            staticClass: "rw-td"
                        }, [t._v(" " + t._s(e.time) + " ")])])
                    })), 1) : t._e()], 1)
                },
                n = [function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "cw-header"
                    }, [a("div", {
                        staticClass: "rw-td"
                    }, [t._v(" 预警设备 ")]), a("div", {
                        staticClass: "rw-td"
                    }, [t._v(" 所在区域 ")]), a("div", {
                        staticClass: "rw-td"
                    }, [t._v(" 预警类型 ")]), a("div", {
                        staticClass: "rw-td"
                    }, [t._v(" 时间 ")])])
                }],
                s = (a("3828"), {
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
                r = s,
                o = (a("0103"), a("cba8")),
                c = Object(o["a"])(r, i, n, !1, null, "d94750c4", null);
            e["a"] = c.exports
        },
        e646: function(t, e, a) {},
        f006: function(t, e, a) {}
    }
]);