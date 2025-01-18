"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5739],
  {
    45739: (e, t, o) => {
      o.r(t), o.d(t, { default: () => j });
      var i = o(74848),
        r = o(96540),
        a = o(1723),
        l = o(47158),
        n = o(74728),
        s = o.n(n),
        d = o(4536),
        c = o(96836),
        m = o(48936),
        u = o.n(m),
        v = o(33473),
        h = o(89160),
        w = o(89853),
        p = o(90058),
        x = o(52818);
      c.os.registerPlugin(u());
      let b = (e) => {
        var t, o, a, l, n, m, u, b, y, f, j;
        let { module: g } = e,
          N = (0, r.useRef)(null);
        return (
          (0, v.E)(() => {
            if (!N.current) return;
            let e = [],
              t = {
                tl: N.current.querySelector(".media-tl"),
                c: N.current.querySelector(".media-c"),
                tr: N.current.querySelector(".media-tr"),
                bl: N.current.querySelector(".media-bl"),
                br: N.current.querySelector(".media-br"),
              },
              o = c.os.timeline({
                scrollTrigger: {
                  trigger: N.current.parentElement,
                  start: "top top",
                  end: () => {
                    let e = window.innerHeight;
                    return "+=".concat(1.5 * e);
                  },
                  scrub: !0,
                  pin: N.current,
                  scroller: window.matchMedia("(hover: none)").matches
                    ? "body"
                    : "#smooth-wrapper",
                  pinSpacing: !0,
                  snap: { snapTo: [1], duration: 3, delay: 0.2 },
                },
              });
            o.fromTo(
              t.c,
              { top: "150%" },
              { top: "50%", duration: 1, ease: "none", ease: "power2.out" }
            ),
              o.to(
                t.c,
                { height: "100%", width: "100%", duration: 0.6, ease: "none" },
                "<+=0.5"
              ),
              o.fromTo(
                t.tr,
                { y: "100vh" },
                { y: "-100vh", duration: 0.9, ease: "none" },
                "<-=0.2"
              ),
              o.fromTo(
                t.tl,
                { y: "100vh" },
                { y: "-80vh", duration: 1, ease: "none" },
                "<"
              ),
              o.fromTo(
                t.br,
                { y: "80vh" },
                { y: "-100vh", duration: 1, ease: "none" },
                "<+=0.1"
              ),
              o.fromTo(
                t.bl,
                { y: "80vh" },
                { y: "-100vh", duration: 0.8, ease: "none" },
                "<+=0.1"
              );
            let i = c.os.timeline({
              scrollTrigger: {
                trigger: N.current.closest(".page-builder-block"),
                start: () => {
                  let e = window.innerHeight;
                  return "-=".concat(e / 3);
                },
                end: () => {
                  let e = window.innerHeight;
                  return "+=".concat(2 * e);
                },
                scrub: !0,
                scroller: window.matchMedia("(hover: none)").matches
                  ? "body"
                  : "#smooth-wrapper",
              },
            });
            return (
              i.to(
                "body",
                {
                  backgroundColor: "#222222",
                  duration: 1 / 8,
                  ease: "power2.out",
                },
                "<"
              ),
              i.to(
                "body",
                {
                  backgroundColor: "#ffffff",
                  delay: 6 / 8,
                  duration: 1 / 8,
                  ease: "power2.in",
                },
                "<"
              ),
              e.push(i),
              e.push(o),
              () => {
                e.forEach((e) => {
                  e.kill && e.kill(),
                    (document.body.style.backgroundColor = "#fff");
                });
              }
            );
          }, [N]),
          (0, i.jsxs)("div", {
            className:
              "module-inner-wrapper relative min-h-screen flex items-center justify-center will-change-transform",
            ref: N,
            children: [
              (0, i.jsxs)("div", {
                className: "content mx-auto w-full r-max-w-[54] flex flex-col",
                children: [
                  g.title &&
                    (0, i.jsx)("h2", {
                      className: "h2-text text-white text-center",
                      children: (0, i.jsx)(x.A, { children: g.title }),
                    }),
                  g.text &&
                    (0, i.jsx)("div", {
                      className: "".concat(
                        g.dark ? "text-white" : "",
                        " r-max-w-[26] mx-auto text-center r-mt-5 body-text"
                      ),
                      dangerouslySetInnerHTML: { __html: s()(g.text, d.O) },
                    }),
                  (0, i.jsx)(h.P.div, {
                    className: "r-mt-10 mx-auto",
                    initial: { opacity: 0, y: 0 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0, amount: "all" },
                    transition: { delay: 0.3, duration: 1 },
                    children:
                      (null === (t = g.button) || void 0 === t
                        ? void 0
                        : t.href) &&
                      (0, i.jsx)(w.A, {
                        linkProps: g.button,
                        className: "".concat(g.dark ? "full-white" : ""),
                      }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "absolute left-0 top-0 w-full h-full -z-10",
                children: [
                  (0, i.jsx)(p.A, {
                    media:
                      null === (a = g.media) || void 0 === a
                        ? void 0
                        : null === (o = a[0]) || void 0 === o
                        ? void 0
                        : o.mediaElement[0],
                    className:
                      "media-el media-tl w-[10rem] sm:r-w-[23.4] aspect-[23.4/14.5] absolute top-[6.9%] left-[4.4%] object-cover",
                    showCaption: !1,
                    width: 480,
                    height: 300,
                    sizes: "(min-width: 1024px) 480px, 50vw",
                    videoClassName: "object-cover",
                  }),
                  (0, i.jsx)(p.A, {
                    media:
                      null === (n = g.media) || void 0 === n
                        ? void 0
                        : null === (l = n[1]) || void 0 === l
                        ? void 0
                        : l.mediaElement[0],
                    className:
                      "media-el media-c r-w-[17] r-h-[15.725] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  object-cover z-10",
                    showCaption: !1,
                    width: 1920,
                    height: 1080,
                    videoClassName: "object-cover",
                  }),
                  (0, i.jsx)(p.A, {
                    media:
                      null === (u = g.media) || void 0 === u
                        ? void 0
                        : null === (m = u[2]) || void 0 === m
                        ? void 0
                        : m.mediaElement[0],
                    className:
                      "media-el media-tr w-[7rem] sm:r-w-[13] aspect-[13/12] absolute top-[21%] right-0 object-cover",
                    showCaption: !1,
                    width: 480,
                    ratio: 13 / 12,
                    height: 443,
                    sizes: "(min-width: 1024px) 480px, 50vw",
                    videoClassName: "object-cover",
                  }),
                  (0, i.jsx)(p.A, {
                    media:
                      null === (y = g.media) || void 0 === y
                        ? void 0
                        : null === (b = y[3]) || void 0 === b
                        ? void 0
                        : b.mediaElement[0],
                    className:
                      "media-el media-bl w-20 sm:r-w-[10] aspect-[10.2/9.5] absolute bottom-[23.6%] left-0 object-cover",
                    showCaption: !1,
                    width: 480,
                    height: 447,
                    sizes: "(min-width: 1024px) 480px, 50vw",
                    videoClassName: "object-cover",
                  }),
                  (0, i.jsx)(p.A, {
                    media:
                      null === (j = g.media) || void 0 === j
                        ? void 0
                        : null === (f = j[4]) || void 0 === f
                        ? void 0
                        : f.mediaElement[0],
                    className:
                      "media-el media-br w-[8rem] sm:r-w-[16.8] aspect-[16.8/13.7] absolute bottom-[6.9%] right-[13.33%] object-cover",
                    showCaption: !1,
                    width: 480,
                    height: 297,
                    sizes: "(min-width: 1024px) 480px, 50vw",
                    videoClassName: "object-cover",
                  }),
                ],
              }),
            ],
          })
        );
      };
      var y = o(94203);
      let f = (e) => {
          var t, o, a, l, n, s, d, m, b, f, j;
          let { module: g } = e,
            N = (0, r.useRef)(null);
          return (
            (0, v.E)(() => {
              if (!N.current) return;
              c.os.registerPlugin(u());
              let e = N.current.querySelector(".m-tl"),
                t = N.current.querySelector(".m-tr"),
                o = N.current.querySelector(".m-c"),
                i = N.current.querySelector(".m-bl"),
                r = N.current.querySelector(".m-br"),
                a = c.os.timeline({
                  scrollTrigger: {
                    trigger: N.current,
                    start: "top center",
                    end: () => {
                      let e = window.innerHeight;
                      return "+=".concat(1 * e);
                    },
                    scrub: 1.5,
                    scroller: window.matchMedia("(hover: none)").matches
                      ? "body"
                      : "#smooth-wrapper",
                    pinnedContainer: N.current.parentElement,
                    snap: {
                      snapTo: [0.5],
                      duration: 3,
                      delay: 0.5,
                      ease: "power2",
                    },
                  },
                });
              return (
                a.fromTo(
                  o,
                  { y: "50vh" },
                  { y: "0vh", ease: "power4.out", duration: 0.8 }
                ),
                a.fromTo(
                  o,
                  { scale: 0.5 },
                  { scale: 1, duration: 0.5, ease: "back.out(1.7)" },
                  "<+=0.1"
                ),
                a.fromTo(
                  e,
                  { y: "60vh" },
                  { y: "-0.5vh", duration: 0.9, ease: "power4.out" },
                  "<-=0.1"
                ),
                a.fromTo(
                  t,
                  { y: "70vh" },
                  { y: "-1.5vh", duration: 0.5, ease: "power4.out" },
                  "<"
                ),
                a.fromTo(
                  i,
                  { y: "80vh" },
                  { y: "-2vh", duration: 0.6, ease: "power4.out" },
                  "<"
                ),
                a.fromTo(
                  r,
                  { y: "80vh" },
                  { y: "-1vh", duration: 0.7, ease: "power4.out" },
                  "<"
                ),
                () => {
                  a.kill();
                }
              );
            }, [N.current]),
            (0, i.jsxs)("div", {
              className:
                "module-inner-wrapper relative min-h-screen flex flex-col items-center justify-center overflow-hidden",
              ref: N,
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "media-wrapper relative r-mb-10 r-pb-[3] r-pt-[2.3] mx-auto r-w-[15.7] isolate",
                  children: [
                    (0, i.jsx)(p.A, {
                      media:
                        null === (o = g.media) || void 0 === o
                          ? void 0
                          : null === (t = o[2]) || void 0 === t
                          ? void 0
                          : t.mediaElement[0],
                      className:
                        "m-tr r-w-[8.34] aspect-[8.34/10.23] absolute top-[0] left-full -ml-2 object-cover z-10",
                      showCaption: !1,
                      width: 480,
                      ratio: 23.4 / 14.5,
                      sizes: "(min-width: 1024px) 480px, 50vw",
                    }),
                    (0, i.jsx)(p.A, {
                      media:
                        null === (l = g.media) || void 0 === l
                          ? void 0
                          : null === (a = l[1]) || void 0 === a
                          ? void 0
                          : a.mediaElement[0],
                      className:
                        "m-tl r-w-[9.3] aspect-[9.3/6] absolute r-top-[4.8] right-full -mr-[1.8]  object-cover",
                      showCaption: !1,
                      width: 480,
                      ratio: 23.4 / 14.5,
                      sizes: "(min-width: 1024px) 480px, 50vw",
                    }),
                    (0, i.jsx)(p.A, {
                      media:
                        null === (s = g.media) || void 0 === s
                          ? void 0
                          : null === (n = s[0]) || void 0 === n
                          ? void 0
                          : n.mediaElement[0],
                      className:
                        "m-c w-full aspect-[15/21] object-cover origin-bottom",
                      showCaption: !1,
                      width: 480,
                      ratio: 13 / 12,
                      sizes: "(min-width: 1024px) 480px, 50vw",
                    }),
                    (0, i.jsx)(p.A, {
                      media:
                        null === (m = g.media) || void 0 === m
                          ? void 0
                          : null === (d = m[3]) || void 0 === d
                          ? void 0
                          : d.mediaElement[0],
                      className:
                        "m-bl r-w-[12.2] aspect-[12.2/8.6] absolute bottom-0 right-full -mr-10 object-cover",
                      showCaption: !1,
                      width: 480,
                      ratio: 10.2 / 9.5,
                      sizes: "(min-width: 1024px) 480px, 50vw",
                    }),
                    (0, i.jsx)(p.A, {
                      media:
                        null === (f = g.media) || void 0 === f
                          ? void 0
                          : null === (b = f[4]) || void 0 === b
                          ? void 0
                          : b.mediaElement[0],
                      className:
                        "m-br r-w-[9.8] aspect-[9.8/7.14] absolute bottom-6 left-full r-ml-[-2.5] object-cover -z-10",
                      showCaption: !1,
                      width: 480,
                      ratio: 23.4 / 14.5,
                      sizes: "(min-width: 1024px) 480px, 50vw",
                    }),
                  ],
                }),
                (g.title || g.text) &&
                  (0, i.jsx)("div", {
                    className: "module-top relative container",
                    children: (0, i.jsxs)("div", {
                      className:
                        "top-content text-center r-max-w-[45.6] mx-auto relative z-10",
                      children: [
                        g.title &&
                          (0, i.jsx)("h2", {
                            className: "h2-text leading-none r-mb-6 last:mb-0",
                            children: (0, i.jsx)(x.A, { children: g.title }),
                          }),
                        (0, i.jsxs)(h.P.div, {
                          initial: "hidden",
                          whileInView: "show",
                          viewport: { once: !0, amount: "some" },
                          children: [
                            (null == g ? void 0 : g.text) &&
                              (0, i.jsx)(h.P.div, {
                                className:
                                  "wysiwyg r-max-w-[26.25] mx-auto w-full text-grey r-text-base",
                                initial: { opacity: 0, y: 50 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: !0, amount: "some" },
                                transition: {
                                  duration: 1.5,
                                  delay: 0.4,
                                  ease: "easeOut",
                                },
                                variants: {
                                  hidden: { opacity: 0, y: 50 },
                                  show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                      duration: 1.5,
                                      delay: 0.4,
                                      ease: "easeOut",
                                    },
                                  },
                                },
                                children: (0, i.jsx)(y.A, { content: g.text }),
                              }),
                            (null === (j = g.button) || void 0 === j
                              ? void 0
                              : j.href) &&
                              (0, i.jsx)(h.P.div, {
                                className:
                                  "r-mt-10 mx-auto flex justify-center",
                                variants: {
                                  hidden: { opacity: 0, y: 50 },
                                  show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                      duration: 1.5,
                                      delay: 0.6,
                                      ease: "easeOut",
                                    },
                                  },
                                },
                                children: (0, i.jsx)(w.A, {
                                  linkProps: g.button,
                                  className: "",
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
              ],
            })
          );
        },
        j = (e) => {
          var t;
          let {
              globals: o,
              uid: n,
              moduleSet: s = "modules",
              smallMargins: d,
              anchor: c,
            } = e,
            m = (0, r.useRef)(),
            { currentSite: u, currentRoute: v, routeProps: h } = o,
            w = (0, l.A)({
              section: null == v ? void 0 : v.cms.section,
              types: null == v ? void 0 : v.cms.types,
              moduleSet: s,
            }),
            { data: p } = (0, a.I)(w, {
              variables: {
                section: null == v ? void 0 : v.cms.section,
                uri: h.uri,
                siteId: null == u ? void 0 : u.siteId,
                uid: n,
              },
            });
          if (
            !(null == p
              ? void 0
              : null === (t = p.entry) || void 0 === t
              ? void 0
              : t.modules) ||
            0 === p.entry.modules.length
          )
            return null;
          let [x] = p.entry.modules;
          return (0, i.jsx)("div", {
            id: "module-".concat(x.uid),
            className: "page-builder-block "
              .concat(x.typeHandle, "-block module-margin ")
              .concat(d.top ? "st" : "", " ")
              .concat(d.bottom ? "sb" : "", " relative isolate"),
            ref: m,
            "data-anchor": c,
            children: x.dark
              ? (0, i.jsx)(b, { module: x, wrapperRef: m })
              : (0, i.jsx)(f, { module: x, wrapperRef: m }),
          });
        };
    },
  },
]);
