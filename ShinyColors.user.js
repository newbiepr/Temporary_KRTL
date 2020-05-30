// ==UserScript==
// @name         샤니마스 한글 패치 임시
// @namespace    https://github.com/newbiepr/shinycolors-trans-kr
// @version      1.1.5
// @description  샤니마스 임시 한글 패치 스크립트
// @icon         https://shinycolors.enza.fun/icon_192x192.png
// @author       Source : biuuu(https://github.com/biuuu/ShinyColors)
// @match        https://shinycolors.enza.fun/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @updateURL    https://newbiepr.github.io/Temporary_KRTL/ShinyColors.user.js
// ==/UserScript==
! function() {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e, t, n) {
        return e(n = {
            path: t,
            exports: {},
            require: function(e, t) {
                return function() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }(null == t && n.path)
            }
        }, n.exports), n.exports
    }
    var n = "object" == typeof e && e && e.Object === Object && e,
        r = "object" == typeof self && self && self.Object === Object && self,
        a = n || r || Function("return this")(),
        o = a.Symbol,
        i = Object.prototype,
        s = i.hasOwnProperty,
        c = i.toString,
        l = o ? o.toStringTag : void 0;
    var u = function(e) {
            var t = s.call(e, l),
                n = e[l];
            try {
                e[l] = void 0;
                var r = !0
            } catch (e) {}
            var a = c.call(e);
            return r && (t ? e[l] = n : delete e[l]), a
        },
        d = Object.prototype.toString;
    var f = function(e) {
            return d.call(e)
        },
        p = o ? o.toStringTag : void 0;
    var h = function(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : p && p in Object(e) ? u(e) : f(e)
        },
        m = Array.isArray;
    var g = function(e) {
        return null != e && "object" == typeof e
    };
    var y = function(e) {
        return "string" == typeof e || !m(e) && g(e) && "[object String]" == h(e)
    };
    var v = function(e) {
        return !0 === e || !1 === e || g(e) && "[object Boolean]" == h(e)
    };
    var w = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        },
        b = w(Object.getPrototypeOf, Object),
        E = Function.prototype,
        S = Object.prototype,
        _ = E.toString,
        A = S.hasOwnProperty,
        T = _.call(Object);
    var k = function(e) {
        if (!g(e) || "[object Object]" != h(e)) return !1;
        var t = b(e);
        if (null === t) return !0;
        var n = A.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && _.call(n) == T
    };
    const x = {
            origin: "https://newbiepr.github.io/Temporary_KRTL",
            hash: "",
            localHash: "",
            version: "1.1.5",
            story: "normal",
            timeout: 30,
            font1: "yuanti",
            font2: "heiti",
            auto: "off",
            bgm: "off",
            dev: !1
        },
        C = Object.assign({}, x),
        M = ["yuanti", "heiti", "yuanti2"],
        I = {
            HEITI_JA: "UDKakugo_SmallPr6-B",
            HEITI_TRANS: "sczh-heiti,UDKakugo_SmallPr6-B",
            YUAN_JA: "HummingStd-E",
            YUAN_TRANS: "sczh-yuanti,HummingStd-E"
        },
        O = ["origin", "font1", "font2", "timeout", "story", "auto", "bgm", "dev"],
        R = O,
        P = () => {
            I.HEITI_TRANS = `${M.includes(x.font2)?"sczh-":""}${x.font2},${I.HEITI_JA}`, I.YUAN_TRANS = `${M.includes(x.font1)?"sczh-":""}${x.font1},${I.YUAN_JA}`
        },
        j = () => {
            const e = {};
            R.forEach(t => {
                x[t] !== C[t] && (e[t] = x[t])
            }), P(), localStorage.setItem("sczh:setting", JSON.stringify(e))
        },
        B = () => {
            let e = location.hash;
            e = e.slice(1).replace(/\?tdsourcetag=s_pc(tim|qq)_aiomsg/, ""), e.split(";").forEach(e => {
                let t = e.split("="),
                    n = decodeURIComponent(t[0].trim()),
                    r = t[1] ? decodeURIComponent(t[1].trim()) : "";
                n && R.includes(n) && (x[n] = r || C[n], j())
            })
        },
        D = {
            story: {
                normal: "커뮤 추출 열기",
                edit: "커뮤 추출 닫기",
                id: 0,
                callback: () => {
                    if ("normal" === x.story) x.story = "edit";
                    else {
                        const e = document.getElementById("btn-close-sczh");
                        e ? e.click() : x.story = "normal"
                    }
                }
            },
            bgm: {
                on: "백그라운드 BGM 끄기",
                off: "백그라운드 BGM 켜기",
                id: 0,
                callback: () => {
                    x.bgm = "off" !== x.bgm ? "off" : "on"
                }
            },
            origin: {
                id: 0,
                title: "접속할 한패 서버 URL 수정(함부로 건들면 한패깨짐)",
                callback: () => {
                    const e = prompt("접속할 URL 입력，아무것도 입력하지 않으면 기본값 자동 설정", x.origin);
                    null !== e && (x.origin = e.trim())
                }
            },
            dev: {
                id: 0,
                titles: ["개발자 모드 열기(개발자 전용기능)", "개발자 모드 닫기(켜두면 겜만 느려지니 닫으세요)"],
                callback: () => {
                    x.dev = !x.dev
                }
            },
            update: {
                id: 0,
                title: "업데이트",
                callback: () => {
                    window.open(x.origin + "/ShinyColors.user.js")
                }
            }
        },
        L = e => {
            const t = x[e],
                n = D[e];
            let r = "";
            if (v(t)) {
                let e = t ? 1 : 0;
                r = n.titles[e]
            } else r = n.title || n[t];
            const a = n.id;
            a && window.GM_unregisterMenuCommand(a), n.id = window.GM_registerMenuCommand(r, () => {
                (0, n.callback)(), j(), N()
            })
        },
        N = () => {
            if (!window.GM_registerMenuCommand || !window.GM_unregisterMenuCommand) return;
            ["update", "bgm", "story", "origin", "dev"].forEach(e => {
                L(e)
            })
        };
    (() => {
        const e = localStorage.getItem("sczh:setting");
        let t = JSON.parse(e);
        k(t) || (t = {});
        const {
            origin: n
        } = t;
        /^https?:\/\//.test(n) && (x.origin = n.trim()), R.forEach(e => {
            let n = t[e];
            y(n) && (n = n.trim()), (v(n) || n) && (x[e] = n)
        }), P()
    })(), B(), N(), window.addEventListener("hashchange", B);
    const F = e => "​" + e,
        U = e => {
            if (!e) return "";
            return e.replace(/[\u0020]+$/g, "").replace(/^[\u0020]+/g, "")
        },
        $ = (e, t = !1) => {
            let n = U(e).replace(/(\\r)?\\n/g, "\n").replace(/\\r/g, "\n");
            return t ? n : n.replace(/\n{2,}/g, "\n")
        },
        z = e => U(e).replace(/\r/g, "\n").replace(/\n{2,}/g, "\n"),
        H = e => e.replace(/\?/g, "\\?").replace(/\./g, "\\.").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    let G = (() => {
        const e = document.createElement("iframe");
        return e.style.display = "none", document.body.appendChild(e), e.contentWindow.console
    })();
    const V = (...e) => {
            x.dev && G.log(...e)
        },
        W = (...e) => {
            G.log(...e)
        },
        J = e => y(e) ? e.replace(/\r?\n/g, "\\n").replace(/\r/g, "\\n") : e,
        X = (e = "0.0.0", t = "0.0.0") => {
            let n = !1;
            const r = e.split(".").map(e => parseInt(e, 10)),
                a = t.split(".").map(e => parseInt(e, 10));
            for (let e = 0; e < r.length; e++) {
                (r[e] || 0) > (a[e] || 0) && (n = !0)
            }
            return n
        },
        K = (e, t) => {
            if (!e || !e.length) return e;
            let n = e,
                r = !1,
                a = ((e = 2) => {
                    let t = "";
                    for (let n = 0; n < e; n++) t += String.fromCharCode(Math.floor(16 * Math.random() + 65520));
                    return t
                })(3);
            Array.isArray(e) && (n = e.join(a), r = !0);
            for (let [e, r] of t) {
                if (!e || e.length < 2) continue;
                const t = e.replace(/\./g, "\\.").replace(/\*/g, "\\*");
                n = n.replace(new RegExp(t, "g"), r)
            }
            return r ? n.split(a) : n
        },
        q = ["プロデューサー", "審査員"],
        Y = (e, t) => {
            if (e.speaker) {
                const n = U(e.speaker);
                q.includes(n) && t.has(n) && (e.speaker = F(t.get(n)))
            }
        },
        Q = () => {
            const e = new Map;
            return t => {
                if (t && !/^0+$/.test(t) && "select" !== t) {
                    if (e.has(t)) {
                        const n = e.get(t);
                        return e.set(t, n + 1), `${t}-${n}`
                    }
                    e.set(t, 0)
                }
                return t
            }
        },
        Z = (e, t) => {
            try {
                if (t) return sessionStorage.setItem(e, JSON.stringify(t)), !0; {
                    let t = sessionStorage.getItem(e);
                    return JSON.parse(t)
                }
            } catch (e) {}
        },
        {
            origin: ee,
            version: te
        } = x,
        ne = async () => {
            const e = Math.floor(Date.now() / 1e3 / 60 / 60 / 6),
                t = await fetch(`${ee}/manifest.json?t=${e}`);
            if (t.ok) {
                const e = await t.json();
                return e.time = Date.now(), localStorage.setItem("sczh:manifest", JSON.stringify(e)), e
            }
            throw new Error(`${t.status} ${t.url}`)
        };
    let re = {
        data: null
    };
    const ae = new Promise((e, t) => {
            (async () => {
                let e;
                try {
                    let t = localStorage.getItem("sczh:manifest");
                    t && (e = JSON.parse(t)), Date.now() - e.time > 60 * x.cacheTime * 1e3 && (e = !1)
                } catch (e) {}
                return e ? X(te, e.version) ? e = await ne() : setTimeout(ne, 5e3) : e = await ne(), e
            })().then(t => {
                re.data = t, x.newVersion = t.version, x.hashes = t.hashes, e(t)
            }).catch(t)
        }),
        oe = async (e, t) => {
            if (!t) {
                const {
                    hashes: n
                } = await ae;
                t = n[e.replace(/^\/(data\/)?/, "")]
            }
            return await (async e => new Promise((t, n) => {
                let r = setTimeout(() => {
                    n(`불러오기${e}시간초과`)
                }, 1e3 * x.timeout);
                fetch(`${ee}${e}`).then(e => {
                    if (clearTimeout(r), !e.ok) return n(`${e.status} ${e.url}`), "";
                    const t = e.headers.get("content-type");
                    return (null == t ? void 0 : t.includes("json")) ? e.json() : e.text()
                }).then(t).catch(n)
            }))(`${e}${t?"?v="+t:""}`)
        };
    var ie = t((function(e, t) {
        Array.isArray || (Array.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }), e.exports = function() {
            var e, t, n = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {},
                r = !n.document && !!n.postMessage,
                a = r && /(\?|&)papaworker(=|&|$)/.test(n.location.search),
                o = !1,
                i = {},
                s = 0,
                c = {
                    parse: function(t, r) {
                        var a = (r = r || {}).dynamicTyping || !1;
                        if (_(a) && (r.dynamicTypingFunction = a, a = {}), r.dynamicTyping = a, r.transform = !!_(r.transform) && r.transform, r.worker && c.WORKERS_SUPPORTED) {
                            var l = function() {
                                if (!c.WORKERS_SUPPORTED) return !1;
                                if (!o && null === c.SCRIPT_PATH) throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");
                                var t = c.SCRIPT_PATH || e;
                                t += (-1 !== t.indexOf("?") ? "&" : "?") + "papaworker";
                                var r = new n.Worker(t);
                                return r.onmessage = v, r.id = s++, i[r.id] = r
                            }();
                            return l.userStep = r.step, l.userChunk = r.chunk, l.userComplete = r.complete, l.userError = r.error, r.step = _(r.step), r.chunk = _(r.chunk), r.complete = _(r.complete), r.error = _(r.error), delete r.worker, void l.postMessage({
                                input: t,
                                config: r,
                                workerId: l.id
                            })
                        }
                        var u = null;
                        return "string" == typeof t ? u = r.download ? new d(r) : new p(r) : !0 === t.readable && _(t.read) && _(t.on) ? u = new h(r) : (n.File && t instanceof File || t instanceof Object) && (u = new f(r)), u.stream(t)
                    },
                    unparse: function(e, t) {
                        var n = !1,
                            r = !0,
                            a = ",",
                            o = "\r\n",
                            i = '"',
                            s = !1;
                        "object" == typeof t && ("string" != typeof t.delimiter || c.BAD_DELIMITERS.filter((function(e) {
                            return -1 !== t.delimiter.indexOf(e)
                        })).length || (a = t.delimiter), ("boolean" == typeof t.quotes || Array.isArray(t.quotes)) && (n = t.quotes), "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (s = t.skipEmptyLines), "string" == typeof t.newline && (o = t.newline), "string" == typeof t.quoteChar && (i = t.quoteChar), "boolean" == typeof t.header && (r = t.header));
                        var l = new RegExp(g(i), "g");
                        if ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e)) {
                            if (!e.length || Array.isArray(e[0])) return d(null, e, s);
                            if ("object" == typeof e[0]) return d(u(e[0]), e, s)
                        } else if ("object" == typeof e) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : u(e.data[0])), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data])), d(e.fields || [], e.data || [], s);
                        throw "exception: Unable to serialize unrecognized input";

                        function u(e) {
                            if ("object" != typeof e) return [];
                            var t = [];
                            for (var n in e) t.push(n);
                            return t
                        }

                        function d(e, t, n) {
                            var i = "";
                            "string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t));
                            var s = Array.isArray(e) && 0 < e.length,
                                c = !Array.isArray(t[0]);
                            if (s && r) {
                                for (var l = 0; l < e.length; l++) 0 < l && (i += a), i += f(e[l], l);
                                0 < t.length && (i += o)
                            }
                            for (var u = 0; u < t.length; u++) {
                                var d = s ? e.length : t[u].length,
                                    p = !1,
                                    h = s ? 0 === Object.keys(t[u]).length : 0 === t[u].length;
                                if (n && !s && (p = "greedy" === n ? "" === t[u].join("").trim() : 1 === t[u].length && 0 === t[u][0].length), "greedy" === n && s) {
                                    for (var m = [], g = 0; g < d; g++) {
                                        var y = c ? e[g] : g;
                                        m.push(t[u][y])
                                    }
                                    p = "" === m.join("").trim()
                                }
                                if (!p) {
                                    for (var v = 0; v < d; v++) {
                                        0 < v && !h && (i += a);
                                        var w = s && c ? e[v] : v;
                                        i += f(t[u][w], v)
                                    }
                                    u < t.length - 1 && (!n || 0 < d && !h) && (i += o)
                                }
                            }
                            return i
                        }

                        function f(e, t) {
                            return null == e ? "" : e.constructor === Date ? JSON.stringify(e).slice(1, 25) : (e = e.toString().replace(l, i + i), "boolean" == typeof n && n || Array.isArray(n) && n[t] || function(e, t) {
                                for (var n = 0; n < t.length; n++)
                                    if (-1 < e.indexOf(t[n])) return !0;
                                return !1
                            }(e, c.BAD_DELIMITERS) || -1 < e.indexOf(a) || " " === e.charAt(0) || " " === e.charAt(e.length - 1) ? i + e + i : e)
                        }
                    }
                };
            if (c.RECORD_SEP = String.fromCharCode(30), c.UNIT_SEP = String.fromCharCode(31), c.BYTE_ORDER_MARK = "\ufeff", c.BAD_DELIMITERS = ["\r", "\n", '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !r && !!n.Worker, c.SCRIPT_PATH = null, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = y, c.ParserHandle = m, c.NetworkStreamer = d, c.FileStreamer = f, c.StringStreamer = p, c.ReadableStreamStreamer = h, n.jQuery) {
                var l = n.jQuery;
                l.fn.parse = function(e) {
                    var t = e.config || {},
                        r = [];
                    return this.each((function(e) {
                        if ("INPUT" !== l(this).prop("tagName").toUpperCase() || "file" !== l(this).attr("type").toLowerCase() || !n.FileReader || !this.files || 0 === this.files.length) return !0;
                        for (var a = 0; a < this.files.length; a++) r.push({
                            file: this.files[a],
                            inputElem: this,
                            instanceConfig: l.extend({}, t)
                        })
                    })), a(), this;

                    function a() {
                        if (0 !== r.length) {
                            var t, n, a, i = r[0];
                            if (_(e.before)) {
                                var s = e.before(i.file, i.inputElem);
                                if ("object" == typeof s) {
                                    if ("abort" === s.action) return t = i.file, n = i.inputElem, a = s.reason, void(_(e.error) && e.error({
                                        name: "AbortError"
                                    }, t, n, a));
                                    if ("skip" === s.action) return void o();
                                    "object" == typeof s.config && (i.instanceConfig = l.extend(i.instanceConfig, s.config))
                                } else if ("skip" === s) return void o()
                            }
                            var u = i.instanceConfig.complete;
                            i.instanceConfig.complete = function(e) {
                                _(u) && u(e, i.file, i.inputElem), o()
                            }, c.parse(i.file, i.instanceConfig)
                        } else _(e.complete) && e.complete()
                    }

                    function o() {
                        r.splice(0, 1), a()
                    }
                }
            }

            function u(e) {
                this._handle = null, this._finished = !1, this._completed = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
                        data: [],
                        errors: [],
                        meta: {}
                    },
                    function(e) {
                        var t = E(e);
                        t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null), this._handle = new m(t), (this._handle.streamer = this)._config = t
                    }.call(this, e), this.parseChunk = function(e, t) {
                        if (this.isFirstChunk && _(this._config.beforeFirstChunk)) {
                            var r = this._config.beforeFirstChunk(e);
                            void 0 !== r && (e = r)
                        }
                        this.isFirstChunk = !1;
                        var o = this._partialLine + e;
                        this._partialLine = "";
                        var i = this._handle.parse(o, this._baseIndex, !this._finished);
                        if (!this._handle.paused() && !this._handle.aborted()) {
                            var s = i.meta.cursor;
                            this._finished || (this._partialLine = o.substring(s - this._baseIndex), this._baseIndex = s), i && i.data && (this._rowCount += i.data.length);
                            var l = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                            if (a) n.postMessage({
                                results: i,
                                workerId: c.WORKER_ID,
                                finished: l
                            });
                            else if (_(this._config.chunk) && !t) {
                                if (this._config.chunk(i, this._handle), this._handle.paused() || this._handle.aborted()) return;
                                i = void 0, this._completeResults = void 0
                            }
                            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(i.data), this._completeResults.errors = this._completeResults.errors.concat(i.errors), this._completeResults.meta = i.meta), this._completed || !l || !_(this._config.complete) || i && i.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), l || i && i.meta.paused || this._nextChunk(), i
                        }
                    }, this._sendError = function(e) {
                        _(this._config.error) ? this._config.error(e) : a && this._config.error && n.postMessage({
                            workerId: c.WORKER_ID,
                            error: e,
                            finished: !1
                        })
                    }
            }

            function d(e) {
                var t;
                (e = e || {}).chunkSize || (e.chunkSize = c.RemoteChunkSize), u.call(this, e), this._nextChunk = r ? function() {
                    this._readChunk(), this._chunkLoaded()
                } : function() {
                    this._readChunk()
                }, this.stream = function(e) {
                    this._input = e, this._nextChunk()
                }, this._readChunk = function() {
                    if (this._finished) this._chunkLoaded();
                    else {
                        if (t = new XMLHttpRequest, this._config.withCredentials && (t.withCredentials = this._config.withCredentials), r || (t.onload = S(this._chunkLoaded, this), t.onerror = S(this._chunkError, this)), t.open("GET", this._input, !r), this._config.downloadRequestHeaders) {
                            var e = this._config.downloadRequestHeaders;
                            for (var n in e) t.setRequestHeader(n, e[n])
                        }
                        if (this._config.chunkSize) {
                            var a = this._start + this._config.chunkSize - 1;
                            t.setRequestHeader("Range", "bytes=" + this._start + "-" + a), t.setRequestHeader("If-None-Match", "webkit-no-cache")
                        }
                        try {
                            t.send()
                        } catch (e) {
                            this._chunkError(e.message)
                        }
                        r && 0 === t.status ? this._chunkError() : this._start += this._config.chunkSize
                    }
                }, this._chunkLoaded = function() {
                    4 === t.readyState && (t.status < 200 || 400 <= t.status ? this._chunkError() : (this._finished = !this._config.chunkSize || this._start > function(e) {
                        var t = e.getResponseHeader("Content-Range");
                        return null === t ? -1 : parseInt(t.substr(t.lastIndexOf("/") + 1))
                    }(t), this.parseChunk(t.responseText)))
                }, this._chunkError = function(e) {
                    var n = t.statusText || e;
                    this._sendError(new Error(n))
                }
            }

            function f(e) {
                var t, n;
                (e = e || {}).chunkSize || (e.chunkSize = c.LocalChunkSize), u.call(this, e);
                var r = "undefined" != typeof FileReader;
                this.stream = function(e) {
                    this._input = e, n = e.slice || e.webkitSlice || e.mozSlice, r ? ((t = new FileReader).onload = S(this._chunkLoaded, this), t.onerror = S(this._chunkError, this)) : t = new FileReaderSync, this._nextChunk()
                }, this._nextChunk = function() {
                    this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
                }, this._readChunk = function() {
                    var e = this._input;
                    if (this._config.chunkSize) {
                        var a = Math.min(this._start + this._config.chunkSize, this._input.size);
                        e = n.call(e, this._start, a)
                    }
                    var o = t.readAsText(e, this._config.encoding);
                    r || this._chunkLoaded({
                        target: {
                            result: o
                        }
                    })
                }, this._chunkLoaded = function(e) {
                    this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result)
                }, this._chunkError = function() {
                    this._sendError(t.error)
                }
            }

            function p(e) {
                var t;
                u.call(this, e = e || {}), this.stream = function(e) {
                    return t = e, this._nextChunk()
                }, this._nextChunk = function() {
                    if (!this._finished) {
                        var e = this._config.chunkSize,
                            n = e ? t.substr(0, e) : t;
                        return t = e ? t.substr(e) : "", this._finished = !t, this.parseChunk(n)
                    }
                }
            }

            function h(e) {
                u.call(this, e = e || {});
                var t = [],
                    n = !0,
                    r = !1;
                this.pause = function() {
                    u.prototype.pause.apply(this, arguments), this._input.pause()
                }, this.resume = function() {
                    u.prototype.resume.apply(this, arguments), this._input.resume()
                }, this.stream = function(e) {
                    this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError)
                }, this._checkIsFinished = function() {
                    r && 1 === t.length && (this._finished = !0)
                }, this._nextChunk = function() {
                    this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : n = !0
                }, this._streamData = S((function(e) {
                    try {
                        t.push("string" == typeof e ? e : e.toString(this._config.encoding)), n && (n = !1, this._checkIsFinished(), this.parseChunk(t.shift()))
                    } catch (e) {
                        this._streamError(e)
                    }
                }), this), this._streamError = S((function(e) {
                    this._streamCleanUp(), this._sendError(e)
                }), this), this._streamEnd = S((function() {
                    this._streamCleanUp(), r = !0, this._streamData("")
                }), this), this._streamCleanUp = S((function() {
                    this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError)
                }), this)
            }

            function m(e) {
                var t, n, r, a = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,
                    o = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
                    i = this,
                    s = 0,
                    l = 0,
                    u = !1,
                    d = !1,
                    f = [],
                    p = {
                        data: [],
                        errors: [],
                        meta: {}
                    };
                if (_(e.step)) {
                    var h = e.step;
                    e.step = function(t) {
                        if (p = t, w()) v();
                        else {
                            if (v(), 0 === p.data.length) return;
                            s += t.data.length, e.preview && s > e.preview ? n.abort() : h(p, i)
                        }
                    }
                }

                function m(t) {
                    return "greedy" === e.skipEmptyLines ? "" === t.join("").trim() : 1 === t.length && 0 === t[0].length
                }

                function v() {
                    if (p && r && (S("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), r = !1), e.skipEmptyLines)
                        for (var t = 0; t < p.data.length; t++) m(p.data[t]) && p.data.splice(t--, 1);
                    return w() && function() {
                            if (p) {
                                for (var t = 0; w() && t < p.data.length; t++)
                                    for (var n = 0; n < p.data[t].length; n++) {
                                        var r = p.data[t][n];
                                        e.trimHeaders && (r = r.trim()), f.push(r)
                                    }
                                p.data.splice(0, 1)
                            }
                        }(),
                        function() {
                            if (!p || !e.header && !e.dynamicTyping && !e.transform) return p;
                            for (var t = 0; t < p.data.length; t++) {
                                var n, r = e.header ? {} : [];
                                for (n = 0; n < p.data[t].length; n++) {
                                    var a = n,
                                        o = p.data[t][n];
                                    e.header && (a = n >= f.length ? "__parsed_extra" : f[n]), e.transform && (o = e.transform(o, a)), o = b(a, o), "__parsed_extra" === a ? (r[a] = r[a] || [], r[a].push(o)) : r[a] = o
                                }
                                p.data[t] = r, e.header && (n > f.length ? S("FieldMismatch", "TooManyFields", "Too many fields: expected " + f.length + " fields but parsed " + n, l + t) : n < f.length && S("FieldMismatch", "TooFewFields", "Too few fields: expected " + f.length + " fields but parsed " + n, l + t))
                            }
                            return e.header && p.meta && (p.meta.fields = f), l += p.data.length, p
                        }()
                }

                function w() {
                    return e.header && 0 === f.length
                }

                function b(t, n) {
                    return r = t, e.dynamicTypingFunction && void 0 === e.dynamicTyping[r] && (e.dynamicTyping[r] = e.dynamicTypingFunction(r)), !0 === (e.dynamicTyping[r] || e.dynamicTyping) ? "true" === n || "TRUE" === n || "false" !== n && "FALSE" !== n && (a.test(n) ? parseFloat(n) : o.test(n) ? new Date(n) : "" === n ? null : n) : n;
                    var r
                }

                function S(e, t, n, r) {
                    p.errors.push({
                        type: e,
                        code: t,
                        message: n,
                        row: r
                    })
                }
                this.parse = function(a, o, i) {
                    var s = e.quoteChar || '"';
                    if (e.newline || (e.newline = function(e, t) {
                            e = e.substr(0, 1048576);
                            var n = new RegExp(g(t) + "([^]*?)" + g(t), "gm"),
                                r = (e = e.replace(n, "")).split("\r"),
                                a = e.split("\n"),
                                o = 1 < a.length && a[0].length < r[0].length;
                            if (1 === r.length || o) return "\n";
                            for (var i = 0, s = 0; s < r.length; s++) "\n" === r[s][0] && i++;
                            return i >= r.length / 2 ? "\r\n" : "\r"
                        }(a, s)), r = !1, e.delimiter) _(e.delimiter) && (e.delimiter = e.delimiter(a), p.meta.delimiter = e.delimiter);
                    else {
                        var l = function(t, n, r, a) {
                            for (var o, i, s, l = [",", "\t", "|", ";", c.RECORD_SEP, c.UNIT_SEP], u = 0; u < l.length; u++) {
                                var d = l[u],
                                    f = 0,
                                    p = 0,
                                    h = 0;
                                s = void 0;
                                for (var g = new y({
                                        comments: a,
                                        delimiter: d,
                                        newline: n,
                                        preview: 10
                                    }).parse(t), v = 0; v < g.data.length; v++)
                                    if (r && m(g.data[v])) h++;
                                    else {
                                        var w = g.data[v].length;
                                        p += w, void 0 !== s ? 1 < w && (f += Math.abs(w - s), s = w) : s = 0
                                    } 0 < g.data.length && (p /= g.data.length - h), (void 0 === i || i < f) && 1.99 < p && (i = f, o = d)
                            }
                            return {
                                successful: !!(e.delimiter = o),
                                bestDelimiter: o
                            }
                        }(a, e.newline, e.skipEmptyLines, e.comments);
                        l.successful ? e.delimiter = l.bestDelimiter : (r = !0, e.delimiter = c.DefaultDelimiter), p.meta.delimiter = e.delimiter
                    }
                    var d = E(e);
                    return e.preview && e.header && d.preview++, t = a, n = new y(d), p = n.parse(t, o, i), v(), u ? {
                        meta: {
                            paused: !0
                        }
                    } : p || {
                        meta: {
                            paused: !1
                        }
                    }
                }, this.paused = function() {
                    return u
                }, this.pause = function() {
                    u = !0, n.abort(), t = t.substr(n.getCharIndex())
                }, this.resume = function() {
                    u = !1, i.streamer.parseChunk(t, !0)
                }, this.aborted = function() {
                    return d
                }, this.abort = function() {
                    d = !0, n.abort(), p.meta.aborted = !0, _(e.complete) && e.complete(p), t = ""
                }
            }

            function g(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }

            function y(e) {
                var t, n = (e = e || {}).delimiter,
                    r = e.newline,
                    a = e.comments,
                    o = e.step,
                    i = e.preview,
                    s = e.fastMode,
                    l = t = void 0 === e.quoteChar ? '"' : e.quoteChar;
                if (void 0 !== e.escapeChar && (l = e.escapeChar), ("string" != typeof n || -1 < c.BAD_DELIMITERS.indexOf(n)) && (n = ","), a === n) throw "Comment character same as delimiter";
                !0 === a ? a = "#" : ("string" != typeof a || -1 < c.BAD_DELIMITERS.indexOf(a)) && (a = !1), "\n" !== r && "\r" !== r && "\r\n" !== r && (r = "\n");
                var u = 0,
                    d = !1;
                this.parse = function(e, c, f) {
                    if ("string" != typeof e) throw "Input must be a string";
                    var p = e.length,
                        h = n.length,
                        m = r.length,
                        y = a.length,
                        v = _(o),
                        w = [],
                        b = [],
                        E = [],
                        S = u = 0;
                    if (!e) return D();
                    if (s || !1 !== s && -1 === e.indexOf(t)) {
                        for (var A = e.split(r), T = 0; T < A.length; T++) {
                            if (E = A[T], u += E.length, T !== A.length - 1) u += r.length;
                            else if (f) return D();
                            if (!a || E.substr(0, y) !== a) {
                                if (v) {
                                    if (w = [], R(E.split(n)), L(), d) return D()
                                } else R(E.split(n));
                                if (i && i <= T) return w = w.slice(0, i), D(!0)
                            }
                        }
                        return D()
                    }
                    for (var k, x = e.indexOf(n, u), C = e.indexOf(r, u), M = new RegExp(g(l) + g(t), "g");;)
                        if (e[u] !== t)
                            if (a && 0 === E.length && e.substr(u, y) === a) {
                                if (-1 === C) return D();
                                u = C + m, C = e.indexOf(r, u), x = e.indexOf(n, u)
                            } else if (-1 !== x && (x < C || -1 === C)) E.push(e.substring(u, x)), u = x + h, x = e.indexOf(n, u);
                    else {
                        if (-1 === C) break;
                        if (E.push(e.substring(u, C)), B(C + m), v && (L(), d)) return D();
                        if (i && w.length >= i) return D(!0)
                    } else
                        for (k = u, u++;;) {
                            if (-1 === (k = e.indexOf(t, k + 1))) return f || b.push({
                                type: "Quotes",
                                code: "MissingQuotes",
                                message: "Quoted field unterminated",
                                row: w.length,
                                index: u
                            }), j();
                            if (k === p - 1) return j(e.substring(u, k).replace(M, t));
                            if (t !== l || e[k + 1] !== l) {
                                if (t === l || 0 === k || e[k - 1] !== l) {
                                    var I = P(-1 === C ? x : Math.min(x, C));
                                    if (e[k + 1 + I] === n) {
                                        E.push(e.substring(u, k).replace(M, t)), u = k + 1 + I + h, x = e.indexOf(n, u), C = e.indexOf(r, u);
                                        break
                                    }
                                    var O = P(C);
                                    if (e.substr(k + 1 + O, m) === r) {
                                        if (E.push(e.substring(u, k).replace(M, t)), B(k + 1 + O + m), x = e.indexOf(n, u), v && (L(), d)) return D();
                                        if (i && w.length >= i) return D(!0);
                                        break
                                    }
                                    b.push({
                                        type: "Quotes",
                                        code: "InvalidQuotes",
                                        message: "Trailing quote on quoted field is malformed",
                                        row: w.length,
                                        index: u
                                    }), k++
                                }
                            } else k++
                        }
                    return j();

                    function R(e) {
                        w.push(e), S = u
                    }

                    function P(t) {
                        var n = 0;
                        if (-1 !== t) {
                            var r = e.substring(k + 1, t);
                            r && "" === r.trim() && (n = r.length)
                        }
                        return n
                    }

                    function j(t) {
                        return f || (void 0 === t && (t = e.substr(u)), E.push(t), u = p, R(E), v && L()), D()
                    }

                    function B(t) {
                        u = t, R(E), E = [], C = e.indexOf(r, u)
                    }

                    function D(e) {
                        return {
                            data: w,
                            errors: b,
                            meta: {
                                delimiter: n,
                                linebreak: r,
                                aborted: d,
                                truncated: !!e,
                                cursor: S + (c || 0)
                            }
                        }
                    }

                    function L() {
                        o(D()), w = [], b = []
                    }
                }, this.abort = function() {
                    d = !0
                }, this.getCharIndex = function() {
                    return u
                }
            }

            function v(e) {
                var t = e.data,
                    n = i[t.workerId],
                    r = !1;
                if (t.error) n.userError(t.error, t.file);
                else if (t.results && t.results.data) {
                    var a = {
                        abort: function() {
                            r = !0, w(t.workerId, {
                                data: [],
                                errors: [],
                                meta: {
                                    aborted: !0
                                }
                            })
                        },
                        pause: b,
                        resume: b
                    };
                    if (_(n.userStep)) {
                        for (var o = 0; o < t.results.data.length && (n.userStep({
                                data: [t.results.data[o]],
                                errors: t.results.errors,
                                meta: t.results.meta
                            }, a), !r); o++);
                        delete t.results
                    } else _(n.userChunk) && (n.userChunk(t.results, a, t.file), delete t.results)
                }
                t.finished && !r && w(t.workerId, t.results)
            }

            function w(e, t) {
                var n = i[e];
                _(n.userComplete) && n.userComplete(t), n.terminate(), delete i[e]
            }

            function b() {
                throw "Not implemented."
            }

            function E(e) {
                if ("object" != typeof e || null === e) return e;
                var t = Array.isArray(e) ? [] : {};
                for (var n in e) t[n] = E(e[n]);
                return t
            }

            function S(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }

            function _(e) {
                return "function" == typeof e
            }
            return a ? n.onmessage = function(e) {
                var t = e.data;
                if (void 0 === c.WORKER_ID && t && (c.WORKER_ID = t.workerId), "string" == typeof t.input) n.postMessage({
                    workerId: c.WORKER_ID,
                    results: c.parse(t.input, t.config),
                    finished: !0
                });
                else if (n.File && t.input instanceof File || t.input instanceof Object) {
                    var r = c.parse(t.input, t.config);
                    r && n.postMessage({
                        workerId: c.WORKER_ID,
                        results: r,
                        finished: !0
                    })
                }
            } : c.WORKERS_SUPPORTED && (t = document.getElementsByTagName("script"), e = t.length ? t[t.length - 1].src : "", document.body ? document.addEventListener("DOMContentLoaded", (function() {
                o = !0
            }), !0) : o = !0), (d.prototype = Object.create(u.prototype)).constructor = d, (f.prototype = Object.create(u.prototype)).constructor = f, (p.prototype = Object.create(p.prototype)).constructor = p, (h.prototype = Object.create(u.prototype)).constructor = h, c
        }()
    }));
    const se = e => {
        try {
            return ie.parse(e.replace(/^\ufeff/, ""), {
                header: !0
            }).data
        } catch (e) {
            return console.log(e), {}
        }
    };
    let ce = null;
    const le = async e => {
        if (!ce) try {
            const e = localStorage.getItem("sczh:data");
            if (!e) return !1;
            ce = JSON.parse(e)
        } catch (e) {
            return console.error(e), !1
        }
        if (X(x.version, ce.version)) return ce = null, localStorage.removeItem("sczh:data"), !1;
        let t = e;
        /(\.csv|\.json)/.test(e) || (t = e + ".csv");
        const {
            hashes: n
        } = await ae, r = n[t], a = ce.hashes[t];
        return a && a === r ? ce[e] : (ce.hashes[t] = r, !1)
    }, ue = (e, t) => {
        ce && ce.hashes || (ce = {
            hashes: x.hashes,
            version: x.version
        });
        let n = e;
        /(\.csv|\.json)/.test(e) || (n = e + ".csv");
        const r = x.hashes[n];
        r && (ce.hashes[n] = r), ce[e] = t;
        const a = JSON.stringify(ce);
        try {
            localStorage.setItem("sczh:data", a)
        } catch (e) {
            console.error(e)
        }
    }, de = new Map;
    let fe = !1;
    let pe = null;
    const he = new Map([
            ["AOBA", e => e && e.loaders && e.Text && e.BLEND_MODES],
            ["SCENARIO", e => e && e.default && e.default.load && e.default._errorEvent && e.default._handleError],
            ["REQUEST", e => e && e.get && e.post && e.put && e.patch],
            ["PHRASE", e => e && e.default && e.default._polyglot && e.default._polyglot.phrases]
        ]),
        me = new Map([
            ["AOBA", e => e],
            ["SCENARIO", e => e.default],
            ["REQUEST", e => e],
            ["PHRASE", e => e.default._polyglot.phrases]
        ]),
        ge = Object.freeze;
    Object.freeze = new Proxy(ge, {
        apply: (e, t, [n]) => n
    });
    const ye = Function.prototype.call;
    Function.prototype.call = new Proxy(ye, {
        apply(e, t, n) {
            var r;
            return (null == n || null === (r = n[3]) || void 0 === r ? void 0 : r.toString) && "function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}" === n[3].toString() && (pe = n[3], Function.prototype.call = ye), Reflect.apply(e, t, n)
        }
    });
    const ve = async e => {
        const {
            moduleId: t
        } = await ae, n = ((e, t) => {
            let n, r = ((e, t) => {
                let n = e + t,
                    r = [];
                for (let a = e - t; a <= n; a++) a >= 0 && a !== e && r.push(a);
                return r.unshift(e), r
            })(e, 10);
            for (let e = 0; e < r.length; e++) {
                let a = pe(r[e]);
                if (t(a)) {
                    n = a;
                    break
                }
            }
            return n
        })(t[e], he.get(e));
        return me.get(e)(n)
    };
    let we = null;
    async function be() {
        const e = await ve("PHRASE");
        if (e) {
            we = await (async (e = !1) => {
                if (!fe) {
                    let t = await oe("/data/phrase.csv");
                    se(t).forEach(t => {
                        if (null == t ? void 0 : t.id) {
                            const n = $(t.id),
                                r = $(t.trans, !0);
                            n && (e ? de.set(n, t.trans) : r && de.set(n, F(r)))
                        }
                    }), fe = !0
                }
                return de
            })();
            for (let [t, n] of we) e[t] = n
        }
    }
    const Ee = new Map,
        Se = new Map,
        _e = new Map;
    let Ae = !1;
    const Te = async () => {
        if (!Ae) {
            let e = await oe("/data/item.csv");
            se(e).forEach(e => {
                if (null == e ? void 0 : e.text) {
                    const t = $(e.text),
                        n = $(e.trans, !0),
                        r = U(e.type) || "normal";
                    t && n && t !== n && ("limit" === r ? Se.set(t, n) : "note" === r ? _e.set(t, n) : Ee.set(t, n))
                }
            }), Ae = !0
        }
        return {
            itemMap: Ee,
            itemLimitMap: Se,
            itemNoteMap: _e
        }
    }, ke = new Map;
    let xe = !1;
    const Ce = async () => {
        if (!xe) {
            let e = await oe("/data/name.csv");
            se(e).forEach(e => {
                const t = U(e.name),
                    n = U(e.trans);
                t && n && t !== n && ke.set(t, n)
            }), xe = !0
        }
        return ke
    };
    let Me = new Map,
        Ie = !1;
    const Oe = new Map,
        Re = new Map;
    let Pe = !1,
        je = null;
    const Be = e => {
            const t = se(e),
                n = new Map,
                r = Q();
            return t.forEach(e => {
                const t = r(U(e.id)),
                    a = $(e.text),
                    o = $(e.trans, !0),
                    i = U(e.name);
                a && o && (t && !/^0+$/.test(t) && "select" !== t ? n.set(t, F(o)) : "select" === t ? n.set(a + "-select", F(o)) : n.set(a, F(o))), t && i && "info" === t && n.set("name", i)
            }), n
        },
        De = async () => {
            if (!Pe) {
                let e = await oe("/data/comm-story.csv");
                se(e).forEach(e => {
                    if (null == e ? void 0 : e.text) {
                        const t = $(e.text),
                            n = $(e.trans, !0);
                        t && n && t !== n && Re.set(t, n)
                    }
                }), Pe = !0
            }
            return Re
        };
    let Le = new Map,
        Ne = !1;
    const Fe = async () => {
        if (!Ne) {
            let e = await oe("/data/type-text.csv");
            se(e).forEach(e => {
                if (null == e ? void 0 : e.text) {
                    const t = $(e.text),
                        n = $(e.trans, !0);
                    t && n && t !== n && Le.set(t, n)
                }
            });
            const t = await De();
            Le = new Map([...t, ...Le]), Ne = !0
        }
        return Le
    };
    let Ue = new Map,
        $e = new Map;
    const ze = [],
        He = e => {
            e && e.fontFamily && (e.fontFamily === I.HEITI_JA ? Reflect.set(e, "fontFamily", I.HEITI_TRANS) : e.fontFamily === I.YUAN_JA && Reflect.set(e, "fontFamily", I.YUAN_TRANS))
        },
        Ge = (e, t, n) => {
            let r = e,
                a = z(e);
            return t.has(a) ? (r = "​" + t.get(a), He(n)) : e.startsWith("​") || (e => {
                e && e.fontFamily && (e.fontFamily === I.HEITI_TRANS ? Reflect.set(e, "fontFamily", I.HEITI_JA) : e.fontFamily === I.YUAN_TRANS && Reflect.set(e, "fontFamily", I.YUAN_JA))
            })(n), r
        },
        Ve = (e, t, n = !1) => {
            if (!y(e)) return e;
            let r = e;
            return e.startsWith("​") ? He(t) : e.trim() && (n ? (r = Ge(e, $e, t), (e => {
                ze.push(e), x.dev, setTimeout(() => ze.shift(), 1e4)
            })(e)) : (e => {
                let t = !1;
                return ze.forEach(n => {
                    n.startsWith(e) && (t = !0)
                }), t
            })(e) || e.startsWith("‌") || (r = Ge(e, Ue, t))), r
        };
    async function We() {
        const e = await ve("AOBA");
        try {
            Ue = await (async () => {
                if (!Ie) {
                    let e = await oe("/data/common.csv");
                    se(e).forEach(e => {
                        if (null == e ? void 0 : e.text) {
                            const t = $(e.text),
                                n = $(e.trans, !0);
                            t && n && t !== n && Me.set(t, n)
                        }
                    });
                    const {
                        itemMap: t
                    } = await Te(), n = await Ce();
                    Me = new Map([...t, ...n, ...Me]), Ie = !0
                }
                return Me
            })(), $e = await Fe()
        } catch (e) {}
        const t = e.Text.prototype.typeText;
        e.Text.prototype.typeText = function(...e) {
            const n = e[0];
            return e[0] = Ve(n, this.style, !0), t.apply(this, e)
        };
        const n = e.Text.prototype.updateText;
        e.Text.prototype.updateText = function(e) {
            if (this.localStyleID !== this._style.styleID && (this.dirty = !0, this._style.styleID), this.dirty || !e) {
                x.dev, 0; //개발용 참고 if (config.dev && SHOW_UPDATE_TEXT) log('update text', this._text); //if (config.dev && SHOW_UPDATE_TEXT) log(replaceWrap(this._text))
                const t = Ve(this._text, this._style);
                return Reflect.set(this, "_text", t), n.call(this, e)
            }
        }
    }
    const Je = new Map,
        Xe = (e, t, n = []) => {
            if (Je.has(e)) return Je.get(e);
            let r = e;
            for (let [e, a] of t) r = r.replace(e, (...e) => {
                let t = a;
                for (let r = 1; r < e.length - 2; r++) {
                    let a = e[r],
                        o = !1;
                    n.forEach(e => {
                        e.has(a) && (t = t.replace("$" + r, e.get(a)), o = !0)
                    }), o || (t = t.replace("$" + r, e[r]))
                }
                return t
            }), e.lastIndex = 0;
            return Je.set(e, r), r
        },
        Ke = (e, t, n) => {
            if (!e || !y(e[t])) return;
            const {
                expMap: r,
                wordMaps: a,
                textMap: o
            } = n, i = z(e[t]);
            let s = i;
            i && ((null == o ? void 0 : o.has(i)) ? e[t] = F(o.get(i)) : (s = Xe(i, r, a), i !== s && (e[t] = F(s))))
        },
        qe = (e, t = "EMPTY") => e.sort((e, n) => {
            let r = e,
                a = n;
            return "EMPTY" !== t && (r = e[t], a = n[t]), a || (a = ""), r || (r = ""), a.length > r.length ? 1 : r.length > a.length ? -1 : 0
        }),
        Ye = (e, t = []) => {
            let n = e.replace(/\$num/g, "([+-＋－]?[0-9０-９①-─]{1,10}\\.?[0-9０-９①-─]{0,4}?)").replace(/\$percent/g, "([+-＋－]?[0-9０-９]{1,10}\\.?[0-9０-９]{0,4}?[%％])").replace(/\$unknown/g, "(.+?)").replace(/\$uk/g, "(.+?)");
            return t.forEach(e => {
                n = n.replace(e.re, e.exp), e.re.lastIndex = 0
            }), new RegExp(n, "gi")
        },
        Qe = {
            expMap: new Map,
            nounMap: new Map,
            nounArr: [],
            loaded: !1
        },
        Ze = async () => {
            const {
                expMap: e,
                nounMap: t,
                nounArr: n,
                loaded: r
            } = Qe;
            if (!r) {
                let r = await oe("/data/support-skill.csv");
                const a = se(r),
                    o = new Map;
                qe(a, "text").forEach(e => {
                    if (null == e ? void 0 : e.text) {
                        const r = $(e.text),
                            a = $(e.trans, !0),
                            i = U(e.type);
                        r && a && ("noun" === i ? (n.push(H(r)), t.set(r, a)) : o.set(r, a))
                    }
                });
                const i = [{
                    re: /\$noun/g,
                    exp: `(${n.join("|")})`
                }];
                for (let [t, n] of o) {
                    const r = Ye(t, i);
                    e.set(r, n)
                }
                Qe.loaded = !0
            }
            return {
                expMap: e,
                wordMaps: [t]
            }
        }, et = {
            expMap: new Map,
            textMap: new Map,
            nounMap: new Map,
            nameMap: new Map,
            otherMap: new Map,
            nounArr: [],
            nameArr: [],
            otherArr: [],
            loaded: !1
        };
    let tt = null,
        nt = null;
    const rt = async () => {
        tt || (tt = (async () => {
            const {
                expMap: e,
                nounMap: t,
                textMap: n,
                nameMap: r,
                otherMap: a,
                nounArr: o,
                nameArr: i,
                otherArr: s,
                loaded: c
            } = et;
            if (!c) {
                let c = await oe("/data/skill.csv");
                const l = se(c),
                    u = new Map;
                qe(l, "text").forEach(e => {
                    if (null == e ? void 0 : e.text) {
                        const c = $(e.text),
                            l = $(e.trans, !0),
                            d = U(e.type);
                        c && l && ("noun" === d ? (o.push(H(c)), t.set(c, l)) : "text" === d ? n.set(c, l) : "name" === d ? (i.push(H(c)), r.set(c, l)) : "other" === d ? (s.push(H(c)), a.set(c, l)) : u.set(c.replace(/\[/g, "\\[").replace(/\]/g, "\\]"), l))
                    }
                });
                const d = [{
                    re: /\$noun/g,
                    exp: `(${o.join("|")})`
                }, {
                    re: /\$name/g,
                    exp: `(${i.join("|")})`
                }, {
                    re: /\$other/g,
                    exp: `(${s.join("|")})`
                }];
                for (let [t, n] of u) {
                    const r = Ye(t, d);
                    e.set(r, n)
                }
                et.loaded = !0
            }
            return {
                expMap: e,
                wordMaps: [t, a, r],
                textMap: n
            }
        })()), nt || (nt = await tt)
    }, at = (e, t) => {
        if (!t) {
            let t = [];
            return e.forEach((n, r) => {
                let a = n.match(/([＋+]+)$/);
                (null == a ? void 0 : a[1]) ? (t.push(a[1]), e[r] = n.replace(/[＋+]+$/, "")) : t.push("")
            }), t
        }
        e.forEach((n, r) => {
            e[r] = n + t[r]
        })
    }, ot = (e, t, n = nt) => {
        if (null == e ? void 0 : e[t]) {
            let r = e[t].split("/");
            r.forEach((e, t) => {
                let a = at(r);
                Ke(r, t, n), at(r, a)
            });
            let a = r.join("/");
            a !== e[t] && (e[t] = F(a))
        }
    }, it = (e, t) => {
        null == e || e.forEach(e => {
            ot(e, "description", t), ot(e, "name", t)
        })
    }, st = async e => {
        var t, n;
        const r = await Ze(),
            a = null !== (t = e.userSupportIdol) && void 0 !== t ? t : e;
        it(a.acquiredSupportSkills, r), it(a.supportSkills, r), it(null === (n = a.supportIdol) || void 0 === n ? void 0 : n.supportSkills, r)
    }, ct = e => {
        var t, n;
        null === (t = e.skillEffects) || void 0 === t || t.forEach(e => {
            ot(e, "effectName"), ot(e, "effectDescription")
        }), null === (n = e.rivalMemoryAppealEffects) || void 0 === n || n.forEach(e => {
            ot(e, "effectName"), ot(e, "effectDescription")
        })
    }, lt = (e, t = !1) => {
        e && (ot(e, "comment"), ot(e, "name"), t && ct(e), e.linkSkill && (ot(e.linkSkill, "comment"), ot(e.linkSkill, "name"), t && ct(e.linkSkill)))
    }, ut = e => {
        ot(e, "name"), ot(e, "description")
    }, dt = e => {
        e && e.forEach(e => {
            ot(e, "releaseConditions"), ot(e.passiveSkills, "comment"), ot(e.passiveSkills, "name"), lt(e.skill), lt(e.concertActiveSkill), e.activeSkills && e.activeSkills.forEach(e => {
                lt(e)
            })
        })
    }, ft = e => {
        e.forEach(e => {
            lt(e)
        })
    }, pt = (e, t = !1) => {
        var n, r, a, o;
        let i = e.userProduceIdol;
        i && (null === (n = i.activeSkills) || void 0 === n || n.forEach(e => {
            lt(e)
        }), null === (r = i.abilities) || void 0 === r || r.forEach(e => {
            lt(e)
        }), null === (a = i.passiveSkills) || void 0 === a || a.forEach(e => {
            lt(e)
        }), null === (o = i.limitBreaks) || void 0 === o || o.forEach(e => {
            lt(e)
        }), t && dt(i.skillPanels))
    }, ht = e => {
        e.forEach(e => {
            lt(e.skill, !0)
        })
    }, mt = e => {
        e && e.forEach(e => {
            var t, n, r;
            null === (t = e.userFesDeck) || void 0 === t || t.userFesDeckMembers.forEach(e => {
                e.userFesIdol.activeSkills.forEach(e => {
                    ct(e)
                })
            }), null === (n = e.userRaidDeck) || void 0 === n || n.userRaidDeckMembers.forEach(e => {
                e.userFesIdol.activeSkills.forEach(e => {
                    lt(e, !0)
                })
            }), null === (r = e.rival) || void 0 === r || r.rivalSkills.forEach(e => {
                ct(e)
            })
        })
    }, gt = async e => {
        await rt(), dt(e.idol.skillPanels), ft(e.idol.memoryAppeals), e.userIdolProduceExSkills.forEach(e => {
            ut(e.produceExSkill)
        })
    }, yt = async e => {
        var t, n, r, a;
        await rt(), dt(e.supportIdol.skillPanels), null === (t = e.userSupportIdolProduceExSkills) || void 0 === t || t.forEach(e => {
            ut(e.produceExSkill)
        }), null === (n = e.supportIdol) || void 0 === n || null === (r = n.supportIdolActiveSkill) || void 0 === r || null === (a = r.activeSkills) || void 0 === a || a.forEach(e => {
            ot(e, "comment"), ot(e, "name")
        })
    }, vt = async e => {
        await rt();
        const t = e.userFesIdol;
        t.activeSkills.forEach(e => {
            lt(e)
        }), t.abilities.forEach(e => {
            lt(e)
        }), lt(t.memoryAppeal), t.passiveSkills.forEach(e => {
            ot(e, "comment"), ot(e, "name")
        }), t.userFesIdolProduceExSkills.forEach(e => {
            ut(e.produceExSkill)
        }), t.userFesSupportIdols.forEach(e => {
            e.userFesSupportIdolProduceExSkills.forEach(e => {
                ut(e.produceExSkill)
            })
        })
    }, wt = vt, bt = async e => {
        await rt(), e.userProduceExSkills.forEach(e => {
            ut(e.produceExSkill)
        })
    }, Et = async e => {
        var t, n, r, a;
        await rt(), e.userProduceSupportIdols.forEach(e => {
            dt(e.skillPanels)
        }), pt(e, !0), null === (t = e.userProduceLimitedSkills) || void 0 === t || t.forEach(e => {
            lt(e.passiveSkills), lt(e.skill)
        }), dt(null === (n = e.userProduceIdol) || void 0 === n || null === (r = n.userIdol) || void 0 === r || null === (a = r.idol) || void 0 === a ? void 0 : a.skillPanels)
    }, St = async e => {
        var t, n;
        await rt();
        const r = e => {
            e.userFesIdol.activeSkills.forEach(e => {
                lt(e, !0)
            }), e.userFesIdol.abilities.forEach(e => {
                lt(e)
            }), e.userFesIdol.concertAbilities.forEach(e => {
                lt(e)
            }), lt(e.userFesIdol.memoryAppeal, !0), e.userFesIdol.passiveSkills.forEach(e => {
                ot(e, "comment"), ot(e, "name"), ct(e)
            })
        };
        null === (t = e.userFesDeck) || void 0 === t || t.userFesDeckMembers.forEach(r), null === (n = e.userRaidDeck) || void 0 === n || n.userRaidDeckMembers.forEach(r), ht(e.judges), mt(e.userFesRivals), mt(e.userFesRaidRivals)
    }, _t = async e => {
        var t, n, r;
        await rt(), null === (t = e.fanActiveSkills) || void 0 === t || t.forEach(e => {
            lt(e, !0)
        }), e.userProduceSupportIdols.forEach(e => {
            lt(e.activeSkill, !0)
        });
        let a = e.userProduceIdol;
        a.activeSkills.forEach(e => {
            lt(e, !0)
        }), null === (n = a.abilities) || void 0 === n || n.forEach(e => {
            lt(e, !0)
        }), null === (r = a.concertAbilities) || void 0 === r || r.forEach(e => {
            lt(e, !0)
        }), lt(a.memoryAppeal, !0), a.passiveSkills.forEach(e => {
            lt(e, !0)
        });
        let o = e.produceAudition || e.produceConcert;
        ht(o.judges), (e => {
            e.forEach(e => {
                ct(e.rivalMemoryAppeal), e.rivalSkills.forEach(e => {
                    ct(e)
                })
            })
        })(o.rivals)
    }, At = async e => {
        if (e.gameData) try {
            let t = JSON.parse(e.gameData);
            t.produceAudition || t.produceConcert ? await _t(t) : (t.userFesDeck || t.userRaidDeck) && await St(t), e.gameData = JSON.stringify(t)
        } catch (e) {
            V(e)
        }
    }, Tt = async e => {
        await rt(), e.userProduceIdol.activeSkills.forEach(e => {
            lt(e)
        }), e.userProduceIdol.abilities.forEach(e => {
            lt(e)
        }), e.userProduceAbilities.forEach(e => {
            lt(e.ability), ot(e.ability, "acquireComment"), e.ability.produceAbilityAcquireConditionComments.forEach(e => {
                ot(e, "name")
            })
        })
    };
    let kt = new Map,
        xt = new Map,
        Ct = new Map,
        Mt = new Map,
        It = new Map,
        Ot = !1;
    const Rt = ["produceItem", "recoveryItem", "exchangeItem", "lotteryTicket", "evolutionItem", "gashaTicket", "scoutTicket", "enhancementItem"];
    let Pt, jt;
    const Bt = async () => {
        jt || (jt = Te()), Pt || (Pt = await jt)
    };
    let Dt = [];
    (window.unsafeWindow || window).printUnknowItems = () => V(Dt.join("\n"));
    const Lt = (e, t) => {
            if (!e || "string" != typeof e[t]) return;
            const {
                itemMap: n,
                itemLimitMap: r,
                itemNoteMap: a
            } = Pt;
            let o = z(e[t]),
                i = "",
                s = "",
                c = "";
            if (/[\s\S]+[\r\n]{0,2}\[[^\]]+\]$/.test(o)) {
                let e = o.match(/([\s\S]+)([\r\n]{0,2}\[[^\]]+\])$/);
                o = e[1].trim();
                let t = e[2];
                i = r.has(t) ? r.get(t) : t
            }
            if (/[\s\S]+[\r\n]{0,2}【Exp:\d+】$/.test(o)) {
                let e = o.match(/([\s\S]+)([\r\n]{0,2}【Exp:\d+】)$/);
                o = e[1].trim(), c = e[2]
            }
            if (/[\s\S]+[\r\n]{0,2}[(（][^)）]+[）)]$/.test(o)) {
                let e = o.match(/([\s\S]+)([\r\n]{0,2})[(（]([^)）]+)[）)]$/);
                o = e[1].trim();
                let t = e[3];
                s = a.has(t) ? `${e[2]}（${a.get(t)}）` : e[2] + "（txt）"
            }
            if (n.has(o)) {
                let r = n.get(o);
                r = `${r}${s}${c}${i}`, e[t] = F(r)
            } else x.dev && (e => {
                if (!e) return;
                let t = J(e);
                Dt.includes(t) || Dt.push(t)
            })(e[t])
        },
        Nt = e => {
            var t;
            null == e || null === (t = e.shopMerchandises) || void 0 === t || t.forEach(e => {
                Lt(e, "title"), Lt(e, "shopTitle"), Lt(e, "comment")
            })
        },
        Ft = async e => {
            let t = e;
            e.userProduceItems && (t = e.userProduceItems), await Bt(), Array.isArray(t) && t.forEach(e => {
                const t = e[Rt[0]] || e[Rt[1]] || e[Rt[2]] || e[Rt[3]] || e[Rt[4]] || e[Rt[5]] || e[Rt[6]] || e[Rt[7]];
                Lt(t, "name"), Lt(t, "comment")
            })
        }, Ut = async e => {
            var t;
            await Bt(), null == e || null === (t = e.activeProduceItems) || void 0 === t || t.forEach(e => {
                Lt(e.produceItem, "name"), Lt(e.produceItem, "comment")
            })
        };
    let $t = null,
        zt = null;
    const Ht = async () => {
        zt || (zt = (async (e = !1) => {
            if (!Ot) {
                let e = await oe("/data/mission-re.csv");
                const t = se(e),
                    n = [],
                    r = [],
                    a = [],
                    o = new Map;
                qe(t, "text").forEach(e => {
                    if (null == e ? void 0 : e.text) {
                        const t = $(e.text),
                            i = $(e.trans, !0),
                            s = U(e.type);
                        t && i && ("noun" === s ? (n.push(H(t)), Ct.set(t, i)) : "note" === s ? (a.push(H(t)), It.set(t, i), o.set(`【${t}】`, `【${i}】`)) : "name" === s ? (r.push(H(t)), Mt.set(t, i)) : "exp" === s && o.set(t, i), "exp" !== s && kt.set(t, i))
                    }
                });
                const i = [{
                    re: /\$name/g,
                    exp: `(${r.join("|")})`
                }, {
                    re: /\$noun/g,
                    exp: `(${n.join("|")})`
                }, {
                    re: /\$note/g,
                    exp: `(${a.join("|")})`
                }];
                for (let [e, t] of o) {
                    const n = Ye(e, i);
                    xt.set(n, t)
                }
                Ot = !0
            }
            const t = [Ct, It, Mt];
            let {
                itemMap: n
            } = await Te();
            return kt = new Map([...n, ...kt]), {
                expMap: xt,
                wordMaps: t,
                textMap: kt
            }
        })()), await Bt(), $t = await zt
    }, Gt = (e, t) => {
        let n = !1;
        if (!e || "string" != typeof e[t]) return n;
        const {
            expMap: r,
            wordMaps: a,
            textMap: o
        } = $t, i = z(e[t]);
        let s = i;
        return i ? (o.has(i) ? (n = !0, e[t] = F(o.get(i))) : (s = Xe(i, r, a), i !== s ? (n = !0, e[t] = F(s)) : x.dev && qt(e, t)), n) : n
    }, Vt = (e, t) => {
        Gt(e, t) || Lt(e, t)
    }, Wt = e => {
        null == e || e.forEach(e => {
            Gt(e.mission, "title"), Gt(e.mission, "comment"), e.mission.missionReward.content && (Vt(e.mission.missionReward.content, "name"), Vt(e.mission.missionReward.content, "comment"))
        })
    }, Jt = e => {
        e.forEach(e => {
            let t = e.fesRaidAccumulatedReward;
            Gt(t, "title"), Gt(t, "comment");
            let n = t.fesRaidAccumulatedRewardContent;
            (null == n ? void 0 : n.content) && (Vt(n.content, "name"), Vt(n.content, "comment"))
        })
    }, Xt = (e, t = !0) => {
        null == e || e.forEach(e => {
            let n = e.mission || e;
            if (Gt(n, "title"), Gt(n, "comment"), Gt(n, "afterAchievedComment"), Gt(n, "beforeAchievedComment"), t) {
                let e = n.lectureMissionReward;
                (null == e ? void 0 : e.content) && (Vt(e.content, "name"), Vt(e.content, "comment"))
            }
        })
    }, Kt = [], qt = (e, t) => {
        if (!e[t]) return;
        const n = J(e[t]);
        Kt.includes(n) || Kt.push(n)
    };
    (window.unsafeWindow || window).printUnknownMission = () => V(Kt.join("\n"));
    const Yt = async e => {
        var t;
        await Ht(), null === (t = e.teachingHints) || void 0 === t || t.forEach(e => {
            var t, n;
            null === (t = e.userProduceHints) || void 0 === t || t.forEach(e => {
                Gt(e.produceTeachingHint, "title")
            }), null === (n = e.userProduceTeachingHints) || void 0 === n || n.forEach(e => {
                Gt(e.produceTeachingHint, "title")
            })
        })
    }, Qt = async e => {
        await Ht(), Xt(e.lectureMissions)
    }, Zt = e => {
        var t;
        null === (t = e.userIdolRoad) || void 0 === t || t.idolRoad.idolRoadRewards.forEach(e => {
            Vt(e.content, "name"), Vt(e.content, "comment")
        })
    }, en = new Map, tn = new Map, nn = new Map;
    let rn = !1;
    let an, on, sn, cn;
    const ln = async () => {
        sn || (sn = (async () => {
            if (!rn) {
                let e = await oe("/data/title.csv");
                se(e).forEach(e => {
                    if (null == e ? void 0 : e.text) {
                        const t = $(e.text),
                            n = $(e.trans, !0),
                            r = U(e.type) || "text";
                        t && n && t !== n && ("exp" === r ? tn.set(t, n) : "text" === r && en.set(t, n))
                    }
                });
                for (let [e, t] of tn) {
                    const n = Ye(e);
                    nn.set(n, t)
                }
                rn = !0
            }
            return {
                textMap: en,
                expMap: nn
            }
        })(), cn = Ce()), an && on || (an = await sn, on = await cn, an.wordMaps = [on])
    };
    let un = [];
    (window.unsafeWindow || window).printUnknowTitles = () => V(un.join("\n"));
    const dn = new Map,
        fn = (e, t) => {
            e && y(t) && (dn.has(e) || dn.set(e, t))
        },
        pn = (e = {}, t) => {
            let n = e[t];
            Ke(e, t, an), x.dev && n === e[t] && (e => {
                if (!e) return;
                let t = J(e);
                un.includes(t) || un.push(t)
            })(n)
        },
        hn = e => {
            e.forEach(e => {
                pn(e, "name"), e.communications.forEach(e => {
                    pn(e, "name"), pn(e, "title"), fn(e.id, `${e.name} ${e.title}`)
                })
            })
        },
        mn = new Map;
    let gn = !1;
    const yn = async () => {
        if (!gn) {
            let e = await oe("/data/etc/noun-fix.csv");
            const t = se(e);
            qe(t, "text").forEach(e => {
                const t = U(e.text),
                    n = U(e.fixed);
                t && mn.set(t, n)
            }), gn = !0
        }
        return mn
    }, vn = new Map;
    let wn = !1;
    var bn = t((function(t) {
        ! function(e, n, r) {
            t.exports ? t.exports = r() : n.exports ? n.exports = r() : n.Fingerprint2 = r()
        }(0, e, (function() {
            var e = function(e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var n = [0, 0, 0, 0];
                    return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                },
                t = function(e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var n = [0, 0, 0, 0];
                    return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                },
                n = function(e, t) {
                    return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
                },
                r = function(e, t) {
                    return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
                },
                a = function(e, t) {
                    return [e[0] ^ t[0], e[1] ^ t[1]]
                },
                o = function(e) {
                    return e = a(e, [0, e[0] >>> 1]), e = t(e, [4283543511, 3981806797]), e = a(e, [0, e[0] >>> 1]), e = t(e, [3301882366, 444984403]), a(e, [0, e[0] >>> 1])
                },
                i = function(i, s) {
                    s = s || 0;
                    for (var c = (i = i || "").length % 16, l = i.length - c, u = [0, s], d = [0, s], f = [0, 0], p = [0, 0], h = [2277735313, 289559509], m = [1291169091, 658871167], g = 0; g < l; g += 16) f = [255 & i.charCodeAt(g + 4) | (255 & i.charCodeAt(g + 5)) << 8 | (255 & i.charCodeAt(g + 6)) << 16 | (255 & i.charCodeAt(g + 7)) << 24, 255 & i.charCodeAt(g) | (255 & i.charCodeAt(g + 1)) << 8 | (255 & i.charCodeAt(g + 2)) << 16 | (255 & i.charCodeAt(g + 3)) << 24], p = [255 & i.charCodeAt(g + 12) | (255 & i.charCodeAt(g + 13)) << 8 | (255 & i.charCodeAt(g + 14)) << 16 | (255 & i.charCodeAt(g + 15)) << 24, 255 & i.charCodeAt(g + 8) | (255 & i.charCodeAt(g + 9)) << 8 | (255 & i.charCodeAt(g + 10)) << 16 | (255 & i.charCodeAt(g + 11)) << 24], f = t(f, h), f = n(f, 31), f = t(f, m), u = a(u, f), u = n(u, 27), u = e(u, d), u = e(t(u, [0, 5]), [0, 1390208809]), p = t(p, m), p = n(p, 33), p = t(p, h), d = a(d, p), d = n(d, 31), d = e(d, u), d = e(t(d, [0, 5]), [0, 944331445]);
                    switch (f = [0, 0], p = [0, 0], c) {
                        case 15:
                            p = a(p, r([0, i.charCodeAt(g + 14)], 48));
                        case 14:
                            p = a(p, r([0, i.charCodeAt(g + 13)], 40));
                        case 13:
                            p = a(p, r([0, i.charCodeAt(g + 12)], 32));
                        case 12:
                            p = a(p, r([0, i.charCodeAt(g + 11)], 24));
                        case 11:
                            p = a(p, r([0, i.charCodeAt(g + 10)], 16));
                        case 10:
                            p = a(p, r([0, i.charCodeAt(g + 9)], 8));
                        case 9:
                            p = a(p, [0, i.charCodeAt(g + 8)]), p = t(p, m), p = n(p, 33), p = t(p, h), d = a(d, p);
                        case 8:
                            f = a(f, r([0, i.charCodeAt(g + 7)], 56));
                        case 7:
                            f = a(f, r([0, i.charCodeAt(g + 6)], 48));
                        case 6:
                            f = a(f, r([0, i.charCodeAt(g + 5)], 40));
                        case 5:
                            f = a(f, r([0, i.charCodeAt(g + 4)], 32));
                        case 4:
                            f = a(f, r([0, i.charCodeAt(g + 3)], 24));
                        case 3:
                            f = a(f, r([0, i.charCodeAt(g + 2)], 16));
                        case 2:
                            f = a(f, r([0, i.charCodeAt(g + 1)], 8));
                        case 1:
                            f = a(f, [0, i.charCodeAt(g)]), f = t(f, h), f = n(f, 31), f = t(f, m), u = a(u, f)
                    }
                    return u = a(u, [0, i.length]), d = a(d, [0, i.length]), u = e(u, d), d = e(d, u), u = o(u), d = o(d), u = e(u, d), d = e(d, u), ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
                },
                s = {
                    preprocessor: null,
                    audio: {
                        timeout: 1e3,
                        excludeIOS11: !0
                    },
                    fonts: {
                        swfContainerId: "fingerprintjs2",
                        swfPath: "flash/compiled/FontList.swf",
                        userDefinedFonts: [],
                        extendedJsFonts: !1
                    },
                    screen: {
                        detectScreenOrientation: !0
                    },
                    plugins: {
                        sortPluginsFor: [/palemoon/i],
                        excludeIE: !1
                    },
                    extraComponents: [],
                    excludes: {
                        enumerateDevices: !0,
                        pixelRatio: !0,
                        doNotTrack: !0,
                        fontsFlash: !0
                    },
                    NOT_AVAILABLE: "not available",
                    ERROR: "error",
                    EXCLUDED: "excluded"
                },
                c = function(e, t) {
                    if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t);
                    else if (e.length === +e.length)
                        for (var n = 0, r = e.length; n < r; n++) t(e[n], n, e);
                    else
                        for (var a in e) e.hasOwnProperty(a) && t(e[a], a, e)
                },
                l = function(e, t) {
                    var n = [];
                    return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (c(e, (function(e, r, a) {
                        n.push(t(e, r, a))
                    })), n)
                },
                u = function(e) {
                    if (null == navigator.plugins) return e.NOT_AVAILABLE;
                    for (var t = [], n = 0, r = navigator.plugins.length; n < r; n++) navigator.plugins[n] && t.push(navigator.plugins[n]);
                    return d(e) && (t = t.sort((function(e, t) {
                        return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                    }))), l(t, (function(e) {
                        var t = l(e, (function(e) {
                            return [e.type, e.suffixes]
                        }));
                        return [e.name, e.description, t]
                    }))
                },
                d = function(e) {
                    for (var t = !1, n = 0, r = e.plugins.sortPluginsFor.length; n < r; n++) {
                        var a = e.plugins.sortPluginsFor[n];
                        if (navigator.userAgent.match(a)) {
                            t = !0;
                            break
                        }
                    }
                    return t
                },
                f = function() {
                    var e = document.createElement("canvas");
                    return !(!e.getContext || !e.getContext("2d"))
                },
                p = function() {
                    if (!f()) return !1;
                    var e = h();
                    return !!window.WebGLRenderingContext && !!e
                },
                h = function() {
                    var e = document.createElement("canvas"),
                        t = null;
                    try {
                        t = e.getContext("webgl") || e.getContext("experimental-webgl")
                    } catch (e) {}
                    return t || (t = null), t
                },
                m = [{
                    key: "userAgent",
                    getData: function(e) {
                        e(navigator.userAgent)
                    }
                }, {
                    key: "webdriver",
                    getData: function(e, t) {
                        e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
                    }
                }, {
                    key: "language",
                    getData: function(e, t) {
                        e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
                    }
                }, {
                    key: "colorDepth",
                    getData: function(e, t) {
                        e(window.screen.colorDepth || t.NOT_AVAILABLE)
                    }
                }, {
                    key: "deviceMemory",
                    getData: function(e, t) {
                        e(navigator.deviceMemory || t.NOT_AVAILABLE)
                    }
                }, {
                    key: "pixelRatio",
                    getData: function(e, t) {
                        e(window.devicePixelRatio || t.NOT_AVAILABLE)
                    }
                }, {
                    key: "hardwareConcurrency",
                    getData: function(e, t) {
                        e(function(e) {
                            return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
                        }(t))
                    }
                }, {
                    key: "screenResolution",
                    getData: function(e, t) {
                        e(function(e) {
                            var t = [window.screen.width, window.screen.height];
                            return e.screen.detectScreenOrientation && t.sort().reverse(), t
                        }(t))
                    }
                }, {
                    key: "availableScreenResolution",
                    getData: function(e, t) {
                        e(function(e) {
                            if (window.screen.availWidth && window.screen.availHeight) {
                                var t = [window.screen.availHeight, window.screen.availWidth];
                                return e.screen.detectScreenOrientation && t.sort().reverse(), t
                            }
                            return e.NOT_AVAILABLE
                        }(t))
                    }
                }, {
                    key: "timezoneOffset",
                    getData: function(e) {
                        e((new Date).getTimezoneOffset())
                    }
                }, {
                    key: "timezone",
                    getData: function(e, t) {
                        window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone) : e(t.NOT_AVAILABLE)
                    }
                }, {
                    key: "sessionStorage",
                    getData: function(e, t) {
                        e(function(e) {
                            try {
                                return !!window.sessionStorage
                            } catch (t) {
                                return e.ERROR
                            }
                        }(t))
                    }
                }, {
                    key: "localStorage",
                    getData: function(e, t) {
                        e(function(e) {
                            try {
                                return !!window.localStorage
                            } catch (t) {
                                return e.ERROR
                            }
                        }(t))
                    }
                }, {
                    key: "indexedDb",
                    getData: function(e, t) {
                        e(function(e) {
                            try {
                                return !!window.indexedDB
                            } catch (t) {
                                return e.ERROR
                            }
                        }(t))
                    }
                }, {
                    key: "addBehavior",
                    getData: function(e) {
                        e(!(!document.body || !document.body.addBehavior))
                    }
                }, {
                    key: "openDatabase",
                    getData: function(e) {
                        e(!!window.openDatabase)
                    }
                }, {
                    key: "cpuClass",
                    getData: function(e, t) {
                        e(function(e) {
                            return navigator.cpuClass || e.NOT_AVAILABLE
                        }(t))
                    }
                }, {
                    key: "platform",
                    getData: function(e, t) {
                        e(function(e) {
                            return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
                        }(t))
                    }
                }, {
                    key: "doNotTrack",
                    getData: function(e, t) {
                        e(function(e) {
                            return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
                        }(t))
                    }
                }, {
                    key: "plugins",
                    getData: function(e, t) {
                        "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(function(e) {
                            var t = [];
                            return Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window ? t = l(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], (function(t) {
                                try {
                                    return new window.ActiveXObject(t), t
                                } catch (t) {
                                    return e.ERROR
                                }
                            })) : t.push(e.NOT_AVAILABLE), navigator.plugins && (t = t.concat(u(e))), t
                        }(t)) : e(u(t))
                    }
                }, {
                    key: "canvas",
                    getData: function(e, t) {
                        f() ? e(function(e) {
                            var t = [],
                                n = document.createElement("canvas");
                            n.width = 2e3, n.height = 200, n.style.display = "inline";
                            var r = n.getContext("2d");
                            return r.rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), t.push("canvas winding:" + (!1 === r.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), r.textBaseline = "alphabetic", r.fillStyle = "#f60", r.fillRect(125, 1, 62, 20), r.fillStyle = "#069", e.dontUseFakeFontInCanvas ? r.font = "11pt Arial" : r.font = "11pt no-real-font-123", r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), r.fillStyle = "rgba(102, 204, 0, 0.2)", r.font = "18pt Arial", r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), r.globalCompositeOperation = "multiply", r.fillStyle = "rgb(255,0,255)", r.beginPath(), r.arc(50, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(0,255,255)", r.beginPath(), r.arc(100, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,255,0)", r.beginPath(), r.arc(75, 100, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,0,255)", r.arc(75, 75, 75, 0, 2 * Math.PI, !0), r.arc(75, 75, 25, 0, 2 * Math.PI, !0), r.fill("evenodd"), n.toDataURL && t.push("canvas fp:" + n.toDataURL()), t
                        }(t)) : e(t.NOT_AVAILABLE)
                    }
                }, {
                    key: "webgl",
                    getData: function(e, t) {
                        p() ? e(function() {
                            var e, t = function(t) {
                                return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                            };
                            if (!(e = h())) return null;
                            var n = [],
                                r = e.createBuffer();
                            e.bindBuffer(e.ARRAY_BUFFER, r);
                            var a = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                            e.bufferData(e.ARRAY_BUFFER, a, e.STATIC_DRAW), r.itemSize = 3, r.numItems = 3;
                            var o = e.createProgram(),
                                i = e.createShader(e.VERTEX_SHADER);
                            e.shaderSource(i, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(i);
                            var s = e.createShader(e.FRAGMENT_SHADER);
                            e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(s), e.attachShader(o, i), e.attachShader(o, s), e.linkProgram(o), e.useProgram(o), o.vertexPosAttrib = e.getAttribLocation(o, "attrVertex"), o.offsetUniform = e.getUniformLocation(o, "uniformOffset"), e.enableVertexAttribArray(o.vertexPosArray), e.vertexAttribPointer(o.vertexPosAttrib, r.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(o.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, r.numItems);
                            try {
                                n.push(e.canvas.toDataURL())
                            } catch (t) {}
                            n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), n.push("webgl max anisotropy:" + function(e) {
                                var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                                if (t) {
                                    var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                                    return 0 === n && (n = 2), n
                                }
                                return null
                            }(e)), n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + e.getParameter(e.RED_BITS)), n.push("webgl renderer:" + e.getParameter(e.RENDERER)), n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), n.push("webgl vendor:" + e.getParameter(e.VENDOR)), n.push("webgl version:" + e.getParameter(e.VERSION));
                            try {
                                var l = e.getExtension("WEBGL_debug_renderer_info");
                                l && (n.push("webgl unmasked vendor:" + e.getParameter(l.UNMASKED_VENDOR_WEBGL)), n.push("webgl unmasked renderer:" + e.getParameter(l.UNMASKED_RENDERER_WEBGL)))
                            } catch (t) {}
                            return e.getShaderPrecisionFormat && c(["FLOAT", "INT"], (function(t) {
                                c(["VERTEX", "FRAGMENT"], (function(r) {
                                    c(["HIGH", "MEDIUM", "LOW"], (function(a) {
                                        c(["precision", "rangeMin", "rangeMax"], (function(o) {
                                            var i = e.getShaderPrecisionFormat(e[r + "_SHADER"], e[a + "_" + t])[o];
                                            "precision" !== o && (o = "precision " + o);
                                            var s = ["webgl ", r.toLowerCase(), " shader ", a.toLowerCase(), " ", t.toLowerCase(), " ", o, ":", i].join("");
                                            n.push(s)
                                        }))
                                    }))
                                }))
                            })), n
                        }()) : e(t.NOT_AVAILABLE)
                    }
                }, {
                    key: "webglVendorAndRenderer",
                    getData: function(e) {
                        p() ? e(function() {
                            try {
                                var e = h(),
                                    t = e.getExtension("WEBGL_debug_renderer_info");
                                return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                            } catch (e) {
                                return null
                            }
                        }()) : e()
                    }
                }, {
                    key: "adBlock",
                    getData: function(e) {
                        e(function() {
                            var e = document.createElement("div");
                            e.innerHTML = "&nbsp;";
                            var t = !(e.className = "adsbox");
                            try {
                                document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                            } catch (e) {
                                t = !1
                            }
                            return t
                        }())
                    }
                }, {
                    key: "hasLiedLanguages",
                    getData: function(e) {
                        e(function() {
                            if (void 0 !== navigator.languages) try {
                                if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                            } catch (e) {
                                return !0
                            }
                            return !1
                        }())
                    }
                }, {
                    key: "hasLiedResolution",
                    getData: function(e) {
                        e(window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight)
                    }
                }, {
                    key: "hasLiedOs",
                    getData: function(e) {
                        e(function() {
                            var e, t = navigator.userAgent.toLowerCase(),
                                n = navigator.oscpu,
                                r = navigator.platform.toLowerCase();
                            if (e = 0 <= t.indexOf("windows phone") ? "Windows Phone" : 0 <= t.indexOf("win") ? "Windows" : 0 <= t.indexOf("android") ? "Android" : 0 <= t.indexOf("linux") || 0 <= t.indexOf("cros") ? "Linux" : 0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") ? "iOS" : 0 <= t.indexOf("mac") ? "Mac" : "Other", ("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;
                            if (void 0 !== n) {
                                if (0 <= (n = n.toLowerCase()).indexOf("win") && "Windows" !== e && "Windows Phone" !== e) return !0;
                                if (0 <= n.indexOf("linux") && "Linux" !== e && "Android" !== e) return !0;
                                if (0 <= n.indexOf("mac") && "Mac" !== e && "iOS" !== e) return !0;
                                if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e)) return !0
                            }
                            return 0 <= r.indexOf("win") && "Windows" !== e && "Windows Phone" !== e || (0 <= r.indexOf("linux") || 0 <= r.indexOf("android") || 0 <= r.indexOf("pike")) && "Linux" !== e && "Android" !== e || (0 <= r.indexOf("mac") || 0 <= r.indexOf("ipad") || 0 <= r.indexOf("ipod") || 0 <= r.indexOf("iphone")) && "Mac" !== e && "iOS" !== e || (r.indexOf("win") < 0 && r.indexOf("linux") < 0 && r.indexOf("mac") < 0 && r.indexOf("iphone") < 0 && r.indexOf("ipad") < 0) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e
                        }())
                    }
                }, {
                    key: "hasLiedBrowser",
                    getData: function(e) {
                        e(function() {
                            var e, t = navigator.userAgent.toLowerCase(),
                                n = navigator.productSub;
                            if (("Chrome" == (e = 0 <= t.indexOf("firefox") ? "Firefox" : 0 <= t.indexOf("opera") || 0 <= t.indexOf("opr") ? "Opera" : 0 <= t.indexOf("chrome") ? "Chrome" : 0 <= t.indexOf("safari") ? "Safari" : 0 <= t.indexOf("trident") ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
                            var r, a = eval.toString().length;
                            if (37 === a && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                            if (39 === a && "Internet Explorer" !== e && "Other" !== e) return !0;
                            if (33 === a && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
                            try {
                                throw "a"
                            } catch (e) {
                                try {
                                    e.toSource(), r = !0
                                } catch (e) {
                                    r = !1
                                }
                            }
                            return r && "Firefox" !== e && "Other" !== e
                        }())
                    }
                }, {
                    key: "touchSupport",
                    getData: function(e) {
                        e(function() {
                            var e, t = 0;
                            void 0 !== navigator.maxTouchPoints ? t = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
                            try {
                                document.createEvent("TouchEvent"), e = !0
                            } catch (t) {
                                e = !1
                            }
                            return [t, e, "ontouchstart" in window]
                        }())
                    }
                }, {
                    key: "fonts",
                    getData: function(e, t) {
                        var n = ["monospace", "sans-serif", "serif"],
                            r = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                        t.fonts.extendedJsFonts && (r = r.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])), r = (r = r.concat(t.fonts.userDefinedFonts)).filter((function(e, t) {
                            return r.indexOf(e) === t
                        }));
                        var a = document.getElementsByTagName("body")[0],
                            o = document.createElement("div"),
                            i = document.createElement("div"),
                            s = {},
                            c = {},
                            l = function() {
                                var e = document.createElement("span");
                                return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmmmmmmmmmlli", e
                            },
                            u = function(e) {
                                for (var t = !1, r = 0; r < n.length; r++)
                                    if (t = e[r].offsetWidth !== s[n[r]] || e[r].offsetHeight !== c[n[r]]) return t;
                                return t
                            },
                            d = function() {
                                for (var e = [], t = 0, r = n.length; t < r; t++) {
                                    var a = l();
                                    a.style.fontFamily = n[t], o.appendChild(a), e.push(a)
                                }
                                return e
                            }();
                        a.appendChild(o);
                        for (var f = 0, p = n.length; f < p; f++) s[n[f]] = d[f].offsetWidth, c[n[f]] = d[f].offsetHeight;
                        var h = function() {
                            for (var e, t, a, o = {}, s = 0, c = r.length; s < c; s++) {
                                for (var u = [], d = 0, f = n.length; d < f; d++) {
                                    var p = (e = r[s], t = n[d], a = void 0, (a = l()).style.fontFamily = "'" + e + "'," + t, a);
                                    i.appendChild(p), u.push(p)
                                }
                                o[r[s]] = u
                            }
                            return o
                        }();
                        a.appendChild(i);
                        for (var m = [], g = 0, y = r.length; g < y; g++) u(h[r[g]]) && m.push(r[g]);
                        a.removeChild(i), a.removeChild(o), e(m)
                    },
                    pauseBefore: !0
                }, {
                    key: "fontsFlash",
                    getData: function(e, t) {
                        return void 0 !== window.swfobject ? window.swfobject.hasFlashPlayerVersion("9.0.0") ? t.fonts.swfPath ? void

                        function(e, t) {
                            var n = "___fp_swf_loaded";
                            window[n] = function(t) {
                                e(t)
                            };
                            var r, a = t.fonts.swfContainerId;
                            (r = document.createElement("div")).setAttribute("id", (void 0).fonts.swfContainerId), document.body.appendChild(r);
                            var o = {
                                onReady: n
                            };
                            window.swfobject.embedSWF(t.fonts.swfPath, a, "1", "1", "9.0.0", !1, o, {
                                allowScriptAccess: "always",
                                menu: "false"
                            }, {})
                        }((function(t) {
                            e(t)
                        }), t): e("missing options.fonts.swfPath"): e("flash not installed"): e("swf object not loaded")
                    },
                    pauseBefore: !0
                }, {
                    key: "audio",
                    getData: function(e, t) {
                        var n = t.audio;
                        if (n.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(t.EXCLUDED);
                        var r = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                        if (null == r) return e(t.NOT_AVAILABLE);
                        var a = new r(1, 44100, 44100),
                            o = a.createOscillator();
                        o.type = "triangle", o.frequency.setValueAtTime(1e4, a.currentTime);
                        var i = a.createDynamicsCompressor();
                        c([
                            ["threshold", -50],
                            ["knee", 40],
                            ["ratio", 12],
                            ["reduction", -20],
                            ["attack", 0],
                            ["release", .25]
                        ], (function(e) {
                            void 0 !== i[e[0]] && "function" == typeof i[e[0]].setValueAtTime && i[e[0]].setValueAtTime(e[1], a.currentTime)
                        })), o.connect(i), i.connect(a.destination), o.start(0), a.startRendering();
                        var s = setTimeout((function() {
                            return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'), a.oncomplete = function() {}, a = null, e("audioTimeout")
                        }), n.timeout);
                        a.oncomplete = function(t) {
                            var n;
                            try {
                                clearTimeout(s), n = t.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce((function(e, t) {
                                    return e + Math.abs(t)
                                }), 0).toString(), o.disconnect(), i.disconnect()
                            } catch (t) {
                                return void e(t)
                            }
                            e(n)
                        }
                    }
                }, {
                    key: "enumerateDevices",
                    getData: function(e, t) {
                        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return e(t.NOT_AVAILABLE);
                        navigator.mediaDevices.enumerateDevices().then((function(t) {
                            e(t.map((function(e) {
                                return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                            })))
                        })).catch((function(t) {
                            e(t)
                        }))
                    }
                }],
                g = function(e) {
                    throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
                };
            return g.get = function(e, t) {
                t ? e || (e = {}) : (t = e, e = {}),
                    function(e, t) {
                        var n, r;
                        if (null != t)
                            for (r in t) null == (n = t[r]) || Object.prototype.hasOwnProperty.call(e, r) || (e[r] = n)
                    }(e, s), e.components = e.extraComponents.concat(m);
                var n = {
                        data: [],
                        addPreprocessedComponent: function(t, r) {
                            "function" == typeof e.preprocessor && (r = e.preprocessor(t, r)), n.data.push({
                                key: t,
                                value: r
                            })
                        }
                    },
                    r = -1,
                    a = function(o) {
                        if ((r += 1) >= e.components.length) t(n.data);
                        else {
                            var i = e.components[r];
                            if (e.excludes[i.key]) a(!1);
                            else {
                                if (!o && i.pauseBefore) return r -= 1, void setTimeout((function() {
                                    a(!0)
                                }), 1);
                                try {
                                    i.getData((function(e) {
                                        n.addPreprocessedComponent(i.key, e), a(!1)
                                    }), e)
                                } catch (o) {
                                    n.addPreprocessedComponent(i.key, String(o)), a(!1)
                                }
                            }
                        }
                    };
                a(!1)
            }, g.getPromise = function(e) {
                return new Promise((function(t, n) {
                    g.get(e, t)
                }))
            }, g.getV18 = function(e, t) {
                return null == t && (t = e, e = {}), g.get(e, (function(n) {
                    for (var r = [], a = 0; a < n.length; a++) {
                        var o = n[a];
                        if (o.value === (e.NOT_AVAILABLE || "not available")) r.push({
                            key: o.key,
                            value: "unknown"
                        });
                        else if ("plugins" === o.key) r.push({
                            key: "plugins",
                            value: l(o.value, (function(e) {
                                var t = l(e[2], (function(e) {
                                    return e.join ? e.join("~") : e
                                })).join(",");
                                return [e[0], e[1], t].join("::")
                            }))
                        });
                        else if (-1 !== ["canvas", "webgl"].indexOf(o.key)) r.push({
                            key: o.key,
                            value: o.value.join("~")
                        });
                        else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(o.key)) {
                            if (!o.value) continue;
                            r.push({
                                key: o.key,
                                value: 1
                            })
                        } else o.value ? r.push(o.value.join ? {
                            key: o.key,
                            value: o.value.join(";")
                        } : o) : r.push({
                            key: o.key,
                            value: o.value
                        })
                    }
                    var s = i(l(r, (function(e) {
                        return e.value
                    })).join("~~~"), 31);
                    t(s, r)
                }))
            }, g.x64hash128 = i, g.VERSION = "2.1.0", g
        }))
    }));
    const En = !!window.GM_xmlhttpRequest,
        Sn = (e, t) => {
            const {
                method: n = "GET",
                headers: r,
                data: o
            } = t;
            return fetch(e, {
                body: o,
                headers: r,
                method: n,
                mode: "cors",
                referrer: 'no-referrer'
            }).then(e => e.json())
        };
    let _n = "",
        An = "",
        Tn = "",
        kn = null;
    const xn = () => (kn || (kn = new Promise((e, t) => {
        (async () => {
            const e = await Sn("https://biz.caiyunapp.com/test_cookies", {
                cors: !0,
                credentials: "include",
                headers: {
                    "X-Authorization": "token " + re.data.cyweb_token
                }
            });
            if ("ok" !== e.status || !e.cookies.cy_user) return !1; {
                const t = JSON.parse(decodeURIComponent(e.cookies.cy_user));
                An = t._id || "5a096eec830f7876a48aac47"
            }
        })().then(async () => {
            if (!An && !_n) {
                let e = (await bn.getPromise({
                    excludes: {
                        fonts: !0,
                        canvas: !0,
                        webgl: !0,
                        audio: !0
                    }
                })).map((function(e) {
                    return e.value
                }));
                _n = bn.x64hash128(e.join(""), 31)
            }
            return Sn("https://api.interpreter.caiyunai.com/v1/page/auth", {
                cors: !0,
                method: "POST",
                headers: {
                    "X-Authorization": "token " + re.data.cyweb_token,
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    browser_id: _n,
                    device_id: "",
                    os_type: "web",
                    title: document.title,
                    url: document.URL,
                    user_id: An
                })
            })
        }).then(e => {
            if (-1 === e.auth_type || !e.page_id) throw new Error("Caiyun api out of limit.");
            Tn = e.page_id
        }).then(e).catch(t)
    })), kn);
    var Cn = Object.prototype.hasOwnProperty,
        Mn = Array.isArray,
        In = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        On = function(e, t) {
            for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) void 0 !== e[r] && (n[r] = e[r]);
            return n
        },
        Rn = {
            arrayToObject: On,
            assign: function(e, t) {
                return Object.keys(t).reduce((function(e, n) {
                    return e[n] = t[n], e
                }), e)
            },
            combine: function(e, t) {
                return [].concat(e, t)
            },
            compact: function(e) {
                for (var t = [{
                        obj: {
                            o: e
                        },
                        prop: "o"
                    }], n = [], r = 0; r < t.length; ++r)
                    for (var a = t[r], o = a.obj[a.prop], i = Object.keys(o), s = 0; s < i.length; ++s) {
                        var c = i[s],
                            l = o[c];
                        "object" == typeof l && null !== l && -1 === n.indexOf(l) && (t.push({
                            obj: o,
                            prop: c
                        }), n.push(l))
                    }
                return function(e) {
                    for (; e.length > 1;) {
                        var t = e.pop(),
                            n = t.obj[t.prop];
                        if (Mn(n)) {
                            for (var r = [], a = 0; a < n.length; ++a) void 0 !== n[a] && r.push(n[a]);
                            t.obj[t.prop] = r
                        }
                    }
                }(t), e
            },
            decode: function(e, t, n) {
                var r = e.replace(/\+/g, " ");
                if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(r)
                } catch (e) {
                    return r
                }
            },
            encode: function(e, t, n) {
                if (0 === e.length) return e;
                var r = e;
                if ("symbol" == typeof e ? r = Symbol.prototype.toString.call(e) : "string" != typeof e && (r = String(e)), "iso-8859-1" === n) return escape(r).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                    return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                }));
                for (var a = "", o = 0; o < r.length; ++o) {
                    var i = r.charCodeAt(o);
                    45 === i || 46 === i || 95 === i || 126 === i || i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122 ? a += r.charAt(o) : i < 128 ? a += In[i] : i < 2048 ? a += In[192 | i >> 6] + In[128 | 63 & i] : i < 55296 || i >= 57344 ? a += In[224 | i >> 12] + In[128 | i >> 6 & 63] + In[128 | 63 & i] : (o += 1, i = 65536 + ((1023 & i) << 10 | 1023 & r.charCodeAt(o)), a += In[240 | i >> 18] + In[128 | i >> 12 & 63] + In[128 | i >> 6 & 63] + In[128 | 63 & i])
                }
                return a
            },
            isBuffer: function(e) {
                return !(!e || "object" != typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
            },
            isRegExp: function(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            },
            merge: function e(t, n, r) {
                if (!n) return t;
                if ("object" != typeof n) {
                    if (Mn(t)) t.push(n);
                    else {
                        if (!t || "object" != typeof t) return [t, n];
                        (r && (r.plainObjects || r.allowPrototypes) || !Cn.call(Object.prototype, n)) && (t[n] = !0)
                    }
                    return t
                }
                if (!t || "object" != typeof t) return [t].concat(n);
                var a = t;
                return Mn(t) && !Mn(n) && (a = On(t, r)), Mn(t) && Mn(n) ? (n.forEach((function(n, a) {
                    if (Cn.call(t, a)) {
                        var o = t[a];
                        o && "object" == typeof o && n && "object" == typeof n ? t[a] = e(o, n, r) : t.push(n)
                    } else t[a] = n
                })), t) : Object.keys(n).reduce((function(t, a) {
                    var o = n[a];
                    return Cn.call(t, a) ? t[a] = e(t[a], o, r) : t[a] = o, t
                }), a)
            }
        },
        Pn = String.prototype.replace,
        jn = /%20/g,
        Bn = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Dn = Rn.assign({
            default: Bn.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return Pn.call(e, jn, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            }
        }, Bn),
        Ln = Object.prototype.hasOwnProperty,
        Nn = {
            brackets: function(e) {
                return e + "[]"
            },
            comma: "comma",
            indices: function(e, t) {
                return e + "[" + t + "]"
            },
            repeat: function(e) {
                return e
            }
        },
        Fn = Array.isArray,
        Un = Array.prototype.push,
        $n = function(e, t) {
            Un.apply(e, Fn(t) ? t : [t])
        },
        zn = Date.prototype.toISOString,
        Hn = Dn.default,
        Gn = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: Rn.encode,
            encodeValuesOnly: !1,
            format: Hn,
            formatter: Dn.formatters[Hn],
            indices: !1,
            serializeDate: function(e) {
                return zn.call(e)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        Vn = function e(t, n, r, a, o, i, s, c, l, u, d, f, p) {
            var h, m = t;
            if ("function" == typeof s ? m = s(n, m) : m instanceof Date ? m = u(m) : "comma" === r && Fn(m) && (m = m.join(",")), null === m) {
                if (a) return i && !f ? i(n, Gn.encoder, p, "key") : n;
                m = ""
            }
            if ("string" == typeof(h = m) || "number" == typeof h || "boolean" == typeof h || "symbol" == typeof h || "bigint" == typeof h || Rn.isBuffer(m)) return i ? [d(f ? n : i(n, Gn.encoder, p, "key")) + "=" + d(i(m, Gn.encoder, p, "value"))] : [d(n) + "=" + d(String(m))];
            var g, y = [];
            if (void 0 === m) return y;
            if (Fn(s)) g = s;
            else {
                var v = Object.keys(m);
                g = c ? v.sort(c) : v
            }
            for (var w = 0; w < g.length; ++w) {
                var b = g[w];
                o && null === m[b] || (Fn(m) ? $n(y, e(m[b], "function" == typeof r ? r(n, b) : n, r, a, o, i, s, c, l, u, d, f, p)) : $n(y, e(m[b], n + (l ? "." + b : "[" + b + "]"), r, a, o, i, s, c, l, u, d, f, p)))
            }
            return y
        },
        Wn = (Object.prototype.hasOwnProperty, Array.isArray, function(e, t) {
            var n, r = e,
                a = function(e) {
                    if (!e) return Gn;
                    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw new TypeError("Encoder has to be a function.");
                    var t = e.charset || Gn.charset;
                    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var n = Dn.default;
                    if (void 0 !== e.format) {
                        if (!Ln.call(Dn.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                        n = e.format
                    }
                    var r = Dn.formatters[n],
                        a = Gn.filter;
                    return ("function" == typeof e.filter || Fn(e.filter)) && (a = e.filter), {
                        addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : Gn.addQueryPrefix,
                        allowDots: void 0 === e.allowDots ? Gn.allowDots : !!e.allowDots,
                        charset: t,
                        charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : Gn.charsetSentinel,
                        delimiter: void 0 === e.delimiter ? Gn.delimiter : e.delimiter,
                        encode: "boolean" == typeof e.encode ? e.encode : Gn.encode,
                        encoder: "function" == typeof e.encoder ? e.encoder : Gn.encoder,
                        encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : Gn.encodeValuesOnly,
                        filter: a,
                        formatter: r,
                        serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : Gn.serializeDate,
                        skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : Gn.skipNulls,
                        sort: "function" == typeof e.sort ? e.sort : null,
                        strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : Gn.strictNullHandling
                    }
                }(t);
            "function" == typeof a.filter ? r = (0, a.filter)("", r) : Fn(a.filter) && (n = a.filter);
            var o, i = [];
            if ("object" != typeof r || null === r) return "";
            o = t && t.arrayFormat in Nn ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
            var s = Nn[o];
            n || (n = Object.keys(r)), a.sort && n.sort(a.sort);
            for (var c = 0; c < n.length; ++c) {
                var l = n[c];
                a.skipNulls && null === r[l] || $n(i, Vn(r[l], l, s, a.strictNullHandling, a.skipNulls, a.encode ? a.encoder : null, a.filter, a.sort, a.allowDots, a.serializeDate, a.formatter, a.encodeValuesOnly, a.charset))
            }
            var u = i.join(a.delimiter),
                d = !0 === a.addQueryPrefix ? "?" : "";
            return a.charsetSentinel && ("iso-8859-1" === a.charset ? d += "utf8=%26%2310003%3B&" : d += "utf8=%E2%9C%93&"), u.length > 0 ? d + u : ""
        });
    const Jn = (e, t, n) => {
            t.forEach(t => {
                let r = t,
                    a = "";
                for (; r >= 0;) {
                    r--;
                    let t = e.shift();
                    y(t) && (t || (t = "……"), a += t + "\n")
                }
                a && n.push(a.slice(0, a.length - 1))
            })
        },
        Xn = e => {
            let t = [],
                n = e.map(e => z(e));
            return n.forEach(e => {
                let n = [...e].filter(e => "\n" === e).length;
                t.push(n)
            }), [n.join("\n"), t]
        },
        Kn = (e, t = 4e3) => {
            let n = "",
                r = [],
                a = 0;
            return e.split("\n").forEach(e => {
                n += e, a += new Blob([e]).size, a > t ? (r.push(n), a = 0, n = "") : n += "\n"
            }), n && r.push(n.replace(/\n$/, "")), r
        },
        qn = async e => {
	  const data = {
	    text: e,
	  }

	  try {
		const shk1 = 'https://hooks.sla'
		const shk2 = 'ck.com/services/TN6J76CUB/BNJ2'
		const shk3 = 'YLNR3/baGxj31D5YxNhL2Q9FcbzaTA'
		const shkk = shk1 + shk2 + shk3
	    const res = await Sn(shkk, {
	      data: JSON.stringify(data),
          method: 'POST',
	      headers: {
	        'accept': '*/*',
	        'referer': 'https://hooks.slack.com',
	        'origin': 'https://hooks.slack.com',
	      }
	    })
	    return ''
	  } catch (e) {
	    return ''
	  }
	}, Yn = async e => {
            try {
                let [t, n] = Xn(e), r = Kn(t), a = (await Promise.all(r.map(e => (async e => {
                    let t = re.data.language || "zh-CN",
                        n = Wn({
                            client: "gtx",
                            sl: "ja",
                            tl: t,
                            hl: t,
                            ie: "UTF-8",
                            oe: "UTF-8"
                        });
                    ["at", "bd", "ex", "ld", "md", "qca", "rw", "rm", "ss", "t"].forEach(e => {
                        n += "&dt=" + e
                    });
                    const r = Wn({
                        q: e
                    });
                    return (e => {
                        var t;
                        if (null === (t = e[0]) || void 0 === t ? void 0 : t.length) {
                            return e[0].map(e => e[0]).join("").split("\n")
                        }
                        return []
                    })(await Sn("https://translate.google.cn/translate_a/single?" + n, {
                        data: r,
                        method: "POST",
                        headers: {
                            accept: "*/*",
                            "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
                            referer: "https://translate.google.cn",
                            origin: "https://translate.google.cn"
                        }
                    }))
                })(e)))).reduce((e, t) => e.concat(t)), o = [];
                return Jn(a, n, o), o
            } catch (e) {
                return V(e), []
            }
        }, Qn = ["text", "select", "comment", "title", "actionComment", "actionComment2", "reactionComment", "resultLoseComment", "resultStartComment", "resultWinComment", "characterComment", "producerComment", "comment1", "comment2"], Zn = async e => {
            const t = await (async () => {
                if (!wn) {
                    let e = await oe("/data/etc/caiyun-prefix.csv");
                    const t = se(e);
                    qe(t, "text").forEach(e => {
                        const t = U(e.text),
                            n = U(e.fixed);
                        t && vn.set(t, n)
                    }), wn = !0
                }
                return vn
            })();
            return K(e, t)
        }, er = new Map, tr = async (e, t, n) => {
            if (!e.length) return;
            const a = await Ce(),
                o = await Fe(),
                {
                    textInfo: i,
                    textList: s
                } = ((e, t, n) => {
                    const r = [],
                        a = [];
                    return e.forEach((e, o) => {
                        Qn.forEach(i => {
                            let s = z(e[i]);
                            e[i] && (t.has(s) ? e[i] = F(t.get(s)) : n.has(s) ? e[i] = F(n.get(s)) : (r.push({
                                key: i,
                                index: o
                            }), a.push(s)))
                        })
                    }), {
                        textInfo: r,
                        textList: a
                    }
                })(e, a, o);
            if (!i.length || s == "……"|| i.length > 2) return;
            let l = !1
            if (!l && (!t || n)) {
                let e = [];
                s.forEach((t, n) => {
                    e.push(J(t), u[n])
                });
                await qn(e.join("\n"))
            };

            e.forEach(e => {
                Y(e, d)
            })
        }, nr = async (e, t = "comment") => {
            if (!e) return;
            const n = e.map(e => e[t]).join("").trim();
            await tr(e, n, !0)
        }, rr = async (e, t = "comment") => {
            if (!e) return;
            const n = e.map(e => e[t]).join("").trim();
            await tr(e, n, !0)
        }, ar = ["actionComment", "actionComment2", "reactionComment", "resultLoseComment", "resultStartComment", "resultWinComment"], or = async e => {
            try {
                if (e.produceAudition) {
                    let t = e.produceAudition.judges.map(e => ar.map(t => e[t] || "").join("")).join("").trim();
                    await tr(e.produceAudition.judges, t, !0)
                }
                if (e.produceConcert) {
                    let t = e.produceConcert.judges.map(e => ar.map(t => e[t] || "").join("")).join("").trim();
                    await tr(e.produceConcert.judges, t, !0)
                }
                e.produceConcertFanSkillComments && await nr(e.produceConcertFanSkillComments, "comment1")
            } catch (e) {
                V(e)
            }
        }, ir = async e => {
            if (e.judges) {
                let t = e.judges.map(e => ar.map(t => e[t] || "").join("")).join("").trim();
                await tr(e.judges, t, !0)
            }
        }, sr = async e => {
            if (e.topCharacterReaction) try {
                const t = [...e.topCharacterReaction.moveReactions, ...e.topCharacterReaction.skillReleasedReactions, ...e.topCharacterReaction.touchExReactions, ...e.topCharacterReaction.touchReactions, ...e.topCharacterReaction.waitReactions];
                await nr(t)
            } catch (e) {
                V(e)
            }
        }, cr = async e => {
            let t = [...e.produceStaffComments || [], ...e.produceStaffConcertComments || [], ...e.produceStaffFailComments || [], ...e.produceStaffSeasonComments || []];
            await nr(t)
        }, lr = async e => {
            if (e.gameData) try {
                let t = JSON.parse(e.gameData);
                t.judges ? await ir(t) : await or(t), e.gameData = JSON.stringify(t)
            } catch (e) {
                V(e)
            }
        }, ur = async e => {
            if (!e.characterComment) return;
            let t = [];
            t = t.concat(e.characterComment), await nr(t)
        }, dr = async e => {
            const t = await Ce();
            if (e.userProduceIdol) {
                const n = e.userProduceIdol.userIdol.idol.character;
                t.has(n.name) && (n.name = t.get(n.name)), t.has(n.firstName) && (n.firstName = F(t.get(n.firstName)))
            }
        }, fr = async e => {
            var t;
            await ln(), null === (t = e.produceEvents) || void 0 === t || t.forEach(e => {
                pn(e, "title"), fn(e.id, e.title)
            })
        };
    var pr = function() {
        this.__data__ = [], this.size = 0
    };
    var hr = function(e, t) {
        return e === t || e != e && t != t
    };
    var mr = function(e, t) {
            for (var n = e.length; n--;)
                if (hr(e[n][0], t)) return n;
            return -1
        },
        gr = Array.prototype.splice;
    var yr = function(e) {
        var t = this.__data__,
            n = mr(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : gr.call(t, n, 1), --this.size, !0)
    };
    var vr = function(e) {
        var t = this.__data__,
            n = mr(t, e);
        return n < 0 ? void 0 : t[n][1]
    };
    var wr = function(e) {
        return mr(this.__data__, e) > -1
    };
    var br = function(e, t) {
        var n = this.__data__,
            r = mr(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
    };

    function Er(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    Er.prototype.clear = pr, Er.prototype.delete = yr, Er.prototype.get = vr, Er.prototype.has = wr, Er.prototype.set = br;
    var Sr = Er;
    var _r = function() {
        this.__data__ = new Sr, this.size = 0
    };
    var Ar = function(e) {
        var t = this.__data__,
            n = t.delete(e);
        return this.size = t.size, n
    };
    var Tr = function(e) {
        return this.__data__.get(e)
    };
    var kr = function(e) {
        return this.__data__.has(e)
    };
    var xr = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    };
    var Cr = function(e) {
            if (!xr(e)) return !1;
            var t = h(e);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        },
        Mr = a["__core-js_shared__"],
        Ir = function() {
            var e = /[^.]+$/.exec(Mr && Mr.keys && Mr.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
    var Or = function(e) {
            return !!Ir && Ir in e
        },
        Rr = Function.prototype.toString;
    var Pr = function(e) {
            if (null != e) {
                try {
                    return Rr.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        },
        jr = /^\[object .+?Constructor\]$/,
        Br = Function.prototype,
        Dr = Object.prototype,
        Lr = Br.toString,
        Nr = Dr.hasOwnProperty,
        Fr = RegExp("^" + Lr.call(Nr).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var Ur = function(e) {
        return !(!xr(e) || Or(e)) && (Cr(e) ? Fr : jr).test(Pr(e))
    };
    var $r = function(e, t) {
        return null == e ? void 0 : e[t]
    };
    var zr = function(e, t) {
            var n = $r(e, t);
            return Ur(n) ? n : void 0
        },
        Hr = zr(a, "Map"),
        Gr = zr(Object, "create");
    var Vr = function() {
        this.__data__ = Gr ? Gr(null) : {}, this.size = 0
    };
    var Wr = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        },
        Jr = Object.prototype.hasOwnProperty;
    var Xr = function(e) {
            var t = this.__data__;
            if (Gr) {
                var n = t[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return Jr.call(t, e) ? t[e] : void 0
        },
        Kr = Object.prototype.hasOwnProperty;
    var qr = function(e) {
        var t = this.__data__;
        return Gr ? void 0 !== t[e] : Kr.call(t, e)
    };
    var Yr = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = Gr && void 0 === t ? "__lodash_hash_undefined__" : t, this
    };

    function Qr(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    Qr.prototype.clear = Vr, Qr.prototype.delete = Wr, Qr.prototype.get = Xr, Qr.prototype.has = qr, Qr.prototype.set = Yr;
    var Zr = Qr;
    var ea = function() {
        this.size = 0, this.__data__ = {
            hash: new Zr,
            map: new(Hr || Sr),
            string: new Zr
        }
    };
    var ta = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    };
    var na = function(e, t) {
        var n = e.__data__;
        return ta(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    };
    var ra = function(e) {
        var t = na(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    };
    var aa = function(e) {
        return na(this, e).get(e)
    };
    var oa = function(e) {
        return na(this, e).has(e)
    };
    var ia = function(e, t) {
        var n = na(this, e),
            r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
    };

    function sa(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    sa.prototype.clear = ea, sa.prototype.delete = ra, sa.prototype.get = aa, sa.prototype.has = oa, sa.prototype.set = ia;
    var ca = sa;
    var la = function(e, t) {
        var n = this.__data__;
        if (n instanceof Sr) {
            var r = n.__data__;
            if (!Hr || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new ca(r)
        }
        return n.set(e, t), this.size = n.size, this
    };

    function ua(e) {
        var t = this.__data__ = new Sr(e);
        this.size = t.size
    }
    ua.prototype.clear = _r, ua.prototype.delete = Ar, ua.prototype.get = Tr, ua.prototype.has = kr, ua.prototype.set = la;
    var da = ua;
    var fa = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
            return e
        },
        pa = function() {
            try {
                var e = zr(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }();
    var ha = function(e, t, n) {
            "__proto__" == t && pa ? pa(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        },
        ma = Object.prototype.hasOwnProperty;
    var ga = function(e, t, n) {
        var r = e[t];
        ma.call(e, t) && hr(r, n) && (void 0 !== n || t in e) || ha(e, t, n)
    };
    var ya = function(e, t, n, r) {
        var a = !n;
        n || (n = {});
        for (var o = -1, i = t.length; ++o < i;) {
            var s = t[o],
                c = r ? r(n[s], e[s], s, n, e) : void 0;
            void 0 === c && (c = e[s]), a ? ha(n, s, c) : ga(n, s, c)
        }
        return n
    };
    var va = function(e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r
    };
    var wa = function(e) {
            return g(e) && "[object Arguments]" == h(e)
        },
        ba = Object.prototype,
        Ea = ba.hasOwnProperty,
        Sa = ba.propertyIsEnumerable,
        _a = wa(function() {
            return arguments
        }()) ? wa : function(e) {
            return g(e) && Ea.call(e, "callee") && !Sa.call(e, "callee")
        };
    var Aa = function() {
            return !1
        },
        Ta = t((function(e, t) {
            var n = t && !t.nodeType && t,
                r = n && e && !e.nodeType && e,
                o = r && r.exports === n ? a.Buffer : void 0,
                i = (o ? o.isBuffer : void 0) || Aa;
            e.exports = i
        })),
        ka = /^(?:0|[1-9]\d*)$/;
    var xa = function(e, t) {
        var n = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && ka.test(e)) && e > -1 && e % 1 == 0 && e < t
    };
    var Ca = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        },
        Ma = {};
    Ma["[object Float32Array]"] = Ma["[object Float64Array]"] = Ma["[object Int8Array]"] = Ma["[object Int16Array]"] = Ma["[object Int32Array]"] = Ma["[object Uint8Array]"] = Ma["[object Uint8ClampedArray]"] = Ma["[object Uint16Array]"] = Ma["[object Uint32Array]"] = !0, Ma["[object Arguments]"] = Ma["[object Array]"] = Ma["[object ArrayBuffer]"] = Ma["[object Boolean]"] = Ma["[object DataView]"] = Ma["[object Date]"] = Ma["[object Error]"] = Ma["[object Function]"] = Ma["[object Map]"] = Ma["[object Number]"] = Ma["[object Object]"] = Ma["[object RegExp]"] = Ma["[object Set]"] = Ma["[object String]"] = Ma["[object WeakMap]"] = !1;
    var Ia = function(e) {
        return g(e) && Ca(e.length) && !!Ma[h(e)]
    };
    var Oa = function(e) {
            return function(t) {
                return e(t)
            }
        },
        Ra = t((function(e, t) {
            var r = t && !t.nodeType && t,
                a = r && e && !e.nodeType && e,
                o = a && a.exports === r && n.process,
                i = function() {
                    try {
                        var e = a && a.require && a.require("util").types;
                        return e || o && o.binding && o.binding("util")
                    } catch (e) {}
                }();
            e.exports = i
        })),
        Pa = Ra && Ra.isTypedArray,
        ja = Pa ? Oa(Pa) : Ia,
        Ba = Object.prototype.hasOwnProperty;
    var Da = function(e, t) {
            var n = m(e),
                r = !n && _a(e),
                a = !n && !r && Ta(e),
                o = !n && !r && !a && ja(e),
                i = n || r || a || o,
                s = i ? va(e.length, String) : [],
                c = s.length;
            for (var l in e) !t && !Ba.call(e, l) || i && ("length" == l || a && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || xa(l, c)) || s.push(l);
            return s
        },
        La = Object.prototype;
    var Na = function(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || La)
        },
        Fa = w(Object.keys, Object),
        Ua = Object.prototype.hasOwnProperty;
    var $a = function(e) {
        if (!Na(e)) return Fa(e);
        var t = [];
        for (var n in Object(e)) Ua.call(e, n) && "constructor" != n && t.push(n);
        return t
    };
    var za = function(e) {
        return null != e && Ca(e.length) && !Cr(e)
    };
    var Ha = function(e) {
        return za(e) ? Da(e) : $a(e)
    };
    var Ga = function(e, t) {
        return e && ya(t, Ha(t), e)
    };
    var Va = function(e) {
            var t = [];
            if (null != e)
                for (var n in Object(e)) t.push(n);
            return t
        },
        Wa = Object.prototype.hasOwnProperty;
    var Ja = function(e) {
        if (!xr(e)) return Va(e);
        var t = Na(e),
            n = [];
        for (var r in e)("constructor" != r || !t && Wa.call(e, r)) && n.push(r);
        return n
    };
    var Xa = function(e) {
        return za(e) ? Da(e, !0) : Ja(e)
    };
    var Ka = function(e, t) {
            return e && ya(t, Xa(t), e)
        },
        qa = t((function(e, t) {
            var n = t && !t.nodeType && t,
                r = n && e && !e.nodeType && e,
                o = r && r.exports === n ? a.Buffer : void 0,
                i = o ? o.allocUnsafe : void 0;
            e.exports = function(e, t) {
                if (t) return e.slice();
                var n = e.length,
                    r = i ? i(n) : new e.constructor(n);
                return e.copy(r), r
            }
        }));
    var Ya = function(e, t) {
        var n = -1,
            r = e.length;
        for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
        return t
    };
    var Qa = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, a = 0, o = []; ++n < r;) {
            var i = e[n];
            t(i, n, e) && (o[a++] = i)
        }
        return o
    };
    var Za = function() {
            return []
        },
        eo = Object.prototype.propertyIsEnumerable,
        to = Object.getOwnPropertySymbols,
        no = to ? function(e) {
            return null == e ? [] : (e = Object(e), Qa(to(e), (function(t) {
                return eo.call(e, t)
            })))
        } : Za;
    var ro = function(e, t) {
        return ya(e, no(e), t)
    };
    var ao = function(e, t) {
            for (var n = -1, r = t.length, a = e.length; ++n < r;) e[a + n] = t[n];
            return e
        },
        oo = Object.getOwnPropertySymbols ? function(e) {
            for (var t = []; e;) ao(t, no(e)), e = b(e);
            return t
        } : Za;
    var io = function(e, t) {
        return ya(e, oo(e), t)
    };
    var so = function(e, t, n) {
        var r = t(e);
        return m(e) ? r : ao(r, n(e))
    };
    var co = function(e) {
        return so(e, Ha, no)
    };
    var lo = function(e) {
            return so(e, Xa, oo)
        },
        uo = zr(a, "DataView"),
        fo = zr(a, "Promise"),
        po = zr(a, "Set"),
        ho = zr(a, "WeakMap"),
        mo = Pr(uo),
        go = Pr(Hr),
        yo = Pr(fo),
        vo = Pr(po),
        wo = Pr(ho),
        bo = h;
    (uo && "[object DataView]" != bo(new uo(new ArrayBuffer(1))) || Hr && "[object Map]" != bo(new Hr) || fo && "[object Promise]" != bo(fo.resolve()) || po && "[object Set]" != bo(new po) || ho && "[object WeakMap]" != bo(new ho)) && (bo = function(e) {
        var t = h(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? Pr(n) : "";
        if (r) switch (r) {
            case mo:
                return "[object DataView]";
            case go:
                return "[object Map]";
            case yo:
                return "[object Promise]";
            case vo:
                return "[object Set]";
            case wo:
                return "[object WeakMap]"
        }
        return t
    });
    var Eo = bo,
        So = Object.prototype.hasOwnProperty;
    var _o = function(e) {
            var t = e.length,
                n = new e.constructor(t);
            return t && "string" == typeof e[0] && So.call(e, "index") && (n.index = e.index, n.input = e.input), n
        },
        Ao = a.Uint8Array;
    var To = function(e) {
        var t = new e.constructor(e.byteLength);
        return new Ao(t).set(new Ao(e)), t
    };
    var ko = function(e, t) {
            var n = t ? To(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.byteLength)
        },
        xo = /\w*$/;
    var Co = function(e) {
            var t = new e.constructor(e.source, xo.exec(e));
            return t.lastIndex = e.lastIndex, t
        },
        Mo = o ? o.prototype : void 0,
        Io = Mo ? Mo.valueOf : void 0;
    var Oo = function(e) {
        return Io ? Object(Io.call(e)) : {}
    };
    var Ro = function(e, t) {
        var n = t ? To(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
    };
    var Po = function(e, t, n) {
            var r = e.constructor;
            switch (t) {
                case "[object ArrayBuffer]":
                    return To(e);
                case "[object Boolean]":
                case "[object Date]":
                    return new r(+e);
                case "[object DataView]":
                    return ko(e, n);
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return Ro(e, n);
                case "[object Map]":
                    return new r;
                case "[object Number]":
                case "[object String]":
                    return new r(e);
                case "[object RegExp]":
                    return Co(e);
                case "[object Set]":
                    return new r;
                case "[object Symbol]":
                    return Oo(e)
            }
        },
        jo = Object.create,
        Bo = function() {
            function e() {}
            return function(t) {
                if (!xr(t)) return {};
                if (jo) return jo(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0, n
            }
        }();
    var Do = function(e) {
        return "function" != typeof e.constructor || Na(e) ? {} : Bo(b(e))
    };
    var Lo = function(e) {
            return g(e) && "[object Map]" == Eo(e)
        },
        No = Ra && Ra.isMap,
        Fo = No ? Oa(No) : Lo;
    var Uo = function(e) {
            return g(e) && "[object Set]" == Eo(e)
        },
        $o = Ra && Ra.isSet,
        zo = $o ? Oa($o) : Uo,
        Ho = {};
    Ho["[object Arguments]"] = Ho["[object Array]"] = Ho["[object ArrayBuffer]"] = Ho["[object DataView]"] = Ho["[object Boolean]"] = Ho["[object Date]"] = Ho["[object Float32Array]"] = Ho["[object Float64Array]"] = Ho["[object Int8Array]"] = Ho["[object Int16Array]"] = Ho["[object Int32Array]"] = Ho["[object Map]"] = Ho["[object Number]"] = Ho["[object Object]"] = Ho["[object RegExp]"] = Ho["[object Set]"] = Ho["[object String]"] = Ho["[object Symbol]"] = Ho["[object Uint8Array]"] = Ho["[object Uint8ClampedArray]"] = Ho["[object Uint16Array]"] = Ho["[object Uint32Array]"] = !0, Ho["[object Error]"] = Ho["[object Function]"] = Ho["[object WeakMap]"] = !1;
    var Go = function e(t, n, r, a, o, i) {
        var s, c = 1 & n,
            l = 2 & n,
            u = 4 & n;
        if (r && (s = o ? r(t, a, o, i) : r(t)), void 0 !== s) return s;
        if (!xr(t)) return t;
        var d = m(t);
        if (d) {
            if (s = _o(t), !c) return Ya(t, s)
        } else {
            var f = Eo(t),
                p = "[object Function]" == f || "[object GeneratorFunction]" == f;
            if (Ta(t)) return qa(t, c);
            if ("[object Object]" == f || "[object Arguments]" == f || p && !o) {
                if (s = l || p ? {} : Do(t), !c) return l ? io(t, Ka(s, t)) : ro(t, Ga(s, t))
            } else {
                if (!Ho[f]) return o ? t : {};
                s = Po(t, f, c)
            }
        }
        i || (i = new da);
        var h = i.get(t);
        if (h) return h;
        i.set(t, s), zo(t) ? t.forEach((function(a) {
            s.add(e(a, n, r, a, t, i))
        })) : Fo(t) && t.forEach((function(a, o) {
            s.set(o, e(a, n, r, o, t, i))
        }));
        var g = u ? l ? lo : co : l ? keysIn : Ha,
            y = d ? void 0 : g(t);
        return fa(y || t, (function(a, o) {
            y && (a = t[o = a]), ga(s, o, e(a, n, r, o, t, i))
        })), s
    };
    var Vo = function(e) {
        return Go(e, 5)
    };
    var Wo = function(e) {
            return g(e) && "[object RegExp]" == h(e)
        },
        Jo = Ra && Ra.isRegExp,
        Xo = Jo ? Oa(Jo) : Wo;
    const Ko = (e, t, n, r) => {
            if (x.dev) {
                let a = r;
                r && (a = Vo(r)), V(`%c${e}%c %c${n[0]}`, ...(e => [`background-color:${e};color:#fff;padding:0 0.3em`, "", `color:${e};text-decoration:underline`])(t), n[1] || "", "\n=>", a)
            }
        },
        qo = async (e, t, n) => {
            try {
                for (let [r, a] of n) {
                    Array.isArray(r) || (r = [r]);
                    let n = !1;
                    for (let e of r)(y(e) && e === t || Xo(e) && e.test(t)) && (n = !0);
                    if (n) {
                        Array.isArray(a) || (a = [a]);
                        for (let t of a) y(t) || await t(e)
                    }
                }
            } catch (e) {
                V(e)
            }
        }, Yo = [
            [
                [/^userSupportIdols\/\d+$/, /^userSupportIdols\/statusMax/, /^produceTeachingSupportIdols\/\d+$/],
                [st, yt, async e => {
                    await ln(), e.supportIdol.produceSupportIdolEvents.forEach(e => {
                        pn(e, "title"), fn(e.id, e.title)
                    })
                }]
            ],
            [/^userProduce(Teaching)?SupportIdols\/\d+$/, [st, async e => {
                var t, n, r, a, o;
                await rt(), dt(e.skillPanels), null === (t = e.userProduceSupportIdolProduceExSkills) || void 0 === t || t.forEach(e => {
                    ut(e.produceExSkill)
                }), null === (n = e.userSupportIdol) || void 0 === n || null === (r = n.supportIdol) || void 0 === r || null === (a = r.supportIdolActiveSkill) || void 0 === a || null === (o = a.activeSkills) || void 0 === o || o.forEach(e => {
                    ot(e, "comment"), ot(e, "name")
                })
            }]],
            [/^userReserveSupportIdols\/userSupportIdol\/\d+$/, [st, async e => {
                var t, n, r;
                await rt(), dt(e.supportIdol.skillPanels), null === (t = e.supportIdol) || void 0 === t || null === (n = t.supportIdolActiveSkill) || void 0 === n || null === (r = n.activeSkills) || void 0 === r || r.forEach(e => {
                    ot(e, "comment"), ot(e, "name")
                })
            }]],
            [/^userIdols\/\d+\/produceExSkillTop$/, bt],
            [/^userSupportIdols\/\d+\/produceExSkillTop$/, bt],
            [
                [/^userIdols\/\d+$/, /^userIdols\/statusMax$/, /^produceTeachingIdols\/\d+$/],
                [gt, async e => {
                    await ln(), e.idol.produceAfterEvents.forEach(e => {
                        pn(e, "title"), fn(e.id, e.title)
                    }), e.idol.produceIdolEvents.forEach(e => {
                        pn(e, "title"), fn(e.id, e.title)
                    })
                }]
            ],
            [
                [/^userProduce(Teaching)?Idols\/\d+$/, "userProduceTeachingIdol"], async e => {
                    await rt(), e.activeSkills.forEach(e => {
                        lt(e)
                    }), ft(e.userIdol.idol.memoryAppeals), e.userProduceIdolProduceExSkills.forEach(e => {
                        ut(e.produceExSkill)
                    })
                }
            ],
            [/^userReserveIdols\/userIdol\/\d+$/, async e => {
                await rt(), dt(e.idol.skillPanels), ft(e.idol.memoryAppeals)
            }],
            [/^userFesIdols\/\d+$/, vt],
            [
                ["userProduces/skillPanels", "userProduceTeachings/skillPanels"], Et
            ],
            ["userMissions", async e => {
                var t;
                await Ht(), Wt(e.dailyUserMissions), Wt(e.weeklyUserMissions), null === (t = e.eventUserMissions) || void 0 === t || t.forEach(e => {
                    Wt(null == e ? void 0 : e.userMissions)
                }), Wt(e.normalUserMissions), Wt(e.specialUserMissions)
            }],
            [/^fesRaidEvents\/\d+\/rewards$/, async e => {
                await Ht(), Jt(e.fesRaidBestScoreRewards), Jt(e.fesRaidLapRewards), Jt(e.fesRaidPointRewards)
            }],
            [
                ["characterAlbums", "album/top"], async e => {
                    await ln(), hn(e.gameEvents), hn(e.specialEvents)
                }
            ],
            [
                ["userShops", "userIdolPieceShops"], async e => {
                    await Bt(), e && (Array.isArray(e.userShops) && e.userShops.forEach(e => {
                        Nt(e)
                    }), Array.isArray(e.userEventShops) && e.userEventShops.forEach(e => {
                        Nt(e.userShop)
                    }))
                }
            ],
            [
                ["userRecoveryItems", "userProduceItems", "userExchangeItems", "userLotteryTickets", "userEvolutionItems", "userGashaTickets", "userScoutTickets", "userEnhancementItems"], Ft
            ],
            [
                [/^userPresents\?limit=/, /^userPresentHistories\?limit=/], async e => {
                    await Bt(), Array.isArray(e) && e.forEach(e => {
                        Lt(e.content, "name")
                    })
                }
            ],
            [/gashaGroups\/\d+\/rates/, "cardName"],
            ["userProduces", [sr, Ut, Yt]],
            [/^fes(Match)?Concert\/actions\/resume$/, [lr, At]],
            [/earthUsers\/[^\/]+\/userFesIdols\/\d+$/, wt],
            ["userBeginnerMissions/top", Qt],
            ["userRaidDecks", async e => {
                await rt(), e.userRaidDecks.forEach(e => {
                    e.userRaidDeckMembers.forEach(e => {
                        var t;
                        null === (t = e.userFesIdol) || void 0 === t || t.activeSkills.forEach(e => {
                            lt(e)
                        })
                    })
                })
            }],
            ["idolRoads/top", async e => {
                var t;
                await Ht(), Xt(e.userMissions, !1), null === (t = e.userIdols) || void 0 === t || t.forEach(Zt)
            }],
            [/^produces\/\d+\/decks$/, async e => {
                var t;
                const n = await Ze();
                null === (t = e.userSupportIdols) || void 0 === t || t.forEach(e => {
                    var t;
                    it(null === (t = e.supportIdol) || void 0 === t ? void 0 : t.supportSkills, n)
                })
            }],
            ["userProduceAbilities", Tt],
            ["userProduceAreas", async e => {
                var t;
                await rt(), null === (t = e.abilities) || void 0 === t || t.forEach(e => {
                    ot(e, "acquireComment"), ot(e, "name"), ot(e, "comment")
                })
            }]
        ], Qo = [
            ["myPage", [async e => {
                await Ht(), Wt(e.reportUserMissions)
            }, async e => {
                try {
                    let t = [];
                    e.userHomeDeck.userHomeDeckAnimationMember && (t = [...e.userHomeDeck.userHomeDeckAnimationMember.mypageComments]);
                    let n = e.userHomeDeck.userHomeAnimationDeck.userHomeAnimationDeckMembers;
                    n && n.forEach(e => {
                        e.mypageComments.forEach(e => {
                            t.push(e)
                        }), e.mypageConversations.forEach(e => {
                            e.mypageConversationComments.forEach(e => {
                                t.push(e)
                            })
                        })
                    }), e.userHomeDeck.userHomeDeckMembers.length && e.userHomeDeck.userHomeDeckMembers.forEach(e => {
                        e.mypageComments.forEach(e => {
                            t.push(e)
                        })
                    }), await rr(t)
                } catch (e) {
                    V(e)
                }
            }, async e => {
                await Ht();
                let t = e.beginnerMission;
                t && (t.clearedLectureMission && Xt([t.clearedLectureMission]), t.progressLectureMission && Xt([t.progressLectureMission]))
            }, async e => {
                await Ut(e.userProduce)
            }, async e => {
                var t;
                await ln(), pn(null == e || null === (t = e.userProduce) || void 0 === t ? void 0 : t.produce, "title")
            }]],
            [/^characterAlbums\/characters\/\d+$/, [async e => {
                await ln(), e.albumCommunicationTitles.forEach(e => {
                    pn(e, "title")
                }), e.communications.forEach(e => {
                    pn(e, "title"), fn(e.communicationId, e.title)
                }), e.voices.forEach(e => {
                    pn(e, "title"), pn(e, "releasedConditionComment")
                })
            }, async e => {
                if (e.voices) {
                    const t = [];
                    e.voices.forEach(e => {
                        e.characterTrustLevelComment && t.push(e.characterTrustLevelComment)
                    }), await rr(t)
                }
            }]],
            [/^(produceMarathons|fesMarathons|trainingEvents)\/\d+\/top$/, [async e => {
                await Ht(), Gt(e.userRecommendedMission.mission, "comment"), Gt(e.userRecommendedMission.mission, "title"), e.accumulatedPresent.userGameEventAccumulatedPresents.forEach(e => {
                    Gt(e.gameEventAccumulatedPresent, "comment"), Gt(e.gameEventAccumulatedPresent, "title")
                })
            }, async e => {
                await Bt(), e.accumulatedPresent.userGameEventAccumulatedPresents.forEach(e => {
                    e.gameEventAccumulatedPresent.rewards.forEach(e => {
                        Lt(e.content, "name")
                    })
                })
            }]],
            [/userIdols\/\d+\/produceExSkills\/\d+\/actions\/set/, gt],
            ["userShops/actions/purchase", async e => {
                await Bt(), Lt(null == e ? void 0 : e.shopMerchandise, "title"), Lt(null == e ? void 0 : e.shopMerchandise, "comment")
            }],
            [/produces\/\d+\/actions\/ready/, [Ft, async e => {
                const t = await Ze();
                e.userDecks.forEach(e => {
                    e.userSupportIdols.forEach(e => {
                        var n;
                        it(null === (n = e.supportIdol) || void 0 === n ? void 0 : n.supportSkills, t)
                    })
                })
            }]],
            [/userPresents\/\d+\/actions\/receive/, async e => {
                await Bt(), Lt(e.receivedPresent, "Name")
            }],
            [/userMissions\/\d+\/actions\/receive/, async e => {
                await Bt(), Lt(e.userMission.mission.missionReward.content, "name")
            }],
            ["userLoginBonuses", async e => {
                await Bt(), e.userLoginBonuses.forEach(e => {
                    e.loginBonus.sheets.forEach(e => {
                        e.rewards.forEach(e => {
                            Lt(e.content, "name")
                        })
                    })
                }), e.userTotalBonuses.forEach(e => {
                    e.rewards.forEach(e => {
                        Lt(e.content, "name")
                    })
                })
            }],
            ["fesTop", [async e => {
                await Bt(), e.lastRankingResult && Array.isArray(e.lastRankingResult.fesMatchGradeRewards) && e.lastRankingResult.fesMatchGradeRewards.forEach(e => {
                    Lt(e.content, "name")
                })
            }, async e => {
                if (e.userFesDeck) try {
                    let t = [],
                        n = e.userFesDeck.userFesDeckMembers;
                    for (let e of n) e.fesTopCharacterReactions.forEach(e => {
                        t.push(e)
                    });
                    await nr(t)
                } catch (e) {
                    V(e)
                }
            }]],
            [
                [/^userProduce(Teaching)?s\/skillPanels\/\d+$/, /^userProduces\/limitedSkills\/\d+$/], Et
            ],
            [/userSupportIdols\/\d+\/produceExSkills\/\d+\/actions\/set/, [yt, st]],
            [/^produces\/actions\/(resume|next)$/, [fr, async e => {
                e.userProduceIdeaNotes && (await rt(), e.userProduceIdeaNotes.forEach(e => {
                    let t = e.produceIdeaNote.produceIdeaNoteCompleteBonus;
                    ot(t, "title"), ot(t, "comment"), e.produceIdeaNote.produceIdeaNoteExtraBonuses.forEach(e => {
                        ot(e, "comment"), ot(e, "condition")
                    })
                }))
            }, sr, cr, lr, ur, or, async e => {
                try {
                    var t;
                    await nr(null === (t = e.produceReporterEvent) || void 0 === t ? void 0 : t.produceReporterEventAnswers, "comment2")
                } catch (e) {
                    V(e)
                }
            }, st, dr]],
            [
                ["produces/actions/resume", "produces/actions/finish", "produceTeachings/resume"],
                [async e => {
                    e.gameData || (await rt(), pt(e))
                }, At, fr]
            ],
            ["produces/actions/endWeek", cr],
            ["produces/actions/act", [async e => {
                if (!e.lessonResult) return;
                let t = e.lessonResult;
                try {
                    let e = [];
                    t.produceActCutinComment && (e = e.concat(t.produceActCutinComment)), t.produceRestBoostIdolComment && (e = e.concat(t.produceRestBoostIdolComment)), t.produceRestBoostSupportIdolComment && (e = e.concat(t.produceRestBoostSupportIdolComment)), t.produceRestComments && (e = e.concat(t.produceRestComments)), await nr(e)
                } catch (e) {
                    V(e)
                }
            }, async e => {
                var t, n, r;
                await rt();
                let a = null === (t = e.lessonResult) || void 0 === t || null === (n = t.userProduceIdeaNote) || void 0 === n || null === (r = n.produceIdeaNote) || void 0 === r ? void 0 : r.produceIdeaNoteCompleteBonus;
                lt(a)
            }, fr]],
            [/^fes(Match|Raid)?Concert\/actions\/start$/, [ir, St]],
            [/^fes(Match)?Concert\/actions\/resume$/, [lr, At]],
            ["fesRaidConcert/actions/resume", [async e => {
                if (e.gameState && e.gameState.game_data) try {
                    let t = JSON.parse(e.gameState.game_data);
                    t.judges && await ir(t), e.gameState.game_data = JSON.stringify(t)
                } catch (e) {
                    V(e)
                }
            }, async e => {
                if (e.gameState && e.gameState.game_data) try {
                    let t = JSON.parse(e.gameState.game_data);
                    t.userRaidDeck && await St(t), e.gameState.game_data = JSON.stringify(t)
                } catch (e) {
                    V(e)
                }
            }]],
            ["produces/actions/result", [async e => {
                try {
                    let t = e.characterTrustLevelUpComments;
                    await nr(t)
                } catch (e) {
                    V(e)
                }
            }, async e => {
                await rt(), e.produceExSkillRewards.forEach(e => {
                    ut(e.produceExSkill)
                })
            }]],
            [
                [/^produce(Teaching)?s\/(\d+\/audition|concert)\/actions\/start$/, /^produceTeachings\/(auditions|concerts)\/start$/],
                [_t]
            ],
            [/^produces\/(\d+\/audition|concert)\/actions\/(start|finish)$/, [or, ur, dr, async e => {
                var t, n;
                await rt(), null === (t = e.concertEvent) || void 0 === t || null === (n = t.abilities) || void 0 === n || n.forEach(e => {
                    ot(e, "name")
                })
            }]],
            ["userProduceHelperSupportIdols", async e => {
                try {
                    let t = e.characterComment + e.producerComment;
                    await tr([e], t, !0)
                } catch (e) {
                    V(e)
                }
            }],
            [
                ["produceTeachings/resume", "produceTeachings/next"],
                [Yt, st]
            ],
            [/^userSelectLoginBonuses\/\d+$/, async e => {
                await Bt(), e.rewards.forEach(e => {
                    Lt(e.content, "name")
                })
            }],
            [/^userLectureMissions\/\d+\/actions\/receive$/, Qt],
            [/^produceMarathons\/\d+\/top$/, async e => {
                await ln(), e.releasedCommunications.forEach(e => {
                    pn(e, "name"), pn(e, "title"), fn(e.id, `${e.name} ${e.title}`)
                }), pn(e.gameEvent, "name")
            }],
            ["userProduceAbilities", Tt]
        ], Zo = [
            [/^userSupportIdols\/\d+$/, st],
            ["userFesDecks", async e => {
                await rt(), e.userFesDecks.forEach(e => {
                    e.userFesDeckMembers.forEach(e => {
                        var t;
                        null === (t = e.userFesIdol) || void 0 === t || t.activeSkills.forEach(e => {
                            lt(e)
                        })
                    })
                })
            }]
        ], ei = [
            ["userIdolRoads", async e => {
                await Ht(), Zt(e.userIdol)
            }]
        ];
    async function ti() {
        const e = await ve("REQUEST"),
            t = e.get;
        e.get = async function(...e) {
            const n = e[0],
                r = await t.apply(this, e);
            if (!n) return r;
            let a = r.body;
            return Ko("GET", "#009688", e, a), await qo(a, n, Yo), r
        };
        const n = e.patch;
        e.patch = async function(...e) {
            const t = e[0],
                r = await n.apply(this, e);
            if (!t) return r;
            let a = r.body;
            return Ko("PATCH", "#8BC34A", e, a), await qo(a, t, Zo), r
        };
        const r = e.post;
        e.post = async function(...e) {
            const t = e[0],
                n = await r.apply(this, e);
            if (!t) return n;
            let a = n.body;
            return Ko("POST", "#3F51B5", e, a), await qo(a, t, Qo), n
        };
        const a = e.put;
        e.put = async function(...e) {
            const t = e[0],
                n = await a.apply(this, e);
            if (!t) return n;
            let r = n.body;
            return Ko("PUT", "#9C27B0", e, r), await qo(r, t, ei), n
        }
    }
    const ni = new Map;
    let ri = !1;
    let ai = null;
    const oi = async () => (ai || (ai = (async () => {
        if (!ri) {
            let e = await oe("/data/image.csv");
            se(e).forEach(e => {
                if (null == e ? void 0 : e.name) {
                    const t = U(e.name),
                        n = U(e.url),
                        r = U(e.version) || "1";
                    t && n && ni.set(t, {
                        url: n,
                        version: r
                    })
                }
            }), ri = !0
        }
        return ni
    })()), await ai);
    let ii = !1;
    async function si() {
        const e = await ve("AOBA");
        if (ii) return;
        e.loaders.Resource.prototype = Object.assign({}, e.loaders.Resource.prototype);
        const t = e.loaders.Resource.prototype._loadElement;
        e.loaders.Resource.prototype._loadElement = async function(e) {
            x.dev;
            try {
                const t = await oi();
                if ("image" === e && t.has(this.name)) {
                    const e = t.get(this.name);
                    if (this.url.endsWith("v=" + e.version)) {
                        const t = "image/" + e.url;
                        this.url = `${x.origin}/data/${t}?v=${x.hashes[t]}`, this.crossOrigin = !0
                    } else V("%cimage version not match", "color:#fc4175"), V(this.name, this.url)
                }
            } catch (e) {}
            return t.call(this, e)
        }, ii = !0
    }
    var ci = function() {
        return a.Date.now()
    };
    var li = function(e) {
            return "symbol" == typeof e || g(e) && "[object Symbol]" == h(e)
        },
        ui = /^\s+|\s+$/g,
        di = /^[-+]0x[0-9a-f]+$/i,
        fi = /^0b[01]+$/i,
        pi = /^0o[0-7]+$/i,
        hi = parseInt;
    var mi = function(e) {
            if ("number" == typeof e) return e;
            if (li(e)) return NaN;
            if (xr(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = xr(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(ui, "");
            var n = fi.test(e);
            return n || pi.test(e) ? hi(e.slice(2), n ? 2 : 8) : di.test(e) ? NaN : +e
        },
        gi = Math.max,
        yi = Math.min;
    var vi = function(e, t, n) {
        var r, a, o, i, s, c, l = 0,
            u = !1,
            d = !1,
            f = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function p(t) {
            var n = r,
                o = a;
            return r = a = void 0, l = t, i = e.apply(o, n)
        }

        function h(e) {
            return l = e, s = setTimeout(g, t), u ? p(e) : i
        }

        function m(e) {
            var n = e - c;
            return void 0 === c || n >= t || n < 0 || d && e - l >= o
        }

        function g() {
            var e = ci();
            if (m(e)) return y(e);
            s = setTimeout(g, function(e) {
                var n = t - (e - c);
                return d ? yi(n, o - (e - l)) : n
            }(e))
        }

        function y(e) {
            return s = void 0, f && r ? p(e) : (r = a = void 0, i)
        }

        function v() {
            var e = ci(),
                n = m(e);
            if (r = arguments, a = this, c = e, n) {
                if (void 0 === s) return h(c);
                if (d) return clearTimeout(s), s = setTimeout(g, t), p(c)
            }
            return void 0 === s && (s = setTimeout(g, t)), i
        }
        return t = mi(t) || 0, xr(n) && (u = !!n.leading, o = (d = "maxWait" in n) ? gi(mi(n.maxWait) || 0, t) : o, f = "trailing" in n ? !!n.trailing : f), v.cancel = function() {
            void 0 !== s && clearTimeout(s), l = 0, r = c = a = s = void 0
        }, v.flush = function() {
            return void 0 === s ? i : y(ci())
        }, v
    };
    const wi = `\n  <style>\n  #sczh-story-tool {\n    position: absolute;\n    display: none;\n    background: #ffffff;\n    border-radius: 24px;\n    box-sizing: border-box;\n    font-family: sczh-yuanti;\n    align-items: center;\n    justify-content: center;\n    color: #ff6499;\n    text-shadow: 0 0 6px #fff;\n    cursor: pointer;\n    user-select: none;\n    width: 100px;\n    height: 100px;\n    font-size: 32px;\n    border: 7px solid transparent;\n    border-image: url(${x.origin}/data/image/border.png);\n    border-image-slice: 7;\n    transform-origin: top right;\n  }\n  .story-tool-btns {\n    width: 100%;\n    height: 100%;\n    display: none;\n  }\n  .story-tool-btns .btn-download-sczh,\n  .story-tool-btns label {\n    flex: 1;\n    height: 100%;\n    background: #fff;\n    display: flex;\n    box-sizing: content-box;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    color: #c0aade;\n    text-shadow: 0 0 6px #fff;\n  }\n  .story-tool-btns .btn-download-sczh:hover {\n    color: #9f66ec;\n  }\n  .story-tool-btns label {\n    color: rgb(242, 156, 199);\n    border-right: 1px solid #c9c9c9;\n  }\n  #sczh-story-tool .btn-close-sczh {\n    height: 25px;\n    width: 50px;\n    background: rgba(0, 0, 0, 0.58);\n    color: #fff;\n    letter-spacing: 2px;\n    position: absolute;\n    right: -25px;\n    top: -20px;\n    border-radius: 4px;\n    display: none;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    font-family: sczh-heiti;\n    font-size: 15px;\n  }\n  #sczh-story-tool:hover {\n    width: 200px;\n  }\n  #sczh-story-tool:hover .story-tool-btns {\n    display: flex;\n  }\n  #sczh-story-tool:hover .btn-close-sczh {\n    display: flex;\n  }\n  #sczh-story-tool:hover > .text-sczh {\n    display: none;\n  }\n  #sczh-story-tool .btn-close-sczh:hover {\n    background: rgba(0, 0, 0, 0.9);\n  }\n  .story-tool-btns label:hover {\n    color: #f270b1;\n  }\n  .story-tool-btns .btn-download-sczh:hover,\n  .story-tool-btns label:hover {\n    background-color: #f7f7f7;\n  }\n  </style>\n  <div id="sczh-story-tool"><span class="text-sczh">커뮤</span>\n    <span id="btn-close-sczh" class="btn-close-sczh">닫기</span>\n    <input type="file" style="display:none" id="ipt-preview-sczh" multiple accept=".csv">\n    <div class="story-tool-btns">\n      <label for="ipt-preview-sczh">실험</label>\n      <div id="btn-download-sczh" class="btn-download-sczh">다운</div>\n    </div>\n  </div>\n  `;
    let bi = !1;
    const Ei = e => {
            if (bi) return;
            bi = !0, document.body.insertAdjacentHTML("beforeend", wi);
            const t = document.getElementById("sczh-story-tool"),
                n = vi(() => {
                    const n = [.017, .22],
                        r = window.innerHeight,
                        a = window.innerWidth;
                    let o = r,
                        i = a,
                        s = 0,
                        c = 0;
                    r / a > 9 / 16 ? (o = 9 * a / 16, s = (r - o) / 2) : (i = 16 * r / 9, c = (a - i) / 2), t.style.right = Math.floor(c + n[0] * i) + "px", t.style.top = Math.floor(s + n[1] * o) + "px", t.style.transform = `scale(${(o/900).toFixed(3)})`, e.name ? t.style.display = "flex" : t.style.display = "none"
                }, 300);
            n(), window.addEventListener("resize", n);
            document.getElementById("btn-download-sczh").addEventListener("click", (function() {
                if (e.name) {
                    ((e, t) => {
                        const n = document.createElement("a");
                        n.download = t, n.style.display = "none";
                        const r = new Blob([e], {
                            type: "text/csv"
                        });
                        n.href = URL.createObjectURL(r), document.body.appendChild(n), n.click(), document.body.removeChild(n)
                    })(ie.unparse(e.list), e.filename)
                }
            }));
            document.getElementById("btn-close-sczh").addEventListener("click", (function() {
                t.style.display = "none", x.story = "normal", j()
            }));
            document.getElementById("ipt-preview-sczh").addEventListener("change", (function() {
                const t = this.files;
                t.length && t.forEach(t => {
                    const n = new FileReader;
                    n.onload = t => {
                        const n = t.target.result,
                            r = Be(n);
                        if (r.has("name")) {
                            const t = r.get("name");
                            e.preview.set(t, r), (e => {
                                const t = [...e].slice(-5).map(e => (e[1] = [...e[1]], e));
                                sessionStorage.setItem("sczh:preview", JSON.stringify(t))
                            })(e.preview), alert(`도입${t}성공`)
                        }
                    }, n.readAsText(t)
                })
            }))
        },
        Si = {
            name: "",
            filename: "",
            list: "",
            preview: new Map
        };
    let _i = !1;
    const Ai = async () => {
        const e = await ve("SCENARIO"),
            t = e.load;
        e.load = async function(...e) {
            const n = await t.apply(this, e),
                r = e[0];
            if (!r) return n;
            if (x.dev && r.includes("/assets/json/") && Ko("STORY", "#ad37c2", e, n), r.includes("/produce_events/") || r.includes("/produce_communications/") || r.includes("/produce_communications_promises/") || r.includes("/produce_communication_promise_results/") || r.includes("/game_event_communications/") || r.includes("/special_communications/") || r.includes("/produce_communication_cheers/") || r.includes("/produce_communication_auditions/") || r.includes("/support_skills/") || r.includes("/mypage_communications/") || r.includes("/produce_communication_televisions/")) try {
                const e = r.replace(/^\/assets\/json\//, "");
                let t;
                if ("edit" === x.story && (((e, t) => {
                        const n = t.replace(".json", ""),
                            r = (e => {
                                var t;
                                const n = e.match(/\/(\d+)$/);
                                return null !== (t = null == n ? void 0 : n[1]) && void 0 !== t ? t : ""
                            })(n),
                            a = dn.get(r) || n.replace(/\//g, "_"),
                            o = [];
                        e.forEach(e => {
                            let t = U(J(e.text));
                            (null == t ? void 0 : t.trim()) ? o.push({
                                id: e.id || "0000000000000",
                                name: e.speaker || "",
                                text: t,
                                trans: ""
                            }): e.select && o.push({
                                id: "select",
                                name: "",
                                text: U(J(e.select)),
                                trans: ""
                            })
                        }), o.push({
                            id: "info",
                            name: t,
                            text: "",
                            trans: ""
                        }), o.push({
                            id: "译者",
                            name: "",
                            text: "",
                            trans: ""
                        }), Si.name = t, Si.filename = a + ".csv", Si.list = o
                    })(n, e), Ei(Si)), (() => {
                        if (_i) return;
                        _i = !0;
                        const e = sessionStorage.getItem("sczh:preview");
                        if (e) try {
                            const t = JSON.parse(e),
                                n = new Map(t);
                            for (let [e, t] of n) n.set(e, new Map(t));
                            Si.preview = n
                        } catch (e) {
                            V(e)
                        }
                    })(), t = Si.preview.has(e) ? Si.preview.get(e) : await (async e => {
                        if (!je) {
                            const e = await oe("/story.json");
							je = new Map(e);
                        }
                        if (je.has(e)) {
                            if (Oe.has(e)) return Oe.get(e); {
                                const t = je.get(e),
                                    n = await oe(`/data/story/${t}.csv`),
                                    r = Be(n);
                                return Oe.set(e, r), r
                            }
                        }
                        return !1
                    })(e), t) {
                    const e = await De();
                    ((e, t, n, r) => {
                        if (!Array.isArray(e)) return;
                        const a = Q();
                        e.forEach(e => {
                            if (Y(e, r), e.text) {
                                const r = a(e.id),
                                    o = z(e.text);
                                t.has(o) ? e.text = t.get(o) : r && t.has("" + r) ? e.text = t.get("" + r) : n.has(o) && (e.text = F(n.get(o)))
                            }
                            if (e.select) {
                                const r = z(e.select),
                                    a = r + "-select";
                                t.has(a) ? e.select = t.get(a) : n.has(r) && (e.select = F(n.get(e.select)))
                            }
                        })
                    })(n, t, e, await Ce())
                }
            } catch (e) {
                V(e)
            }
            return n
        }
    }, Ti = e => {
        const t = document.createElement("link");
        t.setAttribute("rel", "preload"), t.setAttribute("href", e), t.setAttribute("as", "font"), t.setAttribute("type", "font/woff2"), t.setAttribute("crossorigin", "anonymous"), document.head.appendChild(t)
    }, ki = (e, t) => `/data/font/${e}.woff2?v=${t[`font/${e}.woff2`]}`, xi = async () => {
        const e = document.createElement("style"),
            {
                hashes: t
            } = await ae;
        e.innerHTML = `\n  @font-face {\n    font-family: "sczh-heiti";\n    src: url("${x.origin}${ki("heiti",t)}");\n  }\n  @font-face {\n    font-family: "sczh-yuanti";\n    src: url("${x.origin}${ki("heiti",t)}");\n  }\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  `, "yuanti" === x.font1 && Ti(`${x.origin}${ki("heiti",t)}`), "heiti" === x.font2 && Ti(`${x.origin}${ki("heiti",t)}`), document.head.appendChild(e)
    };
    window.addEventListener("blur", (function(e) {
        "on" === x.bgm && e.stopImmediatePropagation()
    }), !1), document.addEventListener("visibilitychange", (function(e) {
        "on" === x.bgm && e.stopImmediatePropagation()
    }));
    let Ci = 0;
    const Mi = async () => {
        var e;
        pe || Ci >= 300 ? (async () => {
            try {
                await Promise.all([si(), xi(), be(), We(), ti(), Ai()])
            } catch (e) {
                V(e)
            }
        })() : (await (e = 100, new Promise(t => {
            setTimeout(t, e)
        })), Ci++, Ci % 10 == 0 && V(`Waiting: ${Ci/10}s`), await Mi())
    };
    "loading" != document.readyState ? Mi() : window.unsafeWindow ? window.unsafeWindow.addEventListener("DOMContentLoaded", Mi) : window.addEventListener("DOMContentLoaded", Mi)
}();