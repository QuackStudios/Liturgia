"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9033],
  {
    48981: (e, t, i) => {
      i.d(t, { A: () => x });
      var a = i(74848),
        l = i(74728),
        s = i.n(l),
        r = i(4536),
        n = i(89160),
        d = i(3027),
        o = i(29965),
        c = i.n(o),
        m = i(72673);
      let u = (e) => {
        let { image: t, button: i } = e;
        return (null == t ? void 0 : t.length) > 0
          ? (null == i ? void 0 : i.href)
            ? (0, a.jsx)(m.A, {
              href: i.href,
              target: i.target,
              title: i.title || i.text,
              children: (0, a.jsx)(c(), {
                src: t[0].url,
                alt: t[0].altTranslation || t[0].alt || t[0].title,
                width: 1024,
                height: 1024,
                className: "r-h-10 w-auto",
                quality: 100,
                sizes: "(max-width: 768px) 100vw, 33vw",
              }),
            })
            : (0, a.jsx)(c(), {
              src: t[0].url,
              alt: t[0].title,
              width: 1024,
              height: 1024,
              quality: 100,
              className: "r-h-10 w-auto",
              sizes: "(max-width: 768px) 100vw, 33vw",
            })
          : (0, a.jsx)(d.A, { linkProps: i });
      },
        x = {
          wysiwyg: (e) => {
            let { block: t, index: i } = e;
            return (0, a.jsx)(n.P.div, {
              className: "".concat(
                t.biggerFont ? "r-text-lg" : "body-text",
                " r-mb-8 r-mt-5 first:mt-0 last:mb-0 wysiwyg text-grey lg:r-max-w-[26.25]  2xl:r-max-w-[30] 3xl:r-max-w-[40] w-full"
              ),
              dangerouslySetInnerHTML: { __html: s()(t.text, r.Ay) },
              variants: {
                hidden: { opacity: 0, y: 45 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + 0.1 * i,
                  },
                },
                exit: {
                  opacity: 0,
                  y: -45,
                  transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + 0.1 * i,
                  },
                },
              },
            });
          },
          orderedList: (e) => {
            let { block: t, index: i } = e;
            return (0, a.jsx)(n.P.ol, {
              className:
                "list-none r-mt-6 r-mb-14 first:mt-0 last:mb-0 flex flex-col r-gap-5",
              variants: {
                hidden: { opacity: 0, y: 45 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + 0.1 * i,
                  },
                },
                exit: {
                  opacity: 0,
                  y: -45,
                  transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + 0.1 * i,
                  },
                },
              },
              children: t.items.map((e, t) =>
                (0, a.jsxs)(
                  "li",
                  {
                    className: "r-text-lg flex items-center gap-3",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "text-sm rounded-full border border-asphalt r-w-7 r-h-7 flex-shrink-0 inline-flex items-center justify-center",
                        children: t + 1,
                      }),
                      e.title,
                    ],
                  },
                  e.uid
                )
              ),
            });
          },
          tags: (e) => {
            let { block: t, index: i } = e;
            return (0, a.jsxs)(n.P.div, {
              className: "tags-wrapper r-mt-8 r-mb-10 first:mt-0 last:mb-0",
              variants: {
                hidden: { opacity: 0, y: 45 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + 0.1 * i,
                  },
                },
                exit: {
                  opacity: 0,
                  y: -45,
                  transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + 0.1 * i,
                  },
                },
              },
              children: [

              ],
            });
          },
          buttonsImages: (e) => {
            let { block: t, index: i } = e;
            return (0, a.jsx)(n.P.div, {
              className:
                "button-wrapper flex items-center r-my-8 first:mt-0 last:mb-0 flex-wrap justify-start gap-2 gap-buttons-fix",
              variants: {
                hidden: { opacity: 0, y: 45 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + 0.1 * i,
                  },
                },
                exit: {
                  opacity: 0,
                  y: -45,
                  transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + 0.1 * i,
                  },
                },
              },
              children: t.items.map((e) =>
                (0, a.jsx)(u, { image: e.image, button: e.button }, e.uid)
              ),
            });
          },
        };
    },
    59033: (e, t, i) => {
      i.r(t), i.d(t, { default: () => m });
      var a = i(74848),
        l = i(96540),
        s = i(90058),
        r = i(48981);
      let n = (e) => {
        var t;
        let { module: i } = e;
        return (0, a.jsx)(a.Fragment, {
          children:
            null == i
              ? void 0
              : null === (t = i.items) || void 0 === t
                ? void 0
                : t.map((e) => {
                  var t;
                  return (0, a.jsxs)(
                    "div",
                    {
                      className: "text-media-item my-20 first:mt-0 last:mb-0",
                      children: [
                        (0, a.jsx)(s.A, {
                          media:
                            (null === (t = e.mediaElement) || void 0 === t
                              ? void 0
                              : t[0]) || null,
                          className: "w-full object-cover aspect-1 object-fit-fix",
                          figureClasses: "w-full mb-10",
                          width: 960,
                          height: 1080,
                          videoClassName: "object-cover",
                        }),
                        (0, a.jsxs)("div", {
                          className: "block-content",
                          children: [
                            e.title &&
                            (0, a.jsx)("h2", {
                              className: "h3-text r-mb-5",
                              children: e.title,
                            }),
                            e.children.map((e) => {
                              let t = r.A[e.typeHandle];
                              return t
                                ? (0, a.jsx)(
                                  t,
                                  { block: e },
                                  "block-".concat(e.uid)
                                )
                                : null;
                            }),
                          ],
                        }),
                      ],
                    },
                    e.uid
                  );
                }),
        });
      };
      var d = i(1723),
        o = i(56080);
      let c = (0, l.lazy)(() =>
        Promise.all([i.e(3101), i.e(3516)]).then(i.bind(i, 53516))
      ),
        m = (e) => {
          var t;
          let {
            globals: i,
            uid: s,
            moduleSet: r = "modules",
            smallMargins: m,
            anchor: u,
          } = e,
            [x, y] = (0, l.useState)(!1),
            [h, v] = (0, l.useState)(void 0),
            { currentSite: p, currentRoute: b, routeProps: g } = i,
            w = (0, o.A)({
              section: null == b ? void 0 : b.cms.section,
              types: null == b ? void 0 : b.cms.types,
              moduleSet: r,
            }),
            { data: f } = (0, d.I)(w, {
              variables: {
                section: null == b ? void 0 : b.cms.section,
                uri: g.uri,
                siteId: null == p ? void 0 : p.siteId,
                uid: s,
              },
            });
          if (
            ((0, l.useEffect)(() => {
              y(!0);
              let e = () => {
                (0, l.startTransition)(() => {
                  v(window.innerWidth <= 768);
                });
              };
              return (
                window.addEventListener("resize", e),
                e(),
                () => window.removeEventListener("resize", e)
              );
            }, []),
              !x ||
              void 0 === h ||
              !(null == f
                ? void 0
                : null === (t = f.entry) || void 0 === t
                  ? void 0
                  : t.modules) ||
              0 === f.entry.modules.length)
          )
            return null;
          let [j] = f.entry.modules,
            N = h ? n : c;
          return (0, a.jsx)("div", {
            id: "module-".concat(j.uid),
            className: "page-builder-block "
              .concat(j.typeHandle, "-block module-margin ")
              .concat(m.top ? "st" : "", " ")
              .concat(m.bottom ? "sb" : "", " relative isolate container full"),
            "data-anchor": u,
            children: (0, a.jsx)(l.Suspense, {
              fallback: (0, a.jsx)(n, { module: j }),
              children: (0, a.jsx)(N, { module: j }, h ? "mobile" : "desktop"),
            }),
          });
        };
    },
  },
]);
