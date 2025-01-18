(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7491],
  {
    80909: (e, t, r) => {
      var n = r(30641),
        i = r(38329)(n);
      e.exports = i;
    },
    86649: (e, t, r) => {
      var n = r(83221)();
      e.exports = n;
    },
    30641: (e, t, r) => {
      var n = r(86649),
        i = r(95950);
      e.exports = function (e, t) {
        return e && n(e, t, i);
      };
    },
    24066: (e, t, r) => {
      var n = r(83488);
      e.exports = function (e) {
        return "function" == typeof e ? e : n;
      };
    },
    38329: (e, t, r) => {
      var n = r(64894);
      e.exports = function (e, t) {
        return function (r, i) {
          if (null == r) return r;
          if (!n(r)) return e(r, i);
          for (
            var o = r.length, u = t ? o : -1, s = Object(r);
            (t ? u-- : ++u < o) && !1 !== i(s[u], u, s);

          );
          return r;
        };
      };
    },
    83221: (e) => {
      e.exports = function (e) {
        return function (t, r, n) {
          for (var i = -1, o = Object(t), u = n(t), s = u.length; s--; ) {
            var a = u[e ? s : ++i];
            if (!1 === r(o[a], a, o)) break;
          }
          return t;
        };
      };
    },
    39754: (e, t, r) => {
      var n = r(83729),
        i = r(80909),
        o = r(24066),
        u = r(56449);
      e.exports = function (e, t) {
        return (u(e) ? n : i)(e, o(t));
      };
    },
    83488: (e) => {
      e.exports = function (e) {
        return e;
      };
    },
    12762: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          ApolloCache: () => c.k,
          ApolloClient: () => i.R,
          ApolloConsumer: () => z,
          ApolloError: () => a.K4,
          ApolloLink: () => h.C,
          ApolloProvider: () => V.X,
          Cache: () => n,
          DocumentTransform: () => j.c,
          DocumentType: () => W.KG,
          HttpLink: () => R.P,
          InMemoryCache: () => l.D,
          MissingFieldError: () => f.Z,
          NetworkStatus: () => s.pT,
          Observable: () => Q.c,
          ObservableQuery: () => u.U5,
          checkFetcher: () => E.S,
          concat: () => g,
          createHttpLink: () => D.$,
          createQueryPreloader: () => eL,
          createSignalIfSupported: () => O,
          defaultDataIdFromObject: () => d.or,
          defaultPrinter: () => w.i1,
          disableExperimentalFragmentVariables: () => N.qj,
          disableFragmentWarnings: () => N.gi,
          empty: () => b,
          enableExperimentalFragmentVariables: () => N.VC,
          execute: () => C.g,
          fallbackHttpConfig: () => w.R4,
          from: () => y.H,
          fromError: () => _.N,
          fromPromise: () => x,
          getApolloContext: () => K.l,
          gql: () => N.J1,
          isApolloError: () => a.Mn,
          isNetworkRequestSettled: () => s.D2,
          isReference: () => L.A_,
          makeReference: () => L.WU,
          makeVar: () => p.UT,
          mergeOptions: () => o.l,
          operationName: () => W.Xn,
          parseAndCheckHttpResponse: () => k.OQ,
          parser: () => W.K3,
          resetApolloContext: () => K.E,
          resetCaches: () => N.Nh,
          rewriteURIForGET: () => T.E,
          selectHttpOptionsAndBody: () => w.Wz,
          selectHttpOptionsAndBodyInternal: () => w.HY,
          selectURI: () => S.z,
          serializeFetchParameter: () => P.Y,
          setLogVerbosity: () => A.Q9,
          skipToken: () => ew,
          split: () => m,
          throwServerError: () => q.A,
          toPromise: () => M,
          useApolloClient: () => H.m,
          useBackgroundQuery: () => eR,
          useFragment: () => ei,
          useLazyQuery: () => U._,
          useLoadableQuery: () => eQ,
          useMutation: () => Y.n,
          useQuery: () => B.I,
          useQueryRefHandlers: () => ex,
          useReactiveVar: () => J,
          useReadQuery: () => eq,
          useSubscription: () => X,
          useSuspenseQuery: () => eE,
        });
      var n,
        i = r(61169),
        o = r(60144),
        u = r(54242),
        s = r(88599),
        a = r(9211);
      n || (n = {});
      var c = r(77666),
        l = r(64056),
        f = r(24253),
        d = r(73194),
        p = r(90738),
        v = r(10187),
        h = r(31673),
        b = h.C.empty,
        y = r(42548),
        m = h.C.split,
        g = h.C.concat,
        C = r(74081),
        k = r(12683),
        P = r(49192),
        w = r(84594),
        E = r(83438),
        O = function () {
          if ("undefined" == typeof AbortController)
            return { controller: !1, signal: !1 };
          var e = new AbortController(),
            t = e.signal;
          return { controller: e, signal: t };
        },
        S = r(88039),
        D = r(22757),
        R = r(94537),
        T = r(9162),
        _ = r(86092);
      function M(e) {
        var t = !1;
        return new Promise(function (r, n) {
          e.subscribe({
            next: function (e) {
              t ? !1 !== globalThis.__DEV__ && v.V1.warn(42) : ((t = !0), r(e));
            },
            error: n,
          });
        });
      }
      var Q = r(73401);
      function x(e) {
        return new Q.c(function (t) {
          e.then(function (e) {
            t.next(e), t.complete();
          }).catch(t.error.bind(t));
        });
      }
      var q = r(64251),
        j = r(29993),
        L = r(67194),
        A = r(72232),
        N = r(2135);
      (0, A.Q9)(!1 !== globalThis.__DEV__ ? "log" : "silent");
      var V = r(28797),
        I = r(27243),
        F = r.t(I, 2),
        K = r(6741),
        z = function (e) {
          var t = (0, K.l)();
          return I.createElement(t.Consumer, null, function (t) {
            return (0, v.V1)(t && t.client, 44), e.children(t.client);
          });
        },
        H = r(70111),
        U = r(77969),
        Y = r(95420),
        B = r(1723),
        G = r(15381),
        W = r(75443);
      function X(e, t) {
        var r = I.useRef(!1),
          n = (0, H.m)(null == t ? void 0 : t.client);
        (0, W.D$)(e, W.KG.Subscription);
        var i = I.useState({
            loading: !(null == t ? void 0 : t.skip),
            error: void 0,
            data: void 0,
            variables: null == t ? void 0 : t.variables,
          }),
          o = i[0],
          u = i[1];
        !r.current &&
          ((r.current = !0),
          (null == t ? void 0 : t.onSubscriptionData) &&
            !1 !== globalThis.__DEV__ &&
            v.V1.warn(t.onData ? 52 : 53),
          (null == t ? void 0 : t.onSubscriptionComplete) &&
            !1 !== globalThis.__DEV__ &&
            v.V1.warn(t.onComplete ? 54 : 55));
        var s = I.useState(function () {
            return (null == t ? void 0 : t.skip)
              ? null
              : n.subscribe({
                  query: e,
                  variables: null == t ? void 0 : t.variables,
                  fetchPolicy: null == t ? void 0 : t.fetchPolicy,
                  context: null == t ? void 0 : t.context,
                });
          }),
          a = s[0],
          c = s[1],
          l = I.useRef(!1);
        I.useEffect(function () {
          return function () {
            l.current = !0;
          };
        }, []);
        var f = I.useRef({ client: n, subscription: e, options: t });
        return (
          I.useEffect(
            function () {
              var r,
                i,
                o,
                s,
                a = null == t ? void 0 : t.shouldResubscribe;
              "function" == typeof a && (a = !!a(t)),
                (null == t ? void 0 : t.skip)
                  ? (!(null == t ? void 0 : t.skip) !=
                      !(null === (r = f.current.options) || void 0 === r
                        ? void 0
                        : r.skip) ||
                      l.current) &&
                    (u({
                      loading: !1,
                      data: void 0,
                      error: void 0,
                      variables: null == t ? void 0 : t.variables,
                    }),
                    c(null),
                    (l.current = !1))
                  : ((!1 !== a &&
                      (n !== f.current.client ||
                        e !== f.current.subscription ||
                        (null == t ? void 0 : t.fetchPolicy) !==
                          (null === (i = f.current.options) || void 0 === i
                            ? void 0
                            : i.fetchPolicy) ||
                        !(null == t ? void 0 : t.skip) !=
                          !(null === (o = f.current.options) || void 0 === o
                            ? void 0
                            : o.skip) ||
                        !(0, G.L)(
                          null == t ? void 0 : t.variables,
                          null === (s = f.current.options) || void 0 === s
                            ? void 0
                            : s.variables
                        ))) ||
                      l.current) &&
                    (u({
                      loading: !0,
                      data: void 0,
                      error: void 0,
                      variables: null == t ? void 0 : t.variables,
                    }),
                    c(
                      n.subscribe({
                        query: e,
                        variables: null == t ? void 0 : t.variables,
                        fetchPolicy: null == t ? void 0 : t.fetchPolicy,
                        context: null == t ? void 0 : t.context,
                      })
                    ),
                    (l.current = !1)),
                Object.assign(f.current, {
                  client: n,
                  subscription: e,
                  options: t,
                });
            },
            [n, e, t, l.current]
          ),
          I.useEffect(
            function () {
              if (a) {
                var e = !1,
                  r = a.subscribe({
                    next: function (r) {
                      if (!e) {
                        var i,
                          o,
                          s = {
                            loading: !1,
                            data: r.data,
                            error: void 0,
                            variables: null == t ? void 0 : t.variables,
                          };
                        u(s),
                          (
                            null === (i = f.current.options) || void 0 === i
                              ? void 0
                              : i.onData
                          )
                            ? f.current.options.onData({ client: n, data: s })
                            : (null === (o = f.current.options) || void 0 === o
                                ? void 0
                                : o.onSubscriptionData) &&
                              f.current.options.onSubscriptionData({
                                client: n,
                                subscriptionData: s,
                              });
                      }
                    },
                    error: function (r) {
                      var n, i;
                      e ||
                        (u({
                          loading: !1,
                          data: void 0,
                          error: r,
                          variables: null == t ? void 0 : t.variables,
                        }),
                        null ===
                          (i =
                            null === (n = f.current.options) || void 0 === n
                              ? void 0
                              : n.onError) ||
                          void 0 === i ||
                          i.call(n, r));
                    },
                    complete: function () {
                      var t, r;
                      !e &&
                        ((
                          null === (t = f.current.options) || void 0 === t
                            ? void 0
                            : t.onComplete
                        )
                          ? f.current.options.onComplete()
                          : (null === (r = f.current.options) || void 0 === r
                              ? void 0
                              : r.onSubscriptionComplete) &&
                            f.current.options.onSubscriptionComplete());
                    },
                  });
                return function () {
                  (e = !0),
                    setTimeout(function () {
                      r.unsubscribe();
                    });
                };
              }
            },
            [a]
          ),
          o
        );
      }
      var $ = r(19770);
      function J(e) {
        return (0, $.r)(
          I.useCallback(
            function (t) {
              return e.onNextChange(function r() {
                t(), e.onNextChange(r);
              });
            },
            [e]
          ),
          e,
          e
        );
      }
      var Z = r(31635),
        ee = r(92922),
        et = r(68481);
      function er(e, t) {
        var r = I.useRef();
        return (
          (r.current && (0, G.L)(r.current.deps, t)) ||
            (r.current = { value: e(), deps: t }),
          r.current.value
        );
      }
      var en = {};
      function ei(e) {
        return (0, et.Y)("useFragment", eo, (0, H.m)(e.client))(e);
      }
      function eo(e) {
        var t,
          r,
          n = (0, H.m)(e.client).cache,
          i = er(
            function () {
              var t = e.fragment,
                r = e.fragmentName,
                i = e.from,
                o = e.optimistic,
                u = (0, Z.Tt)(e, [
                  "fragment",
                  "fragmentName",
                  "from",
                  "optimistic",
                ]);
              return (0, Z.Cl)((0, Z.Cl)({}, u), {
                returnPartialData: !0,
                id: "string" == typeof i ? i : n.identify(i),
                query: n.getFragmentDoc(t, r),
                optimistic: void 0 === o || o,
              });
            },
            [e]
          ),
          o =
            ((t = function () {
              return eu(n.diff(i));
            }),
            (r = I.useRef(en)).current === en && (r.current = t()),
            r),
          u = I.useCallback(function () {
            return o.current;
          }, []);
        return (0, $.r)(
          I.useCallback(
            function (e) {
              var t = 0,
                r = n.watch(
                  (0, Z.Cl)((0, Z.Cl)({}, i), {
                    immediate: !0,
                    callback: function (r) {
                      (0, G.L)(r.result, o.current.data) ||
                        ((o.current = eu(r)),
                        clearTimeout(t),
                        (t = setTimeout(e)));
                    },
                  })
                );
              return function () {
                r(), clearTimeout(t);
              };
            },
            [n, i]
          ),
          u,
          u
        );
      }
      function eu(e) {
        var t = { data: e.result, complete: !!e.complete };
        return (
          e.missing &&
            (t.missing = (0, ee.IM)(
              e.missing.map(function (e) {
                return e.missing;
              })
            )),
          t
        );
      }
      var es = r(45636);
      function ea(e) {
        var t = Promise.resolve(e);
        return (t.status = "fulfilled"), (t.value = e), t;
      }
      function ec(e) {
        return (
          "status" in e ||
            ((e.status = "pending"),
            e.then(
              function (t) {
                "pending" === e.status &&
                  ((e.status = "fulfilled"), (e.value = t));
              },
              function (t) {
                "pending" === e.status &&
                  ((e.status = "rejected"), (e.reason = t));
              }
            )),
          e
        );
      }
      var el =
          F.use ||
          function (e) {
            var t = ec(e);
            switch (t.status) {
              case "pending":
                throw t;
              case "rejected":
                throw t.reason;
              case "fulfilled":
                return t.value;
            }
          },
        ef = r(32453),
        ed = r(2619),
        ep = Symbol(),
        ev = Symbol();
      function eh(e) {
        var t,
          r =
            (((t = {
              toPromise: function () {
                return eb(r).then(function () {
                  return r;
                });
              },
            })[ep] = e),
            (t[ev] = e.promise),
            t);
        return r;
      }
      function eb(e) {
        var t = e[ep];
        return "fulfilled" === t.promise.status ? t.promise : e[ev];
      }
      var ey = [
          "canonizeResults",
          "context",
          "errorPolicy",
          "fetchPolicy",
          "refetchWritePolicy",
          "returnPartialData",
        ],
        em = (function () {
          function e(e, t) {
            var r = this;
            (this.key = {}),
              (this.listeners = new Set()),
              (this.references = 0),
              (this.handleNext = this.handleNext.bind(this)),
              (this.handleError = this.handleError.bind(this)),
              (this.dispose = this.dispose.bind(this)),
              (this.observable = e),
              t.onDispose && (this.onDispose = t.onDispose),
              this.setResult(),
              this.subscribeToQuery();
            var n = function () {
              var e;
              r.references ||
                (r.autoDisposeTimeoutId = setTimeout(
                  r.dispose,
                  null !== (e = t.autoDisposeTimeoutMs) && void 0 !== e
                    ? e
                    : 3e4
                ));
            };
            this.promise.then(n, n);
          }
          return (
            Object.defineProperty(e.prototype, "disposed", {
              get: function () {
                return this.subscription.closed;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "watchQueryOptions", {
              get: function () {
                return this.observable.options;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.reinitialize = function () {
              var e = this.observable,
                t = this.watchQueryOptions.fetchPolicy;
              try {
                if (
                  ("no-cache" !== t
                    ? (e.resetLastResults(),
                      e.silentSetOptions({ fetchPolicy: "cache-first" }))
                    : e.silentSetOptions({ fetchPolicy: "standby" }),
                  this.subscribeToQuery(),
                  "no-cache" === t)
                )
                  return;
                e.resetDiff(), this.setResult();
              } finally {
                e.silentSetOptions({ fetchPolicy: t });
              }
            }),
            (e.prototype.retain = function () {
              var e = this;
              this.references++, clearTimeout(this.autoDisposeTimeoutId);
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                  e.references--,
                  setTimeout(function () {
                    e.references || e.dispose();
                  }));
              };
            }),
            (e.prototype.didChangeOptions = function (e) {
              var t = this;
              return ey.some(function (r) {
                return !(0, G.L)(t.watchQueryOptions[r], e[r]);
              });
            }),
            (e.prototype.applyOptions = function (e) {
              var t = this.watchQueryOptions,
                r = t.fetchPolicy,
                n = t.canonizeResults;
              return (
                "standby" === r && r !== e.fetchPolicy
                  ? this.initiateFetch(this.observable.reobserve(e))
                  : (this.observable.silentSetOptions(e),
                    n !== e.canonizeResults &&
                      ((this.result = (0, Z.Cl)(
                        (0, Z.Cl)({}, this.result),
                        this.observable.getCurrentResult()
                      )),
                      (this.promise = ea(this.result)))),
                this.promise
              );
            }),
            (e.prototype.listen = function (e) {
              var t = this;
              return (
                this.listeners.add(e),
                function () {
                  t.listeners.delete(e);
                }
              );
            }),
            (e.prototype.refetch = function (e) {
              return this.initiateFetch(this.observable.refetch(e));
            }),
            (e.prototype.fetchMore = function (e) {
              return this.initiateFetch(this.observable.fetchMore(e));
            }),
            (e.prototype.dispose = function () {
              this.subscription.unsubscribe(), this.onDispose();
            }),
            (e.prototype.onDispose = function () {}),
            (e.prototype.handleNext = function (e) {
              var t;
              if ("pending" === this.promise.status)
                void 0 === e.data && (e.data = this.result.data),
                  (this.result = e),
                  null === (t = this.resolve) ||
                    void 0 === t ||
                    t.call(this, e);
              else {
                if (
                  e.data === this.result.data &&
                  e.networkStatus === this.result.networkStatus
                )
                  return;
                void 0 === e.data && (e.data = this.result.data),
                  (this.result = e),
                  (this.promise = ea(e)),
                  this.deliver(this.promise);
              }
            }),
            (e.prototype.handleError = function (e) {
              var t, r;
              (this.subscription.unsubscribe(),
              (this.subscription = this.observable.resubscribeAfterError(
                this.handleNext,
                this.handleError
              )),
              "pending" === this.promise.status)
                ? null === (t = this.reject) || void 0 === t || t.call(this, e)
                : ((this.promise =
                    ((r = Promise.reject(e)).catch(function () {}),
                    (r.status = "rejected"),
                    (r.reason = e),
                    r)),
                  this.deliver(this.promise));
            }),
            (e.prototype.deliver = function (e) {
              this.listeners.forEach(function (t) {
                return t(e);
              });
            }),
            (e.prototype.initiateFetch = function (e) {
              var t = this;
              return (
                (this.promise = this.createPendingPromise()),
                this.promise.catch(function () {}),
                e
                  .then(function (e) {
                    setTimeout(function () {
                      var r;
                      "pending" === t.promise.status &&
                        ((t.result = e),
                        null === (r = t.resolve) ||
                          void 0 === r ||
                          r.call(t, e));
                    });
                  })
                  .catch(function () {}),
                e
              );
            }),
            (e.prototype.subscribeToQuery = function () {
              var e = this;
              this.subscription = this.observable
                .filter(function (t) {
                  return !(0, G.L)(t.data, {}) && !(0, G.L)(t, e.result);
                })
                .subscribe(this.handleNext, this.handleError);
            }),
            (e.prototype.setResult = function () {
              var e = this.observable.getCurrentResult(!1);
              (0, G.L)(e, this.result) ||
                ((this.result = e),
                (this.promise =
                  e.data &&
                  (!e.partial || this.watchQueryOptions.returnPartialData)
                    ? ea(e)
                    : this.createPendingPromise()));
            }),
            (e.prototype.createPendingPromise = function () {
              var e = this;
              return ec(
                new Promise(function (t, r) {
                  (e.resolve = t), (e.reject = r);
                })
              );
            }),
            e
          );
        })(),
        eg = (function () {
          function e(e) {
            void 0 === e && (e = Object.create(null)),
              (this.queryRefs = new ef.b(ed.et)),
              (this.options = e);
          }
          return (
            (e.prototype.getQueryRef = function (e, t) {
              var r = this.queryRefs.lookupArray(e);
              return (
                r.current ||
                  (r.current = new em(t(), {
                    autoDisposeTimeoutMs: this.options.autoDisposeTimeoutMs,
                    onDispose: function () {
                      delete r.current;
                    },
                  })),
                r.current
              );
            }),
            e
          );
        })(),
        eC = Symbol.for("apollo.suspenseCache");
      function ek(e) {
        var t;
        return (
          e[eC] ||
            (e[eC] = new eg(
              null === (t = e.defaultOptions.react) || void 0 === t
                ? void 0
                : t.suspense
            )),
          e[eC]
        );
      }
      var eP = r(96269),
        ew = Symbol.for("apollo.skipToken");
      function eE(e, t) {
        return (
          void 0 === t && (t = Object.create(null)),
          (0, et.Y)(
            "useSuspenseQuery",
            eO,
            (0, H.m)("object" == typeof t ? t.client : void 0)
          )(e, t)
        );
      }
      function eO(e, t) {
        var r = (0, H.m)(t.client),
          n = ek(r),
          i = eD({ client: r, query: e, options: t }),
          o = i.fetchPolicy,
          u = i.variables,
          a = t.queryKey,
          c = (0, Z.fX)(
            [e, (0, eP.M)(u)],
            [].concat(void 0 === a ? [] : a),
            !0
          ),
          l = n.getQueryRef(c, function () {
            return r.watchQuery(i);
          }),
          f = I.useState([l.key, l.promise]),
          d = f[0],
          p = f[1];
        d[0] !== l.key && ((d[0] = l.key), (d[1] = l.promise));
        var v = d[1];
        l.didChangeOptions(i) && (d[1] = v = l.applyOptions(i)),
          I.useEffect(
            function () {
              var e = l.retain(),
                t = l.listen(function (e) {
                  p([l.key, e]);
                });
              return function () {
                t(), e();
              };
            },
            [l]
          );
        var h = I.useMemo(
            function () {
              var e = eS(l.result);
              return {
                loading: !1,
                data: l.result.data,
                networkStatus: e ? s.pT.error : s.pT.ready,
                error: e,
              };
            },
            [l.result]
          ),
          b = "standby" === o ? h : el(v),
          y = I.useCallback(
            function (e) {
              var t = l.fetchMore(e);
              return p([l.key, l.promise]), t;
            },
            [l]
          ),
          m = I.useCallback(
            function (e) {
              var t = l.refetch(e);
              return p([l.key, l.promise]), t;
            },
            [l]
          ),
          g = I.useCallback(
            function (e) {
              return l.observable.subscribeToMore(e);
            },
            [l]
          );
        return I.useMemo(
          function () {
            return {
              client: r,
              data: b.data,
              error: eS(b),
              networkStatus: b.networkStatus,
              fetchMore: y,
              refetch: m,
              subscribeToMore: g,
            };
          },
          [r, y, m, b, g]
        );
      }
      function eS(e) {
        return (0, es.E)(e.errors)
          ? new a.K4({ graphQLErrors: e.errors })
          : e.error;
      }
      function eD(e) {
        var t = e.client,
          r = e.query,
          n = e.options;
        return er(
          function () {
            if (n === ew) return { query: r, fetchPolicy: "standby" };
            var e,
              i,
              o,
              u,
              s,
              a =
                n.fetchPolicy ||
                (null === (s = t.defaultOptions.watchQuery) || void 0 === s
                  ? void 0
                  : s.fetchPolicy) ||
                "cache-first",
              c = (0, Z.Cl)((0, Z.Cl)({}, n), {
                fetchPolicy: a,
                query: r,
                notifyOnNetworkStatusChange: !1,
                nextFetchPolicy: void 0,
              });
            return (
              !1 !== globalThis.__DEV__ &&
                ((i = c.query),
                (o = c.fetchPolicy),
                (u = c.returnPartialData),
                (0, W.D$)(i, W.KG.Query),
                void 0 === (e = o) && (e = "cache-first"),
                (0, v.V1)(
                  [
                    "cache-first",
                    "network-only",
                    "no-cache",
                    "cache-and-network",
                  ].includes(e),
                  56,
                  e
                ),
                "no-cache" === o &&
                  u &&
                  !1 !== globalThis.__DEV__ &&
                  v.V1.warn(57)),
              n.skip && (c.fetchPolicy = "standby"),
              c
            );
          },
          [t, n, r]
        );
      }
      function eR(e, t) {
        return (
          void 0 === t && (t = Object.create(null)),
          (0, et.Y)(
            "useBackgroundQuery",
            eT,
            (0, H.m)("object" == typeof t ? t.client : void 0)
          )(e, t)
        );
      }
      function eT(e, t) {
        var r = (0, H.m)(t.client),
          n = ek(r),
          i = eD({ client: r, query: e, options: t }),
          o = i.fetchPolicy,
          u = i.variables,
          s = t.queryKey,
          a = I.useRef("standby" !== o);
        a.current || (a.current = "standby" !== o);
        var c = (0, Z.fX)(
            [e, (0, eP.M)(u)],
            [].concat(void 0 === s ? [] : s),
            !0
          ),
          l = n.getQueryRef(c, function () {
            return r.watchQuery(i);
          }),
          f = I.useState(eh(l)),
          d = f[0],
          p = f[1];
        if ((d[ep] !== l && p(eh(l)), l.didChangeOptions(i))) {
          var v = l.applyOptions(i);
          d[ev] = v;
        }
        var h = I.useCallback(
            function (e) {
              var t = l.fetchMore(e);
              return p(eh(l)), t;
            },
            [l]
          ),
          b = I.useCallback(
            function (e) {
              var t = l.refetch(e);
              return p(eh(l)), t;
            },
            [l]
          );
        return [a.current ? d : void 0, { fetchMore: h, refetch: b }];
      }
      function e_() {
        var e, t;
        return null ===
          (t =
            null ===
              (e = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ||
            void 0 === e
              ? void 0
              : e.ReactCurrentDispatcher) || void 0 === t
          ? void 0
          : t.current;
      }
      var eM = null;
      function eQ(e, t) {
        void 0 === t && (t = Object.create(null));
        var r = (0, H.m)(t.client),
          n = ek(r),
          i = eD({ client: r, query: e, options: t }),
          o = t.queryKey,
          u = void 0 === o ? [] : o,
          s = I.useState(null),
          a = s[0],
          c = s[1],
          l = a && a[ep];
        if (a && (null == l ? void 0 : l.didChangeOptions(i))) {
          var f = l.applyOptions(i);
          a[ev] = f;
        }
        var d =
            ((eM = e_()),
            I.useCallback(function () {
              return null != eM && eM === e_();
            }, [])),
          p = I.useCallback(
            function (e) {
              if (!l)
                throw Error(
                  "The query has not been loaded. Please load the query."
                );
              var t = l.fetchMore(e);
              return c(eh(l)), t;
            },
            [l]
          ),
          h = I.useCallback(
            function (e) {
              if (!l)
                throw Error(
                  "The query has not been loaded. Please load the query."
                );
              var t = l.refetch(e);
              return c(eh(l)), t;
            },
            [l]
          ),
          b = I.useCallback(
            function () {
              for (var t = [], o = 0; o < arguments.length; o++)
                t[o] = arguments[o];
              (0, v.V1)(!d(), 50);
              var s = t[0],
                a = (0, Z.fX)([e, (0, eP.M)(s)], [].concat(u), !0);
              c(
                eh(
                  n.getQueryRef(a, function () {
                    return r.watchQuery(
                      (0, Z.Cl)((0, Z.Cl)({}, i), { variables: s })
                    );
                  })
                )
              );
            },
            [e, u, n, i, d]
          ),
          y = I.useCallback(
            function () {
              c(null);
            },
            [a]
          );
        return [b, a, { fetchMore: p, refetch: h, reset: y }];
      }
      function ex(e) {
        var t,
          r = I.useState(e),
          n = r[0],
          i = r[1],
          o = I.useState(e),
          u = o[0],
          s = o[1],
          a = e[ep];
        return (
          n !== e ? (i(e), s(e)) : ((t = eb(u)), (e[ev] = t)),
          {
            refetch: I.useCallback(
              function (e) {
                var t = a.refetch(e);
                return s(eh(a)), t;
              },
              [a]
            ),
            fetchMore: I.useCallback(
              function (e) {
                var t = a.fetchMore(e);
                return s(eh(a)), t;
              },
              [a]
            ),
          }
        );
      }
      function eq(e) {
        return (0, et.Y)("useReadQuery", ej, e[ep].observable)(e);
      }
      function ej(e) {
        var t,
          r = I.useMemo(
            function () {
              return e[ep];
            },
            [e]
          ),
          n = I.useCallback(
            function () {
              return eb(e);
            },
            [e]
          );
        r.disposed && (r.reinitialize(), (t = r.promise), (e[ev] = t)),
          I.useEffect(
            function () {
              return r.retain();
            },
            [r]
          );
        var i = el(
          (0, $.r)(
            I.useCallback(
              function (t) {
                return r.listen(function (r) {
                  (e[ev] = r), t();
                });
              },
              [r]
            ),
            n,
            n
          )
        );
        return I.useMemo(
          function () {
            return {
              data: i.data,
              networkStatus: i.networkStatus,
              error: eS(i),
            };
          },
          [i]
        );
      }
      function eL(e) {
        return function (t, r) {
          var n, i;
          return (
            void 0 === r && (r = Object.create(null)),
            eh(
              new em(e.watchQuery((0, Z.Cl)((0, Z.Cl)({}, r), { query: t })), {
                autoDisposeTimeoutMs:
                  null ===
                    (i =
                      null === (n = e.defaultOptions.react) || void 0 === n
                        ? void 0
                        : n.suspense) || void 0 === i
                    ? void 0
                    : i.autoDisposeTimeoutMs,
              })
            )
          );
        };
      }
    },
    95420: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => l });
      var n = r(31635),
        i = r(27243),
        o = r(60144),
        u = r(15381),
        s = r(75443),
        a = r(9211),
        c = r(70111);
      function l(e, t) {
        var r = (0, c.m)(null == t ? void 0 : t.client);
        (0, s.D$)(e, s.KG.Mutation);
        var l = i.useState({ called: !1, loading: !1, client: r }),
          f = l[0],
          d = l[1],
          p = i.useRef({
            result: f,
            mutationId: 0,
            isMounted: !0,
            client: r,
            mutation: e,
            options: t,
          });
        Object.assign(p.current, { client: r, options: t, mutation: e });
        var v = i.useCallback(function (e) {
            void 0 === e && (e = {});
            var t = p.current,
              r = t.options,
              i = t.mutation,
              s = (0, n.Cl)((0, n.Cl)({}, r), { mutation: i }),
              c = e.client || p.current.client;
            p.current.result.loading ||
              s.ignoreResults ||
              !p.current.isMounted ||
              d(
                (p.current.result = {
                  loading: !0,
                  error: void 0,
                  data: void 0,
                  called: !0,
                  client: c,
                })
              );
            var l = ++p.current.mutationId,
              f = (0, o.l)(s, e);
            return c
              .mutate(f)
              .then(function (t) {
                var r,
                  n,
                  i = t.data,
                  o = t.errors,
                  s =
                    o && o.length > 0 ? new a.K4({ graphQLErrors: o }) : void 0,
                  v =
                    e.onError ||
                    (null === (r = p.current.options) || void 0 === r
                      ? void 0
                      : r.onError);
                if (
                  (s && v && v(s, f),
                  l === p.current.mutationId && !f.ignoreResults)
                ) {
                  var h = {
                    called: !0,
                    loading: !1,
                    data: i,
                    error: s,
                    client: c,
                  };
                  p.current.isMounted &&
                    !(0, u.L)(p.current.result, h) &&
                    d((p.current.result = h));
                }
                var b =
                  e.onCompleted ||
                  (null === (n = p.current.options) || void 0 === n
                    ? void 0
                    : n.onCompleted);
                return s || null == b || b(t.data, f), t;
              })
              .catch(function (t) {
                if (l === p.current.mutationId && p.current.isMounted) {
                  var r,
                    n = {
                      loading: !1,
                      error: t,
                      data: void 0,
                      called: !0,
                      client: c,
                    };
                  (0, u.L)(p.current.result, n) || d((p.current.result = n));
                }
                var i =
                  e.onError ||
                  (null === (r = p.current.options) || void 0 === r
                    ? void 0
                    : r.onError);
                if (i) return i(t, f), { data: void 0, errors: t };
                throw t;
              });
          }, []),
          h = i.useCallback(function () {
            if (p.current.isMounted) {
              var e = { called: !1, loading: !1, client: r };
              Object.assign(p.current, { mutationId: 0, result: e }), d(e);
            }
          }, []);
        return (
          i.useEffect(function () {
            return (
              (p.current.isMounted = !0),
              function () {
                p.current.isMounted = !1;
              }
            );
          }, []),
          [v, (0, n.Cl)({ reset: h }, f)]
        );
      }
    },
  },
]);
