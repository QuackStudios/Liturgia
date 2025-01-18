"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4624],
  {
    84624: (e, t, l) => {
      l.r(t), l.d(t, { default: () => i });
      var s = l(48936),
        o = l.n(s),
        r = l(35083),
        u = l.n(r),
        n = l(96836),
        c = l(31370),
        h = l(33473);
      let i = (0, c.WQ)("ui")((e) => {
        let { ui: t } = e;
        return (
          (0, h.E)(() => {
            n.os.registerPlugin(o(), u());
            let e = u().create({
              smooth: 2,
              effects: !0,
              allowNestedScroll: !0,
              smoothTouch: 0,
              ignoreMobileResize: !0,
            });
            t.setSmoother(e);
          }, []),
          null
        );
      });
    },
  },
]);
