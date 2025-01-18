"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2356],
  {
    82356: (e, t, i) => {
      i.r(t), i.d(t, { default: () => m });
      var a = i(74848),
        l = i(89160),
        s = i(94203),
        n = i(60598);
      let c = (e) => {
        let { item: t } = e;
        return (0, a.jsxs)("div", {
          className: "card flex flex-col",
          children: [
            (0, a.jsx)(n.A, {
              asset: t.image,
              className: "r-w-12 r-h-12 object-contain mb-5 mx-auto",
              width: 64,
              height: 64,
            }),
            (0, a.jsxs)("div", {
              className: "card-content text-center mt-auto",
              children: [
                (0, a.jsx)("h3", {
                  className: "r-text-xl text-asphalt mb-2",
                  children: t.title,
                }),
                (0, a.jsx)("div", {
                  className: "wysiwyg text-grey body-text",
                  children: (0, a.jsx)(s.A, { content: t.text }),
                }),
              ],
            }),
          ],
        });
      };
      var o = i(52818),
        r = i(1723),
        d = i(20748);
      let m = (e) => {
        var t;
        let {
            globals: i,
            uid: n,
            moduleSet: m = "modules",
            smallMargins: u,
            anchor: x,
          } = e,
          { currentSite: h, currentRoute: v, routeProps: y } = i,
          p = (0, d.A)({
            section: null == v ? void 0 : v.cms.section,
            types: null == v ? void 0 : v.cms.types,
            moduleSet: m,
          }),
          { data: b } = (0, r.I)(p, {
            variables: {
              section: null == v ? void 0 : v.cms.section,
              uri: y.uri,
              siteId: null == h ? void 0 : h.siteId,
              uid: n,
            },
          });
        if (
          !(null == b ? void 0 : b.entry) ||
          !b.entry[m] ||
          0 === b.entry[m].length
        )
          return null;
        let [w] = b.entry[m];
        return (0, a.jsxs)("div", {
          id: "module-".concat(w.uid),
          className: "page-builder-block "
            .concat(w.typeHandle, "-block container full module-margin ")
            .concat(u.top ? "st" : "", " ")
            .concat(u.bottom ? "sb" : ""),
          "data-anchor": x,
          children: [
            w.title &&
              w.text &&
              (0, a.jsx)("div", {
                className: "module-top mb-10 sm:r-mb-16 relative",
                children: (0, a.jsxs)("div", {
                  className:
                    "top-content text-center r-max-w-[45.6] mx-auto relative z-10",
                  children: [
                    w.title &&
                      (0, a.jsx)("h2", {
                        className: "h2-text r-mb-6 last:mb-0",
                        children: (0, a.jsx)(o.A, { children: w.title }),
                      }),
                    (null == w ? void 0 : w.text) &&
                      (0, a.jsx)(l.P.div, {
                        className:
                          "wysiwyg r-max-w-[26.25] mx-auto w-full text-grey r-text-base",
                        initial: { opacity: 0, y: 50 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0, amount: 0.5 },
                        transition: {
                          duration: 1.5,
                          delay: 0.4,
                          ease: "easeOut",
                        },
                        children: (0, a.jsx)(s.A, { content: w.text }),
                      }),
                  ],
                }),
              }),
            (0, a.jsx)(l.P.div, {
              className: "grid md:grid-cols-3 gap-5",
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, amount: 0.5 },
              transition: { duration: 1.5, delay: 0.4, ease: "easeOut" },
              children:
                null === (t = w.items) || void 0 === t
                  ? void 0
                  : t.map((e) => (0, a.jsx)(c, { item: e }, e.uid)),
            }),
          ],
        });
      };
    },
  },
]);
