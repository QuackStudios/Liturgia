(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5027], {
  2102: (e, t, l) => {
      "use strict";
      l.d(t, {
          A: () => i
      });
      var n, a = l(96540);
      function s() {
          return (s = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                      Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n])
              }
              return e
          }
          ).apply(this, arguments)
      }
      let i = (0,
      a.forwardRef)(function(e, t) {
          return a.createElement("svg", s({
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t
          }, e), n || (n = a.createElement("path", {
              d: "M.74 7h12m0 0-6-6m6 6-6 6",
              vectorEffect: "non-scaling-stroke"
          })))
      })
  }
  ,
  73997: (e, t, l) => {
      "use strict";
      l.d(t, {
          A: () => i
      });
      var n, a = l(96540);
      function s() {
          return (s = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                      Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n])
              }
              return e
          }
          ).apply(this, arguments)
      }
      let i = (0,
      a.forwardRef)(function(e, t) {
          return a.createElement("svg", s({
              xmlns: "http://www.w3.org/2000/svg",
              width: 12.828,
              height: 12.828,
              fill: "none",
              stroke: "#e46c4f",
              strokeLinecap: "round",
              strokeWidth: 2,
              ref: t
          }, e), n || (n = a.createElement("path", {
              d: "m1.414 1.414 10 10m0-10-10 10"
          })))
      })
  }
  ,
  3027: (e, t, l) => {
      "use strict";
      l.d(t, {
          A: () => f
      });
      var n, a, s, i = l(74848), r = l(72673), o = l(2102), c = l(96540);
      function d() {
          return (d = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                      Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n])
              }
              return e
          }
          ).apply(this, arguments)
      }
      var p = (0,
      c.forwardRef)(function(e, t) {
          return c.createElement("svg", d({
              width: 44,
              height: 44,
              xmlns: "http://www.w3.org/2000/svg",
              stroke: "#fff",
              ref: t
          }, e), n || (n = c.createElement("g", {
              fill: "none",
              fillRule: "evenodd",
              strokeWidth: 2
          }, c.createElement("circle", {
              cx: 22,
              cy: 22,
              r: 1
          }, c.createElement("animate", {
              attributeName: "r",
              begin: "0s",
              dur: "1.8s",
              values: "1; 20",
              calcMode: "spline",
              keyTimes: "0; 1",
              keySplines: "0.165, 0.84, 0.44, 1",
              repeatCount: "indefinite"
          }), c.createElement("animate", {
              attributeName: "stroke-opacity",
              begin: "0s",
              dur: "1.8s",
              values: "1; 0",
              calcMode: "spline",
              keyTimes: "0; 1",
              keySplines: "0.3, 0.61, 0.355, 1",
              repeatCount: "indefinite"
          })), c.createElement("circle", {
              cx: 22,
              cy: 22,
              r: 1
          }, c.createElement("animate", {
              attributeName: "r",
              begin: "-0.9s",
              dur: "1.8s",
              values: "1; 20",
              calcMode: "spline",
              keyTimes: "0; 1",
              keySplines: "0.165, 0.84, 0.44, 1",
              repeatCount: "indefinite"
          }), c.createElement("animate", {
              attributeName: "stroke-opacity",
              begin: "-0.9s",
              dur: "1.8s",
              values: "1; 0",
              calcMode: "spline",
              keyTimes: "0; 1",
              keySplines: "0.3, 0.61, 0.355, 1",
              repeatCount: "indefinite"
          })))))
      })
        , u = l(73997);
      function m() {
          return (m = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                      Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n])
              }
              return e
          }
          ).apply(this, arguments)
      }
      var h = (0,
      c.forwardRef)(function(e, t) {
          return c.createElement("svg", m({
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 12 12",
              ref: t
          }, e), a || (a = c.createElement("path", {
              className: "expand_svg__bottom",
              d: "M6.4 5.6 1 11m0 0h5m-5 0V6",
              vectorEffect: "non-scaling-stroke"
          })), s || (s = c.createElement("path", {
              className: "expand_svg__top",
              d: "M11 1H6m5 0v5m0-5L6.4 5.6",
              vectorEffect: "non-scaling-stroke"
          })))
      })
        , w = l(86715);
// Mapping of href values to button indices
const hrefToIndexMap = {
  "https://shop.liturgybrisbane.net.au/collections/liturgia": 0,
  "/features": 1,
  // Add more mappings as needed
};

