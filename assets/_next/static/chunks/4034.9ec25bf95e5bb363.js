"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4034],
  {
    74034: (e, l, t) => {
      t.r(l), t.d(l, { default: () => j });
      var i = t(74848),
        s = t(89160),
        n = t(67667),
        a = t(96540),
        o = t(96836),
        d = t(23820),
        r = t.n(d),
        c = t(48936),
        u = t.n(c),
        x = t(94203),
        m = t(89853),
        v = t(90058),
        h = t(52818),
        p = t(1723),
        g = t(55726),
        b = t(91323);
      let f = {
        accordionTextBlock: (e) => {
          let { block: l } = e;
          return (0, i.jsxs)("div", {
            className: "textBlock",
            children: [
              (0, i.jsx)("h3", {
                className: "r-text-lg text-asphalt mb-2",
                children: l.title,
              }),
              (0, i.jsx)("div", {
                className: "wysiwyg body-text text-grey",
                children: (0, i.jsx)(x.A, { content: l.text }),
              }),
              l.button &&
                (0, i.jsx)(m.A, {
                  linkProps: l.button,
                  className: "plain r-mt-6",
                }),
            ],
          });
        },
        mediaItems: (e) => {
          var l;
          let { block: t } = e;
          return (0, i.jsx)(v.A, {
            media:
              null === (l = t.mediaElement) || void 0 === l ? void 0 : l[0],
            width: 640,
            height: 640,
            credit: t.credit,
            description: t.description,
          });
        },
        orderedList: (e) => {
          var l;
          let { block: t } = e;
          return (0, i.jsx)("div", {
            className: "list-block flex flex-col gap-2",
            children:
              null === (l = t.items) || void 0 === l
                ? void 0
                : l.map((e) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className:
                          "listitem flex gap-3 body-text text-asphalt items-center leading-none",
                        children: [
                          (0, i.jsxs)("svg", {
                            width: "16",
                            height: "17",
                            viewBox: "0 0 16 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "flex-shrink-0 stroke-current mt-1",
                            children: [
                              (0, i.jsx)("rect", {
                                x: "0.5",
                                y: "0.878906",
                                width: "15",
                                height: "15",
                                rx: "7.5",
                              }),
                              (0, i.jsx)("path", {
                                d: "M5 8.19709L7.11765 10.3789L11 6.37891",
                              }),
                            ],
                          }),
                          e.title,
                        ],
                      },
                      e.uid
                    )
                  ),
          });
        },
      };
      o.os.registerPlugin(r());
      let j = (e) => {
        var l, t, o, d;
        let {
            globals: r,
            uid: c,
            moduleSet: m = "modules",
            smallMargins: v,
            anchor: j,
          } = e,
          { currentSite: w, currentRoute: y, routeProps: N } = r,
          k = (0, g.A)({
            section: null == y ? void 0 : y.cms.section,
            types: null == y ? void 0 : y.cms.types,
            moduleSet: m,
          }),
          { data: A } = (0, p.I)(k, {
            variables: {
              section: null == y ? void 0 : y.cms.section,
              uri: N.uri,
              siteId: null == w ? void 0 : w.siteId,
              uid: c,
            },
          }),
          [C, P] = (0, a.useState)(0),
          [I, H] = (0, a.useState)(0);
        if (
          !(null == A ? void 0 : A.entry) ||
          !A.entry[m] ||
          0 === A.entry[m].length
        )
          return null;
        let [T] = A.entry[m];
        return (0, i.jsxs)("div", {
          id: "module-".concat(T.uid),
          className: "page-builder-block "
            .concat(T.typeHandle, "-block container full module-margin")
            .concat(v.top ? "st" : "", " ")
            .concat(v.bottom ? "sb" : ""),
          "data-anchor": j,
          children: [
            T.title &&
              (0, i.jsx)("h2", {
                className: "h2-text-alt",
                children: (0, i.jsx)(h.A, { children: T.title }),
              }),
            
            (0, i.jsx)(n.N, {
              mode: "wait",
              children: (0, i.jsx)(
                s.P.div,
                {
                  className: "accordion r-mt-10",
                  initial: "collapsed",
                  animate: "open",
                  exit: "exit",
                  variants: {
                    open: { x: 0, opacity: 1 },
                    collapsed: { x: "-25%", opacity: 0 },
                    exit: { x: "25%", opacity: 0 },
                  },
                  transition: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
                  onAnimationComplete: () => {
                    u().refresh();
                  },
                  children:
                    null === (d = T.groups) || void 0 === d
                      ? void 0
                      : null === (o = d[C]) || void 0 === o
                      ? void 0
                      : null === (t = o.items) || void 0 === t
                      ? void 0
                      : t.map((e) => {
                          var l, t, n, a, o, d, r, c;
                          return (0, i.jsxs)(
                            s.P.div,
                            {
                              className: "outer-wrapper overflow-hidden",
                              initial: "hidden",
                              whileInView: "visible",
                              whileHover: "hover",
                              animate: I === e.uid ? "hover" : null,
                              viewport: { once: !1, threshold: 1 },
                              children: [
                                (0, i.jsxs)("div", {
                                  id: "item-".concat(e.uid),
                                  className: "accordion-item py-3",
                                  children: [
                                    (0, i.jsxs)("button", {
                                      className:
                                        "flex items-center justify-between w-full text-left text-asphalt r-text-xl gap-4",
                                      type: "button",
                                      onClick: () => {
                                        H(I === e.uid ? null : e.uid);
                                      },
                                      children: [
                                        (0, i.jsx)("span", {
                                          children: e.title,
                                        }),
                                        (null === (n = T.groups) || void 0 === n
                                          ? void 0
                                          : null === (t = n[C]) || void 0 === t
                                          ? void 0
                                          : null === (l = t.items) ||
                                            void 0 === l
                                          ? void 0
                                          : l.length) > 1 &&
                                          (0, i.jsx)(s.P.div, {
                                            animate: {
                                              rotate: I === e.uid ? 135 : 0,
                                            },
                                            children: (0, i.jsx)(b.A, {
                                              className:
                                                "w-4 sm:w-8 stroke-current flex-shrink-0",
                                            }),
                                          }),
                                      ],
                                    }),
                                    (0, i.jsxs)(s.P.div, {
                                      className: "overflow-hidden",
                                      initial: "collapsed",
                                      animate:
                                        I === e.uid ||
                                        (null === (d = T.groups) || void 0 === d
                                          ? void 0
                                          : null === (o = d[C]) || void 0 === o
                                          ? void 0
                                          : null === (a = o.items) ||
                                            void 0 === a
                                          ? void 0
                                          : a.length) === 1
                                          ? "open"
                                          : "collapsed",
                                      variants: {
                                        open: { height: "auto", opacity: 1 },
                                        collapsed: { height: 0, opacity: 0 },
                                      },
                                      transition: {
                                        duration: 0.5,
                                        ease: [0.04, 0.62, 0.23, 0.98],
                                      },
                                      onAnimationComplete: () => {
                                        u().refresh();
                                      },
                                      children: [
                                        e.text &&
                                          (0, i.jsx)("div", {
                                            className:
                                              "wysiwyg text-grey r-text-base r-pt-4 r-max-w-[26.25] ".concat(
                                                (null == e
                                                  ? void 0
                                                  : null === (r = e.columns) ||
                                                    void 0 === r
                                                  ? void 0
                                                  : r.length) > 0
                                                  ? ""
                                                  : "r-pb-16"
                                              ),
                                            children: (0, i.jsx)(x.A, {
                                              content: e.text,
                                            }),
                                          }),
                                        (null == e
                                          ? void 0
                                          : null === (c = e.columns) ||
                                            void 0 === c
                                          ? void 0
                                          : c.length) > 0 &&
                                          (0, i.jsx)("div", {
                                            className:
                                              "grid grid-cols-1 gap-4 md:r-gap-16 r-py-16 ".concat(
                                                2 == e.columnCount
                                                  ? "md:grid-cols-2"
                                                  : 3 == e.columnCount
                                                  ? "md:grid-cols-3"
                                                  : 4 == e.columnCount
                                                  ? "md:grid-cols-4"
                                                  : ""
                                              ),
                                            children: e.columns.map((e) => {
                                              var l, t, s;
                                              return "fullTable" ===
                                                e.typeHandle
                                                ? (0, i.jsxs)(
                                                    "div",
                                                    {
                                                      className:
                                                        "col-span-full",
                                                      children: [
                                                        e.title &&
                                                          (0, i.jsx)("h3", {
                                                            className:
                                                              "r-text-xl r-mb-5",
                                                            children: e.title,
                                                          }),
                                                        (0, i.jsx)("div", {
                                                          className:
                                                            "table-container wysiwyg",
                                                          children: (0, i.jsx)(
                                                            x.A,
                                                            {
                                                              content:
                                                                null ===
                                                                  (l =
                                                                    e.fullTable) ||
                                                                void 0 === l
                                                                  ? void 0
                                                                  : l.table,
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    },
                                                    e.uid
                                                  )
                                                : "specTable" === e.typeHandle
                                                ? (0, i.jsx)(
                                                    "div",
                                                    {
                                                      className:
                                                        "col-span-full",
                                                      children:
                                                        null ===
                                                          (t = e.table) ||
                                                        void 0 === t
                                                          ? void 0
                                                          : t.map((l, t) =>
                                                              (0, i.jsxs)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex flex-col sm:flex-row flex-1 r-gap-6 r-text-base py-4 border-b border-grey-border",
                                                                  children: [
                                                                    (0, i.jsx)(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "r-max-w-[26.25] flex-1 text-asphalt",
                                                                        children:
                                                                          l.name,
                                                                      }
                                                                    ),
                                                                    (0, i.jsx)(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex-1 text-grey",
                                                                        children:
                                                                          (0,
                                                                          i.jsx)(
                                                                            x.A,
                                                                            {
                                                                              content:
                                                                                l.value.replace(
                                                                                  /\n/g,
                                                                                  "<br />"
                                                                                ),
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                },
                                                                "row-"
                                                                  .concat(
                                                                    t,
                                                                    "-"
                                                                  )
                                                                  .concat(e.uid)
                                                              )
                                                            ),
                                                    },
                                                    e.uid
                                                  )
                                                : (0, i.jsx)(
                                                    "div",
                                                    {
                                                      className:
                                                        "accordion-column flex flex-col r-gap-6",
                                                      children:
                                                        null ===
                                                          (s = e.blocks) ||
                                                        void 0 === s
                                                          ? void 0
                                                          : s.map((e) => {
                                                              let l =
                                                                f[e.typeHandle];
                                                              return l
                                                                ? (0, i.jsx)(
                                                                    l,
                                                                    {
                                                                      block: e,
                                                                    },
                                                                    e.uid
                                                                  )
                                                                : null;
                                                            }),
                                                    },
                                                    e.uid
                                                  );
                                            }),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsx)(s.P.div, {
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
                                  children: (0, i.jsx)(s.P.div, {
                                    className:
                                      "bg-asphalt h-full w-full origin-left red-border",
                                    variants: {
                                      hidden: { scaleX: 0 },
                                      hover: { scaleX: 1 },
                                    },
                                    transition: {
                                      duration: 1,
                                      ease: "easeInOut",
                                    },
                                  }),
                                }),
                              ],
                            },
                            e.uid
                          );
                        }),
                },
                C
              ),
            }),
          ],
        });
      };
    },
  },
]);
