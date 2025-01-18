"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6323],
  {
    8950: (e, t, n) => {
      n.r(t), n.d(t, { default: () => r });
      var l = n(74848),
        i = n(89160),
        s = n(67667),
        a = n(17938);
      let r = (e) => {
        let { fieldData: t } = e,
          [n, r, o] = (0, a.Mt)(t.name);
        return (0, l.jsxs)("button", {
          className:
            "freeform-field text-left relative py-4 flex-1 flex items-center justify-start r-gap-5 cursor-pointer outline-none",
          type: "button",
          onClick: () => o.setValue(!n.value),
          children: [
            (0, l.jsxs)("span", {
              htmlFor: t.name,
              className:
                "freeform-label body-text block -translate-y-[0.15rem]",
              children: [
                t.label,
                t.required &&
                  (0, l.jsx)("span", {
                    className: "freeform-required text-red",
                    children: "*",
                  }),
              ],
            }),
            (0, l.jsx)("div", {
              className:
                "w-[2.125rem] h-[0.875rem] bg-transparent border border-asphalt rounded-xl relative flex-shrink-0",
              children: (0, l.jsx)(i.P.div, {
                className:
                  "absolute top-1/2 left-0 w-[0.875rem] h-[0.875rem] bg-grey rounded-full border-2 border-white -translate-y-1/2",
                initial: { left: 0, x: "0%", y: "-50%", scale: 1.25 },
                animate: n.value
                  ? {
                      left: "100%",
                      x: "-100%",
                      y: "-50%",
                      scale: 1.66,
                      backgroundColor: "#222",
                    }
                  : {
                      left: 0,
                      x: "0",
                      scale: 0.9,
                      backgroundColor: "#767572",
                      y: "-50%",
                    },
                transition: { type: "spring", stiffness: 300, damping: 30 },
              }),
            }),
            (0, l.jsx)(s.N, {
              children:
                r.touched && r.error
                  ? (0, l.jsx)(i.P.div, {
                      className:
                        "freeform-error absolute left-0 top-full text-red w-full z-10",
                      initial: { opacity: 0, y: -10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: 10 },
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      },
                      children: r.error,
                    })
                  : null,
            }),
            t.description &&
              (0, l.jsx)("span", {
                className:
                  "freeform-description absolute right-0 top-full text-xs text-grey",
                children: t.description,
              }),
          ],
        });
      };
    },
    56323: (e, t, n) => {
      n.r(t), n.d(t, { default: () => z });
      var l = n(74848),
        i = n(96540),
        s = n(86715),
        a = n(62730),
        r = n(67667),
        o = n(89160),
        d = n(17938),
        c = n(12664),
        u = n(32578),
        p = n(96836),
        m = n(23820),
        f = n.n(m),
        x = n(44641),
        h = n(27813),
        b = n(94203),
        y = n(22360),
        v = n(3027),
        g = n(14953),
        j = n.n(g);
      let w = j()(() => n.e(6096).then(n.bind(n, 36096)), {
          loadableGenerated: { webpack: () => [36096] },
        }),
        N = j()(() => n.e(2809).then(n.bind(n, 2809)), {
          loadableGenerated: { webpack: () => [2809] },
        }),
        T = j()(() => n.e(35).then(n.bind(n, 20035)), {
          loadableGenerated: { webpack: () => [20035] },
        }),
        k = j()(() => Promise.resolve().then(n.bind(n, 8950)), {
          loadableGenerated: { webpack: () => [8950] },
        }),
        C = j()(() => n.e(2624).then(n.bind(n, 70243)), {
          loadableGenerated: { webpack: () => [70243] },
        }),
        S = j()(() => n.e(8459).then(n.bind(n, 48459)), {
          loadableGenerated: { webpack: () => [48459] },
        }),
        E = j()(
          () =>
            Promise.all([n.e(8150), n.e(1833), n.e(5844), n.e(9349)]).then(
              n.bind(n, 99349)
            ),
          { loadableGenerated: { webpack: () => [99349] } }
        ),
        P = {
          single_line_text: w,
          multi_line_text: N,
          email: w,
          dropdown: T,
          single_checkbox: k,
          multiple_checkboxes: C,
          radio: S,
          file: j()(
            () => Promise.all([n.e(1489), n.e(313)]).then(n.bind(n, 80313)),
            { loadableGenerated: { webpack: () => [80313] } }
          ),
          datepicker: E,
          phone: w,
          mobile_phone: w,
        },
        q = (e) => {
          let { field: t } = e,
            n = P[t.fieldType];
          return (0, l.jsx)("div", {
            className: "freeform-field-wrapper relative flex-1 field-type-"
              .concat(t.fieldType)
              .concat(t.hidden ? " hidden" : ""),
            children: n
              ? (0, l.jsx)(n, { fieldData: t })
              : "Field type ".concat(t.fieldType, " not implemented"),
          });
        };
      var M = n(8950);
      let O = (e) => {
        let { consent: t } = e;
        return t
          ? (0, l.jsxs)("div", {
              className: "consent",
              children: [
                t.communicationConsentText &&
                  (0, l.jsx)("div", {
                    className: "intro-text text-xs text-grey wysiwyg mb-6",
                    children: (0, l.jsx)(b.A, {
                      content: t.communicationConsentText,
                    }),
                  }),
                t.communicationsCheckboxes.map((e, t) =>
                  (0, l.jsx)(
                    M.default,
                    {
                      fieldData: {
                        ...e,
                        name: "consent[".concat(e.subscriptionTypeId, "]"),
                      },
                    },
                    t
                  )
                ),
                t.consentToProcessText &&
                  (0, l.jsx)("div", {
                    className:
                      "consent-to-process-text text-xs text-grey wysiwyg mt-6",
                    children: (0, l.jsx)(b.A, {
                      content: t.consentToProcessText,
                    }),
                  }),
                t.privacyText &&
                  (0, l.jsx)("div", {
                    className: "privacy-text text-xs text-grey wysiwyg mt-3",
                    children: (0, l.jsx)(b.A, { content: t.privacyText }),
                  }),
              ],
            })
          : null;
      };
      var I = n(31370);
      p.os.registerPlugin(f());
      let _ = (0, I.WQ)("ui")((e) => {
        let { data: t, close: n, ui: a } = e,
          p = (0, y.y)(),
          m = (0, s.useRouter)(),
          f = (0, u.useTranslations)("common"),
          g = (0, h.HO)(t),
          {
            initialValues: j,
            currentValidationSchema: w,
            fieldConfig: N,
          } = (0, i.useMemo)(() => {
            var e, t, n, l;
            let i = {},
              s = {},
              a = {};
            if (
              (g.fieldGroups.forEach((e) => {
                e.fields &&
                  e.fields.forEach((e) => {
                    e.name &&
                      ((a[e.name] = e),
                      (i[e.name] = e.defaultValue || ""),
                      "email" === e.fieldType
                        ? (s[e.name] = c.string().email(f("form.invalidEmail")))
                        : "phone" === e.fieldType ||
                          "mobile_phone" === e.fieldType
                        ? (s[e.name] = c
                            .string()
                            .matches(/^[\d\s()+-]*$/, f("form.invalidPhone")))
                        : "single_checkbox" === e.fieldType
                        ? ((s[e.name] = c.boolean()),
                          e.required &&
                            s[e.name] &&
                            (s[e.name] = s[e.name].oneOf(
                              [!0],
                              f("form.required")
                            )),
                          (i[e.name] = !!e.defaultValue && e.defaultValue))
                        : "multiple_checkboxes" === e.fieldType
                        ? (s[e.name] = c.array().of(c.string()).nullable())
                        : "datepicker" === e.fieldType
                        ? (s[e.name] = c
                            .date()
                            .transform(function (e, t) {
                              if (this.isType(e)) return e;
                              let n = x.c9.fromFormat(t, "dd/MM/yyyy");
                              return n.isValid ? n.toJSDate() : null;
                            })
                            .nullable())
                        : "file" === e.fieldType &&
                          (s[e.name] = c
                            .mixed()
                            .test(
                              "fileSize",
                              f("form.fileSize", { maxFileSizeKB: 20480 }),
                              (e) =>
                                !e || !(e.length > 0) || e[0].size < 5242880
                            )),
                      e.required && s[e.name]
                        ? (s[e.name] = s[e.name].required(f("form.required")))
                        : e.required &&
                          (s[e.name] = c
                            .string()
                            .required(f("form.required"))));
                  });
              }),
              (null === (e = g.legalConsentOptions) || void 0 === e
                ? void 0
                : e.type) !== "none")
            ) {
              i.consent = {};
              let e = {};
              null === (l = g.legalConsentOptions) ||
                void 0 === l ||
                null === (n = l.communicationsCheckboxes) ||
                void 0 === n ||
                n.forEach((t) => {
                  (i.consent[t.subscriptionTypeId] = !1),
                    t.required &&
                      (e[t.subscriptionTypeId] = c
                        .boolean()
                        .oneOf([!0], f("form.required")));
                }),
                (s.consent = c.object().shape(e));
            }
            return {
              initialValues: i,
              currentValidationSchema: () => c.object().shape(s),
              fieldConfig: a,
              successMessage:
                (null === (t = g.configuration) || void 0 === t
                  ? void 0
                  : t.postSubmitAction) || f("form.successMessage"),
            };
          }, [g, f]);
        return (0, l.jsx)(d.l1, {
          initialValues: j,
          validationSchema: w(),
          onSubmit: async (e, t) => {
            let { setSubmitting: l, setStatus: i, setErrors: s } = t;
            l(!0);
            let r = new FormData(),
              o = [];
            Object.entries(e).forEach((t) => {
              let [n, l] = t;
              if ("consent" === n) {
                var i, s, a;
                let t = {
                  consent: {
                    consentToProcess: !0,
                    text:
                      null === (i = g.legalConsentOptions) || void 0 === i
                        ? void 0
                        : i.consentToProcessText,
                    communicationChannels:
                      null === (a = g.legalConsentOptions) || void 0 === a
                        ? void 0
                        : null === (s = a.communicationsCheckboxes) ||
                          void 0 === s
                        ? void 0
                        : s.map((t) => ({
                            subscriptionTypeId: t.subscriptionTypeId,
                            value: e.consent[t.subscriptionTypeId],
                          })),
                  },
                };
                r.append("consent", JSON.stringify(t));
              } else
                Array.isArray(l)
                  ? l[0] instanceof File
                    ? (o.push({
                        name: n,
                        value: "",
                        objectTypeId: N[n].objectTypeId,
                      }),
                      l.forEach(async (e) => {
                        r.append(n, e);
                      }))
                    : o.push({
                        name: n,
                        value: l.join(";"),
                        objectTypeId: N[n].objectTypeId,
                      })
                  : o.push({
                      name: n,
                      value: l,
                      objectTypeId: N[n].objectTypeId,
                    });
            }),
              r.append("fields", JSON.stringify(o)),
              r.append(
                "context",
                JSON.stringify({
                  pageUri: window.location.href,
                  pageName: document.title,
                })
              );
            try {
              let e = await fetch(
                "/api/hubspot-forms-submit?id=".concat(g.id),
                { method: "POST", body: r }
              );
              if (e.ok) {
                let t = await e.json();
                if (t.success) {
                  var d, c, u, x;
                  p("formSubmitted", { formId: g.id }),
                    (
                      null == e
                        ? void 0
                        : null === (d = e.response) || void 0 === d
                        ? void 0
                        : d.redirectUrl
                    )
                      ? m.push(
                          null == e
                            ? void 0
                            : null === (c = e.response) || void 0 === c
                            ? void 0
                            : c.redirectUrl
                        )
                      : (i({
                          success:
                            (null === (x = g.configuration) || void 0 === x
                              ? void 0
                              : null === (u = x.postSubmitAction) ||
                                void 0 === u
                              ? void 0
                              : u.value) || f("form.successMessage"),
                        }),
                        l(!1),
                        n &&
                          setTimeout(() => {
                            n(), a.closeModal();
                          }, 5e3));
                } else l(!1), s({ api: t.message });
              } else {
                let t = await e.json();
                l(!1), s({ api: t.message });
              }
            } catch (e) {
              l(!1), s({ api: e.message });
            }
          },
          children: (e) => {
            var t, n;
            let { isSubmitting: i, status: s, errors: a } = e;
            return (0, l.jsxs)(d.lV, {
              className: "r-mt-10",
              children: [
                (0, l.jsxs)(r.N, {
                  children: [
                    (null == a ? void 0 : a.api) &&
                      (0, l.jsx)(
                        o.P.div,
                        {
                          initial: { opacity: 0, y: -50 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: 50 },
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          },
                          className:
                            "bg-red bg-opacity-10 border border-red text-red px-4 py-3 rounded relative wysiwyg r-mb-8",
                          role: "alert",
                          children: (0, l.jsx)(b.A, {
                            content: null == a ? void 0 : a.api,
                          }),
                        },
                        "apiError"
                      ),
                    (null == s ? void 0 : s.success) &&
                      (0, l.jsx)(
                        o.P.div,
                        {
                          initial: { opacity: 0, y: -50 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: 50 },
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          },
                          className:
                            "bg-green bg-opacity-10 border border-forest text-forest px-4 py-3 rounded relative wysiwyg r-mb-8",
                          role: "alert",
                          children: (0, l.jsx)(b.A, {
                            content: null == s ? void 0 : s.success,
                          }),
                        },
                        "successMessage"
                      ),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "flex flex-col r-gap-5 w-full",
                  children: [
                    g.fieldGroups.map((e, t) => {
                      var n, i;
                      return (0, l.jsxs)(
                        "div",
                        {
                          className: "flex flex-col r-gap-5",
                          children: [
                            e.richText &&
                              (0, l.jsx)("div", {
                                className: "w-full wysiwyg",
                                children: (0, l.jsx)(b.A, {
                                  content: e.richText,
                                }),
                              }),
                            (null === (n = e.fields) || void 0 === n
                              ? void 0
                              : n.length) > 0 &&
                              (0, l.jsx)(
                                "div",
                                {
                                  className:
                                    "flex flex-col md:flex-row r-gap-5",
                                  children:
                                    null === (i = e.fields) || void 0 === i
                                      ? void 0
                                      : i.map((e) =>
                                          (0, l.jsx)(q, { field: e }, e.name)
                                        ),
                                },
                                t
                              ),
                          ],
                        },
                        t
                      );
                    }),
                    (null === (t = g.legalConsentOptions) || void 0 === t
                      ? void 0
                      : t.type) !== "none" &&
                      (0, l.jsx)(O, { consent: g.legalConsentOptions }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "flex justify-between r-gap-8 w-full r-mt-8",
                  children: (0, l.jsx)(v.A, {
                    type: "submit",
                    Icon: () =>
                      (0, l.jsx)("svg", {
                        viewBox: "0 0 13 13",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, l.jsx)("path", {
                          d: "M12 1L2 4.33333L6.62963 6.37037M12 1L8.66667 11L6.62963 6.37037M12 1L6.62963 6.37037",
                          strokeWidth: 10,
                        }),
                      }),
                    className: "ml-auto",
                    disabled: i,
                    children:
                      (null === (n = g.displayOptions) || void 0 === n
                        ? void 0
                        : n.submitButtonText) || f("form.submit"),
                  }),
                }),
              ],
            });
          },
        });
      });
      function A(e) {
        let t = e.split("-");
        return t.length > 1
          ? ((t[1] = t[1].startsWith(" ") ? t[1].substring(1) : t[1]),
            t.slice(1).join("-"))
          : e;
      }
      let L = (e) => {
          let {
              forms: t,
              className: n,
              value: s,
              defaultValue: a,
              onChange: r,
            } = e,
            d = (0, i.useRef)(null),
            [c, u] = (0, i.useState)(!1),
            [p, m] = (0, i.useState)(480);
          return (
            (0, i.useEffect)(() => {
              if (!d.current) return;
              let e = (e) => {
                d.current.contains(e.target) || u(!1);
              };
              return (
                document.addEventListener("click", e),
                () => {
                  document.removeEventListener("click", e);
                }
              );
            }, [d]),
            (0, l.jsx)("div", {
              className: "".concat(n, " relative language-switcher z-50"),
              ref: d,
              children: (0, l.jsxs)("div", {
                className: "inner relative inline-block",
                children: [
                  (0, l.jsxs)("button", {
                    className:
                      "flex items-center gap-2 border rounded-[6.25rem] r-px-4 py-2 text-asphalt border-asphalt",
                    onClick: () => {
                      u(!c);
                      let { bottom: e } = d.current.getBoundingClientRect();
                      m(window.innerHeight - e - 16 - 20);
                    },
                    children: [
                      (0, l.jsx)("span", {
                        className: "",
                        children: s ? A(t[s].name) : a,
                      }),
                      (0, l.jsx)("span", {
                        className:
                          "icon-wrapper rounded-full w-4 h-4 flex-shrink-0 inline-flex items-center justify-center",
                        children: (0, l.jsx)("svg", {
                          width: "10",
                          height: "6",
                          viewBox: "0 0 10 6",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "fill-current",
                          children: (0, l.jsx)("path", {
                            d: "M5 6L0.669872 0.750001L9.33013 0.75L5 6Z",
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)(o.P.div, {
                    className:
                      "dropdown-options absolute top-full left-1/2 -translate-x-1/2 h-full bg-white border border-grey-border overflow-hidden r-w-[18] r-mb-4 rounded-sm",
                    initial: "collapsed",
                    style: { maxHeight: p },
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
                        ? (d.current.querySelector(
                            ".dropdown-options"
                          ).style.overflow = window.matchMedia(
                            "(max-width: 640px)"
                          ).matches
                            ? "scroll"
                            : "auto")
                        : (d.current.querySelector(
                            ".dropdown-options"
                          ).style.overflow = "hidden");
                    },
                    children: (0, l.jsx)("div", {
                      className: "inner r-p-6 flex flex-col",
                      children: t.map((e, t) =>
                        (0, l.jsxs)(
                          "button",
                          {
                            className:
                              "flex items-center gap-2 justify-start w-full h-ful py-3 border-b last:border-b-0 r-text-sm group ".concat(
                                t == s
                                  ? " text-forest border-asphalt"
                                  : " text-asphalt border-grey-border",
                                " }"
                              ),
                            onClick: () => {
                              u(!1), r(t);
                            },
                            children: [
                              (0, l.jsx)("span", {
                                className:
                                  "radio w-4 h-4 rounded-full border border-current inline-flex items-center justify-center",
                                children: (0, l.jsx)("span", {
                                  className:
                                    "radio-inner w-2 h-2 rounded-full bg-asphalt ".concat(
                                      t == s ? "opacity-100" : "opacity-0",
                                      " transition-opacity duration-200"
                                    ),
                                }),
                              }),
                              (0, l.jsx)("span", { children: A(e.name) }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        G = (e) => {
          let { forms: t, closeCallback: n } = e,
            [s, a] = (0, i.useState)(0);
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)(r.N, {
              initial: !1,
              mode: "wait",
              children: (0, l.jsxs)(
                o.P.div,
                {
                  initial: "collapsed",
                  animate: "open",
                  exit: "exit",
                  variants: {
                    open: { x: 0, opacity: 1 },
                    collapsed: { x: "-25%", opacity: 0 },
                    exit: { x: "25%", opacity: 0 },
                  },
                  transition: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
                  children: [
                    (null == t ? void 0 : t.length) > 1 &&
                      (0, l.jsx)(L, {
                        forms: t,
                        onChange: a,
                        className: "r-mb-10",
                        value: s,
                      }),
                    (0, l.jsx)(_, { data: t[s], close: n }),
                  ],
                },
                s
              ),
            }),
          });
        },
        V = (e) => {
          var t;
          let { forms: n, closeCallback: s } = e,
            [a, d] = (0, i.useState)(null),
            [c, u] = (0, i.useState)({});
          return (
            (0, i.useEffect)(() => {
              let { hash: e } = window.location,
                t = document.querySelector('a[href*="'.concat(e, '"]')),
                n = null == t ? void 0 : t.title,
                [l, i, s] = (null == n ? void 0 : n.split("|")) || [];
              u({ title: l, note: i, button: s });
            }, [n]),
            (0, l.jsx)(r.N, {
              initial: !1,
              mode: "wait",
              children: (0, l.jsx)(
                o.P.div,
                {
                  initial: "collapsed",
                  animate: "open",
                  exit: "exit",
                  variants: {
                    open: { x: 0, opacity: 1 },
                    collapsed: { x: "-25%", opacity: 0 },
                    exit: { x: "25%", opacity: 0 },
                  },
                  transition: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
                  children:
                    null === a
                      ? (0, l.jsx)("div", {
                          className:
                            "min-h-[60svh] flex items-center justify-center w-full",
                          children: (0, l.jsxs)("div", {
                            className:
                              "inner r-max-w-[40] w-full text-center flex flex-col items-center",
                            children: [
                              (null == c ? void 0 : c.title) &&
                                (0, l.jsx)("h2", {
                                  className: "h2-text-alt mb-4",
                                  children: null == c ? void 0 : c.title,
                                }),
                              (null == c ? void 0 : c.note) &&
                                (0, l.jsx)("p", {
                                  className: "r-mb-10 r-text-lg text-grey",
                                  children: null == c ? void 0 : c.note,
                                }),
                              (0, l.jsx)(L, {
                                forms: n,
                                onChange: d,
                                className: "r-mb-10",
                                defaultValue: c.button,
                                value: a,
                              }),
                            ],
                          }),
                        })
                      : (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)("h2", {
                              className: "h2-text-alt r-mb-5",
                              children: (function (e) {
                                let t = e.split("-");
                                return t.length > 1
                                  ? ((t[1] = t[1].startsWith(" ")
                                      ? t[1].substring(1)
                                      : t[1]),
                                    t.slice(1).join("-"))
                                  : e;
                              })(n[a].name),
                            }),
                            (null == n ? void 0 : n.length) > 1 &&
                              (0, l.jsx)(L, {
                                forms: n,
                                onChange: d,
                                className: "r-mb-10",
                                defaultValue: c.button,
                                value: a,
                              }),
                            (0, l.jsx)(_, { data: n[a], close: s }),
                          ],
                        }),
                },
                (null === (t = n[a]) || void 0 === t ? void 0 : t.id) ||
                  "splash"
              ),
            })
          );
        },
        F = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return fetch("".concat(e, "?id=").concat(t.join(","))).then((e) =>
            e.json()
          );
        },
        z = (0, I.WQ)("ui")((e) => {
          let { ui: t } = e,
            n = (0, s.useRouter)(),
            [r, o] = (0, i.useState)([]),
            { data: d } = (0, a.Ay)(
              (null == r ? void 0 : r.length) > 0
                ? ["/api/hubspot-forms", r]
                : null,
              (e) => {
                let [t, n] = e;
                return F(t, n);
              }
            );
          return (
            (0, i.useEffect)(() => {
              let e = () => {
                let { hash: e } = window.location;
                if (null == e ? void 0 : e.includes("hubspot")) {
                  let [, ...t] = e.split("/");
                  o(t);
                } else o(null);
              };
              return (
                e(),
                window.addEventListener("hashchange", e),
                () => {
                  window.removeEventListener("hashchange", e);
                }
              );
            }, [n]),
            (0, i.useEffect)(() => {
              if ((null == d ? void 0 : d.length) > 0) {
                let e = () => {
                  (window.location.hash = ""), o([]);
                };
                t.openModal({
                  content:
                    (null == d ? void 0 : d.length) > 1
                      ? (0, l.jsx)(V, { forms: d, closeCallback: e })
                      : (0, l.jsx)(G, { forms: d, closeCallback: e }),
                  closeCallback: e,
                });
              }
            }, [d, t]),
            null
          );
        });
    },
  },
]);
