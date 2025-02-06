(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5027],
  {
    2102: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => r });
      var a,
        n = l(96540);
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l)
                  Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      let r = (0, n.forwardRef)(function (e, t) {
        return n.createElement(
          "svg",
          s(
            {
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
            },
            e
          ),
          a ||
            (a = n.createElement("path", {
              d: "M.74 7h12m0 0-6-6m6 6-6 6",
              vectorEffect: "non-scaling-stroke",
            }))
        );
      });
    },
    73997: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => r });
      var a,
        n = l(96540);
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l)
                  Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      let r = (0, n.forwardRef)(function (e, t) {
        return n.createElement(
          "svg",
          s(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 12.828,
              height: 12.828,
              fill: "none",
              stroke: "#e46c4f",
              strokeLinecap: "round",
              strokeWidth: 2,
              ref: t,
            },
            e
          ),
          a ||
            (a = n.createElement("path", {
              d: "m1.414 1.414 10 10m0-10-10 10",
            }))
        );
      });
    },
    3027: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => f });
      var a,
        n,
        s,
        r = l(74848),
        i = l(72673),
        o = l(2102),
        c = l(96540);
      function d() {
        return (d = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l)
                  Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      var p = (0, c.forwardRef)(function (e, t) {
          return c.createElement(
            "svg",
            d(
              {
                width: 44,
                height: 44,
                xmlns: "http://www.w3.org/2000/svg",
                stroke: "#fff",
                ref: t,
              },
              e
            ),
            a ||
              (a = c.createElement(
                "g",
                { fill: "none", fillRule: "evenodd", strokeWidth: 2 },
                c.createElement(
                  "circle",
                  { cx: 22, cy: 22, r: 1 },
                  c.createElement("animate", {
                    attributeName: "r",
                    begin: "0s",
                    dur: "1.8s",
                    values: "1; 20",
                    calcMode: "spline",
                    keyTimes: "0; 1",
                    keySplines: "0.165, 0.84, 0.44, 1",
                    repeatCount: "indefinite",
                  }),
                  c.createElement("animate", {
                    attributeName: "stroke-opacity",
                    begin: "0s",
                    dur: "1.8s",
                    values: "1; 0",
                    calcMode: "spline",
                    keyTimes: "0; 1",
                    keySplines: "0.3, 0.61, 0.355, 1",
                    repeatCount: "indefinite",
                  })
                ),
                c.createElement(
                  "circle",
                  { cx: 22, cy: 22, r: 1 },
                  c.createElement("animate", {
                    attributeName: "r",
                    begin: "-0.9s",
                    dur: "1.8s",
                    values: "1; 20",
                    calcMode: "spline",
                    keyTimes: "0; 1",
                    keySplines: "0.165, 0.84, 0.44, 1",
                    repeatCount: "indefinite",
                  }),
                  c.createElement("animate", {
                    attributeName: "stroke-opacity",
                    begin: "-0.9s",
                    dur: "1.8s",
                    values: "1; 0",
                    calcMode: "spline",
                    keyTimes: "0; 1",
                    keySplines: "0.3, 0.61, 0.355, 1",
                    repeatCount: "indefinite",
                  })
                )
              ))
          );
        }),
        u = l(73997);
      function m() {
        return (m = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l)
                  Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      var h = (0, c.forwardRef)(function (e, t) {
          return c.createElement(
            "svg",
            m(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 12 12",
                ref: t,
              },
              e
            ),
            n ||
              (n = c.createElement("path", {
                className: "expand_svg__bottom",
                d: "M6.4 5.6 1 11m0 0h5m-5 0V6",
                vectorEffect: "non-scaling-stroke",
              })),
            s ||
              (s = c.createElement("path", {
                className: "expand_svg__top",
                d: "M11 1H6m5 0v5m0-5L6.4 5.6",
                vectorEffect: "non-scaling-stroke",
              }))
          );
        }),
        w = l(86715);
      let f = function (e) {
        var t, l;
        let {
            ariaLabel: a,
            title: n,
            type: s = "link",
            target: c,
            href: d,
            onClick: m,
            children: f,
            style: g = "big",
            className: v = "",
            disabled: y = !1,
            Icon: b = o.A,
            arrow: x = "front",
            linkProps: k = {},
            spanStyle: j = "flex items-center flex-1 sm:whitespace-nowrap",
          } = e,
          z = (0, w.useRouter)(),
          N =
            /\.(pdf|docx?|xlsx?|pptx?|zip|rar|7z|tar|gz|mp3|mp4|jpg|jpeg|png|gif|svg|webp|tiff|bmp|ico|flac|wav|aiff|wma|aac|ogg|mp3|mp4|mkv|avi|mov|wmv|flv|webm|pdf|docx?|xlsx?|pptx?|zip|rar|7z|tar|gz)$/i,
          I = !1;
        ((d && d.match(N)) || (k.href && k.href.match(N))) && (I = "download");
        let A = (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("span", {
                className:
                  "target-area absolute block left-0 w-full h-full min-h-[48px] top-1/2 -translate-y-1/2",
              }),
              (0, r.jsxs)("span", {
                className: "button-inner",
                children: [
                  "close" === s &&
                    (0, r.jsx)("span", {
                      className: "icon close-icon pr-4",
                      children: (0, r.jsx)(u.A, {
                        className: "stroke-black closeIcon",
                      }),
                    }),
                  "back" === x &&
                    (0, r.jsx)("span", {
                      className: "icon back-icon pr-4",
                      children: (0, r.jsx)(b, {
                        className: "transform rotate-180 back-icon",
                      }),
                    }),
                  (0, r.jsx)("span", { className: j, children: f || k.text }),
                  "front" === x &&
                    "close" !== s &&
                    b &&
                    (0, r.jsxs)("span", {
                      className: "icon overflow-hidden",
                      children: [
                        f || k.text,
                        (0, r.jsx)("span", {
                          className: "inner-icon",
                          children: y
                            ? (0, r.jsx)(p, { className: "stroke-text" })
                            : (null == k ? void 0 : k.type) === "freeform" ||
                              (null == k ? void 0 : k.type) === "jumptech" ||
                              (null == k
                                ? void 0
                                : null === (t = k.href) || void 0 === t
                                ? void 0
                                : t.includes("#form-"))
                            ? (0, r.jsx)(h, { className: "expand-icon" })
                            : (0, r.jsx)(b, {}),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          E = "custom-button button-"
            .concat(g, " ")
            .concat(v, " group")
            .concat(b ? "" : " no-icon");
        if ("button" === s || "submit" === s)
          return (0, r.jsx)("button", {
            "aria-label": a || n,
            title: n,
            type: s,
            className: [E, y ? "opacity-60" : ""].join(" "),
            disabled: y,
            onClick: m,
            children: A,
          });
        if ("close" === s)
          return (0, r.jsx)("button", {
            "aria-label": a || n,
            className: [E, y ? "opacity-60" : ""].join(" "),
            disabled: y,
            onClick: m,
            children: A,
          });
        if ("download" === s)
          return (0, r.jsx)("a", {
            "aria-label": a || n,
            title: n,
            href: d,
            className: "".concat(E, " download"),
            target: "_blank",
            rel: "noreferrer",
            download: !0,
            children: A,
          });
        if ((null == k ? void 0 : k.type) === "freeform")
          return (0, r.jsx)("a", {
            "aria-label": a || n,
            href: k.href,
            className: "".concat(E, " download-button"),
            "data-form": k.title,
            children: A,
          });
        let _ = {
          ariaLabel: a || k.ariaLabel || n,
          title: n || k.title,
          target: c || k.target,
          href: d || k.href,
          onClick: m,
          className: E,
        };
        if (
          ((null == k ? void 0 : k.target) === "_blank" &&
            ((_.rel = "noreferrer"), (_.className += "")),
          I &&
            ((_.download = I),
            (_.className += " download"),
            (_.target = "_blank")),
          null === (l = _.href) || void 0 === l ? void 0 : l.startsWith("#"))
        ) {
          let [e] = z.asPath.split("?"),
            t = (e = e.replace(/#.*$/, "")).split("/");
          "en" === t[1] && t.splice(1, 1),
            "en" === t[2] && t.splice(2, 1),
            t[1].match(/^\d+$/) && t.splice(1, 1);
          let l = t.join("/");
          _.href = { hash: _.href, pathname: l || "/" };
        }
        return (0, r.jsx)(i.A, { ..._, children: A });
      };
    },
    72673: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => o });
      var a = l(74848),
        n = l(96540),
        s = l(91106),
        r = l.n(s),
        i = l(77836);
      let o = (0, n.forwardRef)((e, t) => {
        let {
            href: l,
            as: n = null,
            target: s = null,
            className: o,
            children: c,
            onMouseEnter: d = null,
            onMouseLeave: p = null,
            onClick: u = null,
            label: m = null,
            scroll: h = !1,
            prefetch: w = !1,
            locale: f = !1,
            style: g = {},
            shallow: v = !1,
            ariaLabel: y = null,
            utm: b,
            ...x
          } = e,
          k = y || x["aria-label"];
        delete x["aria-label"];
        let j = l;
        if ((null == b ? void 0 : b.length) > 0) {
          if (/^https?:\/\//.test(l)) {
            let e = new URL(l);
            b.map((t) => {
              e.searchParams.append(t.name, t.value);
            }),
              (j = e.toString());
          } else {
            let e = new URL(l, "https://example.com");
            b.map((t) => {
              e.searchParams.append(t.name, t.value);
            }),
              (j = e.pathname + e.search + e.hash);
          }
        }
        let z = "string" == typeof j ? j.replace(/\/$/, "") : j;
        return (
          "true" === i.env.NEXT_PUBLIC_STAGING &&
            z &&
            ("string" == typeof z
              ? z.startsWith("/") || "/" === z
                ? (z = "https://staging.zaptec.com".concat(z))
                : z.startsWith("https://www.zaptec.com") &&
                  (z = z.replace(
                    "https://www.zaptec.com",
                    "https://staging.zaptec.com"
                  ))
              : "object" == typeof z &&
                (z = {
                  ...z,
                  pathname: "https://staging.zaptec.com".concat(z.pathname),
                })),
          l
            ? (0, a.jsx)(r(), {
                label: m,
                scroll: h,
                passHref: !0,
                href: z,
                as: n,
                target: s,
                prefetch: w,
                ref: t,
                className: o,
                onMouseEnter: d,
                onMouseLeave: p,
                onClick: u,
                locale: f,
                style: g,
                shallow: v,
                "aria-label": k,
                ...x,
                children: c,
              })
            : null
        );
      });
    },
    52046: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => o });
      var a = l(74848),
        n = l(14953),
        s = l.n(n);
      let r = s()(
          () =>
            Promise.all([l.e(3342), l.e(8051), l.e(8845)]).then(
              l.bind(l, 38845)
            ),
          { loadableGenerated: { webpack: () => [38845] } }
        ),
        i = s()(() => l.e(331).then(l.bind(l, 20331)), {
          loadableGenerated: { webpack: () => [20331] },
        });
      function o(e) {
        let { type: t } = e;
        return "lottie" === t ? (0, a.jsx)(r, {}) : (0, a.jsx)(i, {});
      }
    },
    60598: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => u });
      var a = l(74848),
        n = l(96540),
        s = l(29965),
        r = l.n(s);
      let i = (e) => {
        let {
            asset: t,
            mode: l,
            quality: a,
            ratio: n,
            width: s,
            providedHeight: r,
            providedWidth: i,
          } = e,
          o = ("crop" === l && ((s / i) * r || s * n)) || null;
        return (
          (o = o ? Math.round(o) : o),
          ""
            .concat("https://cms.zaptec.com", "/actions/common/image?id=")
            .concat(t.id, "&height=")
            .concat(o, "&mode=")
            .concat(l || "fit", "&quality=")
            .concat(a || 80, "&width=")
            .concat(s || null)
        );
      };
      var o = l(79475),
        c = l(48936),
        d = l.n(c);
      let p = "production",
        u = n.memo((e) => {
          let {
              asset: t,
              height: l,
              width: s,
              ratio: c,
              mode: u,
              fill: m = !1,
              quality: h,
              sizes: w = "100vw",
              className: f = "w-full h-auto",
              priority: g = !1,
              style: v = {},
              videoClassName: y = "",
              figureClasses: b = "",
              showCaption: x,
              refresh: k,
              ...j
            } = e,
            z = (0, o.A)(640),
            N = (0, o.A)(1024),
            I = (0, n.useCallback)((e) => {
              e.target.classList.remove("image-preload"), k && d().refresh();
            }, []);
          t &&
            Array.isArray(t) &&
            t.length > 0 &&
            (t =
              3 === t.length
                ? z
                  ? t[2]
                  : N
                  ? t[1]
                  : t[0]
                : 2 === t.length && z
                ? t[1]
                : t[0]);
          let A = m ? null : s || (null == t ? void 0 : t.width),
            E = m
              ? null
              : c
              ? parseInt(c * s)
              : l || (null == t ? void 0 : t.height);
          return t && t.url
            ? m
              ? (0, a.jsx)(r(), {
                  src: p
                    ? null == t
                      ? void 0
                      : t.primaryUrl
                    : null == t
                    ? void 0
                    : t.url,
                  alt:
                    (null == t ? void 0 : t.altTranslation) ||
                    (null == t ? void 0 : t.alt) ||
                    (null == t ? void 0 : t.title) ||
                    "",
                  loader: p
                    ? null
                    : (e) =>
                        i({
                          asset: t,
                          mode: u,
                          quality: h,
                          ratio: c,
                          providedWidth: A,
                          providedHeight: E,
                          ...e,
                        }),
                  className: ""
                    .concat(f, " image-preload ")
                    .concat(g ? "" : " opacity-0"),
                  ...j,
                  sizes: w,
                  fill: m,
                  priority: g,
                  onLoad: g ? null : I,
                })
              : (0, a.jsx)(r(), {
                  src: p
                    ? null == t
                      ? void 0
                      : t.primaryUrl
                    : null == t
                    ? void 0
                    : t.url,
                  alt:
                    (null == t ? void 0 : t.altTranslation) ||
                    (null == t ? void 0 : t.alt) ||
                    (null == t ? void 0 : t.title) ||
                    "",
                  loader: p
                    ? null
                    : (e) =>
                        i({
                          asset: t,
                          mode: u,
                          quality: h,
                          ratio: c,
                          providedWidth: A,
                          providedHeight: E,
                          ...e,
                        }),
                  width: A,
                  height: E,
                  className: "".concat(f, " image-preload "),
                  ...j,
                  style: v,
                  sizes: w,
                  priority: g,
                  onLoad: g ? null : I,
                })
            : null;
        });
    },
    42201: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => m });
      var a = l(74848),
        n = l(29965),
        s = l.n(n),
        r = l(96540),
        i = l(13554),
        o = l.n(i),
        c = l(96836),
        d = l(48936),
        p = l.n(d),
        u = l(19602);
      let m = (e) => {
        var t, l, n, i, d;
        let {
            asset: m,
            poster: h,
            play: w = !1,
            settings: f,
            style: g = {},
            preload: v = "auto",
            onlyThumb: y = !1,
            ratio: b,
            ...x
          } = e,
          { muted: k, controls: j, loop: z } = f,
          { autoplay: N } = f;
        N = !1 !== w ? w : N;
        let I = (0, u.U)("(min-width: 768px)"),
          [A, E] = (0, r.useState)(!1),
          [_, T] = (0, r.useState)(!1),
          [U, C] = (0, r.useState)(!1),
          S = (0, r.useRef)(null),
          [O, B] = (0, r.useState)(null),
          P = h && h.length ? h[0].url : null;
        (0, r.useEffect)(() => {
          c.os.registerPlugin(p());
          let e = null;
          if (N && S.current) {
            let t = S.current.querySelector(".exception-video");
            e = p().create({
              trigger: S.current,
              start: "-10px bottom",
              end: "bottom top",
              onEnter: () => {
                E(!0), t && t.play();
              },
              onEnterBack: () => {
                E(!0), t && t.play();
              },
              onLeave: () => {
                E(!1), t && t.pause();
              },
              onLeaveBack: () => {
                E(!1), t && t.pause();
              },
            });
          }
          return () => {
            e && e.kill();
          };
        }, [N, S]),
          (0, r.useEffect)(() => {
            T(/iPad|iPhone|iPod/.test(navigator.userAgent));
          }, []),
          (0, r.useEffect)(() => {
            E(w);
          }, [w]),
          (0, r.useEffect)(() => {
            C(!0);
          }, []),
          (0, r.useEffect)(() => {
            if (m.hdVideo || m.sdVideo) {
              let e = I ? m.hdVideo : m.sdVideo;
              e || (e = m.hdVideo || m.sdVideo), B(e);
            }
          }, [m, I]);
        let W = {};
        if (!m) return null;
        let L = b;
        if ("video" === m.kind)
          (W.src = m.url), (W.type = m.mimeType), L || (L = m.height / m.width);
        else if (
          "json" === m.kind &&
          m.embeddedAsset &&
          "video" === m.embeddedAsset.type
        )
          (W.src = m.embeddedAsset.url),
            (W.provider = m.embeddedAsset.providerName.toLowerCase()),
            P ||
              (P = m.embeddedAsset.image.replace("hqdefault", "maxresdefault")),
            L ||
              (L =
                (null == m
                  ? void 0
                  : null === (d = m.embeddedAsset) || void 0 === d
                  ? void 0
                  : d.width) / m.embeddedAsset.height);
        else {
          if (!m.hdVideo && !m.sdVideo) return null;
          (W.src = O), (W.type = "video/mp4");
        }
        let R = (0, a.jsxs)("div", {
          className:
            "play-icon r-w-32 r-h-32 rounded-full isolate flex items-center group relative justify-center h6-text transition-colors duration-300 text-white",
          children: [
            (0, a.jsx)("div", {
              className:
                "w-full h-full absolute left-0 top-0 -z-10 bg-asphalt rounded-full transition-transform duration-500 ease-out group-hover:scale-110",
            }),
            "Play",
          ],
        });
        return (
          (null === (t = x.className) || void 0 === t
            ? void 0
            : t.includes("aspect")) ||
            !L ||
            (null == x
              ? void 0
              : null === (l = x.videoClassName) || void 0 === l
              ? void 0
              : l.includes("aspect")) ||
            (null === (n = Object.keys(g)) || void 0 === n
              ? void 0
              : n.includes("aspectRatio")) ||
            (g.aspectRatio = L),
          (0, a.jsx)("div", {
            className: "video-wrapper"
              .concat(N ? " opacity-0" : "", " h-full max-w-full ")
              .concat(x.className || "relative"),
            ref: S,
            style: g,
            children: y
              ? (0, a.jsx)(s(), {
                  src: P,
                  alt: m.title,
                  layout: "fill",
                  objectFit: "cover",
                  className: "exception-video ".concat(x.videoClassName || ""),
                })
              : (0, a.jsx)(a.Fragment, {
                  children: (
                    null === (i = W.src) || void 0 === i
                      ? void 0
                      : i.includes("progressive_redirect")
                  )
                    ? (0, a.jsx)("div", {
                        style: { width: "100%", height: "100%" },
                        children: (0, a.jsx)("video", {
                          className: "exception-video ".concat(
                            x.videoClassName || ""
                          ),
                          width: "100%",
                          height: "100%",
                          controls: j,
                          muted: k,
                          autoPlay: N,
                          loop: z,
                          poster: P,
                          playsInline: !0,
                          preload: v,
                          src: W.src,
                          style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          },
                          onCanPlay: () => {
                            c.os.to(S.current, {
                              opacity: 1,
                              duration: 0.5,
                              ease: "power3.out",
                            });
                          },
                        }),
                      })
                    : U
                    ? (0, a.jsx)(o(), {
                        className: "react-player ".concat(
                          x.videoClassName || ""
                        ),
                        url: W.src,
                        width: "100%",
                        height: "100%",
                        opacity: 0.8,
                        onReady: () => {
                          c.os.to(S.current, {
                            opacity: 1,
                            duration: 0.5,
                            ease: "power3.out",
                          });
                        },
                        light: !A && !N && !_ && !!P && P,
                        playing: A,
                        controls: j,
                        loop: z,
                        muted: k,
                        playsinline: !0,
                        playIcon: R,
                        onClickPreview: () => E(!0),
                        config: { vimeo: { playerOptions: { dnt: !0 } } },
                      })
                    : null,
                }),
          })
        );
      };
    },
    90058: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var a = l(74848),
        n = l(60598),
        s = l(42201),
        r = l(74728),
        i = l.n(r),
        o = l(4536),
        c = l(32578);
      let d = (e) => {
        let {
            media: t,
            videoSettings: l = {},
            showCaption: r = !0,
            figureClasses: d = "",
            play: p,
            credit: u = null,
            description: m = null,
            captionStyle: h = "",
            refresh: w = !1,
            ...f
          } = e,
          g = (0, c.useTranslations)("common"),
          v = (t && t.asset) || t;
        if (!v || (Array.isArray(v) && 0 === v.length)) return null;
        let y = null,
          b = m || (t.asset && v[0].text),
          x = u || (t.asset && v[0].plainText);
        if (b && x) {
          let e = '<span class="text-sm text-grey-mid">'
            .concat(b ? " / " : "")
            .concat(g("photoBy"), ": ")
            .concat(x, "</span>");
          b = b.endsWith("</p>")
            ? b.replace("</p>", "".concat(e, "</p>"))
            : "".concat(b, " ").concat(e);
        }
        return (
          Object.keys(t).includes("asset")
            ? "image" === v[0].kind
              ? (y = (0, a.jsx)(n.A, { asset: v[0], refresh: w, ...f }))
              : ("video" === v[0].kind || "json" === v[0].kind) &&
                (y = (0, a.jsx)(s.A, {
                  asset: v[0],
                  play: p,
                  settings: { ...t.videoSettings[0], ...l },
                  poster: t.posterImage,
                  ...f,
                }))
            : Object.keys(t).includes("hdVideo") &&
              (y = (0, a.jsx)(s.A, {
                asset: v,
                play: p,
                settings: { ...t.videoSettings[0], ...l },
                poster: t.posterImage,
                ...f,
              })),
          r
            ? (0, a.jsxs)("figure", {
                className: "media-element relative block".concat(
                  d && " ".concat(d)
                ),
                children: [
                  y,
                  b &&
                    (0, a.jsx)("figcaption", {
                      className: "text-sm text-black mt-2 r-max-w-[41] ".concat(
                        h
                      ),
                      children: (0, a.jsx)("div", {
                        className: "wysiwyg",
                        dangerouslySetInnerHTML: { __html: i()(b, o.OM) },
                      }),
                    }),
                ],
              })
            : y
        );
      };
    },
    45418: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => n, w: () => a });
      let a = (e) =>
          "\n    "
            .concat(e, " {\n      ... on ")
            .concat(
              e,
              "_vimeo_BlockType {\n        id\n        uid\n        siteId\n        sdVideo\n        typeHandle\n        hdVideo\n        videoSettings {\n          autoplay\n          controls\n          loop\n          muted\n        }\n        posterImage {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          alt\n          url(width: 1920)\n          primaryUrl: url\n        }\n      }\n      ... on "
            )
            .concat(
              e,
              "_asset_BlockType {\n        id\n        uid\n        siteId\n        videoSettings {\n          autoplay\n          controls\n          loop\n          muted\n        }\n        posterImage {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          alt\n          url(width: 1920)\n          primaryUrl: url\n        }\n        asset {\n          embeddedAsset {\n            title\n            description\n            url\n            type\n            image\n            width\n            height\n            aspectRatio\n            providerName\n            href: url\n          }\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          url(width: 100)\n          primaryUrl: url\n          alt\n          ... on uploads_Asset {\n            text\n            plainText\n          }\n        }\n      }\n    }\n  "
            ),
        n =
          "\n    mediaElement {\n      ... on mediaElement_vimeo_BlockType {\n        id\n        uid\n        siteId\n        sdVideo\n        typeHandle\n        hdVideo\n        videoSettings {\n          autoplay\n          controls\n          loop\n          muted\n        }\n        posterImage {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          alt\n          url(width: 1920)\n          primaryUrl: url\n          ... on uploads_Asset {\n            altTranslation: plainText2\n          }\n        }\n      }\n      ... on mediaElement_asset_BlockType {\n        id\n        uid\n        siteId\n        videoSettings {\n          autoplay\n          controls\n          loop\n          muted\n        }\n        posterImage {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          alt\n          url(width: 1920)\n          primaryUrl: url\n          ... on uploads_Asset {\n            altTranslation: plainText2\n          }\n        }\n        asset {\n          embeddedAsset {\n            title\n            description\n            url\n            type\n            image\n            width\n            height\n            aspectRatio\n            providerName\n            href: url\n          }\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          url(width: 100)\n          primaryUrl: url\n          alt\n          ... on uploads_Asset {\n            text\n            plainText\n            altTranslation: plainText2\n          }\n        }\n      }\n    }\n  ";
    },
    4536: (e, t, l) => {
      "use strict";
      l.d(t, { Ay: () => s, OM: () => a, w$: () => n });
      let a = {
          allowedTags: [
            "a",
            "strong",
            "em",
            "br",
            "b",
            "i",
            "u",
            "span",
            "p",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
          ],
          allowedAttributes: {
            a: ["href", "target", "rel", "class", "title", "style"],
            span: ["class", "style"],
            p: ["class", "style"],
            h2: ["class", "style"],
            h3: ["class", "style"],
            h4: ["class", "style"],
            h5: ["class", "style"],
            h6: ["class", "style"],
          },
        },
        n = {
          allowedTags: ["a", "strong", "em", "br", "b", "i", "u", "span"],
          allowedAttributes: {
            a: ["href", "target", "rel", "class", "title", "style"],
            span: ["class", "style"],
          },
        },
        s = {
          allowedTags: [
            "address",
            "article",
            "aside",
            "footer",
            "header",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "hgroup",
            "main",
            "nav",
            "section",
            "blockquote",
            "dd",
            "div",
            "dl",
            "dt",
            "figcaption",
            "figure",
            "hr",
            "li",
            "main",
            "ol",
            "p",
            "pre",
            "ul",
            "a",
            "abbr",
            "b",
            "bdi",
            "bdo",
            "br",
            "cite",
            "code",
            "data",
            "dfn",
            "em",
            "i",
            "kbd",
            "mark",
            "q",
            "rb",
            "rp",
            "rt",
            "rtc",
            "ruby",
            "s",
            "samp",
            "small",
            "span",
            "strong",
            "sub",
            "sup",
            "time",
            "u",
            "var",
            "wbr",
            "caption",
            "col",
            "colgroup",
            "table",
            "tbody",
            "td",
            "tfoot",
            "th",
            "thead",
            "tr",
            "svg",
            "rect",
            "path",
            "circle",
            "polygon",
            "polyline",
            "line",
            "text",
            "tspan",
            "defs",
            "g",
            "use",
            "symbol",
            "img",
            "iframe",
          ],
          allowedAttributes: {
            a: ["href", "target", "title", "rel", "class", "style"],
            img: ["src", "alt", "title", "class", "style"],
            div: ["class", "style"],
            p: ["class", "style"],
            span: ["class", "style"],
            h1: ["class", "style"],
            h2: ["class", "style"],
            h3: ["class", "style"],
            h4: ["class", "style"],
            h5: ["class", "style"],
            h6: ["class", "style"],
            li: ["class", "style"],
            ol: ["class", "style"],
            ul: ["class", "style"],
            table: ["class", "style"],
            tr: ["class", "style"],
            td: ["class", "style"],
            th: ["class", "style"],
            svg: ["*"],
            path: ["*"],
            circle: ["*"],
            rect: ["*"],
            line: ["*"],
            polyline: ["*"],
            polygon: ["*"],
            text: ["*"],
            tspan: ["*"],
            g: ["*"],
            defs: ["*"],
            clipPath: ["*"],
            use: ["*"],
            pattern: ["*"],
            mask: ["*"],
            foreignObject: ["*"],
            animate: ["*"],
            animateMotion: ["*"],
            animateTransform: ["*"],
            desc: ["*"],
            title: ["*"],
            style: ["*"],
            iframe: ["*"],
          },
          transformTags: {
            img: (e, t) => (
              t.src &&
                t.src.startsWith("/") &&
                (t.src = "".concat("https://cms.zaptec.com").concat(t.src)),
              (t.loading = "lazy"),
              (t.decoding = "async"),
              (t.class = "w-full h-auto"),
              (t.width = null),
              (t.height = null),
              { tagName: e, attribs: t }
            ),
            iframe: (e, t) => (
              (t.loading = "lazy"),
              (t.decoding = "async"),
              (t.class = "w-full h-auto aspect-[16/9]"),
              (t.width = null),
              (t.height = null),
              (t.allowfullscreen = !0),
              { tagName: e, attribs: t }
            ),
          },
        };
    },
    79475: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => n });
      var a = l(96540);
      let n = (e) => {
        var t, l;
        let [n, s] = (0, a.useState)({
          windowWidth:
            null === (t = window) || void 0 === t ? void 0 : t.innerWidth,
          isDesiredWidth:
            (null === (l = window) || void 0 === l ? void 0 : l.innerWidth) <=
            e,
        });
        return (
          (0, a.useEffect)(() => {
            var t;
            let l = () => {
              var t;
              let l =
                null === (t = window) || void 0 === t ? void 0 : t.innerWidth;
              s({ windowWidth: l, isDesiredWidth: l < e });
            };
            return (
              null === (t = window) ||
                void 0 === t ||
                t.addEventListener("resize", l),
              () => {
                var e;
                return null === (e = window) || void 0 === e
                  ? void 0
                  : e.removeEventListener("resize", l);
              }
            );
          }, [n.windowWidth, e]),
          n.isDesiredWidth
        );
      };
    },
    49746: () => {},
    19977: () => {},
    197: () => {},
    21866: () => {},
    32654: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"locales":["en","no","sv","da","de","en-uk","fr","nl","de-CH","fr-CH","nl-BE","fr-BE"],"domains":[{"domain":"www.zaptec.com","handle":"default","locales":[null,null,null,null,null,null,null,null]},{"domain":"www.zaptec.com","handle":"zaptecDeCh","locales":[null,null]},{"domain":"www.zaptec.com","handle":"zaptecNlBe","locales":[null,null]}],"sites":[{"siteId":1,"locale":"en","domain":"www.zaptec.com","url":"/","fullUrl":"https://www.zaptec.com/","handle":"default","name":"Global / English","primary":true,"groupId":1},{"siteId":12,"locale":"no","domain":"www.zaptec.com","url":"/no/","fullUrl":"https://www.zaptec.com/no/","handle":"zaptecNo","name":"Norway / Norsk","primary":false,"groupId":1},{"siteId":2,"locale":"sv","domain":"www.zaptec.com","url":"/sv/","fullUrl":"https://www.zaptec.com/sv/","handle":"zaptecSv","name":"Sweden / Svenska","primary":false,"groupId":1},{"siteId":3,"locale":"da","domain":"www.zaptec.com","url":"/da/","fullUrl":"https://www.zaptec.com/da/","handle":"zaptecDa","name":"Denmark / Dansk","primary":false,"groupId":1},{"siteId":4,"locale":"de","domain":"www.zaptec.com","url":"/de/","fullUrl":"https://www.zaptec.com/de/","handle":"zaptecDe","name":"Germany / Deutsch","primary":false,"groupId":1},{"siteId":5,"locale":"en-uk","domain":"www.zaptec.com","url":"/en-uk/","fullUrl":"https://www.zaptec.com/en-uk/","handle":"zaptecUk","name":"United Kingdom / English","primary":false,"groupId":1},{"siteId":6,"locale":"fr","domain":"www.zaptec.com","url":"/fr/","fullUrl":"https://www.zaptec.com/fr/","handle":"zaptecFr","name":"France / Fran\xe7ais","primary":false,"groupId":1},{"siteId":7,"locale":"nl","domain":"www.zaptec.com","url":"/nl/","fullUrl":"https://www.zaptec.com/nl/","handle":"zaptecNl","name":"Netherlands / Nederlands","primary":false,"groupId":1},{"siteId":11,"locale":"de-CH","domain":"www.zaptec.com","url":"/de-ch/","fullUrl":"https://www.zaptec.com/de-ch/","handle":"zaptecDeCh","name":"Switzerland / Deutsch","primary":false,"groupId":2},{"siteId":10,"locale":"fr-CH","domain":"www.zaptec.com","url":"/fr-ch/","fullUrl":"https://www.zaptec.com/fr-ch/","handle":"zaptecFrCh","name":"Switzerland / Fran\xe7ais","primary":false,"groupId":2},{"siteId":8,"locale":"nl-BE","domain":"www.zaptec.com","url":"/nl-be/","fullUrl":"https://www.zaptec.com/nl-be/","handle":"zaptecNlBe","name":"Belgium / Nederlands","primary":false,"groupId":3},{"siteId":9,"locale":"fr-BE","domain":"www.zaptec.com","url":"/fr-be/","fullUrl":"https://www.zaptec.com/fr-be/","handle":"zaptecFrBe","name":"Belgium / Fran\xe7ais","primary":false,"groupId":3}]}'
      );
    },
  },
]);
