(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6295],
  {
    86295: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => j });
      var r = n(74848),
        i = n(96540),
        l = n(32578),
        a = n(51521),
        o = Object.defineProperty,
        s = new Map(),
        d = new WeakMap(),
        u = 0,
        c = void 0;
      i.Component;
      var m = n(77969),
        f = n(1723),
        v = n(53594),
        h = n(89853),
        p = n(90058),
        g = n(72673),
        y = n(46874),
        b = n(48936),
        w = n.n(b);
      n(33853);
      let x = (e) => {
          var t, n, l, a;
          let { item: o } = e,
            s = (0, i.useRef)(null),
            [d, u] = (0, i.useState)(0),
            { mediaItems: c } = o,
            m = null;
          return (
            (m =
              (null == c ? void 0 : c.length) > 1
                ? (0, r.jsx)(y.RC, {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                    className: "w-full",
                    touchMoveStopPropagation: !0,
                    onSwiper: (e) => {
                      (s.current = e), w().refresh();
                    },
                    onSlideChange: (e) => {
                      u(e.activeIndex);
                    },
                    children:
                      null == c
                        ? void 0
                        : c.map((e) => {
                            var t;
                            return (0, r.jsx)(
                              y.qr,
                              {
                                children: (0, r.jsx)(p.A, {
                                  className: "w-full object-contain",
                                  media:
                                    null === (t = e.mediaElement) ||
                                    void 0 === t
                                      ? void 0
                                      : t[0],
                                  ratio: 1,
                                  width: 480,
                                  priority: !0,
                                }),
                              },
                              e.uid
                            );
                          }),
                  })
                : (0, r.jsx)(p.A, {
                    className: "w-full object-contain",
                    media:
                      null == c
                        ? void 0
                        : null === (a = c[0]) || void 0 === a
                        ? void 0
                        : null === (l = a.mediaElement) || void 0 === l
                        ? void 0
                        : l[0],
                    ratio: 1,
                    width: 480,
                    priority: !0,
                  })),
            (0, r.jsxs)(g.A, {
              href: o.url,
              className: "block r-max-w-[27.25] w-[70vw] px-2 relative",
              children: [
                (0, r.jsxs)("div", {
                  className: "card",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "image-wrapper bg-grey-bg r-p-[3.19] r-mb-5 relative",
                      children: [
                        m,
                        (null == c ? void 0 : c.length) > 1 &&
                          (0, r.jsx)("div", {
                            className:
                              "bullets absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-2",
                            children:
                              null == c
                                ? void 0
                                : c.map((e, t) =>
                                    (0, r.jsx)(
                                      "div",
                                      {
                                        className:
                                          "bullet w-2 h-2 rounded-full border transition-colors duration-200 cursor-pointer ".concat(
                                            d === t
                                              ? "bg-asphalt border-asphalt"
                                              : "bg-transparent border-grey"
                                          ),
                                        onClick: (e) => {
                                          var n;
                                            e.stopPropagation(),
                                            null === (n = s.current) ||
                                              void 0 === n ||
                                              n.slideTo(t),
                                            u(t);
                                        },
                                      },
                                      e.uid
                                    )
                                  ),
                          }),
                      ],
                    }),
                    (0, r.jsx)("h3", {
                      className:
                        "card-title base-text text-center text-asphalt r-mt-6",
                      children: o.title,
                    }),
                  ],
                }),
                (null == c ? void 0 : c.length) > 1 &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (null === (t = s.current) || void 0 === t
                        ? void 0
                        : t.realIndex) !== 0 &&
                        (0, r.jsx)("button", {
                          className:
                            "button-prev absolute top-1/2 r-left-[2.25] -translate-x-1/2 -translate-y-1/2 z-10",
                          onClick: (e) => {
                            var t;
                              e.stopPropagation(),
                              null === (t = s.current) ||
                                void 0 === t ||
                                t.slidePrev();
                          },
                          children: (0, r.jsx)("svg", {
                            width: "13",
                            height: "13",
                            viewBox: "0 0 13 13",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "rotate-180",
                            children: (0, r.jsx)("path", {
                              d: "M0 6.58887H12M12 6.58887L6 0.588867M12 6.58887L6 12.5889",
                              stroke: "#222222",
                            }),
                          }),
                        }),
                      (null === (n = s.current) || void 0 === n
                        ? void 0
                        : n.realIndex) !==
                        c.length - 1 &&
                        (0, r.jsx)("button", {
                          className:
                            "button-next absolute top-1/2 r-right-[2.25] -translate-x-1/2 -translate-y-1/2 z-10",
                          onClick: (e) => {
                            var t;
                              e.stopPropagation(),
                              null === (t = s.current) ||
                                void 0 === t ||
                                t.slideNext();
                          },
                          children: (0, r.jsx)("svg", {
                            width: "13",
                            height: "13",
                            viewBox: "0 0 13 13",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, r.jsx)("path", {
                              d: "M0 6.58887H12M12 6.58887L6 0.588867M12 6.58887L6 12.5889",
                              stroke: "#222222",
                            }),
                          }),
                        }),
                    ],
                  }),
              ],
            })
          );
        },
        j = (e) => {
          var t, n;
          let {
              globals: o,
              uid: p,
              moduleSet: g = "modules",
              smallMargins: y,
              anchor: b,
            } = e,
            [w, j] = (function ({
              threshold: e,
              delay: t,
              trackVisibility: n,
              rootMargin: r,
              root: l,
              triggerOnce: a,
              skip: o,
              initialInView: m,
              fallbackInView: f,
              onChange: v,
            } = {}) {
              var h;
              let [p, g] = i.useState(null),
                y = i.useRef(),
                [b, w] = i.useState({ inView: !!m, entry: void 0 });
              (y.current = v),
                i.useEffect(() => {
                  let i;
                  if (!o && p)
                    return (
                      (i = (function (e, t, n = {}, r = c) {
                        if (
                          void 0 === window.IntersectionObserver &&
                          void 0 !== r
                        ) {
                          let i = e.getBoundingClientRect();
                          return (
                            t(r, {
                              isIntersecting: r,
                              target: e,
                              intersectionRatio:
                                "number" == typeof n.threshold
                                  ? n.threshold
                                  : 0,
                              time: 0,
                              boundingClientRect: i,
                              intersectionRect: i,
                              rootBounds: i,
                            }),
                            () => {}
                          );
                        }
                        let {
                            id: i,
                            observer: l,
                            elements: a,
                          } = (function (e) {
                            let t = Object.keys(e)
                                .sort()
                                .filter((t) => void 0 !== e[t])
                                .map((t) => {
                                  var n;
                                  return `${t}_${
                                    "root" === t
                                      ? (n = e.root)
                                        ? (d.has(n) ||
                                            ((u += 1), d.set(n, u.toString())),
                                          d.get(n))
                                        : "0"
                                      : e[t]
                                  }`;
                                })
                                .toString(),
                              n = s.get(t);
                            if (!n) {
                              let r;
                              let i = new Map(),
                                l = new IntersectionObserver((t) => {
                                  t.forEach((t) => {
                                    var n;
                                    let l =
                                      t.isIntersecting &&
                                      r.some((e) => t.intersectionRatio >= e);
                                    e.trackVisibility &&
                                      void 0 === t.isVisible &&
                                      (t.isVisible = l),
                                      null == (n = i.get(t.target)) ||
                                        n.forEach((e) => {
                                          e(l, t);
                                        });
                                  });
                                }, e);
                              (r =
                                l.thresholds ||
                                (Array.isArray(e.threshold)
                                  ? e.threshold
                                  : [e.threshold || 0])),
                                (n = { id: t, observer: l, elements: i }),
                                s.set(t, n);
                            }
                            return n;
                          })(n),
                          o = a.get(e) || [];
                        return (
                          a.has(e) || a.set(e, o),
                          o.push(t),
                          l.observe(e),
                          function () {
                            o.splice(o.indexOf(t), 1),
                              0 === o.length && (a.delete(e), l.unobserve(e)),
                              0 === a.size && (l.disconnect(), s.delete(i));
                          }
                        );
                      })(
                        p,
                        (e, t) => {
                          w({ inView: e, entry: t }),
                            y.current && y.current(e, t),
                            t.isIntersecting && a && i && (i(), (i = void 0));
                        },
                        {
                          root: l,
                          rootMargin: r,
                          threshold: e,
                          trackVisibility: n,
                          delay: t,
                        },
                        f
                      )),
                      () => {
                        i && i();
                      }
                    );
                }, [
                  Array.isArray(e) ? e.toString() : e,
                  p,
                  l,
                  r,
                  a,
                  o,
                  n,
                  f,
                  t,
                ]);
              let x = null == (h = b.entry) ? void 0 : h.target,
                j = i.useRef();
              p ||
                !x ||
                a ||
                o ||
                j.current === x ||
                ((j.current = x), w({ inView: !!m, entry: void 0 }));
              let N = [g, b.inView, b.entry];
              return (N.ref = N[0]), (N.inView = N[1]), (N.entry = N[2]), N;
            })({ threshold: 0 }),
            N = (0, l.useTranslations)("common"),
            [k, C] = (0, i.useState)(null),
            { currentSite: E, currentRoute: M, routeProps: A } = o,
            R = (0, v.Ay)({
              section: null == M ? void 0 : M.cms.section,
              types: null == M ? void 0 : M.cms.types,
              moduleSet: g,
            }),
            [I] = (0, m._)(v._2[0].query, {
              onCompleted: (e) => {
                C((null == e ? void 0 : e.entries) || null);
              },
            }),
            { data: S } = (0, f.I)(R, {
              variables: {
                section: null == M ? void 0 : M.cms.section,
                uri: A.uri,
                siteId: null == E ? void 0 : E.siteId,
                uid: p,
              },
              onCompleted: (e) => {
                if (v._2[0].shouldRun(e, g))
                  I({ variables: v._2[0].variables(e, g) });
                else {
                  let [t] =
                    (null == e ? void 0 : e.entry) &&
                    (null == e ? void 0 : e.entry[g])
                      ? null == e
                        ? void 0
                        : e.entry[g]
                      : [];
                  if (t) {
                    let { items: e } = t;
                    e && (null == e ? void 0 : e.length) > 0 && C(e);
                  }
                }
              },
            });
          if (
            !(null == S ? void 0 : S.entry) ||
            !S.entry[g] ||
            0 === S.entry[g].length
          )
            return null;
          let [q] = S.entry[g],
            { accessoriesHome: O } = S || {};
          return (0, r.jsxs)("div", {
            ref: w,
            id: "module-".concat(q.uid),
            className: "page-builder-block "
              .concat(q.typeHandle, "-block module-margin optional-hidden-sections ")
              .concat(y.top ? "st" : "", " ")
              .concat(y.bottom ? "sb" : "", " relative ")
              .concat(q.hideImages && !isMobile ? " no-images" : ""),
            "data-anchor": b,
            children: [
              (0, r.jsx)("div", {
                className:
                  "module-top r-mb-8 flex justify-between items-start container full",
                children: (0, r.jsxs)("div", {
                  className:
                    "left flex flex-row justify-between sm:flex-col gap-4 w-full sm:w-auto",
                  children: [
                    q.title &&
                      (0, r.jsx)("h2", {
                        className: "h2-text-alt",
                        children: q.title,
                      }),
                    (null === (t = q.button) || void 0 === t ? void 0 : t.href)
                      ? (0, r.jsx)(h.A, {
                          linkProps: q.button,
                          className: "mt-3",
                        })
                      : (0, r.jsx)(h.A, {
                          href:
                            (null === (n = q.accessoryCategory) || void 0 === n
                              ? void 0
                              : n.length) > 0
                              ? q.accessoryCategory[0].url
                              : null == O
                              ? void 0
                              : O.url,
                          className: "mt-3",
                          children: N("button.seeAll"),
                        }),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                className: "container full",
                children: (0, r.jsx)("div", {
                  className: "inner",
                  children: (0, r.jsx)(a.A, {
                    pauseOnHover: !0,
                    play: j && (null == k ? void 0 : k.length) > 4,
                    children:
                      null == k
                        ? void 0
                        : k.map((e, t) =>
                            (0, r.jsx)(
                              x,
                              { item: e, index: t, hideImages: q.hideImages },
                              "card-".concat(e.uid)
                            )
                          ),
                  }),
                }),
              }),
            ],
          });
        };
    },
    51521: (e, t, n) => {
      var r = n(96540),
        i = (function (e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        })(r);
      !(function (e) {
        if (!e || "undefined" == typeof window) return;
        let t = document.createElement("style");
        t.setAttribute("type", "text/css"),
          (t.innerHTML = e),
          document.head.appendChild(t);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      );
      let l = r.forwardRef(function (
        {
          style: e = {},
          className: t = "",
          autoFill: n = !1,
          play: l = !0,
          pauseOnHover: a = !1,
          pauseOnClick: o = !1,
          direction: s = "left",
          speed: d = 50,
          delay: u = 0,
          loop: c = 0,
          gradient: m = !1,
          gradientColor: f = "white",
          gradientWidth: v = 200,
          onFinish: h,
          onCycleComplete: p,
          onMount: g,
          children: y,
        },
        b
      ) {
        let [w, x] = r.useState(0),
          [j, N] = r.useState(0),
          [k, C] = r.useState(1),
          [E, M] = r.useState(!1),
          A = r.useRef(null),
          R = b || A,
          I = r.useRef(null),
          S = r.useCallback(() => {
            if (I.current && R.current) {
              let e = R.current.getBoundingClientRect(),
                t = I.current.getBoundingClientRect(),
                r = e.width,
                i = t.width;
              ("up" === s || "down" === s) && ((r = e.height), (i = t.height)),
                n && r && i ? C(i < r ? Math.ceil(r / i) : 1) : C(1),
                x(r),
                N(i);
            }
          }, [n, R, s]);
        r.useEffect(() => {
          if (E && (S(), I.current && R.current)) {
            let e = new ResizeObserver(() => S());
            return (
              e.observe(R.current),
              e.observe(I.current),
              () => {
                e && e.disconnect();
              }
            );
          }
        }, [S, R, E]),
          r.useEffect(() => {
            S();
          }, [S, y]),
          r.useEffect(() => {
            M(!0);
          }, []),
          r.useEffect(() => {
            "function" == typeof g && g();
          }, []);
        let q = r.useMemo(
            () => (n ? (j * k) / d : j < w ? w / d : j / d),
            [n, w, j, k, d]
          ),
          O = r.useMemo(
            () =>
              Object.assign(Object.assign({}, e), {
                "--pause-on-hover": !l || a ? "paused" : "running",
                "--pause-on-click": !l || (a && !o) || o ? "paused" : "running",
                "--width": "up" === s || "down" === s ? "100vh" : "100%",
                "--transform":
                  "up" === s
                    ? "rotate(-90deg)"
                    : "down" === s
                    ? "rotate(90deg)"
                    : "none",
              }),
            [e, l, a, o, s]
          ),
          _ = r.useMemo(
            () => ({
              "--gradient-color": f,
              "--gradient-width": "number" == typeof v ? `${v}px` : v,
            }),
            [f, v]
          ),
          P = r.useMemo(
            () => ({
              "--play": l ? "running" : "paused",
              "--direction": "left" === s ? "normal" : "reverse",
              "--duration": `${q}s`,
              "--delay": `${u}s`,
              "--iteration-count": c ? `${c}` : "infinite",
              "--min-width": n ? "auto" : "100%",
            }),
            [l, s, q, u, c, n]
          ),
          V = r.useMemo(
            () => ({
              "--transform":
                "up" === s
                  ? "rotate(90deg)"
                  : "down" === s
                  ? "rotate(-90deg)"
                  : "none",
            }),
            [s]
          ),
          B = r.useCallback(
            (e) =>
              [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                i.default.createElement(
                  r.Fragment,
                  { key: t },
                  r.Children.map(y, (e) =>
                    i.default.createElement(
                      "div",
                      { style: V, className: "rfm-child" },
                      e
                    )
                  )
                )
              ),
            [V, y]
          );
        return E
          ? i.default.createElement(
              "div",
              { ref: R, style: O, className: "rfm-marquee-container " + t },
              m &&
                i.default.createElement("div", {
                  style: _,
                  className: "rfm-overlay",
                }),
              i.default.createElement(
                "div",
                {
                  className: "rfm-marquee",
                  style: P,
                  onAnimationIteration: p,
                  onAnimationEnd: h,
                },
                i.default.createElement(
                  "div",
                  { className: "rfm-initial-child-container", ref: I },
                  r.Children.map(y, (e) =>
                    i.default.createElement(
                      "div",
                      { style: V, className: "rfm-child" },
                      e
                    )
                  )
                ),
                B(k - 1)
              ),
              i.default.createElement(
                "div",
                { className: "rfm-marquee", style: P },
                B(k)
              )
            )
          : null;
      });
      t.A = l;
    },
  },
]);