// Array of button texts corresponding to indices
const buttonTexts = [
  "Get Liturgia",  // Text for index 0
  "Learn More",  // Text for index 1
];

// Function to process buttons and assign text based on href
function processButton(button) {
  // Step 1: Validate that the button is a valid DOM element
  if (!(button instanceof Element)) {
    console.error("Invalid DOM element:", button);
    return; // Exit the function if the button is not valid
  }

  // Step 2: Get the href attribute of the button
  const href = button.getAttribute("href");

  // Step 3: Determine the button index based on the href
  const buttonIndex = hrefToIndexMap[href];

  // Step 4: Get the button text based on the index
  const buttonText = buttonIndex !== undefined
    ? buttonTexts[buttonIndex] // Use the mapped text
    : "Default Text"; // Fallback to "Default Text" if href is not in the map


  // Step 5: Update only the text node inside the "icon overflow-hidden" span
  const iconSpan = button.querySelector(".icon.overflow-hidden");
  if (iconSpan) {
    // Find the text node inside the icon span
    const textNode = Array.from(iconSpan.childNodes).find(
      (node) => node.nodeType === Node.TEXT_NODE
    );

    if (textNode) {
      // Update the text node with the new text
      textNode.textContent = buttonText;
    }
  }
}

// Function to observe the DOM for dynamically added buttons
function observeButtons() {
  // Select the container where buttons are dynamically added
  const targetNode = document.body; // You can narrow this down to a specific container if needed

  // Create a MutationObserver to watch for changes in the DOM
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        // Check added nodes for buttons
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element && node.matches(".custom-button")) {
            // Process the dynamically added button
            processButton(node);
          }
        });
      }
    }
  });

  // Start observing the target node for child additions
  observer.observe(targetNode, { childList: true, subtree: true });
}

// Fallback: Periodically check for unprocessed buttons
function fallbackCheck() {
  const buttons = document.querySelectorAll(".custom-button");
  buttons.forEach((button) => {
    if (!button.dataset.processed) {
      processButton(button);
      button.dataset.processed = "true"; // Mark the button as processed
    }
  });
}

// Start observing and set up the fallback
observeButtons();
setInterval(fallbackCheck, 1000); // Check every second for unprocessed buttons

