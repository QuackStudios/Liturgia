(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3101],
  {
    19324: function (t, e) {
      !(function (t) {
        "use strict";
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function n(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        }
        function i(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        }
        function r(t) {
          if (void 0 === t)
            throw ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        var s,
          o,
          a,
          l,
          u,
          h,
          c,
          p,
          f,
          d,
          g,
          m,
          v,
          _,
          D,
          y,
          x,
          b,
          w,
          C,
          E,
          T,
          P,
          S,
          F,
          M,
          k = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
          },
          A = { duration: 0.5, overwrite: !1, delay: 0 },
          O = 2 * Math.PI,
          B = O / 4,
          L = 0,
          R = Math.sqrt,
          N = Math.cos,
          z = Math.sin,
          I = function (t) {
            return "string" == typeof t;
          },
          X = function (t) {
            return "function" == typeof t;
          },
          Y = function (t) {
            return "number" == typeof t;
          },
          H = function (t) {
            return void 0 === t;
          },
          V = function (t) {
            return "object" == typeof t;
          },
          j = function (t) {
            return !1 !== t;
          },
          W = function () {
            return !0;
          },
          q = function (t) {
            return X(t) || I(t);
          },
          G =
            ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () {},
          U = Array.isArray,
          K = /(?:-?\.?\d|\.)+/gi,
          Z = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          Q = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          $ = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          J = /[+-]=-?[.\d]+/,
          tt = /[^,'"\[\]\s]+/gi,
          te = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
          tn = {},
          ti = {},
          tr = function (t) {
            return (ti = tO(t, tn)) && nA;
          },
          ts = function (t, e) {
            return console.warn(
              "Invalid property",
              t,
              "set to",
              e,
              "Missing plugin? gsap.registerPlugin()"
            );
          },
          to = function (t, e) {
            return !e && console.warn(t);
          },
          ta = function (t, e) {
            return (t && (tn[t] = e) && ti && (ti[t] = e)) || tn;
          },
          tl = function () {
            return 0;
          },
          tu = { suppressEvents: !0, isStart: !0, kill: !1 },
          th = { suppressEvents: !0, kill: !1 },
          tc = { suppressEvents: !0 },
          tp = {},
          tf = [],
          td = {},
          tg = {},
          tm = {},
          tv = 30,
          t_ = [],
          tD = "",
          ty = function (t) {
            var e,
              n,
              i = t[0];
            if ((V(i) || X(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
              for (n = t_.length; n-- && !t_[n].targetTest(i); );
              e = t_[n];
            }
            for (n = t.length; n--; )
              (t[n] && (t[n]._gsap || (t[n]._gsap = new eU(t[n], e)))) ||
                t.splice(n, 1);
            return t;
          },
          tx = function (t) {
            return t._gsap || ty(er(t))[0]._gsap;
          },
          tb = function (t, e, n) {
            return (n = t[e]) && X(n)
              ? t[e]()
              : (H(n) && t.getAttribute && t.getAttribute(e)) || n;
          },
          tw = function (t, e) {
            return (t = t.split(",")).forEach(e) || t;
          },
          tC = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          tE = function (t) {
            return Math.round(1e7 * t) / 1e7 || 0;
          },
          tT = function (t, e) {
            var n = e.charAt(0),
              i = parseFloat(e.substr(2));
            return (
              (t = parseFloat(t)),
              "+" === n ? t + i : "-" === n ? t - i : "*" === n ? t * i : t / i
            );
          },
          tP = function (t, e) {
            for (var n = e.length, i = 0; 0 > t.indexOf(e[i]) && ++i < n; );
            return i < n;
          },
          tS = function () {
            var t,
              e,
              n = tf.length,
              i = tf.slice(0);
            for (t = 0, td = {}, tf.length = 0; t < n; t++)
              (e = i[t]) &&
                e._lazy &&
                (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
          },
          tF = function (t, e, n, i) {
            tf.length && !x && tS(),
              t.render(e, n, i || (x && e < 0 && (t._initted || t._startAt))),
              tf.length && !x && tS();
          },
          tM = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(tt).length < 2
              ? e
              : I(t)
              ? t.trim()
              : t;
          },
          tk = function (t) {
            return t;
          },
          tA = function (t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t;
          },
          tO = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t;
          },
          tB = function t(e, n) {
            for (var i in n)
              "__proto__" !== i &&
                "constructor" !== i &&
                "prototype" !== i &&
                (e[i] = V(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
            return e;
          },
          tL = function (t, e) {
            var n,
              i = {};
            for (n in t) n in e || (i[n] = t[n]);
            return i;
          },
          tR = function (t) {
            var e,
              n = t.parent || w,
              i = t.keyframes
                ? ((e = U(t.keyframes)),
                  function (t, n) {
                    for (var i in n)
                      i in t ||
                        ("duration" === i && e) ||
                        "ease" === i ||
                        (t[i] = n[i]);
                  })
                : tA;
            if (j(t.inherit))
              for (; n; ) i(t, n.vars.defaults), (n = n.parent || n._dp);
            return t;
          },
          tN = function (t, e) {
            for (
              var n = t.length, i = n === e.length;
              i && n-- && t[n] === e[n];

            );
            return n < 0;
          },
          tz = function (t, e, n, i, r) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var s,
              o = t[i];
            if (r) for (s = e[r]; o && o[r] > s; ) o = o._prev;
            return (
              o
                ? ((e._next = o._next), (o._next = e))
                : ((e._next = t[n]), (t[n] = e)),
              e._next ? (e._next._prev = e) : (t[i] = e),
              (e._prev = o),
              (e.parent = e._dp = t),
              e
            );
          },
          tI = function (t, e, n, i) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var r = e._prev,
              s = e._next;
            r ? (r._next = s) : t[n] === e && (t[n] = s),
              s ? (s._prev = r) : t[i] === e && (t[i] = r),
              (e._next = e._prev = e.parent = null);
          },
          tX = function (t, e) {
            t.parent &&
              (!e || t.parent.autoRemoveChildren) &&
              t.parent.remove &&
              t.parent.remove(t),
              (t._act = 0);
          },
          tY = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
              for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
            return t;
          },
          tH = function (t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          },
          tV = function (t, e, n, i) {
            return (
              t._startAt &&
              (x
                ? t._startAt.revert(th)
                : (t.vars.immediateRender && !t.vars.autoRevert) ||
                  t._startAt.render(e, !0, i))
            );
          },
          tj = function (t) {
            return t._repeat
              ? tW(t._tTime, (t = t.duration() + t._rDelay)) * t
              : 0;
          },
          tW = function (t, e) {
            var n = Math.floor((t /= e));
            return t && n === t ? n - 1 : n;
          },
          tq = function (t, e) {
            return (
              (t - e._start) * e._ts +
              (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            );
          },
          tG = function (t) {
            return (t._end = tE(
              t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
            ));
          },
          tU = function (t, e) {
            var n = t._dp;
            return (
              n &&
                n.smoothChildTiming &&
                t._ts &&
                ((t._start = tE(
                  n._time -
                    (t._ts > 0
                      ? e / t._ts
                      : -(
                          ((t._dirty ? t.totalDuration() : t._tDur) - e) /
                          t._ts
                        ))
                )),
                tG(t),
                n._dirty || tY(n, t)),
              t
            );
          },
          tK = function (t, e) {
            var n;
            if (
              ((e._time ||
                (!e._dur && e._initted) ||
                (e._start < t._time && (e._dur || !e.add))) &&
                ((n = tq(t.rawTime(), e)),
                (!e._dur || t9(0, e.totalDuration(), n) - e._tTime > 1e-8) &&
                  e.render(n, !0)),
              tY(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
            ) {
              if (t._dur < t.duration())
                for (n = t; n._dp; )
                  n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
              t._zTime = -1e-8;
            }
          },
          tZ = function (t, e, n, i) {
            return (
              e.parent && tX(e),
              (e._start = tE(
                (Y(n) ? n : n || t !== w ? t6(t, n, e) : t._time) + e._delay
              )),
              (e._end = tE(
                e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
              )),
              tz(t, e, "_first", "_last", t._sort ? "_start" : 0),
              t1(e) || (t._recent = e),
              i || tK(t, e),
              t._ts < 0 && tU(t, t._tTime),
              t
            );
          },
          tQ = function (t, e) {
            return (
              (tn.ScrollTrigger || ts("scrollTrigger", e)) &&
              tn.ScrollTrigger.create(e, t)
            );
          },
          t$ = function (t, e, n, i, r) {
            return (e8(t, e, r), t._initted)
              ? !n &&
                t._pt &&
                !x &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                S !== eO.frame
                ? (tf.push(t), (t._lazy = [r, i]), 1)
                : void 0
              : 1;
          },
          tJ = function t(e) {
            var n = e.parent;
            return (
              n && n._ts && n._initted && !n._lock && (0 > n.rawTime() || t(n))
            );
          },
          t1 = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e;
          },
          t0 = function (t, e, n, i) {
            var r,
              s,
              o,
              a = t.ratio,
              l =
                e < 0 ||
                (!e &&
                  ((!t._start && tJ(t) && !(!t._initted && t1(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !t1(t))))
                  ? 0
                  : 1,
              u = t._rDelay,
              h = 0;
            if (
              (u &&
                t._repeat &&
                ((s = tW((h = t9(0, t._tDur, e)), u)),
                t._yoyo && 1 & s && (l = 1 - l),
                s !== tW(t._tTime, u) &&
                  ((a = 1 - l),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              l !== a || x || i || 1e-8 === t._zTime || (!e && t._zTime))
            ) {
              if (!t._initted && t$(t, e, i, n, h)) return;
              for (
                o = t._zTime,
                  t._zTime = e || (n ? 1e-8 : 0),
                  n || (n = e && !o),
                  t.ratio = l,
                  t._from && (l = 1 - l),
                  t._time = 0,
                  t._tTime = h,
                  r = t._pt;
                r;

              )
                r.r(l, r.d), (r = r._next);
              e < 0 && tV(t, e, n, !0),
                t._onUpdate && !n && ex(t, "onUpdate"),
                h && t._repeat && !n && t.parent && ex(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === l &&
                  (l && tX(t, 1),
                  n ||
                    x ||
                    (ex(t, l ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          },
          t2 = function (t, e, n) {
            var i;
            if (n > e)
              for (i = t._first; i && i._start <= n; ) {
                if ("isPause" === i.data && i._start > e) return i;
                i = i._next;
              }
            else
              for (i = t._last; i && i._start >= n; ) {
                if ("isPause" === i.data && i._start < e) return i;
                i = i._prev;
              }
          },
          t3 = function (t, e, n, i) {
            var r = t._repeat,
              s = tE(e) || 0,
              o = t._tTime / t._tDur;
            return (
              o && !i && (t._time *= s / t._dur),
              (t._dur = s),
              (t._tDur = r
                ? r < 0
                  ? 1e10
                  : tE(s * (r + 1) + t._rDelay * r)
                : s),
              o > 0 && !i && tU(t, (t._tTime = t._tDur * o)),
              t.parent && tG(t),
              n || tY(t.parent, t),
              t
            );
          },
          t5 = function (t) {
            return t instanceof eZ ? tY(t) : t3(t, t._dur);
          },
          t4 = { _start: 0, endTime: tl, totalDuration: tl },
          t6 = function t(e, n, i) {
            var r,
              s,
              o,
              a = e.labels,
              l = e._recent || t4,
              u = e.duration() >= 1e8 ? l.endTime(!1) : e._dur;
            return I(n) && (isNaN(n) || n in a)
              ? ((s = n.charAt(0)),
                (o = "%" === n.substr(-1)),
                (r = n.indexOf("=")),
                "<" === s || ">" === s)
                ? (r >= 0 && (n = n.replace(/=/, "")),
                  ("<" === s ? l._start : l.endTime(l._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (o ? (r < 0 ? l : i).totalDuration() / 100 : 1))
                : r < 0
                ? (n in a || (a[n] = u), a[n])
                : ((s = parseFloat(n.charAt(r - 1) + n.substr(r + 1))),
                  o && i && (s = (s / 100) * (U(i) ? i[0] : i).totalDuration()),
                  r > 1 ? t(e, n.substr(0, r - 1), i) + s : u + s)
              : null == n
              ? u
              : +n;
          },
          t8 = function (t, e, n) {
            var i,
              r,
              s = Y(e[1]),
              o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
              a = e[o];
            if ((s && (a.duration = e[1]), (a.parent = n), t)) {
              for (i = a, r = n; r && !("immediateRender" in i); )
                (i = r.vars.defaults || {}),
                  (r = j(r.vars.inherit) && r.parent);
              (a.immediateRender = j(i.immediateRender)),
                t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
            }
            return new nr(e[0], a, e[o + 1]);
          },
          t7 = function (t, e) {
            return t || 0 === t ? e(t) : e;
          },
          t9 = function (t, e, n) {
            return n < t ? t : n > e ? e : n;
          },
          et = function (t, e) {
            return I(t) && (e = te.exec(t)) ? e[1] : "";
          },
          ee = function (t, e, n) {
            return t7(n, function (n) {
              return t9(t, e, n);
            });
          },
          en = [].slice,
          ei = function (t, e) {
            return (
              t &&
              V(t) &&
              "length" in t &&
              ((!e && !t.length) || (t.length - 1 in t && V(t[0]))) &&
              !t.nodeType &&
              t !== C
            );
          },
          er = function (t, e, n) {
            var i;
            return b && !e && b.selector
              ? b.selector(t)
              : I(t) && !n && (E || !eB())
              ? en.call((e || T).querySelectorAll(t), 0)
              : U(t)
              ? (void 0 === i && (i = []),
                t.forEach(function (t) {
                  var e;
                  return (I(t) && !n) || ei(t, 1)
                    ? (e = i).push.apply(e, er(t))
                    : i.push(t);
                }) || i)
              : ei(t)
              ? en.call(t, 0)
              : t
              ? [t]
              : [];
          },
          es = function (t) {
            return (
              (t = er(t)[0] || to("Invalid scope") || {}),
              function (e) {
                var n = t.current || t.nativeElement || t;
                return er(
                  e,
                  n.querySelectorAll
                    ? n
                    : n === t
                    ? to("Invalid scope") || T.createElement("div")
                    : t
                );
              }
            );
          },
          eo = function (t) {
            return t.sort(function () {
              return 0.5 - Math.random();
            });
          },
          ea = function (t) {
            if (X(t)) return t;
            var e = V(t) ? t : { each: t },
              n = eV(e.ease),
              i = e.from || 0,
              r = parseFloat(e.base) || 0,
              s = {},
              o = i > 0 && i < 1,
              a = isNaN(i) || o,
              l = e.axis,
              u = i,
              h = i;
            return (
              I(i)
                ? (u = h = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
                : !o && a && ((u = i[0]), (h = i[1])),
              function (t, o, c) {
                var p,
                  f,
                  d,
                  g,
                  m,
                  v,
                  _,
                  D,
                  y,
                  x = (c || e).length,
                  b = s[x];
                if (!b) {
                  if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                    for (
                      _ = -1e8;
                      _ < (_ = c[y++].getBoundingClientRect().left) && y < x;

                    );
                    y < x && y--;
                  }
                  for (
                    v = 0,
                      b = s[x] = [],
                      p = a ? Math.min(y, x) * u - 0.5 : i % y,
                      f = 1e8 === y ? 0 : a ? (x * h) / y - 0.5 : (i / y) | 0,
                      _ = 0,
                      D = 1e8;
                    v < x;
                    v++
                  )
                    (d = (v % y) - p),
                      (g = f - ((v / y) | 0)),
                      (b[v] = m =
                        l ? Math.abs("y" === l ? g : d) : R(d * d + g * g)),
                      m > _ && (_ = m),
                      m < D && (D = m);
                  "random" === i && eo(b),
                    (b.max = _ - D),
                    (b.min = D),
                    (b.v = x =
                      (parseFloat(e.amount) ||
                        parseFloat(e.each) *
                          (y > x
                            ? x - 1
                            : l
                            ? "y" === l
                              ? x / y
                              : y
                            : Math.max(y, x / y)) ||
                        0) * ("edges" === i ? -1 : 1)),
                    (b.b = x < 0 ? r - x : r),
                    (b.u = et(e.amount || e.each) || 0),
                    (n = n && x < 0 ? eY(n) : n);
                }
                return (
                  (x = (b[t] - b.min) / b.max || 0),
                  tE(b.b + (n ? n(x) : x) * b.v) + b.u
                );
              }
            );
          },
          el = function (t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function (n) {
              var i = tE(Math.round(parseFloat(n) / t) * t * e);
              return (i - (i % 1)) / e + (Y(n) ? 0 : et(n));
            };
          },
          eu = function (t, e) {
            var n,
              i,
              r = U(t);
            return (
              !r &&
                V(t) &&
                ((n = r = t.radius || 1e8),
                t.values
                  ? (i = !Y((t = er(t.values))[0])) && (n *= n)
                  : (t = el(t.increment))),
              t7(
                e,
                r
                  ? X(t)
                    ? function (e) {
                        return Math.abs((i = t(e)) - e) <= n ? i : e;
                      }
                    : function (e) {
                        for (
                          var r,
                            s,
                            o = parseFloat(i ? e.x : e),
                            a = parseFloat(i ? e.y : 0),
                            l = 1e8,
                            u = 0,
                            h = t.length;
                          h--;

                        )
                          (r = i
                            ? (r = t[h].x - o) * r + (s = t[h].y - a) * s
                            : Math.abs(t[h] - o)) < l && ((l = r), (u = h));
                        return (
                          (u = !n || l <= n ? t[u] : e),
                          i || u === e || Y(e) ? u : u + et(e)
                        );
                      }
                  : el(t)
              )
            );
          },
          eh = function (t, e, n, i) {
            return t7(U(t) ? !e : !0 === n ? ((n = 0), !1) : !i, function () {
              return U(t)
                ? t[~~(Math.random() * t.length)]
                : (i =
                    (n = n || 1e-5) < 1
                      ? Math.pow(10, (n + "").length - 2)
                      : 1) &&
                    Math.floor(
                      Math.round(
                        (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n
                      ) *
                        n *
                        i
                    ) / i;
            });
          },
          ec = function () {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          ep = function (t, e) {
            return function (n) {
              return t(parseFloat(n)) + (e || et(n));
            };
          },
          ef = function (t, e, n) {
            return e_(t, e, 0, 1, n);
          },
          ed = function (t, e, n) {
            return t7(n, function (n) {
              return t[~~e(n)];
            });
          },
          eg = function t(e, n, i) {
            var r = n - e;
            return U(e)
              ? ed(e, t(0, e.length), n)
              : t7(i, function (t) {
                  return ((r + ((t - e) % r)) % r) + e;
                });
          },
          em = function t(e, n, i) {
            var r = n - e,
              s = 2 * r;
            return U(e)
              ? ed(e, t(0, e.length - 1), n)
              : t7(i, function (t) {
                  return (
                    (t = (s + ((t - e) % s)) % s || 0), e + (t > r ? s - t : t)
                  );
                });
          },
          ev = function (t) {
            for (
              var e, n, i, r, s = 0, o = "";
              ~(e = t.indexOf("random(", s));

            )
              (i = t.indexOf(")", e)),
                (r = "[" === t.charAt(e + 7)),
                (n = t.substr(e + 7, i - e - 7).match(r ? tt : K)),
                (o +=
                  t.substr(s, e - s) +
                  eh(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)),
                (s = i + 1);
            return o + t.substr(s, t.length - s);
          },
          e_ = function (t, e, n, i, r) {
            var s = e - t,
              o = i - n;
            return t7(r, function (e) {
              return n + (((e - t) / s) * o || 0);
            });
          },
          eD = function t(e, n, i, r) {
            var s = isNaN(e + n)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * n;
                };
            if (!s) {
              var o,
                a,
                l,
                u,
                h,
                c = I(e),
                p = {};
              if ((!0 === i && (r = 1) && (i = null), c))
                (e = { p: e }), (n = { p: n });
              else if (U(e) && !U(n)) {
                for (a = 1, l = [], h = (u = e.length) - 2; a < u; a++)
                  l.push(t(e[a - 1], e[a]));
                u--,
                  (s = function (t) {
                    var e = Math.min(h, ~~(t *= u));
                    return l[e](t - e);
                  }),
                  (i = n);
              } else r || (e = tO(U(e) ? [] : {}, e));
              if (!l) {
                for (o in n) e5.call(p, e, o, "get", n[o]);
                s = function (t) {
                  return nf(t, p) || (c ? e.p : e);
                };
              }
            }
            return t7(i, s);
          },
          ey = function (t, e, n) {
            var i,
              r,
              s,
              o = t.labels,
              a = 1e8;
            for (i in o)
              (r = o[i] - e) < 0 == !!n &&
                r &&
                a > (r = Math.abs(r)) &&
                ((s = i), (a = r));
            return s;
          },
          ex = function (t, e, n) {
            var i,
              r,
              s,
              o = t.vars,
              a = o[e],
              l = b,
              u = t._ctx;
            if (a)
              return (
                (i = o[e + "Params"]),
                (r = o.callbackScope || t),
                n && tf.length && tS(),
                u && (b = u),
                (s = i ? a.apply(r, i) : a.call(r)),
                (b = l),
                s
              );
          },
          eb = function (t) {
            return (
              tX(t),
              t.scrollTrigger && t.scrollTrigger.kill(!!x),
              1 > t.progress() && ex(t, "onInterrupt"),
              t
            );
          },
          ew = [],
          eC = function (t) {
            if (t) {
              if (((t = (!t.name && t.default) || t), W() || t.headless)) {
                var e = t.name,
                  n = X(t),
                  i =
                    e && !n && t.init
                      ? function () {
                          this._props = [];
                        }
                      : t,
                  r = {
                    init: tl,
                    render: nf,
                    add: e5,
                    kill: ng,
                    modifier: nd,
                    rawVars: 0,
                  },
                  s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: nu,
                    aliases: {},
                    register: 0,
                  };
                if ((eB(), t !== i)) {
                  if (tg[e]) return;
                  tA(i, tA(tL(t, r), s)),
                    tO(i.prototype, tO(r, tL(t, s))),
                    (tg[(i.prop = e)] = i),
                    t.targetTest && (t_.push(i), (tp[e] = 1)),
                    (e =
                      ("css" === e
                        ? "CSS"
                        : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
                }
                ta(e, i), t.register && t.register(nA, i, n_);
              } else ew.push(t);
            }
          },
          eE = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          eT = function (t, e, n) {
            return (
              ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
                ? e + (n - e) * t * 6
                : t < 0.5
                ? n
                : 3 * t < 2
                ? e + (n - e) * (2 / 3 - t) * 6
                : e) *
                255 +
                0.5) |
              0
            );
          },
          eP = function (t, e, n) {
            var i,
              r,
              s,
              o,
              a,
              l,
              u,
              h,
              c,
              p,
              f = t
                ? Y(t)
                  ? [t >> 16, (t >> 8) & 255, 255 & t]
                  : 0
                : eE.black;
            if (!f) {
              if (
                ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), eE[t])
              )
                f = eE[t];
              else if ("#" === t.charAt(0)) {
                if (
                  (t.length < 6 &&
                    (t =
                      "#" +
                      (i = t.charAt(1)) +
                      i +
                      (r = t.charAt(2)) +
                      r +
                      (s = t.charAt(3)) +
                      s +
                      (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                  9 === t.length)
                )
                  return [
                    (f = parseInt(t.substr(1, 6), 16)) >> 16,
                    (f >> 8) & 255,
                    255 & f,
                    parseInt(t.substr(7), 16) / 255,
                  ];
                f = [
                  (t = parseInt(t.substr(1), 16)) >> 16,
                  (t >> 8) & 255,
                  255 & t,
                ];
              } else if ("hsl" === t.substr(0, 3)) {
                if (((f = p = t.match(K)), e)) {
                  if (~t.indexOf("="))
                    return (f = t.match(Z)), n && f.length < 4 && (f[3] = 1), f;
                } else
                  (o = (+f[0] % 360) / 360),
                    (a = +f[1] / 100),
                    (r =
                      (l = +f[2] / 100) <= 0.5 ? l * (a + 1) : l + a - l * a),
                    (i = 2 * l - r),
                    f.length > 3 && (f[3] *= 1),
                    (f[0] = eT(o + 1 / 3, i, r)),
                    (f[1] = eT(o, i, r)),
                    (f[2] = eT(o - 1 / 3, i, r));
              } else f = t.match(K) || eE.transparent;
              f = f.map(Number);
            }
            return (
              e &&
                !p &&
                ((l =
                  ((u = Math.max(
                    (i = f[0] / 255),
                    (r = f[1] / 255),
                    (s = f[2] / 255)
                  )) +
                    (h = Math.min(i, r, s))) /
                  2),
                u === h
                  ? (o = a = 0)
                  : ((c = u - h),
                    (a = l > 0.5 ? c / (2 - u - h) : c / (u + h)),
                    (o =
                      (u === i
                        ? (r - s) / c + (r < s ? 6 : 0)
                        : u === r
                        ? (s - i) / c + 2
                        : (i - r) / c + 4) * 60)),
                (f[0] = ~~(o + 0.5)),
                (f[1] = ~~(100 * a + 0.5)),
                (f[2] = ~~(100 * l + 0.5))),
              n && f.length < 4 && (f[3] = 1),
              f
            );
          },
          eS = function (t) {
            var e = [],
              n = [],
              i = -1;
            return (
              t.split(eM).forEach(function (t) {
                var r = t.match(Q) || [];
                e.push.apply(e, r), n.push((i += r.length + 1));
              }),
              (e.c = n),
              e
            );
          },
          eF = function (t, e, n) {
            var i,
              r,
              s,
              o,
              a = "",
              l = (t + a).match(eM),
              u = e ? "hsla(" : "rgba(",
              h = 0;
            if (!l) return t;
            if (
              ((l = l.map(function (t) {
                return (
                  (t = eP(t, e, 1)) &&
                  u +
                    (e
                      ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                      : t.join(",")) +
                    ")"
                );
              })),
              n && ((s = eS(t)), (i = n.c).join(a) !== s.c.join(a)))
            )
              for (o = (r = t.replace(eM, "1").split(Q)).length - 1; h < o; h++)
                a +=
                  r[h] +
                  (~i.indexOf(h)
                    ? l.shift() || u + "0,0,0,0)"
                    : (s.length ? s : l.length ? l : n).shift());
            if (!r)
              for (o = (r = t.split(eM)).length - 1; h < o; h++)
                a += r[h] + l[h];
            return a + r[o];
          },
          eM = (function () {
            var t,
              e =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in eE) e += "|" + t + "\\b";
            return RegExp(e + ")", "gi");
          })(),
          ek = /hsl[a]?\(/,
          eA = function (t) {
            var e,
              n = t.join(" ");
            if (((eM.lastIndex = 0), eM.test(n)))
              return (
                (e = ek.test(n)),
                (t[1] = eF(t[1], e)),
                (t[0] = eF(t[0], e, eS(t[1]))),
                !0
              );
          },
          eO =
            ((c = Date.now),
            (p = 500),
            (f = 33),
            (g = d = c()),
            (m = 1e3 / 240),
            (v = 1e3 / 240),
            (_ = []),
            (D = function t(e) {
              var n,
                i,
                r,
                a,
                D = c() - g,
                y = !0 === e;
              if (
                ((D > p || D < 0) && (d += D - f),
                (g += D),
                ((n = (r = g - d) - v) > 0 || y) &&
                  ((a = ++l.frame),
                  (u = r - 1e3 * l.time),
                  (l.time = r /= 1e3),
                  (v += n + (n >= m ? 4 : m - n)),
                  (i = 1)),
                y || (s = o(t)),
                i)
              )
                for (h = 0; h < _.length; h++) _[h](r, u, a, e);
            }),
            (l = {
              time: 0,
              frame: 0,
              tick: function () {
                D(!0);
              },
              deltaRatio: function (t) {
                return u / (1e3 / (t || 60));
              },
              wake: function () {
                P &&
                  (!E &&
                    W() &&
                    ((T = (C = E = window).document || {}),
                    (tn.gsap = nA),
                    (C.gsapVersions || (C.gsapVersions = [])).push(nA.version),
                    tr(ti || C.GreenSockGlobals || (!C.gsap && C) || {}),
                    ew.forEach(eC)),
                  (a =
                    "undefined" != typeof requestAnimationFrame &&
                    requestAnimationFrame),
                  s && l.sleep(),
                  (o =
                    a ||
                    function (t) {
                      return setTimeout(t, (v - 1e3 * l.time + 1) | 0);
                    }),
                  (M = 1),
                  D(2));
              },
              sleep: function () {
                (a ? cancelAnimationFrame : clearTimeout)(s), (M = 0), (o = tl);
              },
              lagSmoothing: function (t, e) {
                f = Math.min(e || 33, (p = t || 1 / 0));
              },
              fps: function (t) {
                (m = 1e3 / (t || 240)), (v = 1e3 * l.time + m);
              },
              add: function (t, e, n) {
                var i = e
                  ? function (e, n, r, s) {
                      t(e, n, r, s), l.remove(i);
                    }
                  : t;
                return l.remove(t), _[n ? "unshift" : "push"](i), eB(), i;
              },
              remove: function (t, e) {
                ~(e = _.indexOf(t)) && _.splice(e, 1) && h >= e && h--;
              },
              _listeners: _,
            })),
          eB = function () {
            return !M && eO.wake();
          },
          eL = {},
          eR = /^[\d.\-M][\d.\-,\s]/,
          eN = /["']/g,
          ez = function (t) {
            for (
              var e,
                n,
                i,
                r = {},
                s = t.substr(1, t.length - 3).split(":"),
                o = s[0],
                a = 1,
                l = s.length;
              a < l;
              a++
            )
              (n = s[a]),
                (e = a !== l - 1 ? n.lastIndexOf(",") : n.length),
                (i = n.substr(0, e)),
                (r[o] = isNaN(i) ? i.replace(eN, "").trim() : +i),
                (o = n.substr(e + 1).trim());
            return r;
          },
          eI = function (t) {
            var e = t.indexOf("(") + 1,
              n = t.indexOf(")"),
              i = t.indexOf("(", e);
            return t.substring(e, ~i && i < n ? t.indexOf(")", n + 1) : n);
          },
          eX = function (t) {
            var e = (t + "").split("("),
              n = eL[e[0]];
            return n && e.length > 1 && n.config
              ? n.config.apply(
                  null,
                  ~t.indexOf("{") ? [ez(e[1])] : eI(t).split(",").map(tM)
                )
              : eL._CE && eR.test(t)
              ? eL._CE("", t)
              : n;
          },
          eY = function (t) {
            return function (e) {
              return 1 - t(1 - e);
            };
          },
          eH = function t(e, n) {
            for (var i, r = e._first; r; )
              r instanceof eZ
                ? t(r, n)
                : !r.vars.yoyoEase ||
                  (r._yoyo && r._repeat) ||
                  r._yoyo === n ||
                  (r.timeline
                    ? t(r.timeline, n)
                    : ((i = r._ease),
                      (r._ease = r._yEase),
                      (r._yEase = i),
                      (r._yoyo = n))),
                (r = r._next);
          },
          eV = function (t, e) {
            return (t && (X(t) ? t : eL[t] || eX(t))) || e;
          },
          ej = function (t, e, n, i) {
            void 0 === n &&
              (n = function (t) {
                return 1 - e(1 - t);
              }),
              void 0 === i &&
                (i = function (t) {
                  return t < 0.5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2;
                });
            var r,
              s = { easeIn: e, easeOut: n, easeInOut: i };
            return (
              tw(t, function (t) {
                for (var e in ((eL[t] = tn[t] = s),
                (eL[(r = t.toLowerCase())] = n),
                s))
                  eL[
                    r +
                      ("easeIn" === e
                        ? ".in"
                        : "easeOut" === e
                        ? ".out"
                        : ".inOut")
                  ] = eL[t + "." + e] = s[e];
              }),
              s
            );
          },
          eW = function (t) {
            return function (e) {
              return e < 0.5
                ? (1 - t(1 - 2 * e)) / 2
                : 0.5 + t((e - 0.5) * 2) / 2;
            };
          },
          eq = function t(e, n, i) {
            var r = n >= 1 ? n : 1,
              s = (i || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
              o = (s / O) * (Math.asin(1 / r) || 0),
              a = function (t) {
                return 1 === t
                  ? 1
                  : r * Math.pow(2, -10 * t) * z((t - o) * s) + 1;
              },
              l =
                "out" === e
                  ? a
                  : "in" === e
                  ? function (t) {
                      return 1 - a(1 - t);
                    }
                  : eW(a);
            return (
              (s = O / s),
              (l.config = function (n, i) {
                return t(e, n, i);
              }),
              l
            );
          },
          eG = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var i = function (t) {
                return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
              },
              r =
                "out" === e
                  ? i
                  : "in" === e
                  ? function (t) {
                      return 1 - i(1 - t);
                    }
                  : eW(i);
            return (
              (r.config = function (n) {
                return t(e, n);
              }),
              r
            );
          };
        tw("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
          var n = e < 5 ? e + 1 : e;
          ej(
            t + ",Power" + (n - 1),
            e
              ? function (t) {
                  return Math.pow(t, n);
                }
              : function (t) {
                  return t;
                },
            function (t) {
              return 1 - Math.pow(1 - t, n);
            },
            function (t) {
              return t < 0.5
                ? Math.pow(2 * t, n) / 2
                : 1 - Math.pow((1 - t) * 2, n) / 2;
            }
          );
        }),
          (eL.Linear.easeNone = eL.none = eL.Linear.easeIn),
          ej("Elastic", eq("in"), eq("out"), eq()),
          (e$ = 2 * (eQ = 1 / 2.75)),
          (eJ = 2.5 * eQ),
          ej(
            "Bounce",
            function (t) {
              return 1 - e1(1 - t);
            },
            (e1 = function (t) {
              return t < eQ
                ? 7.5625 * t * t
                : t < e$
                ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + 0.75
                : t < eJ
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
            })
          ),
          ej("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
          }),
          ej("Circ", function (t) {
            return -(R(1 - t * t) - 1);
          }),
          ej("Sine", function (t) {
            return 1 === t ? 1 : -N(t * B) + 1;
          }),
          ej("Back", eG("in"), eG("out"), eG()),
          (eL.SteppedEase =
            eL.steps =
            tn.SteppedEase =
              {
                config: function (t, e) {
                  void 0 === t && (t = 1);
                  var n = 1 / t,
                    i = t + (e ? 0 : 1),
                    r = e ? 1 : 0;
                  return function (t) {
                    return (((i * t9(0, 0.99999999, t)) | 0) + r) * n;
                  };
                },
              }),
          (A.ease = eL["quad.out"]),
          tw(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (t) {
              return (tD += t + "," + t + "Params,");
            }
          );
        var eU = function (t, e) {
            (this.id = L++),
              (t._gsap = this),
              (this.target = t),
              (this.harness = e),
              (this.get = e ? e.get : tb),
              (this.set = e ? e.getSetter : nu);
          },
          eK = (function () {
            function t(t) {
              (this.vars = t),
                (this._delay = +t.delay || 0),
                (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                  ((this._rDelay = t.repeatDelay || 0),
                  (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                (this._ts = 1),
                t3(this, +t.duration, 1, 1),
                (this.data = t.data),
                b && ((this._ctx = b), b.data.push(this)),
                M || eO.wake();
            }
            var e = t.prototype;
            return (
              (e.delay = function (t) {
                return t || 0 === t
                  ? (this.parent &&
                      this.parent.smoothChildTiming &&
                      this.startTime(this._start + t - this._delay),
                    (this._delay = t),
                    this)
                  : this._delay;
              }),
              (e.duration = function (t) {
                return arguments.length
                  ? this.totalDuration(
                      this._repeat > 0
                        ? t + (t + this._rDelay) * this._repeat
                        : t
                    )
                  : this.totalDuration() && this._dur;
              }),
              (e.totalDuration = function (t) {
                return arguments.length
                  ? ((this._dirty = 0),
                    t3(
                      this,
                      this._repeat < 0
                        ? t
                        : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                    ))
                  : this._tDur;
              }),
              (e.totalTime = function (t, e) {
                if ((eB(), !arguments.length)) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                  for (
                    tU(this, t), !n._dp || n.parent || tK(n, this);
                    n && n.parent;

                  )
                    n.parent._time !==
                      n._start +
                        (n._ts >= 0
                          ? n._tTime / n._ts
                          : -((n.totalDuration() - n._tTime) / n._ts)) &&
                      n.totalTime(n._tTime, !0),
                      (n = n.parent);
                  !this.parent &&
                    this._dp.autoRemoveChildren &&
                    ((this._ts > 0 && t < this._tDur) ||
                      (this._ts < 0 && t > 0) ||
                      (!this._tDur && !t)) &&
                    tZ(this._dp, this, this._start - this._delay);
                }
                return (
                  (this._tTime === t &&
                    (this._dur || e) &&
                    (!this._initted || 1e-8 !== Math.abs(this._zTime)) &&
                    (t || this._initted || (!this.add && !this._ptLookup))) ||
                    (this._ts || (this._pTime = t), tF(this, t, e)),
                  this
                );
              }),
              (e.time = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                      Math.min(this.totalDuration(), t + tj(this)) %
                        (this._dur + this._rDelay) || (t ? this._dur : 0),
                      e
                    )
                  : this._time;
              }),
              (e.totalProgress = function (t, e) {
                return arguments.length
                  ? this.totalTime(this.totalDuration() * t, e)
                  : this.totalDuration()
                  ? Math.min(1, this._tTime / this._tDur)
                  : this.rawTime() > 0
                  ? 1
                  : 0;
              }),
              (e.progress = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                      this.duration() *
                        (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) +
                        tj(this),
                      e
                    )
                  : this.duration()
                  ? Math.min(1, this._time / this._dur)
                  : this.rawTime() > 0
                  ? 1
                  : 0;
              }),
              (e.iteration = function (t, e) {
                var n = this.duration() + this._rDelay;
                return arguments.length
                  ? this.totalTime(this._time + (t - 1) * n, e)
                  : this._repeat
                  ? tW(this._tTime, n) + 1
                  : 1;
              }),
              (e.timeScale = function (t, e) {
                if (!arguments.length)
                  return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var n =
                  this.parent && this._ts
                    ? tq(this.parent._time, this)
                    : this._tTime;
                return (
                  (this._rts = +t || 0),
                  (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                  this.totalTime(
                    t9(-Math.abs(this._delay), this._tDur, n),
                    !1 !== e
                  ),
                  tG(this),
                  tH(this)
                );
              }),
              (e.paused = function (t) {
                return arguments.length
                  ? (this._ps !== t &&
                      ((this._ps = t),
                      t
                        ? ((this._pTime =
                            this._tTime ||
                            Math.max(-this._delay, this.rawTime())),
                          (this._ts = this._act = 0))
                        : (eB(),
                          (this._ts = this._rts),
                          this.totalTime(
                            this.parent && !this.parent.smoothChildTiming
                              ? this.rawTime()
                              : this._tTime || this._pTime,
                            1 === this.progress() &&
                              1e-8 !== Math.abs(this._zTime) &&
                              (this._tTime -= 1e-8)
                          ))),
                    this)
                  : this._ps;
              }),
              (e.startTime = function (t) {
                if (arguments.length) {
                  this._start = t;
                  var e = this.parent || this._dp;
                  return (
                    e &&
                      (e._sort || !this.parent) &&
                      tZ(e, this, t - this._delay),
                    this
                  );
                }
                return this._start;
              }),
              (e.endTime = function (t) {
                return (
                  this._start +
                  (j(t) ? this.totalDuration() : this.duration()) /
                    Math.abs(this._ts || 1)
                );
              }),
              (e.rawTime = function (t) {
                var e = this.parent || this._dp;
                return e
                  ? t &&
                    (!this._ts ||
                      (this._repeat && this._time && 1 > this.totalProgress()))
                    ? this._tTime % (this._dur + this._rDelay)
                    : this._ts
                    ? tq(e.rawTime(t), this)
                    : this._tTime
                  : this._tTime;
              }),
              (e.revert = function (t) {
                void 0 === t && (t = tc);
                var e = x;
                return (
                  (x = t),
                  (this._initted || this._startAt) &&
                    (this.timeline && this.timeline.revert(t),
                    this.totalTime(-0.01, t.suppressEvents)),
                  "nested" !== this.data && !1 !== t.kill && this.kill(),
                  (x = e),
                  this
                );
              }),
              (e.globalTime = function (t) {
                for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
                  (n = e._start + n / (Math.abs(e._ts) || 1)), (e = e._dp);
                return !this.parent && this._sat ? this._sat.globalTime(t) : n;
              }),
              (e.repeat = function (t) {
                return arguments.length
                  ? ((this._repeat = t === 1 / 0 ? -2 : t), t5(this))
                  : -2 === this._repeat
                  ? 1 / 0
                  : this._repeat;
              }),
              (e.repeatDelay = function (t) {
                if (arguments.length) {
                  var e = this._time;
                  return (this._rDelay = t), t5(this), e ? this.time(e) : this;
                }
                return this._rDelay;
              }),
              (e.yoyo = function (t) {
                return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
              }),
              (e.seek = function (t, e) {
                return this.totalTime(t6(this, t), j(e));
              }),
              (e.restart = function (t, e) {
                return this.play().totalTime(t ? -this._delay : 0, j(e));
              }),
              (e.play = function (t, e) {
                return (
                  null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                );
              }),
              (e.reverse = function (t, e) {
                return (
                  null != t && this.seek(t || this.totalDuration(), e),
                  this.reversed(!0).paused(!1)
                );
              }),
              (e.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
              }),
              (e.resume = function () {
                return this.paused(!1);
              }),
              (e.reversed = function (t) {
                return arguments.length
                  ? (!!t !== this.reversed() &&
                      this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                    this)
                  : this._rts < 0;
              }),
              (e.invalidate = function () {
                return (
                  (this._initted = this._act = 0), (this._zTime = -1e-8), this
                );
              }),
              (e.isActive = function () {
                var t,
                  e = this.parent || this._dp,
                  n = this._start;
                return !!(
                  !e ||
                  (this._ts &&
                    this._initted &&
                    e.isActive() &&
                    (t = e.rawTime(!0)) >= n &&
                    t < this.endTime(!0) - 1e-8)
                );
              }),
              (e.eventCallback = function (t, e, n) {
                var i = this.vars;
                return arguments.length > 1
                  ? (e
                      ? ((i[t] = e),
                        n && (i[t + "Params"] = n),
                        "onUpdate" === t && (this._onUpdate = e))
                      : delete i[t],
                    this)
                  : i[t];
              }),
              (e.then = function (t) {
                var e = this;
                return new Promise(function (n) {
                  var i = X(t) ? t : tk,
                    r = function () {
                      var t = e.then;
                      (e.then = null),
                        X(i) &&
                          (i = i(e)) &&
                          (i.then || i === e) &&
                          (e.then = t),
                        n(i),
                        (e.then = t);
                    };
                  (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                  (!e._tTime && e._ts < 0)
                    ? r()
                    : (e._prom = r);
                });
              }),
              (e.kill = function () {
                eb(this);
              }),
              t
            );
          })();
        tA(eK.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: !1,
          parent: null,
          _initted: !1,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -1e-8,
          _prom: 0,
          _ps: !1,
          _rts: 1,
        });
        var eZ = (function (t) {
          function e(e, n) {
            var i;
            return (
              void 0 === e && (e = {}),
              ((i = t.call(this, e) || this).labels = {}),
              (i.smoothChildTiming = !!e.smoothChildTiming),
              (i.autoRemoveChildren = !!e.autoRemoveChildren),
              (i._sort = j(e.sortChildren)),
              w && tZ(e.parent || w, r(i), n),
              e.reversed && i.reverse(),
              e.paused && i.paused(!0),
              e.scrollTrigger && tQ(r(i), e.scrollTrigger),
              i
            );
          }
          i(e, t);
          var n = e.prototype;
          return (
            (n.to = function (t, e, n) {
              return t8(0, arguments, this), this;
            }),
            (n.from = function (t, e, n) {
              return t8(1, arguments, this), this;
            }),
            (n.fromTo = function (t, e, n, i) {
              return t8(2, arguments, this), this;
            }),
            (n.set = function (t, e, n) {
              return (
                (e.duration = 0),
                (e.parent = this),
                tR(e).repeatDelay || (e.repeat = 0),
                (e.immediateRender = !!e.immediateRender),
                new nr(t, e, t6(this, n), 1),
                this
              );
            }),
            (n.call = function (t, e, n) {
              return tZ(this, nr.delayedCall(0, t, e), n);
            }),
            (n.staggerTo = function (t, e, n, i, r, s, o) {
              return (
                (n.duration = e),
                (n.stagger = n.stagger || i),
                (n.onComplete = s),
                (n.onCompleteParams = o),
                (n.parent = this),
                new nr(t, n, t6(this, r)),
                this
              );
            }),
            (n.staggerFrom = function (t, e, n, i, r, s, o) {
              return (
                (n.runBackwards = 1),
                (tR(n).immediateRender = j(n.immediateRender)),
                this.staggerTo(t, e, n, i, r, s, o)
              );
            }),
            (n.staggerFromTo = function (t, e, n, i, r, s, o, a) {
              return (
                (i.startAt = n),
                (tR(i).immediateRender = j(i.immediateRender)),
                this.staggerTo(t, e, i, r, s, o, a)
              );
            }),
            (n.render = function (t, e, n) {
              var i,
                r,
                s,
                o,
                a,
                l,
                u,
                h,
                c,
                p,
                f,
                d,
                g = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                v = this._dur,
                _ = t <= 0 ? 0 : tE(t),
                D = this._zTime < 0 != t < 0 && (this._initted || !v);
              if (
                (this !== w && _ > m && t >= 0 && (_ = m),
                _ !== this._tTime || n || D)
              ) {
                if (
                  (g !== this._time &&
                    v &&
                    ((_ += this._time - g), (t += this._time - g)),
                  (i = _),
                  (c = this._start),
                  (l = !(h = this._ts)),
                  D && (v || (g = this._zTime), (t || !e) && (this._zTime = t)),
                  this._repeat)
                ) {
                  if (
                    ((f = this._yoyo),
                    (a = v + this._rDelay),
                    this._repeat < -1 && t < 0)
                  )
                    return this.totalTime(100 * a + t, e, n);
                  if (
                    ((i = tE(_ % a)),
                    _ === m
                      ? ((o = this._repeat), (i = v))
                      : ((o = ~~(_ / a)) && o === _ / a && ((i = v), o--),
                        i > v && (i = v)),
                    (p = tW(this._tTime, a)),
                    !g &&
                      this._tTime &&
                      p !== o &&
                      this._tTime - p * a - this._dur <= 0 &&
                      (p = o),
                    f && 1 & o && ((i = v - i), (d = 1)),
                    o !== p && !this._lock)
                  ) {
                    var y = f && 1 & p,
                      b = y === (f && 1 & o);
                    if (
                      (o < p && (y = !y),
                      (g = y ? 0 : _ % v ? v : _),
                      (this._lock = 1),
                      (this.render(g || (d ? 0 : tE(o * a)), e, !v)._lock = 0),
                      (this._tTime = _),
                      !e && this.parent && ex(this, "onRepeat"),
                      this.vars.repeatRefresh &&
                        !d &&
                        (this.invalidate()._lock = 1),
                      (g && g !== this._time) ||
                        !this._ts !== l ||
                        (this.vars.onRepeat && !this.parent && !this._act) ||
                        ((v = this._dur),
                        (m = this._tDur),
                        b &&
                          ((this._lock = 2),
                          (g = y ? v : -1e-4),
                          this.render(g, !0),
                          this.vars.repeatRefresh && !d && this.invalidate()),
                        (this._lock = 0),
                        !this._ts && !l))
                    )
                      return this;
                    eH(this, d);
                  }
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    (u = t2(this, tE(g), tE(i))) &&
                    (_ -= i - (i = u._start)),
                  (this._tTime = _),
                  (this._time = i),
                  (this._act = !h),
                  this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                    (this._initted = 1),
                    (this._zTime = t),
                    (g = 0)),
                  !g &&
                    i &&
                    !e &&
                    !o &&
                    (ex(this, "onStart"), this._tTime !== _))
                )
                  return this;
                if (i >= g && t >= 0)
                  for (r = this._first; r; ) {
                    if (
                      ((s = r._next),
                      (r._act || i >= r._start) && r._ts && u !== r)
                    ) {
                      if (r.parent !== this) return this.render(t, e, n);
                      if (
                        (r.render(
                          r._ts > 0
                            ? (i - r._start) * r._ts
                            : (r._dirty ? r.totalDuration() : r._tDur) +
                                (i - r._start) * r._ts,
                          e,
                          n
                        ),
                        i !== this._time || (!this._ts && !l))
                      ) {
                        (u = 0), s && (_ += this._zTime = -1e-8);
                        break;
                      }
                    }
                    r = s;
                  }
                else {
                  r = this._last;
                  for (var C = t < 0 ? t : i; r; ) {
                    if (
                      ((s = r._prev),
                      (r._act || C <= r._end) && r._ts && u !== r)
                    ) {
                      if (r.parent !== this) return this.render(t, e, n);
                      if (
                        (r.render(
                          r._ts > 0
                            ? (C - r._start) * r._ts
                            : (r._dirty ? r.totalDuration() : r._tDur) +
                                (C - r._start) * r._ts,
                          e,
                          n || (x && (r._initted || r._startAt))
                        ),
                        i !== this._time || (!this._ts && !l))
                      ) {
                        (u = 0), s && (_ += this._zTime = C ? -1e-8 : 1e-8);
                        break;
                      }
                    }
                    r = s;
                  }
                }
                if (
                  u &&
                  !e &&
                  (this.pause(),
                  (u.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1),
                  this._ts)
                )
                  return (this._start = c), tG(this), this.render(t, e, n);
                this._onUpdate && !e && ex(this, "onUpdate", !0),
                  ((_ === m && this._tTime >= this.totalDuration()) ||
                    (!_ && g)) &&
                    (c === this._start || Math.abs(h) !== Math.abs(this._ts)) &&
                    !this._lock &&
                    ((t || !v) &&
                      ((_ === m && this._ts > 0) || (!_ && this._ts < 0)) &&
                      tX(this, 1),
                    e ||
                      (t < 0 && !g) ||
                      (!_ && !g && m) ||
                      (ex(
                        this,
                        _ === m && t >= 0 ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(_ < m && this.timeScale() > 0) &&
                        this._prom()));
              }
              return this;
            }),
            (n.add = function (t, e) {
              var n = this;
              if ((Y(e) || (e = t6(this, e, t)), !(t instanceof eK))) {
                if (U(t))
                  return (
                    t.forEach(function (t) {
                      return n.add(t, e);
                    }),
                    this
                  );
                if (I(t)) return this.addLabel(t, e);
                if (!X(t)) return this;
                t = nr.delayedCall(0, t);
              }
              return this !== t ? tZ(this, t, e) : this;
            }),
            (n.getChildren = function (t, e, n, i) {
              void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === n && (n = !0),
                void 0 === i && (i = -1e8);
              for (var r = [], s = this._first; s; )
                s._start >= i &&
                  (s instanceof nr
                    ? e && r.push(s)
                    : (n && r.push(s),
                      t && r.push.apply(r, s.getChildren(!0, e, n)))),
                  (s = s._next);
              return r;
            }),
            (n.getById = function (t) {
              for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
                if (e[n].vars.id === t) return e[n];
            }),
            (n.remove = function (t) {
              return I(t)
                ? this.removeLabel(t)
                : X(t)
                ? this.killTweensOf(t)
                : (tI(this, t),
                  t === this._recent && (this._recent = this._last),
                  tY(this));
            }),
            (n.totalTime = function (e, n) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                    this._ts &&
                    (this._start = tE(
                      eO.time -
                        (this._ts > 0
                          ? e / this._ts
                          : -((this.totalDuration() - e) / this._ts))
                    )),
                  t.prototype.totalTime.call(this, e, n),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (n.addLabel = function (t, e) {
              return (this.labels[t] = t6(this, e)), this;
            }),
            (n.removeLabel = function (t) {
              return delete this.labels[t], this;
            }),
            (n.addPause = function (t, e, n) {
              var i = nr.delayedCall(0, e || tl, n);
              return (
                (i.data = "isPause"),
                (this._hasPause = 1),
                tZ(this, i, t6(this, t))
              );
            }),
            (n.removePause = function (t) {
              var e = this._first;
              for (t = t6(this, t); e; )
                e._start === t && "isPause" === e.data && tX(e), (e = e._next);
            }),
            (n.killTweensOf = function (t, e, n) {
              for (var i = this.getTweensOf(t, n), r = i.length; r--; )
                e0 !== i[r] && i[r].kill(t, e);
              return this;
            }),
            (n.getTweensOf = function (t, e) {
              for (var n, i = [], r = er(t), s = this._first, o = Y(e); s; )
                s instanceof nr
                  ? tP(s._targets, r) &&
                    (o
                      ? (!e0 || (s._initted && s._ts)) &&
                        s.globalTime(0) <= e &&
                        s.globalTime(s.totalDuration()) > e
                      : !e || s.isActive()) &&
                    i.push(s)
                  : (n = s.getTweensOf(r, e)).length && i.push.apply(i, n),
                  (s = s._next);
              return i;
            }),
            (n.tweenTo = function (t, e) {
              e = e || {};
              var n,
                i = this,
                r = t6(i, t),
                s = e,
                o = s.startAt,
                a = s.onStart,
                l = s.onStartParams,
                u = s.immediateRender,
                h = nr.to(
                  i,
                  tA(
                    {
                      ease: e.ease || "none",
                      lazy: !1,
                      immediateRender: !1,
                      time: r,
                      overwrite: "auto",
                      duration:
                        e.duration ||
                        Math.abs(
                          (r - (o && "time" in o ? o.time : i._time)) /
                            i.timeScale()
                        ) ||
                        1e-8,
                      onStart: function () {
                        if ((i.pause(), !n)) {
                          var t =
                            e.duration ||
                            Math.abs(
                              (r - (o && "time" in o ? o.time : i._time)) /
                                i.timeScale()
                            );
                          h._dur !== t &&
                            t3(h, t, 0, 1).render(h._time, !0, !0),
                            (n = 1);
                        }
                        a && a.apply(h, l || []);
                      },
                    },
                    e
                  )
                );
              return u ? h.render(0) : h;
            }),
            (n.tweenFromTo = function (t, e, n) {
              return this.tweenTo(e, tA({ startAt: { time: t6(this, t) } }, n));
            }),
            (n.recent = function () {
              return this._recent;
            }),
            (n.nextLabel = function (t) {
              return void 0 === t && (t = this._time), ey(this, t6(this, t));
            }),
            (n.previousLabel = function (t) {
              return void 0 === t && (t = this._time), ey(this, t6(this, t), 1);
            }),
            (n.currentLabel = function (t) {
              return arguments.length
                ? this.seek(t, !0)
                : this.previousLabel(this._time + 1e-8);
            }),
            (n.shiftChildren = function (t, e, n) {
              void 0 === n && (n = 0);
              for (var i, r = this._first, s = this.labels; r; )
                r._start >= n && ((r._start += t), (r._end += t)),
                  (r = r._next);
              if (e) for (i in s) s[i] >= n && (s[i] += t);
              return tY(this);
            }),
            (n.invalidate = function (e) {
              var n = this._first;
              for (this._lock = 0; n; ) n.invalidate(e), (n = n._next);
              return t.prototype.invalidate.call(this, e);
            }),
            (n.clear = function (t) {
              void 0 === t && (t = !0);
              for (var e, n = this._first; n; )
                (e = n._next), this.remove(n), (n = e);
              return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                tY(this)
              );
            }),
            (n.totalDuration = function (t) {
              var e,
                n,
                i,
                r = 0,
                s = this._last,
                o = 1e8;
              if (arguments.length)
                return this.timeScale(
                  (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                    (this.reversed() ? -t : t)
                );
              if (this._dirty) {
                for (i = this.parent; s; )
                  (e = s._prev),
                    s._dirty && s.totalDuration(),
                    (n = s._start) > o && this._sort && s._ts && !this._lock
                      ? ((this._lock = 1),
                        (tZ(this, s, n - s._delay, 1)._lock = 0))
                      : (o = n),
                    n < 0 &&
                      s._ts &&
                      ((r -= n),
                      ((!i && !this._dp) || (i && i.smoothChildTiming)) &&
                        ((this._start += n / this._ts),
                        (this._time -= n),
                        (this._tTime -= n)),
                      this.shiftChildren(-n, !1, -Infinity),
                      (o = 0)),
                    s._end > r && s._ts && (r = s._end),
                    (s = e);
                t3(this, this === w && this._time > r ? this._time : r, 1, 1),
                  (this._dirty = 0);
              }
              return this._tDur;
            }),
            (e.updateRoot = function (t) {
              if (
                (w._ts && (tF(w, tq(t, w)), (S = eO.frame)), eO.frame >= tv)
              ) {
                tv += k.autoSleep || 120;
                var e = w._first;
                if ((!e || !e._ts) && k.autoSleep && eO._listeners.length < 2) {
                  for (; e && !e._ts; ) e = e._next;
                  e || eO.sleep();
                }
              }
            }),
            e
          );
        })(eK);
        tA(eZ.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var eQ,
          e$,
          eJ,
          e1,
          e0,
          e2,
          e3 = function (t, e, n, i, r, s, o) {
            var a,
              l,
              u,
              h,
              c,
              p,
              f,
              d,
              g = new n_(this._pt, t, e, 0, 1, np, null, r),
              m = 0,
              v = 0;
            for (
              g.b = n,
                g.e = i,
                n += "",
                i += "",
                (f = ~i.indexOf("random(")) && (i = ev(i)),
                s && (s((d = [n, i]), t, e), (n = d[0]), (i = d[1])),
                l = n.match($) || [];
              (a = $.exec(i));

            )
              (h = a[0]),
                (c = i.substring(m, a.index)),
                u ? (u = (u + 1) % 5) : "rgba(" === c.substr(-5) && (u = 1),
                h !== l[v++] &&
                  ((p = parseFloat(l[v - 1]) || 0),
                  (g._pt = {
                    _next: g._pt,
                    p: c || 1 === v ? c : ",",
                    s: p,
                    c: "=" === h.charAt(1) ? tT(p, h) - p : parseFloat(h) - p,
                    m: u && u < 4 ? Math.round : 0,
                  }),
                  (m = $.lastIndex));
            return (
              (g.c = m < i.length ? i.substring(m, i.length) : ""),
              (g.fp = o),
              (J.test(i) || f) && (g.e = 0),
              (this._pt = g),
              g
            );
          },
          e5 = function (t, e, n, i, r, s, o, a, l, u) {
            X(i) && (i = i(r || 0, t, s));
            var h,
              c = t[e],
              p =
                "get" !== n
                  ? n
                  : X(c)
                  ? l
                    ? t[
                        e.indexOf("set") || !X(t["get" + e.substr(3)])
                          ? e
                          : "get" + e.substr(3)
                      ](l)
                    : t[e]()
                  : c,
              f = X(c) ? (l ? na : no) : ns;
            if (
              (I(i) &&
                (~i.indexOf("random(") && (i = ev(i)),
                "=" === i.charAt(1) &&
                  ((h = tT(p, i) + (et(p) || 0)) || 0 === h) &&
                  (i = h)),
              !u || p !== i || e2)
            )
              return isNaN(p * i) || "" === i
                ? (c || e in t || ts(e, i),
                  e3.call(this, t, e, p, i, f, a || k.stringFilter, l))
                : ((h = new n_(
                    this._pt,
                    t,
                    e,
                    +p || 0,
                    i - (p || 0),
                    "boolean" == typeof c ? nc : nh,
                    0,
                    f
                  )),
                  l && (h.fp = l),
                  o && h.modifier(o, this, t),
                  (this._pt = h));
          },
          e4 = function (t, e, n, i, r) {
            if (
              (X(t) && (t = ne(t, r, e, n, i)),
              !V(t) || (t.style && t.nodeType) || U(t) || G(t))
            )
              return I(t) ? ne(t, r, e, n, i) : t;
            var s,
              o = {};
            for (s in t) o[s] = ne(t[s], r, e, n, i);
            return o;
          },
          e6 = function (t, e, n, i, r, s) {
            var o, a, l, u;
            if (
              tg[t] &&
              !1 !==
                (o = new tg[t]()).init(
                  r,
                  o.rawVars ? e[t] : e4(e[t], i, r, s, n),
                  n,
                  i,
                  s
                ) &&
              ((n._pt = a =
                new n_(n._pt, r, t, 0, 1, o.render, o, 0, o.priority)),
              n !== F)
            )
              for (
                l = n._ptLookup[n._targets.indexOf(r)], u = o._props.length;
                u--;

              )
                l[o._props[u]] = a;
            return o;
          },
          e8 = function t(e, n, i) {
            var r,
              s,
              o,
              a,
              l,
              u,
              h,
              c,
              p,
              f,
              d,
              g,
              m,
              v = e.vars,
              _ = v.ease,
              D = v.startAt,
              b = v.immediateRender,
              C = v.lazy,
              E = v.onUpdate,
              T = v.runBackwards,
              P = v.yoyoEase,
              S = v.keyframes,
              F = v.autoRevert,
              M = e._dur,
              k = e._startAt,
              O = e._targets,
              B = e.parent,
              L = B && "nested" === B.data ? B.vars.targets : O,
              R = "auto" === e._overwrite && !y,
              N = e.timeline;
            if (
              (!N || (S && _) || (_ = "none"),
              (e._ease = eV(_, A.ease)),
              (e._yEase = P ? eY(eV(!0 === P ? _ : P, A.ease)) : 0),
              P &&
                e._yoyo &&
                !e._repeat &&
                ((P = e._yEase), (e._yEase = e._ease), (e._ease = P)),
              (e._from = !N && !!v.runBackwards),
              !N || (S && !v.stagger))
            ) {
              if (
                ((g = (c = O[0] ? tx(O[0]).harness : 0) && v[c.prop]),
                (r = tL(v, tp)),
                k &&
                  (k._zTime < 0 && k.progress(1),
                  n < 0 && T && b && !F
                    ? k.render(-1, !0)
                    : k.revert(T && M ? th : tu),
                  (k._lazy = 0)),
                D)
              ) {
                if (
                  (tX(
                    (e._startAt = nr.set(
                      O,
                      tA(
                        {
                          data: "isStart",
                          overwrite: !1,
                          parent: B,
                          immediateRender: !0,
                          lazy: !k && j(C),
                          startAt: null,
                          delay: 0,
                          onUpdate:
                            E &&
                            function () {
                              return ex(e, "onUpdate");
                            },
                          stagger: 0,
                        },
                        D
                      )
                    ))
                  ),
                  (e._startAt._dp = 0),
                  (e._startAt._sat = e),
                  n < 0 && (x || (!b && !F)) && e._startAt.revert(th),
                  b && M && n <= 0 && i <= 0)
                ) {
                  n && (e._zTime = n);
                  return;
                }
              } else if (T && M && !k) {
                if (
                  (n && (b = !1),
                  (o = tA(
                    {
                      overwrite: !1,
                      data: "isFromStart",
                      lazy: b && !k && j(C),
                      immediateRender: b,
                      stagger: 0,
                      parent: B,
                    },
                    r
                  )),
                  g && (o[c.prop] = g),
                  tX((e._startAt = nr.set(O, o))),
                  (e._startAt._dp = 0),
                  (e._startAt._sat = e),
                  n < 0 &&
                    (x ? e._startAt.revert(th) : e._startAt.render(-1, !0)),
                  (e._zTime = n),
                  b)
                ) {
                  if (!n) return;
                } else t(e._startAt, 1e-8, 1e-8);
              }
              for (
                s = 0, e._pt = e._ptCache = 0, C = (M && j(C)) || (C && !M);
                s < O.length;
                s++
              ) {
                if (
                  ((h = (l = O[s])._gsap || ty(O)[s]._gsap),
                  (e._ptLookup[s] = f = {}),
                  td[h.id] && tf.length && tS(),
                  (d = L === O ? s : L.indexOf(l)),
                  c &&
                    !1 !== (p = new c()).init(l, g || r, e, d, L) &&
                    ((e._pt = a =
                      new n_(
                        e._pt,
                        l,
                        p.name,
                        0,
                        1,
                        p.render,
                        p,
                        0,
                        p.priority
                      )),
                    p._props.forEach(function (t) {
                      f[t] = a;
                    }),
                    p.priority && (u = 1)),
                  !c || g)
                )
                  for (o in r)
                    tg[o] && (p = e6(o, r, e, d, l, L))
                      ? p.priority && (u = 1)
                      : (f[o] = a =
                          e5.call(
                            e,
                            l,
                            o,
                            "get",
                            r[o],
                            d,
                            L,
                            0,
                            v.stringFilter
                          ));
                e._op && e._op[s] && e.kill(l, e._op[s]),
                  R &&
                    e._pt &&
                    ((e0 = e),
                    w.killTweensOf(l, f, e.globalTime(n)),
                    (m = !e.parent),
                    (e0 = 0)),
                  e._pt && C && (td[h.id] = 1);
              }
              u && nv(e), e._onInit && e._onInit(e);
            }
            (e._onUpdate = E),
              (e._initted = (!e._op || e._pt) && !m),
              S && n <= 0 && N.render(1e8, !0, !0);
          },
          e7 = function (t, e, n, i, r, s, o, a) {
            var l,
              u,
              h,
              c,
              p = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!p)
              for (
                p = t._ptCache[e] = [], h = t._ptLookup, c = t._targets.length;
                c--;

              ) {
                if ((l = h[c][e]) && l.d && l.d._pt)
                  for (l = l.d._pt; l && l.p !== e && l.fp !== e; ) l = l._next;
                if (!l)
                  return (
                    (e2 = 1),
                    (t.vars[e] = "+=0"),
                    e8(t, o),
                    (e2 = 0),
                    a ? to(e + " not eligible for reset") : 1
                  );
                p.push(l);
              }
            for (c = p.length; c--; )
              ((l = (u = p[c])._pt || u).s =
                (i || 0 === i) && !r ? i : l.s + (i || 0) + s * l.c),
                (l.c = n - l.s),
                u.e && (u.e = tC(n) + et(u.e)),
                u.b && (u.b = l.s + et(u.b));
          },
          e9 = function (t, e) {
            var n,
              i,
              r,
              s,
              o = t[0] ? tx(t[0]).harness : 0,
              a = o && o.aliases;
            if (!a) return e;
            for (i in ((n = tO({}, e)), a))
              if (i in n)
                for (r = (s = a[i].split(",")).length; r--; ) n[s[r]] = n[i];
            return n;
          },
          nt = function (t, e, n, i) {
            var r,
              s,
              o = e.ease || i || "power1.inOut";
            if (U(e))
              (s = n[t] || (n[t] = [])),
                e.forEach(function (t, n) {
                  return s.push({ t: (n / (e.length - 1)) * 100, v: t, e: o });
                });
            else
              for (r in e)
                (s = n[r] || (n[r] = [])),
                  "ease" === r || s.push({ t: parseFloat(t), v: e[r], e: o });
          },
          ne = function (t, e, n, i, r) {
            return X(t)
              ? t.call(e, n, i, r)
              : I(t) && ~t.indexOf("random(")
              ? ev(t)
              : t;
          },
          nn = tD + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
          ni = {};
        tw(
          nn + ",id,stagger,delay,duration,paused,scrollTrigger",
          function (t) {
            return (ni[t] = 1);
          }
        );
        var nr = (function (t) {
          function e(e, n, i, s) {
            "number" == typeof n && ((i.duration = n), (n = i), (i = null));
            var o,
              a,
              l,
              u,
              h,
              c,
              p,
              f,
              d,
              g = (o = t.call(this, s ? n : tR(n)) || this).vars,
              m = g.duration,
              v = g.delay,
              _ = g.immediateRender,
              D = g.stagger,
              x = g.overwrite,
              b = g.keyframes,
              C = g.defaults,
              E = g.scrollTrigger,
              T = g.yoyoEase,
              P = n.parent || w,
              S = (U(e) || G(e) ? Y(e[0]) : "length" in n) ? [e] : er(e);
            if (
              ((o._targets = S.length
                ? ty(S)
                : to(
                    "GSAP target " + e + " not found. https://gsap.com",
                    !k.nullTargetWarn
                  ) || []),
              (o._ptLookup = []),
              (o._overwrite = x),
              b || D || q(m) || q(v))
            ) {
              if (
                ((n = o.vars),
                (a = o.timeline =
                  new eZ({
                    data: "nested",
                    defaults: C || {},
                    targets: P && "nested" === P.data ? P.vars.targets : S,
                  })).kill(),
                (a.parent = a._dp = r(o)),
                (a._start = 0),
                D || q(m) || q(v))
              ) {
                if (((h = S.length), (f = D && ea(D)), V(D)))
                  for (c in D) ~nn.indexOf(c) && (d || (d = {}), (d[c] = D[c]));
                for (l = 0; l < h; l++)
                  ((u = tL(n, ni)).stagger = 0),
                    T && (u.yoyoEase = T),
                    d && tO(u, d),
                    (p = S[l]),
                    (u.duration = +ne(m, r(o), l, p, S)),
                    (u.delay = (+ne(v, r(o), l, p, S) || 0) - o._delay),
                    !D &&
                      1 === h &&
                      u.delay &&
                      ((o._delay = v = u.delay),
                      (o._start += v),
                      (u.delay = 0)),
                    a.to(p, u, f ? f(l, p, S) : 0),
                    (a._ease = eL.none);
                a.duration() ? (m = v = 0) : (o.timeline = 0);
              } else if (b) {
                tR(tA(a.vars.defaults, { ease: "none" })),
                  (a._ease = eV(b.ease || n.ease || "none"));
                var F,
                  M,
                  A,
                  O = 0;
                if (U(b))
                  b.forEach(function (t) {
                    return a.to(S, t, ">");
                  }),
                    a.duration();
                else {
                  for (c in ((u = {}), b))
                    "ease" === c ||
                      "easeEach" === c ||
                      nt(c, b[c], u, b.easeEach);
                  for (c in u)
                    for (
                      l = 0,
                        F = u[c].sort(function (t, e) {
                          return t.t - e.t;
                        }),
                        O = 0;
                      l < F.length;
                      l++
                    )
                      ((A = {
                        ease: (M = F[l]).e,
                        duration: ((M.t - (l ? F[l - 1].t : 0)) / 100) * m,
                      })[c] = M.v),
                        a.to(S, A, O),
                        (O += A.duration);
                  a.duration() < m && a.to({}, { duration: m - a.duration() });
                }
              }
              m || o.duration((m = a.duration()));
            } else o.timeline = 0;
            return (
              !0 !== x || y || ((e0 = r(o)), w.killTweensOf(S), (e0 = 0)),
              tZ(P, r(o), i),
              n.reversed && o.reverse(),
              n.paused && o.paused(!0),
              (_ ||
                (!m &&
                  !b &&
                  o._start === tE(P._time) &&
                  j(_) &&
                  (function t(e) {
                    return !e || (e._ts && t(e.parent));
                  })(r(o)) &&
                  "nested" !== P.data)) &&
                ((o._tTime = -1e-8), o.render(Math.max(0, -v) || 0)),
              E && tQ(r(o), E),
              o
            );
          }
          i(e, t);
          var n = e.prototype;
          return (
            (n.render = function (t, e, n) {
              var i,
                r,
                s,
                o,
                a,
                l,
                u,
                h,
                c,
                p = this._time,
                f = this._tDur,
                d = this._dur,
                g = t < 0,
                m = t > f - 1e-8 && !g ? f : t < 1e-8 ? 0 : t;
              if (d) {
                if (
                  m !== this._tTime ||
                  !t ||
                  n ||
                  (!this._initted && this._tTime) ||
                  (this._startAt && this._zTime < 0 !== g)
                ) {
                  if (((i = m), (h = this.timeline), this._repeat)) {
                    if (((o = d + this._rDelay), this._repeat < -1 && g))
                      return this.totalTime(100 * o + t, e, n);
                    if (
                      ((i = tE(m % o)),
                      m === f
                        ? ((s = this._repeat), (i = d))
                        : ((s = ~~(m / o)) && s === tE(m / o) && ((i = d), s--),
                          i > d && (i = d)),
                      (l = this._yoyo && 1 & s) &&
                        ((c = this._yEase), (i = d - i)),
                      (a = tW(this._tTime, o)),
                      i === p && !n && this._initted && s === a)
                    )
                      return (this._tTime = m), this;
                    s !== a &&
                      (h && this._yEase && eH(h, l),
                      this.vars.repeatRefresh &&
                        !l &&
                        !this._lock &&
                        this._time !== o &&
                        this._initted &&
                        ((this._lock = n = 1),
                        (this.render(tE(o * s), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (t$(this, g ? t : i, n, e, m))
                      return (this._tTime = 0), this;
                    if (
                      p !== this._time &&
                      !(n && this.vars.repeatRefresh && s !== a)
                    )
                      return this;
                    if (d !== this._dur) return this.render(t, e, n);
                  }
                  if (
                    ((this._tTime = m),
                    (this._time = i),
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = u = (c || this._ease)(i / d)),
                    this._from && (this.ratio = u = 1 - u),
                    i &&
                      !p &&
                      !e &&
                      !s &&
                      (ex(this, "onStart"), this._tTime !== m))
                  )
                    return this;
                  for (r = this._pt; r; ) r.r(u, r.d), (r = r._next);
                  (h &&
                    h.render(
                      t < 0 ? t : h._dur * h._ease(i / this._dur),
                      e,
                      n
                    )) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                      !e &&
                      (g && tV(this, t, e, n), ex(this, "onUpdate")),
                    this._repeat &&
                      s !== a &&
                      this.vars.onRepeat &&
                      !e &&
                      this.parent &&
                      ex(this, "onRepeat"),
                    (m === this._tDur || !m) &&
                      this._tTime === m &&
                      (g && !this._onUpdate && tV(this, t, !0, !0),
                      (t || !d) &&
                        ((m === this._tDur && this._ts > 0) ||
                          (!m && this._ts < 0)) &&
                        tX(this, 1),
                      !e &&
                        !(g && !p) &&
                        (m || p || l) &&
                        (ex(
                          this,
                          m === f ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(m < f && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else t0(this, t, e, n);
              return this;
            }),
            (n.targets = function () {
              return this._targets;
            }),
            (n.invalidate = function (e) {
              return (
                (e && this.vars.runBackwards) || (this._startAt = 0),
                (this._pt =
                  this._op =
                  this._onUpdate =
                  this._lazy =
                  this.ratio =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(e),
                t.prototype.invalidate.call(this, e)
              );
            }),
            (n.resetTo = function (t, e, n, i, r) {
              M || eO.wake(), this._ts || this.play();
              var s = Math.min(
                this._dur,
                (this._dp._time - this._start) * this._ts
              );
              return (this._initted || e8(this, s),
              e7(this, t, e, n, i, this._ease(s / this._dur), s, r))
                ? this.resetTo(t, e, n, i, 1)
                : (tU(this, 0),
                  this.parent ||
                    tz(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0
                    ),
                  this.render(0));
            }),
            (n.kill = function (t, e) {
              if ((void 0 === e && (e = "all"), !t && (!e || "all" === e)))
                return (
                  (this._lazy = this._pt = 0), this.parent ? eb(this) : this
                );
              if (this.timeline) {
                var n = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    t,
                    e,
                    e0 && !0 !== e0.vars.overwrite
                  )._first || eb(this),
                  this.parent &&
                    n !== this.timeline.totalDuration() &&
                    t3(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                  this
                );
              }
              var i,
                r,
                s,
                o,
                a,
                l,
                u,
                h = this._targets,
                c = t ? er(t) : h,
                p = this._ptLookup,
                f = this._pt;
              if ((!e || "all" === e) && tN(h, c))
                return "all" === e && (this._pt = 0), eb(this);
              for (
                i = this._op = this._op || [],
                  "all" !== e &&
                    (I(e) &&
                      ((a = {}),
                      tw(e, function (t) {
                        return (a[t] = 1);
                      }),
                      (e = a)),
                    (e = e9(h, e))),
                  u = h.length;
                u--;

              )
                if (~c.indexOf(h[u]))
                  for (a in ((r = p[u]),
                  "all" === e
                    ? ((i[u] = e), (o = r), (s = {}))
                    : ((s = i[u] = i[u] || {}), (o = e)),
                  o))
                    (l = r && r[a]) &&
                      (("kill" in l.d && !0 !== l.d.kill(a)) ||
                        tI(this, l, "_pt"),
                      delete r[a]),
                      "all" !== s && (s[a] = 1);
              return this._initted && !this._pt && f && eb(this), this;
            }),
            (e.to = function (t, n) {
              return new e(t, n, arguments[2]);
            }),
            (e.from = function (t, e) {
              return t8(1, arguments);
            }),
            (e.delayedCall = function (t, n, i, r) {
              return new e(n, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: i,
                onReverseCompleteParams: i,
                callbackScope: r,
              });
            }),
            (e.fromTo = function (t, e, n) {
              return t8(2, arguments);
            }),
            (e.set = function (t, n) {
              return (
                (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n)
              );
            }),
            (e.killTweensOf = function (t, e, n) {
              return w.killTweensOf(t, e, n);
            }),
            e
          );
        })(eK);
        tA(nr.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0,
        }),
          tw("staggerTo,staggerFrom,staggerFromTo", function (t) {
            nr[t] = function () {
              var e = new eZ(),
                n = en.call(arguments, 0);
              return (
                n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
              );
            };
          });
        var ns = function (t, e, n) {
            return (t[e] = n);
          },
          no = function (t, e, n) {
            return t[e](n);
          },
          na = function (t, e, n, i) {
            return t[e](i.fp, n);
          },
          nl = function (t, e, n) {
            return t.setAttribute(e, n);
          },
          nu = function (t, e) {
            return X(t[e]) ? no : H(t[e]) && t.setAttribute ? nl : ns;
          },
          nh = function (t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
          },
          nc = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
          },
          np = function (t, e) {
            var n = e._pt,
              i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
              for (; n; )
                (i =
                  n.p +
                  (n.m
                    ? n.m(n.s + n.c * t)
                    : Math.round((n.s + n.c * t) * 1e4) / 1e4) +
                  i),
                  (n = n._next);
              i += e.c;
            }
            e.set(e.t, e.p, i, e);
          },
          nf = function (t, e) {
            for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
          },
          nd = function (t, e, n, i) {
            for (var r, s = this._pt; s; )
              (r = s._next), s.p === i && s.modifier(t, e, n), (s = r);
          },
          ng = function (t) {
            for (var e, n, i = this._pt; i; )
              (n = i._next),
                (i.p !== t || i.op) && i.op !== t
                  ? i.dep || (e = 1)
                  : tI(this, i, "_pt"),
                (i = n);
            return !e;
          },
          nm = function (t, e, n, i) {
            i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
          },
          nv = function (t) {
            for (var e, n, i, r, s = t._pt; s; ) {
              for (e = s._next, n = i; n && n.pr > s.pr; ) n = n._next;
              (s._prev = n ? n._prev : r) ? (s._prev._next = s) : (i = s),
                (s._next = n) ? (n._prev = s) : (r = s),
                (s = e);
            }
            t._pt = i;
          },
          n_ = (function () {
            function t(t, e, n, i, r, s, o, a, l) {
              (this.t = e),
                (this.s = i),
                (this.c = r),
                (this.p = n),
                (this.r = s || nh),
                (this.d = o || this),
                (this.set = a || ns),
                (this.pr = l || 0),
                (this._next = t),
                t && (t._prev = this);
            }
            return (
              (t.prototype.modifier = function (t, e, n) {
                (this.mSet = this.mSet || this.set),
                  (this.set = nm),
                  (this.m = t),
                  (this.mt = n),
                  (this.tween = e);
              }),
              t
            );
          })();
        tw(
          tD +
            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
          function (t) {
            return (tp[t] = 1);
          }
        ),
          (tn.TweenMax = tn.TweenLite = nr),
          (tn.TimelineLite = tn.TimelineMax = eZ),
          (w = new eZ({
            sortChildren: !1,
            defaults: A,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0,
          })),
          (k.stringFilter = eA);
        var nD = [],
          ny = {},
          nx = [],
          nb = 0,
          nw = 0,
          nC = function (t) {
            return (ny[t] || nx).map(function (t) {
              return t();
            });
          },
          nE = function () {
            var t = Date.now(),
              e = [];
            t - nb > 2 &&
              (nC("matchMediaInit"),
              nD.forEach(function (t) {
                var n,
                  i,
                  r,
                  s,
                  o = t.queries,
                  a = t.conditions;
                for (i in o)
                  (n = C.matchMedia(o[i]).matches) && (r = 1),
                    n !== a[i] && ((a[i] = n), (s = 1));
                s && (t.revert(), r && e.push(t));
              }),
              nC("matchMediaRevert"),
              e.forEach(function (t) {
                return t.onMatch(t, function (e) {
                  return t.add(null, e);
                });
              }),
              (nb = t),
              nC("matchMedia"));
          },
          nT = (function () {
            function t(t, e) {
              (this.selector = e && es(e)),
                (this.data = []),
                (this._r = []),
                (this.isReverted = !1),
                (this.id = nw++),
                t && this.add(t);
            }
            var e = t.prototype;
            return (
              (e.add = function (t, e, n) {
                X(t) && ((n = e), (e = t), (t = X));
                var i = this,
                  r = function () {
                    var t,
                      r = b,
                      s = i.selector;
                    return (
                      r && r !== i && r.data.push(i),
                      n && (i.selector = es(n)),
                      (b = i),
                      (t = e.apply(i, arguments)),
                      X(t) && i._r.push(t),
                      (b = r),
                      (i.selector = s),
                      (i.isReverted = !1),
                      t
                    );
                  };
                return (
                  (i.last = r),
                  t === X
                    ? r(i, function (t) {
                        return i.add(null, t);
                      })
                    : t
                    ? (i[t] = r)
                    : r
                );
              }),
              (e.ignore = function (t) {
                var e = b;
                (b = null), t(this), (b = e);
              }),
              (e.getTweens = function () {
                var e = [];
                return (
                  this.data.forEach(function (n) {
                    return n instanceof t
                      ? e.push.apply(e, n.getTweens())
                      : n instanceof nr &&
                          !(n.parent && "nested" === n.parent.data) &&
                          e.push(n);
                  }),
                  e
                );
              }),
              (e.clear = function () {
                this._r.length = this.data.length = 0;
              }),
              (e.kill = function (t, e) {
                var n = this;
                if (
                  (t
                    ? (function () {
                        for (var e, i = n.getTweens(), r = n.data.length; r--; )
                          "isFlip" === (e = n.data[r]).data &&
                            (e.revert(),
                            e.getChildren(!0, !0, !1).forEach(function (t) {
                              return i.splice(i.indexOf(t), 1);
                            }));
                        for (
                          i
                            .map(function (t) {
                              return {
                                g:
                                  t._dur ||
                                  t._delay ||
                                  (t._sat && !t._sat.vars.immediateRender)
                                    ? t.globalTime(0)
                                    : -1 / 0,
                                t: t,
                              };
                            })
                            .sort(function (t, e) {
                              return e.g - t.g || -1 / 0;
                            })
                            .forEach(function (e) {
                              return e.t.revert(t);
                            }),
                            r = n.data.length;
                          r--;

                        )
                          (e = n.data[r]) instanceof eZ
                            ? "nested" !== e.data &&
                              (e.scrollTrigger && e.scrollTrigger.revert(),
                              e.kill())
                            : e instanceof nr || !e.revert || e.revert(t);
                        n._r.forEach(function (e) {
                          return e(t, n);
                        }),
                          (n.isReverted = !0);
                      })()
                    : this.data.forEach(function (t) {
                        return t.kill && t.kill();
                      }),
                  this.clear(),
                  e)
                )
                  for (var i = nD.length; i--; )
                    nD[i].id === this.id && nD.splice(i, 1);
              }),
              (e.revert = function (t) {
                this.kill(t || {});
              }),
              t
            );
          })(),
          nP = (function () {
            function t(t) {
              (this.contexts = []), (this.scope = t), b && b.data.push(this);
            }
            var e = t.prototype;
            return (
              (e.add = function (t, e, n) {
                V(t) || (t = { matches: t });
                var i,
                  r,
                  s,
                  o = new nT(0, n || this.scope),
                  a = (o.conditions = {});
                for (r in (b && !o.selector && (o.selector = b.selector),
                this.contexts.push(o),
                (e = o.add("onMatch", e)),
                (o.queries = t),
                t))
                  "all" === r
                    ? (s = 1)
                    : (i = C.matchMedia(t[r])) &&
                      (0 > nD.indexOf(o) && nD.push(o),
                      (a[r] = i.matches) && (s = 1),
                      i.addListener
                        ? i.addListener(nE)
                        : i.addEventListener("change", nE));
                return (
                  s &&
                    e(o, function (t) {
                      return o.add(null, t);
                    }),
                  this
                );
              }),
              (e.revert = function (t) {
                this.kill(t || {});
              }),
              (e.kill = function (t) {
                this.contexts.forEach(function (e) {
                  return e.kill(t, !0);
                });
              }),
              t
            );
          })(),
          nS = {
            registerPlugin: function () {
              for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              e.forEach(function (t) {
                return eC(t);
              });
            },
            timeline: function (t) {
              return new eZ(t);
            },
            getTweensOf: function (t, e) {
              return w.getTweensOf(t, e);
            },
            getProperty: function (t, e, n, i) {
              I(t) && (t = er(t)[0]);
              var r = tx(t || {}).get,
                s = n ? tk : tM;
              return (
                "native" === n && (n = ""),
                t
                  ? e
                    ? s(((tg[e] && tg[e].get) || r)(t, e, n, i))
                    : function (e, n, i) {
                        return s(((tg[e] && tg[e].get) || r)(t, e, n, i));
                      }
                  : t
              );
            },
            quickSetter: function (t, e, n) {
              if ((t = er(t)).length > 1) {
                var i = t.map(function (t) {
                    return nA.quickSetter(t, e, n);
                  }),
                  r = i.length;
                return function (t) {
                  for (var e = r; e--; ) i[e](t);
                };
              }
              t = t[0] || {};
              var s = tg[e],
                o = tx(t),
                a = (o.harness && (o.harness.aliases || {})[e]) || e,
                l = s
                  ? function (e) {
                      var i = new s();
                      (F._pt = 0),
                        i.init(t, n ? e + n : e, F, 0, [t]),
                        i.render(1, i),
                        F._pt && nf(1, F);
                    }
                  : o.set(t, a);
              return s
                ? l
                : function (e) {
                    return l(t, a, n ? e + n : e, o, 1);
                  };
            },
            quickTo: function (t, e, n) {
              var i,
                r = nA.to(
                  t,
                  tO((((i = {})[e] = "+=0.1"), (i.paused = !0), i), n || {})
                ),
                s = function (t, n, i) {
                  return r.resetTo(e, t, n, i);
                };
              return (s.tween = r), s;
            },
            isTweening: function (t) {
              return w.getTweensOf(t, !0).length > 0;
            },
            defaults: function (t) {
              return (
                t && t.ease && (t.ease = eV(t.ease, A.ease)), tB(A, t || {})
              );
            },
            config: function (t) {
              return tB(k, t || {});
            },
            registerEffect: function (t) {
              var e = t.name,
                n = t.effect,
                i = t.plugins,
                r = t.defaults,
                s = t.extendTimeline;
              (i || "").split(",").forEach(function (t) {
                return (
                  t &&
                  !tg[t] &&
                  !tn[t] &&
                  to(e + " effect requires " + t + " plugin.")
                );
              }),
                (tm[e] = function (t, e, i) {
                  return n(er(t), tA(e || {}, r), i);
                }),
                s &&
                  (eZ.prototype[e] = function (t, n, i) {
                    return this.add(
                      tm[e](t, V(n) ? n : (i = n) && {}, this),
                      i
                    );
                  });
            },
            registerEase: function (t, e) {
              eL[t] = eV(e);
            },
            parseEase: function (t, e) {
              return arguments.length ? eV(t, e) : eL;
            },
            getById: function (t) {
              return w.getById(t);
            },
            exportRoot: function (t, e) {
              void 0 === t && (t = {});
              var n,
                i,
                r = new eZ(t);
              for (
                r.smoothChildTiming = j(t.smoothChildTiming),
                  w.remove(r),
                  r._dp = 0,
                  r._time = r._tTime = w._time,
                  n = w._first;
                n;

              )
                (i = n._next),
                  (e ||
                    !(
                      !n._dur &&
                      n instanceof nr &&
                      n.vars.onComplete === n._targets[0]
                    )) &&
                    tZ(r, n, n._start - n._delay),
                  (n = i);
              return tZ(w, r, 0), r;
            },
            context: function (t, e) {
              return t ? new nT(t, e) : b;
            },
            matchMedia: function (t) {
              return new nP(t);
            },
            matchMediaRefresh: function () {
              return (
                nD.forEach(function (t) {
                  var e,
                    n,
                    i = t.conditions;
                  for (n in i) i[n] && ((i[n] = !1), (e = 1));
                  e && t.revert();
                }) || nE()
              );
            },
            addEventListener: function (t, e) {
              var n = ny[t] || (ny[t] = []);
              ~n.indexOf(e) || n.push(e);
            },
            removeEventListener: function (t, e) {
              var n = ny[t],
                i = n && n.indexOf(e);
              i >= 0 && n.splice(i, 1);
            },
            utils: {
              wrap: eg,
              wrapYoyo: em,
              distribute: ea,
              random: eh,
              snap: eu,
              normalize: ef,
              getUnit: et,
              clamp: ee,
              splitColor: eP,
              toArray: er,
              selector: es,
              mapRange: e_,
              pipe: ec,
              unitize: ep,
              interpolate: eD,
              shuffle: eo,
            },
            install: tr,
            effects: tm,
            ticker: eO,
            updateRoot: eZ.updateRoot,
            plugins: tg,
            globalTimeline: w,
            core: {
              PropTween: n_,
              globals: ta,
              Tween: nr,
              Timeline: eZ,
              Animation: eK,
              getCache: tx,
              _removeLinkedListItem: tI,
              reverting: function () {
                return x;
              },
              context: function (t) {
                return t && b && (b.data.push(t), (t._ctx = b)), b;
              },
              suppressOverwrites: function (t) {
                return (y = t);
              },
            },
          };
        tw("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
          return (nS[t] = nr[t]);
        }),
          eO.add(eZ.updateRoot),
          (F = nS.to({}, { duration: 0 }));
        var nF = function (t, e) {
            for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
              n = n._next;
            return n;
          },
          nM = function (t, e) {
            var n,
              i,
              r,
              s = t._targets;
            for (n in e)
              for (i = s.length; i--; )
                (r = t._ptLookup[i][n]) &&
                  (r = r.d) &&
                  (r._pt && (r = nF(r, n)),
                  r && r.modifier && r.modifier(e[n], t, s[i], n));
          },
          nk = function (t, e) {
            return {
              name: t,
              rawVars: 1,
              init: function (t, n, i) {
                i._onInit = function (t) {
                  var i, r;
                  if (
                    (I(n) &&
                      ((i = {}),
                      tw(n, function (t) {
                        return (i[t] = 1);
                      }),
                      (n = i)),
                    e)
                  ) {
                    for (r in ((i = {}), n)) i[r] = e(n[r]);
                    n = i;
                  }
                  nM(t, n);
                };
              },
            };
          },
          nA =
            nS.registerPlugin(
              {
                name: "attr",
                init: function (t, e, n, i, r) {
                  var s, o, a;
                  for (s in ((this.tween = n), e))
                    (a = t.getAttribute(s) || ""),
                      ((o = this.add(
                        t,
                        "setAttribute",
                        (a || 0) + "",
                        e[s],
                        i,
                        r,
                        0,
                        0,
                        s
                      )).op = s),
                      (o.b = a),
                      this._props.push(s);
                },
                render: function (t, e) {
                  for (var n = e._pt; n; )
                    x ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
                },
              },
              {
                name: "endArray",
                init: function (t, e) {
                  for (var n = e.length; n--; )
                    this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
                },
              },
              nk("roundProps", el),
              nk("modifiers"),
              nk("snap", eu)
            ) || nS;
        (nr.version = eZ.version = nA.version = "3.12.5"), (P = 1), W() && eB();
        var nO,
          nB,
          nL,
          nR,
          nN,
          nz,
          nI,
          nX = eL.Power0,
          nY = eL.Power1,
          nH = eL.Power2,
          nV = eL.Power3,
          nj = eL.Power4,
          nW = eL.Linear,
          nq = eL.Quad,
          nG = eL.Cubic,
          nU = eL.Quart,
          nK = eL.Quint,
          nZ = eL.Strong,
          nQ = eL.Elastic,
          n$ = eL.Back,
          nJ = eL.SteppedEase,
          n1 = eL.Bounce,
          n0 = eL.Sine,
          n2 = eL.Expo,
          n3 = eL.Circ,
          n5 = {},
          n4 = 180 / Math.PI,
          n6 = Math.PI / 180,
          n8 = Math.atan2,
          n7 = /([A-Z])/g,
          n9 = /(left|right|width|margin|padding|x)/i,
          it = /[\s,\(]\S/,
          ie = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
          },
          ii = function (t, e) {
            return e.set(
              e.t,
              e.p,
              Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
              e
            );
          },
          ir = function (t, e) {
            return e.set(
              e.t,
              e.p,
              1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
              e
            );
          },
          is = function (t, e) {
            return e.set(
              e.t,
              e.p,
              t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
              e
            );
          },
          io = function (t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
          },
          ia = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
          },
          il = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
          },
          iu = function (t, e, n) {
            return (t.style[e] = n);
          },
          ih = function (t, e, n) {
            return t.style.setProperty(e, n);
          },
          ic = function (t, e, n) {
            return (t._gsap[e] = n);
          },
          ip = function (t, e, n) {
            return (t._gsap.scaleX = t._gsap.scaleY = n);
          },
          id = function (t, e, n, i, r) {
            var s = t._gsap;
            (s.scaleX = s.scaleY = n), s.renderTransform(r, s);
          },
          ig = function (t, e, n, i, r) {
            var s = t._gsap;
            (s[e] = n), s.renderTransform(r, s);
          },
          im = "transform",
          iv = im + "Origin",
          i_ = function t(e, n) {
            var i = this,
              r = this.target,
              s = r.style,
              o = r._gsap;
            if (e in n5 && s) {
              if (((this.tfm = this.tfm || {}), "transform" === e))
                return ie.transform.split(",").forEach(function (e) {
                  return t.call(i, e, n);
                });
              if (
                (~(e = ie[e] || e).indexOf(",")
                  ? e.split(",").forEach(function (t) {
                      return (i.tfm[t] = iR(r, t));
                    })
                  : (this.tfm[e] = o.x ? o[e] : iR(r, e)),
                e === iv && (this.tfm.zOrigin = o.zOrigin),
                this.props.indexOf(im) >= 0)
              )
                return;
              o.svg &&
                ((this.svgo = r.getAttribute("data-svg-origin")),
                this.props.push(iv, n, "")),
                (e = im);
            }
            (s || n) && this.props.push(e, n, s[e]);
          },
          iD = function (t) {
            t.translate &&
              (t.removeProperty("translate"),
              t.removeProperty("scale"),
              t.removeProperty("rotate"));
          },
          iy = function () {
            var t,
              e,
              n = this.props,
              i = this.target,
              r = i.style,
              s = i._gsap;
            for (t = 0; t < n.length; t += 3)
              n[t + 1]
                ? (i[n[t]] = n[t + 2])
                : n[t + 2]
                ? (r[n[t]] = n[t + 2])
                : r.removeProperty(
                    "--" === n[t].substr(0, 2)
                      ? n[t]
                      : n[t].replace(n7, "-$1").toLowerCase()
                  );
            if (this.tfm) {
              for (e in this.tfm) s[e] = this.tfm[e];
              s.svg &&
                (s.renderTransform(),
                i.setAttribute("data-svg-origin", this.svgo || "")),
                ((t = nz()) && t.isStart) ||
                  r[im] ||
                  (iD(r),
                  s.zOrigin &&
                    r[iv] &&
                    ((r[iv] += " " + s.zOrigin + "px"),
                    (s.zOrigin = 0),
                    s.renderTransform()),
                  (s.uncache = 1));
            }
          },
          ix = function (t, e) {
            var n = { target: t, props: [], revert: iy, save: i_ };
            return (
              t._gsap || nA.core.getCache(t),
              e &&
                e.split(",").forEach(function (t) {
                  return n.save(t);
                }),
              n
            );
          },
          ib = function (t, e) {
            var n = nO.createElementNS
              ? nO.createElementNS(
                  (e || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                  ),
                  t
                )
              : nO.createElement(t);
            return n && n.style ? n : nO.createElement(t);
          },
          iw = function t(e, n, i) {
            var r = getComputedStyle(e);
            return (
              r[n] ||
              r.getPropertyValue(n.replace(n7, "-$1").toLowerCase()) ||
              r.getPropertyValue(n) ||
              (!i && t(e, iE(n) || n, 1)) ||
              ""
            );
          },
          iC = "O,Moz,ms,Ms,Webkit".split(","),
          iE = function (t, e, n) {
            var i = (e || nR).style,
              r = 5;
            if (t in i && !n) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1);
              r-- && !(iC[r] + t in i);

            );
            return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? iC[r] : "") + t;
          },
          iT = function () {
            window.document &&
              ((nB = (nO = window.document).documentElement),
              (nR = ib("div") || { style: {} }),
              ib("div"),
              (iv = (im = iE(im)) + "Origin"),
              (nR.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
              (nI = !!iE("perspective")),
              (nz = nA.core.reverting),
              (nL = 1));
          },
          iP = function t(e) {
            var n,
              i = ib(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              r = this.parentNode,
              s = this.nextSibling,
              o = this.style.cssText;
            if (
              (nB.appendChild(i),
              i.appendChild(this),
              (this.style.display = "block"),
              e)
            )
              try {
                (n = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = t);
              } catch (t) {}
            else this._gsapBBox && (n = this._gsapBBox());
            return (
              r && (s ? r.insertBefore(this, s) : r.appendChild(this)),
              nB.removeChild(i),
              (this.style.cssText = o),
              n
            );
          },
          iS = function (t, e) {
            for (var n = e.length; n--; )
              if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
          },
          iF = function (t) {
            var e;
            try {
              e = t.getBBox();
            } catch (n) {
              e = iP.call(t, !0);
            }
            return (
              (e && (e.width || e.height)) ||
                t.getBBox === iP ||
                (e = iP.call(t, !0)),
              !e || e.width || e.x || e.y
                ? e
                : {
                    x: +iS(t, ["x", "cx", "x1"]) || 0,
                    y: +iS(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0,
                  }
            );
          },
          iM = function (t) {
            return !!(
              t.getCTM &&
              (!t.parentNode || t.ownerSVGElement) &&
              iF(t)
            );
          },
          ik = function (t, e) {
            if (e) {
              var n,
                i = t.style;
              e in n5 && e !== iv && (e = im),
                i.removeProperty
                  ? (("ms" === (n = e.substr(0, 2)) ||
                      "webkit" === e.substr(0, 6)) &&
                      (e = "-" + e),
                    i.removeProperty(
                      "--" === n ? e : e.replace(n7, "-$1").toLowerCase()
                    ))
                  : i.removeAttribute(e);
            }
          },
          iA = function (t, e, n, i, r, s) {
            var o = new n_(t._pt, e, n, 0, 1, s ? il : ia);
            return (t._pt = o), (o.b = i), (o.e = r), t._props.push(n), o;
          },
          iO = { deg: 1, rad: 1, turn: 1 },
          iB = { grid: 1, flex: 1 },
          iL = function t(e, n, i, r) {
            var s,
              o,
              a,
              l,
              u = parseFloat(i) || 0,
              h = (i + "").trim().substr((u + "").length) || "px",
              c = nR.style,
              p = n9.test(n),
              f = "svg" === e.tagName.toLowerCase(),
              d = (f ? "client" : "offset") + (p ? "Width" : "Height"),
              g = "px" === r,
              m = "%" === r;
            if (r === h || !u || iO[r] || iO[h]) return u;
            if (
              ("px" === h || g || (u = t(e, n, i, "px")),
              (l = e.getCTM && iM(e)),
              (m || "%" === h) && (n5[n] || ~n.indexOf("adius")))
            )
              return (
                (s = l ? e.getBBox()[p ? "width" : "height"] : e[d]),
                tC(m ? (u / s) * 100 : (u / 100) * s)
              );
            if (
              ((c[p ? "width" : "height"] = 100 + (g ? h : r)),
              (o =
                ~n.indexOf("adius") || ("em" === r && e.appendChild && !f)
                  ? e
                  : e.parentNode),
              l && (o = (e.ownerSVGElement || {}).parentNode),
              (o && o !== nO && o.appendChild) || (o = nO.body),
              (a = o._gsap) &&
                m &&
                a.width &&
                p &&
                a.time === eO.time &&
                !a.uncache)
            )
              return tC((u / a.width) * 100);
            if (m && ("height" === n || "width" === n)) {
              var v = e.style[n];
              (e.style[n] = 100 + r),
                (s = e[d]),
                v ? (e.style[n] = v) : ik(e, n);
            } else
              (m || "%" === h) &&
                !iB[iw(o, "display")] &&
                (c.position = iw(e, "position")),
                o === e && (c.position = "static"),
                o.appendChild(nR),
                (s = nR[d]),
                o.removeChild(nR),
                (c.position = "absolute");
            return (
              p && m && (((a = tx(o)).time = eO.time), (a.width = o[d])),
              tC(g ? (s * u) / 100 : s && u ? (100 / s) * u : 0)
            );
          },
          iR = function (t, e, n, i) {
            var r;
            return (
              nL || iT(),
              e in ie &&
                "transform" !== e &&
                ~(e = ie[e]).indexOf(",") &&
                (e = e.split(",")[0]),
              n5[e] && "transform" !== e
                ? ((r = iU(t, i)),
                  (r =
                    "transformOrigin" !== e
                      ? r[e]
                      : r.svg
                      ? r.origin
                      : iK(iw(t, iv)) + " " + r.zOrigin + "px"))
                : (!(r = t.style[e]) ||
                    "auto" === r ||
                    i ||
                    ~(r + "").indexOf("calc(")) &&
                  (r =
                    (iY[e] && iY[e](t, e, n)) ||
                    iw(t, e) ||
                    tb(t, e) ||
                    ("opacity" === e ? 1 : 0)),
              n && !~(r + "").trim().indexOf(" ") ? iL(t, e, r, n) + n : r
            );
          },
          iN = function (t, e, n, i) {
            if (!n || "none" === n) {
              var r = iE(e, t, 1),
                s = r && iw(t, r, 1);
              s && s !== n
                ? ((e = r), (n = s))
                : "borderColor" === e && (n = iw(t, "borderTopColor"));
            }
            var o,
              a,
              l,
              u,
              h,
              c,
              p,
              f,
              d,
              g,
              m,
              v = new n_(this._pt, t.style, e, 0, 1, np),
              _ = 0,
              D = 0;
            if (
              ((v.b = n),
              (v.e = i),
              (n += ""),
              "auto" == (i += "") &&
                ((c = t.style[e]),
                (t.style[e] = i),
                (i = iw(t, e) || i),
                c ? (t.style[e] = c) : ik(t, e)),
              eA((o = [n, i])),
              (n = o[0]),
              (i = o[1]),
              (l = n.match(Q) || []),
              (i.match(Q) || []).length)
            ) {
              for (; (a = Q.exec(i)); )
                (p = a[0]),
                  (d = i.substring(_, a.index)),
                  h
                    ? (h = (h + 1) % 5)
                    : ("rgba(" === d.substr(-5) || "hsla(" === d.substr(-5)) &&
                      (h = 1),
                  p !== (c = l[D++] || "") &&
                    ((u = parseFloat(c) || 0),
                    (m = c.substr((u + "").length)),
                    "=" === p.charAt(1) && (p = tT(u, p) + m),
                    (f = parseFloat(p)),
                    (g = p.substr((f + "").length)),
                    (_ = Q.lastIndex - g.length),
                    g ||
                      ((g = g || k.units[e] || m),
                      _ !== i.length || ((i += g), (v.e += g))),
                    m !== g && (u = iL(t, e, c, g) || 0),
                    (v._pt = {
                      _next: v._pt,
                      p: d || 1 === D ? d : ",",
                      s: u,
                      c: f - u,
                      m: (h && h < 4) || "zIndex" === e ? Math.round : 0,
                    }));
              v.c = _ < i.length ? i.substring(_, i.length) : "";
            } else v.r = "display" === e && "none" === i ? il : ia;
            return J.test(i) && (v.e = 0), (this._pt = v), v;
          },
          iz = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
          },
          iI = function (t) {
            var e = t.split(" "),
              n = e[0],
              i = e[1] || "50%";
            return (
              ("top" === n ||
                "bottom" === n ||
                "left" === i ||
                "right" === i) &&
                ((t = n), (n = i), (i = t)),
              (e[0] = iz[n] || n),
              (e[1] = iz[i] || i),
              e.join(" ")
            );
          },
          iX = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
              var n,
                i,
                r,
                s = e.t,
                o = s.style,
                a = e.u,
                l = s._gsap;
              if ("all" === a || !0 === a) (o.cssText = ""), (i = 1);
              else
                for (r = (a = a.split(",")).length; --r > -1; )
                  n5[(n = a[r])] &&
                    ((i = 1), (n = "transformOrigin" === n ? iv : im)),
                    ik(s, n);
              i &&
                (ik(s, im),
                l &&
                  (l.svg && s.removeAttribute("transform"),
                  iU(s, 1),
                  (l.uncache = 1),
                  iD(o)));
            }
          },
          iY = {
            clearProps: function (t, e, n, i, r) {
              if ("isFromStart" !== r.data) {
                var s = (t._pt = new n_(t._pt, e, n, 0, 0, iX));
                return (
                  (s.u = i), (s.pr = -10), (s.tween = r), t._props.push(n), 1
                );
              }
            },
          },
          iH = [1, 0, 0, 1, 0, 0],
          iV = {},
          ij = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
          },
          iW = function (t) {
            var e = iw(t, im);
            return ij(e) ? iH : e.substr(7).match(Z).map(tC);
          },
          iq = function (t, e) {
            var n,
              i,
              r,
              s,
              o = t._gsap || tx(t),
              a = t.style,
              l = iW(t);
            return o.svg && t.getAttribute("transform")
              ? "1,0,0,1,0,0" ===
                (l = [
                  (r = t.transform.baseVal.consolidate().matrix).a,
                  r.b,
                  r.c,
                  r.d,
                  r.e,
                  r.f,
                ]).join(",")
                ? iH
                : l
              : (l !== iH ||
                  t.offsetParent ||
                  t === nB ||
                  o.svg ||
                  ((r = a.display),
                  (a.display = "block"),
                  ((n = t.parentNode) && t.offsetParent) ||
                    ((s = 1), (i = t.nextElementSibling), nB.appendChild(t)),
                  (l = iW(t)),
                  r ? (a.display = r) : ik(t, "display"),
                  s &&
                    (i
                      ? n.insertBefore(t, i)
                      : n
                      ? n.appendChild(t)
                      : nB.removeChild(t))),
                e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
          },
          iG = function (t, e, n, i, r, s) {
            var o,
              a,
              l,
              u,
              h = t._gsap,
              c = r || iq(t, !0),
              p = h.xOrigin || 0,
              f = h.yOrigin || 0,
              d = h.xOffset || 0,
              g = h.yOffset || 0,
              m = c[0],
              v = c[1],
              _ = c[2],
              D = c[3],
              y = c[4],
              x = c[5],
              b = e.split(" "),
              w = parseFloat(b[0]) || 0,
              C = parseFloat(b[1]) || 0;
            n
              ? c !== iH &&
                (a = m * D - v * _) &&
                ((l = (D / a) * w + (-_ / a) * C + (_ * x - D * y) / a),
                (u = (-v / a) * w + (m / a) * C - (m * x - v * y) / a),
                (w = l),
                (C = u))
              : ((w =
                  (o = iF(t)).x +
                  (~b[0].indexOf("%") ? (w / 100) * o.width : w)),
                (C =
                  o.y +
                  (~(b[1] || b[0]).indexOf("%") ? (C / 100) * o.height : C))),
              i || (!1 !== i && h.smooth)
                ? ((y = w - p),
                  (x = C - f),
                  (h.xOffset = d + (y * m + x * _) - y),
                  (h.yOffset = g + (y * v + x * D) - x))
                : (h.xOffset = h.yOffset = 0),
              (h.xOrigin = w),
              (h.yOrigin = C),
              (h.smooth = !!i),
              (h.origin = e),
              (h.originIsAbsolute = !!n),
              (t.style[iv] = "0px 0px"),
              s &&
                (iA(s, h, "xOrigin", p, w),
                iA(s, h, "yOrigin", f, C),
                iA(s, h, "xOffset", d, h.xOffset),
                iA(s, h, "yOffset", g, h.yOffset)),
              t.setAttribute("data-svg-origin", w + " " + C);
          },
          iU = function (t, e) {
            var n = t._gsap || new eU(t);
            if ("x" in n && !e && !n.uncache) return n;
            var i,
              r,
              s,
              o,
              a,
              l,
              u,
              h,
              c,
              p,
              f,
              d,
              g,
              m,
              v,
              _,
              D,
              y,
              x,
              b,
              w,
              C,
              E,
              T,
              P,
              S,
              F,
              M,
              A,
              O,
              B,
              L,
              R = t.style,
              N = n.scaleX < 0,
              z = getComputedStyle(t),
              I = iw(t, iv) || "0";
            return (
              (i = r = s = l = u = h = c = p = f = 0),
              (o = a = 1),
              (n.svg = !!(t.getCTM && iM(t))),
              z.translate &&
                (("none" !== z.translate ||
                  "none" !== z.scale ||
                  "none" !== z.rotate) &&
                  (R[im] =
                    ("none" !== z.translate
                      ? "translate3d(" +
                        (z.translate + " 0 0")
                          .split(" ")
                          .slice(0, 3)
                          .join(", ") +
                        ") "
                      : "") +
                    ("none" !== z.rotate ? "rotate(" + z.rotate + ") " : "") +
                    ("none" !== z.scale
                      ? "scale(" + z.scale.split(" ").join(",") + ") "
                      : "") +
                    ("none" !== z[im] ? z[im] : "")),
                (R.scale = R.rotate = R.translate = "none")),
              (m = iq(t, n.svg)),
              n.svg &&
                (n.uncache
                  ? ((P = t.getBBox()),
                    (I = n.xOrigin - P.x + "px " + (n.yOrigin - P.y) + "px"),
                    (T = ""))
                  : (T = !e && t.getAttribute("data-svg-origin")),
                iG(t, T || I, !!T || n.originIsAbsolute, !1 !== n.smooth, m)),
              (d = n.xOrigin || 0),
              (g = n.yOrigin || 0),
              m !== iH &&
                ((y = m[0]),
                (x = m[1]),
                (b = m[2]),
                (w = m[3]),
                (i = C = m[4]),
                (r = E = m[5]),
                6 === m.length
                  ? ((o = Math.sqrt(y * y + x * x)),
                    (a = Math.sqrt(w * w + b * b)),
                    (l = y || x ? n8(x, y) * n4 : 0),
                    (c = b || w ? n8(b, w) * n4 + l : 0) &&
                      (a *= Math.abs(Math.cos(c * n6))),
                    n.svg &&
                      ((i -= d - (d * y + g * b)), (r -= g - (d * x + g * w))))
                  : ((L = m[6]),
                    (O = m[7]),
                    (F = m[8]),
                    (M = m[9]),
                    (A = m[10]),
                    (B = m[11]),
                    (i = m[12]),
                    (r = m[13]),
                    (s = m[14]),
                    (u = (v = n8(L, A)) * n4),
                    v &&
                      ((T = C * (_ = Math.cos(-v)) + F * (D = Math.sin(-v))),
                      (P = E * _ + M * D),
                      (S = L * _ + A * D),
                      (F = -(C * D) + F * _),
                      (M = -(E * D) + M * _),
                      (A = -(L * D) + A * _),
                      (B = -(O * D) + B * _),
                      (C = T),
                      (E = P),
                      (L = S)),
                    (h = (v = n8(-b, A)) * n4),
                    v &&
                      ((T = y * (_ = Math.cos(-v)) - F * (D = Math.sin(-v))),
                      (P = x * _ - M * D),
                      (S = b * _ - A * D),
                      (B = w * D + B * _),
                      (y = T),
                      (x = P),
                      (b = S)),
                    (l = (v = n8(x, y)) * n4),
                    v &&
                      ((T = y * (_ = Math.cos(v)) + x * (D = Math.sin(v))),
                      (P = C * _ + E * D),
                      (x = x * _ - y * D),
                      (E = E * _ - C * D),
                      (y = T),
                      (C = P)),
                    u &&
                      Math.abs(u) + Math.abs(l) > 359.9 &&
                      ((u = l = 0), (h = 180 - h)),
                    (o = tC(Math.sqrt(y * y + x * x + b * b))),
                    (a = tC(Math.sqrt(E * E + L * L))),
                    (c = Math.abs((v = n8(C, E))) > 2e-4 ? v * n4 : 0),
                    (f = B ? 1 / (B < 0 ? -B : B) : 0)),
                n.svg &&
                  ((T = t.getAttribute("transform")),
                  (n.forceCSS =
                    t.setAttribute("transform", "") || !ij(iw(t, im))),
                  T && t.setAttribute("transform", T))),
              Math.abs(c) > 90 &&
                270 > Math.abs(c) &&
                (N
                  ? ((o *= -1),
                    (c += l <= 0 ? 180 : -180),
                    (l += l <= 0 ? 180 : -180))
                  : ((a *= -1), (c += c <= 0 ? 180 : -180))),
              (e = e || n.uncache),
              (n.x =
                i -
                ((n.xPercent =
                  i &&
                  ((!e && n.xPercent) ||
                    (Math.round(t.offsetWidth / 2) === Math.round(-i)
                      ? -50
                      : 0)))
                  ? (t.offsetWidth * n.xPercent) / 100
                  : 0) +
                "px"),
              (n.y =
                r -
                ((n.yPercent =
                  r &&
                  ((!e && n.yPercent) ||
                    (Math.round(t.offsetHeight / 2) === Math.round(-r)
                      ? -50
                      : 0)))
                  ? (t.offsetHeight * n.yPercent) / 100
                  : 0) +
                "px"),
              (n.z = s + "px"),
              (n.scaleX = tC(o)),
              (n.scaleY = tC(a)),
              (n.rotation = tC(l) + "deg"),
              (n.rotationX = tC(u) + "deg"),
              (n.rotationY = tC(h) + "deg"),
              (n.skewX = c + "deg"),
              (n.skewY = p + "deg"),
              (n.transformPerspective = f + "px"),
              (n.zOrigin =
                parseFloat(I.split(" ")[2]) || (!e && n.zOrigin) || 0) &&
                (R[iv] = iK(I)),
              (n.xOffset = n.yOffset = 0),
              (n.force3D = k.force3D),
              (n.renderTransform = n.svg ? i1 : nI ? iJ : iQ),
              (n.uncache = 0),
              n
            );
          },
          iK = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
          },
          iZ = function (t, e, n) {
            var i = et(e);
            return tC(parseFloat(e) + parseFloat(iL(t, "x", n + "px", i))) + i;
          },
          iQ = function (t, e) {
            (e.z = "0px"),
              (e.rotationY = e.rotationX = "0deg"),
              (e.force3D = 0),
              iJ(t, e);
          },
          i$ = "0deg",
          iJ = function (t, e) {
            var n = e || this,
              i = n.xPercent,
              r = n.yPercent,
              s = n.x,
              o = n.y,
              a = n.z,
              l = n.rotation,
              u = n.rotationY,
              h = n.rotationX,
              c = n.skewX,
              p = n.skewY,
              f = n.scaleX,
              d = n.scaleY,
              g = n.transformPerspective,
              m = n.force3D,
              v = n.target,
              _ = n.zOrigin,
              D = "",
              y = ("auto" === m && t && 1 !== t) || !0 === m;
            if (_ && (h !== i$ || u !== i$)) {
              var x,
                b = parseFloat(u) * n6,
                w = Math.sin(b),
                C = Math.cos(b);
              (s = iZ(
                v,
                s,
                -(w * (x = Math.cos((b = parseFloat(h) * n6))) * _)
              )),
                (o = iZ(v, o, -(-Math.sin(b) * _))),
                (a = iZ(v, a, -(C * x * _) + _));
            }
            "0px" !== g && (D += "perspective(" + g + ") "),
              (i || r) && (D += "translate(" + i + "%, " + r + "%) "),
              (y || "0px" !== s || "0px" !== o || "0px" !== a) &&
                (D +=
                  "0px" !== a || y
                    ? "translate3d(" + s + ", " + o + ", " + a + ") "
                    : "translate(" + s + ", " + o + ") "),
              l !== i$ && (D += "rotate(" + l + ") "),
              u !== i$ && (D += "rotateY(" + u + ") "),
              h !== i$ && (D += "rotateX(" + h + ") "),
              (c !== i$ || p !== i$) && (D += "skew(" + c + ", " + p + ") "),
              (1 !== f || 1 !== d) && (D += "scale(" + f + ", " + d + ") "),
              (v.style[im] = D || "translate(0, 0)");
          },
          i1 = function (t, e) {
            var n,
              i,
              r,
              s,
              o,
              a = e || this,
              l = a.xPercent,
              u = a.yPercent,
              h = a.x,
              c = a.y,
              p = a.rotation,
              f = a.skewX,
              d = a.skewY,
              g = a.scaleX,
              m = a.scaleY,
              v = a.target,
              _ = a.xOrigin,
              D = a.yOrigin,
              y = a.xOffset,
              x = a.yOffset,
              b = a.forceCSS,
              w = parseFloat(h),
              C = parseFloat(c);
            (p = parseFloat(p)),
              (f = parseFloat(f)),
              (d = parseFloat(d)) && ((f += d = parseFloat(d)), (p += d)),
              p || f
                ? ((p *= n6),
                  (f *= n6),
                  (n = Math.cos(p) * g),
                  (i = Math.sin(p) * g),
                  (r = -(Math.sin(p - f) * m)),
                  (s = Math.cos(p - f) * m),
                  f &&
                    ((d *= n6),
                    (r *= o = Math.sqrt(1 + (o = Math.tan(f - d)) * o)),
                    (s *= o),
                    d &&
                      ((n *= o = Math.sqrt(1 + (o = Math.tan(d)) * o)),
                      (i *= o))),
                  (n = tC(n)),
                  (i = tC(i)),
                  (r = tC(r)),
                  (s = tC(s)))
                : ((n = g), (s = m), (i = r = 0)),
              ((w && !~(h + "").indexOf("px")) ||
                (C && !~(c + "").indexOf("px"))) &&
                ((w = iL(v, "x", h, "px")), (C = iL(v, "y", c, "px"))),
              (_ || D || y || x) &&
                ((w = tC(w + _ - (_ * n + D * r) + y)),
                (C = tC(C + D - (_ * i + D * s) + x))),
              (l || u) &&
                ((w = tC(w + (l / 100) * (o = v.getBBox()).width)),
                (C = tC(C + (u / 100) * o.height))),
              (o =
                "matrix(" +
                n +
                "," +
                i +
                "," +
                r +
                "," +
                s +
                "," +
                w +
                "," +
                C +
                ")"),
              v.setAttribute("transform", o),
              b && (v.style[im] = o);
          },
          i0 = function (t, e, n, i, r) {
            var s,
              o,
              a = I(r),
              l = parseFloat(r) * (a && ~r.indexOf("rad") ? n4 : 1) - i,
              u = i + l + "deg";
            return (
              a &&
                ("short" === (s = r.split("_")[1]) &&
                  (l %= 360) != l % 180 &&
                  (l += l < 0 ? 360 : -360),
                "cw" === s && l < 0
                  ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                  : "ccw" === s &&
                    l > 0 &&
                    (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
              (t._pt = o = new n_(t._pt, e, n, i, l, ir)),
              (o.e = u),
              (o.u = "deg"),
              t._props.push(n),
              o
            );
          },
          i2 = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t;
          },
          i3 = function (t, e, n) {
            var i,
              r,
              s,
              o,
              a,
              l,
              u,
              h = i2({}, n._gsap),
              c = n.style;
            for (r in (h.svg
              ? ((s = n.getAttribute("transform")),
                n.setAttribute("transform", ""),
                (c[im] = e),
                (i = iU(n, 1)),
                ik(n, im),
                n.setAttribute("transform", s))
              : ((s = getComputedStyle(n)[im]),
                (c[im] = e),
                (i = iU(n, 1)),
                (c[im] = s)),
            n5))
              (s = h[r]) !== (o = i[r]) &&
                0 >
                  "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) &&
                ((a = et(s) !== (u = et(o)) ? iL(n, r, s, u) : parseFloat(s)),
                (l = parseFloat(o)),
                (t._pt = new n_(t._pt, i, r, a, l - a, ii)),
                (t._pt.u = u || 0),
                t._props.push(r));
            i2(i, h);
          };
        tw("padding,margin,Width,Radius", function (t, e) {
          var n = "Right",
            i = "Bottom",
            r = "Left",
            s = (
              e < 3 ? ["Top", n, i, r] : ["Top" + r, "Top" + n, i + n, i + r]
            ).map(function (n) {
              return e < 2 ? t + n : "border" + n + t;
            });
          iY[e > 1 ? "border" + t : t] = function (t, e, n, i, r) {
            var o, a;
            if (arguments.length < 4)
              return 5 ===
                (a = (o = s.map(function (e) {
                  return iR(t, e, n);
                })).join(" ")).split(o[0]).length
                ? o[0]
                : a;
            (o = (i + "").split(" ")),
              (a = {}),
              s.forEach(function (t, e) {
                return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
              }),
              t.init(e, a, r);
          };
        });
        var i5 = {
          name: "css",
          register: iT,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, n, i, r) {
            var s,
              o,
              a,
              l,
              u,
              h,
              c,
              p,
              f,
              d,
              g,
              m,
              v,
              _,
              D,
              y,
              x = this._props,
              b = t.style,
              w = n.vars.startAt;
            for (c in (nL || iT(),
            (this.styles = this.styles || ix(t)),
            (y = this.styles.props),
            (this.tween = n),
            e))
              if (
                "autoRound" !== c &&
                ((o = e[c]), !(tg[c] && e6(c, e, n, i, t, r)))
              ) {
                if (
                  ((u = typeof o),
                  (h = iY[c]),
                  "function" === u && (u = typeof (o = o.call(n, i, t, r))),
                  "string" === u && ~o.indexOf("random(") && (o = ev(o)),
                  h)
                )
                  h(this, t, c, o, n) && (D = 1);
                else if ("--" === c.substr(0, 2))
                  (s = (getComputedStyle(t).getPropertyValue(c) + "").trim()),
                    (o += ""),
                    (eM.lastIndex = 0),
                    eM.test(s) || ((p = et(s)), (f = et(o))),
                    f ? p !== f && (s = iL(t, c, s, f) + f) : p && (o += p),
                    this.add(b, "setProperty", s, o, i, r, 0, 0, c),
                    x.push(c),
                    y.push(c, 0, b[c]);
                else if ("undefined" !== u) {
                  if (
                    (w && c in w
                      ? (I(
                          (s =
                            "function" == typeof w[c]
                              ? w[c].call(n, i, t, r)
                              : w[c])
                        ) &&
                          ~s.indexOf("random(") &&
                          (s = ev(s)),
                        et(s + "") ||
                          "auto" === s ||
                          (s += k.units[c] || et(iR(t, c)) || ""),
                        "=" === (s + "").charAt(1) && (s = iR(t, c)))
                      : (s = iR(t, c)),
                    (l = parseFloat(s)),
                    (d =
                      "string" === u &&
                      "=" === o.charAt(1) &&
                      o.substr(0, 2)) && (o = o.substr(2)),
                    (a = parseFloat(o)),
                    c in ie &&
                      ("autoAlpha" === c &&
                        (1 === l &&
                          "hidden" === iR(t, "visibility") &&
                          a &&
                          (l = 0),
                        y.push("visibility", 0, b.visibility),
                        iA(
                          this,
                          b,
                          "visibility",
                          l ? "inherit" : "hidden",
                          a ? "inherit" : "hidden",
                          !a
                        )),
                      "scale" !== c &&
                        "transform" !== c &&
                        ~(c = ie[c]).indexOf(",") &&
                        (c = c.split(",")[0])),
                    (g = c in n5))
                  ) {
                    if (
                      (this.styles.save(c),
                      m ||
                        (((v = t._gsap).renderTransform && !e.parseTransform) ||
                          iU(t, e.parseTransform),
                        (_ = !1 !== e.smoothOrigin && v.smooth),
                        ((m = this._pt =
                          new n_(
                            this._pt,
                            b,
                            im,
                            0,
                            1,
                            v.renderTransform,
                            v,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === c)
                    )
                      (this._pt = new n_(
                        this._pt,
                        v,
                        "scaleY",
                        v.scaleY,
                        (d ? tT(v.scaleY, d + a) : a) - v.scaleY || 0,
                        ii
                      )),
                        (this._pt.u = 0),
                        x.push("scaleY", c),
                        (c += "X");
                    else if ("transformOrigin" === c) {
                      y.push(iv, 0, b[iv]),
                        (o = iI(o)),
                        v.svg
                          ? iG(t, o, 0, _, 0, this)
                          : ((f = parseFloat(o.split(" ")[2]) || 0) !==
                              v.zOrigin && iA(this, v, "zOrigin", v.zOrigin, f),
                            iA(this, b, c, iK(s), iK(o)));
                      continue;
                    } else if ("svgOrigin" === c) {
                      iG(t, o, 1, _, 0, this);
                      continue;
                    } else if (c in iV) {
                      i0(this, v, c, l, d ? tT(l, d + o) : o);
                      continue;
                    } else if ("smoothOrigin" === c) {
                      iA(this, v, "smooth", v.smooth, o);
                      continue;
                    } else if ("force3D" === c) {
                      v[c] = o;
                      continue;
                    } else if ("transform" === c) {
                      i3(this, o, t);
                      continue;
                    }
                  } else c in b || (c = iE(c) || c);
                  if (
                    g ||
                    ((a || 0 === a) && (l || 0 === l) && !it.test(o) && c in b)
                  )
                    (p = (s + "").substr((l + "").length)),
                      a || (a = 0),
                      (f = et(o) || (c in k.units ? k.units[c] : p)),
                      p !== f && (l = iL(t, c, s, f)),
                      (this._pt = new n_(
                        this._pt,
                        g ? v : b,
                        c,
                        l,
                        (d ? tT(l, d + a) : a) - l,
                        g ||
                        ("px" !== f && "zIndex" !== c) ||
                        !1 === e.autoRound
                          ? ii
                          : io
                      )),
                      (this._pt.u = f || 0),
                      p !== f &&
                        "%" !== f &&
                        ((this._pt.b = s), (this._pt.r = is));
                  else if (c in b) iN.call(this, t, c, s, d ? d + o : o);
                  else if (c in t)
                    this.add(t, c, s || t[c], d ? d + o : o, i, r);
                  else if ("parseTransform" !== c) {
                    ts(c, o);
                    continue;
                  }
                  g || (c in b ? y.push(c, 0, b[c]) : y.push(c, 1, s || t[c])),
                    x.push(c);
                }
              }
            D && nv(this);
          },
          render: function (t, e) {
            if (e.tween._time || !nz())
              for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
            else e.styles.revert();
          },
          get: iR,
          aliases: ie,
          getSetter: function (t, e, n) {
            var i = ie[e];
            return (
              i && 0 > i.indexOf(",") && (e = i),
              e in n5 && e !== iv && (t._gsap.x || iR(t, "x"))
                ? n && nN === n
                  ? "scale" === e
                    ? ip
                    : ic
                  : ((nN = n || {}), "scale" === e ? id : ig)
                : t.style && !H(t.style[e])
                ? iu
                : ~e.indexOf("-")
                ? ih
                : nu(t, e)
            );
          },
          core: { _removeProperty: ik, _getMatrix: iq },
        };
        (nA.utils.checkPrefix = iE),
          (nA.core.getStyleSaver = ix),
          (i8 =
            "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),
          (i7 = tw(
            (i4 = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
              "," +
              (i6 = "rotation,rotationX,rotationY,skewX,skewY") +
              ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (t) {
              n5[t] = 1;
            }
          )),
          tw(i6, function (t) {
            (k.units[t] = "deg"), (iV[t] = 1);
          }),
          (ie[i7[13]] = i4 + "," + i6),
          tw(i8, function (t) {
            var e = t.split(":");
            ie[e[1]] = i7[e[0]];
          }),
          tw(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (t) {
              k.units[t] = "px";
            }
          ),
          nA.registerPlugin(i5);
        var i4,
          i6,
          i8,
          i7,
          i9,
          rt = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
          re = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
          rn = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
          ri = /(^[#\.][a-z]|[a-y][a-z])/i,
          rr = Math.PI / 180,
          rs = 180 / Math.PI,
          ro = Math.sin,
          ra = Math.cos,
          rl = Math.abs,
          ru = Math.sqrt,
          rh = Math.atan2,
          rc = function (t) {
            return "string" == typeof t;
          },
          rp = function (t) {
            return "number" == typeof t;
          },
          rf = {},
          rd = {},
          rg = function (t) {
            return Math.round(((t + 1e8) % 1) * 1e5) / 1e5 || (t < 0 ? 0 : 1);
          },
          rm = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          rv = function (t) {
            return Math.round(1e10 * t) / 1e10 || 0;
          },
          r_ = function (t, e, n, i) {
            var r = t[e],
              s = 1 === i ? 6 : rO(r, n, i);
            if ((s || !i) && s + n + 2 < r.length)
              return (
                t.splice(e, 0, r.slice(0, n + s + 2)), r.splice(0, n + s), 1
              );
          },
          rD = function (t, e, n) {
            var i = t.length,
              r = ~~(n * i);
            if (t[r] > e) {
              for (; --r && t[r] > e; );
              r < 0 && (r = 0);
            } else for (; t[++r] < e && r < i; );
            return r < i ? r : i - 1;
          },
          ry = function (t, e) {
            var n = t.length;
            for (e || t.reverse(); n--; ) t[n].reversed || rE(t[n]);
          },
          rx = function (t, e) {
            return (
              (e.totalLength = t.totalLength),
              t.samples
                ? ((e.samples = t.samples.slice(0)),
                  (e.lookup = t.lookup.slice(0)),
                  (e.minLength = t.minLength),
                  (e.resolution = t.resolution))
                : t.totalPoints && (e.totalPoints = t.totalPoints),
              e
            );
          },
          rb = function (t, e) {
            var n = t.length,
              i = t[n - 1] || [],
              r = i.length;
            n &&
              e[0] === i[r - 2] &&
              e[1] === i[r - 1] &&
              ((e = i.concat(e.slice(2))), n--),
              (t[n] = e);
          };
        function rw(t) {
          var e,
            n = (t = (rc(t) && ri.test(t) && document.querySelector(t)) || t)
              .getAttribute
              ? t
              : 0;
          return n && (t = t.getAttribute("d"))
            ? (n._gsPath || (n._gsPath = {}),
              (e = n._gsPath[t]) && !e._dirty ? e : (n._gsPath[t] = rN(t)))
            : t
            ? rc(t)
              ? rN(t)
              : rp(t[0])
              ? [t]
              : t
            : console.warn(
                "Expecting a <path> element or an SVG path data string"
              );
        }
        function rC(t) {
          for (var e = [], n = 0; n < t.length; n++)
            e[n] = rx(t[n], t[n].slice(0));
          return rx(t, e);
        }
        function rE(t) {
          var e,
            n = 0;
          for (t.reverse(); n < t.length; n += 2)
            (e = t[n]), (t[n] = t[n + 1]), (t[n + 1] = e);
          t.reversed = !t.reversed;
        }
        var rT = function (t, e) {
            var n,
              i = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              ),
              r = [].slice.call(t.attributes),
              s = r.length;
            for (e = "," + e + ","; --s > -1; )
              (n = r[s].nodeName.toLowerCase()),
                0 > e.indexOf("," + n + ",") &&
                  i.setAttributeNS(null, n, r[s].nodeValue);
            return i;
          },
          rP = {
            rect: "rx,ry,x,y,width,height",
            circle: "r,cx,cy",
            ellipse: "rx,ry,cx,cy",
            line: "x1,x2,y1,y2",
          },
          rS = function (t, e) {
            for (
              var n = e ? e.split(",") : [], i = {}, r = n.length;
              --r > -1;

            )
              i[n[r]] = +t.getAttribute(n[r]) || 0;
            return i;
          };
        function rF(t, e) {
          var n,
            i,
            r,
            s,
            o,
            a,
            l,
            u,
            h,
            c,
            p,
            f,
            d,
            g,
            m,
            v,
            _,
            D,
            y,
            x,
            b,
            w,
            C = t.tagName.toLowerCase();
          return "path" !== C && t.getBBox
            ? ((a = rT(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
              (w = rS(t, rP[C])),
              "rect" === C
                ? ((s = w.rx),
                  (o = w.ry || s),
                  (i = w.x),
                  (r = w.y),
                  (c = w.width - 2 * s),
                  (p = w.height - 2 * o),
                  s || o
                    ? ((f = i + 0.44771525016900005 * s),
                      (m = (g = (d = i + s) + c) + 0.552284749831 * s),
                      (v = g + s),
                      (_ = r + 0.44771525016900005 * o),
                      (x = (y = (D = r + o) + p) + 0.552284749831 * o),
                      (b = y + o),
                      (n =
                        "M" +
                        v +
                        "," +
                        D +
                        " V" +
                        y +
                        " C" +
                        [
                          v,
                          x,
                          m,
                          b,
                          g,
                          b,
                          g - (g - d) / 3,
                          b,
                          d + (g - d) / 3,
                          b,
                          d,
                          b,
                          f,
                          b,
                          i,
                          x,
                          i,
                          y,
                          i,
                          y - (y - D) / 3,
                          i,
                          D + (y - D) / 3,
                          i,
                          D,
                          i,
                          _,
                          f,
                          r,
                          d,
                          r,
                          d + (g - d) / 3,
                          r,
                          g - (g - d) / 3,
                          r,
                          g,
                          r,
                          m,
                          r,
                          v,
                          _,
                          v,
                          D,
                        ].join(",") +
                        "z"))
                    : (n =
                        "M" +
                        (i + c) +
                        "," +
                        r +
                        " v" +
                        p +
                        " h" +
                        -c +
                        " v" +
                        -p +
                        " h" +
                        c +
                        "z"))
                : "circle" === C || "ellipse" === C
                ? ("circle" === C
                    ? (u = 0.552284749831 * (s = o = w.r))
                    : ((s = w.rx), (u = 0.552284749831 * (o = w.ry))),
                  (i = w.cx),
                  (r = w.cy),
                  (l = 0.552284749831 * s),
                  (n =
                    "M" +
                    (i + s) +
                    "," +
                    r +
                    " C" +
                    [
                      i + s,
                      r + u,
                      i + l,
                      r + o,
                      i,
                      r + o,
                      i - l,
                      r + o,
                      i - s,
                      r + u,
                      i - s,
                      r,
                      i - s,
                      r - u,
                      i - l,
                      r - o,
                      i,
                      r - o,
                      i + l,
                      r - o,
                      i + s,
                      r - u,
                      i + s,
                      r,
                    ].join(",") +
                    "z"))
                : "line" === C
                ? (n = "M" + w.x1 + "," + w.y1 + " L" + w.x2 + "," + w.y2)
                : ("polyline" === C || "polygon" === C) &&
                  ((n =
                    "M" +
                    (i = (h =
                      (t.getAttribute("points") + "").match(re) ||
                      []).shift()) +
                    "," +
                    (r = h.shift()) +
                    " L" +
                    h.join(",")),
                  "polygon" === C && (n += "," + i + "," + r + "z")),
              a.setAttribute("d", rY((a._gsRawPath = rN(n)))),
              e &&
                t.parentNode &&
                (t.parentNode.insertBefore(a, t), t.parentNode.removeChild(t)),
              a)
            : t;
        }
        function rM(t, e, n) {
          var i,
            r = t[e],
            s = t[e + 2],
            o = t[e + 4];
          return (
            (r += (s - r) * n),
            (s += (o - s) * n),
            (r += (s - r) * n),
            (i = s + (o + (t[e + 6] - o) * n - s) * n - r),
            (r = t[e + 1]),
            (s = t[e + 3]),
            (o = t[e + 5]),
            (r += (s - r) * n),
            (s += (o - s) * n),
            (r += (s - r) * n),
            rm(rh(s + (o + (t[e + 7] - o) * n - s) * n - r, i) * rs)
          );
        }
        function rk(t, e, n) {
          var i = Math.max(
              0,
              ~~(
                rl((n = void 0 === n ? 1 : rv(n) || 0) - (e = rv(e) || 0)) -
                1e-8
              )
            ),
            r = rC(t);
          if (
            (e > n && ((e = 1 - e), (n = 1 - n), ry(r), (r.totalLength = 0)),
            e < 0 || n < 0)
          ) {
            var s = Math.abs(~~Math.min(e, n)) + 1;
            (e += s), (n += s);
          }
          r.totalLength || rA(r);
          var o,
            a,
            l,
            u,
            h,
            c,
            p,
            f,
            d = n > 1,
            g = rB(r, e, rf, !0),
            m = rB(r, n, rd),
            v = m.segment,
            _ = g.segment,
            D = m.segIndex,
            y = g.segIndex,
            x = m.i,
            b = g.i,
            w = y === D,
            C = x === b && w;
          if (d || i) {
            for (
              o = D < y || (w && x < b) || (C && m.t < g.t),
                r_(r, y, b, g.t) &&
                  (y++,
                  !o &&
                    (D++,
                    C
                      ? ((m.t = (m.t - g.t) / (1 - g.t)), (x = 0))
                      : w && (x -= b))),
                1e-5 > Math.abs(1 - (n - e))
                  ? (D = y - 1)
                  : !m.t && D
                  ? D--
                  : r_(r, D, x, m.t) && o && y++,
                1 === g.t && (y = (y + 1) % r.length),
                h = [],
                p = 1 + (c = r.length) * i,
                f = y,
                p += (c - y + D) % c,
                u = 0;
              u < p;
              u++
            )
              rb(h, r[f++ % c]);
            r = h;
          } else if (((l = 1 === m.t ? 6 : rO(v, x, m.t)), e !== n))
            for (
              a = rO(_, b, C ? g.t / m.t : g.t),
                w && (l += a),
                v.splice(x + l + 2),
                (a || b) && _.splice(0, b + a),
                u = r.length;
              u--;

            )
              (u < y || u > D) && r.splice(u, 1);
          else
            (v.angle = rM(v, x + l, 0)),
              (x += l),
              (g = v[x]),
              (m = v[x + 1]),
              (v.length = v.totalLength = 0),
              (v.totalPoints = r.totalPoints = 8),
              v.push(g, m, g, m, g, m, g, m);
          return (r.totalLength = 0), r;
        }
        function rA(t, e) {
          var n, i, r;
          for (r = n = i = 0; r < t.length; r++)
            (t[r].resolution = ~~e || 12),
              (i += t[r].length),
              (n += (function (t, e, n) {
                (e = e || 0), t.samples || ((t.samples = []), (t.lookup = []));
                var i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  u,
                  h,
                  c,
                  p,
                  f,
                  d,
                  g,
                  m,
                  v,
                  _,
                  D,
                  y = ~~t.resolution || 12,
                  x = 1 / y,
                  b = t.length,
                  w = t[e],
                  C = t[e + 1],
                  E = e ? (e / 6) * y : 0,
                  T = t.samples,
                  P = t.lookup,
                  S = (e ? t.minLength : 1e8) || 1e8,
                  F = T[E + void 0 * y - 1],
                  M = e ? T[E - 1] : 0;
                for (T.length = P.length = 0, r = e + 2; r < b; r += 6) {
                  if (
                    ((s = t[r + 4] - w),
                    (o = t[r + 2] - w),
                    (a = t[r] - w),
                    (h = t[r + 5] - C),
                    (c = t[r + 3] - C),
                    (p = t[r + 1] - C),
                    (l = u = f = d = 0),
                    0.01 > rl(s) && 0.01 > rl(h) && rl(a) + rl(p) < 0.01)
                  )
                    t.length > 8 && (t.splice(r, 6), (r -= 6), (b -= 6));
                  else
                    for (i = 1; i <= y; i++)
                      (g = 1 - (m = x * i)),
                        (l =
                          u - (u = (m * m * s + 3 * g * (m * o + g * a)) * m)),
                        (_ = ru(
                          (f =
                            d -
                            (d = (m * m * h + 3 * g * (m * c + g * p)) * m)) *
                            f +
                            l * l
                        )) < S && (S = _),
                        (M += _),
                        (T[E++] = M);
                  (w += s), (C += h);
                }
                if (F) for (F -= M; E < T.length; E++) T[E] += F;
                if (T.length && S) {
                  if (
                    ((t.totalLength = D = T[T.length - 1] || 0),
                    (t.minLength = S),
                    D / S < 9999)
                  )
                    for (i = 0, _ = v = 0; i < D; i += S)
                      P[_++] = T[v] < i ? ++v : v;
                } else t.totalLength = T[0] = 0;
                return e ? M - T[e / 2 - 1] : M;
              })(t[r]));
          return (t.totalPoints = i), (t.totalLength = n), t;
        }
        function rO(t, e, n) {
          if (n <= 0 || n >= 1) return 0;
          var i = t[e],
            r = t[e + 1],
            s = t[e + 2],
            o = t[e + 3],
            a = t[e + 4],
            l = t[e + 5],
            u = t[e + 6],
            h = t[e + 7],
            c = i + (s - i) * n,
            p = s + (a - s) * n,
            f = r + (o - r) * n,
            d = o + (l - o) * n,
            g = c + (p - c) * n,
            m = f + (d - f) * n,
            v = a + (u - a) * n,
            _ = l + (h - l) * n;
          return (
            (p += (v - p) * n),
            (d += (_ - d) * n),
            t.splice(
              e + 2,
              4,
              rm(c),
              rm(f),
              rm(g),
              rm(m),
              rm(g + (p - g) * n),
              rm(m + (d - m) * n),
              rm(p),
              rm(d),
              rm(v),
              rm(_)
            ),
            t.samples &&
              t.samples.splice(
                ((e / 6) * t.resolution) | 0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ),
            6
          );
        }
        function rB(t, e, n, i) {
          (n = n || {}),
            t.totalLength || rA(t),
            (e < 0 || e > 1) && (e = rg(e));
          var r,
            s,
            o,
            a,
            l,
            u,
            h,
            c = 0,
            p = t[0];
          if (e) {
            if (1 === e)
              (h = 1), (c = t.length - 1), (u = (p = t[c]).length - 8);
            else {
              if (t.length > 1) {
                for (
                  o = t.totalLength * e, l = u = 0;
                  (l += t[u++].totalLength) < o;

                )
                  c = u;
                e = (o - (a = l - (p = t[c]).totalLength)) / (l - a) || 0;
              }
              (r = p.samples),
                (s = p.resolution),
                (o = p.totalLength * e),
                (a = (u = p.lookup.length
                  ? p.lookup[~~(o / p.minLength)] || 0
                  : rD(r, o, e))
                  ? r[u - 1]
                  : 0),
                (l = r[u]) < o && ((a = l), (l = r[++u])),
                (h = (1 / s) * ((o - a) / (l - a) + (u % s))),
                (u = 6 * ~~(u / s)),
                i &&
                  1 === h &&
                  (u + 6 < p.length
                    ? ((u += 6), (h = 0))
                    : c + 1 < t.length && ((u = h = 0), (p = t[++c])));
            }
          } else (h = u = c = 0), (p = t[0]);
          return (
            (n.t = h),
            (n.i = u),
            (n.path = t),
            (n.segment = p),
            (n.segIndex = c),
            n
          );
        }
        function rL(t, e, n, i) {
          var r,
            s,
            o,
            a,
            l,
            u,
            h,
            c,
            p,
            f = t[0],
            d = i || {};
          if (
            ((e < 0 || e > 1) && (e = rg(e)), f.lookup || rA(t), t.length > 1)
          ) {
            for (
              o = t.totalLength * e, l = u = 0;
              (l += t[u++].totalLength) < o;

            )
              f = t[u];
            e = (o - (a = l - f.totalLength)) / (l - a) || 0;
          }
          return (
            (r = f.samples),
            (s = f.resolution),
            (o = f.totalLength * e),
            (a = (u = f.lookup.length
              ? f.lookup[e < 1 ? ~~(o / f.minLength) : f.lookup.length - 1] || 0
              : rD(r, o, e))
              ? r[u - 1]
              : 0),
            (l = r[u]) < o && ((a = l), (l = r[++u])),
            (p = 1 - (h = (1 / s) * ((o - a) / (l - a) + (u % s)) || 0)),
            (c = f[(u = 6 * ~~(u / s))]),
            (d.x = rm(
              (h * h * (f[u + 6] - c) +
                3 * p * (h * (f[u + 4] - c) + p * (f[u + 2] - c))) *
                h +
                c
            )),
            (d.y = rm(
              (h * h * (f[u + 7] - (c = f[u + 1])) +
                3 * p * (h * (f[u + 5] - c) + p * (f[u + 3] - c))) *
                h +
                c
            )),
            n &&
              (d.angle = f.totalLength
                ? rM(f, u, h >= 1 ? 1 - 1e-9 : h || 1e-9)
                : f.angle || 0),
            d
          );
        }
        function rR(t, e, n, i, r, s, o) {
          for (var a, l, u, h, c, p = t.length; --p > -1; )
            for (u = 0, l = (a = t[p]).length; u < l; u += 2)
              (h = a[u]),
                (c = a[u + 1]),
                (a[u] = h * e + c * i + s),
                (a[u + 1] = h * n + c * r + o);
          return (t._dirty = 1), t;
        }
        function rN(t) {
          var e,
            n,
            i,
            r,
            s,
            o,
            a,
            l,
            u,
            h,
            c,
            p,
            f,
            d,
            g,
            m =
              (t + "")
                .replace(rn, function (t) {
                  var e = +t;
                  return e < 1e-4 && e > -1e-4 ? 0 : e;
                })
                .match(rt) || [],
            v = [],
            _ = 0,
            D = 0,
            y = 2 / 3,
            x = m.length,
            b = 0,
            w = "ERROR: malformed path: " + t,
            C = function (t, e, n, i) {
              (h = (n - t) / 3),
                (c = (i - e) / 3),
                a.push(t + h, e + c, n - h, i - c, n, i);
            };
          if (!t || !isNaN(m[0]) || isNaN(m[1])) return console.log(w), v;
          for (e = 0; e < x; e++)
            if (
              ((f = s),
              isNaN(m[e]) ? (o = (s = m[e].toUpperCase()) !== m[e]) : e--,
              (i = +m[e + 1]),
              (r = +m[e + 2]),
              o && ((i += _), (r += D)),
              e || ((l = i), (u = r)),
              "M" === s)
            )
              a && (a.length < 8 ? (v.length -= 1) : (b += a.length)),
                (_ = l = i),
                (D = u = r),
                (a = [i, r]),
                v.push(a),
                (e += 2),
                (s = "L");
            else if ("C" === s)
              a || (a = [0, 0]),
                o || (_ = D = 0),
                a.push(
                  i,
                  r,
                  _ + 1 * m[e + 3],
                  D + 1 * m[e + 4],
                  (_ += 1 * m[e + 5]),
                  (D += 1 * m[e + 6])
                ),
                (e += 6);
            else if ("S" === s)
              (h = _),
                (c = D),
                ("C" === f || "S" === f) &&
                  ((h += _ - a[a.length - 4]), (c += D - a[a.length - 3])),
                o || (_ = D = 0),
                a.push(h, c, i, r, (_ += 1 * m[e + 3]), (D += 1 * m[e + 4])),
                (e += 4);
            else if ("Q" === s)
              (h = _ + (i - _) * y),
                (c = D + (r - D) * y),
                o || (_ = D = 0),
                (_ += 1 * m[e + 3]),
                (D += 1 * m[e + 4]),
                a.push(h, c, _ + (i - _) * y, D + (r - D) * y, _, D),
                (e += 4);
            else if ("T" === s)
              (h = _ - a[a.length - 4]),
                (c = D - a[a.length - 3]),
                a.push(
                  _ + h,
                  D + c,
                  i + (_ + 1.5 * h - i) * y,
                  r + (D + 1.5 * c - r) * y,
                  (_ = i),
                  (D = r)
                ),
                (e += 2);
            else if ("H" === s) C(_, D, (_ = i), D), (e += 1);
            else if ("V" === s) C(_, D, _, (D = i + (o ? D - _ : 0))), (e += 1);
            else if ("L" === s || "Z" === s)
              "Z" === s && ((i = l), (r = u), (a.closed = !0)),
                ("L" === s || rl(_ - i) > 0.5 || rl(D - r) > 0.5) &&
                  (C(_, D, i, r), "L" === s && (e += 2)),
                (_ = i),
                (D = r);
            else if ("A" === s) {
              if (
                ((d = m[e + 4]),
                (g = m[e + 5]),
                (h = m[e + 6]),
                (c = m[e + 7]),
                (n = 7),
                d.length > 1 &&
                  (d.length < 3
                    ? ((c = h), (h = g), n--)
                    : ((c = g), (h = d.substr(2)), (n -= 2)),
                  (g = d.charAt(1)),
                  (d = d.charAt(0))),
                (p = (function (t, e, n, i, r, s, o, a, l) {
                  if (t !== a || e !== l) {
                    (n = rl(n)), (i = rl(i));
                    var u = (r % 360) * rr,
                      h = ra(u),
                      c = ro(u),
                      p = Math.PI,
                      f = 2 * p,
                      d = (t - a) / 2,
                      g = (e - l) / 2,
                      m = h * d + c * g,
                      v = -c * d + h * g,
                      _ = m * m,
                      D = v * v,
                      y = _ / (n * n) + D / (i * i);
                    y > 1 && ((n = ru(y) * n), (i = ru(y) * i));
                    var x = n * n,
                      b = i * i,
                      w = (x * b - x * D - b * _) / (x * D + b * _);
                    w < 0 && (w = 0);
                    var C = (s === o ? -1 : 1) * ru(w),
                      E = ((n * v) / i) * C,
                      T = -(((i * m) / n) * C),
                      P = (t + a) / 2 + (h * E - c * T),
                      S = (e + l) / 2 + (c * E + h * T),
                      F = (m - E) / n,
                      M = (v - T) / i,
                      k = (-m - E) / n,
                      A = (-v - T) / i,
                      O = F * F + M * M,
                      B = (M < 0 ? -1 : 1) * Math.acos(F / ru(O)),
                      L =
                        (F * A - M * k < 0 ? -1 : 1) *
                        Math.acos((F * k + M * A) / ru(O * (k * k + A * A)));
                    isNaN(L) && (L = p),
                      !o && L > 0 ? (L -= f) : o && L < 0 && (L += f),
                      (B %= f);
                    var R,
                      N = Math.ceil(rl((L %= f)) / (f / 4)),
                      z = [],
                      I = L / N,
                      X = ((4 / 3) * ro(I / 2)) / (1 + ra(I / 2)),
                      Y = h * n,
                      H = c * n,
                      V = -(c * i),
                      j = h * i;
                    for (R = 0; R < N; R++)
                      (m = ra((r = B + R * I))),
                        (v = ro(r)),
                        (F = ra((r += I))),
                        (M = ro(r)),
                        z.push(
                          m - X * v,
                          v + X * m,
                          F + X * M,
                          M - X * F,
                          F,
                          M
                        );
                    for (R = 0; R < z.length; R += 2)
                      (m = z[R]),
                        (v = z[R + 1]),
                        (z[R] = m * Y + v * V + P),
                        (z[R + 1] = m * H + v * j + S);
                    return (z[R - 2] = a), (z[R - 1] = l), z;
                  }
                })(
                  _,
                  D,
                  +m[e + 1],
                  +m[e + 2],
                  +m[e + 3],
                  +d,
                  +g,
                  (o ? _ : 0) + 1 * h,
                  (o ? D : 0) + 1 * c
                )),
                (e += n),
                p)
              )
                for (n = 0; n < p.length; n++) a.push(p[n]);
              (_ = a[a.length - 2]), (D = a[a.length - 1]);
            } else console.log(w);
          return (
            (e = a.length) < 6
              ? (v.pop(), (e = 0))
              : a[0] === a[e - 2] && a[1] === a[e - 1] && (a.closed = !0),
            (v.totalPoints = b + e),
            v
          );
        }
        function rz(t, e, n, i, r, s, o, a, l, u, h) {
          var c,
            p = (t + n) / 2,
            f = (e + i) / 2,
            d = (n + r) / 2,
            g = (i + s) / 2,
            m = (r + o) / 2,
            v = (s + a) / 2,
            _ = (p + d) / 2,
            D = (f + g) / 2,
            y = (d + m) / 2,
            x = (g + v) / 2,
            b = (_ + y) / 2,
            w = (D + x) / 2,
            C = o - t,
            E = a - e,
            T = rl((n - o) * E - (i - a) * C),
            P = rl((r - o) * E - (s - a) * C);
          return (
            u || ((u = [t, e, o, a]), (h = 2)),
            u.splice(h || u.length - 2, 0, b, w),
            (T + P) * (T + P) > l * (C * C + E * E) &&
              ((c = u.length),
              rz(t, e, p, f, _, D, b, w, l, u, h),
              rz(b, w, y, x, m, v, o, a, l, u, h + 2 + (u.length - c))),
            u
          );
        }
        function rI(t, e) {
          1e-4 > rl(t[0] - t[2]) && 1e-4 > rl(t[1] - t[3]) && (t = t.slice(2));
          var n,
            i,
            r,
            s,
            o,
            a,
            l,
            u,
            h,
            c,
            p,
            f,
            d,
            g,
            m,
            v = t.length - 2,
            _ = +t[0],
            D = +t[1],
            y = +t[2],
            x = +t[3],
            b = [_, D, _, D],
            w = y - _,
            C = x - D,
            E = 0.001 > Math.abs(t[v] - _) && 0.001 > Math.abs(t[v + 1] - D);
          for (
            E &&
              (t.push(y, x),
              (y = _),
              (x = D),
              (_ = t[v - 2]),
              (D = t[v - 1]),
              t.unshift(_, D),
              (v += 4)),
              e = e || 0 === e ? +e : 1,
              r = 2;
            r < v;
            r += 2
          )
            (n = _),
              (i = D),
              (_ = y),
              (D = x),
              (y = +t[r + 2]),
              (x = +t[r + 3]),
              (_ !== y || D !== x) &&
                ((s = w),
                (o = C),
                (w = y - _),
                (C = x - D),
                (a = ru(s * s + o * o)),
                (l = ru(w * w + C * C)),
                (u = ru(
                  Math.pow(w / l + s / a, 2) + Math.pow(C / l + o / a, 2)
                )),
                (h = ((a + l) * e * 0.25) / u),
                (c = _ - (_ - n) * (a ? h / a : 0)),
                (p = _ + (y - _) * (l ? h / l : 0)),
                (f =
                  _ - (c + (((p - c) * ((3 * a) / (a + l) + 0.5)) / 4 || 0))),
                (d = D - (D - i) * (a ? h / a : 0)),
                (g = D + (x - D) * (l ? h / l : 0)),
                (m =
                  D - (d + (((g - d) * ((3 * a) / (a + l) + 0.5)) / 4 || 0))),
                (_ !== n || D !== i) &&
                  b.push(
                    rm(c + f),
                    rm(d + m),
                    rm(_),
                    rm(D),
                    rm(p + f),
                    rm(g + m)
                  ));
          return (
            _ !== y || D !== x || b.length < 4
              ? b.push(rm(y), rm(x), rm(y), rm(x))
              : (b.length -= 2),
            2 === b.length
              ? b.push(_, D, _, D, _, D)
              : E && (b.splice(0, 6), (b.length = b.length - 6)),
            b
          );
        }
        function rX(t, e) {
          var n,
            i,
            r,
            s,
            o,
            a,
            l,
            u = parseFloat(t[0]),
            h = parseFloat(t[1]),
            c = [u, h],
            p = t.length - 2;
          for (n = 2, e = Math.pow(e || 1, 2); n < p; n += 2)
            (i = parseFloat(t[n])),
              (r = parseFloat(t[n + 1])),
              (s = u - i) * s + (o = h - r) * o > e &&
                (c.push(i, r), (u = i), (h = r));
          return (
            c.push(parseFloat(t[p]), parseFloat(t[p + 1])),
            (l = c.length - 2),
            (a = [c[0], c[1]]),
            (function t(e, n, i, r, s) {
              var o,
                a,
                l,
                u = r,
                h = e[n],
                c = e[n + 1],
                p = e[i],
                f = e[i + 1];
              for (a = n + 2; a < i; a += 2)
                (l = (function (t, e, n, i, r, s) {
                  var o,
                    a = r - n,
                    l = s - i;
                  return (
                    (a || l) &&
                      ((o = ((t - n) * a + (e - i) * l) / (a * a + l * l)) > 1
                        ? ((n = r), (i = s))
                        : o > 0 && ((n += a * o), (i += l * o))),
                    Math.pow(t - n, 2) + Math.pow(e - i, 2)
                  );
                })(e[a], e[a + 1], h, c, p, f)) > u && ((o = a), (u = l));
              u > r &&
                (o - n > 2 && t(e, n, o, r, s),
                s.push(e[o], e[o + 1]),
                i - o > 2 && t(e, o, i, r, s));
            })(c, 0, l, e, a),
            a.push(c[l], c[l + 1]),
            a
          );
        }
        function rY(t) {
          rp(t[0]) && (t = [t]);
          var e,
            n,
            i,
            r,
            s = "",
            o = t.length;
          for (n = 0; n < o; n++) {
            for (
              s += "M" + rm((r = t[n])[0]) + "," + rm(r[1]) + " C",
                e = r.length,
                i = 2;
              i < e;
              i++
            )
              s +=
                rm(r[i++]) +
                "," +
                rm(r[i++]) +
                " " +
                rm(r[i++]) +
                "," +
                rm(r[i++]) +
                " " +
                rm(r[i++]) +
                "," +
                rm(r[i]) +
                " ";
            r.closed && (s += "z");
          }
          return s;
        }
        var rH,
          rV,
          rj = function () {
            return rH || ((rH = window.gsap) && rH.registerPlugin && rH);
          },
          rW = function () {
            (rH = rj())
              ? (rH.registerEase("_CE", r$.create), (rV = 1))
              : console.warn("Please gsap.registerPlugin(CustomEase)");
          },
          rq = function (t) {
            return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
          },
          rG = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
          rU = /[cLlsSaAhHvVtTqQ]/g,
          rK = function (t) {
            var e,
              n = t.length,
              i = 1e20;
            for (e = 1; e < n; e += 6) +t[e] < i && (i = +t[e]);
            return i;
          },
          rZ = function (t, e, n) {
            n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
            var i,
              r = -1 * +t[0],
              s = -n,
              o = t.length,
              a = 1 / (+t[o - 2] + r),
              l =
                -e ||
                (Math.abs(+t[o - 1] - +t[1]) < 0.01 * (+t[o - 2] - +t[0])
                  ? rK(t) + s
                  : +t[o - 1] + s);
            for (i = 0, l = l ? 1 / l : -a; i < o; i += 2)
              (t[i] = (+t[i] + r) * a), (t[i + 1] = (+t[i + 1] + s) * l);
          },
          rQ = function t(e, n, i, r, s, o, a, l, u, h, c) {
            var p,
              f = (e + i) / 2,
              d = (n + r) / 2,
              g = (i + s) / 2,
              m = (r + o) / 2,
              v = (s + a) / 2,
              _ = (o + l) / 2,
              D = (f + g) / 2,
              y = (d + m) / 2,
              x = (g + v) / 2,
              b = (m + _) / 2,
              w = (D + x) / 2,
              C = (y + b) / 2,
              E = a - e,
              T = l - n,
              P = Math.abs((i - a) * T - (r - l) * E),
              S = Math.abs((s - a) * T - (o - l) * E);
            return (
              h ||
                ((h = [
                  { x: e, y: n },
                  { x: a, y: l },
                ]),
                (c = 1)),
              h.splice(c || h.length - 1, 0, { x: w, y: C }),
              (P + S) * (P + S) > u * (E * E + T * T) &&
                ((p = h.length),
                t(e, n, f, d, D, y, w, C, u, h, c),
                t(w, C, x, b, v, _, a, l, u, h, c + 1 + (h.length - p))),
              h
            );
          },
          r$ = (function () {
            function t(t, e, n) {
              rV || rW(), (this.id = t), this.setData(e, n);
            }
            var e = t.prototype;
            return (
              (e.setData = function (t, e) {
                e = e || {};
                var n,
                  i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  u,
                  h,
                  c = (t = t || "0,0,1,1").match(rG),
                  p = 1,
                  f = [],
                  d = [],
                  g = e.precision || 1,
                  m = g <= 1;
                if (
                  ((this.data = t),
                  (rU.test(t) || (~t.indexOf("M") && 0 > t.indexOf("C"))) &&
                    (c = rN(t)[0]),
                  4 === (n = c.length))
                )
                  c.unshift(0, 0), c.push(1, 1), (n = 8);
                else if ((n - 2) % 6) throw "Invalid CustomEase";
                for (
                  (0 != +c[0] || 1 != +c[n - 2]) && rZ(c, e.height, e.originY),
                    this.segment = c,
                    s = 2;
                  s < n;
                  s += 6
                )
                  (i = { x: +c[s - 2], y: +c[s - 1] }),
                    (r = { x: +c[s + 4], y: +c[s + 5] }),
                    f.push(i, r),
                    rQ(
                      i.x,
                      i.y,
                      +c[s],
                      +c[s + 1],
                      +c[s + 2],
                      +c[s + 3],
                      r.x,
                      r.y,
                      1 / (2e5 * g),
                      f,
                      f.length - 1
                    );
                for (s = 0, n = f.length; s < n; s++)
                  (l = f[s]),
                    (u = f[s - 1] || l),
                    (l.x > u.x || (u.y !== l.y && u.x === l.x) || l === u) &&
                    l.x <= 1
                      ? ((u.cx = l.x - u.x),
                        (u.cy = l.y - u.y),
                        (u.n = l),
                        (u.nx = l.x),
                        m &&
                          s > 1 &&
                          Math.abs(u.cy / u.cx - f[s - 2].cy / f[s - 2].cx) >
                            2 &&
                          (m = 0),
                        u.cx < p &&
                          (u.cx
                            ? (p = u.cx)
                            : ((u.cx = 0.001),
                              s === n - 1 &&
                                ((u.x -= 0.001),
                                (p = Math.min(p, 0.001)),
                                (m = 0)))))
                      : (f.splice(s--, 1), n--);
                if (((o = 1 / (n = (1 / p + 1) | 0)), (a = 0), (l = f[0]), m)) {
                  for (s = 0; s < n; s++)
                    (h = s * o),
                      l.nx < h && (l = f[++a]),
                      (i = l.y + ((h - l.x) / l.cx) * l.cy),
                      (d[s] = { x: h, cx: o, y: i, cy: 0, nx: 9 }),
                      s && (d[s - 1].cy = i - d[s - 1].y);
                  d[n - 1].cy = f[f.length - 1].y - i;
                } else {
                  for (s = 0; s < n; s++)
                    l.nx < s * o && (l = f[++a]), (d[s] = l);
                  a < f.length - 1 && (d[s - 1] = f[f.length - 2]);
                }
                return (
                  (this.ease = function (t) {
                    var e = d[(t * n) | 0] || d[n - 1];
                    return (
                      e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy
                    );
                  }),
                  (this.ease.custom = this),
                  this.id && rH && rH.registerEase(this.id, this.ease),
                  this
                );
              }),
              (e.getSVGData = function (e) {
                return t.getSVGData(this, e);
              }),
              (t.create = function (e, n, i) {
                return new t(e, n, i).ease;
              }),
              (t.register = function (t) {
                (rH = t), rW();
              }),
              (t.get = function (t) {
                return rH.parseEase(t);
              }),
              (t.getSVGData = function (e, n) {
                var i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  u,
                  h,
                  c,
                  p,
                  f = (n = n || {}).width || 100,
                  d = n.height || 100,
                  g = n.x || 0,
                  m = (n.y || 0) + d,
                  v = rH.utils.toArray(n.path)[0];
                if (
                  (n.invert && ((d = -d), (m = 0)),
                  "string" == typeof e && (e = rH.parseEase(e)),
                  e.custom && (e = e.custom),
                  e instanceof t)
                )
                  i = rY(rR([e.segment], f, 0, 0, -d, g, m));
                else {
                  for (
                    i = [g, m],
                      o = 1 / (u = Math.max(5, 200 * (n.precision || 1))),
                      u += 2,
                      h = 5 / u,
                      c = rq(g + o * f),
                      r = ((p = rq(m + -(e(o) * d))) - m) / (c - g),
                      s = 2;
                    s < u;
                    s++
                  )
                    (a = rq(g + s * o * f)),
                      (Math.abs(
                        ((l = rq(m + -(e(s * o) * d))) - p) / (a - c) - r
                      ) > h ||
                        s === u - 1) &&
                        (i.push(c, p), (r = (l - p) / (a - c))),
                      (c = a),
                      (p = l);
                  i = "M" + i.join(",");
                }
                return v && v.setAttribute("d", i), i;
              }),
              t
            );
          })();
        rj() && rH.registerPlugin(r$), (r$.version = "3.12.5");
        var rJ,
          r1,
          r0,
          r2,
          r3,
          r5,
          r4,
          r6,
          r8,
          r7 = "transform",
          r9 = r7 + "Origin",
          st = function (t) {
            var e = t.ownerDocument || t;
            for (
              !(r7 in t.style) &&
              ("msTransform" in t.style) &&
              (r9 = (r7 = "msTransform") + "Origin");
              e.parentNode && (e = e.parentNode);

            );
            if (((r1 = window), (r4 = new sp()), e)) {
              (rJ = e),
                (r0 = e.documentElement),
                (r2 = e.body),
                ((r6 = rJ.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g"
                )).style.transform = "none");
              var n = e.createElement("div"),
                i = e.createElement("div"),
                r = e && (e.body || e.firstElementChild);
              r &&
                r.appendChild &&
                (r.appendChild(n),
                n.appendChild(i),
                n.setAttribute(
                  "style",
                  "position:static;transform:translate3d(0,0,1px)"
                ),
                (r8 = i.offsetParent !== n),
                r.removeChild(n));
            }
            return e;
          },
          se = function (t) {
            for (var e, n; t && t !== r2; )
              (n = t._gsap) && n.uncache && n.get(t, "x"),
                n &&
                  !n.scaleX &&
                  !n.scaleY &&
                  n.renderTransform &&
                  ((n.scaleX = n.scaleY = 1e-4),
                  n.renderTransform(1, n),
                  e ? e.push(n) : (e = [n])),
                (t = t.parentNode);
            return e;
          },
          sn = [],
          si = [],
          sr = function () {
            return (
              r1.pageYOffset ||
              rJ.scrollTop ||
              r0.scrollTop ||
              r2.scrollTop ||
              0
            );
          },
          ss = function () {
            return (
              r1.pageXOffset ||
              rJ.scrollLeft ||
              r0.scrollLeft ||
              r2.scrollLeft ||
              0
            );
          },
          so = function (t) {
            return (
              t.ownerSVGElement ||
              ("svg" === (t.tagName + "").toLowerCase() ? t : null)
            );
          },
          sa = function t(e, n) {
            if (e.parentNode && (rJ || st(e))) {
              var i = so(e),
                r = i
                  ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
                  : "http://www.w3.org/1999/xhtml",
                s = i ? (n ? "rect" : "g") : "div",
                o = 2 !== n ? 0 : 100,
                a = 3 === n ? 100 : 0,
                l =
                  "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                u = rJ.createElementNS
                  ? rJ.createElementNS(r.replace(/^https/, "http"), s)
                  : rJ.createElement(s);
              return (
                n &&
                  (i
                    ? (r5 || (r5 = t(e)),
                      u.setAttribute("width", 0.01),
                      u.setAttribute("height", 0.01),
                      u.setAttribute(
                        "transform",
                        "translate(" + o + "," + a + ")"
                      ),
                      r5.appendChild(u))
                    : (r3 || ((r3 = t(e)).style.cssText = l),
                      (u.style.cssText =
                        l +
                        "width:0.1px;height:0.1px;top:" +
                        a +
                        "px;left:" +
                        o +
                        "px"),
                      r3.appendChild(u))),
                u
              );
            }
            throw "Need document and parent.";
          },
          sl = function (t) {
            for (var e = new sp(), n = 0; n < t.numberOfItems; n++)
              e.multiply(t.getItem(n).matrix);
            return e;
          },
          su = function (t) {
            var e,
              n = t.getCTM();
            return (
              n ||
                ((e = t.style[r7]),
                (t.style[r7] = "none"),
                t.appendChild(r6),
                (n = r6.getCTM()),
                t.removeChild(r6),
                e
                  ? (t.style[r7] = e)
                  : t.style.removeProperty(
                      r7.replace(/([A-Z])/g, "-$1").toLowerCase()
                    )),
              n || r4.clone()
            );
          },
          sh = function (t, e) {
            var n,
              i,
              r,
              s,
              o,
              a,
              l = so(t),
              u = t === l,
              h = l ? sn : si,
              c = t.parentNode;
            if (t === r1) return t;
            if (
              (h.length || h.push(sa(t, 1), sa(t, 2), sa(t, 3)),
              (n = l ? r5 : r3),
              l)
            )
              u
                ? ((s = -(r = su(t)).e / r.a), (o = -r.f / r.d), (i = r4))
                : t.getBBox
                ? ((r = t.getBBox()),
                  (s =
                    (i = (i = t.transform ? t.transform.baseVal : {})
                      .numberOfItems
                      ? i.numberOfItems > 1
                        ? sl(i)
                        : i.getItem(0).matrix
                      : r4).a *
                      r.x +
                    i.c * r.y),
                  (o = i.b * r.x + i.d * r.y))
                : ((i = new sp()), (s = o = 0)),
                e && "g" === t.tagName.toLowerCase() && (s = o = 0),
                (u ? l : c).appendChild(n),
                n.setAttribute(
                  "transform",
                  "matrix(" +
                    i.a +
                    "," +
                    i.b +
                    "," +
                    i.c +
                    "," +
                    i.d +
                    "," +
                    (i.e + s) +
                    "," +
                    (i.f + o) +
                    ")"
                );
            else {
              if (((s = o = 0), r8))
                for (
                  i = t.offsetParent, r = t;
                  r && (r = r.parentNode) && r !== i && r.parentNode;

                )
                  (r1.getComputedStyle(r)[r7] + "").length > 4 &&
                    ((s = r.offsetLeft), (o = r.offsetTop), (r = 0));
              if (
                "absolute" !== (a = r1.getComputedStyle(t)).position &&
                "fixed" !== a.position
              )
                for (i = t.offsetParent; c && c !== i; )
                  (s += c.scrollLeft || 0),
                    (o += c.scrollTop || 0),
                    (c = c.parentNode);
              ((r = n.style).top = t.offsetTop - o + "px"),
                (r.left = t.offsetLeft - s + "px"),
                (r[r7] = a[r7]),
                (r[r9] = a[r9]),
                (r.position = "fixed" === a.position ? "fixed" : "absolute"),
                t.parentNode.appendChild(n);
            }
            return n;
          },
          sc = function (t, e, n, i, r, s, o) {
            return (
              (t.a = e),
              (t.b = n),
              (t.c = i),
              (t.d = r),
              (t.e = s),
              (t.f = o),
              t
            );
          },
          sp = (function () {
            function t(t, e, n, i, r, s) {
              void 0 === t && (t = 1),
                void 0 === e && (e = 0),
                void 0 === n && (n = 0),
                void 0 === i && (i = 1),
                void 0 === r && (r = 0),
                void 0 === s && (s = 0),
                sc(this, t, e, n, i, r, s);
            }
            var e = t.prototype;
            return (
              (e.inverse = function () {
                var t = this.a,
                  e = this.b,
                  n = this.c,
                  i = this.d,
                  r = this.e,
                  s = this.f,
                  o = t * i - e * n || 1e-10;
                return sc(
                  this,
                  i / o,
                  -e / o,
                  -n / o,
                  t / o,
                  (n * s - i * r) / o,
                  -(t * s - e * r) / o
                );
              }),
              (e.multiply = function (t) {
                var e = this.a,
                  n = this.b,
                  i = this.c,
                  r = this.d,
                  s = this.e,
                  o = this.f,
                  a = t.a,
                  l = t.c,
                  u = t.b,
                  h = t.d,
                  c = t.e,
                  p = t.f;
                return sc(
                  this,
                  a * e + u * i,
                  a * n + u * r,
                  l * e + h * i,
                  l * n + h * r,
                  s + c * e + p * i,
                  o + c * n + p * r
                );
              }),
              (e.clone = function () {
                return new t(this.a, this.b, this.c, this.d, this.e, this.f);
              }),
              (e.equals = function (t) {
                var e = this.a,
                  n = this.b,
                  i = this.c,
                  r = this.d,
                  s = this.e,
                  o = this.f;
                return (
                  e === t.a &&
                  n === t.b &&
                  i === t.c &&
                  r === t.d &&
                  s === t.e &&
                  o === t.f
                );
              }),
              (e.apply = function (t, e) {
                void 0 === e && (e = {});
                var n = t.x,
                  i = t.y,
                  r = this.a,
                  s = this.b,
                  o = this.c,
                  a = this.d,
                  l = this.e,
                  u = this.f;
                return (
                  (e.x = n * r + i * o + l || 0),
                  (e.y = n * s + i * a + u || 0),
                  e
                );
              }),
              t
            );
          })();
        function sf(t, e, n, i) {
          if (!t || !t.parentNode || (rJ || st(t)).documentElement === t)
            return new sp();
          var r = se(t),
            s = so(t) ? sn : si,
            o = sh(t, n),
            a = s[0].getBoundingClientRect(),
            l = s[1].getBoundingClientRect(),
            u = s[2].getBoundingClientRect(),
            h = o.parentNode,
            c =
              !i &&
              (function t(e) {
                return (
                  "fixed" === r1.getComputedStyle(e).position ||
                  ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
                );
              })(t),
            p = new sp(
              (l.left - a.left) / 100,
              (l.top - a.top) / 100,
              (u.left - a.left) / 100,
              (u.top - a.top) / 100,
              a.left + (c ? 0 : ss()),
              a.top + (c ? 0 : sr())
            );
          if ((h.removeChild(o), r))
            for (a = r.length; a--; )
              ((l = r[a]).scaleX = l.scaleY = 0), l.renderTransform(1, l);
          return e ? p.inverse() : p;
        }
        var sd,
          sg,
          sm,
          sv,
          s_,
          sD,
          sy,
          sx,
          sb,
          sw,
          sC,
          sE,
          sT,
          sP,
          sS,
          sF,
          sM,
          sk,
          sA,
          sO,
          sB,
          sL,
          sR = 0,
          sN = function () {
            return !0;
          },
          sz = function () {
            return (
              sd || (sN() && (sd = window.gsap) && sd.registerPlugin && sd)
            );
          },
          sI = function (t) {
            return "function" == typeof t;
          },
          sX = function (t) {
            return "object" == typeof t;
          },
          sY = function (t) {
            return void 0 === t;
          },
          sH = function () {
            return !1;
          },
          sV = "transform",
          sj = "transformOrigin",
          sW = function (t) {
            return Math.round(1e4 * t) / 1e4;
          },
          sq = Array.isArray,
          sG = function (t, e) {
            var n = sm.createElementNS
              ? sm.createElementNS(
                  (e || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                  ),
                  t
                )
              : sm.createElement(t);
            return n.style ? n : sm.createElement(t);
          },
          sU = 180 / Math.PI,
          sK = new sp(),
          sZ =
            Date.now ||
            function () {
              return new Date().getTime();
            },
          sQ = [],
          s$ = {},
          sJ = 0,
          s1 = /^(?:a|input|textarea|button|select)$/i,
          s0 = 0,
          s2 = {},
          s3 = {},
          s5 = function (t, e) {
            var n,
              i = {};
            for (n in t) i[n] = e ? t[n] * e : t[n];
            return i;
          },
          s4 = function (t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t;
          },
          s6 = function t(e, n) {
            for (var i, r = e.length; r--; )
              n
                ? (e[r].style.touchAction = n)
                : e[r].style.removeProperty("touch-action"),
                (i = e[r].children) && i.length && t(i, n);
          },
          s8 = function () {
            return sQ.forEach(function (t) {
              return t();
            });
          },
          s7 = function (t) {
            sQ.push(t), 1 === sQ.length && sd.ticker.add(s8);
          },
          s9 = function () {
            return !sQ.length && sd.ticker.remove(s8);
          },
          ot = function (t) {
            for (var e = sQ.length; e--; ) sQ[e] === t && sQ.splice(e, 1);
            sd.to(s9, {
              overwrite: !0,
              delay: 15,
              duration: 0,
              onComplete: s9,
              data: "_draggable",
            });
          },
          oe = function (t, e, n, i) {
            if (t.addEventListener) {
              var r = sT[e];
              (i = i || (sC ? { passive: !1 } : null)),
                t.addEventListener(r || e, n, i),
                r && e !== r && t.addEventListener(e, n, i);
            }
          },
          on = function (t, e, n, i) {
            if (t.removeEventListener) {
              var r = sT[e];
              t.removeEventListener(r || e, n, i),
                r && e !== r && t.removeEventListener(e, n, i);
            }
          },
          oi = function (t) {
            t.preventDefault && t.preventDefault(),
              t.preventManipulation && t.preventManipulation();
          },
          or = function (t, e) {
            for (var n = t.length; n--; ) if (t[n].identifier === e) return !0;
          },
          os = function t(e) {
            (sP = e.touches && sR < e.touches.length),
              on(e.target, "touchend", t);
          },
          oo = function (t) {
            (sP = t.touches && sR < t.touches.length),
              oe(t.target, "touchend", os);
          },
          oa = function (t) {
            return (
              sg.pageYOffset ||
              t.scrollTop ||
              t.documentElement.scrollTop ||
              t.body.scrollTop ||
              0
            );
          },
          ol = function (t) {
            return (
              sg.pageXOffset ||
              t.scrollLeft ||
              t.documentElement.scrollLeft ||
              t.body.scrollLeft ||
              0
            );
          },
          ou = function t(e, n) {
            oe(e, "scroll", n), oc(e.parentNode) || t(e.parentNode, n);
          },
          oh = function t(e, n) {
            on(e, "scroll", n), oc(e.parentNode) || t(e.parentNode, n);
          },
          oc = function (t) {
            return !!(
              !t ||
              t === sv ||
              9 === t.nodeType ||
              t === sm.body ||
              t === sg ||
              !t.nodeType ||
              !t.parentNode
            );
          },
          op = function (t, e) {
            var n = "x" === e ? "Width" : "Height",
              i = "scroll" + n,
              r = "client" + n;
            return Math.max(
              0,
              oc(t)
                ? Math.max(sv[i], s_[i]) - (sg["inner" + n] || sv[r] || s_[r])
                : t[i] - t[r]
            );
          },
          of = function t(e, n) {
            var i = op(e, "x"),
              r = op(e, "y");
            oc(e) ? (e = s3) : t(e.parentNode, n),
              (e._gsMaxScrollX = i),
              (e._gsMaxScrollY = r),
              n ||
                ((e._gsScrollX = e.scrollLeft || 0),
                (e._gsScrollY = e.scrollTop || 0));
          },
          od = function (t, e, n) {
            var i = t.style;
            i &&
              (sY(i[e]) && (e = sb(e, t) || e),
              null == n
                ? i.removeProperty &&
                  i.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase())
                : (i[e] = n));
          },
          og = function (t) {
            return sg.getComputedStyle(
              t instanceof Element
                ? t
                : t.host || (t.parentNode || {}).host || t
            );
          },
          om = {},
          ov = function (t) {
            if (t === sg)
              return (
                (om.left = om.top = 0),
                (om.width = om.right =
                  sv.clientWidth || t.innerWidth || s_.clientWidth || 0),
                (om.height = om.bottom =
                  (t.innerHeight || 0) - 20 < sv.clientHeight
                    ? sv.clientHeight
                    : t.innerHeight || s_.clientHeight || 0),
                om
              );
            var e = t.ownerDocument || sm,
              n = sY(t.pageX)
                ? t.nodeType || sY(t.left) || sY(t.top)
                  ? sw(t)[0].getBoundingClientRect()
                  : t
                : {
                    left: t.pageX - ol(e),
                    top: t.pageY - oa(e),
                    right: t.pageX - ol(e) + 1,
                    bottom: t.pageY - oa(e) + 1,
                  };
            return (
              sY(n.right) && !sY(n.width)
                ? ((n.right = n.left + n.width), (n.bottom = n.top + n.height))
                : sY(n.width) &&
                  (n = {
                    width: n.right - n.left,
                    height: n.bottom - n.top,
                    right: n.right,
                    left: n.left,
                    bottom: n.bottom,
                    top: n.top,
                  }),
              n
            );
          },
          o_ = function (t, e, n) {
            var i,
              r = t.vars,
              s = r[n],
              o = t._listeners[e];
            return (
              sI(s) &&
                (i = s.apply(
                  r.callbackScope || t,
                  r[n + "Params"] || [t.pointerEvent]
                )),
              o && !1 === t.dispatchEvent(e) && (i = !1),
              i
            );
          },
          oD = function (t, e) {
            var n,
              i,
              r,
              s = sw(t)[0];
            return s.nodeType || s === sg
              ? ox(s, e)
              : sY(t.left)
              ? {
                  left: (i = t.min || t.minX || t.minRotation || 0),
                  top: (n = t.min || t.minY || 0),
                  width: (t.max || t.maxX || t.maxRotation || 0) - i,
                  height: (t.max || t.maxY || 0) - n,
                }
              : ((r = { x: 0, y: 0 }),
                {
                  left: t.left - r.x,
                  top: t.top - r.y,
                  width: t.width,
                  height: t.height,
                });
          },
          oy = {},
          ox = function (t, e) {
            e = sw(e)[0];
            var n,
              i,
              r,
              s,
              o,
              a,
              l,
              u,
              h,
              c,
              p,
              f,
              d,
              g = t.getBBox && t.ownerSVGElement,
              m = t.ownerDocument || sm;
            if (t === sg)
              (r = oa(m)),
                (i =
                  (n = ol(m)) +
                  (m.documentElement.clientWidth ||
                    t.innerWidth ||
                    m.body.clientWidth ||
                    0)),
                (s =
                  r +
                  ((t.innerHeight || 0) - 20 < m.documentElement.clientHeight
                    ? m.documentElement.clientHeight
                    : t.innerHeight || m.body.clientHeight || 0));
            else {
              if (e === sg || sY(e)) return t.getBoundingClientRect();
              (n = r = 0),
                g
                  ? ((p = (c = t.getBBox()).width), (f = c.height))
                  : (t.viewBox &&
                      (c = t.viewBox.baseVal) &&
                      ((n = c.x || 0),
                      (r = c.y || 0),
                      (p = c.width),
                      (f = c.height)),
                    p ||
                      ((c = "border-box" === (d = og(t)).boxSizing),
                      (p =
                        (parseFloat(d.width) || t.clientWidth || 0) +
                        (c
                          ? 0
                          : parseFloat(d.borderLeftWidth) +
                            parseFloat(d.borderRightWidth))),
                      (f =
                        (parseFloat(d.height) || t.clientHeight || 0) +
                        (c
                          ? 0
                          : parseFloat(d.borderTopWidth) +
                            parseFloat(d.borderBottomWidth))))),
                (i = p),
                (s = f);
            }
            return t === e
              ? { left: n, top: r, width: i - n, height: s - r }
              : ((a = (o = sf(e, !0).multiply(sf(t))).apply({ x: n, y: r })),
                (l = o.apply({ x: i, y: r })),
                (u = o.apply({ x: i, y: s })),
                (h = o.apply({ x: n, y: s })),
                {
                  left: (n = Math.min(a.x, l.x, u.x, h.x)),
                  top: (r = Math.min(a.y, l.y, u.y, h.y)),
                  width: Math.max(a.x, l.x, u.x, h.x) - n,
                  height: Math.max(a.y, l.y, u.y, h.y) - r,
                });
          },
          ob = function (t, e, n, i, r, s) {
            var o,
              a,
              l,
              u = {};
            if (e) {
              if (1 !== r && e instanceof Array) {
                if (((u.end = o = []), (l = e.length), sX(e[0])))
                  for (a = 0; a < l; a++) o[a] = s5(e[a], r);
                else for (a = 0; a < l; a++) o[a] = e[a] * r;
                (n += 1.1), (i -= 1.1);
              } else
                sI(e)
                  ? (u.end = function (n) {
                      var i,
                        s,
                        o = e.call(t, n);
                      if (1 !== r) {
                        if (sX(o)) {
                          for (s in ((i = {}), o)) i[s] = o[s] * r;
                          o = i;
                        } else o *= r;
                      }
                      return o;
                    })
                  : (u.end = e);
            }
            return (
              (n || 0 === n) && (u.max = n),
              (i || 0 === i) && (u.min = i),
              s && (u.velocity = 0),
              u
            );
          },
          ow = function t(e) {
            var n;
            return (
              !!e &&
              !!e.getAttribute &&
              e !== s_ &&
              (!!(
                "true" === (n = e.getAttribute("data-clickable")) ||
                ("false" !== n &&
                  (s1.test(e.nodeName + "") ||
                    "true" === e.getAttribute("contentEditable")))
              ) ||
                t(e.parentNode))
            );
          },
          oC = function (t, e) {
            for (var n, i = t.length; i--; )
              ((n = t[i]).ondragstart = n.onselectstart = e ? null : sH),
                sd.set(n, { lazy: !0, userSelect: e ? "text" : "none" });
          },
          oE = function (t, e) {
            (t = sd.utils.toArray(t)[0]), (e = e || {});
            var n,
              i,
              r,
              s,
              o,
              a,
              l = document.createElement("div"),
              u = l.style,
              h = t.firstChild,
              c = 0,
              p = 0,
              f = t.scrollTop,
              d = t.scrollLeft,
              g = t.scrollWidth,
              m = t.scrollHeight,
              v = 0,
              _ = 0,
              D = 0;
            sB && !1 !== e.force3D
              ? ((o = "translate3d("), (a = "px,0px)"))
              : sV && ((o = "translate("), (a = "px)")),
              (this.scrollTop = function (t, e) {
                if (!arguments.length) return -this.top();
                this.top(-t, e);
              }),
              (this.scrollLeft = function (t, e) {
                if (!arguments.length) return -this.left();
                this.left(-t, e);
              }),
              (this.left = function (n, i) {
                if (!arguments.length) return -(t.scrollLeft + p);
                var r = t.scrollLeft - d,
                  s = p;
                if ((r > 2 || r < -2) && !i) {
                  (d = t.scrollLeft),
                    sd.killTweensOf(this, { left: 1, scrollLeft: 1 }),
                    this.left(-d),
                    e.onKill && e.onKill();
                  return;
                }
                (n = -n) < 0
                  ? ((p = (n - 0.5) | 0), (n = 0))
                  : n > _
                  ? ((p = (n - _) | 0), (n = _))
                  : (p = 0),
                  (p || s) &&
                    (this._skip || (u[sV] = o + -p + "px," + -c + a),
                    p + v >= 0 && (u.paddingRight = p + v + "px")),
                  (t.scrollLeft = 0 | n),
                  (d = t.scrollLeft);
              }),
              (this.top = function (n, i) {
                if (!arguments.length) return -(t.scrollTop + c);
                var r = t.scrollTop - f,
                  s = c;
                if ((r > 2 || r < -2) && !i) {
                  (f = t.scrollTop),
                    sd.killTweensOf(this, { top: 1, scrollTop: 1 }),
                    this.top(-f),
                    e.onKill && e.onKill();
                  return;
                }
                (n = -n) < 0
                  ? ((c = (n - 0.5) | 0), (n = 0))
                  : n > D
                  ? ((c = (n - D) | 0), (n = D))
                  : (c = 0),
                  (c || s) && !this._skip && (u[sV] = o + -p + "px," + -c + a),
                  (t.scrollTop = 0 | n),
                  (f = t.scrollTop);
              }),
              (this.maxScrollTop = function () {
                return D;
              }),
              (this.maxScrollLeft = function () {
                return _;
              }),
              (this.disable = function () {
                for (h = l.firstChild; h; )
                  (s = h.nextSibling), t.appendChild(h), (h = s);
                t === l.parentNode && t.removeChild(l);
              }),
              (this.enable = function () {
                if ((h = t.firstChild) !== l) {
                  for (; h; ) (s = h.nextSibling), l.appendChild(h), (h = s);
                  t.appendChild(l), this.calibrate();
                }
              }),
              (this.calibrate = function (e) {
                var s,
                  o,
                  a,
                  h = t.clientWidth === n;
                (f = t.scrollTop),
                  (d = t.scrollLeft),
                  (!h ||
                    t.clientHeight !== i ||
                    l.offsetHeight !== r ||
                    g !== t.scrollWidth ||
                    m !== t.scrollHeight ||
                    e) &&
                    ((c || p) &&
                      ((o = this.left()),
                      (a = this.top()),
                      this.left(-t.scrollLeft),
                      this.top(-t.scrollTop)),
                    (s = og(t)),
                    (!h || e) &&
                      ((u.display = "block"),
                      (u.width = "auto"),
                      (u.paddingRight = "0px"),
                      (v = Math.max(0, t.scrollWidth - t.clientWidth)) &&
                        (v +=
                          parseFloat(s.paddingLeft) +
                          (sL ? parseFloat(s.paddingRight) : 0))),
                    (u.display = "inline-block"),
                    (u.position = "relative"),
                    (u.overflow = "visible"),
                    (u.verticalAlign = "top"),
                    (u.boxSizing = "content-box"),
                    (u.width = "100%"),
                    (u.paddingRight = v + "px"),
                    sL && (u.paddingBottom = s.paddingBottom),
                    (n = t.clientWidth),
                    (i = t.clientHeight),
                    (g = t.scrollWidth),
                    (m = t.scrollHeight),
                    (_ = t.scrollWidth - n),
                    (D = t.scrollHeight - i),
                    (r = l.offsetHeight),
                    (u.display = "block"),
                    (o || a) && (this.left(o), this.top(a)));
              }),
              (this.content = l),
              (this.element = t),
              (this._skip = !1),
              this.enable();
          },
          oT = function (t) {
            if (sN() && document.body) {
              var e,
                n,
                i,
                r,
                s,
                o = window && window.navigator;
              (sg = window),
                (sv = (sm = document).documentElement),
                (s_ = sm.body),
                (sD = sG("div")),
                (sk = !!window.PointerEvent),
                ((sy = sG("div")).style.cssText =
                  "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
                (sM = "grab" === sy.style.cursor ? "grab" : "move"),
                (sS = o && -1 !== o.userAgent.toLowerCase().indexOf("android")),
                (sE =
                  ("ontouchstart" in sv && "orientation" in sg) ||
                  (o && (o.MaxTouchPoints > 0 || o.msMaxTouchPoints > 0))),
                (n = sG("div")),
                (r = (i = sG("div")).style),
                (s = s_),
                (r.display = "inline-block"),
                (r.position = "relative"),
                (n.style.cssText =
                  "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
                n.appendChild(i),
                s.appendChild(n),
                (e = i.offsetHeight + 18 > n.scrollHeight),
                s.removeChild(n),
                (sL = e),
                (sT = (function (t) {
                  for (
                    var e = t.split(","),
                      n = (
                        ("onpointerdown" in sD)
                          ? "pointerdown,pointermove,pointerup,pointercancel"
                          : ("onmspointerdown" in sD)
                          ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                          : t
                      ).split(","),
                      i = {},
                      r = 4;
                    --r > -1;

                  )
                    (i[e[r]] = n[r]), (i[n[r]] = e[r]);
                  try {
                    sv.addEventListener(
                      "test",
                      null,
                      Object.defineProperty({}, "passive", {
                        get: function () {
                          sC = 1;
                        },
                      })
                    );
                  } catch (t) {}
                  return i;
                })("touchstart,touchmove,touchend,touchcancel")),
                oe(sm, "touchcancel", sH),
                oe(sg, "touchmove", sH),
                s_ && s_.addEventListener("touchstart", sH),
                oe(sm, "contextmenu", function () {
                  for (var t in s$) s$[t].isPressed && s$[t].endDrag();
                }),
                (sd = sx = sz());
            }
            sd
              ? ((sF = sd.plugins.inertia),
                (sA = sd.core.context || function () {}),
                (sV = (sb = sd.utils.checkPrefix)(sV)),
                (sj = sb(sj)),
                (sw = sd.utils.toArray),
                (sO = sd.core.getStyleSaver),
                (sB = !!sb("perspective")))
              : t && console.warn("Please gsap.registerPlugin(Draggable)");
          },
          oP = (function (t) {
            function e(n, i) {
              (s = t.call(this) || this),
                sx || oT(1),
                (n = sw(n)[0]),
                (s.styles = sO && sO(n, "transform,left,top")),
                sF || (sF = sd.plugins.inertia),
                (s.vars = i = s5(i || {})),
                (s.target = n),
                (s.x = s.y = s.rotation = 0),
                (s.dragResistance = parseFloat(i.dragResistance) || 0),
                (s.edgeResistance = isNaN(i.edgeResistance)
                  ? 1
                  : parseFloat(i.edgeResistance) || 0),
                (s.lockAxis = i.lockAxis),
                (s.autoScroll = i.autoScroll || 0),
                (s.lockedAxis = null),
                (s.allowEventDefault = !!i.allowEventDefault),
                sd.getProperty(n, "x");
              var s,
                o,
                a,
                l,
                u,
                h,
                c,
                p,
                f,
                d,
                g,
                m,
                v,
                _,
                D,
                y,
                x,
                b,
                w,
                C,
                E,
                T,
                P,
                S,
                F,
                M,
                k,
                A,
                O,
                B,
                L,
                R,
                N,
                z,
                I = (i.type || "x,y").toLowerCase(),
                X = ~I.indexOf("x") || ~I.indexOf("y"),
                Y = -1 !== I.indexOf("rotation"),
                H = Y ? "rotation" : X ? "x" : "left",
                V = X ? "y" : "top",
                j = !!(~I.indexOf("x") || ~I.indexOf("left") || "scroll" === I),
                W = !!(~I.indexOf("y") || ~I.indexOf("top") || "scroll" === I),
                q = i.minimumMovement || 2,
                G = r(s),
                U = sw(i.trigger || i.handle || n),
                K = {},
                Z = 0,
                Q = !1,
                $ = i.autoScrollMarginTop || 40,
                J = i.autoScrollMarginRight || 40,
                tt = i.autoScrollMarginBottom || 40,
                te = i.autoScrollMarginLeft || 40,
                tn = i.clickableTest || ow,
                ti = 0,
                tr = n._gsap || sd.core.getCache(n),
                ts = (function t(e) {
                  return (
                    "fixed" === og(e).position ||
                    ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
                  );
                })(n),
                to = function (t, e) {
                  return parseFloat(tr.get(n, t, e));
                },
                ta = n.ownerDocument || sm,
                tl = function (t) {
                  return (
                    oi(t),
                    t.stopImmediatePropagation && t.stopImmediatePropagation(),
                    !1
                  );
                },
                tu = function t(e) {
                  if (G.autoScroll && G.isDragging && (Q || b)) {
                    var i,
                      r,
                      s,
                      o,
                      l,
                      u,
                      h,
                      c,
                      p = n,
                      d = 15 * G.autoScroll;
                    for (
                      Q = !1,
                        s3.scrollTop =
                          null != sg.pageYOffset
                            ? sg.pageYOffset
                            : null != ta.documentElement.scrollTop
                            ? ta.documentElement.scrollTop
                            : ta.body.scrollTop,
                        s3.scrollLeft =
                          null != sg.pageXOffset
                            ? sg.pageXOffset
                            : null != ta.documentElement.scrollLeft
                            ? ta.documentElement.scrollLeft
                            : ta.body.scrollLeft,
                        o = G.pointerX - s3.scrollLeft,
                        l = G.pointerY - s3.scrollTop;
                      p && !r;

                    )
                      (i = (r = oc(p.parentNode)) ? s3 : p.parentNode),
                        (s = r
                          ? {
                              bottom: Math.max(
                                sv.clientHeight,
                                sg.innerHeight || 0
                              ),
                              right: Math.max(
                                sv.clientWidth,
                                sg.innerWidth || 0
                              ),
                              left: 0,
                              top: 0,
                            }
                          : i.getBoundingClientRect()),
                        (u = h = 0),
                        W &&
                          ((c = i._gsMaxScrollY - i.scrollTop) < 0
                            ? (h = c)
                            : l > s.bottom - tt && c
                            ? ((Q = !0),
                              (h = Math.min(
                                c,
                                (d * (1 - Math.max(0, s.bottom - l) / tt)) | 0
                              )))
                            : l < s.top + $ &&
                              i.scrollTop &&
                              ((Q = !0),
                              (h = -Math.min(
                                i.scrollTop,
                                (d * (1 - Math.max(0, l - s.top) / $)) | 0
                              ))),
                          h && (i.scrollTop += h)),
                        j &&
                          ((c = i._gsMaxScrollX - i.scrollLeft) < 0
                            ? (u = c)
                            : o > s.right - J && c
                            ? ((Q = !0),
                              (u = Math.min(
                                c,
                                (d * (1 - Math.max(0, s.right - o) / J)) | 0
                              )))
                            : o < s.left + te &&
                              i.scrollLeft &&
                              ((Q = !0),
                              (u = -Math.min(
                                i.scrollLeft,
                                (d * (1 - Math.max(0, o - s.left) / te)) | 0
                              ))),
                          u && (i.scrollLeft += u)),
                        r &&
                          (u || h) &&
                          (sg.scrollTo(i.scrollLeft, i.scrollTop),
                          tb(G.pointerX + u, G.pointerY + h)),
                        (p = i);
                  }
                  if (b) {
                    var g = G.x,
                      m = G.y;
                    Y
                      ? ((G.deltaX = g - parseFloat(tr.rotation)),
                        (G.rotation = g),
                        (tr.rotation = g + "deg"),
                        tr.renderTransform(1, tr))
                      : a
                      ? (W && ((G.deltaY = m - a.top()), a.top(m)),
                        j && ((G.deltaX = g - a.left()), a.left(g)))
                      : X
                      ? (W &&
                          ((G.deltaY = m - parseFloat(tr.y)),
                          (tr.y = m + "px")),
                        j &&
                          ((G.deltaX = g - parseFloat(tr.x)),
                          (tr.x = g + "px")),
                        tr.renderTransform(1, tr))
                      : (W &&
                          ((G.deltaY = m - parseFloat(n.style.top || 0)),
                          (n.style.top = m + "px")),
                        j &&
                          ((G.deltaX = g - parseFloat(n.style.left || 0)),
                          (n.style.left = g + "px"))),
                      !f ||
                        e ||
                        O ||
                        ((O = !0),
                        !1 === o_(G, "drag", "onDrag") &&
                          (j && (G.x -= G.deltaX),
                          W && (G.y -= G.deltaY),
                          t(!0)),
                        (O = !1));
                  }
                  b = !1;
                },
                th = function (t, e) {
                  var i,
                    r,
                    s = G.x,
                    o = G.y;
                  n._gsap || (tr = sd.core.getCache(n)),
                    tr.uncache && sd.getProperty(n, "x"),
                    X
                      ? ((G.x = parseFloat(tr.x)), (G.y = parseFloat(tr.y)))
                      : Y
                      ? (G.x = G.rotation = parseFloat(tr.rotation))
                      : a
                      ? ((G.y = a.top()), (G.x = a.left()))
                      : ((G.y =
                          parseFloat(n.style.top || ((r = og(n)) && r.top)) ||
                          0),
                        (G.x =
                          parseFloat(n.style.left || (r || {}).left) || 0)),
                    (C || E || T) &&
                      !e &&
                      (G.isDragging || G.isThrowing) &&
                      (T &&
                        ((s2.x = G.x),
                        (s2.y = G.y),
                        (i = T(s2)).x !== G.x && ((G.x = i.x), (b = !0)),
                        i.y !== G.y && ((G.y = i.y), (b = !0))),
                      C &&
                        (i = C(G.x)) !== G.x &&
                        ((G.x = i), Y && (G.rotation = i), (b = !0)),
                      E && ((i = E(G.y)) !== G.y && (G.y = i), (b = !0))),
                    b && tu(!0),
                    t ||
                      ((G.deltaX = G.x - s),
                      (G.deltaY = G.y - o),
                      o_(G, "throwupdate", "onThrowUpdate"));
                },
                tc = function (t, e, n, i) {
                  return (null == e && (e = -1e20),
                  null == n && (n = 1e20),
                  sI(t))
                    ? function (r) {
                        var s = G.isPressed ? 1 - G.edgeResistance : 1;
                        return (
                          t.call(
                            G,
                            (r > n
                              ? n + (r - n) * s
                              : r < e
                              ? e + (r - e) * s
                              : r) * i
                          ) * i
                        );
                      }
                    : sq(t)
                    ? function (i) {
                        for (
                          var r, s, o = t.length, a = 0, l = 1e20;
                          --o > -1;

                        )
                          (s = (r = t[o]) - i) < 0 && (s = -s),
                            s < l && r >= e && r <= n && ((a = o), (l = s));
                        return t[a];
                      }
                    : isNaN(t)
                    ? function (t) {
                        return t;
                      }
                    : function () {
                        return t * i;
                      };
                },
                tp = function () {
                  var t, e, r, s, o, l, u, h, c, f, d;
                  (p = !1),
                    a
                      ? (a.calibrate(),
                        (G.minX = m = -a.maxScrollLeft()),
                        (G.minY = _ = -a.maxScrollTop()),
                        (G.maxX = g = G.maxY = v = 0),
                        (p = !0))
                      : i.bounds &&
                        ((t = oD(i.bounds, n.parentNode)),
                        Y
                          ? ((G.minX = m = t.left),
                            (G.maxX = g = t.left + t.width),
                            (G.minY = _ = G.maxY = v = 0))
                          : sY(i.bounds.maxX) && sY(i.bounds.maxY)
                          ? ((e = oD(n, n.parentNode)),
                            (G.minX = m =
                              Math.round(to(H, "px") + t.left - e.left)),
                            (G.minY = _ =
                              Math.round(to(V, "px") + t.top - e.top)),
                            (G.maxX = g = Math.round(m + (t.width - e.width))),
                            (G.maxY = v =
                              Math.round(_ + (t.height - e.height))))
                          : ((t = i.bounds),
                            (G.minX = m = t.minX),
                            (G.minY = _ = t.minY),
                            (G.maxX = g = t.maxX),
                            (G.maxY = v = t.maxY)),
                        m > g && ((G.minX = g), (G.maxX = g = m), (m = G.minX)),
                        _ > v && ((G.minY = v), (G.maxY = v = _), (_ = G.minY)),
                        Y && ((G.minRotation = m), (G.maxRotation = g)),
                        (p = !0)),
                    i.liveSnap &&
                      (((s =
                        sq(
                          (r = !0 === i.liveSnap ? i.snap || {} : i.liveSnap)
                        ) || sI(r)),
                      Y)
                        ? ((C = tc(s ? r : r.rotation, m, g, 1)), (E = null))
                        : r.points
                        ? ((o = s ? r : r.points),
                          (l = m),
                          (u = g),
                          (h = _),
                          (c = v),
                          (f = r.radius),
                          (d = a ? -1 : 1),
                          (f = f && f < 1e20 ? f * f : 1e20),
                          (T = sI(o)
                            ? function (t) {
                                var e,
                                  n,
                                  i,
                                  r = G.isPressed ? 1 - G.edgeResistance : 1,
                                  s = t.x,
                                  a = t.y;
                                return (
                                  (t.x = s =
                                    s > u
                                      ? u + (s - u) * r
                                      : s < l
                                      ? l + (s - l) * r
                                      : s),
                                  (t.y = a =
                                    a > c
                                      ? c + (a - c) * r
                                      : a < h
                                      ? h + (a - h) * r
                                      : a),
                                  (e = o.call(G, t)) !== t &&
                                    ((t.x = e.x), (t.y = e.y)),
                                  1 !== d && ((t.x *= d), (t.y *= d)),
                                  f < 1e20 &&
                                    (n = t.x - s) * n + (i = t.y - a) * i > f &&
                                    ((t.x = s), (t.y = a)),
                                  t
                                );
                              }
                            : sq(o)
                            ? function (t) {
                                for (
                                  var e, n, i, r, s = o.length, a = 0, l = 1e20;
                                  --s > -1;

                                )
                                  (r =
                                    (e = (i = o[s]).x - t.x) * e +
                                    (n = i.y - t.y) * n) < l &&
                                    ((a = s), (l = r));
                                return l <= f ? o[a] : t;
                              }
                            : function (t) {
                                return t;
                              }))
                        : (j &&
                            (C = tc(
                              s ? r : r.x || r.left || r.scrollLeft,
                              m,
                              g,
                              a ? -1 : 1
                            )),
                          W &&
                            (E = tc(
                              s ? r : r.y || r.top || r.scrollTop,
                              _,
                              v,
                              a ? -1 : 1
                            ))));
                },
                tf = function () {
                  (G.isThrowing = !1),
                    o_(G, "throwcomplete", "onThrowComplete");
                },
                td = function () {
                  G.isThrowing = !1;
                },
                tg = function (t, e) {
                  var r, s, o, l;
                  t && sF
                    ? (!0 === t &&
                        ((s = sq((r = i.snap || i.liveSnap || {})) || sI(r)),
                        (t = {
                          resistance:
                            (i.throwResistance || i.resistance || 1e3) /
                            (Y ? 10 : 1),
                        }),
                        Y
                          ? (t.rotation = ob(G, s ? r : r.rotation, g, m, 1, e))
                          : (j &&
                              (t[H] = ob(
                                G,
                                s ? r : r.points || r.x || r.left,
                                g,
                                m,
                                a ? -1 : 1,
                                e || "x" === G.lockedAxis
                              )),
                            W &&
                              (t[V] = ob(
                                G,
                                s ? r : r.points || r.y || r.top,
                                v,
                                _,
                                a ? -1 : 1,
                                e || "y" === G.lockedAxis
                              )),
                            (r.points || (sq(r) && sX(r[0]))) &&
                              ((t.linkedProps = H + "," + V),
                              (t.radius = r.radius)))),
                      (G.isThrowing = !0),
                      (l = isNaN(i.overshootTolerance)
                        ? 1 === i.edgeResistance
                          ? 0
                          : 1 - G.edgeResistance + 0.2
                        : i.overshootTolerance),
                      t.duration ||
                        (t.duration = {
                          max: Math.max(
                            i.minDuration || 0,
                            "maxDuration" in i ? i.maxDuration : 2
                          ),
                          min: isNaN(i.minDuration)
                            ? 0 === l || (sX(t) && t.resistance > 1e3)
                              ? 0
                              : 0.5
                            : i.minDuration,
                          overshoot: l,
                        }),
                      (G.tween = o =
                        sd.to(a || n, {
                          inertia: t,
                          data: "_draggable",
                          inherit: !1,
                          onComplete: tf,
                          onInterrupt: td,
                          onUpdate: i.fastMode ? o_ : th,
                          onUpdateParams: i.fastMode
                            ? [G, "onthrowupdate", "onThrowUpdate"]
                            : r && r.radius
                            ? [!1, !0]
                            : [],
                        })),
                      !i.fastMode &&
                        (a && (a._skip = !0),
                        o.render(1e9, !0, !0),
                        th(!0, !0),
                        (G.endX = G.x),
                        (G.endY = G.y),
                        Y && (G.endRotation = G.x),
                        o.play(0),
                        th(!0, !0),
                        a && (a._skip = !1)))
                    : p && G.applyBounds();
                },
                tm = function (t) {
                  var e,
                    i = F;
                  (F = sf(n.parentNode, !0)),
                    t &&
                      G.isPressed &&
                      !F.equals(i || new sp()) &&
                      ((e = i.inverse().apply({ x: l, y: u })),
                      F.apply(e, e),
                      (l = e.x),
                      (u = e.y)),
                    F.equals(sK) && (F = null);
                },
                tv = function () {
                  var t,
                    e,
                    i,
                    r = 1 - G.edgeResistance,
                    s = ts ? ol(ta) : 0,
                    o = ts ? oa(ta) : 0;
                  X &&
                    ((tr.x = to(H, "px") + "px"),
                    (tr.y = to(V, "px") + "px"),
                    tr.renderTransform()),
                    tm(!1),
                    (oy.x = G.pointerX - s),
                    (oy.y = G.pointerY - o),
                    F && F.apply(oy, oy),
                    (l = oy.x),
                    (u = oy.y),
                    b && (tb(G.pointerX, G.pointerY), tu(!0)),
                    (N = sf(n)),
                    a
                      ? (tp(), (c = a.top()), (h = a.left()))
                      : (t_() ? (th(!0, !0), tp()) : G.applyBounds(),
                        Y
                          ? ((t = n.ownerSVGElement
                              ? [
                                  tr.xOrigin - n.getBBox().x,
                                  tr.yOrigin - n.getBBox().y,
                                ]
                              : (og(n)[sj] || "0 0").split(" ")),
                            (x = G.rotationOrigin =
                              sf(n).apply({
                                x: parseFloat(t[0]) || 0,
                                y: parseFloat(t[1]) || 0,
                              })),
                            th(!0, !0),
                            (e = G.pointerX - x.x - s),
                            (i = x.y - G.pointerY + o),
                            (h = G.x),
                            (c = G.y = Math.atan2(i, e) * sU))
                          : ((c = to(V, "px")), (h = to(H, "px")))),
                    p &&
                      r &&
                      (h > g
                        ? (h = g + (h - g) / r)
                        : h < m && (h = m - (m - h) / r),
                      !Y &&
                        (c > v
                          ? (c = v + (c - v) / r)
                          : c < _ && (c = _ - (_ - c) / r))),
                    (G.startX = h = sW(h)),
                    (G.startY = c = sW(c));
                },
                t_ = function () {
                  return G.tween && G.tween.isActive();
                },
                tD = function () {
                  !sy.parentNode ||
                    t_() ||
                    G.isDragging ||
                    sy.parentNode.removeChild(sy);
                },
                ty = function (t, r) {
                  var s;
                  if (
                    !o ||
                    G.isPressed ||
                    !t ||
                    (("mousedown" === t.type || "pointerdown" === t.type) &&
                      !r &&
                      sZ() - ti < 30 &&
                      sT[G.pointerEvent.type])
                  ) {
                    R && t && o && oi(t);
                    return;
                  }
                  if (
                    ((M = t_()),
                    (z = !1),
                    (G.pointerEvent = t),
                    sT[t.type]
                      ? (oe(
                          (S = ~t.type.indexOf("touch")
                            ? t.currentTarget || t.target
                            : ta),
                          "touchend",
                          tw
                        ),
                        oe(S, "touchmove", tx),
                        oe(S, "touchcancel", tw),
                        oe(ta, "touchstart", oo))
                      : ((S = null), oe(ta, "mousemove", tx)),
                    (A = null),
                    (!sk || !S) &&
                      (oe(ta, "mouseup", tw),
                      t && t.target && oe(t.target, "mouseup", tw)),
                    (P = tn.call(G, t.target) && !1 === i.dragClickables && !r))
                  ) {
                    oe(t.target, "change", tw),
                      o_(G, "pressInit", "onPressInit"),
                      o_(G, "press", "onPress"),
                      oC(U, !0),
                      (R = !1);
                    return;
                  }
                  if (
                    ((R =
                      !(k =
                        !!S &&
                        j !== W &&
                        !1 !== G.vars.allowNativeTouchScrolling &&
                        (!G.vars.allowContextMenu ||
                          !t ||
                          (!t.ctrlKey && !(t.which > 2))) &&
                        (j ? "y" : "x")) && !G.allowEventDefault) &&
                      (oi(t), oe(sg, "touchforcechange", oi)),
                    t.changedTouches
                      ? (y = (t = D = t.changedTouches[0]).identifier)
                      : t.pointerId
                      ? (y = t.pointerId)
                      : (D = y = null),
                    sR++,
                    s7(tu),
                    (u = G.pointerY = t.pageY),
                    (l = G.pointerX = t.pageX),
                    o_(G, "pressInit", "onPressInit"),
                    (k || G.autoScroll) && of(n.parentNode),
                    !n.parentNode ||
                      !G.autoScroll ||
                      a ||
                      Y ||
                      !n.parentNode._gsMaxScrollX ||
                      sy.parentNode ||
                      n.getBBox ||
                      ((sy.style.width = n.parentNode.scrollWidth + "px"),
                      n.parentNode.appendChild(sy)),
                    tv(),
                    G.tween && G.tween.kill(),
                    (G.isThrowing = !1),
                    sd.killTweensOf(a || n, K, !0),
                    a && sd.killTweensOf(n, { scrollTo: 1 }, !0),
                    (G.tween = G.lockedAxis = null),
                    (!i.zIndexBoost && (Y || a || !1 === i.zIndexBoost)) ||
                      (n.style.zIndex = e.zIndex++),
                    (G.isPressed = !0),
                    (f = !!(i.onDrag || G._listeners.drag)),
                    (d = !!(i.onMove || G._listeners.move)),
                    !1 !== i.cursor || i.activeCursor)
                  )
                    for (s = U.length; --s > -1; )
                      sd.set(U[s], {
                        cursor:
                          i.activeCursor ||
                          i.cursor ||
                          ("grab" === sM ? "grabbing" : sM),
                      });
                  o_(G, "press", "onPress");
                },
                tx = function (t) {
                  var e,
                    i,
                    r,
                    s,
                    a,
                    h,
                    c = t;
                  if (!o || sP || !G.isPressed || !t) {
                    R && t && o && oi(t);
                    return;
                  }
                  if (((G.pointerEvent = t), (e = t.changedTouches))) {
                    if ((t = e[0]) !== D && t.identifier !== y) {
                      for (
                        s = e.length;
                        --s > -1 &&
                        (t = e[s]).identifier !== y &&
                        t.target !== n;

                      );
                      if (s < 0) return;
                    }
                  } else if (t.pointerId && y && t.pointerId !== y) return;
                  if (
                    S &&
                    k &&
                    !A &&
                    ((oy.x = t.pageX - (ts ? ol(ta) : 0)),
                    (oy.y = t.pageY - (ts ? oa(ta) : 0)),
                    F && F.apply(oy, oy),
                    (i = oy.x),
                    (r = oy.y),
                    (((a = Math.abs(i - l)) !== (h = Math.abs(r - u)) &&
                      (a > q || h > q)) ||
                      (sS && k === A)) &&
                      ((A = a > h && j ? "x" : "y"),
                      k && A !== k && oe(sg, "touchforcechange", oi),
                      !1 !== G.vars.lockAxisOnTouchScroll &&
                        j &&
                        W &&
                        ((G.lockedAxis = "x" === A ? "y" : "x"),
                        sI(G.vars.onLockAxis) && G.vars.onLockAxis.call(G, c)),
                      sS && k === A))
                  ) {
                    tw(c);
                    return;
                  }
                  G.allowEventDefault ||
                  (k && (!A || k === A)) ||
                  !1 === c.cancelable
                    ? R && (R = !1)
                    : (oi(c), (R = !0)),
                    G.autoScroll && (Q = !0),
                    tb(t.pageX, t.pageY, d);
                },
                tb = function (t, e, n) {
                  var i,
                    r,
                    s,
                    o,
                    a,
                    f,
                    d = 1 - G.dragResistance,
                    D = 1 - G.edgeResistance,
                    y = G.pointerX,
                    w = G.pointerY,
                    P = c,
                    S = G.x,
                    M = G.y,
                    k = G.endX,
                    A = G.endY,
                    O = G.endRotation,
                    B = b;
                  (G.pointerX = t),
                    (G.pointerY = e),
                    ts && ((t -= ol(ta)), (e -= oa(ta))),
                    Y
                      ? ((o = Math.atan2(x.y - e, t - x.x) * sU),
                        (a = G.y - o) > 180
                          ? ((c -= 360), (G.y = o))
                          : a < -180 && ((c += 360), (G.y = o)),
                        G.x !== h || Math.abs(c - o) > q
                          ? ((G.y = o), (s = h + (c - o) * d))
                          : (s = h))
                      : (F &&
                          ((f = t * F.a + e * F.c + F.e),
                          (e = t * F.b + e * F.d + F.f),
                          (t = f)),
                        (r = e - u) < q && r > -q && (r = 0),
                        (i = t - l) < q && i > -q && (i = 0),
                        (G.lockAxis || G.lockedAxis) &&
                          (i || r) &&
                          (!(f = G.lockedAxis) &&
                            ((G.lockedAxis = f =
                              j && Math.abs(i) > Math.abs(r)
                                ? "y"
                                : W
                                ? "x"
                                : null),
                            f &&
                              sI(G.vars.onLockAxis) &&
                              G.vars.onLockAxis.call(G, G.pointerEvent)),
                          "y" === f ? (r = 0) : "x" === f && (i = 0)),
                        (s = sW(h + i * d)),
                        (o = sW(c + r * d))),
                    (C || E || T) &&
                      (G.x !== s || (G.y !== o && !Y)) &&
                      (T &&
                        ((s2.x = s),
                        (s2.y = o),
                        (s = sW((f = T(s2)).x)),
                        (o = sW(f.y))),
                      C && (s = sW(C(s))),
                      E && (o = sW(E(o)))),
                    p &&
                      (s > g
                        ? (s = g + Math.round((s - g) * D))
                        : s < m && (s = m + Math.round((s - m) * D)),
                      !Y &&
                        (o > v
                          ? (o = Math.round(v + (o - v) * D))
                          : o < _ && (o = Math.round(_ + (o - _) * D)))),
                    (G.x === s && (G.y === o || Y)) ||
                      (Y
                        ? ((G.endRotation = G.x = G.endX = s), (b = !0))
                        : (W && ((G.y = G.endY = o), (b = !0)),
                          j && ((G.x = G.endX = s), (b = !0))),
                      n && !1 === o_(G, "move", "onMove")
                        ? ((G.pointerX = y),
                          (G.pointerY = w),
                          (c = P),
                          (G.x = S),
                          (G.y = M),
                          (G.endX = k),
                          (G.endY = A),
                          (G.endRotation = O),
                          (b = B))
                        : !G.isDragging &&
                          G.isPressed &&
                          ((G.isDragging = z = !0),
                          o_(G, "dragstart", "onDragStart")));
                },
                tw = function t(e, r) {
                  if (
                    !o ||
                    !G.isPressed ||
                    (e &&
                      null != y &&
                      !r &&
                      ((e.pointerId && e.pointerId !== y && e.target !== n) ||
                        (e.changedTouches && !or(e.changedTouches, y))))
                  ) {
                    R && e && o && oi(e);
                    return;
                  }
                  G.isPressed = !1;
                  var s,
                    a,
                    l,
                    u,
                    h,
                    c = e,
                    p = G.isDragging,
                    f =
                      G.vars.allowContextMenu &&
                      e &&
                      (e.ctrlKey || e.which > 2),
                    d = sd.delayedCall(0.001, tD);
                  if (
                    (S
                      ? (on(S, "touchend", t),
                        on(S, "touchmove", tx),
                        on(S, "touchcancel", t),
                        on(ta, "touchstart", oo))
                      : on(ta, "mousemove", tx),
                    on(sg, "touchforcechange", oi),
                    (!sk || !S) &&
                      (on(ta, "mouseup", t),
                      e && e.target && on(e.target, "mouseup", t)),
                    (b = !1),
                    p && ((Z = s0 = sZ()), (G.isDragging = !1)),
                    ot(tu),
                    P && !f)
                  ) {
                    e && (on(e.target, "change", t), (G.pointerEvent = c)),
                      oC(U, !1),
                      o_(G, "release", "onRelease"),
                      o_(G, "click", "onClick"),
                      (P = !1);
                    return;
                  }
                  for (a = U.length; --a > -1; )
                    od(
                      U[a],
                      "cursor",
                      i.cursor || (!1 !== i.cursor ? sM : null)
                    );
                  if ((sR--, e)) {
                    if (
                      (s = e.changedTouches) &&
                      (e = s[0]) !== D &&
                      e.identifier !== y
                    ) {
                      for (
                        a = s.length;
                        --a > -1 &&
                        (e = s[a]).identifier !== y &&
                        e.target !== n;

                      );
                      if (a < 0 && !r) return;
                    }
                    (G.pointerEvent = c),
                      (G.pointerX = e.pageX),
                      (G.pointerY = e.pageY);
                  }
                  return (
                    f && c
                      ? (oi(c), (R = !0), o_(G, "release", "onRelease"))
                      : c && !p
                      ? ((R = !1),
                        M &&
                          (i.snap || i.bounds) &&
                          tg(i.inertia || i.throwProps),
                        o_(G, "release", "onRelease"),
                        (sS && "touchmove" === c.type) ||
                          -1 !== c.type.indexOf("cancel") ||
                          (o_(G, "click", "onClick"),
                          sZ() - ti < 300 &&
                            o_(G, "doubleclick", "onDoubleClick"),
                          (u = c.target || n),
                          (ti = sZ()),
                          (h = function () {
                            ti !== B &&
                              G.enabled() &&
                              !G.isPressed &&
                              !c.defaultPrevented &&
                              (u.click
                                ? u.click()
                                : ta.createEvent &&
                                  ((l =
                                    ta.createEvent(
                                      "MouseEvents"
                                    )).initMouseEvent(
                                    "click",
                                    !0,
                                    !0,
                                    sg,
                                    1,
                                    G.pointerEvent.screenX,
                                    G.pointerEvent.screenY,
                                    G.pointerX,
                                    G.pointerY,
                                    !1,
                                    !1,
                                    !1,
                                    !1,
                                    0,
                                    null
                                  ),
                                  u.dispatchEvent(l)));
                          }),
                          sS || c.defaultPrevented || sd.delayedCall(0.05, h)))
                      : (tg(i.inertia || i.throwProps),
                        !G.allowEventDefault &&
                        c &&
                        (!1 !== i.dragClickables || !tn.call(G, c.target)) &&
                        p &&
                        (!k || (A && k === A)) &&
                        !1 !== c.cancelable
                          ? ((R = !0), oi(c))
                          : (R = !1),
                        o_(G, "release", "onRelease")),
                    t_() && d.duration(G.tween.duration()),
                    p && o_(G, "dragend", "onDragEnd"),
                    !0
                  );
                },
                tC = function (t) {
                  if (t && G.isDragging && !a) {
                    var e = t.target || n.parentNode,
                      i = e.scrollLeft - e._gsScrollX,
                      r = e.scrollTop - e._gsScrollY;
                    (i || r) &&
                      (F
                        ? ((l -= i * F.a + r * F.c), (u -= r * F.d + i * F.b))
                        : ((l -= i), (u -= r)),
                      (e._gsScrollX += i),
                      (e._gsScrollY += r),
                      tb(G.pointerX, G.pointerY));
                  }
                },
                tE = function (t) {
                  var e = sZ(),
                    n = e - ti < 100,
                    i = e - Z < 50,
                    r = n && B === ti,
                    s = G.pointerEvent && G.pointerEvent.defaultPrevented,
                    o = n && L === ti,
                    a = t.isTrusted || (null == t.isTrusted && n && r);
                  if (
                    ((r || (i && !1 !== G.vars.suppressClickOnDrag)) &&
                      t.stopImmediatePropagation &&
                      t.stopImmediatePropagation(),
                    n &&
                      !(G.pointerEvent && G.pointerEvent.defaultPrevented) &&
                      (!r || (a && !o)))
                  ) {
                    a && r && (L = ti), (B = ti);
                    return;
                  }
                  (G.isPressed || i || n) &&
                    (!a || !t.detail || !n || s) &&
                    oi(t),
                    n ||
                      i ||
                      z ||
                      (t && t.target && (G.pointerEvent = t),
                      o_(G, "click", "onClick"));
                },
                tT = function (t) {
                  return F
                    ? {
                        x: t.x * F.a + t.y * F.c + F.e,
                        y: t.x * F.b + t.y * F.d + F.f,
                      }
                    : { x: t.x, y: t.y };
                };
              return (
                (w = e.get(n)) && w.kill(),
                (s.startDrag = function (t, e) {
                  var i, r, s, o;
                  ty(t || G.pointerEvent, !0),
                    e &&
                      !G.hitTest(t || G.pointerEvent) &&
                      ((i = ov(t || G.pointerEvent)),
                      (r = ov(n)),
                      (s = tT({
                        x: i.left + i.width / 2,
                        y: i.top + i.height / 2,
                      })),
                      (o = tT({
                        x: r.left + r.width / 2,
                        y: r.top + r.height / 2,
                      })),
                      (l -= s.x - o.x),
                      (u -= s.y - o.y)),
                    G.isDragging ||
                      ((G.isDragging = z = !0),
                      o_(G, "dragstart", "onDragStart"));
                }),
                (s.drag = tx),
                (s.endDrag = function (t) {
                  return tw(t || G.pointerEvent, !0);
                }),
                (s.timeSinceDrag = function () {
                  return G.isDragging ? 0 : (sZ() - Z) / 1e3;
                }),
                (s.timeSinceClick = function () {
                  return (sZ() - ti) / 1e3;
                }),
                (s.hitTest = function (t, n) {
                  return e.hitTest(G.target, t, n);
                }),
                (s.getDirection = function (t, e) {
                  var i,
                    r,
                    s,
                    o,
                    a,
                    l,
                    u =
                      "velocity" === t && sF
                        ? t
                        : sX(t) && !Y
                        ? "element"
                        : "start";
                  return ("element" === u && ((a = ov(G.target)), (l = ov(t))),
                  (i =
                    "start" === u
                      ? G.x - h
                      : "velocity" === u
                      ? sF.getVelocity(n, H)
                      : a.left + a.width / 2 - (l.left + l.width / 2)),
                  Y)
                    ? i < 0
                      ? "counter-clockwise"
                      : "clockwise"
                    : ((e = e || 2),
                      (o =
                        (s = Math.abs(
                          i /
                            (r =
                              "start" === u
                                ? G.y - c
                                : "velocity" === u
                                ? sF.getVelocity(n, V)
                                : a.top + a.height / 2 - (l.top + l.height / 2))
                        )) <
                        1 / e
                          ? ""
                          : i < 0
                          ? "left"
                          : "right"),
                      s < e &&
                        ("" !== o && (o += "-"), (o += r < 0 ? "up" : "down")),
                      o);
                }),
                (s.applyBounds = function (t, e) {
                  var r, s, o, a, l, u;
                  if (t && i.bounds !== t)
                    return (i.bounds = t), G.update(!0, e);
                  if ((th(!0), tp(), p && !t_())) {
                    if (
                      ((r = G.x),
                      (s = G.y),
                      r > g ? (r = g) : r < m && (r = m),
                      s > v ? (s = v) : s < _ && (s = _),
                      (G.x !== r || G.y !== s) &&
                        ((o = !0),
                        (G.x = G.endX = r),
                        Y ? (G.endRotation = r) : (G.y = G.endY = s),
                        (b = !0),
                        tu(!0),
                        G.autoScroll && !G.isDragging))
                    )
                      for (
                        of(n.parentNode),
                          a = n,
                          s3.scrollTop =
                            null != sg.pageYOffset
                              ? sg.pageYOffset
                              : null != ta.documentElement.scrollTop
                              ? ta.documentElement.scrollTop
                              : ta.body.scrollTop,
                          s3.scrollLeft =
                            null != sg.pageXOffset
                              ? sg.pageXOffset
                              : null != ta.documentElement.scrollLeft
                              ? ta.documentElement.scrollLeft
                              : ta.body.scrollLeft;
                        a && !u;

                      )
                        (l = (u = oc(a.parentNode)) ? s3 : a.parentNode),
                          W &&
                            l.scrollTop > l._gsMaxScrollY &&
                            (l.scrollTop = l._gsMaxScrollY),
                          j &&
                            l.scrollLeft > l._gsMaxScrollX &&
                            (l.scrollLeft = l._gsMaxScrollX),
                          (a = l);
                    G.isThrowing &&
                      (o ||
                        G.endX > g ||
                        G.endX < m ||
                        G.endY > v ||
                        G.endY < _) &&
                      tg(i.inertia || i.throwProps, o);
                  }
                  return G;
                }),
                (s.update = function (t, e, i) {
                  if (e && G.isPressed) {
                    var r = sf(n),
                      s = N.apply({ x: G.x - h, y: G.y - c }),
                      o = sf(n.parentNode, !0);
                    o.apply({ x: r.e - s.x, y: r.f - s.y }, s),
                      (G.x -= s.x - o.e),
                      (G.y -= s.y - o.f),
                      tu(!0),
                      tv();
                  }
                  var a = G.x,
                    l = G.y;
                  return (
                    tm(!e),
                    t ? G.applyBounds() : (b && i && tu(!0), th(!0)),
                    e && (tb(G.pointerX, G.pointerY), b && tu(!0)),
                    G.isPressed &&
                      !e &&
                      ((j && Math.abs(a - G.x) > 0.01) ||
                        (W && Math.abs(l - G.y) > 0.01 && !Y)) &&
                      tv(),
                    G.autoScroll &&
                      (of(n.parentNode, G.isDragging),
                      (Q = G.isDragging),
                      tu(!0),
                      oh(n, tC),
                      ou(n, tC)),
                    G
                  );
                }),
                (s.enable = function (t) {
                  var e,
                    r,
                    s,
                    l = { lazy: !0 };
                  if (
                    (!1 !== i.cursor && (l.cursor = i.cursor || sM),
                    sd.utils.checkPrefix("touchCallout") &&
                      (l.touchCallout = "none"),
                    "soft" !== t)
                  ) {
                    for (
                      s6(
                        U,
                        j === W
                          ? "none"
                          : (i.allowNativeTouchScrolling &&
                              (n.scrollHeight === n.clientHeight) ==
                                (n.scrollWidth === n.clientHeight)) ||
                            i.allowEventDefault
                          ? "manipulation"
                          : j
                          ? "pan-y"
                          : "pan-x"
                      ),
                        r = U.length;
                      --r > -1;

                    )
                      (s = U[r]),
                        sk || oe(s, "mousedown", ty),
                        oe(s, "touchstart", ty),
                        oe(s, "click", tE, !0),
                        sd.set(s, l),
                        s.getBBox &&
                          s.ownerSVGElement &&
                          j !== W &&
                          sd.set(s.ownerSVGElement, {
                            touchAction:
                              i.allowNativeTouchScrolling || i.allowEventDefault
                                ? "manipulation"
                                : j
                                ? "pan-y"
                                : "pan-x",
                          }),
                        i.allowContextMenu || oe(s, "contextmenu", tl);
                    oC(U, !1);
                  }
                  return (
                    ou(n, tC),
                    (o = !0),
                    sF &&
                      "soft" !== t &&
                      sF.track(a || n, X ? "x,y" : Y ? "rotation" : "top,left"),
                    (n._gsDragID = e = "d" + sJ++),
                    (s$[e] = G),
                    a && (a.enable(), (a.element._gsDragID = e)),
                    (i.bounds || Y) && tv(),
                    i.bounds && G.applyBounds(),
                    G
                  );
                }),
                (s.disable = function (t) {
                  for (var e, i = G.isDragging, r = U.length; --r > -1; )
                    od(U[r], "cursor", null);
                  if ("soft" !== t) {
                    for (s6(U, null), r = U.length; --r > -1; )
                      od((e = U[r]), "touchCallout", null),
                        on(e, "mousedown", ty),
                        on(e, "touchstart", ty),
                        on(e, "click", tE, !0),
                        on(e, "contextmenu", tl);
                    oC(U, !0),
                      S &&
                        (on(S, "touchcancel", tw),
                        on(S, "touchend", tw),
                        on(S, "touchmove", tx)),
                      on(ta, "mouseup", tw),
                      on(ta, "mousemove", tx);
                  }
                  return (
                    oh(n, tC),
                    (o = !1),
                    sF &&
                      "soft" !== t &&
                      (sF.untrack(
                        a || n,
                        X ? "x,y" : Y ? "rotation" : "top,left"
                      ),
                      G.tween && G.tween.kill()),
                    a && a.disable(),
                    ot(tu),
                    (G.isDragging = G.isPressed = P = !1),
                    i && o_(G, "dragend", "onDragEnd"),
                    G
                  );
                }),
                (s.enabled = function (t, e) {
                  return arguments.length
                    ? t
                      ? G.enable(e)
                      : G.disable(e)
                    : o;
                }),
                (s.kill = function () {
                  return (
                    (G.isThrowing = !1),
                    G.tween && G.tween.kill(),
                    G.disable(),
                    sd.set(U, { clearProps: "userSelect" }),
                    delete s$[n._gsDragID],
                    G
                  );
                }),
                (s.revert = function () {
                  this.kill(), this.styles && this.styles.revert();
                }),
                ~I.indexOf("scroll") &&
                  ((a = s.scrollProxy =
                    new oE(
                      n,
                      s4(
                        {
                          onKill: function () {
                            G.isPressed && tw(null);
                          },
                        },
                        i
                      )
                    )),
                  (n.style.overflowY = W && !sE ? "auto" : "hidden"),
                  (n.style.overflowX = j && !sE ? "auto" : "hidden"),
                  (n = a.content)),
                Y ? (K.rotation = 1) : (j && (K[H] = 1), W && (K[V] = 1)),
                (tr.force3D = !("force3D" in i) || i.force3D),
                sA(r(s)),
                s.enable(),
                s
              );
            }
            return (
              i(e, t),
              (e.register = function (t) {
                (sd = t), oT();
              }),
              (e.create = function (t, n) {
                return (
                  sx || oT(!0),
                  sw(t).map(function (t) {
                    return new e(t, n);
                  })
                );
              }),
              (e.get = function (t) {
                return s$[(sw(t)[0] || {})._gsDragID];
              }),
              (e.timeSinceDrag = function () {
                return (sZ() - s0) / 1e3;
              }),
              (e.hitTest = function (t, e, n) {
                if (t === e) return !1;
                var i,
                  r,
                  s,
                  o = ov(t),
                  a = ov(e),
                  l = o.top,
                  u = o.left,
                  h = o.right,
                  c = o.bottom,
                  p = o.width,
                  f = o.height,
                  d = a.left > h || a.right < u || a.top > c || a.bottom < l;
                return d || !n
                  ? !d
                  : ((s = -1 !== (n + "").indexOf("%")),
                    (n = parseFloat(n) || 0),
                    ((i = {
                      left: Math.max(u, a.left),
                      top: Math.max(l, a.top),
                    }).width = Math.min(h, a.right) - i.left),
                    (i.height = Math.min(c, a.bottom) - i.top),
                    !(i.width < 0) &&
                      !(i.height < 0) &&
                      (s
                        ? ((n *= 0.01),
                          (r = i.width * i.height) >= p * f * n ||
                            r >= a.width * a.height * n)
                        : i.width > n && i.height > n));
              }),
              e
            );
          })(
            (function () {
              function t(t) {
                (this._listeners = {}), (this.target = t || this);
              }
              var e = t.prototype;
              return (
                (e.addEventListener = function (t, e) {
                  var n = this._listeners[t] || (this._listeners[t] = []);
                  ~n.indexOf(e) || n.push(e);
                }),
                (e.removeEventListener = function (t, e) {
                  var n = this._listeners[t],
                    i = n && n.indexOf(e);
                  i >= 0 && n.splice(i, 1);
                }),
                (e.dispatchEvent = function (t) {
                  var e,
                    n = this;
                  return (
                    (this._listeners[t] || []).forEach(function (i) {
                      return (
                        !1 === i.call(n, { type: t, target: n.target }) &&
                        (e = !1)
                      );
                    }),
                    e
                  );
                }),
                t
              );
            })()
          );
        (function (t, e) {
          for (var n in e) n in t || (t[n] = e[n]);
        })(oP.prototype, {
          pointerX: 0,
          pointerY: 0,
          startX: 0,
          startY: 0,
          deltaX: 0,
          deltaY: 0,
          isDragging: !1,
          isPressed: !1,
        }),
          (oP.zIndex = 1e3),
          (oP.version = "3.12.5"),
          sz() && sd.registerPlugin(oP);
        var oS,
          oF,
          oM,
          ok,
          oA = function () {
            return !0;
          },
          oO = function () {
            return (
              oS || (oA() && (oS = window.gsap) && oS.registerPlugin && oS)
            );
          },
          oB = function () {
            return (
              oF ||
                (oL(),
                ok ||
                  console.warn(
                    "Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)"
                  )),
              oF
            );
          },
          oL = function (t) {
            (oS = t || oO()),
              oA() && (oM = document),
              oS && (ok = oS.plugins.css) && (oF = 1);
          },
          oR = {
            version: "3.12.5",
            name: "cssRule",
            init: function (t, e, n, i, r) {
              if (!oB() || void 0 === t.cssText) return !1;
              var s = (t._gsProxy = t._gsProxy || oM.createElement("div"));
              (this.ss = t),
                (this.style = s.style),
                (s.style.cssText = t.cssText),
                ok.prototype.init.call(this, s, e, n, i, r);
            },
            render: function (t, e) {
              for (var n, i = e._pt, r = e.style, s = e.ss; i; )
                i.r(t, i.d), (i = i._next);
              for (n = r.length; --n > -1; ) s[r[n]] = r[r[n]];
            },
            getRule: function (t) {
              oB();
              var e,
                n,
                i,
                r,
                s = oM.all ? "rules" : "cssRules",
                o = oM.styleSheets,
                a = o.length,
                l = ":" === t.charAt(0);
              for (
                t =
                  (l ? "" : ",") + t.split("::").join(":").toLowerCase() + ",",
                  l && (r = []);
                a--;

              ) {
                try {
                  if (!(n = o[a][s])) continue;
                  e = n.length;
                } catch (t) {
                  console.warn(t);
                  continue;
                }
                for (; --e > -1; )
                  if (
                    (i = n[e]).selectorText &&
                    -1 !==
                      (
                        "," +
                        i.selectorText.split("::").join(":").toLowerCase() +
                        ","
                      ).indexOf(t)
                  ) {
                    if (!l) return i.style;
                    r.push(i.style);
                  }
              }
              return r;
            },
            register: oL,
          };
        oO() && oS.registerPlugin(oR);
        var oN,
          oz,
          oI,
          oX,
          oY,
          oH,
          oV =
            "redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(
              ","
            ),
          oj = function () {
            return !0;
          },
          oW = function () {
            return (
              oN || (oj() && (oN = window.gsap) && oN.registerPlugin && oN)
            );
          },
          oq = function () {
            return oX || (oI && oI.createjs) || oI || {};
          },
          oG = function (t) {
            return console.warn(t);
          },
          oU = function (t) {
            var e = t.getBounds && t.getBounds();
            !e &&
              ((e = t.nominalBounds || { x: 0, y: 0, width: 100, height: 100 }),
              t.setBounds && t.setBounds(e.x, e.y, e.width, e.height)),
              t.cache && t.cache(e.x, e.y, e.width, e.height),
              oG(
                "EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. " +
                  t
              );
          },
          oK = function (t, e, n) {
            oY ||
              (oY = oq().ColorFilter) ||
              oG(
                "EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded."
              );
            for (var i, r, s, o, a, l, u = t.filters || [], h = u.length; h--; )
              if (u[h] instanceof oY) {
                r = u[h];
                break;
              }
            if (
              (r || ((r = new oY()), u.push(r), (t.filters = u)),
              (s = r.clone()),
              null != e.tint)
            )
              (i = oN.utils.splitColor(e.tint)),
                (o = null != e.tintAmount ? +e.tintAmount : 1),
                (s.redOffset = +i[0] * o),
                (s.greenOffset = +i[1] * o),
                (s.blueOffset = +i[2] * o),
                (s.redMultiplier =
                  s.greenMultiplier =
                  s.blueMultiplier =
                    1 - o);
            else
              for (a in e)
                "exposure" !== a && "brightness" !== a && (s[a] = +e[a]);
            for (
              null != e.exposure
                ? ((s.redOffset =
                    s.greenOffset =
                    s.blueOffset =
                      255 * (+e.exposure - 1)),
                  (s.redMultiplier = s.greenMultiplier = s.blueMultiplier = 1))
                : null != e.brightness &&
                  ((o = +e.brightness - 1),
                  (s.redOffset =
                    s.greenOffset =
                    s.blueOffset =
                      o > 0 ? 255 * o : 0),
                  (s.redMultiplier =
                    s.greenMultiplier =
                    s.blueMultiplier =
                      1 - Math.abs(o))),
                h = 8;
              h--;

            )
              r[(a = oV[h])] !== s[a] &&
                (l = n.add(r, a, r[a], s[a], 0, 0, 0, 0, 0, 1)) &&
                (l.op = "easel_colorFilter");
            n._props.push("easel_colorFilter"), t.cacheID || oU(t);
          },
          oZ = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
          oQ = function (t, e) {
            if (!(t instanceof Array) || !(e instanceof Array)) return e;
            var n,
              i,
              r = [],
              s = 0,
              o = 0;
            for (n = 0; n < 4; n++) {
              for (i = 0; i < 5; i++)
                (o = 4 === i ? t[s + 4] : 0),
                  (r[s + i] =
                    t[s] * e[i] +
                    t[s + 1] * e[i + 5] +
                    t[s + 2] * e[i + 10] +
                    t[s + 3] * e[i + 15] +
                    o);
              s += 5;
            }
            return r;
          },
          o$ = function (t, e) {
            if (isNaN(e)) return t;
            var n = 1 - e,
              i = 0.212671 * n,
              r = 0.71516 * n,
              s = 0.072169 * n;
            return oQ(
              [
                i + e,
                r,
                s,
                0,
                0,
                i,
                r + e,
                s,
                0,
                0,
                i,
                r,
                s + e,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
              ],
              t
            );
          },
          oJ = function (t, e, n) {
            isNaN(n) && (n = 1);
            var i = oN.utils.splitColor(e),
              r = i[0] / 255,
              s = i[1] / 255,
              o = i[2] / 255,
              a = 1 - n;
            return oQ(
              [
                a + n * r * 0.212671,
                n * r * 0.71516,
                n * r * 0.072169,
                0,
                0,
                n * s * 0.212671,
                a + n * s * 0.71516,
                n * s * 0.072169,
                0,
                0,
                n * o * 0.212671,
                n * o * 0.71516,
                a + n * o * 0.072169,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
              ],
              t
            );
          },
          o1 = function (t, e) {
            if (isNaN(e)) return t;
            var n = Math.cos((e *= Math.PI / 180)),
              i = Math.sin(e);
            return oQ(
              [
                0.212671 + 0.787329 * n + -(0.212671 * i),
                0.71516 + -(0.71516 * n) + -(0.71516 * i),
                0.072169 + -(0.072169 * n) + 0.927831 * i,
                0,
                0,
                0.212671 + -(0.212671 * n) + 0.143 * i,
                0.71516 + 0.28484 * n + 0.14 * i,
                0.072169 + -(0.072169 * n) + -0.283 * i,
                0,
                0,
                0.212671 + -(0.212671 * n) + -(0.787329 * i),
                0.71516 + -(0.71516 * n) + 0.71516 * i,
                0.072169 + 0.927831 * n + 0.072169 * i,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ],
              t
            );
          },
          o0 = function (t, e, n) {
            oH ||
              (oH = oq().ColorMatrixFilter) ||
              oG(
                "EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded."
              );
            for (
              var i, r, s, o, a, l, u = t.filters || [], h = u.length;
              --h > -1;

            )
              if (u[h] instanceof oH) {
                a = u[h];
                break;
              }
            for (
              a || ((a = new oH(oZ.slice())), u.push(a), (t.filters = u)),
                o = a.matrix,
                s = oZ.slice(),
                null != e.colorize &&
                  (s = oJ(s, e.colorize, Number(e.colorizeAmount))),
                null != e.contrast &&
                  ((i = s),
                  (s = isNaN((r = Number(e.contrast)))
                    ? i
                    : oQ(
                        [
                          (r += 0.01),
                          0,
                          0,
                          0,
                          128 * (1 - r),
                          0,
                          r,
                          0,
                          0,
                          128 * (1 - r),
                          0,
                          0,
                          r,
                          0,
                          128 * (1 - r),
                          0,
                          0,
                          0,
                          1,
                          0,
                        ],
                        i
                      ))),
                null != e.hue && (s = o1(s, Number(e.hue))),
                null != e.saturation && (s = o$(s, Number(e.saturation))),
                h = s.length;
              --h > -1;

            )
              s[h] !== o[h] &&
                (l = n.add(o, h, o[h], s[h], 0, 0, 0, 0, 0, 1)) &&
                (l.op = "easel_colorMatrixFilter");
            n._props.push("easel_colorMatrixFilter"),
              t.cacheID || oU(),
              (n._matrix = o);
          },
          o2 = function (t) {
            (oN = t || oW()), oj() && (oI = window), oN && (oz = 1);
          },
          o3 = {
            version: "3.12.5",
            name: "easel",
            init: function (t, e, n, i, r) {
              var s, o, a, l, u, h, c;
              for (s in (oz ||
                (o2(), oN || oG("Please gsap.registerPlugin(EaselPlugin)")),
              (this.target = t),
              e))
                if (
                  ((u = e[s]),
                  "colorFilter" === s ||
                    "tint" === s ||
                    "tintAmount" === s ||
                    "exposure" === s ||
                    "brightness" === s)
                )
                  a || (oK(t, e.colorFilter || e, this), (a = !0));
                else if (
                  "saturation" === s ||
                  "contrast" === s ||
                  "hue" === s ||
                  "colorize" === s ||
                  "colorizeAmount" === s
                )
                  l || (o0(t, e.colorMatrixFilter || e, this), (l = !0));
                else if ("frame" === s) {
                  if (
                    "string" == typeof u &&
                    "=" !== u.charAt(1) &&
                    (h = t.labels)
                  )
                    for (c = 0; c < h.length; c++)
                      h[c].label === u && (u = h[c].position);
                  (o = this.add(
                    t,
                    "gotoAndStop",
                    t.currentFrame,
                    u,
                    i,
                    r,
                    Math.round,
                    0,
                    0,
                    1
                  )) && (o.op = s);
                } else null != t[s] && this.add(t, s, "get", u);
            },
            render: function (t, e) {
              for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
              e.target.cacheID && e.target.updateCache();
            },
            register: o2,
          };
        (o3.registerCreateJS = function (t) {
          oX = t;
        }),
          oW() && oN.registerPlugin(o3);
        var o5,
          o4,
          o6 = function () {
            return o5 || ((o5 = window.gsap) && o5.registerPlugin && o5);
          },
          o8 = function (t, e) {
            return !!(void 0 === t ? e : t && !~(t + "").indexOf("false"));
          },
          o7 = function (t) {
            if ((o5 = t || o6())) {
              o4 = o5.registerEase;
              var e,
                n = o5.parseEase(),
                i = function (t) {
                  return function (e) {
                    var n = 0.5 + e / 2;
                    t.config = function (e) {
                      return t(2 * (1 - e) * e * n + e * e);
                    };
                  };
                };
              for (e in n) n[e].config || i(n[e]);
              for (e in (o4("slow", ai),
              o4("expoScale", ar),
              o4("rough", as),
              ao))
                "version" !== e && o5.core.globals(e, ao[e]);
            }
          },
          o9 = function (t, e, n) {
            var i =
                (t = Math.min(1, t || 0.7)) < 1 ? (e || 0 === e ? e : 0.7) : 0,
              r = (1 - t) / 2,
              s = r + t,
              o = o8(n);
            return function (t) {
              var e = t + (0.5 - t) * i;
              return t < r
                ? o
                  ? 1 - (t = 1 - t / r) * t
                  : e - (t = 1 - t / r) * t * t * t * e
                : t > s
                ? o
                  ? 1 === t
                    ? 0
                    : 1 - (t = (t - s) / r) * t
                  : e + (t - e) * (t = (t - s) / r) * t * t * t
                : o
                ? 1
                : e;
            };
          },
          at = function (t, e, n) {
            var i = Math.log(e / t),
              r = e - t;
            return (
              n && (n = o5.parseEase(n)),
              function (e) {
                return (t * Math.exp(i * (n ? n(e) : e)) - t) / r;
              }
            );
          },
          ae = function (t, e, n) {
            (this.t = t),
              (this.v = e),
              n &&
                ((this.next = n),
                (n.prev = this),
                (this.c = n.v - e),
                (this.gap = n.t - t));
          },
          an = function (t) {
            "object" != typeof t && (t = { points: +t || 20 });
            for (
              var e,
                n,
                i,
                r,
                s,
                o,
                a,
                l = t.taper || "none",
                u = [],
                h = 0,
                c = 0 | (+t.points || 20),
                p = c,
                f = o8(t.randomize, !0),
                d = o8(t.clamp),
                g = o5 ? o5.parseEase(t.template) : 0,
                m = 0.4 * (+t.strength || 1);
              --p > -1;

            )
              (e = f ? Math.random() : (1 / c) * p),
                (n = g ? g(e) : e),
                (i =
                  "none" === l
                    ? m
                    : "out" === l
                    ? (r = 1 - e) * r * m
                    : "in" === l
                    ? e * e * m
                    : e < 0.5
                    ? (r = 2 * e) * r * 0.5 * m
                    : (r = (1 - e) * 2) * r * 0.5 * m),
                f
                  ? (n += Math.random() * i - 0.5 * i)
                  : p % 2
                  ? (n += 0.5 * i)
                  : (n -= 0.5 * i),
                d && (n > 1 ? (n = 1) : n < 0 && (n = 0)),
                (u[h++] = { x: e, y: n });
            for (
              u.sort(function (t, e) {
                return t.x - e.x;
              }),
                o = new ae(1, 1, null),
                p = c;
              p--;

            )
              o = new ae((s = u[p]).x, s.y, o);
            return (
              (a = new ae(0, 0, o.t ? o : o.next)),
              function (t) {
                var e = a;
                if (t > e.t) {
                  for (; e.next && t >= e.t; ) e = e.next;
                  e = e.prev;
                } else for (; e.prev && t <= e.t; ) e = e.prev;
                return (a = e), e.v + ((t - e.t) / e.gap) * e.c;
              }
            );
          },
          ai = o9(0.7);
        (ai.ease = ai), (ai.config = o9);
        var ar = at(1, 2);
        ar.config = at;
        var as = an();
        (as.ease = as), (as.config = an);
        var ao = { SlowMo: ai, RoughEase: as, ExpoScaleEase: ar };
        for (var aa in ao) (ao[aa].register = o7), (ao[aa].version = "3.12.5");
        o6() && o5.registerPlugin(ai);
        var al,
          au,
          ah,
          ac,
          ap,
          af,
          ad,
          ag,
          am = 1,
          av = function (t, e) {
            return t.actions.forEach(function (t) {
              return t.vars[e] && t.vars[e](t);
            });
          },
          a_ = {},
          aD = 180 / Math.PI,
          ay = Math.PI / 180,
          ax = {},
          ab = {},
          aw = {},
          aC = function (t) {
            return "string" == typeof t ? t.split(" ").join("").split(",") : t;
          },
          aE = aC("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
          aT = aC(
            "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
          ),
          aP = function (t) {
            return al(t)[0] || console.warn("Element not found:", t);
          },
          aS = function (t) {
            return Math.round(1e4 * t) / 1e4 || 0;
          },
          aF = function (t, e, n) {
            return t.forEach(function (t) {
              return t.classList[n](e);
            });
          },
          aM = {
            zIndex: 1,
            kill: 1,
            simple: 1,
            spin: 1,
            clearProps: 1,
            targets: 1,
            toggleClass: 1,
            onComplete: 1,
            onUpdate: 1,
            onInterrupt: 1,
            onStart: 1,
            delay: 1,
            repeat: 1,
            repeatDelay: 1,
            yoyo: 1,
            scale: 1,
            fade: 1,
            absolute: 1,
            props: 1,
            onEnter: 1,
            onLeave: 1,
            custom: 1,
            paused: 1,
            nested: 1,
            prune: 1,
            absoluteOnLeave: 1,
          },
          ak = {
            zIndex: 1,
            simple: 1,
            clearProps: 1,
            scale: 1,
            absolute: 1,
            fitChild: 1,
            getVars: 1,
            props: 1,
          },
          aA = function (t) {
            return t.replace(/([A-Z])/g, "-$1").toLowerCase();
          },
          aO = function (t, e) {
            var n,
              i = {};
            for (n in t) e[n] || (i[n] = t[n]);
            return i;
          },
          aB = {},
          aL = function (t) {
            var e = (aB[t] = aC(t));
            return (aw[t] = e.concat(aT)), e;
          },
          aR = function (t) {
            var e = t._gsap || au.core.getCache(t);
            return e.gmCache === au.ticker.frame
              ? e.gMatrix
              : ((e.gmCache = au.ticker.frame),
                (e.gMatrix = sf(t, !0, !1, !0)));
          },
          aN = function t(e, n, i) {
            void 0 === i && (i = 0);
            for (
              var r = e.parentNode,
                s = 1e3 * Math.pow(10, i) * (n ? -1 : 1),
                o = n ? -(900 * s) : 0;
              e;

            )
              (o += s), (e = e.previousSibling);
            return r ? o + t(r, n, i + 1) : o;
          },
          az = function (t, e, n) {
            return (
              t.forEach(function (t) {
                return (t.d = aN(n ? t.element : t.t, e));
              }),
              t.sort(function (t, e) {
                return t.d - e.d;
              }),
              t
            );
          },
          aI = function (t, e) {
            for (
              var n,
                i,
                r = t.element.style,
                s = (t.css = t.css || []),
                o = e.length;
              o--;

            )
              (i = r[(n = e[o])] || r.getPropertyValue(n)),
                s.push(i ? n : ab[n] || (ab[n] = aA(n)), i);
            return r;
          },
          aX = function (t) {
            var e = t.css,
              n = t.element.style,
              i = 0;
            for (t.cache.uncache = 1; i < e.length; i += 2)
              e[i + 1] ? (n[e[i]] = e[i + 1]) : n.removeProperty(e[i]);
            !e[e.indexOf("transform") + 1] &&
              n.translate &&
              (n.removeProperty("translate"),
              n.removeProperty("scale"),
              n.removeProperty("rotate"));
          },
          aY = function (t, e) {
            t.forEach(function (t) {
              return (t.a.cache.uncache = 1);
            }),
              e || t.finalStates.forEach(aX);
          },
          aH =
            "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
              ","
            ),
          aV = function (t, e, n) {
            var i,
              r,
              s,
              o = t.element,
              a = t.width,
              l = t.height,
              u = t.uncache,
              h = t.getProp,
              c = o.style,
              p = 4;
            if (("object" != typeof e && (e = t), ah && 1 !== n))
              return (
                ah._abs.push({ t: o, b: t, a: t, sd: 0 }),
                ah._final.push(function () {
                  return (t.cache.uncache = 1), aX(t);
                }),
                o
              );
            for (
              r = "none" === h("display"),
                (!t.isVisible || r) &&
                  (r && (aI(t, ["display"]).display = e.display),
                  (t.matrix = e.matrix),
                  (t.width = a = t.width || e.width),
                  (t.height = l = t.height || e.height)),
                aI(t, aH),
                s = window.getComputedStyle(o);
              p--;

            )
              c[aH[p]] = s[aH[p]];
            if (
              ((c.gridArea = "1 / 1 / 1 / 1"),
              (c.transition = "none"),
              (c.position = "absolute"),
              (c.width = a + "px"),
              (c.height = l + "px"),
              c.top || (c.top = "0px"),
              c.left || (c.left = "0px"),
              u)
            )
              i = new a9(o);
            else if ((((i = aO(t, ax)).position = "absolute"), t.simple)) {
              var f = o.getBoundingClientRect();
              i.matrix = new sp(1, 0, 0, 1, f.left + ss(), f.top + sr());
            } else i.matrix = sf(o, !1, !1, !0);
            return (
              (i = a$(i, t, !0)),
              (t.x = af(i.x, 0.01)),
              (t.y = af(i.y, 0.01)),
              o
            );
          },
          aj = function (t, e) {
            return (
              !0 !== e &&
                ((e = al(e)),
                (t = t.filter(function (t) {
                  if (-1 !== e.indexOf((t.sd < 0 ? t.b : t.a).element))
                    return !0;
                  t.t._gsap.renderTransform(1),
                    t.b.isVisible &&
                      ((t.t.style.width = t.b.width + "px"),
                      (t.t.style.height = t.b.height + "px"));
                }))),
              t
            );
          },
          aW = function (t) {
            return az(t, !0).forEach(function (t) {
              return (
                (t.a.isVisible || t.b.isVisible) &&
                aV(t.sd < 0 ? t.b : t.a, t.b, 1)
              );
            });
          },
          aq = function (t, e, n, i) {
            return t instanceof a9
              ? t
              : t instanceof a7
              ? (i && t.idLookup[aq(i).id]) || t.elementStates[0]
              : new a9(
                  "string" == typeof t
                    ? aP(t) || console.warn(t + " not found")
                    : t,
                  e,
                  n
                );
          },
          aG = function (t, e) {
            for (
              var n = au.getProperty(t.element, null, "native"),
                i = (t.props = {}),
                r = e.length;
              r--;

            )
              i[e[r]] = (n(e[r]) + "").trim();
            return i.zIndex && (i.zIndex = parseFloat(i.zIndex) || 0), t;
          },
          aU = function (t, e) {
            var n,
              i = t.style || t;
            for (n in e) i[n] = e[n];
          },
          aK = function (t) {
            var e = t.getAttribute("data-flip-id");
            return e || t.setAttribute("data-flip-id", (e = "auto-" + am++)), e;
          },
          aZ = function (t) {
            return t.map(function (t) {
              return t.element;
            });
          },
          aQ = function (t, e, n) {
            return t && e.length && n.add(t(aZ(e), n, new a7(e, 0, !0)), 0);
          },
          a$ = function (t, e, n, i, r, s) {
            var o,
              a,
              l,
              u,
              h,
              c,
              p,
              f = t.element,
              d = t.cache,
              g = t.parent,
              m = t.x,
              v = t.y,
              _ = e.width,
              D = e.height,
              y = e.scaleX,
              x = e.scaleY,
              b = e.rotation,
              w = e.bounds,
              C = s && ad && ad(f, "transform"),
              E = t,
              T = e.matrix,
              P = T.e,
              S = T.f,
              F =
                t.bounds.width !== w.width ||
                t.bounds.height !== w.height ||
                t.scaleX !== y ||
                t.scaleY !== x ||
                t.rotation !== b,
              M = !F && t.simple && e.simple && !r;
            return (
              M || !g
                ? ((y = x = 1), (b = o = 0))
                : ((b = aS(
                    Math.atan2(
                      (c = (h = aR(g))
                        .clone()
                        .multiply(
                          e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix
                        )).b,
                      c.a
                    ) * aD
                  )),
                  (o = aS(Math.atan2(c.c, c.d) * aD + b) % 360),
                  (y = Math.sqrt(Math.pow(c.a, 2) + Math.pow(c.b, 2))),
                  (x =
                    Math.sqrt(Math.pow(c.c, 2) + Math.pow(c.d, 2)) *
                    Math.cos(o * ay)),
                  r &&
                    ((r = al(r)[0]),
                    (u = au.getProperty(r)),
                    (p =
                      r.getBBox &&
                      "function" == typeof r.getBBox &&
                      r.getBBox()),
                    (E = {
                      scaleX: u("scaleX"),
                      scaleY: u("scaleY"),
                      width: p
                        ? p.width
                        : Math.ceil(parseFloat(u("width", "px"))),
                      height: p ? p.height : parseFloat(u("height", "px")),
                    })),
                  (d.rotation = b + "deg"),
                  (d.skewX = o + "deg")),
              n
                ? ((y *= _ !== E.width && E.width ? _ / E.width : 1),
                  (x *= D !== E.height && E.height ? D / E.height : 1),
                  (d.scaleX = y),
                  (d.scaleY = x))
                : ((_ = af((_ * y) / E.scaleX, 0)),
                  (D = af((D * x) / E.scaleY, 0)),
                  (f.style.width = _ + "px"),
                  (f.style.height = D + "px")),
              i && aU(f, e.props),
              M || !g
                ? ((m += P - t.matrix.e), (v += S - t.matrix.f))
                : F || g !== e.parent
                ? (d.renderTransform(1, d),
                  (c = sf(r || f, !1, !1, !0)),
                  (a = h.apply({ x: c.e, y: c.f })),
                  (m += (l = h.apply({ x: P, y: S })).x - a.x),
                  (v += l.y - a.y))
                : ((h.e = h.f = 0),
                  (m += (l = h.apply({ x: P - t.matrix.e, y: S - t.matrix.f }))
                    .x),
                  (v += l.y)),
              (m = af(m, 0.02)),
              (v = af(v, 0.02)),
              !s || s instanceof a9
                ? ((d.x = m + "px"), (d.y = v + "px"), d.renderTransform(1, d))
                : C && C.revert(),
              s &&
                ((s.x = m),
                (s.y = v),
                (s.rotation = b),
                (s.skewX = o),
                n
                  ? ((s.scaleX = y), (s.scaleY = x))
                  : ((s.width = _), (s.height = D))),
              s || d
            );
          },
          aJ = function (t, e) {
            return t instanceof a7 ? t : new a7(t, e);
          },
          a1 = function (t, e, n) {
            var i = t.idLookup[n],
              r = t.alt[n];
            return !r.isVisible ||
              ((e.getElementState(r.element) || r).isVisible && i.isVisible)
              ? i
              : r;
          },
          a0 = [],
          a2 = "width,height,overflowX,overflowY".split(","),
          a3 = function (t) {
            if (t !== ag) {
              var e = ap.style,
                n = ap.clientWidth === window.outerWidth,
                i = ap.clientHeight === window.outerHeight,
                r = 4;
              if (t && (n || i)) {
                for (; r--; ) a0[r] = e[a2[r]];
                n &&
                  ((e.width = ap.clientWidth + "px"), (e.overflowY = "hidden")),
                  i &&
                    ((e.height = ap.clientHeight + "px"),
                    (e.overflowX = "hidden")),
                  (ag = t);
              } else if (ag) {
                for (; r--; )
                  a0[r] ? (e[a2[r]] = a0[r]) : e.removeProperty(aA(a2[r]));
                ag = t;
              }
            }
          },
          a5 = function (t, e, n, i) {
            (t instanceof a7 && e instanceof a7) ||
              console.warn("Not a valid state object.");
            var r,
              s,
              o,
              a,
              l,
              u,
              h,
              c,
              p,
              f,
              d,
              g,
              m,
              v,
              _,
              D = (n = n || {}),
              y = D.clearProps,
              x = D.onEnter,
              b = D.onLeave,
              w = D.absolute,
              C = D.absoluteOnLeave,
              E = D.custom,
              T = D.delay,
              P = D.paused,
              S = D.repeat,
              F = D.repeatDelay,
              M = D.yoyo,
              k = D.toggleClass,
              A = D.nested,
              O = D.zIndex,
              B = D.scale,
              L = D.fade,
              R = D.stagger,
              N = D.spin,
              z = D.prune,
              I = ("props" in n ? n : t).props,
              X = aO(n, aM),
              Y = au.timeline({
                delay: T,
                paused: P,
                repeat: S,
                repeatDelay: F,
                yoyo: M,
                data: "isFlip",
              }),
              H = X,
              V = [],
              j = [],
              W = [],
              q = [],
              G = !0 === N ? 1 : N || 0,
              U =
                "function" == typeof N
                  ? N
                  : function () {
                      return G;
                    },
              K = t.interrupted || e.interrupted,
              Z = Y[1 !== i ? "to" : "from"];
            for (o in e.idLookup)
              (u = (g = e.alt[o] ? a1(e, t, o) : e.idLookup[o]).element),
                (d = t.idLookup[o]),
                t.alt[o] &&
                  u === d.element &&
                  (t.alt[o].isVisible || !g.isVisible) &&
                  (d = t.alt[o]),
                d
                  ? ((h = {
                      t: u,
                      b: d,
                      a: g,
                      sd: d.element === u ? 0 : g.isVisible ? 1 : -1,
                    }),
                    W.push(h),
                    h.sd &&
                      (h.sd < 0 && ((h.b = g), (h.a = d)),
                      K && aI(h.b, I ? aw[I] : aT),
                      L &&
                        W.push(
                          (h.swap = {
                            t: d.element,
                            b: h.b,
                            a: h.a,
                            sd: -h.sd,
                            swap: h,
                          })
                        )),
                    (u._flip = d.element._flip = ah ? ah.timeline : Y))
                  : g.isVisible &&
                    (W.push({
                      t: u,
                      b: aO(g, { isVisible: 1 }),
                      a: g,
                      sd: 0,
                      entering: 1,
                    }),
                    (u._flip = ah ? ah.timeline : Y));
            I &&
              (aB[I] || aL(I)).forEach(function (t) {
                return (X[t] = function (e) {
                  return W[e].a.props[t];
                });
              }),
              (W.finalStates = f = []),
              (m = function () {
                for (az(W), a3(!0), l = 0; l < W.length; l++)
                  (v = (h = W[l]).a),
                    (_ = h.b),
                    !z || v.isDifferent(_) || h.entering
                      ? ((u = h.t),
                        A && !(h.sd < 0) && l && (v.matrix = sf(u, !1, !1, !0)),
                        _.isVisible && v.isVisible
                          ? (h.sd < 0
                              ? (a$(
                                  (c = new a9(u, I, t.simple)),
                                  v,
                                  B,
                                  0,
                                  0,
                                  c
                                ),
                                (c.matrix = sf(u, !1, !1, !0)),
                                (c.css = h.b.css),
                                (h.a = v = c),
                                L &&
                                  (u.style.opacity = K ? _.opacity : v.opacity),
                                R && q.push(u))
                              : h.sd > 0 &&
                                L &&
                                (u.style.opacity = K
                                  ? v.opacity - _.opacity
                                  : "0"),
                            a$(v, _, B, I))
                          : _.isVisible !== v.isVisible &&
                            (_.isVisible
                              ? !v.isVisible &&
                                ((_.css = v.css),
                                j.push(_),
                                W.splice(l--, 1),
                                w && A && a$(v, _, B, I))
                              : (v.isVisible && V.push(v), W.splice(l--, 1))),
                        B ||
                          ((u.style.maxWidth =
                            Math.max(v.width, _.width) + "px"),
                          (u.style.maxHeight =
                            Math.max(v.height, _.height) + "px"),
                          (u.style.minWidth =
                            Math.min(v.width, _.width) + "px"),
                          (u.style.minHeight =
                            Math.min(v.height, _.height) + "px")),
                        A && k && u.classList.add(k))
                      : W.splice(l--, 1),
                    f.push(v);
                if (
                  (k &&
                    ((e = f.map(function (t) {
                      return t.element;
                    })),
                    A &&
                      e.forEach(function (t) {
                        return t.classList.remove(k);
                      })),
                  a3(!1),
                  B
                    ? ((X.scaleX = function (t) {
                        return W[t].a.scaleX;
                      }),
                      (X.scaleY = function (t) {
                        return W[t].a.scaleY;
                      }))
                    : ((X.width = function (t) {
                        return W[t].a.width + "px";
                      }),
                      (X.height = function (t) {
                        return W[t].a.height + "px";
                      }),
                      (X.autoRound = n.autoRound || !1)),
                  (X.x = function (t) {
                    return W[t].a.x + "px";
                  }),
                  (X.y = function (t) {
                    return W[t].a.y + "px";
                  }),
                  (X.rotation = function (t) {
                    return W[t].a.rotation + (N ? 360 * U(t, p[t], p) : 0);
                  }),
                  (X.skewX = function (t) {
                    return W[t].a.skewX;
                  }),
                  (p = W.map(function (t) {
                    return t.t;
                  })),
                  (O || 0 === O) &&
                    ((X.modifiers = {
                      zIndex: function () {
                        return O;
                      },
                    }),
                    (X.zIndex = O),
                    (X.immediateRender = !1 !== n.immediateRender)),
                  L &&
                    (X.opacity = function (t) {
                      return W[t].sd < 0
                        ? 0
                        : W[t].sd > 0
                        ? W[t].a.opacity
                        : "+=0";
                    }),
                  q.length)
                ) {
                  R = au.utils.distribute(R);
                  var e,
                    i = p.slice(q.length);
                  X.stagger = function (t, e) {
                    return R(~q.indexOf(e) ? p.indexOf(W[t].swap.t) : t, e, i);
                  };
                }
                if (
                  (aE.forEach(function (t) {
                    return n[t] && Y.eventCallback(t, n[t], n[t + "Params"]);
                  }),
                  E && p.length)
                )
                  for (o in ((H = aO(X, aM)),
                  "scale" in E &&
                    ((E.scaleX = E.scaleY = E.scale), delete E.scale),
                  E))
                    ((s = aO(E[o], ak))[o] = X[o]),
                      !("duration" in s) &&
                        "duration" in X &&
                        (s.duration = X.duration),
                      (s.stagger = X.stagger),
                      Z.call(Y, p, s, 0),
                      delete H[o];
                (p.length || j.length || V.length) &&
                  (k &&
                    Y.add(function () {
                      return aF(e, k, Y._zTime < 0 ? "remove" : "add");
                    }, 0) &&
                    !P &&
                    aF(e, k, "add"),
                  p.length && Z.call(Y, p, H, 0)),
                  aQ(x, V, Y),
                  aQ(b, j, Y);
                var r = ah && ah.timeline;
                r &&
                  (r.add(Y, 0),
                  ah._final.push(function () {
                    return aY(W, !y);
                  })),
                  (a = Y.duration()),
                  Y.call(function () {
                    var t = Y.time() >= a;
                    t && !r && aY(W, !y), k && aF(e, k, t ? "remove" : "add");
                  });
              }),
              C &&
                (w = W.filter(function (t) {
                  return !t.sd && !t.a.isVisible && t.b.isVisible;
                }).map(function (t) {
                  return t.a.element;
                })),
              ah
                ? (w && (r = ah._abs).push.apply(r, aj(W, w)), ah._run.push(m))
                : (w && aW(aj(W, w)), m());
            var Q = ah ? ah.timeline : Y;
            return (
              (Q.revert = function () {
                return a6(Q, 1, 1);
              }),
              Q
            );
          },
          a4 = function t(e) {
            e.vars.onInterrupt &&
              e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
              e.getChildren(!0, !1, !0).forEach(t);
          },
          a6 = function (t, e, n) {
            if (t && 1 > t.progress() && (!t.paused() || n))
              return e && (a4(t), e < 2 && t.progress(1), t.kill()), !0;
          },
          a8 = function (t) {
            for (
              var e,
                n = (t.idLookup = {}),
                i = (t.alt = {}),
                r = t.elementStates,
                s = r.length;
              s--;

            )
              n[(e = r[s]).id] ? (i[e.id] = e) : (n[e.id] = e);
          },
          a7 = (function () {
            function t(t, e, n) {
              if (
                ((this.props = e && e.props),
                (this.simple = !!(e && e.simple)),
                n)
              )
                (this.targets = aZ(t)), (this.elementStates = t), a8(this);
              else {
                this.targets = al(t);
                var i = e && (!1 === e.kill || (e.batch && !e.kill));
                ah && !i && ah._kill.push(this), this.update(i || !!ah);
              }
            }
            var e = t.prototype;
            return (
              (e.update = function (t) {
                var e = this;
                return (
                  (this.elementStates = this.targets.map(function (t) {
                    return new a9(t, e.props, e.simple);
                  })),
                  a8(this),
                  this.interrupt(t),
                  this.recordInlineStyles(),
                  this
                );
              }),
              (e.clear = function () {
                return (
                  (this.targets.length = this.elementStates.length = 0),
                  a8(this),
                  this
                );
              }),
              (e.fit = function (t, e, n) {
                for (
                  var i,
                    r,
                    s = az(this.elementStates.slice(0), !1, !0),
                    o = (t || this).idLookup,
                    a = 0;
                  a < s.length;
                  a++
                )
                  (i = s[a]),
                    n && (i.matrix = sf(i.element, !1, !1, !0)),
                    (r = o[i.id]) && a$(i, r, e, !0, 0, i),
                    (i.matrix = sf(i.element, !1, !1, !0));
                return this;
              }),
              (e.getProperty = function (t, e) {
                var n = this.getElementState(t) || ax;
                return (e in n ? n : n.props || ax)[e];
              }),
              (e.add = function (t) {
                for (
                  var e,
                    n,
                    i,
                    r = t.targets.length,
                    s = this.idLookup,
                    o = this.alt;
                  r--;

                )
                  (i = s[(n = t.elementStates[r]).id]) &&
                  (n.element === i.element ||
                    (o[n.id] && o[n.id].element === n.element))
                    ? ((e = this.elementStates.indexOf(
                        n.element === i.element ? i : o[n.id]
                      )),
                      this.targets.splice(e, 1, t.targets[r]),
                      this.elementStates.splice(e, 1, n))
                    : (this.targets.push(t.targets[r]),
                      this.elementStates.push(n));
                return (
                  t.interrupted && (this.interrupted = !0),
                  t.simple || (this.simple = !1),
                  a8(this),
                  this
                );
              }),
              (e.compare = function (t) {
                var e,
                  n,
                  i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  u = t.idLookup,
                  h = this.idLookup,
                  c = [],
                  p = [],
                  f = [],
                  d = [],
                  g = [],
                  m = t.alt,
                  v = this.alt,
                  _ = function (t, e, n) {
                    return (
                      (t.isVisible !== e.isVisible
                        ? t.isVisible
                          ? f
                          : d
                        : t.isVisible
                        ? p
                        : c
                      ).push(n) && g.push(n)
                    );
                  },
                  D = function (t, e, n) {
                    return 0 > g.indexOf(n) && _(t, e, n);
                  };
                for (i in u)
                  (s = m[i]),
                    (o = v[i]),
                    (r = (e = s ? a1(t, this, i) : u[i]).element),
                    (n = h[i]),
                    o
                      ? ((l =
                          n.isVisible || (!o.isVisible && r === n.element)
                            ? n
                            : o),
                        (a =
                          !s ||
                          e.isVisible ||
                          s.isVisible ||
                          l.element !== s.element
                            ? e
                            : s).isVisible &&
                        l.isVisible &&
                        a.element !== l.element
                          ? ((a.isDifferent(l) ? p : c).push(
                              a.element,
                              l.element
                            ),
                            g.push(a.element, l.element))
                          : _(a, l, a.element),
                        s && a.element === s.element && (s = u[i]),
                        D(a.element !== n.element && s ? s : a, n, n.element),
                        D(s && s.element === o.element ? s : a, o, o.element),
                        s && D(s, o.element === s.element ? o : n, s.element))
                      : (n
                          ? n.isDifferent(e)
                            ? _(e, n, r)
                            : c.push(r)
                          : f.push(r),
                        s && D(s, n, s.element));
                for (i in h)
                  !u[i] && (d.push(h[i].element), v[i] && d.push(v[i].element));
                return { changed: p, unchanged: c, enter: f, leave: d };
              }),
              (e.recordInlineStyles = function () {
                for (
                  var t = aw[this.props] || aT, e = this.elementStates.length;
                  e--;

                )
                  aI(this.elementStates[e], t);
              }),
              (e.interrupt = function (t) {
                var e = this,
                  n = [];
                this.targets.forEach(function (i) {
                  var r = i._flip,
                    s = a6(r, t ? 0 : 1);
                  t &&
                    s &&
                    0 > n.indexOf(r) &&
                    r.add(function () {
                      return e.updateVisibility();
                    }),
                    s && n.push(r);
                }),
                  !t && n.length && this.updateVisibility(),
                  this.interrupted || (this.interrupted = !!n.length);
              }),
              (e.updateVisibility = function () {
                this.elementStates.forEach(function (t) {
                  var e = t.element.getBoundingClientRect();
                  (t.isVisible = !!(e.width || e.height || e.top || e.left)),
                    (t.uncache = 1);
                });
              }),
              (e.getElementState = function (t) {
                return this.elementStates[this.targets.indexOf(aP(t))];
              }),
              (e.makeAbsolute = function () {
                return az(this.elementStates.slice(0), !0, !0).map(aV);
              }),
              t
            );
          })(),
          a9 = (function () {
            function t(t, e, n) {
              (this.element = t), this.update(e, n);
            }
            var e = t.prototype;
            return (
              (e.isDifferent = function (t) {
                var e = this.bounds,
                  n = t.bounds;
                return (
                  e.top !== n.top ||
                  e.left !== n.left ||
                  e.width !== n.width ||
                  e.height !== n.height ||
                  !this.matrix.equals(t.matrix) ||
                  this.opacity !== t.opacity ||
                  (this.props &&
                    t.props &&
                    JSON.stringify(this.props) !== JSON.stringify(t.props))
                );
              }),
              (e.update = function (t, e) {
                var n = this.element,
                  i = au.getProperty(n),
                  r = au.core.getCache(n),
                  s = n.getBoundingClientRect(),
                  o =
                    n.getBBox &&
                    "function" == typeof n.getBBox &&
                    "svg" !== n.nodeName.toLowerCase() &&
                    n.getBBox(),
                  a = e
                    ? new sp(1, 0, 0, 1, s.left + ss(), s.top + sr())
                    : sf(n, !1, !1, !0);
                (this.getProp = i),
                  (this.element = n),
                  (this.id = aK(n)),
                  (this.matrix = a),
                  (this.cache = r),
                  (this.bounds = s),
                  (this.isVisible = !!(s.width || s.height || s.left || s.top)),
                  (this.display = i("display")),
                  (this.position = i("position")),
                  (this.parent = n.parentNode),
                  (this.x = i("x")),
                  (this.y = i("y")),
                  (this.scaleX = r.scaleX),
                  (this.scaleY = r.scaleY),
                  (this.rotation = i("rotation")),
                  (this.skewX = i("skewX")),
                  (this.opacity = i("opacity")),
                  (this.width = o ? o.width : af(i("width", "px"), 0.04)),
                  (this.height = o ? o.height : af(i("height", "px"), 0.04)),
                  t && aG(this, aB[t] || aL(t)),
                  (this.ctm =
                    n.getCTM &&
                    "svg" === n.nodeName.toLowerCase() &&
                    su(n).inverse()),
                  (this.simple =
                    e ||
                    (1 === aS(a.a) && !aS(a.b) && !aS(a.c) && 1 === aS(a.d))),
                  (this.uncache = 0);
              }),
              t
            );
          })(),
          lt = (function () {
            function t(t, e) {
              (this.vars = t),
                (this.batch = e),
                (this.states = []),
                (this.timeline = e.timeline);
            }
            var e = t.prototype;
            return (
              (e.getStateById = function (t) {
                for (var e = this.states.length; e--; )
                  if (this.states[e].idLookup[t]) return this.states[e];
              }),
              (e.kill = function () {
                this.batch.remove(this);
              }),
              t
            );
          })(),
          le = (function () {
            function t(t) {
              (this.id = t),
                (this.actions = []),
                (this._kill = []),
                (this._final = []),
                (this._abs = []),
                (this._run = []),
                (this.data = {}),
                (this.state = new a7()),
                (this.timeline = au.timeline());
            }
            var e = t.prototype;
            return (
              (e.add = function (t) {
                var e = this.actions.filter(function (e) {
                  return e.vars === t;
                });
                return e.length
                  ? e[0]
                  : ((e = new lt(
                      "function" == typeof t ? { animate: t } : t,
                      this
                    )),
                    this.actions.push(e),
                    e);
              }),
              (e.remove = function (t) {
                var e = this.actions.indexOf(t);
                return e >= 0 && this.actions.splice(e, 1), this;
              }),
              (e.getState = function (t) {
                var e = this,
                  n = ah,
                  i = ac;
                return (
                  (ah = this),
                  this.state.clear(),
                  (this._kill.length = 0),
                  this.actions.forEach(function (n) {
                    n.vars.getState &&
                      ((n.states.length = 0),
                      (ac = n),
                      (n.state = n.vars.getState(n))),
                      t &&
                        n.states.forEach(function (t) {
                          return e.state.add(t);
                        });
                  }),
                  (ac = i),
                  (ah = n),
                  this.killConflicts(),
                  this
                );
              }),
              (e.animate = function () {
                var t,
                  e,
                  n = this,
                  i = ah,
                  r = this.timeline,
                  s = this.actions.length;
                for (
                  ah = this,
                    r.clear(),
                    this._abs.length =
                      this._final.length =
                      this._run.length =
                        0,
                    this.actions.forEach(function (t) {
                      t.vars.animate && t.vars.animate(t);
                      var e,
                        n,
                        i = t.vars.onEnter,
                        r = t.vars.onLeave,
                        s = t.targets;
                      s &&
                        s.length &&
                        (i || r) &&
                        ((e = new a7()),
                        t.states.forEach(function (t) {
                          return e.add(t);
                        }),
                        (n = e.compare(ln.getState(s))).enter.length &&
                          i &&
                          i(n.enter),
                        n.leave.length && r && r(n.leave));
                    }),
                    aW(this._abs),
                    this._run.forEach(function (t) {
                      return t();
                    }),
                    e = r.duration(),
                    t = this._final.slice(0),
                    r.add(function () {
                      e <= r.time() &&
                        (t.forEach(function (t) {
                          return t();
                        }),
                        av(n, "onComplete"));
                    }),
                    ah = i;
                  s--;

                )
                  this.actions[s].vars.once && this.actions[s].kill();
                return av(this, "onStart"), r.restart(), this;
              }),
              (e.loadState = function (t) {
                t ||
                  (t = function () {
                    return 0;
                  });
                var e = [];
                return (
                  this.actions.forEach(function (n) {
                    if (n.vars.loadState) {
                      var i,
                        r = function r(s) {
                          s && (n.targets = s),
                            ~(i = e.indexOf(r)) &&
                              (e.splice(i, 1), e.length || t());
                        };
                      e.push(r), n.vars.loadState(r);
                    }
                  }),
                  e.length || t(),
                  this
                );
              }),
              (e.setState = function () {
                return (
                  this.actions.forEach(function (t) {
                    return (t.targets = t.vars.setState && t.vars.setState(t));
                  }),
                  this
                );
              }),
              (e.killConflicts = function (t) {
                return (
                  this.state.interrupt(t),
                  this._kill.forEach(function (e) {
                    return e.interrupt(t);
                  }),
                  this
                );
              }),
              (e.run = function (t, e) {
                var n = this;
                return (
                  this !== ah &&
                    (t || this.getState(e),
                    this.loadState(function () {
                      n._killed || (n.setState(), n.animate());
                    })),
                  this
                );
              }),
              (e.clear = function (t) {
                this.state.clear(), t || (this.actions.length = 0);
              }),
              (e.getStateById = function (t) {
                for (var e, n = this.actions.length; n--; )
                  if ((e = this.actions[n].getStateById(t))) return e;
                return this.state.idLookup[t] && this.state;
              }),
              (e.kill = function () {
                (this._killed = 1), this.clear(), delete a_[this.id];
              }),
              t
            );
          })(),
          ln = (function () {
            function t() {}
            return (
              (t.getState = function (e, n) {
                var i = aJ(e, n);
                return (
                  ac && ac.states.push(i),
                  n && n.batch && t.batch(n.batch).state.add(i),
                  i
                );
              }),
              (t.from = function (t, e) {
                return (
                  "clearProps" in (e = e || {}) || (e.clearProps = !0),
                  a5(
                    t,
                    aJ(e.targets || t.targets, {
                      props: e.props || t.props,
                      simple: e.simple,
                      kill: !!e.kill,
                    }),
                    e,
                    -1
                  )
                );
              }),
              (t.to = function (t, e) {
                return a5(
                  t,
                  aJ(e.targets || t.targets, {
                    props: e.props || t.props,
                    simple: e.simple,
                    kill: !!e.kill,
                  }),
                  e,
                  1
                );
              }),
              (t.fromTo = function (t, e, n) {
                return a5(t, e, n);
              }),
              (t.fit = function (t, e, n) {
                var i = n ? aO(n, ak) : {},
                  r = n || i,
                  s = r.absolute,
                  o = r.scale,
                  a = r.getVars,
                  l = r.props,
                  u = r.runBackwards,
                  h = r.onComplete,
                  c = r.simple,
                  p = n && n.fitChild && aP(n.fitChild),
                  f = aq(e, l, c, t),
                  d = aq(t, 0, c, f),
                  g = l ? aw[l] : aT,
                  m = au.context();
                return (
                  l && aU(i, f.props),
                  aI(d, g),
                  u &&
                    ("immediateRender" in i || (i.immediateRender = !0),
                    (i.onComplete = function () {
                      aX(d), h && h.apply(this, arguments);
                    })),
                  s && aV(d, f),
                  (i = a$(d, f, o || p, l, p, i.duration || a ? i : 0)),
                  m &&
                    !a &&
                    m.add(function () {
                      return function () {
                        return aX(d);
                      };
                    }),
                  a ? i : i.duration ? au.to(d.element, i) : null
                );
              }),
              (t.makeAbsolute = function (t, e) {
                return (t instanceof a7 ? t : new a7(t, e)).makeAbsolute();
              }),
              (t.batch = function (t) {
                return t || (t = "default"), a_[t] || (a_[t] = new le(t));
              }),
              (t.killFlipsOf = function (t, e) {
                (t instanceof a7 ? t.targets : al(t)).forEach(function (t) {
                  return t && a6(t._flip, !1 !== e ? 1 : 2);
                });
              }),
              (t.isFlipping = function (e) {
                var n = t.getByTarget(e);
                return !!n && n.isActive();
              }),
              (t.getByTarget = function (t) {
                return (aP(t) || ax)._flip;
              }),
              (t.getElementState = function (t, e) {
                return new a9(aP(t), e);
              }),
              (t.convertCoordinates = function (t, e, n) {
                var i = sf(e, !0, !0).multiply(sf(t));
                return n ? i.apply(n) : i;
              }),
              (t.register = function (t) {
                if ((ap = "undefined" != typeof document && document.body)) {
                  (au = t),
                    st(ap),
                    (al = au.utils.toArray),
                    (ad = au.core.getStyleSaver);
                  var e = au.utils.snap(0.1);
                  af = function (t, n) {
                    return e(parseFloat(t) + n);
                  };
                }
              }),
              t
            );
          })();
        (ln.version = "3.12.5"), window.gsap && window.gsap.registerPlugin(ln);
        var li,
          lr,
          ls,
          lo,
          la,
          ll,
          lu = "x,translateX,left,marginLeft,xPercent".split(","),
          lh = "y,translateY,top,marginTop,yPercent".split(","),
          lc = Math.PI / 180,
          lp = function (t, e, n, i) {
            for (var r = e.length, s = 2 === i ? 0 : i, o = 0; o < r; o++)
              (t[s] = parseFloat(e[o][n])), 2 === i && (t[s + 1] = 0), (s += 2);
            return t;
          },
          lf = function (t, e, n) {
            return parseFloat(t._gsap.get(t, e, n || "px")) || 0;
          },
          ld = function (t) {
            var e,
              n = t[0],
              i = t[1];
            for (e = 2; e < t.length; e += 2)
              (n = t[e] += n), (i = t[e + 1] += i);
          },
          lg = function (t, e, n, i, r, s, o, a, l) {
            return (
              "cubic" === o.type
                ? (e = [e])
                : (!1 !== o.fromCurrent &&
                    e.unshift(lf(n, i, a), r ? lf(n, r, l) : 0),
                  o.relative && ld(e),
                  (e = [
                    (r
                      ? rI
                      : function (t, e) {
                          void 0 === e && (e = 1);
                          for (
                            var n = t[0], i = 0, r = [n, 0], s = 2;
                            s < t.length;
                            s += 2
                          )
                            r.push(
                              n,
                              i,
                              t[s],
                              (i = ((t[s] - n) * e) / 2),
                              (n = t[s]),
                              -i
                            );
                          return r;
                        })(e, o.curviness),
                  ])),
              (e = s(ly(e, n, o))),
              lx(t, n, i, e, "x", a),
              r && lx(t, n, r, e, "y", l),
              rA(e, o.resolution || (0 === o.curviness ? 20 : 12))
            );
          },
          lm = function (t) {
            return t;
          },
          lv = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
          l_ = function (t, e, n) {
            var i,
              r = sf(t),
              s = 0,
              o = 0;
            return (
              "svg" === (t.tagName + "").toLowerCase()
                ? (i = t.viewBox.baseVal).width ||
                  (i = {
                    width: +t.getAttribute("width"),
                    height: +t.getAttribute("height"),
                  })
                : (i = e && t.getBBox && t.getBBox()),
              e &&
                "auto" !== e &&
                ((s = e.push ? e[0] * (i ? i.width : t.offsetWidth || 0) : e.x),
                (o = e.push
                  ? e[1] * (i ? i.height : t.offsetHeight || 0)
                  : e.y)),
              n.apply(s || o ? r.apply({ x: s, y: o }) : { x: r.e, y: r.f })
            );
          },
          lD = function (t, e, n, i) {
            var r,
              s = sf(t.parentNode, !0, !0),
              o = s.clone().multiply(sf(e)),
              a = l_(t, n, s),
              l = l_(e, i, s),
              u = l.x,
              h = l.y;
            return (
              (o.e = o.f = 0),
              "auto" === i &&
                e.getTotalLength &&
                "path" === e.tagName.toLowerCase() &&
                ((r = e.getAttribute("d").match(lv) || []),
                (u += (r = o.apply({ x: +r[0], y: +r[1] })).x),
                (h += r.y)),
              r && ((u -= (r = o.apply(e.getBBox())).x), (h -= r.y)),
              (o.e = u - a.x),
              (o.f = h - a.y),
              o
            );
          },
          ly = function (t, e, n) {
            var i,
              r,
              s,
              o = n.align,
              a = n.matrix,
              l = n.offsetX,
              u = n.offsetY,
              h = n.alignOrigin,
              c = t[0][0],
              p = t[0][1],
              f = lf(e, "x"),
              d = lf(e, "y");
            return t && t.length
              ? (o &&
                  ("self" === o || (i = lo(o)[0] || e) === e
                    ? rR(t, 1, 0, 0, 1, f - c, d - p)
                    : (h && !1 !== h[2]
                        ? li.set(e, {
                            transformOrigin:
                              100 * h[0] + "% " + 100 * h[1] + "%",
                          })
                        : (h = [
                            -(lf(e, "xPercent") / 100),
                            -(lf(e, "yPercent") / 100),
                          ]),
                      (s = (r = lD(e, i, h, "auto")).apply({ x: c, y: p })),
                      rR(
                        t,
                        r.a,
                        r.b,
                        r.c,
                        r.d,
                        f + r.e - (s.x - r.e),
                        d + r.f - (s.y - r.f)
                      ))),
                a
                  ? rR(t, a.a, a.b, a.c, a.d, a.e, a.f)
                  : (l || u) && rR(t, 1, 0, 0, 1, l || 0, u || 0),
                t)
              : rw("M0,0L0,0");
          },
          lx = function (t, e, n, i, r, s) {
            var o = e._gsap,
              a = o.harness,
              l = a && a.aliases && a.aliases[n],
              u = l && 0 > l.indexOf(",") ? l : n,
              h = (t._pt = new lr(t._pt, e, u, 0, 0, lm, 0, o.set(e, u, t)));
            (h.u = ls(o.get(e, u, s)) || 0),
              (h.path = i),
              (h.pp = r),
              t._props.push(u);
          },
          lb = {
            version: "3.12.5",
            name: "motionPath",
            register: function (t, e, n) {
              (ls = (li = t).utils.getUnit),
                (lo = li.utils.toArray),
                (la = li.core.getStyleSaver),
                (ll = li.core.reverting || function () {}),
                (lr = n);
            },
            init: function (t, e, n) {
              if (!li)
                return (
                  console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),
                  !1
                );
              ("object" == typeof e && !e.style && e.path) || (e = { path: e });
              var i,
                r,
                s,
                o,
                a = [],
                l = e,
                u = l.path,
                h = l.autoRotate,
                c = l.unitX,
                p = l.unitY,
                f = l.x,
                d = l.y,
                g = u[0],
                m =
                  ((i = e.start),
                  (r = "end" in e ? e.end : 1),
                  function (t) {
                    return i || 1 !== r ? rk(t, i, r) : t;
                  });
              if (
                ((this.rawPaths = a),
                (this.target = t),
                (this.tween = n),
                (this.styles = la && la(t, "transform")),
                (this.rotate = h || 0 === h) &&
                  ((this.rOffset = parseFloat(h) || 0),
                  (this.radians = !!e.useRadians),
                  (this.rProp = e.rotation || "rotation"),
                  (this.rSet = t._gsap.set(t, this.rProp, this)),
                  (this.ru = ls(t._gsap.get(t, this.rProp)) || 0)),
                !Array.isArray(u) || "closed" in u || "number" == typeof g)
              )
                rA((s = m(ly(rw(e.path), t, e))), e.resolution),
                  a.push(s),
                  lx(this, t, e.x || "x", s, "x", e.unitX || "px"),
                  lx(this, t, e.y || "y", s, "y", e.unitY || "px");
              else {
                for (o in g)
                  !f && ~lu.indexOf(o)
                    ? (f = o)
                    : !d && ~lh.indexOf(o) && (d = o);
                for (o in (f && d
                  ? a.push(
                      lg(
                        this,
                        lp(lp([], u, f, 0), u, d, 1),
                        t,
                        f,
                        d,
                        m,
                        e,
                        c || ls(u[0][f]),
                        p || ls(u[0][d])
                      )
                    )
                  : (f = d = 0),
                g))
                  o !== f &&
                    o !== d &&
                    a.push(
                      lg(this, lp([], u, o, 2), t, o, 0, m, e, ls(u[0][o]))
                    );
              }
            },
            render: function (t, e) {
              var n = e.rawPaths,
                i = n.length,
                r = e._pt;
              if (e.tween._time || !ll()) {
                for (t > 1 ? (t = 1) : t < 0 && (t = 0); i--; )
                  rL(n[i], t, !i && e.rotate, n[i]);
                for (; r; )
                  r.set(r.t, r.p, r.path[r.pp] + r.u, r.d, t), (r = r._next);
                e.rotate &&
                  e.rSet(
                    e.target,
                    e.rProp,
                    n[0].angle * (e.radians ? lc : 1) + e.rOffset + e.ru,
                    e,
                    t
                  );
              } else e.styles.revert();
            },
            getLength: function (t) {
              return rA(rw(t)).totalLength;
            },
            sliceRawPath: rk,
            getRawPath: rw,
            pointsToSegment: rI,
            stringToRawPath: rN,
            rawPathToString: rY,
            transformRawPath: rR,
            getGlobalMatrix: sf,
            getPositionOnPath: rL,
            cacheRawPathMeasurements: rA,
            convertToPath: function (t, e) {
              return lo(t).map(function (t) {
                return rF(t, !1 !== e);
              });
            },
            convertCoordinates: function (t, e, n) {
              var i = sf(e, !0, !0).multiply(sf(t));
              return n ? i.apply(n) : i;
            },
            getAlignMatrix: lD,
            getRelativePosition: function (t, e, n, i) {
              var r = lD(t, e, n, i);
              return { x: r.e, y: r.f };
            },
            arrayToRawPath: function (t, e) {
              var n = lp(
                lp([], t, (e = e || {}).x || "x", 0),
                t,
                e.y || "y",
                1
              );
              return (
                e.relative && ld(n),
                ["cubic" === e.type ? n : rI(n, e.curviness)]
              );
            },
          };
        (li || ((li = window.gsap) && li.registerPlugin && li)) &&
          li.registerPlugin(lb);
        var lw,
          lC,
          lE,
          lT,
          lP,
          lS,
          lF,
          lM,
          lk,
          lA,
          lO,
          lB,
          lL,
          lR = function () {
            return lw || ((lw = window.gsap) && lw.registerPlugin && lw);
          },
          lN = 1,
          lz = [];
        (t._scrollers = []), (t._proxies = []);
        var lI = Date.now,
          lX = function (t, e) {
            return e;
          },
          lY = function () {
            var e = lk.core,
              n = e.bridge || {},
              i = e._scrollers,
              r = e._proxies;
            i.push.apply(i, t._scrollers),
              r.push.apply(r, t._proxies),
              (t._scrollers = i),
              (t._proxies = r),
              (lX = function (t, e) {
                return n[t](e);
              });
          },
          lH = function (e, n) {
            return (
              ~t._proxies.indexOf(e) && t._proxies[t._proxies.indexOf(e) + 1][n]
            );
          },
          lV = function (t) {
            return !!~lA.indexOf(t);
          },
          lj = function (t, e, n, i, r) {
            return t.addEventListener(e, n, {
              passive: !1 !== i,
              capture: !!r,
            });
          },
          lW = function (t, e, n, i) {
            return t.removeEventListener(e, n, !!i);
          },
          lq = "scrollLeft",
          lG = "scrollTop",
          lU = function () {
            return (lO && lO.isPressed) || t._scrollers.cache++;
          },
          lK = function (e, n) {
            var i = function i(r) {
              if (r || 0 === r) {
                lN && (lE.history.scrollRestoration = "manual");
                var s = lO && lO.isPressed;
                e((r = i.v = Math.round(r) || (lO && lO.iOS ? 1 : 0))),
                  (i.cacheID = t._scrollers.cache),
                  s && lX("ss", r);
              } else
                (n || t._scrollers.cache !== i.cacheID || lX("ref")) &&
                  ((i.cacheID = t._scrollers.cache), (i.v = e()));
              return i.v + i.offset;
            };
            return (i.offset = 0), e && i;
          },
          lZ = {
            s: lq,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: lK(function (t) {
              return arguments.length
                ? lE.scrollTo(t, lQ.sc())
                : lE.pageXOffset || lT[lq] || lP[lq] || lS[lq] || 0;
            }),
          },
          lQ = {
            s: lG,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: lZ,
            sc: lK(function (t) {
              return arguments.length
                ? lE.scrollTo(lZ.sc(), t)
                : lE.pageYOffset || lT[lG] || lP[lG] || lS[lG] || 0;
            }),
          },
          l$ = function (t, e) {
            return (
              ((e && e._ctx && e._ctx.selector) || lw.utils.toArray)(t)[0] ||
              ("string" == typeof t && !1 !== lw.config().nullTargetWarn
                ? console.warn("Element not found:", t)
                : null)
            );
          },
          lJ = function (e, n) {
            var i = n.s,
              r = n.sc;
            lV(e) && (e = lT.scrollingElement || lP);
            var s = t._scrollers.indexOf(e),
              o = r === lQ.sc ? 1 : 2;
            ~s || (s = t._scrollers.push(e) - 1),
              t._scrollers[s + o] || lj(e, "scroll", lU);
            var a = t._scrollers[s + o],
              l =
                a ||
                (t._scrollers[s + o] =
                  lK(lH(e, i), !0) ||
                  (lV(e)
                    ? r
                    : lK(function (t) {
                        return arguments.length ? (e[i] = t) : e[i];
                      })));
            return (
              (l.target = e),
              a ||
                (l.smooth = "smooth" === lw.getProperty(e, "scrollBehavior")),
              l
            );
          },
          l1 = function (t, e, n) {
            var i = t,
              r = t,
              s = lI(),
              o = s,
              a = e || 50,
              l = Math.max(500, 3 * a),
              u = function (t, e) {
                var l = lI();
                e || l - s > a
                  ? ((r = i), (i = t), (o = s), (s = l))
                  : n
                  ? (i += t)
                  : (i = r + ((t - r) / (l - o)) * (s - o));
              };
            return {
              update: u,
              reset: function () {
                (r = i = n ? 0 : i), (o = s = 0);
              },
              getVelocity: function (t) {
                var e = o,
                  a = r,
                  h = lI();
                return (
                  (t || 0 === t) && t !== i && u(t),
                  s === o || h - o > l
                    ? 0
                    : ((i + (n ? a : -a)) / ((n ? h : s) - e)) * 1e3
                );
              },
            };
          },
          l0 = function (t, e) {
            return (
              e && !t._gsapAllow && t.preventDefault(),
              t.changedTouches ? t.changedTouches[0] : t
            );
          },
          l2 = function (t) {
            var e = Math.max.apply(Math, t),
              n = Math.min.apply(Math, t);
            return Math.abs(e) >= Math.abs(n) ? e : n;
          },
          l3 = function () {
            (lk = lw.core.globals().ScrollTrigger) && lk.core && lY();
          },
          l5 = function (t) {
            return (
              (lw = t || lR()),
              !lC &&
                lw &&
                "undefined" != typeof document &&
                document.body &&
                ((lE = window),
                (lP = (lT = document).documentElement),
                (lS = lT.body),
                (lA = [lE, lT, lP, lS]),
                lw.utils.clamp,
                (lL = lw.core.context || function () {}),
                (lM = "onpointerenter" in lS ? "pointer" : "mouse"),
                (lF = l4.isTouch =
                  lE.matchMedia &&
                  lE.matchMedia("(hover: none), (pointer: coarse)").matches
                    ? 1
                    : "ontouchstart" in lE ||
                      navigator.maxTouchPoints > 0 ||
                      navigator.msMaxTouchPoints > 0
                    ? 2
                    : 0),
                (lB = l4.eventTypes =
                  (
                    "ontouchstart" in lP
                      ? "touchstart,touchmove,touchcancel,touchend"
                      : "onpointerdown" in lP
                      ? "pointerdown,pointermove,pointercancel,pointerup"
                      : "mousedown,mousemove,mouseup,mouseup"
                  ).split(",")),
                setTimeout(function () {
                  return (lN = 0);
                }, 500),
                l3(),
                (lC = 1)),
              lC
            );
          };
        (lZ.op = lQ), (t._scrollers.cache = 0);
        var l4 = (function () {
          function t(t) {
            this.init(t);
          }
          return (
            (t.prototype.init = function (t) {
              lC ||
                l5(lw) ||
                console.warn("Please gsap.registerPlugin(Observer)"),
                lk || l3();
              var e = t.tolerance,
                n = t.dragMinimum,
                i = t.type,
                r = t.target,
                s = t.lineHeight,
                o = t.debounce,
                a = t.preventDefault,
                l = t.onStop,
                u = t.onStopDelay,
                h = t.ignore,
                c = t.wheelSpeed,
                p = t.event,
                f = t.onDragStart,
                d = t.onDragEnd,
                g = t.onDrag,
                m = t.onPress,
                v = t.onRelease,
                _ = t.onRight,
                D = t.onLeft,
                y = t.onUp,
                x = t.onDown,
                b = t.onChangeX,
                w = t.onChangeY,
                C = t.onChange,
                E = t.onToggleX,
                T = t.onToggleY,
                P = t.onHover,
                S = t.onHoverEnd,
                F = t.onMove,
                M = t.ignoreCheck,
                k = t.isNormalizer,
                A = t.onGestureStart,
                O = t.onGestureEnd,
                B = t.onWheel,
                L = t.onEnable,
                R = t.onDisable,
                N = t.onClick,
                z = t.scrollSpeed,
                I = t.capture,
                X = t.allowClicks,
                Y = t.lockAxis,
                H = t.onLockAxis;
              (this.target = r = l$(r) || lP),
                (this.vars = t),
                h && (h = lw.utils.toArray(h)),
                (e = e || 1e-9),
                (n = n || 0),
                (c = c || 1),
                (z = z || 1),
                (i = i || "wheel,touch,pointer"),
                (o = !1 !== o),
                s || (s = parseFloat(lE.getComputedStyle(lS).lineHeight) || 22);
              var V,
                j,
                W,
                q,
                G,
                U,
                K,
                Z = this,
                Q = 0,
                $ = 0,
                J = t.passive || !a,
                tt = lJ(r, lZ),
                te = lJ(r, lQ),
                tn = tt(),
                ti = te(),
                tr =
                  ~i.indexOf("touch") &&
                  !~i.indexOf("pointer") &&
                  "pointerdown" === lB[0],
                ts = lV(r),
                to = r.ownerDocument || lT,
                ta = [0, 0, 0],
                tl = [0, 0, 0],
                tu = 0,
                th = function () {
                  return (tu = lI());
                },
                tc = function (t, e) {
                  return (
                    ((Z.event = t) && h && ~h.indexOf(t.target)) ||
                    (e && tr && "touch" !== t.pointerType) ||
                    (M && M(t, e))
                  );
                },
                tp = function () {
                  var t = (Z.deltaX = l2(ta)),
                    n = (Z.deltaY = l2(tl)),
                    i = Math.abs(t) >= e,
                    r = Math.abs(n) >= e;
                  C && (i || r) && C(Z, t, n, ta, tl),
                    i &&
                      (_ && Z.deltaX > 0 && _(Z),
                      D && Z.deltaX < 0 && D(Z),
                      b && b(Z),
                      E && Z.deltaX < 0 != Q < 0 && E(Z),
                      (Q = Z.deltaX),
                      (ta[0] = ta[1] = ta[2] = 0)),
                    r &&
                      (x && Z.deltaY > 0 && x(Z),
                      y && Z.deltaY < 0 && y(Z),
                      w && w(Z),
                      T && Z.deltaY < 0 != $ < 0 && T(Z),
                      ($ = Z.deltaY),
                      (tl[0] = tl[1] = tl[2] = 0)),
                    (q || W) && (F && F(Z), W && (g(Z), (W = !1)), (q = !1)),
                    U && ((U = !1), 1) && H && H(Z),
                    G && (B(Z), (G = !1)),
                    (V = 0);
                },
                tf = function (t, e, n) {
                  (ta[n] += t),
                    (tl[n] += e),
                    Z._vx.update(t),
                    Z._vy.update(e),
                    o ? V || (V = requestAnimationFrame(tp)) : tp();
                },
                td = function (t, e) {
                  Y &&
                    !K &&
                    ((Z.axis = K = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                    (U = !0)),
                    "y" !== K && ((ta[2] += t), Z._vx.update(t, !0)),
                    "x" !== K && ((tl[2] += e), Z._vy.update(e, !0)),
                    o ? V || (V = requestAnimationFrame(tp)) : tp();
                },
                tg = function (t) {
                  if (!tc(t, 1)) {
                    var e = (t = l0(t, a)).clientX,
                      i = t.clientY,
                      r = e - Z.x,
                      s = i - Z.y,
                      o = Z.isDragging;
                    (Z.x = e),
                      (Z.y = i),
                      (o ||
                        Math.abs(Z.startX - e) >= n ||
                        Math.abs(Z.startY - i) >= n) &&
                        (g && (W = !0),
                        o || (Z.isDragging = !0),
                        td(r, s),
                        o || (f && f(Z)));
                  }
                },
                tm = (Z.onPress = function (t) {
                  tc(t, 1) ||
                    (t && t.button) ||
                    ((Z.axis = K = null),
                    j.pause(),
                    (Z.isPressed = !0),
                    (t = l0(t)),
                    (Q = $ = 0),
                    (Z.startX = Z.x = t.clientX),
                    (Z.startY = Z.y = t.clientY),
                    Z._vx.reset(),
                    Z._vy.reset(),
                    lj(k ? r : to, lB[1], tg, J, !0),
                    (Z.deltaX = Z.deltaY = 0),
                    m && m(Z));
                }),
                tv = (Z.onRelease = function (t) {
                  if (!tc(t, 1)) {
                    lW(k ? r : to, lB[1], tg, !0);
                    var e = !isNaN(Z.y - Z.startY),
                      n = Z.isDragging,
                      i =
                        n &&
                        (Math.abs(Z.x - Z.startX) > 3 ||
                          Math.abs(Z.y - Z.startY) > 3),
                      s = l0(t);
                    !i &&
                      e &&
                      (Z._vx.reset(),
                      Z._vy.reset(),
                      a &&
                        X &&
                        lw.delayedCall(0.08, function () {
                          if (lI() - tu > 300 && !t.defaultPrevented) {
                            if (t.target.click) t.target.click();
                            else if (to.createEvent) {
                              var e = to.createEvent("MouseEvents");
                              e.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                lE,
                                1,
                                s.screenX,
                                s.screenY,
                                s.clientX,
                                s.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                                t.target.dispatchEvent(e);
                            }
                          }
                        })),
                      (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
                      l && n && !k && j.restart(!0),
                      d && n && d(Z),
                      v && v(Z, i);
                  }
                }),
                t_ = function (t) {
                  return (
                    t.touches &&
                    t.touches.length > 1 &&
                    (Z.isGesturing = !0) &&
                    A(t, Z.isDragging)
                  );
                },
                tD = function () {
                  return (Z.isGesturing = !1), O(Z);
                },
                ty = function (t) {
                  if (!tc(t)) {
                    var e = tt(),
                      n = te();
                    tf((e - tn) * z, (n - ti) * z, 1),
                      (tn = e),
                      (ti = n),
                      l && j.restart(!0);
                  }
                },
                tx = function (t) {
                  if (!tc(t)) {
                    (t = l0(t, a)), B && (G = !0);
                    var e =
                      (1 === t.deltaMode
                        ? s
                        : 2 === t.deltaMode
                        ? lE.innerHeight
                        : 1) * c;
                    tf(t.deltaX * e, t.deltaY * e, 0), l && !k && j.restart(!0);
                  }
                },
                tb = function (t) {
                  if (!tc(t)) {
                    var e = t.clientX,
                      n = t.clientY,
                      i = e - Z.x,
                      r = n - Z.y;
                    (Z.x = e),
                      (Z.y = n),
                      (q = !0),
                      l && j.restart(!0),
                      (i || r) && td(i, r);
                  }
                },
                tw = function (t) {
                  (Z.event = t), P(Z);
                },
                tC = function (t) {
                  (Z.event = t), S(Z);
                },
                tE = function (t) {
                  return tc(t) || (l0(t, a) && N(Z));
                };
              (j = Z._dc =
                lw
                  .delayedCall(u || 0.25, function () {
                    Z._vx.reset(), Z._vy.reset(), j.pause(), l && l(Z);
                  })
                  .pause()),
                (Z.deltaX = Z.deltaY = 0),
                (Z._vx = l1(0, 50, !0)),
                (Z._vy = l1(0, 50, !0)),
                (Z.scrollX = tt),
                (Z.scrollY = te),
                (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
                lL(this),
                (Z.enable = function (t) {
                  return (
                    !Z.isEnabled &&
                      (lj(ts ? to : r, "scroll", lU),
                      i.indexOf("scroll") >= 0 &&
                        lj(ts ? to : r, "scroll", ty, J, I),
                      i.indexOf("wheel") >= 0 && lj(r, "wheel", tx, J, I),
                      ((i.indexOf("touch") >= 0 && lF) ||
                        i.indexOf("pointer") >= 0) &&
                        (lj(r, lB[0], tm, J, I),
                        lj(to, lB[2], tv),
                        lj(to, lB[3], tv),
                        X && lj(r, "click", th, !0, !0),
                        N && lj(r, "click", tE),
                        A && lj(to, "gesturestart", t_),
                        O && lj(to, "gestureend", tD),
                        P && lj(r, lM + "enter", tw),
                        S && lj(r, lM + "leave", tC),
                        F && lj(r, lM + "move", tb)),
                      (Z.isEnabled = !0),
                      t && t.type && tm(t),
                      L && L(Z)),
                    Z
                  );
                }),
                (Z.disable = function () {
                  Z.isEnabled &&
                    (lz.filter(function (t) {
                      return t !== Z && lV(t.target);
                    }).length || lW(ts ? to : r, "scroll", lU),
                    Z.isPressed &&
                      (Z._vx.reset(),
                      Z._vy.reset(),
                      lW(k ? r : to, lB[1], tg, !0)),
                    lW(ts ? to : r, "scroll", ty, I),
                    lW(r, "wheel", tx, I),
                    lW(r, lB[0], tm, I),
                    lW(to, lB[2], tv),
                    lW(to, lB[3], tv),
                    lW(r, "click", th, !0),
                    lW(r, "click", tE),
                    lW(to, "gesturestart", t_),
                    lW(to, "gestureend", tD),
                    lW(r, lM + "enter", tw),
                    lW(r, lM + "leave", tC),
                    lW(r, lM + "move", tb),
                    (Z.isEnabled = Z.isPressed = Z.isDragging = !1),
                    R && R(Z));
                }),
                (Z.kill = Z.revert =
                  function () {
                    Z.disable();
                    var t = lz.indexOf(Z);
                    t >= 0 && lz.splice(t, 1), lO === Z && (lO = 0);
                  }),
                lz.push(Z),
                k && lV(r) && (lO = Z),
                Z.enable(p);
            }),
            n(t, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            t
          );
        })();
        (l4.version = "3.12.5"),
          (l4.create = function (t) {
            return new l4(t);
          }),
          (l4.register = l5),
          (l4.getAll = function () {
            return lz.slice();
          }),
          (l4.getById = function (t) {
            return lz.filter(function (e) {
              return e.vars.id === t;
            })[0];
          }),
          lR() && lw.registerPlugin(l4);
        var l6,
          l8,
          l7,
          l9,
          ut,
          ue,
          un,
          ui,
          ur,
          us = function () {
            return !0;
          },
          uo = function () {
            return (
              l6 || (us() && (l6 = window.gsap) && l6.registerPlugin && l6)
            );
          },
          ua = function (t) {
            return "function" == typeof t;
          },
          ul = function (t) {
            return console.warn(t);
          },
          uu = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
          uh = function (t) {
            return ua(l9[t]) ? l9[t] : l9.filters[t];
          },
          uc = function (t, e) {
            var n,
              i,
              r = [],
              s = 0,
              o = 0;
            for (n = 0; n < 4; n++) {
              for (i = 0; i < 5; i++)
                (o = 4 === i ? t[s + 4] : 0),
                  (r[s + i] =
                    t[s] * e[i] +
                    t[s + 1] * e[i + 5] +
                    t[s + 2] * e[i + 10] +
                    t[s + 3] * e[i + 15] +
                    o);
              s += 5;
            }
            return r;
          },
          up = function (t, e) {
            var n = 1 - e,
              i = 0.212671 * n,
              r = 0.71516 * n,
              s = 0.072169 * n;
            return uc(
              [
                i + e,
                r,
                s,
                0,
                0,
                i,
                r + e,
                s,
                0,
                0,
                i,
                r,
                s + e,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
              ],
              t
            );
          },
          uf = function (t, e, n) {
            var i = l8(e),
              r = i[0] / 255,
              s = i[1] / 255,
              o = i[2] / 255,
              a = 1 - n;
            return uc(
              [
                a + n * r * 0.212671,
                n * r * 0.71516,
                n * r * 0.072169,
                0,
                0,
                n * s * 0.212671,
                a + n * s * 0.71516,
                n * s * 0.072169,
                0,
                0,
                n * o * 0.212671,
                n * o * 0.71516,
                a + n * o * 0.072169,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
              ],
              t
            );
          },
          ud = function (t, e) {
            var n = Math.cos((e *= Math.PI / 180)),
              i = Math.sin(e);
            return uc(
              [
                0.212671 + 0.787329 * n + -(0.212671 * i),
                0.71516 + -(0.71516 * n) + -(0.71516 * i),
                0.072169 + -(0.072169 * n) + 0.927831 * i,
                0,
                0,
                0.212671 + -(0.212671 * n) + 0.143 * i,
                0.71516 + 0.28484 * n + 0.14 * i,
                0.072169 + -(0.072169 * n) + -0.283 * i,
                0,
                0,
                0.212671 + -(0.212671 * n) + -(0.787329 * i),
                0.71516 + -(0.71516 * n) + 0.71516 * i,
                0.072169 + 0.927831 * n + 0.072169 * i,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ],
              t
            );
          },
          ug = function (t, e) {
            return uc(
              [
                e,
                0,
                0,
                0,
                0.5 * (1 - e),
                0,
                e,
                0,
                0,
                0.5 * (1 - e),
                0,
                0,
                e,
                0,
                0.5 * (1 - e),
                0,
                0,
                0,
                1,
                0,
              ],
              t
            );
          },
          um = function (t, e) {
            var n,
              i = uh(e),
              r = t.filters || [],
              s = r.length;
            for (
              i || ul(e + " not found. PixiPlugin.registerPIXI(PIXI)");
              --s > -1;

            )
              if (r[s] instanceof i) return r[s];
            return (
              (n = new i()),
              "BlurFilter" === e && (n.blur = 0),
              r.push(n),
              (t.filters = r),
              n
            );
          },
          uv = function (t, e, n, i) {
            e.add(n, t, n[t], i[t]), e._props.push(t);
          },
          u_ = function (t, e) {
            var n = new (uh("ColorMatrixFilter"))();
            return (n.matrix = e), n.brightness(t, !0), n.matrix;
          },
          uD = function (t) {
            var e,
              n = {};
            for (e in t) n[e] = t[e];
            return n;
          },
          uy = {
            contrast: 1,
            saturation: 1,
            colorizeAmount: 0,
            colorize: "rgb(255,255,255)",
            hue: 0,
            brightness: 1,
          },
          ux = function (t, e, n) {
            var i,
              r,
              s,
              o = um(t, "ColorMatrixFilter"),
              a = (t._gsColorMatrixFilter = t._gsColorMatrixFilter || uD(uy)),
              l =
                e.combineCMF &&
                !("colorMatrixFilter" in e && !e.colorMatrixFilter);
            for (
              s = o.matrix,
                e.resolution && (o.resolution = e.resolution),
                e.matrix && e.matrix.length === s.length
                  ? ((r = e.matrix),
                    1 !== a.contrast && uv("contrast", n, a, uy),
                    a.hue && uv("hue", n, a, uy),
                    1 !== a.brightness && uv("brightness", n, a, uy),
                    a.colorizeAmount &&
                      (uv("colorize", n, a, uy),
                      uv("colorizeAmount", n, a, uy)),
                    1 !== a.saturation && uv("saturation", n, a, uy))
                  : ((r = uu.slice()),
                    null != e.contrast
                      ? ((r = ug(r, +e.contrast)), uv("contrast", n, a, e))
                      : 1 !== a.contrast &&
                        (l
                          ? (r = ug(r, a.contrast))
                          : uv("contrast", n, a, uy)),
                    null != e.hue
                      ? ((r = ud(r, +e.hue)), uv("hue", n, a, e))
                      : a.hue && (l ? (r = ud(r, a.hue)) : uv("hue", n, a, uy)),
                    null != e.brightness
                      ? ((r = u_(+e.brightness, r)), uv("brightness", n, a, e))
                      : 1 !== a.brightness &&
                        (l
                          ? (r = u_(a.brightness, r))
                          : uv("brightness", n, a, uy)),
                    null != e.colorize
                      ? ((e.colorizeAmount =
                          ("colorizeAmount" in e) ? +e.colorizeAmount : 1),
                        (r = uf(r, e.colorize, e.colorizeAmount)),
                        uv("colorize", n, a, e),
                        uv("colorizeAmount", n, a, e))
                      : a.colorizeAmount &&
                        (l
                          ? (r = uf(r, a.colorize, a.colorizeAmount))
                          : (uv("colorize", n, a, uy),
                            uv("colorizeAmount", n, a, uy))),
                    null != e.saturation
                      ? ((r = up(r, +e.saturation)), uv("saturation", n, a, e))
                      : 1 !== a.saturation &&
                        (l
                          ? (r = up(r, a.saturation))
                          : uv("saturation", n, a, uy))),
                i = r.length;
              --i > -1;

            )
              r[i] !== s[i] && n.add(s, i, s[i], r[i], "colorMatrixFilter");
            n._props.push("colorMatrixFilter");
          },
          ub = function (t, e) {
            var n = e.t,
              i = e.p,
              r = e.color;
            (0, e.set)(n, i, (r[0] << 16) | (r[1] << 8) | r[2]);
          },
          uw = function (t, e) {
            var n = e.g;
            n && (n.dirty++, n.clearDirty++);
          },
          uC = function (t, e) {
            e.t.visible = !!e.t.alpha;
          },
          uE = function (t, e, n, i) {
            var r = t[e],
              s = l8(
                ua(r)
                  ? t[
                      e.indexOf("set") || !ua(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ]()
                  : r
              ),
              o = l8(n);
            (i._pt = new ut(i._pt, t, e, 0, 0, ub, {
              t: t,
              p: e,
              color: s,
              set: ue(t, e),
            })),
              i.add(s, 0, s[0], o[0]),
              i.add(s, 1, s[1], o[1]),
              i.add(s, 2, s[2], o[2]);
          },
          uT = { tint: 1, lineColor: 1, fillColor: 1 },
          uP = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(
            ","
          ),
          uS = {
            x: "position",
            y: "position",
            tileX: "tilePosition",
            tileY: "tilePosition",
          },
          uF = {
            colorMatrixFilter: 1,
            saturation: 1,
            contrast: 1,
            hue: 1,
            colorize: 1,
            colorizeAmount: 1,
            brightness: 1,
            combineCMF: 1,
          },
          uM = Math.PI / 180,
          uk = function (t) {
            return "string" == typeof t;
          },
          uA = function (t, e) {
            return e.set(
              e.t,
              e.p,
              1 === t ? e.e : Math.round((e.s + e.c * t) * 1e5) / 1e5,
              e
            );
          },
          uO = function (t, e, n, i, r, s) {
            var o,
              a,
              l = 360 * (s ? uM : 1),
              u = uk(r),
              h = u && "=" === r.charAt(1) ? +(r.charAt(0) + "1") : 0,
              c = parseFloat(h ? r.substr(2) : r) * (s ? uM : 1),
              p = h ? c * h : c - i,
              f = i + p;
            return (
              u &&
                ("short" === (o = r.split("_")[1]) &&
                  (p %= l) != p % (l / 2) &&
                  (p += p < 0 ? l : -l),
                "cw" === o && p < 0
                  ? (p = ((p + 1e10 * l) % l) - ~~(p / l) * l)
                  : "ccw" === o &&
                    p > 0 &&
                    (p = ((p - 1e10 * l) % l) - ~~(p / l) * l)),
              (t._pt = a = new ut(t._pt, e, n, i, p, uA)),
              (a.e = f),
              a
            );
          },
          uB = function () {
            l7 ||
              ((l6 = uo()),
              (un =
                (l9 = l7 = l9 || (us() && window.PIXI)) &&
                l9.VERSION &&
                "4" === l9.VERSION.charAt(0)),
              (l8 = function (t) {
                return l6.utils.splitColor(
                  "0x" === (t + "").substr(0, 2) ? "#" + t.substr(2) : t
                );
              }));
          };
        for (ui = 0; ui < uP.length; ui++)
          (uS[(ur = uP[ui]) + "X"] = ur), (uS[ur + "Y"] = ur);
        var uL = {
          version: "3.12.5",
          name: "pixi",
          register: function (t, e, n) {
            (l6 = t), (ut = n), (ue = e.getSetter), uB();
          },
          headless: !0,
          registerPIXI: function (t) {
            l9 = t;
          },
          init: function (t, e, n, i, r) {
            var s, o, a, l, u, h, c, p, f;
            if ((l9 || uB(), !l9))
              return (
                ul("PIXI was not found. PixiPlugin.registerPIXI(PIXI);"), !1
              );
            for (h in e) {
              if (((s = uS[h]), (a = e[h]), s))
                (o = ~h
                  .charAt(h.length - 1)
                  .toLowerCase()
                  .indexOf("x")
                  ? "x"
                  : "y"),
                  this.add(
                    t[s],
                    o,
                    t[s][o],
                    "skew" === s
                      ? uk(a) && "=" === a.charAt(1)
                        ? a.substr(0, 2) + parseFloat(a.substr(2)) * uM
                        : a * uM
                      : a,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                  );
              else if (
                "scale" === h ||
                "anchor" === h ||
                "pivot" === h ||
                "tileScale" === h
              )
                this.add(t[h], "x", t[h].x, a), this.add(t[h], "y", t[h].y, a);
              else if ("rotation" === h || "angle" === h)
                uO(this, t, h, t[h], a, "rotation" === h);
              else if (uF[h])
                l || (ux(t, e.colorMatrixFilter || e, this), (l = !0));
              else if (
                "blur" === h ||
                "blurX" === h ||
                "blurY" === h ||
                "blurPadding" === h
              ) {
                if (
                  ((u = um(t, "BlurFilter")),
                  this.add(u, h, u[h], a),
                  0 !== e.blurPadding)
                )
                  for (
                    c = e.blurPadding || 2 * Math.max(u[h], a),
                      p = t.filters.length;
                    --p > -1;

                  )
                    t.filters[p].padding = Math.max(t.filters[p].padding, c);
              } else if (uT[h]) {
                if (
                  ("lineColor" === h || "fillColor" === h) &&
                  t instanceof l9.Graphics
                )
                  for (
                    f = (t.geometry || t).graphicsData,
                      this._pt = new ut(this._pt, t, h, 0, 0, uw, {
                        g: t.geometry || t,
                      }),
                      p = f.length;
                    --p > -1;

                  )
                    uE(
                      un ? f[p] : f[p][h.substr(0, 4) + "Style"],
                      un ? h : "color",
                      a,
                      this
                    );
                else uE(t, h, a, this);
              } else
                "autoAlpha" === h
                  ? ((this._pt = new ut(this._pt, t, "visible", 0, 0, uC)),
                    this.add(t, "alpha", t.alpha, a),
                    this._props.push("alpha", "visible"))
                  : "resolution" !== h && this.add(t, h, "get", a);
              this._props.push(h);
            }
          },
        };
        uo() && l6.registerPlugin(uL);
        var uR,
          uN,
          uz,
          uI,
          uX,
          uY,
          uH,
          uV,
          uj = function () {
            return !0;
          },
          uW = function () {
            return (
              uR || (uj() && (uR = window.gsap) && uR.registerPlugin && uR)
            );
          },
          uq = function (t) {
            return "string" == typeof t;
          },
          uG = function (t) {
            return "function" == typeof t;
          },
          uU = function (t, e) {
            var n = "x" === e ? "Width" : "Height",
              i = "scroll" + n,
              r = "client" + n;
            return t === uz || t === uI || t === uX
              ? Math.max(uI[i], uX[i]) - (uz["inner" + n] || uI[r] || uX[r])
              : t[i] - t["offset" + n];
          },
          uK = function (t, e) {
            var n = "scroll" + ("x" === e ? "Left" : "Top");
            return (
              t === uz &&
                (null != t.pageXOffset
                  ? (n = "page" + e.toUpperCase() + "Offset")
                  : (t = null != uI[n] ? uI : uX)),
              function () {
                return t[n];
              }
            );
          },
          uZ = function (t, e, n, i) {
            if ((uG(t) && (t = t(e, n, i)), "object" != typeof t))
              return uq(t) && "max" !== t && "=" !== t.charAt(1)
                ? { x: t, y: t }
                : { y: t };
            if (t.nodeType) return { y: t, x: t };
            var r,
              s = {};
            for (r in t)
              s[r] = "onAutoKill" !== r && uG(t[r]) ? t[r](e, n, i) : t[r];
            return s;
          },
          uQ = function (t, e) {
            if (!(t = uY(t)[0]) || !t.getBoundingClientRect)
              return (
                console.warn("scrollTo target doesn't exist. Using 0") || {
                  x: 0,
                  y: 0,
                }
              );
            var n = t.getBoundingClientRect(),
              i = !e || e === uz || e === uX,
              r = i
                ? {
                    top:
                      uI.clientTop -
                      (uz.pageYOffset || uI.scrollTop || uX.scrollTop || 0),
                    left:
                      uI.clientLeft -
                      (uz.pageXOffset || uI.scrollLeft || uX.scrollLeft || 0),
                  }
                : e.getBoundingClientRect(),
              s = { x: n.left - r.left, y: n.top - r.top };
            return !i && e && ((s.x += uK(e, "x")()), (s.y += uK(e, "y")())), s;
          },
          u$ = function (t, e, n, i, r) {
            return isNaN(t) || "object" == typeof t
              ? uq(t) && "=" === t.charAt(1)
                ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) +
                  i -
                  r
                : "max" === t
                ? uU(e, n) - r
                : Math.min(uU(e, n), uQ(t, e)[n] - r)
              : parseFloat(t) - r;
          },
          uJ = function () {
            (uR = uW()),
              uj() &&
                uR &&
                "undefined" != typeof document &&
                document.body &&
                ((uz = window),
                (uX = document.body),
                (uI = document.documentElement),
                (uY = uR.utils.toArray),
                uR.config({ autoKillThreshold: 7 }),
                (uH = uR.config()),
                (uN = 1));
          },
          u1 = {
            version: "3.12.5",
            name: "scrollTo",
            rawVars: 1,
            register: function (t) {
              (uR = t), uJ();
            },
            init: function (t, e, n, i, r) {
              uN || uJ();
              var s = uR.getProperty(t, "scrollSnapType");
              (this.isWin = t === uz),
                (this.target = t),
                (this.tween = n),
                (e = uZ(e, i, t, r)),
                (this.vars = e),
                (this.autoKill = !!e.autoKill),
                (this.getX = uK(t, "x")),
                (this.getY = uK(t, "y")),
                (this.x = this.xPrev = this.getX()),
                (this.y = this.yPrev = this.getY()),
                uV || (uV = uR.core.globals().ScrollTrigger),
                "smooth" === uR.getProperty(t, "scrollBehavior") &&
                  uR.set(t, { scrollBehavior: "auto" }),
                s &&
                  "none" !== s &&
                  ((this.snap = 1),
                  (this.snapInline = t.style.scrollSnapType),
                  (t.style.scrollSnapType = "none")),
                null != e.x
                  ? (this.add(
                      this,
                      "x",
                      this.x,
                      u$(e.x, t, "x", this.x, e.offsetX || 0),
                      i,
                      r
                    ),
                    this._props.push("scrollTo_x"))
                  : (this.skipX = 1),
                null != e.y
                  ? (this.add(
                      this,
                      "y",
                      this.y,
                      u$(e.y, t, "y", this.y, e.offsetY || 0),
                      i,
                      r
                    ),
                    this._props.push("scrollTo_y"))
                  : (this.skipY = 1);
            },
            render: function (t, e) {
              for (
                var n,
                  i,
                  r,
                  s,
                  o,
                  a = e._pt,
                  l = e.target,
                  u = e.tween,
                  h = e.autoKill,
                  c = e.xPrev,
                  p = e.yPrev,
                  f = e.isWin,
                  d = e.snap,
                  g = e.snapInline;
                a;

              )
                a.r(t, a.d), (a = a._next);
              (n = f || !e.skipX ? e.getX() : c),
                (r = (i = f || !e.skipY ? e.getY() : p) - p),
                (s = n - c),
                (o = uH.autoKillThreshold),
                e.x < 0 && (e.x = 0),
                e.y < 0 && (e.y = 0),
                h &&
                  (!e.skipX &&
                    (s > o || s < -o) &&
                    n < uU(l, "x") &&
                    (e.skipX = 1),
                  !e.skipY &&
                    (r > o || r < -o) &&
                    i < uU(l, "y") &&
                    (e.skipY = 1),
                  e.skipX &&
                    e.skipY &&
                    (u.kill(),
                    e.vars.onAutoKill &&
                      e.vars.onAutoKill.apply(
                        u,
                        e.vars.onAutoKillParams || []
                      ))),
                f
                  ? uz.scrollTo(e.skipX ? n : e.x, e.skipY ? i : e.y)
                  : (e.skipY || (l.scrollTop = e.y),
                    e.skipX || (l.scrollLeft = e.x)),
                d &&
                  (1 === t || 0 === t) &&
                  ((i = l.scrollTop),
                  (n = l.scrollLeft),
                  g
                    ? (l.style.scrollSnapType = g)
                    : l.style.removeProperty("scroll-snap-type"),
                  (l.scrollTop = i + 1),
                  (l.scrollLeft = n + 1),
                  (l.scrollTop = i),
                  (l.scrollLeft = n)),
                (e.xPrev = e.x),
                (e.yPrev = e.y),
                uV && uV.update();
            },
            kill: function (t) {
              var e = "scrollTo" === t,
                n = this._props.indexOf(t);
              return (
                (e || "scrollTo_x" === t) && (this.skipX = 1),
                (e || "scrollTo_y" === t) && (this.skipY = 1),
                n > -1 && this._props.splice(n, 1),
                !this._props.length
              );
            },
          };
        (u1.max = uU),
          (u1.getOffset = uQ),
          (u1.buildGetter = uK),
          uW() && uR.registerPlugin(u1);
        var u0,
          u2,
          u3,
          u5,
          u4,
          u6,
          u8,
          u7,
          u9,
          ht,
          he,
          hn,
          hi,
          hr,
          hs,
          ho,
          ha,
          hl,
          hu,
          hh,
          hc,
          hp,
          hf,
          hd,
          hg,
          hm,
          hv,
          h_,
          hD,
          hy,
          hx,
          hb,
          hw,
          hC,
          hE,
          hT,
          hP,
          hS,
          hF = 1,
          hM = Date.now,
          hk = hM(),
          hA = 0,
          hO = 0,
          hB = function (t, e, n) {
            var i =
              hU(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
            return (
              (n["_" + e + "Clamp"] = i), i ? t.substr(6, t.length - 7) : t
            );
          },
          hL = function (t, e) {
            return e && (!hU(t) || "clamp(" !== t.substr(0, 6))
              ? "clamp(" + t + ")"
              : t;
          },
          hR = function () {
            return (hr = 1);
          },
          hN = function () {
            return (hr = 0);
          },
          hz = function (t) {
            return t;
          },
          hI = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          hX = function () {
            return !0;
          },
          hY = function () {
            return (
              u0 || (hX() && (u0 = window.gsap) && u0.registerPlugin && u0)
            );
          },
          hH = function (t) {
            return !!~u8.indexOf(t);
          },
          hV = function (t) {
            return (
              ("Height" === t ? hx : u3["inner" + t]) ||
              u4["client" + t] ||
              u6["client" + t]
            );
          },
          hj = function (t) {
            return (
              lH(t, "getBoundingClientRect") ||
              (hH(t)
                ? function () {
                    return (cZ.width = u3.innerWidth), (cZ.height = hx), cZ;
                  }
                : function () {
                    return co(t);
                  })
            );
          },
          hW = function (t, e, n) {
            var i = n.d,
              r = n.d2,
              s = n.a;
            return (s = lH(t, "getBoundingClientRect"))
              ? function () {
                  return s()[i];
                }
              : function () {
                  return (e ? hV(r) : t["client" + r]) || 0;
                };
          },
          hq = function (t, e) {
            var n = e.s,
              i = e.d2,
              r = e.d,
              s = e.a;
            return Math.max(
              0,
              (s = lH(t, (n = "scroll" + i)))
                ? s() - hj(t)()[r]
                : hH(t)
                ? (u4[n] || u6[n]) - hV(i)
                : t[n] - t["offset" + i]
            );
          },
          hG = function (t, e) {
            for (var n = 0; n < hu.length; n += 3)
              (!e || ~e.indexOf(hu[n + 1])) && t(hu[n], hu[n + 1], hu[n + 2]);
          },
          hU = function (t) {
            return "string" == typeof t;
          },
          hK = function (t) {
            return "function" == typeof t;
          },
          hZ = function (t) {
            return "number" == typeof t;
          },
          hQ = function (t) {
            return "object" == typeof t;
          },
          h$ = function (t, e, n) {
            return t && t.progress(e ? 0 : 1) && n && t.pause();
          },
          hJ = function (t, e) {
            if (t.enabled) {
              var n = t._ctx
                ? t._ctx.add(function () {
                    return e(t);
                  })
                : e(t);
              n && n.totalTime && (t.callbackAnimation = n);
            }
          },
          h1 = Math.abs,
          h0 = "left",
          h2 = "right",
          h3 = "bottom",
          h5 = "width",
          h4 = "height",
          h6 = "Right",
          h8 = "Left",
          h7 = "Bottom",
          h9 = "padding",
          ct = "margin",
          ce = "Width",
          cn = "Height",
          ci = function (t) {
            return u3.getComputedStyle(t);
          },
          cr = function (t) {
            var e = ci(t).position;
            t.style.position =
              "absolute" === e || "fixed" === e ? e : "relative";
          },
          cs = function (t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t;
          },
          co = function (t, e) {
            var n =
                e &&
                "matrix(1, 0, 0, 1, 0, 0)" !== ci(t)[hs] &&
                u0
                  .to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                  })
                  .progress(1),
              i = t.getBoundingClientRect();
            return n && n.progress(0).kill(), i;
          },
          ca = function (t, e) {
            var n = e.d2;
            return t["offset" + n] || t["client" + n] || 0;
          },
          cl = function (t) {
            var e,
              n = [],
              i = t.labels,
              r = t.duration();
            for (e in i) n.push(i[e] / r);
            return n;
          },
          cu = function (t) {
            var e = u0.utils.snap(t),
              n =
                Array.isArray(t) &&
                t.slice(0).sort(function (t, e) {
                  return t - e;
                });
            return n
              ? function (t, i, r) {
                  var s;
                  if ((void 0 === r && (r = 0.001), !i)) return e(t);
                  if (i > 0) {
                    for (t -= r, s = 0; s < n.length; s++)
                      if (n[s] >= t) return n[s];
                    return n[s - 1];
                  }
                  for (s = n.length, t += r; s--; ) if (n[s] <= t) return n[s];
                  return n[0];
                }
              : function (n, i, r) {
                  void 0 === r && (r = 0.001);
                  var s = e(n);
                  return !i || Math.abs(s - n) < r || s - n < 0 == i < 0
                    ? s
                    : e(i < 0 ? n - t : n + t);
                };
          },
          ch = function (t, e, n, i) {
            return n.split(",").forEach(function (n) {
              return t(e, n, i);
            });
          },
          cc = function (t, e, n, i, r) {
            return t.addEventListener(e, n, { passive: !i, capture: !!r });
          },
          cp = function (t, e, n, i) {
            return t.removeEventListener(e, n, !!i);
          },
          cf = function (t, e, n) {
            (n = n && n.wheelHandler) &&
              (t(e, "wheel", n), t(e, "touchmove", n));
          },
          cd = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          cg = { toggleActions: "play", anticipatePin: 0 },
          cm = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          cv = function (t, e) {
            if (hU(t)) {
              var n = t.indexOf("="),
                i = ~n
                  ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1))
                  : 0;
              ~n &&
                (t.indexOf("%") > n && (i *= e / 100),
                (t = t.substr(0, n - 1))),
                (t =
                  i +
                  (t in cm
                    ? cm[t] * e
                    : ~t.indexOf("%")
                    ? (parseFloat(t) * e) / 100
                    : parseFloat(t) || 0));
            }
            return t;
          },
          c_ = function (t, e, n, i, r, s, o, a) {
            var l = r.startColor,
              u = r.endColor,
              h = r.fontSize,
              c = r.indent,
              p = r.fontWeight,
              f = u5.createElement("div"),
              d = hH(n) || "fixed" === lH(n, "pinType"),
              g = -1 !== t.indexOf("scroller"),
              m = d ? u6 : n,
              v = -1 !== t.indexOf("start"),
              _ = v ? l : u,
              D =
                "border-color:" +
                _ +
                ";font-size:" +
                h +
                ";color:" +
                _ +
                ";font-weight:" +
                p +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (D += "position:" + ((g || a) && d ? "fixed;" : "absolute;")),
              (g || a || !d) &&
                (D += (i === lQ ? h2 : h3) + ":" + (s + parseFloat(c)) + "px;"),
              o &&
                (D +=
                  "box-sizing:border-box;text-align:left;width:" +
                  o.offsetWidth +
                  "px;"),
              (f._isStart = v),
              f.setAttribute(
                "class",
                "gsap-marker-" + t + (e ? " marker-" + e : "")
              ),
              (f.style.cssText = D),
              (f.innerText = e || 0 === e ? t + "-" + e : t),
              m.children[0]
                ? m.insertBefore(f, m.children[0])
                : m.appendChild(f),
              (f._offset = f["offset" + i.op.d2]),
              cD(f, 0, i, v),
              f
            );
          },
          cD = function (t, e, n, i) {
            var r = { display: "block" },
              s = n[i ? "os2" : "p2"],
              o = n[i ? "p2" : "os2"];
            (t._isFlipped = i),
              (r[n.a + "Percent"] = i ? -100 : 0),
              (r[n.a] = i ? "1px" : 0),
              (r["border" + s + ce] = 1),
              (r["border" + o + ce] = 0),
              (r[n.p] = e + "px"),
              u0.set(t, r);
          },
          cy = [],
          cx = {},
          cb = function () {
            return hM() - hA > 34 && (hE || (hE = requestAnimationFrame(cY)));
          },
          cw = function () {
            (hf && hf.isPressed && !(hf.startX > u6.clientWidth)) ||
              (t._scrollers.cache++,
              hf ? hE || (hE = requestAnimationFrame(cY)) : cY(),
              hA || cF("scrollStart"),
              (hA = hM()));
          },
          cC = function () {
            (hm = u3.innerWidth), (hg = u3.innerHeight);
          },
          cE = function () {
            t._scrollers.cache++,
              !(
                !hi &&
                !hp &&
                !u5.fullscreenElement &&
                !u5.webkitFullscreenElement &&
                (!hd ||
                  hm !== u3.innerWidth ||
                  Math.abs(u3.innerHeight - hg) > 0.25 * u3.innerHeight)
              ) || u7.restart(!0);
          },
          cT = {},
          cP = [],
          cS = function t() {
            return cp(c3, "scrollEnd", t) || cz(!0);
          },
          cF = function (t) {
            return (
              (cT[t] &&
                cT[t].map(function (t) {
                  return t();
                })) ||
              cP
            );
          },
          cM = [],
          ck = function (t) {
            for (var e = 0; e < cM.length; e += 5)
              (!t || (cM[e + 4] && cM[e + 4].query === t)) &&
                ((cM[e].style.cssText = cM[e + 1]),
                cM[e].getBBox &&
                  cM[e].setAttribute("transform", cM[e + 2] || ""),
                (cM[e + 3].uncache = 1));
          },
          cA = function (t, e) {
            var n;
            for (ho = 0; ho < cy.length; ho++)
              (n = cy[ho]) &&
                (!e || n._ctx === e) &&
                (t ? n.kill(1) : n.revert(!0, !0));
            (hb = !0), e && ck(e), e || cF("revert");
          },
          cO = function (e, n) {
            t._scrollers.cache++,
              (n || !hT) &&
                t._scrollers.forEach(function (t) {
                  return hK(t) && t.cacheID++ && (t.rec = 0);
                }),
              hU(e) && (u3.history.scrollRestoration = hD = e);
          },
          cB = 0,
          cL = function () {
            if (hP !== cB) {
              var t = (hP = cB);
              requestAnimationFrame(function () {
                return t === cB && cz(!0);
              });
            }
          },
          cR = function () {
            u6.appendChild(hy),
              (hx = (!hf && hy.offsetHeight) || u3.innerHeight),
              u6.removeChild(hy);
          },
          cN = function (t) {
            return u9(
              ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
            ).forEach(function (e) {
              return (e.style.display = t ? "none" : "block");
            });
          },
          cz = function (e, n) {
            if (hA && !e && !hb) {
              cc(c3, "scrollEnd", cS);
              return;
            }
            cR(),
              (hT = c3.isRefreshing = !0),
              t._scrollers.forEach(function (t) {
                return hK(t) && ++t.cacheID && (t.rec = t());
              });
            var i = cF("refreshInit");
            hh && c3.sort(),
              n || cA(),
              t._scrollers.forEach(function (t) {
                hK(t) &&
                  (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
              }),
              cy.slice(0).forEach(function (t) {
                return t.refresh();
              }),
              (hb = !1),
              cy.forEach(function (t) {
                if (t._subPinOffset && t.pin) {
                  var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    n = t.pin[e];
                  t.revert(!0, 1),
                    t.adjustPinSpacing(t.pin[e] - n),
                    t.refresh();
                }
              }),
              (hw = 1),
              cN(!0),
              cy.forEach(function (t) {
                var e = hq(t.scroller, t._dir),
                  n = "max" === t.vars.end || (t._endClamp && t.end > e),
                  i = t._startClamp && t.start >= e;
                (n || i) &&
                  t.setPositions(
                    i ? e - 1 : t.start,
                    n ? Math.max(i ? e : t.start + 1, e) : t.end,
                    !0
                  );
              }),
              cN(!1),
              (hw = 0),
              i.forEach(function (t) {
                return t && t.render && t.render(-1);
              }),
              t._scrollers.forEach(function (t) {
                hK(t) &&
                  (t.smooth &&
                    requestAnimationFrame(function () {
                      return (t.target.style.scrollBehavior = "smooth");
                    }),
                  t.rec && t(t.rec));
              }),
              cO(hD, 1),
              u7.pause(),
              cB++,
              (hT = 2),
              cY(2),
              cy.forEach(function (t) {
                return hK(t.vars.onRefresh) && t.vars.onRefresh(t);
              }),
              (hT = c3.isRefreshing = !1),
              cF("refresh");
          },
          cI = 0,
          cX = 1,
          cY = function (t) {
            if (2 === t || (!hT && !hb)) {
              (c3.isUpdating = !0), hS && hS.update(0);
              var e = cy.length,
                n = hM(),
                i = n - hk >= 50,
                r = e && cy[0].scroll();
              if (
                ((cX = cI > r ? -1 : 1),
                hT || (cI = r),
                i &&
                  (hA && !hr && n - hA > 200 && ((hA = 0), cF("scrollEnd")),
                  (he = hk),
                  (hk = n)),
                cX < 0)
              ) {
                for (ho = e; ho-- > 0; ) cy[ho] && cy[ho].update(0, i);
                cX = 1;
              } else for (ho = 0; ho < e; ho++) cy[ho] && cy[ho].update(0, i);
              c3.isUpdating = !1;
            }
            hE = 0;
          },
          cH = [
            h0,
            "top",
            h3,
            h2,
            ct + h7,
            ct + h6,
            ct + "Top",
            ct + h8,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order",
          ],
          cV = cH.concat([
            h5,
            h4,
            "boxSizing",
            "max" + ce,
            "max" + cn,
            "position",
            ct,
            h9,
            h9 + "Top",
            h9 + h6,
            h9 + h7,
            h9 + h8,
          ]),
          cj = function (t, e, n) {
            cG(n);
            var i = t._gsap;
            if (i.spacerIsNative) cG(i.spacerState);
            else if (t._gsap.swappedIn) {
              var r = e.parentNode;
              r && (r.insertBefore(t, e), r.removeChild(e));
            }
            t._gsap.swappedIn = !1;
          },
          cW = function (t, e, n, i) {
            if (!t._gsap.swappedIn) {
              for (var r, s = cH.length, o = e.style, a = t.style; s--; )
                o[(r = cH[s])] = n[r];
              (o.position =
                "absolute" === n.position ? "absolute" : "relative"),
                "inline" === n.display && (o.display = "inline-block"),
                (a[h3] = a[h2] = "auto"),
                (o.flexBasis = n.flexBasis || "auto"),
                (o.overflow = "visible"),
                (o.boxSizing = "border-box"),
                (o[h5] = ca(t, lZ) + "px"),
                (o[h4] = ca(t, lQ) + "px"),
                (o[h9] = a[ct] = a.top = a[h0] = "0"),
                cG(i),
                (a[h5] = a["max" + ce] = n[h5]),
                (a[h4] = a["max" + cn] = n[h4]),
                (a[h9] = n[h9]),
                t.parentNode !== e &&
                  (t.parentNode.insertBefore(e, t), e.appendChild(t)),
                (t._gsap.swappedIn = !0);
            }
          },
          cq = /([A-Z])/g,
          cG = function (t) {
            if (t) {
              var e,
                n,
                i = t.t.style,
                r = t.length,
                s = 0;
              for (
                (t.t._gsap || u0.core.getCache(t.t)).uncache = 1;
                s < r;
                s += 2
              )
                (n = t[s + 1]),
                  (e = t[s]),
                  n
                    ? (i[e] = n)
                    : i[e] &&
                      i.removeProperty(e.replace(cq, "-$1").toLowerCase());
            }
          },
          cU = function (t) {
            for (var e = cV.length, n = t.style, i = [], r = 0; r < e; r++)
              i.push(cV[r], n[cV[r]]);
            return (i.t = t), i;
          },
          cK = function (t, e, n) {
            for (var i, r = [], s = t.length, o = n ? 8 : 0; o < s; o += 2)
              (i = t[o]), r.push(i, i in e ? e[i] : t[o + 1]);
            return (r.t = t.t), r;
          },
          cZ = { left: 0, top: 0 },
          cQ = function (t, e, n, i, r, s, o, a, l, u, h, c, p, f) {
            hK(t) && (t = t(a)),
              hU(t) &&
                "max" === t.substr(0, 3) &&
                (t = c + ("=" === t.charAt(4) ? cv("0" + t.substr(3), n) : 0));
            var d,
              g,
              m,
              v = p ? p.time() : 0;
            if ((p && p.seek(0), isNaN(t) || (t = +t), hZ(t)))
              p &&
                (t = u0.utils.mapRange(
                  p.scrollTrigger.start,
                  p.scrollTrigger.end,
                  0,
                  c,
                  t
                )),
                o && cD(o, n, i, !0);
            else {
              hK(e) && (e = e(a));
              var _,
                D,
                y,
                x,
                b = (t || "0").split(" ");
              (_ = co((m = l$(e, a) || u6)) || {}).left ||
                _.top ||
                "none" !== ci(m).display ||
                ((x = m.style.display),
                (m.style.display = "block"),
                (_ = co(m)),
                x ? (m.style.display = x) : m.style.removeProperty("display")),
                (D = cv(b[0], _[i.d])),
                (y = cv(b[1] || "0", n)),
                (t = _[i.p] - l[i.p] - u + D + r - y),
                o && cD(o, y, i, n - y < 20 || (o._isStart && y > 20)),
                (n -= n - y);
            }
            if ((f && ((a[f] = t || -0.001), t < 0 && (t = 0)), s)) {
              var w = t + n,
                C = s._isStart;
              (d = "scroll" + i.d2),
                cD(
                  s,
                  w,
                  i,
                  (C && w > 20) ||
                    (!C &&
                      (h ? Math.max(u6[d], u4[d]) : s.parentNode[d]) <= w + 1)
                ),
                h &&
                  ((l = co(o)),
                  h &&
                    (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + "px"));
            }
            return (
              p &&
                m &&
                ((d = co(m)),
                p.seek(c),
                (g = co(m)),
                (p._caScrollDist = d[i.p] - g[i.p]),
                (t = (t / p._caScrollDist) * c)),
              p && p.seek(v),
              p ? t : Math.round(t)
            );
          },
          c$ = /(webkit|moz|length|cssText|inset)/i,
          cJ = function (t, e, n, i) {
            if (t.parentNode !== e) {
              var r,
                s,
                o = t.style;
              if (e === u6) {
                for (r in ((t._stOrig = o.cssText), (s = ci(t))))
                  +r ||
                    c$.test(r) ||
                    !s[r] ||
                    "string" != typeof o[r] ||
                    "0" === r ||
                    (o[r] = s[r]);
                (o.top = n), (o.left = i);
              } else o.cssText = t._stOrig;
              (u0.core.getCache(t).uncache = 1), e.appendChild(t);
            }
          },
          c1 = function (t, e, n) {
            var i = e,
              r = i;
            return function (e) {
              var s = Math.round(t());
              return (
                s !== i &&
                  s !== r &&
                  Math.abs(s - i) > 3 &&
                  Math.abs(s - r) > 3 &&
                  ((e = s), n && n()),
                (r = i),
                (i = e),
                e
              );
            };
          },
          c0 = function (t, e, n) {
            var i = {};
            (i[e.p] = "+=" + n), u0.set(t, i);
          },
          c2 = function (e, n) {
            var i = lJ(e, n),
              r = "_scroll" + n.p2,
              s = function n(s, o, a, l, u) {
                var h = n.tween,
                  c = o.onComplete,
                  p = {};
                a = a || i();
                var f = c1(i, a, function () {
                  h.kill(), (n.tween = 0);
                });
                return (
                  (u = (l && u) || 0),
                  (l = l || s - a),
                  h && h.kill(),
                  (o[r] = s),
                  (o.inherit = !1),
                  (o.modifiers = p),
                  (p[r] = function () {
                    return f(a + l * h.ratio + u * h.ratio * h.ratio);
                  }),
                  (o.onUpdate = function () {
                    t._scrollers.cache++, n.tween && cY();
                  }),
                  (o.onComplete = function () {
                    (n.tween = 0), c && c.call(h);
                  }),
                  (h = n.tween = u0.to(e, o))
                );
              };
            return (
              (e[r] = i),
              (i.wheelHandler = function () {
                return s.tween && s.tween.kill() && (s.tween = 0);
              }),
              cc(e, "wheel", i.wheelHandler),
              c3.isTouch && cc(e, "touchmove", i.wheelHandler),
              s
            );
          },
          c3 = (function () {
            function e(t, n) {
              u2 ||
                e.register(u0) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                h_(this),
                this.init(t, n);
            }
            return (
              (e.prototype.init = function (n, i) {
                if (
                  ((this.progress = this.start = 0),
                  this.vars && this.kill(!0, !0),
                  !hO)
                ) {
                  this.update = this.refresh = this.kill = hz;
                  return;
                }
                var r,
                  s,
                  o,
                  a,
                  l,
                  u,
                  h,
                  c,
                  p,
                  f,
                  d,
                  g,
                  m,
                  v,
                  _,
                  D,
                  y,
                  x,
                  b,
                  w,
                  C,
                  E,
                  T,
                  P,
                  S,
                  F,
                  M,
                  k,
                  A,
                  O,
                  B,
                  L,
                  R,
                  N,
                  z,
                  I,
                  X,
                  Y,
                  H,
                  V,
                  j,
                  W = (n = cs(
                    hU(n) || hZ(n) || n.nodeType ? { trigger: n } : n,
                    cg
                  )),
                  q = W.onUpdate,
                  G = W.toggleClass,
                  U = W.id,
                  K = W.onToggle,
                  Z = W.onRefresh,
                  Q = W.scrub,
                  $ = W.trigger,
                  J = W.pin,
                  tt = W.pinSpacing,
                  te = W.invalidateOnRefresh,
                  tn = W.anticipatePin,
                  ti = W.onScrubComplete,
                  tr = W.onSnapComplete,
                  ts = W.once,
                  to = W.snap,
                  ta = W.pinReparent,
                  tl = W.pinSpacer,
                  tu = W.containerAnimation,
                  th = W.fastScrollEnd,
                  tc = W.preventOverlaps,
                  tp =
                    n.horizontal ||
                    (n.containerAnimation && !1 !== n.horizontal)
                      ? lZ
                      : lQ,
                  tf = !Q && 0 !== Q,
                  td = l$(n.scroller || u3),
                  tg = u0.core.getCache(td),
                  tm = hH(td),
                  tv =
                    ("pinType" in n
                      ? n.pinType
                      : lH(td, "pinType") || (tm && "fixed")) === "fixed",
                  t_ = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack],
                  tD = tf && n.toggleActions.split(" "),
                  ty = "markers" in n ? n.markers : cg.markers,
                  tx = tm ? 0 : parseFloat(ci(td)["border" + tp.p2 + ce]) || 0,
                  tb = this,
                  tw =
                    n.onRefreshInit &&
                    function () {
                      return n.onRefreshInit(tb);
                    },
                  tC = hW(td, tm, tp),
                  tE =
                    !tm || ~t._proxies.indexOf(td)
                      ? hj(td)
                      : function () {
                          return cZ;
                        },
                  tT = 0,
                  tP = 0,
                  tS = 0,
                  tF = lJ(td, tp);
                if (
                  ((tb._startClamp = tb._endClamp = !1),
                  (tb._dir = tp),
                  (tn *= 45),
                  (tb.scroller = td),
                  (tb.scroll = tu ? tu.time.bind(tu) : tF),
                  (u = tF()),
                  (tb.vars = n),
                  (i = i || n.animation),
                  "refreshPriority" in n &&
                    ((hh = 1), -9999 === n.refreshPriority && (hS = tb)),
                  (tg.tweenScroll = tg.tweenScroll || {
                    top: c2(td, lQ),
                    left: c2(td, lZ),
                  }),
                  (tb.tweenTo = o = tg.tweenScroll[tp.p]),
                  (tb.scrubDuration = function (t) {
                    (z = hZ(t) && t)
                      ? N
                        ? N.duration(t)
                        : (N = u0.to(i, {
                            ease: "expo",
                            totalProgress: "+=0",
                            inherit: !1,
                            duration: z,
                            paused: !0,
                            onComplete: function () {
                              return ti && ti(tb);
                            },
                          }))
                      : (N && N.progress(1).kill(), (N = 0));
                  }),
                  i &&
                    ((i.vars.lazy = !1),
                    (i._initted && !tb.isReverted) ||
                      (!1 !== i.vars.immediateRender &&
                        !1 !== n.immediateRender &&
                        i.duration() &&
                        i.render(0, !0, !0)),
                    (tb.animation = i.pause()),
                    (i.scrollTrigger = tb),
                    tb.scrubDuration(Q),
                    (L = 0),
                    U || (U = i.vars.id)),
                  to &&
                    ((!hQ(to) || to.push) && (to = { snapTo: to }),
                    "scrollBehavior" in u6.style &&
                      u0.set(tm ? [u6, u4] : td, { scrollBehavior: "auto" }),
                    t._scrollers.forEach(function (t) {
                      return (
                        hK(t) &&
                        t.target === (tm ? u5.scrollingElement || u4 : td) &&
                        (t.smooth = !1)
                      );
                    }),
                    (l = hK(to.snapTo)
                      ? to.snapTo
                      : "labels" === to.snapTo
                      ? ((r = i),
                        function (t) {
                          return u0.utils.snap(cl(r), t);
                        })
                      : "labelsDirectional" === to.snapTo
                      ? ((s = i),
                        function (t, e) {
                          return cu(cl(s))(t, e.direction);
                        })
                      : !1 !== to.directional
                      ? function (t, e) {
                          return cu(to.snapTo)(
                            t,
                            hM() - tP < 500 ? 0 : e.direction
                          );
                        }
                      : u0.utils.snap(to.snapTo)),
                    (I = hQ((I = to.duration || { min: 0.1, max: 2 }))
                      ? ht(I.min, I.max)
                      : ht(I, I)),
                    (X = u0
                      .delayedCall(to.delay || z / 2 || 0.1, function () {
                        var t = tF(),
                          e = hM() - tP < 500,
                          n = o.tween;
                        if (
                          (e || 10 > Math.abs(tb.getVelocity())) &&
                          !n &&
                          !hr &&
                          tT !== t
                        ) {
                          var r,
                            s,
                            a = (t - c) / D,
                            u = i && !tf ? i.totalProgress() : a,
                            h = e ? 0 : ((u - R) / (hM() - he)) * 1e3 || 0,
                            f = u0.utils.clamp(
                              -a,
                              1 - a,
                              (h1(h / 2) * h) / 0.185
                            ),
                            d = a + (!1 === to.inertia ? 0 : f),
                            g = to,
                            m = g.onStart,
                            v = g.onInterrupt,
                            _ = g.onComplete;
                          if (
                            (hZ((r = l(d, tb))) || (r = d),
                            (s = Math.round(c + r * D)),
                            t <= p && t >= c && s !== t)
                          ) {
                            if (n && !n._initted && n.data <= h1(s - t)) return;
                            !1 === to.inertia && (f = r - a),
                              o(
                                s,
                                {
                                  duration: I(
                                    h1(
                                      (0.185 * Math.max(h1(d - u), h1(r - u))) /
                                        h /
                                        0.05 || 0
                                    )
                                  ),
                                  ease: to.ease || "power3",
                                  data: h1(s - t),
                                  onInterrupt: function () {
                                    return X.restart(!0) && v && v(tb);
                                  },
                                  onComplete: function () {
                                    tb.update(),
                                      (tT = tF()),
                                      i &&
                                        (N
                                          ? N.resetTo(
                                              "totalProgress",
                                              r,
                                              i._tTime / i._tDur
                                            )
                                          : i.progress(r)),
                                      (L = R =
                                        i && !tf
                                          ? i.totalProgress()
                                          : tb.progress),
                                      tr && tr(tb),
                                      _ && _(tb);
                                  },
                                },
                                t,
                                f * D,
                                s - t - f * D
                              ),
                              m && m(tb, o.tween);
                          }
                        } else tb.isActive && tT !== t && X.restart(!0);
                      })
                      .pause())),
                  U && (cx[U] = tb),
                  (j =
                    ($ = tb.trigger = l$($ || (!0 !== J && J))) &&
                    $._gsap &&
                    $._gsap.stRevert) && (j = j(tb)),
                  (J = !0 === J ? $ : l$(J)),
                  hU(G) && (G = { targets: $, className: G }),
                  J &&
                    (!1 === tt ||
                      tt === ct ||
                      (tt =
                        (!!tt ||
                          !J.parentNode ||
                          !J.parentNode.style ||
                          "flex" !== ci(J.parentNode).display) &&
                        h9),
                    (tb.pin = J),
                    (a = u0.core.getCache(J)).spacer
                      ? (y = a.pinState)
                      : (tl &&
                          ((tl = l$(tl)) &&
                            !tl.nodeType &&
                            (tl = tl.current || tl.nativeElement),
                          (a.spacerIsNative = !!tl),
                          tl && (a.spacerState = cU(tl))),
                        (a.spacer = w = tl || u5.createElement("div")),
                        w.classList.add("pin-spacer"),
                        U && w.classList.add("pin-spacer-" + U),
                        (a.pinState = y = cU(J))),
                    !1 !== n.force3D && u0.set(J, { force3D: !0 }),
                    (tb.spacer = w = a.spacer),
                    (F = (B = ci(J))[tt + tp.os2]),
                    (E = u0.getProperty(J)),
                    (T = u0.quickSetter(J, tp.a, "px")),
                    cW(J, w, B),
                    (b = cU(J))),
                  ty)
                ) {
                  (v = hQ(ty) ? cs(ty, cd) : cd),
                    (g = c_("scroller-start", U, td, tp, v, 0)),
                    (m = c_("scroller-end", U, td, tp, v, 0, g)),
                    (C = g["offset" + tp.op.d2]);
                  var tM = l$(lH(td, "content") || td);
                  (f = this.markerStart = c_("start", U, tM, tp, v, C, 0, tu)),
                    (d = this.markerEnd = c_("end", U, tM, tp, v, C, 0, tu)),
                    tu && (V = u0.quickSetter([f, d], tp.a, "px")),
                    tv ||
                      (t._proxies.length && !0 === lH(td, "fixedMarkers")) ||
                      (cr(tm ? u6 : td),
                      u0.set([g, m], { force3D: !0 }),
                      (k = u0.quickSetter(g, tp.a, "px")),
                      (O = u0.quickSetter(m, tp.a, "px")));
                }
                if (tu) {
                  var tk = tu.vars.onUpdate,
                    tA = tu.vars.onUpdateParams;
                  tu.eventCallback("onUpdate", function () {
                    tb.update(0, 0, 1), tk && tk.apply(tu, tA || []);
                  });
                }
                if (
                  ((tb.previous = function () {
                    return cy[cy.indexOf(tb) - 1];
                  }),
                  (tb.next = function () {
                    return cy[cy.indexOf(tb) + 1];
                  }),
                  (tb.revert = function (t, e) {
                    if (!e) return tb.kill(!0);
                    var n = !1 !== t || !tb.enabled,
                      r = hi;
                    n !== tb.isReverted &&
                      (n &&
                        ((Y = Math.max(tF(), tb.scroll.rec || 0)),
                        (tS = tb.progress),
                        (H = i && i.progress())),
                      f &&
                        [f, d, g, m].forEach(function (t) {
                          return (t.style.display = n ? "none" : "block");
                        }),
                      n && ((hi = tb), tb.update(n)),
                      !J ||
                        (ta && tb.isActive) ||
                        (n ? cj(J, w, y) : cW(J, w, ci(J), M)),
                      n || tb.update(n),
                      (hi = r),
                      (tb.isReverted = n));
                  }),
                  (tb.refresh = function (t, r, s, a) {
                    if ((!hi && tb.enabled) || r) {
                      if (J && t && hA) {
                        cc(e, "scrollEnd", cS);
                        return;
                      }
                      !hT && tw && tw(tb),
                        (hi = tb),
                        o.tween && !s && (o.tween.kill(), (o.tween = 0)),
                        N && N.pause(),
                        te && i && i.revert({ kill: !1 }).invalidate(),
                        tb.isReverted || tb.revert(!0, !0),
                        (tb._subPinOffset = !1);
                      var l,
                        v,
                        C,
                        T,
                        F,
                        k,
                        O,
                        B,
                        L,
                        R,
                        z,
                        I,
                        V,
                        j = tC(),
                        W = tE(),
                        q = tu ? tu.duration() : hq(td, tp),
                        G = D <= 0.01,
                        U = 0,
                        K = a || 0,
                        Q = hQ(s) ? s.end : n.end,
                        tn = n.endTrigger || $,
                        ti = hQ(s)
                          ? s.start
                          : n.start ||
                            (0 !== n.start && $ ? (J ? "0 0" : "0 100%") : 0),
                        tr = (tb.pinnedContainer =
                          n.pinnedContainer && l$(n.pinnedContainer, tb)),
                        ts = ($ && Math.max(0, cy.indexOf(tb))) || 0,
                        to = ts;
                      for (
                        ty &&
                        hQ(s) &&
                        ((I = u0.getProperty(g, tp.p)),
                        (V = u0.getProperty(m, tp.p)));
                        to--;

                      )
                        (k = cy[to]).end || k.refresh(0, 1) || (hi = tb),
                          (O = k.pin) &&
                            (O === $ || O === J || O === tr) &&
                            !k.isReverted &&
                            (R || (R = []), R.unshift(k), k.revert(!0, !0)),
                          k !== cy[to] && (ts--, to--);
                      for (
                        hK(ti) && (ti = ti(tb)),
                          c =
                            cQ(
                              (ti = hB(ti, "start", tb)),
                              $,
                              j,
                              tp,
                              tF(),
                              f,
                              g,
                              tb,
                              W,
                              tx,
                              tv,
                              q,
                              tu,
                              tb._startClamp && "_startClamp"
                            ) || (J ? -0.001 : 0),
                          hK(Q) && (Q = Q(tb)),
                          hU(Q) &&
                            !Q.indexOf("+=") &&
                            (~Q.indexOf(" ")
                              ? (Q = (hU(ti) ? ti.split(" ")[0] : "") + Q)
                              : ((U = cv(Q.substr(2), j)),
                                (Q = hU(ti)
                                  ? ti
                                  : (tu
                                      ? u0.utils.mapRange(
                                          0,
                                          tu.duration(),
                                          tu.scrollTrigger.start,
                                          tu.scrollTrigger.end,
                                          c
                                        )
                                      : c) + U),
                                (tn = $))),
                          Q = hB(Q, "end", tb),
                          p =
                            Math.max(
                              c,
                              cQ(
                                Q || (tn ? "100% 0" : q),
                                tn,
                                j,
                                tp,
                                tF() + U,
                                d,
                                m,
                                tb,
                                W,
                                tx,
                                tv,
                                q,
                                tu,
                                tb._endClamp && "_endClamp"
                              )
                            ) || -0.001,
                          U = 0,
                          to = ts;
                        to--;

                      )
                        (O = (k = cy[to]).pin) &&
                          k.start - k._pinPush <= c &&
                          !tu &&
                          k.end > 0 &&
                          ((l =
                            k.end -
                            (tb._startClamp ? Math.max(0, k.start) : k.start)),
                          ((O === $ && k.start - k._pinPush < c) || O === tr) &&
                            isNaN(ti) &&
                            (U += l * (1 - k.progress)),
                          O === J && (K += l));
                      if (
                        ((c += U),
                        (p += U),
                        tb._startClamp && (tb._startClamp += U),
                        tb._endClamp &&
                          !hT &&
                          ((tb._endClamp = p || -0.001),
                          (p = Math.min(p, hq(td, tp)))),
                        (D = p - c || ((c -= 0.01) && 0.001)),
                        G &&
                          (tS = u0.utils.clamp(
                            0,
                            1,
                            u0.utils.normalize(c, p, Y)
                          )),
                        (tb._pinPush = K),
                        f &&
                          U &&
                          (((l = {})[tp.a] = "+=" + U),
                          tr && (l[tp.p] = "-=" + tF()),
                          u0.set([f, d], l)),
                        J && !(hw && tb.end >= hq(td, tp)))
                      )
                        (l = ci(J)),
                          (T = tp === lQ),
                          (C = tF()),
                          (P = parseFloat(E(tp.a)) + K),
                          !q &&
                            p > 1 &&
                            ((z = {
                              style: (z = (tm ? u5.scrollingElement || u4 : td)
                                .style),
                              value: z["overflow" + tp.a.toUpperCase()],
                            }),
                            tm &&
                              "scroll" !==
                                ci(u6)["overflow" + tp.a.toUpperCase()] &&
                              (z.style["overflow" + tp.a.toUpperCase()] =
                                "scroll")),
                          cW(J, w, l),
                          (b = cU(J)),
                          (v = co(J, !0)),
                          (B = tv && lJ(td, T ? lZ : lQ)()),
                          tt
                            ? (((M = [tt + tp.os2, D + K + "px"]).t = w),
                              (to = tt === h9 ? ca(J, tp) + D + K : 0) &&
                                (M.push(tp.d, to + "px"),
                                "auto" !== w.style.flexBasis &&
                                  (w.style.flexBasis = to + "px")),
                              cG(M),
                              tr &&
                                cy.forEach(function (t) {
                                  t.pin === tr &&
                                    !1 !== t.vars.pinSpacing &&
                                    (t._subPinOffset = !0);
                                }),
                              tv && tF(Y))
                            : (to = ca(J, tp)) &&
                              "auto" !== w.style.flexBasis &&
                              (w.style.flexBasis = to + "px"),
                          tv &&
                            (((F = {
                              top: v.top + (T ? C - c : B) + "px",
                              left: v.left + (T ? B : C - c) + "px",
                              boxSizing: "border-box",
                              position: "fixed",
                            })[h5] = F["max" + ce] =
                              Math.ceil(v.width) + "px"),
                            (F[h4] = F["max" + cn] =
                              Math.ceil(v.height) + "px"),
                            (F[ct] =
                              F[ct + "Top"] =
                              F[ct + h6] =
                              F[ct + h7] =
                              F[ct + h8] =
                                "0"),
                            (F[h9] = l[h9]),
                            (F[h9 + "Top"] = l[h9 + "Top"]),
                            (F[h9 + h6] = l[h9 + h6]),
                            (F[h9 + h7] = l[h9 + h7]),
                            (F[h9 + h8] = l[h9 + h8]),
                            (x = cK(y, F, ta)),
                            hT && tF(0)),
                          i
                            ? ((L = i._initted),
                              hc(1),
                              i.render(i.duration(), !0, !0),
                              (S = E(tp.a) - P + D + K),
                              (A = Math.abs(D - S) > 1),
                              tv && A && x.splice(x.length - 2, 2),
                              i.render(0, !0, !0),
                              L || i.invalidate(!0),
                              i.parent || i.totalTime(i.totalTime()),
                              hc(0))
                            : (S = D),
                          z &&
                            (z.value
                              ? (z.style["overflow" + tp.a.toUpperCase()] =
                                  z.value)
                              : z.style.removeProperty("overflow-" + tp.a));
                      else if ($ && tF() && !tu)
                        for (v = $.parentNode; v && v !== u6; )
                          v._pinOffset &&
                            ((c -= v._pinOffset), (p -= v._pinOffset)),
                            (v = v.parentNode);
                      R &&
                        R.forEach(function (t) {
                          return t.revert(!1, !0);
                        }),
                        (tb.start = c),
                        (tb.end = p),
                        (u = h = hT ? Y : tF()),
                        tu || hT || (u < Y && tF(Y), (tb.scroll.rec = 0)),
                        tb.revert(!1, !0),
                        (tP = hM()),
                        X && ((tT = -1), X.restart(!0)),
                        (hi = 0),
                        i &&
                          tf &&
                          (i._initted || H) &&
                          i.progress() !== H &&
                          i.progress(H || 0, !0).render(i.time(), !0, !0),
                        (G || tS !== tb.progress || tu || te) &&
                          (i &&
                            !tf &&
                            i.totalProgress(
                              tu && c < -0.001 && !tS
                                ? u0.utils.normalize(c, p, 0)
                                : tS,
                              !0
                            ),
                          (tb.progress = G || (u - c) / D === tS ? 0 : tS)),
                        J && tt && (w._pinOffset = Math.round(tb.progress * S)),
                        N && N.invalidate(),
                        isNaN(I) ||
                          ((I -= u0.getProperty(g, tp.p)),
                          (V -= u0.getProperty(m, tp.p)),
                          c0(g, tp, I),
                          c0(f, tp, I - (a || 0)),
                          c0(m, tp, V),
                          c0(d, tp, V - (a || 0))),
                        G && !hT && tb.update(),
                        !Z || hT || _ || ((_ = !0), Z(tb), (_ = !1));
                    }
                  }),
                  (tb.getVelocity = function () {
                    return ((tF() - h) / (hM() - he)) * 1e3 || 0;
                  }),
                  (tb.endAnimation = function () {
                    h$(tb.callbackAnimation),
                      i &&
                        (N
                          ? N.progress(1)
                          : i.paused()
                          ? tf || h$(i, tb.direction < 0, 1)
                          : h$(i, i.reversed()));
                  }),
                  (tb.labelToScroll = function (t) {
                    return (
                      (i &&
                        i.labels &&
                        (c || tb.refresh() || c) +
                          (i.labels[t] / i.duration()) * D) ||
                      0
                    );
                  }),
                  (tb.getTrailing = function (t) {
                    var e = cy.indexOf(tb),
                      n =
                        tb.direction > 0
                          ? cy.slice(0, e).reverse()
                          : cy.slice(e + 1);
                    return (
                      hU(t)
                        ? n.filter(function (e) {
                            return e.vars.preventOverlaps === t;
                          })
                        : n
                    ).filter(function (t) {
                      return tb.direction > 0 ? t.end <= c : t.start >= p;
                    });
                  }),
                  (tb.update = function (t, e, n) {
                    if (!tu || n || t) {
                      var r,
                        s,
                        a,
                        l,
                        f,
                        d,
                        m,
                        v = !0 === hT ? Y : tb.scroll(),
                        _ = t ? 0 : (v - c) / D,
                        y = _ < 0 ? 0 : _ > 1 ? 1 : _ || 0,
                        C = tb.progress;
                      if (
                        (e &&
                          ((h = u),
                          (u = tu ? tF() : v),
                          to &&
                            ((R = L), (L = i && !tf ? i.totalProgress() : y))),
                        tn &&
                          J &&
                          !hi &&
                          !hF &&
                          hA &&
                          (!y && c < v + ((v - h) / (hM() - he)) * tn
                            ? (y = 1e-4)
                            : 1 === y &&
                              p > v + ((v - h) / (hM() - he)) * tn &&
                              (y = 0.9999)),
                        y !== C && tb.enabled)
                      ) {
                        if (
                          ((l =
                            (f =
                              (r = tb.isActive = !!y && y < 1) !=
                              (!!C && C < 1)) || !!y != !!C),
                          (tb.direction = y > C ? 1 : -1),
                          (tb.progress = y),
                          l &&
                            !hi &&
                            ((s = y && !C ? 0 : 1 === y ? 1 : 1 === C ? 2 : 3),
                            tf &&
                              ((a =
                                (!f && "none" !== tD[s + 1] && tD[s + 1]) ||
                                tD[s]),
                              (m =
                                i &&
                                ("complete" === a ||
                                  "reset" === a ||
                                  a in i)))),
                          tc &&
                            (f || m) &&
                            (m || Q || !i) &&
                            (hK(tc)
                              ? tc(tb)
                              : tb.getTrailing(tc).forEach(function (t) {
                                  return t.endAnimation();
                                })),
                          !tf &&
                            (!N || hi || hF
                              ? i && i.totalProgress(y, !!(hi && (tP || t)))
                              : (N._dp._time - N._start !== N._time &&
                                  N.render(N._dp._time - N._start),
                                N.resetTo
                                  ? N.resetTo(
                                      "totalProgress",
                                      y,
                                      i._tTime / i._tDur
                                    )
                                  : ((N.vars.totalProgress = y),
                                    N.invalidate().restart()))),
                          J)
                        ) {
                          if ((t && tt && (w.style[tt + tp.os2] = F), tv)) {
                            if (l) {
                              if (
                                ((d =
                                  !t &&
                                  y > C &&
                                  p + 1 > v &&
                                  v + 1 >= hq(td, tp)),
                                ta)
                              ) {
                                if (!t && (r || d)) {
                                  var E = co(J, !0),
                                    M = v - c;
                                  cJ(
                                    J,
                                    u6,
                                    E.top + (tp === lQ ? M : 0) + "px",
                                    E.left + (tp === lQ ? 0 : M) + "px"
                                  );
                                } else cJ(J, w);
                              }
                              cG(r || d ? x : b),
                                (A && y < 1 && r) ||
                                  T(P + (1 !== y || d ? 0 : S));
                            }
                          } else T(hI(P + S * y));
                        }
                        !to || o.tween || hi || hF || X.restart(!0),
                          G &&
                            (f || (ts && y && (y < 1 || !hC))) &&
                            u9(G.targets).forEach(function (t) {
                              return t.classList[r || ts ? "add" : "remove"](
                                G.className
                              );
                            }),
                          !q || tf || t || q(tb),
                          l && !hi
                            ? (tf &&
                                (m &&
                                  ("complete" === a
                                    ? i.pause().totalProgress(1)
                                    : "reset" === a
                                    ? i.restart(!0).pause()
                                    : "restart" === a
                                    ? i.restart(!0)
                                    : i[a]()),
                                q && q(tb)),
                              (f || !hC) &&
                                (K && f && hJ(tb, K),
                                t_[s] && hJ(tb, t_[s]),
                                ts && (1 === y ? tb.kill(!1, 1) : (t_[s] = 0)),
                                !f &&
                                  t_[(s = 1 === y ? 1 : 3)] &&
                                  hJ(tb, t_[s])),
                              th &&
                                !r &&
                                Math.abs(tb.getVelocity()) >
                                  (hZ(th) ? th : 2500) &&
                                (h$(tb.callbackAnimation),
                                N
                                  ? N.progress(1)
                                  : h$(i, "reverse" === a ? 1 : !y, 1)))
                            : tf && q && !hi && q(tb);
                      }
                      if (O) {
                        var B = tu
                          ? (v / tu.duration()) * (tu._caScrollDist || 0)
                          : v;
                        k(B + (g._isFlipped ? 1 : 0)), O(B);
                      }
                      V && V((-v / tu.duration()) * (tu._caScrollDist || 0));
                    }
                  }),
                  (tb.enable = function (t, n) {
                    tb.enabled ||
                      ((tb.enabled = !0),
                      cc(td, "resize", cE),
                      tm || cc(td, "scroll", cw),
                      tw && cc(e, "refreshInit", tw),
                      !1 !== t && ((tb.progress = tS = 0), (u = h = tT = tF())),
                      !1 !== n && tb.refresh());
                  }),
                  (tb.getTween = function (t) {
                    return t && o ? o.tween : N;
                  }),
                  (tb.setPositions = function (t, e, n, i) {
                    if (tu) {
                      var r = tu.scrollTrigger,
                        s = tu.duration(),
                        o = r.end - r.start;
                      (t = r.start + (o * t) / s), (e = r.start + (o * e) / s);
                    }
                    tb.refresh(
                      !1,
                      !1,
                      {
                        start: hL(t, n && !!tb._startClamp),
                        end: hL(e, n && !!tb._endClamp),
                      },
                      i
                    ),
                      tb.update();
                  }),
                  (tb.adjustPinSpacing = function (t) {
                    if (M && t) {
                      var e = M.indexOf(tp.d) + 1;
                      (M[e] = parseFloat(M[e]) + t + "px"),
                        (M[1] = parseFloat(M[1]) + t + "px"),
                        cG(M);
                    }
                  }),
                  (tb.disable = function (t, n) {
                    if (
                      tb.enabled &&
                      (!1 !== t && tb.revert(!0, !0),
                      (tb.enabled = tb.isActive = !1),
                      n || (N && N.pause()),
                      (Y = 0),
                      a && (a.uncache = 1),
                      tw && cp(e, "refreshInit", tw),
                      X &&
                        (X.pause(), o.tween && o.tween.kill() && (o.tween = 0)),
                      !tm)
                    ) {
                      for (var i = cy.length; i--; )
                        if (cy[i].scroller === td && cy[i] !== tb) return;
                      cp(td, "resize", cE), tm || cp(td, "scroll", cw);
                    }
                  }),
                  (tb.kill = function (t, e) {
                    tb.disable(t, e), N && !e && N.kill(), U && delete cx[U];
                    var r = cy.indexOf(tb);
                    r >= 0 && cy.splice(r, 1),
                      r === ho && cX > 0 && ho--,
                      (r = 0),
                      cy.forEach(function (t) {
                        return t.scroller === tb.scroller && (r = 1);
                      }),
                      r || hT || (tb.scroll.rec = 0),
                      i &&
                        ((i.scrollTrigger = null),
                        t && i.revert({ kill: !1 }),
                        e || i.kill()),
                      f &&
                        [f, d, g, m].forEach(function (t) {
                          return t.parentNode && t.parentNode.removeChild(t);
                        }),
                      hS === tb && (hS = 0),
                      J &&
                        (a && (a.uncache = 1),
                        (r = 0),
                        cy.forEach(function (t) {
                          return t.pin === J && r++;
                        }),
                        r || (a.spacer = 0)),
                      n.onKill && n.onKill(tb);
                  }),
                  cy.push(tb),
                  tb.enable(!1, !1),
                  j && j(tb),
                  i && i.add && !D)
                ) {
                  var tO = tb.update;
                  (tb.update = function () {
                    (tb.update = tO), c || p || tb.refresh();
                  }),
                    u0.delayedCall(0.01, tb.update),
                    (D = 0.01),
                    (c = p = 0);
                } else tb.refresh();
                J && cL();
              }),
              (e.register = function (t) {
                return (
                  u2 ||
                    ((u0 = t || hY()),
                    hX() && window.document && e.enable(),
                    (u2 = hO)),
                  u2
                );
              }),
              (e.defaults = function (t) {
                if (t) for (var e in t) cg[e] = t[e];
                return cg;
              }),
              (e.disable = function (e, n) {
                (hO = 0),
                  cy.forEach(function (t) {
                    return t[n ? "kill" : "disable"](e);
                  }),
                  cp(u3, "wheel", cw),
                  cp(u5, "scroll", cw),
                  clearInterval(hn),
                  cp(u5, "touchcancel", hz),
                  cp(u6, "touchstart", hz),
                  ch(cp, u5, "pointerdown,touchstart,mousedown", hR),
                  ch(cp, u5, "pointerup,touchend,mouseup", hN),
                  u7.kill(),
                  hG(cp);
                for (var i = 0; i < t._scrollers.length; i += 3)
                  cf(cp, t._scrollers[i], t._scrollers[i + 1]),
                    cf(cp, t._scrollers[i], t._scrollers[i + 2]);
              }),
              (e.enable = function () {
                if (
                  ((u3 = window),
                  (u4 = (u5 = document).documentElement),
                  (u6 = u5.body),
                  u0 &&
                    ((u9 = u0.utils.toArray),
                    (ht = u0.utils.clamp),
                    (h_ = u0.core.context || hz),
                    (hc = u0.core.suppressOverwrites || hz),
                    (hD = u3.history.scrollRestoration || "auto"),
                    (cI = u3.pageYOffset),
                    u0.core.globals("ScrollTrigger", e),
                    u6))
                ) {
                  (hO = 1),
                    ((hy = document.createElement("div")).style.height =
                      "100vh"),
                    (hy.style.position = "absolute"),
                    cR(),
                    (function t() {
                      return hO && requestAnimationFrame(t);
                    })(),
                    l4.register(u0),
                    (e.isTouch = l4.isTouch),
                    (hv =
                      l4.isTouch &&
                      /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                    (hd = 1 === l4.isTouch),
                    cc(u3, "wheel", cw),
                    (u8 = [u3, u5, u4, u6]),
                    u0.matchMedia
                      ? ((e.matchMedia = function (t) {
                          var e,
                            n = u0.matchMedia();
                          for (e in t) n.add(e, t[e]);
                          return n;
                        }),
                        u0.addEventListener("matchMediaInit", function () {
                          return cA();
                        }),
                        u0.addEventListener("matchMediaRevert", function () {
                          return ck();
                        }),
                        u0.addEventListener("matchMedia", function () {
                          cz(0, 1), cF("matchMedia");
                        }),
                        u0.matchMedia("(orientation: portrait)", function () {
                          return cC(), cC;
                        }))
                      : console.warn("Requires GSAP 3.11.0 or later"),
                    cC(),
                    cc(u5, "scroll", cw);
                  var n,
                    i,
                    r = u6.style,
                    s = r.borderTopStyle,
                    o = u0.core.Animation.prototype;
                  for (
                    o.revert ||
                      Object.defineProperty(o, "revert", {
                        value: function () {
                          return this.time(-0.01, !0);
                        },
                      }),
                      r.borderTopStyle = "solid",
                      n = co(u6),
                      lQ.m = Math.round(n.top + lQ.sc()) || 0,
                      lZ.m = Math.round(n.left + lZ.sc()) || 0,
                      s
                        ? (r.borderTopStyle = s)
                        : r.removeProperty("border-top-style"),
                      hn = setInterval(cb, 250),
                      u0.delayedCall(0.5, function () {
                        return (hF = 0);
                      }),
                      cc(u5, "touchcancel", hz),
                      cc(u6, "touchstart", hz),
                      ch(cc, u5, "pointerdown,touchstart,mousedown", hR),
                      ch(cc, u5, "pointerup,touchend,mouseup", hN),
                      hs = u0.utils.checkPrefix("transform"),
                      cV.push(hs),
                      u2 = hM(),
                      u7 = u0.delayedCall(0.2, cz).pause(),
                      hu = [
                        u5,
                        "visibilitychange",
                        function () {
                          var t = u3.innerWidth,
                            e = u3.innerHeight;
                          u5.hidden
                            ? ((ha = t), (hl = e))
                            : (ha !== t || hl !== e) && cE();
                        },
                        u5,
                        "DOMContentLoaded",
                        cz,
                        u3,
                        "load",
                        cz,
                        u3,
                        "resize",
                        cE,
                      ],
                      hG(cc),
                      cy.forEach(function (t) {
                        return t.enable(0, 1);
                      }),
                      i = 0;
                    i < t._scrollers.length;
                    i += 3
                  )
                    cf(cp, t._scrollers[i], t._scrollers[i + 1]),
                      cf(cp, t._scrollers[i], t._scrollers[i + 2]);
                }
              }),
              (e.config = function (t) {
                "limitCallbacks" in t && (hC = !!t.limitCallbacks);
                var n = t.syncInterval;
                (n && clearInterval(hn)) || ((hn = n) && setInterval(cb, n)),
                  "ignoreMobileResize" in t &&
                    (hd = 1 === e.isTouch && t.ignoreMobileResize),
                  "autoRefreshEvents" in t &&
                    (hG(cp) || hG(cc, t.autoRefreshEvents || "none"),
                    (hp = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
              }),
              (e.scrollerProxy = function (e, n) {
                var i = l$(e),
                  r = t._scrollers.indexOf(i),
                  s = hH(i);
                ~r && t._scrollers.splice(r, s ? 6 : 2),
                  n &&
                    (s
                      ? t._proxies.unshift(u3, n, u6, n, u4, n)
                      : t._proxies.unshift(i, n));
              }),
              (e.clearMatchMedia = function (t) {
                cy.forEach(function (e) {
                  return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
                });
              }),
              (e.isInViewport = function (t, e, n) {
                var i = (hU(t) ? l$(t) : t).getBoundingClientRect(),
                  r = i[n ? h5 : h4] * e || 0;
                return n
                  ? i.right - r > 0 && i.left + r < u3.innerWidth
                  : i.bottom - r > 0 && i.top + r < u3.innerHeight;
              }),
              (e.positionInViewport = function (t, e, n) {
                hU(t) && (t = l$(t));
                var i = t.getBoundingClientRect(),
                  r = i[n ? h5 : h4],
                  s =
                    null == e
                      ? r / 2
                      : e in cm
                      ? cm[e] * r
                      : ~e.indexOf("%")
                      ? (parseFloat(e) * r) / 100
                      : parseFloat(e) || 0;
                return n
                  ? (i.left + s) / u3.innerWidth
                  : (i.top + s) / u3.innerHeight;
              }),
              (e.killAll = function (t) {
                if (
                  (cy.slice(0).forEach(function (t) {
                    return "ScrollSmoother" !== t.vars.id && t.kill();
                  }),
                  !0 !== t)
                ) {
                  var e = cT.killAll || [];
                  (cT = {}),
                    e.forEach(function (t) {
                      return t();
                    });
                }
              }),
              e
            );
          })();
        (c3.version = "3.12.5"),
          (c3.saveStyles = function (t) {
            return t
              ? u9(t).forEach(function (t) {
                  if (t && t.style) {
                    var e = cM.indexOf(t);
                    e >= 0 && cM.splice(e, 5),
                      cM.push(
                        t,
                        t.style.cssText,
                        t.getBBox && t.getAttribute("transform"),
                        u0.core.getCache(t),
                        h_()
                      );
                  }
                })
              : cM;
          }),
          (c3.revert = function (t, e) {
            return cA(!t, e);
          }),
          (c3.create = function (t, e) {
            return new c3(t, e);
          }),
          (c3.refresh = function (t) {
            return t ? cE() : (u2 || c3.register()) && cz(!0);
          }),
          (c3.update = function (e) {
            return ++t._scrollers.cache && cY(!0 === e ? 2 : 0);
          }),
          (c3.clearScrollMemory = cO),
          (c3.maxScroll = function (t, e) {
            return hq(t, e ? lZ : lQ);
          }),
          (c3.getScrollFunc = function (t, e) {
            return lJ(l$(t), e ? lZ : lQ);
          }),
          (c3.getById = function (t) {
            return cx[t];
          }),
          (c3.getAll = function () {
            return cy.filter(function (t) {
              return "ScrollSmoother" !== t.vars.id;
            });
          }),
          (c3.isScrolling = function () {
            return !!hA;
          }),
          (c3.snapDirectional = cu),
          (c3.addEventListener = function (t, e) {
            var n = cT[t] || (cT[t] = []);
            ~n.indexOf(e) || n.push(e);
          }),
          (c3.removeEventListener = function (t, e) {
            var n = cT[t],
              i = n && n.indexOf(e);
            i >= 0 && n.splice(i, 1);
          }),
          (c3.batch = function (t, e) {
            var n,
              i = [],
              r = {},
              s = e.interval || 0.016,
              o = e.batchMax || 1e9,
              a = function (t, e) {
                var n = [],
                  i = [],
                  r = u0
                    .delayedCall(s, function () {
                      e(n, i), (n = []), (i = []);
                    })
                    .pause();
                return function (t) {
                  n.length || r.restart(!0),
                    n.push(t.trigger),
                    i.push(t),
                    o <= n.length && r.progress(1);
                };
              };
            for (n in e)
              r[n] =
                "on" === n.substr(0, 2) && hK(e[n]) && "onRefreshInit" !== n
                  ? a(n, e[n])
                  : e[n];
            return (
              hK(o) &&
                ((o = o()),
                cc(c3, "refresh", function () {
                  return (o = e.batchMax());
                })),
              u9(t).forEach(function (t) {
                var e = {};
                for (n in r) e[n] = r[n];
                (e.trigger = t), i.push(c3.create(e));
              }),
              i
            );
          });
        var c5,
          c4 = function (t, e, n, i) {
            return (
              e > i ? t(i) : e < 0 && t(0),
              n > i ? (i - e) / (n - e) : n < 0 ? e / (e - n) : 1
            );
          },
          c6 = function t(e, n) {
            !0 === n
              ? e.style.removeProperty("touch-action")
              : (e.style.touchAction =
                  !0 === n
                    ? "auto"
                    : n
                    ? "pan-" + n + (l4.isTouch ? " pinch-zoom" : "")
                    : "none"),
              e === u4 && t(u6, n);
          },
          c8 = { auto: 1, scroll: 1 },
          c7 = function (t) {
            var e,
              n = t.event,
              i = t.target,
              r = t.axis,
              s = (n.changedTouches ? n.changedTouches[0] : n).target,
              o = s._gsap || u0.core.getCache(s),
              a = hM();
            if (!o._isScrollT || a - o._isScrollT > 2e3) {
              for (
                ;
                s &&
                s !== u6 &&
                ((s.scrollHeight <= s.clientHeight &&
                  s.scrollWidth <= s.clientWidth) ||
                  !(c8[(e = ci(s)).overflowY] || c8[e.overflowX]));

              )
                s = s.parentNode;
              (o._isScroll =
                s &&
                s !== i &&
                !hH(s) &&
                (c8[(e = ci(s)).overflowY] || c8[e.overflowX])),
                (o._isScrollT = a);
            }
            (o._isScroll || "x" === r) &&
              (n.stopPropagation(), (n._gsapAllow = !0));
          },
          c9 = function (t, e, n, i) {
            return l4.create({
              target: t,
              capture: !0,
              debounce: !1,
              lockAxis: !0,
              type: e,
              onWheel: (i = i && c7),
              onPress: i,
              onDrag: i,
              onScroll: i,
              onEnable: function () {
                return n && cc(u5, l4.eventTypes[0], pe, !1, !0);
              },
              onDisable: function () {
                return cp(u5, l4.eventTypes[0], pe, !0);
              },
            });
          },
          pt = /(input|label|select|textarea)/i,
          pe = function (t) {
            var e = pt.test(t.target.tagName);
            (e || c5) && ((t._gsapAllow = !0), (c5 = e));
          },
          pn = function (e) {
            hQ(e) || (e = {}),
              (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
              e.type || (e.type = "wheel,touch"),
              (e.debounce = !!e.debounce),
              (e.id = e.id || "normalizer");
            var n,
              i,
              r,
              s,
              o,
              a,
              l,
              u,
              h = e,
              c = h.normalizeScrollX,
              p = h.momentum,
              f = h.allowNestedScroll,
              d = h.onRelease,
              g = l$(e.target) || u4,
              m = u0.core.globals().ScrollSmoother,
              v = m && m.get(),
              _ =
                hv &&
                ((e.content && l$(e.content)) ||
                  (v && !1 !== e.content && !v.smooth() && v.content())),
              D = lJ(g, lQ),
              y = lJ(g, lZ),
              x = 1,
              b =
                (l4.isTouch && u3.visualViewport
                  ? u3.visualViewport.scale * u3.visualViewport.width
                  : u3.outerWidth) / u3.innerWidth,
              w = 0,
              C = hK(p)
                ? function () {
                    return p(n);
                  }
                : function () {
                    return p || 2.8;
                  },
              E = c9(g, e.type, !0, f),
              T = function () {
                return (s = !1);
              },
              P = hz,
              S = hz,
              F = function () {
                (i = hq(g, lQ)),
                  (S = ht(hv ? 1 : 0, i)),
                  c && (P = ht(0, hq(g, lZ))),
                  (r = cB);
              },
              M = function () {
                (_._gsap.y = hI(parseFloat(_._gsap.y) + D.offset) + "px"),
                  (_.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    parseFloat(_._gsap.y) +
                    ", 0, 1)"),
                  (D.offset = D.cacheID = 0);
              },
              k = function () {
                if (s) {
                  requestAnimationFrame(T);
                  var e = hI(n.deltaY / 2),
                    i = S(D.v - e);
                  if (_ && i !== D.v + D.offset) {
                    D.offset = i - D.v;
                    var r = hI((parseFloat(_ && _._gsap.y) || 0) - D.offset);
                    (_.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      r +
                      ", 0, 1)"),
                      (_._gsap.y = r + "px"),
                      (D.cacheID = t._scrollers.cache),
                      cY();
                  }
                  return !0;
                }
                D.offset && M(), (s = !0);
              },
              A = function () {
                F(),
                  o.isActive() &&
                    o.vars.scrollY > i &&
                    (D() > i ? o.progress(1) && D(i) : o.resetTo("scrollY", i));
              };
            return (
              _ && u0.set(_, { y: "+=0" }),
              (e.ignoreCheck = function (t) {
                return (
                  (hv && "touchmove" === t.type && k()) ||
                  (x > 1.05 && "touchstart" !== t.type) ||
                  n.isGesturing ||
                  (t.touches && t.touches.length > 1)
                );
              }),
              (e.onPress = function () {
                s = !1;
                var t = x;
                (x = hI(
                  ((u3.visualViewport && u3.visualViewport.scale) || 1) / b
                )),
                  o.pause(),
                  t !== x && c6(g, x > 1.01 || (!c && "x")),
                  (a = y()),
                  (l = D()),
                  F(),
                  (r = cB);
              }),
              (e.onRelease = e.onGestureStart =
                function (e, n) {
                  if ((D.offset && M(), n)) {
                    t._scrollers.cache++;
                    var r,
                      s,
                      a = C();
                    c &&
                      ((s = (r = y()) + -(0.05 * a * e.velocityX) / 0.227),
                      (a *= c4(y, r, s, hq(g, lZ))),
                      (o.vars.scrollX = P(s))),
                      (s = (r = D()) + -(0.05 * a * e.velocityY) / 0.227),
                      (a *= c4(D, r, s, hq(g, lQ))),
                      (o.vars.scrollY = S(s)),
                      o.invalidate().duration(a).play(0.01),
                      ((hv && o.vars.scrollY >= i) || r >= i - 1) &&
                        u0.to({}, { onUpdate: A, duration: a });
                  } else u.restart(!0);
                  d && d(e);
                }),
              (e.onWheel = function () {
                o._ts && o.pause(), hM() - w > 1e3 && ((r = 0), (w = hM()));
              }),
              (e.onChange = function (t, e, n, i, s) {
                if (
                  (cB !== r && F(),
                  e &&
                    c &&
                    y(P(i[2] === e ? a + (t.startX - t.x) : y() + e - i[1])),
                  n)
                ) {
                  D.offset && M();
                  var o = s[2] === n,
                    u = o ? l + t.startY - t.y : D() + n - s[1],
                    h = S(u);
                  o && u !== h && (l += h - u), D(h);
                }
                (n || e) && cY();
              }),
              (e.onEnable = function () {
                c6(g, !c && "x"),
                  c3.addEventListener("refresh", A),
                  cc(u3, "resize", A),
                  D.smooth &&
                    ((D.target.style.scrollBehavior = "auto"),
                    (D.smooth = y.smooth = !1)),
                  E.enable();
              }),
              (e.onDisable = function () {
                c6(g, !0),
                  cp(u3, "resize", A),
                  c3.removeEventListener("refresh", A),
                  E.kill();
              }),
              (e.lockAxis = !1 !== e.lockAxis),
              ((n = new l4(e)).iOS = hv),
              hv && !D() && D(1),
              hv && u0.ticker.add(hz),
              (u = n._dc),
              (o = u0.to(n, {
                ease: "power4",
                paused: !0,
                inherit: !1,
                scrollX: c ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                  scrollY: c1(D, D(), function () {
                    return o.pause();
                  }),
                },
                onUpdate: cY,
                onComplete: u.vars.onComplete,
              })),
              n
            );
          };
        (c3.sort = function (t) {
          return cy.sort(
            t ||
              function (t, e) {
                return (
                  -1e6 * (t.vars.refreshPriority || 0) +
                  t.start -
                  (e.start + -1e6 * (e.vars.refreshPriority || 0))
                );
              }
          );
        }),
          (c3.observe = function (t) {
            return new l4(t);
          }),
          (c3.normalizeScroll = function (t) {
            if (void 0 === t) return hf;
            if (!0 === t && hf) return hf.enable();
            if (!1 === t) {
              hf && hf.kill(), (hf = t);
              return;
            }
            var e = t instanceof l4 ? t : pn(t);
            return (
              hf && hf.target === e.target && hf.kill(),
              hH(e.target) && (hf = e),
              e
            );
          }),
          (c3.core = {
            _getVelocityProp: l1,
            _inputObserver: c9,
            _scrollers: t._scrollers,
            _proxies: t._proxies,
            bridge: {
              ss: function () {
                hA || cF("scrollStart"), (hA = hM());
              },
              ref: function () {
                return hi;
              },
            },
          }),
          hY() && u0.registerPlugin(c3);
        var pi = /(?:^\s+|\s+$)/g,
          pr =
            /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
        function ps(t) {
          var e = t.nodeType,
            n = "";
          if (1 === e || 9 === e || 11 === e) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) n += ps(t);
          } else if (3 === e || 4 === e) return t.nodeValue;
          return n;
        }
        function po(t, e, n, i) {
          for (var r, s = t.firstChild, o = []; s; )
            3 === s.nodeType
              ? ((r = (s.nodeValue + "").replace(/^\n+/g, "")),
                i || (r = r.replace(/\s+/g, " ")),
                o.push.apply(o, pa(r, e, n, i)))
              : "br" === (s.nodeName + "").toLowerCase()
              ? (o[o.length - 1] += "<br>")
              : o.push(s.outerHTML),
              (s = s.nextSibling);
          for (r = o.length; r--; ) "&" === o[r] && o.splice(r, 1, "&amp;");
          return o;
        }
        function pa(t, e, n, i) {
          if (
            ((t += ""),
            n && (t = t.trim ? t.trim() : t.replace(pi, "")),
            e && "" !== e)
          )
            return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
          for (var r, s, o = [], a = t.length, l = 0; l < a; l++)
            (((s = t.charAt(l)).charCodeAt(0) >= 55296 &&
              56319 >= s.charCodeAt(0)) ||
              (t.charCodeAt(l + 1) >= 65024 && 65039 >= t.charCodeAt(l + 1))) &&
              ((r = ((t.substr(l, 12).split(pr) || [])[1] || "").length || 2),
              (s = t.substr(l, r)),
              (o.emoji = 1),
              (l += r - 1)),
              o.push(
                ">" === s
                  ? "&gt;"
                  : "<" === s
                  ? "&lt;"
                  : i &&
                    " " === s &&
                    (" " === t.charAt(l - 1) || " " === t.charAt(l + 1))
                  ? "&nbsp;"
                  : s
              );
          return o;
        }
        var pl = {
          version: "3.12.5",
          name: "text",
          init: function (t, e, n) {
            "object" != typeof e && (e = { value: e });
            var i,
              r,
              s,
              o,
              a,
              l,
              u,
              h,
              c = t.nodeName.toUpperCase(),
              p = e,
              f = p.newClass,
              d = p.oldClass,
              g = p.preserveSpaces,
              m = p.rtl,
              v = (this.delimiter = e.delimiter || ""),
              _ = (this.fillChar = e.fillChar || (e.padSpace ? "&nbsp;" : ""));
            if (
              ((this.svg = t.getBBox && ("TEXT" === c || "TSPAN" === c)),
              !("innerHTML" in t) && !this.svg)
            )
              return !1;
            if (((this.target = t), !("value" in e))) {
              this.text = this.original = [""];
              return;
            }
            for (
              s = po(t, v, !1, g),
                ph || (ph = document.createElement("div")),
                ph.innerHTML = e.value,
                r = po(ph, v, !1, g),
                this.from = n._from,
                (this.from || m) &&
                  !(m && this.from) &&
                  ((c = s), (s = r), (r = c)),
                this.hasClass = !!(f || d),
                this.newClass = m ? d : f,
                this.oldClass = m ? f : d,
                i = (c = s.length - r.length) < 0 ? s : r,
                c < 0 && (c = -c);
              --c > -1;

            )
              i.push(_);
            if ("diff" === e.type) {
              for (c = 0, o = 0, a = [], l = [], u = ""; c < r.length; c++)
                (h = r[c]) === s[c]
                  ? (u += h)
                  : ((a[o] = u + h), (l[o++] = u + s[c]), (u = ""));
              (r = a), (s = l), u && (r.push(u), s.push(u));
            }
            e.speed &&
              n.duration(
                Math.min((0.05 / e.speed) * i.length, e.maxDuration || 9999)
              ),
              (this.rtl = m),
              (this.original = s),
              (this.text = r),
              this._props.push("text");
          },
          render: function (t, e) {
            t > 1 ? (t = 1) : t < 0 && (t = 0), e.from && (t = 1 - t);
            var n,
              i,
              r,
              s = e.text,
              o = e.hasClass,
              a = e.newClass,
              l = e.oldClass,
              u = e.delimiter,
              h = e.target,
              c = e.fillChar,
              p = e.original,
              f = e.rtl,
              d = s.length,
              g = ((f ? 1 - t : t) * d + 0.5) | 0;
            o && t
              ? ((n = a && g),
                (i = l && g !== d),
                (r =
                  (n ? "<span class='" + a + "'>" : "") +
                  s.slice(0, g).join(u) +
                  (n ? "</span>" : "") +
                  (i ? "<span class='" + l + "'>" : "") +
                  u +
                  p.slice(g).join(u) +
                  (i ? "</span>" : "")))
              : (r = s.slice(0, g).join(u) + u + p.slice(g).join(u)),
              e.svg
                ? (h.textContent = r)
                : (h.innerHTML =
                    "&nbsp;" === c && ~r.indexOf("  ")
                      ? r.split("  ").join("&nbsp;&nbsp;")
                      : r);
          },
        };
        (pl.splitInnerHTML = po),
          (pl.emojiSafeSplit = pa),
          (pl.getText = ps),
          (pu || ((pu = window.gsap) && pu.registerPlugin && pu)) &&
            pu.registerPlugin(pl);
        var pu,
          ph,
          pc,
          pp,
          pf,
          pd,
          pg,
          pm,
          pv,
          p_,
          pD = function () {
            return !0;
          },
          py = function () {
            return (
              pc || (pD() && (pc = window.gsap) && pc.registerPlugin && pc)
            );
          },
          px = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
          pb = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"],
          },
          pw = function (t) {
            return Math.round(1e4 * t) / 1e4;
          },
          pC = function (t) {
            return parseFloat(t) || 0;
          },
          pE = function (t, e) {
            var n = pC(t);
            return ~t.indexOf("%") ? (n / 100) * e : n;
          },
          pT = function (t, e) {
            return pC(t.getAttribute(e));
          },
          pP = Math.sqrt,
          pS = function (t, e, n, i, r, s) {
            return pP(
              Math.pow((pC(n) - pC(t)) * r, 2) +
                Math.pow((pC(i) - pC(e)) * s, 2)
            );
          },
          pF = function (t) {
            return console.warn(t);
          },
          pM = function (t) {
            return "non-scaling-stroke" === t.getAttribute("vector-effect");
          },
          pk = function (t, e, n) {
            var i,
              r,
              s = t.indexOf(" ");
            return (
              s < 0
                ? ((i = void 0 !== n ? n + "" : t), (r = t))
                : ((i = t.substr(0, s)), (r = t.substr(s + 1))),
              (i = pE(i, e)) > (r = pE(r, e)) ? [r, i] : [i, r]
            );
          },
          pA = function (t) {
            if (!(t = pp(t)[0])) return 0;
            var e,
              n,
              i,
              r,
              s,
              o,
              a,
              l = t.tagName.toLowerCase(),
              u = t.style,
              h = 1,
              c = 1;
            pM(t) &&
              ((h = pP((c = t.getScreenCTM()).a * c.a + c.b * c.b)),
              (c = pP(c.d * c.d + c.c * c.c)));
            try {
              n = t.getBBox();
            } catch (t) {
              pF(
                "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
              );
            }
            var p = n || { x: 0, y: 0, width: 0, height: 0 },
              f = p.x,
              d = p.y,
              g = p.width,
              m = p.height;
            if (
              ((n && (g || m)) ||
                !pb[l] ||
                ((g = pT(t, pb[l][0])),
                (m = pT(t, pb[l][1])),
                "rect" !== l && "line" !== l && ((g *= 2), (m *= 2)),
                "line" === l &&
                  ((f = pT(t, "x1")),
                  (d = pT(t, "y1")),
                  (g = Math.abs(g - f)),
                  (m = Math.abs(m - d)))),
              "path" === l)
            )
              (r = u.strokeDasharray),
                (u.strokeDasharray = "none"),
                (e = t.getTotalLength() || 0),
                pw(h) !== pw(c) &&
                  !pm &&
                  (pm = 1) &&
                  pF(
                    "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
                  ),
                (e *= (h + c) / 2),
                (u.strokeDasharray = r);
            else if ("rect" === l) e = 2 * g * h + 2 * m * c;
            else if ("line" === l) e = pS(f, d, f + g, d + m, h, c);
            else if ("polyline" === l || "polygon" === l)
              for (
                i = t.getAttribute("points").match(px) || [],
                  "polygon" === l && i.push(i[0], i[1]),
                  e = 0,
                  s = 2;
                s < i.length;
                s += 2
              )
                e += pS(i[s - 2], i[s - 1], i[s], i[s + 1], h, c) || 0;
            else
              ("circle" === l || "ellipse" === l) &&
                (e =
                  Math.PI *
                  (3 * ((o = (g / 2) * h) + (a = (m / 2) * c)) -
                    pP((3 * o + a) * (o + 3 * a))));
            return e || 0;
          },
          pO = function (t, e) {
            if (!(t = pp(t)[0])) return [0, 0];
            e || (e = pA(t) + 1);
            var n = pf.getComputedStyle(t),
              i = n.strokeDasharray || "",
              r = pC(n.strokeDashoffset),
              s = i.indexOf(",");
            return (
              s < 0 && (s = i.indexOf(" ")),
              (i = s < 0 ? e : pC(i.substr(0, s))) > e && (i = e),
              [-r || 0, i - r || 0]
            );
          },
          pB = function () {
            pD() &&
              ((pf = window),
              (pg = pc = py()),
              (pp = pc.utils.toArray),
              (pv = pc.core.getStyleSaver),
              (p_ = pc.core.reverting || function () {}),
              (pd =
                -1 !== ((pf.navigator || {}).userAgent || "").indexOf("Edge")));
          },
          pL = {
            version: "3.12.5",
            name: "drawSVG",
            register: function (t) {
              (pc = t), pB();
            },
            init: function (t, e, n, i, r) {
              if (!t.getBBox) return !1;
              pg || pB();
              var s,
                o,
                a,
                l = pA(t);
              return (
                (this.styles =
                  pv &&
                  pv(t, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
                (this.tween = n),
                (this._style = t.style),
                (this._target = t),
                e + "" == "true"
                  ? (e = "0 100%")
                  : e
                  ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
                  : (e = "0 0"),
                (s = pO(t, l)),
                (o = pk(e, l, s[0])),
                (this._length = pw(l)),
                (this._dash = pw(s[1] - s[0])),
                (this._offset = pw(-s[0])),
                (this._dashPT = this.add(
                  this,
                  "_dash",
                  this._dash,
                  pw(o[1] - o[0]),
                  0,
                  0,
                  0,
                  0,
                  0,
                  1
                )),
                (this._offsetPT = this.add(
                  this,
                  "_offset",
                  this._offset,
                  pw(-o[0]),
                  0,
                  0,
                  0,
                  0,
                  0,
                  1
                )),
                pd &&
                  (a = pf.getComputedStyle(t)).strokeLinecap !==
                    a.strokeLinejoin &&
                  ((o = pC(a.strokeMiterlimit)),
                  this.add(t.style, "strokeMiterlimit", o, o + 0.01)),
                (this._live = pM(t) || ~(e + "").indexOf("live")),
                (this._nowrap = ~(e + "").indexOf("nowrap")),
                this._props.push("drawSVG"),
                1
              );
            },
            render: function (t, e) {
              if (e.tween._time || !p_()) {
                var n,
                  i,
                  r,
                  s,
                  o = e._pt,
                  a = e._style;
                if (o) {
                  for (
                    e._live &&
                    (n = pA(e._target)) !== e._length &&
                    ((i = n / e._length),
                    (e._length = n),
                    e._offsetPT && ((e._offsetPT.s *= i), (e._offsetPT.c *= i)),
                    e._dashPT
                      ? ((e._dashPT.s *= i), (e._dashPT.c *= i))
                      : (e._dash *= i));
                    o;

                  )
                    o.r(t, o.d), (o = o._next);
                  (r = e._dash || (t && 1 !== t && 1e-4) || 0),
                    (n = e._length - r + 0.1),
                    (s = e._offset),
                    r &&
                      s &&
                      r + Math.abs(s % e._length) > e._length - 0.2 &&
                      (s += s < 0 ? 0.1 : -0.1) &&
                      (n += 0.1),
                    (a.strokeDashoffset = r ? s : s + 0.001),
                    (a.strokeDasharray =
                      n < 0.2
                        ? "none"
                        : r
                        ? r + "px," + (e._nowrap ? 999999 : n) + "px"
                        : "0px, 999999px");
                }
              } else e.styles.revert();
            },
            getLength: pA,
            getPosition: pO,
          };
        py() && pc.registerPlugin(pL);
        var pR,
          pN,
          pz,
          pI,
          pX,
          pY = Math.PI / 180,
          pH = function () {
            return pR || ((pR = window.gsap) && pR.registerPlugin && pR);
          },
          pV = function (t) {
            return Math.round(1e4 * t) / 1e4;
          },
          pj = function (t) {
            (pR = t || pH()),
              pN ||
                ((pz = pR.utils.getUnit),
                (pI = pR.core.getStyleSaver),
                (pX = pR.core.reverting || function () {}),
                (pN = 1));
          },
          pW = function (t, e, n, i, r) {
            var s = t._gsap,
              o = s.get(t, e);
            (this.p = e),
              (this.set = s.set(t, e)),
              (this.s = this.val = parseFloat(o)),
              (this.u = pz(o) || 0),
              (this.vel = n || 0),
              (this.v = this.vel / r),
              i || 0 === i
                ? ((this.acc = i), (this.a = this.acc / (r * r)))
                : (this.acc = this.a = 0);
          },
          pq = {
            version: "3.12.5",
            name: "physics2D",
            register: pj,
            init: function (t, e, n) {
              pN || pj();
              var i = +e.angle || 0,
                r = +e.velocity || 0,
                s = +e.acceleration || 0,
                o = e.xProp || "x",
                a = e.yProp || "y",
                l =
                  e.accelerationAngle || 0 === e.accelerationAngle
                    ? +e.accelerationAngle
                    : i;
              (this.styles =
                pI &&
                pI(
                  t,
                  e.xProp && "x" !== e.xProp
                    ? e.xProp + "," + e.yProp
                    : "transform"
                )),
                (this.target = t),
                (this.tween = n),
                (this.step = 0),
                (this.sps = 30),
                e.gravity && ((s = +e.gravity), (l = 90)),
                (i *= pY),
                (l *= pY),
                (this.fr = 1 - (+e.friction || 0)),
                this._props.push(o, a),
                (this.xp = new pW(
                  t,
                  o,
                  Math.cos(i) * r,
                  Math.cos(l) * s,
                  this.sps
                )),
                (this.yp = new pW(
                  t,
                  a,
                  Math.sin(i) * r,
                  Math.sin(l) * s,
                  this.sps
                )),
                (this.skipX = this.skipY = 0);
            },
            render: function (t, e) {
              var n,
                i,
                r,
                s,
                o,
                a,
                l = e.xp,
                u = e.yp,
                h = e.tween,
                c = e.target,
                p = e.step,
                f = e.sps,
                d = e.fr,
                g = e.skipX,
                m = e.skipY,
                v = h._from ? h._dur - h._time : h._time;
              if (h._time || !pX()) {
                if (1 === d)
                  (r = v * v * 0.5),
                    (n = l.s + l.vel * v + l.acc * r),
                    (i = u.s + u.vel * v + u.acc * r);
                else {
                  for (
                    v *= f,
                      s = a = (0 | v) - p,
                      a < 0 &&
                        ((l.v = l.vel / f),
                        (u.v = u.vel / f),
                        (l.val = l.s),
                        (u.val = u.s),
                        (e.step = 0),
                        (s = a = 0 | v)),
                      o = (v % 1) * d;
                    a--;

                  )
                    (l.v += l.a),
                      (u.v += u.a),
                      (l.v *= d),
                      (u.v *= d),
                      (l.val += l.v),
                      (u.val += u.v);
                  (n = l.val + l.v * o), (i = u.val + u.v * o), (e.step += s);
                }
                g || l.set(c, l.p, pV(n) + l.u),
                  m || u.set(c, u.p, pV(i) + u.u);
              } else e.styles.revert();
            },
            kill: function (t) {
              this.xp.p === t && (this.skipX = 1),
                this.yp.p === t && (this.skipY = 1);
            },
          };
        pH() && pR.registerPlugin(pq);
        var pG,
          pU,
          pK,
          pZ,
          pQ,
          p$ = function () {
            return pG || ((pG = window.gsap) && pG.registerPlugin && pG);
          },
          pJ = function (t) {
            return Math.round(1e4 * t) / 1e4;
          },
          p1 = function (t) {
            (pG = t || p$()),
              pU ||
                ((pK = pG.utils.getUnit),
                (pZ = pG.core.getStyleSaver),
                (pQ = pG.core.reverting || function () {}),
                (pU = 1));
          },
          p0 = function (t, e, n, i, r, s) {
            var o = t._gsap,
              a = o.get(t, e);
            (this.p = e),
              (this.set = o.set(t, e)),
              (this.s = this.val = parseFloat(a)),
              (this.u = pK(a) || 0),
              (this.vel = n || 0),
              (this.v = this.vel / s),
              i || 0 === i
                ? ((this.acc = i), (this.a = this.acc / (s * s)))
                : (this.acc = this.a = 0),
              (this.fr = 1 - (r || 0));
          },
          p2 = {
            version: "3.12.5",
            name: "physicsProps",
            register: p1,
            init: function (t, e, n) {
              var i;
              for (i in (pU || p1(),
              (this.styles = pZ && pZ(t)),
              (this.target = t),
              (this.tween = n),
              (this.step = 0),
              (this.sps = 30),
              (this.vProps = []),
              e)) {
                var r = e[i],
                  s = r.velocity,
                  o = r.acceleration,
                  a = r.friction;
                (s || o) &&
                  (this.vProps.push(new p0(t, i, s, o, a, this.sps)),
                  this._props.push(i),
                  pZ && this.styles.save(i),
                  a && (this.hasFr = 1));
              }
            },
            render: function (t, e) {
              var n,
                i,
                r,
                s,
                o,
                a = e.vProps,
                l = e.tween,
                u = e.target,
                h = e.step,
                c = e.hasFr,
                p = e.sps,
                f = a.length,
                d = l._from ? l._dur - l._time : l._time;
              if (l._time || !pQ()) {
                if (c) {
                  if (((d *= p), (i = (0 | d) - h) < 0)) {
                    for (; f--; ) ((n = a[f]).v = n.vel / p), (n.val = n.s);
                    (f = a.length), (e.step = h = 0), (i = 0 | d);
                  }
                  for (r = d % 1; f--; ) {
                    for (n = a[f], s = i; s--; )
                      (n.v += n.a), (n.v *= n.fr), (n.val += n.v);
                    n.set(u, n.p, pJ(n.val + n.v * r * n.fr) + n.u);
                  }
                  e.step += i;
                } else
                  for (o = d * d * 0.5; f--; )
                    (n = a[f]).set(
                      u,
                      n.p,
                      pJ(n.s + n.vel * d + n.acc * o) + n.u
                    );
              } else e.styles.revert();
            },
            kill: function (t) {
              for (var e = this.vProps, n = e.length; n--; )
                e[n].p === t && e.splice(n, 1);
            },
          };
        p$() && pG.registerPlugin(p2);
        var p3,
          p5,
          p4 = (function () {
            function t(t) {
              (this.chars = pa(t)), (this.sets = []), (this.length = 50);
              for (var e = 0; e < 20; e++) this.sets[e] = p7(80, this.chars);
            }
            return (
              (t.prototype.grow = function (t) {
                for (var e = 0; e < 20; e++)
                  this.sets[e] += p7(t - this.length, this.chars);
                this.length = t;
              }),
              t
            );
          })(),
          p6 = function () {
            return p3 || ((p3 = window.gsap) && p3.registerPlugin && p3);
          },
          p8 = /\s+/g,
          p7 = function (t, e) {
            for (var n = e.length, i = ""; --t > -1; )
              i += e[~~(Math.random() * n)];
            return i;
          },
          p9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          ft = p9.toLowerCase(),
          fe = {
            upperCase: new p4(p9),
            lowerCase: new p4(ft),
            upperAndLowerCase: new p4(p9 + ft),
          },
          fn = function () {
            p5 = p3 = p6();
          },
          fi = {
            version: "3.12.5",
            name: "scrambleText",
            register: function (t, e, n) {
              (p3 = t), fn();
            },
            init: function (t, e, n, i, r) {
              if (
                (p5 || fn(),
                (this.prop =
                  "innerHTML" in t
                    ? "innerHTML"
                    : "textContent" in t
                    ? "textContent"
                    : 0),
                this.prop)
              ) {
                (this.target = t), "object" != typeof e && (e = { text: e });
                var s,
                  o,
                  a,
                  l,
                  u = e.text || e.value || "",
                  h = !1 !== e.trim;
                return (
                  (this.delimiter = s = e.delimiter || ""),
                  (this.original = pa(
                    ps(t).replace(p8, " ").split("&nbsp;").join(""),
                    s,
                    h
                  )),
                  ("{original}" === u || !0 === u || null == u) &&
                    (u = this.original.join(s)),
                  (this.text = pa((u || "").replace(p8, " "), s, h)),
                  (this.hasClass = !!(e.newClass || e.oldClass)),
                  (this.newClass = e.newClass),
                  (this.oldClass = e.oldClass),
                  (l = "" === s),
                  (this.textHasEmoji = l && !!this.text.emoji),
                  (this.charsHaveEmoji = !!e.chars && !!pa(e.chars).emoji),
                  (this.length = l
                    ? this.original.length
                    : this.original.join(s).length),
                  (this.lengthDif =
                    (l ? this.text.length : this.text.join(s).length) -
                    this.length),
                  (this.fillChar =
                    e.fillChar || (e.chars && ~e.chars.indexOf(" "))
                      ? "&nbsp;"
                      : ""),
                  (this.charSet = a =
                    fe[e.chars || "upperCase"] || new p4(e.chars)),
                  (this.speed = 0.05 / (e.speed || 1)),
                  (this.prevScrambleTime = 0),
                  (this.setIndex = (20 * Math.random()) | 0),
                  (o = this.length + Math.max(this.lengthDif, 0)) > a.length &&
                    a.grow(o),
                  (this.chars = a.sets[this.setIndex]),
                  (this.revealDelay = e.revealDelay || 0),
                  (this.tweenLength = !1 !== e.tweenLength),
                  (this.tween = n),
                  (this.rightToLeft = !!e.rightToLeft),
                  this._props.push("scrambleText", "text"),
                  1
                );
              }
            },
            render: function (t, e) {
              var n,
                i,
                r,
                s,
                o,
                a,
                l,
                u,
                h,
                c,
                p,
                f = e.target,
                d = e.prop,
                g = e.text,
                m = e.delimiter,
                v = e.tween,
                _ = e.prevScrambleTime,
                D = e.revealDelay,
                y = e.setIndex,
                x = e.chars,
                b = e.charSet,
                w = e.length,
                C = e.textHasEmoji,
                E = e.charsHaveEmoji,
                T = e.lengthDif,
                P = e.tweenLength,
                S = e.oldClass,
                F = e.newClass,
                M = e.rightToLeft,
                k = e.fillChar,
                A = e.speed,
                O = e.original,
                B = e.hasClass,
                L = g.length,
                R = v._time,
                N = R - _;
              D &&
                (v._from && (R = v._dur - R),
                (t =
                  0 === R
                    ? 0
                    : R < D
                    ? 1e-6
                    : R === v._dur
                    ? 1
                    : v._ease((R - D) / (v._dur - D)))),
                t < 0 ? (t = 0) : t > 1 && (t = 1),
                M && (t = 1 - t),
                (n = ~~(t * L + 0.5)),
                t
                  ? ((N > A || N < -A) &&
                      ((e.setIndex = y = (y + ((19 * Math.random()) | 0)) % 20),
                      (e.chars = b.sets[y]),
                      (e.prevScrambleTime += N)),
                    (s = x))
                  : (s = O.join(m)),
                (p = v._from ? t : 1 - t),
                (c = w + (P ? (v._from ? p * p * p : 1 - p * p * p) : 1) * T),
                M
                  ? 1 === t && (v._from || "isFromStart" === v.data)
                    ? ((r = ""), (s = O.join(m)))
                    : ((l = g.slice(n).join(m)),
                      (r = E
                        ? pa(s)
                            .slice(0, (c - (C ? pa(l) : l).length + 0.5) | 0)
                            .join("")
                        : s.substr(0, (c - (C ? pa(l) : l).length + 0.5) | 0)),
                      (s = l))
                  : ((r = g.slice(0, n).join(m)),
                    (i = (C ? pa(r) : r).length),
                    (s = E
                      ? pa(s)
                          .slice(i, (c + 0.5) | 0)
                          .join("")
                      : s.substr(i, (c - i + 0.5) | 0))),
                B
                  ? ((u = M ? S : F),
                    (h = M ? F : S),
                    (l =
                      ((o = u && 0 !== n) ? "<span class='" + u + "'>" : "") +
                      r +
                      (o ? "</span>" : "") +
                      ((a = h && n !== L) ? "<span class='" + h + "'>" : "") +
                      m +
                      s +
                      (a ? "</span>" : "")))
                  : (l = r + m + s),
                (f[d] =
                  "&nbsp;" === k && ~l.indexOf("  ")
                    ? l.split("  ").join("&nbsp;&nbsp;")
                    : l);
            },
          };
        (fi.emojiSafeSplit = pa),
          (fi.getText = ps),
          p6() && p3.registerPlugin(fi);
        var fr,
          fs,
          fo,
          fa = function () {
            return fr || ((fr = window.gsap) && fr.registerPlugin && fr);
          },
          fl = function (t) {
            (fo = (fr = fa()) && fr.parseEase("_CE"))
              ? ((fs = 1),
                (fr.parseEase("bounce").config = function (t) {
                  return "object" == typeof t
                    ? fh("", t)
                    : fh("bounce(" + t + ")", { strength: +t });
                }))
              : t &&
                console.warn(
                  "Please gsap.registerPlugin(CustomEase, CustomBounce)"
                );
          },
          fu = function (t) {
            var e,
              n = t.length,
              i = 1 / t[n - 2];
            for (e = 2; e < n; e += 2) t[e] = ~~(t[e] * i * 1e3) / 1e3;
            t[n - 2] = 1;
          },
          fh = function (t, e) {
            fs || fl(1);
            var n,
              i,
              r,
              s,
              o,
              a,
              l,
              u = Math.min(0.999, (e = e || {}).strength || 0.7),
              h = u,
              c = (e.squash || 0) / 100,
              p = c,
              f = 1 / 0.03,
              d = 0.2,
              g = 1,
              m = 0.1,
              v = [0, 0, 0.07, 0, 0.1, 1, 0.1, 1],
              _ = [0, 0, 0, 0, 0.1, 0, 0.1, 0];
            for (
              o = 0;
              o < 200 &&
              ((d *= ((h + 1) / 2) * h),
              (g *= u * u),
              (a = m + d),
              (r = m + 0.49 * d),
              (s = 1 - g),
              (i = r + (r - (n = m + g / f)) * 0.8),
              c &&
                ((m += c),
                (n += c),
                (r += c),
                (i += c),
                (a += c),
                (l = c / p),
                _.push(
                  m - c,
                  0,
                  m - c,
                  l,
                  m - c / 2,
                  l,
                  m,
                  l,
                  m,
                  0,
                  m,
                  0,
                  m,
                  -0.6 * l,
                  m + (a - m) / 6,
                  0,
                  a,
                  0
                ),
                v.push(m - c, 1, m, 1, m, 1),
                (c *= u * u)),
              v.push(m, 1, n, s, r, s, i, s, a, 1, a, 1),
              (u *= 0.95),
              (f = g / (a - i)),
              (m = a),
              !(s > 0.999));
              o++
            );
            if (e.endAtStart && "false" !== e.endAtStart) {
              if (((r = -0.1), v.unshift(r, 1, r, 1, -0.07, 0), p))
                for (
                  r -= c = 2.5 * p,
                    v.unshift(r, 1, r, 1, r, 1),
                    _.splice(0, 6),
                    _.unshift(
                      r,
                      0,
                      r,
                      0,
                      r,
                      1,
                      r + c / 2,
                      1,
                      r + c,
                      1,
                      r + c,
                      0,
                      r + c,
                      0,
                      r + c,
                      -0.6,
                      r + c + 0.033,
                      0
                    ),
                    o = 0;
                  o < _.length;
                  o += 2
                )
                  _[o] -= r;
              for (o = 0; o < v.length; o += 2)
                (v[o] -= r), (v[o + 1] = 1 - v[o + 1]);
            }
            return (
              c &&
                (fu(_),
                (_[2] = "C" + _[2]),
                fo(e.squashID || t + "-squash", "M" + _.join(","))),
              fu(v),
              (v[2] = "C" + v[2]),
              fo(t, "M" + v.join(","))
            );
          },
          fc = (function () {
            function t(t, e) {
              this.ease = fh(t, e);
            }
            return (
              (t.create = function (t, e) {
                return fh(t, e);
              }),
              (t.register = function (t) {
                (fr = t), fl();
              }),
              t
            );
          })();
        fa() && fr.registerPlugin(fc), (fc.version = "3.12.5");
        var fp,
          ff,
          fd,
          fg = function () {
            return fp || ((fp = window.gsap) && fp.registerPlugin && fp);
          },
          fm = {
            easeOut: "M0,1,C0.7,1,0.6,0,1,0",
            easeInOut: "M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0",
            anticipate:
              "M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1",
            uniform: "M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0",
          },
          fv = function (t) {
            return t;
          },
          f_ = function (t) {
            if (!ff) {
              if ((fd = (fp = fg()) && fp.parseEase("_CE"))) {
                for (var e in fm) fm[e] = fd("", fm[e]);
                (ff = 1),
                  (fy("wiggle").config = function (t) {
                    return "object" == typeof t
                      ? fy("", t)
                      : fy("wiggle(" + t + ")", { wiggles: +t });
                  });
              } else
                t &&
                  console.warn(
                    "Please gsap.registerPlugin(CustomEase, CustomWiggle)"
                  );
            }
          },
          fD = function (t, e) {
            return (
              "function" != typeof t && (t = fp.parseEase(t) || fd("", t)),
              t.custom || !e
                ? t
                : function (e) {
                    return 1 - t(e);
                  }
            );
          },
          fy = function (t, e) {
            ff || f_(1);
            var n,
              i,
              r,
              s,
              o,
              a,
              l,
              u,
              h,
              c = 0 | ((e = e || {}).wiggles || 10),
              p = 1 / c,
              f = p / 2,
              d = "anticipate" === e.type,
              g = fm[e.type] || fm.easeOut,
              m = fv;
            if (
              (d && ((m = g), (g = fm.easeOut)),
              e.timingEase && (m = fD(e.timingEase)),
              e.amplitudeEase && (g = fD(e.amplitudeEase, !0)),
              (u = [
                0,
                0,
                (a = m(f)) / 4,
                0,
                a / 2,
                (l = d ? -g(f) : g(f)),
                a,
                l,
              ]),
              "random" === e.type)
            ) {
              for (
                h = 2, u.length = 4, n = m(p), i = 2 * Math.random() - 1;
                h < c;
                h++
              )
                (f = n),
                  (l = i),
                  (n = m(p * h)),
                  (s =
                    Math.cos(
                      (r = Math.atan2(
                        (i = 2 * Math.random() - 1) - u[u.length - 3],
                        n - u[u.length - 4]
                      ))
                    ) * p),
                  (o = Math.sin(r) * p),
                  u.push(f - s, l - o, f, l, f + s, l + o);
              u.push(n, 0, 1, 0);
            } else {
              for (h = 1; h < c; h++)
                u.push(m(f + p / 2), l),
                  (f += p),
                  (l = (l > 0 ? -1 : 1) * g(h * p)),
                  (a = m(f)),
                  u.push(m(f - p / 2), l, a, l);
              u.push(m(f + p / 4), l, m(f + p / 4), 0, 1, 0);
            }
            for (h = u.length; --h > -1; ) u[h] = ~~(1e3 * u[h]) / 1e3;
            return (u[2] = "C" + u[2]), fd(t, "M" + u.join(","));
          },
          fx = (function () {
            function t(t, e) {
              this.ease = fy(t, e);
            }
            return (
              (t.create = function (t, e) {
                return fy(t, e);
              }),
              (t.register = function (t) {
                (fp = t), f_();
              }),
              t
            );
          })();
        fg() && fp.registerPlugin(fx), (fx.version = "3.12.5");
        var fb,
          fw,
          fC,
          fE,
          fT,
          fP,
          fS,
          fF,
          fM,
          fk,
          fA,
          fO,
          fB,
          fL,
          fR,
          fN = !0,
          fz = 0,
          fI = function () {
            return !0;
          },
          fX = function () {
            return (
              fb || (fI() && (fb = window.gsap) && fb.registerPlugin && fb)
            );
          },
          fY = function (t) {
            return "string" == typeof t;
          },
          fH = function (t) {
            return void 0 === t;
          },
          fV = "http://www.w3.org/2000/svg",
          fj = "http://www.w3.org/1999/xhtml",
          fW = 0,
          fq = {},
          fG = (function () {
            try {
              return (
                sessionStorage.setItem("gsTest", "1"),
                sessionStorage.removeItem("gsTest"),
                !0
              );
            } catch (t) {
              return !1;
            }
          })(),
          fU = function (t, e, n) {
            var i = fC.createElementNS
              ? fC.createElementNS("svg" === t ? fV : fj, t)
              : fC.createElement(t);
            return (
              e && (fY(e) && (e = fC.querySelector(e)), e.appendChild(i)),
              "svg" === t &&
                (i.setAttribute("xmlns", fV),
                i.setAttribute("xmlns:xlink", fj)),
              n && (i.style.cssText = n),
              i
            );
          },
          fK = function () {
            fC.selection
              ? fC.selection.empty()
              : fT.getSelection && fT.getSelection().removeAllRanges();
          },
          fZ = function t(e, n) {
            for (var i = [], r = 0, s = fb.core.Tween, o = e._first; o; )
              o instanceof s
                ? o.vars.id && (i[r++] = o)
                : (n && o.vars.id && (i[r++] = o),
                  (r = (i = i.concat(t(o, n))).length)),
                (o = o._next);
            return i;
          },
          fQ = function (t, e) {
            var n = 0,
              i = Math.max(0, t._repeat),
              r = t._first;
            for (r || (n = t.duration()); r; )
              (n = Math.max(
                n,
                r.totalDuration() > 999
                  ? r.endTime(!1)
                  : r._start + r._tDur / r._ts
              )),
                (r = r._next);
            return !e && i ? n * (i + 1) + t._rDelay * i : n;
          },
          f$ = function (t, e) {
            for (var n = t, i = arguments.length > 1 ? +e : n.rawTime(); n; )
              (i = n._start + i / (n._ts || 1)), (n = n.parent);
            return i;
          },
          fJ = function (t, e, n, i) {
            var r, s, o;
            return (
              fY(t) &&
                ("=" === t.charAt(1)
                  ? ((r =
                      parseInt(t.charAt(0) + "1", 10) *
                      parseFloat(t.substr(2))) < 0 &&
                      0 === i &&
                      (i = 100),
                    (t = (i / 100) * e.duration() + r))
                  : isNaN(t) && e.labels && -1 !== e.labels[t]
                  ? (t = e.labels[t])
                  : e === fP &&
                    ((s = t.indexOf("=")) > 0
                      ? ((r =
                          parseInt(t.charAt(s - 1) + "1", 10) *
                          parseFloat(t.substr(s + 1))),
                        (t = t.substr(0, s - 1)))
                      : (r = 0),
                    (o = fb.getById(t)) &&
                      (t = f$(o, (n / 100) * o.duration()) + r))),
              Math.min(
                100,
                Math.max(
                  0,
                  ((t = isNaN(t) ? n : parseFloat(t)) / e.duration()) * 100
                )
              )
            );
          },
          f1 = function (t, e, n) {
            fR ||
              ((fU("style", fE).innerHTML =
                ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);height:42px;border-top:1px solid #999;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;width:100%;position:absolute;top:0;left:0}.gs-dev-tools .timeline-track{background-color:#999;opacity:.6}.gs-dev-tools .progress-bar{background-color:#91e600;height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#6d9900;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .out-point-shape{fill:#994242;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .grab{stroke:rgba(255,255,255,.3);stroke-width:1}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;border:1px solid #6d9900;background-color:#91e600}.gs-dev-tools .gs-btn-white{fill:#fff}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:rgba(255,255,255,.6);stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:16px;width:19px;padding:10px 4px;min-width:24px}.gs-dev-tools .rewind-path{opacity:.6}.gs-dev-tools .play-pause{width:24px;height:24px;padding:6px 10px;min-width:24px}.gs-dev-tools .ease{width:30px;height:30px;padding:10px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:rgba(255,255,255,.6);stroke-width:2px}.gs-dev-tools .ease-border{fill:rgba(255,255,255,.25)}.gs-dev-tools .time-scale{font-family:monospace;font-size:18px;text-align:center;color:rgba(255,255,255,.6);padding:4px 4px 4px 0;min-width:30px;margin-left:7px}.gs-dev-tools .loop{width:20px;padding:5px;min-width:20px}.gs-dev-tools .loop-path{fill:rgba(255,255,255,.6)}.gs-dev-tools label span{color:#fff;font-family:monospace;text-decoration:none;font-size:16px;line-height:18px}.gs-dev-tools .time-scale span{color:rgba(255,255,255,.6)}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{font-size:18px;font-family:monospace;color:rgba(255,255,255,.6);margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1)}.gs-dev-tools.minimal .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point{display:none}.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .rewind{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}.gs-dev-tools.minimal .gs-bottom-right{display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1);height:42px}.gs-dev-tools .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .in-point,.gs-dev-tools .out-point{display:none}.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .rewind{display:none}.gs-dev-tools .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .gs-bottom-right{display:none}}"),
              (fR = !0)),
              fY(t) && (t = fC.querySelector(t));
            var i = fU("div", t || fE.getElementsByTagName("body")[0] || fE);
            return (
              i.setAttribute("class", "gs-dev-tools" + (e ? " minimal" : "")),
              (i.innerHTML =
                '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=in-point-shape points=".5 .5 14.5 .5 14.5 25.5 .5 17.5"/><polyline class=grab points="5.5 4 5.5 15"/><polyline class=grab points="9.5 4 9.5 17"/></svg><svg class=out-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=out-point-shape points=".5 .5 14.5 .5 14.5 17.5 .5 25.5"/><polyline class=grab points="5.5 4 5.5 17"/><polyline class=grab points="9.5 4 9.5 15"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span><svg class=select-arrow viewBox="0 0 12.05 6.73" xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38" xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg><svg class=play-pause viewBox="0 0 20.97 25.67" xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88" class="gs-btn-white play-1" style=stroke:#fff;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85" class="gs-btn-white play-2" style=stroke:#fff;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38" xmlns=http://www.w3.org/2000/svg><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67" xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><a href="https://gsap.com/docs/v3/Plugins/GSDevTools?source=GSDevTools" target=_blank title=Docs><svg class=logo viewBox="0 0 100 100" xmlns=http://www.w3.org/2000/svg><path d="M60 15.4c-.3-.4-.5-.6-.5-.7.1-.6.2-1 .2-1.7v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1s-.2-.4-.4-.6zm24.6 21.9c-.5-1.7-1.9-2-4.2-.7.9-1.5 2.1-1.5 2.3-2.1.9-2.5-.6-4.6-1.2-5.3.7-1.8 1.4-4.5-1-6.8-1-1-2.4-1.2-3.6-1.1 1.8 1.7 3.4 4.4 2.5 7.2-.1.3-.9.7-1.7 1 0 0 .4 2-.3 3.5-.3.6-.8 1.5-1.3 2.6 1 .9 1.6 1 3 1.3-.9.1-1.2.4-1.2.5-.7 3 1 3.4 1.4 4.8 0 .1 0 .2.1.3v.4c-.3.3-1.4.5-2.5.5s-1.8 1-1.8 1c-.2.1-.3.3-.4.4v1c0 .1 0 .4.1.6.1.5.3 1.3.4 1.8.9.6 1.4.9 2.2 1.1.5.1 1 .2 1.5.1.3-.1.7-.3 1-.7 1.5-1.7 1.9-3.2 2.2-4.1 0-.1 0-.2.1-.2 0 .1.1.1.1.2 0 0 .1-.1.1-.2l.1-.1c1.3-1.6 2.9-4.5 2.1-7zM74.3 49.9c-.1-.3-.1-.7-.2-1.1v-.2c-.1-.2-.1-.4-.2-.6 0-.1-.1-.3-.1-.5s-.1-.5-.1-.7v-.1c0-.2-.1-.5-.1-.7-.1-.3-.1-.7-.2-1.1v-.1c0-.2 0-.3-.1-.5v-.9c0-.1 0-.2.1-.3V43h-.3c-1.1.1-3.8.4-6.7.2-1.2-.1-2.4-.3-3.6-.6-1-.3-1.8-.5-2.3-.7-1.2-.4-1.6-.6-1.8-.7 0 .2-.1.4-.1.7 0 .3-.1.5-.1.8-.1.2-.1.4-.2.6l.1.1c.5.5 1.5 1.3 1.5 2.1v.2c-.1.4-.4.5-.8.9-.1.1-.6.7-1.1 1.1l-.6.6c-.1 0-.1.1-.2.1-.1.1-.3.2-.4.3-.2.1-.7.5-.8.6-.1.1-.2.1-.3.1-2.8 8.8-2.2 13.5-1.5 16.1.1.5.3 1 .4 1.3-.4.5-.8 1-1.2 1.4-1.2 1.5-2 2.6-2.6 4.2 0 .1 0 .1-.1.2 0 .1 0 .2-.1.2-.2.5-.3 1-.4 1.5-.6 2.3-.8 4.5-.9 6.6-.1 2.4-.2 4.6-.5 6.9.7.3 3.1.9 4.7.6.2-.1 0-3.9.6-5.7l.6-1.5c.4-.9.9-1.9 1.3-3.1.3-.7.5-1.5.7-2.4.1-.5.2-1 .3-1.6V74v-.1c.1-.6.1-1.3.1-2 0-.2-.7.3-1.1.9.3-1.8 1.3-2.1 2-3.2.3-.5.6-1.1.6-2 2.5-1.7 4-3.7 5-5.7.2-.4.4-.9.6-1.4.3-.8.5-1.6.7-2.4.3-1.4.8-3.2 1.2-4.8v-.1c.4-1.2.8-2.2 1.2-2.6-.2.9-.4 1.7-.6 2.5v.2c-.6 3.5-.7 6.2-2 9.2 1 2.6 1.9 3.9 2 7.6-2 0-3.2 1.6-3.7 3.2 1.2.3 3.9.7 8.3.1h.3c.1-.5.3-1.1.5-1.5.3-.8.5-1.5.6-2.2.2-1.3.1-2.4 0-3.2 3.9-3.7 2.6-11 1.6-16.6zm.3-15.1c.1-.3.2-.6.4-.8.2-.3.3-.7.5-1 .1-.3.3-.6.4-.9.5-1.5.4-2.8.3-3.5-.1 0-.1-.1-.2-.1-.5-.2-.9-.4-1.4-.6-.1 0-.2-.1-.3-.1-3.8-1.2-7.9-.9-11.9.1-1 .2-1.9.5-2.9.1-2.3-.8-3.9-1.9-4.6-2.8l-.2-.2c-.1.2-.2.4-.4.6.2 2.3-.5 3.9-1.4 5.1.9 1.2 2.6 2.8 3.6 3.4 1.1.6 1.7.7 3.4.4-.6.7-1.1 1-1.9 1.4.1.7.2 2 .5 3.4.3.3 1.2.8 2.3 1.3.5.3 1.1.5 1.7.7.8.3 1.7.6 2.4.8.1 0 .2.1.3.1.5.1 1.1.2 1.8.2h.9c2.1 0 4.5-.2 5.4-.3h.1c-.1-2.7.2-4.6.7-6.2.2-.3.4-.7.5-1.1zm-23.2 9.3v.2c-.3 1.7.5 2.4 1.9 3.4.6.5 0 .5.5.8.3.2.7.3 1 .3.3 0 .5 0 .8-.1.2-.1.4-.3.6-.5.1-.1.3-.2.5-.4.3-.2.6-.5.7-.6.1-.1.2-.1.3-.2.2-.2.5-.5.6-.7.2-.2.4-.5.5-.7 0-.1.1-.1.1-.1v-.1c.1-.4-.3-.8-.8-1.3-.2-.2-.4-.3-.5-.5-.3-.3-.6-.5-1-.7-.9-.5-1.9-.7-3-.7l-.3-.3c-2.2-2.5-3.2-4.8-3.9-6.5-.9-2.1-1.9-3.3-3.9-4.9 1 .4 1.8.8 2.3 1.1.5.4 1.3.4 1.9.2.2-.1.5-.2.7-.3.2-.1.4-.2.6-.4 1.6-1.3 2.5-3.8 2.6-5.6v-.1c.2-.3.6-1.1.8-1.4l.1.1c.1.1.3.2.6.5.1 0 .1.1.2.1.1.1.2.1.2.2.8.6 1.9 1.3 2.6 1.7 1.4.7 2.3.7 5.3-.1 2.2-.6 4.8-.8 6.8-.8 1.4 0 2.7.3 4 .7.2.1.4.1.5.2.3.1.6.2.9.4 0 0 .1 0 .1.1.8.4 2.1 1.2 2.5-.3.1-2-.6-3.9-1.6-5.3 0 0-.1 0-.1-.1-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.2-.6-.4-1.2-.8-1.6-.9-.1-.1-.3-.1-.4-.2h-.1-.1c-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1h-.1l-.2-.4c-.2-.1-.4-.2-.5-.2h-.6c-.3 0-.5.1-.7.1-.7.1-1.2.3-1.7.4-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-.4 0-.9-.1-1.5-.2-.4-.1-.8-.2-1.1-.3-.2-.1-.4-.1-.6-.2-.6-.2-1.1-.3-1.7-.4h-.2-1.8c-.3 0-.6.1-1 .1H57.9c-.8 0-1.5 0-2.3-.1-.2 0-.5-.1-.7-.1-.5-.1-.9-.2-1.3-.4-.2-.1-.3-.1-.4-.2-.1 0-.2 0-.2-.1-.3-.1-.6-.1-.9-.1H51h-.1c-.4 0-.9.1-1.4.2-1.1.2-2.1.6-3 1.3-.3.2-.6.5-.8.8-.1.1-.2.2-.2.3-.4.6-.8 1.2-.9 2 0 .2-.1.4-.1.6 0 .2 1.7.7 2.3 2.8-.8-1.2-2.3-2.5-4.1-1.4-1.5 1-1.1 3.1-2.4 5.4-.3.5-.6.9-1 1.4-.8 1-.7 2.1.2 4.4 1.4 3.4 7.6 5.3 11.5 8.3l.4.4zm8.7-36.3c0 .6.1 1 .2 1.6v.1c0 .3.1.6.1.9.1 1.2.4 2 1 2.9 0 .1.1.1.1.2.3.2.5.3.8.4 1.1.2 3.1.3 4.2 0 .2-.1.5-.3.7-.5.4-.4.7-1.1.9-1.7.1-.7.3-1.3.4-1.8 0-.2.1-.4.1-.5v-.1c0-.2 0-.3.1-.5.2-.7.2-2.4.3-2.8.1-.7 0-1.8-.1-2.5 0-.2-.1-.4-.1-.5v-.1c-.2-.5-1.4-1.4-4.3-1.4-3.1 0-4 1-4.1 1.5v.1c0 .1 0 .3-.1.5-.1.4-.2 1.4-.2 1.9v2.3zm-6 88.6c0-.1-.1-.2-.1-.3-.7-1.5-1.1-3.5-1.3-4.6.4.1.7.6.8.3.2-.5-.4-1.5-.5-2.2v-.1c-.5-.5-4-.5-3.7-.3-.4.8-1 .6-1.3 2.1-.1.7.8.1 1.7.1-1.4.9-3 2.1-3.4 3.2-.1.1-.1.2-.1.3 0 .2-.1.4-.1.5-.1 1.2.5 1.6 2 2.4H48.4c1.4.3 3 .3 4.3.3 1.2-.2 1.6-.7 1.6-1.4-.2-.1-.2-.2-.2-.3z" style=fill:#efefef /><path d="M56.1 36.5c.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.4-2.9-6.1-4.4-8.3.4-.2 1-.4 1.5-.8 1.6 1.9 3.3 3 5 4.1zm-1.7 13.2s-1.4 0-2.3-1c0 0-.1-.5.1-.7 0 0-1.2-1-1.5-1.7-.2-.5-.3-1.1-.2-1.6-4.4-3.7-10.9-4.2-12.9-9.1-.5-1.2-1.3-2.9-.9-3.9-.3.1-.5.2-.8.3-2.9.9-11.7 5.3-17.9 8.8 1.6 1.7 2.6 4.3 3.2 7.2l.3 1.5c.1.5.1 1 .2 1.5.1 1.4.4 2.7.8 3.9.2.8.6 1.5.9 2.2.6 1 1.2 1.9 2.1 2.6.6.5 1.2.9 1.9 1.3 2.1 1.1 5 1.6 8.6 1.5H37.9c.5 0 1 .1 1.5.1h.1c.4.1.9.1 1.3.2h.2c.4.1.9.2 1.3.4h.1c.4.1.8.3 1.1.5h.1c.4.2.7.4 1.1.6h.1c.7.4 1.3.9 1.9 1.5l.1.1c.6.5 1.1 1.1 1.5 1.8 0 .1.1.1.1.2s.1.1.1.2c.4.6 1.2 1.1 1.9 1.3.7-.9 1.5-1.8 2.2-2.8-1.6-6 0-11.7 1.8-16.9zm-26-15.9c5-2.4 9-4.1 9.9-4.5.3-.6.6-1.4.9-2.6.1-.3.2-.5.3-.8 1-2.7 2.7-2.8 3.5-3v-.2c.1-1.1.5-2 1-2.8-8.8 2.5-18 5.5-28 11.7-.1.1-.2.2-.4.2C11.3 34.5 3 40.3 1.3 51c2.4-2.7 6-5.6 10.5-8.5.1-.1.3-.2.5-.3.2-.1.5-.3.7-.4 1.2-.7 2.4-1.4 3.6-2.2 2.2-1.2 4.5-2.4 6.7-3.5 1.8-.8 3.5-1.6 5.1-2.3zm54.9 61.3l-.3-.3c-.8-.6-4.1-1.2-5.5-2.3-.4-.3-1.1-.7-1.7-1.1-1.6-.9-3.5-1.8-3.5-2.1v-.1c-.2-1.7-.2-7 .1-8.8.3-1.8.7-4.4.8-5.1.1-.6.5-1.2.1-1.2h-.4c-.2 0-.4.1-.8.1-1.5.3-4.3.6-6.6.4-.9-.1-1.6-.2-2-.3-.5-.1-.7-.2-.9-.3H62.3c-.4.5 0 2.7.6 4.8.3 1.1.8 2 1.2 3 .3.8.6 1.8.8 3.1 0 .2.1.4.1.7.2 2.8.3 3.6-.2 4.9-.1.3-.3.6-.4 1-.4.9-.7 1.7-.6 2.3 0 .2.1.4.1.5.2.4.6.7 1.2.8.2 0 .3.1.5.1.3 0 .6.1.9.1 3.4 0 5.2 0 8.6.4 2.5.4 3.9.6 5.1.5.4 0 .9-.1 1.4-.1 1.2-.2 1.8-.5 1.9-.9-.1.2-.1.1-.2-.1zM60.2 16.4zm-.5 1.7zm3.8.5c.1 0 .3.1.5.1.4.1.7.2 1.2.3.3.1.6.1.9.1h1.3c.3-.1.7-.1 1-.2.7-.2 1.5-.4 2.7-.6h.3c.3 0 .6.1.9.3.1.1.2.1.4.2.3.2.8.2 1.2.4h.1c.1 0 .1.1.2.1.6.3 1.3.7 1.9 1.1l.3.3c.9-.1 1.6-.2 2.1-.2h.1c-.2-.4-.3-1.3-1.8-.6-.6-.7-.8-1.3-2.1-.9-.1-.2-.2-.3-.3-.4l-.1-.1c-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.2-.3-.5-.5-.9-.7-.7-.4-1.5-.6-2.3-.5-.2 0-.4.1-.6.2-.1 0-.2.1-.2.1-.1 0-.2.1-.3.2-.5.3-1.3.8-2.1 1-.1 0-.1 0-.2.1-.2 0-.4.1-.5.1H66.5h-.1c-.4-.1-1.1-.2-2-.5-.1 0-.2-.1-.3-.1-.9-.2-1.8-.5-2.7-.8-.3-.1-.7-.2-1-.3-.1 0-.1 0-.2-.1h-.1s-.1 0-.1-.1c-.3-.3-.7-.6-1.3-.8-.5-.2-1.2-.4-2.1-.5-.2 0-.5 0-.7.1-.4.2-.8.6-1.2.9.1.1.3.3.4.5.1.2.2.4.3.7l-.6-.6c-.5-.4-1.1-.8-1.7-.9-.8-.2-1.4.4-2.3.9 1 0 1.8.1 2.5.4.1 0 .1 0 .2.1h.1c.1 0 .2.1.3.1.9.4 1.8.6 2.7.6h1.3c.5 0 .8-.1 1.1-.1.1 0 .4 0 .7-.1h2.2c.4.4.9.6 1.6.8z" style=fill:#88ce02 /><path d="M100 51.8c0-19.5-12.5-36.1-30-42.1.1-1.2.2-2.4.3-3.1.1-1.5.2-3.9-.5-4.9-1.6-2.3-9.1-2.1-10.5-.1-.4.6-.7 3.6-.6 5.9-1.1-.1-2.2-.1-3.3-.1-16.5 0-30.9 9-38.6 22.3-2.4 1.4-4.7 2.8-6.1 4C5.4 38 2.2 43.2 1 47c-1.6 4.7-1.1 7.6.4 5.8 1.2-1.5 6.6-5.9 10.1-8.2-.4 2.3-.6 4.8-.6 7.2 0 21 14.5 38.5 34 43.3-.1 1.1.1 2 .7 2.6.9.8 3.2 2 6.4 1.6 2.9-.3 3.5-.5 3.2-2.9h.2c2.7 0 5.3-.2 7.8-.7.1.1.2.2.4.3 1.5 1 7.1.8 9.6.7s6.2.9 8.6.5c2.9-.5 3.4-2.3 1.6-3.2-1.5-.8-3.8-1.3-6.7-3.1C90.6 83.4 100 68.7 100 51.8zM60.1 5.5c0-.5.1-1.5.2-2.1 0-.2 0-.4.1-.5v-.1c.1-.5 1-1.5 4.1-1.5 2.9 0 4.2.9 4.3 1.4v.1c0 .1 0 .3.1.5.1.8.2 1.9.1 2.7 0 .5-.1 2.1-.2 2.9 0 .1 0 .3-.1.5v.1c0 .2-.1.3-.1.5-.1.5-.2 1.1-.4 1.8-.1.6-.5 1.2-.9 1.7-.2.3-.5.5-.7.5-1.1.3-3.1.3-4.2 0-.3-.1-.5-.2-.8-.4 0-.1-.1-.1-.1-.2-.6-.9-.9-1.7-1-2.9 0-.4-.1-.6-.1-.9v-.1c-.1-.6-.2-1-.2-1.6v-.3c-.1-1.3-.1-2.1-.1-2.1zm-.4 7.5v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1-.2-.3-.4-.5-.6-.7-.3-.4-.5-.6-.5-.7.3-.4.4-.9.4-1.6zm.5 3.4zm-7.3-.3c.6.1 1.2.5 1.7.9.2.2.5.4.6.6-.1-.2-.2-.5-.3-.7-.1-.2-.3-.4-.4-.5.4-.3.8-.7 1.2-.9.2-.1.4-.1.7-.1.9.1 1.6.2 2.1.5.6.2 1 .5 1.3.8 0 0 .1 0 .1.1h.1c.1 0 .1 0 .2.1.3.1.6.2 1 .3.9.3 1.9.6 2.7.8.1 0 .2.1.3.1.9.2 1.6.4 2 .5h.4c.2 0 .4 0 .5-.1.1 0 .1 0 .2-.1.7-.2 1.5-.7 2.1-1 .1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.2-.1.4-.2.6-.2.8-.2 1.7.1 2.3.5.3.2.6.4.9.7 0 .1.1.1.1.2.1.2.2.3.3.4l.1.1c.1.1.2.2.3.4 1.3-.4 1.5.2 2.1.9 1.6-.7 1.7.2 1.8.6h-.1c-.5 0-1.2 0-2.1.2l-.3-.3c-.5-.4-1.2-.8-1.9-1.1-.1 0-.1-.1-.2-.1h-.1c-.4-.2-.8-.2-1.2-.4-.1-.1-.2-.1-.4-.2-.3-.1-.6-.3-.9-.3h-.3c-1.2.1-2 .4-2.7.6-.3.1-.7.2-1 .2-.4.1-.8.1-1.3 0-.3 0-.6-.1-.9-.1-.5-.1-.8-.2-1.2-.3-.2 0-.3-.1-.5-.1h-.1c-.6-.2-1.2-.3-1.8-.4h-.1-2.1c-.4.1-.6.1-.7.1-.3 0-.7.1-1.1.1h-1.3c-.9 0-1.9-.2-2.7-.6-.1 0-.2-.1-.3-.1H53c-.1 0-.1 0-.2-.1-.7-.3-1.6-.4-2.5-.4 1.2-.8 1.8-1.4 2.6-1.3zm6.8 2zm-15.2 4.1c.1-.7.4-1.4.9-2 .1-.1.2-.2.2-.3l.8-.8c.9-.6 1.9-1.1 3-1.3.5-.1 1-.2 1.4-.2H52c.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1.2.1.4.2.4.2.8.3 1.3.4.2 0 .5.1.7.1.7.1 1.5.1 2.3.1H58.7c.4 0 .7-.1 1-.1H61.7c.6.1 1.1.2 1.7.4.2 0 .4.1.6.2.3.1.7.2 1.1.3.6.1 1.1.2 1.5.2.6 0 1.1-.1 1.6-.2.2 0 .3-.1.5-.1.5-.1 1-.3 1.7-.4.2 0 .5-.1.7-.1h.6c.2 0 .4.1.5.2l.1.1h.1c.1 0 .1 0 .2.1.2.1.3.1.4.1h.2c.1.1.3.1.4.2.4.2 1 .6 1.6.9.1.1.2.2.4.2.1.1.2.1.3.2.2.1.3.3.4.3l.1.1c1.1 1.4 1.8 3.3 1.6 5.3-.3 1.5-1.6.7-2.5.3 0 0-.1 0-.1-.1-.3-.1-.6-.2-.9-.4-.2-.1-.4-.1-.5-.2-1.2-.4-2.5-.7-4-.7-2 0-4.6.1-6.8.8-3 .8-4 .8-5.3.1-.8-.4-1.8-1.1-2.6-1.7-.1-.1-.2-.1-.2-.2-.1-.1-.1-.1-.2-.1-.3-.2-.6-.4-.6-.5l-.1-.1c-.2.3-.6 1-.8 1.4v.1c-.1 1.7-1 4.2-2.6 5.6-.2.1-.4.3-.6.4-.2.1-.5.2-.7.3-.7.2-1.4.2-1.9-.2-.5-.3-1.3-.7-2.3-1.1 2 1.6 3 2.8 3.9 4.9.7 1.7 1.7 4 3.9 6.5l.3.3c1.1 0 2.1.2 3 .7.4.2.7.4 1 .7.2.2.4.3.5.5.5.4.9.8.8 1.3v.1s0 .1-.1.1c-.1.2-.3.5-.5.7-.1.1-.4.4-.6.7-.1.1-.2.2-.3.2-.1.1-.4.3-.7.6-.2.2-.4.3-.5.4-.2.1-.4.4-.6.5-.3.1-.5.2-.8.1-.3 0-.7-.2-1-.3-.5-.3.1-.3-.5-.8-1.4-1-2.2-1.7-1.9-3.4v-.2c-.2-.1-.3-.3-.5-.4-3.9-3-10.1-4.9-11.5-8.3-.9-2.3-1-3.4-.2-4.4.4-.5.8-1 1-1.4 1.3-2.3.9-4.4 2.4-5.4 1.8-1.2 3.3.2 4.1 1.4-.5-2.1-2.3-2.6-2.3-2.8.3.1.3-.1.3-.3zm29 20s-.1 0 0 0c-.1 0-.1 0 0 0-.9.1-3.3.3-5.4.3h-.9c-.7 0-1.3-.1-1.8-.2-.1 0-.2 0-.3-.1-.7-.2-1.6-.5-2.4-.8-.6-.2-1.2-.5-1.7-.7-1.1-.5-2.1-1.1-2.3-1.3-.5-1.4-.7-2.7-.7-3.4.8-.4 1.3-.7 1.9-1.4-1.7.3-2.4.2-3.4-.4-1-.5-2.6-2.2-3.6-3.4 1-1.2 1.7-2.9 1.4-5.1.1-.2.3-.4.4-.6 0 .1.1.1.2.2.7.9 2.4 2 4.6 2.8 1.1.4 2 .1 2.9-.1 4-1 8.1-1.3 11.9-.1.1 0 .2.1.3.1.5.2.9.4 1.4.6.1 0 .1.1.2.1.1.7.2 2-.3 3.5-.1.3-.2.6-.4.9-.2.3-.3.6-.5 1-.1.3-.2.5-.4.8-.2.4-.3.8-.5 1.3-.4 1.4-.7 3.4-.6 6zm-23.9-9c.4-.2 1-.4 1.5-.8 1.6 1.8 3.3 3 5 4.1.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.3-3-6-4.4-8.3zm-32.9 6.5c-1.3.7-2.5 1.4-3.6 2.2-.2.1-.5.3-.7.4-.1.1-.3.2-.5.3-4.5 2.9-8.1 5.8-10.5 8.5 1.7-10.8 10-16.5 14.3-19.2.1-.1.2-.2.4-.2 10-6.2 19.2-9.2 28-11.7-.5.8-.9 1.7-1 2.8v.2c-.8.1-2.5.2-3.5 3-.1.2-.2.5-.3.8-.3 1.2-.6 2-.9 2.6-.9.4-5 2.2-9.9 4.5-1.6.8-3.3 1.6-5 2.4-2.3 1-4.6 2.2-6.8 3.4zm28 24.8s0-.1 0 0c-.4-.3-.8-.5-1.2-.7h-.1c-.4-.2-.7-.3-1.1-.5h-.1c-.4-.1-.8-.3-1.3-.4h-.2c-.4-.1-.8-.2-1.3-.2h-.1c-.5-.1-1-.1-1.5-.1H35.9c-3.7.1-6.5-.4-8.6-1.5-.7-.4-1.4-.8-1.9-1.3-.9-.7-1.5-1.6-2.1-2.6-.4-.7-.7-1.4-.9-2.2-.4-1.2-.6-2.5-.8-3.9 0-.5-.1-1-.2-1.5l-.3-1.5c-.6-2.9-1.6-5.5-3.2-7.2 6.3-3.5 15-7.9 17.8-8.8.3-.1.6-.2.8-.3-.3 1.1.4 2.7.9 3.9 2.1 4.9 8.6 5.4 12.9 9.1 0 .5 0 1.1.2 1.6.5.6 1.7 1.6 1.7 1.6-.2.2-.1.7-.1.7.9 1 2.3 1 2.3 1-1.8 5.2-3.4 10.9-1.9 16.9-.7 1-1.5 1.8-2.2 2.8-.7-.2-1.4-.6-1.9-1.3 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-1.5-1.8-.1-.1c-.5-.4-1.2-.9-1.9-1.3zm7.9 33.6c-1.3.1-2.9 0-4.3-.3h-.2-.1c-1.5-.8-2.1-1.2-2-2.4 0-.2 0-.3.1-.5 0-.1.1-.2.1-.3.5-1.1 2.1-2.2 3.4-3.2-.8 0-1.8.7-1.7-.1.2-1.5.9-1.3 1.3-2.1-.2-.3 3.3-.2 3.8.3v.1c0 .7.7 1.7.5 2.2-.1.3-.4-.2-.8-.3.2 1.1.6 3.1 1.3 4.6.1.1.1.2.1.3 0 .1.1.2.1.3 0 .7-.4 1.2-1.6 1.4zM59 67.7c0 .9-.3 1.6-.6 2-.7 1.1-1.7 1.4-2 3.2.4-.6 1.1-1.1 1.1-.9 0 .8-.1 1.4-.1 2v.2c-.1.6-.2 1.1-.3 1.6-.2.9-.5 1.7-.7 2.4-.4 1.2-.9 2.1-1.3 3.1l-.6 1.5c-.6 1.7-.4 5.6-.6 5.7-1.6.3-4.1-.3-4.7-.6.3-2.2.4-4.5.5-6.9.1-2.1.3-4.3.9-6.6.1-.5.3-1 .4-1.5 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.5-1.6 1.4-2.7 2.6-4.2.4-.4.7-.9 1.2-1.4-.1-.4-.2-.8-.4-1.3-.7-2.6-1.3-7.3 1.5-16.1.1 0 .2-.1.3-.1.2-.1.7-.5.8-.6.1-.1.3-.2.4-.3.1 0 .1-.1.2-.1l.6-.6 1.1-1.1c.4-.4.7-.5.8-.9v-.2c0-.8-1.1-1.5-1.5-2.1l-.1-.1c.1-.2.1-.4.2-.6 0-.2.1-.5.1-.8 0-.2.1-.5.1-.7.1.1.6.4 1.8.7.6.2 1.3.4 2.3.7 1.1.3 2.4.5 3.6.6 2.9.2 5.6 0 6.7-.2h.3v.1c0 .1 0 .2-.1.3v.9c0 .2 0 .3.1.5v.1c0 .4.1.7.2 1.1 0 .3.1.5.1.7v.1c0 .3.1.5.1.7 0 .2.1.3.1.5.1.2.1.4.2.6v.2c.1.4.2.8.2 1.1 1 5.7 2.3 12.9-1.1 16.7.2.8.3 1.9 0 3.2-.1.7-.3 1.4-.6 2.2-.2.5-.3 1-.5 1.5h-.3c-4.5.6-7.1.2-8.3-.1.5-1.6 1.7-3.3 3.7-3.2-.1-3.7-1.1-5-2-7.6 1.3-3 1.3-5.7 2-9.2v-.2c.2-.8.3-1.6.6-2.5-.4.5-.8 1.5-1.2 2.6v.1c-.5 1.5-.9 3.4-1.2 4.8-.2.8-.4 1.6-.7 2.4-.2.5-.4.9-.6 1.4-1.5 1.9-3 3.9-5.5 5.6zm18.5 24.9c1.5 1.1 4.7 1.8 5.5 2.3l.3.3c.1.1.1.2.1.3-.1.4-.7.7-1.9.9-.5.1-.9.1-1.4.1-1.3 0-2.6-.2-5.1-.5-3.4-.5-5.2-.4-8.6-.4-.3 0-.6 0-.9-.1-.2 0-.4-.1-.5-.1-.6-.2-1-.5-1.2-.8-.1-.2-.1-.3-.1-.5-.1-.7.2-1.5.6-2.3.2-.4.3-.7.4-1 .5-1.3.4-2.1.2-4.9 0-.2-.1-.4-.1-.7-.2-1.3-.5-2.3-.8-3.1-.4-1.1-.9-1.9-1.2-3-.6-2.1-1-4.3-.6-4.8H62.5c.2.1.5.2.9.3.5.1 1.1.2 2 .3 2.2.2 5.1-.2 6.6-.4.3-.1.6-.1.8-.1h.4c.4 0 .1.6-.1 1.2-.1.7-.5 3.3-.8 5.1-.3 1.8-.2 7.1-.1 8.8v.1c0 .3 1.9 1.2 3.5 2.1.7.2 1.4.5 1.8.9zm4.8-48.2c0 .1 0 .1 0 0-.1.1-.2.2-.2.3 0-.1-.1-.1-.1-.2 0 .1 0 .2-.1.2-.2.9-.6 2.4-2.2 4.1-.4.4-.7.6-1 .7-.5.1-.9 0-1.5-.1-.9-.2-1.3-.6-2.2-1.1-.1-.6-.3-1.3-.4-1.8 0-.3-.1-.5-.1-.6v-1l.4-.4s.7-1 1.8-1 2.2-.2 2.5-.5v-.1-.3c0-.1 0-.2-.1-.3-.4-1.4-2.1-1.8-1.4-4.8 0-.2.3-.5 1.2-.5-1.4-.3-2-.4-3-1.3.5-1.1 1-1.9 1.3-2.6.8-1.5.3-3.5.3-3.5.8-.3 1.6-.7 1.7-1 .9-2.8-.7-5.5-2.5-7.2 1.2-.1 2.6.1 3.6 1.1 2.4 2.4 1.8 5 1 6.8.6.7 2.1 2.9 1.2 5.3-.2.6-1.4.6-2.3 2.1 2.3-1.3 3.7-1 4.2.7 1 2.4-.6 5.3-2.1 7z"/><path d="M22 53.4v-.2c0-.2-.1-.5-.2-.9s-.1-.8-.2-1.3c-.5-4.7-1.9-9.4-4.9-11.3 3.7-2 16.8-8.5 21.9-10.5 2.9-1.2.8-.4-.2 1.4-.8 1.4-.3 2.9-.5 3.2-.6.8-12.6 10.5-15.9 19.6zm32.2-2.3c-3.4 3.8-12 11-18.2 11.4 8.7-.2 12.2 4.1 14.7 9.7 2.6-5.2 2.7-10.3 2.6-16.1 0-2.6 1.8-6 .9-5zm5.3-23L54.3 24s-1.1 3.1-1 4.6c.1 1.6-1.8 2.7-.9 3.6.9.9 3.2 2.5 4 3.4.7.9 1.1 7.1 1.1 7.1l2.2 2.7s1-1.8 1.1-6.3c.2-5.4-2.9-7.1-3.3-8.6-.4-1.4.6-2.9 2-2.4zm3.1 45.6l3.9.3s1.2-2.2 2.1-3.5c.9-1.4.4-1.6 0-4.6-.4-3-1.4-9.3-1.2-13.6l-3.1 10.2s1.8 5.6 1.6 6.4c-.1.8-3.3 4.8-3.3 4.8zm5 18.8c-1.1 0-2.5-.4-3.5-.8l-1 .3.2 4s5.2.7 4.6-.4c-.6-1.2-.3-3.1-.3-3.1zm12 .6c-1 0-.3.2.4 1.2.8 1 .1 2-.8 2.3l3.2.5 1.9-1.7c.1 0-3.7-2.3-4.7-2.3zM73 76c-1.6.5-4.2.8-5.9.8-1.7.1-3.7-.1-5-.5v1.4s1.2.5 5.4.5c3.5.1 5.7-.8 5.7-.8l.9-.8c-.1.1.5-1.1-1.1-.6zm-.2 3.1c-1.6.6-3.9.6-5.6.7-1.7.1-3.7-.1-5-.5l.1 1.4s.7.3 4.9.4c3.5.1 5.7-.7 5.7-.7l.3-.5c-.1-.1.3-1-.4-.8zm5.9-42.7c-.9-.8-1.4-2.4-1.5-3.3l-1.9 2.5.7 1.2s2.5.1 2.8.1c.4 0 .3-.1-.1-.5zM69 14.7c.6-.7.2-2.7.2-2.7L66 14.6l-4.4-.8-.5-1.3-1.3-.1c.8 1.8 1.8 2.5 3.3 3.1.9.4 4.5.9 5.9-.8z" style=opacity:.4;fill-rule:evenodd;clip-rule:evenodd /></svg></a></div></div>'),
              t &&
                ((i.style.position = "absolute"),
                (i.style.top = e ? "calc(100% - 42px)" : "calc(100% - 51px)")),
              n &&
                (fY(n)
                  ? (i.style.cssText = n)
                  : "object" == typeof n &&
                    ((n.data = "root"), fb.set(i, n).kill()),
                i.style.top && (i.style.bottom = "auto"),
                i.style.width &&
                  fb
                    .set(i, {
                      xPercent: -50,
                      left: "50%",
                      right: "auto",
                      data: "root",
                    })
                    .kill()),
              !e &&
                i.offsetWidth < 600 &&
                (i.setAttribute("class", "gs-dev-tools minimal"),
                t && (i.style.top = "calc(100% - 42px)")),
              i
            );
          },
          f0 = !0,
          f2 = function (t, e, n, i) {
            var r, s;
            if (
              (("mousedown" === e || "mouseup" === e) &&
                (t.style.cursor = "pointer"),
              "mousedown" === e &&
                (s = fH(t.onpointerdown)
                  ? fH(t.ontouchstart)
                    ? null
                    : "touchstart"
                  : "pointerdown"))
            ) {
              (r = function (e) {
                "select" !== e.target.nodeName.toLowerCase() && e.type === s
                  ? (e.stopPropagation(),
                    f0 && (, n.call(t, e)))
                  : e.type !== s && n.call(t, e),
                  (f0 = !0);
              }),
                t.addEventListener(s, r, i),
                "pointerdown" !== s && t.addEventListener(e, r, i);
              return;
            }
            t.addEventListener(e, n, i);
          },
          f3 = function (t, e, n) {
            t.removeEventListener(e, n),
              (e =
                "mousedown" !== e
                  ? null
                  : fH(t.onpointerdown)
                  ? fH(t.ontouchstart)
                    ? null
                    : "touchstart"
                  : "pointerdown") && t.removeEventListener(e, n);
          },
          f5 = function (t, e, n, i) {
            var r,
              s = t.options,
              o = s.length;
            for (e += ""; --o > -1; )
              if (s[o].innerHTML === e || s[o].value === e)
                return (
                  (t.selectedIndex = o), (n.innerHTML = s[o].innerHTML), s[o]
                );
            i &&
              ((r = fU("option", t)).setAttribute("value", e),
              (r.innerHTML = n.innerHTML = fY(i) ? i : e),
              (t.selectedIndex = s.length - 1));
          },
          f4 = function (t, e, n) {
            var i = t.options,
              r = Math.min(i.length - 1, Math.max(0, t.selectedIndex + e));
            return (
              (t.selectedIndex = r),
              n && (n.innerHTML = i[r].innerHTML),
              i[r].value
            );
          },
          f6 = function () {
            var t,
              e,
              n,
              i = fA._first;
            if (fM) {
              for (t = fP._dur; i; )
                (e = i._next),
                  ("function" == typeof (n = i._targets && i._targets[0]) &&
                    n === i.vars.onComplete &&
                    !i._dur) ||
                    (n && n._gsIgnore) ||
                    fP.add(i, i._start - i._delay),
                  (i = e);
              return t !== fP.duration();
            }
          },
          f8 = function (t) {
            var e = fb.timeline(
              {
                data: "root",
                parent: fO,
                onComplete: function () {
                  return e.kill();
                },
              },
              fO._time
            );
            return (
              e
                .to(t.querySelector(".play-1"), {
                  duration: 0.4,
                  attr: {
                    d: "M5.75,3.13 C5.75,9.79 5.75,16.46 5.75,23.13 4.08,23.13 2.41,23.13 0.75,23.13 0.75,16.46 0.75,9.79 0.75,3.12 2.41,3.12 4.08,3.12 5.75,3.12",
                  },
                  ease: "power2.inOut",
                  rotation: 360,
                  transformOrigin: "50% 50%",
                })
                .to(
                  t.querySelector(".play-2"),
                  {
                    duration: 0.4,
                    attr: {
                      d: "M16.38,3.13 C16.38,9.79 16.38,16.46 16.38,23.13 14.71,23.13 13.04,23.13 11.38,23.13 11.38,16.46 11.38,9.79 11.38,3.12 13.04,3.12 14.71,3.12 16.38,3.12",
                    },
                    ease: "power2.inOut",
                    rotation: 360,
                    transformOrigin: "50% 50%",
                  },
                  0.05
                ),
              e
            );
          },
          f7 = function (t) {
            var e = fb.timeline(
              {
                data: "root",
                id: "loop",
                parent: fO,
                paused: !0,
                onComplete: function () {
                  return e.kill();
                },
              },
              fO._time
            );
            return (
              e
                .to(t, {
                  duration: 0.5,
                  rotation: 360,
                  ease: "power3.inOut",
                  transformOrigin: "50% 50%",
                })
                .to(
                  t.querySelectorAll(".loop-path"),
                  { duration: 0.5, fill: "#91e600", ease: "none" },
                  0
                ),
              e
            );
          },
          f9 = function (t) {
            return fb.getById(t) || fO.getById(t) || (t === fP.vars.id && fP);
          },
          dt = function (t) {
            (fb = t || fX()),
              !fw &&
                fb &&
                fI() &&
                ((fE = (fC = document).documentElement),
                (fT = window),
                (fL = fb.core.context || function () {}),
                fb.registerPlugin(oP),
                ((fA = fb.globalTimeline)._sort = !0),
                (fA.autoRemoveChildren = !1),
                (fS = fb.core.Animation),
                (fO = fb.timeline({
                  data: "indy",
                  autoRemoveChildren: !0,
                  smoothChildTiming: !0,
                })).kill(),
                (fO._dp = 0),
                fO.to({}, { duration: 1e12 }),
                (fP = fb.timeline(
                  {
                    data: "root",
                    id: "Global Timeline",
                    autoRemoveChildren: !1,
                    smoothChildTiming: !0,
                    parent: fO,
                  },
                  0
                )),
                (fF = fb.to(
                  fP,
                  {
                    duration: 1,
                    time: 1,
                    ease: "none",
                    data: "root",
                    id: "_rootTween",
                    paused: !0,
                    immediateRender: !1,
                    parent: fO,
                  },
                  0
                )),
                (fA.killTweensOf = function (t, e, n) {
                  fP.killTweensOf(t, e, n), fP.killTweensOf.call(fA, t, e, n);
                }),
                (fO._start = fb.ticker.time),
                fb.ticker.add(function (t) {
                  return fO.render(t - fO._start);
                }),
                (fA._start += fA._time),
                (fP._start = fA._time = fA._tTime = 0),
                (fB = function (t, e, n, i) {
                  return fb.to(
                    e,
                    {
                      delay: t,
                      duration: 0,
                      onComplete: e,
                      onReverseComplete: e,
                      onCompleteParams: n,
                      onReverseCompleteParams: n,
                      callbackScope: i,
                      parent: fO,
                    },
                    fO._time
                  );
                })(0.01, function () {
                  return fM ? fM.update() : f6();
                }),
                fB(2, function () {
                  var t, e, n;
                  if (!fM)
                    for (f6(), t = fP._first, n = fP._start; t; )
                      (e = t._next),
                        t._tDur === t._tTime && (t._dur || 1 === t.progress())
                          ? t.kill()
                          : fA.add(t, t._start - t._delay + n),
                        (t = e);
                  dn.globalRecordingTime > 2
                    ? fB(dn.globalRecordingTime - 2, function () {
                        fM && fM.update(), (fA.autoRemoveChildren = !0);
                      })
                    : (fA.autoRemoveChildren = !0),
                    (fN = !1);
                }),
                (fw = 1));
          },
          de = function (t, e) {
            e.globalSync || t.parent === fA || fA.add(t, fA.time());
          },
          dn = function t(e) {
            !fw &&
              (dt(),
              fb || console.warn("Please gsap.registerPlugin(GSDevTools)")),
              (this.vars = e = e || {}),
              e.animation &&
                (
                  t.getByAnimation(e.animation) || {
                    kill: function () {
                      return 0;
                    },
                  }
                ).kill(),
              (e.id = e.id || (fY(e.animation) ? e.animation : fW++)),
              (fq[e.id + ""] = this),
              "globalSync" in e || (e.globalSync = !e.animation);
            var n,
              i,
              r,
              s,
              o,
              a,
              l,
              u,
              h,
              c,
              p,
              f,
              d,
              g = this,
              m = f1(e.container, e.minimal, e.css),
              v = function (t) {
                return m.querySelector(t);
              },
              _ = function (t, n) {
                return (
                  !1 !== e.persist &&
                    fG &&
                    sessionStorage.setItem("gs-dev-" + t + e.id, n),
                  n
                );
              },
              D = function (t) {
                var n;
                if (!1 !== e.persist && fG)
                  return (
                    (n = sessionStorage.getItem("gs-dev-" + t + e.id)),
                    "animation" === t
                      ? n
                      : "loop" === t
                      ? "true" === n
                      : parseFloat(n)
                  );
              },
              y = v(".playhead"),
              x = v(".timeline-track"),
              b = v(".progress-bar"),
              w = v(".time"),
              C = v(".duration"),
              E = 0,
              T = v(".in-point"),
              P = v(".out-point"),
              S = 0,
              F = 100,
              M = v(".animation-list"),
              k = v(".animation-label"),
              A = v(".play-pause"),
              O = f8(A),
              B = !1,
              L = v(".loop"),
              R = f7(L),
              N = v(".time-scale select"),
              z = v(".time-scale-label"),
              I = function (t, e, a) {
                return function (u) {
                  var h,
                    c = x.getBoundingClientRect(),
                    p = t.getBoundingClientRect(),
                    f = p.width * e,
                    d = fb.getProperty(t, "x"),
                    g = c.left - p.left - f + d,
                    m = c.right - p.right + (p.width - f) + d,
                    v = g;
                  a &&
                    (t !== T &&
                      (h = T.getBoundingClientRect()).left &&
                      (g += h.left + h.width - c.left),
                    t !== P &&
                      (h = P.getBoundingClientRect()).left &&
                      (m -= c.left + c.width - h.left)),
                    (o = B),
                    this.applyBounds({ minX: g, maxX: m }),
                    (i = -v * (n = l.duration() / c.width)),
                    s ? l.pause() : l.pause(i + n * this.x),
                    this.target === y &&
                      (this.activated && (this.allowEventDefault = !1),
                      (this.activated = !0)),
                    (r = !0);
                };
              },
              X = oP.create(y, {
                type: "x",
                cursor: "ew-resize",
                allowNativeTouchScrolling: !1,
                allowEventDefault: !0,
                onPress: I(y, 0.5, !0),
                onDrag: function () {
                  var t = i + n * this.x;
                  t < 0 ? (t = 0) : t > l._dur && (t = l._dur),
                    s || l.time(t),
                    (b.style.width =
                      Math.min(F - S, Math.max(0, (t / l._dur) * 100 - S)) +
                      "%"),
                    (w.innerHTML = t.toFixed(2));
                },
                onRelease: function () {
                  B || l.resume();
                },
              })[0],
              Y = function () {
                (S = 0),
                  (F = 100),
                  (T.style.left = "0%"),
                  (P.style.left = "100%"),
                  _("in", S),
                  _("out", F),
                  j(!0);
              },
              H = oP.create(T, {
                type: "x",
                cursor: "ew-resize",
                zIndexBoost: !1,
                allowNativeTouchScrolling: !1,
                allowEventDefault: !0,
                onPress: I(T, 1, !0),
                onDoubleClick: Y,
                onDrag: function () {
                  (S = ((i + n * this.x) / l.duration()) * 100),
                    l.progress(S / 100),
                    j(!0);
                },
                onRelease: function () {
                  S < 0 && (S = 0),
                    fK(),
                    (T.style.left = S + "%"),
                    _("in", S),
                    fb.set(T, { x: 0, data: "root", display: "block" }),
                    B || l.resume();
                },
              })[0],
              V = oP.create(P, {
                type: "x",
                cursor: "ew-resize",
                allowNativeTouchScrolling: !1,
                allowEventDefault: !0,
                zIndexBoost: !1,
                onPress: I(P, 0, !0),
                onDoubleClick: Y,
                onDrag: function () {
                  (F = ((i + n * this.x) / l.duration()) * 100),
                    l.progress(F / 100),
                    j(!0);
                },
                onRelease: function () {
                  F > 100 && (F = 100),
                    fK(),
                    (P.style.left = F + "%"),
                    _("out", F),
                    fb.set(P, { x: 0, data: "root", display: "block" }),
                    o || (q(), l.resume());
                },
              })[0],
              j = function (t) {
                if (!X.isPressed || !0 === t) {
                  var e,
                    n =
                      d || -1 !== a._repeat
                        ? 100 * l.progress() || 0
                        : (a.totalTime() / a.duration()) * 100,
                    i =
                      a._repeat &&
                      a._rDelay &&
                      a.totalTime() % (a.duration() + a._rDelay) > a.duration();
                  n > 100 && (n = 100),
                    n >= F
                      ? !d || l.paused() || X.isDragging
                        ? ((n !== F || -1 === a._repeat) &&
                            ((n = F), l.progress(n / 100)),
                          !B &&
                            (F < 100 ||
                              1 === a.totalProgress() ||
                              -1 === a._repeat) &&
                            G())
                        : i ||
                          ((n = S),
                          (e = l._targets && l._targets[0]) === a &&
                            e.seek(h + ((c - h) * S) / 100),
                          a._repeat > 0 && !S && 100 === F
                            ? 1 === a.totalProgress() &&
                              l.totalProgress(0, !0).resume()
                            : l.progress(n / 100, !0).resume())
                      : n < S && ((n = S), l.progress(n / 100, !0)),
                    (n !== E || !0 === t) &&
                      ((b.style.left = S + "%"),
                      (b.style.width = Math.max(0, n - S) + "%"),
                      (y.style.left = n + "%"),
                      (w.innerHTML = l._time.toFixed(2)),
                      (C.innerHTML = l._dur.toFixed(2)),
                      r &&
                        ((y.style.transform = "translate(-50%,0)"),
                        (y._gsap.x = "0px"),
                        (y._gsap.xPercent = -50),
                        (r = !1)),
                      (E = n)),
                    l.paused() !== B && U();
                }
              },
              W = function (t) {
                if (!X.isPressed) {
                  var e = t.target.getBoundingClientRect(),
                    n =
                      (((t.changedTouches ? t.changedTouches[0] : t).clientX -
                        e.left) /
                        e.width) *
                      100;
                  if (n < S) {
                    (S = n = Math.max(0, n)),
                      (T.style.left = S + "%"),
                      H.startDrag(t);
                    return;
                  }
                  if (n > F) {
                    (F = n = Math.min(100, n)),
                      (P.style.left = F + "%"),
                      V.startDrag(t);
                    return;
                  }
                  l.progress(n / 100).pause(), j(!0), X.startDrag(t);
                }
              },
              q = function () {
                if (l.progress() >= F / 100) {
                  de(l, e);
                  var t = l._targets && l._targets[0];
                  t === a && t.seek(h + ((c - h) * S) / 100),
                    l._repeat && !S
                      ? l.totalProgress(0, !0)
                      : l.reversed() || l.progress(S / 100, !0);
                }
                O.play(), l.resume(), B && g.update(), (B = !1);
              },
              G = function () {
                O.reverse(), l && l.pause(), (B = !0);
              },
              U = function () {
                B ? q() : G();
              },
              K = function (t) {
                if (!X.isPressed) {
                  de(l, e);
                  var n = l._targets && l._targets[0];
                  n === a && n.seek(h + ((c - h) * S) / 100),
                    l.progress(S / 100, !0),
                    B || l.resume();
                }
              },
              Z = function (t) {
                if ((_("loop", (d = t)), d)) {
                  if ((R.play(), l.progress() >= F / 100)) {
                    var e = l._targets && l._targets[0];
                    e === a && e.seek(h + ((c - h) * S) / 100),
                      a._repeat && !S && 100 === F
                        ? l.totalProgress(0, !0)
                        : l.progress(S / 100, !0),
                      q();
                  }
                } else R.reverse();
              },
              Q = function () {
                return Z(!d);
              },
              $ = function () {
                var t,
                  n,
                  i = fZ(u && !e.globalSync ? u : fP, !0),
                  r = M.children,
                  s = 0;
                for (
                  u && !e.globalSync
                    ? i.unshift(u)
                    : e.hideGlobalTimeline || i.unshift(fP),
                    n = 0;
                  n < i.length;
                  n++
                )
                  ((t = r[n] || fU("option", M)).animation = i[n]),
                    (s = n && i[n].vars.id === i[n - 1].vars.id ? s + 1 : 0),
                    t.setAttribute(
                      "value",
                      (t.innerHTML =
                        i[n].vars.id +
                        (s
                          ? " [" + s + "]"
                          : i[n + 1] && i[n + 1].vars.id === i[n].vars.id
                          ? " [0]"
                          : ""))
                    );
                for (; n < r.length; n++) M.removeChild(r[n]);
              },
              J = function (t) {
                var n,
                  i,
                  r = parseFloat(N.options[N.selectedIndex].value) || 1;
                if (!arguments.length) return a;
                if (
                  (fY(t) && (t = f9(t)),
                  t instanceof fS ||
                    console.warn("GSDevTools error: invalid animation."),
                  t.scrollTrigger &&
                    console.warn(
                      "GSDevTools can't work with ScrollTrigger-based animations; either the scrollbar -OR- the GSDevTools scrubber can control the animation."
                    ),
                  t !== a)
                ) {
                  if (
                    (a && ((a._inProgress = S), (a._outProgress = F)),
                    (a = t),
                    l &&
                      ((r = l.timeScale()),
                      l._targets &&
                        l._targets[0] === u &&
                        (u.resume(), l.kill())),
                    (S = a._inProgress || 0),
                    (F = a._outProgress || 100),
                    (T.style.left = S + "%"),
                    (P.style.left = F + "%"),
                    p && (_("animation", a.vars.id), _("in", S), _("out", F)),
                    (h = 0),
                    (i = e.maxDuration || Math.min(1e3, fQ(a))),
                    a === fP || e.globalSync)
                  ) {
                    if (
                      (f6(),
                      (l = fF),
                      fM &&
                        fM !== g &&
                        console.warn(
                          "Error: GSDevTools can only have one instance that's globally synchronized."
                        ),
                      (fM = g),
                      a !== fP)
                    )
                      for (
                        (c = (n = a).totalDuration()) > 0x5f5e0ff &&
                        (c = n.duration());
                        n.parent;

                      )
                        (h = h / n._ts + n._start),
                          (c = c / n._ts + n._start),
                          (n = n.parent);
                    else c = fP.duration();
                    c - h > i && (c = h + i),
                      fP.pause(h),
                      (fF.vars.time = c),
                      fF.invalidate(),
                      fF.duration(c - h).timeScale(r),
                      B
                        ? fF.progress(1, !0).pause(0, !0)
                        : fB(0.01, function () {
                            fF.resume().progress(S / 100), B && q();
                          });
                  } else {
                    if (
                      (fM === g && (fM = null),
                      (h = Math.min(S * a.duration(), a.time())),
                      a !== u && u)
                    ) {
                      for (
                        (c = (n = a).totalDuration()) > 0x5f5e0ff &&
                        (c = n.duration());
                        n.parent.parent && n !== u;

                      )
                        (h = h / (n._ts || n._pauseTS) + n._start),
                          (c = c / (n._ts || n._pauseTS) + n._start),
                          (n = n.parent);
                      c - h > i && (c = h + i),
                        u.pause(h),
                        (l = fb.to(
                          u,
                          {
                            duration: c - h,
                            time: c,
                            ease: "none",
                            data: "root",
                            parent: fO,
                          },
                          fO._time
                        ));
                    } else (l = a), !d && l._repeat && Z(!0);
                    l.timeScale(r), fF.pause(), fP.resume(), l.seek(0);
                  }
                  (C.innerHTML = l.duration().toFixed(2)), f5(M, a.vars.id, k);
                }
              },
              tt = function () {
                var t, e, n;
                a === fP &&
                  ((t = fP._time),
                  fP.progress(1, !0).time(t, !0),
                  (t = (fF._dp._time - fF._start) * fF._ts),
                  1e3 === (n = Math.min(1e3, fP.duration())) &&
                    (n = Math.min(1e3, fQ(fP))),
                  1 != (e = fF.duration() / n) &&
                    n &&
                    ((S *= e),
                    F < 100 && (F *= e),
                    fF.seek(0),
                    (fF.vars.time = n),
                    fF.invalidate(),
                    fF.duration(n),
                    fF.time(t),
                    (C.innerHTML = n.toFixed(2)),
                    (T.style.left = S + "%"),
                    (P.style.left = F + "%"),
                    j(!0)));
              },
              te = function (t) {
                J(M.options[M.selectedIndex].animation),
                  t.target && t.target.blur && t.target.blur(),
                  B && q();
              },
              tn = function (t) {
                var e,
                  n = parseFloat(N.options[N.selectedIndex].value) || 1;
                l.timeScale(n),
                  _("timeScale", n),
                  B ||
                    (l.progress() >= F / 100
                      ? ((e = l._targets && l._targets[0]) === a &&
                          e.seek(h + ((c - h) * S) / 100),
                        l.progress(S / 100, !0).pause())
                      : l.pause(),
                    fB(0.01, function () {
                      return l.resume();
                    })),
                  (z.innerHTML = n + "x"),
                  N.blur && N.blur();
              },
              ti = fb.to(
                [v(".gs-bottom"), v(".gs-top")],
                {
                  duration: 0.3,
                  autoAlpha: 0,
                  y: 50,
                  ease: "power2.in",
                  data: "root",
                  paused: !0,
                  parent: fO,
                },
                fO._time
              ),
              tr = !1,
              ts = function (t) {
                oP.hitTest(t, m) ||
                  X.isDragging ||
                  H.isDragging ||
                  V.isDragging ||
                  tu.restart(!0);
              },
              to = function () {
                tr || (ti.play(), tu.pause(), (tr = !0));
              },
              ta = function () {
                tu.pause(), tr && (ti.reverse(), (tr = !1));
              },
              tl = function () {
                tr ? ta() : to();
              },
              tu = fB(1.3, to).pause(),
              th = function (t) {
                fN && !fz && (fz = fP._start),
                  (p = !t),
                  (u =
                    (n = e.animation) instanceof fS
                      ? n
                      : n
                      ? fb.getById(n)
                      : null) &&
                    !u.vars.id &&
                    (u.vars.id = "[no id]"),
                  f6(),
                  $();
                var n,
                  i = f9(D("animation"));
                i &&
                  ((i._inProgress = D("in") || 0),
                  (i._outProgress = D("out") || 100)),
                  e.paused && G(),
                  (a = null),
                  J(u || i || fP);
                var r = e.timeScale || D("timeScale"),
                  s = i === a;
                r && (f5(N, r, z, r + "x"), l.timeScale(r)),
                  100 ===
                    (S =
                      ("inTime" in e
                        ? fJ(e.inTime, a, 0, 0)
                        : s
                        ? i._inProgress
                        : 0) || 0) &&
                    !e.animation &&
                    i &&
                    (J(fP), (S = fJ(e.inTime, a, 0, 0) || 0)),
                  S &&
                    ((T.style.left = S + "%"),
                    (T.style.display = P.style.display = "block")),
                  (F =
                    ("outTime" in e
                      ? fJ(e.outTime, a, 100, S)
                      : s
                      ? i._outProgress
                      : 0) || 100) < S && (F = 100),
                  100 !== F &&
                    ((P.style.left = F + "%"),
                    (T.style.display = P.style.display = "block")),
                  (d = "loop" in e ? e.loop : D("loop")) && Z(!0),
                  e.paused && l.progress(S / 100, !0).pause(),
                  fN && a === fP && fz && e.globalSync && !B && l.time(-fz, !0),
                  j(!0);
              };
            f2(M, "change", te),
              f2(M, "mousedown", $),
              f2(A, "mousedown", U),
              f2(v(".seek-bar"), "mousedown", W),
              f2(v(".rewind"), "mousedown", K),
              f2(L, "mousedown", Q),
              f2(N, "change", tn),
              "auto" === e.visibility
                ? (f2(m, "mouseout", ts), f2(m, "mouseover", ta))
                : "hidden" === e.visibility && ((tr = !0), ti.progress(1)),
              !1 !== e.keyboard &&
                (fk && e.keyboard
                  ? console.warn(
                      "[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active."
                    )
                  : ((fk = g),
                    f2(
                      fE,
                      "keydown",
                      (f = function (t) {
                        var e,
                          n = t.keyCode ? t.keyCode : t.which;
                        32 === n
                          ? U()
                          : 38 === n
                          ? ((e = parseFloat(f4(N, -1, z))),
                            l.timeScale(e),
                            _("timeScale", e))
                          : 40 === n
                          ? ((e = parseFloat(f4(N, 1, z))),
                            l.timeScale(e),
                            _("timeScale", e))
                          : 37 === n
                          ? K()
                          : 39 === n
                          ? l.progress(F / 100)
                          : 76 === n
                          ? Q()
                          : 72 === n
                          ? tl()
                          : 73 === n
                          ? (_("in", (S = 100 * l.progress())),
                            (T.style.left = S + "%"),
                            j(!0))
                          : 79 === n &&
                            (_("out", (F = 100 * l.progress())),
                            (P.style.left = F + "%"),
                            j(!0));
                      })
                    ))),
              fb.set(y, { xPercent: -50, x: 0, data: "root" }),
              fb.set(T, { xPercent: -100, x: 0, data: "root" }),
              (T._gsIgnore =
                P._gsIgnore =
                y._gsIgnore =
                A._gsIgnore =
                L._gsIgnore =
                  !0),
              fb.killTweensOf([T, P, y]),
              th(fN),
              fN && fB(1e-4, th, [!1], this),
              fb.ticker.add(j),
              (this.update = function (t) {
                fM === g && ((!fF.paused() || t) && f6(), tt());
              }),
              (this.kill = this.revert =
                function () {
                  f3(M, "change", te),
                    f3(M, "mousedown", $),
                    f3(A, "mousedown", U),
                    f3(v(".seek-bar"), "mousedown", W),
                    f3(v(".rewind"), "mousedown", K),
                    f3(L, "mousedown", Q),
                    f3(N, "change", tn),
                    X.disable(),
                    H.disable(),
                    V.disable(),
                    fb.ticker.remove(j),
                    f3(m, "mouseout", ts),
                    f3(m, "mouseover", ta),
                    m.parentNode.removeChild(m),
                    fM === g && (fM = null),
                    fk === g && ((fk = null), f3(fE, "keydown", f)),
                    delete fq[e.id + ""];
                }),
              (this.minimal = function (t) {
                var n,
                  i = m.classList.contains("minimal");
                if (!arguments.length || i === t) return i;
                t ? m.classList.add("minimal") : m.classList.remove("minimal"),
                  e.container &&
                    (m.style.top = t
                      ? "calc(100% - 42px)"
                      : "calc(100% - 51px)"),
                  X.isPressed &&
                    ((s = !0),
                    X.endDrag(X.pointerEvent),
                    (s = !1),
                    (n = 100 * l.progress()),
                    (b.style.width = Math.max(0, n - S) + "%"),
                    (y.style.left = n + "%"),
                    (y.style.transform = "translate(-50%,0)"),
                    (y._gsap.x = "0px"),
                    (y._gsap.xPercent = -50),
                    X.startDrag(X.pointerEvent, !0));
              }),
              (this.animation = J),
              (this.updateList = $),
              fL(this);
          };
        (dn.version = "3.12.5"),
          (dn.globalRecordingTime = 2),
          (dn.getById = function (t) {
            return t ? fq[t] : fM;
          }),
          (dn.getByAnimation = function (t) {
            for (var e in (fY(t) && (t = fb.getById(t)), fq))
              if (fq[e].animation() === t) return fq[e];
          }),
          (dn.create = function (t) {
            return new dn(t);
          }),
          (dn.register = dt),
          fX() && fb.registerPlugin(dn);
        var di,
          dr,
          ds,
          da,
          dl,
          du,
          dh,
          dc,
          dp = function () {
            return di || (di = window.gsap);
          },
          df = {},
          dd = function (t) {
            return dc(t).id;
          },
          dg = function (t) {
            return df[dd("string" == typeof t ? ds(t)[0] : t)];
          },
          dm = function (t) {
            var e,
              n = dl;
            if (t - dh >= 0.05)
              for (dh = t; n; )
                ((e = n.g(n.t, n.p)) !== n.v1 || t - n.t1 > 0.2) &&
                  ((n.v2 = n.v1), (n.v1 = e), (n.t2 = n.t1), (n.t1 = t)),
                  (n = n._next);
          },
          dv = { deg: 360, rad: 2 * Math.PI },
          d_ = function () {
            (di = dp()) &&
              ((ds = di.utils.toArray),
              (da = di.utils.getUnit),
              (dc = di.core.getCache),
              (du = di.ticker),
              (dr = 1));
          },
          dD = function (t, e, n, i) {
            (this.t = t),
              (this.p = e),
              (this.g = t._gsap.get),
              (this.rCap = dv[n || da(this.g(t, e))]),
              (this.v1 = this.v2 = 0),
              (this.t1 = this.t2 = du.time),
              i && ((this._next = i), (i._prev = this));
          },
          dy = (function () {
            function t(t, e) {
              dr || d_(),
                (this.target = ds(t)[0]),
                (df[dd(this.target)] = this),
                (this._props = {}),
                e && this.add(e);
            }
            t.register = function (t) {
              (di = t), d_();
            };
            var e = t.prototype;
            return (
              (e.get = function (t, e) {
                var n,
                  i,
                  r =
                    this._props[t] ||
                    console.warn("Not tracking " + t + " velocity.");
                return (
                  (n = parseFloat(e ? r.v1 : r.g(r.t, r.p)) - parseFloat(r.v2)),
                  (i = r.rCap) &&
                    (n %= i) != n % (i / 2) &&
                    (n = n < 0 ? n + i : n - i),
                  Math.round(1e4 * (n / ((e ? r.t1 : du.time) - r.t2))) / 1e4
                );
              }),
              (e.getAll = function () {
                var t,
                  e = {},
                  n = this._props;
                for (t in n) e[t] = this.get(t);
                return e;
              }),
              (e.isTracking = function (t) {
                return t in this._props;
              }),
              (e.add = function (t, e) {
                t in this._props ||
                  (dl || (du.add(dm), (dh = du.time)),
                  (dl = this._props[t] = new dD(this.target, t, e, dl)));
              }),
              (e.remove = function (t) {
                var e,
                  n,
                  i = this._props[t];
                i &&
                  ((e = i._prev),
                  (n = i._next),
                  e && (e._next = n),
                  n ? (n._prev = e) : dl === i && (du.remove(dm), (dl = 0)),
                  delete this._props[t]);
              }),
              (e.kill = function (t) {
                for (var e in this._props) this.remove(e);
                t || delete df[dd(this.target)];
              }),
              (t.track = function (e, n, i) {
                dr || d_();
                for (
                  var r,
                    s,
                    o = [],
                    a = ds(e),
                    l = n.split(","),
                    u = (i || "").split(","),
                    h = a.length;
                  h--;

                ) {
                  for (r = dg(a[h]) || new t(a[h]), s = l.length; s--; )
                    r.add(l[s], u[s] || u[0]);
                  o.push(r);
                }
                return o;
              }),
              (t.untrack = function (t, e) {
                var n = (e || "").split(",");
                ds(t).forEach(function (t) {
                  var e = dg(t);
                  e &&
                    (n.length
                      ? n.forEach(function (t) {
                          return e.remove(t);
                        })
                      : e.kill(1));
                });
              }),
              (t.isTracking = function (t, e) {
                var n = dg(t);
                return n && n.isTracking(e);
              }),
              (t.getVelocity = function (t, e) {
                var n = dg(t);
                return n && n.isTracking(e)
                  ? n.get(e)
                  : console.warn("Not tracking velocity of " + e);
              }),
              t
            );
          })();
        (dy.getByTarget = dg), dp() && di.registerPlugin(dy);
        var dx,
          db,
          dw,
          dC,
          dE,
          dT,
          dP,
          dS,
          dF,
          dM,
          dk,
          dA,
          dO,
          dB,
          dL = dy.getByTarget,
          dR = function () {
            return dx || ((dx = window.gsap) && dx.registerPlugin && dx);
          },
          dN = function (t) {
            return "number" == typeof t;
          },
          dz = function (t) {
            return "object" == typeof t;
          },
          dI = function (t) {
            return "function" == typeof t;
          },
          dX = Array.isArray,
          dY = function (t) {
            return t;
          },
          dH = function (t, e, n) {
            for (var i in e) i in t || i === n || (t[i] = e[i]);
            return t;
          },
          dV = function t(e) {
            var n,
              i,
              r = {};
            for (n in e) r[n] = dz((i = e[n])) && !dX(i) ? t(i) : i;
            return r;
          },
          dj = function (t, e, n, i, r) {
            var s,
              o,
              a,
              l,
              u = e.length,
              h = 0,
              c = 1e10;
            if (dz(t)) {
              for (; u--; ) {
                for (a in ((s = e[u]), (o = 0), t)) o += (l = s[a] - t[a]) * l;
                o < c && ((h = u), (c = o));
              }
              if (1e10 > (r || 1e10) && r < Math.sqrt(c)) return t;
            } else
              for (; u--; )
                (o = (s = e[u]) - t) < 0 && (o = -o),
                  o < c && s >= i && s <= n && ((h = u), (c = o));
            return e[h];
          },
          dW = function (t, e, n, i, r, s, o) {
            if ("auto" === t.end) return t;
            var a,
              l,
              u = t.end;
            if (
              ((n = isNaN(n) ? 1e10 : n), (i = isNaN(i) ? -1e10 : i), dz(e))
            ) {
              if (
                ((a = e.calculated
                  ? e
                  : (dI(u) ? u(e, o) : dj(e, u, n, i, s)) || e),
                !e.calculated)
              ) {
                for (l in a) e[l] = a[l];
                e.calculated = !0;
              }
              a = a[r];
            } else
              a = dI(u) ? u(e, o) : dX(u) ? dj(e, u, n, i, s) : parseFloat(u);
            return (
              a > n ? (a = n) : a < i && (a = i),
              { max: a, min: a, unitFactor: t.unitFactor }
            );
          },
          dq = function (t, e, n) {
            return isNaN(t[e]) ? n : +t[e];
          },
          dG = function (t, e) {
            return (0.05 * e * t) / dM;
          },
          dU = function (t, e, n) {
            return Math.abs(((e - t) * dM) / n / 0.05);
          },
          dK = {
            resistance: 1,
            checkpoint: 1,
            preventOvershoot: 1,
            linkedProps: 1,
            radius: 1,
            duration: 1,
          },
          dZ = function (t, e, n, i) {
            if (e.linkedProps) {
              var r,
                s,
                o,
                a,
                l,
                u,
                h = e.linkedProps.split(","),
                c = {};
              for (r = 0; r < h.length; r++)
                (o = e[(s = h[r])]) &&
                  ((u = Math.abs(
                    (a = dN(o.velocity)
                      ? o.velocity
                      : (l = l || dL(t)) && l.isTracking(s)
                      ? l.get(s)
                      : 0) / dq(o, "resistance", i)
                  )),
                  (c[s] = parseFloat(n(t, s)) + dG(a, u)));
              return c;
            }
          },
          dQ = function (t, e, n, i, r, s) {
            if (
              (void 0 === n && (n = 10),
              void 0 === i && (i = 0.2),
              void 0 === r && (r = 1),
              void 0 === s && (s = 0),
              "string" == typeof t && (t = dC(t)[0]),
              !t)
            )
              return 0;
            var o,
              a,
              l,
              u,
              h,
              c,
              p,
              f,
              d,
              g,
              m = 0,
              v = 1e10,
              _ = e.inertia || e,
              D = dF(t).get,
              y = dq(_, "resistance", dT.resistance);
            for (o in ((g = dZ(t, _, D, y)), _))
              !dK[o] &&
                (dz((a = _[o])) ||
                  ((f = f || dL(t)) && f.isTracking(o)
                    ? (a = dN(a) ? { velocity: a } : { velocity: f.get(o) })
                    : (l = Math.abs((u = +a || 0) / y))),
                dz(a) &&
                  ((u = dN(a.velocity)
                    ? a.velocity
                    : (f = f || dL(t)) && f.isTracking(o)
                    ? f.get(o)
                    : 0),
                  (l = dk(i, n, Math.abs(u / dq(a, "resistance", y)))),
                  (c = (h = parseFloat(D(t, o)) || 0) + dG(u, l)),
                  "end" in a &&
                    ((a = dW(
                      a,
                      g && o in g ? g : c,
                      a.max,
                      a.min,
                      o,
                      _.radius,
                      u
                    )),
                    s &&
                      (dA === e && (dA = _ = dV(e)),
                      (_[o] = dH(a, _[o], "end")))),
                  "max" in a && c > +a.max + 1e-10
                    ? ((d = a.unitFactor || dT.unitFactors[o] || 1),
                      (p =
                        (h > a.max && a.min !== a.max) ||
                        (u * d > -15 && u * d < 45)
                          ? i + (n - i) * 0.1
                          : dU(h, a.max, u)) +
                        r <
                        v && (v = p + r))
                    : "min" in a &&
                      c < +a.min - 1e-10 &&
                      ((d = a.unitFactor || dT.unitFactors[o] || 1),
                      (p =
                        (h < a.min && a.min !== a.max) ||
                        (u * d > -45 && u * d < 15)
                          ? i + (n - i) * 0.1
                          : dU(h, a.min, u)) +
                        r <
                        v && (v = p + r)),
                  p > m && (m = p)),
                l > m && (m = l));
            return m > v && (m = v), m > n ? n : m < i ? i : m;
          },
          d$ = function () {
            (dx = dR()) &&
              ((dw = dx.parseEase),
              (dC = dx.utils.toArray),
              (dP = dx.utils.getUnit),
              (dF = dx.core.getCache),
              (dk = dx.utils.clamp),
              (dO = dx.core.getStyleSaver),
              (dB = dx.core.reverting || function () {}),
              (dM = (dE = dw("power3"))(0.05)),
              (dS = dx.core.PropTween),
              dx.config({
                resistance: 100,
                unitFactors: {
                  time: 1e3,
                  totalTime: 1e3,
                  progress: 1e3,
                  totalProgress: 1e3,
                },
              }),
              (dT = dx.config()),
              dx.registerPlugin(dy),
              (db = 1));
          },
          dJ = {
            version: "3.12.5",
            name: "inertia",
            register: function (t) {
              (dx = t), d$();
            },
            init: function (t, e, n, i, r) {
              db || d$();
              var s = dL(t);
              if ("auto" === e) {
                if (!s) {
                  console.warn(
                    "No inertia tracking on " +
                      t +
                      ". InertiaPlugin.track(target) first."
                  );
                  return;
                }
                e = s.getAll();
              }
              (this.styles = dO && "object" == typeof t.style && dO(t)),
                (this.target = t),
                (this.tween = n),
                (dA = e);
              var o,
                a,
                l,
                u,
                h,
                c,
                p,
                f,
                d,
                g = t._gsap,
                m = g.get,
                v = e.duration,
                _ = dz(v),
                D = e.preventOvershoot || (_ && 0 === v.overshoot),
                y = dq(e, "resistance", dT.resistance),
                x = dN(v)
                  ? v
                  : dQ(
                      t,
                      e,
                      (_ && v.max) || 10,
                      (_ && v.min) || 0.2,
                      _ && "overshoot" in v ? +v.overshoot : D ? 0 : 1,
                      !0
                    );
              for (o in ((e = dA), (dA = 0), (d = dZ(t, e, m, y)), e))
                dK[o] ||
                  (dI((a = e[o])) && (a = a(i, t, r)),
                  dN(a)
                    ? (h = a)
                    : dz(a) && !isNaN(a.velocity)
                    ? (h = +a.velocity)
                    : s && s.isTracking(o)
                    ? (h = s.get(o))
                    : console.warn(
                        "ERROR: No velocity was defined for " +
                          t +
                          " property: " +
                          o
                      ),
                  (c = dG(h, x)),
                  (f = 0),
                  (l = m(t, o)),
                  (u = dP(l)),
                  (l = parseFloat(l)),
                  dz(a) &&
                    ((p = l + c),
                    "end" in a &&
                      (a = dW(
                        a,
                        d && o in d ? d : p,
                        a.max,
                        a.min,
                        o,
                        e.radius,
                        h
                      )),
                    "max" in a && +a.max < p
                      ? D || a.preventOvershoot
                        ? (c = a.max - l)
                        : (f = a.max - l - c)
                      : "min" in a &&
                        +a.min > p &&
                        (D || a.preventOvershoot
                          ? (c = a.min - l)
                          : (f = a.min - l - c))),
                  this._props.push(o),
                  this.styles && this.styles.save(o),
                  (this._pt = new dS(
                    this._pt,
                    t,
                    o,
                    l,
                    0,
                    dY,
                    0,
                    g.set(t, o, this)
                  )),
                  (this._pt.u = u || 0),
                  (this._pt.c1 = c),
                  (this._pt.c2 = f));
              return n.duration(x), 1;
            },
            render: function (t, e) {
              var n = e._pt;
              if ((t = dE(e.tween._time / e.tween._dur)) || !dB())
                for (; n; )
                  n.set(
                    n.t,
                    n.p,
                    Math.round(1e4 * (n.s + n.c1 * t + n.c2 * t * t)) / 1e4 +
                      n.u,
                    n.d,
                    t
                  ),
                    (n = n._next);
              else e.styles.revert();
            },
          };
        "track,untrack,isTracking,getVelocity,getByTarget"
          .split(",")
          .forEach(function (t) {
            return (dJ[t] = dy[t]);
          }),
          dR() && dx.registerPlugin(dJ);
        var d1,
          d0,
          d2,
          d3,
          d5,
          d4 = function () {
            return d1 || ((d1 = window.gsap) && d1.registerPlugin && d1);
          },
          d6 = function (t) {
            return "function" == typeof t;
          },
          d8 = Math.atan2,
          d7 = Math.cos,
          d9 = Math.sin,
          gt = Math.sqrt,
          ge = Math.PI,
          gn = 2 * ge,
          gi = 0.3 * ge,
          gr = 0.7 * ge,
          gs = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
          go = /(^[#\.][a-z]|[a-y][a-z])/i,
          ga = /[achlmqstvz]/i,
          gl = function (t) {
            return console && console.warn(t);
          },
          gu = function (t) {
            var e,
              n = t.length,
              i = 0,
              r = 0;
            for (e = 0; e < n; e++) (i += t[e++]), (r += t[e]);
            return [i / (n / 2), r / (n / 2)];
          },
          gh = function (t) {
            var e,
              n,
              i,
              r = t.length,
              s = t[0],
              o = s,
              a = t[1],
              l = a;
            for (i = 6; i < r; i += 6)
              (e = t[i]),
                (n = t[i + 1]),
                e > s ? (s = e) : e < o && (o = e),
                n > a ? (a = n) : n < l && (l = n);
            return (
              (t.centerX = (s + o) / 2),
              (t.centerY = (a + l) / 2),
              (t.size = (s - o) * (a - l))
            );
          },
          gc = function (t, e) {
            void 0 === e && (e = 3);
            for (
              var n,
                i,
                r,
                s,
                o,
                a,
                l,
                u,
                h,
                c,
                p,
                f,
                d,
                g,
                m,
                v,
                _ = t.length,
                D = t[0][0],
                y = D,
                x = t[0][1],
                b = x,
                w = 1 / e;
              --_ > -1;

            )
              for (s = 6, n = (o = t[_]).length; s < n; s += 6)
                for (
                  h = o[s],
                    c = o[s + 1],
                    p = o[s + 2] - h,
                    g = o[s + 3] - c,
                    f = o[s + 4] - h,
                    m = o[s + 5] - c,
                    d = o[s + 6] - h,
                    v = o[s + 7] - c,
                    a = e;
                  --a > -1;

                )
                  (u = 1 - (l = w * a)),
                    (i = (l * l * d + 3 * u * (l * f + u * p)) * l + h),
                    (r = (l * l * v + 3 * u * (l * m + u * g)) * l + c),
                    i > D ? (D = i) : i < y && (y = i),
                    r > x ? (x = r) : r < b && (b = r);
            return (
              (t.centerX = (D + y) / 2),
              (t.centerY = (x + b) / 2),
              (t.left = y),
              (t.width = D - y),
              (t.top = b),
              (t.height = x - b),
              (t.size = (D - y) * (x - b))
            );
          },
          gp = function (t, e) {
            return e.length - t.length;
          },
          gf = function (t, e) {
            var n = t.size || gh(t),
              i = e.size || gh(e);
            return Math.abs(i - n) < (n + i) / 20
              ? e.centerX - t.centerX || e.centerY - t.centerY
              : i - n;
          },
          gd = function (t, e) {
            var n,
              i,
              r = t.slice(0),
              s = t.length,
              o = s - 2;
            for (e |= 0, n = 0; n < s; n++)
              (i = (n + e) % o), (t[n++] = r[i]), (t[n] = r[i + 1]);
          },
          gg = function (t, e, n, i, r) {
            var s,
              o,
              a,
              l,
              u = t.length,
              h = 0,
              c = u - 2;
            for (n *= 6, o = 0; o < u; o += 6)
              (l = t[(s = (o + n) % c)] - (e[o] - i)),
                (h += gt((a = t[s + 1] - (e[o + 1] - r)) * a + l * l));
            return h;
          },
          gm = function (t, e, n) {
            var i,
              r,
              s,
              o = t.length,
              a = gu(t),
              l = gu(e),
              u = l[0] - a[0],
              h = l[1] - a[1],
              c = gg(t, e, 0, u, h),
              p = 0;
            for (s = 6; s < o; s += 6)
              (r = gg(t, e, s / 6, u, h)) < c && ((c = r), (p = s));
            if (n)
              for (rE((i = t.slice(0))), s = 6; s < o; s += 6)
                (r = gg(i, e, s / 6, u, h)) < c && ((c = r), (p = -s));
            return p / 6;
          },
          gv = function (t, e, n) {
            for (
              var i, r, s, o, a, l, u = t.length, h = 1e20, c = 0, p = 0;
              --u > -1;

            )
              for (a = 0, l = (i = t[u]).length; a < l; a += 6)
                (o = gt((r = i[a] - e) * r + (s = i[a + 1] - n) * s)) < h &&
                  ((h = o), (c = i[a]), (p = i[a + 1]));
            return [c, p];
          },
          g_ = function (t, e, n, i, r, s) {
            var o,
              a,
              l,
              u,
              h = e.length,
              c = 0,
              p = Math.min(t.size || gh(t), e[n].size || gh(e[n])) * i,
              f = 1e20,
              d = t.centerX + r,
              g = t.centerY + s;
            for (o = n; o < h && !((e[o].size || gh(e[o])) < p); o++)
              (u = gt(
                (a = e[o].centerX - d) * a + (l = e[o].centerY - g) * l
              )) < f && ((c = o), (f = u));
            return (u = e[c]), e.splice(c, 1), u;
          },
          gD = function (t, e) {
            var n,
              i,
              r,
              s,
              o,
              a,
              l,
              u,
              h,
              c,
              p,
              f,
              d,
              g,
              m = 0,
              v = t.length,
              _ = e / ((v - 2) / 6);
            for (d = 2; d < v; d += 6)
              for (m += _; m > 0.999999; )
                (n = t[d - 2]),
                  (i = t[d - 1]),
                  (r = t[d]),
                  (s = t[d + 1]),
                  (o = t[d + 2]),
                  (a = t[d + 3]),
                  (l = t[d + 4]),
                  (u = t[d + 5]),
                  (h = n + (r - n) * (g = 1 / ((Math.floor(m) || 1) + 1))),
                  (p = r + (o - r) * g),
                  (h += (p - h) * g),
                  (p += (o + (l - o) * g - p) * g),
                  (c = i + (s - i) * g),
                  (f = s + (a - s) * g),
                  (c += (f - c) * g),
                  (f += (a + (u - a) * g - f) * g),
                  t.splice(
                    d,
                    4,
                    n + (r - n) * g,
                    i + (s - i) * g,
                    h,
                    c,
                    h + (p - h) * g,
                    c + (f - c) * g,
                    p,
                    f,
                    o + (l - o) * g,
                    a + (u - a) * g
                  ),
                  (d += 6),
                  (v += 6),
                  m--;
            return t;
          },
          gy = function (t, e, n, i, r) {
            var s,
              o,
              a,
              l,
              u,
              h,
              c,
              p = e.length - t.length,
              f = p > 0 ? e : t,
              d = p > 0 ? t : e,
              g = 0,
              m = "complexity" === i ? gp : gf,
              v = "position" === i ? 0 : "number" == typeof i ? i : 0.8,
              _ = d.length,
              D = "object" == typeof n && n.push ? n.slice(0) : [n],
              y = "reverse" === D[0] || D[0] < 0,
              x = "log" === n;
            if (d[0]) {
              if (
                f.length > 1 &&
                (t.sort(m),
                e.sort(m),
                (h = f.size || gc(f)),
                (h = d.size || gc(d)),
                (h = f.centerX - d.centerX),
                (c = f.centerY - d.centerY),
                m === gf)
              )
                for (_ = 0; _ < d.length; _++)
                  f.splice(_, 0, g_(d[_], f, _, v, h, c));
              if (p)
                for (
                  p < 0 && (p = -p),
                    f[0].length > d[0].length &&
                      gD(d[0], ((f[0].length - d[0].length) / 6) | 0),
                    _ = d.length;
                  g < p;

                )
                  (l = f[_].size || gh(f[_])),
                    (l = (a = gv(d, f[_].centerX, f[_].centerY))[0]),
                    (u = a[1]),
                    (d[_++] = [l, u, l, u, l, u, l, u]),
                    (d.totalPoints += 8),
                    g++;
              for (_ = 0; _ < t.length; _++)
                (s = e[_]),
                  (o = t[_]),
                  (p = s.length - o.length) < 0
                    ? gD(s, (-p / 6) | 0)
                    : p > 0 && gD(o, (p / 6) | 0),
                  y && !1 !== r && !o.reversed && rE(o),
                  (n = D[_] || 0 === D[_] ? D[_] : "auto") &&
                    (o.closed ||
                    (0.5 > Math.abs(o[0] - o[o.length - 2]) &&
                      0.5 > Math.abs(o[1] - o[o.length - 1]))
                      ? "auto" === n || "log" === n
                        ? ((D[_] = n = gm(o, s, !_ || !1 === r)),
                          n < 0 && ((y = !0), rE(o), (n = -n)),
                          gd(o, 6 * n))
                        : "reverse" !== n &&
                          (_ && n < 0 && rE(o), gd(o, (n < 0 ? -n : n) * 6))
                      : !y &&
                        (("auto" === n &&
                          Math.abs(s[0] - o[0]) +
                            Math.abs(s[1] - o[1]) +
                            Math.abs(s[s.length - 2] - o[o.length - 2]) +
                            Math.abs(s[s.length - 1] - o[o.length - 1]) >
                            Math.abs(s[0] - o[o.length - 2]) +
                              Math.abs(s[1] - o[o.length - 1]) +
                              Math.abs(s[s.length - 2] - o[0]) +
                              Math.abs(s[s.length - 1] - o[1])) ||
                          n % 2)
                      ? (rE(o), (D[_] = -1), (y = !0))
                      : "auto" === n
                      ? (D[_] = 0)
                      : "reverse" === n && (D[_] = -1),
                    o.closed !== s.closed && (o.closed = s.closed = !1));
              return (
                x && gl("shapeIndex:[" + D.join(",") + "]"),
                (t.shapeIndex = D),
                D
              );
            }
          },
          gx = function (t, e, n, i, r) {
            var s = rN(t[0]),
              o = rN(t[1]);
            gy(s, o, e || 0 === e ? e : "auto", n, r) &&
              ((t[0] = rY(s)),
              (t[1] = rY(o)),
              ("log" === i || !0 === i) &&
                gl('precompile:["' + t[0] + '","' + t[1] + '"]'));
          },
          gb = function (t, e) {
            if (!e) return t;
            var n,
              i,
              r,
              s = t.match(gs) || [],
              o = s.length,
              a = "";
            for (
              "reverse" === e
                ? ((i = o - 1), (n = -2))
                : ((i = (2 * (parseInt(e, 10) || 0) + 1 + 100 * o) % o),
                  (n = 2)),
                r = 0;
              r < o;
              r += 2
            )
              (a += s[i - 1] + "," + s[i] + " "), (i = (i + n) % o);
            return a;
          },
          gw = function (t, e) {
            var n,
              i,
              r,
              s,
              o,
              a,
              l,
              u = 0,
              h = parseFloat(t[0]),
              c = parseFloat(t[1]),
              p = h + "," + c + " ";
            for (
              i = 0, n = (0.5 * e) / (0.5 * (r = t.length) - 1);
              i < r - 2;
              i += 2
            ) {
              if (
                ((u += n),
                (a = parseFloat(t[i + 2])),
                (l = parseFloat(t[i + 3])),
                u > 0.999999)
              )
                for (o = 1 / (Math.floor(u) + 1), s = 1; u > 0.999999; )
                  (p +=
                    (h + (a - h) * o * s).toFixed(2) +
                    "," +
                    (c + (l - c) * o * s).toFixed(2) +
                    " "),
                    u--,
                    s++;
              (p += a + "," + l + " "), (h = a), (c = l);
            }
            return p;
          },
          gC = function (t) {
            var e = t[0].match(gs) || [],
              n = t[1].match(gs) || [],
              i = n.length - e.length;
            i > 0 ? (t[0] = gw(e, i)) : (t[1] = gw(n, -i));
          },
          gE = function (t, e, n) {
            var i, r;
            return (
              ("string" != typeof t ||
                go.test(t) ||
                (t.match(gs) || []).length < 3) &&
                ((i = d0(t)[0])
                  ? ((r = (i.nodeName + "").toUpperCase()),
                    e && "PATH" !== r && ((i = rF(i, !1)), (r = "PATH")),
                    (t = i.getAttribute("PATH" === r ? "d" : "points") || ""),
                    i === n &&
                      (t = i.getAttributeNS(null, "data-original") || t))
                  : (gl("WARNING: invalid morph to: " + t), (t = !1))),
              t
            );
          },
          gT = function (t, e) {
            for (
              var n,
                i,
                r,
                s,
                o,
                a,
                l,
                u,
                h,
                c,
                p,
                f,
                d = t.length,
                g = 0.2 * (e || 1);
              --d > -1;

            ) {
              for (
                l = 6,
                  p = (i = t[d]).isSmooth = i.isSmooth || [0, 0, 0, 0],
                  f = i.smoothData = i.smoothData || [0, 0, 0, 0],
                  p.length = 4,
                  u = i.length - 2;
                l < u;
                l += 6
              )
                (r = i[l] - i[l - 2]),
                  (s = i[l + 1] - i[l - 1]),
                  (o = i[l + 2] - i[l]),
                  (a = i[l + 3] - i[l + 1]),
                  (n = Math.abs((h = d8(s, r)) - (c = d8(a, o))) < g) &&
                    ((f[l - 2] = h),
                    (f[l + 2] = c),
                    (f[l - 1] = gt(r * r + s * s)),
                    (f[l + 3] = gt(o * o + a * a))),
                  p.push(n, n, 0, 0, n, n);
              i[u] === i[0] &&
                i[u + 1] === i[1] &&
                ((r = i[0] - i[u - 2]),
                (s = i[1] - i[u - 1]),
                (o = i[2] - i[0]),
                (a = i[3] - i[1]),
                Math.abs((h = d8(s, r)) - (c = d8(a, o))) < g &&
                  ((f[u - 2] = h),
                  (f[2] = c),
                  (f[u - 1] = gt(r * r + s * s)),
                  (f[3] = gt(o * o + a * a)),
                  (p[u - 2] = p[u - 1] = !0)));
            }
            return t;
          },
          gP = function (t) {
            var e = t.trim().split(" ");
            return {
              x:
                (~t.indexOf("left")
                  ? 0
                  : ~t.indexOf("right")
                  ? 100
                  : isNaN(parseFloat(e[0]))
                  ? 50
                  : parseFloat(e[0])) / 100,
              y:
                (~t.indexOf("top")
                  ? 0
                  : ~t.indexOf("bottom")
                  ? 100
                  : isNaN(parseFloat(e[1]))
                  ? 50
                  : parseFloat(e[1])) / 100,
            };
          },
          gS =
            "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
          gF = function (t, e, n, i) {
            var r,
              s,
              o,
              a = this._origin,
              l = this._eOrigin,
              u = t[n] - a.x,
              h = t[n + 1] - a.y,
              c = gt(u * u + h * h),
              p = d8(h, u);
            return (
              (u = e[n] - l.x),
              (o =
                (r = s = d8((h = e[n + 1] - l.y), u) - p) != r % ge
                  ? r + (r < 0 ? gn : -gn)
                  : r),
              !i && d2 && Math.abs(o + d2.ca) < gi && (i = d2),
              (this._anchorPT = d2 =
                {
                  _next: this._anchorPT,
                  t: t,
                  sa: p,
                  ca: i && o * i.ca < 0 && Math.abs(o) > gr ? s : o,
                  sl: c,
                  cl: gt(u * u + h * h) - c,
                  i: n,
                })
            );
          },
          gM = function (t) {
            (d1 = d4()),
              (d5 = d5 || (d1 && d1.plugins.morphSVG)),
              d1 && d5
                ? ((d0 = d1.utils.toArray),
                  (d5.prototype._tweenRotation = gF),
                  (d3 = 1))
                : t && gl("Please gsap.registerPlugin(MorphSVGPlugin)");
          },
          gk = {
            version: "3.12.5",
            name: "morphSVG",
            rawVars: 1,
            register: function (t, e) {
              (d1 = t), (d5 = e), gM();
            },
            init: function (t, e, n, i, r) {
              if ((d3 || gM(1), !e)) return gl("invalid shape"), !1;
              if (
                (d6(e) && (e = e.call(n, i, t, r)),
                "string" == typeof e || e.getBBox || e[0])
              )
                e = { shape: e };
              else if ("object" == typeof e) {
                for (o in ((s = {}), e))
                  s[o] =
                    d6(e[o]) && "render" !== o ? e[o].call(n, i, t, r) : e[o];
                e = s;
              }
              var s,
                o,
                a,
                l,
                u,
                h,
                c,
                p,
                f,
                d,
                g,
                m,
                v,
                _,
                D,
                y,
                x,
                b,
                w,
                C,
                E,
                T,
                P = t.nodeType ? window.getComputedStyle(t) : {},
                S = P.fill + "",
                F = !(
                  "none" === S ||
                  "0" === (S.match(gs) || [])[3] ||
                  "evenodd" === P.fillRule
                ),
                M = (e.origin || "50 50").split(",");
              if (
                ((u =
                  "POLYLINE" === (s = (t.nodeName + "").toUpperCase()) ||
                  "POLYGON" === s),
                "PATH" !== s && !u && !e.prop)
              )
                return gl("Cannot morph a <" + s + "> element. " + gS), !1;
              if (
                ((o = "PATH" === s ? "d" : "points"),
                !e.prop && !d6(t.setAttribute))
              )
                return !1;
              if (
                ((l = gE(e.shape || e.d || e.points || "", "d" === o, t)),
                u && ga.test(l))
              )
                return gl("A <" + s + "> cannot accept path data. " + gS), !1;
              if (
                ((h =
                  e.shapeIndex || 0 === e.shapeIndex ? e.shapeIndex : "auto"),
                (c = e.map || gk.defaultMap),
                (this._prop = e.prop),
                (this._render = e.render || gk.defaultRender),
                (this._apply =
                  "updateTarget" in e
                    ? e.updateTarget
                    : gk.defaultUpdateTarget),
                (this._rnd = Math.pow(
                  10,
                  isNaN(e.precision) ? 2 : +e.precision
                )),
                (this._tween = n),
                l)
              ) {
                if (
                  ((this._target = t),
                  (x = "object" == typeof e.precompile),
                  (d = this._prop ? t[this._prop] : t.getAttribute(o)),
                  this._prop ||
                    t.getAttributeNS(null, "data-original") ||
                    t.setAttributeNS(null, "data-original", d),
                  "d" === o || this._prop)
                ) {
                  if (
                    ((d = rN(x ? e.precompile[0] : d)),
                    (g = rN(x ? e.precompile[1] : l)),
                    !x && !gy(d, g, h, c, F))
                  )
                    return !1;
                  for (
                    ("log" === e.precompile || !0 === e.precompile) &&
                      gl('precompile:["' + rY(d) + '","' + rY(g) + '"]'),
                      (E = "linear" !== (e.type || gk.defaultType)) &&
                        ((d = gT(d, e.smoothTolerance)),
                        (g = gT(g, e.smoothTolerance)),
                        d.size || gc(d),
                        g.size || gc(g),
                        (C = gP(M[0])),
                        (this._origin = d.origin =
                          {
                            x: d.left + C.x * d.width,
                            y: d.top + C.y * d.height,
                          }),
                        M[1] && (C = gP(M[1])),
                        (this._eOrigin = {
                          x: g.left + C.x * g.width,
                          y: g.top + C.y * g.height,
                        })),
                      this._rawPath = t._gsRawPath = d,
                      v = d.length;
                    --v > -1;

                  )
                    for (
                      m = 0,
                        D = d[v],
                        y = g[v],
                        p = D.isSmooth || [],
                        f = y.isSmooth || [],
                        _ = D.length,
                        d2 = 0;
                      m < _;
                      m += 2
                    )
                      (y[m] !== D[m] || y[m + 1] !== D[m + 1]) &&
                        (E
                          ? p[m] && f[m]
                            ? ((b = D.smoothData),
                              (w = y.smoothData),
                              (T = m + (m === _ - 4 ? 7 - _ : 5)),
                              (this._controlPT = {
                                _next: this._controlPT,
                                i: m,
                                j: v,
                                l1s: b[m + 1],
                                l1c: w[m + 1] - b[m + 1],
                                l2s: b[T],
                                l2c: w[T] - b[T],
                              }),
                              (a = this._tweenRotation(D, y, m + 2)),
                              this._tweenRotation(D, y, m, a),
                              this._tweenRotation(D, y, T - 1, a),
                              (m += 4))
                            : this._tweenRotation(D, y, m)
                          : ((a = this.add(D, m, D[m], y[m], 0, 0, 0, 0, 0, 1)),
                            (a =
                              this.add(
                                D,
                                m + 1,
                                D[m + 1],
                                y[m + 1],
                                0,
                                0,
                                0,
                                0,
                                0,
                                1
                              ) || a)));
                } else
                  a = this.add(
                    t,
                    "setAttribute",
                    t.getAttribute(o) + "",
                    l + "",
                    i,
                    r,
                    0,
                    isNaN(h)
                      ? gC
                      : function (t) {
                          gC(t), (t[1] = gb(t[1], parseInt(h, 10)));
                        },
                    o
                  );
                E &&
                  (this.add(
                    this._origin,
                    "x",
                    this._origin.x,
                    this._eOrigin.x,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                  ),
                  (a = this.add(
                    this._origin,
                    "y",
                    this._origin.y,
                    this._eOrigin.y,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                  ))),
                  a &&
                    (this._props.push("morphSVG"),
                    (a.end = l),
                    (a.endProp = o));
              }
              return 1;
            },
            render: function (t, e) {
              for (
                var n,
                  i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  u,
                  h,
                  c,
                  p,
                  f,
                  d = e._rawPath,
                  g = e._controlPT,
                  m = e._anchorPT,
                  v = e._rnd,
                  _ = e._target,
                  D = e._pt;
                D;

              )
                D.r(t, D.d), (D = D._next);
              if (1 === t && e._apply)
                for (D = e._pt; D; )
                  D.end &&
                    (e._prop
                      ? (_[e._prop] = D.end)
                      : _.setAttribute(D.endProp, D.end)),
                    (D = D._next);
              else if (d) {
                for (; m; )
                  (o = m.sa + t * m.ca),
                    (s = m.sl + t * m.cl),
                    (m.t[m.i] = e._origin.x + d7(o) * s),
                    (m.t[m.i + 1] = e._origin.y + d9(o) * s),
                    (m = m._next);
                for (i = t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1; g; )
                  (f =
                    (a = g.i) +
                    (a === (r = d[g.j]).length - 4 ? 7 - r.length : 5)),
                    (c = d9((o = d8(r[f] - r[a + 1], r[f - 1] - r[a])))),
                    (p = d7(o)),
                    (u = r[a + 2]),
                    (h = r[a + 3]),
                    (s = g.l1s + i * g.l1c),
                    (r[a] = u - p * s),
                    (r[a + 1] = h - c * s),
                    (s = g.l2s + i * g.l2c),
                    (r[f - 1] = u + p * s),
                    (r[f] = h + c * s),
                    (g = g._next);
                if (((_._gsRawPath = d), e._apply)) {
                  for (l = 0, n = ""; l < d.length; l++)
                    for (
                      s = (r = d[l]).length,
                        n +=
                          "M" +
                          ((r[0] * v) | 0) / v +
                          " " +
                          ((r[1] * v) | 0) / v +
                          " C",
                        a = 2;
                      a < s;
                      a++
                    )
                      n += ((r[a] * v) | 0) / v + " ";
                  e._prop ? (_[e._prop] = n) : _.setAttribute("d", n);
                }
              }
              e._render && d && e._render.call(e._tween, d, _);
            },
            kill: function (t) {
              this._pt = this._rawPath = 0;
            },
            getRawPath: rw,
            stringToRawPath: rN,
            rawPathToString: rY,
            normalizeStrings: function (t, e, n) {
              var i = n.shapeIndex,
                r = n.map,
                s = [t, e];
              return gx(s, i, r), s;
            },
            pathFilter: gx,
            pointsFilter: gC,
            getTotalSize: gc,
            equalizeSegmentQuantity: gy,
            convertToPath: function (t, e) {
              return d0(t).map(function (t) {
                return rF(t, !1 !== e);
              });
            },
            defaultType: "linear",
            defaultUpdateTarget: !0,
            defaultMap: "size",
          };
        d4() && d1.registerPlugin(gk);
        var gA,
          gO,
          gB,
          gL,
          gR,
          gN,
          gz,
          gI,
          gX,
          gY,
          gH,
          gV,
          gj,
          gW,
          gq,
          gG = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
          gU = "#4e7fff",
          gK =
            Date.now ||
            function () {
              return new Date().getTime();
            },
          gZ = 0,
          gQ = 0,
          g$ = function () {
            return !1;
          },
          gJ = {},
          g1 = [],
          g0 = {},
          g2 = [],
          g3 = [],
          g5 = function (t) {
            t.preventDefault &&
              (t.preventDefault(),
              t.preventManipulation && t.preventManipulation());
          },
          g4 = function (t) {
            return gA.createElementNS
              ? gA.createElementNS("http://www.w3.org/1999/xhtml", t)
              : gA.createElement(t);
          },
          g6 = function (t, e, n) {
            var i,
              r = gA.createElementNS("http://www.w3.org/2000/svg", t),
              s = /([a-z])([A-Z])/g;
            for (i in (((n = n || {}).class = n.class || "path-editor"), n))
              void 0 !== r.style[i]
                ? (r.style[i] = n[i])
                : r.setAttributeNS(
                    null,
                    i.replace(s, "$1-$2").toLowerCase(),
                    n[i]
                  );
            return e.appendChild(r), r;
          },
          g8 = { matrix: new sp() },
          g7 = function (t) {
            return ((t.transform && t.transform.baseVal.consolidate()) || g8)
              .matrix;
          },
          g9 = function (t) {
            for (
              var e = g7(t), n = t.ownerSVGElement;
              (t = t.parentNode) && t.ownerSVGElement === n;

            )
              e.multiply(g7(t));
            return (
              "matrix(" +
              e.a +
              "," +
              e.b +
              "," +
              e.c +
              "," +
              e.d +
              "," +
              e.e +
              "," +
              e.f +
              ")"
            );
          },
          mt = function (t) {
            var e,
              n = [],
              i = t._selectedAnchors;
            for (e = 0; e < i.length; e++) n[e] = i[e].i;
            g1.unshift({
              path: t,
              d: t.path.getAttribute("d"),
              transform: t.path.getAttribute("transform") || "",
              selectedIndexes: n,
            }),
              g1.length > 30 && (g1.length = 30);
          },
          me = function (t) {
            return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
          },
          mn = function (t) {
            var e = me(0.552284749831 * t);
            return (
              "M" +
              (t = me(t)) +
              ",0C" +
              [
                t,
                e,
                e,
                t,
                0,
                t,
                -e,
                t,
                -t,
                e,
                -t,
                0,
                -t,
                -e,
                -e,
                -t,
                0,
                -t,
                e,
                -t,
                t,
                -e,
                t,
                0,
              ].join(",") +
              "z"
            );
          },
          mi = function (t) {
            if (!t.target._gsSelection && !gQ && gK() - gZ > 100) {
              for (var e = g3.length; --e > -1; ) g3[e].deselect();
              g3.length = 0;
            }
          },
          mr = 0,
          ms = function (t, e, n, i) {
            if (t.addEventListener) {
              var r = gj[e];
              (i = i || { passive: !1 }),
                t.addEventListener(r || e, n, i),
                r &&
                  e !== r &&
                  "pointer" !== r.substr(0, 7) &&
                  t.addEventListener(e, n, i);
            } else t.attachEvent && t.attachEvent("on" + e, n);
          },
          mo = function (t, e, n) {
            if (t.removeEventListener) {
              var i = gj[e];
              t.removeEventListener(i || e, n),
                i &&
                  e !== i &&
                  "pointer" !== i.substr(0, 7) &&
                  t.removeEventListener(e, n);
            } else t.detachEvent && t.detachEvent("on" + e, n);
          },
          ma = function (t, e) {
            for (var n = t.length; --n > -1; )
              if (t[n].identifier === e) return !0;
            return !1;
          },
          ml = function t(e) {
            (mr = e.touches && _dragCount < e.touches.length),
              mo(e.target, "touchend", t);
          },
          mu = function (t) {
            (mr = t.touches && _dragCount < t.touches.length),
              ms(t.target, "touchend", ml);
          },
          mh = function (t, e) {
            return function (n) {
              return t.call(e, n);
            };
          },
          mc = function (t, e, n) {
            var i = e.vars[t];
            return i && i.call(e.vars.callbackScope || e, n || e), e;
          },
          mp = function () {
            (gW.style.display = "block"),
              gW.select(),
              (gW.style.display = "none");
          },
          mf = function (t) {
            (gA = document),
              (gB = window),
              (gL = gA.body),
              (gN =
                ((gR =
                  gR ||
                  t ||
                  gB.gsap ||
                  console.warn("Please gsap.registerPlugin(PathEditor)")) &&
                  gR.core.context) ||
                function () {}),
              (gV = g4("div")),
              ((gW = g4("textarea")).style.display = "none"),
              gL && gL.appendChild(gW),
              (gj = (function (t) {
                for (
                  var e = t.split(","),
                    n = (
                      void 0 !== gV.onpointerdown
                        ? "pointerdown,pointermove,pointerup,pointercancel"
                        : void 0 !== gV.onmspointerdown
                        ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                        : t
                    ).split(","),
                    i = {},
                    r = 4;
                  --r > -1;

                )
                  (i[e[r]] = n[r]), (i[n[r]] = e[r]);
                return i;
              })("touchstart,touchmove,touchend,touchcancel")),
              (SVGElement.prototype.getTransformToElement =
                SVGElement.prototype.getTransformToElement ||
                function (t) {
                  return t
                    .getScreenCTM()
                    .inverse()
                    .multiply(this.getScreenCTM());
                }),
              gA.addEventListener(
                "keydown",
                function (t) {
                  var e,
                    n,
                    i,
                    r,
                    s = t.keyCode || t.which,
                    o = t.key || s;
                  if ("Shift" === o || 16 === s) gX = !0;
                  else if ("Control" === o || 17 === s) gz = !0;
                  else if ("Meta" === o || 91 === s) gY = !0;
                  else if ("Alt" === o || 18 === s)
                    for (gI = !0, e = g3.length; --e > -1; )
                      g3[e]._onPressAlt();
                  else if (
                    ("z" === o || 90 === s) &&
                    (gz || gY) &&
                    g1.length > 1
                  ) {
                    if ((g1.shift(), (n = g1[0]))) {
                      for (
                        (r = n.path).path.setAttribute("d", n.d),
                          r.path.setAttribute("transform", n.transform),
                          r.init(),
                          i = r._anchors,
                          e = 0;
                        e < i.length;
                        e++
                      )
                        -1 !== n.selectedIndexes.indexOf(i[e].i) &&
                          r._selectedAnchors.push(i[e]);
                      r._updateAnchors(),
                        r.update(),
                        r.vars.onUndo && r.vars.onUndo.call(r);
                    }
                  } else if (
                    "Delete" === o ||
                    "Backspace" === o ||
                    8 === s ||
                    46 === s ||
                    63272 === s ||
                    ("d" === s && (gz || gY))
                  )
                    for (e = g3.length; --e > -1; )
                      g3[e]._deleteSelectedAnchors();
                  else if (("a" === o || 65 === s) && (gY || gz))
                    for (e = g3.length; --e > -1; ) g3[e].select(!0);
                },
                !0
              ),
              gA.addEventListener(
                "keyup",
                function (t) {
                  var e = t.key || t.keyCode || t.which;
                  if ("Shift" === e || 16 === e) gX = !1;
                  else if ("Control" === e || 17 === e) gz = !1;
                  else if ("Meta" === e || 91 === e) gY = !1;
                  else if ("Alt" === e || 18 === e) {
                    gI = !1;
                    for (var n = g3.length; --n > -1; ) g3[n]._onReleaseAlt();
                  }
                },
                !0
              ),
              (gO = !!gB.PointerEvent),
              ms(gA, "mouseup", mi),
              ms(gA, "touchend", mi),
              ms(gA, "touchcancel", g$),
              ms(gB, "touchmove", g$),
              gL && gL.addEventListener("touchstart", g$),
              (gq = 1);
          },
          md = function (t) {
            var e,
              n,
              i = sf(this.target.parentNode, !0);
            (this._matrix = this.target.transform.baseVal.getItem(0).matrix),
              (this._ctm = i),
              gj[t.type]
                ? (ms(
                    (e =
                      -1 !== t.type.indexOf("touch")
                        ? t.currentTarget || t.target
                        : gA),
                    "touchend",
                    this._onRelease
                  ),
                  ms(e, "touchmove", this._onMove),
                  ms(e, "touchcancel", this._onRelease),
                  ms(gA, "touchstart", mu),
                  ms(gB, "touchforcechange", g5))
                : ((e = null), ms(gA, "mousemove", this._onMove)),
              gO || ms(gA, "mouseup", this._onRelease),
              g5(t),
              mp(),
              t.changedTouches
                ? ((t = this.touch = t.changedTouches[0]),
                  (this.touchID = t.identifier))
                : t.pointerId
                ? (this.touchID = t.pointerId)
                : (this.touch = this.touchID = null),
              (this._startPointerY = this.pointerY = t.pageY),
              (this._startPointerX = this.pointerX = t.pageX),
              (this._startElementX = this._matrix.e),
              (this._startElementY = this._matrix.f),
              1 === this._ctm.a &&
              0 === this._ctm.b &&
              0 === this._ctm.c &&
              1 === this._ctm.d
                ? (this._ctm = null)
                : ((n =
                    this._startPointerX * this._ctm.a +
                    this._startPointerY * this._ctm.c +
                    this._ctm.e),
                  (this._startPointerY =
                    this._startPointerX * this._ctm.b +
                    this._startPointerY * this._ctm.d +
                    this._ctm.f),
                  (this._startPointerX = n)),
              (this.isPressed = gQ = !0),
              (this.touchEventTarget = e),
              this.vars.onPress &&
                this.vars.onPress.call(
                  this.vars.callbackScope || this,
                  this.pointerEvent
                );
          },
          mg = function (t) {
            var e,
              n,
              i = t;
            if (this._enabled && !mr && this.isPressed && t) {
              if (((this.pointerEvent = t), (e = t.changedTouches))) {
                if (
                  (t = e[0]) !== this.touch &&
                  t.identifier !== this.touchID
                ) {
                  for (
                    n = e.length;
                    --n > -1 && (t = e[n]).identifier !== this.touchID;

                  );
                  if (n < 0) return;
                }
              } else if (
                t.pointerId &&
                this.touchID &&
                t.pointerId !== this.touchID
              )
                return;
              g5(i),
                this.setPointerPosition(t.pageX, t.pageY),
                this.vars.onDrag &&
                  this.vars.onDrag.call(
                    this.vars.callbackScope || this,
                    this.pointerEvent
                  );
            }
          },
          mm = function (t, e) {
            if (
              this._enabled &&
              this.isPressed &&
              (!t ||
                null == this.touchID ||
                e ||
                ((!t.pointerId || t.pointerId === this.touchID) &&
                  (!t.changedTouches || ma(t.changedTouches, this.touchID))))
            ) {
              (gZ = gK()), (this.isPressed = gQ = !1);
              var n,
                i,
                r = t,
                s = this.isDragging,
                o = this.touchEventTarget;
              if (
                (o
                  ? (mo(o, "touchend", this._onRelease),
                    mo(o, "touchmove", this._onMove),
                    mo(o, "touchcancel", this._onRelease),
                    mo(gA, "touchstart", mu))
                  : mo(gA, "mousemove", this._onMove),
                !gO &&
                  (mo(gA, "mouseup", this._onRelease),
                  t && t.target && mo(t.target, "mouseup", this._onRelease)),
                s
                  ? (this.isDragging = !1)
                  : this.vars.onClick &&
                    this.vars.onClick.call(this.vars.callbackScope || this, r),
                t)
              ) {
                if (
                  (n = t.changedTouches) &&
                  (t = n[0]) !== this.touch &&
                  t.identifier !== this.touchID
                ) {
                  for (
                    i = n.length;
                    --i > -1 && (t = n[i]).identifier !== this.touchID;

                  );
                  if (i < 0) return;
                }
                (this.pointerEvent = r),
                  (this.pointerX = t.pageX),
                  (this.pointerY = t.pageY);
              }
              return (
                r && !s && this.vars.onDragRelease
                  ? this.vars.onDragRelease.call(this, this.pointerEvent)
                  : (r && g5(r),
                    this.vars.onRelease &&
                      this.vars.onRelease.call(
                        this.vars.callbackScope || this,
                        this.pointerEvent
                      )),
                s &&
                  this.vars.onDragEnd &&
                  this.vars.onDragEnd.call(
                    this.vars.callbackScope || this,
                    this.pointerEvent
                  ),
                !0
              );
            }
          },
          mv = function (t, e, n, i) {
            var r,
              s = t[e],
              o = s.length - (s.closed ? 6 : 0),
              a = [];
            for (r = 0; r < o; r += 6) a.push(new my(n, t, e, r, i));
            return s.closed && (a[0].isClosedStart = !0), a;
          },
          m_ = function (t, e, n) {
            var i = t[n] - t[e],
              r = t[n + 1] - t[e + 1];
            return Math.sqrt(i * i + r * r);
          },
          mD = (function () {
            function t(t, e) {
              (this.target =
                "string" == typeof t ? gA.querySelectorAll(t)[0] : t),
                (this.vars = e || {}),
                (this._onPress = mh(md, this)),
                (this._onMove = mh(mg, this)),
                (this._onRelease = mh(mm, this)),
                this.target.setAttribute(
                  "transform",
                  (this.target.getAttribute("transform") || "") +
                    " translate(0,0)"
                ),
                (this._matrix = g7(this.target)),
                (this.x = this._matrix.e),
                (this.y = this._matrix.f),
                (this.snap = e.snap),
                isNaN(e.maxX) && isNaN(e.minX)
                  ? (this._bounds = 0)
                  : ((this._bounds = 1),
                    (this.maxX = +e.maxX),
                    (this.minX = +e.minX)),
                this.enabled(!0);
            }
            var e = t.prototype;
            return (
              (e.setPointerPosition = function (t, e) {
                var n, i, r, s, o;
                (this.pointerX = t),
                  (this.pointerY = e),
                  this._ctm &&
                    ((o = t * this._ctm.a + e * this._ctm.c + this._ctm.e),
                    (e = t * this._ctm.b + e * this._ctm.d + this._ctm.f),
                    (t = o)),
                  (i = e - this._startPointerY),
                  (n = t - this._startPointerX),
                  i < 1 && i > -1 && (i = 0),
                  n < 1 && n > -1 && (n = 0),
                  (r = (((this._startElementX + n) * 1e3) | 0) / 1e3),
                  (s = (((this._startElementY + i) * 1e3) | 0) / 1e3),
                  this.snap &&
                    !gX &&
                    ((g0.x = r),
                    (g0.y = s),
                    this.snap.call(this, g0),
                    (r = g0.x),
                    (s = g0.y)),
                  (this.x !== r || this.y !== s) &&
                    ((this._matrix.f = this.y = s),
                    (this._matrix.e = this.x = r),
                    !this.isDragging &&
                      this.isPressed &&
                      ((this.isDragging = !0),
                      mc("onDragStart", this, this.pointerEvent)));
              }),
              (e.enabled = function (t) {
                var e;
                return arguments.length
                  ? ((this._enabled = t),
                    t
                      ? (gO || ms(this.target, "mousedown", this._onPress),
                        ms(this.target, "touchstart", this._onPress),
                        ms(this.target, "click", this._onClick, !0))
                      : ((e = this.isDragging),
                        mo(this.target, "mousedown", this._onPress),
                        mo(this.target, "touchstart", this._onPress),
                        mo(gB, "touchforcechange", g5),
                        mo(this.target, "click", this._onClick),
                        this.touchEventTarget &&
                          (mo(
                            this.touchEventTarget,
                            "touchcancel",
                            this._onRelease
                          ),
                          mo(
                            this.touchEventTarget,
                            "touchend",
                            this._onRelease
                          ),
                          mo(this.touchEventTarget, "touchmove", this._onMove)),
                        mo(gA, "mouseup", this._onRelease),
                        mo(gA, "mousemove", this._onMove),
                        (this.isDragging = this.isPressed = !1),
                        e && mc("onDragEnd", this, this.pointerEvent)),
                    this)
                  : this._enabled;
              }),
              (e.endDrag = function (t) {
                this._onRelease(t);
              }),
              t
            );
          })(),
          my = (function () {
            function t(t, e, n, i, r) {
              (this.editor = t),
                (this.element = g6("path", t._selection, {
                  fill: gU,
                  stroke: gU,
                  strokeWidth: 2,
                  vectorEffect: "non-scaling-stroke",
                })),
                this.update(e, n, i),
                (this.element._gsSelection = !0),
                (this.vars = r || {}),
                (this._draggable = new mD(this.element, {
                  callbackScope: this,
                  onDrag: this.onDrag,
                  snap: this.vars.snap,
                  onPress: this.onPress,
                  onRelease: this.onRelease,
                  onClick: this.onClick,
                  onDragEnd: this.onDragEnd,
                }));
            }
            var e = t.prototype;
            return (
              (e.onPress = function () {
                mc("onPress", this);
              }),
              (e.onClick = function () {
                mc("onClick", this);
              }),
              (e.onDrag = function () {
                var t = this.segment;
                this.vars.onDrag.call(
                  this.vars.callbackScope || this,
                  this,
                  this._draggable.x - t[this.i],
                  this._draggable.y - t[this.i + 1]
                );
              }),
              (e.onDragEnd = function () {
                mc("onDragEnd", this);
              }),
              (e.onRelease = function () {
                mc("onRelease", this);
              }),
              (e.update = function (t, e, n) {
                t && (this.rawPath = t),
                  arguments.length <= 1
                    ? ((e = this.j), (n = this.i))
                    : ((this.j = e), (this.i = n));
                var i = this.smooth,
                  r = this.rawPath[e],
                  s = 0 === n && r.closed ? r.length - 4 : n - 2;
                (this.segment = r),
                  (this.smooth =
                    n > 0 &&
                    n < r.length - 2 &&
                    0.09 >
                      Math.abs(
                        Math.atan2(r[n + 1] - r[s + 1], r[n] - r[s]) -
                          Math.atan2(r[n + 3] - r[n + 1], r[n + 2] - r[n])
                      )
                      ? 2
                      : 0),
                  this.smooth !== i &&
                    this.element.setAttribute(
                      "d",
                      this.smooth
                        ? this.editor._circleHandle
                        : this.editor._squareHandle
                    ),
                  this.element.setAttribute(
                    "transform",
                    "translate(" + r[n] + "," + r[n + 1] + ")"
                  );
              }),
              t
            );
          })(),
          mx = (function () {
            function t(t, e) {
              (e = e || {}),
                gq || mf(),
                (this.vars = e),
                (this.path =
                  "string" == typeof t ? gA.querySelectorAll(t)[0] : t),
                (this._g = g6("g", this.path.ownerSVGElement, {
                  class: "path-editor-g path-editor",
                })),
                (this._selectionHittest = g6("path", this._g, {
                  stroke: "transparent",
                  strokeWidth: 16,
                  fill: "none",
                  vectorEffect: "non-scaling-stroke",
                })),
                (this._selection =
                  e._selection ||
                  g6("g", this._g, {
                    class: "path-editor-selection path-editor",
                  })),
                (this._selectionPath = g6("path", this._selection, {
                  stroke: gU,
                  strokeWidth: 2,
                  fill: "none",
                  vectorEffect: "non-scaling-stroke",
                })),
                (this._selectedAnchors = []),
                (this._line1 = g6("polyline", this._selection, {
                  stroke: gU,
                  strokeWidth: 2,
                  vectorEffect: "non-scaling-stroke",
                })),
                (this._line2 = g6("polyline", this._selection, {
                  stroke: gU,
                  strokeWidth: 2,
                  vectorEffect: "non-scaling-stroke",
                })),
                (this._line1.style.pointerEvents =
                  this._line2.style.pointerEvents =
                  this._selectionPath.style.pointerEvents =
                    "none"),
                (this._enabled = !0);
              var n,
                i = this.path.parentNode.getScreenCTM().inverse(),
                r = ((i.a + i.d) / 2) * (e.handleSize || 5);
              (this._squareHandle = [
                "M-" + (n = me((n = r))),
                -n,
                n,
                -n,
                n,
                n,
                -n,
                n + "z",
              ].join(",")),
                (this._circleHandle = mn(1.15 * r)),
                (this._handle1 = g6("path", this._selection, {
                  d: this._squareHandle,
                  fill: gU,
                  stroke: "transparent",
                  strokeWidth: 6,
                })),
                (this._handle2 = g6("path", this._selection, {
                  d: this._squareHandle,
                  fill: gU,
                  stroke: "transparent",
                  strokeWidth: 6,
                })),
                (this._handle1._draggable = new mD(this._handle1, {
                  onDrag: this._onDragHandle1,
                  callbackScope: this,
                  onPress: this._onPressHandle1,
                  onRelease: this._onReleaseHandle,
                  onClick: this._onClickHandle1,
                  snap: e.handleSnap,
                })),
                (this._handle2._draggable = new mD(this._handle2, {
                  onDrag: this._onDragHandle2,
                  callbackScope: this,
                  onPress: this._onPressHandle2,
                  onRelease: this._onReleaseHandle,
                  onClick: this._onClickHandle2,
                  snap: e.handleSnap,
                })),
                (this._handle1.style.visibility =
                  this._handle2.style.visibility =
                    "hidden");
              for (
                var s = [
                    this._handle1,
                    this._handle2,
                    this._line1,
                    this._line2,
                    this._selection,
                    this._selectionPath,
                    this._selectionHittest,
                  ],
                  o = s.length;
                --o > -1;

              )
                s[o]._gsSelection = !0;
              !1 !== e.draggable &&
                (this._draggable = new mD(this._selectionHittest, {
                  callbackScope: this,
                  onPress: this.select,
                  onRelease: this._onRelease,
                  onDrag: this._onDragPath,
                  onDragEnd: this._saveState,
                  maxX: this.vars.maxX,
                  minX: this.vars.minX,
                })),
                this.init(),
                (this._selection.style.visibility =
                  !1 === e.selected ? "hidden" : "visible"),
                !1 !== e.selected &&
                  ((this.path._gsSelection = !0), g3.push(this)),
                this._saveState(),
                gO ||
                  (ms(
                    this._selectionHittest,
                    "mousedown",
                    mh(this._onClickSelectionPath, this)
                  ),
                  ms(
                    this._selectionHittest,
                    "mouseup",
                    mh(this._onRelease, this)
                  )),
                ms(
                  this._selectionHittest,
                  "touchstart",
                  mh(this._onClickSelectionPath, this)
                ),
                ms(
                  this._selectionHittest,
                  "touchend",
                  mh(this._onRelease, this)
                ),
                gN(this);
            }
            var e = t.prototype;
            return (
              (e._onRelease = function (t) {
                var e = this._editingAnchor;
                e && ((gJ.x = e.segment[e.i]), (gJ.y = e.segment[e.i + 1])),
                  mo(gB, "touchforcechange", g5),
                  mc("onRelease", this, t);
              }),
              (e.init = function () {
                var t,
                  e,
                  n = this.path.getAttribute("d"),
                  i = rN(n),
                  r = this.path.getAttribute("transform") || "translate(0,0)",
                  s =
                    !this._rawPath ||
                    i.totalPoints !== this._rawPath.totalPoints ||
                    i.length !== this._rawPath.length,
                  o = {
                    callbackScope: this,
                    snap: this.vars.anchorSnap,
                    onDrag: this._onDragAnchor,
                    onPress: this._onPressAnchor,
                    onRelease: this._onRelease,
                    onClick: this._onClickAnchor,
                    onDragEnd: this._onDragEndAnchor,
                    maxX: this.vars.maxX,
                    minX: this.vars.minX,
                  };
                if (s && this._anchors && this._anchors.length) {
                  for (e = 0; e < this._anchors.length; e++)
                    this._anchors[e].element.parentNode.removeChild(
                      this._anchors[e].element
                    ),
                      this._anchors[e]._draggable.enabled(!1);
                  this._selectedAnchors.length = 0;
                }
                if (((this._rawPath = i), s)) {
                  if (((this._anchors = mv(i, 0, this, o)), (t = i.length) > 1))
                    for (e = 1; e < t; e++)
                      this._anchors = this._anchors.concat(mv(i, e, this, o));
                } else
                  for (e = this._anchors.length; --e > -1; )
                    this._anchors[e].update(i);
                return (
                  this._selection.appendChild(this._handle1),
                  this._selection.appendChild(this._handle2),
                  this._selectionPath.setAttribute("d", n),
                  this._selectionHittest.setAttribute("d", n),
                  this._g.setAttribute(
                    "transform",
                    g9(this.path.parentNode) || "translate(0,0)"
                  ),
                  this._selection.setAttribute("transform", r),
                  this._selectionHittest.setAttribute("transform", r),
                  this._updateAnchors(),
                  this
                );
              }),
              (e._saveState = function () {
                mt(this);
              }),
              (e._onClickSelectionPath = function (t) {
                if ("hidden" === this._selection.style.visibility)
                  this.select();
                else if (gI || (t && t.altKey)) {
                  var e,
                    n,
                    i,
                    r,
                    s,
                    o,
                    a = {
                      callbackScope: this,
                      snap: this.vars.anchorSnap,
                      onDrag: this._onDragAnchor,
                      onPress: this._onPressAnchor,
                      onRelease: this._onRelease,
                      onClick: this._onClickAnchor,
                      onDragEnd: this._onDragEndAnchor,
                      maxX: this.vars.maxX,
                      minX: this.vars.minX,
                    },
                    l = this._selection.getScreenCTM().inverse();
                  for (
                    this._draggable && this._draggable._onRelease(t),
                      l &&
                        ((r = t.clientX * l.a + t.clientY * l.c + l.e),
                        (s = t.clientX * l.b + t.clientY * l.d + l.f)),
                      o = (function (t, e, n, i) {
                        var r,
                          s,
                          o,
                          a,
                          l = { j: 0, i: 0, t: 0 },
                          u = 1e8;
                        for (s = 0; s < t.length; s++)
                          for (r = 0, a = t[s]; r < a.length; r += 6)
                            (o = (function t(
                              e,
                              n,
                              i,
                              r,
                              s,
                              o,
                              a,
                              l,
                              u,
                              h,
                              c,
                              p,
                              f,
                              d
                            ) {
                              var g,
                                m,
                                v,
                                _,
                                D,
                                y,
                                x = (s - r) / o,
                                b = 0,
                                w = r;
                              for (i9 = 1e8; w <= s; )
                                (g =
                                  (y = 1 - w) * y * y * a +
                                  3 * y * y * w * u +
                                  3 * y * w * w * c +
                                  w * w * w * f),
                                  (m =
                                    y * y * y * l +
                                    3 * y * y * w * h +
                                    3 * y * w * w * p +
                                    w * w * w * d),
                                  (v = (_ = g - n) * _ + (D = m - i) * D) <
                                    i9 && ((i9 = v), (b = w)),
                                  (w += x);
                              return e > 1
                                ? t(
                                    e - 1,
                                    n,
                                    i,
                                    Math.max(b - x, 0),
                                    Math.min(b + x, 1),
                                    o,
                                    a,
                                    l,
                                    u,
                                    h,
                                    c,
                                    p,
                                    f,
                                    d
                                  )
                                : b;
                            })(
                              1,
                              e,
                              n,
                              0,
                              1,
                              20,
                              a[r],
                              a[r + 1],
                              a[r + 2],
                              a[r + 3],
                              a[r + 4],
                              a[r + 5],
                              a[r + 6],
                              a[r + 7]
                            )),
                              u > i9 &&
                                ((u = i9), (l.j = s), (l.i = r), (l.t = o));
                        return l;
                      })(this._rawPath, r, s),
                      rO(this._rawPath[o.j], o.i, o.t),
                      e = o.i + 6,
                      n = 0;
                    n < this._anchors.length;
                    n++
                  )
                    this._anchors[n].i >= e && (this._anchors[n].i += 6);
                  (i = new my(this, this._rawPath, o.j, e, a)),
                    this._selection.appendChild(this._handle1),
                    this._selection.appendChild(this._handle2),
                    i._draggable._onPress(t),
                    (gH = i),
                    this._anchors.push(i),
                    (this._selectedAnchors.length = 0),
                    this._selectedAnchors.push(i),
                    this._updateAnchors(),
                    this.update(),
                    this._saveState();
                }
                mp(), ms(gB, "touchforcechange", g5), mc("onPress", this);
              }),
              (e._onClickHandle1 = function () {
                var t = this._editingAnchor,
                  e = t.i,
                  n = t.segment,
                  i = t.isClosedStart ? n.length - 4 : e - 2;
                gI &&
                  5 > Math.abs(n[e] - n[i]) &&
                  5 > Math.abs(n[e + 1] - n[i + 1]) &&
                  this._onClickAnchor(t);
              }),
              (e._onClickHandle2 = function () {
                var t = this._editingAnchor,
                  e = t.i,
                  n = t.segment;
                gI &&
                  5 > Math.abs(n[e] - n[e + 2]) &&
                  5 > Math.abs(n[e + 1] - n[e + 3]) &&
                  this._onClickAnchor(t);
              }),
              (e._onDragEndAnchor = function (t) {
                (gH = null), this._saveState();
              }),
              (e.isSelected = function () {
                return (
                  this._selectedAnchors.length > 0 ||
                  "visible" === this._selection.style.visibility
                );
              }),
              (e.select = function (t) {
                if (
                  ((this._selection.style.visibility = "visible"),
                  (this._editingAnchor = null),
                  (this.path._gsSelection = !0),
                  !0 === t)
                )
                  for (var e = this._anchors.length; --e > -1; )
                    this._selectedAnchors[e] = this._anchors[e];
                return (
                  -1 === g3.indexOf(this) && g3.push(this),
                  this._updateAnchors(),
                  this
                );
              }),
              (e.deselect = function () {
                return (
                  (this._selection.style.visibility = "hidden"),
                  (this._selectedAnchors.length = 0),
                  (this._editingAnchor = null),
                  (this.path._gsSelection = !1),
                  g3.splice(g3.indexOf(this), 1),
                  this._updateAnchors(),
                  this
                );
              }),
              (e._onDragPath = function (t) {
                var e =
                  this._selectionHittest.getAttribute("transform") ||
                  "translate(0,0)";
                this._selection.setAttribute("transform", e),
                  this.path.setAttribute("transform", e);
              }),
              (e._onPressAnchor = function (t) {
                -1 === this._selectedAnchors.indexOf(t)
                  ? (gX || (this._selectedAnchors.length = 0),
                    this._selectedAnchors.push(t))
                  : gX &&
                    (this._selectedAnchors.splice(
                      this._selectedAnchors.indexOf(t),
                      1
                    ),
                    t._draggable.endDrag()),
                  (gJ.x = t.segment[t.i]),
                  (gJ.y = t.segment[t.i + 1]),
                  this._updateAnchors(),
                  mc("onPress", this);
              }),
              (e._deleteSelectedAnchors = function () {
                for (
                  var t, e, n, i = this._selectedAnchors, r = i.length;
                  --r > -1;

                )
                  for (
                    (t = i[r]).element.parentNode.removeChild(t.element),
                      t._draggable.enabled(!1),
                      (e = t.i)
                        ? e < t.segment.length - 2
                          ? t.segment.splice(e - 2, 6)
                          : t.segment.splice(e - 4, 6)
                        : t.segment.splice(e, 6),
                      i.splice(r, 1),
                      this._anchors.splice(this._anchors.indexOf(t), 1),
                      n = 0;
                    n < this._anchors.length;
                    n++
                  )
                    this._anchors[n].i >= e && (this._anchors[n].i -= 6);
                this._updateAnchors(),
                  this.update(),
                  this._saveState(),
                  this.vars.onDeleteAnchor &&
                    this.vars.onDeleteAnchor.call(
                      this.vars.callbackScope || this
                    );
              }),
              (e._onClickAnchor = function (t) {
                var e,
                  n,
                  i,
                  r,
                  s,
                  o,
                  a = t.i,
                  l = t.segment,
                  u = t.isClosedStart ? l.length - 4 : a - 2,
                  h = !a || a >= l.length - 2;
                gI && gH !== t && this._editingAnchor
                  ? ((t.smooth = !t.smooth),
                    h && !t.isClosedStart && (t.smooth = !1),
                    t.element.setAttribute(
                      "d",
                      t.smooth ? this._circleHandle : this._squareHandle
                    ),
                    t.smooth && (!h || t.isClosedStart)
                      ? ((e =
                          ((e = Math.atan2(l[a + 1] - l[u + 1], l[a] - l[u])) +
                            (n = Math.atan2(
                              l[a + 3] - l[a + 1],
                              l[a + 2] - l[a]
                            ))) /
                          2),
                        (i = m_(l, u, a)),
                        (r = m_(l, a, a + 2)),
                        i < 0.2 &&
                          ((i = m_(l, a, u - 4) / 4),
                          (e =
                            n ||
                            Math.atan2(
                              l[a + 7] - l[u - 3],
                              l[a + 6] - l[u - 4]
                            ))),
                        r < 0.2 &&
                          ((r = m_(l, a, a + 6) / 4),
                          (n =
                            e ||
                            Math.atan2(
                              l[a + 7] - l[u - 3],
                              l[a + 6] - l[u - 4]
                            ))),
                        (s = Math.sin(e)),
                        (o = Math.cos(e)),
                        Math.abs(n - e) < Math.PI / 2 && ((s = -s), (o = -o)),
                        (l[u] = (((l[a] + o * i) * 1e3) | 0) / 1e3),
                        (l[u + 1] = (((l[a + 1] + s * i) * 1e3) | 0) / 1e3),
                        (l[a + 2] = (((l[a] - o * r) * 1e3) | 0) / 1e3),
                        (l[a + 3] = (((l[a + 1] - s * r) * 1e3) | 0) / 1e3),
                        this._updateAnchors(),
                        this.update(),
                        this._saveState())
                      : t.smooth ||
                        (h && !t.isClosedStart) ||
                        ((a || t.isClosedStart) &&
                          ((l[u] = l[a]), (l[u + 1] = l[a + 1])),
                        a < l.length - 2 &&
                          ((l[a + 2] = l[a]), (l[a + 3] = l[a + 1])),
                        this._updateAnchors(),
                        this.update(),
                        this._saveState()))
                  : gX ||
                    ((this._selectedAnchors.length = 0),
                    this._selectedAnchors.push(t)),
                  (gH = null),
                  this._updateAnchors();
              }),
              (e._updateAnchors = function () {
                var t,
                  e,
                  n,
                  i =
                    1 === this._selectedAnchors.length
                      ? this._selectedAnchors[0]
                      : null,
                  r = i ? i.segment : null;
                for (
                  t = 0, this._editingAnchor = i;
                  t < this._anchors.length;
                  t++
                )
                  this._anchors[t].element.style.fill =
                    -1 !== this._selectedAnchors.indexOf(this._anchors[t])
                      ? gU
                      : "white";
                i &&
                  (this._handle1.setAttribute(
                    "d",
                    i.smooth ? this._circleHandle : this._squareHandle
                  ),
                  this._handle2.setAttribute(
                    "d",
                    i.smooth ? this._circleHandle : this._squareHandle
                  )),
                  (t = i ? i.i : 0),
                  i && (t || i.isClosedStart)
                    ? ((e = i.isClosedStart ? r[r.length - 4] : r[t - 2]),
                      (n = i.isClosedStart ? r[r.length - 3] : r[t - 1]),
                      (this._handle1.style.visibility =
                        this._line1.style.visibility =
                          gI || e !== r[t] || n !== r[t + 1]
                            ? "visible"
                            : "hidden"),
                      this._handle1.setAttribute(
                        "transform",
                        "translate(" + e + "," + n + ")"
                      ),
                      this._line1.setAttribute(
                        "points",
                        e + "," + n + "," + r[t] + "," + r[t + 1]
                      ))
                    : (this._handle1.style.visibility =
                        this._line1.style.visibility =
                          "hidden"),
                  i && t < r.length - 2
                    ? ((e = r[t + 2]),
                      (n = r[t + 3]),
                      (this._handle2.style.visibility =
                        this._line2.style.visibility =
                          gI || e !== r[t] || n !== r[t + 1]
                            ? "visible"
                            : "hidden"),
                      this._handle2.setAttribute(
                        "transform",
                        "translate(" + e + "," + n + ")"
                      ),
                      this._line2.setAttribute(
                        "points",
                        r[t] + "," + r[t + 1] + "," + e + "," + n
                      ))
                    : (this._handle2.style.visibility =
                        this._line2.style.visibility =
                          "hidden");
              }),
              (e._onPressAlt = function () {
                var t = this._editingAnchor;
                t &&
                  ((t.i || t.isClosedStart) &&
                    (this._handle1.style.visibility =
                      this._line1.style.visibility =
                        "visible"),
                  t.i < t.segment.length - 2 &&
                    (this._handle2.style.visibility =
                      this._line2.style.visibility =
                        "visible"));
              }),
              (e._onReleaseAlt = function () {
                var t,
                  e,
                  n,
                  i = this._editingAnchor;
                i &&
                  ((t = i.segment),
                  (e = i.i),
                  (n = i.isClosedStart ? t.length - 4 : e - 2),
                  t[e] === t[n] &&
                    t[e + 1] === t[n + 1] &&
                    (this._handle1.style.visibility =
                      this._line1.style.visibility =
                        "hidden"),
                  t[e] === t[e + 2] &&
                    t[e + 1] === t[e + 3] &&
                    (this._handle2.style.visibility =
                      this._line2.style.visibility =
                        "hidden"));
              }),
              (e._onPressHandle1 = function () {
                this._editingAnchor.smooth &&
                  (this._oppositeHandleLength = m_(
                    this._editingAnchor.segment,
                    this._editingAnchor.i,
                    this._editingAnchor.i + 2
                  )),
                  mc("onPress", this);
              }),
              (e._onPressHandle2 = function () {
                this._editingAnchor.smooth &&
                  (this._oppositeHandleLength = m_(
                    this._editingAnchor.segment,
                    this._editingAnchor.isClosedStart
                      ? this._editingAnchor.segment.length - 4
                      : this._editingAnchor.i - 2,
                    this._editingAnchor.i
                  )),
                  mc("onPress", this);
              }),
              (e._onReleaseHandle = function (t) {
                this._onRelease(t), this._saveState();
              }),
              (e._onDragHandle1 = function () {
                var t,
                  e = this._editingAnchor,
                  n = e.segment,
                  i = e.i,
                  r = e.isClosedStart ? n.length - 4 : i - 2,
                  s = this._handle1._draggable.x,
                  o = this._handle1._draggable.y;
                (n[r] = s = ((1e3 * s) | 0) / 1e3),
                  (n[r + 1] = o = ((1e3 * o) | 0) / 1e3),
                  e.smooth &&
                    (gI
                      ? ((e.smooth = !1),
                        e.element.setAttribute("d", this._squareHandle),
                        this._handle1.setAttribute("d", this._squareHandle),
                        this._handle2.setAttribute("d", this._squareHandle))
                      : ((t = Math.atan2(n[i + 1] - o, n[i] - s)),
                        (s = this._oppositeHandleLength * Math.cos(t)),
                        (o = this._oppositeHandleLength * Math.sin(t)),
                        (n[i + 2] = (((n[i] + s) * 1e3) | 0) / 1e3),
                        (n[i + 3] = (((n[i + 1] + o) * 1e3) | 0) / 1e3))),
                  this.update();
              }),
              (e._onDragHandle2 = function () {
                var t,
                  e = this._editingAnchor,
                  n = e.segment,
                  i = e.i,
                  r = e.isClosedStart ? n.length - 4 : i - 2,
                  s = this._handle2._draggable.x,
                  o = this._handle2._draggable.y;
                (n[i + 2] = s = ((1e3 * s) | 0) / 1e3),
                  (n[i + 3] = o = ((1e3 * o) | 0) / 1e3),
                  e.smooth &&
                    (gI
                      ? ((e.smooth = !1),
                        e.element.setAttribute("d", this._squareHandle),
                        this._handle1.setAttribute("d", this._squareHandle),
                        this._handle2.setAttribute("d", this._squareHandle))
                      : ((t = Math.atan2(n[i + 1] - o, n[i] - s)),
                        (s = this._oppositeHandleLength * Math.cos(t)),
                        (o = this._oppositeHandleLength * Math.sin(t)),
                        (n[r] = (((n[i] + s) * 1e3) | 0) / 1e3),
                        (n[r + 1] = (((n[i + 1] + o) * 1e3) | 0) / 1e3))),
                  this.update();
              }),
              (e._onDragAnchor = function (t, e, n) {
                var i,
                  r,
                  s,
                  o,
                  a,
                  l = this._selectedAnchors,
                  u = l.length;
                for (r = 0; r < u; r++)
                  (i = (o = l[r]).i),
                    (s = o.segment),
                    i
                      ? ((s[i - 2] = (((s[i - 2] + e) * 1e3) | 0) / 1e3),
                        (s[i - 1] = (((s[i - 1] + n) * 1e3) | 0) / 1e3))
                      : o.isClosedStart &&
                        ((a = s.length - 2),
                        (s[a] = me(s[a] + e)),
                        (s[a + 1] = me(s[a + 1] + n)),
                        (s[a - 2] = me(s[a - 2] + e)),
                        (s[a - 1] = me(s[a - 1] + n))),
                    (s[i] = (((s[i] + e) * 1e3) | 0) / 1e3),
                    (s[i + 1] = (((s[i + 1] + n) * 1e3) | 0) / 1e3),
                    i < s.length - 2 &&
                      ((s[i + 2] = (((s[i + 2] + e) * 1e3) | 0) / 1e3),
                      (s[i + 3] = (((s[i + 3] + n) * 1e3) | 0) / 1e3)),
                    o !== t &&
                      o.element.setAttribute(
                        "transform",
                        "translate(" + s[i] + "," + s[i + 1] + ")"
                      );
                this.update();
              }),
              (e.enabled = function (t) {
                if (!arguments.length) return this._enabled;
                for (var e = this._anchors.length; --e > -1; )
                  this._anchors[e]._draggable.enabled(t);
                return (
                  (this._enabled = t),
                  this._handle1._draggable.enabled(t),
                  this._handle2._draggable.enabled(t),
                  this._draggable && this._draggable.enabled(t),
                  t
                    ? this._selection.parentNode ||
                      (this.path.ownerSVGElement.appendChild(
                        this._selectionHittest
                      ),
                      this.path.ownerSVGElement.appendChild(this._selection),
                      this.init(),
                      this._saveState())
                    : (this.deselect(),
                      this._selectionHittest.parentNode &&
                        this._selectionHittest.parentNode.removeChild(
                          this._selectionHittest
                        ),
                      this._selection.parentNode &&
                        this._selection.parentNode.removeChild(
                          this._selection
                        )),
                  this._updateAnchors(),
                  this.update()
                );
              }),
              (e.update = function (t) {
                var e,
                  n,
                  i,
                  r,
                  s,
                  o = "",
                  a = this._editingAnchor;
                if (
                  (t && this.init(),
                  a &&
                    ((e = a.i),
                    (n = a.segment),
                    (e || a.isClosedStart) &&
                      ((s = a.isClosedStart ? n.length - 4 : e - 2),
                      (i = n[s]),
                      (r = n[s + 1]),
                      this._handle1.setAttribute(
                        "transform",
                        "translate(" + i + "," + r + ")"
                      ),
                      this._line1.setAttribute(
                        "points",
                        i + "," + r + "," + n[e] + "," + n[e + 1]
                      )),
                    e < n.length - 2 &&
                      ((i = n[e + 2]),
                      (r = n[e + 3]),
                      this._handle2.setAttribute(
                        "transform",
                        "translate(" + i + "," + r + ")"
                      ),
                      this._line2.setAttribute(
                        "points",
                        n[e] + "," + n[e + 1] + "," + i + "," + r
                      ))),
                  t)
                )
                  o = this.path.getAttribute("d");
                else {
                  for (e = 0; e < this._rawPath.length; e++)
                    (n = this._rawPath[e]).length > 7 &&
                      (o +=
                        "M" + n[0] + "," + n[1] + "C" + n.slice(2).join(","));
                  this.path.setAttribute("d", o),
                    this._selectionPath.setAttribute("d", o),
                    this._selectionHittest.setAttribute("d", o);
                }
                return (
                  this.vars.onUpdate &&
                    this._enabled &&
                    mc("onUpdate", this, o),
                  this
                );
              }),
              (e.getRawPath = function (t, e, n) {
                if (t) {
                  var i = g7(this.path);
                  return rR(
                    rC(this._rawPath),
                    1,
                    0,
                    0,
                    1,
                    i.e + (e || 0),
                    i.f + (n || 0)
                  );
                }
                return this._rawPath;
              }),
              (e.getString = function (t, e, n) {
                if (t) {
                  var i = g7(this.path);
                  return rY(
                    rR(
                      rC(this._rawPath),
                      1,
                      0,
                      0,
                      1,
                      i.e + (e || 0),
                      i.f + (n || 0)
                    )
                  );
                }
                return this.path.getAttribute("d");
              }),
              (e.getNormalizedSVG = function (t, e, n, i) {
                var r,
                  s,
                  o,
                  a,
                  l,
                  u,
                  h = this._rawPath[0],
                  c = -1 * h[0],
                  p = 0 === e ? 0 : -(e || h[1]),
                  f = h.length,
                  d = 1 / (h[f - 2] + c),
                  g = -t || h[f - 1] + p;
                for (
                  g2.length = 0, g = g ? 1 / g : -d, d *= 1e3, g *= 1e3, s = 0;
                  s < f;
                  s += 2
                )
                  (g2[s] = (((h[s] + c) * d) | 0) / 1e3),
                    (g2[s + 1] = (((h[s + 1] + p) * g) | 0) / 1e3);
                if (i) {
                  for (s = 2, r = [], f = g2.length; s < f; s += 6)
                    (o = g2[s - 2]),
                      (a = g2[s - 1]),
                      (l = g2[s + 4]),
                      (u = g2[s + 5]),
                      r.push(o, a, l, u),
                      rz(
                        o,
                        a,
                        g2[s],
                        g2[s + 1],
                        g2[s + 2],
                        g2[s + 3],
                        l,
                        u,
                        0.001,
                        r,
                        r.length - 2
                      );
                  for (s = 2, o = r[0], f = r.length; s < f; s += 2) {
                    if ((l = r[s]) < o || l > 1 || l < 0) {
                      i();
                      break;
                    }
                    o = l;
                  }
                }
                return n &&
                  8 === f &&
                  0 === g2[0] &&
                  0 === g2[1] &&
                  1 === g2[f - 2] &&
                  1 === g2[f - 1]
                  ? g2.slice(2, 6).join(",")
                  : ((g2[2] = "C" + g2[2]), "M" + g2.join(","));
              }),
              (e.kill = function () {
                this.enabled(!1),
                  this._g.parentNode && this._g.parentNode.removeChild(this._g);
              }),
              (e.revert = function () {
                this.kill();
              }),
              t
            );
          })();
        (mx.simplifyPoints = rX),
          (mx.pointsToSegment = rI),
          (mx.simplifySVG = function (t, e) {
            var n, i, r, s, o, a, l, u, h, c, p;
            if (
              ((c = (e = e || {}).tolerance || 1),
              (h = e.precision || 1 / c),
              void 0 === e.cornerThreshold || e.cornerThreshold,
              "string" != typeof t && (t = (n = t).getAttribute("d")),
              ("#" === t.charAt(0) || "." === t.charAt(0)) &&
                (n = gA.querySelector(t)) &&
                (t = n.getAttribute("d")),
              (i =
                !1 !== e.curved || /[achqstvz]/gi.test(t)
                  ? rN(t)[0]
                  : t.match(gG)),
              !1 !== e.curved)
            ) {
              for (r = 2, u = i, i = [], p = u.length; r < p; r += 6)
                (s = +u[r - 2]),
                  (a = +u[r - 1]),
                  (o = +u[r + 4]),
                  (l = +u[r + 5]),
                  i.push(me(s), me(a), me(o), me(l)),
                  rz(
                    s,
                    a,
                    +u[r],
                    +u[r + 1],
                    +u[r + 2],
                    +u[r + 3],
                    o,
                    l,
                    1 / (2e5 * h),
                    i,
                    i.length - 2
                  );
              (i = rI(rX(i, c), e.curviness))[2] = "C" + i[2];
            } else i = rX(i, c);
            return (t = "M" + i.join(",")), n && n.setAttribute("d", t), t;
          }),
          (mx.create = function (t, e) {
            return new mx(t, e);
          }),
          (mx.editingAxis = gJ),
          (mx.getSnapFunction = function (t) {
            var e = t.radius || 2,
              n = t.x || 0 === t.x ? t.x : t.width ? 0 : -1e20,
              i = t.y || 0 === t.y ? t.y : t.height ? 0 : -1e20,
              r = n + (t.width || 1e20 * 1e20),
              s = i + (t.height || 1e20 * 1e20),
              o = !1 !== t.containX,
              a = !1 !== t.containY,
              l = t.axis,
              u = t.gridSize;
            return (
              (e *= e),
              function (t) {
                var h,
                  c,
                  p,
                  f,
                  d = t.x,
                  g = t.y;
                (o && d < n) || (p = d - n) * p < e
                  ? (d = n)
                  : ((o && d > r) || (p = r - d) * p < e) && (d = r),
                  (a && g < i) || (f = g - i) * f < e
                    ? (g = i)
                    : ((a && g > s) || (f = s - g) * f < e) && (g = s),
                  l &&
                    ((p = d - l.x),
                    (f = g - l.y),
                    p * p < e && (d = l.x),
                    f * f < e && (g = l.y)),
                  u &&
                    (p = (h = n + Math.round((d - n) / u) * u) - d) * p +
                      (f = (c = i + Math.round((g - i) / u) * u) - g) * f <
                      e &&
                    ((d = h), (g = c)),
                  (t.x = d),
                  (t.y = g);
              }
            );
          }),
          (mx.version = "3.12.5"),
          (mx.register = mf);
        var mb,
          mw,
          mC,
          mE,
          mT,
          mP,
          mS,
          mF,
          mM,
          mk,
          mA = /(^[#\.][a-z]|[a-y][a-z])/i,
          mO = function (t) {
            return "string" == typeof t;
          },
          mB = function (t, e) {
            var n = mC.createElementNS
              ? mC.createElementNS(
                  (e || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                  ),
                  t
                )
              : mC.createElement(t);
            return n.style ? n : mC.createElement(t);
          },
          mL = function (t) {
            var e = t.getBoundingClientRect(),
              n =
                mE.clientTop -
                (mw.pageYOffset || mE.scrollTop || mT.scrollTop || 0),
              i =
                mE.clientLeft -
                (mw.pageXOffset || mE.scrollLeft || mT.scrollLeft || 0);
            return {
              left: e.left + i,
              top: e.top + n,
              right: e.right + i,
              bottom: e.bottom + n,
            };
          },
          mR = function (t, e) {
            var n,
              i = [0, 31, 8, 58, 24, 75, 40, 90, 69, 100, 100, 100];
            for (n = 0; n < i.length; n += 2) (i[n] += t), (i[n + 1] += e);
            return "M" + t + "," + e + "C" + i.join(",");
          },
          mN = function (t) {
            for (var e = t.totalTime(); t; )
              (e = t.startTime() + e / (t.timeScale() || 1)), (t = t.parent);
            return e;
          },
          mz = function () {
            ((mk = mB("textarea")).style.display = "none"), mT.appendChild(mk);
          },
          mI = function (t, e, n) {
            return mO(t) && mA.test(t)
              ? mC.querySelector(t)
              : Array.isArray(t)
              ? mF(
                  mS(
                    [
                      { x: mb.getProperty(e, "x"), y: mb.getProperty(e, "y") },
                    ].concat(t),
                    n
                  )
                )
              : mO(t) || (t && "path" === (t.tagName + "").toLowerCase())
              ? t
              : 0;
          },
          mX = function (t, e, n) {
            t.addEventListener("click", function (i) {
              if (i.target._gsHelper) {
                var r = e(i.target);
                if (((mk.value = r), r && mk.select)) {
                  console.log(r), (mk.style.display = "block"), mk.select();
                  try {
                    mC.execCommand("copy"), mk.blur(), n && n(t);
                  } catch (t) {
                    console.warn(
                      "Copy didn't work; this browser doesn't permit that."
                    );
                  }
                  mk.style.display = "none";
                }
              }
            });
          },
          mY = { matrix: { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 } },
          mH = function (t) {
            for (var e = mb.getTweensOf(t), n = 0; n < e.length; n++) {
              if (e[n].vars.motionPath) return e[n];
              e[n].timeline && e.push.apply(e, e[n].timeline.getChildren());
            }
          },
          mV = function (t, e) {
            var n = "Please gsap.registerPlugin(MotionPathPlugin)";
            (mw = window),
              (mb = mb || t || mw.gsap || console.warn(n)) && mx.register(mb),
              (mT = (mC = document).body),
              (mE = mC.documentElement),
              mb &&
                ((mP = mb.plugins.motionPath),
                (mj.PathEditor = mx),
                (mM = mb.core.context || function () {})),
              mP
                ? (mz(), (mS = mP.arrayToRawPath), (mF = mP.rawPathToString))
                : !0 === e && console.warn(n);
          },
          mj = (function () {
            function t(t, e) {
              var n = this;
              void 0 === e && (e = {}), mP || mV(e.gsap, 1);
              var i,
                r,
                s,
                o,
                a,
                l,
                u,
                h,
                c,
                p,
                f,
                d,
                g,
                m,
                v = mB("div"),
                _ = this,
                D = { x: 0, y: 0 };
              (t instanceof mb.core.Tween
                ? (i = (h = t).targets()[0])
                : (h = mH((i = mb.utils.toArray(t)[0]))),
              (r = mI(e.path, i, e)),
              (this.offset = D),
              (l = mL(i)),
              (o = parseFloat(mb.getProperty(i, "x", "px"))),
              (a = parseFloat(mb.getProperty(i, "y", "px"))),
              (s = i.getCTM && "svg" !== i.tagName.toLowerCase()),
              h &&
                !r &&
                (r = mI(
                  h.vars.motionPath.path || h.vars.motionPath,
                  i,
                  h.vars.motionPath
                )),
              v.setAttribute("class", "copy-motion-path"),
              (v.style.cssText =
                "border-radius:8px; background-color:rgba(85, 85, 85, 0.7); color:#fff; cursor:pointer; padding:6px 12px; font-family:Signika Negative, Arial, sans-serif; position:fixed; left:50%; transform:translate(-50%, 0); font-size:19px; bottom:10px"),
              (v.innerText = "COPY MOTION PATH"),
              (v._gsHelper = _),
              (mb.utils.toArray(e.container)[0] || mT).appendChild(v),
              mX(
                v,
                function () {
                  return _.getString();
                },
                function () {
                  return mb.fromTo(
                    v,
                    { backgroundColor: "white" },
                    { duration: 0.5, backgroundColor: "rgba(85, 85, 85, 0.6)" }
                  );
                }
              ),
              (u = r && r.ownerSVGElement))
                ? (e.pathColor && mb.set(r, { stroke: e.pathColor }),
                  e.pathWidth && mb.set(r, { strokeWidth: e.pathWidth }),
                  e.pathOpacity && mb.set(r, { opacity: e.pathOpacity }))
                : (((c =
                    (s &&
                      i.ownerSVGElement &&
                      i.ownerSVGElement.getAttribute("xmlns")) ||
                    "http://www.w3.org/2000/svg"),
                  s)
                    ? ((u = i.ownerSVGElement),
                      (p = i.getBBox()),
                      (o = (f = (i.transform.baseVal.consolidate() || mY)
                        .matrix).e),
                      (a = f.f),
                      (D.x = p.x),
                      (D.y = p.y))
                    : ((u = mB("svg", c)),
                      (m = !0),
                      mT.appendChild(u),
                      u.setAttribute("viewBox", "0 0 100 100"),
                      u.setAttribute("class", "motion-path-helper"),
                      (u.style.cssText =
                        "overflow:visible; background-color: transparent; position:absolute; z-index:5000; width:100px; height:100px; top:" +
                        (l.top - a) +
                        "px; left:" +
                        (l.left - o) +
                        "px;")),
                  (p = mO(r) && !mA.test(r) ? r : mR(o, a)),
                  (r = mB("path", c)).setAttribute("d", p),
                  r.setAttribute("vector-effect", "non-scaling-stroke"),
                  (r.style.cssText =
                    "fill:transparent; stroke-width:" +
                    (e.pathWidth || 3) +
                    "; stroke:" +
                    (e.pathColor || "#555") +
                    "; opacity:" +
                    (e.pathOpacity || 0.6)),
                  u.appendChild(r)),
                (D.x || D.y) && mb.set(r, { x: D.x, y: D.y }),
                "selected" in e || (e.selected = !0),
                "anchorSnap" in e ||
                  (e.anchorSnap = function (t) {
                    t.x * t.x + t.y * t.y < 16 && (t.x = t.y = 0);
                  }),
                (g =
                  h && h.parent && "nested" === h.parent.data
                    ? h.parent.parent
                    : h),
                (e.onPress = function () {
                  g.pause(0);
                }),
                (d = function () {
                  h.invalidate(), g.restart();
                }),
                (e.onRelease = e.onDeleteAnchor = d),
                (this.editor = mx.create(r, e)),
                e.center &&
                  mb.set(i, {
                    transformOrigin: "50% 50%",
                    xPercent: -50,
                    yPercent: -50,
                  }),
                h
                  ? (h.vars.motionPath.path
                      ? (h.vars.motionPath.path = r)
                      : (h.vars.motionPath = { path: r }),
                    g.parent !== mb.globalTimeline &&
                      mb.globalTimeline.add(g, mN(g) - g.delay()),
                    g.repeat(-1).repeatDelay(1))
                  : (h = g =
                      mb.to(i, {
                        motionPath: {
                          path: r,
                          start: e.start || 0,
                          end: "end" in e ? e.end : 1,
                          autoRotate: "autoRotate" in e && e.autoRotate,
                          align: r,
                          alignOrigin: e.alignOrigin,
                        },
                        duration: e.duration || 5,
                        ease: e.ease || "power1.inOut",
                        repeat: -1,
                        repeatDelay: 1,
                        paused: !e.path,
                      })),
                (this.animation = h),
                mM(this),
                (this.kill = this.revert =
                  function () {
                    n.editor.kill(),
                      v.parentNode && v.parentNode.removeChild(v),
                      m && u.parentNode && u.parentNode.removeChild(u),
                      g && g.revert();
                  });
            }
            return (
              (t.prototype.getString = function () {
                return this.editor.getString(
                  !0,
                  -this.offset.x,
                  -this.offset.y
                );
              }),
              t
            );
          })();
        (mj.register = mV),
          (mj.create = function (t, e) {
            return new mj(t, e);
          }),
          (mj.editPath = function (t, e) {
            return mx.create(t, e);
          }),
          (mj.version = "3.12.5");
        var mW,
          mq,
          mG,
          mU,
          mK,
          mZ,
          mQ,
          m$,
          mJ,
          m1,
          m0,
          m2,
          m3,
          m5,
          m4,
          m6 = function () {
            return !0;
          },
          m8 = function () {
            return (
              mW || (m6() && (mW = window.gsap) && mW.registerPlugin && mW)
            );
          },
          m7 = function (t) {
            return mJ.maxScroll(t || mG);
          },
          m9 = function (t, e) {
            var n,
              i,
              r = t.parentNode || mK,
              s = t.getBoundingClientRect(),
              o = r.getBoundingClientRect(),
              a = o.top - s.top,
              l = o.bottom - s.bottom,
              u = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - e),
              h = -u * e;
            return (
              u > 0 &&
                ((i =
                  0.5 == (n = o.height / (mG.innerHeight + o.height))
                    ? 2 * o.height
                    : 2 *
                      Math.min(o.height, Math.abs((-u * n) / (2 * n - 1))) *
                      (e || 1)),
                (h += e ? -i * e : -i / 2),
                (u += i)),
              { change: u, offset: h }
            );
          },
          vt = function (t) {
            var e = mU.querySelector(".ScrollSmoother-wrapper");
            return (
              e ||
                ((e = mU.createElement("div")).classList.add(
                  "ScrollSmoother-wrapper"
                ),
                t.parentNode.insertBefore(e, t),
                e.appendChild(t)),
              e
            );
          },
          ve = (function () {
            function t(e) {
              var n = this;
              mq ||
                t.register(mW) ||
                console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
                (e = this.vars = e || {}),
                m1 && m1.kill(),
                (m1 = this),
                m5(this);
              var i,
                r,
                s,
                o,
                a,
                l,
                u,
                h,
                c,
                p,
                f,
                d,
                g,
                m,
                v,
                _,
                D = e,
                y = D.smoothTouch,
                x = D.onUpdate,
                b = D.onStop,
                w = D.smooth,
                C = D.onFocusIn,
                E = D.normalizeScroll,
                T = D.wholePixels,
                P = this,
                S = e.effectsPrefix || "",
                F = mJ.getScrollFunc(mG),
                M =
                  1 === mJ.isTouch
                    ? !0 === y
                      ? 0.8
                      : parseFloat(y) || 0
                    : 0 === w || !1 === w
                    ? 0
                    : parseFloat(w) || 0.8,
                k = (M && +e.speed) || 1,
                A = 0,
                O = 0,
                B = 1,
                L = m2(0),
                R = function () {
                  return L.update(-A);
                },
                N = { y: 0 },
                z = function () {
                  return (i.style.overflow = "visible");
                },
                I = function (t) {
                  t.update();
                  var e = t.getTween();
                  e && (e.pause(), (e._time = e._dur), (e._tTime = e._tDur)),
                    (v = !1),
                    t.animation.progress(t.progress, !0);
                },
                X = function (e, n) {
                  ((e !== A && !p) || n) &&
                    (T && (e = Math.round(e)),
                    M &&
                      ((i.style.transform =
                        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                        e +
                        ", 0, 1)"),
                      (i._gsap.y = e + "px")),
                    (O = e - A),
                    (A = e),
                    mJ.isUpdating || t.isRefreshing || mJ.update());
                },
                Y = function (t) {
                  return arguments.length
                    ? (t < 0 && (t = 0),
                      (N.y = -t),
                      (v = !0),
                      p ? (A = -t) : X(-t),
                      mJ.isRefreshing ? o.update() : F(t / k),
                      this)
                    : -A;
                },
                H =
                  "undefined" != typeof ResizeObserver &&
                  !1 !== e.autoResize &&
                  new ResizeObserver(function () {
                    if (!mJ.isRefreshing) {
                      var t = m7(r) * k;
                      t < -A && Y(t), m4.restart(!0);
                    }
                  }),
                V = function (t) {
                  (r.scrollTop = 0),
                    (t.target.contains && t.target.contains(r)) ||
                      (C && !1 === C(n, t)) ||
                      (mJ.isInViewport(t.target) ||
                        t.target === _ ||
                        n.scrollTo(t.target, !1, "center center"),
                      (_ = t.target));
                },
                j = function (t, e) {
                  if (t < e.start) return t;
                  var n = isNaN(e.ratio) ? 1 : e.ratio,
                    i = e.end - e.start,
                    r = t - e.start,
                    s = e.offset || 0,
                    o = e.pins || [],
                    a = o.offset || 0,
                    l =
                      (e._startClamp && e.start <= 0) ||
                      (e.pins && e.pins.offset)
                        ? 0
                        : e._endClamp && e.end === m7()
                        ? 1
                        : 0.5;
                  return (
                    o.forEach(function (e) {
                      (i -= e.distance),
                        e.nativeStart <= t && (r -= e.distance);
                    }),
                    a && (r *= (i - a / n) / i),
                    t + (r - s * l) / n - r
                  );
                },
                W = function t(e, n, i) {
                  i || (e.pins.length = e.pins.offset = 0);
                  var r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    h,
                    c,
                    p = e.pins,
                    f = e.markers;
                  for (h = 0; h < n.length; h++)
                    if (
                      ((c = n[h]),
                      e.trigger &&
                        c.trigger &&
                        e !== c &&
                        (c.trigger === e.trigger ||
                          c.pinnedContainer === e.trigger ||
                          e.trigger.contains(c.trigger)) &&
                        ((l = c._startNative || c._startClamp || c.start),
                        (u = c._endNative || c._endClamp || c.end),
                        (o = j(l, e)),
                        (a = c.pin && u > 0 ? o + (u - l) : j(u, e)),
                        c.setPositions(
                          o,
                          a,
                          !0,
                          (c._startClamp ? Math.max(0, o) : o) - l
                        ),
                        c.markerStart &&
                          f.push(
                            mW.quickSetter(
                              [c.markerStart, c.markerEnd],
                              "y",
                              "px"
                            )
                          ),
                        c.pin && c.end > 0 && !i))
                    ) {
                      if (
                        ((r = c.end - c.start),
                        (s = e._startClamp && c.start < 0))
                      ) {
                        if (e.start > 0) {
                          e.setPositions(
                            0,
                            e.end + (e._startNative - e.start),
                            !0
                          ),
                            t(e, n);
                          return;
                        }
                        (r += c.start), (p.offset = -c.start);
                      }
                      p.push({
                        start: c.start,
                        nativeStart: l,
                        end: c.end,
                        distance: r,
                        trig: c,
                      }),
                        e.setPositions(e.start, e.end + (s ? -c.start : r), !0);
                    }
                },
                q = function (t, e) {
                  a.forEach(function (n) {
                    return W(n, t, e);
                  });
                },
                G = function () {
                  z(),
                    requestAnimationFrame(z),
                    a &&
                      (mJ.getAll().forEach(function (t) {
                        (t._startNative = t.start), (t._endNative = t.end);
                      }),
                      a.forEach(function (t) {
                        var e = t._startClamp || t.start,
                          n = t.autoSpeed
                            ? Math.min(m7(), t.end)
                            : e + Math.abs((t.end - e) / t.ratio),
                          i = n - t.end;
                        if ((e -= i / 2) > (n -= i / 2)) {
                          var r = e;
                          (e = n), (n = r);
                        }
                        t._startClamp && e < 0
                          ? ((i =
                              (n = t.ratio < 0 ? m7() : t.end / t.ratio) -
                              t.end),
                            (e = 0))
                          : (t.ratio < 0 || (t._endClamp && n >= m7())) &&
                            ((n = m7()),
                            (e =
                              t.ratio < 0
                                ? 0
                                : t.ratio > 1
                                ? 0
                                : n - (n - t.start) / t.ratio),
                            (i = (n - e) * t.ratio - (t.end - t.start))),
                          (t.offset = i || 1e-4),
                          (t.pins.length = t.pins.offset = 0),
                          t.setPositions(e, n, !0);
                      }),
                      q(mJ.sort())),
                    L.reset();
                },
                U = function () {
                  return mJ.addEventListener("refresh", G);
                },
                K = function () {
                  return (
                    a &&
                    a.forEach(function (t) {
                      return t.vars.onRefresh(t);
                    })
                  );
                },
                Z = function () {
                  return (
                    a &&
                      a.forEach(function (t) {
                        return t.vars.onRefreshInit(t);
                      }),
                    K
                  );
                },
                Q = function (t, e, n, i) {
                  return function () {
                    var r = "function" == typeof e ? e(n, i) : e;
                    r ||
                      0 === r ||
                      (r =
                        i.getAttribute("data-" + S + t) ||
                        ("speed" === t ? 1 : 0)),
                      i.setAttribute("data-" + S + t, r);
                    var s = "clamp(" === (r + "").substr(0, 6);
                    return {
                      clamp: s,
                      value: s ? r.substr(6, r.length - 7) : r,
                    };
                  };
                },
                $ = function (t, e, n, i, s) {
                  s = ("function" == typeof s ? s(i, t) : s) || 0;
                  var o,
                    l,
                    u,
                    h,
                    c,
                    p,
                    f = Q("speed", e, i, t),
                    d = Q("lag", n, i, t),
                    g = mW.getProperty(t, "y"),
                    m = t._gsap,
                    v = [],
                    _ = function () {
                      (e = f()),
                        (n = parseFloat(d().value)),
                        (o = parseFloat(e.value) || 1),
                        (c =
                          (u = "auto" === e.value) ||
                          (l && l._startClamp && l.start <= 0) ||
                          v.offset
                            ? 0
                            : l && l._endClamp && l.end === m7()
                            ? 1
                            : 0.5),
                        h && h.kill(),
                        (h =
                          n &&
                          mW.to(t, {
                            ease: m0,
                            overwrite: !1,
                            y: "+=0",
                            duration: n,
                          })),
                        l && ((l.ratio = o), (l.autoSpeed = u));
                    },
                    D = function () {
                      (m.y = g + "px"), m.renderTransform(1), _();
                    },
                    y = [],
                    x = 0,
                    b = function (e) {
                      if (u) {
                        D();
                        var n = m9(t, m$(0, 1, -e.start / (e.end - e.start)));
                        (x = n.change), (p = n.offset);
                      } else
                        (p = v.offset || 0),
                          (x = (e.end - e.start - p) * (1 - o));
                      v.forEach(function (t) {
                        return (x -= t.distance * (1 - o));
                      }),
                        (e.offset = x || 0.001),
                        e.vars.onUpdate(e),
                        h && h.progress(1);
                    };
                  return (
                    _(),
                    (1 !== o || u || h) &&
                      ((l = mJ.create({
                        trigger: u ? t.parentNode : t,
                        start: function () {
                          return e.clamp
                            ? "clamp(top bottom+=" + s + ")"
                            : "top bottom+=" + s;
                        },
                        end: function () {
                          return e.value < 0
                            ? "max"
                            : e.clamp
                            ? "clamp(bottom top-=" + s + ")"
                            : "bottom top-=" + s;
                        },
                        scroller: r,
                        scrub: !0,
                        refreshPriority: -999,
                        onRefreshInit: D,
                        onRefresh: b,
                        onKill: function (t) {
                          var e = a.indexOf(t);
                          e >= 0 && a.splice(e, 1), D();
                        },
                        onUpdate: function (t) {
                          var e,
                            n,
                            i,
                            r = g + x * (t.progress - c),
                            s = v.length,
                            o = 0;
                          if (t.offset) {
                            if (s) {
                              for (n = -A, i = t.end; s--; ) {
                                if (
                                  (e = v[s]).trig.isActive ||
                                  (n >= e.start && n <= e.end)
                                ) {
                                  h &&
                                    ((e.trig.progress +=
                                      e.trig.direction < 0 ? 0.001 : -0.001),
                                    e.trig.update(0, 0, 1),
                                    h.resetTo("y", parseFloat(m.y), -O, !0),
                                    B && h.progress(1));
                                  return;
                                }
                                n > e.end && (o += e.distance),
                                  (i -= e.distance);
                              }
                              r =
                                g +
                                o +
                                x *
                                  ((mW.utils.clamp(t.start, t.end, n) -
                                    t.start -
                                    o) /
                                    (i - t.start) -
                                    c);
                            }
                            y.length &&
                              !u &&
                              y.forEach(function (t) {
                                return t(r - o);
                              }),
                              (r = Math.round(1e5 * (r + p)) / 1e5 || 0),
                              h
                                ? (h.resetTo("y", r, -O, !0),
                                  B && h.progress(1))
                                : ((m.y = r + "px"), m.renderTransform(1));
                          }
                        },
                      })),
                      b(l),
                      (mW.core.getCache(l.trigger).stRevert = Z),
                      (l.startY = g),
                      (l.pins = v),
                      (l.markers = y),
                      (l.ratio = o),
                      (l.autoSpeed = u),
                      (t.style.willChange = "transform")),
                    l
                  );
                };
              function J() {
                return (
                  (s = i.clientHeight),
                  (i.style.overflow = "visible"),
                  (mZ.style.height =
                    mG.innerHeight + (s - mG.innerHeight) / k + "px"),
                  s - mG.innerHeight
                );
              }
              U(),
                mJ.addEventListener("killAll", U),
                mW.delayedCall(0.5, function () {
                  return (B = 0);
                }),
                (this.scrollTop = Y),
                (this.scrollTo = function (t, e, i) {
                  var r = mW.utils.clamp(
                    0,
                    m7(),
                    isNaN(t) ? n.offset(t, i, !!e && !p) : +t
                  );
                  e
                    ? p
                      ? mW.to(n, {
                          duration: M,
                          scrollTop: r,
                          overwrite: "auto",
                          ease: m0,
                        })
                      : F(r)
                    : Y(r);
                }),
                (this.offset = function (t, e, n) {
                  var i,
                    r = (t = mQ(t)[0]).style.cssText,
                    s = mJ.create({ trigger: t, start: e || "top top" });
                  return (
                    a && (B ? mJ.refresh() : q([s], !0)),
                    (i = s.start / (n ? k : 1)),
                    s.kill(!1),
                    (t.style.cssText = r),
                    (mW.core.getCache(t).uncache = 1),
                    i
                  );
                }),
                (this.content = function (t) {
                  if (arguments.length) {
                    var e =
                      mQ(t || "#smooth-content")[0] ||
                      console.warn(
                        "ScrollSmoother needs a valid content element."
                      ) ||
                      mZ.children[0];
                    return (
                      e !== i &&
                        ((c = (i = e).getAttribute("style") || ""),
                        H && H.observe(i),
                        mW.set(i, {
                          overflow: "visible",
                          width: "100%",
                          boxSizing: "border-box",
                          y: "+=0",
                        }),
                        M || mW.set(i, { clearProps: "transform" })),
                      this
                    );
                  }
                  return i;
                }),
                (this.wrapper = function (t) {
                  return arguments.length
                    ? ((h =
                        (r =
                          mQ(t || "#smooth-wrapper")[0] || vt(i)).getAttribute(
                          "style"
                        ) || ""),
                      J(),
                      mW.set(
                        r,
                        M
                          ? {
                              overflow: "hidden",
                              position: "fixed",
                              height: "100%",
                              width: "100%",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                            }
                          : {
                              overflow: "visible",
                              position: "relative",
                              width: "100%",
                              height: "auto",
                              top: "auto",
                              bottom: "auto",
                              left: "auto",
                              right: "auto",
                            }
                      ),
                      this)
                    : r;
                }),
                (this.effects = function (t, e) {
                  if ((a || (a = []), !t)) return a.slice(0);
                  (t = mQ(t)).forEach(function (t) {
                    for (var e = a.length; e--; )
                      a[e].trigger === t && a[e].kill();
                  });
                  var n,
                    i,
                    r,
                    s = (e = e || {}),
                    o = s.speed,
                    l = s.lag,
                    u = s.effectsPadding,
                    h = [];
                  for (i = 0; i < t.length; i++)
                    (r = $(t[i], o, l, i, u)) && h.push(r);
                  return (
                    (n = a).push.apply(n, h),
                    !1 !== e.refresh && mJ.refresh(),
                    h
                  );
                }),
                (this.sections = function (t, e) {
                  if ((l || (l = []), !t)) return l.slice(0);
                  var n,
                    i = mQ(t).map(function (t) {
                      return mJ.create({
                        trigger: t,
                        start: "top 120%",
                        end: "bottom -20%",
                        onToggle: function (e) {
                          (t.style.opacity = e.isActive ? "1" : "0"),
                            (t.style.pointerEvents = e.isActive
                              ? "all"
                              : "none");
                        },
                      });
                    });
                  return (
                    e && e.add ? (n = l).push.apply(n, i) : (l = i.slice(0)), i
                  );
                }),
                this.content(e.content),
                this.wrapper(e.wrapper),
                (this.render = function (t) {
                  return X(t || 0 === t ? t : A);
                }),
                (this.getVelocity = function () {
                  return L.getVelocity(-A);
                }),
                mJ.scrollerProxy(r, {
                  scrollTop: Y,
                  scrollHeight: function () {
                    return J() && mZ.scrollHeight;
                  },
                  fixedMarkers: !1 !== e.fixedMarkers && !!M,
                  content: i,
                  getBoundingClientRect: function () {
                    return {
                      top: 0,
                      left: 0,
                      width: mG.innerWidth,
                      height: mG.innerHeight,
                    };
                  },
                }),
                mJ.defaults({ scroller: r });
              var tt = mJ.getAll().filter(function (t) {
                return t.scroller === mG || t.scroller === r;
              });
              tt.forEach(function (t) {
                return t.revert(!0, !0);
              }),
                (o = mJ.create({
                  animation: mW.fromTo(
                    N,
                    {
                      y: function () {
                        return (m = 0), 0;
                      },
                    },
                    {
                      y: function () {
                        return (m = 1), -J();
                      },
                      immediateRender: !1,
                      ease: "none",
                      data: "ScrollSmoother",
                      duration: 100,
                      onUpdate: function () {
                        if (m) {
                          var t = v;
                          t && (I(o), (N.y = A)),
                            X(N.y, t),
                            R(),
                            x && !p && x(P);
                        }
                      },
                    }
                  ),
                  onRefreshInit: function (e) {
                    if (!t.isRefreshing) {
                      if (((t.isRefreshing = !0), a)) {
                        var n = mJ.getAll().filter(function (t) {
                          return !!t.pin;
                        });
                        a.forEach(function (t) {
                          t.vars.pinnedContainer ||
                            n.forEach(function (e) {
                              if (e.pin.contains(t.trigger)) {
                                var n = t.vars;
                                (n.pinnedContainer = e.pin),
                                  (t.vars = null),
                                  t.init(n, t.animation);
                              }
                            });
                        });
                      }
                      var i = e.getTween();
                      (g = i && i._end > i._dp._time),
                        (d = A),
                        (N.y = 0),
                        M &&
                          (1 === mJ.isTouch && (r.style.position = "absolute"),
                          (r.scrollTop = 0),
                          1 === mJ.isTouch && (r.style.position = "fixed"));
                    }
                  },
                  onRefresh: function (e) {
                    e.animation.invalidate(),
                      e.setPositions(e.start, J() / k),
                      g || I(e),
                      (N.y = -F() * k),
                      X(N.y),
                      B ||
                        (g && (v = !1),
                        e.animation.progress(
                          mW.utils.clamp(0, 1, -(d / k / e.end))
                        )),
                      g && ((e.progress -= 0.001), e.update()),
                      (t.isRefreshing = !1);
                  },
                  id: "ScrollSmoother",
                  scroller: mG,
                  invalidateOnRefresh: !0,
                  start: 0,
                  refreshPriority: -9999,
                  end: function () {
                    return J() / k;
                  },
                  onScrubComplete: function () {
                    L.reset(), b && b(n);
                  },
                  scrub: M || !0,
                })),
                (this.smooth = function (t) {
                  return (
                    arguments.length &&
                      ((k = ((M = t || 0) && +e.speed) || 1),
                      o.scrubDuration(t)),
                    o.getTween() ? o.getTween().duration() : 0
                  );
                }),
                o.getTween() && (o.getTween().vars.ease = e.ease || m0),
                (this.scrollTrigger = o),
                e.effects &&
                  this.effects(
                    !0 === e.effects
                      ? "[data-" + S + "speed], [data-" + S + "lag]"
                      : e.effects,
                    { effectsPadding: e.effectsPadding, refresh: !1 }
                  ),
                e.sections &&
                  this.sections(
                    !0 === e.sections ? "[data-section]" : e.sections
                  ),
                tt.forEach(function (t) {
                  (t.vars.scroller = r),
                    t.revert(!1, !0),
                    t.init(t.vars, t.animation);
                }),
                (this.paused = function (t, e) {
                  return arguments.length
                    ? (!!p !== t &&
                        (t
                          ? (o.getTween() && o.getTween().pause(),
                            F(-A / k),
                            L.reset(),
                            (f = mJ.normalizeScroll()) && f.disable(),
                            ((p = mJ.observe({
                              preventDefault: !0,
                              type: "wheel,touch,scroll",
                              debounce: !1,
                              allowClicks: !0,
                              onChangeY: function () {
                                return Y(-A);
                              },
                            })).nested = m3(
                              mK,
                              "wheel,touch,scroll",
                              !0,
                              !1 !== e
                            )))
                          : (p.nested.kill(),
                            p.kill(),
                            (p = 0),
                            f && f.enable(),
                            (o.progress =
                              (-A / k - o.start) / (o.end - o.start)),
                            I(o))),
                      this)
                    : !!p;
                }),
                (this.kill = this.revert =
                  function () {
                    n.paused(!1), I(o), o.kill();
                    for (var t = (a || []).concat(l || []), e = t.length; e--; )
                      t[e].kill();
                    mJ.scrollerProxy(r),
                      mJ.removeEventListener("killAll", U),
                      mJ.removeEventListener("refresh", G),
                      (r.style.cssText = h),
                      (i.style.cssText = c);
                    var s = mJ.defaults({});
                    s && s.scroller === r && mJ.defaults({ scroller: mG }),
                      n.normalizer && mJ.normalizeScroll(!1),
                      clearInterval(u),
                      (m1 = null),
                      H && H.disconnect(),
                      mZ.style.removeProperty("height"),
                      mG.removeEventListener("focusin", V);
                  }),
                (this.refresh = function (t, e) {
                  return o.refresh(t, e);
                }),
                E &&
                  (this.normalizer = mJ.normalizeScroll(
                    !0 === E ? { debounce: !0, content: !M && i } : E
                  )),
                mJ.config(e),
                "overscrollBehavior" in mG.getComputedStyle(mZ) &&
                  mW.set([mZ, mK], { overscrollBehavior: "none" }),
                "scrollBehavior" in mG.getComputedStyle(mZ) &&
                  mW.set([mZ, mK], { scrollBehavior: "auto" }),
                mG.addEventListener("focusin", V),
                (u = setInterval(R, 250)),
                "loading" === mU.readyState ||
                  requestAnimationFrame(function () {
                    return mJ.refresh();
                  });
            }
            return (
              (t.register = function (e) {
                return (
                  !mq &&
                    ((mW = e || m8()),
                    m6() &&
                      window.document &&
                      ((mG = window),
                      (mK = (mU = document).documentElement),
                      (mZ = mU.body)),
                    mW &&
                      ((mQ = mW.utils.toArray),
                      (m$ = mW.utils.clamp),
                      (m0 = mW.parseEase("expo")),
                      (m5 = mW.core.context || function () {}),
                      (mJ = mW.core.globals().ScrollTrigger),
                      mW.core.globals("ScrollSmoother", t),
                      mZ &&
                        mJ &&
                        ((m4 = mW
                          .delayedCall(0.2, function () {
                            return mJ.isRefreshing || (m1 && m1.refresh());
                          })
                          .pause()),
                        (m2 = mJ.core._getVelocityProp),
                        (m3 = mJ.core._inputObserver),
                        (t.refresh = mJ.refresh),
                        (mq = 1)))),
                  mq
                );
              }),
              n(t, [
                {
                  key: "progress",
                  get: function () {
                    return this.scrollTrigger
                      ? this.scrollTrigger.animation._time / 100
                      : 0;
                  },
                },
              ]),
              t
            );
          })();
        (ve.version = "3.12.5"),
          (ve.create = function (t) {
            return m1 && t && m1.content() === mQ(t.content)[0]
              ? m1
              : new ve(t);
          }),
          (ve.get = function () {
            return m1;
          }),
          m8() && mW.registerPlugin(ve);
        var vn,
          vi,
          vr,
          vs,
          vo,
          va,
          vl = /(?:\r|\n|\t\t)/g,
          vu = /(?:\s\s+)/g,
          vh = String.fromCharCode(160),
          vc = function (t) {
            (vn = document),
              (vi = window),
              (vs =
                vs ||
                t ||
                vi.gsap ||
                console.warn("Please gsap.registerPlugin(SplitText)")) &&
                ((va = vs.utils.toArray),
                (vo = vs.core.context || function () {}),
                (vr = 1));
          },
          vp = function (t) {
            return vi.getComputedStyle(t);
          },
          vf = function (t) {
            return "absolute" === t.position || !0 === t.absolute;
          },
          vd = function (t, e) {
            for (var n, i = e.length; --i > -1; )
              if (((n = e[i]), t.substr(0, n.length) === n)) return n.length;
          },
          vg = function (t, e) {
            void 0 === t && (t = "");
            var n = ~t.indexOf("++"),
              i = 1;
            return (
              n && (t = t.split("++").join("")),
              function () {
                return (
                  "<" +
                  e +
                  " style='position:relative;display:inline-block;'" +
                  (t ? " class='" + t + (n ? i++ : "") + "'>" : ">")
                );
              }
            );
          },
          vm = function t(e, n, i) {
            var r = e.nodeType;
            if (1 === r || 9 === r || 11 === r)
              for (e = e.firstChild; e; e = e.nextSibling) t(e, n, i);
            else
              (3 === r || 4 === r) &&
                (e.nodeValue = e.nodeValue.split(n).join(i));
          },
          vv = function (t, e) {
            for (var n = e.length; --n > -1; ) t.push(e[n]);
          },
          v_ = function (t, e, n) {
            for (var i; t && t !== e; ) {
              if ((i = t._next || t.nextSibling))
                return i.textContent.charAt(0) === n;
              t = t.parentNode || t._parent;
            }
          },
          vD = function t(e) {
            var n,
              i,
              r = va(e.childNodes),
              s = r.length;
            for (n = 0; n < s; n++)
              (i = r[n])._isSplit
                ? t(i)
                : n && i.previousSibling && 3 === i.previousSibling.nodeType
                ? ((i.previousSibling.nodeValue +=
                    3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue),
                  e.removeChild(i))
                : 3 !== i.nodeType &&
                  (e.insertBefore(i.firstChild, i), e.removeChild(i));
          },
          vy = function (t, e) {
            return parseFloat(e[t]) || 0;
          },
          vx = function (t, e, n, i, r, s, o) {
            var a,
              l,
              u,
              h,
              c,
              p,
              f,
              d,
              g,
              m,
              v,
              _,
              D = vp(t),
              y = vy("paddingLeft", D),
              x = -999,
              b = vy("borderBottomWidth", D) + vy("borderTopWidth", D),
              w = vy("borderLeftWidth", D) + vy("borderRightWidth", D),
              C = vy("paddingTop", D) + vy("paddingBottom", D),
              E = vy("paddingLeft", D) + vy("paddingRight", D),
              T = vy("fontSize", D) * (e.lineThreshold || 0.2),
              P = D.textAlign,
              S = [],
              F = [],
              M = [],
              k = e.wordDelimiter || " ",
              A = e.tag ? e.tag : e.span ? "span" : "div",
              O = e.type || e.split || "chars,words,lines",
              B = r && ~O.indexOf("lines") ? [] : null,
              L = ~O.indexOf("words"),
              R = ~O.indexOf("chars"),
              N = vf(e),
              z = e.linesClass,
              I = ~(z || "").indexOf("++"),
              X = [],
              Y = "flex" === D.display,
              H = t.style.display;
            for (
              I && (z = z.split("++").join("")),
                Y && (t.style.display = "block"),
                u = (l = t.getElementsByTagName("*")).length,
                c = [],
                a = 0;
              a < u;
              a++
            )
              c[a] = l[a];
            if (B || N)
              for (a = 0; a < u; a++)
                ((p = (h = c[a]).parentNode === t) || N || (R && !L)) &&
                  ((_ = h.offsetTop),
                  B &&
                    p &&
                    Math.abs(_ - x) > T &&
                    ("BR" !== h.nodeName || 0 === a) &&
                    ((f = []), B.push(f), (x = _)),
                  N &&
                    ((h._x = h.offsetLeft),
                    (h._y = _),
                    (h._w = h.offsetWidth),
                    (h._h = h.offsetHeight)),
                  B &&
                    (((h._isSplit && p) ||
                      (!R && p) ||
                      (L && p) ||
                      (!L &&
                        h.parentNode.parentNode === t &&
                        !h.parentNode._isSplit)) &&
                      (f.push(h),
                      (h._x -= y),
                      v_(h, t, k) && (h._wordEnd = !0)),
                    "BR" === h.nodeName &&
                      ((h.nextSibling && "BR" === h.nextSibling.nodeName) ||
                        0 === a) &&
                      B.push([])));
            for (a = 0; a < u; a++) {
              if (((p = (h = c[a]).parentNode === t), "BR" === h.nodeName)) {
                B || N
                  ? (h.parentNode && h.parentNode.removeChild(h),
                    c.splice(a--, 1),
                    u--)
                  : L || t.appendChild(h);
                continue;
              }
              if (
                (N &&
                  ((g = h.style),
                  L ||
                    p ||
                    ((h._x += h.parentNode._x), (h._y += h.parentNode._y)),
                  (g.left = h._x + "px"),
                  (g.top = h._y + "px"),
                  (g.position = "absolute"),
                  (g.display = "block"),
                  (g.width = h._w + 1 + "px"),
                  (g.height = h._h + "px")),
                !L && R)
              ) {
                if (h._isSplit)
                  for (
                    h._next = l = h.nextSibling, h.parentNode.appendChild(h);
                    l && 3 === l.nodeType && " " === l.textContent;

                  )
                    (h._next = l.nextSibling),
                      h.parentNode.appendChild(l),
                      (l = l.nextSibling);
                else
                  h.parentNode._isSplit
                    ? ((h._parent = h.parentNode),
                      !h.previousSibling &&
                        h.firstChild &&
                        (h.firstChild._isFirst = !0),
                      h.nextSibling &&
                        " " === h.nextSibling.textContent &&
                        !h.nextSibling.nextSibling &&
                        X.push(h.nextSibling),
                      (h._next =
                        h.nextSibling && h.nextSibling._isFirst
                          ? null
                          : h.nextSibling),
                      h.parentNode.removeChild(h),
                      c.splice(a--, 1),
                      u--)
                    : p ||
                      ((_ = !h.nextSibling && v_(h.parentNode, t, k)),
                      h.parentNode._parent &&
                        h.parentNode._parent.appendChild(h),
                      _ && h.parentNode.appendChild(vn.createTextNode(" ")),
                      "span" === A && (h.style.display = "inline"),
                      S.push(h));
              } else
                h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML
                  ? F.push(h)
                  : R &&
                    !h._isSplit &&
                    ("span" === A && (h.style.display = "inline"), S.push(h));
            }
            for (a = X.length; --a > -1; ) X[a].parentNode.removeChild(X[a]);
            if (B) {
              for (
                N &&
                  ((m = vn.createElement(A)),
                  t.appendChild(m),
                  (v = m.offsetWidth + "px"),
                  (_ = m.offsetParent === t ? 0 : t.offsetLeft),
                  t.removeChild(m)),
                  g = t.style.cssText,
                  t.style.cssText = "display:none;";
                t.firstChild;

              )
                t.removeChild(t.firstChild);
              for (
                a = 0, d = " " === k && (!N || (!L && !R));
                a < B.length;
                a++
              ) {
                for (
                  f = B[a],
                    (m = vn.createElement(A)).style.cssText =
                      "display:block;text-align:" +
                      P +
                      ";position:" +
                      (N ? "absolute;" : "relative;"),
                    z && (m.className = z + (I ? a + 1 : "")),
                    M.push(m),
                    u = f.length,
                    l = 0;
                  l < u;
                  l++
                )
                  "BR" !== f[l].nodeName &&
                    ((h = f[l]),
                    m.appendChild(h),
                    d && h._wordEnd && m.appendChild(vn.createTextNode(" ")),
                    N &&
                      (0 === l &&
                        ((m.style.top = h._y + "px"),
                        (m.style.left = y + _ + "px")),
                      (h.style.top = "0px"),
                      _ && (h.style.left = h._x - _ + "px")));
                0 === u
                  ? (m.innerHTML = "&nbsp;")
                  : L || R || (vD(m), vm(m, String.fromCharCode(160), " ")),
                  N && ((m.style.width = v), (m.style.height = h._h + "px")),
                  t.appendChild(m);
              }
              t.style.cssText = g;
            }
            N &&
              (o > t.clientHeight &&
                ((t.style.height = o - C + "px"),
                t.clientHeight < o && (t.style.height = o + b + "px")),
              s > t.clientWidth &&
                ((t.style.width = s - E + "px"),
                t.clientWidth < s && (t.style.width = s + w + "px"))),
              Y &&
                (H ? (t.style.display = H) : t.style.removeProperty("display")),
              vv(n, S),
              L && vv(i, F),
              vv(r, M);
          },
          vb = function (t, e, n, i) {
            var r,
              s,
              o,
              a,
              l,
              u,
              h,
              c,
              p = e.tag ? e.tag : e.span ? "span" : "div",
              f = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
              d = vf(e),
              g = e.wordDelimiter || " ",
              m = function (t) {
                return t === g || (t === vh && " " === g);
              },
              v = " " !== g ? "" : d ? "&#173; " : " ",
              _ = "</" + p + ">",
              D = 1,
              y = e.specialChars
                ? "function" == typeof e.specialChars
                  ? e.specialChars
                  : vd
                : null,
              x = vn.createElement("div"),
              b = t.parentNode;
            for (
              b.insertBefore(x, t),
                x.textContent = t.nodeValue,
                b.removeChild(t),
                h = -1 !== (r = ps((t = x))).indexOf("<"),
                !1 !== e.reduceWhiteSpace &&
                  (r = r.replace(vu, " ").replace(vl, "")),
                h && (r = r.split("<").join("{{LT}}")),
                l = r.length,
                s = (" " === r.charAt(0) ? v : "") + n(),
                o = 0;
              o < l;
              o++
            )
              if (
                ((u = r.charAt(o)), y && (c = y(r.substr(o), e.specialChars)))
              )
                (u = r.substr(o, c || 1)),
                  (s += f && " " !== u ? i() + u + "</" + p + ">" : u),
                  (o += c - 1);
              else if (m(u) && !m(r.charAt(o - 1)) && o) {
                for (s += D ? _ : "", D = 0; m(r.charAt(o + 1)); )
                  (s += v), o++;
                o === l - 1
                  ? (s += v)
                  : ")" !== r.charAt(o + 1) && ((s += v + n()), (D = 1));
              } else
                "{" === u && "{{LT}}" === r.substr(o, 6)
                  ? ((s += f ? i() + "{{LT}}</" + p + ">" : "{{LT}}"), (o += 5))
                  : (u.charCodeAt(0) >= 55296 && 56319 >= u.charCodeAt(0)) ||
                    (r.charCodeAt(o + 1) >= 65024 &&
                      65039 >= r.charCodeAt(o + 1))
                  ? ((a =
                      ((r.substr(o, 12).split(pr) || [])[1] || "").length || 2),
                    (s +=
                      f && " " !== u
                        ? i() + r.substr(o, a) + "</" + p + ">"
                        : r.substr(o, a)),
                    (o += a - 1))
                  : (s += f && " " !== u ? i() + u + "</" + p + ">" : u);
            (t.outerHTML = s + (D ? _ : "")), h && vm(b, "{{LT}}", "<");
          },
          vw = function t(e, n, i, r) {
            var s,
              o,
              a = va(e.childNodes),
              l = a.length,
              u = vf(n);
            if (3 !== e.nodeType || l > 1) {
              for (s = 0, n.absolute = !1; s < l; s++)
                ((o = a[s])._next = o._isFirst = o._parent = o._wordEnd = null),
                  (3 !== o.nodeType || /\S+/.test(o.nodeValue)) &&
                    (u &&
                      3 !== o.nodeType &&
                      "inline" === vp(o).display &&
                      ((o.style.display = "inline-block"),
                      (o.style.position = "relative")),
                    (o._isSplit = !0),
                    t(o, n, i, r));
              (n.absolute = u), (e._isSplit = !0);
              return;
            }
            vb(e, n, i, r);
          },
          vC = (function () {
            function t(t, e) {
              vr || vc(),
                (this.elements = va(t)),
                (this.chars = []),
                (this.words = []),
                (this.lines = []),
                (this._originals = []),
                (this.vars = e || {}),
                vo(this),
                this.split(e);
            }
            var e = t.prototype;
            return (
              (e.split = function (t) {
                this.isSplit && this.revert(),
                  (this.vars = t = t || this.vars),
                  (this._originals.length =
                    this.chars.length =
                    this.words.length =
                    this.lines.length =
                      0);
                for (
                  var e,
                    n,
                    i,
                    r = this.elements.length,
                    s = t.tag ? t.tag : t.span ? "span" : "div",
                    o = vg(t.wordsClass, s),
                    a = vg(t.charsClass, s);
                  --r > -1;

                )
                  (i = this.elements[r]),
                    (this._originals[r] = {
                      html: i.innerHTML,
                      style: i.getAttribute("style"),
                    }),
                    (e = i.clientHeight),
                    (n = i.clientWidth),
                    vw(i, t, o, a),
                    vx(i, t, this.chars, this.words, this.lines, n, e);
                return (
                  this.chars.reverse(),
                  this.words.reverse(),
                  this.lines.reverse(),
                  (this.isSplit = !0),
                  this
                );
              }),
              (e.revert = function () {
                var t = this._originals;
                if (!t) throw "revert() call wasn't scoped properly.";
                return (
                  this.elements.forEach(function (e, n) {
                    (e.innerHTML = t[n].html),
                      e.setAttribute("style", t[n].style);
                  }),
                  (this.chars = []),
                  (this.words = []),
                  (this.lines = []),
                  (this.isSplit = !1),
                  this
                );
              }),
              (t.create = function (e, n) {
                return new t(e, n);
              }),
              t
            );
          })();
        (vC.version = "3.12.5"), (vC.register = vc);
        var vE = nA.registerPlugin(i5) || nA,
          vT = vE.core.Tween;
        (t.Back = n$),
          (t.Bounce = n1),
          (t.CSSPlugin = i5),
          (t.CSSRulePlugin = oR),
          (t.Circ = n3),
          (t.Cubic = nG),
          (t.CustomBounce = fc),
          (t.CustomEase = r$),
          (t.CustomWiggle = fx),
          (t.Draggable = oP),
          (t.DrawSVGPlugin = pL),
          (t.EasePack = ao),
          (t.EaselPlugin = o3),
          (t.Elastic = nQ),
          (t.Expo = n2),
          (t.ExpoScaleEase = ar),
          (t.Flip = ln),
          (t.GSDevTools = dn),
          (t.InertiaPlugin = dJ),
          (t.Linear = nW),
          (t.MorphSVGPlugin = gk),
          (t.MotionPathHelper = mj),
          (t.MotionPathPlugin = lb),
          (t.Observer = l4),
          (t.Physics2DPlugin = pq),
          (t.PhysicsPropsPlugin = p2),
          (t.PixiPlugin = uL),
          (t.Power0 = nX),
          (t.Power1 = nY),
          (t.Power2 = nH),
          (t.Power3 = nV),
          (t.Power4 = nj),
          (t.Quad = nq),
          (t.Quart = nU),
          (t.Quint = nK),
          (t.RoughEase = as),
          (t.ScrambleTextPlugin = fi),
          (t.ScrollSmoother = ve),
          (t.ScrollToPlugin = u1),
          (t.ScrollTrigger = c3),
          (t.Sine = n0),
          (t.SlowMo = ai),
          (t.SplitText = vC),
          (t.SteppedEase = nJ),
          (t.Strong = nZ),
          (t.TextPlugin = pl),
          (t.TimelineLite = eZ),
          (t.TimelineMax = eZ),
          (t.TweenLite = nr),
          (t.TweenMax = vT),
          (t.VelocityTracker = dy),
          (t._getProxyProp = lH),
          (t._getScrollFunc = lJ),
          (t._getTarget = l$),
          (t._getVelocityProp = l1),
          (t._horizontal = lZ),
          (t._isViewport = lV),
          (t._vertical = lQ),
          (t.clamp = ee),
          (t.default = vE),
          (t.distribute = ea),
          (t.getUnit = et),
          (t.gsap = vE),
          (t.interpolate = eD),
          (t.mapRange = e_),
          (t.normalize = ef),
          (t.pipe = ec),
          (t.random = eh),
          (t.selector = es),
          (t.shuffle = eo),
          (t.snap = eu),
          (t.splitColor = eP),
          (t.toArray = er),
          (t.unitize = ep),
          (t.wrap = eg),
          (t.wrapYoyo = em),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e);
    },
  },
]);
