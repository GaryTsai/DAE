if (function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function i(t) {
            var e = t.length,
                i = Z.type(t);
            return "function" !== i && !Z.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }

        function n(t, e, i) {
            if (Z.isFunction(e)) return Z.grep(t, function (t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return Z.grep(t, function (t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (rt.test(e)) return Z.filter(e, t, i);
                e = Z.filter(e, t)
            }
            return Z.grep(t, function (t) {
                return V.call(e, t) >= 0 !== i
            })
        }

        function o(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function s(t) {
            var e = dt[t] = {};
            return Z.each(t.match(ut) || [], function (t, i) {
                e[i] = !0
            }), e
        }

        function r() {
            J.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1), Z.ready()
        }

        function a() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function () {
                    return {}
                }
            }), this.expando = Z.expando + a.uid++
        }

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(yt, "-$1").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : vt.test(i) ? Z.parseJSON(i) : i)
                    } catch (t) {}
                    mt.set(t, e, i)
                } else i = void 0;
            return i
        }

        function h() {
            return !0
        }

        function c() {
            return !1
        }

        function u() {
            try {
                return J.activeElement
            } catch (t) {}
        }

        function d(t, e) {
            return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function p(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function f(t) {
            var e = $t.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function g(t, e) {
            for (var i = 0, n = t.length; i < n; i++) gt.set(t[i], "globalEval", !e || gt.get(e[i], "globalEval"))
        }

        function m(t, e) {
            var i, n, o, s, r, a, l, h;
            if (1 === e.nodeType) {
                if (gt.hasData(t) && (s = gt.access(t), r = gt.set(e, s), h = s.events)) {
                    delete r.handle, r.events = {};
                    for (o in h)
                        for (i = 0, n = h[o].length; i < n; i++) Z.event.add(e, o, h[o][i])
                }
                mt.hasData(t) && (a = mt.access(t), l = Z.extend({}, a), mt.set(e, l))
            }
        }

        function v(t, e) {
            var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], i) : i
        }

        function y(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && Ct.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function b(e, i) {
            var n, o = Z(i.createElement(e)).appendTo(i.body),
                s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(o[0])) ? n.display : Z.css(o[0], "display");
            return o.detach(), s
        }

        function x(t) {
            var e = J,
                i = Mt[t];
            return i || ("none" !== (i = b(t, e)) && i || ((e = (It = (It || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), i = b(t, e), It.detach()), Mt[t] = i), i
        }

        function w(t, e, i) {
            var n, o, s, r, a = t.style;
            return (i = i || Bt(t)) && (r = i.getPropertyValue(e) || i[e]), i && ("" !== r || Z.contains(t.ownerDocument, t) || (r = Z.style(t, e)), jt.test(r) && Wt.test(e) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
        }

        function C(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function S(t, e) {
            if (e in t) return e;
            for (var i = e[0].toUpperCase() + e.slice(1), n = e, o = Vt.length; o--;)
                if ((e = Vt[o] + i) in t) return e;
            return n
        }

        function T(t, e, i) {
            var n = zt.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function k(t, e, i, n, o) {
            for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; s < 4; s += 2) "margin" === i && (r += Z.css(t, i + xt[s], !0, o)), n ? ("content" === i && (r -= Z.css(t, "padding" + xt[s], !0, o)), "margin" !== i && (r -= Z.css(t, "border" + xt[s] + "Width", !0, o))) : (r += Z.css(t, "padding" + xt[s], !0, o), "padding" !== i && (r += Z.css(t, "border" + xt[s] + "Width", !0, o)));
            return r
        }

        function P(t, e, i) {
            var n = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = Bt(t),
                r = "border-box" === Z.css(t, "boxSizing", !1, s);
            if (o <= 0 || null == o) {
                if (((o = w(t, e, s)) < 0 || null == o) && (o = t.style[e]), jt.test(o)) return o;
                n = r && (Q.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + k(t, e, i || (r ? "border" : "content"), n, s) + "px"
        }

        function E(t, e) {
            for (var i, n, o, s = [], r = 0, a = t.length; r < a; r++)(n = t[r]).style && (s[r] = gt.get(n, "olddisplay"), i = n.style.display, e ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && wt(n) && (s[r] = gt.access(n, "olddisplay", x(n.nodeName)))) : (o = wt(n), "none" === i && o || gt.set(n, "olddisplay", o ? i : Z.css(n, "display"))));
            for (r = 0; r < a; r++)(n = t[r]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[r] || "" : "none"));
            return t
        }

        function A(t, e, i, n, o) {
            return new A.prototype.init(t, e, i, n, o)
        }

        function L() {
            return setTimeout(function () {
                Ut = void 0
            }), Ut = Z.now()
        }

        function D(t, e) {
            var i, n = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; n < 4; n += 2 - e) o["margin" + (i = xt[n])] = o["padding" + i] = t;
            return e && (o.opacity = o.width = t), o
        }

        function F(t, e, i) {
            for (var n, o = (Kt[e] || []).concat(Kt["*"]), s = 0, r = o.length; s < r; s++)
                if (n = o[s].call(i, e, t)) return n
        }

        function R(t, e, i) {
            var n, o, s, r, a, l, h, c = this,
                u = {},
                d = t.style,
                p = t.nodeType && wt(t),
                f = gt.get(t, "fxshow");
            i.queue || (null == (a = Z._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, c.always(function () {
                c.always(function () {
                    a.unqueued--, Z.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ("none" === (h = Z.css(t, "display")) ? gt.get(t, "olddisplay") || x(t.nodeName) : h) && "none" === Z.css(t, "float") && (d.display = "inline-block")), i.overflow && (d.overflow = "hidden", c.always(function () {
                d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (o = e[n], Gt.exec(o)) {
                    if (delete e[n], s = s || "toggle" === o, o === (p ? "hide" : "show")) {
                        if ("show" !== o || !f || void 0 === f[n]) continue;
                        p = !0
                    }
                    u[n] = f && f[n] || Z.style(t, n)
                } else h = void 0;
            if (Z.isEmptyObject(u)) "inline" === ("none" === h ? x(t.nodeName) : h) && (d.display = h);
            else {
                f ? "hidden" in f && (p = f.hidden) : f = gt.access(t, "fxshow", {}), s && (f.hidden = !p), p ? Z(t).show() : c.done(function () {
                    Z(t).hide()
                }), c.done(function () {
                    var e;
                    gt.remove(t, "fxshow");
                    for (e in u) Z.style(t, e, u[e])
                });
                for (n in u) r = F(p ? f[n] : 0, n, c), n in f || (f[n] = r.start, p && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function $(t, e) {
            var i, n, o, s, r;
            for (i in t)
                if (n = Z.camelCase(i), o = e[n], s = t[i], Z.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (r = Z.cssHooks[n]) && "expand" in r) {
                    s = r.expand(s), delete t[n];
                    for (i in s) i in t || (t[i] = s[i], e[i] = o)
                } else e[n] = o
        }

        function N(t, e, i) {
            var n, o, s = 0,
                r = Zt.length,
                a = Z.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (o) return !1;
                    for (var e = Ut || L(), i = Math.max(0, h.startTime + h.duration - e), n = 1 - (i / h.duration || 0), s = 0, r = h.tweens.length; s < r; s++) h.tweens[s].run(n);
                    return a.notifyWith(t, [h, n, i]), n < 1 && r ? i : (a.resolveWith(t, [h]), !1)
                },
                h = a.promise({
                    elem: t,
                    props: Z.extend({}, e),
                    opts: Z.extend(!0, {
                        specialEasing: {}
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Ut || L(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function (e, i) {
                        var n = Z.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                        return h.tweens.push(n), n
                    },
                    stop: function (e) {
                        var i = 0,
                            n = e ? h.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i < n; i++) h.tweens[i].run(1);
                        return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this
                    }
                }),
                c = h.props;
            for ($(c, h.opts.specialEasing); s < r; s++)
                if (n = Zt[s].call(h, t, c, h.opts)) return n;
            return Z.map(c, F, h), Z.isFunction(h.opts.start) && h.opts.start.call(t, h), Z.fx.timer(Z.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
        }

        function O(t) {
            return function (e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, o = 0,
                    s = e.toLowerCase().match(ut) || [];
                if (Z.isFunction(i))
                    for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function I(t, e, i, n) {
            function o(a) {
                var l;
                return s[a] = !0, Z.each(t[a] || [], function (t, a) {
                    var h = a(e, i, n);
                    return "string" != typeof h || r || s[h] ? r ? !(l = h) : void 0 : (e.dataTypes.unshift(h), o(h), !1)
                }), l
            }
            var s = {},
                r = t === ge;
            return o(e.dataTypes[0]) || !s["*"] && o("*")
        }

        function M(t, e) {
            var i, n, o = Z.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && Z.extend(!0, t, n), t
        }

        function W(t, e, i) {
            for (var n, o, s, r, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (o in a)
                    if (a[o] && a[o].test(n)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in i) s = l[0];
            else {
                for (o in i) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        s = o;
                        break
                    }
                    r || (r = o)
                }
                s = s || r
            }
            if (s) return s !== l[0] && l.unshift(s), i[s]
        }

        function j(t, e, i, n) {
            var o, s, r, a, l, h = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
            for (s = c.shift(); s;)
                if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (!(r = h[l + " " + s] || h["* " + s]))
                    for (o in h)
                        if ((a = o.split(" "))[1] === s && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                            !0 === r ? r = h[o] : !0 !== h[o] && (s = a[0], c.unshift(a[1]));
                            break
                        }
                if (!0 !== r)
                    if (r && t.throws) e = r(e);
                    else try {
                        e = r(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: r ? t : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function B(t, e, i, n) {
            var o;
            if (Z.isArray(e)) Z.each(e, function (e, o) {
                i || xe.test(t) ? n(t, o) : B(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n)
            });
            else if (i || "object" !== Z.type(e)) n(t, e);
            else
                for (o in e) B(t + "[" + o + "]", e[o], i, n)
        }

        function H(t) {
            return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var z = [],
            q = z.slice,
            _ = z.concat,
            X = z.push,
            V = z.indexOf,
            U = {},
            Y = U.toString,
            G = U.hasOwnProperty,
            Q = {},
            J = t.document,
            Z = function (t, e) {
                return new Z.fn.init(t, e)
            },
            K = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            tt = /^-ms-/,
            et = /-([\da-z])/gi,
            it = function (t, e) {
                return e.toUpperCase()
            };
        Z.fn = Z.prototype = {
            jquery: "2.1.3",
            constructor: Z,
            selector: "",
            length: 0,
            toArray: function () {
                return q.call(this)
            },
            get: function (t) {
                return null != t ? t < 0 ? this[t + this.length] : this[t] : q.call(this)
            },
            pushStack: function (t) {
                var e = Z.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function (t, e) {
                return Z.each(this, t, e)
            },
            map: function (t) {
                return this.pushStack(Z.map(this, function (e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function () {
                return this.pushStack(q.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: X,
            sort: z.sort,
            splice: z.splice
        }, Z.extend = Z.fn.extend = function () {
            var t, e, i, n, o, s, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == typeof r || Z.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = r[e], r !== (n = t[e]) && (h && n && (Z.isPlainObject(n) || (o = Z.isArray(n))) ? (o ? (o = !1, s = i && Z.isArray(i) ? i : []) : s = i && Z.isPlainObject(i) ? i : {}, r[e] = Z.extend(h, s, n)) : void 0 !== n && (r[e] = n));
            return r
        }, Z.extend({
            expando: "jQuery" + ("2.1.3" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === Z.type(t)
            },
            isArray: Array.isArray,
            isWindow: function (t) {
                return null != t && t === t.window
            },
            isNumeric: function (t) {
                return !Z.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function (t) {
                return "object" === Z.type(t) && !t.nodeType && !Z.isWindow(t) && !(t.constructor && !G.call(t.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? U[Y.call(t)] || "object" : typeof t
            },
            globalEval: function (t) {
                var e, i = eval;
                (t = Z.trim(t)) && (1 === t.indexOf("use strict") ? ((e = J.createElement("script")).text = t, J.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function (t) {
                return t.replace(tt, "ms-").replace(et, it)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e, n) {
                var o = 0,
                    s = t.length,
                    r = i(t);
                if (n) {
                    if (r)
                        for (; o < s && !1 !== e.apply(t[o], n); o++);
                    else
                        for (o in t)
                            if (!1 === e.apply(t[o], n)) break
                } else if (r)
                    for (; o < s && !1 !== e.call(t[o], o, t[o]); o++);
                else
                    for (o in t)
                        if (!1 === e.call(t[o], o, t[o])) break;
                return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(K, "")
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? Z.merge(n, "string" == typeof t ? [t] : t) : X.call(n, t)), n
            },
            inArray: function (t, e, i) {
                return null == e ? -1 : V.call(e, t, i)
            },
            merge: function (t, e) {
                for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
                return t.length = o, t
            },
            grep: function (t, e, i) {
                for (var n = [], o = 0, s = t.length, r = !i; o < s; o++) !e(t[o], o) !== r && n.push(t[o]);
                return n
            },
            map: function (t, e, n) {
                var o, s = 0,
                    r = t.length,
                    a = [];
                if (i(t))
                    for (; s < r; s++) null != (o = e(t[s], s, n)) && a.push(o);
                else
                    for (s in t) null != (o = e(t[s], s, n)) && a.push(o);
                return _.apply([], a)
            },
            guid: 1,
            proxy: function (t, e) {
                var i, n, o;
                if ("string" == typeof e && (i = t[e], e = t, t = i), Z.isFunction(t)) return n = q.call(arguments, 2), o = function () {
                    return t.apply(e || this, n.concat(q.call(arguments)))
                }, o.guid = t.guid = t.guid || Z.guid++, o
            },
            now: Date.now,
            support: Q
        }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            U["[object " + e + "]"] = e.toLowerCase()
        });
        var nt = function (t) {
            function e(t, e, i, n) {
                var o, s, r, a, h, u, d, p, f, g;
                if ((e ? e.ownerDocument || e : W) !== D && L(e), e = e || D, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
                if (!n && R) {
                    if (11 !== a && (o = mt.exec(t)))
                        if (r = o[1]) {
                            if (9 === a) {
                                if (!(s = e.getElementById(r)) || !s.parentNode) return i;
                                if (s.id === r) return i.push(s), i
                            } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(r)) && I(e, s) && s.id === r) return i.push(s), i
                        } else {
                            if (o[2]) return Q.apply(i, e.getElementsByTagName(t)), i;
                            if ((r = o[3]) && b.getElementsByClassName) return Q.apply(i, e.getElementsByClassName(r)), i
                        }
                    if (b.qsa && (!$ || !$.test(t))) {
                        if (p = d = M, f = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = S(t), (d = e.getAttribute("id")) ? p = d.replace(yt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", h = u.length; h--;) u[h] = p + c(u[h]);
                            f = vt.test(t) && l(e.parentNode) || e, g = u.join(",")
                        }
                        if (g) try {
                            return Q.apply(i, f.querySelectorAll(g)), i
                        } catch (t) {} finally {
                            d || e.removeAttribute("id")
                        }
                    }
                }
                return k(t.replace(rt, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[M] = !0, t
            }

            function o(t) {
                var e = D.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e
            }

            function r(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return n(function (e) {
                    return e = +e, n(function (i, n) {
                        for (var o, s = t([], i.length, e), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                    })
                })
            }

            function l(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function h() {}

            function c(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }

            function u(t, e, i) {
                var n = e.dir,
                    o = i && "parentNode" === n,
                    s = B++;
                return e.first ? function (e, i, s) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) return t(e, i, s)
                } : function (e, i, r) {
                    var a, l, h = [j, s];
                    if (r) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || o) && t(e, i, r)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || o) {
                                if (l = e[M] || (e[M] = {}), (a = l[n]) && a[0] === j && a[1] === s) return h[2] = a[2];
                                if (l[n] = h, h[2] = t(e, i, r)) return !0
                            }
                }
            }

            function d(t) {
                return t.length > 1 ? function (e, i, n) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function p(t, i, n) {
                for (var o = 0, s = i.length; o < s; o++) e(t, i[o], n);
                return n
            }

            function f(t, e, i, n, o) {
                for (var s, r = [], a = 0, l = t.length, h = null != e; a < l; a++)(s = t[a]) && (i && !i(s, n, o) || (r.push(s), h && e.push(a)));
                return r
            }

            function g(t, e, i, o, s, r) {
                return o && !o[M] && (o = g(o)), s && !s[M] && (s = g(s, r)), n(function (n, r, a, l) {
                    var h, c, u, d = [],
                        g = [],
                        m = r.length,
                        v = n || p(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : f(v, d, t, a, l),
                        b = i ? s || (n ? t : m || o) ? [] : r : y;
                    if (i && i(y, b, a, l), o)
                        for (h = f(b, g), o(h, [], a, l), c = h.length; c--;)(u = h[c]) && (b[g[c]] = !(y[g[c]] = u));
                    if (n) {
                        if (s || t) {
                            if (s) {
                                for (h = [], c = b.length; c--;)(u = b[c]) && h.push(y[c] = u);
                                s(null, b = [], h, l)
                            }
                            for (c = b.length; c--;)(u = b[c]) && (h = s ? Z(n, u) : d[c]) > -1 && (n[h] = !(r[h] = u))
                        }
                    } else b = f(b === r ? b.splice(m, b.length) : b), s ? s(null, r, b, l) : Q.apply(r, b)
                })
            }

            function m(t) {
                for (var e, i, n, o = t.length, s = x.relative[t[0].type], r = s || x.relative[" "], a = s ? 1 : 0, l = u(function (t) {
                        return t === e
                    }, r, !0), h = u(function (t) {
                        return Z(e, t) > -1
                    }, r, !0), p = [function (t, i, n) {
                        var o = !s && (n || i !== P) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                        return e = null, o
                    }]; a < o; a++)
                    if (i = x.relative[t[a].type]) p = [u(d(p), i)];
                    else {
                        if ((i = x.filter[t[a].type].apply(null, t[a].matches))[M]) {
                            for (n = ++a; n < o && !x.relative[t[n].type]; n++);
                            return g(a > 1 && d(p), a > 1 && c(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(rt, "$1"), i, a < n && m(t.slice(a, n)), n < o && m(t = t.slice(n)), n < o && c(t))
                        }
                        p.push(i)
                    }
                return d(p)
            }

            function v(t, i) {
                var o = i.length > 0,
                    s = t.length > 0,
                    r = function (n, r, a, l, h) {
                        var c, u, d, p = 0,
                            g = "0",
                            m = n && [],
                            v = [],
                            y = P,
                            b = n || s && x.find.TAG("*", h),
                            w = j += null == y ? 1 : Math.random() || .1,
                            C = b.length;
                        for (h && (P = r !== D && r); g !== C && null != (c = b[g]); g++) {
                            if (s && c) {
                                for (u = 0; d = t[u++];)
                                    if (d(c, r, a)) {
                                        l.push(c);
                                        break
                                    }
                                h && (j = w)
                            }
                            o && ((c = !d && c) && p--, n && m.push(c))
                        }
                        if (p += g, o && g !== p) {
                            for (u = 0; d = i[u++];) d(m, v, r, a);
                            if (n) {
                                if (p > 0)
                                    for (; g--;) m[g] || v[g] || (v[g] = Y.call(l));
                                v = f(v)
                            }
                            Q.apply(l, v), h && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                        }
                        return h && (j = w, P = y), m
                    };
                return o ? n(r) : r
            }
            var y, b, x, w, C, S, T, k, P, E, A, L, D, F, R, $, N, O, I, M = "sizzle" + 1 * new Date,
                W = t.document,
                j = 0,
                B = 0,
                H = i(),
                z = i(),
                q = i(),
                _ = function (t, e) {
                    return t === e && (A = !0), 0
                },
                X = 1 << 31,
                V = {}.hasOwnProperty,
                U = [],
                Y = U.pop,
                G = U.push,
                Q = U.push,
                J = U.slice,
                Z = function (t, e) {
                    for (var i = 0, n = t.length; i < n; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                it = et.replace("w", "w#"),
                nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + tt + "*\\]",
                ot = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
                st = new RegExp(tt + "+", "g"),
                rt = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                at = new RegExp("^" + tt + "*," + tt + "*"),
                lt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                ht = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                ct = new RegExp(ot),
                ut = new RegExp("^" + it + "$"),
                dt = {
                    ID: new RegExp("^#(" + et + ")"),
                    CLASS: new RegExp("^\\.(" + et + ")"),
                    TAG: new RegExp("^(" + et.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + nt),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                },
                pt = /^(?:input|select|textarea|button)$/i,
                ft = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                vt = /[+~]/,
                yt = /'|\\/g,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                xt = function (t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                wt = function () {
                    L()
                };
            try {
                Q.apply(U = J.call(W.childNodes), W.childNodes), U[W.childNodes.length].nodeType
            } catch (t) {
                Q = {
                    apply: U.length ? function (t, e) {
                        G.apply(t, J.call(e))
                    } : function (t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            b = e.support = {}, C = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, L = e.setDocument = function (t) {
                var e, i, n = t ? t.ownerDocument || t : W;
                return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, F = n.documentElement, (i = n.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", wt, !1) : i.attachEvent && i.attachEvent("onunload", wt)), R = !C(n), b.attributes = o(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), b.getElementsByTagName = o(function (t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), b.getElementsByClassName = gt.test(n.getElementsByClassName), b.getById = o(function (t) {
                    return F.appendChild(t).id = M, !n.getElementsByName || !n.getElementsByName(M).length
                }), b.getById ? (x.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && R) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, x.filter.ID = function (t) {
                    var e = t.replace(bt, xt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function (t) {
                    var e = t.replace(bt, xt);
                    return function (t) {
                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), x.find.TAG = b.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var i, n = [],
                        o = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, x.find.CLASS = b.getElementsByClassName && function (t, e) {
                    if (R) return e.getElementsByClassName(t)
                }, N = [], $ = [], (b.qsa = gt.test(n.querySelectorAll)) && (o(function (t) {
                    F.appendChild(t).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && $.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || $.push("\\[" + tt + "*(?:value|" + K + ")"), t.querySelectorAll("[id~=" + M + "-]").length || $.push("~="), t.querySelectorAll(":checked").length || $.push(":checked"), t.querySelectorAll("a#" + M + "+*").length || $.push(".#.+[+~]")
                }), o(function (t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && $.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), $.push(",.*:")
                })), (b.matchesSelector = gt.test(O = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && o(function (t) {
                    b.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), N.push("!=", ot)
                }), $ = $.length && new RegExp($.join("|")), N = N.length && new RegExp(N.join("|")), e = gt.test(F.compareDocumentPosition), I = e || gt.test(F.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, _ = e ? function (t, e) {
                    if (t === e) return A = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === W && I(W, t) ? -1 : e === n || e.ownerDocument === W && I(W, e) ? 1 : E ? Z(E, t) - Z(E, e) : 0 : 4 & i ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return A = !0, 0;
                    var i, o = 0,
                        s = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        h = [e];
                    if (!s || !a) return t === n ? -1 : e === n ? 1 : s ? -1 : a ? 1 : E ? Z(E, t) - Z(E, e) : 0;
                    if (s === a) return r(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) h.unshift(i);
                    for (; l[o] === h[o];) o++;
                    return o ? r(l[o], h[o]) : l[o] === W ? -1 : h[o] === W ? 1 : 0
                }, n) : D
            }, e.matches = function (t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function (t, i) {
                if ((t.ownerDocument || t) !== D && L(t), i = i.replace(ht, "='$1']"), b.matchesSelector && R && (!N || !N.test(i)) && (!$ || !$.test(i))) try {
                    var n = O.call(t, i);
                    if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {}
                return e(i, D, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== D && L(t), I(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== D && L(t);
                var i = x.attrHandle[e.toLowerCase()],
                    n = i && V.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !R) : void 0;
                return void 0 !== n ? n : b.attributes || !R ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, i = [],
                    n = 0,
                    o = 0;
                if (A = !b.detectDuplicates, E = !b.sortStable && t.slice(0), t.sort(_), A) {
                    for (; e = t[o++];) e === t[o] && (n = i.push(o));
                    for (; n--;) t.splice(i[n], 1)
                }
                return E = null, t
            }, w = e.getText = function (t) {
                var e, i = "",
                    n = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += w(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[n++];) i += w(e);
                return i
            }, (x = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: dt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(bt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(bt, xt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = H[t + " "];
                        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && H(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, i, n) {
                        return function (o) {
                            var s = e.attr(o, t);
                            return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (t, e, i, n, o) {
                        var s = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, i, l) {
                            var h, c, u, d, p, f, g = s !== r ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (m) {
                                if (s) {
                                    for (; g;) {
                                        for (u = e; u = u[g];)
                                            if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                    for (p = (h = (c = m[M] || (m[M] = {}))[t] || [])[0] === j && h[1], d = h[0] === j && h[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (d = p = 0) || f.pop();)
                                        if (1 === u.nodeType && ++d && u === e) {
                                            c[t] = [j, p, d];
                                            break
                                        }
                                } else if (y && (h = (e[M] || (e[M] = {}))[t]) && h[0] === j) d = h[1];
                                else
                                    for (;
                                        (u = ++p && u && u[g] || (d = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (y && ((u[M] || (u[M] = {}))[t] = [j, d]), u !== e)););
                                return (d -= o) === n || d % n == 0 && d / n >= 0
                            }
                        }
                    },
                    PSEUDO: function (t, i) {
                        var o, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[M] ? s(i) : s.length > 1 ? (o = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                            for (var n, o = s(t, i), r = o.length; r--;) t[n = Z(t, o[r])] = !(e[n] = o[r])
                        }) : function (t) {
                            return s(t, 0, o)
                        }) : s
                    }
                },
                pseudos: {
                    not: n(function (t) {
                        var e = [],
                            i = [],
                            o = T(t.replace(rt, "$1"));
                        return o[M] ? n(function (t, e, i, n) {
                            for (var s, r = o(t, null, n, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                        }) : function (t, n, s) {
                            return e[0] = t, o(e, null, s, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function (t) {
                        return function (i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function (t) {
                        return t = t.replace(bt, xt),
                            function (e) {
                                return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function (t) {
                        return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, xt).toLowerCase(),
                            function (e) {
                                var i;
                                do {
                                    if (i = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === F
                    },
                    focus: function (t) {
                        return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function (t) {
                        return !1 === t.disabled
                    },
                    disabled: function (t) {
                        return !0 === t.disabled
                    },
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function (t) {
                        return ft.test(t.nodeName)
                    },
                    input: function (t) {
                        return pt.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: a(function () {
                        return [0]
                    }),
                    last: a(function (t, e) {
                        return [e - 1]
                    }),
                    eq: a(function (t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: a(function (t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }),
                    odd: a(function (t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }),
                    lt: a(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: a(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = x.pseudos.eq;
            for (y in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[y] = function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(y);
            for (y in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[y] = function (t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }(y);
            return h.prototype = x.filters = x.pseudos, x.setFilters = new h, S = e.tokenize = function (t, i) {
                var n, o, s, r, a, l, h, c = z[t + " "];
                if (c) return i ? 0 : c.slice(0);
                for (a = t, l = [], h = x.preFilter; a;) {
                    n && !(o = at.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = lt.exec(a)) && (n = o.shift(), s.push({
                        value: n,
                        type: o[0].replace(rt, " ")
                    }), a = a.slice(n.length));
                    for (r in x.filter) !(o = dt[r].exec(a)) || h[r] && !(o = h[r](o)) || (n = o.shift(), s.push({
                        value: n,
                        type: r,
                        matches: o
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : z(t, l).slice(0)
            }, T = e.compile = function (t, e) {
                var i, n = [],
                    o = [],
                    s = q[t + " "];
                if (!s) {
                    for (e || (e = S(t)), i = e.length; i--;)(s = m(e[i]))[M] ? n.push(s) : o.push(s);
                    (s = q(t, v(o, n))).selector = t
                }
                return s
            }, k = e.select = function (t, e, i, n) {
                var o, s, r, a, h, u = "function" == typeof t && t,
                    d = !n && S(t = u.selector || t);
                if (i = i || [], 1 === d.length) {
                    if ((s = d[0] = d[0].slice(0)).length > 2 && "ID" === (r = s[0]).type && b.getById && 9 === e.nodeType && R && x.relative[s[1].type]) {
                        if (!(e = (x.find.ID(r.matches[0].replace(bt, xt), e) || [])[0])) return i;
                        u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (o = dt.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !x.relative[a = r.type]);)
                        if ((h = x.find[a]) && (n = h(r.matches[0].replace(bt, xt), vt.test(s[0].type) && l(e.parentNode) || e))) {
                            if (s.splice(o, 1), !(t = n.length && c(s))) return Q.apply(i, n), i;
                            break
                        }
                }
                return (u || T(t, d))(n, e, !R, i, vt.test(t) && l(e.parentNode) || e), i
            }, b.sortStable = M.split("").sort(_).join("") === M, b.detectDuplicates = !!A, L(), b.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(D.createElement("div"))
            }), o(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function (t, e, i) {
                if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), b.attributes && o(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function (t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), o(function (t) {
                return null == t.getAttribute("disabled")
            }) || s(K, function (t, e, i) {
                var n;
                if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        Z.find = nt, Z.expr = nt.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = nt.uniqueSort, Z.text = nt.getText, Z.isXMLDoc = nt.isXML, Z.contains = nt.contains;
        var ot = Z.expr.match.needsContext,
            st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            rt = /^.[^:#\[\.,]*$/;
        Z.filter = function (t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? Z.find.matchesSelector(n, t) ? [n] : [] : Z.find.matches(t, Z.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, Z.fn.extend({
            find: function (t) {
                var e, i = this.length,
                    n = [],
                    o = this;
                if ("string" != typeof t) return this.pushStack(Z(t).filter(function () {
                    for (e = 0; e < i; e++)
                        if (Z.contains(o[e], this)) return !0
                }));
                for (e = 0; e < i; e++) Z.find(t, o[e], n);
                return n = this.pushStack(i > 1 ? Z.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function (t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function (t) {
                return !!n(this, "string" == typeof t && ot.test(t) ? Z(t) : t || [], !1).length
            }
        });
        var at, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (Z.fn.init = function (t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : lt.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || at).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), st.test(i[1]) && Z.isPlainObject(e))
                        for (i in e) Z.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (n = J.getElementById(i[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = J, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? void 0 !== at.ready ? at.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
        }).prototype = Z.fn, at = Z(J);
        var ht = /^(?:parents|prev(?:Until|All))/,
            ct = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        Z.extend({
            dir: function (t, e, i) {
                for (var n = [], o = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && Z(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            sibling: function (t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }), Z.fn.extend({
            has: function (t) {
                var e = Z(t, this),
                    i = e.length;
                return this.filter(function () {
                    for (var t = 0; t < i; t++)
                        if (Z.contains(this, e[t])) return !0
                })
            },
            closest: function (t, e) {
                for (var i, n = 0, o = this.length, s = [], r = ot.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; n < o; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && Z.find.matchesSelector(i, t))) {
                            s.push(i);
                            break
                        }
                return this.pushStack(s.length > 1 ? Z.unique(s) : s)
            },
            index: function (t) {
                return t ? "string" == typeof t ? V.call(Z(t), this[0]) : V.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), Z.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return Z.dir(t, "parentNode")
            },
            parentsUntil: function (t, e, i) {
                return Z.dir(t, "parentNode", i)
            },
            next: function (t) {
                return o(t, "nextSibling")
            },
            prev: function (t) {
                return o(t, "previousSibling")
            },
            nextAll: function (t) {
                return Z.dir(t, "nextSibling")
            },
            prevAll: function (t) {
                return Z.dir(t, "previousSibling")
            },
            nextUntil: function (t, e, i) {
                return Z.dir(t, "nextSibling", i)
            },
            prevUntil: function (t, e, i) {
                return Z.dir(t, "previousSibling", i)
            },
            siblings: function (t) {
                return Z.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return Z.sibling(t.firstChild)
            },
            contents: function (t) {
                return t.contentDocument || Z.merge([], t.childNodes)
            }
        }, function (t, e) {
            Z.fn[t] = function (i, n) {
                var o = Z.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = Z.filter(n, o)), this.length > 1 && (ct[t] || Z.unique(o), ht.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var ut = /\S+/g,
            dt = {};
        Z.Callbacks = function (t) {
            var e, i, n, o, r, a, l = [],
                h = !(t = "string" == typeof t ? dt[t] || s(t) : Z.extend({}, t)).once && [],
                c = function (s) {
                    for (e = t.memory && s, i = !0, a = o || 0, o = 0, r = l.length, n = !0; l && a < r; a++)
                        if (!1 === l[a].apply(s[0], s[1]) && t.stopOnFalse) {
                            e = !1;
                            break
                        }
                    n = !1, l && (h ? h.length && c(h.shift()) : e ? l = [] : u.disable())
                },
                u = {
                    add: function () {
                        if (l) {
                            var i = l.length;
                            ! function e(i) {
                                Z.each(i, function (i, n) {
                                    var o = Z.type(n);
                                    "function" === o ? t.unique && u.has(n) || l.push(n) : n && n.length && "string" !== o && e(n)
                                })
                            }(arguments), n ? r = l.length : e && (o = i, c(e))
                        }
                        return this
                    },
                    remove: function () {
                        return l && Z.each(arguments, function (t, e) {
                            for (var i;
                                (i = Z.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (i <= r && r--, i <= a && a--)
                        }), this
                    },
                    has: function (t) {
                        return t ? Z.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function () {
                        return l = [], r = 0, this
                    },
                    disable: function () {
                        return l = h = e = void 0, this
                    },
                    disabled: function () {
                        return !l
                    },
                    lock: function () {
                        return h = void 0, e || u.disable(), this
                    },
                    locked: function () {
                        return !h
                    },
                    fireWith: function (t, e) {
                        return !l || i && !h || (e = [t, (e = e || []).slice ? e.slice() : e], n ? h.push(e) : c(e)), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return u
        }, Z.extend({
            Deferred: function (t) {
                var e = [
                        ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", Z.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var t = arguments;
                            return Z.Deferred(function (i) {
                                Z.each(e, function (e, s) {
                                    var r = Z.isFunction(t[e]) && t[e];
                                    o[s[1]](function () {
                                        var t = r && r.apply(this, arguments);
                                        t && Z.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? Z.extend(t, n) : n
                        }
                    },
                    o = {};
                return n.pipe = n.then, Z.each(e, function (t, s) {
                    var r = s[2],
                        a = s[3];
                    n[s[1]] = r.add, a && r.add(function () {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function () {
                        return o[s[0] + "With"](this === o ? n : this, arguments), this
                    }, o[s[0] + "With"] = r.fireWith
                }), n.promise(o), t && t.call(o, o), o
            },
            when: function (t) {
                var e, i, n, o = 0,
                    s = q.call(arguments),
                    r = s.length,
                    a = 1 !== r || t && Z.isFunction(t.promise) ? r : 0,
                    l = 1 === a ? t : Z.Deferred(),
                    h = function (t, i, n) {
                        return function (o) {
                            i[t] = this, n[t] = arguments.length > 1 ? q.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (r > 1)
                    for (e = new Array(r), i = new Array(r), n = new Array(r); o < r; o++) s[o] && Z.isFunction(s[o].promise) ? s[o].promise().done(h(o, n, s)).fail(l.reject).progress(h(o, i, e)) : --a;
                return a || l.resolveWith(n, s), l.promise()
            }
        });
        var pt;
        Z.fn.ready = function (t) {
            return Z.ready.promise().done(t), this
        }, Z.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? Z.readyWait++ : Z.ready(!0)
            },
            ready: function (t) {
                (!0 === t ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, !0 !== t && --Z.readyWait > 0 || (pt.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
            }
        }), Z.ready.promise = function (e) {
            return pt || (pt = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1))), pt.promise(e)
        }, Z.ready.promise();
        var ft = Z.access = function (t, e, i, n, o, s, r) {
            var a = 0,
                l = t.length,
                h = null == i;
            if ("object" === Z.type(i)) {
                o = !0;
                for (a in i) Z.access(t, e, a, i[a], !0, s, r)
            } else if (void 0 !== n && (o = !0, Z.isFunction(n) || (r = !0), h && (r ? (e.call(t, n), e = null) : (h = e, e = function (t, e, i) {
                    return h.call(Z(t), i)
                })), e))
                for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return o ? t : h ? e.call(t) : l ? e(t[0], i) : s
        };
        Z.acceptData = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
            key: function (t) {
                if (!a.accepts(t)) return 0;
                var e = {},
                    i = t[this.expando];
                if (!i) {
                    i = a.uid++;
                    try {
                        e[this.expando] = {
                            value: i
                        }, Object.defineProperties(t, e)
                    } catch (n) {
                        e[this.expando] = i, Z.extend(t, e)
                    }
                }
                return this.cache[i] || (this.cache[i] = {}), i
            },
            set: function (t, e, i) {
                var n, o = this.key(t),
                    s = this.cache[o];
                if ("string" == typeof e) s[e] = i;
                else if (Z.isEmptyObject(s)) Z.extend(this.cache[o], e);
                else
                    for (n in e) s[n] = e[n];
                return s
            },
            get: function (t, e) {
                var i = this.cache[this.key(t)];
                return void 0 === e ? i : i[e]
            },
            access: function (t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, Z.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function (t, e) {
                var i, n, o, s = this.key(t),
                    r = this.cache[s];
                if (void 0 === e) this.cache[s] = {};
                else {
                    Z.isArray(e) ? n = e.concat(e.map(Z.camelCase)) : (o = Z.camelCase(e), n = e in r ? [e, o] : (n = o) in r ? [n] : n.match(ut) || []), i = n.length;
                    for (; i--;) delete r[n[i]]
                }
            },
            hasData: function (t) {
                return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
            },
            discard: function (t) {
                t[this.expando] && delete this.cache[t[this.expando]]
            }
        };
        var gt = new a,
            mt = new a,
            vt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            yt = /([A-Z])/g;
        Z.extend({
            hasData: function (t) {
                return mt.hasData(t) || gt.hasData(t)
            },
            data: function (t, e, i) {
                return mt.access(t, e, i)
            },
            removeData: function (t, e) {
                mt.remove(t, e)
            },
            _data: function (t, e, i) {
                return gt.access(t, e, i)
            },
            _removeData: function (t, e) {
                gt.remove(t, e)
            }
        }), Z.fn.extend({
            data: function (t, e) {
                var i, n, o, s = this[0],
                    r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (o = mt.get(s), 1 === s.nodeType && !gt.get(s, "hasDataAttrs"))) {
                        for (i = r.length; i--;) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = Z.camelCase(n.slice(5)), l(s, n, o[n]));
                        gt.set(s, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function () {
                    mt.set(this, t)
                }) : ft(this, function (e) {
                    var i, n = Z.camelCase(t);
                    if (s && void 0 === e) {
                        if (void 0 !== (i = mt.get(s, t))) return i;
                        if (void 0 !== (i = mt.get(s, n))) return i;
                        if (void 0 !== (i = l(s, n, void 0))) return i
                    } else this.each(function () {
                        var i = mt.get(this, n);
                        mt.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && mt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function (t) {
                return this.each(function () {
                    mt.remove(this, t)
                })
            }
        }), Z.extend({
            queue: function (t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = gt.get(t, e), i && (!n || Z.isArray(i) ? n = gt.access(t, e, Z.makeArray(i)) : n.push(i)), n || []
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var i = Z.queue(t, e),
                    n = i.length,
                    o = i.shift(),
                    s = Z._queueHooks(t, e),
                    r = function () {
                        Z.dequeue(t, e)
                    };
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !n && s && s.empty.fire()
            },
            _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return gt.get(t, i) || gt.access(t, i, {
                    empty: Z.Callbacks("once memory").add(function () {
                        gt.remove(t, [e + "queue", i])
                    })
                })
            }
        }), Z.fn.extend({
            queue: function (t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? Z.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var i = Z.queue(this, t, e);
                    Z._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && Z.dequeue(this, t)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    Z.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var i, n = 1,
                    o = Z.Deferred(),
                    s = this,
                    r = this.length,
                    a = function () {
                        --n || o.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = gt.get(s[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var bt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            xt = ["Top", "Right", "Bottom", "Left"],
            wt = function (t, e) {
                return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
            },
            Ct = /^(?:checkbox|radio)$/i;
        ! function () {
            var t = J.createDocumentFragment().appendChild(J.createElement("div")),
                e = J.createElement("input");
            e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        Q.focusinBubbles = "onfocusin" in t;
        var St = /^key/,
            Tt = /^(?:mouse|pointer|contextmenu)|click/,
            kt = /^(?:focusinfocus|focusoutblur)$/,
            Pt = /^([^.]*)(?:\.(.+)|)$/;
        Z.event = {
            global: {},
            add: function (t, e, i, n, o) {
                var s, r, a, l, h, c, u, d, p, f, g, m = gt.get(t);
                if (m)
                    for (i.handler && (i = (s = i).handler, o = s.selector), i.guid || (i.guid = Z.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function (e) {
                            return void 0 !== Z && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0
                        }), h = (e = (e || "").match(ut) || [""]).length; h--;) p = g = (a = Pt.exec(e[h]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = Z.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = Z.event.special[p] || {}, c = Z.extend({
                        type: p,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && Z.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, s), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r, !1)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), Z.event.global[p] = !0)
            },
            remove: function (t, e, i, n, o) {
                var s, r, a, l, h, c, u, d, p, f, g, m = gt.hasData(t) && gt.get(t);
                if (m && (l = m.events)) {
                    for (h = (e = (e || "").match(ut) || [""]).length; h--;)
                        if (a = Pt.exec(e[h]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (u = Z.event.special[p] || {}, d = l[p = (n ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = d.length; s--;) c = d[s], !o && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(s, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(t, c));
                            r && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || Z.removeEvent(t, p, m.handle), delete l[p])
                        } else
                            for (p in l) Z.event.remove(t, p + e[h], i, n, !0);
                    Z.isEmptyObject(l) && (delete m.handle, gt.remove(t, "events"))
                }
            },
            trigger: function (e, i, n, o) {
                var s, r, a, l, h, c, u, d = [n || J],
                    p = G.call(e, "type") ? e.type : e,
                    f = G.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = a = n = n || J, 3 !== n.nodeType && 8 !== n.nodeType && !kt.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (p = (f = p.split(".")).shift(), f.sort()), h = p.indexOf(":") < 0 && "on" + p, e = e[Z.expando] ? e : new Z.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : Z.makeArray(i, [e]), u = Z.event.special[p] || {}, o || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                    if (!o && !u.noBubble && !Z.isWindow(n)) {
                        for (l = u.delegateType || p, kt.test(l + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r), a = r;
                        a === (n.ownerDocument || J) && d.push(a.defaultView || a.parentWindow || t)
                    }
                    for (s = 0;
                        (r = d[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : u.bindType || p, (c = (gt.get(r, "events") || {})[e.type] && gt.get(r, "handle")) && c.apply(r, i), (c = h && r[h]) && c.apply && Z.acceptData(r) && (e.result = c.apply(r, i), !1 === e.result && e.preventDefault());
                    return e.type = p, o || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), i) || !Z.acceptData(n) || h && Z.isFunction(n[p]) && !Z.isWindow(n) && ((a = n[h]) && (n[h] = null), Z.event.triggered = p, n[p](), Z.event.triggered = void 0, a && (n[h] = a)), e.result
                }
            },
            dispatch: function (t) {
                t = Z.event.fix(t);
                var e, i, n, o, s, r = [],
                    a = q.call(arguments),
                    l = (gt.get(this, "events") || {})[t.type] || [],
                    h = Z.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
                    for (r = Z.event.handlers.call(this, t, l), e = 0;
                        (o = r[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, i = 0;
                            (s = o.handlers[i++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(s.namespace) || (t.handleObj = s, t.data = s.data, void 0 !== (n = ((Z.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                    return h.postDispatch && h.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var i, n, o, s, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (!0 !== l.disabled || "click" !== t.type) {
                            for (n = [], i = 0; i < a; i++) void 0 === n[o = (s = e[i]).selector + " "] && (n[o] = s.needsContext ? Z(o, this).index(l) >= 0 : Z.find(o, this, null, [l]).length), n[o] && n.push(s);
                            n.length && r.push({
                                elem: l,
                                handlers: n
                            })
                        }
                return a < e.length && r.push({
                    elem: this,
                    handlers: e.slice(a)
                }), r
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var i, n, o, s = e.button;
                    return null == t.pageX && null != e.clientX && (n = (i = t.target.ownerDocument || J).documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            fix: function (t) {
                if (t[Z.expando]) return t;
                var e, i, n, o = t.type,
                    s = t,
                    r = this.fixHooks[o];
                for (r || (this.fixHooks[o] = r = Tt.test(o) ? this.mouseHooks : St.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new Z.Event(s), e = n.length; e--;) t[i = n[e]] = s[i];
                return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, s) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== u() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === u() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && Z.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function (t) {
                        return Z.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, i, n) {
                var o = Z.extend(new Z.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? Z.event.trigger(o, null, e) : Z.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
            }
        }, Z.removeEvent = function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        }, Z.Event = function (t, e) {
            if (!(this instanceof Z.Event)) return new Z.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? h : c) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), this[Z.expando] = !0
        }, Z.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = h, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = h, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, Z.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            Z.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var i, n = this,
                        o = t.relatedTarget,
                        s = t.handleObj;
                    return o && (o === n || Z.contains(n, o)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), Q.focusinBubbles || Z.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            var i = function (t) {
                Z.event.simulate(e, t.target, Z.event.fix(t), !0)
            };
            Z.event.special[e] = {
                setup: function () {
                    var n = this.ownerDocument || this,
                        o = gt.access(n, e);
                    o || n.addEventListener(t, i, !0), gt.access(n, e, (o || 0) + 1)
                },
                teardown: function () {
                    var n = this.ownerDocument || this,
                        o = gt.access(n, e) - 1;
                    o ? gt.access(n, e, o) : (n.removeEventListener(t, i, !0), gt.remove(n, e))
                }
            }
        }), Z.fn.extend({
            on: function (t, e, i, n, o) {
                var s, r;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (r in t) this.on(r, e, i, t[r], o);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), !1 === n) n = c;
                else if (!n) return this;
                return 1 === o && (s = n, (n = function (t) {
                    return Z().off(t), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = Z.guid++)), this.each(function () {
                    Z.event.add(this, t, n, i, e)
                })
            },
            one: function (t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function (t, e, i) {
                var n, o;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, Z(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = c), this.each(function () {
                    Z.event.remove(this, t, i, e)
                })
            },
            trigger: function (t, e) {
                return this.each(function () {
                    Z.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var i = this[0];
                if (i) return Z.event.trigger(t, e, i, !0)
            }
        });
        var Et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            At = /<([\w:]+)/,
            Lt = /<|&#?\w+;/,
            Dt = /<(?:script|style|link)/i,
            Ft = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Rt = /^$|\/(?:java|ecma)script/i,
            $t = /^true\/(.*)/,
            Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ot = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ot.optgroup = Ot.option, Ot.tbody = Ot.tfoot = Ot.colgroup = Ot.caption = Ot.thead, Ot.th = Ot.td, Z.extend({
            clone: function (t, e, i) {
                var n, o, s, r, a = t.cloneNode(!0),
                    l = Z.contains(t.ownerDocument, t);
                if (!(Q.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                    for (r = v(a), n = 0, o = (s = v(t)).length; n < o; n++) y(s[n], r[n]);
                if (e)
                    if (i)
                        for (s = s || v(t), r = r || v(a), n = 0, o = s.length; n < o; n++) m(s[n], r[n]);
                    else m(t, a);
                return (r = v(a, "script")).length > 0 && g(r, !l && v(t, "script")), a
            },
            buildFragment: function (t, e, i, n) {
                for (var o, s, r, a, l, h, c = e.createDocumentFragment(), u = [], d = 0, p = t.length; d < p; d++)
                    if ((o = t[d]) || 0 === o)
                        if ("object" === Z.type(o)) Z.merge(u, o.nodeType ? [o] : o);
                        else if (Lt.test(o)) {
                    for (s = s || c.appendChild(e.createElement("div")), r = (At.exec(o) || ["", ""])[1].toLowerCase(), a = Ot[r] || Ot._default, s.innerHTML = a[1] + o.replace(Et, "<$1></$2>") + a[2], h = a[0]; h--;) s = s.lastChild;
                    Z.merge(u, s.childNodes), (s = c.firstChild).textContent = ""
                } else u.push(e.createTextNode(o));
                for (c.textContent = "", d = 0; o = u[d++];)
                    if ((!n || -1 === Z.inArray(o, n)) && (l = Z.contains(o.ownerDocument, o), s = v(c.appendChild(o), "script"), l && g(s), i))
                        for (h = 0; o = s[h++];) Rt.test(o.type || "") && i.push(o);
                return c
            },
            cleanData: function (t) {
                for (var e, i, n, o, s = Z.event.special, r = 0; void 0 !== (i = t[r]); r++) {
                    if (Z.acceptData(i) && (o = i[gt.expando]) && (e = gt.cache[o])) {
                        if (e.events)
                            for (n in e.events) s[n] ? Z.event.remove(i, n) : Z.removeEvent(i, n, e.handle);
                        gt.cache[o] && delete gt.cache[o]
                    }
                    delete mt.cache[i[mt.expando]]
                }
            }
        }), Z.fn.extend({
            text: function (t) {
                return ft(this, function (t) {
                    return void 0 === t ? Z.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, function (t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || d(this, t).appendChild(t)
                })
            },
            prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = d(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function (t, e) {
                for (var i, n = t ? Z.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || Z.cleanData(v(i)), i.parentNode && (e && Z.contains(i.ownerDocument, i) && g(v(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.textContent = "");
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return Z.clone(this, t, e)
                })
            },
            html: function (t) {
                return ft(this, function (t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Dt.test(t) && !Ot[(At.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(Et, "<$1></$2>");
                        try {
                            for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (Z.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function () {
                var t = arguments[0];
                return this.domManip(arguments, function (e) {
                    t = this.parentNode, Z.cleanData(v(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function (t) {
                return this.remove(t, !0)
            },
            domManip: function (t, e) {
                t = _.apply([], t);
                var i, n, o, s, r, a, l = 0,
                    h = this.length,
                    c = this,
                    u = h - 1,
                    d = t[0],
                    g = Z.isFunction(d);
                if (g || h > 1 && "string" == typeof d && !Q.checkClone && Ft.test(d)) return this.each(function (i) {
                    var n = c.eq(i);
                    g && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
                });
                if (h && (i = Z.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                    for (s = (o = Z.map(v(i, "script"), p)).length; l < h; l++) r = i, l !== u && (r = Z.clone(r, !0, !0), s && Z.merge(o, v(r, "script"))), e.call(this[l], r, l);
                    if (s)
                        for (a = o[o.length - 1].ownerDocument, Z.map(o, f), l = 0; l < s; l++) r = o[l], Rt.test(r.type || "") && !gt.access(r, "globalEval") && Z.contains(a, r) && (r.src ? Z._evalUrl && Z._evalUrl(r.src) : Z.globalEval(r.textContent.replace(Nt, "")))
                }
                return this
            }
        }), Z.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            Z.fn[t] = function (t) {
                for (var i, n = [], o = Z(t), s = o.length - 1, r = 0; r <= s; r++) i = r === s ? this : this.clone(!0), Z(o[r])[e](i), X.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var It, Mt = {},
            Wt = /^margin/,
            jt = new RegExp("^(" + bt + ")(?!px)[a-z%]+$", "i"),
            Bt = function (e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
            };
        ! function () {
            function e() {
                r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r.innerHTML = "", o.appendChild(s);
                var e = t.getComputedStyle(r, null);
                i = "1%" !== e.top, n = "4px" === e.width, o.removeChild(s)
            }
            var i, n, o = J.documentElement,
                s = J.createElement("div"),
                r = J.createElement("div");
            r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === r.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(r), t.getComputedStyle && Z.extend(Q, {
                pixelPosition: function () {
                    return e(), i
                },
                boxSizingReliable: function () {
                    return null == n && e(), n
                },
                reliableMarginRight: function () {
                    var e, i = r.appendChild(J.createElement("div"));
                    return i.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", r.style.width = "1px", o.appendChild(s), e = !parseFloat(t.getComputedStyle(i, null).marginRight), o.removeChild(s), r.removeChild(i), e
                }
            }))
        }(), Z.swap = function (t, e, i, n) {
            var o, s, r = {};
            for (s in e) r[s] = t.style[s], t.style[s] = e[s];
            o = i.apply(t, n || []);
            for (s in e) t.style[s] = r[s];
            return o
        };
        var Ht = /^(none|table(?!-c[ea]).+)/,
            zt = new RegExp("^(" + bt + ")(.*)$", "i"),
            qt = new RegExp("^([+-])=(" + bt + ")", "i"),
            _t = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Xt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Vt = ["Webkit", "O", "Moz", "ms"];
        Z.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var i = w(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, s, r, a = Z.camelCase(e),
                        l = t.style;
                    if (e = Z.cssProps[a] || (Z.cssProps[a] = S(l, a)), r = Z.cssHooks[e] || Z.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : l[e];
                    "string" === (s = typeof i) && (o = qt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(Z.css(t, e)), s = "number"), null != i && i === i && ("number" !== s || Z.cssNumber[a] || (i += "px"), Q.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))
                }
            },
            css: function (t, e, i, n) {
                var o, s, r, a = Z.camelCase(e);
                return e = Z.cssProps[a] || (Z.cssProps[a] = S(t.style, a)), (r = Z.cssHooks[e] || Z.cssHooks[a]) && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = w(t, e, n)), "normal" === o && e in Xt && (o = Xt[e]), "" === i || i ? (s = parseFloat(o), !0 === i || Z.isNumeric(s) ? s || 0 : o) : o
            }
        }), Z.each(["height", "width"], function (t, e) {
            Z.cssHooks[e] = {
                get: function (t, i, n) {
                    if (i) return Ht.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, _t, function () {
                        return P(t, e, n)
                    }) : P(t, e, n)
                },
                set: function (t, i, n) {
                    var o = n && Bt(t);
                    return T(t, i, n ? k(t, e, n, "border-box" === Z.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), Z.cssHooks.marginRight = C(Q.reliableMarginRight, function (t, e) {
            if (e) return Z.swap(t, {
                display: "inline-block"
            }, w, [t, "marginRight"])
        }), Z.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (t, e) {
            Z.cssHooks[t + e] = {
                expand: function (i) {
                    for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[t + xt[n] + e] = s[n] || s[n - 2] || s[0];
                    return o
                }
            }, Wt.test(t) || (Z.cssHooks[t + e].set = T)
        }), Z.fn.extend({
            css: function (t, e) {
                return ft(this, function (t, e, i) {
                    var n, o, s = {},
                        r = 0;
                    if (Z.isArray(e)) {
                        for (n = Bt(t), o = e.length; r < o; r++) s[e[r]] = Z.css(t, e[r], !1, n);
                        return s
                    }
                    return void 0 !== i ? Z.style(t, e, i) : Z.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function () {
                return E(this, !0)
            },
            hide: function () {
                return E(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    wt(this) ? Z(this).show() : Z(this).hide()
                })
            }
        }), Z.Tween = A, A.prototype = {
            constructor: A,
            init: function (t, e, i, n, o, s) {
                this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (Z.cssNumber[i] ? "" : "px")
            },
            cur: function () {
                var t = A.propHooks[this.prop];
                return t && t.get ? t.get(this) : A.propHooks._default.get(this)
            },
            run: function (t) {
                var e, i = A.propHooks[this.prop];
                return this.options.duration ? this.pos = e = Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : A.propHooks._default.set(this), this
            }
        }, A.prototype.init.prototype = A.prototype, A.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function (t) {
                    Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, Z.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, Z.fx = A.prototype.init, Z.fx.step = {};
        var Ut, Yt, Gt = /^(?:toggle|show|hide)$/,
            Qt = new RegExp("^(?:([+-])=|)(" + bt + ")([a-z%]*)$", "i"),
            Jt = /queueHooks$/,
            Zt = [R],
            Kt = {
                "*": [function (t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        o = Qt.exec(e),
                        s = o && o[3] || (Z.cssNumber[t] ? "" : "px"),
                        r = (Z.cssNumber[t] || "px" !== s && +n) && Qt.exec(Z.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (r && r[3] !== s) {
                        s = s || r[3], o = o || [], r = +n || 1;
                        do {
                            r /= a = a || ".5", Z.style(i.elem, t, r + s)
                        } while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return o && (r = i.start = +r || +n || 0, i.unit = s, i.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), i
                }]
            };
        Z.Animation = Z.extend(N, {
                tweener: function (t, e) {
                    Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var i, n = 0, o = t.length; n < o; n++) i = t[n], Kt[i] = Kt[i] || [], Kt[i].unshift(e)
                },
                prefilter: function (t, e) {
                    e ? Zt.unshift(t) : Zt.push(t)
                }
            }), Z.speed = function (t, e, i) {
                var n = t && "object" == typeof t ? Z.extend({}, t) : {
                    complete: i || !i && e || Z.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !Z.isFunction(e) && e
                };
                return n.duration = Z.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in Z.fx.speeds ? Z.fx.speeds[n.duration] : Z.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                    Z.isFunction(n.old) && n.old.call(this), n.queue && Z.dequeue(this, n.queue)
                }, n
            }, Z.fn.extend({
                fadeTo: function (t, e, i, n) {
                    return this.filter(wt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function (t, e, i, n) {
                    var o = Z.isEmptyObject(t),
                        s = Z.speed(e, i, n),
                        r = function () {
                            var e = N(this, Z.extend({}, t), s);
                            (o || gt.get(this, "finish")) && e.stop(!0)
                        };
                    return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
                },
                stop: function (t, e, i) {
                    var n = function (t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            s = Z.timers,
                            r = gt.get(this);
                        if (o) r[o] && r[o].stop && n(r[o]);
                        else
                            for (o in r) r[o] && r[o].stop && Jt.test(o) && n(r[o]);
                        for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(i), e = !1, s.splice(o, 1));
                        !e && i || Z.dequeue(this, t)
                    })
                },
                finish: function (t) {
                    return !1 !== t && (t = t || "fx"), this.each(function () {
                        var e, i = gt.get(this),
                            n = i[t + "queue"],
                            o = i[t + "queueHooks"],
                            s = Z.timers,
                            r = n ? n.length : 0;
                        for (i.finish = !0, Z.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), Z.each(["toggle", "show", "hide"], function (t, e) {
                var i = Z.fn[e];
                Z.fn[e] = function (t, n, o) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(D(e, !0), t, n, o)
                }
            }), Z.each({
                slideDown: D("show"),
                slideUp: D("hide"),
                slideToggle: D("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (t, e) {
                Z.fn[t] = function (t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), Z.timers = [], Z.fx.tick = function () {
                var t, e = 0,
                    i = Z.timers;
                for (Ut = Z.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || Z.fx.stop(), Ut = void 0
            }, Z.fx.timer = function (t) {
                Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
            }, Z.fx.interval = 13, Z.fx.start = function () {
                Yt || (Yt = setInterval(Z.fx.tick, Z.fx.interval))
            }, Z.fx.stop = function () {
                clearInterval(Yt), Yt = null
            }, Z.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, Z.fn.delay = function (t, e) {
                return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function () {
                        clearTimeout(n)
                    }
                })
            },
            function () {
                var t = J.createElement("input"),
                    e = J.createElement("select"),
                    i = e.appendChild(J.createElement("option"));
                t.type = "checkbox", Q.checkOn = "" !== t.value, Q.optSelected = i.selected, e.disabled = !0, Q.optDisabled = !i.disabled, (t = J.createElement("input")).value = "t", t.type = "radio", Q.radioValue = "t" === t.value
            }();
        var te, ee = Z.expr.attrHandle;
        Z.fn.extend({
            attr: function (t, e) {
                return ft(this, Z.attr, t, e, arguments.length > 1)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    Z.removeAttr(this, t)
                })
            }
        }), Z.extend({
            attr: function (t, e, i) {
                var n, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? Z.prop(t, e, i) : (1 === s && Z.isXMLDoc(t) || (e = e.toLowerCase(), n = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? te : void 0)), void 0 === i ? n && "get" in n && null !== (o = n.get(t, e)) ? o : (o = Z.find.attr(t, e), null == o ? void 0 : o) : null !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""), i) : void Z.removeAttr(t, e))
            },
            removeAttr: function (t, e) {
                var i, n, o = 0,
                    s = e && e.match(ut);
                if (s && 1 === t.nodeType)
                    for (; i = s[o++];) n = Z.propFix[i] || i, Z.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!Q.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }
        }), te = {
            set: function (t, e, i) {
                return !1 === e ? Z.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = ee[e] || Z.find.attr;
            ee[e] = function (t, e, n) {
                var o, s;
                return n || (s = ee[e], ee[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, ee[e] = s), o
            }
        });
        var ie = /^(?:input|select|textarea|button)$/i;
        Z.fn.extend({
            prop: function (t, e) {
                return ft(this, Z.prop, t, e, arguments.length > 1)
            },
            removeProp: function (t) {
                return this.each(function () {
                    delete this[Z.propFix[t] || t]
                })
            }
        }), Z.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function (t, e, i) {
                var n, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !Z.isXMLDoc(t)) && (e = Z.propFix[e] || e, o = Z.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        return t.hasAttribute("tabindex") || ie.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }), Q.optSelected || (Z.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            Z.propFix[this.toLowerCase()] = this
        });
        var ne = /[\t\r\n\f]/g;
        Z.fn.extend({
            addClass: function (t) {
                var e, i, n, o, s, r, a = "string" == typeof t && t,
                    l = 0,
                    h = this.length;
                if (Z.isFunction(t)) return this.each(function (e) {
                    Z(this).addClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(ut) || []; l < h; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ne, " ") : " ")) {
                            for (s = 0; o = e[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            r = Z.trim(n), i.className !== r && (i.className = r)
                        }
                return this
            },
            removeClass: function (t) {
                var e, i, n, o, s, r, a = 0 === arguments.length || "string" == typeof t && t,
                    l = 0,
                    h = this.length;
                if (Z.isFunction(t)) return this.each(function (e) {
                    Z(this).removeClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(ut) || []; l < h; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ne, " ") : "")) {
                            for (s = 0; o = e[s++];)
                                for (; n.indexOf(" " + o + " ") >= 0;) n = n.replace(" " + o + " ", " ");
                            r = t ? Z.trim(n) : "", i.className !== r && (i.className = r)
                        }
                return this
            },
            toggleClass: function (t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : Z.isFunction(t) ? this.each(function (i) {
                    Z(this).toggleClass(t.call(this, i, this.className, e), e)
                }) : this.each(function () {
                    if ("string" === i)
                        for (var e, n = 0, o = Z(this), s = t.match(ut) || []; e = s[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else "undefined" !== i && "boolean" !== i || (this.className && gt.set(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : gt.get(this, "__className__") || "")
                })
            },
            hasClass: function (t) {
                for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(ne, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        });
        var oe = /\r/g;
        Z.fn.extend({
            val: function (t) {
                var e, i, n, o = this[0]; {
                    if (arguments.length) return n = Z.isFunction(t), this.each(function (i) {
                        var o;
                        1 === this.nodeType && (null == (o = n ? t.call(this, i, Z(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function (t) {
                            return null == t ? "" : t + ""
                        })), (e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return (e = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(oe, "") : null == i ? "" : i)
                }
            }
        }), Z.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = Z.find.attr(t, "value");
                        return null != e ? e : Z.trim(Z.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        for (var e, i, n = t.options, o = t.selectedIndex, s = "select-one" === t.type || o < 0, r = s ? null : [], a = s ? o + 1 : n.length, l = o < 0 ? a : s ? o : 0; l < a; l++)
                            if (((i = n[l]).selected || l === o) && (Q.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !Z.nodeName(i.parentNode, "optgroup"))) {
                                if (e = Z(i).val(), s) return e;
                                r.push(e)
                            }
                        return r
                    },
                    set: function (t, e) {
                        for (var i, n, o = t.options, s = Z.makeArray(e), r = o.length; r--;)((n = o[r]).selected = Z.inArray(n.value, s) >= 0) && (i = !0);
                        return i || (t.selectedIndex = -1), s
                    }
                }
            }
        }), Z.each(["radio", "checkbox"], function () {
            Z.valHooks[this] = {
                set: function (t, e) {
                    if (Z.isArray(e)) return t.checked = Z.inArray(Z(t).val(), e) >= 0
                }
            }, Q.checkOn || (Z.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            Z.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), Z.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function (t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        });
        var se = Z.now(),
            re = /\?/;
        Z.parseJSON = function (t) {
            return JSON.parse(t + "")
        }, Z.parseXML = function (t) {
            var e, i;
            if (!t || "string" != typeof t) return null;
            try {
                i = new DOMParser, e = i.parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || Z.error("Invalid XML: " + t), e
        };
        var ae = /#.*$/,
            le = /([?&])_=[^&]*/,
            he = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ce = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ue = /^(?:GET|HEAD)$/,
            de = /^\/\//,
            pe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            fe = {},
            ge = {},
            me = "*/".concat("*"),
            ve = t.location.href,
            ye = pe.exec(ve.toLowerCase()) || [];
        Z.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ve,
                type: "GET",
                isLocal: ce.test(ye[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": me,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": Z.parseJSON,
                    "text xml": Z.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? M(M(t, Z.ajaxSettings), e) : M(Z.ajaxSettings, t)
            },
            ajaxPrefilter: O(fe),
            ajaxTransport: O(ge),
            ajax: function (t, e) {
                function i(t, e, i, r) {
                    var l, c, v, y, x, C = e;
                    2 !== b && (b = 2, a && clearTimeout(a), n = void 0, s = r || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (y = W(u, w, i)), y = j(u, y, w, l), l ? (u.ifModified && ((x = w.getResponseHeader("Last-Modified")) && (Z.lastModified[o] = x), (x = w.getResponseHeader("etag")) && (Z.etag[o] = x)), 204 === t || "HEAD" === u.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, c = y.data, l = !(v = y.error))) : (v = C, !t && C || (C = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (e || C) + "", l ? f.resolveWith(d, [c, C, w]) : f.rejectWith(d, [w, C, v]), w.statusCode(m), m = void 0, h && p.trigger(l ? "ajaxSuccess" : "ajaxError", [w, u, l ? c : v]), g.fireWith(d, [w, C]), h && (p.trigger("ajaxComplete", [w, u]), --Z.active || Z.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, o, s, r, a, l, h, c, u = Z.ajaxSetup({}, e),
                    d = u.context || u,
                    p = u.context && (d.nodeType || d.jquery) ? Z(d) : Z.event,
                    f = Z.Deferred(),
                    g = Z.Callbacks("once memory"),
                    m = u.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === b) {
                                if (!r)
                                    for (r = {}; e = he.exec(s);) r[e[1].toLowerCase()] = e[2];
                                e = r[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function (t, e) {
                            var i = t.toLowerCase();
                            return b || (t = y[i] = y[i] || t, v[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return b || (u.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (b < 2)
                                    for (e in t) m[e] = [m[e], t[e]];
                                else w.always(t[w.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || x;
                            return n && n.abort(e), i(0, e), this
                        }
                    };
                if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || ve) + "").replace(ae, "").replace(de, ye[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = Z.trim(u.dataType || "*").toLowerCase().match(ut) || [""], null == u.crossDomain && (l = pe.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === ye[1] && l[2] === ye[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (ye[3] || ("http:" === ye[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = Z.param(u.data, u.traditional)), I(fe, u, e, w), 2 === b) return w;
                (h = Z.event && u.global) && 0 == Z.active++ && Z.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !ue.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (re.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = le.test(o) ? o.replace(le, "$1_=" + se++) : o + (re.test(o) ? "&" : "?") + "_=" + se++)), u.ifModified && (Z.lastModified[o] && w.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && w.setRequestHeader("If-None-Match", Z.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || e.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + me + "; q=0.01" : "") : u.accepts["*"]);
                for (c in u.headers) w.setRequestHeader(c, u.headers[c]);
                if (u.beforeSend && (!1 === u.beforeSend.call(d, w, u) || 2 === b)) return w.abort();
                x = "abort";
                for (c in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[c](u[c]);
                if (n = I(ge, u, e, w)) {
                    w.readyState = 1, h && p.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (a = setTimeout(function () {
                        w.abort("timeout")
                    }, u.timeout));
                    try {
                        b = 1, n.send(v, i)
                    } catch (t) {
                        if (!(b < 2)) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return w
            },
            getJSON: function (t, e, i) {
                return Z.get(t, e, i, "json")
            },
            getScript: function (t, e) {
                return Z.get(t, void 0, e, "script")
            }
        }), Z.each(["get", "post"], function (t, e) {
            Z[e] = function (t, i, n, o) {
                return Z.isFunction(i) && (o = o || n, n = i, i = void 0), Z.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: i,
                    success: n
                })
            }
        }), Z._evalUrl = function (t) {
            return Z.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, Z.fn.extend({
            wrapAll: function (t) {
                var e;
                return Z.isFunction(t) ? this.each(function (e) {
                    Z(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function (t) {
                return Z.isFunction(t) ? this.each(function (e) {
                    Z(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = Z(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function (t) {
                var e = Z.isFunction(t);
                return this.each(function (i) {
                    Z(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                }).end()
            }
        }), Z.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }, Z.expr.filters.visible = function (t) {
            return !Z.expr.filters.hidden(t)
        };
        var be = /%20/g,
            xe = /\[\]$/,
            we = /\r?\n/g,
            Ce = /^(?:submit|button|image|reset|file)$/i,
            Se = /^(?:input|select|textarea|keygen)/i;
        Z.param = function (t, e) {
            var i, n = [],
                o = function (t, e) {
                    e = Z.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function () {
                o(this.name, this.value)
            });
            else
                for (i in t) B(i, t[i], e, o);
            return n.join("&").replace(be, "+")
        }, Z.fn.extend({
            serialize: function () {
                return Z.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = Z.prop(this, "elements");
                    return t ? Z.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !Z(this).is(":disabled") && Se.test(this.nodeName) && !Ce.test(t) && (this.checked || !Ct.test(t))
                }).map(function (t, e) {
                    var i = Z(this).val();
                    return null == i ? null : Z.isArray(i) ? Z.map(i, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(we, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(we, "\r\n")
                    }
                }).get()
            }
        }), Z.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest
            } catch (t) {}
        };
        var Te = 0,
            ke = {},
            Pe = {
                0: 200,
                1223: 204
            },
            Ee = Z.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function () {
            for (var t in ke) ke[t]()
        }), Q.cors = !!Ee && "withCredentials" in Ee, Q.ajax = Ee = !!Ee, Z.ajaxTransport(function (t) {
            var e;
            if (Q.cors || Ee && !t.crossDomain) return {
                send: function (i, n) {
                    var o, s = t.xhr(),
                        r = ++Te;
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) s[o] = t.xhrFields[o];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i) s.setRequestHeader(o, i[o]);
                    e = function (t) {
                        return function () {
                            e && (delete ke[r], e = s.onload = s.onerror = null, "abort" === t ? s.abort() : "error" === t ? n(s.status, s.statusText) : n(Pe[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                                text: s.responseText
                            } : void 0, s.getAllResponseHeaders()))
                        }
                    }, s.onload = e(), s.onerror = e("error"), e = ke[r] = e("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function () {
                    e && e()
                }
            }
        }), Z.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (t) {
                    return Z.globalEval(t), t
                }
            }
        }), Z.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), Z.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function (n, o) {
                        e = Z("<script>").prop({
                            async: !0,
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function (t) {
                            e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), J.head.appendChild(e[0])
                    },
                    abort: function () {
                        i && i()
                    }
                }
            }
        });
        var Ae = [],
            Le = /(=)\?(?=&|$)|\?\?/;
        Z.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Ae.pop() || Z.expando + "_" + se++;
                return this[t] = !0, t
            }
        }), Z.ajaxPrefilter("json jsonp", function (e, i, n) {
            var o, s, r, a = !1 !== e.jsonp && (Le.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Le.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Le, "$1" + o) : !1 !== e.jsonp && (e.url += (re.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return r || Z.error(o + " was not called"), r[0]
            }, e.dataTypes[0] = "json", s = t[o], t[o] = function () {
                r = arguments
            }, n.always(function () {
                t[o] = s, e[o] && (e.jsonpCallback = i.jsonpCallback, Ae.push(o)), r && Z.isFunction(s) && s(r[0]), r = s = void 0
            }), "script"
        }), Z.parseHTML = function (t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || J;
            var n = st.exec(t),
                o = !i && [];
            return n ? [e.createElement(n[1])] : (n = Z.buildFragment([t], e, o), o && o.length && Z(o).remove(), Z.merge([], n.childNodes))
        };
        var De = Z.fn.load;
        Z.fn.load = function (t, e, i) {
            if ("string" != typeof t && De) return De.apply(this, arguments);
            var n, o, s, r = this,
                a = t.indexOf(" ");
            return a >= 0 && (n = Z.trim(t.slice(a)), t = t.slice(0, a)), Z.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && Z.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function (t) {
                s = arguments, r.html(n ? Z("<div>").append(Z.parseHTML(t)).find(n) : t)
            }).complete(i && function (t, e) {
                r.each(i, s || [t.responseText, e, t])
            }), this
        }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            Z.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), Z.expr.filters.animated = function (t) {
            return Z.grep(Z.timers, function (e) {
                return t === e.elem
            }).length
        };
        var Fe = t.document.documentElement;
        Z.offset = {
            setOffset: function (t, e, i) {
                var n, o, s, r, a, l, h = Z.css(t, "position"),
                    c = Z(t),
                    u = {};
                "static" === h && (t.style.position = "relative"), a = c.offset(), s = Z.css(t, "top"), l = Z.css(t, "left"), ("absolute" === h || "fixed" === h) && (s + l).indexOf("auto") > -1 ? (r = (n = c.position()).top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), Z.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + o), "using" in e ? e.using.call(t, u) : c.css(u)
            }
        }, Z.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    Z.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    s = n && n.ownerDocument;
                if (s) return e = s.documentElement, Z.contains(e, n) ? (void 0 !== n.getBoundingClientRect && (o = n.getBoundingClientRect()), i = H(s), {
                    top: o.top + i.pageYOffset - e.clientTop,
                    left: o.left + i.pageXOffset - e.clientLeft
                }) : o
            },
            position: function () {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === Z.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (n = t.offset()), n.top += Z.css(t[0], "borderTopWidth", !0), n.left += Z.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - Z.css(i, "marginTop", !0),
                        left: e.left - n.left - Z.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || Fe; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                    return t || Fe
                })
            }
        }), Z.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, i) {
            var n = "pageYOffset" === i;
            Z.fn[e] = function (o) {
                return ft(this, function (e, o, s) {
                    var r = H(e);
                    if (void 0 === s) return r ? r[i] : e[o];
                    r ? r.scrollTo(n ? t.pageXOffset : s, n ? s : t.pageYOffset) : e[o] = s
                }, e, o, arguments.length, null)
            }
        }), Z.each(["top", "left"], function (t, e) {
            Z.cssHooks[e] = C(Q.pixelPosition, function (t, i) {
                if (i) return i = w(t, e), jt.test(i) ? Z(t).position()[e] + "px" : i
            })
        }), Z.each({
            Height: "height",
            Width: "width"
        }, function (t, e) {
            Z.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function (i, n) {
                Z.fn[n] = function (n, o) {
                    var s = arguments.length && (i || "boolean" != typeof n),
                        r = i || (!0 === n || !0 === o ? "margin" : "border");
                    return ft(this, function (e, i, n) {
                        var o;
                        return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? Z.css(e, i, r) : Z.style(e, i, n, r)
                    }, e, s ? n : void 0, s, null)
                }
            })
        }), Z.fn.size = function () {
            return this.length
        }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return Z
        });
        var Re = t.jQuery,
            $e = t.$;
        return Z.noConflict = function (e) {
            return t.$ === Z && (t.$ = $e), e && t.jQuery === Z && (t.jQuery = Re), Z
        }, void 0 === e && (t.jQuery = t.$ = Z), Z
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var o = function () {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        n = function (e) {
            t(e).on("click", i, this.close)
        };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
        function i() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            s = o.attr("data-target");
        s || (s = (s = o.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(s);
        e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.button"),
                s = "object" == typeof e && e;
            o || n.data("bs.button", o = new i(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.4", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function (e) {
        var i = "disabled",
            n = this.$element,
            o = n.is("input") ? "val" : "html",
            s = n.data();
        e += "Text", null == s.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function () {
            n[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : s.slide;
            o || n.data("bs.carousel", o = new i(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
        })
    }
    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(n)
    }, i.prototype.to = function (t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    }, i.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    }, i.prototype.slide = function (e, n) {
        var o = this.$element.find(".item.active"),
            s = n || this.getItemForDirection(e, o),
            r = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(s)]);
                u && u.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function () {
                s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(d)), r && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = n, this
    };
    var o = function (i) {
        var n, o = t(this),
            s = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var r = t.extend({}, s.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.collapse"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || i.data("bs.collapse", o = new n(this, s)), "string" == typeof e && o[e]()
        })
    }
    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, n.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition) return o.call(this);
                this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION)
            }
        }
    }, n.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, n) {
            var o = t(n);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var o = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
        var o = t(this);
        o.attr("data-target") || n.preventDefault();
        var s = e(o),
            r = s.data("bs.collapse") ? "toggle" : o.data();
        i.call(s, r)
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(o).remove(), t(s).each(function () {
            var n = t(this),
                o = i(n),
                s = {
                    relatedTarget: this
                };
            o.hasClass("open") && (o.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", s)))
        }))
    }

    function i(e) {
        var i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function n(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var o = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        r = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.3.4", r.prototype.toggle = function (n) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var s = i(o),
                r = s.hasClass("open");
            if (e(), !r) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, r.prototype.keydown = function (e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var n = t(this);
            if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                var o = i(n),
                    r = o.hasClass("open");
                if (!r && 27 != e.which || r && 27 == e.which) return 27 == e.which && o.find(s).trigger("focus"), n.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var h = l.index(e.target);
                    38 == e.which && h > 0 && h--, 40 == e.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', r.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', r.prototype.keydown)
}(jQuery),
function (t) {
    "use strict";

    function e(e, n) {
        return this.each(function () {
            var o = t(this),
                s = o.data("bs.modal"),
                r = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            s || o.data("bs.modal", s = new i(this, r)), "string" == typeof e ? s[e](n) : r.show && s.show(n)
        })
    }
    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var n = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            n.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var o = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? n.$dialog.one("bsTransitionEnd", function () {
                n.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var n = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && o;
            if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function () {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var n = t(this),
            o = n.attr("href"),
            s = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, s.data(), n.data());
        n.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(s, r, this)
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.tooltip"),
                s = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || n.data("bs.tooltip", o = new i(this, s)), "string" == typeof e && o[e]())
        })
    }
    var i = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function (e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
            var r = o[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function (t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i && i.$tip && i.$tip.is(":visible")) i.hoverState = "in";
        else {
            if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
            i.timeout = setTimeout(function () {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)
        }
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
        i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var o = this,
                s = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(a);
            h && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
            var c = this.getPosition(),
                u = s[0].offsetWidth,
                d = s[0].offsetHeight;
            if (h) {
                var p = a,
                    f = this.options.container ? t(this.options.container) : this.$element.parent(),
                    g = this.getPosition(f);
                a = "bottom" == a && c.bottom + d > g.bottom ? "top" : "top" == a && c.top - d < g.top ? "bottom" : "right" == a && c.right + u > g.width ? "left" : "left" == a && c.left - u < g.left ? "right" : a, s.removeClass(p).addClass(a)
            }
            var m = this.getCalculatedOffset(a, c, u, d);
            this.applyPlacement(m, a);
            var v = function () {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var n = this.tip(),
            o = n[0].offsetWidth,
            s = n[0].offsetHeight,
            r = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top = e.top + r, e.left = e.left + a, t.offset.setOffset(n[0], t.extend({
            using: function (t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            h = n[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var c = this.getViewportAdjustedDelta(i, e, l, h);
        c.left ? e.left += c.left : e.top += c.top;
        var u = /top|bottom/.test(i),
            d = u ? 2 * c.left - o + l : 2 * c.top - s + h,
            p = u ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(d, n[0][p], u)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function n() {
            "in" != o.hoverState && s.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            s = t(this.$tip),
            r = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        var i = (e = e || this.$element)[0],
            n = "BODY" == i.tagName,
            o = i.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var s = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            r = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, r, a, s)
    }, i.prototype.getCalculatedOffset = function (t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll,
                l = e.top + s - r.scroll + n;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var h = e.left - s,
                c = e.left + s + i;
            h < r.left ? o.left = r.left - h : c > r.width && (o.left = r.left + r.width - c)
        }
        return o
    }, i.prototype.getTitle = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, i.prototype.getUID = function (t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = n, this
    }
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.popover"),
                s = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || n.data("bs.popover", o = new i(this, s)), "string" == typeof e && o[e]())
        })
    }
    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.4", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = n, this
    }
}(jQuery),
function (t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            o || n.data("bs.scrollspy", o = new e(this, s)), "string" == typeof i && o[i]()
        })
    }
    e.VERSION = "3.3.4", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                s = /^#./.test(o) && t(o);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + n, o]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            o = this.offsets,
            s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.tab");
            o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
        })
    }
    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function () {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, n, o) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var r = n.find("> .active"),
            a = o && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), r.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = n, this
    };
    var o = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.affix"),
                s = "object" == typeof e && e;
            o || n.data("bs.affix", o = new i(this, s)), "string" == typeof e && o[e]()
        })
    }
    var i = function (e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.4", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, n) {
        var o = this.$target.scrollTop(),
            s = this.$element.offset(),
            r = this.$target.height();
        if (null != i && "top" == this.affixed) return o < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= s.top) && "bottom" : !(o + r <= t - n) && "bottom";
        var a = null == this.affixed,
            l = a ? o : s.top,
            h = a ? r : e;
        return null != i && o <= i ? "top" : null != n && l + h >= t - n && "bottom"
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                n = this.options.offset,
                o = n.top,
                s = n.bottom,
                r = t(document.body).height();
            "object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
            var a = this.getState(r, e, o, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: r - e - s
            })
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = n, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery),
function () {
    "use strict";
    var t = this,
        e = t.Chart,
        i = function (t) {
            this.canvas = t.canvas, this.ctx = t;
            var e = function (t, e) {
                    return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e)
                },
                i = this.width = e(t.canvas, "Width"),
                o = this.height = e(t.canvas, "Height");
            t.canvas.width = i, t.canvas.height = o;
            var i = this.width = t.canvas.width,
                o = this.height = t.canvas.height;
            return this.aspectRatio = this.width / this.height, n.retinaScale(this), this
        };
    i.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            customTooltips: !1,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            onAnimationProgress: function () {},
            onAnimationComplete: function () {}
        }
    }, i.types = {};
    var n = i.helpers = {},
        o = n.each = function (t, e, i) {
            var n = Array.prototype.slice.call(arguments, 3);
            if (t)
                if (t.length === +t.length) {
                    var o;
                    for (o = 0; o < t.length; o++) e.apply(i, [t[o], o].concat(n))
                } else
                    for (var s in t) e.apply(i, [t[s], s].concat(n))
        },
        s = n.clone = function (t) {
            var e = {};
            return o(t, function (i, n) {
                t.hasOwnProperty(n) && (e[n] = i)
            }), e
        },
        r = n.extend = function (t) {
            return o(Array.prototype.slice.call(arguments, 1), function (e) {
                o(e, function (i, n) {
                    e.hasOwnProperty(n) && (t[n] = i)
                })
            }), t
        },
        a = n.merge = function (t, e) {
            var i = Array.prototype.slice.call(arguments, 0);
            return i.unshift({}), r.apply(null, i)
        },
        l = n.indexOf = function (t, e) {
            if (Array.prototype.indexOf) return t.indexOf(e);
            for (var i = 0; i < t.length; i++)
                if (t[i] === e) return i;
            return -1
        },
        h = (n.where = function (t, e) {
            var i = [];
            return n.each(t, function (t) {
                e(t) && i.push(t)
            }), i
        }, n.findNextWhere = function (t, e, i) {
            i || (i = -1);
            for (var n = i + 1; n < t.length; n++) {
                var o = t[n];
                if (e(o)) return o
            }
        }, n.findPreviousWhere = function (t, e, i) {
            i || (i = t.length);
            for (var n = i - 1; n >= 0; n--) {
                var o = t[n];
                if (e(o)) return o
            }
        }, n.inherits = function (t) {
            var e = this,
                i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                    return e.apply(this, arguments)
                },
                n = function () {
                    this.constructor = i
                };
            return n.prototype = e.prototype, i.prototype = new n, i.extend = h, t && r(i.prototype, t), i.__super__ = e.prototype, i
        }),
        c = n.noop = function () {},
        u = n.uid = function () {
            var t = 0;
            return function () {
                return "chart-" + t++
            }
        }(),
        d = n.warn = function (t) {
            window.console && "function" == typeof window.console.warn && console.warn(t)
        },
        p = n.amd = "function" == typeof define && define.amd,
        f = n.isNumber = function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        g = n.max = function (t) {
            return Math.max.apply(Math, t)
        },
        m = n.min = function (t) {
            return Math.min.apply(Math, t)
        },
        v = (n.cap = function (t, e, i) {
            if (f(e)) {
                if (t > e) return e
            } else if (f(i) && t < i) return i;
            return t
        }, n.getDecimalPlaces = function (t) {
            return t % 1 != 0 && f(t) ? t.toString().split(".")[1].length : 0
        }),
        y = n.radians = function (t) {
            return t * (Math.PI / 180)
        },
        b = (n.getAngleFromPoint = function (t, e) {
            var i = e.x - t.x,
                n = e.y - t.y,
                o = Math.sqrt(i * i + n * n),
                s = 2 * Math.PI + Math.atan2(n, i);
            return i < 0 && n < 0 && (s += 2 * Math.PI), {
                angle: s,
                distance: o
            }
        }, n.aliasPixel = function (t) {
            return t % 2 == 0 ? 0 : .5
        }),
        x = (n.splineCurve = function (t, e, i, n) {
            var o = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
                s = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
                r = n * o / (o + s),
                a = n * s / (o + s);
            return {
                inner: {
                    x: e.x - r * (i.x - t.x),
                    y: e.y - r * (i.y - t.y)
                },
                outer: {
                    x: e.x + a * (i.x - t.x),
                    y: e.y + a * (i.y - t.y)
                }
            }
        }, n.calculateOrderOfMagnitude = function (t) {
            return Math.floor(Math.log(t) / Math.LN10)
        }),
        w = (n.calculateScaleRange = function (t, e, i, n, o) {
            var s = Math.floor(e / (1.5 * i)),
                r = 2 >= s,
                a = g(t),
                l = m(t);
            a === l && (a += .5, l >= .5 && !n ? l -= .5 : a += .5);
            for (var h = Math.abs(a - l), c = x(h), u = Math.ceil(a / (1 * Math.pow(10, c))) * Math.pow(10, c), d = n ? 0 : Math.floor(l / (1 * Math.pow(10, c))) * Math.pow(10, c), p = u - d, f = Math.pow(10, c), v = Math.round(p / f);
                (v > s || 2 * v < s) && !r;)
                if (v > s) f *= 2, (v = Math.round(p / f)) % 1 != 0 && (r = !0);
                else if (o && c >= 0) {
                if (f / 2 % 1 != 0) break;
                f /= 2, v = Math.round(p / f)
            } else f /= 2, v = Math.round(p / f);
            return r && (f = p / (v = 2)), {
                steps: v,
                stepValue: f,
                min: d,
                max: d + v * f
            }
        }, n.template = function (t, e) {
            if (t instanceof Function) return t(e);
            var i = {};
            return function (t, e) {
                var n = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[t] = i[t];
                return e ? n(e) : n
            }(t, e)
        }),
        C = (n.generateLabels = function (t, e, i, n) {
            var s = new Array(e);
            return labelTemplateString && o(s, function (e, o) {
                s[o] = w(t, {
                    value: i + n * (o + 1)
                })
            }), s
        }, n.easingEffects = {
            linear: function (t) {
                return t
            },
            easeInQuad: function (t) {
                return t * t
            },
            easeOutQuad: function (t) {
                return -1 * t * (t - 2)
            },
            easeInOutQuad: function (t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function (t) {
                return t * t * t
            },
            easeOutCubic: function (t) {
                return 1 * ((t = t / 1 - 1) * t * t + 1)
            },
            easeInOutCubic: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function (t) {
                return t * t * t * t
            },
            easeOutQuart: function (t) {
                return -1 * ((t = t / 1 - 1) * t * t * t - 1)
            },
            easeInOutQuart: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function (t) {
                return 1 * (t /= 1) * t * t * t * t
            },
            easeOutQuint: function (t) {
                return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
            },
            easeInOutQuint: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function (t) {
                return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
            },
            easeOutSine: function (t) {
                return 1 * Math.sin(t / 1 * (Math.PI / 2))
            },
            easeInOutSine: function (t) {
                return -.5 * (Math.cos(Math.PI * t / 1) - 1)
            },
            easeInExpo: function (t) {
                return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
            },
            easeOutExpo: function (t) {
                return 1 === t ? 1 : 1 * (1 - Math.pow(2, -10 * t / 1))
            },
            easeInOutExpo: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
            },
            easeInCirc: function (t) {
                return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
            },
            easeOutCirc: function (t) {
                return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
            },
            easeInOutCirc: function (t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function (t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i))
            },
            easeOutElastic: function (t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
            },
            easeInOutElastic: function (t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .3 * 1.5 * 1), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
            },
            easeInBack: function (t) {
                var e = 1.70158;
                return 1 * (t /= 1) * t * ((e + 1) * t - e)
            },
            easeOutBack: function (t) {
                var e = 1.70158;
                return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
            },
            easeInOutBack: function (t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: function (t) {
                return 1 - C.easeOutBounce(1 - t)
            },
            easeOutBounce: function (t) {
                return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t * 1 : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            },
            easeInOutBounce: function (t) {
                return t < .5 ? .5 * C.easeInBounce(2 * t) : .5 * C.easeOutBounce(2 * t - 1) + .5
            }
        }),
        S = n.requestAnimFrame = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                return window.setTimeout(t, 1e3 / 60)
            }
        }(),
        T = n.cancelAnimFrame = function () {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
                return window.clearTimeout(t, 1e3 / 60)
            }
        }(),
        k = (n.animationLoop = function (t, e, i, n, o, s) {
            var r = 0,
                a = C[i] || C.linear,
                l = function () {
                    var i = ++r / e,
                        h = a(i);
                    t.call(s, h, i, r), n.call(s, h, i), r < e ? s.animationFrame = S(l) : o.apply(s)
                };
            S(l)
        }, n.getRelativePosition = function (t) {
            var e, i, n = t.originalEvent || t,
                o = (t.currentTarget || t.srcElement).getBoundingClientRect();
            return n.touches ? (e = n.touches[0].clientX - o.left, i = n.touches[0].clientY - o.top) : (e = n.clientX - o.left, i = n.clientY - o.top), {
                x: e,
                y: i
            }
        }, n.addEvent = function (t, e, i) {
            t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
        }),
        P = n.removeEvent = function (t, e, i) {
            t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = c
        },
        E = (n.bindEvents = function (t, e, i) {
            t.events || (t.events = {}), o(e, function (e) {
                t.events[e] = function () {
                    i.apply(t, arguments)
                }, k(t.chart.canvas, e, t.events[e])
            })
        }, n.unbindEvents = function (t, e) {
            o(e, function (e, i) {
                P(t.chart.canvas, i, e)
            })
        }),
        A = n.getMaximumWidth = function (t) {
            return t.parentNode.clientWidth
        },
        L = n.getMaximumHeight = function (t) {
            return t.parentNode.clientHeight
        },
        D = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function (t) {
            var e = t.ctx,
                i = t.canvas.width,
                n = t.canvas.height;
            window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
        }),
        F = n.clear = function (t) {
            t.ctx.clearRect(0, 0, t.width, t.height)
        },
        R = n.fontString = function (t, e, i) {
            return e + " " + t + "px " + i
        },
        $ = n.longestText = function (t, e, i) {
            t.font = e;
            var n = 0;
            return o(i, function (e) {
                var i = t.measureText(e).width;
                n = i > n ? i : n
            }), n
        },
        N = n.drawRoundedRectangle = function (t, e, i, n, o, s) {
            t.beginPath(), t.moveTo(e + s, i), t.lineTo(e + n - s, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + o - s), t.quadraticCurveTo(e + n, i + o, e + n - s, i + o), t.lineTo(e + s, i + o), t.quadraticCurveTo(e, i + o, e, i + o - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + s, i), t.closePath()
        };
    i.instances = {}, r((i.Type = function (t, e, n) {
        this.options = e, this.chart = n, this.id = u(), i.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t)
    }).prototype, {
        initialize: function () {
            return this
        },
        clear: function () {
            return F(this.chart), this
        },
        stop: function () {
            return T(this.animationFrame), this
        },
        resize: function (t) {
            this.stop();
            var e = this.chart.canvas,
                i = A(this.chart.canvas),
                n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : L(this.chart.canvas);
            return e.width = this.chart.width = i, e.height = this.chart.height = n, D(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
        },
        reflow: c,
        render: function (t) {
            return t && this.reflow(), this.options.animation && !t ? n.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
        },
        generateLegend: function () {
            return w(this.options.legendTemplate, this)
        },
        destroy: function () {
            this.clear(), E(this, this.events);
            var t = this.chart.canvas;
            t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete i.instances[this.id]
        },
        showTooltip: function (t, e) {
            if (void 0 === this.activeElements && (this.activeElements = []), function (t) {
                    var e = !1;
                    return t.length !== this.activeElements.length ? e = !0 : (o(t, function (t, i) {
                        t !== this.activeElements[i] && (e = !0)
                    }, this), e)
                }.call(this, t) || e) {
                if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
                    if (this.datasets && this.datasets.length > 1) {
                        for (var s, r, a = this.datasets.length - 1; a >= 0 && (s = this.datasets[a].points || this.datasets[a].bars || this.datasets[a].segments, -1 === (r = l(s, t[0]))); a--);
                        var h = [],
                            c = [],
                            u = function (t) {
                                var e, i, o, s, a, l = [],
                                    u = [],
                                    d = [];
                                return n.each(this.datasets, function (t) {
                                    (e = t.points || t.bars || t.segments)[r] && e[r].hasValue() && l.push(e[r])
                                }), n.each(l, function (t) {
                                    u.push(t.x), d.push(t.y), h.push(n.template(this.options.multiTooltipTemplate, t)), c.push({
                                        fill: t._saved.fillColor || t.fillColor,
                                        stroke: t._saved.strokeColor || t.strokeColor
                                    })
                                }, this), a = m(d), o = g(d), s = m(u), i = g(u), {
                                    x: s > this.chart.width / 2 ? s : i,
                                    y: (a + o) / 2
                                }
                            }.call(this, r);
                        new i.MultiTooltip({
                            x: u.x,
                            y: u.y,
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            xOffset: this.options.tooltipXOffset,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            titleTextColor: this.options.tooltipTitleFontColor,
                            titleFontFamily: this.options.tooltipTitleFontFamily,
                            titleFontStyle: this.options.tooltipTitleFontStyle,
                            titleFontSize: this.options.tooltipTitleFontSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            labels: h,
                            legendColors: c,
                            legendColorBackground: this.options.multiTooltipKeyBackground,
                            title: t[0].label,
                            chart: this.chart,
                            ctx: this.chart.ctx,
                            custom: this.options.customTooltips
                        }).draw()
                    } else o(t, function (t) {
                        var e = t.tooltipPosition();
                        new i.Tooltip({
                            x: Math.round(e.x),
                            y: Math.round(e.y),
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            caretHeight: this.options.tooltipCaretSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            text: w(this.options.tooltipTemplate, t),
                            chart: this.chart,
                            custom: this.options.customTooltips
                        }).draw()
                    }, this);
                return this
            }
        },
        toBase64Image: function () {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }), i.Type.extend = function (t) {
        var e = this,
            n = function () {
                return e.apply(this, arguments)
            };
        if (n.prototype = s(e.prototype), r(n.prototype, t), n.extend = i.Type.extend, t.name || e.prototype.name) {
            var o = t.name || e.prototype.name,
                l = i.defaults[e.prototype.name] ? s(i.defaults[e.prototype.name]) : {};
            i.defaults[o] = r(l, t.defaults), i.types[o] = n, i.prototype[o] = function (t, e) {
                var s = a(i.defaults.global, i.defaults[o], e || {});
                return new n(t, s, this)
            }
        } else d("Name not provided for this chart, so it hasn't been registered");
        return e
    }, r((i.Element = function (t) {
        r(this, t), this.initialize.apply(this, arguments), this.save()
    }).prototype, {
        initialize: function () {},
        restore: function (t) {
            return t ? o(t, function (t) {
                this[t] = this._saved[t]
            }, this) : r(this, this._saved), this
        },
        save: function () {
            return this._saved = s(this), delete this._saved._saved, this
        },
        update: function (t) {
            return o(t, function (t, e) {
                this._saved[e] = this[e], this[e] = t
            }, this), this
        },
        transition: function (t, e) {
            return o(t, function (t, i) {
                this[i] = (t - this._saved[i]) * e + this._saved[i]
            }, this), this
        },
        tooltipPosition: function () {
            return {
                x: this.x,
                y: this.y
            }
        },
        hasValue: function () {
            return f(this.value)
        }
    }), i.Element.extend = h, i.Point = i.Element.extend({
        display: !0,
        inRange: function (t, e) {
            var i = this.hitDetectionRadius + this.radius;
            return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2)
        },
        draw: function () {
            if (this.display) {
                var t = this.ctx;
                t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
            }
        }
    }), i.Arc = i.Element.extend({
        inRange: function (t, e) {
            var i = n.getAngleFromPoint(this, {
                    x: t,
                    y: e
                }),
                o = i.angle >= this.startAngle && i.angle <= this.endAngle,
                s = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
            return o && s
        },
        tooltipPosition: function () {
            var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
                x: this.x + Math.cos(t) * e,
                y: this.y + Math.sin(t) * e
            }
        },
        draw: function (t) {
            var e = this.ctx;
            e.beginPath(), e.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), e.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), e.closePath(), e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, e.fill(), e.lineJoin = "bevel", this.showStroke && e.stroke()
        }
    }), i.Rectangle = i.Element.extend({
        draw: function () {
            var t = this.ctx,
                e = this.width / 2,
                i = this.x - e,
                n = this.x + e,
                o = this.base - (this.base - this.y),
                s = this.strokeWidth / 2;
            this.showStroke && (i += s, n -= s, o += s), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, o), t.lineTo(n, o), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke()
        },
        height: function () {
            return this.base - this.y
        },
        inRange: function (t, e) {
            return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
        }
    }), i.Tooltip = i.Element.extend({
        draw: function () {
            var t = this.chart.ctx;
            t.font = R(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
            var e = this.caretPadding = 2,
                i = t.measureText(this.text).width + 2 * this.xPadding,
                n = this.fontSize + 2 * this.yPadding,
                o = n + this.caretHeight + e;
            this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - o < 0 && (this.yAlign = "below");
            var s = this.x - i / 2,
                r = this.y - o;
            if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
            else {
                switch (this.yAlign) {
                    case "above":
                        t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
                        break;
                    case "below":
                        r = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill()
                }
                switch (this.xAlign) {
                    case "left":
                        s = this.x - i + (this.cornerRadius + this.caretHeight);
                        break;
                    case "right":
                        s = this.x - (this.cornerRadius + this.caretHeight)
                }
                N(t, s, r, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, s + i / 2, r + n / 2)
            }
        }
    }), i.MultiTooltip = i.Element.extend({
        initialize: function () {
            this.font = R(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = R(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
            var t = this.ctx.measureText(this.title).width,
                e = $(this.ctx, this.font, this.labels) + this.fontSize + 3,
                i = g([e, t]);
            this.width = i + 2 * this.xPadding;
            var n = this.height / 2;
            this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
        },
        getLineHeight: function (t) {
            var e = this.y - this.height / 2 + this.yPadding,
                i = t - 1;
            return 0 === t ? e + this.titleFontSize / 2 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + 1.5 * this.titleFontSize
        },
        draw: function () {
            if (this.custom) this.custom(this);
            else {
                N(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var t = this.ctx;
                t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, n.each(this.labels, function (e, i) {
                    t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                }, this)
            }
        }
    }), i.Scale = i.Element.extend({
        initialize: function () {
            this.fit()
        },
        buildYLabels: function () {
            this.yLabels = [];
            for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(w(this.templateString, {
                value: (this.min + e * this.stepValue).toFixed(t)
            }));
            this.yLabelWidth = this.display && this.showLabels ? $(this.ctx, this.font, this.yLabels) : 0
        },
        addXLabel: function (t) {
            this.xLabels.push(t), this.valuesCount++, this.fit()
        },
        removeXLabel: function () {
            this.xLabels.shift(), this.valuesCount--, this.fit()
        },
        fit: function () {
            this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
            var t, e = this.endPoint - this.startPoint;
            for (this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;) e = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(e), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation()
        },
        calculateXLabelRotation: function () {
            this.ctx.font = this.font;
            var t, e = this.ctx.measureText(this.xLabels[0]).width,
                i = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = i / 2 + 3, this.xScalePaddingLeft = e / 2 > this.yLabelWidth + 10 ? e / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                var n, o = $(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = o;
                for (var s = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > s && 0 === this.xLabelRotation || this.xLabelWidth > s && this.xLabelRotation <= 90 && this.xLabelRotation > 0;)(n = Math.cos(y(this.xLabelRotation))) * i, (t = n * e) + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = n * o;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(y(this.xLabelRotation)) * o + 3)
            } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
        },
        calculateYRange: c,
        drawingArea: function () {
            return this.startPoint - this.endPoint
        },
        calculateY: function (t) {
            var e = this.drawingArea() / (this.min - this.max);
            return this.endPoint - e * (t - this.min)
        },
        calculateX: function (t) {
            this.xLabelRotation;
            var e = (this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)) / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                i = e * t + this.xScalePaddingLeft;
            return this.offsetGridLines && (i += e / 2), Math.round(i)
        },
        update: function (t) {
            n.extend(this, t), this.fit()
        },
        draw: function () {
            var t = this.ctx,
                e = (this.endPoint - this.startPoint) / this.steps,
                i = Math.round(this.xScalePaddingLeft);
            this.display && (t.fillStyle = this.textColor, t.font = this.font, o(this.yLabels, function (o, s) {
                var r = this.endPoint - e * s,
                    a = Math.round(r),
                    l = this.showHorizontalLines;
                t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(o, i - 10, r), 0 !== s || l || (l = !0), l && t.beginPath(), s > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a += n.aliasPixel(t.lineWidth), l && (t.moveTo(i, a), t.lineTo(this.width, a), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, a), t.lineTo(i, a), t.stroke(), t.closePath()
            }, this), o(this.xLabels, function (e, i) {
                var n = this.calculateX(i) + b(this.lineWidth),
                    o = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + b(this.lineWidth),
                    s = this.xLabelRotation > 0,
                    r = this.showVerticalLines;
                0 !== i || r || (r = !0), r && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), r && (t.moveTo(o, this.endPoint), t.lineTo(o, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(o, this.endPoint), t.lineTo(o, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(n, s ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * y(this.xLabelRotation)), t.font = this.font, t.textAlign = s ? "right" : "center", t.textBaseline = s ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
            }, this))
        }
    }), i.RadialScale = i.Element.extend({
        initialize: function () {
            this.size = m([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        },
        calculateCenterOffset: function (t) {
            var e = this.drawingArea / (this.max - this.min);
            return (t - this.min) * e
        },
        update: function () {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
        },
        buildYLabels: function () {
            this.yLabels = [];
            for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(w(this.templateString, {
                value: (this.min + e * this.stepValue).toFixed(t)
            }))
        },
        getCircumference: function () {
            return 2 * Math.PI / this.valuesCount
        },
        setScaleSize: function () {
            var t, e, i, n, o, s, r, a, l, h, c, u, d = m([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                p = this.width,
                g = 0;
            for (this.ctx.font = R(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++) t = this.getPointPosition(e, d), i = this.ctx.measureText(w(this.templateString, {
                value: this.labels[e]
            })).width + 5, 0 === e || e === this.valuesCount / 2 ? (n = i / 2, t.x + n > p && (p = t.x + n, o = e), t.x - n < g && (g = t.x - n, r = e)) : e < this.valuesCount / 2 ? t.x + i > p && (p = t.x + i, o = e) : e > this.valuesCount / 2 && t.x - i < g && (g = t.x - i, r = e);
            l = g, h = Math.ceil(p - this.width), s = this.getIndexAngle(o), a = this.getIndexAngle(r), c = h / Math.sin(s + Math.PI / 2), u = l / Math.sin(a + Math.PI / 2), c = f(c) ? c : 0, u = f(u) ? u : 0, this.drawingArea = d - (u + c) / 2, this.setCenterPoint(u, c)
        },
        setCenterPoint: function (t, e) {
            var i = this.width - e - this.drawingArea,
                n = t + this.drawingArea;
            this.xCenter = (n + i) / 2, this.yCenter = this.height / 2
        },
        getIndexAngle: function (t) {
            return t * (2 * Math.PI / this.valuesCount) - Math.PI / 2
        },
        getPointPosition: function (t, e) {
            var i = this.getIndexAngle(t);
            return {
                x: Math.cos(i) * e + this.xCenter,
                y: Math.sin(i) * e + this.yCenter
            }
        },
        draw: function () {
            if (this.display) {
                var t = this.ctx;
                if (o(this.yLabels, function (e, i) {
                        if (i > 0) {
                            var n, o = i * (this.drawingArea / this.steps),
                                s = this.yCenter - o;
                            if (this.lineWidth > 0)
                                if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, o, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                else {
                                    t.beginPath();
                                    for (var r = 0; r < this.valuesCount; r++) n = this.getPointPosition(r, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === r ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y);
                                    t.closePath(), t.stroke()
                                }
                            if (this.showLabels) {
                                if (t.font = R(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                    var a = t.measureText(e).width;
                                    t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - a / 2 - this.backdropPaddingX, s - this.fontSize / 2 - this.backdropPaddingY, a + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                }
                                t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, s)
                            }
                        }
                    }, this), !this.lineArc) {
                    t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                    for (var e = this.valuesCount - 1; e >= 0; e--) {
                        if (this.angleLineWidth > 0) {
                            var i = this.getPointPosition(e, this.calculateCenterOffset(this.max));
                            t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(i.x, i.y), t.stroke(), t.closePath()
                        }
                        var n = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                        t.font = R(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                        var s = this.labels.length,
                            r = this.labels.length / 2,
                            a = r / 2,
                            l = e < a || e > s - a,
                            h = e === a || e === s - a;
                        t.textAlign = 0 === e ? "center" : e === r ? "center" : e < r ? "left" : "right", t.textBaseline = h ? "middle" : l ? "bottom" : "top", t.fillText(this.labels[e], n.x, n.y)
                    }
                }
            }
        }
    }), n.addEvent(window, "resize", function () {
        var t;
        return function () {
            clearTimeout(t), t = setTimeout(function () {
                o(i.instances, function (t) {
                    t.options.responsive && t.resize(t.render, !0)
                })
            }, 50)
        }
    }()), p ? define(function () {
        return i
    }) : "object" == typeof module && module.exports && (module.exports = i), t.Chart = i, i.noConflict = function () {
        return t.Chart = e, i
    }
}.call(this),
    function () {
        "use strict";
        var t = this.Chart,
            e = t.helpers,
            i = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        t.Type.extend({
            name: "Bar",
            defaults: i,
            initialize: function (i) {
                var n = this.options;
                this.ScaleClass = t.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function (t, e, i) {
                        var o = this.calculateBaseWidth(),
                            s = this.calculateX(i) - o / 2,
                            r = this.calculateBarWidth(t);
                        return s + r * e + e * n.barDatasetSpacing + r / 2
                    },
                    calculateBaseWidth: function () {
                        return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing
                    },
                    calculateBarWidth: function (t) {
                        return (this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing) / t
                    }
                }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var i = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function (t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), e.each(i, function (t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(i)
                }), this.BarClass = t.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), e.each(i.datasets, function (t, n) {
                    var o = {
                        label: t.label || null,
                        fillColor: t.fillColor,
                        strokeColor: t.strokeColor,
                        bars: []
                    };
                    this.datasets.push(o), e.each(t.data, function (e, n) {
                        o.bars.push(new this.BarClass({
                            value: e,
                            label: i.labels[n],
                            datasetLabel: t.label,
                            strokeColor: t.strokeColor,
                            fillColor: t.fillColor,
                            highlightFill: t.highlightFill || t.fillColor,
                            highlightStroke: t.highlightStroke || t.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(i.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function (t, i, n) {
                    e.extend(t, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, n, i),
                        y: this.scale.endPoint
                    }), t.save()
                }, this), this.render()
            },
            update: function () {
                this.scale.update(), e.each(this.activeElements, function (t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function (t) {
                    t.save()
                }), this.render()
            },
            eachBars: function (t) {
                e.each(this.datasets, function (i, n) {
                    e.each(i.bars, t, this, n)
                }, this)
            },
            getBarsAtEvent: function (t) {
                for (var i, n = [], o = e.getRelativePosition(t), s = function (t) {
                        n.push(t.bars[i])
                    }, r = 0; r < this.datasets.length; r++)
                    for (i = 0; i < this.datasets[r].bars.length; i++)
                        if (this.datasets[r].bars[i].inRange(o.x, o.y)) return e.each(this.datasets, s), n;
                return n
            },
            buildScale: function (t) {
                var i = this,
                    n = function () {
                        var t = [];
                        return i.eachBars(function (e) {
                            t.push(e.value)
                        }), t
                    },
                    o = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function (t) {
                            var i = e.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            e.extend(this, i)
                        },
                        xLabels: t,
                        font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && e.extend(o, {
                    calculateYRange: e.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(o)
            },
            addData: function (t, i) {
                e.each(t, function (t, e) {
                    this.datasets[e].bars.push(new this.BarClass({
                        value: t,
                        label: i,
                        x: this.scale.calculateBarX(this.datasets.length, e, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[e].strokeColor,
                        fillColor: this.datasets[e].fillColor
                    }))
                }, this), this.scale.addXLabel(i), this.update()
            },
            removeData: function () {
                this.scale.removeXLabel(), e.each(this.datasets, function (t) {
                    t.bars.shift()
                }, this), this.update()
            },
            reflow: function () {
                e.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var t = e.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function (t) {
                var i = t || 1;
                this.clear();
                this.chart.ctx;
                this.scale.draw(i), e.each(this.datasets, function (t, n) {
                    e.each(t.bars, function (t, e) {
                        t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                            x: this.scale.calculateBarX(this.datasets.length, n, e),
                            y: this.scale.calculateY(t.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, i).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this),
    function () {
        "use strict";
        var t = this.Chart,
            e = t.helpers,
            i = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        t.Type.extend({
            name: "Doughnut",
            defaults: i,
            initialize: function (i) {
                this.segments = [], this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = t.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    e.each(this.segments, function (t) {
                        t.restore(["fillColor"])
                    }), e.each(i, function (t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(i)
                }), this.calculateTotal(i), e.each(i, function (t, e) {
                    this.addData(t, e, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function (t) {
                var i = [],
                    n = e.getRelativePosition(t);
                return e.each(this.segments, function (t) {
                    t.inRange(n.x, n.y) && i.push(t)
                }, this), i
            },
            addData: function (t, e, i) {
                var n = e || this.segments.length;
                this.segments.splice(n, 0, new this.SegmentArc({
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                    label: t.label
                })), i || (this.reflow(), this.update())
            },
            calculateCircumference: function (t) {
                return 2 * Math.PI * (Math.abs(t) / this.total)
            },
            calculateTotal: function (t) {
                this.total = 0, e.each(t, function (t) {
                    this.total += Math.abs(t.value)
                }, this)
            },
            update: function () {
                this.calculateTotal(this.segments), e.each(this.activeElements, function (t) {
                    t.restore(["fillColor"])
                }), e.each(this.segments, function (t) {
                    t.save()
                }), this.render()
            },
            removeData: function (t) {
                var i = e.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(i, 1), this.reflow(), this.update()
            },
            reflow: function () {
                e.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, e.each(this.segments, function (t) {
                    t.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function (t) {
                var i = t || 1;
                this.clear(), e.each(this.segments, function (t, e) {
                    t.transition({
                        circumference: this.calculateCircumference(t.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, i), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle)
                }, this)
            }
        }), t.types.Doughnut.extend({
            name: "Pie",
            defaults: e.merge(i, {
                percentageInnerCutout: 0
            })
        })
    }.call(this),
    function () {
        "use strict";
        var t = this.Chart,
            e = t.helpers,
            i = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        t.Type.extend({
            name: "Line",
            defaults: i,
            initialize: function (i) {
                this.PointClass = t.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function (t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function (t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), e.each(i, function (t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(i)
                }), e.each(i.datasets, function (t) {
                    var n = {
                        label: t.label || null,
                        fillColor: t.fillColor,
                        strokeColor: t.strokeColor,
                        pointColor: t.pointColor,
                        pointStrokeColor: t.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), e.each(t.data, function (e, o) {
                        n.points.push(new this.PointClass({
                            value: e,
                            label: i.labels[o],
                            datasetLabel: t.label,
                            strokeColor: t.pointStrokeColor,
                            fillColor: t.pointColor,
                            highlightFill: t.pointHighlightFill || t.pointColor,
                            highlightStroke: t.pointHighlightStroke || t.pointStrokeColor
                        }))
                    }, this), this.buildScale(i.labels), this.eachPoints(function (t, i) {
                        e.extend(t, {
                            x: this.scale.calculateX(i),
                            y: this.scale.endPoint
                        }), t.save()
                    }, this)
                }, this), this.render()
            },
            update: function () {
                this.scale.update(), e.each(this.activeElements, function (t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function (t) {
                    t.save()
                }), this.render()
            },
            eachPoints: function (t) {
                e.each(this.datasets, function (i) {
                    e.each(i.points, t, this)
                }, this)
            },
            getPointsAtEvent: function (t) {
                var i = [],
                    n = e.getRelativePosition(t);
                return e.each(this.datasets, function (t) {
                    e.each(t.points, function (t) {
                        t.inRange(n.x, n.y) && i.push(t)
                    })
                }, this), i
            },
            buildScale: function (i) {
                var n = this,
                    o = function () {
                        var t = [];
                        return n.eachPoints(function (e) {
                            t.push(e.value)
                        }), t
                    },
                    s = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: i.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function (t) {
                            var i = e.calculateScaleRange(o(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            e.extend(this, i)
                        },
                        xLabels: i,
                        font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && e.extend(s, {
                    calculateYRange: e.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new t.Scale(s)
            },
            addData: function (t, i) {
                e.each(t, function (t, e) {
                    this.datasets[e].points.push(new this.PointClass({
                        value: t,
                        label: i,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[e].pointStrokeColor,
                        fillColor: this.datasets[e].pointColor
                    }))
                }, this), this.scale.addXLabel(i), this.update()
            },
            removeData: function () {
                this.scale.removeXLabel(), e.each(this.datasets, function (t) {
                    t.points.shift()
                }, this), this.update()
            },
            reflow: function () {
                var t = e.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function (t) {
                var i = t || 1;
                this.clear();
                var n = this.chart.ctx,
                    o = function (t) {
                        return null !== t.value
                    },
                    s = function (t, i, n) {
                        return e.findNextWhere(i, o, n) || t
                    },
                    r = function (t, i, n) {
                        return e.findPreviousWhere(i, o, n) || t
                    };
                this.scale.draw(i), e.each(this.datasets, function (t) {
                    var a = e.where(t.points, o);
                    e.each(t.points, function (t, e) {
                        t.hasValue() && t.transition({
                            y: this.scale.calculateY(t.value),
                            x: this.scale.calculateX(e)
                        }, i)
                    }, this), this.options.bezierCurve && e.each(a, function (t, i) {
                        var n = i > 0 && i < a.length - 1 ? this.options.bezierCurveTension : 0;
                        t.controlPoints = e.splineCurve(r(t, a, i), t, s(t, a, i), n), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), e.each(a, function (t, e) {
                        if (0 === e) n.moveTo(t.x, t.y);
                        else if (this.options.bezierCurve) {
                            var i = r(t, a, e);
                            n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                        } else n.lineTo(t.x, t.y)
                    }, this), n.stroke(), this.options.datasetFill && a.length > 0 && (n.lineTo(a[a.length - 1].x, this.scale.endPoint), n.lineTo(a[0].x, this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), n.fill()), e.each(a, function (t) {
                        t.draw()
                    })
                }, this)
            }
        })
    }.call(this),
    function () {
        "use strict";
        var t = this.Chart,
            e = t.helpers,
            i = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        t.Type.extend({
            name: "PolarArea",
            defaults: i,
            initialize: function (i) {
                this.segments = [], this.SegmentArc = t.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new t.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: i.length
                }), this.updateScaleRange(i), this.scale.update(), e.each(i, function (t, e) {
                    this.addData(t, e, !0)
                }, this), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    e.each(this.segments, function (t) {
                        t.restore(["fillColor"])
                    }), e.each(i, function (t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(i)
                }), this.render()
            },
            getSegmentsAtEvent: function (t) {
                var i = [],
                    n = e.getRelativePosition(t);
                return e.each(this.segments, function (t) {
                    t.inRange(n.x, n.y) && i.push(t)
                }, this), i
            },
            addData: function (t, e, i) {
                var n = e || this.segments.length;
                this.segments.splice(n, 0, new this.SegmentArc({
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    label: t.label,
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), i || (this.reflow(), this.update())
            },
            removeData: function (t) {
                var i = e.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(i, 1), this.reflow(), this.update()
            },
            calculateTotal: function (t) {
                this.total = 0, e.each(t, function (t) {
                    this.total += t.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function (t) {
                var i = [];
                e.each(t, function (t) {
                    i.push(t.value)
                });
                var n = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                e.extend(this.scale, n, {
                    size: e.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function () {
                this.calculateTotal(this.segments), e.each(this.segments, function (t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function () {
                e.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), e.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), e.each(this.segments, function (t) {
                    t.update({
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    })
                }, this)
            },
            draw: function (t) {
                var i = t || 1;
                this.clear(), e.each(this.segments, function (t, e) {
                    t.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    }, i), t.endAngle = t.startAngle + t.circumference, 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle), t.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this),
    function () {
        "use strict";
        var t = this.Chart,
            e = t.helpers;
        t.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            },
            initialize: function (i) {
                this.PointClass = t.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(i), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function (t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), e.each(i, function (t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(i)
                }), e.each(i.datasets, function (t) {
                    var n = {
                        label: t.label || null,
                        fillColor: t.fillColor,
                        strokeColor: t.strokeColor,
                        pointColor: t.pointColor,
                        pointStrokeColor: t.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), e.each(t.data, function (e, o) {
                        var s;
                        this.scale.animation || (s = this.scale.getPointPosition(o, this.scale.calculateCenterOffset(e))), n.points.push(new this.PointClass({
                            value: e,
                            label: i.labels[o],
                            datasetLabel: t.label,
                            x: this.options.animation ? this.scale.xCenter : s.x,
                            y: this.options.animation ? this.scale.yCenter : s.y,
                            strokeColor: t.pointStrokeColor,
                            fillColor: t.pointColor,
                            highlightFill: t.pointHighlightFill || t.pointColor,
                            highlightStroke: t.pointHighlightStroke || t.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function (t) {
                e.each(this.datasets, function (i) {
                    e.each(i.points, t, this)
                }, this)
            },
            getPointsAtEvent: function (t) {
                var i = e.getRelativePosition(t),
                    n = e.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, i),
                    o = 2 * Math.PI / this.scale.valuesCount,
                    s = Math.round((n.angle - 1.5 * Math.PI) / o),
                    r = [];
                return (s >= this.scale.valuesCount || s < 0) && (s = 0), n.distance <= this.scale.drawingArea && e.each(this.datasets, function (t) {
                    r.push(t.points[s])
                }), r
            },
            buildScale: function (e) {
                this.scale = new t.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: e.labels,
                    valuesCount: e.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(e.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function (t) {
                var i = function () {
                        var i = [];
                        return e.each(t, function (t) {
                            t.data ? i = i.concat(t.data) : e.each(t.points, function (t) {
                                i.push(t.value)
                            })
                        }), i
                    }(),
                    n = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                e.extend(this.scale, n)
            },
            addData: function (t, i) {
                this.scale.valuesCount++, e.each(t, function (t, e) {
                    var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                    this.datasets[e].points.push(new this.PointClass({
                        value: t,
                        label: i,
                        x: n.x,
                        y: n.y,
                        strokeColor: this.datasets[e].pointStrokeColor,
                        fillColor: this.datasets[e].pointColor
                    }))
                }, this), this.scale.labels.push(i), this.reflow(), this.update()
            },
            removeData: function () {
                this.scale.valuesCount--, this.scale.labels.shift(), e.each(this.datasets, function (t) {
                    t.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function () {
                this.eachPoints(function (t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function () {
                e.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: e.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function (t) {
                var i = t || 1,
                    n = this.chart.ctx;
                this.clear(), this.scale.draw(), e.each(this.datasets, function (t) {
                    e.each(t.points, function (t, e) {
                        t.hasValue() && t.transition(this.scale.getPointPosition(e, this.scale.calculateCenterOffset(t.value)), i)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), e.each(t.points, function (t, e) {
                        0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y)
                    }, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, n.fill(), e.each(t.points, function (t) {
                        t.hasValue() && t.draw()
                    })
                }, this)
            }
        })
    }.call(this),
    function (t, e, i, n) {
        function o(e, i) {
            this.element = t(e), this.settings = t.extend({}, r, i), this._defaults = r, this._name = s, this.init()
        }
        var s = "metisMenu",
            r = {
                toggle: !0,
                doubleTapToGo: !1
            };
        o.prototype = {
            init: function () {
                var e = this.element,
                    n = this.settings.toggle,
                    o = this;
                this.isIE() <= 9 ? (e.find("li.active").has("ul").children("ul").collapse("show"), e.find("li").not(".active").has("ul").children("ul").collapse("hide")) : (e.find("li.active").has("ul").children("ul").addClass("collapse in"), e.find("li").not(".active").has("ul").children("ul").addClass("collapse")), o.settings.doubleTapToGo && e.find("li.active").has("ul").children("a").addClass("doubleTapToGo"), e.find("li").has("ul").children("a").on("click." + s, function (e) {
                    if (e.preventDefault(), o.settings.doubleTapToGo && o.doubleTapToGo(t(this)) && "#" !== t(this).attr("href") && "" !== t(this).attr("href")) return e.stopPropagation(), void(i.location = t(this).attr("href"));
                    t(this).parent("li").toggleClass("active").children("ul").collapse("toggle"), n && t(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide")
                })
            },
            isIE: function () {
                for (var t = 3, e = i.createElement("div"), n = e.getElementsByTagName("i"); e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e", n[0];) return t > 4 ? t : void 0
            },
            doubleTapToGo: function (t) {
                var e = this.element;
                return t.hasClass("doubleTapToGo") ? (t.removeClass("doubleTapToGo"), !0) : t.parent().children("ul").length ? (e.find(".doubleTapToGo").removeClass("doubleTapToGo"), t.addClass("doubleTapToGo"), !1) : void 0
            },
            remove: function () {
                this.element.off("." + s), this.element.removeData(s)
            }
        }, t.fn[s] = function (e) {
            return this.each(function () {
                var i = t(this);
                i.data(s) && i.data(s).remove(), i.data(s, new o(this, e))
            }), this
        }
    }(jQuery, window, document), $(function () {
        $("#side-menu").metisMenu()
    }), $(function () {
        $(window).bind("load resize", function () {
            topOffset = 50, width = this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width, width < 768 ? ($("div.navbar-collapse").addClass("collapse"), topOffset = 100) : $("div.navbar-collapse").removeClass("collapse"), height = (this.window.innerHeight > 0 ? this.window.innerHeight : this.screen.height) - 1, height -= topOffset, height < 1 && (height = 1), height > topOffset && $("#page-wrapper").css("min-height", height + "px")
        });
        var t = window.location,
            e = $("ul.nav a").filter(function () {
                return this.href == t || 0 == t.href.indexOf(this.href)
            }).addClass("active").parent().parent().addClass("in").parent();
        e.is("li") && e.addClass("active")
    });
var lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(6, 197, 172, 1)",
            data: [65, 59, 80, 81, 56, 100, 40]
        }, {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(244, 204, 11, 1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }]
    },
    cline = document.getElementById("cline").getContext("2d");
new Chart(cline).Line(lineChartData, {
    responsive: !0
});
var pdata = [{
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    }, {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }, {
        value: 1e3,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "test"
    }],
    cpie = document.getElementById("cpie").getContext("2d");
new Chart(cpie).Pie(pdata, {
    responsive: !0
});
var ddata = [{
        value: 50,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    }, {
        value: 300,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }, {
        value: 1600,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }],
    cdonut = document.getElementById("cdonut").getContext("2d");
new Chart(cdonut).Doughnut(ddata, {
    responsive: !0
});
var bdata = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [130, 160, 95, 205, 170, 135, 200]
        }, {
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [85, 90, 160, 145, 180, 130, 195]
        }]
    },
    cbar = document.getElementById("cbar").getContext("2d");
new Chart(cbar).Bar(bdata, {
    responsive: !0
});
var podata = [{
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    }, {
        value: 500,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }, {
        value: 1e3,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }, {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    }, {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }],
    cpolar = document.getElementById("cpolar").getContext("2d");
new Chart(cpolar).PolarArea(podata, {
    responsive: !0
});
var ddata1 = [{
        value: 50,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    }, {
        value: 300,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }, {
        value: 160,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }],
    cdonut1 = document.getElementById("cdonut1").getContext("2d");
new Chart(cdonut1).Doughnut(ddata1, {
    responsive: !0
});