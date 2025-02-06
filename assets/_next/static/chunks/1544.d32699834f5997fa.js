"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1544],
  {
    51544: (t, e, l) => {
      l.r(e), l.d(e, { default: () => b });
      var o = l(74848),
        n = l(67667),
        i = l(89160),
        r = l(96540),
        s = l(59357),
        d = l(19602),
        a = l(32578),
        c = l(96836),
        u = l(48936),
        m = l.n(u),
        x = l(52818),
        v = l(94203),
        p = l(33473),
        f = l(1723),
        y = l(61912),
        g = l(87517),
        h = l(89853);
      let b = (t) => {
        var e, l, u, b, w, j, N, k, C, A;
        let {
            globals: E,
            uid: P,
            moduleSet: S = "modules",
            smallMargins: F,
            anchor: I,
          } = t,
          _ = (0, a.useTranslations)("common"),
          z = (0, r.useRef)(null),
          [B, M] = (0, r.useState)("default"),
          [R, T] = (0, r.useState)({ x: 0, y: 0 }),
          D = (0, d.U)("(pointer: coarse)"),
          [H, L] = (0, r.useState)(0),
          { currentSite: O, currentRoute: U, routeProps: V } = E,
          q = (0, y.A)({
            section: null == U ? void 0 : U.cms.section,
            types: null == U ? void 0 : U.cms.types,
            moduleSet: S,
          }),
          G = (0, s.A)(z, { enterDelay: 100, leaveDelay: 100 }),
          J = 0,
          K = 0;
        null !== G.x && (J = G.x), null !== G.y && (K = G.y);
        let Q = {
          default: {
            opacity: 1,
            x: J,
            y: K,
            scale: 0.1,
            opacity: 1,
            transition: { type: "spring", mass: 0.6 },
          },
          project: {
            opacity: 1,
            scale: 1,
            backgroundColor: "#F9F3EB",
            scale: 1,
            x: J,
            y: K,
          },
          dragging: { scale: 0.3, x: J, y: K },
        };
        (0, p.E)(() => {
          if (!z.current) return;
          c.os.registerPlugin(m());
          let t = c.os.timeline({
            scrollTrigger: {
              trigger: z.current,
              start: "top center",
              end: "bottom top",
              scrub: !0,
              scroller: window.matchMedia("(hover: none)").matches
                ? "body"
                : "#smooth-wrapper",
            },
          });
          return (
            t.to("body", { backgroundColor: "#F9F3EB", duration: 0.5 }),
            t.to("body", { backgroundColor: "#fff", delay: 1, duration: 0.8 }),
            () => {
              (null == t ? void 0 : t.kill) && t.kill(),
                (document.body.style.backgroundColor = "#fff");
            }
          );
        }, [z.current]);
        let { data: W } = (0, f.I)(q, {
          variables: {
            section: null == U ? void 0 : U.cms.section,
            uri: V.uri,
            siteId: null == O ? void 0 : O.siteId,
            uid: P,
          },
        });
        if (
          !(null == W ? void 0 : W.entry) ||
          !W.entry[S] ||
          0 === W.entry[S].length
        )
          return null;
        let [X] = W.entry[S];
        return (0, o.jsxs)("div", {
          id: "module-".concat(X.uid),
          className: "page-builder-block "
            .concat(
              X.typeHandle,
              "-block module-margin relative z-10 min-h-screen flex items-center overflow-hidden "
            )
            .concat(F.top ? "st" : "", " ")
            .concat(F.bottom ? "sb" : ""),
          ref: z,
          "data-anchor": I,
          onMouseEnter: (t) => {
            if (D) return;
            let { clientX: e, clientY: l } = t,
              { top: o, left: n } = z.current.getBoundingClientRect();
            T({ x: e - n, y: l - o });
          },
          children: [
            (0, o.jsx)(n.N, {
              children:
                G.isOver &&
                !D &&
                (0, o.jsx)(i.P.div, {
                  variants: Q,
                  className:
                    "absolute z-50 flex items-center justify-center rounded-full overflow-hidden bg-forest border border-forest text-forest text-xs w-[6.75rem] h-[6.75rem] left-0 top-0 pointer-events-none p-4 text-center",
                  initial: { x: R.x, y: R.y, scale: 0.65, opacity: 0 },
                  animate: B,
                  exit: { scale: 0.65, opacity: 0 },
                  transition: { type: "spring", stiffness: 500, damping: 28 },
                  children: _("dragRotate"),
                }),
            }),
            (0, o.jsxs)("div", {
              className: "container py-12 sm:r-pt-[8.5] sm:r-pb-[9.25]",
              children: [
                X.title &&
                  (0, o.jsx)("h2", {
                    className:
                      "text-[3.625rem] md:h2-text r-mb-[2] lg:r-text-8xl !leading-none text-forest text-center r-max-w-[56] w-full mx-auto",
                    children: (0, o.jsx)(x.A, {
                      dangerouslySetInnerHTML: !0,
                      children: (function (t) {
                        let e = t.split(" ");
                        return e.length > 1
                          ? e[0] + "<br />" + e.slice(1).join(" ")
                          : t;
                      })(X.title),
                    }),
                  }),
                (0, o.jsx)(n.N, {
                  mode: "wait",
                  children: (0, o.jsx)(
                    i.P.div,
                    {
                      className: "r-h-[30] relative",
                      initial: { opacity: 0, y: 50 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -50 },
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      },
                      children: (0, o.jsx)(g.A, {
                        product: X.products[H],
                        setCursorVariant: M,
                      }),
                    },
                    "columns-".concat(X.products[H].uid)
                  ),
                }),
                (null === (e = X.products) || void 0 === e
                  ? void 0
                  : e.length) > 1 &&
                  (0, o.jsx)("div", {
                  }),
                (0, o.jsx)(n.N, {
                  mode: "wait",
                  children:
                    (null === (l = X.products) || void 0 === l
                      ? void 0
                      : l.length) > 0 &&
                    (0, o.jsxs)(
                      i.P.div,
                      {
                        className: "mt-12 md:r-mt-[6.25]",
                        initial: { opacity: 0, x: -100 },
                        animate: { opacity: 1, x: 0 },
                        exit: { opacity: 0, x: 100 },
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                        },
                        children: [
                          (null === (w = X.products) || void 0 === w
                            ? void 0
                            : null === (b = w[H]) || void 0 === b
                            ? void 0
                            : null === (u = b.columns) || void 0 === u
                            ? void 0
                            : u.length) > 0 &&
                            (0, o.jsx)("div", {
                              className:
                                "columns flex flex-wrap lg:flex-nowrap sm:justify-center r-gap-[3.75] w-full",
                              children: X.products[H].columns.map((t) => {
                                var e, l, n, i, r, s, d, a, c;
                                return (0, o.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "w-full sm:w-2/5 lg:w-auto lg:flex-1 r-max-w-[53.75] ".concat(
                                        (null === (n = X.products) ||
                                        void 0 === n
                                          ? void 0
                                          : null === (l = n[H]) || void 0 === l
                                          ? void 0
                                          : null === (e = l.columns) ||
                                            void 0 === e
                                          ? void 0
                                          : e.length) === 1
                                          ? "text-center"
                                          : "text-center sm:text-left"
                                      ),
                                    children: [
                                      (0, o.jsx)("h3", {
                                        className: "text-forest ".concat(
                                          (null === (s = X.products) ||
                                          void 0 === s
                                            ? void 0
                                            : null === (r = s[H]) ||
                                              void 0 === r
                                            ? void 0
                                            : null === (i = r.columns) ||
                                              void 0 === i
                                            ? void 0
                                            : i.length) < 3
                                            ? "h3-text r-mb-5"
                                            : "r-text-[1.4375] mb-3"
                                        ),
                                        children: t.title,
                                      }),
                                      (0, o.jsx)("div", {
                                        className:
                                          "w-full mx-auto max-w-[20rem] sm:r-max-w-[26.25] wysiwyg text-grey ".concat(
                                            (null === (c = X.products) ||
                                            void 0 === c
                                              ? void 0
                                              : null === (a = c[H]) ||
                                                void 0 === a
                                              ? void 0
                                              : null === (d = a.columns) ||
                                                void 0 === d
                                              ? void 0
                                              : d.length) < 3
                                              ? "r-text-lg"
                                              : "text-base"
                                          ),
                                        children: (0, o.jsx)(v.A, {
                                          content: t.text,
                                        }),
                                      }),
                                    ],
                                  },
                                  t.uid
                                );
                              }),
                            }),
                          (null === (k = X.products) || void 0 === k
                            ? void 0
                            : null === (N = k[H]) || void 0 === N
                            ? void 0
                            : null === (j = N.button) || void 0 === j
                            ? void 0
                            : j.href) &&
                            (0, o.jsx)("div", {
                              className: "mt-12 sm:r-mt-20 flex justify-center",
                              children: (0, o.jsx)(h.A, {
                                linkProps:
                                  null === (A = X.products) || void 0 === A
                                    ? void 0
                                    : null === (C = A[H]) || void 0 === C
                                    ? void 0
                                    : C.button,
                              }),
                            }),
                        ],
                      },
                      "columns-".concat(X.products[H].uid)
                    ),
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
