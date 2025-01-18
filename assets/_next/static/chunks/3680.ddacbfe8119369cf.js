"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3680],
  {
    53680: (l, e, t) => {
      t.r(e), t.d(e, { default: () => d });
      var a = t(74848),
        n = t(32578),
        i = t(93731),
        o = t(86715),
        r = t(1723),
        s = t(53731),
        u = t(79475);
      let c = (l) => {
          let { checked: e, onClick: t, title: n } = l;
          return (0, a.jsxs)("button", {
            className: "inline-flex gap-2 items-center r-text-sm ".concat(
              e ? "text-asphalt" : "text-grey hover:text-asphalt",
              " transition-colors duration-200"
            ),
            onClick: t,
            children: [
              (0, a.jsx)("span", {
                className:
                  "radio w-4 h-4 rounded-full border border-current inline-flex items-center justify-center",
                children: (0, a.jsx)("span", {
                  className:
                    "radio-inner w-2 h-2 rounded-full bg-asphalt ".concat(
                      e ? "opacity-100" : "opacity-0",
                      " transition-opacity duration-200"
                    ),
                }),
              }),
              n,
            ],
          });
        },
        d = (l) => {
          var e;
          let { siteId: t } = l,
            { data: d } = (0, r.I)(s.P, { variables: { siteId: t } }),
            f = (0, o.useRouter)(),
            p = (0, n.useTranslations)("common"),
            v = (0, u.A)(640),
            h = f.query.category,
            m =
              (null == d
                ? void 0
                : null === (e = d.categories) || void 0 === e
                ? void 0
                : e.map((l) => ({
                    id: null == l ? void 0 : l.id,
                    title: null == l ? void 0 : l.title,
                  }))) || [],
            [y] = f.asPath.split("?");
          return (0, a.jsx)("div", {
            className: "news-filters flex items-center r-gap-6",
            children: v
              ? (0, a.jsx)(i.default, {
                  className: "w-full",
                  options: [
                    { value: null, label: p("all") },
                    ...(null == m
                      ? void 0
                      : m.map((l) => ({
                          value: null == l ? void 0 : l.id,
                          label: null == l ? void 0 : l.title,
                        }))),
                  ],
                  defaultValue: { value: null, label: p("all") },
                  onChange: (l) => {
                    f.push(
                      {
                        pathname: y,
                        query: { ...f.query, category: l.value, page: null },
                      },
                      void 0,
                      { shallow: !0 }
                    );
                  },
                  styles: {
                    control: (l) => ({
                      ...l,
                      backgroundColor: "#fbfbfb",
                      fontSize: "0.875rem",
                    }),
                    option: (l, e) => ({
                      ...l,
                      backgroundColor: e.isSelected ? "#19312f" : "#ffffff",
                      fontSize: "0.875rem",
                    }),
                  },
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(c, {
                      checked: !h,
                      onClick: () => {
                        f.push(
                          {
                            pathname: y,
                            query: { ...f.query, category: null, page: null },
                          },
                          void 0,
                          { shallow: !0 }
                        );
                      },
                      title: p("all"),
                    }),
                    null == m
                      ? void 0
                      : m.map((l, e) =>
                          (0, a.jsx)(
                            c,
                            {
                              checked: (null == l ? void 0 : l.id) === h,
                              title: null == l ? void 0 : l.title,
                              onClick: () => {
                                f.push(
                                  {
                                    pathname: y,
                                    query: {
                                      ...f.query,
                                      category: null == l ? void 0 : l.id,
                                      page: null,
                                    },
                                  },
                                  void 0,
                                  { shallow: !0 }
                                );
                              },
                            },
                            "filter-".concat(e)
                          )
                        ),
                  ],
                }),
          });
        };
    },
  },
]);
