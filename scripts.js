var $f = (e) => {
  throw TypeError(e);
};
var kx = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Al = (e, t, n) => t.has(e) || $f("Cannot " + n);
var A = (e, t, n) => (
    Al(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  ae = (e, t, n) =>
    t.has(e)
      ? $f("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  ee = (e, t, n, r) => (
    Al(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  $e = (e, t, n) => (Al(e, t, "access private method"), n);
var gs = (e, t, n, r) => ({
  set _(o) {
    ee(e, t, o, n);
  },
  get _() {
    return A(e, t, r);
  },
});
var NA = kx((BA, us) => {
  function Mx(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const o in r)
          if (o !== "default" && !(o in e)) {
            const i = Object.getOwnPropertyDescriptor(r, o);
            i &&
              Object.defineProperty(
                e,
                o,
                i.get ? i : { enumerable: !0, get: () => r[o] }
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    );
  }
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
      r(o);
    new MutationObserver((o) => {
      for (const i of o)
        if (i.type === "childList")
          for (const s of i.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
      const i = {};
      return (
        o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials"
          ? (i.credentials = "include")
          : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
        i
      );
    }
    function r(o) {
      if (o.ep) return;
      o.ep = !0;
      const i = n(o);
      fetch(o.href, i);
    }
  })();
  function sg(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var ag = { exports: {} },
    Ga = {},
    lg = { exports: {} },
    ne = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Zi = Symbol.for("react.element"),
    Rx = Symbol.for("react.portal"),
    Ax = Symbol.for("react.fragment"),
    Nx = Symbol.for("react.strict_mode"),
    Dx = Symbol.for("react.profiler"),
    Lx = Symbol.for("react.provider"),
    Ox = Symbol.for("react.context"),
    _x = Symbol.for("react.forward_ref"),
    Ix = Symbol.for("react.suspense"),
    jx = Symbol.for("react.memo"),
    Fx = Symbol.for("react.lazy"),
    Uf = Symbol.iterator;
  function Vx(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Uf && e[Uf]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ug = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    cg = Object.assign,
    dg = {};
  function Io(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = dg),
      (this.updater = n || ug);
  }
  Io.prototype.isReactComponent = {};
  Io.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Io.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function fg() {}
  fg.prototype = Io.prototype;
  function Yc(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = dg),
      (this.updater = n || ug);
  }
  var Xc = (Yc.prototype = new fg());
  Xc.constructor = Yc;
  cg(Xc, Io.prototype);
  Xc.isPureReactComponent = !0;
  var Wf = Array.isArray,
    hg = Object.prototype.hasOwnProperty,
    qc = { current: null },
    pg = { key: !0, ref: !0, __self: !0, __source: !0 };
  function mg(e, t, n) {
    var r,
      o = {},
      i = null,
      s = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (s = t.ref),
      t.key !== void 0 && (i = "" + t.key),
      t))
        hg.call(t, r) && !pg.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
      o.children = l;
    }
    if (e && e.defaultProps)
      for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
    return {
      $$typeof: Zi,
      type: e,
      key: i,
      ref: s,
      props: o,
      _owner: qc.current,
    };
  }
  function Bx(e, t) {
    return {
      $$typeof: Zi,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function Zc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Zi;
  }
  function zx(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var Hf = /\/+/g;
  function Nl(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? zx("" + e.key)
      : t.toString(36);
  }
  function Ws(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
      switch (i) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Zi:
            case Rx:
              s = !0;
          }
      }
    if (s)
      return (
        (s = e),
        (o = o(s)),
        (e = r === "" ? "." + Nl(s, 0) : r),
        Wf(o)
          ? ((n = ""),
            e != null && (n = e.replace(Hf, "$&/") + "/"),
            Ws(o, t, n, "", function (u) {
              return u;
            }))
          : o != null &&
            (Zc(o) &&
              (o = Bx(
                o,
                n +
                  (!o.key || (s && s.key === o.key)
                    ? ""
                    : ("" + o.key).replace(Hf, "$&/") + "/") +
                  e
              )),
            t.push(o)),
        1
      );
    if (((s = 0), (r = r === "" ? "." : r + ":"), Wf(e)))
      for (var a = 0; a < e.length; a++) {
        i = e[a];
        var l = r + Nl(i, a);
        s += Ws(i, t, n, l, o);
      }
    else if (((l = Vx(e)), typeof l == "function"))
      for (e = l.call(e), a = 0; !(i = e.next()).done; )
        (i = i.value), (l = r + Nl(i, a++)), (s += Ws(i, t, n, l, o));
    else if (i === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return s;
  }
  function ys(e, t, n) {
    if (e == null) return e;
    var r = [],
      o = 0;
    return (
      Ws(e, r, "", "", function (i) {
        return t.call(n, i, o++);
      }),
      r
    );
  }
  function $x(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var nt = { current: null },
    Hs = { transition: null },
    Ux = {
      ReactCurrentDispatcher: nt,
      ReactCurrentBatchConfig: Hs,
      ReactCurrentOwner: qc,
    };
  function gg() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  ne.Children = {
    map: ys,
    forEach: function (e, t, n) {
      ys(
        e,
        function () {
          t.apply(this, arguments);
        },
        n
      );
    },
    count: function (e) {
      var t = 0;
      return (
        ys(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        ys(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!Zc(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  ne.Component = Io;
  ne.Fragment = Ax;
  ne.Profiler = Dx;
  ne.PureComponent = Yc;
  ne.StrictMode = Nx;
  ne.Suspense = Ix;
  ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ux;
  ne.act = gg;
  ne.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r = cg({}, e.props),
      o = e.key,
      i = e.ref,
      s = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((i = t.ref), (s = qc.current)),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var a = e.type.defaultProps;
      for (l in t)
        hg.call(t, l) &&
          !pg.hasOwnProperty(l) &&
          (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
      a = Array(l);
      for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
      r.children = a;
    }
    return { $$typeof: Zi, type: e.type, key: o, ref: i, props: r, _owner: s };
  };
  ne.createContext = function (e) {
    return (
      (e = {
        $$typeof: Ox,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: Lx, _context: e }),
      (e.Consumer = e)
    );
  };
  ne.createElement = mg;
  ne.createFactory = function (e) {
    var t = mg.bind(null, e);
    return (t.type = e), t;
  };
  ne.createRef = function () {
    return { current: null };
  };
  ne.forwardRef = function (e) {
    return { $$typeof: _x, render: e };
  };
  ne.isValidElement = Zc;
  ne.lazy = function (e) {
    return { $$typeof: Fx, _payload: { _status: -1, _result: e }, _init: $x };
  };
  ne.memo = function (e, t) {
    return { $$typeof: jx, type: e, compare: t === void 0 ? null : t };
  };
  ne.startTransition = function (e) {
    var t = Hs.transition;
    Hs.transition = {};
    try {
      e();
    } finally {
      Hs.transition = t;
    }
  };
  ne.unstable_act = gg;
  ne.useCallback = function (e, t) {
    return nt.current.useCallback(e, t);
  };
  ne.useContext = function (e) {
    return nt.current.useContext(e);
  };
  ne.useDebugValue = function () {};
  ne.useDeferredValue = function (e) {
    return nt.current.useDeferredValue(e);
  };
  ne.useEffect = function (e, t) {
    return nt.current.useEffect(e, t);
  };
  ne.useId = function () {
    return nt.current.useId();
  };
  ne.useImperativeHandle = function (e, t, n) {
    return nt.current.useImperativeHandle(e, t, n);
  };
  ne.useInsertionEffect = function (e, t) {
    return nt.current.useInsertionEffect(e, t);
  };
  ne.useLayoutEffect = function (e, t) {
    return nt.current.useLayoutEffect(e, t);
  };
  ne.useMemo = function (e, t) {
    return nt.current.useMemo(e, t);
  };
  ne.useReducer = function (e, t, n) {
    return nt.current.useReducer(e, t, n);
  };
  ne.useRef = function (e) {
    return nt.current.useRef(e);
  };
  ne.useState = function (e) {
    return nt.current.useState(e);
  };
  ne.useSyncExternalStore = function (e, t, n) {
    return nt.current.useSyncExternalStore(e, t, n);
  };
  ne.useTransition = function () {
    return nt.current.useTransition();
  };
  ne.version = "18.3.1";
  lg.exports = ne;
  var x = lg.exports;
  const V = sg(x),
    Wx = Mx({ __proto__: null, default: V }, [x]);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Hx = x,
    Kx = Symbol.for("react.element"),
    Gx = Symbol.for("react.fragment"),
    Qx = Object.prototype.hasOwnProperty,
    Yx =
      Hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Xx = { key: !0, ref: !0, __self: !0, __source: !0 };
  function yg(e, t, n) {
    var r,
      o = {},
      i = null,
      s = null;
    n !== void 0 && (i = "" + n),
      t.key !== void 0 && (i = "" + t.key),
      t.ref !== void 0 && (s = t.ref);
    for (r in t) Qx.call(t, r) && !Xx.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
      $$typeof: Kx,
      type: e,
      key: i,
      ref: s,
      props: o,
      _owner: Yx.current,
    };
  }
  Ga.Fragment = Gx;
  Ga.jsx = yg;
  Ga.jsxs = yg;
  ag.exports = Ga;
  var k = ag.exports,
    vg = { exports: {} },
    Ct = {},
    wg = { exports: {} },
    xg = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(R, I) {
      var P = R.length;
      R.push(I);
      e: for (; 0 < P; ) {
        var S = (P - 1) >>> 1,
          N = R[S];
        if (0 < o(N, I)) (R[S] = I), (R[P] = N), (P = S);
        else break e;
      }
    }
    function n(R) {
      return R.length === 0 ? null : R[0];
    }
    function r(R) {
      if (R.length === 0) return null;
      var I = R[0],
        P = R.pop();
      if (P !== I) {
        R[0] = P;
        e: for (var S = 0, N = R.length, F = N >>> 1; S < F; ) {
          var $ = 2 * (S + 1) - 1,
            G = R[$],
            B = $ + 1,
            W = R[B];
          if (0 > o(G, P))
            B < N && 0 > o(W, G)
              ? ((R[S] = W), (R[B] = P), (S = B))
              : ((R[S] = G), (R[$] = P), (S = $));
          else if (B < N && 0 > o(W, P)) (R[S] = W), (R[B] = P), (S = B);
          else break e;
        }
      }
      return I;
    }
    function o(R, I) {
      var P = R.sortIndex - I.sortIndex;
      return P !== 0 ? P : R.id - I.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var i = performance;
      e.unstable_now = function () {
        return i.now();
      };
    } else {
      var s = Date,
        a = s.now();
      e.unstable_now = function () {
        return s.now() - a;
      };
    }
    var l = [],
      u = [],
      c = 1,
      f = null,
      d = 3,
      p = !1,
      y = !1,
      g = !1,
      w = typeof setTimeout == "function" ? setTimeout : null,
      h = typeof clearTimeout == "function" ? clearTimeout : null,
      m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(R) {
      for (var I = n(u); I !== null; ) {
        if (I.callback === null) r(u);
        else if (I.startTime <= R)
          r(u), (I.sortIndex = I.expirationTime), t(l, I);
        else break;
        I = n(u);
      }
    }
    function C(R) {
      if (((g = !1), v(R), !y))
        if (n(l) !== null) (y = !0), Q(E);
        else {
          var I = n(u);
          I !== null && K(C, I.startTime - R);
        }
    }
    function E(R, I) {
      (y = !1), g && ((g = !1), h(b), (b = -1)), (p = !0);
      var P = d;
      try {
        for (
          v(I), f = n(l);
          f !== null && (!(f.expirationTime > I) || (R && !H()));

        ) {
          var S = f.callback;
          if (typeof S == "function") {
            (f.callback = null), (d = f.priorityLevel);
            var N = S(f.expirationTime <= I);
            (I = e.unstable_now()),
              typeof N == "function" ? (f.callback = N) : f === n(l) && r(l),
              v(I);
          } else r(l);
          f = n(l);
        }
        if (f !== null) var F = !0;
        else {
          var $ = n(u);
          $ !== null && K(C, $.startTime - I), (F = !1);
        }
        return F;
      } finally {
        (f = null), (d = P), (p = !1);
      }
    }
    var T = !1,
      M = null,
      b = -1,
      j = 5,
      _ = -1;
    function H() {
      return !(e.unstable_now() - _ < j);
    }
    function D() {
      if (M !== null) {
        var R = e.unstable_now();
        _ = R;
        var I = !0;
        try {
          I = M(!0, R);
        } finally {
          I ? U() : ((T = !1), (M = null));
        }
      } else T = !1;
    }
    var U;
    if (typeof m == "function")
      U = function () {
        m(D);
      };
    else if (typeof MessageChannel < "u") {
      var O = new MessageChannel(),
        Y = O.port2;
      (O.port1.onmessage = D),
        (U = function () {
          Y.postMessage(null);
        });
    } else
      U = function () {
        w(D, 0);
      };
    function Q(R) {
      (M = R), T || ((T = !0), U());
    }
    function K(R, I) {
      b = w(function () {
        R(e.unstable_now());
      }, I);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (R) {
        R.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        y || p || ((y = !0), Q(E));
      }),
      (e.unstable_forceFrameRate = function (R) {
        0 > R || 125 < R
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (j = 0 < R ? Math.floor(1e3 / R) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return d;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (e.unstable_next = function (R) {
        switch (d) {
          case 1:
          case 2:
          case 3:
            var I = 3;
            break;
          default:
            I = d;
        }
        var P = d;
        d = I;
        try {
          return R();
        } finally {
          d = P;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (R, I) {
        switch (R) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            R = 3;
        }
        var P = d;
        d = R;
        try {
          return I();
        } finally {
          d = P;
        }
      }),
      (e.unstable_scheduleCallback = function (R, I, P) {
        var S = e.unstable_now();
        switch (
          (typeof P == "object" && P !== null
            ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? S + P : S))
            : (P = S),
          R)
        ) {
          case 1:
            var N = -1;
            break;
          case 2:
            N = 250;
            break;
          case 5:
            N = 1073741823;
            break;
          case 4:
            N = 1e4;
            break;
          default:
            N = 5e3;
        }
        return (
          (N = P + N),
          (R = {
            id: c++,
            callback: I,
            priorityLevel: R,
            startTime: P,
            expirationTime: N,
            sortIndex: -1,
          }),
          P > S
            ? ((R.sortIndex = P),
              t(u, R),
              n(l) === null &&
                R === n(u) &&
                (g ? (h(b), (b = -1)) : (g = !0), K(C, P - S)))
            : ((R.sortIndex = N), t(l, R), y || p || ((y = !0), Q(E))),
          R
        );
      }),
      (e.unstable_shouldYield = H),
      (e.unstable_wrapCallback = function (R) {
        var I = d;
        return function () {
          var P = d;
          d = I;
          try {
            return R.apply(this, arguments);
          } finally {
            d = P;
          }
        };
      });
  })(xg);
  wg.exports = xg;
  var qx = wg.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Zx = x,
    St = qx;
  function L(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var Sg = new Set(),
    Ci = {};
  function Or(e, t) {
    Po(e, t), Po(e + "Capture", t);
  }
  function Po(e, t) {
    for (Ci[e] = t, e = 0; e < t.length; e++) Sg.add(t[e]);
  }
  var vn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Eu = Object.prototype.hasOwnProperty,
    Jx =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Kf = {},
    Gf = {};
  function e1(e) {
    return Eu.call(Gf, e)
      ? !0
      : Eu.call(Kf, e)
      ? !1
      : Jx.test(e)
      ? (Gf[e] = !0)
      : ((Kf[e] = !0), !1);
  }
  function t1(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function n1(e, t, n, r) {
    if (t === null || typeof t > "u" || t1(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function rt(e, t, n, r, o, i, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = s);
  }
  var ze = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      ze[e] = new rt(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    ze[t] = new rt(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ze[e] = new rt(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    ze[e] = new rt(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      ze[e] = new rt(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ze[e] = new rt(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    ze[e] = new rt(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    ze[e] = new rt(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    ze[e] = new rt(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Jc = /[\-:]([a-z])/g;
  function ed(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Jc, ed);
      ze[t] = new rt(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Jc, ed);
      ze[t] = new rt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Jc, ed);
    ze[t] = new rt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    ze[e] = new rt(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  ze.xlinkHref = new rt(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    ze[e] = new rt(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function td(e, t, n, r) {
    var o = ze.hasOwnProperty(t) ? ze[t] : null;
    (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (n1(t, n, o, r) && (n = null),
      r || o === null
        ? e1(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Tn = Zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    vs = Symbol.for("react.element"),
    zr = Symbol.for("react.portal"),
    $r = Symbol.for("react.fragment"),
    nd = Symbol.for("react.strict_mode"),
    Pu = Symbol.for("react.profiler"),
    Cg = Symbol.for("react.provider"),
    Eg = Symbol.for("react.context"),
    rd = Symbol.for("react.forward_ref"),
    Tu = Symbol.for("react.suspense"),
    bu = Symbol.for("react.suspense_list"),
    od = Symbol.for("react.memo"),
    On = Symbol.for("react.lazy"),
    Pg = Symbol.for("react.offscreen"),
    Qf = Symbol.iterator;
  function Ko(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Qf && e[Qf]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Ee = Object.assign,
    Dl;
  function ri(e) {
    if (Dl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Dl = (t && t[1]) || "";
      }
    return (
      `
` +
      Dl +
      e
    );
  }
  var Ll = !1;
  function Ol(e, t) {
    if (!e || Ll) return "";
    Ll = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (
          var o = u.stack.split(`
`),
            i = r.stack.split(`
`),
            s = o.length - 1,
            a = i.length - 1;
          1 <= s && 0 <= a && o[s] !== i[a];

        )
          a--;
        for (; 1 <= s && 0 <= a; s--, a--)
          if (o[s] !== i[a]) {
            if (s !== 1 || a !== 1)
              do
                if ((s--, a--, 0 > a || o[s] !== i[a])) {
                  var l =
                    `
` + o[s].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      l.includes("<anonymous>") &&
                      (l = l.replace("<anonymous>", e.displayName)),
                    l
                  );
                }
              while (1 <= s && 0 <= a);
            break;
          }
      }
    } finally {
      (Ll = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? ri(e) : "";
  }
  function r1(e) {
    switch (e.tag) {
      case 5:
        return ri(e.type);
      case 16:
        return ri("Lazy");
      case 13:
        return ri("Suspense");
      case 19:
        return ri("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Ol(e.type, !1)), e;
      case 11:
        return (e = Ol(e.type.render, !1)), e;
      case 1:
        return (e = Ol(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ku(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $r:
        return "Fragment";
      case zr:
        return "Portal";
      case Pu:
        return "Profiler";
      case nd:
        return "StrictMode";
      case Tu:
        return "Suspense";
      case bu:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Eg:
          return (e.displayName || "Context") + ".Consumer";
        case Cg:
          return (e._context.displayName || "Context") + ".Provider";
        case rd:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case od:
          return (
            (t = e.displayName || null), t !== null ? t : ku(e.type) || "Memo"
          );
        case On:
          (t = e._payload), (e = e._init);
          try {
            return ku(e(t));
          } catch {}
      }
    return null;
  }
  function o1(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ku(t);
      case 8:
        return t === nd ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function er(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Tg(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function i1(e) {
    var t = Tg(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var o = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (s) {
            (r = "" + s), i.call(this, s);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (s) {
            r = "" + s;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function ws(e) {
    e._valueTracker || (e._valueTracker = i1(e));
  }
  function bg(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Tg(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function la(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Mu(e, t) {
    var n = t.checked;
    return Ee({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Yf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = er(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function kg(e, t) {
    (t = t.checked), t != null && td(e, "checked", t, !1);
  }
  function Ru(e, t) {
    kg(e, t);
    var n = er(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Au(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Au(e, t.type, er(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Xf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Au(e, t, n) {
    (t !== "number" || la(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var oi = Array.isArray;
  function io(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + er(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          (e[o].selected = !0), r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nu(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
    return Ee({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function qf(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(L(92));
        if (oi(n)) {
          if (1 < n.length) throw Error(L(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: er(n) };
  }
  function Mg(e, t) {
    var n = er(t.value),
      r = er(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Zf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Rg(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Du(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Rg(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var xs,
    Ag = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, o);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          xs = xs || document.createElement("div"),
            xs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = xs.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Ei(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ui = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    s1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ui).forEach(function (e) {
    s1.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ui[t] = ui[e]);
    });
  });
  function Ng(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (ui.hasOwnProperty(e) && ui[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Dg(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          o = Ng(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
      }
  }
  var a1 = Ee(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Lu(e, t) {
    if (t) {
      if (a1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(L(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(L(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(L(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(L(62));
    }
  }
  function Ou(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _u = null;
  function id(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Iu = null,
    so = null,
    ao = null;
  function Jf(e) {
    if ((e = ts(e))) {
      if (typeof Iu != "function") throw Error(L(280));
      var t = e.stateNode;
      t && ((t = Za(t)), Iu(e.stateNode, e.type, t));
    }
  }
  function Lg(e) {
    so ? (ao ? ao.push(e) : (ao = [e])) : (so = e);
  }
  function Og() {
    if (so) {
      var e = so,
        t = ao;
      if (((ao = so = null), Jf(e), t)) for (e = 0; e < t.length; e++) Jf(t[e]);
    }
  }
  function _g(e, t) {
    return e(t);
  }
  function Ig() {}
  var _l = !1;
  function jg(e, t, n) {
    if (_l) return e(t, n);
    _l = !0;
    try {
      return _g(e, t, n);
    } finally {
      (_l = !1), (so !== null || ao !== null) && (Ig(), Og());
    }
  }
  function Pi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Za(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(L(231, t, typeof n));
    return n;
  }
  var ju = !1;
  if (vn)
    try {
      var Go = {};
      Object.defineProperty(Go, "passive", {
        get: function () {
          ju = !0;
        },
      }),
        window.addEventListener("test", Go, Go),
        window.removeEventListener("test", Go, Go);
    } catch {
      ju = !1;
    }
  function l1(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var ci = !1,
    ua = null,
    ca = !1,
    Fu = null,
    u1 = {
      onError: function (e) {
        (ci = !0), (ua = e);
      },
    };
  function c1(e, t, n, r, o, i, s, a, l) {
    (ci = !1), (ua = null), l1.apply(u1, arguments);
  }
  function d1(e, t, n, r, o, i, s, a, l) {
    if ((c1.apply(this, arguments), ci)) {
      if (ci) {
        var u = ua;
        (ci = !1), (ua = null);
      } else throw Error(L(198));
      ca || ((ca = !0), (Fu = u));
    }
  }
  function _r(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Fg(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function eh(e) {
    if (_r(e) !== e) throw Error(L(188));
  }
  function f1(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = _r(e)), t === null)) throw Error(L(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var i = o.alternate;
      if (i === null) {
        if (((r = o.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === i.child) {
        for (i = o.child; i; ) {
          if (i === n) return eh(o), e;
          if (i === r) return eh(o), t;
          i = i.sibling;
        }
        throw Error(L(188));
      }
      if (n.return !== r.return) (n = o), (r = i);
      else {
        for (var s = !1, a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) {
          for (a = i.child; a; ) {
            if (a === n) {
              (s = !0), (n = i), (r = o);
              break;
            }
            if (a === r) {
              (s = !0), (r = i), (n = o);
              break;
            }
            a = a.sibling;
          }
          if (!s) throw Error(L(189));
        }
      }
      if (n.alternate !== r) throw Error(L(190));
    }
    if (n.tag !== 3) throw Error(L(188));
    return n.stateNode.current === n ? e : t;
  }
  function Vg(e) {
    return (e = f1(e)), e !== null ? Bg(e) : null;
  }
  function Bg(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Bg(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var zg = St.unstable_scheduleCallback,
    th = St.unstable_cancelCallback,
    h1 = St.unstable_shouldYield,
    p1 = St.unstable_requestPaint,
    Me = St.unstable_now,
    m1 = St.unstable_getCurrentPriorityLevel,
    sd = St.unstable_ImmediatePriority,
    $g = St.unstable_UserBlockingPriority,
    da = St.unstable_NormalPriority,
    g1 = St.unstable_LowPriority,
    Ug = St.unstable_IdlePriority,
    Qa = null,
    en = null;
  function y1(e) {
    if (en && typeof en.onCommitFiberRoot == "function")
      try {
        en.onCommitFiberRoot(Qa, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Bt = Math.clz32 ? Math.clz32 : x1,
    v1 = Math.log,
    w1 = Math.LN2;
  function x1(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((v1(e) / w1) | 0)) | 0;
  }
  var Ss = 64,
    Cs = 4194304;
  function ii(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function fa(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      i = e.pingedLanes,
      s = n & 268435455;
    if (s !== 0) {
      var a = s & ~o;
      a !== 0 ? (r = ii(a)) : ((i &= s), i !== 0 && (r = ii(i)));
    } else (s = n & ~o), s !== 0 ? (r = ii(s)) : i !== 0 && (r = ii(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & o) &&
      ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - Bt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
  }
  function S1(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function C1(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var s = 31 - Bt(i),
        a = 1 << s,
        l = o[s];
      l === -1
        ? (!(a & n) || a & r) && (o[s] = S1(a, t))
        : l <= t && (e.expiredLanes |= a),
        (i &= ~a);
    }
  }
  function Vu(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Wg() {
    var e = Ss;
    return (Ss <<= 1), !(Ss & 4194240) && (Ss = 64), e;
  }
  function Il(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ji(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Bt(t)),
      (e[t] = n);
  }
  function E1(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - Bt(n),
        i = 1 << o;
      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
  }
  function ad(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Bt(n),
        o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
  }
  var ue = 0;
  function Hg(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Kg,
    ld,
    Gg,
    Qg,
    Yg,
    Bu = !1,
    Es = [],
    Kn = null,
    Gn = null,
    Qn = null,
    Ti = new Map(),
    bi = new Map(),
    In = [],
    P1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function nh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Gn = null;
        break;
      case "mouseover":
      case "mouseout":
        Qn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ti.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bi.delete(t.pointerId);
    }
  }
  function Qo(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [o],
        }),
        t !== null && ((t = ts(t)), t !== null && ld(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function T1(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return (Kn = Qo(Kn, e, t, n, r, o)), !0;
      case "dragenter":
        return (Gn = Qo(Gn, e, t, n, r, o)), !0;
      case "mouseover":
        return (Qn = Qo(Qn, e, t, n, r, o)), !0;
      case "pointerover":
        var i = o.pointerId;
        return Ti.set(i, Qo(Ti.get(i) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return (
          (i = o.pointerId), bi.set(i, Qo(bi.get(i) || null, e, t, n, r, o)), !0
        );
    }
    return !1;
  }
  function Xg(e) {
    var t = gr(e.target);
    if (t !== null) {
      var n = _r(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Fg(n)), t !== null)) {
            (e.blockedOn = t),
              Yg(e.priority, function () {
                Gg(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ks(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = zu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (_u = r), n.target.dispatchEvent(r), (_u = null);
      } else return (t = ts(n)), t !== null && ld(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function rh(e, t, n) {
    Ks(e) && n.delete(t);
  }
  function b1() {
    (Bu = !1),
      Kn !== null && Ks(Kn) && (Kn = null),
      Gn !== null && Ks(Gn) && (Gn = null),
      Qn !== null && Ks(Qn) && (Qn = null),
      Ti.forEach(rh),
      bi.forEach(rh);
  }
  function Yo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Bu ||
        ((Bu = !0),
        St.unstable_scheduleCallback(St.unstable_NormalPriority, b1)));
  }
  function ki(e) {
    function t(o) {
      return Yo(o, e);
    }
    if (0 < Es.length) {
      Yo(Es[0], e);
      for (var n = 1; n < Es.length; n++) {
        var r = Es[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Kn !== null && Yo(Kn, e),
        Gn !== null && Yo(Gn, e),
        Qn !== null && Yo(Qn, e),
        Ti.forEach(t),
        bi.forEach(t),
        n = 0;
      n < In.length;
      n++
    )
      (r = In[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < In.length && ((n = In[0]), n.blockedOn === null); )
      Xg(n), n.blockedOn === null && In.shift();
  }
  var lo = Tn.ReactCurrentBatchConfig,
    ha = !0;
  function k1(e, t, n, r) {
    var o = ue,
      i = lo.transition;
    lo.transition = null;
    try {
      (ue = 1), ud(e, t, n, r);
    } finally {
      (ue = o), (lo.transition = i);
    }
  }
  function M1(e, t, n, r) {
    var o = ue,
      i = lo.transition;
    lo.transition = null;
    try {
      (ue = 4), ud(e, t, n, r);
    } finally {
      (ue = o), (lo.transition = i);
    }
  }
  function ud(e, t, n, r) {
    if (ha) {
      var o = zu(e, t, n, r);
      if (o === null) Kl(e, t, r, pa, n), nh(e, r);
      else if (T1(o, e, t, n, r)) r.stopPropagation();
      else if ((nh(e, r), t & 4 && -1 < P1.indexOf(e))) {
        for (; o !== null; ) {
          var i = ts(o);
          if (
            (i !== null && Kg(i),
            (i = zu(e, t, n, r)),
            i === null && Kl(e, t, r, pa, n),
            i === o)
          )
            break;
          o = i;
        }
        o !== null && r.stopPropagation();
      } else Kl(e, t, r, null, n);
    }
  }
  var pa = null;
  function zu(e, t, n, r) {
    if (((pa = null), (e = id(r)), (e = gr(e)), e !== null))
      if (((t = _r(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Fg(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (pa = e), null;
  }
  function qg(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (m1()) {
          case sd:
            return 1;
          case $g:
            return 4;
          case da:
          case g1:
            return 16;
          case Ug:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Un = null,
    cd = null,
    Gs = null;
  function Zg() {
    if (Gs) return Gs;
    var e,
      t = cd,
      n = t.length,
      r,
      o = "value" in Un ? Un.value : Un.textContent,
      i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return (Gs = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Qs(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ps() {
    return !0;
  }
  function oh() {
    return !1;
  }
  function Et(e) {
    function t(n, r, o, i, s) {
      (this._reactName = n),
        (this._targetInst = o),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = s),
        (this.currentTarget = null);
      for (var a in e)
        e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Ps
          : oh),
        (this.isPropagationStopped = oh),
        this
      );
    }
    return (
      Ee(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ps));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ps));
        },
        persist: function () {},
        isPersistent: Ps,
      }),
      t
    );
  }
  var jo = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    dd = Et(jo),
    es = Ee({}, jo, { view: 0, detail: 0 }),
    R1 = Et(es),
    jl,
    Fl,
    Xo,
    Ya = Ee({}, es, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: fd,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Xo &&
              (Xo && e.type === "mousemove"
                ? ((jl = e.screenX - Xo.screenX), (Fl = e.screenY - Xo.screenY))
                : (Fl = jl = 0),
              (Xo = e)),
            jl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Fl;
      },
    }),
    ih = Et(Ya),
    A1 = Ee({}, Ya, { dataTransfer: 0 }),
    N1 = Et(A1),
    D1 = Ee({}, es, { relatedTarget: 0 }),
    Vl = Et(D1),
    L1 = Ee({}, jo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    O1 = Et(L1),
    _1 = Ee({}, jo, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    I1 = Et(_1),
    j1 = Ee({}, jo, { data: 0 }),
    sh = Et(j1),
    F1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    V1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    B1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function z1(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = B1[e])
      ? !!t[e]
      : !1;
  }
  function fd() {
    return z1;
  }
  var $1 = Ee({}, es, {
      key: function (e) {
        if (e.key) {
          var t = F1[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Qs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? V1[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fd,
      charCode: function (e) {
        return e.type === "keypress" ? Qs(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Qs(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    U1 = Et($1),
    W1 = Ee({}, Ya, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ah = Et(W1),
    H1 = Ee({}, es, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fd,
    }),
    K1 = Et(H1),
    G1 = Ee({}, jo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Q1 = Et(G1),
    Y1 = Ee({}, Ya, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    X1 = Et(Y1),
    q1 = [9, 13, 27, 32],
    hd = vn && "CompositionEvent" in window,
    di = null;
  vn && "documentMode" in document && (di = document.documentMode);
  var Z1 = vn && "TextEvent" in window && !di,
    Jg = vn && (!hd || (di && 8 < di && 11 >= di)),
    lh = " ",
    uh = !1;
  function ey(e, t) {
    switch (e) {
      case "keyup":
        return q1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ty(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ur = !1;
  function J1(e, t) {
    switch (e) {
      case "compositionend":
        return ty(t);
      case "keypress":
        return t.which !== 32 ? null : ((uh = !0), lh);
      case "textInput":
        return (e = t.data), e === lh && uh ? null : e;
      default:
        return null;
    }
  }
  function eS(e, t) {
    if (Ur)
      return e === "compositionend" || (!hd && ey(e, t))
        ? ((e = Zg()), (Gs = cd = Un = null), (Ur = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Jg && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var tS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ch(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tS[e.type] : t === "textarea";
  }
  function ny(e, t, n, r) {
    Lg(r),
      (t = ma(t, "onChange")),
      0 < t.length &&
        ((n = new dd("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var fi = null,
    Mi = null;
  function nS(e) {
    hy(e, 0);
  }
  function Xa(e) {
    var t = Kr(e);
    if (bg(t)) return e;
  }
  function rS(e, t) {
    if (e === "change") return t;
  }
  var ry = !1;
  if (vn) {
    var Bl;
    if (vn) {
      var zl = "oninput" in document;
      if (!zl) {
        var dh = document.createElement("div");
        dh.setAttribute("oninput", "return;"),
          (zl = typeof dh.oninput == "function");
      }
      Bl = zl;
    } else Bl = !1;
    ry = Bl && (!document.documentMode || 9 < document.documentMode);
  }
  function fh() {
    fi && (fi.detachEvent("onpropertychange", oy), (Mi = fi = null));
  }
  function oy(e) {
    if (e.propertyName === "value" && Xa(Mi)) {
      var t = [];
      ny(t, Mi, e, id(e)), jg(nS, t);
    }
  }
  function oS(e, t, n) {
    e === "focusin"
      ? (fh(), (fi = t), (Mi = n), fi.attachEvent("onpropertychange", oy))
      : e === "focusout" && fh();
  }
  function iS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Xa(Mi);
  }
  function sS(e, t) {
    if (e === "click") return Xa(t);
  }
  function aS(e, t) {
    if (e === "input" || e === "change") return Xa(t);
  }
  function lS(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var $t = typeof Object.is == "function" ? Object.is : lS;
  function Ri(e, t) {
    if ($t(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!Eu.call(t, o) || !$t(e[o], t[o])) return !1;
    }
    return !0;
  }
  function hh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ph(e, t) {
    var n = hh(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = hh(n);
    }
  }
  function iy(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? iy(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function sy() {
    for (var e = window, t = la(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = la(e.document);
    }
    return t;
  }
  function pd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function uS(e) {
    var t = sy(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      iy(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && pd(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var o = n.textContent.length,
            i = Math.min(r.start, o);
          (r = r.end === void 0 ? i : Math.min(r.end, o)),
            !e.extend && i > r && ((o = r), (r = i), (i = o)),
            (o = ph(n, i));
          var s = ph(n, r);
          o &&
            s &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== o.node ||
              e.anchorOffset !== o.offset ||
              e.focusNode !== s.node ||
              e.focusOffset !== s.offset) &&
            ((t = t.createRange()),
            t.setStart(o.node, o.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(s.node, s.offset))
              : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var cS = vn && "documentMode" in document && 11 >= document.documentMode,
    Wr = null,
    $u = null,
    hi = null,
    Uu = !1;
  function mh(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Uu ||
      Wr == null ||
      Wr !== la(r) ||
      ((r = Wr),
      "selectionStart" in r && pd(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (hi && Ri(hi, r)) ||
        ((hi = r),
        (r = ma($u, "onSelect")),
        0 < r.length &&
          ((t = new dd("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Wr))));
  }
  function Ts(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Hr = {
      animationend: Ts("Animation", "AnimationEnd"),
      animationiteration: Ts("Animation", "AnimationIteration"),
      animationstart: Ts("Animation", "AnimationStart"),
      transitionend: Ts("Transition", "TransitionEnd"),
    },
    $l = {},
    ay = {};
  vn &&
    ((ay = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Hr.animationend.animation,
      delete Hr.animationiteration.animation,
      delete Hr.animationstart.animation),
    "TransitionEvent" in window || delete Hr.transitionend.transition);
  function qa(e) {
    if ($l[e]) return $l[e];
    if (!Hr[e]) return e;
    var t = Hr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ay) return ($l[e] = t[n]);
    return e;
  }
  var ly = qa("animationend"),
    uy = qa("animationiteration"),
    cy = qa("animationstart"),
    dy = qa("transitionend"),
    fy = new Map(),
    gh =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function lr(e, t) {
    fy.set(e, t), Or(t, [e]);
  }
  for (var Ul = 0; Ul < gh.length; Ul++) {
    var Wl = gh[Ul],
      dS = Wl.toLowerCase(),
      fS = Wl[0].toUpperCase() + Wl.slice(1);
    lr(dS, "on" + fS);
  }
  lr(ly, "onAnimationEnd");
  lr(uy, "onAnimationIteration");
  lr(cy, "onAnimationStart");
  lr("dblclick", "onDoubleClick");
  lr("focusin", "onFocus");
  lr("focusout", "onBlur");
  lr(dy, "onTransitionEnd");
  Po("onMouseEnter", ["mouseout", "mouseover"]);
  Po("onMouseLeave", ["mouseout", "mouseover"]);
  Po("onPointerEnter", ["pointerout", "pointerover"]);
  Po("onPointerLeave", ["pointerout", "pointerover"]);
  Or(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " "
    )
  );
  Or(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  );
  Or("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Or(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  );
  Or(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  );
  Or(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var si =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    hS = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(si)
    );
  function yh(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), d1(r, t, void 0, e), (e.currentTarget = null);
  }
  function hy(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var a = r[s],
              l = a.instance,
              u = a.currentTarget;
            if (((a = a.listener), l !== i && o.isPropagationStopped()))
              break e;
            yh(o, a, u), (i = l);
          }
        else
          for (s = 0; s < r.length; s++) {
            if (
              ((a = r[s]),
              (l = a.instance),
              (u = a.currentTarget),
              (a = a.listener),
              l !== i && o.isPropagationStopped())
            )
              break e;
            yh(o, a, u), (i = l);
          }
      }
    }
    if (ca) throw ((e = Fu), (ca = !1), (Fu = null), e);
  }
  function ye(e, t) {
    var n = t[Qu];
    n === void 0 && (n = t[Qu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (py(t, e, 2, !1), n.add(r));
  }
  function Hl(e, t, n) {
    var r = 0;
    t && (r |= 4), py(n, e, r, t);
  }
  var bs = "_reactListening" + Math.random().toString(36).slice(2);
  function Ai(e) {
    if (!e[bs]) {
      (e[bs] = !0),
        Sg.forEach(function (n) {
          n !== "selectionchange" && (hS.has(n) || Hl(n, !1, e), Hl(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[bs] || ((t[bs] = !0), Hl("selectionchange", !1, t));
    }
  }
  function py(e, t, n, r) {
    switch (qg(t)) {
      case 1:
        var o = k1;
        break;
      case 4:
        o = M1;
        break;
      default:
        o = ud;
    }
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !ju ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      r
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
  }
  function Kl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var a = r.stateNode.containerInfo;
          if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var l = s.tag;
              if (
                (l === 3 || l === 4) &&
                ((l = s.stateNode.containerInfo),
                l === o || (l.nodeType === 8 && l.parentNode === o))
              )
                return;
              s = s.return;
            }
          for (; a !== null; ) {
            if (((s = gr(a)), s === null)) return;
            if (((l = s.tag), l === 5 || l === 6)) {
              r = i = s;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    jg(function () {
      var u = i,
        c = id(n),
        f = [];
      e: {
        var d = fy.get(e);
        if (d !== void 0) {
          var p = dd,
            y = e;
          switch (e) {
            case "keypress":
              if (Qs(n) === 0) break e;
            case "keydown":
            case "keyup":
              p = U1;
              break;
            case "focusin":
              (y = "focus"), (p = Vl);
              break;
            case "focusout":
              (y = "blur"), (p = Vl);
              break;
            case "beforeblur":
            case "afterblur":
              p = Vl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = ih;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = N1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = K1;
              break;
            case ly:
            case uy:
            case cy:
              p = O1;
              break;
            case dy:
              p = Q1;
              break;
            case "scroll":
              p = R1;
              break;
            case "wheel":
              p = X1;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = I1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = ah;
          }
          var g = (t & 4) !== 0,
            w = !g && e === "scroll",
            h = g ? (d !== null ? d + "Capture" : null) : d;
          g = [];
          for (var m = u, v; m !== null; ) {
            v = m;
            var C = v.stateNode;
            if (
              (v.tag === 5 &&
                C !== null &&
                ((v = C),
                h !== null &&
                  ((C = Pi(m, h)), C != null && g.push(Ni(m, C, v)))),
              w)
            )
              break;
            m = m.return;
          }
          0 < g.length &&
            ((d = new p(d, y, null, n, c)), f.push({ event: d, listeners: g }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((d = e === "mouseover" || e === "pointerover"),
            (p = e === "mouseout" || e === "pointerout"),
            d &&
              n !== _u &&
              (y = n.relatedTarget || n.fromElement) &&
              (gr(y) || y[wn]))
          )
            break e;
          if (
            (p || d) &&
            ((d =
              c.window === c
                ? c
                : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
            p
              ? ((y = n.relatedTarget || n.toElement),
                (p = u),
                (y = y ? gr(y) : null),
                y !== null &&
                  ((w = _r(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                  (y = null))
              : ((p = null), (y = u)),
            p !== y)
          ) {
            if (
              ((g = ih),
              (C = "onMouseLeave"),
              (h = "onMouseEnter"),
              (m = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((g = ah),
                (C = "onPointerLeave"),
                (h = "onPointerEnter"),
                (m = "pointer")),
              (w = p == null ? d : Kr(p)),
              (v = y == null ? d : Kr(y)),
              (d = new g(C, m + "leave", p, n, c)),
              (d.target = w),
              (d.relatedTarget = v),
              (C = null),
              gr(c) === u &&
                ((g = new g(h, m + "enter", y, n, c)),
                (g.target = v),
                (g.relatedTarget = w),
                (C = g)),
              (w = C),
              p && y)
            )
              t: {
                for (g = p, h = y, m = 0, v = g; v; v = Br(v)) m++;
                for (v = 0, C = h; C; C = Br(C)) v++;
                for (; 0 < m - v; ) (g = Br(g)), m--;
                for (; 0 < v - m; ) (h = Br(h)), v--;
                for (; m--; ) {
                  if (g === h || (h !== null && g === h.alternate)) break t;
                  (g = Br(g)), (h = Br(h));
                }
                g = null;
              }
            else g = null;
            p !== null && vh(f, d, p, g, !1),
              y !== null && w !== null && vh(f, w, y, g, !0);
          }
        }
        e: {
          if (
            ((d = u ? Kr(u) : window),
            (p = d.nodeName && d.nodeName.toLowerCase()),
            p === "select" || (p === "input" && d.type === "file"))
          )
            var E = rS;
          else if (ch(d))
            if (ry) E = aS;
            else {
              E = iS;
              var T = oS;
            }
          else
            (p = d.nodeName) &&
              p.toLowerCase() === "input" &&
              (d.type === "checkbox" || d.type === "radio") &&
              (E = sS);
          if (E && (E = E(e, u))) {
            ny(f, E, n, c);
            break e;
          }
          T && T(e, d, u),
            e === "focusout" &&
              (T = d._wrapperState) &&
              T.controlled &&
              d.type === "number" &&
              Au(d, "number", d.value);
        }
        switch (((T = u ? Kr(u) : window), e)) {
          case "focusin":
            (ch(T) || T.contentEditable === "true") &&
              ((Wr = T), ($u = u), (hi = null));
            break;
          case "focusout":
            hi = $u = Wr = null;
            break;
          case "mousedown":
            Uu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Uu = !1), mh(f, n, c);
            break;
          case "selectionchange":
            if (cS) break;
          case "keydown":
          case "keyup":
            mh(f, n, c);
        }
        var M;
        if (hd)
          e: {
            switch (e) {
              case "compositionstart":
                var b = "onCompositionStart";
                break e;
              case "compositionend":
                b = "onCompositionEnd";
                break e;
              case "compositionupdate":
                b = "onCompositionUpdate";
                break e;
            }
            b = void 0;
          }
        else
          Ur
            ? ey(e, n) && (b = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (b = "onCompositionStart");
        b &&
          (Jg &&
            n.locale !== "ko" &&
            (Ur || b !== "onCompositionStart"
              ? b === "onCompositionEnd" && Ur && (M = Zg())
              : ((Un = c),
                (cd = "value" in Un ? Un.value : Un.textContent),
                (Ur = !0))),
          (T = ma(u, b)),
          0 < T.length &&
            ((b = new sh(b, e, null, n, c)),
            f.push({ event: b, listeners: T }),
            M ? (b.data = M) : ((M = ty(n)), M !== null && (b.data = M)))),
          (M = Z1 ? J1(e, n) : eS(e, n)) &&
            ((u = ma(u, "onBeforeInput")),
            0 < u.length &&
              ((c = new sh("onBeforeInput", "beforeinput", null, n, c)),
              f.push({ event: c, listeners: u }),
              (c.data = M)));
      }
      hy(f, t);
    });
  }
  function Ni(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ma(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
        i = o.stateNode;
      o.tag === 5 &&
        i !== null &&
        ((o = i),
        (i = Pi(e, n)),
        i != null && r.unshift(Ni(e, i, o)),
        (i = Pi(e, t)),
        i != null && r.push(Ni(e, i, o))),
        (e = e.return);
    }
    return r;
  }
  function Br(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function vh(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
      var a = n,
        l = a.alternate,
        u = a.stateNode;
      if (l !== null && l === r) break;
      a.tag === 5 &&
        u !== null &&
        ((a = u),
        o
          ? ((l = Pi(n, i)), l != null && s.unshift(Ni(n, l, a)))
          : o || ((l = Pi(n, i)), l != null && s.push(Ni(n, l, a)))),
        (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var pS = /\r\n?/g,
    mS = /\u0000|\uFFFD/g;
  function wh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        pS,
        `
`
      )
      .replace(mS, "");
  }
  function ks(e, t, n) {
    if (((t = wh(t)), wh(e) !== t && n)) throw Error(L(425));
  }
  function ga() {}
  var Wu = null,
    Hu = null;
  function Ku(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Gu = typeof setTimeout == "function" ? setTimeout : void 0,
    gS = typeof clearTimeout == "function" ? clearTimeout : void 0,
    xh = typeof Promise == "function" ? Promise : void 0,
    yS =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof xh < "u"
        ? function (e) {
            return xh.resolve(null).then(e).catch(vS);
          }
        : Gu;
  function vS(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Gl(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(o), ki(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
    } while (n);
    ki(t);
  }
  function Yn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Sh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Fo = Math.random().toString(36).slice(2),
    Jt = "__reactFiber$" + Fo,
    Di = "__reactProps$" + Fo,
    wn = "__reactContainer$" + Fo,
    Qu = "__reactEvents$" + Fo,
    wS = "__reactListeners$" + Fo,
    xS = "__reactHandles$" + Fo;
  function gr(e) {
    var t = e[Jt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[wn] || n[Jt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Sh(e); e !== null; ) {
            if ((n = e[Jt])) return n;
            e = Sh(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function ts(e) {
    return (
      (e = e[Jt] || e[wn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Kr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(L(33));
  }
  function Za(e) {
    return e[Di] || null;
  }
  var Yu = [],
    Gr = -1;
  function ur(e) {
    return { current: e };
  }
  function ve(e) {
    0 > Gr || ((e.current = Yu[Gr]), (Yu[Gr] = null), Gr--);
  }
  function de(e, t) {
    Gr++, (Yu[Gr] = e.current), (e.current = t);
  }
  var tr = {},
    Ye = ur(tr),
    at = ur(!1),
    kr = tr;
  function To(e, t) {
    var n = e.type.contextTypes;
    if (!n) return tr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
      i;
    for (i in n) o[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function lt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ya() {
    ve(at), ve(Ye);
  }
  function Ch(e, t, n) {
    if (Ye.current !== tr) throw Error(L(168));
    de(Ye, t), de(at, n);
  }
  function my(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(L(108, o1(e) || "Unknown", o));
    return Ee({}, n, r);
  }
  function va(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        tr),
      (kr = Ye.current),
      de(Ye, e),
      de(at, at.current),
      !0
    );
  }
  function Eh(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(L(169));
    n
      ? ((e = my(e, t, kr)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ve(at),
        ve(Ye),
        de(Ye, e))
      : ve(at),
      de(at, n);
  }
  var fn = null,
    Ja = !1,
    Ql = !1;
  function gy(e) {
    fn === null ? (fn = [e]) : fn.push(e);
  }
  function SS(e) {
    (Ja = !0), gy(e);
  }
  function cr() {
    if (!Ql && fn !== null) {
      Ql = !0;
      var e = 0,
        t = ue;
      try {
        var n = fn;
        for (ue = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (fn = null), (Ja = !1);
      } catch (o) {
        throw (fn !== null && (fn = fn.slice(e + 1)), zg(sd, cr), o);
      } finally {
        (ue = t), (Ql = !1);
      }
    }
    return null;
  }
  var Qr = [],
    Yr = 0,
    wa = null,
    xa = 0,
    kt = [],
    Mt = 0,
    Mr = null,
    hn = 1,
    pn = "";
  function hr(e, t) {
    (Qr[Yr++] = xa), (Qr[Yr++] = wa), (wa = e), (xa = t);
  }
  function yy(e, t, n) {
    (kt[Mt++] = hn), (kt[Mt++] = pn), (kt[Mt++] = Mr), (Mr = e);
    var r = hn;
    e = pn;
    var o = 32 - Bt(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - Bt(t) + o;
    if (30 < i) {
      var s = o - (o % 5);
      (i = (r & ((1 << s) - 1)).toString(32)),
        (r >>= s),
        (o -= s),
        (hn = (1 << (32 - Bt(t) + o)) | (n << o) | r),
        (pn = i + e);
    } else (hn = (1 << i) | (n << o) | r), (pn = e);
  }
  function md(e) {
    e.return !== null && (hr(e, 1), yy(e, 1, 0));
  }
  function gd(e) {
    for (; e === wa; )
      (wa = Qr[--Yr]), (Qr[Yr] = null), (xa = Qr[--Yr]), (Qr[Yr] = null);
    for (; e === Mr; )
      (Mr = kt[--Mt]),
        (kt[Mt] = null),
        (pn = kt[--Mt]),
        (kt[Mt] = null),
        (hn = kt[--Mt]),
        (kt[Mt] = null);
  }
  var vt = null,
    yt = null,
    we = !1,
    Vt = null;
  function vy(e, t) {
    var n = Rt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Ph(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (vt = e), (yt = Yn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (vt = e), (yt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Mr !== null ? { id: hn, overflow: pn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Rt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (vt = e),
              (yt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Xu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function qu(e) {
    if (we) {
      var t = yt;
      if (t) {
        var n = t;
        if (!Ph(e, t)) {
          if (Xu(e)) throw Error(L(418));
          t = Yn(n.nextSibling);
          var r = vt;
          t && Ph(e, t)
            ? vy(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (we = !1), (vt = e));
        }
      } else {
        if (Xu(e)) throw Error(L(418));
        (e.flags = (e.flags & -4097) | 2), (we = !1), (vt = e);
      }
    }
  }
  function Th(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    vt = e;
  }
  function Ms(e) {
    if (e !== vt) return !1;
    if (!we) return Th(e), (we = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ku(e.type, e.memoizedProps))),
      t && (t = yt))
    ) {
      if (Xu(e)) throw (wy(), Error(L(418)));
      for (; t; ) vy(e, t), (t = Yn(t.nextSibling));
    }
    if ((Th(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(L(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                yt = Yn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        yt = null;
      }
    } else yt = vt ? Yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function wy() {
    for (var e = yt; e; ) e = Yn(e.nextSibling);
  }
  function bo() {
    (yt = vt = null), (we = !1);
  }
  function yd(e) {
    Vt === null ? (Vt = [e]) : Vt.push(e);
  }
  var CS = Tn.ReactCurrentBatchConfig;
  function qo(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(L(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(L(147, e));
        var o = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (s) {
              var a = o.refs;
              s === null ? delete a[i] : (a[i] = s);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(L(284));
      if (!n._owner) throw Error(L(290, e));
    }
    return e;
  }
  function Rs(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        L(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function bh(e) {
    var t = e._init;
    return t(e._payload);
  }
  function xy(e) {
    function t(h, m) {
      if (e) {
        var v = h.deletions;
        v === null ? ((h.deletions = [m]), (h.flags |= 16)) : v.push(m);
      }
    }
    function n(h, m) {
      if (!e) return null;
      for (; m !== null; ) t(h, m), (m = m.sibling);
      return null;
    }
    function r(h, m) {
      for (h = new Map(); m !== null; )
        m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
      return h;
    }
    function o(h, m) {
      return (h = Jn(h, m)), (h.index = 0), (h.sibling = null), h;
    }
    function i(h, m, v) {
      return (
        (h.index = v),
        e
          ? ((v = h.alternate),
            v !== null
              ? ((v = v.index), v < m ? ((h.flags |= 2), m) : v)
              : ((h.flags |= 2), m))
          : ((h.flags |= 1048576), m)
      );
    }
    function s(h) {
      return e && h.alternate === null && (h.flags |= 2), h;
    }
    function a(h, m, v, C) {
      return m === null || m.tag !== 6
        ? ((m = tu(v, h.mode, C)), (m.return = h), m)
        : ((m = o(m, v)), (m.return = h), m);
    }
    function l(h, m, v, C) {
      var E = v.type;
      return E === $r
        ? c(h, m, v.props.children, C, v.key)
        : m !== null &&
          (m.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === On &&
              bh(E) === m.type))
        ? ((C = o(m, v.props)), (C.ref = qo(h, m, v)), (C.return = h), C)
        : ((C = ta(v.type, v.key, v.props, null, h.mode, C)),
          (C.ref = qo(h, m, v)),
          (C.return = h),
          C);
    }
    function u(h, m, v, C) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== v.containerInfo ||
        m.stateNode.implementation !== v.implementation
        ? ((m = nu(v, h.mode, C)), (m.return = h), m)
        : ((m = o(m, v.children || [])), (m.return = h), m);
    }
    function c(h, m, v, C, E) {
      return m === null || m.tag !== 7
        ? ((m = Tr(v, h.mode, C, E)), (m.return = h), m)
        : ((m = o(m, v)), (m.return = h), m);
    }
    function f(h, m, v) {
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return (m = tu("" + m, h.mode, v)), (m.return = h), m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case vs:
            return (
              (v = ta(m.type, m.key, m.props, null, h.mode, v)),
              (v.ref = qo(h, null, m)),
              (v.return = h),
              v
            );
          case zr:
            return (m = nu(m, h.mode, v)), (m.return = h), m;
          case On:
            var C = m._init;
            return f(h, C(m._payload), v);
        }
        if (oi(m) || Ko(m))
          return (m = Tr(m, h.mode, v, null)), (m.return = h), m;
        Rs(h, m);
      }
      return null;
    }
    function d(h, m, v, C) {
      var E = m !== null ? m.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return E !== null ? null : a(h, m, "" + v, C);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case vs:
            return v.key === E ? l(h, m, v, C) : null;
          case zr:
            return v.key === E ? u(h, m, v, C) : null;
          case On:
            return (E = v._init), d(h, m, E(v._payload), C);
        }
        if (oi(v) || Ko(v)) return E !== null ? null : c(h, m, v, C, null);
        Rs(h, v);
      }
      return null;
    }
    function p(h, m, v, C, E) {
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return (h = h.get(v) || null), a(m, h, "" + C, E);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case vs:
            return (
              (h = h.get(C.key === null ? v : C.key) || null), l(m, h, C, E)
            );
          case zr:
            return (
              (h = h.get(C.key === null ? v : C.key) || null), u(m, h, C, E)
            );
          case On:
            var T = C._init;
            return p(h, m, v, T(C._payload), E);
        }
        if (oi(C) || Ko(C)) return (h = h.get(v) || null), c(m, h, C, E, null);
        Rs(m, C);
      }
      return null;
    }
    function y(h, m, v, C) {
      for (
        var E = null, T = null, M = m, b = (m = 0), j = null;
        M !== null && b < v.length;
        b++
      ) {
        M.index > b ? ((j = M), (M = null)) : (j = M.sibling);
        var _ = d(h, M, v[b], C);
        if (_ === null) {
          M === null && (M = j);
          break;
        }
        e && M && _.alternate === null && t(h, M),
          (m = i(_, m, b)),
          T === null ? (E = _) : (T.sibling = _),
          (T = _),
          (M = j);
      }
      if (b === v.length) return n(h, M), we && hr(h, b), E;
      if (M === null) {
        for (; b < v.length; b++)
          (M = f(h, v[b], C)),
            M !== null &&
              ((m = i(M, m, b)),
              T === null ? (E = M) : (T.sibling = M),
              (T = M));
        return we && hr(h, b), E;
      }
      for (M = r(h, M); b < v.length; b++)
        (j = p(M, h, b, v[b], C)),
          j !== null &&
            (e && j.alternate !== null && M.delete(j.key === null ? b : j.key),
            (m = i(j, m, b)),
            T === null ? (E = j) : (T.sibling = j),
            (T = j));
      return (
        e &&
          M.forEach(function (H) {
            return t(h, H);
          }),
        we && hr(h, b),
        E
      );
    }
    function g(h, m, v, C) {
      var E = Ko(v);
      if (typeof E != "function") throw Error(L(150));
      if (((v = E.call(v)), v == null)) throw Error(L(151));
      for (
        var T = (E = null), M = m, b = (m = 0), j = null, _ = v.next();
        M !== null && !_.done;
        b++, _ = v.next()
      ) {
        M.index > b ? ((j = M), (M = null)) : (j = M.sibling);
        var H = d(h, M, _.value, C);
        if (H === null) {
          M === null && (M = j);
          break;
        }
        e && M && H.alternate === null && t(h, M),
          (m = i(H, m, b)),
          T === null ? (E = H) : (T.sibling = H),
          (T = H),
          (M = j);
      }
      if (_.done) return n(h, M), we && hr(h, b), E;
      if (M === null) {
        for (; !_.done; b++, _ = v.next())
          (_ = f(h, _.value, C)),
            _ !== null &&
              ((m = i(_, m, b)),
              T === null ? (E = _) : (T.sibling = _),
              (T = _));
        return we && hr(h, b), E;
      }
      for (M = r(h, M); !_.done; b++, _ = v.next())
        (_ = p(M, h, b, _.value, C)),
          _ !== null &&
            (e && _.alternate !== null && M.delete(_.key === null ? b : _.key),
            (m = i(_, m, b)),
            T === null ? (E = _) : (T.sibling = _),
            (T = _));
      return (
        e &&
          M.forEach(function (D) {
            return t(h, D);
          }),
        we && hr(h, b),
        E
      );
    }
    function w(h, m, v, C) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === $r &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case vs:
            e: {
              for (var E = v.key, T = m; T !== null; ) {
                if (T.key === E) {
                  if (((E = v.type), E === $r)) {
                    if (T.tag === 7) {
                      n(h, T.sibling),
                        (m = o(T, v.props.children)),
                        (m.return = h),
                        (h = m);
                      break e;
                    }
                  } else if (
                    T.elementType === E ||
                    (typeof E == "object" &&
                      E !== null &&
                      E.$$typeof === On &&
                      bh(E) === T.type)
                  ) {
                    n(h, T.sibling),
                      (m = o(T, v.props)),
                      (m.ref = qo(h, T, v)),
                      (m.return = h),
                      (h = m);
                    break e;
                  }
                  n(h, T);
                  break;
                } else t(h, T);
                T = T.sibling;
              }
              v.type === $r
                ? ((m = Tr(v.props.children, h.mode, C, v.key)),
                  (m.return = h),
                  (h = m))
                : ((C = ta(v.type, v.key, v.props, null, h.mode, C)),
                  (C.ref = qo(h, m, v)),
                  (C.return = h),
                  (h = C));
            }
            return s(h);
          case zr:
            e: {
              for (T = v.key; m !== null; ) {
                if (m.key === T)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === v.containerInfo &&
                    m.stateNode.implementation === v.implementation
                  ) {
                    n(h, m.sibling),
                      (m = o(m, v.children || [])),
                      (m.return = h),
                      (h = m);
                    break e;
                  } else {
                    n(h, m);
                    break;
                  }
                else t(h, m);
                m = m.sibling;
              }
              (m = nu(v, h.mode, C)), (m.return = h), (h = m);
            }
            return s(h);
          case On:
            return (T = v._init), w(h, m, T(v._payload), C);
        }
        if (oi(v)) return y(h, m, v, C);
        if (Ko(v)) return g(h, m, v, C);
        Rs(h, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          m !== null && m.tag === 6
            ? (n(h, m.sibling), (m = o(m, v)), (m.return = h), (h = m))
            : (n(h, m), (m = tu(v, h.mode, C)), (m.return = h), (h = m)),
          s(h))
        : n(h, m);
    }
    return w;
  }
  var ko = xy(!0),
    Sy = xy(!1),
    Sa = ur(null),
    Ca = null,
    Xr = null,
    vd = null;
  function wd() {
    vd = Xr = Ca = null;
  }
  function xd(e) {
    var t = Sa.current;
    ve(Sa), (e._currentValue = t);
  }
  function Zu(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function uo(e, t) {
    (Ca = e),
      (vd = Xr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (st = !0), (e.firstContext = null));
  }
  function Nt(e) {
    var t = e._currentValue;
    if (vd !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Xr === null)) {
        if (Ca === null) throw Error(L(308));
        (Xr = e), (Ca.dependencies = { lanes: 0, firstContext: e });
      } else Xr = Xr.next = e;
    return t;
  }
  var yr = null;
  function Sd(e) {
    yr === null ? (yr = [e]) : yr.push(e);
  }
  function Cy(e, t, n, r) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), Sd(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      xn(e, r)
    );
  }
  function xn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var _n = !1;
  function Cd(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ey(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function mn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Xn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), oe & 2)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        xn(e, n)
      );
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), Sd(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      xn(e, n)
    );
  }
  function Ys(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ad(e, n);
    }
  }
  function kh(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var s = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
        } while (n !== null);
        i === null ? (o = i = t) : (i = i.next = t);
      } else o = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Ea(e, t, n, r) {
    var o = e.updateQueue;
    _n = !1;
    var i = o.firstBaseUpdate,
      s = o.lastBaseUpdate,
      a = o.shared.pending;
    if (a !== null) {
      o.shared.pending = null;
      var l = a,
        u = l.next;
      (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
      var c = e.alternate;
      c !== null &&
        ((c = c.updateQueue),
        (a = c.lastBaseUpdate),
        a !== s &&
          (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
          (c.lastBaseUpdate = l)));
    }
    if (i !== null) {
      var f = o.baseState;
      (s = 0), (c = u = l = null), (a = i);
      do {
        var d = a.lane,
          p = a.eventTime;
        if ((r & d) === d) {
          c !== null &&
            (c = c.next =
              {
                eventTime: p,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var y = e,
              g = a;
            switch (((d = t), (p = n), g.tag)) {
              case 1:
                if (((y = g.payload), typeof y == "function")) {
                  f = y.call(p, f, d);
                  break e;
                }
                f = y;
                break e;
              case 3:
                y.flags = (y.flags & -65537) | 128;
              case 0:
                if (
                  ((y = g.payload),
                  (d = typeof y == "function" ? y.call(p, f, d) : y),
                  d == null)
                )
                  break e;
                f = Ee({}, f, d);
                break e;
              case 2:
                _n = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (d = o.effects),
            d === null ? (o.effects = [a]) : d.push(a));
        } else
          (p = {
            eventTime: p,
            lane: d,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            c === null ? ((u = c = p), (l = f)) : (c = c.next = p),
            (s |= d);
        if (((a = a.next), a === null)) {
          if (((a = o.shared.pending), a === null)) break;
          (d = a),
            (a = d.next),
            (d.next = null),
            (o.lastBaseUpdate = d),
            (o.shared.pending = null);
        }
      } while (!0);
      if (
        (c === null && (l = f),
        (o.baseState = l),
        (o.firstBaseUpdate = u),
        (o.lastBaseUpdate = c),
        (t = o.shared.interleaved),
        t !== null)
      ) {
        o = t;
        do (s |= o.lane), (o = o.next);
        while (o !== t);
      } else i === null && (o.shared.lanes = 0);
      (Ar |= s), (e.lanes = s), (e.memoizedState = f);
    }
  }
  function Mh(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != "function"))
            throw Error(L(191, o));
          o.call(r);
        }
      }
  }
  var ns = {},
    tn = ur(ns),
    Li = ur(ns),
    Oi = ur(ns);
  function vr(e) {
    if (e === ns) throw Error(L(174));
    return e;
  }
  function Ed(e, t) {
    switch ((de(Oi, t), de(Li, e), de(tn, ns), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Du(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Du(t, e));
    }
    ve(tn), de(tn, t);
  }
  function Mo() {
    ve(tn), ve(Li), ve(Oi);
  }
  function Py(e) {
    vr(Oi.current);
    var t = vr(tn.current),
      n = Du(t, e.type);
    t !== n && (de(Li, e), de(tn, n));
  }
  function Pd(e) {
    Li.current === e && (ve(tn), ve(Li));
  }
  var xe = ur(0);
  function Pa(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Yl = [];
  function Td() {
    for (var e = 0; e < Yl.length; e++)
      Yl[e]._workInProgressVersionPrimary = null;
    Yl.length = 0;
  }
  var Xs = Tn.ReactCurrentDispatcher,
    Xl = Tn.ReactCurrentBatchConfig,
    Rr = 0,
    Ce = null,
    De = null,
    _e = null,
    Ta = !1,
    pi = !1,
    _i = 0,
    ES = 0;
  function Ue() {
    throw Error(L(321));
  }
  function bd(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!$t(e[n], t[n])) return !1;
    return !0;
  }
  function kd(e, t, n, r, o, i) {
    if (
      ((Rr = i),
      (Ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Xs.current = e === null || e.memoizedState === null ? kS : MS),
      (e = n(r, o)),
      pi)
    ) {
      i = 0;
      do {
        if (((pi = !1), (_i = 0), 25 <= i)) throw Error(L(301));
        (i += 1),
          (_e = De = null),
          (t.updateQueue = null),
          (Xs.current = RS),
          (e = n(r, o));
      } while (pi);
    }
    if (
      ((Xs.current = ba),
      (t = De !== null && De.next !== null),
      (Rr = 0),
      (_e = De = Ce = null),
      (Ta = !1),
      t)
    )
      throw Error(L(300));
    return e;
  }
  function Md() {
    var e = _i !== 0;
    return (_i = 0), e;
  }
  function Yt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return _e === null ? (Ce.memoizedState = _e = e) : (_e = _e.next = e), _e;
  }
  function Dt() {
    if (De === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = De.next;
    var t = _e === null ? Ce.memoizedState : _e.next;
    if (t !== null) (_e = t), (De = e);
    else {
      if (e === null) throw Error(L(310));
      (De = e),
        (e = {
          memoizedState: De.memoizedState,
          baseState: De.baseState,
          baseQueue: De.baseQueue,
          queue: De.queue,
          next: null,
        }),
        _e === null ? (Ce.memoizedState = _e = e) : (_e = _e.next = e);
    }
    return _e;
  }
  function Ii(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ql(e) {
    var t = Dt(),
      n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = De,
      o = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (o !== null) {
        var s = o.next;
        (o.next = i.next), (i.next = s);
      }
      (r.baseQueue = o = i), (n.pending = null);
    }
    if (o !== null) {
      (i = o.next), (r = r.baseState);
      var a = (s = null),
        l = null,
        u = i;
      do {
        var c = u.lane;
        if ((Rr & c) === c)
          l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.hasEagerState ? u.eagerState : e(r, u.action));
        else {
          var f = {
            lane: c,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
            (Ce.lanes |= c),
            (Ar |= c);
        }
        u = u.next;
      } while (u !== null && u !== i);
      l === null ? (s = r) : (l.next = a),
        $t(r, t.memoizedState) || (st = !0),
        (t.memoizedState = r),
        (t.baseState = s),
        (t.baseQueue = l),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do (i = o.lane), (Ce.lanes |= i), (Ar |= i), (o = o.next);
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Zl(e) {
    var t = Dt(),
      n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var s = (o = o.next);
      do (i = e(i, s.action)), (s = s.next);
      while (s !== o);
      $t(i, t.memoizedState) || (st = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function Ty() {}
  function by(e, t) {
    var n = Ce,
      r = Dt(),
      o = t(),
      i = !$t(r.memoizedState, o);
    if (
      (i && ((r.memoizedState = o), (st = !0)),
      (r = r.queue),
      Rd(Ry.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (_e !== null && _e.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ji(9, My.bind(null, n, r, o, t), void 0, null),
        Ie === null)
      )
        throw Error(L(349));
      Rr & 30 || ky(n, t, o);
    }
    return o;
  }
  function ky(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function My(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ay(t) && Ny(e);
  }
  function Ry(e, t, n) {
    return n(function () {
      Ay(t) && Ny(e);
    });
  }
  function Ay(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !$t(e, n);
    } catch {
      return !0;
    }
  }
  function Ny(e) {
    var t = xn(e, 1);
    t !== null && zt(t, e, 1, -1);
  }
  function Rh(e) {
    var t = Yt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ii,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = bS.bind(null, Ce, e)),
      [t.memoizedState, e]
    );
  }
  function ji(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Dy() {
    return Dt().memoizedState;
  }
  function qs(e, t, n, r) {
    var o = Yt();
    (Ce.flags |= e),
      (o.memoizedState = ji(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function el(e, t, n, r) {
    var o = Dt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (De !== null) {
      var s = De.memoizedState;
      if (((i = s.destroy), r !== null && bd(r, s.deps))) {
        o.memoizedState = ji(t, n, i, r);
        return;
      }
    }
    (Ce.flags |= e), (o.memoizedState = ji(1 | t, n, i, r));
  }
  function Ah(e, t) {
    return qs(8390656, 8, e, t);
  }
  function Rd(e, t) {
    return el(2048, 8, e, t);
  }
  function Ly(e, t) {
    return el(4, 2, e, t);
  }
  function Oy(e, t) {
    return el(4, 4, e, t);
  }
  function _y(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Iy(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), el(4, 4, _y.bind(null, t, e), n)
    );
  }
  function Ad() {}
  function jy(e, t) {
    var n = Dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && bd(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Fy(e, t) {
    var n = Dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && bd(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Vy(e, t, n) {
    return Rr & 21
      ? ($t(n, t) ||
          ((n = Wg()), (Ce.lanes |= n), (Ar |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = n));
  }
  function PS(e, t) {
    var n = ue;
    (ue = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Xl.transition;
    Xl.transition = {};
    try {
      e(!1), t();
    } finally {
      (ue = n), (Xl.transition = r);
    }
  }
  function By() {
    return Dt().memoizedState;
  }
  function TS(e, t, n) {
    var r = Zn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zy(e))
    )
      $y(t, n);
    else if (((n = Cy(e, t, n, r)), n !== null)) {
      var o = tt();
      zt(n, e, r, o), Uy(n, t, r);
    }
  }
  function bS(e, t, n) {
    var r = Zn(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (zy(e)) $y(t, o);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var s = t.lastRenderedState,
            a = i(s, n);
          if (((o.hasEagerState = !0), (o.eagerState = a), $t(a, s))) {
            var l = t.interleaved;
            l === null
              ? ((o.next = o), Sd(t))
              : ((o.next = l.next), (l.next = o)),
              (t.interleaved = o);
            return;
          }
        } catch {
        } finally {
        }
      (n = Cy(e, t, o, r)),
        n !== null && ((o = tt()), zt(n, e, r, o), Uy(n, t, r));
    }
  }
  function zy(e) {
    var t = e.alternate;
    return e === Ce || (t !== null && t === Ce);
  }
  function $y(e, t) {
    pi = Ta = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Uy(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ad(e, n);
    }
  }
  var ba = {
      readContext: Nt,
      useCallback: Ue,
      useContext: Ue,
      useEffect: Ue,
      useImperativeHandle: Ue,
      useInsertionEffect: Ue,
      useLayoutEffect: Ue,
      useMemo: Ue,
      useReducer: Ue,
      useRef: Ue,
      useState: Ue,
      useDebugValue: Ue,
      useDeferredValue: Ue,
      useTransition: Ue,
      useMutableSource: Ue,
      useSyncExternalStore: Ue,
      useId: Ue,
      unstable_isNewReconciler: !1,
    },
    kS = {
      readContext: Nt,
      useCallback: function (e, t) {
        return (Yt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Nt,
      useEffect: Ah,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          qs(4194308, 4, _y.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return qs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return qs(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Yt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Yt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = TS.bind(null, Ce, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Yt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Rh,
      useDebugValue: Ad,
      useDeferredValue: function (e) {
        return (Yt().memoizedState = e);
      },
      useTransition: function () {
        var e = Rh(!1),
          t = e[0];
        return (e = PS.bind(null, e[1])), (Yt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ce,
          o = Yt();
        if (we) {
          if (n === void 0) throw Error(L(407));
          n = n();
        } else {
          if (((n = t()), Ie === null)) throw Error(L(349));
          Rr & 30 || ky(r, t, n);
        }
        o.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (o.queue = i),
          Ah(Ry.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          ji(9, My.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Yt(),
          t = Ie.identifierPrefix;
        if (we) {
          var n = pn,
            r = hn;
          (n = (r & ~(1 << (32 - Bt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = _i++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = ES++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    MS = {
      readContext: Nt,
      useCallback: jy,
      useContext: Nt,
      useEffect: Rd,
      useImperativeHandle: Iy,
      useInsertionEffect: Ly,
      useLayoutEffect: Oy,
      useMemo: Fy,
      useReducer: ql,
      useRef: Dy,
      useState: function () {
        return ql(Ii);
      },
      useDebugValue: Ad,
      useDeferredValue: function (e) {
        var t = Dt();
        return Vy(t, De.memoizedState, e);
      },
      useTransition: function () {
        var e = ql(Ii)[0],
          t = Dt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ty,
      useSyncExternalStore: by,
      useId: By,
      unstable_isNewReconciler: !1,
    },
    RS = {
      readContext: Nt,
      useCallback: jy,
      useContext: Nt,
      useEffect: Rd,
      useImperativeHandle: Iy,
      useInsertionEffect: Ly,
      useLayoutEffect: Oy,
      useMemo: Fy,
      useReducer: Zl,
      useRef: Dy,
      useState: function () {
        return Zl(Ii);
      },
      useDebugValue: Ad,
      useDeferredValue: function (e) {
        var t = Dt();
        return De === null ? (t.memoizedState = e) : Vy(t, De.memoizedState, e);
      },
      useTransition: function () {
        var e = Zl(Ii)[0],
          t = Dt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ty,
      useSyncExternalStore: by,
      useId: By,
      unstable_isNewReconciler: !1,
    };
  function _t(e, t) {
    if (e && e.defaultProps) {
      (t = Ee({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ju(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : Ee({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var tl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? _r(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = tt(),
        o = Zn(e),
        i = mn(r, o);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = Xn(e, i, o)),
        t !== null && (zt(t, e, o, r), Ys(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = tt(),
        o = Zn(e),
        i = mn(r, o);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Xn(e, i, o)),
        t !== null && (zt(t, e, o, r), Ys(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = tt(),
        r = Zn(e),
        o = mn(n, r);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = Xn(e, o, r)),
        t !== null && (zt(t, e, r, n), Ys(t, e, r));
    },
  };
  function Nh(e, t, n, r, o, i, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, s)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Ri(n, r) || !Ri(o, i)
        : !0
    );
  }
  function Wy(e, t, n) {
    var r = !1,
      o = tr,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Nt(i))
        : ((o = lt(t) ? kr : Ye.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? To(e, o) : tr)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = tl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Dh(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && tl.enqueueReplaceState(t, t.state, null);
  }
  function ec(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Cd(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (o.context = Nt(i))
      : ((i = lt(t) ? kr : Ye.current), (o.context = To(e, i))),
      (o.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Ju(e, t, i, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && tl.enqueueReplaceState(o, o.state, null),
        Ea(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ro(e, t) {
    try {
      var n = "",
        r = t;
      do (n += r1(r)), (r = r.return);
      while (r);
      var o = n;
    } catch (i) {
      o =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Jl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function tc(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var AS = typeof WeakMap == "function" ? WeakMap : Map;
  function Hy(e, t, n) {
    (n = mn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Ma || ((Ma = !0), (dc = r)), tc(e, t);
      }),
      n
    );
  }
  function Ky(e, t, n) {
    (n = mn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      (n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          tc(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          tc(e, t),
            typeof r != "function" &&
              (qn === null ? (qn = new Set([this])) : qn.add(this));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : "",
          });
        }),
      n
    );
  }
  function Lh(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new AS();
      var o = new Set();
      r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = WS.bind(null, e, t, n)), t.then(e, e));
  }
  function Oh(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function _h(e, t, n, r, o) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = o), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = mn(-1, 1)), (t.tag = 2), Xn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var NS = Tn.ReactCurrentOwner,
    st = !1;
  function Ze(e, t, n, r) {
    t.child = e === null ? Sy(t, null, n, r) : ko(t, e.child, n, r);
  }
  function Ih(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
      uo(t, o),
      (r = kd(e, t, n, r, i, o)),
      (n = Md()),
      e !== null && !st
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Sn(e, t, o))
        : (we && n && md(t), (t.flags |= 1), Ze(e, t, r, o), t.child)
    );
  }
  function jh(e, t, n, r, o) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !Fd(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Gy(e, t, i, r, o))
        : ((e = ta(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
      var s = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ri), n(s, r) && e.ref === t.ref)
      )
        return Sn(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = Jn(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Gy(e, t, n, r, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Ri(i, r) && e.ref === t.ref)
        if (((st = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
          e.flags & 131072 && (st = !0);
        else return (t.lanes = e.lanes), Sn(e, t, o);
    }
    return nc(e, t, n, r, o);
  }
  function Qy(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          de(Zr, mt),
          (mt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            de(Zr, mt),
            (mt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          de(Zr, mt),
          (mt |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        de(Zr, mt),
        (mt |= r);
    return Ze(e, t, o, n), t.child;
  }
  function Yy(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function nc(e, t, n, r, o) {
    var i = lt(n) ? kr : Ye.current;
    return (
      (i = To(t, i)),
      uo(t, o),
      (n = kd(e, t, n, r, i, o)),
      (r = Md()),
      e !== null && !st
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Sn(e, t, o))
        : (we && r && md(t), (t.flags |= 1), Ze(e, t, n, o), t.child)
    );
  }
  function Fh(e, t, n, r, o) {
    if (lt(n)) {
      var i = !0;
      va(t);
    } else i = !1;
    if ((uo(t, o), t.stateNode === null))
      Zs(e, t), Wy(t, n, r), ec(t, n, r, o), (r = !0);
    else if (e === null) {
      var s = t.stateNode,
        a = t.memoizedProps;
      s.props = a;
      var l = s.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = Nt(u))
        : ((u = lt(n) ? kr : Ye.current), (u = To(t, u)));
      var c = n.getDerivedStateFromProps,
        f =
          typeof c == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function";
      f ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((a !== r || l !== u) && Dh(t, s, r, u)),
        (_n = !1);
      var d = t.memoizedState;
      (s.state = d),
        Ea(t, r, s, o),
        (l = t.memoizedState),
        a !== r || d !== l || at.current || _n
          ? (typeof c == "function" && (Ju(t, n, c, r), (l = t.memoizedState)),
            (a = _n || Nh(t, n, a, r, d, l, u))
              ? (f ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = l)),
            (s.props = r),
            (s.state = l),
            (s.context = u),
            (r = a))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (s = t.stateNode),
        Ey(e, t),
        (a = t.memoizedProps),
        (u = t.type === t.elementType ? a : _t(t.type, a)),
        (s.props = u),
        (f = t.pendingProps),
        (d = s.context),
        (l = n.contextType),
        typeof l == "object" && l !== null
          ? (l = Nt(l))
          : ((l = lt(n) ? kr : Ye.current), (l = To(t, l)));
      var p = n.getDerivedStateFromProps;
      (c =
        typeof p == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((a !== f || d !== l) && Dh(t, s, r, l)),
        (_n = !1),
        (d = t.memoizedState),
        (s.state = d),
        Ea(t, r, s, o);
      var y = t.memoizedState;
      a !== f || d !== y || at.current || _n
        ? (typeof p == "function" && (Ju(t, n, p, r), (y = t.memoizedState)),
          (u = _n || Nh(t, n, u, r, d, y, l) || !1)
            ? (c ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(r, y, l),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(r, y, l)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (a === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = y)),
          (s.props = r),
          (s.state = y),
          (s.context = l),
          (r = u))
        : (typeof s.componentDidUpdate != "function" ||
            (a === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return rc(e, t, n, r, i, o);
  }
  function rc(e, t, n, r, o, i) {
    Yy(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && Eh(t, n, !1), Sn(e, t, i);
    (r = t.stateNode), (NS.current = t);
    var a =
      s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && s
        ? ((t.child = ko(t, e.child, null, i)), (t.child = ko(t, null, a, i)))
        : Ze(e, t, a, i),
      (t.memoizedState = r.state),
      o && Eh(t, n, !0),
      t.child
    );
  }
  function Xy(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ch(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ch(e, t.context, !1),
      Ed(e, t.containerInfo);
  }
  function Vh(e, t, n, r, o) {
    return bo(), yd(o), (t.flags |= 256), Ze(e, t, n, r), t.child;
  }
  var oc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ic(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function qy(e, t, n) {
    var r = t.pendingProps,
      o = xe.current,
      i = !1,
      s = (t.flags & 128) !== 0,
      a;
    if (
      ((a = s) ||
        (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      a
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      de(xe, o & 1),
      e === null)
    )
      return (
        qu(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((s = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (s = { mode: "hidden", children: s }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = s))
                  : (i = ol(s, r, 0, null)),
                (e = Tr(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = ic(n)),
                (t.memoizedState = oc),
                e)
              : Nd(t, s))
      );
    if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
      return DS(e, t, s, r, a, o, n);
    if (i) {
      (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
      var l = { mode: "hidden", children: r.children };
      return (
        !(s & 1) && t.child !== o
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = l),
            (t.deletions = null))
          : ((r = Jn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        a !== null ? (i = Jn(a, i)) : ((i = Tr(i, s, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (s = e.child.memoizedState),
        (s =
          s === null
            ? ic(n)
            : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions,
              }),
        (i.memoizedState = s),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = oc),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Jn(i, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Nd(e, t) {
    return (
      (t = ol({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function As(e, t, n, r) {
    return (
      r !== null && yd(r),
      ko(t, e.child, null, n),
      (e = Nd(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function DS(e, t, n, r, o, i, s) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Jl(Error(L(422)))), As(e, t, s, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = ol({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Tr(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && ko(t, e.child, null, s),
          (t.child.memoizedState = ic(s)),
          (t.memoizedState = oc),
          i);
    if (!(t.mode & 1)) return As(e, t, s, null);
    if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
      return (
        (r = a), (i = Error(L(419))), (r = Jl(i, r, void 0)), As(e, t, s, r)
      );
    }
    if (((a = (s & e.childLanes) !== 0), st || a)) {
      if (((r = Ie), r !== null)) {
        switch (s & -s) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        (o = o & (r.suspendedLanes | s) ? 0 : o),
          o !== 0 &&
            o !== i.retryLane &&
            ((i.retryLane = o), xn(e, o), zt(r, e, o, -1));
      }
      return jd(), (r = Jl(Error(L(421)))), As(e, t, s, r);
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = HS.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (yt = Yn(o.nextSibling)),
        (vt = t),
        (we = !0),
        (Vt = null),
        e !== null &&
          ((kt[Mt++] = hn),
          (kt[Mt++] = pn),
          (kt[Mt++] = Mr),
          (hn = e.id),
          (pn = e.overflow),
          (Mr = t)),
        (t = Nd(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Bh(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Zu(e.return, t, n);
  }
  function eu(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = o));
  }
  function Zy(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      i = r.tail;
    if ((Ze(e, t, r.children, n), (r = xe.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Bh(e, n, t);
          else if (e.tag === 19) Bh(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((de(xe, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            (e = n.alternate),
              e !== null && Pa(e) === null && (o = n),
              (n = n.sibling);
          (n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            eu(t, !1, o, n, i);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && Pa(e) === null)) {
              t.child = o;
              break;
            }
            (e = o.sibling), (o.sibling = n), (n = o), (o = e);
          }
          eu(t, !0, n, null, i);
          break;
        case "together":
          eu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Zs(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Sn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Ar |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(L(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Jn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Jn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function LS(e, t, n) {
    switch (t.tag) {
      case 3:
        Xy(t), bo();
        break;
      case 5:
        Py(t);
        break;
      case 1:
        lt(t.type) && va(t);
        break;
      case 4:
        Ed(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        de(Sa, r._currentValue), (r._currentValue = o);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (de(xe, xe.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? qy(e, t, n)
            : (de(xe, xe.current & 1),
              (e = Sn(e, t, n)),
              e !== null ? e.sibling : null);
        de(xe, xe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Zy(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          de(xe, xe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Qy(e, t, n);
    }
    return Sn(e, t, n);
  }
  var Jy, sc, ev, tv;
  Jy = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  };
  sc = function () {};
  ev = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      (e = t.stateNode), vr(tn.current);
      var i = null;
      switch (n) {
        case "input":
          (o = Mu(e, o)), (r = Mu(e, r)), (i = []);
          break;
        case "select":
          (o = Ee({}, o, { value: void 0 })),
            (r = Ee({}, r, { value: void 0 })),
            (i = []);
          break;
        case "textarea":
          (o = Nu(e, o)), (r = Nu(e, r)), (i = []);
          break;
        default:
          typeof o.onClick != "function" &&
            typeof r.onClick == "function" &&
            (e.onclick = ga);
      }
      Lu(n, r);
      var s;
      n = null;
      for (u in o)
        if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
          if (u === "style") {
            var a = o[u];
            for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
          } else
            u !== "dangerouslySetInnerHTML" &&
              u !== "children" &&
              u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              u !== "autoFocus" &&
              (Ci.hasOwnProperty(u)
                ? i || (i = [])
                : (i = i || []).push(u, null));
      for (u in r) {
        var l = r[u];
        if (
          ((a = o != null ? o[u] : void 0),
          r.hasOwnProperty(u) && l !== a && (l != null || a != null))
        )
          if (u === "style")
            if (a) {
              for (s in a)
                !a.hasOwnProperty(s) ||
                  (l && l.hasOwnProperty(s)) ||
                  (n || (n = {}), (n[s] = ""));
              for (s in l)
                l.hasOwnProperty(s) &&
                  a[s] !== l[s] &&
                  (n || (n = {}), (n[s] = l[s]));
            } else n || (i || (i = []), i.push(u, n)), (n = l);
          else
            u === "dangerouslySetInnerHTML"
              ? ((l = l ? l.__html : void 0),
                (a = a ? a.__html : void 0),
                l != null && a !== l && (i = i || []).push(u, l))
              : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Ci.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && ye("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
      }
      n && (i = i || []).push("style", n);
      var u = i;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  tv = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Zo(e, t) {
    if (!we)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function We(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags & 14680064),
          (r |= o.flags & 14680064),
          (o.return = e),
          (o = o.sibling);
    else
      for (o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags),
          (r |= o.flags),
          (o.return = e),
          (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function OS(e, t, n) {
    var r = t.pendingProps;
    switch ((gd(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return We(t), null;
      case 1:
        return lt(t.type) && ya(), We(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Mo(),
          ve(at),
          ve(Ye),
          Td(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ms(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Vt !== null && (pc(Vt), (Vt = null)))),
          sc(e, t),
          We(t),
          null
        );
      case 5:
        Pd(t);
        var o = vr(Oi.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          ev(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(L(166));
            return We(t), null;
          }
          if (((e = vr(tn.current)), Ms(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[Jt] = t), (r[Di] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ye("cancel", r), ye("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < si.length; o++) ye(si[o], r);
                break;
              case "source":
                ye("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ye("error", r), ye("load", r);
                break;
              case "details":
                ye("toggle", r);
                break;
              case "input":
                Yf(r, i), ye("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  ye("invalid", r);
                break;
              case "textarea":
                qf(r, i), ye("invalid", r);
            }
            Lu(n, i), (o = null);
            for (var s in i)
              if (i.hasOwnProperty(s)) {
                var a = i[s];
                s === "children"
                  ? typeof a == "string"
                    ? r.textContent !== a &&
                      (i.suppressHydrationWarning !== !0 &&
                        ks(r.textContent, a, e),
                      (o = ["children", a]))
                    : typeof a == "number" &&
                      r.textContent !== "" + a &&
                      (i.suppressHydrationWarning !== !0 &&
                        ks(r.textContent, a, e),
                      (o = ["children", "" + a]))
                  : Ci.hasOwnProperty(s) &&
                    a != null &&
                    s === "onScroll" &&
                    ye("scroll", r);
              }
            switch (n) {
              case "input":
                ws(r), Xf(r, i, !0);
                break;
              case "textarea":
                ws(r), Zf(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = ga);
            }
            (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (s = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Rg(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = s.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
                : (e = s.createElementNS(e, n)),
              (e[Jt] = t),
              (e[Di] = r),
              Jy(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((s = Ou(n, r)), n)) {
                case "dialog":
                  ye("cancel", e), ye("close", e), (o = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ye("load", e), (o = r);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < si.length; o++) ye(si[o], e);
                  o = r;
                  break;
                case "source":
                  ye("error", e), (o = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ye("error", e), ye("load", e), (o = r);
                  break;
                case "details":
                  ye("toggle", e), (o = r);
                  break;
                case "input":
                  Yf(e, r), (o = Mu(e, r)), ye("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = Ee({}, r, { value: void 0 })),
                    ye("invalid", e);
                  break;
                case "textarea":
                  qf(e, r), (o = Nu(e, r)), ye("invalid", e);
                  break;
                default:
                  o = r;
              }
              Lu(n, o), (a = o);
              for (i in a)
                if (a.hasOwnProperty(i)) {
                  var l = a[i];
                  i === "style"
                    ? Dg(e, l)
                    : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Ag(e, l))
                    : i === "children"
                    ? typeof l == "string"
                      ? (n !== "textarea" || l !== "") && Ei(e, l)
                      : typeof l == "number" && Ei(e, "" + l)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (Ci.hasOwnProperty(i)
                        ? l != null && i === "onScroll" && ye("scroll", e)
                        : l != null && td(e, i, l, s));
                }
              switch (n) {
                case "input":
                  ws(e), Xf(e, r, !1);
                  break;
                case "textarea":
                  ws(e), Zf(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + er(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? io(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        io(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = ga);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return We(t), null;
      case 6:
        if (e && t.stateNode != null) tv(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
          if (((n = vr(Oi.current)), vr(tn.current), Ms(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Jt] = t),
              (i = r.nodeValue !== n) && ((e = vt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ks(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ks(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Jt] = t),
              (t.stateNode = r);
        }
        return We(t), null;
      case 13:
        if (
          (ve(xe),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (we && yt !== null && t.mode & 1 && !(t.flags & 128))
            wy(), bo(), (t.flags |= 98560), (i = !1);
          else if (((i = Ms(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(L(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(L(317));
              i[Jt] = t;
            } else
              bo(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            We(t), (i = !1);
          } else Vt !== null && (pc(Vt), (Vt = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || xe.current & 1 ? Oe === 0 && (Oe = 3) : jd())),
            t.updateQueue !== null && (t.flags |= 4),
            We(t),
            null);
      case 4:
        return (
          Mo(),
          sc(e, t),
          e === null && Ai(t.stateNode.containerInfo),
          We(t),
          null
        );
      case 10:
        return xd(t.type._context), We(t), null;
      case 17:
        return lt(t.type) && ya(), We(t), null;
      case 19:
        if ((ve(xe), (i = t.memoizedState), i === null)) return We(t), null;
        if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
          if (r) Zo(i, !1);
          else {
            if (Oe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((s = Pa(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      Zo(i, !1),
                      r = s.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (s = i.alternate),
                      s === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = s.childLanes),
                          (i.lanes = s.lanes),
                          (i.child = s.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = s.memoizedProps),
                          (i.memoizedState = s.memoizedState),
                          (i.updateQueue = s.updateQueue),
                          (i.type = s.type),
                          (e = s.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return de(xe, (xe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Me() > Ao &&
              ((t.flags |= 128), (r = !0), Zo(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Pa(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Zo(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !s.alternate &&
                  !we)
              )
                return We(t), null;
            } else
              2 * Me() - i.renderingStartTime > Ao &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Zo(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((n = i.last),
              n !== null ? (n.sibling = s) : (t.child = s),
              (i.last = s));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Me()),
            (t.sibling = null),
            (n = xe.current),
            de(xe, r ? (n & 1) | 2 : n & 1),
            t)
          : (We(t), null);
      case 22:
      case 23:
        return (
          Id(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? mt & 1073741824 &&
              (We(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : We(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(L(156, t.tag));
  }
  function _S(e, t) {
    switch ((gd(t), t.tag)) {
      case 1:
        return (
          lt(t.type) && ya(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Mo(),
          ve(at),
          ve(Ye),
          Td(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Pd(t), null;
      case 13:
        if (
          (ve(xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(L(340));
          bo();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ve(xe), null;
      case 4:
        return Mo(), null;
      case 10:
        return xd(t.type._context), null;
      case 22:
      case 23:
        return Id(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ns = !1,
    Ge = !1,
    IS = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;
  function qr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          be(e, t, r);
        }
      else n.current = null;
  }
  function ac(e, t, n) {
    try {
      n();
    } catch (r) {
      be(e, t, r);
    }
  }
  var zh = !1;
  function jS(e, t) {
    if (((Wu = ha), (e = sy()), pd(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var o = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var s = 0,
              a = -1,
              l = -1,
              u = 0,
              c = 0,
              f = e,
              d = null;
            t: for (;;) {
              for (
                var p;
                f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                  f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                  f.nodeType === 3 && (s += f.nodeValue.length),
                  (p = f.firstChild) !== null;

              )
                (d = f), (f = p);
              for (;;) {
                if (f === e) break t;
                if (
                  (d === n && ++u === o && (a = s),
                  d === i && ++c === r && (l = s),
                  (p = f.nextSibling) !== null)
                )
                  break;
                (f = d), (d = f.parentNode);
              }
              f = p;
            }
            n = a === -1 || l === -1 ? null : { start: a, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Hu = { focusedElem: e, selectionRange: n }, ha = !1, z = t;
      z !== null;

    )
      if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (z = e);
      else
        for (; z !== null; ) {
          t = z;
          try {
            var y = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (y !== null) {
                    var g = y.memoizedProps,
                      w = y.memoizedState,
                      h = t.stateNode,
                      m = h.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? g : _t(t.type, g),
                        w
                      );
                    h.__reactInternalSnapshotBeforeUpdate = m;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1
                    ? (v.textContent = "")
                    : v.nodeType === 9 &&
                      v.documentElement &&
                      v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(L(163));
              }
          } catch (C) {
            be(t, t.return, C);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (z = e);
            break;
          }
          z = t.return;
        }
    return (y = zh), (zh = !1), y;
  }
  function mi(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          (o.destroy = void 0), i !== void 0 && ac(t, n, i);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function nl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function lc(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function nv(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), nv(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Jt],
          delete t[Di],
          delete t[Qu],
          delete t[wS],
          delete t[xS])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function rv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function $h(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || rv(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function uc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ga));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (uc(e, t, n), e = e.sibling; e !== null; )
        uc(e, t, n), (e = e.sibling);
  }
  function cc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (cc(e, t, n), e = e.sibling; e !== null; )
        cc(e, t, n), (e = e.sibling);
  }
  var Fe = null,
    Ft = !1;
  function Rn(e, t, n) {
    for (n = n.child; n !== null; ) ov(e, t, n), (n = n.sibling);
  }
  function ov(e, t, n) {
    if (en && typeof en.onCommitFiberUnmount == "function")
      try {
        en.onCommitFiberUnmount(Qa, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ge || qr(n, t);
      case 6:
        var r = Fe,
          o = Ft;
        (Fe = null),
          Rn(e, t, n),
          (Fe = r),
          (Ft = o),
          Fe !== null &&
            (Ft
              ? ((e = Fe),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Fe.removeChild(n.stateNode));
        break;
      case 18:
        Fe !== null &&
          (Ft
            ? ((e = Fe),
              (n = n.stateNode),
              e.nodeType === 8
                ? Gl(e.parentNode, n)
                : e.nodeType === 1 && Gl(e, n),
              ki(e))
            : Gl(Fe, n.stateNode));
        break;
      case 4:
        (r = Fe),
          (o = Ft),
          (Fe = n.stateNode.containerInfo),
          (Ft = !0),
          Rn(e, t, n),
          (Fe = r),
          (Ft = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ge &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          o = r = r.next;
          do {
            var i = o,
              s = i.destroy;
            (i = i.tag),
              s !== void 0 && (i & 2 || i & 4) && ac(n, t, s),
              (o = o.next);
          } while (o !== r);
        }
        Rn(e, t, n);
        break;
      case 1:
        if (
          !Ge &&
          (qr(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (a) {
            be(n, t, a);
          }
        Rn(e, t, n);
        break;
      case 21:
        Rn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ge = (r = Ge) || n.memoizedState !== null), Rn(e, t, n), (Ge = r))
          : Rn(e, t, n);
        break;
      default:
        Rn(e, t, n);
    }
  }
  function Uh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new IS()),
        t.forEach(function (r) {
          var o = KS.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        });
    }
  }
  function Lt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
          var i = e,
            s = t,
            a = s;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                (Fe = a.stateNode), (Ft = !1);
                break e;
              case 3:
                (Fe = a.stateNode.containerInfo), (Ft = !0);
                break e;
              case 4:
                (Fe = a.stateNode.containerInfo), (Ft = !0);
                break e;
            }
            a = a.return;
          }
          if (Fe === null) throw Error(L(160));
          ov(i, s, o), (Fe = null), (Ft = !1);
          var l = o.alternate;
          l !== null && (l.return = null), (o.return = null);
        } catch (u) {
          be(o, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) iv(t, e), (t = t.sibling);
  }
  function iv(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Lt(t, e), Qt(e), r & 4)) {
          try {
            mi(3, e, e.return), nl(3, e);
          } catch (g) {
            be(e, e.return, g);
          }
          try {
            mi(5, e, e.return);
          } catch (g) {
            be(e, e.return, g);
          }
        }
        break;
      case 1:
        Lt(t, e), Qt(e), r & 512 && n !== null && qr(n, n.return);
        break;
      case 5:
        if (
          (Lt(t, e),
          Qt(e),
          r & 512 && n !== null && qr(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            Ei(o, "");
          } catch (g) {
            be(e, e.return, g);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var i = e.memoizedProps,
            s = n !== null ? n.memoizedProps : i,
            a = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              a === "input" && i.type === "radio" && i.name != null && kg(o, i),
                Ou(a, s);
              var u = Ou(a, i);
              for (s = 0; s < l.length; s += 2) {
                var c = l[s],
                  f = l[s + 1];
                c === "style"
                  ? Dg(o, f)
                  : c === "dangerouslySetInnerHTML"
                  ? Ag(o, f)
                  : c === "children"
                  ? Ei(o, f)
                  : td(o, c, f, u);
              }
              switch (a) {
                case "input":
                  Ru(o, i);
                  break;
                case "textarea":
                  Mg(o, i);
                  break;
                case "select":
                  var d = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!i.multiple;
                  var p = i.value;
                  p != null
                    ? io(o, !!i.multiple, p, !1)
                    : d !== !!i.multiple &&
                      (i.defaultValue != null
                        ? io(o, !!i.multiple, i.defaultValue, !0)
                        : io(o, !!i.multiple, i.multiple ? [] : "", !1));
              }
              o[Di] = i;
            } catch (g) {
              be(e, e.return, g);
            }
        }
        break;
      case 6:
        if ((Lt(t, e), Qt(e), r & 4)) {
          if (e.stateNode === null) throw Error(L(162));
          (o = e.stateNode), (i = e.memoizedProps);
          try {
            o.nodeValue = i;
          } catch (g) {
            be(e, e.return, g);
          }
        }
        break;
      case 3:
        if (
          (Lt(t, e), Qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ki(t.containerInfo);
          } catch (g) {
            be(e, e.return, g);
          }
        break;
      case 4:
        Lt(t, e), Qt(e);
        break;
      case 13:
        Lt(t, e),
          Qt(e),
          (o = e.child),
          o.flags & 8192 &&
            ((i = o.memoizedState !== null),
            (o.stateNode.isHidden = i),
            !i ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              (Od = Me())),
          r & 4 && Uh(e);
        break;
      case 22:
        if (
          ((c = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ge = (u = Ge) || c), Lt(t, e), (Ge = u)) : Lt(t, e),
          Qt(e),
          r & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
          )
            for (z = e, c = e.child; c !== null; ) {
              for (f = z = c; z !== null; ) {
                switch (((d = z), (p = d.child), d.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mi(4, d, d.return);
                    break;
                  case 1:
                    qr(d, d.return);
                    var y = d.stateNode;
                    if (typeof y.componentWillUnmount == "function") {
                      (r = d), (n = d.return);
                      try {
                        (t = r),
                          (y.props = t.memoizedProps),
                          (y.state = t.memoizedState),
                          y.componentWillUnmount();
                      } catch (g) {
                        be(r, n, g);
                      }
                    }
                    break;
                  case 5:
                    qr(d, d.return);
                    break;
                  case 22:
                    if (d.memoizedState !== null) {
                      Hh(f);
                      continue;
                    }
                }
                p !== null ? ((p.return = d), (z = p)) : Hh(f);
              }
              c = c.sibling;
            }
          e: for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  (o = f.stateNode),
                    u
                      ? ((i = o.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((a = f.stateNode),
                        (l = f.memoizedProps.style),
                        (s =
                          l != null && l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (a.style.display = Ng("display", s)));
                } catch (g) {
                  be(e, e.return, g);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (g) {
                  be(e, e.return, g);
                }
            } else if (
              ((f.tag !== 22 && f.tag !== 23) ||
                f.memoizedState === null ||
                f === e) &&
              f.child !== null
            ) {
              (f.child.return = f), (f = f.child);
              continue;
            }
            if (f === e) break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e) break e;
              c === f && (c = null), (f = f.return);
            }
            c === f && (c = null),
              (f.sibling.return = f.return),
              (f = f.sibling);
          }
        }
        break;
      case 19:
        Lt(t, e), Qt(e), r & 4 && Uh(e);
        break;
      case 21:
        break;
      default:
        Lt(t, e), Qt(e);
    }
  }
  function Qt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (rv(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(L(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Ei(o, ""), (r.flags &= -33));
            var i = $h(e);
            cc(e, i, o);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              a = $h(e);
            uc(e, a, s);
            break;
          default:
            throw Error(L(161));
        }
      } catch (l) {
        be(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function FS(e, t, n) {
    (z = e), sv(e);
  }
  function sv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
      var o = z,
        i = o.child;
      if (o.tag === 22 && r) {
        var s = o.memoizedState !== null || Ns;
        if (!s) {
          var a = o.alternate,
            l = (a !== null && a.memoizedState !== null) || Ge;
          a = Ns;
          var u = Ge;
          if (((Ns = s), (Ge = l) && !u))
            for (z = o; z !== null; )
              (s = z),
                (l = s.child),
                s.tag === 22 && s.memoizedState !== null
                  ? Kh(o)
                  : l !== null
                  ? ((l.return = s), (z = l))
                  : Kh(o);
          for (; i !== null; ) (z = i), sv(i), (i = i.sibling);
          (z = o), (Ns = a), (Ge = u);
        }
        Wh(e);
      } else
        o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (z = i)) : Wh(e);
    }
  }
  function Wh(e) {
    for (; z !== null; ) {
      var t = z;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ge || nl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ge)
                  if (n === null) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : _t(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && Mh(t, i, r);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Mh(t, s, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && n.focus();
                      break;
                    case "img":
                      l.src && (n.src = l.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var u = t.alternate;
                  if (u !== null) {
                    var c = u.memoizedState;
                    if (c !== null) {
                      var f = c.dehydrated;
                      f !== null && ki(f);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(L(163));
            }
          Ge || (t.flags & 512 && lc(t));
        } catch (d) {
          be(t, t.return, d);
        }
      }
      if (t === e) {
        z = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (z = n);
        break;
      }
      z = t.return;
    }
  }
  function Hh(e) {
    for (; z !== null; ) {
      var t = z;
      if (t === e) {
        z = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (z = n);
        break;
      }
      z = t.return;
    }
  }
  function Kh(e) {
    for (; z !== null; ) {
      var t = z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              nl(4, t);
            } catch (l) {
              be(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                be(t, o, l);
              }
            }
            var i = t.return;
            try {
              lc(t);
            } catch (l) {
              be(t, i, l);
            }
            break;
          case 5:
            var s = t.return;
            try {
              lc(t);
            } catch (l) {
              be(t, s, l);
            }
        }
      } catch (l) {
        be(t, t.return, l);
      }
      if (t === e) {
        z = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        (a.return = t.return), (z = a);
        break;
      }
      z = t.return;
    }
  }
  var VS = Math.ceil,
    ka = Tn.ReactCurrentDispatcher,
    Dd = Tn.ReactCurrentOwner,
    At = Tn.ReactCurrentBatchConfig,
    oe = 0,
    Ie = null,
    Ae = null,
    Be = 0,
    mt = 0,
    Zr = ur(0),
    Oe = 0,
    Fi = null,
    Ar = 0,
    rl = 0,
    Ld = 0,
    gi = null,
    it = null,
    Od = 0,
    Ao = 1 / 0,
    dn = null,
    Ma = !1,
    dc = null,
    qn = null,
    Ds = !1,
    Wn = null,
    Ra = 0,
    yi = 0,
    fc = null,
    Js = -1,
    ea = 0;
  function tt() {
    return oe & 6 ? Me() : Js !== -1 ? Js : (Js = Me());
  }
  function Zn(e) {
    return e.mode & 1
      ? oe & 2 && Be !== 0
        ? Be & -Be
        : CS.transition !== null
        ? (ea === 0 && (ea = Wg()), ea)
        : ((e = ue),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qg(e.type))),
          e)
      : 1;
  }
  function zt(e, t, n, r) {
    if (50 < yi) throw ((yi = 0), (fc = null), Error(L(185)));
    Ji(e, n, r),
      (!(oe & 2) || e !== Ie) &&
        (e === Ie && (!(oe & 2) && (rl |= n), Oe === 4 && jn(e, Be)),
        ut(e, r),
        n === 1 &&
          oe === 0 &&
          !(t.mode & 1) &&
          ((Ao = Me() + 500), Ja && cr()));
  }
  function ut(e, t) {
    var n = e.callbackNode;
    C1(e, t);
    var r = fa(e, e === Ie ? Be : 0);
    if (r === 0)
      n !== null && th(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && th(n), t === 1))
        e.tag === 0 ? SS(Gh.bind(null, e)) : gy(Gh.bind(null, e)),
          yS(function () {
            !(oe & 6) && cr();
          }),
          (n = null);
      else {
        switch (Hg(r)) {
          case 1:
            n = sd;
            break;
          case 4:
            n = $g;
            break;
          case 16:
            n = da;
            break;
          case 536870912:
            n = Ug;
            break;
          default:
            n = da;
        }
        n = pv(n, av.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function av(e, t) {
    if (((Js = -1), (ea = 0), oe & 6)) throw Error(L(327));
    var n = e.callbackNode;
    if (co() && e.callbackNode !== n) return null;
    var r = fa(e, e === Ie ? Be : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Aa(e, r);
    else {
      t = r;
      var o = oe;
      oe |= 2;
      var i = uv();
      (Ie !== e || Be !== t) && ((dn = null), (Ao = Me() + 500), Pr(e, t));
      do
        try {
          $S();
          break;
        } catch (a) {
          lv(e, a);
        }
      while (!0);
      wd(),
        (ka.current = i),
        (oe = o),
        Ae !== null ? (t = 0) : ((Ie = null), (Be = 0), (t = Oe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = Vu(e)), o !== 0 && ((r = o), (t = hc(e, o)))),
        t === 1)
      )
        throw ((n = Fi), Pr(e, 0), jn(e, r), ut(e, Me()), n);
      if (t === 6) jn(e, r);
      else {
        if (
          ((o = e.current.alternate),
          !(r & 30) &&
            !BS(o) &&
            ((t = Aa(e, r)),
            t === 2 && ((i = Vu(e)), i !== 0 && ((r = i), (t = hc(e, i)))),
            t === 1))
        )
          throw ((n = Fi), Pr(e, 0), jn(e, r), ut(e, Me()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(L(345));
          case 2:
            pr(e, it, dn);
            break;
          case 3:
            if (
              (jn(e, r),
              (r & 130023424) === r && ((t = Od + 500 - Me()), 10 < t))
            ) {
              if (fa(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                tt(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = Gu(pr.bind(null, e, it, dn), t);
              break;
            }
            pr(e, it, dn);
            break;
          case 4:
            if ((jn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var s = 31 - Bt(r);
              (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
            }
            if (
              ((r = o),
              (r = Me() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * VS(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Gu(pr.bind(null, e, it, dn), r);
              break;
            }
            pr(e, it, dn);
            break;
          case 5:
            pr(e, it, dn);
            break;
          default:
            throw Error(L(329));
        }
      }
    }
    return ut(e, Me()), e.callbackNode === n ? av.bind(null, e) : null;
  }
  function hc(e, t) {
    var n = gi;
    return (
      e.current.memoizedState.isDehydrated && (Pr(e, t).flags |= 256),
      (e = Aa(e, t)),
      e !== 2 && ((t = it), (it = n), t !== null && pc(t)),
      e
    );
  }
  function pc(e) {
    it === null ? (it = e) : it.push.apply(it, e);
  }
  function BS(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              i = o.getSnapshot;
            o = o.value;
            try {
              if (!$t(i(), o)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function jn(e, t) {
    for (
      t &= ~Ld,
        t &= ~rl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Bt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Gh(e) {
    if (oe & 6) throw Error(L(327));
    co();
    var t = fa(e, 0);
    if (!(t & 1)) return ut(e, Me()), null;
    var n = Aa(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Vu(e);
      r !== 0 && ((t = r), (n = hc(e, r)));
    }
    if (n === 1) throw ((n = Fi), Pr(e, 0), jn(e, t), ut(e, Me()), n);
    if (n === 6) throw Error(L(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      pr(e, it, dn),
      ut(e, Me()),
      null
    );
  }
  function _d(e, t) {
    var n = oe;
    oe |= 1;
    try {
      return e(t);
    } finally {
      (oe = n), oe === 0 && ((Ao = Me() + 500), Ja && cr());
    }
  }
  function Nr(e) {
    Wn !== null && Wn.tag === 0 && !(oe & 6) && co();
    var t = oe;
    oe |= 1;
    var n = At.transition,
      r = ue;
    try {
      if (((At.transition = null), (ue = 1), e)) return e();
    } finally {
      (ue = r), (At.transition = n), (oe = t), !(oe & 6) && cr();
    }
  }
  function Id() {
    (mt = Zr.current), ve(Zr);
  }
  function Pr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), gS(n)), Ae !== null))
      for (n = Ae.return; n !== null; ) {
        var r = n;
        switch ((gd(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && ya();
            break;
          case 3:
            Mo(), ve(at), ve(Ye), Td();
            break;
          case 5:
            Pd(r);
            break;
          case 4:
            Mo();
            break;
          case 13:
            ve(xe);
            break;
          case 19:
            ve(xe);
            break;
          case 10:
            xd(r.type._context);
            break;
          case 22:
          case 23:
            Id();
        }
        n = n.return;
      }
    if (
      ((Ie = e),
      (Ae = e = Jn(e.current, null)),
      (Be = mt = t),
      (Oe = 0),
      (Fi = null),
      (Ld = rl = Ar = 0),
      (it = gi = null),
      yr !== null)
    ) {
      for (t = 0; t < yr.length; t++)
        if (((n = yr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            i = n.pending;
          if (i !== null) {
            var s = i.next;
            (i.next = o), (r.next = s);
          }
          n.pending = r;
        }
      yr = null;
    }
    return e;
  }
  function lv(e, t) {
    do {
      var n = Ae;
      try {
        if ((wd(), (Xs.current = ba), Ta)) {
          for (var r = Ce.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), (r = r.next);
          }
          Ta = !1;
        }
        if (
          ((Rr = 0),
          (_e = De = Ce = null),
          (pi = !1),
          (_i = 0),
          (Dd.current = null),
          n === null || n.return === null)
        ) {
          (Oe = 1), (Fi = t), (Ae = null);
          break;
        }
        e: {
          var i = e,
            s = n.return,
            a = n,
            l = t;
          if (
            ((t = Be),
            (a.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var u = l,
              c = a,
              f = c.tag;
            if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var d = c.alternate;
              d
                ? ((c.updateQueue = d.updateQueue),
                  (c.memoizedState = d.memoizedState),
                  (c.lanes = d.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var p = Oh(s);
            if (p !== null) {
              (p.flags &= -257),
                _h(p, s, a, i, t),
                p.mode & 1 && Lh(i, u, t),
                (t = p),
                (l = u);
              var y = t.updateQueue;
              if (y === null) {
                var g = new Set();
                g.add(l), (t.updateQueue = g);
              } else y.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                Lh(i, u, t), jd();
                break e;
              }
              l = Error(L(426));
            }
          } else if (we && a.mode & 1) {
            var w = Oh(s);
            if (w !== null) {
              !(w.flags & 65536) && (w.flags |= 256),
                _h(w, s, a, i, t),
                yd(Ro(l, a));
              break e;
            }
          }
          (i = l = Ro(l, a)),
            Oe !== 4 && (Oe = 2),
            gi === null ? (gi = [i]) : gi.push(i),
            (i = s);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var h = Hy(i, l, t);
                kh(i, h);
                break e;
              case 1:
                a = l;
                var m = i.type,
                  v = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof m.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (qn === null || !qn.has(v))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var C = Ky(i, a, t);
                  kh(i, C);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        dv(n);
      } catch (E) {
        (t = E), Ae === n && n !== null && (Ae = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function uv() {
    var e = ka.current;
    return (ka.current = ba), e === null ? ba : e;
  }
  function jd() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
      Ie === null || (!(Ar & 268435455) && !(rl & 268435455)) || jn(Ie, Be);
  }
  function Aa(e, t) {
    var n = oe;
    oe |= 2;
    var r = uv();
    (Ie !== e || Be !== t) && ((dn = null), Pr(e, t));
    do
      try {
        zS();
        break;
      } catch (o) {
        lv(e, o);
      }
    while (!0);
    if ((wd(), (oe = n), (ka.current = r), Ae !== null)) throw Error(L(261));
    return (Ie = null), (Be = 0), Oe;
  }
  function zS() {
    for (; Ae !== null; ) cv(Ae);
  }
  function $S() {
    for (; Ae !== null && !h1(); ) cv(Ae);
  }
  function cv(e) {
    var t = hv(e.alternate, e, mt);
    (e.memoizedProps = e.pendingProps),
      t === null ? dv(e) : (Ae = t),
      (Dd.current = null);
  }
  function dv(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = _S(n, t)), n !== null)) {
          (n.flags &= 32767), (Ae = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Oe = 6), (Ae = null);
          return;
        }
      } else if (((n = OS(n, t, mt)), n !== null)) {
        Ae = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ae = t;
        return;
      }
      Ae = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function pr(e, t, n) {
    var r = ue,
      o = At.transition;
    try {
      (At.transition = null), (ue = 1), US(e, t, n, r);
    } finally {
      (At.transition = o), (ue = r);
    }
    return null;
  }
  function US(e, t, n, r) {
    do co();
    while (Wn !== null);
    if (oe & 6) throw Error(L(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(L(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (E1(e, i),
      e === Ie && ((Ae = Ie = null), (Be = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Ds ||
        ((Ds = !0),
        pv(da, function () {
          return co(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = At.transition), (At.transition = null);
      var s = ue;
      ue = 1;
      var a = oe;
      (oe |= 4),
        (Dd.current = null),
        jS(e, n),
        iv(n, e),
        uS(Hu),
        (ha = !!Wu),
        (Hu = Wu = null),
        (e.current = n),
        FS(n),
        p1(),
        (oe = a),
        (ue = s),
        (At.transition = i);
    } else e.current = n;
    if (
      (Ds && ((Ds = !1), (Wn = e), (Ra = o)),
      (i = e.pendingLanes),
      i === 0 && (qn = null),
      y1(n.stateNode),
      ut(e, Me()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Ma) throw ((Ma = !1), (e = dc), (dc = null), e);
    return (
      Ra & 1 && e.tag !== 0 && co(),
      (i = e.pendingLanes),
      i & 1 ? (e === fc ? yi++ : ((yi = 0), (fc = e))) : (yi = 0),
      cr(),
      null
    );
  }
  function co() {
    if (Wn !== null) {
      var e = Hg(Ra),
        t = At.transition,
        n = ue;
      try {
        if (((At.transition = null), (ue = 16 > e ? 16 : e), Wn === null))
          var r = !1;
        else {
          if (((e = Wn), (Wn = null), (Ra = 0), oe & 6)) throw Error(L(331));
          var o = oe;
          for (oe |= 4, z = e.current; z !== null; ) {
            var i = z,
              s = i.child;
            if (z.flags & 16) {
              var a = i.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var u = a[l];
                  for (z = u; z !== null; ) {
                    var c = z;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mi(8, c, i);
                    }
                    var f = c.child;
                    if (f !== null) (f.return = c), (z = f);
                    else
                      for (; z !== null; ) {
                        c = z;
                        var d = c.sibling,
                          p = c.return;
                        if ((nv(c), c === u)) {
                          z = null;
                          break;
                        }
                        if (d !== null) {
                          (d.return = p), (z = d);
                          break;
                        }
                        z = p;
                      }
                  }
                }
                var y = i.alternate;
                if (y !== null) {
                  var g = y.child;
                  if (g !== null) {
                    y.child = null;
                    do {
                      var w = g.sibling;
                      (g.sibling = null), (g = w);
                    } while (g !== null);
                  }
                }
                z = i;
              }
            }
            if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (z = s);
            else
              e: for (; z !== null; ) {
                if (((i = z), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mi(9, i, i.return);
                  }
                var h = i.sibling;
                if (h !== null) {
                  (h.return = i.return), (z = h);
                  break e;
                }
                z = i.return;
              }
          }
          var m = e.current;
          for (z = m; z !== null; ) {
            s = z;
            var v = s.child;
            if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (z = v);
            else
              e: for (s = m; z !== null; ) {
                if (((a = z), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        nl(9, a);
                    }
                  } catch (E) {
                    be(a, a.return, E);
                  }
                if (a === s) {
                  z = null;
                  break e;
                }
                var C = a.sibling;
                if (C !== null) {
                  (C.return = a.return), (z = C);
                  break e;
                }
                z = a.return;
              }
          }
          if (
            ((oe = o),
            cr(),
            en && typeof en.onPostCommitFiberRoot == "function")
          )
            try {
              en.onPostCommitFiberRoot(Qa, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ue = n), (At.transition = t);
      }
    }
    return !1;
  }
  function Qh(e, t, n) {
    (t = Ro(n, t)),
      (t = Hy(e, t, 1)),
      (e = Xn(e, t, 1)),
      (t = tt()),
      e !== null && (Ji(e, 1, t), ut(e, t));
  }
  function be(e, t, n) {
    if (e.tag === 3) Qh(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Qh(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (qn === null || !qn.has(r)))
          ) {
            (e = Ro(n, e)),
              (e = Ky(t, e, 1)),
              (t = Xn(t, e, 1)),
              (e = tt()),
              t !== null && (Ji(t, 1, e), ut(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function WS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = tt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ie === e &&
        (Be & n) === n &&
        (Oe === 4 || (Oe === 3 && (Be & 130023424) === Be && 500 > Me() - Od)
          ? Pr(e, 0)
          : (Ld |= n)),
      ut(e, t);
  }
  function fv(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Cs), (Cs <<= 1), !(Cs & 130023424) && (Cs = 4194304))
        : (t = 1));
    var n = tt();
    (e = xn(e, t)), e !== null && (Ji(e, t, n), ut(e, n));
  }
  function HS(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), fv(e, n);
  }
  function KS(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(L(314));
    }
    r !== null && r.delete(t), fv(e, n);
  }
  var hv;
  hv = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || at.current) st = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (st = !1), LS(e, t, n);
        st = !!(e.flags & 131072);
      }
    else (st = !1), we && t.flags & 1048576 && yy(t, xa, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Zs(e, t), (e = t.pendingProps);
        var o = To(t, Ye.current);
        uo(t, n), (o = kd(null, t, r, e, o, n));
        var i = Md();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              lt(r) ? ((i = !0), va(t)) : (i = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              Cd(t),
              (o.updater = tl),
              (t.stateNode = o),
              (o._reactInternals = t),
              ec(t, r, e, n),
              (t = rc(null, t, r, !0, i, n)))
            : ((t.tag = 0), we && i && md(t), Ze(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Zs(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = QS(r)),
            (e = _t(r, e)),
            o)
          ) {
            case 0:
              t = nc(null, t, r, e, n);
              break e;
            case 1:
              t = Fh(null, t, r, e, n);
              break e;
            case 11:
              t = Ih(null, t, r, e, n);
              break e;
            case 14:
              t = jh(null, t, r, _t(r.type, e), n);
              break e;
          }
          throw Error(L(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : _t(r, o)),
          nc(e, t, r, o, n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : _t(r, o)),
          Fh(e, t, r, o, n)
        );
      case 3:
        e: {
          if ((Xy(t), e === null)) throw Error(L(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (o = i.element),
            Ey(e, t),
            Ea(t, r, null, n);
          var s = t.memoizedState;
          if (((r = s.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (o = Ro(Error(L(423)), t)), (t = Vh(e, t, r, n, o));
              break e;
            } else if (r !== o) {
              (o = Ro(Error(L(424)), t)), (t = Vh(e, t, r, n, o));
              break e;
            } else
              for (
                yt = Yn(t.stateNode.containerInfo.firstChild),
                  vt = t,
                  we = !0,
                  Vt = null,
                  n = Sy(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((bo(), r === o)) {
              t = Sn(e, t, n);
              break e;
            }
            Ze(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Py(t),
          e === null && qu(t),
          (r = t.type),
          (o = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (s = o.children),
          Ku(r, o) ? (s = null) : i !== null && Ku(r, i) && (t.flags |= 32),
          Yy(e, t),
          Ze(e, t, s, n),
          t.child
        );
      case 6:
        return e === null && qu(t), null;
      case 13:
        return qy(e, t, n);
      case 4:
        return (
          Ed(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = ko(t, null, r, n)) : Ze(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : _t(r, o)),
          Ih(e, t, r, o, n)
        );
      case 7:
        return Ze(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ze(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ze(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (i = t.memoizedProps),
            (s = o.value),
            de(Sa, r._currentValue),
            (r._currentValue = s),
            i !== null)
          )
            if ($t(i.value, s)) {
              if (i.children === o.children && !at.current) {
                t = Sn(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var a = i.dependencies;
                if (a !== null) {
                  s = i.child;
                  for (var l = a.firstContext; l !== null; ) {
                    if (l.context === r) {
                      if (i.tag === 1) {
                        (l = mn(-1, n & -n)), (l.tag = 2);
                        var u = i.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var c = u.pending;
                          c === null
                            ? (l.next = l)
                            : ((l.next = c.next), (c.next = l)),
                            (u.pending = l);
                        }
                      }
                      (i.lanes |= n),
                        (l = i.alternate),
                        l !== null && (l.lanes |= n),
                        Zu(i.return, n, t),
                        (a.lanes |= n);
                      break;
                    }
                    l = l.next;
                  }
                } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((s = i.return), s === null)) throw Error(L(341));
                  (s.lanes |= n),
                    (a = s.alternate),
                    a !== null && (a.lanes |= n),
                    Zu(s, n, t),
                    (s = i.sibling);
                } else s = i.child;
                if (s !== null) s.return = i;
                else
                  for (s = i; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (((i = s.sibling), i !== null)) {
                      (i.return = s.return), (s = i);
                      break;
                    }
                    s = s.return;
                  }
                i = s;
              }
          Ze(e, t, o.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          uo(t, n),
          (o = Nt(o)),
          (r = r(o)),
          (t.flags |= 1),
          Ze(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (o = _t(r, t.pendingProps)),
          (o = _t(r.type, o)),
          jh(e, t, r, o, n)
        );
      case 15:
        return Gy(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : _t(r, o)),
          Zs(e, t),
          (t.tag = 1),
          lt(r) ? ((e = !0), va(t)) : (e = !1),
          uo(t, n),
          Wy(t, r, o),
          ec(t, r, o, n),
          rc(null, t, r, !0, e, n)
        );
      case 19:
        return Zy(e, t, n);
      case 22:
        return Qy(e, t, n);
    }
    throw Error(L(156, t.tag));
  };
  function pv(e, t) {
    return zg(e, t);
  }
  function GS(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Rt(e, t, n, r) {
    return new GS(e, t, n, r);
  }
  function Fd(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function QS(e) {
    if (typeof e == "function") return Fd(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === rd)) return 11;
      if (e === od) return 14;
    }
    return 2;
  }
  function Jn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Rt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function ta(e, t, n, r, o, i) {
    var s = 2;
    if (((r = e), typeof e == "function")) Fd(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
      e: switch (e) {
        case $r:
          return Tr(n.children, o, i, t);
        case nd:
          (s = 8), (o |= 8);
          break;
        case Pu:
          return (
            (e = Rt(12, n, t, o | 2)), (e.elementType = Pu), (e.lanes = i), e
          );
        case Tu:
          return (e = Rt(13, n, t, o)), (e.elementType = Tu), (e.lanes = i), e;
        case bu:
          return (e = Rt(19, n, t, o)), (e.elementType = bu), (e.lanes = i), e;
        case Pg:
          return ol(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Cg:
                s = 10;
                break e;
              case Eg:
                s = 9;
                break e;
              case rd:
                s = 11;
                break e;
              case od:
                s = 14;
                break e;
              case On:
                (s = 16), (r = null);
                break e;
            }
          throw Error(L(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Rt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function Tr(e, t, n, r) {
    return (e = Rt(7, e, r, t)), (e.lanes = n), e;
  }
  function ol(e, t, n, r) {
    return (
      (e = Rt(22, e, r, t)),
      (e.elementType = Pg),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function tu(e, t, n) {
    return (e = Rt(6, e, null, t)), (e.lanes = n), e;
  }
  function nu(e, t, n) {
    return (
      (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function YS(e, t, n, r, o) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Il(0)),
      (this.expirationTimes = Il(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Il(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Vd(e, t, n, r, o, i, s, a, l) {
    return (
      (e = new YS(e, t, n, a, l)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = Rt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Cd(i),
      e
    );
  }
  function XS(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: zr,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function mv(e) {
    if (!e) return tr;
    e = e._reactInternals;
    e: {
      if (_r(e) !== e || e.tag !== 1) throw Error(L(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (lt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(L(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (lt(n)) return my(e, n, t);
    }
    return t;
  }
  function gv(e, t, n, r, o, i, s, a, l) {
    return (
      (e = Vd(n, r, !0, e, o, i, s, a, l)),
      (e.context = mv(null)),
      (n = e.current),
      (r = tt()),
      (o = Zn(n)),
      (i = mn(r, o)),
      (i.callback = t ?? null),
      Xn(n, i, o),
      (e.current.lanes = o),
      Ji(e, o, r),
      ut(e, r),
      e
    );
  }
  function il(e, t, n, r) {
    var o = t.current,
      i = tt(),
      s = Zn(o);
    return (
      (n = mv(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = mn(i, s)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Xn(o, t, s)),
      e !== null && (zt(e, o, s, i), Ys(e, o, s)),
      s
    );
  }
  function Na(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Yh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Bd(e, t) {
    Yh(e, t), (e = e.alternate) && Yh(e, t);
  }
  function qS() {
    return null;
  }
  var yv =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function zd(e) {
    this._internalRoot = e;
  }
  sl.prototype.render = zd.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(L(409));
    il(e, t, null, null);
  };
  sl.prototype.unmount = zd.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Nr(function () {
        il(null, e, null, null);
      }),
        (t[wn] = null);
    }
  };
  function sl(e) {
    this._internalRoot = e;
  }
  sl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Qg();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++);
      In.splice(n, 0, e), n === 0 && Xg(e);
    }
  };
  function $d(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function al(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Xh() {}
  function ZS(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var u = Na(s);
          i.call(u);
        };
      }
      var s = gv(t, r, e, 0, null, !1, !1, "", Xh);
      return (
        (e._reactRootContainer = s),
        (e[wn] = s.current),
        Ai(e.nodeType === 8 ? e.parentNode : e),
        Nr(),
        s
      );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var u = Na(l);
        a.call(u);
      };
    }
    var l = Vd(e, 0, !1, null, null, !1, !1, "", Xh);
    return (
      (e._reactRootContainer = l),
      (e[wn] = l.current),
      Ai(e.nodeType === 8 ? e.parentNode : e),
      Nr(function () {
        il(t, l, n, r);
      }),
      l
    );
  }
  function ll(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var s = i;
      if (typeof o == "function") {
        var a = o;
        o = function () {
          var l = Na(s);
          a.call(l);
        };
      }
      il(t, s, e, o);
    } else s = ZS(n, t, e, o, r);
    return Na(s);
  }
  Kg = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ii(t.pendingLanes);
          n !== 0 &&
            (ad(t, n | 1), ut(t, Me()), !(oe & 6) && ((Ao = Me() + 500), cr()));
        }
        break;
      case 13:
        Nr(function () {
          var r = xn(e, 1);
          if (r !== null) {
            var o = tt();
            zt(r, e, 1, o);
          }
        }),
          Bd(e, 1);
    }
  };
  ld = function (e) {
    if (e.tag === 13) {
      var t = xn(e, 134217728);
      if (t !== null) {
        var n = tt();
        zt(t, e, 134217728, n);
      }
      Bd(e, 134217728);
    }
  };
  Gg = function (e) {
    if (e.tag === 13) {
      var t = Zn(e),
        n = xn(e, t);
      if (n !== null) {
        var r = tt();
        zt(n, e, t, r);
      }
      Bd(e, t);
    }
  };
  Qg = function () {
    return ue;
  };
  Yg = function (e, t) {
    var n = ue;
    try {
      return (ue = e), t();
    } finally {
      ue = n;
    }
  };
  Iu = function (e, t, n) {
    switch (t) {
      case "input":
        if ((Ru(e, n), (t = n.name), n.type === "radio" && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = Za(r);
              if (!o) throw Error(L(90));
              bg(r), Ru(r, o);
            }
          }
        }
        break;
      case "textarea":
        Mg(e, n);
        break;
      case "select":
        (t = n.value), t != null && io(e, !!n.multiple, t, !1);
    }
  };
  _g = _d;
  Ig = Nr;
  var JS = { usingClientEntryPoint: !1, Events: [ts, Kr, Za, Lg, Og, _d] },
    Jo = {
      findFiberByHostInstance: gr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    eC = {
      bundleType: Jo.bundleType,
      version: Jo.version,
      rendererPackageName: Jo.rendererPackageName,
      rendererConfig: Jo.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Tn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Vg(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Jo.findFiberByHostInstance || qS,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ls.isDisabled && Ls.supportsFiber)
      try {
        (Qa = Ls.inject(eC)), (en = Ls);
      } catch {}
  }
  Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JS;
  Ct.createPortal = function (e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$d(t)) throw Error(L(200));
    return XS(e, t, null, n);
  };
  Ct.createRoot = function (e, t) {
    if (!$d(e)) throw Error(L(299));
    var n = !1,
      r = "",
      o = yv;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
      (t = Vd(e, 1, !1, null, null, n, !1, r, o)),
      (e[wn] = t.current),
      Ai(e.nodeType === 8 ? e.parentNode : e),
      new zd(t)
    );
  };
  Ct.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(L(188))
        : ((e = Object.keys(e).join(",")), Error(L(268, e)));
    return (e = Vg(t)), (e = e === null ? null : e.stateNode), e;
  };
  Ct.flushSync = function (e) {
    return Nr(e);
  };
  Ct.hydrate = function (e, t, n) {
    if (!al(t)) throw Error(L(200));
    return ll(null, e, t, !0, n);
  };
  Ct.hydrateRoot = function (e, t, n) {
    if (!$d(e)) throw Error(L(405));
    var r = (n != null && n.hydratedSources) || null,
      o = !1,
      i = "",
      s = yv;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (o = !0),
        n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
      (t = gv(t, null, e, 1, n ?? null, o, !1, i, s)),
      (e[wn] = t.current),
      Ai(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (n = r[e]),
          (o = n._getVersion),
          (o = o(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, o])
            : t.mutableSourceEagerHydrationData.push(n, o);
    return new sl(t);
  };
  Ct.render = function (e, t, n) {
    if (!al(t)) throw Error(L(200));
    return ll(null, e, t, !1, n);
  };
  Ct.unmountComponentAtNode = function (e) {
    if (!al(e)) throw Error(L(40));
    return e._reactRootContainer
      ? (Nr(function () {
          ll(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[wn] = null);
          });
        }),
        !0)
      : !1;
  };
  Ct.unstable_batchedUpdates = _d;
  Ct.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!al(n)) throw Error(L(200));
    if (e == null || e._reactInternals === void 0) throw Error(L(38));
    return ll(e, t, n, !1, r);
  };
  Ct.version = "18.3.1-next-f1338f8080-20240426";
  function vv() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vv);
      } catch (e) {
        console.error(e);
      }
  }
  vv(), (vg.exports = Ct);
  var rs = vg.exports;
  const wv = sg(rs);
  var xv,
    qh = rs;
  (xv = qh.createRoot), qh.hydrateRoot;
  const tC = 1,
    nC = 1e6;
  let ru = 0;
  function rC() {
    return (ru = (ru + 1) % Number.MAX_SAFE_INTEGER), ru.toString();
  }
  const ou = new Map(),
    Zh = (e) => {
      if (ou.has(e)) return;
      const t = setTimeout(() => {
        ou.delete(e), vi({ type: "REMOVE_TOAST", toastId: e });
      }, nC);
      ou.set(e, t);
    },
    oC = (e, t) => {
      switch (t.type) {
        case "ADD_TOAST":
          return { ...e, toasts: [t.toast, ...e.toasts].slice(0, tC) };
        case "UPDATE_TOAST":
          return {
            ...e,
            toasts: e.toasts.map((n) =>
              n.id === t.toast.id ? { ...n, ...t.toast } : n
            ),
          };
        case "DISMISS_TOAST": {
          const { toastId: n } = t;
          return (
            n
              ? Zh(n)
              : e.toasts.forEach((r) => {
                  Zh(r.id);
                }),
            {
              ...e,
              toasts: e.toasts.map((r) =>
                r.id === n || n === void 0 ? { ...r, open: !1 } : r
              ),
            }
          );
        }
        case "REMOVE_TOAST":
          return t.toastId === void 0
            ? { ...e, toasts: [] }
            : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
      }
    },
    na = [];
  let ra = { toasts: [] };
  function vi(e) {
    (ra = oC(ra, e)),
      na.forEach((t) => {
        t(ra);
      });
  }
  function iC({ ...e }) {
    const t = rC(),
      n = (o) => vi({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
      r = () => vi({ type: "DISMISS_TOAST", toastId: t });
    return (
      vi({
        type: "ADD_TOAST",
        toast: {
          ...e,
          id: t,
          open: !0,
          onOpenChange: (o) => {
            o || r();
          },
        },
      }),
      { id: t, dismiss: r, update: n }
    );
  }
  function sC() {
    const [e, t] = x.useState(ra);
    return (
      x.useEffect(
        () => (
          na.push(t),
          () => {
            const n = na.indexOf(t);
            n > -1 && na.splice(n, 1);
          }
        ),
        [e]
      ),
      {
        ...e,
        toast: iC,
        dismiss: (n) => vi({ type: "DISMISS_TOAST", toastId: n }),
      }
    );
  }
  function Le(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (o) {
      if ((e == null || e(o), n === !1 || !o.defaultPrevented))
        return t == null ? void 0 : t(o);
    };
  }
  function aC(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t);
  }
  function Sv(...e) {
    return (t) => e.forEach((n) => aC(n, t));
  }
  function Ut(...e) {
    return x.useCallback(Sv(...e), e);
  }
  function lC(e, t = []) {
    let n = [];
    function r(i, s) {
      const a = x.createContext(s),
        l = n.length;
      n = [...n, s];
      function u(f) {
        const { scope: d, children: p, ...y } = f,
          g = (d == null ? void 0 : d[e][l]) || a,
          w = x.useMemo(() => y, Object.values(y));
        return k.jsx(g.Provider, { value: w, children: p });
      }
      function c(f, d) {
        const p = (d == null ? void 0 : d[e][l]) || a,
          y = x.useContext(p);
        if (y) return y;
        if (s !== void 0) return s;
        throw new Error(`\`${f}\` must be used within \`${i}\``);
      }
      return (u.displayName = i + "Provider"), [u, c];
    }
    const o = () => {
      const i = n.map((s) => x.createContext(s));
      return function (a) {
        const l = (a == null ? void 0 : a[e]) || i;
        return x.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
      };
    };
    return (o.scopeName = e), [r, uC(o, ...t)];
  }
  function uC(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
      const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
      return function (i) {
        const s = r.reduce((a, { useScope: l, scopeName: u }) => {
          const f = l(i)[`__scope${u}`];
          return { ...a, ...f };
        }, {});
        return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
      };
    };
    return (n.scopeName = t.scopeName), n;
  }
  var Da = x.forwardRef((e, t) => {
    const { children: n, ...r } = e,
      o = x.Children.toArray(n),
      i = o.find(cC);
    if (i) {
      const s = i.props.children,
        a = o.map((l) =>
          l === i
            ? x.Children.count(s) > 1
              ? x.Children.only(null)
              : x.isValidElement(s)
              ? s.props.children
              : null
            : l
        );
      return k.jsx(mc, {
        ...r,
        ref: t,
        children: x.isValidElement(s) ? x.cloneElement(s, void 0, a) : null,
      });
    }
    return k.jsx(mc, { ...r, ref: t, children: n });
  });
  Da.displayName = "Slot";
  var mc = x.forwardRef((e, t) => {
    const { children: n, ...r } = e;
    if (x.isValidElement(n)) {
      const o = fC(n);
      return x.cloneElement(n, { ...dC(r, n.props), ref: t ? Sv(t, o) : o });
    }
    return x.Children.count(n) > 1 ? x.Children.only(null) : null;
  });
  mc.displayName = "SlotClone";
  var Cv = ({ children: e }) => k.jsx(k.Fragment, { children: e });
  function cC(e) {
    return x.isValidElement(e) && e.type === Cv;
  }
  function dC(e, t) {
    const n = { ...t };
    for (const r in t) {
      const o = e[r],
        i = t[r];
      /^on[A-Z]/.test(r)
        ? o && i
          ? (n[r] = (...a) => {
              i(...a), o(...a);
            })
          : o && (n[r] = o)
        : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
  }
  function fC(e) {
    var r, o;
    let t =
        (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
          ? void 0
          : r.get,
      n = t && "isReactWarning" in t && t.isReactWarning;
    return n
      ? e.ref
      : ((t =
          (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
            ? void 0
            : o.get),
        (n = t && "isReactWarning" in t && t.isReactWarning),
        n ? e.props.ref : e.props.ref || e.ref);
  }
  function hC(e) {
    const t = e + "CollectionProvider",
      [n, r] = lC(t),
      [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
      s = (p) => {
        const { scope: y, children: g } = p,
          w = V.useRef(null),
          h = V.useRef(new Map()).current;
        return k.jsx(o, {
          scope: y,
          itemMap: h,
          collectionRef: w,
          children: g,
        });
      };
    s.displayName = t;
    const a = e + "CollectionSlot",
      l = V.forwardRef((p, y) => {
        const { scope: g, children: w } = p,
          h = i(a, g),
          m = Ut(y, h.collectionRef);
        return k.jsx(Da, { ref: m, children: w });
      });
    l.displayName = a;
    const u = e + "CollectionItemSlot",
      c = "data-radix-collection-item",
      f = V.forwardRef((p, y) => {
        const { scope: g, children: w, ...h } = p,
          m = V.useRef(null),
          v = Ut(y, m),
          C = i(u, g);
        return (
          V.useEffect(
            () => (
              C.itemMap.set(m, { ref: m, ...h }), () => void C.itemMap.delete(m)
            )
          ),
          k.jsx(Da, { [c]: "", ref: v, children: w })
        );
      });
    f.displayName = u;
    function d(p) {
      const y = i(e + "CollectionConsumer", p);
      return V.useCallback(() => {
        const w = y.collectionRef.current;
        if (!w) return [];
        const h = Array.from(w.querySelectorAll(`[${c}]`));
        return Array.from(y.itemMap.values()).sort(
          (C, E) => h.indexOf(C.ref.current) - h.indexOf(E.ref.current)
        );
      }, [y.collectionRef, y.itemMap]);
    }
    return [{ Provider: s, Slot: l, ItemSlot: f }, d, r];
  }
  function Ev(e, t = []) {
    let n = [];
    function r(i, s) {
      const a = x.createContext(s),
        l = n.length;
      n = [...n, s];
      const u = (f) => {
        var h;
        const { scope: d, children: p, ...y } = f,
          g = ((h = d == null ? void 0 : d[e]) == null ? void 0 : h[l]) || a,
          w = x.useMemo(() => y, Object.values(y));
        return k.jsx(g.Provider, { value: w, children: p });
      };
      u.displayName = i + "Provider";
      function c(f, d) {
        var g;
        const p =
            ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[l]) || a,
          y = x.useContext(p);
        if (y) return y;
        if (s !== void 0) return s;
        throw new Error(`\`${f}\` must be used within \`${i}\``);
      }
      return [u, c];
    }
    const o = () => {
      const i = n.map((s) => x.createContext(s));
      return function (a) {
        const l = (a == null ? void 0 : a[e]) || i;
        return x.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
      };
    };
    return (o.scopeName = e), [r, pC(o, ...t)];
  }
  function pC(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
      const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
      return function (i) {
        const s = r.reduce((a, { useScope: l, scopeName: u }) => {
          const f = l(i)[`__scope${u}`];
          return { ...a, ...f };
        }, {});
        return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
      };
    };
    return (n.scopeName = t.scopeName), n;
  }
  var mC = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "span",
      "svg",
      "ul",
    ],
    dt = mC.reduce((e, t) => {
      const n = x.forwardRef((r, o) => {
        const { asChild: i, ...s } = r,
          a = i ? Da : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          k.jsx(a, { ...s, ref: o })
        );
      });
      return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
    }, {});
  function Pv(e, t) {
    e && rs.flushSync(() => e.dispatchEvent(t));
  }
  function on(e) {
    const t = x.useRef(e);
    return (
      x.useEffect(() => {
        t.current = e;
      }),
      x.useMemo(
        () =>
          (...n) => {
            var r;
            return (r = t.current) == null ? void 0 : r.call(t, ...n);
          },
        []
      )
    );
  }
  function gC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = on(e);
    x.useEffect(() => {
      const r = (o) => {
        o.key === "Escape" && n(o);
      };
      return (
        t.addEventListener("keydown", r, { capture: !0 }),
        () => t.removeEventListener("keydown", r, { capture: !0 })
      );
    }, [n, t]);
  }
  var yC = "DismissableLayer",
    gc = "dismissableLayer.update",
    vC = "dismissableLayer.pointerDownOutside",
    wC = "dismissableLayer.focusOutside",
    Jh,
    Tv = x.createContext({
      layers: new Set(),
      layersWithOutsidePointerEventsDisabled: new Set(),
      branches: new Set(),
    }),
    Ud = x.forwardRef((e, t) => {
      const {
          disableOutsidePointerEvents: n = !1,
          onEscapeKeyDown: r,
          onPointerDownOutside: o,
          onFocusOutside: i,
          onInteractOutside: s,
          onDismiss: a,
          ...l
        } = e,
        u = x.useContext(Tv),
        [c, f] = x.useState(null),
        d =
          (c == null ? void 0 : c.ownerDocument) ??
          (globalThis == null ? void 0 : globalThis.document),
        [, p] = x.useState({}),
        y = Ut(t, (M) => f(M)),
        g = Array.from(u.layers),
        [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
        h = g.indexOf(w),
        m = c ? g.indexOf(c) : -1,
        v = u.layersWithOutsidePointerEventsDisabled.size > 0,
        C = m >= h,
        E = SC((M) => {
          const b = M.target,
            j = [...u.branches].some((_) => _.contains(b));
          !C ||
            j ||
            (o == null || o(M),
            s == null || s(M),
            M.defaultPrevented || a == null || a());
        }, d),
        T = CC((M) => {
          const b = M.target;
          [...u.branches].some((_) => _.contains(b)) ||
            (i == null || i(M),
            s == null || s(M),
            M.defaultPrevented || a == null || a());
        }, d);
      return (
        gC((M) => {
          m === u.layers.size - 1 &&
            (r == null || r(M),
            !M.defaultPrevented && a && (M.preventDefault(), a()));
        }, d),
        x.useEffect(() => {
          if (c)
            return (
              n &&
                (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((Jh = d.body.style.pointerEvents),
                  (d.body.style.pointerEvents = "none")),
                u.layersWithOutsidePointerEventsDisabled.add(c)),
              u.layers.add(c),
              ep(),
              () => {
                n &&
                  u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                  (d.body.style.pointerEvents = Jh);
              }
            );
        }, [c, d, n, u]),
        x.useEffect(
          () => () => {
            c &&
              (u.layers.delete(c),
              u.layersWithOutsidePointerEventsDisabled.delete(c),
              ep());
          },
          [c, u]
        ),
        x.useEffect(() => {
          const M = () => p({});
          return (
            document.addEventListener(gc, M),
            () => document.removeEventListener(gc, M)
          );
        }, []),
        k.jsx(dt.div, {
          ...l,
          ref: y,
          style: {
            pointerEvents: v ? (C ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: Le(e.onFocusCapture, T.onFocusCapture),
          onBlurCapture: Le(e.onBlurCapture, T.onBlurCapture),
          onPointerDownCapture: Le(
            e.onPointerDownCapture,
            E.onPointerDownCapture
          ),
        })
      );
    });
  Ud.displayName = yC;
  var xC = "DismissableLayerBranch",
    bv = x.forwardRef((e, t) => {
      const n = x.useContext(Tv),
        r = x.useRef(null),
        o = Ut(t, r);
      return (
        x.useEffect(() => {
          const i = r.current;
          if (i)
            return (
              n.branches.add(i),
              () => {
                n.branches.delete(i);
              }
            );
        }, [n.branches]),
        k.jsx(dt.div, { ...e, ref: o })
      );
    });
  bv.displayName = xC;
  function SC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = on(e),
      r = x.useRef(!1),
      o = x.useRef(() => {});
    return (
      x.useEffect(() => {
        const i = (a) => {
            if (a.target && !r.current) {
              let l = function () {
                kv(vC, n, u, { discrete: !0 });
              };
              const u = { originalEvent: a };
              a.pointerType === "touch"
                ? (t.removeEventListener("click", o.current),
                  (o.current = l),
                  t.addEventListener("click", o.current, { once: !0 }))
                : l();
            } else t.removeEventListener("click", o.current);
            r.current = !1;
          },
          s = window.setTimeout(() => {
            t.addEventListener("pointerdown", i);
          }, 0);
        return () => {
          window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current);
        };
      }, [t, n]),
      { onPointerDownCapture: () => (r.current = !0) }
    );
  }
  function CC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = on(e),
      r = x.useRef(!1);
    return (
      x.useEffect(() => {
        const o = (i) => {
          i.target &&
            !r.current &&
            kv(wC, n, { originalEvent: i }, { discrete: !1 });
        };
        return (
          t.addEventListener("focusin", o),
          () => t.removeEventListener("focusin", o)
        );
      }, [t, n]),
      {
        onFocusCapture: () => (r.current = !0),
        onBlurCapture: () => (r.current = !1),
      }
    );
  }
  function ep() {
    const e = new CustomEvent(gc);
    document.dispatchEvent(e);
  }
  function kv(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target,
      i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }),
      r ? Pv(o, i) : o.dispatchEvent(i);
  }
  var EC = Ud,
    PC = bv,
    Dr =
      globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
    TC = "Portal",
    Mv = x.forwardRef((e, t) => {
      var a;
      const { container: n, ...r } = e,
        [o, i] = x.useState(!1);
      Dr(() => i(!0), []);
      const s =
        n ||
        (o &&
          ((a = globalThis == null ? void 0 : globalThis.document) == null
            ? void 0
            : a.body));
      return s ? wv.createPortal(k.jsx(dt.div, { ...r, ref: t }), s) : null;
    });
  Mv.displayName = TC;
  function bC(e, t) {
    return x.useReducer((n, r) => t[n][r] ?? n, e);
  }
  var Wd = (e) => {
    const { present: t, children: n } = e,
      r = kC(t),
      o =
        typeof n == "function"
          ? n({ present: r.isPresent })
          : x.Children.only(n),
      i = Ut(r.ref, MC(o));
    return typeof n == "function" || r.isPresent
      ? x.cloneElement(o, { ref: i })
      : null;
  };
  Wd.displayName = "Presence";
  function kC(e) {
    const [t, n] = x.useState(),
      r = x.useRef({}),
      o = x.useRef(e),
      i = x.useRef("none"),
      s = e ? "mounted" : "unmounted",
      [a, l] = bC(s, {
        mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
        unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
        unmounted: { MOUNT: "mounted" },
      });
    return (
      x.useEffect(() => {
        const u = Os(r.current);
        i.current = a === "mounted" ? u : "none";
      }, [a]),
      Dr(() => {
        const u = r.current,
          c = o.current;
        if (c !== e) {
          const d = i.current,
            p = Os(u);
          e
            ? l("MOUNT")
            : p === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(c && d !== p ? "ANIMATION_OUT" : "UNMOUNT"),
            (o.current = e);
        }
      }, [e, l]),
      Dr(() => {
        if (t) {
          let u;
          const c = t.ownerDocument.defaultView ?? window,
            f = (p) => {
              const g = Os(r.current).includes(p.animationName);
              if (p.target === t && g && (l("ANIMATION_END"), !o.current)) {
                const w = t.style.animationFillMode;
                (t.style.animationFillMode = "forwards"),
                  (u = c.setTimeout(() => {
                    t.style.animationFillMode === "forwards" &&
                      (t.style.animationFillMode = w);
                  }));
              }
            },
            d = (p) => {
              p.target === t && (i.current = Os(r.current));
            };
          return (
            t.addEventListener("animationstart", d),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
              c.clearTimeout(u),
                t.removeEventListener("animationstart", d),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f);
            }
          );
        } else l("ANIMATION_END");
      }, [t, l]),
      {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: x.useCallback((u) => {
          u && (r.current = getComputedStyle(u)), n(u);
        }, []),
      }
    );
  }
  function Os(e) {
    return (e == null ? void 0 : e.animationName) || "none";
  }
  function MC(e) {
    var r, o;
    let t =
        (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
          ? void 0
          : r.get,
      n = t && "isReactWarning" in t && t.isReactWarning;
    return n
      ? e.ref
      : ((t =
          (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
            ? void 0
            : o.get),
        (n = t && "isReactWarning" in t && t.isReactWarning),
        n ? e.props.ref : e.props.ref || e.ref);
  }
  function RC({ prop: e, defaultProp: t, onChange: n = () => {} }) {
    const [r, o] = AC({ defaultProp: t, onChange: n }),
      i = e !== void 0,
      s = i ? e : r,
      a = on(n),
      l = x.useCallback(
        (u) => {
          if (i) {
            const f = typeof u == "function" ? u(e) : u;
            f !== e && a(f);
          } else o(u);
        },
        [i, e, o, a]
      );
    return [s, l];
  }
  function AC({ defaultProp: e, onChange: t }) {
    const n = x.useState(e),
      [r] = n,
      o = x.useRef(r),
      i = on(t);
    return (
      x.useEffect(() => {
        o.current !== r && (i(r), (o.current = r));
      }, [r, o, i]),
      n
    );
  }
  var NC = "VisuallyHidden",
    ul = x.forwardRef((e, t) =>
      k.jsx(dt.span, {
        ...e,
        ref: t,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style,
        },
      })
    );
  ul.displayName = NC;
  var DC = ul,
    Hd = "ToastProvider",
    [Kd, LC, OC] = hC("Toast"),
    [Rv, LA] = Ev("Toast", [OC]),
    [_C, cl] = Rv(Hd),
    Av = (e) => {
      const {
          __scopeToast: t,
          label: n = "Notification",
          duration: r = 5e3,
          swipeDirection: o = "right",
          swipeThreshold: i = 50,
          children: s,
        } = e,
        [a, l] = x.useState(null),
        [u, c] = x.useState(0),
        f = x.useRef(!1),
        d = x.useRef(!1);
      return (
        n.trim() ||
          console.error(
            `Invalid prop \`label\` supplied to \`${Hd}\`. Expected non-empty \`string\`.`
          ),
        k.jsx(Kd.Provider, {
          scope: t,
          children: k.jsx(_C, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: x.useCallback(() => c((p) => p + 1), []),
            onToastRemove: x.useCallback(() => c((p) => p - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: d,
            children: s,
          }),
        })
      );
    };
  Av.displayName = Hd;
  var Nv = "ToastViewport",
    IC = ["F8"],
    yc = "toast.viewportPause",
    vc = "toast.viewportResume",
    Dv = x.forwardRef((e, t) => {
      const {
          __scopeToast: n,
          hotkey: r = IC,
          label: o = "Notifications ({hotkey})",
          ...i
        } = e,
        s = cl(Nv, n),
        a = LC(n),
        l = x.useRef(null),
        u = x.useRef(null),
        c = x.useRef(null),
        f = x.useRef(null),
        d = Ut(t, f, s.onViewportChange),
        p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        y = s.toastCount > 0;
      x.useEffect(() => {
        const w = (h) => {
          var v;
          r.length !== 0 &&
            r.every((C) => h[C] || h.code === C) &&
            ((v = f.current) == null || v.focus());
        };
        return (
          document.addEventListener("keydown", w),
          () => document.removeEventListener("keydown", w)
        );
      }, [r]),
        x.useEffect(() => {
          const w = l.current,
            h = f.current;
          if (y && w && h) {
            const m = () => {
                if (!s.isClosePausedRef.current) {
                  const T = new CustomEvent(yc);
                  h.dispatchEvent(T), (s.isClosePausedRef.current = !0);
                }
              },
              v = () => {
                if (s.isClosePausedRef.current) {
                  const T = new CustomEvent(vc);
                  h.dispatchEvent(T), (s.isClosePausedRef.current = !1);
                }
              },
              C = (T) => {
                !w.contains(T.relatedTarget) && v();
              },
              E = () => {
                w.contains(document.activeElement) || v();
              };
            return (
              w.addEventListener("focusin", m),
              w.addEventListener("focusout", C),
              w.addEventListener("pointermove", m),
              w.addEventListener("pointerleave", E),
              window.addEventListener("blur", m),
              window.addEventListener("focus", v),
              () => {
                w.removeEventListener("focusin", m),
                  w.removeEventListener("focusout", C),
                  w.removeEventListener("pointermove", m),
                  w.removeEventListener("pointerleave", E),
                  window.removeEventListener("blur", m),
                  window.removeEventListener("focus", v);
              }
            );
          }
        }, [y, s.isClosePausedRef]);
      const g = x.useCallback(
        ({ tabbingDirection: w }) => {
          const m = a().map((v) => {
            const C = v.ref.current,
              E = [C, ...YC(C)];
            return w === "forwards" ? E : E.reverse();
          });
          return (w === "forwards" ? m.reverse() : m).flat();
        },
        [a]
      );
      return (
        x.useEffect(() => {
          const w = f.current;
          if (w) {
            const h = (m) => {
              var E, T, M;
              const v = m.altKey || m.ctrlKey || m.metaKey;
              if (m.key === "Tab" && !v) {
                const b = document.activeElement,
                  j = m.shiftKey;
                if (m.target === w && j) {
                  (E = u.current) == null || E.focus();
                  return;
                }
                const D = g({ tabbingDirection: j ? "backwards" : "forwards" }),
                  U = D.findIndex((O) => O === b);
                iu(D.slice(U + 1))
                  ? m.preventDefault()
                  : j
                  ? (T = u.current) == null || T.focus()
                  : (M = c.current) == null || M.focus();
              }
            };
            return (
              w.addEventListener("keydown", h),
              () => w.removeEventListener("keydown", h)
            );
          }
        }, [a, g]),
        k.jsxs(PC, {
          ref: l,
          role: "region",
          "aria-label": o.replace("{hotkey}", p),
          tabIndex: -1,
          style: { pointerEvents: y ? void 0 : "none" },
          children: [
            y &&
              k.jsx(wc, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                  const w = g({ tabbingDirection: "forwards" });
                  iu(w);
                },
              }),
            k.jsx(Kd.Slot, {
              scope: n,
              children: k.jsx(dt.ol, { tabIndex: -1, ...i, ref: d }),
            }),
            y &&
              k.jsx(wc, {
                ref: c,
                onFocusFromOutsideViewport: () => {
                  const w = g({ tabbingDirection: "backwards" });
                  iu(w);
                },
              }),
          ],
        })
      );
    });
  Dv.displayName = Nv;
  var Lv = "ToastFocusProxy",
    wc = x.forwardRef((e, t) => {
      const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
        i = cl(Lv, n);
      return k.jsx(ul, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (s) => {
          var u;
          const a = s.relatedTarget;
          !((u = i.viewport) != null && u.contains(a)) && r();
        },
      });
    });
  wc.displayName = Lv;
  var dl = "Toast",
    jC = "toast.swipeStart",
    FC = "toast.swipeMove",
    VC = "toast.swipeCancel",
    BC = "toast.swipeEnd",
    Ov = x.forwardRef((e, t) => {
      const {
          forceMount: n,
          open: r,
          defaultOpen: o,
          onOpenChange: i,
          ...s
        } = e,
        [a = !0, l] = RC({ prop: r, defaultProp: o, onChange: i });
      return k.jsx(Wd, {
        present: n || a,
        children: k.jsx(UC, {
          open: a,
          ...s,
          ref: t,
          onClose: () => l(!1),
          onPause: on(e.onPause),
          onResume: on(e.onResume),
          onSwipeStart: Le(e.onSwipeStart, (u) => {
            u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: Le(e.onSwipeMove, (u) => {
            const { x: c, y: f } = u.detail.delta;
            u.currentTarget.setAttribute("data-swipe", "move"),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-x",
                `${c}px`
              ),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-y",
                `${f}px`
              );
          }),
          onSwipeCancel: Le(e.onSwipeCancel, (u) => {
            u.currentTarget.setAttribute("data-swipe", "cancel"),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x"
              ),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y"
              ),
              u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
              u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: Le(e.onSwipeEnd, (u) => {
            const { x: c, y: f } = u.detail.delta;
            u.currentTarget.setAttribute("data-swipe", "end"),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x"
              ),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y"
              ),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-x",
                `${c}px`
              ),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-y",
                `${f}px`
              ),
              l(!1);
          }),
        }),
      });
    });
  Ov.displayName = dl;
  var [zC, $C] = Rv(dl, { onClose() {} }),
    UC = x.forwardRef((e, t) => {
      const {
          __scopeToast: n,
          type: r = "foreground",
          duration: o,
          open: i,
          onClose: s,
          onEscapeKeyDown: a,
          onPause: l,
          onResume: u,
          onSwipeStart: c,
          onSwipeMove: f,
          onSwipeCancel: d,
          onSwipeEnd: p,
          ...y
        } = e,
        g = cl(dl, n),
        [w, h] = x.useState(null),
        m = Ut(t, (O) => h(O)),
        v = x.useRef(null),
        C = x.useRef(null),
        E = o || g.duration,
        T = x.useRef(0),
        M = x.useRef(E),
        b = x.useRef(0),
        { onToastAdd: j, onToastRemove: _ } = g,
        H = on(() => {
          var Y;
          (w == null ? void 0 : w.contains(document.activeElement)) &&
            ((Y = g.viewport) == null || Y.focus()),
            s();
        }),
        D = x.useCallback(
          (O) => {
            !O ||
              O === 1 / 0 ||
              (window.clearTimeout(b.current),
              (T.current = new Date().getTime()),
              (b.current = window.setTimeout(H, O)));
          },
          [H]
        );
      x.useEffect(() => {
        const O = g.viewport;
        if (O) {
          const Y = () => {
              D(M.current), u == null || u();
            },
            Q = () => {
              const K = new Date().getTime() - T.current;
              (M.current = M.current - K),
                window.clearTimeout(b.current),
                l == null || l();
            };
          return (
            O.addEventListener(yc, Q),
            O.addEventListener(vc, Y),
            () => {
              O.removeEventListener(yc, Q), O.removeEventListener(vc, Y);
            }
          );
        }
      }, [g.viewport, E, l, u, D]),
        x.useEffect(() => {
          i && !g.isClosePausedRef.current && D(E);
        }, [i, E, g.isClosePausedRef, D]),
        x.useEffect(() => (j(), () => _()), [j, _]);
      const U = x.useMemo(() => (w ? zv(w) : null), [w]);
      return g.viewport
        ? k.jsxs(k.Fragment, {
            children: [
              U &&
                k.jsx(WC, {
                  __scopeToast: n,
                  role: "status",
                  "aria-live": r === "foreground" ? "assertive" : "polite",
                  "aria-atomic": !0,
                  children: U,
                }),
              k.jsx(zC, {
                scope: n,
                onClose: H,
                children: rs.createPortal(
                  k.jsx(Kd.ItemSlot, {
                    scope: n,
                    children: k.jsx(EC, {
                      asChild: !0,
                      onEscapeKeyDown: Le(a, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || H(),
                          (g.isFocusedToastEscapeKeyDownRef.current = !1);
                      }),
                      children: k.jsx(dt.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...y,
                        ref: m,
                        style: {
                          userSelect: "none",
                          touchAction: "none",
                          ...e.style,
                        },
                        onKeyDown: Le(e.onKeyDown, (O) => {
                          O.key === "Escape" &&
                            (a == null || a(O.nativeEvent),
                            O.nativeEvent.defaultPrevented ||
                              ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                              H()));
                        }),
                        onPointerDown: Le(e.onPointerDown, (O) => {
                          O.button === 0 &&
                            (v.current = { x: O.clientX, y: O.clientY });
                        }),
                        onPointerMove: Le(e.onPointerMove, (O) => {
                          if (!v.current) return;
                          const Y = O.clientX - v.current.x,
                            Q = O.clientY - v.current.y,
                            K = !!C.current,
                            R = ["left", "right"].includes(g.swipeDirection),
                            I = ["left", "up"].includes(g.swipeDirection)
                              ? Math.min
                              : Math.max,
                            P = R ? I(0, Y) : 0,
                            S = R ? 0 : I(0, Q),
                            N = O.pointerType === "touch" ? 10 : 2,
                            F = { x: P, y: S },
                            $ = { originalEvent: O, delta: F };
                          K
                            ? ((C.current = F), _s(FC, f, $, { discrete: !1 }))
                            : tp(F, g.swipeDirection, N)
                            ? ((C.current = F),
                              _s(jC, c, $, { discrete: !1 }),
                              O.target.setPointerCapture(O.pointerId))
                            : (Math.abs(Y) > N || Math.abs(Q) > N) &&
                              (v.current = null);
                        }),
                        onPointerUp: Le(e.onPointerUp, (O) => {
                          const Y = C.current,
                            Q = O.target;
                          if (
                            (Q.hasPointerCapture(O.pointerId) &&
                              Q.releasePointerCapture(O.pointerId),
                            (C.current = null),
                            (v.current = null),
                            Y)
                          ) {
                            const K = O.currentTarget,
                              R = { originalEvent: O, delta: Y };
                            tp(Y, g.swipeDirection, g.swipeThreshold)
                              ? _s(BC, p, R, { discrete: !0 })
                              : _s(VC, d, R, { discrete: !0 }),
                              K.addEventListener(
                                "click",
                                (I) => I.preventDefault(),
                                { once: !0 }
                              );
                          }
                        }),
                      }),
                    }),
                  }),
                  g.viewport
                ),
              }),
            ],
          })
        : null;
    }),
    WC = (e) => {
      const { __scopeToast: t, children: n, ...r } = e,
        o = cl(dl, t),
        [i, s] = x.useState(!1),
        [a, l] = x.useState(!1);
      return (
        GC(() => s(!0)),
        x.useEffect(() => {
          const u = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(u);
        }, []),
        a
          ? null
          : k.jsx(Mv, {
              asChild: !0,
              children: k.jsx(ul, {
                ...r,
                children:
                  i && k.jsxs(k.Fragment, { children: [o.label, " ", n] }),
              }),
            })
      );
    },
    HC = "ToastTitle",
    _v = x.forwardRef((e, t) => {
      const { __scopeToast: n, ...r } = e;
      return k.jsx(dt.div, { ...r, ref: t });
    });
  _v.displayName = HC;
  var KC = "ToastDescription",
    Iv = x.forwardRef((e, t) => {
      const { __scopeToast: n, ...r } = e;
      return k.jsx(dt.div, { ...r, ref: t });
    });
  Iv.displayName = KC;
  var jv = "ToastAction",
    Fv = x.forwardRef((e, t) => {
      const { altText: n, ...r } = e;
      return n.trim()
        ? k.jsx(Bv, {
            altText: n,
            asChild: !0,
            children: k.jsx(Gd, { ...r, ref: t }),
          })
        : (console.error(
            `Invalid prop \`altText\` supplied to \`${jv}\`. Expected non-empty \`string\`.`
          ),
          null);
    });
  Fv.displayName = jv;
  var Vv = "ToastClose",
    Gd = x.forwardRef((e, t) => {
      const { __scopeToast: n, ...r } = e,
        o = $C(Vv, n);
      return k.jsx(Bv, {
        asChild: !0,
        children: k.jsx(dt.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: Le(e.onClick, o.onClose),
        }),
      });
    });
  Gd.displayName = Vv;
  var Bv = x.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return k.jsx(dt.div, {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t,
    });
  });
  function zv(e) {
    const t = [];
    return (
      Array.from(e.childNodes).forEach((r) => {
        if (
          (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
          QC(r))
        ) {
          const o = r.ariaHidden || r.hidden || r.style.display === "none",
            i = r.dataset.radixToastAnnounceExclude === "";
          if (!o)
            if (i) {
              const s = r.dataset.radixToastAnnounceAlt;
              s && t.push(s);
            } else t.push(...zv(r));
        }
      }),
      t
    );
  }
  function _s(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget,
      i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }),
      r ? Pv(o, i) : o.dispatchEvent(i);
  }
  var tp = (e, t, n = 0) => {
    const r = Math.abs(e.x),
      o = Math.abs(e.y),
      i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n;
  };
  function GC(e = () => {}) {
    const t = on(e);
    Dr(() => {
      let n = 0,
        r = 0;
      return (
        (n = window.requestAnimationFrame(
          () => (r = window.requestAnimationFrame(t))
        )),
        () => {
          window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
        }
      );
    }, [t]);
  }
  function QC(e) {
    return e.nodeType === e.ELEMENT_NODE;
  }
  function YC(e) {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (r) => {
          const o = r.tagName === "INPUT" && r.type === "hidden";
          return r.disabled || r.hidden || o
            ? NodeFilter.FILTER_SKIP
            : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
        },
      });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
  }
  function iu(e) {
    const t = document.activeElement;
    return e.some((n) =>
      n === t ? !0 : (n.focus(), document.activeElement !== t)
    );
  }
  var XC = Av,
    $v = Dv,
    Uv = Ov,
    Wv = _v,
    Hv = Iv,
    Kv = Fv,
    Gv = Gd;
  function Qv(e) {
    var t,
      n,
      r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
      if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
          e[t] && (n = Qv(e[t])) && (r && (r += " "), (r += n));
      } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
  }
  function Yv() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
      (e = arguments[n]) && (t = Qv(e)) && (r && (r += " "), (r += t));
    return r;
  }
  const np = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
    rp = Yv,
    qC = (e, t) => (n) => {
      var r;
      if ((t == null ? void 0 : t.variants) == null)
        return rp(
          e,
          n == null ? void 0 : n.class,
          n == null ? void 0 : n.className
        );
      const { variants: o, defaultVariants: i } = t,
        s = Object.keys(o).map((u) => {
          const c = n == null ? void 0 : n[u],
            f = i == null ? void 0 : i[u];
          if (c === null) return null;
          const d = np(c) || np(f);
          return o[u][d];
        }),
        a =
          n &&
          Object.entries(n).reduce((u, c) => {
            let [f, d] = c;
            return d === void 0 || (u[f] = d), u;
          }, {}),
        l =
          t == null || (r = t.compoundVariants) === null || r === void 0
            ? void 0
            : r.reduce((u, c) => {
                let { class: f, className: d, ...p } = c;
                return Object.entries(p).every((y) => {
                  let [g, w] = y;
                  return Array.isArray(w)
                    ? w.includes({ ...i, ...a }[g])
                    : { ...i, ...a }[g] === w;
                })
                  ? [...u, f, d]
                  : u;
              }, []);
      return rp(
        e,
        s,
        l,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    };
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const ZC = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Xv = (...e) =>
      e
        .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
        .join(" ")
        .trim();
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ var JC = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const eE = x.forwardRef(
    (
      {
        color: e = "currentColor",
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: o = "",
        children: i,
        iconNode: s,
        ...a
      },
      l
    ) =>
      x.createElement(
        "svg",
        {
          ref: l,
          ...JC,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: Xv("lucide", o),
          ...a,
        },
        [
          ...s.map(([u, c]) => x.createElement(u, c)),
          ...(Array.isArray(i) ? i : [i]),
        ]
      )
  );
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const bn = (e, t) => {
    const n = x.forwardRef(({ className: r, ...o }, i) =>
      x.createElement(eE, {
        ref: i,
        iconNode: t,
        className: Xv(`lucide-${ZC(e)}`, r),
        ...o,
      })
    );
    return (n.displayName = `${e}`), n;
  };
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const tE = bn("Check", [
    ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const nE = bn("CircleAlert", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const rE = bn("PartyPopper", [
    ["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }],
    ["path", { d: "M4 3h.01", key: "1vcuye" }],
    ["path", { d: "M22 8h.01", key: "1mrtc2" }],
    ["path", { d: "M15 2h.01", key: "1cjtqr" }],
    ["path", { d: "M22 20h.01", key: "1mrys2" }],
    [
      "path",
      {
        d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
        key: "hbicv8",
      },
    ],
    [
      "path",
      {
        d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",
        key: "1i94pl",
      },
    ],
    [
      "path",
      {
        d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",
        key: "1cofks",
      },
    ],
    [
      "path",
      {
        d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
        key: "4kbmks",
      },
    ],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const oE = bn("Plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const iE = bn("RefreshCw", [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const op = bn("Sparkles", [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
        key: "4pj2yx",
      },
    ],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const sE = bn("SquarePen", [
    [
      "path",
      {
        d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
        key: "1m0v6g",
      },
    ],
    [
      "path",
      {
        d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
        key: "ohrbg2",
      },
    ],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const aE = bn("Trash2", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const qv = bn("X", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    Qd = "-",
    lE = (e) => {
      const t = cE(e),
        { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
      return {
        getClassGroupId: (s) => {
          const a = s.split(Qd);
          return a[0] === "" && a.length !== 1 && a.shift(), Zv(a, t) || uE(s);
        },
        getConflictingClassGroupIds: (s, a) => {
          const l = n[s] || [];
          return a && r[s] ? [...l, ...r[s]] : l;
        },
      };
    },
    Zv = (e, t) => {
      var s;
      if (e.length === 0) return t.classGroupId;
      const n = e[0],
        r = t.nextPart.get(n),
        o = r ? Zv(e.slice(1), r) : void 0;
      if (o) return o;
      if (t.validators.length === 0) return;
      const i = e.join(Qd);
      return (s = t.validators.find(({ validator: a }) => a(i))) == null
        ? void 0
        : s.classGroupId;
    },
    ip = /^\[(.+)\]$/,
    uE = (e) => {
      if (ip.test(e)) {
        const t = ip.exec(e)[1],
          n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n;
      }
    },
    cE = (e) => {
      const { theme: t, prefix: n } = e,
        r = { nextPart: new Map(), validators: [] };
      return (
        fE(Object.entries(e.classGroups), n).forEach(([i, s]) => {
          xc(s, r, i, t);
        }),
        r
      );
    },
    xc = (e, t, n, r) => {
      e.forEach((o) => {
        if (typeof o == "string") {
          const i = o === "" ? t : sp(t, o);
          i.classGroupId = n;
          return;
        }
        if (typeof o == "function") {
          if (dE(o)) {
            xc(o(r), t, n, r);
            return;
          }
          t.validators.push({ validator: o, classGroupId: n });
          return;
        }
        Object.entries(o).forEach(([i, s]) => {
          xc(s, sp(t, i), n, r);
        });
      });
    },
    sp = (e, t) => {
      let n = e;
      return (
        t.split(Qd).forEach((r) => {
          n.nextPart.has(r) ||
            n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
            (n = n.nextPart.get(r));
        }),
        n
      );
    },
    dE = (e) => e.isThemeGetter,
    fE = (e, t) =>
      t
        ? e.map(([n, r]) => {
            const o = r.map((i) =>
              typeof i == "string"
                ? t + i
                : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([s, a]) => [t + s, a])
                  )
                : i
            );
            return [n, o];
          })
        : e,
    hE = (e) => {
      if (e < 1) return { get: () => {}, set: () => {} };
      let t = 0,
        n = new Map(),
        r = new Map();
      const o = (i, s) => {
        n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
      };
      return {
        get(i) {
          let s = n.get(i);
          if (s !== void 0) return s;
          if ((s = r.get(i)) !== void 0) return o(i, s), s;
        },
        set(i, s) {
          n.has(i) ? n.set(i, s) : o(i, s);
        },
      };
    },
    Jv = "!",
    pE = (e) => {
      const { separator: t, experimentalParseClassName: n } = e,
        r = t.length === 1,
        o = t[0],
        i = t.length,
        s = (a) => {
          const l = [];
          let u = 0,
            c = 0,
            f;
          for (let w = 0; w < a.length; w++) {
            let h = a[w];
            if (u === 0) {
              if (h === o && (r || a.slice(w, w + i) === t)) {
                l.push(a.slice(c, w)), (c = w + i);
                continue;
              }
              if (h === "/") {
                f = w;
                continue;
              }
            }
            h === "[" ? u++ : h === "]" && u--;
          }
          const d = l.length === 0 ? a : a.substring(c),
            p = d.startsWith(Jv),
            y = p ? d.substring(1) : d,
            g = f && f > c ? f - c : void 0;
          return {
            modifiers: l,
            hasImportantModifier: p,
            baseClassName: y,
            maybePostfixModifierPosition: g,
          };
        };
      return n ? (a) => n({ className: a, parseClassName: s }) : s;
    },
    mE = (e) => {
      if (e.length <= 1) return e;
      const t = [];
      let n = [];
      return (
        e.forEach((r) => {
          r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
        }),
        t.push(...n.sort()),
        t
      );
    },
    gE = (e) => ({ cache: hE(e.cacheSize), parseClassName: pE(e), ...lE(e) }),
    yE = /\s+/,
    vE = (e, t) => {
      const {
          parseClassName: n,
          getClassGroupId: r,
          getConflictingClassGroupIds: o,
        } = t,
        i = [],
        s = e.trim().split(yE);
      let a = "";
      for (let l = s.length - 1; l >= 0; l -= 1) {
        const u = s[l],
          {
            modifiers: c,
            hasImportantModifier: f,
            baseClassName: d,
            maybePostfixModifierPosition: p,
          } = n(u);
        let y = !!p,
          g = r(y ? d.substring(0, p) : d);
        if (!g) {
          if (!y) {
            a = u + (a.length > 0 ? " " + a : a);
            continue;
          }
          if (((g = r(d)), !g)) {
            a = u + (a.length > 0 ? " " + a : a);
            continue;
          }
          y = !1;
        }
        const w = mE(c).join(":"),
          h = f ? w + Jv : w,
          m = h + g;
        if (i.includes(m)) continue;
        i.push(m);
        const v = o(g, y);
        for (let C = 0; C < v.length; ++C) {
          const E = v[C];
          i.push(h + E);
        }
        a = u + (a.length > 0 ? " " + a : a);
      }
      return a;
    };
  function wE() {
    let e = 0,
      t,
      n,
      r = "";
    for (; e < arguments.length; )
      (t = arguments[e++]) && (n = e0(t)) && (r && (r += " "), (r += n));
    return r;
  }
  const e0 = (e) => {
    if (typeof e == "string") return e;
    let t,
      n = "";
    for (let r = 0; r < e.length; r++)
      e[r] && (t = e0(e[r])) && (n && (n += " "), (n += t));
    return n;
  };
  function xE(e, ...t) {
    let n,
      r,
      o,
      i = s;
    function s(l) {
      const u = t.reduce((c, f) => f(c), e());
      return (n = gE(u)), (r = n.cache.get), (o = n.cache.set), (i = a), a(l);
    }
    function a(l) {
      const u = r(l);
      if (u) return u;
      const c = vE(l, n);
      return o(l, c), c;
    }
    return function () {
      return i(wE.apply(null, arguments));
    };
  }
  const ge = (e) => {
      const t = (n) => n[e] || [];
      return (t.isThemeGetter = !0), t;
    },
    t0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    SE = /^\d+\/\d+$/,
    CE = new Set(["px", "full", "screen"]),
    EE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    PE =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    TE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    bE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    kE =
      /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    un = (e) => fo(e) || CE.has(e) || SE.test(e),
    An = (e) => Vo(e, "length", _E),
    fo = (e) => !!e && !Number.isNaN(Number(e)),
    su = (e) => Vo(e, "number", fo),
    ei = (e) => !!e && Number.isInteger(Number(e)),
    ME = (e) => e.endsWith("%") && fo(e.slice(0, -1)),
    J = (e) => t0.test(e),
    Nn = (e) => EE.test(e),
    RE = new Set(["length", "size", "percentage"]),
    AE = (e) => Vo(e, RE, n0),
    NE = (e) => Vo(e, "position", n0),
    DE = new Set(["image", "url"]),
    LE = (e) => Vo(e, DE, jE),
    OE = (e) => Vo(e, "", IE),
    ti = () => !0,
    Vo = (e, t, n) => {
      const r = t0.exec(e);
      return r
        ? r[1]
          ? typeof t == "string"
            ? r[1] === t
            : t.has(r[1])
          : n(r[2])
        : !1;
    },
    _E = (e) => PE.test(e) && !TE.test(e),
    n0 = () => !1,
    IE = (e) => bE.test(e),
    jE = (e) => kE.test(e),
    FE = () => {
      const e = ge("colors"),
        t = ge("spacing"),
        n = ge("blur"),
        r = ge("brightness"),
        o = ge("borderColor"),
        i = ge("borderRadius"),
        s = ge("borderSpacing"),
        a = ge("borderWidth"),
        l = ge("contrast"),
        u = ge("grayscale"),
        c = ge("hueRotate"),
        f = ge("invert"),
        d = ge("gap"),
        p = ge("gradientColorStops"),
        y = ge("gradientColorStopPositions"),
        g = ge("inset"),
        w = ge("margin"),
        h = ge("opacity"),
        m = ge("padding"),
        v = ge("saturate"),
        C = ge("scale"),
        E = ge("sepia"),
        T = ge("skew"),
        M = ge("space"),
        b = ge("translate"),
        j = () => ["auto", "contain", "none"],
        _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
        H = () => ["auto", J, t],
        D = () => [J, t],
        U = () => ["", un, An],
        O = () => ["auto", fo, J],
        Y = () => [
          "bottom",
          "center",
          "left",
          "left-bottom",
          "left-top",
          "right",
          "right-bottom",
          "right-top",
          "top",
        ],
        Q = () => ["solid", "dashed", "dotted", "double", "none"],
        K = () => [
          "normal",
          "multiply",
          "screen",
          "overlay",
          "darken",
          "lighten",
          "color-dodge",
          "color-burn",
          "hard-light",
          "soft-light",
          "difference",
          "exclusion",
          "hue",
          "saturation",
          "color",
          "luminosity",
        ],
        R = () => [
          "start",
          "end",
          "center",
          "between",
          "around",
          "evenly",
          "stretch",
        ],
        I = () => ["", "0", J],
        P = () => [
          "auto",
          "avoid",
          "all",
          "avoid-page",
          "page",
          "left",
          "right",
          "column",
        ],
        S = () => [fo, J];
      return {
        cacheSize: 500,
        separator: ":",
        theme: {
          colors: [ti],
          spacing: [un, An],
          blur: ["none", "", Nn, J],
          brightness: S(),
          borderColor: [e],
          borderRadius: ["none", "", "full", Nn, J],
          borderSpacing: D(),
          borderWidth: U(),
          contrast: S(),
          grayscale: I(),
          hueRotate: S(),
          invert: I(),
          gap: D(),
          gradientColorStops: [e],
          gradientColorStopPositions: [ME, An],
          inset: H(),
          margin: H(),
          opacity: S(),
          padding: D(),
          saturate: S(),
          scale: S(),
          sepia: I(),
          skew: S(),
          space: D(),
          translate: D(),
        },
        classGroups: {
          aspect: [{ aspect: ["auto", "square", "video", J] }],
          container: ["container"],
          columns: [{ columns: [Nn] }],
          "break-after": [{ "break-after": P() }],
          "break-before": [{ "break-before": P() }],
          "break-inside": [
            { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
          ],
          "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
          box: [{ box: ["border", "content"] }],
          display: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "inline-flex",
            "table",
            "inline-table",
            "table-caption",
            "table-cell",
            "table-column",
            "table-column-group",
            "table-footer-group",
            "table-header-group",
            "table-row-group",
            "table-row",
            "flow-root",
            "grid",
            "inline-grid",
            "contents",
            "list-item",
            "hidden",
          ],
          float: [{ float: ["right", "left", "none", "start", "end"] }],
          clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [
            { object: ["contain", "cover", "fill", "none", "scale-down"] },
          ],
          "object-position": [{ object: [...Y(), J] }],
          overflow: [{ overflow: _() }],
          "overflow-x": [{ "overflow-x": _() }],
          "overflow-y": [{ "overflow-y": _() }],
          overscroll: [{ overscroll: j() }],
          "overscroll-x": [{ "overscroll-x": j() }],
          "overscroll-y": [{ "overscroll-y": j() }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{ inset: [g] }],
          "inset-x": [{ "inset-x": [g] }],
          "inset-y": [{ "inset-y": [g] }],
          start: [{ start: [g] }],
          end: [{ end: [g] }],
          top: [{ top: [g] }],
          right: [{ right: [g] }],
          bottom: [{ bottom: [g] }],
          left: [{ left: [g] }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{ z: ["auto", ei, J] }],
          basis: [{ basis: H() }],
          "flex-direction": [
            { flex: ["row", "row-reverse", "col", "col-reverse"] },
          ],
          "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
          flex: [{ flex: ["1", "auto", "initial", "none", J] }],
          grow: [{ grow: I() }],
          shrink: [{ shrink: I() }],
          order: [{ order: ["first", "last", "none", ei, J] }],
          "grid-cols": [{ "grid-cols": [ti] }],
          "col-start-end": [{ col: ["auto", { span: ["full", ei, J] }, J] }],
          "col-start": [{ "col-start": O() }],
          "col-end": [{ "col-end": O() }],
          "grid-rows": [{ "grid-rows": [ti] }],
          "row-start-end": [{ row: ["auto", { span: [ei, J] }, J] }],
          "row-start": [{ "row-start": O() }],
          "row-end": [{ "row-end": O() }],
          "grid-flow": [
            { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
          ],
          "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", J] }],
          "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", J] }],
          gap: [{ gap: [d] }],
          "gap-x": [{ "gap-x": [d] }],
          "gap-y": [{ "gap-y": [d] }],
          "justify-content": [{ justify: ["normal", ...R()] }],
          "justify-items": [
            { "justify-items": ["start", "end", "center", "stretch"] },
          ],
          "justify-self": [
            { "justify-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          "align-content": [{ content: ["normal", ...R(), "baseline"] }],
          "align-items": [
            { items: ["start", "end", "center", "baseline", "stretch"] },
          ],
          "align-self": [
            { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
          ],
          "place-content": [{ "place-content": [...R(), "baseline"] }],
          "place-items": [
            {
              "place-items": ["start", "end", "center", "baseline", "stretch"],
            },
          ],
          "place-self": [
            { "place-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          p: [{ p: [m] }],
          px: [{ px: [m] }],
          py: [{ py: [m] }],
          ps: [{ ps: [m] }],
          pe: [{ pe: [m] }],
          pt: [{ pt: [m] }],
          pr: [{ pr: [m] }],
          pb: [{ pb: [m] }],
          pl: [{ pl: [m] }],
          m: [{ m: [w] }],
          mx: [{ mx: [w] }],
          my: [{ my: [w] }],
          ms: [{ ms: [w] }],
          me: [{ me: [w] }],
          mt: [{ mt: [w] }],
          mr: [{ mr: [w] }],
          mb: [{ mb: [w] }],
          ml: [{ ml: [w] }],
          "space-x": [{ "space-x": [M] }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{ "space-y": [M] }],
          "space-y-reverse": ["space-y-reverse"],
          w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", J, t] }],
          "min-w": [{ "min-w": [J, t, "min", "max", "fit"] }],
          "max-w": [
            {
              "max-w": [
                J,
                t,
                "none",
                "full",
                "min",
                "max",
                "fit",
                "prose",
                { screen: [Nn] },
                Nn,
              ],
            },
          ],
          h: [{ h: [J, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
          "min-h": [
            { "min-h": [J, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          "max-h": [
            { "max-h": [J, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          size: [{ size: [J, t, "auto", "min", "max", "fit"] }],
          "font-size": [{ text: ["base", Nn, An] }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [
            {
              font: [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
                su,
              ],
            },
          ],
          "font-family": [{ font: [ti] }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
          tracking: [
            {
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
                J,
              ],
            },
          ],
          "line-clamp": [{ "line-clamp": ["none", fo, su] }],
          leading: [
            {
              leading: [
                "none",
                "tight",
                "snug",
                "normal",
                "relaxed",
                "loose",
                un,
                J,
              ],
            },
          ],
          "list-image": [{ "list-image": ["none", J] }],
          "list-style-type": [{ list: ["none", "disc", "decimal", J] }],
          "list-style-position": [{ list: ["inside", "outside"] }],
          "placeholder-color": [{ placeholder: [e] }],
          "placeholder-opacity": [{ "placeholder-opacity": [h] }],
          "text-alignment": [
            { text: ["left", "center", "right", "justify", "start", "end"] },
          ],
          "text-color": [{ text: [e] }],
          "text-opacity": [{ "text-opacity": [h] }],
          "text-decoration": [
            "underline",
            "overline",
            "line-through",
            "no-underline",
          ],
          "text-decoration-style": [{ decoration: [...Q(), "wavy"] }],
          "text-decoration-thickness": [
            { decoration: ["auto", "from-font", un, An] },
          ],
          "underline-offset": [{ "underline-offset": ["auto", un, J] }],
          "text-decoration-color": [{ decoration: [e] }],
          "text-transform": [
            "uppercase",
            "lowercase",
            "capitalize",
            "normal-case",
          ],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
          indent: [{ indent: D() }],
          "vertical-align": [
            {
              align: [
                "baseline",
                "top",
                "middle",
                "bottom",
                "text-top",
                "text-bottom",
                "sub",
                "super",
                J,
              ],
            },
          ],
          whitespace: [
            {
              whitespace: [
                "normal",
                "nowrap",
                "pre",
                "pre-line",
                "pre-wrap",
                "break-spaces",
              ],
            },
          ],
          break: [{ break: ["normal", "words", "all", "keep"] }],
          hyphens: [{ hyphens: ["none", "manual", "auto"] }],
          content: [{ content: ["none", J] }],
          "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
          "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
          "bg-opacity": [{ "bg-opacity": [h] }],
          "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
          "bg-position": [{ bg: [...Y(), NE] }],
          "bg-repeat": [
            { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
          ],
          "bg-size": [{ bg: ["auto", "cover", "contain", AE] }],
          "bg-image": [
            {
              bg: [
                "none",
                { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                LE,
              ],
            },
          ],
          "bg-color": [{ bg: [e] }],
          "gradient-from-pos": [{ from: [y] }],
          "gradient-via-pos": [{ via: [y] }],
          "gradient-to-pos": [{ to: [y] }],
          "gradient-from": [{ from: [p] }],
          "gradient-via": [{ via: [p] }],
          "gradient-to": [{ to: [p] }],
          rounded: [{ rounded: [i] }],
          "rounded-s": [{ "rounded-s": [i] }],
          "rounded-e": [{ "rounded-e": [i] }],
          "rounded-t": [{ "rounded-t": [i] }],
          "rounded-r": [{ "rounded-r": [i] }],
          "rounded-b": [{ "rounded-b": [i] }],
          "rounded-l": [{ "rounded-l": [i] }],
          "rounded-ss": [{ "rounded-ss": [i] }],
          "rounded-se": [{ "rounded-se": [i] }],
          "rounded-ee": [{ "rounded-ee": [i] }],
          "rounded-es": [{ "rounded-es": [i] }],
          "rounded-tl": [{ "rounded-tl": [i] }],
          "rounded-tr": [{ "rounded-tr": [i] }],
          "rounded-br": [{ "rounded-br": [i] }],
          "rounded-bl": [{ "rounded-bl": [i] }],
          "border-w": [{ border: [a] }],
          "border-w-x": [{ "border-x": [a] }],
          "border-w-y": [{ "border-y": [a] }],
          "border-w-s": [{ "border-s": [a] }],
          "border-w-e": [{ "border-e": [a] }],
          "border-w-t": [{ "border-t": [a] }],
          "border-w-r": [{ "border-r": [a] }],
          "border-w-b": [{ "border-b": [a] }],
          "border-w-l": [{ "border-l": [a] }],
          "border-opacity": [{ "border-opacity": [h] }],
          "border-style": [{ border: [...Q(), "hidden"] }],
          "divide-x": [{ "divide-x": [a] }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{ "divide-y": [a] }],
          "divide-y-reverse": ["divide-y-reverse"],
          "divide-opacity": [{ "divide-opacity": [h] }],
          "divide-style": [{ divide: Q() }],
          "border-color": [{ border: [o] }],
          "border-color-x": [{ "border-x": [o] }],
          "border-color-y": [{ "border-y": [o] }],
          "border-color-s": [{ "border-s": [o] }],
          "border-color-e": [{ "border-e": [o] }],
          "border-color-t": [{ "border-t": [o] }],
          "border-color-r": [{ "border-r": [o] }],
          "border-color-b": [{ "border-b": [o] }],
          "border-color-l": [{ "border-l": [o] }],
          "divide-color": [{ divide: [o] }],
          "outline-style": [{ outline: ["", ...Q()] }],
          "outline-offset": [{ "outline-offset": [un, J] }],
          "outline-w": [{ outline: [un, An] }],
          "outline-color": [{ outline: [e] }],
          "ring-w": [{ ring: U() }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{ ring: [e] }],
          "ring-opacity": [{ "ring-opacity": [h] }],
          "ring-offset-w": [{ "ring-offset": [un, An] }],
          "ring-offset-color": [{ "ring-offset": [e] }],
          shadow: [{ shadow: ["", "inner", "none", Nn, OE] }],
          "shadow-color": [{ shadow: [ti] }],
          opacity: [{ opacity: [h] }],
          "mix-blend": [
            { "mix-blend": [...K(), "plus-lighter", "plus-darker"] },
          ],
          "bg-blend": [{ "bg-blend": K() }],
          filter: [{ filter: ["", "none"] }],
          blur: [{ blur: [n] }],
          brightness: [{ brightness: [r] }],
          contrast: [{ contrast: [l] }],
          "drop-shadow": [{ "drop-shadow": ["", "none", Nn, J] }],
          grayscale: [{ grayscale: [u] }],
          "hue-rotate": [{ "hue-rotate": [c] }],
          invert: [{ invert: [f] }],
          saturate: [{ saturate: [v] }],
          sepia: [{ sepia: [E] }],
          "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
          "backdrop-blur": [{ "backdrop-blur": [n] }],
          "backdrop-brightness": [{ "backdrop-brightness": [r] }],
          "backdrop-contrast": [{ "backdrop-contrast": [l] }],
          "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
          "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
          "backdrop-invert": [{ "backdrop-invert": [f] }],
          "backdrop-opacity": [{ "backdrop-opacity": [h] }],
          "backdrop-saturate": [{ "backdrop-saturate": [v] }],
          "backdrop-sepia": [{ "backdrop-sepia": [E] }],
          "border-collapse": [{ border: ["collapse", "separate"] }],
          "border-spacing": [{ "border-spacing": [s] }],
          "border-spacing-x": [{ "border-spacing-x": [s] }],
          "border-spacing-y": [{ "border-spacing-y": [s] }],
          "table-layout": [{ table: ["auto", "fixed"] }],
          caption: [{ caption: ["top", "bottom"] }],
          transition: [
            {
              transition: [
                "none",
                "all",
                "",
                "colors",
                "opacity",
                "shadow",
                "transform",
                J,
              ],
            },
          ],
          duration: [{ duration: S() }],
          ease: [{ ease: ["linear", "in", "out", "in-out", J] }],
          delay: [{ delay: S() }],
          animate: [
            { animate: ["none", "spin", "ping", "pulse", "bounce", J] },
          ],
          transform: [{ transform: ["", "gpu", "none"] }],
          scale: [{ scale: [C] }],
          "scale-x": [{ "scale-x": [C] }],
          "scale-y": [{ "scale-y": [C] }],
          rotate: [{ rotate: [ei, J] }],
          "translate-x": [{ "translate-x": [b] }],
          "translate-y": [{ "translate-y": [b] }],
          "skew-x": [{ "skew-x": [T] }],
          "skew-y": [{ "skew-y": [T] }],
          "transform-origin": [
            {
              origin: [
                "center",
                "top",
                "top-right",
                "right",
                "bottom-right",
                "bottom",
                "bottom-left",
                "left",
                "top-left",
                J,
              ],
            },
          ],
          accent: [{ accent: ["auto", e] }],
          appearance: [{ appearance: ["none", "auto"] }],
          cursor: [
            {
              cursor: [
                "auto",
                "default",
                "pointer",
                "wait",
                "text",
                "move",
                "help",
                "not-allowed",
                "none",
                "context-menu",
                "progress",
                "cell",
                "crosshair",
                "vertical-text",
                "alias",
                "copy",
                "no-drop",
                "grab",
                "grabbing",
                "all-scroll",
                "col-resize",
                "row-resize",
                "n-resize",
                "e-resize",
                "s-resize",
                "w-resize",
                "ne-resize",
                "nw-resize",
                "se-resize",
                "sw-resize",
                "ew-resize",
                "ns-resize",
                "nesw-resize",
                "nwse-resize",
                "zoom-in",
                "zoom-out",
                J,
              ],
            },
          ],
          "caret-color": [{ caret: [e] }],
          "pointer-events": [{ "pointer-events": ["none", "auto"] }],
          resize: [{ resize: ["none", "y", "x", ""] }],
          "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
          "scroll-m": [{ "scroll-m": D() }],
          "scroll-mx": [{ "scroll-mx": D() }],
          "scroll-my": [{ "scroll-my": D() }],
          "scroll-ms": [{ "scroll-ms": D() }],
          "scroll-me": [{ "scroll-me": D() }],
          "scroll-mt": [{ "scroll-mt": D() }],
          "scroll-mr": [{ "scroll-mr": D() }],
          "scroll-mb": [{ "scroll-mb": D() }],
          "scroll-ml": [{ "scroll-ml": D() }],
          "scroll-p": [{ "scroll-p": D() }],
          "scroll-px": [{ "scroll-px": D() }],
          "scroll-py": [{ "scroll-py": D() }],
          "scroll-ps": [{ "scroll-ps": D() }],
          "scroll-pe": [{ "scroll-pe": D() }],
          "scroll-pt": [{ "scroll-pt": D() }],
          "scroll-pr": [{ "scroll-pr": D() }],
          "scroll-pb": [{ "scroll-pb": D() }],
          "scroll-pl": [{ "scroll-pl": D() }],
          "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
          "snap-stop": [{ snap: ["normal", "always"] }],
          "snap-type": [{ snap: ["none", "x", "y", "both"] }],
          "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
          touch: [{ touch: ["auto", "none", "manipulation"] }],
          "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
          "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
          "touch-pz": ["touch-pinch-zoom"],
          select: [{ select: ["none", "text", "all", "auto"] }],
          "will-change": [
            { "will-change": ["auto", "scroll", "contents", "transform", J] },
          ],
          fill: [{ fill: [e, "none"] }],
          "stroke-w": [{ stroke: [un, An, su] }],
          stroke: [{ stroke: [e, "none"] }],
          sr: ["sr-only", "not-sr-only"],
          "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: [
            "inset-x",
            "inset-y",
            "start",
            "end",
            "top",
            "right",
            "bottom",
            "left",
          ],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": [
            "fvn-ordinal",
            "fvn-slashed-zero",
            "fvn-figure",
            "fvn-spacing",
            "fvn-fraction",
          ],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: [
            "rounded-s",
            "rounded-e",
            "rounded-t",
            "rounded-r",
            "rounded-b",
            "rounded-l",
            "rounded-ss",
            "rounded-se",
            "rounded-ee",
            "rounded-es",
            "rounded-tl",
            "rounded-tr",
            "rounded-br",
            "rounded-bl",
          ],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": [
            "border-w-s",
            "border-w-e",
            "border-w-t",
            "border-w-r",
            "border-w-b",
            "border-w-l",
          ],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": [
            "border-color-s",
            "border-color-e",
            "border-color-t",
            "border-color-r",
            "border-color-b",
            "border-color-l",
          ],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": [
            "scroll-mx",
            "scroll-my",
            "scroll-ms",
            "scroll-me",
            "scroll-mt",
            "scroll-mr",
            "scroll-mb",
            "scroll-ml",
          ],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": [
            "scroll-px",
            "scroll-py",
            "scroll-ps",
            "scroll-pe",
            "scroll-pt",
            "scroll-pr",
            "scroll-pb",
            "scroll-pl",
          ],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"],
        },
        conflictingClassGroupModifiers: { "font-size": ["leading"] },
      };
    },
    VE = xE(FE);
  function Ir(...e) {
    return VE(Yv(e));
  }
  const BE = XC,
    r0 = x.forwardRef(({ className: e, ...t }, n) =>
      k.jsx($v, {
        ref: n,
        className: Ir(
          "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
          e
        ),
        ...t,
      })
    );
  r0.displayName = $v.displayName;
  const zE = qC(
      "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
      {
        variants: {
          variant: {
            default: "border bg-background text-foreground",
            destructive:
              "destructive group border-destructive bg-destructive text-destructive-foreground",
          },
        },
        defaultVariants: { variant: "default" },
      }
    ),
    o0 = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
      k.jsx(Uv, { ref: r, className: Ir(zE({ variant: t }), e), ...n })
    );
  o0.displayName = Uv.displayName;
  const $E = x.forwardRef(({ className: e, ...t }, n) =>
    k.jsx(Kv, {
      ref: n,
      className: Ir(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        e
      ),
      ...t,
    })
  );
  $E.displayName = Kv.displayName;
  const i0 = x.forwardRef(({ className: e, ...t }, n) =>
    k.jsx(Gv, {
      ref: n,
      className: Ir(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        e
      ),
      "toast-close": "",
      ...t,
      children: k.jsx(qv, { className: "h-4 w-4" }),
    })
  );
  i0.displayName = Gv.displayName;
  const s0 = x.forwardRef(({ className: e, ...t }, n) =>
    k.jsx(Wv, { ref: n, className: Ir("text-sm font-semibold", e), ...t })
  );
  s0.displayName = Wv.displayName;
  const a0 = x.forwardRef(({ className: e, ...t }, n) =>
    k.jsx(Hv, { ref: n, className: Ir("text-sm opacity-90", e), ...t })
  );
  a0.displayName = Hv.displayName;
  function UE() {
    const { toasts: e } = sC();
    return k.jsxs(BE, {
      children: [
        e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
          return k.jsxs(
            o0,
            {
              ...i,
              children: [
                k.jsxs("div", {
                  className: "grid gap-1",
                  children: [
                    n && k.jsx(s0, { children: n }),
                    r && k.jsx(a0, { children: r }),
                  ],
                }),
                o,
                k.jsx(i0, {}),
              ],
            },
            t
          );
        }),
        k.jsx(r0, {}),
      ],
    });
  }
  var ap = ["light", "dark"],
    WE = "(prefers-color-scheme: dark)",
    HE = x.createContext(void 0),
    KE = { setTheme: (e) => {}, themes: [] },
    GE = () => {
      var e;
      return (e = x.useContext(HE)) != null ? e : KE;
    };
  x.memo(
    ({
      forcedTheme: e,
      storageKey: t,
      attribute: n,
      enableSystem: r,
      enableColorScheme: o,
      defaultTheme: i,
      value: s,
      attrs: a,
      nonce: l,
    }) => {
      let u = i === "system",
        c =
          n === "class"
            ? `var d=document.documentElement,c=d.classList;${`c.remove(${a
                .map((y) => `'${y}'`)
                .join(",")})`};`
            : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        f = o
          ? ap.includes(i) && i
            ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
            : "if(e==='light'||e==='dark')d.style.colorScheme=e"
          : "",
        d = (y, g = !1, w = !0) => {
          let h = s ? s[y] : y,
            m = g ? y + "|| ''" : `'${h}'`,
            v = "";
          return (
            o &&
              w &&
              !g &&
              ap.includes(y) &&
              (v += `d.style.colorScheme = '${y}';`),
            n === "class"
              ? g || h
                ? (v += `c.add(${m})`)
                : (v += "null")
              : h && (v += `d[s](n,${m})`),
            v
          );
        },
        p = e
          ? `!function(){${c}${d(e)}}()`
          : r
          ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${WE}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d(
              "dark"
            )}}else{${d("light")}}}else if(e){${
              s ? `var x=${JSON.stringify(s)};` : ""
            }${d(s ? "x[e]" : "e", !0)}}${
              u ? "" : "else{" + d(i, !1, !1) + "}"
            }${f}}catch(e){}}()`
          : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${
              s ? `var x=${JSON.stringify(s)};` : ""
            }${d(s ? "x[e]" : "e", !0)}}else{${d(
              i,
              !1,
              !1
            )};}${f}}catch(t){}}();`;
      return x.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: { __html: p },
      });
    }
  );
  var QE = (e) => {
      switch (e) {
        case "success":
          return qE;
        case "info":
          return JE;
        case "warning":
          return ZE;
        case "error":
          return eP;
        default:
          return null;
      }
    },
    YE = Array(12).fill(0),
    XE = ({ visible: e }) =>
      V.createElement(
        "div",
        { className: "sonner-loading-wrapper", "data-visible": e },
        V.createElement(
          "div",
          { className: "sonner-spinner" },
          YE.map((t, n) =>
            V.createElement("div", {
              className: "sonner-loading-bar",
              key: `spinner-bar-${n}`,
            })
          )
        )
      ),
    qE = V.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      V.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd",
      })
    ),
    ZE = V.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      V.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd",
      })
    ),
    JE = V.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      V.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd",
      })
    ),
    eP = V.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      V.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd",
      })
    ),
    tP = () => {
      let [e, t] = V.useState(document.hidden);
      return (
        V.useEffect(() => {
          let n = () => {
            t(document.hidden);
          };
          return (
            document.addEventListener("visibilitychange", n),
            () => window.removeEventListener("visibilitychange", n)
          );
        }, []),
        e
      );
    },
    Sc = 1,
    nP = class {
      constructor() {
        (this.subscribe = (e) => (
          this.subscribers.push(e),
          () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1);
          }
        )),
          (this.publish = (e) => {
            this.subscribers.forEach((t) => t(e));
          }),
          (this.addToast = (e) => {
            this.publish(e), (this.toasts = [...this.toasts, e]);
          }),
          (this.create = (e) => {
            var t;
            let { message: n, ...r } = e,
              o =
                typeof (e == null ? void 0 : e.id) == "number" ||
                ((t = e.id) == null ? void 0 : t.length) > 0
                  ? e.id
                  : Sc++,
              i = this.toasts.find((a) => a.id === o),
              s = e.dismissible === void 0 ? !0 : e.dismissible;
            return (
              i
                ? (this.toasts = this.toasts.map((a) =>
                    a.id === o
                      ? (this.publish({ ...a, ...e, id: o, title: n }),
                        { ...a, ...e, id: o, dismissible: s, title: n })
                      : a
                  ))
                : this.addToast({ title: n, ...r, dismissible: s, id: o }),
              o
            );
          }),
          (this.dismiss = (e) => (
            e ||
              this.toasts.forEach((t) => {
                this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
              }),
            this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
            e
          )),
          (this.message = (e, t) => this.create({ ...t, message: e })),
          (this.error = (e, t) =>
            this.create({ ...t, message: e, type: "error" })),
          (this.success = (e, t) =>
            this.create({ ...t, type: "success", message: e })),
          (this.info = (e, t) =>
            this.create({ ...t, type: "info", message: e })),
          (this.warning = (e, t) =>
            this.create({ ...t, type: "warning", message: e })),
          (this.loading = (e, t) =>
            this.create({ ...t, type: "loading", message: e })),
          (this.promise = (e, t) => {
            if (!t) return;
            let n;
            t.loading !== void 0 &&
              (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description:
                  typeof t.description != "function" ? t.description : void 0,
              }));
            let r = e instanceof Promise ? e : e(),
              o = n !== void 0;
            return (
              r
                .then(async (i) => {
                  if (oP(i) && !i.ok) {
                    o = !1;
                    let s =
                        typeof t.error == "function"
                          ? await t.error(`HTTP error! status: ${i.status}`)
                          : t.error,
                      a =
                        typeof t.description == "function"
                          ? await t.description(
                              `HTTP error! status: ${i.status}`
                            )
                          : t.description;
                    this.create({
                      id: n,
                      type: "error",
                      message: s,
                      description: a,
                    });
                  } else if (t.success !== void 0) {
                    o = !1;
                    let s =
                        typeof t.success == "function"
                          ? await t.success(i)
                          : t.success,
                      a =
                        typeof t.description == "function"
                          ? await t.description(i)
                          : t.description;
                    this.create({
                      id: n,
                      type: "success",
                      message: s,
                      description: a,
                    });
                  }
                })
                .catch(async (i) => {
                  if (t.error !== void 0) {
                    o = !1;
                    let s =
                        typeof t.error == "function"
                          ? await t.error(i)
                          : t.error,
                      a =
                        typeof t.description == "function"
                          ? await t.description(i)
                          : t.description;
                    this.create({
                      id: n,
                      type: "error",
                      message: s,
                      description: a,
                    });
                  }
                })
                .finally(() => {
                  var i;
                  o && (this.dismiss(n), (n = void 0)),
                    (i = t.finally) == null || i.call(t);
                }),
              n
            );
          }),
          (this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Sc++;
            return this.create({ jsx: e(n), id: n, ...t }), n;
          }),
          (this.subscribers = []),
          (this.toasts = []);
      }
    },
    pt = new nP(),
    rP = (e, t) => {
      let n = (t == null ? void 0 : t.id) || Sc++;
      return pt.addToast({ title: e, ...t, id: n }), n;
    },
    oP = (e) =>
      e &&
      typeof e == "object" &&
      "ok" in e &&
      typeof e.ok == "boolean" &&
      "status" in e &&
      typeof e.status == "number",
    iP = rP,
    sP = () => pt.toasts;
  Object.assign(
    iP,
    {
      success: pt.success,
      info: pt.info,
      warning: pt.warning,
      error: pt.error,
      custom: pt.custom,
      message: pt.message,
      promise: pt.promise,
      dismiss: pt.dismiss,
      loading: pt.loading,
    },
    { getHistory: sP }
  );
  function aP(e, { insertAt: t } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
      r = document.createElement("style");
    (r.type = "text/css"),
      t === "top" && n.firstChild
        ? n.insertBefore(r, n.firstChild)
        : n.appendChild(r),
      r.styleSheet
        ? (r.styleSheet.cssText = e)
        : r.appendChild(document.createTextNode(e));
  }
  aP(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
  function Is(e) {
    return e.label !== void 0;
  }
  var lP = 3,
    uP = "32px",
    cP = 4e3,
    dP = 356,
    fP = 14,
    hP = 20,
    pP = 200;
  function mP(...e) {
    return e.filter(Boolean).join(" ");
  }
  var gP = (e) => {
    var t, n, r, o, i, s, a, l, u, c;
    let {
        invert: f,
        toast: d,
        unstyled: p,
        interacting: y,
        setHeights: g,
        visibleToasts: w,
        heights: h,
        index: m,
        toasts: v,
        expanded: C,
        removeToast: E,
        defaultRichColors: T,
        closeButton: M,
        style: b,
        cancelButtonStyle: j,
        actionButtonStyle: _,
        className: H = "",
        descriptionClassName: D = "",
        duration: U,
        position: O,
        gap: Y,
        loadingIcon: Q,
        expandByDefault: K,
        classNames: R,
        icons: I,
        closeButtonAriaLabel: P = "Close toast",
        pauseWhenPageIsHidden: S,
        cn: N,
      } = e,
      [F, $] = V.useState(!1),
      [G, B] = V.useState(!1),
      [W, q] = V.useState(!1),
      [re, ie] = V.useState(!1),
      [se, le] = V.useState(0),
      [he, te] = V.useState(0),
      Ne = V.useRef(null),
      Re = V.useRef(null),
      Xe = m === 0,
      ft = m + 1 <= w,
      pe = d.type,
      je = d.dismissible !== !1,
      kl = d.className || "",
      Ml = d.descriptionClassName || "",
      Fr = V.useMemo(
        () => h.findIndex((Z) => Z.toastId === d.id) || 0,
        [h, d.id]
      ),
      cs = V.useMemo(() => {
        var Z;
        return (Z = d.closeButton) != null ? Z : M;
      }, [d.closeButton, M]),
      ds = V.useMemo(() => d.duration || U || cP, [d.duration, U]),
      Vr = V.useRef(0),
      kn = V.useRef(0),
      fs = V.useRef(0),
      ln = V.useRef(null),
      [Wo, Ho] = O.split("-"),
      hs = V.useMemo(
        () => h.reduce((Z, me, ce) => (ce >= Fr ? Z : Z + me.height), 0),
        [h, Fr]
      ),
      ps = tP(),
      Px = d.invert || f,
      Rl = pe === "loading";
    (kn.current = V.useMemo(() => Fr * Y + hs, [Fr, hs])),
      V.useEffect(() => {
        $(!0);
      }, []),
      V.useLayoutEffect(() => {
        if (!F) return;
        let Z = Re.current,
          me = Z.style.height;
        Z.style.height = "auto";
        let ce = Z.getBoundingClientRect().height;
        (Z.style.height = me),
          te(ce),
          g((Kt) =>
            Kt.find((Gt) => Gt.toastId === d.id)
              ? Kt.map((Gt) =>
                  Gt.toastId === d.id ? { ...Gt, height: ce } : Gt
                )
              : [{ toastId: d.id, height: ce, position: d.position }, ...Kt]
          );
      }, [F, d.title, d.description, g, d.id]);
    let Mn = V.useCallback(() => {
      B(!0),
        le(kn.current),
        g((Z) => Z.filter((me) => me.toastId !== d.id)),
        setTimeout(() => {
          E(d);
        }, pP);
    }, [d, E, g, kn]);
    V.useEffect(() => {
      if (
        (d.promise && pe === "loading") ||
        d.duration === 1 / 0 ||
        d.type === "loading"
      )
        return;
      let Z,
        me = ds;
      return (
        C || y || (S && ps)
          ? (() => {
              if (fs.current < Vr.current) {
                let ce = new Date().getTime() - Vr.current;
                me = me - ce;
              }
              fs.current = new Date().getTime();
            })()
          : me !== 1 / 0 &&
            ((Vr.current = new Date().getTime()),
            (Z = setTimeout(() => {
              var ce;
              (ce = d.onAutoClose) == null || ce.call(d, d), Mn();
            }, me))),
        () => clearTimeout(Z)
      );
    }, [C, y, K, d, ds, Mn, d.promise, pe, S, ps]),
      V.useEffect(() => {
        let Z = Re.current;
        if (Z) {
          let me = Z.getBoundingClientRect().height;
          return (
            te(me),
            g((ce) => [
              { toastId: d.id, height: me, position: d.position },
              ...ce,
            ]),
            () => g((ce) => ce.filter((Kt) => Kt.toastId !== d.id))
          );
        }
      }, [g, d.id]),
      V.useEffect(() => {
        d.delete && Mn();
      }, [Mn, d.delete]);
    function Tx() {
      return I != null && I.loading
        ? V.createElement(
            "div",
            { className: "sonner-loader", "data-visible": pe === "loading" },
            I.loading
          )
        : Q
        ? V.createElement(
            "div",
            { className: "sonner-loader", "data-visible": pe === "loading" },
            Q
          )
        : V.createElement(XE, { visible: pe === "loading" });
    }
    return V.createElement(
      "li",
      {
        "aria-live": d.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: Re,
        className: N(
          H,
          kl,
          R == null ? void 0 : R.toast,
          (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast,
          R == null ? void 0 : R.default,
          R == null ? void 0 : R[pe],
          (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[pe]
        ),
        "data-sonner-toast": "",
        "data-rich-colors": (r = d.richColors) != null ? r : T,
        "data-styled": !(d.jsx || d.unstyled || p),
        "data-mounted": F,
        "data-promise": !!d.promise,
        "data-removed": G,
        "data-visible": ft,
        "data-y-position": Wo,
        "data-x-position": Ho,
        "data-index": m,
        "data-front": Xe,
        "data-swiping": W,
        "data-dismissible": je,
        "data-type": pe,
        "data-invert": Px,
        "data-swipe-out": re,
        "data-expanded": !!(C || (K && F)),
        style: {
          "--index": m,
          "--toasts-before": m,
          "--z-index": v.length - m,
          "--offset": `${G ? se : kn.current}px`,
          "--initial-height": K ? "auto" : `${he}px`,
          ...b,
          ...d.style,
        },
        onPointerDown: (Z) => {
          Rl ||
            !je ||
            ((Ne.current = new Date()),
            le(kn.current),
            Z.target.setPointerCapture(Z.pointerId),
            Z.target.tagName !== "BUTTON" &&
              (q(!0), (ln.current = { x: Z.clientX, y: Z.clientY })));
        },
        onPointerUp: () => {
          var Z, me, ce, Kt;
          if (re || !je) return;
          ln.current = null;
          let Gt = Number(
              ((Z = Re.current) == null
                ? void 0
                : Z.style
                    .getPropertyValue("--swipe-amount")
                    .replace("px", "")) || 0
            ),
            ms =
              new Date().getTime() -
              ((me = Ne.current) == null ? void 0 : me.getTime()),
            bx = Math.abs(Gt) / ms;
          if (Math.abs(Gt) >= hP || bx > 0.11) {
            le(kn.current),
              (ce = d.onDismiss) == null || ce.call(d, d),
              Mn(),
              ie(!0);
            return;
          }
          (Kt = Re.current) == null ||
            Kt.style.setProperty("--swipe-amount", "0px"),
            q(!1);
        },
        onPointerMove: (Z) => {
          var me;
          if (!ln.current || !je) return;
          let ce = Z.clientY - ln.current.y,
            Kt = Z.clientX - ln.current.x,
            Gt = (Wo === "top" ? Math.min : Math.max)(0, ce),
            ms = Z.pointerType === "touch" ? 10 : 2;
          Math.abs(Gt) > ms
            ? (me = Re.current) == null ||
              me.style.setProperty("--swipe-amount", `${ce}px`)
            : Math.abs(Kt) > ms && (ln.current = null);
        },
      },
      cs && !d.jsx
        ? V.createElement(
            "button",
            {
              "aria-label": P,
              "data-disabled": Rl,
              "data-close-button": !0,
              onClick:
                Rl || !je
                  ? () => {}
                  : () => {
                      var Z;
                      Mn(), (Z = d.onDismiss) == null || Z.call(d, d);
                    },
              className: N(
                R == null ? void 0 : R.closeButton,
                (o = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : o.closeButton
              ),
            },
            V.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "12",
                height: "12",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              },
              V.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              V.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
            )
          )
        : null,
      d.jsx || V.isValidElement(d.title)
        ? d.jsx || d.title
        : V.createElement(
            V.Fragment,
            null,
            pe || d.icon || d.promise
              ? V.createElement(
                  "div",
                  {
                    "data-icon": "",
                    className: N(
                      R == null ? void 0 : R.icon,
                      (i = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : i.icon
                    ),
                  },
                  d.promise || (d.type === "loading" && !d.icon)
                    ? d.icon || Tx()
                    : null,
                  d.type !== "loading"
                    ? d.icon || (I == null ? void 0 : I[pe]) || QE(pe)
                    : null
                )
              : null,
            V.createElement(
              "div",
              {
                "data-content": "",
                className: N(
                  R == null ? void 0 : R.content,
                  (s = d == null ? void 0 : d.classNames) == null
                    ? void 0
                    : s.content
                ),
              },
              V.createElement(
                "div",
                {
                  "data-title": "",
                  className: N(
                    R == null ? void 0 : R.title,
                    (a = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : a.title
                  ),
                },
                d.title
              ),
              d.description
                ? V.createElement(
                    "div",
                    {
                      "data-description": "",
                      className: N(
                        D,
                        Ml,
                        R == null ? void 0 : R.description,
                        (l = d == null ? void 0 : d.classNames) == null
                          ? void 0
                          : l.description
                      ),
                    },
                    d.description
                  )
                : null
            ),
            V.isValidElement(d.cancel)
              ? d.cancel
              : d.cancel && Is(d.cancel)
              ? V.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: d.cancelButtonStyle || j,
                    onClick: (Z) => {
                      var me, ce;
                      Is(d.cancel) &&
                        je &&
                        ((ce = (me = d.cancel).onClick) == null ||
                          ce.call(me, Z),
                        Mn());
                    },
                    className: N(
                      R == null ? void 0 : R.cancelButton,
                      (u = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : u.cancelButton
                    ),
                  },
                  d.cancel.label
                )
              : null,
            V.isValidElement(d.action)
              ? d.action
              : d.action && Is(d.action)
              ? V.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: d.actionButtonStyle || _,
                    onClick: (Z) => {
                      var me, ce;
                      Is(d.action) &&
                        (Z.defaultPrevented ||
                          ((ce = (me = d.action).onClick) == null ||
                            ce.call(me, Z),
                          Mn()));
                    },
                    className: N(
                      R == null ? void 0 : R.actionButton,
                      (c = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : c.actionButton
                    ),
                  },
                  d.action.label
                )
              : null
          )
    );
  };
  function lp() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e
      ? window.getComputedStyle(document.documentElement).direction
      : e;
  }
  var yP = (e) => {
    let {
        invert: t,
        position: n = "bottom-right",
        hotkey: r = ["altKey", "KeyT"],
        expand: o,
        closeButton: i,
        className: s,
        offset: a,
        theme: l = "light",
        richColors: u,
        duration: c,
        style: f,
        visibleToasts: d = lP,
        toastOptions: p,
        dir: y = lp(),
        gap: g = fP,
        loadingIcon: w,
        icons: h,
        containerAriaLabel: m = "Notifications",
        pauseWhenPageIsHidden: v,
        cn: C = mP,
      } = e,
      [E, T] = V.useState([]),
      M = V.useMemo(
        () =>
          Array.from(
            new Set(
              [n].concat(E.filter((S) => S.position).map((S) => S.position))
            )
          ),
        [E, n]
      ),
      [b, j] = V.useState([]),
      [_, H] = V.useState(!1),
      [D, U] = V.useState(!1),
      [O, Y] = V.useState(
        l !== "system"
          ? l
          : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      ),
      Q = V.useRef(null),
      K = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      R = V.useRef(null),
      I = V.useRef(!1),
      P = V.useCallback(
        (S) => {
          var N;
          ((N = E.find((F) => F.id === S.id)) != null && N.delete) ||
            pt.dismiss(S.id),
            T((F) => F.filter(({ id: $ }) => $ !== S.id));
        },
        [E]
      );
    return (
      V.useEffect(
        () =>
          pt.subscribe((S) => {
            if (S.dismiss) {
              T((N) =>
                N.map((F) => (F.id === S.id ? { ...F, delete: !0 } : F))
              );
              return;
            }
            setTimeout(() => {
              wv.flushSync(() => {
                T((N) => {
                  let F = N.findIndex(($) => $.id === S.id);
                  return F !== -1
                    ? [...N.slice(0, F), { ...N[F], ...S }, ...N.slice(F + 1)]
                    : [S, ...N];
                });
              });
            });
          }),
        []
      ),
      V.useEffect(() => {
        if (l !== "system") {
          Y(l);
          return;
        }
        l === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? Y("dark")
            : Y("light")),
          typeof window < "u" &&
            window
              .matchMedia("(prefers-color-scheme: dark)")
              .addEventListener("change", ({ matches: S }) => {
                Y(S ? "dark" : "light");
              });
      }, [l]),
      V.useEffect(() => {
        E.length <= 1 && H(!1);
      }, [E]),
      V.useEffect(() => {
        let S = (N) => {
          var F, $;
          r.every((G) => N[G] || N.code === G) &&
            (H(!0), (F = Q.current) == null || F.focus()),
            N.code === "Escape" &&
              (document.activeElement === Q.current ||
                (($ = Q.current) != null &&
                  $.contains(document.activeElement))) &&
              H(!1);
        };
        return (
          document.addEventListener("keydown", S),
          () => document.removeEventListener("keydown", S)
        );
      }, [r]),
      V.useEffect(() => {
        if (Q.current)
          return () => {
            R.current &&
              (R.current.focus({ preventScroll: !0 }),
              (R.current = null),
              (I.current = !1));
          };
      }, [Q.current]),
      E.length
        ? V.createElement(
            "section",
            { "aria-label": `${m} ${K}`, tabIndex: -1 },
            M.map((S, N) => {
              var F;
              let [$, G] = S.split("-");
              return V.createElement(
                "ol",
                {
                  key: S,
                  dir: y === "auto" ? lp() : y,
                  tabIndex: -1,
                  ref: Q,
                  className: s,
                  "data-sonner-toaster": !0,
                  "data-theme": O,
                  "data-y-position": $,
                  "data-x-position": G,
                  style: {
                    "--front-toast-height": `${
                      ((F = b[0]) == null ? void 0 : F.height) || 0
                    }px`,
                    "--offset": typeof a == "number" ? `${a}px` : a || uP,
                    "--width": `${dP}px`,
                    "--gap": `${g}px`,
                    ...f,
                  },
                  onBlur: (B) => {
                    I.current &&
                      !B.currentTarget.contains(B.relatedTarget) &&
                      ((I.current = !1),
                      R.current &&
                        (R.current.focus({ preventScroll: !0 }),
                        (R.current = null)));
                  },
                  onFocus: (B) => {
                    (B.target instanceof HTMLElement &&
                      B.target.dataset.dismissible === "false") ||
                      I.current ||
                      ((I.current = !0), (R.current = B.relatedTarget));
                  },
                  onMouseEnter: () => H(!0),
                  onMouseMove: () => H(!0),
                  onMouseLeave: () => {
                    D || H(!1);
                  },
                  onPointerDown: (B) => {
                    (B.target instanceof HTMLElement &&
                      B.target.dataset.dismissible === "false") ||
                      U(!0);
                  },
                  onPointerUp: () => U(!1),
                },
                E.filter(
                  (B) => (!B.position && N === 0) || B.position === S
                ).map((B, W) => {
                  var q, re;
                  return V.createElement(gP, {
                    key: B.id,
                    icons: h,
                    index: W,
                    toast: B,
                    defaultRichColors: u,
                    duration:
                      (q = p == null ? void 0 : p.duration) != null ? q : c,
                    className: p == null ? void 0 : p.className,
                    descriptionClassName:
                      p == null ? void 0 : p.descriptionClassName,
                    invert: t,
                    visibleToasts: d,
                    closeButton:
                      (re = p == null ? void 0 : p.closeButton) != null
                        ? re
                        : i,
                    interacting: D,
                    position: S,
                    style: p == null ? void 0 : p.style,
                    unstyled: p == null ? void 0 : p.unstyled,
                    classNames: p == null ? void 0 : p.classNames,
                    cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle,
                    actionButtonStyle: p == null ? void 0 : p.actionButtonStyle,
                    removeToast: P,
                    toasts: E.filter((ie) => ie.position == B.position),
                    heights: b.filter((ie) => ie.position == B.position),
                    setHeights: j,
                    expandByDefault: o,
                    gap: g,
                    loadingIcon: w,
                    expanded: _,
                    pauseWhenPageIsHidden: v,
                    cn: C,
                  });
                })
              );
            })
          )
        : null
    );
  };
  const vP = ({ ...e }) => {
      const { theme: t = "system" } = GE();
      return k.jsx(yP, {
        theme: t,
        className: "toaster group",
        toastOptions: {
          classNames: {
            toast:
              "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            description: "group-[.toast]:text-muted-foreground",
            actionButton:
              "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            cancelButton:
              "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          },
        },
        ...e,
      });
    },
    wP = ["top", "right", "bottom", "left"],
    nr = Math.min,
    gt = Math.max,
    La = Math.round,
    js = Math.floor,
    rr = (e) => ({ x: e, y: e }),
    xP = { left: "right", right: "left", bottom: "top", top: "bottom" },
    SP = { start: "end", end: "start" };
  function Cc(e, t, n) {
    return gt(e, nr(t, n));
  }
  function Cn(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function En(e) {
    return e.split("-")[0];
  }
  function Bo(e) {
    return e.split("-")[1];
  }
  function Yd(e) {
    return e === "x" ? "y" : "x";
  }
  function Xd(e) {
    return e === "y" ? "height" : "width";
  }
  function or(e) {
    return ["top", "bottom"].includes(En(e)) ? "y" : "x";
  }
  function qd(e) {
    return Yd(or(e));
  }
  function CP(e, t, n) {
    n === void 0 && (n = !1);
    const r = Bo(e),
      o = qd(e),
      i = Xd(o);
    let s =
      o === "x"
        ? r === (n ? "end" : "start")
          ? "right"
          : "left"
        : r === "start"
        ? "bottom"
        : "top";
    return t.reference[i] > t.floating[i] && (s = Oa(s)), [s, Oa(s)];
  }
  function EP(e) {
    const t = Oa(e);
    return [Ec(e), t, Ec(t)];
  }
  function Ec(e) {
    return e.replace(/start|end/g, (t) => SP[t]);
  }
  function PP(e, t, n) {
    const r = ["left", "right"],
      o = ["right", "left"],
      i = ["top", "bottom"],
      s = ["bottom", "top"];
    switch (e) {
      case "top":
      case "bottom":
        return n ? (t ? o : r) : t ? r : o;
      case "left":
      case "right":
        return t ? i : s;
      default:
        return [];
    }
  }
  function TP(e, t, n, r) {
    const o = Bo(e);
    let i = PP(En(e), n === "start", r);
    return (
      o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Ec)))), i
    );
  }
  function Oa(e) {
    return e.replace(/left|right|bottom|top/g, (t) => xP[t]);
  }
  function bP(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }
  function l0(e) {
    return typeof e != "number"
      ? bP(e)
      : { top: e, right: e, bottom: e, left: e };
  }
  function _a(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return {
      width: r,
      height: o,
      top: n,
      left: t,
      right: t + r,
      bottom: n + o,
      x: t,
      y: n,
    };
  }
  function up(e, t, n) {
    let { reference: r, floating: o } = e;
    const i = or(t),
      s = qd(t),
      a = Xd(s),
      l = En(t),
      u = i === "y",
      c = r.x + r.width / 2 - o.width / 2,
      f = r.y + r.height / 2 - o.height / 2,
      d = r[a] / 2 - o[a] / 2;
    let p;
    switch (l) {
      case "top":
        p = { x: c, y: r.y - o.height };
        break;
      case "bottom":
        p = { x: c, y: r.y + r.height };
        break;
      case "right":
        p = { x: r.x + r.width, y: f };
        break;
      case "left":
        p = { x: r.x - o.width, y: f };
        break;
      default:
        p = { x: r.x, y: r.y };
    }
    switch (Bo(t)) {
      case "start":
        p[s] -= d * (n && u ? -1 : 1);
        break;
      case "end":
        p[s] += d * (n && u ? -1 : 1);
        break;
    }
    return p;
  }
  const kP = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: s,
      } = n,
      a = i.filter(Boolean),
      l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
      { x: c, y: f } = up(u, r, l),
      d = r,
      p = {},
      y = 0;
    for (let g = 0; g < a.length; g++) {
      const { name: w, fn: h } = a[g],
        {
          x: m,
          y: v,
          data: C,
          reset: E,
        } = await h({
          x: c,
          y: f,
          initialPlacement: r,
          placement: d,
          strategy: o,
          middlewareData: p,
          rects: u,
          platform: s,
          elements: { reference: e, floating: t },
        });
      (c = m ?? c),
        (f = v ?? f),
        (p = { ...p, [w]: { ...p[w], ...C } }),
        E &&
          y <= 50 &&
          (y++,
          typeof E == "object" &&
            (E.placement && (d = E.placement),
            E.rects &&
              (u =
                E.rects === !0
                  ? await s.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: o,
                    })
                  : E.rects),
            ({ x: c, y: f } = up(u, d, l))),
          (g = -1));
    }
    return { x: c, y: f, placement: d, strategy: o, middlewareData: p };
  };
  async function Vi(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
      {
        boundary: u = "clippingAncestors",
        rootBoundary: c = "viewport",
        elementContext: f = "floating",
        altBoundary: d = !1,
        padding: p = 0,
      } = Cn(t, e),
      y = l0(p),
      w = a[d ? (f === "floating" ? "reference" : "floating") : f],
      h = _a(
        await i.getClippingRect({
          element:
            (n = await (i.isElement == null ? void 0 : i.isElement(w))) ==
              null || n
              ? w
              : w.contextElement ||
                (await (i.getDocumentElement == null
                  ? void 0
                  : i.getDocumentElement(a.floating))),
          boundary: u,
          rootBoundary: c,
          strategy: l,
        })
      ),
      m =
        f === "floating"
          ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
          : s.reference,
      v = await (i.getOffsetParent == null
        ? void 0
        : i.getOffsetParent(a.floating)),
      C = (await (i.isElement == null ? void 0 : i.isElement(v)))
        ? (await (i.getScale == null ? void 0 : i.getScale(v))) || {
            x: 1,
            y: 1,
          }
        : { x: 1, y: 1 },
      E = _a(
        i.convertOffsetParentRelativeRectToViewportRelativeRect
          ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: a,
              rect: m,
              offsetParent: v,
              strategy: l,
            })
          : m
      );
    return {
      top: (h.top - E.top + y.top) / C.y,
      bottom: (E.bottom - h.bottom + y.bottom) / C.y,
      left: (h.left - E.left + y.left) / C.x,
      right: (E.right - h.right + y.right) / C.x,
    };
  }
  const MP = (e) => ({
      name: "arrow",
      options: e,
      async fn(t) {
        const {
            x: n,
            y: r,
            placement: o,
            rects: i,
            platform: s,
            elements: a,
            middlewareData: l,
          } = t,
          { element: u, padding: c = 0 } = Cn(e, t) || {};
        if (u == null) return {};
        const f = l0(c),
          d = { x: n, y: r },
          p = qd(o),
          y = Xd(p),
          g = await s.getDimensions(u),
          w = p === "y",
          h = w ? "top" : "left",
          m = w ? "bottom" : "right",
          v = w ? "clientHeight" : "clientWidth",
          C = i.reference[y] + i.reference[p] - d[p] - i.floating[y],
          E = d[p] - i.reference[p],
          T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let M = T ? T[v] : 0;
        (!M || !(await (s.isElement == null ? void 0 : s.isElement(T)))) &&
          (M = a.floating[v] || i.floating[y]);
        const b = C / 2 - E / 2,
          j = M / 2 - g[y] / 2 - 1,
          _ = nr(f[h], j),
          H = nr(f[m], j),
          D = _,
          U = M - g[y] - H,
          O = M / 2 - g[y] / 2 + b,
          Y = Cc(D, O, U),
          Q =
            !l.arrow &&
            Bo(o) != null &&
            O !== Y &&
            i.reference[y] / 2 - (O < D ? _ : H) - g[y] / 2 < 0,
          K = Q ? (O < D ? O - D : O - U) : 0;
        return {
          [p]: d[p] + K,
          data: {
            [p]: Y,
            centerOffset: O - Y - K,
            ...(Q && { alignmentOffset: K }),
          },
          reset: Q,
        };
      },
    }),
    RP = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "flip",
          options: e,
          async fn(t) {
            var n, r;
            const {
                placement: o,
                middlewareData: i,
                rects: s,
                initialPlacement: a,
                platform: l,
                elements: u,
              } = t,
              {
                mainAxis: c = !0,
                crossAxis: f = !0,
                fallbackPlacements: d,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: y = "none",
                flipAlignment: g = !0,
                ...w
              } = Cn(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset) return {};
            const h = En(o),
              m = or(a),
              v = En(a) === a,
              C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
              E = d || (v || !g ? [Oa(a)] : EP(a)),
              T = y !== "none";
            !d && T && E.push(...TP(a, g, y, C));
            const M = [a, ...E],
              b = await Vi(t, w),
              j = [];
            let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if ((c && j.push(b[h]), f)) {
              const O = CP(o, s, C);
              j.push(b[O[0]], b[O[1]]);
            }
            if (
              ((_ = [..._, { placement: o, overflows: j }]),
              !j.every((O) => O <= 0))
            ) {
              var H, D;
              const O = (((H = i.flip) == null ? void 0 : H.index) || 0) + 1,
                Y = M[O];
              if (Y)
                return {
                  data: { index: O, overflows: _ },
                  reset: { placement: Y },
                };
              let Q =
                (D = _.filter((K) => K.overflows[0] <= 0).sort(
                  (K, R) => K.overflows[1] - R.overflows[1]
                )[0]) == null
                  ? void 0
                  : D.placement;
              if (!Q)
                switch (p) {
                  case "bestFit": {
                    var U;
                    const K =
                      (U = _.filter((R) => {
                        if (T) {
                          const I = or(R.placement);
                          return I === m || I === "y";
                        }
                        return !0;
                      })
                        .map((R) => [
                          R.placement,
                          R.overflows
                            .filter((I) => I > 0)
                            .reduce((I, P) => I + P, 0),
                        ])
                        .sort((R, I) => R[1] - I[1])[0]) == null
                        ? void 0
                        : U[0];
                    K && (Q = K);
                    break;
                  }
                  case "initialPlacement":
                    Q = a;
                    break;
                }
              if (o !== Q) return { reset: { placement: Q } };
            }
            return {};
          },
        }
      );
    };
  function cp(e, t) {
    return {
      top: e.top - t.height,
      right: e.right - t.width,
      bottom: e.bottom - t.height,
      left: e.left - t.width,
    };
  }
  function dp(e) {
    return wP.some((t) => e[t] >= 0);
  }
  const AP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = Cn(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await Vi(t, { ...o, elementContext: "reference" }),
                s = cp(i, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: dp(s) },
              };
            }
            case "escaped": {
              const i = await Vi(t, { ...o, altBoundary: !0 }),
                s = cp(i, n.floating);
              return { data: { escapedOffsets: s, escaped: dp(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  };
  async function NP(e, t) {
    const { placement: n, platform: r, elements: o } = e,
      i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
      s = En(n),
      a = Bo(n),
      l = or(n) === "y",
      u = ["left", "top"].includes(s) ? -1 : 1,
      c = i && l ? -1 : 1,
      f = Cn(t, e);
    let {
      mainAxis: d,
      crossAxis: p,
      alignmentAxis: y,
    } = typeof f == "number"
      ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: f.mainAxis || 0,
          crossAxis: f.crossAxis || 0,
          alignmentAxis: f.alignmentAxis,
        };
    return (
      a && typeof y == "number" && (p = a === "end" ? y * -1 : y),
      l ? { x: p * c, y: d * u } : { x: d * u, y: p * c }
    );
  }
  const DP = function (e) {
      return (
        e === void 0 && (e = 0),
        {
          name: "offset",
          options: e,
          async fn(t) {
            var n, r;
            const { x: o, y: i, placement: s, middlewareData: a } = t,
              l = await NP(t, e);
            return s === ((n = a.offset) == null ? void 0 : n.placement) &&
              (r = a.arrow) != null &&
              r.alignmentOffset
              ? {}
              : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } };
          },
        }
      );
    },
    LP = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: n, y: r, placement: o } = t,
              {
                mainAxis: i = !0,
                crossAxis: s = !1,
                limiter: a = {
                  fn: (w) => {
                    let { x: h, y: m } = w;
                    return { x: h, y: m };
                  },
                },
                ...l
              } = Cn(e, t),
              u = { x: n, y: r },
              c = await Vi(t, l),
              f = or(En(o)),
              d = Yd(f);
            let p = u[d],
              y = u[f];
            if (i) {
              const w = d === "y" ? "top" : "left",
                h = d === "y" ? "bottom" : "right",
                m = p + c[w],
                v = p - c[h];
              p = Cc(m, p, v);
            }
            if (s) {
              const w = f === "y" ? "top" : "left",
                h = f === "y" ? "bottom" : "right",
                m = y + c[w],
                v = y - c[h];
              y = Cc(m, y, v);
            }
            const g = a.fn({ ...t, [d]: p, [f]: y });
            return {
              ...g,
              data: { x: g.x - n, y: g.y - r, enabled: { [d]: i, [f]: s } },
            };
          },
        }
      );
    },
    OP = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          options: e,
          fn(t) {
            const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
              { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = Cn(e, t),
              c = { x: n, y: r },
              f = or(o),
              d = Yd(f);
            let p = c[d],
              y = c[f];
            const g = Cn(a, t),
              w =
                typeof g == "number"
                  ? { mainAxis: g, crossAxis: 0 }
                  : { mainAxis: 0, crossAxis: 0, ...g };
            if (l) {
              const v = d === "y" ? "height" : "width",
                C = i.reference[d] - i.floating[v] + w.mainAxis,
                E = i.reference[d] + i.reference[v] - w.mainAxis;
              p < C ? (p = C) : p > E && (p = E);
            }
            if (u) {
              var h, m;
              const v = d === "y" ? "width" : "height",
                C = ["top", "left"].includes(En(o)),
                E =
                  i.reference[f] -
                  i.floating[v] +
                  ((C && ((h = s.offset) == null ? void 0 : h[f])) || 0) +
                  (C ? 0 : w.crossAxis),
                T =
                  i.reference[f] +
                  i.reference[v] +
                  (C ? 0 : ((m = s.offset) == null ? void 0 : m[f]) || 0) -
                  (C ? w.crossAxis : 0);
              y < E ? (y = E) : y > T && (y = T);
            }
            return { [d]: p, [f]: y };
          },
        }
      );
    },
    _P = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "size",
          options: e,
          async fn(t) {
            var n, r;
            const { placement: o, rects: i, platform: s, elements: a } = t,
              { apply: l = () => {}, ...u } = Cn(e, t),
              c = await Vi(t, u),
              f = En(o),
              d = Bo(o),
              p = or(o) === "y",
              { width: y, height: g } = i.floating;
            let w, h;
            f === "top" || f === "bottom"
              ? ((w = f),
                (h =
                  d ===
                  ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                    ? "start"
                    : "end")
                    ? "left"
                    : "right"))
              : ((h = f), (w = d === "end" ? "top" : "bottom"));
            const m = g - c.top - c.bottom,
              v = y - c.left - c.right,
              C = nr(g - c[w], m),
              E = nr(y - c[h], v),
              T = !t.middlewareData.shift;
            let M = C,
              b = E;
            if (
              ((n = t.middlewareData.shift) != null && n.enabled.x && (b = v),
              (r = t.middlewareData.shift) != null && r.enabled.y && (M = m),
              T && !d)
            ) {
              const _ = gt(c.left, 0),
                H = gt(c.right, 0),
                D = gt(c.top, 0),
                U = gt(c.bottom, 0);
              p
                ? (b =
                    y - 2 * (_ !== 0 || H !== 0 ? _ + H : gt(c.left, c.right)))
                : (M =
                    g - 2 * (D !== 0 || U !== 0 ? D + U : gt(c.top, c.bottom)));
            }
            await l({ ...t, availableWidth: b, availableHeight: M });
            const j = await s.getDimensions(a.floating);
            return y !== j.width || g !== j.height
              ? { reset: { rects: !0 } }
              : {};
          },
        }
      );
    };
  function fl() {
    return typeof window < "u";
  }
  function zo(e) {
    return u0(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function wt(e) {
    var t;
    return (
      (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
      window
    );
  }
  function an(e) {
    var t;
    return (t = (u0(e) ? e.ownerDocument : e.document) || window.document) ==
      null
      ? void 0
      : t.documentElement;
  }
  function u0(e) {
    return fl() ? e instanceof Node || e instanceof wt(e).Node : !1;
  }
  function Wt(e) {
    return fl() ? e instanceof Element || e instanceof wt(e).Element : !1;
  }
  function sn(e) {
    return fl()
      ? e instanceof HTMLElement || e instanceof wt(e).HTMLElement
      : !1;
  }
  function fp(e) {
    return !fl() || typeof ShadowRoot > "u"
      ? !1
      : e instanceof ShadowRoot || e instanceof wt(e).ShadowRoot;
  }
  function os(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = Ht(e);
    return (
      /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
      !["inline", "contents"].includes(o)
    );
  }
  function IP(e) {
    return ["table", "td", "th"].includes(zo(e));
  }
  function hl(e) {
    return [":popover-open", ":modal"].some((t) => {
      try {
        return e.matches(t);
      } catch {
        return !1;
      }
    });
  }
  function Zd(e) {
    const t = Jd(),
      n = Wt(e) ? Ht(e) : e;
    return (
      n.transform !== "none" ||
      n.perspective !== "none" ||
      (n.containerType ? n.containerType !== "normal" : !1) ||
      (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
      (!t && (n.filter ? n.filter !== "none" : !1)) ||
      ["transform", "perspective", "filter"].some((r) =>
        (n.willChange || "").includes(r)
      ) ||
      ["paint", "layout", "strict", "content"].some((r) =>
        (n.contain || "").includes(r)
      )
    );
  }
  function jP(e) {
    let t = ir(e);
    for (; sn(t) && !No(t); ) {
      if (Zd(t)) return t;
      if (hl(t)) return null;
      t = ir(t);
    }
    return null;
  }
  function Jd() {
    return typeof CSS > "u" || !CSS.supports
      ? !1
      : CSS.supports("-webkit-backdrop-filter", "none");
  }
  function No(e) {
    return ["html", "body", "#document"].includes(zo(e));
  }
  function Ht(e) {
    return wt(e).getComputedStyle(e);
  }
  function pl(e) {
    return Wt(e)
      ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
      : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
  }
  function ir(e) {
    if (zo(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (fp(e) && e.host) || an(e);
    return fp(t) ? t.host : t;
  }
  function c0(e) {
    const t = ir(e);
    return No(t)
      ? e.ownerDocument
        ? e.ownerDocument.body
        : e.body
      : sn(t) && os(t)
      ? t
      : c0(t);
  }
  function Bi(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = c0(e),
      i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
      s = wt(o);
    if (i) {
      const a = Pc(s);
      return t.concat(
        s,
        s.visualViewport || [],
        os(o) ? o : [],
        a && n ? Bi(a) : []
      );
    }
    return t.concat(o, Bi(o, [], n));
  }
  function Pc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
  }
  function d0(e) {
    const t = Ht(e);
    let n = parseFloat(t.width) || 0,
      r = parseFloat(t.height) || 0;
    const o = sn(e),
      i = o ? e.offsetWidth : n,
      s = o ? e.offsetHeight : r,
      a = La(n) !== i || La(r) !== s;
    return a && ((n = i), (r = s)), { width: n, height: r, $: a };
  }
  function ef(e) {
    return Wt(e) ? e : e.contextElement;
  }
  function ho(e) {
    const t = ef(e);
    if (!sn(t)) return rr(1);
    const n = t.getBoundingClientRect(),
      { width: r, height: o, $: i } = d0(t);
    let s = (i ? La(n.width) : n.width) / r,
      a = (i ? La(n.height) : n.height) / o;
    return (
      (!s || !Number.isFinite(s)) && (s = 1),
      (!a || !Number.isFinite(a)) && (a = 1),
      { x: s, y: a }
    );
  }
  const FP = rr(0);
  function f0(e) {
    const t = wt(e);
    return !Jd() || !t.visualViewport
      ? FP
      : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
  }
  function VP(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== wt(e)) ? !1 : t;
  }
  function Lr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
      i = ef(e);
    let s = rr(1);
    t && (r ? Wt(r) && (s = ho(r)) : (s = ho(e)));
    const a = VP(i, n, r) ? f0(i) : rr(0);
    let l = (o.left + a.x) / s.x,
      u = (o.top + a.y) / s.y,
      c = o.width / s.x,
      f = o.height / s.y;
    if (i) {
      const d = wt(i),
        p = r && Wt(r) ? wt(r) : r;
      let y = d,
        g = Pc(y);
      for (; g && r && p !== y; ) {
        const w = ho(g),
          h = g.getBoundingClientRect(),
          m = Ht(g),
          v = h.left + (g.clientLeft + parseFloat(m.paddingLeft)) * w.x,
          C = h.top + (g.clientTop + parseFloat(m.paddingTop)) * w.y;
        (l *= w.x),
          (u *= w.y),
          (c *= w.x),
          (f *= w.y),
          (l += v),
          (u += C),
          (y = wt(g)),
          (g = Pc(y));
      }
    }
    return _a({ width: c, height: f, x: l, y: u });
  }
  function BP(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const i = o === "fixed",
      s = an(r),
      a = t ? hl(t.floating) : !1;
    if (r === s || (a && i)) return n;
    let l = { scrollLeft: 0, scrollTop: 0 },
      u = rr(1);
    const c = rr(0),
      f = sn(r);
    if (
      (f || (!f && !i)) &&
      ((zo(r) !== "body" || os(s)) && (l = pl(r)), sn(r))
    ) {
      const d = Lr(r);
      (u = ho(r)), (c.x = d.x + r.clientLeft), (c.y = d.y + r.clientTop);
    }
    return {
      width: n.width * u.x,
      height: n.height * u.y,
      x: n.x * u.x - l.scrollLeft * u.x + c.x,
      y: n.y * u.y - l.scrollTop * u.y + c.y,
    };
  }
  function zP(e) {
    return Array.from(e.getClientRects());
  }
  function Tc(e, t) {
    const n = pl(e).scrollLeft;
    return t ? t.left + n : Lr(an(e)).left + n;
  }
  function $P(e) {
    const t = an(e),
      n = pl(e),
      r = e.ownerDocument.body,
      o = gt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
      i = gt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Tc(e);
    const a = -n.scrollTop;
    return (
      Ht(r).direction === "rtl" && (s += gt(t.clientWidth, r.clientWidth) - o),
      { width: o, height: i, x: s, y: a }
    );
  }
  function UP(e, t) {
    const n = wt(e),
      r = an(e),
      o = n.visualViewport;
    let i = r.clientWidth,
      s = r.clientHeight,
      a = 0,
      l = 0;
    if (o) {
      (i = o.width), (s = o.height);
      const u = Jd();
      (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
    }
    return { width: i, height: s, x: a, y: l };
  }
  function WP(e, t) {
    const n = Lr(e, !0, t === "fixed"),
      r = n.top + e.clientTop,
      o = n.left + e.clientLeft,
      i = sn(e) ? ho(e) : rr(1),
      s = e.clientWidth * i.x,
      a = e.clientHeight * i.y,
      l = o * i.x,
      u = r * i.y;
    return { width: s, height: a, x: l, y: u };
  }
  function hp(e, t, n) {
    let r;
    if (t === "viewport") r = UP(e, n);
    else if (t === "document") r = $P(an(e));
    else if (Wt(t)) r = WP(t, n);
    else {
      const o = f0(e);
      r = { ...t, x: t.x - o.x, y: t.y - o.y };
    }
    return _a(r);
  }
  function h0(e, t) {
    const n = ir(e);
    return n === t || !Wt(n) || No(n)
      ? !1
      : Ht(n).position === "fixed" || h0(n, t);
  }
  function HP(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Bi(e, [], !1).filter((a) => Wt(a) && zo(a) !== "body"),
      o = null;
    const i = Ht(e).position === "fixed";
    let s = i ? ir(e) : e;
    for (; Wt(s) && !No(s); ) {
      const a = Ht(s),
        l = Zd(s);
      !l && a.position === "fixed" && (o = null),
        (
          i
            ? !l && !o
            : (!l &&
                a.position === "static" &&
                !!o &&
                ["absolute", "fixed"].includes(o.position)) ||
              (os(s) && !l && h0(e, s))
        )
          ? (r = r.filter((c) => c !== s))
          : (o = a),
        (s = ir(s));
    }
    return t.set(e, r), r;
  }
  function KP(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const s = [
        ...(n === "clippingAncestors"
          ? hl(t)
            ? []
            : HP(t, this._c)
          : [].concat(n)),
        r,
      ],
      a = s[0],
      l = s.reduce((u, c) => {
        const f = hp(t, c, o);
        return (
          (u.top = gt(f.top, u.top)),
          (u.right = nr(f.right, u.right)),
          (u.bottom = nr(f.bottom, u.bottom)),
          (u.left = gt(f.left, u.left)),
          u
        );
      }, hp(t, a, o));
    return {
      width: l.right - l.left,
      height: l.bottom - l.top,
      x: l.left,
      y: l.top,
    };
  }
  function GP(e) {
    const { width: t, height: n } = d0(e);
    return { width: t, height: n };
  }
  function QP(e, t, n) {
    const r = sn(t),
      o = an(t),
      i = n === "fixed",
      s = Lr(e, !0, i, t);
    let a = { scrollLeft: 0, scrollTop: 0 };
    const l = rr(0);
    if (r || (!r && !i))
      if (((zo(t) !== "body" || os(o)) && (a = pl(t)), r)) {
        const p = Lr(t, !0, i, t);
        (l.x = p.x + t.clientLeft), (l.y = p.y + t.clientTop);
      } else o && (l.x = Tc(o));
    let u = 0,
      c = 0;
    if (o && !r && !i) {
      const p = o.getBoundingClientRect();
      (c = p.top + a.scrollTop), (u = p.left + a.scrollLeft - Tc(o, p));
    }
    const f = s.left + a.scrollLeft - l.x - u,
      d = s.top + a.scrollTop - l.y - c;
    return { x: f, y: d, width: s.width, height: s.height };
  }
  function au(e) {
    return Ht(e).position === "static";
  }
  function pp(e, t) {
    if (!sn(e) || Ht(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return an(e) === n && (n = n.ownerDocument.body), n;
  }
  function p0(e, t) {
    const n = wt(e);
    if (hl(e)) return n;
    if (!sn(e)) {
      let o = ir(e);
      for (; o && !No(o); ) {
        if (Wt(o) && !au(o)) return o;
        o = ir(o);
      }
      return n;
    }
    let r = pp(e, t);
    for (; r && IP(r) && au(r); ) r = pp(r, t);
    return r && No(r) && au(r) && !Zd(r) ? n : r || jP(e) || n;
  }
  const YP = async function (e) {
    const t = this.getOffsetParent || p0,
      n = this.getDimensions,
      r = await n(e.floating);
    return {
      reference: QP(e.reference, await t(e.floating), e.strategy),
      floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
  };
  function XP(e) {
    return Ht(e).direction === "rtl";
  }
  const qP = {
    convertOffsetParentRelativeRectToViewportRelativeRect: BP,
    getDocumentElement: an,
    getClippingRect: KP,
    getOffsetParent: p0,
    getElementRects: YP,
    getClientRects: zP,
    getDimensions: GP,
    getScale: ho,
    isElement: Wt,
    isRTL: XP,
  };
  function ZP(e, t) {
    let n = null,
      r;
    const o = an(e);
    function i() {
      var a;
      clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
    }
    function s(a, l) {
      a === void 0 && (a = !1), l === void 0 && (l = 1), i();
      const {
        left: u,
        top: c,
        width: f,
        height: d,
      } = e.getBoundingClientRect();
      if ((a || t(), !f || !d)) return;
      const p = js(c),
        y = js(o.clientWidth - (u + f)),
        g = js(o.clientHeight - (c + d)),
        w = js(u),
        m = {
          rootMargin: -p + "px " + -y + "px " + -g + "px " + -w + "px",
          threshold: gt(0, nr(1, l)) || 1,
        };
      let v = !0;
      function C(E) {
        const T = E[0].intersectionRatio;
        if (T !== l) {
          if (!v) return s();
          T
            ? s(!1, T)
            : (r = setTimeout(() => {
                s(!1, 1e-7);
              }, 1e3));
        }
        v = !1;
      }
      try {
        n = new IntersectionObserver(C, { ...m, root: o.ownerDocument });
      } catch {
        n = new IntersectionObserver(C, m);
      }
      n.observe(e);
    }
    return s(!0), i;
  }
  function JP(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: a = typeof IntersectionObserver == "function",
        animationFrame: l = !1,
      } = r,
      u = ef(e),
      c = o || i ? [...(u ? Bi(u) : []), ...Bi(t)] : [];
    c.forEach((h) => {
      o && h.addEventListener("scroll", n, { passive: !0 }),
        i && h.addEventListener("resize", n);
    });
    const f = u && a ? ZP(u, n) : null;
    let d = -1,
      p = null;
    s &&
      ((p = new ResizeObserver((h) => {
        let [m] = h;
        m &&
          m.target === u &&
          p &&
          (p.unobserve(t),
          cancelAnimationFrame(d),
          (d = requestAnimationFrame(() => {
            var v;
            (v = p) == null || v.observe(t);
          }))),
          n();
      })),
      u && !l && p.observe(u),
      p.observe(t));
    let y,
      g = l ? Lr(e) : null;
    l && w();
    function w() {
      const h = Lr(e);
      g &&
        (h.x !== g.x ||
          h.y !== g.y ||
          h.width !== g.width ||
          h.height !== g.height) &&
        n(),
        (g = h),
        (y = requestAnimationFrame(w));
    }
    return (
      n(),
      () => {
        var h;
        c.forEach((m) => {
          o && m.removeEventListener("scroll", n),
            i && m.removeEventListener("resize", n);
        }),
          f == null || f(),
          (h = p) == null || h.disconnect(),
          (p = null),
          l && cancelAnimationFrame(y);
      }
    );
  }
  const eT = DP,
    tT = LP,
    nT = RP,
    rT = _P,
    oT = AP,
    mp = MP,
    iT = OP,
    sT = (e, t, n) => {
      const r = new Map(),
        o = { platform: qP, ...n },
        i = { ...o.platform, _c: r };
      return kP(e, t, { ...o, platform: i });
    };
  var oa = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
  function Ia(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
      if (Array.isArray(e)) {
        if (((n = e.length), n !== t.length)) return !1;
        for (r = n; r-- !== 0; ) if (!Ia(e[r], t[r])) return !1;
        return !0;
      }
      if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
        return !1;
      for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
      for (r = n; r-- !== 0; ) {
        const i = o[r];
        if (!(i === "_owner" && e.$$typeof) && !Ia(e[i], t[i])) return !1;
      }
      return !0;
    }
    return e !== e && t !== t;
  }
  function m0(e) {
    return typeof window > "u"
      ? 1
      : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function gp(e, t) {
    const n = m0(e);
    return Math.round(t * n) / n;
  }
  function lu(e) {
    const t = x.useRef(e);
    return (
      oa(() => {
        t.current = e;
      }),
      t
    );
  }
  function aT(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: { reference: i, floating: s } = {},
        transform: a = !0,
        whileElementsMounted: l,
        open: u,
      } = e,
      [c, f] = x.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1,
      }),
      [d, p] = x.useState(r);
    Ia(d, r) || p(r);
    const [y, g] = x.useState(null),
      [w, h] = x.useState(null),
      m = x.useCallback((R) => {
        R !== T.current && ((T.current = R), g(R));
      }, []),
      v = x.useCallback((R) => {
        R !== M.current && ((M.current = R), h(R));
      }, []),
      C = i || y,
      E = s || w,
      T = x.useRef(null),
      M = x.useRef(null),
      b = x.useRef(c),
      j = l != null,
      _ = lu(l),
      H = lu(o),
      D = lu(u),
      U = x.useCallback(() => {
        if (!T.current || !M.current) return;
        const R = { placement: t, strategy: n, middleware: d };
        H.current && (R.platform = H.current),
          sT(T.current, M.current, R).then((I) => {
            const P = { ...I, isPositioned: D.current !== !1 };
            O.current &&
              !Ia(b.current, P) &&
              ((b.current = P),
              rs.flushSync(() => {
                f(P);
              }));
          });
      }, [d, t, n, H, D]);
    oa(() => {
      u === !1 &&
        b.current.isPositioned &&
        ((b.current.isPositioned = !1), f((R) => ({ ...R, isPositioned: !1 })));
    }, [u]);
    const O = x.useRef(!1);
    oa(
      () => (
        (O.current = !0),
        () => {
          O.current = !1;
        }
      ),
      []
    ),
      oa(() => {
        if ((C && (T.current = C), E && (M.current = E), C && E)) {
          if (_.current) return _.current(C, E, U);
          U();
        }
      }, [C, E, U, _, j]);
    const Y = x.useMemo(
        () => ({ reference: T, floating: M, setReference: m, setFloating: v }),
        [m, v]
      ),
      Q = x.useMemo(() => ({ reference: C, floating: E }), [C, E]),
      K = x.useMemo(() => {
        const R = { position: n, left: 0, top: 0 };
        if (!Q.floating) return R;
        const I = gp(Q.floating, c.x),
          P = gp(Q.floating, c.y);
        return a
          ? {
              ...R,
              transform: "translate(" + I + "px, " + P + "px)",
              ...(m0(Q.floating) >= 1.5 && { willChange: "transform" }),
            }
          : { position: n, left: I, top: P };
      }, [n, a, Q.floating, c.x, c.y]);
    return x.useMemo(
      () => ({ ...c, update: U, refs: Y, elements: Q, floatingStyles: K }),
      [c, U, Y, Q, K]
    );
  }
  const lT = (e) => {
      function t(n) {
        return {}.hasOwnProperty.call(n, "current");
      }
      return {
        name: "arrow",
        options: e,
        fn(n) {
          const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
          return r && t(r)
            ? r.current != null
              ? mp({ element: r.current, padding: o }).fn(n)
              : {}
            : r
            ? mp({ element: r, padding: o }).fn(n)
            : {};
        },
      };
    },
    uT = (e, t) => ({ ...eT(e), options: [e, t] }),
    cT = (e, t) => ({ ...tT(e), options: [e, t] }),
    dT = (e, t) => ({ ...iT(e), options: [e, t] }),
    fT = (e, t) => ({ ...nT(e), options: [e, t] }),
    hT = (e, t) => ({ ...rT(e), options: [e, t] }),
    pT = (e, t) => ({ ...oT(e), options: [e, t] }),
    mT = (e, t) => ({ ...lT(e), options: [e, t] });
  var gT = "Arrow",
    g0 = x.forwardRef((e, t) => {
      const { children: n, width: r = 10, height: o = 5, ...i } = e;
      return k.jsx(dt.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild
          ? n
          : k.jsx("polygon", { points: "0,0 30,0 15,10" }),
      });
    });
  g0.displayName = gT;
  var yT = g0;
  function vT(e, t = []) {
    let n = [];
    function r(i, s) {
      const a = x.createContext(s),
        l = n.length;
      n = [...n, s];
      function u(f) {
        const { scope: d, children: p, ...y } = f,
          g = (d == null ? void 0 : d[e][l]) || a,
          w = x.useMemo(() => y, Object.values(y));
        return k.jsx(g.Provider, { value: w, children: p });
      }
      function c(f, d) {
        const p = (d == null ? void 0 : d[e][l]) || a,
          y = x.useContext(p);
        if (y) return y;
        if (s !== void 0) return s;
        throw new Error(`\`${f}\` must be used within \`${i}\``);
      }
      return (u.displayName = i + "Provider"), [u, c];
    }
    const o = () => {
      const i = n.map((s) => x.createContext(s));
      return function (a) {
        const l = (a == null ? void 0 : a[e]) || i;
        return x.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
      };
    };
    return (o.scopeName = e), [r, wT(o, ...t)];
  }
  function wT(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
      const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
      return function (i) {
        const s = r.reduce((a, { useScope: l, scopeName: u }) => {
          const f = l(i)[`__scope${u}`];
          return { ...a, ...f };
        }, {});
        return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
      };
    };
    return (n.scopeName = t.scopeName), n;
  }
  function xT(e) {
    const [t, n] = x.useState(void 0);
    return (
      Dr(() => {
        if (e) {
          n({ width: e.offsetWidth, height: e.offsetHeight });
          const r = new ResizeObserver((o) => {
            if (!Array.isArray(o) || !o.length) return;
            const i = o[0];
            let s, a;
            if ("borderBoxSize" in i) {
              const l = i.borderBoxSize,
                u = Array.isArray(l) ? l[0] : l;
              (s = u.inlineSize), (a = u.blockSize);
            } else (s = e.offsetWidth), (a = e.offsetHeight);
            n({ width: s, height: a });
          });
          return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
        } else n(void 0);
      }, [e]),
      t
    );
  }
  var y0 = "Popper",
    [v0, w0] = vT(y0),
    [OA, x0] = v0(y0),
    S0 = "PopperAnchor",
    C0 = x.forwardRef((e, t) => {
      const { __scopePopper: n, virtualRef: r, ...o } = e,
        i = x0(S0, n),
        s = x.useRef(null),
        a = Ut(t, s);
      return (
        x.useEffect(() => {
          i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
        }),
        r ? null : k.jsx(dt.div, { ...o, ref: a })
      );
    });
  C0.displayName = S0;
  var tf = "PopperContent",
    [ST, CT] = v0(tf),
    E0 = x.forwardRef((e, t) => {
      var W, q, re, ie, se, le;
      const {
          __scopePopper: n,
          side: r = "bottom",
          sideOffset: o = 0,
          align: i = "center",
          alignOffset: s = 0,
          arrowPadding: a = 0,
          avoidCollisions: l = !0,
          collisionBoundary: u = [],
          collisionPadding: c = 0,
          sticky: f = "partial",
          hideWhenDetached: d = !1,
          updatePositionStrategy: p = "optimized",
          onPlaced: y,
          ...g
        } = e,
        w = x0(tf, n),
        [h, m] = x.useState(null),
        v = Ut(t, (he) => m(he)),
        [C, E] = x.useState(null),
        T = xT(C),
        M = (T == null ? void 0 : T.width) ?? 0,
        b = (T == null ? void 0 : T.height) ?? 0,
        j = r + (i !== "center" ? "-" + i : ""),
        _ =
          typeof c == "number"
            ? c
            : { top: 0, right: 0, bottom: 0, left: 0, ...c },
        H = Array.isArray(u) ? u : [u],
        D = H.length > 0,
        U = { padding: _, boundary: H.filter(PT), altBoundary: D },
        {
          refs: O,
          floatingStyles: Y,
          placement: Q,
          isPositioned: K,
          middlewareData: R,
        } = aT({
          strategy: "fixed",
          placement: j,
          whileElementsMounted: (...he) =>
            JP(...he, { animationFrame: p === "always" }),
          elements: { reference: w.anchor },
          middleware: [
            uT({ mainAxis: o + b, alignmentAxis: s }),
            l &&
              cT({
                mainAxis: !0,
                crossAxis: !1,
                limiter: f === "partial" ? dT() : void 0,
                ...U,
              }),
            l && fT({ ...U }),
            hT({
              ...U,
              apply: ({
                elements: he,
                rects: te,
                availableWidth: Ne,
                availableHeight: Re,
              }) => {
                const { width: Xe, height: ft } = te.reference,
                  pe = he.floating.style;
                pe.setProperty("--radix-popper-available-width", `${Ne}px`),
                  pe.setProperty("--radix-popper-available-height", `${Re}px`),
                  pe.setProperty("--radix-popper-anchor-width", `${Xe}px`),
                  pe.setProperty("--radix-popper-anchor-height", `${ft}px`);
              },
            }),
            C && mT({ element: C, padding: a }),
            TT({ arrowWidth: M, arrowHeight: b }),
            d && pT({ strategy: "referenceHidden", ...U }),
          ],
        }),
        [I, P] = b0(Q),
        S = on(y);
      Dr(() => {
        K && (S == null || S());
      }, [K, S]);
      const N = (W = R.arrow) == null ? void 0 : W.x,
        F = (q = R.arrow) == null ? void 0 : q.y,
        $ = ((re = R.arrow) == null ? void 0 : re.centerOffset) !== 0,
        [G, B] = x.useState();
      return (
        Dr(() => {
          h && B(window.getComputedStyle(h).zIndex);
        }, [h]),
        k.jsx("div", {
          ref: O.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...Y,
            transform: K ? Y.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: G,
            "--radix-popper-transform-origin": [
              (ie = R.transformOrigin) == null ? void 0 : ie.x,
              (se = R.transformOrigin) == null ? void 0 : se.y,
            ].join(" "),
            ...(((le = R.hide) == null ? void 0 : le.referenceHidden) && {
              visibility: "hidden",
              pointerEvents: "none",
            }),
          },
          dir: e.dir,
          children: k.jsx(ST, {
            scope: n,
            placedSide: I,
            onArrowChange: E,
            arrowX: N,
            arrowY: F,
            shouldHideArrow: $,
            children: k.jsx(dt.div, {
              "data-side": I,
              "data-align": P,
              ...g,
              ref: v,
              style: { ...g.style, animation: K ? void 0 : "none" },
            }),
          }),
        })
      );
    });
  E0.displayName = tf;
  var P0 = "PopperArrow",
    ET = { top: "bottom", right: "left", bottom: "top", left: "right" },
    T0 = x.forwardRef(function (t, n) {
      const { __scopePopper: r, ...o } = t,
        i = CT(P0, r),
        s = ET[i.placedSide];
      return k.jsx("span", {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0",
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)",
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0,
        },
        children: k.jsx(yT, {
          ...o,
          ref: n,
          style: { ...o.style, display: "block" },
        }),
      });
    });
  T0.displayName = P0;
  function PT(e) {
    return e !== null;
  }
  var TT = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
      var w, h, m;
      const { placement: n, rects: r, middlewareData: o } = t,
        s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
        a = s ? 0 : e.arrowWidth,
        l = s ? 0 : e.arrowHeight,
        [u, c] = b0(n),
        f = { start: "0%", center: "50%", end: "100%" }[c],
        d = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + a / 2,
        p = (((m = o.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
      let y = "",
        g = "";
      return (
        u === "bottom"
          ? ((y = s ? f : `${d}px`), (g = `${-l}px`))
          : u === "top"
          ? ((y = s ? f : `${d}px`), (g = `${r.floating.height + l}px`))
          : u === "right"
          ? ((y = `${-l}px`), (g = s ? f : `${p}px`))
          : u === "left" &&
            ((y = `${r.floating.width + l}px`), (g = s ? f : `${p}px`)),
        { data: { x: y, y: g } }
      );
    },
  });
  function b0(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
  }
  var bT = C0,
    kT = E0,
    MT = T0,
    [ml, _A] = Ev("Tooltip", [w0]),
    nf = w0(),
    k0 = "TooltipProvider",
    RT = 700,
    yp = "tooltip.open",
    [AT, M0] = ml(k0),
    R0 = (e) => {
      const {
          __scopeTooltip: t,
          delayDuration: n = RT,
          skipDelayDuration: r = 300,
          disableHoverableContent: o = !1,
          children: i,
        } = e,
        [s, a] = x.useState(!0),
        l = x.useRef(!1),
        u = x.useRef(0);
      return (
        x.useEffect(() => {
          const c = u.current;
          return () => window.clearTimeout(c);
        }, []),
        k.jsx(AT, {
          scope: t,
          isOpenDelayed: s,
          delayDuration: n,
          onOpen: x.useCallback(() => {
            window.clearTimeout(u.current), a(!1);
          }, []),
          onClose: x.useCallback(() => {
            window.clearTimeout(u.current),
              (u.current = window.setTimeout(() => a(!0), r));
          }, [r]),
          isPointerInTransitRef: l,
          onPointerInTransitChange: x.useCallback((c) => {
            l.current = c;
          }, []),
          disableHoverableContent: o,
          children: i,
        })
      );
    };
  R0.displayName = k0;
  var A0 = "Tooltip",
    [IA, gl] = ml(A0),
    bc = "TooltipTrigger",
    NT = x.forwardRef((e, t) => {
      const { __scopeTooltip: n, ...r } = e,
        o = gl(bc, n),
        i = M0(bc, n),
        s = nf(n),
        a = x.useRef(null),
        l = Ut(t, a, o.onTriggerChange),
        u = x.useRef(!1),
        c = x.useRef(!1),
        f = x.useCallback(() => (u.current = !1), []);
      return (
        x.useEffect(
          () => () => document.removeEventListener("pointerup", f),
          [f]
        ),
        k.jsx(bT, {
          asChild: !0,
          ...s,
          children: k.jsx(dt.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: Le(e.onPointerMove, (d) => {
              d.pointerType !== "touch" &&
                !c.current &&
                !i.isPointerInTransitRef.current &&
                (o.onTriggerEnter(), (c.current = !0));
            }),
            onPointerLeave: Le(e.onPointerLeave, () => {
              o.onTriggerLeave(), (c.current = !1);
            }),
            onPointerDown: Le(e.onPointerDown, () => {
              (u.current = !0),
                document.addEventListener("pointerup", f, { once: !0 });
            }),
            onFocus: Le(e.onFocus, () => {
              u.current || o.onOpen();
            }),
            onBlur: Le(e.onBlur, o.onClose),
            onClick: Le(e.onClick, o.onClose),
          }),
        })
      );
    });
  NT.displayName = bc;
  var DT = "TooltipPortal",
    [jA, LT] = ml(DT, { forceMount: void 0 }),
    Do = "TooltipContent",
    N0 = x.forwardRef((e, t) => {
      const n = LT(Do, e.__scopeTooltip),
        { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
        s = gl(Do, e.__scopeTooltip);
      return k.jsx(Wd, {
        present: r || s.open,
        children: s.disableHoverableContent
          ? k.jsx(D0, { side: o, ...i, ref: t })
          : k.jsx(OT, { side: o, ...i, ref: t }),
      });
    }),
    OT = x.forwardRef((e, t) => {
      const n = gl(Do, e.__scopeTooltip),
        r = M0(Do, e.__scopeTooltip),
        o = x.useRef(null),
        i = Ut(t, o),
        [s, a] = x.useState(null),
        { trigger: l, onClose: u } = n,
        c = o.current,
        { onPointerInTransitChange: f } = r,
        d = x.useCallback(() => {
          a(null), f(!1);
        }, [f]),
        p = x.useCallback(
          (y, g) => {
            const w = y.currentTarget,
              h = { x: y.clientX, y: y.clientY },
              m = FT(h, w.getBoundingClientRect()),
              v = VT(h, m),
              C = BT(g.getBoundingClientRect()),
              E = $T([...v, ...C]);
            a(E), f(!0);
          },
          [f]
        );
      return (
        x.useEffect(() => () => d(), [d]),
        x.useEffect(() => {
          if (l && c) {
            const y = (w) => p(w, c),
              g = (w) => p(w, l);
            return (
              l.addEventListener("pointerleave", y),
              c.addEventListener("pointerleave", g),
              () => {
                l.removeEventListener("pointerleave", y),
                  c.removeEventListener("pointerleave", g);
              }
            );
          }
        }, [l, c, p, d]),
        x.useEffect(() => {
          if (s) {
            const y = (g) => {
              const w = g.target,
                h = { x: g.clientX, y: g.clientY },
                m =
                  (l == null ? void 0 : l.contains(w)) ||
                  (c == null ? void 0 : c.contains(w)),
                v = !zT(h, s);
              m ? d() : v && (d(), u());
            };
            return (
              document.addEventListener("pointermove", y),
              () => document.removeEventListener("pointermove", y)
            );
          }
        }, [l, c, s, u, d]),
        k.jsx(D0, { ...e, ref: i })
      );
    }),
    [_T, IT] = ml(A0, { isInside: !1 }),
    D0 = x.forwardRef((e, t) => {
      const {
          __scopeTooltip: n,
          children: r,
          "aria-label": o,
          onEscapeKeyDown: i,
          onPointerDownOutside: s,
          ...a
        } = e,
        l = gl(Do, n),
        u = nf(n),
        { onClose: c } = l;
      return (
        x.useEffect(
          () => (
            document.addEventListener(yp, c),
            () => document.removeEventListener(yp, c)
          ),
          [c]
        ),
        x.useEffect(() => {
          if (l.trigger) {
            const f = (d) => {
              const p = d.target;
              p != null && p.contains(l.trigger) && c();
            };
            return (
              window.addEventListener("scroll", f, { capture: !0 }),
              () => window.removeEventListener("scroll", f, { capture: !0 })
            );
          }
        }, [l.trigger, c]),
        k.jsx(Ud, {
          asChild: !0,
          disableOutsidePointerEvents: !1,
          onEscapeKeyDown: i,
          onPointerDownOutside: s,
          onFocusOutside: (f) => f.preventDefault(),
          onDismiss: c,
          children: k.jsxs(kT, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
              ...a.style,
              "--radix-tooltip-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
            children: [
              k.jsx(Cv, { children: r }),
              k.jsx(_T, {
                scope: n,
                isInside: !0,
                children: k.jsx(DC, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || r,
                }),
              }),
            ],
          }),
        })
      );
    });
  N0.displayName = Do;
  var L0 = "TooltipArrow",
    jT = x.forwardRef((e, t) => {
      const { __scopeTooltip: n, ...r } = e,
        o = nf(n);
      return IT(L0, n).isInside ? null : k.jsx(MT, { ...o, ...r, ref: t });
    });
  jT.displayName = L0;
  function FT(e, t) {
    const n = Math.abs(t.top - e.y),
      r = Math.abs(t.bottom - e.y),
      o = Math.abs(t.right - e.x),
      i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
      case i:
        return "left";
      case o:
        return "right";
      case n:
        return "top";
      case r:
        return "bottom";
      default:
        throw new Error("unreachable");
    }
  }
  function VT(e, t, n = 5) {
    const r = [];
    switch (t) {
      case "top":
        r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
        break;
      case "bottom":
        r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
        break;
      case "left":
        r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
        break;
      case "right":
        r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
        break;
    }
    return r;
  }
  function BT(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [
      { x: o, y: t },
      { x: n, y: t },
      { x: n, y: r },
      { x: o, y: r },
    ];
  }
  function zT(e, t) {
    const { x: n, y: r } = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
      const a = t[i].x,
        l = t[i].y,
        u = t[s].x,
        c = t[s].y;
      l > r != c > r && n < ((u - a) * (r - l)) / (c - l) + a && (o = !o);
    }
    return o;
  }
  function $T(e) {
    const t = e.slice();
    return (
      t.sort((n, r) =>
        n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
      ),
      UT(t)
    );
  }
  function UT(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      for (; t.length >= 2; ) {
        const i = t[t.length - 1],
          s = t[t.length - 2];
        if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
        else break;
      }
      t.push(o);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
      const o = e[r];
      for (; n.length >= 2; ) {
        const i = n[n.length - 1],
          s = n[n.length - 2];
        if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
        else break;
      }
      n.push(o);
    }
    return (
      n.pop(),
      t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
        ? t
        : t.concat(n)
    );
  }
  var WT = R0,
    O0 = N0;
  const HT = WT,
    KT = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
      k.jsx(O0, {
        ref: r,
        sideOffset: t,
        className: Ir(
          "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          e
        ),
        ...n,
      })
    );
  KT.displayName = O0.displayName;
  var yl = class {
      constructor() {
        (this.listeners = new Set()),
          (this.subscribe = this.subscribe.bind(this));
      }
      subscribe(e) {
        return (
          this.listeners.add(e),
          this.onSubscribe(),
          () => {
            this.listeners.delete(e), this.onUnsubscribe();
          }
        );
      }
      hasListeners() {
        return this.listeners.size > 0;
      }
      onSubscribe() {}
      onUnsubscribe() {}
    },
    vl = typeof window > "u" || "Deno" in globalThis;
  function It() {}
  function GT(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function QT(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
  }
  function YT(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
  }
  function vp(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function XT(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function wp(e, t) {
    const {
      type: n = "all",
      exact: r,
      fetchStatus: o,
      predicate: i,
      queryKey: s,
      stale: a,
    } = e;
    if (s) {
      if (r) {
        if (t.queryHash !== rf(s, t.options)) return !1;
      } else if (!$i(t.queryKey, s)) return !1;
    }
    if (n !== "all") {
      const l = t.isActive();
      if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
    }
    return !(
      (typeof a == "boolean" && t.isStale() !== a) ||
      (o && o !== t.state.fetchStatus) ||
      (i && !i(t))
    );
  }
  function xp(e, t) {
    const { exact: n, status: r, predicate: o, mutationKey: i } = e;
    if (i) {
      if (!t.options.mutationKey) return !1;
      if (n) {
        if (zi(t.options.mutationKey) !== zi(i)) return !1;
      } else if (!$i(t.options.mutationKey, i)) return !1;
    }
    return !((r && t.state.status !== r) || (o && !o(t)));
  }
  function rf(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || zi)(e);
  }
  function zi(e) {
    return JSON.stringify(e, (t, n) =>
      kc(n)
        ? Object.keys(n)
            .sort()
            .reduce((r, o) => ((r[o] = n[o]), r), {})
        : n
    );
  }
  function $i(e, t) {
    return e === t
      ? !0
      : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
      ? !Object.keys(t).some((n) => !$i(e[n], t[n]))
      : !1;
  }
  function _0(e, t) {
    if (e === t) return e;
    const n = Sp(e) && Sp(t);
    if (n || (kc(e) && kc(t))) {
      const r = n ? e : Object.keys(e),
        o = r.length,
        i = n ? t : Object.keys(t),
        s = i.length,
        a = n ? [] : {};
      let l = 0;
      for (let u = 0; u < s; u++) {
        const c = n ? u : i[u];
        ((!n && r.includes(c)) || n) && e[c] === void 0 && t[c] === void 0
          ? ((a[c] = void 0), l++)
          : ((a[c] = _0(e[c], t[c])), a[c] === e[c] && e[c] !== void 0 && l++);
      }
      return o === s && l === o ? e : a;
    }
    return t;
  }
  function Sp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
  }
  function kc(e) {
    if (!Cp(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(
      !Cp(n) ||
      !n.hasOwnProperty("isPrototypeOf") ||
      Object.getPrototypeOf(e) !== Object.prototype
    );
  }
  function Cp(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function qT(e) {
    return new Promise((t) => {
      setTimeout(t, e);
    });
  }
  function ZT(e, t, n) {
    return typeof n.structuralSharing == "function"
      ? n.structuralSharing(e, t)
      : n.structuralSharing !== !1
      ? _0(e, t)
      : t;
  }
  function JT(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r;
  }
  function eb(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r;
  }
  var of = Symbol();
  function I0(e, t) {
    return !e.queryFn && t != null && t.initialPromise
      ? () => t.initialPromise
      : !e.queryFn || e.queryFn === of
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
  }
  var xr,
    Fn,
    mo,
    Zm,
    tb =
      ((Zm = class extends yl {
        constructor() {
          super();
          ae(this, xr);
          ae(this, Fn);
          ae(this, mo);
          ee(this, mo, (t) => {
            if (!vl && window.addEventListener) {
              const n = () => t();
              return (
                window.addEventListener("visibilitychange", n, !1),
                () => {
                  window.removeEventListener("visibilitychange", n);
                }
              );
            }
          });
        }
        onSubscribe() {
          A(this, Fn) || this.setEventListener(A(this, mo));
        }
        onUnsubscribe() {
          var t;
          this.hasListeners() ||
            ((t = A(this, Fn)) == null || t.call(this), ee(this, Fn, void 0));
        }
        setEventListener(t) {
          var n;
          ee(this, mo, t),
            (n = A(this, Fn)) == null || n.call(this),
            ee(
              this,
              Fn,
              t((r) => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
              })
            );
        }
        setFocused(t) {
          A(this, xr) !== t && (ee(this, xr, t), this.onFocus());
        }
        onFocus() {
          const t = this.isFocused();
          this.listeners.forEach((n) => {
            n(t);
          });
        }
        isFocused() {
          var t;
          return typeof A(this, xr) == "boolean"
            ? A(this, xr)
            : ((t = globalThis.document) == null
                ? void 0
                : t.visibilityState) !== "hidden";
        }
      }),
      (xr = new WeakMap()),
      (Fn = new WeakMap()),
      (mo = new WeakMap()),
      Zm),
    j0 = new tb(),
    go,
    Vn,
    yo,
    Jm,
    nb =
      ((Jm = class extends yl {
        constructor() {
          super();
          ae(this, go, !0);
          ae(this, Vn);
          ae(this, yo);
          ee(this, yo, (t) => {
            if (!vl && window.addEventListener) {
              const n = () => t(!0),
                r = () => t(!1);
              return (
                window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                  window.removeEventListener("online", n),
                    window.removeEventListener("offline", r);
                }
              );
            }
          });
        }
        onSubscribe() {
          A(this, Vn) || this.setEventListener(A(this, yo));
        }
        onUnsubscribe() {
          var t;
          this.hasListeners() ||
            ((t = A(this, Vn)) == null || t.call(this), ee(this, Vn, void 0));
        }
        setEventListener(t) {
          var n;
          ee(this, yo, t),
            (n = A(this, Vn)) == null || n.call(this),
            ee(this, Vn, t(this.setOnline.bind(this)));
        }
        setOnline(t) {
          A(this, go) !== t &&
            (ee(this, go, t),
            this.listeners.forEach((r) => {
              r(t);
            }));
        }
        isOnline() {
          return A(this, go);
        }
      }),
      (go = new WeakMap()),
      (Vn = new WeakMap()),
      (yo = new WeakMap()),
      Jm),
    ja = new nb();
  function rb() {
    let e, t;
    const n = new Promise((o, i) => {
      (e = o), (t = i);
    });
    (n.status = "pending"), n.catch(() => {});
    function r(o) {
      Object.assign(n, o), delete n.resolve, delete n.reject;
    }
    return (
      (n.resolve = (o) => {
        r({ status: "fulfilled", value: o }), e(o);
      }),
      (n.reject = (o) => {
        r({ status: "rejected", reason: o }), t(o);
      }),
      n
    );
  }
  function ob(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
  }
  function F0(e) {
    return (e ?? "online") === "online" ? ja.isOnline() : !0;
  }
  var V0 = class extends Error {
    constructor(e) {
      super("CancelledError"),
        (this.revert = e == null ? void 0 : e.revert),
        (this.silent = e == null ? void 0 : e.silent);
    }
  };
  function uu(e) {
    return e instanceof V0;
  }
  function B0(e) {
    let t = !1,
      n = 0,
      r = !1,
      o;
    const i = rb(),
      s = (g) => {
        var w;
        r || (d(new V0(g)), (w = e.abort) == null || w.call(e));
      },
      a = () => {
        t = !0;
      },
      l = () => {
        t = !1;
      },
      u = () =>
        j0.isFocused() &&
        (e.networkMode === "always" || ja.isOnline()) &&
        e.canRun(),
      c = () => F0(e.networkMode) && e.canRun(),
      f = (g) => {
        var w;
        r ||
          ((r = !0),
          (w = e.onSuccess) == null || w.call(e, g),
          o == null || o(),
          i.resolve(g));
      },
      d = (g) => {
        var w;
        r ||
          ((r = !0),
          (w = e.onError) == null || w.call(e, g),
          o == null || o(),
          i.reject(g));
      },
      p = () =>
        new Promise((g) => {
          var w;
          (o = (h) => {
            (r || u()) && g(h);
          }),
            (w = e.onPause) == null || w.call(e);
        }).then(() => {
          var g;
          (o = void 0), r || (g = e.onContinue) == null || g.call(e);
        }),
      y = () => {
        if (r) return;
        let g;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
          g = w ?? e.fn();
        } catch (h) {
          g = Promise.reject(h);
        }
        Promise.resolve(g)
          .then(f)
          .catch((h) => {
            var T;
            if (r) return;
            const m = e.retry ?? (vl ? 0 : 3),
              v = e.retryDelay ?? ob,
              C = typeof v == "function" ? v(n, h) : v,
              E =
                m === !0 ||
                (typeof m == "number" && n < m) ||
                (typeof m == "function" && m(n, h));
            if (t || !E) {
              d(h);
              return;
            }
            n++,
              (T = e.onFail) == null || T.call(e, n, h),
              qT(C)
                .then(() => (u() ? void 0 : p()))
                .then(() => {
                  t ? d(h) : y();
                });
          });
      };
    return {
      promise: i,
      cancel: s,
      continue: () => (o == null || o(), i),
      cancelRetry: a,
      continueRetry: l,
      canStart: c,
      start: () => (c() ? y() : p().then(y), i),
    };
  }
  function ib() {
    let e = [],
      t = 0,
      n = (a) => {
        a();
      },
      r = (a) => {
        a();
      },
      o = (a) => setTimeout(a, 0);
    const i = (a) => {
        t
          ? e.push(a)
          : o(() => {
              n(a);
            });
      },
      s = () => {
        const a = e;
        (e = []),
          a.length &&
            o(() => {
              r(() => {
                a.forEach((l) => {
                  n(l);
                });
              });
            });
      };
    return {
      batch: (a) => {
        let l;
        t++;
        try {
          l = a();
        } finally {
          t--, t || s();
        }
        return l;
      },
      batchCalls:
        (a) =>
        (...l) => {
          i(() => {
            a(...l);
          });
        },
      schedule: i,
      setNotifyFunction: (a) => {
        n = a;
      },
      setBatchNotifyFunction: (a) => {
        r = a;
      },
      setScheduler: (a) => {
        o = a;
      },
    };
  }
  var Je = ib(),
    Sr,
    eg,
    z0 =
      ((eg = class {
        constructor() {
          ae(this, Sr);
        }
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          this.clearGcTimeout(),
            QT(this.gcTime) &&
              ee(
                this,
                Sr,
                setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime)
              );
        }
        updateGcTime(e) {
          this.gcTime = Math.max(
            this.gcTime || 0,
            e ?? (vl ? 1 / 0 : 5 * 60 * 1e3)
          );
        }
        clearGcTimeout() {
          A(this, Sr) && (clearTimeout(A(this, Sr)), ee(this, Sr, void 0));
        }
      }),
      (Sr = new WeakMap()),
      eg),
    vo,
    wo,
    bt,
    He,
    Xi,
    Cr,
    jt,
    cn,
    tg,
    sb =
      ((tg = class extends z0 {
        constructor(t) {
          super();
          ae(this, jt);
          ae(this, vo);
          ae(this, wo);
          ae(this, bt);
          ae(this, He);
          ae(this, Xi);
          ae(this, Cr);
          ee(this, Cr, !1),
            ee(this, Xi, t.defaultOptions),
            this.setOptions(t.options),
            (this.observers = []),
            ee(this, bt, t.cache),
            (this.queryKey = t.queryKey),
            (this.queryHash = t.queryHash),
            ee(this, vo, lb(this.options)),
            (this.state = t.state ?? A(this, vo)),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        get promise() {
          var t;
          return (t = A(this, He)) == null ? void 0 : t.promise;
        }
        setOptions(t) {
          (this.options = { ...A(this, Xi), ...t }),
            this.updateGcTime(this.options.gcTime);
        }
        optionalRemove() {
          !this.observers.length &&
            this.state.fetchStatus === "idle" &&
            A(this, bt).remove(this);
        }
        setData(t, n) {
          const r = ZT(this.state.data, t, this.options);
          return (
            $e(this, jt, cn).call(this, {
              data: r,
              type: "success",
              dataUpdatedAt: n == null ? void 0 : n.updatedAt,
              manual: n == null ? void 0 : n.manual,
            }),
            r
          );
        }
        setState(t, n) {
          $e(this, jt, cn).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n,
          });
        }
        cancel(t) {
          var r, o;
          const n = (r = A(this, He)) == null ? void 0 : r.promise;
          return (
            (o = A(this, He)) == null || o.cancel(t),
            n ? n.then(It).catch(It) : Promise.resolve()
          );
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        reset() {
          this.destroy(), this.setState(A(this, vo));
        }
        isActive() {
          return this.observers.some((t) => XT(t.options.enabled, this) !== !1);
        }
        isDisabled() {
          return this.getObserversCount() > 0
            ? !this.isActive()
            : this.options.queryFn === of ||
                this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
        }
        isStale() {
          return this.state.isInvalidated
            ? !0
            : this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0;
        }
        isStaleByTime(t = 0) {
          return (
            this.state.isInvalidated ||
            this.state.data === void 0 ||
            !YT(this.state.dataUpdatedAt, t)
          );
        }
        onFocus() {
          var n;
          const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
          t == null || t.refetch({ cancelRefetch: !1 }),
            (n = A(this, He)) == null || n.continue();
        }
        onOnline() {
          var n;
          const t = this.observers.find((r) => r.shouldFetchOnReconnect());
          t == null || t.refetch({ cancelRefetch: !1 }),
            (n = A(this, He)) == null || n.continue();
        }
        addObserver(t) {
          this.observers.includes(t) ||
            (this.observers.push(t),
            this.clearGcTimeout(),
            A(this, bt).notify({
              type: "observerAdded",
              query: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          this.observers.includes(t) &&
            ((this.observers = this.observers.filter((n) => n !== t)),
            this.observers.length ||
              (A(this, He) &&
                (A(this, Cr)
                  ? A(this, He).cancel({ revert: !0 })
                  : A(this, He).cancelRetry()),
              this.scheduleGc()),
            A(this, bt).notify({
              type: "observerRemoved",
              query: this,
              observer: t,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated ||
            $e(this, jt, cn).call(this, { type: "invalidate" });
        }
        fetch(t, n) {
          var l, u, c;
          if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && n != null && n.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (A(this, He))
              return A(this, He).continueRetry(), A(this, He).promise;
          }
          if ((t && this.setOptions(t), !this.options.queryFn)) {
            const f = this.observers.find((d) => d.options.queryFn);
            f && this.setOptions(f.options);
          }
          const r = new AbortController(),
            o = (f) => {
              Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (ee(this, Cr, !0), r.signal),
              });
            },
            i = () => {
              const f = I0(this.options, n),
                d = { queryKey: this.queryKey, meta: this.meta };
              return (
                o(d),
                ee(this, Cr, !1),
                this.options.persister
                  ? this.options.persister(f, d, this)
                  : f(d)
              );
            },
            s = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              state: this.state,
              fetchFn: i,
            };
          o(s),
            (l = this.options.behavior) == null || l.onFetch(s, this),
            ee(this, wo, this.state),
            (this.state.fetchStatus === "idle" ||
              this.state.fetchMeta !==
                ((u = s.fetchOptions) == null ? void 0 : u.meta)) &&
              $e(this, jt, cn).call(this, {
                type: "fetch",
                meta: (c = s.fetchOptions) == null ? void 0 : c.meta,
              });
          const a = (f) => {
            var d, p, y, g;
            (uu(f) && f.silent) ||
              $e(this, jt, cn).call(this, { type: "error", error: f }),
              uu(f) ||
                ((p = (d = A(this, bt).config).onError) == null ||
                  p.call(d, f, this),
                (g = (y = A(this, bt).config).onSettled) == null ||
                  g.call(y, this.state.data, f, this)),
              this.scheduleGc();
          };
          return (
            ee(
              this,
              He,
              B0({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: s.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: (f) => {
                  var d, p, y, g;
                  if (f === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(f);
                  } catch (w) {
                    a(w);
                    return;
                  }
                  (p = (d = A(this, bt).config).onSuccess) == null ||
                    p.call(d, f, this),
                    (g = (y = A(this, bt).config).onSettled) == null ||
                      g.call(y, f, this.state.error, this),
                    this.scheduleGc();
                },
                onError: a,
                onFail: (f, d) => {
                  $e(this, jt, cn).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: d,
                  });
                },
                onPause: () => {
                  $e(this, jt, cn).call(this, { type: "pause" });
                },
                onContinue: () => {
                  $e(this, jt, cn).call(this, { type: "continue" });
                },
                retry: s.options.retry,
                retryDelay: s.options.retryDelay,
                networkMode: s.options.networkMode,
                canRun: () => !0,
              })
            ),
            A(this, He).start()
          );
        }
      }),
      (vo = new WeakMap()),
      (wo = new WeakMap()),
      (bt = new WeakMap()),
      (He = new WeakMap()),
      (Xi = new WeakMap()),
      (Cr = new WeakMap()),
      (jt = new WeakSet()),
      (cn = function (t) {
        const n = (r) => {
          switch (t.type) {
            case "failed":
              return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error,
              };
            case "pause":
              return { ...r, fetchStatus: "paused" };
            case "continue":
              return { ...r, fetchStatus: "fetching" };
            case "fetch":
              return {
                ...r,
                ...ab(r.data, this.options),
                fetchMeta: t.meta ?? null,
              };
            case "success":
              return {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              };
            case "error":
              const o = t.error;
              return uu(o) && o.revert && A(this, wo)
                ? { ...A(this, wo), fetchStatus: "idle" }
                : {
                    ...r,
                    error: o,
                    errorUpdateCount: r.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: r.fetchFailureCount + 1,
                    fetchFailureReason: o,
                    fetchStatus: "idle",
                    status: "error",
                  };
            case "invalidate":
              return { ...r, isInvalidated: !0 };
            case "setState":
              return { ...r, ...t.state };
          }
        };
        (this.state = n(this.state)),
          Je.batch(() => {
            this.observers.forEach((r) => {
              r.onQueryUpdate();
            }),
              A(this, bt).notify({ query: this, type: "updated", action: t });
          });
      }),
      tg);
  function ab(e, t) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: F0(t.networkMode) ? "fetching" : "paused",
      ...(e === void 0 && { error: null, status: "pending" }),
    };
  }
  function lb(e) {
    const t =
        typeof e.initialData == "function" ? e.initialData() : e.initialData,
      n = t !== void 0,
      r = n
        ? typeof e.initialDataUpdatedAt == "function"
          ? e.initialDataUpdatedAt()
          : e.initialDataUpdatedAt
        : 0;
    return {
      data: t,
      dataUpdateCount: 0,
      dataUpdatedAt: n ? r ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: !1,
      status: n ? "success" : "pending",
      fetchStatus: "idle",
    };
  }
  var Xt,
    ng,
    ub =
      ((ng = class extends yl {
        constructor(t = {}) {
          super();
          ae(this, Xt);
          (this.config = t), ee(this, Xt, new Map());
        }
        build(t, n, r) {
          const o = n.queryKey,
            i = n.queryHash ?? rf(o, n);
          let s = this.get(i);
          return (
            s ||
              ((s = new sb({
                cache: this,
                queryKey: o,
                queryHash: i,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(o),
              })),
              this.add(s)),
            s
          );
        }
        add(t) {
          A(this, Xt).has(t.queryHash) ||
            (A(this, Xt).set(t.queryHash, t),
            this.notify({ type: "added", query: t }));
        }
        remove(t) {
          const n = A(this, Xt).get(t.queryHash);
          n &&
            (t.destroy(),
            n === t && A(this, Xt).delete(t.queryHash),
            this.notify({ type: "removed", query: t }));
        }
        clear() {
          Je.batch(() => {
            this.getAll().forEach((t) => {
              this.remove(t);
            });
          });
        }
        get(t) {
          return A(this, Xt).get(t);
        }
        getAll() {
          return [...A(this, Xt).values()];
        }
        find(t) {
          const n = { exact: !0, ...t };
          return this.getAll().find((r) => wp(n, r));
        }
        findAll(t = {}) {
          const n = this.getAll();
          return Object.keys(t).length > 0 ? n.filter((r) => wp(t, r)) : n;
        }
        notify(t) {
          Je.batch(() => {
            this.listeners.forEach((n) => {
              n(t);
            });
          });
        }
        onFocus() {
          Je.batch(() => {
            this.getAll().forEach((t) => {
              t.onFocus();
            });
          });
        }
        onOnline() {
          Je.batch(() => {
            this.getAll().forEach((t) => {
              t.onOnline();
            });
          });
        }
      }),
      (Xt = new WeakMap()),
      ng),
    qt,
    qe,
    Er,
    Zt,
    Dn,
    rg,
    cb =
      ((rg = class extends z0 {
        constructor(t) {
          super();
          ae(this, Zt);
          ae(this, qt);
          ae(this, qe);
          ae(this, Er);
          (this.mutationId = t.mutationId),
            ee(this, qe, t.mutationCache),
            ee(this, qt, []),
            (this.state = t.state || db()),
            this.setOptions(t.options),
            this.scheduleGc();
        }
        setOptions(t) {
          (this.options = t), this.updateGcTime(this.options.gcTime);
        }
        get meta() {
          return this.options.meta;
        }
        addObserver(t) {
          A(this, qt).includes(t) ||
            (A(this, qt).push(t),
            this.clearGcTimeout(),
            A(this, qe).notify({
              type: "observerAdded",
              mutation: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          ee(
            this,
            qt,
            A(this, qt).filter((n) => n !== t)
          ),
            this.scheduleGc(),
            A(this, qe).notify({
              type: "observerRemoved",
              mutation: this,
              observer: t,
            });
        }
        optionalRemove() {
          A(this, qt).length ||
            (this.state.status === "pending"
              ? this.scheduleGc()
              : A(this, qe).remove(this));
        }
        continue() {
          var t;
          return (
            ((t = A(this, Er)) == null ? void 0 : t.continue()) ??
            this.execute(this.state.variables)
          );
        }
        async execute(t) {
          var o, i, s, a, l, u, c, f, d, p, y, g, w, h, m, v, C, E, T, M;
          ee(
            this,
            Er,
            B0({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(new Error("No mutationFn found")),
              onFail: (b, j) => {
                $e(this, Zt, Dn).call(this, {
                  type: "failed",
                  failureCount: b,
                  error: j,
                });
              },
              onPause: () => {
                $e(this, Zt, Dn).call(this, { type: "pause" });
              },
              onContinue: () => {
                $e(this, Zt, Dn).call(this, { type: "continue" });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => A(this, qe).canRun(this),
            })
          );
          const n = this.state.status === "pending",
            r = !A(this, Er).canStart();
          try {
            if (!n) {
              $e(this, Zt, Dn).call(this, {
                type: "pending",
                variables: t,
                isPaused: r,
              }),
                await ((i = (o = A(this, qe).config).onMutate) == null
                  ? void 0
                  : i.call(o, t, this));
              const j = await ((a = (s = this.options).onMutate) == null
                ? void 0
                : a.call(s, t));
              j !== this.state.context &&
                $e(this, Zt, Dn).call(this, {
                  type: "pending",
                  context: j,
                  variables: t,
                  isPaused: r,
                });
            }
            const b = await A(this, Er).start();
            return (
              await ((u = (l = A(this, qe).config).onSuccess) == null
                ? void 0
                : u.call(l, b, t, this.state.context, this)),
              await ((f = (c = this.options).onSuccess) == null
                ? void 0
                : f.call(c, b, t, this.state.context)),
              await ((p = (d = A(this, qe).config).onSettled) == null
                ? void 0
                : p.call(
                    d,
                    b,
                    null,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((g = (y = this.options).onSettled) == null
                ? void 0
                : g.call(y, b, null, t, this.state.context)),
              $e(this, Zt, Dn).call(this, { type: "success", data: b }),
              b
            );
          } catch (b) {
            try {
              throw (
                (await ((h = (w = A(this, qe).config).onError) == null
                  ? void 0
                  : h.call(w, b, t, this.state.context, this)),
                await ((v = (m = this.options).onError) == null
                  ? void 0
                  : v.call(m, b, t, this.state.context)),
                await ((E = (C = A(this, qe).config).onSettled) == null
                  ? void 0
                  : E.call(
                      C,
                      void 0,
                      b,
                      this.state.variables,
                      this.state.context,
                      this
                    )),
                await ((M = (T = this.options).onSettled) == null
                  ? void 0
                  : M.call(T, void 0, b, t, this.state.context)),
                b)
              );
            } finally {
              $e(this, Zt, Dn).call(this, { type: "error", error: b });
            }
          } finally {
            A(this, qe).runNext(this);
          }
        }
      }),
      (qt = new WeakMap()),
      (qe = new WeakMap()),
      (Er = new WeakMap()),
      (Zt = new WeakSet()),
      (Dn = function (t) {
        const n = (r) => {
          switch (t.type) {
            case "failed":
              return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error,
              };
            case "pause":
              return { ...r, isPaused: !0 };
            case "continue":
              return { ...r, isPaused: !1 };
            case "pending":
              return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now(),
              };
            case "success":
              return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1,
              };
            case "error":
              return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error",
              };
          }
        };
        (this.state = n(this.state)),
          Je.batch(() => {
            A(this, qt).forEach((r) => {
              r.onMutationUpdate(t);
            }),
              A(this, qe).notify({
                mutation: this,
                type: "updated",
                action: t,
              });
          });
      }),
      rg);
  function db() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: !1,
      status: "idle",
      variables: void 0,
      submittedAt: 0,
    };
  }
  var ht,
    qi,
    og,
    fb =
      ((og = class extends yl {
        constructor(t = {}) {
          super();
          ae(this, ht);
          ae(this, qi);
          (this.config = t), ee(this, ht, new Map()), ee(this, qi, Date.now());
        }
        build(t, n, r) {
          const o = new cb({
            mutationCache: this,
            mutationId: ++gs(this, qi)._,
            options: t.defaultMutationOptions(n),
            state: r,
          });
          return this.add(o), o;
        }
        add(t) {
          const n = Fs(t),
            r = A(this, ht).get(n) ?? [];
          r.push(t),
            A(this, ht).set(n, r),
            this.notify({ type: "added", mutation: t });
        }
        remove(t) {
          var r;
          const n = Fs(t);
          if (A(this, ht).has(n)) {
            const o =
              (r = A(this, ht).get(n)) == null
                ? void 0
                : r.filter((i) => i !== t);
            o &&
              (o.length === 0 ? A(this, ht).delete(n) : A(this, ht).set(n, o));
          }
          this.notify({ type: "removed", mutation: t });
        }
        canRun(t) {
          var r;
          const n =
            (r = A(this, ht).get(Fs(t))) == null
              ? void 0
              : r.find((o) => o.state.status === "pending");
          return !n || n === t;
        }
        runNext(t) {
          var r;
          const n =
            (r = A(this, ht).get(Fs(t))) == null
              ? void 0
              : r.find((o) => o !== t && o.state.isPaused);
          return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
        }
        clear() {
          Je.batch(() => {
            this.getAll().forEach((t) => {
              this.remove(t);
            });
          });
        }
        getAll() {
          return [...A(this, ht).values()].flat();
        }
        find(t) {
          const n = { exact: !0, ...t };
          return this.getAll().find((r) => xp(n, r));
        }
        findAll(t = {}) {
          return this.getAll().filter((n) => xp(t, n));
        }
        notify(t) {
          Je.batch(() => {
            this.listeners.forEach((n) => {
              n(t);
            });
          });
        }
        resumePausedMutations() {
          const t = this.getAll().filter((n) => n.state.isPaused);
          return Je.batch(() =>
            Promise.all(t.map((n) => n.continue().catch(It)))
          );
        }
      }),
      (ht = new WeakMap()),
      (qi = new WeakMap()),
      og);
  function Fs(e) {
    var t;
    return (
      ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
    );
  }
  function Ep(e) {
    return {
      onFetch: (t, n) => {
        var c, f, d, p, y;
        const r = t.options,
          o =
            (d =
              (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
                ? void 0
                : f.fetchMore) == null
              ? void 0
              : d.direction,
          i = ((p = t.state.data) == null ? void 0 : p.pages) || [],
          s = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
        let a = { pages: [], pageParams: [] },
          l = 0;
        const u = async () => {
          let g = !1;
          const w = (v) => {
              Object.defineProperty(v, "signal", {
                enumerable: !0,
                get: () => (
                  t.signal.aborted
                    ? (g = !0)
                    : t.signal.addEventListener("abort", () => {
                        g = !0;
                      }),
                  t.signal
                ),
              });
            },
            h = I0(t.options, t.fetchOptions),
            m = async (v, C, E) => {
              if (g) return Promise.reject();
              if (C == null && v.pages.length) return Promise.resolve(v);
              const T = {
                queryKey: t.queryKey,
                pageParam: C,
                direction: E ? "backward" : "forward",
                meta: t.options.meta,
              };
              w(T);
              const M = await h(T),
                { maxPages: b } = t.options,
                j = E ? eb : JT;
              return {
                pages: j(v.pages, M, b),
                pageParams: j(v.pageParams, C, b),
              };
            };
          if (o && i.length) {
            const v = o === "backward",
              C = v ? hb : Pp,
              E = { pages: i, pageParams: s },
              T = C(r, E);
            a = await m(E, T, v);
          } else {
            const v = e ?? i.length;
            do {
              const C = l === 0 ? s[0] ?? r.initialPageParam : Pp(r, a);
              if (l > 0 && C == null) break;
              (a = await m(a, C)), l++;
            } while (l < v);
          }
          return a;
        };
        t.options.persister
          ? (t.fetchFn = () => {
              var g, w;
              return (w = (g = t.options).persister) == null
                ? void 0
                : w.call(
                    g,
                    u,
                    {
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    n
                  );
            })
          : (t.fetchFn = u);
      },
    };
  }
  function Pp(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
  }
  function hb(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0
      ? (r = e.getPreviousPageParam) == null
        ? void 0
        : r.call(e, t[0], t, n[0], n)
      : void 0;
  }
  var Pe,
    Bn,
    zn,
    xo,
    So,
    $n,
    Co,
    Eo,
    ig,
    pb =
      ((ig = class {
        constructor(e = {}) {
          ae(this, Pe);
          ae(this, Bn);
          ae(this, zn);
          ae(this, xo);
          ae(this, So);
          ae(this, $n);
          ae(this, Co);
          ae(this, Eo);
          ee(this, Pe, e.queryCache || new ub()),
            ee(this, Bn, e.mutationCache || new fb()),
            ee(this, zn, e.defaultOptions || {}),
            ee(this, xo, new Map()),
            ee(this, So, new Map()),
            ee(this, $n, 0);
        }
        mount() {
          gs(this, $n)._++,
            A(this, $n) === 1 &&
              (ee(
                this,
                Co,
                j0.subscribe(async (e) => {
                  e &&
                    (await this.resumePausedMutations(), A(this, Pe).onFocus());
                })
              ),
              ee(
                this,
                Eo,
                ja.subscribe(async (e) => {
                  e &&
                    (await this.resumePausedMutations(),
                    A(this, Pe).onOnline());
                })
              ));
        }
        unmount() {
          var e, t;
          gs(this, $n)._--,
            A(this, $n) === 0 &&
              ((e = A(this, Co)) == null || e.call(this),
              ee(this, Co, void 0),
              (t = A(this, Eo)) == null || t.call(this),
              ee(this, Eo, void 0));
        }
        isFetching(e) {
          return A(this, Pe).findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return A(this, Bn).findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          var n;
          const t = this.defaultQueryOptions({ queryKey: e });
          return (n = A(this, Pe).get(t.queryHash)) == null
            ? void 0
            : n.state.data;
        }
        ensureQueryData(e) {
          const t = this.getQueryData(e.queryKey);
          if (t === void 0) return this.fetchQuery(e);
          {
            const n = this.defaultQueryOptions(e),
              r = A(this, Pe).build(this, n);
            return (
              e.revalidateIfStale &&
                r.isStaleByTime(vp(n.staleTime, r)) &&
                this.prefetchQuery(n),
              Promise.resolve(t)
            );
          }
        }
        getQueriesData(e) {
          return A(this, Pe)
            .findAll(e)
            .map(({ queryKey: t, state: n }) => {
              const r = n.data;
              return [t, r];
            });
        }
        setQueryData(e, t, n) {
          const r = this.defaultQueryOptions({ queryKey: e }),
            o = A(this, Pe).get(r.queryHash),
            i = o == null ? void 0 : o.state.data,
            s = GT(t, i);
          if (s !== void 0)
            return A(this, Pe)
              .build(this, r)
              .setData(s, { ...n, manual: !0 });
        }
        setQueriesData(e, t, n) {
          return Je.batch(() =>
            A(this, Pe)
              .findAll(e)
              .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
          );
        }
        getQueryState(e) {
          var n;
          const t = this.defaultQueryOptions({ queryKey: e });
          return (n = A(this, Pe).get(t.queryHash)) == null ? void 0 : n.state;
        }
        removeQueries(e) {
          const t = A(this, Pe);
          Je.batch(() => {
            t.findAll(e).forEach((n) => {
              t.remove(n);
            });
          });
        }
        resetQueries(e, t) {
          const n = A(this, Pe),
            r = { type: "active", ...e };
          return Je.batch(
            () => (
              n.findAll(e).forEach((o) => {
                o.reset();
              }),
              this.refetchQueries(r, t)
            )
          );
        }
        cancelQueries(e = {}, t = {}) {
          const n = { revert: !0, ...t },
            r = Je.batch(() =>
              A(this, Pe)
                .findAll(e)
                .map((o) => o.cancel(n))
            );
          return Promise.all(r).then(It).catch(It);
        }
        invalidateQueries(e = {}, t = {}) {
          return Je.batch(() => {
            if (
              (A(this, Pe)
                .findAll(e)
                .forEach((r) => {
                  r.invalidate();
                }),
              e.refetchType === "none")
            )
              return Promise.resolve();
            const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
            return this.refetchQueries(n, t);
          });
        }
        refetchQueries(e = {}, t) {
          const n = {
              ...t,
              cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
            },
            r = Je.batch(() =>
              A(this, Pe)
                .findAll(e)
                .filter((o) => !o.isDisabled())
                .map((o) => {
                  let i = o.fetch(void 0, n);
                  return (
                    n.throwOnError || (i = i.catch(It)),
                    o.state.fetchStatus === "paused" ? Promise.resolve() : i
                  );
                })
            );
          return Promise.all(r).then(It);
        }
        fetchQuery(e) {
          const t = this.defaultQueryOptions(e);
          t.retry === void 0 && (t.retry = !1);
          const n = A(this, Pe).build(this, t);
          return n.isStaleByTime(vp(t.staleTime, n))
            ? n.fetch(t)
            : Promise.resolve(n.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(It).catch(It);
        }
        fetchInfiniteQuery(e) {
          return (e.behavior = Ep(e.pages)), this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(It).catch(It);
        }
        ensureInfiniteQueryData(e) {
          return (e.behavior = Ep(e.pages)), this.ensureQueryData(e);
        }
        resumePausedMutations() {
          return ja.isOnline()
            ? A(this, Bn).resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return A(this, Pe);
        }
        getMutationCache() {
          return A(this, Bn);
        }
        getDefaultOptions() {
          return A(this, zn);
        }
        setDefaultOptions(e) {
          ee(this, zn, e);
        }
        setQueryDefaults(e, t) {
          A(this, xo).set(zi(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          const t = [...A(this, xo).values()];
          let n = {};
          return (
            t.forEach((r) => {
              $i(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
            }),
            n
          );
        }
        setMutationDefaults(e, t) {
          A(this, So).set(zi(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          const t = [...A(this, So).values()];
          let n = {};
          return (
            t.forEach((r) => {
              $i(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
            }),
            n
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          const t = {
            ...A(this, zn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = rf(t.queryKey, t)),
            t.refetchOnReconnect === void 0 &&
              (t.refetchOnReconnect = t.networkMode !== "always"),
            t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.enabled !== !0 && t.queryFn === of && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e != null && e._defaulted
            ? e
            : {
                ...A(this, zn).mutations,
                ...((e == null ? void 0 : e.mutationKey) &&
                  this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          A(this, Pe).clear(), A(this, Bn).clear();
        }
      }),
      (Pe = new WeakMap()),
      (Bn = new WeakMap()),
      (zn = new WeakMap()),
      (xo = new WeakMap()),
      (So = new WeakMap()),
      ($n = new WeakMap()),
      (Co = new WeakMap()),
      (Eo = new WeakMap()),
      ig),
    mb = x.createContext(void 0),
    gb = ({ client: e, children: t }) => (
      x.useEffect(
        () => (
          e.mount(),
          () => {
            e.unmount();
          }
        ),
        [e]
      ),
      k.jsx(mb.Provider, { value: e, children: t })
    );
  /**
   * @remix-run/router v1.20.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function Fa() {
    return (
      (Fa = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Fa.apply(this, arguments)
    );
  }
  var Hn;
  (function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(Hn || (Hn = {}));
  const Tp = "popstate";
  function yb(e) {
    e === void 0 && (e = {});
    function t(r, o) {
      let { pathname: i, search: s, hash: a } = r.location;
      return Mc(
        "",
        { pathname: i, search: s, hash: a },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default"
      );
    }
    function n(r, o) {
      return typeof o == "string" ? o : U0(o);
    }
    return wb(t, n, null, e);
  }
  function ct(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
  }
  function $0(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function vb() {
    return Math.random().toString(36).substr(2, 8);
  }
  function bp(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function Mc(e, t, n, r) {
    return (
      n === void 0 && (n = null),
      Fa(
        {
          pathname: typeof e == "string" ? e : e.pathname,
          search: "",
          hash: "",
        },
        typeof t == "string" ? wl(t) : t,
        { state: n, key: (t && t.key) || r || vb() }
      )
    );
  }
  function U0(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
      r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
      t
    );
  }
  function wl(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function wb(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: i = !1 } = r,
      s = o.history,
      a = Hn.Pop,
      l = null,
      u = c();
    u == null && ((u = 0), s.replaceState(Fa({}, s.state, { idx: u }), ""));
    function c() {
      return (s.state || { idx: null }).idx;
    }
    function f() {
      a = Hn.Pop;
      let w = c(),
        h = w == null ? null : w - u;
      (u = w), l && l({ action: a, location: g.location, delta: h });
    }
    function d(w, h) {
      a = Hn.Push;
      let m = Mc(g.location, w, h);
      u = c() + 1;
      let v = bp(m, u),
        C = g.createHref(m);
      try {
        s.pushState(v, "", C);
      } catch (E) {
        if (E instanceof DOMException && E.name === "DataCloneError") throw E;
        o.location.assign(C);
      }
      i && l && l({ action: a, location: g.location, delta: 1 });
    }
    function p(w, h) {
      a = Hn.Replace;
      let m = Mc(g.location, w, h);
      u = c();
      let v = bp(m, u),
        C = g.createHref(m);
      s.replaceState(v, "", C),
        i && l && l({ action: a, location: g.location, delta: 0 });
    }
    function y(w) {
      let h =
          o.location.origin !== "null" ? o.location.origin : o.location.href,
        m = typeof w == "string" ? w : U0(w);
      return (
        (m = m.replace(/ $/, "%20")),
        ct(
          h,
          "No window.location.(origin|href) available to create URL for href: " +
            m
        ),
        new URL(m, h)
      );
    }
    let g = {
      get action() {
        return a;
      },
      get location() {
        return e(o, s);
      },
      listen(w) {
        if (l) throw new Error("A history only accepts one active listener");
        return (
          o.addEventListener(Tp, f),
          (l = w),
          () => {
            o.removeEventListener(Tp, f), (l = null);
          }
        );
      },
      createHref(w) {
        return t(o, w);
      },
      createURL: y,
      encodeLocation(w) {
        let h = y(w);
        return { pathname: h.pathname, search: h.search, hash: h.hash };
      },
      push: d,
      replace: p,
      go(w) {
        return s.go(w);
      },
    };
    return g;
  }
  var kp;
  (function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(kp || (kp = {}));
  function xb(e, t, n) {
    return n === void 0 && (n = "/"), Sb(e, t, n, !1);
  }
  function Sb(e, t, n, r) {
    let o = typeof t == "string" ? wl(t) : t,
      i = K0(o.pathname || "/", n);
    if (i == null) return null;
    let s = W0(e);
    Cb(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
      let u = Lb(i);
      a = Nb(s[l], u, r);
    }
    return a;
  }
  function W0(e, t, n, r) {
    t === void 0 && (t = []),
      n === void 0 && (n = []),
      r === void 0 && (r = "");
    let o = (i, s, a) => {
      let l = {
        relativePath: a === void 0 ? i.path || "" : a,
        caseSensitive: i.caseSensitive === !0,
        childrenIndex: s,
        route: i,
      };
      l.relativePath.startsWith("/") &&
        (ct(
          l.relativePath.startsWith(r),
          'Absolute route path "' +
            l.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes."
        ),
        (l.relativePath = l.relativePath.slice(r.length)));
      let u = po([r, l.relativePath]),
        c = n.concat(l);
      i.children &&
        i.children.length > 0 &&
        (ct(
          i.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + u + '".')
        ),
        W0(i.children, t, c, u)),
        !(i.path == null && !i.index) &&
          t.push({ path: u, score: Rb(u, i.index), routesMeta: c });
    };
    return (
      e.forEach((i, s) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
          o(i, s);
        else for (let l of H0(i.path)) o(i, s, l);
      }),
      t
    );
  }
  function H0(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
      o = n.endsWith("?"),
      i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = H0(r.join("/")),
      a = [];
    return (
      a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
      o && a.push(...s),
      a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
  }
  function Cb(e) {
    e.sort((t, n) =>
      t.score !== n.score
        ? n.score - t.score
        : Ab(
            t.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex)
          )
    );
  }
  const Eb = /^:[\w-]+$/,
    Pb = 3,
    Tb = 2,
    bb = 1,
    kb = 10,
    Mb = -2,
    Mp = (e) => e === "*";
  function Rb(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(Mp) && (r += Mb),
      t && (r += Tb),
      n
        .filter((o) => !Mp(o))
        .reduce((o, i) => o + (Eb.test(i) ? Pb : i === "" ? bb : kb), r)
    );
  }
  function Ab(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function Nb(e, t, n) {
    let { routesMeta: r } = e,
      o = {},
      i = "/",
      s = [];
    for (let a = 0; a < r.length; ++a) {
      let l = r[a],
        u = a === r.length - 1,
        c = i === "/" ? t : t.slice(i.length) || "/",
        f = Rp(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
          c
        ),
        d = l.route;
      if (
        (!f &&
          u &&
          n &&
          !r[r.length - 1].route.index &&
          (f = Rp(
            { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
            c
          )),
        !f)
      )
        return null;
      Object.assign(o, f.params),
        s.push({
          params: o,
          pathname: po([i, f.pathname]),
          pathnameBase: Ob(po([i, f.pathnameBase])),
          route: d,
        }),
        f.pathnameBase !== "/" && (i = po([i, f.pathnameBase]));
    }
    return s;
  }
  function Rp(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = Db(e.path, e.caseSensitive, e.end),
      o = t.match(n);
    if (!o) return null;
    let i = o[0],
      s = i.replace(/(.)\/+$/, "$1"),
      a = o.slice(1);
    return {
      params: r.reduce((u, c, f) => {
        let { paramName: d, isOptional: p } = c;
        if (d === "*") {
          let g = a[f] || "";
          s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
        }
        const y = a[f];
        return (
          p && !y ? (u[d] = void 0) : (u[d] = (y || "").replace(/%2F/g, "/")), u
        );
      }, {}),
      pathname: i,
      pathnameBase: s,
      pattern: e,
    };
  }
  function Db(e, t, n) {
    t === void 0 && (t = !1),
      n === void 0 && (n = !0),
      $0(
        e === "*" || !e.endsWith("*") || e.endsWith("/*"),
        'Route path "' +
          e +
          '" will be treated as if it were ' +
          ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
          "always follow a `/` in the pattern. To get rid of this warning, " +
          ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
      );
    let r = [],
      o =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (s, a, l) => (
              r.push({ paramName: a, isOptional: l != null }),
              l ? "/?([^\\/]+)?" : "/([^\\/]+)"
            )
          );
    return (
      e.endsWith("*")
        ? (r.push({ paramName: "*" }),
          (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
      [new RegExp(o, t ? void 0 : "i"), r]
    );
  }
  function Lb(e) {
    try {
      return e
        .split("/")
        .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        $0(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
            ("encoding (" + t + ").")
        ),
        e
      );
    }
  }
  function K0(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  const po = (e) => e.join("/").replace(/\/\/+/g, "/"),
    Ob = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
  function _b(e) {
    return (
      e != null &&
      typeof e.status == "number" &&
      typeof e.statusText == "string" &&
      typeof e.internal == "boolean" &&
      "data" in e
    );
  }
  const G0 = ["post", "put", "patch", "delete"];
  new Set(G0);
  const Ib = ["get", ...G0];
  new Set(Ib);
  /**
   * React Router v6.27.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function Va() {
    return (
      (Va = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Va.apply(this, arguments)
    );
  }
  const jb = x.createContext(null),
    Fb = x.createContext(null),
    Q0 = x.createContext(null),
    xl = x.createContext(null),
    Sl = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    Y0 = x.createContext(null);
  function sf() {
    return x.useContext(xl) != null;
  }
  function X0() {
    return sf() || ct(!1), x.useContext(xl).location;
  }
  function Vb(e, t) {
    return Bb(e, t);
  }
  function Bb(e, t, n, r) {
    sf() || ct(!1);
    let { navigator: o } = x.useContext(Q0),
      { matches: i } = x.useContext(Sl),
      s = i[i.length - 1],
      a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = X0(),
      c;
    if (t) {
      var f;
      let w = typeof t == "string" ? wl(t) : t;
      l === "/" || ((f = w.pathname) != null && f.startsWith(l)) || ct(!1),
        (c = w);
    } else c = u;
    let d = c.pathname || "/",
      p = d;
    if (l !== "/") {
      let w = l.replace(/^\//, "").split("/");
      p = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/");
    }
    let y = xb(e, { pathname: p }),
      g = Hb(
        y &&
          y.map((w) =>
            Object.assign({}, w, {
              params: Object.assign({}, a, w.params),
              pathname: po([
                l,
                o.encodeLocation
                  ? o.encodeLocation(w.pathname).pathname
                  : w.pathname,
              ]),
              pathnameBase:
                w.pathnameBase === "/"
                  ? l
                  : po([
                      l,
                      o.encodeLocation
                        ? o.encodeLocation(w.pathnameBase).pathname
                        : w.pathnameBase,
                    ]),
            })
          ),
        i,
        n,
        r
      );
    return t && g
      ? x.createElement(
          xl.Provider,
          {
            value: {
              location: Va(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                c
              ),
              navigationType: Hn.Pop,
            },
          },
          g
        )
      : g;
  }
  function zb() {
    let e = Yb(),
      t = _b(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return x.createElement(
      x.Fragment,
      null,
      x.createElement("h2", null, "Unexpected Application Error!"),
      x.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? x.createElement("pre", { style: o }, n) : null,
      null
    );
  }
  const $b = x.createElement(zb, null);
  class Ub extends x.Component {
    constructor(t) {
      super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        });
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
      return n.location !== t.location ||
        (n.revalidation !== "idle" && t.revalidation === "idle")
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation,
          };
    }
    componentDidCatch(t, n) {
      console.error(
        "React Router caught the following error during render",
        t,
        n
      );
    }
    render() {
      return this.state.error !== void 0
        ? x.createElement(
            Sl.Provider,
            { value: this.props.routeContext },
            x.createElement(Y0.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  }
  function Wb(e) {
    let { routeContext: t, match: n, children: r } = e,
      o = x.useContext(jb);
    return (
      o &&
        o.static &&
        o.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (o.staticContext._deepestRenderedBoundaryId = n.route.id),
      x.createElement(Sl.Provider, { value: t }, r)
    );
  }
  function Hb(e, t, n, r) {
    var o;
    if (
      (t === void 0 && (t = []),
      n === void 0 && (n = null),
      r === void 0 && (r = null),
      e == null)
    ) {
      var i;
      if (!n) return null;
      if (n.errors) e = n.matches;
      else if (
        (i = r) != null &&
        i.v7_partialHydration &&
        t.length === 0 &&
        !n.initialized &&
        n.matches.length > 0
      )
        e = n.matches;
      else return null;
    }
    let s = e,
      a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
      let c = s.findIndex(
        (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
      );
      c >= 0 || ct(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
    }
    let l = !1,
      u = -1;
    if (n && r && r.v7_partialHydration)
      for (let c = 0; c < s.length; c++) {
        let f = s[c];
        if (
          ((f.route.HydrateFallback || f.route.hydrateFallbackElement) &&
            (u = c),
          f.route.id)
        ) {
          let { loaderData: d, errors: p } = n,
            y =
              f.route.loader &&
              d[f.route.id] === void 0 &&
              (!p || p[f.route.id] === void 0);
          if (f.route.lazy || y) {
            (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
            break;
          }
        }
      }
    return s.reduceRight((c, f, d) => {
      let p,
        y = !1,
        g = null,
        w = null;
      n &&
        ((p = a && f.route.id ? a[f.route.id] : void 0),
        (g = f.route.errorElement || $b),
        l &&
          (u < 0 && d === 0
            ? ((y = !0), (w = null))
            : u === d &&
              ((y = !0), (w = f.route.hydrateFallbackElement || null))));
      let h = t.concat(s.slice(0, d + 1)),
        m = () => {
          let v;
          return (
            p
              ? (v = g)
              : y
              ? (v = w)
              : f.route.Component
              ? (v = x.createElement(f.route.Component, null))
              : f.route.element
              ? (v = f.route.element)
              : (v = c),
            x.createElement(Wb, {
              match: f,
              routeContext: { outlet: c, matches: h, isDataRoute: n != null },
              children: v,
            })
          );
        };
      return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
        ? x.createElement(Ub, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: p,
            children: m(),
            routeContext: { outlet: null, matches: h, isDataRoute: !0 },
          })
        : m();
    }, null);
  }
  var Rc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Rc || {});
  function Kb(e) {
    let t = x.useContext(Fb);
    return t || ct(!1), t;
  }
  function Gb(e) {
    let t = x.useContext(Sl);
    return t || ct(!1), t;
  }
  function Qb(e) {
    let t = Gb(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || ct(!1), n.route.id;
  }
  function Yb() {
    var e;
    let t = x.useContext(Y0),
      n = Kb(Rc.UseRouteError),
      r = Qb(Rc.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
  }
  function Ac(e) {
    ct(!1);
  }
  function Xb(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: o = Hn.Pop,
      navigator: i,
      static: s = !1,
      future: a,
    } = e;
    sf() && ct(!1);
    let l = t.replace(/^\/*/, "/"),
      u = x.useMemo(
        () => ({
          basename: l,
          navigator: i,
          static: s,
          future: Va({ v7_relativeSplatPath: !1 }, a),
        }),
        [l, a, i, s]
      );
    typeof r == "string" && (r = wl(r));
    let {
        pathname: c = "/",
        search: f = "",
        hash: d = "",
        state: p = null,
        key: y = "default",
      } = r,
      g = x.useMemo(() => {
        let w = K0(c, l);
        return w == null
          ? null
          : {
              location: { pathname: w, search: f, hash: d, state: p, key: y },
              navigationType: o,
            };
      }, [l, c, f, d, p, y, o]);
    return g == null
      ? null
      : x.createElement(
          Q0.Provider,
          { value: u },
          x.createElement(xl.Provider, { children: n, value: g })
        );
  }
  function qb(e) {
    let { children: t, location: n } = e;
    return Vb(Nc(t), n);
  }
  new Promise(() => {});
  function Nc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
      x.Children.forEach(e, (r, o) => {
        if (!x.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === x.Fragment) {
          n.push.apply(n, Nc(r.props.children, i));
          return;
        }
        r.type !== Ac && ct(!1), !r.props.index || !r.props.children || ct(!1);
        let s = {
          id: r.props.id || i.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary:
            r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy,
        };
        r.props.children && (s.children = Nc(r.props.children, i)), n.push(s);
      }),
      n
    );
  }
  /**
   * React Router DOM v6.27.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ const Zb = "6";
  try {
    window.__reactRouterVersion = Zb;
  } catch {}
  const Jb = "startTransition",
    Ap = Wx[Jb];
  function ek(e) {
    let { basename: t, children: n, future: r, window: o } = e,
      i = x.useRef();
    i.current == null && (i.current = yb({ window: o, v5Compat: !0 }));
    let s = i.current,
      [a, l] = x.useState({ action: s.action, location: s.location }),
      { v7_startTransition: u } = r || {},
      c = x.useCallback(
        (f) => {
          u && Ap ? Ap(() => l(f)) : l(f);
        },
        [l, u]
      );
    return (
      x.useLayoutEffect(() => s.listen(c), [s, c]),
      x.createElement(Xb, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s,
        future: r,
      })
    );
  }
  var Np;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState");
  })(Np || (Np = {}));
  var Dp;
  (function (e) {
    (e.UseFetcher = "useFetcher"),
      (e.UseFetchers = "useFetchers"),
      (e.UseScrollRestoration = "useScrollRestoration");
  })(Dp || (Dp = {}));
  const af = x.createContext({});
  function lf(e) {
    const t = x.useRef(null);
    return t.current === null && (t.current = e()), t.current;
  }
  const Cl = x.createContext(null),
    uf = x.createContext({
      transformPagePoint: (e) => e,
      isStatic: !1,
      reducedMotion: "never",
    });
  class tk extends x.Component {
    getSnapshotBeforeUpdate(t) {
      const n = this.props.childRef.current;
      if (n && t.isPresent && !this.props.isPresent) {
        const r = n.offsetParent,
          o = (r instanceof HTMLElement && r.offsetWidth) || 0,
          i = this.props.sizeRef.current;
        (i.height = n.offsetHeight || 0),
          (i.width = n.offsetWidth || 0),
          (i.top = n.offsetTop),
          (i.left = n.offsetLeft),
          (i.right = o - i.width - i.left);
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  }
  function nk({ children: e, isPresent: t, anchorX: n }) {
    const r = x.useId(),
      o = x.useRef(null),
      i = x.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
      { nonce: s } = x.useContext(uf);
    return (
      x.useInsertionEffect(() => {
        const { width: a, height: l, top: u, left: c, right: f } = i.current;
        if (t || !o.current || !a || !l) return;
        const d = n === "left" ? `left: ${c}` : `right: ${f}`;
        o.current.dataset.motionPopId = r;
        const p = document.createElement("style");
        return (
          s && (p.nonce = s),
          document.head.appendChild(p),
          p.sheet &&
            p.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${d}px !important;
            top: ${u}px !important;
          }
        `),
          () => {
            document.head.removeChild(p);
          }
        );
      }, [t]),
      k.jsx(tk, {
        isPresent: t,
        childRef: o,
        sizeRef: i,
        children: x.cloneElement(e, { ref: o }),
      })
    );
  }
  const rk = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: o,
    presenceAffectsLayout: i,
    mode: s,
    anchorX: a,
  }) => {
    const l = lf(ok),
      u = x.useId(),
      c = x.useCallback(
        (d) => {
          l.set(d, !0);
          for (const p of l.values()) if (!p) return;
          r && r();
        },
        [l, r]
      ),
      f = x.useMemo(
        () => ({
          id: u,
          initial: t,
          isPresent: n,
          custom: o,
          onExitComplete: c,
          register: (d) => (l.set(d, !1), () => l.delete(d)),
        }),
        i ? [Math.random(), c] : [n, c]
      );
    return (
      x.useMemo(() => {
        l.forEach((d, p) => l.set(p, !1));
      }, [n]),
      x.useEffect(() => {
        !n && !l.size && r && r();
      }, [n]),
      s === "popLayout" &&
        (e = k.jsx(nk, { isPresent: n, anchorX: a, children: e })),
      k.jsx(Cl.Provider, { value: f, children: e })
    );
  };
  function ok() {
    return new Map();
  }
  function q0(e = !0) {
    const t = x.useContext(Cl);
    if (t === null) return [!0, null];
    const { isPresent: n, onExitComplete: r, register: o } = t,
      i = x.useId();
    x.useEffect(() => {
      if (e) return o(i);
    }, [e]);
    const s = x.useCallback(() => e && r && r(i), [i, r, e]);
    return !n && r ? [!1, s] : [!0];
  }
  const Vs = (e) => e.key || "";
  function Lp(e) {
    const t = [];
    return (
      x.Children.forEach(e, (n) => {
        x.isValidElement(n) && t.push(n);
      }),
      t
    );
  }
  const cf = typeof window < "u",
    Z0 = cf ? x.useLayoutEffect : x.useEffect,
    Op = ({
      children: e,
      custom: t,
      initial: n = !0,
      onExitComplete: r,
      presenceAffectsLayout: o = !0,
      mode: i = "sync",
      propagate: s = !1,
      anchorX: a = "left",
    }) => {
      const [l, u] = q0(s),
        c = x.useMemo(() => Lp(e), [e]),
        f = s && !l ? [] : c.map(Vs),
        d = x.useRef(!0),
        p = x.useRef(c),
        y = lf(() => new Map()),
        [g, w] = x.useState(c),
        [h, m] = x.useState(c);
      Z0(() => {
        (d.current = !1), (p.current = c);
        for (let E = 0; E < h.length; E++) {
          const T = Vs(h[E]);
          f.includes(T) ? y.delete(T) : y.get(T) !== !0 && y.set(T, !1);
        }
      }, [h, f.length, f.join("-")]);
      const v = [];
      if (c !== g) {
        let E = [...c];
        for (let T = 0; T < h.length; T++) {
          const M = h[T],
            b = Vs(M);
          f.includes(b) || (E.splice(T, 0, M), v.push(M));
        }
        return i === "wait" && v.length && (E = v), m(Lp(E)), w(c), null;
      }
      const { forceRender: C } = x.useContext(af);
      return k.jsx(k.Fragment, {
        children: h.map((E) => {
          const T = Vs(E),
            M = s && !l ? !1 : c === h || f.includes(T),
            b = () => {
              if (y.has(T)) y.set(T, !0);
              else return;
              let j = !0;
              y.forEach((_) => {
                _ || (j = !1);
              }),
                j &&
                  (C == null || C(),
                  m(p.current),
                  s && (u == null || u()),
                  r && r());
            };
          return k.jsx(
            rk,
            {
              isPresent: M,
              initial: !d.current || n ? void 0 : !1,
              custom: t,
              presenceAffectsLayout: o,
              mode: i,
              onExitComplete: M ? void 0 : b,
              anchorX: a,
              children: E,
            },
            T
          );
        }),
      });
    },
    xt = (e) => e;
  let Dc = xt;
  function df(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
  }
  const Lo = (e, t, n) => {
      const r = t - e;
      return r === 0 ? 1 : (n - e) / r;
    },
    gn = (e) => e * 1e3,
    yn = (e) => e / 1e3,
    ik = { skipAnimations: !1, useManualTiming: !1 },
    Bs = [
      "read",
      "resolveKeyframes",
      "update",
      "preRender",
      "render",
      "postRender",
    ],
    _p = { value: null, addProjectionMetrics: null };
  function sk(e, t) {
    let n = new Set(),
      r = new Set(),
      o = !1,
      i = !1;
    const s = new WeakSet();
    let a = { delta: 0, timestamp: 0, isProcessing: !1 },
      l = 0;
    function u(f) {
      s.has(f) && (c.schedule(f), e()), l++, f(a);
    }
    const c = {
      schedule: (f, d = !1, p = !1) => {
        const g = p && o ? n : r;
        return d && s.add(f), g.has(f) || g.add(f), f;
      },
      cancel: (f) => {
        r.delete(f), s.delete(f);
      },
      process: (f) => {
        if (((a = f), o)) {
          i = !0;
          return;
        }
        (o = !0),
          ([n, r] = [r, n]),
          n.forEach(u),
          t && _p.value && _p.value.frameloop[t].push(l),
          (l = 0),
          n.clear(),
          (o = !1),
          i && ((i = !1), c.process(f));
      },
    };
    return c;
  }
  const ak = 40;
  function J0(e, t) {
    let n = !1,
      r = !0;
    const o = { delta: 0, timestamp: 0, isProcessing: !1 },
      i = () => (n = !0),
      s = Bs.reduce((h, m) => ((h[m] = sk(i, t ? m : void 0)), h), {}),
      {
        read: a,
        resolveKeyframes: l,
        update: u,
        preRender: c,
        render: f,
        postRender: d,
      } = s,
      p = () => {
        const h = performance.now();
        (n = !1),
          (o.delta = r ? 1e3 / 60 : Math.max(Math.min(h - o.timestamp, ak), 1)),
          (o.timestamp = h),
          (o.isProcessing = !0),
          a.process(o),
          l.process(o),
          u.process(o),
          c.process(o),
          f.process(o),
          d.process(o),
          (o.isProcessing = !1),
          n && t && ((r = !1), e(p));
      },
      y = () => {
        (n = !0), (r = !0), o.isProcessing || e(p);
      };
    return {
      schedule: Bs.reduce((h, m) => {
        const v = s[m];
        return (
          (h[m] = (C, E = !1, T = !1) => (n || y(), v.schedule(C, E, T))), h
        );
      }, {}),
      cancel: (h) => {
        for (let m = 0; m < Bs.length; m++) s[Bs[m]].cancel(h);
      },
      state: o,
      steps: s,
    };
  }
  const {
      schedule: fe,
      cancel: sr,
      state: Ve,
      steps: cu,
    } = J0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : xt, !0),
    ew = x.createContext({ strict: !1 }),
    Ip = {
      animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
      ],
      exit: ["exit"],
      drag: ["drag", "dragControls"],
      focus: ["whileFocus"],
      hover: ["whileHover", "onHoverStart", "onHoverEnd"],
      tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
      pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
      inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
      layout: ["layout", "layoutId"],
    },
    Oo = {};
  for (const e in Ip) Oo[e] = { isEnabled: (t) => Ip[e].some((n) => !!t[n]) };
  function lk(e) {
    for (const t in e) Oo[t] = { ...Oo[t], ...e[t] };
  }
  const uk = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
  function Ba(e) {
    return (
      e.startsWith("while") ||
      (e.startsWith("drag") && e !== "draggable") ||
      e.startsWith("layout") ||
      e.startsWith("onTap") ||
      e.startsWith("onPan") ||
      e.startsWith("onLayout") ||
      uk.has(e)
    );
  }
  let tw = (e) => !Ba(e);
  function ck(e) {
    e && (tw = (t) => (t.startsWith("on") ? !Ba(t) : e(t)));
  }
  try {
    ck(require("@emotion/is-prop-valid").default);
  } catch {}
  function dk(e, t, n) {
    const r = {};
    for (const o in e)
      (o === "values" && typeof e.values == "object") ||
        ((tw(o) ||
          (n === !0 && Ba(o)) ||
          (!t && !Ba(o)) ||
          (e.draggable && o.startsWith("onDrag"))) &&
          (r[o] = e[o]));
    return r;
  }
  function fk(e) {
    if (typeof Proxy > "u") return e;
    const t = new Map(),
      n = (...r) => e(...r);
    return new Proxy(n, {
      get: (r, o) =>
        o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o)),
    });
  }
  const El = x.createContext({});
  function Pl(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function";
  }
  function Ui(e) {
    return typeof e == "string" || Array.isArray(e);
  }
  const ff = [
      "animate",
      "whileInView",
      "whileFocus",
      "whileHover",
      "whileTap",
      "whileDrag",
      "exit",
    ],
    hf = ["initial", ...ff];
  function Tl(e) {
    return Pl(e.animate) || hf.some((t) => Ui(e[t]));
  }
  function nw(e) {
    return !!(Tl(e) || e.variants);
  }
  function hk(e, t) {
    if (Tl(e)) {
      const { initial: n, animate: r } = e;
      return {
        initial: n === !1 || Ui(n) ? n : void 0,
        animate: Ui(r) ? r : void 0,
      };
    }
    return e.inherit !== !1 ? t : {};
  }
  function pk(e) {
    const { initial: t, animate: n } = hk(e, x.useContext(El));
    return x.useMemo(() => ({ initial: t, animate: n }), [jp(t), jp(n)]);
  }
  function jp(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const mk = Symbol.for("motionComponentSymbol");
  function Jr(e) {
    return (
      e &&
      typeof e == "object" &&
      Object.prototype.hasOwnProperty.call(e, "current")
    );
  }
  function gk(e, t, n) {
    return x.useCallback(
      (r) => {
        r && e.onMount && e.onMount(r),
          t && (r ? t.mount(r) : t.unmount()),
          n && (typeof n == "function" ? n(r) : Jr(n) && (n.current = r));
      },
      [t]
    );
  }
  const pf = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    yk = "framerAppearId",
    rw = "data-" + pf(yk),
    { schedule: mf, cancel: FA } = J0(queueMicrotask, !1),
    ow = x.createContext({});
  function vk(e, t, n, r, o) {
    var i, s;
    const { visualElement: a } = x.useContext(El),
      l = x.useContext(ew),
      u = x.useContext(Cl),
      c = x.useContext(uf).reducedMotion,
      f = x.useRef(null);
    (r = r || l.renderer),
      !f.current &&
        r &&
        (f.current = r(e, {
          visualState: t,
          parent: a,
          props: n,
          presenceContext: u,
          blockInitialAnimation: u ? u.initial === !1 : !1,
          reducedMotionConfig: c,
        }));
    const d = f.current,
      p = x.useContext(ow);
    d &&
      !d.projection &&
      o &&
      (d.type === "html" || d.type === "svg") &&
      wk(f.current, n, o, p);
    const y = x.useRef(!1);
    x.useInsertionEffect(() => {
      d && y.current && d.update(n, u);
    });
    const g = n[rw],
      w = x.useRef(
        !!g &&
          !(
            !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
            i.call(window, g)
          ) &&
          ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
            ? void 0
            : s.call(window, g))
      );
    return (
      Z0(() => {
        d &&
          ((y.current = !0),
          (window.MotionIsMounted = !0),
          d.updateFeatures(),
          mf.render(d.render),
          w.current && d.animationState && d.animationState.animateChanges());
      }),
      x.useEffect(() => {
        d &&
          (!w.current && d.animationState && d.animationState.animateChanges(),
          w.current &&
            (queueMicrotask(() => {
              var h;
              (h = window.MotionHandoffMarkAsComplete) === null ||
                h === void 0 ||
                h.call(window, g);
            }),
            (w.current = !1)));
      }),
      d
    );
  }
  function wk(e, t, n, r) {
    const {
      layoutId: o,
      layout: i,
      drag: s,
      dragConstraints: a,
      layoutScroll: l,
      layoutRoot: u,
    } = t;
    (e.projection = new n(
      e.latestValues,
      t["data-framer-portal-id"] ? void 0 : iw(e.parent)
    )),
      e.projection.setOptions({
        layoutId: o,
        layout: i,
        alwaysMeasureLayout: !!s || (a && Jr(a)),
        visualElement: e,
        animationType: typeof i == "string" ? i : "both",
        initialPromotionConfig: r,
        layoutScroll: l,
        layoutRoot: u,
      });
  }
  function iw(e) {
    if (e)
      return e.options.allowProjection !== !1 ? e.projection : iw(e.parent);
  }
  function xk({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: o,
  }) {
    var i, s;
    e && lk(e);
    function a(u, c) {
      let f;
      const d = { ...x.useContext(uf), ...u, layoutId: Sk(u) },
        { isStatic: p } = d,
        y = pk(u),
        g = r(u, p);
      if (!p && cf) {
        Ck();
        const w = Ek(d);
        (f = w.MeasureLayout),
          (y.visualElement = vk(o, g, d, t, w.ProjectionNode));
      }
      return k.jsxs(El.Provider, {
        value: y,
        children: [
          f && y.visualElement
            ? k.jsx(f, { visualElement: y.visualElement, ...d })
            : null,
          n(o, u, gk(g, y.visualElement, c), g, p, y.visualElement),
        ],
      });
    }
    a.displayName = `motion.${
      typeof o == "string"
        ? o
        : `create(${
            (s = (i = o.displayName) !== null && i !== void 0 ? i : o.name) !==
              null && s !== void 0
              ? s
              : ""
          })`
    }`;
    const l = x.forwardRef(a);
    return (l[mk] = o), l;
  }
  function Sk({ layoutId: e }) {
    const t = x.useContext(af).id;
    return t && e !== void 0 ? t + "-" + e : e;
  }
  function Ck(e, t) {
    x.useContext(ew).strict;
  }
  function Ek(e) {
    const { drag: t, layout: n } = Oo;
    if (!t && !n) return {};
    const r = { ...t, ...n };
    return {
      MeasureLayout:
        (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
          ? r.MeasureLayout
          : void 0,
      ProjectionNode: r.ProjectionNode,
    };
  }
  const sw = (e) => (t) => typeof t == "string" && t.startsWith(e),
    gf = sw("--"),
    Pk = sw("var(--"),
    yf = (e) => (Pk(e) ? Tk.test(e.split("/*")[0].trim()) : !1),
    Tk =
      /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Wi = {};
  function bk(e) {
    for (const t in e) (Wi[t] = e[t]), gf(t) && (Wi[t].isCSSVariable = !0);
  }
  const $o = [
      "transformPerspective",
      "x",
      "y",
      "z",
      "translateX",
      "translateY",
      "translateZ",
      "scale",
      "scaleX",
      "scaleY",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "skew",
      "skewX",
      "skewY",
    ],
    jr = new Set($o);
  function aw(e, { layout: t, layoutId: n }) {
    return (
      jr.has(e) ||
      e.startsWith("origin") ||
      ((t || n !== void 0) && (!!Wi[e] || e === "opacity"))
    );
  }
  const Qe = (e) => !!(e && e.getVelocity),
    lw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
    Pn = (e, t, n) => (n > t ? t : n < e ? e : n),
    Uo = {
      test: (e) => typeof e == "number",
      parse: parseFloat,
      transform: (e) => e,
    },
    Hi = { ...Uo, transform: (e) => Pn(0, 1, e) },
    zs = { ...Uo, default: 1 },
    is = (e) => ({
      test: (t) =>
        typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
      parse: parseFloat,
      transform: (t) => `${t}${e}`,
    }),
    Ln = is("deg"),
    nn = is("%"),
    X = is("px"),
    kk = is("vh"),
    Mk = is("vw"),
    Fp = {
      ...nn,
      parse: (e) => nn.parse(e) / 100,
      transform: (e) => nn.transform(e * 100),
    },
    Rk = {
      borderWidth: X,
      borderTopWidth: X,
      borderRightWidth: X,
      borderBottomWidth: X,
      borderLeftWidth: X,
      borderRadius: X,
      radius: X,
      borderTopLeftRadius: X,
      borderTopRightRadius: X,
      borderBottomRightRadius: X,
      borderBottomLeftRadius: X,
      width: X,
      maxWidth: X,
      height: X,
      maxHeight: X,
      top: X,
      right: X,
      bottom: X,
      left: X,
      padding: X,
      paddingTop: X,
      paddingRight: X,
      paddingBottom: X,
      paddingLeft: X,
      margin: X,
      marginTop: X,
      marginRight: X,
      marginBottom: X,
      marginLeft: X,
      backgroundPositionX: X,
      backgroundPositionY: X,
    },
    Ak = {
      rotate: Ln,
      rotateX: Ln,
      rotateY: Ln,
      rotateZ: Ln,
      scale: zs,
      scaleX: zs,
      scaleY: zs,
      scaleZ: zs,
      skew: Ln,
      skewX: Ln,
      skewY: Ln,
      distance: X,
      translateX: X,
      translateY: X,
      translateZ: X,
      x: X,
      y: X,
      z: X,
      perspective: X,
      transformPerspective: X,
      opacity: Hi,
      originX: Fp,
      originY: Fp,
      originZ: X,
    },
    Vp = { ...Uo, transform: Math.round },
    vf = {
      ...Rk,
      ...Ak,
      zIndex: Vp,
      size: X,
      fillOpacity: Hi,
      strokeOpacity: Hi,
      numOctaves: Vp,
    },
    Nk = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective",
    },
    Dk = $o.length;
  function Lk(e, t, n) {
    let r = "",
      o = !0;
    for (let i = 0; i < Dk; i++) {
      const s = $o[i],
        a = e[s];
      if (a === void 0) continue;
      let l = !0;
      if (
        (typeof a == "number"
          ? (l = a === (s.startsWith("scale") ? 1 : 0))
          : (l = parseFloat(a) === 0),
        !l || n)
      ) {
        const u = lw(a, vf[s]);
        if (!l) {
          o = !1;
          const c = Nk[s] || s;
          r += `${c}(${u}) `;
        }
        n && (t[s] = u);
      }
    }
    return (r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r;
  }
  function wf(e, t, n) {
    const { style: r, vars: o, transformOrigin: i } = e;
    let s = !1,
      a = !1;
    for (const l in t) {
      const u = t[l];
      if (jr.has(l)) {
        s = !0;
        continue;
      } else if (gf(l)) {
        o[l] = u;
        continue;
      } else {
        const c = lw(u, vf[l]);
        l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
      }
    }
    if (
      (t.transform ||
        (s || n
          ? (r.transform = Lk(t, e.transform, n))
          : r.transform && (r.transform = "none")),
      a)
    ) {
      const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
      r.transformOrigin = `${l} ${u} ${c}`;
    }
  }
  const xf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
  });
  function uw(e, t, n) {
    for (const r in t) !Qe(t[r]) && !aw(r, n) && (e[r] = t[r]);
  }
  function Ok({ transformTemplate: e }, t) {
    return x.useMemo(() => {
      const n = xf();
      return wf(n, t, e), Object.assign({}, n.vars, n.style);
    }, [t]);
  }
  function _k(e, t) {
    const n = e.style || {},
      r = {};
    return uw(r, n, e), Object.assign(r, Ok(e, t)), r;
  }
  function Ik(e, t) {
    const n = {},
      r = _k(e, t);
    return (
      e.drag &&
        e.dragListener !== !1 &&
        ((n.draggable = !1),
        (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
        (r.touchAction =
          e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
      e.tabIndex === void 0 &&
        (e.onTap || e.onTapStart || e.whileTap) &&
        (n.tabIndex = 0),
      (n.style = r),
      n
    );
  }
  const jk = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
  ];
  function Sf(e) {
    return typeof e != "string" || e.includes("-")
      ? !1
      : !!(jk.indexOf(e) > -1 || /[A-Z]/u.test(e));
  }
  const Fk = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    Vk = { offset: "strokeDashoffset", array: "strokeDasharray" };
  function Bk(e, t, n = 1, r = 0, o = !0) {
    e.pathLength = 1;
    const i = o ? Fk : Vk;
    e[i.offset] = X.transform(-r);
    const s = X.transform(t),
      a = X.transform(n);
    e[i.array] = `${s} ${a}`;
  }
  function Bp(e, t, n) {
    return typeof e == "string" ? e : X.transform(t + n * e);
  }
  function zk(e, t, n) {
    const r = Bp(t, e.x, e.width),
      o = Bp(n, e.y, e.height);
    return `${r} ${o}`;
  }
  function Cf(
    e,
    {
      attrX: t,
      attrY: n,
      attrScale: r,
      originX: o,
      originY: i,
      pathLength: s,
      pathSpacing: a = 1,
      pathOffset: l = 0,
      ...u
    },
    c,
    f
  ) {
    if ((wf(e, u, f), c)) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return;
    }
    (e.attrs = e.style), (e.style = {});
    const { attrs: d, style: p, dimensions: y } = e;
    d.transform && (y && (p.transform = d.transform), delete d.transform),
      y &&
        (o !== void 0 || i !== void 0 || p.transform) &&
        (p.transformOrigin = zk(
          y,
          o !== void 0 ? o : 0.5,
          i !== void 0 ? i : 0.5
        )),
      t !== void 0 && (d.x = t),
      n !== void 0 && (d.y = n),
      r !== void 0 && (d.scale = r),
      s !== void 0 && Bk(d, s, a, l, !1);
  }
  const cw = () => ({ ...xf(), attrs: {} }),
    Ef = (e) => typeof e == "string" && e.toLowerCase() === "svg";
  function $k(e, t, n, r) {
    const o = x.useMemo(() => {
      const i = cw();
      return (
        Cf(i, t, Ef(r), e.transformTemplate),
        { ...i.attrs, style: { ...i.style } }
      );
    }, [t]);
    if (e.style) {
      const i = {};
      uw(i, e.style, e), (o.style = { ...i, ...o.style });
    }
    return o;
  }
  function Uk(e = !1) {
    return (n, r, o, { latestValues: i }, s) => {
      const l = (Sf(n) ? $k : Ik)(r, i, s, n),
        u = dk(r, typeof n == "string", e),
        c = n !== x.Fragment ? { ...u, ...l, ref: o } : {},
        { children: f } = r,
        d = x.useMemo(() => (Qe(f) ? f.get() : f), [f]);
      return x.createElement(n, { ...c, children: d });
    };
  }
  function zp(e) {
    const t = [{}, {}];
    return (
      e == null ||
        e.values.forEach((n, r) => {
          (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
        }),
      t
    );
  }
  function Pf(e, t, n, r) {
    if (typeof t == "function") {
      const [o, i] = zp(r);
      t = t(n !== void 0 ? n : e.custom, o, i);
    }
    if (
      (typeof t == "string" && (t = e.variants && e.variants[t]),
      typeof t == "function")
    ) {
      const [o, i] = zp(r);
      t = t(n !== void 0 ? n : e.custom, o, i);
    }
    return t;
  }
  const Lc = (e) => Array.isArray(e),
    Wk = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
    Hk = (e) => (Lc(e) ? e[e.length - 1] || 0 : e);
  function ia(e) {
    const t = Qe(e) ? e.get() : e;
    return Wk(t) ? t.toValue() : t;
  }
  function Kk(
    { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
    r,
    o,
    i
  ) {
    const s = { latestValues: Gk(r, o, i, e), renderState: t() };
    return (
      n &&
        ((s.onMount = (a) => n({ props: r, current: a, ...s })),
        (s.onUpdate = (a) => n(a))),
      s
    );
  }
  const dw = (e) => (t, n) => {
    const r = x.useContext(El),
      o = x.useContext(Cl),
      i = () => Kk(e, t, r, o);
    return n ? i() : lf(i);
  };
  function Gk(e, t, n, r) {
    const o = {},
      i = r(e, {});
    for (const d in i) o[d] = ia(i[d]);
    let { initial: s, animate: a } = e;
    const l = Tl(e),
      u = nw(e);
    t &&
      u &&
      !l &&
      e.inherit !== !1 &&
      (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? a : s;
    if (f && typeof f != "boolean" && !Pl(f)) {
      const d = Array.isArray(f) ? f : [f];
      for (let p = 0; p < d.length; p++) {
        const y = Pf(e, d[p]);
        if (y) {
          const { transitionEnd: g, transition: w, ...h } = y;
          for (const m in h) {
            let v = h[m];
            if (Array.isArray(v)) {
              const C = c ? v.length - 1 : 0;
              v = v[C];
            }
            v !== null && (o[m] = v);
          }
          for (const m in g) o[m] = g[m];
        }
      }
    }
    return o;
  }
  function Tf(e, t, n) {
    var r;
    const { style: o } = e,
      i = {};
    for (const s in o)
      (Qe(o[s]) ||
        (t.style && Qe(t.style[s])) ||
        aw(s, e) ||
        ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
          ? void 0
          : r.liveStyle) !== void 0) &&
        (i[s] = o[s]);
    return i;
  }
  const Qk = {
    useVisualState: dw({
      scrapeMotionValuesFromProps: Tf,
      createRenderState: xf,
    }),
  };
  function fw(e, t) {
    try {
      t.dimensions =
        typeof e.getBBox == "function"
          ? e.getBBox()
          : e.getBoundingClientRect();
    } catch {
      t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
    }
  }
  function hw(e, { style: t, vars: n }, r, o) {
    Object.assign(e.style, t, o && o.getProjectionStyles(r));
    for (const i in n) e.style.setProperty(i, n[i]);
  }
  const pw = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]);
  function mw(e, t, n, r) {
    hw(e, t, void 0, r);
    for (const o in t.attrs) e.setAttribute(pw.has(o) ? o : pf(o), t.attrs[o]);
  }
  function gw(e, t, n) {
    const r = Tf(e, t, n);
    for (const o in e)
      if (Qe(e[o]) || Qe(t[o])) {
        const i =
          $o.indexOf(o) !== -1
            ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
            : o;
        r[i] = e[o];
      }
    return r;
  }
  const $p = ["x", "y", "width", "height", "cx", "cy", "r"],
    Yk = {
      useVisualState: dw({
        scrapeMotionValuesFromProps: gw,
        createRenderState: cw,
        onUpdate: ({
          props: e,
          prevProps: t,
          current: n,
          renderState: r,
          latestValues: o,
        }) => {
          if (!n) return;
          let i = !!e.drag;
          if (!i) {
            for (const a in o)
              if (jr.has(a)) {
                i = !0;
                break;
              }
          }
          if (!i) return;
          let s = !t;
          if (t)
            for (let a = 0; a < $p.length; a++) {
              const l = $p[a];
              e[l] !== t[l] && (s = !0);
            }
          s &&
            fe.read(() => {
              fw(n, r),
                fe.render(() => {
                  Cf(r, o, Ef(n.tagName), e.transformTemplate), mw(n, r);
                });
            });
        },
      }),
    };
  function Xk(e, t) {
    return function (
      r,
      { forwardMotionProps: o } = { forwardMotionProps: !1 }
    ) {
      const s = {
        ...(Sf(r) ? Yk : Qk),
        preloadedFeatures: e,
        useRender: Uk(o),
        createVisualElement: t,
        Component: r,
      };
      return xk(s);
    };
  }
  function Ki(e, t, n) {
    const r = e.getProps();
    return Pf(r, t, n !== void 0 ? n : r.custom, e);
  }
  const qk = df(() => window.ScrollTimeline !== void 0);
  class Zk {
    constructor(t) {
      (this.stop = () => this.runAll("stop")),
        (this.animations = t.filter(Boolean));
    }
    get finished() {
      return Promise.all(
        this.animations.map((t) => ("finished" in t ? t.finished : t))
      );
    }
    getAll(t) {
      return this.animations[0][t];
    }
    setAll(t, n) {
      for (let r = 0; r < this.animations.length; r++)
        this.animations[r][t] = n;
    }
    attachTimeline(t, n) {
      const r = this.animations.map((o) => {
        if (qk() && o.attachTimeline) return o.attachTimeline(t);
        if (typeof n == "function") return n(o);
      });
      return () => {
        r.forEach((o, i) => {
          o && o(), this.animations[i].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(t) {
      this.setAll("time", t);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(t) {
      this.setAll("speed", t);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let t = 0;
      for (let n = 0; n < this.animations.length; n++)
        t = Math.max(t, this.animations[n].duration);
      return t;
    }
    runAll(t) {
      this.animations.forEach((n) => n[t]());
    }
    flatten() {
      this.runAll("flatten");
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  }
  class Jk extends Zk {
    then(t, n) {
      return Promise.all(this.animations).then(t).catch(n);
    }
  }
  function bf(e, t) {
    return e ? e[t] || e.default || e : void 0;
  }
  const Oc = 2e4;
  function yw(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Oc; ) (t += n), (r = e.next(t));
    return t >= Oc ? 1 / 0 : t;
  }
  function kf(e) {
    return typeof e == "function";
  }
  function Up(e, t) {
    (e.timeline = t), (e.onfinish = null);
  }
  const Mf = (e) => Array.isArray(e) && typeof e[0] == "number",
    eM = { linearEasing: void 0 };
  function tM(e, t) {
    const n = df(e);
    return () => {
      var r;
      return (r = eM[t]) !== null && r !== void 0 ? r : n();
    };
  }
  const za = tM(() => {
      try {
        document
          .createElement("div")
          .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch {
        return !1;
      }
      return !0;
    }, "linearEasing"),
    vw = (e, t, n = 10) => {
      let r = "";
      const o = Math.max(Math.round(t / n), 2);
      for (let i = 0; i < o; i++) r += e(Lo(0, o - 1, i)) + ", ";
      return `linear(${r.substring(0, r.length - 2)})`;
    };
  function ww(e) {
    return !!(
      (typeof e == "function" && za()) ||
      !e ||
      (typeof e == "string" && (e in _c || za())) ||
      Mf(e) ||
      (Array.isArray(e) && e.every(ww))
    );
  }
  const ai = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    _c = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: ai([0, 0.65, 0.55, 1]),
      circOut: ai([0.55, 0, 1, 0.45]),
      backIn: ai([0.31, 0.01, 0.66, -0.59]),
      backOut: ai([0.33, 1.53, 0.69, 0.99]),
    };
  function xw(e, t) {
    if (e)
      return typeof e == "function" && za()
        ? vw(e, t)
        : Mf(e)
        ? ai(e)
        : Array.isArray(e)
        ? e.map((n) => xw(n, t) || _c.easeOut)
        : _c[e];
  }
  const Ot = { x: !1, y: !1 };
  function Sw() {
    return Ot.x || Ot.y;
  }
  function nM(e, t, n) {
    var r;
    if (e instanceof EventTarget) return [e];
    if (typeof e == "string") {
      let o = document;
      const i =
        (r = void 0) !== null && r !== void 0 ? r : o.querySelectorAll(e);
      return i ? Array.from(i) : [];
    }
    return Array.from(e);
  }
  function Cw(e, t) {
    const n = nM(e),
      r = new AbortController(),
      o = { passive: !0, ...t, signal: r.signal };
    return [n, o, () => r.abort()];
  }
  function Wp(e) {
    return !(e.pointerType === "touch" || Sw());
  }
  function rM(e, t, n = {}) {
    const [r, o, i] = Cw(e, n),
      s = (a) => {
        if (!Wp(a)) return;
        const { target: l } = a,
          u = t(l, a);
        if (typeof u != "function" || !l) return;
        const c = (f) => {
          Wp(f) && (u(f), l.removeEventListener("pointerleave", c));
        };
        l.addEventListener("pointerleave", c, o);
      };
    return (
      r.forEach((a) => {
        a.addEventListener("pointerenter", s, o);
      }),
      i
    );
  }
  function $a(e, t) {
    const n = `${t}PointerCapture`;
    if (e.target instanceof Element && n in e.target && e.pointerId !== void 0)
      try {
        e.target[n](e.pointerId);
      } catch {}
  }
  const Ew = (e, t) => (t ? (e === t ? !0 : Ew(e, t.parentElement)) : !1),
    Rf = (e) =>
      e.pointerType === "mouse"
        ? typeof e.button != "number" || e.button <= 0
        : e.isPrimary !== !1,
    oM = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
  function iM(e) {
    return oM.has(e.tagName) || e.tabIndex !== -1;
  }
  const li = new WeakSet();
  function Hp(e) {
    return (t) => {
      t.key === "Enter" && e(t);
    };
  }
  function du(e, t) {
    e.dispatchEvent(
      new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
    );
  }
  const sM = (e, t) => {
    const n = e.currentTarget;
    if (!n) return;
    const r = Hp(() => {
      if (li.has(n)) return;
      du(n, "down");
      const o = Hp(() => {
          du(n, "up");
        }),
        i = () => du(n, "cancel");
      n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t);
    });
    n.addEventListener("keydown", r, t),
      n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
  };
  function Kp(e) {
    return Rf(e) && !Sw();
  }
  function aM(e, t, n = {}) {
    const [r, o, i] = Cw(e, n),
      s = (a) => {
        const l = a.currentTarget;
        if (!l || !Kp(a) || li.has(l)) return;
        li.add(l), $a(a, "set");
        const u = t(l, a),
          c = (p, y) => {
            l.removeEventListener("pointerup", f),
              l.removeEventListener("pointercancel", d),
              $a(p, "release"),
              !(!Kp(p) || !li.has(l)) &&
                (li.delete(l), typeof u == "function" && u(p, { success: y }));
          },
          f = (p) => {
            (
              p.isTrusted
                ? lM(
                    p,
                    l instanceof Element
                      ? l.getBoundingClientRect()
                      : {
                          left: 0,
                          top: 0,
                          right: window.innerWidth,
                          bottom: window.innerHeight,
                        }
                  )
                : !1
            )
              ? c(p, !1)
              : c(p, !(l instanceof Element) || Ew(l, p.target));
          },
          d = (p) => {
            c(p, !1);
          };
        l.addEventListener("pointerup", f, o),
          l.addEventListener("pointercancel", d, o),
          l.addEventListener("lostpointercapture", d, o);
      };
    return (
      r.forEach((a) => {
        a = n.useGlobalTarget ? window : a;
        let l = !1;
        a instanceof HTMLElement &&
          ((l = !0),
          !iM(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0)),
          a.addEventListener("pointerdown", s, o),
          l && a.addEventListener("focus", (u) => sM(u, o), o);
      }),
      i
    );
  }
  function lM(e, t) {
    return (
      e.clientX < t.left ||
      e.clientX > t.right ||
      e.clientY < t.top ||
      e.clientY > t.bottom
    );
  }
  function uM(e) {
    return e === "x" || e === "y"
      ? Ot[e]
        ? null
        : ((Ot[e] = !0),
          () => {
            Ot[e] = !1;
          })
      : Ot.x || Ot.y
      ? null
      : ((Ot.x = Ot.y = !0),
        () => {
          Ot.x = Ot.y = !1;
        });
  }
  const Pw = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...$o,
  ]);
  let sa;
  function cM() {
    sa = void 0;
  }
  const rn = {
    now: () => (
      sa === void 0 &&
        rn.set(
          Ve.isProcessing || ik.useManualTiming
            ? Ve.timestamp
            : performance.now()
        ),
      sa
    ),
    set: (e) => {
      (sa = e), queueMicrotask(cM);
    },
  };
  function Af(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function Nf(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }
  class Df {
    constructor() {
      this.subscriptions = [];
    }
    add(t) {
      return Af(this.subscriptions, t), () => Nf(this.subscriptions, t);
    }
    notify(t, n, r) {
      const o = this.subscriptions.length;
      if (o)
        if (o === 1) this.subscriptions[0](t, n, r);
        else
          for (let i = 0; i < o; i++) {
            const s = this.subscriptions[i];
            s && s(t, n, r);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  function Tw(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const Gp = 30,
    dM = (e) => !isNaN(parseFloat(e));
  class fM {
    constructor(t, n = {}) {
      (this.version = "12.4.7"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (r, o = !0) => {
          const i = rn.now();
          this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(r),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            o &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(t),
        (this.owner = n.owner);
    }
    setCurrent(t) {
      (this.current = t),
        (this.updatedAt = rn.now()),
        this.canTrackVelocity === null &&
          t !== void 0 &&
          (this.canTrackVelocity = dM(this.current));
    }
    setPrevFrameValue(t = this.current) {
      (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(t) {
      return this.on("change", t);
    }
    on(t, n) {
      this.events[t] || (this.events[t] = new Df());
      const r = this.events[t].add(n);
      return t === "change"
        ? () => {
            r(),
              fe.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : r;
    }
    clearListeners() {
      for (const t in this.events) this.events[t].clear();
    }
    attach(t, n) {
      (this.passiveEffect = t), (this.stopPassiveEffect = n);
    }
    set(t, n = !0) {
      !n || !this.passiveEffect
        ? this.updateAndNotify(t, n)
        : this.passiveEffect(t, this.updateAndNotify);
    }
    setWithVelocity(t, n, r) {
      this.set(n),
        (this.prev = void 0),
        (this.prevFrameValue = t),
        (this.prevUpdatedAt = this.updatedAt - r);
    }
    jump(t, n = !0) {
      this.updateAndNotify(t),
        (this.prev = t),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      const t = rn.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        t - this.updatedAt > Gp
      )
        return 0;
      const n = Math.min(this.updatedAt - this.prevUpdatedAt, Gp);
      return Tw(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
    }
    start(t) {
      return (
        this.stop(),
        new Promise((n) => {
          (this.hasAnimated = !0),
            (this.animation = t(n)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function Gi(e, t) {
    return new fM(e, t);
  }
  function hM(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Gi(n));
  }
  function pM(e, t) {
    const n = Ki(e, t);
    let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
    i = { ...i, ...r };
    for (const s in i) {
      const a = Hk(i[s]);
      hM(e, s, a);
    }
  }
  function mM(e) {
    return !!(Qe(e) && e.add);
  }
  function Ic(e, t) {
    const n = e.getValue("willChange");
    if (mM(n)) return n.add(t);
  }
  function bw(e) {
    return e.props[rw];
  }
  const kw = (e, t, n) =>
      (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    gM = 1e-7,
    yM = 12;
  function vM(e, t, n, r, o) {
    let i,
      s,
      a = 0;
    do (s = t + (n - t) / 2), (i = kw(s, r, o) - e), i > 0 ? (n = s) : (t = s);
    while (Math.abs(i) > gM && ++a < yM);
    return s;
  }
  function ss(e, t, n, r) {
    if (e === t && n === r) return xt;
    const o = (i) => vM(i, 0, 1, e, n);
    return (i) => (i === 0 || i === 1 ? i : kw(o(i), t, r));
  }
  const Mw = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Rw = (e) => (t) => 1 - e(1 - t),
    Aw = ss(0.33, 1.53, 0.69, 0.99),
    Lf = Rw(Aw),
    Nw = Mw(Lf),
    Dw = (e) =>
      (e *= 2) < 1 ? 0.5 * Lf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
    Of = (e) => 1 - Math.sin(Math.acos(e)),
    Lw = Rw(Of),
    Ow = Mw(Of),
    _w = (e) => /^0[^.\s]+$/u.test(e);
  function wM(e) {
    return typeof e == "number"
      ? e === 0
      : e !== null
      ? e === "none" || e === "0" || _w(e)
      : !0;
  }
  const wi = (e) => Math.round(e * 1e5) / 1e5,
    _f = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function xM(e) {
    return e == null;
  }
  const SM =
      /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    If = (e, t) => (n) =>
      !!(
        (typeof n == "string" && SM.test(n) && n.startsWith(e)) ||
        (t && !xM(n) && Object.prototype.hasOwnProperty.call(n, t))
      ),
    Iw = (e, t, n) => (r) => {
      if (typeof r != "string") return r;
      const [o, i, s, a] = r.match(_f);
      return {
        [e]: parseFloat(o),
        [t]: parseFloat(i),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1,
      };
    },
    CM = (e) => Pn(0, 255, e),
    fu = { ...Uo, transform: (e) => Math.round(CM(e)) },
    wr = {
      test: If("rgb", "red"),
      parse: Iw("red", "green", "blue"),
      transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
        "rgba(" +
        fu.transform(e) +
        ", " +
        fu.transform(t) +
        ", " +
        fu.transform(n) +
        ", " +
        wi(Hi.transform(r)) +
        ")",
    };
  function EM(e) {
    let t = "",
      n = "",
      r = "",
      o = "";
    return (
      e.length > 5
        ? ((t = e.substring(1, 3)),
          (n = e.substring(3, 5)),
          (r = e.substring(5, 7)),
          (o = e.substring(7, 9)))
        : ((t = e.substring(1, 2)),
          (n = e.substring(2, 3)),
          (r = e.substring(3, 4)),
          (o = e.substring(4, 5)),
          (t += t),
          (n += n),
          (r += r),
          (o += o)),
      {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1,
      }
    );
  }
  const jc = { test: If("#"), parse: EM, transform: wr.transform },
    eo = {
      test: If("hsl", "hue"),
      parse: Iw("hue", "saturation", "lightness"),
      transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
        "hsla(" +
        Math.round(e) +
        ", " +
        nn.transform(wi(t)) +
        ", " +
        nn.transform(wi(n)) +
        ", " +
        wi(Hi.transform(r)) +
        ")",
    },
    Ke = {
      test: (e) => wr.test(e) || jc.test(e) || eo.test(e),
      parse: (e) =>
        wr.test(e) ? wr.parse(e) : eo.test(e) ? eo.parse(e) : jc.parse(e),
      transform: (e) =>
        typeof e == "string"
          ? e
          : e.hasOwnProperty("red")
          ? wr.transform(e)
          : eo.transform(e),
    },
    PM =
      /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function TM(e) {
    var t, n;
    return (
      isNaN(e) &&
      typeof e == "string" &&
      (((t = e.match(_f)) === null || t === void 0 ? void 0 : t.length) || 0) +
        (((n = e.match(PM)) === null || n === void 0 ? void 0 : n.length) ||
          0) >
        0
    );
  }
  const jw = "number",
    Fw = "color",
    bM = "var",
    kM = "var(",
    Qp = "${}",
    MM =
      /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function Qi(e) {
    const t = e.toString(),
      n = [],
      r = { color: [], number: [], var: [] },
      o = [];
    let i = 0;
    const a = t
      .replace(
        MM,
        (l) => (
          Ke.test(l)
            ? (r.color.push(i), o.push(Fw), n.push(Ke.parse(l)))
            : l.startsWith(kM)
            ? (r.var.push(i), o.push(bM), n.push(l))
            : (r.number.push(i), o.push(jw), n.push(parseFloat(l))),
          ++i,
          Qp
        )
      )
      .split(Qp);
    return { values: n, split: a, indexes: r, types: o };
  }
  function Vw(e) {
    return Qi(e).values;
  }
  function Bw(e) {
    const { split: t, types: n } = Qi(e),
      r = t.length;
    return (o) => {
      let i = "";
      for (let s = 0; s < r; s++)
        if (((i += t[s]), o[s] !== void 0)) {
          const a = n[s];
          a === jw
            ? (i += wi(o[s]))
            : a === Fw
            ? (i += Ke.transform(o[s]))
            : (i += o[s]);
        }
      return i;
    };
  }
  const RM = (e) => (typeof e == "number" ? 0 : e);
  function AM(e) {
    const t = Vw(e);
    return Bw(e)(t.map(RM));
  }
  const ar = {
      test: TM,
      parse: Vw,
      createTransformer: Bw,
      getAnimatableNone: AM,
    },
    NM = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function DM(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(_f) || [];
    if (!r) return e;
    const o = n.replace(r, "");
    let i = NM.has(t) ? 1 : 0;
    return r !== n && (i *= 100), t + "(" + i + o + ")";
  }
  const LM = /\b([a-z-]*)\(.*?\)/gu,
    Fc = {
      ...ar,
      getAnimatableNone: (e) => {
        const t = e.match(LM);
        return t ? t.map(DM).join(" ") : e;
      },
    },
    OM = {
      ...vf,
      color: Ke,
      backgroundColor: Ke,
      outlineColor: Ke,
      fill: Ke,
      stroke: Ke,
      borderColor: Ke,
      borderTopColor: Ke,
      borderRightColor: Ke,
      borderBottomColor: Ke,
      borderLeftColor: Ke,
      filter: Fc,
      WebkitFilter: Fc,
    },
    jf = (e) => OM[e];
  function zw(e, t) {
    let n = jf(e);
    return (
      n !== Fc && (n = ar),
      n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
    );
  }
  const _M = new Set(["auto", "none", "0"]);
  function IM(e, t, n) {
    let r = 0,
      o;
    for (; r < e.length && !o; ) {
      const i = e[r];
      typeof i == "string" && !_M.has(i) && Qi(i).values.length && (o = e[r]),
        r++;
    }
    if (o && n) for (const i of t) e[i] = zw(n, o);
  }
  const Yp = (e) => e === Uo || e === X,
    Xp = (e, t) => parseFloat(e.split(", ")[t]),
    qp =
      (e, t) =>
      (n, { transform: r }) => {
        if (r === "none" || !r) return 0;
        const o = r.match(/^matrix3d\((.+)\)$/u);
        if (o) return Xp(o[1], t);
        {
          const i = r.match(/^matrix\((.+)\)$/u);
          return i ? Xp(i[1], e) : 0;
        }
      },
    jM = new Set(["x", "y", "z"]),
    FM = $o.filter((e) => !jM.has(e));
  function VM(e) {
    const t = [];
    return (
      FM.forEach((n) => {
        const r = e.getValue(n);
        r !== void 0 &&
          (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
      }),
      t
    );
  }
  const _o = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: qp(4, 13),
    y: qp(5, 14),
  };
  _o.translateX = _o.x;
  _o.translateY = _o.y;
  const br = new Set();
  let Vc = !1,
    Bc = !1;
  function $w() {
    if (Bc) {
      const e = Array.from(br).filter((r) => r.needsMeasurement),
        t = new Set(e.map((r) => r.element)),
        n = new Map();
      t.forEach((r) => {
        const o = VM(r);
        o.length && (n.set(r, o), r.render());
      }),
        e.forEach((r) => r.measureInitialState()),
        t.forEach((r) => {
          r.render();
          const o = n.get(r);
          o &&
            o.forEach(([i, s]) => {
              var a;
              (a = r.getValue(i)) === null || a === void 0 || a.set(s);
            });
        }),
        e.forEach((r) => r.measureEndState()),
        e.forEach((r) => {
          r.suspendedScrollY !== void 0 &&
            window.scrollTo(0, r.suspendedScrollY);
        });
    }
    (Bc = !1), (Vc = !1), br.forEach((e) => e.complete()), br.clear();
  }
  function Uw() {
    br.forEach((e) => {
      e.readKeyframes(), e.needsMeasurement && (Bc = !0);
    });
  }
  function BM() {
    Uw(), $w();
  }
  class Ff {
    constructor(t, n, r, o, i, s = !1) {
      (this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...t]),
        (this.onComplete = n),
        (this.name = r),
        (this.motionValue = o),
        (this.element = i),
        (this.isAsync = s);
    }
    scheduleResolve() {
      (this.isScheduled = !0),
        this.isAsync
          ? (br.add(this),
            Vc || ((Vc = !0), fe.read(Uw), fe.resolveKeyframes($w)))
          : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const {
        unresolvedKeyframes: t,
        name: n,
        element: r,
        motionValue: o,
      } = this;
      for (let i = 0; i < t.length; i++)
        if (t[i] === null)
          if (i === 0) {
            const s = o == null ? void 0 : o.get(),
              a = t[t.length - 1];
            if (s !== void 0) t[0] = s;
            else if (r && n) {
              const l = r.readValue(n, a);
              l != null && (t[0] = l);
            }
            t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
          } else t[i] = t[i - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      (this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        br.delete(this);
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), br.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  }
  const Ww = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    zM = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function $M(e) {
    const t = zM.exec(e);
    if (!t) return [,];
    const [, n, r, o] = t;
    return [`--${n ?? r}`, o];
  }
  function Hw(e, t, n = 1) {
    const [r, o] = $M(e);
    if (!r) return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
      const s = i.trim();
      return Ww(s) ? parseFloat(s) : s;
    }
    return yf(o) ? Hw(o, t, n + 1) : o;
  }
  const Kw = (e) => (t) => t.test(e),
    UM = { test: (e) => e === "auto", parse: (e) => e },
    Gw = [Uo, X, nn, Ln, Mk, kk, UM],
    Zp = (e) => Gw.find(Kw(e));
  class Qw extends Ff {
    constructor(t, n, r, o, i) {
      super(t, n, r, o, i, !0);
    }
    readKeyframes() {
      const { unresolvedKeyframes: t, element: n, name: r } = this;
      if (!n || !n.current) return;
      super.readKeyframes();
      for (let l = 0; l < t.length; l++) {
        let u = t[l];
        if (typeof u == "string" && ((u = u.trim()), yf(u))) {
          const c = Hw(u, n.current);
          c !== void 0 && (t[l] = c),
            l === t.length - 1 && (this.finalKeyframe = u);
        }
      }
      if ((this.resolveNoneKeyframes(), !Pw.has(r) || t.length !== 2)) return;
      const [o, i] = t,
        s = Zp(o),
        a = Zp(i);
      if (s !== a)
        if (Yp(s) && Yp(a))
          for (let l = 0; l < t.length; l++) {
            const u = t[l];
            typeof u == "string" && (t[l] = parseFloat(u));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: t, name: n } = this,
        r = [];
      for (let o = 0; o < t.length; o++) wM(t[o]) && r.push(o);
      r.length && IM(t, r, n);
    }
    measureInitialState() {
      const { element: t, unresolvedKeyframes: n, name: r } = this;
      if (!t || !t.current) return;
      r === "height" && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = _o[r](
          t.measureViewportBox(),
          window.getComputedStyle(t.current)
        )),
        (n[0] = this.measuredOrigin);
      const o = n[n.length - 1];
      o !== void 0 && t.getValue(r, o).jump(o, !1);
    }
    measureEndState() {
      var t;
      const { element: n, name: r, unresolvedKeyframes: o } = this;
      if (!n || !n.current) return;
      const i = n.getValue(r);
      i && i.jump(this.measuredOrigin, !1);
      const s = o.length - 1,
        a = o[s];
      (o[s] = _o[r](
        n.measureViewportBox(),
        window.getComputedStyle(n.current)
      )),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        !((t = this.removedTransforms) === null || t === void 0) &&
          t.length &&
          this.removedTransforms.forEach(([l, u]) => {
            n.getValue(l).set(u);
          }),
        this.resolveNoneKeyframes();
    }
  }
  const Jp = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (ar.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
  function WM(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
  }
  function HM(e, t, n, r) {
    const o = e[0];
    if (o === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const i = e[e.length - 1],
      s = Jp(o, t),
      a = Jp(i, t);
    return !s || !a ? !1 : WM(e) || ((n === "spring" || kf(n)) && r);
  }
  const KM = (e) => e !== null;
  function bl(e, { repeat: t, repeatType: n = "loop" }, r) {
    const o = e.filter(KM),
      i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
    return !i || r === void 0 ? o[i] : r;
  }
  const GM = 40;
  class Yw {
    constructor({
      autoplay: t = !0,
      delay: n = 0,
      type: r = "keyframes",
      repeat: o = 0,
      repeatDelay: i = 0,
      repeatType: s = "loop",
      ...a
    }) {
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = rn.now()),
        (this.options = {
          autoplay: t,
          delay: n,
          type: r,
          repeat: o,
          repeatDelay: i,
          repeatType: s,
          ...a,
        }),
        this.updateFinishedPromise();
    }
    calcStartTime() {
      return this.resolvedAt
        ? this.resolvedAt - this.createdAt > GM
          ? this.resolvedAt
          : this.createdAt
        : this.createdAt;
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && BM(), this._resolved
      );
    }
    onKeyframesResolved(t, n) {
      (this.resolvedAt = rn.now()), (this.hasAttemptedResolve = !0);
      const {
        name: r,
        type: o,
        velocity: i,
        delay: s,
        onComplete: a,
        onUpdate: l,
        isGenerator: u,
      } = this.options;
      if (!u && !HM(t, r, o, i))
        if (s) this.options.duration = 0;
        else {
          l && l(bl(t, this.options, n)),
            a && a(),
            this.resolveFinishedPromise();
          return;
        }
      const c = this.initPlayback(t, n);
      c !== !1 &&
        ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(t, n) {
      return this.currentFinishedPromise.then(t, n);
    }
    flatten() {
      (this.options.type = "keyframes"), (this.options.ease = "linear");
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((t) => {
        this.resolveFinishedPromise = t;
      });
    }
  }
  const Se = (e, t, n) => e + (t - e) * n;
  function hu(e, t, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? e + (t - e) * 6 * n
        : n < 1 / 2
        ? t
        : n < 2 / 3
        ? e + (t - e) * (2 / 3 - n) * 6
        : e
    );
  }
  function QM({ hue: e, saturation: t, lightness: n, alpha: r }) {
    (e /= 360), (t /= 100), (n /= 100);
    let o = 0,
      i = 0,
      s = 0;
    if (!t) o = i = s = n;
    else {
      const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
        l = 2 * n - a;
      (o = hu(l, a, e + 1 / 3)), (i = hu(l, a, e)), (s = hu(l, a, e - 1 / 3));
    }
    return {
      red: Math.round(o * 255),
      green: Math.round(i * 255),
      blue: Math.round(s * 255),
      alpha: r,
    };
  }
  function Ua(e, t) {
    return (n) => (n > 0 ? t : e);
  }
  const pu = (e, t, n) => {
      const r = e * e,
        o = n * (t * t - r) + r;
      return o < 0 ? 0 : Math.sqrt(o);
    },
    YM = [jc, wr, eo],
    XM = (e) => YM.find((t) => t.test(e));
  function em(e) {
    const t = XM(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === eo && (n = QM(n)), n;
  }
  const tm = (e, t) => {
      const n = em(e),
        r = em(t);
      if (!n || !r) return Ua(e, t);
      const o = { ...n };
      return (i) => (
        (o.red = pu(n.red, r.red, i)),
        (o.green = pu(n.green, r.green, i)),
        (o.blue = pu(n.blue, r.blue, i)),
        (o.alpha = Se(n.alpha, r.alpha, i)),
        wr.transform(o)
      );
    },
    qM = (e, t) => (n) => t(e(n)),
    as = (...e) => e.reduce(qM),
    zc = new Set(["none", "hidden"]);
  function ZM(e, t) {
    return zc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
  }
  function JM(e, t) {
    return (n) => Se(e, t, n);
  }
  function Vf(e) {
    return typeof e == "number"
      ? JM
      : typeof e == "string"
      ? yf(e)
        ? Ua
        : Ke.test(e)
        ? tm
        : n2
      : Array.isArray(e)
      ? Xw
      : typeof e == "object"
      ? Ke.test(e)
        ? tm
        : e2
      : Ua;
  }
  function Xw(e, t) {
    const n = [...e],
      r = n.length,
      o = e.map((i, s) => Vf(i)(i, t[s]));
    return (i) => {
      for (let s = 0; s < r; s++) n[s] = o[s](i);
      return n;
    };
  }
  function e2(e, t) {
    const n = { ...e, ...t },
      r = {};
    for (const o in n)
      e[o] !== void 0 && t[o] !== void 0 && (r[o] = Vf(e[o])(e[o], t[o]));
    return (o) => {
      for (const i in r) n[i] = r[i](o);
      return n;
    };
  }
  function t2(e, t) {
    var n;
    const r = [],
      o = { color: 0, var: 0, number: 0 };
    for (let i = 0; i < t.values.length; i++) {
      const s = t.types[i],
        a = e.indexes[s][o[s]],
        l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
      (r[i] = l), o[s]++;
    }
    return r;
  }
  const n2 = (e, t) => {
    const n = ar.createTransformer(t),
      r = Qi(e),
      o = Qi(t);
    return r.indexes.var.length === o.indexes.var.length &&
      r.indexes.color.length === o.indexes.color.length &&
      r.indexes.number.length >= o.indexes.number.length
      ? (zc.has(e) && !o.values.length) || (zc.has(t) && !r.values.length)
        ? ZM(e, t)
        : as(Xw(t2(r, o), o.values), n)
      : Ua(e, t);
  };
  function qw(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number"
      ? Se(e, t, n)
      : Vf(e)(e, t);
  }
  const r2 = 5;
  function Zw(e, t, n) {
    const r = Math.max(t - r2, 0);
    return Tw(n - e(r), t - r);
  }
  const Te = {
      stiffness: 100,
      damping: 10,
      mass: 1,
      velocity: 0,
      duration: 800,
      bounce: 0.3,
      visualDuration: 0.3,
      restSpeed: { granular: 0.01, default: 2 },
      restDelta: { granular: 0.005, default: 0.5 },
      minDuration: 0.01,
      maxDuration: 10,
      minDamping: 0.05,
      maxDamping: 1,
    },
    mu = 0.001;
  function o2({
    duration: e = Te.duration,
    bounce: t = Te.bounce,
    velocity: n = Te.velocity,
    mass: r = Te.mass,
  }) {
    let o,
      i,
      s = 1 - t;
    (s = Pn(Te.minDamping, Te.maxDamping, s)),
      (e = Pn(Te.minDuration, Te.maxDuration, yn(e))),
      s < 1
        ? ((o = (u) => {
            const c = u * s,
              f = c * e,
              d = c - n,
              p = $c(u, s),
              y = Math.exp(-f);
            return mu - (d / p) * y;
          }),
          (i = (u) => {
            const f = u * s * e,
              d = f * n + n,
              p = Math.pow(s, 2) * Math.pow(u, 2) * e,
              y = Math.exp(-f),
              g = $c(Math.pow(u, 2), s);
            return ((-o(u) + mu > 0 ? -1 : 1) * ((d - p) * y)) / g;
          }))
        : ((o = (u) => {
            const c = Math.exp(-u * e),
              f = (u - n) * e + 1;
            return -mu + c * f;
          }),
          (i = (u) => {
            const c = Math.exp(-u * e),
              f = (n - u) * (e * e);
            return c * f;
          }));
    const a = 5 / e,
      l = s2(o, i, a);
    if (((e = gn(e)), isNaN(l)))
      return { stiffness: Te.stiffness, damping: Te.damping, duration: e };
    {
      const u = Math.pow(l, 2) * r;
      return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
    }
  }
  const i2 = 12;
  function s2(e, t, n) {
    let r = n;
    for (let o = 1; o < i2; o++) r = r - e(r) / t(r);
    return r;
  }
  function $c(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const a2 = ["duration", "bounce"],
    l2 = ["stiffness", "damping", "mass"];
  function nm(e, t) {
    return t.some((n) => e[n] !== void 0);
  }
  function u2(e) {
    let t = {
      velocity: Te.velocity,
      stiffness: Te.stiffness,
      damping: Te.damping,
      mass: Te.mass,
      isResolvedFromDuration: !1,
      ...e,
    };
    if (!nm(e, l2) && nm(e, a2))
      if (e.visualDuration) {
        const n = e.visualDuration,
          r = (2 * Math.PI) / (n * 1.2),
          o = r * r,
          i = 2 * Pn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
        t = { ...t, mass: Te.mass, stiffness: o, damping: i };
      } else {
        const n = o2(e);
        (t = { ...t, ...n, mass: Te.mass }), (t.isResolvedFromDuration = !0);
      }
    return t;
  }
  function Jw(e = Te.visualDuration, t = Te.bounce) {
    const n =
      typeof e != "object"
        ? { visualDuration: e, keyframes: [0, 1], bounce: t }
        : e;
    let { restSpeed: r, restDelta: o } = n;
    const i = n.keyframes[0],
      s = n.keyframes[n.keyframes.length - 1],
      a = { done: !1, value: i },
      {
        stiffness: l,
        damping: u,
        mass: c,
        duration: f,
        velocity: d,
        isResolvedFromDuration: p,
      } = u2({ ...n, velocity: -yn(n.velocity || 0) }),
      y = d || 0,
      g = u / (2 * Math.sqrt(l * c)),
      w = s - i,
      h = yn(Math.sqrt(l / c)),
      m = Math.abs(w) < 5;
    r || (r = m ? Te.restSpeed.granular : Te.restSpeed.default),
      o || (o = m ? Te.restDelta.granular : Te.restDelta.default);
    let v;
    if (g < 1) {
      const E = $c(h, g);
      v = (T) => {
        const M = Math.exp(-g * h * T);
        return (
          s -
          M * (((y + g * h * w) / E) * Math.sin(E * T) + w * Math.cos(E * T))
        );
      };
    } else if (g === 1) v = (E) => s - Math.exp(-h * E) * (w + (y + h * w) * E);
    else {
      const E = h * Math.sqrt(g * g - 1);
      v = (T) => {
        const M = Math.exp(-g * h * T),
          b = Math.min(E * T, 300);
        return (
          s - (M * ((y + g * h * w) * Math.sinh(b) + E * w * Math.cosh(b))) / E
        );
      };
    }
    const C = {
      calculatedDuration: (p && f) || null,
      next: (E) => {
        const T = v(E);
        if (p) a.done = E >= f;
        else {
          let M = 0;
          g < 1 && (M = E === 0 ? gn(y) : Zw(v, E, T));
          const b = Math.abs(M) <= r,
            j = Math.abs(s - T) <= o;
          a.done = b && j;
        }
        return (a.value = a.done ? s : T), a;
      },
      toString: () => {
        const E = Math.min(yw(C), Oc),
          T = vw((M) => C.next(E * M).value, E, 30);
        return E + "ms " + T;
      },
    };
    return C;
  }
  function rm({
    keyframes: e,
    velocity: t = 0,
    power: n = 0.8,
    timeConstant: r = 325,
    bounceDamping: o = 10,
    bounceStiffness: i = 500,
    modifyTarget: s,
    min: a,
    max: l,
    restDelta: u = 0.5,
    restSpeed: c,
  }) {
    const f = e[0],
      d = { done: !1, value: f },
      p = (b) => (a !== void 0 && b < a) || (l !== void 0 && b > l),
      y = (b) =>
        a === void 0
          ? l
          : l === void 0 || Math.abs(a - b) < Math.abs(l - b)
          ? a
          : l;
    let g = n * t;
    const w = f + g,
      h = s === void 0 ? w : s(w);
    h !== w && (g = h - f);
    const m = (b) => -g * Math.exp(-b / r),
      v = (b) => h + m(b),
      C = (b) => {
        const j = m(b),
          _ = v(b);
        (d.done = Math.abs(j) <= u), (d.value = d.done ? h : _);
      };
    let E, T;
    const M = (b) => {
      p(d.value) &&
        ((E = b),
        (T = Jw({
          keyframes: [d.value, y(d.value)],
          velocity: Zw(v, b, d.value),
          damping: o,
          stiffness: i,
          restDelta: u,
          restSpeed: c,
        })));
    };
    return (
      M(0),
      {
        calculatedDuration: null,
        next: (b) => {
          let j = !1;
          return (
            !T && E === void 0 && ((j = !0), C(b), M(b)),
            E !== void 0 && b >= E ? T.next(b - E) : (!j && C(b), d)
          );
        },
      }
    );
  }
  const c2 = ss(0.42, 0, 1, 1),
    d2 = ss(0, 0, 0.58, 1),
    ex = ss(0.42, 0, 0.58, 1),
    f2 = (e) => Array.isArray(e) && typeof e[0] != "number",
    om = {
      linear: xt,
      easeIn: c2,
      easeInOut: ex,
      easeOut: d2,
      circIn: Of,
      circInOut: Ow,
      circOut: Lw,
      backIn: Lf,
      backInOut: Nw,
      backOut: Aw,
      anticipate: Dw,
    },
    im = (e) => {
      if (Mf(e)) {
        Dc(e.length === 4);
        const [t, n, r, o] = e;
        return ss(t, n, r, o);
      } else if (typeof e == "string") return Dc(om[e] !== void 0), om[e];
      return e;
    };
  function h2(e, t, n) {
    const r = [],
      o = n || qw,
      i = e.length - 1;
    for (let s = 0; s < i; s++) {
      let a = o(e[s], e[s + 1]);
      if (t) {
        const l = Array.isArray(t) ? t[s] || xt : t;
        a = as(l, a);
      }
      r.push(a);
    }
    return r;
  }
  function p2(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
    const i = e.length;
    if ((Dc(i === t.length), i === 1)) return () => t[0];
    if (i === 2 && t[0] === t[1]) return () => t[1];
    const s = e[0] === e[1];
    e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
    const a = h2(t, r, o),
      l = a.length,
      u = (c) => {
        if (s && c < e[0]) return t[0];
        let f = 0;
        if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
        const d = Lo(e[f], e[f + 1], c);
        return a[f](d);
      };
    return n ? (c) => u(Pn(e[0], e[i - 1], c)) : u;
  }
  function m2(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
      const o = Lo(0, t, r);
      e.push(Se(n, 1, o));
    }
  }
  function g2(e) {
    const t = [0];
    return m2(t, e.length - 1), t;
  }
  function y2(e, t) {
    return e.map((n) => n * t);
  }
  function v2(e, t) {
    return e.map(() => t || ex).splice(0, e.length - 1);
  }
  function Wa({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut",
  }) {
    const o = f2(r) ? r.map(im) : im(r),
      i = { done: !1, value: t[0] },
      s = y2(n && n.length === t.length ? n : g2(t), e),
      a = p2(s, t, { ease: Array.isArray(o) ? o : v2(t, o) });
    return {
      calculatedDuration: e,
      next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
    };
  }
  const w2 = (e) => {
      const t = ({ timestamp: n }) => e(n);
      return {
        start: () => fe.update(t, !0),
        stop: () => sr(t),
        now: () => (Ve.isProcessing ? Ve.timestamp : rn.now()),
      };
    },
    x2 = { decay: rm, inertia: rm, tween: Wa, keyframes: Wa, spring: Jw },
    S2 = (e) => e / 100;
  class Bf extends Yw {
    constructor(t) {
      super(t),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.startTime = null),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
          )
            return;
          this.teardown();
          const { onStop: l } = this.options;
          l && l();
        });
      const {
          name: n,
          motionValue: r,
          element: o,
          keyframes: i,
        } = this.options,
        s = (o == null ? void 0 : o.KeyframeResolver) || Ff,
        a = (l, u) => this.onKeyframesResolved(l, u);
      (this.resolver = new s(i, a, n, r, o)), this.resolver.scheduleResolve();
    }
    flatten() {
      super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes)
          );
    }
    initPlayback(t) {
      const {
          type: n = "keyframes",
          repeat: r = 0,
          repeatDelay: o = 0,
          repeatType: i,
          velocity: s = 0,
        } = this.options,
        a = kf(n) ? n : x2[n] || Wa;
      let l, u;
      a !== Wa &&
        typeof t[0] != "number" &&
        ((l = as(S2, qw(t[0], t[1]))), (t = [0, 100]));
      const c = a({ ...this.options, keyframes: t });
      i === "mirror" &&
        (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
        c.calculatedDuration === null && (c.calculatedDuration = yw(c));
      const { calculatedDuration: f } = c,
        d = f + o,
        p = d * (r + 1) - o;
      return {
        generator: c,
        mirroredGenerator: u,
        mapPercentToKeyframes: l,
        calculatedDuration: f,
        resolvedDuration: d,
        totalDuration: p,
      };
    }
    onPostResolved() {
      const { autoplay: t = !0 } = this.options;
      this.play(),
        this.pendingPlayState === "paused" || !t
          ? this.pause()
          : (this.state = this.pendingPlayState);
    }
    tick(t, n = !1) {
      const { resolved: r } = this;
      if (!r) {
        const { keyframes: b } = this.options;
        return { done: !0, value: b[b.length - 1] };
      }
      const {
        finalKeyframe: o,
        generator: i,
        mirroredGenerator: s,
        mapPercentToKeyframes: a,
        keyframes: l,
        calculatedDuration: u,
        totalDuration: c,
        resolvedDuration: f,
      } = r;
      if (this.startTime === null) return i.next(0);
      const {
        delay: d,
        repeat: p,
        repeatType: y,
        repeatDelay: g,
        onUpdate: w,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, t))
        : this.speed < 0 &&
          (this.startTime = Math.min(t - c / this.speed, this.startTime)),
        n
          ? (this.currentTime = t)
          : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
      const h = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
        m = this.speed >= 0 ? h < 0 : h > c;
      (this.currentTime = Math.max(h, 0)),
        this.state === "finished" &&
          this.holdTime === null &&
          (this.currentTime = c);
      let v = this.currentTime,
        C = i;
      if (p) {
        const b = Math.min(this.currentTime, c) / f;
        let j = Math.floor(b),
          _ = b % 1;
        !_ && b >= 1 && (_ = 1),
          _ === 1 && j--,
          (j = Math.min(j, p + 1)),
          !!(j % 2) &&
            (y === "reverse"
              ? ((_ = 1 - _), g && (_ -= g / f))
              : y === "mirror" && (C = s)),
          (v = Pn(0, 1, _) * f);
      }
      const E = m ? { done: !1, value: l[0] } : C.next(v);
      a && (E.value = a(E.value));
      let { done: T } = E;
      !m &&
        u !== null &&
        (T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      const M =
        this.holdTime === null &&
        (this.state === "finished" || (this.state === "running" && T));
      return (
        M && o !== void 0 && (E.value = bl(l, this.options, o)),
        w && w(E.value),
        M && this.finish(),
        E
      );
    }
    get duration() {
      const { resolved: t } = this;
      return t ? yn(t.calculatedDuration) : 0;
    }
    get time() {
      return yn(this.currentTime);
    }
    set time(t) {
      (t = gn(t)),
        (this.currentTime = t),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = t)
          : this.driver &&
            (this.startTime = this.driver.now() - t / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(t) {
      const n = this.playbackSpeed !== t;
      (this.playbackSpeed = t), n && (this.time = yn(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      const { driver: t = w2, onPlay: n, startTime: r } = this.options;
      this.driver || (this.driver = t((i) => this.tick(i))), n && n();
      const o = this.driver.now();
      this.holdTime !== null
        ? (this.startTime = o - this.holdTime)
        : this.startTime
        ? this.state === "finished" && (this.startTime = o)
        : (this.startTime = r ?? this.calcStartTime()),
        this.state === "finished" && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start();
    }
    pause() {
      var t;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      (this.state = "paused"),
        (this.holdTime =
          (t = this.currentTime) !== null && t !== void 0 ? t : 0);
    }
    complete() {
      this.state !== "running" && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = "finished");
      const { onComplete: t } = this.options;
      t && t();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(t) {
      return (this.startTime = 0), this.tick(t, !0);
    }
  }
  const C2 = new Set(["opacity", "clipPath", "filter", "transform"]);
  function E2(
    e,
    t,
    n,
    {
      delay: r = 0,
      duration: o = 300,
      repeat: i = 0,
      repeatType: s = "loop",
      ease: a = "easeInOut",
      times: l,
    } = {}
  ) {
    const u = { [t]: n };
    l && (u.offset = l);
    const c = xw(a, o);
    return (
      Array.isArray(c) && (u.easing = c),
      e.animate(u, {
        delay: r,
        duration: o,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: i + 1,
        direction: s === "reverse" ? "alternate" : "normal",
      })
    );
  }
  const P2 = df(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Ha = 10,
    T2 = 2e4;
  function b2(e) {
    return kf(e.type) || e.type === "spring" || !ww(e.ease);
  }
  function k2(e, t) {
    const n = new Bf({
      ...t,
      keyframes: e,
      repeat: 0,
      delay: 0,
      isGenerator: !0,
    });
    let r = { done: !1, value: e[0] };
    const o = [];
    let i = 0;
    for (; !r.done && i < T2; ) (r = n.sample(i)), o.push(r.value), (i += Ha);
    return { times: void 0, keyframes: o, duration: i - Ha, ease: "linear" };
  }
  const tx = { anticipate: Dw, backInOut: Nw, circInOut: Ow };
  function M2(e) {
    return e in tx;
  }
  class sm extends Yw {
    constructor(t) {
      super(t);
      const {
        name: n,
        motionValue: r,
        element: o,
        keyframes: i,
      } = this.options;
      (this.resolver = new Qw(
        i,
        (s, a) => this.onKeyframesResolved(s, a),
        n,
        r,
        o
      )),
        this.resolver.scheduleResolve();
    }
    initPlayback(t, n) {
      let {
        duration: r = 300,
        times: o,
        ease: i,
        type: s,
        motionValue: a,
        name: l,
        startTime: u,
      } = this.options;
      if (!a.owner || !a.owner.current) return !1;
      if (
        (typeof i == "string" && za() && M2(i) && (i = tx[i]), b2(this.options))
      ) {
        const {
            onComplete: f,
            onUpdate: d,
            motionValue: p,
            element: y,
            ...g
          } = this.options,
          w = k2(t, g);
        (t = w.keyframes),
          t.length === 1 && (t[1] = t[0]),
          (r = w.duration),
          (o = w.times),
          (i = w.ease),
          (s = "keyframes");
      }
      const c = E2(a.owner.current, l, t, {
        ...this.options,
        duration: r,
        times: o,
        ease: i,
      });
      return (
        (c.startTime = u ?? this.calcStartTime()),
        this.pendingTimeline
          ? (Up(c, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (c.onfinish = () => {
              const { onComplete: f } = this.options;
              a.set(bl(t, this.options, n)),
                f && f(),
                this.cancel(),
                this.resolveFinishedPromise();
            }),
        { animation: c, duration: r, times: o, type: s, ease: i, keyframes: t }
      );
    }
    get duration() {
      const { resolved: t } = this;
      if (!t) return 0;
      const { duration: n } = t;
      return yn(n);
    }
    get time() {
      const { resolved: t } = this;
      if (!t) return 0;
      const { animation: n } = t;
      return yn(n.currentTime || 0);
    }
    set time(t) {
      const { resolved: n } = this;
      if (!n) return;
      const { animation: r } = n;
      r.currentTime = gn(t);
    }
    get speed() {
      const { resolved: t } = this;
      if (!t) return 1;
      const { animation: n } = t;
      return n.playbackRate;
    }
    set speed(t) {
      const { resolved: n } = this;
      if (!n) return;
      const { animation: r } = n;
      r.playbackRate = t;
    }
    get state() {
      const { resolved: t } = this;
      if (!t) return "idle";
      const { animation: n } = t;
      return n.playState;
    }
    get startTime() {
      const { resolved: t } = this;
      if (!t) return null;
      const { animation: n } = t;
      return n.startTime;
    }
    attachTimeline(t) {
      if (!this._resolved) this.pendingTimeline = t;
      else {
        const { resolved: n } = this;
        if (!n) return xt;
        const { animation: r } = n;
        Up(r, t);
      }
      return xt;
    }
    play() {
      if (this.isStopped) return;
      const { resolved: t } = this;
      if (!t) return;
      const { animation: n } = t;
      n.playState === "finished" && this.updateFinishedPromise(), n.play();
    }
    pause() {
      const { resolved: t } = this;
      if (!t) return;
      const { animation: n } = t;
      n.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
      )
        return;
      this.resolveFinishedPromise(), this.updateFinishedPromise();
      const { resolved: t } = this;
      if (!t) return;
      const {
        animation: n,
        keyframes: r,
        duration: o,
        type: i,
        ease: s,
        times: a,
      } = t;
      if (n.playState === "idle" || n.playState === "finished") return;
      if (this.time) {
        const {
            motionValue: u,
            onUpdate: c,
            onComplete: f,
            element: d,
            ...p
          } = this.options,
          y = new Bf({
            ...p,
            keyframes: r,
            duration: o,
            type: i,
            ease: s,
            times: a,
            isGenerator: !0,
          }),
          g = gn(this.time);
        u.setWithVelocity(y.sample(g - Ha).value, y.sample(g).value, Ha);
      }
      const { onStop: l } = this.options;
      l && l(), this.cancel();
    }
    complete() {
      const { resolved: t } = this;
      t && t.animation.finish();
    }
    cancel() {
      const { resolved: t } = this;
      t && t.animation.cancel();
    }
    static supports(t) {
      const {
        motionValue: n,
        name: r,
        repeatDelay: o,
        repeatType: i,
        damping: s,
        type: a,
      } = t;
      if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
        return !1;
      const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
      return (
        P2() &&
        r &&
        C2.has(r) &&
        !l &&
        !u &&
        !o &&
        i !== "mirror" &&
        s !== 0 &&
        a !== "inertia"
      );
    }
  }
  const R2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    A2 = (e) => ({
      type: "spring",
      stiffness: 550,
      damping: e === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10,
    }),
    N2 = { type: "keyframes", duration: 0.8 },
    D2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    L2 = (e, { keyframes: t }) =>
      t.length > 2
        ? N2
        : jr.has(e)
        ? e.startsWith("scale")
          ? A2(t[1])
          : R2
        : D2;
  function O2({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: o,
    repeat: i,
    repeatType: s,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...c
  }) {
    return !!Object.keys(c).length;
  }
  const zf =
    (e, t, n, r = {}, o, i) =>
    (s) => {
      const a = bf(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - gn(l);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (d) => {
          t.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: i ? void 0 : o,
      };
      O2(a) || (c = { ...c, ...L2(e, c) }),
        c.duration && (c.duration = gn(c.duration)),
        c.repeatDelay && (c.repeatDelay = gn(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
        f && !i && t.get() !== void 0)
      ) {
        const d = bl(c.keyframes, a);
        if (d !== void 0)
          return (
            fe.update(() => {
              c.onUpdate(d), c.onComplete();
            }),
            new Jk([])
          );
      }
      return !i && sm.supports(c) ? new sm(c) : new Bf(c);
    };
  function _2({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return (t[n] = !1), r;
  }
  function nx(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
    var i;
    let {
      transition: s = e.getDefaultTransition(),
      transitionEnd: a,
      ...l
    } = t;
    r && (s = r);
    const u = [],
      c = o && e.animationState && e.animationState.getState()[o];
    for (const f in l) {
      const d = e.getValue(
          f,
          (i = e.latestValues[f]) !== null && i !== void 0 ? i : null
        ),
        p = l[f];
      if (p === void 0 || (c && _2(c, f))) continue;
      const y = { delay: n, ...bf(s || {}, f) };
      let g = !1;
      if (window.MotionHandoffAnimation) {
        const h = bw(e);
        if (h) {
          const m = window.MotionHandoffAnimation(h, f, fe);
          m !== null && ((y.startTime = m), (g = !0));
        }
      }
      Ic(e, f),
        d.start(
          zf(
            f,
            d,
            p,
            e.shouldReduceMotion && Pw.has(f) ? { type: !1 } : y,
            e,
            g
          )
        );
      const w = d.animation;
      w && u.push(w);
    }
    return (
      a &&
        Promise.all(u).then(() => {
          fe.update(() => {
            a && pM(e, a);
          });
        }),
      u
    );
  }
  function Uc(e, t, n = {}) {
    var r;
    const o = Ki(
      e,
      t,
      n.type === "exit"
        ? (r = e.presenceContext) === null || r === void 0
          ? void 0
          : r.custom
        : void 0
    );
    let { transition: i = e.getDefaultTransition() || {} } = o || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = o ? () => Promise.all(nx(e, o, n)) : () => Promise.resolve(),
      a =
        e.variantChildren && e.variantChildren.size
          ? (u = 0) => {
              const {
                delayChildren: c = 0,
                staggerChildren: f,
                staggerDirection: d,
              } = i;
              return I2(e, t, c + u, f, d, n);
            }
          : () => Promise.resolve(),
      { when: l } = i;
    if (l) {
      const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
      return u().then(() => c());
    } else return Promise.all([s(), a(n.delay)]);
  }
  function I2(e, t, n = 0, r = 0, o = 1, i) {
    const s = [],
      a = (e.variantChildren.size - 1) * r,
      l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return (
      Array.from(e.variantChildren)
        .sort(j2)
        .forEach((u, c) => {
          u.notify("AnimationStart", t),
            s.push(
              Uc(u, t, { ...i, delay: n + l(c) }).then(() =>
                u.notify("AnimationComplete", t)
              )
            );
        }),
      Promise.all(s)
    );
  }
  function j2(e, t) {
    return e.sortNodePosition(t);
  }
  function F2(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
      const o = t.map((i) => Uc(e, i, n));
      r = Promise.all(o);
    } else if (typeof t == "string") r = Uc(e, t, n);
    else {
      const o = typeof t == "function" ? Ki(e, t, n.custom) : t;
      r = Promise.all(nx(e, o, n));
    }
    return r.then(() => {
      e.notify("AnimationComplete", t);
    });
  }
  function rx(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0;
  }
  const V2 = hf.length;
  function ox(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
      const n = e.parent ? ox(e.parent) || {} : {};
      return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
    }
    const t = {};
    for (let n = 0; n < V2; n++) {
      const r = hf[n],
        o = e.props[r];
      (Ui(o) || o === !1) && (t[r] = o);
    }
    return t;
  }
  const B2 = [...ff].reverse(),
    z2 = ff.length;
  function $2(e) {
    return (t) =>
      Promise.all(t.map(({ animation: n, options: r }) => F2(e, n, r)));
  }
  function U2(e) {
    let t = $2(e),
      n = am(),
      r = !0;
    const o = (l) => (u, c) => {
      var f;
      const d = Ki(
        e,
        c,
        l === "exit"
          ? (f = e.presenceContext) === null || f === void 0
            ? void 0
            : f.custom
          : void 0
      );
      if (d) {
        const { transition: p, transitionEnd: y, ...g } = d;
        u = { ...u, ...g, ...y };
      }
      return u;
    };
    function i(l) {
      t = l(e);
    }
    function s(l) {
      const { props: u } = e,
        c = ox(e.parent) || {},
        f = [],
        d = new Set();
      let p = {},
        y = 1 / 0;
      for (let w = 0; w < z2; w++) {
        const h = B2[w],
          m = n[h],
          v = u[h] !== void 0 ? u[h] : c[h],
          C = Ui(v),
          E = h === l ? m.isActive : null;
        E === !1 && (y = w);
        let T = v === c[h] && v !== u[h] && C;
        if (
          (T && r && e.manuallyAnimateOnMount && (T = !1),
          (m.protectedKeys = { ...p }),
          (!m.isActive && E === null) ||
            (!v && !m.prevProp) ||
            Pl(v) ||
            typeof v == "boolean")
        )
          continue;
        const M = W2(m.prevProp, v);
        let b = M || (h === l && m.isActive && !T && C) || (w > y && C),
          j = !1;
        const _ = Array.isArray(v) ? v : [v];
        let H = _.reduce(o(h), {});
        E === !1 && (H = {});
        const { prevResolvedValues: D = {} } = m,
          U = { ...D, ...H },
          O = (K) => {
            (b = !0),
              d.has(K) && ((j = !0), d.delete(K)),
              (m.needsAnimating[K] = !0);
            const R = e.getValue(K);
            R && (R.liveStyle = !1);
          };
        for (const K in U) {
          const R = H[K],
            I = D[K];
          if (p.hasOwnProperty(K)) continue;
          let P = !1;
          Lc(R) && Lc(I) ? (P = !rx(R, I)) : (P = R !== I),
            P
              ? R != null
                ? O(K)
                : d.add(K)
              : R !== void 0 && d.has(K)
              ? O(K)
              : (m.protectedKeys[K] = !0);
        }
        (m.prevProp = v),
          (m.prevResolvedValues = H),
          m.isActive && (p = { ...p, ...H }),
          r && e.blockInitialAnimation && (b = !1),
          b &&
            (!(T && M) || j) &&
            f.push(..._.map((K) => ({ animation: K, options: { type: h } })));
      }
      if (d.size) {
        const w = {};
        if (typeof u.initial != "boolean") {
          const h = Ki(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
          h && h.transition && (w.transition = h.transition);
        }
        d.forEach((h) => {
          const m = e.getBaseTarget(h),
            v = e.getValue(h);
          v && (v.liveStyle = !0), (w[h] = m ?? null);
        }),
          f.push({ animation: w });
      }
      let g = !!f.length;
      return (
        r &&
          (u.initial === !1 || u.initial === u.animate) &&
          !e.manuallyAnimateOnMount &&
          (g = !1),
        (r = !1),
        g ? t(f) : Promise.resolve()
      );
    }
    function a(l, u) {
      var c;
      if (n[l].isActive === u) return Promise.resolve();
      (c = e.variantChildren) === null ||
        c === void 0 ||
        c.forEach((d) => {
          var p;
          return (p = d.animationState) === null || p === void 0
            ? void 0
            : p.setActive(l, u);
        }),
        (n[l].isActive = u);
      const f = s(l);
      for (const d in n) n[d].protectedKeys = {};
      return f;
    }
    return {
      animateChanges: s,
      setActive: a,
      setAnimateFunction: i,
      getState: () => n,
      reset: () => {
        (n = am()), (r = !0);
      },
    };
  }
  function W2(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !rx(t, e) : !1;
  }
  function fr(e = !1) {
    return {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  }
  function am() {
    return {
      animate: fr(!0),
      whileInView: fr(),
      whileHover: fr(),
      whileTap: fr(),
      whileDrag: fr(),
      whileFocus: fr(),
      exit: fr(),
    };
  }
  class dr {
    constructor(t) {
      (this.isMounted = !1), (this.node = t);
    }
    update() {}
  }
  class H2 extends dr {
    constructor(t) {
      super(t), t.animationState || (t.animationState = U2(t));
    }
    updateAnimationControlsSubscription() {
      const { animate: t } = this.node.getProps();
      Pl(t) && (this.unmountControls = t.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate: t } = this.node.getProps(),
        { animate: n } = this.node.prevProps || {};
      t !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var t;
      this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this);
    }
  }
  let K2 = 0;
  class G2 extends dr {
    constructor() {
      super(...arguments), (this.id = K2++);
    }
    update() {
      if (!this.node.presenceContext) return;
      const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
        { isPresent: r } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t === r) return;
      const o = this.node.animationState.setActive("exit", !t);
      n &&
        !t &&
        o.then(() => {
          n(this.id);
        });
    }
    mount() {
      const { register: t, onExitComplete: n } =
        this.node.presenceContext || {};
      n && n(this.id), t && (this.unmount = t(this.id));
    }
    unmount() {}
  }
  const Q2 = { animation: { Feature: H2 }, exit: { Feature: G2 } };
  function Yi(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  function ls(e) {
    return { point: { x: e.pageX, y: e.pageY } };
  }
  const Y2 = (e) => (t) => Rf(t) && e(t, ls(t));
  function to(e, t, n, r) {
    return Yi(e, t, Y2(n), r);
  }
  function ix({ top: e, left: t, right: n, bottom: r }) {
    return { x: { min: t, max: n }, y: { min: e, max: r } };
  }
  function X2({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
  }
  function q2(e, t) {
    if (!t) return e;
    const n = t({ x: e.left, y: e.top }),
      r = t({ x: e.right, y: e.bottom });
    return { top: n.y, left: n.x, bottom: r.y, right: r.x };
  }
  const sx = 1e-4,
    Z2 = 1 - sx,
    J2 = 1 + sx,
    ax = 0.01,
    eR = 0 - ax,
    tR = 0 + ax;
  function et(e) {
    return e.max - e.min;
  }
  function nR(e, t, n) {
    return Math.abs(e - t) <= n;
  }
  function lm(e, t, n, r = 0.5) {
    (e.origin = r),
      (e.originPoint = Se(t.min, t.max, e.origin)),
      (e.scale = et(n) / et(t)),
      (e.translate = Se(n.min, n.max, e.origin) - e.originPoint),
      ((e.scale >= Z2 && e.scale <= J2) || isNaN(e.scale)) && (e.scale = 1),
      ((e.translate >= eR && e.translate <= tR) || isNaN(e.translate)) &&
        (e.translate = 0);
  }
  function xi(e, t, n, r) {
    lm(e.x, t.x, n.x, r ? r.originX : void 0),
      lm(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function um(e, t, n) {
    (e.min = n.min + t.min), (e.max = e.min + et(t));
  }
  function rR(e, t, n) {
    um(e.x, t.x, n.x), um(e.y, t.y, n.y);
  }
  function cm(e, t, n) {
    (e.min = t.min - n.min), (e.max = e.min + et(t));
  }
  function Si(e, t, n) {
    cm(e.x, t.x, n.x), cm(e.y, t.y, n.y);
  }
  const dm = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    no = () => ({ x: dm(), y: dm() }),
    fm = () => ({ min: 0, max: 0 }),
    ke = () => ({ x: fm(), y: fm() });
  function Tt(e) {
    return [e("x"), e("y")];
  }
  function gu(e) {
    return e === void 0 || e === 1;
  }
  function Wc({ scale: e, scaleX: t, scaleY: n }) {
    return !gu(e) || !gu(t) || !gu(n);
  }
  function mr(e) {
    return (
      Wc(e) ||
      lx(e) ||
      e.z ||
      e.rotate ||
      e.rotateX ||
      e.rotateY ||
      e.skewX ||
      e.skewY
    );
  }
  function lx(e) {
    return hm(e.x) || hm(e.y);
  }
  function hm(e) {
    return e && e !== "0%";
  }
  function Ka(e, t, n) {
    const r = e - n,
      o = t * r;
    return n + o;
  }
  function pm(e, t, n, r, o) {
    return o !== void 0 && (e = Ka(e, o, r)), Ka(e, n, r) + t;
  }
  function Hc(e, t = 0, n = 1, r, o) {
    (e.min = pm(e.min, t, n, r, o)), (e.max = pm(e.max, t, n, r, o));
  }
  function ux(e, { x: t, y: n }) {
    Hc(e.x, t.translate, t.scale, t.originPoint),
      Hc(e.y, n.translate, n.scale, n.originPoint);
  }
  const mm = 0.999999999999,
    gm = 1.0000000000001;
  function oR(e, t, n, r = !1) {
    const o = n.length;
    if (!o) return;
    t.x = t.y = 1;
    let i, s;
    for (let a = 0; a < o; a++) {
      (i = n[a]), (s = i.projectionDelta);
      const { visualElement: l } = i.options;
      (l && l.props.style && l.props.style.display === "contents") ||
        (r &&
          i.options.layoutScroll &&
          i.scroll &&
          i !== i.root &&
          oo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
        s && ((t.x *= s.x.scale), (t.y *= s.y.scale), ux(e, s)),
        r && mr(i.latestValues) && oo(e, i.latestValues));
    }
    t.x < gm && t.x > mm && (t.x = 1), t.y < gm && t.y > mm && (t.y = 1);
  }
  function ro(e, t) {
    (e.min = e.min + t), (e.max = e.max + t);
  }
  function ym(e, t, n, r, o = 0.5) {
    const i = Se(e.min, e.max, o);
    Hc(e, t, n, i, r);
  }
  function oo(e, t) {
    ym(e.x, t.x, t.scaleX, t.scale, t.originX),
      ym(e.y, t.y, t.scaleY, t.scale, t.originY);
  }
  function cx(e, t) {
    return ix(q2(e.getBoundingClientRect(), t));
  }
  function iR(e, t, n) {
    const r = cx(e, n),
      { scroll: o } = t;
    return o && (ro(r.x, o.offset.x), ro(r.y, o.offset.y)), r;
  }
  const vm = (e, t) => Math.abs(e - t);
  function sR(e, t) {
    const n = vm(e.x, t.x),
      r = vm(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
  }
  class dx {
    constructor(
      t,
      n,
      { transformPagePoint: r, dragSnapToOrigin: o = !1 } = {}
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          const c = vu(this.lastMoveEventInfo, this.history),
            f = this.startEvent !== null,
            d = sR(c.offset, { x: 0, y: 0 }) >= 3;
          if (!f && !d) return;
          const { point: p } = c,
            { timestamp: y } = Ve;
          this.history.push({ ...p, timestamp: y });
          const { onStart: g, onMove: w } = this.handlers;
          f ||
            (g && g(this.lastMoveEvent, c),
            (this.startEvent = this.lastMoveEvent)),
            w && w(this.lastMoveEvent, c);
        }),
        (this.handlePointerMove = (c, f) => {
          if (
            c.target instanceof Element &&
            c.target.hasPointerCapture &&
            c.pointerId !== void 0
          )
            try {
              if (!c.target.hasPointerCapture(c.pointerId)) return;
            } catch {}
          (this.lastMoveEvent = c),
            (this.lastMoveEventInfo = yu(f, this.transformPagePoint)),
            fe.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (c, f) => {
          $a(c, "release"), this.end();
          const {
            onEnd: d,
            onSessionEnd: p,
            resumeAnimation: y,
          } = this.handlers;
          if (
            (this.dragSnapToOrigin && y && y(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          const g = vu(
            c.type === "pointercancel" || c.type === "lostpointercapture"
              ? this.lastMoveEventInfo
              : yu(f, this.transformPagePoint),
            this.history
          );
          this.startEvent && d && d(c, g), p && p(c, g);
        }),
        !Rf(t))
      )
        return;
      (this.dragSnapToOrigin = o),
        (this.handlers = n),
        (this.transformPagePoint = r);
      const i = ls(t),
        s = yu(i, this.transformPagePoint),
        { point: a } = s,
        { timestamp: l } = Ve;
      this.history = [{ ...a, timestamp: l }];
      const { onSessionStart: u } = n;
      u && u(t, vu(s, this.history)),
        $a(t, "set"),
        (this.removeListeners = as(
          to(t.currentTarget, "pointermove", this.handlePointerMove),
          to(t.currentTarget, "pointerup", this.handlePointerUp),
          to(t.currentTarget, "pointercancel", this.handlePointerUp),
          to(t.currentTarget, "lostpointercapture", this.handlePointerUp)
        ));
    }
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      this.removeListeners && this.removeListeners(), sr(this.updatePoint);
    }
  }
  function yu(e, t) {
    return t ? { point: t(e.point) } : e;
  }
  function wm(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function vu({ point: e }, t) {
    return {
      point: e,
      delta: wm(e, fx(t)),
      offset: wm(e, aR(t)),
      velocity: lR(t, 0.1),
    };
  }
  function aR(e) {
    return e[0];
  }
  function fx(e) {
    return e[e.length - 1];
  }
  function lR(e, t) {
    if (e.length < 2) return { x: 0, y: 0 };
    let n = e.length - 1,
      r = null;
    const o = fx(e);
    for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > gn(t))); ) n--;
    if (!r) return { x: 0, y: 0 };
    const i = yn(o.timestamp - r.timestamp);
    if (i === 0) return { x: 0, y: 0 };
    const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
  }
  function uR(e, { min: t, max: n }, r) {
    return (
      t !== void 0 && e < t
        ? (e = r ? Se(t, e, r.min) : Math.max(e, t))
        : n !== void 0 && e > n && (e = r ? Se(n, e, r.max) : Math.min(e, n)),
      e
    );
  }
  function xm(e, t, n) {
    return {
      min: t !== void 0 ? e.min + t : void 0,
      max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
    };
  }
  function cR(e, { top: t, left: n, bottom: r, right: o }) {
    return { x: xm(e.x, n, o), y: xm(e.y, t, r) };
  }
  function Sm(e, t) {
    let n = t.min - e.min,
      r = t.max - e.max;
    return (
      t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
    );
  }
  function dR(e, t) {
    return { x: Sm(e.x, t.x), y: Sm(e.y, t.y) };
  }
  function fR(e, t) {
    let n = 0.5;
    const r = et(e),
      o = et(t);
    return (
      o > r
        ? (n = Lo(t.min, t.max - r, e.min))
        : r > o && (n = Lo(e.min, e.max - o, t.min)),
      Pn(0, 1, n)
    );
  }
  function hR(e, t) {
    const n = {};
    return (
      t.min !== void 0 && (n.min = t.min - e.min),
      t.max !== void 0 && (n.max = t.max - e.min),
      n
    );
  }
  const Kc = 0.35;
  function pR(e = Kc) {
    return (
      e === !1 ? (e = 0) : e === !0 && (e = Kc),
      { x: Cm(e, "left", "right"), y: Cm(e, "top", "bottom") }
    );
  }
  function Cm(e, t, n) {
    return { min: Em(e, t), max: Em(e, n) };
  }
  function Em(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
  }
  const mR = new WeakMap();
  class gR {
    constructor(t) {
      (this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = ke()),
        (this.visualElement = t);
    }
    start(t, { snapToCursor: n = !1 } = {}) {
      const { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1) return;
      const o = (c) => {
          const { dragSnapToOrigin: f } = this.getProps();
          f ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(ls(c).point);
        },
        i = (c, f) => {
          const {
            drag: d,
            dragPropagation: p,
            onDragStart: y,
          } = this.getProps();
          if (
            d &&
            !p &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = uM(d)),
            !this.openDragLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Tt((w) => {
              let h = this.getAxisMotionValue(w).get() || 0;
              if (nn.test(h)) {
                const { projection: m } = this.visualElement;
                if (m && m.layout) {
                  const v = m.layout.layoutBox[w];
                  v && (h = et(v) * (parseFloat(h) / 100));
                }
              }
              this.originPoint[w] = h;
            }),
            y && fe.postRender(() => y(c, f)),
            Ic(this.visualElement, "transform");
          const { animationState: g } = this.visualElement;
          g && g.setActive("whileDrag", !0);
        },
        s = (c, f) => {
          const {
            dragPropagation: d,
            dragDirectionLock: p,
            onDirectionLock: y,
            onDrag: g,
          } = this.getProps();
          if (!d && !this.openDragLock) return;
          const { offset: w } = f;
          if (p && this.currentDirection === null) {
            (this.currentDirection = yR(w)),
              this.currentDirection !== null && y && y(this.currentDirection);
            return;
          }
          this.updateAxis("x", f.point, w),
            this.updateAxis("y", f.point, w),
            this.visualElement.render(),
            g && g(c, f);
        },
        a = (c, f) => this.stop(c, f),
        l = () =>
          Tt((c) => {
            var f;
            return (
              this.getAnimationState(c) === "paused" &&
              ((f = this.getAxisMotionValue(c).animation) === null ||
              f === void 0
                ? void 0
                : f.play())
            );
          }),
        { dragSnapToOrigin: u } = this.getProps();
      this.panSession = new dx(
        t,
        {
          onSessionStart: o,
          onStart: i,
          onMove: s,
          onSessionEnd: a,
          resumeAnimation: l,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: u,
        }
      );
    }
    stop(t, n) {
      const r = this.isDragging;
      if ((this.cancel(), !r)) return;
      const { velocity: o } = n;
      this.startAnimation(o);
      const { onDragEnd: i } = this.getProps();
      i && fe.postRender(() => i(t, n));
    }
    cancel() {
      this.isDragging = !1;
      const { projection: t, animationState: n } = this.visualElement;
      t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      const { dragPropagation: r } = this.getProps();
      !r &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        n && n.setActive("whileDrag", !1);
    }
    updateAxis(t, n, r) {
      const { drag: o } = this.getProps();
      if (!r || !$s(t, o, this.currentDirection)) return;
      const i = this.getAxisMotionValue(t);
      let s = this.originPoint[t] + r[t];
      this.constraints &&
        this.constraints[t] &&
        (s = uR(s, this.constraints[t], this.elastic[t])),
        i.set(s);
    }
    resolveConstraints() {
      var t;
      const { dragConstraints: n, dragElastic: r } = this.getProps(),
        o =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
        i = this.constraints;
      n && Jr(n)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : n && o
        ? (this.constraints = cR(o.layoutBox, n))
        : (this.constraints = !1),
        (this.elastic = pR(r)),
        i !== this.constraints &&
          o &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Tt((s) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(s) &&
              (this.constraints[s] = hR(o.layoutBox[s], this.constraints[s]));
          });
    }
    resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: n } =
        this.getProps();
      if (!t || !Jr(t)) return !1;
      const r = t.current,
        { projection: o } = this.visualElement;
      if (!o || !o.layout) return !1;
      const i = iR(r, o.root, this.visualElement.getTransformPagePoint());
      let s = dR(o.layout.layoutBox, i);
      if (n) {
        const a = n(X2(s));
        (this.hasMutatedConstraints = !!a), a && (s = ix(a));
      }
      return s;
    }
    startAnimation(t) {
      const {
          drag: n,
          dragMomentum: r,
          dragElastic: o,
          dragTransition: i,
          dragSnapToOrigin: s,
          onDragTransitionEnd: a,
        } = this.getProps(),
        l = this.constraints || {},
        u = Tt((c) => {
          if (!$s(c, n, this.currentDirection)) return;
          let f = (l && l[c]) || {};
          s && (f = { min: 0, max: 0 });
          const d = o ? 200 : 1e6,
            p = o ? 40 : 1e7,
            y = {
              type: "inertia",
              velocity: r ? t[c] : 0,
              bounceStiffness: d,
              bounceDamping: p,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...f,
            };
          return this.startAxisValueAnimation(c, y);
        });
      return Promise.all(u).then(a);
    }
    startAxisValueAnimation(t, n) {
      const r = this.getAxisMotionValue(t);
      return (
        Ic(this.visualElement, t),
        r.start(zf(t, r, 0, n, this.visualElement, !1))
      );
    }
    stopAnimation() {
      Tt((t) => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
      Tt((t) => {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null ||
          n === void 0
          ? void 0
          : n.pause();
      });
    }
    getAnimationState(t) {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.state;
    }
    getAxisMotionValue(t) {
      const n = `_drag${t.toUpperCase()}`,
        r = this.visualElement.getProps(),
        o = r[n];
      return (
        o ||
        this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
      );
    }
    snapToCursor(t) {
      Tt((n) => {
        const { drag: r } = this.getProps();
        if (!$s(n, r, this.currentDirection)) return;
        const { projection: o } = this.visualElement,
          i = this.getAxisMotionValue(n);
        if (o && o.layout) {
          const { min: s, max: a } = o.layout.layoutBox[n];
          i.set(t[n] - Se(s, a, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: t, dragConstraints: n } = this.getProps(),
        { projection: r } = this.visualElement;
      if (!Jr(n) || !r || !this.constraints) return;
      this.stopAnimation();
      const o = { x: 0, y: 0 };
      Tt((s) => {
        const a = this.getAxisMotionValue(s);
        if (a && this.constraints !== !1) {
          const l = a.get();
          o[s] = fR({ min: l, max: l }, this.constraints[s]);
        }
      });
      const { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        Tt((s) => {
          if (!$s(s, t, null)) return;
          const a = this.getAxisMotionValue(s),
            { min: l, max: u } = this.constraints[s];
          a.set(Se(l, u, o[s]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      mR.set(this.visualElement, this);
      const t = this.visualElement.current,
        n = to(t, "pointerdown", (l) => {
          const { drag: u, dragListener: c = !0 } = this.getProps();
          u && c && this.start(l);
        }),
        r = () => {
          const { dragConstraints: l } = this.getProps();
          Jr(l) &&
            l.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: o } = this.visualElement,
        i = o.addEventListener("measure", r);
      o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
        fe.read(r);
      const s = Yi(window, "resize", () =>
          this.scalePositionWithinConstraints()
        ),
        a = o.addEventListener(
          "didUpdate",
          ({ delta: l, hasLayoutChanged: u }) => {
            this.isDragging &&
              u &&
              (Tt((c) => {
                const f = this.getAxisMotionValue(c);
                f &&
                  ((this.originPoint[c] += l[c].translate),
                  f.set(f.get() + l[c].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        s(), n(), i(), a && a();
      };
    }
    getProps() {
      const t = this.visualElement.getProps(),
        {
          drag: n = !1,
          dragDirectionLock: r = !1,
          dragPropagation: o = !1,
          dragConstraints: i = !1,
          dragElastic: s = Kc,
          dragMomentum: a = !0,
        } = t;
      return {
        ...t,
        drag: n,
        dragDirectionLock: r,
        dragPropagation: o,
        dragConstraints: i,
        dragElastic: s,
        dragMomentum: a,
      };
    }
  }
  function $s(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
  }
  function yR(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
  }
  class vR extends dr {
    constructor(t) {
      super(t),
        (this.removeGroupControls = xt),
        (this.removeListeners = xt),
        (this.controls = new gR(t));
    }
    mount() {
      const { dragControls: t } = this.node.getProps();
      t && (this.removeGroupControls = t.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || xt);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  }
  const Pm = (e) => (t, n) => {
    e && fe.postRender(() => e(t, n));
  };
  class wR extends dr {
    constructor() {
      super(...arguments), (this.removePointerDownListener = xt);
    }
    onPointerDown(t) {
      this.session = new dx(t, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
      });
    }
    createPanHandlers() {
      const {
        onPanSessionStart: t,
        onPanStart: n,
        onPan: r,
        onPanEnd: o,
      } = this.node.getProps();
      return {
        onSessionStart: Pm(t),
        onStart: Pm(n),
        onMove: r,
        onEnd: (i, s) => {
          delete this.session, o && fe.postRender(() => o(i, s));
        },
      };
    }
    mount() {
      this.removePointerDownListener = to(
        this.node.current,
        "pointerdown",
        (t) => this.onPointerDown(t)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  const aa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
  function Tm(e, t) {
    return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
  }
  const ni = {
      correct: (e, t) => {
        if (!t.target) return e;
        if (typeof e == "string")
          if (X.test(e)) e = parseFloat(e);
          else return e;
        const n = Tm(e, t.target.x),
          r = Tm(e, t.target.y);
        return `${n}% ${r}%`;
      },
    },
    xR = {
      correct: (e, { treeScale: t, projectionDelta: n }) => {
        const r = e,
          o = ar.parse(e);
        if (o.length > 5) return r;
        const i = ar.createTransformer(e),
          s = typeof o[0] != "number" ? 1 : 0,
          a = n.x.scale * t.x,
          l = n.y.scale * t.y;
        (o[0 + s] /= a), (o[1 + s] /= l);
        const u = Se(a, l, 0.5);
        return (
          typeof o[2 + s] == "number" && (o[2 + s] /= u),
          typeof o[3 + s] == "number" && (o[3 + s] /= u),
          i(o)
        );
      },
    };
  class SR extends x.Component {
    componentDidMount() {
      const {
          visualElement: t,
          layoutGroup: n,
          switchLayoutGroup: r,
          layoutId: o,
        } = this.props,
        { projection: i } = t;
      bk(CR),
        i &&
          (n.group && n.group.add(i),
          r && r.register && o && r.register(i),
          i.root.didUpdate(),
          i.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (aa.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(t) {
      const {
          layoutDependency: n,
          visualElement: r,
          drag: o,
          isPresent: i,
        } = this.props,
        s = r.projection;
      return (
        s &&
          ((s.isPresent = i),
          o || t.layoutDependency !== n || n === void 0
            ? s.willUpdate()
            : this.safeToRemove(),
          t.isPresent !== i &&
            (i
              ? s.promote()
              : s.relegate() ||
                fe.postRender(() => {
                  const a = s.getStack();
                  (!a || !a.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      const { projection: t } = this.props.visualElement;
      t &&
        (t.root.didUpdate(),
        mf.postRender(() => {
          !t.currentAnimation && t.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      const {
          visualElement: t,
          layoutGroup: n,
          switchLayoutGroup: r,
        } = this.props,
        { projection: o } = t;
      o &&
        (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        r && r.deregister && r.deregister(o));
    }
    safeToRemove() {
      const { safeToRemove: t } = this.props;
      t && t();
    }
    render() {
      return null;
    }
  }
  function hx(e) {
    const [t, n] = q0(),
      r = x.useContext(af);
    return k.jsx(SR, {
      ...e,
      layoutGroup: r,
      switchLayoutGroup: x.useContext(ow),
      isPresent: t,
      safeToRemove: n,
    });
  }
  const CR = {
    borderRadius: {
      ...ni,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ni,
    borderTopRightRadius: ni,
    borderBottomLeftRadius: ni,
    borderBottomRightRadius: ni,
    boxShadow: xR,
  };
  function ER(e, t, n) {
    const r = Qe(e) ? e : Gi(e);
    return r.start(zf("", r, t, n)), r.animation;
  }
  function PR(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
  }
  const TR = (e, t) => e.depth - t.depth;
  class bR {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(t) {
      Af(this.children, t), (this.isDirty = !0);
    }
    remove(t) {
      Nf(this.children, t), (this.isDirty = !0);
    }
    forEach(t) {
      this.isDirty && this.children.sort(TR),
        (this.isDirty = !1),
        this.children.forEach(t);
    }
  }
  function kR(e, t) {
    const n = rn.now(),
      r = ({ timestamp: o }) => {
        const i = o - n;
        i >= t && (sr(r), e(i - t));
      };
    return fe.read(r, !0), () => sr(r);
  }
  const px = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    MR = px.length,
    bm = (e) => (typeof e == "string" ? parseFloat(e) : e),
    km = (e) => typeof e == "number" || X.test(e);
  function RR(e, t, n, r, o, i) {
    o
      ? ((e.opacity = Se(0, n.opacity !== void 0 ? n.opacity : 1, AR(r))),
        (e.opacityExit = Se(t.opacity !== void 0 ? t.opacity : 1, 0, NR(r))))
      : i &&
        (e.opacity = Se(
          t.opacity !== void 0 ? t.opacity : 1,
          n.opacity !== void 0 ? n.opacity : 1,
          r
        ));
    for (let s = 0; s < MR; s++) {
      const a = `border${px[s]}Radius`;
      let l = Mm(t, a),
        u = Mm(n, a);
      if (l === void 0 && u === void 0) continue;
      l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || km(l) === km(u)
          ? ((e[a] = Math.max(Se(bm(l), bm(u), r), 0)),
            (nn.test(u) || nn.test(l)) && (e[a] += "%"))
          : (e[a] = u);
    }
    (t.rotate || n.rotate) && (e.rotate = Se(t.rotate || 0, n.rotate || 0, r));
  }
  function Mm(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
  }
  const AR = mx(0, 0.5, Lw),
    NR = mx(0.5, 0.95, xt);
  function mx(e, t, n) {
    return (r) => (r < e ? 0 : r > t ? 1 : n(Lo(e, t, r)));
  }
  function Rm(e, t) {
    (e.min = t.min), (e.max = t.max);
  }
  function Pt(e, t) {
    Rm(e.x, t.x), Rm(e.y, t.y);
  }
  function Am(e, t) {
    (e.translate = t.translate),
      (e.scale = t.scale),
      (e.originPoint = t.originPoint),
      (e.origin = t.origin);
  }
  function Nm(e, t, n, r, o) {
    return (
      (e -= t), (e = Ka(e, 1 / n, r)), o !== void 0 && (e = Ka(e, 1 / o, r)), e
    );
  }
  function DR(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
    if (
      (nn.test(t) &&
        ((t = parseFloat(t)), (t = Se(s.min, s.max, t / 100) - s.min)),
      typeof t != "number")
    )
      return;
    let a = Se(i.min, i.max, r);
    e === i && (a -= t),
      (e.min = Nm(e.min, t, n, a, o)),
      (e.max = Nm(e.max, t, n, a, o));
  }
  function Dm(e, t, [n, r, o], i, s) {
    DR(e, t[n], t[r], t[o], t.scale, i, s);
  }
  const LR = ["x", "scaleX", "originX"],
    OR = ["y", "scaleY", "originY"];
  function Lm(e, t, n, r) {
    Dm(e.x, t, LR, n ? n.x : void 0, r ? r.x : void 0),
      Dm(e.y, t, OR, n ? n.y : void 0, r ? r.y : void 0);
  }
  function Om(e) {
    return e.translate === 0 && e.scale === 1;
  }
  function gx(e) {
    return Om(e.x) && Om(e.y);
  }
  function _m(e, t) {
    return e.min === t.min && e.max === t.max;
  }
  function _R(e, t) {
    return _m(e.x, t.x) && _m(e.y, t.y);
  }
  function Im(e, t) {
    return (
      Math.round(e.min) === Math.round(t.min) &&
      Math.round(e.max) === Math.round(t.max)
    );
  }
  function yx(e, t) {
    return Im(e.x, t.x) && Im(e.y, t.y);
  }
  function jm(e) {
    return et(e.x) / et(e.y);
  }
  function Fm(e, t) {
    return (
      e.translate === t.translate &&
      e.scale === t.scale &&
      e.originPoint === t.originPoint
    );
  }
  class IR {
    constructor() {
      this.members = [];
    }
    add(t) {
      Af(this.members, t), t.scheduleRender();
    }
    remove(t) {
      if (
        (Nf(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead)
      ) {
        const n = this.members[this.members.length - 1];
        n && this.promote(n);
      }
    }
    relegate(t) {
      const n = this.members.findIndex((o) => t === o);
      if (n === 0) return !1;
      let r;
      for (let o = n; o >= 0; o--) {
        const i = this.members[o];
        if (i.isPresent !== !1) {
          r = i;
          break;
        }
      }
      return r ? (this.promote(r), !0) : !1;
    }
    promote(t, n) {
      const r = this.lead;
      if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
        r.instance && r.scheduleRender(),
          t.scheduleRender(),
          (t.resumeFrom = r),
          n && (t.resumeFrom.preserveOpacity = !0),
          r.snapshot &&
            ((t.snapshot = r.snapshot),
            (t.snapshot.latestValues = r.animationValues || r.latestValues)),
          t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
        const { crossfade: o } = t.options;
        o === !1 && r.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((t) => {
        const { options: n, resumingFrom: r } = t;
        n.onExitComplete && n.onExitComplete(),
          r && r.options.onExitComplete && r.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach((t) => {
        t.instance && t.scheduleRender(!1);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  function jR(e, t, n) {
    let r = "";
    const o = e.x.translate / t.x,
      i = e.y.translate / t.y,
      s = (n == null ? void 0 : n.z) || 0;
    if (
      ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
      (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
      n)
    ) {
      const {
        transformPerspective: u,
        rotate: c,
        rotateX: f,
        rotateY: d,
        skewX: p,
        skewY: y,
      } = n;
      u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        f && (r += `rotateX(${f}deg) `),
        d && (r += `rotateY(${d}deg) `),
        p && (r += `skewX(${p}deg) `),
        y && (r += `skewY(${y}deg) `);
    }
    const a = e.x.scale * t.x,
      l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
  }
  const wu = ["", "X", "Y", "Z"],
    FR = { visibility: "hidden" },
    Vm = 1e3;
  let VR = 0;
  function xu(e, t, n, r) {
    const { latestValues: o } = t;
    o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
  }
  function vx(e) {
    if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
    const { visualElement: t } = e.options;
    if (!t) return;
    const n = bw(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const { layout: o, layoutId: i } = e.options;
      window.MotionCancelOptimisedAnimation(n, "transform", fe, !(o || i));
    }
    const { parent: r } = e;
    r && !r.hasCheckedOptimisedAppear && vx(r);
  }
  function wx({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: o,
  }) {
    return class {
      constructor(s = {}, a = t == null ? void 0 : t()) {
        (this.id = VR++),
          (this.animationId = 0),
          (this.children = new Set()),
          (this.options = {}),
          (this.isTreeAnimating = !1),
          (this.isAnimationBlocked = !1),
          (this.isLayoutDirty = !1),
          (this.isProjectionDirty = !1),
          (this.isSharedProjectionDirty = !1),
          (this.isTransformDirty = !1),
          (this.updateManuallyBlocked = !1),
          (this.updateBlockedByResize = !1),
          (this.isUpdating = !1),
          (this.isSVG = !1),
          (this.needsReset = !1),
          (this.shouldResetTransform = !1),
          (this.hasCheckedOptimisedAppear = !1),
          (this.treeScale = { x: 1, y: 1 }),
          (this.eventHandlers = new Map()),
          (this.hasTreeAnimated = !1),
          (this.updateScheduled = !1),
          (this.scheduleUpdate = () => this.update()),
          (this.projectionUpdateScheduled = !1),
          (this.checkUpdateFailed = () => {
            this.isUpdating &&
              ((this.isUpdating = !1), this.clearAllSnapshots());
          }),
          (this.updateProjection = () => {
            (this.projectionUpdateScheduled = !1),
              this.nodes.forEach($R),
              this.nodes.forEach(GR),
              this.nodes.forEach(QR),
              this.nodes.forEach(UR);
          }),
          (this.resolvedRelativeTargetAt = 0),
          (this.hasProjected = !1),
          (this.isVisible = !0),
          (this.animationProgress = 0),
          (this.sharedNodes = new Map()),
          (this.latestValues = s),
          (this.root = a ? a.root || a : this),
          (this.path = a ? [...a.path, a] : []),
          (this.parent = a),
          (this.depth = a ? a.depth + 1 : 0);
        for (let l = 0; l < this.path.length; l++)
          this.path[l].shouldResetTransform = !0;
        this.root === this && (this.nodes = new bR());
      }
      addEventListener(s, a) {
        return (
          this.eventHandlers.has(s) || this.eventHandlers.set(s, new Df()),
          this.eventHandlers.get(s).add(a)
        );
      }
      notifyListeners(s, ...a) {
        const l = this.eventHandlers.get(s);
        l && l.notify(...a);
      }
      hasListeners(s) {
        return this.eventHandlers.has(s);
      }
      mount(s, a = this.root.hasTreeAnimated) {
        if (this.instance) return;
        (this.isSVG = PR(s)), (this.instance = s);
        const { layoutId: l, layout: u, visualElement: c } = this.options;
        if (
          (c && !c.current && c.mount(s),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          a && (u || l) && (this.isLayoutDirty = !0),
          e)
        ) {
          let f;
          const d = () => (this.root.updateBlockedByResize = !1);
          e(s, () => {
            (this.root.updateBlockedByResize = !0),
              f && f(),
              (f = kR(d, 250)),
              aa.hasAnimatedSinceResize &&
                ((aa.hasAnimatedSinceResize = !1), this.nodes.forEach(zm));
          });
        }
        l && this.root.registerSharedNode(l, this),
          this.options.animate !== !1 &&
            c &&
            (l || u) &&
            this.addEventListener(
              "didUpdate",
              ({
                delta: f,
                hasLayoutChanged: d,
                hasRelativeLayoutChanged: p,
                layout: y,
              }) => {
                if (this.isTreeAnimationBlocked()) {
                  (this.target = void 0), (this.relativeTarget = void 0);
                  return;
                }
                const g =
                    this.options.transition || c.getDefaultTransition() || JR,
                  { onLayoutAnimationStart: w, onLayoutAnimationComplete: h } =
                    c.getProps(),
                  m = !this.targetLayout || !yx(this.targetLayout, y),
                  v = !d && p;
                if (
                  this.options.layoutRoot ||
                  this.resumeFrom ||
                  v ||
                  (d && (m || !this.currentAnimation))
                ) {
                  this.resumeFrom &&
                    ((this.resumingFrom = this.resumeFrom),
                    (this.resumingFrom.resumingFrom = void 0)),
                    this.setAnimationOrigin(f, v);
                  const C = { ...bf(g, "layout"), onPlay: w, onComplete: h };
                  (c.shouldReduceMotion || this.options.layoutRoot) &&
                    ((C.delay = 0), (C.type = !1)),
                    this.startAnimation(C);
                } else
                  d || zm(this),
                    this.isLead() &&
                      this.options.onExitComplete &&
                      this.options.onExitComplete();
                this.targetLayout = y;
              }
            );
      }
      unmount() {
        this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this);
        const s = this.getStack();
        s && s.remove(this),
          this.parent && this.parent.children.delete(this),
          (this.instance = void 0),
          sr(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return (
          this.isAnimationBlocked ||
          (this.parent && this.parent.isTreeAnimationBlocked()) ||
          !1
        );
      }
      startUpdate() {
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(YR),
          this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: s } = this.options;
        return s && s.getProps().transformTemplate;
      }
      willUpdate(s = !0) {
        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (
          (window.MotionCancelOptimisedAnimation &&
            !this.hasCheckedOptimisedAppear &&
            vx(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
        )
          return;
        this.isLayoutDirty = !0;
        for (let c = 0; c < this.path.length; c++) {
          const f = this.path[c];
          (f.shouldResetTransform = !0),
            f.updateScroll("snapshot"),
            f.options.layoutRoot && f.willUpdate(!1);
        }
        const { layoutId: a, layout: l } = this.options;
        if (a === void 0 && !l) return;
        const u = this.getTransformTemplate();
        (this.prevTransformTemplateValue = u
          ? u(this.latestValues, "")
          : void 0),
          this.updateSnapshot(),
          s && this.notifyListeners("willUpdate");
      }
      update() {
        if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
          this.unblockUpdate(),
            this.clearAllSnapshots(),
            this.nodes.forEach(Bm);
          return;
        }
        this.isUpdating || this.nodes.forEach(HR),
          (this.isUpdating = !1),
          this.nodes.forEach(KR),
          this.nodes.forEach(BR),
          this.nodes.forEach(zR),
          this.clearAllSnapshots();
        const a = rn.now();
        (Ve.delta = Pn(0, 1e3 / 60, a - Ve.timestamp)),
          (Ve.timestamp = a),
          (Ve.isProcessing = !0),
          cu.update.process(Ve),
          cu.preRender.process(Ve),
          cu.render.process(Ve),
          (Ve.isProcessing = !1);
      }
      didUpdate() {
        this.updateScheduled ||
          ((this.updateScheduled = !0), mf.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(WR), this.sharedNodes.forEach(XR);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled ||
          ((this.projectionUpdateScheduled = !0),
          fe.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        fe.postRender(() => {
          this.isLayoutDirty
            ? this.root.didUpdate()
            : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        this.snapshot ||
          !this.instance ||
          ((this.snapshot = this.measure()),
          this.snapshot &&
            !et(this.snapshot.measuredBox.x) &&
            !et(this.snapshot.measuredBox.y) &&
            (this.snapshot = void 0));
      }
      updateLayout() {
        if (
          !this.instance ||
          (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) &&
            !this.isLayoutDirty)
        )
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let l = 0; l < this.path.length; l++)
            this.path[l].updateScroll();
        const s = this.layout;
        (this.layout = this.measure(!1)),
          (this.layoutCorrected = ke()),
          (this.isLayoutDirty = !1),
          (this.projectionDelta = void 0),
          this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: a } = this.options;
        a &&
          a.notify(
            "LayoutMeasure",
            this.layout.layoutBox,
            s ? s.layoutBox : void 0
          );
      }
      updateScroll(s = "measure") {
        let a = !!(this.options.layoutScroll && this.instance);
        if (
          (this.scroll &&
            this.scroll.animationId === this.root.animationId &&
            this.scroll.phase === s &&
            (a = !1),
          a)
        ) {
          const l = r(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: l,
            offset: n(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : l,
          };
        }
      }
      resetTransform() {
        if (!o) return;
        const s =
            this.isLayoutDirty ||
            this.shouldResetTransform ||
            this.options.alwaysMeasureLayout,
          a = this.projectionDelta && !gx(this.projectionDelta),
          l = this.getTransformTemplate(),
          u = l ? l(this.latestValues, "") : void 0,
          c = u !== this.prevTransformTemplateValue;
        s &&
          (a || mr(this.latestValues) || c) &&
          (o(this.instance, u),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
      }
      measure(s = !0) {
        const a = this.measurePageBox();
        let l = this.removeElementScroll(a);
        return (
          s && (l = this.removeTransform(l)),
          eA(l),
          {
            animationId: this.root.animationId,
            measuredBox: a,
            layoutBox: l,
            latestValues: {},
            source: this.id,
          }
        );
      }
      measurePageBox() {
        var s;
        const { visualElement: a } = this.options;
        if (!a) return ke();
        const l = a.measureViewportBox();
        if (
          !(
            ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
            this.path.some(tA)
          )
        ) {
          const { scroll: c } = this.root;
          c && (ro(l.x, c.offset.x), ro(l.y, c.offset.y));
        }
        return l;
      }
      removeElementScroll(s) {
        var a;
        const l = ke();
        if (
          (Pt(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        )
          return l;
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u],
            { scroll: f, options: d } = c;
          c !== this.root &&
            f &&
            d.layoutScroll &&
            (f.wasRoot && Pt(l, s), ro(l.x, f.offset.x), ro(l.y, f.offset.y));
        }
        return l;
      }
      applyTransform(s, a = !1) {
        const l = ke();
        Pt(l, s);
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u];
          !a &&
            c.options.layoutScroll &&
            c.scroll &&
            c !== c.root &&
            oo(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
            mr(c.latestValues) && oo(l, c.latestValues);
        }
        return mr(this.latestValues) && oo(l, this.latestValues), l;
      }
      removeTransform(s) {
        const a = ke();
        Pt(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !mr(u.latestValues)) continue;
          Wc(u.latestValues) && u.updateSnapshot();
          const c = ke(),
            f = u.measurePageBox();
          Pt(c, f),
            Lm(
              a,
              u.latestValues,
              u.snapshot ? u.snapshot.layoutBox : void 0,
              c
            );
        }
        return mr(this.latestValues) && Lm(a, this.latestValues), a;
      }
      setTargetDelta(s) {
        (this.targetDelta = s),
          this.root.scheduleUpdateProjection(),
          (this.isProjectionDirty = !0);
      }
      setOptions(s) {
        this.options = {
          ...this.options,
          ...s,
          crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
        };
      }
      clearMeasurements() {
        (this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1);
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent &&
          this.relativeParent.resolvedRelativeTargetAt !== Ve.timestamp &&
          this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(s = !1) {
        var a;
        const l = this.getLead();
        this.isProjectionDirty ||
          (this.isProjectionDirty = l.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
          this.isSharedProjectionDirty ||
            (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
        const u = !!this.resumingFrom || this !== l;
        if (
          !(
            s ||
            (u && this.isSharedProjectionDirty) ||
            this.isProjectionDirty ||
            (!((a = this.parent) === null || a === void 0) &&
              a.isProjectionDirty) ||
            this.attemptToResolveRelativeTarget ||
            this.root.updateBlockedByResize
          )
        )
          return;
        const { layout: f, layoutId: d } = this.options;
        if (!(!this.layout || !(f || d))) {
          if (
            ((this.resolvedRelativeTargetAt = Ve.timestamp),
            !this.targetDelta && !this.relativeTarget)
          ) {
            const p = this.getClosestProjectingParent();
            p && p.layout && this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ke()),
                (this.relativeTargetOrigin = ke()),
                Si(
                  this.relativeTargetOrigin,
                  this.layout.layoutBox,
                  p.layout.layoutBox
                ),
                Pt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          if (
            !(!this.relativeTarget && !this.targetDelta) &&
            (this.target ||
              ((this.target = ke()), (this.targetWithTransforms = ke())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                rR(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Pt(this.target, this.layout.layoutBox),
                ux(this.target, this.targetDelta))
              : Pt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ke()),
                (this.relativeTargetOrigin = ke()),
                Si(this.relativeTargetOrigin, this.target, p.target),
                Pt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
        }
      }
      getClosestProjectingParent() {
        if (
          !(
            !this.parent ||
            Wc(this.parent.latestValues) ||
            lx(this.parent.latestValues)
          )
        )
          return this.parent.isProjecting()
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!(
          (this.relativeTarget ||
            this.targetDelta ||
            this.options.layoutRoot) &&
          this.layout
        );
      }
      calcProjection() {
        var s;
        const a = this.getLead(),
          l = !!this.resumingFrom || this !== a;
        let u = !0;
        if (
          ((this.isProjectionDirty ||
            (!((s = this.parent) === null || s === void 0) &&
              s.isProjectionDirty)) &&
            (u = !1),
          l &&
            (this.isSharedProjectionDirty || this.isTransformDirty) &&
            (u = !1),
          this.resolvedRelativeTargetAt === Ve.timestamp && (u = !1),
          u)
        )
          return;
        const { layout: c, layoutId: f } = this.options;
        if (
          ((this.isTreeAnimating = !!(
            (this.parent && this.parent.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(c || f))
        )
          return;
        Pt(this.layoutCorrected, this.layout.layoutBox);
        const d = this.treeScale.x,
          p = this.treeScale.y;
        oR(this.layoutCorrected, this.treeScale, this.path, l),
          a.layout &&
            !a.target &&
            (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
            ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ke()));
        const { target: y } = a;
        if (!y) {
          this.prevProjectionDelta &&
            (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        !this.projectionDelta || !this.prevProjectionDelta
          ? this.createProjectionDeltas()
          : (Am(this.prevProjectionDelta.x, this.projectionDelta.x),
            Am(this.prevProjectionDelta.y, this.projectionDelta.y)),
          xi(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
          (this.treeScale.x !== d ||
            this.treeScale.y !== p ||
            !Fm(this.projectionDelta.x, this.prevProjectionDelta.x) ||
            !Fm(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
            ((this.hasProjected = !0),
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", y));
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender(s = !0) {
        var a;
        if (
          ((a = this.options.visualElement) === null ||
            a === void 0 ||
            a.scheduleRender(),
          s)
        ) {
          const l = this.getStack();
          l && l.scheduleRender();
        }
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        (this.prevProjectionDelta = no()),
          (this.projectionDelta = no()),
          (this.projectionDeltaWithTransform = no());
      }
      setAnimationOrigin(s, a = !1) {
        const l = this.snapshot,
          u = l ? l.latestValues : {},
          c = { ...this.latestValues },
          f = no();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !a);
        const d = ke(),
          p = l ? l.source : void 0,
          y = this.layout ? this.layout.source : void 0,
          g = p !== y,
          w = this.getStack(),
          h = !w || w.members.length <= 1,
          m = !!(
            g &&
            !h &&
            this.options.crossfade === !0 &&
            !this.path.some(ZR)
          );
        this.animationProgress = 0;
        let v;
        (this.mixTargetDelta = (C) => {
          const E = C / 1e3;
          $m(f.x, s.x, E),
            $m(f.y, s.y, E),
            this.setTargetDelta(f),
            this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.layout &&
              this.relativeParent &&
              this.relativeParent.layout &&
              (Si(
                d,
                this.layout.layoutBox,
                this.relativeParent.layout.layoutBox
              ),
              qR(this.relativeTarget, this.relativeTargetOrigin, d, E),
              v && _R(this.relativeTarget, v) && (this.isProjectionDirty = !1),
              v || (v = ke()),
              Pt(v, this.relativeTarget)),
            g &&
              ((this.animationValues = c),
              RR(c, u, this.latestValues, E, m, h)),
            this.root.scheduleUpdateProjection(),
            this.scheduleRender(),
            (this.animationProgress = E);
        }),
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(s) {
        this.notifyListeners("animationStart"),
          this.currentAnimation && this.currentAnimation.stop(),
          this.resumingFrom &&
            this.resumingFrom.currentAnimation &&
            this.resumingFrom.currentAnimation.stop(),
          this.pendingAnimation &&
            (sr(this.pendingAnimation), (this.pendingAnimation = void 0)),
          (this.pendingAnimation = fe.update(() => {
            (aa.hasAnimatedSinceResize = !0),
              (this.currentAnimation = ER(0, Vm, {
                ...s,
                onUpdate: (a) => {
                  this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
                },
                onStop: () => {},
                onComplete: () => {
                  s.onComplete && s.onComplete(), this.completeAnimation();
                },
              })),
              this.resumingFrom &&
                (this.resumingFrom.currentAnimation = this.currentAnimation),
              (this.pendingAnimation = void 0);
          }));
      }
      completeAnimation() {
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
        const s = this.getStack();
        s && s.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation &&
          (this.mixTargetDelta && this.mixTargetDelta(Vm),
          this.currentAnimation.stop()),
          this.completeAnimation();
      }
      applyTransformsToTarget() {
        const s = this.getLead();
        let {
          targetWithTransforms: a,
          target: l,
          layout: u,
          latestValues: c,
        } = s;
        if (!(!a || !l || !u)) {
          if (
            this !== s &&
            this.layout &&
            u &&
            xx(this.options.animationType, this.layout.layoutBox, u.layoutBox)
          ) {
            l = this.target || ke();
            const f = et(this.layout.layoutBox.x);
            (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
            const d = et(this.layout.layoutBox.y);
            (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
          }
          Pt(a, l),
            oo(a, c),
            xi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
        }
      }
      registerSharedNode(s, a) {
        this.sharedNodes.has(s) || this.sharedNodes.set(s, new IR()),
          this.sharedNodes.get(s).add(a);
        const u = a.options.initialPromotionConfig;
        a.promote({
          transition: u ? u.transition : void 0,
          preserveFollowOpacity:
            u && u.shouldPreserveFollowOpacity
              ? u.shouldPreserveFollowOpacity(a)
              : void 0,
        });
      }
      isLead() {
        const s = this.getStack();
        return s ? s.lead === this : !0;
      }
      getLead() {
        var s;
        const { layoutId: a } = this.options;
        return a
          ? ((s = this.getStack()) === null || s === void 0
              ? void 0
              : s.lead) || this
          : this;
      }
      getPrevLead() {
        var s;
        const { layoutId: a } = this.options;
        return a
          ? (s = this.getStack()) === null || s === void 0
            ? void 0
            : s.prevLead
          : void 0;
      }
      getStack() {
        const { layoutId: s } = this.options;
        if (s) return this.root.sharedNodes.get(s);
      }
      promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
        const u = this.getStack();
        u && u.promote(this, l),
          s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          a && this.setOptions({ transition: a });
      }
      relegate() {
        const s = this.getStack();
        return s ? s.relegate(this) : !1;
      }
      resetSkewAndRotation() {
        const { visualElement: s } = this.options;
        if (!s) return;
        let a = !1;
        const { latestValues: l } = s;
        if (
          ((l.z ||
            l.rotate ||
            l.rotateX ||
            l.rotateY ||
            l.rotateZ ||
            l.skewX ||
            l.skewY) &&
            (a = !0),
          !a)
        )
          return;
        const u = {};
        l.z && xu("z", s, u, this.animationValues);
        for (let c = 0; c < wu.length; c++)
          xu(`rotate${wu[c]}`, s, u, this.animationValues),
            xu(`skew${wu[c]}`, s, u, this.animationValues);
        s.render();
        for (const c in u)
          s.setStaticValue(c, u[c]),
            this.animationValues && (this.animationValues[c] = u[c]);
        s.scheduleRender();
      }
      getProjectionStyles(s) {
        var a, l;
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return FR;
        const u = { visibility: "" },
          c = this.getTransformTemplate();
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (u.opacity = ""),
            (u.pointerEvents = ia(s == null ? void 0 : s.pointerEvents) || ""),
            (u.transform = c ? c(this.latestValues, "") : "none"),
            u
          );
        const f = this.getLead();
        if (!this.projectionDelta || !this.layout || !f.target) {
          const g = {};
          return (
            this.options.layoutId &&
              ((g.opacity =
                this.latestValues.opacity !== void 0
                  ? this.latestValues.opacity
                  : 1),
              (g.pointerEvents =
                ia(s == null ? void 0 : s.pointerEvents) || "")),
            this.hasProjected &&
              !mr(this.latestValues) &&
              ((g.transform = c ? c({}, "") : "none"),
              (this.hasProjected = !1)),
            g
          );
        }
        const d = f.animationValues || f.latestValues;
        this.applyTransformsToTarget(),
          (u.transform = jR(
            this.projectionDeltaWithTransform,
            this.treeScale,
            d
          )),
          c && (u.transform = c(d, u.transform));
        const { x: p, y } = this.projectionDelta;
        (u.transformOrigin = `${p.origin * 100}% ${y.origin * 100}% 0`),
          f.animationValues
            ? (u.opacity =
                f === this
                  ? (l =
                      (a = d.opacity) !== null && a !== void 0
                        ? a
                        : this.latestValues.opacity) !== null && l !== void 0
                    ? l
                    : 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
            : (u.opacity =
                f === this
                  ? d.opacity !== void 0
                    ? d.opacity
                    : ""
                  : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0);
        for (const g in Wi) {
          if (d[g] === void 0) continue;
          const { correct: w, applyTo: h, isCSSVariable: m } = Wi[g],
            v = u.transform === "none" ? d[g] : w(d[g], f);
          if (h) {
            const C = h.length;
            for (let E = 0; E < C; E++) u[h[E]] = v;
          } else
            m
              ? (this.options.visualElement.renderState.vars[g] = v)
              : (u[g] = v);
        }
        return (
          this.options.layoutId &&
            (u.pointerEvents =
              f === this
                ? ia(s == null ? void 0 : s.pointerEvents) || ""
                : "none"),
          u
        );
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((s) => {
          var a;
          return (a = s.currentAnimation) === null || a === void 0
            ? void 0
            : a.stop();
        }),
          this.root.nodes.forEach(Bm),
          this.root.sharedNodes.clear();
      }
    };
  }
  function BR(e) {
    e.updateLayout();
  }
  function zR(e) {
    var t;
    const n =
      ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
      e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: r, measuredBox: o } = e.layout,
        { animationType: i } = e.options,
        s = n.source !== e.layout.source;
      i === "size"
        ? Tt((f) => {
            const d = s ? n.measuredBox[f] : n.layoutBox[f],
              p = et(d);
            (d.min = r[f].min), (d.max = d.min + p);
          })
        : xx(i, n.layoutBox, r) &&
          Tt((f) => {
            const d = s ? n.measuredBox[f] : n.layoutBox[f],
              p = et(r[f]);
            (d.max = d.min + p),
              e.relativeTarget &&
                !e.currentAnimation &&
                ((e.isProjectionDirty = !0),
                (e.relativeTarget[f].max = e.relativeTarget[f].min + p));
          });
      const a = no();
      xi(a, r, n.layoutBox);
      const l = no();
      s ? xi(l, e.applyTransform(o, !0), n.measuredBox) : xi(l, r, n.layoutBox);
      const u = !gx(a);
      let c = !1;
      if (!e.resumeFrom) {
        const f = e.getClosestProjectingParent();
        if (f && !f.resumeFrom) {
          const { snapshot: d, layout: p } = f;
          if (d && p) {
            const y = ke();
            Si(y, n.layoutBox, d.layoutBox);
            const g = ke();
            Si(g, r, p.layoutBox),
              yx(y, g) || (c = !0),
              f.options.layoutRoot &&
                ((e.relativeTarget = g),
                (e.relativeTargetOrigin = y),
                (e.relativeParent = f));
          }
        }
      }
      e.notifyListeners("didUpdate", {
        layout: r,
        snapshot: n,
        delta: l,
        layoutDelta: a,
        hasLayoutChanged: u,
        hasRelativeLayoutChanged: c,
      });
    } else if (e.isLead()) {
      const { onExitComplete: r } = e.options;
      r && r();
    }
    e.options.transition = void 0;
  }
  function $R(e) {
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function UR(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function WR(e) {
    e.clearSnapshot();
  }
  function Bm(e) {
    e.clearMeasurements();
  }
  function HR(e) {
    e.isLayoutDirty = !1;
  }
  function KR(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
      e.resetTransform();
  }
  function zm(e) {
    e.finishAnimation(),
      (e.targetDelta = e.relativeTarget = e.target = void 0),
      (e.isProjectionDirty = !0);
  }
  function GR(e) {
    e.resolveTargetDelta();
  }
  function QR(e) {
    e.calcProjection();
  }
  function YR(e) {
    e.resetSkewAndRotation();
  }
  function XR(e) {
    e.removeLeadSnapshot();
  }
  function $m(e, t, n) {
    (e.translate = Se(t.translate, 0, n)),
      (e.scale = Se(t.scale, 1, n)),
      (e.origin = t.origin),
      (e.originPoint = t.originPoint);
  }
  function Um(e, t, n, r) {
    (e.min = Se(t.min, n.min, r)), (e.max = Se(t.max, n.max, r));
  }
  function qR(e, t, n, r) {
    Um(e.x, t.x, n.x, r), Um(e.y, t.y, n.y, r);
  }
  function ZR(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
  }
  const JR = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    Wm = (e) =>
      typeof navigator < "u" &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().includes(e),
    Hm = Wm("applewebkit/") && !Wm("chrome/") ? Math.round : xt;
  function Km(e) {
    (e.min = Hm(e.min)), (e.max = Hm(e.max));
  }
  function eA(e) {
    Km(e.x), Km(e.y);
  }
  function xx(e, t, n) {
    return (
      e === "position" || (e === "preserve-aspect" && !nR(jm(t), jm(n), 0.2))
    );
  }
  function tA(e) {
    var t;
    return (
      e !== e.root &&
      ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
    );
  }
  const nA = wx({
      attachResizeListener: (e, t) => Yi(e, "resize", t),
      measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      }),
      checkIsScrollRoot: () => !0,
    }),
    Su = { current: void 0 },
    Sx = wx({
      measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
      defaultParent: () => {
        if (!Su.current) {
          const e = new nA({});
          e.mount(window), e.setOptions({ layoutScroll: !0 }), (Su.current = e);
        }
        return Su.current;
      },
      resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none";
      },
      checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
    }),
    rA = {
      pan: { Feature: wR },
      drag: { Feature: vR, ProjectionNode: Sx, MeasureLayout: hx },
    };
  function Gm(e, t, n) {
    const { props: r } = e;
    e.animationState &&
      r.whileHover &&
      e.animationState.setActive("whileHover", n === "Start");
    const o = "onHover" + n,
      i = r[o];
    i && fe.postRender(() => i(t, ls(t)));
  }
  class oA extends dr {
    mount() {
      const { current: t } = this.node;
      t &&
        (this.unmount = rM(
          t,
          (n, r) => (Gm(this.node, r, "Start"), (o) => Gm(this.node, o, "End"))
        ));
    }
    unmount() {}
  }
  class iA extends dr {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let t = !1;
      try {
        t = this.node.current.matches(":focus-visible");
      } catch {
        t = !0;
      }
      !t ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = as(
        Yi(this.node.current, "focus", () => this.onFocus()),
        Yi(this.node.current, "blur", () => this.onBlur())
      );
    }
    unmount() {}
  }
  function Qm(e, t, n) {
    const { props: r } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState &&
      r.whileTap &&
      e.animationState.setActive("whileTap", n === "Start");
    const o = "onTap" + (n === "End" ? "" : n),
      i = r[o];
    i && fe.postRender(() => i(t, ls(t)));
  }
  class sA extends dr {
    mount() {
      const { current: t } = this.node;
      t &&
        (this.unmount = aM(
          t,
          (n, r) => (
            Qm(this.node, r, "Start"),
            (o, { success: i }) => Qm(this.node, o, i ? "End" : "Cancel")
          ),
          { useGlobalTarget: this.node.props.globalTapTarget }
        ));
    }
    unmount() {}
  }
  const Gc = new WeakMap(),
    Cu = new WeakMap(),
    aA = (e) => {
      const t = Gc.get(e.target);
      t && t(e);
    },
    lA = (e) => {
      e.forEach(aA);
    };
  function uA({ root: e, ...t }) {
    const n = e || document;
    Cu.has(n) || Cu.set(n, {});
    const r = Cu.get(n),
      o = JSON.stringify(t);
    return (
      r[o] || (r[o] = new IntersectionObserver(lA, { root: e, ...t })), r[o]
    );
  }
  function cA(e, t, n) {
    const r = uA(t);
    return (
      Gc.set(e, n),
      r.observe(e),
      () => {
        Gc.delete(e), r.unobserve(e);
      }
    );
  }
  const dA = { some: 0, all: 1 };
  class fA extends dr {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      const { viewport: t = {} } = this.node.getProps(),
        { root: n, margin: r, amount: o = "some", once: i } = t,
        s = {
          root: n ? n.current : void 0,
          rootMargin: r,
          threshold: typeof o == "number" ? o : dA[o],
        },
        a = (l) => {
          const { isIntersecting: u } = l;
          if (
            this.isInView === u ||
            ((this.isInView = u), i && !u && this.hasEnteredView)
          )
            return;
          u && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", u);
          const { onViewportEnter: c, onViewportLeave: f } =
              this.node.getProps(),
            d = u ? c : f;
          d && d(l);
        };
      return cA(this.node.current, s, a);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      const { props: t, prevProps: n } = this.node;
      ["amount", "margin", "root"].some(hA(t, n)) && this.startObserver();
    }
    unmount() {}
  }
  function hA({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
  }
  const pA = {
      inView: { Feature: fA },
      tap: { Feature: sA },
      focus: { Feature: iA },
      hover: { Feature: oA },
    },
    mA = { layout: { ProjectionNode: Sx, MeasureLayout: hx } },
    Qc = { current: null },
    Cx = { current: !1 };
  function gA() {
    if (((Cx.current = !0), !!cf))
      if (window.matchMedia) {
        const e = window.matchMedia("(prefers-reduced-motion)"),
          t = () => (Qc.current = e.matches);
        e.addListener(t), t();
      } else Qc.current = !1;
  }
  const yA = [...Gw, Ke, ar],
    vA = (e) => yA.find(Kw(e)),
    wA = new WeakMap();
  function xA(e, t, n) {
    for (const r in t) {
      const o = t[r],
        i = n[r];
      if (Qe(o)) e.addValue(r, o);
      else if (Qe(i)) e.addValue(r, Gi(o, { owner: e }));
      else if (i !== o)
        if (e.hasValue(r)) {
          const s = e.getValue(r);
          s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
        } else {
          const s = e.getStaticValue(r);
          e.addValue(r, Gi(s !== void 0 ? s : o, { owner: e }));
        }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t;
  }
  const Ym = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
  class SA {
    scrapeMotionValuesFromProps(t, n, r) {
      return {};
    }
    constructor(
      {
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: o,
        blockInitialAnimation: i,
        visualState: s,
      },
      a = {}
    ) {
      (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = Ff),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          const p = rn.now();
          this.renderScheduledAt < p &&
            ((this.renderScheduledAt = p), fe.render(this.render, !1, !0));
        });
      const { latestValues: l, renderState: u, onUpdate: c } = s;
      (this.onUpdate = c),
        (this.latestValues = l),
        (this.baseTarget = { ...l }),
        (this.initialValues = n.initial ? { ...l } : {}),
        (this.renderState = u),
        (this.parent = t),
        (this.props = n),
        (this.presenceContext = r),
        (this.depth = t ? t.depth + 1 : 0),
        (this.reducedMotionConfig = o),
        (this.options = a),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = Tl(n)),
        (this.isVariantNode = nw(n)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(t && t.current));
      const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(
        n,
        {},
        this
      );
      for (const p in d) {
        const y = d[p];
        l[p] !== void 0 && Qe(y) && y.set(l[p], !1);
      }
    }
    mount(t) {
      (this.current = t),
        wA.set(t, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(t),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
        Cx.current || gA(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
            ? !0
            : Qc.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      this.projection && this.projection.unmount(),
        sr(this.notifyUpdate),
        sr(this.render),
        this.valueSubscriptions.forEach((t) => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (const t in this.events) this.events[t].clear();
      for (const t in this.features) {
        const n = this.features[t];
        n && (n.unmount(), (n.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(t, n) {
      this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
      const r = jr.has(t);
      r && this.onBindTransform && this.onBindTransform();
      const o = n.on("change", (a) => {
          (this.latestValues[t] = a),
            this.props.onUpdate && fe.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0);
        }),
        i = n.on("renderRequest", this.scheduleRender);
      let s;
      window.MotionCheckAppearSync &&
        (s = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
          o(), i(), s && s(), n.owner && n.stop();
        });
    }
    sortNodePosition(t) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== t.type
        ? 0
        : this.sortInstanceNodePosition(this.current, t.current);
    }
    updateFeatures() {
      let t = "animation";
      for (t in Oo) {
        const n = Oo[t];
        if (!n) continue;
        const { isEnabled: r, Feature: o } = n;
        if (
          (!this.features[t] &&
            o &&
            r(this.props) &&
            (this.features[t] = new o(this)),
          this.features[t])
        ) {
          const i = this.features[t];
          i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : ke();
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, n) {
      this.latestValues[t] = n;
    }
    update(t, n) {
      (t.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = t),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = n);
      for (let r = 0; r < Ym.length; r++) {
        const o = Ym[r];
        this.propEventSubscriptions[o] &&
          (this.propEventSubscriptions[o](),
          delete this.propEventSubscriptions[o]);
        const i = "on" + o,
          s = t[i];
        s && (this.propEventSubscriptions[o] = this.on(o, s));
      }
      (this.prevMotionValues = xA(
        this,
        this.scrapeMotionValuesFromProps(t, this.prevProps, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this);
    }
    getProps() {
      return this.props;
    }
    getVariant(t) {
      return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    addVariantChild(t) {
      const n = this.getClosestVariantNode();
      if (n)
        return (
          n.variantChildren && n.variantChildren.add(t),
          () => n.variantChildren.delete(t)
        );
    }
    addValue(t, n) {
      const r = this.values.get(t);
      n !== r &&
        (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        (this.latestValues[t] = n.get()));
    }
    removeValue(t) {
      this.values.delete(t);
      const n = this.valueSubscriptions.get(t);
      n && (n(), this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState);
    }
    hasValue(t) {
      return this.values.has(t);
    }
    getValue(t, n) {
      if (this.props.values && this.props.values[t])
        return this.props.values[t];
      let r = this.values.get(t);
      return (
        r === void 0 &&
          n !== void 0 &&
          ((r = Gi(n === null ? void 0 : n, { owner: this })),
          this.addValue(t, r)),
        r
      );
    }
    readValue(t, n) {
      var r;
      let o =
        this.latestValues[t] !== void 0 || !this.current
          ? this.latestValues[t]
          : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
      return (
        o != null &&
          (typeof o == "string" && (Ww(o) || _w(o))
            ? (o = parseFloat(o))
            : !vA(o) && ar.test(n) && (o = zw(t, n)),
          this.setBaseTarget(t, Qe(o) ? o.get() : o)),
        Qe(o) ? o.get() : o
      );
    }
    setBaseTarget(t, n) {
      this.baseTarget[t] = n;
    }
    getBaseTarget(t) {
      var n;
      const { initial: r } = this.props;
      let o;
      if (typeof r == "string" || typeof r == "object") {
        const s = Pf(
          this.props,
          r,
          (n = this.presenceContext) === null || n === void 0
            ? void 0
            : n.custom
        );
        s && (o = s[t]);
      }
      if (r && o !== void 0) return o;
      const i = this.getBaseTargetFromProps(this.props, t);
      return i !== void 0 && !Qe(i)
        ? i
        : this.initialValues[t] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[t];
    }
    on(t, n) {
      return (
        this.events[t] || (this.events[t] = new Df()), this.events[t].add(n)
      );
    }
    notify(t, ...n) {
      this.events[t] && this.events[t].notify(...n);
    }
  }
  class Ex extends SA {
    constructor() {
      super(...arguments), (this.KeyframeResolver = Qw);
    }
    sortInstanceNodePosition(t, n) {
      return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
      return t.style ? t.style[n] : void 0;
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
      delete n[t], delete r[t];
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      Qe(t) &&
        (this.childSubscription = t.on("change", (n) => {
          this.current && (this.current.textContent = `${n}`);
        }));
    }
  }
  function CA(e) {
    return window.getComputedStyle(e);
  }
  class EA extends Ex {
    constructor() {
      super(...arguments), (this.type = "html"), (this.renderInstance = hw);
    }
    readValueFromInstance(t, n) {
      if (jr.has(n)) {
        const r = jf(n);
        return (r && r.default) || 0;
      } else {
        const r = CA(t),
          o = (gf(n) ? r.getPropertyValue(n) : r[n]) || 0;
        return typeof o == "string" ? o.trim() : o;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return cx(t, n);
    }
    build(t, n, r) {
      wf(t, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n, r) {
      return Tf(t, n, r);
    }
  }
  class PA extends Ex {
    constructor() {
      super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = ke),
        (this.updateDimensions = () => {
          this.current &&
            !this.renderState.dimensions &&
            fw(this.current, this.renderState);
        });
    }
    getBaseTargetFromProps(t, n) {
      return t[n];
    }
    readValueFromInstance(t, n) {
      if (jr.has(n)) {
        const r = jf(n);
        return (r && r.default) || 0;
      }
      return (n = pw.has(n) ? n : pf(n)), t.getAttribute(n);
    }
    scrapeMotionValuesFromProps(t, n, r) {
      return gw(t, n, r);
    }
    onBindTransform() {
      this.current &&
        !this.renderState.dimensions &&
        fe.postRender(this.updateDimensions);
    }
    build(t, n, r) {
      Cf(t, n, this.isSVGTag, r.transformTemplate);
    }
    renderInstance(t, n, r, o) {
      mw(t, n, r, o);
    }
    mount(t) {
      (this.isSVGTag = Ef(t.tagName)), super.mount(t);
    }
  }
  const TA = (e, t) =>
      Sf(e) ? new PA(t) : new EA(t, { allowProjection: e !== x.Fragment }),
    bA = Xk({ ...Q2, ...pA, ...rA, ...mA }, TA),
    ot = fk(bA);
  var us = {};
  (function e(t, n, r, o) {
    var i = !!(
        t.Worker &&
        t.Blob &&
        t.Promise &&
        t.OffscreenCanvas &&
        t.OffscreenCanvasRenderingContext2D &&
        t.HTMLCanvasElement &&
        t.HTMLCanvasElement.prototype.transferControlToOffscreen &&
        t.URL &&
        t.URL.createObjectURL
      ),
      s = typeof Path2D == "function" && typeof DOMMatrix == "function",
      a = (function () {
        if (!t.OffscreenCanvas) return !1;
        var P = new OffscreenCanvas(1, 1),
          S = P.getContext("2d");
        S.fillRect(0, 0, 1, 1);
        var N = P.transferToImageBitmap();
        try {
          S.createPattern(N, "no-repeat");
        } catch {
          return !1;
        }
        return !0;
      })();
    function l() {}
    function u(P) {
      var S = n.exports.Promise,
        N = S !== void 0 ? S : t.Promise;
      return typeof N == "function" ? new N(P) : (P(l, l), null);
    }
    var c = (function (P, S) {
        return {
          transform: function (N) {
            if (P) return N;
            if (S.has(N)) return S.get(N);
            var F = new OffscreenCanvas(N.width, N.height),
              $ = F.getContext("2d");
            return $.drawImage(N, 0, 0), S.set(N, F), F;
          },
          clear: function () {
            S.clear();
          },
        };
      })(a, new Map()),
      f = (function () {
        var P = Math.floor(16.666666666666668),
          S,
          N,
          F = {},
          $ = 0;
        return (
          typeof requestAnimationFrame == "function" &&
          typeof cancelAnimationFrame == "function"
            ? ((S = function (G) {
                var B = Math.random();
                return (
                  (F[B] = requestAnimationFrame(function W(q) {
                    $ === q || $ + P - 1 < q
                      ? (($ = q), delete F[B], G())
                      : (F[B] = requestAnimationFrame(W));
                  })),
                  B
                );
              }),
              (N = function (G) {
                F[G] && cancelAnimationFrame(F[G]);
              }))
            : ((S = function (G) {
                return setTimeout(G, P);
              }),
              (N = function (G) {
                return clearTimeout(G);
              })),
          { frame: S, cancel: N }
        );
      })(),
      d = (function () {
        var P,
          S,
          N = {};
        function F($) {
          function G(B, W) {
            $.postMessage({ options: B || {}, callback: W });
          }
          ($.init = function (W) {
            var q = W.transferControlToOffscreen();
            $.postMessage({ canvas: q }, [q]);
          }),
            ($.fire = function (W, q, re) {
              if (S) return G(W, null), S;
              var ie = Math.random().toString(36).slice(2);
              return (
                (S = u(function (se) {
                  function le(he) {
                    he.data.callback === ie &&
                      (delete N[ie],
                      $.removeEventListener("message", le),
                      (S = null),
                      c.clear(),
                      re(),
                      se());
                  }
                  $.addEventListener("message", le),
                    G(W, ie),
                    (N[ie] = le.bind(null, { data: { callback: ie } }));
                })),
                S
              );
            }),
            ($.reset = function () {
              $.postMessage({ reset: !0 });
              for (var W in N) N[W](), delete N[W];
            });
        }
        return function () {
          if (P) return P;
          if (!r && i) {
            var $ = [
              "var CONFETTI, SIZE = {}, module = {};",
              "(" + e.toString() + ")(this, module, true, SIZE);",
              "onmessage = function(msg) {",
              "  if (msg.data.options) {",
              "    CONFETTI(msg.data.options).then(function () {",
              "      if (msg.data.callback) {",
              "        postMessage({ callback: msg.data.callback });",
              "      }",
              "    });",
              "  } else if (msg.data.reset) {",
              "    CONFETTI && CONFETTI.reset();",
              "  } else if (msg.data.resize) {",
              "    SIZE.width = msg.data.resize.width;",
              "    SIZE.height = msg.data.resize.height;",
              "  } else if (msg.data.canvas) {",
              "    SIZE.width = msg.data.canvas.width;",
              "    SIZE.height = msg.data.canvas.height;",
              "    CONFETTI = module.exports.create(msg.data.canvas);",
              "  }",
              "}",
            ].join(`
`);
            try {
              P = new Worker(URL.createObjectURL(new Blob([$])));
            } catch (G) {
              return (
                typeof console !== void 0 &&
                  typeof console.warn == "function" &&
                  console.warn("🎊 Could not load worker", G),
                null
              );
            }
            F(P);
          }
          return P;
        };
      })(),
      p = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: ["square", "circle"],
        zIndex: 100,
        colors: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff",
        ],
        disableForReducedMotion: !1,
        scalar: 1,
      };
    function y(P, S) {
      return S ? S(P) : P;
    }
    function g(P) {
      return P != null;
    }
    function w(P, S, N) {
      return y(P && g(P[S]) ? P[S] : p[S], N);
    }
    function h(P) {
      return P < 0 ? 0 : Math.floor(P);
    }
    function m(P, S) {
      return Math.floor(Math.random() * (S - P)) + P;
    }
    function v(P) {
      return parseInt(P, 16);
    }
    function C(P) {
      return P.map(E);
    }
    function E(P) {
      var S = String(P).replace(/[^0-9a-f]/gi, "");
      return (
        S.length < 6 && (S = S[0] + S[0] + S[1] + S[1] + S[2] + S[2]),
        {
          r: v(S.substring(0, 2)),
          g: v(S.substring(2, 4)),
          b: v(S.substring(4, 6)),
        }
      );
    }
    function T(P) {
      var S = w(P, "origin", Object);
      return (S.x = w(S, "x", Number)), (S.y = w(S, "y", Number)), S;
    }
    function M(P) {
      (P.width = document.documentElement.clientWidth),
        (P.height = document.documentElement.clientHeight);
    }
    function b(P) {
      var S = P.getBoundingClientRect();
      (P.width = S.width), (P.height = S.height);
    }
    function j(P) {
      var S = document.createElement("canvas");
      return (
        (S.style.position = "fixed"),
        (S.style.top = "0px"),
        (S.style.left = "0px"),
        (S.style.pointerEvents = "none"),
        (S.style.zIndex = P),
        S
      );
    }
    function _(P, S, N, F, $, G, B, W, q) {
      P.save(),
        P.translate(S, N),
        P.rotate(G),
        P.scale(F, $),
        P.arc(0, 0, 1, B, W, q),
        P.restore();
    }
    function H(P) {
      var S = P.angle * (Math.PI / 180),
        N = P.spread * (Math.PI / 180);
      return {
        x: P.x,
        y: P.y,
        wobble: Math.random() * 10,
        wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
        velocity: P.startVelocity * 0.5 + Math.random() * P.startVelocity,
        angle2D: -S + (0.5 * N - Math.random() * N),
        tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
        color: P.color,
        shape: P.shape,
        tick: 0,
        totalTicks: P.ticks,
        decay: P.decay,
        drift: P.drift,
        random: Math.random() + 2,
        tiltSin: 0,
        tiltCos: 0,
        wobbleX: 0,
        wobbleY: 0,
        gravity: P.gravity * 3,
        ovalScalar: 0.6,
        scalar: P.scalar,
        flat: P.flat,
      };
    }
    function D(P, S) {
      (S.x += Math.cos(S.angle2D) * S.velocity + S.drift),
        (S.y += Math.sin(S.angle2D) * S.velocity + S.gravity),
        (S.velocity *= S.decay),
        S.flat
          ? ((S.wobble = 0),
            (S.wobbleX = S.x + 10 * S.scalar),
            (S.wobbleY = S.y + 10 * S.scalar),
            (S.tiltSin = 0),
            (S.tiltCos = 0),
            (S.random = 1))
          : ((S.wobble += S.wobbleSpeed),
            (S.wobbleX = S.x + 10 * S.scalar * Math.cos(S.wobble)),
            (S.wobbleY = S.y + 10 * S.scalar * Math.sin(S.wobble)),
            (S.tiltAngle += 0.1),
            (S.tiltSin = Math.sin(S.tiltAngle)),
            (S.tiltCos = Math.cos(S.tiltAngle)),
            (S.random = Math.random() + 2));
      var N = S.tick++ / S.totalTicks,
        F = S.x + S.random * S.tiltCos,
        $ = S.y + S.random * S.tiltSin,
        G = S.wobbleX + S.random * S.tiltCos,
        B = S.wobbleY + S.random * S.tiltSin;
      if (
        ((P.fillStyle =
          "rgba(" +
          S.color.r +
          ", " +
          S.color.g +
          ", " +
          S.color.b +
          ", " +
          (1 - N) +
          ")"),
        P.beginPath(),
        s &&
          S.shape.type === "path" &&
          typeof S.shape.path == "string" &&
          Array.isArray(S.shape.matrix))
      )
        P.fill(
          K(
            S.shape.path,
            S.shape.matrix,
            S.x,
            S.y,
            Math.abs(G - F) * 0.1,
            Math.abs(B - $) * 0.1,
            (Math.PI / 10) * S.wobble
          )
        );
      else if (S.shape.type === "bitmap") {
        var W = (Math.PI / 10) * S.wobble,
          q = Math.abs(G - F) * 0.1,
          re = Math.abs(B - $) * 0.1,
          ie = S.shape.bitmap.width * S.scalar,
          se = S.shape.bitmap.height * S.scalar,
          le = new DOMMatrix([
            Math.cos(W) * q,
            Math.sin(W) * q,
            -Math.sin(W) * re,
            Math.cos(W) * re,
            S.x,
            S.y,
          ]);
        le.multiplySelf(new DOMMatrix(S.shape.matrix));
        var he = P.createPattern(c.transform(S.shape.bitmap), "no-repeat");
        he.setTransform(le),
          (P.globalAlpha = 1 - N),
          (P.fillStyle = he),
          P.fillRect(S.x - ie / 2, S.y - se / 2, ie, se),
          (P.globalAlpha = 1);
      } else if (S.shape === "circle")
        P.ellipse
          ? P.ellipse(
              S.x,
              S.y,
              Math.abs(G - F) * S.ovalScalar,
              Math.abs(B - $) * S.ovalScalar,
              (Math.PI / 10) * S.wobble,
              0,
              2 * Math.PI
            )
          : _(
              P,
              S.x,
              S.y,
              Math.abs(G - F) * S.ovalScalar,
              Math.abs(B - $) * S.ovalScalar,
              (Math.PI / 10) * S.wobble,
              0,
              2 * Math.PI
            );
      else if (S.shape === "star")
        for (
          var te = (Math.PI / 2) * 3,
            Ne = 4 * S.scalar,
            Re = 8 * S.scalar,
            Xe = S.x,
            ft = S.y,
            pe = 5,
            je = Math.PI / pe;
          pe--;

        )
          (Xe = S.x + Math.cos(te) * Re),
            (ft = S.y + Math.sin(te) * Re),
            P.lineTo(Xe, ft),
            (te += je),
            (Xe = S.x + Math.cos(te) * Ne),
            (ft = S.y + Math.sin(te) * Ne),
            P.lineTo(Xe, ft),
            (te += je);
      else
        P.moveTo(Math.floor(S.x), Math.floor(S.y)),
          P.lineTo(Math.floor(S.wobbleX), Math.floor($)),
          P.lineTo(Math.floor(G), Math.floor(B)),
          P.lineTo(Math.floor(F), Math.floor(S.wobbleY));
      return P.closePath(), P.fill(), S.tick < S.totalTicks;
    }
    function U(P, S, N, F, $) {
      var G = S.slice(),
        B = P.getContext("2d"),
        W,
        q,
        re = u(function (ie) {
          function se() {
            (W = q = null),
              B.clearRect(0, 0, F.width, F.height),
              c.clear(),
              $(),
              ie();
          }
          function le() {
            r &&
              !(F.width === o.width && F.height === o.height) &&
              ((F.width = P.width = o.width), (F.height = P.height = o.height)),
              !F.width &&
                !F.height &&
                (N(P), (F.width = P.width), (F.height = P.height)),
              B.clearRect(0, 0, F.width, F.height),
              (G = G.filter(function (he) {
                return D(B, he);
              })),
              G.length ? (W = f.frame(le)) : se();
          }
          (W = f.frame(le)), (q = se);
        });
      return {
        addFettis: function (ie) {
          return (G = G.concat(ie)), re;
        },
        canvas: P,
        promise: re,
        reset: function () {
          W && f.cancel(W), q && q();
        },
      };
    }
    function O(P, S) {
      var N = !P,
        F = !!w(S || {}, "resize"),
        $ = !1,
        G = w(S, "disableForReducedMotion", Boolean),
        B = i && !!w(S || {}, "useWorker"),
        W = B ? d() : null,
        q = N ? M : b,
        re = P && W ? !!P.__confetti_initialized : !1,
        ie =
          typeof matchMedia == "function" &&
          matchMedia("(prefers-reduced-motion)").matches,
        se;
      function le(te, Ne, Re) {
        for (
          var Xe = w(te, "particleCount", h),
            ft = w(te, "angle", Number),
            pe = w(te, "spread", Number),
            je = w(te, "startVelocity", Number),
            kl = w(te, "decay", Number),
            Ml = w(te, "gravity", Number),
            Fr = w(te, "drift", Number),
            cs = w(te, "colors", C),
            ds = w(te, "ticks", Number),
            Vr = w(te, "shapes"),
            kn = w(te, "scalar"),
            fs = !!w(te, "flat"),
            ln = T(te),
            Wo = Xe,
            Ho = [],
            hs = P.width * ln.x,
            ps = P.height * ln.y;
          Wo--;

        )
          Ho.push(
            H({
              x: hs,
              y: ps,
              angle: ft,
              spread: pe,
              startVelocity: je,
              color: cs[Wo % cs.length],
              shape: Vr[m(0, Vr.length)],
              ticks: ds,
              decay: kl,
              gravity: Ml,
              drift: Fr,
              scalar: kn,
              flat: fs,
            })
          );
        return se ? se.addFettis(Ho) : ((se = U(P, Ho, q, Ne, Re)), se.promise);
      }
      function he(te) {
        var Ne = G || w(te, "disableForReducedMotion", Boolean),
          Re = w(te, "zIndex", Number);
        if (Ne && ie)
          return u(function (je) {
            je();
          });
        N && se
          ? (P = se.canvas)
          : N && !P && ((P = j(Re)), document.body.appendChild(P)),
          F && !re && q(P);
        var Xe = { width: P.width, height: P.height };
        W && !re && W.init(P), (re = !0), W && (P.__confetti_initialized = !0);
        function ft() {
          if (W) {
            var je = {
              getBoundingClientRect: function () {
                if (!N) return P.getBoundingClientRect();
              },
            };
            q(je),
              W.postMessage({ resize: { width: je.width, height: je.height } });
            return;
          }
          Xe.width = Xe.height = null;
        }
        function pe() {
          (se = null),
            F && (($ = !1), t.removeEventListener("resize", ft)),
            N &&
              P &&
              (document.body.contains(P) && document.body.removeChild(P),
              (P = null),
              (re = !1));
        }
        return (
          F && !$ && (($ = !0), t.addEventListener("resize", ft, !1)),
          W ? W.fire(te, Xe, pe) : le(te, Xe, pe)
        );
      }
      return (
        (he.reset = function () {
          W && W.reset(), se && se.reset();
        }),
        he
      );
    }
    var Y;
    function Q() {
      return Y || (Y = O(null, { useWorker: !0, resize: !0 })), Y;
    }
    function K(P, S, N, F, $, G, B) {
      var W = new Path2D(P),
        q = new Path2D();
      q.addPath(W, new DOMMatrix(S));
      var re = new Path2D();
      return (
        re.addPath(
          q,
          new DOMMatrix([
            Math.cos(B) * $,
            Math.sin(B) * $,
            -Math.sin(B) * G,
            Math.cos(B) * G,
            N,
            F,
          ])
        ),
        re
      );
    }
    function R(P) {
      if (!s)
        throw new Error("path confetti are not supported in this browser");
      var S, N;
      typeof P == "string" ? (S = P) : ((S = P.path), (N = P.matrix));
      var F = new Path2D(S),
        $ = document.createElement("canvas"),
        G = $.getContext("2d");
      if (!N) {
        for (
          var B = 1e3, W = B, q = B, re = 0, ie = 0, se, le, he = 0;
          he < B;
          he += 2
        )
          for (var te = 0; te < B; te += 2)
            G.isPointInPath(F, he, te, "nonzero") &&
              ((W = Math.min(W, he)),
              (q = Math.min(q, te)),
              (re = Math.max(re, he)),
              (ie = Math.max(ie, te)));
        (se = re - W), (le = ie - q);
        var Ne = 10,
          Re = Math.min(Ne / se, Ne / le);
        N = [
          Re,
          0,
          0,
          Re,
          -Math.round(se / 2 + W) * Re,
          -Math.round(le / 2 + q) * Re,
        ];
      }
      return { type: "path", path: S, matrix: N };
    }
    function I(P) {
      var S,
        N = 1,
        F = "#000000",
        $ =
          '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof P == "string"
        ? (S = P)
        : ((S = P.text),
          (N = "scalar" in P ? P.scalar : N),
          ($ = "fontFamily" in P ? P.fontFamily : $),
          (F = "color" in P ? P.color : F));
      var G = 10 * N,
        B = "" + G + "px " + $,
        W = new OffscreenCanvas(G, G),
        q = W.getContext("2d");
      q.font = B;
      var re = q.measureText(S),
        ie = Math.ceil(re.actualBoundingBoxRight + re.actualBoundingBoxLeft),
        se = Math.ceil(
          re.actualBoundingBoxAscent + re.actualBoundingBoxDescent
        ),
        le = 2,
        he = re.actualBoundingBoxLeft + le,
        te = re.actualBoundingBoxAscent + le;
      (ie += le + le),
        (se += le + le),
        (W = new OffscreenCanvas(ie, se)),
        (q = W.getContext("2d")),
        (q.font = B),
        (q.fillStyle = F),
        q.fillText(S, he, te);
      var Ne = 1 / N;
      return {
        type: "bitmap",
        bitmap: W.transferToImageBitmap(),
        matrix: [Ne, 0, 0, Ne, (-ie * Ne) / 2, (-se * Ne) / 2],
      };
    }
    (n.exports = function () {
      return Q().apply(this, arguments);
    }),
      (n.exports.reset = function () {
        Q().reset();
      }),
      (n.exports.create = O),
      (n.exports.shapeFromPath = R),
      (n.exports.shapeFromText = I);
  })(
    (function () {
      return typeof window < "u"
        ? window
        : typeof self < "u"
        ? self
        : this || {};
    })(),
    us,
    !1
  );
  const Xm = us.exports;
  us.exports.create;
  const qm = [
      "Julius",
      "Abhinav",
      "Asta",
      "Artūras",
      "Mantas",
      "Navaneeth",
      "Neringa",
      "Aleksandr",
    ],
    Us = 15,
    kA = () => {
      const [e, t] = x.useState(qm),
        [n, r] = x.useState([]),
        [o, i] = x.useState(null),
        [s, a] = x.useState(!1),
        [l, u] = x.useState([]),
        [c, f] = x.useState([]),
        [d, p] = x.useState(!1),
        [y, g] = x.useState(""),
        [w, h] = x.useState(!1),
        m = x.useCallback(() => {
          r(e.filter((D) => !c.includes(D))), u([]), i(null);
        }, [c, e]);
      x.useEffect(() => {
        m();
      }, [m]);
      const v = () => {
          Xm({ particleCount: 50, spread: 60, origin: { x: 0.2, y: 0.6 } }),
            Xm({ particleCount: 50, spread: 60, origin: { x: 0.8, y: 0.6 } });
        },
        C = x.useCallback(() => {
          if (s || n.length === 0) return;
          a(!0);
          const D = Math.floor(Math.random() * n.length),
            U = n[D];
          setTimeout(() => {
            i(U),
              r((O) => O.filter((Y) => Y !== U)),
              u((O) => [...O, U]),
              a(!1),
              v();
          }, 1200);
        }, [n, s]),
        E = (D) => {
          l.includes(D) ||
            f((U) => {
              if (U.includes(D)) {
                const O = U.filter((Y) => Y !== D);
                return r((Y) => [...Y, D]), O;
              } else return r((O) => O.filter((Y) => Y !== D)), [...U, D];
            });
        },
        T = () => {
          if (!(!y.trim() || e.length >= Us)) {
            if (e.includes(y.trim())) {
              g("");
              return;
            }
            t((D) => [...D, y.trim()]), g("");
          }
        },
        M = (D) => {
          t((U) => U.filter((O) => O !== D)),
            c.includes(D) && f((U) => U.filter((O) => O !== D)),
            l.includes(D) && u((U) => U.filter((O) => O !== D)),
            o === D && i(null);
        },
        b = () => {
          t(qm), f([]), m();
        },
        j = () => {
          t([]), f([]), u([]), i(null), r([]);
        },
        _ = (D) => {
          D.key === "Enter" && T();
        },
        H = () => {
          e.length === 0
            ? (h(!0),
              setTimeout(() => {
                h(!1);
              }, 3e3))
            : p(!1);
        };
      return k.jsx("div", {
        className:
          "min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex flex-col items-center justify-center p-4",
        children: k.jsxs("div", {
          className: "max-w-md w-full space-y-8",
          children: [
            k.jsxs(ot.div, {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: "text-center",
              children: [
                k.jsxs("h1", {
                  className:
                    "text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2",
                  children: [
                    k.jsx(op, { className: "w-8 h-8" }),
                    "Standup Buddy",
                  ],
                }),
                k.jsx("p", {
                  className: "text-secondary/80",
                  children: "Who's up next?",
                }),
              ],
            }),
            k.jsxs(ot.div, {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.5, delay: 0.2 },
              className:
                "bg-white/40 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20",
              children: [
                k.jsx(Op, {
                  mode: "wait",
                  children: s
                    ? k.jsx(
                        ot.div,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          className: "text-center py-8",
                          children: k.jsx(ot.div, {
                            animate: { scale: [1, 1.2, 1], rotate: [0, 360] },
                            transition: {
                              duration: 1.5,
                              repeat: 1 / 0,
                              ease: "easeInOut",
                            },
                            children: k.jsx(op, {
                              className: "w-12 h-12 text-primary",
                            }),
                          }),
                        },
                        "selecting"
                      )
                    : o
                    ? k.jsxs(
                        ot.div,
                        {
                          initial: { opacity: 0, scale: 0.5, rotate: -10 },
                          animate: { opacity: 1, scale: 1, rotate: 0 },
                          exit: { opacity: 0, scale: 0.5, rotate: 10 },
                          transition: {
                            type: "spring",
                            duration: 0.8,
                            bounce: 0.5,
                          },
                          className: "text-center space-y-4",
                          children: [
                            k.jsx("p", {
                              className: "text-sm text-primary/60",
                              children: "Next up:",
                            }),
                            k.jsx(ot.h2, {
                              className: "text-5xl font-bold text-primary",
                              animate: { scale: [1, 1.05, 1] },
                              transition: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                              },
                              children: o,
                            }),
                            k.jsx(ot.div, {
                              animate: {
                                y: [0, -10, 0],
                                rotate: [0, -10, 10, 0],
                              },
                              transition: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                              },
                              children: k.jsx(rE, {
                                className: "w-8 h-8 mx-auto text-yellow-500",
                              }),
                            }),
                          ],
                        },
                        o
                      )
                    : null,
                }),
                k.jsxs("div", {
                  className: "mt-8 space-y-4",
                  children: [
                    k.jsx(ot.button, {
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      onClick: C,
                      disabled: s || n.length === 0 || d,
                      className:
                        "w-full py-3 px-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20",
                      children: s
                        ? "✨ Selecting..."
                        : l.length === 0
                        ? "Start Standup"
                        : "Select Next Person",
                    }),
                    k.jsxs(ot.button, {
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      onClick: m,
                      disabled: d,
                      className:
                        "w-full py-3 px-4 bg-white/50 hover:bg-white/60 text-secondary rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                      children: [
                        k.jsx(iE, { className: "w-4 h-4" }),
                        "Reset Selection",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            k.jsxs(ot.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.5, delay: 0.4 },
              className: "mt-4",
              children: [
                k.jsx("div", {
                  className: "flex flex-wrap gap-2 justify-center mb-4",
                  children: e.map((D) =>
                    k.jsxs(
                      ot.div,
                      {
                        layout: !0,
                        initial: { opacity: 0, scale: 0.8 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { type: "spring", duration: 0.5 },
                        onClick: () => !d && E(D),
                        className: `px-3 py-1 rounded-full text-sm font-medium ${
                          d
                            ? "cursor-default"
                            : "cursor-pointer hover:opacity-80"
                        } transition-opacity ${
                          l.includes(D)
                            ? "bg-primary/20 text-primary line-through cursor-not-allowed"
                            : c.includes(D)
                            ? "bg-red-100 text-red-500 line-through"
                            : "bg-white/50 text-secondary"
                        } ${d ? "flex items-center gap-1" : ""}`,
                        children: [
                          D,
                          d &&
                            k.jsx("button", {
                              onClick: (U) => {
                                U.stopPropagation(), M(D);
                              },
                              className:
                                "ml-1 text-red-500 hover:text-red-700 rounded-full p-0.5",
                              children: k.jsx(qv, { className: "w-3 h-3" }),
                            }),
                        ],
                      },
                      D
                    )
                  ),
                }),
                k.jsx("div", {
                  className: "flex justify-center mt-4",
                  children: d
                    ? k.jsxs(ot.div, {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        className:
                          "bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-md w-full",
                        children: [
                          k.jsxs("div", {
                            className: "text-center mb-3",
                            children: [
                              k.jsx("h3", {
                                className: "font-medium text-primary",
                                children: "Edit Team Members",
                              }),
                              k.jsxs("p", {
                                className: "text-xs text-gray-500",
                                children: ["Max ", Us, " members"],
                              }),
                            ],
                          }),
                          k.jsxs("div", {
                            className: "flex gap-2 mb-3",
                            children: [
                              k.jsx("input", {
                                type: "text",
                                value: y,
                                onChange: (D) => g(D.target.value),
                                onKeyDown: _,
                                placeholder: "Add team member",
                                className:
                                  "flex-1 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary",
                                disabled: e.length >= Us,
                              }),
                              k.jsxs("button", {
                                onClick: T,
                                disabled: !y.trim() || e.length >= Us,
                                className:
                                  "px-3 py-1.5 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1",
                                children: [
                                  k.jsx(oE, { className: "w-3.5 h-3.5" }),
                                  "Add",
                                ],
                              }),
                            ],
                          }),
                          k.jsxs("div", {
                            className: "flex gap-2 justify-between",
                            children: [
                              k.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  k.jsx("button", {
                                    onClick: b,
                                    className:
                                      "px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm",
                                    children: "Reset Default",
                                  }),
                                  k.jsxs("button", {
                                    onClick: j,
                                    className:
                                      "px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm flex items-center gap-1",
                                    children: [
                                      k.jsx(aE, { className: "w-3.5 h-3.5" }),
                                      "Clear All",
                                    ],
                                  }),
                                ],
                              }),
                              k.jsxs("div", {
                                className: "relative",
                                children: [
                                  k.jsx(Op, {
                                    children:
                                      w &&
                                      k.jsxs(ot.div, {
                                        initial: { opacity: 0, y: -10 },
                                        animate: { opacity: 1, y: 0 },
                                        exit: { opacity: 0, y: -10 },
                                        className:
                                          "absolute -top-8 right-0 bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-md flex items-center gap-1 shadow-sm whitespace-nowrap",
                                        children: [
                                          k.jsx(nE, { className: "w-3 h-3" }),
                                          "At least one team member required",
                                        ],
                                      }),
                                  }),
                                  k.jsxs("button", {
                                    onClick: H,
                                    className: `px-3 py-1.5 ${
                                      e.length === 0
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-green-500 hover:bg-green-600"
                                    } text-white rounded-lg text-sm flex items-center gap-1 transition-colors`,
                                    disabled: e.length === 0,
                                    children: [
                                      k.jsx(tE, { className: "w-3.5 h-3.5" }),
                                      "Done",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : k.jsxs(ot.button, {
                        whileHover: { scale: 1.02 },
                        whileTap: { scale: 0.98 },
                        onClick: () => p(!0),
                        className:
                          "flex items-center gap-1 px-3 py-1.5 bg-white/50 hover:bg-white/60 text-secondary rounded-full text-sm font-medium transition-all duration-200",
                        children: [
                          k.jsx(sE, { className: "w-3.5 h-3.5" }),
                          "Customize Team",
                        ],
                      }),
                }),
              ],
            }),
          ],
        }),
      });
    },
    MA = () => {
      const e = X0();
      return (
        x.useEffect(() => {
          console.error(
            "404 Error: User attempted to access non-existent route:",
            e.pathname
          );
        }, [e.pathname]),
        k.jsx("div", {
          className:
            "min-h-screen flex items-center justify-center bg-gray-100",
          children: k.jsxs("div", {
            className: "text-center",
            children: [
              k.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "404",
              }),
              k.jsx("p", {
                className: "text-xl text-gray-600 mb-4",
                children: "Oops! Page not found",
              }),
              k.jsx("a", {
                href: "/",
                className: "text-blue-500 hover:text-blue-700 underline",
                children: "Return to Home",
              }),
            ],
          }),
        })
      );
    },
    RA = new pb(),
    AA = () =>
      k.jsx(gb, {
        client: RA,
        children: k.jsxs(HT, {
          children: [
            k.jsx(UE, {}),
            k.jsx(vP, {}),
            k.jsx(ek, {
              children: k.jsxs(qb, {
                children: [
                  k.jsx(Ac, { path: "/", element: k.jsx(kA, {}) }),
                  k.jsx(Ac, { path: "*", element: k.jsx(MA, {}) }),
                ],
              }),
            }),
          ],
        }),
      });
  xv(document.getElementById("root")).render(k.jsx(AA, {}));
});
export default NA();
