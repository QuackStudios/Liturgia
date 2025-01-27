"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5854],
  {
    71090: (e, t, l) => {
      l.d(t, { A: () => n });
      var a = l(74848),
        i = l(96540),
        s = l(2102);
      let n = i.forwardRef((e, t) => {
        let {
          ariaLabel: l,
          disabled: i,
          onClick: n,
          forward: r = !0,
          className: o = "",
        } = e;
        return (0, a.jsx)("button", {
          ref: t,
          onClick: n,
          "aria-label": l,
          disabled: i,
          className:
            "transition-colors duration-300 group hover:text-forest relative inline-flex items-center justify-center r-h-9 r-w-9 border border-current rounded-full ".concat(
              o
            ),
          children: (0, a.jsx)(s.A, {
            className: "stroke-current r-w-[0.875] ".concat(
              r ? "" : "rotate-180",
              " "
            ),
          }),
        });
      });
    },
    25854: (e, t, l) => {
      l.r(t), l.d(t, { default: () => I });
      var a = l(74848),
        i = l(96540),
        s = l(32578),
        n = l(46874);
      l(33853);
      var r = l(89160),
        o = l(19602),
        d = l(48936),
        c = l.n(d),
        u = l(77969),
        h = l(1723),
        m = l(70587),
        v = l(89853),
        g = l(90058),
        p = l(72673),
        w = l(44641),
        x = l(60598),
        f = l(29965),
        b = l.n(f);
      let A = {
          src: "assets/_next/static/media/placeholder.ba5b7f01.png",
          height: 1024,
          width: 1024,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEX09fP6+fjv8O7q6+qXn6Sor7K6wMLi4uP+/f3EycvO0dM33QGeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nBXGyREAMAwCsQVs5+i/4ExeEisGZ5EPBGv6SIbdVSVAUz375/asDVbOFSZGwnkbFADErL0JlQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        j = (e) => {
          var t, l, i, s;
          let { item: n, index: d, hideImages: c = !1 } = e,
            u = (0, o.U)("only screen and (max-width: 1023px)"),
            h = [
              {
                span: "w-[67vw] sm:w-[48vw] lg:w-[29vw]",
                aspect: "aspect-[26.25/16.5]",
                ratio: 26.25 / 16.5,
              },
              {
                span: "w-[82.8vw] sm:w-[59.4vw] lg:w-[36vw]",
                aspect: "aspect-[33.125/34]",
                ratio: 33.125 / 34,
              },
              {
                span: "w-[48.3vw] sm:w-[34.65vw] lg:w-[21vw]",
                aspect: "aspect-[19.375/25]",
                ratio: 0.775,
              },
            ][d % 3],
            m = w.c9.fromISO(n.postDate);
          return (0, a.jsx)(p.A, {
            href: n.url,
            className: "block group relative knowledgehub-item ".concat(
              c
                ? "border-t border-grey-border pt-4 min-w-[20rem] no-image"
                : h.span
            ),
            children: (0, a.jsxs)("div", {
              className: "card",
              children: [
                !c &&
                  (0, a.jsx)(r.P.div, {
                    className: "media-wrapper r-mb-5",
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0, amount: 0.33 },
                    children: (0, a.jsx)(r.P.div, {
                      style: {
                        clipPath: u
                          ? ""
                          : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                      },
                      variants: {
                        hidden: {
                          clipPath: u
                            ? ""
                            : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                        },
                        visible: {
                          clipPath: u
                            ? ""
                            : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        },
                      },
                      transition: {
                        duration: 1.5,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                      children:
                        "default" === n.typeHandle
                          ? (null === (t = n.mediaElement) || void 0 === t
                              ? void 0
                              : t.length) > 0
                            ? (0, a.jsx)(g.A, {
                                className: "".concat(
                                  h.aspect,
                                  " w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 will-change-transform"
                                ),
                                media:
                                  null === (l = n.mediaElement) || void 0 === l
                                    ? void 0
                                    : l[0],
                                ratio: h.ratio,
                                width: 480,
                              })
                            : (0, a.jsx)(b(), {
                                src: A,
                                alt: "Placeholder",
                                width: 480,
                                height: 480 * h.ratio,
                                className: "".concat(
                                  h.aspect,
                                  " w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 will-change-transform"
                                ),
                                showCaption: !1,
                              })
                          : (null === (i = n.image) || void 0 === i
                              ? void 0
                              : i.length) > 0
                          ? (0, a.jsx)(x.A, {
                              className: "".concat(
                                h.aspect,
                                " w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 will-change-transform"
                              ),
                              asset: n.image,
                              ratio: h.ratio,
                              width: 480,
                              showCaption: !1,
                            })
                          : (0, a.jsx)(b(), {
                              src: A,
                              alt: "Placeholder",
                              width: 480,
                              height: 480 * h.ratio,
                              className: "".concat(
                                h.aspect,
                                " w-full object-cover group-hover:scale-110 transition-transform duration-1000 will-change-transform"
                              ),
                            }),
                    }),
                  }),
                (0, a.jsxs)("div", {
                  className: "card-content",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-3 mb-3 flex-wrap",
                      children: [
                        null === (s = n.knowledgeHubCategories) || void 0 === s
                          ? void 0
                          : s.map((e) =>
                              (0, a.jsx)(
                                "span",
                                {
                                  className:
                                    "tag bg-grey-bgHover rounded-button px-[0.62rem] py-[0.56rem] text-xs text-grey block leading-none",
                                  children: e.title,
                                },
                                e.uid
                              )
                            ),
                        (0, a.jsx)("time", {
                          className: "text-xs text-grey",
                          dateTime: m.toISODate(),
                          children: m.toFormat("dd.MM.yy"),
                        }),
                      ],
                    }),
                    (0, a.jsx)("h3", {
                      className: "card-title h4-text text-asphalt".concat(
                        c ? "" : " custom-underline"
                      ),
                      children: n.title,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var y = l(71090),
        N = l(52818);
      let I = (e) => {
        var t, l, d, g, p, w;
        let {
            globals: x,
            uid: f,
            moduleSet: b = "modules",
            smallMargins: A,
            anchor: I,
          } = e,
          E = (0, i.useRef)(null),
          k = (0, i.useRef)(null),
          C = (0, s.useTranslations)("common"),
          [P, S] = (0, i.useState)(0),
          [V, R] = (0, i.useState)(0),
          [U, _] = (0, i.useState)(null),
          M = (0, o.U)("only screen and (max-width: 1023px)"),
          { currentSite: B, currentRoute: D, routeProps: G } = x,
          O = (0, m.Ay)({
            section: null == D ? void 0 : D.cms.section,
            types: null == D ? void 0 : D.cms.types,
            moduleSet: b,
          });
        (0, i.useEffect)(() => {
          var e;
          R(null === (e = k.current) || void 0 === e ? void 0 : e.progress);
        }, [null === (t = k.current) || void 0 === t ? void 0 : t.progress]);
        let [H] = (0, u._)(m._2[0].query, {
            onCompleted: (e) => {
              _((null == e ? void 0 : e.entries) || null);
            },
          }),
          { data: T } = (0, h.I)(O, {
            variables: {
              section: null == D ? void 0 : D.cms.section,
              uri: G.uri,
              siteId: null == B ? void 0 : B.siteId,
              uid: f,
            },
            onCompleted: (e) => {
              if (m._2[0].shouldRun(e, b))
                H({ variables: m._2[0].variables(e, b) });
              else {
                let [t] =
                  (null == e ? void 0 : e.entry) &&
                  (null == e ? void 0 : e.entry[b])
                    ? null == e
                      ? void 0
                      : e.entry[b]
                    : [];
                if (t) {
                  let { items: e } = t;
                  e && (null == e ? void 0 : e.length) > 0 && _(e);
                }
              }
            },
          });
        if (
          !(null == T
            ? void 0
            : null === (l = T.entry) || void 0 === l
            ? void 0
            : l.modules) ||
          0 === T.entry.modules.length
        )
          return null;
        let [X] = T.entry.modules,
          { knowledgeHubHome: q } = T || {};
        return (0, a.jsxs)("div", {
          id: "module-".concat(X.uid),
          className: "page-builder-block "
            .concat(X.typeHandle, "-block module-margin ")
            .concat(A.top ? "st" : "", " ")
            .concat(A.bottom ? "sb" : "", " relative container full ")
            .concat(X.hideImages && !M ? " no-images" : "", " ")
            .concat(
              !((null == U ? void 0 : U.length) < 4) || X.hideImages || M
                ? ""
                : " no-swiper"
            ),
          ref: E,
          "data-anchor": I,
          children: [
            (((X.title ||
              (null === (d = X.categories) || void 0 === d
                ? void 0
                : d.length) > 0) &&
              !X.hideImages) ||
              (X.title && X.hideImages)) &&
              (0, a.jsx)(r.P.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, amount: 1 },
                className: "module-top r-mb-8 overflow-hidden",
                children: (0, a.jsxs)(r.P.div, {
                  variants: { hidden: { y: "100%" }, visible: { y: "0%" } },
                  transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
                  className: "flex justify-between items-start",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "left flex flex-row justify-between sm:flex-col gap-4 w-full sm:w-auto items-start",
                      children: [
                        X.title &&
                          (0, a.jsx)("h2", {
                            className: "h2-text-alt",
                            children: (0, a.jsx)(N.A, { children: X.title }),
                          }),
                        !X.hideImages &&
                          (null == U ? void 0 : U.length) > 3 &&
                          (0, a.jsx)(v.A, {
                            href:
                              (null === (g = X.categories) || void 0 === g
                                ? void 0
                                : g.length) > 0
                                ? X.categories[0].url
                                : null == q
                                ? void 0
                                : q.url,
                            className: "mt-3 plain",
                            children: C("button.seeAll"),
                          }),
                      ],
                    }),
                    !X.hideImages && (null == U ? void 0 : U.length) > 3
                      ? (0, a.jsxs)("div", {
                          className:
                            "hidden sm:flex right ml-auto items-center gap-3 r-max-w-[10] w-full",
                          children: [
                            (0, a.jsx)(y.A, {
                              type: "button",
                              onClick: () => {
                                k.current.slideTo(P - 1);
                              },
                              className: "".concat(
                                0 === V
                                  ? "text-grey-border pointer-events-none"
                                  : "text-asphalt"
                              ),
                              forward: !1,
                            }),
                            (0, a.jsx)("div", {
                              className: "bar flex-1 h-[1px] bg-grey-border",
                              children: (0, a.jsx)(r.P.div, {
                                className: "h-full bg-asphalt",
                                initial: { width: "0%" },
                                animate: { width: "".concat(100 * V, "%") },
                                transition: { duration: 0.5 },
                              }),
                            }),
                            (0, a.jsx)(y.A, {
                              type: "button",
                              onClick: () => {
                                k.current.slideTo(P + 1);
                              },
                              className: "".concat(
                                1 === V
                                  ? "text-grey-border pointer-events-none"
                                  : "text-asphalt"
                              ),
                            }),
                          ],
                        })
                      : (0, a.jsx)(v.A, {
                          href:
                            (null === (p = X.categories) || void 0 === p
                              ? void 0
                              : p.length) > 0
                              ? X.categories[0].url
                              : null == q
                              ? void 0
                              : q.url,
                          className: "mt-3 plain",
                          children: C("button.seeAll"),
                        }),
                  ],
                }),
              }),
            (0, a.jsx)(n.RC, {
              spaceBetween: 20,
              slidesPerView: X.hideImages && !M ? 3 : "auto",
              onSwiper: (e) => {
                (k.current = e), (window.st = c());
              },
              onSlidesUpdated: () => {
                c().refresh();
              },
              onSlideChange: (e) => S(e.activeIndex),
              children:
                null == U
                  ? void 0
                  : U.map((e, t) =>
                      (0, a.jsx)(
                        n.qr,
                        {
                          children: (0, a.jsx)(j, {
                            item: e,
                            index: t,
                            hideImages: X.hideImages,
                          }),
                        },
                        e.uid
                      )
                    ),
            }),
            X.hideImages &&
              (0, a.jsx)("div", {
                className: "r-mt-10 flex justify-end",
                children: (0, a.jsx)(v.A, {
                  href:
                    (null === (w = X.categories) || void 0 === w
                      ? void 0
                      : w.length) > 0
                      ? X.categories[0].url
                      : null == q
                      ? void 0
                      : q.url,
                  className: "ml-auto plain",
                  children: C("button.seeAll"),
                }),
              }),
          ],
        });
      };
    },
  },
]);
