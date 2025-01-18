"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5747],
  {
    27049: (e, t, l) => {
      l.d(t, { A: () => o });
      var i = l(74848),
        r = l(72673);
      let o = (e) => {
        let { linkProps: t, children: l, className: o } = e;
        return (null == t ? void 0 : t.href)
          ? (0, i.jsx)(r.A, { ...t, className: o, children: l })
          : (0, i.jsx)("div", { className: o, children: l });
      };
    },
    5747: (e, t, l) => {
      l.r(t), l.d(t, { default: () => w });
      var i = l(74848),
        r = l(96836),
        o = l(48936),
        s = l.n(o),
        n = l(35083),
        a = l.n(n),
        d = l(89160),
        c = l(96540),
        m = l(94203),
        u = l(33473),
        p = l(89853),
        x = l(90058),
        h = l(27049),
        v = l(52818),
        b = l(1723),
        g = l(66547);
      let w = (e) => {
        var t, l, o, n, w, f, y, j, N;
        let {
            globals: k,
            uid: A,
            moduleSet: q = "modules",
            smallMargins: S,
            anchor: P,
          } = e,
          C = (0, c.useRef)(null),
          { currentSite: I, currentRoute: T, routeProps: z } = k,
          X = (0, g.A)({
            section: null == T ? void 0 : T.cms.section,
            types: null == T ? void 0 : T.cms.types,
            moduleSet: q,
          }),
          { data: _ } = (0, b.I)(X, {
            variables: {
              section: null == T ? void 0 : T.cms.section,
              uri: z.uri,
              siteId: null == I ? void 0 : I.siteId,
              uid: A,
            },
          });
        if (
          ((0, u.E)(() => {
            if (!C.current) return;
            r.os.registerPlugin(s());
            let e = r.os.matchMedia();
            return (
              e.add("(min-width: 1024px)", () => {
                let e = C.current.querySelector(".line-top"),
                  t = C.current.querySelectorAll(".line-middle"),
                  l = C.current.querySelectorAll(
                    ".line-left, .line-right, .line-center"
                  ),
                  i = null,
                  o = C.current.querySelector(".m1"),
                  s = C.current.querySelector(".m2"),
                  n = C.current.querySelector(".m3");
                return (
                  o &&
                    s &&
                    n &&
                    setTimeout(() => {
                      let e = a().get();
                      e &&
                        (e.effects(o, { speed: 1.1 }),
                        e.effects(s, { speed: 1.5 }),
                        e.effects(n, { speed: 1.1 }));
                    }, 1e3),
                  e &&
                    t &&
                    l &&
                    ((i = r.os.timeline({
                      scrollTrigger: {
                        trigger: C.current.querySelector(".content-grid"),
                        start: "top 70%",
                        end: "bottom center",
                        scrub: 2,
                        scroller: window.matchMedia("(hover: none)").matches
                          ? "body"
                          : "#smooth-wrapper",
                      },
                    })).fromTo(
                      e,
                      { scaleX: 0 },
                      { scaleX: 1, duration: 1.5, ease: "power2.out" },
                      0
                    ),
                    i.fromTo(
                      l,
                      { scaleY: 0 },
                      { scaleY: 1, duration: 1.5, ease: "power2.out" }
                    ),
                    i.fromTo(
                      t,
                      { scaleX: 0 },
                      {
                        scaleX: 1,
                        duration: 1.5,
                        stagger: 0.15,
                        ease: "power2.out",
                      },
                      "<+=0.2"
                    )),
                  () => {
                    null == i || i.kill();
                  }
                );
              }),
              () => {
                e.revert();
              }
            );
          }, [C.current]),
          !(null == _ ? void 0 : _.entry) ||
            !_.entry[q] ||
            0 === _.entry[q].length)
        )
          return null;
        let [E] = _.entry[q],
          B =
            (null === (t = E.media1) || void 0 === t ? void 0 : t[0]) ||
            (null === (l = E.media2) || void 0 === l ? void 0 : l[0]) ||
            (null === (o = E.media3) || void 0 === o ? void 0 : o[0]);
        return (0, i.jsxs)("div", {
          id: "module-".concat(E.uid),
          className: "page-builder-block "
            .concat(E.typeHandle, "-block container full module-margin ")
            .concat(S.top ? "st" : "", " ")
            .concat(S.bottom ? "sb" : ""),
          ref: C,
          "data-anchor": P,
          children: [
            E.title &&
              E.text &&
              (0, i.jsxs)("div", {
                className: "module-top".concat(
                  B ? " pb-40 sm:r-pb-[13.73] r-pt-[12.25] lg:r-pt-[8.5]" : "",
                  " mb-10 sm:r-mb-[6.27] relative"
                ),
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "top-content text-center r-max-w-[45.6] mx-auto relative z-10",
                    children: [
                      E.title &&
                        (0, i.jsx)("h2", {
                          className: "h2-text r-mb-6 last:mb-0",
                          children: (0, i.jsx)(v.A, { children: E.title }),
                        }),
                      (null == E ? void 0 : E.text) &&
                        (0, i.jsx)(d.P.div, {
                          className:
                            "wysiwyg r-max-w-[26.25] mx-auto w-full text-grey r-text-lg",
                          initial: { opacity: 0, y: 50 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0, amount: 0.5 },
                          transition: {
                            duration: 1.5,
                            delay: 0.4,
                            ease: "easeOut",
                          },
                          children: (0, i.jsx)(m.A, { content: E.text }),
                        }),
                      (null == E
                        ? void 0
                        : null === (n = E.button) || void 0 === n
                        ? void 0
                        : n.href) &&
                        (0, i.jsx)(d.P.div, {
                          className:
                            "flex r-mt-10 items-center gap-4 justify-center",
                          initial: { opacity: 0, y: 50 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0, amount: 0.5 },
                          transition: {
                            duration: 1.5,
                            delay: 0.4,
                            ease: "easeOut",
                          },
                          children: (0, i.jsx)(p.A, { linkProps: E.button }),
                        }),
                    ],
                  }),
                  (0, i.jsx)(x.A, {
                    media:
                      null === (w = E.media1) || void 0 === w ? void 0 : w[0],
                    className:
                      "media-element m1 absolute top-0 right-0 w-40 sm:r-w-[12.5] aspect-[12/9] object-cover",
                    ratio: 12 / 9,
                    width: 640,
                    showCaption: !1,
                    sizes: "(min-width: 1024px) 320px, 50vw",
                  }),
                  (0, i.jsx)(x.A, {
                    media:
                      null === (f = E.media2) || void 0 === f ? void 0 : f[0],
                    className:
                      "media-element m2 absolute r-top-[10] left-0 r-w-[12.5] aspect-[12/15] object-cover hidden lg:block",
                    ratio: 0.8,
                    width: 640,
                    showCaption: !1,
                    sizes: "(min-width: 1024px) 320px, 50vw",
                  }),
                  (0, i.jsx)(x.A, {
                    media:
                      null === (y = E.media3) || void 0 === y ? void 0 : y[0],
                    className:
                      "media-element m3 absolute bottom-0 left-0 lg:left-1/2 lg:-translate-x-1/2 w-40 sm:r-w-[12.5] aspect-[12/7.7] object-cover",
                    ratio: 12 / 7.7,
                    width: 640,
                    showCaption: !1,
                    sizes: "(min-width: 1024px) 320px, 50vw",
                  }),
                ],
              }),
            (null === (j = E.textBlocks) || void 0 === j ? void 0 : j.length) >
              0 &&
              (0, i.jsxs)("div", {
                className:
                  "content-grid grid gird-cols-1 md:grid-cols-2 gap-[3.25rem] md:gap-0 relative",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "line-top col-span-full h-[1px] bg-grey-border hidden md:block",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "line-left w-[1px] h-full absolute left-0 top-0 origin-top bg-grey-border hidden md:block",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "line-right w-[1px] h-full absolute right-0 top-0 origin-top bg-grey-border hidden md:block",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "line-center w-[1px] h-full absolute left-1/2 -translate-x-1/2 top-0 origin-top bg-grey-border hidden md:block",
                  }),
                  null === (N = E.textBlocks) || void 0 === N
                    ? void 0
                    : N.map((e, t) => {
                        var l, r, o;
                        let s =
                          (null === (l = e.button) || void 0 === l
                            ? void 0
                            : l.href) || !1;
                        return (0, i.jsxs)(
                          c.Fragment,
                          {
                            children: [
                              (0, i.jsxs)(h.A, {
                                linkProps: e.button,
                                className:
                                  "text-block md:r-p-10 flex flex-col transition-colors duration-300".concat(
                                    s ? " hover:bg-lichen group" : ""
                                  ),
                                children: [
                                  (e.pretitle ||
                                    (null === (r = e.button) || void 0 === r
                                      ? void 0
                                      : r.href)) &&
                                    (0, i.jsxs)("div", {
                                      className:
                                        "flex flex-wrap gap-4 sm:gap-8 items-center justify-between mb-0 sm:r-mb-20",
                                      children: [
                                        (0, i.jsx)("p", {
                                          className:
                                            "uppercase text-grey r-text-sm".concat(
                                              s
                                                ? " group-hover:text-asphalt"
                                                : ""
                                            ),
                                          children: e.pretitle,
                                        }),
                                        (null === (o = e.button) || void 0 === o
                                          ? void 0
                                          : o.href) &&
                                          (0, i.jsx)(p.A, {
                                            linkProps: e.button,
                                            type: "span",
                                          }),
                                      ],
                                    }),
                                  e.title &&
                                    (0, i.jsx)("h3", {
                                      className:
                                        "r-text-xl mb-3 last:mb-0 text-asphalt",
                                      children: e.title,
                                    }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "wysiwyg md:r-max-w-[28] md:mr-auto w-full text-grey".concat(
                                        s ? " group-hover:text-asphalt" : "",
                                        " body-text"
                                      ),
                                    children: (0, i.jsx)(m.A, {
                                      content: e.text,
                                    }),
                                  }),
                                ],
                              }),
                              t % 2 != 0 &&
                                t > 0 &&
                                (0, i.jsx)("div", {
                                  className:
                                    "line-middle col-span-full h-[1px] bg-grey-border hidden md:block",
                                }),
                            ],
                          },
                          "".concat(e.uid, "-").concat(t)
                        );
                      }),
                ],
              }),
          ],
        });
      };
    },
  },
]);
