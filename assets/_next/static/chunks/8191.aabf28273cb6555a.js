"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8191],
  {
    68191: (e, l, i) => {
      i.r(l), i.d(l, { default: () => c });
      var s = i(74848),
        t = i(89160),
        n = i(72673),
        a = i(52818),
        r = i(1723),
        d = i(42535),
        o = i(2102);
      let c = (e) => {
        var l;
        let {
            globals: i,
            uid: c,
            moduleSet: u = "modules",
            smallMargins: h,
            anchor: v,
          } = e,
          { currentSite: m, currentRoute: p, routeProps: b } = i,
          f = (0, d.A)({
            section: null == p ? void 0 : p.cms.section,
            types: null == p ? void 0 : p.cms.types,
            moduleSet: u,
          }),
          { data: x } = (0, r.I)(f, {
            variables: {
              section: null == p ? void 0 : p.cms.section,
              uri: b.uri,
              siteId: null == m ? void 0 : m.siteId,
              uid: c,
            },
          });
        if (
          !(null == x ? void 0 : x.entry) ||
          !x.entry[u] ||
          0 === x.entry[u].length
        )
          return null;
        let [w] = x.entry[u];
        return (0, s.jsxs)("div", {
          id: "module-".concat(w.uid),
          className: "page-builder-block "
            .concat(w.typeHandle, "-block container full module-margin ")
            .concat(h.top ? "st" : "", " ")
            .concat(h.bottom ? "sb" : ""),
          "data-anchor": v,
          children: [
            w.title &&
              (0, s.jsx)("h2", {
                className: "h2-text-alt r-mb-[2]",
                children: (0, s.jsx)(a.A, { children: w.title }),
              }),
            null == x
              ? void 0
              : null === (l = x.entry) || void 0 === l
              ? void 0
              : l.links.map((e) =>
                  (0, s.jsxs)(
                    t.P.div,
                    {
                      className: "outer-wrapper overflow-hidden",
                      initial: "hidden",
                      whileInView: "visible",
                      whileHover: "hover",
                      viewport: { once: !1, threshold: 1 },
                      children: [
                        (0, s.jsx)(t.P.div, {
                          className: "inner-wrapper",
                          variants: { hidden: { y: 100 }, visible: { y: 0 } },
                          transition: {
                            duration: 0.5,
                            ease: [0.04, 0.62, 0.23, 0.98],
                            delay: 0.2,
                          },
                          children: (0, s.jsxs)(n.A, {
                            href: e.url,
                            className:
                              "link flex items-center justify-between py-5 r-text-2xl gap-6",
                            children: [
                              e.title,
                              (0, s.jsx)("span", {
                                className:
                                  "inline-flex items-center justify-center flex-shrink-0 rounded-full bg-asphalt w-6 h-6",
                                children: (0, s.jsx)(o.A, {
                                  className: "w-3 stroke-white",
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(t.P.div, {
                          className:
                            "bg-grey-border h-[1px] w-full origin-left",
                          variants: {
                            hidden: { scaleX: 0 },
                            visible: { scaleX: 1 },
                          },
                          transition: {
                            duration: 1.5,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                          children: (0, s.jsx)(t.P.div, {
                            className: "bg-asphalt h-full w-full origin-left",
                            variants: {
                              hidden: { scaleX: 0 },
                              hover: { scaleX: 1 },
                            },
                            transition: { duration: 1, ease: "easeInOut" },
                          }),
                        }),
                      ],
                    },
                    e.uid
                  )
                ),
          ],
        });
      };
    },
  },
]);


