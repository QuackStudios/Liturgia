"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1582],
  {
    51582: (e, t, n) => {
      n.r(t), n.d(t, { default: () => s });
      var c = n(74848),
        l = n(96540),
        a = n(86715);
      let s = (0, n(31370).WQ)("ui")((e) => {
        let { ui: t } = e,
          n = (0, a.useRouter)();
        return (
          (0, l.useEffect)(() => {
            let e = async () => {
              let { hash: e } = window.location;
              if (null == e ? void 0 : e.includes("jumptech")) {
                let [, n] = e.split("-"),
                  l = document.createElement("script");
                (l.src =
                  "https://forms.jumptech.co.uk/zaptec/frm_embed/".concat(n)),
                  (l.async = !0),
                  t.openModal({
                    content: (0, c.jsx)("div", {
                      ref: (e) => {
                        e && e.appendChild(l);
                      },
                    }),
                    closeCallback: () => {
                      window.location.hash = "";
                    },
                  });
              }
            };
            return (
              t.modal.open || e(),
              window.addEventListener("hashchange", e),
              () => {
                window.removeEventListener("hashchange", e);
              }
            );
          }, [n, t]),
          null
        );
      });
    },
  },
]);
