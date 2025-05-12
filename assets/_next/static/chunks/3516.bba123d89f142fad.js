"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3516],
  {
    53516: (e, t, r) => {
      r.r(t), r.d(t, { default: () => p });
      var l = r(74848),
        n = r(96540),
        a = r(90058),
        c = r(48981),
        h = r(33473);

      let p = (e) => {
        let { module: v } = e;

        return (0, l.jsx)("div", {
          className: "flex flex-col gap-16 px-8 py-16 max-w-7xl mx-auto gap-adjust2",
          children: v.items.map((item, index) => {
            var media = (item.mediaElement && item.mediaElement[0]) || null;
            let BlockComponent = c.A;
            return (0, l.jsxs)(
              "div",
              {
                className: "flex flex-col lg:flex-row gap-12 gap-adjust3 items-center",
                children: [
                  (0, l.jsxs)("div", {
                    className: "w-full lg:w-1/2 space-y-4",
                    children: [
                      item.title &&
                      (0, l.jsx)("h2", {
                        className: "h2-text-alt r-mb-5",
                        children: item.title,
                      }),
                      item.children.map((e, t) => {
                        let Comp = BlockComponent[e.typeHandle];
                        return Comp
                          ? (0, l.jsx)(Comp, { block: e, index: t }, e.uid)
                          : null;
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "w-full lg:w-1/2",
                    children: (0, l.jsx)(a.A, {
                      media,
                      className: "w-full object-cover rounded-xl shadow-md",
                      figureClasses: "w-full",
                      width: 960,
                      height: 1080,
                      videoClassName: "object-cover aspect-[16/9]",
                      sizes: "(min-width: 1024px) 50vw, 100vw",
                      showCaption: false,
                    }),
                  }),
                ],
              },
              "row-" + item.uid
            );
          }),
        });
      };
    },
  },
]);
