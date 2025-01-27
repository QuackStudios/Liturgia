"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [994],
  {
    40994: (e, t, l) => {
      l.r(t), l.d(t, { default: () => v });
      var r = l(74848),
        s = l(96836),
        n = l(96540),
        o = l(48936),
        a = l.n(o),
        i = l(1723),
        c = l(55867),
        d = l(19602),
        m = l(90058),
        u = l(94203),
        g = l(33473);
      let f = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
        h = (e) => {
          var t, l, o, i, c;
          let { item: h, index: v } = e,
            p = (0, n.useRef)(null),
            x = (0, n.useRef)(null),
            b = (0, n.useRef)(null),
            w = (0, d.U)("only screen and (max-width: 1024px)"),
            [y, j] = (0, n.useState)([]);
          return (
            (0, g.E)(() => {
              p.current &&
                x.current &&
                b.current &&
                !w &&
                (s.os.registerPlugin(a()),
                j(
                  (e) =>
                    (e[0] = s.os.fromTo(
                      x.current,
                      { y: "".concat(f(10, 25), "svh") },
                      {
                        y: "".concat(f(-25, -5), "svh"),
                        scrollTrigger: {
                          trigger: p.current,
                          start: "clamp((top bottom)",
                          end: "clamp(bottom center)",
                          scrub: 2,
                          scroller: window.matchMedia("(hover: none)").matches
                            ? "body"
                            : "#smooth-wrapper",
                        },
                      }
                    ))
                ),
                j(
                  (e) =>
                    (e[0] = s.os.fromTo(
                      b.current,
                      { y: "".concat(f(-5, 10), "svh") },
                      {
                        y: "".concat(f(-25, -10), "svh"),
                        scrollTrigger: {
                          trigger: p.current,
                          start: "clamp(top bottom)",
                          end: "clamp(bottom top)",
                          scrub: 4,
                          scroller: window.matchMedia("(hover: none)").matches
                            ? "body"
                            : "#smooth-wrapper",
                        },
                      }
                    ))
                ));
            }, [p, x, b, w]),
            (0, n.useEffect)(() => {
              w &&
                y &&
                (null == y ||
                  y.forEach((e) => {
                    e.kill(), e.invalidate();
                  }));
            }, [w, y]),
            (0, r.jsxs)("div", {
              ref: p,
              className:
                "r-max-w-[67.5] w-full mx-auto relative r-py-12 flex flex-col-reverse lg:items-center lg:justify-between sm:mb-24 lg:mb-0 sm:pl-8 lg:pl-0 lg:min-h-[50svh] r-gap-10 ".concat(
                  v % 2 ? "lg:flex-row" : "lg:flex-row-reverse"
                ),
              children: [
                (0, r.jsxs)("div", {
                  className: "item-content r-max-w-[26.25] w-full ".concat(
                    v % 2
                      ? "self-end lg:self-center"
                      : "self-start lg:self-center"
                  ),
                  ref: b,
                  children: [
                    (0, r.jsx)("p", {
                      className:
                        "tag bg-grey-bgHover rounded-button px-4 py-[0.36rem] r-text-sm text-grey inline-block leading-none r-mb-5",
                      children: h.year,
                    }),
                    h.title &&
                      (0, r.jsx)("h3", {
                        className: "h3-text r-mb-4",
                        children: h.title,
                      }),
                    h.text &&
                      (0, r.jsx)("div", {
                        className: "r-text-lg wysiwyg text-grey",
                        children: (0, r.jsx)(u.A, { content: h.text }),
                      }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "media-content r-max-w-[26.25] w-full sm:w-1/2 lg:w-full flex items-start ".concat(
                      v % 2
                        ? "self-start lg:self-center"
                        : "self-end lg:self-center"
                    ),
                  ref: x,
                  children: (0, r.jsx)(m.A, {
                    media:
                      null === (o = h.media) || void 0 === o
                        ? void 0
                        : null === (l = o[0]) || void 0 === l
                        ? void 0
                        : null === (t = l.mediaElement) || void 0 === t
                        ? void 0
                        : t[0],
                    figureClasses: "w-full",
                    className: "media-element w-full",
                    width: 1080,
                    height: 1080,
                    sizes: "(min-width: 768px) 33vw, 100vw",
                    description:
                      null === (i = h.media) || void 0 === i
                        ? void 0
                        : i.description,
                    credit:
                      null === (c = h.media) || void 0 === c
                        ? void 0
                        : c.credit,
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute right-full lg:right-auto lg:left-1/2 top-1/2 -translate-y-1/2 translate-x-4 lg:-translate-x-1/2 -rotate-90 lg:rotate-0 r-text-lg bg-white py-1 px-3 z-10 hidden sm:block",
                  children: h.year,
                }),
              ],
            })
          );
        },
        v = (e) => {
          var t;
          let { globals: l, uid: o, moduleSet: d = "modules", anchor: m } = e,
            u = (0, n.useRef)(null),
            { currentSite: f, currentRoute: v, routeProps: p } = l,
            x = (0, c.A)({
              section: null == v ? void 0 : v.cms.section,
              types: null == v ? void 0 : v.cms.types,
              moduleSet: d,
            }),
            { data: b } = (0, i.I)(x, {
              variables: {
                section: null == v ? void 0 : v.cms.section,
                uri: p.uri,
                siteId: null == f ? void 0 : f.siteId,
                uid: o,
              },
            });
          if (
            ((0, g.E)(() => {
              if (!u.current) return;
              s.os.registerPlugin(a());
              let e = s.os.fromTo(
                u.current.querySelector(".line"),
                { scaleY: 0 },
                {
                  scaleY: 1,
                  duration: 1,
                  scrollTrigger: {
                    trigger: u.current,
                    start: "clamp(top center)",
                    end: "clamp(bottom top)",
                    scrub: 1.2,
                    scroller: window.matchMedia("(hover: none)").matches
                      ? "body"
                      : "#smooth-wrapper",
                  },
                }
              );
              return () => {
                e.kill();
              };
            }, [u.current]),
            !(null == b
              ? void 0
              : null === (t = b.entry) || void 0 === t
              ? void 0
              : t.modules) || 0 === b.entry.modules.length)
          )
            return null;
          let [w] = b.entry.modules;
          return (0, r.jsxs)("div", {
            id: "module-".concat(w.uid),
            "data-animate": "slide-up-fade-in",
            className: "page-builder-block ".concat(
              w.typeHandle,
              "-block relative container module-margin-bottom"
            ),
            ref: u,
            "data-anchor": m,
            children: [
              w.items.map((e, t) =>
                (0, r.jsx)(h, { item: e, index: t }, e.uid)
              ),
              (0, r.jsx)("div", {
                className:
                  "line absolute left-4 lg:left-1/2 top-0 transform lg:-translate-x-1/2 w-[1px] h-full bg-grey-border origin-top hidden sm:block",
              }),
            ],
          });
        };
    },
  },
]);
