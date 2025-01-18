"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43],
  {
    10043: (l, e, t) => {
      t.r(e), t.d(e, { default: () => r });
      var i = t(74848),
        n = t(96540),
        u = t(77969),
        d = t(1723),
        o = t(27835),
        s = t(76852);
      let r = (l) => {
        let {
            globals: e,
            uid: t,
            moduleSet: r = "modules",
            smallMargins: a,
            index: v,
            anchor: c,
          } = l,
          [y, m] = (0, n.useState)(null),
          { currentSite: h, currentRoute: p, routeProps: f } = e,
          g = (0, o.A)({
            section: null == p ? void 0 : p.cms.section,
            types: null == p ? void 0 : p.cms.types,
            moduleSet: r,
          }),
          [_] = (0, u._)(o._[0].query, {
            onCompleted: (l) => {
              var e;
              let t = (null == l ? void 0 : l.entries) || [];
              if (
                (null === (e = k.category) || void 0 === e
                  ? void 0
                  : e.length) > 1
              ) {
                let l = [];
                k.category.forEach((e) => {
                  l.push({
                    id: e.id,
                    uid: e.uid,
                    title: e.title,
                    people: t.filter((l) =>
                      l.category.some((l) => e.id === l.id)
                    ),
                  });
                }),
                  m(l);
              } else m([{ id: null, uid: null, title: null, people: t }]);
            },
          }),
          { data: b } = (0, d.I)(g, {
            variables: {
              section: null == p ? void 0 : p.cms.section,
              uri: f.uri,
              siteId: null == h ? void 0 : h.siteId,
              uid: t,
            },
            onCompleted: (l) => {
              if (o._[0].shouldRun(l, r))
                _({ variables: o._[0].variables(l, r) });
              else {
                let [e] =
                  (null == l ? void 0 : l.entry) &&
                  (null == l ? void 0 : l.entry[r])
                    ? null == l
                      ? void 0
                      : l.entry[r]
                    : [];
                if (e) {
                  let { people: l } = e;
                  l &&
                    (null == l ? void 0 : l.length) > 0 &&
                    m([{ id: null, uid: null, title: null, people: l }]);
                }
              }
            },
          });
        if (
          !(null == b ? void 0 : b.entry) ||
          !b.entry[r] ||
          0 === b.entry[r].length
        )
          return null;
        let [k] = b.entry[r];
        return (0, i.jsx)(s.A, {
          module: k,
          items: y,
          smallMargins: a,
          index: v,
          anchor: c,
        });
      };
    },
  },
]);
