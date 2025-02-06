"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [801],
  {
    59357: (e, t, o) => {
      o.d(t, { A: () => m });
      var r = o(96540);
      let n = function (e, t, o, n) {
          let l = r.useRef(o),
            a = r.useRef(n);
          r.useEffect(() => {
            (l.current = o), (a.current = n);
          }),
            r.useEffect(() => {
              let o = e && "current" in e ? e.current : e;
              if (!o) return;
              let r = 0;
              function n(...e) {
                r || l.current.apply(this, e);
              }
              o.addEventListener(t, n);
              let s = a.current;
              return () => {
                (r = 1), o.removeEventListener(t, n), s && s();
              };
            }, [e, t]);
        },
        l = (e) => {
          let t = r.useRef(e);
          return (
            r.useEffect(() => {
              t.current = e;
            }),
            t
          );
        },
        a = "undefined" != typeof performance ? performance : Date,
        s = () => a.now();
      function c(e, t = 30, o = !1) {
        let n = l(e),
          a = 1e3 / t,
          u = r.useRef(0),
          i = r.useRef(),
          d = () => i.current && clearTimeout(i.current),
          f = [t, o, n];
        function m() {
          (u.current = 0), d();
        }
        return (
          r.useEffect(() => m, f),
          r.useCallback(function () {
            let e = arguments,
              t = s(),
              r = () => {
                (u.current = t), d(), n.current.apply(null, e);
              },
              l = u.current;
            if (o && 0 === l) return r();
            if (t - l > a) {
              if (l > 0) return r();
              u.current = t;
            }
            d(),
              (i.current = setTimeout(() => {
                r(), (u.current = 0);
              }, a));
          }, f)
        );
      }
      function u(e, t) {
        if ("undefined" == typeof window) return e;
        let { event: o, element: r } = t,
          {
            clientX: n,
            clientY: l,
            screenX: a,
            screenY: s,
            pageX: c = 0,
            pageY: u = 0,
          } = "touches" in o ? o.touches[0] : o,
          i = r.getBoundingClientRect(),
          d = c - i.left - (window.pageXOffset || window.scrollX),
          f = u - i.top - (window.pageYOffset || window.scrollY);
        return "touches" in o && (d < 0 || f < 0 || d > i.width || f > i.height)
          ? {
              ...e,
              context: {
                ...e.context,
                hoverStatus: "leave",
                touchStatus: "end",
              },
            }
          : {
              context: { ...e.context, hoverStatus: "enter" },
              mouse: {
                ...e.mouse,
                x: d,
                y: f,
                pageX: c,
                pageY: u,
                clientX: n,
                clientY: l,
                screenX: a,
                screenY: s,
                elementWidth: i.width,
                elementHeight: i.height,
                isOver: !0,
                isTouch: "touches" in o,
              },
            };
      }
      function i(e, t) {
        let { mouse: o, context: r } = e;
        if ("mousemove" === t.type)
          return "end" === r.touchStatus ? e : u(e, t);
        if ("touchmove" === t.type)
          return u({ context: { ...r, touchStatus: "start" }, mouse: o }, t);
        if ("touchdown" === t.type)
          return u(
            {
              context: { ...r, touchStatus: "start" },
              mouse: { ...o, isDown: !0 },
            },
            t
          );
        if ("mousedown" === t.type)
          return { context: r, mouse: { ...o, isDown: !0 } };
        if ("mouseup" === t.type)
          return { context: r, mouse: { ...o, isDown: !1 } };
        if ("mouseleave" === t.type)
          return {
            context: { ...r, hoverStatus: "leave" },
            mouse: { ...o, isOver: !1 },
          };
        if ("touchleave" === t.type)
          return {
            context: { ...r, hoverStatus: "leave", touchStatus: "end" },
            mouse: { ...o, isOver: !1, isDown: !1 },
          };
        else if ("activeStatus" === t.type)
          return { context: { ...r, activeStatus: t.value }, mouse: o };
        return e;
      }
      let d = {
          x: null,
          y: null,
          pageX: null,
          pageY: null,
          clientX: null,
          clientY: null,
          screenX: null,
          screenY: null,
          elementWidth: null,
          elementHeight: null,
          isOver: !1,
          isDown: !1,
          isTouch: !1,
        },
        f = {
          hoverStatus: "idle",
          touchStatus: "idle",
          activeStatus: "inactive",
        },
        m = function (e, t = {}) {
          let { fps: o = 30, enterDelay: l = 0, leaveDelay: a = 0 } = t,
            [s, u] = r.useReducer(i, { mouse: d, context: f }),
            m = c(
              (t) => {
                let o = e && "current" in e ? e.current : e;
                o && u({ type: "mousemove", event: t, element: o });
              },
              o,
              !0
            ),
            p = c(
              (t) => {
                let o = e && "current" in e ? e.current : e;
                o && u({ type: "touchmove", event: t, element: o });
              },
              o,
              !0
            ),
            v = c(() => u({ type: "mouseleave" }), o, !1),
            h = c(
              (t) => {
                let o = e && "current" in e ? e.current : e;
                o &&
                  u(
                    "touches" in t
                      ? { type: "touchdown", element: o, event: t }
                      : { type: "mousedown", element: o, event: t }
                  );
              },
              o,
              !0
            ),
            y = c(() => u({ type: "mouseup" }), o, !1),
            b = c(() => u({ type: "touchleave" }), o, !1);
          function x() {
            return u({ type: "activeStatus", value: "active" });
          }
          function w() {
            return u({ type: "activeStatus", value: "inactive" });
          }
          return (
            n(e, "mouseenter", m),
            n(e, "mousemove", m),
            n(e, "mouseleave", v),
            n(e, "mousedown", h),
            n("undefined" != typeof window ? window : null, "mousedown", h),
            n("undefined" != typeof window ? window : null, "mouseup", y),
            n(e, "touchstart", h),
            n(e, "touchmove", p),
            n(e, "touchend", b),
            n(e, "touchcancel", b),
            r.useEffect(() => {
              if ("enter" === s.context.hoverStatus) {
                if (l) {
                  let e = setTimeout(x, l);
                  return () => clearTimeout(e);
                }
                u({ type: "activeStatus", value: "active" });
              } else {
                if (a) {
                  let e = setTimeout(w, a);
                  return () => clearTimeout(e);
                }
                u({ type: "activeStatus", value: "inactive" });
              }
            }, [s.context.hoverStatus, l, a]),
            "active" === s.context.activeStatus ? s.mouse : d
          );
        };
    },
    87517: (e, t, o) => {
      o.d(t, { A: () => p });
      var r = o(74848),
        n = o(96540),
        l = o(14953),
        a = o.n(l),
        s = o(71800);
      let c = { some: 0, all: 1 };
      var u = o(67667),
        i = o(89160),
        d = o(52046);
      let f = a()(
          () =>
            Promise.all([o.e(3624), o.e(6019), o.e(1398)]).then(
              o.bind(o, 31398)
            ),
          { loadableGenerated: { webpack: () => [31398] }, ssr: !1 }
        ),
        m = {
          zaptecGo: {
            colors: [
              { color: "#0a0a0a", name: "Asphalt Black" },
              { color: "#26252d", name: "Midnight Blue" },
              { color: "#474a51", name: "Rock Grey" },
              { color: "#4e3b31", name: "Wood Brown" },
              { color: "#f4f4f4", name: "Cloud White" },
              { color: "#6c7059", name: "Moss Green" },
            ],
            scale: [1, -1, -1],
            position: [0, 0, 0],
            model: "https://zaptec.objects.frb.io/assets/3D/Zaptec-Go.gltf",
          },
          zaptecGo2: {
            colors: [{ color: "#0a0a0a", name: "Asphalt Black" }],
            scale: [0.01, -0.01, -0.01],
            position: [0, 0, 0],
            model:
              "https://zaptec.objects.frb.io/assets/3D/Zaptec-Go-2-new.gltf",
          },
          zaptecPro: {
            colors: [{ color: "#0a0a0a", name: "Black" }],
            scale: [-0.7, -0.7, 0.7],
            position: [0, 0.06, 0],
            model: "https://zaptec.objects.frb.io/assets/3D/Zaptec-Pro2.gltf",
          },
          zaptecProMid: {
            colors: [{ color: "#0a0a0a", name: "Black" }],
            scale: [-0.7, -0.7, 0.7],
            position: [0, 0.06, 0],
            model:
              "https://zaptec.objects.frb.io/assets/3D/zaptec-pro-mid.gltf",
          },
          zaptecProFrench: {
            colors: [{ color: "#0a0a0a", name: "Black" }],
            scale: [-0.7, -0.7, 0.7],
            position: [0, 0.06, 0],
            model:
              "https://zaptec.objects.frb.io/assets/3D/zaptec-pro-french.gltf",
          },
        },
        p = (e) => {
          var t, o, l, a, p, v, h, y;
          let {
              product: b,
              small: x = !1,
              setCursorVariant: w = () => {},
              setSelectedColor: g = () => {},
            } = e,
            S = (0, n.useRef)(),
            [j, k] = (0, n.useState)(!0),
            [z, E] = (0, n.useState)({}),
            N = (function (
              e,
              { root: t, margin: o, amount: r, once: l = !1 } = {}
            ) {
              let [a, u] = (0, n.useState)(!1);
              return (
                (0, n.useEffect)(() => {
                  if (!e.current || (l && a)) return;
                  let n = {
                    root: (t && t.current) || void 0,
                    margin: o,
                    amount: r,
                  };
                  return (function (
                    e,
                    t,
                    { root: o, margin: r, amount: n = "some" } = {}
                  ) {
                    let l = (0, s.K)(e),
                      a = new WeakMap(),
                      u = new IntersectionObserver(
                        (e) => {
                          e.forEach((e) => {
                            let o = a.get(e.target);
                            if (!!o !== e.isIntersecting) {
                              if (e.isIntersecting) {
                                let o = t(e);
                                "function" == typeof o
                                  ? a.set(e.target, o)
                                  : u.unobserve(e.target);
                              } else o && (o(e), a.delete(e.target));
                            }
                          });
                        },
                        {
                          root: o,
                          rootMargin: r,
                          threshold: "number" == typeof n ? n : c[n],
                        }
                      );
                    return l.forEach((e) => u.observe(e)), () => u.disconnect();
                  })(e.current, () => (u(!0), l ? void 0 : () => u(!1)), n);
                }, [t, e, o, l, r]),
                a
              );
            })(S, { once: !0 }),
            [D, C] = (0, n.useState)(b.chargers[0]),
            [R, A] = (0, n.useState)(
              null === (t = m[D]) || void 0 === t ? void 0 : t.colors[0]
            );
          return (
            (0, n.useEffect)(() => {
              var e;
              z[null === (e = m[D]) || void 0 === e ? void 0 : e.model]
                ? k(!1)
                : k(!0);
            }, [z, D, k]),
            (0, r.jsxs)("div", {
              className: "w-full h-full relative",
              ref: S,
              children: [
                  (0, r.jsx)(f, {
                    modelPath:
                      null === (o = m[D]) || void 0 === o ? void 0 : o.model,
                    color: R.color,
                    small: x,
                    scale:
                      null === (l = m[D]) || void 0 === l ? void 0 : l.scale,
                    position:
                      null === (a = m[D]) || void 0 === a ? void 0 : a.position,
                    currentProduct: D,
                    setCursorVariant: w,
                    setLoading: k,
                    setLoadedModels: E,
                  }),
                b.chargers.length > 1 &&
                  (0, r.jsx)("div", {
                  }),
              ],
            })
          );
        };
    },
    71800: (e, t, o) => {
      o.d(t, { K: () => n });
      var r = o(85238);
      function n(e, t, o) {
        var n;
        if ("string" == typeof e) {
          let l = document;
          t &&
            ((0, r.V)(!!t.current, "Scope provided, but no element detected."),
            (l = t.current)),
            o
              ? ((null !== (n = o[e]) && void 0 !== n) ||
                  (o[e] = l.querySelectorAll(e)),
                (e = o[e]))
              : (e = l.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
    },
  },
]);