// Existing button rendering logic (restored `f(e)` function)
let f = function (e) {
  var t, l;
  let {
    ariaLabel: n,
    title: a,
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
    N = /\.(pdf|docx?|xlsx?|pptx?|zip|rar|7z|tar|gz|mp3|mp4|jpg|jpeg|png|gif|svg|webp|tiff|bmp|ico|flac|wav|aiff|wma|aac|ogg|mp3|mp4|mkv|avi|mov|wmv|flv|webm|pdf|docx?|xlsx?|pptx?|zip|rar|7z|tar|gz)$/i,
    I = !1;

  (d && d.match(N) || k.href && k.href.match(N)) && (I = "download");

  let E = (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)("span", {
        className: "target-area absolute block left-0 w-full h-full min-h-[48px] top-1/2 -translate-y-1/2 js-text-animate",
      }),
      (0, i.jsxs)("span", {
        className: "button-inner",
        children: [
          "close" === s &&
            (0, i.jsx)("span", {
              className: "icon close-icon pr-4",
              children: (0, i.jsx)(u.A, {
                className: "stroke-black closeIcon",
              }),
            }),
          "back" === x &&
            (0, i.jsx)("span", {
              className: "icon back-icon pr-4",
              children: (0, i.jsx)(b, {
                className: "transform rotate-180 back-icon",
              }),
            }),
          (0, i.jsx)("span", {
            className: j,
            children: (() => {
              const updatedK = { ...k };
              if (!updatedK.text || updatedK.text === "Get Zaptec") {
                updatedK.text = "Get Liturgia";
              }
              return f || updatedK.text;
            })(),
          }),
          "front" === x &&
            "close" !== s &&
            b &&
            (0, i.jsx)("span", {
              className: "icon overflow-hidden",
              children: [
                "Default Text", // Placeholder text (will be updated dynamically)
                (0, i.jsx)("span", {
                  className: "inner-icon",
                  children: (0, i.jsx)("svg", {
                    viewBox: "0 0 16 16",
                    className: "plus-icon undefined",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                      d: "M0 8h16M8 0v16",
                      "vector-effect": "non-scaling-stroke",
                    }),
                  }),
                }),
              ],
            }),
        ],
      }),
    ],
  });

  let A = "custom-button button-".concat(g, " ").concat(v, " group").concat(b ? "" : " no-icon");

  if ("button" === s || "submit" === s)
    return (0, i.jsx)("button", {
      "aria-label": n || a,
      title: a,
      type: s,
      className: [A, y ? "opacity-60" : ""].join(" "),
      disabled: y,
      onClick: m,
      children: E,
    });

  if ("close" === s)
    return (0, i.jsx)("button", {
      "aria-label": n || a,
      className: [A, y ? "opacity-60" : ""].join(" "),
      disabled: y,
      onClick: m,
      children: E,
    });

  if ("download" === s)
    return (0, i.jsx)("a", {
      "aria-label": n || a,
      title: a,
      href: d,
      className: "".concat(A, " download"),
      target: "_blank",
      rel: "noreferrer",
      download: !0,
      children: E,
    });

  if ((null == k ? void 0 : k.type) === "freeform")
    return (0, i.jsx)("a", {
      "aria-label": n || a,
      href: k.href,
      className: "".concat(A, " download-button"),
      "data-form": k.title,
      children: E,
    });

  let _ = {
    ariaLabel: n || k.ariaLabel || a,
    title: a || k.title,
    target: c || k.target,
    href: d || k.href,
    onClick: m,
    className: A,
  };

  if (
    (null == k ? void 0 : k.target) === "_blank" &&
    ((_.rel = "noreferrer"), (_.className += "md:inline-flex grey small")),
    I &&
    ((_.download = I), (_.className += " download"), (_.target = "_blank")),
    null === (l = _.href) || void 0 === l
      ? void 0
      : l.startsWith("#")
  ) {
    let [e] = z.asPath.split("?"),
      t = (e = e.replace(/#.*$/, "")).split("/");
    "en" === t[1] && t.splice(1, 1),
      "en" === t[2] && t.splice(2, 1),
      t[1].match(/^\d+$/) && t.splice(1, 1);
    let l = t.join("/");
    _.href = {
      hash: _.href,
      pathname: l || "/",
    };
  }

  return (0, i.jsx)(r.A, {
    ..._,
    children: E,
  });
}
  }
  ,
  72673: (e, t, l) => {
      "use strict";
      l.d(t, {
          A: () => o
      });
      var n = l(74848)
        , a = l(96540)
        , s = l(91106)
        , i = l.n(s)
        , r = l(77836);
      let o = (0,
      a.forwardRef)( (e, t) => {
          let {href: l, as: a=null, target: s=null, className: o, children: c, onMouseEnter: d=null, onMouseLeave: p=null, onClick: u=null, label: m=null, scroll: h=!1, prefetch: w=!1, locale: f=!1, style: g={}, shallow: v=!1, ariaLabel: y=null, utm: b, ...x} = e
            , k = y || x["aria-label"];
          delete x["aria-label"];
          let j = l;
          if ((null == b ? void 0 : b.length) > 0) {
              if (/^https?:\/\//.test(l)) {
                  let e = new URL(l);
                  b.map(t => {
                      e.searchParams.append(t.name, t.value)
                  }
                  ),
                  j = e.toString()
              } else {
                  let e = new URL(l,"https://example.com");
                  b.map(t => {
                      e.searchParams.append(t.name, t.value)
                  }
                  ),
                  j = e.pathname + e.search + e.hash
              }
          }
          let z = "string" == typeof j ? j.replace(/\/$/, "") : j;
          return "true" === r.env.NEXT_PUBLIC_STAGING && z && ("string" == typeof z ? z.startsWith("/") || "/" === z ? z = "https://liturgia.quackstudios.com.au".concat(z) : z.startsWith("https://www.liturgia.quackstudios.com.au") && (z = z.replace("https://liturgia.quackstudios.com.au", "https://liturgia.quackstudios.com.au")) : "object" == typeof z && (z = {
              ...z,
              pathname: "liturgia.quackstudios.com.au".concat(z.pathname)
          })),
          l ? (0,
          n.jsx)(i(), {
              label: m,
              scroll: h,
              passHref: !0,
              href: z,
              as: a,
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
              children: c
          }) : null
      }
      )
  }
  ,
  52046: (e, t, l) => {
      "use strict";
      l.d(t, {
          A: () => o
      });
      var n = l(74848)
        , a = l(14953)
        , s = l.n(a);
      let i = s()( () => Promise.all([l.e(3342), l.e(8051), l.e(8845)]).then(l.bind(l, 38845)), {
          loadableGenerated: {
              webpack: () => [38845]
          }
      })
        , r = s()( () => l.e(331).then(l.bind(l, 20331)), {
          loadableGenerated: {
              webpack: () => [20331]
          }
      });
      function o(e) {
          let {type: t} = e;
          return "lottie" === t ? (0,
          n.jsx)(i, {}) : (0,
          n.jsx)(r, {})
      }
  }
  ,
  60598: (e, t, l) => {
      "use strict";
      l.d(t, {
          A: () => u
      });
      var n = l(74848)
        , a = l(96540)
        , s = l(29965)
        , i = l.n(s);
      let r = e => {
          let {asset: t, mode: l, quality: n, ratio: a, width: s, providedHeight: i, providedWidth: r} = e
            , o = "crop" === l && (s / r * i || s * a) || null;
          return o = o ? Math.round(o) : o,
          "".concat("liturgia.quackstudios.com.au", "/actions/common/image?id=").concat(t.id, "&height=").concat(o, "&mode=").concat(l || "fit", "&quality=").concat(n || 80, "&width=").concat(s || null)
      }
      ;
      var o = l(79475)
        , c = l(48936)
        , d = l.n(c);
      let p = "production"
        , u = a.memo(e => {
          let {asset: t, height: l, width: s, ratio: c, mode: u, fill: m=!1, quality: h, sizes: w="100vw", className: f="w-full h-auto", priority: g=!1, style: v={}, videoClassName: y="", figureClasses: b="", showCaption: x, refresh: k, ...j} = e
            , z = (0,
          o.A)(640)
            , N = (0,
          o.A)(1024)
            , I = (0,
          a.useCallback)(e => {
              e.target.classList.remove("image-preload"),
              k && d().refresh()
          }
          , []);
          t && Array.isArray(t) && t.length > 0 && (t = 3 === t.length ? z ? t[2] : N ? t[1] : t[0] : 2 === t.length && z ? t[1] : t[0]);
          let E = m ? null : s || (null == t ? void 0 : t.width)
            , A = m ? null : c ? parseInt(c * s) : l || (null == t ? void 0 : t.height);
          return t && t.url ? m ? (0,
          n.jsx)(i(), {
              src: p ? null == t ? void 0 : t.primaryUrl : null == t ? void 0 : t.url,
              alt: (null == t ? void 0 : t.altTranslation) || (null == t ? void 0 : t.alt) || (null == t ? void 0 : t.title) || "",
              loader: p ? null : e => r({
                  asset: t,
                  mode: u,
                  quality: h,
                  ratio: c,
                  providedWidth: E,
                  providedHeight: A,
                  ...e
              }),
              className: "".concat(f, " image-preload ").concat(g ? "" : " opacity-0"),
              ...j,
              sizes: w,
              fill: m,
              priority: g,
              onLoad: g ? null : I
          }) : (0,
          n.jsx)(i(), {
              src: p ? null == t ? void 0 : t.primaryUrl : null == t ? void 0 : t.url,
              alt: (null == t ? void 0 : t.altTranslation) || (null == t ? void 0 : t.alt) || (null == t ? void 0 : t.title) || "",
              loader: p ? null : e => r({
                  asset: t,
                  mode: u,
                  quality: h,
                  ratio: c,
                  providedWidth: E,
                  providedHeight: A,
                  ...e
              }),
              width: E,
              height: A,
              className: "".concat(f, " image-preload "),
              ...j,
              style: v,
              sizes: w,
              priority: g,
              onLoad: g ? null : I
          }) : null
      }
      )
  }
  ,
  42201: (e, t, l) => {
      "use strict";
      l.d(t, {
          A: () => m
      });
      var n = l(74848)
        , a = l(29965)
        , s = l.n(a)
        , i = l(96540)
        , r = l(13554)
        , o = l.n(r)
        , c = l(96836)
        , d = l(48936)
        , p = l.n(d)
        , u = l(19602);
      let m = e => {
          var t, l, a, r, d;
          let {asset: m, poster: h, play: w=!1, settings: f, style: g={}, preload: v="auto", onlyThumb: y=!1, ratio: b, ...x} = e
            , {muted: k, controls: j, loop: z} = f
            , {autoplay: N} = f;
          N = !1 !== w ? w : N;
          let I = (0,
          u.U)("(min-width: 768px)")
            , [E,A] = (0,
          i.useState)(!1)
            , [_,T] = (0,
          i.useState)(!1)
            , [U,C] = (0,
          i.useState)(!1)
            , S = (0,
          i.useRef)(null)
            , [O,B] = (0,
          i.useState)(null)
            , P = h && h.length ? h[0].url : null;
          (0,
          i.useEffect)( () => {
              c.os.registerPlugin(p());
              let e = null;
              if (N && S.current) {
                  let t = S.current.querySelector(".exception-video");
                  e = p().create({
                      trigger: S.current,
                      start: "-10px bottom",
                      end: "bottom top",
                      onEnter: () => {
                          A(!0),
                          t && t.play()
                      }
                      ,
                      onEnterBack: () => {
                          A(!0),
                          t && t.play()
                      }
                      ,
                      onLeave: () => {
                          A(!1),
                          t && t.pause()
                      }
                      ,
                      onLeaveBack: () => {
                          A(!1),
                          t && t.pause()
                      }
                  })
              }
              return () => {
                  e && e.kill()
              }
          }
          , [N, S]),
          (0,
          i.useEffect)( () => {
              T(/iPad|iPhone|iPod/.test(navigator.userAgent))
          }
          , []),
          (0,
          i.useEffect)( () => {
              A(w)
          }
          , [w]),
          (0,
          i.useEffect)( () => {
              C(!0)
          }
          , []),
          (0,
          i.useEffect)( () => {
              if (m.hdVideo || m.sdVideo) {
                  let e = I ? m.hdVideo : m.sdVideo;
                  e || (e = m.hdVideo || m.sdVideo),
                  B(e)
              }
          }
          , [m, I]);
          let W = {};
          if (!m)
              return null;
          let L = b;
          if ("video" === m.kind)
              W.src = m.url,
              W.type = m.mimeType,
              L || (L = m.height / m.width);
          else if ("json" === m.kind && m.embeddedAsset && "video" === m.embeddedAsset.type)
              W.src = m.embeddedAsset.url,
              W.provider = m.embeddedAsset.providerName.toLowerCase(),
              P || (P = m.embeddedAsset.image.replace("hqdefault", "maxresdefault")),
              L || (L = (null == m ? void 0 : null === (d = m.embeddedAsset) || void 0 === d ? void 0 : d.width) / m.embeddedAsset.height);
          else {
              if (!m.hdVideo && !m.sdVideo)
                  return null;
              W.src = O,
              W.type = "video/mp4"
          }
          let R = (0,
          n.jsxs)("div", {
              className: "play-icon r-w-32 r-h-32 rounded-full isolate flex items-center group relative justify-center h6-text transition-colors duration-300 text-white",
              children: [(0,
              n.jsx)("div", {
                  className: "w-full h-full absolute left-0 top-0 -z-10 bg-asphalt rounded-full transition-transform duration-500 ease-out group-hover:scale-110"
              }), "Play"]
          });
          return (null === (t = x.className) || void 0 === t ? void 0 : t.includes("aspect")) || !L || (null == x ? void 0 : null === (l = x.videoClassName) || void 0 === l ? void 0 : l.includes("aspect")) || (null === (a = Object.keys(g)) || void 0 === a ? void 0 : a.includes("aspectRatio")) || (g.aspectRatio = L),
          (0,n.jsx)("div", {
              className: "video-wrapper".concat(N ? " opacity-0" : "", " h-full max-w-full ").concat(x.className || "relative"),
              ref: S,
              style: g,
              children: y ? (0,
              n.jsx)(s(), {
                  src: P,
                  alt: m.title,
                  layout: "fill",
                  objectFit: "cover",
                  className: "exception-video ".concat(x.videoClassName || "")
              }) : (0,
              n.jsx)(n.Fragment, {
                  children: (null === (r = W.src) || void 0 === r ? void 0 : r.includes("progressive_redirect")) ? (0,
                  n.jsx)("div", {
                      style: {
                          width: "100%",
                          height: "100%"
                      },
                      children: (0,
                      n.jsx)("video", {
                          className: "exception-video".concat(x.videoClassName || ""),
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
                              objectFit: "cover"
                          },
                          onCanPlay: () => {
                              c.os.to(S.current, {
                                  opacity: 1,
                                  duration: .5,
                                  ease: "power3.out"
                              })
                          }
                      })
                  }) : U ? (0,
                  n.jsx)(o(), {
                      className: "react-player ".concat(x.videoClassName || "hello"),
                      url: W.src,
                      width: "100%",
                      height: "100%",
                      opacity: 0.8,
                      
                      onReady: () => {
                          c.os.to(S.current, {
                              opacity: 1,
                              duration: .5,
                              ease: "power3.out"
                          })
                      }
                      ,
                      light: !E && !N && !_ && !!P && P,
                      playing: E,
                      controls: j,
                      loop: z,
                      muted: k,
                      playsinline: !0,
                      playIcon: R,
                      onClickPreview: () => A(!0),
                      config: {
                          vimeo: {
                              playerOptions: {
                                  dnt: !0
                              }
                          }
                      }
                  }) : null
              })
          })
      }
  }
  ,
  90058: (e, t, l) => {
      "use strict";
      l.d(t, {
          A: () => d
      });
      var n = l(74848)
        , a = l(60598)
        , s = l(42201)
        , i = l(74728)
        , r = l.n(i)
        , o = l(4536)
        , c = l(32578);
      let d = e => {
          let {media: t, videoSettings: l={}, showCaption: i=!0, figureClasses: d="", play: p, credit: u=null, description: m=null, captionStyle: h="", refresh: w=!1, ...f} = e
            , g = (0,
          c.useTranslations)("common")
            , v = t && t.asset || t;
          if (!v || Array.isArray(v) && 0 === v.length)
              return null;
          let y = null
            , b = m || t.asset && v[0].text
            , x = u || t.asset && v[0].plainText;
          if (b && x) {
              let e = '<span class="text-sm text-grey-mid">'.concat(b ? " / " : "").concat(g("photoBy"), ": ").concat(x, "</span>");
              b = b.endsWith("</p>") ? b.replace("</p>", "".concat(e, "</p>")) : "".concat(b, " ").concat(e)
          }
          return Object.keys(t).includes("asset") ? "image" === v[0].kind ? y = (0,
          n.jsx)(a.A, {
              asset: v[0],
              refresh: w,
              ...f
          }) : ("video" === v[0].kind || "json" === v[0].kind) && (y = (0,
          n.jsx)(s.A, {
              asset: v[0],
              play: p,
              settings: {
                  ...t.videoSettings[0],
                  ...l
              },
              poster: t.posterImage,
              ...f
          })) : Object.keys(t).includes("hdVideo") && (y = (0,
          n.jsx)(s.A, {
              asset: v,
              play: p,
              settings: {
                  ...t.videoSettings[0],
                  ...l
              },
              poster: t.posterImage,
              ...f
          })),
          i ? (0,
          n.jsxs)("figure", {
              className: "media-element relative block".concat(d && " ".concat(d)),
              children: [y, b && (0,
              n.jsx)("figcaption", {
                  className: "text-sm text-black mt-2 r-max-w-[41] ".concat(h),
                  children: (0,
                  n.jsx)("div", {
                      className: "wysiwyg",
                      dangerouslySetInnerHTML: {
                          __html: r()(b, o.O)
                      }
                  })
              })]
          }) : y
      }
  }
  ,
  45418: (e, t, l) => {
      "use strict";
      l.d(t, {
          A: () => a,
          w: () => n
      });
      let n = e => "\n    ".concat(e, " {\n      ... on ").concat(e, "_vimeo_BlockType {\n        id\n        uid\n        siteId\n        sdVideo\n        typeHandle\n        hdVideo\n        videoSettings {\n          autoplay\n          controls\n          loop\n          muted\n        }\n        posterImage {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          alt\n          url(width: 1920)\n          primaryUrl: url\n        }\n      }\n      ... on ").concat(e, "_asset_BlockType {\n        id\n        uid\n        siteId\n        videoSettings {\n          autoplay\n          controls\n          loop\n          muted\n        }\n        posterImage {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          alt\n          url(width: 1920)\n          primaryUrl: url\n        }\n        asset {\n          embeddedAsset {\n            title\n            description\n            url\n            type\n            image\n            width\n            height\n            aspectRatio\n            providerName\n            href: url\n          }\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          url(width: 100)\n          primaryUrl: url\n          alt\n          ... on uploads_Asset {\n            text\n            plainText\n          }\n        }\n      }\n    }\n  ")
        , a = "\n    mediaElement {\n      ... on mediaElement_vimeo_BlockType {\n        id\n        uid\n        siteId\n        sdVideo\n        typeHandle\n        hdVideo\n        videoSettings {\n          autoplay\n          controls\n          loop\n          muted\n        }\n        posterImage {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          alt\n          url(width: 1920)\n          primaryUrl: url\n          ... on uploads_Asset {\n            altTranslation: plainText2\n          }\n        }\n      }\n      ... on mediaElement_asset_BlockType {\n        id\n        uid\n        siteId\n        videoSettings {\n          autoplay\n          controls\n          loop\n          muted\n        }\n        posterImage {\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          alt\n          url(width: 1920)\n          primaryUrl: url\n          ... on uploads_Asset {\n            altTranslation: plainText2\n          }\n        }\n        asset {\n          embeddedAsset {\n            title\n            description\n            url\n            type\n            image\n            width\n            height\n            aspectRatio\n            providerName\n            href: url\n          }\n          id\n          uid\n          siteId\n          kind\n          width\n          height\n          url(width: 100)\n          primaryUrl: url\n          alt\n          ... on uploads_Asset {\n            text\n            plainText\n            altTranslation: plainText2\n          }\n        }\n      }\n    }\n  "
  }
  ,
  4536: (e, t, l) => {
      "use strict";
      l.d(t, {
          A: () => a,
          O: () => n
      });
      let n = {
          allowedTags: ["a", "strong", "em", "br", "b", "i", "u", "span", "p", "h2", "h3", "h4", "h5", "h6"],
          allowedAttributes: {
              a: ["href", "target", "rel", "class", "title", "style"],
              span: ["class", "style"],
              p: ["class", "style"],
              h2: ["class", "style"],
              h3: ["class", "style"],
              h4: ["class", "style"],
              h5: ["class", "style"],
              h6: ["class", "style"]
          }
      }
        , a = {
          allowedTags: ["address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div", "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre", "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "svg", "rect", "path", "circle", "polygon", "polyline", "line", "text", "tspan", "defs", "g", "use", "symbol", "img", "iframe"],
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
              iframe: ["*"]
          },
          transformTags: {
              img: (e, t) => (t.src && t.src.startsWith("/") && (t.src = "".concat("liturgia.quackstudios.com.au").concat(t.src)),
              t.loading = "lazy",
              t.decoding = "async",
              t.class = "w-full h-auto",
              t.width = null,
              t.height = null,
              {
                  tagName: e,
                  attribs: t
              }),
              iframe: (e, t) => (t.loading = "lazy",
              t.decoding = "async",
              t.class = "w-full h-auto aspect-[16/9]",
              t.width = null,
              t.height = null,
              t.allowfullscreen = !0,
              {
                  tagName: e,
                  attribs: t
              })
          }
      }
  }
  ,
  79475: (e, t, l) => {
      "use strict";
      l.d(t, {
          A: () => a
      });
      var n = l(96540);
      let a = e => {
          var t, l;
          let[a,s] = (0,
          n.useState)({
              windowWidth: null === (t = window) || void 0 === t ? void 0 : t.innerWidth,
              isDesiredWidth: (null === (l = window) || void 0 === l ? void 0 : l.innerWidth) <= e
          });
          return (0,
          n.useEffect)( () => {
              var t;
              let l = () => {
                  var t;
                  let l = null === (t = window) || void 0 === t ? void 0 : t.innerWidth;
                  s({
                      windowWidth: l,
                      isDesiredWidth: l < e
                  })
              }
              ;
              return null === (t = window) || void 0 === t || t.addEventListener("resize", l),
              () => {
                  var e;
                  return null === (e = window) || void 0 === e ? void 0 : e.removeEventListener("resize", l)
              }
          }
          , [a.windowWidth, e]),
          a.isDesiredWidth
      }
  }
  ,
  49746: () => {}
  ,
  19977: () => {}
  ,
  197: () => {}
  ,
  21866: () => {}
  ,
  32654: e => {
      "use strict";
      e.exports = JSON.parse('{"locales":["en","no","sv","da","de","en-uk","fr","nl","de-CH","fr-CH","nl-BE","fr-BE"],"domains":[{"domain":"www.liturgia.quackstudios.com.au","handle":"default","locales":[null,null,null,null,null,null,null,null]},{"domain":"www.liturgia.quackstudios.com.au","handle":"zaptecDeCh","locales":[null,null]},{"domain":"www.liturgia.quackstudios.com.au","handle":"zaptecNlBe","locales":[null,null]}],"sites":[{"siteId":1,"locale":"en","domain":"www.liturgia.quackstudios.com.au","url":"/","fullUrl":"https://www.liturgia.quackstudios.com.au/","handle":"default","name":"Global / English","primary":true,"groupId":1},{"siteId":12,"locale":"no","domain":"www.liturgia.quackstudios.com.au","url":"/no/","fullUrl":"https://www.liturgia.quackstudios.com.au/no/","handle":"zaptecNo","name":"Norway / Norsk","primary":false,"groupId":1},{"siteId":2,"locale":"sv","domain":"www.liturgia.quackstudios.com.au","url":"/sv/","fullUrl":"https://www.liturgia.quackstudios.com.au/sv/","handle":"zaptecSv","name":"Sweden / Svenska","primary":false,"groupId":1},{"siteId":3,"locale":"da","domain":"www.liturgia.quackstudios.com.au","url":"/da/","fullUrl":"https://www.liturgia.quackstudios.com.au/da/","handle":"zaptecDa","name":"Denmark / Dansk","primary":false,"groupId":1},{"siteId":4,"locale":"de","domain":"www.liturgia.quackstudios.com.au","url":"/de/","fullUrl":"https://www.liturgia.quackstudios.com.au/de/","handle":"zaptecDe","name":"Germany / Deutsch","primary":false,"groupId":1},{"siteId":5,"locale":"en-uk","domain":"www.liturgia.quackstudios.com.au","url":"/en-uk/","fullUrl":"https://www.liturgia.quackstudios.com.au/en-uk/","handle":"zaptecUk","name":"United Kingdom / English","primary":false,"groupId":1},{"siteId":6,"locale":"fr","domain":"www.liturgia.quackstudios.com.au","url":"/fr/","fullUrl":"https://www.liturgia.quackstudios.com.au/fr/","handle":"zaptecFr","name":"France / Fran\xe7ais","primary":false,"groupId":1},{"siteId":7,"locale":"nl","domain":"www.liturgia.quackstudios.com.au","url":"/nl/","fullUrl":"https://www.liturgia.quackstudios.com.au/nl/","handle":"zaptecNl","name":"Netherlands / Nederlands","primary":false,"groupId":1},{"siteId":11,"locale":"de-CH","domain":"www.liturgia.quackstudios.com.au","url":"/de-ch/","fullUrl":"https://www.liturgia.quackstudios.com.au/de-ch/","handle":"zaptecDeCh","name":"Switzerland / Deutsch","primary":false,"groupId":2},{"siteId":10,"locale":"fr-CH","domain":"www.liturgia.quackstudios.com.au","url":"/fr-ch/","fullUrl":"https://www.liturgia.quackstudios.com.au/fr-ch/","handle":"zaptecFrCh","name":"Switzerland / Fran\xe7ais","primary":false,"groupId":2},{"siteId":8,"locale":"nl-BE","domain":"www.liturgia.quackstudios.com.au","url":"/nl-be/","fullUrl":"https://www.liturgia.quackstudios.com.au/nl-be/","handle":"zaptecNlBe","name":"Belgium / Nederlands","primary":false,"groupId":3},{"siteId":9,"locale":"fr-BE","domain":"www.liturgia.quackstudios.com.au","url":"/fr-be/","fullUrl":"https://www.liturgia.quackstudios.com.au/fr-be/","handle":"zaptecFrBe","name":"Belgium / Fran\xe7ais","primary":false,"groupId":3}]}')
  }
}]);
