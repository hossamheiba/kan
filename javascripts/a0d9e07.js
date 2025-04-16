(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        259: function(t, e, n) {
            "use strict";

            function o(t, e, n) {
                t && (window.pageYOffset > 300 ? (t.classList.add("nav-scroll"), e && t.classList.remove("bg-transparent")) : (t.classList.remove("nav-scroll"), e && t.classList.add("bg-transparent")), window.addEventListener("scroll", (function() {
                    window.pageYOffset > 300 ? (t.classList.add("nav-scroll"), e && t.classList.remove("bg-transparent")) : (t.classList.remove("nav-scroll"), e && t.classList.add("bg-transparent"))
                })))
            }
            n.d(e, "a", (function() {
                return o
            }))
        },
        261: function(t, e, n) {
            "use strict";
            var o = n(2),
                l = n(262);
            o({
                target: "String",
                proto: !0,
                forced: n(263)("link")
            }, {
                link: function(t) {
                    return l(this, "a", "href", t)
                }
            })
        },
        262: function(t, e, n) {
            var o = n(5),
                l = n(23),
                r = n(13),
                c = /"/g,
                d = o("".replace);
            t.exports = function(t, e, n, o) {
                var v = r(l(t)),
                    m = "<" + e;
                return "" !== n && (m += " " + n + '="' + d(r(o), c, "&quot;") + '"'), m + ">" + v + "</" + e + ">"
            }
        },
        263: function(t, e, n) {
            var o = n(3);
            t.exports = function(t) {
                return o((function() {
                    var e = "" [t]('"');
                    return e !== e.toLowerCase() || e.split('"').length > 3
                }))
            }
        },
        269: function(t, e, n) {},
        270: function(t, e, n) {
            "use strict";
            n(261);
            var footer = n(272),
                o = n(273),
                l = {
                    props: ["rtl"],
                    computed: {
                        FooterData: function() {
                            return this.rtl ? o : footer
                        }
                    }
                },
                r = n(73),
                component = Object(r.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("footer", {
                        staticClass: "style-6 border-top brd-gray"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row gx-0 justify-content-between"
                    }, [e("div", {
                        staticClass: "col-lg-3 col-sm-6"
                    }, [e("div", {
                        staticClass: "items"
                    }, [e("div", {
                        staticClass: "title"
                    }, [t._v("\n            " + t._s(t.rtl ? "Itekseo - الأفضل في التسويق" : "Itekseo - Best for SEO/Marketing") + "\n          ")]), t._v(" "), e("ul", [e("li", {
                        staticClass: "color-666 mb-2"
                    }, [e("i", {
                        staticClass: "bi bi-house me-1"
                    }), t._v(" "), e("small", [t._v(t._s(t.FooterData.address))])]), t._v(" "), e("li", {
                        staticClass: "color-666 mb-2"
                    }, [e("i", {
                        staticClass: "bi bi-phone me-1"
                    }), t._v(" "), e("small", [t._v(t._s(t.FooterData.phone))])]), t._v(" "), e("li", {
                        staticClass: "color-666 mb-2"
                    }, [e("i", {
                        staticClass: "bi bi-envelope me-1"
                    }), t._v(" "), e("small", [t._v(t._s(t.FooterData.email))])])]), t._v(" "), t._m(0)])]), t._v(" "), e("div", {
                        staticClass: "col-lg-2"
                    }, [e("div", {
                        staticClass: "items"
                    }, [e("div", {
                        staticClass: "title"
                    }, [t._v("\n            " + t._s(t.rtl ? "الخدمات" : "Services") + "\n          ")]), t._v(" "), e("ul", t._l(t.FooterData.services, (function(n, o) {
                        return e("li", {
                            key: o
                        }, [e("a", {
                            attrs: {
                                href: n.link
                            }
                        }, [t._v(t._s(n.title))])])
                    })), 0)])]), t._v(" "), e("div", {
                        staticClass: "col-lg-2"
                    }, [e("div", {
                        staticClass: "items"
                    }, [e("div", {
                        staticClass: "title"
                    }, [t._v("\n            " + t._s(t.rtl ? "المعلومات" : "Information") + "\n          ")]), t._v(" "), e("ul", t._l(t.FooterData.information, (function(n, o) {
                        return e("li", {
                            key: o
                        }, [e("NuxtLink", {
                            attrs: {
                                to: n.link
                            }
                        }, [t._v(t._s(n.title))])], 1)
                    })), 0)])]), t._v(" "), e("div", {
                        staticClass: "col-lg-3 col-sm-6"
                    }, [e("div", {
                        staticClass: "items"
                    }, [e("div", {
                        staticClass: "title"
                    }, [t._v("\n            " + t._s(t.rtl ? "النشرة الإخبارية" : "Newsletter") + "\n          ")]), t._v(" "), e("small", {
                        staticClass: "color-666"
                    }, [t._v(t._s(t.rtl ? "سجل الآن للحصول على آخر التحديثات على" : "Register now to get latest updates on") + " "), e("br"), t._v(" " + t._s(t.rtl ? "الترقيات والقسائم." : "promotions & coupons."))]), t._v(" "), e("form", {
                        staticClass: "form mt-30",
                        attrs: {
                            action: "contact.php",
                            method: "post"
                        }
                    }, [e("div", {
                        staticClass: "form-group"
                    }, [t._m(1), t._v(" "), e("input", {
                        attrs: {
                            type: "text",
                            placeholder: t.rtl ? "ادخل بريدك الالكترونى" : "Enter your email"
                        }
                    }), t._v(" "), t._m(2)])]), t._v(" "), e("small", {
                        staticClass: "color-666 fst-italic mt-20"
                    }, [t._v(t._s(t.rtl ? "من خلال الاشتراك ، فإنك توافق على" : "By subscribing, you accepted the our") + " "), e("a", {
                        staticClass: "fst-normal text-dark",
                        attrs: {
                            href: "#"
                        }
                    }, [t._v(t._s(t.rtl ? "سياستنا." : "Policy."))])])])])]), t._v(" "), e("div", {
                        staticClass: "foot"
                    }, [e("div", {
                        staticClass: "row"
                    }, [t._m(3), t._v(" "), e("div", {
                        staticClass: "col-lg-6"
                    }, [e("small", {
                        staticClass: "small"
                    }, [t._v("\n            " + t._s(t.rtl ? "© 2022 حقوق التأليف والنشر" : "© 2022 Copyrights by") + " "), e("small", {
                        staticClass: "fw-bold text-decoration-underline"
                    }, [t._v("Iteck Co.")]), t._v(" " + t._s(t.rtl ? "كل الحقوق محفوظة. صمم بواسطة" : "All Rights Reserved. Designed by") + " "), e("a", {
                        staticClass: "fw-bold text-decoration-underline",
                        attrs: {
                            href: "https://themeforest.net/user/themescamp"
                        }
                    }, [t._v("ThemesCamp")])])])])])])])
                }), [function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "socail-icons"
                    }, [e("a", {
                        staticClass: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",
                        attrs: {
                            href: "twiter.com"
                        }
                    }, [e("i", {
                        staticClass: "fa-brands fa-x-twitter"
                    })]), t._v(" "), e("a", {
                        staticClass: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",
                        attrs: {
                            href: "facebook.com"
                        }
                    }, [e("i", {
                        staticClass: "fab fa-facebook-f"
                    })]), t._v(" "), e("a", {
                        staticClass: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray",
                        attrs: {
                            href: "instagram.com"
                        }
                    }, [e("i", {
                        staticClass: "fab fa-instagram"
                    })])])
                }, function() {
                    var t = this._self._c;
                    return t("span", {
                        staticClass: "icon"
                    }, [t("i", {
                        staticClass: "bi bi-envelope"
                    })])
                }, function() {
                    var t = this._self._c;
                    return t("button", [t("i", {
                        staticClass: "bi bi-send"
                    })])
                }, function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "col-lg-3 col-sm-6"
                    }, [t("div", {
                        staticClass: "logo"
                    }, [t("img", {
                        attrs: {
                            src: "/assets/img/logo_home6.png",
                            alt: ""
                        }
                    })])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        271: function(t, e, n) {
            "use strict";
            n(276);
            var o = {
                    props: {
                        videoId: String,
                        channel: String,
                        isOpen: Boolean,
                        youtube: {
                            type: Object,
                            default: function() {
                                return {
                                    autoplay: 1,
                                    cc_load_policy: 1,
                                    color: null,
                                    controls: 1,
                                    disablekb: 0,
                                    enablejsapi: 0,
                                    end: null,
                                    fs: 1,
                                    h1: null,
                                    iv_load_policy: 1,
                                    list: null,
                                    listType: null,
                                    loop: 0,
                                    modestbranding: null,
                                    origin: null,
                                    playlist: null,
                                    playsinline: null,
                                    rel: 0,
                                    showinfo: 1,
                                    start: 0,
                                    wmode: "transparent",
                                    theme: "dark"
                                }
                            }
                        },
                        ratio: {
                            type: String,
                            default: "16:9"
                        },
                        vimeo: {
                            type: Object,
                            default: function() {
                                return {
                                    api: !1,
                                    autopause: !0,
                                    autoplay: !0,
                                    byline: !0,
                                    callback: null,
                                    color: null,
                                    height: null,
                                    loop: !1,
                                    maxheight: null,
                                    maxwidth: null,
                                    player_id: null,
                                    portrait: !0,
                                    title: !0,
                                    width: null,
                                    xhtml: !1
                                }
                            }
                        },
                        allowFullScreen: {
                            type: Boolean,
                            default: !0
                        },
                        animationSpeed: {
                            type: Number,
                            default: 300
                        },
                        classNames: {
                            type: Object,
                            default: function() {
                                return {
                                    modalVideoEffect: "modal-video-effect",
                                    modalVideo: "modal-video",
                                    modalVideoClose: "modal-video-close",
                                    modalVideoBody: "modal-video-body",
                                    modalVideoInner: "modal-video-inner",
                                    modalVideoIframeWrap: "modal-video-movie-wrap",
                                    modalVideoCloseBtn: "modal-video-close-btn"
                                }
                            }
                        },
                        aria: {
                            type: Object,
                            default: function() {
                                return {
                                    openMessage: "Modal video opened",
                                    dismissBtnMessage: "Close the modal video"
                                }
                            }
                        }
                    },
                    methods: {
                        getQueryString: function(t) {
                            var e = "";
                            for (var n in t) t.hasOwnProperty(n) && null !== t[n] && (e += n + "=" + t[n] + "&");
                            return e.substr(0, e.length - 1)
                        },
                        getYoutubeUrl: function(t, e) {
                            return "//www.youtube.com/embed/" + e + "?" + this.getQueryString(t)
                        },
                        getVimeoUrl: function(t, e) {
                            return "//player.vimeo.com/video/" + e + "?" + this.getQueryString(t)
                        },
                        getPadding: function(t) {
                            var e = t.split(":"),
                                n = Number(e[0]);
                            return 100 * Number(e[1]) / n + "%"
                        }
                    },
                    computed: {
                        fullVideoUrl: function() {
                            return "youtube" === this.channel ? this.getYoutubeUrl(this.youtube, this.videoId) : "vimeo" === this.channel ? this.getVimeoUrl(this.vimeo, this.videoId) : void 0
                        },
                        paddingBottom: function() {
                            return this.getPadding(this.ratio)
                        }
                    },
                    watch: {
                        isOpen: {
                            handler: function(t) {
                                var e = this;
                                this.$nextTick((function() {
                                    void 0 !== e.$refs.closeBtn && e.$refs.closeBtn.focus()
                                }))
                            },
                            deep: !0
                        }
                    }
                },
                l = (n(280), n(73)),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return t.isOpen ? e("div", [e("div", {
                        class: t.classNames.modalVideo,
                        attrs: {
                            tabIndex: "-1",
                            role: "dialog",
                            "aria-label": t.aria.openMessage
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("update:isOpen", !1)
                            },
                            keydown: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : t.$emit("update:isOpen", !1)
                            }
                        }
                    }, [e("div", {
                        class: t.classNames.modalVideoBody
                    }, [e("button", {
                        ref: "closeBtn",
                        class: t.classNames.modalVideoCloseBtn,
                        attrs: {
                            "aria-label": t.aria.dismissBtnMessage
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("update:isOpen", !1)
                            }
                        }
                    }), t._v(" "), e("div", {
                        class: t.classNames.modalVideoInner
                    }, [e("div", {
                        class: t.classNames.modalVideoIframeWrap,
                        style: {
                            "padding-bottom": t.paddingBottom
                        }
                    }, [e("iframe", {
                        attrs: {
                            width: "460",
                            height: "230",
                            src: t.fullVideoUrl,
                            frameBorder: "0",
                            allowFullScreen: t.allowFullScreen,
                            tabIndex: "-1"
                        }
                    })])])])])]) : t._e()
                }), [], !1, null, "c9d59270", null);
            e.a = component.exports
        },
        272: function(t) {
            t.exports = JSON.parse('{"address":"223 Thatcher Road St, Manhattan","phone":"+031 5689 89 98","email":"contact@itecksolution.co","services":[{"link":"#","title":"SEO Analysis"},{"link":"#","title":"Content Strategy"},{"link":"#","title":"Growth Hacking"},{"link":"#","title":"Social Media"},{"link":"#","title":"Web Design & Develoment"},{"link":"#","title":"Google/FB Ads"}],"information":[{"link":"/page-about-5","title":"About Itekseo"},{"link":"#","title":"Investors"},{"link":"/page-blog-5","title":"Blog"},{"link":"/page-contact-5","title":"Contact"},{"link":"/page-about-5","title":"How It Works"},{"link":"#","title":"Pricing Plan"},{"link":"#","title":"Covid-19 Update"}]}')
        },
        273: function(t) {
            t.exports = JSON.parse('{"address":"223 شارع طريق تاتشر ، مانهاتن","phone":"+031 5689 89 98","email":"contact@itecksolution.co","services":[{"link":"#","title":"تحليل البيانات"},{"link":"#","title":"استراتيجية المحتوى"},{"link":"#","title":"الحماية من القرصنة"},{"link":"#","title":"وسائل التواصل الاجتماعي"},{"link":"#","title":"تصميم وتطوير المواقع الإلكترونية"},{"link":"#","title":"اعلانات جوجل وفيسبوك"}],"information":[{"link":"/rtl-page-about","title":"من نحن"},{"link":"#","title":"المستثمرون"},{"link":"/rtl-page-blog","title":"المدونة"},{"link":"/rtl-page-contact","title":"اتصل بنا"},{"link":"/rtl-page-about","title":"كيف نعمل"},{"link":"#","title":"خطة الاسعار"},{"link":"#","title":"اخبار كوفيد"}]}')
        },
        274: function(t, e, n) {
            "use strict";
            var o = n(259),
                l = {
                    props: ["whiteNotRounded"],
                    methods: {
                        handleMouseMove: function(t) {
                            var e, n, o = t.target.classList.contains("dropdown-toggle") ? t.target : t.target.querySelector(".dropdown-toggle"),
                                l = null == o ? void 0 : o.nextElementSibling;
                            null == o || null === (e = o.classList) || void 0 === e || e.add("show"), null == l || null === (n = l.classList) || void 0 === n || n.add("show")
                        },
                        handleMouseLeave: function(t) {
                            var e, n, o = t.target.classList.contains("dropdown") ? t.target : t.target.closest(".dropdown"),
                                l = o.querySelector(".dropdown-toggle"),
                                r = o.querySelector(".dropdown-menu");
                            null == l || null === (e = l.classList) || void 0 === e || e.remove("show"), null == r || null === (n = r.classList) || void 0 === n || n.remove("show")
                        }
                    },
                    mounted: function() {
                        Object(o.a)(this.$refs.navbarRef)
                    }
                },
                r = n(73),
                component = Object(r.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("nav", {
                        ref: "navbarRef",
                        class: "navbar navbar-expand-lg navbar-light style-6 ".concat(t.whiteNotRounded ? "bg-white rounded-0 position-relative" : "")
                    }, [e("div", {
                        staticClass: "container-fluid"
                    }, [t._m(0), t._v(" "), t._m(1), t._v(" "), e("div", {
                        staticClass: "collapse navbar-collapse",
                        attrs: {
                            id: "navbarSupportedContent"
                        }
                    }, [e("ul", {
                        staticClass: "navbar-nav m-auto mb-2 mb-lg-0"
                    }, [e("li", {
                        staticClass: "nav-item dropdown",
                        on: {
                            mousemove: t.handleMouseMove,
                            mouseleave: t.handleMouseLeave
                        }
                    }, [e("a", {
                        staticClass: "nav-link active dropdown-toggle",
                        attrs: {
                            href: "#",
                            id: "navbarDropdown1",
                            role: "button",
                            "data-bs-toggle": "dropdown",
                            "aria-expanded": "false"
                        }
                    }, [t._v("\n            الرئيسية\n          ")]), t._v(" "), e("ul", {
                        staticClass: "dropdown-menu",
                        attrs: {
                            "aria-labelledby": "navbarDropdown1"
                        }
                    }, [e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/home-app-landing"
                        }
                    }, [t._v("صفحة هبوط للتطبيق")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/home-saas-technology"
                        }
                    }, [t._v("التكنولوجى")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/home-marketing-startup"
                        }
                    }, [t._v("التسويق الالكترونى")])], 1)])]), t._v(" "), e("li", {
                        staticClass: "nav-item dropdown",
                        on: {
                            mousemove: t.handleMouseMove,
                            mouseleave: t.handleMouseLeave
                        }
                    }, [e("a", {
                        staticClass: "nav-link dropdown-toggle",
                        attrs: {
                            href: "#",
                            id: "navbarDropdown2",
                            role: "button",
                            "data-bs-toggle": "dropdown",
                            "aria-expanded": "false"
                        }
                    }, [t._v("\n            الصفحات الداخلية\n          ")]), t._v(" "), e("ul", {
                        staticClass: "dropdown-menu",
                        attrs: {
                            "aria-labelledby": "navbarDropdown1"
                        }
                    }, [e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/rtl-page-about"
                        }
                    }, [t._v("من نحن")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/rtl-page-product"
                        }
                    }, [t._v("المنتجات")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/rtl-page-services"
                        }
                    }, [t._v("الخدمات")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/rtl-page-shop"
                        }
                    }, [t._v("المتجر")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/rtl-page-single-project"
                        }
                    }, [t._v("تفاصيل المشروع")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/rtl-page-single-post"
                        }
                    }, [t._v("تفاصيل الخبر")])], 1)])]), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("NuxtLink", {
                        staticClass: "nav-link",
                        attrs: {
                            to: "/rtl-page-portfolio"
                        }
                    }, [t._v("\n            المشاريع\n          ")])], 1), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("NuxtLink", {
                        staticClass: "nav-link",
                        attrs: {
                            to: "/rtl-page-blog"
                        }
                    }, [t._v("\n            المدونة\n          ")])], 1), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("NuxtLink", {
                        staticClass: "nav-link",
                        attrs: {
                            to: "/rtl-page-contact"
                        }
                    }, [t._v("\n            اتصل بنا\n          ")])], 1)]), t._v(" "), e("div", {
                        staticClass: "nav-side"
                    }, [e("div", {
                        staticClass: "d-flex align-items-center"
                    }, [e("NuxtLink", {
                        staticClass: "btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold",
                        attrs: {
                            to: "/rtl-page-contact"
                        }
                    }, [e("span", [e("i", {
                        staticClass: "bi bi-chat-dots me-2"
                    }), t._v("\n              لنتحدث الأن !\n            ")])])], 1)])])])])
                }), [function() {
                    var t = this._self._c;
                    return t("a", {
                        staticClass: "navbar-brand",
                        attrs: {
                            href: "#"
                        }
                    }, [t("img", {
                        attrs: {
                            src: "/assets/img/logo_home6.png",
                            alt: ""
                        }
                    })])
                }, function() {
                    var t = this._self._c;
                    return t("button", {
                        staticClass: "navbar-toggler",
                        attrs: {
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#navbarSupportedContent",
                            "aria-controls": "navbarSupportedContent",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation"
                        }
                    }, [t("span", {
                        staticClass: "navbar-toggler-icon"
                    })])
                }], !1, null, null, null);
            e.a = component.exports
        },
        276: function(t, e, n) {
            "use strict";
            var o = n(10),
                l = n(4),
                r = n(5),
                c = n(102),
                d = n(17),
                v = n(12),
                m = n(191),
                f = n(36),
                _ = n(75),
                h = n(192),
                C = n(3),
                w = n(74).f,
                y = n(28).f,
                x = n(16).f,
                k = n(277),
                S = n(278).trim,
                N = "Number",
                O = l.Number,
                L = O.prototype,
                V = l.TypeError,
                D = r("".slice),
                j = r("".charCodeAt),
                T = function(t) {
                    var e = h(t, "number");
                    return "bigint" == typeof e ? e : I(e)
                },
                I = function(t) {
                    var e, n, o, l, r, c, d, code, v = h(t, "number");
                    if (_(v)) throw V("Cannot convert a Symbol value to a number");
                    if ("string" == typeof v && v.length > 2)
                        if (v = S(v), 43 === (e = j(v, 0)) || 45 === e) {
                            if (88 === (n = j(v, 2)) || 120 === n) return NaN
                        } else if (48 === e) {
                        switch (j(v, 1)) {
                            case 66:
                            case 98:
                                o = 2, l = 49;
                                break;
                            case 79:
                            case 111:
                                o = 8, l = 55;
                                break;
                            default:
                                return +v
                        }
                        for (c = (r = D(v, 2)).length, d = 0; d < c; d++)
                            if ((code = j(r, d)) < 48 || code > l) return NaN;
                        return parseInt(r, o)
                    }
                    return +v
                };
            if (c(N, !O(" 0o1") || !O("0b1") || O("+0x1"))) {
                for (var P, F = function(t) {
                        var e = arguments.length < 1 ? 0 : O(T(t)),
                            n = this;
                        return f(L, n) && C((function() {
                            k(n)
                        })) ? m(Object(e), n, F) : e
                    }, M = o ? w(O) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), A = 0; M.length > A; A++) v(O, P = M[A]) && !v(F, P) && x(F, P, y(O, P));
                F.prototype = L, L.constructor = F, d(l, N, F, {
                    constructor: !0
                })
            }
        },
        277: function(t, e, n) {
            var o = n(5);
            t.exports = o(1..valueOf)
        },
        278: function(t, e, n) {
            var o = n(5),
                l = n(23),
                r = n(13),
                c = n(279),
                d = o("".replace),
                v = "[" + c + "]",
                m = RegExp("^" + v + v + "*"),
                f = RegExp(v + v + "*$"),
                _ = function(t) {
                    return function(e) {
                        var n = r(l(e));
                        return 1 & t && (n = d(n, m, "")), 2 & t && (n = d(n, f, "")), n
                    }
                };
            t.exports = {
                start: _(1),
                end: _(2),
                trim: _(3)
            }
        },
        279: function(t, e) {
            t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        280: function(t, e, n) {
            "use strict";
            n(269)
        },
        282: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            n(56);

            function o(t) {
                t.preventDefault();
                var section = document.querySelector('[data-scroll-index="' + t.target.dataset.scrollNav + '"]');
                section && setTimeout((function() {
                    section.scrollIntoView({
                        behavior: "smooth"
                    })
                }), 300)
            }
        },
        283: function(t, e, n) {
            t.exports = function(t) {
                function e(n) {
                    if (i[n]) return i[n].exports;
                    var a = i[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(a.exports, a, a.exports, e), a.l = !0, a.exports
                }
                var i = {};
                return e.m = t, e.c = i, e.i = function(t) {
                    return t
                }, e.d = function(t, i, n) {
                    e.o(t, i) || Object.defineProperty(t, i, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                }, e.n = function(t) {
                    var i = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return e.d(i, "a", i), i
                }, e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, e.p = "/dist/", e(e.s = 2)
            }([function(t, e, i) {
                var n = i(4)(i(1), i(5), null, null);
                t.exports = n.exports
            }, function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = i(3);
                e.default = {
                    props: {
                        startVal: {
                            type: Number,
                            required: !1,
                            default: 0
                        },
                        endVal: {
                            type: Number,
                            required: !1,
                            default: 2017
                        },
                        duration: {
                            type: Number,
                            required: !1,
                            default: 3e3
                        },
                        autoplay: {
                            type: Boolean,
                            required: !1,
                            default: !0
                        },
                        decimals: {
                            type: Number,
                            required: !1,
                            default: 0,
                            validator: function(t) {
                                return t >= 0
                            }
                        },
                        decimal: {
                            type: String,
                            required: !1,
                            default: "."
                        },
                        separator: {
                            type: String,
                            required: !1,
                            default: ","
                        },
                        prefix: {
                            type: String,
                            required: !1,
                            default: ""
                        },
                        suffix: {
                            type: String,
                            required: !1,
                            default: ""
                        },
                        useEasing: {
                            type: Boolean,
                            required: !1,
                            default: !0
                        },
                        easingFn: {
                            type: Function,
                            default: function(t, e, i, n) {
                                return i * (1 - Math.pow(2, -10 * t / n)) * 1024 / 1023 + e
                            }
                        }
                    },
                    data: function() {
                        return {
                            localStartVal: this.startVal,
                            displayValue: this.formatNumber(this.startVal),
                            printVal: null,
                            paused: !1,
                            localDuration: this.duration,
                            startTime: null,
                            timestamp: null,
                            remaining: null,
                            rAF: null
                        }
                    },
                    computed: {
                        countDown: function() {
                            return this.startVal > this.endVal
                        }
                    },
                    watch: {
                        startVal: function() {
                            this.autoplay && this.start()
                        },
                        endVal: function() {
                            this.autoplay && this.start()
                        }
                    },
                    mounted: function() {
                        this.autoplay && this.start(), this.$emit("mountedCallback")
                    },
                    methods: {
                        start: function() {
                            this.localStartVal = this.startVal, this.startTime = null, this.localDuration = this.duration, this.paused = !1, this.rAF = (0, n.requestAnimationFrame)(this.count)
                        },
                        pauseResume: function() {
                            this.paused ? (this.resume(), this.paused = !1) : (this.pause(), this.paused = !0)
                        },
                        pause: function() {
                            (0, n.cancelAnimationFrame)(this.rAF)
                        },
                        resume: function() {
                            this.startTime = null, this.localDuration = +this.remaining, this.localStartVal = +this.printVal, (0, n.requestAnimationFrame)(this.count)
                        },
                        reset: function() {
                            this.startTime = null, (0, n.cancelAnimationFrame)(this.rAF), this.displayValue = this.formatNumber(this.startVal)
                        },
                        count: function(t) {
                            this.startTime || (this.startTime = t), this.timestamp = t;
                            var e = t - this.startTime;
                            this.remaining = this.localDuration - e, this.useEasing ? this.countDown ? this.printVal = this.localStartVal - this.easingFn(e, 0, this.localStartVal - this.endVal, this.localDuration) : this.printVal = this.easingFn(e, this.localStartVal, this.endVal - this.localStartVal, this.localDuration) : this.countDown ? this.printVal = this.localStartVal - (this.localStartVal - this.endVal) * (e / this.localDuration) : this.printVal = this.localStartVal + (this.localStartVal - this.startVal) * (e / this.localDuration), this.countDown ? this.printVal = this.printVal < this.endVal ? this.endVal : this.printVal : this.printVal = this.printVal > this.endVal ? this.endVal : this.printVal, this.displayValue = this.formatNumber(this.printVal), e < this.localDuration ? this.rAF = (0, n.requestAnimationFrame)(this.count) : this.$emit("callback")
                        },
                        isNumber: function(t) {
                            return !isNaN(parseFloat(t))
                        },
                        formatNumber: function(t) {
                            t = t.toFixed(this.decimals);
                            var e = (t += "").split("."),
                                i = e[0],
                                n = e.length > 1 ? this.decimal + e[1] : "",
                                a = /(\d+)(\d{3})/;
                            if (this.separator && !this.isNumber(this.separator))
                                for (; a.test(i);) i = i.replace(a, "$1" + this.separator + "$2");
                            return this.prefix + i + n + this.suffix
                        }
                    },
                    destroyed: function() {
                        (0, n.cancelAnimationFrame)(this.rAF)
                    }
                }
            }, function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var a = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(i(0));
                e.default = a.default, "undefined" != typeof window && window.Vue && window.Vue.component("count-to", a.default)
            }, function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = 0,
                    a = "webkit moz ms o".split(" "),
                    o = void 0,
                    l = void 0;
                if ("undefined" == typeof window) e.requestAnimationFrame = o = function() {}, e.cancelAnimationFrame = l = function() {};
                else {
                    e.requestAnimationFrame = o = window.requestAnimationFrame, e.cancelAnimationFrame = l = window.cancelAnimationFrame;
                    for (var s = void 0, u = 0; u < a.length && (!o || !l); u++) s = a[u], e.requestAnimationFrame = o = o || window[s + "RequestAnimationFrame"], e.cancelAnimationFrame = l = l || window[s + "CancelAnimationFrame"] || window[s + "CancelRequestAnimationFrame"];
                    o && l || (e.requestAnimationFrame = o = function(t) {
                        var e = (new Date).getTime(),
                            i = Math.max(0, 16 - (e - n)),
                            a = window.setTimeout((function() {
                                t(e + i)
                            }), i);
                        return n = e + i, a
                    }, e.cancelAnimationFrame = l = function(t) {
                        window.clearTimeout(t)
                    })
                }
                e.requestAnimationFrame = o, e.cancelAnimationFrame = l
            }, function(t, e) {
                t.exports = function(t, e, i, n) {
                    var a, o = t = t || {},
                        l = typeof t.default;
                    "object" !== l && "function" !== l || (a = t, o = t.default);
                    var s = "function" == typeof o ? o.options : o;
                    if (e && (s.render = e.render, s.staticRenderFns = e.staticRenderFns), i && (s._scopeId = i), n) {
                        var u = Object.create(s.computed || null);
                        Object.keys(n).forEach((function(t) {
                            var e = n[t];
                            u[t] = function() {
                                return e
                            }
                        })), s.computed = u
                    }
                    return {
                        esModule: a,
                        exports: o,
                        options: s
                    }
                }
            }, function(t, e) {
                t.exports = {
                    render: function() {
                        var t = this,
                            e = t.$createElement;
                        return (t._self._c || e)("span", [t._v("\n  " + t._s(t.displayValue) + "\n")])
                    },
                    staticRenderFns: []
                }
            }])
        },
        321: function(t, e, n) {
            "use strict";
            var o = n(259),
                l = {
                    methods: {
                        handleMouseMove: function(t) {
                            var e, n, o = t.target.classList.contains("dropdown-toggle") ? t.target : t.target.querySelector(".dropdown-toggle"),
                                l = null == o ? void 0 : o.nextElementSibling;
                            null == o || null === (e = o.classList) || void 0 === e || e.add("show"), null == l || null === (n = l.classList) || void 0 === n || n.add("show")
                        },
                        handleMouseLeave: function(t) {
                            var e, n, o = t.target.classList.contains("dropdown") ? t.target : t.target.closest(".dropdown"),
                                l = o.querySelector(".dropdown-toggle"),
                                r = o.querySelector(".dropdown-menu");
                            null == l || null === (e = l.classList) || void 0 === e || e.remove("show"), null == r || null === (n = r.classList) || void 0 === n || n.remove("show")
                        }
                    },
                    mounted: function() {
                        Object(o.a)(this.$refs.navbarRef)
                    }
                },
                r = n(73),
                c = Object(r.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("nav", {
                        ref: "navbarRef",
                        staticClass: "navbar navbar-expand-lg navbar-light style-6"
                    }, [e("div", {
                        staticClass: "container-fluid"
                    }, [t._m(0), t._v(" "), t._m(1), t._v(" "), e("div", {
                        staticClass: "collapse navbar-collapse",
                        attrs: {
                            id: "navbarSupportedContent"
                        }
                    }, [e("ul", {
                        staticClass: "navbar-nav m-auto mb-2 mb-lg-0"
                    }, [e("li", {
                        staticClass: "nav-item dropdown",
                        on: {
                            mousemove: t.handleMouseMove,
                            mouseleave: t.handleMouseLeave
                        }
                    }, [e("a", {
                        staticClass: "nav-link active dropdown-toggle",
                        attrs: {
                            href: "#",
                            id: "navbarDropdown1",
                            role: "button",
                            "data-bs-toggle": "dropdown",
                            "aria-expanded": "false"
                        }
                    }, [t._v("\n            Home\n          ")]), t._v(" "), e("ul", {
                        staticClass: "dropdown-menu",
                        attrs: {
                            "aria-labelledby": "navbarDropdown1"
                        }
                    }, [e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/"
                        }
                    }, [t._v("Landing Preview")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/home-it-solutions2"
                        }
                    }, [t._v(" Creative It Solutions")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/home-data-analysis"
                        }
                    }, [t._v(" Data Analysis")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/home-app-landing"
                        }
                    }, [t._v("App Landing")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/home-saas-technology"
                        }
                    }, [t._v("Saas Technology")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/home-marketing-startup"
                        }
                    }, [t._v("Marketing Startup")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/home-it-solutions"
                        }
                    }, [t._v("It Solution")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/home-software-company"
                        }
                    }, [t._v("Software Company")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/home-digital-agency"
                        }
                    }, [t._v("Digital Agency")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/home-shop-modern"
                        }
                    }, [t._v(" Modren Shop")])], 1)])]), t._v(" "), e("li", {
                        staticClass: "nav-item dropdown",
                        on: {
                            mousemove: t.handleMouseMove,
                            mouseleave: t.handleMouseLeave
                        }
                    }, [e("a", {
                        staticClass: "nav-link dropdown-toggle",
                        attrs: {
                            href: "#",
                            id: "navbarDropdown2",
                            role: "button",
                            "data-bs-toggle": "dropdown",
                            "aria-expanded": "false"
                        }
                    }, [t._v("\n            pages\n          ")]), t._v(" "), e("ul", {
                        staticClass: "dropdown-menu",
                        attrs: {
                            "aria-labelledby": "navbarDropdown1"
                        }
                    }, [e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/page-about-app"
                        }
                    }, [t._v("about")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/page-product-app"
                        }
                    }, [t._v("product")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/page-services-app"
                        }
                    }, [t._v("services")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/page-shop-app"
                        }
                    }, [t._v("shop")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/page-single-project-app"
                        }
                    }, [t._v("single project")])], 1)])]), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("NuxtLink", {
                        staticClass: "nav-link",
                        attrs: {
                            to: "/page-portfolio-app"
                        }
                    }, [t._v("\n            portfolio\n          ")])], 1), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("NuxtLink", {
                        staticClass: "nav-link",
                        attrs: {
                            to: "/page-blog-app"
                        }
                    }, [t._v("\n            blog\n          ")])], 1), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("NuxtLink", {
                        staticClass: "nav-link",
                        attrs: {
                            to: "/page-contact-app"
                        }
                    }, [t._v("\n            contact\n          ")])], 1)]), t._v(" "), e("div", {
                        staticClass: "nav-side"
                    }, [e("div", {
                        staticClass: "d-flex align-items-center"
                    }, [e("NuxtLink", {
                        staticClass: "btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold",
                        attrs: {
                            to: "/page-contact-5"
                        }
                    }, [e("span", [e("i", {
                        staticClass: "bi bi-chat-dots me-1"
                    }), t._v("\n              Let’s Chat!\n            ")])])], 1)])])])])
                }), [function() {
                    var t = this._self._c;
                    return t("a", {
                        staticClass: "navbar-brand",
                        attrs: {
                            href: "#"
                        }
                    }, [t("img", {
                        attrs: {
                            src: "/assets/img/logo_home6.png",
                            alt: ""
                        }
                    })])
                }, function() {
                    var t = this._self._c;
                    return t("button", {
                        staticClass: "navbar-toggler",
                        attrs: {
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#navbarSupportedContent",
                            "aria-controls": "navbarSupportedContent",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation"
                        }
                    }, [t("span", {
                        staticClass: "navbar-toggler-icon"
                    })])
                }], !1, null, null, null).exports,
                d = (n(19), n(34), n(282)),
                v = {
                    props: ["rtl"],
                    data: function() {
                        return {
                            scrollToSection: d.a
                        }
                    },
                    methods: {
                        ScrollToSection: function(t) {
                            this.scrollToSection(t)
                        }
                    },
                    mounted: function() {
                        Object(o.a)(this.$refs.navbarRef);
                        var t = document.querySelectorAll("[data-scroll-index]");
                        window.addEventListener("scroll", (function() {
                            t.forEach((function(section) {
                                var t, e, n, o, l = section.getAttribute("data-scroll-index"),
                                    r = section.getBoundingClientRect().top,
                                    c = section.getBoundingClientRect().height,
                                    d = window.innerHeight,
                                    v = -parseInt(window.getComputedStyle(section, null).getPropertyValue("padding-top")) - 300;
                                (c > d && (v = -parseInt(window.getComputedStyle(section, null).getPropertyValue("padding-top")) - (300 + c - d)), d - r > 300 && r > v) ? null === (t = document.querySelector('[data-scroll-nav="'.concat(l, '"]'))) || void 0 === t || null === (e = t.classList) || void 0 === e || e.add("active"): null === (n = document.querySelector('[data-scroll-nav="'.concat(l, '"]'))) || void 0 === n || null === (o = n.classList) || void 0 === o || o.remove("active")
                            }))
                        }))
                    }
                },
                m = {
                    props: ["rtl", "isOnePage"],
                    components: {
                        Navbar: c,
                        OnePageNavbar: Object(r.a)(v, (function() {
                            var t = this,
                                e = t._self._c;
                            return e("nav", {
                                ref: "navbarRef",
                                staticClass: "navbar navbar-expand-lg navbar-light style-6"
                            }, [e("div", {
                                staticClass: "container-fluid"
                            }, [e("a", {
                                staticClass: "navbar-brand",
                                attrs: {
                                    href: "#",
                                    "data-scroll-nav": "0"
                                },
                                on: {
                                    click: t.ScrollToSection
                                }
                            }, [e("img", {
                                attrs: {
                                    src: "/assets/img/logo_home6.png",
                                    alt: ""
                                }
                            })]), t._v(" "), t._m(0), t._v(" "), e("div", {
                                staticClass: "collapse navbar-collapse",
                                attrs: {
                                    id: "navbarSupportedContent"
                                }
                            }, [e("ul", {
                                staticClass: "navbar-nav m-auto mb-2 mb-lg-0"
                            }, [e("li", {
                                staticClass: "nav-item dropdown"
                            }, [e("a", {
                                staticClass: "nav-link dropdown-toggle",
                                attrs: {
                                    "data-scroll-nav": "1"
                                },
                                on: {
                                    click: t.ScrollToSection
                                }
                            }, [t._v("\n            " + t._s(t.rtl ? "من نحن" : "about us") + "\n          ")])]), t._v(" "), e("li", {
                                staticClass: "nav-item"
                            }, [e("a", {
                                staticClass: "nav-link",
                                attrs: {
                                    "data-scroll-nav": "2"
                                },
                                on: {
                                    click: t.ScrollToSection
                                }
                            }, [t._v("\n            " + t._s(t.rtl ? "خدماتنا" : "services") + "\n          ")])]), t._v(" "), e("li", {
                                staticClass: "nav-item"
                            }, [e("a", {
                                staticClass: "nav-link",
                                attrs: {
                                    "data-scroll-nav": "3"
                                },
                                on: {
                                    click: t.ScrollToSection
                                }
                            }, [t._v("\n            " + t._s(t.rtl ? "مشاريعنا" : "portfolio") + "\n          ")])]), t._v(" "), e("li", {
                                staticClass: "nav-item"
                            }, [e("a", {
                                staticClass: "nav-link",
                                attrs: {
                                    "data-scroll-nav": "4"
                                },
                                on: {
                                    click: t.ScrollToSection
                                }
                            }, [t._v("\n            " + t._s(t.rtl ? "لماذا نحن" : "why us") + "\n          ")])]), t._v(" "), e("li", {
                                staticClass: "nav-item"
                            }, [e("a", {
                                staticClass: "nav-link",
                                attrs: {
                                    "data-scroll-nav": "5"
                                },
                                on: {
                                    click: t.ScrollToSection
                                }
                            }, [t._v("\n            " + t._s(t.rtl ? "اراء العملاء" : "testimonials") + "\n          ")])]), t._v(" "), e("li", {
                                staticClass: "nav-item"
                            }, [e("a", {
                                staticClass: "nav-link",
                                attrs: {
                                    "data-scroll-nav": "6"
                                },
                                on: {
                                    click: t.ScrollToSection
                                }
                            }, [t._v("\n            " + t._s(t.rtl ? "عملائنا" : "clients") + "\n          ")])]), t._v(" "), e("li", {
                                staticClass: "nav-item"
                            }, [e("a", {
                                staticClass: "nav-link",
                                attrs: {
                                    "data-scroll-nav": "7"
                                },
                                on: {
                                    click: t.ScrollToSection
                                }
                            }, [t._v("\n            " + t._s(t.rtl ? "فريق العمل" : "team") + "\n          ")])]), t._v(" "), e("li", {
                                staticClass: "nav-item"
                            }, [e("a", {
                                staticClass: "nav-link",
                                attrs: {
                                    "data-scroll-nav": "8"
                                },
                                on: {
                                    click: t.ScrollToSection
                                }
                            }, [t._v("\n            " + t._s(t.rtl ? "المدونة" : "blog") + "\n          ")])])]), t._v(" "), e("div", {
                                staticClass: "nav-side"
                            }, [e("div", {
                                staticClass: "d-flex align-items-center"
                            }, [e("a", {
                                staticClass: "btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold",
                                attrs: {
                                    href: "#0",
                                    "data-scroll-nav": "9"
                                },
                                on: {
                                    click: t.ScrollToSection
                                }
                            }, [e("span", [e("i", {
                                staticClass: "bi bi-chat-dots me-2"
                            }), t._v("\n                " + t._s(t.rtl ? "لنتحدث الأن !" : "Let’s Chat!") + "\n            ")])])])])])])])
                        }), [function() {
                            var t = this._self._c;
                            return t("button", {
                                staticClass: "navbar-toggler",
                                attrs: {
                                    type: "button",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": "#navbarSupportedContent",
                                    "aria-controls": "navbarSupportedContent",
                                    "aria-expanded": "false",
                                    "aria-label": "Toggle navigation"
                                }
                            }, [t("span", {
                                staticClass: "navbar-toggler-icon"
                            })])
                        }], !1, null, null, null).exports,
                        NavbarRTL: n(274).a
                    }
                },
                f = Object(r.a)(m, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("header", {
                        staticClass: "style-6"
                    }, [e("div", {
                        staticClass: "content",
                        attrs: {
                            "data-scroll-index": "0"
                        }
                    }, [t.isOnePage ? e("OnePageNavbar", {
                        attrs: {
                            rtl: t.rtl
                        }
                    }) : e("div", [t.rtl ? e("NavbarRTL") : e("Navbar")], 1), t._v(" "), e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row justify-content-center"
                    }, [e("div", {
                        staticClass: "col-lg-8"
                    }, [e("div", {
                        staticClass: "info"
                    }, [e("h6", [t._v(t._s(t.rtl ? "Itekseo للتسويق الألكترونى" : "itekseo agency"))]), t._v(" "), e("h1", [t.rtl ? [t._v("\n                التسويق الالكترونى هو "), t._m(0)] : [t._v("\n                SEO Analytics and Marketing for "), t._m(1)]], 2), t._v(" "), e("div", {
                        staticClass: "text"
                    }, [t.rtl ? [t._v("\n                  ضمان أفضل عائد على الاستثمار لمتطلبات حملة تحسين محركات البحث (SEO) الخاصة بك. "), e("br"), t._v("\n                احصل على تحليل SEO المجاني الخاص بك\n              ")] : [t._v("\n                Ensuring the best return on investment for your bespoke SEO campaign requirement. "), e("br"), t._v(" Get your free SEO Analysis\n              ")]], 2), t._v(" "), e("form", {
                        staticClass: "form",
                        attrs: {
                            action: "contact.php",
                            method: "post"
                        }
                    }, [e("div", {
                        staticClass: "form-group"
                    }, [e("i", {
                        staticClass: "fas fa-globe me-2"
                    }), t._v(" "), e("input", {
                        attrs: {
                            type: "text",
                            name: "website",
                            placeholder: t.rtl ? "رابط موقعك الالكترونى" : "https://yoursite.com"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "form-group"
                    }, [e("i", {
                        staticClass: "far fa-envelope me-2"
                    }), t._v(" "), e("input", {
                        attrs: {
                            type: "text",
                            name: "email",
                            placeholder: t.rtl ? "البريد الالكترونى" : "youremail@domain.com"
                        }
                    })]), t._v(" "), e("a", {
                        staticClass: "btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold",
                        attrs: {
                            href: "#"
                        }
                    }, [e("span", [t._v("\n                  " + t._s(t.rtl ? "أبدأ الأن" : "Analyze Now") + " "), e("i", {
                        staticClass: "bi bi-arrow-right ms-1"
                    })])])])])])])])], 1), t._v(" "), e("img", {
                        staticClass: "hand-mega slide_up_down",
                        attrs: {
                            src: "/assets/img/header/hand_megaphone.png",
                            alt: ""
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "target-3d rotate-center",
                        attrs: {
                            src: "/assets/img/header/target_3d.png",
                            alt: ""
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "head6-rating scale_up_down",
                        attrs: {
                            src: "/assets/img/header/head6_rating.png",
                            alt: ""
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "head6-charts scale_up_down",
                        attrs: {
                            src: "/assets/img/header/header5_linechart.png",
                            alt: ""
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "head6-rocket",
                        attrs: {
                            src: "/assets/img/header/rocket.png",
                            alt: ""
                        }
                    })])
                }), [function() {
                    var t = this._self._c;
                    return t("span", [t("small", [this._v(" المستقبل ")])])
                }, function() {
                    var t = this._self._c;
                    return t("span", [t("small", [this._v("Startup")])])
                }], !1, null, null, null);
            e.a = f.exports
        },
        322: function(t, e, n) {
            "use strict";
            var o = n(469),
                l = n(470),
                r = {
                    props: ["rtl", "blog", "isCenter"]
                },
                c = n(73),
                d = {
                    props: ["rtl"],
                    computed: {
                        blogsData: function() {
                            return this.rtl ? l : o
                        }
                    },
                    components: {
                        BlogCard: Object(c.a)(r, (function() {
                            var t = this,
                                e = t._self._c;
                            return e("div", {
                                class: "blog-card ".concat(t.isCenter ? "card-center" : "", " style-6")
                            }, [t.rtl ? e("NuxtLink", {
                                staticClass: "img img-cover d-block",
                                attrs: {
                                    to: "rtl-page-single-post"
                                }
                            }, [e("img", {
                                attrs: {
                                    src: t.blog.cover,
                                    alt: ""
                                }
                            })]) : e("NuxtLink", {
                                staticClass: "img img-cover d-block",
                                attrs: {
                                    to: "/page-single-post-5"
                                }
                            }, [e("img", {
                                attrs: {
                                    src: t.blog.cover,
                                    alt: ""
                                }
                            })]), t._v(" "), e("div", {
                                staticClass: "info"
                            }, [e("div", {
                                staticClass: "date"
                            }, [e("a", {
                                staticClass: "small color-blue6 fs-12px pe-3 border-end brd-gray text-uppercase fw-bold me-3",
                                attrs: {
                                    href: "#"
                                }
                            }, [t._v(" news ")]), t._v(" "), t.rtl ? e("small", {
                                staticClass: "op-6 fs-12px"
                            }, [e("i", {
                                staticClass: "far fa-clock"
                            }), t._v(" تم النشر ")]) : e("small", {
                                staticClass: "op-6 fs-12px"
                            }, [e("i", {
                                staticClass: "far fa-clock"
                            }), t._v(" Posted on ")]), t._v(" "), e("a", {
                                staticClass: "fs-12px ms-1",
                                attrs: {
                                    href: "#"
                                }
                            }, [t._v(t._s(t.blog.time))])]), t._v(" "), e("h4", {
                                staticClass: "blog-title"
                            }, [t.rtl ? e("NuxtLink", {
                                attrs: {
                                    to: "rtl-page-single-post"
                                }
                            }, [t._v(t._s(t.blog.title))]) : e("NuxtLink", {
                                attrs: {
                                    to: "/page-single-post-5"
                                }
                            }, [t._v(t._s(t.blog.title))])], 1), t._v(" "), e("div", {
                                staticClass: "text"
                            }, [t._v("\n      " + t._s(t.blog.short_desc) + " [...]\n    ")]), t._v(" "), e("div", {
                                staticClass: "d-flex small mt-20 align-items-center justify-content-between op-9"
                            }, [e("div", {
                                staticClass: "l_side d-flex align-items-center"
                            }, [e("span", {
                                staticClass: "icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue2 p-2 me-2 text-white"
                            }, [t._v("\n          " + t._s(t.blog.placeholderImageText) + "\n        ")]), t._v(" "), e("a", {
                                attrs: {
                                    href: "#"
                                }
                            }, [t.rtl ? e("small", {
                                staticClass: "text-muted me-1"
                            }, [t._v("بواسطة")]) : e("small", {
                                staticClass: "text-muted me-1"
                            }, [t._v("By")]), t._v(" \n          " + t._s(t.blog.author) + "\n        ")])]), t._v(" "), e("div", {
                                staticClass: "r-side mt-1"
                            }, [e("i", {
                                staticClass: "bi bi-chat-left-text me-1"
                            }), t._v(" "), e("a", {
                                attrs: {
                                    href: "#"
                                }
                            }, [t._v(t._s(t.blog.comments))]), t._v(" "), e("i", {
                                staticClass: "bi bi-eye ms-4 me-1"
                            }), t._v(" "), e("a", {
                                attrs: {
                                    href: "#"
                                }
                            }, [t._v(t._s(t.blog.views))])])])])], 1)
                        }), [], !1, null, null, null).exports
                    }
                },
                v = Object(c.a)(d, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "blog section-padding style-6",
                        attrs: {
                            "data-scroll-index": "8"
                        }
                    }, [e("div", {
                        staticClass: "container"
                    }, [t.rtl ? e("div", {
                        staticClass: "section-head mb-70 style-6 text-center"
                    }, [t._m(0), t._v(" "), e("p", {
                        staticClass: "color-666"
                    }, [t._v("احصل على أحدث المقالات من صحافتنا ، ناقش وشارك")])]) : e("div", {
                        staticClass: "section-head mb-70 style-6 text-center"
                    }, [t._m(1), t._v(" "), e("p", {
                        staticClass: "color-666"
                    }, [t._v("Get the latest articles from our press, discuss & share")])]), t._v(" "), e("div", {
                        staticClass: "content"
                    }, t._l(t.blogsData, (function(n, o) {
                        return e("BlogCard", {
                            key: o,
                            attrs: {
                                blog: n,
                                isCenter: 1 === o,
                                rtl: t.rtl
                            }
                        })
                    })), 1)])])
                }), [function() {
                    var t = this,
                        e = t._self._c;
                    return e("h2", {
                        staticClass: "mb-20"
                    }, [t._v(" أحدث الأخبار من "), e("span", [e("small", [t._v("مجلتنا")])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("h2", {
                        staticClass: "mb-20"
                    }, [t._v(" Latest from our "), e("span", {
                        staticClass: "ms-1"
                    }, [e("small", [t._v(" magazine ")])])])
                }], !1, null, null, null);
            e.a = v.exports
        },
        324: function(t, e, n) {
            "use strict";
            var o = {
                    components: {
                        ModalVideo: n(271).a
                    },
                    data: function() {
                        return {
                            videoIsOpen: !1
                        }
                    },
                    props: ["rtl"],
                    methods: {
                        openVideo: function(t) {
                            t.preventDefault(), this.videoIsOpen = !this.videoIsOpen
                        }
                    }
                },
                l = n(73),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "about style-6",
                        attrs: {
                            "data-scroll-index": "1"
                        }
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "content section-padding"
                    }, [e("div", {
                        staticClass: "row justify-content-between align-items-center"
                    }, [e("div", {
                        staticClass: "col-lg-5"
                    }, [e("div", {
                        staticClass: "info"
                    }, [e("div", {
                        staticClass: "section-head mb-40 style-6"
                    }, [e("h2", [t.rtl ? [t._v("قم بترقية مشاريعك "), e("br"), t._v(" الى "), t._m(0)] : [t._v("Boost your business up to "), t._m(1)]], 2)]), t._v(" "), e("div", {
                        staticClass: "text"
                    }, [t._v("\n              " + t._s(t.rtl ? "مثل أي وكالة عظيمة ، نحن الأفضل بنتاجئنا التي قدمناها لعملنا الأخير. يلتزم مطورونا بالحفاظ على أعلى معايير الويب حتى يتحمل موقعك اختبار الزمن." : "Like any great agency, we are only as good as the result we deliver of our recent work. Our developers are committed to maintaining the highest web standards so that your site will withstand the test of time.") + "\n            ")]), t._v(" "), e("div", {
                        staticClass: "btns d-flex align-items-center mt-60"
                    }, [e("NuxtLink", {
                        staticClass: "btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold me-3",
                        attrs: {
                            to: t.rtl ? "/rtl-page-about" : "/page-about-5"
                        }
                    }, [e("span", [t._v("\n                  " + t._s(t.rtl ? "من نحن" : "About Us") + " "), e("i", {
                        staticClass: "bi bi-arrow-right ms-1"
                    })])]), t._v(" "), e("a", {
                        staticClass: "vid-btn",
                        attrs: {
                            href: "https://youtu.be/pGbIOC83-So?t=21",
                            "data-lity": ""
                        },
                        on: {
                            click: t.openVideo
                        }
                    }, [e("i", {
                        staticClass: "bi bi-play"
                    }), t._v(" "), e("span", [t._v("\n                  " + t._s(t.rtl ? "مشاهدة" : "See Our") + " "), e("br"), t._v(" " + t._s(t.rtl ? "اخر عروضنا" : "Showreels") + "\n                ")])])], 1)])]), t._v(" "), t._m(2)])])]), t._v(" "), e("img", {
                        staticClass: "bubbles rotate-center",
                        attrs: {
                            src: "/assets/img/about/about_s6_bubbles.png",
                            alt: ""
                        }
                    }), t._v(" "), e("ModalVideo", {
                        attrs: {
                            channel: "youtube",
                            videoId: "pGbIOC83-So",
                            isOpen: t.videoIsOpen
                        },
                        on: {
                            "update:isOpen": function(e) {
                                t.videoIsOpen = e
                            },
                            "update:is-open": function(e) {
                                t.videoIsOpen = e
                            }
                        }
                    })], 1)
                }), [function() {
                    var t = this._self._c;
                    return t("span", [t("small", [this._v("أعلى المستويات")])])
                }, function() {
                    var t = this._self._c;
                    return t("span", [t("small", [this._v("high level")])])
                }, function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "col-lg-6"
                    }, [t("div", {
                        staticClass: "img"
                    }, [t("img", {
                        attrs: {
                            src: "/assets/img/about/superman_3d.png",
                            alt: ""
                        }
                    })])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        325: function(t, e, n) {
            "use strict";
            var o = n(458),
                l = n(459),
                r = {
                    props: ["rtl"],
                    computed: {
                        servicesData: function() {
                            return this.rtl ? l : o
                        }
                    },
                    data: function() {
                        return {
                            swiperOptions: {
                                slidesPerView: 6,
                                centeredSlides: !0,
                                spaceBetween: 0,
                                speed: 1e3,
                                pagination: !1,
                                navigation: !1,
                                mousewheel: !1,
                                keyboard: !0,
                                autoplay: {
                                    delay: 4e3
                                },
                                loop: !0,
                                breakpoints: {
                                    0: {
                                        slidesPerView: 1
                                    },
                                    480: {
                                        slidesPerView: 1
                                    },
                                    787: {
                                        slidesPerView: 2
                                    },
                                    991: {
                                        slidesPerView: 4
                                    },
                                    1200: {
                                        slidesPerView: 6
                                    }
                                }
                            }
                        }
                    }
                },
                c = n(73),
                component = Object(c.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "services section-padding style-6",
                        attrs: {
                            "data-scroll-index": "2"
                        }
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "section-head mb-40 text-center style-6"
                    }, [t.rtl ? [t._m(0), t._v(" "), e("p", [t._v("تتضمن استراتيجيتنا التطور المستمر ، لضمان إنتاج مُحسنات محركات بحث استثنائية لـلمشاريع.")])] : [t._m(1), t._v(" "), e("p", [t._v("Our strategy includes consistently evolving, to ensure we’re producing exceptional SEO for business.")])]], 2)]), t._v(" "), e("div", {
                        staticClass: "content"
                    }, [e("div", {
                        staticClass: "services-slider position-relative style-6"
                    }, [e("swiper", {
                        staticClass: "swiper-container",
                        attrs: {
                            options: t.swiperOptions
                        }
                    }, t._l(t.servicesData, (function(n, o) {
                        return e("swiper-slide", {
                            key: o
                        }, [e("NuxtLink", {
                            staticClass: "service-card style-6",
                            attrs: {
                                to: t.rtl ? "rtl-page-services" : "page-services-5"
                            }
                        }, [e("div", {
                            staticClass: "icon"
                        }, [e("img", {
                            attrs: {
                                src: n.img,
                                alt: ""
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "info"
                        }, [e("h5", [t._v(t._s(n.info))]), t._v(" "), e("div", {
                            staticClass: "text"
                        }, [t._v("\n                  " + t._s(n.text) + "\n                ")])])])], 1)
                    })), 1)], 1), t._v(" "), e("div", {
                        staticClass: "text-center"
                    }, [e("NuxtLink", {
                        staticClass: "btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold me-3",
                        attrs: {
                            to: t.rtl ? "/rtl-page-services" : "page-services-5"
                        }
                    }, [e("span", [t._v(t._s(t.rtl ? "مشاهدة جميع خدماتنا" : "See All Our Services") + " "), e("i", {
                        staticClass: "bi bi-arrow-right ms-1"
                    })])])], 1)])])
                }), [function() {
                    var t = this,
                        e = t._self._c;
                    return e("h2", {
                        staticClass: "mb-20"
                    }, [t._v("\n          استكشف ماذا نقدم من "), e("span", [e("small", [t._v("خدمات")])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("h2", {
                        staticClass: "mb-20"
                    }, [t._v("\n          Discover our top "), e("span", [e("small", [t._v("services")])])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        326: function(t, e, n) {
            "use strict";
            var o = n(460),
                l = n(461),
                r = {
                    props: ["rtl"],
                    computed: {
                        data: function() {
                            return this.rtl ? l : o
                        }
                    },
                    data: function() {
                        return {
                            swiperOptions: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                                speed: 1e3,
                                pagination: {
                                    el: ".slider-3items .swiper-pagination",
                                    clickable: !0
                                },
                                navigation: {
                                    nextEl: ".slider-3items .swiper-button-next",
                                    prevEl: ".slider-3items .swiper-button-prev"
                                },
                                mousewheel: !1,
                                keyboard: !0,
                                autoplay: {
                                    delay: 4e3
                                },
                                loop: !0,
                                breakpoints: {
                                    0: {
                                        slidesPerView: 1
                                    },
                                    480: {
                                        slidesPerView: 1
                                    },
                                    787: {
                                        slidesPerView: 2
                                    },
                                    991: {
                                        slidesPerView: 2
                                    },
                                    1200: {
                                        slidesPerView: 3
                                    }
                                }
                            }
                        }
                    }
                },
                c = n(73),
                component = Object(c.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "projects style-6",
                        attrs: {
                            "data-scroll-index": "3"
                        }
                    }, [e("div", {
                        staticClass: "content section-padding"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "section-head mb-40 d-flex justify-content-between align-items-center style-6"
                    }, [t.rtl ? e("h2", {
                        staticClass: "mb-20"
                    }, [t._v("اخر "), t._m(0)]) : e("h2", {
                        staticClass: "mb-20"
                    }, [t._v("Features "), t._m(1)]), t._v(" "), t.rtl ? e("NuxtLink", {
                        staticClass: "small text-decoration-underline text-uppercase",
                        attrs: {
                            to: "rtl-page-portfolio"
                        }
                    }, [t._v("\n          مشاهدة جميع المشاريع\n        ")]) : e("NuxtLink", {
                        staticClass: "small text-decoration-underline text-uppercase",
                        attrs: {
                            to: "/page-portfolio-5"
                        }
                    }, [t._v("\n          See All Projects\n        ")])], 1), t._v(" "), e("div", {
                        staticClass: "slider-3items slider-style-6"
                    }, [e("swiper", {
                        staticClass: "swiper-container pb-70",
                        attrs: {
                            options: t.swiperOptions
                        }
                    }, [t._l(t.data, (function(n, o) {
                        return e("swiper-slide", {
                            key: o
                        }, [e("div", {
                            staticClass: "project-card style-6"
                        }, [e("div", {
                            staticClass: "img"
                        }, [e("img", {
                            attrs: {
                                src: n.image,
                                alt: ""
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "info"
                        }, [e("h3", {
                            staticClass: "title"
                        }, [t.rtl ? e("NuxtLink", {
                            attrs: {
                                to: "/rtl-page-single-project"
                            }
                        }, [t._v(t._s(n.title))]) : e("NuxtLink", {
                            attrs: {
                                to: "/page-single-project-5"
                            }
                        }, [t._v(t._s(n.title))])], 1), t._v(" "), e("small", {
                            staticClass: "color-blue6"
                        }, t._l(n.type, (function(o, i) {
                            return e("span", {
                                key: i
                            }, [e("a", {
                                attrs: {
                                    href: "#"
                                }
                            }, [t._v(t._s(o))]), t._v(" "), i !== n.type.length - 1 ? [t._v(" ")] : t._e()], 2)
                        })), 0), t._v(" "), e("div", {
                            staticClass: "text"
                        }, [t._v("\n                      " + t._s(n.text) + "\n                    ")]), t._v(" "), e("div", {
                            staticClass: "tags"
                        }, t._l(n.tags, (function(n, i) {
                            return e("span", {
                                key: i,
                                staticClass: "me-1"
                            }, [e("a", {
                                attrs: {
                                    href: "#"
                                }
                            }, [t._v(t._s(n))])])
                        })), 0)])])])
                    })), t._v("\n            ))\n          }\n        ")], 2), t._v(" "), e("div", {
                        staticClass: "swiper-pagination"
                    }), t._v(" "), e("div", {
                        staticClass: "swiper-button-next"
                    }), t._v(" "), e("div", {
                        staticClass: "swiper-button-prev"
                    })], 1)])])])
                }), [function() {
                    var t = this._self._c;
                    return t("span", [t("small", [this._v("المشاريع")])])
                }, function() {
                    var t = this._self._c;
                    return t("span", [t("small", [this._v("Projects")])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        327: function(t, e, n) {
            "use strict";
            var o = n(462),
                l = n(463),
                r = {
                    props: ["rtl"],
                    computed: {
                        data: function() {
                            return this.rtl ? l : o
                        }
                    }
                },
                c = n(73),
                component = Object(c.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "choose-us section-padding style-6",
                        attrs: {
                            "data-scroll-index": "4"
                        }
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row justify-content-between"
                    }, [t._m(0), t._v(" "), e("div", {
                        staticClass: "col-lg-5"
                    }, [e("div", {
                        staticClass: "info"
                    }, [e("div", {
                        staticClass: "section-head mb-20 style-6"
                    }, [t.rtl ? e("h2", [t._v(" لماذا تختار "), t._m(1)]) : e("h2", [t._v("Why choose "), t._m(2)])]), t._v(" "), e("div", {
                        staticClass: "text mb-50"
                    }, [t.rtl ? [t._v("نحن متحمسون لعملنا. يظل المصممون لدينا في الصدارة لتقديم تصميمات مواقع ويب جذابة وسهلة الاستخدام لجعل عملك متميزًا")] : [t._v("We are passionate about our work. Our designers stay ahead of the curve to provide engaging and user-friendly website designs to make your business stand out")]], 2), t._v(" "), e("ul", t._l(t.data, (function(n, o) {
                        return e("li", {
                            key: o,
                            class: "d-flex ".concat(o !== t.data.length - 1 ? "mb-40" : "")
                        }, [e("small", {
                            staticClass: "icon-60 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-4 flex-shrink-0"
                        }, [e("img", {
                            attrs: {
                                src: n.image,
                                alt: ""
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "inf"
                        }, [e("h5", [t._v(t._s(n.title))]), t._v(" "), e("p", {
                            staticClass: "fs-12px color-666 mt-2"
                        }, [t._v("\n                  " + t._s(n.text) + "\n                ")])])])
                    })), 0)])])])]), t._v(" "), e("img", {
                        staticClass: "bubbles rotate-center",
                        attrs: {
                            src: "/assets/img/about/about_s6_bubbles.png",
                            alt: ""
                        }
                    })])
                }), [function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "col-lg-6"
                    }, [t("div", {
                        staticClass: "img"
                    }, [t("img", {
                        attrs: {
                            src: "/assets/img/choose_us/man_arrow.png",
                            alt: ""
                        }
                    })])])
                }, function() {
                    var t = this._self._c;
                    return t("span", [t("small", [this._v("Itekseo")])])
                }, function() {
                    var t = this._self._c;
                    return t("span", [t("small", [this._v("Itekseo")])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        328: function(t, e, n) {
            "use strict";
            var o = {
                    props: ["rtl"],
                    data: function() {
                        return {
                            swiperOptions: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                                speed: 1e3,
                                pagination: !1,
                                navigation: {
                                    nextEl: ".testi-slider.style-6 .swiper-button-next",
                                    prevEl: ".testi-slider.style-6 .swiper-button-prev"
                                },
                                mousewheel: !1,
                                keyboard: !0,
                                autoplay: {
                                    delay: 4e3
                                },
                                loop: !0
                            }
                        }
                    }
                },
                l = n(73),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "testimonials style-6",
                        attrs: {
                            "data-scroll-index": "5"
                        }
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row gx-0 align-items-center justify-content-between"
                    }, [e("div", {
                        staticClass: "col-lg-4"
                    }, [e("div", {
                        staticClass: "testi-slider style-6 slider-style-6"
                    }, [t._m(0), t._v(" "), e("swiper", {
                        staticClass: "swiper-container",
                        attrs: {
                            options: t.swiperOptions
                        }
                    }, [e("swiper-slide", [e("div", {
                        staticClass: "testi-card"
                    }, [e("div", {
                        staticClass: "text"
                    }, [t._v("\n                  " + t._s(t.rtl ? "لا أعرف ماذا أقول غير ذلك ، هذا شيء لم تره من قبل. تصميم فريد وخفيف الوزن ودعم متميز. من دواعي سروري دائما Itekseo العمل!" : "I don’t know what else to say, this is something that you haven’t seen before. Unique design, lightweight, and outstanding support. Itekseo always a pleasure to work!") + "\n                ")]), t._v(" "), e("div", {
                        staticClass: "author mt-30"
                    }, [t.rtl ? [e("span", {
                        staticClass: "color-000 fw-bold text-capitalize"
                    }, [t._v("كونور مارتينيلى")]), t._v(" "), e("p", {
                        staticClass: "fs-10px"
                    }, [t._v("مدير في  "), e("a", {
                        staticClass: "text-decoration-underline color-blue6",
                        attrs: {
                            href: "#"
                        }
                    }, [t._v("فندق ومنتجع ايكولاند ")])])] : [e("span", {
                        staticClass: "color-000 fw-bold text-capitalize"
                    }, [t._v("Conor Martinelli")]), t._v(" "), e("p", {
                        staticClass: "fs-10px"
                    }, [t._v("Director at  "), e("a", {
                        staticClass: "text-decoration-underline color-blue6",
                        attrs: {
                            href: "#"
                        }
                    }, [t._v(" Ecoland Resort & Hotel")])])]], 2)])])], 1), t._v(" "), e("div", {
                        staticClass: "swiper-button-next"
                    }), t._v(" "), e("div", {
                        staticClass: "swiper-button-prev"
                    })], 1)]), t._v(" "), t._m(1)])])])
                }), [function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "icon mb-50"
                    }, [t("i", {
                        staticClass: "fas fa-quote-right"
                    })])
                }, function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "col-lg-6"
                    }, [t("div", {
                        staticClass: "img"
                    }, [t("img", {
                        attrs: {
                            src: "/assets/img/testimonials/users_6.png",
                            alt: ""
                        }
                    }), this._v(" "), t("img", {
                        staticClass: "bubbls rotate-center",
                        attrs: {
                            src: "/assets/img/testimonials/bubbls.png",
                            alt: ""
                        }
                    })])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        329: function(t, e, n) {
            "use strict";
            var o = n(464),
                l = {
                    props: ["rtl"],
                    data: function() {
                        return {
                            clients: o
                        }
                    }
                },
                r = n(73),
                component = Object(r.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "clients style-5",
                        attrs: {
                            "data-scroll-index": "6"
                        }
                    }, [e("div", {
                        staticClass: "container"
                    }, [t.rtl ? e("div", {
                        staticClass: "section-head mb-70 style-6 text-center"
                    }, [t._m(0), t._v(" "), e("p", {
                        staticClass: "color-666"
                    }, [t._v("أكثر من 15000 شركة وشريك موثوق بهم واختيار Itekseo")])]) : e("div", {
                        staticClass: "section-head mb-70 style-6 text-center"
                    }, [t._m(1), t._v(" "), e("p", {
                        staticClass: "color-666"
                    }, [t._v("More 15,000 Companies & partners trusted & choice Itekseo")])]), t._v(" "), e("div", {
                        staticClass: "content d-flex flex-wrap"
                    }, t._l(t.clients, (function(t, n) {
                        return e("a", {
                            key: n,
                            staticClass: "img img-card",
                            attrs: {
                                href: "#"
                            }
                        }, [e("img", {
                            attrs: {
                                src: t,
                                alt: ""
                            }
                        })])
                    })), 0)])])
                }), [function() {
                    var t = this,
                        e = t._self._c;
                    return e("h2", {
                        staticClass: "mb-20"
                    }, [t._v(" يثق بنا الاف "), e("span", [e("small", [t._v("المسثمرين")])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("h2", {
                        staticClass: "mb-20"
                    }, [t._v(" Trusted by thoudsands\n        "), e("span", [e("small", [t._v(" Businesss ")])])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        330: function(t, e, n) {
            "use strict";
            n(19), n(34);
            var o = n(283),
                l = n.n(o),
                r = n(465),
                c = n(466),
                d = {
                    props: ["rtl"],
                    components: {
                        countTo: l.a
                    },
                    computed: {
                        Numbers: function() {
                            return this.rtl ? c : r
                        }
                    },
                    data: function() {
                        return {
                            position: {
                                from: 4300,
                                to: 4650
                            },
                            restart: !0
                        }
                    },
                    mounted: function() {
                        var t = this;
                        window.addEventListener("scroll", (function() {
                            if (t.position) {
                                var e = t.position,
                                    n = e.from,
                                    o = e.to;
                                window.scrollY > n && window.scrollY < o && t.restart && (t.$refs.counter.forEach((function(t) {
                                    return t.start()
                                })), t.restart = !1), window.scrollY < n && !t.restart && (t.restart = !0)
                            }
                        }))
                    }
                },
                v = n(73),
                component = Object(v.a)(d, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "numbers section-padding style-6"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "content"
                    }, [e("div", {
                        staticClass: "row"
                    }, t._l(t.Numbers, (function(n, o) {
                        return e("div", {
                            key: o,
                            staticClass: "col-lg-4"
                        }, [e("div", {
                            staticClass: "number-card style-6"
                        }, [e("h2", {
                            staticClass: "me-4"
                        }, [e("countTo", {
                            ref: "counter",
                            refInFor: !0,
                            staticClass: "counter",
                            attrs: {
                                startVal: 0,
                                endVal: n.value,
                                duration: 1500
                            }
                        }), t._v(" "), n.operator ? [t._v(" +")] : t._e()], 2), t._v(" "), e("div", {
                            staticClass: "text"
                        }, [t._v("\n              " + t._s(n.title.part1) + " "), e("br"), t._v(" " + t._s(n.title.part2) + "\n            ")])])])
                    })), 0)])])])
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        331: function(t, e, n) {
            "use strict";
            n(26);
            var o = n(467),
                l = n(468),
                r = {
                    props: ["rtl"],
                    computed: {
                        TeamMembers: function() {
                            return this.rtl ? l : o
                        }
                    }
                },
                c = n(73),
                component = Object(c.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "team section-padding style-6",
                        attrs: {
                            "data-scroll-index": "7"
                        }
                    }, [e("div", {
                        staticClass: "content"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row items align-items-end mb-50"
                    }, [e("div", {
                        staticClass: "col-lg-7"
                    }, [e("div", {
                        staticClass: "section-head mb-0 style-6"
                    }, [t.rtl ? e("h2", {
                        staticClass: "mb-0"
                    }, [t._v("\n              افضل "), t._m(0)]) : e("h2", {
                        staticClass: "mb-0"
                    }, [t._v("\n              Our "), t._m(1)])])]), t._v(" "), e("div", {
                        staticClass: "col-lg-5 text-end"
                    }, [t.rtl ? e("a", {
                        staticClass: "text-decoration-underline text-uppercase mb-4",
                        attrs: {
                            href: "#"
                        }
                    }, [t._v("مشاهدة الفريق بالكامل")]) : e("a", {
                        staticClass: "text-decoration-underline text-uppercase mb-4",
                        attrs: {
                            href: "#"
                        }
                    }, [t._v("See All our team")])])]), t._v(" "), e("div", {
                        staticClass: "row"
                    }, t._l(t.TeamMembers, (function(n, o) {
                        return e("div", {
                            key: o,
                            staticClass: "col-lg-3 col-sm-6"
                        }, [e("div", {
                            staticClass: "team-card mb-30 mb-lg-0 style-6"
                        }, [e("div", {
                            staticClass: "img img-cover"
                        }, [e("img", {
                            attrs: {
                                src: n.picture,
                                alt: ""
                            }
                        }), t._v(" "), t._m(2, !0)]), t._v(" "), e("div", {
                            staticClass: "info"
                        }, [e("a", {
                            staticClass: "d-block",
                            attrs: {
                                href: "#"
                            }
                        }, [e("h6", [t._v(t._s(n.name))])]), t._v(" "), e("small", [t._v(t._s(n.position))])])])])
                    })), 0)])])])
                }), [function() {
                    var t = this._self._c;
                    return t("span", [t("small", [this._v("المديرين")])])
                }, function() {
                    var t = this._self._c;
                    return t("span", [t("small", [this._v("Leaders")])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "social-icons"
                    }, [e("a", {
                        staticClass: "me-1",
                        attrs: {
                            href: "#"
                        }
                    }, [e("i", {
                        staticClass: "fa-brands fa-x-twitter"
                    })]), t._v(" "), e("a", {
                        staticClass: "me-1",
                        attrs: {
                            href: "#"
                        }
                    }, [e("i", {
                        staticClass: "fa-brands fa-tiktok"
                    })]), t._v(" "), e("a", {
                        staticClass: "me-1",
                        attrs: {
                            href: "#"
                        }
                    }, [e("i", {
                        staticClass: "fab fa-facebook-f"
                    })]), t._v(" "), e("a", {
                        staticClass: "me-1",
                        attrs: {
                            href: "#"
                        }
                    }, [e("i", {
                        staticClass: "fab fa-linkedin-in"
                    })]), t._v(" "), e("a", {
                        attrs: {
                            href: "#"
                        }
                    }, [e("i", {
                        staticClass: "fab fa-github"
                    })])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        332: function(t, e, n) {
            "use strict";
            n(26);
            var o = n(9),
                l = (n(58), n(19), {
                    props: ["rtl"],
                    data: function() {
                        return {
                            formData: {
                                name: "",
                                email: "",
                                phone: "",
                                website: "",
                                option: "",
                                message: ""
                            }
                        }
                    },
                    methods: {
                        handleFormOptionChange: function(t) {
                            this.formData.option = t.target.value
                        },
                        handleFormSubmit: function(t) {
                            var e = this;
                            return Object(o.a)(regeneratorRuntime.mark((function n() {
                                var o;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return t.preventDefault(), (o = new FormData).append("name", e.formData.name), o.append("email", e.formData.email), o.append("phone", e.formData.phone), o.append("website", e.formData.website), o.append("option", e.formData.option), o.append("message", e.formData.message), n.next = 10, fetch("/contact.php", {
                                                method: "POST",
                                                body: o
                                            }).catch((function(t) {
                                                return alert(t.message)
                                            }));
                                        case 10:
                                            if (n.sent.ok) {
                                                n.next = 13;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 13:
                                            alert("Form submitted successfully.");
                                        case 14:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        }
                    }
                }),
                r = n(73),
                component = Object(r.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "contact section-padding style-6",
                        attrs: {
                            "data-scroll-index": "9"
                        }
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "section-head mb-60 style-6 text-center"
                    }, [t.rtl ? e("h2", {
                        staticClass: "mb-20"
                    }, [t._v(" احصل على "), t._m(0)]) : e("h2", {
                        staticClass: "mb-20"
                    }, [t._v(" Get free "), t._m(1)]), t._v(" "), t.rtl ? e("p", {
                        staticClass: "color-666"
                    }, [t._v("سنتواصل معك مرة أخرى بعد استلام طلبك خلال 24 ساعة")]) : e("p", {
                        staticClass: "color-666"
                    }, [t._v("We will contact again after receive your request in 24h")])]), t._v(" "), e("div", {
                        staticClass: "content"
                    }, [e("div", {
                        staticClass: "row justify-content-center"
                    }, [e("div", {
                        staticClass: "col-lg-8"
                    }, [e("form", {
                        staticClass: "form",
                        attrs: {
                            action: "contact.php",
                            method: "post"
                        },
                        on: {
                            submit: t.handleFormSubmit
                        }
                    }, [e("p", {
                        staticClass: "text-center text-danger fs-12px mb-30"
                    }, [t._v(t._s(t.rtl ? "الحقل اللذى يحتوى على هذة العلامة اجبارى *" : "The field is required mark as *"))]), t._v(" "), e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col-lg-6"
                    }, [e("div", {
                        staticClass: "form-group mb-20"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.formData.name,
                            expression: "formData.name"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            type: "text",
                            name: "name",
                            placeholder: t.rtl ? "الأسم" : "Name"
                        },
                        domProps: {
                            value: t.formData.name
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.formData, "name", e.target.value)
                            }
                        }
                    })])]), t._v(" "), e("div", {
                        staticClass: "col-lg-6"
                    }, [e("div", {
                        staticClass: "form-group mb-20"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.formData.email,
                            expression: "formData.email"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            type: "text",
                            name: "email",
                            placeholder: t.rtl ? "البريد الألكترونى *" : "Email Address *"
                        },
                        domProps: {
                            value: t.formData.email
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.formData, "email", e.target.value)
                            }
                        }
                    })])]), t._v(" "), e("div", {
                        staticClass: "col-lg-6"
                    }, [e("div", {
                        staticClass: "form-group mb-20"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.formData.phone,
                            expression: "formData.phone"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            type: "text",
                            name: "phone",
                            placeholder: t.rtl ? "الهاتف (اختياري)" : "Phone Number (option)"
                        },
                        domProps: {
                            value: t.formData.phone
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.formData, "phone", e.target.value)
                            }
                        }
                    })])]), t._v(" "), e("div", {
                        staticClass: "col-lg-6"
                    }, [e("div", {
                        staticClass: "form-group mb-20"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.formData.website,
                            expression: "formData.website"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            type: "text",
                            name: "website",
                            placeholder: t.rtl ? "موقعك الالكترونى (اختياري)" : "Your Website (option)"
                        },
                        domProps: {
                            value: t.formData.website
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.formData, "website", e.target.value)
                            }
                        }
                    })])]), t._v(" "), e("div", {
                        staticClass: "col-lg-12"
                    }, [e("div", {
                        staticClass: "form-group mb-20"
                    }, [e("select", {
                        staticClass: "form-select",
                        attrs: {
                            name: "option"
                        },
                        on: {
                            change: t.handleFormOptionChange
                        }
                    }, [e("option", {
                        attrs: {
                            selected: ""
                        },
                        domProps: {
                            value: t.rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?"
                        }
                    }, [t._v(t._s(t.rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?"))]), t._v(" "), e("option", {
                        domProps: {
                            value: t.rtl ? "الاختيار الاول" : "option 1"
                        }
                    }, [t._v(t._s(t.rtl ? "الاختيار الاول" : "option 1"))]), t._v(" "), e("option", {
                        domProps: {
                            value: t.rtl ? "الاختيار الثانى" : "option 2"
                        }
                    }, [t._v(t._s(t.rtl ? "الاختيار الثانى" : "option 2"))])])])]), t._v(" "), e("div", {
                        staticClass: "col-lg-12"
                    }, [e("div", {
                        staticClass: "form-group"
                    }, [e("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.formData.message,
                            expression: "formData.message"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            name: "message",
                            rows: "10",
                            placeholder: t.rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?"
                        },
                        domProps: {
                            value: t.formData.message
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.formData, "message", e.target.value)
                            }
                        }
                    })])]), t._v(" "), e("div", {
                        staticClass: "col-lg-12 text-center"
                    }, [e("div", {
                        staticClass: "form-check d-inline-flex mt-30 mb-30"
                    }, [e("input", {
                        staticClass: "form-check-input me-2 mt-0",
                        attrs: {
                            type: "checkbox",
                            value: "",
                            id: "flexCheckDefault"
                        }
                    }), t._v(" "), e("label", {
                        staticClass: "form-check-label small",
                        attrs: {
                            for: "flexCheckDefault"
                        }
                    }, [t._v("\n                    " + t._s(t.rtl ? "من خلال الإرسال ، أوافق على" : "By submitting, i’m agreed to the") + " "), e("a", {
                        staticClass: "text-decoration-underline",
                        attrs: {
                            href: "#"
                        }
                    }, [t._v(t._s(t.rtl ? "الشروط و الاحكام" : "Terms & Conditons"))])])])]), t._v(" "), e("div", {
                        staticClass: "col-lg-12 text-center"
                    }, [e("input", {
                        staticClass: "btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light",
                        attrs: {
                            type: "submit"
                        },
                        domProps: {
                            value: t.rtl ? "أرسل طلبك" : "Send Your Request"
                        }
                    })])])])])]), t._v(" "), e("img", {
                        staticClass: "contact_a",
                        attrs: {
                            src: "/assets/img/icons/contact_a.png",
                            alt: ""
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "contact_message",
                        attrs: {
                            src: "/assets/img/icons/contact_message.png",
                            alt: ""
                        }
                    })])])])
                }), [function() {
                    var t = this._self._c;
                    return t("span", [t("small", [this._v("استشارة مجانية")])])
                }, function() {
                    var t = this._self._c;
                    return t("span", [t("small", [this._v(" consultation ")])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        458: function(t) {
            t.exports = JSON.parse('[{"img":"/assets/img/icons/serv_icons/16.png","info":"Content Strategy","text":"You can provide the answers that your potential customers are trying to find, so you can become the industry."},{"img":"/assets/img/icons/serv_icons/15.png","info":"Google/FB Ads","text":"Get more website traffic, more customers & more online visibility with powerful SEO services."},{"img":"/assets/img/icons/serv_icons/14.png","info":"Email Marketing","text":"Your website has to impress your visitors within just a few seconds"},{"img":"/assets/img/icons/serv_icons/17.png","info":"Social Media","text":"Get more website traffic, more customers for your social chanel"},{"img":"/assets/img/icons/serv_icons/18.png","info":"Website Design and Development","text":"Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated"},{"img":"/assets/img/icons/serv_icons/19.png","info":"TVC/ Viral Clip","text":"Optimized your website on google result with PPC Marketing"},{"img":"/assets/img/icons/serv_icons/20.png","info":"PPC Ads","text":"Optimized your website on google result with PPC Marketing"}]')
        },
        459: function(t) {
            t.exports = JSON.parse('[{"img":"/assets/img/icons/serv_icons/16.png","info":"استراتيجية المحتوى","text":"يمكنك تقديم الإجابات التي يحاول عملاؤك المحتملون تقديمها وتقديم اجابات لها"},{"img":"/assets/img/icons/serv_icons/15.png","info":"اعلانات جوجل وفيسبوك","text":"احصل على المزيد من المشاهدات على الويب والمزيد من العملاء والمزيد من الظهور عبر الإنترنت باستخدام خدمات قوية لتحسين محركات البحث."},{"img":"/assets/img/icons/serv_icons/14.png","info":"التسويق عبر البريد الإلكتروني","text":"يجب أن يبهر موقع الويب الخاص بك زوار موقعك في غضون ثوانٍ قليلة"},{"img":"/assets/img/icons/serv_icons/17.png","info":"وسائل التواصل الاجتماعي","text":"احصل على المزيد من المشاهدات على الموقع ، والمزيد من العملاء لقناتك الاجتماعية"},{"img":"/assets/img/icons/serv_icons/18.png","info":"تصميم وتطوير الموقع","text":"يجب أن يبهر موقع الويب الخاص بك زوار موقعك في غضون ثوانٍ قليلة. إذا كان يعمل ببطء ، إذا شعرت أنه قديم"},{"img":"/assets/img/icons/serv_icons/19.png","info":"انواع مختلفه للتسويق الالكترونى","text":"تحسين موقع الويب الخاص بك على نتائج جوجل باستخدام PPC للتسويق الألكترونى"},{"img":"/assets/img/icons/serv_icons/20.png","info":"اعلانات القدرة الشرائيه","text":"تحسين موقع الويب الخاص بك على نتائج جوجل باستخدام PPC للتسويق الألكترونى"}]')
        },
        460: function(t) {
            t.exports = JSON.parse('[{"image":"/assets/img/projects/4.png","title":"Okpay E-Wallet Optimized","type":["SEO analysis"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["SEO Analysis","Content Strategy"]},{"image":"/assets/img/projects/5.png","title":"e-Commerce Dashboard","type":["website design","develoment"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["WordPress","PHP","HTML/CSS","Figma"]},{"image":"/assets/img/projects/7.png","title":"MLB Store Instagram","type":["social media"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["Social","Instagram","Followers"]},{"image":"/assets/img/projects/5.png","title":"e-Commerce Dashboard","type":["website design","develoment"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["WordPress","PHP","HTML/CSS","Figma"]}]')
        },
        461: function(t) {
            t.exports = JSON.parse('[{"image":"/assets/img/projects/4.png","title":"اوك باي المحفظة الإلكترونية ","type":["تحليل البيانات"],"text":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["تحليل البيانات","استراتيجية المحتوى"]},{"image":"/assets/img/projects/5.png","title":"لوحة التجارة الإلكترونية","type":["تصميم","برمجة"],"text":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["وردبريس","بي اتش بي","HTML/CSS","فيجما"]},{"image":"/assets/img/projects/7.png","title":"متجر انستجرام","type":["مواقع التواصل الاجتماعي"],"text":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["تواصل اجتماعى","انستجرام","متابعين"]},{"image":"/assets/img/projects/5.png","title":"لوحه تحكم للمتاجر","type":["تصميم","برمجة"],"text":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["وردبريس","بي اتش بي","HTML/CSS","فيجما"]}]')
        },
        462: function(t) {
            t.exports = JSON.parse('[{"image":"/assets/img/icons/ch4.png","title":"Affordable Price","text":"Nanotechnology immersion along the information high will close the loop on focusing solely"},{"image":"/assets/img/icons/ch5.png","title":"Top-notch Experts Consulting","text":"Our top-notch Experts with much years of experience certail will give best solutions for your business"},{"image":"/assets/img/icons/ch6.png","title":"Dedicated Support 24/7","text":"Customer support is always our number one priority."}]')
        },
        463: function(t) {
            t.exports = JSON.parse('[{"image":"/assets/img/icons/ch4.png","title":"سعر مناسب","text":"إن الانغماس في تقنية النانو على طول ارتفاع المعلومات سوف يغلق الحلقة في التركيز فقط"},{"image":"/assets/img/icons/ch5.png","title":"خبراء استشاريون من الدرجة الأولى","text":"سيقدم خبراؤنا المتميزون الذين يتمتعون بسنوات عديدة من الخبرة في مجال الشهادات أفضل الحلول لعملك"},{"image":"/assets/img/icons/ch6.png","title":"دعم مخصص 24/7","text":"دعم العملاء هو دائمًا أولويتنا الأولى."}]')
        },
        464: function(t) {
            t.exports = JSON.parse('["/assets/img/logos/7.png","/assets/img/logos/8.png","/assets/img/logos/9.png","/assets/img/logos/10.png","/assets/img/logos/11.png","/assets/img/logos/12.png","/assets/img/logos/13.png","/assets/img/logos/14.png","/assets/img/logos/15.png","/assets/img/logos/16.png"]')
        },
        465: function(t) {
            t.exports = JSON.parse('[{"value":12,"operator":"+","title":{"part1":"Years","part2":"of Experience"}},{"value":1565,"operator":null,"title":{"part1":"Projects","part2":"completed"}},{"value":265,"operator":null,"title":{"part1":"Satisfied clients on","part2":"24 countries"}}]')
        },
        466: function(t) {
            t.exports = JSON.parse('[{"value":12,"operator":"+","title":{"part1":"سنوات","part2":"من الخبرة"}},{"value":1565,"operator":null,"title":{"part1":"مشاريع","part2":"مكتملة"}},{"value":265,"operator":null,"title":{"part1":"عملاء سعداء من","part2":"24 دولة"}}]')
        },
        467: function(t) {
            t.exports = JSON.parse('[{"picture":"/assets/img/team/1.jpeg","name":"Michael Edwards","position":"CEO Founder"},{"picture":"/assets/img/team/5.jpeg","name":"Bobby Kane","position":"CTO"},{"picture":"/assets/img/team/3.jpeg","name":"Robert Downey Jr","position":"Project Manager"},{"picture":"/assets/img/team/4.jpeg","name":"Andrew Robertson","position":"Marketing Leader"}]')
        },
        468: function(t) {
            t.exports = JSON.parse('[{"picture":"/assets/img/team/1.jpeg","name":"مايكل إدواردز","position":"مؤسس الرئيس التنفيذي"},{"picture":"/assets/img/team/5.jpeg","name":"بوبي كين","position":"CTO"},{"picture":"/assets/img/team/3.jpeg","name":"روبرت داوني","position":"مدير المشروع"},{"picture":"/assets/img/team/4.jpeg","name":"أندرو روبرتسون","position":"قائد تسويق"}]')
        },
        469: function(t) {
            t.exports = JSON.parse('[{"cover":"/assets/img/blog/9.png","time":"3 Days ago","title":"Workflow Strategy for E-shop","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"David","comments":24,"views":"774k"},{"cover":"/assets/img/blog/10.png","time":"12 Days ago","title":"6 Tips To Help You Build Your Social Media Effeciency","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"David","comments":24,"views":"774k"},{"cover":"/assets/img/blog/11.png","time":"3 Days ago","title":"The Trend of Marketing With Tiktok, Should or not?","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"David","comments":24,"views":"774k"}]')
        },
        470: function(t) {
            t.exports = JSON.parse('[{"cover":"/assets/img/blog/9.png","time":"منذ 3 أيام","title":"استراتيجية سير العمل للمتجر الإلكتروني","short_desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","placeholderImageText":"a","author":"دايفيد","comments":24,"views":"774k"},{"cover":"/assets/img/blog/10.png","time":"منذ 12 يوم","title":"6 نصائح لمساعدتك على بناء كفاءتك على وسائل التواصل الاجتماعي","short_desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","placeholderImageText":"a","author":"دايفيد","comments":24,"views":"774k"},{"cover":"/assets/img/blog/11.png","time":"منذ 12 يوم","title":"اتجاه التسويق مع Tiktok ، هل يجب أم لا؟","short_desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","placeholderImageText":"a","author":"دايفيد","comments":24,"views":"774k"}]')
        }
    }
]);