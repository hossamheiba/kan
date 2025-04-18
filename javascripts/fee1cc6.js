(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        308: function(e, t, n) {
            "use strict";
            n(56);
            var o = function() {
                    var e = document.querySelector("#preloader");
                    e && (document.body.classList.contains("pace-done") && e.classList.add("isdone"), document.addEventListener("load", (function() {
                        return e.classList.add("isdone")
                    })), "undefined" != typeof Pace && (Pace.on("start", (function() {
                        return e.classList.remove("isdone")
                    })), Pace.on("done", (function() {
                        return e.classList.add("isdone")
                    }))))
                },
                r = {
                    mounted: function() {
                        setTimeout((function() {
                            return o()
                        }), 0)
                    }
                },
                c = n(73),
                component = Object(c.a)(r, (function() {
                    return (0, this._self._c)("div", {
                        attrs: {
                            id: "preloader"
                        }
                    })
                }), [], !1, null, null, null);
            t.a = component.exports
        },
        309: function(e, t, n) {
            "use strict";
            var o = {
                    props: ["topText"],
                    mounted: function() {
                        var e;
                        (e = document.querySelector(".to_top")) && (window.addEventListener("scroll", (function() {
                            window.scrollY > 700 ? e.classList.add("show") : e.classList.remove("show")
                        })), e.addEventListener("click", (function(e) {
                            e.preventDefault(), window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        })))
                    }
                },
                r = n(73),
                component = Object(r.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("a", {
                        class: "to_top ".concat(e.topText ? "" : "bg-gray rounded-circle icon-40 d-inline-flex align-items-center justify-content-center"),
                        attrs: {
                            href: "#"
                        }
                    }, [t("i", {
                        class: "bi bi-chevron-up ".concat(e.topText ? "" : "fs-6 text-dark")
                    }), e._v(" "), e.topText ? t("small", [e._v("Top")]) : e._e()])
                }), [], !1, null, null, null);
            t.a = component.exports
        },
        340: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            n(77), n(78), n(56);

            function o(e) {
                if (e) {
                    var t, n = document.querySelector('link[href="/assets/css/rtl_style.css"]'),
                        o = document.querySelector('link[href="/assets/css/style.css"]');
                    if (!n || !o) return;
                    if (null !== (t = o.nextElementSibling.href) && void 0 !== t && t.includes("/assets/css/rtl_style.css")) return;
                    document.head.appendChild(o), document.head.appendChild(n)
                } else {
                    var r = document.querySelector('link[href="/assets/css/style.css"]');
                    if (!r) return;
                    setTimeout((function() {
                        document.head.append(r)
                    }), 10)
                }
            }
        },
        625: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(340),
                r = n(308),
                c = n(309),
                l = {
                    components: {
                        PreLoader: r.a,
                        ScrollToTop: c.a
                    },
                    data: function() {
                        return {
                            scrollTopText: !1,
                            pagesWithScrollToTopText: ["/home-digital-agency", "/home-digital-agency-onePage", "/home-it-solutions", "/home-it-solutions-onePage"]
                        }
                    },
                    head: function() {
                        return {
                            link: [{
                                rel: "stylesheet",
                                href: "/assets/css/lib/bootstrap-icons.css"
                            }, {
                                rel: "stylesheet",
                                href: "/assets/css/lib/swiper.min.css"
                            }, {
                                rel: "stylesheet",
                                href: "/assets/css/lib/bootstrap.min.css"
                            }, {
                                rel: "stylesheet",
                                href: "/assets/css/lib/all.min.css"
                            }, {
                                rel: "stylesheet",
                                href: "/assets/css/lib/animate.css"
                            }, {
                                rel: "stylesheet",
                                href: "/assets/css/style.css"
                            }]
                        }
                    },
                    mounted: function() {
                        Object(o.a)(!1), -1 !== this.pagesWithScrollToTopText.indexOf(this.$router.history.current.path) && (this.scrollTopText = !0)
                    },
                    watch: {
                        $route: function() {
                            -1 !== this.pagesWithScrollToTopText.indexOf(this.$router.history.current.path) ? this.scrollTopText = !0 : this.scrollTopText = !1
                        }
                    }
                },
                d = n(73),
                component = Object(d.a)(l, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", [t("PreLoader"), e._v(" "), t("Nuxt"), e._v(" "), t("ScrollToTop", {
                        attrs: {
                            topText: e.scrollTopText
                        }
                    })], 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        }
    }
]);