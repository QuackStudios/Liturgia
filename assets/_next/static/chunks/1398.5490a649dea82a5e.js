"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1398],
  {
    31398: (t, e, o) => {
      o.r(e), o.d(e, { default: () => j });
      var a = o(74848),
        n = o(78113),
        s = o(63295),
        i = o(23296),
        r = o(59462),
        c = o(87750),
        l = o(89160),
        u = o(94811),
        d = o(13268),
        p = o(6293),
        f = o(76567),
        h = o(96540);
      let m = (t) => (Math.PI / 180) * t,
        g = (t) => {
          let {
            path: e,
            color: o,
            rx: n,
            ry: s,
            scale: i,
            position: r,
            setShow: l,
            setLoadedModels: u,
          } = t,
            { scene: g, materials: w } = (0, p.p)(e),
            x = (0, h.useRef)(w["Main Body"]),
            j = (0, h.useRef)(w["Liturgia Logo"]),
            y = (0, h.useMemo)(() => g.clone(), [g]);
          return (
            (0, h.useEffect)(() => {
              (x.current.color = new f.Color(o)),
                (0, c.i)(0.85, 1, {
                  duration: 1.5,
                  ease: "backOut",
                  onUpdate: (t) => {
                    y.scale.set(i[0] * t, i[1] * t, i[2] * t);
                  },
                }),
                l(!0);
            }, []),
            (0, h.useEffect)(() => {
              u((t) => ({ ...t, [e]: !0 }));
            }, [e]),
            (0, h.useEffect)(() => {
              if (!x.current || !j.current) return;
              let t = "#".concat(x.current.color.getHexString()),
                e = "#".concat(j.current.color.getHexString());
              "#f4f4f4" === o
                ? (0, c.i)(e, "#000000", {
                  duration: 0.5,
                  onUpdate: (t) => {
                    j.current.color = new f.Color(t);
                  },
                })
                : (0, c.i)(e, "#f4f4f4", {
                  duration: 0.5,
                  onUpdate: (t) => {
                    j.current.color = new f.Color(t);
                  },
                }),
                (0, c.i)(t, o, {
                  duration: 0.5,
                  onUpdate: (t) => {
                    x.current.color = new f.Color(t);
                  },
                });
            }, [o, e]),
            (0, a.jsx)(d.P.primitive, {
              object: y,
              position: r,
              rotation: [s, m(-15), n],
              scale: i.map((t) => 0.5 * t),
            })
          );
        };
      var w = o(14935),
        x = o(9655);
      let j = (t) => {
        let {
          modelPath: e,
          color: o,
          small: d = !1,
          scale: p,
          position: f,
          currentProduct: m,
          setCursorVariant: j = () => { },
          setLoadedModels: y = () => { },
        } = t,
          [v, b] = (0, h.useState)({ path: e, scale: p, position: f }),
          [E, C] = (0, h.useState)(!1),
          k = (0, s.d)(100),
          L = (0, s.d)(-200),
          M = (0, u.useDrag)((t) => {
            let {
              movement: [e, o],
              dragging: a,
            } = t;
            a
              ? (k.set(e), L.set(o), j("dragging"))
              : (k.set(0), L.set(0), j("project"));
          }),
          S = (0, i.G)(k, [500, 0, -500], [-4.36332, -2.79253, -1.91986]),
          H = (0, i.G)(L, [-500, 0, 500], [0.959931, 1.22173, 2.44346]),
          N = (0, r.z)(S, { stiffness: 200, damping: 20 }),
          U = (0, r.z)(H, { stiffness: 200, damping: 20 });
        return (
          (0, h.useEffect)(() => {
            C(!1);
          }, [m]),
          (0, h.useEffect)(() => {
            E
              ? ((0, c.i)(k, 0, { duration: 1.5 }),
                (0, c.i)(L, 0, { duration: 1.5 }))
              : ((0, c.i)(k, 100, { duration: 1.5 }),
                (0, c.i)(L, -200, { duration: 1.5 }));
          }, [E]),
          (0, a.jsxs)(l.P.div, {
            className:
              "absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-60%] md:translate-y-[-52%] isolate ".concat(
                d
                  ? "w-[130vw] h-[130vw] sm:r-w-[46] sm:r-h-[46]"
                  : "w-[32rem] h-[32rem] md:r-w-[54] md:r-h-[54]"
              ),
            children: [
              (0, a.jsx)("div", {
                className:
                  "draggable-area absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] z-10 touch-none",
                ...M(),
                onMouseEnter: () => j("project"),
                onMouseLeave: () => j("default"),
              }),
              (0, a.jsx)("a", {
                className: "image-wrapper-moving",  // Add a class for styling the wrapper div
                href: "/features", // Added the href attribute - replace with your
                children: (0, a.jsx)("img", {
                  src: "assets/_next/image/Ipad-Mockup.svg", // Replace with the path to your image
                  alt: "Static Image",
                  className: "mockup-image w-full h-full", // Adjust styles as needed
                }),
              }),
            ],
          })
        );
      };
    },
  },
]);

const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      const container = document.querySelector('.image-wrapper-moving');
      const image = document.querySelector('.mockup-image');

      if (container && image) {

        container.addEventListener('mousemove', (event) => {
          const { width, height, left, top } = container.getBoundingClientRect();
          const x = event.clientX - left - width / 2;
          const y = event.clientY - top - height / 2;

          const rotateX = (y / height) * 40;
          const rotateY = (x / width) * -40;

          image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        container.addEventListener('mouseleave', () => {
          image.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });

        // Stop observing once the elements are found
        observer.disconnect();
      }
    }
  }
});

// Start observing the document body for changes
observer.observe(document.body, { childList: true, subtree: true });

// Create a MutationObserver instance
const observer2 = new MutationObserver((mutationsList, observer) => {
  // Check if the target element exists in the DOM
  const divElement = document.querySelector('[aria-label="button.openMenu"]');
  if (divElement) {
    // Add a click event listener to the div
    divElement.addEventListener('click', () => {
      // Select the <a> element with both classes "mr-element-xs" and "text-xl"
      const anchorElement = document.querySelector('.mr-element-xs.text-xl');

      // Toggle the class "logo-opacity-handle" on the <a> element
      if (anchorElement) {
        anchorElement.classList.toggle('logo-opacity-handle');
      }
    });

    // Disconnect the observer once the target element is found and the listener is added
    observer2.disconnect();
  }
});

// Configure the observer to watch for changes in the entire document
observer2.observe(document, {
  childList: true, // Watch for added/removed child nodes
  subtree: true    // Watch the entire subtree of the document
});