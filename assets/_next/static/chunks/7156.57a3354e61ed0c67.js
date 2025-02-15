"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7156],
  {
    43910: (e, t, r) => {
      r.d(t, { A: () => i });
      var l,
        n,
        s,
        o = r(96540);
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var l in r)
                  Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      let i = (0, o.forwardRef)(function (e, t) {
        return o.createElement(
          "svg",
          a(
            {
              width: 17,
              height: 17,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
            },
            e
          ),
          l ||
            (l = o.createElement("circle", {
              cx: 8.5,
              cy: 8.514,
              r: 5.5,
              stroke: "#767572",
            })),
          n ||
            (n = o.createElement("circle", {
              cx: 8.5,
              cy: 8.514,
              r: 2,
              fill: "#767572",
            })),
          s ||
            (s = o.createElement("path", {
              d: "M8.5 3.014v-1.5m5.5 7h1.5m-7 5.5v1.5m-5.5-7H1.5",
              stroke: "#767572",
            }))
        );
      });
    },
    82184: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      let l = r(87677)._(r(32654));
      e.exports = {
        defaultLocale: l.default.defaultLocale,
        locales: l.default.locales,
        sites: l.default.sites,
        domains: l.default.domains,
      };
    },
    58640: (e, t, r) => {
      r.d(t, { A: () => a });
      var l = r(74848),
        n = r(94203),
        s = r(89853),
        o = r(3027);
      let a = (e) => {
        var t, r;
        let { exception: a } = e;
        return (0, l.jsx)("div", {
          className: "bg-grey-bg text-center ".concat(
            a.showMap ? "mb-8 sm:r-mb-20" : ""
          ),
          children: (0, l.jsxs)("div", {
            className: "r-max-w-[40] w-full mx-auto px-4 py-8 sm:r-py-20",
            children: [
              (null == a ? void 0 : a.title) &&
                (0, l.jsx)("h2", {
                  className: "h3-text sm:h2-text-alt mb-4 sm:r-mb-10",
                  children: a.title,
                }),
              (null == a ? void 0 : a.text) &&
                (0, l.jsx)("div", {
                  className: "wysiwyg w-full r-text-lg",
                  children: (0, l.jsx)(n.A, { content: a.text }),
                }),
              (null == a
                ? void 0
                : null === (t = a.button) || void 0 === t
                ? void 0
                : t.href) &&
                (0, l.jsx)(o.A, {
                  linkProps: a.button,
                  className: "mt-4 sm:r-mt-10",
                }),
              (null == a
                ? void 0
                : null === (r = a.contactRows) || void 0 === r
                ? void 0
                : r.length) > 0 &&
                (0, l.jsx)("div", {
                  className: "mt-4 sm:r-mt-10 r-text-base flex-1",
                  children: a.contactRows.map((e) =>
                    (0, l.jsxs)(
                      "div",
                      {
                        className:
                          "r-py-6 flex items-start border-b border-grey-border last:border-none",
                        children: [
                          (0, l.jsx)("h3", {
                            className: "flex-1 text-left",
                            children: e.title,
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "links flex flex-col items-start gap-3 flex-1",
                            children: e.links.map((e) =>
                              (0, l.jsx)(
                                s.A,
                                { linkProps: e.button, className: "plain" },
                                e.uid
                              )
                            ),
                          }),
                          (0, l.jsx)("div", {
                            className: "wysiwyg flex-1 text-right",
                            children: e.text
                              ? (0, l.jsx)(n.A, { content: e.text })
                              : "/",
                          }),
                        ],
                      },
                      e.uid
                    )
                  ),
                }),
            ],
          }),
        });
      };
    },
    87137: (e, t, r) => {
      r.d(t, { A: () => b });
      var l = r(74848),
        n = r(61769),
        s = r(78230),
        o = r(96540),
        a = r(38221),
        i = r.n(a),
        d = r(22360),
        c = r(94203);
      let m = { src: "/_next/static/media/marker.6474571e.png" },
        p = { src: "/_next/static/media/activeMarker.5f9c4c0c.png" },
        g = { src: "/_next/static/media/m1.e1ed80c9.png" },
        h = { src: "/_next/static/media/m2.df4113f8.png" },
        u = { src: "/_next/static/media/m3.8494bc58.png" },
        x = { src: "/_next/static/media/m4.7dc3f867.png" },
        f = { src: "/_next/static/media/m5.8846a94e.png" },
        w = { src: "/_next/static/media/m6.8846a94e.png" },
        b = (e) => {
          let {
              center: t,
              markers: r,
              setCenter: a,
              setRadius: b,
              loading: v,
              currentMarker: y,
              setCurrentMarker: j,
              setMapRef: C,
              utm: N,
              event: k = {},
            } = e,
            z = (0, d.y)(),
            L = (0, o.useRef)(null),
            _ = i()(() => {
              var e, r;
              if (!L.current) return;
              let l = L.current.getCenter();
              l &&
                (l.lat() !== t[0] || l.lng() !== t[1]) &&
                ((null == y
                  ? void 0
                  : null === (e = y.map) || void 0 === e
                  ? void 0
                  : e.lat) !== l.lat() ||
                  (null == y
                    ? void 0
                    : null === (r = y.map) || void 0 === r
                    ? void 0
                    : r.lng) !== l.lng()) &&
                a([l.lat(), l.lng()]);
            }, 500),
            E = i()(() => {
              if (!L.current) return;
              15 > L.current.getZoom() && j(null);
              let e = L.current.getCenter();
              if (!e) return;
              let t = L.current.getBounds().getNorthEast();
              b(
                (0, s.getDistance)(
                  { latitude: e.lat(), longitude: e.lng() },
                  { latitude: t.lat(), longitude: t.lng() }
                ) / 1e3
              );
            }, 500);
          return (0, l.jsx)(n.u6, {
            mapContainerStyle: { height: "100%", width: "100%" },
            onDragEnd: _,
            onZoomChanged: E,
            onLoad: (e) => {
              google.maps.event.addListener(e, "idle", () => {
                L.current ||
                  (e.setCenter(new google.maps.LatLng(t[0], t[1])),
                  e.setZoom(8),
                  (L.current = e),
                  C(L));
              });
            },
            options: {
              mapTypeControl: !1,
              streetViewControl: !1,
              fullscreenControl: !1,
              gestureHandling: "greedy",
              scrollwheel: !1,
              minZoom: 6,
              styles: [
                {
                  featureType: "poi",
                  elementType: "labels",
                  stylers: [{ visibility: "off" }],
                },
              ],
            },
            children:
              !v &&
              (0, l.jsx)(n.w1, {
                options: {
                  imagePath: "https://liturgia/assets/Map/m",
                  imageExtension: "png",
                  imageSizes: [120, 150, 170, 190, 210, 210],
                  maxZoom: 16,
                  averageCenter: !0,
                  zoomOnClick: !1,
                  textColor: "white",
                  styles: [
                    {
                      textColor: "white",
                      textSize: 14,
                      fontWeight: "bold",
                      url: g.src,
                      height: 52,
                      width: 52,
                    },
                    {
                      textColor: "white",
                      textSize: 14,
                      fontWeight: "bold",
                      url: h.src,
                      height: 56,
                      width: 56,
                    },
                    {
                      textColor: "white",
                      textSize: 14,
                      fontWeight: "bold",
                      url: u.src,
                      height: 66,
                      width: 66,
                    },
                    {
                      textColor: "white",
                      textSize: 14,
                      fontWeight: "bold",
                      url: x.src,
                      height: 78,
                      width: 78,
                    },
                    {
                      textColor: "white",
                      textSize: 14,
                      fontWeight: "bold",
                      url: f.src,
                      height: 90,
                      width: 90,
                    },
                    {
                      textColor: "white",
                      textSize: 14,
                      fontWeight: "bold",
                      url: w.src,
                      height: 90,
                      width: 90,
                    },
                  ],
                },
                onClick: (e) => {
                  var t;
                  let l = e.getMarkers(),
                    n =
                      null ===
                        (t = (
                          null == l ? void 0 : l.map((e) => e.metadata.id)
                        ).map((e) => {
                          let t = r.find((t) => t.properties.id == e);
                          return t
                            ? new google.maps.LatLng(
                                t.geometry.coordinates[1],
                                t.geometry.coordinates[0]
                              )
                            : null;
                        })) || void 0 === t
                        ? void 0
                        : t.filter((e) => e),
                    s = new google.maps.LatLngBounds();
                  n.forEach((e) => {
                    e && s.extend(e);
                  }),
                    L.current.fitBounds(s),
                    a([
                      L.current.getCenter().lat(),
                      L.current.getCenter().lng(),
                    ]);
                },
                children: (e) =>
                  null == r
                    ? void 0
                    : r.map((t) =>
                        (0, l.jsx)(
                          n.pH,
                          {
                            position: {
                              lat: t.geometry.coordinates[1],
                              lng: t.geometry.coordinates[0],
                            },
                            clickable: !0,
                            cursor: "pointer",
                            onLoad: (e) => {
                              e.metadata = { id: t.properties.id };
                            },
                            icon: {
                              url:
                                (null == y ? void 0 : y.properties.id) ===
                                t.properties.id
                                  ? p.src
                                  : m.src,
                              scaledSize:
                                (null == y ? void 0 : y.properties.id) ===
                                t.properties.id
                                  ? new window.google.maps.Size(76, 80)
                                  : new window.google.maps.Size(56, 64),
                            },
                            onClick: () => {
                              z({
                                ...k,
                                installer: t.properties.name,
                                address: t.properties.address,
                              }),
                                j(t),
                                a([
                                  L.current.getCenter().lat(),
                                  L.current.getCenter().lng(),
                                ]);
                            },
                            clusterer: e,
                            children:
                              (null == y ? void 0 : y.properties.id) ===
                                t.properties.id &&
                              (() => {
                                let { url: e } = t.properties;
                                if (e) {
                                  e.match(/^https?:\/\//i) ||
                                    (e = "https://".concat(e));
                                  let t = RegExp(
                                    "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
                                    "i"
                                  );
                                  if (e && N && e.match(t)) {
                                    let t = new URL(e);
                                    N.forEach((e) => {
                                      t.searchParams.append(e.name, e.value);
                                    }),
                                      (e = t.toString());
                                  }
                                }
                                return (0, l.jsx)(n.w4, {
                                  position: {
                                    lat: t.geometry.coordinates[1],
                                    lng: t.geometry.coordinates[0],
                                  },
                                  options: {
                                    closeBoxURL: "",
                                    enableEventPropagation: !0,
                                    alignBottom: !0,
                                    pixelOffset: new window.google.maps.Size(
                                      -160,
                                      -80
                                    ),
                                  },
                                  children: (0, l.jsxs)("div", {
                                    className:
                                      "bg-sand-light rounded-sm border-grey-border r-p-4 w-[320px] relative",
                                    children: [
                                      (0, l.jsx)("button", {
                                        onClick: () => j(null),
                                        className: "absolute top-0 right-0 p-3",
                                        children: (0, l.jsxs)("svg", {
                                          width: "20",
                                          height: "20",
                                          viewBox: "0 0 20 20",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: [
                                            (0, l.jsx)("rect", {
                                              x: "0.5",
                                              y: "0.5",
                                              width: "19",
                                              height: "19",
                                              rx: "9.5",
                                              fill: "#222222",
                                            }),
                                            (0, l.jsx)("path", {
                                              d: "M6.66667 6.66667L13.3333 13.3333M13.3333 6.66667L6.66667 13.3333",
                                              stroke: "white",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, l.jsx)("h2", {
                                        className:
                                          "text-asphalt font-primary r-text-base mb-4",
                                        children: t.properties.name,
                                      }),
                                      t.properties.text &&
                                        (0, l.jsx)("div", {
                                          className: "wysiwyg text-sm my-6",
                                          children: (0, l.jsx)(c.A, {
                                            content: t.properties.text,
                                          }),
                                        }),
                                      (0, l.jsx)("p", {
                                        className: "text-sm mb-2",
                                        children: t.properties.address,
                                      }),
                                      e &&
                                        (0, l.jsx)("a", {
                                          href: e,
                                          target: "_blank",
                                          rel: "noreferrer",
                                          className:
                                            "text-asphalt font-primary text-base",
                                          children: t.properties.url.replace(
                                            /(^\w+:|^)\/\//,
                                            ""
                                          ),
                                        }),
                                    ],
                                  }),
                                });
                              })(),
                          },
                          t.properties.id
                        )
                      ),
              }),
          });
        };
    },
    41272: (e, t, r) => {
      r.d(t, { A: () => o });
      var l = r(74848),
        n = r(96540),
        s = r(22360);
      let o = (e) => {
        let {
            entry: t,
            setCurrentMarker: r,
            currentMarker: o,
            mapRef: a,
            setCenter: i,
            event: d = {},
          } = e,
          c = (0, s.y)(),
          m = (0, n.useRef)(null),
          {
            properties: { name: p, id: g },
            geometry: { coordinates: h },
          } = t;
        return (
          (0, n.useEffect)(() => {
            o &&
              (null == o ? void 0 : o.uid) === t.uid &&
              m.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
          }, [o, t]),
          (0, l.jsx)("button", {
            ref: m,
            className:
              "result block r-text-base leading-normal py-2 border-b border-grey-border transition-colors text-left w-full ".concat(
                (null == o ? void 0 : o.properties.id) === g
                  ? "bg-grey-bg border-asphalt"
                  : "hover:bg-grey-bg hover:border-asphalt"
              ),
            type: "button",
            onClick: () => {
              c({
                ...d,
                installer: t.properties.name,
                address: t.properties.address,
              }),
                r(t),
                a.current.setCenter(new window.google.maps.LatLng(h[1], h[0])),
                i([h[1], h[0]]),
                a.current.setZoom(18);
            },
            children: p,
          })
        );
      };
    },
    210: (e, t, r) => {
      r.d(t, { A: () => u });
      var l,
        n = r(74848),
        s = r(86908),
        o = r(93731),
        a = r(34650),
        i = r(32578),
        d = r(96540);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var l in r)
                  Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      var m = (0, d.forwardRef)(function (e, t) {
        return d.createElement(
          "svg",
          c(
            {
              width: 14,
              height: 13,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
            },
            e
          ),
          l ||
            (l = d.createElement("path", {
              d: "m13 12.514-3.5-3.5m1.5-3.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
              stroke: "#767572",
            }))
        );
      });
      let p = (e) => {
          let { children: t, ...r } = e;
          return (0, n.jsx)(s.c.ValueContainer, {
            ...r,
            children: (0, n.jsxs)("div", {
              className: "flex items-center gap-2 r-text-sm relative",
              children: [
                (0, n.jsx)(m, { className: "translate-y-[0.1em]" }),
                t,
              ],
            }),
          });
        },
        g = (e) => {
          let t = (0, i.useTranslations)("common");
          return (0, n.jsx)(s.c.DropdownIndicator, {
            ...e,
            children: (0, n.jsx)("div", {
              className:
                "bg-asphalt text-white rounded-[6.25rem] r-px-5 py-3 r-text-sm",
              children: t("search.button"),
            }),
          });
        },
        h = () => null,
        u = (e) => {
          let { setCenter: t, mapRef: r, className: l } = e,
            s = (0, i.useTranslations)("common"),
            {
              ready: d,
              suggestions: { status: c, data: m },
              setValue: u,
              clearSuggestions: x,
            } = (0, a.Ay)({ debounce: 300 }),
            f = async (e) => {
              let l = e.label;
              x();
              try {
                let e = await (0, a.fx)({ address: l }),
                  { lat: n, lng: s } = await (0, a.rg)(e[0]);
                t([n, s]),
                  r.current.setCenter(new window.google.maps.LatLng(n, s)),
                  r.current.setZoom(13);
              } catch (e) {
                console.log("Error: ", e);
              }
            },
            w =
              ("OK" === c &&
                m.map((e) => {
                  let { description: t } = e;
                  return { label: t, value: t };
                })) ||
              [];
          return (0, n.jsx)("div", {
            className: l || "search md:r-max-w-[20]",
            children: (0, n.jsx)(o.default, {
              components: {
                ValueContainer: p,
                DropdownIndicator: g,
                IndicatorSeparator: h,
              },
              styles: {
                control: (e) => ({
                  ...e,
                  borderRadius: "6.25rem",
                  border: "1px solid #767572",
                  padding: "0.31rem 0.31rem 0.31rem 1rem",
                }),
                singleValue: (e) => ({
                  ...e,
                  position: "absolute",
                  left: "1.5rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                }),
                dropdownIndicator: (e) => ({ ...e, padding: 0 }),
                placeholder: (e) => ({
                  ...e,
                  position: "absolute",
                  left: "1.5rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                }),
              },
              onInputChange: (e) => (u(e), e),
              onChange: f,
              options: w,
              isSearchable: !0,
              isDisabled: !d,
              placeholder: s("searchLocationPlaceholder"),
            }),
          });
        };
    },
  },
]);
