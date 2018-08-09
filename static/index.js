var CONFIG = {
    root:''
};
define("film", function(e, n, t) {
    !function(e) {
        var n = {
            imgSingleLoader: function(e, n) {
                var t = new Image;
                t.onload = function() {
                    n({
                        width: t.width,
                        height: t.height
                    }), t.onload = null
                }, t.src = e
            },
            resLoader: function(e, t, i) {
                for (var o = e.length, a = 0, r = 0; o > r; r++)!
                function(e) {
                    n.imgSingleLoader(e, function(e) {
                        t(++a, o, e), a == o && i(e)
                    })
                }(e[r])
            },
            extend: function(e, n) {
                var t = {};
                for (var i in e) t[i] = e[i];
                for (var o in n) t[o] = n[o];
                return t
            },
            animation: function() {
                for (var e, n, t = 0, i = ["ms", "moz", "webkit", "o"], o = 0; o < i.length && !window.requestAnimationFrame; ++o) e = window[i[o] + "RequestAnimationFrame"], n = window[i[o] + "CancelAnimationFrame"] || window[i[o] + "CancelRequestAnimationFrame"];
                return e || (e = function(e) {
                    var n = (new Date).getTime(),
                        i = Math.max(0, 16 - (n - t)),
                        o = window.setTimeout(function() {
                            e(n + i)
                        }, i);
                    return t = n + i, o
                }), n || (n = function(e) {
                    clearTimeout(e)
                }), {
                    request: e,
                    cancel: n
                }
            }()
        },
            t = function() {},
            i = {
                resource: [],
                totalFrame: 10,
                spriteDirect: 0,
                index: 0,
                playTime: 1e3,
                aniType: "linear",
                onLoading: t,
                onComplete: t,
                onPlaying: t,
                aniComplete: t
            },
            o = {
                linear: function(e, n, t, i) {
                    return t * e / i + n
                },
                easeIn: function(e, n, t, i) {
                    return t * (e /= i) * e + n
                },
                easeOut: function(e, n, t, i) {
                    return -t * (e /= i) * (e - 2) + n
                },
                easeInOut: function(e, n, t, i) {
                    return (e /= i / 2) < 1 ? t / 2 * e * e + n : -t / 2 * (--e * (e - 2) - 1) + n
                }
            };
        e.film = function(e, t) {
            var a, r, u, s, c, d, m, l, f, p;
            t = n.extend(i, t), a = [].concat(t.resource), c = t.totalFrame, r = !0, u = 0, s = a.length, d = [], m = {}, l = !1, f = null, n.resLoader(a, t.onLoading, function(n) {
                if (r = !1, 1 == s) {
                    c = t.totalFrame;
                    var i = function() {
                            m.width = n.width / c, m.height = n.height;
                            for (var e = 0; c > e; e++) d.push("background:url(" + a[0] + ") -" + m.width * e + "px 0 no-repeat;")
                        },
                        o = function() {
                            m.width = n.width, m.height = n.height / c;
                            for (var e = 0; c > e; e++) d.push("background:url(" + a[0] + ") 0 -" + m.height * e + "px no-repeat;")
                        };
                    1 == t.spriteDirect ? i() : 2 == t.spriteDirect ? o() : n.width > n.height ? i() : o()
                } else {
                    c = s, m = n, p = document.createElement("img"), e.appendChild(p);
                    for (var u = 0; c > u; u++) d.push(a[u])
                }
                w.jumpTo(t.index), t.onComplete(n)
            });
            var h = function(e) {
                    var i = {};
                    return "string" == typeof e && (i.direction = e), i = n.extend(t, e), i.direction = "backward" == i.direction ? "backward" : "forward", i
                },
                w = {};
            return w.jumpTo = function(n) {
                return r ? void 0 : (0 > n ? n -= Math.floor(n / c) * c : n %= c, 1 == s ? e.style.cssText = "width:" + m.width + "px;height:" + m.height + "px;" + d[n] : p.src = d[n], u = n, t.onPlaying(u), w)
            }, w.next = function() {
                return w.jumpTo(u + 1), w
            }, w.prev = function() {
                return w.jumpTo(u - 1), w
            }, w.playByIndex = function(e, n) {
                n = h(n);
                var t = 0;
                return e %= c, t = "forward" == n.direction && u >= e || "backward" == n.direction && e >= u ? c - u + e : e - u, w.playByNum(t, n), w
            }, w.playByNum = function(e, t) {
                f && w.pause(), t = h(t);
                var i = (new Date).getTime(),
                    a = i + t.playTime,
                    r = "function" == typeof t.aniType ? t.aniType : o[t.aniType] || o.linear,
                    u = 0,
                    s = r(u + 1, i, t.playTime, e);
                return function c(o) {
                    o >= s && (u++, s = r(u + 1, i, t.playTime, e), "forward" == t.direction ? w.next() : w.prev()), a >= o ? f = n.animation.request(c) : (f = null, t.aniComplete())
                }(i), w
            }, w.play = function(e, t) {
                f && w.pause();
                var i = (new Date).getTime(),
                    o = i;
                return function a(i) {
                    i > o + e && (o = i, "forward" == t ? w.next() : w.prev()), f = n.animation.request(a)
                }(i), w
            }, w.pause = function() {
                return n.animation.cancel(f), f = null, w
            }, w
        }
    }(this), function() {
        for (var e = 0, n = ["webkit", "moz"], t = 0; t < n.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[n[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n[t] + "CancelAnimationFrame"] || window[n[t] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(n, t) {
            var i = (new Date).getTime(),
                o = Math.max(0, 16.7 - (i - e)),
                a = window.setTimeout(function() {
                    n(i + o)
                }, o);
            return e = i + o, a
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }()
}), define("utils", function(e, n, t) {
    var i = function(e, n, t) {
            var i = t || 50000,
                o = e.length;
            if (0 >= o) return n(1);
            for (var a = 0, r = [], u = function() {
                    o > a && (++a, n(a / o))
                }, s = 0; o > s; s++) r[s] = new Image, r[s].onload = function() {
                u.call(this, {
                    type: "load"
                })
            }, r[s].onerror = function() {
                u.call(this, {
                    type: "error"
                })
            }, r[s].src = e[s];
            setTimeout(function() {
                o > a && (n(1), a = o)
            }, i * o)
        };
    return {
        loadImg: i
    }
}), define("index", ["utils", "film"], function(e, n, t) {
    function i(e) {
        return 10 > e ? "00" + e.toString() : 100 > e ? "0" + e.toString() : e
    }
    function o() {


        function e() {
            if (c) {
                var n = +new Date,
                    t = parseInt((n - f) / 120, 10);
                p = h + t, 874 > p ? F.jumpTo(p) : p >= 874 && (a(), $$.report("keypoint", 1006))

            }
             //时间
            m || requestAnimationFrame(e)

        }

        c = !0, f = +new Date, h = p, w || u.play(), d || (d = !0, e())
    }
    function a() {
        c = !1, m = !0, F.jumpTo(874), F.pause(), b.addClass("hide"), C.addClass("show-sharetips")
    }
    for (var r = (e("utils"), e("film"), document.getElementById("stage")), u = document.getElementById("bgm"), s = document.getElementById("load_process"), c = !1, d = !1, m = !1, l = !1, f = 0, p = 0, h = 0, w = !1, g = $("#btn_play"), y = $("#btn_music"), v = $("#btn_skip"), C = $("#share_page"), b = $("#btn_layer"), T = $("#btn_show_address"), _ = $("#btn_hide_address"), k = [], x = 0; 874>= x; x++) k.push(CONFIG.root+"images/00" +i(x)+ ".jpg");

    var F = film(r, {
        resource: k,
        playTime: 72e3,
        onLoading: function() {
            s.innerText = (arguments[0] / arguments[1] * 100).toFixed(2) + "%"
        },
        onComplete: function() {
            $(document.body).css({
                "background-color": "#212020"
            }), $("#loading").addClass("hide"), $("#btn_layer").removeClass("hide"), l = !0, (new Image).src = CONFIG.root+"files/tips.gif", (new Image).src = CONFIG.root+"files/banner.jpg"
        }
    });
    setTimeout(function() {
        l || ($(document.body).css({
            "background-color": "#212020"
        }), $("#loading").addClass("hide"), $("#btn_layer").removeClass("hide"));

    }, 30000), g.on("touchstart", function(e) {

        e.preventDefault(), o(), g.addClass("h"), v.addClass("hide")
    }), $(document.body).on("touchstart", function(e) {
        e.preventDefault()
    }), $(document.body).on("touchend", function(e) {
        m || (e.preventDefault(), c = !1, u.pause(), F.pause(), g.removeClass("h"), v.removeClass("hide"))
    }), y.on("touchstart", function(e) {
        e.preventDefault(), w ? (u.currentTime = ~~ (p / 10), w = !1, y.removeClass("off"), $$.report("keypoint", 1e3)) : (u.pause(), w = !0, y.addClass("off"), $$.report("keypoint", 999))
    }), v.on("touchend", function(e) {
        e.preventDefault(), b.addClass("hide"), C.addClass("show-sharetips"), u.pause(), $$.report("keypoint", 998)
    }), $("#btn_share").on("touchend", function() {
        $("#share_tips").addClass("show-sharetips")
    }), T.on("touchend", function() {
        $("#map_layer").removeClass("hide")
    }), _.on("touchend", function() {
        $("#map_layer").addClass("hide")
    }), $("#share_bg").on("touchend", function() {
        $("#share_tips").removeClass("show-sharetips")
    }), $("#img_gif").on("touchend", function() {
        $("#share_tips").removeClass("show-sharetips")
    }), setTimeout(function() {
        $("#loading").hasClass("hide") || ($(document.body).css({
            "background-color": "#212020"
        }), $("#loading").addClass("hide"), $("#btn_layer").removeClass("hide"), l = !0)
    }, 300000), window.onunload = function() {
        l || $$.report("keypoint", 1007)
    }, setShareConfig("一枚硬币", "一枚硬币", CONFIG.root+"files/share.png", location.href, function() {
        $$.report("keypoint", 1001)
    }, function() {
        $$.report("keypoint", 1002)
    })
}); /*  |xGv00|6e52e4b1aed8a6ae23349e0b7dba117e */