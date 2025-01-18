"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4476],
  {
    64476: (e, t, l) => {
      l.r(t), l.d(t, { default: () => u });
      var i = l(74848),
        n = l(14953),
        a = l.n(n),
        s = l(96540),
        r = l(89160),
        o = l(1723),
        d = l(13972);
      let c = a()(() => l.e(4242).then(l.bind(l, 34242)), {
          loadableGenerated: { webpack: () => [34242] },
          ssr: !1,
        }),
        u = (e) => {
          let {
              globals: t,
              uid: l,
              moduleSet: n = "modules",
              smallMargins: a,
              anchor: u,
            } = e,
            { currentSite: m, currentRoute: p, routeProps: v } = t,
            [b, g] = (0, s.useState)([]),
            x = (0, d.A)({
              section: null == p ? void 0 : p.cms.section,
              types: null == p ? void 0 : p.cms.types,
              moduleSet: n,
            }),
            { data: y } = (0, o.I)(x, {
              variables: {
                section: null == p ? void 0 : p.cms.section,
                uri: v.uri,
                siteId: null == m ? void 0 : m.siteId,
                uid: l,
              },
            });
          if (
            ((0, s.useEffect)(() => {
              g(() => {
                var e, t, l;
                return (
                  (null == y
                    ? void 0
                    : null === (l = y.entry) || void 0 === l
                    ? void 0
                    : null === (t = l[n]) || void 0 === t
                    ? void 0
                    : null === (e = t.items) || void 0 === e
                    ? void 0
                    : e.map(() => 0)) || []
                );
              });
            }, [y, n]),
            !(null == y ? void 0 : y.entry) ||
              !y.entry[n] ||
              0 === y.entry[n].length)
          )
            return null;
          let [h] = y.entry[n];
          return (0, i.jsxs)("div", {
            id: "module-".concat(h.uid),
            className: "page-builder-block "
              .concat(h.typeHandle, "-block container full module-margin ")
              .concat(a.top ? "st" : "", " ")
              .concat(a.bottom ? "sb" : ""),
            "data-anchor": u,
            children: [
              h.title &&
                (0, i.jsx)("h2", {
                  className:
                    "h2-text-alt r-mb-[3.5] p-5 border-b border-grey-border",
                  children: h.title,
                }),
              (0, i.jsx)("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-2 lg:r-gap-y-12",
                children: h.items.map((e, t) =>
                  (0, i.jsxs)(
                    r.P.div,
                    {
                      className: "flex flex-col lg:items-center",
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { delay: 0.1 * t },
                      onAnimationStart: () => {
                        g((l) => {
                          let i = [...l];
                          return (i[t] = e.number), i;
                        });
                      },
                      children: [
                        (0, i.jsx)(c, {
                          value: b[t],
                          format: "d",
                          className:
                            "r-text-8xl text-forest leading-none whitespace-nowrap",
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "lg:text-center text-sm text-grey uppercase",
                          children: e.description,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          });
        };
    },
  },
]);
