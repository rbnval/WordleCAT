this.wordle = this.wordle || {},
    this.wordle.bundle = function (e) {

        "use strict";
        var sol;
        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } :
                function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
            )(e)
        }

        function s(e, a) {
            if (!(e instanceof a))
                throw new TypeError("Cannot call a class as a function")
        }

        function t(e, a) {
            for (var s = 0; s < a.length; s++) {
                var t = a[s];
                t.enumerable = t.enumerable || !1,
                    t.configurable = !0,
                    "value" in t && (t.writable = !0),
                    Object.defineProperty(e, t.key, t)
            }
        }

        function o(e, a, s) {
            return a && t(e.prototype, a),
                s && t(e, s),
                e
        }

        function n(e, a, s) {
            return a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s,
                e
        }

        function r(e, a) {
            if ("function" != typeof a && null !== a)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(a && a.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                a && l(e, a)
        }

        function i(e) {
            return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function l(e, a) {
            return (l = Object.setPrototypeOf || function (e, a) {
                return e.__proto__ = a,
                    e
            })(e, a)
        }

        function d() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))),
                    !0
            } catch (e) {
                return !1
            }
        }

        function u(e, a, s) {
            return (u = d() ? Reflect.construct : function (e, a, s) {
                var t = [null];
                t.push.apply(t, a);
                var o = new(Function.bind.apply(e, t));
                return s && l(o, s.prototype),
                    o
            }).apply(null, arguments)
        }

        function c(e) {
            var a = "function" == typeof Map ? new Map : void 0;
            return (c = function (e) {
                if (null === e || (s = e,
                        -1 === Function.toString.call(s).indexOf("[native code]")))
                    return e;
                var s;
                if ("function" != typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== a) {
                    if (a.has(e))
                        return a.get(e);
                    a.set(e, t)
                }

                function t() {
                    return u(e, arguments, i(this).constructor)
                }
                return t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    l(t, e)
            })(e)
        }

        function p(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function m(e, a) {
            return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
        }

        function h(e) {
            var a = d();
            return function () {
                var s, t = i(e);
                if (a) {
                    var o = i(this).constructor;
                    s = Reflect.construct(t, arguments, o)
                } else
                    s = t.apply(this, arguments);
                return m(this, s)
            }
        }

        function y(e, a) {
            return function (e) {
                if (Array.isArray(e))
                    return e
            }(e) || function (e, a) {
                var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == s)
                    return;
                var t, o, n = [],
                    r = !0,
                    i = !1;
                try {
                    for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value),
                            !a || n.length !== a); r = !0)
                    ;
                } catch (e) {
                    i = !0,
                        o = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return n
            }(e, a) || b(e, a) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function g(e) {
            return function (e) {
                if (Array.isArray(e))
                    return f(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || b(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function b(e, a) {
            if (e) {
                if ("string" == typeof e)
                    return f(e, a);
                var s = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === s && e.constructor && (s = e.constructor.name),
                    "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
            }
        }

        function f(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var s = 0, t = new Array(a); s < a; s++)
                t[s] = e[s];
            return t
        }
        var k = document.createElement("template");
        k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 150ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
        var v = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    n(p(e = a.call(this)), "_letter", ""),
                    n(p(e), "_state", "empty"),
                    n(p(e), "_animation", "idle"),
                    n(p(e), "_last", !1),
                    n(p(e), "_reveal", !1),
                    e.attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                    key: "last",
                    set: function (e) {
                        this._last = e
                    }
                }, {
                    key: "connectedCallback",
                    value: function () {
                        var e = this;
                        this.shadowRoot.appendChild(k.content.cloneNode(!0)),
                            this.$tile = this.shadowRoot.querySelector(".tile"),
                            this.$tile.addEventListener("animationend", (function (a) {
                                "PopIn" === a.animationName && (e._animation = "idle"),
                                    "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state,
                                        e._animation = "flip-out"),
                                    "FlipOut" === a.animationName && (e._animation = "idle",
                                        e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                                            bubbles: !0,
                                            composed: !0
                                        }))),
                                    e._render()
                            })),
                            this._render()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function (e, a, s) {
                        switch (e) {
                            case "letter":
                                if (s === a)
                                    break;
                                var t = "null" === s ? "" : s;
                                this._letter = t,
                                    this._state = t ? "tbd" : "empty",
                                    this._animation = t ? "pop" : "idle";
                                break;
                            case "evaluation":
                                if (!s)
                                    break;
                                this._state = s;
                                break;
                            case "reveal":
                                this._animation = "flip-in",
                                    this._reveal = !0
                        }
                        this._render()
                    }
                }, {
                    key: "_render",
                    value: function () {
                        this.$tile && (this.$tile.textContent = this._letter,
                            ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state),
                            (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
                    }
                }], [{
                    key: "observedAttributes",
                    get: function () {
                        return ["letter", "evaluation", "reveal"]
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-tile", v);
        var w = document.createElement("template");
        w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
        var x = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    (e = a.call(this)).attachShadow({
                        mode: "open"
                    }),
                    e._letters = "",
                    e._evaluation = [],
                    e._length,
                    e
            }
            return o(t, [{
                    key: "evaluation",
                    get: function () {
                        return this._evaluation
                    },
                    set: function (e) {
                        var a = this;
                        this._evaluation = e,
                            this.$tiles && this.$tiles.forEach((function (e, s) {
                                e.setAttribute("evaluation", a._evaluation[s]),
                                    setTimeout((function () {
                                        e.setAttribute("reveal", "")
                                    }), 300 * s)
                            }))
                    }
                }, {
                    key: "connectedCallback",
                    value: function () {
                        var e = this;
                        this.shadowRoot.appendChild(w.content.cloneNode(!0)),
                            this.$row = this.shadowRoot.querySelector(".row");
                        for (var a = function (a) {
                                var s = document.createElement("game-tile"),
                                    t = e._letters[a];
                                (t && s.setAttribute("letter", t),
                                    e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]),
                                    setTimeout((function () {
                                        s.setAttribute("reveal", "")
                                    }), 100 * a));
                                a === e._length - 1 && (s.last = !0),
                                    e.$row.appendChild(s)
                            }, s = 0; s < this._length; s++)
                            a(s);
                        this.$tiles = this.shadowRoot.querySelectorAll("game-tile"),
                            this.addEventListener("animationend", (function (a) {
                                "Shake" === a.animationName && e.removeAttribute("invalid")
                            }))
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function (e, a, s) {
                        switch (e) {
                            case "letters":
                                this._letters = s || "";
                                break;
                            case "length":
                                this._length = parseInt(s, 10);
                                break;
                            case "win":
                                if (null === s) {
                                    this.$tiles.forEach((function (e) {
                                        e.classList.remove("win")
                                    }));
                                    break
                                }
                                this.$tiles.forEach((function (e, a) {
                                    e.classList.add("win"),
                                        e.style.animationDelay = "".concat(100 * a, "ms")
                                }))
                        }
                        this._render()
                    }
                }, {
                    key: "_render",
                    value: function () {
                        var e = this;
                        this.$row && this.$tiles.forEach((function (a, s) {
                            var t = e._letters[s];
                            t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
                        }))
                    }
                }], [{
                    key: "observedAttributes",
                    get: function () {
                        return ["letters", "length", "invalid", "win"]
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-row", x);
        var z = document.createElement("template");
        z.innerHTML = "\n  <slot></slot>\n";
        var j = "darkTheme",
            S = "colorBlindTheme",
            _ = function (e) {
                r(t, e);
                var a = h(t);

                function t() {
                    var e;
                    s(this, t),
                        n(p(e = a.call(this)), "isDarkTheme", !1),
                        n(p(e), "isColorBlindTheme", !1),
                        e.attachShadow({
                            mode: "open"
                        });
                    var o = JSON.parse(window.localStorage.getItem(j)),
                        r = window.matchMedia("(prefers-color-scheme: dark)").matches,
                        i = JSON.parse(window.localStorage.getItem(S));
                    return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0),
                        !0 !== i && !1 !== i || e.setColorBlindTheme(i),
                        e
                }
                return o(t, [{
                        key: "setDarkTheme",
                        value: function (e) {
                            var a = document.querySelector("body");
                            e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"),
                                this.isDarkTheme = e,
                                window.localStorage.setItem(j, JSON.stringify(e))
                        }
                    }, {
                        key: "setColorBlindTheme",
                        value: function (e) {
                            var a = document.querySelector("body");
                            e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"),
                                this.isColorBlindTheme = e,
                                window.localStorage.setItem(S, JSON.stringify(e))
                        }
                    }, {
                        key: "connectedCallback",
                        value: function () {
                            var e = this;
                            this.shadowRoot.appendChild(z.content.cloneNode(!0)),
                                this.shadowRoot.addEventListener("game-setting-change", (function (a) {
                                    var s = a.detail,
                                        t = s.name,
                                        o = s.checked;
                                    switch (t) {
                                        case "dark-theme":
                                            return void e.setDarkTheme(o);
                                        case "color-blind-theme":
                                            return void e.setColorBlindTheme(o)
                                    }
                                }))
                        }
                    }]),
                    t
            }(c(HTMLElement));

        function q(e, a) {
            return e === a || e != e && a != a
        }

        function E(e, a) {
            for (var s = e.length; s--;)
                if (q(e[s][0], a))
                    return s;
            return -1
        }
        customElements.define("game-theme-manager", _);
        var A = Array.prototype.splice;

        function C(e) {
            var a = -1,
                s = null == e ? 0 : e.length;
            for (this.clear(); ++a < s;) {
                var t = e[a];
                this.set(t[0], t[1])
            }
        }
        C.prototype.clear = function () {
                this.__data__ = [],
                    this.size = 0
            },
            C.prototype.delete = function (e) {
                var a = this.__data__,
                    s = E(a, e);
                return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1),
                    --this.size,
                    !0)
            },
            C.prototype.get = function (e) {
                var a = this.__data__,
                    s = E(a, e);
                return s < 0 ? void 0 : a[s][1]
            },
            C.prototype.has = function (e) {
                return E(this.__data__, e) > -1
            },
            C.prototype.set = function (e, a) {
                var s = this.__data__,
                    t = E(s, e);
                return t < 0 ? (++this.size,
                        s.push([e, a])) : s[t][1] = a,
                    this
            };
        var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
            T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
            I = L || T || Function("return this")(),
            M = I.Symbol,
            O = Object.prototype,
            R = O.hasOwnProperty,
            $ = O.toString,
            P = M ? M.toStringTag : void 0;
        var H = Object.prototype.toString;
        var N = M ? M.toStringTag : void 0;

        function D(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function (e) {
                var a = R.call(e, P),
                    s = e[P];
                try {
                    e[P] = void 0;
                    var t = !0
                } catch (e) {}
                var o = $.call(e);
                return t && (a ? e[P] = s : delete e[P]),
                    o
            }(e) : function (e) {
                return H.call(e)
            }(e)
        }

        function G(e) {
            var s = a(e);
            return null != e && ("object" == s || "function" == s)
        }

        function B(e) {
            if (!G(e))
                return !1;
            var a = D(e);
            return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
        }
        var F, W = I["__core-js_shared__"],
            Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
        var J = Function.prototype.toString;
        var U = /^\[object .+?Constructor\]$/,
            X = Function.prototype,
            V = Object.prototype,
            K = X.toString,
            Q = V.hasOwnProperty,
            Z = RegExp("^" + K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function ee(e) {
            return !(!G(e) || (a = e,
                Y && Y in a)) && (B(e) ? Z : U).test(function (e) {
                if (null != e) {
                    try {
                        return J.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }(e));
            var a
        }

        function ae(e, a) {
            var s = function (e, a) {
                return null == e ? void 0 : e[a]
            }(e, a);
            return ee(s) ? s : void 0
        }
        var se = ae(I, "Map"),
            te = ae(Object, "create");
        var oe = Object.prototype.hasOwnProperty;
        var ne = Object.prototype.hasOwnProperty;

        function re(e) {
            var a = -1,
                s = null == e ? 0 : e.length;
            for (this.clear(); ++a < s;) {
                var t = e[a];
                this.set(t[0], t[1])
            }
        }

        function ie(e, s) {
            var t, o, n = e.__data__;
            return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map
        }

        function le(e) {
            var a = -1,
                s = null == e ? 0 : e.length;
            for (this.clear(); ++a < s;) {
                var t = e[a];
                this.set(t[0], t[1])
            }
        }
        re.prototype.clear = function () {
                this.__data__ = te ? te(null) : {},
                    this.size = 0
            },
            re.prototype.delete = function (e) {
                var a = this.has(e) && delete this.__data__[e];
                return this.size -= a ? 1 : 0,
                    a
            },
            re.prototype.get = function (e) {
                var a = this.__data__;
                if (te) {
                    var s = a[e];
                    return "__lodash_hash_undefined__" === s ? void 0 : s
                }
                return oe.call(a, e) ? a[e] : void 0
            },
            re.prototype.has = function (e) {
                var a = this.__data__;
                return te ? void 0 !== a[e] : ne.call(a, e)
            },
            re.prototype.set = function (e, a) {
                var s = this.__data__;
                return this.size += this.has(e) ? 0 : 1,
                    s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a,
                    this
            },
            le.prototype.clear = function () {
                this.size = 0,
                    this.__data__ = {
                        hash: new re,
                        map: new(se || C),
                        string: new re
                    }
            },
            le.prototype.delete = function (e) {
                var a = ie(this, e).delete(e);
                return this.size -= a ? 1 : 0,
                    a
            },
            le.prototype.get = function (e) {
                return ie(this, e).get(e)
            },
            le.prototype.has = function (e) {
                return ie(this, e).has(e)
            },
            le.prototype.set = function (e, a) {
                var s = ie(this, e),
                    t = s.size;
                return s.set(e, a),
                    this.size += s.size == t ? 0 : 1,
                    this
            };

        function de(e) {
            var a = this.__data__ = new C(e);
            this.size = a.size
        }
        de.prototype.clear = function () {
                this.__data__ = new C,
                    this.size = 0
            },
            de.prototype.delete = function (e) {
                var a = this.__data__,
                    s = a.delete(e);
                return this.size = a.size,
                    s
            },
            de.prototype.get = function (e) {
                return this.__data__.get(e)
            },
            de.prototype.has = function (e) {
                return this.__data__.has(e)
            },
            de.prototype.set = function (e, a) {
                var s = this.__data__;
                if (s instanceof C) {
                    var t = s.__data__;
                    if (!se || t.length < 199)
                        return t.push([e, a]),
                            this.size = ++s.size,
                            this;
                    s = this.__data__ = new le(t)
                }
                return s.set(e, a),
                    this.size = s.size,
                    this
            };
        var ue = function () {
            try {
                var e = ae(Object, "defineProperty");
                return e({}, "", {}),
                    e
            } catch (e) {}
        }();

        function ce(e, a, s) {
            "__proto__" == a && ue ? ue(e, a, {
                configurable: !0,
                enumerable: !0,
                value: s,
                writable: !0
            }) : e[a] = s
        }

        function pe(e, a, s) {
            (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
        }
        var me, he = function (e, a, s) {
                for (var t = -1, o = Object(e), n = s(e), r = n.length; r--;) {
                    var i = n[me ? r : ++t];
                    if (!1 === a(o[i], i, o))
                        break
                }
                return e
            },
            ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
            ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
            be = ge && ge.exports === ye ? I.Buffer : void 0,
            fe = be ? be.allocUnsafe : void 0;
        var ke = I.Uint8Array;

        function ve(e, a) {
            var s, t, o = a ? (s = e.buffer,
                t = new s.constructor(s.byteLength),
                new ke(t).set(new ke(s)),
                t) : e.buffer;
            return new e.constructor(o, e.byteOffset, e.length)
        }
        var we = Object.create,
            xe = function () {
                function e() {}
                return function (a) {
                    if (!G(a))
                        return {};
                    if (we)
                        return we(a);
                    e.prototype = a;
                    var s = new e;
                    return e.prototype = void 0,
                        s
                }
            }();
        var ze, je, Se = (ze = Object.getPrototypeOf,
                je = Object,
                function (e) {
                    return ze(je(e))
                }
            ),
            _e = Object.prototype;

        function qe(e) {
            var a = e && e.constructor;
            return e === ("function" == typeof a && a.prototype || _e)
        }

        function Ee(e) {
            return null != e && "object" == a(e)
        }

        function Ae(e) {
            return Ee(e) && "[object Arguments]" == D(e)
        }
        var Ce = Object.prototype,
            Le = Ce.hasOwnProperty,
            Te = Ce.propertyIsEnumerable,
            Ie = Ae(function () {
                return arguments
            }()) ? Ae : function (e) {
                return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee")
            },
            Me = Array.isArray;

        function Oe(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        }

        function Re(e) {
            return null != e && Oe(e.length) && !B(e)
        }
        var $e = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
            Pe = $e && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
            He = Pe && Pe.exports === $e ? I.Buffer : void 0,
            Ne = (He ? He.isBuffer : void 0) || function () {
                return !1
            },
            De = Function.prototype,
            Ge = Object.prototype,
            Be = De.toString,
            Fe = Ge.hasOwnProperty,
            We = Be.call(Object);
        var Ye = {};
        Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0,
            Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
        var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
            Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
            Xe = Ue && Ue.exports === Je && L.process,
            Ve = function () {
                try {
                    var e = Ue && Ue.require && Ue.require("util").types;
                    return e || Xe && Xe.binding && Xe.binding("util")
                } catch (e) {}
            }(),
            Ke = Ve && Ve.isTypedArray,
            Qe = Ke ? function (e) {
                return function (a) {
                    return e(a)
                }
            }(Ke) : function (e) {
                return Ee(e) && Oe(e.length) && !!Ye[D(e)]
            };

        function Ze(e, a) {
            if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a)
                return e[a]
        }
        var ea = Object.prototype.hasOwnProperty;

        function aa(e, a, s) {
            var t = e[a];
            ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
        }
        var sa = /^(?:0|[1-9]\d*)$/;

        function ta(e, s) {
            var t = a(e);
            return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
        }
        var oa = Object.prototype.hasOwnProperty;

        function na(e, a) {
            var s = Me(e),
                t = !s && Ie(e),
                o = !s && !t && Ne(e),
                n = !s && !t && !o && Qe(e),
                r = s || t || o || n,
                i = r ? function (e, a) {
                    for (var s = -1, t = Array(e); ++s < e;)
                        t[s] = a(s);
                    return t
                }(e.length, String) : [],
                l = i.length;
            for (var d in e)
                !a && !oa.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
            return i
        }
        var ra = Object.prototype.hasOwnProperty;

        function ia(e) {
            if (!G(e))
                return function (e) {
                    var a = [];
                    if (null != e)
                        for (var s in Object(e))
                            a.push(s);
                    return a
                }(e);
            var a = qe(e),
                s = [];
            for (var t in e)
                ("constructor" != t || !a && ra.call(e, t)) && s.push(t);
            return s
        }

        function la(e) {
            return Re(e) ? na(e, !0) : ia(e)
        }

        function da(e) {
            return function (e, a, s, t) {
                var o = !s;
                s || (s = {});
                for (var n = -1, r = a.length; ++n < r;) {
                    var i = a[n],
                        l = t ? t(s[i], e[i], i, s, e) : void 0;
                    void 0 === l && (l = e[i]),
                        o ? ce(s, i, l) : aa(s, i, l)
                }
                return s
            }(e, la(e))
        }

        function ua(e, a, s, t, o, n, r) {
            var i = Ze(e, s),
                l = Ze(a, s),
                d = r.get(l);
            if (d)
                pe(e, s, d);
            else {
                var u, c = n ? n(i, l, s + "", e, a, r) : void 0,
                    p = void 0 === c;
                if (p) {
                    var m = Me(l),
                        h = !m && Ne(l),
                        y = !m && !h && Qe(l);
                    c = l,
                        m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function (e, a) {
                            var s = -1,
                                t = e.length;
                            for (a || (a = Array(t)); ++s < t;)
                                a[s] = e[s];
                            return a
                        }(i) : h ? (p = !1,
                            c = function (e, a) {
                                if (a)
                                    return e.slice();
                                var s = e.length,
                                    t = fe ? fe(s) : new e.constructor(s);
                                return e.copy(t),
                                    t
                            }(l, !0)) : y ? (p = !1,
                            c = ve(l, !0)) : c = [] : function (e) {
                            if (!Ee(e) || "[object Object]" != D(e))
                                return !1;
                            var a = Se(e);
                            if (null === a)
                                return !0;
                            var s = Fe.call(a, "constructor") && a.constructor;
                            return "function" == typeof s && s instanceof s && Be.call(s) == We
                        }(l) || Ie(l) ? (c = i,
                            Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function (e) {
                                return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
                            }(l))) : p = !1
                }
                p && (r.set(l, c),
                        o(c, l, t, n, r),
                        r.delete(l)),
                    pe(e, s, c)
            }
        }

        function ca(e, a, s, t, o) {
            e !== a && he(a, (function (n, r) {
                if (o || (o = new de),
                    G(n))
                    ua(e, a, r, s, ca, t, o);
                else {
                    var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
                    void 0 === i && (i = n),
                        pe(e, r, i)
                }
            }), la)
        }

        function pa(e) {
            return e
        }

        function ma(e, a, s) {
            switch (s.length) {
                case 0:
                    return e.call(a);
                case 1:
                    return e.call(a, s[0]);
                case 2:
                    return e.call(a, s[0], s[1]);
                case 3:
                    return e.call(a, s[0], s[1], s[2])
            }
            return e.apply(a, s)
        }
        var ha = Math.max;
        var ya = ue ? function (e, a) {
                return ue(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: (s = a,
                        function () {
                            return s
                        }
                    ),
                    writable: !0
                });
                var s
            } :
            pa,
            ga = Date.now;
        var ba = function (e) {
            var a = 0,
                s = 0;
            return function () {
                var t = ga(),
                    o = 16 - (t - s);
                if (s = t,
                    o > 0) {
                    if (++a >= 800)
                        return arguments[0]
                } else
                    a = 0;
                return e.apply(void 0, arguments)
            }
        }(ya);

        function fa(e, a) {
            return ba(function (e, a, s) {
                return a = ha(void 0 === a ? e.length - 1 : a, 0),
                    function () {
                        for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n;)
                            r[o] = t[a + o];
                        o = -1;
                        for (var i = Array(a + 1); ++o < a;)
                            i[o] = t[o];
                        return i[a] = s(r),
                            ma(e, this, i)
                    }
            }(e, a, pa), e + "")
        }
        var ka, va = (ka = function (e, a, s) {
                    ca(e, a, s)
                },
                fa((function (e, s) {
                    var t = -1,
                        o = s.length,
                        n = o > 1 ? s[o - 1] : void 0,
                        r = o > 2 ? s[2] : void 0;
                    for (n = ka.length > 3 && "function" == typeof n ? (o--,
                            n) : void 0,
                        r && function (e, s, t) {
                            if (!G(t))
                                return !1;
                            var o = a(s);
                            return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
                        }(s[0], s[1], r) && (n = o < 3 ? void 0 : n,
                            o = 1),
                        e = Object(e); ++t < o;) {
                        var i = s[t];
                        i && ka(e, i, t, n)
                    }
                    return e
                }))),
            wa = "gameState",
            xa = {
                boardState: null,
                evaluations: null,
                rowIndex: null,
                solution: null,
                gameStatus: null,
                lastPlayedTs: null,
                lastCompletedTs: null,
                restoringFromLocalStorage: null,
                hardMode: !1
            };

        function za() {
            var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
            return JSON.parse(e)
        }

        function ja(e) {
            var a = za();
            ! function (e) {
                window.localStorage.setItem(wa, JSON.stringify(e))
            }(va(a, e))
        }
        var Sa = document.createElement("template");
        Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Mode difícil</div>\n          <div class="description">Qualsevol lletra encertada s\'ha d\'utilitzar en intents posteriors</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Aparença fosca</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Colors del Paraulògic</div>\n          <div class="description">Útil per a persones amb daltonisme</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Comentaris</div>\n        </div>\n        <div class="control">\n          <a href="mailto:wordle@gelozp.com?subject=WordleCAT" title="wordle@gelozp.com">Email</a>\n          |\n          <a href="https://twitter.com/WordleCAT" target="blank" title="#WordleCAT">Twitter</a>\n        </div>\n      </div>\n    </section>\n <section>    <div class="ad" style="display: contents;padding: 0 10px;"> \n      <a href="https://donarsang.gencat.cat" style="display: contents;"> \n       <img src="https://gelozp.com/games/wordle/img/ad1.png" alt="Dona Sang" target="_blank" style="width: calc(100% - 30px);margin-top: 25px;padding: 0 15px;"></a> </div>\n  </section>\n  </div>\n  <div id="footnote">\n    <div id="puzzle-number"></div>\n <div id="code"> Adaptació de:  <a href="https://twitter.com/GeloZP/" title="Adaptació de Gerard López López">Gerard López López</a> </div> \n    <div id="originalgame"> Basat en el joc <a href="https://www.powerlanguage.co.uk/wordle/" title="Wordle">Wordle</a> de <a href="https://twitter.com/powerlanguish/" title="Josh Wardle">Josh Wardle</a>\n  <div id="credits"> Agraïments:  <a href="http://diccionari.totescrable.cat" title="Crèdits">Diccionari de l’Scrabble (DISC)</a> </div>\n    <div id="hash"></div>\n  <div>\n';
        var _a = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    n(p(e = a.call(this)), "gameApp", void 0),
                    e.attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                    key: "connectedCallback",
                    value: function () {
                        var e, a = this;
                        this.shadowRoot.appendChild(Sa.content.cloneNode(!0)),
                            this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash,
                            this.shadowRoot.querySelector("#puzzle-number").textContent = "WordleCAT #".concat(this.gameApp.dayOffset),
                            this.shadowRoot.addEventListener("game-switch-change", (function (e) {
                                e.stopPropagation();
                                var s = e.detail,
                                    t = s.name,
                                    o = s.checked,
                                    n = s.disabled;
                                a.dispatchEvent(new CustomEvent("game-setting-change", {
                                        bubbles: !0,
                                        composed: !0,
                                        detail: {
                                            name: t,
                                            checked: o,
                                            disabled: n
                                        }
                                    })),
                                    a.render()
                            })),
                            this.render()
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = document.querySelector("body");
                        e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""),
                            e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                        var a = za();
                        a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""),
                            a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"),
                                this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-settings", _a);
        var qa = document.createElement("template");
        qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
        var Ea, Aa = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    n(p(e = a.call(this)), "_duration", void 0),
                    e.attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                    key: "connectedCallback",
                    value: function () {
                        var e = this;
                        this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                        var a = this.shadowRoot.querySelector(".toast");
                        a.textContent = this.getAttribute("text"),
                            this._duration = this.getAttribute("duration") || 1e3,
                            "Infinity" !== this._duration && setTimeout((function () {
                                a.classList.add("fade")
                            }), this._duration),
                            a.addEventListener("transitionend", (function (a) {
                                e.parentNode.removeChild(e)
                            }))
                    }
                }]),
                t
        }(c(HTMLElement));

        function Ca() {
            dataLayer.push(arguments)
        }
        customElements.define("game-toast", Aa),
            window.dataLayer = window.dataLayer || [],
            Ca("js", new Date);
        Ca("config", "G-5TDB8BWF6B", {
            app_version: null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash,
            debug_mode: !1
        });
        var wdsA = {
            "mirar": "mirar",
            "prova": "prova",
            "jugar": "jugar",
            "canta": "canta",
            "marro": "marró",
            "valem": "valem",
            "apomo": "apomo",
            "color": "color",
            "forat": "forat",
            "vides": "vides",
            "tibar": "tibar",
            "batan": "batan",
            "actiu": "actiu",
            "ondos": "ondós",
            "gorra": "gorra",
            "poema": "poema",
            "crear": "crear",
            "dinou": "dinou",
            "flota": "flota",
            "renoi": "renoi",
            "finit": "finit",
            "feixa": "feixa",
            "celat": "celat",
            "farsa": "farsa",
            "illus": "il·lús",
            "envas": "envàs",
            "rafia": "ràfia",
            "senat": "senat",
            "etiop": "etíop",
            "creta": "creta",
            "sopar": "sopar",
            "pelat": "pelat",
            "bocut": "bocut",
            "tassa": "tassa",
            "brial": "brial",
            "comic": "còmic",
            "croat": "croat",
            "rupit": "rupit",
            "segon": "segon",
            "lluny": "lluny",
            "sufix": "sufix",
            "linia": "línia",
            "morla": "morlà",
            "pudor": "pudor",
            "esser": "ésser",
            "faixa": "faixa",
            "vigor": "vigor",
            "besar": "besar",
            "firar": "firar",
            "tocat": "tocat",
            "batut": "batut",
            "ferri": "ferri",
            "pilot": "pilot",
            "exili": "exili",
            "batec": "batec",
            "super": "súper",
            "timid": "tímid",
            "fresc": "fresc",
            "cranc": "cranc",
            "folro": "folro",
            "penal": "penal",
            "rossa": "rossa",
            "dinar": "dinar",
            "tendo": "tendó",
            "jovia": "jovià",
            "igual": "igual",
            "riera": "riera",
            "pujat": "pujat",
            "recte": "recte",
            "gavid": "gàvid",
            "rugir": "rugir",
            "mussa": "mussa",
            "lucid": "lúcid",
            "espos": "espòs",
            "fauna": "fauna",
            "monjo": "monjo",
            "gruix": "gruix",
            "brida": "brida",
            "malic": "màlic",
            "borda": "borda",
            "nabiu": "nabiu",
            "fluir": "fluir",
            "riure": "riure",
            "germa": "germà",
            "delit": "delit",
            "mugro": "mugró",
            "pivot": "pivot",
            "bambo": "bambo",
            "surar": "surar",
            "angle": "angle",
            "miser": "míser",
            "redit": "rèdit",
            "saure": "saure",
            "grier": "grier",
            "fixat": "fixat",
            "aspre": "aspre",
            "crema": "crema",
            "rojor": "rojor",
            "tibat": "tibat",
            "opcio": "opció",
            "melsa": "melsa",
            "franc": "franc",
            "dieta": "dieta",
            "ocupa": "ocupa",
            "ossut": "ossut",
            "hispa": "hispà",
            "rapid": "ràpid",
            "talem": "tàlem",
            "nansa": "nansa",
            "polit": "polit",
            "minim": "mínim",
            "llata": "llata",
            "fitat": "fitat",
            "mitat": "mitat",
            "guant": "guant",
            "talar": "talar",
            "momia": "mòmia",
            "tutsi": "tutsi",
            "furot": "furot",
            "negre": "negre",
            "pulmo": "pulmó",
            "bombo": "bombó",
            "velar": "velar",
            "velat": "velat",
            "gruat": "gruat",
            "corra": "corra",
            "bolid": "bòlid",
            "manto": "mantó",
            "puput": "puput",
            "punxa": "punxa",
            "padro": "padró",
            "corda": "corda",
            "cotxe": "cotxe",
            "fusel": "fusel",
            "mucic": "múcic",
            "ester": "èster",
            "fenol": "fenol",
            "esqui": "esquí",
            "rotic": "ròtic",
            "sinoc": "sínoc",
            "garro": "garró",
            "llusc": "llusc",
            "llufa": "llufa",
            "sodat": "sodat",
            "ruixo": "ruixó",
            "odios": "odiós",
            "altea": "altea",
            "ondia": "òndia",
            "murid": "múrid",
            "monya": "monya",
            "hampa": "hampa",
            "tevet": "tevet",
            "babel": "babel",
            "panxa": "panxa",
            "vaire": "vaire",
            "bussi": "bussi",
            "munta": "muntà",
            "potil": "pòtil",
            "pedra": "pedra",
            "aviar": "aviar",
            "nocio": "noció",
            "hapte": "haptè",
            "garbo": "garbó",
            "gosar": "gosar",
            "bogal": "bogal",
            "album": "àlbum",
            "limba": "limba",
            "pinyo": "pinyó",
            "summa": "summa",
            "glauc": "glauc",
            "sepia": "sèpia",
            "foceu": "foceu",
            "xabia": "xabià",
            "setze": "setze",
            "gotzo": "gotzo",
            "bugre": "bugre",
            "rifle": "rifle",
            "oolit": "oòlit",
            "nervi": "nervi",
            "bocam": "bocam",
            "sobre": "sobre",
            "tripa": "tripa",
            "etile": "etilè",
            "oimes": "oimés",
            "plapa": "plapa",
            "bipar": "bípar",
            "porat": "porat",
            "iodic": "iòdic",
            "vague": "vague",
            "gelat": "gelat",
            "xerif": "xerif",
            "botos": "botós",
            "ploma": "ploma",
            "eixut": "eixut",
            "capol": "capol",
            "gojat": "gojat",
            "fisto": "fistó",
            "pella": "pella",
            "doiut": "doiut",
            "fogar": "fogar",
            "carli": "carlí",
            "torxo": "torxó",
            "aglif": "àglif",
            "gerra": "gerra",
            "saboc": "saboc",
            "ganyo": "ganyó",
            "manes": "manes",
            "mente": "mentè",
            "faiso": "faisó",
            "isard": "isard",
            "logia": "lògia",
            "napea": "napea",
            "melca": "melca",
            "fetor": "fetor",
            "casot": "casot",
            "sisme": "sisme",
            "almud": "almud",
            "bingo": "bingo",
            "grifa": "grifa",
            "baixa": "baixa",
            "poeta": "poeta",
            "cuixa": "cuixa",
            "joell": "joell",
            "faiço": "faiçó",
            "maina": "maina",
            "mabre": "mabre",
            "guapo": "guapo",
            "bofia": "bòfia",
            "tenia": "tènia",
            "murar": "murar",
            "apunt": "apunt",
            "posat": "posat",
            "borra": "borra",
            "llati": "llatí",
            "lepto": "leptó",
            "remol": "rèmol",
            "rampa": "rampa",
            "cucat": "cucat",
            "xifid": "xífid",
            "meulo": "meulo",
            "jutge": "jutge",
            "basta": "basta",
            "banau": "banau",
            "trial": "trial",
            "seder": "seder",
            "copro": "copró",
            "molta": "molta",
            "micra": "micra",
            "cabra": "cabra",
            "muria": "múria",
            "renda": "renda",
            "urpia": "úrpia",
            "pubil": "pubil",
            "xarot": "xarot",
            "cedri": "cedrí",
            "fuita": "fuita",
            "cubit": "cúbit",
            "morma": "morma",
            "llarg": "llarg",
            "arcat": "arcat",
            "domer": "domer",
            "faixi": "faixí",
            "arsia": "àrsia",
            "saupa": "saupa",
            "bomba": "bomba",
            "libic": "líbic",
            "beure": "beure",
            "gasco": "gascó",
            "grufa": "grufa",
            "badge": "badge",
            "joliu": "joliu",
            "liasa": "liasa",
            "arpat": "arpat",
            "light": "light",
            "ertic": "èrtic",
            "poder": "poder",
            "dansa": "dansa",
            "xevat": "xevat",
            "forma": "forma",
            "gasso": "gassó",
            "festa": "festa",
            "tacat": "tacat",
            "bonda": "bonda",
            "cofat": "cofat",
            "litxi": "litxi",
            "totxo": "totxo",
            "sipai": "sipai",
            "rodam": "rodam",
            "cruix": "cruix",
            "tonya": "tonya",
            "sevir": "sevir",
            "patro": "patró",
            "ambit": "àmbit",
            "golut": "golut",
            "piano": "piano",
            "palat": "palat",
            "tagal": "tagal",
            "caixa": "caixa",
            "petge": "petge",
            "xarpa": "xarpa",
            "heure": "heure",
            "bugia": "bugia",
            "sorgo": "sorgo",
            "paret": "paret",
            "fetid": "fètid",
            "lesio": "lesió",
            "fenix": "fènix",
            "burra": "burra",
            "rater": "rater",
            "largo": "largo",
            "queta": "queta",
            "sonos": "sonós",
            "rondo": "rondó",
            "tiara": "tiara",
            "niera": "niera",
            "poper": "poper",
            "repla": "replà",
            "grell": "grell",
            "varar": "varar",
            "bogar": "bogar",
            "torta": "torta",
            "saros": "saros",
            "telex": "tèlex",
            "octet": "octet",
            "untos": "untós",
            "parit": "parit",
            "apter": "àpter",
            "regla": "regla",
            "triat": "triat",
            "pente": "pentè",
            "roter": "roter",
            "copar": "copar",
            "pelec": "pèlec",
            "medic": "mèdic",
            "ermas": "ermàs",
            "baina": "baina",
            "visor": "visor",
            "imada": "imada",
            "gavia": "gavià",
            "xelva": "xelvà",
            "liceu": "liceu",
            "pesat": "pesat",
            "falda": "falda",
            "paisa": "paisà",
            "aller": "aller",
            "pixel": "píxel",
            "totil": "tòtil",
            "bujot": "bujot",
            "botit": "botit",
            "magic": "màgic",
            "matar": "matar",
            "lliga": "lliga",
            "salic": "sàlic",
            "colza": "colza",
            "faeto": "faetó",
            "livid": "lívid",
            "canya": "canya",
            "cigni": "cigni",
            "xisca": "xisca",
            "biela": "biela",
            "verra": "verra",
            "potra": "potra",
            "berla": "berla",
            "vedat": "vedat",
            "ferit": "ferit",
            "fotre": "fotre",
            "fuent": "fuent",
            "sarro": "sarró",
            "plaga": "plaga",
            "burla": "burla",
            "bavos": "bavós",
            "media": "medià",
            "carda": "carda",
            "bleix": "bleix",
            "vinos": "vinós",
            "infim": "ínfim",
            "malla": "malla",
            "calat": "càlat",
            "bufat": "bufat",
            "dotar": "dotar",
            "gomer": "gomer",
            "segal": "sègal",
            "metge": "metge",
            "doral": "doral",
            "diton": "díton",
            "plana": "plana",
            "durio": "dúrio",
            "napia": "nàpia",
            "raola": "raola",
            "palto": "paltó",
            "mamba": "mamba",
            "dogam": "dogam",
            "boval": "boval",
            "fogot": "fogot",
            "caspi": "caspi",
            "coana": "coana",
            "borli": "borlí",
            "molsa": "molsa",
            "emboc": "emboc",
            "bolla": "bolla",
            "calat": "calat",
            "sogra": "sogra",
            "anoll": "anoll",
            "oblic": "oblic",
            "veler": "veler",
            "xaman": "xaman",
            "perdo": "perdó",
            "ptosi": "ptosi",
            "runar": "runar",
            "serra": "serrà",
            "bravo": "bravo",
            "eixit": "eixit",
            "moixi": "moixí",
            "reüll": "reüll",
            "dandi": "dandi",
            "pobre": "pobre",
            "bufet": "bufet",
            "modul": "mòdul",
            "sunna": "sunna",
            "espeu": "espeu",
            "xofer": "xofer",
            "noble": "noble",
            "taulo": "tauló",
            "lauda": "lauda",
            "mucus": "mucus",
            "sucos": "sucós",
            "xaica": "xaica",
            "rosca": "rosca",
            "cabal": "cabal",
            "aldea": "aldea",
            "causa": "causa",
            "carto": "cartó",
            "morsa": "morsa",
            "dogon": "dogon",
            "veral": "veral",
            "uncio": "unció",
            "plato": "plató",
            "terra": "terra",
            "trepa": "trepa",
            "ixent": "ixent",
            "llumi": "llumí",
            "budic": "búdic",
            "murri": "murri",
            "besso": "bessó",
            "omega": "omega",
            "pauta": "pauta",
            "rodat": "rodat",
            "catxa": "catxa",
            "embus": "embús",
            "culet": "culet",
            "quico": "quico",
            "nafra": "nafra",
            "bauxa": "bauxa",
            "colet": "colet",
            "seixa": "seixa",
            "cosit": "cosit",
            "plica": "plica",
            "ninot": "ninot",
            "hidra": "hidra",
            "mogut": "mogut",
            "fondo": "fondo",
            "viure": "viure",
            "paper": "paper",
            "estat": "estat",
            "lleme": "lleme",
            "mauri": "maurí",
            "modic": "mòdic",
            "pluja": "plujà",
            "xarxo": "xarxó",
            "jugar": "jugar",
            "viril": "viril",
            "zelos": "zelós",
            "tonic": "tònic",
            "serbi": "serbi",
            "retor": "rètor",
            "barat": "barat",
            "gabio": "gabió",
            "mafic": "màfic",
            "psoes": "psoes",
            "dries": "dries",
            "habit": "hàbit",
            "bucar": "búcar",
            "clava": "clava",
            "fosfe": "fosfè",
            "cleta": "cleta",
            "claro": "claró",
            "palla": "palla",
            "penic": "penic",
            "xurma": "xurma",
            "mular": "mular",
            "roure": "roure",
            "peita": "peita",
            "tafoi": "tafoi",
            "altre": "altre",
            "floro": "floró",
            "tolta": "tolta",
            "alqui": "alquí",
            "cadup": "cadup",
            "rigid": "rígid",
            "gauss": "gauss",
            "talla": "talla",
            "limit": "límit",
            "alcio": "alció",
            "punic": "púnic",
            "fosca": "fosca",
            "badoc": "badoc",
            "minso": "minso",
            "ultim": "últim",
            "enjub": "enjub",
            "pages": "pagès",
            "sofre": "sofre",
            "tesor": "tesor",
            "senis": "senís",
            "deure": "deure",
            "vitri": "vitri",
            "tauro": "tauró",
            "arnat": "arnat",
            "calma": "calma",
            "actor": "actor",
            "espia": "espia",
            "astut": "astut",
            "oment": "oment",
            "orsar": "orsar",
            "sever": "sèver",
            "cinta": "cinta",
            "hindu": "hindú",
            "manya": "manya",
            "força": "força",
            "poder": "poder",
            "tenar": "tènar",
            "cervi": "cerví",
            "repic": "repic",
            "triba": "triba",
            "copia": "còpia",
            "crato": "crató",
            "rient": "rient",
            "diner": "diner",
            "bassa": "bassa",
            "haver": "haver",
            "paria": "paria",
            "rubor": "rubor",
            "sidos": "sidós",
            "veros": "verós",
            "bonas": "bonàs",
            "bambu": "bambú",
            "clapa": "clapa",
            "monge": "monge",
            "sella": "sella",
            "safra": "safrà",
            "pompa": "pompa",
            "llosc": "llosc",
            "basar": "basar",
            "ascle": "ascle",
            "tenis": "tenis",
            "mitjo": "mitjó",
            "solar": "solar",
            "pique": "piqué",
            "boric": "bòric",
            "segle": "segle",
            "salut": "salut",
            "molar": "molar",
            "seuos": "seuós",
            "rufol": "rúfol",
            "brusc": "brusc",
            "sisca": "sisca",
            "rabic": "ràbic",
            "codol": "còdol",
            "golfo": "golfo",
            "camut": "camut",
            "ample": "ample",
            "coure": "coure",
            "paput": "paput",
            "fasic": "fàsic",
            "cegui": "ceguí",
            "himen": "himen",
            "oleat": "oleat",
            "peiot": "peiot",
            "remis": "remís",
            "xumet": "xumet",
            "malbo": "malbò",
            "isidi": "isidi",
            "virat": "virat",
            "lloga": "lloga",
            "coral": "coral",
            "geliu": "geliu",
            "alosa": "alosa",
            "mitja": "mitjà",
            "pecat": "pecat",
            "prest": "prest",
            "estil": "estil",
            "sinia": "sínia",
            "pista": "pista",
            "calid": "càlid",
            "candi": "candi",
            "pudos": "pudós",
            "ducat": "ducat",
            "curri": "curri",
            "breny": "breny",
            "porca": "porca",
            "serva": "serva",
            "doset": "doset",
            "banda": "banda",
            "tapis": "tapís",
            "fibla": "fibla",
            "glera": "glera",
            "bolig": "bolig",
            "bifer": "bífer",
            "toria": "tòria",
            "vimet": "vímet",
            "llest": "llest",
            "cresp": "cresp",
            "xapat": "xapat",
            "comit": "còmit",
            "venut": "venut",
            "mugir": "mugir",
            "denou": "denou",
            "cofre": "cofre",
            "rivet": "rivet",
            "vinya": "vinya",
            "succi": "succí",
            "massa": "massa",
            "sadic": "sàdic",
            "civil": "civil",
            "gatge": "gatge",
            "fusio": "fusió",
            "podar": "podar",
            "nuvol": "núvol",
            "datiu": "datiu",
            "feral": "feral",
            "furga": "furga",
            "dacro": "dacró",
            "albir": "albir",
            "balou": "balou",
            "sonar": "sonar",
            "futil": "fútil",
            "tsuga": "tsuga",
            "anode": "ànode",
            "balda": "balda",
            "fatxa": "fatxa",
            "amant": "amant",
            "tofol": "tòfol",
            "xebro": "xebró",
            "dalet": "dàlet",
            "afuar": "afuar",
            "draga": "draga",
            "gobid": "gòbid",
            "triti": "triti",
            "trull": "trull",
            "osmic": "òsmic",
            "fonda": "fonda",
            "clisi": "clisi",
            "murga": "murga",
            "renos": "renòs",
            "soler": "soler",
            "amura": "amura",
            "rauxa": "rauxa",
            "gaudi": "gaudi",
            "canot": "canot",
            "boldo": "boldo",
            "arpio": "arpió",
            "nevus": "nevus",
            "falca": "falca",
            "gihad": "gihad",
            "boxer": "bòxer",
            "epoca": "època",
            "redir": "redir",
            "sulfa": "sulfà",
            "cuell": "cuell",
            "gamoi": "gamoi",
            "bivia": "bívia",
            "taper": "taper",
            "girat": "girat",
            "xulla": "xulla",
            "hansa": "hansa",
            "farad": "farad",
            "rimer": "rimer",
            "arreu": "arreu",
            "urpir": "urpir",
            "rugos": "rugós",
            "acull": "acull",
            "hades": "hades",
            "xamba": "xamba",
            "gussi": "gussi",
            "malvi": "malví",
            "dubni": "dubni",
            "anyil": "anyil",
            "cueto": "cuetó",
            "betum": "betum",
            "ribas": "ribàs",
            "forca": "forca",
            "tropa": "tropà",
            "molar": "molar",
            "maqui": "maqui",
            "lamed": "làmed",
            "bitol": "bitol",
            "viola": "viola",
            "lacar": "lacar",
            "ferro": "ferró",
            "beisa": "beisa",
            "aquos": "aquós",
            "menta": "menta",
            "voler": "voler",
            "bagot": "bagot",
            "betel": "bètel",
            "ceros": "cerós",
            "nyora": "nyora",
            "burxa": "burxa",
            "jonic": "jònic",
            "mocat": "mocat",
            "taiga": "taigà",
            "algid": "àlgid",
            "brito": "britó",
            "llima": "llima",
            "sesam": "sèsam",
            "nomer": "nòmer",
            "local": "local",
            "quant": "quant",
            "xalat": "xalat",
            "ligni": "ligni",
            "gabia": "gàbia",
            "alami": "alamí",
            "aigua": "aigua",
            "talpa": "talpa",
            "darga": "darga",
            "pigre": "pigre",
            "limfa": "limfa",
            "curos": "curós",
            "reves": "revés",
            "criat": "criat",
            "vivid": "vívid",
            "randa": "randa",
            "banjo": "banjo",
            "magne": "magne",
            "fenia": "fenià",
            "suber": "súber",
            "murta": "murta",
            "docil": "dòcil",
            "bover": "bover",
            "llapo": "llapó",
            "untet": "untet",
            "gelor": "gelor",
            "oller": "oller",
            "saule": "saule",
            "moure": "moure",
            "casba": "casba",
            "obrer": "obrer",
            "metre": "metre",
            "halit": "hàlit",
            "gueto": "gueto",
            "music": "músic",
            "mocos": "mocós",
            "tetol": "tètol",
            "pansa": "pansa",
            "rajol": "rajol",
            "gemec": "gemec",
            "encis": "encís",
            "tuber": "túber",
            "nedol": "nèdol",
            "pizza": "pizza",
            "renec": "rènec",
            "julia": "julià",
            "sipio": "sipió",
            "potxo": "potxó",
            "coble": "coble",
            "galio": "galió",
            "fadri": "fadrí",
            "junça": "junça",
            "sigma": "sigma",
            "ultra": "ultra",
            "pitic": "pític",
            "oliva": "oliva",
            "bolit": "bòlit",
            "xurro": "xurro",
            "botxa": "botxa",
            "aloja": "aloja",
            "trast": "trast",
            "lider": "líder",
            "bitxo": "bitxo",
            "cebua": "cebuà",
            "sotil": "sòtil",
            "finca": "finca",
            "imido": "imido",
            "mamei": "mamei",
            "music": "music",
            "obenc": "obenc",
            "arter": "arter",
            "visat": "visat",
            "romer": "romer",
            "rober": "rober",
            "alena": "alena",
            "gneis": "gneis",
            "pleba": "plebà",
            "gicar": "gicar",
            "atxem": "atxem",
            "mirat": "mirat",
            "piric": "píric",
            "xucla": "xucla",
            "verge": "verge",
            "daixo": "daixò",
            "statu": "statu",
            "denou": "dènou",
            "civic": "cívic",
            "pileu": "píleu",
            "flint": "flint",
            "poros": "porós",
            "oïdor": "oïdor",
            "coper": "coper",
            "raser": "raser",
            "cafta": "caftà",
            "faena": "faena",
            "gairo": "gairó",
            "canca": "canca",
            "dulia": "dulia",
            "gumia": "gumia",
            "macla": "macla",
            "sacre": "sacre",
            "taros": "tarós",
            "prosa": "prosa",
            "canut": "canut",
            "nugos": "nugós",
            "mujol": "mujol",
            "tubul": "túbul",
            "tirat": "tirat",
            "gaire": "gaire",
            "bigam": "bígam",
            "anell": "anell",
            "presa": "presa",
            "placa": "placa",
            "tigre": "tigre",
            "olier": "olier",
            "violi": "violí",
            "jurat": "jurat",
            "carpa": "carpa",
            "padda": "padda",
            "tatar": "tàtar",
            "azole": "azole",
            "venia": "vènia",
            "satir": "sàtir",
            "renou": "renou",
            "porra": "porra",
            "brisa": "brisa",
            "ardit": "ardit",
            "landa": "landa",
            "donja": "donja",
            "orins": "orins",
            "xitar": "xitar",
            "nevas": "nevàs",
            "melic": "melic",
            "ganut": "ganut",
            "fines": "finès",
            "macar": "macar",
            "sedos": "sedós",
            "natro": "natró",
            "plint": "plint",
            "daric": "dàric",
            "ronyo": "ronyó",
            "panot": "panot",
            "burca": "burca",
            "frare": "frare",
            "boiar": "boiar",
            "nafta": "nafta",
            "ureid": "ureid",
            "pensa": "pensa",
            "auric": "àuric",
            "alarb": "alarb",
            "catxo": "catxo",
            "cosco": "coscó",
            "xines": "xinès",
            "rapis": "rapis",
            "pelag": "pèlag",
            "visca": "visca",
            "iodat": "iodat",
            "facto": "facto",
            "molid": "mòlid",
            "venit": "vènit",
            "matxo": "matxo",
            "exina": "exina",
            "barba": "barba",
            "maria": "maria",
            "nigul": "nigul",
            "calua": "calua",
            "pegat": "pegat",
            "bagas": "bagàs",
            "colar": "colar",
            "guixa": "guixa",
            "furar": "furar",
            "cisma": "cisma",
            "arnes": "arnès",
            "testa": "testa",
            "avena": "avena",
            "bantu": "bantú",
            "prope": "propè",
            "fluix": "fluix",
            "curat": "curat",
            "sonda": "sonda",
            "tipic": "típic",
            "pegas": "pegàs",
            "ullar": "ullar",
            "cinic": "cínic",
            "serie": "sèrie",
            "xapas": "xapàs",
            "banya": "banya",
            "aleta": "aleta",
            "xamat": "xamat",
            "vacci": "vaccí",
            "cotid": "còtid",
            "tmesi": "tmesi",
            "saler": "saler",
            "gemma": "gemma",
            "turba": "turba",
            "botil": "bòtil",
            "tsade": "tsade",
            "silva": "silvà",
            "cuafi": "cuafí",
            "culte": "culte",
            "xampu": "xampú",
            "venja": "venja",
            "moixa": "moixa",
            "plega": "plega",
            "mares": "marès",
            "cassa": "cassa",
            "toxic": "tòxic",
            "sucub": "súcub",
            "saiol": "saiol",
            "bouer": "bouer",
            "motiu": "motiu",
            "pubic": "púbic",
            "sulid": "súlid",
            "pedon": "pèdon",
            "votiu": "votiu",
            "salat": "salat",
            "fetge": "fetge",
            "setge": "setge",
            "durar": "durar",
            "ratio": "ràtio",
            "xacar": "xacar",
            "ordit": "ordit",
            "vomit": "vòmit",
            "boira": "boira",
            "lobat": "lobat",
            "quart": "quart",
            "melgo": "melgó",
            "runic": "rúnic",
            "talus": "talús",
            "locul": "lòcul",
            "pifol": "pífol",
            "cabut": "cabut",
            "ramos": "ramós",
            "tolus": "tolus",
            "trava": "trava",
            "xibiu": "xibiu",
            "xaire": "xaire",
            "cafre": "cafre",
            "papat": "papat",
            "cebid": "cèbid",
            "ficus": "ficus",
            "rogle": "rogle",
            "arena": "arena",
            "colis": "colís",
            "hadro": "hadró",
            "betic": "bètic",
            "picea": "pícea",
            "delga": "delga",
            "gossa": "gossa",
            "xerra": "xerra",
            "ansat": "ansat",
            "ileal": "ileal",
            "zonat": "zonat",
            "marro": "marró",
            "profa": "profà",
            "imino": "imino",
            "valua": "vàlua",
            "sabir": "sabir",
            "gitat": "gitat",
            "oxina": "oxina",
            "cloca": "cloca",
            "larid": "làrid",
            "repes": "repès",
            "fibra": "fibra",
            "vidia": "vídia",
            "famul": "fàmul",
            "hilum": "hílum",
            "trufa": "trufa",
            "rigor": "rigor",
            "palma": "palma",
            "nival": "nival",
            "paten": "patén",
            "bleda": "bleda",
            "joier": "joier",
            "sulta": "sultà",
            "humic": "húmic",
            "sarja": "sarja",
            "noema": "noema",
            "tamil": "tàmil",
            "siria": "sirià",
            "llord": "llord",
            "caqui": "caqui",
            "usual": "usual",
            "fruit": "fruit",
            "negat": "negat",
            "ollal": "ollal",
            "cleda": "cleda",
            "mitic": "mític",
            "saber": "saber",
            "corea": "corea",
            "tiras": "tiràs",
            "begui": "beguí",
            "gaiat": "gaiat",
            "barra": "barra",
            "citro": "citró",
            "tabic": "tàbic",
            "volea": "volea",
            "aulic": "àulic",
            "nocer": "nocer",
            "valid": "vàlid",
            "cugul": "cugul",
            "penat": "penat",
            "donar": "donar",
            "motet": "motet",
            "fiola": "fiola",
            "joana": "joana",
            "pinta": "pinta",
            "regul": "règul",
            "coipu": "coipú",
            "tanca": "tanca",
            "babol": "babol",
            "niobi": "niobi",
            "muflo": "mufló",
            "volat": "volat",
            "collo": "colló",
            "intim": "íntim",
            "munta": "munta",
            "raent": "raent",
            "filat": "filat",
            "pesar": "pesar",
            "focid": "fòcid",
            "tatxa": "tatxa",
            "sutja": "sutja",
            "salmo": "salmó",
            "toner": "tòner",
            "tampo": "tampó",
            "caoli": "caolí",
            "botar": "botar",
            "vagar": "vagar",
            "xufer": "xufer",
            "toric": "tòric",
            "persa": "persa",
            "borar": "borar",
            "roget": "roget",
            "cadec": "càdec",
            "debit": "dèbit",
            "canal": "canal",
            "apres": "aprés",
            "agros": "agrós",
            "inici": "inici",
            "mudat": "mudat",
            "gotos": "gotós",
            "ruïna": "ruïna",
            "laser": "làser",
            "salpa": "salpa",
            "escar": "escar",
            "molla": "molla",
            "llama": "llama",
            "dalla": "dalla",
            "belar": "belar",
            "nonet": "nonet",
            "solid": "sòlid",
            "perlo": "perló",
            "devot": "devot",
            "pixat": "pixat",
            "xicot": "xicot",
            "tasca": "tasca",
            "moreu": "moreu",
            "pilor": "pílor",
            "fucus": "fucus",
            "cimar": "cimar",
            "alduf": "alduf",
            "nadiu": "nadiu",
            "porus": "porus",
            "caria": "cària",
            "ungla": "ungla",
            "menys": "menys",
            "broll": "broll",
            "galda": "galda",
            "incus": "incús",
            "arçar": "arçar",
            "dotze": "dotze"}
        var wdsB = ["canot", "gerna", "unira", "mogol", "floco", "valem", "apomo", "color", "forat", "vides", "tibar", "batan", "actiu", "ondos", "gorra", "poema", "crear", "ocult", "oblit", "legal", "trama", "culpa", "rugir", "farao", "pedra", "hiats", "torra", "exode", "fleca", "polpa", "rigor", "lloar", "magia", "sitar", "aleia", "ocult", "lloau", "obert", "gorra", "marca", "usual", "rural", "trait", "adint", "glosa", "oculs", "pubil", "amens", "glose", "piuar", "obram", "orbat", "segol", "resta", "folls", "aflac", "acoti", "gaste", "entre", "adesa", "petjo", "sanas", "cimau", "bascs", "duler", "diaca", "untes", "puigs", "xutat", "faiço", "atzuf", "rosti", "borar", "acori", "seuen", "aidat", "xapam", "resin", "sacii", "penes", "jeure", "entom", "caiem", "haveu", "braol", "odieu", "entov", "culpo", "negau", "ullis", "romeu", "jaent", "pudit", "adars", "tibas", "boris", "soliu", "raono", "enseu", "barat", "humor", "ocrea", "cimer", "llard", "hapax", "rosca", "fires", "perxe", "ujare", "micro", "sureu", "rigor", "vares", "pixas", "amput", "tauls", "pispi", "ribes", "melos", "barbs", "brial", "liles", "bruta", "ronyo", "semal", "taler", "salsi", "galze", "nafil", "rimer", "vacau", "drils", "notin", "desem", "daria", "sabat", "culpe", "soges", "penas", "jonic", "nasal", "redeu", "adoni", "volam", "banyo", "trepe", "siset", "fusta", "xopam", "pauta", "ruscs", "xucli", "apomi", "plagi", "podis", "budic", "coxal", "sioux", "retop", "oliam", "barro", "drape", "alboc", "patum", "pisis", "rapar", "mofar", "fidel", "burat", "aptes", "grati", "preso", "candi", "rapes", "opili", "opile", "trita", "napes", "bagra", "rosem", "totxo", "torra", "doria", "agarr", "posta", "desfa", "casso", "delat", "altri", "vetin", "arper", "remis", "atics", "gamam", "deura", "orlas", "ungia", "nombr", "freda", "pesau", "manxu", "ultre", "mesis", "summa", "carde", "sembr", "epoca", "orlin", "resum", "bario", "preua", "corde", "liric", "sipen", "salti", "boges", "avila", "hagen", "avide", "vagui", "manec", "iuans", "gotzo", "menta", "valsa", "repom", "mocar", "salmo", "bombe", "amina", "borur", "mesem", "uquem", "abdic", "raser", "menat", "fraus", "biteu", "vetam", "meses", "silex", "sofas", "desca", "fraro", "eixat", "venci", "arens", "rimel", "solte", "bequi", "allop", "agils", "aspro", "betza", "rumbs", "treps", "obtus", "bipar", "dacro", "eduit", "atrau", "durau", "junye", "xarol", "velis", "halat", "depas", "nansa", "labor", "aroil", "gruta", "gemim", "criar", "inies", "sipos", "xanca", "taulo", "rotam", "fumos", "abret", "parar", "adisc", "retes", "teles", "eluia", "opero", "honra", "aspir", "malei", "calle", "azots", "solia", "damas", "digne", "vagiu", "menar", "metol", "iries", "gongs", "votam", "flaca", "xelva", "penys", "corbi", "bracs", "fadeu", "maneg", "bramo", "untin", "escuo", "aclot", "dinal", "seure", "urgiu", "polse", "lobul", "papen", "guipo", "invoc", "acate", "patin", "triat", "aterr", "ruixi", "folgo", "papir", "pedis", "turba", "casen", "pagat", "libin", "flous", "catio", "fogal", "sorti", "giras", "certa", "cerot", "xapis", "copar", "fixis", "batut", "palps", "boral", "doina", "futil", "olieu", "alers", "hiali", "cacic", "acoll", "odiam", "organ", "anseu", "boxau", "lluia", "antre", "dener", "retos", "binam", "lobus", "imino", "xumem", "abism", "munyi", "crear", "eduls", "brecs", "alocs", "dines", "etics", "ferem", "semin", "prear", "oiria", "tacau", "virin", "gerdo", "rodin", "munts", "sompa", "sompo", "camps", "senys", "farts", "broma", "toral", "sollo", "augur", "ament", "pruen", "ovats", "punti", "ignis", "caren", "neveu", "xapes", "vagat", "refaç", "senal", "birba", "tiple", "adone", "esvai", "toixo", "perla", "calet", "tuege", "fener", "urpes", "salda", "ermam", "galta", "vedis", "retut", "nadeu", "agito", "divis", "suber", "ences", "aleno", "indri", "sajol", "parid", "trots", "flami", "binis", "pipin", "ocupe", "nedis", "cuina", "midis", "aloma", "areal", "turma", "rissi", "rufia", "sural", "fosse", "cerda", "repti", "midam", "fugis", "trona", "veges", "mamat", "estan", "negat", "cuite", "previ", "vagar", "mufin", "mones", "daura", "coies", "ungiu", "sipem", "cleca", "tanes", "polpa", "saime", "viuen", "aidau", "diols", "amaça", "mobla", "lluin", "tireu", "talau", "macla", "tinta", "embaf", "domau", "adarb", "enver", "peies", "papeu", "ultim", "goles", "pabul", "omets", "llanç", "arets", "cursi", "elets", "dauro", "borau", "feixe", "obesa", "puços", "adond", "radie", "ratis", "lumen", "torre", "atxim", "jaupe", "dalls", "eixit", "raima", "ninou", "ferla", "malbo", "avaro", "tapio", "arços", "delta", "arrog", "patix", "calga", "niara", "socia", "sumit", "ploro", "radic", "mapin", "sumac", "semat", "birla", "laxam", "surti", "xiula", "gosas", "roseu", "amigo", "colls", "untor", "lidar", "cagam", "votes", "sumau", "creti", "sonsa", "justo", "pudim", "adiem", "xorcs", "mostr", "llimi", "tines", "redui", "amarg", "pesal", "adorm", "motiu", "acaça", "volts", "baric", "robor", "salpi", "tards", "gabio", "coper", "gobid", "votem", "lluco", "pitge", "biret", "sufoc", "altre", "anals", "gonio", "rigui", "lutia", "negue", "rumor", "veçar", "belai", "duram", "balda", "tamil", "abjur", "talpo", "santo", "alant", "dadas", "exult", "atons", "iresc", "ploma", "sanat", "cesar", "gabun", "cuers", "amolo", "colze", "gelat", "desig", "draga", "viner", "coana", "esmoc", "balir", "derna", "bagul", "motlo", "excus", "firas", "solga", "feiem", "xarop", "pequi", "sequi", "cabeç", "feble", "penin", "tenor", "saben", "furar", "xamis", "solid", "coven", "germa", "sexin", "raspo", "labil", "agenç", "doric", "ramut", "ratin", "atipl", "dules", "quede", "arene", "etens", "arrap", "brenc", "conri", "fluis", "pisco", "pelar", "mapam", "seues", "cagar", "xavos", "sipes", "voraç", "eixos", "capin", "rodat", "bodes", "salvi", "llesc", "grapa", "cisar", "taxeu", "afine", "ajovo", "gates", "vinet", "titot", "surat", "duras", "rinya", "fauna", "dotes", "podau", "llimo", "varam", "quins", "femes", "prima", "enram", "peres", "botam", "escru", "juste", "mixta", "roger", "expir", "talcs", "ensac", "onege", "tofes", "domta", "poema", "nigua", "gebro", "acces", "culas", "robam", "hales", "nuare", "atupa", "aedes", "saurs", "quart", "xalar", "ponxo", "pelem", "ulnar", "esmin", "pinxo", "manar", "batre", "deiem", "vegem", "caids", "urpeu", "capim", "alçar", "pugin", "manes", "grufa", "aurta", "datam", "oneig", "exode", "arçot", "penge", "atiin", "erici", "casse", "uadis", "morer", "mamba", "aquen", "escot", "piuen", "botar", "ostes", "taxat", "cleda", "enras", "asila", "escoe", "valer", "desfe", "ureic", "tabid", "pomar", "fenye", "ensus", "lacto", "gosat", "carda", "sella", "galba", "lluix", "taxin", "salts", "untem", "fanal", "digit", "quist", "laxos", "animo", "caças", "mitic", "proes", "fitau", "gemix", "eguer", "gests", "pomul", "capsa", "rasca", "boceu", "refiu", "vicii", "escum", "nevar", "tabic", "atenc", "sumat", "votin", "regui", "ceris", "encon", "dicti", "nebot", "enjoi", "mambo", "educo", "corfa", "caçam", "elevo", "taula", "visiu", "sorgi", "ferro", "marli", "grapo", "ramem", "bines", "monso", "races", "fitar", "ruflo", "petar", "aluda", "perds", "dogon", "ullin", "valia", "alegi", "indis", "mulat", "torca", "ramau", "joncs", "figle", "freni", "arums", "radia", "maldo", "falbs", "agama", "xevat", "coqui", "erolo", "flors", "fixas", "tatxe", "orlat", "benei", "llime", "penna", "carat", "apleg", "oleum", "robar", "alars", "poden", "llaga", "zelis", "guste", "gitau", "veten", "xaire", "bitis", "eroga", "serri", "petin", "socol", "acnes", "vireu", "naspr", "didal", "pluto", "carto", "adeia", "retor", "paers", "rinys", "jaspi", "sopas", "furon", "orlam", "suris", "ansia", "atipe", "delir", "besuc", "festi", "veiem", "mamin", "obeit", "gorgs", "fumes", "fucal", "llufa", "aneda", "crano", "raien", "corns", "vetis", "xocau", "lofid", "cride", "terna", "visit", "miolo", "creen", "dacia", "costo", "cluca", "abats", "solda", "bocam", "ibers", "olgui", "carni", "colar", "anima", "acati", "boiro", "gasin", "tegin", "ajudi", "brava", "finit", "rimau", "afins", "frene", "piafe", "pebre", "rival", "ningu", "vapor", "hisso", "copal", "galer", "forta", "tramo", "urpas", "nigul", "bonic", "eters", "deneg", "fotin", "cofis", "valls", "farao", "rugir", "cedim", "cames", "furia", "arree", "sedan", "luxar", "arnot", "redis", "didim", "atoms", "pinti", "brodo", "lliço", "oiada", "rapia", "refio", "disto", "pirat", "capri", "temen", "pudin", "zelin", "inics", "poara", "fruia", "boçam", "coleu", "fosca", "atien", "ruvet", "finin", "gogis", "ovule", "creuo", "bogau", "guill", "tenis", "xerif", "ciara", "visat", "floti", "dindo", "trins", "bleix", "odiau", "abacs", "griot", "apujo", "poant", "trenc", "sutze", "nuets", "adorn", "xafis", "nauta", "ossis", "ungis", "xarpe", "zebus", "ferum", "cadet", "alnes", "barbe", "xapos", "boias", "xurro", "carie", "helix", "tepui", "xiroi", "thais", "genal", "bufeg", "aleps", "pogut", "rendi", "etile", "ajeus", "veleu", "sipam", "criat", "ombri", "atesa", "cotno", "medic", "balmo", "rodas", "encet", "absis", "soies", "feror", "laxeu", "films", "embov", "erers", "davia", "menau", "fugen", "colre", "llufe", "orine", "fonat", "brics", "tomin", "espic", "plego", "firat", "pesin", "finas", "adams", "bable", "cafit", "oiats", "glauc", "bocal", "albir", "sarda", "traga", "reixo", "nervi", "prenc", "vincl", "fiten", "expos", "ballo", "recat", "sondo", "vinos", "lloro", "recoc", "xotra", "airau", "efesi", "lacai", "trucs", "poada", "idees", "suque", "faent", "eject", "alabo", "daven", "fongs", "robas", "antes", "laude", "dures", "iriem", "penau", "erals", "boter", "pavia", "pelas", "pelin", "escau", "pagin", "ovins", "berla", "vegis", "manas", "entra", "encas", "obses", "malts", "astos", "abato", "guier", "amils", "saiga", "cursa", "corni", "felus", "xauti", "nines", "borda", "ricor", "dulia", "anins", "erole", "eduim", "creia", "sorre", "esput", "aplic", "sallo", "embag", "otics", "inuit", "perdo", "joani", "foscs", "crits", "silfs", "boreu", "reces", "remar", "etins", "piqui", "ajaem", "runes", "baixa", "oreja", "copis", "balot", "urgit", "album", "bolco", "ogiva", "monel", "oireu", "ajove", "tonic", "xagri", "tinoi", "penca", "acote", "adreç", "gabas", "soneu", "serve", "dinen", "oblat", "ileum", "eixiu", "ovala", "triam", "sarau", "situo", "sedeg", "ligne", "foses", "sable", "plapa", "llops", "glapi", "oxida", "fixau", "furem", "perdi", "llosa", "clapa", "cuiti", "bleda", "petit", "plane", "minvo", "intui", "obsti", "turca", "ululo", "deses", "cigni", "temeu", "puput", "copeo", "acimo", "lleto", "rente", "titet", "petem", "sacra", "ermen", "indic", "rogic", "recar", "escul", "visem", "plena", "briol", "caper", "nazis", "bineu", "navei", "vença", "cafis", "diurn", "gaseu", "embog", "marci", "udole", "danyi", "bassa", "tubet", "embat", "alara", "veneu", "xites", "panet", "paper", "rafia", "ofert", "motes", "creba", "nomut", "ramas", "cocos", "atrop", "boxis", "ploms", "abate", "ainat", "litua", "surra", "unten", "filla", "libat", "unens", "tumor", "tites", "lloem", "tapit", "sipau", "fumut", "tueig", "babel", "golfs", "veura", "belem", "goigs", "mucic", "eguin", "libau", "venut", "erada", "camfa", "zelam", "ainas", "refem", "gasto", "mires", "embal", "aideu", "sonen", "volas", "sostr", "munio", "farto", "gairo", "fonin", "miosi", "malai", "lleve", "vedau", "marxa", "afuau", "aombr", "letal", "apats", "llema", "agusi", "dente", "premi", "super", "clota", "gruid", "lucre", "rosas", "gelas", "xales", "nones", "caspa", "rapel", "efebs", "begue", "blasm", "vogim", "redic", "oltes", "istme", "xafar", "aguen", "sares", "ondul", "voras", "drama", "fases", "xopes", "junys", "pegar", "eruct", "sexen", "zelos", "vescs", "ameri", "bonir", "duren", "xaiem", "ajoco", "pugni", "avile", "rondo", "balma", "capos", "xapol", "geleu", "torço", "jurem", "arris", "mofat", "campo", "brull", "eixia", "gossa", "rifem", "daran", "catre", "puons", "valva", "alami", "mofam", "files", "halar", "mamem", "coers", "rugiu", "xaves", "solto", "beoci", "arrii", "carta", "pipis", "enzim", "pudel", "gland", "sense", "cegam", "grell", "migra", "olgue", "huris", "dotal", "pagos", "coses", "rists", "sulta", "nivia", "cavam", "auixa", "areni", "godin", "quita", "xumin", "pouin", "pruiu", "riuen", "glati", "rolla", "estuf", "ducar", "guelf", "xufar", "abaca", "agafa", "llavo", "iaios", "umpls", "llaca", "xaria", "ecoto", "fumia", "hajas", "mormo", "miram", "agare", "criis", "piocs", "rumie", "bella", "notas", "nacta", "gorri", "cabla", "fador", "lluim", "bavau", "pirar", "tepal", "divan", "xinen", "porro", "dansa", "xerro", "imams", "passa", "gosar", "piulo", "fitas", "revol", "unisc", "borin", "fotge", "cueto", "badis", "llecs", "menus", "hereu", "sedeu", "desam", "cullo", "vetlo", "malax", "deieu", "manti", "ulnes", "becar", "fenga", "xalem", "semam", "alare", "vilte", "trien", "fedes", "aldol", "estat", "fedal", "masti", "afano", "edils", "jaies", "perix", "glota", "uquen", "gitas", "siula", "crees", "belis", "aguam", "mufam", "sofre", "alous", "remoc", "atuis", "rebut", "urpiu", "notar", "infla", "peoni", "tupau", "irrog", "bolic", "zelat", "bafor", "fracs", "imite", "ciuro", "devor", "hajat", "verms", "sants", "rings", "savis", "perfa", "xitas", "tomes", "ullau", "crues", "nopal", "verda", "cante", "margo", "acera", "rapir", "faras", "masos", "gusla", "vetla", "tries", "gitem", "libra", "rater", "tiris", "curso", "mallo", "azoic", "regia", "anode", "balsa", "xitin", "tinto", "xarpo", "ustio", "pruin", "estim", "menin", "batis", "rejos", "plica", "datil", "orlar", "cureu", "viret", "pages", "uisse", "guisc", "poava", "aleto", "urpim", "depen", "perde", "picor", "vitet", "omars", "urpau", "oblit", "musen", "flixi", "volva", "sapes", "rodis", "afona", "culau", "toliu", "tesau", "xaiau", "calci", "culpa", "cofoi", "aviem", "befeu", "cebua", "sonet", "optau", "infam", "dugis", "glera", "vella", "periu", "piris", "ruixo", "causa", "lupes", "murid", "privo", "gaspo", "popes", "dotas", "maque", "abrom", "matar", "delme", "finco", "forem", "franc", "celau", "artec", "baner", "regle", "mudin", "rafes", "fleix", "peixa", "viros", "arreo", "volto", "calla", "bouer", "gener", "fogat", "mugir", "afani", "idoni", "esmam", "basta", "ergol", "ondam", "bateu", "caçat", "llapo", "bonit", "citro", "prats", "urpem", "escoo", "missa", "muscs", "niats", "tapar", "pengi", "cogut", "erari", "siria", "sitja", "fotre", "flito", "marga", "santa", "pensa", "rupia", "enfoc", "dugue", "troni", "opilo", "saima", "panot", "flama", "nomes", "atxul", "caspi", "alfil", "lloma", "taifa", "calça", "xafes", "rotem", "afues", "unien", "humit", "manxs", "pispa", "vater", "delmo", "prens", "torbe", "gotza", "noiem", "ranis", "rifau", "bitin", "cruio", "vesem", "cuixa", "vinya", "alcem", "planc", "nores", "citen", "cumul", "canso", "coati", "varas", "manos", "desis", "fuell", "paire", "pesta", "osque", "ubico", "vogau", "crido", "surto", "nevas", "gaspa", "laxin", "aspre", "pisos", "copso", "carpa", "ancat", "orsar", "somou", "poral", "nevos", "refet", "aplat", "lluny", "volen", "mimin", "adust", "curas", "veloç", "airas", "boxem", "alejo", "posau", "pauli", "breva", "orada", "pasca", "tofol", "basic", "prove", "posas", "musiu", "jesus", "viada", "acron", "lucra", "torbi", "brind", "mutis", "truja", "nusos", "cares", "nafta", "amola", "traim", "udola", "tinya", "somoc", "bleir", "hamza", "rugix", "cimem", "ribas", "atiar", "prisi", "nyaps", "acamp", "fames", "finat", "oncle", "noema", "raute", "embec", "actua", "colau", "pello", "cavea", "bufit", "ataca", "sacul", "enten", "rista", "rapis", "munte", "fundo", "neons", "miols", "gosen", "hunes", "esmem", "sucos", "minat", "iques", "aqued", "arecs", "xibiu", "summe", "succi", "revis", "polis", "enmig", "jauen", "sedar", "culpi", "encel", "femin", "sirgo", "tutor", "vents", "jacta", "puges", "batio", "danya", "banys", "facto", "estam", "dents", "ricar", "ullot", "ciris", "acids", "rapti", "zelas", "lucid", "duiem", "sufis", "vicia", "xapat", "hajam", "frego", "sogre", "rauco", "untar", "nansu", "encen", "solli", "gogeu", "plomo", "topau", "empro", "quims", "talin", "duita", "sipia", "anant", "paida", "culte", "batin", "airat", "urpit", "emulo", "comic", "atreu", "luxeu", "capit", "tombs", "fresc", "turcs", "gafes", "venti", "clico", "guapo", "haver", "damni", "volum", "rumen", "eluis", "gamin", "idola", "cadap", "tatxa", "comeu", "tatuu", "toles", "matas", "erris", "fenyi", "canço", "galzo", "cucat", "mugix", "maina", "ombra", "dopis", "beril", "begui", "gaton", "godua", "hapte", "dreço", "basam", "telar", "turio", "remud", "jeieu", "siclo", "recau", "provi", "ulule", "rapam", "ondar", "gires", "entes", "llits", "trepi", "fadem", "murgo", "uixos", "foral", "niers", "billo", "niera", "acaro", "milla", "comet", "baste", "altra", "tanya", "mamus", "vigiu", "odore", "eluix", "ignia", "teuto", "acata", "senda", "matis", "metil", "punyo", "vidia", "dolls", "coiot", "pions", "preis", "vesso", "cinic", "godes", "xamam", "funyi", "dalet", "aviis", "teurg", "arruf", "degot", "pinço", "orlen", "renyi", "tarde", "gatin", "uisso", "obriu", "ungle", "negre", "noses", "palpi", "xumet", "rosau", "furro", "matxo", "llevo", "gibos", "lloam", "basto", "psora", "bogas", "odiar", "saqui", "jaios", "gemit", "pilus", "vitre", "teflo", "tusse", "renda", "munix", "pirem", "lagun", "ermem", "juncs", "punic", "serva", "tomam", "popen", "lutis", "dives", "xeols", "canid", "entub", "coura", "varin", "cinti", "casos", "sopar", "metin", "volti", "denta", "mesur", "tanca", "toria", "zuaus", "nugar", "paixo", "coteu", "furti", "inund", "rapta", "cudol", "arpem", "ajups", "jeeps", "potes", "entin", "halau", "alert", "gaies", "mapen", "ratas", "forti", "apell", "limbe", "femem", "exina", "amaci", "dorca", "fluix", "raona", "verra", "sisal", "punes", "xibuc", "saims", "mongi", "arria", "fedai", "crien", "releg", "atupo", "anoll", "bufam", "cofre", "manxi", "croma", "terço", "jegui", "occis", "xinas", "annex", "allis", "balia", "realç", "rauxa", "ansin", "acorr", "tapau", "esboc", "clica", "uvula", "muigs", "alies", "llepo", "actui", "atzar", "cosac", "garso", "domat", "escac", "filar", "golfo", "litis", "doral", "sapla", "servi", "garbo", "cedit", "inflo", "galga", "apamo", "pugui", "omeia", "homes", "grill", "miris", "trivi", "aules", "quico", "desti", "conys", "xinat", "acabo", "clubs", "gemec", "xamem", "moura", "dopam", "vidus", "abund", "etern", "giric", "dalla", "oiara", "mocat", "neden", "llego", "xalau", "irien", "crina", "invit", "escup", "arxiv", "cincs", "pedon", "xatos", "eixes", "pilla", "aziga", "fixeu", "fixat", "crane", "gamar", "ratar", "nomem", "refeu", "rateu", "ordio", "solau", "finau", "zones", "segal", "virau", "tango", "gebra", "acils", "emben", "citri", "raola", "zincs", "brumi", "almud", "dolor", "nedat", "totem", "comit", "afane", "tauli", "cofas", "treim", "jorda", "endeg", "ratem", "capel", "tells", "polca", "telin", "pecar", "irisa", "insto", "azigs", "agrir", "taros", "escal", "tibia", "ablen", "befar", "embla", "ronda", "aidem", "adora", "encub", "honro", "nevis", "tauja", "potxo", "uneix", "renec", "muden", "dones", "grogs", "multi", "alfac", "afore", "lesbi", "eduir", "paner", "toric", "brito", "ometi", "dropo", "sexau", "guerx", "oposo", "moral", "poals", "sumiu", "arnes", "civet", "sello", "freta", "massa", "gruer", "dubta", "verge", "bujot", "munia", "giren", "fossa", "prems", "sogar", "tampo", "urdus", "nunci", "trine", "casin", "atupe", "alava", "clous", "bubis", "roins", "brome", "xacat", "guixo", "boigs", "xines", "picas", "frase", "mancs", "fades", "nabab", "plana", "apany", "remas", "devem", "munto", "clori", "retis", "vegen", "velen", "psalm", "agora", "avens", "senye", "vaira", "levic", "cassa", "fixem", "perer", "paste", "rifar", "mimen", "xarra", "gavia", "franj", "papes", "binem", "aclam", "caven", "sopem", "optin", "tudis", "urpia", "finta", "varau", "abril", "nimia", "folri", "tenim", "pelon", "orgia", "brisi", "dries", "himen", "alics", "sedes", "obsto", "bleim", "armes", "nadal", "diman", "molla", "falço", "xorro", "simil", "catxi", "patro", "podex", "azims", "colob", "optem", "belen", "sonde", "ajupi", "toner", "saliv", "nords", "burxe", "tovot", "agria", "tudas", "dolla", "gamau", "draps", "tarta", "peixi", "clipi", "remat", "patac", "rebol", "afect", "ferme", "couro", "dinat", "cuido", "bulli", "bonet", "pinso", "arnos", "raids", "prior", "julep", "xuple", "ajunt", "trava", "boals", "pallo", "envia", "envid", "deveu", "aliin", "jeiem", "papar", "vetle", "bavat", "gueta", "cospi", "danyo", "rajam", "vimet", "domas", "ciada", "serio", "sargs", "quars", "abuse", "lamed", "aries", "gloms", "clixe", "osset", "saneu", "cabal", "tabac", "sofra", "pelfi", "estop", "sumam", "sonor", "destr", "ermas", "guind", "fures", "corbs", "cuafi", "rates", "rimen", "blind", "taqui", "oliin", "faixi", "corba", "votas", "blans", "mapau", "bisen", "blogs", "midem", "viara", "peono", "capat", "tixin", "bocis", "pasta", "assol", "infim", "danes", "imito", "abras", "furis", "llana", "zebra", "omega", "uquis", "luxat", "quals", "cimeu", "infer", "plets", "estil", "numer", "fumis", "ovari", "lidia", "cuejo", "casco", "cario", "arbra", "burxo", "repus", "horta", "renov", "nafre", "preuo", "ascli", "molls", "braça", "mosta", "helis", "xinxa", "bavos", "clams", "maços", "rangs", "flect", "viren", "afuse", "blocs", "ampli", "xuixi", "esver", "hages", "daics", "tones", "tomeu", "cabut", "escam", "nanne", "reial", "rutes", "mofis", "fumam", "clore", "apiol", "jotes", "raons", "fofes", "comes", "pugil", "buixi", "tinga", "conco", "pisas", "bubes", "punxi", "sumen", "vacar", "decep", "besos", "xutar", "sunna", "tatos", "ouada", "dotin", "acide", "forge", "orara", "guite", "basal", "aprov", "mofem", "cucos", "baciv", "jutes", "crupo", "idear", "futur", "olius", "cotxa", "natge", "paduc", "meteu", "cesse", "rimin", "aspia", "poblo", "pillo", "porus", "tempt", "uniem", "incus", "dotam", "isoet", "fumas", "aines", "forni", "caseu", "levit", "simul", "tolen", "doblo", "acins", "canut", "bitau", "grave", "allit", "calli", "rasau", "laica", "samba", "nedam", "farci", "volei", "murex", "erreu", "variu", "remes", "sonam", "sabes", "dient", "mamas", "amoin", "iodeu", "tatue", "escud", "ritma", "duple", "avals", "canal", "addui", "otica", "arjau", "boixe", "ainin", "venir", "tapem", "gunit", "fules", "xarri", "bates", "biseu", "muflo", "dinis", "capem", "anurs", "manto", "grifa", "arpen", "solfa", "ansam", "infon", "laxat", "acora", "paler", "acerb", "micra", "emesi", "ambla", "crisi", "preem", "orbem", "infus", "salms", "marts", "gansa", "tremi", "fogas", "rouro", "bugia", "xacar", "sabut", "carra", "migro", "moixi", "salao", "veure", "farda", "enros", "avoca", "flame", "fereu", "xameu", "amoms", "bloom", "sapid", "volis", "trina", "caram", "condo", "dolga", "landa", "obrer", "cagau", "gireu", "eleve", "devia", "mauro", "salas", "rifat", "bisau", "minyo", "sotil", "soste", "malic", "ucant", "pesat", "unflo", "lliso", "reobr", "frust", "aguda", "topas", "usual", "osqui", "dareu", "boria", "emboc", "tocau", "oloro", "rumii", "avids", "nyoca", "finam", "lleix", "acare", "calmo", "pairi", "impos", "esmen", "acido", "morla", "acubo", "embos", "embol", "xopis", "cansa", "olori", "auixi", "rulla", "afila", "valor", "xauto", "binas", "molis", "alcid", "fotem", "anisa", "caira", "malls", "cedre", "testa", "giris", "atots", "amoni", "mener", "pipeu", "terme", "adula", "russa", "onden", "lupus", "vexam", "voler", "rapix", "remen", "tifus", "espin", "gatge", "remor", "estiu", "garri", "beveu", "focus", "aviar", "udoli", "llaur", "runam", "punia", "beleg", "botas", "pixin", "voleu", "jamai", "trito", "polim", "peseu", "finim", "arega", "citau", "henna", "boiam", "fenya", "expia", "velin", "rosco", "agres", "cloia", "cuell", "armeu", "grumi", "tosso", "rotic", "napea", "caieu", "entoi", "asens", "encep", "julls", "xaute", "amant", "tudam", "dosar", "petes", "sauri", "aller", "rajau", "cimat", "porra", "jurin", "seran", "barri", "toixa", "paria", "soldi", "bogal", "solde", "teste", "opini", "mesin", "sumeu", "duris", "voles", "entec", "danse", "rampa", "imbui", "traus", "xapem", "rares", "afono", "aleig", "guany", "murar", "cisau", "rotau", "morts", "saupa", "jugas", "capau", "broco", "suava", "movem", "desou", "uques", "gamem", "flote", "sotgi", "ansas", "nouen", "fadam", "bocin", "oeixs", "nouer", "popau", "sarge", "fugiu", "espii", "estub", "norai", "aspio", "tesen", "desen", "duieu", "padri", "apreu", "juies", "jacto", "enfit", "sulid", "feren", "niero", "encov", "vogam", "arrua", "ganta", "teina", "regli", "rasat", "emani", "bland", "caves", "reiem", "agrix", "mirri", "metge", "gemma", "sufet", "recam", "halen", "tauro", "tibin", "macau", "etusa", "tipus", "manxo", "cassi", "canon", "pupes", "muras", "cests", "fugim", "silil", "proba", "brido", "agrit", "elder", "nicia", "gosem", "dosau", "zonat", "tendo", "acres", "girau", "bevia", "mineu", "beura", "ancor", "vacas", "sanau", "brums", "visau", "embic", "gemir", "busca", "pesam", "pixam", "altea", "noris", "rolle", "ileal", "plafo", "treva", "profa", "plore", "prema", "punts", "gluti", "radar", "vinic", "puell", "ideem", "queta", "vulva", "aguar", "mengi", "apeti", "sigut", "eolit", "untat", "xotis", "ondeu", "oposa", "monot", "piras", "telex", "burjo", "moreu", "claca", "celam", "blets", "mania", "itric", "oixen", "amuro", "totxa", "gerga", "motxo", "galza", "propi", "tasca", "vesis", "creeu", "eixam", "aboli", "aleni", "oposi", "curse", "popeu", "aspid", "guara", "sopen", "ovuli", "axial", "pigat", "arrug", "abona", "total", "agars", "clots", "ruana", "pedaç", "bojac", "peter", "xafin", "accio", "cloni", "cerva", "genis", "fluia", "licit", "teleu", "firma", "udols", "dedal", "niuet", "fixar", "petge", "trinx", "pansi", "llita", "popin", "ultri", "incis", "aimia", "cacis", "vanas", "miner", "grips", "ondas", "crems", "rails", "castr", "rauen", "avalo", "trave", "ature", "ronec", "resos", "calam", "idols", "raoni", "orsat", "pasto", "luxis", "picot", "hules", "enast", "acali", "tosco", "gavet", "rabec", "motel", "sever", "xerra", "lluen", "cuixe", "caduc", "lloar", "gruma", "ubics", "tombi", "sedin", "cagas", "fulle", "tarin", "minso", "sucub", "alceu", "enlla", "tesis", "llucs", "desat", "bronz", "bixes", "genui", "vinil", "rapem", "patit", "propa", "adiat", "clava", "gnosi", "nimfa", "gruam", "repto", "verro", "axons", "mameu", "boçar", "mante", "caire", "sonem", "setin", "basin", "mocas", "paisa", "parra", "curra", "salto", "pitet", "zencs", "auria", "casas", "calçs", "besar", "opima", "xamar", "surar", "sarga", "doncs", "aturo", "frits", "firmi", "tocam", "xolla", "ubica", "orsen", "avisa", "vessa", "nugue", "ciare", "avero", "peons", "aflor", "noesi", "mente", "cogui", "molid", "midin", "putid", "maner", "gihad", "tolue", "espes", "avisi", "ralet", "sereu", "penic", "burle", "bonix", "pelos", "rifle", "dugen", "obvie", "malla", "safra", "ronco", "cutis", "girem", "aleta", "traci", "travi", "azeri", "refon", "onzes", "venjo", "midat", "immol", "greda", "liquo", "bufas", "azobe", "xalas", "amota", "somer", "gasti", "treta", "reble", "tropa", "vesse", "sargi", "barra", "meulo", "plers", "empra", "dolos", "obeim", "fiord", "riure", "aglif", "volau", "brivo", "desas", "clast", "mimau", "zeina", "situu", "apitx", "cerns", "sajos", "arran", "rulle", "acuso", "roman", "caent", "pincs", "calze", "podem", "tridu", "dobla", "poare", "amace", "popis", "tovor", "nenes", "optes", "salar", "topar", "abell", "crecs", "fulls", "frise", "xiric", "mofas", "ullem", "bambu", "fogor", "terre", "minse", "ralls", "petri", "focal", "atipo", "fogos", "carin", "nuesa", "tifes", "aliam", "siuro", "fisca", "etica", "hadal", "sumin", "benze", "zefir", "geliu", "queda", "dupla", "elisi", "aposo", "muren", "juren", "valgs", "oxide", "tense", "ginye", "fulli", "ocupi", "broll", "nitid", "fisto", "feieu", "copta", "gabre", "rutll", "motos", "notat", "cloca", "tomem", "bater", "lemur", "dioxa", "fenil", "oscau", "exvot", "llong", "bulls", "recel", "fills", "davem", "penal", "dares", "anote", "minau", "atuit", "ucada", "faito", "magma", "obacs", "rumia", "saber", "prise", "aidam", "preui", "nubia", "aixaf", "ullar", "occir", "regiu", "teule", "eslip", "brita", "cists", "ometo", "nugas", "fohns", "ferri", "torrs", "budes", "espir", "podeu", "tific", "bivia", "punix", "aspes", "pilor", "caliu", "ruina", "trumf", "iteri", "gobit", "fadat", "recul", "faria", "trips", "canya", "ulleu", "sosia", "soper", "seric", "sabra", "luxam", "libic", "brens", "mofes", "rotat", "canto", "raies", "vesam", "arcau", "radii", "heura", "xurme", "gruin", "aturi", "tella", "bolla", "dobli", "droga", "aixes", "libeu", "afill", "asini", "ordie", "gumia", "gronx", "xurla", "pitam", "seixa", "firin", "xutin", "quern", "morco", "midas", "becam", "xotxa", "iodar", "ondes", "cento", "oxidi", "bifaç", "dopin", "ganga", "raspa", "ranxo", "boiat", "amnis", "salol", "llest", "drupa", "olesa", "raone", "sorns", "avieu", "hertz", "burot", "copau", "visca", "banjo", "pixar", "roges", "cridi", "posam", "cueja", "palms", "patiu", "cofau", "pinxa", "rient", "ermot", "gojam", "bojos", "pobra", "mimeu", "pilis", "picar", "ampro", "telas", "podes", "cesso", "dejun", "xumen", "rassa", "cloeu", "filam", "empom", "bleia", "sansa", "senet", "gasta", "sueva", "salte", "aceri", "apure", "gales", "arada", "batii", "mufis", "mirin", "telen", "espuç", "hidro", "gasca", "vogas", "macis", "gerda", "garsi", "rique", "clacs", "acuda", "vogat", "afuso", "tecla", "encol", "fotia", "vexis", "visos", "buata", "membr", "beços", "orles", "exits", "mideu", "cines", "aspri", "erere", "causi", "tasto", "nocio", "goses", "cotis", "sucam", "vaive", "alçau", "cigro", "untet", "trisc", "clons", "estas", "folia", "bleiu", "acube", "trono", "ancia", "salta", "ethos", "rojal", "audaç", "tareu", "peita", "corca", "obits", "taxas", "copem", "remem", "xunga", "aftes", "saule", "citar", "piano", "enarc", "pilli", "pampa", "ermeu", "alevi", "entat", "solem", "trass", "brost", "opacs", "lacra", "folis", "licor", "ignot", "vogis", "talpa", "enfic", "gotim", "capas", "gelau", "cugot", "llija", "dormi", "ajupo", "botos", "daveu", "apono", "ordia", "ornam", "tuste", "pedia", "maldi", "besin", "immut", "falto", "caçar", "obsce", "vigia", "copsi", "bavem", "tussa", "varal", "greus", "ascis", "alpax", "ereri", "lapse", "donas", "pelut", "junts", "freno", "saiol", "tarda", "dorms", "nomin", "roure", "enceb", "veses", "vagin", "vedeu", "nimbe", "melga", "surta", "temor", "sisca", "radom", "matam", "adias", "xubec", "revif", "cabra", "salin", "tonia", "trias", "brida", "digui", "afuis", "babes", "brins", "mamut", "ansar", "podri", "musem", "foteu", "cotxe", "fareu", "blava", "liasa", "pairo", "mofin", "ecoic", "cruin", "dimer", "alene", "bufau", "filmi", "envie", "refil", "avoco", "sopat", "urica", "cores", "gambi", "edats", "nodal", "xifid", "pouat", "odiat", "flasc", "rebuf", "rauta", "vivim", "onada", "gites", "grume", "quito", "filos", "reteu", "polip", "xorca", "fuits", "burgs", "enyor", "peixo", "lluiu", "honre", "aprim", "piafs", "defec", "insta", "magra", "enfad", "regor", "pudor", "nodri", "gruen", "pujol", "curri", "rojos", "metec", "dicta", "finen", "datar", "xutes", "desus", "oscar", "xames", "sumes", "sagus", "balbi", "capon", "elogi", "rosat", "caixa", "untau", "abati", "gomos", "xeics", "empat", "trial", "endut", "boixo", "rimeu", "nodul", "tenca", "unesc", "vagam", "adeis", "adapt", "aures", "abuix", "depos", "coste", "evoca", "glavi", "fumau", "rimat", "binat", "cerca", "gespa", "abrin", "joule", "precs", "creua", "sobte", "xante", "llite", "inert", "laxau", "facem", "estes", "embas", "gebri", "brisa", "orleu", "neuma", "natiu", "piuam", "paisc", "boets", "boxer", "toris", "marca", "tirat", "guino", "duran", "gomes", "atrap", "hauen", "pluig", "toros", "fones", "orsas", "orval", "midar", "asclo", "mapis", "paint", "parts", "vetat", "avein", "mugiu", "fenal", "obvii", "heret", "mitat", "cilis", "durio", "brode", "hoste", "burda", "cries", "pegue", "xarpi", "bocem", "traço", "asmes", "quema", "peucs", "execr", "encli", "emblo", "tiges", "vials", "plaça", "olles", "rifeu", "teios", "moqui", "tolga", "plora", "llisa", "fuset", "rondi", "mosso", "colas", "envin", "milio", "lacam", "talus", "anoto", "abric", "merda", "segau", "apona", "mucos", "tenço", "jalon", "ratxe", "gemia", "toiso", "regno", "naval", "dinem", "broti", "deman", "afany", "aloes", "erres", "fauve", "sopam", "arilo", "guien", "rulls", "irric", "finiu", "sonis", "manya", "reste", "codes", "orlem", "birbe", "donem", "adixo", "allun", "feses", "avilo", "apome", "fotos", "regat", "debit", "sopit", "dopat", "cisam", "vagos", "fogue", "meves", "modol", "tenen", "asilo", "lesiu", "faqui", "tapin", "nevem", "lleus", "piseu", "niell", "esque", "gelen", "batia", "sagaç", "remuc", "basat", "matin", "metal", "labre", "atens", "gasat", "obrin", "temin", "tanta", "miula", "torba", "pujar", "aviam", "pilot", "dogal", "veuen", "poues", "ladan", "sogau", "auqui", "vints", "vesen", "tuegi", "ganxo", "abord", "clins", "repla", "tirin", "gorda", "xerpa", "oleat", "tibis", "rasur", "bavam", "esqui", "conya", "treni", "vions", "conta", "esmar", "curro", "adeus", "sofri", "lacar", "goges", "delit", "tardi", "gelis", "acabi", "bubal", "digue", "adits", "agost", "cints", "muses", "refos", "paits", "fadin", "copat", "aulet", "gasar", "belga", "ragen", "neves", "esbat", "inhal", "porto", "erbis", "ajudo", "lires", "conra", "virar", "perxa", "mines", "rasin", "tenso", "pecas", "semis", "piuat", "sumar", "roini", "boces", "tanza", "intim", "mulli", "popam", "bobin", "mapas", "raime", "mimes", "rodeu", "temes", "torax", "eixis", "grufo", "clona", "cosis", "xemic", "xamen", "arres", "balme", "aniso", "flanc", "gabes", "glena", "oreig", "paira", "denim", "padro", "nassi", "vigil", "rigut", "menge", "graus", "jonça", "vanta", "velic", "casem", "aflat", "fiter", "dugin", "rocol", "barsa", "oints", "rebot", "magic", "alero", "fonis", "metgi", "exerg", "fogot", "tants", "fotes", "gofro", "toleu", "escua", "fitis", "suput", "ferim", "volca", "ujava", "segar", "betel", "brami", "acope", "proti", "oirem", "tejus", "tales", "vinça", "zelar", "palar", "maluc", "molta", "atxem", "verol", "quint", "crida", "calce", "gusta", "ameba", "monya", "monjo", "folra", "eluls", "tudau", "rades", "enerv", "pendo", "nahua", "belau", "quedo", "rames", "xifre", "triar", "voteu", "acimi", "gamat", "befem", "virol", "prosa", "omete", "tolia", "morid", "aviva", "regau", "agrer", "retia", "justa", "gitam", "reveu", "denot", "sorri", "filmo", "adesc", "embli", "noble", "reseu", "dedic", "nuara", "acace", "murga", "culin", "sexam", "pelle", "solts", "xicol", "loess", "cascs", "botxa", "fosos", "atall", "pireu", "hexil", "nivis", "cuiro", "boixi", "guiam", "dribl", "bucle", "corna", "espuu", "cucar", "guard", "balco", "cueta", "monja", "xupes", "nyiga", "daves", "alloc", "nuvia", "decor", "expii", "posat", "majos", "ginyo", "sitis", "cegat", "afija", "tasos", "obenc", "podam", "relat", "peten", "fargo", "ronde", "dansi", "volar", "cocou", "veniu", "xilla", "mosca", "faxos", "casor", "xones", "ocels", "adona", "gubia", "fixin", "exhum", "solco", "espeu", "vibri", "raval", "sipas", "errem", "laser", "gaigs", "apilo", "ample", "sotal", "bedui", "robau", "nyauf", "aboni", "puniu", "fullo", "ajaço", "raucs", "desix", "dinin", "anedo", "ondau", "bolda", "campa", "cisma", "forum", "borlo", "sexta", "volte", "apaga", "trens", "retic", "rotll", "saimi", "adarg", "halam", "tragi", "calia", "mudem", "tiama", "arnen", "xumes", "apeix", "rompo", "averi", "segat", "tonal", "xafat", "boxeu", "dugui", "deisi", "cuera", "pomes", "isole", "ensim", "oidis", "lloga", "cosit", "rages", "trena", "curio", "olier", "cesia", "engol", "oregi", "piuau", "direm", "braga", "orbeu", "frigi", "ratxa", "esnov", "amoto", "roget", "etoli", "ordre", "rudes", "durem", "mabre", "sepia", "conxi", "urpar", "llumi", "homei", "evita", "atinc", "varem", "tabes", "orbau", "torna", "trais", "misto", "parle", "amere", "tesos", "agnom", "pugne", "greny", "rifin", "gosin", "metro", "regal", "arpat", "video", "fumin", "tarar", "hifal", "clono", "jugat", "brots", "porga", "cingl", "orris", "notem", "tolit", "pujos", "bogui", "orsau", "cinta", "llama", "rolli", "crins", "gules", "taris", "batie", "cerer", "asseu", "trist", "vorer", "fatos", "llums", "regas", "ferix", "filme", "plecs", "apego", "moned", "digau", "resau", "retxa", "argue", "sonau", "orats", "serre", "boval", "flixe", "sials", "arida", "jaque", "modic", "covas", "buros", "agrum", "esfen", "adius", "força", "perua", "taxon", "gitar", "soses", "regan", "logia", "briva", "cabet", "ainam", "bavar", "aguso", "gelin", "sembl", "boira", "omplo", "orals", "mujol", "diana", "fiqui", "visio", "canse", "tixes", "acime", "solod", "polls", "dujau", "estov", "aurto", "gluma", "senyi", "tesem", "balla", "salsa", "espuo", "tiols", "detin", "boric", "flair", "basem", "laxes", "rufle", "grony", "sacie", "lents", "comis", "mufar", "breus", "ionic", "afile", "carei", "mules", "sacar", "acuba", "sagal", "punys", "sanar", "crans", "copul", "dicte", "ganes", "posem", "afuen", "gojar", "noteu", "metra", "creme", "entos", "agami", "bugon", "basen", "xinau", "vults", "recus", "adieu", "amole", "culis", "solta", "cuter", "demet", "mireu", "babau", "acabe", "bugre", "nicis", "naips", "aguem", "seros", "priva", "folre", "dedui", "tomen", "tarat", "duars", "esgol", "pujam", "lassa", "orons", "grams", "corbe", "aille", "timus", "damno", "irieu", "dopen", "parva", "auros", "rimis", "nuats", "empal", "coveu", "txeca", "llues", "forço", "mudam", "baina", "xampu", "ainis", "cosiu", "eixug", "priso", "model", "penta", "tecal", "marer", "nocam", "rigue", "aboio", "tolir", "vener", "llisc", "clans", "umbra", "falle", "escat", "furra", "cofen", "urpin", "minio", "afeix", "aides", "rello", "campe", "utils", "avivi", "terra", "ofens", "desin", "odiin", "alcio", "libam", "ramos", "moveu", "baliu", "rossa", "farem", "espat", "ponis", "urgix", "barre", "pelfe", "domes", "ponia", "julis", "bigal", "corre", "reple", "filma", "atura", "teniu", "rodar", "lliga", "mirra", "erero", "unteu", "oquer", "sigui", "colon", "tupar", "cicle", "delga", "gerra", "niant", "rolls", "venes", "amava", "imago", "pudir", "apami", "etali", "altiu", "beleu", "poueu", "farro", "habil", "lluis", "ondin", "arees", "cloti", "roves", "onejo", "fiats", "purna", "afora", "acord", "guant", "ratll", "mimar", "sagne", "vatua", "muria", "matem", "oment", "embut", "cigne", "funda", "flocs", "obcec", "orina", "croca", "apile", "caces", "rediu", "clusa", "camat", "regar", "clero", "nedeu", "quera", "tuits", "campi", "altiv", "edeta", "tixri", "afixi", "doneu", "gravi", "aspie", "renoc", "mufes", "colzo", "denou", "botat", "macip", "tubul", "calua", "engat", "xebro", "atacs", "etzib", "dutxa", "podia", "triem", "palma", "pedat", "uquin", "mimis", "aurte", "erets", "ajovi", "bingo", "dipol", "xitau", "filii", "carpo", "piafo", "vicie", "sondi", "muniu", "balan", "afegi", "mirat", "alisa", "oxina", "encer", "sacsa", "repar", "rimem", "befes", "xalen", "urgis", "emmat", "solcs", "maigs", "viscs", "opere", "nimis", "titul", "moira", "revoc", "gaiol", "concs", "certs", "llamp", "cures", "nodos", "datin", "entel", "clape", "llegi", "libes", "porcs", "repap", "foten", "ariet", "tapet", "itero", "triis", "bolli", "datem", "anoes", "sagna", "cards", "unces", "oblic", "alera", "manco", "blaus", "tamis", "tebeo", "picau", "drene", "pruna", "nacre", "desau", "peixe", "mudau", "adobe", "mamis", "muris", "traix", "odias", "ignar", "espio", "virat", "trigo", "gerro", "anhel", "trauc", "pinxe", "cerco", "aliar", "jaqui", "afart", "tusto", "marit", "ovals", "dring", "sedos", "catar", "clame", "dolam", "adien", "recal", "fencs", "coure", "colps", "pater", "xamin", "salve", "gebre", "vuite", "grufe", "furas", "gicar", "cauen", "caura", "gneis", "nogut", "devon", "griso", "talem", "armar", "pixis", "acurt", "negus", "porco", "empes", "fotja", "marge", "rapit", "fumer", "escoa", "amats", "delia", "apnea", "mudat", "junça", "farta", "guits", "nyora", "tutel", "etims", "fetor", "polir", "popar", "foies", "probe", "closa", "cadaf", "casts", "surer", "paesc", "topeu", "vogiu", "cresp", "ondis", "cobro", "cloem", "bonim", "etans", "afrau", "cegue", "aidas", "mirro", "femti", "girat", "caues", "cotas", "hagim", "regel", "ronya", "atuir", "bevem", "caiac", "penem", "avies", "xenes", "aguse", "rimar", "rumba", "llist", "jaces", "creat", "gabem", "fruix", "tocat", "prims", "breto", "golfa", "cents", "catxa", "medis", "renya", "heuen", "embot", "brega", "mogut", "mussa", "alduf", "amist", "titit", "atias", "ficta", "claps", "junci", "cadis", "ardat", "clora", "claco", "macul", "pacto", "sulla", "sutur", "viric", "topem", "fango", "domus", "docte", "cohob", "pujau", "guiin", "pitjo", "sutja", "grape", "cardo", "fonga", "vivid", "faves", "cisem", "pixau", "arbro", "degue", "lapid", "barca", "calas", "txecs", "ansau", "brusi", "comam", "fiteu", "popem", "trops", "persa", "boiar", "enjub", "abura", "dauri", "xinam", "molat", "edite", "basca", "vetli", "bimba", "urpen", "colpi", "colia", "zeids", "crons", "advoc", "fotil", "pouis", "dosem", "legat", "laxar", "xares", "uters", "vivor", "agret", "apano", "blada", "garba", "pifia", "volia", "narro", "creim", "traiu", "unfla", "culat", "colro", "drena", "meten", "datas", "pigre", "somia", "corbo", "motle", "mucus", "sigma", "birma", "capir", "tanga", "noval", "semau", "afuem", "xacos", "anyil", "grano", "vanis", "banya", "meles", "cises", "ileus", "rober", "tubes", "saucs", "creem", "merce", "irats", "tocas", "digen", "pollo", "aital", "talio", "passe", "botim", "pouen", "romes", "gaben", "arboç", "abrus", "polar", "bosca", "nuils", "obvia", "serro", "hagui", "adita", "nabis", "diras", "bandi", "placa", "dinde", "calfe", "elles", "finor", "avesa", "sangs", "dateu", "fiblo", "talar", "iriso", "tores", "safes", "punye", "perir", "ruecs", "vogue", "virio", "folie", "pites", "peces", "arbri", "biela", "narre", "spins", "freds", "pelfo", "flums", "diens", "panic", "redit", "cloga", "elevi", "fotic", "milit", "covin", "sorna", "sucau", "rapin", "gofra", "lacre", "escut", "senar", "preeu", "gaiat", "domis", "enred", "sanin", "molem", "pates", "comar", "nomia", "faixa", "igual", "vaqui", "penia", "aboie", "fuses", "pouar", "modes", "citis", "gruat", "aplaç", "orsem", "amoti", "alada", "estol", "elits", "peany", "jades", "marid", "tunid", "batem", "coieu", "gents", "minvi", "olore", "merla", "firme", "sinoc", "cabre", "hamer", "astor", "guita", "ailla", "merit", "mesar", "aplet", "deleg", "punyi", "retxe", "frecs", "vedic", "licao", "imant", "discs", "molas", "botem", "satir", "gassa", "bisem", "mimas", "dixis", "prest", "posts", "luxau", "farot", "parit", "donis", "signa", "furts", "atees", "broix", "cenes", "separ", "opims", "fonye", "pegos", "espet", "crebe", "ornis", "feria", "perna", "unida", "siena", "gicam", "pilar", "debut", "errat", "limba", "feina", "pinsa", "sedis", "expes", "comte", "vedet", "lisos", "gavid", "forte", "taras", "munda", "troba", "ferra", "obrau", "paios", "ceres", "xupli", "ficte", "napia", "ronsa", "famos", "xamba", "palto", "posar", "aliau", "gnoms", "oliau", "anual", "cavil", "crebo", "rodem", "optar", "bitas", "uissa", "guiis", "tares", "roben", "roina", "romas", "jumel", "riscs", "calao", "folga", "tombe", "ragem", "tenyi", "polle", "opten", "malbe", "cosco", "cacau", "rogle", "malsa", "arena", "cosso", "domto", "casca", "vesat", "resso", "deban", "suera", "bifia", "braus", "penet", "degut", "refer", "papin", "jaupa", "pudos", "mirem", "allic", "pacte", "pepes", "tolim", "ambre", "vivaç", "rasen", "sinia", "siris", "potil", "orell", "croms", "peier", "piafi", "tambe", "salla", "exces", "tsars", "grueu", "dotze", "sipin", "escor", "poros", "amoix", "infix", "gusto", "vessi", "pilos", "llati", "pecat", "baila", "faldo", "reven", "esgot", "resis", "decau", "lepto", "acurç", "penja", "roleu", "arrel", "besis", "preme", "lilos", "decil", "apexs", "ratat", "anorc", "peros", "ribot", "trair", "bodis", "afaen", "hampa", "forja", "sudes", "emble", "acoto", "censa", "gasos", "branc", "canta", "oscat", "rellu", "sitra", "lleem", "mufau", "biter", "fugaç", "clavi", "dalts", "besat", "naixe", "rueca", "multa", "capis", "unfli", "prona", "mamau", "xolls", "lunar", "maies", "galls", "depil", "bards", "canet", "teula", "raves", "salic", "durin", "renti", "hurra", "hidra", "esmau", "molts", "dalia", "plors", "ateny", "ofusc", "borni", "clote", "ultra", "gloso", "editi", "avida", "acany", "daure", "rague", "moriu", "reixs", "abaix", "venga", "trits", "encis", "cendr", "ponte", "clari", "enula", "llepi", "tises", "temia", "talat", "bussi", "frese", "soleu", "evols", "eviti", "cuada", "abois", "quest", "gruas", "urgim", "jupes", "bassi", "quecs", "grecs", "paies", "titub", "arrim", "etiop", "canyo", "tomba", "poder", "emigr", "sexas", "atent", "capiu", "llaça", "alter", "orses", "peull", "obrim", "titil", "filia", "feral", "magia", "tresi", "oiava", "ajoca", "tavec", "becfi", "oidor", "rufli", "xuteu", "gabar", "femur", "xocat", "ulval", "alabi", "xitem", "verna", "taste", "posit", "romps", "carns", "trufe", "avial", "fasic", "fresi", "folle", "sobto", "alats", "furta", "ducat", "lones", "vacun", "orsis", "torts", "cales", "xinin", "sapan", "vedin", "rotas", "segam", "linxi", "tauri", "orneu", "iotes", "vagil", "voxel", "anell", "tunel", "agamb", "adies", "aixol", "floro", "daica", "datiu", "amada", "ajaga", "picon", "gamba", "acopo", "burxi", "nival", "zirco", "bulla", "manat", "afuam", "titol", "dolau", "nociu", "entri", "actor", "carro", "durat", "samec", "drons", "avali", "obeis", "venia", "pompo", "tuden", "regul", "ermes", "vitel", "bauxa", "airem", "lotus", "oromo", "diste", "pelat", "boton", "boxar", "pidol", "teies", "notis", "cavum", "neret", "jague", "refas", "citeu", "sagni", "calfi", "badge", "flams", "fumat", "panna", "enjov", "fonic", "dacsa", "cromo", "pilon", "arrea", "opaca", "multo", "ponem", "ruacs", "arrib", "diria", "doiut", "lluus", "vexes", "tenda", "fello", "rebre", "odiis", "paors", "tosse", "xurmo", "testi", "mufti", "rumio", "adiga", "tolla", "opina", "vires", "fesos", "neixo", "faver", "mirre", "mesas", "betol", "modem", "vague", "sacsi", "roteu", "rotin", "avars", "rimes", "lacat", "ideal", "cobla", "avall", "cauet", "viudo", "blanc", "llots", "acala", "ixies", "oblid", "nyepa", "oides", "coxes", "judic", "pelli", "ninot", "adiis", "beses", "xopar", "untam", "cotna", "piric", "gamma", "espue", "booms", "feixa", "degui", "obris", "odeon", "lanta", "alaga", "anisi", "amure", "pelea", "tiofe", "airos", "empel", "llord", "menja", "mujos", "hedra", "bitll", "aromo", "tutus", "agiti", "boxes", "llito", "mocos", "faiso", "naixi", "bojal", "orins", "clave", "jureu", "vesar", "coces", "carbo", "rocos", "rompe", "obrar", "retem", "vigis", "clips", "bancs", "peiro", "xambo", "sorda", "bantu", "pedro", "gicas", "badoc", "estar", "niada", "bruns", "deien", "sonin", "toler", "polps", "ideat", "belas", "gobis", "barba", "mesau", "llenç", "guieu", "talos", "varar", "pelam", "bronc", "accis", "arter", "semes", "osmis", "bafia", "renom", "peris", "escas", "dosen", "tutes", "fondo", "tiara", "aduno", "menes", "confi", "refan", "casal", "aspis", "ofita", "marxe", "arrie", "diari", "lasco", "adret", "meuca", "poneu", "retre", "empip", "temis", "anura", "daixo", "denes", "grumo", "talis", "corts", "recta", "agafe", "xaval", "cediu", "tomar", "xafen", "colla", "polit", "pudia", "pique", "abste", "clucs", "grapi", "traeu", "golut", "haima", "acloc", "anyal", "minas", "dujar", "bruix", "rasco", "junyi", "notam", "colen", "fugat", "dureu", "fugia", "taxen", "torco", "solle", "ocios", "crome", "danye", "olors", "meseu", "pruim", "suada", "picta", "nugui", "aucas", "cueig", "glast", "filin", "monge", "pobli", "amela", "conre", "llofr", "maces", "autor", "acano", "fotgi", "pugem", "altes", "perol", "cisat", "genet", "rosec", "negui", "oscam", "crato", "rugos", "ameli", "deute", "enfil", "niare", "badas", "xapar", "aties", "copes", "vages", "gelam", "gogem", "luxem", "duels", "sulfa", "pudus", "taxis", "ulula", "escap", "setet", "ullen", "gigre", "rufla", "estai", "grufi", "logic", "musos", "caror", "jutgi", "aixec", "talam", "brunz", "nariu", "alqui", "corro", "orini", "vasts", "seste", "neuli", "salde", "furga", "conro", "ixent", "dreta", "falli", "pavon", "larva", "miren", "dosos", "beles", "busos", "ajorn", "imita", "saure", "odoro", "brise", "paula", "envet", "pariu", "pague", "rases", "marbr", "busts", "balba", "ioden", "algun", "ardor", "oliem", "civil", "atona", "ginys", "semas", "bossa", "pleta", "caixo", "queca", "cotes", "valeu", "arabs", "recou", "suros", "pruis", "xarxo", "arnia", "placi", "dingo", "gruix", "arxiu", "fible", "embus", "sanen", "plous", "embon", "felid", "aguin", "doler", "algid", "odiem", "fenar", "colzi", "alieu", "orfeo", "preat", "arbor", "posin", "moher", "ovuls", "bateo", "airen", "selva", "dotat", "borla", "ferin", "ozons", "pipam", "agros", "rebat", "bisos", "puces", "femte", "peses", "icors", "colta", "pirop", "situi", "encar", "pinça", "ficar", "pisem", "joliu", "folio", "brufa", "gisco", "vasos", "rasas", "furto", "putes", "angel", "luxes", "menas", "dineu", "tetol", "sogas", "dhals", "saput", "mufeu", "befas", "dodos", "alque", "roseg", "ermat", "camin", "picte", "imina", "serac", "avara", "sotol", "morma", "rocam", "truca", "vogix", "fruim", "xauta", "epics", "lepra", "fonyo", "casot", "zelau", "sipeu", "apode", "pudis", "pioca", "olora", "zelem", "doris", "finto", "vitri", "ornen", "imput", "mesen", "porci", "petja", "piuas", "iodem", "nafro", "acots", "puats", "grafs", "recte", "sumim", "xucle", "tisis", "amide", "huits", "flite", "borli", "cover", "gaubo", "urpam", "petis", "colur", "reull", "corms", "facen", "caber", "triac", "musti", "xumat", "olios", "nards", "bufal", "gesta", "curem", "orbes", "lacas", "comau", "aforo", "clapi", "veins", "suant", "furin", "esdui", "aflam", "pisau", "tanye", "noieu", "hifes", "grifi", "acore", "palli", "picat", "capta", "reque", "balbo", "guiti", "regna", "sodic", "rests", "neros", "darde", "fitat", "torro", "adese", "acato", "runic", "etnia", "bolle", "covem", "apana", "funde", "malde", "xicot", "salau", "aroma", "paput", "decim", "morra", "oneja", "finem", "exili", "surin", "mofeu", "edema", "cuics", "xufer", "assut", "cairo", "borms", "pruir", "bufes", "ozena", "gutxo", "ments", "pinos", "pareu", "votis", "glaço", "delfi", "acudi", "exigi", "gasas", "ovalo", "piram", "ascia", "mamam", "ossos", "clamo", "jutjo", "agrim", "viviu", "beats", "bisam", "suram", "impiu", "mocio", "minia", "diran", "tendi", "murri", "finca", "tronc", "carla", "accia", "vacci", "lloas", "drago", "trepo", "huite", "noure", "cubit", "iodic", "minve", "ratel", "excit", "baldo", "eluit", "ursid", "rebra", "citam", "acudo", "trido", "veent", "rugis", "norma", "firen", "estos", "larid", "culam", "cavim", "lasse", "gruny", "bando", "mento", "xamau", "enarç", "musin", "xinar", "quadr", "cimen", "avino", "ullat", "obaga", "predi", "lesio", "suren", "pisto", "aduni", "doles", "statu", "fumic", "octes", "culet", "cagat", "dopes", "rosta", "perda", "virem", "caben", "plint", "xaleu", "repos", "valua", "munir", "dinau", "cotid", "ondat", "aferr", "tirem", "ampit", "emuli", "muons", "aromi", "gaubi", "becat", "giqui", "fadri", "aviau", "radio", "fagot", "nadas", "esfum", "fermo", "capço", "segue", "sorus", "sines", "saial", "celic", "juras", "jurca", "suaus", "cuege", "multe", "tueja", "baves", "pesco", "robis", "fugir", "sacau", "munit", "lexic", "ucava", "retxi", "oscas", "fiola", "banco", "parec", "gogen", "ajeim", "vexas", "vegin", "bitxo", "psoes", "rents", "firmo", "revel", "obres", "mills", "acari", "troto", "tensa", "pises", "cocul", "usura", "badau", "torto", "ceros", "veces", "orbit", "nevin", "abans", "lluor", "xumeu", "bocoi", "bugiu", "boual", "segla", "regni", "ovulo", "nedas", "arpes", "sapia", "elois", "cusen", "nodes", "linxe", "polze", "vairs", "momia", "paris", "revir", "punim", "nirvi", "clima", "pivot", "terbi", "nimbi", "auges", "expio", "sagin", "treno", "randa", "fumeu", "calmi", "colra", "broda", "vione", "ornem", "aflux", "vence", "quite", "llepa", "greja", "drapi", "polla", "gerla", "inste", "sauna", "actes", "dinar", "gauba", "efods", "acara", "tapat", "legal", "ciats", "truco", "cisas", "delim", "arpis", "trams", "piafa", "sacso", "filen", "picam", "cagui", "falsa", "agape", "femen", "arrue", "xaica", "borro", "cotne", "cossi", "melat", "roten", "cords", "fossi", "docil", "penso", "vaque", "halas", "nedes", "sexeu", "ocupo", "colts", "acatx", "crias", "gaspe", "orxeg", "copii", "amari", "birbo", "vicis", "binen", "ainau", "ampri", "colca", "besas", "pruit", "humus", "geste", "guito", "ovina", "colga", "ordit", "avenç", "cabas", "girar", "breny", "prees", "monte", "xutas", "bifid", "fatua", "rubor", "aguis", "natja", "zeles", "impia", "empin", "timic", "aboia", "broca", "fling", "cloto", "fusos", "signo", "etnic", "basts", "solaç", "estor", "difus", "fulve", "barxa", "amoll", "traca", "danso", "ornar", "miops", "runar", "ducal", "tiras", "gases", "verso", "adire", "peror", "bufen", "avale", "betes", "patri", "atiam", "ajova", "aplan", "oldre", "mufen", "buido", "velat", "tesat", "adoll", "sudet", "conat", "apart", "casar", "aturs", "rapiu", "glosi", "testo", "fixam", "joier", "prego", "tests", "hosts", "tibes", "fitem", "astre", "ansis", "brand", "indui", "pente", "melgo", "dujam", "largo", "cerat", "raseu", "acubi", "ponga", "xupla", "micos", "verds", "fotra", "verns", "sords", "teati", "arpas", "arcas", "maser", "grato", "sesam", "dolin", "pleba", "esvar", "vores", "talla", "tapas", "valsi", "taren", "riura", "agafo", "xopeu", "venit", "libas", "amans", "retin", "quids", "aculo", "trema", "caral", "hilar", "mudeu", "biont", "faixe", "dioic", "bofia", "menem", "bitam", "tmesi", "gemat", "plato", "vanti", "requi", "xarro", "apani", "dorma", "ansen", "banda", "jugue", "patis", "adeix", "patia", "veget", "emeti", "parer", "ocell", "moris", "cofat", "usant", "forma", "trufi", "elape", "bovor", "rosts", "bases", "modis", "pitgi", "vauma", "cervi", "mengo", "hadit", "humer", "vibro", "pixeu", "llave", "folli", "gravo", "ajaeu", "travo", "totes", "mitjo", "terci", "rosar", "ibera", "talas", "dilat", "papau", "recav", "seiem", "conca", "carca", "pubia", "vegeu", "ratio", "legio", "duits", "sueca", "toscs", "noien", "clapo", "somio", "faces", "ondem", "afixo", "nyecs", "diacs", "teids", "viles", "supos", "tinyo", "tapen", "topes", "terpe", "suite", "madur", "rugim", "calta", "galiv", "voran", "niobi", "arçar", "jaiem", "fovea", "pujas", "poper", "heure", "oxoni", "lloca", "falba", "adori", "incub", "recto", "ermar", "xafec", "extra", "moare", "manis", "cosse", "muram", "gropa", "paons", "votiu", "xollo", "exeat", "malms", "bogue", "noves", "comen", "aillo", "afili", "camio", "afusa", "gleva", "parem", "nanos", "xaruc", "xalin", "besen", "ninos", "ocupa", "eduia", "xumau", "atuia", "ralla", "lluça", "picea", "mites", "grisu", "cimam", "poses", "ritmo", "novii", "aurti", "boies", "togat", "borem", "mescl", "aprop", "xerre", "papem", "sulls", "sexes", "iodur", "vitro", "floca", "atroç", "melic", "palpe", "naveg", "bisar", "ofego", "nedem", "xarxa", "sobta", "piueu", "calau", "tract", "traia", "eixut", "bleit", "patir", "esbes", "dopar", "ordiu", "sarsa", "arrop", "alull", "areno", "janot", "aucam", "votau", "vexem", "trapa", "egida", "oliva", "placo", "sumia", "tosos", "tripo", "defen", "timal", "zeros", "acopa", "frita", "filem", "sevir", "ilota", "ambul", "obila", "brota", "xaiar", "pansa", "ronye", "derma", "munyo", "aequo", "pinar", "esvor", "insol", "calcs", "begut", "plexe", "alias", "poeta", "fuent", "culls", "modal", "semen", "hilid", "cavas", "xerec", "sitia", "capoc", "purgo", "capia", "guimb", "einam", "nodus", "tasts", "bifer", "sexis", "vigim", "minam", "holmi", "suare", "fabul", "monta", "astut", "gasen", "ordir", "ossut", "didot", "acule", "agent", "supli", "puzle", "ucare", "fadis", "regio", "avina", "bitol", "cascu", "sesto", "setie", "corea", "arnie", "brees", "velas", "nicol", "garse", "damne", "ponta", "paras", "micet", "actue", "gitat", "cente", "pecam", "robat", "clami", "tossa", "gaido", "doseu", "arpau", "tolus", "ardit", "garbi", "timid", "dutxi", "esper", "parot", "solos", "xulla", "emane", "fregi", "param", "dogma", "fiava", "culot", "singl", "aloer", "falco", "botau", "boscs", "zinco", "urent", "basar", "lauan", "vedam", "septe", "souet", "teuli", "creas", "piteu", "polsa", "barda", "ganut", "halur", "abece", "atand", "claro", "salvs", "burja", "llins", "cebar", "marta", "ampra", "odios", "fatic", "estri", "sonas", "bolls", "guipa", "tallo", "musca", "xalam", "numen", "arids", "bouet", "oller", "dolat", "clone", "canor", "lluer", "bolit", "ports", "mufem", "erera", "mioli", "pians", "clara", "euros", "quero", "fusel", "aliem", "cadmi", "elegi", "filet", "perve", "visam", "sides", "xaiam", "amote", "iodau", "haure", "xapau", "mapat", "diput", "apelf", "vedar", "cella", "palpa", "deixi", "dades", "cranc", "brill", "floxs", "orant", "enfon", "pipau", "volta", "salle", "reves", "grops", "envol", "limit", "macam", "boniu", "infos", "eider", "bonis", "funyo", "presa", "dasia", "defes", "fiara", "casat", "parti", "tapis", "condi", "sucar", "enutj", "risso", "adida", "expie", "halin", "sanis", "safic", "tatxi", "codis", "cobri", "coman", "oscul", "rotes", "assot", "salep", "nyafa", "oloti", "potra", "poats", "piral", "deixa", "brame", "lucro", "pobre", "efors", "untas", "llarg", "datis", "lleeu", "gabeu", "orlis", "atend", "llega", "retir", "pagar", "repeu", "censo", "pumes", "fogau", "fibla", "xador", "arpio", "domam", "feneu", "torer", "lloes", "empit", "quipa", "nogui", "guixa", "arras", "reten", "malda", "tarau", "falte", "botir", "tixis", "orden", "sonso", "espia", "donar", "dargo", "theta", "arner", "laxem", "mauri", "onixs", "orben", "triau", "llera", "doner", "parir", "narri", "mates", "beina", "votat", "icacs", "argil", "tolts", "facin", "mafia", "oliba", "ofecs", "nocau", "secor", "fremi", "viura", "vises", "taiga", "amort", "noces", "grums", "morca", "eximi", "befau", "riota", "xacal", "jacos", "vigit", "omple", "clors", "sogui", "costi", "grier", "diner", "anira", "escol", "balle", "bover", "pinxi", "zenit", "lacte", "repas", "aplec", "sorts", "pisat", "rasem", "ilium", "forns", "icona", "ramal", "epulo", "rumin", "dogam", "clenx", "firis", "rasar", "acalo", "seien", "guaix", "raigs", "colri", "delco", "adult", "plasm", "ordim", "reisc", "mocau", "aguti", "enfus", "fenia", "vagas", "areca", "burin", "alens", "sobri", "tasco", "reien", "lobat", "abata", "litre", "nabiu", "torns", "sirga", "arpeu", "avidi", "tensi", "aclof", "pluja", "oblia", "carii", "gardi", "pipen", "marin", "calor", "balli", "agran", "plomi", "encim", "claus", "sigil", "grata", "enceg", "sures", "enols", "sutza", "podal", "lacta", "betic", "femas", "finia", "torda", "azina", "fenol", "rutil", "terce", "falda", "manca", "apunt", "xufes", "cessi", "quant", "xutem", "mureu", "tonen", "setio", "lladr", "mixos", "vacum", "simun", "pubic", "corco", "datau", "xabia", "acost", "xiuli", "brote", "falso", "cenyi", "regla", "signe", "nadat", "calis", "bilio", "nugam", "tusso", "boçat", "milis", "emmar", "copas", "pitis", "gelem", "surau", "coits", "incoo", "plant", "fesol", "bilis", "sedas", "aglan", "talma", "boços", "drapa", "ataco", "tafoi", "digni", "nugos", "anega", "sacio", "musam", "totil", "nadam", "abrog", "riada", "cervo", "agrup", "tevet", "piler", "hindi", "coart", "cimos", "avanç", "tanyi", "della", "urani", "horst", "culeu", "rosto", "urats", "salia", "menis", "domeu", "vello", "gabau", "tudat", "hevea", "tapon", "lapsa", "suara", "biten", "xumar", "ginya", "avini", "sacas", "llacs", "pipat", "salem", "manxe", "livid", "resat", "ciati", "cabro", "ralli", "lligo", "trufa", "viant", "jugal", "basis", "verpa", "plaem", "endol", "fogui", "alots", "jutge", "recer", "apone", "xaira", "xeixa", "reixa", "enduc", "esmol", "motiv", "opali", "fetjo", "erigi", "vetau", "bufec", "tinti", "teves", "plaia", "diuen", "urgia", "triin", "ginyi", "hagin", "bebes", "calda", "plaeu", "sigla", "filtr", "trets", "vasco", "calco", "canoa", "veres", "mimic", "burla", "encop", "viler", "llogo", "mafic", "falla", "refus", "frija", "aboco", "puber", "gamen", "cofes", "arruo", "bufis", "domte", "fosfe", "fusts", "cuino", "salvo", "pipiu", "gemes", "opteu", "estel", "bisbe", "habit", "cuito", "espie", "untos", "dropa", "roste", "lacri", "avili", "besem", "parlo", "sobra", "aviso", "neven", "jubil", "suecs", "gamas", "pelen", "moros", "dutxo", "laics", "imada", "setia", "innov", "ronxa", "viats", "jonis", "debat", "fadas", "faixo", "amaro", "neulo", "gorja", "alçam", "xutau", "anime", "flaix", "paves", "solin", "hopes", "adagi", "cucas", "cracs", "vagen", "mugis", "trefi", "traem", "cubic", "apuig", "xalma", "cerno", "verga", "lleim", "mirau", "abone", "lloen", "etils", "havia", "pedra", "rapat", "romer", "anava", "gasiu", "orare", "bullo", "ornes", "morfs", "garlo", "virus", "curie", "bells", "ajupa", "cians", "iaies", "bitoc", "furau", "canem", "cremo", "xinis", "taxar", "unies", "lleva", "alaui", "burge", "cimes", "tetes", "crana", "cules", "afers", "ceria", "gatet", "saura", "sufix", "ratau", "femau", "palat", "criin", "llepe", "pires", "ainem", "tupes", "eduis", "apuro", "tatuo", "timbr", "oliat", "tabus", "fucus", "grani", "zonal", "capti", "amics", "blats", "rafet", "olent", "binin", "amago", "pisin", "xaier", "ardua", "nefro", "senta", "sedal", "ivons", "xuplo", "ordii", "orege", "tarja", "corno", "canar", "rulli", "caqui", "guixi", "halem", "cofar", "trota", "feien", "talle", "femar", "rotis", "rasts", "balde", "musat", "escuc", "buidi", "bondo", "potto", "vista", "iodas", "plens", "trago", "fideu", "tatua", "salpa", "acaba", "clama", "vasta", "tacat", "ujada", "creue", "celas", "canes", "junyo", "niala", "oscil", "pinya", "morim", "mansa", "mesam", "sipai", "lluca", "turos", "copin", "canos", "dotem", "anecs", "coten", "capeu", "xamor", "espos", "anyol", "blaur", "teler", "peona", "amain", "acobl", "esmic", "terri", "dotau", "envas", "robeu", "baseu", "cisen", "ruans", "girin", "bolcs", "amidi", "fonen", "eixon", "atupi", "pagui", "catxo", "guait", "jaieu", "vente", "boras", "somat", "empot", "urgir", "uigur", "plati", "curin", "cense", "illot", "trems", "bitat", "camut", "feder", "galda", "bajoc", "lacis", "besau", "polix", "preue", "rapas", "seves", "boers", "bugat", "baciu", "focea", "gaial", "piren", "viari", "quils", "actuo", "raent", "viare", "agams", "sorra", "pesen", "acota", "pince", "nyapa", "guipi", "obeiu", "couri", "epice", "urees", "situe", "deixe", "preas", "atuiu", "sodes", "gremi", "ureid", "visis", "forgi", "cabes", "tusts", "momes", "celen", "volat", "peneu", "trame", "ocres", "darem", "beset", "befat", "empeg", "abuso", "vidre", "colli", "afini", "temps", "giram", "tupen", "moixa", "agrai", "lacer", "cablo", "ditas", "xocas", "luxen", "alarm", "deriv", "rebis", "lemes", "harem", "atris", "nugat", "duges", "gotos", "circa", "mamei", "tinye", "varat", "codex", "afana", "tesar", "frena", "afori", "poise", "oferi", "mossa", "maçol", "cimis", "visin", "silur", "orinc", "endur", "brios", "humil", "eixea", "lenta", "creta", "infli", "agreg", "apago", "ponto", "xueta", "gofri", "bamba", "estof", "tacam", "maçam", "gaspi", "ceric", "moren", "lloba", "negam", "quica", "isolo", "mesos", "aculi", "metia", "regis", "renta", "gemin", "atuix", "mares", "manam", "oimes", "ramen", "obren", "daina", "ujats", "cinte", "freso", "boiet", "ajaci", "arnii", "creps", "gameu", "gotes", "nanes", "tesas", "amero", "dates", "guals", "media", "gauge", "bivac", "manta", "ermos", "orbam", "sedec", "ordix", "bravo", "tamin", "afina", "solen", "xurmi", "aleja", "trocs", "ludes", "label", "pigra", "ficus", "avare", "cuses", "minor", "blega", "papas", "lleig", "vigir", "atret", "hagis", "galzi", "agarb", "maula", "nadis", "aplac", "irise", "mullo", "fluir", "eixim", "fatus", "nonet", "ureta", "iodin", "telis", "caduf", "farga", "xusma", "rufol", "rojor", "vetes", "pagam", "colom", "sexat", "femis", "adiau", "aigua", "mofen", "nocas", "pelec", "nasca", "crieu", "argiu", "somni", "cruor", "moret", "rosos", "queim", "meler", "caria", "cudus", "tinte", "memor", "llast", "pesos", "croat", "feram", "faust", "piuli", "taxam", "bordi", "feixi", "mitra", "gruar", "siuli", "renal", "llocs", "urpir", "amare", "pegot", "friso", "opcio", "alerç", "justs", "molam", "ansem", "angle", "melva", "lanid", "teixo", "xamos", "brufo", "follo", "potos", "apter", "darda", "copie", "viseu", "deixo", "jutja", "hesit", "exhal", "civic", "alcis", "peque", "raieu", "verbs", "itera", "baixi", "vanto", "senis", "oiare", "rulot", "catxe", "treso", "topen", "migre", "viona", "anire", "conus", "ranci", "sucas", "vetos", "befis", "tasso", "agriu", "ngais", "rivet", "acapt", "fixen", "picid", "noura", "otoma", "napis", "zeleu", "carte", "deten", "laxen", "mapar", "aliat", "fonia", "druts", "quall", "vibre", "bisin", "retxo", "atorg", "befam", "minim", "teulo", "vanat", "raier", "senat", "palle", "argot", "viver", "atrac", "copam", "icosa", "pitof", "ufans", "tudes", "linxo", "lleia", "menen", "capce", "botit", "ompli", "acmes", "blaso", "marre", "nurag", "capto", "calms", "rearm", "xapin", "agios", "befen", "algia", "tapir", "ricam", "capot", "pense", "errin", "vedes", "occim", "hegui", "cedix", "acuit", "timba", "urpis", "ebria", "conga", "curam", "pesem", "beren", "pared", "tudem", "sucat", "avets", "celat", "brous", "ragis", "oriol", "nimbo", "furam", "bombi", "neixi", "vedem", "rotar", "freus", "ferma", "papio", "cotau", "uveal", "aviat", "libis", "arros", "amuri", "becut", "samis", "liber", "agras", "xifla", "arils", "maria", "bruga", "caceu", "luxas", "greix", "trini", "penco", "fotis", "taxes", "bonze", "esses", "necis", "moble", "grifo", "teris", "facil", "sobre", "tirar", "tapie", "grans", "tasta", "benes", "morir", "saros", "gasau", "junya", "mauix", "cruis", "jueva", "conxa", "bessa", "opiat", "lleud", "grana", "inoit", "befin", "pixel", "furot", "durar", "ramat", "xurma", "nomen", "palmo", "sipat", "mutus", "fibli", "xuixo", "palet", "bolei", "hepta", "ululi", "sotge", "llaço", "mapeu", "fatxa", "corsa", "rigid", "repic", "cruix", "seuos", "fiant", "sacat", "viaro", "onses", "apres", "frens", "derbi", "enyes", "sedam", "auris", "malvi", "flirt", "pegat", "feies", "duent", "rauti", "berma", "tacas", "locio", "acula", "boien", "arrei", "lloat", "guiau", "dubte", "mugim", "ragin", "narra", "capça", "pipar", "nuava", "giten", "coixi", "orlau", "aponi", "fetus", "palai", "xitar", "bigos", "dormo", "calid", "optam", "torni", "engas", "renye", "cerne", "xapen", "ambit", "jussa", "triba", "clamp", "munti", "bitar", "belar", "gojos", "acere", "miola", "feliç", "arego", "avido", "datat", "bavor", "mango", "rupit", "marra", "reals", "ailli", "fluim", "cresc", "lleis", "ungit", "formi", "voria", "texts", "untis", "guisa", "acaci", "versa", "viure", "lleny", "meres", "closc", "nexes", "fleca", "allos", "solas", "iodam", "amors", "vinga", "duria", "valis", "boieu", "pitic", "agafi", "popas", "novel", "ujara", "ulles", "crisp", "cobre", "avari", "xapas", "olias", "remam", "bruel", "pirau", "burra", "petgi", "bonia", "resem", "bruit", "meros", "llosc", "games", "optic", "folic", "cruia", "cuita", "boxat", "obreu", "cedri", "fingi", "pista", "deuen", "etapa", "atols", "mimat", "oxido", "obeix", "hagiu", "bagot", "gofre", "dials", "ajust", "turac", "velam", "antec", "enfav", "obric", "voreu", "argus", "pisam", "alçat", "taque", "cotni", "deton", "adiam", "ullas", "glots", "favar", "penol", "brams", "geles", "aldea", "rauca", "suras", "sodar", "tigre", "unari", "perfe", "regam", "arams", "domar", "panxa", "porte", "votar", "foehn", "abeur", "melia", "sedem", "toque", "dindi", "sonat", "botja", "bogat", "docta", "cuque", "rifas", "afait", "ptosi", "imiti", "omesa", "dinou", "ruera", "telau", "telem", "crica", "regim", "poseu", "feraç", "gaire", "senia", "oiras", "borde", "sermo", "mioma", "soles", "aucat", "meues", "dicli", "falti", "tisic", "robot", "redol", "boças", "robin", "cotat", "daras", "bucar", "muira", "pelag", "endos", "incou", "tolis", "occia", "reuni", "dites", "anara", "ronxo", "marxo", "itere", "balbe", "pausa", "rento", "apose", "torno", "coets", "sumir", "fumen", "gitis", "fenen", "oscos", "ratxo", "mufat", "xerri", "cavem", "venos", "bromo", "depes", "avern", "suors", "usare", "solca", "senti", "taleu", "ensab", "ollal", "cofeu", "aglev", "serem", "beata", "ronyi", "trust", "rodal", "dopas", "tombo", "drapo", "borat", "solit", "lobar", "nacte", "hades", "odies", "quedi", "coder", "onegi", "ensot", "fogam", "parla", "aplom", "acuse", "xarot", "gomet", "gambo", "bioma", "punxa", "fores", "gosau", "aflui", "miler", "xafeu", "hissi", "xarre", "arcam", "baies", "bades", "tomis", "celis", "emete", "malar", "inhum", "tebis", "tomas", "xopem", "palpo", "tipis", "xiita", "noies", "setis", "ofset", "escur", "parca", "forad", "malta", "apila", "dilui", "borna", "tiren", "debil", "aquos", "bolig", "itris", "banal", "alces", "caler", "atiis", "vanau", "lobel", "sones", "recit", "xocam", "timol", "feris", "hagem", "zombi", "lisis", "atiem", "avesi", "abriv", "bojor", "repix", "vacus", "gadid", "bulbs", "sogat", "solti", "velit", "refie", "judes", "hageu", "cuine", "fibra", "dolis", "doble", "tanyo", "fonau", "opose", "gelos", "bocat", "tetan", "resar", "urubu", "llurs", "ertic", "poble", "semos", "dugeu", "pales", "xaque", "nitri", "caoli", "aspra", "anyer", "orbar", "penar", "satur", "coval", "gepic", "xifri", "menut", "sucre", "vamba", "xaloc", "gleba", "covis", "maure", "ainus", "magne", "bolca", "crein", "difon", "caldo", "boqui", "mirba", "renos", "redir", "bufar", "ordis", "desoi", "hassi", "cunys", "tutsi", "avenc", "adobs", "obria", "femer", "apoma", "rifes", "xalis", "halit", "cream", "mucro", "topis", "violo", "aquis", "bidet", "delis", "toses", "alcea", "proer", "banye", "tancs", "rodau", "topic", "ajaus", "topam", "vesta", "zinca", "firam", "meixa", "metel", "preve", "ruixa", "parsi", "pagau", "enriu", "plome", "parta", "ujant", "corri", "toies", "asmat", "bordo", "ardus", "arnin", "aseta", "pedio", "becau", "dosin", "crism", "entro", "medit", "enrun", "laxis", "ermis", "samer", "airar", "vedas", "adiny", "molga", "ucats", "front", "ivori", "fonya", "petal", "cavet", "haleu", "tabal", "xorra", "apega", "operi", "visur", "garol", "carmi", "depur", "dinya", "murem", "vesin", "arpin", "plany", "grial", "guise", "mitil", "marda", "eunuc", "tacar", "velau", "queis", "erola", "gesto", "sueus", "denti", "judos", "linxa", "minie", "arqui", "azole", "taxem", "torce", "viram", "podar", "brell", "major", "bitem", "vante", "ugons", "fatal", "cremi", "arcar", "music", "empop", "nades", "afami", "ramar", "falls", "cebid", "abraç", "renys", "boiga", "arlot", "sogam", "llars", "vomit", "vorem", "badam", "feroç", "andes", "adulo", "soria", "midau", "sobro", "locus", "visen", "bonys", "paura", "fonda", "optat", "obten", "bufor", "remou", "burro", "mides", "remol", "puden", "veien", "xopau", "obvis", "creus", "pompa", "mures", "buits", "finir", "conic", "nadem", "fianç", "arpar", "exsol", "xafic", "teues", "adnat", "pinyo", "morta", "cabia", "lloeu", "lloms", "afame", "aposi", "xalet", "cordo", "enart", "carri", "ogres", "sanes", "rallo", "modul", "unixo", "ortic", "saigs", "rifam", "melsa", "amorf", "obste", "somic", "enduu", "acunç", "armer", "armas", "optas", "laque", "ulans", "ascos", "zelen", "domem", "manau", "xotxo", "colgo", "bords", "podat", "xuclo", "fimbr", "mofau", "citem", "laves", "prisa", "denud", "sufle", "socam", "parcs", "jaços", "festa", "halos", "racio", "minii", "afust", "veden", "botra", "sensu", "sores", "necia", "acluc", "casam", "furen", "aligo", "baven", "intub", "panda", "boren", "botix", "metre", "afueu", "salis", "dinas", "tiram", "fadau", "nepta", "cuits", "obols", "matxs", "coles", "ullal", "galgo", "dolia", "rodes", "jeien", "pares", "rafis", "calme", "drece", "tatxo", "punte", "lirat", "roine", "amiga", "guapa", "seieu", "vagim", "torci", "valso", "nitra", "armam", "carga", "creix", "cosia", "aiori", "equid", "arsis", "erogo", "moure", "sabre", "codol", "mutua", "deces", "penos", "calar", "ireix", "calos", "xinem", "trese", "segut", "rebel", "roals", "miden", "seder", "balbs", "anims", "arila", "punya", "paera", "cular", "bauds", "oliar", "menys", "redos", "bufin", "colit", "evadi", "tints", "junta", "atraç", "saldi", "pipem", "falçs", "sipis", "fixos", "tesor", "diada", "retro", "fulgi", "odori", "fasts", "visas", "foreu", "venet", "nevam", "alaba", "saleu", "rebeu", "divag", "opals", "ciseu", "rotor", "eluim", "calfo", "xauxa", "garfi", "cerut", "llobi", "sumem", "amele", "gamis", "areng", "sopor", "grava", "caden", "treis", "amelo", "torbo", "rageu", "raure", "vitxo", "poliu", "situa", "airin", "botes", "copte", "batra", "alana", "metem", "cobra", "finti", "pocio", "ramin", "afino", "ennov", "curar", "empre", "adver", "blues", "prega", "astat", "emule", "suids", "emmen", "bises", "brusc", "covam", "isoli", "reglo", "desar", "adjur", "copra", "arsia", "guiem", "espot", "tresc", "cabem", "avinc", "abdui", "avise", "ester", "odres", "minar", "malva", "punxe", "mamen", "curau", "netes", "ludic", "pileu", "brotx", "papal", "aliis", "voten", "punta", "baris", "index", "gelea", "donau", "atros", "suats", "fiare", "trace", "coala", "punit", "odrer", "ligni", "circs", "ocorr", "joana", "troti", "solis", "moles", "pasts", "cases", "bogam", "boçau", "gabia", "mitja", "sacre", "cafta", "justi", "nadar", "jaura", "carex", "crics", "botri", "errau", "parix", "litic", "podin", "obtur", "ignor", "balmi", "filio", "tardo", "treus", "tedis", "rimam", "sards", "praxi", "trunc", "pigos", "taule", "druda", "dides", "pifre", "fonts", "aveso", "bisis", "excav", "magna", "cadec", "bolid", "fosfa", "remau", "zetes", "bocen", "brocs", "acers", "tassa", "finar", "capet", "aspii", "galet", "entur", "avena", "satiu", "redox", "meats", "rauto", "ornin", "liben", "vaneu", "sarro", "aeria", "xamat", "calds", "roses", "duets", "recas", "manxa", "fixes", "deies", "laqui", "jugar", "uteri", "fluiu", "mogue", "dolas", "viris", "cavin", "rasos", "envel", "grimp", "andan", "debel", "faisa", "botis", "xiteu", "crani", "senyo", "jaupo", "faune", "salze", "ambli", "erros", "gojas", "dolça", "ruble", "tibar", "llago", "areny", "assec", "negar", "copse", "halis", "prive", "enrai", "llims", "munys", "pogue", "donat", "maçon", "galio", "macar", "blima", "irona", "prues", "sipio", "jagui", "illes", "bonda", "jardi", "atzur", "pinte", "titis", "rapto", "tissu", "tulis", "prons", "desol", "irosa", "venim", "xitam", "exalç", "cedir", "acant", "nuvis", "optim", "elenc", "refes", "hulla", "faena", "eroli", "tupat", "acima", "adeim", "limfa", "enton", "afusi", "lotic", "pinta", "raors", "ditet", "tatar", "glies", "emano", "oeixi", "admir", "nogat", "anoti", "tenar", "gelor", "incoi", "xumis", "patim", "boxin", "coopt", "natgi", "ciclo", "segon", "oires", "pleca", "iogui", "celar", "ensum", "forjo", "veies", "fages", "picol", "xunts", "vanin", "riera", "regir", "porti", "casta", "verat", "rosam", "curos", "badem", "avias", "prois", "xaieu", "foner", "sisme", "tarif", "eflui", "conto", "arruu", "acana", "teixi", "pouam", "orfic", "oxids", "queix", "peles", "dumes", "lauda", "varie", "setes", "tribu", "minsa", "pixum", "foceu", "perxo", "renou", "sacia", "colle", "nolit", "domer", "quilo", "lassi", "cacin", "carli", "acars", "viril", "roser", "ereta", "rombe", "tuies", "rebin", "ungix", "safir", "filum", "bohri", "bavis", "nedin", "lando", "envii", "sacos", "tudeu", "afixa", "trill", "eines", "albio", "petas", "tocom", "alfes", "clofa", "mudes", "egees", "venem", "jaupi", "avive", "llaus", "petau", "nuada", "maimo", "xates", "seden", "aglos", "cofem", "bavin", "rafio", "tapia", "coble", "fofos", "pifol", "polso", "bagas", "pisar", "cuegi", "penjo", "amblo", "varva", "arcat", "aprad", "fusio", "blana", "lliti", "caure", "servo", "unieu", "india", "sango", "rapim", "frisi", "eluir", "alums", "lasso", "forci", "dador", "tauts", "acopi", "alabe", "fliti", "balms", "pixem", "cofin", "neule", "acaço", "ictus", "fissa", "dolem", "emana", "facis", "corrs", "preny", "cuide", "dopeu", "naies", "violi", "estac", "becas", "ligur", "refii", "fonar", "impur", "resam", "varii", "capix", "xineu", "hispa", "vesti", "nuant", "lluit", "anaps", "palla", "llois", "hafni", "gotic", "dards", "xopas", "comem", "cista", "femto", "nyics", "sesta", "ocapi", "encau", "oeixo", "canti", "telam", "roino", "borle", "punto", "sicul", "corra", "sopes", "serps", "beseu", "folro", "calin", "ideis", "vanes", "crepe", "agnat", "sopis", "gasco", "aires", "gicat", "llusc", "torça", "molar", "remeu", "besso", "nyams", "coixa", "drens", "decap", "mateu", "penen", "tupas", "menga", "urnes", "mufla", "xafau", "arbre", "isola", "abono", "guell", "sents", "botil", "ebens", "cofam", "mollo", "venço", "boids", "acotx", "veieu", "ossat", "culer", "reben", "punis", "empou", "incit", "maixe", "densa", "apoco", "raten", "xumas", "xalat", "dunes", "arnat", "banat", "carst", "iambe", "maneu", "ficat", "verin", "cimal", "toneu", "andar", "guixe", "fuita", "camal", "peçol", "gerds", "siboc", "garle", "baldi", "ritmi", "escon", "flita", "sirte", "funys", "fendi", "enjus", "comin", "tosca", "arnis", "xapeu", "plaga", "polia", "dutes", "padda", "adore", "aviin", "bogar", "mucor", "rafec", "simis", "torne", "bolet", "colic", "vespa", "astis", "pirin", "renga", "borax", "afoga", "aguat", "dutxe", "gojau", "murau", "rebia", "nanno", "foneu", "mieta", "signi", "educa", "miser", "abast", "gijol", "divos", "clars", "hepte", "armem", "emesa", "dacio", "bills", "amnic", "ossam", "bromi", "pobla", "funya", "boics", "segui", "sabeu", "gaons", "panxo", "trufo", "ungli", "ganya", "volea", "veteu", "munim", "apuja", "golls", "gabat", "aport", "ungir", "juris", "vocal", "acani", "ulema", "amecs", "tupam", "ornat", "vagal", "paixi", "lucis", "crema", "trone", "hotel", "neula", "avine", "cavat", "minut", "faden", "domen", "nevat", "aboin", "xufla", "ertes", "infle", "valga", "sonda", "ermin", "rifis", "boxen", "feres", "buide", "napel", "vereu", "grups", "munta", "treia", "broms", "obven", "tumul", "regne", "hilum", "macer", "aposa", "piran", "gorra", "remot", "cusis", "borra", "raiem", "sarpa", "tupin", "notau", "arili", "edril", "floto", "miras", "doleu", "gepes", "veros", "atipi", "auric", "maten", "paixe", "teseu", "balit", "osses", "dotis", "atard", "bipla", "bufat", "reput", "mufas", "obtin", "veina", "polos", "solut", "honri", "arrio", "altos", "angla", "posen", "faran", "dandi", "mogui", "amida", "pulmo", "buida", "conti", "ullet", "xafam", "naixo", "agave", "jocos", "badat", "eteri", "cauta", "viras", "calat", "cisis", "mulle", "belin", "furte", "fetes", "serii", "fundi", "celem", "edito", "rompi", "colat", "airam", "babol", "afuat", "macas", "ferms", "rompa", "veraç", "temer", "favor", "clova", "aguts", "venge", "fitxi", "semem", "tirau", "agram", "remig", "bunes", "niava", "obert", "arnar", "delmi", "dujas", "munis", "fusat", "minis", "pipas", "muixa", "jeies", "cucam", "citas", "pegam", "piuis", "remer", "tonga", "alefs", "ricau", "peone", "ratxi", "avien", "mores", "aulic", "dosam", "panes", "venda", "jacte", "ossia", "esmas", "pipes", "sames", "fugin", "febre", "gusts", "atrec", "ruste", "pouem", "metja", "molen", "siulo", "rebem", "estem", "ulcer", "estir", "pinci", "paien", "avior", "heroi", "gotxa", "tremo", "veren", "xolle", "preen", "teses", "pugis", "llace", "plaço", "grane", "tupis", "mixes", "sorgo", "tonus", "refin", "fitin", "ebris", "hiena", "vento", "tanys", "ritme", "tempr", "dosat", "minem", "acuts", "agris", "cacem", "evito", "bones", "nugau", "pegau", "grifs", "gesps", "unics", "vigix", "exalt", "pesol", "aidis", "unire", "risse", "loqui", "cleta", "embeu", "cabus", "nevau", "dotar", "solla", "esten", "porxo", "velar", "basti", "coiem", "mesat", "tempo", "empil", "octet", "tapii", "occix", "hutus", "lidis", "finix", "dubti", "fluor", "parim", "lames", "musar", "oolit", "fraga", "motxa", "tremp", "sonic", "gallo", "gaudi", "sesti", "colza", "brogi", "sedat", "visor", "lamia", "pesis", "didos", "nafra", "tecis", "sedui", "repta", "acane", "xofer", "faula", "citat", "filat", "batle", "pelai", "agues", "afuar", "oleic", "vital", "cague", "auque", "basas", "mamar", "fadar", "dujat", "rugia", "sidra", "rajol", "atles", "polli", "pagas", "radis", "cruie", "aguas", "clops", "asson", "aspat", "bruts", "amara", "inris", "ostra", "muler", "porca", "eriço", "dinyi", "pupil", "conxe", "bogos", "oixes", "vairo", "apost", "trinc", "llaun", "asils", "oests", "cabli", "pudol", "forme", "equip", "clavo", "manen", "museu", "sumas", "enuig", "sobti", "gleis", "afons", "delix", "musis", "remir", "colet", "fajol", "reblo", "rapen", "passo", "glaci", "exigu", "flits", "trios", "trull", "pinna", "gogin", "raspe", "beaba", "hadro", "dalli", "almon", "bites", "plega", "alifs", "reies", "cebes", "xoriç", "evite", "renet", "tacte", "fetal", "perit", "usada", "duode", "carpi", "coapt", "jurau", "paona", "adhuc", "cuidi", "feriu", "arnio", "rodia", "mural", "nyaco", "penam", "esmes", "notes", "ofenc", "nucli", "brivi", "buina", "pixen", "iliac", "siule", "traça", "cintr", "esnob", "sutge", "falca", "botxi", "roent", "ainar", "opino", "gelar", "nipis", "dopem", "apall", "tarot", "artic", "deure", "repte", "vomic", "cessa", "isqui", "papat", "capam", "rugbi", "cople", "epode", "jugui", "negas", "afogo", "guipe", "cairi", "sodat", "agror", "tomau", "dreno", "tires", "donja", "crebi", "marea", "monos", "femat", "vogia", "optis", "ideeu", "ranca", "pesas", "daric", "copel", "atieu", "murat", "falta", "zulus", "force", "expen", "badiu", "pisca", "ideam", "curts", "forbi", "grius", "bruna", "bloca", "preus", "bisat", "masia", "afeli", "tusti", "menam", "forca", "pinto", "fosso", "bufeu", "conxo", "abusa", "xapot", "fonyi", "boves", "usara", "marcs", "orfes", "vogar", "pisen", "fogar", "perim", "tanda", "xolli", "cosim", "borns", "gicau", "talls", "nitre", "curta", "xueto", "blecs", "oient", "alegr", "alcen", "pures", "fineu", "cogue", "males", "eriça", "aster", "atipa", "fasos", "flota", "paret", "resol", "atoni", "flacs", "al·le", "delma", "llufi", "salat", "busso", "leses", "xorri", "larix", "fonam", "apama", "xiulo", "temut", "natro", "andoi", "veire", "alber", "beuen", "furer", "nonat", "boire", "lores", "retur", "vanen", "aljub", "jurar", "voral", "tolta", "trast", "pouas", "porat", "desos", "plans", "adesi", "urics", "armin", "dejus", "dalin", "tixen", "vogui", "cerro", "oiren", "llaor", "vodus", "covat", "soler", "supur", "olien", "fenix", "gomer", "cupes", "brufe", "reviu", "venta", "rufes", "fenas", "vario", "cegar", "filau", "surts", "senya", "estaf", "llors", "dubni", "topin", "avere", "amoli", "hisse", "quiet", "oocit", "tesam", "natjo", "ionis", "llaci", "lilas", "alosa", "aquea", "traut", "caros", "afric", "arpon", "viole", "tapes", "postr", "tutis", "tofut", "liqua", "cogit", "flixa", "etiol", "bocut", "gresa", "magol", "roden", "avera", "envit", "vacat", "alcin", "bales", "aduli", "moblo", "pitja", "nadau", "reina", "secta", "nomis", "xotro", "cloro", "sitid", "naifs", "maqui", "jurat", "haplo", "firem", "vareu", "remei", "gruis", "salli", "auixo", "parli", "vogit", "nedar", "xamas", "apili", "esser", "olbia", "ideas", "agraf", "errar", "bateg", "daren", "birbi", "egues", "xibec", "boxas", "vagau", "cuqui", "gorga", "orixs", "botut", "cobai", "bucci", "tesin", "duien", "gosam", "tinyi", "aurts", "duana", "xaman", "nials", "acull", "feixo", "amunt", "porgo", "brego", "cosir", "apitr", "clasc", "versi", "clecs", "unena", "nenia", "vells", "calço", "guiar", "espui", "palau", "belam", "xitis", "gasis", "moque", "brufi", "cedis", "naden", "lacau", "ioles", "xaiat", "vacam", "cauts", "joios", "avols", "ganso", "orria", "mobil", "filie", "aidar", "altar", "flixo", "horts", "grate", "coves", "cromi", "resti", "baixe", "retoc", "criam", "menjo", "pomer", "estic", "adira", "llufo", "femeu", "sotjo", "digno", "pasti", "mutic", "cossa", "sales", "galib", "vomer", "fitxa", "banca", "curen", "voris", "murin", "falua", "sexem", "mouen", "voste", "somie", "danys", "xanxa", "regue", "drusa", "rebes", "forts", "pubis", "morsa", "mingo", "badar", "visir", "essiu", "paten", "perxi", "advin", "mocam", "brans", "fitor", "corne", "cardi", "ponen", "garla", "const", "rifen", "iodis", "temem", "moder", "pizza", "savia", "ovada", "iodit", "dacis", "xopin", "besam", "salpe", "fobia", "mobli", "dolar", "fresa", "iodes", "xicra", "ortiu", "gloto", "ollam", "furat", "regit", "enrol", "focid", "rodol", "simes", "tiria", "cafes", "retol", "belat", "reigs", "cimas", "rosis", "bucal", "oible", "mescs", "taxau", "crocs", "ceiba", "tresa", "bisas", "dieta", "dinyo", "animi", "peria", "brinc", "ornau", "raims", "incoa", "pixat", "compt", "semeu", "regix", "cussa", "salut", "molsa", "lipid", "final", "mugia", "encul", "daten", "criau", "tasti", "horda", "dugem", "toxic", "nocer", "amarr", "noqui", "emuls", "julia", "unglo", "barns", "glace", "xeixs", "donen", "talps", "aucau", "baden", "fureu", "famul", "oxima", "casis", "longa", "xocar", "cisin", "dracs", "enter", "refia", "telat", "trote", "cofia", "popat", "lacti", "solls", "llavi", "allen", "tapeu", "senes", "calbs", "escar", "llata", "libar", "vicio", "filis", "raspi", "eludi", "sisos", "lleme", "proto", "sodis", "maror", "torus", "xeres", "reneg", "vetem", "filas", "nafte", "latex", "gueto", "empar", "pruus", "culta", "acale", "dreci", "llima", "arreu", "diode", "sumix", "atans", "havem", "faeto", "rosin", "vagit", "fileu", "vanam", "couen", "trene", "xitat", "tromp", "toves", "casau", "reieu", "petam", "doses", "fanga", "odora", "uvees", "vagis", "panta", "reuma", "semar", "baula", "vulga", "sexar", "curis", "ascla", "local", "tolix", "xutam", "jurco", "podas", "masec", "oques", "rajos", "penis", "adobi", "covau", "urpix", "sepal", "agbes", "jaure", "imida", "canvi", "resto", "culla", "ooide", "gemiu", "guiso", "roigs", "ricas", "erice", "coipu", "deria", "amena", "brasa", "crest", "surfs", "hissa", "incoe", "caiga", "aloja", "banau", "voret", "galop", "gords", "conec", "esbuc", "ofesa", "erren", "cordi", "xuixe", "innat", "nuvol", "motet", "garli", "volin", "beure", "guies", "perli", "calen", "iridi", "tibat", "tesla", "eluiu", "duies", "gelid", "riqui", "cotem", "flamo", "solat", "migri", "gomat", "deseu", "llami", "ollao", "sorge", "folii", "acens", "xabec", "maire", "cegau", "bosco", "nanni", "forro", "orsin", "asile", "glans", "ferit", "burca", "empas", "nueta", "cafre", "pario", "rapte", "molau", "cesis", "brodi", "hisop", "ralle", "costa", "catau", "jures", "saler", "galfo", "ambos", "xefla", "quics", "saimo", "isard", "seies", "tacae", "ofici", "olivi", "fenys", "apugi", "allar", "dopau", "viola", "ondia", "fonas", "libel", "emboç", "carre", "botia", "xurra", "canat", "albes", "lacro", "maons", "comal", "borno", "robem", "ometa", "tacit", "tenue", "pruia", "criem", "copeu", "agueu", "clina", "ansat", "toqui", "sarri", "marro", "aguau", "boten", "llaut", "boiem", "podre", "vacua", "retix", "espua", "tible", "ciava", "astes", "garro", "bries", "tenir", "veral", "calma", "liana", "verem", "burlo", "jonec", "moleu", "xifro", "orava", "cotar", "pivet", "remug", "algal", "mames", "xuixa", "celes", "guias", "cabit", "arnas", "aliga", "broto", "vexen", "bresc", "avivo", "serbi", "mapes", "anise", "fulla", "gruau", "tupeu", "ajace", "alças", "balix", "imper", "blens", "prada", "engeg", "cuats", "oliis", "fangs", "gosis", "tagal", "coris", "afuin", "coent", "rajar", "verba", "monyo", "afuas", "nafri", "vidua", "tolls", "barbo", "senil", "reses", "carib", "renyo", "nates", "forra", "oiosa", "bleva", "suosa", "ratam", "maura", "repes", "enroc", "seras", "formo", "tudar", "opine", "tocar", "garts", "difam", "riero", "negra", "plani", "xopat", "xaies", "diazo", "zains", "adeso", "indag", "antic", "blego", "mugro", "omisa", "sogra", "gabis", "compr", "bacil", "islam", "assoc", "mirar", "ovnis", "damna", "trobo", "fallo", "salud", "aorta", "trama", "garsa", "movia", "nevus", "tafur", "minen", "greca", "armau", "somii", "paixa", "exsud", "minva", "dinda", "alçur", "canac", "gasso", "eruga", "inxes", "obeia", "melca", "allet", "amits", "jugam", "rasam", "tiros", "pudes", "llets", "gemeg", "ciant", "geoda", "sordo", "arnau", "figur", "beque", "gusti", "conve", "tossi", "firal", "segur", "burli", "agrad", "colam", "natal", "mugit", "comas", "topat", "veler", "plori", "camus", "domti", "vanar", "sedau", "clics", "zooms", "blufs", "resas", "salpo", "folcs", "engom", "metes", "porta", "motor", "folla", "argui", "grisa", "molia", "hansa", "genic", "nolis", "uqueu", "coler", "estre", "sulsi", "honor", "solam", "xarpa", "nomeu", "triga", "setze", "planx", "bitxa", "quasi", "femam", "allev", "ronxe", "tafia", "estuc", "armis", "flaps", "capci", "parat", "manoi", "metjo", "vudus", "demor", "mudis", "ablam", "gaube", "bifis", "refut", "calls", "oiant", "glops", "buosa", "copsa", "darga", "enfel", "luges", "queri", "locul", "avala", "taram", "mimem", "marco", "pelfa", "badin", "vetas", "gasam", "irisi", "musau", "tatui", "olive", "reton", "orbis", "xoque", "boina", "evoco", "perca", "acero", "tinys", "atest", "curul", "furgo", "maxim", "ficam", "nadiu", "jonia", "lliri", "cabot", "bufem", "alans", "basco", "ungla", "fruir", "triti", "grats", "intro", "false", "cruel", "donam", "ascle", "mosts", "llava", "piles", "llora", "rancs", "premo", "virot", "avese", "fonem", "esteu", "trepa", "renoi", "copro", "obrem", "ritus", "curia", "dames", "forco", "atony", "diesi", "cabeu", "timpa", "orgue", "perns", "finte", "binar", "cells", "sonos", "nacra", "venal", "culli", "biaix", "meneu", "sopin", "fajos", "irrit", "esmis", "detur", "doten", "baria", "pauls", "ficau", "nadin", "serie", "guari", "paieu", "saria", "pudic", "linxs", "xacra", "verse", "edens", "colin", "cimin", "tussi", "nexia", "ocros", "endus", "capes", "cansi", "samoa", "morat", "xiule", "opila", "ampla", "mimam", "gafet", "tions", "roter", "aftos", "seura", "cants", "sabea", "surem", "cites", "prein", "espad", "asili", "giteu", "capaç", "eolic", "herba", "estoc", "aqueu", "frega", "biota", "libem", "botid", "dicto", "magre", "farsa", "olies", "celeu", "devot", "alena", "pelau", "tampa", "pesca", "joves", "foren", "guano", "toret", "orbin", "bavas", "derog", "gouda", "dunar", "copia", "causo", "insti", "aineu", "dinye", "emeto", "calca", "salam", "creui", "varen", "coien", "conte", "direu", "varec", "amaço", "balim", "trobi", "afamo", "centr", "sidos", "mants", "ungim", "pispe", "azida", "adobo", "dosis", "pispo", "jacti", "sabor", "atuim", "amera", "passi", "titll", "fetid", "doset", "tebia", "nubil", "veseu", "purga", "litxi", "cepat", "troia", "arpam", "rullo", "hague", "colis", "metis", "prole", "brama", "crise", "escod", "piuem", "visar", "balec", "maori", "vanem", "luxin", "tibau", "caveu", "estib", "cucau", "corda", "ofega", "polie", "hindu", "rugit", "roncs", "torxo", "oesca", "apura", "venus", "xorre", "urpat", "ombre", "sivan", "autos", "quina", "torta", "usava", "venen", "occiu", "duros", "bombo", "demes", "actuu", "vests", "butza", "jeuen", "iodat", "occit", "luxos", "acusa", "vinte", "lluna", "afoll", "entim", "sacam", "mulla", "avort", "absol", "amorr", "reles", "escue", "isidi", "disti", "gajos", "costs", "ovids", "serfs", "griva", "caoba", "aidin", "quill", "sabir", "catet", "rimas", "bonas", "pugeu", "vioni", "raimi", "hipic", "baveu", "vexat", "lates", "sobec", "erram", "pouau", "liceu", "apiad", "punir", "paiem", "trami", "diton", "ombro", "flori", "aeris", "viots", "soldo", "celin", "apiny", "moria", "beisa", "pelis", "vexin", "lesos", "pigot", "poruc", "vibra", "rodam", "engan", "ajuts", "rapau", "xiten", "dista", "nuosa", "engir", "vogir", "hajar", "boram", "salen", "ampre", "jugau", "riber", "alien", "ideen", "pucer", "borja", "cercs", "fenyo", "brive", "xoric", "cacen", "basau", "xafas", "bleis", "espas", "cerna", "cegas", "balis", "plaer", "fites", "caleu", "firau", "cercl", "vedat", "tipes", "flats", "boldo", "callo", "agita", "llirs", "corma", "uixer", "crups", "matau", "frisa", "aparc", "tsuga", "ordes", "boles", "allau", "lliur", "nanna", "talli", "orseu", "fireu", "torxa", "calfa", "silva", "abusi", "ajuda", "macos", "xafem", "vivia", "baser", "fenem", "crims", "grada", "botet", "caçau", "cugul", "grues", "gambe", "molto", "atxes", "setra", "sotja", "pagre", "ferre", "rapid", "piuin", "ponts", "remin", "eslau", "hemio", "rella", "omeda", "cusin", "aiden", "afilo", "coron", "arnam", "rascl", "xeric", "minin", "drets", "xaqui", "prova", "remet", "cause", "cucut", "fongo", "irada", "empri", "opera", "expil", "error", "jagut", "banus", "anets", "domin", "obsta", "saulo", "torbs", "tords", "sumis", "escui", "miasi", "binau", "oisca", "tolem", "valid", "venja", "vexeu", "alege", "faigs", "unica", "acidi", "dinam", "olivo", "datxa", "fitxo", "avant", "burgi", "parin", "haura", "dulls", "tuejo", "anses", "rusca", "pevet", "mugic", "fotjo", "jueus", "covar", "aptot", "penya", "mutil", "digna", "escou", "escoi", "saies", "pacta", "ancut", "golos", "sanem", "pacti", "lloin", "mamia", "vexau", "trino", "ortos", "vases", "rossi", "rapaç", "tomat", "lords", "esbos", "fisic", "ficas", "ovula", "colem", "ricat", "ocume", "iglus", "lluir", "fruit", "viuda", "arneu", "alier", "sopau", "anyoc", "ronca", "xaien", "boiri", "sarna", "autes", "cavar", "eixal", "rebli", "gemis", "gavot", "ruixe", "badia", "auixe", "admes", "actiu", "cuots", "batec", "gurus", "deliu", "torri", "fiscs", "ouera", "esmus", "flint", "segas", "reats", "aucar", "peleu", "curat", "fotut", "ragui", "mudar", "aferm", "gique", "murta", "obrat", "mular", "bores", "amble", "noten", "apame", "cavis", "tibam", "gasem", "ecidi", "airis", "obeir", "morfi", "cegui", "odien", "fetge", "salaç", "miole", "prasi", "rampi", "fumem", "ombus", "idein", "farad", "cinto", "femta", "fines", "eixir", "aduna", "estau", "pugno", "orsam", "bufet", "piola", "seent", "sonar", "greal", "talec", "canca", "tipic", "emirs", "tiben", "nivos", "dalle", "cedia", "obrir", "esmat", "adoro", "ofidi", "adiin", "gabam", "cient", "vetll", "orbas", "tijat", "escos", "rebec", "erras", "crols", "ofren", "hores", "gitin", "rabic", "atica", "cuguç", "cadup", "arque", "adiar", "trobe", "renis", "nedol", "saldo", "peteu", "guiny", "lique", "fitxe", "esmeu", "oasis", "terça", "arile", "podra", "xumam", "valen", "anfos", "viono", "repel", "volem", "tarem", "solar", "aboca", "balca", "falsi", "xuten", "color", "velem", "tranc", "fumar", "jover", "opugn", "afama", "gruem", "salva", "coral", "ultro", "ganxa", "menor", "marri", "trons", "apoda", "seria", "anodi", "arnem", "taure", "ideau", "veles", "mapem", "grife", "llapa", "lasca", "xopen", "cotam", "vexar", "sotes", "empac", "retra", "fiada", "fuels", "atrit", "riell", "fitam", "onsos", "resen", "xucla", "capen", "penat", "barem", "musas", "firar", "vuits", "envio", "afixe", "eduix", "metxa", "rials", "envai", "drogo", "patge", "himne", "vists", "rissa", "polsi", "ajaça", "ferir", "dardo", "nacio", "borsa", "tatus", "vesau", "vanos", "xutis", "xiscl", "tabul", "fermi", "cuini", "ainen", "orsai", "dardi", "astur", "balou", "laxas", "molin", "zigot", "medes", "fugit", "plats", "vives", "terns", "badeu", "lledo", "noent", "papus", "clisi", "furan", "cumel", "flora", "adule", "finis", "alzin", "erina", "calba", "amani", "gojat", "duals", "gisca", "orino", "lider", "vinca", "tupem", "pugna", "napar", "ufana", "sagno", "novia", "esgai", "rural", "cavau", "capar", "colco", "moixo", "afone", "molal", "acusi", "rager", "pulla", "lucri", "engul", "collo", "boneg", "encir", "elidi", "quota", "malle", "ludio", "morin", "audio", "solsi", "quere", "banyi", "ajeia", "amido", "liqui", "matat", "nadir", "emmel", "melis", "nogue", "pells", "rotlo", "erols", "pesar", "deler", "botin", "boxam", "afibl", "creis", "osmic", "cetil", "rajat", "tonem", "sogue", "botiu", "unint", "llevi", "capol", "ermau", "manil", "ucara", "baten", "paeix", "cigar", "armat", "rebla", "fruis", "exorn", "glaça", "valse", "raura", "guiat", "crasi", "nomer", "esbaf", "frare", "adopt", "oiran", "plata", "socis", "units", "cavec", "aireu", "light", "ronxi", "ganyo", "crega", "busco", "anada", "elemi", "varis", "xacam", "saque", "saons", "canic", "eixau", "tapam", "armen", "vaire", "ajude", "capte", "urçol", "briso", "cerra", "bujol", "pegas", "setii", "morro", "uncio", "cotin", "cuida", "rabia", "jorns", "ateus", "petat", "nyaca", "enema", "sadic", "tuber", "epica", "munya", "macat", "jonca", "papis", "uissi", "sinus", "maseg", "atiau", "obvio", "apuge", "varia", "baixo", "privi", "treme", "sabia", "peiot", "donin", "fruiu", "nocat", "borne", "citin", "plano", "xuits", "hagut", "arrui", "troca", "tripa", "estot", "pujat", "serra", "agusa", "panys", "piule", "albor", "difos", "sorro", "relax", "agnus", "copio", "pille", "gauss", "murto", "mudas", "ninoi", "subve", "cimar", "cirer", "culem", "fluit", "ramis", "seito", "dento", "raimo", "xaias", "agata", "afirm", "robes", "tenia", "apren", "creau", "fecal", "doteu", "ajeis", "sento", "juram", "tanco", "tsade", "empan", "boixa", "bomba", "balls", "casba", "ovale", "lliça", "ranid", "duble", "gamoi", "vulpi", "ramam", "dosas", "imido", "talen", "rajas", "sabem", "libia", "celta", "comat", "humic", "sopeu", "ornas", "ovali", "gaita", "vetar", "tenaç", "fuets", "faceu", "bacul", "vengi", "pream", "cecal", "lacia", "bagol", "rafal", "admet", "ullam", "adoba", "apoca", "reixi", "dubto", "dreni", "fluid", "pecau", "bovid", "bigam", "nocar", "atiat", "groga", "arome", "viatj", "taper", "saboc", "obras", "afoni", "nimba", "orejo", "noque", "queia", "mioce", "rosen", "manin", "carps", "viava", "sipar", "tonya", "xifra", "pugen", "nedau", "grall", "pegui", "rapeu", "eduiu", "plepa", "escuu", "amura", "cable", "copen", "xacau", "culen", "enzes", "xacas", "acoro", "potol", "rollo", "dreça", "udolo", "prope", "gesti", "piula", "betum", "inici", "oldra", "pixes", "manna", "brusa", "burxa", "pedal", "acida", "agite", "albat", "trieu", "balun", "fique", "joell", "ouats", "xisca", "paren", "menti", "basso", "emula", "anota", "exons", "monts", "adono", "cerni", "alarb", "amaga", "fuges", "pudiu", "boteu", "tumid", "apuri", "preau", "posis", "tarro", "ploga", "furor", "rasis", "credo", "espai", "stilb", "azule", "brucs", "bambo", "jovia", "provo", "piues", "dallo", "joies", "emets", "plaus", "somes", "nitro", "puada", "usurp", "abill", "unfle", "guisi", "perlo", "sarja", "bollo", "punxo", "vesas", "pogui", "oiois", "adune", "tusta", "decal", "rengs", "linia", "moler", "botre", "anats", "place", "marxi", "items", "grega", "artet", "segle", "cuirs", "dolen", "emeta", "setge", "calem", "egeus", "babui", "bloco", "papam", "hajau", "pensi", "manem", "engaf", "panis", "plebs", "gussi", "forcs", "roder", "iarda", "barbi", "octau", "garra", "edita", "vacil", "audit", "tibem", "pella", "adven", "tirre", "serum", "quiti", "apane", "sacse", "suqui", "veçot", "ronso"],
            Ia = "present",
            Ma = "correct",
            Oa = "absent";
        var Ra = {
            unknown: 0,
            absent: 1,
            present: 2,
            correct: 3
        };

        function $a(e, a) {
            var s = {};
            return e.forEach((function (e, t) {
                    if (a[t])
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o],
                                r = a[t][o],
                                i = s[n] || "unknown";
                            Ra[r] > Ra[i] && (s[n] = r)
                        }
                })),
                s
        }

        function Pa(e) {
            var a = ["th", "st", "nd", "rd"],
                s = e % 100;
            return e + (a[(s - 20) % 10] || a[s] || a[0])
        }
        var Ha = new Date(2022, 0, 0, 0, 0, 0, 0);

        function Na(e, a) {
            var s = new Date(e),
                t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
            return Math.round(t / 864e5)
        }

        function Da(e) {
            var a, s = Ga(e);
            return a = s % Object.keys(wdsA).length, Object.keys(wdsA)[a]
        }

        function Ga(e) {
            return Na(Ha, e)
        }
        var Ba = "abcçdefghijklmnopqrstuvwxyz",
            Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));

        function Wa(e) {
            for (var a = "", s = 0; s < e.length; s++) {
                var t = Ba.indexOf(e[s]);
                a += t >= 0 ? Fa[t] : "_"
            }
            return a
        }
        var Ya = "statistics",
            Ja = "fail",
            Ua = {
                currentStreak: 0,
                maxStreak: 0,
                guesses: n({
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                }, Ja, 0),
                winPercentage: 0,
                gamesPlayed: 0,
                gamesWon: 0,
                averageGuesses: 0
            };

        function Xa() {
            var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
            return JSON.parse(e)
        }

        function Va(e) {
            var a = e.isWin,
                s = e.isStreak,
                t = e.numGuesses,
                o = Xa();
            a ? (o.guesses[t] += 1,
                    s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0,
                    o.guesses.fail += 1),
                o.maxStreak = Math.max(o.currentStreak, o.maxStreak),
                o.gamesPlayed += 1,
                o.gamesWon += a ? 1 : 0,
                o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100),
                o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function (e, a) {
                    var s = y(a, 2),
                        t = s[0],
                        o = s[1];
                    return t !== Ja ? e += t * o : e
                }), 0) / o.gamesWon),
                function (e) {
                    window.localStorage.setItem(Ya, JSON.stringify(e))
                }(o)
        }
        var Ka = document.createElement("template");
        Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 30px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n     display: flex;\n    pointer-events: none;\n  }\n .flag{padding-left: 4px;}\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n  </button>\n<button id="refresh-button" class="icon" aria-label="refresh">\n            <game-icon icon="refresh"></game-icon>\n  </button>\n       </div>\n    <div class="title">    <div>\n         WORDLE\n        </div> <img src="https://gelozp.com/games/wordle/img/ca.svg" class="flag">\n    </div>    <div class="menu">\n <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n         <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
        var Qa = document.createElement("template");
        Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
        var Za = "IN_PROGRESS",
            es = "WIN",
            as = "FAIL",
            ss = ["Increïble", "Magnífic", "Impressionant", "Genial", "Força Bé", "Pels Pèls!"],
            ts = function (e) {
                r(t, e);
                var a = h(t);

                function t() {
                    var e;
                    s(this, t),
                        n(p(e = a.call(this)), "tileIndex", 0),
                        n(p(e), "rowIndex", 0),
                        n(p(e), "solution", void 0),
                        n(p(e), "boardState", void 0),
                        n(p(e), "evaluations", void 0),
                        n(p(e), "canInput", !0),
                        n(p(e), "gameStatus", Za),
                        n(p(e), "letterEvaluations", {}),
                        n(p(e), "$board", void 0),
                        n(p(e), "$keyboard", void 0),
                        n(p(e), "$game", void 0),
                        n(p(e), "today", void 0),
                        n(p(e), "lastPlayedTs", void 0),
                        n(p(e), "lastCompletedTs", void 0),
                        n(p(e), "hardMode", void 0),
                        n(p(e), "dayOffset", void 0),
                        e.attachShadow({
                            mode: "open"
                        }),
                        e.today = new Date;
                    var o = za();
                    return e.lastPlayedTs = o.lastPlayedTs,
                        !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""),
                            e.evaluations = new Array(6).fill(null),
                            e.solution = Da(e.today),
                            e.dayOffset = Ga(e.today),
                            e.lastCompletedTs = o.lastCompletedTs,
                            e.hardMode = o.hardMode,
                            e.restoringFromLocalStorage = !1,
                            ja({
                                rowIndex: e.rowIndex,
                                boardState: e.boardState,
                                evaluations: e.evaluations,
                                solution: e.solution,
                                gameStatus: e.gameStatus
                            }),
                            Ca("event", "level_start", {
                                level_name: Wa(e.solution)
                            })) : (e.boardState = o.boardState,
                            e.evaluations = o.evaluations,
                            e.rowIndex = o.rowIndex,
                            e.solution = o.solution,
                            e.dayOffset = Ga(e.today),
                            e.letterEvaluations = $a(e.boardState, e.evaluations),
                            e.gameStatus = o.gameStatus,
                            e.lastCompletedTs = o.lastCompletedTs,
                            e.hardMode = o.hardMode,
                            e.gameStatus !== Za && (e.canInput = !1),
                            e.restoringFromLocalStorage = !0),
                        e
                }
                return o(t, [{
                        key: "evaluateRow",
                        value: function () {
                            if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                                var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                                    s = this.boardState[this.rowIndex];
                                if (e = s,
                                    !wdsB.includes(e) && !Object.keys(wdsA).includes(e))
                                    return a.setAttribute("invalid", ""),
                                        void this.addToast("Paraula no trobada");
                                if (this.hardMode) {
                                    var t = function (e, a, s) {
                                            if (!e || !a || !s)
                                                return {
                                                    validGuess: !0
                                                };
                                            for (var t = 0; t < s.length; t++)
                                                if (s[t] === Ma && e[t] !== a[t])
                                                    return {
                                                        validGuess: !1,
                                                        errorMessage: "La lletra ".concat((o = t + 1), " ha de ser ").concat(a[t].toUpperCase())
                                                    };
                                            for (var o = {}, n = 0; n < s.length; n++)
                                                [Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
                                            var r = e.split("").reduce((function (e, a) {
                                                return e[a] ? e[a] += 1 : e[a] = 1,
                                                    e
                                            }), {});
                                            for (var i in o)
                                                if ((r[i] || 0) < o[i])
                                                    return {
                                                        validGuess: !1,
                                                        errorMessage: "La paraula ha de tenir la llatra ".concat(i.toUpperCase())
                                                    };
                                            return {
                                                validGuess: !0
                                            }
                                        }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                                        o = t.validGuess,
                                        n = t.errorMessage;
                                    if (!o)
                                        return a.setAttribute("invalid", ""),
                                            void this.addToast(n || "No és vàlid en el mode guiat")
                                }
                                var r = function (e, a) {
                                    for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++)
                                        e[n] === a[n] && o[n] && (s[n] = Ma,
                                            t[n] = !1,
                                            o[n] = !1);
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        if (t[r])
                                            for (var l = 0; l < a.length; l++) {
                                                var d = a[l];
                                                if (o[l] && i === d) {
                                                    s[r] = Ia,
                                                        o[l] = !1;
                                                    break
                                                }
                                            }
                                    }
                                    return s
                                }(s, this.solution);
                                this.evaluations[this.rowIndex] = r,
                                    this.letterEvaluations = $a(this.boardState, this.evaluations),
                                    a.evaluation = this.evaluations[this.rowIndex],
                                    this.rowIndex += 1;
                                var i = this.rowIndex >= 6,
                                    l = r.every((function (e) {
                                        return "correct" === e
                                    }));
                                if (i || l)
                                    Va({
                                        isWin: l,
                                        isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date),
                                        numGuesses: this.rowIndex
                                    }),
                                    ja({
                                        lastCompletedTs: Date.now()
                                    }),
                                    this.gameStatus = l ? es : as,
                                    Ca("event", "level_end", {
                                        level_name: Wa(this.solution),
                                        num_guesses: this.rowIndex,
                                        success: l
                                    });
                                this.tileIndex = 0,
                                    this.canInput = !1,
                                    ja({
                                        rowIndex: this.rowIndex,
                                        boardState: this.boardState,
                                        evaluations: this.evaluations,
                                        solution: this.solution,
                                        gameStatus: this.gameStatus,
                                        lastPlayedTs: Date.now()
                                    })
                            }
                        },
                    }, {
                        key: "addLetter",
                        value: function (e) {
                            this.gameStatus === Za && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e,
                                this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]),
                                this.tileIndex += 1)))
                        }
                    }, {
                        key: "removeLetter",
                        value: function () {
                            if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                                this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                                var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                                this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"),
                                    e.removeAttribute("invalid"),
                                    this.tileIndex -= 1
                            }
                        }
                    }, {
                        key: "submitGuess",
                        value: function () {
                            if (this.gameStatus === Za && this.canInput) {
                                if (5 !== this.tileIndex)
                                    return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""),
                                        void this.addToast("Not enough letters");
                                this.evaluateRow()
                            }
                        }
                    }, {
                        key: "addToast",
                        value: function (e, a) {
                            var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                t = document.createElement("game-toast");
                            t.setAttribute("text", e),
                                a && t.setAttribute("duration", a),
                                s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
                        }
                    }, {
                        key: "sizeBoard",
                        value: function () {
                            var e = this.shadowRoot.querySelector("#board-container"),
                                a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                                s = 6 * Math.floor(a / 5);
                            this.$board.style.width = "".concat(a, "px"),
                                this.$board.style.height = "".concat(s, "px")
                        }
                    }, {
                        key: "showStatsModal",
                        value: function () {
                            var e = this.$game.querySelector("game-modal"),
                                a = document.createElement("game-stats");
                            this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex),
                                a.gameApp = this,
                                e.appendChild(a),
                                e.setAttribute("open", "")
                                e
                            sol = wdsA[this.solution]
                        }
                    }, {
                        key: "showHelpModal",
                        value: function () {
                            var e = this.$game.querySelector("game-modal");
                            e.appendChild(document.createElement("game-help")),
                                e.setAttribute("open", "")
                        }
                    }, {
                        key: "connectedCallback",
                        value: function () {
                            var e = this;
                            this.shadowRoot.appendChild(Ka.content.cloneNode(!0)),
                                this.$game = this.shadowRoot.querySelector("#game"),
                                this.$board = this.shadowRoot.querySelector("#board"),
                                this.$keyboard = this.shadowRoot.querySelector("game-keyboard"),
                                this.sizeBoard(),
                                this.lastPlayedTs || setTimeout((function () {
                                    return e.showHelpModal()
                                }), 100);
                            for (var a = 0; a < 6; a++) {
                                var s = document.createElement("game-row");
                                s.setAttribute("letters", this.boardState[a]),
                                    s.setAttribute("length", 5),
                                    this.evaluations[a] && (s.evaluation = this.evaluations[a]),
                                    this.$board.appendChild(s)
                            }
                            this.$game.addEventListener("game-key-press", (function (a) {
                                    var s = a.detail.key;
                                    "←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
                                })),
                                this.$game.addEventListener("game-last-tile-revealed-in-row", (function (a) {
                                    e.$keyboard.letterEvaluations = e.letterEvaluations,
                                        e.rowIndex < 6 && (e.canInput = !0);
                                    var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                                    (a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""),
                                                e.addToast(ss[e.rowIndex - 1], 2e3)),
                                            e.gameStatus === as && e.addToast(wdsA[e.solution].toUpperCase(), 1 / 0),
                                            setTimeout((function () {
                                                e.showStatsModal()
                                            }), 2500))),
                                        e.restoringFromLocalStorage = !1)
                                })),
                                this.shadowRoot.addEventListener("game-setting-change", (function (a) {
                                    var s = a.detail,
                                        t = s.name,
                                        o = s.checked,
                                        n = s.disabled;
                                    switch (t) {
                                        case "hard-mode":
                                            return void(n ? e.addToast("El mode guiat només pot ser activat a l'inici de la partida", 1500, !0) : (e.hardMode = o,
                                                ja({
                                                    hardMode: o
                                                })))
                                    }
                                })),
                                this.shadowRoot.getElementById("settings-button").addEventListener("click", (function (a) {
                                    var s = e.$game.querySelector("game-page"),
                                        t = document.createTextNode("Opcions");
                                    s.appendChild(t);
                                    var o = document.createElement("game-settings");
                                    o.setAttribute("slot", "content"),
                                        o.gameApp = e,
                                        s.appendChild(o),
                                        s.setAttribute("open", "")
                                })),
                                this.shadowRoot.getElementById("help-button").addEventListener("click", (function (a) {
                                    var s = e.$game.querySelector("game-page"),
                                        t = document.createTextNode("Com jugar");
                                    s.appendChild(t);
                                    var o = document.createElement("game-help");
                                    o.setAttribute("page", ""),
                                        o.setAttribute("slot", "content"),
                                        s.appendChild(o),
                                        s.setAttribute("open", "")
                                })),
                                this.shadowRoot.getElementById("refresh-button").addEventListener("click", (function (a) {
                                    location.reload();
                                })),
                                this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function (a) {
                                    e.showStatsModal()
                                })),
                                window.addEventListener("resize", this.sizeBoard.bind(this))
                        }
                    }, {
                        key: "disconnectedCallback",
                        value: function () {}
                    }, {
                        key: "debugTools",
                        value: function () {
                            var e = this;
                            this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)),
                                this.shadowRoot.getElementById("toast").addEventListener("click", (function (a) {
                                    e.addToast("hello world")
                                })),
                                this.shadowRoot.getElementById("modal").addEventListener("click", (function (a) {
                                    var s = e.$game.querySelector("game-modal");
                                    s.textContent = "hello plz",
                                        s.setAttribute("open", "")
                                })),
                                this.shadowRoot.getElementById("reveal").addEventListener("click", (function () {
                                    e.evaluateRow()
                                })),
                                this.shadowRoot.getElementById("shake").addEventListener("click", (function () {
                                    e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                                })),
                                this.shadowRoot.getElementById("bounce").addEventListener("click", (function () {
                                    var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                                    "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                                }))
                        }
                    }]),
                    t
            }(c(HTMLElement));
        customElements.define("game-app", ts);
        var os = document.createElement("template");
        os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
        var ns = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    (e = a.call(this)).attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                    key: "connectedCallback",
                    value: function () {
                        var e = this;
                        this.shadowRoot.appendChild(os.content.cloneNode(!0)),
                            this.addEventListener("click", (function (a) {
                                e.shadowRoot.querySelector(".content").classList.add("closing")
                            })),
                            this.shadowRoot.addEventListener("animationend", (function (a) {
                                "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"),
                                    e.removeChild(e.firstChild),
                                    e.removeAttribute("open"))
                            }))
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-modal", ns);
        var rs = document.createElement("template");
        rs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
        var is = document.createElement("template");
        is.innerHTML = "\n  <button>key</button>\n";
        var ls = document.createElement("template");
        ls.innerHTML = '\n  <div class="spacer"></div>\n';
        var ds = [
                ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
                ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ç"],
                ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]
            ],
            us = function (e) {
                r(t, e);
                var a = h(t);

                function t() {
                    var e;
                    return s(this, t),
                        n(p(e = a.call(this)), "_letterEvaluations", {}),
                        e.attachShadow({
                            mode: "open"
                        }),
                        e
                }
                return o(t, [{
                        key: "letterEvaluations",
                        set: function (e) {
                            this._letterEvaluations = e,
                                this._render()
                        }
                    }, {
                        key: "dispatchKeyPressEvent",
                        value: function (e) {
                            this.dispatchEvent(new CustomEvent("game-key-press", {
                                bubbles: !0,
                                composed: !0,
                                detail: {
                                    key: e
                                }
                            }))
                        }
                    }, {
                        key: "connectedCallback",
                        value: function () {
                            var e = this;
                            this.shadowRoot.appendChild(rs.content.cloneNode(!0)),
                                this.$keyboard = this.shadowRoot.getElementById("keyboard"),
                                this.$keyboard.addEventListener("click", (function (a) {
                                    var s = a.target.closest("button");
                                    s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                                })),
                                window.addEventListener("keydown", (function (a) {
                                    if (!0 !== a.repeat) {
                                        var s = a.key,
                                            t = a.metaKey,
                                            o = a.ctrlKey;
                                        t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                                    }
                                })),
                                this.$keyboard.addEventListener("transitionend", (function (a) {
                                    var s = a.target.closest("button");
                                    s && e.$keyboard.contains(s) && s.classList.remove("fade")
                                })),
                                ds.forEach((function (a) {
                                    var s = document.createElement("div");
                                    s.classList.add("row"),
                                        a.forEach((function (e) {
                                            var a;
                                            if (e >= "a" && e <= "ç" || "←" === e || "↵" === e) {
                                                if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e,
                                                    a.textContent = e,
                                                    "←" === e) {
                                                    var t = document.createElement("game-icon");
                                                    t.setAttribute("icon", "backspace"),
                                                        a.textContent = "",
                                                        a.appendChild(t),
                                                        a.classList.add("one-and-a-half")
                                                }
                                                "↵" == e && (a.textContent = "enter",
                                                    a.classList.add("one-and-a-half"))
                                            } else
                                                (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                                            s.appendChild(a)
                                        })),
                                        e.$keyboard.appendChild(s)
                                })),
                                this._render()
                        }
                    }, {
                        key: "_render",
                        value: function () {
                            for (var e in this._letterEvaluations) {
                                var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                                a.dataset.state = this._letterEvaluations[e],
                                    a.classList.add("fade")
                            }
                        }
                    }]),
                    t
            }(c(HTMLElement));
        /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
        function cs(e, a, s, t) {
            return new(s || (s = Promise))((function (o, n) {
                function r(e) {
                    try {
                        l(t.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function i(e) {
                    try {
                        l(t.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function l(e) {
                    var a;
                    e.done ? o(e.value) : (a = e.value,
                        a instanceof s ? a : new s((function (e) {
                            e(a)
                        }))).then(r, i)
                }
                l((t = t.apply(e, a || [])).next())
            }))
        }

        function ps(e, a) {
            var s, t, o, n, r = {
                label: 0,
                sent: function () {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return n = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                },
                "function" == typeof Symbol && (n[Symbol.iterator] = function () {
                    return this
                }),
                n;

            function i(n) {
                return function (i) {
                    return function (n) {
                        if (s)
                            throw new TypeError("Generator is already executing.");
                        for (; r;)
                            try {
                                if (s = 1,
                                    t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t),
                                        0) : t.next) && !(o = o.call(t, n[1])).done)
                                    return o;
                                switch (t = 0,
                                    o && (n = [2 & n[0], o.value]),
                                    n[0]) {
                                    case 0:
                                    case 1:
                                        o = n;
                                        break;
                                    case 4:
                                        return r.label++, {
                                            value: n[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                            t = n[1],
                                            n = [0];
                                        continue;
                                    case 7:
                                        n = r.ops.pop(),
                                            r.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                            r.label = n[1];
                                            break
                                        }
                                        if (6 === n[0] && r.label < o[1]) {
                                            r.label = o[1],
                                                o = n;
                                            break
                                        }
                                        if (o && r.label < o[2]) {
                                            r.label = o[2],
                                                r.ops.push(n);
                                            break
                                        }
                                        o[2] && r.ops.pop(),
                                            r.trys.pop();
                                        continue
                                }
                                n = a.call(e, r)
                            } catch (e) {
                                n = [6, e],
                                    t = 0
                            } finally {
                                s = o = 0
                            }
                        if (5 & n[0])
                            throw n[1];
                        return {
                            value: n[0] ? n[1] : void 0,
                            done: !0
                        }
                    }([n, i])
                }
            }
        }
        customElements.define("game-keyboard", us),
            function () {
                (console.warn || console.log).apply(console, arguments)
            }
            .bind("[clipboard-polyfill]");
        var ms, hs, ys, gs, bs = "undefined" == typeof navigator ? void 0 : navigator,
            fs = null == bs ? void 0 : bs.clipboard;
        null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs),
            null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
        var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs),
                null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs)),
            vs = "undefined" == typeof window ? void 0 : window,
            ws = (null == vs || vs.ClipboardItem,
                vs);
        var xs = function () {
            this.success = !1
        };

        function zs(e, a, s) {
            for (var t in e.success = !0,
                    a) {
                var o = a[t],
                    n = s.clipboardData;
                n.setData(t, o),
                    "text/plain" === t && n.getData(t) !== o && (e.success = !1)
            }
            s.preventDefault()
        }

        function js(e) {
            var a = new xs,
                s = zs.bind(this, a, e);
            document.addEventListener("copy", s);
            try {
                document.execCommand("copy")
            } finally {
                document.removeEventListener("copy", s)
            }
            return a.success
        }

        function Ss(e, a) {
            _s(e);
            var s = js(a);
            return qs(),
                s
        }

        function _s(e) {
            var a = document.getSelection();
            if (a) {
                var s = document.createRange();
                s.selectNodeContents(e),
                    a.removeAllRanges(),
                    a.addRange(s)
            }
        }

        function qs() {
            var e = document.getSelection();
            e && e.removeAllRanges()
        }

        function Es(e) {
            return cs(this, void 0, void 0, (function () {
                var a;
                return ps(this, (function (s) {
                    if (a = "text/plain" in e,
                        "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) {
                        if (!a)
                            throw new Error("No s'ha especificat cap valor de `text/plain`.");
                        if (t = e["text/plain"],
                            ws.clipboardData.setData("Text", t))
                            return [2, !0];
                        throw new Error("No s'ha pogut copiar, segurament l'usuari ho ha rebutjat.")
                    }
                    var t;
                    return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function (e) {
                        var a = document.createElement("div");
                        a.setAttribute("style", "-webkit-user-select: text !important"),
                            a.textContent = "temporary element",
                            document.body.appendChild(a);
                        var s = Ss(a, e);
                        return document.body.removeChild(a),
                            s
                    }(e) || function (e) {
                        var a = document.createElement("div");
                        a.setAttribute("style", "-webkit-user-select: text !important");
                        var s = a;
                        a.attachShadow && (s = a.attachShadow({
                            mode: "open"
                        }));
                        var t = document.createElement("span");
                        t.innerText = e,
                            s.appendChild(t),
                            document.body.appendChild(a),
                            _s(t);
                        var o = document.execCommand("copy");
                        return qs(),
                            document.body.removeChild(a),
                            o
                    }(e["text/plain"]) ? [2, !0] : [2, !1]
                }))
            }))
        }

        function As(e, a, s) {
            try {
                t = navigator.userAgent || navigator.vendor || window.opera,
                    !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function (e) {
                        return cs(this, void 0, void 0, (function () {
                            return ps(this, (function (a) {
                                if (ks)
                                    return [2, ks(e)];
                                if (!Es(function (e) {
                                        var a = {};
                                        return a["text/plain"] = e,
                                            a
                                    }(e)))
                                    throw new Error("writeText() failed");
                                return [2]
                            }))
                        }))
                    }(e.text).then(a, s) : navigator.share(e)
            } catch (e) {
                s()
            }
            var t
        }

        function AsTEST(e, a, s) {
            s()
            var t
        }

        var Cs = document.createElement("template");
        Cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: block;\n      width: 100%;\n    }\n\n    .countdown {\n      /*border-right: 1px solid var(--color-tone-1);*/\n      /*padding-right: 12px;*/\n      /*width: 50%;*/\n          display: inline;\n    }\n .actions{display: flex;\n justify-content: center;}\n\n    .share {\n      display: flex;\n width: 80%;\n      justify-content: center;\n      align-items: center;\n      padding-top: 12px;\n      /*width: 50%;*/\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: calc(80% - 10px);\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n button#search-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 20%;\n     margin-left: 10px;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  .ad {\n    display: flex;\n   justify-content: center; \n align-items: center;\n  padding-top:10px;} .ad a {\n    display: contents;} .ad img{\n    width: 80%;}</style>\n\n  <div class="container">\n    <h1>Estadístiques</h1>\n    <div id="statistics"></div>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
        var Ls = document.createElement("template");
        Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
        var Ts = document.createElement("template");
        Ts.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
        var Is = document.createElement("template");
        Is.innerHTML = '\n  <div class="countdown">\n    <h1>Següent WORDLE</h1>\n        <div id="timer">\n          <div class="statistic-container">\n            <div class="statistic timer">\n              <countdown-timer></countdown-timer>\n            </div>\n          </div>\n        </div>\n      </div>\n <div class="actions">\n      <div class="share">\n        <button id="share-button">\n          Compartir <game-icon icon="share"></game-icon>\n        </button>\n <button id="search-button">\n<game-icon icon="search"></game-icon>\n        </button>\n      </div>\n    </div> <div class="ad"> \n <a href="https://donarsang.gencat.cat"> \n <img src="https://gelozp.com/games/wordle/img/ad1.png" alt="Dona Sang" target="blank"></a> \n </div>\n  </div> </div>\n';
        var Ms = {
                currentStreak: "Ratxa Actual",
                maxStreak: "Ratxa Màxima",
                winPercentage: "Èxits (%)",
                gamesPlayed: "Jugades",
                gamesWon: "Èxits",
                averageGuesses: "Mitjana d'Intents"
            },
            Os = function (e) {
                r(t, e);
                var a = h(t);

                function t() {
                    var e;
                    return s(this, t),
                        n(p(e = a.call(this)), "stats", {}),
                        n(p(e), "gameApp", void 0),
                        e.attachShadow({
                            mode: "open"
                        }),
                        e.stats = Xa(),
                        e
                }
                return o(t, [{
                        key: "connectedCallback",
                        value: function () {
                            var e = this;
                            this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                            var a = this.shadowRoot.getElementById("statistics"),
                                s = this.shadowRoot.getElementById("guess-distribution"),
                                t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                            if (Object.values(this.stats.guesses).every((function (e) {
                                    return 0 === e
                                }))) {
                                var o = document.createElement("div");
                                o.classList.add("no-data"),
                                    o.innerText = "Sense Dades",
                                    s.appendChild(o)
                            } else
                                for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
                                    var r = n,
                                        i = this.stats.guesses[n],
                                        l = Ts.content.cloneNode(!0),
                                        d = Math.max(7, Math.round(i / t * 100));
                                    l.querySelector(".guess").textContent = r;
                                    var u = l.querySelector(".graph-bar");
                                    if (u.style.width = "".concat(d, "%"),
                                        "number" == typeof i) {
                                        l.querySelector(".num-guesses").textContent = i,
                                            i > 0 && u.classList.add("align-right");
                                        var c = parseInt(this.getAttribute("highlight-guess"), 10);
                                        c && n === c && u.classList.add("highlight")
                                    }
                                    s.appendChild(l)
                                }
                            if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function (s) {
                                    var t = Ms[s],
                                        o = e.stats[s],
                                        n = Ls.content.cloneNode(!0);
                                    n.querySelector(".label").textContent = t,
                                        n.querySelector(".statistic").textContent = o,
                                        a.appendChild(n)
                                })),
                                this.gameApp.gameStatus !== Za) {
                                var p = this.shadowRoot.querySelector(".footer"),
                                    m = Is.content.cloneNode(!0);
                                p.appendChild(m),
                                this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function (a) {
                                    a.preventDefault(),
                                        a.stopPropagation();
                                    As(function (e) {
                                        var a = e.evaluations,
                                            s = e.dayOffset,
                                            t = e.rowIndex,
                                            o = e.isHardMode,
                                            n = e.isWin,
                                            r = JSON.parse(window.localStorage.getItem(j)),
                                            i = JSON.parse(window.localStorage.getItem(S)),
                                            l = "Wordle ".concat(s);
                                        l += " ".concat(n ? t : "X", "/").concat(6),
                                            o && (l += "*");
                                        var d = "";
                                        return a.forEach((function (e) {
                                            e && (e.forEach((function (e) {
                                                    if (e) {
                                                        var a = "";
                                                        switch (e) {
                                                            case Ma:
                                                                a = function (e) {
                                                                    return e ? "🟩" : "🟩"
                                                                }(i);
                                                                break;
                                                            case Ia:
                                                                a = function (e) {
                                                                    return e ? "🟨" : "🟨"
                                                                }(i);
                                                                break;
                                                            case Oa:
                                                                a = function (e) {
                                                                    return e ? "⬜" : "⬜"
                                                                }(r)
                                                        }
                                                        d += a
                                                    }
                                                })),
                                                d += "\n")
                                        })), {
                                            text: "".concat(l, "\n\n").concat(d.trimEnd())
                                        }
                                    }({
                                        evaluations: e.gameApp.evaluations,
                                        dayOffset: e.gameApp.dayOffset,
                                        rowIndex: e.gameApp.rowIndex,
                                        isHardMode: e.gameApp.hardMode,
                                        isWin: e.gameApp.gameStatus === es
                                    }), (function () {
                                        e.gameApp.addToast("S'han copiat els resultats", 2e3, !0)
                                    }), (function () {
                                        e.gameApp.addToast("Error al compartir", 2e3, !0)
                                    }))
                                })),
                                this.shadowRoot.querySelector("button#search-button").addEventListener("click", (function (a) {
                                    a.preventDefault(),a.stopPropagation();
                                    window.open("https://dlc.iec.cat/Results?DecEntradaText="+sol, '_blank').focus();

                                }))
                            }
                        }
                    }]),
                    t
            }(c(HTMLElement));
        customElements.define("game-stats", Os);
        var Rs = document.createElement("template");
        Rs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
        var $s = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    (e = a.call(this)).attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                    key: "connectedCallback",
                    value: function () {
                        var e = this;
                        this.shadowRoot.appendChild(Rs.content.cloneNode(!0)),
                            this.shadowRoot.querySelector(".container").addEventListener("click", (function (a) {
                                a.stopPropagation(),
                                    e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""),
                                    e.dispatchEvent(new CustomEvent("game-switch-change", {
                                        bubbles: !0,
                                        composed: !0,
                                        detail: {
                                            name: e.getAttribute("name"),
                                            checked: e.hasAttribute("checked"),
                                            disabled: e.hasAttribute("disabled")
                                        }
                                    }))
                            }))
                    }
                }], [{
                    key: "observedAttributes",
                    get: function () {
                        return ["checked"]
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-switch", $s);
        var Ps = document.createElement("template");
        Ps.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Endevina el <strong>WORDLE</strong> en 6 intents.</p>\n      <p>Has d\'introduir paraules de 5 lletres que existeixen i fer clic a ENTER.</p>\n      <p>Després de cada intent, el color de les lletres canviarà per indicar l\'evolució de la partida.</p>\n      <p>No es tenen en compte els accents a l\'hora d\'introduir paraules.</p>\n <p>Es poden repetir lletres.</p>\n      <div class="examples">\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p" evaluation="correct" reveal></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="t"></game-tile>\n          </div>\n          <p>La lletra <strong>P</strong> es troba en el lloc correcte de la paraula.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="d"></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="t" evaluation="present" reveal></game-tile>\n            <game-tile letter="z"></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>La paraula té la lletra <strong>T</strong> però en un altre lloc.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="m"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="i" evaluation="absent" reveal></game-tile>\n            <game-tile letter="c"></game-tile>\n          </div>\n          <p>La paraula no conté la lletra <strong>I</strong>.</p>\n        </div>\n      </div>\n      <p><strong>Cada dia hi ha un nou WORDLE!<strong></p>\n    </div>\n  </section>\n';
        var Hs = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    (e = a.call(this)).attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                    key: "connectedCallback",
                    value: function () {
                        this.shadowRoot.appendChild(Ps.content.cloneNode(!0))
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-help", Hs);
        var Ns = document.createElement("template");
        Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
        var Ds = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    (e = a.call(this)).attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                    key: "connectedCallback",
                    value: function () {
                        var e = this;
                        this.shadowRoot.appendChild(Ns.content.cloneNode(!0)),
                            this.shadowRoot.querySelector("game-icon").addEventListener("click", (function (a) {
                                e.shadowRoot.querySelector(".overlay").classList.add("closing")
                            })),
                            this.shadowRoot.addEventListener("animationend", (function (a) {
                                "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"),
                                    Array.from(e.childNodes).forEach((function (a) {
                                        e.removeChild(a)
                                    })),
                                    e.removeAttribute("open"))
                            }))
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-page", Ds);
        var Gs = document.createElement("template");
        Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
        var Bs = {
                help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
                settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
                backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
                close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
                statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z",
                refresh: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z",
                search: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                
            },
            Fs = function (e) {
                r(t, e);
                var a = h(t);

                function t() {
                    var e;
                    return s(this, t),
                        (e = a.call(this)).attachShadow({
                            mode: "open"
                        }),
                        e
                }
                return o(t, [{
                        key: "connectedCallback",
                        value: function () {
                            this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                            var e = this.getAttribute("icon");
                            this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]),
                                "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"),
                                "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)"),
                                "search" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
                        }
                    }]),
                    t
            }(c(HTMLElement));
        customElements.define("game-icon", Fs);
        var Ws = document.createElement("template");
        Ws.innerHTML = '\n  <div id="timer"></div>\n';
        var Ys = 6e4,
            Js = 36e5,
            Us = function (e) {
                r(t, e);
                var a = h(t);

                function t() {
                    var e;
                    s(this, t),
                        n(p(e = a.call(this)), "targetEpochMS", void 0),
                        n(p(e), "intervalId", void 0),
                        n(p(e), "$timer", void 0),
                        e.attachShadow({
                            mode: "open"
                        });
                    var o = new Date;
                    return o.setDate(o.getDate() + 1),
                        o.setHours(0, 0, 0, 0),
                        e.targetEpochMS = o.getTime(),
                        e
                }
                return o(t, [{
                        key: "padDigit",
                        value: function (e) {
                            return e.toString().padStart(2, "0")
                        }
                    }, {
                        key: "updateTimer",
                        value: function () {
                            var e, a = (new Date).getTime(),
                                s = Math.floor(this.targetEpochMS - a);
                            if (s <= 0)
                                e = "00:00:00";
                            else {
                                var t = Math.floor(s % 864e5 / Js),
                                    o = Math.floor(s % Js / Ys),
                                    n = Math.floor(s % Ys / 1e3);
                                e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n))
                            }
                            this.$timer.textContent = e
                        }
                    }, {
                        key: "connectedCallback",
                        value: function () {
                            var e = this;
                            this.shadowRoot.appendChild(Ws.content.cloneNode(!0)),
                                this.$timer = this.shadowRoot.querySelector("#timer"),
                                this.intervalId = setInterval((function () {
                                    e.updateTimer()
                                }), 200)
                        }
                    }, {
                        key: "disconnectedCallback",
                        value: function () {
                            clearInterval(this.intervalId)
                        }
                    }]),
                    t
            }(c(HTMLElement));
        return customElements.define("countdown-timer", Us),
            e.CountdownTimer = Us,
            e.GameApp = ts,
            e.GameHelp = Hs,
            e.GameIcon = Fs,
            e.GameKeyboard = us,
            e.GameModal = ns,
            e.GamePage = Ds,
            e.GameRow = x,
            e.GameSettings = _a,
            e.GameStats = Os,
            e.GameSwitch = $s,
            e.GameThemeManager = _,
            e.GameTile = v,
            e.GameToast = Aa,
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e
    }({});
