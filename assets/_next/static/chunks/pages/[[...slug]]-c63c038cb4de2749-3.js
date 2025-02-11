(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [243],
  {
    44194: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => s });
      var l,
        i,
        r = t(96540);
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      let s = (0, r.forwardRef)(function (e, n) {
        return r.createElement(
          "svg",
          a(
            {
              viewBox: "0 0 16 17",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
            },
            e
          ),
          l ||
            (l = r.createElement(
              "g",
              { clipPath: "url(#globe_svg__a)" },
              r.createElement("path", {
                d: "M15.5 8.162c0 .36-.03.72-.08 1.07-.52 3.63-3.64 6.43-7.42 6.43s-6.9-2.8-7.42-6.43a7.37 7.37 0 0 1 .84-4.66A7.486 7.486 0 0 1 8 .662c2.84 0 5.31 1.58 6.58 3.91.59 1.06.92 2.29.92 3.59Z",
              }),
              r.createElement("path", {
                d: "M14.58 4.572c-1.01.37-2.13.66-3.34.84-1.02.16-2.11.25-3.24.25-1.13 0-2.22-.09-3.24-.25-1.21-.18-2.33-.47-3.34-.84A7.486 7.486 0 0 1 8 .662c2.84 0 5.31 1.58 6.58 3.91Z",
              }),
              r.createElement("path", {
                d: "M15.5 8.162c0 .36-.03.72-.08 1.07-1.18.52-2.57.93-4.09 1.17-1.05.17-2.17.26-3.33.26-1.16 0-2.28-.09-3.33-.26-1.52-.24-2.91-.65-4.09-1.17a7.37 7.37 0 0 1 .84-4.66A7.486 7.486 0 0 1 8 .662c2.84 0 5.31 1.58 6.58 3.91.59 1.06.92 2.29.92 3.59Z",
              }),
              r.createElement("path", {
                d: "M11.5 8.162c0 2.15-.44 4.07-1.12 5.43-.68 1.36-1.57 2.07-2.38 2.07-.81 0-1.68-.67-2.38-2.07-.68-1.36-1.12-3.28-1.12-5.43s.44-4.07 1.12-5.43C6.32 1.342 7.19.662 8 .662c.81 0 1.68.67 2.38 2.07.68 1.36 1.12 3.28 1.12 5.43Z",
              })
            )),
          i ||
            (i = r.createElement(
              "defs",
              null,
              r.createElement(
                "clipPath",
                { id: "globe_svg__a" },
                r.createElement("path", {
                  transform: "translate(0 .162)",
                  d: "M0 0h16v16H0z",
                })
              )
            ))
        );
      });
    },
    91323: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => a });
      var l,
        i = t(96540);
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      let a = (0, i.forwardRef)(function (e, n) {
        return i.createElement(
          "svg",
          r(
            {
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
            },
            e
          ),
          l ||
            (l = i.createElement("path", {
              d: "M0 8h16M8 0v16",
              vectorEffect: "non-scaling-stroke",
            }))
        );
      });
    },
    97792: (e, n, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[[...slug]]",
        function () {
          return t(68650);
        },
      ]);
    },
    15385: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => l });
      let l = {
        src: "assets/_next/static/media/no-image.4234a7df.webp",
        height: 1024,
        width: 1024,
        blurDataURL:
          "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAgAAkA4JZwAAsf+MGgAAP75rcB0BP13CpaMAcr2CLQzg+HHZNvHZ3+QKvPpZgAAAA==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    89853: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => s });
      var l = t(74848),
        i = t(72673),
        r = t(2102),
        a = t(96540);
      let s = function (e) {
        let {
            ariaLabel: n,
            title: t,
            type: s = "link",
            target: o,
            href: d,
            onClick: c,
            children: u,
            className: m = "",
            disabled: p = !1,
            Icon: h = r.A,
            linkProps: g = {},
            external: x = !1,
          } = e,
          [v, f] = (0, a.useState)(x),
          w = (null == g ? void 0 : g.type) || s,
          y = (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("span", {
                className:
                  "target-area absolute block left-0 w-full h-full min-h-[48px] top-1/2 -translate-y-1/2",
              }),
              "asset" === w &&
                (0, l.jsx)("span", {
                  className: "file-icon -mr-2",
                  children: (0, l.jsx)("svg", {
                    viewBox: "0 0 24 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-6 stroke-none",
                    children: (0, l.jsx)("path", {
                      d: "M8 18.1416H16V16.1416H8V18.1416ZM8 14.1416H16V12.1416H8V14.1416ZM6 22.1416C5.45 22.1416 4.97917 21.9458 4.5875 21.5541C4.19583 21.1624 4 20.6916 4 20.1416V4.1416C4 3.5916 4.19583 3.12077 4.5875 2.7291C4.97917 2.33743 5.45 2.1416 6 2.1416H14L20 8.1416V20.1416C20 20.6916 19.8042 21.1624 19.4125 21.5541C19.0208 21.9458 18.55 22.1416 18 22.1416H6ZM13 9.1416V4.1416H6V20.1416H18V9.1416H13Z",
                      fill: "#767572",
                    }),
                  }),
                }),
              u || g.text,
              !["tel", "email"].includes(null == g ? void 0 : g.type) &&
                (0, l.jsx)("span", {
                  className: "icon-wrapper after",
                  children: (0, l.jsx)(h, {
                    className: "w-3".concat(
                      "asset" === w
                        ? " rotate-90 asset-icon"
                        : v
                        ? " -rotate-45 external-icon"
                        : ""
                    ),
                  }),
                }),
            ],
          }),
          b = "simple-button ".concat(m, " group");
        if (
          ((0, a.useEffect)(() => {
            var e;
            if (!d && !(null == g ? void 0 : g.href)) return;
            if (["tel", "email"].includes(null == g ? void 0 : g.type))
              return f(!1);
            let { hostname: n } = window.location,
              t =
                (null == d ? void 0 : d.includes(n)) ||
                (null == g
                  ? void 0
                  : null === (e = g.href) || void 0 === e
                  ? void 0
                  : e.includes(n)),
              l =
                "_blank" === o || (null == g ? void 0 : g.target) === "_blank";
            f(!t || l);
          }, [d, g, o, x]),
          "span" === s)
        )
          return (0, l.jsx)("span", {
            "aria-label": n || t,
            title: t,
            className: [b, p ? "opacity-60" : ""].join(" "),
            disabled: p,
            onClick: c,
            children: y,
          });
        if ("button" === s || "submit" === s)
          return (0, l.jsx)("button", {
            "aria-label": n || t,
            title: t,
            type: s,
            className: [b, p ? "opacity-60" : ""].join(" "),
            disabled: p,
            onClick: c,
            children: y,
          });
        if ("close" === s)
          return (0, l.jsx)("button", {
            "aria-label": n || t,
            className: [b, p ? "opacity-60" : ""].join(" "),
            disabled: p,
            onClick: c,
            children: y,
          });
        if ("download" === s)
          return (0, l.jsx)("a", {
            "aria-label": n || t,
            title: t,
            href: d,
            className: "".concat(b, " download-button"),
            target: "_blank",
            rel: "noreferrer",
            download: !0,
            children: y,
          });
        let A = {
          "aria-label": n || g.ariaLabel || t,
          title: t || g.title,
          target: o || g.target,
          href: d || g.href,
          onClick: c,
          className: b,
        };
        return (0, l.jsx)(i.A, { ...A, children: y });
      };
    },
    53594: (e, n, t) => {
      "use strict";
      t.d(n, { Ay: () => d, _2: () => o });
      var l = t(84577),
        i = t(2135),
        r = t(45418);
      function a() {
        let e = (0, l._)([
          '\n  query Accessories($relatedTo: [QueryArgument], $siteId: [QueryArgument], $limit: Int = 3) {\n    entries(section: "accessories", relatedTo: $relatedTo, siteId: $siteId, limit: $limit) {\n      id\n      uid\n      siteId\n      url\n      ... on accessories_default_Entry {\n        title\n        mediaItems {\n          ... on mediaItems_items_BlockType {\n            id\n            uid\n            siteId\n            ',
          "\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_Accessories($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          '\n      }\n      accessoriesHome: entry(section: "pages", siteId: $siteId, level: 1, type: "list", listType: "accessories") {\n        id\n        uid\n        siteId\n        url\n      }\n    }\n  ',
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      let o = [
          {
            query: (0, i.J1)(a(), r.A),
            variables: (e, n) => {
              var t, l;
              let [i] =
                  (null == e ? void 0 : e.entry) &&
                  (null == e ? void 0 : e.entry[n])
                    ? null == e
                      ? void 0
                      : e.entry[n]
                    : [],
                r = [];
              return (
                (null === (t = i.accessoryCategory) || void 0 === t
                  ? void 0
                  : t.length) &&
                  r.push(
                    ...(null == i
                      ? void 0
                      : null === (l = i.accessoryCategory) || void 0 === l
                      ? void 0
                      : l.map((e) => e.id))
                  ),
                { siteId: i.siteId, relatedTo: r, limit: Number(i.amount) || 3 }
              );
            },
            shouldRun: (e, n) => {
              var t;
              let [l] =
                (null == e ? void 0 : e.entry) &&
                (null == e ? void 0 : e.entry[n])
                  ? null == e
                    ? void 0
                    : e.entry[n]
                  : [];
              return !(
                (null == l
                  ? void 0
                  : null === (t = l.items) || void 0 === t
                  ? void 0
                  : t.length) > 0
              );
            },
          },
        ],
        d = (e) => {
          let { section: n, types: t = [], moduleSet: l = "modules" } = e,
            a =
              null == t
                ? void 0
                : t
                    .map((e) =>
                      "\n    ... on "
                        .concat(n, "_")
                        .concat(e, "_Entry {\n      ")
                        .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                        .concat(
                          l,
                          "_accessories_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          amount: number\n          button {\n            target\n            text\n            type\n            href: url\n            title\n          }\n          accessoryCategory {\n            id\n            siteId\n            uid\n            title\n          }\n          items: accessoryEntries {\n            id\n            uid\n            siteId\n            title\n            url\n            ... on accessories_default_Entry {\n              mediaItems {\n                ... on mediaItems_items_BlockType {\n                  id\n                  uid\n                  siteId\n                  "
                        )
                        .concat(
                          r.A,
                          "\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "
                        )
                    )
                    .join("");
          return (0, i.J1)(s(), n, a);
        };
    },
    55726: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => s });
      var l = t(84577),
        i = t(2135),
        r = t(45418);
      function a() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_Accordion($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let s = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          s =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_accordionList_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          groups: children {\n            ... on "
                      )
                      .concat(
                        l,
                        "_accordionGroup_BlockType {\n              id\n              uid\n              siteId\n              typeHandle\n              title: moduleTitle\n              items: children {\n                ... on "
                      )
                      .concat(
                        l,
                        "_accordionItem_BlockType {\n                  id\n                  uid\n                  siteId\n                  typeHandle\n                  title: moduleTitle\n                  text\n                  columnCount: columns\n                  columns: children {\n                    ... on "
                      )
                      .concat(
                        l,
                        "_accordionColumn_BlockType {\n                      id\n                      uid\n                      siteId\n                      typeHandle\n                      blocks: children {\n                        ... on "
                      )
                      .concat(
                        l,
                        "_accordionTextBlock_BlockType {\n                          id\n                          uid\n                          siteId\n                          typeHandle\n                          title: moduleTitle\n                          text\n                          button { \n                            target\n                            text\n                            type\n                            href: url\n                            title\n                          }\n                        }\n                        ... on "
                      )
                      .concat(
                        l,
                        "_orderedList_BlockType {\n                          id\n                          uid\n                          siteId\n                          typeHandle\n                          items: children {\n                            ... on "
                      )
                      .concat(
                        l,
                        "_listItem_BlockType {\n                              id\n                              uid\n                              siteId\n                              typeHandle\n                              title: moduleTitle\n                            }\n                          }\n                        }\n                        ... on "
                      )
                      .concat(
                        l,
                        "_mediaItems_BlockType {\n                          id\n                          uid\n                          siteId\n                          typeHandle\n                          "
                      )
                      .concat(
                        r.A,
                        "\n                          credit: plainText\n                          description: text\n                        }\n                      }\n                    }\n                    ... on "
                      )
                      .concat(
                        l,
                        "_specTable_BlockType {\n                      id\n                      uid\n                      siteId\n                      typeHandle\n                      table: simpleTable {\n                        name\n                        value\n                      }\n                    }\n                    ... on "
                      )
                      .concat(
                        l,
                        "_fullTable_BlockType {\n                      id\n                      uid\n                      siteId\n                      typeHandle\n                      title: moduleTitle\n                      fullTable: table {\n                        table\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(a(), n, s);
      };
    },
    51410: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => s });
      var l = t(84577),
        i = t(45418),
        r = t(2135);
      function a() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_AnimatedText($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let s = (e) => {
        let { section: n, types: t = [], moduleSet: l } = e,
          s =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_animatedText_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          fontSize\n          title: moduleTitle\n          text: plainText\n          "
                      )
                      .concat(
                        i.A,
                        "\n          button {\n            target\n            text\n            type\n            href: url\n            title\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, r.J1)(a(), n, s);
      };
    },
    28667: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => p });
      var l = t(74848),
        i = t(89160),
        r = t(96540),
        a = t(31370),
        s = t(94203),
        o = t(33473),
        d = t(3027),
        c = t(89853),
        u = t(90058),
        m = t(52818);
      let p = (0, a.WQ)("ui")(
        (0, a.PA)((e) => {
          var n, t, a, p, h;
          let { module: g, smallMargins: x = {}, ui: v, anchor: f } = e,
            w = (0, r.useRef)(null);
          return (
            (0, o.E)(() => {
              if (!w.current || !v.smoother) return;
              let e = w.current.querySelectorAll(".media-el");
              v.smoother.effects(e, { speed: "auto" });
            }, [w, v.smoother]),
            (0, l.jsxs)("div", {
              id: "module-".concat(g.uid),
              className: "page-builder-block "
                .concat(g.typeHandle, "-block container full module-margin ")
                .concat(x.top ? "st" : "", " ")
                .concat(x.bottom ? "sb" : ""),
              "data-anchor": f,
              ref: w,
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "module-top flex flex-col sm:flex-row r-gap-8 r-mb-[3.75]",
                  children: [
                    g.title &&
                      (0, l.jsx)("h2", {
                        className: "h2-text-alt w-full r-max-w-[33]",
                        children: (0, l.jsx)(m.A, { children: g.title }),
                      }),
                    ((null === (n = g.button) || void 0 === n
                      ? void 0
                      : n.href) ||
                      g.text) &&
                      (0, l.jsxs)(i.P.div, {
                        className:
                          "module-content flex flex-col r-gap-10 r-max-w-[40] w-full ml-auto",
                        initial: { opacity: 0, y: 50 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 1.5, ease: "easeOut" },
                        viewport: { once: !0, amount: "some" },
                        children: [
                          g.text &&
                            (0, l.jsx)("div", {
                              className: "wysiwyg r-text-xl text-asphalt",
                              children: (0, l.jsx)(s.A, { content: g.text }),
                            }),
                          ((null === (t = g.primaryButton) || void 0 === t
                            ? void 0
                            : t.href) ||
                            (null === (a = g.secondaryButton) || void 0 === a
                              ? void 0
                              : a.href)) &&
                            (0, l.jsxs)("div", {
                              className: "flex r-gap-6",
                              children: [
                                (0, l.jsx)(d.A, { linkProps: g.primaryButton }),
                                (0, l.jsx)(c.A, {
                                  linkProps: g.secondaryButton,
                                }),
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
                (null === (p = g.children) || void 0 === p
                  ? void 0
                  : p.length) > 0 &&
                  (0, l.jsx)("div", {
                    className: "media flex flex-col sm:flex-row r-gap-5",
                    children:
                      null === (h = g.children) || void 0 === h
                        ? void 0
                        : h.map((e) => {
                            var n;
                            return (0, l.jsx)(
                              "div",
                              {
                                className:
                                  "media-wrapper flex-1 overflow-hidden aspect-[16/9] ".concat(
                                    g.children.length > 1
                                      ? "sm:aspect-[40/25]"
                                      : "sm:aspect-[81/30]"
                                  ),
                                children: (0, l.jsx)(u.A, {
                                  media:
                                    null == e
                                      ? void 0
                                      : null === (n = e.mediaElement) ||
                                        void 0 === n
                                      ? void 0
                                      : n[0],
                                  width: 1920,
                                  ratio:
                                    g.children.length > 1 ? 0.625 : 30 / 81,
                                  figureClasses: "flex-1",
                                  className:
                                    "media-el w-full h-[120%] object-cover",
                                  credit: e.credit,
                                  description: e.description,
                                  showCaption: !1,
                                }),
                              },
                              e.uid
                            );
                          }),
                  }),
              ],
            })
          );
        })
      );
    },
    28182: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => s });
      var l = t(84577),
        i = t(2135),
        r = t(45418);
      function a() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_Banner($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let s = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          s =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_banner_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          text\n          primaryButton: button {\n            target\n            text\n            type\n            href: url\n            title\n          }\n          secondaryButton: button2 {\n            target\n            text\n            type\n            href: url\n            title\n          }\n          children {\n            ... on "
                      )
                      .concat(
                        l,
                        "_mediaItems_BlockType {\n              id\n              uid\n              siteId\n              typeHandle\n              "
                      )
                      .concat(
                        r.A,
                        "\n              credit: plainText\n              description: text\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(a(), n, s);
      };
    },
    13972: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => a });
      var l = t(84577),
        i = t(2135);
      function r() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_BigNumbers($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      let a = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          a =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_bigNumbers_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          items: children {\n            ... on "
                      )
                      .concat(
                        l,
                        "_bigNumberItem_BlockType {\n              id\n              uid\n              siteId\n              typeHandle\n              number: number2\n              description: plainText\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(r(), n, a);
      };
    },
    42535: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => a });
      var l = t(84577),
        i = t(2135);
      function r() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_Children($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n        links: children {\n          id\n          uid\n          siteId\n          title\n          typeHandle\n          url\n        }\n      }\n    }\n  ",
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      let a = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          a =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_children_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(r(), n, a);
      };
    },
    41424: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => s });
      var l = t(84577),
        i = t(2135),
        r = t(45418);
      function a() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_ContentCards($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let s = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          s =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_contentCards_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          columns\n          slider: lightswitch\n          items: children {\n            ... on "
                      )
                      .concat(
                        l,
                        "_card_BlockType {\n              id\n              uid\n              siteId\n              typeHandle\n              title: moduleTitle\n              text\n              button {\n                target\n                text\n                type\n                href: url\n                title\n              }\n              "
                      )
                      .concat(
                        r.A,
                        "\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(a(), n, s);
      };
    },
    74075: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => s });
      var l = t(84577),
        i = t(2135),
        r = t(45418);
      function a() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_ctas($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let s = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          s =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_ctaS_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          cta: children {\n            ... on "
                      )
                      .concat(
                        l,
                        "_cta_BlockType {\n              id\n              uid\n              siteId\n              typeHandle\n              title: moduleTitle\n              color {\n                class\n                color\n                label\n              }\n              spanFull: lightswitch\n              text\n              button {\n                target\n                text\n                type\n                href: url\n                title\n              }\n              secondaryButton: button2 {\n                target\n                text\n                type\n                href: url\n                title\n              }\n              "
                      )
                      .concat(
                        r.A,
                        "\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(a(), n, s);
      };
    },
    44857: (e, n, t) => {
      "use strict";
      t.d(n, { Ay: () => d, wk: () => o });
      var l = t(84577),
        i = t(2135);
      function r() {
        let e = (0, l._)([
          '\n  query GetInstallers(\n    $lat: Float = 59.9139\n    $lng: Float = 10.7522\n    $radius: Float = 100\n    $limit: Int = 100\n    $offset: Int = 0\n    $excludeIds: [QueryArgument]\n  ) {\n    entries(\n      section: "installers"\n      type: "default"\n      map: { radius: $radius, coordinate: { lat: $lat, lng: $lng } }\n      siteId: 1\n      limit: $limit\n      offset: $offset\n      id: $excludeIds\n    ) {\n      id\n      uid\n      siteId\n      title\n      ... on installers_default_Entry {\n        map {\n          address\n          lat\n          lng\n          parts {\n            address\n            city\n            country\n            postcode\n          }\n        }\n        url: plainText\n      }\n    }\n    entryCount(\n      section: "installers"\n      type: "default"\n      map: { radius: $radius, coordinate: { lat: $lat, lng: $lng } }\n      siteId: 1\n    )\n  }\n',
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function a() {
        let e = (0, l._)([
          '\n  query GetWholesalers($region: [QueryArgument], $siteId: [QueryArgument]) {\n    entries(\n      section: "wholesaler"\n      type: "default"\n      siteId: 1\n      relatedTo: $region\n    ) {\n      id\n      uid\n      siteId\n      title\n      ... on wholesaler_default_Entry {\n        button {\n          target\n          text\n          type\n          href: url\n          title\n        }\n        region: siteSelector(siteId: $siteId) {\n          id\n          uid\n          siteId\n          title\n        }\n        cats: wholesalerCategory(siteId: $siteId) {\n          id\n          uid\n          siteId\n          title\n        }\n        tags: wholesalerTags(siteId: $siteId) {\n          id\n          uid\n          siteId\n          title\n        }\n        image {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          url(width: 100)\n          primaryUrl: url\n          alt\n          ... on uploads_Asset {\n            altTranslation: plainText2\n          }\n        }\n        chargers: chargers2(label: true)\n      }\n    }\n  }\n',
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_FindInstallers($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          '\n      }\n      regions: categories(group: "regions", siteId: $siteId) {\n        id\n        uid\n        siteId\n        title\n        ... on regions_Category {\n          flag: image {\n            id\n            uid\n            siteId\n            kind\n            width\n            height\n            url(width: 100)\n            primaryUrl: url\n            alt\n            ... on uploads_Asset {\n              altTranslation: plainText2\n            }\n          }\n          localized {\n            id\n            uid\n            siteId\n            title\n          }\n          hideMap: nonTranslatableLightswitch\n          map {\n            lat\n            lng\n            zoom\n          }\n          hasSites {\n            ... on hasSites_selectSite_BlockType {\n              id\n              uid\n              siteId\n              hasSite {\n                target\n                title\n                url\n              }\n            }\n          }\n        }\n      }\n      globalSet(handle: "settings"){\n        id\n        uid\n        siteId\n        ... on settings_GlobalSet {\n          utm: simpleTable {\n            name\n            value\n          }\n        }\n      }\n    }\n  ',
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      (0, i.J1)(r());
      let o = (0, i.J1)(a()),
        d = (e) => {
          let { section: n, types: t = [], moduleSet: l = "modules" } = e,
            r =
              null == t
                ? void 0
                : t
                    .map((e) =>
                      "\n    ... on "
                        .concat(n, "_")
                        .concat(e, "_Entry {\n      ")
                        .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                        .concat(
                          l,
                          "_findInstaller_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          logosTitle: plainText\n          exceptions: children {\n            ... on "
                        )
                        .concat(
                          l,
                          "_installerExceptions_BlockType {\n              id\n              uid\n              siteId\n              typeHandle\n              title: moduleTitle\n              showMap: lightswitch\n              siteSelector {\n                id\n                uid\n                siteId\n              }\n              text\n              button {\n                target\n                text\n                type\n                href: url\n                title\n              }\n              contactRows: children {\n                ... on "
                        )
                        .concat(
                          l,
                          "_contactRow_BlockType {\n                  id\n                  uid\n                  siteId\n                  typeHandle\n                  title: moduleTitle\n                  text\n                  links {\n                    ... on links_link_BlockType {\n                      id\n                      uid\n                      siteId\n                      typeHandle\n                      \n                      button: itemLink {\n                        target\n                        text\n                        type\n                        href: url\n                        title\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "
                        )
                    )
                    .join("");
          return (0, i.J1)(s(), n, r);
        };
    },
    47158: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => s });
      var l = t(84577),
        i = t(45418),
        r = t(2135);
      function a() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_Gallery($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let s = (e) => {
        let { section: n, types: t = [], moduleSet: l } = e,
          s =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_gallery_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          text\n          dark: lightswitch\n          media: children {\n            typeHandle\n            ... on "
                      )
                      .concat(
                        l,
                        "_mediaItems_BlockType {\n              uid\n              id\n              siteId\n              description: text\n              credit: plainText\n              "
                      )
                      .concat(
                        i.A,
                        "\n            }\n          }\n          button {\n            target\n            text\n            type\n            href: url\n            title\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, r.J1)(a(), n, s);
      };
    },
    20748: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => a });
      var l = t(84577),
        i = t(2135);
      function r() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_IconCards($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      let a = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          a =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_iconCards_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          text\n          items: children {\n            ... on "
                      )
                      .concat(
                        l,
                        "_iconCard_BlockType {\n              id\n              uid\n              siteId\n              typeHandle\n              title: moduleTitle\n              text\n              image {\n                id\n                uid\n                siteId\n                kind\n                width\n                height\n                url(width: 100)\n                primaryUrl: url\n                alt\n                ... on uploads_Asset {\n                  text\n                  plainText\n                  altTranslation: plainText2\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(r(), n, a);
      };
    },
    70587: (e, n, t) => {
      "use strict";
      t.d(n, { Ay: () => d, _2: () => o });
      var l = t(84577),
        i = t(45418),
        r = t(2135);
      function a() {
        let e = (0, l._)([
          '\n  query KnowledgeHubItems($relatedTo: [QueryArgument], $siteId: [QueryArgument], $limit: Int = 3) {\n    entries(section: "knowledgeHub", relatedTo: $relatedTo, siteId: $siteId, limit: $limit) {\n      id\n      uid\n      siteId\n      url\n      typeHandle\n      postDate\n      ... on knowledgeHub_default_Entry {\n        title\n        ',
          "\n        knowledgeHubCategories {\n          id\n          uid\n          siteId\n          title\n        }\n      }\n      ... on knowledgeHub_legacy_Entry {\n        title\n        image {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          url(width: 100)\n          primaryUrl: url\n          alt\n          ... on uploads_Asset {\n            text\n            plainText\n            altTranslation: plainText2\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_KnowledgeHub($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          '\n      }\n      knowledgeHubHome: entry(section: "pages", siteId: $siteId, level: 1, type: "list", listType: "knowledgeHub") {\n        id\n        uid\n        siteId\n        url\n      }\n    }\n  ',
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      let o = [
          {
            query: (0, r.J1)(a(), i.A),
            variables: (e, n) => {
              var t, l;
              let [i] =
                  (null == e ? void 0 : e.entry) &&
                  (null == e ? void 0 : e.entry[n])
                    ? null == e
                      ? void 0
                      : e.entry[n]
                    : [],
                r = [];
              return (
                (null === (t = i.knowledgeHubCategories) || void 0 === t
                  ? void 0
                  : t.length) &&
                  r.push(
                    ...(null == i
                      ? void 0
                      : null === (l = i.knowledgeHubCategories) || void 0 === l
                      ? void 0
                      : l.map((e) => e.id))
                  ),
                { siteId: i.siteId, relatedTo: r, limit: Number(i.amount) || 3 }
              );
            },
            shouldRun: (e, n) => {
              var t;
              let [l] =
                (null == e ? void 0 : e.entry) &&
                (null == e ? void 0 : e.entry[n])
                  ? null == e
                    ? void 0
                    : e.entry[n]
                  : [];
              return !(
                (null == l
                  ? void 0
                  : null === (t = l.items) || void 0 === t
                  ? void 0
                  : t.length) > 0
              );
            },
          },
        ],
        d = (e) => {
          let { section: n, types: t = [], moduleSet: l } = e,
            a =
              null == t
                ? void 0
                : t
                    .map((e) =>
                      "\n    ... on "
                        .concat(n, "_")
                        .concat(e, "_Entry {\n      ")
                        .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                        .concat(
                          l,
                          "_knowledgeHub_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          amount: number\n          hideImages: lightswitch\n          title: moduleTitle\n          categories: knowledgeHubCategories {\n            id\n            uid\n            siteId\n            title\n            url\n          }\n          items: knowledgeHubEntries {\n            id\n            uid\n            siteId\n            url\n            typeHandle\n            postDate\n            ... on knowledgeHub_default_Entry {\n              title\n              "
                        )
                        .concat(
                          i.A,
                          "\n              postDate\n              knowledgeHubCategories {\n                id\n                uid\n                siteId\n                title\n              }\n            }\n            ... on knowledgeHub_legacy_Entry {\n              title\n              image {\n                id\n                uid\n                siteId\n                kind\n                width\n                height\n                url(width: 100)\n                primaryUrl: url\n                alt\n                ... on uploads_Asset {\n                  text\n                  plainText\n                  altTranslation: plainText2\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "
                        )
                    )
                    .join("");
          return (0, r.J1)(s(), n, a);
        };
    },
    56788: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => a });
      var l = t(84577),
        i = t(2135);
      function r() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_LinkList($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      let a = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          a =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_linkList_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          links {\n            ... on links_link_BlockType {\n              id\n              uid\n              siteId\n              typeHandle\n              itemLink {\n                target\n                text\n                type\n                href: url\n                title\n              }\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(r(), n, a);
      };
    },
    40376: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => a });
      var l = t(84577),
        i = t(2135);
      function r() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_Logos($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      let a = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          a =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_logos_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          logos: children {\n            ... on "
                      )
                      .concat(
                        l,
                        "_logo_BlockType {\n              id\n              uid\n              siteId\n              typeHandle\n              button {\n                target\n                text\n                type\n                href: url\n                title\n              }\n              image {\n                id\n                uid\n                siteId\n                kind\n                width\n                height\n                url(width: 100)\n                primaryUrl: url\n                alt\n                ... on uploads_Asset {\n                  text\n                  plainText\n                  altTranslation: plainText2\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(r(), n, a);
      };
    },
    2363: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => a });
      var l = t(84577),
        i = t(2135);
      function r() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_Newsletter($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      let a = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          a =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_newsletter_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          mailchimpAudience\n          description: plainText\n          note: plainText2\n          doubleOptIn: lightswitch\n          button {\n            target\n            text\n            type\n            href: url\n            title\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(r(), n, a);
      };
    },
    76852: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => h });
      var l = t(74848),
        i = t(96836),
        r = t(23820),
        a = t.n(r),
        s = t(48936),
        o = t(96540),
        d = t(33473),
        c = t(89160),
        u = t(60598),
        m = t(72673);
      let p = (e) => {
        var n;
        let { showLinks: t, person: i, bg: r } = e;
        return (0, l.jsxs)(c.P.div, {
          initial: { opacity: 0, y: "20%" },
          whileInView: { opacity: 1, y: "0%" },
          transition: { duration: 1.5, ease: "easeOut" },
          viewport: { once: !0, amount: 0.5 },
          className: "person",
          children: [
            (0, l.jsx)(u.A, {
              asset: i.image,
              className: "w-full h-auto aspect-[19/25] object-cover mb-4",
              width: 480,
              ratio: 0.76,
              sizes: "(min-width: 1024px) 480px, 50vw",
            }),
            (0, l.jsx)("h4", {
              className: "r-text-xl text-asphalt",
              children: i.title,
            }),
            (0, l.jsx)("p", {
              className: "r-text-sm ".concat(r ? "text-asphalt" : "text-grey"),
              children: i.position,
            }),
            t &&
              (null === (n = i.links) || void 0 === n ? void 0 : n.length) >
                0 &&
              (0, l.jsx)("div", {
                className: "links mt-4",
                children: i.links.map((e, n) =>
                  (0, l.jsx)(
                    m.A,
                    {
                      className: "body-text underline",
                      href: e.href,
                      target: e.targe,
                      title: e.title,
                      children: e.text,
                    },
                    n
                  )
                ),
              }),
          ],
        });
      };
      i.os.registerPlugin(a(), s.ScrollTrigger);
      let h = (e) => {
        let {
            module: n,
            smallMargins: t = { top: !1, bottom: !1 },
            items: r,
            anchor: a,
          } = e,
          c = (0, o.useRef)(null),
          u = (0, o.useRef)(null);
        return (
          (0, d.E)(() => {
            if (!u.current || !n.addBackground) return;
            i.os.registerPlugin(s.ScrollTrigger);
            let e = i.os.timeline({
              scrollTrigger: {
                trigger: u.current,
                start: "top center",
                end: "bottom top",
                scrub: !0,
                scroller: window.matchMedia("(hover: none)").matches
                  ? "body"
                  : "#smooth-wrapper",
              },
            });
            return (
              e.to("body", { backgroundColor: "#F9F3EB", duration: 0.5 }),
              e.to("body", {
                backgroundColor: "#fff",
                delay: 1,
                duration: 0.5,
              }),
              () => {
                (null == e ? void 0 : e.kill) && e.kill(),
                  (document.body.style.backgroundColor = "#fff");
              }
            );
          }, [u.current, n.addBackground]),
          (0, l.jsx)("div", {
            id: "module-".concat(n.uid),
            className: "page-builder-block "
              .concat(n.typeHandle, "-block module-margin ")
              .concat(t.top ? "st" : "", " ")
              .concat(t.bottom ? "sb" : "", " relative")
              .concat(
                n.addBackground ? " z-40 py-16 sm:r-py-[6]" : "",
                " overflow-hidden"
              ),
            "data-anchor": a,
            ref: u,
            children: (0, l.jsxs)("div", {
              className: "container full",
              children: [
                n.title &&
                  (0, l.jsx)("h2", {
                    className:
                      "h2-text-alt mb-8 sm:r-mb-16 pb-5 border-b ".concat(
                        n.addBackground
                          ? "border-asphalt"
                          : "border-grey-border"
                      ),
                    children: n.title,
                  }),
                (0, l.jsx)("div", {
                  className: "people-content flex flex-col",
                  ref: c,
                  children:
                    null == r
                      ? void 0
                      : r.map((e) => {
                          var t;
                          return (0, l.jsxs)(
                            "div",
                            {
                              className:
                                "people w-full flex flex-col sm:flex-row gap-5 r-mt-[6.25] first:mt-0 group",
                              children: [
                                (0, l.jsx)("h3", {
                                  className:
                                    "r-text-2xl sm:r-text-xl sm:r-pt-[6.25] group-first:pt-0",
                                  children: e.title,
                                }),
                                (0, l.jsx)("div", {
                                  id: "group-".concat(e.id),
                                  className:
                                    "grid grid-cols-2 lg:grid-cols-3 gap-x-5 r-gap-y-16 w-full r-max-w-[64] ml-auto border-none sm:border-t group-first:border-0 ".concat(
                                      n.addBackground
                                        ? "border-asphalt"
                                        : "border-grey-border",
                                      " sm:r-pt-[6.25] group-first:pt-0"
                                    ),
                                  children:
                                    null === (t = e.people) || void 0 === t
                                      ? void 0
                                      : t.map((e, t) =>
                                          (0, l.jsx)(
                                            p,
                                            {
                                              person: e,
                                              showLinks: n.showLinks,
                                              bg: n.addBackground,
                                            },
                                            t
                                          )
                                        ),
                                }),
                              ],
                            },
                            e.id
                          );
                        }),
                }),
              ],
            }),
          })
        );
      };
    },
    27835: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => o, _: () => s });
      var l = t(84577),
        i = t(2135);
      function r() {
        let e = (0, l._)([
          '\n  query GetPeopleByCategory(\n    $relatedTo: [QueryArgument]\n    $siteId: [QueryArgument]\n  ) {\n    entries(section: "people", relatedTo: $relatedTo, siteId: $siteId) {\n      id\n      uid\n      siteId\n      title\n      ... on people_default_Entry {\n        position: plainText\n        category: peopleCategory {\n          id\n          uid\n          siteId\n          title\n        }\n        links {\n          ... on links_link_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            itemLink {\n              target\n              text\n              type\n              href: url\n              title\n            }\n          }\n        }\n        image {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          url(width: 100)\n          primaryUrl: url\n          alt\n          ... on uploads_Asset {\n            text\n            plainText\n            altTranslation: plainText2\n          }\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function a() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_People($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let s = [
          {
            query: (0, i.J1)(r()),
            variables: (e, n) => {
              var t, l;
              let [i] =
                  (null == e ? void 0 : e.entry) &&
                  (null == e ? void 0 : e.entry[n])
                    ? null == e
                      ? void 0
                      : e.entry[n]
                    : [],
                r = [];
              return (
                (null === (t = i.category) || void 0 === t
                  ? void 0
                  : t.length) &&
                  r.push(
                    ...(null == i
                      ? void 0
                      : null === (l = i.category) || void 0 === l
                      ? void 0
                      : l.map((e) => e.id))
                  ),
                { siteId: i.siteId, relatedTo: r }
              );
            },
            shouldRun: (e, n) => {
              var t;
              let [l] =
                (null == e ? void 0 : e.entry) &&
                (null == e ? void 0 : e.entry[n])
                  ? null == e
                    ? void 0
                    : e.entry[n]
                  : [];
              return !(
                (null == l
                  ? void 0
                  : null === (t = l.people) || void 0 === t
                  ? void 0
                  : t.length) > 0
              );
            },
          },
        ],
        o = (e) => {
          let { section: n, types: t = [], moduleSet: l = "modules" } = e,
            r =
              null == t
                ? void 0
                : t
                    .map((e) =>
                      "\n    ... on "
                        .concat(n, "_")
                        .concat(e, "_Entry {\n      ")
                        .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                        .concat(
                          l,
                          "_people_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          showLinks: lightswitch\n          addBackground: lightswitch2\n          category: peopleCategory {\n            id\n            uid\n            siteId\n            title\n          }\n          people {\n            id\n            uid\n            siteId\n            title\n            ... on people_default_Entry {\n              position: plainText\n              category: peopleCategory {\n                id\n                uid\n                siteId\n                title\n              }\n              links {\n                ... on links_link_BlockType {\n                  id\n                  uid\n                  siteId\n                  typeHandle\n                  itemLink {\n                    target\n                    text\n                    type\n                    href: url\n                    title\n                  }\n                }\n              }\n              image {\n                id\n                uid\n                siteId\n                kind\n                width\n                height\n                url(width: 100)\n                primaryUrl: url\n                alt\n                ... on uploads_Asset {\n                  text\n                  plainText\n                  altTranslation: plainText2\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "
                        )
                    )
                    .join("");
          return (0, i.J1)(a(), n, r);
        };
    },
    63240: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => a });
      var l = t(84577),
        i = t(2135);
      function r() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_ScriptBlock($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      let a = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          a =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_scriptBlock_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          code: monospace\n          text\n          consentType\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(r(), n, a);
      };
    },
    42384: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => a });
      var l = t(84577),
        i = t(2135);
      function r() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_SimpleCta($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      let a = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          a =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_simpleCta_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          text\n          image {\n            id\n            uid\n            siteId\n            kind\n            width\n            height\n            url(width: 100)\n            primaryUrl: url\n            alt\n            ... on uploads_Asset {\n              text\n              plainText\n              altTranslation: plainText2\n            }\n          }\n          button {\n            target\n            text\n            type\n            href: url\n            title\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(r(), n, a);
      };
    },
    20264: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => s });
      var l = t(84577),
        i = t(2135),
        r = t(45418);
      function a() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_Testimonials($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let s = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          s =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_testimonials_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          testimonials: children {\n            ... on "
                      )
                      .concat(
                        l,
                        "_testimonial_BlockType {\n              id\n              uid\n              siteId\n              typeHandle\n              text\n              author: plainText\n              position: plainText2\n              tags: testimonialTags {\n                ... on testimonials_Tag {\n                  id\n                  uid\n                  siteId\n                  title\n                }\n              }\n              "
                      )
                      .concat(
                        r.A,
                        "\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(a(), n, s);
      };
    },
    28808: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => d });
      var l = t(74848),
        i = t(89160),
        r = t(52818),
        a = t(3027),
        s = t(89853),
        o = t(94203);
      let d = (e) => {
        var n;
        let { module: t, smallMargins: d = {}, anchor: c } = e;
        return (0, l.jsxs)("div", {
          id: "module-".concat(t.uid),
          className: "page-builder-block "
            .concat(t.typeHandle, "-block container full module-margin ")
            .concat(d.top ? "st" : "", " ")
            .concat(d.bottom ? "sb" : ""),
          "data-anchor": c,
          children: [
            t.title &&
              (0, l.jsxs)("h2", {
                className: "h2-text-alt text-asphalt mb-10 sm:r-mb-20",
                children: [
                  (0, l.jsx)(r.A, { children: t.title }),
                  (0, l.jsx)(i.P.div, {
                    className:
                      "w-full h-[1px] bg-grey-border r-mt-5 origin-left",
                    variants: { hidden: { scaleX: 0 }, visible: { scaleX: 1 } },
                    transition: {
                      duration: 1.5,
                      ease: [0.04, 0.62, 0.23, 0.98],
                      delay: 0.2,
                    },
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0, threshold: 1 },
                  }),
                ],
              }),
            (0, l.jsx)("div", {
              className: "text-blocks flex flex-col r-gap-20",
              children:
                null == t
                  ? void 0
                  : null === (n = t.blocks) || void 0 === n
                  ? void 0
                  : n.map((e) => {
                      var n, t;
                      return (0, l.jsxs)(
                        i.P.div,
                        {
                          className:
                            "text-block r-max-w-[41.25] w-full ".concat(
                              "left" === e.blockAlignment
                                ? "sm:mr-auto sm:r-pr-5"
                                : "sm:ml-auto sm:r-pl-5"
                            ),
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: { once: !0, threshold: 0.3 },
                          variants: {
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 },
                          },
                          transition: {
                            duration: 1.5,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                          children: [
                            e.title &&
                              (0, l.jsx)("h3", {
                                className: "h3-text r-mb-5",
                                children: e.title,
                              }),
                            (0, l.jsx)("div", {
                              className: "wysiwyg r-text-lg",
                              children: (0, l.jsx)(o.A, { content: e.text }),
                            }),
                            ((null === (n = e.button) || void 0 === n
                              ? void 0
                              : n.href) ||
                              (null === (t = e.secondaryButton) || void 0 === t
                                ? void 0
                                : t.href)) &&
                              (0, l.jsxs)("div", {
                                className:
                                  "button flex items-center r-gap-6 r-mt-10",
                                children: [
                                  (0, l.jsx)(a.A, { linkProps: e.button }),
                                  (0, l.jsx)(s.A, {
                                    linkProps: e.secondaryButton,
                                  }),
                                ],
                              }),
                          ],
                        },
                        "block-".concat(e.uid)
                      );
                    }),
            }),
          ],
        });
      };
    },
    15871: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => a });
      var l = t(84577),
        i = t(2135);
      function r() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_Text($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      let a = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          a =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_text_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          blocks: children {\n            ... on "
                      )
                      .concat(
                        l,
                        "_textBlock_BlockType {\n              id\n              uid\n              siteId\n              typeHandle\n              title: moduleTitle\n              blockAlignment\n              text: text4\n              button {\n                target\n                text\n                type\n                href: url\n                title\n              }\n              secondaryButton: button2 {\n                target\n                text\n                type\n                href: url\n                title\n              }\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(r(), n, a);
      };
    },
    56080: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => s });
      var l = t(84577),
        i = t(45418),
        r = t(2135);
      function a() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_TextAndMedia($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let s = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          s =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_textAndMedia_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          blockAlignment\n          fullHeight: lightswitch\n          maintainRatio: lightswitch2\n          items: children {\n            ...  on "
                      )
                      .concat(
                        l,
                        "_textAndMediaItem_BlockType {\n              id\n              uid\n              siteId\n              typeHandle\n              title: moduleTitle\n              menuTitle: plainText\n              "
                      )
                      .concat(
                        i.A,
                        "\n              children {\n                ... on "
                      )
                      .concat(
                        l,
                        "_wysiwyg_BlockType {\n                  id\n                  uid\n                  siteId\n                  typeHandle\n                  text: text4\n                  biggerFont: lightswitch\n                }\n                ... on "
                      )
                      .concat(
                        l,
                        "_tags_BlockType {\n                  id\n                  uid\n                  siteId\n                  typeHandle\n                  title: moduleTitle\n                  tags: children {\n                    ... on "
                      )
                      .concat(
                        l,
                        "_tag_BlockType {\n                      id\n                      uid\n                      siteId\n                      typeHandle\n                      title: moduleTitle\n                    }\n                  }\n                }\n                ... on "
                      )
                      .concat(
                        l,
                        "_buttonsImages_BlockType {\n                  id\n                  uid\n                  siteId\n                  typeHandle\n                  items: children {\n                    ... on "
                      )
                      .concat(
                        l,
                        "_buttonImage_BlockType {\n                      id\n                      uid\n                      siteId\n                      typeHandle\n                      button {\n                        target\n                        text\n                        type\n                        href: url\n                        title\n                      }  \n                      image {\n                        id\n                        uid\n                        siteId\n                        kind\n                        width\n                        height\n                        url(width: 100)\n                        primaryUrl: url\n                        alt\n                        ... on uploads_Asset {\n                          text\n                          plainText\n                          altTranslation: plainText2\n                        }\n                      }\n                    }\n                  }\n                }\n                ... on "
                      )
                      .concat(
                        l,
                        "_orderedList_BlockType {\n                  id\n                  uid\n                  siteId\n                  typeHandle\n                  items: children {\n                    ... on "
                      )
                      .concat(
                        l,
                        "_listItem_BlockType {\n                      id\n                      uid\n                      siteId\n                      typeHandle\n                      title: moduleTitle\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, r.J1)(a(), n, s);
      };
    },
    66547: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => s });
      var l = t(84577),
        i = t(2135),
        r = t(45418);
      function a() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_TextAndMedia($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let s = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          s =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_textGrid_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          text\n          button {\n            target\n            text\n            type\n            href: url\n            title\n          }\n          media1: "
                      )
                      .concat(r.A, "\n          media2: ")
                      .concat((0, r.w)("mediaElement2"), "\n          media3: ")
                      .concat(
                        (0, r.w)("mediaElement3"),
                        "\n          textBlocks: children {\n            ... on "
                      )
                      .concat(
                        l,
                        "_gridColumn_BlockType {\n              id\n              uid\n              siteId\n              typeHandle\n              title: moduleTitle\n              pretitle: plainText\n              text\n              button {\n                target\n                text\n                type\n                href: url\n                title\n              }\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(a(), n, s);
      };
    },
    61912: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => a });
      var l = t(84577),
        i = t(2135);
      function r() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_ThreeProducts($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      let a = (e) => {
        let { section: n, types: t = [], moduleSet: l = "modules" } = e,
          a =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_threeProducts_BlockType {\n          id\n          uid\n          siteId\n          typeHandle\n          title: moduleTitle\n          products: children {\n            ... on "
                      )
                      .concat(
                        l,
                        "_product_BlockType {\n              id\n              uid\n              siteId\n              title: moduleTitle\n              typeHandle\n              chargers\n              chargerLabels: chargers(label: true)\n              button {\n                target\n                text\n                href: url\n                type\n                title\n              }\n              columns: children {\n                ... on "
                      )
                      .concat(
                        l,
                        "_column_BlockType {\n                  id\n                  uid\n                  siteId\n                  title: moduleTitle\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(r(), n, a);
      };
    },
    55867: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => s });
      var l = t(84577),
        i = t(2135),
        r = t(45418);
      function a() {
        let e = (0, l._)([
          "\n    query Entry_",
          "_Quote($section: [String], $uri: [String], $siteId: [QueryArgument], $uid: [String]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let s = (e) => {
        let { section: n, types: t = [], moduleSet: l } = e,
          s =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      ")
                      .concat(l, "(level: 1, uid: $uid) {\n        ... on ")
                      .concat(
                        l,
                        "_timeline_BlockType {\n          uid\n          id\n          siteId\n          typeHandle\n          items: children {\n            ... on "
                      )
                      .concat(
                        l,
                        "_timelineItem_BlockType {\n              id\n              uid\n              siteId\n              year: plainText\n              title: moduleTitle\n              text\n              media: children {\n                ... on "
                      )
                      .concat(
                        l,
                        "_mediaItems_BlockType {\n                  id\n                  uid\n                  siteId\n                  typeHandle\n                  "
                      )
                      .concat(
                        r.A,
                        "\n                  credit: plainText\n                  description: text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "
                      )
                  )
                  .join("");
        return (0, i.J1)(a(), n, s);
      };
    },
    25828: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => u });
      var l = t(74848),
        i = t(14953),
        r = t.n(i),
        a = t(86715),
        s = t(19602),
        o = t(72673);
      let d = (e) => {
          let { checked: n, href: t, title: i } = e;
          return (0, l.jsxs)(o.A, {
            href: t,
            className: "inline-flex gap-2 items-center ".concat(
              n ? "text-asphalt" : "text-grey hover:text-asphalt",
              " transition-colors duration-200"
            ),
            children: [
              (0, l.jsx)("span", {
                className:
                  "radio w-4 h-4 rounded-full border border-current inline-flex items-center justify-center",
                children: (0, l.jsx)("span", {
                  className:
                    "radio-inner w-2 h-2 rounded-full bg-asphalt ".concat(
                      n ? "opacity-100" : "opacity-0",
                      " transition-opacity duration-200"
                    ),
                }),
              }),
              i,
            ],
          });
        },
        c = r()(() => Promise.resolve().then(t.bind(t, 93731)), {
          loadableGenerated: { webpack: () => [93731] },
          ssr: !1,
        }),
        u = (e) => {
          let {
              allFilter: n,
              filters: t,
              entry: i,
              className: r,
              allLabel: o,
              title: u,
            } = e,
            m = (0, a.useRouter)(),
            p = (0, s.U)("only screen and (max-width: 640px)");
          return (0, l.jsxs)(l.Fragment, {
            children: [
              u &&
                (0, l.jsx)("h2", {
                  className: "r-text-xs r-mb-5",
                  children: u,
                }),
              (0, l.jsx)("div", {
                className:
                  "news-filters flex items-center r-gap-6 relative z-30 ".concat(
                    r
                  ),
                children: p
                  ? (0, l.jsx)(c, {
                      className: "w-full",
                      options: [
                        { value: null == n ? void 0 : n.url, label: o },
                        ...(null == t
                          ? void 0
                          : t.map((e) => ({
                              value: null == e ? void 0 : e.url,
                              label: null == e ? void 0 : e.title,
                            }))),
                      ],
                      value: i
                        ? {
                            value: null == i ? void 0 : i.url,
                            label: null == i ? void 0 : i.title,
                          }
                        : { value: null == n ? void 0 : n.url, label: o },
                      defaultValue: {
                        value: null == n ? void 0 : n.url,
                        label: o,
                      },
                      onChange: (e) => {
                        m.push(e.value);
                      },
                      styles: {
                        control: (e) => ({
                          ...e,
                          backgroundColor: "#fbfbfb",
                          fontSize: "0.875rem",
                        }),
                        option: (e, n) => ({
                          ...e,
                          backgroundColor: n.isSelected ? "#19312f" : "#ffffff",
                          fontSize: "0.875rem",
                        }),
                      },
                    })
                  : (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(d, {
                          checked: (null == n ? void 0 : n.uid) === i.uid,
                          href: null == n ? void 0 : n.url,
                          title: o,
                        }),
                        null == t
                          ? void 0
                          : t.map((e, n) =>
                              (0, l.jsx)(
                                d,
                                {
                                  checked:
                                    (null == e ? void 0 : e.uid) === i.uid,
                                  href: null == e ? void 0 : e.url,
                                  title: null == e ? void 0 : e.title,
                                },
                                "filter-".concat(n)
                              )
                            ),
                      ],
                    }),
              }),
            ],
          });
        };
    },
    53731: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => d, P: () => o });
      var l = t(84577),
        i = t(2135),
        r = t(45418);
      function a() {
        let e = (0, l._)([
          '\n  query Accessory_Categories($siteId: [QueryArgument]) {\n    categories(group: "accessoryCategories", siteId: $siteId) {\n      id\n      uid\n      siteId\n      title\n    }\n  }\n',
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        let e = (0, l._)([
          "\n    query Entry_pages_list_Accessories($type: [String], $siteId: [QueryArgument], $limit: Int = 18, $relatedTo: [QueryArgument], $offset: Int = 0) {\n      entries(section: $type, siteId: $siteId, limit: $limit, relatedTo: $relatedTo, offset: $offset){\n        id\n        uid\n        siteId\n        url\n        ... on accessories_default_Entry {\n          title\n          mediaItems {\n            ... on mediaItems_items_BlockType {\n              id\n              uid\n              siteId\n              ",
          "\n            }\n          }\n        }\n      }\n      total: entryCount(section: $type, siteId: $siteId, relatedTo: $relatedTo)\n    }\n  ",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      let o = (0, i.J1)(a()),
        d = () => (0, i.J1)(s(), r.A);
    },
    52818: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => u });
      var l = t(74848),
        i = t(17784),
        r = t.n(i),
        a = t(48936),
        s = t.n(a),
        o = t(96836),
        d = t(96540),
        c = t(33473);
      let u = (e) => {
        let {
            children: n,
            dangerouslySetInnerHTML: t = !1,
            speed: i = 1.5,
            stagger: a = 0.15,
            once: u = !0,
          } = e,
          m = (0, d.useRef)(null);
        return (
          (0, c.E)(() => {
            if (!m.current) return;
            o.os.registerPlugin(r(), s());
            let e = new (r())(m.current, {
                type: "lines, words",
                linesClass: "lineChildren overflow-hidden",
                wordsClass: "wordChildren",
              }),
              n = o.os.timeline({
                ease: "power2.out",
                onStart: () => {
                  var e;
                  null === (e = m.current) ||
                    void 0 === e ||
                    e.classList.remove("opacity-0");
                },
                delay: 0.2,
                paused: !0,
              });
            e.lines.forEach((e) => {
              n.fromTo(
                e.querySelectorAll(".wordChildren"),
                { y: "100%" },
                { y: 0, duration: i, ease: "power2.out" },
                "<".concat(a)
              );
            });
            let t = s().create({
              once: u,
              trigger: m.current.parentElement,
              start: "top 80%",
              end: "bottom 20%",
              onEnter: () => {
                n.play();
              },
            });
            return () => {
              null == t || t.kill(),
                null == n || n.kill(),
                null == e || e.revert();
            };
          }, [i, a, u]),
          t
            ? (0, l.jsx)("div", {
                ref: m,
                className: "opacity-0 text-animation",
                dangerouslySetInnerHTML: { __html: n },
              })
            : (0, l.jsx)("span", {
                ref: m,
                className: "opacity-0 text-animation",
                children: n,
              })
        );
      };
    },
    94203: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => h });
      var l = t(74848),
        i = t(10900),
        r = t(29965),
        a = t.n(r),
        s = t(42201),
        o = t(48936),
        d = t.n(o),
        c = t(96540),
        u = t(15385);
      let m = (e) => {
          let { src: n, alt: t, w: i, h: r } = e,
            [s, o] = (0, c.useState)(!1),
            [m, p] = (0, c.useState)(n);
          return (
            (0, c.useEffect)(() => {
              d().refresh();
            }, [s]),
            (0, l.jsx)(a(), {
              src: m,
              alt: t,
              width: i || 800,
              height: r || 800,
              onLoad: () => {
                o(!0);
              },
              onError: () => {
                p(u.A);
              },
            })
          );
        },
        p = (e) => {
          if ("tag" === e.type && "img" === e.name) {
            let { src: n, alt: t, width: i, height: r } = e.attribs,
              a = /^\d+px$/.test(i),
              s = /^\d+px$/.test(r),
              o = /^\d+%$/.test(i),
              d = /^\d+%$/.test(r),
              c = a && !o ? i : 800,
              u = s && !d ? r : 800;
            return (0, l.jsx)(m, { src: n, alt: t || "", width: c, height: u });
          }
          if ("tag" === e.type && "iframe" === e.name) {
            let { src: n } = e.attribs;
            if (n.includes("youtube.com/embed"))
              return (0, l.jsx)(s.A, {
                asset: {
                  kind: "json",
                  embeddedAsset: {
                    type: "video",
                    providerName: "youtube",
                    url: n,
                    image: "https://img.youtube.com/vi/".concat(
                      n.split("/").pop(),
                      "/hqdefault.jpg"
                    ),
                  },
                },
                style: { aspectRatio: "16/9" },
                settings: { autoplay: !1, loop: !1, muted: !1, controls: !0 },
              });
          } else if ("tag" === e.type && "td" === e.name)
            return (0, l.jsx)("td", {
              style: { whiteSpace: "pre-wrap" },
              children: (0, i.zd)(e.children),
            });
        },
        h = (e) => {
          let { content: n } = e;
          return n && "string" == typeof n
            ? (0, i.Ay)(n, { replace: p })
            : null;
        };
    },
    33473: (e, n, t) => {
      "use strict";
      t.d(n, { E: () => l });
      let l = t(96540).useLayoutEffect;
    },
    68650: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { __N_SSG: () => ik, default: () => iN });
      var l,
        i,
        r,
        a,
        s,
        o,
        d,
        c,
        u,
        m,
        p,
        h,
        g,
        x,
        v,
        f,
        w,
        y = {};
      t.r(y), t.d(y, { home: () => eX });
      var b = {};
      t.r(b), t.d(b, { accessories: () => nR, knowledgeHub: () => nM });
      var A = {};
      t.r(A),
        t.d(A, {
          default: () => nr,
          irPages: () => tw,
          list: () => nO,
          simple: () => nG,
        });
      var j = {};
      t.r(j), t.d(j, { notFound: () => ty });
      var I = {};
      t.r(I), t.d(I, { search: () => tB });
      var k = {};
      t.r(k), t.d(k, { default: () => tq });
      var N = {};
      t.r(N), t.d(N, { default: () => t9, legacy: () => la });
      var _ = {};
      t.r(_),
        t.d(_, {
          accessories: () => k,
          home: () => y,
          knowledgeHub: () => N,
          notFound: () => j,
          pages: () => A,
          search: () => I,
        });
      var T = t(74848),
        M = t(1723),
        $ = t(84577),
        E = t(2135),
        S = t(45418);
      function C() {
        let e = (0, $._)([
          "\n    query Entry_",
          "_HomeHero($uri: [String], $siteId: [QueryArgument]) {\n      entry(uri: $uri, siteId: $siteId){\n        id\n        uid\n        siteId\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      let D = (e) => {
        let { section: n, types: t = [] } = e,
          l =
            null == t
              ? void 0
              : t
                  .map((e) =>
                    "\n    ... on "
                      .concat(n, "_")
                      .concat(e, "_Entry {\n      id\n      title\n      ")
                      .concat(S.A, "\n    }\n  ")
                  )
                  .join("");
        return (0, E.J1)(C(), n, l);
      };
      var B = t(96540),
        H = t(32578),
        P = t(96836),
        L = t(23820),
        R = t.n(L),
        O = t(48936),
        Q = t.n(O),
        U = t(33473),
        q = t(90058),
        z = t(89853),
        F = t(52818);
      function G() {
        return (G = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var V = (0, B.forwardRef)(function (e, n) {
        return B.createElement(
          "svg",
          G(
            {
              viewBox: "0 0 25 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "scroll-down_svg__bottom",
              ref: n,
            },
            e
          ),
          l ||
            (l = B.createElement("path", { d: "M12.5 7v10m0 0 5-5m-5 5-5-5" }))
        );
      });
      P.os.registerPlugin(R(), Q());
      let J = (e) => {
        var n;
        let { globals: t } = e,
          l = (0, H.useTranslations)("common"),
          i = (0, B.useRef)(null),
          r = (0, B.useRef)(null),
          a = (0, B.useRef)(null),
          s = (0, B.useRef)(null),
          { currentSite: o, routeProps: d, currentRoute: c } = t || {},
          u = D({
            section: null == c ? void 0 : c.cms.section,
            types: null == c ? void 0 : c.cms.types,
          }),
          { data: m } = (0, M.I)(u, {
            variables: { uri: d.uri, siteId: null == o ? void 0 : o.siteId },
          }),
          { entry: p } = m || {};
        if (
          ((0, U.E)(() => {
            if (!r.current) return;
            let e = P.os.matchMedia();
            return (
              e.add("(min-width: 768px)", () => {
                let e = P.os.fromTo(
                  r.current,
                  {
                    yPercent: 0,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  },
                  {
                    yPercent: 70,
                    clipPath:
                      "polygon(1.5% 1.5%, 98.5% 1.5%, 98.5% 98.5%, 1.5% 98.5%)",
                    ease: "none",
                    scrollTrigger: {
                      trigger: i.current,
                      start: "top top",
                      end: "bottom top",
                      scrub: !0,
                      scroller: window.matchMedia("(hover: none)").matches
                        ? "body"
                        : "#smooth-wrapper",
                    },
                  }
                );
                return () => {
                  e.kill();
                };
              }),
              e.add("(max-width: 767px)", () => {
                let e = P.os.fromTo(
                  r.current,
                  {
                    yPercent: 0,
                    clipPath: () => {
                      let e = window.innerWidth,
                        n = r.current.offsetHeight;
                      return "polygon(0px 0px, "
                        .concat(e, "px 0px, ")
                        .concat(e, "px ")
                        .concat(n, "px, 0px ")
                        .concat(n, "px)");
                    },
                  },
                  {
                    yPercent: 70,
                    clipPath: () => {
                      let e = window.innerWidth,
                        n = r.current.offsetHeight;
                      return "polygon(16px 16px, "
                        .concat(e - 16, "px 16px, ")
                        .concat(e - 16, "px ")
                        .concat(n - 16, "px, 16px ")
                        .concat(n - 16, "px)");
                    },
                    ease: "none",
                    scrollTrigger: {
                      trigger: i.current,
                      start: "top top",
                      end: "bottom top",
                      scrub: !0,
                      scroller: window.matchMedia("(hover: none)").matches
                        ? "body"
                        : "#smooth-wrapper",
                    },
                  }
                );
                return () => {
                  e.kill();
                };
              }),
              () => {
                e.revert();
              }
            );
          }, [r.current]),
          !p)
        )
          return null;
        let h =
          (null == p
            ? void 0
            : null === (n = p.mediaElement) || void 0 === n
            ? void 0
            : n[0]) || null;
        return (0, T.jsxs)("div", {
          className:
            "home-hero w-full h-screen relative isolate flex items-start sm:items-end pt-40 sm:pt-0 overflow-hidden",
          ref: i,
          children: [
            (0, T.jsx)("div", {
              className:
                "media-wrapper absolute top-0 left-0 -z-10 w-full h-full bg-asphalt",
              ref: r,
              children: (0, T.jsx)(q.A, {
                className: "w-full h-full object-cover",
                media: h,
                showCaption: !1,
                priority: !0,
                preload: "none",
                width: 1920,
                height: 1080,
                videoClassName: "object-cover",
              }),
            }),
            (0, T.jsx)("div", {
              className: "container full text-white r-pb-[5.75]",
              children: (0, T.jsxs)("div", {
                className:
                  "title-wrapper flex flex-wrap r-gap-x-8 justify-between items-end",
                ref: s,
                children: [
                  (0, T.jsx)("h1", {
                    className:
                      "text-6xl sm:h1-text leading-none sm:leading-tight text-sand-light md:text-[clamp(102px,11vw,400px)] md:whitespace-nowrap",
                    ref: a,
                    children: (0, T.jsx)(F.A, { children: p.title }),
                  }),
                  (0, T.jsx)(z.A, {
                    type: "button",
                    className:
                      "ml-auto hidden sm:inline-flex full-white no-icon-wrapper",
                    Icon: () =>
                      (0, T.jsx)("span", {
                        className:
                          "border border-white flex items-center justify-center rounded-full w-6 h-6",
                        children: (0, T.jsx)(V, {
                          className: "w-3 bottom-icon",
                        }),
                      }),
                    onClick: () => {
                      let e = i.current.offsetHeight;
                      P.os.to(window, {
                        duration: 1,
                        scrollTo: { y: e, autoKill: !1 },
                        ease: "power2.out",
                      });
                    },
                    children: l("Scroll down"),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var Z = t(31370),
        Y = t(14953),
        X = t.n(Y),
        W = t(15871),
        K = t(56080),
        ee = t(51410),
        en = t(70587),
        et = t(47158),
        el = t(42535),
        ei = t(42384),
        er = t(55726),
        ea = t(53594),
        es = t(28182),
        eo = t(66547),
        ed = t(13972),
        ec = t(27835),
        eu = t(20748),
        em = t(41424),
        ep = t(74075),
        eh = t(56788),
        eg = t(20264),
        ex = t(44857),
        ev = t(40376),
        ef = t(55867),
        ew = t(61912),
        ey = t(2363),
        eb = t(63240);
      let eA = X()(() => t.e(6183).then(t.bind(t, 36183)), {
          loadableGenerated: { webpack: () => [36183] },
        }),
        ej = X()(() => t.e(9033).then(t.bind(t, 59033)), {
          loadableGenerated: { webpack: () => [59033] },
        }),
        eI = X()(() => t.e(1973).then(t.bind(t, 61973)), {
          loadableGenerated: { webpack: () => [61973] },
        }),
        ek = X()(() => t.e(5854).then(t.bind(t, 25854)), {
          loadableGenerated: { webpack: () => [25854] },
        }),
        eN = X()(() => t.e(5739).then(t.bind(t, 45739)), {
          loadableGenerated: { webpack: () => [45739] },
        }),
        e_ = X()(() => t.e(8191).then(t.bind(t, 68191)), {
          loadableGenerated: { webpack: () => [68191] },
        }),
        eT = X()(() => t.e(9856).then(t.bind(t, 59856)), {
          loadableGenerated: { webpack: () => [59856] },
        }),
        eM = X()(() => t.e(4034).then(t.bind(t, 74034)), {
          loadableGenerated: { webpack: () => [74034] },
        }),
        e$ = X()(() => t.e(6295).then(t.bind(t, 86295)), {
          loadableGenerated: { webpack: () => [86295] },
        }),
        eE = X()(() => t.e(3198).then(t.bind(t, 43198)), {
          loadableGenerated: { webpack: () => [43198] },
        }),
        eS = X()(() => t.e(5747).then(t.bind(t, 5747)), {
          loadableGenerated: { webpack: () => [5747] },
        }),
        eC = X()(() => t.e(4476).then(t.bind(t, 64476)), {
          loadableGenerated: { webpack: () => [64476] },
        }),
        eD = X()(() => t.e(43).then(t.bind(t, 10043)), {
          loadableGenerated: { webpack: () => [10043] },
        }),
        eB = X()(() => t.e(2356).then(t.bind(t, 82356)), {
          loadableGenerated: { webpack: () => [82356] },
        }),
        eH = X()(() => t.e(9501).then(t.bind(t, 29501)), {
          loadableGenerated: { webpack: () => [29501] },
        }),
        eP = X()(() => t.e(3755).then(t.bind(t, 93755)), {
          loadableGenerated: { webpack: () => [93755] },
        }),
        eL = X()(() => t.e(1884).then(t.bind(t, 41884)), {
          loadableGenerated: { webpack: () => [41884] },
        }),
        eR = X()(() => t.e(4208).then(t.bind(t, 34208)), {
          loadableGenerated: { webpack: () => [34208] },
        }),
        eO = X()(
          () =>
            Promise.all([t.e(3139), t.e(7388), t.e(7156), t.e(1786)]).then(
              t.bind(t, 51786)
            ),
          { loadableGenerated: { webpack: () => [51786] } }
        ),
        eQ = X()(() => t.e(8).then(t.bind(t, 30008)), {
          loadableGenerated: { webpack: () => [30008] },
        }),
        eU = X()(() => t.e(994).then(t.bind(t, 40994)), {
          loadableGenerated: { webpack: () => [40994] },
        }),
        eq = X()(
          () => Promise.all([t.e(801), t.e(1544)]).then(t.bind(t, 51544)),
          { loadableGenerated: { webpack: () => [51544] } }
        ),
        ez = X()(
          () =>
            Promise.all([t.e(7938), t.e(2505), t.e(4571)]).then(
              t.bind(t, 84571)
            ),
          { loadableGenerated: { webpack: () => [84571] } }
        ),
        eF = X()(() => t.e(9864).then(t.bind(t, 69864)), {
          loadableGenerated: { webpack: () => [69864] },
        }),
        eG = {
          modules: [
            "text",
            "textAndMedia",
            "animatedText",
            "knowledgeHub",
            "gallery",
            "children",
            "simpleCta",
            "accordionList",
            "accessories",
            "banner",
            "textGrid",
            "bigNumbers",
            "people",
            "iconCards",
            "contentCards",
            "ctaS",
            "linkList",
            "testimonials",
            "findInstaller",
            "logos",
            "timeline",
            "threeProducts",
            "newsletter",
            "scriptBlock",
          ],
        };
      W.A,
        K.A,
        ee.A,
        en.Ay,
        en._2,
        et.A,
        el.A,
        ei.A,
        er.A,
        ea.Ay,
        ea._2,
        es.A,
        eo.A,
        ed.A,
        ec.A,
        ec._,
        eu.A,
        em.A,
        ep.A,
        eh.A,
        eg.A,
        ex.Ay,
        ev.A,
        ef.A,
        ew.A,
        ey.A,
        eb.A;
      let eV = {
        text: eA,
        textAndMedia: ej,
        animatedText: eI,
        knowledgeHub: ek,
        gallery: eN,
        children: e_,
        simpleCta: eT,
        accordionList: eM,
        accessories: e$,
        banner: eE,
        textGrid: eS,
        bigNumbers: eC,
        people: eD,
        iconCards: eB,
        contentCards: eH,
        ctaS: eP,
        linkList: eL,
        testimonials: eR,
        findInstaller: eO,
        logos: eQ,
        timeline: eU,
        threeProducts: eq,
        newsletter: ez,
        scriptBlock: eF,
      };
      function eJ() {
        let e = (0, $._)([
          "\n    query Entry_",
          "_Modules($section: [String], $uri: [String], $siteId: [QueryArgument!]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        siteId\n        id\n        uid\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (eJ = function () {
            return e;
          }),
          e
        );
      }
      let eZ = (e) => {
          let { section: n, types: t = [], moduleSet: l = "modules" } = e,
            i =
              null == t
                ? void 0
                : t
                    .map((e) =>
                      "\n    ... on "
                        .concat(n, "_")
                        .concat(e, "_Entry {\n      ")
                        .concat(l, "(level: 1) {\n        ")
                        .concat(
                          eG[l]
                            .map((e) =>
                              "\n          ... on "
                                .concat(l, "_")
                                .concat(
                                  e,
                                  "_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            smallMargins\n            anchor\n          }\n        "
                                )
                            )
                            .join(""),
                          "\n      }\n    }\n  "
                        )
                    )
                    .join("");
          return (0, E.J1)(eJ(), n, i);
        },
        eY = (0, Z.WQ)("ui")(
          (0, Z.PA)((e) => {
            let {
                globals: n,
                containerClass: t = "",
                type: l = "modules",
                ui: i,
              } = e,
              { currentSite: r, currentRoute: a, routeProps: s } = n || {},
              o = eZ({
                section: null == a ? void 0 : a.cms.section,
                types: null == a ? void 0 : a.cms.types,
                moduleSet: l,
              }),
              { data: d } = (0, M.I)(o, {
                variables: {
                  section: null == a ? void 0 : a.cms.section,
                  uri: s.uri,
                  siteId: null == r ? void 0 : r.siteId,
                },
              });
            if (
              ((0, B.useEffect)(() => {
                let e = () => {
                  let { hash: e } = window.location;
                  if (e) {
                    let n = '[data-anchor="'
                      .concat(
                        (function () {
                          let {
                            protocol: e,
                            hostname: n,
                            port: t,
                            pathname: l,
                            search: i,
                          } = window.location;
                          return ""
                            .concat(e, "//")
                            .concat(n)
                            .concat(t ? ":".concat(t) : "")
                            .concat(l)
                            .concat(i);
                        })()
                      )
                      .concat(e, '"]');
                    setTimeout(() => {
                      let t = document.querySelector(n);
                      if (
                        (t ||
                          (t = document.querySelector(
                            '[data-anchor="'.concat(e, '"]')
                          )),
                        t ||
                          (t = document.querySelector(
                            '[data-anchor="'.concat(e.replace("#", ""), '"]')
                          )),
                        t)
                      ) {
                        let l = 0;
                        if (t.dataset.offset)
                          l += parseInt(t.dataset.offset, 10);
                        else {
                          let e = parseInt(
                            window
                              .getComputedStyle(t)
                              .getPropertyValue("margin-top"),
                            10
                          );
                          if (e) l += e;
                          else {
                            let e = document.querySelector(".top-bar");
                            e && (l += e.offsetHeight);
                          }
                        }
                        i.smoother
                          ? P.Ay.to(i.smoother, {
                              duration: 2,
                              scrollTo: i.smoother.offset(
                                t,
                                "top ".concat(l, "px")
                              ),
                              ease: "power4.inOut",
                              onComplete: () => {
                                let t = document.querySelector(n);
                                t ||
                                  (t = document.querySelector(
                                    '[data-anchor="'.concat(e, '"]')
                                  )),
                                  t ||
                                    (t = document.querySelector(
                                      '[data-anchor="'.concat(
                                        e.replace("#", ""),
                                        '"]'
                                      )
                                    )),
                                  i.smoother.scrollTop() <
                                    i.smoother.offset(
                                      t,
                                      "top ".concat(l, "px")
                                    ) &&
                                    i.smoother.scrollTop(
                                      i.smoother.offset(
                                        t,
                                        "top ".concat(l, "px")
                                      )
                                    );
                              },
                            })
                          : P.Ay.to(window, {
                              duration: 1,
                              scrollTo: { y: t, offsetY: l },
                              ease: "power4.inOut",
                            });
                      }
                    }, 2e3);
                  }
                };
                return (
                  e(),
                  window.addEventListener("hashchange", e),
                  () => {
                    window.removeEventListener("hashchange", e);
                  }
                );
              }, [d, i.menuState, i.menuRef, i.smoother]),
              !(null == d ? void 0 : d.entry) ||
                !d.entry[l] ||
                0 === d.entry[l].length)
            )
              return null;
            let c = d.entry[l];
            return (0, T.jsx)("section", {
              className: "modules ".concat(t),
              children: c.map((e, n) => {
                let t = eV[e.typeHandle],
                  i = { top: !1, bottom: !1 };
                return (n > 0 && (i.top = c[n - 1].smallMargins),
                n < c.length - 1 && (i.bottom = c[n + 1].smallMargins),
                e.smallMargins && ((i.top = !0), (i.bottom = !0)),
                t)
                  ? (0, T.jsx)(
                      t,
                      {
                        moduleSet: l,
                        uid: e.uid,
                        globals: {
                          currentSite: r,
                          currentRoute: a,
                          routeProps: s,
                        },
                        smallMargins: i,
                        index: n,
                        anchor: e.anchor,
                      },
                      "".concat((e.uid || e.id) + n, "-module")
                    )
                  : null;
              }),
            });
          })
        ),
        eX = (e) => {
          let { globals: n } = e;
          return (0, T.jsxs)("div", {
            className: "w-full",
            children: [
              (0, T.jsx)(J, { globals: n }),
              (0, T.jsx)(eY, { globals: n }),
            ],
          });
        };
      var eW = t(89160),
        eK = t(94203),
        e0 = t(3027),
        e1 = t(74728),
        e2 = t.n(e1),
        e5 = t(4536);
      let e4 = X()(() => t.e(4242).then(t.bind(t, 34242)), {
          loadableGenerated: { webpack: () => [34242] },
          ssr: !1,
          loading: () => 0,
        }),
        e3 = (e) => {
          let { item: n, index: t, addLine: l } = e,
            [i, r] = (0, B.useState)(0);
          return (0, T.jsxs)(
            eW.P.div,
            {
              className: "col-span-1 relative",
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, amount: 0.5 },
              transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.4 + 0.05 * t,
              },
              onAnimationComplete: () => {
                n.number && r(n.number);
              },
              children: [
                l &&
                  (0, T.jsx)("div", {
                    className:
                      "line hidden sm:block absolute left-full top-1/2 -translate-y-1/2 w-[1px] r-h-20 ml-1 md:r-ml-12 bg-grey-border",
                  }),
                "numberColumn" === n.typeHandle
                  ? (0, T.jsxs)("h2", {
                      className: "text-forest r-text-xl mb-3 flex items-center",
                      children: [
                        n.prefix &&
                          (0, T.jsx)("span", {
                            className: "prefix",
                            children: n.prefix,
                          }),
                        (0, T.jsx)(e4, {
                          value: i,
                          format: "d",
                          duration: 500,
                          theme: "minimal",
                        }),
                        n.suffix &&
                          (0, T.jsx)("span", {
                            className: "suffix",
                            children: n.suffix,
                          }),
                        n.title &&
                          (0, T.jsxs)("span", {
                            className: "title inline-block ml-[0.33em]",
                            children: [" ", n.title],
                          }),
                      ],
                    })
                  : (0, T.jsx)("h2", {
                      className: "text-forest r-text-xl mb-3",
                      children: n.title,
                    }),
                (0, T.jsx)("div", {
                  className: "wysiwyg body-text text-grey",
                  dangerouslySetInnerHTML: { __html: e2()(n.text, e5.OM) },
                }),
              ],
            },
            t
          );
        };
      var e6 = t(51697),
        e8 = t(72673);
      let e7 = (e) => {
          let { entry: n, className: t, globals: l } = e,
            { ancestors: i, level: r } = n || {},
            a = (0, e6.useTranslations)("common");
          return 1 !== r && (null == i ? void 0 : i.length)
            ? (0, T.jsx)("div", {
                className:
                  "breadcrumb pointer-events-auto text-xs text-grey ".concat(t),
                children: (0, T.jsxs)("div", {
                  className:
                    "inner pb-3 flex gap-1 border-b border-grey-border",
                  children: [
                    (0, T.jsx)(e8.A, {
                      href: l.currentSite.fullUrl.replace(/\/$/, ""),
                      className:
                        "underline transition-colors duration-300 hover:text-asphalt",
                      children: a("home"),
                    }),
                    (0, T.jsx)("span", { children: "/" }),
                    i.map((e, n) =>
                      (null == e ? void 0 : e.url)
                        ? (0, T.jsxs)(
                            B.Fragment,
                            {
                              children: [
                                (0, T.jsx)(e8.A, {
                                  href:
                                    "string" == typeof e.url
                                      ? e.url
                                      : e.link.url,
                                  className:
                                    "underline transition-colors duration-300 hover:text-asphalt",
                                  children: e.title,
                                }),
                                (0, T.jsx)("span", { children: "/" }),
                              ],
                            },
                            "".concat(e.uid, "-").concat(n)
                          )
                        : null
                    ),
                  ],
                }),
              })
            : null;
        },
        e9 = X()(() => t.e(2335).then(t.bind(t, 82335)), {
          loadableGenerated: { webpack: () => [82335] },
          ssr: !1,
        }),
        ne = (e) => {
          var n, t, l, i, r, a, s;
          let { heroEl: o, globals: d, regions: c } = e,
            u = (0, B.useRef)(null),
            m = (0, B.useRef)(null);
          return (0, T.jsxs)("header", {
            className: "r-pt-[5.375] mb-[3.75rem] sm:r-mb-[7.5]",
            ref: m,
            children: [
              (0, T.jsx)(e7, {
                entry: o,
                className: "container full",
                globals: d,
              }),
              (0, T.jsxs)("div", {
                className: "r-pt-[6.25] text-center container big",
                children: [
                  (0, T.jsx)("h1", {
                    className: "".concat(
                      (null == o ? void 0 : o.smallTitle)
                        ? "h2-text"
                        : "text-[3rem] sm:h1-text",
                      " leading-none mb-3 sm:r-mb-5 last:mb-0"
                    ),
                    children: (0, T.jsx)(F.A, {
                      children: null == o ? void 0 : o.title,
                    }),
                  }),
                  (null == o ? void 0 : o.description) &&
                    (0, T.jsx)(eW.P.div, {
                      className:
                        "wysiwyg sm:r-max-w-[26.25] mx-auto w-full text-grey r-text-lg",
                      initial: { y: 50, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.4, duration: 1, ease: "easeOut" },
                      children: (0, T.jsx)(eK.A, { content: o.description }),
                    }),
                  ((null == o
                    ? void 0
                    : null === (n = o.button) || void 0 === n
                    ? void 0
                    : n.href) ||
                    (null == o
                      ? void 0
                      : null === (t = o.button2) || void 0 === t
                      ? void 0
                      : t.href)) &&
                    (0, T.jsxs)(eW.P.div, {
                      className:
                        "flex r-mt-10 items-center gap-4 justify-center",
                      initial: { y: 50, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.6, duration: 1, ease: "easeOut" },
                      children: [
                        (0, T.jsx)(e0.A, { linkProps: o.button }),
                        (0, T.jsx)(z.A, { linkProps: o.button2 }),
                      ],
                    }),
                  (null == o ? void 0 : o.regionSelector) &&
                    (0, T.jsx)(eW.P.div, {
                      className: "flex items-center justify-center r-mt-10",
                      initial: { y: 50, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.6, duration: 1, ease: "easeOut" },
                      children: (0, T.jsx)(e9, {
                        globals: d,
                        dark: !0,
                        regions: c,
                      }),
                    }),
                ],
              }),
              ((null == o
                ? void 0
                : null === (l = o.mediaElement) || void 0 === l
                ? void 0
                : l.length) > 0 ||
                (null === (i = o.heroColumns) || void 0 === i
                  ? void 0
                  : i.length) > 0) &&
                (0, T.jsxs)("div", {
                  className: "flex flex-col-reverse sm:flex-col",
                  children: [
                    (null === (r = o.heroColumns) || void 0 === r
                      ? void 0
                      : r.length) > 0 &&
                      (0, T.jsx)("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-3 gap-4 md:r-gap-24 text-left w-full pt-[3.75rem] sm:r-pt-14 container big",
                        children: o.heroColumns.map((e, n) =>
                          (0, T.jsx)(
                            e3,
                            {
                              item: e,
                              index: n,
                              addLine: o.heroColumns.length - 1 > n,
                            },
                            e.uid
                          )
                        ),
                      }),
                    (null == o
                      ? void 0
                      : null === (a = o.mediaElement) || void 0 === a
                      ? void 0
                      : a.length) > 0 &&
                      (0, T.jsx)(eW.P.div, {
                        className:
                          "media-wrapper px-4 mt-[3.75rem] sm:r-mt-[6.25] overflow-hidden aspect-[22.5/33] sm:aspect-[16/9] max-h-[80vh] sm:max-h-none w-full",
                        ref: u,
                        initial: { y: 50, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: {
                          delay: 0.6,
                          duration: 1,
                          ease: "easeOut",
                        },
                        children: (0, T.jsx)(q.A, {
                          media:
                            null == o
                              ? void 0
                              : null === (s = o.mediaElement) || void 0 === s
                              ? void 0
                              : s[0],
                          className: "w-full object-cover h-[120%]",
                          width: 1920,
                          ratio: 16 / 9,
                          showCaption: !1,
                          priority: !0,
                        }),
                      }),
                  ],
                }),
            ],
          });
        };
      P.os.registerPlugin(Q(), R());
      let nn = (0, Z.WQ)("ui")((e) => {
        var n, t, l, i;
        let { heroEl: r, ui: a } = e,
          s = (0, H.useTranslations)("common"),
          o = (0, B.useRef)(null),
          d = (0, B.useRef)(null);
        return (
          (0, U.E)(() => {
            if (!o.current) return;
            let e = P.os.fromTo(
              o.current,
              {
                yPercent: 0,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              },
              {
                yPercent: 70,
                clipPath:
                  "polygon(1.5% 1.5%, 98.5% 1.5%, 98.5% 98.5%, 1.5% 98.5%)",
                ease: "none",
                scrollTrigger: {
                  trigger: d.current,
                  start: "top top",
                  end: "bottom top",
                  scrub: !0,
                  scroller: window.matchMedia("(hover: none)").matches
                    ? "body"
                    : "#smooth-wrapper",
                },
              }
            );
            return () => {
              e.kill();
            };
          }, [o.current]),
          (0, U.E)(() => {
            if (r.disableScroll && a.smoother)
              return (
                a.smoother.paused(!0),
                () => {
                  a.smoother.paused(!1);
                }
              );
          }, [r.disableScroll, a.smoother]),
          (0, T.jsxs)("header", {
            ref: d,
            className:
              "full-hero h-[100svh] relative mb-8 sm:r-mb-[7.5] text-white flex items-center justify-center overflow-hidden",
            children: [
              (0, T.jsxs)("div", {
                className: "text-center r-max-w-[72.5] mx-auto relative z-20",
                children: [
                  (0, T.jsx)("h1", {
                    className: "".concat(
                      (null == r ? void 0 : r.smallTitle)
                        ? "h2-text"
                        : "h1-text",
                      " mb-4 last:mb-0 leading-normal"
                    ),
                    children: null == r ? void 0 : r.title,
                  }),
                  (null == r ? void 0 : r.description) &&
                    (0, T.jsx)("div", {
                      className:
                        "wysiwyg r-max-w-[26.25] mx-auto w-full r-text-lg",
                      children: (0, T.jsx)(eK.A, { content: r.description }),
                    }),
                  ((null == r
                    ? void 0
                    : null === (n = r.button) || void 0 === n
                    ? void 0
                    : n.href) ||
                    (null == r
                      ? void 0
                      : null === (t = r.button2) || void 0 === t
                      ? void 0
                      : t.href)) &&
                    (0, T.jsxs)("div", {
                      className:
                        "flex r-mt-10 items-center gap-4 justify-center",
                      children: [
                        (0, T.jsx)(e0.A, { linkProps: r.button }),
                        (0, T.jsx)(z.A, { linkProps: r.button2 }),
                      ],
                    }),
                  (null === (l = r.heroColumns) || void 0 === l
                    ? void 0
                    : l.length) > 0 &&
                    (0, T.jsx)("div", {
                      className:
                        "grid grid-cols-3 r-gap-40 text-left container small r-mt-14",
                      children: r.heroColumns.map((e, n) =>
                        (0, T.jsx)(
                          e3,
                          {
                            item: e,
                            index: n,
                            addLine: r.heroColumns.length - 1 > n,
                          },
                          e.uid
                        )
                      ),
                    }),
                ],
              }),
              (0, T.jsx)("div", {
                ref: o,
                className:
                  "media-wrapper absolute left-0 top-0 w-full h-full bg-asphalt",
                children: (0, T.jsx)(q.A, {
                  media:
                    null == r
                      ? void 0
                      : null === (i = r.mediaElement) || void 0 === i
                      ? void 0
                      : i[0],
                  className: "w-full h-full object-cover !opacity-70",
                  videoClassName: "w-full h-full object-cover",
                  width: 1920,
                  height: 1080,
                  showCaption: !1,
                }),
              }),
              !r.disableScroll &&
                (0, T.jsxs)("button", {
                  className:
                    "absolute left-1/2 bottom-0 -translate-x-1/2 z-10 r-mb-[1.86] flex flex-col items-center gap-3 text-white r-text-sm",
                  onClick: () => {
                    P.os.to(window, {
                      duration: 1,
                      scrollTo: { y: window.innerHeight, autoKill: !1 },
                    });
                  },
                  children: [
                    s("scrollDown"),
                    (0, T.jsxs)("svg", {
                      width: "24",
                      height: "25",
                      viewBox: "0 0 24 25",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, T.jsx)("rect", {
                          x: "24",
                          y: "0.212891",
                          width: "24",
                          height: "24",
                          rx: "12",
                          transform: "rotate(90 24 0.212891)",
                          fill: "white",
                        }),
                        (0, T.jsx)("path", {
                          d: "M12 6.21289L12 18.2129M12 18.2129L18 12.2129M12 18.2129L6 12.2129",
                          stroke: "#222222",
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          })
        );
      });
      function nt() {
        let e = (0, $._)([
          "\n    query Entry_",
          "_hero($section: [String], $uri: [String], $siteId: [QueryArgument]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        id\n        uid\n        siteId\n        level\n        ancestors {\n          id\n          uid\n          siteId\n          level\n          title\n          typeHandle\n          url\n        }\n        ",
          '\n      }\n      regions: categories(group: "regions", siteId: $siteId) {\n        id\n        uid\n        siteId\n        title\n        ... on regions_Category {\n          flag: image {\n            id\n            uid\n            siteId\n            kind\n            width\n            height\n            url(width: 100)\n            primaryUrl: url\n            alt\n            ... on uploads_Asset {\n              altTranslation: plainText2\n            }\n          }\n          hasSites {\n            ... on hasSites_selectSite_BlockType {\n              id\n              uid\n              siteId\n              hasSite {\n                target\n                title\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  ',
        ]);
        return (
          (nt = function () {
            return e;
          }),
          e
        );
      }
      let nl = (e) => {
          let { section: n, types: t = [] } = e,
            l =
              null == t
                ? void 0
                : t
                    .map((e) =>
                      "\n    ... on "
                        .concat(n, "_")
                        .concat(e, "_Entry {\n      title\n      ")
                        .concat(
                          "default" === e || "irPages" === e
                            ? "bgHero: lightswitch2"
                            : "",
                          "\n      "
                        )
                        .concat(
                          "default" === e ? "regionSelector: lightswitch3" : "",
                          "\n      "
                        )
                        .concat(
                          "default" === e ? "disableScroll: lightswitch4" : "",
                          "\n      "
                        )
                        .concat(
                          "default" === e || "list" === e
                            ? "smallTitle: lightswitch6"
                            : "",
                          "\n      description: text\n      level\n      ancestors {\n        id\n        uid\n        siteId\n        title\n        url\n        level\n      }\n      button {\n        target\n        text\n        type\n        href: url\n        title\n      }\n      button2 {\n        target\n        text\n        type\n        href: url\n        title\n      }\n      "
                        )
                        .concat(
                          "default" === e || "irPages" === e
                            ? "\n        ".concat(
                                S.A,
                                "\n        heroColumns {\n          ... on heroColumns_numberColumn_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            prefix: plainText2\n            number: number2\n            suffix: plainText\n            title: moduleTitle\n            text\n          }\n          ... on heroColumns_column_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            title: moduleTitle\n            text\n          }\n        }\n      "
                              )
                            : "",
                          "\n    }\n  "
                        )
                    )
                    .join("");
          return (0, E.J1)(nt(), n, l);
        },
        ni = (e) => {
          let { globals: n } = e,
            { currentSite: t, routeProps: l, currentRoute: i } = n,
            r = nl({
              section: null == i ? void 0 : i.cms.section,
              types: null == i ? void 0 : i.cms.types,
            }),
            { data: a } = (0, M.I)(r, {
              variables: {
                section: null == i ? void 0 : i.cms.section,
                uri: l.uri,
                siteId: null == t ? void 0 : t.siteId,
              },
            }),
            s = (null == a ? void 0 : a.entry) || {};
          return s.bgHero
            ? (0, T.jsx)(nn, { heroEl: s })
            : (0, T.jsx)(ne, {
                heroEl: s,
                globals: n,
                regions: null == a ? void 0 : a.regions,
              });
        },
        nr = (e) => {
          let { globals: n } = e;
          return (0, T.jsxs)("div", {
            className: "w-full",
            children: [
              (0, T.jsx)(ni, { globals: n }),
              (0, T.jsx)(eY, { globals: n }),
            ],
          });
        };
      function na() {
        let e = (0, $._)([
          "\n    query Entry_",
          "_simpleHero($section: [String], $uri: [String], $siteId: [QueryArgument]) {\n      entry(section: $section, uri: $uri, siteId: $siteId){\n        id\n        uid\n        siteId\n        ancestors {\n          id\n          uid\n          siteId\n          level\n          title\n          typeHandle\n          url\n        }\n        ",
          "\n      }\n    }\n  ",
        ]);
        return (
          (na = function () {
            return e;
          }),
          e
        );
      }
      function ns() {
        let e = (0, $._)([
          '\n  query Entry_FilterQuery($siteId: [QueryArgument]) {\n    entries(\n      section: "pages"\n      type: "list"\n      siteId: $siteId\n      listType: "knowledgeHub"\n    ) {\n      id\n      uid\n      siteId\n      level\n      title\n      url\n      children {\n        title\n        url\n        id\n        uid\n        siteId\n      }\n    }\n  }\n',
        ]);
        return (
          (ns = function () {
            return e;
          }),
          e
        );
      }
      let no = (0, E.J1)(ns()),
        nd = (e) => {
          let { section: n, types: t = [] } = e,
            l =
              null == t
                ? void 0
                : t
                    .map((e) =>
                      "\n    ... on "
                        .concat(n, "_")
                        .concat(
                          e,
                          "_Entry {\n      title\n      url\n      level\n      description: text\n      button {\n        target\n        text\n        type\n        href: url\n        title\n      }\n      button2 {\n        target\n        text\n        type\n        href: url\n        title\n      }\n      "
                        )
                        .concat(
                          "pages" === n && "list" === e ? "listType" : "",
                          "\n      "
                        )
                        .concat(
                          "default" === e || "list" === e
                            ? "smallTitle: lightswitch6"
                            : "",
                          "\n    }\n  "
                        )
                    )
                    .join("");
          return (0, E.J1)(na(), n, l);
        };
      var nc = t(25828);
      let nu = (e) => {
          let { entry: n } = e,
            t = (0, H.useTranslations)("common"),
            { data: l } = (0, M.I)(no, { variables: { siteId: n.siteId } }),
            i = null == l ? void 0 : l.entries,
            r =
              null == i
                ? void 0
                : i.find(
                    (e) =>
                      e.children.some((e) => e.id === n.id) || e.id === n.id
                  );
          if (!r) return null;
          let a = r.children;
          return (0, T.jsx)(eW.P.div, {
            className: "flex items-center justify-center r-mt-10",
            initial: { y: 50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { delay: 0.6, duration: 1, ease: "easeOut" },
            children: (0, T.jsx)(nc.A, {
              allFilter: r,
              filters: a,
              entry: n,
              className: "justify-center",
              allLabel: t("all"),
            }),
          });
        },
        nm = (e) => {
          var n, t;
          let { globals: l } = e,
            { currentSite: i, routeProps: r, currentRoute: a } = l || {},
            s = nd({
              section: null == a ? void 0 : a.cms.section,
              types: null == a ? void 0 : a.cms.types,
            }),
            { data: o } = (0, M.I)(s, {
              variables: {
                section: null == a ? void 0 : a.cms.section,
                uri: r.uri,
                siteId: null == i ? void 0 : i.siteId,
              },
            }),
            d = null == o ? void 0 : o.entry;
          return (0, T.jsxs)("header", {
            className: " r-pt-[5.375] mb-8 sm:r-mb-[7.5] container full",
            children: [
              (0, T.jsx)(e7, { entry: d, globals: l }),
              (0, T.jsxs)("div", {
                className: "r-pt-[6.25] text-center",
                children: [
                  (0, T.jsx)("h1", {
                    className: "".concat(
                      (null == d ? void 0 : d.smallTitle)
                        ? "h2-text"
                        : "h1-text",
                      " mb-4 last:mb-0 leading-normal"
                    ),
                    children: (0, T.jsx)(F.A, {
                      children: null == d ? void 0 : d.title,
                    }),
                  }),
                  (null == d ? void 0 : d.description) &&
                    (0, T.jsx)(eW.P.div, {
                      className:
                        "wysiwyg r-max-w-[26.25] mx-auto w-full text-grey r-text-lg",
                      initial: { y: 50, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: {
                        delay: 0.4,
                        duration: 1.5,
                        ease: "easeOut",
                      },
                      children: (0, T.jsx)(eK.A, { content: d.description }),
                    }),
                  (null == d ? void 0 : d.listType) === "knowledgeHub" &&
                    (0, T.jsx)(nu, { entry: d }),
                  ((null == d
                    ? void 0
                    : null === (n = d.button) || void 0 === n
                    ? void 0
                    : n.href) ||
                    (null == d
                      ? void 0
                      : null === (t = d.button2) || void 0 === t
                      ? void 0
                      : t.href)) &&
                    (0, T.jsxs)(eW.P.div, {
                      className:
                        "flex r-mt-10 items-center gap-4 justify-center",
                      initial: { y: 50, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: {
                        delay: 0.4,
                        duration: 1.5,
                        ease: "easeOut",
                      },
                      children: [
                        (0, T.jsx)(e0.A, { linkProps: d.button }),
                        (0, T.jsx)(z.A, { linkProps: d.button2 }),
                      ],
                    }),
                ],
              }),
            ],
          });
        };
      var np = t(86715),
        nh = t(67667);
      function ng() {
        let e = (0, $._)([
          '\n    query Entry_pages_list_KnowledgeHub($type: [String], $siteId: [QueryArgument], $limit: Int = 10, $relatedTo: [QueryArgument], $offset: Int = 0, $orderBy: String = "postDate desc") {\n      entries(section: $type, siteId: $siteId, limit: $limit, relatedTo: $relatedTo, offset: $offset, orderBy: $orderBy){\n        id\n        uid\n        siteId\n        url\n        typeHandle\n        ... on knowledgeHub_default_Entry {\n          title\n          ',
          "\n          postDate\n          knowledgeHubCategories {\n            id\n            uid\n            siteId\n            title\n          }\n        }\n        ... on knowledgeHub_legacy_Entry {\n          title\n          image {\n            id\n            uid\n            siteId\n            kind\n            width\n            height\n            url(width: 100)\n            primaryUrl: url\n            alt\n            ... on uploads_Asset {\n              text\n              plainText\n              altTranslation: plainText2\n            }\n          }\n          postDate\n          knowledgeHubCategories {\n            id\n            uid\n            siteId\n            title\n          }\n        }\n      }\n      total: entryCount(section: $type, siteId: $siteId, relatedTo: $relatedTo)      \n    }\n  ",
        ]);
        return (
          (ng = function () {
            return e;
          }),
          e
        );
      }
      let nx = () => (0, E.J1)(ng(), S.A);
      var nv = t(44641),
        nf = t(60598),
        nw = t(29965),
        ny = t.n(nw),
        nb = t(15385);
      let nA = (e) => {
        var n, t, l, i;
        let { item: r, index: a } = e,
          s = [
            {
              span: "col-span-full sm:col-span-6 lg:col-span-4",
              aspect: "aspect-[16/9] lg:aspect-[26.25/16.5]",
              ratio: 26.25 / 16.5,
            },
            {
              span: "col-span-full sm:col-span-6 lg:col-span-5",
              aspect: "aspect-[16/9] lg:aspect-[33.125/34]",
              ratio: 33.125 / 34,
            },
            {
              span: "col-span-full sm:col-span-6 lg:col-span-3",
              aspect: "aspect-[16/9] lg:aspect-[19.375/25]",
              ratio: 0.775,
            },
            {
              span: "col-span-full sm:col-span-6 lg:col-span-4",
              aspect: "aspect-[16/9] lg:aspect-[26.25/16.5]",
              ratio: 26.25 / 16.5,
            },
            {
              span: "col-span-full sm:col-span-6 lg:col-span-8",
              aspect: "aspect-[16/9] lg:aspect-[53.75/34]",
              ratio: 53.75 / 34,
            },
            {
              span: "col-span-full sm:col-span-6 lg:col-span-8",
              aspect: "aspect-[16/9] lg:aspect-[53.75/34]",
              ratio: 53.75 / 34,
            },
            {
              span: "col-span-full sm:col-span-6 lg:col-span-4",
              aspect:
                "aspect-[16/9] lg:sm:aspect-[16/9] lg:aspect-[26.25/25.5]",
              ratio: 26.25 / 25.5,
            },
            {
              span: "col-span-full sm:col-span-6 lg:col-span-5",
              aspect: "aspect-[16/9] lg:aspect-[33.125/34]",
              ratio: 33.125 / 34,
            },
            {
              span: "col-span-full sm:col-span-6 lg:col-span-4",
              aspect: "aspect-[16/9] lg:aspect-[26.25/16.5]",
              ratio: 26.25 / 16.5,
            },
            {
              span: "col-span-full sm:col-span-6 lg:col-span-3",
              aspect: "aspect-[16/9] lg:aspect-[19.375/25]",
              ratio: 0.775,
            },
          ][a % 10],
          o = (0, B.useMemo)(
            () =>
              nv.c9
                .fromISO(r.postDate)
                .setZone("Europe/Oslo")
                .setLocale("nb-NO"),
            [r.postDate]
          );
        return (0, T.jsx)(e8.A, {
          href: r.url,
          className: "block group relative knowledgehub-item ".concat(s.span),
          children: (0, T.jsxs)("div", {
            className: "card",
            children: [
              (0, T.jsx)(eW.P.div, {
                className: "media-wrapper r-mb-5",
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, amount: 0.33 },
                children: (0, T.jsx)(eW.P.div, {
                  style: {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0.01%, 0% 0.01%)",
                  },
                  variants: {
                    hidden: {
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 0.01%, 0% 0.01%)",
                    },
                    visible: {
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    },
                  },
                  transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
                  children:
                    "default" === r.typeHandle
                      ? (null === (n = r.mediaElement) || void 0 === n
                          ? void 0
                          : n.length) > 0
                        ? (0, T.jsx)(q.A, {
                            className: "".concat(
                              s.aspect,
                              " w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 will-change-transform"
                            ),
                            media:
                              null === (t = r.mediaElement) || void 0 === t
                                ? void 0
                                : t[0],
                            ratio: s.ratio,
                            width: 480,
                          })
                        : (0, T.jsx)(ny(), {
                            src: nb.A,
                            alt: "Placeholder",
                            width: 480,
                            height: 480 * s.ratio,
                            className: "".concat(
                              s.aspect,
                              " w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 will-change-transform"
                            ),
                          })
                      : (null === (l = r.image) || void 0 === l
                          ? void 0
                          : l.length) > 0
                      ? (0, T.jsx)(nf.A, {
                          className: "".concat(
                            s.aspect,
                            " w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 will-change-transform"
                          ),
                          asset: r.image,
                          ratio: s.ratio,
                          width: 480,
                        })
                      : (0, T.jsx)(ny(), {
                          src: nb.A,
                          alt: "Placeholder",
                          width: 480,
                          height: 480 * s.ratio,
                          className: "".concat(
                            s.aspect,
                            " w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 will-change-transform"
                          ),
                        }),
                }),
              }),
              (0, T.jsxs)("div", {
                className: "card-content",
                children: [
                  (0, T.jsxs)("div", {
                    className: "flex items-center gap-3 mb-3 flex-wrap",
                    children: [
                      null === (i = r.knowledgeHubCategories) || void 0 === i
                        ? void 0
                        : i.map((e) =>
                            (0, T.jsx)(
                              "span",
                              {
                                className:
                                  "tag bg-grey-bgHover rounded-button px-[0.62rem] py-[0.56rem] text-xs text-grey block leading-none",
                                children: e.title,
                              },
                              e.uid
                            )
                          ),
                      (0, T.jsx)("time", {
                        className: "text-xs text-grey",
                        dateTime: o.toISODate(),
                        children: o.toFormat("dd.MM.yy"),
                      }),
                    ],
                  }),
                  (0, T.jsx)("h3", {
                    className:
                      "card-title h4-text text-asphalt custom-underline",
                    children: r.title,
                  }),
                ],
              }),
            ],
          }),
        });
      };
      function nj() {
        return (nj = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nI = (0, B.forwardRef)(function (e, n) {
        return B.createElement(
          "svg",
          nj(
            {
              width: 9,
              height: 15,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
            },
            e
          ),
          i ||
            (i = B.createElement("path", { d: "M0 7.5 8.4.572v13.856L0 7.5Z" }))
        );
      });
      function nk() {
        return (nk = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nN = (0, B.forwardRef)(function (e, n) {
        return B.createElement(
          "svg",
          nk(
            {
              width: 9,
              height: 15,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
            },
            e
          ),
          r ||
            (r = B.createElement("path", {
              d: "m8.492 7.5-8.4 6.928V.572l8.4 6.928Z",
              fill: "#222",
            }))
        );
      });
      let n_ = (e) => {
        let { current: n, total: t } = e,
          l = (0, np.useRouter)(),
          i = (0, B.useRef)(null);
        if (
          ((0, B.useEffect)(() => {
            P.os.registerPlugin(R());
          }, []),
          t <= 1)
        )
          return null;
        let r = (function (e, n) {
            let t, l;
            n <= 7
              ? ((t = 0), (l = n - 1))
              : e <= 3
              ? ((t = 0), (l = 6))
              : e + 3 >= n
              ? ((t = n - 7), (l = n - 1))
              : ((t = e - 3), (l = e + 3));
            let i = Array.from(Array(l + 1 - t).keys()).map((e) => ({
              page: e + t,
              label: e + t + 1,
            }));
            return (
              i.some((e) => 0 === e.page) ||
                i.unshift({ page: 0, label: "1..." }),
              i.some((e) => e.page === n - 1) ||
                i.push({ page: n - 1, label: "...".concat(n) }),
              i
            );
          })(Number(n), t),
          [a] = l.asPath.split("?");
        return (0, T.jsxs)("div", {
          ref: i,
          className:
            "flex justify-center r-mt-[2.87] button-text r-gap-[0.5] w-full",
          children: [
            Number(n) > 0 &&
              (0, T.jsx)(e8.A, {
                href: {
                  pathname: a,
                  query: { ...l.query, page: Number(n) - 1 },
                },
                shallow: !0,
                scroll: !1,
                className:
                  "flex items-center justify-center w-12 h-12 sm:h-auto sm:r-min-w-[1.875] sm:py-[0.25rem] rounded-full bg-grey-button sm:bg-transparent rounded-full text-asphalt transition-colors duration-300 hover:bg-blue hover:text-grey",
                onClick: () => {
                  var e, n;
                  P.os.to(window, {
                    duration: 0.5,
                    scrollTo: {
                      y:
                        null === (n = i.current) || void 0 === n
                          ? void 0
                          : null === (e = n.parentElement) || void 0 === e
                          ? void 0
                          : e.parentElement,
                      offsetY: 200,
                      autoKill: !1,
                    },
                    onComplete: () => {},
                  });
                },
                children: (0, T.jsx)(nI, { className: "fill-current" }),
              }),
            r.map((e) => {
              let t = e.page + 1;
              return e.page == Number(n)
                ? (0, T.jsx)(
                    "div",
                    {
                      className:
                        "hidden sm:flex items-center justify-center r-min-w-[2] rounded-full aspect-1 transition-colors duration-300 bg-asphalt text-white hover:bg-grey-bg hover:text-asphalt",
                      children: e.label,
                    },
                    t
                  )
                : (0, T.jsx)(
                    e8.A,
                    {
                      href: {
                        pathname: a,
                        query: { ...l.query, page: e.page },
                      },
                      shallow: !0,
                      scroll: !1,
                      className:
                        "hidden sm:flex items-center justify-center r-min-w-[2] rounded-full aspect-1 transition-colors duration-300 hover:bg-grey-bg",
                      onClick: () => {
                        var e, n;
                        P.os.to(window, {
                          duration: 0.5,
                          scrollTo: {
                            y:
                              null === (n = i.current) || void 0 === n
                                ? void 0
                                : null === (e = n.parentElement) || void 0 === e
                                ? void 0
                                : e.parentElement,
                            offsetY: 200,
                            autoKill: !1,
                          },
                          onComplete: () => {},
                        });
                      },
                      children: e.label,
                    },
                    t
                  );
            }),
            Number(n) < t - 1 &&
              (0, T.jsx)(e8.A, {
                href: {
                  pathname: a,
                  query: { ...l.query, page: Number(n) + 1 },
                },
                shallow: !0,
                scroll: !1,
                className:
                  "flex items-center justify-center w-12 h-12 sm:h-auto sm:r-min-w-[1.875] rounded-full sm:py-[0.25rem] bg-grey-button sm:bg-transparent stroke-blue transition-colors duration-300 hover:bg-blue hover:stroke-white",
                onClick: () => {
                  var e, n;
                  P.os.to(window, {
                    duration: 0.5,
                    scrollTo: {
                      y:
                        null === (n = i.current) || void 0 === n
                          ? void 0
                          : null === (e = n.parentElement) || void 0 === e
                          ? void 0
                          : e.parentElement,
                      offsetY: 200,
                      autoKill: !1,
                    },
                    onComplete: () => {},
                  });
                },
                children: (0, T.jsx)(nN, {}),
              }),
          ],
        });
      };
      var nT = t(52046);
      let nM = (e) => {
        var n, t;
        let { entry: l } = e,
          i = (0, np.useRouter)(),
          r = nx(),
          a = (0, H.useTranslations)("common"),
          s = Number(i.query.page) || 0,
          [o, d] = (0, B.useState)(!1),
          { data: c } = (0, M.I)(r, {
            variables: {
              type: l.listType,
              siteId: l.siteId,
              offset: 10 * s || 0,
              limit: 10,
              relatedTo: l.level > 1 ? l.id : null,
              orderBy: "postDate desc",
            },
            fetchPolicy: "cache-and-network",
            onCompleted: () => {
              d(!1);
            },
          });
        return (
          (0, B.useEffect)(() => {
            let e = (e, n) => {
              (null == n ? void 0 : n.shallow) && d(!0);
            };
            return (
              i.events.on("routeChangeStart", e),
              () => {
                i.events.off("routeChangeStart", e);
              }
            );
          }, [i]),
          (0, T.jsx)(nh.N, {
            mode: "wait",
            children: (0, T.jsx)(
              eW.P.div,
              {
                className: "list-wrapper",
                initial: "hidden",
                animate: "visible",
                exit: "exit",
                variants: {
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                  exit: { opacity: 0 },
                },
                children: o
                  ? (0, T.jsx)("div", {
                      className:
                        "flex justify-center items-center min-h-[50vh]",
                      children: (0, T.jsx)(nT.A, {}),
                    })
                  : (null == c
                      ? void 0
                      : null === (n = c.entries) || void 0 === n
                      ? void 0
                      : n.length) > 0
                  ? (0, T.jsxs)(T.Fragment, {
                      children: [
                        (0, T.jsx)("div", {
                          className:
                            "grid grid-cols-12 r-gap-x-5 gap-y-8 sm:r-gap-y-16 lg:r-gap-y-[7.5] container full",
                          children:
                            null == c
                              ? void 0
                              : null === (t = c.entries) || void 0 === t
                              ? void 0
                              : t.map((e, n) =>
                                  (0, T.jsx)(nA, { item: e, index: n }, e.uid)
                                ),
                        }),
                        (0, T.jsx)(n_, {
                          total: Math.ceil(Number(c.total) / 10),
                          current: s,
                        }),
                      ],
                    })
                  : (0, T.jsx)("div", {
                      className:
                        "flex justify-center items-center min-h-[50vh]",
                      children: (0, T.jsx)("p", { children: a("noResults") }),
                    }),
              },
              o ? "loading" : "data"
            ),
          })
        );
      };
      var n$ = t(53731),
        nE = t(46874),
        nS = t(2102);
      function nC() {
        return (nC = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nD = (0, B.forwardRef)(function (e, n) {
        return B.createElement(
          "svg",
          nC(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 213 58",
              fill: "none",
              ref: n,
            },
            e
          ),
          a ||
            (a = B.createElement(
              "g",
              { filter: "url(#accessoryShadow_svg__a)" },
              B.createElement("ellipse", {
                cx: 106.437,
                cy: 28.952,
                rx: 85.921,
                ry: 8.452,
                fill: "#DEDEDE",
              })
            )),
          s ||
            (s = B.createElement(
              "defs",
              null,
              B.createElement(
                "filter",
                {
                  id: "accessoryShadow_svg__a",
                  x: 0.516,
                  y: 0.5,
                  width: 211.843,
                  height: 56.904,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                },
                B.createElement("feFlood", {
                  floodOpacity: 0,
                  result: "BackgroundImageFix",
                }),
                B.createElement("feBlend", {
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                B.createElement("feGaussianBlur", {
                  stdDeviation: 10,
                  result: "effect1_foregroundBlur_2493_19131",
                })
              )
            ))
        );
      });
      t(33853);
      let nB = (e) => {
        var n, t, l, i;
        let { item: r } = e,
          a = (0, B.useRef)(null),
          [s, o] = (0, B.useState)(0),
          { mediaItems: d } = r,
          c = null;
        return (
          (c =
            (null == d ? void 0 : d.length) > 1
              ? (0, T.jsx)(nE.RC, {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  className:
                    "w-full z-10 transition-transform duration-500 group-hover:-translate-y-5 will-change-transform",
                  onSwiper: (e) => {
                    a.current = e;
                  },
                  onSlideChange: (e) => {
                    o(e.realIndex);
                  },
                  children:
                    null == d
                      ? void 0
                      : d.map((e) => {
                          var n;
                          return (0, T.jsx)(
                            nE.qr,
                            {
                              children: (0, T.jsx)(q.A, {
                                className: "w-full object-contain aspect-1",
                                media:
                                  null === (n = e.mediaElement) || void 0 === n
                                    ? void 0
                                    : n[0],
                                ratio: 1,
                                width: 480,
                                priority: !0,
                                showCaption: !1,
                              }),
                            },
                            e.uid
                          );
                        }),
                })
              : (0, T.jsx)(q.A, {
                  className:
                    "w-full object-contain relative z-10 transition-transform duration-500 group-hover:-translate-y-5 will-change-transform aspect-1",
                  media:
                    null == d
                      ? void 0
                      : null === (i = d[0]) || void 0 === i
                      ? void 0
                      : null === (l = i.mediaElement) || void 0 === l
                      ? void 0
                      : l[0],
                  ratio: 1,
                  width: 480,
                  priority: !0,
                  showCaption: !1,
                })),
          (0, T.jsx)(nh.N, {
            mode: "wait",
            children: (0, T.jsx)(eW.P.div, {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -50 },
              transition: { duration: 0.5, ease: "easeInOut" },
              viewport: { once: !0, amount: 0.5 },
              children: (0, T.jsxs)(e8.A, {
                href: r.url,
                className: "block group relative",
                children: [
                  (0, T.jsxs)("div", {
                    className: "card",
                    children: [
                      (0, T.jsxs)("div", {
                        className:
                          "image-wrapper bg-grey-bg r-pt-[3.19] r-pb-[3.4] r-px-[5] r-mb-5 relative",
                        children: [
                          (0, T.jsx)("div", {
                            className: "media-wrapper relative",
                            children: c,
                          }),
                          (null == d ? void 0 : d.length) > 1 &&
                            (0, T.jsx)("div", {
                              className:
                                "bullets absolute left-1/2 bottom-6 -translate-x-1/2 flex gap-2",
                              children:
                                null == d
                                  ? void 0
                                  : d.map((e, n) =>
                                      (0, T.jsx)(
                                        "div",
                                        {
                                          className:
                                            "bullet w-2 h-2 rounded-full border transition-colors duration-500 cursor-pointer ".concat(
                                              s === n
                                                ? "bg-asphalt border-asphalt"
                                                : "bg-transparent border-grey"
                                            ),
                                          onClick: (e) => {
                                            var t;
                                            e.preventDefault(),
                                              e.stopPropagation(),
                                              null === (t = a.current) ||
                                                void 0 === t ||
                                                t.slideTo(n),
                                              o(n);
                                          },
                                        },
                                        e.uid
                                      )
                                    ),
                            }),
                          (0, T.jsx)(nD, {
                            className:
                              "absolute r-bottom-[2.3] left-1/2 r-w-[10.7] h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-1/2 will-change-auto",
                          }),
                        ],
                      }),
                      (0, T.jsx)("h3", {
                        className:
                          "card-title base-text text-center text-asphalt r-mt-6",
                        children: r.title,
                      }),
                    ],
                  }),
                  (0, T.jsx)("div", {
                    className:
                      "absolute left-1/2 top-full mt-4 hidden sm:inline-flex items-center justify-center flex-shrink-0 rounded-full w-6 h-6 bg-asphalt opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 will-change-auto",
                    children: (0, T.jsx)(nS.A, {
                      className: "w-3 stroke-white",
                    }),
                  }),
                  (null == d ? void 0 : d.length) > 1 &&
                    (0, T.jsxs)(T.Fragment, {
                      children: [
                        (null === (n = a.current) || void 0 === n
                          ? void 0
                          : n.realIndex) !== 0 &&
                          (0, T.jsx)("button", {
                            className:
                              "button-prev absolute top-1/2 r-left-[2.25] -translate-x-1/2 -translate-y-1/2 z-10",
                            onClick: (e) => {
                              var n;
                              e.preventDefault(),
                                e.stopPropagation(),
                                null === (n = a.current) ||
                                  void 0 === n ||
                                  n.slidePrev();
                            },
                            children: (0, T.jsx)("svg", {
                              width: "13",
                              height: "13",
                              viewBox: "0 0 13 13",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "rotate-180",
                              children: (0, T.jsx)("path", {
                                d: "M0 6.58887H12M12 6.58887L6 0.588867M12 6.58887L6 12.5889",
                                stroke: "#222222",
                              }),
                            }),
                          }),
                        (null === (t = a.current) || void 0 === t
                          ? void 0
                          : t.realIndex) !==
                          d.length - 1 &&
                          (0, T.jsx)("button", {
                            className:
                              "button-next absolute top-1/2 r-right-[2.25] -translate-x-1/2 -translate-y-1/2 z-10",
                            onClick: (e) => {
                              var n;
                              e.preventDefault(),
                                e.stopPropagation(),
                                null === (n = a.current) ||
                                  void 0 === n ||
                                  n.slideNext();
                            },
                            children: (0, T.jsx)("svg", {
                              width: "13",
                              height: "13",
                              viewBox: "0 0 13 13",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, T.jsx)("path", {
                                d: "M0 6.58887H12M12 6.58887L6 0.588867M12 6.58887L6 12.5889",
                                stroke: "#222222",
                              }),
                            }),
                          }),
                      ],
                    }),
                ],
              }),
            }),
          })
        );
      };
      function nH() {
        return (nH = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nP = (0, B.forwardRef)(function (e, n) {
        return B.createElement(
          "svg",
          nH(
            {
              width: 24,
              height: 20,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
            },
            e
          ),
          o ||
            (o = B.createElement("path", {
              d: "M4.29 12.466A17.629 17.629 0 0 1 3.926 12a18.902 18.902 0 0 1 2.218-2.448C7.733 8.089 9.804 6.75 12 6.75c2.196 0 4.267 1.339 5.856 2.802A18.897 18.897 0 0 1 20.074 12a18.895 18.895 0 0 1-2.218 2.448c-1.589 1.463-3.66 2.802-5.856 2.802-2.196 0-4.267-1.339-5.856-2.802a18.9 18.9 0 0 1-1.854-1.982Z",
              stroke: "#222",
              strokeWidth: 1.5,
            })),
          d ||
            (d = B.createElement("circle", {
              cx: 12,
              cy: 12,
              r: 3,
              fill: "#222",
            }))
        );
      });
      let nL = X()(() => t.e(3680).then(t.bind(t, 53680)), {
          loadableGenerated: { webpack: () => [53680] },
          ssr: !1,
        }),
        nR = (0, Z.WQ)("ui")((e) => {
          var n, t;
          let { entry: l, ui: i } = e,
            r = (0, np.useRouter)(),
            a = (0, n$.A)(),
            s = (0, H.useTranslations)("common"),
            o = Number(r.query.page) || 0,
            [d, c] = (0, B.useState)(!1),
            { data: u, loading: m } = (0, M.I)(a, {
              variables: {
                type: l.listType,
                siteId: l.siteId,
                offset: 18 * o || 0,
                limit: 18,
                relatedTo: r.query.category ? [r.query.category] : null,
                orderBy: "postDate desc",
              },
              fetchPolicy: "cache-and-network",
              onCompleted: () => {
                c(!1);
              },
            });
          return (
            (0, B.useEffect)(() => {
              let e = (e, n) => {
                (null == n ? void 0 : n.shallow) && c(!0);
              };
              return (
                r.events.on("routeChangeStart", e),
                () => {
                  r.events.off("routeChangeStart", e);
                }
              );
            }, [r]),
            (0, T.jsxs)("div", {
              className: "container full",
              children: [
                (0, T.jsxs)("div", {
                  className: "flex justify-between items-end r-mb-10",
                  children: [
                    (0, T.jsxs)("div", {
                      className: "filter",
                      children: [
                        (0, T.jsx)("h2", {
                          className: "r-text-sm mb-6 text-asphalt",
                          children: s("filterByCharger"),
                        }),
                        (0, T.jsx)(nL, { siteId: l.siteId }),
                      ],
                    }),
                    (0, T.jsxs)("button", {
                      className:
                        "flex items-center gap-4 justify-center r-text-sm underline",
                      onClick: () => {
                        i.openModal({
                          open: !0,
                          content: (0, T.jsx)("div", {
                            className:
                              "wysiwyg r-max-w-[67.5] w-full mx-auto text-grey r-text-lg",
                            children: (0, T.jsx)(eK.A, {
                              content: l.guideContent,
                            }),
                          }),
                        });
                      },
                      children: [(0, T.jsx)(nP, {}), " ", s("cableGuide")],
                    }),
                  ],
                }),
                (0, T.jsx)(nh.N, {
                  mode: "wait",
                  children: (0, T.jsx)(
                    eW.P.div,
                    {
                      className: "list-wrapper",
                      initial: "hidden",
                      animate: "visible",
                      exit: "exit",
                      variants: {
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                        exit: { opacity: 0 },
                      },
                      children:
                        d && m
                          ? (0, T.jsx)("div", {
                              className:
                                "flex justify-center items-center min-h-[50vh]",
                              children: (0, T.jsx)(nT.A, {}),
                            })
                          : (null == u
                              ? void 0
                              : null === (n = u.entries) || void 0 === n
                              ? void 0
                              : n.length) > 0
                          ? (0, T.jsxs)(T.Fragment, {
                              children: [
                                (0, T.jsx)("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 r-gap-x-5 gap-y-8 sm:r-gap-y-[6.25]",
                                  children:
                                    null == u
                                      ? void 0
                                      : null === (t = u.entries) || void 0 === t
                                      ? void 0
                                      : t.map((e, n) =>
                                          (0, T.jsx)(
                                            nB,
                                            { item: e, index: n },
                                            e.uid
                                          )
                                        ),
                                }),
                                (0, T.jsx)(n_, {
                                  total: Math.ceil(Number(u.total) / 18),
                                  current: o,
                                }),
                              ],
                            })
                          : (0, T.jsx)("div", {
                              className:
                                "flex justify-center items-center min-h-[50vh]",
                              children: (0, T.jsx)("p", {
                                children: s("noResults"),
                              }),
                            }),
                    },
                    d && m ? "loading" : "data"
                  ),
                }),
              ],
            })
          );
        }),
        nO = (e) => {
          let { globals: n, data: t } = e,
            { entry: l } = t,
            { listType: i } = l,
            r = b[i];
          return r
            ? (0, T.jsxs)("div", {
                className: "w-full",
                children: [
                  (0, T.jsx)(nm, { globals: n }),
                  (0, T.jsx)(r, { entry: l }),
                ],
              })
            : (0, T.jsxs)("div", {
                className:
                  "flex items-center justify-center text-center h2-text h-screen container full",
                children: [
                  "You need to create a component for this list type (",
                  i,
                  ")",
                ],
              });
        };
      function nQ() {
        let e = (0, $._)([
          '\n  query Entry_TextPage_Modules($uri: [String], $siteId: [QueryArgument]) {\n    entry(section: "pages", type: "simple", uri: $uri, siteId: $siteId) {\n      siteId\n      id\n      uid\n      ... on pages_simple_Entry {\n        textModules(level: 1) {\n          ... on textModules_textBlock_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            title: moduleTitle\n            text: text4\n            button {\n              target\n              text\n              type\n              href: url\n              title\n            }\n            button2 {\n              target\n              text\n              type\n              href: url\n              title\n            }\n          }\n          ... on textModules_accordion_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            opened: lightswitch\n            items: children {\n              ... on textModules_accordionItem_BlockType {\n                id\n                uid\n                siteId\n                typeHandle\n                title: moduleTitle\n                text: text4\n              }\n            }\n          }\n          ... on textModules_buttons_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            button {\n              target\n              text\n              type\n              href: url\n              title\n            }\n            button2 {\n              target\n              text\n              type\n              href: url\n              title\n            }\n          }\n          ... on textModules_cookiebotIntegration_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            title: moduleTitle\n            script: monospace\n          }\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (nQ = function () {
            return e;
          }),
          e
        );
      }
      let nU = (0, E.J1)(nQ());
      var nq = t(91323);
      let nz = {
          textBlock: (e) => {
            let { module: n } = e,
              { title: t, text: l, button: i, button2: r } = n;
            return (0, T.jsxs)("div", {
              id: "module-".concat(n.uid),
              className: "page-builder-block ".concat(
                n.typeHandle,
                "-block module-margin flex flex-col lg:flex-row items-start r-gap-12"
              ),
              children: [
                t &&
                  (0, T.jsx)("h2", {
                    className: "h2-text-alt flex-1",
                    children: t,
                  }),
                (0, T.jsxs)("div", {
                  className:
                    "wysiwyg r-max-w-[40] flex-1 text-asphalt r-text-lg",
                  children: [
                    (0, T.jsx)(eK.A, { content: l }),
                    (i || r) &&
                      (0, T.jsxs)("div", {
                        className: "flex flex-row r-gap-4 mt-4",
                        children: [
                          (0, T.jsx)(e0.A, { linkProps: i }),
                          (0, T.jsx)(z.A, { linkProps: r }),
                        ],
                      }),
                  ],
                }),
              ],
            });
          },
          accordion: (e) => {
            var n, t;
            let { module: l } = e,
              [i, r] = (0, B.useState)(
                null === (n = l.items) || void 0 === n
                  ? void 0
                  : n.map(() => l.opened)
              );
            return (0, T.jsx)("div", {
              id: "module-".concat(l.uid),
              className: "page-builder-block ".concat(
                l.typeHandle,
                "-block module-margin"
              ),
              children:
                null === (t = l.items) || void 0 === t
                  ? void 0
                  : t.map((e, n) =>
                      (0, T.jsxs)(
                        "div",
                        {
                          className:
                            "accordion-item py-3 border-b transition-colors duration-300 ".concat(
                              i[n] ? "border-asphalt" : "border-grey-border"
                            ),
                          children: [
                            (0, T.jsxs)("button", {
                              className:
                                "flex items-center justify-between w-full text-left text-asphalt r-text-xl gap-4",
                              type: "button",
                              onClick: () =>
                                r((e) => {
                                  let t = [...e];
                                  return (t[n] = !t[n]), t;
                                }),
                              children: [
                                (0, T.jsx)("span", { children: e.title }),
                                (0, T.jsx)(eW.P.div, {
                                  animate: { rotate: i[n] ? 135 : 0 },
                                  children: (0, T.jsx)(nq.A, {
                                    className:
                                      "w-8 stroke-current flex-shrink-0",
                                  }),
                                }),
                              ],
                            }),
                            (0, T.jsx)(eW.P.div, {
                              className:
                                "wysiwyg text-asphalt r-text-base overflow-hidden r-max-w-[40] ml-auto",
                              initial: l.opened ? "open" : "collapsed",
                              animate: i[n] ? "open" : "collapsed",
                              variants: {
                                open: { height: "auto", opacity: 1 },
                                collapsed: { height: 0, opacity: 0 },
                              },
                              transition: {
                                duration: 0.5,
                                ease: [0.04, 0.62, 0.23, 0.98],
                              },
                              children: (0, T.jsx)("div", {
                                className: "py-8 sm:r-pb-[7] sm:r-pt-[4]",
                                children: (0, T.jsx)(eK.A, { content: e.text }),
                              }),
                            }),
                          ],
                        },
                        e.uid
                      )
                    ),
            });
          },
          cookiebotIntegration: (e) => {
            let { module: n } = e,
              t = (0, B.useRef)(null);
            return (
              (0, B.useEffect)(() => {
                let e = new DOMParser()
                    .parseFromString(n.script, "text/html")
                    .querySelector("script"),
                  l = null == e ? void 0 : e.getAttribute("src"),
                  i = null == e ? void 0 : e.getAttribute("id");
                if (l) {
                  let e = document.createElement("script");
                  (e.src = l),
                    (e.async = !0),
                    (e.id = i),
                    t.current.appendChild(e);
                }
              }, [n.script]),
              (0, T.jsxs)("div", {
                className: "cookiebot-integration module-margin",
                children: [
                  n.title &&
                    (0, T.jsx)("h2", {
                      className: "h2-text-alt flex-1 r-mb-10",
                      children: n.title,
                    }),
                  (0, T.jsx)("div", {
                    className:
                      "wysiwyg r-max-w-[67.5rem] flex-1 text-asphalt r-text-lg",
                    id: "cookie-content",
                    ref: t,
                  }),
                ],
              })
            );
          },
          buttons: (e) => {
            let { module: n } = e,
              { button: t, button2: l } = n;
            return (0, T.jsxs)("div", {
              id: "module-".concat(n.uid),
              className: "page-builder-block ".concat(
                n.typeHandle,
                "-block module-margin flex flex-row items-center r-gap-4"
              ),
              children: [
                (0, T.jsx)(e0.A, { linkProps: t }),
                (0, T.jsx)(z.A, { linkProps: l }),
              ],
            });
          },
        },
        nF = (e) => {
          let { globals: n, entry: t } = e,
            { currentSite: l, currentRoute: i } = n,
            { data: r } = (0, M.I)(nU, {
              variables: {
                section: null == i ? void 0 : i.cms.section,
                uri: t.uri,
                siteId: null == l ? void 0 : l.siteId,
              },
            });
          if (!(null == r ? void 0 : r.entry)) return null;
          let { textModules: a } = r.entry;
          return (0, T.jsx)("div", {
            className: "container full",
            children:
              null == a
                ? void 0
                : a.map((e) => {
                    let { typeHandle: n } = e,
                      t = nz[n];
                    return t ? (0, T.jsx)(t, { module: e }, e.uid) : null;
                  }),
          });
        },
        nG = (e) => {
          let { globals: n, data: t } = e,
            { entry: l } = t;
          return (0, T.jsxs)("div", {
            className: "w-full",
            children: [
              (0, T.jsxs)("header", {
                className: "r-pt-[5.375] mb-8 sm:r-mb-[7.5] container full",
                children: [
                  (0, T.jsx)(e7, {
                    entry: l,
                    globals: n,
                    className: "r-mb-[6.25]",
                  }),
                  (0, T.jsx)("h1", {
                    className: "r-text-5xl mb-4 last:mb-0 leading-normal",
                    children: null == l ? void 0 : l.title,
                  }),
                  (0, T.jsx)("div", {
                    className:
                      "wysiwyg r-max-w-[40] mr-auto w-full text-grey r-text-base",
                    children: (0, T.jsx)(eK.A, {
                      content: null == l ? void 0 : l.text,
                    }),
                  }),
                ],
              }),
              (0, T.jsx)(nF, { globals: n, entry: l }),
            ],
          });
        },
        nV = (e) => {
          let { entry: n, globals: t } = e,
            { title: l, text: i, button: r, secondaryButton: a } = n;
          return (0, T.jsxs)("header", {
            className: "r-pt-[5.375] mb-8 sm:r-mb-[7.5] container full",
            children: [
              (0, T.jsx)(e7, {
                entry: n,
                globals: t,
                className: "r-mb-[6.25]",
              }),
              (0, T.jsx)("h1", {
                className: "r-text-5xl leading-[1.2] mb-4 last:mb-0",
                children: l,
              }),
              (0, T.jsx)("div", {
                className:
                  "wysiwyg r-max-w-[40] mr-auto w-full text-grey r-text-base",
                children: (0, T.jsx)(eK.A, { content: i }),
              }),
              (null == r ? void 0 : r.href) ||
                ((null == a ? void 0 : a.href) &&
                  (0, T.jsxs)("div", {
                    className: "flex r-mt-10 items-center gap-4 justify-center",
                    children: [
                      (0, T.jsx)(e0.A, { linkProps: r }),
                      (0, T.jsx)(z.A, { linkProps: a }),
                    ],
                  })),
            ],
          });
        };
      function nJ() {
        let e = (0, $._)([
          "\n  fragment bannerFragment on irPageBuilder_banner_BlockType {\n    id\n    uid\n    siteId\n    typeHandle\n    title: moduleTitle\n    text\n    anchor\n    primaryButton: button {\n      target\n      text\n      type\n      href: url\n      title\n    }\n    secondaryButton: button2 {\n      target\n      text\n      type\n      href: url\n      title\n    }\n    children {\n      ... on irPageBuilder_mediaItems_BlockType {\n        id\n        uid\n        siteId\n        typeHandle\n        ",
          "\n        credit: plainText\n        description: text\n      }\n    }\n  }\n",
        ]);
        return (
          (nJ = function () {
            return e;
          }),
          e
        );
      }
      let nZ = (0, E.J1)(nJ(), S.A);
      function nY() {
        let e = (0, $._)([
          "\n  fragment columnsFragment on irPageBuilder_columns_BlockType {\n    id\n    uid\n    siteId\n    typeHandle\n    anchor\n    title: moduleTitle\n    columns: children {\n      id\n      uid\n      siteId\n      typeHandle\n      ... on irPageBuilder_column_BlockType {\n        title: moduleTitle\n        secondaryButtonStyle: lightswitch\n        text\n        button {\n          target\n          text\n          type\n          href: url\n          title\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (nY = function () {
            return e;
          }),
          e
        );
      }
      let nX = (0, E.J1)(nY());
      function nW() {
        let e = (0, $._)([
          "\n  fragment peopleFragment on irPageBuilder_people_BlockType {\n    id\n    uid\n    siteId\n    typeHandle\n    anchor\n    title: moduleTitle\n    showLinks: lightswitch\n    category: peopleCategory {\n      id\n      uid\n      siteId\n      title\n    }\n    people {\n      id\n      uid\n      siteId\n      title\n      ... on people_default_Entry {\n        position: plainText\n        category: peopleCategory {\n          id\n          uid\n          siteId\n          title\n        }\n        links {\n          ... on links_link_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            itemLink {\n              target\n              text\n              type\n              href: url\n              title\n            }\n          }\n        }\n        image {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          url(width: 100)\n          primaryUrl: url\n          alt\n          ... on uploads_Asset {\n            text\n            plainText\n            altTranslation: plainText2\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (nW = function () {
            return e;
          }),
          e
        );
      }
      let nK = (0, E.J1)(nW());
      function n0() {
        let e = (0, $._)([
          "\n  fragment textFragment on irPageBuilder_text_BlockType {\n    id\n    uid\n    siteId\n    typeHandle\n    anchor\n    title: moduleTitle\n    blocks: children {\n      ... on irPageBuilder_textBlock_BlockType {\n        id\n        uid\n        siteId\n        typeHandle\n        title: moduleTitle\n        blockAlignment\n        text: text4\n        button {\n          target\n          text\n          type\n          href: url\n          title\n        }\n        secondaryButton: button2 {\n          target\n          text\n          type\n          href: url\n          title\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (n0 = function () {
            return e;
          }),
          e
        );
      }
      let n1 = (0, E.J1)(n0());
      function n2() {
        let e = (0, $._)([
          "\n  fragment layoutFragment on irPageBuilder_layout_BlockType {\n    id\n    uid\n    siteId\n    typeHandle\n    title: moduleTitle\n    text\n    anchor\n    blocks: children {\n      ...accordionFragment\n      ...contactFragment\n      ...linksFragment\n      ...calendarFragment\n      ...tableFragment\n    }\n  }\n",
        ]);
        return (
          (n2 = function () {
            return e;
          }),
          e
        );
      }
      let n5 = (0, E.J1)(n2());
      function n4() {
        let e = (0, $._)([
          "\n  fragment contactFragment on irPageBuilder_contact_BlockType {\n    id\n    uid\n    siteId\n    typeHandle\n    title: moduleTitle\n    contactRows: children {\n      ... on irPageBuilder_contactRow_BlockType {\n        id\n        uid\n        siteId\n        typeHandle\n        title: moduleTitle\n        text\n      }\n    }\n  }\n",
        ]);
        return (
          (n4 = function () {
            return e;
          }),
          e
        );
      }
      let n3 = (0, E.J1)(n4());
      function n6() {
        let e = (0, $._)([
          "\n  fragment accordionFragment on irPageBuilder_accordion_BlockType {\n    id\n    uid\n    siteId\n    typeHandle\n    groups: children {\n      ... on irPageBuilder_accordionGroup_BlockType {\n        id\n        uid\n        siteId\n        typeHandle\n        title: moduleTitle\n        accordionItems: children {\n          ... on irPageBuilder_accordionItems_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            title: moduleTitle\n            text\n            links {\n              ... on links_link_BlockType {\n                id\n                uid\n                siteId\n                itemLink {\n                  target\n                  text\n                  type\n                  href: url\n                  title\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (n6 = function () {
            return e;
          }),
          e
        );
      }
      let n8 = (0, E.J1)(n6());
      function n7() {
        let e = (0, $._)([
          "\n  fragment calendarFragment on irPageBuilder_calendar_BlockType {\n    id\n    uid\n    siteId\n    typeHandle\n    title: moduleTitle\n    calendarItems: children {\n      ... on irPageBuilder_calendarItem_BlockType {\n        id\n        uid\n        siteId\n        typeHandle\n        title: moduleTitle\n        date\n        showAddToCalendar: lightswitch\n      }\n    }\n  }\n",
        ]);
        return (
          (n7 = function () {
            return e;
          }),
          e
        );
      }
      let n9 = (0, E.J1)(n7());
      function te() {
        let e = (0, $._)([
          "\n  fragment linksFragment on irPageBuilder_links_BlockType {\n    id\n    uid\n    siteId\n    typeHandle\n    title: moduleTitle\n    button {\n      target\n      text\n      type\n      href: url\n      title\n    }\n  }\n",
        ]);
        return (
          (te = function () {
            return e;
          }),
          e
        );
      }
      let tn = (0, E.J1)(te());
      function tt() {
        let e = (0, $._)([
          "\n  fragment tableFragment on irPageBuilder_table_BlockType {\n    id\n    uid\n    siteId\n    typeHandle\n    zebra: lightswitch\n    wide: lightswitch2\n    table {\n      rows\n      columns {\n        heading\n        width\n        align\n      }\n    }\n  }\n",
        ]);
        return (
          (tt = function () {
            return e;
          }),
          e
        );
      }
      let tl = (0, E.J1)(tt());
      function ti() {
        let e = (0, $._)([
          '\n  query GetPeopleByCategory(\n    $relatedTo: [QueryArgument]\n    $siteId: [QueryArgument]\n  ) {\n    entries(section: "people", relatedTo: $relatedTo, siteId: $siteId) {\n      id\n      uid\n      siteId\n      title\n      ... on people_default_Entry {\n        position: plainText\n        category: peopleCategory {\n          id\n          uid\n          siteId\n          title\n        }\n        links {\n          ... on links_link_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            itemLink {\n              target\n              text\n              type\n              href: url\n              title\n            }\n          }\n        }\n        image {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          url(width: 100)\n          primaryUrl: url\n          alt\n          ... on uploads_Asset {\n            text\n            plainText\n            altTranslation: plainText2\n          }\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (ti = function () {
            return e;
          }),
          e
        );
      }
      function tr() {
        let e = (0, $._)([
          '\n  query Entry_IRPage_Modules($uri: [String], $siteId: [QueryArgument]) {\n    entry(section: "pages", type: "irPages", uri: $uri, siteId: $siteId) {\n      siteId\n      id\n      uid\n      ... on pages_irPages_Entry {\n        irPageBuilder(level: 1) {\n          ...bannerFragment\n          ...columnsFragment\n          ...peopleFragment\n          ...textFragment\n          ...layoutFragment\n        }\n      }\n    }\n  }\n  ',
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (tr = function () {
            return e;
          }),
          e
        );
      }
      (0, E.J1)(ti());
      let ta = (0, E.J1)(tr(), nZ, nX, nK, n1, n5, n3, n8, n9, tn, tl);
      var ts = t(28808);
      function to() {
        return (to = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var td = (0, B.forwardRef)(function (e, n) {
          return B.createElement(
            "svg",
            to(
              {
                width: 8,
                height: 8,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: n,
              },
              e
            ),
            c ||
              (c = B.createElement("path", {
                d: "m1.171 6.828 5.657-5.656m0 0H1.171m5.657 0v5.656",
                stroke: "#222",
              }))
          );
        }),
        tc = t(57707);
      let tu = function (e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "Europe/Oslo";
          return nv.c9.fromISO(e, { zone: n }).toFormat("dd.MM.yyyy");
        },
        tm = {
          accordion: (e) => {
            let { block: n, group: t } = e,
              l = t ? n.groups[t] : n.groups[0],
              [i, r] = (0, B.useState)(null);
            return (0, T.jsx)("div", {
              className: "links-block r-max-w-[40] w-full",
              children: (0, T.jsx)(nh.N, {
                mode: "wait",
                children: (0, T.jsx)(
                  eW.P.div,
                  {
                    initial: { opacity: 0, x: -50 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: 50 },
                    transition: { duration: 0.5 },
                    className: "accordion-group",
                    onAnimationComplete: () => {
                      Q().refresh();
                    },
                    children: l.accordionItems.map((e) => {
                      var n;
                      return (0, T.jsxs)(
                        eW.P.div,
                        {
                          className: "outer-wrapper overflow-hidden",
                          initial: "hidden",
                          whileInView: "visible",
                          whileHover: "hover",
                          animate: i === e.uid ? "hover" : null,
                          viewport: { once: !1, threshold: 1 },
                          children: [
                            (0, T.jsxs)(
                              "div",
                              {
                                id: "item-".concat(e.uid),
                                className: "accordion-item py-3",
                                children: [
                                  (0, T.jsxs)("button", {
                                    className:
                                      "flex items-center justify-between w-full text-left text-asphalt r-text-xl gap-4",
                                    type: "button",
                                    onClick: () => {
                                      r(i === e.uid ? null : e.uid);
                                    },
                                    children: [
                                      (0, T.jsx)("span", { children: e.title }),
                                      (0, T.jsx)(eW.P.div, {
                                        animate: {
                                          rotate: i === e.uid ? 135 : 0,
                                        },
                                        children: (0, T.jsx)(nq.A, {
                                          className:
                                            "w-4 stroke-current flex-shrink-0",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, T.jsx)(eW.P.div, {
                                    className: "overflow-hidden",
                                    initial: "collapsed",
                                    animate: i === e.uid ? "open" : "collapsed",
                                    variants: {
                                      open: { height: "auto", opacity: 1 },
                                      collapsed: { height: 0, opacity: 0 },
                                    },
                                    transition: {
                                      duration: 0.5,
                                      ease: [0.04, 0.62, 0.23, 0.98],
                                    },
                                    onAnimationComplete: () => {
                                      Q().refresh();
                                    },
                                    children: (0, T.jsxs)("div", {
                                      className:
                                        " r-pt-4 r-pb-8 flex flex-col r-gap-4",
                                      children: [
                                        e.text &&
                                          (0, T.jsx)("div", {
                                            className:
                                              "wysiwyg text-grey r-text-sm",
                                            children: (0, T.jsx)(eK.A, {
                                              content: e.text,
                                            }),
                                          }),
                                        (null === (n = e.links) || void 0 === n
                                          ? void 0
                                          : n.length) > 0 &&
                                          (0, T.jsx)("div", {
                                            className:
                                              "flex flex-wrap r-gap-x-[1.81] gap-y-4",
                                            children: e.links.map((e) =>
                                              (0, T.jsxs)(
                                                e8.A,
                                                {
                                                  target: e.itemLink.target,
                                                  href: e.itemLink.href,
                                                  title: e.itemLink.title,
                                                  className:
                                                    "text-asphalt r-text-sm inline-flex gap-2 items-center border-b border-grey-border pb-1 transition-colors duration-300 hover:text-forest hover:border-forest",
                                                  children: [
                                                    e.itemLink.text,
                                                    "_blank" ===
                                                      e.itemLink.target &&
                                                      (0, T.jsx)(td, {
                                                        className:
                                                          "w-4 ml-1 inline-block",
                                                      }),
                                                  ],
                                                },
                                                e.id
                                              )
                                            ),
                                          }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              e.uid
                            ),
                            (0, T.jsx)(eW.P.div, {
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
                              children: (0, T.jsx)(eW.P.div, {
                                className:
                                  "bg-asphalt h-full w-full origin-left",
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
                      );
                    }),
                  },
                  l.id
                ),
              }),
            });
          },
          calendar: (e) => {
            let { block: n } = e,
              [t, l] = (0, B.useState)(!1),
              i = (0, H.useTranslations)("common"),
              r = n.calendarItems || [],
              a = r.length > 7 ? r.slice(0, 7) : r,
              s = r.length > 7 ? r.slice(7) : [];
            return (0, T.jsx)("div", {
              className: "table-block r-max-w-[40] w-full",
              children: (0, T.jsxs)("table", {
                className: "w-full",
                children: [
                  (0, T.jsx)("thead", {
                    children: (0, T.jsx)("tr", {
                      children: (0, T.jsx)("th", {
                        colSpan: 3,
                        children: n.title,
                      }),
                    }),
                  }),
                  (0, T.jsxs)("tbody", {
                    children: [
                      null == a
                        ? void 0
                        : a.map((e, n) =>
                            (0, T.jsxs)(
                              "tr",
                              {
                                className: "flex flex-col sm:table-row",
                                children: [
                                  (0, T.jsx)("td", {
                                    className: "!px-0 !pb-0 sm:!pr-3 sm:!pb-3",
                                    children: tu(e.date),
                                  }),
                                  (0, T.jsx)("td", {
                                    className:
                                      "!px-0 !pb-0 !pt-0 sm:!pr-3 sm:!pb-3",
                                    children: e.title,
                                  }),
                                  (0, T.jsx)("td", {
                                    className:
                                      "text-left sm:text-right !px-0 sm:!pr-3",
                                    children: e.showAddToCalendar
                                      ? (0, T.jsx)(z.A, {
                                          type: "button",
                                          external: !0,
                                          onClick: () => {
                                            let n = nv.c9
                                                .fromISO(e.date)
                                                .setLocale("nb-NO")
                                                .setZone("Europe/Oslo")
                                                .setLocale("nb-NO"),
                                              t = {
                                                title: e.title,
                                                start: [
                                                  n.year,
                                                  n.month,
                                                  n.day,
                                                  n.hour,
                                                  n.minute,
                                                ],
                                              };
                                            tc.lh(t, (e, n) => {
                                              if (e) {
                                                console.log(e);
                                                return;
                                              }
                                              window.open(
                                                "data:text/calendar;charset=utf-8,".concat(
                                                  encodeURIComponent(n)
                                                )
                                              );
                                            });
                                          },
                                          children: i("add_to_calendar"),
                                        })
                                      : null,
                                  }),
                                ],
                              },
                              n
                            )
                          ),
                      (0, T.jsx)(nh.N, {
                        children:
                          t &&
                          (null == s
                            ? void 0
                            : s.map((e, n) =>
                                (0, T.jsxs)(
                                  eW.P.tr,
                                  {
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: { opacity: 0 },
                                    layout: "size",
                                    children: [
                                      (0, T.jsx)("td", {
                                        children: tu(e.date),
                                      }),
                                      (0, T.jsx)("td", { children: e.title }),
                                      (0, T.jsx)("td", {
                                        align: "right",
                                        children: e.showAddToCalendar
                                          ? (0, T.jsx)(z.A, {
                                              type: "button",
                                              external: !0,
                                              onClick: () => {
                                                let n = nv.c9
                                                    .fromISO(e.date)
                                                    .setLocale("nb-NO")
                                                    .setZone("Europe/Oslo")
                                                    .setLocale("nb-NO"),
                                                  t = {
                                                    title: e.title,
                                                    start: [
                                                      n.year,
                                                      n.month,
                                                      n.day,
                                                      n.hour,
                                                      n.minute,
                                                    ],
                                                  };
                                                tc.lh(t, (e, n) => {
                                                  if (e) {
                                                    console.log(e);
                                                    return;
                                                  }
                                                  window.open(
                                                    "data:text/calendar;charset=utf-8,".concat(
                                                      encodeURIComponent(n)
                                                    )
                                                  );
                                                });
                                              },
                                              children: i("add_to_calendar"),
                                            })
                                          : null,
                                      }),
                                    ],
                                  },
                                  n
                                )
                              )),
                      }),
                      (null == s ? void 0 : s.length) > 0 &&
                        (0, T.jsx)("tr", {
                          className: "!border-b-0",
                          children: (0, T.jsx)("td", {
                            colSpan: n.table.columns.length,
                            children: (0, T.jsx)("button", {
                              className: "text-asphalt underline",
                              onClick: () => l(!t),
                              children: t
                                ? i("showLess")
                                : i("showMore", { count: s.length }),
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            });
          },
          contact: (e) => {
            var n;
            let { block: t } = e;
            return (0, T.jsxs)("div", {
              className: "contact-block r-max-w-[26.25] w-full",
              children: [
                t.title &&
                  (0, T.jsx)("h3", {
                    className: "h6-text mb-3",
                    children: t.title,
                  }),
                (0, T.jsx)("div", {
                  className: "contact-rows body-text",
                  children:
                    null === (n = t.contactRows) || void 0 === n
                      ? void 0
                      : n.map((e) =>
                          (0, T.jsxs)(
                            "div",
                            {
                              className:
                                "contact-row r-py-6 border-t border-grey flex r-gap-5",
                              children: [
                                (0, T.jsx)("div", {
                                  className: "contact-row-title r-w-[5.625]",
                                  children: e.title,
                                }),
                                (0, T.jsx)("div", {
                                  className: "contact-row-text flex-1 wysiwyg",
                                  children: (0, T.jsx)(eK.A, {
                                    content: e.text,
                                  }),
                                }),
                              ],
                            },
                            e.uid
                          )
                        ),
                }),
              ],
            });
          },
          links: (e) => {
            let { block: n } = e;
            return (0, T.jsxs)("div", {
              className: "links-block r-max-w-[26.25] w-full",
              children: [
                n.title &&
                  (0, T.jsx)("p", {
                    className: "link-description body-text r-mb-6",
                    children: n.title,
                  }),
                (0, T.jsx)(z.A, { linkProps: n.button }),
              ],
            });
          },
          table: (e) => {
            var n, t, l;
            let { block: i } = e,
              [r, a] = (0, B.useState)(!1),
              s = (0, H.useTranslations)("common"),
              o =
                (null === (n = i.table) || void 0 === n ? void 0 : n.rows) ||
                [],
              d = o.length > 7 ? o.slice(0, 7) : o,
              c = o.length > 7 ? o.slice(7) : [];
            return (0, T.jsx)("div", {
              className: "table-block overflow-auto "
                .concat(i.wide ? "r-max-w-[53.75]" : "r-max-w-[40]", " ")
                .concat(i.zebra ? "zebra" : "", " w-full"),
              children: (0, T.jsxs)("table", {
                children: [
                  (0, T.jsx)("thead", {
                    children: (0, T.jsx)("tr", {
                      children:
                        null === (l = i.table) || void 0 === l
                          ? void 0
                          : null === (t = l.columns) || void 0 === t
                          ? void 0
                          : t.map((e) =>
                              (0, T.jsx)(
                                "th",
                                {
                                  className: ""
                                    .concat(
                                      "right" === e.align ? "text-right" : "",
                                      " "
                                    )
                                    .concat(e.width),
                                  children: e.heading,
                                },
                                e.heading
                              )
                            ),
                    }),
                  }),
                  (0, T.jsxs)("tbody", {
                    children: [
                      null == d
                        ? void 0
                        : d.map((e, n) =>
                            (0, T.jsx)(
                              "tr",
                              {
                                children: e.map((e, n) =>
                                  (0, T.jsx)(
                                    "td",
                                    {
                                      className: "".concat(
                                        "right" === i.table.columns[n].align
                                          ? "text-right"
                                          : ""
                                      ),
                                      children: e,
                                    },
                                    n
                                  )
                                ),
                              },
                              n
                            )
                          ),
                      (0, T.jsx)(nh.N, {
                        children:
                          r &&
                          (null == c
                            ? void 0
                            : c.map((e, n) =>
                                (0, T.jsx)(
                                  eW.P.tr,
                                  {
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: { opacity: 0 },
                                    layout: "size",
                                    onAnimationComplete: () => {
                                      Q().refresh();
                                    },
                                    children: e.map((e, n) =>
                                      (0, T.jsx)(
                                        "td",
                                        {
                                          className: "".concat(
                                            "right" === i.table.columns[n].align
                                              ? "text-right"
                                              : ""
                                          ),
                                          children: e,
                                        },
                                        n
                                      )
                                    ),
                                  },
                                  n
                                )
                              )),
                      }),
                      (null == c ? void 0 : c.length) > 0 &&
                        (0, T.jsx)("tr", {
                          className: "!border-b-0",
                          children: (0, T.jsx)("td", {
                            colSpan: i.table.columns.length,
                            children: (0, T.jsx)("button", {
                              className: "text-asphalt underline",
                              onClick: () => a(!r),
                              children: r
                                ? s("showLess")
                                : s("showMore", { count: c.length }),
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            });
          },
        };
      var tp = t(28667),
        th = t(77969),
        tg = t(76852);
      let tx = {
          text: (e) => {
            let { module: n } = e;
            return (0, T.jsx)(ts.A, { module: n, anchor: n.anchor });
          },
          layout: (e) => {
            var n;
            let { module: t } = e,
              [l, i] = (0, B.useState)(0),
              r = t.blocks.find(
                (e) => "accordion" === e.typeHandle && e.groups.length > 1
              );
            return (0, T.jsxs)("div", {
              id: "module-".concat(t.uid),
              className: "page-builder-block ".concat(
                t.typeHandle,
                "-block container full module-margin"
              ),
              "data-anchor": t.anchor,
              children: [
                t.title &&
                  (0, T.jsxs)("h2", {
                    className: "h2-text-alt text-asphalt r-mb-10 sm:r-mb-20",
                    children: [
                      (0, T.jsx)(F.A, { children: t.title }),
                      (0, T.jsx)(eW.P.div, {
                        className:
                          "w-full h-[1px] bg-grey-border r-mt-5 origin-left",
                        variants: {
                          hidden: { scaleX: 0 },
                          visible: { scaleX: 1 },
                        },
                        transition: {
                          duration: 1.5,
                          ease: [0.04, 0.62, 0.23, 0.98],
                          delay: 0.2,
                        },
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: !0, threshold: 1 },
                      }),
                    ],
                  }),
                (0, T.jsxs)("div", {
                  className:
                    "flex flex-col lg:flex-row items-start justify-between r-gap-10",
                  children: [
                    r &&
                      (0, T.jsx)("div", {
                        className: "flex items-center gap-3 self-start r-mb-4",
                        children: r.groups.map((e, n) =>
                          (0, T.jsxs)(
                            "button",
                            {
                              type: "button",
                              onClick: () => i(n),
                              className:
                                "text-sm text-left px-6 h-[3.25rem] inline-flex items-center rounded-button transition-colors duration-300  bg-white border border-forest overflow-hidden isolate relative hover:bg-sand-light ".concat(
                                  l === n ? "text-white" : "text-forest"
                                ),
                              children: [
                                e.title,
                                (0, T.jsx)(eW.P.div, {
                                  className:
                                    "absolute left-0 top-0 w-full h-full bg-forest rounded-button -z-10",
                                  initial: { x: l > n ? "-100%" : "100%" },
                                  animate: {
                                    x: l === n ? 0 : l > n ? "100%" : "-100%",
                                  },
                                }),
                              ],
                            },
                            e.uid
                          )
                        ),
                      }),
                    t.text &&
                      (0, T.jsx)("div", {
                        className:
                          "wysiwyg r-text-[1] flex-1 r-max-w-[26.25] text-grey",
                        children: (0, T.jsx)(eK.A, { content: t.text }),
                      }),
                    (0, T.jsx)("div", {
                      className:
                        "max-w-full w-full sm:w-auto sm:ml-auto flex-1 flex flex-col items-end r-gap-10",
                      children:
                        null === (n = t.blocks) || void 0 === n
                          ? void 0
                          : n.map((e) => {
                              let { typeHandle: n } = e,
                                t = tm[n];
                              return t
                                ? (0, T.jsx)(t, { block: e, group: l }, e.uid)
                                : null;
                            }),
                    }),
                  ],
                }),
              ],
            });
          },
          banner: (e) => {
            let { module: n } = e;
            return (0, T.jsx)(tp.A, { module: n, anchor: n.anchor });
          },
          people: (e) => {
            let { module: n } = e,
              [t, l] = (0, B.useState)(null),
              [i] = (0, th._)(ec._[0].query, {
                onCompleted: (e) => {
                  var t;
                  let i = (null == e ? void 0 : e.entries) || [];
                  if (
                    (null === (t = n.category) || void 0 === t
                      ? void 0
                      : t.length) > 1
                  ) {
                    let e = [];
                    n.category.forEach((n) => {
                      e.push({
                        id: n.id,
                        uid: n.uid,
                        title: n.title,
                        people: i.filter((e) =>
                          e.category.some((e) => n.id === e.id)
                        ),
                      });
                    }),
                      l(e);
                  } else l([{ id: null, uid: null, title: null, people: i }]);
                },
              });
            return (
              (0, B.useEffect)(() => {
                var e, t;
                (null === (e = n.people) || void 0 === e
                  ? void 0
                  : e.length) === 0
                  ? i({
                      variables: {
                        siteId: n.siteId,
                        relatedTo:
                          null === (t = n.category) || void 0 === t
                            ? void 0
                            : t.map((e) => e.id),
                      },
                    })
                  : l([{ id: null, uid: null, title: null, people: n.people }]);
              }, [n, i]),
              (0, T.jsx)(tg.A, { module: n, items: t, anchor: n.anchor })
            );
          },
          columns: (e) => {
            let { module: n } = e;
            return (0, T.jsxs)("div", {
              id: "module-".concat(n.uid),
              className: "page-builder-block ".concat(
                n.typeHandle,
                "-block container full module-margin"
              ),
              "data-anchor": n.anchor,
              children: [
                n.title &&
                  (0, T.jsxs)("h2", {
                    className: "h2-text-alt text-asphalt r-mb-10 sm:r-mb-20",
                    children: [
                      (0, T.jsx)(F.A, { children: n.title }),
                      (0, T.jsx)(eW.P.div, {
                        className:
                          "w-full h-[1px] bg-grey-border r-mt-5 origin-left",
                        variants: {
                          hidden: { scaleX: 0 },
                          visible: { scaleX: 1 },
                        },
                        transition: {
                          duration: 1.5,
                          ease: [0.04, 0.62, 0.23, 0.98],
                          delay: 0.2,
                        },
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: !0, threshold: 1 },
                      }),
                    ],
                  }),
                (0, T.jsx)("div", {
                  className: "grid grid-cols-1 sm:grid-cols-3 r-gap-[3.21]",
                  children: n.columns.map((e) =>
                    (0, T.jsxs)(
                      eW.P.div,
                      {
                        className: "flex flex-col items-start r-gap-5",
                        initial: { opacity: 0, y: 50 },
                        whileInView: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.5,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                        },
                        viewport: { once: !0, threshold: 0.5 },
                        children: [
                          e.title &&
                            (0, T.jsx)("h3", {
                              className: "r-text-2xl text-asphalt",
                              children: e.title,
                            }),
                          e.text &&
                            (0, T.jsx)("div", {
                              className: "text-base text-asphalt wysiwyg",
                              children: (0, T.jsx)(eK.A, { content: e.text }),
                            }),
                          e.button &&
                            (0, T.jsx)(z.A, {
                              linkProps: e.button,
                              className: e.secondaryButtonStyle ? "" : "plain",
                            }),
                        ],
                      },
                      e.uid
                    )
                  ),
                }),
              ],
            });
          },
        },
        tv = (0, Z.WQ)("ui")(
          (0, Z.PA)((e) => {
            let { globals: n, entry: t, ui: l } = e,
              { currentSite: i, currentRoute: r } = n,
              { data: a } = (0, M.I)(ta, {
                variables: {
                  section: null == r ? void 0 : r.cms.section,
                  uri: t.uri,
                  siteId: null == i ? void 0 : i.siteId,
                },
              }),
              { irPageBuilder: s } = (null == a ? void 0 : a.entry) || {};
            return (
              (0, B.useEffect)(() => {
                let e = () => {
                  let { hash: e } = window.location;
                  if (e) {
                    let n = '[data-anchor="'
                      .concat(
                        (function () {
                          let {
                            protocol: e,
                            hostname: n,
                            port: t,
                            pathname: l,
                            search: i,
                          } = window.location;
                          return ""
                            .concat(e, "//")
                            .concat(n)
                            .concat(t ? ":".concat(t) : "")
                            .concat(l)
                            .concat(i);
                        })()
                      )
                      .concat(e, '"]');
                    setTimeout(() => {
                      let t = document.querySelector(n);
                      if (
                        (t ||
                          (t = document.querySelector(
                            '[data-anchor="'.concat(e, '"]')
                          )),
                        t ||
                          (t = document.querySelector(
                            '[data-anchor="'.concat(e.replace("#", ""), '"]')
                          )),
                        t)
                      ) {
                        let i = 0;
                        if (t.dataset.offset)
                          i += parseInt(t.dataset.offset, 10);
                        else {
                          let e = parseInt(
                            window
                              .getComputedStyle(t)
                              .getPropertyValue("margin-top"),
                            10
                          );
                          if (e) i += e;
                          else {
                            let e = document.querySelector(".top-bar");
                            e && (i += e.offsetHeight);
                          }
                        }
                        l.smoother
                          ? gsap.to(l.smoother, {
                              duration: 2,
                              scrollTo: l.smoother.offset(
                                t,
                                "top ".concat(i, "px")
                              ),
                              ease: "power4.inOut",
                              onComplete: () => {
                                let t = document.querySelector(n);
                                t ||
                                  (t = document.querySelector(
                                    '[data-anchor="'.concat(e, '"]')
                                  )),
                                  t ||
                                    (t = document.querySelector(
                                      '[data-anchor="'.concat(
                                        e.replace("#", ""),
                                        '"]'
                                      )
                                    )),
                                  l.smoother.scrollTop() <
                                    l.smoother.offset(
                                      t,
                                      "top ".concat(i, "px")
                                    ) &&
                                    l.smoother.scrollTop(
                                      l.smoother.offset(
                                        t,
                                        "top ".concat(i, "px")
                                      )
                                    );
                              },
                            })
                          : gsap.to(window, {
                              duration: 1,
                              scrollTo: { y: t, offsetY: i },
                              ease: "power4.inOut",
                            });
                      }
                    }, 500);
                  }
                };
                return (
                  e(),
                  window.addEventListener("hashchange", e),
                  () => {
                    window.removeEventListener("hashchange", e);
                  }
                );
              }, [s, l.menuState, l.menuRef, l.smoother]),
              (0, T.jsx)("div", {
                className: "modules",
                children:
                  null == s
                    ? void 0
                    : s.map((e) => {
                        let { typeHandle: n } = e,
                          t = tx[n];
                        return t ? (0, T.jsx)(t, { module: e }, e.uid) : null;
                      }),
              })
            );
          })
        ),
        tf = X()(() => t.e(7900).then(t.bind(t, 7900)), {
          loadableGenerated: { webpack: () => [7900] },
          ssr: !1,
        }),
        tw = (e) => {
          let { globals: n, data: t } = e,
            { entry: l } = t;
          return (0, T.jsxs)("div", {
            className: "w-full",
            children: [
              (null == l ? void 0 : l.level) > 2
                ? (0, T.jsx)(nV, { entry: l, globals: n })
                : (0, T.jsx)(ni, { globals: n }),
              (0, T.jsx)(tf, { globals: n, entry: l }),
              (0, T.jsx)(tv, { globals: n, entry: l }),
            ],
          });
        },
        ty = (e) => {
          let { globals: n } = e;
          return (0, T.jsxs)("div", {
            className: "w-full",
            children: [
              (0, T.jsx)(ni, { globals: n }),
              (0, T.jsx)(eY, { globals: n }),
            ],
          });
        };
      var tb = t(83643),
        tA = t.n(tb),
        tj = t(91567),
        tI = t(97106),
        tk = t(31806),
        tN = t(39925);
      let t_ = (e) => {
        let { hit: n } = e;
        return (0, T.jsxs)(e8.A, {
          href: n.url,
          className: "r-pb-6 border-b border-grey-border relative block group",
          children: [
            (0, T.jsx)("div", {
              className: "tags flex gap-4 mb-1",
              children: (0, T.jsx)("div", {
                className:
                  "tag bg-grey-bgHover rounded-button px-[0.62rem] py-[0.56rem] text-xs text-grey",
                children: n.section,
              }),
            }),
            (0, T.jsx)("h3", {
              className: "r-text-lg text-asphalt mb-1",
              children: n.title,
            }),
            (0, T.jsx)("p", {
              className: "r-text-xs text-grey underline",
              children: n.url,
            }),
            (0, T.jsx)("p", {
              className: "text-grey mt-2 text-sm",
              children: (0, T.jsx)(eK.A, {
                content: Array.isArray(n.description)
                  ? n.description[0]
                  : n.description,
              }),
            }),
            (0, T.jsx)("div", {
              className:
                "absolute left-0 bottom-0 w-full h-[1px] bg-asphalt scale-x-0 transition-transform duration-1000 group-hover:scale-x-100 z-10 origin-left",
            }),
          ],
        });
      };
      var tT = t(95936),
        tM = t(20750),
        t$ = t(22360);
      let tE = (e) => {
          let n = (0, t$.y)(),
            t = (0, H.useTranslations)("common"),
            { query: l, refine: i } = (0, tT.V)(e),
            { status: r } = (0, tM.J)(),
            [a, s] = (0, B.useState)(l),
            o = (0, B.useRef)(null),
            d = "stalled" === r;
          function c(e) {
            s(e),
              i(e),
              (null == e ? void 0 : e.length) > 3 &&
                n({
                  event: "site_search",
                  searchquery: e,
                  location: "Search page",
                });
          }
          return (0, T.jsx)("div", {
            className:
              "flex gap-4 r-mb-8 border border-grey-border rounded-[6.25rem] r-pl-4 pr-[0.31rem] py-[0.31rem] r-text-sm",
            children: (0, T.jsxs)("form", {
              action: "",
              role: "search",
              noValidate: !0,
              className: "w-full flex justify-between items-center gap-4",
              onSubmit: (e) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  o.current && o.current.blur();
              },
              onReset: (e) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  c(""),
                  o.current && o.current.focus();
              },
              children: [
                (0, T.jsx)("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 14 14",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: (0, T.jsx)("path", {
                    d: "M13 13.2109L9.5 9.71094M11 6.21094C11 8.97236 8.76142 11.2109 6 11.2109C3.23858 11.2109 1 8.97236 1 6.21094C1 3.44951 3.23858 1.21094 6 1.21094C8.76142 1.21094 11 3.44951 11 6.21094Z",
                    stroke: "#767572",
                  }),
                }),
                (0, T.jsx)("input", {
                  ref: o,
                  autoComplete: "off",
                  autoCorrect: "off",
                  autoCapitalize: "off",
                  placeholder: t("search.input"),
                  spellCheck: !1,
                  maxLength: 512,
                  type: "text",
                  className: "flex-1 r-text-sm outline-none bg-transparent",
                  value: a,
                  onChange: (e) => {
                    c(e.currentTarget.value);
                  },
                  autoFocus: !0,
                }),
                (0, T.jsx)("button", {
                  type: "reset",
                  hidden: 0 === a.length || d,
                  children: (0, T.jsxs)("svg", {
                    width: "12",
                    height: "13",
                    viewBox: "0 0 12 13",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      (0, T.jsx)("path", {
                        d: "M2 10.2109L9.99997 2.21097",
                        stroke: "#767572",
                      }),
                      (0, T.jsx)("path", {
                        d: "M2 2.21094L9.99997 10.2109",
                        stroke: "#767572",
                      }),
                    ],
                  }),
                }),
                (0, T.jsx)("span", { hidden: !d, children: "Searching…" }),
                (0, T.jsx)("button", {
                  type: "submit",
                  className:
                    "bg-asphalt text-white rounded-[6.25rem] r-px-4 py-3 r-text-sm flex-shrink-0",
                  children: t("search.button"),
                }),
              ],
            }),
          });
        },
        tS = () => {
          let e = (0, H.useTranslations)("common"),
            { indexUiState: n, results: t } = (0, tM.J)();
          return (0, T.jsx)("p", {
            className:
              "w-full r-mb-8 border-b border-grey-border pb-5 r-text-lg",
            children: e.rich("search.results", {
              query: () =>
                (0, T.jsx)("span", {
                  className: "text-grey",
                  dangerouslySetInnerHTML: {
                    __html: "&quot;".concat(
                      n.query || e("search.allResults"),
                      "&quot;"
                    ),
                  },
                }),
              count: t.nbHits,
            }),
          });
        },
        tC = tA()("1KCYZ3OU4D", "085f6f00ce6efa0cada1d28649ffdb8e"),
        tD = (e) => {
          let { globals: n } = e,
            t = (0, H.useTranslations)("common"),
            { currentSite: l } = n,
            { siteId: i } = l,
            [r, a] = (0, B.useState)(!0);
          return (0, T.jsxs)(tj.G, {
            indexName: "Zaptec",
            searchClient: tC,
            routing: !0,
            children: [
              (0, T.jsx)(tI.Z, {
                hitsPerPage: 20,
                filters: "siteId:".concat(i),
                distinct: !0,
                facetingAfterDistinct: !0,
              }),
              (0, T.jsx)(tE, {}),
              (0, T.jsxs)("div", {
                className: "flex flex-col md:flex-row gap-8 md:r-gap-4",
                children: [
                  (0, T.jsxs)("div", {
                    className: "menu md:r-max-w-[14] w-full filters",
                    children: [
                      (0, T.jsxs)("button", {
                        className:
                          "r-text-lg text-asphalt r-mb-4 flex items-center gap-2 w-full",
                        onClick: () => {
                          a(!r);
                        },
                        children: [
                          t("search.filterResults"),
                          (0, T.jsx)(eW.P.svg, {
                            width: "12",
                            height: "7",
                            viewBox: "0 0 12 7",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            animate: { rotate: r ? 180 : 0 },
                            className: "flex-shrink-0 block md:hidden",
                            children: (0, T.jsx)("path", {
                              d: "M6 6.71094L0.803848 0.710938L11.1962 0.710938L6 6.71094Z",
                              fill: "#222222",
                            }),
                          }),
                        ],
                      }),
                      (0, T.jsx)(eW.P.div, {
                        initial: !1,
                        animate: { height: r ? "auto" : 0 },
                        transition: { duration: 0.3 },
                        className: "overflow-hidden",
                        children: (0, T.jsx)(tk.W, {
                          attribute: "section",
                          sortBy: ["name:asc"],
                          transformItems: (e) => {
                            let n = e.map((e) => ({
                              ...e,
                              label: t("search.section.".concat(e.label)),
                            }));
                            return (
                              console.log(e),
                              n.unshift({
                                label: t("search.all"),
                                count: e.reduce((e, n) => e + n.count, 0),
                                isRefined: e.every((e) => !e.isRefined),
                                value: null,
                              }),
                              n
                            );
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, T.jsxs)("div", {
                    className: "flex-1",
                    children: [
                      (0, T.jsx)(tS, {}),
                      (0, T.jsx)(tN.h, {
                        hitComponent: t_,
                        showPrevious: !1,
                        classNames: {
                          list: "flex flex-col r-gap-6",
                          loadMore:
                            "bg-grey-button text-asphalt border-grey-button text-xs text-center px-4 h-[2.75rem] inline-flex items-center rounded-button isolate relative overflow-hidden border border-asphalt bg-asphalt transition-colors duration-300 z-[1] r-mt-[2] cursor-pointer",
                          disabledLoadMore: "hidden",
                        },
                        translations: {
                          showMoreButtonText: t("search.showMore"),
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        tB = (e) => {
          let { globals: n, data: t } = e,
            { entry: l } = t;
          return (0, T.jsx)("div", {
            className: "container search-page",
            children: (0, T.jsxs)("div", {
              className: "inner r-max-w-[54] mx-auto w-full",
              children: [
                (0, T.jsx)("h1", {
                  className: "h2-text-alt r-mt-[10] r-mb-4",
                  children: l.title,
                }),
                (0, T.jsx)(tD, { globals: n }),
              ],
            }),
          });
        },
        tH = (e) => {
          let { items: n } = e,
            [t, l] = (0, B.useState)(0);
          return (0, T.jsx)("div", {
            className: "accordion-list flex flex-col gap-4 r-mt-12",
            children:
              null == n
                ? void 0
                : n.map((e) =>
                    (0, T.jsxs)(
                      "div",
                      {
                        className:
                          "accordion-item py-3 border-b transition-colors duration-300 ".concat(
                            t === e.uid
                              ? "border-asphalt"
                              : "border-grey-border"
                          ),
                        children: [
                          (0, T.jsxs)("button", {
                            className:
                              "flex items-center justify-between w-full text-left text-asphalt r-text-xl gap-4",
                            type: "button",
                            onClick: () => l(t === e.uid ? null : e.uid),
                            children: [
                              (0, T.jsx)("span", { children: e.title }),
                              (0, T.jsx)(eW.P.div, {
                                animate: { rotate: t === e.uid ? 135 : 0 },
                                children: (0, T.jsx)(nq.A, {
                                  className: "w-4 stroke-current flex-shrink-0",
                                }),
                              }),
                            ],
                          }),
                          (0, T.jsx)(eW.P.div, {
                            className:
                              "wysiwyg text-asphalt r-text-sm overflow-hidden",
                            initial: "collapsed",
                            animate: t === e.uid ? "open" : "collapsed",
                            variants: {
                              open: { height: "auto", opacity: 1 },
                              collapsed: { height: 0, opacity: 0 },
                            },
                            transition: {
                              duration: 0.5,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            },
                            children: (0, T.jsx)("div", {
                              className: "py-5",
                              children: (0, T.jsx)(eK.A, { content: e.text }),
                            }),
                          }),
                        ],
                      },
                      e.uid
                    )
                  ),
          });
        };
      var tP = t(27626),
        tL = t(79475);
      t(79690), t(94184), t(8971);
      let tR = (e) => {
        let { mediaItems: n } = e,
          t = (0, B.useRef)(null),
          [l, i] = (0, B.useState)(null),
          [r, a] = (0, B.useState)(0),
          s = (0, tL.A)(768);
        return (0, T.jsxs)("div", {
          className: "gallery-wrapper w-full",
          children: [
            (0, T.jsxs)("div", {
              className: "top-gallery-wrapper relative",
              children: [
                (0, T.jsx)(nE.RC, {
                  spaceBetween: 10,
                  speed: 1500,
                  thumbs: {
                    swiper: (null == n ? void 0 : n.length) > 1 ? l : null,
                  },
                  modules: [tP.U1, tP.Vx, tP.WO],
                  className: "accessory-gallery w-full h-[70vh]",
                  onSwiper: (e) => {
                    t.current = e;
                  },
                  onSlideChange: (e) => {
                    a(e.activeIndex);
                  },
                  navigation: {
                    enabled: !0,
                    nextEl: ".button-next",
                    prevEl: ".button-prev",
                  },
                  children:
                    null == n
                      ? void 0
                      : n.map((e) => {
                          var n;
                          return (0, T.jsx)(
                            nE.qr,
                            {
                              children: (0, T.jsx)("div", {
                                className:
                                  "inner w-full py-8 md:r-py-[6.12] h-[70vh]",
                                children: (0, T.jsx)(q.A, {
                                  className:
                                    "w-4/5 md:w-[50%] h-full mx-auto object-contain",
                                  media:
                                    null === (n = e.mediaElement) ||
                                    void 0 === n
                                      ? void 0
                                      : n[0],
                                  ratio: 1,
                                  width: 640,
                                  priority: !0,
                                  showCaption: !1,
                                }),
                              }),
                            },
                            e.uid
                          );
                        }),
                }),
                (null == n ? void 0 : n.length) > 1 &&
                  (0, T.jsxs)(T.Fragment, {
                    children: [
                      (0, T.jsx)("button", {
                        className:
                          "button-next absolute top-1/2 r-right-[2.25] -translate-x-1/2 -translate-y-1/2 z-10",
                        children: (0, T.jsx)("svg", {
                          width: "13",
                          height: "13",
                          viewBox: "0 0 13 13",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, T.jsx)("path", {
                            d: "M0 6.58887H12M12 6.58887L6 0.588867M12 6.58887L6 12.5889",
                            stroke: "#222222",
                          }),
                        }),
                      }),
                      (0, T.jsx)("button", {
                        className:
                          "button-prev absolute top-1/2 r-left-[2.25] -translate-x-1/2 -translate-y-1/2 z-10",
                        children: (0, T.jsx)("svg", {
                          width: "13",
                          height: "13",
                          viewBox: "0 0 13 13",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "rotate-180",
                          children: (0, T.jsx)("path", {
                            d: "M0 6.58887H12M12 6.58887L6 0.588867M12 6.58887L6 12.5889",
                            stroke: "#222222",
                          }),
                        }),
                      }),
                      (0, T.jsx)("div", {
                        className:
                          "bullets absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-2 z-10",
                        children:
                          null == n
                            ? void 0
                            : n.map((e, n) =>
                                (0, T.jsx)(
                                  "div",
                                  {
                                    className:
                                      "bullet w-2 h-2 rounded-full border transition-colors duration-200 cursor-pointer ".concat(
                                        r === n
                                          ? "bg-asphalt border-asphalt"
                                          : "bg-transparent border-grey"
                                      ),
                                    onClick: (e) => {
                                      var l;
                                      e.preventDefault(),
                                        e.stopPropagation(),
                                        null === (l = t.current) ||
                                          void 0 === l ||
                                          l.slideTo(n),
                                        a(n);
                                    },
                                  },
                                  e.uid
                                )
                              ),
                      }),
                    ],
                  }),
              ],
            }),
            (null == n ? void 0 : n.length) > 1 &&
              !s &&
              (0, T.jsx)(nE.RC, {
                onSwiper: i,
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: [tP.U1, tP.Vx, tP.WO],
                className: "accessory-gallery-thumbs w-full",
                children:
                  null == n
                    ? void 0
                    : n.map((e) => {
                        var n;
                        return (0, T.jsx)(
                          nE.qr,
                          {
                            children: (0, T.jsx)(q.A, {
                              className:
                                "w-full h-auto aspect-1 object-contain cursor-pointer",
                              media:
                                null === (n = e.mediaElement) || void 0 === n
                                  ? void 0
                                  : n[0],
                              ratio: 1,
                              width: 320,
                              priority: !0,
                              showCaption: !1,
                            }),
                          },
                          e.uid
                        );
                      }),
              }),
          ],
        });
      };
      function tO() {
        let e = (0, $._)([
          '\n  query Accessories_breadcrumb($siteId: [QueryArgument]) {\n    globalSet(handle: "developers", siteId: $siteId) {\n      id\n      uid\n      siteId\n      ... on developers_GlobalSet {\n        channelMappings {\n          ... on channelMappings_mapping_BlockType {\n            id\n            uid\n            siteId\n            channelHandle\n            parentEntry {\n              id\n              uid\n              siteId\n              title\n              ancestors {\n                id\n                uid\n                siteId\n                level\n                title\n                typeHandle\n                url\n              }\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (tO = function () {
            return e;
          }),
          e
        );
      }
      let tQ = (0, E.J1)(tO()),
        tU = (e) => {
          var n, t, l, i, r;
          let { className: a, globals: s } = e,
            { currentSite: o, currentRoute: d } = s || {},
            c = (0, e6.useTranslations)("common"),
            { data: u } = (0, M.I)(tQ, {
              variables: { siteId: null == o ? void 0 : o.siteId },
            }),
            m =
              (null == u
                ? void 0
                : null === (t = u.globalSet) || void 0 === t
                ? void 0
                : null === (n = t.channelMappings) || void 0 === n
                ? void 0
                : n.find(
                    (e) =>
                      e.channelHandle === (null == d ? void 0 : d.cms.section)
                  )) || {},
            p =
              (null == m
                ? void 0
                : null === (l = m.parentEntry) || void 0 === l
                ? void 0
                : l[0]) || {},
            { ancestors: h, level: g } = {
              level: 3,
              ancestors: [
                ...((null == p
                  ? void 0
                  : null === (i = p.ancestors) || void 0 === i
                  ? void 0
                  : i.map((e) => {
                      var n;
                      return {
                        uid: null == e ? void 0 : e.uid,
                        title: null == e ? void 0 : e.title,
                        url:
                          "string" == typeof (null == e ? void 0 : e.url)
                            ? null == e
                              ? void 0
                              : e.url
                            : null == e
                            ? void 0
                            : null === (n = e.link) || void 0 === n
                            ? void 0
                            : n.url,
                      };
                    })) || []),
                {
                  uid: null == p ? void 0 : p.uid,
                  title: null == p ? void 0 : p.title,
                  url:
                    "string" == typeof (null == p ? void 0 : p.url)
                      ? null == p
                        ? void 0
                        : p.url
                      : null == p
                      ? void 0
                      : null === (r = p.link) || void 0 === r
                      ? void 0
                      : r.url,
                },
              ],
            };
          return 1 !== g && (null == h ? void 0 : h.length)
            ? (0, T.jsx)("div", {
                className:
                  "breadcrumb pointer-events-auto text-xs text-grey r-mb-10 ".concat(
                    a
                  ),
                children: (0, T.jsxs)("div", {
                  className:
                    "inner pb-3 flex gap-1 border-b border-grey-border",
                  children: [
                    (0, T.jsx)(e8.A, {
                      href: null == o ? void 0 : o.fullUrl.replace(/\/$/, ""),
                      className:
                        "underline transition-colors duration-300 hover:text-asphalt",
                      children: c("home"),
                    }),
                    (0, T.jsx)("span", { children: "/" }),
                    h.map((e, n) =>
                      (null == e ? void 0 : e.url)
                        ? (0, T.jsxs)(
                            B.Fragment,
                            {
                              children: [
                                (0, T.jsx)(e8.A, {
                                  href:
                                    "string" == typeof e.url
                                      ? e.url
                                      : e.link.url,
                                  className:
                                    "underline transition-colors duration-300 hover:text-asphalt",
                                  children: e.title,
                                }),
                                (0, T.jsx)("span", { children: "/" }),
                              ],
                            },
                            "".concat(e.uid, "-").concat(n)
                          )
                        : null
                    ),
                  ],
                }),
              })
            : null;
        },
        tq = (e) => {
          let { data: n, globals: t } = e,
            { entry: l } = n,
            i = (0, B.useRef)(null),
            r = (0, B.useRef)(null);
          return (
            (0, B.useEffect)(() => {
              let e = null;
              return (
                P.os.matchMedia({
                  "(min-width: 768px)": () => {
                    e = Q().create({
                      trigger: r.current,
                      endTrigger: i.current,
                      start: "top top",
                      end: "bottom bottom",
                      pin: !0,
                      scroller: window.matchMedia("(hover: none)").matches
                        ? "body"
                        : "#smooth-wrapper",
                      pinSpacing: !1,
                    });
                  },
                }),
                () => {
                  e && e.kill();
                }
              );
            }, [r]),
            (0, T.jsxs)("div", {
              className: "w-full container full min-h-[70vh] r-pt-[5.375]",
              ref: i,
              children: [
                (0, T.jsx)(tU, { globals: t }),
                (0, T.jsxs)("div", {
                  className:
                    "inner flex flex-col md:flex-row lg:r-gap-[4] 2xl:r-gap-[8.12] w-full 2xl:r-pr-[8.12] items-start",
                  children: [
                    (0, T.jsx)("div", {
                      className:
                        "gallery flex-1 top-0 mb-10 md:mb-0 w-full md:w-1/2",
                      ref: r,
                      children: (0, T.jsx)(tR, { mediaItems: l.mediaItems }),
                    }),
                    (0, T.jsxs)("div", {
                      className:
                        "content xl:r-max-w-[26.25] w-full md:w-1/2 xl:w-full xl:flex-shrink-0",
                      children: [
                        (0, T.jsx)("h1", {
                          className: "h2-text-alt mb-5",
                          children: l.title,
                        }),
                        (0, T.jsx)("div", {
                          className: "wysiwyg body-text text-grey",
                          children: (0, T.jsx)(eK.A, {
                            content: l.description,
                          }),
                        }),
                        (0, T.jsx)(e0.A, {
                          linkProps: l.button,
                          className: "r-mt-10",
                        }),
                        (0, T.jsx)(tH, { items: l.accordion }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      function tz() {
        let e = (0, $._)([
          '\n    query KnowledgeHubHero(\n      $uri: [String]\n      $siteId: [QueryArgument]\n    ) {\n      entry(section: "knowledgeHub", uri: $uri, siteId: $siteId){\n        id\n        uid\n        siteId\n        title\n        url\n        postDate\n        ... on knowledgeHub_default_Entry {\n          knowledgeHubCategories {\n            id\n            uid\n            siteId\n            title\n            url\n            ancestors {\n              id\n              uid\n              siteId\n              level\n              title\n              typeHandle\n              url\n            }\n          }\n          knowledgeHubEntries {\n            id\n            uid\n            siteId\n            title\n            url\n            ... on knowledgeHub_default_Entry {\n              knowledgeHubCategories {\n                id\n                uid\n                siteId\n                title\n              }\n            }\n          }\n          readTime\n          description: text\n          ',
          '\n        }\n      }\n      fallbackBreadcrumb: entries(section: "pages", type: "list", siteId: $siteId, listType: "knowledgeHub", orderBy: "level asc") {\n        id\n        uid\n        siteId\n        title\n        url\n      }\n    }\n  ',
        ]);
        return (
          (tz = function () {
            return e;
          }),
          e
        );
      }
      function tF() {
        let e = (0, $._)([
          '\n  query KnowledgeHubRelated(\n    $id: [QueryArgument]\n    $siteId: [QueryArgument]\n    $relatedTo: [QueryArgument]\n  ) {\n    entries(\n      section: "knowledgeHub"\n      siteId: $siteId\n      id: $id\n      relatedTo: $relatedTo\n      limit: 3\n      orderBy: "postDate desc"\n    ) {\n      id\n      uid\n      siteId\n      title\n      url\n      ... on knowledgeHub_default_Entry {\n        knowledgeHubCategories {\n          id\n          uid\n          siteId\n          title\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (tF = function () {
            return e;
          }),
          e
        );
      }
      let tG = (0, E.J1)(tF()),
        tV = () => (0, E.J1)(tz(), S.A),
        tJ = (e) => {
          var n, t;
          let { data: l, className: i, globals: r } = e,
            { entry: a, fallbackBreadcrumb: s } = l || {},
            o = (0, e6.useTranslations)("common"),
            d = (null == s ? void 0 : s.length) > 0 ? [s[0]] : [];
          return (
            (null == a
              ? void 0
              : null === (n = a.knowledgeHubCategories) || void 0 === n
              ? void 0
              : n.length) > 0 &&
              (d = [
                ...(null === (t = a.knowledgeHubCategories[0]) || void 0 === t
                  ? void 0
                  : t.ancestors),
              ]).push(a.knowledgeHubCategories[0]),
            (0, T.jsx)("div", {
              className:
                "breadcrumb pointer-events-auto text-xs text-grey ".concat(i),
              children: (0, T.jsxs)("div", {
                className: "inner pb-3 flex gap-1 border-b border-grey-border",
                children: [
                  (0, T.jsx)(e8.A, {
                    href: r.currentSite.fullUrl.replace(/\/$/, ""),
                    className:
                      "underline transition-colors duration-300 hover:text-asphalt",
                    children: o("home"),
                  }),
                  (0, T.jsx)("span", { children: "/" }),
                  d.map((e, n) => {
                    var t;
                    return (null == e ? void 0 : e.url)
                      ? (0, T.jsxs)(
                          B.Fragment,
                          {
                            children: [
                              (0, T.jsx)(e8.A, {
                                href:
                                  "string" == typeof e.url
                                    ? e.url
                                    : null === (t = e.link) || void 0 === t
                                    ? void 0
                                    : t.url,
                                className:
                                  "underline transition-colors duration-300 hover:text-asphalt",
                                children: e.title,
                              }),
                              (0, T.jsx)("span", { children: "/" }),
                            ],
                          },
                          "".concat(e.uid, "-").concat(n)
                        )
                      : null;
                  }),
                ],
              }),
            })
          );
        };
      function tZ() {
        return (tZ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tY = (0, B.forwardRef)(function (e, n) {
        return B.createElement(
          "svg",
          tZ(
            {
              width: 17,
              height: 17,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
            },
            e
          ),
          u ||
            (u = B.createElement("path", {
              d: "M.55 8.201a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
              fill: "#767572",
            })),
          m ||
            (m = B.createElement("path", {
              d: "M10.93 12.274V9.36c0-.732-.263-1.231-.92-1.231a.992.992 0 0 0-.93.662 1.236 1.236 0 0 0-.06.442v3.04H7.209s.024-4.935 0-5.446H9.02V7.6a1.8 1.8 0 0 1 1.634-.9c1.193 0 2.087.779 2.087 2.452v3.12H10.93Zm-6.54 0V6.827h1.814v5.447H4.39Zm.894-6.19A.944.944 0 1 1 5.31 4.2a.944.944 0 1 1-.012 1.883h-.014Z",
              fill: "#FAFFFF",
            }))
        );
      });
      function tX() {
        return (tX = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tW = (0, B.forwardRef)(function (e, n) {
        return B.createElement(
          "svg",
          tX(
            {
              width: 17,
              height: 17,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
            },
            e
          ),
          p ||
            (p = B.createElement("path", {
              d: "M16.65 8.252a8.049 8.049 0 1 0-9.308 7.95V10.58H5.3V8.252h2.043V6.48a2.84 2.84 0 0 1 3.041-3.132c.604.009 1.206.061 1.802.157v1.981H11.17a1.163 1.163 0 0 0-1.311 1.258v1.51h2.233l-.357 2.327H9.857V16.2a8.05 8.05 0 0 0 6.792-7.949Z",
              fill: "#767572",
            }))
        );
      });
      function tK() {
        return (tK = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var t0 = (0, B.forwardRef)(function (e, n) {
        return B.createElement(
          "svg",
          tK(
            {
              width: 17,
              height: 17,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
            },
            e
          ),
          h ||
            (h = B.createElement("circle", {
              cx: 8.66,
              cy: 8.201,
              r: 8,
              fill: "#767572",
            })),
          g ||
            (g = B.createElement("path", {
              d: "m3.941 3.76 3.661 4.899-3.684 3.982h.83l3.225-3.487 2.606 3.488h2.822L9.534 7.467l3.429-3.707h-.83L9.164 6.97l-2.4-3.211H3.94Zm1.22.611h1.296l5.724 7.66h-1.296L5.16 4.37Z",
              fill: "#FCFCFC",
            }))
        );
      });
      let t1 = (e) => {
        var n, t;
        let { globals: l } = e,
          i = (0, H.useTranslations)("common"),
          [r, a] = (0, B.useState)([]),
          { currentSite: s, routeProps: o } = l,
          [d] = (0, th._)(tG, {
            onCompleted: (e) => {
              a(null == e ? void 0 : e.entries);
            },
          }),
          { data: c } = (0, M.I)(tV(), {
            variables: { uri: o.uri, siteId: null == s ? void 0 : s.siteId },
            onCompleted: (e) => {
              let { knowledgeHubEntries: n } =
                (null == e ? void 0 : e.entry) || {};
              if ((null == n ? void 0 : n.length) > 0) a(n);
              else {
                var t, l, i;
                d({
                  variables: {
                    siteId: null == s ? void 0 : s.siteId,
                    $id: [
                      "not",
                      null == e
                        ? void 0
                        : null === (t = e.entry) || void 0 === t
                        ? void 0
                        : t.id,
                    ],
                    $relatedTo:
                      null == e
                        ? void 0
                        : null === (i = e.entry) || void 0 === i
                        ? void 0
                        : null === (l = i.knowledgeHubCategories) ||
                          void 0 === l
                        ? void 0
                        : l.map((e) => e.id),
                  },
                });
              }
            },
          }),
          u = (null == c ? void 0 : c.entry) || {},
          m = (0, B.useMemo)(
            () =>
              nv.c9
                .fromISO(u.postDate)
                .setLocale("nb-NO")
                .setZone("Europe/Oslo")
                .setLocale("nb-NO"),
            [u.postDate]
          );
        return (0, T.jsxs)("header", {
          className: " r-pt-[5.375] mb-8 sm:mb-10 lg:r-mb-[3.75]",
          children: [
            (0, T.jsx)(tJ, {
              data: c,
              className: "container full",
              globals: l,
            }),
            (0, T.jsx)("div", {
              className:
                "hero-top-content r-pt-[6.25] container full flex r-gap-8",
              children: (0, T.jsxs)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-[1fr,clamp(3.74rem,4.61vw,5.19rem),clamp(12.6rem,15.56vw,17.5rem)] lg:grid-cols-[clamp(6.19rem,7.64vw,8.59rem),auto,clamp(3.74rem,4.61vw,5.19rem),clamp(12.6rem,15.56vw,17.5rem)] w-full",
                children: [
                  (0, T.jsxs)("div", {
                    className:
                      "sidebar flex flex-row flex-wrap lg:flex-col w-full r-gap-6 lg:pt-4 mb-6 lg:mb-0 col-start-1 row-start-2 lg:row-start-1",
                    children: [
                      (null == u
                        ? void 0
                        : null === (n = u.knowledgeHubCategories) ||
                          void 0 === n
                        ? void 0
                        : n.length) > 0 &&
                        (0, T.jsxs)("div", {
                          className: "categories",
                          children: [
                            (0, T.jsxs)("h3", {
                              className: "r-text-xs mb-1",
                              children: [i("tags"), ":"],
                            }),
                            (0, T.jsx)("div", {
                              className: "flex gap-2 flex-wrap",
                              children: u.knowledgeHubCategories.map((e) =>
                                (0, T.jsx)(
                                  "span",
                                  {
                                    className:
                                      "tag bg-grey-bgHover rounded-button px-[0.62rem] py-[0.56rem] text-xs text-grey block leading-none",
                                    children: e.title,
                                  },
                                  e.uid
                                )
                              ),
                            }),
                          ],
                        }),
                      (0, T.jsxs)("div", {
                        className: "date",
                        children: [
                          (0, T.jsxs)("h3", {
                            className: "r-text-xs mb-1",
                            children: [i("date"), ":"],
                          }),
                          (0, T.jsx)("time", {
                            className: "text-xs text-grey block",
                            dateTime: m.postDate,
                            children: m.toFormat("dd.MM.yy"),
                          }),
                        ],
                      }),
                      (0, T.jsxs)("div", {
                        className: "date",
                        children: [
                          (0, T.jsxs)("h3", {
                            className: "r-text-xs mb-1",
                            children: [i("readTime"), ":"],
                          }),
                          (0, T.jsxs)("span", {
                            className: "text-xs text-grey block",
                            children: [u.readTime, " ", i("minutes")],
                          }),
                        ],
                      }),
                      (0, T.jsxs)("div", {
                        className: "date",
                        children: [
                          (0, T.jsxs)("h3", {
                            className: "r-text-xs mb-1",
                            children: [i("share"), ":"],
                          }),
                          (0, T.jsxs)("div", {
                            className: "flex gap-2 flex-wrap",
                            children: [
                              (0, T.jsx)("a", {
                                href: "https://www.linkedin.com/shareArticle?mini=true&url=".concat(
                                  encodeURIComponent(u.url)
                                ),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, T.jsx)(tY, {}),
                              }),
                              (0, T.jsx)("a", {
                                href: "https://www.facebook.com/sharer/sharer.php?u=".concat(
                                  encodeURIComponent(u.url)
                                ),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, T.jsx)(tW, {}),
                              }),
                              (0, T.jsx)("a", {
                                href: "https://twitter.com/intent/tweet?url=".concat(
                                  encodeURIComponent(u.url)
                                ),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, T.jsx)(t0, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, T.jsxs)("div", {
                    className:
                      "text-content lg:-mt-2 lg:r-max-w-[40] w-full mx-auto mb-10 lg:r-mb-[3.75] col-start-1 lg:col-start-2 row-start-1",
                    children: [
                      (0, T.jsx)("h1", {
                        className:
                          "r-max-w-[40] flex-1 text-3xl sm:r-text-5xl text-asphalt r-mb-6 leading-tight",
                        children: u.title,
                      }),
                      (0, T.jsx)("div", {
                        className: "wysiwyg r-text-base text-grey",
                        children: (0, T.jsx)(eK.A, { content: u.description }),
                      }),
                    ],
                  }),
                  (0, T.jsx)("div", {
                    className:
                      "media-wrapper flex w-full col-start-1 row-start-3 lg:col-start-2 lg:row-start-2",
                    children: (0, T.jsx)(q.A, {
                      className: "object-cover aspect-[53.75/30.3] w-full",
                      media:
                        null === (t = u.mediaElement) || void 0 === t
                          ? void 0
                          : t[0],
                      ratio: 53.75 / 30.3,
                      width: 1080,
                      figureClasses: "flex-1 block",
                      priority: !0,
                    }),
                  }),
                  (0, T.jsx)("div", {
                    className:
                      "related-wrapper relative col-start-3 lg:col-start-4 row-start-3 lg:row-start-2 hidden md:block",
                    children: (0, T.jsxs)("div", {
                      className: "related-content w-full absolute top-0 left-0",
                      children: [
                        (0, T.jsxs)("h3", {
                          className: "r-text-sm r-mb-7",
                          children: [i("related"), ":"],
                        }),
                        null == r
                          ? void 0
                          : r.map((e) =>
                              (0, T.jsxs)(
                                e8.A,
                                {
                                  href: e.url,
                                  className:
                                    "r-gap-4 r-mb-6 r-pb-6 border-b border-grey-border block",
                                  children: [
                                    (0, T.jsx)("div", {
                                      className: "flex gap-2 flex-wrap mb-3",
                                      children: u.knowledgeHubCategories.map(
                                        (e) =>
                                          (0, T.jsx)(
                                            "span",
                                            {
                                              className:
                                                "tag bg-grey-bgHover rounded-button px-[0.62rem] py-[0.56rem] text-xs text-grey block leading-none",
                                              children: e.title,
                                            },
                                            e.uid
                                          )
                                      ),
                                    }),
                                    (0, T.jsx)("h4", {
                                      className: "r-text-base text-asphalt",
                                      children: e.title,
                                    }),
                                  ],
                                },
                                e.uid
                              )
                            ),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      function t2() {
        let e = (0, $._)([
          '\n  query KnowledgeHubModules($uri: [String], $siteId: [QueryArgument]) {\n    entry(section: "knowledgeHub", uri: $uri, siteId: $siteId) {\n      id\n      uid\n      siteId\n      ... on knowledgeHub_default_Entry {\n        blogModules {\n          ... on blogModules_text_BlockType {\n            id\n            uid\n            siteId\n            title: moduleTitle\n            text: text4\n            typeHandle\n            anchor\n          }\n          ... on blogModules_quote_BlockType {\n            id\n            uid\n            siteId\n            author: plainText\n            text\n            anchor\n            image {\n              id\n              uid\n              siteId\n              kind\n              width\n              height\n              url(width: 100)\n              primaryUrl: url\n              alt\n              ... on uploads_Asset {\n                text\n                plainText\n                altTranslation: plainText2\n              }\n            }\n            typeHandle\n          }\n          ... on blogModules_media_BlockType {\n            id\n            uid\n            siteId\n            narrow: lightswitch\n            anchor\n            media: children {\n              ... on blogModules_mediaItem_BlockType {\n                id\n                uid\n                siteId\n                credit: plainText\n                description: text\n                ',
          "\n              }\n            }\n            typeHandle\n          }\n          ... on blogModules_cta_BlockType {\n            id\n            uid\n            siteId\n            title: moduleTitle\n            anchor\n            color {\n              class\n              color\n              label\n            }\n            text\n            button {\n              target\n              text\n              type\n              href: url\n              title\n            }\n            secondaryButton: button2 {\n              target\n              text\n              type\n              href: url\n              title\n            }\n            ",
          "\n            typeHandle\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (t2 = function () {
            return e;
          }),
          e
        );
      }
      let t5 = (0, E.J1)(t2(), S.A, S.A),
        t4 = (e) => {
          let { quote: n, author: t, url: l, imgSrc: i } = e,
            r = (0, H.useTranslations)("common"),
            a = ""
              .concat(e2()(n, { allowedTags: [] }))
              .concat(t ? " - ".concat(t) : ""),
            s = new URL("https://www.facebook.com/sharer/sharer.php");
          s.searchParams.append("quote", a),
            i && s.searchParams.append("picture", i),
            s.searchParams.append("u", l);
          let o = new URL("https://twitter.com/intent/tweet");
          o.searchParams.append("text", "".concat(a)),
            o.searchParams.append("url", l);
          let d = new URL("https://www.linkedin.com/sharing/share-offsite/");
          return (
            d.searchParams.append(
              "summary",
              "".concat(a).concat(i ? " Portrait: ".concat(i) : "")
            ),
            d.searchParams.append("url", l),
            (0, T.jsxs)("div", {
              className: "quote-share flex gap-2 sm:ml-auto items-center",
              children: [
                (0, T.jsxs)("span", {
                  className: "r-text-xs text-grey",
                  children: [r("share"), ":"],
                }),
                (0, T.jsx)("a", {
                  href: d.toString(),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "text-secondary transition-color hover:text-button-blue duration-300",
                  children: (0, T.jsx)(tY, {}),
                }),
                (0, T.jsx)("a", {
                  href: s.toString(),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "text-secondary transition-color hover:text-button-blue duration-300",
                  children: (0, T.jsx)(tW, {}),
                }),
                (0, T.jsx)("a", {
                  href: o.toString(),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "text-secondary transition-color hover:text-button-blue duration-300",
                  children: (0, T.jsx)(t0, {}),
                }),
              ],
            })
          );
        };
      function t3() {
        return (t3 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var t6 = (0, B.forwardRef)(function (e, n) {
        return B.createElement(
          "svg",
          t3(
            {
              width: 24,
              height: 18,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
            },
            e
          ),
          x ||
            (x = B.createElement("path", {
              d: "m9.166 9.786-1.19 8.116H0l1.26-8.606C2.03 3.84 5.387.41 11.614.41l-.49 3.639c-3.358.21-4.968 1.749-5.458 5.247l-.07.49h3.569Zm12.174 0-1.189 8.116h-7.976l1.259-8.606C14.204 3.84 17.562.41 23.789.41L23.3 4.05c-3.358.21-4.967 1.749-5.457 5.247l-.07.49h3.569Z",
              fill: "#222",
            }))
        );
      });
      let t8 = {
          text: (e) => {
            let { block: n } = e,
              { title: t, text: l } = n;
            return (0, T.jsxs)("div", {
              "data-anchor": n.anchor,
              className:
                "text-block mx-auto w-full r-max-w-[40] r-my-[3.25] first:mt-0 last:mb-0",
              children: [
                (0, T.jsx)("h2", {
                  className: "h2-text-alt text-asphalt r-mb-5",
                  children: t,
                }),
                (0, T.jsx)("div", {
                  className: "wysiwyg body-text text-grey",
                  children: (0, T.jsx)(eK.A, { content: l }),
                }),
              ],
            });
          },
          quote: (e) => {
            let { block: n } = e,
              { text: t, author: l, image: i } = n || {},
              r = (null == i ? void 0 : i.length) > 0;
            return (0, T.jsxs)("div", {
              "data-anchor": n.anchor,
              className:
                "quote-block mx-auto w-full r-max-w-[40] flex flex-col xs:flex-row items-start r-gap-6 r-my-[3.25] first:mt-0 last:mb-0",
              children: [
                (0, T.jsx)(nf.A, {
                  asset: i,
                  className: "w-full r-max-w-[12.5] object-cover aspect-1",
                  width: 480,
                  ratio: 1,
                }),
                (0, T.jsxs)("div", {
                  className: "quote relative sm:r-pl-7",
                  children: [
                    (0, T.jsx)(t6, {
                      className: "mb-2 sm:mb-0 sm:absolute top-0 left-0",
                    }),
                    (0, T.jsx)("div", {
                      className: "wysiwyg text-asphalt ".concat(
                        r ? "r-text-lg r-mb-10" : "r-text-2xl r-mb-6"
                      ),
                      children: (0, T.jsx)(eK.A, { content: t }),
                    }),
                    (0, T.jsxs)("div", {
                      className:
                        "r-text-sm text-grey flex flex-col xs:flex-row justify-between xs:items-center gap-2",
                      children: [l, (0, T.jsx)(t4, { quote: t, author: l })],
                    }),
                  ],
                }),
              ],
            });
          },
          media: (e) => {
            let { block: n } = e,
              { media: t, narrow: l } = n || {};
            return (0, T.jsx)("div", {
              className:
                "media-block mx-auto w-full flex flex-col r-gap-6 ".concat(
                  l ? " r-max-w-[40]" : " r-max-w-[53.75]",
                  " r-my-[6.25] first:mt-0 last:mb-0"
                ),
              "data-anchor": n.anchor,
              children: t.map((e) => {
                let { mediaElement: n } = e || {};
                return (0, T.jsx)(
                  q.A,
                  {
                    media: null == n ? void 0 : n[0],
                    className: "w-full h-auto",
                    width: 1080,
                    height: 1080,
                    figureClasses: "w-full block",
                    refresh: !0,
                    credit: null == e ? void 0 : e.credit,
                    description: null == e ? void 0 : e.description,
                  },
                  e.uid
                );
              }),
            });
          },
          cta: (e) => {
            let { block: n } = e,
              {
                title: t,
                text: l,
                mediaElement: i,
                button: r,
                secondaryButton: a,
                color: s,
              } = n || {};
            return (0, T.jsxs)("div", {
              "data-anchor": n.anchor,
              className:
                "cta-block mx-auto w-full r-max-w-[40] r-my-[6.25] first:mt-0 last:mb-0 ctaS-block",
              children: [
                (0, T.jsx)(q.A, {
                  media: null == i ? void 0 : i[0],
                  className: "w-full object-cover aspect-[40/21.25]",
                  width: 640,
                  ratio: 40 / 21.25,
                  figureClasses: "w-full block",
                }),
                (0, T.jsxs)("div", {
                  className: "theme-"
                    .concat(s.class, " ")
                    .concat("white" !== s.class ? "px-4 py-8 sm:r-p-14" : ""),
                  children: [
                    t &&
                      (0, T.jsx)("h2", {
                        className: "h2-text-alt r-mb-5",
                        children: t,
                      }),
                    l &&
                      (0, T.jsx)("div", {
                        className: "wysiwyg body-text",
                        children: (0, T.jsx)(eK.A, { content: l }),
                      }),
                    ((null == r ? void 0 : r.href) ||
                      (null == a ? void 0 : a.href)) &&
                      (0, T.jsxs)("div", {
                        className:
                          "buttons flex flex-wrap items-start xs:items-center gap-6 r-mt-10",
                        children: [
                          (null == r ? void 0 : r.href) &&
                            (0, T.jsx)(e0.A, {
                              linkProps: r,
                              className:
                                "black" === s.class || "green-dark" === s.class
                                  ? "white"
                                  : null,
                            }),
                          (null == a ? void 0 : a.href) &&
                            (0, T.jsx)(z.A, {
                              linkProps: a,
                              className:
                                "black" === s.class || "green-dark" === s.class
                                  ? "full-white"
                                  : null,
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            });
          },
        },
        t7 = (0, Z.WQ)("ui")(
          (0, Z.PA)((e) => {
            var n;
            let { globals: t, ui: l } = e,
              { currentSite: i, routeProps: r } = t,
              { data: a } = (0, M.I)(t5, {
                variables: {
                  uri: r.uri,
                  siteId: null == i ? void 0 : i.siteId,
                },
              }),
              s =
                (null == a
                  ? void 0
                  : null === (n = a.entry) || void 0 === n
                  ? void 0
                  : n.blogModules) || [];
            return (
              (0, B.useEffect)(() => {
                let e = () => {
                  let { hash: e } = window.location;
                  if (e) {
                    let n = '[data-anchor="'
                      .concat(
                        (function () {
                          let {
                            protocol: e,
                            hostname: n,
                            port: t,
                            pathname: l,
                            search: i,
                          } = window.location;
                          return ""
                            .concat(e, "//")
                            .concat(n)
                            .concat(t ? ":".concat(t) : "")
                            .concat(l)
                            .concat(i);
                        })()
                      )
                      .concat(e, '"]');
                    setTimeout(() => {
                      let t = document.querySelector(n);
                      if (
                        (t ||
                          (t = document.querySelector(
                            '[data-anchor="'.concat(e, '"]')
                          )),
                        t ||
                          (t = document.querySelector(
                            '[data-anchor="'.concat(e.replace("#", ""), '"]')
                          )),
                        t)
                      ) {
                        let i = 0;
                        if (t.dataset.offset)
                          i += parseInt(t.dataset.offset, 10);
                        else {
                          let e = parseInt(
                            window
                              .getComputedStyle(t)
                              .getPropertyValue("margin-top"),
                            10
                          );
                          if (e) i += e;
                          else {
                            let e = document.querySelector(".top-bar");
                            e && (i += e.offsetHeight);
                          }
                        }
                        l.smoother
                          ? P.Ay.to(l.smoother, {
                              duration: 2,
                              scrollTo: l.smoother.offset(
                                t,
                                "top ".concat(i, "px")
                              ),
                              ease: "power4.inOut",
                              onComplete: () => {
                                let t = document.querySelector(n);
                                t ||
                                  (t = document.querySelector(
                                    '[data-anchor="'.concat(e, '"]')
                                  )),
                                  t ||
                                    (t = document.querySelector(
                                      '[data-anchor="'.concat(
                                        e.replace("#", ""),
                                        '"]'
                                      )
                                    )),
                                  l.smoother.scrollTop() <
                                    l.smoother.offset(
                                      t,
                                      "top ".concat(i, "px")
                                    ) &&
                                    l.smoother.scrollTop(
                                      l.smoother.offset(
                                        t,
                                        "top ".concat(i, "px")
                                      )
                                    );
                              },
                            })
                          : P.Ay.to(window, {
                              duration: 1,
                              scrollTo: { y: t, offsetY: i },
                              ease: "power4.inOut",
                            });
                      }
                    }, 500);
                  }
                };
                return (
                  e(),
                  window.addEventListener("hashchange", e),
                  () => {
                    window.removeEventListener("hashchange", e);
                  }
                );
              }, [s, l.menuState, l.menuRef, l.smoother]),
              (0, T.jsx)("div", {
                className: "blog-modules container full",
                children: (0, T.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-[1fr,clamp(3.74rem,4.61vw,5.19rem),clamp(12.6rem,15.56vw,17.5rem)] lg:grid-cols-[clamp(6.19rem,7.64vw,8.59rem),auto,clamp(3.74rem,4.61vw,5.19rem),clamp(12.6rem,15.56vw,17.5rem)]",
                  children: (0, T.jsx)("div", {
                    className: "modules flex-1 col-start-1 lg:col-start-2",
                    children: s.map((e) => {
                      let n = t8[e.typeHandle];
                      return n ? (0, T.jsx)(n, { block: e }, e.uid) : null;
                    }),
                  }),
                }),
              })
            );
          })
        ),
        t9 = (e) => {
          let { globals: n } = e;
          return (0, T.jsxs)("div", {
            className: "w-full",
            children: [
              (0, T.jsx)(t1, { globals: n }),
              (0, T.jsx)(t7, { globals: n }),
            ],
          });
        };
      function le() {
        let e = (0, $._)([
          '\n    query KnowledgeHubHero($uri: [String], $siteId: [QueryArgument]) {\n      entry(section: "knowledgeHub", uri: $uri, siteId: $siteId) {\n        id\n        uid\n        siteId\n        title\n        url\n        postDate\n        ... on knowledgeHub_legacy_Entry {\n          readTime\n          knowledgeHubCategories {\n            id\n            uid\n            siteId\n            title\n            url\n            ancestors {\n              id\n              uid\n              siteId\n              level\n              title\n              typeHandle\n              url\n            }\n          }\n          description: text\n          image {\n            id\n            uid\n            siteId\n            kind\n            width\n            height\n            url(width: 100)\n            primaryUrl: url\n            alt\n            ... on uploads_Asset {\n              text\n              plainText\n              altTranslation: plainText2\n            }\n          }\n        }\n      }\n      fallbackBreadcrumb: entries(\n        section: "pages"\n        type: "list"\n        siteId: $siteId\n        listType: "knowledgeHub"\n        orderBy: "level asc"\n      ) {\n        id\n        uid\n        siteId\n        title\n        url\n      }\n    }\n  ',
        ]);
        return (
          (le = function () {
            return e;
          }),
          e
        );
      }
      function ln() {
        let e = (0, $._)([
          '\n  query KnowledgeHubRelated(\n    $id: [QueryArgument]\n    $siteId: [QueryArgument]\n    $relatedTo: [QueryArgument]\n  ) {\n    entries(\n      section: "knowledgeHub"\n      siteId: $siteId\n      id: $id\n      relatedTo: $relatedTo\n      limit: 3\n      orderBy: "postDate desc"\n    ) {\n      id\n      uid\n      siteId\n      title\n      url\n      ... on knowledgeHub_legacy_Entry {\n        knowledgeHubCategories {\n          id\n          uid\n          siteId\n          title\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (ln = function () {
            return e;
          }),
          e
        );
      }
      let lt = (0, E.J1)(ln()),
        ll = () => (0, E.J1)(le()),
        li = (e) => {
          var n, t;
          let { data: l, className: i, globals: r } = e,
            { entry: a, fallbackBreadcrumb: s } = l || {},
            o = (0, e6.useTranslations)("common"),
            d = (null == s ? void 0 : s.length) > 0 ? [s[0]] : [];
          return (
            (null == a
              ? void 0
              : null === (n = a.knowledgeHubCategories) || void 0 === n
              ? void 0
              : n.length) > 0 &&
              (d = [
                ...(null === (t = a.knowledgeHubCategories[0]) || void 0 === t
                  ? void 0
                  : t.ancestors),
              ]).push(a.knowledgeHubCategories[0]),
            (0, T.jsx)("div", {
              className:
                "breadcrumb pointer-events-auto text-xs text-grey ".concat(i),
              children: (0, T.jsxs)("div", {
                className: "inner pb-3 flex gap-1 border-b border-grey-border",
                children: [
                  (0, T.jsx)(e8.A, {
                    href: r.currentSite.fullUrl.replace(/\/$/, ""),
                    className:
                      "underline transition-colors duration-300 hover:text-asphalt",
                    children: o("home"),
                  }),
                  (0, T.jsx)("span", { children: "/" }),
                  d.map((e, n) => {
                    var t;
                    return (null == e ? void 0 : e.url)
                      ? (0, T.jsxs)(
                          B.Fragment,
                          {
                            children: [
                              (0, T.jsx)(e8.A, {
                                href:
                                  "string" == typeof e.url
                                    ? e.url
                                    : null === (t = e.link) || void 0 === t
                                    ? void 0
                                    : t.url,
                                className:
                                  "underline transition-colors duration-300 hover:text-asphalt",
                                children: e.title,
                              }),
                              (0, T.jsx)("span", { children: "/" }),
                            ],
                          },
                          "".concat(e.uid, "-").concat(n)
                        )
                      : null;
                  }),
                ],
              }),
            })
          );
        },
        lr = (e) => {
          var n;
          let { globals: t } = e,
            l = (0, H.useTranslations)("common"),
            [i, r] = (0, B.useState)([]),
            { currentSite: a, routeProps: s } = t,
            [o] = (0, th._)(lt, {
              onCompleted: (e) => {
                r(null == e ? void 0 : e.entries);
              },
            }),
            { data: d } = (0, M.I)(ll(), {
              variables: { uri: s.uri, siteId: null == a ? void 0 : a.siteId },
              onCompleted: (e) => {
                let { knowledgeHubEntries: n } =
                  (null == e ? void 0 : e.entry) || {};
                if ((null == n ? void 0 : n.length) > 0) r(n);
                else {
                  var t, l, i;
                  o({
                    variables: {
                      siteId: null == a ? void 0 : a.siteId,
                      $id: [
                        "not",
                        null == e
                          ? void 0
                          : null === (t = e.entry) || void 0 === t
                          ? void 0
                          : t.id,
                      ],
                      $relatedTo:
                        null == e
                          ? void 0
                          : null === (i = e.entry) || void 0 === i
                          ? void 0
                          : null === (l = i.knowledgeHubCategories) ||
                            void 0 === l
                          ? void 0
                          : l.map((e) => e.id),
                    },
                  });
                }
              },
            }),
            c = (null == d ? void 0 : d.entry) || {},
            u = (0, B.useMemo)(
              () =>
                nv.c9
                  .fromISO(c.postDate)
                  .setLocale("nb-NO")
                  .setZone("Europe/Oslo")
                  .setLocale("nb-NO"),
              [c.postDate]
            );
          return (0, T.jsxs)("header", {
            className: " r-pt-[5.375] mb-8 sm:mb-10 lg:r-mb-[3.75]",
            children: [
              (0, T.jsx)(li, {
                data: d,
                className: "container full",
                globals: t,
              }),
              (0, T.jsx)("div", {
                className:
                  "hero-top-content r-pt-[6.25] container full flex r-gap-8",
                children: (0, T.jsxs)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-[1fr,clamp(3.74rem,4.61vw,5.19rem),clamp(12.6rem,15.56vw,17.5rem)] lg:grid-cols-[clamp(6.19rem,7.64vw,8.59rem),auto,clamp(3.74rem,4.61vw,5.19rem),clamp(12.6rem,15.56vw,17.5rem)] w-full",
                  children: [
                    (0, T.jsxs)("div", {
                      className:
                        "sidebar flex flex-row flex-wrap lg:flex-col w-full r-gap-6 lg:pt-4 mb-6 lg:mb-0 col-start-1 row-start-2 lg:row-start-1",
                      children: [
                        (null == c
                          ? void 0
                          : null === (n = c.knowledgeHubCategories) ||
                            void 0 === n
                          ? void 0
                          : n.length) > 0 &&
                          (0, T.jsxs)("div", {
                            className: "categories",
                            children: [
                              (0, T.jsxs)("h3", {
                                className: "r-text-xs mb-1",
                                children: [l("tags"), ":"],
                              }),
                              (0, T.jsx)("div", {
                                className: "flex gap-2 flex-wrap",
                                children: c.knowledgeHubCategories.map((e) =>
                                  (0, T.jsx)(
                                    "span",
                                    {
                                      className:
                                        "tag bg-grey-bgHover rounded-button px-[0.62rem] py-[0.56rem] text-xs text-grey block leading-none",
                                      children: e.title,
                                    },
                                    e.uid
                                  )
                                ),
                              }),
                            ],
                          }),
                        (0, T.jsxs)("div", {
                          className: "date",
                          children: [
                            (0, T.jsxs)("h3", {
                              className: "r-text-xs mb-1",
                              children: [l("date"), ":"],
                            }),
                            (0, T.jsx)("time", {
                              className: "text-xs text-grey block",
                              dateTime: u.postDate,
                              children: u.toFormat("dd.MM.yy"),
                            }),
                          ],
                        }),
                        (0, T.jsxs)("div", {
                          className: "date",
                          children: [
                            (0, T.jsxs)("h3", {
                              className: "r-text-xs mb-1",
                              children: [l("readTime"), ":"],
                            }),
                            (0, T.jsxs)("span", {
                              className: "text-xs text-grey block",
                              children: [c.readTime, " ", l("minutes")],
                            }),
                          ],
                        }),
                        (0, T.jsxs)("div", {
                          className: "date",
                          children: [
                            (0, T.jsxs)("h3", {
                              className: "r-text-xs mb-1",
                              children: [l("share"), ":"],
                            }),
                            (0, T.jsxs)("div", {
                              className: "flex gap-2 flex-wrap",
                              children: [
                                (0, T.jsx)("a", {
                                  href: "https://www.linkedin.com/shareArticle?mini=true&url=".concat(
                                    encodeURIComponent(c.url)
                                  ),
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0, T.jsx)(tY, {}),
                                }),
                                (0, T.jsx)("a", {
                                  href: "https://www.facebook.com/sharer/sharer.php?u=".concat(
                                    encodeURIComponent(c.url)
                                  ),
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0, T.jsx)(tW, {}),
                                }),
                                (0, T.jsx)("a", {
                                  href: "https://twitter.com/intent/tweet?url=".concat(
                                    encodeURIComponent(c.url)
                                  ),
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0, T.jsx)(t0, {}),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, T.jsxs)("div", {
                      className:
                        "text-content lg:-mt-2 lg:r-max-w-[40] w-full mx-auto mb-10 lg:r-mb-[3.75] col-start-1 lg:col-start-2 row-start-1",
                      children: [
                        (0, T.jsx)("h1", {
                          className:
                            "r-max-w-[40] flex-1 text-3xl sm:r-text-5xl text-asphalt r-mb-6 leading-tight",
                          children: c.title,
                        }),
                        (0, T.jsx)("div", {
                          className: "wysiwyg r-text-base text-grey",
                          children: (0, T.jsx)(eK.A, {
                            content: c.description,
                          }),
                        }),
                      ],
                    }),
                    (0, T.jsx)("div", {
                      className:
                        "media-wrapper flex w-full col-start-1 row-start-3 lg:col-start-2 lg:row-start-2",
                      children: (0, T.jsx)(nf.A, {
                        className: "object-cover aspect-[53.75/30.3] w-full",
                        asset: c.image,
                        ratio: 53.75 / 30.3,
                        width: 1080,
                        figureClasses: "flex-1 block",
                        priority: !0,
                      }),
                    }),
                    (0, T.jsx)("div", {
                      className:
                        "related-wrapper relative col-start-3 lg:col-start-4 row-start-3 lg:row-start-2 hidden md:block",
                      children: (0, T.jsxs)("div", {
                        className:
                          "related-content w-full absolute top-0 left-0",
                        children: [
                          (0, T.jsxs)("h3", {
                            className: "r-text-sm r-mb-7",
                            children: [l("related"), ":"],
                          }),
                          null == i
                            ? void 0
                            : i.map((e) =>
                                (0, T.jsxs)(
                                  e8.A,
                                  {
                                    href: e.url,
                                    className:
                                      "r-gap-4 r-mb-6 r-pb-6 border-b border-grey-border block",
                                    children: [
                                      (0, T.jsx)("div", {
                                        className: "flex gap-2 flex-wrap mb-3",
                                        children: c.knowledgeHubCategories.map(
                                          (e) =>
                                            (0, T.jsx)(
                                              "span",
                                              {
                                                className:
                                                  "tag bg-grey-bgHover rounded-button px-[0.62rem] py-[0.56rem] text-xs text-grey block leading-none",
                                                children: e.title,
                                              },
                                              e.uid
                                            )
                                        ),
                                      }),
                                      (0, T.jsx)("h4", {
                                        className: "r-text-base text-asphalt",
                                        children: e.title,
                                      }),
                                    ],
                                  },
                                  e.uid
                                )
                              ),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        la = (e) => {
          let { globals: n, data: t } = e,
            {
              entry: { content: l },
            } = t || { entry: {} };
          return (0, T.jsxs)("div", {
            className: "w-full",
            children: [
              (0, T.jsx)(lr, { globals: n }),
              (0, T.jsx)("div", {
                className: "blog-modules container full",
                children: (0, T.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-[1fr,clamp(3.74rem,4.61vw,5.19rem),clamp(12.6rem,15.56vw,17.5rem)] lg:grid-cols-[clamp(6.19rem,7.64vw,8.59rem),auto,clamp(3.74rem,4.61vw,5.19rem),clamp(12.6rem,15.56vw,17.5rem)]",
                  children: (0, T.jsx)("div", {
                    className: "modules flex-1 col-start-1 lg:col-start-2",
                    children: (0, T.jsx)("div", {
                      className:
                        "text-block mx-auto w-full r-max-w-[40] r-my-[6.25] first:mt-0 last:mb-0",
                      children: (0, T.jsx)("div", {
                        className: "wysiwyg body-text text-grey",
                        children: (0, T.jsx)(eK.A, { content: l }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          });
        };
      var ls = t(35083),
        lo = t.n(ls),
        ld = t(13368),
        lc = t.n(ld),
        lu = t(61351),
        lm = t(88055),
        lp = t.n(lm);
      function lh() {
        let e = (0, $._)([
          "\n  query SEO($slugSEO: String, $siteIdSEO: Int, $environment: SeomaticEnvironment) {\n    seomatic(uri: $slugSEO, siteId: $siteIdSEO, asArray: true, environment: $environment) {\n      metaTitleContainer\n      metaTagContainer\n      metaLinkContainer\n      metaScriptContainer\n      metaJsonLdContainer\n      metaSiteVarsContainer\n    }\n  }\n",
        ]);
        return (
          (lh = function () {
            return e;
          }),
          e
        );
      }
      let lg = (0, E.J1)(lh()),
        lx = {
          en: ["en-us", "en"],
          no: ["nb-no", "nb", "no", "nn", "nn-no"],
          "en-gb": ["en-gb", "en-uk"],
        };
      var lv = t(77836);
      let lf = (e) => {
          let { globals: n } = e,
            { currentSite: t, routeProps: l } = n,
            { data: i } = (0, M.I)(lg, {
              variables: {
                slugSEO: null == l ? void 0 : l.seoSlug,
                siteIdSEO: null == t ? void 0 : t.siteId,
                environment:
                  "true" === lv.env.NEXT_PUBLIC_STAGING ? "staging" : "live",
              },
            }),
            r = (0, B.useMemo)(() => {
              var e, n;
              let t = lp()(i);
              if (
                null == t
                  ? void 0
                  : null === (e = t.seomatic) || void 0 === e
                  ? void 0
                  : e.metaLinkContainer
              ) {
                let e =
                  null == t
                    ? void 0
                    : null === (n = t.seomatic) || void 0 === n
                    ? void 0
                    : n.metaLinkContainer.replace(/hreflang/g, "hrefLang");
                Object.keys(lx).forEach((n) => {
                  lx[n].forEach((t) => {
                    e = e.replace(
                      '"hrefLang":"'.concat(t, '"'),
                      '"hrefLang":"'.concat(n, '"')
                    );
                  });
                }),
                  (t.seomatic.metaLinkContainer = e);
              }
              return t;
            }, [i]);
          return (0, T.jsx)(lu.Mn, {
            Head: lc(),
            ...(null == r ? void 0 : r.seomatic),
          });
        },
        lw = () =>
          (0, T.jsxs)(T.Fragment, {
            children: [
              (0, T.jsx)("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-touch-icon.png",
              }),
              (0, T.jsx)("link", {
                id: "favicon-32",
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png",
              }),
              (0, T.jsx)("link", {
                id: "favicon-16",
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png",
              }),
              (0, T.jsx)("link", {
                id: "favicon",
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon/favicon.ico",
              }),
              (0, T.jsx)("link", {
                rel: "manifest",
                href: "/favicon/site.webmanifest",
              }),
              (0, T.jsx)("link", {
                rel: "mask-icon",
                href: "/favicon/safari-pinned-tab.svg",
                color: "#5bbad5",
              }),
              (0, T.jsx)("meta", {
                name: "apple-mobile-web-app-title",
                content: "Zaptec",
              }),
              (0, T.jsx)("meta", {
                name: "application-name",
                content: "Zaptec",
              }),
              (0, T.jsx)("meta", {
                name: "msapplication-TileColor",
                content: "#19312f",
              }),
              (0, T.jsx)("meta", { name: "theme-color", content: "#19312f" }),
            ],
          });
      var ly = t(28133),
        lb = t.n(ly),
        lA = t(77836);
      let lj = (e) => {
        var n, t;
        let { globals: l } = e;
        return (
          (0, B.useEffect)(() => {
            let e = () => {
              if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                let e = document.querySelector("#favicon-32");
                e && (e.href = "/favicon/favicon-32x32-white.png");
                let n = document.querySelector("#favicon-16");
                n && (n.href = "/favicon/favicon-16x16-white.png");
                let t = document.querySelector("#favicon");
                t && (t.href = "/favicon/favicon-white.ico");
              } else {
                let e = document.querySelector("#favicon-32");
                e && (e.href = "/favicon/favicon-32x32.png");
                let n = document.querySelector("#favicon-16");
                n && (n.href = "/favicon/favicon-16x16.png");
                let t = document.querySelector("#favicon");
                t && (t.href = "/favicon/favicon.ico");
              }
            };
            return (
              e(),
              window
                .matchMedia("(prefers-color-scheme: dark)")
                .addEventListener("change", e),
              () => {
                window
                  .matchMedia("(prefers-color-scheme: dark)")
                  .removeEventListener("change", e);
              }
            );
          }, []),
          (0, T.jsxs)(T.Fragment, {
            children: [
              (0, T.jsxs)(lc(), {
                children: [
                  (0, T.jsx)("meta", {
                    name: "viewport",
                    content:
                      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
                  }),
                  lA.env.NEXT_PUBLIC_PREVIEW
                    ? (0, T.jsx)("meta", {
                        name: "robots",
                        content: "noindex, nofollow",
                      })
                    : (0, T.jsxs)(T.Fragment, {
                        children: [
                          (null == l
                            ? void 0
                            : null === (n = l.currentSite) || void 0 === n
                            ? void 0
                            : n.siteId) === 2 &&
                            (0, T.jsx)("meta", {
                              name: "msvalidate.01",
                              content: "7537648C3D7114CCF3F8CFF6F536DEEA",
                            }),
                          (null == l
                            ? void 0
                            : null === (t = l.currentSite) || void 0 === t
                            ? void 0
                            : t.siteId) === 3 &&
                            (0, T.jsx)("meta", {
                              name: "msvalidate.01",
                              content: "2D5D5E0D5154DB9DAE403E3CD6248FD6",
                            }),
                        ],
                      }),
                  (0, T.jsx)(lw, {}),
                ],
              }),
              (0, T.jsx)(lb(), {
                src: "https://zaptec.statuspage.io/embed/script.js",
              }),
              (0, T.jsx)(lf, { globals: l }),
            ],
          })
        );
      };
      function lI() {
        let e = (0, $._)([
          '\n  query HeaderQuery($siteId: [QueryArgument]) {\n    globalSet(handle: "menuSettings", siteId: $siteId) {\n      id\n      uid\n      siteId\n      ... on menuSettings_GlobalSet {\n        headerButton: button {\n          target\n          text\n          type\n          href: url\n          title\n        }\n      }\n    }\n    menu: entries(section: "secondaryMenu", siteId: $siteId, level: 1) {\n      id\n      uid\n      siteId\n      title\n      typeHandle\n      level\n      ... on secondaryMenu_default_Entry {\n        navigationLink {\n          target\n          text\n          type\n          href: url\n          title\n        }\n        tag: plainText\n      }\n      ... on secondaryMenu_secondaryLinks_Entry {\n        navigationLink {\n          target\n          text\n          type\n          href: url\n          title\n        }\n      }\n      sub: children {\n        id\n        uid\n        siteId\n        title\n        typeHandle\n        level\n        ... on secondaryMenu_default_Entry {\n          navigationLink {\n            target\n            text\n            type\n            href: url\n            title\n          }\n          tag: plainText\n        }\n        ... on secondaryMenu_secondaryLinks_Entry {\n          navigationLink {\n            target\n            text\n            type\n            href: url\n            title\n          }\n        }\n        sub: children {\n          id\n          uid\n          siteId\n          title\n          typeHandle\n          level\n          ... on secondaryMenu_default_Entry {\n            navigationLink {\n              target\n              text\n              type\n              href: url\n              title\n            }\n            tag: plainText\n          }\n          ... on secondaryMenu_secondaryLinks_Entry {\n            navigationLink {\n              target\n              text\n              type\n              href: url\n              title\n            }\n          }\n        }\n      }\n    }\n    search: entry(section: "search", siteId: $siteId) {\n      id\n      uid\n      siteId\n      url\n    }\n  }\n',
        ]);
        return (
          (lI = function () {
            return e;
          }),
          e
        );
      }
      let lk = (0, E.J1)(lI()),
        lN = (0, Z.WQ)("ui")(
          (0, Z.PA)((e) => {
            let { menu: n, setOpen: t, open: l, ui: i } = e,
              r = (0, t$.y)(),
              { pathname: a } = (0, np.useRouter)() || {};
            return (0, T.jsx)(nh.N, {
              initial: !1,
              children:
                !i.menuState &&
                (0, T.jsx)(eW.P.div, {
                  className:
                    "secondary-menu hidden sm:flex items-center r-gap-12 text-asphalt",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  children:
                    null == n
                      ? void 0
                      : n.map((e) => {
                          var n;
                          let { navigationLink: i } = e || {},
                            s =
                              null == i
                                ? void 0
                                : null === (n = i.href) || void 0 === n
                                ? void 0
                                : n.includes(a);
                          return (0, T.jsx)(
                            e8.A,
                            {
                              href: i.href,
                              target: i.target,
                              title: i.title,
                              className: "r-text-sm custom-underline ".concat(
                                s ? "active" : ""
                              ),
                              onMouseEnter: () => {
                                l.timeout && clearTimeout(l.timeout),
                                  t({ open: e.uid, timeout: null });
                              },
                              onMouseLeave: () => {
                                let e = setTimeout(() => {
                                  t({ open: !1, timeout: null });
                                }, 500);
                                t((n) => ({ ...n, timeout: e }));
                              },
                              onClick: () => {
                                r({
                                  event: "menu_clicked",
                                  menu: e.title,
                                  menulocation: "Top bar",
                                });
                              },
                              children: e.title,
                            },
                            e.uid
                          );
                        }),
                }),
            });
          })
        ),
        l_ = (0, Z.WQ)("ui")(
          (0, Z.PA)((e) => {
            let { ui: n } = e,
              t = (0, H.useTranslations)("common");
            return (0, T.jsx)("button", {
              "aria-label": t("button.openMenu"),
              className:
                "burger-button text-asphalt bg-white md:bg-transparent w-[2.875rem] group h-[2.875rem] rounded-full flex items-center justify-center z-60 transition-colors ".concat(
                  n.menuState ? "open" : ""
                ),
              onClick: () => {
                n.setMenuState(!n.menuState);
              },
              children: (0, T.jsxs)("span", {
                className: "w-6 h-4 relative",
                children: [
                  (0, T.jsx)("span", {
                    className:
                      "w-full h-[2px] bg-current absolute top-0 left-0 will-change-transform transition-all duration-300 ".concat(
                        n.menuState
                          ? "rotate-45 top-1/2  -translate-y-1/2"
                          : "translate-y-0 group-hover:md:rotate-45 group-hover:md:scale-x-50 group-hover:md:top-1/2 group-hover:md:origin-right"
                      ),
                  }),
                  (0, T.jsx)("span", {
                    className:
                      "w-full h-[2px] bg-current absolute top-1/2 left-0 -translate-y-1/2 transition-all duration-300 ".concat(
                        n.menuState ? "opacity-0" : "",
                        " }"
                      ),
                  }),
                  (0, T.jsx)("span", {
                    className:
                      "w-full h-[2px] bg-current absolute bottom-0 left-0 will-change-transform transition-all duration-300 ".concat(
                        n.menuState
                          ? "-rotate-45 bottom-1/2 translate-y-1/2"
                          : "translate-y-0 group-hover:md:-rotate-45 group-hover:md:scale-x-50 group-hover:md:bottom-1/2 group-hover:md:origin-right"
                      ),
                  }),
                ],
              }),
            });
          })
        ),
        lT = (e) => {
          var n, t;
          let { menu: l, open: i, setOpen: r } = e,
            a = (0, t$.y)(),
            s = (0, np.useRouter)(),
            o =
              (null == l
                ? void 0
                : null === (t = l.filter((e) => e.uid === i.open)) ||
                  void 0 === t
                ? void 0
                : null === (n = t[0]) || void 0 === n
                ? void 0
                : n.sub) || [],
            d = (null == s ? void 0 : s.asPath) || "";
          return (0, T.jsx)(nh.N, {
            mode: "wait",
            children:
              (null == o ? void 0 : o.length) > 0 &&
              (0, T.jsx)(eW.P.div, {
                className:
                  "secondary-menu-dropdown absolute left-0 top-full w-full bg-white z-50 overflow-hidden border-b border-t border-grey-border",
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                onMouseEnter: () => {
                  i.timeout && clearTimeout(i.timeout),
                    r({ open: i.open, timeout: null });
                },
                onMouseLeave: () => {
                  let e = setTimeout(() => {
                    r({ open: !1, timeout: null });
                  }, 500);
                  r((n) => ({ ...n, timeout: e }));
                },
                children: (0, T.jsxs)("div", {
                  className: "inner container full flex items-stretch h-full",
                  children: [
                    o
                      .filter((e) => "default" === e.typeHandle)
                      .map((e) => {
                        let { navigationLink: n, tag: t } = e || {};
                        if (!(null == n ? void 0 : n.href)) return null;
                        if ("custom" === n.type && "#blank" === n.href) {
                          let n = e.sub.some((e) => {
                            let n = new URL(e.navigationLink.href).pathname;
                            return d.includes(n);
                          });
                          return (0, T.jsxs)(
                            "div",
                            {
                              className:
                                "primary-menu-item r-text-lg border-r border-grey-border first:border-l group/main relative flex flex-col items-start gap-2 ".concat(
                                  n ? "active" : "",
                                  " r-w-[13.75] r-p-6"
                                ),
                              children: [
                                (0, T.jsx)("span", {
                                  className: "block mb-2",
                                  children: e.title,
                                }),
                                e.sub.map((t) => {
                                  let { navigationLink: l } = t || {},
                                    i = new URL(l.href).pathname,
                                    r = d.includes(i);
                                  return (0, T.jsx)(
                                    e8.A,
                                    {
                                      href: l.href,
                                      target: l.target,
                                      title: l.title,
                                      className:
                                        "secondary-menu-item leading-none custom-underline "
                                          .concat(
                                            n ? " text-white" : " text-asphalt"
                                          )
                                          .concat(r ? " active" : ""),
                                      onClick: () => {
                                        a({
                                          event: "menu_clicked",
                                          menu: e.title,
                                          menulocation: "Top bar",
                                        });
                                      },
                                      children: (0, T.jsx)("span", {
                                        className: "block",
                                        children: t.title,
                                      }),
                                    },
                                    t.uid
                                  );
                                }),
                                t &&
                                  (0, T.jsx)("span", {
                                    className:
                                      "tag inline-block r-text-xs px-3 rounded-button mt-2 self-start r-mb-6",
                                    children: t,
                                  }),
                                (0, T.jsx)("span", {
                                  className:
                                    "inline-flex items-center justify-center flex-shrink-0 rounded-full w-6 h-6 bg-asphalt absolute r-right-[1.5] r-bottom-[1.5] opacity-0 transition duration-300 group-hover/main:opacity-100 -translate-x-1/2 group-hover/main:translate-x-0",
                                  children: (0, T.jsx)(nS.A, {
                                    className: "w-3 stroke-white",
                                  }),
                                }),
                              ],
                            },
                            e.uid
                          );
                        }
                        let l = new URL(n.href).pathname,
                          i = d.includes(l);
                        return (0, T.jsxs)(
                          e8.A,
                          {
                            href: n.href,
                            target: n.target,
                            title: n.title,
                            className:
                              "primary-menu-item r-text-lg border-r border-grey-border first:border-l group relative ".concat(
                                i ? "active" : "",
                                " r-w-[13.75] r-p-6"
                              ),
                            onClick: () => {
                              a({
                                event: "menu_clicked",
                                menu: e.title,
                                menulocation: "Top bar",
                              });
                            },
                            children: [
                              (0, T.jsx)("span", {
                                className: "block",
                                children: e.title,
                              }),
                              t &&
                                (0, T.jsx)("span", {
                                  className:
                                    "tag inline-block r-text-xs px-3 rounded-button mt-2 r-mb-6",
                                  children: t,
                                }),
                              (0, T.jsx)("span", {
                                className:
                                  "inline-flex items-center justify-center flex-shrink-0 rounded-full w-6 h-6 bg-asphalt absolute r-right-[1.5] r-bottom-[1.5] opacity-0 transition duration-300 group-hover:opacity-100 -translate-x-1/2 group-hover:translate-x-0",
                                children: (0, T.jsx)(nS.A, {
                                  className: "w-3 stroke-white",
                                }),
                              }),
                            ],
                          },
                          e.uid
                        );
                      }),
                    (0, T.jsx)("div", {
                      className:
                        "secondary-links flex flex-col items-start gap-3 r-p-6",
                      children: o
                        .filter((e) => "secondaryLinks" === e.typeHandle)
                        .map((e) => {
                          let { navigationLink: n } = e || {};
                          if (!(null == n ? void 0 : n.href)) return null;
                          let t = new URL(n.href || "").pathname,
                            l = d.includes(t);
                          return (0, T.jsx)(
                            e8.A,
                            {
                              href: n.href,
                              className:
                                "secondary-menu-item r-text-base custom-underline text-asphalt ".concat(
                                  l ? "active" : ""
                                ),
                              onClick: () => {
                                a({
                                  event: "menu_clicked",
                                  menu: e.title,
                                  menulocation: "Top bar",
                                });
                              },
                              children: e.title,
                            },
                            e.uid
                          );
                        }),
                    }),
                  ],
                }),
              }),
          });
        };
      var lM = t(32654);
      function l$() {
        let e = (0, $._)([
          "\n  query FindTranslations($uri: [String], $siteId: [QueryArgument]) {\n    entry(uri: $uri, siteId: $siteId) {\n      id\n      siteId\n      uid\n      localized {\n        id\n        siteId\n        uid\n        title\n        url\n      }\n    }\n  }\n",
        ]);
        return (
          (l$ = function () {
            return e;
          }),
          e
        );
      }
      let lE = () => (0, E.J1)(l$()),
        lS = (e) => {
          let { globals: n, className: t } = e,
            { currentSite: l, routeProps: i } = n,
            [r, a] = (0, B.useState)([]),
            { data: s } = (0, M.I)(lE(), {
              variables: { uri: i.uri, siteId: l.siteId },
            });
          return ((0, B.useEffect)(() => {
            let { groupId: e } = lM.sites.find((e) => e.siteId === l.siteId),
              n = lM.sites.filter((n) => n.groupId === e && 1 != n.groupId),
              { localized: t } = (null == s ? void 0 : s.entry) || {};
            a(
              n.map((e) => {
                let n =
                    (null == t
                      ? void 0
                      : t.find((n) => n.siteId == e.siteId)) || {},
                  l = (null == n ? void 0 : n.url) || e.fullUrl || e.url;
                l = l.replace(/\/$/, "");
                let i = (null == n ? void 0 : n.title) || e.title;
                return { siteId: e.siteId, locale: e.locale, url: l, title: i };
              })
            );
          }, [l, s]),
          !r || r.length < 2)
            ? null
            : (0, T.jsx)("div", {
                className: "language-switcher ".concat(t),
                children: r
                  .filter((e) => l.siteId != e.siteId)
                  .map((e) => {
                    let n = e.locale.split("-");
                    return (0, T.jsxs)(
                      "a",
                      {
                        href: e.url,
                        title: e.title,
                        className:
                          "lang-link r-text-sm flex items-center gap-[0.31rem] text-asphalt transition-colors duration-300",
                        children: [
                          (0, T.jsx)("span", {
                            className:
                              "text-grey lang-part-1 transition-colors duration-300 lowercase",
                            children: ""
                              .concat(n[0].charAt(0).toUpperCase())
                              .concat(n[0].slice(1).toLowerCase()),
                          }),
                          n[1] &&
                            (0, T.jsxs)(T.Fragment, {
                              children: [
                                (0, T.jsx)("span", {
                                  className:
                                    "block w-4 h-[1px] bg-current dash",
                                }),
                                (0, T.jsx)("span", {
                                  className: "lang-part-2 uppercase",
                                  children: ""
                                    .concat(n[1].charAt(0).toUpperCase())
                                    .concat(n[1].slice(1).toLowerCase()),
                                }),
                              ],
                            }),
                        ],
                      },
                      e.siteId
                    );
                  }),
              });
        };
      var lC = t(61234),
        lD = t(86908),
        lB = t(93731);
      let lH = {
          src: "assets/_next/static/media/da.7ec79eb7.png",
          height: 55,
          width: 72,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAARVBMVEXrcofZCCraBSnaBCjXABf0tsHaAyfaABXuhJbrdonbCCzoZXzoZXvYARfbBSrXAAPtfpHeAhfviZrteYX3wsvvgIvsgIrOjArqAAAADXRSTlP+3Mze3P3t7uXk2v39PaBlrwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADZJREFUeJwFwQcCgCAQA7CKTKW3QP//VBIIzShSQV2/kg1he1tEB95SJjDguj51b7jy6Pm50wFDaQI5o2a7rgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 6,
        },
        lP = {
          src: "assets/_next/static/media/en.e0eb16f4.png",
          height: 12,
          width: 18,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAP1BMVEVMaXEMkdAAgOaGwG0DgOismHkAfvBiwIMDitImn6cAg+BAsIoilrwAkNlAqokPjM9YsoFnt3QYm90wpbdewJskzbs6AAAAEnRSTlMA/e2Kegr9/vmU9X/yqlf6rU+4HvZJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEgnRFWHRSYXcACmljYwogICAgIDU2MAowMDAwMDIzMDQxNDQ0MjQ1MDIxMDAwMDA2ZDZlNzQ3MjUyNDc0MjIwNTg1OTVhMjAwN2NmMDAwNjAwMDMwMDAwMDAwMDAwMDAKNjE2MzczNzA0MTUwNTA0YzAwMDAwMDAwNmU2ZjZlNjUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmNmQ2CjAwMDEwMDAwMDAwMGQzMmQ0MTQ0NDI0NTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAowMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGE2MzcwNzI3NDAwMDAwMGZjMDAwMDAwMzIKNjQ2NTczNjMwMDAwMDEzMDAwMDAwMDZiNzc3NDcwNzQwMDAwMDE5YzAwMDAwMDE0NjI2YjcwNzQwMDAwMDFiMDAwMDAwMDE0CjcyNTQ1MjQzMDAwMDAxYzQwMDAwMDAwZTY3NTQ1MjQzMDAwMDAxZDQwMDAwMDAwZTYyNTQ1MjQzMDAwMDAxZTQwMDAwMDAwZQo3MjU4NTk1YTAwMDAwMWY0MDAwMDAwMTQ2NzU4NTk1YTAwMDAwMjA4MDAwMDAwMTQ2MjU4NTk1YTAwMDAwMjFjMDAwMDAwMTQKNzQ2NTc4NzQwMDAwMDAwMDQzNmY3MDc5NzI2OTY3Njg3NDIwMzEzOTM5MzkyMDQxNjQ2ZjYyNjUyMDUzNzk3Mzc0NjU2ZDczCjIwNDk2ZTYzNmY3MjcwNmY3MjYxNzQ2NTY0MDAwMDAwNjQ2NTczNjMwMDAwMDAwMDAwMDAwMDExNDE2NDZmNjI2NTIwNTI0Nwo0MjIwMjgzMTM5MzkzODI5MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNTg1OTVhMjAwMDAwMDAwMDAwMDBmMzUxMDAwMTAwMDAwMDAxMTZjYwo1ODU5NWEyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjM3NTcyNzYwMDAwMDAwMDAwMDAwMDAxMDIzMzAwMDAKNjM3NTcyNzYwMDAwMDAwMDAwMDAwMDAxMDIzMzAwMDA2Mzc1NzI3NjAwMDAwMDAwMDAwMDAwMDEwMjMzMDAwMDU4NTk1YTIwCjAwMDAwMDAwMDAwMDljMTgwMDAwNGZhNTAwMDAwNGZjNTg1OTVhMjAwMDAwMDAwMDAwMDAzNDhkMDAwMGEwMmMwMDAwMGY5NQo1ODU5NWEyMDAwMDAwMDAwMDAwMDI2MzEwMDAwMTAyZjAwMDBiZTljCtavEJwAAAAtSURBVHicBcELAoAQFACwVXj0T+5/Vhv5rXuDo5clblz/U2NDGlH6h9zONTEBGScBExlXh0kAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        lL = {
          src: "assets/_next/static/media/de.03981035.png",
          height: 43,
          width: 72,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAG1BMVEX/2QD6AAAAAAD5jQBUAgD6jQBVAgD8jgBWAgC5jqhpAAAABXRSTlP4/v709KnMMN8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAcSURBVHicY2CCAgY2MOBgYWCEAgZWMGBnZoABAAtxAHEyp5CRAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        },
        lR = {
          src: "assets/_next/static/media/fr.686ef9c4.png",
          height: 48,
          width: 72,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAGFBMVEUCGJj/AzD/TWv9//9Zbr79////ACBabr9zwZNeAAAABXRSTlP+7P34+HvZ5xUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BgYGdlZWJjZMDLYGFmZmJjBAALPwB8e+GQewAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        lO = {
          src: "assets/_next/static/media/en-uk.c9b2cc12.png",
          height: 614,
          width: 1024,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEXk7fXR3eoZVJraUnXvKE5tcaPt4OfoEj3WET/CRG7CQ22aqcqWpsc2m30jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nEXItwEAIAwDMDu9/X8vIxoFrnTLEh5QRTisLNPK/vBkRo4PEUwAx1untT0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        lQ = {
          src: "assets/_next/static/media/fr-be.f3b3ddf9.png",
          height: 780,
          width: 900,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAD1BMVEX/AUUBAQD+5AD/UCtcTwDU1qXTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFElEQVR4nGNgZGRhYmJmYGAgiwEAC6YAXJ3DjoAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 7,
        },
        lU = {
          src: "assets/_next/static/media/nl-be.f3b3ddf9.png",
          height: 780,
          width: 900,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAD1BMVEX/AUUBAQD+5AD/UCtcTwDU1qXTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFElEQVR4nGNgZGRhYmJmYGAgiwEAC6YAXJ3DjoAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 7,
        },
        lq = {
          src: "assets/_next/static/media/nl.a038eb51.png",
          height: 48,
          width: 72,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAG1BMVEVng7S5ABAFN4j///8FN4kFN4jWaHvVaHv///+afWcVAAAAB3RSTlP9/fjt++ft04VeIAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtJREFUeJxjYIQCBnYIYGPggABmBjhgAgMWVgANyQCQ7QxfOQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        lz = {
          src: "assets/_next/static/media/sv.d200352a.png",
          height: 45,
          width: 72,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAHlBMVEUBaq/Quh0cdpkIbqYAYb+RoUqcp0AZdJoedpfrxAycOHsCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nDXKyQkAMAwEsVnf7r9hQyBfIYjMABiv8jFD2pUk7Ek3/xwMhACNhFDD7wAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        lF = {
          src: "assets/_next/static/media/no.88adae18.png",
          height: 1862,
          width: 2560,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJ1BMVEWAYYa7CyXPGzDMFix0bJOLa4zhJTW2BSHIDSRZWIZEUIONVniVXHsyaVtCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nGNgZ2Lh5mBkZGRgZmPhYWNmYmJgYOXiZGUAARgDLgVTDAAWVADN36tQeQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 6,
        },
        lG = {
          src: "assets/_next/static/media/de-ch.6b549cb9.png",
          height: 1200,
          width: 1200,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEXzAAj4Y2n91NX8xcb+6uvKazJxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nGNgQAKMjFAGMzOEz8TCwgQSgzPgUkiKwQAABngALTu4CYQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        lV = {
          src: "assets/_next/static/media/fr-ch.6b549cb9.png",
          height: 1200,
          width: 1200,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEXzAAj4Y2n91NX8xcb+6uvKazJxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nGNgQAKMjFAGMzOEz8TCwgQSgzPgUkiKwQAABngALTu4CYQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        lJ = {
          3: lH,
          1: lP,
          4: lL,
          6: lR,
          5: lO,
          9: lQ,
          8: lU,
          7: lq,
          2: lz,
          12: lF,
          11: lG,
          10: lV,
        },
        lZ = (e) =>
          (0, T.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              (0, T.jsx)(ny(), {
                src: lJ[e.value],
                alt: e.label,
                className: "w-[1.125rem] h-[0.8125rem] object-contain",
              }),
              (0, T.jsx)("span", { children: e.label }),
            ],
          }),
        lY = (e) =>
          (0, T.jsx)(lD.c.DropdownIndicator, {
            ...e,
            children: (0, T.jsx)("svg", {
              width: "10",
              height: "6",
              viewBox: "0 0 10 6",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, T.jsx)("path", {
                d: "M5 6L0.669872 0.750001L9.33013 0.75L5 6Z",
                fill: "#F0F0F0",
              }),
            }),
          }),
        lX = {
          container: (e) => ({
            ...e,
            minHeight: "0",
            height: "auto",
            padding: "0",
          }),
          dropdownIndicator: (e) => ({
            ...e,
            paddingRight: "1.5rem",
            cursor: "pointer",
          }),
          clearIndicator: (e) => ({ ...e, cursor: "pointer" }),
          control: (e) => ({
            ...e,
            border: "none",
            boxShadow: "none",
            borderRadius: "6.25rem",
            background: "#3B3B3B",
            minHeight: "0",
            height: "auto",
            padding: "0",
            width: "100%",
            "&:hover": { borderColor: "#3B3B3B" },
          }),
          valueContainer: (e) => ({
            ...e,
            padding: "0.33rem 0.75rem ",
            color: "#F0F0F0",
            fontSize: "0.75rem",
          }),
          menu: (e) => ({
            ...e,
            borderRadius: "0.75rem",
            boxShadow: "none",
            marginTop: "0",
            zIndex: 9999,
            background: "#3B3B3B",
          }),
          menuList: (e) => ({ ...e, padding: "0" }),
          option: (e, n) => ({
            ...e,
            color: "#F0F0F0",
            background: n.isSelected ? "#222" : "transparent",
            fontSize: "0.75rem",
            "&:hover": { background: "#19312f" },
          }),
          placeholder: (e) => ({ ...e, display: "none" }),
          singleValue: (e) => ({ ...e, color: "#F0F0F0", margin: "0" }),
        },
        lW = (e) => {
          let { data: n, current: t, setCurrent: l } = e,
            { sites: i } = lM,
            { siteId: r, allLocales: a } = n,
            s = t || r,
            o = (0, B.useMemo)(() => {
              let e = a.map((e) => e.siteId),
                n = i
                  .filter((n) => e.includes(n.siteId))
                  .reduce(
                    (e, n) => (
                      e[n.groupId] || (e[n.groupId] = []),
                      e[n.groupId].push(n),
                      e
                    ),
                    {}
                  ),
                t = Object.keys(n)
                  .sort((e, t) =>
                    n[e].find((e) => e.siteId == r)
                      ? -1
                      : n[t].find((e) => e.siteId == r)
                      ? 1
                      : 0
                  )
                  .reduce((e, t) => ((e[t] = n[t]), e), {});
              return Object.keys(t).map((e) => {
                let n = t[e];
                if (!(n.length > 1))
                  return { label: n[0].name, value: n[0].siteId };
                {
                  let [t] = n[0].name.split("/");
                  return {
                    label: 1 == e ? null : t,
                    options: n.map((e) => ({ label: e.name, value: e.siteId })),
                  };
                }
              });
            }, [i, r, a]),
            d = o.find((e) => e.options.find((e) => e.value == s)),
            c = null == d ? void 0 : d.options.find((e) => e.value == s);
          return (0, T.jsx)(lB.default, {
            styles: lX,
            options: o,
            isSearchable: !1,
            value: c,
            onChange: (e) => l(e.value),
            getOptionLabel: (e) => e.label,
            getOptionValue: (e) => e.value,
            formatOptionLabel: lZ,
            components: {
              IndicatorSeparator: () => null,
              DropdownIndicator: lY,
            },
            className: "w-auto sm:w-60 flex-1 sm:flex-none",
          });
        },
        lK = [
          "googlebot",
          "bingbot",
          "slurp",
          "duckduckbot",
          "baiduspider",
          "yandexbot",
          "sogou",
          "exabot",
          "facebookexternalhit",
          "facebot",
          "ia_archiver",
          "rogerbot",
          "embedly",
          "quora link preview",
          "outbrain",
          "pinterest",
          "developers.google.com/+/web/snippet",
          "linkedinbot",
          "slackbot",
          "twitterbot",
          "vkShare",
          "W3C_Validator",
          "redditbot",
          "Applebot",
          "WhatsApp",
          "flipboard",
          "tumblr",
          "bitlybot",
          "SkypeUriPreview",
          "nuzzel",
          "Discordbot",
          "Google Page Speed",
          "Qwantify",
          "pinterestbot",
          "Bitrix link preview",
          "XING-contenttabreceiver",
          "Chrome-Lighthouse",
        ],
        l0 = (e) => {
          var n, t;
          let { globals: l } = e,
            i = (0, lC.getCookie)("__locationRedirect"),
            r = (0, H.useTranslations)("common"),
            a = (0, np.useRouter)(),
            [s, o] = (0, B.useState)(!0),
            [d, c] = (0, B.useState)(null),
            [u, m] = (0, B.useState)(null),
            { currentSite: p } = l,
            { siteId: h, locale: g } = p,
            x = a.asPath;
          (0, U.E)(() => {
            i ||
              u ||
              d ||
              setTimeout(() => {
                let e = window.eval(
                    "\n        var result = 0;\n        for (var i = 0; i < 10; i++) {\n          result += i;\n        }\n        result;\n      "
                  ),
                  n = window.navigator.userAgent.toLowerCase();
                lK.some((e) => n.includes(e)) ||
                  45 !== e ||
                  fetch(
                    "/api/needsRedirect?siteId="
                      .concat(h, "&locale=")
                      .concat(g, "&pathname=")
                      .concat(x),
                    {
                      method: "GET",
                      headers: { "Content-Type": "application/json" },
                    }
                  )
                    .then((e) => e.json())
                    .then((e) => {
                      let n = null == e ? void 0 : e.needsRedirect;
                      console.log("redirect", { res: e, redirect: n }),
                        n && (o(!0), c(null == n ? void 0 : n.siteId), m(n));
                    })
                    .catch((e) => console.error(e));
                let t = new Date(),
                  l = new Date(t.setMonth(t.getMonth() + 1));
                (0, lC.setCookie)("__locationRedirect", "true", { expires: l });
              }, 2e3);
          }, [h, g, x]);
          let v =
            (null === (t = lM.sites.find((e) => e.siteId == d)) || void 0 === t
              ? void 0
              : null === (n = t.name) || void 0 === n
              ? void 0
              : n.split("/")[0]) || "";
          return (0, T.jsx)(nh.N, {
            children:
              s &&
              u &&
              (0, T.jsxs)(eW.P.div, {
                initial: { marginTop: "-2.75rem" },
                animate: { marginTop: 0 },
                exit: { marginTop: "-2.75rem" },
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                className:
                  "language-redirect relative flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 z-50 bg-asphalt p-2 sm:h-[2.75rem]",
                children: [
                  (0, T.jsx)("p", {
                    className: "sm:mr-6 text-white text-xs",
                    children: r("proceedToLanguage", { lang: v }),
                  }),
                  (0, T.jsxs)("div", {
                    className: "flex gap-1 sm:gap-2 items-center",
                    children: [
                      (0, T.jsx)(lW, { data: u, current: d, setCurrent: c }),
                      (0, T.jsx)("button", {
                        onClick: () => {
                          var e;
                          o(!1),
                            a.push(
                              null ===
                                (e = u.allLocales.find((e) => e.siteId == d)) ||
                                void 0 === e
                                ? void 0
                                : e.url
                            );
                        },
                        className:
                          "bg-white rounded-[6.25rem] text-asphalt px-3 py-1 text-xs hover:bg-[#3B3B3B] hover:text-white transition-colors duration-300",
                        children: r("continue"),
                      }),
                      (0, T.jsx)("button", {
                        className:
                          "hover:rotate-[360deg] transition-transform duration-300 absolute top-0 right-0 sm:relative",
                        onClick: () => {
                          o(!1);
                        },
                        children: (0, T.jsx)("svg", {
                          viewBox: "0 0 48 48",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "w-8 h-8 sm:w-12 sm:h-12",
                          children: (0, T.jsx)("path", {
                            d: "M15.5147 15.4853L32.4853 32.4558M32.4853 15.4853L15.5147 32.4558",
                            className: "stroke-white",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          });
        };
      function l1() {
        return (l1 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var l2 = (0, B.forwardRef)(function (e, n) {
          return B.createElement(
            "svg",
            l1(
              {
                viewBox: "0 0 94 29",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: n,
              },
              e
            ),
            v ||
              (v = B.createElement("path", {
                d: "M46.665 19.68v1.578H36.43v-1.39L44.328 9.32h-7.805V7.742h10.072v1.39L38.696 19.68h7.969ZM52.904 21.094a4.078 4.078 0 0 1-1.752.33 3.448 3.448 0 0 1-2.314-.777c-.607-.495-.934-1.248-.911-2.049-.023-.777.28-1.53.865-2.025.584-.518 1.519-.918 2.827-1.177l2.384-.518v-.424a1.726 1.726 0 0 0-.491-1.318c-.327-.306-.794-.448-1.449-.448a2.39 2.39 0 0 0-1.472.424 2.206 2.206 0 0 0-.794 1.271l-1.59-.423a3.546 3.546 0 0 1 1.426-2.002 4.056 4.056 0 0 1 2.477-.753c1.145 0 2.01.282 2.617.824.608.565.912 1.342.912 2.354v4.804a.686.686 0 0 0 .28.636c.234.117.514.14.771.07v1.366c-.771.094-1.355.047-1.776-.141-.42-.165-.7-.542-.794-.99-.28.424-.701.754-1.215.966Zm.351-1.648c.49-.353.771-.918.771-1.53V16.22l-1.916.424c-.935.188-1.59.424-1.963.73-.35.282-.56.73-.56 1.177-.024.424.14.848.466 1.13.374.283.818.448 1.286.424.7-.023 1.379-.235 1.916-.66ZM65.078 21.048a3.725 3.725 0 0 1-1.799.4 3.871 3.871 0 0 1-1.776-.424c-.514-.283-.958-.683-1.239-1.2v4.826h-1.682V11.394h1.682v1.436a3.383 3.383 0 0 1 1.262-1.177 3.539 3.539 0 0 1 1.776-.424c.631 0 1.239.141 1.823.4.561.283 1.028.683 1.402 1.178.35.494.608 1.036.771 1.6a7.222 7.222 0 0 1 0 3.862 4.887 4.887 0 0 1-.794 1.601c-.42.518-.888.919-1.426 1.178Zm-4.112-7.464c-.514.588-.772 1.389-.772 2.401v.707c0 1.012.258 1.813.772 2.401a2.682 2.682 0 0 0 3.809.165c.093-.094.187-.188.257-.282.514-.66.77-1.53.77-2.638 0-1.106-.256-1.977-.77-2.637a2.692 2.692 0 0 0-3.81-.353c-.07.07-.163.165-.256.236ZM70.525 20.764c-.397-.4-.608-1.013-.608-1.86v-6.052h-1.519v-1.46h1.52V8.52h1.658v2.872h2.22v1.46h-2.22v5.792c-.023.33.07.683.28.942.188.189.562.283 1.076.283.187 0 .374 0 .56-.024.164-.023.328-.047.491-.094v1.46a7.235 7.235 0 0 1-.7.118 8.452 8.452 0 0 1-.772.047c-.911-.024-1.565-.212-1.986-.613ZM77.98 21.069a3.952 3.952 0 0 1-1.495-1.13 4.679 4.679 0 0 1-.888-1.601 6.39 6.39 0 0 1-.304-2.002c0-.659.093-1.318.304-1.954.187-.589.49-1.154.888-1.625a4.127 4.127 0 0 1 1.472-1.153 4.572 4.572 0 0 1 1.846-.4c1.285 0 2.29.447 3.038 1.318.748.871 1.122 2.048 1.122 3.508v.565h-7.081c.047 1.036.35 1.86.888 2.473a2.69 2.69 0 0 0 2.103.918c.584.023 1.145-.165 1.636-.495.444-.33.771-.824.888-1.389l1.495.542a3.866 3.866 0 0 1-1.518 2.072 4.52 4.52 0 0 1-2.5.753 4.707 4.707 0 0 1-1.894-.4Zm-.023-7.7a3.376 3.376 0 0 0-.958 1.931h5.281a2.93 2.93 0 0 0-.701-1.93 2.253 2.253 0 0 0-1.8-.707c-.677 0-1.331.236-1.822.707ZM87.864 13.674c-.538.66-.795 1.554-.795 2.661s.257 1.978.795 2.637a2.593 2.593 0 0 0 2.126.99 2.274 2.274 0 0 0 1.566-.542c.444-.4.748-.942.865-1.555l1.495.707a3.852 3.852 0 0 1-1.425 2.096c-.725.518-1.613.8-2.5.777a4.88 4.88 0 0 1-1.917-.377 3.955 3.955 0 0 1-1.496-1.13 5.282 5.282 0 0 1-.911-1.625 6.507 6.507 0 0 1 0-4.003c.187-.588.49-1.154.911-1.625a3.954 3.954 0 0 1 1.496-1.13 4.493 4.493 0 0 1 1.916-.376 4.055 4.055 0 0 1 2.477.753c.678.518 1.192 1.224 1.402 2.072l-1.448.73a2.949 2.949 0 0 0-.865-1.554 2.274 2.274 0 0 0-1.566-.542c-.818.024-1.612.377-2.126 1.036ZM8.32 20.34l7.128-9.7h-4.09l-.934-1.413h7.734l-5.795 8.194 10.656-1.79c.023 0 .07.024.07.047 0 .024 0 .047-.023.071L8.32 20.34Z",
              })),
            f ||
              (f = B.createElement("path", {
                d: "M14.301 28.91C6.426 28.91 0 22.459 0 14.5 0 6.542 6.403.09 14.301.09c7.876 0 14.302 6.452 14.302 14.41 0 7.959-6.403 14.41-14.302 14.41Zm0-27.266c-7.057 0-12.782 5.769-12.782 12.88 0 7.11 5.725 12.88 12.782 12.88 7.058 0 12.783-5.77 12.783-12.88 0-7.111-5.725-12.88-12.783-12.88Z",
              }))
          );
        }),
        l5 = t(19602);
      let l4 = (0, Z.WQ)("ui")(
          (0, Z.PA)((e) => {
            let { ui: n, searchData: t } = e,
              l = (0, t$.y)(),
              i = (0, H.useTranslations)("common"),
              r = (0, np.useRouter)(),
              [a, s] = (0, B.useState)(""),
              o = (0, B.useRef)(null),
              d = (0, B.useRef)(null),
              [c, u] = (0, B.useState)(!1),
              m = (0, l5.U)("only screen and (max-width: 768px)");
            return (
              (0, B.useEffect)(() => {
                let e = (e) => {
                  d.current && !d.current.contains(e.target) && u(!1);
                };
                return (
                  document.addEventListener("click", e),
                  d.current &&
                    (d.current.addEventListener("focusin", () => {
                      u(!0);
                    }),
                    d.current.addEventListener("focusout", () => {
                      u(!1);
                    })),
                  () => {
                    document.removeEventListener("click", e);
                  }
                );
              }, []),
              (0, T.jsx)(nh.N, {
                children: (0, T.jsx)(eW.P.div, {
                  className:
                    "search-box border border-grey-border rounded-[6.25rem] r-text-sm w-[2.75rem] h-[2.75rem] overflow-hidden bg-white cursor-pointer relative ".concat(
                      c ? " is-open" : ""
                    ),
                  initial: { width: "2.75rem" },
                  animate: { width: c ? (m ? "10rem" : "20rem") : "2.75rem" },
                  exit: { width: "2.75rem" },
                  onClick: () => {
                    u(!0), o.current && o.current.focus();
                  },
                  ref: d,
                  children: (0, T.jsxs)("form", {
                    action: "",
                    role: "search",
                    noValidate: !0,
                    className:
                      "w-[10rem] md:w-[20rem] flex justify-between items-center gap-4 absolute left-0 top-0 h-full pl-[0.9rem] pr-[0.31rem] py-[0.31rem]",
                    onSubmit: (e) => {
                      e.preventDefault(),
                        e.stopPropagation(),
                        o.current && o.current.blur();
                      let i = ""
                        .concat(
                          encodeURIComponent("".concat("Zaptec", "[query]")),
                          "="
                        )
                        .concat(encodeURIComponent(a));
                      l({
                        event: "site_search",
                        searchquery: a,
                        location: "Main menu",
                      });
                      let d = new URL(t.url);
                      r.push({ pathname: d.pathname, query: i }),
                        s(""),
                        u(!1),
                        n.setMenuState(!1);
                    },
                    children: [
                      (0, T.jsx)("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "search-icon flex-shrink-0 ".concat(
                          n.menuState && !c
                            ? "stroke-grey md:stroke-white"
                            : "stroke-grey",
                          " transition-colors duration-300"
                        ),
                        children: (0, T.jsx)("path", {
                          d: "M13 13.2109L9.5 9.71094M11 6.21094C11 8.97236 8.76142 11.2109 6 11.2109C3.23858 11.2109 1 8.97236 1 6.21094C1 3.44951 3.23858 1.21094 6 1.21094C8.76142 1.21094 11 3.44951 11 6.21094Z",
                        }),
                      }),
                      (0, T.jsx)("input", {
                        ref: o,
                        autoComplete: "off",
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        placeholder: i("search.input"),
                        spellCheck: !1,
                        type: "text",
                        className:
                          "flex-1 r-text-sm outline-none bg-transparent w-[100px] sm:w-[120px]",
                        value: a,
                        onChange: (e) => {
                          s(e.currentTarget.value);
                        },
                      }),
                      (0, T.jsx)("button", {
                        type: "reset",
                        hidden: 0 === a.length,
                        onClick: () => {
                          s("");
                        },
                        children: (0, T.jsxs)("svg", {
                          width: "12",
                          height: "13",
                          viewBox: "0 0 12 13",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, T.jsx)("path", {
                              d: "M2 10.2109L9.99997 2.21097",
                              stroke: "#767572",
                            }),
                            (0, T.jsx)("path", {
                              d: "M2 2.21094L9.99997 10.2109",
                              stroke: "#767572",
                            }),
                          ],
                        }),
                      }),
                      (0, T.jsx)("button", {
                        type: "submit",
                        className:
                          "bg-asphalt text-white rounded-[6.25rem] r-px-4 py-1 r-text-xs flex-shrink-0 hidden md:inline-flex",
                        children: i("search.button"),
                      }),
                    ],
                  }),
                }),
              })
            );
          })
        ),
        l3 = (0, Z.WQ)("ui")(
          (0, Z.PA)((e) => {
            var n, t, l;
            let { globals: i, ui: r } = e,
              a = (0, B.useRef)(null),
              [s, o] = (0, B.useState)({ open: !1, timeout: null }),
              { currentSite: d, routeProps: c } = i,
              { data: u } = (0, M.I)(lk, {
                variables: { siteId: null == d ? void 0 : d.siteId },
              });
            return (
              (0, B.useEffect)(() => {
                let e = window.scrollY;
                a.current.classList.remove("-translate-y-full");
                let n = () => {
                  if (r.menuState) {
                    a.current.classList.remove("-translate-y-full"),
                      a.current.classList.remove("leaves-hero");
                    return;
                  }
                  let n = window.scrollY;
                  n > 200
                    ? (a.current.classList.add("leaves-hero"),
                      n - e > 0
                        ? a.current.classList.add("-translate-y-full")
                        : a.current.classList.remove("-translate-y-full"),
                      (e = n))
                    : a.current.classList.remove("leaves-hero");
                };
                return (
                  window.addEventListener("scroll", n),
                  n(),
                  () => {
                    window.removeEventListener("scroll", n);
                  }
                );
              }, [r.menuState]),
              (0, T.jsxs)("nav", {
                className: "top-bar fixed top-0 z-[100] w-full transition-all"
                  .concat(r.menuState ? " menu-open" : "")
                  .concat(c.fullHero ? " full" : ""),
                ref: a,
                children: [
                  (0, T.jsx)(l0, { globals: i }),
                  (0, T.jsxs)("div", {
                    className:
                      "inner container full r-h-[5.375] flex items-center justify-between transition-all duration-300",
                    children: [
                      (0, T.jsxs)("div", {
                        className: "menu-left flex items-center r-gap-[7.88]",
                        children: [
                          (0, T.jsx)(e8.A, {
                            className: "mr-element-xs text-xl",
                            href: "/".concat(
                              (null == d ? void 0 : d.locale) !== "en"
                                ? null == d
                                  ? void 0
                                  : null === (n = d.locale) || void 0 === n
                                  ? void 0
                                  : n.toLowerCase()
                                : ""
                            ),
                            locale: null == d ? void 0 : d.locale,
                            onClick: () => r.setMenuState(!1),
                            children: (0, T.jsx)(l2, {
                              className:
                                "logo r-w-[5.875] fill-asphalt transition-colors duration-300",
                            }),
                          }),
                          (0, T.jsx)(lN, {
                            menu:
                              null == u
                                ? void 0
                                : null === (t = u.menu) || void 0 === t
                                ? void 0
                                : t.filter(
                                    (e) =>
                                      1 === e.level &&
                                      "default" === e.typeHandle
                                  ),
                            setOpen: o,
                            open: s,
                          }),
                        ],
                      }),
                      (0, T.jsxs)("div", {
                        className: "menu-right flex items-center gap-4",
                        children: [
                          (0, T.jsx)(lS, { globals: i }),
                          (0, T.jsx)(l4, {
                            globals: i,
                            searchData: null == u ? void 0 : u.search,
                          }),
                          (0, T.jsx)(e0.A, {
                            linkProps:
                              null == u
                                ? void 0
                                : null === (l = u.globalSet) || void 0 === l
                                ? void 0
                                : l.headerButton,
                            className: "hidden md:inline-flex grey small",
                            Icon: (e) => {
                              let { className: n, ...t } = e;
                              return (0, T.jsx)(nq.A, {
                                ...t,
                                className: "plus-icon ".concat(n),
                              });
                            },
                            onClick: () => r.setMenuState(!1),
                          }),
                          (0, T.jsx)(l_, {}),
                        ],
                      }),
                    ],
                  }),
                  (0, T.jsx)(lT, {
                    menu: null == u ? void 0 : u.menu,
                    open: s,
                    setOpen: o,
                  }),
                ],
              })
            );
          })
        );
      function l6() {
        let e = (0, $._)([
          '\n  query FooterMenu(\n    $siteId: [QueryArgument]\n    $level: Int = 1\n    $navHandle: [String] = "footerMenu"\n  ) {\n    footerMenu: entries(level: $level, siteId: $siteId, section: $navHandle) {\n      title\n      uid\n      id\n      siteId\n      ... on footerMenu_default_Entry {\n        navigationLink {\n          target\n          text\n          title\n          type\n          href: url\n        }\n      }\n    }\n    footerSettings: globalSet(handle: "footer", siteId: $siteId) {\n      id\n      uid\n      siteId\n      ... on footer_GlobalSet {\n        footerTitle: moduleTitle\n        footerButton: button {\n          target\n          text\n          title\n          type\n          href: url\n        }\n        links {\n          ... on links_link_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            itemLink {\n              target\n              text\n              title\n              type\n              href: url\n            }\n          }\n        }\n        addresses: textColumns {\n          ... on textColumns_column_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            title: moduleTitle\n            text\n          }\n        }\n        socials {\n          ... on socials_link_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            itemLink {\n              target\n              text\n              title\n              type\n              href: url\n            }\n          }\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (l6 = function () {
            return e;
          }),
          e
        );
      }
      let l8 = (0, E.J1)(l6()),
        l7 = (e) => {
          let { title: n, button: t, dark: l } = e;
          return n
            ? (0, T.jsxs)("div", {
                className:
                  "footer-cta py-20 sm:r-py-10 text-center w-full flex items-center justify-center flex-col",
                children: [
                  (0, T.jsx)("p", { className: "h2-text", children: n }),
                  (0, T.jsx)(e0.A, {
                    linkProps: t,
                    className: "r-mt-6".concat(l ? " " : " white-green"),
                  }),
                ],
              })
            : null;
        },
        l9 = (e) => {
          let { menu: n } = e;
          return (0, T.jsx)("nav", {
            className: "footer-menu columns-2 gap-x-4 sm:r-gap-x-16",
            children:
              null == n
                ? void 0
                : n.map((e) =>
                    (0, T.jsxs)(
                      e8.A,
                      {
                        className:
                          "text-base sm:text-xl sm:whitespace-nowrap overflow-hidden flex mb-3 hover:text-sand pl-0 r-pr-6 hover:pr-0 hover:r-pl-6 transition-all duration-300 group relative",
                        href: e.navigationLink.href,
                        target: e.navigationLink.target,
                        children: [
                          (0, T.jsx)(nS.A, {
                            className:
                              "r-w-4 h-auto stroke-current stroke-2 flex-shrink-0 absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 group-hover:translate-x-0 transition-transform duration-300",
                          }),
                          e.title,
                        ],
                      },
                      e.uid
                    )
                  ),
          });
        },
        ie = (e) => {
          let { addresses: n, links: t, dark: l } = e;
          return (0, T.jsxs)("div", {
            className:
              "flex flex-col r-gap-10 lg:r-max-w-[26.25] w-full lg:ml-auto",
            children: [
              (0, T.jsx)("div", {
                className: "contact-links flex flex-col items-start",
                children:
                  null == t
                    ? void 0
                    : t.map((e) =>
                        (0, T.jsx)(
                          e8.A,
                          {
                            href: e.itemLink.href,
                            target: e.itemLink.target,
                            className:
                              "custom-underline block text-xl sm:r-text-2xl ".concat(
                                l ? "hover:text-forest" : "hover:text-sand",
                                " transition-all duration-300"
                              ),
                            children: e.itemLink.text,
                          },
                          e.uid
                        )
                      ),
              }),
              (0, T.jsx)("div", {
                className: "flex r-gap-16 lg:r-gap-5",
                children:
                  null == n
                    ? void 0
                    : n.map((e) =>
                        (0, T.jsxs)(
                          "div",
                          {
                            className: "flex flex-col gap-1 flex-1",
                            children: [
                              (0, T.jsx)("h5", {
                                className: "r-text-sm",
                                children: e.title,
                              }),
                              (0, T.jsx)("div", {
                                className: "address wysiwyg r-text-xs",
                                dangerouslySetInnerHTML: { __html: e.text },
                              }),
                            ],
                          },
                          e.id
                        )
                      ),
              }),
            ],
          });
        };
      function it() {
        let e = (0, $._)([
          "\n  query FindTranslations($uri: [String], $siteId: [QueryArgument]) {\n    entry(uri: $uri, siteId: $siteId) {\n      id\n      siteId\n      uid\n      localized {\n        id\n        siteId\n        uid\n        title\n        url\n      }\n    }\n  }\n",
        ]);
        return (
          (it = function () {
            return e;
          }),
          e
        );
      }
      let il = () => (0, E.J1)(it());
      var ii = t(44194);
      function ir() {
        return (ir = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var l in t)
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ia = (0, B.forwardRef)(function (e, n) {
        return B.createElement(
          "svg",
          ir(
            {
              width: 10,
              height: 9,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
            },
            e
          ),
          w ||
            (w = B.createElement("path", {
              d: "M5 8.94V1.384m0 0L1.223 5.162M5 1.385l3.777 3.777",
            }))
        );
      });
      let is = {
          da: lH,
          en: lP,
          de: lL,
          fr: lR,
          "en-uk": lO,
          "fr-be": lQ,
          "nl-be": lU,
          nl: lq,
          sv: lz,
          no: lF,
          "de-ch": lG,
          "fr-ch": lV,
        },
        io = (e) => {
          let { globals: n, className: t, dark: l = !1 } = e,
            i = (0, H.useTranslations)("common"),
            r = (0, B.useRef)(null),
            { currentSite: a, routeProps: s } = n,
            [o, d] = (0, B.useState)([]),
            [c, u] = (0, B.useState)(!1),
            [m, p] = (0, B.useState)(480),
            { data: h } = (0, M.I)(il(), {
              variables: { uri: s.uri, siteId: a.siteId },
            });
          return ((0, B.useEffect)(() => {
            let { localized: e } = (null == h ? void 0 : h.entry) || {};
            d(
              lM.sites.map((n) => {
                let t =
                    (null == e
                      ? void 0
                      : e.find((e) => e.siteId == n.siteId)) || {},
                  l = (null == t ? void 0 : t.url) || n.fullUrl || n.url;
                l = l.replace(/\/$/, "");
                let i = (null == t ? void 0 : t.title) || n.title;
                return {
                  siteId: n.siteId,
                  locale: n.locale,
                  url: l,
                  title: i,
                  name: n.name,
                  flag: is[n.locale.toLowerCase()],
                };
              })
            );
          }, [h]),
          (0, B.useEffect)(() => {
            if (!r.current) return;
            let e = (e) => {
              r.current.contains(e.target) || u(!1);
            };
            return (
              window.addEventListener("click", e),
              () => {
                window.removeEventListener("click", e);
              }
            );
          }, [r.current]),
          !o || o.length < 2)
            ? null
            : (0, T.jsxs)("div", {
                className: "".concat(t, " relative language-switcher"),
                ref: r,
                children: [
                  (0, T.jsxs)("button", {
                    className: "flex items-center gap-4 ".concat(
                      l ? "text-asphalt" : "text-white"
                    ),
                    onClick: () => {
                      u(!c);
                      let { top: e } = r.current.getBoundingClientRect();
                      p(e - 100 - 20);
                    },
                    children: [
                      (0, T.jsx)(ii.A, {
                        className: "icon w-4 h-4 stroke-current",
                      }),
                      (0, T.jsx)("span", {
                        className: "",
                        children: i("country"),
                      }),
                      (0, T.jsx)("span", {
                        className:
                          "icon-wrapper bg-current rounded-full w-6 h-6 flex-shrink-0 inline-flex items-center justify-center",
                        children: (0, T.jsx)(ia, {
                          width: null,
                          height: null,
                          viewBox: "0 0 10 10",
                          className: "w-3 top-icon ".concat(
                            l ? "stroke-white" : "stroke-asphalt"
                          ),
                        }),
                      }),
                    ],
                  }),
                  (0, T.jsx)(eW.P.div, {
                    className:
                      "dropdown-options absolute bottom-full left-0 h-full bg-white border border-grey-border r-w-[16] r-mb-4 rounded-sm overflow-hidden",
                    initial: "collapsed",
                    style: { maxHeight: m },
                    animate: c ? "open" : "collapsed",
                    variants: {
                      open: { height: "auto", opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    },
                    transition: {
                      duration: 0.5,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    },
                    onAnimationComplete: () => {
                      c
                        ? (r.current.querySelector(
                            ".dropdown-options"
                          ).style.overflow = "auto")
                        : (r.current.querySelector(
                            ".dropdown-options"
                          ).style.overflow = "hidden");
                    },
                    children: (0, T.jsx)("div", {
                      className: "inner r-p-6 flex flex-col",
                      children: o.map((e) =>
                        (0, T.jsxs)(
                          "a",
                          {
                            href: e.url,
                            className:
                              "flex items-center justify-start w-full h-ful py-3 border-b last:border-b-0 r-text-sm ".concat(
                                a.siteId === e.siteId
                                  ? " text-forest border-asphalt"
                                  : " text-asphalt border-grey-border",
                                " }"
                              ),
                            title: e.title,
                            children: [
                              (0, T.jsx)(ny(), {
                                src: e.flag,
                                alt: e.locale,
                                className:
                                  "w-[1.125] h-[0.8125] mr-1 object-contain",
                                width: "18",
                                height: "13",
                              }),
                              (0, T.jsx)("span", {
                                className: "whitespace-nowrap",
                                children: e.name,
                              }),
                            ],
                          },
                          e.siteId
                        )
                      ),
                    }),
                  }),
                ],
              });
        };
      P.os.registerPlugin(R());
      let id = () =>
          (0, T.jsx)(ia, {
            width: null,
            height: null,
            viewBox: "0 0 10 10",
            className: "w-3 stroke-asphalt top-icon",
          }),
        ic = (e) => {
          let { menu: n, globals: t, dark: l } = e,
            i = (0, H.useTranslations)("common");
          return (0, T.jsx)("div", {
            className: "container full flex-shrink-0",
            children: (0, T.jsxs)("div", {
              className: "inner border-t ".concat(
                l ? "border-grey-border" : "border-white",
                " flex flex-col-reverse sm:flex-row items-start sm:items-center gap-6 r-pt-6 r-pb-8"
              ),
              children: [
                (0, T.jsxs)("div", {
                  className: "flex gap-4",
                  children: [
                    (0, T.jsx)(io, { globals: t, dark: l }),
                    (0, T.jsx)("button", {
                      className: "text-xs sm:r-text-xs ".concat(
                        l ? "hover:text-grey" : "hover:text-sand",
                        " transition-all duration-300"
                      ),
                      onClick: () => {
                        var e, n, t;
                        null === (t = window) ||
                          void 0 === t ||
                          null === (n = t.Didomi) ||
                          void 0 === n ||
                          null === (e = n.preferences) ||
                          void 0 === e ||
                          e.show();
                      },
                      children: i("editConsent"),
                    }),
                  ],
                }),
                (0, T.jsxs)("div", {
                  className:
                    "sm:ml-auto w-full sm:w-auto flex items-center r-gap-20",
                  children: [
                    (0, T.jsx)("div", {
                      className:
                        "socials flex flex-wrap items-center w-full sm:w-auto justify-between sm:justify-end gap-2 sm:r-gap-8",
                      children:
                        null == n
                          ? void 0
                          : n.map((e) => {
                              var n, t, i;
                              return (0, T.jsx)(
                                e8.A,
                                {
                                  href:
                                    null === (n = e.itemLink) || void 0 === n
                                      ? void 0
                                      : n.href,
                                  target:
                                    null === (t = e.itemLink) || void 0 === t
                                      ? void 0
                                      : t.target,
                                  className: "text-xs sm:r-text-xs ".concat(
                                    l ? "hover:text-grey" : "hover:text-sand",
                                    " transition-all duration-300"
                                  ),
                                  children:
                                    null === (i = e.itemLink) || void 0 === i
                                      ? void 0
                                      : i.text,
                                },
                                e.uid
                              );
                            }),
                    }),
                    (0, T.jsx)(z.A, {
                      type: "button",
                      className: "hidden lg:flex ".concat(
                        l ? "" : "full-white"
                      ),
                      onClick: () => {
                        P.os.to(window, { duration: 1, scrollTo: { y: 0 } });
                      },
                      Icon: id,
                      children: i("BacktoTop"),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        iu = function (e) {
          var n, t, l, i, r, a;
          let { globals: s, entry: o } = e,
            d = (0, B.useRef)(),
            { currentSite: c } = s || {},
            { data: u } = (0, M.I)(l8, { variables: { siteId: c.siteId } });
          (0, U.E)(() => {
            if ((P.os.registerPlugin(O.ScrollTrigger), !d.current)) return;
            let e = P.os.matchMedia();
            return (
              e.add("(min-width: 768px)", () => {
                let e = P.os.fromTo(
                  d.current.querySelector(".inner-wrapper"),
                  { yPercent: -100 },
                  {
                    yPercent: 0,
                    ease: "none",
                    scrollTrigger: {
                      trigger: d.current,
                      start: "top bottom",
                      end: "bottom bottom",
                      scrub: !0,
                      invalidateOnRefresh: !0,
                      scroller: window.matchMedia("(hover: none)").matches
                        ? "body"
                        : "#smooth-wrapper",
                    },
                  }
                );
                return () => {
                  e.kill();
                };
              }),
              () => {
                e.revert();
              }
            );
          }, [d]);
          let m =
              (null == o ? void 0 : o.footerTitle) ||
              (null == u
                ? void 0
                : null === (n = u.footerSettings) || void 0 === n
                ? void 0
                : n.footerTitle),
            p = (
              null == o
                ? void 0
                : null === (t = o.footerButton) || void 0 === t
                ? void 0
                : t.href
            )
              ? null == o
                ? void 0
                : o.footerButton
              : null == u
              ? void 0
              : null === (l = u.footerSettings) || void 0 === l
              ? void 0
              : l.footerButton;
          return (0, T.jsx)("footer", {
            className: "overflow-hidden ".concat(
              (null == o ? void 0 : o.whiteFooter)
                ? "white-footer bg-white text-asphalt"
                : "dark-footer bg-forest text-white r-mt-[12.5]"
            ),
            ref: d,
            children: (0, T.jsxs)("div", {
              className: "md:h-screen inner-wrapper flex flex-col",
              children: [
                (0, T.jsx)("div", {
                  className: "inner container full md:h-[50vh] flex",
                  children: (0, T.jsx)(l7, {
                    title: m,
                    button: p,
                    dark: null == o ? void 0 : o.whiteFooter,
                  }),
                }),
                (0, T.jsxs)("div", {
                  className:
                    "inner container big flex flex-col lg:flex-row justify-between r-gap-10 r-mb-[6.8] flex-1 margin-bottom-footer-adjust",
                  children: [
                    (0, T.jsx)(l9, { menu: null == u ? void 0 : u.footerMenu }),
                    (0, T.jsx)(ie, {
                      addresses:
                        null == u
                          ? void 0
                          : null === (i = u.footerSettings) || void 0 === i
                          ? void 0
                          : i.addresses,
                      links:
                        null == u
                          ? void 0
                          : null === (r = u.footerSettings) || void 0 === r
                          ? void 0
                          : r.links,
                      dark: null == o ? void 0 : o.whiteFooter,
                    }),
                  ],
                }),
                (0, T.jsx)(ic, {
                  menu:
                    null == u
                      ? void 0
                      : null === (a = u.footerSettings) || void 0 === a
                      ? void 0
                      : a.socials,
                  globals: s,
                  dark: null == o ? void 0 : o.whiteFooter,
                }),
              ],
            }),
          });
        };
      function im() {
        let e = (0, $._)([
          '\n  query MainMenu(\n    $siteId: [QueryArgument]\n    $level: Int = 1\n    $navHandle: [String] = "mainMenu"\n  ) {\n    globalSet(handle: "menuSettings", siteId: $siteId) {\n      id\n      uid\n      siteId\n      ... on menuSettings_GlobalSet {\n        headerButton: button {\n          target\n          text\n          type\n          href: url\n          title\n        }\n      }\n    }\n    mainMenu: entries(level: $level, siteId: $siteId, section: $navHandle) {\n      title\n      uid\n      id\n      siteId\n      typeHandle\n      level\n      ... on mainMenu_default_Entry {\n        navigationLink {\n          target\n          text\n          title\n          type\n          href: url\n        }\n      }\n      ... on mainMenu_secondaryLink_Entry {\n        navigationLink {\n          target\n          text\n          title\n          type\n          href: url\n        }\n      }\n      sub: children {\n        uid\n        id\n        siteId\n        title\n        ... on mainMenu_default_Entry {\n          navigationLink {\n            target\n            text\n            title\n            type\n            href: url\n          }\n        }\n        ... on mainMenu_secondaryLink_Entry {\n          navigationLink {\n            target\n            text\n            title\n            type\n            href: url\n          }\n        }\n      }\n    }\n    blocks: globalSet(handle: "menuSettings", siteId: $siteId) {\n      id\n      uid\n      siteId\n      ... on menuSettings_GlobalSet {\n        menuBlocks {\n          ... on menuBlocks_menuBlock_BlockType {\n            id\n            uid\n            siteId\n            title: moduleTitle\n            button {\n              target\n              text\n              type\n              href: url\n              title\n            }\n          }\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (im = function () {
            return e;
          }),
          e
        );
      }
      let ip = (0, E.J1)(im()),
        ih = (0, Z.WQ)("ui")(
          (0, Z.PA)((e) => {
            var n, t, l, i, r;
            let { globals: a, ui: s } = e,
              o = (0, t$.y)(),
              d = (0, np.useRouter)(),
              [c, u] = (0, B.useState)([]),
              { currentSite: m } = a || {},
              { data: p } = (0, M.I)(ip, { variables: { siteId: m.siteId } });
            return (
              (0, B.useEffect)(() => {
                if (null == p ? void 0 : p.mainMenu) {
                  let e = () => {
                    let e = d.asPath.split("/"),
                      { locales: n } = lM,
                      t = e.filter((e) => "" != e && !n.includes(e)),
                      l = [];
                    if (0 === t.length) return null;
                    p.mainMenu.some(
                      (e) =>
                        !!t.every((n) => {
                          var t, l;
                          return null === (l = e.navigationLink) || void 0 === l
                            ? void 0
                            : null === (t = l.href) || void 0 === t
                            ? void 0
                            : t.includes(n);
                        }) && ((l = [e.uid]), !0)
                    ) ||
                      p.mainMenu.some((e) => {
                        var n, i, r;
                        return (
                          null !== (i = e.navigationLink) &&
                          void 0 !== i &&
                          null !== (n = i.href) &&
                          void 0 !== n &&
                          !!n.includes(t[0]) &&
                          ((null === (r = e.sub) || void 0 === r
                            ? void 0
                            : r.length) > 0
                            ? e.sub.some((n) => {
                                var i, r;
                                return (
                                  null !== (r = n.navigationLink) &&
                                  void 0 !== r &&
                                  null !== (i = r.href) &&
                                  void 0 !== i &&
                                  !!i.includes(t[1]) &&
                                  ((l = [e.uid, n.uid]), !0)
                                );
                              })
                            : ((l = [e.uid]), !0))
                        );
                      }),
                      u(l);
                  };
                  return (
                    e(),
                    d.events.on("routeChangeComplete", e),
                    () => {
                      d.events.off("routeChangeComplete", e);
                    }
                  );
                }
              }, [p, d]),
              (0, T.jsxs)(eW.P.nav, {
                className:
                  "main-menu fixed top-0 left-0 z-[99] w-full h-full bg-forest flex",
                initial: "closed",
                animate: (null == s ? void 0 : s.menuState) ? "open" : "closed",
                variants: {
                  open: {
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    },
                  },
                  closed: {
                    x: "-100%",
                    transition: {
                      duration: 0.5,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    },
                  },
                },
                children: [
                  (0, T.jsxs)(eW.P.div, {
                    className:
                      "left h-[100svh] md:h-none flex-1 bg-sand-light pt-[8vh] flex flex-col items-start",
                    initial: "closed",
                    animate: (null == s ? void 0 : s.menuState)
                      ? "open"
                      : "closed",
                    variants: {
                      open: {
                        x: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.2,
                          ease: [0.6, 0.05, -0.01, 0.9],
                        },
                      },
                      closed: {
                        x: "-50%",
                        transition: {
                          duration: 0.5,
                          ease: [0.6, 0.05, -0.01, 0.9],
                        },
                      },
                    },
                    children: [
                      (0, T.jsx)("div", {
                        className:
                          "absolute left-0 bottom-0 r-mb-16 w-[calc(100%-20px)] h-16 z-[60] pointer-events-none",
                        style: {
                          background:
                            "linear-gradient(180deg, rgba(249, 243, 235, 0) 0%, rgba(249, 243, 235, 1) 100%)",
                        },
                      }),
                      (0, T.jsx)("div", {
                        className:
                          "absolute left-0 top-0 r-mt-[5.375] w-[calc(100%-20px)] h-16 z-[60] pointer-events-none",
                        style: {
                          background:
                            "linear-gradient(0deg, rgba(249, 243, 235, 0) 0%, rgba(249, 243, 235, 1) 100%)",
                        },
                      }),
                      (0, T.jsx)("div", {
                        className:
                          "overflow-auto max-h-full w-full flex flex-col items-start sm:py-16",
                        children: (0, T.jsxs)("div", {
                          className:
                            "inner w-full lg:w-auto px-8 md:r-pl-12 xl:r-pl-[7] py-16 sm:py-0 transition-color duration-300 ".concat(
                              (null == c ? void 0 : c.length) > 0
                                ? "xl:text-brown"
                                : "text-asphalt hover:xl:text-brown",
                              " group flex flex-col items-stretch gap-4"
                            ),
                          children: [
                            null == p
                              ? void 0
                              : null === (n = p.mainMenu) || void 0 === n
                              ? void 0
                              : n
                                  .filter((e) => "default" === e.typeHandle)
                                  .map((e) => {
                                    var n, t;
                                    let { navigationLink: l } = e || {};
                                    return (0, T.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "flex items-center flex-wrap group/item relative justify-between ".concat(
                                            c.includes(e.uid)
                                              ? "text-asphalt"
                                              : "text-current"
                                          ),
                                        children: [
                                          (0, T.jsx)(e8.A, {
                                            href: l.href,
                                            target: l.target,
                                            title: l.title,
                                            className:
                                              "r-text-3xl text-current group-hover/item:text-asphalt transition-color duration-300",
                                            onClick: (n) => {
                                              var t;
                                              (null == e
                                                ? void 0
                                                : null === (t = e.sub) ||
                                                  void 0 === t
                                                ? void 0
                                                : t.length) > 0
                                                ? (n.preventDefault(),
                                                  u((n) =>
                                                    n.includes(e.uid)
                                                      ? []
                                                      : [e.uid]
                                                  ))
                                                : (s.setMenuState(!1),
                                                  u([e.uid])),
                                                o({
                                                  event: "menu_clicked",
                                                  menu: e.title,
                                                  menulocation: "Main menu",
                                                });
                                            },
                                            children: e.title,
                                          }),
                                          (null == e
                                            ? void 0
                                            : null === (n = e.sub) ||
                                              void 0 === n
                                            ? void 0
                                            : n.length) > 0
                                            ? (0, T.jsxs)("button", {
                                                className:
                                                  "ml-3 r-w-4 r-h-4 relative mt-1 ".concat(
                                                    c.includes(e.uid)
                                                      ? "opacity-100"
                                                      : "opacity-100 xl:opacity-0",
                                                    " group-hover/item:opacity-100 transition-opacity"
                                                  ),
                                                onClick: () => {
                                                  u((n) =>
                                                    n.includes(e.uid)
                                                      ? []
                                                      : [e.uid]
                                                  );
                                                },
                                                children: [
                                                  (0, T.jsx)("span", {
                                                    className:
                                                      "block w-[2px] bg-current group-hover/item:bg-asphalt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ".concat(
                                                        c.includes(e.uid)
                                                          ? "h-0"
                                                          : "r-h-4 xl:h-0 group-hover/item:r-h-4"
                                                      ),
                                                  }),
                                                  (0, T.jsx)("span", {
                                                    className: "block ".concat(
                                                      c.includes(e.uid)
                                                        ? "r-w-4"
                                                        : "r-w-4 xl:w-0 group-hover/item:r-w-4",
                                                      " h-[2px] bg-current group-hover/item:bg-asphalt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                                                    ),
                                                  }),
                                                ],
                                              })
                                            : (0, T.jsx)("span", {
                                                className:
                                                  "block overflow-hidden ml-3",
                                                children: (0, T.jsx)(nS.A, {
                                                  className:
                                                    "r-w-4 stroke-asphalt stroke-2 xl:-translate-x-full group-hover/item:-translate-x-0 transition-transform duration-300 ".concat(
                                                      "_blank" === l.target
                                                        ? " -rotate-45"
                                                        : ""
                                                    ),
                                                }),
                                              }),
                                          (0, T.jsx)(eW.P.div, {
                                            className:
                                              "sub-menu overflow-hidden w-full lg:w-auto lg:absolute top-0 lg:left-full z-50 flex flex-col items-start ml-10 lg:r-ml-20 gap-2",
                                            initial: "hidden",
                                            animate: c.includes(e.uid)
                                              ? "visible"
                                              : "hidden",
                                            variants: {
                                              visible: {
                                                height: "auto",
                                                transition: {
                                                  staggerChildren: 0.05,
                                                  delayChildren: 0.2,
                                                },
                                              },
                                              hidden: {
                                                height: 0,
                                                transition: {
                                                  staggerChildren: 0.05,
                                                  staggerDirection: -1,
                                                },
                                              },
                                            },
                                            children:
                                              null == e
                                                ? void 0
                                                : null === (t = e.sub) ||
                                                  void 0 === t
                                                ? void 0
                                                : t.map((n) => {
                                                    let { navigationLink: t } =
                                                      n || {};
                                                    return (0, T.jsx)(
                                                      eW.P.div,
                                                      {
                                                        variants: {
                                                          visible: {
                                                            opacity: 1,
                                                            x: 0,
                                                          },
                                                          hidden: {
                                                            opacity: 0,
                                                            x: -50,
                                                          },
                                                        },
                                                        className:
                                                          "last:pb-4 first:pt-4 lg:!py-0",
                                                        children: (0, T.jsxs)(
                                                          e8.A,
                                                          {
                                                            href: t.href,
                                                            target: t.target,
                                                            title: t.title,
                                                            className:
                                                              "inline-block secondary-menu-item whitespace-nowrap r-text-lg group relative group/link overflow-hidden hover:pl-6 transition-all duration-300 ".concat(
                                                                c.includes(
                                                                  n.uid
                                                                )
                                                                  ? " pl-6"
                                                                  : ""
                                                              ),
                                                            onClick: () => {
                                                              s.setMenuState(
                                                                !1
                                                              ),
                                                                u([
                                                                  e.uid,
                                                                  n.uid,
                                                                ]),
                                                                o({
                                                                  event:
                                                                    "menu_clicked",
                                                                  menu: n.title,
                                                                  menulocation:
                                                                    "Main menu",
                                                                });
                                                            },
                                                            children: [
                                                              (0, T.jsx)(nS.A, {
                                                                className:
                                                                  "w-4 stroke-current absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full group-hover/link:-translate-x-0 transition-transform duration-300 ".concat(
                                                                    c.includes(
                                                                      n.uid
                                                                    )
                                                                      ? "translate-x-0"
                                                                      : ""
                                                                  ),
                                                              }),
                                                              n.title,
                                                            ],
                                                          }
                                                        ),
                                                      },
                                                      n.uid
                                                    );
                                                  }),
                                          }),
                                        ],
                                      },
                                      e.uid
                                    );
                                  }),
                            null == p
                              ? void 0
                              : null === (t = p.mainMenu) || void 0 === t
                              ? void 0
                              : t
                                  .filter(
                                    (e) => "secondaryLink" === e.typeHandle
                                  )
                                  .map((e, n) => {
                                    let { navigationLink: t } = e || {};
                                    return (0, T.jsx)(
                                      e8.A,
                                      {
                                        href: t.href,
                                        className: ""
                                          .concat(0 === n ? "r-mt-8" : "", " ")
                                          .concat(
                                            c.includes(e.uid)
                                              ? "text-asphalt"
                                              : "",
                                            " text-sm sm:r-text-xl  transition-color duration-300 hover:text-asphalt"
                                          ),
                                        onClick: () => {
                                          s.setMenuState(!1),
                                            u([e.uid]),
                                            o({
                                              event: "menu_clicked",
                                              menu: e.title,
                                              menulocation: "Main menu",
                                            });
                                        },
                                        children: e.title,
                                      },
                                      e.uid
                                    );
                                  }),
                          ],
                        }),
                      }),
                      (0, T.jsx)("div", {
                        className:
                          "menu-footer mt-auto px-4 md:pr-0 md:r-pb-12 md:r-pl-12 xl:r-pl-[7] sticky bottom-0 w-full md:w-auto z-[70]",
                        children: (0, T.jsxs)("div", {
                          className:
                            "bg-white md:bg-transparent rounded-[6.25rem] md:rounded-none flex md:relative items-center justify-between pl-6 md:pl-0 pr-2 md:pr-0 py-2 md:py-0 w-full md:w-auto",
                          children: [
                            (0, T.jsx)(io, { globals: a, dark: !0 }),
                            (0, T.jsx)(e0.A, {
                              linkProps:
                                null == p
                                  ? void 0
                                  : null === (l = p.globalSet) || void 0 === l
                                  ? void 0
                                  : l.headerButton,
                              className: "md:hidden grey small",
                              Icon: nq.A,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, T.jsx)("div", {
                    className:
                      "right md:r-max-w-[24] xl:r-max-w-[30] w-full pt-[8vh] hidden md:block relative z-20",
                    children: (0, T.jsx)("div", {
                      className:
                        "inner md:r-pl-12 xl:r-pl-[7] py-16 text-white flex flex-col r-gap-14 r-max-w-[22] w-full",
                      children:
                        null == p
                          ? void 0
                          : null === (r = p.blocks) || void 0 === r
                          ? void 0
                          : null === (i = r.menuBlocks) || void 0 === i
                          ? void 0
                          : i.map((e) => {
                              let { title: n, button: t } = e || {};
                              return (0, T.jsxs)(
                                "div",
                                {
                                  className: "block",
                                  children: [
                                    (0, T.jsx)("p", {
                                      className: "r-text-2xl r-mb-6",
                                      children: n,
                                    }),
                                    (0, T.jsx)(z.A, {
                                      linkProps: t,
                                      className: "white",
                                      onClick: () => {
                                        s.setMenuState(!1),
                                          o({
                                            event: "menu_clicked",
                                            menu: t.text,
                                            menulocation: "Main menu sidebar",
                                          });
                                      },
                                    }),
                                  ],
                                },
                                e.uid
                              );
                            }),
                    }),
                  }),
                ],
              })
            );
          })
        ),
        ig = X()(() => t.e(9195).then(t.bind(t, 49195)), {
          loadableGenerated: { webpack: () => [49195] },
          ssr: !1,
        }),
        ix = X()(
          () =>
            Promise.all([t.e(7938), t.e(7491), t.e(6181)]).then(
              t.bind(t, 96181)
            ),
          { loadableGenerated: { webpack: () => [96181] }, ssr: !1 }
        ),
        iv = X()(() => t.e(1582).then(t.bind(t, 51582)), {
          loadableGenerated: { webpack: () => [51582] },
          ssr: !1,
        }),
        iw = X()(
          () =>
            Promise.all([
              t.e(3139),
              t.e(7388),
              t.e(7156),
              t.e(801),
              t.e(7667),
            ]).then(t.bind(t, 90048)),
          { loadableGenerated: { webpack: () => [90048] }, ssr: !1 }
        ),
        iy = X()(
          () =>
            Promise.all([t.e(7938), t.e(2505), t.e(8514), t.e(8088)]).then(
              t.bind(t, 28088)
            ),
          { loadableGenerated: { webpack: () => [28088] }, ssr: !1 }
        ),
        ib = X()(
          () => Promise.all([t.e(7938), t.e(6323)]).then(t.bind(t, 56323)),
          { loadableGenerated: { webpack: () => [56323] }, ssr: !1 }
        ),
        iA = X()(() => t.e(4624).then(t.bind(t, 84624)), {
          loadableGenerated: { webpack: () => [84624] },
          ssr: !1,
        }),
        ij = (e) => {
          let { children: n, globals: t, entry: l } = e;
          return (null == t ? void 0 : t.currentSite)
            ? (0, T.jsxs)(T.Fragment, {
                children: [
                  (0, T.jsx)(ih, { globals: t }),
                  (0, T.jsxs)("div", {
                    className:
                      "flex flex-col text-body body-text max-w-[100vw]",
                    children: [
                      (0, T.jsx)(lj, { globals: t }),
                      (0, T.jsx)(l3, { globals: t }),
                      (0, T.jsx)("main", {
                        id: "smooth-wrapper",
                        children: (0, T.jsxs)("div", {
                          id: "smooth-content",
                          className: "min-h-screen",
                          children: [
                            (0, T.jsx)("div", {
                              className: "min-h-screen",
                              children: n,
                            }),
                            (0, T.jsx)(iu, { globals: t, entry: l }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, T.jsx)(ix, {}),
                  (0, T.jsx)(iv, {}),
                  (0, T.jsx)(ib, {}),
                  (0, T.jsx)(iw, { globals: t }),
                  (0, T.jsx)(iy, {}),
                  (0, T.jsx)(ig, {}),
                  (0, T.jsx)(iA, {}),
                ],
              })
            : (0, T.jsx)("h1", { children: "Something went wrong" });
        },
        iI = (e) => e.charAt(0).toUpperCase() + e.slice(1);
      var ik = !0;
      let iN = (e) => {
        var n;
        let { data: t, currentSite: l, currentRoute: i, routeProps: r } = e,
          a = (0, B.useRef)(!0),
          s = (0, t$.y)(),
          o = (0, np.useRouter)(),
          [d, c] = (0, B.useState)(!1),
          { entry: u } = t;
        (0, B.useEffect)(() => {
          a.current && (s({ event: "page_view" }), (a.current = !1));
          let e = () => {
              c(!1);
            },
            n = (e, n) => {
              let { shallow: t } = n;
              t || c(!0), s({ event: "page_view" });
            };
          return (
            o.events.on("routeChangeStart", n),
            o.events.on("routeChangeComplete", e),
            () => {
              o.events.off("routeChangeStart", n),
                o.events.off("routeChangeComplete", e);
            }
          );
        }, [o, s]);
        let m = { currentSite: l, currentRoute: i, routeProps: r },
          { sectionHandle: p, typeHandle: h } = u || {},
          g = null === (n = _[p]) || void 0 === n ? void 0 : n[h];
        return g
          ? (0, T.jsxs)(T.Fragment, {
              children: [
                (0, T.jsx)(ij, {
                  globals: m,
                  entry: {
                    whiteFooter: null == u ? void 0 : u.whiteFooter,
                    footerTitle: null == u ? void 0 : u.footerTitle,
                    footerButton: null == u ? void 0 : u.footerButton,
                  },
                  children: (0, T.jsx)(nh.N, {
                    mode: "wait",
                    initial: !1,
                    onExitComplete: () => {
                      let e = lo().get();
                      e && e.scrollTop(0),
                        window.scrollTo(0, 0),
                        document
                          .querySelector(".top-bar")
                          .classList.remove("-translate-y-full"),
                        setTimeout(() => {
                          Q().refresh();
                        }, 1e3);
                    },
                    children: (0, T.jsx)(
                      eW.P.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: {
                          duration: 0.6,
                          ease: [0.43, 0.13, 0.23, 0.96],
                        },
                        children: (0, T.jsxs)(nh.N, {
                          children: [
                            (0, T.jsx)(g, { data: { ...t }, globals: m }),
                            ";",
                          ],
                        }),
                      },
                      null == u ? void 0 : u.uid
                    ),
                  }),
                }),
                (0, T.jsx)(nh.N, {
                  mode: "wait",
                  children:
                    d &&
                    (0, T.jsx)(eW.P.div, {
                      initial: "hidden",
                      animate: "visible",
                      exit: "hidden",
                      variants: {
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      },
                      transition: { duration: 0.3, delay: 0.3 },
                      className:
                        "fixed top-0 left-0 w-full h-screen bg-white bg-opacity-70 flex justify-center items-center z-[9999]",
                      children: (0, T.jsx)(nT.A, { type: "lottie" }),
                    }),
                }),
              ],
            })
          : (0, T.jsx)("div", {
              className: "w-screen h-screen flex items-center justify-center",
              children: (0, T.jsxs)("div", {
                className: "container",
                children: [
                  "you have to create a new Section/EntryType components in components/Sections/",
                  iI(p),
                  "/Types/",
                  iI(h),
                  ". Also you have to reference it in components/Sections/index.js , components/Sections/",
                  iI(p),
                  "/index.js",
                ],
              }),
            });
      };
    },
    22360: (e, n, t) => {
      "use strict";
      t.d(n, { y: () => i });
      var l = t(96540);
      let i = () =>
        (0, l.useCallback)((e) => {
          var n, t, l, i, r;
          window.dataLayer = window.dataLayer || [];
          let a =
            null === (r = window) || void 0 === r
              ? void 0
              : null === (i = r.__NEXT_DATA__) || void 0 === i
              ? void 0
              : null === (l = i.props) || void 0 === l
              ? void 0
              : null === (t = l.pageProps) || void 0 === t
              ? void 0
              : null === (n = t.currentSite) || void 0 === n
              ? void 0
              : n.name;
          window.dataLayer.push({ country: a, ...e });
        }, []);
    },
  },
  (e) => {
    var n = (n) => e((e.s = n));
    e.O(0, [6834, 480, 1231, 5027, 636, 6593, 8792], () => n(97792)),
      (_N_E = e.O());
  },
]);