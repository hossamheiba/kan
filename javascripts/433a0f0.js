/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [89], {
        0: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return w
            })), n.d(t, "l", (function() {
                return x
            })), n.d(t, "n", (function() {
                return S
            })), n.d(t, "m", (function() {
                return C
            })), n.d(t, "f", (function() {
                return A
            })), n.d(t, "b", (function() {
                return E
            })), n.d(t, "s", (function() {
                return T
            })), n.d(t, "h", (function() {
                return $
            })), n.d(t, "i", (function() {
                return k
            })), n.d(t, "e", (function() {
                return O
            })), n.d(t, "r", (function() {
                return P
            })), n.d(t, "k", (function() {
                return M
            })), n.d(t, "t", (function() {
                return I
            })), n.d(t, "o", (function() {
                return z
            })), n.d(t, "q", (function() {
                return L
            })), n.d(t, "g", (function() {
                return D
            })), n.d(t, "c", (function() {
                return R
            })), n.d(t, "j", (function() {
                return B
            })), n.d(t, "p", (function() {
                return V
            })), n.d(t, "a", (function() {
                return W
            })), n.d(t, "v", (function() {
                return U
            })), n.d(t, "u", (function() {
                return K
            }));
            n(67), n(35), n(57), n(70), n(95), n(34), n(96);
            var r = n(33),
                o = n(9),
                l = n(32),
                d = n(22),
                c = (n(58), n(19), n(41), n(236), n(26), n(103), n(40), n(62), n(53), n(54), n(60), n(31), n(97), n(175), n(176), n(240), n(105), n(178), n(242), n(77), n(78), n(1)),
                h = n(14);

            function f(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function m(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? f(Object(source), !0).forEach((function(t) {
                        Object(l.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }

            function v(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return y(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    d = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        d = !0, o = e
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (d) throw o
                        }
                    }
                }
            }

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                return n
            }

            function w(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t;
                    return void 0 === e[n] && (e[n] = 0), e[n]++
                }
            }

            function x(e) {
                c.default.config.errorHandler && c.default.config.errorHandler(e)
            }

            function S(e) {
                return e.then((function(e) {
                    return e.default || e
                }))
            }

            function C(e) {
                return e.$options && "function" == typeof e.$options.fetch && !e.$options.fetch.length
            }

            function A(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = e.$children || [],
                    o = v(r);
                try {
                    for (o.s(); !(t = o.n()).done;) {
                        var l = t.value;
                        l.$fetch ? n.push(l) : l.$children && A(l, n)
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return n
            }

            function E(e, t) {
                if (t || !e.options.__hasNuxtData) {
                    var n = e.options._originDataFn || e.options.data || function() {
                        return {}
                    };
                    e.options._originDataFn = n, e.options.data = function() {
                        var data = n.call(this, this);
                        return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]), m(m({}, data), t)
                    }, e.options.__hasNuxtData = !0, e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
                }
            }

            function T(e) {
                return e.options && e._Ctor === e || (e.options ? (e._Ctor = e, e.extendOptions = e.options) : (e = c.default.extend(e))._Ctor = e, !e.options.name && e.options.__file && (e.options.name = e.options.__file)), e
            }

            function $(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], e.matched.map((function(e, r) {
                    return Object.keys(e[n]).map((function(o) {
                        return t && t.push(r), e[n][o]
                    }))
                })))
            }

            function k(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return $(e, t, "instances")
            }

            function O(e, t) {
                return Array.prototype.concat.apply([], e.matched.map((function(e, n) {
                    return Object.keys(e.components).reduce((function(r, o) {
                        return e.components[o] ? r.push(t(e.components[o], e.instances[o], e, o, n)) : delete e.components[o], r
                    }), [])
                })))
            }

            function P(e, t) {
                return Promise.all(O(e, function() {
                    var e = Object(o.a)(regeneratorRuntime.mark((function e(n, r, o, l) {
                        var d, c;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("function" != typeof n || n.options) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, n();
                                case 4:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(1), e.t0 && "ChunkLoadError" === e.t0.name && "undefined" != typeof window && window.sessionStorage && (d = Date.now(), (!(c = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || c + 6e4 < d) && (window.sessionStorage.setItem("nuxt-reload", d), window.location.reload(!0))), e.t0;
                                case 11:
                                    return o.components[l] = n = T(n), e.abrupt("return", "function" == typeof t ? t(n, r, o, l) : n);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })));
                    return function(t, n, r, o) {
                        return e.apply(this, arguments)
                    }
                }()))
            }

            function M(e) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4, P(t);
                            case 4:
                                return e.abrupt("return", m(m({}, t), {}, {
                                    meta: $(t).map((function(e, n) {
                                        return m(m({}, e.options.meta), (t.matched[n] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function I(e, t) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = Object(o.a)(regeneratorRuntime.mark((function e(t, n) {
                    var o, l, c, f;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t.context || (t.context = {
                                    isStatic: !0,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: t,
                                    payload: n.payload,
                                    error: n.error,
                                    base: t.router.options.base,
                                    env: {}
                                }, n.ssrContext && (t.context.ssrContext = n.ssrContext), t.context.redirect = function(e, path, n) {
                                    if (e) {
                                        t.context._redirected = !0;
                                        var o = Object(r.a)(path);
                                        if ("number" == typeof e || "undefined" !== o && "object" !== o || (n = path || {}, path = e, o = Object(r.a)(path), e = 302), "object" === o && (path = t.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(h.f)(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                                        t.context.next({
                                            path: path,
                                            query: n,
                                            status: e
                                        })
                                    }
                                }, t.context.nuxtState = window.__NUXT__), e.next = 3, Promise.all([M(n.route), M(n.from)]);
                            case 3:
                                o = e.sent, l = Object(d.a)(o, 2), c = l[0], f = l[1], n.route && (t.context.route = c), n.from && (t.context.from = f), t.context.next = n.next, t.context._redirected = !1, t.context._errored = !1, t.context.isHMR = !1, t.context.params = t.context.route.params || {}, t.context.query = t.context.route.query || {};
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function z(e, t) {
                return !e.length || t._redirected || t._errored ? Promise.resolve() : L(e[0], t).then((function() {
                    return z(e.slice(1), t)
                }))
            }

            function L(e, t) {
                var n;
                return (n = 2 === e.length ? new Promise((function(n) {
                    e(t, (function(e, data) {
                        e && t.error(e), n(data = data || {})
                    }))
                })) : e(t)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
            }

            function D(base, e) {
                if ("hash" === e) return window.location.hash.replace(/^#\//, "");
                base = decodeURI(base).slice(0, -1);
                var path = decodeURI(window.location.pathname);
                base && path.startsWith(base) && (path = path.slice(base.length));
                var t = (path || "/") + window.location.search + window.location.hash;
                return Object(h.d)(t)
            }

            function R(e, t) {
                return function(e, t) {
                    for (var n = new Array(e.length), i = 0; i < e.length; i++) "object" === Object(r.a)(e[i]) && (n[i] = new RegExp("^(?:" + e[i].pattern + ")$", Y(t)));
                    return function(t, r) {
                        for (var path = "", data = t || {}, o = (r || {}).pretty ? F : encodeURIComponent, l = 0; l < e.length; l++) {
                            var d = e[l];
                            if ("string" != typeof d) {
                                var c = data[d.name || "pathMatch"],
                                    h = void 0;
                                if (null == c) {
                                    if (d.optional) {
                                        d.partial && (path += d.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + d.name + '" to be defined')
                                }
                                if (Array.isArray(c)) {
                                    if (!d.repeat) throw new TypeError('Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(c) + "`");
                                    if (0 === c.length) {
                                        if (d.optional) continue;
                                        throw new TypeError('Expected "' + d.name + '" to not be empty')
                                    }
                                    for (var f = 0; f < c.length; f++) {
                                        if (h = o(c[f]), !n[l].test(h)) throw new TypeError('Expected all "' + d.name + '" to match "' + d.pattern + '", but received `' + JSON.stringify(h) + "`");
                                        path += (0 === f ? d.prefix : d.delimiter) + h
                                    }
                                } else {
                                    if (h = d.asterisk ? H(c) : o(c), !n[l].test(h)) throw new TypeError('Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + h + '"');
                                    path += d.prefix + h
                                }
                            } else path += d
                        }
                        return path
                    }
                }(function(e, t) {
                    var n, r = [],
                        o = 0,
                        l = 0,
                        path = "",
                        d = t && t.delimiter || "/";
                    for (; null != (n = N.exec(e));) {
                        var c = n[0],
                            h = n[1],
                            f = n.index;
                        if (path += e.slice(l, f), l = f + c.length, h) path += h[1];
                        else {
                            var m = e[l],
                                v = n[2],
                                y = n[3],
                                w = n[4],
                                x = n[5],
                                S = n[6],
                                C = n[7];
                            path && (r.push(path), path = "");
                            var A = null != v && null != m && m !== v,
                                E = "+" === S || "*" === S,
                                T = "?" === S || "*" === S,
                                $ = n[2] || d,
                                pattern = w || x;
                            r.push({
                                name: y || o++,
                                prefix: v || "",
                                delimiter: $,
                                optional: T,
                                repeat: E,
                                partial: A,
                                asterisk: Boolean(C),
                                pattern: pattern ? X(pattern) : C ? ".*" : "[^" + G($) + "]+?"
                            })
                        }
                    }
                    l < e.length && (path += e.substr(l));
                    path && r.push(path);
                    return r
                }(e, t), t)
            }

            function B(e, t) {
                var n = {},
                    r = m(m({}, e), t);
                for (var o in r) String(e[o]) !== String(t[o]) && (n[o] = !0);
                return n
            }

            function V(e) {
                var t;
                if (e.message || "string" == typeof e) t = e.message || e;
                else try {
                    t = JSON.stringify(e, null, 2)
                } catch (n) {
                    t = "[".concat(e.constructor.name, "]")
                }
                return m(m({}, e), {}, {
                    message: t,
                    statusCode: e.statusCode || e.status || e.response && e.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function(e) {
                window.onNuxtReadyCbs.push(e)
            };
            var N = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function F(e, t) {
                var n = t ? /[?#]/g : /[/?#]/g;
                return encodeURI(e).replace(n, (function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function H(e) {
                return F(e, !0)
            }

            function G(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function X(e) {
                return e.replace(/([=!:$/()])/g, "\\$1")
            }

            function Y(e) {
                return e && e.sensitive ? "" : "i"
            }

            function W(e, t, n) {
                e.$options[t] || (e.$options[t] = []), e.$options[t].includes(n) || e.$options[t].push(n)
            }
            var U = h.c;
            h.h, h.b;

            function K(e) {
                try {
                    window.history.scrollRestoration = e
                } catch (e) {}
            }
        },
        100: function(e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                return n
            }

            function o(e, t) {
                if (e) {
                    if ("string" == typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                }
            }
            n.d(t, "a", (function() {
                return o
            }))
        },
        101: function(e, t, n) {
            "use strict";
            n(56), n(19), n(34), n(40), n(41), n(77), n(78), n(60), n(26), n(67), n(53), n(31), n(35), n(57), n(70), n(54);
            var r = n(1);

            function o(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, d = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return d = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            d || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                return n
            }
            var d = window.requestIdleCallback || function(e) {
                    var t = Date.now();
                    return setTimeout((function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }), 1)
                },
                c = window.cancelIdleCallback || function(e) {
                    clearTimeout(e)
                },
                h = window.IntersectionObserver && new window.IntersectionObserver((function(e) {
                    e.forEach((function(e) {
                        var t = e.intersectionRatio,
                            link = e.target;
                        t <= 0 || !link.__prefetch || link.__prefetch()
                    }))
                }));
            t.a = {
                name: "NuxtLink",
                extends: r.default.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !1
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.prefetch && !this.noPrefetch && (this.handleId = d(this.observe, {
                        timeout: 2e3
                    }))
                },
                beforeDestroy: function() {
                    c(this.handleId), this.__observed && (h.unobserve(this.$el), delete this.$el.__prefetch)
                },
                methods: {
                    observe: function() {
                        h && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), h.observe(this.$el), this.__observed = !0)
                    },
                    shouldPrefetch: function() {
                        var e = this.$router.resolve(this.to, this.$route, this.append);
                        return e.resolved.matched.map((function(e) {
                            return e.components.default
                        })).filter((function(t) {
                            return e.href || "function" == typeof t && !t.options && !t.__prefetched
                        })).length
                    },
                    canPrefetch: function() {
                        var e = navigator.connection;
                        return !(this.$nuxt.isOffline || e && ((e.effectiveType || "").includes("2g") || e.saveData))
                    },
                    getPrefetchComponents: function() {
                        return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(e) {
                            return e.components.default
                        })).filter((function(e) {
                            return "function" == typeof e && !e.options && !e.__prefetched
                        }))
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            h.unobserve(this.$el);
                            var e, t = o(this.getPrefetchComponents());
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var n = e.value,
                                        r = n();
                                    r instanceof Promise && r.catch((function() {})), n.__prefetched = !0
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                            if (!this.$root.isPreview) {
                                var l = this.$router.resolve(this.to, this.$route, this.append).href;
                                this.$nuxt && this.$nuxt.fetchPayload(l, !0).catch((function() {}))
                            }
                        }
                    }
                }
            }
        },
        122: function(e, t, n) {
            "use strict";
            t.a = {}
        },
        123: function(e, t, n) {
            "use strict";
            var r = {
                name: "ClientOnly",
                functional: !0,
                props: {
                    placeholder: String,
                    placeholderTag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function(e, t) {
                    var n = t.parent,
                        r = t.slots,
                        o = t.props,
                        l = r(),
                        d = l.default;
                    void 0 === d && (d = []);
                    var c = l.placeholder;
                    return n._isMounted ? d : (n.$once("hook:mounted", (function() {
                        n.$forceUpdate()
                    })), o.placeholderTag && (o.placeholder || c) ? e(o.placeholderTag, {
                        class: ["client-only-placeholder"]
                    }, o.placeholder || c) : d.length > 0 ? d.map((function() {
                        return e(!1)
                    })) : e(!1))
                }
            };
            e.exports = r
        },
        125: function(e, t, n) {
            e.exports = function() {
                "use strict";

                function e(t) {
                    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, e(t)
                }

                function t() {
                    return t = Object.assign || function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = arguments[i];
                            for (var t in source) Object.prototype.hasOwnProperty.call(source, t) && (e[t] = source[t])
                        }
                        return e
                    }, t.apply(this, arguments)
                }
                var n = 4,
                    r = .001,
                    o = 1e-7,
                    l = 10,
                    d = 11,
                    c = 1 / (d - 1),
                    h = "function" == typeof Float32Array;

                function f(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function m(e, t) {
                    return 3 * t - 6 * e
                }

                function v(e) {
                    return 3 * e
                }

                function y(e, t, n) {
                    return ((f(t, n) * e + m(t, n)) * e + v(t)) * e
                }

                function w(e, t, n) {
                    return 3 * f(t, n) * e * e + 2 * m(t, n) * e + v(t)
                }

                function x(e, t, n, r, d) {
                    var c, h, i = 0;
                    do {
                        (c = y(h = t + (n - t) / 2, r, d) - e) > 0 ? n = h : t = h
                    } while (Math.abs(c) > o && ++i < l);
                    return h
                }

                function S(e, t, r, o) {
                    for (var i = 0; i < n; ++i) {
                        var l = w(t, r, o);
                        if (0 === l) return t;
                        t -= (y(t, r, o) - e) / l
                    }
                    return t
                }

                function C(e) {
                    return e
                }
                var A = function(e, t, n, o) {
                        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                        if (e === t && n === o) return C;
                        for (var l = h ? new Float32Array(d) : new Array(d), i = 0; i < d; ++i) l[i] = y(i * c, e, n);

                        function f(t) {
                            for (var o = 0, h = 1, f = d - 1; h !== f && l[h] <= t; ++h) o += c;
                            --h;
                            var m = o + (t - l[h]) / (l[h + 1] - l[h]) * c,
                                v = w(m, e, n);
                            return v >= r ? S(t, m, e, n) : 0 === v ? m : x(t, o, o + c, e, n)
                        }
                        return function(e) {
                            return 0 === e ? 0 : 1 === e ? 1 : y(f(e), t, o)
                        }
                    },
                    E = {
                        ease: [.25, .1, .25, 1],
                        linear: [0, 0, 1, 1],
                        "ease-in": [.42, 0, 1, 1],
                        "ease-out": [0, 0, .58, 1],
                        "ease-in-out": [.42, 0, .58, 1]
                    },
                    T = !1;
                try {
                    var $ = Object.defineProperty({}, "passive", {
                        get: function() {
                            T = !0
                        }
                    });
                    window.addEventListener("test", null, $)
                } catch (e) {}
                var k = {
                        $: function(e) {
                            return "string" != typeof e ? e : document.querySelector(e)
                        },
                        on: function(element, e, t) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                passive: !1
                            };
                            e instanceof Array || (e = [e]);
                            for (var i = 0; i < e.length; i++) element.addEventListener(e[i], t, !!T && n)
                        },
                        off: function(element, e, t) {
                            e instanceof Array || (e = [e]);
                            for (var i = 0; i < e.length; i++) element.removeEventListener(e[i], t)
                        },
                        cumulativeOffset: function(element) {
                            var e = 0,
                                t = 0;
                            do {
                                e += element.offsetTop || 0, t += element.offsetLeft || 0, element = element.offsetParent
                            } while (element);
                            return {
                                top: e,
                                left: t
                            }
                        }
                    },
                    O = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"],
                    P = {
                        container: "body",
                        duration: 500,
                        lazy: !0,
                        easing: "ease",
                        offset: 0,
                        force: !0,
                        cancelable: !0,
                        onStart: !1,
                        onDone: !1,
                        onCancel: !1,
                        x: !1,
                        y: !0
                    };

                function M(e) {
                    P = t({}, P, e)
                }
                var _ = function() {
                        var element, t, n, r, o, l, d, c, h, f, m, v, y, w, x, S, C, T, $, M, _, I, j, z, L, D, progress, R = function(e) {
                            c && (j = e, M = !0)
                        };

                        function B(e) {
                            var t = e.scrollTop;
                            return "body" === e.tagName.toLowerCase() && (t = t || document.documentElement.scrollTop), t
                        }

                        function V(e) {
                            var t = e.scrollLeft;
                            return "body" === e.tagName.toLowerCase() && (t = t || document.documentElement.scrollLeft), t
                        }

                        function N() {
                            _ = k.cumulativeOffset(t), I = k.cumulativeOffset(element), v && (x = I.left - _.left + l, T = x - w), y && (C = I.top - _.top + l, $ = C - S)
                        }

                        function F(e) {
                            if (M) return H();
                            L || (L = e), o || N(), D = e - L, progress = Math.min(D / n, 1), progress = z(progress), G(t, S + $ * progress, w + T * progress), D < n ? window.requestAnimationFrame(F) : H()
                        }

                        function H() {
                            M || G(t, C, x), L = !1, k.off(t, O, R), M && m && m(j, element), !M && f && f(element)
                        }

                        function G(element, e, t) {
                            y && (element.scrollTop = e), v && (element.scrollLeft = t), "body" === element.tagName.toLowerCase() && (y && (document.documentElement.scrollTop = e), v && (document.documentElement.scrollLeft = t))
                        }

                        function X(x, _) {
                            var I = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            if ("object" === e(_) ? I = _ : "number" == typeof _ && (I.duration = _), !(element = k.$(x))) return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + x);
                            if (t = k.$(I.container || P.container), n = I.hasOwnProperty("duration") ? I.duration : P.duration, o = I.hasOwnProperty("lazy") ? I.lazy : P.lazy, r = I.easing || P.easing, l = I.hasOwnProperty("offset") ? I.offset : P.offset, d = I.hasOwnProperty("force") ? !1 !== I.force : P.force, c = I.hasOwnProperty("cancelable") ? !1 !== I.cancelable : P.cancelable, h = I.onStart || P.onStart, f = I.onDone || P.onDone, m = I.onCancel || P.onCancel, v = void 0 === I.x ? P.x : I.x, y = void 0 === I.y ? P.y : I.y, "function" == typeof l && (l = l(element, t)), w = V(t), S = B(t), N(), M = !1, !d) {
                                var L = "body" === t.tagName.toLowerCase() ? document.documentElement.clientHeight || window.innerHeight : t.offsetHeight,
                                    D = S,
                                    H = D + L,
                                    G = C - l,
                                    X = G + element.offsetHeight;
                                if (G >= D && X <= H) return void(f && f(element))
                            }
                            if (h && h(element), $ || T) return "string" == typeof r && (r = E[r] || E.ease), z = A.apply(A, r), k.on(t, O, R, {
                                    passive: !0
                                }), window.requestAnimationFrame(F),
                                function() {
                                    j = null, M = !0
                                };
                            f && f(element)
                        }
                        return X
                    },
                    I = _(),
                    j = [];

                function z(e) {
                    for (var i = 0; i < j.length; ++i)
                        if (j[i].el === e) return j.splice(i, 1), !0;
                    return !1
                }

                function L(e) {
                    for (var i = 0; i < j.length; ++i)
                        if (j[i].el === e) return j[i]
                }

                function D(e) {
                    var t = L(e);
                    return t || (j.push(t = {
                        el: e,
                        binding: {}
                    }), t)
                }

                function R(e) {
                    var t = D(this).binding;
                    if (t.value) {
                        if (e.preventDefault(), "string" == typeof t.value) return I(t.value);
                        I(t.value.el || t.value.element, t.value)
                    }
                }
                var B = {
                        bind: function(e, t) {
                            D(e).binding = t, k.on(e, "click", R)
                        },
                        unbind: function(e) {
                            z(e), k.off(e, "click", R)
                        },
                        update: function(e, t) {
                            D(e).binding = t
                        }
                    },
                    V = {
                        bind: B.bind,
                        unbind: B.unbind,
                        update: B.update,
                        beforeMount: B.bind,
                        unmounted: B.unbind,
                        updated: B.update,
                        scrollTo: I,
                        bindings: j
                    },
                    N = function(e, t) {
                        t && M(t), e.directive("scroll-to", V), (e.config.globalProperties || e.prototype).$scrollTo = V.scrollTo
                    };
                return "undefined" != typeof window && window.Vue && (window.VueScrollTo = V, window.VueScrollTo.setDefaults = M, window.VueScrollTo.scroller = _, window.Vue.use && window.Vue.use(N)), V.install = N, V
            }()
        },
        129: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var r = n(98);
            var o = n(100),
                l = n(99);

            function d(e) {
                return Object(r.a)(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Object(o.a)(e) || Object(l.a)()
            }
        },
        179: function(e, t, n) {},
        180: function(e, t, n) {},
        181: function(e, t, n) {
            "use strict";
            t.a = function(e, t) {
                return t = t || {}, new Promise((function(n, r) {
                    var s = new XMLHttpRequest,
                        o = [],
                        u = [],
                        i = {},
                        a = function() {
                            return {
                                ok: 2 == (s.status / 100 | 0),
                                statusText: s.statusText,
                                status: s.status,
                                url: s.responseURL,
                                text: function() {
                                    return Promise.resolve(s.responseText)
                                },
                                json: function() {
                                    return Promise.resolve(s.responseText).then(JSON.parse)
                                },
                                blob: function() {
                                    return Promise.resolve(new Blob([s.response]))
                                },
                                clone: a,
                                headers: {
                                    keys: function() {
                                        return o
                                    },
                                    entries: function() {
                                        return u
                                    },
                                    get: function(e) {
                                        return i[e.toLowerCase()]
                                    },
                                    has: function(e) {
                                        return e.toLowerCase() in i
                                    }
                                }
                            }
                        };
                    for (var l in s.open(t.method || "get", e, !0), s.onload = function() {
                            s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, t, n) {
                                o.push(t = t.toLowerCase()), u.push([t, n]), i[t] = i[t] ? i[t] + "," + n : n
                            })), n(a())
                        }, s.onerror = r, s.withCredentials = "include" == t.credentials, t.headers) s.setRequestHeader(l, t.headers[l]);
                    s.send(t.body || null)
                }))
            }
        },
        182: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        183: function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function o(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            n.d(t, "a", (function() {
                return o
            }))
        },
        185: function(e, t, n) {
            "use strict";
            var r = function(e) {
                return function(e) {
                    return !!e && "object" == typeof e
                }(e) && ! function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                        return e.$$typeof === o
                    }(e)
                }(e)
            };
            var o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function l(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? m((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
                var n
            }

            function d(e, source, t) {
                return e.concat(source).map((function(element) {
                    return l(element, t)
                }))
            }

            function c(e) {
                return Object.keys(e).concat(function(e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(symbol) {
                        return e.propertyIsEnumerable(symbol)
                    })) : []
                }(e))
            }

            function h(object, e) {
                try {
                    return e in object
                } catch (e) {
                    return !1
                }
            }

            function f(e, source, t) {
                var n = {};
                return t.isMergeableObject(e) && c(e).forEach((function(r) {
                    n[r] = l(e[r], t)
                })), c(source).forEach((function(r) {
                    (function(e, t) {
                        return h(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                    })(e, r) || (h(e, r) && t.isMergeableObject(source[r]) ? n[r] = function(e, t) {
                        if (!t.customMerge) return m;
                        var n = t.customMerge(e);
                        return "function" == typeof n ? n : m
                    }(r, t)(e[r], source[r], t) : n[r] = l(source[r], t))
                })), n
            }

            function m(e, source, t) {
                (t = t || {}).arrayMerge = t.arrayMerge || d, t.isMergeableObject = t.isMergeableObject || r, t.cloneUnlessOtherwiseSpecified = l;
                var n = Array.isArray(source);
                return n === Array.isArray(e) ? n ? t.arrayMerge(e, source, t) : f(e, source, t) : l(source, t)
            }
            m.all = function(e, t) {
                if (!Array.isArray(e)) throw new Error("first argument should be an array");
                return e.reduce((function(e, n) {
                    return m(e, n, t)
                }), {})
            };
            var v = m;
            e.exports = v
        },
        186: function(e, t, n) {
            ! function(e, t, n) {
                "use strict";
                var r;
                t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n,
                    function(e) {
                        e.SwiperComponent = "Swiper", e.SwiperSlideComponent = "SwiperSlide", e.SwiperDirective = "swiper", e.SwiperInstance = "$swiper"
                    }(r || (r = {}));
                var o, l, d = Object.freeze({
                    containerClass: "swiper-container",
                    wrapperClass: "swiper-wrapper",
                    slideClass: "swiper-slide"
                });
                (function(e) {
                    e.Ready = "ready", e.ClickSlide = "clickSlide"
                })(o || (o = {})),
                function(e) {
                    e.AutoUpdate = "autoUpdate", e.AutoDestroy = "autoDestroy", e.DeleteInstanceOnDestroy = "deleteInstanceOnDestroy", e.CleanupStylesOnDestroy = "cleanupStylesOnDestroy"
                }(l || (l = {}));
                var c = ["init", "beforeDestroy", "slideChange", "slideChangeTransitionStart", "slideChangeTransitionEnd", "slideNextTransitionStart", "slideNextTransitionEnd", "slidePrevTransitionStart", "slidePrevTransitionEnd", "transitionStart", "transitionEnd", "touchStart", "touchMove", "touchMoveOpposite", "sliderMove", "touchEnd", "click", "tap", "doubleTap", "imagesReady", "progress", "reachBeginning", "reachEnd", "fromEdge", "setTranslate", "setTransition", "resize", "observerUpdate", "beforeLoopFix", "loopFix"];

                function h() {
                    for (var s = 0, i = 0, e = arguments.length; i < e; i++) s += arguments[i].length;
                    var t = Array(s),
                        n = 0;
                    for (i = 0; i < e; i++)
                        for (var a = arguments[i], r = 0, o = a.length; r < o; r++, n++) t[n] = a[r];
                    return t
                }
                var f, m = function(e) {
                        return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase()
                    },
                    v = function(e, t, n) {
                        var r, l, d;
                        if (e && !e.destroyed) {
                            var c = (null === (r = t.composedPath) || void 0 === r ? void 0 : r.call(t)) || t.path;
                            if ((null == t ? void 0 : t.target) && c) {
                                var h = Array.from(e.slides),
                                    f = Array.from(c);
                                if (h.includes(t.target) || f.some((function(e) {
                                        return h.includes(e)
                                    }))) {
                                    var v = e.clickedIndex,
                                        y = Number(null === (d = null === (l = e.clickedSlide) || void 0 === l ? void 0 : l.dataset) || void 0 === d ? void 0 : d.swiperSlideIndex),
                                        w = Number.isInteger(y) ? y : null;
                                    n(o.ClickSlide, v, w), n(m(o.ClickSlide), v, w)
                                }
                            }
                        }
                    },
                    y = function(e, t) {
                        c.forEach((function(n) {
                            e.on(n, (function() {
                                for (var e = arguments, r = [], o = 0; o < arguments.length; o++) r[o] = e[o];
                                t.apply(void 0, h([n], r));
                                var l = m(n);
                                l !== n && t.apply(void 0, h([l], r))
                            }))
                        }))
                    },
                    w = "instanceName";

                function x(e, t) {
                    var n = function(e, t) {
                            var n, r, o, l, d = null === (r = null === (n = e.data) || void 0 === n ? void 0 : n.attrs) || void 0 === r ? void 0 : r[t];
                            return void 0 !== d ? d : null === (l = null === (o = e.data) || void 0 === o ? void 0 : o.attrs) || void 0 === l ? void 0 : l[m(t)]
                        },
                        c = function(element, e, t) {
                            return e.arg || n(t, w) || element.id || r.SwiperInstance
                        },
                        h = function(element, e, t) {
                            var n = c(element, e, t);
                            return t.context[n] || null
                        },
                        f = function(e) {
                            return e.value || t
                        },
                        x = function(input) {
                            return [!0, void 0, null, ""].includes(input)
                        },
                        S = function(e) {
                            var t, n, r = (null === (t = e.data) || void 0 === t ? void 0 : t.on) || (null === (n = e.componentOptions) || void 0 === n ? void 0 : n.listeners);
                            return function(e) {
                                for (var t, n = arguments, o = [], l = 1; l < arguments.length; l++) o[l - 1] = n[l];
                                var d = null === (t = r) || void 0 === t ? void 0 : t[e];
                                d && d.fns.apply(d, o)
                            }
                        };
                    return {
                        bind: function(element, e, t) {
                            -1 === element.className.indexOf(d.containerClass) && (element.className += (element.className ? " " : "") + d.containerClass), element.addEventListener("click", (function(n) {
                                var r = S(t),
                                    o = h(element, e, t);
                                v(o, n, r)
                            }))
                        },
                        inserted: function(element, t, n) {
                            var r = n.context,
                                l = f(t),
                                d = c(element, t, n),
                                h = S(n),
                                m = r,
                                v = null == m ? void 0 : m[d];
                            v && !v.destroyed || (v = new e(element, l), m[d] = v, y(v, h), h(o.Ready, v))
                        },
                        componentUpdated: function(element, e, t) {
                            var r, o, d, c, m, v, y, w, S, C, A, E, T = n(t, l.AutoUpdate);
                            if (x(T)) {
                                var $ = h(element, e, t);
                                if ($) {
                                    var k = f(e).loop;
                                    k && (null === (o = null === (r = $) || void 0 === r ? void 0 : r.loopDestroy) || void 0 === o || o.call(r)), null === (d = null == $ ? void 0 : $.update) || void 0 === d || d.call($), null === (m = null === (c = $.navigation) || void 0 === c ? void 0 : c.update) || void 0 === m || m.call(c), null === (y = null === (v = $.pagination) || void 0 === v ? void 0 : v.render) || void 0 === y || y.call(v), null === (S = null === (w = $.pagination) || void 0 === w ? void 0 : w.update) || void 0 === S || S.call(w), k && (null === (A = null === (C = $) || void 0 === C ? void 0 : C.loopCreate) || void 0 === A || A.call(C), null === (E = null == $ ? void 0 : $.update) || void 0 === E || E.call($))
                                }
                            }
                        },
                        unbind: function(element, e, t) {
                            var r, o = n(t, l.AutoDestroy);
                            if (x(o)) {
                                var d = h(element, e, t);
                                d && d.initialized && (null === (r = null == d ? void 0 : d.destroy) || void 0 === r || r.call(d, x(n(t, l.DeleteInstanceOnDestroy)), x(n(t, l.CleanupStylesOnDestroy))))
                            }
                        }
                    }
                }

                function S(e) {
                    var t;
                    return n.extend({
                        name: r.SwiperComponent,
                        props: (t = {
                            defaultOptions: {
                                type: Object,
                                required: !1,
                                default: function() {
                                    return {}
                                }
                            },
                            options: {
                                type: Object,
                                required: !1
                            }
                        }, t[l.AutoUpdate] = {
                            type: Boolean,
                            default: !0
                        }, t[l.AutoDestroy] = {
                            type: Boolean,
                            default: !0
                        }, t[l.DeleteInstanceOnDestroy] = {
                            type: Boolean,
                            required: !1,
                            default: !0
                        }, t[l.CleanupStylesOnDestroy] = {
                            type: Boolean,
                            required: !1,
                            default: !0
                        }, t),
                        data: function() {
                            var e;
                            return (e = {})[r.SwiperInstance] = null, e
                        },
                        computed: {
                            swiperInstance: {
                                cache: !1,
                                set: function(e) {
                                    this[r.SwiperInstance] = e
                                },
                                get: function() {
                                    return this[r.SwiperInstance]
                                }
                            },
                            swiperOptions: function() {
                                return this.options || this.defaultOptions
                            },
                            wrapperClass: function() {
                                return this.swiperOptions.wrapperClass || d.wrapperClass
                            }
                        },
                        methods: {
                            handleSwiperClick: function(e) {
                                v(this.swiperInstance, e, this.$emit.bind(this))
                            },
                            autoReLoopSwiper: function() {
                                var e, t;
                                if (this.swiperInstance && this.swiperOptions.loop) {
                                    var n = this.swiperInstance;
                                    null === (e = null == n ? void 0 : n.loopDestroy) || void 0 === e || e.call(n), null === (t = null == n ? void 0 : n.loopCreate) || void 0 === t || t.call(n)
                                }
                            },
                            updateSwiper: function() {
                                var e, t, n, r, o, d, c, h;
                                this[l.AutoUpdate] && this.swiperInstance && (this.autoReLoopSwiper(), null === (t = null === (e = this.swiperInstance) || void 0 === e ? void 0 : e.update) || void 0 === t || t.call(e), null === (r = null === (n = this.swiperInstance.navigation) || void 0 === n ? void 0 : n.update) || void 0 === r || r.call(n), null === (d = null === (o = this.swiperInstance.pagination) || void 0 === o ? void 0 : o.render) || void 0 === d || d.call(o), null === (h = null === (c = this.swiperInstance.pagination) || void 0 === c ? void 0 : c.update) || void 0 === h || h.call(c))
                            },
                            destroySwiper: function() {
                                var e, t;
                                this[l.AutoDestroy] && this.swiperInstance && this.swiperInstance.initialized && (null === (t = null === (e = this.swiperInstance) || void 0 === e ? void 0 : e.destroy) || void 0 === t || t.call(e, this[l.DeleteInstanceOnDestroy], this[l.CleanupStylesOnDestroy]))
                            },
                            initSwiper: function() {
                                this.swiperInstance = new e(this.$el, this.swiperOptions), y(this.swiperInstance, this.$emit.bind(this)), this.$emit(o.Ready, this.swiperInstance)
                            }
                        },
                        mounted: function() {
                            this.swiperInstance || this.initSwiper()
                        },
                        activated: function() {
                            this.updateSwiper()
                        },
                        updated: function() {
                            this.updateSwiper()
                        },
                        beforeDestroy: function() {
                            this.$nextTick(this.destroySwiper)
                        },
                        render: function(e) {
                            return e("div", {
                                staticClass: d.containerClass,
                                on: {
                                    click: this.handleSwiperClick
                                }
                            }, [this.$slots[f.ParallaxBg], e("div", {
                                class: this.wrapperClass
                            }, this.$slots.default), this.$slots[f.Pagination], this.$slots[f.PrevButton], this.$slots[f.NextButton], this.$slots[f.Scrollbar]])
                        }
                    })
                }! function(e) {
                    e.ParallaxBg = "parallax-bg", e.Pagination = "pagination", e.Scrollbar = "scrollbar", e.PrevButton = "button-prev", e.NextButton = "button-next"
                }(f || (f = {}));
                var C = n.extend({
                        name: r.SwiperSlideComponent,
                        computed: {
                            slideClass: function() {
                                var e, t;
                                return (null === (t = null === (e = this.$parent) || void 0 === e ? void 0 : e.swiperOptions) || void 0 === t ? void 0 : t.slideClass) || d.slideClass
                            }
                        },
                        methods: {
                            update: function() {
                                var e, t = this.$parent;
                                t[l.AutoUpdate] && (null === (e = null == t ? void 0 : t.swiperInstance) || void 0 === e || e.update())
                            }
                        },
                        mounted: function() {
                            this.update()
                        },
                        updated: function() {
                            this.update()
                        },
                        render: function(e) {
                            return e("div", {
                                class: this.slideClass
                            }, this.$slots.default)
                        }
                    }),
                    A = function(e) {
                        var t = function(n, o) {
                            if (!t.installed) {
                                var l = S(e);
                                o && (l.options.props.defaultOptions.default = function() {
                                    return o
                                }), n.component(r.SwiperComponent, l), n.component(r.SwiperSlideComponent, C), n.directive(r.SwiperDirective, x(e, o)), t.installed = !0
                            }
                        };
                        return t
                    };

                function E(e) {
                    var t;
                    return (t = {
                        version: "4.1.1",
                        install: A(e),
                        directive: x(e)
                    })[r.SwiperComponent] = S(e), t[r.SwiperSlideComponent] = C, t
                }
                var T = E(t),
                    $ = T.version,
                    k = T.install,
                    O = T.directive,
                    P = T.Swiper,
                    M = T.SwiperSlide;
                e.Swiper = P, e.SwiperSlide = M, e.default = T, e.directive = O, e.install = k, e.version = $, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, n(258), n(1))
        },
        187: function(e, t, n) {
            "use strict";
            var r = 37,
                o = 39,
                l = 27,
                script = {
                    props: {
                        images: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        index: {
                            type: Number,
                            default: 1
                        },
                        disableScroll: {
                            type: Boolean,
                            default: !1
                        },
                        background: {
                            type: String,
                            default: "rgba(0, 0, 0, 0.8)"
                        },
                        interfaceColor: {
                            type: String,
                            default: "rgba(255, 255, 255, 0.8)"
                        }
                    },
                    data: function() {
                        return {
                            currentIndex: this.index,
                            isImageLoaded: !1,
                            bodyOverflowStyle: "",
                            touch: {
                                count: 0,
                                x: 0,
                                y: 0,
                                multitouch: !1,
                                flag: !1
                            }
                        }
                    },
                    computed: {
                        formattedImages: function() {
                            return this.images.map((function(image) {
                                return "string" == typeof image ? {
                                    url: image
                                } : image
                            }))
                        }
                    },
                    watch: {
                        index: function(e) {
                            document && (this.currentIndex = e, this.disableScroll && "number" == typeof e ? document.body.style.overflow = "hidden" : this.disableScroll && !e && (document.body.style.overflow = this.bodyOverflowStyle))
                        },
                        currentIndex: function(e) {
                            this.setImageLoaded(e)
                        }
                    },
                    mounted: function() {
                        document && (this.bodyOverflowStyle = document.body.style.overflow, this.bindEvents())
                    },
                    beforeDestroy: function() {
                        document && (this.disableScroll && (document.body.style.overflow = this.bodyOverflowStyle), this.unbindEvents())
                    },
                    methods: {
                        close: function() {
                            this.$emit("close")
                        },
                        prev: function() {
                            0 !== this.currentIndex && (this.currentIndex -= 1, this.$emit("slide", {
                                index: this.currentIndex
                            }))
                        },
                        next: function() {
                            this.currentIndex !== this.images.length - 1 && (this.currentIndex += 1, this.$emit("slide", {
                                index: this.currentIndex
                            }))
                        },
                        imageLoaded: function(e, t) {
                            e.target.classList.add("loaded"), t === this.currentIndex && this.setImageLoaded(t)
                        },
                        getImageElByIndex: function(e) {
                            return (this.$refs["lg-img-" + e] || [])[0]
                        },
                        setImageLoaded: function(e) {
                            var t = this.getImageElByIndex(e);
                            this.isImageLoaded = !!t && t.classList.contains("loaded")
                        },
                        shouldPreload: function(e) {
                            return !!(this.getImageElByIndex(e) || {}).src || e === this.currentIndex || e === this.currentIndex - 1 || e === this.currentIndex + 1
                        },
                        bindEvents: function() {
                            document.addEventListener("keydown", this.keyDownHandler, !1)
                        },
                        unbindEvents: function() {
                            document.removeEventListener("keydown", this.keyDownHandler, !1)
                        },
                        touchstartHandler: function(e) {
                            this.touch.count += 1, this.touch.count > 1 && (this.touch.multitouch = !0), this.touch.x = e.changedTouches[0].pageX, this.touch.y = e.changedTouches[0].pageY
                        },
                        touchmoveHandler: function(e) {
                            if (!this.touch.flag && !this.touch.multitouch) {
                                var t = e.touches[0] || e.changedTouches[0];
                                t.pageX - this.touch.x > 40 ? (this.touch.flag = !0, this.prev()) : t.pageX - this.touch.x < -40 && (this.touch.flag = !0, this.next())
                            }
                        },
                        touchendHandler: function() {
                            this.touch.count -= 1, this.touch.count <= 0 && (this.touch.multitouch = !1), this.touch.flag = !1
                        },
                        keyDownHandler: function(e) {
                            switch (e.keyCode) {
                                case r:
                                    this.prev();
                                    break;
                                case o:
                                    this.next();
                                    break;
                                case l:
                                    this.close()
                            }
                        }
                    }
                };
            var d = function(template, style, script, e, t, n, r, o, l, d) {
                    "boolean" != typeof r && (l = o, o = r, r = !1);
                    var c, h = "function" == typeof script ? script.options : script;
                    if (template && template.render && (h.render = template.render, h.staticRenderFns = template.staticRenderFns, h._compiled = !0, t && (h.functional = !0)), e && (h._scopeId = e), n ? (c = function(e) {
                            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), style && style.call(this, l(e)), e && e._registeredComponents && e._registeredComponents.add(n)
                        }, h._ssrRegister = c) : style && (c = r ? function() {
                            style.call(this, d(this.$root.$options.shadowRoot))
                        } : function(e) {
                            style.call(this, o(e))
                        }), c)
                        if (h.functional) {
                            var f = h.render;
                            h.render = function(e, t) {
                                return c.call(t), f(e, t)
                            }
                        } else {
                            var m = h.beforeCreate;
                            h.beforeCreate = m ? [].concat(m, c) : [c]
                        }
                    return script
                },
                c = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
            var h = document.head || document.getElementsByTagName("head")[0],
                f = {};
            var m = function(e) {
                    return function(e, style) {
                        return function(e, t) {
                            var n = c ? t.media || "default" : e,
                                style = f[n] || (f[n] = {
                                    ids: new Set,
                                    styles: []
                                });
                            if (!style.ids.has(e)) {
                                style.ids.add(e);
                                var code = t.source;
                                if (t.map && (code += "\n/*# sourceURL=" + t.map.sources[0] + " */", code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t.map)))) + " */"), style.element || (style.element = document.createElement("style"), style.element.type = "text/css", t.media && style.element.setAttribute("media", t.media), h.appendChild(style.element)), "styleSheet" in style.element) style.styles.push(code), style.element.styleSheet.cssText = style.styles.filter(Boolean).join("\n");
                                else {
                                    var r = style.ids.size - 1,
                                        o = document.createTextNode(code),
                                        l = style.element.childNodes;
                                    l[r] && style.element.removeChild(l[r]), l.length ? style.element.insertBefore(o, l[r]) : style.element.appendChild(o)
                                }
                            }
                        }(e, style)
                    }
                },
                v = script,
                y = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, ["number" == typeof e.index ? n("div", {
                        staticClass: "light-gallery",
                        on: {
                            touchstart: e.touchstartHandler,
                            touchmove: e.touchmoveHandler,
                            touchend: e.touchendHandler
                        }
                    }, [n("div", {
                        staticClass: "light-gallery__modal",
                        style: "background: " + e.background
                    }, [n("div", {
                        class: ["light-gallery__spinner", !e.isImageLoaded || "hide"]
                    }, [n("div", {
                        staticClass: "light-gallery__dot",
                        style: "border-color: " + e.interfaceColor
                    }), e._v(" "), n("div", {
                        staticClass: "light-gallery__dot",
                        style: "border-color: " + e.interfaceColor
                    }), e._v(" "), n("div", {
                        staticClass: "light-gallery__dot",
                        style: "border-color: " + e.interfaceColor
                    })]), e._v(" "), n("div", {
                        staticClass: "light-gallery__container"
                    }, [n("ul", {
                        staticClass: "light-gallery__content"
                    }, e._l(e.formattedImages, (function(image, t) {
                        return n("li", {
                            key: t,
                            staticClass: "light-gallery__image-container",
                            style: "transform: translate3d(" + -100 * e.currentIndex + "%, 0px, 0px);"
                        }, [n("div", {
                            staticClass: "light-gallery__image"
                        }, [n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: image.title && e.isImageLoaded,
                                expression: "image.title && isImageLoaded"
                            }],
                            staticClass: "light-gallery__text",
                            style: "background: " + e.background + "; color: " + e.interfaceColor
                        }, [e._v("\n                " + e._s(image.title) + "\n              ")]), e._v(" "), n("img", {
                            ref: "lg-img-" + t,
                            refInFor: !0,
                            attrs: {
                                src: !!e.shouldPreload(t) && image.url
                            },
                            on: {
                                load: function(n) {
                                    return e.imageLoaded(n, t)
                                }
                            }
                        })])])
                    })), 0)]), e._v(" "), e.currentIndex > 0 ? n("button", {
                        staticClass: "light-gallery__prev",
                        style: "background: " + e.background,
                        on: {
                            click: function(t) {
                                return e.prev()
                            }
                        }
                    }, [n("svg", {
                        attrs: {
                            width: "25",
                            height: "40",
                            viewBox: "0 0 25 40"
                        }
                    }, [n("polyline", {
                        attrs: {
                            points: "19 5 5 20 19 35",
                            "stroke-width": "3",
                            "stroke-linecap": "butt",
                            fill: "none",
                            "stroke-linejoin": "round",
                            stroke: e.interfaceColor
                        }
                    })])]) : e._e(), e._v(" "), e.currentIndex + 1 < e.images.length ? n("button", {
                        staticClass: "light-gallery__next",
                        style: "background: " + e.background,
                        on: {
                            click: function(t) {
                                return e.next()
                            }
                        }
                    }, [n("svg", {
                        attrs: {
                            width: "25",
                            height: "40",
                            viewBox: "0 0 25 40"
                        }
                    }, [n("polyline", {
                        attrs: {
                            points: "6 5 20 20 6 35",
                            "stroke-width": "3",
                            "stroke-linecap": "butt",
                            fill: "none",
                            "stroke-linejoin": "round",
                            stroke: e.interfaceColor
                        }
                    })])]) : e._e(), e._v(" "), n("button", {
                        staticClass: "light-gallery__close",
                        style: "background: " + e.background,
                        on: {
                            click: function(t) {
                                return e.close()
                            }
                        }
                    }, [n("svg", {
                        attrs: {
                            width: "30",
                            height: "30"
                        }
                    }, [n("g", {
                        attrs: {
                            "stroke-width": "3",
                            stroke: e.interfaceColor
                        }
                    }, [n("line", {
                        attrs: {
                            x1: "5",
                            y1: "5",
                            x2: "25",
                            y2: "25"
                        }
                    }), e._v(" "), n("line", {
                        attrs: {
                            x1: "5",
                            y1: "25",
                            x2: "25",
                            y2: "5"
                        }
                    })])])])])]) : e._e()])
                };
            y._withStripped = !0;
            var w = d({
                render: y,
                staticRenderFns: []
            }, (function(e) {
                e && e("data-v-2951e615_0", {
                    source: ".light-gallery__modal[data-v-2951e615] {\n  position: fixed;\n  display: block;\n  z-index: 1001;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.light-gallery__content[data-v-2951e615] {\n  height: 100%;\n  width: 100%;\n  white-space: nowrap;\n  padding: 0;\n  margin: 0;\n}\n.light-gallery__container[data-v-2951e615] {\n  position: absolute;\n  z-index: 1002;\n  display: block;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.light-gallery__image-container[data-v-2951e615] {\n  display: inline-table;\n  vertical-align: middle;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: left .4s ease, transform .4s ease, -webkit-transform .4s ease;\n}\n.light-gallery__image[data-v-2951e615] {\n  display: inline-block;\n  position: relative;\n  margin: 0 auto;\n  max-width: 100%;\n  max-height: 100vh;\n}\n.light-gallery__image img[data-v-2951e615] {\n  max-width: 100%;\n  max-height: 100vh;\n  opacity: 0;\n  transition: opacity .2s;\n}\n.light-gallery__image img.loaded[data-v-2951e615] {\n  opacity: 1;\n}\n.light-gallery__text[data-v-2951e615] {\n  position: absolute;\n  z-index: 1000;\n  bottom: 0;\n  display: block;\n  margin: 0 auto;\n  padding: 12px 30px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.light-gallery__next[data-v-2951e615], .light-gallery__prev[data-v-2951e615], .light-gallery__close[data-v-2951e615] {\n  position: absolute;\n  z-index: 1002;\n  display: block;\n  background: transparent;\n  border: 0;\n  line-height: 0;\n  outline: none;\n  padding: 7px;\n  cursor: pointer;\n}\n.light-gallery__next[data-v-2951e615] {\n  top: 50%;\n  transform: translate(0, -50%);\n  right: 1.5%;\n  vertical-align: middle;\n}\n.light-gallery__prev[data-v-2951e615] {\n  top: 50%;\n  transform: translate(0, -50%);\n  left: 1.5%;\n}\n.light-gallery__close[data-v-2951e615] {\n  right: 0;\n  padding: 12px;\n}\n.light-gallery__spinner[data-v-2951e615] {\n  position: absolute;\n  z-index: 1003;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0 auto;\n  display: block;\n  height: 15px;\n  width: auto;\n  box-sizing: border-box;\n  text-align: center;\n}\n.light-gallery__spinner.hide[data-v-2951e615] {\n  display: none;\n}\n.light-gallery__dot[data-v-2951e615] {\n  float: left;\n  margin: 0 calc(15px / 2);\n  width: 15px;\n  height: 15px;\n  border: calc(15px / 5) solid rgba(255, 255, 255, 0.8);\n  border-radius: 50%;\n  transform: scale(0);\n  box-sizing: border-box;\n  animation: spinner-animation-data-v-2951e615 1000ms ease infinite 0ms;\n}\n.light-gallery__dot[data-v-2951e615]:nth-child(1) {\n  animation-delay: calc(300ms * 1);\n}\n.light-gallery__dot[data-v-2951e615]:nth-child(2) {\n  animation-delay: calc(300ms * 2);\n}\n.light-gallery__dot[data-v-2951e615]:nth-child(3) {\n  animation-delay: calc(300ms * 3);\n}\n.fade-enter-active[data-v-2951e615], .fade-leave-active[data-v-2951e615] {\n  position: fixed;\n  z-index: 1000;\n  transition: opacity .2s;\n}\n.fade-enter[data-v-2951e615], .fade-leave-to[data-v-2951e615] {\n  position: fixed;\n  opacity: 0;\n  z-index: 1000;\n}\n@keyframes spinner-animation-data-v-2951e615 {\n50% {\n    transform: scale(1);\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n\n/*# sourceMappingURL=light-gallery.vue.map */",
                    map: {
                        version: 3,
                        sources: ["/home/pere.monfort/code/vue-light-gallery/src/light-gallery.vue", "light-gallery.vue"],
                        names: [],
                        mappings: "AAgTA;EACA,eAAA;EACA,cAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAAA;AAGA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;AAAA;AAGA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,WAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,kBAAA;AAAA;AAGA;EACA,qBAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yEAAA;AAAA;AAGA;EAEA,qBAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;AAAA;AANA;EAYA,eAAA;EACA,iBAAA;EACA,UAAA;EACA,uBAAA;AAAA;AAfA;EAmBA,UAAA;AAAA;AAMA;EACA,kBAAA;EACA,aAAA;EACA,SAAA;EACA,cAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;EACA,sBAAA;AAAA;AAGA;EAGA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,uBAAA;EACA,SAAA;EACA,cAAA;EACA,aAAA;EACA,YAAA;EACA,eAAA;AAAA;AAGA;EACA,QAAA;EACA,6BAAA;EACA,WAAA;EACA,sBAAA;AAAA;AAGA;EACA,QAAA;EACA,6BAAA;EACA,UAAA;AAAA;AAGA;EACA,QAAA;EACA,aAAA;AAAA;AAGA;EAEA,kBAAA;EACA,aAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,cAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;AAAA;AAZA;EAgBA,aAAA;AAAA;AAIA;EAEA,WAAA;EACA,wBAAA;EACA,WAAA;EACA,YAAA;EACA,qDAAA;EACA,kBAAA;EACA,mBAAA;EACA,sBAAA;EACA,qEAAA;AAAA;AAVA;EAcA,gCAAA;AAAA;AAdA;EAkBA,gCAAA;AAAA;AAlBA;EAsBA,gCAAA;AAAA;AAKA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;AAAA;AAGA;EACA,eAAA;EACA,UAAA;EACA,aAAA;AAAA;AAGA;AACA;IACA,mBAAA;IACA,UAAA;AAAA;AAEA;IACA,UAAA;AAAA;AAAA;;AChVA,4CAA4C",
                        file: "light-gallery.vue",
                        sourcesContent: ['<template>\n  <transition name="fade">\n    <div\n      v-if="typeof index === \'number\'"\n      class="light-gallery"\n      @touchstart="touchstartHandler"\n      @touchmove="touchmoveHandler"\n      @touchend="touchendHandler"\n    >\n      <div\n        class="light-gallery__modal"\n        :style="`background: ${background}`"\n      >\n        <div\n          :class="[\'light-gallery__spinner\', !isImageLoaded || \'hide\']"\n        >\n          <div\n            class="light-gallery__dot"\n            :style="`border-color: ${interfaceColor}`"\n          />\n          <div\n            class="light-gallery__dot"\n            :style="`border-color: ${interfaceColor}`"\n          />\n          <div\n            class="light-gallery__dot"\n            :style="`border-color: ${interfaceColor}`"\n          />\n        </div>\n        <div class="light-gallery__container">\n          <ul class="light-gallery__content">\n            <li\n              v-for="(image, imageIndex) in formattedImages"\n              :key="imageIndex"\n              :style="`transform: translate3d(${currentIndex * -100}%, 0px, 0px);`"\n              class="light-gallery__image-container"\n            >\n              <div class="light-gallery__image">\n                <div\n                  v-show="image.title && isImageLoaded"\n                  class="light-gallery__text"\n                  :style="`background: ${background}; color: ${interfaceColor}`"\n                >\n                  {{ image.title }}\n                </div>\n                <img\n                  :ref="`lg-img-${imageIndex}`"\n                  :src="shouldPreload(imageIndex) ? image.url : false"\n                  @load="imageLoaded($event, imageIndex)"\n                >\n              </div>\n            </li>\n          </ul>\n        </div>\n        <button\n          v-if="currentIndex > 0"\n          class="light-gallery__prev"\n          :style="`background: ${background}`"\n          @click="prev()"\n        >\n          <svg\n            width="25"\n            height="40"\n            viewBox="0 0 25 40"\n          >\n            <polyline\n              points="19 5 5 20 19 35"\n              stroke-width="3"\n              stroke-linecap="butt"\n              fill="none"\n              stroke-linejoin="round"\n              :stroke="interfaceColor"\n            />\n          </svg>\n        </button>\n        <button\n          v-if="currentIndex + 1 < images.length"\n          class="light-gallery__next"\n          :style="`background: ${background}`"\n          @click="next()"\n        >\n          <svg\n            width="25"\n            height="40"\n            viewBox="0 0 25 40"\n          >\n            <polyline\n              points="6 5 20 20 6 35"\n              stroke-width="3"\n              stroke-linecap="butt"\n              fill="none"\n              stroke-linejoin="round"\n              :stroke="interfaceColor"\n            />\n          </svg>\n        </button>\n        <button\n          class="light-gallery__close"\n          :style="`background: ${background}`"\n          @click="close()"\n        >\n          <svg\n            width="30"\n            height="30"\n          >\n            <g\n              stroke-width="3"\n              :stroke="interfaceColor"\n            >\n              <line\n                x1="5"\n                y1="5"\n                x2="25"\n                y2="25"\n              />\n              <line\n                x1="5"\n                y1="25"\n                x2="25"\n                y2="5"\n              />\n            </g>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </transition>\n</template>\n\n<script>\nconst keyMap = {\n  LEFT: 37,\n  RIGHT: 39,\n  ESC: 27,\n};\n\nexport default {\n  props: {\n    images: {\n      type: Array,\n      default: () => [],\n    },\n    index: {\n      type: Number,\n      default: 1,\n    },\n    disableScroll: {\n      type: Boolean,\n      default: false,\n    },\n    background: {\n      type: String,\n      default: \'rgba(0, 0, 0, 0.8)\',\n    },\n    interfaceColor: {\n      type: String,\n      default: \'rgba(255, 255, 255, 0.8)\',\n    },\n  },\n  data() {\n    return {\n      currentIndex: this.index,\n      isImageLoaded: false,\n      bodyOverflowStyle: \'\',\n      touch: {\n        count: 0,\n        x: 0,\n        y: 0,\n        multitouch: false,\n        flag: false,\n      },\n    };\n  },\n  computed: {\n    formattedImages() {\n      return this.images.map(image => (typeof image === \'string\'\n        ? { url: image } : image\n      ));\n    },\n  },\n  watch: {\n    index(val) {\n      if (!document) return;\n\n      this.currentIndex = val;\n\n      if (this.disableScroll && typeof val === \'number\') {\n        document.body.style.overflow = \'hidden\';\n      } else if (this.disableScroll && !val) {\n        document.body.style.overflow = this.bodyOverflowStyle;\n      }\n    },\n    currentIndex(val) {\n      this.setImageLoaded(val);\n    },\n  },\n  mounted() {\n    if (!document) return;\n\n    this.bodyOverflowStyle = document.body.style.overflow;\n    this.bindEvents();\n  },\n  beforeDestroy() {\n    if (!document) return;\n\n    if (this.disableScroll) {\n      document.body.style.overflow = this.bodyOverflowStyle;\n    }\n    this.unbindEvents();\n  },\n  methods: {\n    close() {\n      this.$emit(\'close\');\n    },\n    prev() {\n      if (this.currentIndex === 0) return;\n      this.currentIndex -= 1;\n      this.$emit(\'slide\', { index: this.currentIndex });\n    },\n    next() {\n      if (this.currentIndex === this.images.length - 1) return;\n      this.currentIndex += 1;\n      this.$emit(\'slide\', { index: this.currentIndex });\n    },\n    imageLoaded($event, imageIndex) {\n      const { target } = $event;\n      target.classList.add(\'loaded\');\n\n      if (imageIndex === this.currentIndex) {\n        this.setImageLoaded(imageIndex);\n      }\n    },\n    getImageElByIndex(index) {\n      const elements = this.$refs[`lg-img-${index}`] || [];\n      return elements[0];\n    },\n    setImageLoaded(index) {\n      const el = this.getImageElByIndex(index);\n      this.isImageLoaded = !el ? false : el.classList.contains(\'loaded\');\n    },\n    shouldPreload(index) {\n      const el = this.getImageElByIndex(index) || {};\n      const { src } = el;\n\n      return !!src\n       || index === this.currentIndex\n       || index === this.currentIndex - 1\n       || index === this.currentIndex + 1;\n    },\n    bindEvents() {\n      document.addEventListener(\'keydown\', this.keyDownHandler, false);\n    },\n    unbindEvents() {\n      document.removeEventListener(\'keydown\', this.keyDownHandler, false);\n    },\n    touchstartHandler(event) {\n      this.touch.count += 1;\n      if (this.touch.count > 1) {\n        this.touch.multitouch = true;\n      }\n      this.touch.x = event.changedTouches[0].pageX;\n      this.touch.y = event.changedTouches[0].pageY;\n    },\n    touchmoveHandler(event) {\n      if (this.touch.flag || this.touch.multitouch) return;\n\n      const touchEvent = event.touches[0] || event.changedTouches[0];\n\n      if (touchEvent.pageX - this.touch.x > 40) {\n        this.touch.flag = true;\n        this.prev();\n      } else if (touchEvent.pageX - this.touch.x < -40) {\n        this.touch.flag = true;\n        this.next();\n      }\n    },\n    touchendHandler() {\n      this.touch.count -= 1;\n      if (this.touch.count <= 0) {\n        this.touch.multitouch = false;\n      }\n      this.touch.flag = false;\n    },\n    keyDownHandler(event) {\n      switch (event.keyCode) {\n        case keyMap.LEFT:\n          this.prev();\n          break;\n        case keyMap.RIGHT:\n          this.next();\n          break;\n        case keyMap.ESC:\n          this.close();\n          break;\n        default:\n          break;\n      }\n    },\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n.light-gallery {\n  &__modal {\n    position: fixed;\n    display: block;\n    z-index: 1001;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n\n  &__content {\n    height: 100%;\n    width: 100%;\n    white-space: nowrap;\n    padding: 0;\n    margin: 0;\n  }\n\n  &__container {\n    position: absolute;\n    z-index: 1002;\n    display: block;\n    width: 100%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n  }\n\n  &__image-container {\n    display: inline-table;\n    vertical-align: middle;\n    position: relative;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    transition: left .4s ease, transform .4s ease, -webkit-transform .4s ease;\n  }\n\n  &__image {\n    & {\n      display: inline-block;\n      position: relative;\n      margin: 0 auto;\n      max-width: 100%;\n      max-height: 100vh;\n      // opacity: 0;\n    }\n\n    & img {\n      & {\n        max-width: 100%;\n        max-height: 100vh;\n        opacity: 0;\n        transition: opacity .2s;\n      }\n\n      &.loaded{\n        opacity: 1;\n      }\n    }\n\n  }\n\n  &__text {\n    position: absolute;\n    z-index: 1000;\n    bottom: 0;\n    display: block;\n    margin: 0 auto;\n    padding: 12px 30px;\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  &__next,\n  &__prev,\n  &__close {\n    position: absolute;\n    z-index: 1002;\n    display: block;\n    background: transparent;\n    border: 0;\n    line-height: 0;\n    outline: none;\n    padding: 7px;\n    cursor: pointer;\n  }\n\n  &__next {\n    top: 50%;\n    transform: translate(0, -50%);\n    right: 1.5%;\n    vertical-align: middle;\n  }\n\n  &__prev {\n    top: 50%;\n    transform: translate(0, -50%);\n    left: 1.5%;\n  }\n\n  &__close {\n    right: 0;\n    padding: 12px;\n  }\n\n  &__spinner {\n    & {\n      position: absolute;\n      z-index: 1003;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      margin: 0 auto;\n      display: block;\n      height: 15px;\n      width: auto;\n      box-sizing: border-box;\n      text-align: center;\n    }\n\n    &.hide {\n      display: none;\n    }\n  }\n\n  &__dot {\n    & {\n      float: left;\n      margin: 0 calc(15px / 2);\n      width: 15px;\n      height: 15px;\n      border: calc(15px / 5) solid rgba(255, 255, 255, 0.8);\n      border-radius: 50%;\n      transform: scale(0);\n      box-sizing: border-box;\n      animation: spinner-animation 1000ms ease infinite 0ms;\n    }\n\n    &:nth-child(1) {\n      animation-delay: calc(300ms * 1);\n    }\n\n    &:nth-child(2) {\n      animation-delay: calc(300ms * 2);\n    }\n\n    &:nth-child(3) {\n      animation-delay: calc(300ms * 3);\n    }\n  }\n}\n\n.fade-enter-active, .fade-leave-active {\n  position: fixed;\n  z-index: 1000;\n  transition: opacity .2s;\n}\n\n.fade-enter, .fade-leave-to {\n  position: fixed;\n  opacity: 0;\n  z-index: 1000;\n}\n\n@keyframes spinner-animation {\n  50% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n</style>\n', ".light-gallery__modal {\n  position: fixed;\n  display: block;\n  z-index: 1001;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\n.light-gallery__content {\n  height: 100%;\n  width: 100%;\n  white-space: nowrap;\n  padding: 0;\n  margin: 0; }\n\n.light-gallery__container {\n  position: absolute;\n  z-index: 1002;\n  display: block;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center; }\n\n.light-gallery__image-container {\n  display: inline-table;\n  vertical-align: middle;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: left .4s ease, transform .4s ease, -webkit-transform .4s ease; }\n\n.light-gallery__image {\n  display: inline-block;\n  position: relative;\n  margin: 0 auto;\n  max-width: 100%;\n  max-height: 100vh; }\n\n.light-gallery__image img {\n  max-width: 100%;\n  max-height: 100vh;\n  opacity: 0;\n  transition: opacity .2s; }\n\n.light-gallery__image img.loaded {\n  opacity: 1; }\n\n.light-gallery__text {\n  position: absolute;\n  z-index: 1000;\n  bottom: 0;\n  display: block;\n  margin: 0 auto;\n  padding: 12px 30px;\n  width: 100%;\n  box-sizing: border-box; }\n\n.light-gallery__next, .light-gallery__prev, .light-gallery__close {\n  position: absolute;\n  z-index: 1002;\n  display: block;\n  background: transparent;\n  border: 0;\n  line-height: 0;\n  outline: none;\n  padding: 7px;\n  cursor: pointer; }\n\n.light-gallery__next {\n  top: 50%;\n  transform: translate(0, -50%);\n  right: 1.5%;\n  vertical-align: middle; }\n\n.light-gallery__prev {\n  top: 50%;\n  transform: translate(0, -50%);\n  left: 1.5%; }\n\n.light-gallery__close {\n  right: 0;\n  padding: 12px; }\n\n.light-gallery__spinner {\n  position: absolute;\n  z-index: 1003;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0 auto;\n  display: block;\n  height: 15px;\n  width: auto;\n  box-sizing: border-box;\n  text-align: center; }\n\n.light-gallery__spinner.hide {\n  display: none; }\n\n.light-gallery__dot {\n  float: left;\n  margin: 0 calc(15px / 2);\n  width: 15px;\n  height: 15px;\n  border: calc(15px / 5) solid rgba(255, 255, 255, 0.8);\n  border-radius: 50%;\n  transform: scale(0);\n  box-sizing: border-box;\n  animation: spinner-animation 1000ms ease infinite 0ms; }\n\n.light-gallery__dot:nth-child(1) {\n  animation-delay: calc(300ms * 1); }\n\n.light-gallery__dot:nth-child(2) {\n  animation-delay: calc(300ms * 2); }\n\n.light-gallery__dot:nth-child(3) {\n  animation-delay: calc(300ms * 3); }\n\n.fade-enter-active, .fade-leave-active {\n  position: fixed;\n  z-index: 1000;\n  transition: opacity .2s; }\n\n.fade-enter, .fade-leave-to {\n  position: fixed;\n  opacity: 0;\n  z-index: 1000; }\n\n@keyframes spinner-animation {\n  50% {\n    transform: scale(1);\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n/*# sourceMappingURL=light-gallery.vue.map */"]
                    },
                    media: void 0
                })
            }), v, "data-v-2951e615", !1, undefined, m, void 0);
            var x = {
                install: function e(t, n) {
                    if (void 0 === n && (n = {}), !e.installed) {
                        e.installed = !0;
                        var r = n.componentId;
                        void 0 === r && (r = "LightGallery"), t.component(r, w)
                    }
                }
            };
            t.a = x
        },
        188: function(e, t, n) {
            "use strict";
            var r, o = (r = "undefined" != typeof window && window.devicePixelRatio || 1, function(e) {
                    return Math.round(e * r) / r
                }),
                l = function() {
                    for (var e = navigator.userAgent.toLowerCase(), t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], n = !1, r = 0; r < t.length; r++)
                        if (e.indexOf(t[r].toLowerCase()) > 0) {
                            n = !0;
                            break
                        }
                    return n
                }();

            function d(input) {
                return Array.prototype.isArray ? Array.isArray(input) : input instanceof Array || "[object Array]" === Object.prototype.toString.call(input)
            }

            function c(a, b) {
                return Object.prototype.toString.call(a) !== Object.prototype.toString.call(b) || (d(a) && a.length === b.length ? a.some((function(e, i) {
                    return e !== b[i]
                })) : a !== b)
            }
            var h = document.createElement("div").style,
                f = function() {
                    var e = {
                        webkit: "webkitTransform",
                        Moz: "MozTransform",
                        O: "OTransform",
                        ms: "msTransform",
                        standard: "transform"
                    };
                    for (var t in e)
                        if (void 0 !== h[e[t]]) return t;
                    return !1
                }();

            function m(style) {
                return !1 !== f && ("standard" === f ? "transitionEnd" === style ? "transitionend" : style : f + style.charAt(0).toUpperCase() + style.substr(1))
            }

            function v(e, t, n, r) {
                e.addEventListener(t, n, {
                    passive: !1,
                    capture: !!r
                })
            }

            function y(e, t, n, r) {
                e.removeEventListener(t, n, {
                    passive: !1,
                    capture: !!r
                })
            }
            var w = m("transform"),
                x = m("transitionDuration"),
                S = m("transitionEnd"),
                C = "touchstart",
                A = "touchmove",
                E = "touchend",
                T = "touchcancel",
                $ = "mousedown",
                k = "mousemove",
                O = "mouseup",
                P = "mouseleave",
                M = "keydown",
                _ = "keyup",
                I = "resize",
                j = {
                    name: "vue-range-slider",
                    props: {
                        show: {
                            type: Boolean,
                            default: !0
                        },
                        value: {
                            type: [String, Number, Array, Object],
                            default: 0
                        },
                        min: {
                            type: Number,
                            default: 0
                        },
                        max: {
                            type: Number,
                            default: 100
                        },
                        step: {
                            type: Number,
                            default: 1
                        },
                        width: {
                            type: [Number, String],
                            default: "auto"
                        },
                        height: {
                            type: [Number, String],
                            default: 6
                        },
                        dotSize: {
                            type: Number,
                            default: 16
                        },
                        dotWidth: {
                            type: Number,
                            required: !1
                        },
                        dotHeight: {
                            type: Number,
                            required: !1
                        },
                        stopPropagation: {
                            type: Boolean,
                            default: !1
                        },
                        eventType: {
                            type: String,
                            default: "auto"
                        },
                        realTime: {
                            type: Boolean,
                            default: !1
                        },
                        tooltip: {
                            type: [String, Boolean],
                            default: "always",
                            validator: function(e) {
                                return ["hover", "always"].indexOf(e) > -1
                            }
                        },
                        direction: {
                            type: String,
                            default: "horizontal",
                            validator: function(e) {
                                return ["horizontal", "vertical"].indexOf(e) > -1
                            }
                        },
                        reverse: {
                            type: Boolean,
                            default: !1
                        },
                        disabled: {
                            type: [Boolean, Array],
                            default: !1
                        },
                        piecewiseLabel: {
                            type: Boolean,
                            default: !1
                        },
                        piecewise: {
                            type: Boolean,
                            default: !1
                        },
                        processDraggable: {
                            type: Boolean,
                            default: !1
                        },
                        clickable: {
                            type: Boolean,
                            default: !0
                        },
                        fixed: {
                            type: Boolean,
                            default: !1
                        },
                        debug: {
                            type: Boolean,
                            default: !0
                        },
                        minRange: {
                            type: Number
                        },
                        maxRange: {
                            type: Number
                        },
                        tooltipMerge: {
                            type: Boolean,
                            default: !0
                        },
                        startAnimation: {
                            type: Boolean,
                            default: !1
                        },
                        lazy: {
                            type: Boolean,
                            default: !1
                        },
                        enableCross: {
                            type: Boolean,
                            default: !0
                        },
                        speed: {
                            type: Number,
                            default: .5
                        },
                        useKeyboard: {
                            type: Boolean,
                            default: !1
                        },
                        actionsKeyboard: {
                            type: Array,
                            default: function() {
                                return [function(i) {
                                    return i - 1
                                }, function(i) {
                                    return i + 1
                                }]
                            }
                        },
                        data: Array,
                        formatter: [String, Function],
                        mergeFormatter: [String, Function],
                        tooltipDir: [Array, String],
                        tooltipStyle: [Array, Object, Function],
                        sliderStyle: [Array, Object, Function],
                        focusStyle: [Array, Object, Function],
                        disabledStyle: Object,
                        processStyle: Object,
                        bgStyle: Object,
                        piecewiseStyle: Object,
                        piecewiseActiveStyle: Object,
                        disabledDotStyle: [Array, Object, Function],
                        labelStyle: Object,
                        labelActiveStyle: Object
                    },
                    data: function() {
                        return {
                            currentValue: 0,
                            size: 0,
                            fixedValue: 0,
                            focusSlider: 0,
                            currentSlider: 0,
                            flag: !1,
                            processFlag: !1,
                            processSign: !1,
                            keydownFlag: !1,
                            focusFlag: !1,
                            dragFlag: !1,
                            crossFlag: !1,
                            isComponentExists: !0,
                            isMounted: !1
                        }
                    },
                    render: function(e) {
                        var t = this,
                            n = [];
                        if (this.isRange) {
                            var r = e("div", {
                                ref: "dot0",
                                staticClass: "slider-dot",
                                class: [this.tooltipStatus, {
                                    "slider-dot-focus": this.focusFlag && 0 === this.focusSlider,
                                    "slider-dot-dragging": this.flag && 0 === this.currentSlider,
                                    "slider-dot-disabled": !this.boolDisabled && this.disabledArray[0]
                                }],
                                style: [this.dotStyles, !this.boolDisabled && this.disabledArray[0] ? this.disabledDotStyles[0] : null, this.sliderStyles[0], this.focusFlag && 0 === this.focusSlider ? this.focusStyles[0] : null]
                            }, [e("div", {
                                ref: "tooltip0",
                                staticClass: "slider-tooltip-wrap",
                                class: "slider-tooltip-".concat(this.tooltipDirection[0])
                            }, [this._t("tooltip", [e("span", {
                                staticClass: "slider-tooltip",
                                style: this.tooltipStyles[0]
                            }, this.formatter ? this.formatting(this.val[0]) : this.val[0])], {
                                value: this.val[0],
                                index: 0,
                                disabled: !this.boolDisabled && this.disabledArray[0]
                            })])]);
                            n.push(r);
                            var o = e("div", {
                                ref: "dot1",
                                staticClass: "slider-dot",
                                class: [this.tooltipStatus, {
                                    "slider-dot-focus": this.focusFlag && 1 === this.focusSlider,
                                    "slider-dot-dragging": this.flag && 1 === this.currentSlider,
                                    "slider-dot-disabled": !this.boolDisabled && this.disabledArray[1]
                                }],
                                style: [this.dotStyles, !this.boolDisabled && this.disabledArray[1] ? this.disabledDotStyles[1] : null, this.sliderStyles[1], this.focusFlag && 1 === this.focusSlider ? this.focusStyles[1] : null]
                            }, [e("div", {
                                ref: "tooltip1",
                                staticClass: "slider-tooltip-wrap",
                                class: "slider-tooltip-".concat(this.tooltipDirection[1])
                            }, [this._t("tooltip", [e("span", {
                                staticClass: "slider-tooltip",
                                style: this.tooltipStyles[1]
                            }, this.formatter ? this.formatting(this.val[1]) : this.val[1])], {
                                value: this.val[1],
                                index: 1,
                                disabled: !this.boolDisabled && this.disabledArray[1]
                            })])]);
                            n.push(o)
                        } else {
                            var l = e("div", {
                                ref: "dot",
                                staticClass: "slider-dot",
                                class: [this.tooltipStatus, {
                                    "slider-dot-focus": this.focusFlag && 0 === this.focusSlider,
                                    "slider-dot-dragging": this.flag && 0 === this.currentSlider
                                }],
                                style: [this.dotStyles, this.sliderStyles, this.focusFlag && 0 === this.focusSlider ? this.focusStyles : null]
                            }, [e("div", {
                                staticClass: "slider-tooltip-wrap",
                                class: "slider-tooltip-".concat(this.tooltipDirection)
                            }, [this._t("tooltip", [e("span", {
                                staticClass: "slider-tooltip",
                                style: this.tooltipStyles
                            }, this.formatter ? this.formatting(this.val) : this.val)], {
                                value: this.val
                            })])]);
                            n.push(l)
                        }
                        var d = this.piecewiseDotWrap.length,
                            c = e("ul", {
                                staticClass: "slider-piecewise"
                            }, this._l(this.piecewiseDotWrap, (function(n, i) {
                                var r = [];
                                t.piecewise && r.push(e("span", {
                                    staticClass: "piecewise-dot",
                                    style: [t.piecewiseStyle, n.inRange ? t.piecewiseActiveStyle : null]
                                }));
                                var o = [];
                                return t.piecewiseLabel && o.push(e("span", {
                                    staticClass: "piecewise-label",
                                    style: [t.labelStyle, n.inRange ? t.labelActiveStyle : null]
                                }, n.label)), e("li", {
                                    key: i,
                                    staticClass: "piecewise-item",
                                    style: [t.piecewiseDotStyle, n.style]
                                }, [t._t("piecewise", r, {
                                    label: n.label,
                                    index: i,
                                    first: 0 === i,
                                    last: i === d - 1,
                                    active: n.inRange
                                }), t._t("label", o, {
                                    label: n.label,
                                    index: i,
                                    first: 0 === i,
                                    last: i === d - 1,
                                    active: n.inRange
                                })])
                            })));
                        n.push(c);
                        var h = e("div", {
                            ref: "process",
                            staticClass: "slider-process",
                            class: {
                                "slider-process-draggable": this.isRange && this.processDraggable
                            },
                            style: this.processStyle,
                            on: {
                                click: function(e) {
                                    return t.processClick(e)
                                }
                            }
                        }, [e("div", {
                            ref: "mergedTooltip",
                            staticClass: "merged-tooltip slider-tooltip-wrap",
                            class: "slider-tooltip-".concat(this.isRange ? this.tooltipDirection[0] : this.tooltipDirection),
                            style: this.tooltipMergedPosition
                        }, [this._t("tooltip", [e("span", {
                            staticClass: "slider-tooltip",
                            style: this.tooltipStyles
                        }, this.mergeFormatter ? this.mergeFormatting(this.val[0], this.val[1]) : this.formatter ? this.val[0] === this.val[1] ? this.formatting(this.val[0]) : "".concat(this.formatting(this.val[0]), " - ").concat(this.formatting(this.val[1])) : this.val[0] === this.val[1] ? this.val[0] : "".concat(this.val[0], " - ").concat(this.val[1]))], {
                            value: this.val,
                            merge: !0
                        })])]);
                        return n.push(h), this.isRange || this.data || n.push(e("input", {
                            staticClass: "slider-input",
                            attrs: {
                                type: "range",
                                min: this.min,
                                max: this.max
                            },
                            domProps: {
                                value: this.val
                            },
                            on: {
                                input: function(e) {
                                    return t.val = e.target.value
                                }
                            }
                        })), e("div", {
                            ref: "wrap",
                            staticClass: "vue-range-slider slider-component",
                            class: [this.flowDirection, this.disabledClass, this.stateClass, {
                                "slider-has-label": this.piecewiseLabel
                            }],
                            style: [this.wrapStyles, this.boolDisabled ? this.disabledStyle : null],
                            directives: [{
                                name: "show",
                                value: this.show
                            }],
                            on: {
                                click: function(e) {
                                    return t.wrapClick(e)
                                }
                            }
                        }, [e("div", {
                            ref: "elem",
                            staticClass: "slider",
                            style: [this.elemStyles, this.bgStyle],
                            attrs: {
                                "aria-hidden": !0
                            }
                        }, n)])
                    },
                    computed: {
                        val: {
                            get: function() {
                                return this.data ? this.isRange ? [this.data[this.currentValue[0]], this.data[this.currentValue[1]]] : this.data[this.currentValue] : this.currentValue
                            },
                            set: function(e) {
                                if (this.data)
                                    if (this.isRange) {
                                        var t = this.data.indexOf(e[0]),
                                            n = this.data.indexOf(e[1]);
                                        t > -1 && n > -1 && (this.currentValue = [t, n])
                                    } else {
                                        var r = this.data.indexOf(e);
                                        r > -1 && (this.currentValue = r)
                                    }
                                else this.currentValue = e
                            }
                        },
                        currentIndex: function() {
                            return this.isRange ? this.data ? this.currentValue : [this.getIndexByValue(this.currentValue[0]), this.getIndexByValue(this.currentValue[1])] : this.getIndexByValue(this.currentValue)
                        },
                        tooltipMergedPosition: function() {
                            if (!this.isMounted) return {};
                            var e = this.tooltipDirection[0];
                            if (this.$refs.dot0) {
                                var style = {};
                                return "vertical" === this.direction ? style[e] = "-".concat(this.dotHeightVal / 2 - this.width / 2 + 9, "px") : (style[e] = "-".concat(this.dotWidthVal / 2 - this.height / 2 + 9, "px"), style.left = "50%"), style
                            }
                        },
                        tooltipDirection: function() {
                            var e = this.tooltipDir || ("vertical" === this.direction ? "left" : "top");
                            return d(e) ? this.isRange ? e : e[1] : this.isRange ? [e, e] : e
                        },
                        piecewiseDotWrap: function() {
                            if (!this.piecewise && !this.piecewiseLabel) return !1;
                            for (var e = [], i = 0; i <= this.total; i++) {
                                var style = "vertical" === this.direction ? {
                                        bottom: "".concat(this.gap * i - this.width / 2, "px"),
                                        left: 0
                                    } : {
                                        left: "".concat(this.gap * i - this.height / 2, "px"),
                                        top: 0
                                    },
                                    t = this.reverse ? this.total - i : i,
                                    label = this.data ? this.data[t] : this.spacing * t + this.min;
                                e.push({
                                    style: style,
                                    label: this.formatter ? this.formatting(label) : label,
                                    inRange: t >= this.indexRange[0] && t <= this.indexRange[1]
                                })
                            }
                            return e
                        },
                        total: function() {
                            return this.data ? this.data.length - 1 : (Math.floor((this.maximum - this.minimum) * this.multiple) % (this.step * this.multiple) != 0 && this.printError("Prop[step] is illegal, Please make sure that the step can be divisible"), (this.maximum - this.minimum) / this.step)
                        },
                        piecewiseDotStyle: function() {
                            return "vertical" === this.direction ? {
                                width: "".concat(this.width, "px"),
                                height: "".concat(this.width, "px")
                            } : {
                                width: "".concat(this.height, "px"),
                                height: "".concat(this.height, "px")
                            }
                        },
                        dotStyles: function() {
                            return "vertical" === this.direction ? {
                                width: "".concat(this.dotWidthVal, "px"),
                                height: "".concat(this.dotHeightVal, "px"),
                                left: "".concat(-(this.dotWidthVal - this.width) / 2, "px")
                            } : {
                                width: "".concat(this.dotWidthVal, "px"),
                                height: "".concat(this.dotHeightVal, "px"),
                                top: "".concat(-(this.dotHeightVal - this.height) / 2, "px")
                            }
                        },
                        sliderStyles: function() {
                            return d(this.sliderStyle) ? this.isRange ? this.sliderStyle : this.sliderStyle[1] : "function" == typeof this.sliderStyle ? this.sliderStyle(this.val, this.currentIndex) : this.isRange ? [this.sliderStyle, this.sliderStyle] : this.sliderStyle
                        },
                        tooltipStyles: function() {
                            return d(this.tooltipStyle) ? this.isRange ? this.tooltipStyle : this.tooltipStyle[1] : "function" == typeof this.tooltipStyle ? this.tooltipStyle(this.val, this.currentIndex) : this.isRange ? [this.tooltipStyle, this.tooltipStyle] : this.tooltipStyle
                        },
                        focusStyles: function() {
                            return d(this.focusStyle) ? this.isRange ? this.focusStyle : this.focusStyle[1] : "function" == typeof this.focusStyle ? this.focusStyle(this.val, this.currentIndex) : this.isRange ? [this.focusStyle, this.focusStyle] : this.focusStyle
                        },
                        elemStyles: function() {
                            return "vertical" === this.direction ? {
                                width: "".concat(this.width, "px"),
                                height: "100%"
                            } : {
                                height: "".concat(this.height, "px")
                            }
                        },
                        wrapStyles: function() {
                            return "vertical" === this.direction ? {
                                height: "number" == typeof this.height ? "".concat(this.height, "px") : this.height,
                                padding: "".concat(this.dotHeightVal / 2, "px ").concat(this.dotWidthVal / 2, "px")
                            } : {
                                width: "number" == typeof this.width ? "".concat(this.width, "px") : this.width,
                                padding: "".concat(this.dotHeightVal / 2, "px ").concat(this.dotWidthVal / 2, "px")
                            }
                        },
                        stateClass: function() {
                            return {
                                "slider-state-process-drag": this.processFlag,
                                "slider-state-drag": this.flag && !this.processFlag && !this.keydownFlag,
                                "slider-state-focus": this.focusFlag
                            }
                        },
                        tooltipStatus: function() {
                            return "hover" === this.tooltip && this.flag ? "slider-always" : this.tooltip ? "slider-".concat(this.tooltip) : ""
                        },
                        tooltipClass: function() {
                            return ["slider-tooltip-".concat(this.tooltipDirection), "slider-tooltip"]
                        },
                        minimum: function() {
                            return this.data ? 0 : this.min
                        },
                        maximum: function() {
                            return this.data ? this.data.length - 1 : this.max
                        },
                        multiple: function() {
                            var e = "".concat(this.step).split(".")[1];
                            return e ? Math.pow(10, e.length) : 1
                        },
                        indexRange: function() {
                            return this.isRange ? this.currentIndex : [0, this.currentIndex]
                        },
                        spacing: function() {
                            return this.data ? 1 : this.step
                        },
                        gap: function() {
                            return this.size / this.total
                        },
                        dotWidthVal: function() {
                            return "number" == typeof this.dotWidth ? this.dotWidth : this.dotSize
                        },
                        dotHeightVal: function() {
                            return "number" == typeof this.dotHeight ? this.dotHeight : this.dotSize
                        },
                        disabledArray: function() {
                            return d(this.disabled) ? this.disabled : [this.disabled, this.disabled]
                        },
                        boolDisabled: function() {
                            return this.disabledArray.every((function(b) {
                                return !0 === b
                            }))
                        },
                        disabledClass: function() {
                            return this.boolDisabled ? "slider-disabled" : ""
                        },
                        flowDirection: function() {
                            return "slider-".concat(this.direction + (this.reverse ? "-reverse" : ""))
                        },
                        isRange: function() {
                            return d(this.value)
                        },
                        isDisabled: function() {
                            return "none" === this.eventType || this.boolDisabled
                        },
                        isFixed: function() {
                            return this.fixed || this.minRange
                        },
                        position: function() {
                            return this.isRange ? [(this.currentValue[0] - this.minimum) / this.spacing * this.gap, (this.currentValue[1] - this.minimum) / this.spacing * this.gap] : (this.currentValue - this.minimum) / this.spacing * this.gap
                        },
                        limit: function() {
                            return this.isRange ? this.isFixed ? [
                                [0, (this.total - this.fixedValue) * this.gap],
                                [this.fixedValue * this.gap, this.size]
                            ] : [
                                [0, this.position[1]],
                                [this.position[0], this.size]
                            ] : [0, this.size]
                        },
                        valueLimit: function() {
                            return this.isRange ? this.isFixed ? [
                                [this.minimum, this.maximum - this.fixedValue * (this.spacing * this.multiple) / this.multiple],
                                [this.minimum + this.fixedValue * (this.spacing * this.multiple) / this.multiple, this.maximum]
                            ] : [
                                [this.minimum, this.currentValue[1]],
                                [this.currentValue[0], this.maximum]
                            ] : [this.minimum, this.maximum]
                        },
                        idleSlider: function() {
                            return 0 === this.currentSlider ? 1 : 0
                        },
                        slider: function() {
                            return this.isRange ? [this.$refs.dot0, this.$refs.dot1] : this.$refs.dot
                        }
                    },
                    methods: {
                        setValue: function(e, t, n) {
                            var r = this;
                            if (c(this.val, e)) {
                                var o = this.limitValue(e);
                                this.val = this.isRange ? o.concat() : o, this.computedFixedValue(), this.syncValue(t)
                            }
                            this.$nextTick((function() {
                                return r.setPosition(n)
                            }))
                        },
                        setIndex: function(e) {
                            var t;
                            d(e) && this.isRange ? (t = this.data ? [this.data[e[0]], this.data[e[1]]] : [this.getValueByIndex(e[0]), this.getValueByIndex(e[1])], this.setValue(t)) : (e = this.getValueByIndex(e), this.isRange && (this.currentSlider = e > (this.currentValue[1] - this.currentValue[0]) / 2 + this.currentValue[0] ? 1 : 0), this.setCurrentValue(e))
                        },
                        wrapClick: function(e) {
                            if (this.isDisabled || !this.clickable || this.processFlag || this.dragFlag) return !1;
                            var t = this.getPos(e);
                            if (this.isRange)
                                if (this.disabledArray.every((function(b) {
                                        return !1 === b
                                    }))) this.currentSlider = t > (this.position[1] - this.position[0]) / 2 + this.position[0] ? 1 : 0;
                                else if (this.disabledArray[0]) {
                                if (t < this.position[0]) return !1;
                                this.currentSlider = 1
                            } else if (this.disabledArray[1]) {
                                if (t > this.position[1]) return !1;
                                this.currentSlider = 0
                            }
                            if (this.disabledArray[this.currentSlider]) return !1;
                            if (this.setValueOnPos(t), this.isRange && this.tooltipMerge) {
                                var n = setInterval(this.handleOverlapTooltip, 16.7);
                                setTimeout((function() {
                                    return window.clearInterval(n)
                                }), 1e3 * this.speed)
                            }
                        },
                        processClick: function(e) {
                            this.fixed && e.stopPropagation()
                        },
                        syncValue: function(e) {
                            var t = this.isRange ? this.val.concat() : this.val;
                            this.$emit("input", t), this.keydownFlag && this.$emit("on-keypress", t), e || this.$emit("slide-end", t)
                        },
                        getPos: function(e) {
                            return this.realTime && this.getStaticData(), "vertical" === this.direction ? this.reverse ? e.pageY - this.offset : this.size - (e.pageY - this.offset) : this.reverse ? this.size - (e.pageX - this.offset) : e.pageX - this.offset
                        },
                        setValueOnPos: function(e, t) {
                            var n = this.isRange ? this.limit[this.currentSlider] : this.limit,
                                r = this.isRange ? this.valueLimit[this.currentSlider] : this.valueLimit,
                                o = Math.round(e / this.gap);
                            if (e >= n[0] && e <= n[1]) {
                                var l = this.getValueByIndex(o);
                                this.setTransform(e), this.setCurrentValue(l, t), this.isRange && (this.fixed || this.isLessRange(e, o)) && (this.setTransform(e + this.fixedValue * this.gap * (0 === this.currentSlider ? 1 : -1), !0), this.setCurrentValue((l * this.multiple + this.fixedValue * this.spacing * this.multiple * (0 === this.currentSlider ? 1 : -1)) / this.multiple, t, !0))
                            } else {
                                var d = e < n[0] ? 0 : 1,
                                    c = 0 === d ? 1 : 0;
                                this.setTransform(n[d]), this.setCurrentValue(r[d]), this.isRange && (this.fixed || this.isLessRange(e, o)) ? (this.setTransform(this.limit[this.idleSlider][d], !0), this.setCurrentValue(this.valueLimit[this.idleSlider][d], t, !0)) : !this.isRange || !this.enableCross && !this.crossFlag || this.isFixed || this.disabledArray[d] || this.currentSlider !== c || (this.focusSlider = d, this.currentSlider = d)
                            }
                            this.crossFlag = !1
                        },
                        setCurrentValue: function(e, t, n) {
                            var r = n ? this.idleSlider : this.currentSlider;
                            if (e < this.minimum || e > this.maximum) return !1;
                            this.isRange ? c(this.currentValue[r], e) && (this.currentValue.splice(r, 1, e), this.lazy && this.flag || this.syncValue()) : c(this.currentValue, e) && (this.currentValue = e, this.lazy && this.flag || this.syncValue()), t || this.setPosition()
                        },
                        setPosition: function(e) {
                            this.flag || this.setTransitionTime(void 0 === e ? this.speed : e), this.isRange ? (this.setTransform(this.position[0], 1 === this.currentSlider), this.setTransform(this.position[1], 0 === this.currentSlider)) : this.setTransform(this.position), this.flag || this.setTransitionTime(0)
                        },
                        setTransform: function(e, t) {
                            var n = t ? this.idleSlider : this.currentSlider,
                                r = o(("vertical" === this.direction ? this.dotHeightVal / 2 - e : e - this.dotWidthVal / 2) * (this.reverse ? -1 : 1)),
                                l = "vertical" === this.direction ? "translateY(".concat(r, "px)") : "translateX(".concat(r, "px)"),
                                d = this.fixed ? "".concat(this.fixedValue * this.gap, "px") : "".concat(0 === n ? this.position[1] - e : e - this.position[0], "px"),
                                c = this.fixed ? "".concat(0 === n ? e : e - this.fixedValue * this.gap, "px") : "".concat(0 === n ? e : this.position[0], "px");
                            this.isRange ? (this.slider[n].style[w] = l, "vertical" === this.direction ? (this.$refs.process.style.height = d, this.$refs.process.style[this.reverse ? "top" : "bottom"] = c) : (this.$refs.process.style.width = d, this.$refs.process.style[this.reverse ? "right" : "left"] = c)) : (this.slider.style[w] = l, "vertical" === this.direction ? (this.$refs.process.style.height = "".concat(e, "px"), this.$refs.process.style[this.reverse ? "top" : "bottom"] = 0) : (this.$refs.process.style.width = "".concat(e, "px"), this.$refs.process.style[this.reverse ? "right" : "left"] = 0))
                        },
                        setTransitionTime: function(time) {
                            if (time || this.$refs.process.offsetWidth, this.isRange) {
                                for (var e = this.slider.length, i = 0; i < e; i++) this.slider[i].style[x] = "".concat(time, "s");
                                this.$refs.process.style[x] = "".concat(time, "s")
                            } else this.slider.style[x] = "".concat(time, "s"), this.$refs.process.style[x] = "".concat(time, "s")
                        },
                        computedFixedValue: function() {
                            if (!this.isFixed) return this.fixedValue = 0, !1;
                            this.fixedValue = this.currentIndex[1] - this.currentIndex[0], this.fixedValue = Math.max(this.fixed ? this.currentIndex[1] - this.currentIndex[0] : 0, this.minRange || 0)
                        },
                        limitValue: function(e) {
                            var t = this;
                            if (this.data) return e;
                            var n = function(n) {
                                return n < t.min ? (t.printError("The value of the slider is ".concat(e, ", the minimum value is ").concat(t.min, ", the value of this slider can not be less than the minimum value")), t.min) : n > t.max ? (t.printError("The value of the slider is ".concat(e, ", the maximum value is ").concat(t.max, ", the value of this slider can not be greater than the maximum value")), t.max) : n
                            };
                            return this.isRange ? e.map((function(e) {
                                return n(e)
                            })) : n(e)
                        },
                        getStaticData: function() {
                            this.$refs.elem && (this.size = "vertical" === this.direction ? this.$refs.elem.offsetHeight : this.$refs.elem.offsetWidth, this.offset = "vertical" === this.direction ? this.$refs.elem.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop : this.$refs.elem.getBoundingClientRect().left)
                        },
                        handleOverlapTooltip: function() {
                            var e = this.tooltipDirection[0] === this.tooltipDirection[1];
                            if (this.isRange && e) {
                                var t = this.reverse ? this.$refs.tooltip1 : this.$refs.tooltip0,
                                    n = this.reverse ? this.$refs.tooltip0 : this.$refs.tooltip1,
                                    r = t.getBoundingClientRect(),
                                    o = n.getBoundingClientRect(),
                                    l = r.right,
                                    d = o.left,
                                    c = r.top,
                                    h = o.top + o.height,
                                    f = "horizontal" === this.direction && l > d,
                                    m = "vertical" === this.direction && h > c;
                                f || m ? this.handleDisplayMergedTooltip(!0) : this.handleDisplayMergedTooltip(!1)
                            }
                        },
                        handleDisplayMergedTooltip: function(e) {
                            var t = this.$refs.tooltip0,
                                n = this.$refs.tooltip1,
                                r = this.$refs.process.getElementsByClassName("merged-tooltip")[0];
                            e ? (t.style.visibility = "hidden", n.style.visibility = "hidden", r.style.visibility = "visible") : (t.style.visibility = "visible", n.style.visibility = "visible", r.style.visibility = "hidden")
                        },
                        isLessRange: function(e, t) {
                            if (!this.isRange || !this.minRange && !this.maxRange) return !1;
                            var n = 0 === this.currentSlider ? this.currentIndex[1] - t : t - this.currentIndex[0];
                            return this.minRange && n <= this.minRange ? (this.fixedValue = this.minRange, !0) : this.maxRange && n >= this.maxRange ? (this.fixedValue = this.maxRange, !0) : (this.computedFixedValue(), !1)
                        },
                        getValueByIndex: function(e) {
                            return (this.spacing * this.multiple * e + this.minimum * this.multiple) / this.multiple
                        },
                        getIndexByValue: function(e) {
                            return Math.round((e - this.minimum) * this.multiple) / (this.spacing * this.multiple)
                        },
                        formatting: function(e) {
                            return "string" == typeof this.formatter ? this.formatter.replace(/{value}/, e) : this.formatter(e)
                        },
                        mergeFormatting: function(e, t) {
                            return "string" == typeof this.mergeFormatter ? this.mergeFormatter.replace(/{(value1|value2)}/g, (function(n, r) {
                                return "value1" === r ? e : t
                            })) : this.mergeFormatter(e, t)
                        },
                        _start: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = arguments.length > 2 ? arguments[2] : void 0;
                            if (this.disabledArray[t]) return !1;
                            if (this.stopPropagation && e.stopPropagation(), this.isRange) {
                                if (this.currentSlider = t, n) {
                                    if (!this.processDraggable) return !1;
                                    this.processFlag = !0, this.processSign = {
                                        pos: this.position,
                                        start: this.getPos(e.targetTouches && e.targetTouches[0] ? e.targetTouches[0] : e)
                                    }
                                }
                                this.enableCross || this.val[0] !== this.val[1] || (this.crossFlag = !0)
                            }!n && this.useKeyboard && (this.focusFlag = !0, this.focusSlider = t), this.flag = !0, this.$emit("drag-start", this)
                        },
                        _move: function(e) {
                            if (e.preventDefault(), this.stopPropagation && e.stopPropagation(), !this.flag) return !1;
                            e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), this.processFlag ? (this.currentSlider = 0, this.setValueOnPos(this.processSign.pos[0] + this.getPos(e) - this.processSign.start, !0), this.currentSlider = 1, this.setValueOnPos(this.processSign.pos[1] + this.getPos(e) - this.processSign.start, !0)) : (this.dragFlag = !0, this.setValueOnPos(this.getPos(e), !0)), this.isRange && this.tooltipMerge && this.handleOverlapTooltip()
                        },
                        _end: function(e) {
                            var t = this;
                            if (this.stopPropagation && e.stopPropagation(), !this.flag) return !1;
                            this.$emit("drag-end", this), this.lazy && c(this.val, this.value) && this.syncValue(), this.flag = !1, this.$nextTick((function() {
                                t.crossFlag = !1, t.dragFlag = !1, t.processFlag = !1
                            })), this.setPosition()
                        },
                        blurSlider: function(e) {
                            var t = this.isRange ? this.$refs["dot".concat(this.focusSlider)] : this.$refs.dot;
                            if (!t || t === e.target) return !1;
                            this.focusFlag = !1
                        },
                        handleKeydown: function(e) {
                            if (e.preventDefault(), e.stopPropagation(), !this.useKeyboard) return !1;
                            switch (e.which || e.keyCode) {
                                case 37:
                                case 40:
                                    this.keydownFlag = !0, this.flag = !0, this.changeFocusSlider(this.actionsKeyboard[0]);
                                    break;
                                case 38:
                                case 39:
                                    this.keydownFlag = !0, this.flag = !0, this.changeFocusSlider(this.actionsKeyboard[1])
                            }
                        },
                        handleKeyup: function() {
                            this.keydownFlag && (this.keydownFlag = !1, this.flag = !1)
                        },
                        changeFocusSlider: function(e) {
                            var t = this;
                            if (this.isRange) {
                                var n = this.currentIndex.map((function(n, i) {
                                    if (i === t.focusSlider || t.fixed) {
                                        var r = e(n),
                                            o = t.fixed ? t.valueLimit[i] : [0, t.total];
                                        if (r <= o[1] && r >= o[0]) return r
                                    }
                                    return n
                                }));
                                n[0] > n[1] && (this.focusSlider = 0 === this.focusSlider ? 1 : 0, n = n.reverse()), this.setIndex(n)
                            } else this.setIndex(e(this.currentIndex))
                        },
                        bindEvents: function() {
                            var e = this;
                            this.processStartFn = function(t) {
                                e._start(t, 0, !0)
                            }, this.dot0StartFn = function(t) {
                                e._start(t, 0)
                            }, this.dot1StartFn = function(t) {
                                e._start(t, 1)
                            }, l ? (v(this.$refs.process, C, this.processStartFn), v(document, A, this._move), v(document, E, this._end), v(document, T, this._end), this.isRange ? (v(this.$refs.dot0, C, this.dot0StartFn), v(this.$refs.dot1, C, this.dot1StartFn)) : v(this.$refs.dot, C, this._start)) : (v(this.$refs.process, $, this.processStartFn), v(document, $, this.blurSlider), v(document, k, this._move), v(document, O, this._end), v(document, P, this._end), this.isRange ? (v(this.$refs.dot0, $, this.dot0StartFn), v(this.$refs.dot1, $, this.dot1StartFn)) : v(this.$refs.dot, $, this._start)), v(document, M, this.handleKeydown), v(document, _, this.handleKeyup), v(window, I, this.refresh), this.isRange && this.tooltipMerge && (v(this.$refs.dot0, S, this.handleOverlapTooltip), v(this.$refs.dot1, S, this.handleOverlapTooltip))
                        },
                        unbindEvents: function() {
                            l ? (y(this.$refs.process, C, this.processStartFn), y(document, A, this._move), y(document, E, this._end), y(document, T, this._end), this.isRange ? (y(this.$refs.dot0, C, this.dot0StartFn), y(this.$refs.dot1, C, this.dot1StartFn)) : y(this.$refs.dot, C, this._start)) : (y(this.$refs.process, $, this.processStartFn), y(document, $, this.blurSlider), y(document, k, this._move), y(document, O, this._end), y(document, P, this._end), this.isRange ? (y(this.$refs.dot0, $, this.dot0StartFn), y(this.$refs.dot1, $, this.dot1StartFn)) : y(this.$refs.dot, $, this._start)), y(document, M, this.handleKeydown), y(document, _, this.handleKeyup), y(window, I, this.refresh), this.isRange && this.tooltipMerge && (y(this.$refs.dot0, S, this.handleOverlapTooltip), y(this.$refs.dot1, S, this.handleOverlapTooltip))
                        },
                        refresh: function() {
                            this.$refs.elem && (this.getStaticData(), this.computedFixedValue(), this.setPosition(), this.unbindEvents(), this.bindEvents())
                        },
                        printError: function(e) {
                            this.debug && console.error("[VueSlider error]: ".concat(e))
                        }
                    },
                    mounted: function() {
                        var e = this;
                        if (this.isComponentExists = !0, "undefined" == typeof window || "undefined" == typeof document) return this.printError("window or document is undefined, can not be initialization.");
                        this.$nextTick((function() {
                            e.getStaticData(), e.setValue(e.limitValue(e.value), !0, e.startAnimation ? e.speed : 0), e.bindEvents(), e.isRange && e.tooltipMerge && !e.startAnimation && e.handleOverlapTooltip()
                        })), this.isMounted = !0
                    },
                    watch: {
                        value: function(e) {
                            this.flag || this.setValue(e, !0)
                        },
                        show: function(e) {
                            e && !this.size && this.$nextTick(this.refresh)
                        },
                        max: function(e) {
                            if (e < this.min) return this.printError("The maximum value can not be less than the minimum value.");
                            var t = this.limitValue(this.val);
                            this.setValue(t), this.refresh()
                        },
                        min: function(e) {
                            if (e > this.max) return this.printError("The minimum value can not be greater than the maximum value.");
                            var t = this.limitValue(this.val);
                            this.setValue(t), this.refresh()
                        },
                        fixed: function() {
                            this.computedFixedValue()
                        },
                        minRange: function() {
                            this.computedFixedValue()
                        }
                    },
                    beforeDestroy: function() {
                        this.isComponentExists = !1, this.unbindEvents(), this.refresh()
                    },
                    deactivated: function() {
                        this.isComponentExists = !1, this.unbindEvents(), this.refresh()
                    }
                };
            j.version = "1.0.3", j.install = function(e) {
                e.component(j.name, j)
            }, "undefined" != typeof window && window.Vue && window.Vue.use(j), t.a = j
        },
        189: function(e, t, n) {
            "use strict";
            var r = n(9),
                o = (n(58), n(26), n(19), n(56), n(1)),
                l = n(0),
                d = window.__NUXT__;

            function c() {
                if (!this._hydrated) return this.$fetch()
            }

            function h() {
                if ((e = this).$vnode && e.$vnode.elm && e.$vnode.elm.dataset && e.$vnode.elm.dataset.fetchKey) {
                    var e;
                    this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                    var data = d.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var t in data) o.default.set(this.$data, t, data[t])
                } else f.call(this)
            }

            function f() {
                var e = !1 !== this.$options.fetchOnServer;
                if ("function" == typeof this.$options.fetchOnServer && (e = !1 !== this.$options.fetchOnServer.call(this)), e && !this.$nuxt.isPreview && this.$nuxt._pagePayload) {
                    this._hydrated = !0;
                    var t = this.$options._scopeId || this.$options.name || "",
                        n = Object(l.d)(this.$nuxt._fetchCounters, t);
                    if ("function" == typeof this.$options.fetchKey) this._fetchKey = this.$options.fetchKey.call(this, n);
                    else {
                        var r = "string" == typeof this.$options.fetchKey ? this.$options.fetchKey : t;
                        this._fetchKey = r ? r + ":" + n(r) : String(n(r))
                    }
                    var data = this.$nuxt._pagePayload.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else if (data)
                        for (var d in data) o.default.set(this.$data, d, data[d]);
                    else this.$fetch()
                }
            }

            function m() {
                var e = this;
                return this._fetchPromise || (this._fetchPromise = v.call(this).then((function() {
                    delete e._fetchPromise
                }))), this._fetchPromise
            }

            function v() {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = Object(r.a)(regeneratorRuntime.mark((function e() {
                    var t, n, r, o = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, t = null, n = Date.now(), e.prev = 6, e.next = 9, this.$options.fetch.call(this);
                            case 9:
                                e.next = 15;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(6), t = Object(l.p)(e.t0);
                            case 15:
                                if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                    e.next = 19;
                                    break
                                }
                                return e.next = 19, new Promise((function(e) {
                                    return setTimeout(e, r)
                                }));
                            case 19:
                                this.$fetchState.error = t, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                    return o.$nuxt.nbFetching--
                                }));
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }), e, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            t.a = {
                beforeCreate: function() {
                    Object(l.m)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = m.bind(this), Object(l.a)(this, "created", h), Object(l.a)(this, "beforeMount", c))
                }
            }
        },
        190: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            n(19), n(26), n(56);
            var r = {},
                o = {},
                l = {};

            function d(e, t) {
                if (r[e]) return Promise.resolve(r[e]);
                if (l[e]) return Promise.reject(l[e]);
                if (o[e]) return o[e];
                var n, d, c = o[e] = new Promise((function(e, t) {
                    n = e, d = t
                }));
                delete r[e];
                var h, script = document.createElement("script");
                script.charset = "utf-8", script.timeout = 120, script.src = t;
                var f = new Error,
                    m = script.onerror = script.onload = function(t) {
                        if (clearTimeout(h), delete o[e], script.onerror = script.onload = null, r[e]) return n(r[e]);
                        var c = t && ("load" === t.type ? "missing" : t.type),
                            m = t && t.target && t.target.src;
                        f.message = "Loading chunk " + e + " failed.\n(" + c + ": " + m + ")", f.name = "ChunkLoadError", f.type = c, f.request = m, l[e] = f, d(f)
                    };
                return h = setTimeout((function() {
                    m({
                        type: "timeout",
                        target: script
                    })
                }), 12e4), document.head.appendChild(script), c
            }

            function c() {
                window.__NUXT_JSONP__ = function(e, t) {
                    r[e] = t
                }, window.__NUXT_JSONP_CACHE__ = r, window.__NUXT_IMPORT__ = d
            }
        },
        198: function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    n(60), n(67), n(35), n(57), n(70);
                    var t = n(33),
                        r = n(9),
                        o = (n(113), n(215), n(229), n(231), n(58), n(26), n(19), n(34), n(41), n(62), n(77), n(78), n(103), n(40), n(31), n(53), n(54), n(56), n(1)),
                        l = n(181),
                        d = n(122),
                        c = n(0),
                        h = n(25),
                        f = n(189),
                        m = n(101),
                        v = n(190);

                    function y(e, t) {
                        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!n) {
                            if (Array.isArray(e) || (n = function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return w(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
                                }(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var i = 0,
                                    r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return i >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[i++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, l = !0,
                            d = !1;
                        return {
                            s: function() {
                                n = n.call(e)
                            },
                            n: function() {
                                var e = n.next();
                                return l = e.done, e
                            },
                            e: function(e) {
                                d = !0, o = e
                            },
                            f: function() {
                                try {
                                    l || null == n.return || n.return()
                                } finally {
                                    if (d) throw o
                                }
                            }
                        }
                    }

                    function w(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                        return n
                    }
                    Object(v.a)(), o.default.__nuxt__fetch__mixin__ || (o.default.mixin(f.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(m.a.name, m.a), o.default.component("NLink", m.a), e.fetch || (e.fetch = l.a);
                    var x, S, C = [],
                        A = window.__NUXT__ || {},
                        E = A.config || {};
                    E._app && (n.p = Object(c.v)(E._app.cdnURL, E._app.assetsPath)), Object.assign(o.default.config, {
                        silent: !0,
                        performance: !1
                    });
                    var T = o.default.config.errorHandler || console.error;

                    function $(e, t, n) {
                        for (var r = function(component) {
                                var e = function(component, e) {
                                    if (!component || !component.options || !component.options[e]) return {};
                                    var option = component.options[e];
                                    if ("function" == typeof option) {
                                        for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), r = 2; r < t; r++) n[r - 2] = arguments[r];
                                        return option.apply(void 0, n)
                                    }
                                    return option
                                }(component, "transition", t, n) || {};
                                return "string" == typeof e ? {
                                    name: e
                                } : e
                            }, o = n ? Object(c.h)(n) : [], l = Math.max(e.length, o.length), d = [], h = function(i) {
                                var t = Object.assign({}, r(e[i])),
                                    n = Object.assign({}, r(o[i]));
                                Object.keys(t).filter((function(e) {
                                    return void 0 !== t[e] && !e.toLowerCase().includes("leave")
                                })).forEach((function(e) {
                                    n[e] = t[e]
                                })), d.push(n)
                            }, i = 0; i < l; i++) h(i);
                        return d
                    }

                    function k(e, t, n) {
                        return O.apply(this, arguments)
                    }

                    function O() {
                        return (O = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r) {
                            var o, l, d, h, f = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._routeChanged = Boolean(x.nuxt.err) || n.name !== t.name, this._paramChanged = !this._routeChanged && n.path !== t.path, this._queryChanged = !this._paramChanged && n.fullPath !== t.fullPath, this._diffQuery = this._queryChanged ? Object(c.j)(t.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), e.prev = 5, !this._queryChanged) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.next = 9, Object(c.r)(t, (function(e, t) {
                                            return {
                                                Component: e,
                                                instance: t
                                            }
                                        }));
                                    case 9:
                                        o = e.sent, o.some((function(e) {
                                            var r = e.Component,
                                                o = e.instance,
                                                l = r.options.watchQuery;
                                            return !0 === l || (Array.isArray(l) ? l.some((function(e) {
                                                return f._diffQuery[e]
                                            })) : "function" == typeof l && l.apply(o, [t.query, n.query]))
                                        })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                    case 12:
                                        r(), e.next = 26;
                                        break;
                                    case 15:
                                        if (e.prev = 15, e.t0 = e.catch(5), l = e.t0 || {}, d = l.statusCode || l.status || l.response && l.response.status || 500, h = l.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(h)) {
                                            e.next = 23;
                                            break
                                        }
                                        return window.location.reload(!0), e.abrupt("return");
                                    case 23:
                                        this.error({
                                            statusCode: d,
                                            message: h
                                        }), this.$nuxt.$emit("routeChanged", t, n, l), r();
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [5, 15]
                            ])
                        })))).apply(this, arguments)
                    }

                    function P(e, t) {
                        return A.serverRendered && t && Object(c.b)(e, t), e._Ctor = e, e
                    }

                    function M(e) {
                        return Object(c.e)(e, function() {
                            var e = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r, o, l) {
                                var d;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("function" != typeof t || t.options) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 3, t();
                                        case 3:
                                            t = e.sent;
                                        case 4:
                                            return d = P(Object(c.s)(t), A.data ? A.data[l] : null), r.components[o] = d, e.abrupt("return", d);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n, r, o, l) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }

                    function _(e, t, n) {
                        var r = this,
                            o = [],
                            l = !1;
                        if (void 0 !== n && (o = [], (n = Object(c.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), e.forEach((function(e) {
                                e.options.middleware && (o = o.concat(e.options.middleware))
                            }))), o = o.map((function(e) {
                                return "function" == typeof e ? e : ("function" != typeof d.a[e] && (l = !0, r.error({
                                    statusCode: 500,
                                    message: "Unknown middleware " + e
                                })), d.a[e])
                            })), !l) return Object(c.o)(o, t)
                    }

                    function I(e, t, n) {
                        return j.apply(this, arguments)
                    }

                    function j() {
                        return j = Object(r.a)(regeneratorRuntime.mark((function e(t, n, o) {
                            var l, d, f, m, v, w, S, A, E, T, k, O, P, M, I, j, z = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", o());
                                    case 2:
                                        return l = !1, t === n ? (C = [], l = !0) : (d = [], C = Object(c.h)(n, d).map((function(e, i) {
                                            return Object(c.c)(n.matched[d[i]].path)(n.params)
                                        }))), f = !1, m = function(path) {
                                            n.path === path.path && z.$loading.finish && z.$loading.finish(), n.path !== path.path && z.$loading.pause && z.$loading.pause(), f || (f = !0, o(path))
                                        }, e.next = 8, Object(c.t)(x, {
                                            route: t,
                                            from: n,
                                            next: m.bind(this)
                                        });
                                    case 8:
                                        if (this._dateLastError = x.nuxt.dateErr, this._hadError = Boolean(x.nuxt.err), v = [], (w = Object(c.h)(t, v)).length) {
                                            e.next = 27;
                                            break
                                        }
                                        return e.next = 15, _.call(this, w, x.context);
                                    case 15:
                                        if (!f) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 17:
                                        return S = (h.a.options || h.a).layout, e.next = 20, this.loadLayout("function" == typeof S ? S.call(h.a, x.context) : S);
                                    case 20:
                                        return A = e.sent, e.next = 23, _.call(this, w, x.context, A);
                                    case 23:
                                        if (!f) {
                                            e.next = 25;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 25:
                                        return x.context.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), e.abrupt("return", o());
                                    case 27:
                                        return w.forEach((function(e) {
                                            e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData, e.options.fetch = e._Ctor.options.fetch)
                                        })), this.setTransitions($(w, t, n)), e.prev = 29, e.next = 32, _.call(this, w, x.context);
                                    case 32:
                                        if (!f) {
                                            e.next = 34;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 34:
                                        if (!x.context._errored) {
                                            e.next = 36;
                                            break
                                        }
                                        return e.abrupt("return", o());
                                    case 36:
                                        return "function" == typeof(E = w[0].options.layout) && (E = E(x.context)), e.next = 40, this.loadLayout(E);
                                    case 40:
                                        return E = e.sent, e.next = 43, _.call(this, w, x.context, E);
                                    case 43:
                                        if (!f) {
                                            e.next = 45;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 45:
                                        if (!x.context._errored) {
                                            e.next = 47;
                                            break
                                        }
                                        return e.abrupt("return", o());
                                    case 47:
                                        T = !0, e.prev = 48, k = y(w), e.prev = 50, k.s();
                                    case 52:
                                        if ((O = k.n()).done) {
                                            e.next = 63;
                                            break
                                        }
                                        if ("function" == typeof(P = O.value).options.validate) {
                                            e.next = 56;
                                            break
                                        }
                                        return e.abrupt("continue", 61);
                                    case 56:
                                        return e.next = 58, P.options.validate(x.context);
                                    case 58:
                                        if (T = e.sent) {
                                            e.next = 61;
                                            break
                                        }
                                        return e.abrupt("break", 63);
                                    case 61:
                                        e.next = 52;
                                        break;
                                    case 63:
                                        e.next = 68;
                                        break;
                                    case 65:
                                        e.prev = 65, e.t0 = e.catch(50), k.e(e.t0);
                                    case 68:
                                        return e.prev = 68, k.f(), e.finish(68);
                                    case 71:
                                        e.next = 77;
                                        break;
                                    case 73:
                                        return e.prev = 73, e.t1 = e.catch(48), this.error({
                                            statusCode: e.t1.statusCode || "500",
                                            message: e.t1.message
                                        }), e.abrupt("return", o());
                                    case 77:
                                        if (T) {
                                            e.next = 80;
                                            break
                                        }
                                        return this.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), e.abrupt("return", o());
                                    case 80:
                                        return e.next = 82, Promise.all(w.map(function() {
                                            var e = Object(r.a)(regeneratorRuntime.mark((function e(r, i) {
                                                var o, d, h, f, m, y, w, S, p;
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (r._path = Object(c.c)(t.matched[v[i]].path)(t.params), r._dataRefresh = !1, o = r._path !== C[i], z._routeChanged && o ? r._dataRefresh = !0 : z._paramChanged && o ? (d = r.options.watchParam, r._dataRefresh = !1 !== d) : z._queryChanged && (!0 === (h = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(h) ? r._dataRefresh = h.some((function(e) {
                                                                    return z._diffQuery[e]
                                                                })) : "function" == typeof h && (M || (M = Object(c.i)(t)), r._dataRefresh = h.apply(M[i], [t.query, n.query]))), z._hadError || !z._isMounted || r._dataRefresh) {
                                                                e.next = 6;
                                                                break
                                                            }
                                                            return e.abrupt("return");
                                                        case 6:
                                                            return f = [], m = r.options.asyncData && "function" == typeof r.options.asyncData, y = Boolean(r.options.fetch) && r.options.fetch.length, w = m && y ? 30 : 45, m && ((S = z.isPreview || l ? Object(c.q)(r.options.asyncData, x.context) : z.fetchPayload(t.path).then((function(e) {
                                                                return e.data[i]
                                                            })).catch((function(e) {
                                                                return Object(c.q)(r.options.asyncData, x.context)
                                                            }))).then((function(e) {
                                                                Object(c.b)(r, e), z.$loading.increase && z.$loading.increase(w)
                                                            })), f.push(S)), z.$loading.manual = !1 === r.options.loading, z.isPreview || l || f.push(z.fetchPayload(t.path).catch((function(e) {
                                                                return null
                                                            }))), y && ((p = r.options.fetch(x.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(e) {
                                                                z.$loading.increase && z.$loading.increase(w)
                                                            })), f.push(p)), e.abrupt("return", Promise.all(f));
                                                        case 15:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t, n) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 82:
                                        f || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), e.next = 99;
                                        break;
                                    case 85:
                                        if (e.prev = 85, e.t2 = e.catch(29), "ERR_REDIRECT" !== (I = e.t2 || {}).message) {
                                            e.next = 90;
                                            break
                                        }
                                        return e.abrupt("return", this.$nuxt.$emit("routeChanged", t, n, I));
                                    case 90:
                                        return C = [], Object(c.l)(I), "function" == typeof(j = (h.a.options || h.a).layout) && (j = j(x.context)), e.next = 96, this.loadLayout(j);
                                    case 96:
                                        this.error(I), this.$nuxt.$emit("routeChanged", t, n, I), o();
                                    case 99:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [29, 85],
                                [48, 73],
                                [50, 65, 68, 71]
                            ])
                        }))), j.apply(this, arguments)
                    }

                    function z(e, n) {
                        Object(c.e)(e, (function(e, n, r, l) {
                            return "object" !== Object(t.a)(e) || e.options || ((e = o.default.extend(e))._Ctor = e, r.components[l] = e), e
                        }))
                    }

                    function L(e) {
                        return D.apply(this, arguments)
                    }

                    function D() {
                        return (D = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                            var n, r;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = Boolean(this.$options.nuxt.err), this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (n = !1), "function" == typeof(r = n ? (h.a.options || h.a).layout : t.matched[0].components.default.options.layout) && (r = r(x.context)), e.next = 6, this.loadLayout(r);
                                    case 6:
                                        this.setLayout(r);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })))).apply(this, arguments)
                    }

                    function R(e) {
                        e._hadError && e._dateLastError === e.$options.nuxt.dateErr && e.error()
                    }

                    function B(e, t) {
                        var n = this;
                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                            var r = Object(c.i)(e),
                                l = Object(c.h)(e),
                                d = !1;
                            o.default.nextTick((function() {
                                r.forEach((function(e, i) {
                                    if (e && !e._isDestroyed && e.constructor._dataRefresh && l[i] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                                        var t = e.constructor.options.data.call(e);
                                        for (var n in t) o.default.set(e.$data, n, t[n]);
                                        d = !0
                                    }
                                })), d && window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), R(n)
                            }))
                        }
                    }

                    function V(e) {
                        window.onNuxtReadyCbs.forEach((function(t) {
                            "function" == typeof t && t(e)
                        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e), S.afterEach((function(t, n) {
                            o.default.nextTick((function() {
                                return e.$nuxt.$emit("routeChanged", t, n)
                            }))
                        }))
                    }

                    function N() {
                        return (N = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                            var n, r, l, d, h, f;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (x = t.app, S = t.router, n = new o.default(x), A.data || !A.serverRendered) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.prev = 4, e.next = 7, n.fetchPayload(A.routePath || n.context.route.path);
                                    case 7:
                                        r = e.sent, Object.assign(A, r), e.next = 13;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(4);
                                    case 13:
                                        return l = A.layout || "default", e.next = 16, n.loadLayout(l);
                                    case 16:
                                        return n.setLayout(l), d = function() {
                                            n.$mount("#__nuxt"), S.afterEach(z), S.afterEach(L.bind(n)), S.afterEach(B.bind(n)), o.default.nextTick((function() {
                                                V(n)
                                            }))
                                        }, e.next = 20, Promise.all(M(x.context.route));
                                    case 20:
                                        if (h = e.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), h.length && (n.setTransitions($(h, S.currentRoute)), C = S.currentRoute.matched.map((function(e) {
                                                return Object(c.c)(e.path)(S.currentRoute.params)
                                            }))), n.$loading = {}, A.error && n.error(A.error), S.beforeEach(k.bind(n)), S.beforeEach(I.bind(n)), !A.serverRendered) {
                                            e.next = 29;
                                            break
                                        }
                                        return e.abrupt("return", d());
                                    case 29:
                                        return f = function() {
                                            z(S.currentRoute, S.currentRoute), L.call(n, S.currentRoute), R(n), d()
                                        }, e.next = 32, new Promise((function(e) {
                                            return setTimeout(e, 0)
                                        }));
                                    case 32:
                                        I.call(n, S.currentRoute, S.currentRoute, (function(path) {
                                            if (path) {
                                                var e = S.afterEach((function(t, n) {
                                                    e(), f()
                                                }));
                                                S.push(path, void 0, (function(e) {
                                                    e && T(e)
                                                }))
                                            } else f()
                                        }));
                                    case 33:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 11]
                            ])
                        })))).apply(this, arguments)
                    }
                    Object(h.b)(null, A.config).then((function(e) {
                        return N.apply(this, arguments)
                    })).catch(T)
                }.call(this, n(44))
        },
        22: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var r = n(98);
            var o = n(100),
                l = n(99);

            function d(e, i) {
                return Object(r.a)(e) || function(e, i) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, r, o = [],
                            l = !0,
                            d = !1;
                        try {
                            for (t = t.call(e); !(l = (n = t.next()).done) && (o.push(n.value), !i || o.length !== i); l = !0);
                        } catch (e) {
                            d = !0, r = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (d) throw r
                            }
                        }
                        return o
                    }
                }(e, i) || Object(o.a)(e, i) || Object(l.a)()
            }
        },
        25: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return Q
            })), n.d(t, "a", (function() {
                return M
            }));
            n(62), n(35), n(41), n(95), n(34), n(96);
            var r = n(9),
                o = n(32),
                l = (n(58), n(26), n(40), n(19), n(31), n(97), n(1)),
                d = n(184),
                c = n(123),
                h = n.n(c),
                f = n(55),
                m = n.n(f),
                v = (n(53), n(54), n(124)),
                y = n(14),
                w = n(0);
            "scrollRestoration" in window.history && (Object(w.u)("manual"), window.addEventListener("beforeunload", (function() {
                Object(w.u)("auto")
            })), window.addEventListener("load", (function() {
                Object(w.u)("manual")
            })));

            function x(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function S(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? x(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : x(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var C = function() {};
            l.default.use(v.a);
            var A = {
                mode: "history",
                base: "/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function(e, t, n) {
                    var r = !1,
                        o = e !== t;
                    n ? r = n : o && function(e) {
                        var t = Object(w.h)(e);
                        if (1 === t.length) {
                            var n = t[0].options;
                            return !1 !== (void 0 === n ? {} : n).scrollToTop
                        }
                        return t.some((function(e) {
                            var t = e.options;
                            return t && t.scrollToTop
                        }))
                    }(e) && (r = {
                        x: 0,
                        y: 0
                    });
                    var l = window.$nuxt;
                    return (!o || e.path === t.path && e.hash !== t.hash) && l.$nextTick((function() {
                        return l.$emit("triggerScroll")
                    })), new Promise((function(t) {
                        l.$once("triggerScroll", (function() {
                            if (e.hash) {
                                var n = e.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                                try {
                                    document.querySelector(n) && (r = {
                                        selector: n
                                    })
                                } catch (e) {
                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                }
                            }
                            t(r)
                        }))
                    }))
                },
                routes: [{
                    path: "/home-app-landing",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(2), n.e(6), n.e(20)]).then(n.bind(null, 584)))
                    },
                    name: "home-app-landing"
                }, {
                    path: "/home-app-landing-onePage",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(2), n.e(6), n.e(19)]).then(n.bind(null, 585)))
                    },
                    name: "home-app-landing-onePage"
                }, {
                    path: "/home-cloud-hosting",
                    component: function() {
                        return Object(w.n)(n.e(21).then(n.bind(null, 557)))
                    },
                    name: "home-cloud-hosting"
                }, {
                    path: "/home-crypto",
                    component: function() {
                        return Object(w.n)(n.e(22).then(n.bind(null, 561)))
                    },
                    name: "home-crypto"
                }, {
                    path: "/home-cyber-security",
                    component: function() {
                        return Object(w.n)(n.e(23).then(n.bind(null, 558)))
                    },
                    name: "home-cyber-security"
                }, {
                    path: "/home-data-analysis",
                    component: function() {
                        return Object(w.n)(n.e(24).then(n.bind(null, 559)))
                    },
                    name: "home-data-analysis"
                }, {
                    path: "/home-digital-agency",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(8), n.e(26)]).then(n.bind(null, 571)))
                    },
                    name: "home-digital-agency"
                }, {
                    path: "/home-digital-agency-onePage",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(8), n.e(25)]).then(n.bind(null, 572)))
                    },
                    name: "home-digital-agency-onePage"
                }, {
                    path: "/home-freelance-personal",
                    component: function() {
                        return Object(w.n)(n.e(27).then(n.bind(null, 563)))
                    },
                    name: "home-freelance-personal"
                }, {
                    path: "/home-help-desk",
                    component: function() {
                        return Object(w.n)(n.e(28).then(n.bind(null, 562)))
                    },
                    name: "home-help-desk"
                }, {
                    path: "/home-it-solutions",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(9), n.e(30)]).then(n.bind(null, 573)))
                    },
                    name: "home-it-solutions"
                }, {
                    path: "/home-it-solutions-onePage",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(9), n.e(29)]).then(n.bind(null, 574)))
                    },
                    name: "home-it-solutions-onePage"
                }, {
                    path: "/home-it-solutions2",
                    component: function() {
                        return Object(w.n)(n.e(31).then(n.bind(null, 555)))
                    },
                    name: "home-it-solutions2"
                }, {
                    path: "",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(3), n.e(33)]).then(n.bind(null, 586)))
                    },
                    name: "home-marketing-startup"
                }, {
                    path: "-onePage",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(3), n.e(32)]).then(n.bind(null, 587)))
                    },
                    name: "home-marketing-startup-onePage"
                }, {
                    path: "/home-nft-marketplace",
                    component: function() {
                        return Object(w.n)(n.e(34).then(n.bind(null, 564)))
                    },
                    name: "home-nft-marketplace"
                }, {
                    path: "/home-payment-solutions",
                    component: function() {
                        return Object(w.n)(n.e(35).then(n.bind(null, 560)))
                    },
                    name: "home-payment-solutions"
                }, {
                    path: "/home-saas-technology",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(4), n.e(37)]).then(n.bind(null, 588)))
                    },
                    name: "home-saas-technology"
                }, {
                    path: "/home-saas-technology-onePage",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(4), n.e(36)]).then(n.bind(null, 575)))
                    },
                    name: "home-saas-technology-onePage"
                }, {
                    path: "/home-shop-modern",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(5), n.e(38)]).then(n.bind(null, 589)))
                    },
                    name: "home-shop-modern"
                }, {
                    path: "/home-software-company",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(10), n.e(40)]).then(n.bind(null, 576)))
                    },
                    name: "home-software-company"
                }, {
                    path: "/home-software-company-onePage",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(10), n.e(39)]).then(n.bind(null, 577)))
                    },
                    name: "home-software-company-onePage"
                }, {
                    path: "/page-404",
                    component: function() {
                        return Object(w.n)(n.e(42).then(n.bind(null, 583)))
                    },
                    name: "page-404"
                }, {
                    path: "/page-about-2",
                    component: function() {
                        return Object(w.n)(n.e(43).then(n.bind(null, 565)))
                    },
                    name: "page-about-2"
                }, {
                    path: "/page-about-5",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(11), n.e(44)]).then(n.bind(null, 590)))
                    },
                    name: "page-about-5"
                }, {
                    path: "/page-about-app",
                    component: function() {
                        return Object(w.n)(n.e(45).then(n.bind(null, 566)))
                    },
                    name: "page-about-app"
                }, {
                    path: "/page-blog-5",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(48)]).then(n.bind(null, 591)))
                    },
                    name: "page-blog-5"
                }, {
                    path: "/page-blog-5-left-sidebar",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(46)]).then(n.bind(null, 592)))
                    },
                    name: "page-blog-5-left-sidebar"
                }, {
                    path: "/page-blog-5-wide",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(47)]).then(n.bind(null, 593)))
                    },
                    name: "page-blog-5-wide"
                }, {
                    path: "/page-blog-app",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(51)]).then(n.bind(null, 594)))
                    },
                    name: "page-blog-app"
                }, {
                    path: "/page-blog-app-left-sidebar",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(49)]).then(n.bind(null, 595)))
                    },
                    name: "page-blog-app-left-sidebar"
                }, {
                    path: "/page-blog-app-wide",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(50)]).then(n.bind(null, 596)))
                    },
                    name: "page-blog-app-wide"
                }, {
                    path: "/page-career-details",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(12), n.e(52)]).then(n.bind(null, 570)))
                    },
                    name: "page-career-details"
                }, {
                    path: "/page-careers-5",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(12), n.e(53)]).then(n.bind(null, 567)))
                    },
                    name: "page-careers-5"
                }, {
                    path: "/page-comming-soon-5",
                    component: function() {
                        return Object(w.n)(n.e(54).then(n.bind(null, 578)))
                    },
                    name: "page-comming-soon-5"
                }, {
                    path: "/page-contact-5",
                    component: function() {
                        return Object(w.n)(n.e(55).then(n.bind(null, 597)))
                    },
                    name: "page-contact-5"
                }, {
                    path: "/page-contact-app",
                    component: function() {
                        return Object(w.n)(n.e(56).then(n.bind(null, 579)))
                    },
                    name: "page-contact-app"
                }, {
                    path: "/page-faq-5",
                    component: function() {
                        return Object(w.n)(n.e(57).then(n.bind(null, 568)))
                    },
                    name: "page-faq-5"
                }, {
                    path: "/page-portfolio-5",
                    component: function() {
                        return Object(w.n)(n.e(58).then(n.bind(null, 598)))
                    },
                    name: "page-portfolio-5"
                }, {
                    path: "/page-portfolio-app",
                    component: function() {
                        return Object(w.n)(n.e(59).then(n.bind(null, 599)))
                    },
                    name: "page-portfolio-app"
                }, {
                    path: "/page-product-5",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(7), n.e(60)]).then(n.bind(null, 600)))
                    },
                    name: "page-product-5"
                }, {
                    path: "/page-product-app",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(7), n.e(61)]).then(n.bind(null, 601)))
                    },
                    name: "page-product-app"
                }, {
                    path: "/page-services-5",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(4), n.e(62)]).then(n.bind(null, 602)))
                    },
                    name: "page-services-5"
                }, {
                    path: "/page-services-app",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(2), n.e(63)]).then(n.bind(null, 580)))
                    },
                    name: "page-services-app"
                }, {
                    path: "/page-services-details-5",
                    component: function() {
                        return Object(w.n)(n.e(64).then(n.bind(null, 569)))
                    },
                    name: "page-services-details-5"
                }, {
                    path: "/page-shop-5",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(5), n.e(65)]).then(n.bind(null, 603)))
                    },
                    name: "page-shop-5"
                }, {
                    path: "/page-shop-app",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(5), n.e(66)]).then(n.bind(null, 604)))
                    },
                    name: "page-shop-app"
                }, {
                    path: "/page-sign-in",
                    component: function() {
                        return Object(w.n)(n.e(67).then(n.bind(null, 581)))
                    },
                    name: "page-sign-in"
                }, {
                    path: "/page-single-post-5",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(1), n.e(70)]).then(n.bind(null, 605)))
                    },
                    name: "page-single-post-5"
                }, {
                    path: "/page-single-post-5-left-sidebar",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(1), n.e(68)]).then(n.bind(null, 606)))
                    },
                    name: "page-single-post-5-left-sidebar"
                }, {
                    path: "/page-single-post-5-wide",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(1), n.e(69)]).then(n.bind(null, 607)))
                    },
                    name: "page-single-post-5-wide"
                }, {
                    path: "/page-single-post-app",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(1), n.e(73)]).then(n.bind(null, 608)))
                    },
                    name: "page-single-post-app"
                }, {
                    path: "/page-single-post-app-left-sidebar",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(1), n.e(71)]).then(n.bind(null, 609)))
                    },
                    name: "page-single-post-app-left-sidebar"
                }, {
                    path: "/page-single-post-app-wide",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(1), n.e(72)]).then(n.bind(null, 610)))
                    },
                    name: "page-single-post-app-wide"
                }, {
                    path: "/page-single-project-5",
                    component: function() {
                        return Object(w.n)(n.e(74).then(n.bind(null, 611)))
                    },
                    name: "page-single-project-5"
                }, {
                    path: "/page-single-project-app",
                    component: function() {
                        return Object(w.n)(n.e(75).then(n.bind(null, 612)))
                    },
                    name: "page-single-project-app"
                }, {
                    path: "/rtl-home-app-landing-onePage",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(2), n.e(6), n.e(76)]).then(n.bind(null, 613)))
                    },
                    name: "rtl-home-app-landing-onePage"
                }, {
                    path: "/rtl-home-marketing-startup",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(3), n.e(78)]).then(n.bind(null, 614)))
                    },
                    name: "rtl-home-marketing-startup"
                }, {
                    path: "/rtl-home-marketing-startup-onePage",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(3), n.e(77)]).then(n.bind(null, 615)))
                    },
                    name: "rtl-home-marketing-startup-onePage"
                }, {
                    path: "/rtl-page-about",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(11), n.e(79)]).then(n.bind(null, 616)))
                    },
                    name: "rtl-page-about"
                }, {
                    path: "/rtl-page-blog",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(80)]).then(n.bind(null, 617)))
                    },
                    name: "rtl-page-blog"
                }, {
                    path: "/rtl-page-contact",
                    component: function() {
                        return Object(w.n)(n.e(81).then(n.bind(null, 618)))
                    },
                    name: "rtl-page-contact"
                }, {
                    path: "/rtl-page-portfolio",
                    component: function() {
                        return Object(w.n)(n.e(82).then(n.bind(null, 619)))
                    },
                    name: "rtl-page-portfolio"
                }, {
                    path: "/rtl-page-product",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(7), n.e(83)]).then(n.bind(null, 620)))
                    },
                    name: "rtl-page-product"
                }, {
                    path: "/rtl-page-services",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(4), n.e(84)]).then(n.bind(null, 621)))
                    },
                    name: "rtl-page-services"
                }, {
                    path: "/rtl-page-shop",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(5), n.e(85)]).then(n.bind(null, 622)))
                    },
                    name: "rtl-page-shop"
                }, {
                    path: "/rtl-page-single-post",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(1), n.e(86)]).then(n.bind(null, 623)))
                    },
                    name: "rtl-page-single-post"
                }, {
                    path: "/rtl-page-single-project",
                    component: function() {
                        return Object(w.n)(n.e(87).then(n.bind(null, 624)))
                    },
                    name: "rtl-page-single-project"
                }, {
                    path: "/",
                    component: function() {
                        return Object(w.n)(n.e(41).then(n.bind(null, 556)))
                    },
                    name: "index"
                }],
                fallback: !1
            };

            function E(e, t) {
                var base = t._app && t._app.basePath || A.base,
                    n = new v.a(S(S({}, A), {}, {
                        base: base
                    })),
                    r = n.push;
                n.push = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return r.call(this, e, t, n)
                };
                var o = n.resolve.bind(n);
                return n.resolve = function(e, t, n) {
                    return "string" == typeof e && (e = Object(y.d)(e)), o(e, t, n)
                }, n
            }
            var T = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function(e, t) {
                        var n = t.parent,
                            data = t.data,
                            r = t.props,
                            o = n.$createElement;
                        data.nuxtChild = !0;
                        for (var l = n, d = n.$nuxt.nuxt.transitions, c = n.$nuxt.nuxt.defaultTransition, h = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && h++, n = n.$parent;
                        data.nuxtChildDepth = h;
                        var f = d[h] || c,
                            m = {};
                        $.forEach((function(e) {
                            void 0 !== f[e] && (m[e] = f[e])
                        }));
                        var v = {};
                        k.forEach((function(e) {
                            "function" == typeof f[e] && (v[e] = f[e].bind(l))
                        }));
                        var y = v.beforeEnter;
                        if (v.beforeEnter = function(e) {
                                if (window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    })), y) return y.call(l, e)
                            }, !1 === f.css) {
                            var w = v.leave;
                            (!w || w.length < 2) && (v.leave = function(e, t) {
                                w && w.call(l, e), l.$nextTick(t)
                            })
                        }
                        var x = o("routerView", data);
                        return r.keepAlive && (x = o("keep-alive", {
                            props: r.keepAliveProps
                        }, [x])), o("transition", {
                            props: m,
                            on: v
                        }, [x])
                    }
                },
                $ = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                k = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                O = {
                    name: "NuxtError",
                    props: {
                        error: {
                            type: Object,
                            default: null
                        }
                    },
                    computed: {
                        statusCode: function() {
                            return this.error && this.error.statusCode || 500
                        },
                        message: function() {
                            return this.error.message || "Error"
                        }
                    },
                    head: function() {
                        return {
                            title: this.message,
                            meta: [{
                                name: "viewport",
                                content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                            }]
                        }
                    }
                },
                P = (n(254), n(73)),
                M = Object(P.a)(O, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "__nuxt-error-page"
                    }, [t("div", {
                        staticClass: "error"
                    }, [t("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "90",
                            height: "90",
                            fill: "#DBE1EC",
                            viewBox: "0 0 48 48"
                        }
                    }, [t("path", {
                        attrs: {
                            d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                        }
                    })]), e._v(" "), t("div", {
                        staticClass: "title"
                    }, [e._v(e._s(e.message))]), e._v(" "), 404 === e.statusCode ? t("p", {
                        staticClass: "description"
                    }, [void 0 === e.$route ? t("a", {
                        staticClass: "error-link",
                        attrs: {
                            href: "/"
                        }
                    }) : t("NuxtLink", {
                        staticClass: "error-link",
                        attrs: {
                            to: "/"
                        }
                    }, [e._v("Back to the home page")])], 1) : e._e(), e._v(" "), e._m(0)])])
                }), [function() {
                    var e = this._self._c;
                    return e("div", {
                        staticClass: "logo"
                    }, [e("a", {
                        attrs: {
                            href: "https://nuxtjs.org",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [this._v("Nuxt")])])
                }], !1, null, null, null).exports,
                _ = n(22),
                I = (n(105), {
                    name: "Nuxt",
                    components: {
                        NuxtChild: T,
                        NuxtError: M
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function(e) {
                        this.displayingNuxtError && (this.errorFromNuxtError = e, this.$forceUpdate())
                    },
                    computed: {
                        routerViewKey: function() {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(w.c)(this.$route.matched[0].path)(this.$route.params);
                            var e = Object(_.a)(this.$route.matched, 1)[0];
                            if (!e) return this.$route.path;
                            var t = e.components.default;
                            if (t && t.options) {
                                var n = t.options;
                                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                            }
                            return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                        }
                    },
                    beforeCreate: function() {
                        l.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                    },
                    render: function(e) {
                        var t = this;
                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                            return t.errorFromNuxtError = !1
                        })), e("div", {}, [e("h2", "An error occurred while showing the error page"), e("p", "Unfortunately an error occurred and while showing the error page another error occurred"), e("p", "Error details: ".concat(this.errorFromNuxtError.toString())), e("nuxt-link", {
                            props: {
                                to: "/"
                            }
                        }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                            return t.displayingNuxtError = !1
                        })), e(M, {
                            props: {
                                error: this.nuxt.err
                            }
                        })) : e("NuxtChild", {
                            key: this.routerViewKey,
                            props: this.$props
                        })
                    }
                }),
                j = (n(60), n(67), n(57), n(70), n(77), n(78), n(56), {
                    name: "NuxtLoading",
                    data: function() {
                        return {
                            percent: 0,
                            show: !1,
                            canSucceed: !0,
                            reversed: !1,
                            skipTimerCount: 0,
                            rtl: !1,
                            throttle: 200,
                            duration: 5e3,
                            continuous: !1
                        }
                    },
                    computed: {
                        left: function() {
                            return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                        }
                    },
                    beforeDestroy: function() {
                        this.clear()
                    },
                    methods: {
                        clear: function() {
                            clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                        },
                        start: function() {
                            var e = this;
                            return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                                return e.startTimer()
                            }), this.throttle) : this.startTimer(), this
                        },
                        set: function(e) {
                            return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(e))), this
                        },
                        get: function() {
                            return this.percent
                        },
                        increase: function(e) {
                            return this.percent = Math.min(100, Math.floor(this.percent + e)), this
                        },
                        decrease: function(e) {
                            return this.percent = Math.max(0, Math.floor(this.percent - e)), this
                        },
                        pause: function() {
                            return clearInterval(this._timer), this
                        },
                        resume: function() {
                            return this.startTimer(), this
                        },
                        finish: function() {
                            return this.percent = this.reversed ? 0 : 100, this.hide(), this
                        },
                        hide: function() {
                            var e = this;
                            return this.clear(), setTimeout((function() {
                                e.show = !1, e.$nextTick((function() {
                                    e.percent = 0, e.reversed = !1
                                }))
                            }), 500), this
                        },
                        fail: function(e) {
                            return this.canSucceed = !1, this
                        },
                        startTimer: function() {
                            var e = this;
                            this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                                e.skipTimerCount > 0 ? e.skipTimerCount-- : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut), e.continuous && (e.percent >= 100 || e.percent <= 0) && (e.skipTimerCount = 1, e.reversed = !e.reversed))
                            }), 100)
                        }
                    },
                    render: function(e) {
                        var t = e(!1);
                        return this.show && (t = e("div", {
                            staticClass: "nuxt-progress",
                            class: {
                                "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                            },
                            style: {
                                width: this.percent + "%",
                                left: this.left
                            }
                        })), t
                    }
                }),
                z = (n(255), Object(P.a)(j, undefined, undefined, !1, null, null, null).exports);
            n(256), n(257);

            function L(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return D(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    d = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        d = !0, o = e
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (d) throw o
                        }
                    }
                }
            }

            function D(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                return n
            }
            var R = {},
                B = {
                    _Main: function() {
                        return n.e(15).then(n.bind(null, 625)).then((function(e) {
                            return Object(w.s)(e.default || e)
                        }))
                    },
                    _Preview: function() {
                        return n.e(16).then(n.bind(null, 582)).then((function(e) {
                            return Object(w.s)(e.default || e)
                        }))
                    },
                    _RTL: function() {
                        return n.e(17).then(n.bind(null, 626)).then((function(e) {
                            return Object(w.s)(e.default || e)
                        }))
                    },
                    _default: function() {
                        return n.e(18).then(n.bind(null, 627)).then((function(e) {
                            return Object(w.s)(e.default || e)
                        }))
                    }
                },
                V = {
                    render: function(e, t) {
                        var n = e("NuxtLoading", {
                                ref: "loading"
                            }),
                            r = e(this.layout || "nuxt"),
                            o = e("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [r]),
                            l = e("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function(e) {
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                }
                            }, [o]);
                        return e("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [n, l])
                    },
                    data: function() {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    },
                    beforeCreate: function() {
                        l.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
                    },
                    created: function() {
                        this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                    },
                    mounted: function() {
                        var e = this;
                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.$loading = e.$refs.loading, !e.isPreview) {
                                            t.next = 9;
                                            break
                                        }
                                        if (!e.$store || !e.$store._actions.nuxtServerInit) {
                                            t.next = 6;
                                            break
                                        }
                                        return e.$loading.start(), t.next = 6, e.$store.dispatch("nuxtServerInit", e.context);
                                    case 6:
                                        return t.next = 8, e.refresh();
                                    case 8:
                                        e.$loading.finish();
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    watch: {
                        "nuxt.err": "errorChanged"
                    },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline
                        },
                        isFetching: function() {
                            return this.nbFetching > 0
                        },
                        isPreview: function() {
                            return Boolean(this.$options.previewData)
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                        },
                        refresh: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                var n, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ((n = Object(w.i)(e.$route)).length) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 3:
                                            return e.$loading.start(), r = n.map((function(t) {
                                                var p = [];
                                                if (t.$options.fetch && t.$options.fetch.length && p.push(Object(w.q)(t.$options.fetch, e.context)), t.$fetch) p.push(t.$fetch());
                                                else {
                                                    var n, r = L(Object(w.f)(t.$vnode.componentInstance));
                                                    try {
                                                        for (r.s(); !(n = r.n()).done;) {
                                                            var component = n.value;
                                                            p.push(component.$fetch())
                                                        }
                                                    } catch (e) {
                                                        r.e(e)
                                                    } finally {
                                                        r.f()
                                                    }
                                                }
                                                return t.$options.asyncData && p.push(Object(w.q)(t.$options.asyncData, e.context).then((function(e) {
                                                    for (var n in e) l.default.set(t.$data, n, e[n])
                                                }))), Promise.all(p)
                                            })), t.prev = 5, t.next = 8, Promise.all(r);
                                        case 8:
                                            t.next = 15;
                                            break;
                                        case 10:
                                            t.prev = 10, t.t0 = t.catch(5), e.$loading.fail(t.t0), Object(w.l)(t.t0), e.error(t.t0);
                                        case 15:
                                            e.$loading.finish();
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [5, 10]
                                ])
                            })))()
                        },
                        errorChanged: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                var n;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!e.nuxt.err) {
                                                t.next = 7;
                                                break
                                            }
                                            return e.$loading && (e.$loading.fail && e.$loading.fail(e.nuxt.err), e.$loading.finish && e.$loading.finish()), "function" == typeof(n = (M.options || M).layout) && (n = n(e.context)), t.next = 6, e.loadLayout(n);
                                        case 6:
                                            e.setLayout(n);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        setLayout: function(e) {
                            e && R["_" + e] || (e = "default"), this.layoutName = e;
                            var t = "_" + e;
                            return this.layout = R[t], this.layout
                        },
                        loadLayout: function(e) {
                            var t = this,
                                n = !e,
                                r = !(B["_" + e] || R["_" + e]),
                                o = "_" + (n || r ? "default" : e);
                            return R[o] ? Promise.resolve(R[o]) : B[o]().then((function(e) {
                                return R[o] = e, delete B[o], R[o]
                            })).catch((function(e) {
                                if (t.$nuxt) return t.$nuxt.error({
                                    statusCode: 500,
                                    message: e.message
                                })
                            }))
                        },
                        getRouterBase: function() {
                            return Object(y.h)(this.$router.options.base)
                        },
                        getRoutePath: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/",
                                base = this.getRouterBase();
                            return Object(y.h)(Object(y.g)(Object(y.e)(e).pathname, base))
                        },
                        getStaticAssetsPath: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/",
                                t = window.__NUXT__.staticAssetsBase;
                            return Object(w.v)(t, this.getRoutePath(e))
                        },
                        fetchStaticManifest: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.abrupt("return", window.__NUXT_IMPORT__("manifest.js", Object(y.d)(Object(w.v)(e.getStaticAssetsPath(), "manifest.js"))));
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        setPagePayload: function(e) {
                            this._pagePayload = e, this._fetchCounters = {}
                        },
                        fetchPayload: function(e, t) {
                            var n = this;
                            return Object(r.a)(regeneratorRuntime.mark((function r() {
                                var path, o, l;
                                return regeneratorRuntime.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return path = Object(y.a)(n.getRoutePath(e)), r.next = 3, n.fetchStaticManifest();
                                        case 3:
                                            if (r.sent.routes.includes(path)) {
                                                r.next = 7;
                                                break
                                            }
                                            throw t || n.setPagePayload(!1), new Error("Route ".concat(path, " is not pre-rendered"));
                                        case 7:
                                            return o = Object(w.v)(n.getStaticAssetsPath(e), "payload.js"), r.prev = 8, r.next = 11, window.__NUXT_IMPORT__(path, Object(y.d)(o));
                                        case 11:
                                            return l = r.sent, t || n.setPagePayload(l), r.abrupt("return", l);
                                        case 16:
                                            throw r.prev = 16, r.t0 = r.catch(8), t || n.setPagePayload(!1), r.t0;
                                        case 20:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [8, 16]
                                ])
                            })))()
                        }
                    },
                    components: {
                        NuxtLoading: z
                    }
                },
                N = n(125),
                F = n.n(N);
            l.default.use(F.a, {
                duration: 1e3
            });
            var H = function(e, t) {
                    t("scrollTo", F.a.scrollTo)
                },
                G = n(126),
                X = n(127),
                Y = n(128);

            function W(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function U(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? W(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : W(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            l.default.component(h.a.name, h.a), l.default.component(m.a.name, U(U({}, m.a), {}, {
                render: function(e, t) {
                    return m.a._warned || (m.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), m.a.render(e, t)
                }
            })), l.default.component(T.name, T), l.default.component("NChild", T), l.default.component(I.name, I), Object.defineProperty(l.default.prototype, "$nuxt", {
                get: function() {
                    var e = this.$root.$options.$nuxt;
                    return e || "undefined" == typeof window ? e : window.$nuxt
                },
                configurable: !0
            }), l.default.use(d.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var K = {
                name: "page",
                mode: "out-in",
                appear: !1,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            };

            function Q(e) {
                return J.apply(this, arguments)
            }

            function J() {
                return J = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                    var n, o, d, c, h, path, f, m = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return f = function(e, t) {
                                    if (!e) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === t) throw new Error("inject('".concat(e, "', value) has no value provided"));
                                    d[e = "$" + e] = t, d.context[e] || (d.context[e] = t);
                                    var n = "__nuxt_" + e + "_installed__";
                                    l.default[n] || (l.default[n] = !0, l.default.use((function() {
                                        Object.prototype.hasOwnProperty.call(l.default.prototype, e) || Object.defineProperty(l.default.prototype, e, {
                                            get: function() {
                                                return this.$root.$options[e]
                                            }
                                        })
                                    })))
                                }, n = m.length > 1 && void 0 !== m[1] ? m[1] : {}, e.next = 4, E(0, n);
                            case 4:
                                return o = e.sent, d = U({
                                    head: {
                                        title: "Iteck",
                                        htmlAttrs: {
                                            lang: "en"
                                        },
                                        meta: [{
                                            charset: "utf-8"
                                        }, {
                                            httpEquiv: "X-UA-Compatible",
                                            content: "IE=edge"
                                        }, {
                                            name: "viewport",
                                            content: "width=device-width, initial-scale=1"
                                        }, {
                                            hid: "description",
                                            name: "description",
                                            content: "Iteck - Multi-Purpose Vue.js Nuxt.js Template"
                                        }, {
                                            name: "keywords",
                                            content: "Vue Nuxtjs Template Iteck Multi-Purpose themeforest"
                                        }, {
                                            name: "format-detection",
                                            content: "telephone=no"
                                        }],
                                        link: [{
                                            rel: "shortcut icon",
                                            sizes: "16x16",
                                            href: "/assets/img/fav.png"
                                        }, {
                                            rel: "stylesheet",
                                            href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                                        }, {
                                            rel: "stylesheet",
                                            href: "https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap"
                                        }],
                                        script: [{
                                            src: "/assets/js/lib/pace.js"
                                        }, {
                                            src: "/assets/js/lib/bootstrap.bundle.min.js"
                                        }, {
                                            src: "/assets/js/lib/mixitup.min.js"
                                        }, {
                                            src: "/assets/js/lib/wow.min.js"
                                        }, {
                                            src: "/assets/js/lib/html5shiv.min.js"
                                        }, {
                                            src: "https://kit.fontawesome.com/d8d8f76b04.js"
                                        }, {
                                            src: "/assets/js/main.js",
                                            ssr: !1
                                        }],
                                        style: []
                                    },
                                    router: o,
                                    nuxt: {
                                        defaultTransition: K,
                                        transitions: [K],
                                        setTransitions: function(e) {
                                            return Array.isArray(e) || (e = [e]), e = e.map((function(e) {
                                                return e = e ? "string" == typeof e ? Object.assign({}, K, {
                                                    name: e
                                                }) : Object.assign({}, K, e) : K
                                            })), this.$options.nuxt.transitions = e, e
                                        },
                                        err: null,
                                        dateErr: null,
                                        error: function(e) {
                                            e = e || null, d.context._errored = Boolean(e), e = e ? Object(w.p)(e) : null;
                                            var n = d.nuxt;
                                            return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = e, t && (t.nuxt.error = e), e
                                        }
                                    }
                                }, V), c = t ? t.next : function(e) {
                                    return d.router.push(e)
                                }, t ? h = o.resolve(t.url).route : (path = Object(w.g)(o.options.base, o.options.mode), h = o.resolve(path).route), e.next = 10, Object(w.t)(d, {
                                    route: h,
                                    next: c,
                                    error: d.nuxt.error.bind(d),
                                    payload: t ? t.payload : void 0,
                                    req: t ? t.req : void 0,
                                    res: t ? t.res : void 0,
                                    beforeRenderFns: t ? t.beforeRenderFns : void 0,
                                    ssrContext: t
                                });
                            case 10:
                                return f("config", n), d.context.enablePreview = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    d.previewData = Object.assign({}, e), f("preview", e)
                                }, e.next = 15, H(d.context, f);
                            case 15:
                                if ("function" != typeof G.default) {
                                    e.next = 18;
                                    break
                                }
                                return e.next = 18, Object(G.default)(d.context, f);
                            case 18:
                                if ("function" != typeof X.default) {
                                    e.next = 21;
                                    break
                                }
                                return e.next = 21, Object(X.default)(d.context, f);
                            case 21:
                                if ("function" != typeof Y.default) {
                                    e.next = 24;
                                    break
                                }
                                return e.next = 24, Object(Y.default)(d.context, f);
                            case 24:
                                return d.context.enablePreview = function() {
                                    console.warn("You cannot call enablePreview() outside a plugin.")
                                }, e.next = 27, new Promise((function(e, t) {
                                    if (!o.resolve(d.context.route.fullPath).route.matched.length) return e();
                                    o.replace(d.context.route.fullPath, e, (function(n) {
                                        if (!n._isRouter) return t(n);
                                        if (2 !== n.type) return e();
                                        var l = o.afterEach(function() {
                                            var t = Object(r.a)(regeneratorRuntime.mark((function t(n, r) {
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 3, Object(w.k)(n);
                                                        case 3:
                                                            d.context.route = t.sent, d.context.params = n.params || {}, d.context.query = n.query || {}, l(), e();
                                                        case 8:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }())
                                    }))
                                }));
                            case 27:
                                return e.abrupt("return", {
                                    app: d,
                                    router: o
                                });
                            case 28:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), J.apply(this, arguments)
            }
        },
        254: function(e, t, n) {
            "use strict";
            n(179)
        },
        255: function(e, t, n) {
            "use strict";
            n(180)
        },
        258: function(e, t, n) {
            "use strict";

            function r(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function o(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function(n) {
                    void 0 === e[n] ? e[n] = t[n] : r(t[n]) && r(e[n]) && Object.keys(t[n]).length > 0 && o(e[n], t[n])
                }))
            }
            n.r(t);
            var l = "undefined" != typeof document ? document : {},
                d = {
                    body: {},
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    activeElement: {
                        blur: function() {},
                        nodeName: ""
                    },
                    querySelector: function() {
                        return null
                    },
                    querySelectorAll: function() {
                        return []
                    },
                    getElementById: function() {
                        return null
                    },
                    createEvent: function() {
                        return {
                            initEvent: function() {}
                        }
                    },
                    createElement: function() {
                        return {
                            children: [],
                            childNodes: [],
                            style: {},
                            setAttribute: function() {},
                            getElementsByTagName: function() {
                                return []
                            }
                        }
                    },
                    createElementNS: function() {
                        return {}
                    },
                    importNode: function() {
                        return null
                    },
                    location: {
                        hash: "",
                        host: "",
                        hostname: "",
                        href: "",
                        origin: "",
                        pathname: "",
                        protocol: "",
                        search: ""
                    }
                };
            o(l, d);
            var c = "undefined" != typeof window ? window : {};
            o(c, {
                document: d,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState: function() {},
                    pushState: function() {},
                    go: function() {},
                    back: function() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {},
                matchMedia: function() {
                    return {}
                }
            });
            class h {
                constructor(e) {
                    const t = this;
                    for (let i = 0; i < e.length; i += 1) t[i] = e[i];
                    return t.length = e.length, this
                }
            }

            function f(e, t) {
                const n = [];
                let i = 0;
                if (e && !t && e instanceof h) return e;
                if (e)
                    if ("string" == typeof e) {
                        let r, o;
                        const html = e.trim();
                        if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                            let e = "div";
                            for (0 === html.indexOf("<li") && (e = "ul"), 0 === html.indexOf("<tr") && (e = "tbody"), 0 !== html.indexOf("<td") && 0 !== html.indexOf("<th") || (e = "tr"), 0 === html.indexOf("<tbody") && (e = "table"), 0 === html.indexOf("<option") && (e = "select"), o = l.createElement(e), o.innerHTML = html, i = 0; i < o.childNodes.length; i += 1) n.push(o.childNodes[i])
                        } else
                            for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || l).querySelectorAll(e.trim()) : [l.getElementById(e.trim().split("#")[1])], i = 0; i < r.length; i += 1) r[i] && n.push(r[i])
                    } else if (e.nodeType || e === c || e === l) n.push(e);
                else if (e.length > 0 && e[0].nodeType)
                    for (i = 0; i < e.length; i += 1) n.push(e[i]);
                return new h(n)
            }

            function m(e) {
                const t = [];
                for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }
            f.fn = h.prototype, f.Class = h, f.Dom7 = h;
            "resize scroll".split(" ");
            const v = {
                addClass: function(e) {
                    if (void 0 === e) return this;
                    const t = e.split(" ");
                    for (let i = 0; i < t.length; i += 1)
                        for (let e = 0; e < this.length; e += 1) void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.add(t[i]);
                    return this
                },
                removeClass: function(e) {
                    const t = e.split(" ");
                    for (let i = 0; i < t.length; i += 1)
                        for (let e = 0; e < this.length; e += 1) void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.remove(t[i]);
                    return this
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    const t = e.split(" ");
                    for (let i = 0; i < t.length; i += 1)
                        for (let e = 0; e < this.length; e += 1) void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.toggle(t[i]);
                    return this
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let i = 0; i < this.length; i += 1)
                        if (2 === arguments.length) this[i].setAttribute(e, t);
                        else
                            for (const t in e) this[i][t] = e[t], this[i].setAttribute(t, e[t]);
                    return this
                },
                removeAttr: function(e) {
                    for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(e);
                    return this
                },
                data: function(e, t) {
                    let n;
                    if (void 0 !== t) {
                        for (let i = 0; i < this.length; i += 1) n = this[i], n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
                        return this
                    }
                    if (n = this[0], n) {
                        if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e];
                        const t = n.getAttribute(`data-${e}`);
                        return t || void 0
                    }
                },
                transform: function(e) {
                    for (let i = 0; i < this.length; i += 1) {
                        const t = this[i].style;
                        t.webkitTransform = e, t.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e = `${e}ms`);
                    for (let i = 0; i < this.length; i += 1) {
                        const t = this[i].style;
                        t.webkitTransitionDuration = e, t.transitionDuration = e
                    }
                    return this
                },
                on: function(...e) {
                    let [t, n, r, o] = e;

                    function l(e) {
                        const t = e.target;
                        if (!t) return;
                        const o = e.target.dom7EventData || [];
                        if (o.indexOf(e) < 0 && o.unshift(e), f(t).is(n)) r.apply(t, o);
                        else {
                            const e = f(t).parents();
                            for (let t = 0; t < e.length; t += 1) f(e[t]).is(n) && r.apply(e[t], o)
                        }
                    }

                    function d(e) {
                        const t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
                    }
                    "function" == typeof e[1] && ([t, r, o] = e, n = void 0), o || (o = !1);
                    const c = t.split(" ");
                    let h;
                    for (let i = 0; i < this.length; i += 1) {
                        const e = this[i];
                        if (n)
                            for (h = 0; h < c.length; h += 1) {
                                const t = c[h];
                                e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                                    listener: r,
                                    proxyListener: l
                                }), e.addEventListener(t, l, o)
                            } else
                                for (h = 0; h < c.length; h += 1) {
                                    const t = c[h];
                                    e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                                        listener: r,
                                        proxyListener: d
                                    }), e.addEventListener(t, d, o)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, n, r, o] = e;
                    "function" == typeof e[1] && ([t, r, o] = e, n = void 0), o || (o = !1);
                    const l = t.split(" ");
                    for (let i = 0; i < l.length; i += 1) {
                        const e = l[i];
                        for (let t = 0; t < this.length; t += 1) {
                            const l = this[t];
                            let d;
                            if (!n && l.dom7Listeners ? d = l.dom7Listeners[e] : n && l.dom7LiveListeners && (d = l.dom7LiveListeners[e]), d && d.length)
                                for (let t = d.length - 1; t >= 0; t -= 1) {
                                    const n = d[t];
                                    r && n.listener === r || r && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === r ? (l.removeEventListener(e, n.proxyListener, o), d.splice(t, 1)) : r || (l.removeEventListener(e, n.proxyListener, o), d.splice(t, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    const t = e[0].split(" "),
                        n = e[1];
                    for (let i = 0; i < t.length; i += 1) {
                        const r = t[i];
                        for (let t = 0; t < this.length; t += 1) {
                            const o = this[t];
                            let d;
                            try {
                                d = new c.CustomEvent(r, {
                                    detail: n,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (e) {
                                d = l.createEvent("Event"), d.initEvent(r, !0, !0), d.detail = n
                            }
                            o.dom7EventData = e.filter(((data, e) => e > 0)), o.dispatchEvent(d), o.dom7EventData = [], delete o.dom7EventData
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    const t = ["webkitTransitionEnd", "transitionend"],
                        n = this;
                    let i;

                    function r(o) {
                        if (o.target === this)
                            for (e.call(this, o), i = 0; i < t.length; i += 1) n.off(t[i], r)
                    }
                    if (e)
                        for (i = 0; i < t.length; i += 1) n.on(t[i], r);
                    return this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                offset: function() {
                    if (this.length > 0) {
                        const e = this[0],
                            t = e.getBoundingClientRect(),
                            body = l.body,
                            n = e.clientTop || body.clientTop || 0,
                            r = e.clientLeft || body.clientLeft || 0,
                            o = e === c ? c.scrollY : e.scrollTop,
                            d = e === c ? c.scrollX : e.scrollLeft;
                        return {
                            top: t.top + o - n,
                            left: t.left + d - r
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    let i;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (i = 0; i < this.length; i += 1)
                                for (let t in e) this[i].style[t] = e[t];
                            return this
                        }
                        if (this[0]) return c.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    if (!e) return this;
                    for (let i = 0; i < this.length; i += 1)
                        if (!1 === e.call(this[i], i, this[i])) return this;
                    return this
                },
                html: function(html) {
                    if (void 0 === html) return this[0] ? this[0].innerHTML : void 0;
                    for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
                    return this
                },
                text: function(text) {
                    if (void 0 === text) return this[0] ? this[0].textContent.trim() : null;
                    for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
                    return this
                },
                is: function(e) {
                    const t = this[0];
                    let n, i;
                    if (!t || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (t.matches) return t.matches(e);
                        if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
                        if (t.msMatchesSelector) return t.msMatchesSelector(e);
                        for (n = f(e), i = 0; i < n.length; i += 1)
                            if (n[i] === t) return !0;
                        return !1
                    }
                    if (e === l) return t === l;
                    if (e === c) return t === c;
                    if (e.nodeType || e instanceof h) {
                        for (n = e.nodeType ? [e] : e, i = 0; i < n.length; i += 1)
                            if (n[i] === t) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    let i, e = this[0];
                    if (e) {
                        for (i = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (i += 1);
                        return i
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    const t = this.length;
                    let n;
                    return e > t - 1 ? new h([]) : e < 0 ? (n = t + e, new h(n < 0 ? [] : [this[n]])) : new h([this[e]])
                },
                append: function(...e) {
                    let t;
                    for (let n = 0; n < e.length; n += 1) {
                        t = e[n];
                        for (let i = 0; i < this.length; i += 1)
                            if ("string" == typeof t) {
                                const e = l.createElement("div");
                                for (e.innerHTML = t; e.firstChild;) this[i].appendChild(e.firstChild)
                            } else if (t instanceof h)
                            for (let e = 0; e < t.length; e += 1) this[i].appendChild(t[e]);
                        else this[i].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    let i, t;
                    for (i = 0; i < this.length; i += 1)
                        if ("string" == typeof e) {
                            const n = l.createElement("div");
                            for (n.innerHTML = e, t = n.childNodes.length - 1; t >= 0; t -= 1) this[i].insertBefore(n.childNodes[t], this[i].childNodes[0])
                        } else if (e instanceof h)
                        for (t = 0; t < e.length; t += 1) this[i].insertBefore(e[t], this[i].childNodes[0]);
                    else this[i].insertBefore(e, this[i].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && f(this[0].nextElementSibling).is(e) ? new h([this[0].nextElementSibling]) : new h([]) : this[0].nextElementSibling ? new h([this[0].nextElementSibling]) : new h([]) : new h([])
                },
                nextAll: function(e) {
                    const t = [];
                    let n = this[0];
                    if (!n) return new h([]);
                    for (; n.nextElementSibling;) {
                        const r = n.nextElementSibling;
                        e ? f(r).is(e) && t.push(r) : t.push(r), n = r
                    }
                    return new h(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e ? t.previousElementSibling && f(t.previousElementSibling).is(e) ? new h([t.previousElementSibling]) : new h([]) : t.previousElementSibling ? new h([t.previousElementSibling]) : new h([])
                    }
                    return new h([])
                },
                prevAll: function(e) {
                    const t = [];
                    let n = this[0];
                    if (!n) return new h([]);
                    for (; n.previousElementSibling;) {
                        const r = n.previousElementSibling;
                        e ? f(r).is(e) && t.push(r) : t.push(r), n = r
                    }
                    return new h(t)
                },
                parent: function(e) {
                    const t = [];
                    for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? f(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                    return f(m(t))
                },
                parents: function(e) {
                    const t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let n = this[i].parentNode;
                        for (; n;) e ? f(n).is(e) && t.push(n) : t.push(n), n = n.parentNode
                    }
                    return f(m(t))
                },
                closest: function(e) {
                    let t = this;
                    return void 0 === e ? new h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    const t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        const n = this[i].querySelectorAll(e);
                        for (let e = 0; e < n.length; e += 1) t.push(n[e])
                    }
                    return new h(t)
                },
                children: function(e) {
                    const t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        const n = this[i].childNodes;
                        for (let r = 0; r < n.length; r += 1) e ? 1 === n[r].nodeType && f(n[r]).is(e) && t.push(n[r]) : 1 === n[r].nodeType && t.push(n[r])
                    }
                    return new h(m(t))
                },
                filter: function(e) {
                    const t = [],
                        n = this;
                    for (let i = 0; i < n.length; i += 1) e.call(n[i], i, n[i]) && t.push(n[i]);
                    return new h(t)
                },
                remove: function() {
                    for (let i = 0; i < this.length; i += 1) this[i].parentNode && this[i].parentNode.removeChild(this[i]);
                    return this
                },
                add: function(...e) {
                    const t = this;
                    let i, n;
                    for (i = 0; i < e.length; i += 1) {
                        const r = f(e[i]);
                        for (n = 0; n < r.length; n += 1) t[t.length] = r[n], t.length += 1
                    }
                    return t
                },
                styles: function() {
                    return this[0] ? c.getComputedStyle(this[0], null) : {}
                }
            };
            Object.keys(v).forEach((e => {
                f.fn[e] = f.fn[e] || v[e]
            }));
            const y = {
                    deleteProps(e) {
                        const object = e;
                        Object.keys(object).forEach((e => {
                            try {
                                object[e] = null
                            } catch (e) {}
                            try {
                                delete object[e]
                            } catch (e) {}
                        }))
                    },
                    nextTick: (e, t = 0) => setTimeout(e, t),
                    now: () => Date.now(),
                    getTranslate(e, t = "x") {
                        let n, r, o;
                        const l = c.getComputedStyle(e, null);
                        return c.WebKitCSSMatrix ? (r = l.transform || l.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((a => a.replace(",", "."))).join(", ")), o = new c.WebKitCSSMatrix("none" === r ? "" : r)) : (o = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = o.toString().split(",")), "x" === t && (r = c.WebKitCSSMatrix ? o.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (r = c.WebKitCSSMatrix ? o.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), r || 0
                    },
                    parseUrlQuery(e) {
                        const t = {};
                        let i, n, param, r, o = e || c.location.href;
                        if ("string" == typeof o && o.length)
                            for (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "", n = o.split("&").filter((e => "" !== e)), r = n.length, i = 0; i < r; i += 1) param = n[i].replace(/#\S+/g, "").split("="), t[decodeURIComponent(param[0])] = void 0 === param[1] ? void 0 : decodeURIComponent(param[1]) || "";
                        return t
                    },
                    isObject: e => "object" == typeof e && null !== e && e.constructor && e.constructor === Object,
                    extend(...e) {
                        const t = Object(e[0]);
                        for (let i = 1; i < e.length; i += 1) {
                            const n = e[i];
                            if (null != n) {
                                const e = Object.keys(Object(n));
                                for (let r = 0, o = e.length; r < o; r += 1) {
                                    const o = e[r],
                                        desc = Object.getOwnPropertyDescriptor(n, o);
                                    void 0 !== desc && desc.enumerable && (y.isObject(t[o]) && y.isObject(n[o]) ? y.extend(t[o], n[o]) : !y.isObject(t[o]) && y.isObject(n[o]) ? (t[o] = {}, y.extend(t[o], n[o])) : t[o] = n[o])
                                }
                            }
                        }
                        return t
                    }
                },
                w = {
                    touch: !!("ontouchstart" in c || c.DocumentTouch && l instanceof c.DocumentTouch),
                    pointerEvents: !!c.PointerEvent && "maxTouchPoints" in c.navigator && c.navigator.maxTouchPoints >= 0,
                    observer: "MutationObserver" in c || "WebkitMutationObserver" in c,
                    passiveListener: function() {
                        let e = !1;
                        try {
                            const t = Object.defineProperty({}, "passive", {
                                get() {
                                    e = !0
                                }
                            });
                            c.addEventListener("testPassiveListener", null, t)
                        } catch (e) {}
                        return e
                    }(),
                    gestures: "ongesturestart" in c
                };
            class x {
                constructor(e = {}) {
                    const t = this;
                    t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((e => {
                        t.on(e, t.params.on[e])
                    }))
                }
                on(e, t, n) {
                    const r = this;
                    if ("function" != typeof t) return r;
                    const o = n ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][o](t)
                    })), r
                }
                once(e, t, n) {
                    const r = this;
                    if ("function" != typeof t) return r;

                    function o(...n) {
                        r.off(e, o), o.f7proxy && delete o.f7proxy, t.apply(r, n)
                    }
                    return o.f7proxy = t, r.on(e, o, n)
                }
                off(e, t) {
                    const n = this;
                    return n.eventsListeners ? (e.split(" ").forEach((e => {
                        void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].length && n.eventsListeners[e].forEach(((r, o) => {
                            (r === t || r.f7proxy && r.f7proxy === t) && n.eventsListeners[e].splice(o, 1)
                        }))
                    })), n) : n
                }
                emit(...e) {
                    const t = this;
                    if (!t.eventsListeners) return t;
                    let n, data, r;
                    "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], data = e.slice(1, e.length), r = t) : (n = e[0].events, data = e[0].data, r = e[0].context || t);
                    return (Array.isArray(n) ? n : n.split(" ")).forEach((e => {
                        if (t.eventsListeners && t.eventsListeners[e]) {
                            const n = [];
                            t.eventsListeners[e].forEach((e => {
                                n.push(e)
                            })), n.forEach((e => {
                                e.apply(r, data)
                            }))
                        }
                    })), t
                }
                useModulesParams(e) {
                    const t = this;
                    t.modules && Object.keys(t.modules).forEach((n => {
                        const r = t.modules[n];
                        r.params && y.extend(e, r.params)
                    }))
                }
                useModules(e = {}) {
                    const t = this;
                    t.modules && Object.keys(t.modules).forEach((n => {
                        const r = t.modules[n],
                            o = e[n] || {};
                        r.instance && Object.keys(r.instance).forEach((e => {
                            const n = r.instance[e];
                            t[e] = "function" == typeof n ? n.bind(t) : n
                        })), r.on && t.on && Object.keys(r.on).forEach((e => {
                            t.on(e, r.on[e])
                        })), r.create && r.create.bind(t)(o)
                    }))
                }
                static set components(e) {
                    this.use && this.use(e)
                }
                static installModule(e, ...t) {
                    const n = this;
                    n.prototype.modules || (n.prototype.modules = {});
                    const r = e.name || `${Object.keys(n.prototype.modules).length}_${y.now()}`;
                    return n.prototype.modules[r] = e, e.proto && Object.keys(e.proto).forEach((t => {
                        n.prototype[t] = e.proto[t]
                    })), e.static && Object.keys(e.static).forEach((t => {
                        n[t] = e.static[t]
                    })), e.install && e.install.apply(n, t), n
                }
                static use(e, ...t) {
                    const n = this;
                    return Array.isArray(e) ? (e.forEach((e => n.installModule(e))), n) : n.installModule(e, ...t)
                }
            }
            var S = {
                updateSize: function() {
                    const e = this;
                    let t, n;
                    const r = e.$el;
                    t = void 0 !== e.params.width ? e.params.width : r[0].clientWidth, n = void 0 !== e.params.height ? e.params.height : r[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(r.css("padding-left"), 10) - parseInt(r.css("padding-right"), 10), n = n - parseInt(r.css("padding-top"), 10) - parseInt(r.css("padding-bottom"), 10), y.extend(e, {
                        width: t,
                        height: n,
                        size: e.isHorizontal() ? t : n
                    }))
                },
                updateSlides: function() {
                    const e = this,
                        t = e.params,
                        {
                            $wrapperEl: n,
                            size: r,
                            rtlTranslate: o,
                            wrongRTL: l
                        } = e,
                        d = e.virtual && t.virtual.enabled,
                        h = d ? e.virtual.slides.length : e.slides.length,
                        f = n.children(`.${e.params.slideClass}`),
                        m = d ? e.virtual.slides.length : f.length;
                    let v = [];
                    const w = [],
                        x = [];

                    function S(e) {
                        return !t.cssMode || e !== f.length - 1
                    }
                    let C = t.slidesOffsetBefore;
                    "function" == typeof C && (C = t.slidesOffsetBefore.call(e));
                    let A = t.slidesOffsetAfter;
                    "function" == typeof A && (A = t.slidesOffsetAfter.call(e));
                    const E = e.snapGrid.length,
                        T = e.snapGrid.length;
                    let $, k, O = t.spaceBetween,
                        P = -C,
                        M = 0,
                        _ = 0;
                    if (void 0 === r) return;
                    "string" == typeof O && O.indexOf("%") >= 0 && (O = parseFloat(O.replace("%", "")) / 100 * r), e.virtualSize = -O, o ? f.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : f.css({
                        marginRight: "",
                        marginBottom: ""
                    }), t.slidesPerColumn > 1 && ($ = Math.floor(m / t.slidesPerColumn) === m / e.params.slidesPerColumn ? m : Math.ceil(m / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && ($ = Math.max($, t.slidesPerView * t.slidesPerColumn)));
                    const I = t.slidesPerColumn,
                        j = $ / I,
                        z = Math.floor(m / t.slidesPerColumn);
                    for (let i = 0; i < m; i += 1) {
                        k = 0;
                        const n = f.eq(i);
                        if (t.slidesPerColumn > 1) {
                            let r, o, l;
                            if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                                const e = Math.floor(i / (t.slidesPerGroup * t.slidesPerColumn)),
                                    d = i - t.slidesPerColumn * t.slidesPerGroup * e,
                                    c = 0 === e ? t.slidesPerGroup : Math.min(Math.ceil((m - e * I * t.slidesPerGroup) / I), t.slidesPerGroup);
                                l = Math.floor(d / c), o = d - l * c + e * t.slidesPerGroup, r = o + l * $ / I, n.css({
                                    "-webkit-box-ordinal-group": r,
                                    "-moz-box-ordinal-group": r,
                                    "-ms-flex-order": r,
                                    "-webkit-order": r,
                                    order: r
                                })
                            } else "column" === t.slidesPerColumnFill ? (o = Math.floor(i / I), l = i - o * I, (o > z || o === z && l === I - 1) && (l += 1, l >= I && (l = 0, o += 1))) : (l = Math.floor(i / j), o = i - l * j);
                            n.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== l && t.spaceBetween && `${t.spaceBetween}px`)
                        }
                        if ("none" !== n.css("display")) {
                            if ("auto" === t.slidesPerView) {
                                const r = c.getComputedStyle(n[0], null),
                                    o = n[0].style.transform,
                                    l = n[0].style.webkitTransform;
                                if (o && (n[0].style.transform = "none"), l && (n[0].style.webkitTransform = "none"), t.roundLengths) k = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                else if (e.isHorizontal()) {
                                    const e = parseFloat(r.getPropertyValue("width")),
                                        t = parseFloat(r.getPropertyValue("padding-left")),
                                        n = parseFloat(r.getPropertyValue("padding-right")),
                                        o = parseFloat(r.getPropertyValue("margin-left")),
                                        l = parseFloat(r.getPropertyValue("margin-right")),
                                        d = r.getPropertyValue("box-sizing");
                                    k = d && "border-box" === d ? e + o + l : e + t + n + o + l
                                } else {
                                    const e = parseFloat(r.getPropertyValue("height")),
                                        t = parseFloat(r.getPropertyValue("padding-top")),
                                        n = parseFloat(r.getPropertyValue("padding-bottom")),
                                        o = parseFloat(r.getPropertyValue("margin-top")),
                                        l = parseFloat(r.getPropertyValue("margin-bottom")),
                                        d = r.getPropertyValue("box-sizing");
                                    k = d && "border-box" === d ? e + o + l : e + t + n + o + l
                                }
                                o && (n[0].style.transform = o), l && (n[0].style.webkitTransform = l), t.roundLengths && (k = Math.floor(k))
                            } else k = (r - (t.slidesPerView - 1) * O) / t.slidesPerView, t.roundLengths && (k = Math.floor(k)), f[i] && (e.isHorizontal() ? f[i].style.width = `${k}px` : f[i].style.height = `${k}px`);
                            f[i] && (f[i].swiperSlideSize = k), x.push(k), t.centeredSlides ? (P = P + k / 2 + M / 2 + O, 0 === M && 0 !== i && (P = P - r / 2 - O), 0 === i && (P = P - r / 2 - O), Math.abs(P) < .001 && (P = 0), t.roundLengths && (P = Math.floor(P)), _ % t.slidesPerGroup == 0 && v.push(P), w.push(P)) : (t.roundLengths && (P = Math.floor(P)), (_ - Math.min(e.params.slidesPerGroupSkip, _)) % e.params.slidesPerGroup == 0 && v.push(P), w.push(P), P = P + k + O), e.virtualSize += k + O, M = k, _ += 1
                        }
                    }
                    let L;
                    if (e.virtualSize = Math.max(e.virtualSize, r) + A, o && l && ("slide" === t.effect || "coverflow" === t.effect) && n.css({
                            width: `${e.virtualSize+t.spaceBetween}px`
                        }), t.setWrapperSize && (e.isHorizontal() ? n.css({
                            width: `${e.virtualSize+t.spaceBetween}px`
                        }) : n.css({
                            height: `${e.virtualSize+t.spaceBetween}px`
                        })), t.slidesPerColumn > 1 && (e.virtualSize = (k + t.spaceBetween) * $, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? n.css({
                            width: `${e.virtualSize+t.spaceBetween}px`
                        }) : n.css({
                            height: `${e.virtualSize+t.spaceBetween}px`
                        }), t.centeredSlides)) {
                        L = [];
                        for (let i = 0; i < v.length; i += 1) {
                            let n = v[i];
                            t.roundLengths && (n = Math.floor(n)), v[i] < e.virtualSize + v[0] && L.push(n)
                        }
                        v = L
                    }
                    if (!t.centeredSlides) {
                        L = [];
                        for (let i = 0; i < v.length; i += 1) {
                            let n = v[i];
                            t.roundLengths && (n = Math.floor(n)), v[i] <= e.virtualSize - r && L.push(n)
                        }
                        v = L, Math.floor(e.virtualSize - r) - Math.floor(v[v.length - 1]) > 1 && v.push(e.virtualSize - r)
                    }
                    if (0 === v.length && (v = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? o ? f.filter(S).css({
                            marginLeft: `${O}px`
                        }) : f.filter(S).css({
                            marginRight: `${O}px`
                        }) : f.filter(S).css({
                            marginBottom: `${O}px`
                        })), t.centeredSlides && t.centeredSlidesBounds) {
                        let e = 0;
                        x.forEach((n => {
                            e += n + (t.spaceBetween ? t.spaceBetween : 0)
                        })), e -= t.spaceBetween;
                        const n = e - r;
                        v = v.map((e => e < 0 ? -C : e > n ? n + A : e))
                    }
                    if (t.centerInsufficientSlides) {
                        let e = 0;
                        if (x.forEach((n => {
                                e += n + (t.spaceBetween ? t.spaceBetween : 0)
                            })), e -= t.spaceBetween, e < r) {
                            const t = (r - e) / 2;
                            v.forEach(((e, n) => {
                                v[n] = e - t
                            })), w.forEach(((e, n) => {
                                w[n] = e + t
                            }))
                        }
                    }
                    y.extend(e, {
                        slides: f,
                        snapGrid: v,
                        slidesGrid: w,
                        slidesSizesGrid: x
                    }), m !== h && e.emit("slidesLengthChange"), v.length !== E && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), w.length !== T && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        n = [];
                    let i, r = 0;
                    if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides) t.visibleSlides.each(((e, t) => {
                            n.push(t)
                        }));
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                const e = t.activeIndex + i;
                                if (e > t.slides.length) break;
                                n.push(t.slides.eq(e)[0])
                            } else n.push(t.slides.eq(t.activeIndex)[0]);
                    for (i = 0; i < n.length; i += 1)
                        if (void 0 !== n[i]) {
                            const e = n[i].offsetHeight;
                            r = e > r ? e : r
                        }
                    r && t.$wrapperEl.css("height", `${r}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
                },
                updateSlidesProgress: function(e = this && this.translate || 0) {
                    const t = this,
                        n = t.params,
                        {
                            slides: r,
                            rtlTranslate: o
                        } = t;
                    if (0 === r.length) return;
                    void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                    let l = -e;
                    o && (l = e), r.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let i = 0; i < r.length; i += 1) {
                        const e = r[i],
                            d = (l + (n.centeredSlides ? t.minTranslate() : 0) - e.swiperSlideOffset) / (e.swiperSlideSize + n.spaceBetween);
                        if (n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) {
                            const o = -(l - e.swiperSlideOffset),
                                d = o + t.slidesSizesGrid[i];
                            (o >= 0 && o < t.size - 1 || d > 1 && d <= t.size || o <= 0 && d >= t.size) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(i), r.eq(i).addClass(n.slideVisibleClass))
                        }
                        e.progress = o ? -d : d
                    }
                    t.visibleSlides = f(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if (void 0 === e) {
                        const n = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * n || 0
                    }
                    const n = t.params,
                        r = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: progress,
                        isBeginning: o,
                        isEnd: l
                    } = t;
                    const d = o,
                        c = l;
                    0 === r ? (progress = 0, o = !0, l = !0) : (progress = (e - t.minTranslate()) / r, o = progress <= 0, l = progress >= 1), y.extend(t, {
                        progress: progress,
                        isBeginning: o,
                        isEnd: l
                    }), (n.watchSlidesProgress || n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), o && !d && t.emit("reachBeginning toEdge"), l && !c && t.emit("reachEnd toEdge"), (d && !o || c && !l) && t.emit("fromEdge"), t.emit("progress", progress)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: n,
                            $wrapperEl: r,
                            activeIndex: o,
                            realIndex: l
                        } = e,
                        d = e.virtual && n.virtual.enabled;
                    let c;
                    t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), c = d ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${o}"]`) : t.eq(o), c.addClass(n.slideActiveClass), n.loop && (c.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l}"]`).addClass(n.slideDuplicateActiveClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l}"]`).addClass(n.slideDuplicateActiveClass));
                    let h = c.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === h.length && (h = t.eq(0), h.addClass(n.slideNextClass));
                    let f = c.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === f.length && (f = t.eq(-1), f.addClass(n.slidePrevClass)), n.loop && (h.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), f.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${f.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${f.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        n = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: r,
                            snapGrid: o,
                            params: l,
                            activeIndex: d,
                            realIndex: c,
                            snapIndex: h
                        } = t;
                    let f, m = e;
                    if (void 0 === m) {
                        for (let i = 0; i < r.length; i += 1) void 0 !== r[i + 1] ? n >= r[i] && n < r[i + 1] - (r[i + 1] - r[i]) / 2 ? m = i : n >= r[i] && n < r[i + 1] && (m = i + 1) : n >= r[i] && (m = i);
                        l.normalizeSlideIndex && (m < 0 || void 0 === m) && (m = 0)
                    }
                    if (o.indexOf(n) >= 0) f = o.indexOf(n);
                    else {
                        const e = Math.min(l.slidesPerGroupSkip, m);
                        f = e + Math.floor((m - e) / l.slidesPerGroup)
                    }
                    if (f >= o.length && (f = o.length - 1), m === d) return void(f !== h && (t.snapIndex = f, t.emit("snapIndexChange")));
                    const v = parseInt(t.slides.eq(m).attr("data-swiper-slide-index") || m, 10);
                    y.extend(t, {
                        snapIndex: f,
                        realIndex: v,
                        previousIndex: d,
                        activeIndex: m
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), c !== v && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        n = t.params,
                        r = f(e.target).closest(`.${n.slideClass}`)[0];
                    let o = !1;
                    if (r)
                        for (let i = 0; i < t.slides.length; i += 1) t.slides[i] === r && (o = !0);
                    if (!r || !o) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(f(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = f(r).index(), n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };
            var C = {
                getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
                    const {
                        params: t,
                        rtlTranslate: n,
                        translate: r,
                        $wrapperEl: o
                    } = this;
                    if (t.virtualTranslate) return n ? -r : r;
                    if (t.cssMode) return r;
                    let l = y.getTranslate(o[0], e);
                    return n && (l = -l), l || 0
                },
                setTranslate: function(e, t) {
                    const n = this,
                        {
                            rtlTranslate: r,
                            params: o,
                            $wrapperEl: l,
                            wrapperEl: d,
                            progress: progress
                        } = n;
                    let c, h = 0,
                        f = 0;
                    n.isHorizontal() ? h = r ? -e : e : f = e, o.roundLengths && (h = Math.floor(h), f = Math.floor(f)), o.cssMode ? d[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -h : -f : o.virtualTranslate || l.transform(`translate3d(${h}px, ${f}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? h : f;
                    const m = n.maxTranslate() - n.minTranslate();
                    c = 0 === m ? 0 : (e - n.minTranslate()) / m, c !== progress && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e = 0, t = this.params.speed, n = !0, r = !0, o) {
                    const l = this,
                        {
                            params: d,
                            wrapperEl: c
                        } = l;
                    if (l.animating && d.preventInteractionOnTransition) return !1;
                    const h = l.minTranslate(),
                        f = l.maxTranslate();
                    let m;
                    if (m = r && e > h ? h : r && e < f ? f : e, l.updateProgress(m), d.cssMode) {
                        const e = l.isHorizontal();
                        return 0 === t ? c[e ? "scrollLeft" : "scrollTop"] = -m : c.scrollTo ? c.scrollTo({
                            [e ? "left" : "top"]: -m,
                            behavior: "smooth"
                        }) : c[e ? "scrollLeft" : "scrollTop"] = -m, !0
                    }
                    return 0 === t ? (l.setTransition(0), l.setTranslate(m), n && (l.emit("beforeTransitionStart", t, o), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(m), n && (l.emit("beforeTransitionStart", t, o), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                        l && !l.destroyed && e.target === this && (l.$wrapperEl[0].removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.$wrapperEl[0].removeEventListener("webkitTransitionEnd", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, n && l.emit("transitionEnd"))
                    }), l.$wrapperEl[0].addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.$wrapperEl[0].addEventListener("webkitTransitionEnd", l.onTranslateToWrapperTransitionEnd))), !0
                }
            };
            var A = {
                setTransition: function(e, t) {
                    const n = this;
                    n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
                },
                transitionStart: function(e = !0, t) {
                    const n = this,
                        {
                            activeIndex: r,
                            params: o,
                            previousIndex: l
                        } = n;
                    if (o.cssMode) return;
                    o.autoHeight && n.updateAutoHeight();
                    let d = t;
                    if (d || (d = r > l ? "next" : r < l ? "prev" : "reset"), n.emit("transitionStart"), e && r !== l) {
                        if ("reset" === d) return void n.emit("slideResetTransitionStart");
                        n.emit("slideChangeTransitionStart"), "next" === d ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart")
                    }
                },
                transitionEnd: function(e = !0, t) {
                    const n = this,
                        {
                            activeIndex: r,
                            previousIndex: o,
                            params: l
                        } = n;
                    if (n.animating = !1, l.cssMode) return;
                    n.setTransition(0);
                    let d = t;
                    if (d || (d = r > o ? "next" : r < o ? "prev" : "reset"), n.emit("transitionEnd"), e && r !== o) {
                        if ("reset" === d) return void n.emit("slideResetTransitionEnd");
                        n.emit("slideChangeTransitionEnd"), "next" === d ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd")
                    }
                }
            };
            var E = {
                slideTo: function(e = 0, t = this.params.speed, n = !0, r) {
                    const o = this;
                    let l = e;
                    l < 0 && (l = 0);
                    const {
                        params: d,
                        snapGrid: c,
                        slidesGrid: h,
                        previousIndex: f,
                        activeIndex: m,
                        rtlTranslate: v,
                        wrapperEl: y
                    } = o;
                    if (o.animating && d.preventInteractionOnTransition) return !1;
                    const w = Math.min(o.params.slidesPerGroupSkip, l);
                    let x = w + Math.floor((l - w) / o.params.slidesPerGroup);
                    x >= c.length && (x = c.length - 1), (m || d.initialSlide || 0) === (f || 0) && n && o.emit("beforeSlideChangeStart");
                    const S = -c[x];
                    if (o.updateProgress(S), d.normalizeSlideIndex)
                        for (let i = 0; i < h.length; i += 1) - Math.floor(100 * S) >= Math.floor(100 * h[i]) && (l = i);
                    if (o.initialized && l !== m) {
                        if (!o.allowSlideNext && S < o.translate && S < o.minTranslate()) return !1;
                        if (!o.allowSlidePrev && S > o.translate && S > o.maxTranslate() && (m || 0) !== l) return !1
                    }
                    let C;
                    if (C = l > m ? "next" : l < m ? "prev" : "reset", v && -S === o.translate || !v && S === o.translate) return o.updateActiveIndex(l), d.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== d.effect && o.setTranslate(S), "reset" !== C && (o.transitionStart(n, C), o.transitionEnd(n, C)), !1;
                    if (d.cssMode) {
                        const e = o.isHorizontal();
                        let n = -S;
                        return v && (n = y.scrollWidth - y.offsetWidth - n), 0 === t ? y[e ? "scrollLeft" : "scrollTop"] = n : y.scrollTo ? y.scrollTo({
                            [e ? "left" : "top"]: n,
                            behavior: "smooth"
                        }) : y[e ? "scrollLeft" : "scrollTop"] = n, !0
                    }
                    return 0 === t ? (o.setTransition(0), o.setTranslate(S), o.updateActiveIndex(l), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, r), o.transitionStart(n, C), o.transitionEnd(n, C)) : (o.setTransition(t), o.setTranslate(S), o.updateActiveIndex(l), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, r), o.transitionStart(n, C), o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(e) {
                        o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(n, C))
                    }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function(e = 0, t = this.params.speed, n = !0, r) {
                    const o = this;
                    let l = e;
                    return o.params.loop && (l += o.loopedSlides), o.slideTo(l, t, n, r)
                },
                slideNext: function(e = this.params.speed, t = !0, n) {
                    const r = this,
                        {
                            params: o,
                            animating: l
                        } = r,
                        d = r.activeIndex < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup;
                    if (o.loop) {
                        if (l) return !1;
                        r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                    }
                    return r.slideTo(r.activeIndex + d, e, t, n)
                },
                slidePrev: function(e = this.params.speed, t = !0, n) {
                    const r = this,
                        {
                            params: o,
                            animating: l,
                            snapGrid: d,
                            slidesGrid: c,
                            rtlTranslate: h
                        } = r;
                    if (o.loop) {
                        if (l) return !1;
                        r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                    }

                    function f(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const m = f(h ? r.translate : -r.translate),
                        v = d.map((e => f(e)));
                    c.map((e => f(e))), d[v.indexOf(m)];
                    let y, w = d[v.indexOf(m) - 1];
                    return void 0 === w && o.cssMode && d.forEach((e => {
                        !w && m >= e && (w = e)
                    })), void 0 !== w && (y = c.indexOf(w), y < 0 && (y = r.activeIndex - 1)), r.slideTo(y, e, t, n)
                },
                slideReset: function(e = this.params.speed, t = !0, n) {
                    return this.slideTo(this.activeIndex, e, t, n)
                },
                slideToClosest: function(e = this.params.speed, t = !0, n, r = .5) {
                    const o = this;
                    let l = o.activeIndex;
                    const d = Math.min(o.params.slidesPerGroupSkip, l),
                        c = d + Math.floor((l - d) / o.params.slidesPerGroup),
                        h = o.rtlTranslate ? o.translate : -o.translate;
                    if (h >= o.snapGrid[c]) {
                        const e = o.snapGrid[c];
                        h - e > (o.snapGrid[c + 1] - e) * r && (l += o.params.slidesPerGroup)
                    } else {
                        const e = o.snapGrid[c - 1];
                        h - e <= (o.snapGrid[c] - e) * r && (l -= o.params.slidesPerGroup)
                    }
                    return l = Math.max(l, 0), l = Math.min(l, o.slidesGrid.length - 1), o.slideTo(l, e, t, n)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: n
                        } = e,
                        r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let o, l = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        o = parseInt(f(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? l < e.loopedSlides - r / 2 || l > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), l = n.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), y.nextTick((() => {
                            e.slideTo(l)
                        }))) : e.slideTo(l) : l > e.slides.length - r ? (e.loopFix(), l = n.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), y.nextTick((() => {
                            e.slideTo(l)
                        }))) : e.slideTo(l)
                    } else e.slideTo(l)
                }
            };
            var T = {
                loopCreate: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: n
                        } = e;
                    n.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
                    let r = n.children(`.${t.slideClass}`);
                    if (t.loopFillGroupWithBlank) {
                        const e = t.slidesPerGroup - r.length % t.slidesPerGroup;
                        if (e !== t.slidesPerGroup) {
                            for (let i = 0; i < e; i += 1) {
                                const e = f(l.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                                n.append(e)
                            }
                            r = n.children(`.${t.slideClass}`)
                        }
                    }
                    "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
                    const o = [],
                        d = [];
                    r.each(((t, n) => {
                        const l = f(n);
                        t < e.loopedSlides && d.push(n), t < r.length && t >= r.length - e.loopedSlides && o.push(n), l.attr("data-swiper-slide-index", t)
                    }));
                    for (let i = 0; i < d.length; i += 1) n.append(f(d[i].cloneNode(!0)).addClass(t.slideDuplicateClass));
                    for (let i = o.length - 1; i >= 0; i -= 1) n.prepend(f(o[i].cloneNode(!0)).addClass(t.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: n,
                        loopedSlides: r,
                        allowSlidePrev: o,
                        allowSlideNext: l,
                        snapGrid: d,
                        rtlTranslate: c
                    } = e;
                    let h;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const f = -d[t] - e.getTranslate();
                    if (t < r) {
                        h = n.length - 3 * r + t, h += r;
                        e.slideTo(h, 0, !1, !0) && 0 !== f && e.setTranslate((c ? -e.translate : e.translate) - f)
                    } else if (t >= n.length - r) {
                        h = -n.length + t + r, h += r;
                        e.slideTo(h, 0, !1, !0) && 0 !== f && e.setTranslate((c ? -e.translate : e.translate) - f)
                    }
                    e.allowSlidePrev = o, e.allowSlideNext = l, e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: n
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
                }
            };
            var $ = {
                setGrabCursor: function(e) {
                    const t = this;
                    if (w.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const n = t.el;
                    n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    const e = this;
                    w.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
                }
            };
            var k = {
                appendSlide: function(e) {
                    const t = this,
                        {
                            $wrapperEl: n,
                            params: r
                        } = t;
                    if (r.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                        for (let i = 0; i < e.length; i += 1) e[i] && n.append(e[i]);
                    else n.append(e);
                    r.loop && t.loopCreate(), r.observer && w.observer || t.update()
                },
                prependSlide: function(e) {
                    const t = this,
                        {
                            params: n,
                            $wrapperEl: r,
                            activeIndex: o
                        } = t;
                    n.loop && t.loopDestroy();
                    let l = o + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (let i = 0; i < e.length; i += 1) e[i] && r.prepend(e[i]);
                        l = o + e.length
                    } else r.prepend(e);
                    n.loop && t.loopCreate(), n.observer && w.observer || t.update(), t.slideTo(l, 0, !1)
                },
                addSlide: function(e, t) {
                    const n = this,
                        {
                            $wrapperEl: r,
                            params: o,
                            activeIndex: l
                        } = n;
                    let d = l;
                    o.loop && (d -= n.loopedSlides, n.loopDestroy(), n.slides = r.children(`.${o.slideClass}`));
                    const c = n.slides.length;
                    if (e <= 0) return void n.prependSlide(t);
                    if (e >= c) return void n.appendSlide(t);
                    let h = d > e ? d + 1 : d;
                    const f = [];
                    for (let i = c - 1; i >= e; i -= 1) {
                        const e = n.slides.eq(i);
                        e.remove(), f.unshift(e)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (let i = 0; i < t.length; i += 1) t[i] && r.append(t[i]);
                        h = d > e ? d + t.length : d
                    } else r.append(t);
                    for (let i = 0; i < f.length; i += 1) r.append(f[i]);
                    o.loop && n.loopCreate(), o.observer && w.observer || n.update(), o.loop ? n.slideTo(h + n.loopedSlides, 0, !1) : n.slideTo(h, 0, !1)
                },
                removeSlide: function(e) {
                    const t = this,
                        {
                            params: n,
                            $wrapperEl: r,
                            activeIndex: o
                        } = t;
                    let l = o;
                    n.loop && (l -= t.loopedSlides, t.loopDestroy(), t.slides = r.children(`.${n.slideClass}`));
                    let d, c = l;
                    if ("object" == typeof e && "length" in e) {
                        for (let i = 0; i < e.length; i += 1) d = e[i], t.slides[d] && t.slides.eq(d).remove(), d < c && (c -= 1);
                        c = Math.max(c, 0)
                    } else d = e, t.slides[d] && t.slides.eq(d).remove(), d < c && (c -= 1), c = Math.max(c, 0);
                    n.loop && t.loopCreate(), n.observer && w.observer || t.update(), n.loop ? t.slideTo(c + t.loopedSlides, 0, !1) : t.slideTo(c, 0, !1)
                },
                removeAllSlides: function() {
                    const e = this,
                        t = [];
                    for (let i = 0; i < e.slides.length; i += 1) t.push(i);
                    e.removeSlide(t)
                }
            };
            const O = function() {
                const e = c.navigator.platform,
                    t = c.navigator.userAgent,
                    n = {
                        ios: !1,
                        android: !1,
                        androidChrome: !1,
                        desktop: !1,
                        iphone: !1,
                        ipod: !1,
                        ipad: !1,
                        edge: !1,
                        ie: !1,
                        firefox: !1,
                        macos: !1,
                        windows: !1,
                        cordova: !(!c.cordova && !c.phonegap),
                        phonegap: !(!c.cordova && !c.phonegap),
                        electron: !1
                    },
                    r = c.screen.width,
                    o = c.screen.height,
                    l = t.match(/(Android);?[\s\/]+([\d.]+)?/);
                let d = t.match(/(iPad).*OS\s([\d_]+)/);
                const h = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                    f = !d && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    m = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0,
                    v = t.indexOf("Edge/") >= 0,
                    y = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0,
                    x = "Win32" === e,
                    S = t.toLowerCase().indexOf("electron") >= 0;
                let C = "MacIntel" === e;
                return !d && C && w.touch && (1024 === r && 1366 === o || 834 === r && 1194 === o || 834 === r && 1112 === o || 768 === r && 1024 === o) && (d = t.match(/(Version)\/([\d.]+)/), C = !1), n.ie = m, n.edge = v, n.firefox = y, l && !x && (n.os = "android", n.osVersion = l[2], n.android = !0, n.androidChrome = t.toLowerCase().indexOf("chrome") >= 0), (d || f || h) && (n.os = "ios", n.ios = !0), f && !h && (n.osVersion = f[2].replace(/_/g, "."), n.iphone = !0), d && (n.osVersion = d[2].replace(/_/g, "."), n.ipad = !0), h && (n.osVersion = h[3] ? h[3].replace(/_/g, ".") : null, n.ipod = !0), n.ios && n.osVersion && t.indexOf("Version/") >= 0 && "10" === n.osVersion.split(".")[0] && (n.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]), n.webView = !(!(f || d || h) || !t.match(/.*AppleWebKit(?!.*Safari)/i) && !c.navigator.standalone) || c.matchMedia && c.matchMedia("(display-mode: standalone)").matches, n.webview = n.webView, n.standalone = n.webView, n.desktop = !(n.ios || n.android) || S, n.desktop && (n.electron = S, n.macos = C, n.windows = x, n.macos && (n.os = "macos"), n.windows && (n.os = "windows")), n.pixelRatio = c.devicePixelRatio || 1, n
            }();

            function P(e) {
                const t = this,
                    data = t.touchEventsData,
                    {
                        params: n,
                        touches: r
                    } = t;
                if (t.animating && n.preventInteractionOnTransition) return;
                let o = e;
                o.originalEvent && (o = o.originalEvent);
                const d = f(o.target);
                if ("wrapper" === n.touchEventsTarget && !d.closest(t.wrapperEl).length) return;
                if (data.isTouchEvent = "touchstart" === o.type, !data.isTouchEvent && "which" in o && 3 === o.which) return;
                if (!data.isTouchEvent && "button" in o && o.button > 0) return;
                if (data.isTouched && data.isMoved) return;
                if (n.noSwiping && d.closest(n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`)[0]) return void(t.allowClick = !0);
                if (n.swipeHandler && !d.closest(n.swipeHandler)[0]) return;
                r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, r.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                const h = r.currentX,
                    m = r.currentY,
                    v = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                    w = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                if (!v || !(h <= w || h >= c.screen.width - w)) {
                    if (y.extend(data, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), r.startX = h, r.startY = m, data.touchStartTime = y.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (data.allowThresholdMove = !1), "touchstart" !== o.type) {
                        let e = !0;
                        d.is(data.formElements) && (e = !1), l.activeElement && f(l.activeElement).is(data.formElements) && l.activeElement !== d[0] && l.activeElement.blur();
                        const r = e && t.allowTouchMove && n.touchStartPreventDefault;
                        (n.touchStartForcePreventDefault || r) && o.preventDefault()
                    }
                    t.emit("touchStart", o)
                }
            }

            function M(e) {
                const t = this,
                    data = t.touchEventsData,
                    {
                        params: n,
                        touches: r,
                        rtlTranslate: o
                    } = t;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), !data.isTouched) return void(data.startMoving && data.isScrolling && t.emit("touchMoveOpposite", d));
                if (data.isTouchEvent && "touchmove" !== d.type) return;
                const c = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                    h = "touchmove" === d.type ? c.pageX : d.pageX,
                    m = "touchmove" === d.type ? c.pageY : d.pageY;
                if (d.preventedByNestedSwiper) return r.startX = h, void(r.startY = m);
                if (!t.allowTouchMove) return t.allowClick = !1, void(data.isTouched && (y.extend(r, {
                    startX: h,
                    startY: m,
                    currentX: h,
                    currentY: m
                }), data.touchStartTime = y.now()));
                if (data.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                    if (t.isVertical()) {
                        if (m < r.startY && t.translate <= t.maxTranslate() || m > r.startY && t.translate >= t.minTranslate()) return data.isTouched = !1, void(data.isMoved = !1)
                    } else if (h < r.startX && t.translate <= t.maxTranslate() || h > r.startX && t.translate >= t.minTranslate()) return;
                if (data.isTouchEvent && l.activeElement && d.target === l.activeElement && f(d.target).is(data.formElements)) return data.isMoved = !0, void(t.allowClick = !1);
                if (data.allowTouchCallbacks && t.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
                r.currentX = h, r.currentY = m;
                const v = r.currentX - r.startX,
                    w = r.currentY - r.startY;
                if (t.params.threshold && Math.sqrt(v ** 2 + w ** 2) < t.params.threshold) return;
                if (void 0 === data.isScrolling) {
                    let e;
                    t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? data.isScrolling = !1 : v * v + w * w >= 25 && (e = 180 * Math.atan2(Math.abs(w), Math.abs(v)) / Math.PI, data.isScrolling = t.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
                }
                if (data.isScrolling && t.emit("touchMoveOpposite", d), void 0 === data.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (data.startMoving = !0)), data.isScrolling) return void(data.isTouched = !1);
                if (!data.startMoving) return;
                t.allowClick = !1, !n.cssMode && d.cancelable && d.preventDefault(), n.touchMoveStopPropagation && !n.nested && d.stopPropagation(), data.isMoved || (n.loop && t.loopFix(), data.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), data.allowMomentumBounce = !1, !n.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", d)), t.emit("sliderMove", d), data.isMoved = !0;
                let x = t.isHorizontal() ? v : w;
                r.diff = x, x *= n.touchRatio, o && (x = -x), t.swipeDirection = x > 0 ? "prev" : "next", data.currentTranslate = x + data.startTranslate;
                let S = !0,
                    C = n.resistanceRatio;
                if (n.touchReleaseOnEdges && (C = 0), x > 0 && data.currentTranslate > t.minTranslate() ? (S = !1, n.resistance && (data.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + data.startTranslate + x) ** C)) : x < 0 && data.currentTranslate < t.maxTranslate() && (S = !1, n.resistance && (data.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - data.startTranslate - x) ** C)), S && (d.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && data.currentTranslate < data.startTranslate && (data.currentTranslate = data.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && data.currentTranslate > data.startTranslate && (data.currentTranslate = data.startTranslate), n.threshold > 0) {
                    if (!(Math.abs(x) > n.threshold || data.allowThresholdMove)) return void(data.currentTranslate = data.startTranslate);
                    if (!data.allowThresholdMove) return data.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, data.currentTranslate = data.startTranslate, void(r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                }
                n.followFinger && !n.cssMode && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && (0 === data.velocities.length && data.velocities.push({
                    position: r[t.isHorizontal() ? "startX" : "startY"],
                    time: data.touchStartTime
                }), data.velocities.push({
                    position: r[t.isHorizontal() ? "currentX" : "currentY"],
                    time: y.now()
                })), t.updateProgress(data.currentTranslate), t.setTranslate(data.currentTranslate))
            }

            function _(e) {
                const t = this,
                    data = t.touchEventsData,
                    {
                        params: n,
                        touches: r,
                        rtlTranslate: o,
                        $wrapperEl: l,
                        slidesGrid: d,
                        snapGrid: c
                    } = t;
                let h = e;
                if (h.originalEvent && (h = h.originalEvent), data.allowTouchCallbacks && t.emit("touchEnd", h), data.allowTouchCallbacks = !1, !data.isTouched) return data.isMoved && n.grabCursor && t.setGrabCursor(!1), data.isMoved = !1, void(data.startMoving = !1);
                n.grabCursor && data.isMoved && data.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const f = y.now(),
                    m = f - data.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), m < 300 && f - data.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), data.lastClickTime = y.now(), y.nextTick((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !data.isTouched || !data.isMoved || !t.swipeDirection || 0 === r.diff || data.currentTranslate === data.startTranslate) return data.isTouched = !1, data.isMoved = !1, void(data.startMoving = !1);
                let v;
                if (data.isTouched = !1, data.isMoved = !1, data.startMoving = !1, v = n.followFinger ? o ? t.translate : -t.translate : -data.currentTranslate, n.cssMode) return;
                if (n.freeMode) {
                    if (v < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (v > -t.maxTranslate()) return void(t.slides.length < c.length ? t.slideTo(c.length - 1) : t.slideTo(t.slides.length - 1));
                    if (n.freeModeMomentum) {
                        if (data.velocities.length > 1) {
                            const e = data.velocities.pop(),
                                r = data.velocities.pop(),
                                o = e.position - r.position,
                                time = e.time - r.time;
                            t.velocity = o / time, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (time > 150 || y.now() - e.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= n.freeModeMomentumVelocityRatio, data.velocities.length = 0;
                        let e = 1e3 * n.freeModeMomentumRatio;
                        const r = t.velocity * e;
                        let d = t.translate + r;
                        o && (d = -d);
                        let h, f = !1;
                        const m = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                        let v;
                        if (d < t.maxTranslate()) n.freeModeMomentumBounce ? (d + t.maxTranslate() < -m && (d = t.maxTranslate() - m), h = t.maxTranslate(), f = !0, data.allowMomentumBounce = !0) : d = t.maxTranslate(), n.loop && n.centeredSlides && (v = !0);
                        else if (d > t.minTranslate()) n.freeModeMomentumBounce ? (d - t.minTranslate() > m && (d = t.minTranslate() + m), h = t.minTranslate(), f = !0, data.allowMomentumBounce = !0) : d = t.minTranslate(), n.loop && n.centeredSlides && (v = !0);
                        else if (n.freeModeSticky) {
                            let e;
                            for (let t = 0; t < c.length; t += 1)
                                if (c[t] > -d) {
                                    e = t;
                                    break
                                }
                            d = Math.abs(c[e] - d) < Math.abs(c[e - 1] - d) || "next" === t.swipeDirection ? c[e] : c[e - 1], d = -d
                        }
                        if (v && t.once("transitionEnd", (() => {
                                t.loopFix()
                            })), 0 !== t.velocity) {
                            if (e = o ? Math.abs((-d - t.translate) / t.velocity) : Math.abs((d - t.translate) / t.velocity), n.freeModeSticky) {
                                const r = Math.abs((o ? -d : d) - t.translate),
                                    l = t.slidesSizesGrid[t.activeIndex];
                                e = r < l ? n.speed : r < 2 * l ? 1.5 * n.speed : 2.5 * n.speed
                            }
                        } else if (n.freeModeSticky) return void t.slideToClosest();
                        n.freeModeMomentumBounce && f ? (t.updateProgress(h), t.setTransition(e), t.setTranslate(d), t.transitionStart(!0, t.swipeDirection), t.animating = !0, l.transitionEnd((() => {
                            t && !t.destroyed && data.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), setTimeout((() => {
                                t.setTranslate(h), l.transitionEnd((() => {
                                    t && !t.destroyed && t.transitionEnd()
                                }))
                            }), 0))
                        }))) : t.velocity ? (t.updateProgress(d), t.setTransition(e), t.setTranslate(d), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, l.transitionEnd((() => {
                            t && !t.destroyed && t.transitionEnd()
                        })))) : t.updateProgress(d), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (n.freeModeSticky) return void t.slideToClosest();
                    return void((!n.freeModeMomentum || m >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()))
                }
                let w = 0,
                    x = t.slidesSizesGrid[0];
                for (let i = 0; i < d.length; i += i < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                    const e = i < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    void 0 !== d[i + e] ? v >= d[i] && v < d[i + e] && (w = i, x = d[i + e] - d[i]) : v >= d[i] && (w = i, x = d[d.length - 1] - d[d.length - 2])
                }
                const S = (v - d[w]) / x,
                    C = w < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                if (m > n.longSwipesMs) {
                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (S >= n.longSwipesRatio ? t.slideTo(w + C) : t.slideTo(w)), "prev" === t.swipeDirection && (S > 1 - n.longSwipesRatio ? t.slideTo(w + C) : t.slideTo(w))
                } else {
                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(w + C) : t.slideTo(w) : ("next" === t.swipeDirection && t.slideTo(w + C), "prev" === t.swipeDirection && t.slideTo(w))
                }
            }

            function I() {
                const e = this,
                    {
                        params: t,
                        el: n
                    } = e;
                if (n && 0 === n.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: r,
                    allowSlidePrev: o,
                    snapGrid: l
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = o, e.allowSlideNext = r, e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
            }

            function j(e) {
                const t = this;
                t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function z() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: n
                    } = e;
                let r;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = n ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const o = e.maxTranslate() - e.minTranslate();
                r = 0 === o ? 0 : (e.translate - e.minTranslate()) / o, r !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            let L = !1;

            function D() {}
            var R = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                preventInteractionOnTransition: !1,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            };
            const B = {
                    update: S,
                    translate: C,
                    transition: A,
                    slide: E,
                    loop: T,
                    grabCursor: $,
                    manipulation: k,
                    events: {
                        attachEvents: function() {
                            const e = this,
                                {
                                    params: t,
                                    touchEvents: n,
                                    el: r,
                                    wrapperEl: o
                                } = e;
                            e.onTouchStart = P.bind(e), e.onTouchMove = M.bind(e), e.onTouchEnd = _.bind(e), t.cssMode && (e.onScroll = z.bind(e)), e.onClick = j.bind(e);
                            const d = !!t.nested;
                            if (!w.touch && w.pointerEvents) r.addEventListener(n.start, e.onTouchStart, !1), l.addEventListener(n.move, e.onTouchMove, d), l.addEventListener(n.end, e.onTouchEnd, !1);
                            else {
                                if (w.touch) {
                                    const o = !("touchstart" !== n.start || !w.passiveListener || !t.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    r.addEventListener(n.start, e.onTouchStart, o), r.addEventListener(n.move, e.onTouchMove, w.passiveListener ? {
                                        passive: !1,
                                        capture: d
                                    } : d), r.addEventListener(n.end, e.onTouchEnd, o), n.cancel && r.addEventListener(n.cancel, e.onTouchEnd, o), L || (l.addEventListener("touchstart", D), L = !0)
                                }(t.simulateTouch && !O.ios && !O.android || t.simulateTouch && !w.touch && O.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), l.addEventListener("mousemove", e.onTouchMove, d), l.addEventListener("mouseup", e.onTouchEnd, !1))
                            }(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), t.cssMode && o.addEventListener("scroll", e.onScroll), t.updateOnWindowResize ? e.on(O.ios || O.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", I, !0) : e.on("observerUpdate", I, !0)
                        },
                        detachEvents: function() {
                            const e = this,
                                {
                                    params: t,
                                    touchEvents: n,
                                    el: r,
                                    wrapperEl: o
                                } = e,
                                d = !!t.nested;
                            if (!w.touch && w.pointerEvents) r.removeEventListener(n.start, e.onTouchStart, !1), l.removeEventListener(n.move, e.onTouchMove, d), l.removeEventListener(n.end, e.onTouchEnd, !1);
                            else {
                                if (w.touch) {
                                    const o = !("onTouchStart" !== n.start || !w.passiveListener || !t.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    r.removeEventListener(n.start, e.onTouchStart, o), r.removeEventListener(n.move, e.onTouchMove, d), r.removeEventListener(n.end, e.onTouchEnd, o), n.cancel && r.removeEventListener(n.cancel, e.onTouchEnd, o)
                                }(t.simulateTouch && !O.ios && !O.android || t.simulateTouch && !w.touch && O.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), l.removeEventListener("mousemove", e.onTouchMove, d), l.removeEventListener("mouseup", e.onTouchEnd, !1))
                            }(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), t.cssMode && o.removeEventListener("scroll", e.onScroll), e.off(O.ios || O.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", I)
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            const e = this,
                                {
                                    activeIndex: t,
                                    initialized: n,
                                    loopedSlides: r = 0,
                                    params: o,
                                    $el: l
                                } = e,
                                d = o.breakpoints;
                            if (!d || d && 0 === Object.keys(d).length) return;
                            const c = e.getBreakpoint(d);
                            if (c && e.currentBreakpoint !== c) {
                                const h = c in d ? d[c] : void 0;
                                h && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((param => {
                                    const e = h[param];
                                    void 0 !== e && (h[param] = "slidesPerView" !== param || "AUTO" !== e && "auto" !== e ? "slidesPerView" === param ? parseFloat(e) : parseInt(e, 10) : "auto")
                                }));
                                const f = h || e.originalParams,
                                    m = o.slidesPerColumn > 1,
                                    v = f.slidesPerColumn > 1;
                                m && !v ? l.removeClass(`${o.containerModifierClass}multirow ${o.containerModifierClass}multirow-column`) : !m && v && (l.addClass(`${o.containerModifierClass}multirow`), "column" === f.slidesPerColumnFill && l.addClass(`${o.containerModifierClass}multirow-column`));
                                const w = f.direction && f.direction !== o.direction,
                                    x = o.loop && (f.slidesPerView !== o.slidesPerView || w);
                                w && n && e.changeDirection(), y.extend(e.params, f), y.extend(e, {
                                    allowTouchMove: e.params.allowTouchMove,
                                    allowSlideNext: e.params.allowSlideNext,
                                    allowSlidePrev: e.params.allowSlidePrev
                                }), e.currentBreakpoint = c, x && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)), e.emit("breakpoint", f)
                            }
                        },
                        getBreakpoint: function(e) {
                            if (!e) return;
                            let t = !1;
                            const n = Object.keys(e).map((e => {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    const t = parseFloat(e.substr(1));
                                    return {
                                        value: c.innerHeight * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                            n.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
                            for (let i = 0; i < n.length; i += 1) {
                                const {
                                    point: e,
                                    value: r
                                } = n[i];
                                r <= c.innerWidth && (t = e)
                            }
                            return t || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                t = e.params,
                                n = e.isLocked,
                                r = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                            t.slidesOffsetBefore && t.slidesOffsetAfter && r ? e.isLocked = r <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), n && n !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update())
                        }
                    },
                    classes: {
                        addClasses: function() {
                            const {
                                classNames: e,
                                params: t,
                                rtl: n,
                                $el: r
                            } = this, o = [];
                            o.push("initialized"), o.push(t.direction), t.freeMode && o.push("free-mode"), t.autoHeight && o.push("autoheight"), n && o.push("rtl"), t.slidesPerColumn > 1 && (o.push("multirow"), "column" === t.slidesPerColumnFill && o.push("multirow-column")), O.android && o.push("android"), O.ios && o.push("ios"), t.cssMode && o.push("css-mode"), o.forEach((n => {
                                e.push(t.containerModifierClass + n)
                            })), r.addClass(e.join(" "))
                        },
                        removeClasses: function() {
                            const {
                                $el: e,
                                classNames: t
                            } = this;
                            e.removeClass(t.join(" "))
                        }
                    },
                    images: {
                        loadImage: function(e, t, n, r, o, l) {
                            let image;

                            function d() {
                                l && l()
                            }
                            f(e).parent("picture")[0] || e.complete && o ? d() : t ? (image = new c.Image, image.onload = d, image.onerror = d, r && (image.sizes = r), n && (image.srcset = n), t && (image.src = t)) : d()
                        },
                        preloadImages: function() {
                            const e = this;

                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                                const n = e.imagesToLoad[i];
                                e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                V = {};
            class N extends x {
                constructor(...e) {
                    let t, n;
                    1 === e.length && e[0].constructor && e[0].constructor === Object ? n = e[0] : [t, n] = e, n || (n = {}), n = y.extend({}, n), t && !n.el && (n.el = t), super(n), Object.keys(B).forEach((e => {
                        Object.keys(B[e]).forEach((t => {
                            N.prototype[t] || (N.prototype[t] = B[e][t])
                        }))
                    }));
                    const r = this;
                    void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach((e => {
                        const t = r.modules[e];
                        if (t.params) {
                            const e = Object.keys(t.params)[0],
                                r = t.params[e];
                            if ("object" != typeof r || null === r) return;
                            if (!(e in n) || !("enabled" in r)) return;
                            !0 === n[e] && (n[e] = {
                                enabled: !0
                            }), "object" != typeof n[e] || "enabled" in n[e] || (n[e].enabled = !0), n[e] || (n[e] = {
                                enabled: !1
                            })
                        }
                    }));
                    const o = y.extend({}, R);
                    r.useModulesParams(o), r.params = y.extend({}, o, V, n), r.originalParams = y.extend({}, r.params), r.passedParams = y.extend({}, n), r.$ = f;
                    const l = f(r.params.el);
                    if (t = l[0], !t) return;
                    if (l.length > 1) {
                        const e = [];
                        return l.each(((t, r) => {
                            const o = y.extend({}, n, {
                                el: r
                            });
                            e.push(new N(o))
                        })), e
                    }
                    let d;
                    return t.swiper = r, l.data("swiper", r), t && t.shadowRoot && t.shadowRoot.querySelector ? (d = f(t.shadowRoot.querySelector(`.${r.params.wrapperClass}`)), d.children = e => l.children(e)) : d = l.children(`.${r.params.wrapperClass}`), y.extend(r, {
                        $el: l,
                        el: t,
                        $wrapperEl: d,
                        wrapperEl: d[0],
                        classNames: [],
                        slides: f(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === r.params.direction,
                        isVertical: () => "vertical" === r.params.direction,
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === l.css("direction"),
                        rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === l.css("direction")),
                        wrongRTL: "-webkit-box" === d.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev,
                        touchEvents: function() {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"];
                            let t = ["mousedown", "mousemove", "mouseup"];
                            return w.pointerEvents && (t = ["pointerdown", "pointermove", "pointerup"]), r.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, r.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, w.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: y.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: r.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), r.useModules(), r.params.init && r.init(), r
                }
                slidesPerViewDynamic() {
                    const {
                        params: e,
                        slides: t,
                        slidesGrid: n,
                        size: r,
                        activeIndex: o
                    } = this;
                    let l = 1;
                    if (e.centeredSlides) {
                        let e, n = t[o].swiperSlideSize;
                        for (let i = o + 1; i < t.length; i += 1) t[i] && !e && (n += t[i].swiperSlideSize, l += 1, n > r && (e = !0));
                        for (let i = o - 1; i >= 0; i -= 1) t[i] && !e && (n += t[i].swiperSlideSize, l += 1, n > r && (e = !0))
                    } else
                        for (let i = o + 1; i < t.length; i += 1) n[i] - n[o] < r && (l += 1);
                    return l
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: n
                    } = e;

                    function r() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let o;
                    n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (o = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), o || r()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    const n = this,
                        r = n.params.direction;
                    return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${r}`).addClass(`${n.params.containerModifierClass}${e}`), n.params.direction = e, n.slides.each(((t, n) => {
                        "vertical" === e ? n.style.width = "" : n.style.height = ""
                    })), n.emit("changeDirection"), t && n.update()), n
                }
                init() {
                    const e = this;
                    e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
                }
                destroy(e = !0, t = !0) {
                    const n = this,
                        {
                            params: r,
                            $el: o,
                            $wrapperEl: l,
                            slides: d
                        } = n;
                    return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), o.removeAttr("style"), l.removeAttr("style"), d && d.length && d.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
                        n.off(e)
                    })), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), y.deleteProps(n)), n.destroyed = !0), null
                }
                static extendDefaults(e) {
                    y.extend(V, e)
                }
                static get extendedDefaults() {
                    return V
                }
                static get defaults() {
                    return R
                }
                static get Class() {
                    return x
                }
                static get $() {
                    return f
                }
            }
            var F = {
                    name: "device",
                    proto: {
                        device: O
                    },
                    static: {
                        device: O
                    }
                },
                H = {
                    name: "support",
                    proto: {
                        support: w
                    },
                    static: {
                        support: w
                    }
                };
            const G = {
                isEdge: !!c.navigator.userAgent.match(/Edge/g),
                isSafari: function() {
                    const e = c.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(c.navigator.userAgent)
            };
            var X = {
                    name: "browser",
                    proto: {
                        browser: G
                    },
                    static: {
                        browser: G
                    }
                },
                Y = {
                    name: "resize",
                    create() {
                        const e = this;
                        y.extend(e, {
                            resize: {
                                resizeHandler() {
                                    e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                                },
                                orientationChangeHandler() {
                                    e && !e.destroyed && e.initialized && e.emit("orientationchange")
                                }
                            }
                        })
                    },
                    on: {
                        init() {
                            c.addEventListener("resize", this.resize.resizeHandler), c.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                        },
                        destroy() {
                            c.removeEventListener("resize", this.resize.resizeHandler), c.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                        }
                    }
                };
            const W = {
                func: c.MutationObserver || c.WebkitMutationObserver,
                attach(e, t = {}) {
                    const n = this,
                        r = new(0, W.func)((e => {
                            if (1 === e.length) return void n.emit("observerUpdate", e[0]);
                            const t = function() {
                                n.emit("observerUpdate", e[0])
                            };
                            c.requestAnimationFrame ? c.requestAnimationFrame(t) : c.setTimeout(t, 0)
                        }));
                    r.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), n.observer.observers.push(r)
                },
                init() {
                    const e = this;
                    if (w.observer && e.params.observer) {
                        if (e.params.observeParents) {
                            const t = e.$el.parents();
                            for (let i = 0; i < t.length; i += 1) e.observer.attach(t[i])
                        }
                        e.observer.attach(e.$el[0], {
                            childList: e.params.observeSlideChildren
                        }), e.observer.attach(e.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy() {
                    this.observer.observers.forEach((e => {
                        e.disconnect()
                    })), this.observer.observers = []
                }
            };
            var U = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        observer: {
                            init: W.init.bind(e),
                            attach: W.attach.bind(e),
                            destroy: W.destroy.bind(e),
                            observers: []
                        }
                    })
                },
                on: {
                    init() {
                        this.observer.init()
                    },
                    destroy() {
                        this.observer.destroy()
                    }
                }
            };
            const K = {
                update(e) {
                    const t = this,
                        {
                            slidesPerView: n,
                            slidesPerGroup: r,
                            centeredSlides: o
                        } = t.params,
                        {
                            addSlidesBefore: l,
                            addSlidesAfter: d
                        } = t.params.virtual,
                        {
                            from: c,
                            to: h,
                            slides: f,
                            slidesGrid: m,
                            renderSlide: v,
                            offset: w
                        } = t.virtual;
                    t.updateActiveIndex();
                    const x = t.activeIndex || 0;
                    let S, C, A;
                    S = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", o ? (C = Math.floor(n / 2) + r + l, A = Math.floor(n / 2) + r + d) : (C = n + (r - 1) + l, A = r + d);
                    const E = Math.max((x || 0) - A, 0),
                        T = Math.min((x || 0) + C, f.length - 1),
                        $ = (t.slidesGrid[E] || 0) - (t.slidesGrid[0] || 0);

                    function k() {
                        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                    }
                    if (y.extend(t.virtual, {
                            from: E,
                            to: T,
                            offset: $,
                            slidesGrid: t.slidesGrid
                        }), c === E && h === T && !e) return t.slidesGrid !== m && $ !== w && t.slides.css(S, `${$}px`), void t.updateProgress();
                    if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                        offset: $,
                        from: E,
                        to: T,
                        slides: function() {
                            const e = [];
                            for (let i = E; i <= T; i += 1) e.push(f[i]);
                            return e
                        }()
                    }), void k();
                    const O = [],
                        P = [];
                    if (e) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
                    else
                        for (let i = c; i <= h; i += 1)(i < E || i > T) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
                    for (let i = 0; i < f.length; i += 1) i >= E && i <= T && (void 0 === h || e ? P.push(i) : (i > h && P.push(i), i < c && O.push(i)));
                    P.forEach((e => {
                        t.$wrapperEl.append(v(f[e], e))
                    })), O.sort(((a, b) => b - a)).forEach((e => {
                        t.$wrapperEl.prepend(v(f[e], e))
                    })), t.$wrapperEl.children(".swiper-slide").css(S, `${$}px`), k()
                },
                renderSlide(e, t) {
                    const n = this,
                        r = n.params.virtual;
                    if (r.cache && n.virtual.cache[t]) return n.virtual.cache[t];
                    const o = r.renderSlide ? f(r.renderSlide.call(n, e, t)) : f(`<div class="${n.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                    return o.attr("data-swiper-slide-index") || o.attr("data-swiper-slide-index", t), r.cache && (n.virtual.cache[t] = o), o
                },
                appendSlide(e) {
                    const t = this;
                    if ("object" == typeof e && "length" in e)
                        for (let i = 0; i < e.length; i += 1) e[i] && t.virtual.slides.push(e[i]);
                    else t.virtual.slides.push(e);
                    t.virtual.update(!0)
                },
                prependSlide(e) {
                    const t = this,
                        n = t.activeIndex;
                    let r = n + 1,
                        o = 1;
                    if (Array.isArray(e)) {
                        for (let i = 0; i < e.length; i += 1) e[i] && t.virtual.slides.unshift(e[i]);
                        r = n + e.length, o = e.length
                    } else t.virtual.slides.unshift(e);
                    if (t.params.virtual.cache) {
                        const e = t.virtual.cache,
                            n = {};
                        Object.keys(e).forEach((t => {
                            const r = e[t],
                                l = r.attr("data-swiper-slide-index");
                            l && r.attr("data-swiper-slide-index", parseInt(l, 10) + 1), n[parseInt(t, 10) + o] = r
                        })), t.virtual.cache = n
                    }
                    t.virtual.update(!0), t.slideTo(r, 0)
                },
                removeSlide(e) {
                    const t = this;
                    if (null == e) return;
                    let n = t.activeIndex;
                    if (Array.isArray(e))
                        for (let i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < n && (n -= 1), n = Math.max(n, 0);
                    else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < n && (n -= 1), n = Math.max(n, 0);
                    t.virtual.update(!0), t.slideTo(n, 0)
                },
                removeAllSlides() {
                    const e = this;
                    e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
                }
            };
            var Q = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        virtual: {
                            update: K.update.bind(e),
                            appendSlide: K.appendSlide.bind(e),
                            prependSlide: K.prependSlide.bind(e),
                            removeSlide: K.removeSlide.bind(e),
                            removeAllSlides: K.removeAllSlides.bind(e),
                            renderSlide: K.renderSlide.bind(e),
                            slides: e.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if (!e.params.virtual.enabled) return;
                        e.classNames.push(`${e.params.containerModifierClass}virtual`);
                        const t = {
                            watchSlidesProgress: !0
                        };
                        y.extend(e.params, t), y.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    },
                    setTranslate() {
                        this.params.virtual.enabled && this.virtual.update()
                    }
                }
            };
            const J = {
                handle(e) {
                    const t = this,
                        {
                            rtlTranslate: n
                        } = t;
                    let r = e;
                    r.originalEvent && (r = r.originalEvent);
                    const o = r.keyCode || r.charCode,
                        d = t.params.keyboard.pageUpDown,
                        h = d && 33 === o,
                        f = d && 34 === o,
                        m = 37 === o,
                        v = 39 === o,
                        y = 38 === o,
                        w = 40 === o;
                    if (!t.allowSlideNext && (t.isHorizontal() && v || t.isVertical() && w || f)) return !1;
                    if (!t.allowSlidePrev && (t.isHorizontal() && m || t.isVertical() && y || h)) return !1;
                    if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                        if (t.params.keyboard.onlyInViewport && (h || f || m || v || y || w)) {
                            let e = !1;
                            if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                            const r = c.innerWidth,
                                o = c.innerHeight,
                                l = t.$el.offset();
                            n && (l.left -= t.$el[0].scrollLeft);
                            const d = [
                                [l.left, l.top],
                                [l.left + t.width, l.top],
                                [l.left, l.top + t.height],
                                [l.left + t.width, l.top + t.height]
                            ];
                            for (let i = 0; i < d.length; i += 1) {
                                const t = d[i];
                                t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= o && (e = !0)
                            }
                            if (!e) return
                        }
                        t.isHorizontal() ? ((h || f || m || v) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), ((f || v) && !n || (h || m) && n) && t.slideNext(), ((h || m) && !n || (f || v) && n) && t.slidePrev()) : ((h || f || y || w) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (f || w) && t.slideNext(), (h || y) && t.slidePrev()), t.emit("keyPress", o)
                    }
                },
                enable() {
                    const e = this;
                    e.keyboard.enabled || (f(l).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0)
                },
                disable() {
                    const e = this;
                    e.keyboard.enabled && (f(l).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1)
                }
            };
            var Z = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0,
                        pageUpDown: !0
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        keyboard: {
                            enabled: !1,
                            enable: J.enable.bind(e),
                            disable: J.disable.bind(e),
                            handle: J.handle.bind(e)
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.keyboard.enabled && e.keyboard.enable()
                    },
                    destroy() {
                        const e = this;
                        e.keyboard.enabled && e.keyboard.disable()
                    }
                }
            };
            const ee = {
                lastScrollTime: y.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                event: () => c.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    const e = "onwheel";
                    let t = e in l;
                    if (!t) {
                        const element = l.createElement("div");
                        element.setAttribute(e, "return;"), t = "function" == typeof element.onwheel
                    }
                    return !t && l.implementation && l.implementation.hasFeature && !0 !== l.implementation.hasFeature("", "") && (t = l.implementation.hasFeature("Events.wheel", "3.0")), t
                }() ? "wheel" : "mousewheel",
                normalize(e) {
                    let t = 0,
                        n = 0,
                        r = 0,
                        o = 0;
                    return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = 10 * t, o = 10 * n, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (r = e.deltaX), e.shiftKey && !r && (r = o, o = 0), (r || o) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, o *= 40) : (r *= 800, o *= 800)), r && !t && (t = r < 1 ? -1 : 1), o && !n && (n = o < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: n,
                        pixelX: r,
                        pixelY: o
                    }
                },
                handleMouseEnter() {
                    this.mouseEntered = !0
                },
                handleMouseLeave() {
                    this.mouseEntered = !1
                },
                handle(e) {
                    let t = e;
                    const n = this,
                        r = n.params.mousewheel;
                    n.params.cssMode && t.preventDefault();
                    let o = n.$el;
                    if ("container" !== n.params.mousewheel.eventsTarged && (o = f(n.params.mousewheel.eventsTarged)), !n.mouseEntered && !o[0].contains(t.target) && !r.releaseOnEdges) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    let l = 0;
                    const d = n.rtlTranslate ? -1 : 1,
                        data = ee.normalize(t);
                    if (r.forceToAxis)
                        if (n.isHorizontal()) {
                            if (!(Math.abs(data.pixelX) > Math.abs(data.pixelY))) return !0;
                            l = -data.pixelX * d
                        } else {
                            if (!(Math.abs(data.pixelY) > Math.abs(data.pixelX))) return !0;
                            l = -data.pixelY
                        }
                    else l = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * d : -data.pixelY;
                    if (0 === l) return !0;
                    if (r.invert && (l = -l), n.params.freeMode) {
                        const e = {
                                time: y.now(),
                                delta: Math.abs(l),
                                direction: Math.sign(l)
                            },
                            {
                                lastEventBeforeSnap: o
                            } = n.mousewheel,
                            d = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                        if (!d) {
                            n.mousewheel.lastEventBeforeSnap = void 0, n.params.loop && n.loopFix();
                            let o = n.getTranslate() + l * r.sensitivity;
                            const c = n.isBeginning,
                                h = n.isEnd;
                            if (o >= n.minTranslate() && (o = n.minTranslate()), o <= n.maxTranslate() && (o = n.maxTranslate()), n.setTransition(0), n.setTranslate(o), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!c && n.isBeginning || !h && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky) {
                                clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = void 0;
                                const t = n.mousewheel.recentWheelEvents;
                                t.length >= 15 && t.shift();
                                const r = t.length ? t[t.length - 1] : void 0,
                                    o = t[0];
                                if (t.push(e), r && (e.delta > r.delta || e.direction !== r.direction)) t.splice(0);
                                else if (t.length >= 15 && e.time - o.time < 500 && o.delta - e.delta >= 1 && e.delta <= 6) {
                                    const r = l > 0 ? .8 : .2;
                                    n.mousewheel.lastEventBeforeSnap = e, t.splice(0), n.mousewheel.timeout = y.nextTick((() => {
                                        n.slideToClosest(n.params.speed, !0, void 0, r)
                                    }), 0)
                                }
                                n.mousewheel.timeout || (n.mousewheel.timeout = y.nextTick((() => {
                                    n.mousewheel.lastEventBeforeSnap = e, t.splice(0), n.slideToClosest(n.params.speed, !0, void 0, .5)
                                }), 500))
                            }
                            if (d || n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), o === n.minTranslate() || o === n.maxTranslate()) return !0
                        }
                    } else {
                        const t = {
                                time: y.now(),
                                delta: Math.abs(l),
                                direction: Math.sign(l),
                                raw: e
                            },
                            r = n.mousewheel.recentWheelEvents;
                        r.length >= 2 && r.shift();
                        const o = r.length ? r[r.length - 1] : void 0;
                        if (r.push(t), o ? (t.direction !== o.direction || t.delta > o.delta || t.time > o.time + 150) && n.mousewheel.animateSlider(t) : n.mousewheel.animateSlider(t), n.mousewheel.releaseScroll(t)) return !0
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                },
                animateSlider(e) {
                    const t = this;
                    return e.delta >= 6 && y.now() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = (new c.Date).getTime(), !1)
                },
                releaseScroll(e) {
                    const t = this,
                        n = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0
                    } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges) return !0;
                    return !1
                },
                enable() {
                    const e = this,
                        t = ee.event();
                    if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
                    if (!t) return !1;
                    if (e.mousewheel.enabled) return !1;
                    let n = e.$el;
                    return "container" !== e.params.mousewheel.eventsTarged && (n = f(e.params.mousewheel.eventsTarged)), n.on("mouseenter", e.mousewheel.handleMouseEnter), n.on("mouseleave", e.mousewheel.handleMouseLeave), n.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
                },
                disable() {
                    const e = this,
                        t = ee.event();
                    if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
                    if (!t) return !1;
                    if (!e.mousewheel.enabled) return !1;
                    let n = e.$el;
                    return "container" !== e.params.mousewheel.eventsTarged && (n = f(e.params.mousewheel.eventsTarged)), n.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
                }
            };
            const te = {
                update() {
                    const e = this,
                        t = e.params.navigation;
                    if (e.params.loop) return;
                    const {
                        $nextEl: n,
                        $prevEl: r
                    } = e.navigation;
                    r && r.length > 0 && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), n && n.length > 0 && (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                },
                onPrevClick(e) {
                    const t = this;
                    e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
                },
                onNextClick(e) {
                    const t = this;
                    e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
                },
                init() {
                    const e = this,
                        t = e.params.navigation;
                    if (!t.nextEl && !t.prevEl) return;
                    let n, r;
                    t.nextEl && (n = f(t.nextEl), e.params.uniqueNavElements && "string" == typeof t.nextEl && n.length > 1 && 1 === e.$el.find(t.nextEl).length && (n = e.$el.find(t.nextEl))), t.prevEl && (r = f(t.prevEl), e.params.uniqueNavElements && "string" == typeof t.prevEl && r.length > 1 && 1 === e.$el.find(t.prevEl).length && (r = e.$el.find(t.prevEl))), n && n.length > 0 && n.on("click", e.navigation.onNextClick), r && r.length > 0 && r.on("click", e.navigation.onPrevClick), y.extend(e.navigation, {
                        $nextEl: n,
                        nextEl: n && n[0],
                        $prevEl: r,
                        prevEl: r && r[0]
                    })
                },
                destroy() {
                    const e = this,
                        {
                            $nextEl: t,
                            $prevEl: n
                        } = e.navigation;
                    t && t.length && (t.off("click", e.navigation.onNextClick), t.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", e.navigation.onPrevClick), n.removeClass(e.params.navigation.disabledClass))
                }
            };
            const ne = {
                update() {
                    const e = this,
                        t = e.rtl,
                        n = e.params.pagination;
                    if (!n.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                    const r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        o = e.pagination.$el;
                    let l;
                    const d = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? (l = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), l > r - 1 - 2 * e.loopedSlides && (l -= r - 2 * e.loopedSlides), l > d - 1 && (l -= d), l < 0 && "bullets" !== e.params.paginationType && (l = d + l)) : l = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        const r = e.pagination.bullets;
                        let d, c, h;
                        if (n.dynamicBullets && (e.pagination.bulletSize = r.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), o.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += l - e.previousIndex, e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), d = l - e.pagination.dynamicBulletIndex, c = d + (Math.min(r.length, n.dynamicMainBullets) - 1), h = (c + d) / 2), r.removeClass(`${n.bulletActiveClass} ${n.bulletActiveClass}-next ${n.bulletActiveClass}-next-next ${n.bulletActiveClass}-prev ${n.bulletActiveClass}-prev-prev ${n.bulletActiveClass}-main`), o.length > 1) r.each(((e, t) => {
                            const r = f(t),
                                o = r.index();
                            o === l && r.addClass(n.bulletActiveClass), n.dynamicBullets && (o >= d && o <= c && r.addClass(`${n.bulletActiveClass}-main`), o === d && r.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`), o === c && r.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`))
                        }));
                        else {
                            const t = r.eq(l),
                                o = t.index();
                            if (t.addClass(n.bulletActiveClass), n.dynamicBullets) {
                                const t = r.eq(d),
                                    l = r.eq(c);
                                for (let i = d; i <= c; i += 1) r.eq(i).addClass(`${n.bulletActiveClass}-main`);
                                if (e.params.loop)
                                    if (o >= r.length - n.dynamicMainBullets) {
                                        for (let i = n.dynamicMainBullets; i >= 0; i -= 1) r.eq(r.length - i).addClass(`${n.bulletActiveClass}-main`);
                                        r.eq(r.length - n.dynamicMainBullets - 1).addClass(`${n.bulletActiveClass}-prev`)
                                    } else t.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`), l.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`);
                                else t.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`), l.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`)
                            }
                        }
                        if (n.dynamicBullets) {
                            const o = Math.min(r.length, n.dynamicMainBullets + 4),
                                l = (e.pagination.bulletSize * o - e.pagination.bulletSize) / 2 - h * e.pagination.bulletSize,
                                d = t ? "right" : "left";
                            r.css(e.isHorizontal() ? d : "top", `${l}px`)
                        }
                    }
                    if ("fraction" === n.type && (o.find(`.${n.currentClass}`).text(n.formatFractionCurrent(l + 1)), o.find(`.${n.totalClass}`).text(n.formatFractionTotal(d))), "progressbar" === n.type) {
                        let t;
                        t = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        const r = (l + 1) / d;
                        let c = 1,
                            h = 1;
                        "horizontal" === t ? c = r : h = r, o.find(`.${n.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${c}) scaleY(${h})`).transition(e.params.speed)
                    }
                    "custom" === n.type && n.renderCustom ? (o.html(n.renderCustom(e, l + 1, d)), e.emit("paginationRender", e, o[0])) : e.emit("paginationUpdate", e, o[0]), o[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](n.lockClass)
                },
                render() {
                    const e = this,
                        t = e.params.pagination;
                    if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                    const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        r = e.pagination.$el;
                    let o = "";
                    if ("bullets" === t.type) {
                        const l = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        for (let i = 0; i < l; i += 1) t.renderBullet ? o += t.renderBullet.call(e, i, t.bulletClass) : o += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                        r.html(o), e.pagination.bullets = r.find(`.${t.bulletClass}`)
                    }
                    "fraction" === t.type && (o = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, r.html(o)), "progressbar" === t.type && (o = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, r.html(o)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                },
                init() {
                    const e = this,
                        t = e.params.pagination;
                    if (!t.el) return;
                    let n = f(t.el);
                    0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el)), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (n.addClass(`${t.modifierClass}${t.type}-dynamic`), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", `.${t.bulletClass}`, (function(t) {
                        t.preventDefault();
                        let n = f(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (n += e.loopedSlides), e.slideTo(n)
                    })), y.extend(e.pagination, {
                        $el: n,
                        el: n[0]
                    }))
                },
                destroy() {
                    const e = this,
                        t = e.params.pagination;
                    if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                    const n = e.pagination.$el;
                    n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", `.${t.bulletClass}`)
                }
            };
            const ie = {
                setTranslate() {
                    const e = this;
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    const {
                        scrollbar: t,
                        rtlTranslate: n,
                        progress: progress
                    } = e, {
                        dragSize: r,
                        trackSize: o,
                        $dragEl: l,
                        $el: d
                    } = t, c = e.params.scrollbar;
                    let h = r,
                        f = (o - r) * progress;
                    n ? (f = -f, f > 0 ? (h = r - f, f = 0) : -f + r > o && (h = o + f)) : f < 0 ? (h = r + f, f = 0) : f + r > o && (h = o - f), e.isHorizontal() ? (l.transform(`translate3d(${f}px, 0, 0)`), l[0].style.width = `${h}px`) : (l.transform(`translate3d(0px, ${f}px, 0)`), l[0].style.height = `${h}px`), c.hide && (clearTimeout(e.scrollbar.timeout), d[0].style.opacity = 1, e.scrollbar.timeout = setTimeout((() => {
                        d[0].style.opacity = 0, d.transition(400)
                    }), 1e3))
                },
                setTransition(e) {
                    const t = this;
                    t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
                },
                updateSize() {
                    const e = this;
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    const {
                        scrollbar: t
                    } = e, {
                        $dragEl: n,
                        $el: r
                    } = t;
                    n[0].style.width = "", n[0].style.height = "";
                    const o = e.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight,
                        l = e.size / e.virtualSize,
                        d = l * (o / e.size);
                    let c;
                    c = "auto" === e.params.scrollbar.dragSize ? o * l : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = `${c}px` : n[0].style.height = `${c}px`, r[0].style.display = l >= 1 ? "none" : "", e.params.scrollbar.hide && (r[0].style.opacity = 0), y.extend(t, {
                        trackSize: o,
                        divider: l,
                        moveDivider: d,
                        dragSize: c
                    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                },
                getPointerPosition(e) {
                    return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
                },
                setDragPosition(e) {
                    const t = this,
                        {
                            scrollbar: n,
                            rtlTranslate: r
                        } = t,
                        {
                            $el: o,
                            dragSize: l,
                            trackSize: d,
                            dragStartPos: c
                        } = n;
                    let h;
                    h = (n.getPointerPosition(e) - o.offset()[t.isHorizontal() ? "left" : "top"] - (null !== c ? c : l / 2)) / (d - l), h = Math.max(Math.min(h, 1), 0), r && (h = 1 - h);
                    const f = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * h;
                    t.updateProgress(f), t.setTranslate(f), t.updateActiveIndex(), t.updateSlidesClasses()
                },
                onDragStart(e) {
                    const t = this,
                        n = t.params.scrollbar,
                        {
                            scrollbar: r,
                            $wrapperEl: o
                        } = t,
                        {
                            $el: l,
                            $dragEl: d
                        } = r;
                    t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === d[0] || e.target === d ? r.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), o.transition(100), d.transition(100), r.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), l.transition(0), n.hide && l.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e)
                },
                onDragMove(e) {
                    const t = this,
                        {
                            scrollbar: n,
                            $wrapperEl: r
                        } = t,
                        {
                            $el: o,
                            $dragEl: l
                        } = n;
                    t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, n.setDragPosition(e), r.transition(0), o.transition(0), l.transition(0), t.emit("scrollbarDragMove", e))
                },
                onDragEnd(e) {
                    const t = this,
                        n = t.params.scrollbar,
                        {
                            scrollbar: r,
                            $wrapperEl: o
                        } = t,
                        {
                            $el: l
                        } = r;
                    t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), o.transition("")), n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = y.nextTick((() => {
                        l.css("opacity", 0), l.transition(400)
                    }), 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
                },
                enableDraggable() {
                    const e = this;
                    if (!e.params.scrollbar.el) return;
                    const {
                        scrollbar: t,
                        touchEventsTouch: n,
                        touchEventsDesktop: r,
                        params: o
                    } = e, d = t.$el[0], c = !(!w.passiveListener || !o.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    }, h = !(!w.passiveListener || !o.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    w.touch ? (d.addEventListener(n.start, e.scrollbar.onDragStart, c), d.addEventListener(n.move, e.scrollbar.onDragMove, c), d.addEventListener(n.end, e.scrollbar.onDragEnd, h)) : (d.addEventListener(r.start, e.scrollbar.onDragStart, c), l.addEventListener(r.move, e.scrollbar.onDragMove, c), l.addEventListener(r.end, e.scrollbar.onDragEnd, h))
                },
                disableDraggable() {
                    const e = this;
                    if (!e.params.scrollbar.el) return;
                    const {
                        scrollbar: t,
                        touchEventsTouch: n,
                        touchEventsDesktop: r,
                        params: o
                    } = e, d = t.$el[0], c = !(!w.passiveListener || !o.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    }, h = !(!w.passiveListener || !o.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    w.touch ? (d.removeEventListener(n.start, e.scrollbar.onDragStart, c), d.removeEventListener(n.move, e.scrollbar.onDragMove, c), d.removeEventListener(n.end, e.scrollbar.onDragEnd, h)) : (d.removeEventListener(r.start, e.scrollbar.onDragStart, c), l.removeEventListener(r.move, e.scrollbar.onDragMove, c), l.removeEventListener(r.end, e.scrollbar.onDragEnd, h))
                },
                init() {
                    const e = this;
                    if (!e.params.scrollbar.el) return;
                    const {
                        scrollbar: t,
                        $el: n
                    } = e, r = e.params.scrollbar;
                    let o = f(r.el);
                    e.params.uniqueNavElements && "string" == typeof r.el && o.length > 1 && 1 === n.find(r.el).length && (o = n.find(r.el));
                    let l = o.find(`.${e.params.scrollbar.dragClass}`);
                    0 === l.length && (l = f(`<div class="${e.params.scrollbar.dragClass}"></div>`), o.append(l)), y.extend(t, {
                        $el: o,
                        el: o[0],
                        $dragEl: l,
                        dragEl: l[0]
                    }), r.draggable && t.enableDraggable()
                },
                destroy() {
                    this.scrollbar.disableDraggable()
                }
            };
            const se = {
                setTransform(e, progress) {
                    const {
                        rtl: t
                    } = this, n = f(e), r = t ? -1 : 1, p = n.attr("data-swiper-parallax") || "0";
                    let o = n.attr("data-swiper-parallax-x"),
                        l = n.attr("data-swiper-parallax-y");
                    const d = n.attr("data-swiper-parallax-scale"),
                        c = n.attr("data-swiper-parallax-opacity");
                    if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = p, l = "0") : (l = p, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * progress * r + "%" : o * progress * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * progress + "%" : l * progress + "px", null != c) {
                        const e = c - (c - 1) * (1 - Math.abs(progress));
                        n[0].style.opacity = e
                    }
                    if (null == d) n.transform(`translate3d(${o}, ${l}, 0px)`);
                    else {
                        const e = d - (d - 1) * (1 - Math.abs(progress));
                        n.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`)
                    }
                },
                setTranslate() {
                    const e = this,
                        {
                            $el: t,
                            slides: n,
                            progress: progress,
                            snapGrid: r
                        } = e;
                    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t, n) => {
                        e.parallax.setTransform(n, progress)
                    })), n.each(((t, n) => {
                        let o = n.progress;
                        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (o += Math.ceil(t / 2) - progress * (r.length - 1)), o = Math.min(Math.max(o, -1), 1), f(n).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t, n) => {
                            e.parallax.setTransform(n, o)
                        }))
                    }))
                },
                setTransition(e = this.params.speed) {
                    const {
                        $el: t
                    } = this;
                    t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t, n) => {
                        const r = f(n);
                        let o = parseInt(r.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (o = 0), r.transition(o)
                    }))
                }
            };
            const ae = {
                getDistanceBetweenTouches(e) {
                    if (e.targetTouches.length < 2) return 1;
                    const t = e.targetTouches[0].pageX,
                        n = e.targetTouches[0].pageY,
                        r = e.targetTouches[1].pageX,
                        o = e.targetTouches[1].pageY;
                    return Math.sqrt((r - t) ** 2 + (o - n) ** 2)
                },
                onGestureStart(e) {
                    const t = this,
                        n = t.params.zoom,
                        r = t.zoom,
                        {
                            gesture: o
                        } = r;
                    if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !w.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        r.fakeGestureTouched = !0, o.scaleStart = ae.getDistanceBetweenTouches(e)
                    }
                    o.$slideEl && o.$slideEl.length || (o.$slideEl = f(e.target).closest(`.${t.params.slideClass}`), 0 === o.$slideEl.length && (o.$slideEl = t.slides.eq(t.activeIndex)), o.$imageEl = o.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), o.$imageWrapEl = o.$imageEl.parent(`.${n.containerClass}`), o.maxRatio = o.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== o.$imageWrapEl.length) ? (o.$imageEl && o.$imageEl.transition(0), t.zoom.isScaling = !0) : o.$imageEl = void 0
                },
                onGestureChange(e) {
                    const t = this.params.zoom,
                        n = this.zoom,
                        {
                            gesture: r
                        } = n;
                    if (!w.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        n.fakeGestureMoved = !0, r.scaleMove = ae.getDistanceBetweenTouches(e)
                    }
                    r.$imageEl && 0 !== r.$imageEl.length && (n.scale = w.gestures ? e.scale * n.currentScale : r.scaleMove / r.scaleStart * n.currentScale, n.scale > r.maxRatio && (n.scale = r.maxRatio - 1 + (n.scale - r.maxRatio + 1) ** .5), n.scale < t.minRatio && (n.scale = t.minRatio + 1 - (t.minRatio - n.scale + 1) ** .5), r.$imageEl.transform(`translate3d(0,0,0) scale(${n.scale})`))
                },
                onGestureEnd(e) {
                    const t = this,
                        n = t.params.zoom,
                        r = t.zoom,
                        {
                            gesture: o
                        } = r;
                    if (!w.gestures) {
                        if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !O.android) return;
                        r.fakeGestureTouched = !1, r.fakeGestureMoved = !1
                    }
                    o.$imageEl && 0 !== o.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, o.maxRatio), n.minRatio), o.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (o.$slideEl = void 0))
                },
                onTouchStart(e) {
                    const t = this.zoom,
                        {
                            gesture: n,
                            image: image
                        } = t;
                    n.$imageEl && 0 !== n.$imageEl.length && (image.isTouched || (O.android && e.cancelable && e.preventDefault(), image.isTouched = !0, image.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, image.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove(e) {
                    const t = this,
                        n = t.zoom,
                        {
                            gesture: r,
                            image: image,
                            velocity: o
                        } = n;
                    if (!r.$imageEl || 0 === r.$imageEl.length) return;
                    if (t.allowClick = !1, !image.isTouched || !r.$slideEl) return;
                    image.isMoved || (image.width = r.$imageEl[0].offsetWidth, image.height = r.$imageEl[0].offsetHeight, image.startX = y.getTranslate(r.$imageWrapEl[0], "x") || 0, image.startY = y.getTranslate(r.$imageWrapEl[0], "y") || 0, r.slideWidth = r.$slideEl[0].offsetWidth, r.slideHeight = r.$slideEl[0].offsetHeight, r.$imageWrapEl.transition(0), t.rtl && (image.startX = -image.startX, image.startY = -image.startY));
                    const l = image.width * n.scale,
                        d = image.height * n.scale;
                    if (!(l < r.slideWidth && d < r.slideHeight)) {
                        if (image.minX = Math.min(r.slideWidth / 2 - l / 2, 0), image.maxX = -image.minX, image.minY = Math.min(r.slideHeight / 2 - d / 2, 0), image.maxY = -image.minY, image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !image.isMoved && !n.isScaling) {
                            if (t.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) return void(image.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) return void(image.isTouched = !1)
                        }
                        e.cancelable && e.preventDefault(), e.stopPropagation(), image.isMoved = !0, image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX, image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY, image.currentX < image.minX && (image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** .8), image.currentX > image.maxX && (image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** .8), image.currentY < image.minY && (image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** .8), image.currentY > image.maxY && (image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** .8), o.prevPositionX || (o.prevPositionX = image.touchesCurrent.x), o.prevPositionY || (o.prevPositionY = image.touchesCurrent.y), o.prevTime || (o.prevTime = Date.now()), o.x = (image.touchesCurrent.x - o.prevPositionX) / (Date.now() - o.prevTime) / 2, o.y = (image.touchesCurrent.y - o.prevPositionY) / (Date.now() - o.prevTime) / 2, Math.abs(image.touchesCurrent.x - o.prevPositionX) < 2 && (o.x = 0), Math.abs(image.touchesCurrent.y - o.prevPositionY) < 2 && (o.y = 0), o.prevPositionX = image.touchesCurrent.x, o.prevPositionY = image.touchesCurrent.y, o.prevTime = Date.now(), r.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`)
                    }
                },
                onTouchEnd() {
                    const e = this.zoom,
                        {
                            gesture: t,
                            image: image,
                            velocity: n
                        } = e;
                    if (!t.$imageEl || 0 === t.$imageEl.length) return;
                    if (!image.isTouched || !image.isMoved) return image.isTouched = !1, void(image.isMoved = !1);
                    image.isTouched = !1, image.isMoved = !1;
                    let r = 300,
                        o = 300;
                    const l = n.x * r,
                        d = image.currentX + l,
                        c = n.y * o,
                        h = image.currentY + c;
                    0 !== n.x && (r = Math.abs((d - image.currentX) / n.x)), 0 !== n.y && (o = Math.abs((h - image.currentY) / n.y));
                    const f = Math.max(r, o);
                    image.currentX = d, image.currentY = h;
                    const m = image.width * e.scale,
                        v = image.height * e.scale;
                    image.minX = Math.min(t.slideWidth / 2 - m / 2, 0), image.maxX = -image.minX, image.minY = Math.min(t.slideHeight / 2 - v / 2, 0), image.maxY = -image.minY, image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX), image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY), t.$imageWrapEl.transition(f).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`)
                },
                onTransitionEnd() {
                    const e = this,
                        t = e.zoom,
                        {
                            gesture: n
                        } = t;
                    n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl && n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl && n.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0)
                },
                toggle(e) {
                    const t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e)
                },
                in (e) {
                    const t = this,
                        n = t.zoom,
                        r = t.params.zoom,
                        {
                            gesture: o,
                            image: image
                        } = n;
                    if (o.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? o.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : o.$slideEl = t.slides.eq(t.activeIndex), o.$imageEl = o.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), o.$imageWrapEl = o.$imageEl.parent(`.${r.containerClass}`)), !o.$imageEl || 0 === o.$imageEl.length) return;
                    let l, d, c, h, f, m, v, y, w, x, S, C, A, E, T, $, k, O;
                    o.$slideEl.addClass(`${r.zoomedSlideClass}`), void 0 === image.touchesStart.x && e ? (l = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, d = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (l = image.touchesStart.x, d = image.touchesStart.y), n.scale = o.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, n.currentScale = o.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, e ? (k = o.$slideEl[0].offsetWidth, O = o.$slideEl[0].offsetHeight, c = o.$slideEl.offset().left, h = o.$slideEl.offset().top, f = c + k / 2 - l, m = h + O / 2 - d, w = o.$imageEl[0].offsetWidth, x = o.$imageEl[0].offsetHeight, S = w * n.scale, C = x * n.scale, A = Math.min(k / 2 - S / 2, 0), E = Math.min(O / 2 - C / 2, 0), T = -A, $ = -E, v = f * n.scale, y = m * n.scale, v < A && (v = A), v > T && (v = T), y < E && (y = E), y > $ && (y = $)) : (v = 0, y = 0), o.$imageWrapEl.transition(300).transform(`translate3d(${v}px, ${y}px,0)`), o.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${n.scale})`)
                },
                out() {
                    const e = this,
                        t = e.zoom,
                        n = e.params.zoom,
                        {
                            gesture: r
                        } = t;
                    r.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? r.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : r.$slideEl = e.slides.eq(e.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent(`.${n.containerClass}`)), r.$imageEl && 0 !== r.$imageEl.length && (t.scale = 1, t.currentScale = 1, r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), r.$slideEl.removeClass(`${n.zoomedSlideClass}`), r.$slideEl = void 0)
                },
                enable() {
                    const e = this,
                        t = e.zoom;
                    if (t.enabled) return;
                    t.enabled = !0;
                    const n = !("touchstart" !== e.touchEvents.start || !w.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        r = !w.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        o = `.${e.params.slideClass}`;
                    w.gestures ? (e.$wrapperEl.on("gesturestart", o, t.onGestureStart, n), e.$wrapperEl.on("gesturechange", o, t.onGestureChange, n), e.$wrapperEl.on("gestureend", o, t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, o, t.onGestureStart, n), e.$wrapperEl.on(e.touchEvents.move, o, t.onGestureChange, r), e.$wrapperEl.on(e.touchEvents.end, o, t.onGestureEnd, n), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, o, t.onGestureEnd, n)), e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, r)
                },
                disable() {
                    const e = this,
                        t = e.zoom;
                    if (!t.enabled) return;
                    e.zoom.enabled = !1;
                    const n = !("touchstart" !== e.touchEvents.start || !w.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        r = !w.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        o = `.${e.params.slideClass}`;
                    w.gestures ? (e.$wrapperEl.off("gesturestart", o, t.onGestureStart, n), e.$wrapperEl.off("gesturechange", o, t.onGestureChange, n), e.$wrapperEl.off("gestureend", o, t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, o, t.onGestureStart, n), e.$wrapperEl.off(e.touchEvents.move, o, t.onGestureChange, r), e.$wrapperEl.off(e.touchEvents.end, o, t.onGestureEnd, n), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, o, t.onGestureEnd, n)), e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, r)
                }
            };
            const re = {
                loadInSlide(e, t = !0) {
                    const n = this,
                        r = n.params.lazy;
                    if (void 0 === e) return;
                    if (0 === n.slides.length) return;
                    const o = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children(`.${n.params.slideClass}[data-swiper-slide-index="${e}"]`) : n.slides.eq(e);
                    let l = o.find(`.${r.elementClass}:not(.${r.loadedClass}):not(.${r.loadingClass})`);
                    !o.hasClass(r.elementClass) || o.hasClass(r.loadedClass) || o.hasClass(r.loadingClass) || (l = l.add(o[0])), 0 !== l.length && l.each(((e, l) => {
                        const d = f(l);
                        d.addClass(r.loadingClass);
                        const c = d.attr("data-background"),
                            h = d.attr("data-src"),
                            m = d.attr("data-srcset"),
                            v = d.attr("data-sizes"),
                            y = d.parent("picture");
                        n.loadImage(d[0], h || c, m, v, !1, (() => {
                            if (null != n && n && (!n || n.params) && !n.destroyed) {
                                if (c ? (d.css("background-image", `url("${c}")`), d.removeAttr("data-background")) : (m && (d.attr("srcset", m), d.removeAttr("data-srcset")), v && (d.attr("sizes", v), d.removeAttr("data-sizes")), y.length && y.children("source").each(((e, t) => {
                                        const n = f(t);
                                        n.attr("data-srcset") && (n.attr("srcset", n.attr("data-srcset")), n.removeAttr("data-srcset"))
                                    })), h && (d.attr("src", h), d.removeAttr("data-src"))), d.addClass(r.loadedClass).removeClass(r.loadingClass), o.find(`.${r.preloaderClass}`).remove(), n.params.loop && t) {
                                    const e = o.attr("data-swiper-slide-index");
                                    if (o.hasClass(n.params.slideDuplicateClass)) {
                                        const t = n.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${n.params.slideDuplicateClass})`);
                                        n.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        const t = n.$wrapperEl.children(`.${n.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                        n.lazy.loadInSlide(t.index(), !1)
                                    }
                                }
                                n.emit("lazyImageReady", o[0], d[0]), n.params.autoHeight && n.updateAutoHeight()
                            }
                        })), n.emit("lazyImageLoad", o[0], d[0])
                    }))
                },
                load() {
                    const e = this,
                        {
                            $wrapperEl: t,
                            params: n,
                            slides: r,
                            activeIndex: o
                        } = e,
                        l = e.virtual && n.virtual.enabled,
                        d = n.lazy;
                    let c = n.slidesPerView;

                    function h(e) {
                        if (l) {
                            if (t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0
                        } else if (r[e]) return !0;
                        return !1
                    }

                    function m(e) {
                        return l ? f(e).attr("data-swiper-slide-index") : f(e).index()
                    }
                    if ("auto" === c && (c = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children(`.${n.slideVisibleClass}`).each(((t, n) => {
                        const r = l ? f(n).attr("data-swiper-slide-index") : f(n).index();
                        e.lazy.loadInSlide(r)
                    }));
                    else if (c > 1)
                        for (let i = o; i < o + c; i += 1) h(i) && e.lazy.loadInSlide(i);
                    else e.lazy.loadInSlide(o);
                    if (d.loadPrevNext)
                        if (c > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
                            const t = d.loadPrevNextAmount,
                                n = c,
                                l = Math.min(o + n + Math.max(t, n), r.length),
                                f = Math.max(o - Math.max(n, t), 0);
                            for (let i = o + c; i < l; i += 1) h(i) && e.lazy.loadInSlide(i);
                            for (let i = f; i < o; i += 1) h(i) && e.lazy.loadInSlide(i)
                        } else {
                            const r = t.children(`.${n.slideNextClass}`);
                            r.length > 0 && e.lazy.loadInSlide(m(r));
                            const o = t.children(`.${n.slidePrevClass}`);
                            o.length > 0 && e.lazy.loadInSlide(m(o))
                        }
                }
            };
            const oe = {
                LinearSpline: function(e, t) {
                    const n = function() {
                        let e, t, n;
                        return (r, o) => {
                            for (t = -1, e = r.length; e - t > 1;) n = e + t >> 1, r[n] <= o ? t = n : e = n;
                            return e
                        }
                    }();
                    let r, o;
                    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                        return e ? (o = n(this.x, e), r = o - 1, (e - this.x[r]) * (this.y[o] - this.y[r]) / (this.x[o] - this.x[r]) + this.y[r]) : 0
                    }, this
                },
                getInterpolateFunction(e) {
                    const t = this;
                    t.controller.spline || (t.controller.spline = t.params.loop ? new oe.LinearSpline(t.slidesGrid, e.slidesGrid) : new oe.LinearSpline(t.snapGrid, e.snapGrid))
                },
                setTranslate(e, t) {
                    const n = this,
                        r = n.controller.control;
                    let o, l;

                    function d(e) {
                        const t = n.rtlTranslate ? -n.translate : n.translate;
                        "slide" === n.params.controller.by && (n.controller.getInterpolateFunction(e), l = -n.controller.spline.interpolate(-t)), l && "container" !== n.params.controller.by || (o = (e.maxTranslate() - e.minTranslate()) / (n.maxTranslate() - n.minTranslate()), l = (t - n.minTranslate()) * o + e.minTranslate()), n.params.controller.inverse && (l = e.maxTranslate() - l), e.updateProgress(l), e.setTranslate(l, n), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    if (Array.isArray(r))
                        for (let i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof N && d(r[i]);
                    else r instanceof N && t !== r && d(r)
                },
                setTransition(e, t) {
                    const n = this,
                        r = n.controller.control;
                    let i;

                    function o(t) {
                        t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.params.autoHeight && y.nextTick((() => {
                            t.updateAutoHeight()
                        })), t.$wrapperEl.transitionEnd((() => {
                            r && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
                        })))
                    }
                    if (Array.isArray(r))
                        for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof N && o(r[i]);
                    else r instanceof N && t !== r && o(r)
                }
            };
            const le = {
                makeElFocusable: e => (e.attr("tabIndex", "0"), e),
                makeElNotFocusable: e => (e.attr("tabIndex", "-1"), e),
                addElRole: (e, t) => (e.attr("role", t), e),
                addElLabel: (e, label) => (e.attr("aria-label", label), e),
                disableEl: e => (e.attr("aria-disabled", !0), e),
                enableEl: e => (e.attr("aria-disabled", !1), e),
                onEnterKey(e) {
                    const t = this,
                        n = t.params.a11y;
                    if (13 !== e.keyCode) return;
                    const r = f(e.target);
                    t.navigation && t.navigation.$nextEl && r.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && r.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)), t.pagination && r.is(`.${t.params.pagination.bulletClass}`) && r[0].click()
                },
                notify(e) {
                    const t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                updateNavigation() {
                    const e = this;
                    if (e.params.loop || !e.navigation) return;
                    const {
                        $nextEl: t,
                        $prevEl: n
                    } = e.navigation;
                    n && n.length > 0 && (e.isBeginning ? (e.a11y.disableEl(n), e.a11y.makeElNotFocusable(n)) : (e.a11y.enableEl(n), e.a11y.makeElFocusable(n))), t && t.length > 0 && (e.isEnd ? (e.a11y.disableEl(t), e.a11y.makeElNotFocusable(t)) : (e.a11y.enableEl(t), e.a11y.makeElFocusable(t)))
                },
                updatePagination() {
                    const e = this,
                        t = e.params.a11y;
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(((n, r) => {
                        const o = f(r);
                        e.a11y.makeElFocusable(o), e.a11y.addElRole(o, "button"), e.a11y.addElLabel(o, t.paginationBulletMessage.replace(/\{\{index\}\}/, o.index() + 1))
                    }))
                },
                init() {
                    const e = this;
                    e.$el.append(e.a11y.liveRegion);
                    const t = e.params.a11y;
                    let n, r;
                    e.navigation && e.navigation.$nextEl && (n = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, t.nextSlideMessage), n.on("keydown", e.a11y.onEnterKey)), r && (e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.prevSlideMessage), r.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
                },
                destroy() {
                    const e = this;
                    let t, n;
                    e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), n && n.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
                }
            };
            const de = {
                init() {
                    const e = this;
                    if (!e.params.history) return;
                    if (!c.history || !c.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    const t = e.history;
                    t.initialized = !0, t.paths = de.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || c.addEventListener("popstate", e.history.setHistoryPopState))
                },
                destroy() {
                    const e = this;
                    e.params.history.replaceState || c.removeEventListener("popstate", e.history.setHistoryPopState)
                },
                setHistoryPopState() {
                    const e = this;
                    e.history.paths = de.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
                },
                getPathValues() {
                    const e = c.location.pathname.slice(1).split("/").filter((e => "" !== e)),
                        t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    }
                },
                setHistory(e, t) {
                    const n = this;
                    if (!n.history.initialized || !n.params.history.enabled) return;
                    const r = n.slides.eq(t);
                    let o = de.slugify(r.attr("data-history"));
                    c.location.pathname.includes(e) || (o = `${e}/${o}`);
                    const l = c.history.state;
                    l && l.value === o || (n.params.history.replaceState ? c.history.replaceState({
                        value: o
                    }, null, o) : c.history.pushState({
                        value: o
                    }, null, o))
                },
                slugify: text => text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                scrollToSlide(e, t, n) {
                    const r = this;
                    if (t)
                        for (let i = 0, o = r.slides.length; i < o; i += 1) {
                            const o = r.slides.eq(i);
                            if (de.slugify(o.attr("data-history")) === t && !o.hasClass(r.params.slideDuplicateClass)) {
                                const t = o.index();
                                r.slideTo(t, e, n)
                            }
                        } else r.slideTo(0, e, n)
                }
            };
            const ce = {
                onHashCange() {
                    const e = this;
                    e.emit("hashChange");
                    const t = l.location.hash.replace("#", "");
                    if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                        const n = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                        if (void 0 === n) return;
                        e.slideTo(n)
                    }
                },
                setHash() {
                    const e = this;
                    if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                        if (e.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""), e.emit("hashSet");
                        else {
                            const t = e.slides.eq(e.activeIndex),
                                n = t.attr("data-hash") || t.attr("data-history");
                            l.location.hash = n || "", e.emit("hashSet")
                        }
                },
                init() {
                    const e = this;
                    if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
                    e.hashNavigation.initialized = !0;
                    const t = l.location.hash.replace("#", "");
                    if (t) {
                        const n = 0;
                        for (let i = 0, r = e.slides.length; i < r; i += 1) {
                            const r = e.slides.eq(i);
                            if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(e.params.slideDuplicateClass)) {
                                const t = r.index();
                                e.slideTo(t, n, e.params.runCallbacksOnInit, !0)
                            }
                        }
                    }
                    e.params.hashNavigation.watchState && f(c).on("hashchange", e.hashNavigation.onHashCange)
                },
                destroy() {
                    const e = this;
                    e.params.hashNavigation.watchState && f(c).off("hashchange", e.hashNavigation.onHashCange)
                }
            };
            const ue = {
                run() {
                    const e = this,
                        t = e.slides.eq(e.activeIndex);
                    let n = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = y.nextTick((() => {
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
                    }), n)
                },
                start() {
                    const e = this;
                    return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
                },
                stop() {
                    const e = this;
                    return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
                },
                pause(e) {
                    const t = this;
                    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
                }
            };
            const pe = {
                setTranslate() {
                    const e = this,
                        {
                            slides: t
                        } = e;
                    for (let i = 0; i < t.length; i += 1) {
                        const t = e.slides.eq(i);
                        let n = -t[0].swiperSlideOffset;
                        e.params.virtualTranslate || (n -= e.translate);
                        let r = 0;
                        e.isHorizontal() || (r = n, n = 0);
                        const o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                        t.css({
                            opacity: o
                        }).transform(`translate3d(${n}px, ${r}px, 0px)`)
                    }
                },
                setTransition(e) {
                    const t = this,
                        {
                            slides: n,
                            $wrapperEl: r
                        } = t;
                    if (n.transition(e), t.params.virtualTranslate && 0 !== e) {
                        let e = !1;
                        n.transitionEnd((() => {
                            if (e) return;
                            if (!t || t.destroyed) return;
                            e = !0, t.animating = !1;
                            const n = ["webkitTransitionEnd", "transitionend"];
                            for (let i = 0; i < n.length; i += 1) r.trigger(n[i])
                        }))
                    }
                }
            };
            const he = {
                setTranslate() {
                    const e = this,
                        {
                            $el: t,
                            $wrapperEl: n,
                            slides: r,
                            width: o,
                            height: l,
                            rtlTranslate: d,
                            size: c
                        } = e,
                        h = e.params.cubeEffect,
                        m = e.isHorizontal(),
                        v = e.virtual && e.params.virtual.enabled;
                    let y, w = 0;
                    h.shadow && (m ? (y = n.find(".swiper-cube-shadow"), 0 === y.length && (y = f('<div class="swiper-cube-shadow"></div>'), n.append(y)), y.css({
                        height: `${o}px`
                    })) : (y = t.find(".swiper-cube-shadow"), 0 === y.length && (y = f('<div class="swiper-cube-shadow"></div>'), t.append(y))));
                    for (let i = 0; i < r.length; i += 1) {
                        const e = r.eq(i);
                        let t = i;
                        v && (t = parseInt(e.attr("data-swiper-slide-index"), 10));
                        let n = 90 * t,
                            o = Math.floor(n / 360);
                        d && (n = -n, o = Math.floor(-n / 360));
                        const progress = Math.max(Math.min(e[0].progress, 1), -1);
                        let l = 0,
                            y = 0,
                            x = 0;
                        t % 4 == 0 ? (l = 4 * -o * c, x = 0) : (t - 1) % 4 == 0 ? (l = 0, x = 4 * -o * c) : (t - 2) % 4 == 0 ? (l = c + 4 * o * c, x = c) : (t - 3) % 4 == 0 && (l = -c, x = 3 * c + 4 * c * o), d && (l = -l), m || (y = l, l = 0);
                        const S = `rotateX(${m?0:-n}deg) rotateY(${m?n:0}deg) translate3d(${l}px, ${y}px, ${x}px)`;
                        if (progress <= 1 && progress > -1 && (w = 90 * t + 90 * progress, d && (w = 90 * -t - 90 * progress)), e.transform(S), h.slideShadows) {
                            let t = m ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                n = m ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                            0 === t.length && (t = f(`<div class="swiper-slide-shadow-${m?"left":"top"}"></div>`), e.append(t)), 0 === n.length && (n = f(`<div class="swiper-slide-shadow-${m?"right":"bottom"}"></div>`), e.append(n)), t.length && (t[0].style.opacity = Math.max(-progress, 0)), n.length && (n[0].style.opacity = Math.max(progress, 0))
                        }
                    }
                    if (n.css({
                            "-webkit-transform-origin": `50% 50% -${c/2}px`,
                            "-moz-transform-origin": `50% 50% -${c/2}px`,
                            "-ms-transform-origin": `50% 50% -${c/2}px`,
                            "transform-origin": `50% 50% -${c/2}px`
                        }), h.shadow)
                        if (m) y.transform(`translate3d(0px, ${o/2+h.shadowOffset}px, ${-o/2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`);
                        else {
                            const e = Math.abs(w) - 90 * Math.floor(Math.abs(w) / 90),
                                t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                                n = h.shadowScale,
                                r = h.shadowScale / t,
                                o = h.shadowOffset;
                            y.transform(`scale3d(${n}, 1, ${r}) translate3d(0px, ${l/2+o}px, ${-l/2/r}px) rotateX(-90deg)`)
                        }
                    const x = G.isSafari || G.isWebView ? -c / 2 : 0;
                    n.transform(`translate3d(0px,0,${x}px) rotateX(${e.isHorizontal()?0:w}deg) rotateY(${e.isHorizontal()?-w:0}deg)`)
                },
                setTransition(e) {
                    const t = this,
                        {
                            $el: n,
                            slides: r
                        } = t;
                    r.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
                }
            };
            const fe = {
                setTranslate() {
                    const e = this,
                        {
                            slides: t,
                            rtlTranslate: n
                        } = e;
                    for (let i = 0; i < t.length; i += 1) {
                        const r = t.eq(i);
                        let progress = r[0].progress;
                        e.params.flipEffect.limitRotation && (progress = Math.max(Math.min(r[0].progress, 1), -1));
                        let o = -180 * progress,
                            l = 0,
                            d = -r[0].swiperSlideOffset,
                            c = 0;
                        if (e.isHorizontal() ? n && (o = -o) : (c = d, d = 0, l = -o, o = 0), r[0].style.zIndex = -Math.abs(Math.round(progress)) + t.length, e.params.flipEffect.slideShadows) {
                            let t = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                n = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                            0 === t.length && (t = f(`<div class="swiper-slide-shadow-${e.isHorizontal()?"left":"top"}"></div>`), r.append(t)), 0 === n.length && (n = f(`<div class="swiper-slide-shadow-${e.isHorizontal()?"right":"bottom"}"></div>`), r.append(n)), t.length && (t[0].style.opacity = Math.max(-progress, 0)), n.length && (n[0].style.opacity = Math.max(progress, 0))
                        }
                        r.transform(`translate3d(${d}px, ${c}px, 0px) rotateX(${l}deg) rotateY(${o}deg)`)
                    }
                },
                setTransition(e) {
                    const t = this,
                        {
                            slides: n,
                            activeIndex: r,
                            $wrapperEl: o
                        } = t;
                    if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                        let e = !1;
                        n.eq(r).transitionEnd((function() {
                            if (e) return;
                            if (!t || t.destroyed) return;
                            e = !0, t.animating = !1;
                            const n = ["webkitTransitionEnd", "transitionend"];
                            for (let i = 0; i < n.length; i += 1) o.trigger(n[i])
                        }))
                    }
                }
            };
            const me = {
                setTranslate() {
                    const e = this,
                        {
                            width: t,
                            height: n,
                            slides: r,
                            $wrapperEl: o,
                            slidesSizesGrid: l
                        } = e,
                        d = e.params.coverflowEffect,
                        c = e.isHorizontal(),
                        h = e.translate,
                        m = c ? t / 2 - h : n / 2 - h,
                        v = c ? d.rotate : -d.rotate,
                        y = d.depth;
                    for (let i = 0, e = r.length; i < e; i += 1) {
                        const e = r.eq(i),
                            t = l[i],
                            n = (m - e[0].swiperSlideOffset - t / 2) / t * d.modifier;
                        let o = c ? v * n : 0,
                            h = c ? 0 : v * n,
                            w = -y * Math.abs(n),
                            x = d.stretch;
                        "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(d.stretch) / 100 * t);
                        let S = c ? 0 : x * n,
                            C = c ? x * n : 0,
                            A = 1 - (1 - d.scale) * Math.abs(n);
                        Math.abs(C) < .001 && (C = 0), Math.abs(S) < .001 && (S = 0), Math.abs(w) < .001 && (w = 0), Math.abs(o) < .001 && (o = 0), Math.abs(h) < .001 && (h = 0), Math.abs(A) < .001 && (A = 0);
                        const E = `translate3d(${C}px,${S}px,${w}px)  rotateX(${h}deg) rotateY(${o}deg) scale(${A})`;
                        if (e.transform(E), e[0].style.zIndex = 1 - Math.abs(Math.round(n)), d.slideShadows) {
                            let t = c ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                r = c ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                            0 === t.length && (t = f(`<div class="swiper-slide-shadow-${c?"left":"top"}"></div>`), e.append(t)), 0 === r.length && (r = f(`<div class="swiper-slide-shadow-${c?"right":"bottom"}"></div>`), e.append(r)), t.length && (t[0].style.opacity = n > 0 ? n : 0), r.length && (r[0].style.opacity = -n > 0 ? -n : 0)
                        }
                    }
                    if (w.pointerEvents || w.prefixedPointerEvents) {
                        o[0].style.perspectiveOrigin = `${m}px 50%`
                    }
                },
                setTransition(e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
            };
            const ge = {
                init() {
                    const e = this,
                        {
                            thumbs: t
                        } = e.params,
                        n = e.constructor;
                    t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, y.extend(e.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), y.extend(e.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })) : y.isObject(t.swiper) && (e.thumbs.swiper = new n(y.extend({}, t.swiper, {
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
                },
                onThumbClick() {
                    const e = this,
                        t = e.thumbs.swiper;
                    if (!t) return;
                    const n = t.clickedIndex,
                        r = t.clickedSlide;
                    if (r && f(r).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
                    if (null == n) return;
                    let o;
                    if (o = t.params.loop ? parseInt(f(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n, e.params.loop) {
                        let t = e.activeIndex;
                        e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                        const n = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${o}"]`).eq(0).index(),
                            r = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${o}"]`).eq(0).index();
                        o = void 0 === n ? r : void 0 === r ? n : r - t < t - n ? r : n
                    }
                    e.slideTo(o)
                },
                update(e) {
                    const t = this,
                        n = t.thumbs.swiper;
                    if (!n) return;
                    const r = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView,
                        o = t.params.thumbs.autoScrollOffset,
                        l = o && !n.params.loop;
                    if (t.realIndex !== n.realIndex || l) {
                        let d, c, h = n.activeIndex;
                        if (n.params.loop) {
                            n.slides.eq(h).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, h = n.activeIndex);
                            const e = n.slides.eq(h).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                                r = n.slides.eq(h).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                            d = void 0 === e ? r : void 0 === r ? e : r - h == h - e ? h : r - h < h - e ? r : e, c = t.activeIndex > t.previousIndex ? "next" : "prev"
                        } else d = t.realIndex, c = d > t.previousIndex ? "next" : "prev";
                        l && (d += "next" === c ? o : -1 * o), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(d) < 0 && (n.params.centeredSlides ? d = d > h ? d - Math.floor(r / 2) + 1 : d + Math.floor(r / 2) - 1 : d > h && (d = d - r + 1), n.slideTo(d, e ? 0 : void 0))
                    }
                    let d = 1;
                    const c = t.params.thumbs.slideThumbActiveClass;
                    if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (d = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (d = 1), d = Math.floor(d), n.slides.removeClass(c), n.params.loop || n.params.virtual && n.params.virtual.enabled)
                        for (let i = 0; i < d; i += 1) n.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+i}"]`).addClass(c);
                    else
                        for (let i = 0; i < d; i += 1) n.slides.eq(t.realIndex + i).addClass(c)
                }
            };
            const ve = [F, H, X, Y, U, Q, Z, {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        mousewheel: {
                            enabled: !1,
                            enable: ee.enable.bind(e),
                            disable: ee.disable.bind(e),
                            handle: ee.handle.bind(e),
                            handleMouseEnter: ee.handleMouseEnter.bind(e),
                            handleMouseLeave: ee.handleMouseLeave.bind(e),
                            animateSlider: ee.animateSlider.bind(e),
                            releaseScroll: ee.releaseScroll.bind(e),
                            lastScrollTime: y.now(),
                            lastEventBeforeSnap: void 0,
                            recentWheelEvents: []
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
                    },
                    destroy() {
                        const e = this;
                        e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
                    }
                }
            }, {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        navigation: {
                            init: te.init.bind(e),
                            update: te.update.bind(e),
                            destroy: te.destroy.bind(e),
                            onNextClick: te.onNextClick.bind(e),
                            onPrevClick: te.onPrevClick.bind(e)
                        }
                    })
                },
                on: {
                    init() {
                        this.navigation.init(), this.navigation.update()
                    },
                    toEdge() {
                        this.navigation.update()
                    },
                    fromEdge() {
                        this.navigation.update()
                    },
                    destroy() {
                        this.navigation.destroy()
                    },
                    click(e) {
                        const t = this,
                            {
                                $nextEl: n,
                                $prevEl: r
                            } = t.navigation;
                        if (t.params.navigation.hideOnClick && !f(e.target).is(r) && !f(e.target).is(n)) {
                            let e;
                            n ? e = n.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), !0 === e ? t.emit("navigationShow", t) : t.emit("navigationHide", t), n && n.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
                        }
                    }
                }
            }, {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        pagination: {
                            init: ne.init.bind(e),
                            render: ne.render.bind(e),
                            update: ne.update.bind(e),
                            destroy: ne.destroy.bind(e),
                            dynamicBulletIndex: 0
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.pagination.init(), e.pagination.render(), e.pagination.update()
                    },
                    activeIndexChange() {
                        const e = this;
                        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
                    },
                    snapIndexChange() {
                        const e = this;
                        e.params.loop || e.pagination.update()
                    },
                    slidesLengthChange() {
                        const e = this;
                        e.params.loop && (e.pagination.render(), e.pagination.update())
                    },
                    snapGridLengthChange() {
                        const e = this;
                        e.params.loop || (e.pagination.render(), e.pagination.update())
                    },
                    destroy() {
                        this.pagination.destroy()
                    },
                    click(e) {
                        const t = this;
                        if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !f(e.target).hasClass(t.params.pagination.bulletClass)) {
                            !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                        }
                    }
                }
            }, {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        scrollbar: {
                            init: ie.init.bind(e),
                            destroy: ie.destroy.bind(e),
                            updateSize: ie.updateSize.bind(e),
                            setTranslate: ie.setTranslate.bind(e),
                            setTransition: ie.setTransition.bind(e),
                            enableDraggable: ie.enableDraggable.bind(e),
                            disableDraggable: ie.disableDraggable.bind(e),
                            setDragPosition: ie.setDragPosition.bind(e),
                            getPointerPosition: ie.getPointerPosition.bind(e),
                            onDragStart: ie.onDragStart.bind(e),
                            onDragMove: ie.onDragMove.bind(e),
                            onDragEnd: ie.onDragEnd.bind(e),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                    },
                    update() {
                        this.scrollbar.updateSize()
                    },
                    resize() {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate() {
                        this.scrollbar.updateSize()
                    },
                    setTranslate() {
                        this.scrollbar.setTranslate()
                    },
                    setTransition(e) {
                        this.scrollbar.setTransition(e)
                    },
                    destroy() {
                        this.scrollbar.destroy()
                    }
                }
            }, {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        parallax: {
                            setTransform: se.setTransform.bind(e),
                            setTranslate: se.setTranslate.bind(e),
                            setTransition: se.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                    },
                    init() {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTranslate() {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTransition(e) {
                        this.params.parallax.enabled && this.parallax.setTransition(e)
                    }
                }
            }, {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create() {
                    const e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            }
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((n => {
                        t[n] = ae[n].bind(e)
                    })), y.extend(e, {
                        zoom: t
                    });
                    let n = 1;
                    Object.defineProperty(e.zoom, "scale", {
                        get: () => n,
                        set(t) {
                            if (n !== t) {
                                const n = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                    r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                e.emit("zoomChange", t, n, r)
                            }
                            n = t
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.zoom.enabled && e.zoom.enable()
                    },
                    destroy() {
                        this.zoom.disable()
                    },
                    touchStart(e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e)
                    },
                    touchEnd(e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e)
                    },
                    doubleTap(e) {
                        const t = this;
                        t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                    },
                    transitionEnd() {
                        const e = this;
                        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                    },
                    slideChange() {
                        const e = this;
                        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
                    }
                }
            }, {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: re.load.bind(e),
                            loadInSlide: re.loadInSlide.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                    },
                    init() {
                        const e = this;
                        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                    },
                    scroll() {
                        const e = this;
                        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                    },
                    resize() {
                        const e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    scrollbarDragMove() {
                        const e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    transitionStart() {
                        const e = this;
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                    },
                    transitionEnd() {
                        const e = this;
                        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                    },
                    slideChange() {
                        const e = this;
                        e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
                    }
                }
            }, {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        controller: {
                            control: e.params.controller.control,
                            getInterpolateFunction: oe.getInterpolateFunction.bind(e),
                            setTranslate: oe.setTranslate.bind(e),
                            setTransition: oe.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    update() {
                        const e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    resize() {
                        const e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    observerUpdate() {
                        const e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    setTranslate(e, t) {
                        this.controller.control && this.controller.setTranslate(e, t)
                    },
                    setTransition(e, t) {
                        this.controller.control && this.controller.setTransition(e, t)
                    }
                }
            }, {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        a11y: {
                            liveRegion: f(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                        }
                    }), Object.keys(le).forEach((t => {
                        e.a11y[t] = le[t].bind(e)
                    }))
                },
                on: {
                    init() {
                        const e = this;
                        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                    },
                    toEdge() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    fromEdge() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    paginationUpdate() {
                        this.params.a11y.enabled && this.a11y.updatePagination()
                    },
                    destroy() {
                        this.params.a11y.enabled && this.a11y.destroy()
                    }
                }
            }, {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        history: {
                            init: de.init.bind(e),
                            setHistory: de.setHistory.bind(e),
                            setHistoryPopState: de.setHistoryPopState.bind(e),
                            scrollToSlide: de.scrollToSlide.bind(e),
                            destroy: de.destroy.bind(e)
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.history.enabled && e.history.init()
                    },
                    destroy() {
                        const e = this;
                        e.params.history.enabled && e.history.destroy()
                    },
                    transitionEnd() {
                        const e = this;
                        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                    },
                    slideChange() {
                        const e = this;
                        e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
                    }
                }
            }, {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        hashNavigation: {
                            initialized: !1,
                            init: ce.init.bind(e),
                            destroy: ce.destroy.bind(e),
                            setHash: ce.setHash.bind(e),
                            onHashCange: ce.onHashCange.bind(e)
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.init()
                    },
                    destroy() {
                        const e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                    },
                    transitionEnd() {
                        const e = this;
                        e.hashNavigation.initialized && e.hashNavigation.setHash()
                    },
                    slideChange() {
                        const e = this;
                        e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
                    }
                }
            }, {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: ue.run.bind(e),
                            start: ue.start.bind(e),
                            stop: ue.stop.bind(e),
                            pause: ue.pause.bind(e),
                            onVisibilityChange() {
                                "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                            },
                            onTransitionEnd(t) {
                                e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                            }
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.autoplay.enabled && (e.autoplay.start(), document.addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
                    },
                    beforeTransitionStart(e, t) {
                        const n = this;
                        n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(e) : n.autoplay.stop())
                    },
                    sliderFirstMove() {
                        const e = this;
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                    },
                    touchEnd() {
                        const e = this;
                        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
                    },
                    destroy() {
                        const e = this;
                        e.autoplay.running && e.autoplay.stop(), document.removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
                    }
                }
            }, {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        fadeEffect: {
                            setTranslate: pe.setTranslate.bind(e),
                            setTransition: pe.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if ("fade" !== e.params.effect) return;
                        e.classNames.push(`${e.params.containerModifierClass}fade`);
                        const t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        y.extend(e.params, t), y.extend(e.originalParams, t)
                    },
                    setTranslate() {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate()
                    },
                    setTransition(e) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        cubeEffect: {
                            setTranslate: he.setTranslate.bind(e),
                            setTransition: he.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if ("cube" !== e.params.effect) return;
                        e.classNames.push(`${e.params.containerModifierClass}cube`), e.classNames.push(`${e.params.containerModifierClass}3d`);
                        const t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        y.extend(e.params, t), y.extend(e.originalParams, t)
                    },
                    setTranslate() {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate()
                    },
                    setTransition(e) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        flipEffect: {
                            setTranslate: fe.setTranslate.bind(e),
                            setTransition: fe.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if ("flip" !== e.params.effect) return;
                        e.classNames.push(`${e.params.containerModifierClass}flip`), e.classNames.push(`${e.params.containerModifierClass}3d`);
                        const t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        y.extend(e.params, t), y.extend(e.originalParams, t)
                    },
                    setTranslate() {
                        "flip" === this.params.effect && this.flipEffect.setTranslate()
                    },
                    setTransition(e) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        scale: 1,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        coverflowEffect: {
                            setTranslate: me.setTranslate.bind(e),
                            setTransition: me.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        "coverflow" === e.params.effect && (e.classNames.push(`${e.params.containerModifierClass}coverflow`), e.classNames.push(`${e.params.containerModifierClass}3d`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate() {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                    },
                    setTransition(e) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                    }
                }
            }, {
                name: "thumbs",
                params: {
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-container-thumbs"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        thumbs: {
                            swiper: null,
                            init: ge.init.bind(e),
                            update: ge.update.bind(e),
                            onThumbClick: ge.onThumbClick.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this,
                            {
                                thumbs: t
                            } = e.params;
                        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
                    },
                    slideChange() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    update() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    resize() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    observerUpdate() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    setTransition(e) {
                        const t = this.thumbs.swiper;
                        t && t.setTransition(e)
                    },
                    beforeDestroy() {
                        const e = this.thumbs.swiper;
                        e && this.thumbs.swiperCreated && e && e.destroy()
                    }
                }
            }];
            void 0 === N.use && (N.use = N.Class.use, N.installModule = N.Class.installModule), N.use(ve);
            t.default = N
        },
        32: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        33: function(e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        55: function(e, t, n) {
            "use strict";
            var r = {
                name: "NoSsr",
                functional: !0,
                props: {
                    placeholder: String,
                    placeholderTag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function(e, t) {
                    var n = t.parent,
                        r = t.slots,
                        o = t.props,
                        l = r(),
                        d = l.default;
                    void 0 === d && (d = []);
                    var c = l.placeholder;
                    return n._isMounted ? d : (n.$once("hook:mounted", (function() {
                        n.$forceUpdate()
                    })), o.placeholderTag && (o.placeholder || c) ? e(o.placeholderTag, {
                        class: ["no-ssr-placeholder"]
                    }, o.placeholder || c) : d.length > 0 ? d.map((function() {
                        return e(!1)
                    })) : e(!1))
                }
            };
            e.exports = r
        },
        9: function(e, t, n) {
            "use strict";

            function r(e, t, n, r, o, l, d) {
                try {
                    var c = e[l](d),
                        h = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(h) : Promise.resolve(h).then(r, o)
            }

            function o(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, l) {
                        var d = e.apply(t, n);

                        function c(e) {
                            r(d, o, l, c, h, "next", e)
                        }

                        function h(e) {
                            r(d, o, l, c, h, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            n.d(t, "a", (function() {
                return o
            }))
        },
        98: function(e, t, n) {
            "use strict";

            function r(e) {
                if (Array.isArray(e)) return e
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        99: function(e, t, n) {
            "use strict";

            function r() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            n.d(t, "a", (function() {
                return r
            }))
        }
    }
]);