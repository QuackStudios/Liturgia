"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3198],
  {
    43198: (e, l, t) => {
      t.r(l), t.d(l, { default: () => r });
      var s = t(74848),
        n = t(28667),
        u = t(1723),
        i = t(28182);
      let r = (e) => {
        let {
            globals: l,
            uid: t,
            moduleSet: r = "modules",
            smallMargins: o,
            anchor: d,
          } = e,
          { currentSite: a, currentRoute: c, routeProps: m } = l,
          v = (0, i.A)({
            section: null == c ? void 0 : c.cms.section,
            types: null == c ? void 0 : c.cms.types,
            moduleSet: r,
          }),
          { data: y } = (0, u.I)(v, {
            variables: {
              section: null == c ? void 0 : c.cms.section,
              uri: m.uri,
              siteId: null == a ? void 0 : a.siteId,
              uid: t,
            },
          });
        if (
          !(null == y ? void 0 : y.entry) ||
          !y.entry[r] ||
          0 === y.entry[r].length
        )
          return null;
        let [h] = y.entry[r];
        return (0, s.jsx)(n.A, { anchor: d, module: h, smallMargins: o });
      };
    },
  },
]);
