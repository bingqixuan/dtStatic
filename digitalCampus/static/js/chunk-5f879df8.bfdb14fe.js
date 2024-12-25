(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-5f879df8"], {
        "0103": function(t, a, e) {
            "use strict";
            e("2be8")
        },
        "02ea": function(t, a, e) {
            "use strict";
            var i = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
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
                    }, [e("div", {
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
                    }), 2 == t.hasDataFlag ? e("charts-status") : t._e()], 1)
                },
                s = [],
                n = (e("4789"), e("cbdc")),
                o = {
                    name: "line-chart",
                    components: {
                        chartsStatus: n["a"]
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
                        this.drawPie(), this.myChart.on("mouseout", (function(a) {
                            t.myChart.dispatchAction({
                                type: "downplay",
                                seriesIndex: 0,
                                dataIndex: a.dataIndex
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
                            var a = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                            if (a) {
                                var e = a / 1920 * 100;
                                return t * e
                            }
                        },
                        drawPie: function() {
                            this.myChart = this.$echarts.init(this.$refs.section, null, {
                                renderer: "canvas"
                            });
                            var t = this.echartsData["标签"],
                                a = this.echartsData["上学"],
                                e = this.echartsData["放学"];
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
                                        var a = '<div style="width: 79px;\n\theight: 50px;;color:#fff;position: relative;">\n        <svg style="position: absolute;top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);" class="svg" xmlns="http://www.w3.org/2000/svg" width="100" height="71" viewBox="0 0 84 55">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: #07172c;\n            fill-opacity: 0.8;\n            stroke: #a7d8ff;\n            stroke-linejoin: round;\n            stroke-opacity: 0.2;\n            stroke-width: 1px;\n            fill-rule: evenodd;\n          }\n\n        </style>\n      </defs>\n      <path id="矩形_419" data-name="矩形 419" class="cls-1" d="M266,595h74v50H266V624.046L261,620l5-3.984V595Z"\n        transform="translate(-258.5 -592.5)" />\n    </svg>\n        <div style="padding: 4px 8px 4px 14px;display: flex;\n        justify-content: space-between;\n        align-items: center;\n        flex-direction: column;position: relative;z-index: 1;">\n            <div style="margin-bottom: 4px;width:100%;display:flex;justify-content:space-between;align-items:center;">\n                <span style="font-size:14px;color:#7ec7ff;">'.concat(t[0].seriesName, '</span>\n                <span style="font-size:14px;color:#fff;">').concat(t[0].data, '</span>\n            </div>\n            <div style="width:100%;display:flex;justify-content:space-between;align-items:center;">\n                <span style="font-size:14px;color:#7ec7ff;">').concat(t[1].seriesName, '</span>\n                <span style="font-size:14px;color:#fff;">').concat(t[1].data, "</span>\n            </div>\n        </div>\n    </div>");
                                        return a
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
                                    data: a
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
                                    data: e
                                }]
                            }, this.myChart.setOption(this.option)
                        },
                        pieActive: function() {
                            var t = this,
                                a = -1,
                                e = this.option.series[0].data.length;
                            clearInterval(this.timeoutloop), this.myChart.dispatchAction({
                                type: "showTip",
                                seriesIndex: 0,
                                dataIndex: 0
                            }), a = (a + 1) % e, this.myChart.dispatchAction({
                                type: "showTip",
                                seriesIndex: 0,
                                dataIndex: a
                            }), this.timeoutloop = setInterval((function() {
                                t.myChart.dispatchAction({
                                    type: "hideTip",
                                    seriesIndex: 0,
                                    dataIndex: a
                                }), a = (a + 1) % e, t.myChart.dispatchAction({
                                    type: "showTip",
                                    seriesIndex: 0,
                                    dataIndex: a
                                })
                            }), 3e3), this.myChart.on("mouseover", (function(e) {
                                clearInterval(t.timeoutloop), clearTimeout(t.timeout), t.myChart.dispatchAction({
                                    type: "hideTip",
                                    seriesIndex: 0,
                                    dataIndex: a
                                }), t.myChart.dispatchAction({
                                    type: "showTip",
                                    seriesIndex: 0,
                                    dataIndex: e.dataIndex
                                })
                            }))
                        }
                    }
                },
                r = o,
                c = (e("d56f"), e("cba8")),
                l = Object(c["a"])(r, i, s, !1, null, "1f6f7477", null);
            a["a"] = l.exports
        },
        "1a57": function(t, a, e) {
            "use strict";
            e.r(a);
            var i = function() {
                    var t = this,
                        a = t.$createElement,
                        i = t._self._c || a;
                    return i("div", {
                        staticClass: "classroom-wapper"
                    }, [0 == t.xiaotaiyang.pageMode ? i("div", {
                        staticClass: "classroom-left",
                        attrs: {
                            "data-msg": "pass左边内容"
                        }
                    }, [i("div", {
                        staticClass: "classroom-l-top"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-200 animate__fadeInLeft",
                        attrs: {
                            title: "课堂状态"
                        }
                    }, [i("ul", {
                        staticClass: "classroom-lt-content",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("li", [i("span", [t._v("班级")]), i("span", [t._v(t._s(t.xiaotaiyang.xtyMock["智能教室"]["课堂状态"]["班级"]))])]), i("li", [i("span", [t._v("课堂状态")]), i("span", [t._v(t._s(t.xiaotaiyang.xtyMock["智能教室"]["课堂状态"]["课堂状态"]))])]), i("li", [i("span", [t._v("课程名称")]), i("span", [t._v(t._s(t.xiaotaiyang.xtyMock["智能教室"]["课堂状态"]["课程名称"]))])]), i("li", [i("span", [t._v("老师")]), i("span", [t._v(t._s(t.xiaotaiyang.xtyMock["智能教室"]["课堂状态"]["老师"]))])]), i("li", [i("span", [t._v("实到")]), i("span", [t._v(t._s(t.xiaotaiyang.xtyMock["智能教室"]["课堂状态"]["实到"]))])]), i("li", [i("span", [t._v("迟到")]), i("span", [t._v(t._s(t.xiaotaiyang.xtyMock["智能教室"]["课堂状态"]["迟到"]))])]), i("li", [i("span", [t._v("请假")]), i("span", [t._v(t._s(t.xiaotaiyang.xtyMock["智能教室"]["课堂状态"]["请假"]))])])])])], 1), i("div", {
                        staticClass: "classroom-l-center"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-400 animate__fadeInLeft",
                        attrs: {
                            title: "智能黑板"
                        }
                    }, [i("div", {
                        staticClass: "classroom-lc-monitor",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("img", {
                        attrs: {
                            src: e("7488"),
                            alt: ""
                        }
                    }), i("i", {
                        staticClass: "iconfont icon-icon-fangda"
                    })])])], 1), i("div", {
                        staticClass: "classroom-l-bottom"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-600 animate__fadeInLeft",
                        attrs: {
                            title: "电子班牌"
                        }
                    }, [i("div", {
                        staticClass: "classroom-lb-monitor",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("img", {
                        attrs: {
                            src: e("a87b"),
                            alt: ""
                        }
                    }), i("i", {
                        staticClass: "iconfont icon-icon-fangda"
                    })])])], 1)]) : t._e(), 0 == t.xiaotaiyang.pageMode ? i("div", {
                        staticClass: "classroom-right",
                        attrs: {
                            "data-msg": "pass右边内容"
                        }
                    }, [i("div", {
                        staticClass: "classroom-r-top"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-200 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "设备状态"
                        }
                    }, [i("div", {
                        staticClass: "classroom-rb-main",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("div", {
                        staticClass: "classroom-rb-top"
                    }, [i("div", [i("span", [t._v("设备总数")]), i("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["智能教室"]["设备状态"]["设备总数"]))])]), i("div", [i("span", [t._v("上一小时能耗")]), i("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["智能教室"]["设备状态"]["上一小时能耗"]) + "kw/h")])])]), i("div", {
                        staticClass: "classroom-rb-bottom"
                    }, [i("div", [i("span", [t._v("开启设备")]), i("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["智能教室"]["设备状态"]["开启设备"]))])]), i("div", [i("span", [t._v("关闭设备")]), i("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["智能教室"]["设备状态"]["关闭设备"]))])]), i("div", [i("span", [t._v("故障设备")]), i("span", {
                        staticClass: "font-pmzd"
                    }, [t._v(t._s(t.xiaotaiyang.xtyMock["智能教室"]["设备状态"]["故障设备"]))])])])])])], 1), i("div", {
                        staticClass: "classroom-r-center"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-400 animate__fadeInRight",
                        attrs: {
                            direction: "right",
                            title: "设备控制"
                        }
                    }, [i("div", {
                        staticClass: "classroom-rb-content",
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
                        staticClass: "classroom-r-bottom"
                    }, [i("digital-container", {
                        staticClass: "animate__animated gcani gcani__delay-600 animate__fadeInRight",
                        attrs: {
                            title: "监控视频"
                        }
                    }, [i("div", {
                        staticClass: "classroom-rb-monitor",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [i("img", {
                        attrs: {
                            src: e("675a"),
                            alt: ""
                        }
                    }), i("i", {
                        staticClass: "iconfont icon-icon-fangda"
                    })])])], 1)]) : t._e()])
                },
                s = [],
                n = e("06c4"),
                o = e("7b25"),
                r = e("cc62"),
                c = e("6e5d"),
                l = e("7eb3"),
                d = e("e123"),
                u = e("898e"),
                p = e("02ea"),
                f = e("acba"),
                m = e("52c1"),
                h = {
                    name: "classroom",
                    components: {
                        digitalContainer: o["a"],
                        timeSwitchTab: r["a"],
                        digitalSubtitleContetn: c["a"],
                        lineChart: l["a"],
                        campusWarning: d["a"],
                        fireSafety: u["a"],
                        schoolBusSafety: p["a"],
                        switchRadio: f["a"]
                    },
                    props: {},
                    data: function() {
                        return {}
                    },
                    created: function() {},
                    mounted: function() {},
                    methods: {},
                    watch: {},
                    computed: Object(n["a"])({}, Object(m["c"])(["xiaotaiyang"]))
                },
                g = h,
                v = (e("f8d0"), e("cba8")),
                y = Object(v["a"])(g, i, s, !1, null, "199aca70", null);
            a["default"] = y.exports
        },
        "271f": function(t, a, e) {
            "use strict";
            e("83b5")
        },
        "2be8": function(t, a, e) {},
        "58e2": function(t, a, e) {},
        "675a": function(t, a, e) {
            t.exports = e.p + "static/img/xty-classroom.aa5e25f2.png"
        },
        7488: function(t, a, e) {
            t.exports = e.p + "static/img/xty-blackboard.f42f3f86.png"
        },
        "79cb": function(t, a, e) {
            "use strict";
            e("e35f")
        },
        "83b5": function(t, a, e) {},
        "898e": function(t, a, e) {
            "use strict";
            var i = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
                        staticClass: "fire-safety-wapper"
                    }, [t._m(0), 0 != t.securityLevelData.length ? e("ul", {
                        staticClass: "fs-content"
                    }, t._l(t.securityLevelData, (function(a, i) {
                        return e("li", {
                            key: i
                        }, [e("span", [t._v(t._s(a.name))]), e("div", {
                            staticClass: "fs-barBg"
                        }, t._l(30, (function(i, s) {
                            return e("span", {
                                key: s,
                                staticClass: "fs-bar",
                                class: {
                                    active: s > a.proportion / 100 * 30
                                },
                                style: {
                                    background: "" + t.gradientArray[s]
                                }
                            })
                        })), 0), e("span", [t._v(t._s(a.rating))])])
                    })), 0) : t._e()])
                },
                s = [function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
                        staticClass: "fs-header"
                    }, [e("span", [t._v("区域")]), e("span", [t._v("消防安全级别")])])
                }],
                n = e("0344");
            e("4789"), e("d835"), e("4b0c"), e("0b10"), e("9940");

            function o(t, a, e) {
                var i, s, n = /^rgb|RGB\((([0-9]|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])),){2}([0-9]|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\)$/,
                    o = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
                o.test(t) ? i = r(t) : n.test(t) && (i = t.substring(3, 15).split(",")), o.test(a) ? s = r(a) : n.test(t) && (s = a.substring(3, 15).split(","));
                for (var l = i[0], d = i[1], u = i[2], p = s[0], f = s[1], m = s[2], h = (p - l) / e, g = (f - d) / e, v = (m - u) / e, y = [], b = 0; b < e; b++) y.push(c(parseInt(h * b + l), parseInt(g * b + d), parseInt(v * b + u)));
                return y
            }

            function r(t) {
                t = t.toLowerCase().substring(1, t.length);
                var a = [];
                return a.push(parseInt(t.substring(0, 2), 16)), a.push(parseInt(t.substring(2, 4), 16)), a.push(parseInt(t.substring(4, 6), 16)), a
            }

            function c(t, a, e) {
                var i = "#" + l(t.toString(16)) + l(a.toString(16)) + l(e.toString(16));
                return i
            }

            function l(t) {
                var a = "00" + t;
                return a.substring(a.length - 2, a.length)
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
                        this.gradientArray = [].concat(Object(n["a"])(o("#e9ba60", "#0fdbf6", 12)), Object(n["a"])(o("#0fdbf6", "#2ba2ff", 18)))
                    },
                    methods: {},
                    watch: {}
                },
                u = d,
                p = (e("271f"), e("cba8")),
                f = Object(p["a"])(u, i, s, !1, null, "6b10a2f2", null);
            a["a"] = f.exports
        },
        "8ab3": function(t, a, e) {},
        a87b: function(t, a, e) {
            t.exports = e.p + "static/img/xty-electronic.c6d133d9.png"
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
                                        o = t._i(e, n);
                                    i.checked ? o < 0 && (t.toggle = e.concat([n])) : o > -1 && (t.toggle = e.slice(0, o).concat(e.slice(o + 1)))
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
                o = n,
                r = (e("79cb"), e("cba8")),
                c = Object(r["a"])(o, i, s, !1, null, "6703e28c", null);
            a["a"] = c.exports
        },
        d56f: function(t, a, e) {
            "use strict";
            e("8ab3")
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
                o = n,
                r = (e("0103"), e("cba8")),
                c = Object(r["a"])(o, i, s, !1, null, "d94750c4", null);
            a["a"] = c.exports
        },
        e35f: function(t, a, e) {},
        f8d0: function(t, a, e) {
            "use strict";
            e("58e2")
        }
    }
]);