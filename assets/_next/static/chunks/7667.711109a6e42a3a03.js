"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7667],
  {
    90048: (e, t, n) => {
      n.r(t), n.d(t, { default: () => en });
      var l,
        i = n(74848),
        s = n(96540),
        a = n(67667),
        r = n(89160),
        o = n(86715),
        d = n(35083),
        c = n.n(d),
        u = n(82184),
        h = n.n(u),
        p = n(32578),
        x = n(1723),
        m = n(84577),
        g = n(2135);
      function f() {
        let e = (0, m._)([
          '\n  query GetInstallers(\n    $lat: Float = 59.9139\n    $lng: Float = 10.7522\n    $radius: Float = 100\n  ) {\n    entries(\n      section: "installers"\n      type: "default"\n      map: { radius: $radius, coordinate: { lat: $lat, lng: $lng } }\n      siteId: 1\n    ) {\n      id\n      uid\n      siteId\n      title\n      ... on installers_default_Entry {\n        map {\n          address\n          lat\n          lng\n          parts {\n            address\n            city\n            country\n            postcode\n          }\n        }\n        url: plainText\n      }\n    }\n  }\n',
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        let e = (0, m._)([
          '\n  query GetWholesalers(\n    $region: [QueryArgument]\n    $chargers: [QueryArgument]\n    $siteId: [QueryArgument]\n  ) {\n    entries(\n      section: "wholesaler"\n      type: "default"\n      siteId: 1\n      relatedTo: $region\n      chargers2: $chargers\n    ) {\n      id\n      uid\n      siteId\n      title\n      ... on wholesaler_default_Entry {\n        button {\n          target\n          text\n          type\n          href: url\n          title\n        }\n        region: siteSelector(siteId: $siteId) {\n          id\n          uid\n          siteId\n          title\n        }\n        cats: wholesalerCategory(siteId: $siteId) {\n          id\n          uid\n          siteId\n          title\n        }\n        tags: wholesalerTags(siteId: $siteId) {\n          id\n          uid\n          siteId\n          title\n        }\n        image {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          url(width: 100)\n          primaryUrl: url\n          alt\n          ... on uploads_Asset {\n            altTranslation: plainText2\n          }\n        }\n        chargers: chargers2\n      }\n    }\n  }\n',
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function y() {
        let e = (0, m._)([
          '\n  query GetZaptec($siteId: [QueryArgument]) {\n    getZaptec: globalSet(handle: "getZaptec", siteId: $siteId) {\n      id\n      uid\n      siteId\n      ... on getZaptec_GlobalSet {\n        title: moduleTitle\n        questionTitle: plainText\n        questions {\n          ... on questions_question_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            question\n            product\n            productLabels: product(label: true)\n          }\n        }\n        resultsPretitle: plainText2\n        searchTitle: plainText5\n        wholesalersNote: plainText4\n        mapTitle: plainText6\n        exceptions {\n          ... on exceptions_exception_BlockType {\n            id\n            uid\n            siteId\n            typeHandle\n            title: moduleTitle\n            showMap: lightswitch\n            siteSelector {\n              id\n              uid\n              siteId\n            }\n            text\n            button {\n              target\n              text\n              type\n              href: url\n              title\n            }\n            contactRows: children {\n              ... on exceptions_contactRow_BlockType {\n                id\n                uid\n                siteId\n                typeHandle\n                title: moduleTitle\n                text\n                links {\n                  ... on links_link_BlockType {\n                    id\n                    uid\n                    siteId\n                    typeHandle\n\n                    button: itemLink {\n                      target\n                      text\n                      type\n                      href: url\n                      title\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    regions: categories(group: "regions", siteId: $siteId) {\n      id\n      uid\n      siteId\n      title\n      ... on regions_Category {\n        localized {\n          id\n          uid\n          siteId\n          title\n        }\n        flag: image {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          url(width: 100)\n          primaryUrl: url\n          alt\n          ... on uploads_Asset {\n            altTranslation: plainText2\n          }\n        }\n        hideMap: nonTranslatableLightswitch\n        map {\n          lat\n          lng\n          zoom\n        }\n        hasSites {\n          ... on hasSites_selectSite_BlockType {\n            id\n            uid\n            siteId\n            hasSite {\n              target\n              title\n              url\n            }\n          }\n        }\n      }\n    }\n    globalSet(handle: "settings") {\n      id\n      uid\n      siteId\n      ... on settings_GlobalSet {\n        utm: simpleTable {\n          name\n          value\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      (0, g.J1)(f());
      let w = (0, g.J1)(v()),
        j = (0, g.J1)(y());
      var b = n(61769),
        N = n(19602),
        k = n(35341),
        I = n(78230),
        S = n(62730),
        _ = n(58640),
        C = n(87612),
        T = n.n(C),
        M = n(210),
        A = n(41272),
        z = n(52046),
        L = n(87137),
        E = n(60598),
        R = n(52818),
        $ = n(72673),
        q = n(22360);
      let B = (e) => {
          let { children: t, button: n, logo: l } = e,
            s = (0, q.y)();
          return (null == n ? void 0 : n.href)
            ? (0, i.jsx)($.A, {
                href: n.href,
                target: n.target,
                rel: "_blank" === n.target ? "noopener noreferrer" : "",
                title: n.text,
                className:
                  "flex flex-col items-center justify-center r-gap-4 group",
                onClick: () => {
                  s({
                    event: "get_zaptec_step4",
                    wholesaler: l.title,
                    option: "wholesaler",
                  });
                },
                children: t,
              })
            : (0, i.jsx)("div", {
                className:
                  "flex flex-col items-center justify-center r-gap-4 group",
                children: t,
              });
        },
        P = (e) => {
          let { title: t, logos: n } = e,
            l = (0, p.useTranslations)(""),
            [o, d] = (0, s.useState)(null),
            c = (0, s.useMemo)(
              () =>
                (null == n ? void 0 : n.length) < 1
                  ? null
                  : n.entries.reduce((e, t) => {
                      var n;
                      return (
                        (null === (n = t.cats) || void 0 === n
                          ? void 0
                          : n.length) > 0 &&
                          t.cats.forEach((t) => {
                            e.some((e) => e.uid === t.uid) || e.push(t);
                          }),
                        e
                      );
                    }, []),
              [n]
            );
          return (null == n ? void 0 : n.length) < 1
            ? (0, i.jsx)("div", {
                className: "flex items-center justify-center",
                children: (0, i.jsx)(z.A, { type: "lottie" }),
              })
            : (0, i.jsxs)("div", {
                className: "logos",
                children: [
                  t &&
                    (0, i.jsx)("h2", {
                      className: "h2-text-alt text-asphalt r-mb-10",
                      children: (0, i.jsx)(R.A, { children: t }),
                    }),
                  (null == c ? void 0 : c.length) > 1 &&
                    (0, i.jsxs)("div", {
                      className: "flex items-center gap-4 r-mb-10 flex-wrap",
                      children: [
                        (0, i.jsx)("button", {
                          className: "r-text-sm ".concat(
                            null === o ? "text-asphalt" : "text-grey"
                          ),
                          onClick: () => d(null),
                          children: l("all"),
                        }),
                        c.map((e) =>
                          (0, i.jsx)(
                            "button",
                            {
                              className: "r-text-sm ".concat(
                                (null == o ? void 0 : o.uid) === e.uid
                                  ? "text-asphalt"
                                  : "text-grey"
                              ),
                              onClick: () => d(e),
                              children: e.title,
                            },
                            e.uid
                          )
                        ),
                      ],
                    }),
                  (0, i.jsx)("div", {
                    className:
                      "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 w-full gap-4 md:r-gap-8 2xl:r-gap-[3.25]",
                    children: (0, i.jsx)(a.N, {
                      children:
                        null == n
                          ? void 0
                          : n.entries
                              .filter((e) => {
                                if (o) {
                                  var t;
                                  return null === (t = e.cats) || void 0 === t
                                    ? void 0
                                    : t.some((e) => e.uid === o.uid);
                                }
                                return !0;
                              })
                              .map((e) => {
                                var t;
                                return (0, i.jsx)(
                                  r.P.div,
                                  {
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: { opacity: 0 },
                                    transition: { duration: 0.5 },
                                    layout: !0,
                                    children: (0, i.jsxs)(B, {
                                      button: e.button,
                                      logo: e,
                                      children: [
                                        (0, i.jsx)("div", {
                                          className:
                                            "flex items-center justify-center bg-grey-bg px-8 py-2 sm:r-p-8 h-24 sm:r-h-[10.5] w-full",
                                          children: (0, i.jsx)(E.A, {
                                            className:
                                              "r-max-w-[10.5] max-h-full w-full filter grayscale transition-all duration-500 group-hover:grayscale-0 object-contain",
                                            asset: e.image,
                                            width: 240,
                                            height: 240,
                                            sizes:
                                              "(min-width: 1024px) 240px, 100vw",
                                          }),
                                        }),
                                        (null === (t = e.button) || void 0 === t
                                          ? void 0
                                          : t.href) &&
                                          (0, i.jsxs)("svg", {
                                            width: "25",
                                            height: "25",
                                            viewBox: "0 0 25 25",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className:
                                              "opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block",
                                            children: [
                                              (0, i.jsx)("rect", {
                                                x: "0.296875",
                                                y: "0.5",
                                                width: "24",
                                                height: "24",
                                                rx: "12",
                                                fill: "#222222",
                                              }),
                                              (0, i.jsx)("path", {
                                                d: "M8.05514 16.7426L16.5404 8.25736M16.5404 8.25736H8.05514M16.5404 8.25736V16.7426",
                                                stroke: "white",
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  },
                                  e.uid
                                );
                              }),
                    }),
                  }),
                ],
              });
        };
      var Z = n(43910);
      function F() {
        return (F = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var l in n)
                  Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var G = (0, s.forwardRef)(function (e, t) {
        return s.createElement(
          "svg",
          F(
            {
              viewBox: "0 0 15 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
            },
            e
          ),
          l ||
            (l = s.createElement("path", {
              d: "M6.598 4v1h1V4h-1Zm0 2.5V11h1V6.5h-1Zm7 1a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z",
              stroke: "#767572",
            }))
        );
      });
      let O = {
          1: "60.472024, 8.468946",
          12: "60.472024, 8.468946",
          2: "60.128161, 18.643501",
          3: "56.26392, 9.501785",
          4: "51.165691, 10.451526",
          5: "55.378051, -3.435973",
          6: "46.603354, 1.888334",
          7: "52.132633, 5.291266",
          8: "50.503887, 4.469936",
          9: "50.503887, 4.469936",
          10: "46.818188, 8.227512",
          11: "46.818188, 8.227512",
        },
        H = ["places", "maps"],
        D = (e) =>
          fetch(e).then(async (e) => {
            let t = await e.json();
            return (null == t ? void 0 : t.features) || [];
          }),
        U = (e) => {
          var t, n, l, o;
          let {
              module: d,
              currentSite: c,
              region: u,
              charger: h = null,
              utm: m,
              exception: g = null,
            } = e,
            [f, v] = (0, s.useState)([]),
            [y, j] = (0, s.useState)([]),
            [C, E] = (0, s.useState)(!0),
            R = (0, p.useTranslations)(""),
            $ = (0, s.useRef)(null),
            q = (0, N.U)("only screen and (max-width: 767px)"),
            [B, F] = (0, s.useState)(0),
            [U, Q] = (0, s.useState)([60.472024, 8.468946]),
            [V, J] = (0, s.useState)(null),
            [W, K] = (0, s.useState)(null),
            [X, Y] = (0, s.useState)(null);
          (0, s.useEffect)(() => {
            var e;
            let t =
              null === (e = O[c.siteId]) || void 0 === e
                ? void 0
                : e.split(", ");
            if (
              ((null == u ? void 0 : u.map) && (t = [u.map.lat, u.map.lng]),
              !((null == t ? void 0 : t.length) < 2) && (Q(t), X))
            ) {
              X.current.setCenter(new window.google.maps.LatLng(t[0], t[1])),
                X.current.setZoom(u.map.zoom || 6);
              let e = X.current.getBounds(),
                n = e.getNorthEast(),
                l = e.getSouthWest();
              K(
                (0, I.getDistance)(
                  { latitude: n.lat(), longitude: n.lng() },
                  { latitude: l.lat(), longitude: l.lng() }
                ) / 2e3
              );
            }
          }, [c, u, X]);
          let { data: ee } = (0, S.Ay)(
            "".concat("https://cms.zaptec.com", "/actions/common/installers"),
            D,
            { revalidateOnFocus: !1, revalidateOnReconnect: !1 }
          );
          (0, s.useEffect)(() => {
            var e;
            if (!ee) return;
            if ((E(!1), !u)) return ee;
            let t =
              (null === (e = u.localized.find((e) => 1 === e.siteId)) ||
              void 0 === e
                ? void 0
                : e.title) || u.title;
            ((null == t ? void 0 : t.slice(-1)) === " " ||
              (null == t ? void 0 : t.slice(-1)) === "s") &&
              (t = t.slice(0, -1)),
              j(
                T()(ee || {}, (e) => {
                  var n, l, i, s;
                  return !(
                    !e.properties.address.includes(t) ||
                    !(null === (l = e.geometry) || void 0 === l
                      ? void 0
                      : null === (n = l.coordinates) || void 0 === n
                      ? void 0
                      : n.length) ||
                    (null === (s = e.geometry) || void 0 === s
                      ? void 0
                      : null === (i = s.coordinates) || void 0 === i
                      ? void 0
                      : i.some((e) => !e))
                  );
                })
              );
          }, [u, ee]),
            (0, s.useEffect)(() => {
              if (
                (null == y || y.length,
                !W || (null == U ? void 0 : U.length) === 0)
              ) {
                v(y);
                return;
              }
              v(
                y.filter(
                  (e) =>
                    (0, I.getDistance)(
                      {
                        latitude: parseFloat(U[0]),
                        longitude: parseFloat(U[1]),
                      },
                      {
                        latitude: e.geometry.coordinates[1],
                        longitude: e.geometry.coordinates[0],
                      }
                    ) <=
                    1e3 * W
                )
              );
            }, [W, U, y]);
          let { loading: et, data: en } = (0, x.I)(w, {
            variables: { region: u.id, chargers: h, siteId: c.siteId },
          });
          return (0, i.jsxs)("div", {
            className:
              "search-wrapper flex flex-col h-screen overflow-auto no-scrollbar touch-pan-y overscroll-contain ".concat(
                g ? "pb-4 sm:r-pb-20 pt-20 sm:r-pt-40" : "pt-20 pb-4 sm:r-py-20"
              ),
            children: [
              g ? (0, i.jsx)(_.A, { exception: g }) : null,
              (d.searchTitle ||
                (null == en
                  ? void 0
                  : null === (t = en.entries) || void 0 === t
                  ? void 0
                  : t.length) > 0 ||
                !u.hideMap) &&
                (!g || (null == g ? void 0 : g.showMap)) &&
                (0, i.jsxs)("div", {
                  className: "top mb-6 lg:r-mb-[3.5]",
                  children: [
                    d.searchTitle &&
                      (null == en
                        ? void 0
                        : null === (n = en.entries) || void 0 === n
                        ? void 0
                        : n.length) > 0 &&
                      !u.hideMap &&
                      (0, i.jsx)("h2", {
                        className:
                          "h3-text text-asphalt mb-4 lg:r-mb-8 r-max-w-[36] w-full mx-auto text-center hidden sm:block",
                        children: d.searchTitle,
                      }),
                    et
                      ? (0, i.jsx)("div", {
                          className: "flex items-center justify-center",
                          children: (0, i.jsx)(z.A, { type: "lottie" }),
                        })
                      : (null == en
                          ? void 0
                          : null === (l = en.entries) || void 0 === l
                          ? void 0
                          : l.length) > 0 &&
                        !u.hideMap &&
                        (0, i.jsx)("div", {
                          className: "flex items-center justify-center gap-3",
                          children: [
                            { uid: "logos", title: R("wholesale") },
                            { uid: "map", title: R("byInstaller") },
                          ].map((e, t) =>
                            (0, i.jsxs)(
                              "button",
                              {
                                type: "button",
                                onClick: () => F(t),
                                className:
                                  "text-sm text-left px-6 h-[3.25rem] inline-flex items-center rounded-button transition-colors duration-300  bg-white border border-forest overflow-hidden isolate relative ".concat(
                                    B === t ? "text-white" : "text-forest"
                                  ),
                                children: [
                                  e.title,
                                  (0, i.jsx)(r.P.div, {
                                    className:
                                      "absolute left-0 top-0 w-full h-full bg-forest rounded-button -z-10",
                                    initial: { x: B > t ? "-100%" : "100%" },
                                    animate: {
                                      x: B === t ? 0 : B > t ? "100%" : "-100%",
                                    },
                                  }),
                                ],
                              },
                              e.uid
                            )
                          ),
                        }),
                  ],
                }),
              (0, i.jsx)(a.N, {
                mode: "wait",
                children: (0, i.jsx)(
                  r.P.div,
                  {
                    className:
                      "search-content w-full flex-1 flex min-h-[25rem]",
                    initial: { opacity: 0, x: -100 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: 100 },
                    children:
                      (null == en
                        ? void 0
                        : null === (o = en.entries) || void 0 === o
                        ? void 0
                        : o.length) > 0 && 0 === B
                        ? (0, i.jsx)("div", {
                            className:
                              "h-full w-full overflow-auto relative no-scrollbar",
                            children: (0, i.jsxs)("div", {
                              className:
                                "flex r-gap-10 flex-col absolute left-0 top-0 w-full h-auto",
                              children: [
                                (0, i.jsx)(P, { logos: en }),
                                d.wholesalersNote &&
                                  (0, i.jsxs)("div", {
                                    className:
                                      "flex items-start text-left sm:text-center w-full text-grey r-text-sm gap-2 sm:justify-center",
                                    children: [
                                      (0, i.jsx)(G, {
                                        className: "w-4 mt-[0.33em]",
                                      }),
                                      d.wholesalersNote,
                                    ],
                                  }),
                              ],
                            }),
                          })
                        : !et &&
                          !u.hideMap &&
                          (0, i.jsx)(b.BH, {
                            googleMapsApiKey:
                              "AIzaSyAPkXHjDMybLJiy8Q3j3GuB9Gyhe8vfOaU",
                            libraries: H,
                            children: (0, i.jsxs)("div", {
                              className:
                                "flex flex-col lg:flex-row gap-3 h-full w-full",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "lg:r-max-w-[28] w-full relative",
                                  children: (0, i.jsxs)("div", {
                                    className:
                                      "lg:absolute lg:left-0 lg:top-0 w-full flex flex-col h-full",
                                    children: [
                                      (0, i.jsx)(M.A, {
                                        setCenter: Q,
                                        mapRef: X,
                                        className: "w-full",
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between lg:r-mb-8 mt-3",
                                        children: [
                                          (0, i.jsxs)("button", {
                                            className:
                                              "flex items-center text-xs text-grey r-px-4 gap-2",
                                            onClick: () => {
                                              navigator.geolocation.getCurrentPosition(
                                                (e) => {
                                                  Q([
                                                    e.coords.latitude,
                                                    e.coords.longitude,
                                                  ]),
                                                    X.current.setCenter(
                                                      new window.google.maps.LatLng(
                                                        e.coords.latitude,
                                                        e.coords.longitude
                                                      )
                                                    );
                                                }
                                              );
                                            },
                                            children: [
                                              (0, i.jsx)(Z.A, {}),
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-asphalt text-sm",
                                                children: R("useLocation"),
                                              }),
                                            ],
                                          }),
                                          (0, i.jsxs)("p", {
                                            className: "h5-text r-px-4",
                                            children: [
                                              (null == f ? void 0 : f.length) ||
                                                0,
                                              " ",
                                              R("results"),
                                            ],
                                          }),
                                        ],
                                      }),
                                      !q &&
                                        (0, i.jsx)("div", {
                                          className:
                                            "result-list overflow-auto lg:flex-1 w-full lg:w-auto relative",
                                          ref: $,
                                          children: C
                                            ? (0, i.jsx)("div", {
                                                className:
                                                  "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2",
                                                children: (0, i.jsx)(z.A, {
                                                  type: "lottie",
                                                }),
                                              })
                                            : f.map((e) =>
                                                (0, i.jsx)(
                                                  A.A,
                                                  {
                                                    entry: e,
                                                    setCurrentMarker: J,
                                                    currentMarker: V,
                                                    listRef: $,
                                                    mapRef: X,
                                                    setCenter: Q,
                                                    event: {
                                                      event: "get_zaptec_step4",
                                                      option: "installer",
                                                    },
                                                  },
                                                  e.properties.id
                                                )
                                              ) ||
                                              (0, i.jsx)("p", {
                                                className: "text-grey text-sm",
                                                children: R("noResults"),
                                              }),
                                        }),
                                    ],
                                  }),
                                }),
                                (0, i.jsxs)("div", {
                                  className: "map relative flex-1",
                                  children: [
                                    (0, i.jsx)(L.A, {
                                      center: U,
                                      markers: y,
                                      setCenter: Q,
                                      setRadius: K,
                                      loading: C,
                                      currentMarker: V,
                                      setCurrentMarker: J,
                                      setMapRef: Y,
                                      utm: m,
                                      event: {
                                        event: "get_zaptec_step4",
                                        option: "installer",
                                      },
                                    }),
                                    (0, i.jsx)(a.N, {
                                      children:
                                        C &&
                                        (0, i.jsx)(r.P.div, {
                                          className:
                                            "absolute right-0 top-0 bg-white bg-opacity-30 rounded-b-lg w-20 h-20 z-10 flex items-center justify-center",
                                          initial: { opacity: 0 },
                                          animate: { opacity: 1 },
                                          exit: { opacity: 0 },
                                          children: (0, i.jsx)(k.A, {
                                            size: 48,
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                  },
                  B
                ),
              }),
            ],
          });
        };
      var Q = n(89853);
      let V = (e) => {
        let { module: t, charger: n, setCharger: l, setCurrentStep: s } = e,
          a = (0, q.y)(),
          o = (0, p.useTranslations)("");
        return (0, i.jsxs)("div", {
          className:
            "questions-wrapper w-full mx-auto r-max-w-[40] r-py-10 text-center flex flex-col items-center",
          children: [
            (0, i.jsx)("h2", {
              className: "h2-text-alt r-mb-10 w-full",
              children: t.questionTitle,
            }),
            (0, i.jsx)("div", {
              className: "questions r-mb-[6] flex flex-col gap-3",
              children: t.questions.map((e) =>
                (0, i.jsxs)(
                  "button",
                  {
                    className:
                      "freeform-field text-left relative flex-1 flex items-start justify-start r-gap-5 cursor-pointer outline-none body-text",
                    type: "button",
                    onClick: () => {
                      l(e.product);
                    },
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "w-4 h-4 bg-transparent border border-asphalt rounded-xl relative flex items-center justify-center mt-[0.25vw]",
                        children: (0, i.jsx)(r.P.div, {
                          className:
                            "w-4 h-4 bg-grey rounded-full scale-0 will-change-transform",
                          initial: { scale: 0 },
                          animate:
                            n === e.product
                              ? { scale: 0.5, backgroundColor: "#222" }
                              : {
                                  left: 0,
                                  scale: 0,
                                  backgroundColor: "#767572",
                                },
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          },
                        }),
                      }),
                      (0, i.jsx)("span", {
                        className:
                          "freeform-label block -translate-y-[0.15rem]",
                        children: e.question,
                      }),
                    ],
                  },
                  e.product
                )
              ),
            }),
            (0, i.jsx)(Q.A, {
              type: "button",
              disabled: !n,
              onClick: () => {
                s(2), a({ event: "get_zaptec_step2", charger: n });
              },
              children: o("continue"),
            }),
          ],
        });
      };
      var J = n(14953);
      let W = n.n(J)()(() => n.e(4716).then(n.bind(n, 82335)), {
          loadableGenerated: { webpack: () => [82335] },
          ssr: !1,
        }),
        K = (e) => {
          let {
              module: t,
              globals: n,
              moduleData: l,
              setCurrentStep: s,
              currentMarket: a,
            } = e,
            r = (0, q.y)(),
            o = (0, p.useTranslations)("");
          return (0, i.jsxs)("div", {
            className:
              "pick-region w-full mx-auto r-max-w-[40] r-py-10 text-center flex flex-col items-center",
            children: [
              (0, i.jsx)("h2", {
                className: "h2-text-alt r-mb-10 w-full",
                children: t.title,
              }),
              (0, i.jsx)(W, {
                globals: n,
                regions: l.regions,
                className: "r-mb-[6]",
                dark: !0,
              }),
              (0, i.jsx)(Q.A, {
                type: "button",
                disabled: !a,
                onClick: () => {
                  var e;
                  s(1),
                    r({
                      event: "get_zaptec_step1",
                      region:
                        null === (e = l.regions.find((e) => e.id === a)) ||
                        void 0 === e
                          ? void 0
                          : e.title,
                    });
                },
                children: o("continue"),
              }),
            ],
          });
        };
      var X = n(59357),
        Y = n(87517);
      let ee = (e) => {
          var t, n;
          let { module: l, charger: o, setCurrentStep: d } = e,
            c = (0, q.y)(),
            u = (0, p.useTranslations)(""),
            h = (0, s.useRef)(null),
            [x, m] = (0, s.useState)("default"),
            [g, f] = (0, s.useState)({ x: 0, y: 0 }),
            v = (0, N.U)("(pointer: coarse)"),
            [y, w] = (0, s.useState)("Asphalt Black"),
            j = (0, X.A)(h, { enterDelay: 100, leaveDelay: 100 }),
            b = 0,
            k = 0;
          null !== j.x && (b = j.x), null !== j.y && (k = j.y);
          let I = {
            default: {
              opacity: 1,
              x: b,
              y: k,
              scale: 0.1,
              opacity: 1,
              transition: { type: "spring", mass: 0.6 },
            },
            project: {
              opacity: 1,
              scale: 1,
              backgroundColor: "#F9F3EB",
              scale: 1,
              x: b,
              y: k,
            },
            dragging: { scale: 0.3, x: b, y: k },
          };
          return (0, i.jsxs)("div", {
            className:
              "product-wrapper w-full r-py-10 text-center flex flex-col items-center relative",
            ref: h,
            onMouseEnter: (e) => {
              if (v) return;
              let { clientX: t, clientY: n } = e,
                { top: l, left: i } = h.current.getBoundingClientRect();
              f({ x: t - i, y: n - l });
            },
            children: [
              (0, i.jsx)(a.N, {
                children:
                  j.isOver &&
                  !v &&
                  (0, i.jsx)(r.P.div, {
                    variants: I,
                    className:
                      "absolute z-50 flex items-center justify-center rounded-full overflow-hidden bg-forest border border-forest text-forest text-xs w-[6.75rem] h-[6.75rem] left-0 top-0 pointer-events-none p-4 text-center hidden-cursor",
                    initial: { x: g.x, y: g.y, scale: 0.65, opacity: 0 },
                    animate: x,
                    exit: { scale: 0.65, opacity: 0 },
                    transition: { type: "spring", stiffness: 500, damping: 28 },
                    children: u("dragRotate"),
                  }),
              }),
              (0, i.jsx)("div", {
                className:
                  "h-[50svh] sm:r-h-[24] relative w-full r-max-w-[60] mx-auto mt-10 sm:mt-0",
                children: (0, i.jsx)(Y.A, {
                  product: { chargers: [o] },
                  small: !0,
                  setCursorVariant: m,
                  setSelectedColor: w,
                }),
              }),
              (0, i.jsxs)("div", {
                className: "mx-auto  w-full r-max-w-[40] mt-0 sm:r-mt-10",
                children: [
                  (0, i.jsx)("p", {
                    className: "r-text-lg text-grey",
                    children: l.resultsPretitle,
                  }),
                  (0, i.jsx)("h2", {
                    className: "h2-text-alt mb-6 sm:r-mb-10",
                    children:
                      null === (t = l.questions.find((e) => e.product === o)) ||
                      void 0 === t
                        ? void 0
                        : t.productLabels,
                  }),
                  (0, i.jsx)(Q.A, {
                    type: "button",
                    className: "mt-auto relative z-10",
                    onClick: () => {
                      d(3), c({ event: "get_zaptec_step3", color: y });
                    },
                    children: u("get {charger}", {
                      charger:
                        null ===
                          (n = l.questions.find((e) => e.product === o)) ||
                        void 0 === n
                          ? void 0
                          : n.productLabels,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        et = (e) => {
          var t;
          let { globals: n, setShowModule: l } = e,
            o = (0, p.useTranslations)(""),
            { currentSite: d } = n,
            [c, u] = (0, s.useState)(null),
            [m, g] = (0, s.useState)(0),
            [f, v] = (0, s.useState)(null),
            y = (0, s.useRef)(null),
            [w, b] = (0, s.useState)(null),
            { data: N } = (0, x.I)(j, {
              variables: { siteId: null == d ? void 0 : d.siteId },
            }),
            k = (0, s.useMemo)(
              () =>
                null == N
                  ? void 0
                  : N.regions.map((e) => {
                      var t;
                      if (
                        !(null === (t = e.hasSites) || void 0 === t
                          ? void 0
                          : t.length)
                      )
                        return e;
                      let n = e.hasSites.map((e) => {
                        var t;
                        let { url: n } = e.hasSite || {},
                          { hostname: l, pathname: i } = new URL(n),
                          s =
                            null ===
                              (t = h().locales.find(
                                (e) =>
                                  i.split("/")[1] ===
                                  (null == e ? void 0 : e.toLowerCase())
                              )) || void 0 === t
                              ? void 0
                              : t.toLowerCase(),
                          { siteId: a } =
                            h().sites.find((e) => {
                              var t;
                              return (
                                e.domain === l &&
                                (null === (t = e.locale) || void 0 === t
                                  ? void 0
                                  : t.toLowerCase()) === s
                              );
                            }) || {};
                        return a;
                      });
                      return { ...e, sites: n };
                    }),
              [N]
            );
          if (
            ((0, s.useEffect)(() => {
              if (!d) return;
              let e =
                null == k
                  ? void 0
                  : k.find((e) => {
                      var t;
                      return null === (t = e.sites) || void 0 === t
                        ? void 0
                        : t.includes(d.siteId);
                    });
              u((null == e ? void 0 : e.id) || null);
            }, [k, d]),
            (0, s.useEffect)(() => {
              let e = () => {
                let { hash: e } = window.location;
                if (!(null == e ? void 0 : e.includes("region"))) return;
                let [, t] = e.split("-");
                u(t);
              };
              return (
                e(),
                window.addEventListener("hashchange", e),
                () => {
                  window.removeEventListener("hashchange", e);
                }
              );
            }, []),
            (0, s.useEffect)(() => {
              var e, t;
              b(
                (null == N
                  ? void 0
                  : null === (t = N.getZaptec) || void 0 === t
                  ? void 0
                  : null === (e = t.exceptions) || void 0 === e
                  ? void 0
                  : e.find((e) => {
                      var t;
                      return null === (t = e.siteSelector) || void 0 === t
                        ? void 0
                        : t.some((e) => e.id === c);
                    })) || null
              );
            }, [c, N]),
            !(null == N ? void 0 : N.getZaptec))
          )
            return null;
          let { getZaptec: I } = N;
          return (0, i.jsx)("div", {
            className: "relative container full overflow-hidden",
            ref: y,
            children: (0, i.jsxs)("div", {
              className:
                "inner relative w-full min-h-[100svh] flex items-center justify-center",
              children: [
                (0, i.jsxs)("button", {
                  "aria-label": "Close modal window",
                  className:
                    "modal-close absolute right-0 top-0 mt-4 sm:r-mt-[4.5] text-grey r-text-sm flex items-center gap-3 z-10 group",
                  onClick: () => {
                    l(!1), (window.location.hash = "");
                  },
                  children: [
                    o("close"),
                    (0, i.jsxs)("svg", {
                      width: "48",
                      height: "48",
                      viewBox: "0 0 48 48",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, i.jsx)("rect", {
                          x: "0.5",
                          y: "0.5",
                          width: "47",
                          height: "47",
                          rx: "23.5",
                          className:
                            "fill-asphalt group-hover:fill-white transition-colors duration-300",
                        }),
                        (0, i.jsx)("rect", {
                          x: "0.5",
                          y: "0.5",
                          width: "47",
                          height: "47",
                          rx: "23.5",
                          className:
                            "stroke-asphalt group-hover:stroke-grey-light transition-colors duration-300",
                        }),
                        (0, i.jsx)("path", {
                          d: "M15.5147 15.4853L32.4853 32.4558M32.4853 15.4853L15.5147 32.4558",
                          className:
                            "stroke-white group-hover:stroke-asphalt transition-colors duration-300",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(a.N, {
                  children:
                    m > 0 &&
                    (0, i.jsxs)(r.P.button, {
                      className:
                        "absolute left-0 top-0 mt-4 sm:r-mt-[4.5] flex items-center r-text-sm text-grey gap-5 z-10 h-12",
                      onClick: () => g((e) => e - 1),
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      children: [
                        (0, i.jsx)("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, i.jsx)("path", {
                            d: "M13.0469 7L1.04687 7M1.04687 7L7.04687 13M1.04687 7L7.04688 0.999999",
                            stroke: "#767572",
                          }),
                        }),
                        o("back"),
                      ],
                    }),
                }),
                (0, i.jsx)(a.N, {
                  mode: "wait",
                  children: (0, i.jsx)(
                    r.P.div,
                    {
                      className: "widget-wrapper w-full",
                      initial: "hidden",
                      animate: "visible",
                      exit: "exit",
                      layout: "size",
                      variants: {
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 },
                        exit: { opacity: 0, y: -100 },
                      },
                      children:
                        0 === m
                          ? (0, i.jsx)(K, {
                              module: I,
                              setCurrentStep: g,
                              globals: n,
                              moduleData: N,
                              currentMarket: c,
                            })
                          : 1 === m && w
                          ? (0, i.jsx)(i.Fragment, {
                              children: w.showMap
                                ? (0, i.jsx)(U, {
                                    region: N.regions.find((e) => e.id === c),
                                    module: I,
                                    currentSite: d,
                                    exception: w,
                                  })
                                : (0, i.jsx)(_.A, { exception: w }),
                            })
                          : 1 !== m || w
                          ? 2 === m
                            ? (0, i.jsx)(ee, {
                                module: I,
                                charger: f,
                                setCurrentStep: g,
                              })
                            : 3 === m
                            ? (0, i.jsx)(U, {
                                region: N.regions.find((e) => e.id === c),
                                module: I,
                                currentSite: d,
                                charger: f,
                                utm:
                                  null == N
                                    ? void 0
                                    : null === (t = N.globalSet) || void 0 === t
                                    ? void 0
                                    : t.utm,
                              })
                            : null
                          : (0, i.jsx)(V, {
                              module: I,
                              charger: f,
                              setCharger: v,
                              setCurrentStep: g,
                            }),
                    },
                    m
                  ),
                }),
                !((w && 1 === m) || (!w && 3 === m)) &&
                  (0, i.jsx)("div", {
                    className:
                      "absolute left-0 bottom-0 w-full h-[1px] bg-grey-border r-mb-[3.5]",
                    children: (0, i.jsx)(r.P.div, {
                      className: "absolute left-0 bottom-0 h-[1px] bg-asphalt",
                      initial: { width: 0 },
                      animate: {
                        width: "".concat((m / (w ? 1 : 3)) * 100, "%"),
                      },
                      transition: { duration: 0.5 },
                      children: (0, i.jsxs)("div", {
                        className:
                          "absolute left-full bottom-full mb-1 -translate-x-1/2 text-grey r-text-sm whitespace-nowrap",
                        children: [m + 1, " / ", w ? 2 : 4],
                      }),
                    }),
                  }),
              ],
            }),
          });
        },
        en = (e) => {
          let { globals: t } = e,
            [n, l] = (0, s.useState)(!1),
            d = (0, o.useRouter)(),
            u = (0, q.y)();
          return (
            (0, s.useEffect)(() => {
              let e = async () => {
                let { hash: e } = window.location;
                (null == e ? void 0 : e.includes("get-zaptec")) &&
                  (l(!0), u({ event: "get_zaptec_step0" }));
              };
              return (
                e(),
                d.events.on("hashChangeStart", e),
                () => {
                  d.events.off("hashChangeStart", e);
                }
              );
            }, [d, u]),
            (0, s.useEffect)(() => {
              let e = c().get();
              if (!e) return;
              let t = window.matchMedia("(pointer: coarse)").matches;
              n && !t && (null == e || e.paused(!0, !0));
            }, [n]),
            (0, i.jsx)(a.N, {
              onExitComplete: () => {
                let e = c().get();
                e && (null == e || e.paused(!1));
              },
              children:
                n &&
                (0, i.jsx)(r.P.div, {
                  className:
                    "get-zaptec fixed left-0 top-0 w-full h-full bg-white z-[999]",
                  initial: { opacity: 0, y: "100%" },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: "-50%" },
                  transition: { type: "spring", stiffness: 300, damping: 30 },
                  children: (0, i.jsx)(et, { globals: t, setShowModule: l }),
                }),
            })
          );
        };
    },
  },
]);
