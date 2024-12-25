(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-949d3972"], {
        "030c": function(t, e, r) {
            "use strict";
            var i = r("a230"),
                n = r("a402"),
                a = r("73ad"),
                s = r("3707"),
                o = r("40d7"),
                u = r("13ff"),
                l = r("319b"),
                f = r("2872"),
                h = r("fc64"),
                c = r("cd15"),
                d = r("a5f9"),
                p = r("b7b6"),
                v = r("ae7e"),
                y = r("fb73"),
                g = r("fd33"),
                m = r("8248"),
                b = r("ef68"),
                x = r("4c60"),
                M = r("3546"),
                T = r("54fa"),
                w = r("2532").f,
                A = r("f409"),
                _ = r("479b").forEach,
                S = r("f160"),
                B = r("0fe9"),
                C = r("b32c"),
                O = r("962a"),
                D = r("a20b"),
                P = O.get,
                k = O.set,
                R = B.f,
                E = C.f,
                U = Math.round,
                V = n.RangeError,
                j = u.ArrayBuffer,
                L = u.DataView,
                Y = o.NATIVE_ARRAY_BUFFER_VIEWS,
                F = o.TYPED_ARRAY_CONSTRUCTOR,
                I = o.TYPED_ARRAY_TAG,
                z = o.TypedArray,
                W = o.TypedArrayPrototype,
                G = o.aTypedArrayConstructor,
                N = o.isTypedArray,
                Q = "BYTES_PER_ELEMENT",
                H = "Wrong length",
                X = function(t, e) {
                    var r = 0,
                        i = e.length,
                        n = new(G(t))(i);
                    while (i > r) n[r] = e[r++];
                    return n
                },
                Z = function(t, e) {
                    R(t, e, {
                        get: function() {
                            return P(this)[e]
                        }
                    })
                },
                q = function(t) {
                    var e;
                    return t instanceof j || "ArrayBuffer" == (e = m(t)) || "SharedArrayBuffer" == e
                },
                J = function(t, e) {
                    return N(t) && !x(e) && e in t && c(+e) && e >= 0
                },
                K = function(t, e) {
                    return e = y(e), J(t, e) ? f(2, t[e]) : E(t, e)
                },
                $ = function(t, e, r) {
                    return e = y(e), !(J(t, e) && b(r) && g(r, "value")) || g(r, "get") || g(r, "set") || r.configurable || g(r, "writable") && !r.writable || g(r, "enumerable") && !r.enumerable ? R(t, e, r) : (t[e] = r.value, t)
                };
            a ? (Y || (C.f = K, B.f = $, Z(W, "buffer"), Z(W, "byteOffset"), Z(W, "byteLength"), Z(W, "length")), i({
                target: "Object",
                stat: !0,
                forced: !Y
            }, {
                getOwnPropertyDescriptor: K,
                defineProperty: $
            }), t.exports = function(t, e, r) {
                var a = t.match(/\d+$/)[0] / 8,
                    o = t + (r ? "Clamped" : "") + "Array",
                    u = "get" + t,
                    f = "set" + t,
                    c = n[o],
                    y = c,
                    g = y && y.prototype,
                    m = {},
                    x = function(t, e) {
                        var r = P(t);
                        return r.view[u](e * a + r.byteOffset, !0)
                    },
                    B = function(t, e, i) {
                        var n = P(t);
                        r && (i = (i = U(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), n.view[f](e * a + n.byteOffset, i, !0)
                    },
                    C = function(t, e) {
                        R(t, e, {
                            get: function() {
                                return x(this, e)
                            },
                            set: function(t) {
                                return B(this, e, t)
                            },
                            enumerable: !0
                        })
                    };
                Y ? s && (y = e((function(t, e, r, i) {
                    return l(t, y, o), D(function() {
                        return b(e) ? q(e) ? void 0 !== i ? new c(e, v(r, a), i) : void 0 !== r ? new c(e, v(r, a)) : new c(e) : N(e) ? X(y, e) : A.call(y, e) : new c(p(e))
                    }(), t, y)
                })), T && T(y, z), _(w(c), (function(t) {
                    t in y || h(y, t, c[t])
                })), y.prototype = g) : (y = e((function(t, e, r, i) {
                    l(t, y, o);
                    var n, s, u, f = 0,
                        h = 0;
                    if (b(e)) {
                        if (!q(e)) return N(e) ? X(y, e) : A.call(y, e);
                        n = e, h = v(r, a);
                        var c = e.byteLength;
                        if (void 0 === i) {
                            if (c % a) throw V(H);
                            if (s = c - h, s < 0) throw V(H)
                        } else if (s = d(i) * a, s + h > c) throw V(H);
                        u = s / a
                    } else u = p(e), s = u * a, n = new j(s);
                    k(t, {
                        buffer: n,
                        byteOffset: h,
                        byteLength: s,
                        length: u,
                        view: new L(n)
                    });
                    while (f < u) C(t, f++)
                })), T && T(y, z), g = y.prototype = M(W)), g.constructor !== y && h(g, "constructor", y), h(g, F, y), I && h(g, I, o), m[o] = y, i({
                    global: !0,
                    forced: y != c,
                    sham: !Y
                }, m), Q in y || h(y, Q, a), Q in g || h(g, Q, a), S(o)
            }) : t.exports = function() {}
        },
        "03ef": function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("479b").map,
                a = r("8c1f"),
                s = i.aTypedArray,
                o = i.exportTypedArrayMethod;
            o("map", (function(t) {
                return n(s(this), t, arguments.length > 1 ? arguments[1] : void 0, (function(t, e) {
                    return new(a(t))(e)
                }))
            }))
        },
        "06c4": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return a
            }));
            r("65fb"), r("02c1"), r("6819"), r("a8ef"), r("aa0c"), r("1c3e");
            var i = r("8955");

            function n(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(r), !0).forEach((function(e) {
                        Object(i["a"])(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
        },
        "0777": function(t, e, r) {
            "use strict";
            var i = r("40d7").exportTypedArrayMethod,
                n = r("204f"),
                a = r("a402"),
                s = a.Uint8Array,
                o = s && s.prototype || {},
                u = [].toString,
                l = [].join;
            n((function() {
                u.call({})
            })) && (u = function() {
                return l.call(this)
            });
            var f = o.toString != u;
            i("toString", u, f)
        },
        "07bb": function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("2566"),
                a = r("eb50"),
                s = i.aTypedArray,
                o = i.exportTypedArrayMethod;
            o("at", (function(t) {
                var e = s(this),
                    r = n(e),
                    i = a(t),
                    o = i >= 0 ? i : r + i;
                return o < 0 || o >= r ? void 0 : e[o]
            }))
        },
        "13ff": function(t, e, r) {
            "use strict";
            var i = r("a402"),
                n = r("73ad"),
                a = r("8f59"),
                s = r("e907"),
                o = r("fc64"),
                u = r("1e0b"),
                l = r("204f"),
                f = r("319b"),
                h = r("eb50"),
                c = r("a5f9"),
                d = r("b7b6"),
                p = r("22a7"),
                v = r("0f13"),
                y = r("54fa"),
                g = r("2532").f,
                m = r("0fe9").f,
                b = r("6aab"),
                x = r("9255"),
                M = r("962a"),
                T = s.PROPER,
                w = s.CONFIGURABLE,
                A = M.get,
                _ = M.set,
                S = "ArrayBuffer",
                B = "DataView",
                C = "prototype",
                O = "Wrong length",
                D = "Wrong index",
                P = i[S],
                k = P,
                R = i[B],
                E = R && R[C],
                U = Object.prototype,
                V = i.RangeError,
                j = p.pack,
                L = p.unpack,
                Y = function(t) {
                    return [255 & t]
                },
                F = function(t) {
                    return [255 & t, t >> 8 & 255]
                },
                I = function(t) {
                    return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
                },
                z = function(t) {
                    return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
                },
                W = function(t) {
                    return j(t, 23, 4)
                },
                G = function(t) {
                    return j(t, 52, 8)
                },
                N = function(t, e) {
                    m(t[C], e, {
                        get: function() {
                            return A(this)[e]
                        }
                    })
                },
                Q = function(t, e, r, i) {
                    var n = d(r),
                        a = A(t);
                    if (n + e > a.byteLength) throw V(D);
                    var s = A(a.buffer).bytes,
                        o = n + a.byteOffset,
                        u = s.slice(o, o + e);
                    return i ? u : u.reverse()
                },
                H = function(t, e, r, i, n, a) {
                    var s = d(r),
                        o = A(t);
                    if (s + e > o.byteLength) throw V(D);
                    for (var u = A(o.buffer).bytes, l = s + o.byteOffset, f = i(+n), h = 0; h < e; h++) u[l + h] = f[a ? h : e - h - 1]
                };
            if (a) {
                var X = T && P.name !== S;
                if (l((function() {
                        P(1)
                    })) && l((function() {
                        new P(-1)
                    })) && !l((function() {
                        return new P, new P(1.5), new P(NaN), X && !w
                    }))) X && w && o(P, "name", S);
                else {
                    k = function(t) {
                        return f(this, k), new P(d(t))
                    };
                    for (var Z, q = k[C] = P[C], J = g(P), K = 0; J.length > K;)(Z = J[K++]) in k || o(k, Z, P[Z]);
                    q.constructor = k
                }
                y && v(E) !== U && y(E, U);
                var $ = new R(new k(2)),
                    tt = E.setInt8;
                $.setInt8(0, 2147483648), $.setInt8(1, 2147483649), !$.getInt8(0) && $.getInt8(1) || u(E, {
                    setInt8: function(t, e) {
                        tt.call(this, t, e << 24 >> 24)
                    },
                    setUint8: function(t, e) {
                        tt.call(this, t, e << 24 >> 24)
                    }
                }, {
                    unsafe: !0
                })
            } else k = function(t) {
                f(this, k, S);
                var e = d(t);
                _(this, {
                    bytes: b.call(new Array(e), 0),
                    byteLength: e
                }), n || (this.byteLength = e)
            }, R = function(t, e, r) {
                f(this, R, B), f(t, k, B);
                var i = A(t).byteLength,
                    a = h(e);
                if (a < 0 || a > i) throw V("Wrong offset");
                if (r = void 0 === r ? i - a : c(r), a + r > i) throw V(O);
                _(this, {
                    buffer: t,
                    byteLength: r,
                    byteOffset: a
                }), n || (this.buffer = t, this.byteLength = r, this.byteOffset = a)
            }, n && (N(k, "byteLength"), N(R, "buffer"), N(R, "byteLength"), N(R, "byteOffset")), u(R[C], {
                getInt8: function(t) {
                    return Q(this, 1, t)[0] << 24 >> 24
                },
                getUint8: function(t) {
                    return Q(this, 1, t)[0]
                },
                getInt16: function(t) {
                    var e = Q(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
                    return (e[1] << 8 | e[0]) << 16 >> 16
                },
                getUint16: function(t) {
                    var e = Q(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
                    return e[1] << 8 | e[0]
                },
                getInt32: function(t) {
                    return z(Q(this, 4, t, arguments.length > 1 ? arguments[1] : void 0))
                },
                getUint32: function(t) {
                    return z(Q(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
                },
                getFloat32: function(t) {
                    return L(Q(this, 4, t, arguments.length > 1 ? arguments[1] : void 0), 23)
                },
                getFloat64: function(t) {
                    return L(Q(this, 8, t, arguments.length > 1 ? arguments[1] : void 0), 52)
                },
                setInt8: function(t, e) {
                    H(this, 1, t, Y, e)
                },
                setUint8: function(t, e) {
                    H(this, 1, t, Y, e)
                },
                setInt16: function(t, e) {
                    H(this, 2, t, F, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                setUint16: function(t, e) {
                    H(this, 2, t, F, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                setInt32: function(t, e) {
                    H(this, 4, t, I, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                setUint32: function(t, e) {
                    H(this, 4, t, I, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                setFloat32: function(t, e) {
                    H(this, 4, t, W, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                setFloat64: function(t, e) {
                    H(this, 8, t, G, e, arguments.length > 2 ? arguments[2] : void 0)
                }
            });
            x(k, S), x(R, B), t.exports = {
                ArrayBuffer: k,
                DataView: R
            }
        },
        1404: function(t, e) {
            t.exports = function(t, e) {
                var r = 0,
                    i = e.length,
                    n = new t(i);
                while (i > r) n[r] = e[r++];
                return n
            }
        },
        "14b1": function(t, e, r) {
            var i = r("030c");
            i("Float32", (function(t) {
                return function(e, r, i) {
                    return t(this, e, r, i)
                }
            }))
        },
        "1a34": function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("479b").some,
                a = i.aTypedArray,
                s = i.exportTypedArrayMethod;
            s("some", (function(t) {
                return n(a(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }))
        },
        "1c3e": function(t, e, r) {
            var i = r("a230"),
                n = r("73ad"),
                a = r("2874"),
                s = r("cc02"),
                o = r("b32c"),
                u = r("560b");
            i({
                target: "Object",
                stat: !0,
                sham: !n
            }, {
                getOwnPropertyDescriptors: function(t) {
                    var e, r, i = s(t),
                        n = o.f,
                        l = a(i),
                        f = {},
                        h = 0;
                    while (l.length > h) r = n(i, e = l[h++]), void 0 !== r && u(f, e, r);
                    return f
                }
            })
        },
        "20c7": function(t, e, r) {
            var i = r("5c5d"),
                n = r("a83a"),
                a = r("99e6"),
                s = r("2566"),
                o = function(t) {
                    return function(e, r, o, u) {
                        i(r);
                        var l = n(e),
                            f = a(l),
                            h = s(l),
                            c = t ? h - 1 : 0,
                            d = t ? -1 : 1;
                        if (o < 2)
                            while (1) {
                                if (c in f) {
                                    u = f[c], c += d;
                                    break
                                }
                                if (c += d, t ? c < 0 : h <= c) throw TypeError("Reduce of empty array with no initial value")
                            }
                        for (; t ? c >= 0 : h > c; c += d) c in f && (u = r(u, f[c], c, l));
                        return u
                    }
                };
            t.exports = {
                left: o(!1),
                right: o(!0)
            }
        },
        "22a7": function(t, e) {
            var r = Math.abs,
                i = Math.pow,
                n = Math.floor,
                a = Math.log,
                s = Math.LN2,
                o = function(t, e, o) {
                    var u, l, f, h = new Array(o),
                        c = 8 * o - e - 1,
                        d = (1 << c) - 1,
                        p = d >> 1,
                        v = 23 === e ? i(2, -24) - i(2, -77) : 0,
                        y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
                        g = 0;
                    for (t = r(t), t != t || t === 1 / 0 ? (l = t != t ? 1 : 0, u = d) : (u = n(a(t) / s), t * (f = i(2, -u)) < 1 && (u--, f *= 2), t += u + p >= 1 ? v / f : v * i(2, 1 - p), t * f >= 2 && (u++, f /= 2), u + p >= d ? (l = 0, u = d) : u + p >= 1 ? (l = (t * f - 1) * i(2, e), u += p) : (l = t * i(2, p - 1) * i(2, e), u = 0)); e >= 8; h[g++] = 255 & l, l /= 256, e -= 8);
                    for (u = u << e | l, c += e; c > 0; h[g++] = 255 & u, u /= 256, c -= 8);
                    return h[--g] |= 128 * y, h
                },
                u = function(t, e) {
                    var r, n = t.length,
                        a = 8 * n - e - 1,
                        s = (1 << a) - 1,
                        o = s >> 1,
                        u = a - 7,
                        l = n - 1,
                        f = t[l--],
                        h = 127 & f;
                    for (f >>= 7; u > 0; h = 256 * h + t[l], l--, u -= 8);
                    for (r = h & (1 << -u) - 1, h >>= -u, u += e; u > 0; r = 256 * r + t[l], l--, u -= 8);
                    if (0 === h) h = 1 - o;
                    else {
                        if (h === s) return r ? NaN : f ? -1 / 0 : 1 / 0;
                        r += i(2, e), h -= o
                    }
                    return (f ? -1 : 1) * r * i(2, h - e)
                };
            t.exports = {
                pack: o,
                unpack: u
            }
        },
        "26a9": function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("2566"),
                a = r("ae7e"),
                s = r("a83a"),
                o = r("204f"),
                u = i.aTypedArray,
                l = i.exportTypedArrayMethod,
                f = o((function() {
                    new Int8Array(1).set({})
                }));
            l("set", (function(t) {
                u(this);
                var e = a(arguments.length > 1 ? arguments[1] : void 0, 1),
                    r = this.length,
                    i = s(t),
                    o = n(i),
                    l = 0;
                if (o + e > r) throw RangeError("Wrong length");
                while (l < o) this[e + l] = i[l++]
            }), f)
        },
        "2a11": function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("6aab"),
                a = i.aTypedArray,
                s = i.exportTypedArrayMethod;
            s("fill", (function(t) {
                return n.apply(a(this), arguments)
            }))
        },
        "337c": function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("479b").filter,
                a = r("8c75"),
                s = i.aTypedArray,
                o = i.exportTypedArrayMethod;
            o("filter", (function(t) {
                var e = n(s(this), t, arguments.length > 1 ? arguments[1] : void 0);
                return a(this, e)
            }))
        },
        3707: function(t, e, r) {
            var i = r("a402"),
                n = r("204f"),
                a = r("b0ca"),
                s = r("40d7").NATIVE_ARRAY_BUFFER_VIEWS,
                o = i.ArrayBuffer,
                u = i.Int8Array;
            t.exports = !s || !n((function() {
                u(1)
            })) || !n((function() {
                new u(-1)
            })) || !a((function(t) {
                new u, new u(null), new u(1.5), new u(t)
            }), !0) || n((function() {
                return 1 !== new u(new o(2), 1, void 0).length
            }))
        },
        3911: function(t, e, r) {
            "use strict";
            var i = r("a402"),
                n = r("e907").PROPER,
                a = r("40d7"),
                s = r("21ad"),
                o = r("ae43"),
                u = o("iterator"),
                l = i.Uint8Array,
                f = s.values,
                h = s.keys,
                c = s.entries,
                d = a.aTypedArray,
                p = a.exportTypedArrayMethod,
                v = l && l.prototype[u],
                y = !!v && "values" === v.name,
                g = function() {
                    return f.call(d(this))
                };
            p("entries", (function() {
                return c.call(d(this))
            })), p("keys", (function() {
                return h.call(d(this))
            })), p("values", g, n && !y), p(u, g, n && !y)
        },
        "3c52": function(t, e, r) {
            "use strict";
            var i = r("a230"),
                n = r("a83a"),
                a = r("2566"),
                s = r("eb50"),
                o = r("c8a8");
            i({
                target: "Array",
                proto: !0
            }, {
                at: function(t) {
                    var e = n(this),
                        r = a(e),
                        i = s(t),
                        o = i >= 0 ? i : r + i;
                    return o < 0 || o >= r ? void 0 : e[o]
                }
            }), o("at")
        },
        "40d7": function(t, e, r) {
            "use strict";
            var i, n, a, s = r("8f59"),
                o = r("73ad"),
                u = r("a402"),
                l = r("f6cc"),
                f = r("ef68"),
                h = r("fd33"),
                c = r("8248"),
                d = r("19cf"),
                p = r("fc64"),
                v = r("b13f"),
                y = r("0fe9").f,
                g = r("0f13"),
                m = r("54fa"),
                b = r("ae43"),
                x = r("784b"),
                M = u.Int8Array,
                T = M && M.prototype,
                w = u.Uint8ClampedArray,
                A = w && w.prototype,
                _ = M && g(M),
                S = T && g(T),
                B = Object.prototype,
                C = B.isPrototypeOf,
                O = b("toStringTag"),
                D = x("TYPED_ARRAY_TAG"),
                P = x("TYPED_ARRAY_CONSTRUCTOR"),
                k = s && !!m && "Opera" !== c(u.opera),
                R = !1,
                E = {
                    Int8Array: 1,
                    Uint8Array: 1,
                    Uint8ClampedArray: 1,
                    Int16Array: 2,
                    Uint16Array: 2,
                    Int32Array: 4,
                    Uint32Array: 4,
                    Float32Array: 4,
                    Float64Array: 8
                },
                U = {
                    BigInt64Array: 8,
                    BigUint64Array: 8
                },
                V = function(t) {
                    if (!f(t)) return !1;
                    var e = c(t);
                    return "DataView" === e || h(E, e) || h(U, e)
                },
                j = function(t) {
                    if (!f(t)) return !1;
                    var e = c(t);
                    return h(E, e) || h(U, e)
                },
                L = function(t) {
                    if (j(t)) return t;
                    throw TypeError("Target is not a typed array")
                },
                Y = function(t) {
                    if (l(t) && (!m || C.call(_, t))) return t;
                    throw TypeError(d(t) + " is not a typed array constructor")
                },
                F = function(t, e, r) {
                    if (o) {
                        if (r)
                            for (var i in E) {
                                var n = u[i];
                                if (n && h(n.prototype, t)) try {
                                    delete n.prototype[t]
                                } catch (a) {}
                            }
                        S[t] && !r || v(S, t, r ? e : k && T[t] || e)
                    }
                },
                I = function(t, e, r) {
                    var i, n;
                    if (o) {
                        if (m) {
                            if (r)
                                for (i in E)
                                    if (n = u[i], n && h(n, t)) try {
                                        delete n[t]
                                    } catch (a) {}
                            if (_[t] && !r) return;
                            try {
                                return v(_, t, r ? e : k && _[t] || e)
                            } catch (a) {}
                        }
                        for (i in E) n = u[i], !n || n[t] && !r || v(n, t, e)
                    }
                };
            for (i in E) n = u[i], a = n && n.prototype, a ? p(a, P, n) : k = !1;
            for (i in U) n = u[i], a = n && n.prototype, a && p(a, P, n);
            if ((!k || !l(_) || _ === Function.prototype) && (_ = function() {
                    throw TypeError("Incorrect invocation")
                }, k))
                for (i in E) u[i] && m(u[i], _);
            if ((!k || !S || S === B) && (S = _.prototype, k))
                for (i in E) u[i] && m(u[i].prototype, S);
            if (k && g(A) !== S && m(A, S), o && !h(S, O))
                for (i in R = !0, y(S, O, {
                        get: function() {
                            return f(this) ? this[D] : void 0
                        }
                    }), E) u[i] && p(u[i], D, i);
            t.exports = {
                NATIVE_ARRAY_BUFFER_VIEWS: k,
                TYPED_ARRAY_CONSTRUCTOR: P,
                TYPED_ARRAY_TAG: R && D,
                aTypedArray: L,
                aTypedArrayConstructor: Y,
                exportTypedArrayMethod: F,
                exportTypedArrayStaticMethod: I,
                isView: V,
                isTypedArray: j,
                TypedArray: _,
                TypedArrayPrototype: S
            }
        },
        "46a0": function(t, e, r) {
            var i = r("bc04"),
                n = i.match(/firefox\/(\d+)/i);
            t.exports = !!n && +n[1]
        },
        "4ab0": function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("a402"),
                a = r("204f"),
                s = r("5c5d"),
                o = r("2566"),
                u = r("a388"),
                l = r("46a0"),
                f = r("a956"),
                h = r("4213"),
                c = r("7829"),
                d = i.aTypedArray,
                p = i.exportTypedArrayMethod,
                v = n.Uint16Array,
                y = v && v.prototype.sort,
                g = !!y && !a((function() {
                    var t = new v(2);
                    t.sort(null), t.sort({})
                })),
                m = !!y && !a((function() {
                    if (h) return h < 74;
                    if (l) return l < 67;
                    if (f) return !0;
                    if (c) return c < 602;
                    var t, e, r = new v(516),
                        i = Array(516);
                    for (t = 0; t < 516; t++) e = t % 4, r[t] = 515 - t, i[t] = t - 2 * e + 3;
                    for (r.sort((function(t, e) {
                            return (t / 4 | 0) - (e / 4 | 0)
                        })), t = 0; t < 516; t++)
                        if (r[t] !== i[t]) return !0
                })),
                b = function(t) {
                    return function(e, r) {
                        return void 0 !== t ? +t(e, r) || 0 : r !== r ? -1 : e !== e ? 1 : 0 === e && 0 === r ? 1 / e > 0 && 1 / r < 0 ? 1 : -1 : e > r
                    }
                };
            p("sort", (function(t) {
                var e = this;
                if (void 0 !== t && s(t), m) return y.call(e, t);
                d(e);
                var r, i = o(e),
                    n = Array(i);
                for (r = 0; r < i; r++) n[r] = e[r];
                for (n = u(e, b(t)), r = 0; r < i; r++) e[r] = n[r];
                return e
            }), !m || g)
        },
        "50d9": function(t, e, r) {
            r("07bb")
        },
        "51d6": function(t, e, r) {
            "use strict";
            var i = r("a83a"),
                n = r("17c3"),
                a = r("2566"),
                s = Math.min;
            t.exports = [].copyWithin || function(t, e) {
                var r = i(this),
                    o = a(r),
                    u = n(t, o),
                    l = n(e, o),
                    f = arguments.length > 2 ? arguments[2] : void 0,
                    h = s((void 0 === f ? o : n(f, o)) - l, o - u),
                    c = 1;
                l < u && u < l + h && (c = -1, l += h - 1, u += h - 1);
                while (h-- > 0) l in r ? r[u] = r[l] : delete r[u], u += c, l += c;
                return r
            }
        },
        "5a28": function(t, e, r) {
            "use strict";
            var i = r("a402"),
                n = r("40d7"),
                a = r("204f"),
                s = i.Int8Array,
                o = n.aTypedArray,
                u = n.exportTypedArrayMethod,
                l = [].toLocaleString,
                f = [].slice,
                h = !!s && a((function() {
                    l.call(new s(1))
                })),
                c = a((function() {
                    return [1, 2].toLocaleString() != new s([1, 2]).toLocaleString()
                })) || !a((function() {
                    s.prototype.toLocaleString.call([1, 2])
                }));
            u("toLocaleString", (function() {
                return l.apply(h ? f.call(o(this)) : o(this), arguments)
            }), c)
        },
        "65fb": function(t, e, r) {
            var i = r("a230"),
                n = r("a83a"),
                a = r("c205"),
                s = r("204f"),
                o = s((function() {
                    a(1)
                }));
            i({
                target: "Object",
                stat: !0,
                forced: o
            }, {
                keys: function(t) {
                    return a(n(t))
                }
            })
        },
        "6aab": function(t, e, r) {
            "use strict";
            var i = r("a83a"),
                n = r("17c3"),
                a = r("2566");
            t.exports = function(t) {
                var e = i(this),
                    r = a(e),
                    s = arguments.length,
                    o = n(s > 1 ? arguments[1] : void 0, r),
                    u = s > 2 ? arguments[2] : void 0,
                    l = void 0 === u ? r : n(u, r);
                while (l > o) e[o++] = t;
                return e
            }
        },
        "73f5": function(t, e, r) {
            r("3c52")
        },
        7829: function(t, e, r) {
            var i = r("bc04"),
                n = i.match(/AppleWebKit\/(\d+)\./);
            t.exports = !!n && +n[1]
        },
        7946: function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = i.aTypedArray,
                a = i.exportTypedArrayMethod,
                s = [].join;
            a("join", (function(t) {
                return s.apply(n(this), arguments)
            }))
        },
        "8a57": function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("20c7").right,
                a = i.aTypedArray,
                s = i.exportTypedArrayMethod;
            s("reduceRight", (function(t) {
                return n(a(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }))
        },
        "8c1f": function(t, e, r) {
            var i = r("40d7"),
                n = r("2c9f"),
                a = i.TYPED_ARRAY_CONSTRUCTOR,
                s = i.aTypedArrayConstructor;
            t.exports = function(t) {
                return s(n(t, t[a]))
            }
        },
        "8c75": function(t, e, r) {
            var i = r("1404"),
                n = r("8c1f");
            t.exports = function(t, e) {
                return i(n(t), e)
            }
        },
        "8f59": function(t, e) {
            t.exports = "undefined" !== typeof ArrayBuffer && "undefined" !== typeof DataView
        },
        "943d": function(t, e, r) {
            var i = r("eb50");
            t.exports = function(t) {
                var e = i(t);
                if (e < 0) throw RangeError("The argument can't be less than 0");
                return e
            }
        },
        "97ee": function(t, e, r) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            r.d(e, "a", (function() {
                return i
            }))
        },
        "9b5f": function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("479b").find,
                a = i.aTypedArray,
                s = i.exportTypedArrayMethod;
            s("find", (function(t) {
                return n(a(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }))
        },
        a21f: function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("479b").findIndex,
                a = i.aTypedArray,
                s = i.exportTypedArrayMethod;
            s("findIndex", (function(t) {
                return n(a(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }))
        },
        a388: function(t, e) {
            var r = Math.floor,
                i = function(t, e) {
                    var s = t.length,
                        o = r(s / 2);
                    return s < 8 ? n(t, e) : a(i(t.slice(0, o), e), i(t.slice(o), e), e)
                },
                n = function(t, e) {
                    var r, i, n = t.length,
                        a = 1;
                    while (a < n) {
                        i = a, r = t[a];
                        while (i && e(t[i - 1], r) > 0) t[i] = t[--i];
                        i !== a++ && (t[i] = r)
                    }
                    return t
                },
                a = function(t, e, r) {
                    var i = t.length,
                        n = e.length,
                        a = 0,
                        s = 0,
                        o = [];
                    while (a < i || s < n) a < i && s < n ? o.push(r(t[a], e[s]) <= 0 ? t[a++] : e[s++]) : o.push(a < i ? t[a++] : e[s++]);
                    return o
                };
            t.exports = i
        },
        a8ef: function(t, e, r) {
            var i = r("a230"),
                n = r("204f"),
                a = r("cc02"),
                s = r("b32c").f,
                o = r("73ad"),
                u = n((function() {
                    s(1)
                })),
                l = !o || u;
            i({
                target: "Object",
                stat: !0,
                forced: l,
                sham: !o
            }, {
                getOwnPropertyDescriptor: function(t, e) {
                    return s(a(t), e)
                }
            })
        },
        a956: function(t, e, r) {
            var i = r("bc04");
            t.exports = /MSIE|Trident/.test(i)
        },
        aa4f: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return s
            }));
            var i = r("551d"),
                n = r("2d64"),
                a = r("1e01"),
                s = function(t, e, r, s) {
                    this.renderScene = e, this.renderCamera = r, this.selectedObjects = void 0 !== s ? s : [], this.visibleEdgeColor = new i["Color"](1, 1, 1), this.hiddenEdgeColor = new i["Color"](.1, .04, .02), this.edgeGlow = 0, this.usePatternTexture = !1, this.edgeThickness = 1, this.edgeStrength = 3, this.downSampleRatio = 2, this.pulsePeriod = 0, n["a"].call(this), this.resolution = void 0 !== t ? new i["Vector2"](t.x, t.y) : new i["Vector2"](256, 256);
                    var o = {
                            minFilter: i["LinearFilter"],
                            magFilter: i["LinearFilter"],
                            format: i["RGBAFormat"]
                        },
                        u = Math.round(this.resolution.x / this.downSampleRatio),
                        l = Math.round(this.resolution.y / this.downSampleRatio);
                    this.maskBufferMaterial = new i["MeshBasicMaterial"]({
                        color: 16777215
                    }), this.maskBufferMaterial.side = i["DoubleSide"], this.renderTargetMaskBuffer = new i["WebGLRenderTarget"](this.resolution.x, this.resolution.y, o), this.renderTargetMaskBuffer.texture.name = "OutlinePass.mask", this.renderTargetMaskBuffer.texture.generateMipmaps = !1, this.depthMaterial = new i["MeshDepthMaterial"], this.depthMaterial.side = i["DoubleSide"], this.depthMaterial.depthPacking = i["RGBADepthPacking"], this.depthMaterial.blending = i["NoBlending"], this.prepareMaskMaterial = this.getPrepareMaskMaterial(), this.prepareMaskMaterial.side = i["DoubleSide"], this.prepareMaskMaterial.fragmentShader = d(this.prepareMaskMaterial.fragmentShader, this.renderCamera), this.renderTargetDepthBuffer = new i["WebGLRenderTarget"](this.resolution.x, this.resolution.y, o), this.renderTargetDepthBuffer.texture.name = "OutlinePass.depth", this.renderTargetDepthBuffer.texture.generateMipmaps = !1, this.renderTargetMaskDownSampleBuffer = new i["WebGLRenderTarget"](u, l, o), this.renderTargetMaskDownSampleBuffer.texture.name = "OutlinePass.depthDownSample", this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps = !1, this.renderTargetBlurBuffer1 = new i["WebGLRenderTarget"](u, l, o), this.renderTargetBlurBuffer1.texture.name = "OutlinePass.blur1", this.renderTargetBlurBuffer1.texture.generateMipmaps = !1, this.renderTargetBlurBuffer2 = new i["WebGLRenderTarget"](Math.round(u / 2), Math.round(l / 2), o), this.renderTargetBlurBuffer2.texture.name = "OutlinePass.blur2", this.renderTargetBlurBuffer2.texture.generateMipmaps = !1, this.edgeDetectionMaterial = this.getEdgeDetectionMaterial(), this.renderTargetEdgeBuffer1 = new i["WebGLRenderTarget"](u, l, o), this.renderTargetEdgeBuffer1.texture.name = "OutlinePass.edge1", this.renderTargetEdgeBuffer1.texture.generateMipmaps = !1, this.renderTargetEdgeBuffer2 = new i["WebGLRenderTarget"](Math.round(u / 2), Math.round(l / 2), o), this.renderTargetEdgeBuffer2.texture.name = "OutlinePass.edge2", this.renderTargetEdgeBuffer2.texture.generateMipmaps = !1;
                    var f = 4,
                        h = 4;
                    this.separableBlurMaterial1 = this.getSeperableBlurMaterial(f), this.separableBlurMaterial1.uniforms["texSize"].value.set(u, l), this.separableBlurMaterial1.uniforms["kernelRadius"].value = 1, this.separableBlurMaterial2 = this.getSeperableBlurMaterial(h), this.separableBlurMaterial2.uniforms["texSize"].value.set(Math.round(u / 2), Math.round(l / 2)), this.separableBlurMaterial2.uniforms["kernelRadius"].value = h, this.overlayMaterial = this.getOverlayMaterial(), void 0 === a["a"] && console.error("OutlinePass relies on CopyShader");
                    var c = a["a"];

                    function d(t, e) {
                        var r = e.isPerspectiveCamera ? "perspective" : "orthographic";
                        return t.replace(/DEPTH_TO_VIEW_Z/g, r + "DepthToViewZ")
                    }
                    this.copyUniforms = i["UniformsUtils"].clone(c.uniforms), this.copyUniforms["opacity"].value = 1, this.materialCopy = new i["ShaderMaterial"]({
                        uniforms: this.copyUniforms,
                        vertexShader: c.vertexShader,
                        fragmentShader: c.fragmentShader,
                        blending: i["NoBlending"],
                        depthTest: !1,
                        depthWrite: !1,
                        transparent: !0
                    }), this.enabled = !0, this.needsSwap = !1, this.oldClearColor = new i["Color"], this.oldClearAlpha = 1, this.fsQuad = new n["a"].FullScreenQuad(null), this.tempPulseColor1 = new i["Color"], this.tempPulseColor2 = new i["Color"], this.textureMatrix = new i["Matrix4"]
                };
            s.prototype = Object.assign(Object.create(n["a"].prototype), {
                constructor: s,
                dispose: function() {
                    this.renderTargetMaskBuffer.dispose(), this.renderTargetDepthBuffer.dispose(), this.renderTargetMaskDownSampleBuffer.dispose(), this.renderTargetBlurBuffer1.dispose(), this.renderTargetBlurBuffer2.dispose(), this.renderTargetEdgeBuffer1.dispose(), this.renderTargetEdgeBuffer2.dispose()
                },
                setSize: function(t, e) {
                    this.renderTargetMaskBuffer.setSize(t, e);
                    var r = Math.round(t / this.downSampleRatio),
                        i = Math.round(e / this.downSampleRatio);
                    this.renderTargetMaskDownSampleBuffer.setSize(r, i), this.renderTargetBlurBuffer1.setSize(r, i), this.renderTargetEdgeBuffer1.setSize(r, i), this.separableBlurMaterial1.uniforms["texSize"].value.set(r, i), r = Math.round(r / 2), i = Math.round(i / 2), this.renderTargetBlurBuffer2.setSize(r, i), this.renderTargetEdgeBuffer2.setSize(r, i), this.separableBlurMaterial2.uniforms["texSize"].value.set(r, i)
                },
                changeVisibilityOfSelectedObjects: function(t) {
                    function e(e) {
                        e.isMesh && (t ? (e.visible = e.userData.oldVisible, delete e.userData.oldVisible) : (e.userData.oldVisible = e.visible, e.visible = t))
                    }
                    for (var r = 0; r < this.selectedObjects.length; r++) {
                        var i = this.selectedObjects[r];
                        i.traverse(e)
                    }
                },
                changeVisibilityOfNonSelectedObjects: function(t) {
                    var e = [];

                    function r(t) {
                        t.isMesh && e.push(t)
                    }
                    for (var i = 0; i < this.selectedObjects.length; i++) {
                        var n = this.selectedObjects[i];
                        n.traverse(r)
                    }

                    function a(r) {
                        if (r.isMesh || r.isLine || r.isSprite) {
                            for (var i = !1, n = 0; n < e.length; n++) {
                                var a = e[n].id;
                                if (a === r.id) {
                                    i = !0;
                                    break
                                }
                            }
                            if (!i) {
                                var s = r.visible;
                                t && !r.bVisible || (r.visible = t), r.bVisible = s
                            }
                        }
                    }
                    this.renderScene.traverse(a)
                },
                updateTextureMatrix: function() {
                    this.textureMatrix.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), this.textureMatrix.multiply(this.renderCamera.projectionMatrix), this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)
                },
                render: function(t, e, r, i, n) {
                    if (this.selectedObjects.length > 0) {
                        this.oldClearColor.copy(t.getClearColor()), this.oldClearAlpha = t.getClearAlpha();
                        var a = t.autoClear;
                        t.autoClear = !1, n && t.state.buffers.stencil.setTest(!1), t.setClearColor(16777215, 1), this.changeVisibilityOfSelectedObjects(!1);
                        var o = this.renderScene.background;
                        if (this.renderScene.background = null, this.renderScene.overrideMaterial = this.depthMaterial, t.setRenderTarget(this.renderTargetDepthBuffer), t.clear(), t.render(this.renderScene, this.renderCamera), this.changeVisibilityOfSelectedObjects(!0), this.updateTextureMatrix(), this.changeVisibilityOfNonSelectedObjects(!1), this.renderScene.overrideMaterial = this.prepareMaskMaterial, this.prepareMaskMaterial.uniforms["cameraNearFar"].value.set(this.renderCamera.near, this.renderCamera.far), this.prepareMaskMaterial.uniforms["depthTexture"].value = this.renderTargetDepthBuffer.texture, this.prepareMaskMaterial.uniforms["textureMatrix"].value = this.textureMatrix, t.setRenderTarget(this.renderTargetMaskBuffer), t.clear(), t.render(this.renderScene, this.renderCamera), this.renderScene.overrideMaterial = null, this.changeVisibilityOfNonSelectedObjects(!0), this.renderScene.background = o, this.fsQuad.material = this.materialCopy, this.copyUniforms["tDiffuse"].value = this.renderTargetMaskBuffer.texture, t.setRenderTarget(this.renderTargetMaskDownSampleBuffer), t.clear(), this.fsQuad.render(t), this.tempPulseColor1.copy(this.visibleEdgeColor), this.tempPulseColor2.copy(this.hiddenEdgeColor), this.pulsePeriod > 0) {
                            var u = .625 + .75 * Math.cos(.01 * performance.now() / this.pulsePeriod) / 2;
                            this.tempPulseColor1.multiplyScalar(u), this.tempPulseColor2.multiplyScalar(u)
                        }
                        this.fsQuad.material = this.edgeDetectionMaterial, this.edgeDetectionMaterial.uniforms["maskTexture"].value = this.renderTargetMaskDownSampleBuffer.texture, this.edgeDetectionMaterial.uniforms["texSize"].value.set(this.renderTargetMaskDownSampleBuffer.width, this.renderTargetMaskDownSampleBuffer.height), this.edgeDetectionMaterial.uniforms["visibleEdgeColor"].value = this.tempPulseColor1, this.edgeDetectionMaterial.uniforms["hiddenEdgeColor"].value = this.tempPulseColor2, t.setRenderTarget(this.renderTargetEdgeBuffer1), t.clear(), this.fsQuad.render(t), this.fsQuad.material = this.separableBlurMaterial1, this.separableBlurMaterial1.uniforms["colorTexture"].value = this.renderTargetEdgeBuffer1.texture, this.separableBlurMaterial1.uniforms["direction"].value = s.BlurDirectionX, this.separableBlurMaterial1.uniforms["kernelRadius"].value = this.edgeThickness, t.setRenderTarget(this.renderTargetBlurBuffer1), t.clear(), this.fsQuad.render(t), this.separableBlurMaterial1.uniforms["colorTexture"].value = this.renderTargetBlurBuffer1.texture, this.separableBlurMaterial1.uniforms["direction"].value = s.BlurDirectionY, t.setRenderTarget(this.renderTargetEdgeBuffer1), t.clear(), this.fsQuad.render(t), this.fsQuad.material = this.separableBlurMaterial2, this.separableBlurMaterial2.uniforms["colorTexture"].value = this.renderTargetEdgeBuffer1.texture, this.separableBlurMaterial2.uniforms["direction"].value = s.BlurDirectionX, t.setRenderTarget(this.renderTargetBlurBuffer2), t.clear(), this.fsQuad.render(t), this.separableBlurMaterial2.uniforms["colorTexture"].value = this.renderTargetBlurBuffer2.texture, this.separableBlurMaterial2.uniforms["direction"].value = s.BlurDirectionY, t.setRenderTarget(this.renderTargetEdgeBuffer2), t.clear(), this.fsQuad.render(t), this.fsQuad.material = this.overlayMaterial, this.overlayMaterial.uniforms["maskTexture"].value = this.renderTargetMaskBuffer.texture, this.overlayMaterial.uniforms["edgeTexture1"].value = this.renderTargetEdgeBuffer1.texture, this.overlayMaterial.uniforms["edgeTexture2"].value = this.renderTargetEdgeBuffer2.texture, this.overlayMaterial.uniforms["patternTexture"].value = this.patternTexture, this.overlayMaterial.uniforms["edgeStrength"].value = this.edgeStrength, this.overlayMaterial.uniforms["edgeGlow"].value = this.edgeGlow, this.overlayMaterial.uniforms["usePatternTexture"].value = this.usePatternTexture, n && t.state.buffers.stencil.setTest(!0), t.setRenderTarget(r), this.fsQuad.render(t), t.setClearColor(this.oldClearColor, this.oldClearAlpha), t.autoClear = a
                    }
                    this.renderToScreen && (this.fsQuad.material = this.materialCopy, this.copyUniforms["tDiffuse"].value = r.texture, t.setRenderTarget(null), this.fsQuad.render(t))
                },
                getPrepareMaskMaterial: function() {
                    return new i["ShaderMaterial"]({
                        uniforms: {
                            depthTexture: {
                                value: null
                            },
                            cameraNearFar: {
                                value: new i["Vector2"](.5, .5)
                            },
                            textureMatrix: {
                                value: null
                            }
                        },
                        vertexShader: ["#include <morphtarget_pars_vertex>", "#include <skinning_pars_vertex>", "varying vec4 projTexCoord;", "varying vec4 vPosition;", "uniform mat4 textureMatrix;", "void main() {", "\t#include <skinbase_vertex>", "\t#include <begin_vertex>", "\t#include <morphtarget_vertex>", "\t#include <skinning_vertex>", "\t#include <project_vertex>", "\tvPosition = mvPosition;", "\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "\tprojTexCoord = textureMatrix * worldPosition;", "}"].join("\n"),
                        fragmentShader: ["#include <packing>", "varying vec4 vPosition;", "varying vec4 projTexCoord;", "uniform sampler2D depthTexture;", "uniform vec2 cameraNearFar;", "void main() {", "\tfloat depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));", "\tfloat viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );", "\tfloat depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;", "\tgl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);", "}"].join("\n")
                    })
                },
                getEdgeDetectionMaterial: function() {
                    return new i["ShaderMaterial"]({
                        uniforms: {
                            maskTexture: {
                                value: null
                            },
                            texSize: {
                                value: new i["Vector2"](.5, .5)
                            },
                            visibleEdgeColor: {
                                value: new i["Vector3"](1, 1, 1)
                            },
                            hiddenEdgeColor: {
                                value: new i["Vector3"](1, 1, 1)
                            }
                        },
                        vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                        fragmentShader: "varying vec2 vUv;\t\t\t\tuniform sampler2D maskTexture;\t\t\t\tuniform vec2 texSize;\t\t\t\tuniform vec3 visibleEdgeColor;\t\t\t\tuniform vec3 hiddenEdgeColor;\t\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\t\t\t\t\tvec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);\t\t\t\t\tvec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);\t\t\t\t\tvec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);\t\t\t\t\tvec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);\t\t\t\t\tvec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);\t\t\t\t\tfloat diff1 = (c1.r - c2.r)*0.5;\t\t\t\t\tfloat diff2 = (c3.r - c4.r)*0.5;\t\t\t\t\tfloat d = length( vec2(diff1, diff2) );\t\t\t\t\tfloat a1 = min(c1.g, c2.g);\t\t\t\t\tfloat a2 = min(c3.g, c4.g);\t\t\t\t\tfloat visibilityFactor = min(a1, a2);\t\t\t\t\tvec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;\t\t\t\t\tgl_FragColor = vec4(edgeColor, 1.0) * vec4(d);\t\t\t\t}"
                    })
                },
                getSeperableBlurMaterial: function(t) {
                    return new i["ShaderMaterial"]({
                        defines: {
                            MAX_RADIUS: t
                        },
                        uniforms: {
                            colorTexture: {
                                value: null
                            },
                            texSize: {
                                value: new i["Vector2"](.5, .5)
                            },
                            direction: {
                                value: new i["Vector2"](.5, .5)
                            },
                            kernelRadius: {
                                value: 1
                            }
                        },
                        vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                        fragmentShader: "#include <common>\t\t\t\tvarying vec2 vUv;\t\t\t\tuniform sampler2D colorTexture;\t\t\t\tuniform vec2 texSize;\t\t\t\tuniform vec2 direction;\t\t\t\tuniform float kernelRadius;\t\t\t\t\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\t\t\t\t}\t\t\t\tvoid main() {\t\t\t\t\tvec2 invSize = 1.0 / texSize;\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, kernelRadius);\t\t\t\t\tvec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;\t\t\t\t\tvec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);\t\t\t\t\tvec2 uvOffset = delta;\t\t\t\t\tfor( int i = 1; i <= MAX_RADIUS; i ++ ) {\t\t\t\t\t\tfloat w = gaussianPdf(uvOffset.x, kernelRadius);\t\t\t\t\t\tvec4 sample1 = texture2D( colorTexture, vUv + uvOffset);\t\t\t\t\t\tvec4 sample2 = texture2D( colorTexture, vUv - uvOffset);\t\t\t\t\t\tdiffuseSum += ((sample1 + sample2) * w);\t\t\t\t\t\tweightSum += (2.0 * w);\t\t\t\t\t\tuvOffset += delta;\t\t\t\t\t}\t\t\t\t\tgl_FragColor = diffuseSum/weightSum;\t\t\t\t}"
                    })
                },
                getOverlayMaterial: function() {
                    return new i["ShaderMaterial"]({
                        uniforms: {
                            maskTexture: {
                                value: null
                            },
                            edgeTexture1: {
                                value: null
                            },
                            edgeTexture2: {
                                value: null
                            },
                            patternTexture: {
                                value: null
                            },
                            edgeStrength: {
                                value: 1
                            },
                            edgeGlow: {
                                value: 1
                            },
                            usePatternTexture: {
                                value: 0
                            }
                        },
                        vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                        fragmentShader: "varying vec2 vUv;\t\t\t\tuniform sampler2D maskTexture;\t\t\t\tuniform sampler2D edgeTexture1;\t\t\t\tuniform sampler2D edgeTexture2;\t\t\t\tuniform sampler2D patternTexture;\t\t\t\tuniform float edgeStrength;\t\t\t\tuniform float edgeGlow;\t\t\t\tuniform bool usePatternTexture;\t\t\t\t\t\t\t\tvoid main() {\t\t\t\t\tvec4 edgeValue1 = texture2D(edgeTexture1, vUv);\t\t\t\t\tvec4 edgeValue2 = texture2D(edgeTexture2, vUv);\t\t\t\t\tvec4 maskColor = texture2D(maskTexture, vUv);\t\t\t\t\tvec4 patternColor = texture2D(patternTexture, 6.0 * vUv);\t\t\t\t\tfloat visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;\t\t\t\t\tvec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;\t\t\t\t\tvec4 finalColor = edgeStrength * maskColor.r * edgeValue;\t\t\t\t\tif(usePatternTexture)\t\t\t\t\t\tfinalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);\t\t\t\t\tgl_FragColor = finalColor;\t\t\t\t}",
                        blending: i["AdditiveBlending"],
                        depthTest: !1,
                        depthWrite: !1,
                        transparent: !0
                    })
                }
            }), s.BlurDirectionX = new i["Vector2"](1, 0), s.BlurDirectionY = new i["Vector2"](0, 1)
        },
        ac1c: function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("479b").every,
                a = i.aTypedArray,
                s = i.exportTypedArrayMethod;
            s("every", (function(t) {
                return n(a(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }))
        },
        ae20: function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("4bb3").includes,
                a = i.aTypedArray,
                s = i.exportTypedArrayMethod;
            s("includes", (function(t) {
                return n(a(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }))
        },
        ae77: function(t, e, r) {
            "use strict";
            var i = r("a230"),
                n = r("204f"),
                a = r("13ff"),
                s = r("fb2f"),
                o = r("17c3"),
                u = r("a5f9"),
                l = r("2c9f"),
                f = a.ArrayBuffer,
                h = a.DataView,
                c = f.prototype.slice,
                d = n((function() {
                    return !new f(2).slice(1, void 0).byteLength
                }));
            i({
                target: "ArrayBuffer",
                proto: !0,
                unsafe: !0,
                forced: d
            }, {
                slice: function(t, e) {
                    if (void 0 !== c && void 0 === e) return c.call(s(this), t);
                    var r = s(this).byteLength,
                        i = o(t, r),
                        n = o(void 0 === e ? r : e, r),
                        a = new(l(this, f))(u(n - i)),
                        d = new h(this),
                        p = new h(a),
                        v = 0;
                    while (i < n) p.setUint8(v++, d.getUint8(i++));
                    return a
                }
            })
        },
        ae7e: function(t, e, r) {
            var i = r("943d");
            t.exports = function(t, e) {
                var r = i(t);
                if (r % e) throw RangeError("Wrong offset");
                return r
            }
        },
        b42e: function(t, e, r) {
            "use strict";

            function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function n(t, e, r) {
                return e && i(t.prototype, e), r && i(t, r), t
            }
            r.d(e, "a", (function() {
                return n
            }))
        },
        b7b6: function(t, e, r) {
            var i = r("eb50"),
                n = r("a5f9");
            t.exports = function(t) {
                if (void 0 === t) return 0;
                var e = i(t),
                    r = n(e);
                if (e !== r) throw RangeError("Wrong length or index");
                return r
            }
        },
        c2bd: function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("20c7").left,
                a = i.aTypedArray,
                s = i.exportTypedArrayMethod;
            s("reduce", (function(t) {
                return n(a(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }))
        },
        caae: function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("ef22"),
                a = i.aTypedArray,
                s = i.exportTypedArrayMethod;
            s("lastIndexOf", (function(t) {
                return n.apply(a(this), arguments)
            }))
        },
        cd15: function(t, e, r) {
            var i = r("ef68"),
                n = Math.floor;
            t.exports = Number.isInteger || function(t) {
                return !i(t) && isFinite(t) && n(t) === t
            }
        },
        d0b9: function(t, e, r) {
            (function() {
                "use strict";
                var i = this,
                    n = !0,
                    a = i.THREE || n && r("551d");
                if (!a) throw new Error("MeshLine requires three.js");

                function s() {
                    a.BufferGeometry.call(this), this.type = "MeshLine", this.positions = [], this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [], this.counters = [], this._points = [], this._geom = null, this.widthCallback = null, this.matrixWorld = new a.Matrix4, Object.defineProperties(this, {
                        geometry: {
                            enumerable: !0,
                            get: function() {
                                return this
                            }
                        },
                        geom: {
                            enumerable: !0,
                            get: function() {
                                return this._geom
                            },
                            set: function(t) {
                                this.setGeometry(t, this.widthCallback)
                            }
                        },
                        points: {
                            enumerable: !0,
                            get: function() {
                                return this._points
                            },
                            set: function(t) {
                                this.setPoints(t, this.widthCallback)
                            }
                        }
                    })
                }

                function o(t, e) {
                    var r = new a.Matrix4,
                        i = new a.Ray,
                        n = new a.Sphere,
                        s = new a.Vector3,
                        o = this.geometry;
                    if (n.copy(o.boundingSphere), n.applyMatrix4(this.matrixWorld), !1 !== t.ray.intersectSphere(n, s)) {
                        r.getInverse(this.matrixWorld), i.copy(t.ray).applyMatrix4(r);
                        var u = new a.Vector3,
                            l = new a.Vector3,
                            f = new a.Vector3,
                            h = this instanceof a.LineSegments ? 2 : 1,
                            c = o.index,
                            d = o.attributes;
                        if (null !== c)
                            for (var p = c.array, v = d.position.array, y = d.width.array, g = 0, m = p.length - 1; g < m; g += h) {
                                var b = p[g],
                                    x = p[g + 1];
                                u.fromArray(v, 3 * b), l.fromArray(v, 3 * x);
                                var M = void 0 != y[Math.floor(g / 3)] ? y[Math.floor(g / 3)] : 1,
                                    T = t.params.Line.threshold + this.material.lineWidth * M / 2,
                                    w = T * T,
                                    A = i.distanceSqToSegment(u, l, s, f);
                                if (!(A > w)) {
                                    s.applyMatrix4(this.matrixWorld);
                                    var _ = t.ray.origin.distanceTo(s);
                                    _ < t.near || _ > t.far || (e.push({
                                        distance: _,
                                        point: f.clone().applyMatrix4(this.matrixWorld),
                                        index: g,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    }), g = m)
                                }
                            }
                    }
                }

                function u(t, e, r, i, n) {
                    var a;
                    if (t = t.subarray || t.slice ? t : t.buffer, r = r.subarray || r.slice ? r : r.buffer, t = e ? t.subarray ? t.subarray(e, n && e + n) : t.slice(e, n && e + n) : t, r.set) r.set(t, i);
                    else
                        for (a = 0; a < t.length; a++) r[a + i] = t[a];
                    return r
                }

                function l(t) {
                    a.ShaderMaterial.call(this, {
                        uniforms: Object.assign({}, a.UniformsLib.fog, {
                            lineWidth: {
                                value: 1
                            },
                            map: {
                                value: null
                            },
                            useMap: {
                                value: 0
                            },
                            alphaMap: {
                                value: null
                            },
                            useAlphaMap: {
                                value: 0
                            },
                            color: {
                                value: new a.Color(16777215)
                            },
                            opacity: {
                                value: 1
                            },
                            resolution: {
                                value: new a.Vector2(1, 1)
                            },
                            sizeAttenuation: {
                                value: 1
                            },
                            dashArray: {
                                value: 0
                            },
                            dashOffset: {
                                value: 0
                            },
                            dashRatio: {
                                value: .5
                            },
                            useDash: {
                                value: 0
                            },
                            visibility: {
                                value: 1
                            },
                            alphaTest: {
                                value: 0
                            },
                            repeat: {
                                value: new a.Vector2(1, 1)
                            }
                        }),
                        vertexShader: a.ShaderChunk.meshline_vert,
                        fragmentShader: a.ShaderChunk.meshline_frag
                    }), this.type = "MeshLineMaterial", Object.defineProperties(this, {
                        lineWidth: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.lineWidth.value
                            },
                            set: function(t) {
                                this.uniforms.lineWidth.value = t
                            }
                        },
                        map: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.map.value
                            },
                            set: function(t) {
                                this.uniforms.map.value = t
                            }
                        },
                        useMap: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.useMap.value
                            },
                            set: function(t) {
                                this.uniforms.useMap.value = t
                            }
                        },
                        alphaMap: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.alphaMap.value
                            },
                            set: function(t) {
                                this.uniforms.alphaMap.value = t
                            }
                        },
                        useAlphaMap: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.useAlphaMap.value
                            },
                            set: function(t) {
                                this.uniforms.useAlphaMap.value = t
                            }
                        },
                        color: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.color.value
                            },
                            set: function(t) {
                                this.uniforms.color.value = t
                            }
                        },
                        opacity: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.opacity.value
                            },
                            set: function(t) {
                                this.uniforms.opacity.value = t
                            }
                        },
                        resolution: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.resolution.value
                            },
                            set: function(t) {
                                this.uniforms.resolution.value.copy(t)
                            }
                        },
                        sizeAttenuation: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.sizeAttenuation.value
                            },
                            set: function(t) {
                                this.uniforms.sizeAttenuation.value = t
                            }
                        },
                        dashArray: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.dashArray.value
                            },
                            set: function(t) {
                                this.uniforms.dashArray.value = t, this.useDash = 0 !== t ? 1 : 0
                            }
                        },
                        dashOffset: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.dashOffset.value
                            },
                            set: function(t) {
                                this.uniforms.dashOffset.value = t
                            }
                        },
                        dashRatio: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.dashRatio.value
                            },
                            set: function(t) {
                                this.uniforms.dashRatio.value = t
                            }
                        },
                        useDash: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.useDash.value
                            },
                            set: function(t) {
                                this.uniforms.useDash.value = t
                            }
                        },
                        visibility: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.visibility.value
                            },
                            set: function(t) {
                                this.uniforms.visibility.value = t
                            }
                        },
                        alphaTest: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.alphaTest.value
                            },
                            set: function(t) {
                                this.uniforms.alphaTest.value = t
                            }
                        },
                        repeat: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.repeat.value
                            },
                            set: function(t) {
                                this.uniforms.repeat.value.copy(t)
                            }
                        }
                    }), this.setValues(t)
                }
                s.prototype = Object.create(a.BufferGeometry.prototype), s.prototype.constructor = s, s.prototype.isMeshLine = !0, s.prototype.setMatrixWorld = function(t) {
                    this.matrixWorld = t
                }, s.prototype.setGeometry = function(t, e) {
                    this._geometry = t, t instanceof a.Geometry ? this.setPoints(t.vertices, e) : t instanceof a.BufferGeometry ? this.setPoints(t.getAttribute("position").array, e) : this.setPoints(t, e)
                }, s.prototype.setPoints = function(t, e) {
                    if (t instanceof Float32Array || t instanceof Array) {
                        if (this._points = t, this.widthCallback = e, this.positions = [], this.counters = [], t.length && t[0] instanceof a.Vector3)
                            for (var r = 0; r < t.length; r++) {
                                var i = t[r],
                                    n = r / t.length;
                                this.positions.push(i.x, i.y, i.z), this.positions.push(i.x, i.y, i.z), this.counters.push(n), this.counters.push(n)
                            } else
                                for (r = 0; r < t.length; r += 3) {
                                    n = r / t.length;
                                    this.positions.push(t[r], t[r + 1], t[r + 2]), this.positions.push(t[r], t[r + 1], t[r + 2]), this.counters.push(n), this.counters.push(n)
                                }
                        this.process()
                    } else console.error("ERROR: The BufferArray of points is not instancied correctly.")
                }, s.prototype.raycast = o, s.prototype.compareV3 = function(t, e) {
                    var r = 6 * t,
                        i = 6 * e;
                    return this.positions[r] === this.positions[i] && this.positions[r + 1] === this.positions[i + 1] && this.positions[r + 2] === this.positions[i + 2]
                }, s.prototype.copyV3 = function(t) {
                    var e = 6 * t;
                    return [this.positions[e], this.positions[e + 1], this.positions[e + 2]]
                }, s.prototype.process = function() {
                    var t, e, r = this.positions.length / 6;
                    this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [], e = this.compareV3(0, r - 1) ? this.copyV3(r - 2) : this.copyV3(0), this.previous.push(e[0], e[1], e[2]), this.previous.push(e[0], e[1], e[2]);
                    for (var i = 0; i < r; i++) {
                        if (this.side.push(1), this.side.push(-1), t = this.widthCallback ? this.widthCallback(i / (r - 1)) : 1, this.width.push(t), this.width.push(t), this.uvs.push(i / (r - 1), 0), this.uvs.push(i / (r - 1), 1), i < r - 1) {
                            e = this.copyV3(i), this.previous.push(e[0], e[1], e[2]), this.previous.push(e[0], e[1], e[2]);
                            var n = 2 * i;
                            this.indices_array.push(n, n + 1, n + 2), this.indices_array.push(n + 2, n + 1, n + 3)
                        }
                        i > 0 && (e = this.copyV3(i), this.next.push(e[0], e[1], e[2]), this.next.push(e[0], e[1], e[2]))
                    }
                    e = this.compareV3(r - 1, 0) ? this.copyV3(1) : this.copyV3(r - 1), this.next.push(e[0], e[1], e[2]), this.next.push(e[0], e[1], e[2]), this._attributes && this._attributes.position.count === this.positions.length ? (this._attributes.position.copyArray(new Float32Array(this.positions)), this._attributes.position.needsUpdate = !0, this._attributes.previous.copyArray(new Float32Array(this.previous)), this._attributes.previous.needsUpdate = !0, this._attributes.next.copyArray(new Float32Array(this.next)), this._attributes.next.needsUpdate = !0, this._attributes.side.copyArray(new Float32Array(this.side)), this._attributes.side.needsUpdate = !0, this._attributes.width.copyArray(new Float32Array(this.width)), this._attributes.width.needsUpdate = !0, this._attributes.uv.copyArray(new Float32Array(this.uvs)), this._attributes.uv.needsUpdate = !0, this._attributes.index.copyArray(new Uint16Array(this.indices_array)), this._attributes.index.needsUpdate = !0) : this._attributes = {
                        position: new a.BufferAttribute(new Float32Array(this.positions), 3),
                        previous: new a.BufferAttribute(new Float32Array(this.previous), 3),
                        next: new a.BufferAttribute(new Float32Array(this.next), 3),
                        side: new a.BufferAttribute(new Float32Array(this.side), 1),
                        width: new a.BufferAttribute(new Float32Array(this.width), 1),
                        uv: new a.BufferAttribute(new Float32Array(this.uvs), 2),
                        index: new a.BufferAttribute(new Uint16Array(this.indices_array), 1),
                        counters: new a.BufferAttribute(new Float32Array(this.counters), 1)
                    }, this.setAttribute("position", this._attributes.position), this.setAttribute("previous", this._attributes.previous), this.setAttribute("next", this._attributes.next), this.setAttribute("side", this._attributes.side), this.setAttribute("width", this._attributes.width), this.setAttribute("uv", this._attributes.uv), this.setAttribute("counters", this._attributes.counters), this.setIndex(this._attributes.index), this.computeBoundingSphere(), this.computeBoundingBox()
                }, s.prototype.advance = function(t) {
                    var e = this._attributes.position.array,
                        r = this._attributes.previous.array,
                        i = this._attributes.next.array,
                        n = e.length;
                    u(e, 0, r, 0, n), u(e, 6, e, 0, n - 6), e[n - 6] = t.x, e[n - 5] = t.y, e[n - 4] = t.z, e[n - 3] = t.x, e[n - 2] = t.y, e[n - 1] = t.z, u(e, 6, i, 0, n - 6), i[n - 6] = t.x, i[n - 5] = t.y, i[n - 4] = t.z, i[n - 3] = t.x, i[n - 2] = t.y, i[n - 1] = t.z, this._attributes.position.needsUpdate = !0, this._attributes.previous.needsUpdate = !0, this._attributes.next.needsUpdate = !0
                }, a.ShaderChunk["meshline_vert"] = ["", a.ShaderChunk.logdepthbuf_pars_vertex, a.ShaderChunk.fog_pars_vertex, "", "attribute vec3 previous;", "attribute vec3 next;", "attribute float side;", "attribute float width;", "attribute float counters;", "", "uniform vec2 resolution;", "uniform float lineWidth;", "uniform vec3 color;", "uniform float opacity;", "uniform float sizeAttenuation;", "", "varying vec2 vUV;", "varying vec4 vColor;", "varying float vCounters;", "", "vec2 fix( vec4 i, float aspect ) {", "", "    vec2 res = i.xy / i.w;", "    res.x *= aspect;", "\t vCounters = counters;", "    return res;", "", "}", "", "void main() {", "", "    float aspect = resolution.x / resolution.y;", "", "    vColor = vec4( color, opacity );", "    vUV = uv;", "", "    mat4 m = projectionMatrix * modelViewMatrix;", "    vec4 finalPosition = m * vec4( position, 1.0 );", "    vec4 prevPos = m * vec4( previous, 1.0 );", "    vec4 nextPos = m * vec4( next, 1.0 );", "", "    vec2 currentP = fix( finalPosition, aspect );", "    vec2 prevP = fix( prevPos, aspect );", "    vec2 nextP = fix( nextPos, aspect );", "", "    float w = lineWidth * width;", "", "    vec2 dir;", "    if( nextP == currentP ) dir = normalize( currentP - prevP );", "    else if( prevP == currentP ) dir = normalize( nextP - currentP );", "    else {", "        vec2 dir1 = normalize( currentP - prevP );", "        vec2 dir2 = normalize( nextP - currentP );", "        dir = normalize( dir1 + dir2 );", "", "        vec2 perp = vec2( -dir1.y, dir1.x );", "        vec2 miter = vec2( -dir.y, dir.x );", "        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );", "", "    }", "", "    //vec2 normal = ( cross( vec3( dir, 0. ), vec3( 0., 0., 1. ) ) ).xy;", "    vec4 normal = vec4( -dir.y, dir.x, 0., 1. );", "    normal.xy *= .5 * w;", "    normal *= projectionMatrix;", "    if( sizeAttenuation == 0. ) {", "        normal.xy *= finalPosition.w;", "        normal.xy /= ( vec4( resolution, 0., 1. ) * projectionMatrix ).xy;", "    }", "", "    finalPosition.xy += normal.xy * side;", "", "    gl_Position = finalPosition;", "", a.ShaderChunk.logdepthbuf_vertex, a.ShaderChunk.fog_vertex && "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", a.ShaderChunk.fog_vertex, "}"].join("\n"), a.ShaderChunk["meshline_frag"] = ["", a.ShaderChunk.fog_pars_fragment, a.ShaderChunk.logdepthbuf_pars_fragment, "", "uniform sampler2D map;", "uniform sampler2D alphaMap;", "uniform float useMap;", "uniform float useAlphaMap;", "uniform float useDash;", "uniform float dashArray;", "uniform float dashOffset;", "uniform float dashRatio;", "uniform float visibility;", "uniform float alphaTest;", "uniform vec2 repeat;", "", "varying vec2 vUV;", "varying vec4 vColor;", "varying float vCounters;", "", "void main() {", "", a.ShaderChunk.logdepthbuf_fragment, "", "    vec4 c = vColor;", "    if( useMap == 1. ) c *= texture2D( map, vUV * repeat );", "    if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;", "    if( c.a < alphaTest ) discard;", "    if( useDash == 1. ){", "        c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));", "    }", "    gl_FragColor = c;", "    gl_FragColor.a *= step(vCounters, visibility);", "", a.ShaderChunk.fog_fragment, "}"].join("\n"), l.prototype = Object.create(a.ShaderMaterial.prototype), l.prototype.constructor = l, l.prototype.isMeshLineMaterial = !0, l.prototype.copy = function(t) {
                    return a.ShaderMaterial.prototype.copy.call(this, t), this.lineWidth = t.lineWidth, this.map = t.map, this.useMap = t.useMap, this.alphaMap = t.alphaMap, this.useAlphaMap = t.useAlphaMap, this.color.copy(t.color), this.opacity = t.opacity, this.resolution.copy(t.resolution), this.sizeAttenuation = t.sizeAttenuation, this.dashArray.copy(t.dashArray), this.dashOffset.copy(t.dashOffset), this.dashRatio.copy(t.dashRatio), this.useDash = t.useDash, this.visibility = t.visibility, this.alphaTest = t.alphaTest, this.repeat.copy(t.repeat), this
                }, t.exports && (e = t.exports = {
                    MeshLine: s,
                    MeshLineMaterial: l,
                    MeshLineRaycast: o
                }), e.MeshLine = s, e.MeshLineMaterial = l, e.MeshLineRaycast = o
            }).call(this)
        },
        d916: function(t, e, r) {
            ! function(e, i) {
                t.exports = i(r("f1d6"))
            }(0, (function(t) {
                "use strict";

                function e(t) {
                    return t && "object" == typeof t && "default" in t ? t : {
                        default: t
                    }
                }
                var r = e(t),
                    i = {
                        name: "zh-cn",
                        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                        ordinal: function(t, e) {
                            switch (e) {
                                case "W":
                                    return t + "周";
                                default:
                                    return t + "日"
                            }
                        },
                        weekStart: 1,
                        yearStart: 4,
                        formats: {
                            LT: "HH:mm",
                            LTS: "HH:mm:ss",
                            L: "YYYY/MM/DD",
                            LL: "YYYY年M月D日",
                            LLL: "YYYY年M月D日Ah点mm分",
                            LLLL: "YYYY年M月D日ddddAh点mm分",
                            l: "YYYY/M/D",
                            ll: "YYYY年M月D日",
                            lll: "YYYY年M月D日 HH:mm",
                            llll: "YYYY年M月D日dddd HH:mm"
                        },
                        relativeTime: {
                            future: "%s内",
                            past: "%s前",
                            s: "几秒",
                            m: "1 分钟",
                            mm: "%d 分钟",
                            h: "1 小时",
                            hh: "%d 小时",
                            d: "1 天",
                            dd: "%d 天",
                            M: "1 个月",
                            MM: "%d 个月",
                            y: "1 年",
                            yy: "%d 年"
                        },
                        meridiem: function(t, e) {
                            var r = 100 * t + e;
                            return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1100 ? "上午" : r < 1300 ? "中午" : r < 1800 ? "下午" : "晚上"
                        }
                    };
                return r.default.locale(i, null, !0), i
            }))
        },
        e203: function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("51d6"),
                a = i.aTypedArray,
                s = i.exportTypedArrayMethod;
            s("copyWithin", (function(t, e) {
                return n.call(a(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
            }))
        },
        e56a: function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("a5f9"),
                a = r("17c3"),
                s = r("8c1f"),
                o = i.aTypedArray,
                u = i.exportTypedArrayMethod;
            u("subarray", (function(t, e) {
                var r = o(this),
                    i = r.length,
                    u = a(t, i),
                    l = s(r);
                return new l(r.buffer, r.byteOffset + u * r.BYTES_PER_ELEMENT, n((void 0 === e ? i : a(e, i)) - u))
            }))
        },
        e5e4: function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("8c1f"),
                a = r("204f"),
                s = i.aTypedArray,
                o = i.exportTypedArrayMethod,
                u = [].slice,
                l = a((function() {
                    new Int8Array(1).slice()
                }));
            o("slice", (function(t, e) {
                var r = u.call(s(this), t, e),
                    i = n(this),
                    a = 0,
                    o = r.length,
                    l = new i(o);
                while (o > a) l[a] = r[a++];
                return l
            }), l)
        },
        e5ee: function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = i.aTypedArray,
                a = i.exportTypedArrayMethod,
                s = Math.floor;
            a("reverse", (function() {
                var t, e = this,
                    r = n(e).length,
                    i = s(r / 2),
                    a = 0;
                while (a < i) t = e[a], e[a++] = e[--r], e[r] = t;
                return e
            }))
        },
        ef22: function(t, e, r) {
            "use strict";
            var i = r("cc02"),
                n = r("eb50"),
                a = r("2566"),
                s = r("ed78"),
                o = Math.min,
                u = [].lastIndexOf,
                l = !!u && 1 / [1].lastIndexOf(1, -0) < 0,
                f = s("lastIndexOf"),
                h = l || !f;
            t.exports = h ? function(t) {
                if (l) return u.apply(this, arguments) || 0;
                var e = i(this),
                    r = a(e),
                    s = r - 1;
                for (arguments.length > 1 && (s = o(s, n(arguments[1]))), s < 0 && (s = r + s); s >= 0; s--)
                    if (s in e && e[s] === t) return s || 0;
                return -1
            } : u
        },
        f409: function(t, e, r) {
            var i = r("0932"),
                n = r("a83a"),
                a = r("2566"),
                s = r("2bb2"),
                o = r("b65e"),
                u = r("eb21"),
                l = r("fea4"),
                f = r("40d7").aTypedArrayConstructor;
            t.exports = function(t) {
                var e, r, h, c, d, p, v = i(this),
                    y = n(t),
                    g = arguments.length,
                    m = g > 1 ? arguments[1] : void 0,
                    b = void 0 !== m,
                    x = o(y);
                if (x && !u(x)) {
                    d = s(y, x), p = d.next, y = [];
                    while (!(c = p.call(d)).done) y.push(c.value)
                }
                for (b && g > 2 && (m = l(m, arguments[2], 2)), r = a(y), h = new(f(v))(r), e = 0; r > e; e++) h[e] = b ? m(y[e], e) : y[e];
                return h
            }
        },
        f40f: function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("479b").forEach,
                a = i.aTypedArray,
                s = i.exportTypedArrayMethod;
            s("forEach", (function(t) {
                n(a(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }))
        },
        fe9e: function(t, e, r) {
            "use strict";
            var i = r("40d7"),
                n = r("4bb3").indexOf,
                a = i.aTypedArray,
                s = i.exportTypedArrayMethod;
            s("indexOf", (function(t) {
                return n(a(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }))
        }
    }
]);