function setShareConfig(t, e, n, r, i, o) {
	var a = function() {
			var a = {
				title: t,
				desc: e,
				link: r,
				img_url: n,
				img_width: "120",
				img_height: "120"
			},
				s = function() {
					WeixinJSBridge.on("menu:share:appmessage", function(t) {
						WeixinJSBridge.invoke("sendAppMessage", a, function(t) {
							"function" == typeof o && o()
						})
					}), WeixinJSBridge.on("menu:share:timeline", function(t) {
						WeixinJSBridge.invoke("shareTimeline", a, function(t) {
							"function" == typeof i && i()
						})
					})
				};
			return {
				init: s
			}
		}();
	"undefined" == typeof window.WeixinJSBridge ? document.addEventListener("WeixinJSBridgeReady", a.init, !1) : a.init()
}
"undefined" == typeof $$ && ($$ = {}), function(t) {
	var e = function(t) {
			var e, n = "STOARGE_TEST";
			try {
				return t.setItem(n, 1), e = t.getItem(n), t.removeItem(n), 1 == e
			} catch (r) {
				return !1
			}
		};
	try {
		_isLocalAble = e(localStorage)
	} catch (n) {
		_isLocalAble = !1
	}
	var r = function() {
			try {
				return JSON.parse(window.name || "{}")
			} catch (t) {
				return {}
			}
		},
		i = function(t) {
			t && (window.name = JSON.stringify(t))
		},
		o = function(t) {
			return r()[t]
		},
		a = function(t, e) {
			var n = r();
			n[t] = e, i(n)
		},
		s = function(t) {
			var e = "";
			return e = _isLocalAble ? localStorage.getItem(t) : o(t)
		},
		c = function(t, e) {
			_isLocalAble ? localStorage.setItem(t, e) : a(t, e)
		},
		u = function(t) {
			var e = "";
			return e = _isLocalAble ? sessionStorage.getItem(t) : o(t)
		},
		l = function(t, e) {
			_isLocalAble ? sessionStorage.setItem(t, e) : a(t, e)
		};
	t.STORAGE = {
		setItem: c,
		getItem: s,
		setSessionItem: l,
		getSessionItem: u,
		isLocalAble: function() {
			return _isLocalAble
		}
	}
}($$), function(t) {
	function e(t) {
		var e = this.os = {},
			n = this.browser = {},
			r = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
			i = t.match(/(Android);?[\s\/]+([\d.]+)?/),
			o = t.match(/(iPad).*OS\s([\d_]+)/),
			a = t.match(/(iPod)(.*OS\s([\d_]+))?/),
			s = !o && t.match(/(iPhone\sOS)\s([\d_]+)/),
			c = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
			u = c && t.match(/TouchPad/),
			l = t.match(/Kindle\/([\d.]+)/),
			f = t.match(/Silk\/([\d._]+)/),
			h = t.match(/(BlackBerry).*Version\/([\d.]+)/),
			p = t.match(/(BB10).*Version\/([\d.]+)/),
			d = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
			m = t.match(/PlayBook/),
			v = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
			g = t.match(/Firefox\/([\d.]+)/),
			y = t.match(/MSIE ([\d.]+)/),
			w = r && t.match(/Mobile\//) && !v,
			S = t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !v,
			y = t.match(/MSIE\s([\d.]+)/);
		(n.webkit = !! r) && (n.version = r[1]), i && (e.android = !0, e.version = i[2]), s && !a && (e.ios = e.iphone = !0, e.version = s[2].replace(/_/g, ".")), o && (e.ios = e.ipad = !0, e.version = o[2].replace(/_/g, ".")), a && (e.ios = e.ipod = !0, e.version = a[3] ? a[3].replace(/_/g, ".") : null), c && (e.webos = !0, e.version = c[2]), u && (e.touchpad = !0), h && (e.blackberry = !0, e.version = h[2]), p && (e.bb10 = !0, e.version = p[2]), d && (e.rimtabletos = !0, e.version = d[2]), m && (n.playbook = !0), l && (e.kindle = !0, e.version = l[1]), f && (n.silk = !0, n.version = f[1]), !f && e.android && t.match(/Kindle Fire/) && (n.silk = !0), v && (n.chrome = !0, n.version = v[1]), g && (n.firefox = !0, n.version = g[1]), y && (n.ie = !0, n.version = y[1]), w && (t.match(/Safari/) || e.ios) && (n.safari = !0), S && (n.webview = !0), y && (n.ie = !0, n.version = y[1]), e.tablet = !! (o || m || i && !t.match(/Mobile/) || g && t.match(/Tablet/) || y && !t.match(/Phone/) && t.match(/Touch/)), e.phone = !(e.tablet || e.ipod || !(i || s || c || h || p || v && t.match(/Android/) || v && t.match(/CriOS\/([\d.]+)/) || g && t.match(/Mobile/) || y && t.match(/Touch/)))
	}
	e.call(t, navigator.userAgent), t.__detect = e
}($$), function(t, e) {
	function n(t) {
		var e = "";
		if (window.localStorage) e = localStorage.getItem(t) || sessionStorage.getItem(t);
		else {
			var n = document.cookie.match(new RegExp("(?:^|;\\s)" + t + "=(.*?)(?:;\\s|$)"));
			e = n ? n[1] : ""
		}
		return e
	}
	function r(t, e, n) {
		window.localStorage ? n ? localStorage.setItem(t, e) : sessionStorage.setItem(t, e) : document.cookie = t + "=" + e + ";path=/;domain=" + i() + (n ? ";expires=" + n : "")
	}
	function i() {
		var t = window.location.host,
			e = {
				"com.cn": 1,
				"js.cn": 1,
				"net.cn": 1,
				"gov.cn": 1,
				"com.hk": 1,
				"co.nz": 1
			},
			n = t.split(".");
		return n.length > 2 &&
		function() {
			t = (e[n.slice(-2).join(".")] ? n.slice(-3) : n.slice(-2)).join(".")
		}(), t
	}
	function o(t) {
		var e, n, r, i, o = {};
		if (void 0 === t) {
			var a = window.location;
			e = a.host, n = a.pathname, r = a.search.substr(1), i = a.hash
		} else {
			var s = t.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?:\:\d+)?(\/[^\?\\\"\'\|\:<>]*)?(?:\?([^\'\"\\<>#]*))?(?:#(\w+))?/i) || [];
			e = s[1], n = s[2], r = s[3], i = s[4]
		}
		return r &&
		function() {
			for (var t = r.split("&"), e = 0, n = t.length; n > e; e++) if (-1 != t[e].indexOf("=")) {
				var i = t[e].indexOf("="),
					a = t[e].slice(0, i),
					s = t[e].slice(i + 1);
				o[a] = s
			}
		}(), {
			host: e,
			path: n,
			search: r,
			hash: i,
			param: o
		}
	}
	function a(t) {
		return t = t || "", t + Math.round(2147483647 * (Math.random() || .5)) * +new Date % 1e10
	}
	function s() {
		var t = o(),
			i = {
				dm: t.host,
				url: t.path
			};
		return "undefined" != typeof e.TA_STATS_ARGS && e.TA_STATS_ARGS.phash && (i.hash = t.hash), "undefined" != typeof e.TA_STATS_ARGS && e.TA_STATS_ARGS.pqstr && (i.qstr = encodeURIComponent(t.search.replace(/&/g, ":"))), i.pvi = function() {
			var t = n("ta_pvi");
			return !t &&
			function() {
				t = a(), r("ta_pvi", t, "Sun, 18 Jan 2038 00:00:00 GMT;")
			}(), t
		}(), i.si = function() {
			var t = n("ta_si");
			return !t &&
			function() {
				t = a("s"), r("ta_si", t)
			}(), t
		}(), i
	}
	function c() {
		var t = ["sp", "nt", "sk", "sv"],
			n = "undefined" == typeof e.TA_STATS_ARGS ? {} : e.TA_STATS_ARGS,
			r = {};
		return "undefined" != typeof _speedMark && (r.sp = new Date - _speedMark), n &&
		function() {
			for (var e = 0; e < t.length; e++)"undefined" != typeof n[t[e]] && (r[t[e]] = encodeURIComponent(n[t[e]]))
		}(), r
	}
	function u(e, n) {
		for (var r = [], i = 0, o = [s(), c(),
		{
			random: +new Date
		}], a = o.length; a > i; i++) for (var u in o[i])"sk" != u || e || n ? o[i].hasOwnProperty(u) && r.push(u + "=" + (o[i][u] || "")) : o[i].hasOwnProperty(u) && r.push(u + "=" + (o[i][u] || ""));
		e && n && r.push("sk=&type=extend&" + e + "&" + n);
		var l = Ta.src = window.location.protocol + '//tudg.qq.com/dataimport/ImportService?m=dataImport&p=["' + t.logid + '","' + encodeURIComponent(r.join("&")) + '"]',
			f = new Image;
		f.src = l
	}
	e.Ta = e.Ta || {}, Ta.pgv = u
}({
	logid: 1e5
}, this), function(t) {
	function e() {
		return +new Date
	}
	function n(t) {
		for (var e = "", n = 1; 16 >= n; n++) {
			var r = Math.floor(16 * Math.random()).toString(16);
			e += r, 8 != n && 12 != n || (e += "-")
		}
		return [t || "", +new Date + "-" + e].join("")
	}
	function r(n) {
		n && (t.debug = "debug" in n ? !! n.debug : !1, o = "undefined" == typeof _speedMark ? e() : _speedMark, E(n.rate || 1), w(), T(), A(), S(n.projectID), x(n.pageID), y(), b(O("cid") || t.STORAGE.getSessionItem(p) || n.channelID || 0), R(), k(), t.STORAGE.setSessionItem(l, 1), window.onunload = function() {
			C("unload", ""), k()
		})
	}
	function i(e) {
		v(e) ? (b(O("cid") || t.STORAGE.getSessionItem(p) || obj.channelID || 0), x(e), R(), k()) : g("不合法的pageID：" + e)
	}
	var o, a = {
		userID: "",
		sessionID: "",
		projectID: "",
		pageID: "",
		channelID: "",
		keypointID: ""
	},
		s = "wx_log_userid",
		c = "wx_log_sessionid",
		u = "wx_log_flag",
		l = "wx_log_unique_flag",
		f = "wx_log_projectid",
		h = "wx_log_pageid",
		p = "wx_log_channelid",
		d = [],
		m = !0,
		v = function(t) {
			return !isNaN(parseInt(t))
		},
		g = function(e) {
			t.debug && alert("[上报日志]" + e)
		},
		y = function() {
			a.userID = t.STORAGE.getItem(s) || n(a.projectID), t.STORAGE.setItem(s, a.userID)
		},
		w = function() {
			a.sessionID = t.STORAGE.getSessionItem(c) || n(), t.STORAGE.setSessionItem(c, a.sessionID)
		},
		S = function(e) {
			v(e) && (a.projectID = e, t.STORAGE.setSessionItem(f, e)), v(e) || g("项目ID数据类型不正确")
		},
		x = function(e) {
			v(e) && (a.pageID = e, t.STORAGE.setSessionItem(h, e)), v(e) || g("页面ID数据类型不正确")
		},
		b = function(e) {
			v(e) && (a.channelID = e, t.STORAGE.setSessionItem(p, e)), v(e) || g("渠道ID数据类型不正确")
		},
		E = function(e) {
			var n = parseInt(t.STORAGE.getSessionItem(u));
			isNaN(n) ? (e = parseFloat(e), m = Math.random() <= e ? 1 : 0) : m = n, t.STORAGE.setSessionItem(u, m)
		},
		T = function() {
			a.pageID = t.STORAGE.getSessionItem(h), a.projectID = t.STORAGE.getSessionItem(f), a.channelID = t.STORAGE.getSessionItem(p)
		},
		A = function() {
			"undefined" == typeof WeixinJSBridge ? document.addEventListener("WeixinJSBridgeReady", function(t) {
				_()
			}) : _(), j(), D()
		},
		_ = function() {
			function e(t) {
				var e = t.err_msg.split(":");
				2 == e.length ? "fail" == e[1] ? g("网络类型获取失败！") : (C("network", "wifi" == e[1] ? "wifi" : "other"), k()) : g("网络类型获取失败！")
			}
			try {
				var n = t.STORAGE.getSessionItem(l) ? 1 : 0;
				n && WeixinJSBridge.call("getNetworkType", {}, e)
			} catch (r) {
				g("网络类型获取失败！")
			}
		},
		I = function(t) {
			var e = document.createTextNode(t),
				n = document.createElement("div"),
				r = "";
			return n.appendChild(e), r = n.innerHTML, e = null, n = null, r
		},
		O = function(t) {
			var e = {},
				n = location.search.replace("?", ""),
				r = n.split("&");
			if (r.length > 0) for (var i = 0, o = r.length; o > i; i++) try {
				/(.*?)=(.*)/.test(r[i]) && (e[RegExp.$1] = RegExp.$2)
			} catch (a) {}
			return t ? e[t] : e
		},
		j = function() {
			var e = t.STORAGE.getSessionItem(l) ? 1 : 0;
			if (!e) {
				var n = t.os.ios === !0 ? "ios" : t.os.android === !0 ? "android" : t.browser.ie === !0 ? "wp" : "other";
				C("os", "wp" == n ? "wp_" + t.browser.version : n + (t.os.version ? "_" + t.os.version : ""))
			}
		},
		D = function() {
			try {
				"undefined" != typeof window.external && "unknown" == typeof window.external.notify && window.external.notify("wechat:version")
			} catch (e) {}
			var n = /MicroMessenger\/([\d.]+)/i,
				r = (navigator.wxuserAgent || navigator.userAgent).match(n),
				i = r ? r[1] : t.browser.ie && !navigator.wxuserAgent ? -2 : -1,
				o = t.STORAGE.getSessionItem(l) ? 1 : 0;
			!o && i > 0 && C("wx_version", i)
		},
		C = function(t, n) {
			d.push({
				type: t,
				value: n,
				time: e()
			})
		},
		R = function() {
			C("pgv", a.pageID)
		},
		N = function(t, e) {
			var n = ["network", "keypoint", "error", "age", "sex", "uid", "page", "message"];
			if (n.indexOf(t) > 0) if ("error" == t && (e = I(e), e = e.length > 30 ? e.substr(0, 30) + "..." : e), C(t, e), "uid" == t) if (/^([1-9][0-9]{16}[0-9a-zA-Z])|([1-9][0-9]{14})$/.test(e)) {
				var r = e.substr(6, 4),
					i = e.substr(16, 1) % 2 == 0 ? 2 : 1;
				N("age", (new Date).getFullYear() - r), N("sex", i)
			} else g("身份证号不正确：" + e);
			else k();
			else g("不合法的类型：" + t)
		},
		k = function() {
			if (d.length > 0 && a.sessionID && m && a.projectID && a.pageID && "" !== a.channelID && null !== a.channelID) {
				0 == a.channelID && C("exception", ($$.STORAGE.isLocalAble() ? 1 : 0) + "|" + navigator.userAgent + "|" + document.referrer);
				var e = d.slice(0),
					n = (new Image, "uid=" + a.userID + "&sid=" + a.sessionID + "&pid=" + a.projectID + "&cid=" + a.channelID + "&gid=" + a.pageID),
					r = [],
					i = {
						error: 16,
						unload: 8,
						wx_version: 7,
						os: 6,
						network: 5,
						keypoint: 4,
						sex: 3,
						age: 2,
						pgv: 1,
						exception: 10,
						message: 9
					};
				d = [];
				for (var o = 0; o < e.length; o++) i[e[o].type] && r.push("sk" + i[e[o].type] + "=" + ("exception" == e[o].type ? "error" : e[o].type) + "&sv" + i[e[o].type] + "=" + e[o].value + "&sp" + i[e[o].type] + "=" + e[o].time);
				t.debug && alert("data：" + r.join("&")), Ta.pgv(n, r.join("&"))
			}
		};
	"undefined" != typeof TA_STATS_ARGS && r(TA_STATS_ARGS), t.config = r, t.reportPage = i, t.report = N
}($$), function(t, e) {
	function n(t) {
		return function(e) {
			return Object.prototype.toString.call(e) === "[object " + t + "]"
		}
	}
	function r() {
		return m++
	}
	function i(t, e) {
		var n;
		if (n = t.charAt(0), _.test(t)) n = t;
		else if ("." === n) for (n = (e ? e.match(x)[0] : l.cwd) + t, n = n.replace(b, "/"); n.match(E);) n = n.replace(E, "/");
		else n = "/" === n ? (n = l.cwd.match(I)) ? n[0] + t.substring(1) : t : l.base + t;
		return n
	}
	function o(t, e) {
		if (!t) return "";
		var n, r = t,
			o = l.alias,
			r = t = o && h(o[r]) ? o[r] : r,
			o = l.paths;
		o && (n = r.match(T)) && h(o[n[1]]) && (r = o[n[1]] + n[2]), n = r;
		var a = l.vars;
		a && -1 < n.indexOf("{") && (n = n.replace(A, function(t, e) {
			return h(a[e]) ? a[e] : t
		})), r = n.length - 1, o = n.charAt(r), t = "#" === o ? n.substring(0, r) : ".js" === n.substring(r - 2) || 0 < n.indexOf("?") || ".css" === n.substring(r - 3) || "/" === o ? n : n + ".js", n = i(t, e);
		var r = l.map,
			s = n;
		if (r) for (var o = 0, c = r.length; c > o && (s = r[o], s = d(s) ? s(n) || n : n.replace(s[0], s[1]), !(s !== n)); o++);
		return s
	}
	function a(t, e) {
		var n, r = t.sheet;
		if ($) r && (n = !0);
		else if (r) try {
			r.cssRules && (n = !0)
		} catch (i) {
			"NS_ERROR_DOM_SECURITY_ERR" === i.name && (n = !0)
		}
		setTimeout(function() {
			n ? e() : a(t, e)
		}, 20)
	}
	function s() {
		if (g) return g;
		if (y && "interactive" === y.readyState) return y;
		for (var t = R.getElementsByTagName("script"), e = t.length - 1; e >= 0; e--) {
			var n = t[e];
			if ("interactive" === n.readyState) return y = n
		}
	}
	function c(t, e) {
		this.uri = t, this.dependencies = e || [], this.exports = null, this.status = 0, this._waitings = {}, this._remain = 0
	}
	if (!t.seajs) {
		var u = t.seajs = {
			version: "2.1.1"
		},
			l = u.data = {},
			f = n("Object"),
			h = n("String"),
			p = Array.isArray || n("Array"),
			d = n("Function"),
			m = 0,
			v = l.events = {};
		u.on = function(t, e) {
			return (v[t] || (v[t] = [])).push(e), u
		}, u.off = function(t, e) {
			if (!t && !e) return v = l.events = {}, u;
			var n = v[t];
			if (n) if (e) for (var r = n.length - 1; r >= 0; r--) n[r] === e && n.splice(r, 1);
			else delete v[t];
			return u
		};
		var g, y, w, S = u.emit = function(t, e) {
				var n, r = v[t];
				if (r) for (r = r.slice(); n = r.shift();) n(e);
				return u
			},
			x = /[^?#]*\//,
			b = /\/\.\//g,
			E = /\/[^\/]+\/\.\.\//,
			T = /^([^\/:]+)(\/.+)$/,
			A = /{([^{]+)}/g,
			_ = /^\/\/.|:\//,
			I = /^.*?\/\/.*?\//,
			O = document,
			j = location,
			D = j.href.match(x)[0],
			C = O.getElementsByTagName("script"),
			C = O.getElementById("seajsnode") || C[C.length - 1],
			C = ((C.hasAttribute ? C.src : C.getAttribute("src", 4)) || D).match(x)[0],
			R = O.getElementsByTagName("head")[0] || O.documentElement,
			N = R.getElementsByTagName("base")[0],
			k = /\.css(?:\?|$)/i,
			P = /^(?:loaded|complete|undefined)$/,
			$ = 536 > 1 * navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/, "$1"),
			L = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,
			G = /\\\\/g,
			M = u.cache = {},
			q = {},
			B = {},
			F = {},
			Z = c.STATUS = {
				FETCHING: 1,
				SAVED: 2,
				LOADING: 3,
				LOADED: 4,
				EXECUTING: 5,
				EXECUTED: 6
			};
		c.prototype.resolve = function() {
			for (var t = this.dependencies, e = [], n = 0, r = t.length; r > n; n++) e[n] = c.resolve(t[n], this.uri);
			return e
		}, c.prototype.load = function() {
			if (!(this.status >= Z.LOADING)) {
				this.status = Z.LOADING;
				var t = this.resolve();
				S("load", t);
				for (var e, n = this._remain = t.length, r = 0; n > r; r++) e = c.get(t[r]), e.status < Z.LOADED ? e._waitings[this.uri] = (e._waitings[this.uri] || 0) + 1 : this._remain--;
				if (0 === this._remain) this.onload();
				else {
					for (var i = {}, r = 0; n > r; r++) e = M[t[r]], e.status < Z.FETCHING ? e.fetch(i) : e.status === Z.SAVED && e.load();
					for (var o in i) i.hasOwnProperty(o) && i[o]()
				}
			}
		}, c.prototype.onload = function() {
			this.status = Z.LOADED, this.callback && this.callback();
			var t, e, n = this._waitings;
			for (t in n) n.hasOwnProperty(t) && (e = M[t], e._remain -= n[t], 0 === e._remain) && e.onload();
			delete this._waitings, delete this._remain
		}, c.prototype.fetch = function(t) {
			function e() {
				var t = i.requestUri,
					e = i.onRequest,
					n = i.charset,
					r = k.test(t),
					o = O.createElement(r ? "link" : "script");
				n && (n = d(n) ? n(t) : n) && (o.charset = n);
				var s = o;
				!r || !$ && "onload" in s ? s.onload = s.onerror = s.onreadystatechange = function() {
					P.test(s.readyState) && (s.onload = s.onerror = s.onreadystatechange = null, !r && !l.debug && R.removeChild(s), s = null, e())
				} : setTimeout(function() {
					a(s, e)
				}, 1), r ? (o.rel = "stylesheet", o.href = t) : (o.async = !0, o.src = t), g = o, N ? R.insertBefore(o, N) : R.appendChild(o), g = null
			}
			function n() {
				delete q[o], B[o] = !0, w && (c.save(r, w), w = null);
				var t, e = F[o];
				for (delete F[o]; t = e.shift();) t.load()
			}
			var r = this.uri;
			this.status = Z.FETCHING;
			var i = {
				uri: r
			};
			S("fetch", i);
			var o = i.requestUri || r;
			!o || B[o] ? this.load() : q[o] ? F[o].push(this) : (q[o] = !0, F[o] = [this], S("request", i = {
				uri: r,
				requestUri: o,
				onRequest: n,
				charset: l.charset
			}), i.requested || (t ? t[i.requestUri] = e : e()))
		}, c.prototype.exec = function() {
			function t(e) {
				return c.get(t.resolve(e)).exec()
			}
			if (this.status >= Z.EXECUTING) return this.exports;
			this.status = Z.EXECUTING;
			var n = this.uri;
			t.resolve = function(t) {
				return c.resolve(t, n)
			}, t.async = function(e, r) {
				return c.use(e, r, n + "_async_" + m++), t
			};
			var r = this.factory,
				r = d(r) ? r(t, this.exports = {}, this) : r;
			return r === e && (r = this.exports), null === r && !k.test(n) && S("error", this), delete this.factory, this.exports = r, this.status = Z.EXECUTED, S("exec", this), r
		}, c.resolve = function(t, e) {
			var n = {
				id: t,
				refUri: e
			};
			return S("resolve", n), n.uri || o(n.id, e)
		}, c.define = function(t, n, r) {
			var i = arguments.length;
			if (1 === i ? (r = t, t = e) : 2 === i && (r = n, p(t) ? (n = t, t = e) : n = e), !p(n) && d(r)) {
				var o = [];
				r.toString().replace(G, "").replace(L, function(t, e, n) {
					n && o.push(n)
				}), n = o
			}
			if (i = {
				id: t,
				uri: c.resolve(t),
				deps: n,
				factory: r
			}, !i.uri && O.attachEvent) {
				var a = s();
				a && (i.uri = a.src)
			}
			S("define", i), i.uri ? c.save(i.uri, i) : w = i
		}, c.save = function(t, e) {
			var n = c.get(t);
			n.status < Z.SAVED && (n.id = e.id || t, n.dependencies = e.deps || [], n.factory = e.factory, n.status = Z.SAVED)
		}, c.get = function(t, e) {
			return M[t] || (M[t] = new c(t, e))
		}, c.use = function(e, n, r) {
			var i = c.get(r, p(e) ? e : [e]);
			i.callback = function() {
				for (var e = [], r = i.resolve(), o = 0, a = r.length; a > o; o++) e[o] = M[r[o]].exec();
				n && n.apply(t, e), delete i.callback
			}, i.load()
		}, c.preload = function(t) {
			var e = l.preload,
				n = e.length;
			n ? c.use(e, function() {
				e.splice(0, n), c.preload(t)
			}, l.cwd + "_preload_" + m++) : t()
		}, u.use = function(t, e) {
			return c.preload(function() {
				c.use(t, e, l.cwd + "_use_" + m++)
			}), u
		}, c.define.cmd = {}, t.define = c.define, u.Module = c, l.fetchedList = B, l.cid = r, u.resolve = o, u.require = function(t) {
			return (M[c.resolve(t)] || {}).exports
		}, l.base = (C.match(/^(.+?\/)(\?\?)?(seajs\/)+/) || ["", C])[1], l.dir = C, l.cwd = D, l.charset = "utf-8";
		var D = l,
			U = [],
			j = j.search.replace(/(seajs-\w+)(&|$)/g, "$1=1$2"),
			j = j + (" " + O.cookie);
		j.replace(/(seajs-\w+)=1/g, function(t, e) {
			U.push(e)
		}), D.preload = U, u.config = function(t) {
			for (var e in t) {
				var n = t[e],
					r = l[e];
				if (r && f(r)) for (var o in n) r[o] = n[o];
				else p(r) ? n = r.concat(n) : "base" === e && ("/" === n.slice(-1) || (n += "/"), n = i(n)), l[e] = n
			}
			return S("config", t), u
		}
	}
}(this);
var Zepto = function() {
		function t(t) {
			return null == t ? String(t) : z[W.call(t)] || "object"
		}
		function e(e) {
			return "function" == t(e)
		}
		function n(t) {
			return null != t && t == t.window
		}
		function r(t) {
			return null != t && t.nodeType == t.DOCUMENT_NODE
		}
		function i(e) {
			return "object" == t(e)
		}
		function o(t) {
			return i(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
		}
		function a(t) {
			return "number" == typeof t.length
		}
		function s(t) {
			return j.call(t, function(t) {
				return null != t
			})
		}
		function c(t) {
			return t.length > 0 ? E.fn.concat.apply([], t) : t
		}
		function u(t) {
			return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
		}
		function l(t) {
			return t in R ? R[t] : R[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
		}
		function f(t, e) {
			return "number" != typeof e || N[u(t)] ? e : e + "px"
		}
		function h(t) {
			var e, n;
			return C[t] || (e = D.createElement(t), D.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), C[t] = n), C[t]
		}
		function p(t) {
			return "children" in t ? O.call(t.children) : E.map(t.childNodes, function(t) {
				return 1 == t.nodeType ? t : void 0
			})
		}
		function d(t, e, n) {
			for (b in e) n && (o(e[b]) || Y(e[b])) ? (o(e[b]) && !o(t[b]) && (t[b] = {}), Y(e[b]) && !Y(t[b]) && (t[b] = []), d(t[b], e[b], n)) : e[b] !== x && (t[b] = e[b])
		}
		function m(t, e) {
			return null == e ? E(t) : E(t).filter(e)
		}
		function v(t, n, r, i) {
			return e(n) ? n.call(t, r, i) : n
		}
		function g(t, e, n) {
			null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
		}
		function y(t, e) {
			var n = t.className || "",
				r = n && n.baseVal !== x;
			return e === x ? r ? n.baseVal : n : void(r ? n.baseVal = e : t.className = e)
		}
		function w(t) {
			try {
				return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? E.parseJSON(t) : t) : t
			} catch (e) {
				return t
			}
		}
		function S(t, e) {
			e(t);
			for (var n = 0, r = t.childNodes.length; r > n; n++) S(t.childNodes[n], e)
		}
		var x, b, E, T, A, _, I = [],
			O = I.slice,
			j = I.filter,
			D = window.document,
			C = {},
			R = {},
			N = {
				"column-count": 1,
				columns: 1,
				"font-weight": 1,
				"line-height": 1,
				opacity: 1,
				"z-index": 1,
				zoom: 1
			},
			k = /^\s*<(\w+|!)[^>]*>/,
			P = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			$ = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			L = /^(?:body|html)$/i,
			G = /([A-Z])/g,
			M = ["val", "css", "html", "text", "data", "width", "height", "offset"],
			q = ["after", "prepend", "before", "append"],
			B = D.createElement("table"),
			F = D.createElement("tr"),
			Z = {
				tr: D.createElement("tbody"),
				tbody: B,
				thead: B,
				tfoot: B,
				td: F,
				th: F,
				"*": D.createElement("div")
			},
			U = /complete|loaded|interactive/,
			J = /^[\w-]*$/,
			z = {},
			W = z.toString,
			H = {},
			V = D.createElement("div"),
			X = {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			},
			Y = Array.isArray ||
		function(t) {
			return t instanceof Array
		};
		return H.matches = function(t, e) {
			if (!e || !t || 1 !== t.nodeType) return !1;
			var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
			if (n) return n.call(t, e);
			var r, i = t.parentNode,
				o = !i;
			return o && (i = V).appendChild(t), r = ~H.qsa(i, e).indexOf(t), o && V.removeChild(t), r
		}, A = function(t) {
			return t.replace(/-+(.)?/g, function(t, e) {
				return e ? e.toUpperCase() : ""
			})
		}, _ = function(t) {
			return j.call(t, function(e, n) {
				return t.indexOf(e) == n
			})
		}, H.fragment = function(t, e, n) {
			var r, i, a;
			return P.test(t) && (r = E(D.createElement(RegExp.$1))), r || (t.replace && (t = t.replace($, "<$1></$2>")), e === x && (e = k.test(t) && RegExp.$1), e in Z || (e = "*"), a = Z[e], a.innerHTML = "" + t, r = E.each(O.call(a.childNodes), function() {
				a.removeChild(this)
			})), o(n) && (i = E(r), E.each(n, function(t, e) {
				M.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
			})), r
		}, H.Z = function(t, e) {
			return t = t || [], t.__proto__ = E.fn, t.selector = e || "", t
		}, H.isZ = function(t) {
			return t instanceof H.Z
		}, H.init = function(t, n) {
			var r;
			if (!t) return H.Z();
			if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && k.test(t)) r = H.fragment(t, RegExp.$1, n), t = null;
			else {
				if (n !== x) return E(n).find(t);
				r = H.qsa(D, t)
			} else {
				if (e(t)) return E(D).ready(t);
				if (H.isZ(t)) return t;
				if (Y(t)) r = s(t);
				else if (i(t)) r = [t], t = null;
				else if (k.test(t)) r = H.fragment(t.trim(), RegExp.$1, n), t = null;
				else {
					if (n !== x) return E(n).find(t);
					r = H.qsa(D, t)
				}
			}
			return H.Z(r, t)
		}, E = function(t, e) {
			return H.init(t, e)
		}, E.extend = function(t) {
			var e, n = O.call(arguments, 1);
			return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
				d(t, n, e)
			}), t
		}, H.qsa = function(t, e) {
			var n, i = "#" == e[0],
				o = !i && "." == e[0],
				a = i || o ? e.slice(1) : e,
				s = J.test(a);
			return r(t) && s && i ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : O.call(s && !i ? o ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
		}, E.contains = D.documentElement.contains ?
		function(t, e) {
			return t !== e && t.contains(e)
		} : function(t, e) {
			for (; e && (e = e.parentNode);) if (e === t) return !0;
			return !1
		}, E.type = t, E.isFunction = e, E.isWindow = n, E.isArray = Y, E.isPlainObject = o, E.isEmptyObject = function(t) {
			var e;
			for (e in t) return !1;
			return !0
		}, E.inArray = function(t, e, n) {
			return I.indexOf.call(e, t, n)
		}, E.camelCase = A, E.trim = function(t) {
			return null == t ? "" : String.prototype.trim.call(t)
		}, E.uuid = 0, E.support = {}, E.expr = {}, E.map = function(t, e) {
			var n, r, i, o = [];
			if (a(t)) for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && o.push(n);
			else for (i in t) n = e(t[i], i), null != n && o.push(n);
			return c(o)
		}, E.each = function(t, e) {
			var n, r;
			if (a(t)) {
				for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
			} else for (r in t) if (e.call(t[r], r, t[r]) === !1) return t;
			return t
		}, E.grep = function(t, e) {
			return j.call(t, e)
		}, window.JSON && (E.parseJSON = JSON.parse), E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
			z["[object " + e + "]"] = e.toLowerCase()
		}), E.fn = {
			forEach: I.forEach,
			reduce: I.reduce,
			push: I.push,
			sort: I.sort,
			indexOf: I.indexOf,
			concat: I.concat,
			map: function(t) {
				return E(E.map(this, function(e, n) {
					return t.call(e, n, e)
				}))
			},
			slice: function() {
				return E(O.apply(this, arguments))
			},
			ready: function(t) {
				return U.test(D.readyState) && D.body ? t(E) : D.addEventListener("DOMContentLoaded", function() {
					t(E)
				}, !1), this
			},
			get: function(t) {
				return t === x ? O.call(this) : this[t >= 0 ? t : t + this.length]
			},
			toArray: function() {
				return this.get()
			},
			size: function() {
				return this.length
			},
			remove: function() {
				return this.each(function() {
					null != this.parentNode && this.parentNode.removeChild(this)
				})
			},
			each: function(t) {
				return I.every.call(this, function(e, n) {
					return t.call(e, n, e) !== !1
				}), this
			},
			filter: function(t) {
				return e(t) ? this.not(this.not(t)) : E(j.call(this, function(e) {
					return H.matches(e, t)
				}))
			},
			add: function(t, e) {
				return E(_(this.concat(E(t, e))))
			},
			is: function(t) {
				return this.length > 0 && H.matches(this[0], t)
			},
			not: function(t) {
				var n = [];
				if (e(t) && t.call !== x) this.each(function(e) {
					t.call(this, e) || n.push(this)
				});
				else {
					var r = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? O.call(t) : E(t);
					this.forEach(function(t) {
						r.indexOf(t) < 0 && n.push(t)
					})
				}
				return E(n)
			},
			has: function(t) {
				return this.filter(function() {
					return i(t) ? E.contains(this, t) : E(this).find(t).size()
				})
			},
			eq: function(t) {
				return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
			},
			first: function() {
				var t = this[0];
				return t && !i(t) ? t : E(t)
			},
			last: function() {
				var t = this[this.length - 1];
				return t && !i(t) ? t : E(t)
			},
			find: function(t) {
				var e, n = this;
				return e = t ? "object" == typeof t ? E(t).filter(function() {
					var t = this;
					return I.some.call(n, function(e) {
						return E.contains(e, t)
					})
				}) : 1 == this.length ? E(H.qsa(this[0], t)) : this.map(function() {
					return H.qsa(this, t)
				}) : E()
			},
			closest: function(t, e) {
				var n = this[0],
					i = !1;
				for ("object" == typeof t && (i = E(t)); n && !(i ? i.indexOf(n) >= 0 : H.matches(n, t));) n = n !== e && !r(n) && n.parentNode;
				return E(n)
			},
			parents: function(t) {
				for (var e = [], n = this; n.length > 0;) n = E.map(n, function(t) {
					return (t = t.parentNode) && !r(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
				});
				return m(e, t)
			},
			parent: function(t) {
				return m(_(this.pluck("parentNode")), t)
			},
			children: function(t) {
				return m(this.map(function() {
					return p(this)
				}), t)
			},
			contents: function() {
				return this.map(function() {
					return O.call(this.childNodes)
				})
			},
			siblings: function(t) {
				return m(this.map(function(t, e) {
					return j.call(p(e.parentNode), function(t) {
						return t !== e
					})
				}), t)
			},
			empty: function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck: function(t) {
				return E.map(this, function(e) {
					return e[t]
				})
			},
			show: function() {
				return this.each(function() {
					"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
				})
			},
			replaceWith: function(t) {
				return this.before(t).remove()
			},
			wrap: function(t) {
				var n = e(t);
				if (this[0] && !n) var r = E(t).get(0),
					i = r.parentNode || this.length > 1;
				return this.each(function(e) {
					E(this).wrapAll(n ? t.call(this, e) : i ? r.cloneNode(!0) : r)
				})
			},
			wrapAll: function(t) {
				if (this[0]) {
					E(this[0]).before(t = E(t));
					for (var e;
					(e = t.children()).length;) t = e.first();
					E(t).append(this)
				}
				return this
			},
			wrapInner: function(t) {
				var n = e(t);
				return this.each(function(e) {
					var r = E(this),
						i = r.contents(),
						o = n ? t.call(this, e) : t;
					i.length ? i.wrapAll(o) : r.append(o)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					E(this).replaceWith(E(this).children())
				}), this
			},
			clone: function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			hide: function() {
				return this.css("display", "none")
			},
			toggle: function(t) {
				return this.each(function() {
					var e = E(this);
					(t === x ? "none" == e.css("display") : t) ? e.show() : e.hide()
				})
			},
			prev: function(t) {
				return E(this.pluck("previousElementSibling")).filter(t || "*")
			},
			next: function(t) {
				return E(this.pluck("nextElementSibling")).filter(t || "*")
			},
			html: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = this.innerHTML;
					E(this).empty().append(v(this, t, e, n))
				}) : 0 in this ? this[0].innerHTML : null
			},
			text: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = v(this, t, e, this.textContent);
					this.textContent = null == n ? "" : "" + n
				}) : 0 in this ? this[0].textContent : null
			},
			attr: function(t, e) {
				var n;
				return "string" != typeof t || 1 in arguments ? this.each(function(n) {
					if (1 === this.nodeType) if (i(t)) for (b in t) g(this, b, t[b]);
					else g(this, t, v(this, e, n, this.getAttribute(t)))
				}) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : x
			},
			removeAttr: function(t) {
				return this.each(function() {
					1 === this.nodeType && t.split(" ").forEach(function(t) {
						g(this, t)
					}, this)
				})
			},
			prop: function(t, e) {
				return t = X[t] || t, 1 in arguments ? this.each(function(n) {
					this[t] = v(this, e, n, this[t])
				}) : this[0] && this[0][t]
			},
			data: function(t, e) {
				var n = "data-" + t.replace(G, "-$1").toLowerCase(),
					r = 1 in arguments ? this.attr(n, e) : this.attr(n);
				return null !== r ? w(r) : x
			},
			val: function(t) {
				return 0 in arguments ? this.each(function(e) {
					this.value = v(this, t, e, this.value)
				}) : this[0] && (this[0].multiple ? E(this[0]).find("option").filter(function() {
					return this.selected
				}).pluck("value") : this[0].value)
			},
			offset: function(t) {
				if (t) return this.each(function(e) {
					var n = E(this),
						r = v(this, t, e, n.offset()),
						i = n.offsetParent().offset(),
						o = {
							top: r.top - i.top,
							left: r.left - i.left
						};
					"static" == n.css("position") && (o.position = "relative"), n.css(o)
				});
				if (!this.length) return null;
				var e = this[0].getBoundingClientRect();
				return {
					left: e.left + window.pageXOffset,
					top: e.top + window.pageYOffset,
					width: Math.round(e.width),
					height: Math.round(e.height)
				}
			},
			css: function(e, n) {
				if (arguments.length < 2) {
					var r, i = this[0];
					if (!i) return;
					if (r = getComputedStyle(i, ""), "string" == typeof e) return i.style[A(e)] || r.getPropertyValue(e);
					if (Y(e)) {
						var o = {};
						return E.each(e, function(t, e) {
							o[e] = i.style[A(e)] || r.getPropertyValue(e)
						}), o
					}
				}
				var a = "";
				if ("string" == t(e)) n || 0 === n ? a = u(e) + ":" + f(e, n) : this.each(function() {
					this.style.removeProperty(u(e))
				});
				else for (b in e) e[b] || 0 === e[b] ? a += u(b) + ":" + f(b, e[b]) + ";" : this.each(function() {
					this.style.removeProperty(u(b))
				});
				return this.each(function() {
					this.style.cssText += ";" + a
				})
			},
			index: function(t) {
				return t ? this.indexOf(E(t)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass: function(t) {
				return t ? I.some.call(this, function(t) {
					return this.test(y(t))
				}, l(t)) : !1
			},
			addClass: function(t) {
				return t ? this.each(function(e) {
					if ("className" in this) {
						T = [];
						var n = y(this),
							r = v(this, t, e, n);
						r.split(/\s+/g).forEach(function(t) {
							E(this).hasClass(t) || T.push(t)
						}, this), T.length && y(this, n + (n ? " " : "") + T.join(" "))
					}
				}) : this
			},
			removeClass: function(t) {
				return this.each(function(e) {
					if ("className" in this) {
						if (t === x) return y(this, "");
						T = y(this), v(this, t, e, T).split(/\s+/g).forEach(function(t) {
							T = T.replace(l(t), " ")
						}), y(this, T.trim())
					}
				})
			},
			toggleClass: function(t, e) {
				return t ? this.each(function(n) {
					var r = E(this),
						i = v(this, t, n, y(this));
					i.split(/\s+/g).forEach(function(t) {
						(e === x ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
					})
				}) : this
			},
			scrollTop: function(t) {
				if (this.length) {
					var e = "scrollTop" in this[0];
					return t === x ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ?
					function() {
						this.scrollTop = t
					} : function() {
						this.scrollTo(this.scrollX, t)
					})
				}
			},
			scrollLeft: function(t) {
				if (this.length) {
					var e = "scrollLeft" in this[0];
					return t === x ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ?
					function() {
						this.scrollLeft = t
					} : function() {
						this.scrollTo(t, this.scrollY)
					})
				}
			},
			position: function() {
				if (this.length) {
					var t = this[0],
						e = this.offsetParent(),
						n = this.offset(),
						r = L.test(e[0].nodeName) ? {
							top: 0,
							left: 0
						} : e.offset();
					return n.top -= parseFloat(E(t).css("margin-top")) || 0, n.left -= parseFloat(E(t).css("margin-left")) || 0, r.top += parseFloat(E(e[0]).css("border-top-width")) || 0, r.left += parseFloat(E(e[0]).css("border-left-width")) || 0, {
						top: n.top - r.top,
						left: n.left - r.left
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var t = this.offsetParent || D.body; t && !L.test(t.nodeName) && "static" == E(t).css("position");) t = t.offsetParent;
					return t
				})
			}
		}, E.fn.detach = E.fn.remove, ["width", "height"].forEach(function(t) {
			var e = t.replace(/./, function(t) {
				return t[0].toUpperCase()
			});
			E.fn[t] = function(i) {
				var o, a = this[0];
				return i === x ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
					a = E(this), a.css(t, v(this, i, e, a[t]()))
				})
			}
		}), q.forEach(function(e, n) {
			var r = n % 2;
			E.fn[e] = function() {
				var e, i, o = E.map(arguments, function(n) {
					return e = t(n), "object" == e || "array" == e || null == n ? n : H.fragment(n)
				}),
					a = this.length > 1;
				return o.length < 1 ? this : this.each(function(t, e) {
					i = r ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
					var s = E.contains(D.documentElement, i);
					o.forEach(function(t) {
						if (a) t = t.cloneNode(!0);
						else if (!i) return E(t).remove();
						i.insertBefore(t, e), s && S(t, function(t) {
							null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
						})
					})
				})
			}, E.fn[r ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
				return E(t)[e](this), this
			}
		}), H.Z.prototype = E.fn, H.uniq = _, H.deserializeValue = w, E.zepto = H, E
	}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function(t) {
	function e(t) {
		return t._zid || (t._zid = h++)
	}
	function n(t, n, o, a) {
		if (n = r(n), n.ns) var s = i(n.ns);
		return (v[e(t)] || []).filter(function(t) {
			return !(!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a)
		})
	}
	function r(t) {
		var e = ("" + t).split(".");
		return {
			e: e[0],
			ns: e.slice(1).sort().join(" ")
		}
	}
	function i(t) {
		return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
	}
	function o(t, e) {
		return t.del && !y && t.e in w || !! e
	}
	function a(t) {
		return S[t] || y && w[t] || t
	}
	function s(n, i, s, c, l, h, p) {
		var d = e(n),
			m = v[d] || (v[d] = []);
		i.split(/\s/).forEach(function(e) {
			if ("ready" == e) return t(document).ready(s);
			var i = r(e);
			i.fn = s, i.sel = l, i.e in S && (s = function(e) {
				var n = e.relatedTarget;
				return !n || n !== this && !t.contains(this, n) ? i.fn.apply(this, arguments) : void 0
			}), i.del = h;
			var d = h || s;
			i.proxy = function(t) {
				if (t = u(t), !t.isImmediatePropagationStopped()) {
					t.data = c;
					var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
					return e === !1 && (t.preventDefault(), t.stopPropagation()), e
				}
			}, i.i = m.length, m.push(i), "addEventListener" in n && n.addEventListener(a(i.e), i.proxy, o(i, p))
		})
	}
	function c(t, r, i, s, c) {
		var u = e(t);
		(r || "").split(/\s/).forEach(function(e) {
			n(t, e, i, s).forEach(function(e) {
				delete v[u][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, c))
			})
		})
	}
	function u(e, n) {
		return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(T, function(t, r) {
			var i = n[t];
			e[t] = function() {
				return this[r] = x, i && i.apply(n, arguments)
			}, e[r] = b
		}), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = x)), e
	}
	function l(t) {
		var e, n = {
			originalEvent: t
		};
		for (e in t) E.test(e) || t[e] === f || (n[e] = t[e]);
		return u(n, t)
	}
	var f, h = 1,
		p = Array.prototype.slice,
		d = t.isFunction,
		m = function(t) {
			return "string" == typeof t
		},
		v = {},
		g = {},
		y = "onfocusin" in window,
		w = {
			focus: "focusin",
			blur: "focusout"
		},
		S = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		};
	g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents", t.event = {
		add: s,
		remove: c
	}, t.proxy = function(n, r) {
		var i = 2 in arguments && p.call(arguments, 2);
		if (d(n)) {
			var o = function() {
					return n.apply(r, i ? i.concat(p.call(arguments)) : arguments)
				};
			return o._zid = e(n), o
		}
		if (m(r)) return i ? (i.unshift(n[r], n), t.proxy.apply(null, i)) : t.proxy(n[r], n);
		throw new TypeError("expected function")
	}, t.fn.bind = function(t, e, n) {
		return this.on(t, e, n)
	}, t.fn.unbind = function(t, e) {
		return this.off(t, e)
	}, t.fn.one = function(t, e, n, r) {
		return this.on(t, e, n, r, 1)
	};
	var x = function() {
			return !0
		},
		b = function() {
			return !1
		},
		E = /^([A-Z]|returnValue$|layer[XY]$)/,
		T = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		};
	t.fn.delegate = function(t, e, n) {
		return this.on(e, t, n)
	}, t.fn.undelegate = function(t, e, n) {
		return this.off(e, t, n)
	}, t.fn.live = function(e, n) {
		return t(document.body).delegate(this.selector, e, n), this
	}, t.fn.die = function(e, n) {
		return t(document.body).undelegate(this.selector, e, n), this
	}, t.fn.on = function(e, n, r, i, o) {
		var a, u, h = this;
		return e && !m(e) ? (t.each(e, function(t, e) {
			h.on(t, n, r, e, o)
		}), h) : (m(n) || d(i) || i === !1 || (i = r, r = n, n = f), (d(r) || r === !1) && (i = r, r = f), i === !1 && (i = b), h.each(function(f, h) {
			o && (a = function(t) {
				return c(h, t.type, i), i.apply(this, arguments)
			}), n && (u = function(e) {
				var r, o = t(e.target).closest(n, h).get(0);
				return o && o !== h ? (r = t.extend(l(e), {
					currentTarget: o,
					liveFired: h
				}), (a || i).apply(o, [r].concat(p.call(arguments, 1)))) : void 0
			}), s(h, e, i, r, n, u || a)
		}))
	}, t.fn.off = function(e, n, r) {
		var i = this;
		return e && !m(e) ? (t.each(e, function(t, e) {
			i.off(t, n, e)
		}), i) : (m(n) || d(r) || r === !1 || (r = n, n = f), r === !1 && (r = b), i.each(function() {
			c(this, e, r, n)
		}))
	}, t.fn.trigger = function(e, n) {
		return e = m(e) || t.isPlainObject(e) ? t.Event(e) : u(e), e._args = n, this.each(function() {
			e.type in w && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
		})
	}, t.fn.triggerHandler = function(e, r) {
		var i, o;
		return this.each(function(a, s) {
			i = l(m(e) ? t.Event(e) : e), i._args = r, i.target = s, t.each(n(s, e.type || e), function(t, e) {
				return o = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
			})
		}), o
	}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
		t.fn[e] = function(t) {
			return 0 in arguments ? this.bind(e, t) : this.trigger(e)
		}
	}), t.Event = function(t, e) {
		m(t) || (e = t, t = e.type);
		var n = document.createEvent(g[t] || "Events"),
			r = !0;
		if (e) for (var i in e)"bubbles" == i ? r = !! e[i] : n[i] = e[i];
		return n.initEvent(t, r, !0), u(n)
	}
}(Zepto), function(t) {
	function e(e, n, r) {
		var i = t.Event(n);
		return t(e).trigger(i, r), !i.isDefaultPrevented()
	}
	function n(t, n, r, i) {
		return t.global ? e(n || y, r, i) : void 0
	}
	function r(e) {
		e.global && 0 === t.active++ && n(e, null, "ajaxStart")
	}
	function i(e) {
		e.global && !--t.active && n(e, null, "ajaxStop")
	}
	function o(t, e) {
		var r = e.context;
		return e.beforeSend.call(r, t, e) === !1 || n(e, r, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void n(e, r, "ajaxSend", [t, e])
	}
	function a(t, e, r, i) {
		var o = r.context,
			a = "success";
		r.success.call(o, t, a, e), i && i.resolveWith(o, [t, a, e]), n(r, o, "ajaxSuccess", [e, r, t]), c(a, e, r)
	}
	function s(t, e, r, i, o) {
		var a = i.context;
		i.error.call(a, r, e, t), o && o.rejectWith(a, [r, e, t]), n(i, a, "ajaxError", [r, i, t || e]), c(e, r, i)
	}
	function c(t, e, r) {
		var o = r.context;
		r.complete.call(o, e, t), n(r, o, "ajaxComplete", [e, r]), i(r)
	}
	function u() {}
	function l(t) {
		return t && (t = t.split(";", 2)[0]), t && (t == E ? "html" : t == b ? "json" : S.test(t) ? "script" : x.test(t) && "xml") || "text"
	}
	function f(t, e) {
		return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
	}
	function h(e) {
		e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
	}
	function p(e, n, r, i) {
		return t.isFunction(n) && (i = r, r = n, n = void 0), t.isFunction(r) || (i = r, r = void 0), {
			url: e,
			data: n,
			success: r,
			dataType: i
		}
	}
	function d(e, n, r, i) {
		var o, a = t.isArray(n),
			s = t.isPlainObject(n);
		t.each(n, function(n, c) {
			o = t.type(c), i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? e.add(c.name, c.value) : "array" == o || !r && "object" == o ? d(e, c, r, n) : e.add(n, c)
		})
	}
	var m, v, g = 0,
		y = window.document,
		w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		S = /^(?:text|application)\/javascript/i,
		x = /^(?:text|application)\/xml/i,
		b = "application/json",
		E = "text/html",
		T = /^\s*$/,
		A = y.createElement("a");
	A.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, n) {
		if (!("type" in e)) return t.ajax(e);
		var r, i, c = e.jsonpCallback,
			u = (t.isFunction(c) ? c() : c) || "jsonp" + ++g,
			l = y.createElement("script"),
			f = window[u],
			h = function(e) {
				t(l).triggerHandler("error", e || "abort")
			},
			p = {
				abort: h
			};
		return n && n.promise(p), t(l).on("load error", function(o, c) {
			clearTimeout(i), t(l).off().remove(), "error" != o.type && r ? a(r[0], p, e, n) : s(null, c || "error", p, e, n), window[u] = f, r && t.isFunction(f) && f(r[0]), f = r = void 0
		}), o(p, e) === !1 ? (h("abort"), p) : (window[u] = function() {
			r = arguments
		}, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + u), y.head.appendChild(l), e.timeout > 0 && (i = setTimeout(function() {
			h("timeout")
		}, e.timeout)), p)
	}, t.ajaxSettings = {
		type: "GET",
		beforeSend: u,
		success: u,
		error: u,
		complete: u,
		context: null,
		global: !0,
		xhr: function() {
			return new window.XMLHttpRequest
		},
		accepts: {
			script: "text/javascript, application/javascript, application/x-javascript",
			json: b,
			xml: "application/xml, text/xml",
			html: E,
			text: "text/plain"
		},
		crossDomain: !1,
		timeout: 0,
		processData: !0,
		cache: !0
	}, t.ajax = function(e) {
		var n, i = t.extend({}, e || {}),
			c = t.Deferred && t.Deferred();
		for (m in t.ajaxSettings) void 0 === i[m] && (i[m] = t.ajaxSettings[m]);
		r(i), i.crossDomain || (n = y.createElement("a"), n.href = i.url, n.href = n.href, i.crossDomain = A.protocol + "//" + A.host != n.protocol + "//" + n.host), i.url || (i.url = window.location.toString()), h(i);
		var p = i.dataType,
			d = /\?.+=\?/.test(i.url);
		if (d && (p = "jsonp"), i.cache !== !1 && (e && e.cache === !0 || "script" != p && "jsonp" != p) || (i.url = f(i.url, "_=" + Date.now())), "jsonp" == p) return d || (i.url = f(i.url, i.jsonp ? i.jsonp + "=?" : i.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(i, c);
		var g, w = i.accepts[p],
			S = {},
			x = function(t, e) {
				S[t.toLowerCase()] = [t, e]
			},
			b = /^([\w-]+:)\/\//.test(i.url) ? RegExp.$1 : window.location.protocol,
			E = i.xhr(),
			_ = E.setRequestHeader;
		if (c && c.promise(E), i.crossDomain || x("X-Requested-With", "XMLHttpRequest"), x("Accept", w || "*/*"), (w = i.mimeType || w) && (w.indexOf(",") > -1 && (w = w.split(",", 2)[0]), E.overrideMimeType && E.overrideMimeType(w)), (i.contentType || i.contentType !== !1 && i.data && "GET" != i.type.toUpperCase()) && x("Content-Type", i.contentType || "application/x-www-form-urlencoded"), i.headers) for (v in i.headers) x(v, i.headers[v]);
		if (E.setRequestHeader = x, E.onreadystatechange = function() {
			if (4 == E.readyState) {
				E.onreadystatechange = u, clearTimeout(g);
				var e, n = !1;
				if (E.status >= 200 && E.status < 300 || 304 == E.status || 0 == E.status && "file:" == b) {
					p = p || l(i.mimeType || E.getResponseHeader("content-type")), e = E.responseText;
					try {
						"script" == p ? (0, eval)(e) : "xml" == p ? e = E.responseXML : "json" == p && (e = T.test(e) ? null : t.parseJSON(e))
					} catch (r) {
						n = r
					}
					n ? s(n, "parsererror", E, i, c) : a(e, E, i, c)
				} else s(E.statusText || null, E.status ? "error" : "abort", E, i, c)
			}
		}, o(E, i) === !1) return E.abort(), s(null, "abort", E, i, c), E;
		if (i.xhrFields) for (v in i.xhrFields) E[v] = i.xhrFields[v];
		var I = "async" in i ? i.async : !0;
		E.open(i.type, i.url, I, i.username, i.password);
		for (v in S) _.apply(E, S[v]);
		return i.timeout > 0 && (g = setTimeout(function() {
			E.onreadystatechange = u, E.abort(), s(null, "timeout", E, i, c)
		}, i.timeout)), E.send(i.data ? i.data : null), E
	}, t.get = function() {
		return t.ajax(p.apply(null, arguments))
	}, t.post = function() {
		var e = p.apply(null, arguments);
		return e.type = "POST", t.ajax(e)
	}, t.getJSON = function() {
		var e = p.apply(null, arguments);
		return e.dataType = "json", t.ajax(e)
	}, t.fn.load = function(e, n, r) {
		if (!this.length) return this;
		var i, o = this,
			a = e.split(/\s/),
			s = p(e, n, r),
			c = s.success;
		return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function(e) {
			o.html(i ? t("<div>").html(e.replace(w, "")).find(i) : e), c && c.apply(o, arguments)
		}, t.ajax(s), this
	};
	var _ = encodeURIComponent;
	t.param = function(e, n) {
		var r = [];
		return r.add = function(e, n) {
			t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(_(e) + "=" + _(n))
		}, d(r, e, n), r.join("&").replace(/%20/g, "+")
	}
}(Zepto), function(t) {
	t.fn.serializeArray = function() {
		var e, n, r = [],
			i = function(t) {
				return t.forEach ? t.forEach(i) : void r.push({
					name: e,
					value: t
				})
			};
		return this[0] && t.each(this[0].elements, function(r, o) {
			n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(t(o).val())
		}), r
	}, t.fn.serialize = function() {
		var t = [];
		return this.serializeArray().forEach(function(e) {
			t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
		}), t.join("&")
	}, t.fn.submit = function(e) {
		if (0 in arguments) this.bind("submit", e);
		else if (this.length) {
			var n = t.Event("submit");
			this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
		}
		return this
	}
}(Zepto), function(t) {
	"__proto__" in {} || t.extend(t.zepto, {
		Z: function(e, n) {
			return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
		},
		isZ: function(e) {
			return "array" === t.type(e) && "__Z" in e
		}
	});
	try {
		getComputedStyle(void 0)
	} catch (e) {
		var n = getComputedStyle;
		window.getComputedStyle = function(t) {
			try {
				return n(t)
			} catch (e) {
				return null
			}
		}
	}
}(Zepto); /*  |xGv00|c5f12c45b6e4f23e5768f315c000bb4c */