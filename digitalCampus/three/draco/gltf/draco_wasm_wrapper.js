var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(d, k, f) {
    d != Array.prototype && d != Object.prototype && (d[k] = f.value)
};
$jscomp.getGlobal = function(d) {
    return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(d, k, f, u) {
    if (k) {
        f = $jscomp.global;
        d = d.split(".");
        for (u = 0; u < d.length - 1; u++) {
            var h = d[u];
            h in f || (f[h] = {});
            f = f[h]
        }
        d = d[d.length - 1];
        u = f[d];
        k = k(u);
        k != u && null != k && $jscomp.defineProperty(f, d, {
            configurable: !0,
            writable: !0,
            value: k
        })
    }
};
$jscomp.polyfill("Math.imul", function(d) {
    return d ? d : function(d, f) {
        d = Number(d);
        f = Number(f);
        var k = d & 65535,
            h = f & 65535;
        return k * h + ((d >>> 16 & 65535) * h + k * (f >>> 16 & 65535) << 16 >>> 0) | 0
    }
}, "es6", "es3");
$jscomp.polyfill("Math.clz32", function(d) {
    return d ? d : function(d) {
        d = Number(d) >>> 0;
        if (0 === d) return 32;
        var f = 0;
        0 === (d & 4294901760) && (d <<= 16, f += 16);
        0 === (d & 4278190080) && (d <<= 8, f += 8);
        0 === (d & 4026531840) && (d <<= 4, f += 4);
        0 === (d & 3221225472) && (d <<= 2, f += 2);
        0 === (d & 2147483648) && f++;
        return f
    }
}, "es6", "es3");
$jscomp.polyfill("Math.trunc", function(d) {
    return d ? d : function(d) {
        d = Number(d);
        if (isNaN(d) || Infinity === d || -Infinity === d || 0 === d) return d;
        var f = Math.floor(Math.abs(d));
        return 0 > d ? -f : f
    }
}, "es6", "es3");
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.Symbol = function() {
    var d = 0;
    return function(k) {
        return $jscomp.SYMBOL_PREFIX + (k || "") + d++
    }
}();
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var d = $jscomp.global.Symbol.iterator;
    d || (d = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[d] && $jscomp.defineProperty(Array.prototype, d, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    });
    $jscomp.initSymbolIterator = function() {}
};
$jscomp.arrayIterator = function(d) {
    var k = 0;
    return $jscomp.iteratorPrototype(function() {
        return k < d.length ? {
            done: !1,
            value: d[k++]
        } : {
            done: !0
        }
    })
};
$jscomp.iteratorPrototype = function(d) {
    $jscomp.initSymbolIterator();
    d = {
        next: d
    };
    d[$jscomp.global.Symbol.iterator] = function() {
        return this
    };
    return d
};
$jscomp.makeIterator = function(d) {
    $jscomp.initSymbolIterator();
    var k = d[Symbol.iterator];
    return k ? k.call(d) : $jscomp.arrayIterator(d)
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill("Promise", function(d) {
    function k() {
        this.batch_ = null
    }

    function f(d) {
        return d instanceof h ? d : new h(function(r, f) {
            r(d)
        })
    }
    if (d && !$jscomp.FORCE_POLYFILL_PROMISE) return d;
    k.prototype.asyncExecute = function(d) {
        null == this.batch_ && (this.batch_ = [], this.asyncExecuteBatch_());
        this.batch_.push(d);
        return this
    };
    k.prototype.asyncExecuteBatch_ = function() {
        var d = this;
        this.asyncExecuteFunction(function() {
            d.executeBatch_()
        })
    };
    var u = $jscomp.global.setTimeout;
    k.prototype.asyncExecuteFunction = function(d) {
        u(d,
            0)
    };
    k.prototype.executeBatch_ = function() {
        for (; this.batch_ && this.batch_.length;) {
            var d = this.batch_;
            this.batch_ = [];
            for (var B = 0; B < d.length; ++B) {
                var f = d[B];
                delete d[B];
                try {
                    f()
                } catch (v) {
                    this.asyncThrow_(v)
                }
            }
        }
        this.batch_ = null
    };
    k.prototype.asyncThrow_ = function(d) {
        this.asyncExecuteFunction(function() {
            throw d;
        })
    };
    var h = function(d) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        var r = this.createResolveAndReject_();
        try {
            d(r.resolve, r.reject)
        } catch (Y) {
            r.reject(Y)
        }
    };
    h.prototype.createResolveAndReject_ =
        function() {
            function d(d) {
                return function(r) {
                    h || (h = !0, d.call(f, r))
                }
            }
            var f = this,
                h = !1;
            return {
                resolve: d(this.resolveTo_),
                reject: d(this.reject_)
            }
        };
    h.prototype.resolveTo_ = function(d) {
        if (d === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (d instanceof h) this.settleSameAsPromise_(d);
        else {
            a: switch (typeof d) {
                case "object":
                    var f = null != d;
                    break a;
                case "function":
                    f = !0;
                    break a;
                default:
                    f = !1
            }
            f ? this.resolveToNonPromiseObj_(d) : this.fulfill_(d)
        }
    };
    h.prototype.resolveToNonPromiseObj_ = function(d) {
        var f =
            void 0;
        try {
            f = d.then
        } catch (Y) {
            this.reject_(Y);
            return
        }
        "function" == typeof f ? this.settleSameAsThenable_(f, d) : this.fulfill_(d)
    };
    h.prototype.reject_ = function(d) {
        this.settle_(2, d)
    };
    h.prototype.fulfill_ = function(d) {
        this.settle_(1, d)
    };
    h.prototype.settle_ = function(d, f) {
        if (0 != this.state_) throw Error("Cannot settle(" + d + ", " + f | "): Promise already settled in state" + this.state_);
        this.state_ = d;
        this.result_ = f;
        this.executeOnSettledCallbacks_()
    };
    h.prototype.executeOnSettledCallbacks_ = function() {
        if (null != this.onSettledCallbacks_) {
            for (var d =
                    this.onSettledCallbacks_, f = 0; f < d.length; ++f) d[f].call(), d[f] = null;
            this.onSettledCallbacks_ = null
        }
    };
    var ha = new k;
    h.prototype.settleSameAsPromise_ = function(d) {
        var f = this.createResolveAndReject_();
        d.callWhenSettled_(f.resolve, f.reject)
    };
    h.prototype.settleSameAsThenable_ = function(d, f) {
        var h = this.createResolveAndReject_();
        try {
            d.call(f, h.resolve, h.reject)
        } catch (v) {
            h.reject(v)
        }
    };
    h.prototype.then = function(d, f) {
        function k(d, f) {
            return "function" == typeof d ? function(f) {
                try {
                    v(d(f))
                } catch (O) {
                    r(O)
                }
            } : f
        }
        var v, r, B = new h(function(d,
            f) {
            v = d;
            r = f
        });
        this.callWhenSettled_(k(d, v), k(f, r));
        return B
    };
    h.prototype.catch = function(d) {
        return this.then(void 0, d)
    };
    h.prototype.callWhenSettled_ = function(d, f) {
        function h() {
            switch (k.state_) {
                case 1:
                    d(k.result_);
                    break;
                case 2:
                    f(k.result_);
                    break;
                default:
                    throw Error("Unexpected state: " + k.state_);
            }
        }
        var k = this;
        null == this.onSettledCallbacks_ ? ha.asyncExecute(h) : this.onSettledCallbacks_.push(function() {
            ha.asyncExecute(h)
        })
    };
    h.resolve = f;
    h.reject = function(d) {
        return new h(function(f, h) {
            h(d)
        })
    };
    h.race = function(d) {
        return new h(function(h,
            k) {
            for (var v = $jscomp.makeIterator(d), r = v.next(); !r.done; r = v.next()) f(r.value).callWhenSettled_(h, k)
        })
    };
    h.all = function(d) {
        var k = $jscomp.makeIterator(d),
            r = k.next();
        return r.done ? f([]) : new h(function(d, h) {
            function v(f) {
                return function(h) {
                    u[f] = h;
                    B--;
                    0 == B && d(u)
                }
            }
            var u = [],
                B = 0;
            do u.push(void 0), B++, f(r.value).callWhenSettled_(v(u.length - 1), h), r = k.next(); while (!r.done)
        })
    };
    return h
}, "es6", "es3");
var DracoDecoderModule = function(d) {
    function k(a, c) {
        c || (c = 16);
        return Math.ceil(a / c) * c
    }

    function f(a, c) {
        a || O("Assertion failed: " + c)
    }

    function u(a, c) {
        if (0 === c || !a) return "";
        for (var b = 0, e, d = 0;;) {
            e = W[a + d >> 0];
            b |= e;
            if (0 == e && !c) break;
            d++;
            if (c && d == c) break
        }
        c || (c = d);
        e = "";
        if (128 > b) {
            for (; 0 < c;) b = String.fromCharCode.apply(String, W.subarray(a, a + Math.min(c, 1024))), e = e ? e + b : b, a += 1024, c -= 1024;
            return e
        }
        return h(W, a)
    }

    function h(a, c) {
        for (var b = c; a[b];) ++b;
        if (16 < b - c && a.subarray && Ia) return Ia.decode(a.subarray(c, b));
        for (b =
            "";;) {
            var e = a[c++];
            if (!e) return b;
            if (e & 128) {
                var d = a[c++] & 63;
                if (192 == (e & 224)) b += String.fromCharCode((e & 31) << 6 | d);
                else {
                    var f = a[c++] & 63;
                    if (224 == (e & 240)) e = (e & 15) << 12 | d << 6 | f;
                    else {
                        var g = a[c++] & 63;
                        if (240 == (e & 248)) e = (e & 7) << 18 | d << 12 | f << 6 | g;
                        else {
                            var h = a[c++] & 63;
                            if (248 == (e & 252)) e = (e & 3) << 24 | d << 18 | f << 12 | g << 6 | h;
                            else {
                                var k = a[c++] & 63;
                                e = (e & 1) << 30 | d << 24 | f << 18 | g << 12 | h << 6 | k
                            }
                        }
                    }
                    65536 > e ? b += String.fromCharCode(e) : (e -= 65536, b += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023))
                }
            } else b += String.fromCharCode(e)
        }
    }

    function ha(a, c) {
        0 <
            a % c && (a += c - a % c);
        return a
    }

    function r() {
        a.HEAP8 = ia = new Int8Array(D);
        a.HEAP16 = Ja = new Int16Array(D);
        a.HEAP32 = E = new Int32Array(D);
        a.HEAPU8 = W = new Uint8Array(D);
        a.HEAPU16 = new Uint16Array(D);
        a.HEAPU32 = new Uint32Array(D);
        a.HEAPF32 = new Float32Array(D);
        a.HEAPF64 = new Float64Array(D)
    }

    function B(e) {
        for (; 0 < e.length;) {
            var c = e.shift();
            if ("function" == typeof c) c();
            else {
                var b = c.func;
                "number" === typeof b ? void 0 === c.arg ? a.dynCall_v(b) : a.dynCall_vi(b, c.arg) : b(void 0 === c.arg ? null : c.arg)
            }
        }
    }

    function Y(a) {
        return String.prototype.startsWith ?
            a.startsWith("data:application/octet-stream;base64,") : 0 === a.indexOf("data:application/octet-stream;base64,")
    }

    function v() {
        return !!v.uncaught_exception
    }

    function la() {
        var e = y.last;
        if (!e) return (sa(0), 0) | 0;
        var c = y.infos[e],
            b = c.type;
        if (!b) return (sa(0), e) | 0;
        var p = Array.prototype.slice.call(arguments);
        a.___cxa_is_pointer_type(b);
        la.buffer || (la.buffer = Ka(4));
        E[la.buffer >> 2] = e;
        e = la.buffer;
        for (var d = 0; d < p.length; d++)
            if (p[d] && a.___cxa_can_catch(p[d], b, e)) return e = E[e >> 2], c.adjusted = e, (sa(p[d]), e) | 0;
        e = E[e >> 2];
        return (sa(b), e) | 0
    }

    function Z(e, c) {
        w.varargs = c;
        try {
            var b = w.get(),
                p = w.get(),
                d = w.get();
            e = 0;
            Z.buffers || (Z.buffers = [null, [],
                []
            ], Z.printChar = function(c, b) {
                var e = Z.buffers[c];
                f(e);
                0 === b || 10 === b ? ((1 === c ? a.print : a.printErr)(h(e, 0)), e.length = 0) : e.push(b)
            });
            for (c = 0; c < d; c++) {
                for (var g = E[p + 8 * c >> 2], k = E[p + (8 * c + 4) >> 2], l = 0; l < k; l++) Z.printChar(b, W[g + l]);
                e += k
            }
            return e
        } catch (ya) {
            return "undefined" !== typeof FS && ya instanceof FS.ErrnoError || O(ya), -ya.errno
        }
    }

    function ma(e, c) {
        ma.seen || (ma.seen = {});
        e in ma.seen || (a.dynCall_v(c),
            ma.seen[e] = 1)
    }

    function na(a) {
        this.name = "ExitStatus";
        this.message = "Program terminated with exit(" + a + ")";
        this.status = a
    }

    function wa(e) {
        function c() {
            if (!a.calledRun && (a.calledRun = !0, !oa)) {
                La || (La = !0, B(Ma));
                B(Na);
                if (a.onRuntimeInitialized) a.onRuntimeInitialized();
                if (a.postRun)
                    for ("function" == typeof a.postRun && (a.postRun = [a.postRun]); a.postRun.length;) Oa.unshift(a.postRun.shift());
                B(Oa)
            }
        }
        if (!(0 < ea)) {
            if (a.preRun)
                for ("function" == typeof a.preRun && (a.preRun = [a.preRun]); a.preRun.length;) Pa.unshift(a.preRun.shift());
            B(Pa);
            0 < ea || a.calledRun || (a.setStatus ? (a.setStatus("Running..."), setTimeout(function() {
                setTimeout(function() {
                    a.setStatus("")
                }, 1);
                c()
            }, 1)) : c())
        }
    }

    function O(e) {
        if (a.onAbort) a.onAbort(e);
        void 0 !== e ? (a.print(e), a.printErr(e), e = JSON.stringify(e)) : e = "";
        oa = !0;
        throw "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.";
    }

    function m() {}

    function t(a) {
        return (a || m).__cache__
    }

    function T(a, c) {
        var b = t(c),
            e = b[a];
        if (e) return e;
        e = Object.create((c || m).prototype);
        e.ptr = a;
        return b[a] = e
    }

    function U(a) {
        if ("string" === typeof a) {
            for (var c =
                    0, b = 0; b < a.length; ++b) {
                var e = a.charCodeAt(b);
                55296 <= e && 57343 >= e && (e = 65536 + ((e & 1023) << 10) | a.charCodeAt(++b) & 1023);
                127 >= e ? ++c : c = 2047 >= e ? c + 2 : 65535 >= e ? c + 3 : 2097151 >= e ? c + 4 : 67108863 >= e ? c + 5 : c + 6
            }
            c = Array(c + 1);
            b = 0;
            e = c.length;
            if (0 < e) {
                e = b + e - 1;
                for (var d = 0; d < a.length; ++d) {
                    var f = a.charCodeAt(d);
                    55296 <= f && 57343 >= f && (f = 65536 + ((f & 1023) << 10) | a.charCodeAt(++d) & 1023);
                    if (127 >= f) {
                        if (b >= e) break;
                        c[b++] = f
                    } else {
                        if (2047 >= f) {
                            if (b + 1 >= e) break;
                            c[b++] = 192 | f >> 6
                        } else {
                            if (65535 >= f) {
                                if (b + 2 >= e) break;
                                c[b++] = 224 | f >> 12
                            } else {
                                if (2097151 >= f) {
                                    if (b +
                                        3 >= e) break;
                                    c[b++] = 240 | f >> 18
                                } else {
                                    if (67108863 >= f) {
                                        if (b + 4 >= e) break;
                                        c[b++] = 248 | f >> 24
                                    } else {
                                        if (b + 5 >= e) break;
                                        c[b++] = 252 | f >> 30;
                                        c[b++] = 128 | f >> 24 & 63
                                    }
                                    c[b++] = 128 | f >> 18 & 63
                                }
                                c[b++] = 128 | f >> 12 & 63
                            }
                            c[b++] = 128 | f >> 6 & 63
                        }
                        c[b++] = 128 | f & 63
                    }
                }
                c[b] = 0
            }
            a = l.alloc(c, ia);
            l.copy(c, ia, a)
        }
        return a
    }

    function z() {
        throw "cannot construct a Status, no constructor in IDL";
    }

    function F() {
        this.ptr = Wa();
        t(F)[this.ptr] = this
    }

    function G() {
        this.ptr = Xa();
        t(G)[this.ptr] = this
    }

    function H() {
        this.ptr = Ya();
        t(H)[this.ptr] = this
    }

    function I() {
        this.ptr = Za();
        t(I)[this.ptr] = this
    }

    function J() {
        this.ptr = $a();
        t(J)[this.ptr] = this
    }

    function n() {
        this.ptr = ab();
        t(n)[this.ptr] = this
    }

    function P() {
        this.ptr = bb();
        t(P)[this.ptr] = this
    }

    function x() {
        this.ptr = cb();
        t(x)[this.ptr] = this
    }

    function K() {
        this.ptr = db();
        t(K)[this.ptr] = this
    }

    function q() {
        this.ptr = eb();
        t(q)[this.ptr] = this
    }

    function L() {
        this.ptr = fb();
        t(L)[this.ptr] = this
    }

    function M() {
        this.ptr = gb();
        t(M)[this.ptr] = this
    }

    function V() {
        this.ptr = hb();
        t(V)[this.ptr] = this
    }

    function Q() {
        this.ptr = ib();
        t(Q)[this.ptr] = this
    }

    function g() {
        this.ptr =
            jb();
        t(g)[this.ptr] = this
    }

    function C() {
        this.ptr = kb();
        t(C)[this.ptr] = this
    }

    function X() {
        throw "cannot construct a VoidPtr, no constructor in IDL";
    }

    function N() {
        this.ptr = lb();
        t(N)[this.ptr] = this
    }

    function R() {
        this.ptr = mb();
        t(R)[this.ptr] = this
    }
    d = d || {};
    var a = "undefined" !== typeof d ? d : {},
        Qa = !1,
        Ra = !1;
    a.onRuntimeInitialized = function() {
        Qa = !0;
        if (Ra && "function" === typeof a.onModuleLoaded) a.onModuleLoaded(a)
    };
    a.onModuleParsed = function() {
        Ra = !0;
        if (Qa && "function" === typeof a.onModuleLoaded) a.onModuleLoaded(a)
    };
    a.isVersionSupported =
        function(a) {
            if ("string" !== typeof a) return !1;
            a = a.split(".");
            return 2 > a.length || 3 < a.length ? !1 : 1 == a[0] && 0 <= a[1] && 3 >= a[1] ? !0 : 0 != a[0] || 10 < a[1] ? !1 : !0
        };
    var pa = {},
        aa;
    for (aa in a) a.hasOwnProperty(aa) && (pa[aa] = a[aa]);
    a.arguments = [];
    a.thisProgram = "./this.program";
    a.quit = function(a, c) {
        throw c;
    };
    a.preRun = [];
    a.postRun = [];
    var ja = !1,
        fa = !1,
        qa = !1,
        za = !1;
    if (a.ENVIRONMENT)
        if ("WEB" === a.ENVIRONMENT) ja = !0;
        else if ("WORKER" === a.ENVIRONMENT) fa = !0;
    else if ("NODE" === a.ENVIRONMENT) qa = !0;
    else if ("SHELL" === a.ENVIRONMENT) za = !0;
    else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");
    else ja = "object" === typeof window, fa = "function" === typeof importScripts, qa = "object" === typeof process && "function" === typeof require && !ja && !fa, za = !ja && !qa && !fa;
    if (qa) {
        var Aa, Ba;
        a.read = function(a, c) {
            Aa || (Aa = require("fs"));
            Ba || (Ba = require("path"));
            a = Ba.normalize(a);
            a = Aa.readFileSync(a);
            return c ? a : a.toString()
        };
        a.readBinary = function(e) {
            e = a.read(e, !0);
            e.buffer || (e = new Uint8Array(e));
            f(e.buffer);
            return e
        };
        1 < process.argv.length && (a.thisProgram = process.argv[1].replace(/\\/g, "/"));
        a.arguments = process.argv.slice(2);
        process.on("uncaughtException", function(a) {
            if (!(a instanceof na)) throw a;
        });
        process.on("unhandledRejection", function(a, c) {
            process.exit(1)
        });
        a.inspect = function() {
            return "[Emscripten Module object]"
        }
    } else if (za) "undefined" != typeof read && (a.read = function(a) {
            return read(a)
        }), a.readBinary = function(a) {
            if ("function" === typeof readbuffer) return new Uint8Array(readbuffer(a));
            a = read(a, "binary");
            f("object" === typeof a);
            return a
        }, "undefined" != typeof scriptArgs ? a.arguments = scriptArgs : "undefined" != typeof arguments &&
        (a.arguments = arguments), "function" === typeof quit && (a.quit = function(a, c) {
            quit(a)
        });
    else if (ja || fa) a.read = function(a) {
        var c = new XMLHttpRequest;
        c.open("GET", a, !1);
        c.send(null);
        return c.responseText
    }, fa && (a.readBinary = function(a) {
        var c = new XMLHttpRequest;
        c.open("GET", a, !1);
        c.responseType = "arraybuffer";
        c.send(null);
        return new Uint8Array(c.response)
    }), a.readAsync = function(a, c, b) {
        var e = new XMLHttpRequest;
        e.open("GET", a, !0);
        e.responseType = "arraybuffer";
        e.onload = function() {
            200 == e.status || 0 == e.status && e.response ?
                c(e.response) : b()
        };
        e.onerror = b;
        e.send(null)
    }, a.setWindowTitle = function(a) {
        document.title = a
    };
    a.print = "undefined" !== typeof console ? console.log.bind(console) : "undefined" !== typeof print ? print : null;
    a.printErr = "undefined" !== typeof printErr ? printErr : "undefined" !== typeof console && console.warn.bind(console) || a.print;
    a.print = a.print;
    a.printErr = a.printErr;
    for (aa in pa) pa.hasOwnProperty(aa) && (a[aa] = pa[aa]);
    pa = void 0;
    var oa = 0,
        Ia = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
    "undefined" !== typeof TextDecoder &&
        new TextDecoder("utf-16le");
    var ia, W, Ja, E, ba, Ca, ta, ua, Da, ka;
    var Ea = ba = Ca = ta = ua = Da = ka = 0;
    var Sa = !1;
    a.reallocBuffer || (a.reallocBuffer = function(a) {
        try {
            if (ArrayBuffer.transfer) var c = ArrayBuffer.transfer(D, a);
            else {
                var b = ia;
                c = new ArrayBuffer(a);
                (new Int8Array(c)).set(b)
            }
        } catch (p) {
            return !1
        }
        return nb(c) ? c : !1
    });
    try {
        var Ta = Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get);
        Ta(new ArrayBuffer(4))
    } catch (e) {
        Ta = function(a) {
            return a.byteLength
        }
    }
    var Fa = a.TOTAL_STACK ||
        5242880,
        A = a.TOTAL_MEMORY || 16777216;
    A < Fa && a.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + A + "! (TOTAL_STACK=" + Fa + ")");
    if (a.buffer) var D = a.buffer;
    else "object" === typeof WebAssembly && "function" === typeof WebAssembly.Memory ? (a.wasmMemory = new WebAssembly.Memory({
        initial: A / 65536
    }), D = a.wasmMemory.buffer) : D = new ArrayBuffer(A), a.buffer = D;
    r();
    E[0] = 1668509029;
    Ja[1] = 25459;
    if (115 !== W[2] || 99 !== W[3]) throw "Runtime error: expected the system to be little-endian!";
    var Pa = [],
        Ma = [],
        Na = [],
        ob = [],
        Oa = [],
        La = !1,
        ea = 0,
        Ga = null,
        ra = null;
    a.preloadedImages = {};
    a.preloadedAudios = {};
    (function() {
        function e() {
            try {
                if (a.wasmBinary) return new Uint8Array(a.wasmBinary);
                if (a.readBinary) return a.readBinary(f);
                throw "on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";
            } catch (Va) {
                O(Va)
            }
        }

        function c() {
            return a.wasmBinary || !ja && !fa || "function" !== typeof fetch ? new Promise(function(a, c) {
                a(e())
            }) : fetch(f, {
                credentials: "same-origin"
            }).then(function(a) {
                if (!a.ok) throw "failed to load wasm binary file at '" +
                    f + "'";
                return a.arrayBuffer()
            }).catch(function() {
                return e()
            })
        }

        function b(b, e, d) {
            function p(c, b) {
                k = c.exports;
                k.memory && (c = k.memory, b = a.buffer, c.byteLength < b.byteLength && a.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here"), b = new Int8Array(b), (new Int8Array(c)).set(b), a.buffer = D = c, r());
                a.asm = k;
                a.usingWasm = !0;
                ea--;
                a.monitorRunDependencies && a.monitorRunDependencies(ea);
                0 == ea && (null !== Ga && (clearInterval(Ga), Ga = null), ra && (c = ra, ra = null, c()))
            }

            function g(a) {
                p(a.instance, a.module)
            }

            function S(b) {
                c().then(function(a) {
                    return WebAssembly.instantiate(a, h)
                }).then(b).catch(function(c) {
                    a.printErr("failed to asynchronously prepare wasm: " + c);
                    O(c)
                })
            }
            if ("object" !== typeof WebAssembly) return a.printErr("no native wasm support detected"), !1;
            if (!(a.wasmMemory instanceof WebAssembly.Memory)) return a.printErr("no native wasm Memory in use"), !1;
            e.memory = a.wasmMemory;
            h.global = {
                NaN: NaN,
                Infinity: Infinity
            };
            h["global.Math"] = Math;
            h.env = e;
            ea++;
            a.monitorRunDependencies &&
                a.monitorRunDependencies(ea);
            if (a.instantiateWasm) try {
                return a.instantiateWasm(h, p)
            } catch (pb) {
                return a.printErr("Module.instantiateWasm callback failed with error: " + pb), !1
            }
            a.wasmBinary || "function" !== typeof WebAssembly.instantiateStreaming || Y(f) || "function" !== typeof fetch ? S(g) : WebAssembly.instantiateStreaming(fetch(f, {
                credentials: "same-origin"
            }), h).then(g).catch(function(c) {
                a.printErr("wasm streaming compile failed: " + c);
                a.printErr("falling back to ArrayBuffer instantiation");
                S(g)
            });
            return {}
        }
        var d =
            "draco_decoder.wast",
            f = "draco_decoder.wasm",
            g = "draco_decoder.temp.asm.js";
        "function" === typeof a.locateFile && (Y(d) || (d = a.locateFile(d)), Y(f) || (f = a.locateFile(f)), Y(g) || (g = a.locateFile(g)));
        var h = {
                global: null,
                env: null,
                asm2wasm: {
                    "f64-rem": function(a, c) {
                        return a % c
                    },
                    "debugger": function() {
                        debugger
                    }
                },
                parent: a
            },
            k = null;
        a.asmPreload = a.asm;
        var l = a.reallocBuffer;
        a.reallocBuffer = function(c) {
            if ("asmjs" === m) var b = l(c);
            else a: {
                c = ha(c, a.usingWasm ? 65536 : 16777216);
                var e = a.buffer.byteLength;
                if (a.usingWasm) try {
                    b = -1 !==
                        a.wasmMemory.grow((c - e) / 65536) ? a.buffer = a.wasmMemory.buffer : null;
                    break a
                } catch (ud) {
                    b = null;
                    break a
                }
                b = void 0
            }
            return b
        };
        var m = "";
        a.asm = function(c, e, d) {
            if (!e.table) {
                var p = a.wasmTableSize;
                void 0 === p && (p = 1024);
                var f = a.wasmMaxTableSize;
                e.table = "object" === typeof WebAssembly && "function" === typeof WebAssembly.Table ? void 0 !== f ? new WebAssembly.Table({
                    initial: p,
                    maximum: f,
                    element: "anyfunc"
                }) : new WebAssembly.Table({
                    initial: p,
                    element: "anyfunc"
                }) : Array(p);
                a.wasmTable = e.table
            }
            e.memoryBase || (e.memoryBase = a.STATIC_BASE);
            e.tableBase || (e.tableBase = 0);
            (c = b(c, e, d)) || O("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");
            return c
        }
    })();
    Ea = 1024;
    ba = Ea + 14480;
    Ma.push();
    a.STATIC_BASE = Ea;
    a.STATIC_BUMP = 14480;
    var qb = ba;
    ba += 16;
    var y = {
            last: 0,
            caught: [],
            infos: {},
            deAdjust: function(a) {
                if (!a || y.infos[a]) return a;
                for (var c in y.infos)
                    if (y.infos[c].adjusted === a) return c;
                return a
            },
            addRef: function(a) {
                a && y.infos[a].refcount++
            },
            decRef: function(e) {
                if (e) {
                    var c = y.infos[e];
                    f(0 < c.refcount);
                    c.refcount--;
                    0 !== c.refcount || c.rethrown || (c.destructor && a.dynCall_vi(c.destructor, e), delete y.infos[e], ___cxa_free_exception(e))
                }
            },
            clearRef: function(a) {
                a && (y.infos[a].refcount = 0)
            }
        },
        w = {
            varargs: 0,
            get: function(a) {
                w.varargs += 4;
                return E[w.varargs - 4 >> 2]
            },
            getStr: function() {
                return u(w.get())
            },
            get64: function() {
                var a = w.get(),
                    c = w.get();
                0 <= a ? f(0 === c) : f(-1 === c);
                return a
            },
            getZero: function() {
                f(0 === w.get())
            }
        },
        va = {},
        Ha = 1;
    ka = function(a) {
        f(!Sa);
        var c = ba;
        ba = ba +
            a + 15 & -16;
        return c
    }(4);
    Ca = ta = k(ba);
    ua = Ca + Fa;
    Da = k(ua);
    E[ka >> 2] = Da;
    Sa = !0;
    a.wasmTableSize = 468;
    a.wasmMaxTableSize = 468;
    a.asmGlobalArg = {};
    a.asmLibraryArg = {
        abort: O,
        assert: f,
        enlargeMemory: function() {
            var e = a.usingWasm ? 65536 : 16777216,
                c = 2147483648 - e;
            if (E[ka >> 2] > c) return !1;
            var b = A;
            for (A = Math.max(A, 16777216); A < E[ka >> 2];) A = 536870912 >= A ? ha(2 * A, e) : Math.min(ha((3 * A + 2147483648) / 4, e), c);
            e = a.reallocBuffer(A);
            if (!e || e.byteLength != A) return A = b, !1;
            a.buffer = D = e;
            r();
            return !0
        },
        getTotalMemory: function() {
            return A
        },
        abortOnCannotGrowMemory: function() {
            O("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " +
                A + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")
        },
        invoke_ii: function(e, c) {
            try {
                return a.dynCall_ii(e, c)
            } catch (b) {
                if ("number" !== typeof b && "longjmp" !== b) throw b;
                a.setThrew(1, 0)
            }
        },
        invoke_iii: function(e, c, b) {
            try {
                return a.dynCall_iii(e, c, b)
            } catch (p) {
                if ("number" !== typeof p && "longjmp" !== p) throw p;
                a.setThrew(1, 0)
            }
        },
        invoke_iiii: function(e, c, b, d) {
            try {
                return a.dynCall_iiii(e,
                    c, b, d)
            } catch (S) {
                if ("number" !== typeof S && "longjmp" !== S) throw S;
                a.setThrew(1, 0)
            }
        },
        invoke_iiiiiii: function(e, c, b, d, f, g, h) {
            try {
                return a.dynCall_iiiiiii(e, c, b, d, f, g, h)
            } catch (da) {
                if ("number" !== typeof da && "longjmp" !== da) throw da;
                a.setThrew(1, 0)
            }
        },
        invoke_v: function(e) {
            try {
                a.dynCall_v(e)
            } catch (c) {
                if ("number" !== typeof c && "longjmp" !== c) throw c;
                a.setThrew(1, 0)
            }
        },
        invoke_vi: function(e, c) {
            try {
                a.dynCall_vi(e, c)
            } catch (b) {
                if ("number" !== typeof b && "longjmp" !== b) throw b;
                a.setThrew(1, 0)
            }
        },
        invoke_vii: function(e, c, b) {
            try {
                a.dynCall_vii(e,
                    c, b)
            } catch (p) {
                if ("number" !== typeof p && "longjmp" !== p) throw p;
                a.setThrew(1, 0)
            }
        },
        invoke_viii: function(e, c, b, d) {
            try {
                a.dynCall_viii(e, c, b, d)
            } catch (S) {
                if ("number" !== typeof S && "longjmp" !== S) throw S;
                a.setThrew(1, 0)
            }
        },
        invoke_viiii: function(e, c, b, d, f) {
            try {
                a.dynCall_viiii(e, c, b, d, f)
            } catch (xa) {
                if ("number" !== typeof xa && "longjmp" !== xa) throw xa;
                a.setThrew(1, 0)
            }
        },
        invoke_viiiii: function(e, c, b, d, f, g) {
            try {
                a.dynCall_viiiii(e, c, b, d, f, g)
            } catch (ca) {
                if ("number" !== typeof ca && "longjmp" !== ca) throw ca;
                a.setThrew(1, 0)
            }
        },
        invoke_viiiiii: function(e,
            c, b, d, f, g, h) {
            try {
                a.dynCall_viiiiii(e, c, b, d, f, g, h)
            } catch (da) {
                if ("number" !== typeof da && "longjmp" !== da) throw da;
                a.setThrew(1, 0)
            }
        },
        __ZSt18uncaught_exceptionv: v,
        ___cxa_allocate_exception: function(a) {
            return Ka(a)
        },
        ___cxa_begin_catch: function(a) {
            var c = y.infos[a];
            c && !c.caught && (c.caught = !0, v.uncaught_exception--);
            c && (c.rethrown = !1);
            y.caught.push(a);
            y.addRef(y.deAdjust(a));
            return a
        },
        ___cxa_find_matching_catch: la,
        ___cxa_pure_virtual: function() {
            oa = !0;
            throw "Pure virtual function called!";
        },
        ___cxa_throw: function(a,
            c, b) {
            y.infos[a] = {
                ptr: a,
                adjusted: a,
                type: c,
                destructor: b,
                refcount: 0,
                caught: !1,
                rethrown: !1
            };
            y.last = a;
            "uncaught_exception" in v ? v.uncaught_exception++ : v.uncaught_exception = 1;
            throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
        },
        ___gxx_personality_v0: function() {},
        ___resumeException: function(a) {
            y.last || (y.last = a);
            throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
        },
        ___setErrNo: function(d) {
            a.___errno_location && (E[a.___errno_location() >> 2] = d);
            return d
        },
        ___syscall140: function(a, c) {
            w.varargs = c;
            try {
                var b = w.getStreamFromFD();
                w.get();
                var d = w.get(),
                    e = w.get(),
                    f = w.get();
                FS.llseek(b, d, f);
                E[e >> 2] = b.position;
                b.getdents && 0 === d && 0 === f && (b.getdents = null);
                return 0
            } catch (ca) {
                return "undefined" !== typeof FS && ca instanceof FS.ErrnoError || O(ca), -ca.errno
            }
        },
        ___syscall146: Z,
        ___syscall6: function(a, c) {
            w.varargs = c;
            try {
                var b = w.getStreamFromFD();
                FS.close(b);
                return 0
            } catch (p) {
                return "undefined" !==
                    typeof FS && p instanceof FS.ErrnoError || O(p), -p.errno
            }
        },
        _abort: function() {
            a.abort()
        },
        _emscripten_memcpy_big: function(a, c, b) {
            W.set(W.subarray(c, c + b), a);
            return a
        },
        _llvm_trap: function() {
            O("trap!")
        },
        _pthread_getspecific: function(a) {
            return va[a] || 0
        },
        _pthread_key_create: function(a, c) {
            if (0 == a) return 22;
            E[a >> 2] = Ha;
            va[Ha] = 0;
            Ha++;
            return 0
        },
        _pthread_once: ma,
        _pthread_setspecific: function(a, c) {
            if (!(a in va)) return 22;
            va[a] = c;
            return 0
        },
        flush_NO_FILESYSTEM: function() {
            var d = a._fflush;
            d && d(0);
            if (d = Z.printChar) {
                var c =
                    Z.buffers;
                c[1].length && d(1, 10);
                c[2].length && d(2, 10)
            }
        },
        DYNAMICTOP_PTR: ka,
        tempDoublePtr: qb,
        ABORT: oa,
        STACKTOP: ta,
        STACK_MAX: ua
    };
    var Ua = a.asm(a.asmGlobalArg, a.asmLibraryArg, D);
    a.asm = Ua;
    a.___cxa_can_catch = function() {
        return a.asm.___cxa_can_catch.apply(null, arguments)
    };
    a.___cxa_is_pointer_type = function() {
        return a.asm.___cxa_is_pointer_type.apply(null, arguments)
    };
    var $a = a._emscripten_bind_AttributeOctahedronTransform_AttributeOctahedronTransform_0 = function() {
            return a.asm._emscripten_bind_AttributeOctahedronTransform_AttributeOctahedronTransform_0.apply(null,
                arguments)
        },
        rb = a._emscripten_bind_AttributeOctahedronTransform_InitFromAttribute_1 = function() {
            return a.asm._emscripten_bind_AttributeOctahedronTransform_InitFromAttribute_1.apply(null, arguments)
        },
        sb = a._emscripten_bind_AttributeOctahedronTransform___destroy___0 = function() {
            return a.asm._emscripten_bind_AttributeOctahedronTransform___destroy___0.apply(null, arguments)
        },
        tb = a._emscripten_bind_AttributeOctahedronTransform_quantization_bits_0 = function() {
            return a.asm._emscripten_bind_AttributeOctahedronTransform_quantization_bits_0.apply(null,
                arguments)
        },
        cb = a._emscripten_bind_AttributeQuantizationTransform_AttributeQuantizationTransform_0 = function() {
            return a.asm._emscripten_bind_AttributeQuantizationTransform_AttributeQuantizationTransform_0.apply(null, arguments)
        },
        ub = a._emscripten_bind_AttributeQuantizationTransform_InitFromAttribute_1 = function() {
            return a.asm._emscripten_bind_AttributeQuantizationTransform_InitFromAttribute_1.apply(null, arguments)
        },
        vb = a._emscripten_bind_AttributeQuantizationTransform___destroy___0 = function() {
            return a.asm._emscripten_bind_AttributeQuantizationTransform___destroy___0.apply(null,
                arguments)
        },
        wb = a._emscripten_bind_AttributeQuantizationTransform_min_value_1 = function() {
            return a.asm._emscripten_bind_AttributeQuantizationTransform_min_value_1.apply(null, arguments)
        },
        xb = a._emscripten_bind_AttributeQuantizationTransform_quantization_bits_0 = function() {
            return a.asm._emscripten_bind_AttributeQuantizationTransform_quantization_bits_0.apply(null, arguments)
        },
        yb = a._emscripten_bind_AttributeQuantizationTransform_range_0 = function() {
            return a.asm._emscripten_bind_AttributeQuantizationTransform_range_0.apply(null,
                arguments)
        },
        bb = a._emscripten_bind_AttributeTransformData_AttributeTransformData_0 = function() {
            return a.asm._emscripten_bind_AttributeTransformData_AttributeTransformData_0.apply(null, arguments)
        },
        zb = a._emscripten_bind_AttributeTransformData___destroy___0 = function() {
            return a.asm._emscripten_bind_AttributeTransformData___destroy___0.apply(null, arguments)
        },
        Ab = a._emscripten_bind_AttributeTransformData_transform_type_0 = function() {
            return a.asm._emscripten_bind_AttributeTransformData_transform_type_0.apply(null,
                arguments)
        },
        ib = a._emscripten_bind_DecoderBuffer_DecoderBuffer_0 = function() {
            return a.asm._emscripten_bind_DecoderBuffer_DecoderBuffer_0.apply(null, arguments)
        },
        Bb = a._emscripten_bind_DecoderBuffer_Init_2 = function() {
            return a.asm._emscripten_bind_DecoderBuffer_Init_2.apply(null, arguments)
        },
        Cb = a._emscripten_bind_DecoderBuffer___destroy___0 = function() {
            return a.asm._emscripten_bind_DecoderBuffer___destroy___0.apply(null, arguments)
        },
        Db = a._emscripten_bind_Decoder_DecodeBufferToMesh_2 = function() {
            return a.asm._emscripten_bind_Decoder_DecodeBufferToMesh_2.apply(null,
                arguments)
        },
        Eb = a._emscripten_bind_Decoder_DecodeBufferToPointCloud_2 = function() {
            return a.asm._emscripten_bind_Decoder_DecodeBufferToPointCloud_2.apply(null, arguments)
        },
        jb = a._emscripten_bind_Decoder_Decoder_0 = function() {
            return a.asm._emscripten_bind_Decoder_Decoder_0.apply(null, arguments)
        },
        Fb = a._emscripten_bind_Decoder_GetAttributeByUniqueId_2 = function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeByUniqueId_2.apply(null, arguments)
        },
        Gb = a._emscripten_bind_Decoder_GetAttributeFloatForAllPoints_3 =
        function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeFloatForAllPoints_3.apply(null, arguments)
        },
        Hb = a._emscripten_bind_Decoder_GetAttributeFloat_3 = function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeFloat_3.apply(null, arguments)
        },
        Ib = a._emscripten_bind_Decoder_GetAttributeIdByMetadataEntry_3 = function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeIdByMetadataEntry_3.apply(null, arguments)
        },
        Jb = a._emscripten_bind_Decoder_GetAttributeIdByName_2 = function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeIdByName_2.apply(null,
                arguments)
        },
        Kb = a._emscripten_bind_Decoder_GetAttributeId_2 = function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeId_2.apply(null, arguments)
        },
        Lb = a._emscripten_bind_Decoder_GetAttributeInt16ForAllPoints_3 = function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeInt16ForAllPoints_3.apply(null, arguments)
        },
        Mb = a._emscripten_bind_Decoder_GetAttributeInt32ForAllPoints_3 = function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeInt32ForAllPoints_3.apply(null, arguments)
        },
        Nb = a._emscripten_bind_Decoder_GetAttributeInt8ForAllPoints_3 =
        function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeInt8ForAllPoints_3.apply(null, arguments)
        },
        Ob = a._emscripten_bind_Decoder_GetAttributeIntForAllPoints_3 = function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeIntForAllPoints_3.apply(null, arguments)
        },
        Pb = a._emscripten_bind_Decoder_GetAttributeMetadata_2 = function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeMetadata_2.apply(null, arguments)
        },
        Qb = a._emscripten_bind_Decoder_GetAttributeUInt16ForAllPoints_3 = function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeUInt16ForAllPoints_3.apply(null,
                arguments)
        },
        Rb = a._emscripten_bind_Decoder_GetAttributeUInt32ForAllPoints_3 = function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeUInt32ForAllPoints_3.apply(null, arguments)
        },
        Sb = a._emscripten_bind_Decoder_GetAttributeUInt8ForAllPoints_3 = function() {
            return a.asm._emscripten_bind_Decoder_GetAttributeUInt8ForAllPoints_3.apply(null, arguments)
        },
        Tb = a._emscripten_bind_Decoder_GetAttribute_2 = function() {
            return a.asm._emscripten_bind_Decoder_GetAttribute_2.apply(null, arguments)
        },
        Ub = a._emscripten_bind_Decoder_GetEncodedGeometryType_1 =
        function() {
            return a.asm._emscripten_bind_Decoder_GetEncodedGeometryType_1.apply(null, arguments)
        },
        Vb = a._emscripten_bind_Decoder_GetFaceFromMesh_3 = function() {
            return a.asm._emscripten_bind_Decoder_GetFaceFromMesh_3.apply(null, arguments)
        },
        Wb = a._emscripten_bind_Decoder_GetMetadata_1 = function() {
            return a.asm._emscripten_bind_Decoder_GetMetadata_1.apply(null, arguments)
        },
        Xb = a._emscripten_bind_Decoder_GetTriangleStripsFromMesh_2 = function() {
            return a.asm._emscripten_bind_Decoder_GetTriangleStripsFromMesh_2.apply(null,
                arguments)
        },
        Yb = a._emscripten_bind_Decoder_SkipAttributeTransform_1 = function() {
            return a.asm._emscripten_bind_Decoder_SkipAttributeTransform_1.apply(null, arguments)
        },
        Zb = a._emscripten_bind_Decoder___destroy___0 = function() {
            return a.asm._emscripten_bind_Decoder___destroy___0.apply(null, arguments)
        },
        gb = a._emscripten_bind_DracoFloat32Array_DracoFloat32Array_0 = function() {
            return a.asm._emscripten_bind_DracoFloat32Array_DracoFloat32Array_0.apply(null, arguments)
        },
        $b = a._emscripten_bind_DracoFloat32Array_GetValue_1 =
        function() {
            return a.asm._emscripten_bind_DracoFloat32Array_GetValue_1.apply(null, arguments)
        },
        ac = a._emscripten_bind_DracoFloat32Array___destroy___0 = function() {
            return a.asm._emscripten_bind_DracoFloat32Array___destroy___0.apply(null, arguments)
        },
        bc = a._emscripten_bind_DracoFloat32Array_size_0 = function() {
            return a.asm._emscripten_bind_DracoFloat32Array_size_0.apply(null, arguments)
        },
        fb = a._emscripten_bind_DracoInt16Array_DracoInt16Array_0 = function() {
            return a.asm._emscripten_bind_DracoInt16Array_DracoInt16Array_0.apply(null,
                arguments)
        },
        cc = a._emscripten_bind_DracoInt16Array_GetValue_1 = function() {
            return a.asm._emscripten_bind_DracoInt16Array_GetValue_1.apply(null, arguments)
        },
        dc = a._emscripten_bind_DracoInt16Array___destroy___0 = function() {
            return a.asm._emscripten_bind_DracoInt16Array___destroy___0.apply(null, arguments)
        },
        ec = a._emscripten_bind_DracoInt16Array_size_0 = function() {
            return a.asm._emscripten_bind_DracoInt16Array_size_0.apply(null, arguments)
        },
        lb = a._emscripten_bind_DracoInt32Array_DracoInt32Array_0 = function() {
            return a.asm._emscripten_bind_DracoInt32Array_DracoInt32Array_0.apply(null,
                arguments)
        },
        fc = a._emscripten_bind_DracoInt32Array_GetValue_1 = function() {
            return a.asm._emscripten_bind_DracoInt32Array_GetValue_1.apply(null, arguments)
        },
        gc = a._emscripten_bind_DracoInt32Array___destroy___0 = function() {
            return a.asm._emscripten_bind_DracoInt32Array___destroy___0.apply(null, arguments)
        },
        hc = a._emscripten_bind_DracoInt32Array_size_0 = function() {
            return a.asm._emscripten_bind_DracoInt32Array_size_0.apply(null, arguments)
        },
        db = a._emscripten_bind_DracoInt8Array_DracoInt8Array_0 = function() {
            return a.asm._emscripten_bind_DracoInt8Array_DracoInt8Array_0.apply(null,
                arguments)
        },
        ic = a._emscripten_bind_DracoInt8Array_GetValue_1 = function() {
            return a.asm._emscripten_bind_DracoInt8Array_GetValue_1.apply(null, arguments)
        },
        jc = a._emscripten_bind_DracoInt8Array___destroy___0 = function() {
            return a.asm._emscripten_bind_DracoInt8Array___destroy___0.apply(null, arguments)
        },
        kc = a._emscripten_bind_DracoInt8Array_size_0 = function() {
            return a.asm._emscripten_bind_DracoInt8Array_size_0.apply(null, arguments)
        },
        Wa = a._emscripten_bind_DracoUInt16Array_DracoUInt16Array_0 = function() {
            return a.asm._emscripten_bind_DracoUInt16Array_DracoUInt16Array_0.apply(null,
                arguments)
        },
        lc = a._emscripten_bind_DracoUInt16Array_GetValue_1 = function() {
            return a.asm._emscripten_bind_DracoUInt16Array_GetValue_1.apply(null, arguments)
        },
        mc = a._emscripten_bind_DracoUInt16Array___destroy___0 = function() {
            return a.asm._emscripten_bind_DracoUInt16Array___destroy___0.apply(null, arguments)
        },
        nc = a._emscripten_bind_DracoUInt16Array_size_0 = function() {
            return a.asm._emscripten_bind_DracoUInt16Array_size_0.apply(null, arguments)
        },
        Za = a._emscripten_bind_DracoUInt32Array_DracoUInt32Array_0 = function() {
            return a.asm._emscripten_bind_DracoUInt32Array_DracoUInt32Array_0.apply(null,
                arguments)
        },
        oc = a._emscripten_bind_DracoUInt32Array_GetValue_1 = function() {
            return a.asm._emscripten_bind_DracoUInt32Array_GetValue_1.apply(null, arguments)
        },
        pc = a._emscripten_bind_DracoUInt32Array___destroy___0 = function() {
            return a.asm._emscripten_bind_DracoUInt32Array___destroy___0.apply(null, arguments)
        },
        qc = a._emscripten_bind_DracoUInt32Array_size_0 = function() {
            return a.asm._emscripten_bind_DracoUInt32Array_size_0.apply(null, arguments)
        },
        Ya = a._emscripten_bind_DracoUInt8Array_DracoUInt8Array_0 = function() {
            return a.asm._emscripten_bind_DracoUInt8Array_DracoUInt8Array_0.apply(null,
                arguments)
        },
        rc = a._emscripten_bind_DracoUInt8Array_GetValue_1 = function() {
            return a.asm._emscripten_bind_DracoUInt8Array_GetValue_1.apply(null, arguments)
        },
        sc = a._emscripten_bind_DracoUInt8Array___destroy___0 = function() {
            return a.asm._emscripten_bind_DracoUInt8Array___destroy___0.apply(null, arguments)
        },
        tc = a._emscripten_bind_DracoUInt8Array_size_0 = function() {
            return a.asm._emscripten_bind_DracoUInt8Array_size_0.apply(null, arguments)
        },
        hb = a._emscripten_bind_GeometryAttribute_GeometryAttribute_0 = function() {
            return a.asm._emscripten_bind_GeometryAttribute_GeometryAttribute_0.apply(null,
                arguments)
        },
        uc = a._emscripten_bind_GeometryAttribute___destroy___0 = function() {
            return a.asm._emscripten_bind_GeometryAttribute___destroy___0.apply(null, arguments)
        },
        kb = a._emscripten_bind_Mesh_Mesh_0 = function() {
            return a.asm._emscripten_bind_Mesh_Mesh_0.apply(null, arguments)
        },
        vc = a._emscripten_bind_Mesh___destroy___0 = function() {
            return a.asm._emscripten_bind_Mesh___destroy___0.apply(null, arguments)
        },
        wc = a._emscripten_bind_Mesh_num_attributes_0 = function() {
            return a.asm._emscripten_bind_Mesh_num_attributes_0.apply(null,
                arguments)
        },
        xc = a._emscripten_bind_Mesh_num_faces_0 = function() {
            return a.asm._emscripten_bind_Mesh_num_faces_0.apply(null, arguments)
        },
        yc = a._emscripten_bind_Mesh_num_points_0 = function() {
            return a.asm._emscripten_bind_Mesh_num_points_0.apply(null, arguments)
        },
        zc = a._emscripten_bind_MetadataQuerier_GetDoubleEntry_2 = function() {
            return a.asm._emscripten_bind_MetadataQuerier_GetDoubleEntry_2.apply(null, arguments)
        },
        Ac = a._emscripten_bind_MetadataQuerier_GetEntryName_2 = function() {
            return a.asm._emscripten_bind_MetadataQuerier_GetEntryName_2.apply(null,
                arguments)
        },
        Bc = a._emscripten_bind_MetadataQuerier_GetIntEntry_2 = function() {
            return a.asm._emscripten_bind_MetadataQuerier_GetIntEntry_2.apply(null, arguments)
        },
        Cc = a._emscripten_bind_MetadataQuerier_GetStringEntry_2 = function() {
            return a.asm._emscripten_bind_MetadataQuerier_GetStringEntry_2.apply(null, arguments)
        },
        Dc = a._emscripten_bind_MetadataQuerier_HasDoubleEntry_2 = function() {
            return a.asm._emscripten_bind_MetadataQuerier_HasDoubleEntry_2.apply(null, arguments)
        },
        Ec = a._emscripten_bind_MetadataQuerier_HasEntry_2 =
        function() {
            return a.asm._emscripten_bind_MetadataQuerier_HasEntry_2.apply(null, arguments)
        },
        Fc = a._emscripten_bind_MetadataQuerier_HasIntEntry_2 = function() {
            return a.asm._emscripten_bind_MetadataQuerier_HasIntEntry_2.apply(null, arguments)
        },
        Gc = a._emscripten_bind_MetadataQuerier_HasStringEntry_2 = function() {
            return a.asm._emscripten_bind_MetadataQuerier_HasStringEntry_2.apply(null, arguments)
        },
        eb = a._emscripten_bind_MetadataQuerier_MetadataQuerier_0 = function() {
            return a.asm._emscripten_bind_MetadataQuerier_MetadataQuerier_0.apply(null,
                arguments)
        },
        Hc = a._emscripten_bind_MetadataQuerier_NumEntries_1 = function() {
            return a.asm._emscripten_bind_MetadataQuerier_NumEntries_1.apply(null, arguments)
        },
        Ic = a._emscripten_bind_MetadataQuerier___destroy___0 = function() {
            return a.asm._emscripten_bind_MetadataQuerier___destroy___0.apply(null, arguments)
        },
        mb = a._emscripten_bind_Metadata_Metadata_0 = function() {
            return a.asm._emscripten_bind_Metadata_Metadata_0.apply(null, arguments)
        },
        Jc = a._emscripten_bind_Metadata___destroy___0 = function() {
            return a.asm._emscripten_bind_Metadata___destroy___0.apply(null,
                arguments)
        },
        Kc = a._emscripten_bind_PointAttribute_GetAttributeTransformData_0 = function() {
            return a.asm._emscripten_bind_PointAttribute_GetAttributeTransformData_0.apply(null, arguments)
        },
        ab = a._emscripten_bind_PointAttribute_PointAttribute_0 = function() {
            return a.asm._emscripten_bind_PointAttribute_PointAttribute_0.apply(null, arguments)
        },
        Lc = a._emscripten_bind_PointAttribute___destroy___0 = function() {
            return a.asm._emscripten_bind_PointAttribute___destroy___0.apply(null, arguments)
        },
        Mc = a._emscripten_bind_PointAttribute_attribute_type_0 =
        function() {
            return a.asm._emscripten_bind_PointAttribute_attribute_type_0.apply(null, arguments)
        },
        Nc = a._emscripten_bind_PointAttribute_byte_offset_0 = function() {
            return a.asm._emscripten_bind_PointAttribute_byte_offset_0.apply(null, arguments)
        },
        Oc = a._emscripten_bind_PointAttribute_byte_stride_0 = function() {
            return a.asm._emscripten_bind_PointAttribute_byte_stride_0.apply(null, arguments)
        },
        Pc = a._emscripten_bind_PointAttribute_data_type_0 = function() {
            return a.asm._emscripten_bind_PointAttribute_data_type_0.apply(null,
                arguments)
        },
        Qc = a._emscripten_bind_PointAttribute_normalized_0 = function() {
            return a.asm._emscripten_bind_PointAttribute_normalized_0.apply(null, arguments)
        },
        Rc = a._emscripten_bind_PointAttribute_num_components_0 = function() {
            return a.asm._emscripten_bind_PointAttribute_num_components_0.apply(null, arguments)
        },
        Sc = a._emscripten_bind_PointAttribute_size_0 = function() {
            return a.asm._emscripten_bind_PointAttribute_size_0.apply(null, arguments)
        },
        Tc = a._emscripten_bind_PointAttribute_unique_id_0 = function() {
            return a.asm._emscripten_bind_PointAttribute_unique_id_0.apply(null,
                arguments)
        },
        Xa = a._emscripten_bind_PointCloud_PointCloud_0 = function() {
            return a.asm._emscripten_bind_PointCloud_PointCloud_0.apply(null, arguments)
        },
        Uc = a._emscripten_bind_PointCloud___destroy___0 = function() {
            return a.asm._emscripten_bind_PointCloud___destroy___0.apply(null, arguments)
        },
        Vc = a._emscripten_bind_PointCloud_num_attributes_0 = function() {
            return a.asm._emscripten_bind_PointCloud_num_attributes_0.apply(null, arguments)
        },
        Wc = a._emscripten_bind_PointCloud_num_points_0 = function() {
            return a.asm._emscripten_bind_PointCloud_num_points_0.apply(null,
                arguments)
        },
        Xc = a._emscripten_bind_Status___destroy___0 = function() {
            return a.asm._emscripten_bind_Status___destroy___0.apply(null, arguments)
        },
        Yc = a._emscripten_bind_Status_code_0 = function() {
            return a.asm._emscripten_bind_Status_code_0.apply(null, arguments)
        },
        Zc = a._emscripten_bind_Status_error_msg_0 = function() {
            return a.asm._emscripten_bind_Status_error_msg_0.apply(null, arguments)
        },
        $c = a._emscripten_bind_Status_ok_0 = function() {
            return a.asm._emscripten_bind_Status_ok_0.apply(null, arguments)
        },
        ad = a._emscripten_bind_VoidPtr___destroy___0 =
        function() {
            return a.asm._emscripten_bind_VoidPtr___destroy___0.apply(null, arguments)
        },
        bd = a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_INVALID_TRANSFORM = function() {
            return a.asm._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_INVALID_TRANSFORM.apply(null, arguments)
        },
        cd = a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_NO_TRANSFORM = function() {
            return a.asm._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_NO_TRANSFORM.apply(null, arguments)
        },
        dd = a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_OCTAHEDRON_TRANSFORM =
        function() {
            return a.asm._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_OCTAHEDRON_TRANSFORM.apply(null, arguments)
        },
        ed = a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_QUANTIZATION_TRANSFORM = function() {
            return a.asm._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_QUANTIZATION_TRANSFORM.apply(null, arguments)
        },
        fd = a._emscripten_enum_draco_EncodedGeometryType_INVALID_GEOMETRY_TYPE = function() {
            return a.asm._emscripten_enum_draco_EncodedGeometryType_INVALID_GEOMETRY_TYPE.apply(null,
                arguments)
        },
        gd = a._emscripten_enum_draco_EncodedGeometryType_POINT_CLOUD = function() {
            return a.asm._emscripten_enum_draco_EncodedGeometryType_POINT_CLOUD.apply(null, arguments)
        },
        hd = a._emscripten_enum_draco_EncodedGeometryType_TRIANGULAR_MESH = function() {
            return a.asm._emscripten_enum_draco_EncodedGeometryType_TRIANGULAR_MESH.apply(null, arguments)
        },
        id = a._emscripten_enum_draco_GeometryAttribute_Type_COLOR = function() {
            return a.asm._emscripten_enum_draco_GeometryAttribute_Type_COLOR.apply(null, arguments)
        },
        jd =
        a._emscripten_enum_draco_GeometryAttribute_Type_GENERIC = function() {
            return a.asm._emscripten_enum_draco_GeometryAttribute_Type_GENERIC.apply(null, arguments)
        },
        kd = a._emscripten_enum_draco_GeometryAttribute_Type_INVALID = function() {
            return a.asm._emscripten_enum_draco_GeometryAttribute_Type_INVALID.apply(null, arguments)
        },
        ld = a._emscripten_enum_draco_GeometryAttribute_Type_NORMAL = function() {
            return a.asm._emscripten_enum_draco_GeometryAttribute_Type_NORMAL.apply(null, arguments)
        },
        md = a._emscripten_enum_draco_GeometryAttribute_Type_POSITION =
        function() {
            return a.asm._emscripten_enum_draco_GeometryAttribute_Type_POSITION.apply(null, arguments)
        },
        nd = a._emscripten_enum_draco_GeometryAttribute_Type_TEX_COORD = function() {
            return a.asm._emscripten_enum_draco_GeometryAttribute_Type_TEX_COORD.apply(null, arguments)
        },
        od = a._emscripten_enum_draco_StatusCode_ERROR = function() {
            return a.asm._emscripten_enum_draco_StatusCode_ERROR.apply(null, arguments)
        },
        pd = a._emscripten_enum_draco_StatusCode_INVALID_PARAMETER = function() {
            return a.asm._emscripten_enum_draco_StatusCode_INVALID_PARAMETER.apply(null,
                arguments)
        },
        qd = a._emscripten_enum_draco_StatusCode_IO_ERROR = function() {
            return a.asm._emscripten_enum_draco_StatusCode_IO_ERROR.apply(null, arguments)
        },
        rd = a._emscripten_enum_draco_StatusCode_OK = function() {
            return a.asm._emscripten_enum_draco_StatusCode_OK.apply(null, arguments)
        },
        sd = a._emscripten_enum_draco_StatusCode_UNKNOWN_VERSION = function() {
            return a.asm._emscripten_enum_draco_StatusCode_UNKNOWN_VERSION.apply(null, arguments)
        },
        td = a._emscripten_enum_draco_StatusCode_UNSUPPORTED_VERSION = function() {
            return a.asm._emscripten_enum_draco_StatusCode_UNSUPPORTED_VERSION.apply(null,
                arguments)
        },
        nb = a._emscripten_replace_memory = function() {
            return a.asm._emscripten_replace_memory.apply(null, arguments)
        };
    a._free = function() {
        return a.asm._free.apply(null, arguments)
    };
    a._llvm_bswap_i32 = function() {
        return a.asm._llvm_bswap_i32.apply(null, arguments)
    };
    var Ka = a._malloc = function() {
        return a.asm._malloc.apply(null, arguments)
    };
    a._memcpy = function() {
        return a.asm._memcpy.apply(null, arguments)
    };
    a._memmove = function() {
        return a.asm._memmove.apply(null, arguments)
    };
    a._memset = function() {
        return a.asm._memset.apply(null,
            arguments)
    };
    a._sbrk = function() {
        return a.asm._sbrk.apply(null, arguments)
    };
    a.establishStackSpace = function() {
        return a.asm.establishStackSpace.apply(null, arguments)
    };
    a.getTempRet0 = function() {
        return a.asm.getTempRet0.apply(null, arguments)
    };
    a.runPostSets = function() {
        return a.asm.runPostSets.apply(null, arguments)
    };
    var sa = a.setTempRet0 = function() {
        return a.asm.setTempRet0.apply(null, arguments)
    };
    a.setThrew = function() {
        return a.asm.setThrew.apply(null, arguments)
    };
    a.stackAlloc = function() {
        return a.asm.stackAlloc.apply(null,
            arguments)
    };
    a.stackRestore = function() {
        return a.asm.stackRestore.apply(null, arguments)
    };
    a.stackSave = function() {
        return a.asm.stackSave.apply(null, arguments)
    };
    a.dynCall_ii = function() {
        return a.asm.dynCall_ii.apply(null, arguments)
    };
    a.dynCall_iii = function() {
        return a.asm.dynCall_iii.apply(null, arguments)
    };
    a.dynCall_iiii = function() {
        return a.asm.dynCall_iiii.apply(null, arguments)
    };
    a.dynCall_iiiiiii = function() {
        return a.asm.dynCall_iiiiiii.apply(null, arguments)
    };
    a.dynCall_v = function() {
        return a.asm.dynCall_v.apply(null,
            arguments)
    };
    a.dynCall_vi = function() {
        return a.asm.dynCall_vi.apply(null, arguments)
    };
    a.dynCall_vii = function() {
        return a.asm.dynCall_vii.apply(null, arguments)
    };
    a.dynCall_viii = function() {
        return a.asm.dynCall_viii.apply(null, arguments)
    };
    a.dynCall_viiii = function() {
        return a.asm.dynCall_viiii.apply(null, arguments)
    };
    a.dynCall_viiiii = function() {
        return a.asm.dynCall_viiiii.apply(null, arguments)
    };
    a.dynCall_viiiiii = function() {
        return a.asm.dynCall_viiiiii.apply(null, arguments)
    };
    a.asm = Ua;
    a.then = function(d) {
        if (a.calledRun) d(a);
        else {
            var c = a.onRuntimeInitialized;
            a.onRuntimeInitialized = function() {
                c && c();
                d(a)
            }
        }
        return a
    };
    na.prototype = Error();
    na.prototype.constructor = na;
    ra = function c() {
        a.calledRun || wa();
        a.calledRun || (ra = c)
    };
    a.run = wa;
    a.exit = function(c, b) {
        if (!b || !a.noExitRuntime || 0 !== c) {
            if (!a.noExitRuntime && (oa = !0, ta = void 0, B(ob), a.onExit)) a.onExit(c);
            qa && process.exit(c);
            a.quit(c, new na(c))
        }
    };
    a.abort = O;
    if (a.preInit)
        for ("function" == typeof a.preInit && (a.preInit = [a.preInit]); 0 < a.preInit.length;) a.preInit.pop()();
    a.noExitRuntime = !0;
    wa();
    m.prototype = Object.create(m.prototype);
    m.prototype.constructor = m;
    m.prototype.__class__ = m;
    m.__cache__ = {};
    a.WrapperObject = m;
    a.getCache = t;
    a.wrapPointer = T;
    a.castObject = function(a, b) {
        return T(a.ptr, b)
    };
    a.NULL = T(0);
    a.destroy = function(a) {
        if (!a.__destroy__) throw "Error: Cannot destroy object. (Did you create it yourself?)";
        a.__destroy__();
        delete t(a.__class__)[a.ptr]
    };
    a.compare = function(a, b) {
        return a.ptr === b.ptr
    };
    a.getPointer = function(a) {
        return a.ptr
    };
    a.getClass = function(a) {
        return a.__class__
    };
    var l = {
        buffer: 0,
        size: 0,
        pos: 0,
        temps: [],
        needed: 0,
        prepare: function() {
            if (l.needed) {
                for (var c = 0; c < l.temps.length; c++) a._free(l.temps[c]);
                l.temps.length = 0;
                a._free(l.buffer);
                l.buffer = 0;
                l.size += l.needed;
                l.needed = 0
            }
            l.buffer || (l.size += 128, l.buffer = a._malloc(l.size), f(l.buffer));
            l.pos = 0
        },
        alloc: function(c, b) {
            f(l.buffer);
            c = c.length * b.BYTES_PER_ELEMENT;
            c = c + 7 & -8;
            l.pos + c >= l.size ? (f(0 < c), l.needed += c, b = a._malloc(c), l.temps.push(b)) : (b = l.buffer + l.pos, l.pos += c);
            return b
        },
        copy: function(a, b, d) {
            switch (b.BYTES_PER_ELEMENT) {
                case 2:
                    d >>=
                        1;
                    break;
                case 4:
                    d >>= 2;
                    break;
                case 8:
                    d >>= 3
            }
            for (var c = 0; c < a.length; c++) b[d + c] = a[c]
        }
    };
    z.prototype = Object.create(m.prototype);
    z.prototype.constructor = z;
    z.prototype.__class__ = z;
    z.__cache__ = {};
    a.Status = z;
    z.prototype.code = z.prototype.code = function() {
        return Yc(this.ptr)
    };
    z.prototype.ok = z.prototype.ok = function() {
        return !!$c(this.ptr)
    };
    z.prototype.error_msg = z.prototype.error_msg = function() {
        return u(Zc(this.ptr))
    };
    z.prototype.__destroy__ = z.prototype.__destroy__ = function() {
        Xc(this.ptr)
    };
    F.prototype = Object.create(m.prototype);
    F.prototype.constructor = F;
    F.prototype.__class__ = F;
    F.__cache__ = {};
    a.DracoUInt16Array = F;
    F.prototype.GetValue = F.prototype.GetValue = function(a) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        return lc(c, a)
    };
    F.prototype.size = F.prototype.size = function() {
        return nc(this.ptr)
    };
    F.prototype.__destroy__ = F.prototype.__destroy__ = function() {
        mc(this.ptr)
    };
    G.prototype = Object.create(m.prototype);
    G.prototype.constructor = G;
    G.prototype.__class__ = G;
    G.__cache__ = {};
    a.PointCloud = G;
    G.prototype.num_attributes = G.prototype.num_attributes =
        function() {
            return Vc(this.ptr)
        };
    G.prototype.num_points = G.prototype.num_points = function() {
        return Wc(this.ptr)
    };
    G.prototype.__destroy__ = G.prototype.__destroy__ = function() {
        Uc(this.ptr)
    };
    H.prototype = Object.create(m.prototype);
    H.prototype.constructor = H;
    H.prototype.__class__ = H;
    H.__cache__ = {};
    a.DracoUInt8Array = H;
    H.prototype.GetValue = H.prototype.GetValue = function(a) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        return rc(c, a)
    };
    H.prototype.size = H.prototype.size = function() {
        return tc(this.ptr)
    };
    H.prototype.__destroy__ =
        H.prototype.__destroy__ = function() {
            sc(this.ptr)
        };
    I.prototype = Object.create(m.prototype);
    I.prototype.constructor = I;
    I.prototype.__class__ = I;
    I.__cache__ = {};
    a.DracoUInt32Array = I;
    I.prototype.GetValue = I.prototype.GetValue = function(a) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        return oc(c, a)
    };
    I.prototype.size = I.prototype.size = function() {
        return qc(this.ptr)
    };
    I.prototype.__destroy__ = I.prototype.__destroy__ = function() {
        pc(this.ptr)
    };
    J.prototype = Object.create(m.prototype);
    J.prototype.constructor = J;
    J.prototype.__class__ =
        J;
    J.__cache__ = {};
    a.AttributeOctahedronTransform = J;
    J.prototype.InitFromAttribute = J.prototype.InitFromAttribute = function(a) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        return !!rb(c, a)
    };
    J.prototype.quantization_bits = J.prototype.quantization_bits = function() {
        return tb(this.ptr)
    };
    J.prototype.__destroy__ = J.prototype.__destroy__ = function() {
        sb(this.ptr)
    };
    n.prototype = Object.create(m.prototype);
    n.prototype.constructor = n;
    n.prototype.__class__ = n;
    n.__cache__ = {};
    a.PointAttribute = n;
    n.prototype.size = n.prototype.size =
        function() {
            return Sc(this.ptr)
        };
    n.prototype.GetAttributeTransformData = n.prototype.GetAttributeTransformData = function() {
        return T(Kc(this.ptr), P)
    };
    n.prototype.attribute_type = n.prototype.attribute_type = function() {
        return Mc(this.ptr)
    };
    n.prototype.data_type = n.prototype.data_type = function() {
        return Pc(this.ptr)
    };
    n.prototype.num_components = n.prototype.num_components = function() {
        return Rc(this.ptr)
    };
    n.prototype.normalized = n.prototype.normalized = function() {
        return !!Qc(this.ptr)
    };
    n.prototype.byte_stride = n.prototype.byte_stride =
        function() {
            return Oc(this.ptr)
        };
    n.prototype.byte_offset = n.prototype.byte_offset = function() {
        return Nc(this.ptr)
    };
    n.prototype.unique_id = n.prototype.unique_id = function() {
        return Tc(this.ptr)
    };
    n.prototype.__destroy__ = n.prototype.__destroy__ = function() {
        Lc(this.ptr)
    };
    P.prototype = Object.create(m.prototype);
    P.prototype.constructor = P;
    P.prototype.__class__ = P;
    P.__cache__ = {};
    a.AttributeTransformData = P;
    P.prototype.transform_type = P.prototype.transform_type = function() {
        return Ab(this.ptr)
    };
    P.prototype.__destroy__ =
        P.prototype.__destroy__ = function() {
            zb(this.ptr)
        };
    x.prototype = Object.create(m.prototype);
    x.prototype.constructor = x;
    x.prototype.__class__ = x;
    x.__cache__ = {};
    a.AttributeQuantizationTransform = x;
    x.prototype.InitFromAttribute = x.prototype.InitFromAttribute = function(a) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        return !!ub(c, a)
    };
    x.prototype.quantization_bits = x.prototype.quantization_bits = function() {
        return xb(this.ptr)
    };
    x.prototype.min_value = x.prototype.min_value = function(a) {
        var c = this.ptr;
        a && "object" ===
            typeof a && (a = a.ptr);
        return wb(c, a)
    };
    x.prototype.range = x.prototype.range = function() {
        return yb(this.ptr)
    };
    x.prototype.__destroy__ = x.prototype.__destroy__ = function() {
        vb(this.ptr)
    };
    K.prototype = Object.create(m.prototype);
    K.prototype.constructor = K;
    K.prototype.__class__ = K;
    K.__cache__ = {};
    a.DracoInt8Array = K;
    K.prototype.GetValue = K.prototype.GetValue = function(a) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        return ic(c, a)
    };
    K.prototype.size = K.prototype.size = function() {
        return kc(this.ptr)
    };
    K.prototype.__destroy__ =
        K.prototype.__destroy__ = function() {
            jc(this.ptr)
        };
    q.prototype = Object.create(m.prototype);
    q.prototype.constructor = q;
    q.prototype.__class__ = q;
    q.__cache__ = {};
    a.MetadataQuerier = q;
    q.prototype.HasEntry = q.prototype.HasEntry = function(a, b) {
        var c = this.ptr;
        l.prepare();
        a && "object" === typeof a && (a = a.ptr);
        b = b && "object" === typeof b ? b.ptr : U(b);
        return !!Ec(c, a, b)
    };
    q.prototype.HasIntEntry = q.prototype.HasIntEntry = function(a, b) {
        var c = this.ptr;
        l.prepare();
        a && "object" === typeof a && (a = a.ptr);
        b = b && "object" === typeof b ? b.ptr : U(b);
        return !!Fc(c, a, b)
    };
    q.prototype.GetIntEntry = q.prototype.GetIntEntry = function(a, b) {
        var c = this.ptr;
        l.prepare();
        a && "object" === typeof a && (a = a.ptr);
        b = b && "object" === typeof b ? b.ptr : U(b);
        return Bc(c, a, b)
    };
    q.prototype.HasDoubleEntry = q.prototype.HasDoubleEntry = function(a, b) {
        var c = this.ptr;
        l.prepare();
        a && "object" === typeof a && (a = a.ptr);
        b = b && "object" === typeof b ? b.ptr : U(b);
        return !!Dc(c, a, b)
    };
    q.prototype.GetDoubleEntry = q.prototype.GetDoubleEntry = function(a, b) {
        var c = this.ptr;
        l.prepare();
        a && "object" === typeof a && (a =
            a.ptr);
        b = b && "object" === typeof b ? b.ptr : U(b);
        return zc(c, a, b)
    };
    q.prototype.HasStringEntry = q.prototype.HasStringEntry = function(a, b) {
        var c = this.ptr;
        l.prepare();
        a && "object" === typeof a && (a = a.ptr);
        b = b && "object" === typeof b ? b.ptr : U(b);
        return !!Gc(c, a, b)
    };
    q.prototype.GetStringEntry = q.prototype.GetStringEntry = function(a, b) {
        var c = this.ptr;
        l.prepare();
        a && "object" === typeof a && (a = a.ptr);
        b = b && "object" === typeof b ? b.ptr : U(b);
        return u(Cc(c, a, b))
    };
    q.prototype.NumEntries = q.prototype.NumEntries = function(a) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        return Hc(c, a)
    };
    q.prototype.GetEntryName = q.prototype.GetEntryName = function(a, b) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        return u(Ac(c, a, b))
    };
    q.prototype.__destroy__ = q.prototype.__destroy__ = function() {
        Ic(this.ptr)
    };
    L.prototype = Object.create(m.prototype);
    L.prototype.constructor = L;
    L.prototype.__class__ = L;
    L.__cache__ = {};
    a.DracoInt16Array = L;
    L.prototype.GetValue = L.prototype.GetValue = function(a) {
        var c = this.ptr;
        a && "object" === typeof a &&
            (a = a.ptr);
        return cc(c, a)
    };
    L.prototype.size = L.prototype.size = function() {
        return ec(this.ptr)
    };
    L.prototype.__destroy__ = L.prototype.__destroy__ = function() {
        dc(this.ptr)
    };
    M.prototype = Object.create(m.prototype);
    M.prototype.constructor = M;
    M.prototype.__class__ = M;
    M.__cache__ = {};
    a.DracoFloat32Array = M;
    M.prototype.GetValue = M.prototype.GetValue = function(a) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        return $b(c, a)
    };
    M.prototype.size = M.prototype.size = function() {
        return bc(this.ptr)
    };
    M.prototype.__destroy__ = M.prototype.__destroy__ =
        function() {
            ac(this.ptr)
        };
    V.prototype = Object.create(m.prototype);
    V.prototype.constructor = V;
    V.prototype.__class__ = V;
    V.__cache__ = {};
    a.GeometryAttribute = V;
    V.prototype.__destroy__ = V.prototype.__destroy__ = function() {
        uc(this.ptr)
    };
    Q.prototype = Object.create(m.prototype);
    Q.prototype.constructor = Q;
    Q.prototype.__class__ = Q;
    Q.__cache__ = {};
    a.DecoderBuffer = Q;
    Q.prototype.Init = Q.prototype.Init = function(a, b) {
        var c = this.ptr;
        l.prepare();
        if ("object" == typeof a && "object" === typeof a) {
            var d = l.alloc(a, ia);
            l.copy(a, ia, d);
            a =
                d
        }
        b && "object" === typeof b && (b = b.ptr);
        Bb(c, a, b)
    };
    Q.prototype.__destroy__ = Q.prototype.__destroy__ = function() {
        Cb(this.ptr)
    };
    g.prototype = Object.create(m.prototype);
    g.prototype.constructor = g;
    g.prototype.__class__ = g;
    g.__cache__ = {};
    a.Decoder = g;
    g.prototype.GetEncodedGeometryType = g.prototype.GetEncodedGeometryType = function(a) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        return Ub(c, a)
    };
    g.prototype.DecodeBufferToPointCloud = g.prototype.DecodeBufferToPointCloud = function(a, b) {
        var c = this.ptr;
        a && "object" === typeof a &&
            (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        return T(Eb(c, a, b), z)
    };
    g.prototype.DecodeBufferToMesh = g.prototype.DecodeBufferToMesh = function(a, b) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        return T(Db(c, a, b), z)
    };
    g.prototype.GetAttributeId = g.prototype.GetAttributeId = function(a, b) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        return Kb(c, a, b)
    };
    g.prototype.GetAttributeIdByName = g.prototype.GetAttributeIdByName = function(a, b) {
        var c =
            this.ptr;
        l.prepare();
        a && "object" === typeof a && (a = a.ptr);
        b = b && "object" === typeof b ? b.ptr : U(b);
        return Jb(c, a, b)
    };
    g.prototype.GetAttributeIdByMetadataEntry = g.prototype.GetAttributeIdByMetadataEntry = function(a, b, d) {
        var c = this.ptr;
        l.prepare();
        a && "object" === typeof a && (a = a.ptr);
        b = b && "object" === typeof b ? b.ptr : U(b);
        d = d && "object" === typeof d ? d.ptr : U(d);
        return Ib(c, a, b, d)
    };
    g.prototype.GetAttribute = g.prototype.GetAttribute = function(a, b) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b =
            b.ptr);
        return T(Tb(c, a, b), n)
    };
    g.prototype.GetAttributeByUniqueId = g.prototype.GetAttributeByUniqueId = function(a, b) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        return T(Fb(c, a, b), n)
    };
    g.prototype.GetMetadata = g.prototype.GetMetadata = function(a) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        return T(Wb(c, a), R)
    };
    g.prototype.GetAttributeMetadata = g.prototype.GetAttributeMetadata = function(a, b) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b &&
            (b = b.ptr);
        return T(Pb(c, a, b), R)
    };
    g.prototype.GetFaceFromMesh = g.prototype.GetFaceFromMesh = function(a, b, d) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        d && "object" === typeof d && (d = d.ptr);
        return !!Vb(c, a, b, d)
    };
    g.prototype.GetTriangleStripsFromMesh = g.prototype.GetTriangleStripsFromMesh = function(a, b) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        return Xb(c, a, b)
    };
    g.prototype.GetAttributeFloat = g.prototype.GetAttributeFloat = function(a,
        b, d) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        d && "object" === typeof d && (d = d.ptr);
        return !!Hb(c, a, b, d)
    };
    g.prototype.GetAttributeFloatForAllPoints = g.prototype.GetAttributeFloatForAllPoints = function(a, b, d) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        d && "object" === typeof d && (d = d.ptr);
        return !!Gb(c, a, b, d)
    };
    g.prototype.GetAttributeIntForAllPoints = g.prototype.GetAttributeIntForAllPoints = function(a, b, d) {
        var c = this.ptr;
        a && "object" ===
            typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        d && "object" === typeof d && (d = d.ptr);
        return !!Ob(c, a, b, d)
    };
    g.prototype.GetAttributeInt8ForAllPoints = g.prototype.GetAttributeInt8ForAllPoints = function(a, b, d) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        d && "object" === typeof d && (d = d.ptr);
        return !!Nb(c, a, b, d)
    };
    g.prototype.GetAttributeUInt8ForAllPoints = g.prototype.GetAttributeUInt8ForAllPoints = function(a, b, d) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" ===
            typeof b && (b = b.ptr);
        d && "object" === typeof d && (d = d.ptr);
        return !!Sb(c, a, b, d)
    };
    g.prototype.GetAttributeInt16ForAllPoints = g.prototype.GetAttributeInt16ForAllPoints = function(a, b, d) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        d && "object" === typeof d && (d = d.ptr);
        return !!Lb(c, a, b, d)
    };
    g.prototype.GetAttributeUInt16ForAllPoints = g.prototype.GetAttributeUInt16ForAllPoints = function(a, b, d) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        d &&
            "object" === typeof d && (d = d.ptr);
        return !!Qb(c, a, b, d)
    };
    g.prototype.GetAttributeInt32ForAllPoints = g.prototype.GetAttributeInt32ForAllPoints = function(a, b, d) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        d && "object" === typeof d && (d = d.ptr);
        return !!Mb(c, a, b, d)
    };
    g.prototype.GetAttributeUInt32ForAllPoints = g.prototype.GetAttributeUInt32ForAllPoints = function(a, b, d) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        b && "object" === typeof b && (b = b.ptr);
        d && "object" === typeof d && (d =
            d.ptr);
        return !!Rb(c, a, b, d)
    };
    g.prototype.SkipAttributeTransform = g.prototype.SkipAttributeTransform = function(a) {
        var c = this.ptr;
        a && "object" === typeof a && (a = a.ptr);
        Yb(c, a)
    };
    g.prototype.__destroy__ = g.prototype.__destroy__ = function() {
        Zb(this.ptr)
    };
    C.prototype = Object.create(m.prototype);
    C.prototype.constructor = C;
    C.prototype.__class__ = C;
    C.__cache__ = {};
    a.Mesh = C;
    C.prototype.num_faces = C.prototype.num_faces = function() {
        return xc(this.ptr)
    };
    C.prototype.num_attributes = C.prototype.num_attributes = function() {
        return wc(this.ptr)
    };
    C.prototype.num_points = C.prototype.num_points = function() {
        return yc(this.ptr)
    };
    C.prototype.__destroy__ = C.prototype.__destroy__ = function() {
        vc(this.ptr)
    };
    X.prototype = Object.create(m.prototype);
    X.prototype.constructor = X;
    X.prototype.__class__ = X;
    X.__cache__ = {};
    a.VoidPtr = X;
    X.prototype.__destroy__ = X.prototype.__destroy__ = function() {
        ad(this.ptr)
    };
    N.prototype = Object.create(m.prototype);
    N.prototype.constructor = N;
    N.prototype.__class__ = N;
    N.__cache__ = {};
    a.DracoInt32Array = N;
    N.prototype.GetValue = N.prototype.GetValue =
        function(a) {
            var b = this.ptr;
            a && "object" === typeof a && (a = a.ptr);
            return fc(b, a)
        };
    N.prototype.size = N.prototype.size = function() {
        return hc(this.ptr)
    };
    N.prototype.__destroy__ = N.prototype.__destroy__ = function() {
        gc(this.ptr)
    };
    R.prototype = Object.create(m.prototype);
    R.prototype.constructor = R;
    R.prototype.__class__ = R;
    R.__cache__ = {};
    a.Metadata = R;
    R.prototype.__destroy__ = R.prototype.__destroy__ = function() {
        Jc(this.ptr)
    };
    (function() {
        function c() {
            a.OK = rd();
            a.ERROR = od();
            a.IO_ERROR = qd();
            a.INVALID_PARAMETER = pd();
            a.UNSUPPORTED_VERSION =
                td();
            a.UNKNOWN_VERSION = sd();
            a.INVALID_GEOMETRY_TYPE = fd();
            a.POINT_CLOUD = gd();
            a.TRIANGULAR_MESH = hd();
            a.ATTRIBUTE_INVALID_TRANSFORM = bd();
            a.ATTRIBUTE_NO_TRANSFORM = cd();
            a.ATTRIBUTE_QUANTIZATION_TRANSFORM = ed();
            a.ATTRIBUTE_OCTAHEDRON_TRANSFORM = dd();
            a.INVALID = kd();
            a.POSITION = md();
            a.NORMAL = ld();
            a.COLOR = id();
            a.TEX_COORD = nd();
            a.GENERIC = jd()
        }
        a.calledRun ? c() : Na.unshift(c)
    })();
    if ("function" === typeof a.onModuleParsed) a.onModuleParsed();
    return d
};
"object" === typeof exports && "object" === typeof module ? module.exports = DracoDecoderModule : "function" === typeof define && define.amd ? define([], function() {
    return DracoDecoderModule
}) : "object" === typeof exports && (exports.DracoDecoderModule = DracoDecoderModule);