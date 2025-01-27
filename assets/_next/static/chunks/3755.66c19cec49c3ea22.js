"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3755],
  {
    93755: (l, e, t) => {
      t.r(e), t.d(e, { default: () => m });
      var s = t(74848),
        a = t(1723),
        n = t(74075),
        c = t(89160),
        i = t(94203),
        o = t(3027),
        r = t(89853),
        d = t(90058);
      let u = (l) => {
          var e, t, a, n, u, m, x;
          let { cta: v, moreThenOne: h } = l,
            p =
              (null === (e = v.mediaElement) || void 0 === e
                ? void 0
                : e.length) > 0,
            f = v.spanFull || p;
          return (0, s.jsx)(c.P.div, {
            className: "cta theme-"
              .concat(
                null === (t = v.color) || void 0 === t ? void 0 : t.class,
                " "
              )
              .concat(
                f ? " col-span-full" : h ? " col-span-1" : " col-span-full"
              )
              .concat(p ? "" : " px-4 py-8 sm:r-p-20"),
            initial: { opacity: 0, y: 75 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, ease: "easeOut" },
            viewport: { once: !0, amount: 0.5 },
            children: (0, s.jsxs)("div", {
              className: "inner flex"
                .concat(
                  f
                    ? " flex-col lg:flex-row"
                    : h
                    ? " flex-col"
                    : " flex-col lg:flex-row justify-between",
                  " "
                )
                .concat(p ? "" : "r-gap-x-[8.2]"),
              children: [
                p
                  ? (0, s.jsx)("div", {
                      className: "left w-full lg:w-1/2",
                      children: (0, s.jsx)(d.A, {
                        media:
                          null === (a = v.mediaElement) || void 0 === a
                            ? void 0
                            : a[0],
                        className:
                          "w-full h-auto aspect-[16/9] lg:aspect-[40/30.5] object-cover",
                        ratio: 40 / 30.5,
                        width: 640,
                        showCaption: !1,
                        sizes: "(min-width: 1024px) 50vw, 100vw",
                      }),
                    })
                  : (0, s.jsx)("div", {
                      className:
                        "left w-full lg:r-max-w-[26.25] mb-8 sm:r-mb-[4.69]".concat(
                          !f && h ? " " : " lg:mb-0"
                        ),
                      children: (0, s.jsx)("h2", {
                        className: "h2-text-alt",
                        children: v.title,
                      }),
                    }),
                (0, s.jsxs)("div", {
                  className: "right flex-1".concat(
                    p ? " px-4 py-8 sm:r-p-20" : " r-max-w-[35]"
                  ),
                  children: [
                    p &&
                      (0, s.jsx)("div", {
                        className: "w-full mb-8 sm:r-mb-[4.69] lg:mb-3",
                        children: (0, s.jsx)("h2", {
                          className: "h2-text-alt",
                          children: v.title,
                        }),
                      }),
                    (0, s.jsx)("div", {
                      className: "wysiwyg r-text-lg sm:r-text-xl",
                      children: (0, s.jsx)(i.A, { content: v.text }),
                    }),
                    ((null === (n = v.button) || void 0 === n
                      ? void 0
                      : n.href) ||
                      (null === (u = v.secondaryButton) || void 0 === u
                        ? void 0
                        : u.href)) &&
                      (0, s.jsxs)("div", {
                        className:
                          "buttons flex flex-col sm:flex-row items-start sm:items-center gap-6 r-mt-10",
                        children: [
                          (null === (m = v.button) || void 0 === m
                            ? void 0
                            : m.href) &&
                            (0, s.jsx)(o.A, { linkProps: v.button }),
                          (null === (x = v.secondaryButton) || void 0 === x
                            ? void 0
                            : x.href) &&
                            (0, s.jsx)(r.A, {
                              linkProps: v.secondaryButton,
                              className:
                                "black" === v.color.class ||
                                "green-dark" === v.color.class
                                  ? "full-white"
                                  : null,
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        m = (l) => {
          let {
              globals: e,
              uid: t,
              moduleSet: c = "modules",
              smallMargins: i,
              anchor: o,
            } = l,
            { currentSite: r, currentRoute: d, routeProps: m } = e,
            x = (0, n.A)({
              section: null == d ? void 0 : d.cms.section,
              types: null == d ? void 0 : d.cms.types,
              moduleSet: c,
            }),
            { data: v } = (0, a.I)(x, {
              variables: {
                section: null == d ? void 0 : d.cms.section,
                uri: m.uri,
                siteId: null == r ? void 0 : r.siteId,
                uid: t,
              },
            });
          if (
            !(null == v ? void 0 : v.entry) ||
            !v.entry[c] ||
            0 === v.entry[c].length
          )
            return null;
          let [h] = v.entry[c];
          return (0, s.jsx)("div", {
            id: "module-".concat(h.uid),
            className: "page-builder-block "
              .concat(h.typeHandle, "-block container full module-margin optional-hidden-sections")
              .concat(i.top ? "st" : "", " ")
              .concat(i.bottom ? "sb" : ""),
            "data-anchor": o,
            children: (0, s.jsx)("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-x-5 r-gap-y-10",
              children: h.cta.map((l) => {
                var e;
                return (0, s.jsx)(
                  u,
                  {
                    cta: l,
                    moreThenOne:
                      (null === (e = h.cta) || void 0 === e
                        ? void 0
                        : e.length) > 1,
                  },
                  l.uid
                );
              }),
            }),
          });
        };
    },
  },
]);
