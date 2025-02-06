"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3516],
  {
    53516: (e, t, r) => {
      r.r(t), r.d(t, { default: () => p });
      var l = r(74848),
        n = r(96540),
        o = r(67667),
        i = r(89160),
        a = r(90058),
        c = r(48981),
        s = r(96836),
        d = r(48936),
        u = r(19324),
        m = r(23820),
        h = r(33473);
      s.os.registerPlugin(d.ScrollTrigger, u.CustomEase, m.ScrollToPlugin);
      let p = (e) => {
        var t, r, u, m, p, g, f;
        let { module: v } = e,
          w = (0, n.useRef)(null),
          x = (0, n.useRef)(null),
          b = (0, n.useRef)([]),
          y = (0, n.useRef)(null),
          j = (0, n.useRef)(null),
          [N, k] = (0, n.useState)(null);
        return (
          (0, h.E)(() => {
            if (
              !(null == x ? void 0 : x.current) ||
              !(null == b ? void 0 : b.current) ||
              !(null == x ? void 0 : x.current)
            )
              return;
            let e = [];
            return (
              null == b ||
                b.current.forEach((t, r) => {
                  e.push(
                    d.ScrollTrigger.create({
                      trigger: t,
                      start: "top center",
                      end: "bottom center",
                      onEnter: () => {
                        k(r);
                      },
                      onEnterBack: () => {
                        k(r);
                      },
                    })
                  );
                }),
              e.push(
                d.ScrollTrigger.create({
                  trigger: w.current,
                  start: "top top",
                  end: "bottom bottom",
                  pin: x.current,
                  scroller: window.matchMedia("(hover: none)").matches
                    ? "body"
                    : "#smooth-wrapper",
                  pinSpacing: !0,
                })
              ),
              y.current &&
                e.push(
                  d.ScrollTrigger.create({
                    trigger: w.current,
                    start: "top 84",
                    end: "bottom bottom",
                    pin: y.current,
                    scroller: window.matchMedia("(hover: none)").matches
                      ? "body"
                      : "#smooth-wrapper",
                    pinSpacing: !1,
                  })
                ),
              document
                .querySelectorAll(".image-wrapper .inner-wrapper > *")
                .forEach((t) => {
                  e.push(
                    s.os.fromTo(
                      t,
                      {
                        clipPath:
                          "polygon(0 20%, 100% 20%, 100% 120%, 0% 120%)",
                        yPercent: -10,
                      },
                      {
                        clipPath:
                          "polygon(0 -20%, 100% -20%, 100% 80%, 0% 80%)",
                        yPercent: 10,
                        ease: "none",
                        scrollTrigger: {
                          trigger: t.parentElement,
                          start: "top bottom",
                          end: "bottom top",
                          scrub: 2,
                          scroller: window.matchMedia("(hover: none)").matches
                            ? "body"
                            : "#smooth-wrapper",
                        },
                      }
                    )
                  );
                }),
              () => {
                e.forEach((e) => {
                  e.kill();
                });
              }
            );
          }, [b, w, x, v.items]),
          (0, h.E)(() => {
            var e;
            (null == y ? void 0 : y.current) &&
              (null == j ? void 0 : j.current) &&
              (null === (e = v.items) || void 0 === e ? void 0 : e.length) !==
                1 &&
              s.os.to(j.current, {
                y: y.current.querySelectorAll("button")[N || 0].offsetTop,
                height:
                  y.current.querySelectorAll("button")[N || 0].offsetHeight,
              });
          }, [y, j, N, v.items]),
          (0, l.jsxs)("div", {
            className:
              "inner desktop grid grid-cols-10 gap-2 grid-rows-[auto_1fr_auto]"
                .concat(
                  (null === (t = v.items) || void 0 === t
                    ? void 0
                    : t.length) === 1
                    ? " items-center"
                    : ""
                )
                .concat(v.fullHeight ? " min-h-screen" : "")
                .concat(
                  (null === (r = v.items) || void 0 === r ? void 0 : r.length) >
                    1
                    ? " has-menu"
                    : ""
                ),
            ref: w,
            children: [
              (null === (u = v.items) || void 0 === u ? void 0 : u.length) >
                1 &&
          
              (0, l.jsx)("div", {
                className:
                  "block-content-wrapper row-start-1 row-span-3 mt-[-5vh] ".concat(
                    "right" === v.blockAlignment
                      ? " col-start-1 2xl:col-start-2 col-end-5"
                      : " col-start-7 col-end-11"
                  ),
                children: (0, l.jsx)("div", {
                  className:
                    "block-content flex items-center will-change-transform w-full sm:r-w-[30] mx-auto".concat(
                      v.fullHeight ? " h-screen" : ""
                    ),
                  ref: x,
                  children: (0, l.jsx)(o.N, {
                    mode: "popLayout",
                    children: (0, l.jsxs)(
                      i.P.div,
                      {
                        className:
                          "block-content-inner will-change-transform w-full",
                        initial: "hidden",
                        animate: "visible",
                        exit: "exit",
                        variants: {
                          hidden: { opacity: 0, y: 75 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.2, duration: 1 },
                          },
                          exit: {
                            opacity: 0,
                            y: -75,
                            transition: { duration: 0.2, ease: "easeIn" },
                          },
                        },
                        children: [
                          (null === (m = v.items[N]) || void 0 === m
                            ? void 0
                            : m.title) &&
                            (0, l.jsx)(i.P.h2, {
                              className:
                                "h2-text-alt r-mb-5 w-full sm:r-w-[30]",
                              variants: {
                                hidden: { opacity: 0, y: 45 },
                                visible: {
                                  opacity: 1,
                                  y: 0,
                                  transition: {
                                    delay: 0.2,
                                    duration: 1,
                                    ease: [0.16, 1, 0.3, 1],
                                  },
                                },
                                exit: {
                                  opacity: 0,
                                  y: -45,
                                  transition: {
                                    duration: 1,
                                    ease: [0.16, 1, 0.3, 1],
                                  },
                                },
                              },
                              children:
                                null === (p = v.items[N]) || void 0 === p
                                  ? void 0
                                  : p.title,
                            }),
                          null === (g = v.items[N]) || void 0 === g
                            ? void 0
                            : g.children.map((e, t) => {
                                let r = c.A[e.typeHandle];
                                return r
                                  ? (0, l.jsx)(
                                      r,
                                      { block: e, index: t },
                                      "block-".concat(e.uid)
                                    )
                                  : null;
                              }),
                        ],
                      },
                      "block-".concat(
                        null === (f = v.items[N]) || void 0 === f
                          ? void 0
                          : f.uid
                      )
                    ),
                  }),
                }),
              }),
              (0, l.jsx)("div", {
                className: "media-wrapper row-start-1 row-span-3 "
                  .concat(
                    "right" === v.blockAlignment
                      ? " col-start-6 col-end-11"
                      : " col-start-1 col-end-6",
                    " "
                  )
                  .concat(v.fullHeight ? "mt-[-10vh] " : ""),
                children: v.items.map((e, t) => {
                  var r;
                  return (0, l.jsx)(
                    "div",
                    {
                      id: "image-wrapper-".concat(e.uid),
                      className:
                        "image-wrapper r-py-[4.3] flex items-center ".concat(
                          v.fullHeight
                            ? "h-screen".concat(t > 0 ? " r-mt-[-10]" : "")
                            : ""
                        ),
                      ref: (e) => (b.current[t] = e),
                      children: (0, l.jsx)("div", {
                        className:
                          "inner-wrapper overflow-hidden h-full w-full",
                        children: (0, l.jsx)(a.A, {
                          media:
                            (null === (r = e.mediaElement) || void 0 === r
                              ? void 0
                              : r[0]) || null,
                          className: "w-full object-cover object-fit-fix".concat(
                            !v.maintainRatio && v.fullHeight
                              ? " h-full r-max-h-[90rem]"
                              : ""
                          ),
                          figureClasses: "w-full ".concat(
                            !v.maintainRatio && v.fullHeight
                              ? " h-full r-max-h-[90rem]"
                              : ""
                          ),
                          width: 960,
                          height: 1080,
                          videoClassName: "object-cover aspect-[16/9]",
                          sizes: "(min-width: 1024px) 50vw, 100vw",
                          showCaption: !1,
                        }),
                      }),
                    },
                    "image-wrapper-".concat(e.uid)
                  );
                }),
              }),
            ],
          })
        );
      };
    },
  },
]);
