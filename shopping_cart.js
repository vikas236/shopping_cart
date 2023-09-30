function SO(v, C) {
  for (var S = 0; S < C.length; S++) {
    const x = C[S];
    if (typeof x != "string" && !Array.isArray(x)) {
      for (const k in x)
        if (k !== "default" && !(k in v)) {
          const D = Object.getOwnPropertyDescriptor(x, k);
          D && Object.defineProperty(v, k, D.get ? D : {
            enumerable: !0,
            get: () => x[k]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(v, Symbol.toStringTag, { value: "Module" }));
}
function vT(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var WE = { exports: {} }, iv = {}, QE = { exports: {} }, Mt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $R;
function EO() {
  if ($R)
    return Mt;
  $R = 1;
  var v = Symbol.for("react.element"), C = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), y = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), j = Symbol.iterator;
  function X(R) {
    return R === null || typeof R != "object" ? null : (R = j && R[j] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var G = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ae = Object.assign, ne = {};
  function oe(R, z, re) {
    this.props = R, this.context = z, this.refs = ne, this.updater = re || G;
  }
  oe.prototype.isReactComponent = {}, oe.prototype.setState = function(R, z) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, z, "setState");
  }, oe.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function ye() {
  }
  ye.prototype = oe.prototype;
  function we(R, z, re) {
    this.props = R, this.context = z, this.refs = ne, this.updater = re || G;
  }
  var be = we.prototype = new ye();
  be.constructor = we, ae(be, oe.prototype), be.isPureReactComponent = !0;
  var je = Array.isArray, K = Object.prototype.hasOwnProperty, ut = { current: null }, Ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Zt(R, z, re) {
    var me, de = {}, ze = null, Ee = null;
    if (z != null)
      for (me in z.ref !== void 0 && (Ee = z.ref), z.key !== void 0 && (ze = "" + z.key), z)
        K.call(z, me) && !Ze.hasOwnProperty(me) && (de[me] = z[me]);
    var _e = arguments.length - 2;
    if (_e === 1)
      de.children = re;
    else if (1 < _e) {
      for (var De = Array(_e), Ie = 0; Ie < _e; Ie++)
        De[Ie] = arguments[Ie + 2];
      de.children = De;
    }
    if (R && R.defaultProps)
      for (me in _e = R.defaultProps, _e)
        de[me] === void 0 && (de[me] = _e[me]);
    return { $$typeof: v, type: R, key: ze, ref: Ee, props: de, _owner: ut.current };
  }
  function hn(R, z) {
    return { $$typeof: v, type: R.type, key: z, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function Ft(R) {
    return typeof R == "object" && R !== null && R.$$typeof === v;
  }
  function bt(R) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(re) {
      return z[re];
    });
  }
  var fn = /\/+/g;
  function Ge(R, z) {
    return typeof R == "object" && R !== null && R.key != null ? bt("" + R.key) : z.toString(36);
  }
  function lt(R, z, re, me, de) {
    var ze = typeof R;
    (ze === "undefined" || ze === "boolean") && (R = null);
    var Ee = !1;
    if (R === null)
      Ee = !0;
    else
      switch (ze) {
        case "string":
        case "number":
          Ee = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case v:
            case C:
              Ee = !0;
          }
      }
    if (Ee)
      return Ee = R, de = de(Ee), R = me === "" ? "." + Ge(Ee, 0) : me, je(de) ? (re = "", R != null && (re = R.replace(fn, "$&/") + "/"), lt(de, z, re, "", function(Ie) {
        return Ie;
      })) : de != null && (Ft(de) && (de = hn(de, re + (!de.key || Ee && Ee.key === de.key ? "" : ("" + de.key).replace(fn, "$&/") + "/") + R)), z.push(de)), 1;
    if (Ee = 0, me = me === "" ? "." : me + ":", je(R))
      for (var _e = 0; _e < R.length; _e++) {
        ze = R[_e];
        var De = me + Ge(ze, _e);
        Ee += lt(ze, z, re, De, de);
      }
    else if (De = X(R), typeof De == "function")
      for (R = De.call(R), _e = 0; !(ze = R.next()).done; )
        ze = ze.value, De = me + Ge(ze, _e++), Ee += lt(ze, z, re, De, de);
    else if (ze === "object")
      throw z = String(R), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    return Ee;
  }
  function Ut(R, z, re) {
    if (R == null)
      return R;
    var me = [], de = 0;
    return lt(R, me, "", "", function(ze) {
      return z.call(re, ze, de++);
    }), me;
  }
  function vt(R) {
    if (R._status === -1) {
      var z = R._result;
      z = z(), z.then(function(re) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = re);
      }, function(re) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = re);
      }), R._status === -1 && (R._status = 0, R._result = z);
    }
    if (R._status === 1)
      return R._result.default;
    throw R._result;
  }
  var Oe = { current: null }, fe = { transition: null }, Be = { ReactCurrentDispatcher: Oe, ReactCurrentBatchConfig: fe, ReactCurrentOwner: ut };
  return Mt.Children = { map: Ut, forEach: function(R, z, re) {
    Ut(R, function() {
      z.apply(this, arguments);
    }, re);
  }, count: function(R) {
    var z = 0;
    return Ut(R, function() {
      z++;
    }), z;
  }, toArray: function(R) {
    return Ut(R, function(z) {
      return z;
    }) || [];
  }, only: function(R) {
    if (!Ft(R))
      throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, Mt.Component = oe, Mt.Fragment = S, Mt.Profiler = k, Mt.PureComponent = we, Mt.StrictMode = x, Mt.Suspense = N, Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Be, Mt.cloneElement = function(R, z, re) {
    if (R == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var me = ae({}, R.props), de = R.key, ze = R.ref, Ee = R._owner;
    if (z != null) {
      if (z.ref !== void 0 && (ze = z.ref, Ee = ut.current), z.key !== void 0 && (de = "" + z.key), R.type && R.type.defaultProps)
        var _e = R.type.defaultProps;
      for (De in z)
        K.call(z, De) && !Ze.hasOwnProperty(De) && (me[De] = z[De] === void 0 && _e !== void 0 ? _e[De] : z[De]);
    }
    var De = arguments.length - 2;
    if (De === 1)
      me.children = re;
    else if (1 < De) {
      _e = Array(De);
      for (var Ie = 0; Ie < De; Ie++)
        _e[Ie] = arguments[Ie + 2];
      me.children = _e;
    }
    return { $$typeof: v, type: R.type, key: de, ref: ze, props: me, _owner: Ee };
  }, Mt.createContext = function(R) {
    return R = { $$typeof: y, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: D, _context: R }, R.Consumer = R;
  }, Mt.createElement = Zt, Mt.createFactory = function(R) {
    var z = Zt.bind(null, R);
    return z.type = R, z;
  }, Mt.createRef = function() {
    return { current: null };
  }, Mt.forwardRef = function(R) {
    return { $$typeof: H, render: R };
  }, Mt.isValidElement = Ft, Mt.lazy = function(R) {
    return { $$typeof: Q, _payload: { _status: -1, _result: R }, _init: vt };
  }, Mt.memo = function(R, z) {
    return { $$typeof: A, type: R, compare: z === void 0 ? null : z };
  }, Mt.startTransition = function(R) {
    var z = fe.transition;
    fe.transition = {};
    try {
      R();
    } finally {
      fe.transition = z;
    }
  }, Mt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Mt.useCallback = function(R, z) {
    return Oe.current.useCallback(R, z);
  }, Mt.useContext = function(R) {
    return Oe.current.useContext(R);
  }, Mt.useDebugValue = function() {
  }, Mt.useDeferredValue = function(R) {
    return Oe.current.useDeferredValue(R);
  }, Mt.useEffect = function(R, z) {
    return Oe.current.useEffect(R, z);
  }, Mt.useId = function() {
    return Oe.current.useId();
  }, Mt.useImperativeHandle = function(R, z, re) {
    return Oe.current.useImperativeHandle(R, z, re);
  }, Mt.useInsertionEffect = function(R, z) {
    return Oe.current.useInsertionEffect(R, z);
  }, Mt.useLayoutEffect = function(R, z) {
    return Oe.current.useLayoutEffect(R, z);
  }, Mt.useMemo = function(R, z) {
    return Oe.current.useMemo(R, z);
  }, Mt.useReducer = function(R, z, re) {
    return Oe.current.useReducer(R, z, re);
  }, Mt.useRef = function(R) {
    return Oe.current.useRef(R);
  }, Mt.useState = function(R) {
    return Oe.current.useState(R);
  }, Mt.useSyncExternalStore = function(R, z, re) {
    return Oe.current.useSyncExternalStore(R, z, re);
  }, Mt.useTransition = function() {
    return Oe.current.useTransition();
  }, Mt.version = "18.2.0", Mt;
}
var ov = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ov.exports;
var IR;
function CO() {
  return IR || (IR = 1, function(v, C) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var S = "18.2.0", x = Symbol.for("react.element"), k = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), A = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), oe = Symbol.iterator, ye = "@@iterator";
      function we(m) {
        if (m === null || typeof m != "object")
          return null;
        var w = oe && m[oe] || m[ye];
        return typeof w == "function" ? w : null;
      }
      var be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, je = {
        transition: null
      }, K = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ut = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ze = {}, Zt = null;
      function hn(m) {
        Zt = m;
      }
      Ze.setExtraStackFrame = function(m) {
        Zt = m;
      }, Ze.getCurrentStack = null, Ze.getStackAddendum = function() {
        var m = "";
        Zt && (m += Zt);
        var w = Ze.getCurrentStack;
        return w && (m += w() || ""), m;
      };
      var Ft = !1, bt = !1, fn = !1, Ge = !1, lt = !1, Ut = {
        ReactCurrentDispatcher: be,
        ReactCurrentBatchConfig: je,
        ReactCurrentOwner: ut
      };
      Ut.ReactDebugCurrentFrame = Ze, Ut.ReactCurrentActQueue = K;
      function vt(m) {
        {
          for (var w = arguments.length, I = new Array(w > 1 ? w - 1 : 0), q = 1; q < w; q++)
            I[q - 1] = arguments[q];
          fe("warn", m, I);
        }
      }
      function Oe(m) {
        {
          for (var w = arguments.length, I = new Array(w > 1 ? w - 1 : 0), q = 1; q < w; q++)
            I[q - 1] = arguments[q];
          fe("error", m, I);
        }
      }
      function fe(m, w, I) {
        {
          var q = Ut.ReactDebugCurrentFrame, pe = q.getStackAddendum();
          pe !== "" && (w += "%s", I = I.concat([pe]));
          var nt = I.map(function(xe) {
            return String(xe);
          });
          nt.unshift("Warning: " + w), Function.prototype.apply.call(console[m], console, nt);
        }
      }
      var Be = {};
      function R(m, w) {
        {
          var I = m.constructor, q = I && (I.displayName || I.name) || "ReactClass", pe = q + "." + w;
          if (Be[pe])
            return;
          Oe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, q), Be[pe] = !0;
        }
      }
      var z = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(m) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(m, w, I) {
          R(m, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(m, w, I, q) {
          R(m, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(m, w, I, q) {
          R(m, "setState");
        }
      }, re = Object.assign, me = {};
      Object.freeze(me);
      function de(m, w, I) {
        this.props = m, this.context = w, this.refs = me, this.updater = I || z;
      }
      de.prototype.isReactComponent = {}, de.prototype.setState = function(m, w) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, m, w, "setState");
      }, de.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      {
        var ze = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ee = function(m, w) {
          Object.defineProperty(de.prototype, m, {
            get: function() {
              vt("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var _e in ze)
          ze.hasOwnProperty(_e) && Ee(_e, ze[_e]);
      }
      function De() {
      }
      De.prototype = de.prototype;
      function Ie(m, w, I) {
        this.props = m, this.context = w, this.refs = me, this.updater = I || z;
      }
      var ft = Ie.prototype = new De();
      ft.constructor = Ie, re(ft, de.prototype), ft.isPureReactComponent = !0;
      function It() {
        var m = {
          current: null
        };
        return Object.seal(m), m;
      }
      var ge = Array.isArray;
      function At(m) {
        return ge(m);
      }
      function Tn(m) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, I = w && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return I;
        }
      }
      function Nn(m) {
        try {
          return Wn(m), !1;
        } catch {
          return !0;
        }
      }
      function Wn(m) {
        return "" + m;
      }
      function zn(m) {
        if (Nn(m))
          return Oe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tn(m)), Wn(m);
      }
      function Qr(m, w, I) {
        var q = m.displayName;
        if (q)
          return q;
        var pe = w.displayName || w.name || "";
        return pe !== "" ? I + "(" + pe + ")" : I;
      }
      function qr(m) {
        return m.displayName || "Context";
      }
      function Zn(m) {
        if (m == null)
          return null;
        if (typeof m.tag == "number" && Oe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
          return m.displayName || m.name || null;
        if (typeof m == "string")
          return m;
        switch (m) {
          case D:
            return "Fragment";
          case k:
            return "Portal";
          case H:
            return "Profiler";
          case y:
            return "StrictMode";
          case j:
            return "Suspense";
          case X:
            return "SuspenseList";
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case A:
              var w = m;
              return qr(w) + ".Consumer";
            case N:
              var I = m;
              return qr(I._context) + ".Provider";
            case Q:
              return Qr(m, m.render, "ForwardRef");
            case G:
              var q = m.displayName || null;
              return q !== null ? q : Zn(m.type) || "Memo";
            case ae: {
              var pe = m, nt = pe._payload, xe = pe._init;
              try {
                return Zn(xe(nt));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Cr = Object.prototype.hasOwnProperty, Gr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, va, or;
      or = {};
      function Kr(m) {
        if (Cr.call(m, "ref")) {
          var w = Object.getOwnPropertyDescriptor(m, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return m.ref !== void 0;
      }
      function bn(m) {
        if (Cr.call(m, "key")) {
          var w = Object.getOwnPropertyDescriptor(m, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return m.key !== void 0;
      }
      function Nr(m, w) {
        var I = function() {
          Rr || (Rr = !0, Oe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        I.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: I,
          configurable: !0
        });
      }
      function fi(m, w) {
        var I = function() {
          va || (va = !0, Oe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        I.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: I,
          configurable: !0
        });
      }
      function ha(m) {
        if (typeof m.ref == "string" && ut.current && m.__self && ut.current.stateNode !== m.__self) {
          var w = Zn(ut.current.type);
          or[w] || (Oe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, m.ref), or[w] = !0);
        }
      }
      var Se = function(m, w, I, q, pe, nt, xe) {
        var et = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: x,
          // Built-in properties that belong on the element
          type: m,
          key: w,
          ref: I,
          props: xe,
          // Record the component responsible for creating this element.
          _owner: nt
        };
        return et._store = {}, Object.defineProperty(et._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(et, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.defineProperty(et, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: pe
        }), Object.freeze && (Object.freeze(et.props), Object.freeze(et)), et;
      };
      function Qe(m, w, I) {
        var q, pe = {}, nt = null, xe = null, et = null, Rt = null;
        if (w != null) {
          Kr(w) && (xe = w.ref, ha(w)), bn(w) && (zn(w.key), nt = "" + w.key), et = w.__self === void 0 ? null : w.__self, Rt = w.__source === void 0 ? null : w.__source;
          for (q in w)
            Cr.call(w, q) && !Gr.hasOwnProperty(q) && (pe[q] = w[q]);
        }
        var Pt = arguments.length - 2;
        if (Pt === 1)
          pe.children = I;
        else if (Pt > 1) {
          for (var un = Array(Pt), tn = 0; tn < Pt; tn++)
            un[tn] = arguments[tn + 2];
          Object.freeze && Object.freeze(un), pe.children = un;
        }
        if (m && m.defaultProps) {
          var on = m.defaultProps;
          for (q in on)
            pe[q] === void 0 && (pe[q] = on[q]);
        }
        if (nt || xe) {
          var vn = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          nt && Nr(pe, vn), xe && fi(pe, vn);
        }
        return Se(m, nt, xe, et, Rt, ut.current, pe);
      }
      function Et(m, w) {
        var I = Se(m.type, w, m.ref, m._self, m._source, m._owner, m.props);
        return I;
      }
      function Yt(m, w, I) {
        if (m == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
        var q, pe = re({}, m.props), nt = m.key, xe = m.ref, et = m._self, Rt = m._source, Pt = m._owner;
        if (w != null) {
          Kr(w) && (xe = w.ref, Pt = ut.current), bn(w) && (zn(w.key), nt = "" + w.key);
          var un;
          m.type && m.type.defaultProps && (un = m.type.defaultProps);
          for (q in w)
            Cr.call(w, q) && !Gr.hasOwnProperty(q) && (w[q] === void 0 && un !== void 0 ? pe[q] = un[q] : pe[q] = w[q]);
        }
        var tn = arguments.length - 2;
        if (tn === 1)
          pe.children = I;
        else if (tn > 1) {
          for (var on = Array(tn), vn = 0; vn < tn; vn++)
            on[vn] = arguments[vn + 2];
          pe.children = on;
        }
        return Se(m.type, nt, xe, et, Rt, Pt, pe);
      }
      function Qt(m) {
        return typeof m == "object" && m !== null && m.$$typeof === x;
      }
      var jn = ".", xn = ":";
      function Tr(m) {
        var w = /[=:]/g, I = {
          "=": "=0",
          ":": "=2"
        }, q = m.replace(w, function(pe) {
          return I[pe];
        });
        return "$" + q;
      }
      var en = !1, Lr = /\/+/g;
      function qt(m) {
        return m.replace(Lr, "$&/");
      }
      function Gt(m, w) {
        return typeof m == "object" && m !== null && m.key != null ? (zn(m.key), Tr("" + m.key)) : w.toString(36);
      }
      function Ja(m, w, I, q, pe) {
        var nt = typeof m;
        (nt === "undefined" || nt === "boolean") && (m = null);
        var xe = !1;
        if (m === null)
          xe = !0;
        else
          switch (nt) {
            case "string":
            case "number":
              xe = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case x:
                case k:
                  xe = !0;
              }
          }
        if (xe) {
          var et = m, Rt = pe(et), Pt = q === "" ? jn + Gt(et, 0) : q;
          if (At(Rt)) {
            var un = "";
            Pt != null && (un = qt(Pt) + "/"), Ja(Rt, w, un, "", function(Zf) {
              return Zf;
            });
          } else
            Rt != null && (Qt(Rt) && (Rt.key && (!et || et.key !== Rt.key) && zn(Rt.key), Rt = Et(
              Rt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              I + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Rt.key && (!et || et.key !== Rt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                qt("" + Rt.key) + "/"
              ) : "") + Pt
            )), w.push(Rt));
          return 1;
        }
        var tn, on, vn = 0, _t = q === "" ? jn : q + xn;
        if (At(m))
          for (var ji = 0; ji < m.length; ji++)
            tn = m[ji], on = _t + Gt(tn, ji), vn += Ja(tn, w, I, on, pe);
        else {
          var io = we(m);
          if (typeof io == "function") {
            var is = m;
            io === is.entries && (en || vt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), en = !0);
            for (var Jf = io.call(is), ni, ls = 0; !(ni = Jf.next()).done; )
              tn = ni.value, on = _t + Gt(tn, ls++), vn += Ja(tn, w, I, on, pe);
          } else if (nt === "object") {
            var us = String(m);
            throw new Error("Objects are not valid as a React child (found: " + (us === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : us) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return vn;
      }
      function ka(m, w, I) {
        if (m == null)
          return m;
        var q = [], pe = 0;
        return Ja(m, q, "", "", function(nt) {
          return w.call(I, nt, pe++);
        }), q;
      }
      function cl(m) {
        var w = 0;
        return ka(m, function() {
          w++;
        }), w;
      }
      function tu(m, w, I) {
        ka(m, function() {
          w.apply(this, arguments);
        }, I);
      }
      function Qu(m) {
        return ka(m, function(w) {
          return w;
        }) || [];
      }
      function Ui(m) {
        if (!Qt(m))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return m;
      }
      function fl(m) {
        var w = {
          $$typeof: A,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: m,
          _currentValue2: m,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        w.Provider = {
          $$typeof: N,
          _context: w
        };
        var I = !1, q = !1, pe = !1;
        {
          var nt = {
            $$typeof: A,
            _context: w
          };
          Object.defineProperties(nt, {
            Provider: {
              get: function() {
                return q || (q = !0, Oe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(xe) {
                w.Provider = xe;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(xe) {
                w._currentValue = xe;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(xe) {
                w._currentValue2 = xe;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(xe) {
                w._threadCount = xe;
              }
            },
            Consumer: {
              get: function() {
                return I || (I = !0, Oe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(xe) {
                pe || (vt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", xe), pe = !0);
              }
            }
          }), w.Consumer = nt;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var ma = -1, di = 0, ya = 1, pi = 2;
      function Mr(m) {
        if (m._status === ma) {
          var w = m._result, I = w();
          if (I.then(function(nt) {
            if (m._status === di || m._status === ma) {
              var xe = m;
              xe._status = ya, xe._result = nt;
            }
          }, function(nt) {
            if (m._status === di || m._status === ma) {
              var xe = m;
              xe._status = pi, xe._result = nt;
            }
          }), m._status === ma) {
            var q = m;
            q._status = di, q._result = I;
          }
        }
        if (m._status === ya) {
          var pe = m._result;
          return pe === void 0 && Oe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, pe), "default" in pe || Oe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, pe), pe.default;
        } else
          throw m._result;
      }
      function ga(m) {
        var w = {
          // We use these fields to store the result.
          _status: ma,
          _result: m
        }, I = {
          $$typeof: ae,
          _payload: w,
          _init: Mr
        };
        {
          var q, pe;
          Object.defineProperties(I, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(nt) {
                Oe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = nt, Object.defineProperty(I, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return pe;
              },
              set: function(nt) {
                Oe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), pe = nt, Object.defineProperty(I, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return I;
      }
      function vi(m) {
        m != null && m.$$typeof === G ? Oe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof m != "function" ? Oe("forwardRef requires a render function but was given %s.", m === null ? "null" : typeof m) : m.length !== 0 && m.length !== 2 && Oe("forwardRef render functions accept exactly two parameters: props and ref. %s", m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), m != null && (m.defaultProps != null || m.propTypes != null) && Oe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: Q,
          render: m
        };
        {
          var I;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return I;
            },
            set: function(q) {
              I = q, !m.name && !m.displayName && (m.displayName = q);
            }
          });
        }
        return w;
      }
      var _;
      _ = Symbol.for("react.module.reference");
      function ie(m) {
        return !!(typeof m == "string" || typeof m == "function" || m === D || m === H || lt || m === y || m === j || m === X || Ge || m === ne || Ft || bt || fn || typeof m == "object" && m !== null && (m.$$typeof === ae || m.$$typeof === G || m.$$typeof === N || m.$$typeof === A || m.$$typeof === Q || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        m.$$typeof === _ || m.getModuleId !== void 0));
      }
      function Ce(m, w) {
        ie(m) || Oe("memo: The first argument must be a component. Instead received: %s", m === null ? "null" : typeof m);
        var I = {
          $$typeof: G,
          type: m,
          compare: w === void 0 ? null : w
        };
        {
          var q;
          Object.defineProperty(I, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(pe) {
              q = pe, !m.name && !m.displayName && (m.displayName = pe);
            }
          });
        }
        return I;
      }
      function Me() {
        var m = be.current;
        return m === null && Oe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), m;
      }
      function mt(m) {
        var w = Me();
        if (m._context !== void 0) {
          var I = m._context;
          I.Consumer === m ? Oe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : I.Provider === m && Oe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(m);
      }
      function Ot(m) {
        var w = Me();
        return w.useState(m);
      }
      function yt(m, w, I) {
        var q = Me();
        return q.useReducer(m, w, I);
      }
      function Xe(m) {
        var w = Me();
        return w.useRef(m);
      }
      function Vn(m, w) {
        var I = Me();
        return I.useEffect(m, w);
      }
      function dn(m, w) {
        var I = Me();
        return I.useInsertionEffect(m, w);
      }
      function pn(m, w) {
        var I = Me();
        return I.useLayoutEffect(m, w);
      }
      function sr(m, w) {
        var I = Me();
        return I.useCallback(m, w);
      }
      function hi(m, w) {
        var I = Me();
        return I.useMemo(m, w);
      }
      function qu(m, w, I) {
        var q = Me();
        return q.useImperativeHandle(m, w, I);
      }
      function zt(m, w) {
        {
          var I = Me();
          return I.useDebugValue(m, w);
        }
      }
      function Kf() {
        var m = Me();
        return m.useTransition();
      }
      function Za(m) {
        var w = Me();
        return w.useDeferredValue(m);
      }
      function Ct() {
        var m = Me();
        return m.useId();
      }
      function mi(m, w, I) {
        var q = Me();
        return q.useSyncExternalStore(m, w, I);
      }
      var dl = 0, Gu, pl, Xr, ts, Ur, ns, rs;
      function oc() {
      }
      oc.__reactDisabledLog = !0;
      function Ku() {
        {
          if (dl === 0) {
            Gu = console.log, pl = console.info, Xr = console.warn, ts = console.error, Ur = console.group, ns = console.groupCollapsed, rs = console.groupEnd;
            var m = {
              configurable: !0,
              enumerable: !0,
              value: oc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: m,
              log: m,
              warn: m,
              error: m,
              group: m,
              groupCollapsed: m,
              groupEnd: m
            });
          }
          dl++;
        }
      }
      function vl() {
        {
          if (dl--, dl === 0) {
            var m = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: re({}, m, {
                value: Gu
              }),
              info: re({}, m, {
                value: pl
              }),
              warn: re({}, m, {
                value: Xr
              }),
              error: re({}, m, {
                value: ts
              }),
              group: re({}, m, {
                value: Ur
              }),
              groupCollapsed: re({}, m, {
                value: ns
              }),
              groupEnd: re({}, m, {
                value: rs
              })
            });
          }
          dl < 0 && Oe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ei = Ut.ReactCurrentDispatcher, Ar;
      function hl(m, w, I) {
        {
          if (Ar === void 0)
            try {
              throw Error();
            } catch (pe) {
              var q = pe.stack.trim().match(/\n( *(at )?)/);
              Ar = q && q[1] || "";
            }
          return `
` + Ar + m;
        }
      }
      var ml = !1, yl;
      {
        var Xu = typeof WeakMap == "function" ? WeakMap : Map;
        yl = new Xu();
      }
      function Ju(m, w) {
        if (!m || ml)
          return "";
        {
          var I = yl.get(m);
          if (I !== void 0)
            return I;
        }
        var q;
        ml = !0;
        var pe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var nt;
        nt = ei.current, ei.current = null, Ku();
        try {
          if (w) {
            var xe = function() {
              throw Error();
            };
            if (Object.defineProperty(xe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(xe, []);
              } catch (_t) {
                q = _t;
              }
              Reflect.construct(m, [], xe);
            } else {
              try {
                xe.call();
              } catch (_t) {
                q = _t;
              }
              m.call(xe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (_t) {
              q = _t;
            }
            m();
          }
        } catch (_t) {
          if (_t && q && typeof _t.stack == "string") {
            for (var et = _t.stack.split(`
`), Rt = q.stack.split(`
`), Pt = et.length - 1, un = Rt.length - 1; Pt >= 1 && un >= 0 && et[Pt] !== Rt[un]; )
              un--;
            for (; Pt >= 1 && un >= 0; Pt--, un--)
              if (et[Pt] !== Rt[un]) {
                if (Pt !== 1 || un !== 1)
                  do
                    if (Pt--, un--, un < 0 || et[Pt] !== Rt[un]) {
                      var tn = `
` + et[Pt].replace(" at new ", " at ");
                      return m.displayName && tn.includes("<anonymous>") && (tn = tn.replace("<anonymous>", m.displayName)), typeof m == "function" && yl.set(m, tn), tn;
                    }
                  while (Pt >= 1 && un >= 0);
                break;
              }
          }
        } finally {
          ml = !1, ei.current = nt, vl(), Error.prepareStackTrace = pe;
        }
        var on = m ? m.displayName || m.name : "", vn = on ? hl(on) : "";
        return typeof m == "function" && yl.set(m, vn), vn;
      }
      function Ai(m, w, I) {
        return Ju(m, !1);
      }
      function Xf(m) {
        var w = m.prototype;
        return !!(w && w.isReactComponent);
      }
      function yi(m, w, I) {
        if (m == null)
          return "";
        if (typeof m == "function")
          return Ju(m, Xf(m));
        if (typeof m == "string")
          return hl(m);
        switch (m) {
          case j:
            return hl("Suspense");
          case X:
            return hl("SuspenseList");
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case Q:
              return Ai(m.render);
            case G:
              return yi(m.type, w, I);
            case ae: {
              var q = m, pe = q._payload, nt = q._init;
              try {
                return yi(nt(pe), w, I);
              } catch {
              }
            }
          }
        return "";
      }
      var Vt = {}, Zu = Ut.ReactDebugCurrentFrame;
      function nu(m) {
        if (m) {
          var w = m._owner, I = yi(m.type, m._source, w ? w.type : null);
          Zu.setExtraStackFrame(I);
        } else
          Zu.setExtraStackFrame(null);
      }
      function eo(m, w, I, q, pe) {
        {
          var nt = Function.call.bind(Cr);
          for (var xe in m)
            if (nt(m, xe)) {
              var et = void 0;
              try {
                if (typeof m[xe] != "function") {
                  var Rt = Error((q || "React class") + ": " + I + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Rt.name = "Invariant Violation", Rt;
                }
                et = m[xe](w, xe, q, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Pt) {
                et = Pt;
              }
              et && !(et instanceof Error) && (nu(pe), Oe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", I, xe, typeof et), nu(null)), et instanceof Error && !(et.message in Vt) && (Vt[et.message] = !0, nu(pe), Oe("Failed %s type: %s", I, et.message), nu(null));
            }
        }
      }
      function jt(m) {
        if (m) {
          var w = m._owner, I = yi(m.type, m._source, w ? w.type : null);
          hn(I);
        } else
          hn(null);
      }
      var to;
      to = !1;
      function no() {
        if (ut.current) {
          var m = Zn(ut.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
      function dt(m) {
        if (m !== void 0) {
          var w = m.fileName.replace(/^.*[\\\/]/, ""), I = m.lineNumber;
          return `

Check your code at ` + w + ":" + I + ".";
        }
        return "";
      }
      function ru(m) {
        return m != null ? dt(m.__source) : "";
      }
      var wn = {};
      function Jr(m) {
        var w = no();
        if (!w) {
          var I = typeof m == "string" ? m : m.displayName || m.name;
          I && (w = `

Check the top-level render call using <` + I + ">.");
        }
        return w;
      }
      function zr(m, w) {
        if (!(!m._store || m._store.validated || m.key != null)) {
          m._store.validated = !0;
          var I = Jr(w);
          if (!wn[I]) {
            wn[I] = !0;
            var q = "";
            m && m._owner && m._owner !== ut.current && (q = " It was passed a child from " + Zn(m._owner.type) + "."), jt(m), Oe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, q), jt(null);
          }
        }
      }
      function gl(m, w) {
        if (typeof m == "object") {
          if (At(m))
            for (var I = 0; I < m.length; I++) {
              var q = m[I];
              Qt(q) && zr(q, w);
            }
          else if (Qt(m))
            m._store && (m._store.validated = !0);
          else if (m) {
            var pe = we(m);
            if (typeof pe == "function" && pe !== m.entries)
              for (var nt = pe.call(m), xe; !(xe = nt.next()).done; )
                Qt(xe.value) && zr(xe.value, w);
          }
        }
      }
      function Ln(m) {
        {
          var w = m.type;
          if (w == null || typeof w == "string")
            return;
          var I;
          if (typeof w == "function")
            I = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === Q || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === G))
            I = w.propTypes;
          else
            return;
          if (I) {
            var q = Zn(w);
            eo(I, m.props, "prop", q, m);
          } else if (w.PropTypes !== void 0 && !to) {
            to = !0;
            var pe = Zn(w);
            Oe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && Oe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Kt(m) {
        {
          for (var w = Object.keys(m.props), I = 0; I < w.length; I++) {
            var q = w[I];
            if (q !== "children" && q !== "key") {
              jt(m), Oe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), jt(null);
              break;
            }
          }
          m.ref !== null && (jt(m), Oe("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
        }
      }
      function sc(m, w, I) {
        var q = ie(m);
        if (!q) {
          var pe = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var nt = ru(w);
          nt ? pe += nt : pe += no();
          var xe;
          m === null ? xe = "null" : At(m) ? xe = "array" : m !== void 0 && m.$$typeof === x ? (xe = "<" + (Zn(m.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof m, Oe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, pe);
        }
        var et = Qe.apply(this, arguments);
        if (et == null)
          return et;
        if (q)
          for (var Rt = 2; Rt < arguments.length; Rt++)
            gl(arguments[Rt], m);
        return m === D ? Kt(et) : Ln(et), et;
      }
      var Zr = !1;
      function er(m) {
        var w = sc.bind(null, m);
        return w.type = m, Zr || (Zr = !0, vt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return vt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: m
            }), m;
          }
        }), w;
      }
      function gi(m, w, I) {
        for (var q = Yt.apply(this, arguments), pe = 2; pe < arguments.length; pe++)
          gl(arguments[pe], q.type);
        return Ln(q), q;
      }
      function cc(m, w) {
        var I = je.transition;
        je.transition = {};
        var q = je.transition;
        je.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          m();
        } finally {
          if (je.transition = I, I === null && q._updatedFibers) {
            var pe = q._updatedFibers.size;
            pe > 10 && vt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var zi = !1, Sl = null;
      function fc(m) {
        if (Sl === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), I = v && v[w];
            Sl = I.call(v, "timers").setImmediate;
          } catch {
            Sl = function(pe) {
              zi === !1 && (zi = !0, typeof MessageChannel > "u" && Oe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var nt = new MessageChannel();
              nt.port1.onmessage = pe, nt.port2.postMessage(void 0);
            };
          }
        return Sl(m);
      }
      var Na = 0, El = !1;
      function Cl(m) {
        {
          var w = Na;
          Na++, K.current === null && (K.current = []);
          var I = K.isBatchingLegacy, q;
          try {
            if (K.isBatchingLegacy = !0, q = m(), !I && K.didScheduleLegacyUpdate) {
              var pe = K.current;
              pe !== null && (K.didScheduleLegacyUpdate = !1, Tl(pe));
            }
          } catch (on) {
            throw La(w), on;
          } finally {
            K.isBatchingLegacy = I;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var nt = q, xe = !1, et = {
              then: function(on, vn) {
                xe = !0, nt.then(function(_t) {
                  La(w), Na === 0 ? ro(_t, on, vn) : on(_t);
                }, function(_t) {
                  La(w), vn(_t);
                });
              }
            };
            return !El && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              xe || (El = !0, Oe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), et;
          } else {
            var Rt = q;
            if (La(w), Na === 0) {
              var Pt = K.current;
              Pt !== null && (Tl(Pt), K.current = null);
              var un = {
                then: function(on, vn) {
                  K.current === null ? (K.current = [], ro(Rt, on, vn)) : on(Rt);
                }
              };
              return un;
            } else {
              var tn = {
                then: function(on, vn) {
                  on(Rt);
                }
              };
              return tn;
            }
          }
        }
      }
      function La(m) {
        m !== Na - 1 && Oe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Na = m;
      }
      function ro(m, w, I) {
        {
          var q = K.current;
          if (q !== null)
            try {
              Tl(q), fc(function() {
                q.length === 0 ? (K.current = null, w(m)) : ro(m, w, I);
              });
            } catch (pe) {
              I(pe);
            }
          else
            w(m);
        }
      }
      var Rl = !1;
      function Tl(m) {
        if (!Rl) {
          Rl = !0;
          var w = 0;
          try {
            for (; w < m.length; w++) {
              var I = m[w];
              do
                I = I(!0);
              while (I !== null);
            }
            m.length = 0;
          } catch (q) {
            throw m = m.slice(w + 1), q;
          } finally {
            Rl = !1;
          }
        }
      }
      var au = sc, ao = gi, as = er, ti = {
        map: ka,
        forEach: tu,
        count: cl,
        toArray: Qu,
        only: Ui
      };
      C.Children = ti, C.Component = de, C.Fragment = D, C.Profiler = H, C.PureComponent = Ie, C.StrictMode = y, C.Suspense = j, C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ut, C.cloneElement = ao, C.createContext = fl, C.createElement = au, C.createFactory = as, C.createRef = It, C.forwardRef = vi, C.isValidElement = Qt, C.lazy = ga, C.memo = Ce, C.startTransition = cc, C.unstable_act = Cl, C.useCallback = sr, C.useContext = mt, C.useDebugValue = zt, C.useDeferredValue = Za, C.useEffect = Vn, C.useId = Ct, C.useImperativeHandle = qu, C.useInsertionEffect = dn, C.useLayoutEffect = pn, C.useMemo = hi, C.useReducer = yt, C.useRef = Xe, C.useState = Ot, C.useSyncExternalStore = mi, C.useTransition = Kf, C.version = S, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ov, ov.exports)), ov.exports;
}
process.env.NODE_ENV === "production" ? QE.exports = EO() : QE.exports = CO();
var he = QE.exports;
const hT = /* @__PURE__ */ vT(he), RO = /* @__PURE__ */ SO({
  __proto__: null,
  default: hT
}, [he]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var YR;
function TO() {
  if (YR)
    return iv;
  YR = 1;
  var v = he, C = Symbol.for("react.element"), S = Symbol.for("react.fragment"), x = Object.prototype.hasOwnProperty, k = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(H, N, A) {
    var Q, j = {}, X = null, G = null;
    A !== void 0 && (X = "" + A), N.key !== void 0 && (X = "" + N.key), N.ref !== void 0 && (G = N.ref);
    for (Q in N)
      x.call(N, Q) && !D.hasOwnProperty(Q) && (j[Q] = N[Q]);
    if (H && H.defaultProps)
      for (Q in N = H.defaultProps, N)
        j[Q] === void 0 && (j[Q] = N[Q]);
    return { $$typeof: C, type: H, key: X, ref: G, props: j, _owner: k.current };
  }
  return iv.Fragment = S, iv.jsx = y, iv.jsxs = y, iv;
}
var lv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WR;
function bO() {
  return WR || (WR = 1, process.env.NODE_ENV !== "production" && function() {
    var v = he, C = Symbol.for("react.element"), S = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), H = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), ae = Symbol.iterator, ne = "@@iterator";
    function oe(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var ie = ae && _[ae] || _[ne];
      return typeof ie == "function" ? ie : null;
    }
    var ye = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function we(_) {
      {
        for (var ie = arguments.length, Ce = new Array(ie > 1 ? ie - 1 : 0), Me = 1; Me < ie; Me++)
          Ce[Me - 1] = arguments[Me];
        be("error", _, Ce);
      }
    }
    function be(_, ie, Ce) {
      {
        var Me = ye.ReactDebugCurrentFrame, mt = Me.getStackAddendum();
        mt !== "" && (ie += "%s", Ce = Ce.concat([mt]));
        var Ot = Ce.map(function(yt) {
          return String(yt);
        });
        Ot.unshift("Warning: " + ie), Function.prototype.apply.call(console[_], console, Ot);
      }
    }
    var je = !1, K = !1, ut = !1, Ze = !1, Zt = !1, hn;
    hn = Symbol.for("react.module.reference");
    function Ft(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === x || _ === D || Zt || _ === k || _ === A || _ === Q || Ze || _ === G || je || K || ut || typeof _ == "object" && _ !== null && (_.$$typeof === X || _.$$typeof === j || _.$$typeof === y || _.$$typeof === H || _.$$typeof === N || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === hn || _.getModuleId !== void 0));
    }
    function bt(_, ie, Ce) {
      var Me = _.displayName;
      if (Me)
        return Me;
      var mt = ie.displayName || ie.name || "";
      return mt !== "" ? Ce + "(" + mt + ")" : Ce;
    }
    function fn(_) {
      return _.displayName || "Context";
    }
    function Ge(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && we("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case x:
          return "Fragment";
        case S:
          return "Portal";
        case D:
          return "Profiler";
        case k:
          return "StrictMode";
        case A:
          return "Suspense";
        case Q:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case H:
            var ie = _;
            return fn(ie) + ".Consumer";
          case y:
            var Ce = _;
            return fn(Ce._context) + ".Provider";
          case N:
            return bt(_, _.render, "ForwardRef");
          case j:
            var Me = _.displayName || null;
            return Me !== null ? Me : Ge(_.type) || "Memo";
          case X: {
            var mt = _, Ot = mt._payload, yt = mt._init;
            try {
              return Ge(yt(Ot));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var lt = Object.assign, Ut = 0, vt, Oe, fe, Be, R, z, re;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function de() {
      {
        if (Ut === 0) {
          vt = console.log, Oe = console.info, fe = console.warn, Be = console.error, R = console.group, z = console.groupCollapsed, re = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        Ut++;
      }
    }
    function ze() {
      {
        if (Ut--, Ut === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, _, {
              value: vt
            }),
            info: lt({}, _, {
              value: Oe
            }),
            warn: lt({}, _, {
              value: fe
            }),
            error: lt({}, _, {
              value: Be
            }),
            group: lt({}, _, {
              value: R
            }),
            groupCollapsed: lt({}, _, {
              value: z
            }),
            groupEnd: lt({}, _, {
              value: re
            })
          });
        }
        Ut < 0 && we("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = ye.ReactCurrentDispatcher, _e;
    function De(_, ie, Ce) {
      {
        if (_e === void 0)
          try {
            throw Error();
          } catch (mt) {
            var Me = mt.stack.trim().match(/\n( *(at )?)/);
            _e = Me && Me[1] || "";
          }
        return `
` + _e + _;
      }
    }
    var Ie = !1, ft;
    {
      var It = typeof WeakMap == "function" ? WeakMap : Map;
      ft = new It();
    }
    function ge(_, ie) {
      if (!_ || Ie)
        return "";
      {
        var Ce = ft.get(_);
        if (Ce !== void 0)
          return Ce;
      }
      var Me;
      Ie = !0;
      var mt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ot;
      Ot = Ee.current, Ee.current = null, de();
      try {
        if (ie) {
          var yt = function() {
            throw Error();
          };
          if (Object.defineProperty(yt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(yt, []);
            } catch (zt) {
              Me = zt;
            }
            Reflect.construct(_, [], yt);
          } else {
            try {
              yt.call();
            } catch (zt) {
              Me = zt;
            }
            _.call(yt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (zt) {
            Me = zt;
          }
          _();
        }
      } catch (zt) {
        if (zt && Me && typeof zt.stack == "string") {
          for (var Xe = zt.stack.split(`
`), Vn = Me.stack.split(`
`), dn = Xe.length - 1, pn = Vn.length - 1; dn >= 1 && pn >= 0 && Xe[dn] !== Vn[pn]; )
            pn--;
          for (; dn >= 1 && pn >= 0; dn--, pn--)
            if (Xe[dn] !== Vn[pn]) {
              if (dn !== 1 || pn !== 1)
                do
                  if (dn--, pn--, pn < 0 || Xe[dn] !== Vn[pn]) {
                    var sr = `
` + Xe[dn].replace(" at new ", " at ");
                    return _.displayName && sr.includes("<anonymous>") && (sr = sr.replace("<anonymous>", _.displayName)), typeof _ == "function" && ft.set(_, sr), sr;
                  }
                while (dn >= 1 && pn >= 0);
              break;
            }
        }
      } finally {
        Ie = !1, Ee.current = Ot, ze(), Error.prepareStackTrace = mt;
      }
      var hi = _ ? _.displayName || _.name : "", qu = hi ? De(hi) : "";
      return typeof _ == "function" && ft.set(_, qu), qu;
    }
    function At(_, ie, Ce) {
      return ge(_, !1);
    }
    function Tn(_) {
      var ie = _.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function Nn(_, ie, Ce) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return ge(_, Tn(_));
      if (typeof _ == "string")
        return De(_);
      switch (_) {
        case A:
          return De("Suspense");
        case Q:
          return De("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case N:
            return At(_.render);
          case j:
            return Nn(_.type, ie, Ce);
          case X: {
            var Me = _, mt = Me._payload, Ot = Me._init;
            try {
              return Nn(Ot(mt), ie, Ce);
            } catch {
            }
          }
        }
      return "";
    }
    var Wn = Object.prototype.hasOwnProperty, zn = {}, Qr = ye.ReactDebugCurrentFrame;
    function qr(_) {
      if (_) {
        var ie = _._owner, Ce = Nn(_.type, _._source, ie ? ie.type : null);
        Qr.setExtraStackFrame(Ce);
      } else
        Qr.setExtraStackFrame(null);
    }
    function Zn(_, ie, Ce, Me, mt) {
      {
        var Ot = Function.call.bind(Wn);
        for (var yt in _)
          if (Ot(_, yt)) {
            var Xe = void 0;
            try {
              if (typeof _[yt] != "function") {
                var Vn = Error((Me || "React class") + ": " + Ce + " type `" + yt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[yt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Vn.name = "Invariant Violation", Vn;
              }
              Xe = _[yt](ie, yt, Me, Ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (dn) {
              Xe = dn;
            }
            Xe && !(Xe instanceof Error) && (qr(mt), we("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", Ce, yt, typeof Xe), qr(null)), Xe instanceof Error && !(Xe.message in zn) && (zn[Xe.message] = !0, qr(mt), we("Failed %s type: %s", Ce, Xe.message), qr(null));
          }
      }
    }
    var Cr = Array.isArray;
    function Gr(_) {
      return Cr(_);
    }
    function Rr(_) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, Ce = ie && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return Ce;
      }
    }
    function va(_) {
      try {
        return or(_), !1;
      } catch {
        return !0;
      }
    }
    function or(_) {
      return "" + _;
    }
    function Kr(_) {
      if (va(_))
        return we("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(_)), or(_);
    }
    var bn = ye.ReactCurrentOwner, Nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, ha, Se;
    Se = {};
    function Qe(_) {
      if (Wn.call(_, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function Et(_) {
      if (Wn.call(_, "key")) {
        var ie = Object.getOwnPropertyDescriptor(_, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Yt(_, ie) {
      if (typeof _.ref == "string" && bn.current && ie && bn.current.stateNode !== ie) {
        var Ce = Ge(bn.current.type);
        Se[Ce] || (we('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ge(bn.current.type), _.ref), Se[Ce] = !0);
      }
    }
    function Qt(_, ie) {
      {
        var Ce = function() {
          fi || (fi = !0, we("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        Ce.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: Ce,
          configurable: !0
        });
      }
    }
    function jn(_, ie) {
      {
        var Ce = function() {
          ha || (ha = !0, we("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        Ce.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: Ce,
          configurable: !0
        });
      }
    }
    var xn = function(_, ie, Ce, Me, mt, Ot, yt) {
      var Xe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: C,
        // Built-in properties that belong on the element
        type: _,
        key: ie,
        ref: Ce,
        props: yt,
        // Record the component responsible for creating this element.
        _owner: Ot
      };
      return Xe._store = {}, Object.defineProperty(Xe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Xe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(Xe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: mt
      }), Object.freeze && (Object.freeze(Xe.props), Object.freeze(Xe)), Xe;
    };
    function Tr(_, ie, Ce, Me, mt) {
      {
        var Ot, yt = {}, Xe = null, Vn = null;
        Ce !== void 0 && (Kr(Ce), Xe = "" + Ce), Et(ie) && (Kr(ie.key), Xe = "" + ie.key), Qe(ie) && (Vn = ie.ref, Yt(ie, mt));
        for (Ot in ie)
          Wn.call(ie, Ot) && !Nr.hasOwnProperty(Ot) && (yt[Ot] = ie[Ot]);
        if (_ && _.defaultProps) {
          var dn = _.defaultProps;
          for (Ot in dn)
            yt[Ot] === void 0 && (yt[Ot] = dn[Ot]);
        }
        if (Xe || Vn) {
          var pn = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          Xe && Qt(yt, pn), Vn && jn(yt, pn);
        }
        return xn(_, Xe, Vn, mt, Me, bn.current, yt);
      }
    }
    var en = ye.ReactCurrentOwner, Lr = ye.ReactDebugCurrentFrame;
    function qt(_) {
      if (_) {
        var ie = _._owner, Ce = Nn(_.type, _._source, ie ? ie.type : null);
        Lr.setExtraStackFrame(Ce);
      } else
        Lr.setExtraStackFrame(null);
    }
    var Gt;
    Gt = !1;
    function Ja(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === C;
    }
    function ka() {
      {
        if (en.current) {
          var _ = Ge(en.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function cl(_) {
      {
        if (_ !== void 0) {
          var ie = _.fileName.replace(/^.*[\\\/]/, ""), Ce = _.lineNumber;
          return `

Check your code at ` + ie + ":" + Ce + ".";
        }
        return "";
      }
    }
    var tu = {};
    function Qu(_) {
      {
        var ie = ka();
        if (!ie) {
          var Ce = typeof _ == "string" ? _ : _.displayName || _.name;
          Ce && (ie = `

Check the top-level render call using <` + Ce + ">.");
        }
        return ie;
      }
    }
    function Ui(_, ie) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var Ce = Qu(ie);
        if (tu[Ce])
          return;
        tu[Ce] = !0;
        var Me = "";
        _ && _._owner && _._owner !== en.current && (Me = " It was passed a child from " + Ge(_._owner.type) + "."), qt(_), we('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ce, Me), qt(null);
      }
    }
    function fl(_, ie) {
      {
        if (typeof _ != "object")
          return;
        if (Gr(_))
          for (var Ce = 0; Ce < _.length; Ce++) {
            var Me = _[Ce];
            Ja(Me) && Ui(Me, ie);
          }
        else if (Ja(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var mt = oe(_);
          if (typeof mt == "function" && mt !== _.entries)
            for (var Ot = mt.call(_), yt; !(yt = Ot.next()).done; )
              Ja(yt.value) && Ui(yt.value, ie);
        }
      }
    }
    function ma(_) {
      {
        var ie = _.type;
        if (ie == null || typeof ie == "string")
          return;
        var Ce;
        if (typeof ie == "function")
          Ce = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === N || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === j))
          Ce = ie.propTypes;
        else
          return;
        if (Ce) {
          var Me = Ge(ie);
          Zn(Ce, _.props, "prop", Me, _);
        } else if (ie.PropTypes !== void 0 && !Gt) {
          Gt = !0;
          var mt = Ge(ie);
          we("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", mt || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && we("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function di(_) {
      {
        for (var ie = Object.keys(_.props), Ce = 0; Ce < ie.length; Ce++) {
          var Me = ie[Ce];
          if (Me !== "children" && Me !== "key") {
            qt(_), we("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), qt(null);
            break;
          }
        }
        _.ref !== null && (qt(_), we("Invalid attribute `ref` supplied to `React.Fragment`."), qt(null));
      }
    }
    function ya(_, ie, Ce, Me, mt, Ot) {
      {
        var yt = Ft(_);
        if (!yt) {
          var Xe = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (Xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Vn = cl(mt);
          Vn ? Xe += Vn : Xe += ka();
          var dn;
          _ === null ? dn = "null" : Gr(_) ? dn = "array" : _ !== void 0 && _.$$typeof === C ? (dn = "<" + (Ge(_.type) || "Unknown") + " />", Xe = " Did you accidentally export a JSX literal instead of a component?") : dn = typeof _, we("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dn, Xe);
        }
        var pn = Tr(_, ie, Ce, mt, Ot);
        if (pn == null)
          return pn;
        if (yt) {
          var sr = ie.children;
          if (sr !== void 0)
            if (Me)
              if (Gr(sr)) {
                for (var hi = 0; hi < sr.length; hi++)
                  fl(sr[hi], _);
                Object.freeze && Object.freeze(sr);
              } else
                we("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fl(sr, _);
        }
        return _ === x ? di(pn) : ma(pn), pn;
      }
    }
    function pi(_, ie, Ce) {
      return ya(_, ie, Ce, !0);
    }
    function Mr(_, ie, Ce) {
      return ya(_, ie, Ce, !1);
    }
    var ga = Mr, vi = pi;
    lv.Fragment = x, lv.jsx = ga, lv.jsxs = vi;
  }()), lv;
}
process.env.NODE_ENV === "production" ? WE.exports = TO() : WE.exports = bO();
var at = WE.exports, sv = {}, qE = { exports: {} }, Ka = {}, ny = { exports: {} }, zE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QR;
function xO() {
  return QR || (QR = 1, function(v) {
    function C(fe, Be) {
      var R = fe.length;
      fe.push(Be);
      e:
        for (; 0 < R; ) {
          var z = R - 1 >>> 1, re = fe[z];
          if (0 < k(re, Be))
            fe[z] = Be, fe[R] = re, R = z;
          else
            break e;
        }
    }
    function S(fe) {
      return fe.length === 0 ? null : fe[0];
    }
    function x(fe) {
      if (fe.length === 0)
        return null;
      var Be = fe[0], R = fe.pop();
      if (R !== Be) {
        fe[0] = R;
        e:
          for (var z = 0, re = fe.length, me = re >>> 1; z < me; ) {
            var de = 2 * (z + 1) - 1, ze = fe[de], Ee = de + 1, _e = fe[Ee];
            if (0 > k(ze, R))
              Ee < re && 0 > k(_e, ze) ? (fe[z] = _e, fe[Ee] = R, z = Ee) : (fe[z] = ze, fe[de] = R, z = de);
            else if (Ee < re && 0 > k(_e, R))
              fe[z] = _e, fe[Ee] = R, z = Ee;
            else
              break e;
          }
      }
      return Be;
    }
    function k(fe, Be) {
      var R = fe.sortIndex - Be.sortIndex;
      return R !== 0 ? R : fe.id - Be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var D = performance;
      v.unstable_now = function() {
        return D.now();
      };
    } else {
      var y = Date, H = y.now();
      v.unstable_now = function() {
        return y.now() - H;
      };
    }
    var N = [], A = [], Q = 1, j = null, X = 3, G = !1, ae = !1, ne = !1, oe = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, we = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function be(fe) {
      for (var Be = S(A); Be !== null; ) {
        if (Be.callback === null)
          x(A);
        else if (Be.startTime <= fe)
          x(A), Be.sortIndex = Be.expirationTime, C(N, Be);
        else
          break;
        Be = S(A);
      }
    }
    function je(fe) {
      if (ne = !1, be(fe), !ae)
        if (S(N) !== null)
          ae = !0, vt(K);
        else {
          var Be = S(A);
          Be !== null && Oe(je, Be.startTime - fe);
        }
    }
    function K(fe, Be) {
      ae = !1, ne && (ne = !1, ye(Zt), Zt = -1), G = !0;
      var R = X;
      try {
        for (be(Be), j = S(N); j !== null && (!(j.expirationTime > Be) || fe && !bt()); ) {
          var z = j.callback;
          if (typeof z == "function") {
            j.callback = null, X = j.priorityLevel;
            var re = z(j.expirationTime <= Be);
            Be = v.unstable_now(), typeof re == "function" ? j.callback = re : j === S(N) && x(N), be(Be);
          } else
            x(N);
          j = S(N);
        }
        if (j !== null)
          var me = !0;
        else {
          var de = S(A);
          de !== null && Oe(je, de.startTime - Be), me = !1;
        }
        return me;
      } finally {
        j = null, X = R, G = !1;
      }
    }
    var ut = !1, Ze = null, Zt = -1, hn = 5, Ft = -1;
    function bt() {
      return !(v.unstable_now() - Ft < hn);
    }
    function fn() {
      if (Ze !== null) {
        var fe = v.unstable_now();
        Ft = fe;
        var Be = !0;
        try {
          Be = Ze(!0, fe);
        } finally {
          Be ? Ge() : (ut = !1, Ze = null);
        }
      } else
        ut = !1;
    }
    var Ge;
    if (typeof we == "function")
      Ge = function() {
        we(fn);
      };
    else if (typeof MessageChannel < "u") {
      var lt = new MessageChannel(), Ut = lt.port2;
      lt.port1.onmessage = fn, Ge = function() {
        Ut.postMessage(null);
      };
    } else
      Ge = function() {
        oe(fn, 0);
      };
    function vt(fe) {
      Ze = fe, ut || (ut = !0, Ge());
    }
    function Oe(fe, Be) {
      Zt = oe(function() {
        fe(v.unstable_now());
      }, Be);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(fe) {
      fe.callback = null;
    }, v.unstable_continueExecution = function() {
      ae || G || (ae = !0, vt(K));
    }, v.unstable_forceFrameRate = function(fe) {
      0 > fe || 125 < fe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : hn = 0 < fe ? Math.floor(1e3 / fe) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, v.unstable_getFirstCallbackNode = function() {
      return S(N);
    }, v.unstable_next = function(fe) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var Be = 3;
          break;
        default:
          Be = X;
      }
      var R = X;
      X = Be;
      try {
        return fe();
      } finally {
        X = R;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(fe, Be) {
      switch (fe) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          fe = 3;
      }
      var R = X;
      X = fe;
      try {
        return Be();
      } finally {
        X = R;
      }
    }, v.unstable_scheduleCallback = function(fe, Be, R) {
      var z = v.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? z + R : z) : R = z, fe) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return re = R + re, fe = { id: Q++, callback: Be, priorityLevel: fe, startTime: R, expirationTime: re, sortIndex: -1 }, R > z ? (fe.sortIndex = R, C(A, fe), S(N) === null && fe === S(A) && (ne ? (ye(Zt), Zt = -1) : ne = !0, Oe(je, R - z))) : (fe.sortIndex = re, C(N, fe), ae || G || (ae = !0, vt(K))), fe;
    }, v.unstable_shouldYield = bt, v.unstable_wrapCallback = function(fe) {
      var Be = X;
      return function() {
        var R = X;
        X = Be;
        try {
          return fe.apply(this, arguments);
        } finally {
          X = R;
        }
      };
    };
  }(zE)), zE;
}
var jE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qR;
function wO() {
  return qR || (qR = 1, function(v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var C = !1, S = !1, x = 5;
      function k(Se, Qe) {
        var Et = Se.length;
        Se.push(Qe), H(Se, Qe, Et);
      }
      function D(Se) {
        return Se.length === 0 ? null : Se[0];
      }
      function y(Se) {
        if (Se.length === 0)
          return null;
        var Qe = Se[0], Et = Se.pop();
        return Et !== Qe && (Se[0] = Et, N(Se, Et, 0)), Qe;
      }
      function H(Se, Qe, Et) {
        for (var Yt = Et; Yt > 0; ) {
          var Qt = Yt - 1 >>> 1, jn = Se[Qt];
          if (A(jn, Qe) > 0)
            Se[Qt] = Qe, Se[Yt] = jn, Yt = Qt;
          else
            return;
        }
      }
      function N(Se, Qe, Et) {
        for (var Yt = Et, Qt = Se.length, jn = Qt >>> 1; Yt < jn; ) {
          var xn = (Yt + 1) * 2 - 1, Tr = Se[xn], en = xn + 1, Lr = Se[en];
          if (A(Tr, Qe) < 0)
            en < Qt && A(Lr, Tr) < 0 ? (Se[Yt] = Lr, Se[en] = Qe, Yt = en) : (Se[Yt] = Tr, Se[xn] = Qe, Yt = xn);
          else if (en < Qt && A(Lr, Qe) < 0)
            Se[Yt] = Lr, Se[en] = Qe, Yt = en;
          else
            return;
        }
      }
      function A(Se, Qe) {
        var Et = Se.sortIndex - Qe.sortIndex;
        return Et !== 0 ? Et : Se.id - Qe.id;
      }
      var Q = 1, j = 2, X = 3, G = 4, ae = 5;
      function ne(Se, Qe) {
      }
      var oe = typeof performance == "object" && typeof performance.now == "function";
      if (oe) {
        var ye = performance;
        v.unstable_now = function() {
          return ye.now();
        };
      } else {
        var we = Date, be = we.now();
        v.unstable_now = function() {
          return we.now() - be;
        };
      }
      var je = 1073741823, K = -1, ut = 250, Ze = 5e3, Zt = 1e4, hn = je, Ft = [], bt = [], fn = 1, Ge = null, lt = X, Ut = !1, vt = !1, Oe = !1, fe = typeof setTimeout == "function" ? setTimeout : null, Be = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function z(Se) {
        for (var Qe = D(bt); Qe !== null; ) {
          if (Qe.callback === null)
            y(bt);
          else if (Qe.startTime <= Se)
            y(bt), Qe.sortIndex = Qe.expirationTime, k(Ft, Qe);
          else
            return;
          Qe = D(bt);
        }
      }
      function re(Se) {
        if (Oe = !1, z(Se), !vt)
          if (D(Ft) !== null)
            vt = !0, Kr(me);
          else {
            var Qe = D(bt);
            Qe !== null && bn(re, Qe.startTime - Se);
          }
      }
      function me(Se, Qe) {
        vt = !1, Oe && (Oe = !1, Nr()), Ut = !0;
        var Et = lt;
        try {
          var Yt;
          if (!S)
            return de(Se, Qe);
        } finally {
          Ge = null, lt = Et, Ut = !1;
        }
      }
      function de(Se, Qe) {
        var Et = Qe;
        for (z(Et), Ge = D(Ft); Ge !== null && !C && !(Ge.expirationTime > Et && (!Se || qr())); ) {
          var Yt = Ge.callback;
          if (typeof Yt == "function") {
            Ge.callback = null, lt = Ge.priorityLevel;
            var Qt = Ge.expirationTime <= Et, jn = Yt(Qt);
            Et = v.unstable_now(), typeof jn == "function" ? Ge.callback = jn : Ge === D(Ft) && y(Ft), z(Et);
          } else
            y(Ft);
          Ge = D(Ft);
        }
        if (Ge !== null)
          return !0;
        var xn = D(bt);
        return xn !== null && bn(re, xn.startTime - Et), !1;
      }
      function ze(Se, Qe) {
        switch (Se) {
          case Q:
          case j:
          case X:
          case G:
          case ae:
            break;
          default:
            Se = X;
        }
        var Et = lt;
        lt = Se;
        try {
          return Qe();
        } finally {
          lt = Et;
        }
      }
      function Ee(Se) {
        var Qe;
        switch (lt) {
          case Q:
          case j:
          case X:
            Qe = X;
            break;
          default:
            Qe = lt;
            break;
        }
        var Et = lt;
        lt = Qe;
        try {
          return Se();
        } finally {
          lt = Et;
        }
      }
      function _e(Se) {
        var Qe = lt;
        return function() {
          var Et = lt;
          lt = Qe;
          try {
            return Se.apply(this, arguments);
          } finally {
            lt = Et;
          }
        };
      }
      function De(Se, Qe, Et) {
        var Yt = v.unstable_now(), Qt;
        if (typeof Et == "object" && Et !== null) {
          var jn = Et.delay;
          typeof jn == "number" && jn > 0 ? Qt = Yt + jn : Qt = Yt;
        } else
          Qt = Yt;
        var xn;
        switch (Se) {
          case Q:
            xn = K;
            break;
          case j:
            xn = ut;
            break;
          case ae:
            xn = hn;
            break;
          case G:
            xn = Zt;
            break;
          case X:
          default:
            xn = Ze;
            break;
        }
        var Tr = Qt + xn, en = {
          id: fn++,
          callback: Qe,
          priorityLevel: Se,
          startTime: Qt,
          expirationTime: Tr,
          sortIndex: -1
        };
        return Qt > Yt ? (en.sortIndex = Qt, k(bt, en), D(Ft) === null && en === D(bt) && (Oe ? Nr() : Oe = !0, bn(re, Qt - Yt))) : (en.sortIndex = Tr, k(Ft, en), !vt && !Ut && (vt = !0, Kr(me))), en;
      }
      function Ie() {
      }
      function ft() {
        !vt && !Ut && (vt = !0, Kr(me));
      }
      function It() {
        return D(Ft);
      }
      function ge(Se) {
        Se.callback = null;
      }
      function At() {
        return lt;
      }
      var Tn = !1, Nn = null, Wn = -1, zn = x, Qr = -1;
      function qr() {
        var Se = v.unstable_now() - Qr;
        return !(Se < zn);
      }
      function Zn() {
      }
      function Cr(Se) {
        if (Se < 0 || Se > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Se > 0 ? zn = Math.floor(1e3 / Se) : zn = x;
      }
      var Gr = function() {
        if (Nn !== null) {
          var Se = v.unstable_now();
          Qr = Se;
          var Qe = !0, Et = !0;
          try {
            Et = Nn(Qe, Se);
          } finally {
            Et ? Rr() : (Tn = !1, Nn = null);
          }
        } else
          Tn = !1;
      }, Rr;
      if (typeof R == "function")
        Rr = function() {
          R(Gr);
        };
      else if (typeof MessageChannel < "u") {
        var va = new MessageChannel(), or = va.port2;
        va.port1.onmessage = Gr, Rr = function() {
          or.postMessage(null);
        };
      } else
        Rr = function() {
          fe(Gr, 0);
        };
      function Kr(Se) {
        Nn = Se, Tn || (Tn = !0, Rr());
      }
      function bn(Se, Qe) {
        Wn = fe(function() {
          Se(v.unstable_now());
        }, Qe);
      }
      function Nr() {
        Be(Wn), Wn = -1;
      }
      var fi = Zn, ha = null;
      v.unstable_IdlePriority = ae, v.unstable_ImmediatePriority = Q, v.unstable_LowPriority = G, v.unstable_NormalPriority = X, v.unstable_Profiling = ha, v.unstable_UserBlockingPriority = j, v.unstable_cancelCallback = ge, v.unstable_continueExecution = ft, v.unstable_forceFrameRate = Cr, v.unstable_getCurrentPriorityLevel = At, v.unstable_getFirstCallbackNode = It, v.unstable_next = Ee, v.unstable_pauseExecution = Ie, v.unstable_requestPaint = fi, v.unstable_runWithPriority = ze, v.unstable_scheduleCallback = De, v.unstable_shouldYield = qr, v.unstable_wrapCallback = _e, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(jE)), jE;
}
var GR;
function mT() {
  return GR || (GR = 1, process.env.NODE_ENV === "production" ? ny.exports = xO() : ny.exports = wO()), ny.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KR;
function _O() {
  if (KR)
    return Ka;
  KR = 1;
  var v = he, C = mT();
  function S(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var x = /* @__PURE__ */ new Set(), k = {};
  function D(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (k[n] = r, n = 0; n < r.length; n++)
      x.add(r[n]);
  }
  var H = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), N = Object.prototype.hasOwnProperty, A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Q = {}, j = {};
  function X(n) {
    return N.call(j, n) ? !0 : N.call(Q, n) ? !1 : A.test(n) ? j[n] = !0 : (Q[n] = !0, !1);
  }
  function G(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ae(n, r, l, o) {
    if (r === null || typeof r > "u" || G(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function ne(n, r, l, o, c, d, g) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = g;
  }
  var oe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    oe[n] = new ne(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    oe[r] = new ne(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    oe[n] = new ne(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    oe[n] = new ne(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    oe[n] = new ne(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    oe[n] = new ne(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    oe[n] = new ne(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    oe[n] = new ne(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    oe[n] = new ne(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ye = /[\-:]([a-z])/g;
  function we(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ye,
      we
    );
    oe[r] = new ne(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ye, we);
    oe[r] = new ne(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ye, we);
    oe[r] = new ne(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    oe[n] = new ne(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), oe.xlinkHref = new ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    oe[n] = new ne(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function be(n, r, l, o) {
    var c = oe.hasOwnProperty(r) ? oe[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ae(r, l, c, o) && (l = null), o || c === null ? X(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var je = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, K = Symbol.for("react.element"), ut = Symbol.for("react.portal"), Ze = Symbol.for("react.fragment"), Zt = Symbol.for("react.strict_mode"), hn = Symbol.for("react.profiler"), Ft = Symbol.for("react.provider"), bt = Symbol.for("react.context"), fn = Symbol.for("react.forward_ref"), Ge = Symbol.for("react.suspense"), lt = Symbol.for("react.suspense_list"), Ut = Symbol.for("react.memo"), vt = Symbol.for("react.lazy"), Oe = Symbol.for("react.offscreen"), fe = Symbol.iterator;
  function Be(n) {
    return n === null || typeof n != "object" ? null : (n = fe && n[fe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var R = Object.assign, z;
  function re(n) {
    if (z === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        z = r && r[1] || "";
      }
    return `
` + z + n;
  }
  var me = !1;
  function de(n, r) {
    if (!n || me)
      return "";
    me = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (W) {
            var o = W;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (W) {
            o = W;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (W) {
          o = W;
        }
        n();
      }
    } catch (W) {
      if (W && o && typeof W.stack == "string") {
        for (var c = W.stack.split(`
`), d = o.stack.split(`
`), g = c.length - 1, b = d.length - 1; 1 <= g && 0 <= b && c[g] !== d[b]; )
          b--;
        for (; 1 <= g && 0 <= b; g--, b--)
          if (c[g] !== d[b]) {
            if (g !== 1 || b !== 1)
              do
                if (g--, b--, 0 > b || c[g] !== d[b]) {
                  var O = `
` + c[g].replace(" at new ", " at ");
                  return n.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", n.displayName)), O;
                }
              while (1 <= g && 0 <= b);
            break;
          }
      }
    } finally {
      me = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? re(n) : "";
  }
  function ze(n) {
    switch (n.tag) {
      case 5:
        return re(n.type);
      case 16:
        return re("Lazy");
      case 13:
        return re("Suspense");
      case 19:
        return re("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = de(n.type, !1), n;
      case 11:
        return n = de(n.type.render, !1), n;
      case 1:
        return n = de(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ee(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Ze:
        return "Fragment";
      case ut:
        return "Portal";
      case hn:
        return "Profiler";
      case Zt:
        return "StrictMode";
      case Ge:
        return "Suspense";
      case lt:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case bt:
          return (n.displayName || "Context") + ".Consumer";
        case Ft:
          return (n._context.displayName || "Context") + ".Provider";
        case fn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Ut:
          return r = n.displayName || null, r !== null ? r : Ee(n.type) || "Memo";
        case vt:
          r = n._payload, n = n._init;
          try {
            return Ee(n(r));
          } catch {
          }
      }
    return null;
  }
  function _e(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ee(r);
      case 8:
        return r === Zt ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function De(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ie(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ft(n) {
    var r = Ie(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(g) {
        o = "" + g, d.call(this, g);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(g) {
        o = "" + g;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function It(n) {
    n._valueTracker || (n._valueTracker = ft(n));
  }
  function ge(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = Ie(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function At(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Tn(n, r) {
    var l = r.checked;
    return R({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Nn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = De(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Wn(n, r) {
    r = r.checked, r != null && be(n, "checked", r, !1);
  }
  function zn(n, r) {
    Wn(n, r);
    var l = De(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? qr(n, r.type, l) : r.hasOwnProperty("defaultValue") && qr(n, r.type, De(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Qr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function qr(n, r, l) {
    (r !== "number" || At(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Zn = Array.isArray;
  function Cr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + De(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Gr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(S(91));
    return R({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Rr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(S(92));
        if (Zn(l)) {
          if (1 < l.length)
            throw Error(S(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: De(l) };
  }
  function va(n, r) {
    var l = De(r.value), o = De(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function or(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Kr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function bn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Kr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Nr, fi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Nr = Nr || document.createElement("div"), Nr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Nr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ha(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Se = {
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
    strokeWidth: !0
  }, Qe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Se).forEach(function(n) {
    Qe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Se[r] = Se[n];
    });
  });
  function Et(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Se.hasOwnProperty(n) && Se[n] ? ("" + r).trim() : r + "px";
  }
  function Yt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Et(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Qt = R({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function jn(n, r) {
    if (r) {
      if (Qt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(S(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(S(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(S(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(S(62));
    }
  }
  function xn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var Tr = null;
  function en(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Lr = null, qt = null, Gt = null;
  function Ja(n) {
    if (n = gs(n)) {
      if (typeof Lr != "function")
        throw Error(S(280));
      var r = n.stateNode;
      r && (r = Ke(r), Lr(n.stateNode, n.type, r));
    }
  }
  function ka(n) {
    qt ? Gt ? Gt.push(n) : Gt = [n] : qt = n;
  }
  function cl() {
    if (qt) {
      var n = qt, r = Gt;
      if (Gt = qt = null, Ja(n), r)
        for (n = 0; n < r.length; n++)
          Ja(r[n]);
    }
  }
  function tu(n, r) {
    return n(r);
  }
  function Qu() {
  }
  var Ui = !1;
  function fl(n, r, l) {
    if (Ui)
      return n(r, l);
    Ui = !0;
    try {
      return tu(n, r, l);
    } finally {
      Ui = !1, (qt !== null || Gt !== null) && (Qu(), cl());
    }
  }
  function ma(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Ke(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
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
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(S(231, r, typeof l));
    return l;
  }
  var di = !1;
  if (H)
    try {
      var ya = {};
      Object.defineProperty(ya, "passive", { get: function() {
        di = !0;
      } }), window.addEventListener("test", ya, ya), window.removeEventListener("test", ya, ya);
    } catch {
      di = !1;
    }
  function pi(n, r, l, o, c, d, g, b, O) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, W);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var Mr = !1, ga = null, vi = !1, _ = null, ie = { onError: function(n) {
    Mr = !0, ga = n;
  } };
  function Ce(n, r, l, o, c, d, g, b, O) {
    Mr = !1, ga = null, pi.apply(ie, arguments);
  }
  function Me(n, r, l, o, c, d, g, b, O) {
    if (Ce.apply(this, arguments), Mr) {
      if (Mr) {
        var W = ga;
        Mr = !1, ga = null;
      } else
        throw Error(S(198));
      vi || (vi = !0, _ = W);
    }
  }
  function mt(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ot(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function yt(n) {
    if (mt(n) !== n)
      throw Error(S(188));
  }
  function Xe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = mt(n), r === null)
        throw Error(S(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return yt(c), n;
          if (d === o)
            return yt(c), r;
          d = d.sibling;
        }
        throw Error(S(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var g = !1, b = c.child; b; ) {
          if (b === l) {
            g = !0, l = c, o = d;
            break;
          }
          if (b === o) {
            g = !0, o = c, l = d;
            break;
          }
          b = b.sibling;
        }
        if (!g) {
          for (b = d.child; b; ) {
            if (b === l) {
              g = !0, l = d, o = c;
              break;
            }
            if (b === o) {
              g = !0, o = d, l = c;
              break;
            }
            b = b.sibling;
          }
          if (!g)
            throw Error(S(189));
        }
      }
      if (l.alternate !== o)
        throw Error(S(190));
    }
    if (l.tag !== 3)
      throw Error(S(188));
    return l.stateNode.current === l ? n : r;
  }
  function Vn(n) {
    return n = Xe(n), n !== null ? dn(n) : null;
  }
  function dn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = dn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var pn = C.unstable_scheduleCallback, sr = C.unstable_cancelCallback, hi = C.unstable_shouldYield, qu = C.unstable_requestPaint, zt = C.unstable_now, Kf = C.unstable_getCurrentPriorityLevel, Za = C.unstable_ImmediatePriority, Ct = C.unstable_UserBlockingPriority, mi = C.unstable_NormalPriority, dl = C.unstable_LowPriority, Gu = C.unstable_IdlePriority, pl = null, Xr = null;
  function ts(n) {
    if (Xr && typeof Xr.onCommitFiberRoot == "function")
      try {
        Xr.onCommitFiberRoot(pl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Ur = Math.clz32 ? Math.clz32 : oc, ns = Math.log, rs = Math.LN2;
  function oc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ns(n) / rs | 0) | 0;
  }
  var Ku = 64, vl = 4194304;
  function ei(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ar(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, g = l & 268435455;
    if (g !== 0) {
      var b = g & ~c;
      b !== 0 ? o = ei(b) : (d &= g, d !== 0 && (o = ei(d)));
    } else
      g = l & ~c, g !== 0 ? o = ei(g) : d !== 0 && (o = ei(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - Ur(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function hl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function ml(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var g = 31 - Ur(d), b = 1 << g, O = c[g];
      O === -1 ? (!(b & l) || b & o) && (c[g] = hl(b, r)) : O <= r && (n.expiredLanes |= b), d &= ~b;
    }
  }
  function yl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Xu() {
    var n = Ku;
    return Ku <<= 1, !(Ku & 4194240) && (Ku = 64), n;
  }
  function Ju(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Ai(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ur(r), n[r] = l;
  }
  function Xf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Ur(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function yi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Ur(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Vt = 0;
  function Zu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nu, eo, jt, to, no, dt = !1, ru = [], wn = null, Jr = null, zr = null, gl = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), Kt = [], sc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Zr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        wn = null;
        break;
      case "dragenter":
      case "dragleave":
        Jr = null;
        break;
      case "mouseover":
      case "mouseout":
        zr = null;
        break;
      case "pointerover":
      case "pointerout":
        gl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ln.delete(r.pointerId);
    }
  }
  function er(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = gs(r), r !== null && eo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function gi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return wn = er(wn, n, r, l, o, c), !0;
      case "dragenter":
        return Jr = er(Jr, n, r, l, o, c), !0;
      case "mouseover":
        return zr = er(zr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return gl.set(d, er(gl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Ln.set(d, er(Ln.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function cc(n) {
    var r = Ua(n.target);
    if (r !== null) {
      var l = mt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ot(l), r !== null) {
            n.blockedOn = r, no(n.priority, function() {
              jt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function zi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ao(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Tr = o, l.target.dispatchEvent(o), Tr = null;
      } else
        return r = gs(l), r !== null && eo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Sl(n, r, l) {
    zi(n) && l.delete(r);
  }
  function fc() {
    dt = !1, wn !== null && zi(wn) && (wn = null), Jr !== null && zi(Jr) && (Jr = null), zr !== null && zi(zr) && (zr = null), gl.forEach(Sl), Ln.forEach(Sl);
  }
  function Na(n, r) {
    n.blockedOn === r && (n.blockedOn = null, dt || (dt = !0, C.unstable_scheduleCallback(C.unstable_NormalPriority, fc)));
  }
  function El(n) {
    function r(c) {
      return Na(c, n);
    }
    if (0 < ru.length) {
      Na(ru[0], n);
      for (var l = 1; l < ru.length; l++) {
        var o = ru[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (wn !== null && Na(wn, n), Jr !== null && Na(Jr, n), zr !== null && Na(zr, n), gl.forEach(r), Ln.forEach(r), l = 0; l < Kt.length; l++)
      o = Kt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Kt.length && (l = Kt[0], l.blockedOn === null); )
      cc(l), l.blockedOn === null && Kt.shift();
  }
  var Cl = je.ReactCurrentBatchConfig, La = !0;
  function ro(n, r, l, o) {
    var c = Vt, d = Cl.transition;
    Cl.transition = null;
    try {
      Vt = 1, Tl(n, r, l, o);
    } finally {
      Vt = c, Cl.transition = d;
    }
  }
  function Rl(n, r, l, o) {
    var c = Vt, d = Cl.transition;
    Cl.transition = null;
    try {
      Vt = 4, Tl(n, r, l, o);
    } finally {
      Vt = c, Cl.transition = d;
    }
  }
  function Tl(n, r, l, o) {
    if (La) {
      var c = ao(n, r, l, o);
      if (c === null)
        Ec(n, r, o, au, l), Zr(n, o);
      else if (gi(c, n, r, l, o))
        o.stopPropagation();
      else if (Zr(n, o), r & 4 && -1 < sc.indexOf(n)) {
        for (; c !== null; ) {
          var d = gs(c);
          if (d !== null && nu(d), d = ao(n, r, l, o), d === null && Ec(n, r, o, au, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        Ec(n, r, o, null, l);
    }
  }
  var au = null;
  function ao(n, r, l, o) {
    if (au = null, n = en(o), n = Ua(n), n !== null)
      if (r = mt(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Ot(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return au = n, null;
  }
  function as(n) {
    switch (n) {
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
        switch (Kf()) {
          case Za:
            return 1;
          case Ct:
            return 4;
          case mi:
          case dl:
            return 16;
          case Gu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ti = null, m = null, w = null;
  function I() {
    if (w)
      return w;
    var n, r = m, l = r.length, o, c = "value" in ti ? ti.value : ti.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var g = l - n;
    for (o = 1; o <= g && r[l - o] === c[d - o]; o++)
      ;
    return w = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function pe() {
    return !0;
  }
  function nt() {
    return !1;
  }
  function xe(n) {
    function r(l, o, c, d, g) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = g, this.currentTarget = null;
      for (var b in n)
        n.hasOwnProperty(b) && (l = n[b], this[b] = l ? l(d) : d[b]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? pe : nt, this.isPropagationStopped = nt, this;
    }
    return R(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = pe);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = pe);
    }, persist: function() {
    }, isPersistent: pe }), r;
  }
  var et = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Rt = xe(et), Pt = R({}, et, { view: 0, detail: 0 }), un = xe(Pt), tn, on, vn, _t = R({}, Pt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== vn && (vn && n.type === "mousemove" ? (tn = n.screenX - vn.screenX, on = n.screenY - vn.screenY) : on = tn = 0, vn = n), tn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : on;
  } }), ji = xe(_t), io = R({}, _t, { dataTransfer: 0 }), is = xe(io), Jf = R({}, Pt, { relatedTarget: 0 }), ni = xe(Jf), ls = R({}, et, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), us = xe(ls), Zf = R({}, et, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), fy = xe(Zf), dy = R({}, et, { data: 0 }), ed = xe(dy), td = {
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
    MozPrintableKey: "Unidentified"
  }, yv = {
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
    224: "Meta"
  }, gv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Sv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = gv[n]) ? !!r[n] : !1;
  }
  function nd() {
    return Sv;
  }
  var Pi = R({}, Pt, { key: function(n) {
    if (n.key) {
      var r = td[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? yv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nd, charCode: function(n) {
    return n.type === "keypress" ? q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), py = xe(Pi), rd = R({}, _t, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), dc = xe(rd), ad = R({}, Pt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nd }), vy = xe(ad), pc = R({}, et, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ev = xe(pc), ea = R({}, _t, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Hi = xe(ea), Bn = [9, 13, 27, 32], ri = H && "CompositionEvent" in window, iu = null;
  H && "documentMode" in document && (iu = document.documentMode);
  var vc = H && "TextEvent" in window && !iu, Cv = H && (!ri || iu && 8 < iu && 11 >= iu), lo = String.fromCharCode(32), Rv = !1;
  function Tv(n, r) {
    switch (n) {
      case "keyup":
        return Bn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var uo = !1;
  function hy(n, r) {
    switch (n) {
      case "compositionend":
        return hc(r);
      case "keypress":
        return r.which !== 32 ? null : (Rv = !0, lo);
      case "textInput":
        return n = r.data, n === lo && Rv ? null : n;
      default:
        return null;
    }
  }
  function my(n, r) {
    if (uo)
      return n === "compositionend" || !ri && Tv(n, r) ? (n = I(), w = m = ti = null, uo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Cv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var bv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function xv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!bv[n.type] : r === "textarea";
  }
  function wv(n, r, l, o) {
    ka(o), r = hs(r, "onChange"), 0 < r.length && (l = new Rt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var os = null, oo = null;
  function so(n) {
    Sc(n, 0);
  }
  function co(n) {
    var r = po(n);
    if (ge(r))
      return n;
  }
  function _v(n, r) {
    if (n === "change")
      return r;
  }
  var id = !1;
  if (H) {
    var ld;
    if (H) {
      var ud = "oninput" in document;
      if (!ud) {
        var Dv = document.createElement("div");
        Dv.setAttribute("oninput", "return;"), ud = typeof Dv.oninput == "function";
      }
      ld = ud;
    } else
      ld = !1;
    id = ld && (!document.documentMode || 9 < document.documentMode);
  }
  function Ov() {
    os && (os.detachEvent("onpropertychange", kv), oo = os = null);
  }
  function kv(n) {
    if (n.propertyName === "value" && co(oo)) {
      var r = [];
      wv(r, oo, n, en(n)), fl(so, r);
    }
  }
  function yy(n, r, l) {
    n === "focusin" ? (Ov(), os = r, oo = l, os.attachEvent("onpropertychange", kv)) : n === "focusout" && Ov();
  }
  function gy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return co(oo);
  }
  function Sy(n, r) {
    if (n === "click")
      return co(r);
  }
  function Nv(n, r) {
    if (n === "input" || n === "change")
      return co(r);
  }
  function Ey(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ma = typeof Object.is == "function" ? Object.is : Ey;
  function ss(n, r) {
    if (Ma(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!N.call(r, c) || !Ma(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function Lv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Mv(n, r) {
    var l = Lv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Lv(l);
    }
  }
  function Uv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Uv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function mc() {
    for (var n = window, r = At(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = At(n.document);
    }
    return r;
  }
  function Fi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function yc(n) {
    var r = mc(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Uv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Fi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Mv(l, d);
          var g = Mv(
            l,
            o
          );
          c && g && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== g.node || n.focusOffset !== g.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(g.node, g.offset)) : (r.setEnd(g.node, g.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Av = H && "documentMode" in document && 11 >= document.documentMode, ai = null, od = null, cs = null, sd = !1;
  function zv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    sd || ai == null || ai !== At(o) || (o = ai, "selectionStart" in o && Fi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), cs && ss(cs, o) || (cs = o, o = hs(od, "onSelect"), 0 < o.length && (r = new Rt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ai)));
  }
  function gc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var lu = { animationend: gc("Animation", "AnimationEnd"), animationiteration: gc("Animation", "AnimationIteration"), animationstart: gc("Animation", "AnimationStart"), transitionend: gc("Transition", "TransitionEnd") }, cd = {}, fd = {};
  H && (fd = document.createElement("div").style, "AnimationEvent" in window || (delete lu.animationend.animation, delete lu.animationiteration.animation, delete lu.animationstart.animation), "TransitionEvent" in window || delete lu.transitionend.transition);
  function tr(n) {
    if (cd[n])
      return cd[n];
    if (!lu[n])
      return n;
    var r = lu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in fd)
        return cd[n] = r[l];
    return n;
  }
  var dd = tr("animationend"), jv = tr("animationiteration"), Pv = tr("animationstart"), Hv = tr("transitionend"), Fv = /* @__PURE__ */ new Map(), Vv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Vi(n, r) {
    Fv.set(n, r), D(r, [n]);
  }
  for (var fs = 0; fs < Vv.length; fs++) {
    var uu = Vv[fs], Cy = uu.toLowerCase(), ds = uu[0].toUpperCase() + uu.slice(1);
    Vi(Cy, "on" + ds);
  }
  Vi(dd, "onAnimationEnd"), Vi(jv, "onAnimationIteration"), Vi(Pv, "onAnimationStart"), Vi("dblclick", "onDoubleClick"), Vi("focusin", "onFocus"), Vi("focusout", "onBlur"), Vi(Hv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), D("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), D("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), D("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), D("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), D("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), D("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ry = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
  function Bv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Me(o, r, void 0, n), n.currentTarget = null;
  }
  function Sc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var g = o.length - 1; 0 <= g; g--) {
            var b = o[g], O = b.instance, W = b.currentTarget;
            if (b = b.listener, O !== d && c.isPropagationStopped())
              break e;
            Bv(c, b, W), d = O;
          }
        else
          for (g = 0; g < o.length; g++) {
            if (b = o[g], O = b.instance, W = b.currentTarget, b = b.listener, O !== d && c.isPropagationStopped())
              break e;
            Bv(c, b, W), d = O;
          }
      }
    }
    if (vi)
      throw n = _, vi = !1, _ = null, n;
  }
  function sn(n, r) {
    var l = r[Sd];
    l === void 0 && (l = r[Sd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || ($v(r, n, 2, !1), l.add(o));
  }
  function bl(n, r, l) {
    var o = 0;
    r && (o |= 4), $v(l, n, o, r);
  }
  var Bi = "_reactListening" + Math.random().toString(36).slice(2);
  function fo(n) {
    if (!n[Bi]) {
      n[Bi] = !0, x.forEach(function(l) {
        l !== "selectionchange" && (Ry.has(l) || bl(l, !1, n), bl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Bi] || (r[Bi] = !0, bl("selectionchange", !1, r));
    }
  }
  function $v(n, r, l, o) {
    switch (as(r)) {
      case 1:
        var c = ro;
        break;
      case 4:
        c = Rl;
        break;
      default:
        c = Tl;
    }
    l = c.bind(null, r, l, n), c = void 0, !di || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Ec(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var g = o.tag;
          if (g === 3 || g === 4) {
            var b = o.stateNode.containerInfo;
            if (b === c || b.nodeType === 8 && b.parentNode === c)
              break;
            if (g === 4)
              for (g = o.return; g !== null; ) {
                var O = g.tag;
                if ((O === 3 || O === 4) && (O = g.stateNode.containerInfo, O === c || O.nodeType === 8 && O.parentNode === c))
                  return;
                g = g.return;
              }
            for (; b !== null; ) {
              if (g = Ua(b), g === null)
                return;
              if (O = g.tag, O === 5 || O === 6) {
                o = d = g;
                continue e;
              }
              b = b.parentNode;
            }
          }
          o = o.return;
        }
    fl(function() {
      var W = d, ue = en(l), se = [];
      e: {
        var le = Fv.get(n);
        if (le !== void 0) {
          var Ne = Rt, He = n;
          switch (n) {
            case "keypress":
              if (q(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ne = py;
              break;
            case "focusin":
              He = "focus", Ne = ni;
              break;
            case "focusout":
              He = "blur", Ne = ni;
              break;
            case "beforeblur":
            case "afterblur":
              Ne = ni;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ne = ji;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ne = is;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ne = vy;
              break;
            case dd:
            case jv:
            case Pv:
              Ne = us;
              break;
            case Hv:
              Ne = Ev;
              break;
            case "scroll":
              Ne = un;
              break;
            case "wheel":
              Ne = Hi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ne = fy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ne = dc;
          }
          var $e = (r & 4) !== 0, Hn = !$e && n === "scroll", P = $e ? le !== null ? le + "Capture" : null : le;
          $e = [];
          for (var M = W, B; M !== null; ) {
            B = M;
            var ve = B.stateNode;
            if (B.tag === 5 && ve !== null && (B = ve, P !== null && (ve = ma(M, P), ve != null && $e.push(vs(M, ve, B)))), Hn)
              break;
            M = M.return;
          }
          0 < $e.length && (le = new Ne(le, He, null, l, ue), se.push({ event: le, listeners: $e }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (le = n === "mouseover" || n === "pointerover", Ne = n === "mouseout" || n === "pointerout", le && l !== Tr && (He = l.relatedTarget || l.fromElement) && (Ua(He) || He[$i]))
            break e;
          if ((Ne || le) && (le = ue.window === ue ? ue : (le = ue.ownerDocument) ? le.defaultView || le.parentWindow : window, Ne ? (He = l.relatedTarget || l.toElement, Ne = W, He = He ? Ua(He) : null, He !== null && (Hn = mt(He), He !== Hn || He.tag !== 5 && He.tag !== 6) && (He = null)) : (Ne = null, He = W), Ne !== He)) {
            if ($e = ji, ve = "onMouseLeave", P = "onMouseEnter", M = "mouse", (n === "pointerout" || n === "pointerover") && ($e = dc, ve = "onPointerLeave", P = "onPointerEnter", M = "pointer"), Hn = Ne == null ? le : po(Ne), B = He == null ? le : po(He), le = new $e(ve, M + "leave", Ne, l, ue), le.target = Hn, le.relatedTarget = B, ve = null, Ua(ue) === W && ($e = new $e(P, M + "enter", He, l, ue), $e.target = B, $e.relatedTarget = Hn, ve = $e), Hn = ve, Ne && He)
              t: {
                for ($e = Ne, P = He, M = 0, B = $e; B; B = ou(B))
                  M++;
                for (B = 0, ve = P; ve; ve = ou(ve))
                  B++;
                for (; 0 < M - B; )
                  $e = ou($e), M--;
                for (; 0 < B - M; )
                  P = ou(P), B--;
                for (; M--; ) {
                  if ($e === P || P !== null && $e === P.alternate)
                    break t;
                  $e = ou($e), P = ou(P);
                }
                $e = null;
              }
            else
              $e = null;
            Ne !== null && pd(se, le, Ne, $e, !1), He !== null && Hn !== null && pd(se, Hn, He, $e, !0);
          }
        }
        e: {
          if (le = W ? po(W) : window, Ne = le.nodeName && le.nodeName.toLowerCase(), Ne === "select" || Ne === "input" && le.type === "file")
            var Ye = _v;
          else if (xv(le))
            if (id)
              Ye = Nv;
            else {
              Ye = gy;
              var Fe = yy;
            }
          else
            (Ne = le.nodeName) && Ne.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ye = Sy);
          if (Ye && (Ye = Ye(n, W))) {
            wv(se, Ye, l, ue);
            break e;
          }
          Fe && Fe(n, le, W), n === "focusout" && (Fe = le._wrapperState) && Fe.controlled && le.type === "number" && qr(le, "number", le.value);
        }
        switch (Fe = W ? po(W) : window, n) {
          case "focusin":
            (xv(Fe) || Fe.contentEditable === "true") && (ai = Fe, od = W, cs = null);
            break;
          case "focusout":
            cs = od = ai = null;
            break;
          case "mousedown":
            sd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sd = !1, zv(se, l, ue);
            break;
          case "selectionchange":
            if (Av)
              break;
          case "keydown":
          case "keyup":
            zv(se, l, ue);
        }
        var qe;
        if (ri)
          e: {
            switch (n) {
              case "compositionstart":
                var ct = "onCompositionStart";
                break e;
              case "compositionend":
                ct = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ct = "onCompositionUpdate";
                break e;
            }
            ct = void 0;
          }
        else
          uo ? Tv(n, l) && (ct = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ct = "onCompositionStart");
        ct && (Cv && l.locale !== "ko" && (uo || ct !== "onCompositionStart" ? ct === "onCompositionEnd" && uo && (qe = I()) : (ti = ue, m = "value" in ti ? ti.value : ti.textContent, uo = !0)), Fe = hs(W, ct), 0 < Fe.length && (ct = new ed(ct, n, null, l, ue), se.push({ event: ct, listeners: Fe }), qe ? ct.data = qe : (qe = hc(l), qe !== null && (ct.data = qe)))), (qe = vc ? hy(n, l) : my(n, l)) && (W = hs(W, "onBeforeInput"), 0 < W.length && (ue = new ed("onBeforeInput", "beforeinput", null, l, ue), se.push({ event: ue, listeners: W }), ue.data = qe));
      }
      Sc(se, r);
    });
  }
  function vs(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function hs(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ma(n, l), d != null && o.unshift(vs(n, d, c)), d = ma(n, r), d != null && o.push(vs(n, d, c))), n = n.return;
    }
    return o;
  }
  function ou(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function pd(n, r, l, o, c) {
    for (var d = r._reactName, g = []; l !== null && l !== o; ) {
      var b = l, O = b.alternate, W = b.stateNode;
      if (O !== null && O === o)
        break;
      b.tag === 5 && W !== null && (b = W, c ? (O = ma(l, d), O != null && g.unshift(vs(l, O, b))) : c || (O = ma(l, d), O != null && g.push(vs(l, O, b)))), l = l.return;
    }
    g.length !== 0 && n.push({ event: r, listeners: g });
  }
  var vd = /\r\n?/g, Ty = /\u0000|\uFFFD/g;
  function hd(n) {
    return (typeof n == "string" ? n : "" + n).replace(vd, `
`).replace(Ty, "");
  }
  function Cc(n, r, l) {
    if (r = hd(r), hd(n) !== r && l)
      throw Error(S(425));
  }
  function Rc() {
  }
  var md = null, su = null;
  function ms(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var cu = typeof setTimeout == "function" ? setTimeout : void 0, Iv = typeof clearTimeout == "function" ? clearTimeout : void 0, yd = typeof Promise == "function" ? Promise : void 0, gd = typeof queueMicrotask == "function" ? queueMicrotask : typeof yd < "u" ? function(n) {
    return yd.resolve(null).then(n).catch(by);
  } : cu;
  function by(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function xl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), El(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    El(r);
  }
  function ii(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function ys(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var wl = Math.random().toString(36).slice(2), Si = "__reactFiber$" + wl, fu = "__reactProps$" + wl, $i = "__reactContainer$" + wl, Sd = "__reactEvents$" + wl, xy = "__reactListeners$" + wl, Ed = "__reactHandles$" + wl;
  function Ua(n) {
    var r = n[Si];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[$i] || l[Si]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = ys(n); n !== null; ) {
            if (l = n[Si])
              return l;
            n = ys(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function gs(n) {
    return n = n[Si] || n[$i], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function po(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(S(33));
  }
  function Ke(n) {
    return n[fu] || null;
  }
  var _l = [], mn = -1;
  function gt(n) {
    return { current: n };
  }
  function Wt(n) {
    0 > mn || (n.current = _l[mn], _l[mn] = null, mn--);
  }
  function Xt(n, r) {
    mn++, _l[mn] = n.current, n.current = r;
  }
  var Ei = {}, st = gt(Ei), Mn = gt(!1), ta = Ei;
  function Aa(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Ei;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Cn(n) {
    return n = n.childContextTypes, n != null;
  }
  function za() {
    Wt(Mn), Wt(st);
  }
  function Dl(n, r, l) {
    if (st.current !== Ei)
      throw Error(S(168));
    Xt(st, r), Xt(Mn, l);
  }
  function Ss(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(S(108, _e(n) || "Unknown", c));
    return R({}, l, o);
  }
  function Tc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ei, ta = st.current, Xt(st, n), Xt(Mn, Mn.current), !0;
  }
  function Yv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(S(169));
    l ? (n = Ss(n, r, ta), o.__reactInternalMemoizedMergedChildContext = n, Wt(Mn), Wt(st), Xt(st, n)) : Wt(Mn), Xt(Mn, l);
  }
  var Sa = null, nr = !1, Es = !1;
  function Cd(n) {
    Sa === null ? Sa = [n] : Sa.push(n);
  }
  function Rd(n) {
    nr = !0, Cd(n);
  }
  function na() {
    if (!Es && Sa !== null) {
      Es = !0;
      var n = 0, r = Vt;
      try {
        var l = Sa;
        for (Vt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Sa = null, nr = !1;
      } catch (c) {
        throw Sa !== null && (Sa = Sa.slice(n + 1)), pn(Za, na), c;
      } finally {
        Vt = r, Es = !1;
      }
    }
    return null;
  }
  var Ol = [], ra = 0, du = null, vo = 0, aa = [], br = 0, ja = null, cr = 1, Ii = "";
  function Ea(n, r) {
    Ol[ra++] = vo, Ol[ra++] = du, du = n, vo = r;
  }
  function Td(n, r, l) {
    aa[br++] = cr, aa[br++] = Ii, aa[br++] = ja, ja = n;
    var o = cr;
    n = Ii;
    var c = 32 - Ur(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Ur(r) + c;
    if (30 < d) {
      var g = c - c % 5;
      d = (o & (1 << g) - 1).toString(32), o >>= g, c -= g, cr = 1 << 32 - Ur(r) + c | l << c | o, Ii = d + n;
    } else
      cr = 1 << d | l << c | o, Ii = n;
  }
  function bc(n) {
    n.return !== null && (Ea(n, 1), Td(n, 1, 0));
  }
  function bd(n) {
    for (; n === du; )
      du = Ol[--ra], Ol[ra] = null, vo = Ol[--ra], Ol[ra] = null;
    for (; n === ja; )
      ja = aa[--br], aa[br] = null, Ii = aa[--br], aa[br] = null, cr = aa[--br], aa[br] = null;
  }
  var Ca = null, ia = null, yn = !1, Pa = null;
  function xd(n, r) {
    var l = Ia(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Wv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ca = n, ia = ii(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ca = n, ia = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ja !== null ? { id: cr, overflow: Ii } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ia(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ca = n, ia = null, !0) : !1;
      default:
        return !1;
    }
  }
  function xc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function wc(n) {
    if (yn) {
      var r = ia;
      if (r) {
        var l = r;
        if (!Wv(n, r)) {
          if (xc(n))
            throw Error(S(418));
          r = ii(l.nextSibling);
          var o = Ca;
          r && Wv(n, r) ? xd(o, l) : (n.flags = n.flags & -4097 | 2, yn = !1, Ca = n);
        }
      } else {
        if (xc(n))
          throw Error(S(418));
        n.flags = n.flags & -4097 | 2, yn = !1, Ca = n;
      }
    }
  }
  function Qv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ca = n;
  }
  function _c(n) {
    if (n !== Ca)
      return !1;
    if (!yn)
      return Qv(n), yn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ms(n.type, n.memoizedProps)), r && (r = ia)) {
      if (xc(n))
        throw qv(), Error(S(418));
      for (; r; )
        xd(n, r), r = ii(r.nextSibling);
    }
    if (Qv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(S(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ia = ii(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ia = null;
      }
    } else
      ia = Ca ? ii(n.stateNode.nextSibling) : null;
    return !0;
  }
  function qv() {
    for (var n = ia; n; )
      n = ii(n.nextSibling);
  }
  function _n() {
    ia = Ca = null, yn = !1;
  }
  function wd(n) {
    Pa === null ? Pa = [n] : Pa.push(n);
  }
  var Dc = je.ReactCurrentBatchConfig;
  function Ra(n, r) {
    if (n && n.defaultProps) {
      r = R({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var Ci = gt(null), Oc = null, kl = null, _d = null;
  function Dd() {
    _d = kl = Oc = null;
  }
  function Nl(n) {
    var r = Ci.current;
    Wt(Ci), n._currentValue = r;
  }
  function rr(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function Re(n, r) {
    Oc = n, _d = kl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && ($n = !0), n.firstContext = null);
  }
  function Pn(n) {
    var r = n._currentValue;
    if (_d !== n)
      if (n = { context: n, memoizedValue: r, next: null }, kl === null) {
        if (Oc === null)
          throw Error(S(308));
        kl = n, Oc.dependencies = { lanes: 0, firstContext: n };
      } else
        kl = kl.next = n;
    return r;
  }
  var fr = null;
  function Od(n) {
    fr === null ? fr = [n] : fr.push(n);
  }
  function Gv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Od(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Yi(n, o);
  }
  function Yi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ll = !1;
  function kd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Qn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Wi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ml(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, xt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Yi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Od(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Yi(n, l);
  }
  function kc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, yi(n, l);
    }
  }
  function Nd(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var g = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = g : d = d.next = g, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Ul(n, r, l, o) {
    var c = n.updateQueue;
    Ll = !1;
    var d = c.firstBaseUpdate, g = c.lastBaseUpdate, b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var O = b, W = O.next;
      O.next = null, g === null ? d = W : g.next = W, g = O;
      var ue = n.alternate;
      ue !== null && (ue = ue.updateQueue, b = ue.lastBaseUpdate, b !== g && (b === null ? ue.firstBaseUpdate = W : b.next = W, ue.lastBaseUpdate = O));
    }
    if (d !== null) {
      var se = c.baseState;
      g = 0, ue = W = O = null, b = d;
      do {
        var le = b.lane, Ne = b.eventTime;
        if ((o & le) === le) {
          ue !== null && (ue = ue.next = {
            eventTime: Ne,
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          });
          e: {
            var He = n, $e = b;
            switch (le = r, Ne = l, $e.tag) {
              case 1:
                if (He = $e.payload, typeof He == "function") {
                  se = He.call(Ne, se, le);
                  break e;
                }
                se = He;
                break e;
              case 3:
                He.flags = He.flags & -65537 | 128;
              case 0:
                if (He = $e.payload, le = typeof He == "function" ? He.call(Ne, se, le) : He, le == null)
                  break e;
                se = R({}, se, le);
                break e;
              case 2:
                Ll = !0;
            }
          }
          b.callback !== null && b.lane !== 0 && (n.flags |= 64, le = c.effects, le === null ? c.effects = [b] : le.push(b));
        } else
          Ne = { eventTime: Ne, lane: le, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, ue === null ? (W = ue = Ne, O = se) : ue = ue.next = Ne, g |= le;
        if (b = b.next, b === null) {
          if (b = c.shared.pending, b === null)
            break;
          le = b, b = le.next, le.next = null, c.lastBaseUpdate = le, c.shared.pending = null;
        }
      } while (1);
      if (ue === null && (O = se), c.baseState = O, c.firstBaseUpdate = W, c.lastBaseUpdate = ue, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          g |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Ki |= g, n.lanes = g, n.memoizedState = se;
    }
  }
  function pu(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(S(191, c));
          c.call(o);
        }
      }
  }
  var Kv = new v.Component().refs;
  function Ld(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : R({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Nc = { isMounted: function(n) {
    return (n = n._reactInternals) ? mt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Dr(), c = In(n), d = Wi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (Or(r, n, c, o), kc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Dr(), c = In(n), d = Wi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (Or(r, n, c, o), kc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Dr(), o = In(n), c = Wi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ml(n, c, o), r !== null && (Or(r, n, o, l), kc(r, n, o));
  } };
  function Xv(n, r, l, o, c, d, g) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, g) : r.prototype && r.prototype.isPureReactComponent ? !ss(l, o) || !ss(c, d) : !0;
  }
  function Jv(n, r, l) {
    var o = !1, c = Ei, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Pn(d) : (c = Cn(r) ? ta : st.current, o = r.contextTypes, d = (o = o != null) ? Aa(n, c) : Ei), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Nc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Zv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Nc.enqueueReplaceState(r, r.state, null);
  }
  function Lc(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Kv, kd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Pn(d) : (d = Cn(r) ? ta : st.current, c.context = Aa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Ld(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Nc.enqueueReplaceState(c, c.state, null), Ul(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ho(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(S(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(S(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(g) {
          var b = c.refs;
          b === Kv && (b = c.refs = {}), g === null ? delete b[d] : b[d] = g;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(S(284));
      if (!l._owner)
        throw Error(S(290, n));
    }
    return n;
  }
  function Mc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(S(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function eh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function th(n) {
    function r(P, M) {
      if (n) {
        var B = P.deletions;
        B === null ? (P.deletions = [M], P.flags |= 16) : B.push(M);
      }
    }
    function l(P, M) {
      if (!n)
        return null;
      for (; M !== null; )
        r(P, M), M = M.sibling;
      return null;
    }
    function o(P, M) {
      for (P = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? P.set(M.key, M) : P.set(M.index, M), M = M.sibling;
      return P;
    }
    function c(P, M) {
      return P = Bl(P, M), P.index = 0, P.sibling = null, P;
    }
    function d(P, M, B) {
      return P.index = B, n ? (B = P.alternate, B !== null ? (B = B.index, B < M ? (P.flags |= 2, M) : B) : (P.flags |= 2, M)) : (P.flags |= 1048576, M);
    }
    function g(P) {
      return n && P.alternate === null && (P.flags |= 2), P;
    }
    function b(P, M, B, ve) {
      return M === null || M.tag !== 6 ? (M = Hs(B, P.mode, ve), M.return = P, M) : (M = c(M, B), M.return = P, M);
    }
    function O(P, M, B, ve) {
      var Ye = B.type;
      return Ye === Ze ? ue(P, M, B.props.children, ve, B.key) : M !== null && (M.elementType === Ye || typeof Ye == "object" && Ye !== null && Ye.$$typeof === vt && eh(Ye) === M.type) ? (ve = c(M, B.props), ve.ref = ho(P, M, B), ve.return = P, ve) : (ve = df(B.type, B.key, B.props, null, P.mode, ve), ve.ref = ho(P, M, B), ve.return = P, ve);
    }
    function W(P, M, B, ve) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== B.containerInfo || M.stateNode.implementation !== B.implementation ? (M = Lu(B, P.mode, ve), M.return = P, M) : (M = c(M, B.children || []), M.return = P, M);
    }
    function ue(P, M, B, ve, Ye) {
      return M === null || M.tag !== 7 ? (M = Nu(B, P.mode, ve, Ye), M.return = P, M) : (M = c(M, B), M.return = P, M);
    }
    function se(P, M, B) {
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return M = Hs("" + M, P.mode, B), M.return = P, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case K:
            return B = df(M.type, M.key, M.props, null, P.mode, B), B.ref = ho(P, null, M), B.return = P, B;
          case ut:
            return M = Lu(M, P.mode, B), M.return = P, M;
          case vt:
            var ve = M._init;
            return se(P, ve(M._payload), B);
        }
        if (Zn(M) || Be(M))
          return M = Nu(M, P.mode, B, null), M.return = P, M;
        Mc(P, M);
      }
      return null;
    }
    function le(P, M, B, ve) {
      var Ye = M !== null ? M.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number")
        return Ye !== null ? null : b(P, M, "" + B, ve);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case K:
            return B.key === Ye ? O(P, M, B, ve) : null;
          case ut:
            return B.key === Ye ? W(P, M, B, ve) : null;
          case vt:
            return Ye = B._init, le(
              P,
              M,
              Ye(B._payload),
              ve
            );
        }
        if (Zn(B) || Be(B))
          return Ye !== null ? null : ue(P, M, B, ve, null);
        Mc(P, B);
      }
      return null;
    }
    function Ne(P, M, B, ve, Ye) {
      if (typeof ve == "string" && ve !== "" || typeof ve == "number")
        return P = P.get(B) || null, b(M, P, "" + ve, Ye);
      if (typeof ve == "object" && ve !== null) {
        switch (ve.$$typeof) {
          case K:
            return P = P.get(ve.key === null ? B : ve.key) || null, O(M, P, ve, Ye);
          case ut:
            return P = P.get(ve.key === null ? B : ve.key) || null, W(M, P, ve, Ye);
          case vt:
            var Fe = ve._init;
            return Ne(P, M, B, Fe(ve._payload), Ye);
        }
        if (Zn(ve) || Be(ve))
          return P = P.get(B) || null, ue(M, P, ve, Ye, null);
        Mc(M, ve);
      }
      return null;
    }
    function He(P, M, B, ve) {
      for (var Ye = null, Fe = null, qe = M, ct = M = 0, lr = null; qe !== null && ct < B.length; ct++) {
        qe.index > ct ? (lr = qe, qe = null) : lr = qe.sibling;
        var Ht = le(P, qe, B[ct], ve);
        if (Ht === null) {
          qe === null && (qe = lr);
          break;
        }
        n && qe && Ht.alternate === null && r(P, qe), M = d(Ht, M, ct), Fe === null ? Ye = Ht : Fe.sibling = Ht, Fe = Ht, qe = lr;
      }
      if (ct === B.length)
        return l(P, qe), yn && Ea(P, ct), Ye;
      if (qe === null) {
        for (; ct < B.length; ct++)
          qe = se(P, B[ct], ve), qe !== null && (M = d(qe, M, ct), Fe === null ? Ye = qe : Fe.sibling = qe, Fe = qe);
        return yn && Ea(P, ct), Ye;
      }
      for (qe = o(P, qe); ct < B.length; ct++)
        lr = Ne(qe, P, ct, B[ct], ve), lr !== null && (n && lr.alternate !== null && qe.delete(lr.key === null ? ct : lr.key), M = d(lr, M, ct), Fe === null ? Ye = lr : Fe.sibling = lr, Fe = lr);
      return n && qe.forEach(function($l) {
        return r(P, $l);
      }), yn && Ea(P, ct), Ye;
    }
    function $e(P, M, B, ve) {
      var Ye = Be(B);
      if (typeof Ye != "function")
        throw Error(S(150));
      if (B = Ye.call(B), B == null)
        throw Error(S(151));
      for (var Fe = Ye = null, qe = M, ct = M = 0, lr = null, Ht = B.next(); qe !== null && !Ht.done; ct++, Ht = B.next()) {
        qe.index > ct ? (lr = qe, qe = null) : lr = qe.sibling;
        var $l = le(P, qe, Ht.value, ve);
        if ($l === null) {
          qe === null && (qe = lr);
          break;
        }
        n && qe && $l.alternate === null && r(P, qe), M = d($l, M, ct), Fe === null ? Ye = $l : Fe.sibling = $l, Fe = $l, qe = lr;
      }
      if (Ht.done)
        return l(
          P,
          qe
        ), yn && Ea(P, ct), Ye;
      if (qe === null) {
        for (; !Ht.done; ct++, Ht = B.next())
          Ht = se(P, Ht.value, ve), Ht !== null && (M = d(Ht, M, ct), Fe === null ? Ye = Ht : Fe.sibling = Ht, Fe = Ht);
        return yn && Ea(P, ct), Ye;
      }
      for (qe = o(P, qe); !Ht.done; ct++, Ht = B.next())
        Ht = Ne(qe, P, ct, Ht.value, ve), Ht !== null && (n && Ht.alternate !== null && qe.delete(Ht.key === null ? ct : Ht.key), M = d(Ht, M, ct), Fe === null ? Ye = Ht : Fe.sibling = Ht, Fe = Ht);
      return n && qe.forEach(function(Yy) {
        return r(P, Yy);
      }), yn && Ea(P, ct), Ye;
    }
    function Hn(P, M, B, ve) {
      if (typeof B == "object" && B !== null && B.type === Ze && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case K:
            e: {
              for (var Ye = B.key, Fe = M; Fe !== null; ) {
                if (Fe.key === Ye) {
                  if (Ye = B.type, Ye === Ze) {
                    if (Fe.tag === 7) {
                      l(P, Fe.sibling), M = c(Fe, B.props.children), M.return = P, P = M;
                      break e;
                    }
                  } else if (Fe.elementType === Ye || typeof Ye == "object" && Ye !== null && Ye.$$typeof === vt && eh(Ye) === Fe.type) {
                    l(P, Fe.sibling), M = c(Fe, B.props), M.ref = ho(P, Fe, B), M.return = P, P = M;
                    break e;
                  }
                  l(P, Fe);
                  break;
                } else
                  r(P, Fe);
                Fe = Fe.sibling;
              }
              B.type === Ze ? (M = Nu(B.props.children, P.mode, ve, B.key), M.return = P, P = M) : (ve = df(B.type, B.key, B.props, null, P.mode, ve), ve.ref = ho(P, M, B), ve.return = P, P = ve);
            }
            return g(P);
          case ut:
            e: {
              for (Fe = B.key; M !== null; ) {
                if (M.key === Fe)
                  if (M.tag === 4 && M.stateNode.containerInfo === B.containerInfo && M.stateNode.implementation === B.implementation) {
                    l(P, M.sibling), M = c(M, B.children || []), M.return = P, P = M;
                    break e;
                  } else {
                    l(P, M);
                    break;
                  }
                else
                  r(P, M);
                M = M.sibling;
              }
              M = Lu(B, P.mode, ve), M.return = P, P = M;
            }
            return g(P);
          case vt:
            return Fe = B._init, Hn(P, M, Fe(B._payload), ve);
        }
        if (Zn(B))
          return He(P, M, B, ve);
        if (Be(B))
          return $e(P, M, B, ve);
        Mc(P, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" ? (B = "" + B, M !== null && M.tag === 6 ? (l(P, M.sibling), M = c(M, B), M.return = P, P = M) : (l(P, M), M = Hs(B, P.mode, ve), M.return = P, P = M), g(P)) : l(P, M);
    }
    return Hn;
  }
  var mo = th(!0), nh = th(!1), Cs = {}, li = gt(Cs), Rs = gt(Cs), yo = gt(Cs);
  function vu(n) {
    if (n === Cs)
      throw Error(S(174));
    return n;
  }
  function Md(n, r) {
    switch (Xt(yo, r), Xt(Rs, n), Xt(li, Cs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : bn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = bn(r, n);
    }
    Wt(li), Xt(li, r);
  }
  function Al() {
    Wt(li), Wt(Rs), Wt(yo);
  }
  function tt(n) {
    vu(yo.current);
    var r = vu(li.current), l = bn(r, n.type);
    r !== l && (Xt(Rs, n), Xt(li, l));
  }
  function Tt(n) {
    Rs.current === n && (Wt(li), Wt(Rs));
  }
  var rt = gt(0);
  function Dn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Ha = [];
  function Uc() {
    for (var n = 0; n < Ha.length; n++)
      Ha[n]._workInProgressVersionPrimary = null;
    Ha.length = 0;
  }
  var Ac = je.ReactCurrentDispatcher, Ud = je.ReactCurrentBatchConfig, hu = 0, gn = null, ee = null, kt = null, it = !1, Ri = !1, Ta = 0, mu = 0;
  function Sn() {
    throw Error(S(321));
  }
  function yu(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!Ma(n[l], r[l]))
        return !1;
    return !0;
  }
  function zl(n, r, l, o, c, d) {
    if (hu = d, gn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ac.current = n === null || n.memoizedState === null ? _y : Dy, n = l(o, c), Ri) {
      d = 0;
      do {
        if (Ri = !1, Ta = 0, 25 <= d)
          throw Error(S(301));
        d += 1, kt = ee = null, r.updateQueue = null, Ac.current = zd, n = l(o, c);
      } while (Ri);
    }
    if (Ac.current = Xc, r = ee !== null && ee.next !== null, hu = 0, kt = ee = gn = null, it = !1, r)
      throw Error(S(300));
    return n;
  }
  function gu() {
    var n = Ta !== 0;
    return Ta = 0, n;
  }
  function Fa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return kt === null ? gn.memoizedState = kt = n : kt = kt.next = n, kt;
  }
  function la() {
    if (ee === null) {
      var n = gn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ee.next;
    var r = kt === null ? gn.memoizedState : kt.next;
    if (r !== null)
      kt = r, ee = n;
    else {
      if (n === null)
        throw Error(S(310));
      ee = n, n = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, kt === null ? gn.memoizedState = kt = n : kt = kt.next = n;
    }
    return kt;
  }
  function Su(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ts(n) {
    var r = la(), l = r.queue;
    if (l === null)
      throw Error(S(311));
    l.lastRenderedReducer = n;
    var o = ee, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var g = c.next;
        c.next = d.next, d.next = g;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var b = g = null, O = null, W = d;
      do {
        var ue = W.lane;
        if ((hu & ue) === ue)
          O !== null && (O = O.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), o = W.hasEagerState ? W.eagerState : n(o, W.action);
        else {
          var se = {
            lane: ue,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          O === null ? (b = O = se, g = o) : O = O.next = se, gn.lanes |= ue, Ki |= ue;
        }
        W = W.next;
      } while (W !== null && W !== d);
      O === null ? g = o : O.next = b, Ma(o, r.memoizedState) || ($n = !0), r.memoizedState = o, r.baseState = g, r.baseQueue = O, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, gn.lanes |= d, Ki |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function bs(n) {
    var r = la(), l = r.queue;
    if (l === null)
      throw Error(S(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var g = c = c.next;
      do
        d = n(d, g.action), g = g.next;
      while (g !== c);
      Ma(d, r.memoizedState) || ($n = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function zc() {
  }
  function jc(n, r) {
    var l = gn, o = la(), c = r(), d = !Ma(o.memoizedState, c);
    if (d && (o.memoizedState = c, $n = !0), o = o.queue, xs(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || kt !== null && kt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Eu(9, Hc.bind(null, l, o, c, r), void 0, null), On === null)
        throw Error(S(349));
      hu & 30 || Pc(l, r, c);
    }
    return c;
  }
  function Pc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = gn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, gn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Hc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Vc(r) && Bc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      Vc(r) && Bc(n);
    });
  }
  function Vc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ma(n, l);
    } catch {
      return !0;
    }
  }
  function Bc(n) {
    var r = Yi(n, 1);
    r !== null && Or(r, n, 1, -1);
  }
  function $c(n) {
    var r = Fa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Su, lastRenderedState: n }, r.queue = n, n = n.dispatch = Kc.bind(null, gn, n), [r.memoizedState, n];
  }
  function Eu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = gn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, gn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ic() {
    return la().memoizedState;
  }
  function Cu(n, r, l, o) {
    var c = Fa();
    gn.flags |= n, c.memoizedState = Eu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Qi(n, r, l, o) {
    var c = la();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (ee !== null) {
      var g = ee.memoizedState;
      if (d = g.destroy, o !== null && yu(o, g.deps)) {
        c.memoizedState = Eu(r, l, d, o);
        return;
      }
    }
    gn.flags |= n, c.memoizedState = Eu(1 | r, l, d, o);
  }
  function Yc(n, r) {
    return Cu(8390656, 8, n, r);
  }
  function xs(n, r) {
    return Qi(2048, 8, n, r);
  }
  function Wc(n, r) {
    return Qi(4, 2, n, r);
  }
  function Qc(n, r) {
    return Qi(4, 4, n, r);
  }
  function Ad(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function go(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Qi(4, 4, Ad.bind(null, r, n), l);
  }
  function qc() {
  }
  function So(n, r) {
    var l = la();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && yu(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function jl(n, r) {
    var l = la();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && yu(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function ua(n, r, l) {
    return hu & 21 ? (Ma(l, r) || (l = Xu(), gn.lanes |= l, Ki |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, $n = !0), n.memoizedState = l);
  }
  function wy(n, r) {
    var l = Vt;
    Vt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Ud.transition;
    Ud.transition = {};
    try {
      n(!1), r();
    } finally {
      Vt = l, Ud.transition = o;
    }
  }
  function cn() {
    return la().memoizedState;
  }
  function Gc(n, r, l) {
    var o = In(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Eo(n))
      ws(r, l);
    else if (l = Gv(n, r, l, o), l !== null) {
      var c = Dr();
      Or(l, n, o, c), rh(l, r, o);
    }
  }
  function Kc(n, r, l) {
    var o = In(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Eo(n))
      ws(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var g = r.lastRenderedState, b = d(g, l);
          if (c.hasEagerState = !0, c.eagerState = b, Ma(b, g)) {
            var O = r.interleaved;
            O === null ? (c.next = c, Od(r)) : (c.next = O.next, O.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Gv(n, r, c, o), l !== null && (c = Dr(), Or(l, n, o, c), rh(l, r, o));
    }
  }
  function Eo(n) {
    var r = n.alternate;
    return n === gn || r !== null && r === gn;
  }
  function ws(n, r) {
    Ri = it = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function rh(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, yi(n, l);
    }
  }
  var Xc = { readContext: Pn, useCallback: Sn, useContext: Sn, useEffect: Sn, useImperativeHandle: Sn, useInsertionEffect: Sn, useLayoutEffect: Sn, useMemo: Sn, useReducer: Sn, useRef: Sn, useState: Sn, useDebugValue: Sn, useDeferredValue: Sn, useTransition: Sn, useMutableSource: Sn, useSyncExternalStore: Sn, useId: Sn, unstable_isNewReconciler: !1 }, _y = { readContext: Pn, useCallback: function(n, r) {
    return Fa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Pn, useEffect: Yc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Cu(
      4194308,
      4,
      Ad.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Cu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Cu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Fa();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Fa();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Gc.bind(null, gn, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Fa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: $c, useDebugValue: qc, useDeferredValue: function(n) {
    return Fa().memoizedState = n;
  }, useTransition: function() {
    var n = $c(!1), r = n[0];
    return n = wy.bind(null, n[1]), Fa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = gn, c = Fa();
    if (yn) {
      if (l === void 0)
        throw Error(S(407));
      l = l();
    } else {
      if (l = r(), On === null)
        throw Error(S(349));
      hu & 30 || Pc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Yc(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Eu(9, Hc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Fa(), r = On.identifierPrefix;
    if (yn) {
      var l = Ii, o = cr;
      l = (o & ~(1 << 32 - Ur(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ta++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = mu++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Dy = {
    readContext: Pn,
    useCallback: So,
    useContext: Pn,
    useEffect: xs,
    useImperativeHandle: go,
    useInsertionEffect: Wc,
    useLayoutEffect: Qc,
    useMemo: jl,
    useReducer: Ts,
    useRef: Ic,
    useState: function() {
      return Ts(Su);
    },
    useDebugValue: qc,
    useDeferredValue: function(n) {
      var r = la();
      return ua(r, ee.memoizedState, n);
    },
    useTransition: function() {
      var n = Ts(Su)[0], r = la().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: jc,
    useId: cn,
    unstable_isNewReconciler: !1
  }, zd = { readContext: Pn, useCallback: So, useContext: Pn, useEffect: xs, useImperativeHandle: go, useInsertionEffect: Wc, useLayoutEffect: Qc, useMemo: jl, useReducer: bs, useRef: Ic, useState: function() {
    return bs(Su);
  }, useDebugValue: qc, useDeferredValue: function(n) {
    var r = la();
    return ee === null ? r.memoizedState = n : ua(r, ee.memoizedState, n);
  }, useTransition: function() {
    var n = bs(Su)[0], r = la().memoizedState;
    return [n, r];
  }, useMutableSource: zc, useSyncExternalStore: jc, useId: cn, unstable_isNewReconciler: !1 };
  function Co(n, r) {
    try {
      var l = "", o = r;
      do
        l += ze(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function _s(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Jc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Oy = typeof WeakMap == "function" ? WeakMap : Map;
  function ah(n, r, l) {
    l = Wi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      lf || (lf = !0, wu = o), Jc(n, r);
    }, l;
  }
  function Ds(n, r, l) {
    l = Wi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Jc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Jc(n, r), typeof o != "function" && (xi === null ? xi = /* @__PURE__ */ new Set([this]) : xi.add(this));
      var g = r.stack;
      this.componentDidCatch(r.value, { componentStack: g !== null ? g : "" });
    }), l;
  }
  function ih(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Oy();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = zy.bind(null, n, r, l), r.then(n, n));
  }
  function jd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Pd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Wi(-1, 1), r.tag = 2, Ml(l, r, 1))), l.lanes |= 1), n);
  }
  var ky = je.ReactCurrentOwner, $n = !1;
  function qn(n, r, l, o) {
    r.child = n === null ? nh(r, null, l, o) : mo(r, n.child, l, o);
  }
  function Pl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Re(r, c), o = zl(n, r, l, o, d, c), l = gu(), n !== null && !$n ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, dr(n, r, c)) : (yn && l && bc(r), r.flags |= 1, qn(n, r, o, c), r.child);
  }
  function Zc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !rp(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, oa(n, r, d, o, c)) : (n = df(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var g = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ss, l(g, o) && n.ref === r.ref)
        return dr(n, r, c);
    }
    return r.flags |= 1, n = Bl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function oa(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ss(d, o) && n.ref === r.ref)
        if ($n = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && ($n = !0);
        else
          return r.lanes = n.lanes, dr(n, r, c);
    }
    return Ro(n, r, l, o, c);
  }
  function Ru(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Xt(Do, ba), ba |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Xt(Do, ba), ba |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Xt(Do, ba), ba |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Xt(Do, ba), ba |= o;
    return qn(n, r, c, l), r.child;
  }
  function St(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Ro(n, r, l, o, c) {
    var d = Cn(l) ? ta : st.current;
    return d = Aa(r, d), Re(r, c), l = zl(n, r, l, o, d, c), o = gu(), n !== null && !$n ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, dr(n, r, c)) : (yn && o && bc(r), r.flags |= 1, qn(n, r, l, c), r.child);
  }
  function Hd(n, r, l, o, c) {
    if (Cn(l)) {
      var d = !0;
      Tc(r);
    } else
      d = !1;
    if (Re(r, c), r.stateNode === null)
      xr(n, r), Jv(r, l, o), Lc(r, l, o, c), o = !0;
    else if (n === null) {
      var g = r.stateNode, b = r.memoizedProps;
      g.props = b;
      var O = g.context, W = l.contextType;
      typeof W == "object" && W !== null ? W = Pn(W) : (W = Cn(l) ? ta : st.current, W = Aa(r, W));
      var ue = l.getDerivedStateFromProps, se = typeof ue == "function" || typeof g.getSnapshotBeforeUpdate == "function";
      se || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (b !== o || O !== W) && Zv(r, g, o, W), Ll = !1;
      var le = r.memoizedState;
      g.state = le, Ul(r, o, g, c), O = r.memoizedState, b !== o || le !== O || Mn.current || Ll ? (typeof ue == "function" && (Ld(r, l, ue, o), O = r.memoizedState), (b = Ll || Xv(r, l, b, o, le, O, W)) ? (se || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = O), g.props = o, g.state = O, g.context = W, o = b) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      g = r.stateNode, Qn(n, r), b = r.memoizedProps, W = r.type === r.elementType ? b : Ra(r.type, b), g.props = W, se = r.pendingProps, le = g.context, O = l.contextType, typeof O == "object" && O !== null ? O = Pn(O) : (O = Cn(l) ? ta : st.current, O = Aa(r, O));
      var Ne = l.getDerivedStateFromProps;
      (ue = typeof Ne == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (b !== se || le !== O) && Zv(r, g, o, O), Ll = !1, le = r.memoizedState, g.state = le, Ul(r, o, g, c);
      var He = r.memoizedState;
      b !== se || le !== He || Mn.current || Ll ? (typeof Ne == "function" && (Ld(r, l, Ne, o), He = r.memoizedState), (W = Ll || Xv(r, l, W, o, le, He, O) || !1) ? (ue || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(o, He, O), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(o, He, O)), typeof g.componentDidUpdate == "function" && (r.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || b === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = He), g.props = o, g.state = He, g.context = O, o = W) : (typeof g.componentDidUpdate != "function" || b === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return lh(n, r, l, o, d, c);
  }
  function lh(n, r, l, o, c, d) {
    St(n, r);
    var g = (r.flags & 128) !== 0;
    if (!o && !g)
      return c && Yv(r, l, !1), dr(n, r, d);
    o = r.stateNode, ky.current = r;
    var b = g && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && g ? (r.child = mo(r, n.child, null, d), r.child = mo(r, null, b, d)) : qn(n, r, b, d), r.memoizedState = o.state, c && Yv(r, l, !0), r.child;
  }
  function uh(n) {
    var r = n.stateNode;
    r.pendingContext ? Dl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Dl(n, r.context, !1), Md(n, r.containerInfo);
  }
  function ef(n, r, l, o, c) {
    return _n(), wd(c), r.flags |= 256, qn(n, r, l, o), r.child;
  }
  var Tu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Vd(n, r, l) {
    var o = r.pendingProps, c = rt.current, d = !1, g = (r.flags & 128) !== 0, b;
    if ((b = g) || (b = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), b ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Xt(rt, c & 1), n === null)
      return wc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (g = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, g = { mode: "hidden", children: g }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = g) : d = Ps(g, o, 0, null), n = Nu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Fd(l), r.memoizedState = Tu, n) : Bd(r, g));
    if (c = n.memoizedState, c !== null && (b = c.dehydrated, b !== null))
      return Ny(n, r, g, o, b, c, l);
    if (d) {
      d = o.fallback, g = r.mode, c = n.child, b = c.sibling;
      var O = { mode: "hidden", children: o.children };
      return !(g & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = O, r.deletions = null) : (o = Bl(c, O), o.subtreeFlags = c.subtreeFlags & 14680064), b !== null ? d = Bl(b, d) : (d = Nu(d, g, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, g = n.child.memoizedState, g = g === null ? Fd(l) : { baseLanes: g.baseLanes | l, cachePool: null, transitions: g.transitions }, d.memoizedState = g, d.childLanes = n.childLanes & ~l, r.memoizedState = Tu, o;
    }
    return d = n.child, n = d.sibling, o = Bl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Bd(n, r) {
    return r = Ps({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function To(n, r, l, o) {
    return o !== null && wd(o), mo(r, n.child, null, l), n = Bd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Ny(n, r, l, o, c, d, g) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = _s(Error(S(422))), To(n, r, g, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Ps({ mode: "visible", children: o.children }, c, 0, null), d = Nu(d, c, g, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && mo(r, n.child, null, g), r.child.memoizedState = Fd(g), r.memoizedState = Tu, d);
    if (!(r.mode & 1))
      return To(n, r, g, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var b = o.dgst;
      return o = b, d = Error(S(419)), o = _s(d, o, void 0), To(n, r, g, o);
    }
    if (b = (g & n.childLanes) !== 0, $n || b) {
      if (o = On, o !== null) {
        switch (g & -g) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | g) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Yi(n, c), Or(o, n, c, -1));
      }
      return ep(), o = _s(Error(S(421))), To(n, r, g, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = jy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ia = ii(c.nextSibling), Ca = r, yn = !0, Pa = null, n !== null && (aa[br++] = cr, aa[br++] = Ii, aa[br++] = ja, cr = n.id, Ii = n.overflow, ja = r), r = Bd(r, o.children), r.flags |= 4096, r);
  }
  function $d(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), rr(n.return, r, l);
  }
  function tf(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Id(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (qn(n, r, o.children, l), o = rt.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && $d(n, l, r);
            else if (n.tag === 19)
              $d(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Xt(rt, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Dn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), tf(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Dn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          tf(r, !0, l, null, d);
          break;
        case "together":
          tf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function xr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function dr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Ki |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(S(153));
    if (r.child !== null) {
      for (n = r.child, l = Bl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Bl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function qi(n, r, l) {
    switch (r.tag) {
      case 3:
        uh(r), _n();
        break;
      case 5:
        tt(r);
        break;
      case 1:
        Cn(r.type) && Tc(r);
        break;
      case 4:
        Md(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Xt(Ci, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Xt(rt, rt.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Vd(n, r, l) : (Xt(rt, rt.current & 1), n = dr(n, r, l), n !== null ? n.sibling : null);
        Xt(rt, rt.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Id(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Xt(rt, rt.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ru(n, r, l);
    }
    return dr(n, r, l);
  }
  var Os, bu, Va, Gn;
  Os = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, bu = function() {
  }, Va = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, vu(li.current);
      var d = null;
      switch (l) {
        case "input":
          c = Tn(n, c), o = Tn(n, o), d = [];
          break;
        case "select":
          c = R({}, c, { value: void 0 }), o = R({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Gr(n, c), o = Gr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Rc);
      }
      jn(l, o);
      var g;
      l = null;
      for (W in c)
        if (!o.hasOwnProperty(W) && c.hasOwnProperty(W) && c[W] != null)
          if (W === "style") {
            var b = c[W];
            for (g in b)
              b.hasOwnProperty(g) && (l || (l = {}), l[g] = "");
          } else
            W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (k.hasOwnProperty(W) ? d || (d = []) : (d = d || []).push(W, null));
      for (W in o) {
        var O = o[W];
        if (b = c != null ? c[W] : void 0, o.hasOwnProperty(W) && O !== b && (O != null || b != null))
          if (W === "style")
            if (b) {
              for (g in b)
                !b.hasOwnProperty(g) || O && O.hasOwnProperty(g) || (l || (l = {}), l[g] = "");
              for (g in O)
                O.hasOwnProperty(g) && b[g] !== O[g] && (l || (l = {}), l[g] = O[g]);
            } else
              l || (d || (d = []), d.push(
                W,
                l
              )), l = O;
          else
            W === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, b = b ? b.__html : void 0, O != null && b !== O && (d = d || []).push(W, O)) : W === "children" ? typeof O != "string" && typeof O != "number" || (d = d || []).push(W, "" + O) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (k.hasOwnProperty(W) ? (O != null && W === "onScroll" && sn("scroll", n), d || b === O || (d = [])) : (d = d || []).push(W, O));
      }
      l && (d = d || []).push("style", l);
      var W = d;
      (r.updateQueue = W) && (r.flags |= 4);
    }
  }, Gn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ks(n, r) {
    if (!yn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function wr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Ly(n, r, l) {
    var o = r.pendingProps;
    switch (bd(r), r.tag) {
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
        return wr(r), null;
      case 1:
        return Cn(r.type) && za(), wr(r), null;
      case 3:
        return o = r.stateNode, Al(), Wt(Mn), Wt(st), Uc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (_c(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Pa !== null && (js(Pa), Pa = null))), bu(n, r), wr(r), null;
      case 5:
        Tt(r);
        var c = vu(yo.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Va(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(S(166));
            return wr(r), null;
          }
          if (n = vu(li.current), _c(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Si] = r, o[fu] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                sn("cancel", o), sn("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                sn("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ps.length; c++)
                  sn(ps[c], o);
                break;
              case "source":
                sn("error", o);
                break;
              case "img":
              case "image":
              case "link":
                sn(
                  "error",
                  o
                ), sn("load", o);
                break;
              case "details":
                sn("toggle", o);
                break;
              case "input":
                Nn(o, d), sn("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, sn("invalid", o);
                break;
              case "textarea":
                Rr(o, d), sn("invalid", o);
            }
            jn(l, d), c = null;
            for (var g in d)
              if (d.hasOwnProperty(g)) {
                var b = d[g];
                g === "children" ? typeof b == "string" ? o.textContent !== b && (d.suppressHydrationWarning !== !0 && Cc(o.textContent, b, n), c = ["children", b]) : typeof b == "number" && o.textContent !== "" + b && (d.suppressHydrationWarning !== !0 && Cc(
                  o.textContent,
                  b,
                  n
                ), c = ["children", "" + b]) : k.hasOwnProperty(g) && b != null && g === "onScroll" && sn("scroll", o);
              }
            switch (l) {
              case "input":
                It(o), Qr(o, d, !0);
                break;
              case "textarea":
                It(o), or(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Rc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            g = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Kr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = g.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = g.createElement(l, { is: o.is }) : (n = g.createElement(l), l === "select" && (g = n, o.multiple ? g.multiple = !0 : o.size && (g.size = o.size))) : n = g.createElementNS(n, l), n[Si] = r, n[fu] = o, Os(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (g = xn(l, o), l) {
                case "dialog":
                  sn("cancel", n), sn("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  sn("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ps.length; c++)
                    sn(ps[c], n);
                  c = o;
                  break;
                case "source":
                  sn("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  sn(
                    "error",
                    n
                  ), sn("load", n), c = o;
                  break;
                case "details":
                  sn("toggle", n), c = o;
                  break;
                case "input":
                  Nn(n, o), c = Tn(n, o), sn("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = R({}, o, { value: void 0 }), sn("invalid", n);
                  break;
                case "textarea":
                  Rr(n, o), c = Gr(n, o), sn("invalid", n);
                  break;
                default:
                  c = o;
              }
              jn(l, c), b = c;
              for (d in b)
                if (b.hasOwnProperty(d)) {
                  var O = b[d];
                  d === "style" ? Yt(n, O) : d === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, O != null && fi(n, O)) : d === "children" ? typeof O == "string" ? (l !== "textarea" || O !== "") && ha(n, O) : typeof O == "number" && ha(n, "" + O) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (k.hasOwnProperty(d) ? O != null && d === "onScroll" && sn("scroll", n) : O != null && be(n, d, O, g));
                }
              switch (l) {
                case "input":
                  It(n), Qr(n, o, !1);
                  break;
                case "textarea":
                  It(n), or(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + De(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Cr(n, !!o.multiple, d, !1) : o.defaultValue != null && Cr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Rc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return wr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Gn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(S(166));
          if (l = vu(yo.current), vu(li.current), _c(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Si] = r, (d = o.nodeValue !== l) && (n = Ca, n !== null))
              switch (n.tag) {
                case 3:
                  Cc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Cc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Si] = r, r.stateNode = o;
        }
        return wr(r), null;
      case 13:
        if (Wt(rt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (yn && ia !== null && r.mode & 1 && !(r.flags & 128))
            qv(), _n(), r.flags |= 98560, d = !1;
          else if (d = _c(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(S(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(S(317));
              d[Si] = r;
            } else
              _n(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            wr(r), d = !1;
          } else
            Pa !== null && (js(Pa), Pa = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || rt.current & 1 ? Xn === 0 && (Xn = 3) : ep())), r.updateQueue !== null && (r.flags |= 4), wr(r), null);
      case 4:
        return Al(), bu(n, r), n === null && fo(r.stateNode.containerInfo), wr(r), null;
      case 10:
        return Nl(r.type._context), wr(r), null;
      case 17:
        return Cn(r.type) && za(), wr(r), null;
      case 19:
        if (Wt(rt), d = r.memoizedState, d === null)
          return wr(r), null;
        if (o = (r.flags & 128) !== 0, g = d.rendering, g === null)
          if (o)
            ks(d, !1);
          else {
            if (Xn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (g = Dn(n), g !== null) {
                  for (r.flags |= 128, ks(d, !1), o = g.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, g = d.alternate, g === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = g.childLanes, d.lanes = g.lanes, d.child = g.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = g.memoizedProps, d.memoizedState = g.memoizedState, d.updateQueue = g.updateQueue, d.type = g.type, n = g.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Xt(rt, rt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && zt() > ko && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Dn(g), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ks(d, !0), d.tail === null && d.tailMode === "hidden" && !g.alternate && !yn)
                return wr(r), null;
            } else
              2 * zt() - d.renderingStartTime > ko && l !== 1073741824 && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          d.isBackwards ? (g.sibling = r.child, r.child = g) : (l = d.last, l !== null ? l.sibling = g : r.child = g, d.last = g);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = zt(), r.sibling = null, l = rt.current, Xt(rt, o ? l & 1 | 2 : l & 1), r) : (wr(r), null);
      case 22:
      case 23:
        return Zd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ba & 1073741824 && (wr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : wr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(S(156, r.tag));
  }
  function Yd(n, r) {
    switch (bd(r), r.tag) {
      case 1:
        return Cn(r.type) && za(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Al(), Wt(Mn), Wt(st), Uc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Tt(r), null;
      case 13:
        if (Wt(rt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(S(340));
          _n();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Wt(rt), null;
      case 4:
        return Al(), null;
      case 10:
        return Nl(r.type._context), null;
      case 22:
      case 23:
        return Zd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ns = !1, Kn = !1, oh = typeof WeakSet == "function" ? WeakSet : Set, Pe = null;
  function bo(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          An(n, r, o);
        }
      else
        l.current = null;
  }
  function Ls(n, r, l) {
    try {
      l();
    } catch (o) {
      An(n, r, o);
    }
  }
  var sh = !1;
  function ch(n, r) {
    if (md = La, n = mc(), Fi(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var g = 0, b = -1, O = -1, W = 0, ue = 0, se = n, le = null;
            t:
              for (; ; ) {
                for (var Ne; se !== l || c !== 0 && se.nodeType !== 3 || (b = g + c), se !== d || o !== 0 && se.nodeType !== 3 || (O = g + o), se.nodeType === 3 && (g += se.nodeValue.length), (Ne = se.firstChild) !== null; )
                  le = se, se = Ne;
                for (; ; ) {
                  if (se === n)
                    break t;
                  if (le === l && ++W === c && (b = g), le === d && ++ue === o && (O = g), (Ne = se.nextSibling) !== null)
                    break;
                  se = le, le = se.parentNode;
                }
                se = Ne;
              }
            l = b === -1 || O === -1 ? null : { start: b, end: O };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (su = { focusedElem: n, selectionRange: l }, La = !1, Pe = r; Pe !== null; )
      if (r = Pe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Pe = n;
      else
        for (; Pe !== null; ) {
          r = Pe;
          try {
            var He = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (He !== null) {
                    var $e = He.memoizedProps, Hn = He.memoizedState, P = r.stateNode, M = P.getSnapshotBeforeUpdate(r.elementType === r.type ? $e : Ra(r.type, $e), Hn);
                    P.__reactInternalSnapshotBeforeUpdate = M;
                  }
                  break;
                case 3:
                  var B = r.stateNode.containerInfo;
                  B.nodeType === 1 ? B.textContent = "" : B.nodeType === 9 && B.documentElement && B.removeChild(B.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(S(163));
              }
          } catch (ve) {
            An(r, r.return, ve);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Pe = n;
            break;
          }
          Pe = r.return;
        }
    return He = sh, sh = !1, He;
  }
  function Ms(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ls(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Us(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Wd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Qd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Qd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Si], delete r[fu], delete r[Sd], delete r[xy], delete r[Ed])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function fh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function nf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || fh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function xo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Rc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (xo(n, r, l), n = n.sibling; n !== null; )
        xo(n, r, l), n = n.sibling;
  }
  function Ti(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Ti(n, r, l), n = n.sibling; n !== null; )
        Ti(n, r, l), n = n.sibling;
  }
  var Rn = null, ar = !1;
  function Ba(n, r, l) {
    for (l = l.child; l !== null; )
      wo(n, r, l), l = l.sibling;
  }
  function wo(n, r, l) {
    if (Xr && typeof Xr.onCommitFiberUnmount == "function")
      try {
        Xr.onCommitFiberUnmount(pl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Kn || bo(l, r);
      case 6:
        var o = Rn, c = ar;
        Rn = null, Ba(n, r, l), Rn = o, ar = c, Rn !== null && (ar ? (n = Rn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Rn.removeChild(l.stateNode));
        break;
      case 18:
        Rn !== null && (ar ? (n = Rn, l = l.stateNode, n.nodeType === 8 ? xl(n.parentNode, l) : n.nodeType === 1 && xl(n, l), El(n)) : xl(Rn, l.stateNode));
        break;
      case 4:
        o = Rn, c = ar, Rn = l.stateNode.containerInfo, ar = !0, Ba(n, r, l), Rn = o, ar = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Kn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, g = d.destroy;
            d = d.tag, g !== void 0 && (d & 2 || d & 4) && Ls(l, r, g), c = c.next;
          } while (c !== o);
        }
        Ba(n, r, l);
        break;
      case 1:
        if (!Kn && (bo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (b) {
            An(l, r, b);
          }
        Ba(n, r, l);
        break;
      case 21:
        Ba(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Kn = (o = Kn) || l.memoizedState !== null, Ba(n, r, l), Kn = o) : Ba(n, r, l);
        break;
      default:
        Ba(n, r, l);
    }
  }
  function Gi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new oh()), r.forEach(function(o) {
        var c = Py.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ui(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, g = r, b = g;
          e:
            for (; b !== null; ) {
              switch (b.tag) {
                case 5:
                  Rn = b.stateNode, ar = !1;
                  break e;
                case 3:
                  Rn = b.stateNode.containerInfo, ar = !0;
                  break e;
                case 4:
                  Rn = b.stateNode.containerInfo, ar = !0;
                  break e;
              }
              b = b.return;
            }
          if (Rn === null)
            throw Error(S(160));
          wo(d, g, c), Rn = null, ar = !1;
          var O = c.alternate;
          O !== null && (O.return = null), c.return = null;
        } catch (W) {
          An(c, r, W);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        dh(r, n), r = r.sibling;
  }
  function dh(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ui(r, n), bi(n), o & 4) {
          try {
            Ms(3, n, n.return), Us(3, n);
          } catch ($e) {
            An(n, n.return, $e);
          }
          try {
            Ms(5, n, n.return);
          } catch ($e) {
            An(n, n.return, $e);
          }
        }
        break;
      case 1:
        ui(r, n), bi(n), o & 512 && l !== null && bo(l, l.return);
        break;
      case 5:
        if (ui(r, n), bi(n), o & 512 && l !== null && bo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ha(c, "");
          } catch ($e) {
            An(n, n.return, $e);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, g = l !== null ? l.memoizedProps : d, b = n.type, O = n.updateQueue;
          if (n.updateQueue = null, O !== null)
            try {
              b === "input" && d.type === "radio" && d.name != null && Wn(c, d), xn(b, g);
              var W = xn(b, d);
              for (g = 0; g < O.length; g += 2) {
                var ue = O[g], se = O[g + 1];
                ue === "style" ? Yt(c, se) : ue === "dangerouslySetInnerHTML" ? fi(c, se) : ue === "children" ? ha(c, se) : be(c, ue, se, W);
              }
              switch (b) {
                case "input":
                  zn(c, d);
                  break;
                case "textarea":
                  va(c, d);
                  break;
                case "select":
                  var le = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var Ne = d.value;
                  Ne != null ? Cr(c, !!d.multiple, Ne, !1) : le !== !!d.multiple && (d.defaultValue != null ? Cr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Cr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[fu] = d;
            } catch ($e) {
              An(n, n.return, $e);
            }
        }
        break;
      case 6:
        if (ui(r, n), bi(n), o & 4) {
          if (n.stateNode === null)
            throw Error(S(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch ($e) {
            An(n, n.return, $e);
          }
        }
        break;
      case 3:
        if (ui(r, n), bi(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            El(r.containerInfo);
          } catch ($e) {
            An(n, n.return, $e);
          }
        break;
      case 4:
        ui(r, n), bi(n);
        break;
      case 13:
        ui(r, n), bi(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Kd = zt())), o & 4 && Gi(n);
        break;
      case 22:
        if (ue = l !== null && l.memoizedState !== null, n.mode & 1 ? (Kn = (W = Kn) || ue, ui(r, n), Kn = W) : ui(r, n), bi(n), o & 8192) {
          if (W = n.memoizedState !== null, (n.stateNode.isHidden = W) && !ue && n.mode & 1)
            for (Pe = n, ue = n.child; ue !== null; ) {
              for (se = Pe = ue; Pe !== null; ) {
                switch (le = Pe, Ne = le.child, le.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ms(4, le, le.return);
                    break;
                  case 1:
                    bo(le, le.return);
                    var He = le.stateNode;
                    if (typeof He.componentWillUnmount == "function") {
                      o = le, l = le.return;
                      try {
                        r = o, He.props = r.memoizedProps, He.state = r.memoizedState, He.componentWillUnmount();
                      } catch ($e) {
                        An(o, l, $e);
                      }
                    }
                    break;
                  case 5:
                    bo(le, le.return);
                    break;
                  case 22:
                    if (le.memoizedState !== null) {
                      qd(se);
                      continue;
                    }
                }
                Ne !== null ? (Ne.return = le, Pe = Ne) : qd(se);
              }
              ue = ue.sibling;
            }
          e:
            for (ue = null, se = n; ; ) {
              if (se.tag === 5) {
                if (ue === null) {
                  ue = se;
                  try {
                    c = se.stateNode, W ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (b = se.stateNode, O = se.memoizedProps.style, g = O != null && O.hasOwnProperty("display") ? O.display : null, b.style.display = Et("display", g));
                  } catch ($e) {
                    An(n, n.return, $e);
                  }
                }
              } else if (se.tag === 6) {
                if (ue === null)
                  try {
                    se.stateNode.nodeValue = W ? "" : se.memoizedProps;
                  } catch ($e) {
                    An(n, n.return, $e);
                  }
              } else if ((se.tag !== 22 && se.tag !== 23 || se.memoizedState === null || se === n) && se.child !== null) {
                se.child.return = se, se = se.child;
                continue;
              }
              if (se === n)
                break e;
              for (; se.sibling === null; ) {
                if (se.return === null || se.return === n)
                  break e;
                ue === se && (ue = null), se = se.return;
              }
              ue === se && (ue = null), se.sibling.return = se.return, se = se.sibling;
            }
        }
        break;
      case 19:
        ui(r, n), bi(n), o & 4 && Gi(n);
        break;
      case 21:
        break;
      default:
        ui(
          r,
          n
        ), bi(n);
    }
  }
  function bi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (fh(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(S(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ha(c, ""), o.flags &= -33);
            var d = nf(n);
            Ti(n, d, c);
            break;
          case 3:
          case 4:
            var g = o.stateNode.containerInfo, b = nf(n);
            xo(n, b, g);
            break;
          default:
            throw Error(S(161));
        }
      } catch (O) {
        An(n, n.return, O);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ph(n, r, l) {
    Pe = n, _o(n);
  }
  function _o(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Pe !== null; ) {
      var c = Pe, d = c.child;
      if (c.tag === 22 && o) {
        var g = c.memoizedState !== null || Ns;
        if (!g) {
          var b = c.alternate, O = b !== null && b.memoizedState !== null || Kn;
          b = Ns;
          var W = Kn;
          if (Ns = g, (Kn = O) && !W)
            for (Pe = c; Pe !== null; )
              g = Pe, O = g.child, g.tag === 22 && g.memoizedState !== null ? hh(c) : O !== null ? (O.return = g, Pe = O) : hh(c);
          for (; d !== null; )
            Pe = d, _o(d), d = d.sibling;
          Pe = c, Ns = b, Kn = W;
        }
        vh(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, Pe = d) : vh(n);
    }
  }
  function vh(n) {
    for (; Pe !== null; ) {
      var r = Pe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Kn || Us(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Kn)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Ra(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && pu(r, d, o);
                break;
              case 3:
                var g = r.updateQueue;
                if (g !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  pu(r, g, l);
                }
                break;
              case 5:
                var b = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = b;
                  var O = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      O.autoFocus && l.focus();
                      break;
                    case "img":
                      O.src && (l.src = O.src);
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
                if (r.memoizedState === null) {
                  var W = r.alternate;
                  if (W !== null) {
                    var ue = W.memoizedState;
                    if (ue !== null) {
                      var se = ue.dehydrated;
                      se !== null && El(se);
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
                throw Error(S(163));
            }
          Kn || r.flags & 512 && Wd(r);
        } catch (le) {
          An(r, r.return, le);
        }
      }
      if (r === n) {
        Pe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Pe = l;
        break;
      }
      Pe = r.return;
    }
  }
  function qd(n) {
    for (; Pe !== null; ) {
      var r = Pe;
      if (r === n) {
        Pe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Pe = l;
        break;
      }
      Pe = r.return;
    }
  }
  function hh(n) {
    for (; Pe !== null; ) {
      var r = Pe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Us(4, r);
            } catch (O) {
              An(r, l, O);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (O) {
                An(r, c, O);
              }
            }
            var d = r.return;
            try {
              Wd(r);
            } catch (O) {
              An(r, d, O);
            }
            break;
          case 5:
            var g = r.return;
            try {
              Wd(r);
            } catch (O) {
              An(r, g, O);
            }
        }
      } catch (O) {
        An(r, r.return, O);
      }
      if (r === n) {
        Pe = null;
        break;
      }
      var b = r.sibling;
      if (b !== null) {
        b.return = r.return, Pe = b;
        break;
      }
      Pe = r.return;
    }
  }
  var rf = Math.ceil, As = je.ReactCurrentDispatcher, Gd = je.ReactCurrentOwner, _r = je.ReactCurrentBatchConfig, xt = 0, On = null, Un = null, ir = 0, ba = 0, Do = gt(0), Xn = 0, zs = null, Ki = 0, af = 0, Oo = 0, xu = null, jr = null, Kd = 0, ko = 1 / 0, Xi = null, lf = !1, wu = null, xi = null, Hl = !1, Fl = null, uf = 0, No = 0, of = null, _u = -1, Du = 0;
  function Dr() {
    return xt & 6 ? zt() : _u !== -1 ? _u : _u = zt();
  }
  function In(n) {
    return n.mode & 1 ? xt & 2 && ir !== 0 ? ir & -ir : Dc.transition !== null ? (Du === 0 && (Du = Xu()), Du) : (n = Vt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : as(n.type)), n) : 1;
  }
  function Or(n, r, l, o) {
    if (50 < No)
      throw No = 0, of = null, Error(S(185));
    Ai(n, l, o), (!(xt & 2) || n !== On) && (n === On && (!(xt & 2) && (af |= l), Xn === 4 && $a(n, ir)), kr(n, o), l === 1 && xt === 0 && !(r.mode & 1) && (ko = zt() + 500, nr && na()));
  }
  function kr(n, r) {
    var l = n.callbackNode;
    ml(n, r);
    var o = Ar(n, n === On ? ir : 0);
    if (o === 0)
      l !== null && sr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && sr(l), r === 1)
        n.tag === 0 ? Rd(mh.bind(null, n)) : Cd(mh.bind(null, n)), gd(function() {
          !(xt & 6) && na();
        }), l = null;
      else {
        switch (Zu(o)) {
          case 1:
            l = Za;
            break;
          case 4:
            l = Ct;
            break;
          case 16:
            l = mi;
            break;
          case 536870912:
            l = Gu;
            break;
          default:
            l = mi;
        }
        l = np(l, Lo.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Lo(n, r) {
    if (_u = -1, Du = 0, xt & 6)
      throw Error(S(327));
    var l = n.callbackNode;
    if (Uo() && n.callbackNode !== l)
      return null;
    var o = Ar(n, n === On ? ir : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = cf(n, o);
    else {
      r = o;
      var c = xt;
      xt |= 2;
      var d = sf();
      (On !== n || ir !== r) && (Xi = null, ko = zt() + 500, Ou(n, r));
      do
        try {
          Uy();
          break;
        } catch (b) {
          yh(n, b);
        }
      while (1);
      Dd(), As.current = d, xt = c, Un !== null ? r = 0 : (On = null, ir = 0, r = Xn);
    }
    if (r !== 0) {
      if (r === 2 && (c = yl(n), c !== 0 && (o = c, r = Xd(n, c))), r === 1)
        throw l = zs, Ou(n, 0), $a(n, o), kr(n, zt()), l;
      if (r === 6)
        $a(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Jd(c) && (r = cf(n, o), r === 2 && (d = yl(n), d !== 0 && (o = d, r = Xd(n, d))), r === 1))
          throw l = zs, Ou(n, 0), $a(n, o), kr(n, zt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(S(345));
          case 2:
            ku(n, jr, Xi);
            break;
          case 3:
            if ($a(n, o), (o & 130023424) === o && (r = Kd + 500 - zt(), 10 < r)) {
              if (Ar(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Dr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = cu(ku.bind(null, n, jr, Xi), r);
              break;
            }
            ku(n, jr, Xi);
            break;
          case 4:
            if ($a(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var g = 31 - Ur(o);
              d = 1 << g, g = r[g], g > c && (c = g), o &= ~d;
            }
            if (o = c, o = zt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * rf(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = cu(ku.bind(null, n, jr, Xi), o);
              break;
            }
            ku(n, jr, Xi);
            break;
          case 5:
            ku(n, jr, Xi);
            break;
          default:
            throw Error(S(329));
        }
      }
    }
    return kr(n, zt()), n.callbackNode === l ? Lo.bind(null, n) : null;
  }
  function Xd(n, r) {
    var l = xu;
    return n.current.memoizedState.isDehydrated && (Ou(n, r).flags |= 256), n = cf(n, r), n !== 2 && (r = jr, jr = l, r !== null && js(r)), n;
  }
  function js(n) {
    jr === null ? jr = n : jr.push.apply(jr, n);
  }
  function Jd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!Ma(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function $a(n, r) {
    for (r &= ~Oo, r &= ~af, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Ur(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function mh(n) {
    if (xt & 6)
      throw Error(S(327));
    Uo();
    var r = Ar(n, 0);
    if (!(r & 1))
      return kr(n, zt()), null;
    var l = cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = yl(n);
      o !== 0 && (r = o, l = Xd(n, o));
    }
    if (l === 1)
      throw l = zs, Ou(n, 0), $a(n, r), kr(n, zt()), l;
    if (l === 6)
      throw Error(S(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, ku(n, jr, Xi), kr(n, zt()), null;
  }
  function Mo(n, r) {
    var l = xt;
    xt |= 1;
    try {
      return n(r);
    } finally {
      xt = l, xt === 0 && (ko = zt() + 500, nr && na());
    }
  }
  function Vl(n) {
    Fl !== null && Fl.tag === 0 && !(xt & 6) && Uo();
    var r = xt;
    xt |= 1;
    var l = _r.transition, o = Vt;
    try {
      if (_r.transition = null, Vt = 1, n)
        return n();
    } finally {
      Vt = o, _r.transition = l, xt = r, !(xt & 6) && na();
    }
  }
  function Zd() {
    ba = Do.current, Wt(Do);
  }
  function Ou(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Iv(l)), Un !== null)
      for (l = Un.return; l !== null; ) {
        var o = l;
        switch (bd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && za();
            break;
          case 3:
            Al(), Wt(Mn), Wt(st), Uc();
            break;
          case 5:
            Tt(o);
            break;
          case 4:
            Al();
            break;
          case 13:
            Wt(rt);
            break;
          case 19:
            Wt(rt);
            break;
          case 10:
            Nl(o.type._context);
            break;
          case 22:
          case 23:
            Zd();
        }
        l = l.return;
      }
    if (On = n, Un = n = Bl(n.current, null), ir = ba = r, Xn = 0, zs = null, Oo = af = Ki = 0, jr = xu = null, fr !== null) {
      for (r = 0; r < fr.length; r++)
        if (l = fr[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var g = d.next;
            d.next = c, o.next = g;
          }
          l.pending = o;
        }
      fr = null;
    }
    return n;
  }
  function yh(n, r) {
    do {
      var l = Un;
      try {
        if (Dd(), Ac.current = Xc, it) {
          for (var o = gn.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          it = !1;
        }
        if (hu = 0, kt = ee = gn = null, Ri = !1, Ta = 0, Gd.current = null, l === null || l.return === null) {
          Xn = 1, zs = r, Un = null;
          break;
        }
        e: {
          var d = n, g = l.return, b = l, O = r;
          if (r = ir, b.flags |= 32768, O !== null && typeof O == "object" && typeof O.then == "function") {
            var W = O, ue = b, se = ue.tag;
            if (!(ue.mode & 1) && (se === 0 || se === 11 || se === 15)) {
              var le = ue.alternate;
              le ? (ue.updateQueue = le.updateQueue, ue.memoizedState = le.memoizedState, ue.lanes = le.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var Ne = jd(g);
            if (Ne !== null) {
              Ne.flags &= -257, Pd(Ne, g, b, d, r), Ne.mode & 1 && ih(d, W, r), r = Ne, O = W;
              var He = r.updateQueue;
              if (He === null) {
                var $e = /* @__PURE__ */ new Set();
                $e.add(O), r.updateQueue = $e;
              } else
                He.add(O);
              break e;
            } else {
              if (!(r & 1)) {
                ih(d, W, r), ep();
                break e;
              }
              O = Error(S(426));
            }
          } else if (yn && b.mode & 1) {
            var Hn = jd(g);
            if (Hn !== null) {
              !(Hn.flags & 65536) && (Hn.flags |= 256), Pd(Hn, g, b, d, r), wd(Co(O, b));
              break e;
            }
          }
          d = O = Co(O, b), Xn !== 4 && (Xn = 2), xu === null ? xu = [d] : xu.push(d), d = g;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var P = ah(d, O, r);
                Nd(d, P);
                break e;
              case 1:
                b = O;
                var M = d.type, B = d.stateNode;
                if (!(d.flags & 128) && (typeof M.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && (xi === null || !xi.has(B)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ve = Ds(d, b, r);
                  Nd(d, ve);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        tp(l);
      } catch (Ye) {
        r = Ye, Un === l && l !== null && (Un = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function sf() {
    var n = As.current;
    return As.current = Xc, n === null ? Xc : n;
  }
  function ep() {
    (Xn === 0 || Xn === 3 || Xn === 2) && (Xn = 4), On === null || !(Ki & 268435455) && !(af & 268435455) || $a(On, ir);
  }
  function cf(n, r) {
    var l = xt;
    xt |= 2;
    var o = sf();
    (On !== n || ir !== r) && (Xi = null, Ou(n, r));
    do
      try {
        My();
        break;
      } catch (c) {
        yh(n, c);
      }
    while (1);
    if (Dd(), xt = l, As.current = o, Un !== null)
      throw Error(S(261));
    return On = null, ir = 0, Xn;
  }
  function My() {
    for (; Un !== null; )
      gh(Un);
  }
  function Uy() {
    for (; Un !== null && !hi(); )
      gh(Un);
  }
  function gh(n) {
    var r = Eh(n.alternate, n, ba);
    n.memoizedProps = n.pendingProps, r === null ? tp(n) : Un = r, Gd.current = null;
  }
  function tp(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Yd(l, r), l !== null) {
          l.flags &= 32767, Un = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Xn = 6, Un = null;
          return;
        }
      } else if (l = Ly(l, r, ba), l !== null) {
        Un = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Un = r;
        return;
      }
      Un = r = n;
    } while (r !== null);
    Xn === 0 && (Xn = 5);
  }
  function ku(n, r, l) {
    var o = Vt, c = _r.transition;
    try {
      _r.transition = null, Vt = 1, Ay(n, r, l, o);
    } finally {
      _r.transition = c, Vt = o;
    }
    return null;
  }
  function Ay(n, r, l, o) {
    do
      Uo();
    while (Fl !== null);
    if (xt & 6)
      throw Error(S(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(S(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Xf(n, d), n === On && (Un = On = null, ir = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Hl || (Hl = !0, np(mi, function() {
      return Uo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = _r.transition, _r.transition = null;
      var g = Vt;
      Vt = 1;
      var b = xt;
      xt |= 4, Gd.current = null, ch(n, l), dh(l, n), yc(su), La = !!md, su = md = null, n.current = l, ph(l), qu(), xt = b, Vt = g, _r.transition = d;
    } else
      n.current = l;
    if (Hl && (Hl = !1, Fl = n, uf = c), d = n.pendingLanes, d === 0 && (xi = null), ts(l.stateNode), kr(n, zt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (lf)
      throw lf = !1, n = wu, wu = null, n;
    return uf & 1 && n.tag !== 0 && Uo(), d = n.pendingLanes, d & 1 ? n === of ? No++ : (No = 0, of = n) : No = 0, na(), null;
  }
  function Uo() {
    if (Fl !== null) {
      var n = Zu(uf), r = _r.transition, l = Vt;
      try {
        if (_r.transition = null, Vt = 16 > n ? 16 : n, Fl === null)
          var o = !1;
        else {
          if (n = Fl, Fl = null, uf = 0, xt & 6)
            throw Error(S(331));
          var c = xt;
          for (xt |= 4, Pe = n.current; Pe !== null; ) {
            var d = Pe, g = d.child;
            if (Pe.flags & 16) {
              var b = d.deletions;
              if (b !== null) {
                for (var O = 0; O < b.length; O++) {
                  var W = b[O];
                  for (Pe = W; Pe !== null; ) {
                    var ue = Pe;
                    switch (ue.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ms(8, ue, d);
                    }
                    var se = ue.child;
                    if (se !== null)
                      se.return = ue, Pe = se;
                    else
                      for (; Pe !== null; ) {
                        ue = Pe;
                        var le = ue.sibling, Ne = ue.return;
                        if (Qd(ue), ue === W) {
                          Pe = null;
                          break;
                        }
                        if (le !== null) {
                          le.return = Ne, Pe = le;
                          break;
                        }
                        Pe = Ne;
                      }
                  }
                }
                var He = d.alternate;
                if (He !== null) {
                  var $e = He.child;
                  if ($e !== null) {
                    He.child = null;
                    do {
                      var Hn = $e.sibling;
                      $e.sibling = null, $e = Hn;
                    } while ($e !== null);
                  }
                }
                Pe = d;
              }
            }
            if (d.subtreeFlags & 2064 && g !== null)
              g.return = d, Pe = g;
            else
              e:
                for (; Pe !== null; ) {
                  if (d = Pe, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ms(9, d, d.return);
                    }
                  var P = d.sibling;
                  if (P !== null) {
                    P.return = d.return, Pe = P;
                    break e;
                  }
                  Pe = d.return;
                }
          }
          var M = n.current;
          for (Pe = M; Pe !== null; ) {
            g = Pe;
            var B = g.child;
            if (g.subtreeFlags & 2064 && B !== null)
              B.return = g, Pe = B;
            else
              e:
                for (g = M; Pe !== null; ) {
                  if (b = Pe, b.flags & 2048)
                    try {
                      switch (b.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Us(9, b);
                      }
                    } catch (Ye) {
                      An(b, b.return, Ye);
                    }
                  if (b === g) {
                    Pe = null;
                    break e;
                  }
                  var ve = b.sibling;
                  if (ve !== null) {
                    ve.return = b.return, Pe = ve;
                    break e;
                  }
                  Pe = b.return;
                }
          }
          if (xt = c, na(), Xr && typeof Xr.onPostCommitFiberRoot == "function")
            try {
              Xr.onPostCommitFiberRoot(pl, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Vt = l, _r.transition = r;
      }
    }
    return !1;
  }
  function Sh(n, r, l) {
    r = Co(l, r), r = ah(n, r, 1), n = Ml(n, r, 1), r = Dr(), n !== null && (Ai(n, 1, r), kr(n, r));
  }
  function An(n, r, l) {
    if (n.tag === 3)
      Sh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Sh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (xi === null || !xi.has(o))) {
            n = Co(l, n), n = Ds(r, n, 1), r = Ml(r, n, 1), n = Dr(), r !== null && (Ai(r, 1, n), kr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function zy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Dr(), n.pingedLanes |= n.suspendedLanes & l, On === n && (ir & l) === l && (Xn === 4 || Xn === 3 && (ir & 130023424) === ir && 500 > zt() - Kd ? Ou(n, 0) : Oo |= l), kr(n, r);
  }
  function ff(n, r) {
    r === 0 && (n.mode & 1 ? (r = vl, vl <<= 1, !(vl & 130023424) && (vl = 4194304)) : r = 1);
    var l = Dr();
    n = Yi(n, r), n !== null && (Ai(n, r, l), kr(n, l));
  }
  function jy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ff(n, l);
  }
  function Py(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(S(314));
    }
    o !== null && o.delete(r), ff(n, l);
  }
  var Eh;
  Eh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Mn.current)
        $n = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return $n = !1, qi(n, r, l);
        $n = !!(n.flags & 131072);
      }
    else
      $n = !1, yn && r.flags & 1048576 && Td(r, vo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        xr(n, r), n = r.pendingProps;
        var c = Aa(r, st.current);
        Re(r, l), c = zl(null, r, o, n, c, l);
        var d = gu();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Cn(o) ? (d = !0, Tc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, kd(r), c.updater = Nc, r.stateNode = c, c._reactInternals = r, Lc(r, o, n, l), r = lh(null, r, o, !0, d, l)) : (r.tag = 0, yn && d && bc(r), qn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (xr(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Fy(o), n = Ra(o, n), c) {
            case 0:
              r = Ro(null, r, o, n, l);
              break e;
            case 1:
              r = Hd(null, r, o, n, l);
              break e;
            case 11:
              r = Pl(null, r, o, n, l);
              break e;
            case 14:
              r = Zc(null, r, o, Ra(o.type, n), l);
              break e;
          }
          throw Error(S(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Ra(o, c), Ro(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Ra(o, c), Hd(n, r, o, c, l);
      case 3:
        e: {
          if (uh(r), n === null)
            throw Error(S(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Qn(n, r), Ul(r, o, null, l);
          var g = r.memoizedState;
          if (o = g.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Co(Error(S(423)), r), r = ef(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = Co(Error(S(424)), r), r = ef(n, r, o, l, c);
              break e;
            } else
              for (ia = ii(r.stateNode.containerInfo.firstChild), Ca = r, yn = !0, Pa = null, l = nh(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (_n(), o === c) {
              r = dr(n, r, l);
              break e;
            }
            qn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return tt(r), n === null && wc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, g = c.children, ms(o, c) ? g = null : d !== null && ms(o, d) && (r.flags |= 32), St(n, r), qn(n, r, g, l), r.child;
      case 6:
        return n === null && wc(r), null;
      case 13:
        return Vd(n, r, l);
      case 4:
        return Md(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = mo(r, null, o, l) : qn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Ra(o, c), Pl(n, r, o, c, l);
      case 7:
        return qn(n, r, r.pendingProps, l), r.child;
      case 8:
        return qn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return qn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, g = c.value, Xt(Ci, o._currentValue), o._currentValue = g, d !== null)
            if (Ma(d.value, g)) {
              if (d.children === c.children && !Mn.current) {
                r = dr(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var b = d.dependencies;
                if (b !== null) {
                  g = d.child;
                  for (var O = b.firstContext; O !== null; ) {
                    if (O.context === o) {
                      if (d.tag === 1) {
                        O = Wi(-1, l & -l), O.tag = 2;
                        var W = d.updateQueue;
                        if (W !== null) {
                          W = W.shared;
                          var ue = W.pending;
                          ue === null ? O.next = O : (O.next = ue.next, ue.next = O), W.pending = O;
                        }
                      }
                      d.lanes |= l, O = d.alternate, O !== null && (O.lanes |= l), rr(
                        d.return,
                        l,
                        r
                      ), b.lanes |= l;
                      break;
                    }
                    O = O.next;
                  }
                } else if (d.tag === 10)
                  g = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (g = d.return, g === null)
                    throw Error(S(341));
                  g.lanes |= l, b = g.alternate, b !== null && (b.lanes |= l), rr(g, l, r), g = d.sibling;
                } else
                  g = d.child;
                if (g !== null)
                  g.return = d;
                else
                  for (g = d; g !== null; ) {
                    if (g === r) {
                      g = null;
                      break;
                    }
                    if (d = g.sibling, d !== null) {
                      d.return = g.return, g = d;
                      break;
                    }
                    g = g.return;
                  }
                d = g;
              }
          qn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Re(r, l), c = Pn(c), o = o(c), r.flags |= 1, qn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Ra(o, r.pendingProps), c = Ra(o.type, c), Zc(n, r, o, c, l);
      case 15:
        return oa(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Ra(o, c), xr(n, r), r.tag = 1, Cn(o) ? (n = !0, Tc(r)) : n = !1, Re(r, l), Jv(r, o, c), Lc(r, o, c, l), lh(null, r, o, !0, n, l);
      case 19:
        return Id(n, r, l);
      case 22:
        return Ru(n, r, l);
    }
    throw Error(S(156, r.tag));
  };
  function np(n, r) {
    return pn(n, r);
  }
  function Hy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ia(n, r, l, o) {
    return new Hy(n, r, l, o);
  }
  function rp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Fy(n) {
    if (typeof n == "function")
      return rp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === fn)
        return 11;
      if (n === Ut)
        return 14;
    }
    return 2;
  }
  function Bl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ia(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function df(n, r, l, o, c, d) {
    var g = 2;
    if (o = n, typeof n == "function")
      rp(n) && (g = 1);
    else if (typeof n == "string")
      g = 5;
    else
      e:
        switch (n) {
          case Ze:
            return Nu(l.children, c, d, r);
          case Zt:
            g = 8, c |= 8;
            break;
          case hn:
            return n = Ia(12, l, r, c | 2), n.elementType = hn, n.lanes = d, n;
          case Ge:
            return n = Ia(13, l, r, c), n.elementType = Ge, n.lanes = d, n;
          case lt:
            return n = Ia(19, l, r, c), n.elementType = lt, n.lanes = d, n;
          case Oe:
            return Ps(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ft:
                  g = 10;
                  break e;
                case bt:
                  g = 9;
                  break e;
                case fn:
                  g = 11;
                  break e;
                case Ut:
                  g = 14;
                  break e;
                case vt:
                  g = 16, o = null;
                  break e;
              }
            throw Error(S(130, n == null ? n : typeof n, ""));
        }
    return r = Ia(g, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Nu(n, r, l, o) {
    return n = Ia(7, n, o, r), n.lanes = l, n;
  }
  function Ps(n, r, l, o) {
    return n = Ia(22, n, o, r), n.elementType = Oe, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Hs(n, r, l) {
    return n = Ia(6, n, null, r), n.lanes = l, n;
  }
  function Lu(n, r, l) {
    return r = Ia(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Vy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ju(0), this.expirationTimes = Ju(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ju(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function pf(n, r, l, o, c, d, g, b, O) {
    return n = new Vy(n, r, l, b, O), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ia(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, kd(d), n;
  }
  function Ch(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ut, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function ap(n) {
    if (!n)
      return Ei;
    n = n._reactInternals;
    e: {
      if (mt(n) !== n || n.tag !== 1)
        throw Error(S(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Cn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(S(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Cn(l))
        return Ss(n, l, r);
    }
    return r;
  }
  function Rh(n, r, l, o, c, d, g, b, O) {
    return n = pf(l, o, !0, n, c, d, g, b, O), n.context = ap(null), l = n.current, o = Dr(), c = In(l), d = Wi(o, c), d.callback = r ?? null, Ml(l, d, c), n.current.lanes = c, Ai(n, c, o), kr(n, o), n;
  }
  function Fs(n, r, l, o) {
    var c = r.current, d = Dr(), g = In(c);
    return l = ap(l), r.context === null ? r.context = l : r.pendingContext = l, r = Wi(d, g), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ml(c, r, g), n !== null && (Or(n, c, g, d), kc(n, c, g)), g;
  }
  function vf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Th(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function ip(n, r) {
    Th(n, r), (n = n.alternate) && Th(n, r);
  }
  function bh() {
    return null;
  }
  var lp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function hf(n) {
    this._internalRoot = n;
  }
  Ji.prototype.render = hf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(S(409));
    Fs(n, r, null, null);
  }, Ji.prototype.unmount = hf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Vl(function() {
        Fs(null, n, null, null);
      }), r[$i] = null;
    }
  };
  function Ji(n) {
    this._internalRoot = n;
  }
  Ji.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = to();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Kt.length && r !== 0 && r < Kt[l].priority; l++)
        ;
      Kt.splice(l, 0, n), l === 0 && cc(n);
    }
  };
  function up(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function mf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function xh() {
  }
  function By(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var W = vf(g);
          d.call(W);
        };
      }
      var g = Rh(r, o, n, 0, null, !1, !1, "", xh);
      return n._reactRootContainer = g, n[$i] = g.current, fo(n.nodeType === 8 ? n.parentNode : n), Vl(), g;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var b = o;
      o = function() {
        var W = vf(O);
        b.call(W);
      };
    }
    var O = pf(n, 0, !1, null, null, !1, !1, "", xh);
    return n._reactRootContainer = O, n[$i] = O.current, fo(n.nodeType === 8 ? n.parentNode : n), Vl(function() {
      Fs(r, O, l, o);
    }), O;
  }
  function yf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var g = d;
      if (typeof c == "function") {
        var b = c;
        c = function() {
          var O = vf(g);
          b.call(O);
        };
      }
      Fs(r, g, n, c);
    } else
      g = By(l, r, n, c, o);
    return vf(g);
  }
  nu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ei(r.pendingLanes);
          l !== 0 && (yi(r, l | 1), kr(r, zt()), !(xt & 6) && (ko = zt() + 500, na()));
        }
        break;
      case 13:
        Vl(function() {
          var o = Yi(n, 1);
          if (o !== null) {
            var c = Dr();
            Or(o, n, 1, c);
          }
        }), ip(n, 1);
    }
  }, eo = function(n) {
    if (n.tag === 13) {
      var r = Yi(n, 134217728);
      if (r !== null) {
        var l = Dr();
        Or(r, n, 134217728, l);
      }
      ip(n, 134217728);
    }
  }, jt = function(n) {
    if (n.tag === 13) {
      var r = In(n), l = Yi(n, r);
      if (l !== null) {
        var o = Dr();
        Or(l, n, r, o);
      }
      ip(n, r);
    }
  }, to = function() {
    return Vt;
  }, no = function(n, r) {
    var l = Vt;
    try {
      return Vt = n, r();
    } finally {
      Vt = l;
    }
  }, Lr = function(n, r, l) {
    switch (r) {
      case "input":
        if (zn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Ke(o);
              if (!c)
                throw Error(S(90));
              ge(o), zn(o, c);
            }
          }
        }
        break;
      case "textarea":
        va(n, l);
        break;
      case "select":
        r = l.value, r != null && Cr(n, !!l.multiple, r, !1);
    }
  }, tu = Mo, Qu = Vl;
  var $y = { usingClientEntryPoint: !1, Events: [gs, po, Ke, ka, cl, Mo] }, Ao = { findFiberByHostInstance: Ua, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Iy = { bundleType: Ao.bundleType, version: Ao.version, rendererPackageName: Ao.rendererPackageName, rendererConfig: Ao.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: je.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Vn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ao.findFiberByHostInstance || bh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gf.isDisabled && gf.supportsFiber)
      try {
        pl = gf.inject(Iy), Xr = gf;
      } catch {
      }
  }
  return Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $y, Ka.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!up(r))
      throw Error(S(200));
    return Ch(n, r, null, l);
  }, Ka.createRoot = function(n, r) {
    if (!up(n))
      throw Error(S(299));
    var l = !1, o = "", c = lp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = pf(n, 1, !1, null, null, l, !1, o, c), n[$i] = r.current, fo(n.nodeType === 8 ? n.parentNode : n), new hf(r);
  }, Ka.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(S(188)) : (n = Object.keys(n).join(","), Error(S(268, n)));
    return n = Vn(r), n = n === null ? null : n.stateNode, n;
  }, Ka.flushSync = function(n) {
    return Vl(n);
  }, Ka.hydrate = function(n, r, l) {
    if (!mf(r))
      throw Error(S(200));
    return yf(null, n, r, !0, l);
  }, Ka.hydrateRoot = function(n, r, l) {
    if (!up(n))
      throw Error(S(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", g = lp;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (g = l.onRecoverableError)), r = Rh(r, null, n, 1, l ?? null, c, !1, d, g), n[$i] = r.current, fo(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ji(r);
  }, Ka.render = function(n, r, l) {
    if (!mf(r))
      throw Error(S(200));
    return yf(null, n, r, !1, l);
  }, Ka.unmountComponentAtNode = function(n) {
    if (!mf(n))
      throw Error(S(40));
    return n._reactRootContainer ? (Vl(function() {
      yf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[$i] = null;
      });
    }), !0) : !1;
  }, Ka.unstable_batchedUpdates = Mo, Ka.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!mf(l))
      throw Error(S(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(S(38));
    return yf(n, r, l, !1, o);
  }, Ka.version = "18.2.0-next-9e3b772b8-20220608", Ka;
}
var Xa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XR;
function DO() {
  return XR || (XR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var v = he, C = mT(), S = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, x = !1;
    function k(e) {
      x = e;
    }
    function D(e) {
      if (!x) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        H("warn", e, a);
      }
    }
    function y(e) {
      if (!x) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        H("error", e, a);
      }
    }
    function H(e, t, a) {
      {
        var i = S.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var N = 0, A = 1, Q = 2, j = 3, X = 4, G = 5, ae = 6, ne = 7, oe = 8, ye = 9, we = 10, be = 11, je = 12, K = 13, ut = 14, Ze = 15, Zt = 16, hn = 17, Ft = 18, bt = 19, fn = 21, Ge = 22, lt = 23, Ut = 24, vt = 25, Oe = !0, fe = !1, Be = !1, R = !1, z = !1, re = !0, me = !1, de = !1, ze = !0, Ee = !0, _e = !0, De = /* @__PURE__ */ new Set(), Ie = {}, ft = {};
    function It(e, t) {
      ge(e, t), ge(e + "Capture", t);
    }
    function ge(e, t) {
      Ie[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ie[e] = t;
      {
        var a = e.toLowerCase();
        ft[a] = e, e === "onDoubleClick" && (ft.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        De.add(t[i]);
    }
    var At = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Tn = Object.prototype.hasOwnProperty;
    function Nn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Wn(e) {
      try {
        return zn(e), !1;
      } catch {
        return !0;
      }
    }
    function zn(e) {
      return "" + e;
    }
    function Qr(e, t) {
      if (Wn(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Nn(e)), zn(e);
    }
    function qr(e) {
      if (Wn(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nn(e)), zn(e);
    }
    function Zn(e, t) {
      if (Wn(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Nn(e)), zn(e);
    }
    function Cr(e, t) {
      if (Wn(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Nn(e)), zn(e);
    }
    function Gr(e) {
      if (Wn(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Nn(e)), zn(e);
    }
    function Rr(e) {
      if (Wn(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Nn(e)), zn(e);
    }
    var va = 0, or = 1, Kr = 2, bn = 3, Nr = 4, fi = 5, ha = 6, Se = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Qe = Se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Et = new RegExp("^[" + Se + "][" + Qe + "]*$"), Yt = {}, Qt = {};
    function jn(e) {
      return Tn.call(Qt, e) ? !0 : Tn.call(Yt, e) ? !1 : Et.test(e) ? (Qt[e] = !0, !0) : (Yt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function xn(e, t, a) {
      return t !== null ? t.type === va : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Tr(e, t, a, i) {
      if (a !== null && a.type === va)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function en(e, t, a, i) {
      if (t === null || typeof t > "u" || Tr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case bn:
            return !t;
          case Nr:
            return t === !1;
          case fi:
            return isNaN(t);
          case ha:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Lr(e) {
      return Gt.hasOwnProperty(e) ? Gt[e] : null;
    }
    function qt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Kr || t === bn || t === Nr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Gt = {}, Ja = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ja.forEach(function(e) {
      Gt[e] = new qt(
        e,
        va,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Gt[t] = new qt(
        t,
        or,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Gt[e] = new qt(
        e,
        Kr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Gt[e] = new qt(
        e,
        Kr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Gt[e] = new qt(
        e,
        bn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new qt(
        e,
        bn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new qt(
        e,
        Nr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new qt(
        e,
        ha,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Gt[e] = new qt(
        e,
        fi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ka = /[\-\:]([a-z])/g, cl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, cl);
      Gt[t] = new qt(
        t,
        or,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, cl);
      Gt[t] = new qt(
        t,
        or,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, cl);
      Gt[t] = new qt(
        t,
        or,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Gt[e] = new qt(
        e,
        or,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var tu = "xlinkHref";
    Gt[tu] = new qt(
      "xlinkHref",
      or,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Gt[e] = new qt(
        e,
        or,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Qu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ui = !1;
    function fl(e) {
      !Ui && Qu.test(e) && (Ui = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ma(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Qr(a, t), i.sanitizeURL && fl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Nr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : en(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (en(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === bn)
            return a;
          f = e.getAttribute(s);
        }
        return en(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function di(e, t, a, i) {
      {
        if (!jn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Qr(a, t), u === "" + a ? a : u;
      }
    }
    function ya(e, t, a, i) {
      var u = Lr(t);
      if (!xn(t, u, i)) {
        if (en(t, a, u, i) && (a = null), i || u === null) {
          if (jn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Qr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var h = u.type;
            e[p] = h === bn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var E = u.attributeName, T = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(E);
        else {
          var U = u.type, L;
          U === bn || U === Nr && a === !0 ? L = "" : (Qr(a, E), L = "" + a, u.sanitizeURL && fl(L.toString())), T ? e.setAttributeNS(T, E, L) : e.setAttribute(E, L);
        }
      }
    }
    var pi = Symbol.for("react.element"), Mr = Symbol.for("react.portal"), ga = Symbol.for("react.fragment"), vi = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), Ce = Symbol.for("react.context"), Me = Symbol.for("react.forward_ref"), mt = Symbol.for("react.suspense"), Ot = Symbol.for("react.suspense_list"), yt = Symbol.for("react.memo"), Xe = Symbol.for("react.lazy"), Vn = Symbol.for("react.scope"), dn = Symbol.for("react.debug_trace_mode"), pn = Symbol.for("react.offscreen"), sr = Symbol.for("react.legacy_hidden"), hi = Symbol.for("react.cache"), qu = Symbol.for("react.tracing_marker"), zt = Symbol.iterator, Kf = "@@iterator";
    function Za(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = zt && e[zt] || e[Kf];
      return typeof t == "function" ? t : null;
    }
    var Ct = Object.assign, mi = 0, dl, Gu, pl, Xr, ts, Ur, ns;
    function rs() {
    }
    rs.__reactDisabledLog = !0;
    function oc() {
      {
        if (mi === 0) {
          dl = console.log, Gu = console.info, pl = console.warn, Xr = console.error, ts = console.group, Ur = console.groupCollapsed, ns = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: rs,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        mi++;
      }
    }
    function Ku() {
      {
        if (mi--, mi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ct({}, e, {
              value: dl
            }),
            info: Ct({}, e, {
              value: Gu
            }),
            warn: Ct({}, e, {
              value: pl
            }),
            error: Ct({}, e, {
              value: Xr
            }),
            group: Ct({}, e, {
              value: ts
            }),
            groupCollapsed: Ct({}, e, {
              value: Ur
            }),
            groupEnd: Ct({}, e, {
              value: ns
            })
          });
        }
        mi < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var vl = S.ReactCurrentDispatcher, ei;
    function Ar(e, t, a) {
      {
        if (ei === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ei = i && i[1] || "";
          }
        return `
` + ei + e;
      }
    }
    var hl = !1, ml;
    {
      var yl = typeof WeakMap == "function" ? WeakMap : Map;
      ml = new yl();
    }
    function Xu(e, t) {
      if (!e || hl)
        return "";
      {
        var a = ml.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      hl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = vl.current, vl.current = null, oc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (Y) {
              i = Y;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (Y) {
              i = Y;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            i = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && i && typeof Y.stack == "string") {
          for (var p = Y.stack.split(`
`), h = i.stack.split(`
`), E = p.length - 1, T = h.length - 1; E >= 1 && T >= 0 && p[E] !== h[T]; )
            T--;
          for (; E >= 1 && T >= 0; E--, T--)
            if (p[E] !== h[T]) {
              if (E !== 1 || T !== 1)
                do
                  if (E--, T--, T < 0 || p[E] !== h[T]) {
                    var U = `
` + p[E].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && ml.set(e, U), U;
                  }
                while (E >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        hl = !1, vl.current = s, Ku(), Error.prepareStackTrace = u;
      }
      var L = e ? e.displayName || e.name : "", $ = L ? Ar(L) : "";
      return typeof e == "function" && ml.set(e, $), $;
    }
    function Ju(e, t, a) {
      return Xu(e, !0);
    }
    function Ai(e, t, a) {
      return Xu(e, !1);
    }
    function Xf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function yi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Xu(e, Xf(e));
      if (typeof e == "string")
        return Ar(e);
      switch (e) {
        case mt:
          return Ar("Suspense");
        case Ot:
          return Ar("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Me:
            return Ai(e.render);
          case yt:
            return yi(e.type, t, a);
          case Xe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return yi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Vt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case G:
          return Ar(e.type);
        case Zt:
          return Ar("Lazy");
        case K:
          return Ar("Suspense");
        case bt:
          return Ar("SuspenseList");
        case N:
        case Q:
        case Ze:
          return Ai(e.type);
        case be:
          return Ai(e.type.render);
        case A:
          return Ju(e.type);
        default:
          return "";
      }
    }
    function Zu(e) {
      try {
        var t = "", a = e;
        do
          t += Vt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function nu(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function eo(e) {
      return e.displayName || "Context";
    }
    function jt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ga:
          return "Fragment";
        case Mr:
          return "Portal";
        case _:
          return "Profiler";
        case vi:
          return "StrictMode";
        case mt:
          return "Suspense";
        case Ot:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ce:
            var t = e;
            return eo(t) + ".Consumer";
          case ie:
            var a = e;
            return eo(a._context) + ".Provider";
          case Me:
            return nu(e, e.render, "ForwardRef");
          case yt:
            var i = e.displayName || null;
            return i !== null ? i : jt(e.type) || "Memo";
          case Xe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return jt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function to(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function no(e) {
      return e.displayName || "Context";
    }
    function dt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ut:
          return "Cache";
        case ye:
          var i = a;
          return no(i) + ".Consumer";
        case we:
          var u = a;
          return no(u._context) + ".Provider";
        case Ft:
          return "DehydratedFragment";
        case be:
          return to(a, a.render, "ForwardRef");
        case ne:
          return "Fragment";
        case G:
          return a;
        case X:
          return "Portal";
        case j:
          return "Root";
        case ae:
          return "Text";
        case Zt:
          return jt(a);
        case oe:
          return a === vi ? "StrictMode" : "Mode";
        case Ge:
          return "Offscreen";
        case je:
          return "Profiler";
        case fn:
          return "Scope";
        case K:
          return "Suspense";
        case bt:
          return "SuspenseList";
        case vt:
          return "TracingMarker";
        case A:
        case N:
        case hn:
        case Q:
        case ut:
        case Ze:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ru = S.ReactDebugCurrentFrame, wn = null, Jr = !1;
    function zr() {
      {
        if (wn === null)
          return null;
        var e = wn._debugOwner;
        if (e !== null && typeof e < "u")
          return dt(e);
      }
      return null;
    }
    function gl() {
      return wn === null ? "" : Zu(wn);
    }
    function Ln() {
      ru.getCurrentStack = null, wn = null, Jr = !1;
    }
    function Kt(e) {
      ru.getCurrentStack = e === null ? null : gl, wn = e, Jr = !1;
    }
    function sc() {
      return wn;
    }
    function Zr(e) {
      Jr = e;
    }
    function er(e) {
      return "" + e;
    }
    function gi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Rr(e), e;
        default:
          return "";
      }
    }
    var cc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function zi(e, t) {
      cc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Sl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function fc(e) {
      return e._valueTracker;
    }
    function Na(e) {
      e._valueTracker = null;
    }
    function El(e) {
      var t = "";
      return e && (Sl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Cl(e) {
      var t = Sl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Rr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Rr(p), i = "" + p;
          },
          stopTracking: function() {
            Na(e), delete e[t];
          }
        };
        return f;
      }
    }
    function La(e) {
      fc(e) || (e._valueTracker = Cl(e));
    }
    function ro(e) {
      if (!e)
        return !1;
      var t = fc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = El(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Rl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Tl = !1, au = !1, ao = !1, as = !1;
    function ti(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function m(e, t) {
      var a = e, i = t.checked, u = Ct({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function w(e, t) {
      zi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !au && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component", t.type), au = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Tl && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component", t.type), Tl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: gi(t.value != null ? t.value : i),
        controlled: ti(t)
      };
    }
    function I(e, t) {
      var a = e, i = t.checked;
      i != null && ya(a, "checked", i, !1);
    }
    function q(e, t) {
      var a = e;
      {
        var i = ti(t);
        !a._wrapperState.controlled && i && !as && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), as = !0), a._wrapperState.controlled && !i && !ao && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ao = !0);
      }
      I(e, t);
      var u = gi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = er(u)) : a.value !== er(u) && (a.value = er(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? et(a, t.type, u) : t.hasOwnProperty("defaultValue") && et(a, t.type, gi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function pe(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = er(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function nt(e, t) {
      var a = e;
      q(a, t), xe(a, t);
    }
    function xe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Qr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Bh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ro(f), q(f, p);
          }
        }
      }
    }
    function et(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Rl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = er(e._wrapperState.initialValue) : e.defaultValue !== er(a) && (e.defaultValue = er(a)));
    }
    var Rt = !1, Pt = !1, un = !1;
    function tn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? v.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Pt || (Pt = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (un || (un = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Rt && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Rt = !0);
    }
    function on(e, t) {
      t.value != null && e.setAttribute("value", er(gi(t.value)));
    }
    var vn = Array.isArray;
    function _t(e) {
      return vn(e);
    }
    var ji;
    ji = !1;
    function io() {
      var e = zr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var is = ["value", "defaultValue"];
    function Jf(e) {
      {
        zi("select", e);
        for (var t = 0; t < is.length; t++) {
          var a = is[t];
          if (e[a] != null) {
            var i = _t(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, io()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, io());
          }
        }
      }
    }
    function ni(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var h = 0; h < u.length; h++) {
          var E = f.hasOwnProperty("$" + u[h].value);
          u[h].selected !== E && (u[h].selected = E), E && i && (u[h].defaultSelected = !0);
        }
      } else {
        for (var T = er(gi(a)), U = null, L = 0; L < u.length; L++) {
          if (u[L].value === T) {
            u[L].selected = !0, i && (u[L].defaultSelected = !0);
            return;
          }
          U === null && !u[L].disabled && (U = u[L]);
        }
        U !== null && (U.selected = !0);
      }
    }
    function ls(e, t) {
      return Ct({}, t, {
        value: void 0
      });
    }
    function us(e, t) {
      var a = e;
      Jf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ji && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ji = !0);
    }
    function Zf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ni(a, !!t.multiple, i, !1) : t.defaultValue != null && ni(a, !!t.multiple, t.defaultValue, !0);
    }
    function fy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ni(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ni(a, !!t.multiple, t.defaultValue, !0) : ni(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function dy(e, t) {
      var a = e, i = t.value;
      i != null && ni(a, !!t.multiple, i, !1);
    }
    var ed = !1;
    function td(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ct({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: er(a._wrapperState.initialValue)
      });
      return i;
    }
    function yv(e, t) {
      var a = e;
      zi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ed && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component"), ed = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (_t(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: gi(i)
      };
    }
    function gv(e, t) {
      var a = e, i = gi(t.value), u = gi(t.defaultValue);
      if (i != null) {
        var s = er(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = er(u));
    }
    function Sv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function nd(e, t) {
      gv(e, t);
    }
    var Pi = "http://www.w3.org/1999/xhtml", py = "http://www.w3.org/1998/Math/MathML", rd = "http://www.w3.org/2000/svg";
    function dc(e) {
      switch (e) {
        case "svg":
          return rd;
        case "math":
          return py;
        default:
          return Pi;
      }
    }
    function ad(e, t) {
      return e == null || e === Pi ? dc(t) : e === rd && t === "foreignObject" ? Pi : e;
    }
    var vy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, pc, Ev = vy(function(e, t) {
      if (e.namespaceURI === rd && !("innerHTML" in e)) {
        pc = pc || document.createElement("div"), pc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = pc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ea = 1, Hi = 3, Bn = 8, ri = 9, iu = 11, vc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Hi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Cv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, lo = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Rv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Tv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(lo).forEach(function(e) {
      Tv.forEach(function(t) {
        lo[Rv(t, e)] = lo[e];
      });
    });
    function hc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(lo.hasOwnProperty(e) && lo[e]) ? t + "px" : (Cr(t, e), ("" + t).trim());
    }
    var uo = /([A-Z])/g, hy = /^ms-/;
    function my(e) {
      return e.replace(uo, "-$1").toLowerCase().replace(hy, "-ms-");
    }
    var bv = function() {
    };
    {
      var xv = /^(?:webkit|moz|o)[A-Z]/, wv = /^-ms-/, os = /-(.)/g, oo = /;\s*$/, so = {}, co = {}, _v = !1, id = !1, ld = function(e) {
        return e.replace(os, function(t, a) {
          return a.toUpperCase();
        });
      }, ud = function(e) {
        so.hasOwnProperty(e) && so[e] || (so[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ld(e.replace(wv, "ms-"))
        ));
      }, Dv = function(e) {
        so.hasOwnProperty(e) && so[e] || (so[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Ov = function(e, t) {
        co.hasOwnProperty(t) && co[t] || (co[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(oo, "")));
      }, kv = function(e, t) {
        _v || (_v = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, yy = function(e, t) {
        id || (id = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      bv = function(e, t) {
        e.indexOf("-") > -1 ? ud(e) : xv.test(e) ? Dv(e) : oo.test(t) && Ov(e, t), typeof t == "number" && (isNaN(t) ? kv(e, t) : isFinite(t) || yy(e, t));
      };
    }
    var gy = bv;
    function Sy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : my(i)) + ":", t += hc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Nv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || gy(i, t[i]);
          var s = hc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ey(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ma(e) {
      var t = {};
      for (var a in e)
        for (var i = Cv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ss(e, t) {
      {
        if (!t)
          return;
        var a = Ma(e), i = Ma(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var h = f + "," + p;
            if (u[h])
              continue;
            u[h] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ey(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Lv = {
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
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Mv = Ct({
      menuitem: !0
    }, Lv), Uv = "__html";
    function mc(e, t) {
      if (t) {
        if (Mv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Uv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Fi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var yc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Av = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ai = {}, od = new RegExp("^(aria)-[" + Qe + "]*$"), cs = new RegExp("^(aria)[A-Z][" + Qe + "]*$");
    function sd(e, t) {
      {
        if (Tn.call(ai, t) && ai[t])
          return !0;
        if (cs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Av.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ai[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ai[t] = !0, !0;
        }
        if (od.test(t)) {
          var u = t.toLowerCase(), s = Av.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ai[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ai[t] = !0, !0;
        }
      }
      return !0;
    }
    function zv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = sd(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function gc(e, t) {
      Fi(e, t) || zv(e, t);
    }
    var lu = !1;
    function cd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !lu && (lu = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var fd = function() {
    };
    {
      var tr = {}, dd = /^on./, jv = /^on[^A-Z]/, Pv = new RegExp("^(aria)-[" + Qe + "]*$"), Hv = new RegExp("^(aria)[A-Z][" + Qe + "]*$");
      fd = function(e, t, a, i) {
        if (Tn.call(tr, t) && tr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), tr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), tr[t] = !0, !0;
          if (dd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), tr[t] = !0, !0;
        } else if (dd.test(t))
          return jv.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), tr[t] = !0, !0;
        if (Pv.test(t) || Hv.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), tr[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), tr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), tr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), tr[t] = !0, !0;
        var h = Lr(t), E = h !== null && h.type === va;
        if (yc.hasOwnProperty(u)) {
          var T = yc[u];
          if (T !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, T), tr[t] = !0, !0;
        } else if (!E && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), tr[t] = !0, !0;
        return typeof a == "boolean" && Tr(t, a, h, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), tr[t] = !0, !0) : E ? !0 : Tr(t, a, h, !1) ? (tr[t] = !0, !1) : ((a === "false" || a === "true") && h !== null && h.type === bn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), tr[t] = !0), !0);
      };
    }
    var Fv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = fd(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Vv(e, t, a) {
      Fi(e, t) || Fv(e, t, a);
    }
    var Vi = 1, fs = 2, uu = 4, Cy = Vi | fs | uu, ds = null;
    function ps(e) {
      ds !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ds = e;
    }
    function Ry() {
      ds === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ds = null;
    }
    function Bv(e) {
      return e === ds;
    }
    function Sc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Hi ? t.parentNode : t;
    }
    var sn = null, bl = null, Bi = null;
    function fo(e) {
      var t = Po(e);
      if (t) {
        if (typeof sn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Bh(a);
          sn(t.stateNode, t.type, i);
        }
      }
    }
    function $v(e) {
      sn = e;
    }
    function Ec(e) {
      bl ? Bi ? Bi.push(e) : Bi = [e] : bl = e;
    }
    function vs() {
      return bl !== null || Bi !== null;
    }
    function hs() {
      if (bl) {
        var e = bl, t = Bi;
        if (bl = null, Bi = null, fo(e), t)
          for (var a = 0; a < t.length; a++)
            fo(t[a]);
      }
    }
    var ou = function(e, t) {
      return e(t);
    }, pd = function() {
    }, vd = !1;
    function Ty() {
      var e = vs();
      e && (pd(), hs());
    }
    function hd(e, t, a) {
      if (vd)
        return e(t, a);
      vd = !0;
      try {
        return ou(e, t, a);
      } finally {
        vd = !1, Ty();
      }
    }
    function Cc(e, t, a) {
      ou = e, pd = a;
    }
    function Rc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function md(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Rc(t));
        default:
          return !1;
      }
    }
    function su(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Bh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (md(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ms = !1;
    if (At)
      try {
        var cu = {};
        Object.defineProperty(cu, "passive", {
          get: function() {
            ms = !0;
          }
        }), window.addEventListener("test", cu, cu), window.removeEventListener("test", cu, cu);
      } catch {
        ms = !1;
      }
    function Iv(e, t, a, i, u, s, f, p, h) {
      var E = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, E);
      } catch (T) {
        this.onError(T);
      }
    }
    var yd = Iv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var gd = document.createElement("react");
      yd = function(t, a, i, u, s, f, p, h, E) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), U = !1, L = !0, $ = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function J() {
          gd.removeEventListener(Z, Je, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = $);
        }
        var Ue = Array.prototype.slice.call(arguments, 3);
        function Je() {
          U = !0, J(), a.apply(i, Ue), L = !1;
        }
        var We, Lt = !1, wt = !1;
        function F(V) {
          if (We = V.error, Lt = !0, We === null && V.colno === 0 && V.lineno === 0 && (wt = !0), V.defaultPrevented && We != null && typeof We == "object")
            try {
              We._suppressLogging = !0;
            } catch {
            }
        }
        var Z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", F), gd.addEventListener(Z, Je, !1), T.initEvent(Z, !1, !1), gd.dispatchEvent(T), Y && Object.defineProperty(window, "event", Y), U && L && (Lt ? wt && (We = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : We = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(We)), window.removeEventListener("error", F), !U)
          return J(), Iv.apply(this, arguments);
      };
    }
    var by = yd, xl = !1, ii = null, ys = !1, wl = null, Si = {
      onError: function(e) {
        xl = !0, ii = e;
      }
    };
    function fu(e, t, a, i, u, s, f, p, h) {
      xl = !1, ii = null, by.apply(Si, arguments);
    }
    function $i(e, t, a, i, u, s, f, p, h) {
      if (fu.apply(this, arguments), xl) {
        var E = Ed();
        ys || (ys = !0, wl = E);
      }
    }
    function Sd() {
      if (ys) {
        var e = wl;
        throw ys = !1, wl = null, e;
      }
    }
    function xy() {
      return xl;
    }
    function Ed() {
      if (xl) {
        var e = ii;
        return xl = !1, ii = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ua(e) {
      return e._reactInternals;
    }
    function gs(e) {
      return e._reactInternals !== void 0;
    }
    function po(e, t) {
      e._reactInternals = t;
    }
    var Ke = (
      /*                      */
      0
    ), _l = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), gt = (
      /*                       */
      4
    ), Wt = (
      /*                */
      16
    ), Xt = (
      /*                 */
      32
    ), Ei = (
      /*                     */
      64
    ), st = (
      /*                   */
      128
    ), Mn = (
      /*            */
      256
    ), ta = (
      /*                          */
      512
    ), Aa = (
      /*                     */
      1024
    ), Cn = (
      /*                      */
      2048
    ), za = (
      /*                    */
      4096
    ), Dl = (
      /*                   */
      8192
    ), Ss = (
      /*             */
      16384
    ), Tc = Cn | gt | Ei | ta | Aa | Ss, Yv = (
      /*               */
      32767
    ), Sa = (
      /*                   */
      32768
    ), nr = (
      /*                */
      65536
    ), Es = (
      /* */
      131072
    ), Cd = (
      /*                       */
      1048576
    ), Rd = (
      /*                    */
      2097152
    ), na = (
      /*                 */
      4194304
    ), Ol = (
      /*                */
      8388608
    ), ra = (
      /*               */
      16777216
    ), du = (
      /*              */
      33554432
    ), vo = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      gt | Aa | 0
    ), aa = mn | gt | Wt | Xt | ta | za | Dl, br = gt | Ei | ta | Dl, ja = Cn | Wt, cr = na | Ol | Rd, Ii = S.ReactCurrentOwner;
    function Ea(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | za)) !== Ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === j ? a : null;
    }
    function Td(e) {
      if (e.tag === K) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function bc(e) {
      return e.tag === j ? e.stateNode.containerInfo : null;
    }
    function bd(e) {
      return Ea(e) === e;
    }
    function Ca(e) {
      {
        var t = Ii.current;
        if (t !== null && t.tag === A) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", dt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ua(e);
      return u ? Ea(u) === u : !1;
    }
    function ia(e) {
      if (Ea(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function yn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ea(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var h = s.child; h; ) {
            if (h === i)
              return ia(s), e;
            if (h === u)
              return ia(s), t;
            h = h.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var E = !1, T = s.child; T; ) {
            if (T === i) {
              E = !0, i = s, u = f;
              break;
            }
            if (T === u) {
              E = !0, u = s, i = f;
              break;
            }
            T = T.sibling;
          }
          if (!E) {
            for (T = f.child; T; ) {
              if (T === i) {
                E = !0, i = f, u = s;
                break;
              }
              if (T === u) {
                E = !0, u = f, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!E)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== j)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Pa(e) {
      var t = yn(e);
      return t !== null ? xd(t) : null;
    }
    function xd(e) {
      if (e.tag === G || e.tag === ae)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = xd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Wv(e) {
      var t = yn(e);
      return t !== null ? xc(t) : null;
    }
    function xc(e) {
      if (e.tag === G || e.tag === ae)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== X) {
          var a = xc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var wc = C.unstable_scheduleCallback, Qv = C.unstable_cancelCallback, _c = C.unstable_shouldYield, qv = C.unstable_requestPaint, _n = C.unstable_now, wd = C.unstable_getCurrentPriorityLevel, Dc = C.unstable_ImmediatePriority, Ra = C.unstable_UserBlockingPriority, Ci = C.unstable_NormalPriority, Oc = C.unstable_LowPriority, kl = C.unstable_IdlePriority, _d = C.unstable_yieldValue, Dd = C.unstable_setDisableYieldValue, Nl = null, rr = null, Re = null, Pn = !1, fr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Od(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ze && (e = Ct({}, e, {
          getLaneLabelMap: Ml,
          injectProfilingHooks: Wi
        })), Nl = t.inject(e), rr = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Gv(e, t) {
      if (rr && typeof rr.onScheduleFiberRoot == "function")
        try {
          rr.onScheduleFiberRoot(Nl, e, t);
        } catch (a) {
          Pn || (Pn = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Yi(e, t) {
      if (rr && typeof rr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & st) === st;
          if (Ee) {
            var i;
            switch (t) {
              case xr:
                i = Dc;
                break;
              case dr:
                i = Ra;
                break;
              case qi:
                i = Ci;
                break;
              case Os:
                i = kl;
                break;
              default:
                i = Ci;
                break;
            }
            rr.onCommitFiberRoot(Nl, e, i, a);
          }
        } catch (u) {
          Pn || (Pn = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function Ll(e) {
      if (rr && typeof rr.onPostCommitFiberRoot == "function")
        try {
          rr.onPostCommitFiberRoot(Nl, e);
        } catch (t) {
          Pn || (Pn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function kd(e) {
      if (rr && typeof rr.onCommitFiberUnmount == "function")
        try {
          rr.onCommitFiberUnmount(Nl, e);
        } catch (t) {
          Pn || (Pn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Qn(e) {
      if (typeof _d == "function" && (Dd(e), k(e)), rr && typeof rr.setStrictMode == "function")
        try {
          rr.setStrictMode(Nl, e);
        } catch (t) {
          Pn || (Pn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Wi(e) {
      Re = e;
    }
    function Ml() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < gn; a++) {
          var i = wy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function kc(e) {
      Re !== null && typeof Re.markCommitStarted == "function" && Re.markCommitStarted(e);
    }
    function Nd() {
      Re !== null && typeof Re.markCommitStopped == "function" && Re.markCommitStopped();
    }
    function Ul(e) {
      Re !== null && typeof Re.markComponentRenderStarted == "function" && Re.markComponentRenderStarted(e);
    }
    function pu() {
      Re !== null && typeof Re.markComponentRenderStopped == "function" && Re.markComponentRenderStopped();
    }
    function Kv(e) {
      Re !== null && typeof Re.markComponentPassiveEffectMountStarted == "function" && Re.markComponentPassiveEffectMountStarted(e);
    }
    function Ld() {
      Re !== null && typeof Re.markComponentPassiveEffectMountStopped == "function" && Re.markComponentPassiveEffectMountStopped();
    }
    function Nc(e) {
      Re !== null && typeof Re.markComponentPassiveEffectUnmountStarted == "function" && Re.markComponentPassiveEffectUnmountStarted(e);
    }
    function Xv() {
      Re !== null && typeof Re.markComponentPassiveEffectUnmountStopped == "function" && Re.markComponentPassiveEffectUnmountStopped();
    }
    function Jv(e) {
      Re !== null && typeof Re.markComponentLayoutEffectMountStarted == "function" && Re.markComponentLayoutEffectMountStarted(e);
    }
    function Zv() {
      Re !== null && typeof Re.markComponentLayoutEffectMountStopped == "function" && Re.markComponentLayoutEffectMountStopped();
    }
    function Lc(e) {
      Re !== null && typeof Re.markComponentLayoutEffectUnmountStarted == "function" && Re.markComponentLayoutEffectUnmountStarted(e);
    }
    function ho() {
      Re !== null && typeof Re.markComponentLayoutEffectUnmountStopped == "function" && Re.markComponentLayoutEffectUnmountStopped();
    }
    function Mc(e, t, a) {
      Re !== null && typeof Re.markComponentErrored == "function" && Re.markComponentErrored(e, t, a);
    }
    function eh(e, t, a) {
      Re !== null && typeof Re.markComponentSuspended == "function" && Re.markComponentSuspended(e, t, a);
    }
    function th(e) {
      Re !== null && typeof Re.markLayoutEffectsStarted == "function" && Re.markLayoutEffectsStarted(e);
    }
    function mo() {
      Re !== null && typeof Re.markLayoutEffectsStopped == "function" && Re.markLayoutEffectsStopped();
    }
    function nh(e) {
      Re !== null && typeof Re.markPassiveEffectsStarted == "function" && Re.markPassiveEffectsStarted(e);
    }
    function Cs() {
      Re !== null && typeof Re.markPassiveEffectsStopped == "function" && Re.markPassiveEffectsStopped();
    }
    function li(e) {
      Re !== null && typeof Re.markRenderStarted == "function" && Re.markRenderStarted(e);
    }
    function Rs() {
      Re !== null && typeof Re.markRenderYielded == "function" && Re.markRenderYielded();
    }
    function yo() {
      Re !== null && typeof Re.markRenderStopped == "function" && Re.markRenderStopped();
    }
    function vu(e) {
      Re !== null && typeof Re.markRenderScheduled == "function" && Re.markRenderScheduled(e);
    }
    function Md(e, t) {
      Re !== null && typeof Re.markForceUpdateScheduled == "function" && Re.markForceUpdateScheduled(e, t);
    }
    function Al(e, t) {
      Re !== null && typeof Re.markStateUpdateScheduled == "function" && Re.markStateUpdateScheduled(e, t);
    }
    var tt = (
      /*                         */
      0
    ), Tt = (
      /*                 */
      1
    ), rt = (
      /*                    */
      2
    ), Dn = (
      /*               */
      8
    ), Ha = (
      /*              */
      16
    ), Uc = Math.clz32 ? Math.clz32 : hu, Ac = Math.log, Ud = Math.LN2;
    function hu(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ac(t) / Ud | 0) | 0;
    }
    var gn = 31, ee = (
      /*                        */
      0
    ), kt = (
      /*                          */
      0
    ), it = (
      /*                        */
      1
    ), Ri = (
      /*    */
      2
    ), Ta = (
      /*             */
      4
    ), mu = (
      /*            */
      8
    ), Sn = (
      /*                     */
      16
    ), yu = (
      /*                */
      32
    ), zl = (
      /*                       */
      4194240
    ), gu = (
      /*                        */
      64
    ), Fa = (
      /*                        */
      128
    ), la = (
      /*                        */
      256
    ), Su = (
      /*                        */
      512
    ), Ts = (
      /*                        */
      1024
    ), bs = (
      /*                        */
      2048
    ), zc = (
      /*                        */
      4096
    ), jc = (
      /*                        */
      8192
    ), Pc = (
      /*                        */
      16384
    ), Hc = (
      /*                       */
      32768
    ), Fc = (
      /*                       */
      65536
    ), Vc = (
      /*                       */
      131072
    ), Bc = (
      /*                       */
      262144
    ), $c = (
      /*                       */
      524288
    ), Eu = (
      /*                       */
      1048576
    ), Ic = (
      /*                       */
      2097152
    ), Cu = (
      /*                            */
      130023424
    ), Qi = (
      /*                             */
      4194304
    ), Yc = (
      /*                             */
      8388608
    ), xs = (
      /*                             */
      16777216
    ), Wc = (
      /*                             */
      33554432
    ), Qc = (
      /*                             */
      67108864
    ), Ad = Qi, go = (
      /*          */
      134217728
    ), qc = (
      /*                          */
      268435455
    ), So = (
      /*               */
      268435456
    ), jl = (
      /*                        */
      536870912
    ), ua = (
      /*                   */
      1073741824
    );
    function wy(e) {
      {
        if (e & it)
          return "Sync";
        if (e & Ri)
          return "InputContinuousHydration";
        if (e & Ta)
          return "InputContinuous";
        if (e & mu)
          return "DefaultHydration";
        if (e & Sn)
          return "Default";
        if (e & yu)
          return "TransitionHydration";
        if (e & zl)
          return "Transition";
        if (e & Cu)
          return "Retry";
        if (e & go)
          return "SelectiveHydration";
        if (e & So)
          return "IdleHydration";
        if (e & jl)
          return "Idle";
        if (e & ua)
          return "Offscreen";
      }
    }
    var cn = -1, Gc = gu, Kc = Qi;
    function Eo(e) {
      switch ($n(e)) {
        case it:
          return it;
        case Ri:
          return Ri;
        case Ta:
          return Ta;
        case mu:
          return mu;
        case Sn:
          return Sn;
        case yu:
          return yu;
        case gu:
        case Fa:
        case la:
        case Su:
        case Ts:
        case bs:
        case zc:
        case jc:
        case Pc:
        case Hc:
        case Fc:
        case Vc:
        case Bc:
        case $c:
        case Eu:
        case Ic:
          return e & zl;
        case Qi:
        case Yc:
        case xs:
        case Wc:
        case Qc:
          return e & Cu;
        case go:
          return go;
        case So:
          return So;
        case jl:
          return jl;
        case ua:
          return ua;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ws(e, t) {
      var a = e.pendingLanes;
      if (a === ee)
        return ee;
      var i = ee, u = e.suspendedLanes, s = e.pingedLanes, f = a & qc;
      if (f !== ee) {
        var p = f & ~u;
        if (p !== ee)
          i = Eo(p);
        else {
          var h = f & s;
          h !== ee && (i = Eo(h));
        }
      } else {
        var E = a & ~u;
        E !== ee ? i = Eo(E) : s !== ee && (i = Eo(s));
      }
      if (i === ee)
        return ee;
      if (t !== ee && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ee) {
        var T = $n(i), U = $n(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= U || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Sn && (U & zl) !== ee
        )
          return t;
      }
      (i & Ta) !== ee && (i |= a & Sn);
      var L = e.entangledLanes;
      if (L !== ee)
        for (var $ = e.entanglements, Y = i & L; Y > 0; ) {
          var J = Pl(Y), Ue = 1 << J;
          i |= $[J], Y &= ~Ue;
        }
      return i;
    }
    function rh(e, t) {
      for (var a = e.eventTimes, i = cn; t > 0; ) {
        var u = Pl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Xc(e, t) {
      switch (e) {
        case it:
        case Ri:
        case Ta:
          return t + 250;
        case mu:
        case Sn:
        case yu:
        case gu:
        case Fa:
        case la:
        case Su:
        case Ts:
        case bs:
        case zc:
        case jc:
        case Pc:
        case Hc:
        case Fc:
        case Vc:
        case Bc:
        case $c:
        case Eu:
        case Ic:
          return t + 5e3;
        case Qi:
        case Yc:
        case xs:
        case Wc:
        case Qc:
          return cn;
        case go:
        case So:
        case jl:
        case ua:
          return cn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), cn;
      }
    }
    function _y(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Pl(f), h = 1 << p, E = s[p];
        E === cn ? ((h & i) === ee || (h & u) !== ee) && (s[p] = Xc(h, t)) : E <= t && (e.expiredLanes |= h), f &= ~h;
      }
    }
    function Dy(e) {
      return Eo(e.pendingLanes);
    }
    function zd(e) {
      var t = e.pendingLanes & ~ua;
      return t !== ee ? t : t & ua ? ua : ee;
    }
    function Co(e) {
      return (e & it) !== ee;
    }
    function _s(e) {
      return (e & qc) !== ee;
    }
    function Jc(e) {
      return (e & Cu) === e;
    }
    function Oy(e) {
      var t = it | Ta | Sn;
      return (e & t) === ee;
    }
    function ah(e) {
      return (e & zl) === e;
    }
    function Ds(e, t) {
      var a = Ri | Ta | mu | Sn;
      return (t & a) !== ee;
    }
    function ih(e, t) {
      return (t & e.expiredLanes) !== ee;
    }
    function jd(e) {
      return (e & zl) !== ee;
    }
    function Pd() {
      var e = Gc;
      return Gc <<= 1, (Gc & zl) === ee && (Gc = gu), e;
    }
    function ky() {
      var e = Kc;
      return Kc <<= 1, (Kc & Cu) === ee && (Kc = Qi), e;
    }
    function $n(e) {
      return e & -e;
    }
    function qn(e) {
      return $n(e);
    }
    function Pl(e) {
      return 31 - Uc(e);
    }
    function Zc(e) {
      return Pl(e);
    }
    function oa(e, t) {
      return (e & t) !== ee;
    }
    function Ru(e, t) {
      return (e & t) === t;
    }
    function St(e, t) {
      return e | t;
    }
    function Ro(e, t) {
      return e & ~t;
    }
    function Hd(e, t) {
      return e & t;
    }
    function lh(e) {
      return e;
    }
    function uh(e, t) {
      return e !== kt && e < t ? e : t;
    }
    function ef(e) {
      for (var t = [], a = 0; a < gn; a++)
        t.push(e);
      return t;
    }
    function Tu(e, t, a) {
      e.pendingLanes |= t, t !== jl && (e.suspendedLanes = ee, e.pingedLanes = ee);
      var i = e.eventTimes, u = Zc(t);
      i[u] = a;
    }
    function Fd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Pl(i), s = 1 << u;
        a[u] = cn, i &= ~s;
      }
    }
    function Vd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Bd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ee, e.pingedLanes = ee, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Pl(f), h = 1 << p;
        i[p] = ee, u[p] = cn, s[p] = cn, f &= ~h;
      }
    }
    function To(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Pl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ny(e, t) {
      var a = $n(t), i;
      switch (a) {
        case Ta:
          i = Ri;
          break;
        case Sn:
          i = mu;
          break;
        case gu:
        case Fa:
        case la:
        case Su:
        case Ts:
        case bs:
        case zc:
        case jc:
        case Pc:
        case Hc:
        case Fc:
        case Vc:
        case Bc:
        case $c:
        case Eu:
        case Ic:
        case Qi:
        case Yc:
        case xs:
        case Wc:
        case Qc:
          i = yu;
          break;
        case jl:
          i = So;
          break;
        default:
          i = kt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== kt ? kt : i;
    }
    function $d(e, t, a) {
      if (fr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Zc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function tf(e, t) {
      if (fr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Zc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var h = p.alternate;
            (h === null || !i.has(h)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Id(e, t) {
      return null;
    }
    var xr = it, dr = Ta, qi = Sn, Os = jl, bu = kt;
    function Va() {
      return bu;
    }
    function Gn(e) {
      bu = e;
    }
    function ks(e, t) {
      var a = bu;
      try {
        return bu = e, t();
      } finally {
        bu = a;
      }
    }
    function wr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ly(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Yd(e, t) {
      return e !== 0 && e < t;
    }
    function Ns(e) {
      var t = $n(e);
      return Yd(xr, t) ? Yd(dr, t) ? _s(t) ? qi : Os : dr : xr;
    }
    function Kn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var oh;
    function Pe(e) {
      oh = e;
    }
    function bo(e) {
      oh(e);
    }
    var Ls;
    function sh(e) {
      Ls = e;
    }
    var ch;
    function Ms(e) {
      ch = e;
    }
    var Us;
    function Wd(e) {
      Us = e;
    }
    var Qd;
    function fh(e) {
      Qd = e;
    }
    var nf = !1, xo = [], Ti = null, Rn = null, ar = null, Ba = /* @__PURE__ */ new Map(), wo = /* @__PURE__ */ new Map(), Gi = [], ui = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function dh(e) {
      return ui.indexOf(e) > -1;
    }
    function bi(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function ph(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ti = null;
          break;
        case "dragenter":
        case "dragleave":
          Rn = null;
          break;
        case "mouseover":
        case "mouseout":
          ar = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ba.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          wo.delete(i);
          break;
        }
      }
    }
    function _o(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = bi(t, a, i, u, s);
        if (t !== null) {
          var p = Po(t);
          p !== null && Ls(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var h = e.targetContainers;
      return u !== null && h.indexOf(u) === -1 && h.push(u), e;
    }
    function vh(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ti = _o(Ti, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Rn = _o(Rn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ar = _o(ar, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var h = u, E = h.pointerId;
          return Ba.set(E, _o(Ba.get(E) || null, e, t, a, i, h)), !0;
        }
        case "gotpointercapture": {
          var T = u, U = T.pointerId;
          return wo.set(U, _o(wo.get(U) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function qd(e) {
      var t = $s(e.target);
      if (t !== null) {
        var a = Ea(t);
        if (a !== null) {
          var i = a.tag;
          if (i === K) {
            var u = Td(a);
            if (u !== null) {
              e.blockedOn = u, Qd(e.priority, function() {
                ch(a);
              });
              return;
            }
          } else if (i === j) {
            var s = a.stateNode;
            if (Kn(s)) {
              e.blockedOn = bc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function hh(e) {
      for (var t = Us(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Gi.length && Yd(t, Gi[i].priority); i++)
        ;
      Gi.splice(i, 0, a), i === 0 && qd(a);
    }
    function rf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = xu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ps(s), u.target.dispatchEvent(s), Ry();
        } else {
          var f = Po(i);
          return f !== null && Ls(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function As(e, t, a) {
      rf(e) && a.delete(t);
    }
    function Gd() {
      nf = !1, Ti !== null && rf(Ti) && (Ti = null), Rn !== null && rf(Rn) && (Rn = null), ar !== null && rf(ar) && (ar = null), Ba.forEach(As), wo.forEach(As);
    }
    function _r(e, t) {
      e.blockedOn === t && (e.blockedOn = null, nf || (nf = !0, C.unstable_scheduleCallback(C.unstable_NormalPriority, Gd)));
    }
    function xt(e) {
      if (xo.length > 0) {
        _r(xo[0], e);
        for (var t = 1; t < xo.length; t++) {
          var a = xo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ti !== null && _r(Ti, e), Rn !== null && _r(Rn, e), ar !== null && _r(ar, e);
      var i = function(p) {
        return _r(p, e);
      };
      Ba.forEach(i), wo.forEach(i);
      for (var u = 0; u < Gi.length; u++) {
        var s = Gi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Gi.length > 0; ) {
        var f = Gi[0];
        if (f.blockedOn !== null)
          break;
        qd(f), f.blockedOn === null && Gi.shift();
      }
    }
    var On = S.ReactCurrentBatchConfig, Un = !0;
    function ir(e) {
      Un = !!e;
    }
    function ba() {
      return Un;
    }
    function Do(e, t, a) {
      var i = jr(t), u;
      switch (i) {
        case xr:
          u = Xn;
          break;
        case dr:
          u = zs;
          break;
        case qi:
        default:
          u = Ki;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Xn(e, t, a, i) {
      var u = Va(), s = On.transition;
      On.transition = null;
      try {
        Gn(xr), Ki(e, t, a, i);
      } finally {
        Gn(u), On.transition = s;
      }
    }
    function zs(e, t, a, i) {
      var u = Va(), s = On.transition;
      On.transition = null;
      try {
        Gn(dr), Ki(e, t, a, i);
      } finally {
        Gn(u), On.transition = s;
      }
    }
    function Ki(e, t, a, i) {
      Un && af(e, t, a, i);
    }
    function af(e, t, a, i) {
      var u = xu(e, t, a, i);
      if (u === null) {
        Jy(e, t, i, Oo, a), ph(e, i);
        return;
      }
      if (vh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ph(e, i), t & uu && dh(e)) {
        for (; u !== null; ) {
          var s = Po(u);
          s !== null && bo(s);
          var f = xu(e, t, a, i);
          if (f === null && Jy(e, t, i, Oo, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Jy(e, t, i, null, a);
    }
    var Oo = null;
    function xu(e, t, a, i) {
      Oo = null;
      var u = Sc(i), s = $s(u);
      if (s !== null) {
        var f = Ea(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === K) {
            var h = Td(f);
            if (h !== null)
              return h;
            s = null;
          } else if (p === j) {
            var E = f.stateNode;
            if (Kn(E))
              return bc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Oo = s, null;
    }
    function jr(e) {
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
          return xr;
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
          return dr;
        case "message": {
          var t = wd();
          switch (t) {
            case Dc:
              return xr;
            case Ra:
              return dr;
            case Ci:
            case Oc:
              return qi;
            case kl:
              return Os;
            default:
              return qi;
          }
        }
        default:
          return qi;
      }
    }
    function Kd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ko(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Xi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function lf(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var wu = null, xi = null, Hl = null;
    function Fl(e) {
      return wu = e, xi = of(), !0;
    }
    function uf() {
      wu = null, xi = null, Hl = null;
    }
    function No() {
      if (Hl)
        return Hl;
      var e, t = xi, a = t.length, i, u = of(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Hl = u.slice(e, p), Hl;
    }
    function of() {
      return "value" in wu ? wu.value : wu.textContent;
    }
    function _u(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Du() {
      return !0;
    }
    function Dr() {
      return !1;
    }
    function In(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var h = e[p];
            h ? this[p] = h(s) : this[p] = s[p];
          }
        var E = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return E ? this.isDefaultPrevented = Du : this.isDefaultPrevented = Dr, this.isPropagationStopped = Dr, this;
      }
      return Ct(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Du);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Du);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Du
      }), t;
    }
    var Or = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, kr = In(Or), Lo = Ct({}, Or, {
      view: 0,
      detail: 0
    }), Xd = In(Lo), js, Jd, $a;
    function mh(e) {
      e !== $a && ($a && e.type === "mousemove" ? (js = e.screenX - $a.screenX, Jd = e.screenY - $a.screenY) : (js = 0, Jd = 0), $a = e);
    }
    var Mo = Ct({}, Lo, {
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
      getModifierState: ff,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (mh(e), js);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Jd;
      }
    }), Vl = In(Mo), Zd = Ct({}, Mo, {
      dataTransfer: 0
    }), Ou = In(Zd), yh = Ct({}, Lo, {
      relatedTarget: 0
    }), sf = In(yh), ep = Ct({}, Or, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cf = In(ep), My = Ct({}, Or, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Uy = In(My), gh = Ct({}, Or, {
      data: 0
    }), tp = In(gh), ku = tp, Ay = {
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
      MozPrintableKey: "Unidentified"
    }, Uo = {
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
      224: "Meta"
    };
    function Sh(e) {
      if (e.key) {
        var t = Ay[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = _u(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Uo[e.keyCode] || "Unidentified" : "";
    }
    var An = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function zy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = An[e];
      return i ? !!a[i] : !1;
    }
    function ff(e) {
      return zy;
    }
    var jy = Ct({}, Lo, {
      key: Sh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ff,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? _u(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? _u(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Py = In(jy), Eh = Ct({}, Mo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), np = In(Eh), Hy = Ct({}, Lo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ff
    }), Ia = In(Hy), rp = Ct({}, Or, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Fy = In(rp), Bl = Ct({}, Mo, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), df = In(Bl), Nu = [9, 13, 27, 32], Ps = 229, Hs = At && "CompositionEvent" in window, Lu = null;
    At && "documentMode" in document && (Lu = document.documentMode);
    var Vy = At && "TextEvent" in window && !Lu, pf = At && (!Hs || Lu && Lu > 8 && Lu <= 11), Ch = 32, ap = String.fromCharCode(Ch);
    function Rh() {
      It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), It("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), It("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), It("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Fs = !1;
    function vf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Th(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ip(e, t) {
      return e === "keydown" && t.keyCode === Ps;
    }
    function bh(e, t) {
      switch (e) {
        case "keyup":
          return Nu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ps;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function lp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function hf(e) {
      return e.locale === "ko";
    }
    var Ji = !1;
    function up(e, t, a, i, u) {
      var s, f;
      if (Hs ? s = Th(t) : Ji ? bh(t, i) && (s = "onCompositionEnd") : ip(t, i) && (s = "onCompositionStart"), !s)
        return null;
      pf && !hf(i) && (!Ji && s === "onCompositionStart" ? Ji = Fl(u) : s === "onCompositionEnd" && Ji && (f = No()));
      var p = Oh(a, s);
      if (p.length > 0) {
        var h = new tp(s, t, null, i, u);
        if (e.push({
          event: h,
          listeners: p
        }), f)
          h.data = f;
        else {
          var E = lp(i);
          E !== null && (h.data = E);
        }
      }
    }
    function mf(e, t) {
      switch (e) {
        case "compositionend":
          return lp(t);
        case "keypress":
          var a = t.which;
          return a !== Ch ? null : (Fs = !0, ap);
        case "textInput":
          var i = t.data;
          return i === ap && Fs ? null : i;
        default:
          return null;
      }
    }
    function xh(e, t) {
      if (Ji) {
        if (e === "compositionend" || !Hs && bh(e, t)) {
          var a = No();
          return uf(), Ji = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!vf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return pf && !hf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function By(e, t, a, i, u) {
      var s;
      if (Vy ? s = mf(t, i) : s = xh(t, i), !s)
        return null;
      var f = Oh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ku("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function yf(e, t, a, i, u, s, f) {
      up(e, t, a, i, u), By(e, t, a, i, u);
    }
    var $y = {
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
      week: !0
    };
    function Ao(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!$y[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Iy(e) {
      if (!At)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function gf() {
      It("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Ec(i);
      var u = Oh(t, "onChange");
      if (u.length > 0) {
        var s = new kr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, Sc(e)), hd(d, t);
    }
    function d(e) {
      C0(e, 0);
    }
    function g(e) {
      var t = bf(e);
      if (ro(t))
        return e;
    }
    function b(e, t) {
      if (e === "change")
        return t;
    }
    var O = !1;
    At && (O = Iy("input") && (!document.documentMode || document.documentMode > 9));
    function W(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", se);
    }
    function ue() {
      r && (r.detachEvent("onpropertychange", se), r = null, l = null);
    }
    function se(e) {
      e.propertyName === "value" && g(l) && c(e);
    }
    function le(e, t, a) {
      e === "focusin" ? (ue(), W(t, a)) : e === "focusout" && ue();
    }
    function Ne(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return g(l);
    }
    function He(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function $e(e, t) {
      if (e === "click")
        return g(t);
    }
    function Hn(e, t) {
      if (e === "input" || e === "change")
        return g(t);
    }
    function P(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || et(e, "number", e.value);
    }
    function M(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window, h, E;
      if (o(p) ? h = b : Ao(p) ? O ? h = Hn : (h = Ne, E = le) : He(p) && (h = $e), h) {
        var T = h(t, a);
        if (T) {
          n(e, T, i, u);
          return;
        }
      }
      E && E(t, p, a), t === "focusout" && P(p);
    }
    function B() {
      ge("onMouseEnter", ["mouseout", "mouseover"]), ge("onMouseLeave", ["mouseout", "mouseover"]), ge("onPointerEnter", ["pointerout", "pointerover"]), ge("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ve(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout";
      if (p && !Bv(i)) {
        var E = i.relatedTarget || i.fromElement;
        if (E && ($s(E) || Cp(E)))
          return;
      }
      if (!(!h && !p)) {
        var T;
        if (u.window === u)
          T = u;
        else {
          var U = u.ownerDocument;
          U ? T = U.defaultView || U.parentWindow : T = window;
        }
        var L, $;
        if (h) {
          var Y = i.relatedTarget || i.toElement;
          if (L = a, $ = Y ? $s(Y) : null, $ !== null) {
            var J = Ea($);
            ($ !== J || $.tag !== G && $.tag !== ae) && ($ = null);
          }
        } else
          L = null, $ = a;
        if (L !== $) {
          var Ue = Vl, Je = "onMouseLeave", We = "onMouseEnter", Lt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ue = np, Je = "onPointerLeave", We = "onPointerEnter", Lt = "pointer");
          var wt = L == null ? T : bf(L), F = $ == null ? T : bf($), Z = new Ue(Je, Lt + "leave", L, i, u);
          Z.target = wt, Z.relatedTarget = F;
          var V = null, ce = $s(u);
          if (ce === a) {
            var Ae = new Ue(We, Lt + "enter", $, i, u);
            Ae.target = F, Ae.relatedTarget = wt, V = Ae;
          }
          JT(e, Z, V, L, $);
        }
      }
    }
    function Ye(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Fe = typeof Object.is == "function" ? Object.is : Ye;
    function qe(e, t) {
      if (Fe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Tn.call(t, s) || !Fe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ct(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function lr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ht(e, t) {
      for (var a = ct(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Hi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = ct(lr(a));
      }
    }
    function $l(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Yy(e, u, s, f, p);
    }
    function Yy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, h = 0, E = 0, T = e, U = null;
      e:
        for (; ; ) {
          for (var L = null; T === t && (a === 0 || T.nodeType === Hi) && (f = s + a), T === i && (u === 0 || T.nodeType === Hi) && (p = s + u), T.nodeType === Hi && (s += T.nodeValue.length), (L = T.firstChild) !== null; )
            U = T, T = L;
          for (; ; ) {
            if (T === e)
              break e;
            if (U === t && ++h === a && (f = s), U === i && ++E === u && (p = s), (L = T.nextSibling) !== null)
              break;
            T = U, U = T.parentNode;
          }
          T = L;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function MT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var h = p;
          p = f, f = h;
        }
        var E = Ht(e, f), T = Ht(e, p);
        if (E && T) {
          if (u.rangeCount === 1 && u.anchorNode === E.node && u.anchorOffset === E.offset && u.focusNode === T.node && u.focusOffset === T.offset)
            return;
          var U = a.createRange();
          U.setStart(E.node, E.offset), u.removeAllRanges(), f > p ? (u.addRange(U), u.extend(T.node, T.offset)) : (U.setEnd(T.node, T.offset), u.addRange(U));
        }
      }
    }
    function s0(e) {
      return e && e.nodeType === Hi;
    }
    function c0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : s0(e) ? !1 : s0(t) ? c0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function UT(e) {
      return e && e.ownerDocument && c0(e.ownerDocument.documentElement, e);
    }
    function AT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function f0() {
      for (var e = window, t = Rl(); t instanceof e.HTMLIFrameElement; ) {
        if (AT(t))
          e = t.contentWindow;
        else
          return t;
        t = Rl(e.document);
      }
      return t;
    }
    function Wy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function zT() {
      var e = f0();
      return {
        focusedElem: e,
        selectionRange: Wy(e) ? PT(e) : null
      };
    }
    function jT(e) {
      var t = f0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && UT(a)) {
        i !== null && Wy(a) && HT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === ea && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function PT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = $l(e), t || {
        start: 0,
        end: 0
      };
    }
    function HT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : MT(e, t);
    }
    var FT = At && "documentMode" in document && document.documentMode <= 11;
    function VT() {
      It("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, Qy = null, op = null, qy = !1;
    function BT(e) {
      if ("selectionStart" in e && Wy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function $T(e) {
      return e.window === e ? e.document : e.nodeType === ri ? e : e.ownerDocument;
    }
    function d0(e, t, a) {
      var i = $T(a);
      if (!(qy || Sf == null || Sf !== Rl(i))) {
        var u = BT(Sf);
        if (!op || !qe(op, u)) {
          op = u;
          var s = Oh(Qy, "onSelect");
          if (s.length > 0) {
            var f = new kr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Sf;
          }
        }
      }
    }
    function IT(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window;
      switch (t) {
        case "focusin":
          (Ao(p) || p.contentEditable === "true") && (Sf = p, Qy = a, op = null);
          break;
        case "focusout":
          Sf = null, Qy = null, op = null;
          break;
        case "mousedown":
          qy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          qy = !1, d0(e, i, u);
          break;
        case "selectionchange":
          if (FT)
            break;
        case "keydown":
        case "keyup":
          d0(e, i, u);
      }
    }
    function wh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Ef = {
      animationend: wh("Animation", "AnimationEnd"),
      animationiteration: wh("Animation", "AnimationIteration"),
      animationstart: wh("Animation", "AnimationStart"),
      transitionend: wh("Transition", "TransitionEnd")
    }, Gy = {}, p0 = {};
    At && (p0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ef.animationend.animation, delete Ef.animationiteration.animation, delete Ef.animationstart.animation), "TransitionEvent" in window || delete Ef.transitionend.transition);
    function _h(e) {
      if (Gy[e])
        return Gy[e];
      if (!Ef[e])
        return e;
      var t = Ef[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in p0)
          return Gy[e] = t[a];
      return e;
    }
    var v0 = _h("animationend"), h0 = _h("animationiteration"), m0 = _h("animationstart"), y0 = _h("transitionend"), g0 = /* @__PURE__ */ new Map(), S0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function zo(e, t) {
      g0.set(e, t), It(t, [e]);
    }
    function YT() {
      for (var e = 0; e < S0.length; e++) {
        var t = S0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        zo(a, "on" + i);
      }
      zo(v0, "onAnimationEnd"), zo(h0, "onAnimationIteration"), zo(m0, "onAnimationStart"), zo("dblclick", "onDoubleClick"), zo("focusin", "onFocus"), zo("focusout", "onBlur"), zo(y0, "onTransitionEnd");
    }
    function WT(e, t, a, i, u, s, f) {
      var p = g0.get(t);
      if (p !== void 0) {
        var h = kr, E = t;
        switch (t) {
          case "keypress":
            if (_u(i) === 0)
              return;
          case "keydown":
          case "keyup":
            h = Py;
            break;
          case "focusin":
            E = "focus", h = sf;
            break;
          case "focusout":
            E = "blur", h = sf;
            break;
          case "beforeblur":
          case "afterblur":
            h = sf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Vl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Ou;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Ia;
            break;
          case v0:
          case h0:
          case m0:
            h = cf;
            break;
          case y0:
            h = Fy;
            break;
          case "scroll":
            h = Xd;
            break;
          case "wheel":
            h = df;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Uy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = np;
            break;
        }
        var T = (s & uu) !== 0;
        {
          var U = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", L = KT(a, p, i.type, T, U);
          if (L.length > 0) {
            var $ = new h(p, E, null, i, u);
            e.push({
              event: $,
              listeners: L
            });
          }
        }
      }
    }
    YT(), B(), gf(), VT(), Rh();
    function QT(e, t, a, i, u, s, f) {
      WT(e, t, a, i, u, s);
      var p = (s & Cy) === 0;
      p && (ve(e, t, a, i, u), M(e, t, a, i, u), IT(e, t, a, i, u), yf(e, t, a, i, u));
    }
    var sp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ky = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(sp));
    function E0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, $i(i, t, void 0, e), e.currentTarget = null;
    }
    function qT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, h = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          E0(e, h, p), i = f;
        }
      else
        for (var E = 0; E < t.length; E++) {
          var T = t[E], U = T.instance, L = T.currentTarget, $ = T.listener;
          if (U !== i && e.isPropagationStopped())
            return;
          E0(e, $, L), i = U;
        }
    }
    function C0(e, t) {
      for (var a = (t & uu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        qT(s, f, a);
      }
      Sd();
    }
    function GT(e, t, a, i, u) {
      var s = Sc(a), f = [];
      QT(f, e, i, a, s, t), C0(f, t);
    }
    function kn(e, t) {
      Ky.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = xx(t), u = ZT(e, a);
      i.has(u) || (R0(t, e, fs, a), i.add(u));
    }
    function Xy(e, t, a) {
      Ky.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= uu), R0(a, e, i, t);
    }
    var Dh = "_reactListening" + Math.random().toString(36).slice(2);
    function cp(e) {
      if (!e[Dh]) {
        e[Dh] = !0, De.forEach(function(a) {
          a !== "selectionchange" && (Ky.has(a) || Xy(a, !1, e), Xy(a, !0, e));
        });
        var t = e.nodeType === ri ? e : e.ownerDocument;
        t !== null && (t[Dh] || (t[Dh] = !0, Xy("selectionchange", !1, t)));
      }
    }
    function R0(e, t, a, i, u) {
      var s = Do(e, t, a), f = void 0;
      ms && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Xi(e, t, s, f) : ko(e, t, s) : f !== void 0 ? lf(e, t, s, f) : Kd(e, t, s);
    }
    function T0(e, t) {
      return e === t || e.nodeType === Bn && e.parentNode === t;
    }
    function Jy(e, t, a, i, u) {
      var s = i;
      if (!(t & Vi) && !(t & fs)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var h = p.tag;
              if (h === j || h === X) {
                var E = p.stateNode.containerInfo;
                if (T0(E, f))
                  break;
                if (h === X)
                  for (var T = p.return; T !== null; ) {
                    var U = T.tag;
                    if (U === j || U === X) {
                      var L = T.stateNode.containerInfo;
                      if (T0(L, f))
                        return;
                    }
                    T = T.return;
                  }
                for (; E !== null; ) {
                  var $ = $s(E);
                  if ($ === null)
                    return;
                  var Y = $.tag;
                  if (Y === G || Y === ae) {
                    p = s = $;
                    continue e;
                  }
                  E = E.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      hd(function() {
        return GT(e, t, a, s);
      });
    }
    function fp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function KT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, h = [], E = e, T = null; E !== null; ) {
        var U = E, L = U.stateNode, $ = U.tag;
        if ($ === G && L !== null && (T = L, p !== null)) {
          var Y = su(E, p);
          Y != null && h.push(fp(E, Y, T));
        }
        if (u)
          break;
        E = E.return;
      }
      return h;
    }
    function Oh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === G && f !== null) {
          var h = f, E = su(u, a);
          E != null && i.unshift(fp(u, E, h));
          var T = su(u, t);
          T != null && i.push(fp(u, T, h));
        }
        u = u.return;
      }
      return i;
    }
    function Cf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== G);
      return e || null;
    }
    function XT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Cf(s))
        u++;
      for (var f = 0, p = i; p; p = Cf(p))
        f++;
      for (; u - f > 0; )
        a = Cf(a), u--;
      for (; f - u > 0; )
        i = Cf(i), f--;
      for (var h = u; h--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Cf(a), i = Cf(i);
      }
      return null;
    }
    function b0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var h = p, E = h.alternate, T = h.stateNode, U = h.tag;
        if (E !== null && E === i)
          break;
        if (U === G && T !== null) {
          var L = T;
          if (u) {
            var $ = su(p, s);
            $ != null && f.unshift(fp(p, $, L));
          } else if (!u) {
            var Y = su(p, s);
            Y != null && f.push(fp(p, Y, L));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function JT(e, t, a, i, u) {
      var s = i && u ? XT(i, u) : null;
      i !== null && b0(e, t, i, s, !1), u !== null && a !== null && b0(e, a, u, s, !0);
    }
    function ZT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ya = !1, dp = "dangerouslySetInnerHTML", kh = "suppressContentEditableWarning", jo = "suppressHydrationWarning", x0 = "autoFocus", Vs = "children", Bs = "style", Nh = "__html", Zy, Lh, pp, w0, Mh, _0, D0;
    Zy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Lh = function(e, t) {
      gc(e, t), cd(e, t), Vv(e, t, {
        registrationNameDependencies: Ie,
        possibleRegistrationNames: ft
      });
    }, _0 = At && !document.documentMode, pp = function(e, t, a) {
      if (!Ya) {
        var i = Uh(a), u = Uh(t);
        u !== i && (Ya = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, w0 = function(e) {
      if (!Ya) {
        Ya = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Mh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, D0 = function(e, t) {
      var a = e.namespaceURI === Pi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var eb = /\r\n?/g, tb = /\u0000|\uFFFD/g;
    function Uh(e) {
      Gr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(eb, `
`).replace(tb, "");
    }
    function Ah(e, t, a, i) {
      var u = Uh(t), s = Uh(e);
      if (s !== u && (i && (Ya || (Ya = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Oe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function O0(e) {
      return e.nodeType === ri ? e : e.ownerDocument;
    }
    function nb() {
    }
    function zh(e) {
      e.onclick = nb;
    }
    function rb(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Bs)
            f && Object.freeze(f), Nv(t, f);
          else if (s === dp) {
            var p = f ? f[Nh] : void 0;
            p != null && Ev(t, p);
          } else if (s === Vs)
            if (typeof f == "string") {
              var h = e !== "textarea" || f !== "";
              h && vc(t, f);
            } else
              typeof f == "number" && vc(t, "" + f);
          else
            s === kh || s === jo || s === x0 || (Ie.hasOwnProperty(s) ? f != null && (typeof f != "function" && Mh(s, f), s === "onScroll" && kn("scroll", t)) : f != null && ya(t, s, f, u));
        }
    }
    function ab(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Bs ? Nv(e, f) : s === dp ? Ev(e, f) : s === Vs ? vc(e, f) : ya(e, s, f, i);
      }
    }
    function ib(e, t, a, i) {
      var u, s = O0(a), f, p = i;
      if (p === Pi && (p = dc(e)), p === Pi) {
        if (u = Fi(e, t), !u && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var h = s.createElement("div");
          h.innerHTML = "<script><\/script>";
          var E = h.firstChild;
          f = h.removeChild(E);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var T = f;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Pi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Tn.call(Zy, e) && (Zy[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function lb(e, t) {
      return O0(t).createTextNode(e);
    }
    function ub(e, t, a, i) {
      var u = Fi(t, a);
      Lh(t, a);
      var s;
      switch (t) {
        case "dialog":
          kn("cancel", e), kn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < sp.length; f++)
            kn(sp[f], e);
          s = a;
          break;
        case "source":
          kn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e), s = a;
          break;
        case "details":
          kn("toggle", e), s = a;
          break;
        case "input":
          w(e, a), s = m(e, a), kn("invalid", e);
          break;
        case "option":
          tn(e, a), s = a;
          break;
        case "select":
          us(e, a), s = ls(e, a), kn("invalid", e);
          break;
        case "textarea":
          yv(e, a), s = td(e, a), kn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (mc(t, s), rb(t, e, i, s, u), t) {
        case "input":
          La(e), pe(e, a, !1);
          break;
        case "textarea":
          La(e), Sv(e);
          break;
        case "option":
          on(e, a);
          break;
        case "select":
          Zf(e, a);
          break;
        default:
          typeof s.onClick == "function" && zh(e);
          break;
      }
    }
    function ob(e, t, a, i, u) {
      Lh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = m(e, a), p = m(e, i), s = [];
          break;
        case "select":
          f = ls(e, a), p = ls(e, i), s = [];
          break;
        case "textarea":
          f = td(e, a), p = td(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && zh(e);
          break;
      }
      mc(t, p);
      var h, E, T = null;
      for (h in f)
        if (!(p.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null))
          if (h === Bs) {
            var U = f[h];
            for (E in U)
              U.hasOwnProperty(E) && (T || (T = {}), T[E] = "");
          } else
            h === dp || h === Vs || h === kh || h === jo || h === x0 || (Ie.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
      for (h in p) {
        var L = p[h], $ = f != null ? f[h] : void 0;
        if (!(!p.hasOwnProperty(h) || L === $ || L == null && $ == null))
          if (h === Bs)
            if (L && Object.freeze(L), $) {
              for (E in $)
                $.hasOwnProperty(E) && (!L || !L.hasOwnProperty(E)) && (T || (T = {}), T[E] = "");
              for (E in L)
                L.hasOwnProperty(E) && $[E] !== L[E] && (T || (T = {}), T[E] = L[E]);
            } else
              T || (s || (s = []), s.push(h, T)), T = L;
          else if (h === dp) {
            var Y = L ? L[Nh] : void 0, J = $ ? $[Nh] : void 0;
            Y != null && J !== Y && (s = s || []).push(h, Y);
          } else
            h === Vs ? (typeof L == "string" || typeof L == "number") && (s = s || []).push(h, "" + L) : h === kh || h === jo || (Ie.hasOwnProperty(h) ? (L != null && (typeof L != "function" && Mh(h, L), h === "onScroll" && kn("scroll", e)), !s && $ !== L && (s = [])) : (s = s || []).push(h, L));
      }
      return T && (ss(T, p[Bs]), (s = s || []).push(Bs, T)), s;
    }
    function sb(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && I(e, u);
      var s = Fi(a, i), f = Fi(a, u);
      switch (ab(e, t, s, f), a) {
        case "input":
          q(e, u);
          break;
        case "textarea":
          gv(e, u);
          break;
        case "select":
          fy(e, u);
          break;
      }
    }
    function cb(e) {
      {
        var t = e.toLowerCase();
        return yc.hasOwnProperty(t) && yc[t] || null;
      }
    }
    function fb(e, t, a, i, u, s, f) {
      var p, h;
      switch (p = Fi(t, a), Lh(t, a), t) {
        case "dialog":
          kn("cancel", e), kn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e);
          break;
        case "video":
        case "audio":
          for (var E = 0; E < sp.length; E++)
            kn(sp[E], e);
          break;
        case "source":
          kn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e);
          break;
        case "details":
          kn("toggle", e);
          break;
        case "input":
          w(e, a), kn("invalid", e);
          break;
        case "option":
          tn(e, a);
          break;
        case "select":
          us(e, a), kn("invalid", e);
          break;
        case "textarea":
          yv(e, a), kn("invalid", e);
          break;
      }
      mc(t, a);
      {
        h = /* @__PURE__ */ new Set();
        for (var T = e.attributes, U = 0; U < T.length; U++) {
          var L = T[U].name.toLowerCase();
          switch (L) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              h.add(T[U].name);
          }
        }
      }
      var $ = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var J = a[Y];
          if (Y === Vs)
            typeof J == "string" ? e.textContent !== J && (a[jo] !== !0 && Ah(e.textContent, J, s, f), $ = [Vs, J]) : typeof J == "number" && e.textContent !== "" + J && (a[jo] !== !0 && Ah(e.textContent, J, s, f), $ = [Vs, "" + J]);
          else if (Ie.hasOwnProperty(Y))
            J != null && (typeof J != "function" && Mh(Y, J), Y === "onScroll" && kn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Ue = void 0, Je = p && me ? null : Lr(Y);
            if (a[jo] !== !0) {
              if (!(Y === kh || Y === jo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === dp) {
                  var We = e.innerHTML, Lt = J ? J[Nh] : void 0;
                  if (Lt != null) {
                    var wt = D0(e, Lt);
                    wt !== We && pp(Y, We, wt);
                  }
                } else if (Y === Bs) {
                  if (h.delete(Y), _0) {
                    var F = Sy(J);
                    Ue = e.getAttribute("style"), F !== Ue && pp(Y, Ue, F);
                  }
                } else if (p && !me)
                  h.delete(Y.toLowerCase()), Ue = di(e, Y, J), J !== Ue && pp(Y, Ue, J);
                else if (!xn(Y, Je, p) && !en(Y, J, Je, p)) {
                  var Z = !1;
                  if (Je !== null)
                    h.delete(Je.attributeName), Ue = ma(e, Y, J, Je);
                  else {
                    var V = i;
                    if (V === Pi && (V = dc(t)), V === Pi)
                      h.delete(Y.toLowerCase());
                    else {
                      var ce = cb(Y);
                      ce !== null && ce !== Y && (Z = !0, h.delete(ce)), h.delete(Y);
                    }
                    Ue = di(e, Y, J);
                  }
                  var Ae = me;
                  !Ae && J !== Ue && !Z && pp(Y, Ue, J);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      h.size > 0 && a[jo] !== !0 && w0(h), t) {
        case "input":
          La(e), pe(e, a, !0);
          break;
        case "textarea":
          La(e), Sv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && zh(e);
          break;
      }
      return $;
    }
    function db(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function eg(e, t) {
      {
        if (Ya)
          return;
        Ya = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function tg(e, t) {
      {
        if (Ya)
          return;
        Ya = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ng(e, t, a) {
      {
        if (Ya)
          return;
        Ya = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function rg(e, t) {
      {
        if (t === "" || Ya)
          return;
        Ya = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function pb(e, t, a) {
      switch (t) {
        case "input":
          nt(e, a);
          return;
        case "textarea":
          nd(e, a);
          return;
        case "select":
          dy(e, a);
          return;
      }
    }
    var vp = function() {
    }, hp = function() {
    };
    {
      var vb = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], k0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], hb = k0.concat(["button"]), mb = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], N0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      hp = function(e, t) {
        var a = Ct({}, e || N0), i = {
          tag: t
        };
        return k0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), hb.indexOf(t) !== -1 && (a.pTagInButtonScope = null), vb.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var yb = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return mb.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, gb = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, L0 = {};
      vp = function(e, t, a) {
        a = a || N0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = yb(e, u) ? null : i, f = s ? null : gb(e, a), p = s || f;
        if (p) {
          var h = p.tag, E = !!s + "|" + e + "|" + h;
          if (!L0[E]) {
            L0[E] = !0;
            var T = e, U = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", U = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var L = "";
              h === "table" && e === "tr" && (L += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, h, U, L);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, h);
          }
        }
      };
    }
    var jh = "suppressHydrationWarning", Ph = "$", Hh = "/$", mp = "$?", yp = "$!", Sb = "style", ag = null, ig = null;
    function Eb(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ri:
        case iu: {
          t = i === ri ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : ad(null, "");
          break;
        }
        default: {
          var s = i === Bn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = ad(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), h = hp(null, p);
        return {
          namespace: a,
          ancestorInfo: h
        };
      }
    }
    function Cb(e, t, a) {
      {
        var i = e, u = ad(i.namespace, t), s = hp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function aN(e) {
      return e;
    }
    function Rb(e) {
      ag = ba(), ig = zT();
      var t = null;
      return ir(!1), t;
    }
    function Tb(e) {
      jT(ig), ir(ag), ag = null, ig = null;
    }
    function bb(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (vp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, h = hp(f.ancestorInfo, e);
          vp(null, p, h);
        }
        s = f.namespace;
      }
      var E = ib(e, t, a, s);
      return Ep(u, E), pg(E, t), E;
    }
    function xb(e, t) {
      e.appendChild(t);
    }
    function wb(e, t, a, i, u) {
      switch (ub(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function _b(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, h = hp(f.ancestorInfo, t);
          vp(null, p, h);
        }
      }
      return ob(e, t, a, i);
    }
    function lg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Db(e, t, a, i) {
      {
        var u = a;
        vp(null, e, u.ancestorInfo);
      }
      var s = lb(e, t);
      return Ep(i, s), s;
    }
    function Ob() {
      var e = window.event;
      return e === void 0 ? qi : jr(e.type);
    }
    var ug = typeof setTimeout == "function" ? setTimeout : void 0, kb = typeof clearTimeout == "function" ? clearTimeout : void 0, og = -1, M0 = typeof Promise == "function" ? Promise : void 0, Nb = typeof queueMicrotask == "function" ? queueMicrotask : typeof M0 < "u" ? function(e) {
      return M0.resolve(null).then(e).catch(Lb);
    } : ug;
    function Lb(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Mb(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function Ub(e, t, a, i, u, s) {
      sb(e, t, a, i, u), pg(e, u);
    }
    function U0(e) {
      vc(e, "");
    }
    function Ab(e, t, a) {
      e.nodeValue = a;
    }
    function zb(e, t) {
      e.appendChild(t);
    }
    function jb(e, t) {
      var a;
      e.nodeType === Bn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && zh(a);
    }
    function Pb(e, t, a) {
      e.insertBefore(t, a);
    }
    function Hb(e, t, a) {
      e.nodeType === Bn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Fb(e, t) {
      e.removeChild(t);
    }
    function Vb(e, t) {
      e.nodeType === Bn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function sg(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Bn) {
          var s = u.data;
          if (s === Hh)
            if (i === 0) {
              e.removeChild(u), xt(t);
              return;
            } else
              i--;
          else
            (s === Ph || s === mp || s === yp) && i++;
        }
        a = u;
      } while (a);
      xt(t);
    }
    function Bb(e, t) {
      e.nodeType === Bn ? sg(e.parentNode, t) : e.nodeType === ea && sg(e, t), xt(e);
    }
    function $b(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Ib(e) {
      e.nodeValue = "";
    }
    function Yb(e, t) {
      e = e;
      var a = t[Sb], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = hc("display", i);
    }
    function Wb(e, t) {
      e.nodeValue = t;
    }
    function Qb(e) {
      e.nodeType === ea ? e.textContent = "" : e.nodeType === ri && e.documentElement && e.removeChild(e.documentElement);
    }
    function qb(e, t, a) {
      return e.nodeType !== ea || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Gb(e, t) {
      return t === "" || e.nodeType !== Hi ? null : e;
    }
    function Kb(e) {
      return e.nodeType !== Bn ? null : e;
    }
    function A0(e) {
      return e.data === mp;
    }
    function cg(e) {
      return e.data === yp;
    }
    function Xb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Jb(e, t) {
      e._reactRetry = t;
    }
    function Fh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ea || t === Hi)
          break;
        if (t === Bn) {
          var a = e.data;
          if (a === Ph || a === yp || a === mp)
            break;
          if (a === Hh)
            return null;
        }
      }
      return e;
    }
    function gp(e) {
      return Fh(e.nextSibling);
    }
    function Zb(e) {
      return Fh(e.firstChild);
    }
    function ex(e) {
      return Fh(e.firstChild);
    }
    function tx(e) {
      return Fh(e.nextSibling);
    }
    function nx(e, t, a, i, u, s, f) {
      Ep(s, e), pg(e, a);
      var p;
      {
        var h = u;
        p = h.namespace;
      }
      var E = (s.mode & Tt) !== tt;
      return fb(e, t, a, p, i, E, f);
    }
    function rx(e, t, a, i) {
      return Ep(a, e), a.mode & Tt, db(e, t);
    }
    function ax(e, t) {
      Ep(t, e);
    }
    function ix(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Bn) {
          var i = t.data;
          if (i === Hh) {
            if (a === 0)
              return gp(t);
            a--;
          } else
            (i === Ph || i === yp || i === mp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function z0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Bn) {
          var i = t.data;
          if (i === Ph || i === yp || i === mp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Hh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function lx(e) {
      xt(e);
    }
    function ux(e) {
      xt(e);
    }
    function ox(e) {
      return e !== "head" && e !== "body";
    }
    function sx(e, t, a, i) {
      var u = !0;
      Ah(t.nodeValue, a, i, u);
    }
    function cx(e, t, a, i, u, s) {
      if (t[jh] !== !0) {
        var f = !0;
        Ah(i.nodeValue, u, s, f);
      }
    }
    function fx(e, t) {
      t.nodeType === ea ? eg(e, t) : t.nodeType === Bn || tg(e, t);
    }
    function dx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ea ? eg(a, t) : t.nodeType === Bn || tg(a, t));
      }
    }
    function px(e, t, a, i, u) {
      (u || t[jh] !== !0) && (i.nodeType === ea ? eg(a, i) : i.nodeType === Bn || tg(a, i));
    }
    function vx(e, t, a) {
      ng(e, t);
    }
    function hx(e, t) {
      rg(e, t);
    }
    function mx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ng(i, t);
      }
    }
    function yx(e, t) {
      {
        var a = e.parentNode;
        a !== null && rg(a, t);
      }
    }
    function gx(e, t, a, i, u, s) {
      (s || t[jh] !== !0) && ng(a, i);
    }
    function Sx(e, t, a, i, u) {
      (u || t[jh] !== !0) && rg(a, i);
    }
    function Ex(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Cx(e) {
      cp(e);
    }
    var Rf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Rf, fg = "__reactProps$" + Rf, Sp = "__reactContainer$" + Rf, dg = "__reactEvents$" + Rf, Rx = "__reactListeners$" + Rf, Tx = "__reactHandles$" + Rf;
    function bx(e) {
      delete e[Tf], delete e[fg], delete e[dg], delete e[Rx], delete e[Tx];
    }
    function Ep(e, t) {
      t[Tf] = e;
    }
    function Vh(e, t) {
      t[Sp] = e;
    }
    function j0(e) {
      e[Sp] = null;
    }
    function Cp(e) {
      return !!e[Sp];
    }
    function $s(e) {
      var t = e[Tf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Sp] || a[Tf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = z0(e); u !== null; ) {
              var s = u[Tf];
              if (s)
                return s;
              u = z0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Po(e) {
      var t = e[Tf] || e[Sp];
      return t && (t.tag === G || t.tag === ae || t.tag === K || t.tag === j) ? t : null;
    }
    function bf(e) {
      if (e.tag === G || e.tag === ae)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Bh(e) {
      return e[fg] || null;
    }
    function pg(e, t) {
      e[fg] = t;
    }
    function xx(e) {
      var t = e[dg];
      return t === void 0 && (t = e[dg] = /* @__PURE__ */ new Set()), t;
    }
    var P0 = {}, H0 = S.ReactDebugCurrentFrame;
    function $h(e) {
      if (e) {
        var t = e._owner, a = yi(e.type, e._source, t ? t.type : null);
        H0.setExtraStackFrame(a);
      } else
        H0.setExtraStackFrame(null);
    }
    function Zi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Tn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var h = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              p = E;
            }
            p && !(p instanceof Error) && ($h(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), $h(null)), p instanceof Error && !(p.message in P0) && (P0[p.message] = !0, $h(u), y("Failed %s type: %s", a, p.message), $h(null));
          }
      }
    }
    var vg = [], Ih;
    Ih = [];
    var Mu = -1;
    function Ho(e) {
      return {
        current: e
      };
    }
    function sa(e, t) {
      if (Mu < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== Ih[Mu] && y("Unexpected Fiber popped."), e.current = vg[Mu], vg[Mu] = null, Ih[Mu] = null, Mu--;
    }
    function ca(e, t, a) {
      Mu++, vg[Mu] = e.current, Ih[Mu] = a, e.current = t;
    }
    var hg;
    hg = {};
    var oi = {};
    Object.freeze(oi);
    var Uu = Ho(oi), Il = Ho(!1), mg = oi;
    function xf(e, t, a) {
      return a && Yl(t) ? mg : Uu.current;
    }
    function F0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function wf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return oi;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = dt(e) || "Unknown";
          Zi(i, s, "context", p);
        }
        return u && F0(e, t, s), s;
      }
    }
    function Yh() {
      return Il.current;
    }
    function Yl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Wh(e) {
      sa(Il, e), sa(Uu, e);
    }
    function yg(e) {
      sa(Il, e), sa(Uu, e);
    }
    function V0(e, t, a) {
      {
        if (Uu.current !== oi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ca(Uu, t, e), ca(Il, a, e);
      }
    }
    function B0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = dt(e) || "Unknown";
            hg[s] || (hg[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((dt(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var h = dt(e) || "Unknown";
          Zi(u, f, "child context", h);
        }
        return Ct({}, a, f);
      }
    }
    function Qh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || oi;
        return mg = Uu.current, ca(Uu, a, e), ca(Il, Il.current, e), !0;
      }
    }
    function $0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = B0(e, t, mg);
          i.__reactInternalMemoizedMergedChildContext = u, sa(Il, e), sa(Uu, e), ca(Uu, u, e), ca(Il, a, e);
        } else
          sa(Il, e), ca(Il, a, e);
      }
    }
    function wx(e) {
      {
        if (!bd(e) || e.tag !== A)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case j:
              return t.stateNode.context;
            case A: {
              var a = t.type;
              if (Yl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Fo = 0, qh = 1, Au = null, gg = !1, Sg = !1;
    function I0(e) {
      Au === null ? Au = [e] : Au.push(e);
    }
    function _x(e) {
      gg = !0, I0(e);
    }
    function Y0() {
      gg && Vo();
    }
    function Vo() {
      if (!Sg && Au !== null) {
        Sg = !0;
        var e = 0, t = Va();
        try {
          var a = !0, i = Au;
          for (Gn(xr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Au = null, gg = !1;
        } catch (s) {
          throw Au !== null && (Au = Au.slice(e + 1)), wc(Dc, Vo), s;
        } finally {
          Gn(t), Sg = !1;
        }
      }
      return null;
    }
    var _f = [], Df = 0, Gh = null, Kh = 0, wi = [], _i = 0, Is = null, zu = 1, ju = "";
    function Dx(e) {
      return Ws(), (e.flags & Cd) !== Ke;
    }
    function Ox(e) {
      return Ws(), Kh;
    }
    function kx() {
      var e = ju, t = zu, a = t & ~Nx(t);
      return a.toString(32) + e;
    }
    function Ys(e, t) {
      Ws(), _f[Df++] = Kh, _f[Df++] = Gh, Gh = e, Kh = t;
    }
    function W0(e, t, a) {
      Ws(), wi[_i++] = zu, wi[_i++] = ju, wi[_i++] = Is, Is = e;
      var i = zu, u = ju, s = Xh(i) - 1, f = i & ~(1 << s), p = a + 1, h = Xh(t) + s;
      if (h > 30) {
        var E = s - s % 5, T = (1 << E) - 1, U = (f & T).toString(32), L = f >> E, $ = s - E, Y = Xh(t) + $, J = p << $, Ue = J | L, Je = U + u;
        zu = 1 << Y | Ue, ju = Je;
      } else {
        var We = p << s, Lt = We | f, wt = u;
        zu = 1 << h | Lt, ju = wt;
      }
    }
    function Eg(e) {
      Ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ys(e, a), W0(e, a, i);
      }
    }
    function Xh(e) {
      return 32 - Uc(e);
    }
    function Nx(e) {
      return 1 << Xh(e) - 1;
    }
    function Cg(e) {
      for (; e === Gh; )
        Gh = _f[--Df], _f[Df] = null, Kh = _f[--Df], _f[Df] = null;
      for (; e === Is; )
        Is = wi[--_i], wi[_i] = null, ju = wi[--_i], wi[_i] = null, zu = wi[--_i], wi[_i] = null;
    }
    function Lx() {
      return Ws(), Is !== null ? {
        id: zu,
        overflow: ju
      } : null;
    }
    function Mx(e, t) {
      Ws(), wi[_i++] = zu, wi[_i++] = ju, wi[_i++] = Is, zu = t.id, ju = t.overflow, Is = e;
    }
    function Ws() {
      Hr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Pr = null, Di = null, el = !1, Qs = !1, Bo = null;
    function Ux() {
      el && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Q0() {
      Qs = !0;
    }
    function Ax() {
      return Qs;
    }
    function zx(e) {
      var t = e.stateNode.containerInfo;
      return Di = ex(t), Pr = e, el = !0, Bo = null, Qs = !1, !0;
    }
    function jx(e, t, a) {
      return Di = tx(t), Pr = e, el = !0, Bo = null, Qs = !1, a !== null && Mx(e, a), !0;
    }
    function q0(e, t) {
      switch (e.tag) {
        case j: {
          fx(e.stateNode.containerInfo, t);
          break;
        }
        case G: {
          var a = (e.mode & Tt) !== tt;
          px(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case K: {
          var i = e.memoizedState;
          i.dehydrated !== null && dx(i.dehydrated, t);
          break;
        }
      }
    }
    function G0(e, t) {
      q0(e, t);
      var a = FD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Wt) : i.push(a);
    }
    function Rg(e, t) {
      {
        if (Qs)
          return;
        switch (e.tag) {
          case j: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case G:
                var i = t.type;
                t.pendingProps, vx(a, i);
                break;
              case ae:
                var u = t.pendingProps;
                hx(a, u);
                break;
            }
            break;
          }
          case G: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case G: {
                var h = t.type, E = t.pendingProps, T = (e.mode & Tt) !== tt;
                gx(
                  s,
                  f,
                  p,
                  h,
                  E,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case ae: {
                var U = t.pendingProps, L = (e.mode & Tt) !== tt;
                Sx(
                  s,
                  f,
                  p,
                  U,
                  // TODO: Delete this argument when we remove the legacy root API.
                  L
                );
                break;
              }
            }
            break;
          }
          case K: {
            var $ = e.memoizedState, Y = $.dehydrated;
            if (Y !== null)
              switch (t.tag) {
                case G:
                  var J = t.type;
                  t.pendingProps, mx(Y, J);
                  break;
                case ae:
                  var Ue = t.pendingProps;
                  yx(Y, Ue);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function K0(e, t) {
      t.flags = t.flags & ~za | mn, Rg(e, t);
    }
    function X0(e, t) {
      switch (e.tag) {
        case G: {
          var a = e.type;
          e.pendingProps;
          var i = qb(t, a);
          return i !== null ? (e.stateNode = i, Pr = e, Di = Zb(i), !0) : !1;
        }
        case ae: {
          var u = e.pendingProps, s = Gb(t, u);
          return s !== null ? (e.stateNode = s, Pr = e, Di = null, !0) : !1;
        }
        case K: {
          var f = Kb(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Lx(),
              retryLane: ua
            };
            e.memoizedState = p;
            var h = VD(f);
            return h.return = e, e.child = h, Pr = e, Di = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Tg(e) {
      return (e.mode & Tt) !== tt && (e.flags & st) === Ke;
    }
    function bg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function xg(e) {
      if (el) {
        var t = Di;
        if (!t) {
          Tg(e) && (Rg(Pr, e), bg()), K0(Pr, e), el = !1, Pr = e;
          return;
        }
        var a = t;
        if (!X0(e, t)) {
          Tg(e) && (Rg(Pr, e), bg()), t = gp(a);
          var i = Pr;
          if (!t || !X0(e, t)) {
            K0(Pr, e), el = !1, Pr = e;
            return;
          }
          G0(i, a);
        }
      }
    }
    function Px(e, t, a) {
      var i = e.stateNode, u = !Qs, s = nx(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Hx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = rx(t, a, e);
      if (i) {
        var u = Pr;
        if (u !== null)
          switch (u.tag) {
            case j: {
              var s = u.stateNode.containerInfo, f = (u.mode & Tt) !== tt;
              sx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case G: {
              var p = u.type, h = u.memoizedProps, E = u.stateNode, T = (u.mode & Tt) !== tt;
              cx(
                p,
                h,
                E,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function Fx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      ax(a, e);
    }
    function Vx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ix(a);
    }
    function J0(e) {
      for (var t = e.return; t !== null && t.tag !== G && t.tag !== j && t.tag !== K; )
        t = t.return;
      Pr = t;
    }
    function Jh(e) {
      if (e !== Pr)
        return !1;
      if (!el)
        return J0(e), el = !0, !1;
      if (e.tag !== j && (e.tag !== G || ox(e.type) && !lg(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (Tg(e))
            Z0(e), bg();
          else
            for (; t; )
              G0(e, t), t = gp(t);
      }
      return J0(e), e.tag === K ? Di = Vx(e) : Di = Pr ? gp(e.stateNode) : null, !0;
    }
    function Bx() {
      return el && Di !== null;
    }
    function Z0(e) {
      for (var t = Di; t; )
        q0(e, t), t = gp(t);
    }
    function Of() {
      Pr = null, Di = null, el = !1, Qs = !1;
    }
    function eC() {
      Bo !== null && (q1(Bo), Bo = null);
    }
    function Hr() {
      return el;
    }
    function wg(e) {
      Bo === null ? Bo = [e] : Bo.push(e);
    }
    var $x = S.ReactCurrentBatchConfig, Ix = null;
    function Yx() {
      return $x.transition;
    }
    var tl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Wx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Dn && (t = a), a = a.return;
        return t;
      }, qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Rp = [], Tp = [], bp = [], xp = [], wp = [], _p = [], Gs = /* @__PURE__ */ new Set();
      tl.recordUnsafeLifecycleWarnings = function(e, t) {
        Gs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Rp.push(e), e.mode & Dn && typeof t.UNSAFE_componentWillMount == "function" && Tp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && bp.push(e), e.mode & Dn && typeof t.UNSAFE_componentWillReceiveProps == "function" && xp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && wp.push(e), e.mode & Dn && typeof t.UNSAFE_componentWillUpdate == "function" && _p.push(e));
      }, tl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(L) {
          e.add(dt(L) || "Component"), Gs.add(L.type);
        }), Rp = []);
        var t = /* @__PURE__ */ new Set();
        Tp.length > 0 && (Tp.forEach(function(L) {
          t.add(dt(L) || "Component"), Gs.add(L.type);
        }), Tp = []);
        var a = /* @__PURE__ */ new Set();
        bp.length > 0 && (bp.forEach(function(L) {
          a.add(dt(L) || "Component"), Gs.add(L.type);
        }), bp = []);
        var i = /* @__PURE__ */ new Set();
        xp.length > 0 && (xp.forEach(function(L) {
          i.add(dt(L) || "Component"), Gs.add(L.type);
        }), xp = []);
        var u = /* @__PURE__ */ new Set();
        wp.length > 0 && (wp.forEach(function(L) {
          u.add(dt(L) || "Component"), Gs.add(L.type);
        }), wp = []);
        var s = /* @__PURE__ */ new Set();
        if (_p.length > 0 && (_p.forEach(function(L) {
          s.add(dt(L) || "Component"), Gs.add(L.type);
        }), _p = []), t.size > 0) {
          var f = qs(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = qs(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var h = qs(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, h);
        }
        if (e.size > 0) {
          var E = qs(e);
          D(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (a.size > 0) {
          var T = qs(a);
          D(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (u.size > 0) {
          var U = qs(u);
          D(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, U);
        }
      };
      var Zh = /* @__PURE__ */ new Map(), tC = /* @__PURE__ */ new Set();
      tl.recordLegacyContextWarning = function(e, t) {
        var a = Wx(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!tC.has(e.type)) {
          var i = Zh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Zh.set(a, i)), i.push(e));
        }
      }, tl.flushLegacyContextWarning = function() {
        Zh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(dt(s) || "Component"), tC.add(s.type);
            });
            var u = qs(i);
            try {
              Kt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Ln();
            }
          }
        });
      }, tl.discardPendingWarnings = function() {
        Rp = [], Tp = [], bp = [], xp = [], wp = [], _p = [], Zh = /* @__PURE__ */ new Map();
      };
    }
    function nl(e, t) {
      if (e && e.defaultProps) {
        var a = Ct({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var _g = Ho(null), Dg;
    Dg = {};
    var em = null, kf = null, Og = null, tm = !1;
    function nm() {
      em = null, kf = null, Og = null, tm = !1;
    }
    function nC() {
      tm = !0;
    }
    function rC() {
      tm = !1;
    }
    function aC(e, t, a) {
      ca(_g, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Dg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Dg;
    }
    function kg(e, t) {
      var a = _g.current;
      sa(_g, t), e._currentValue = a;
    }
    function Ng(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ru(i.childLanes, t) ? u !== null && !Ru(u.childLanes, t) && (u.childLanes = St(u.childLanes, t)) : (i.childLanes = St(i.childLanes, t), u !== null && (u.childLanes = St(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Qx(e, t, a) {
      qx(e, t, a);
    }
    function qx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === A) {
                var p = qn(a), h = Pu(cn, p);
                h.tag = am;
                var E = i.updateQueue;
                if (E !== null) {
                  var T = E.shared, U = T.pending;
                  U === null ? h.next = h : (h.next = U.next, U.next = h), T.pending = h;
                }
              }
              i.lanes = St(i.lanes, a);
              var L = i.alternate;
              L !== null && (L.lanes = St(L.lanes, a)), Ng(i.return, a, e), s.lanes = St(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === we)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Ft) {
          var $ = i.return;
          if ($ === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          $.lanes = St($.lanes, a);
          var Y = $.alternate;
          Y !== null && (Y.lanes = St(Y.lanes, a)), Ng($, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var J = u.sibling;
            if (J !== null) {
              J.return = u.return, u = J;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Nf(e, t) {
      em = e, kf = null, Og = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && Vp(), a.firstContext = null);
      }
    }
    function ur(e) {
      tm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Og !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (em === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, em.dependencies = {
            lanes: ee,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Ks = null;
    function Lg(e) {
      Ks === null ? Ks = [e] : Ks.push(e);
    }
    function Gx() {
      if (Ks !== null) {
        for (var e = 0; e < Ks.length; e++) {
          var t = Ks[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ks = null;
      }
    }
    function iC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Lg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, rm(e, i);
    }
    function Kx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, Lg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Xx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Lg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, rm(e, i);
    }
    function Wa(e, t) {
      return rm(e, t);
    }
    var Jx = rm;
    function rm(e, t) {
      e.lanes = St(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = St(a.lanes, t)), a === null && (e.flags & (mn | za)) !== Ke && lR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = St(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = St(a.childLanes, t) : (u.flags & (mn | za)) !== Ke && lR(e), i = u, u = u.return;
      if (i.tag === j) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var lC = 0, uC = 1, am = 2, Mg = 3, im = !1, Ug, lm;
    Ug = !1, lm = null;
    function Ag(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ee
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function oC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: lC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function $o(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (lm === u && !Ug && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Ug = !0), J_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Jx(e, a);
      } else
        return Xx(e, u, t, a);
    }
    function um(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (jd(a)) {
          var s = u.lanes;
          s = Hd(s, e.pendingLanes);
          var f = St(s, a);
          u.lanes = f, To(e, f);
        }
      }
    }
    function zg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var h = p;
            do {
              var E = {
                eventTime: h.eventTime,
                lane: h.lane,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              };
              f === null ? s = f = E : (f.next = E, f = E), h = h.next;
            } while (h !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function Zx(e, t, a, i, u, s) {
      switch (a.tag) {
        case uC: {
          var f = a.payload;
          if (typeof f == "function") {
            nC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Dn) {
                Qn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Qn(!1);
                }
              }
              rC();
            }
            return p;
          }
          return f;
        }
        case Mg:
          e.flags = e.flags & ~nr | st;
        case lC: {
          var h = a.payload, E;
          if (typeof h == "function") {
            nC(), E = h.call(s, i, u);
            {
              if (e.mode & Dn) {
                Qn(!0);
                try {
                  h.call(s, i, u);
                } finally {
                  Qn(!1);
                }
              }
              rC();
            }
          } else
            E = h;
          return E == null ? i : Ct({}, i, E);
        }
        case am:
          return im = !0, i;
      }
      return i;
    }
    function om(e, t, a, i) {
      var u = e.updateQueue;
      im = !1, lm = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var h = p, E = h.next;
        h.next = null, f === null ? s = E : f.next = E, f = h;
        var T = e.alternate;
        if (T !== null) {
          var U = T.updateQueue, L = U.lastBaseUpdate;
          L !== f && (L === null ? U.firstBaseUpdate = E : L.next = E, U.lastBaseUpdate = h);
        }
      }
      if (s !== null) {
        var $ = u.baseState, Y = ee, J = null, Ue = null, Je = null, We = s;
        do {
          var Lt = We.lane, wt = We.eventTime;
          if (Ru(i, Lt)) {
            if (Je !== null) {
              var Z = {
                eventTime: wt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                tag: We.tag,
                payload: We.payload,
                callback: We.callback,
                next: null
              };
              Je = Je.next = Z;
            }
            $ = Zx(e, u, We, $, t, a);
            var V = We.callback;
            if (V !== null && // If the update was already committed, we should not queue its
            // callback again.
            We.lane !== kt) {
              e.flags |= Ei;
              var ce = u.effects;
              ce === null ? u.effects = [We] : ce.push(We);
            }
          } else {
            var F = {
              eventTime: wt,
              lane: Lt,
              tag: We.tag,
              payload: We.payload,
              callback: We.callback,
              next: null
            };
            Je === null ? (Ue = Je = F, J = $) : Je = Je.next = F, Y = St(Y, Lt);
          }
          if (We = We.next, We === null) {
            if (p = u.shared.pending, p === null)
              break;
            var Ae = p, ke = Ae.next;
            Ae.next = null, We = ke, u.lastBaseUpdate = Ae, u.shared.pending = null;
          }
        } while (!0);
        Je === null && (J = $), u.baseState = J, u.firstBaseUpdate = Ue, u.lastBaseUpdate = Je;
        var ot = u.shared.interleaved;
        if (ot !== null) {
          var ht = ot;
          do
            Y = St(Y, ht.lane), ht = ht.next;
          while (ht !== ot);
        } else
          s === null && (u.shared.lanes = ee);
        Zp(Y), e.lanes = Y, e.memoizedState = $;
      }
      lm = null;
    }
    function ew(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function sC() {
      im = !1;
    }
    function sm() {
      return im;
    }
    function cC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, ew(f, a));
        }
    }
    var jg = {}, fC = new v.Component().refs, Pg, Hg, Fg, Vg, Bg, dC, cm, $g, Ig, Yg;
    {
      Pg = /* @__PURE__ */ new Set(), Hg = /* @__PURE__ */ new Set(), Fg = /* @__PURE__ */ new Set(), Vg = /* @__PURE__ */ new Set(), $g = /* @__PURE__ */ new Set(), Bg = /* @__PURE__ */ new Set(), Ig = /* @__PURE__ */ new Set(), Yg = /* @__PURE__ */ new Set();
      var pC = /* @__PURE__ */ new Set();
      cm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          pC.has(a) || (pC.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, dC = function(e, t) {
        if (t === void 0) {
          var a = jt(e) || "Component";
          Bg.has(a) || (Bg.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(jg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(jg);
    }
    function Wg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Dn) {
          Qn(!0);
          try {
            s = a(i, u);
          } finally {
            Qn(!1);
          }
        }
        dC(t, s);
      }
      var f = s == null ? u : Ct({}, u, s);
      if (e.memoizedState = f, e.lanes === ee) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Qg = {
      isMounted: Ca,
      enqueueSetState: function(e, t, a) {
        var i = Ua(e), u = _a(), s = Xo(i), f = Pu(u, s);
        f.payload = t, a != null && (cm(a, "setState"), f.callback = a);
        var p = $o(i, f, s);
        p !== null && (Er(p, i, s, u), um(p, i, s)), Al(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ua(e), u = _a(), s = Xo(i), f = Pu(u, s);
        f.tag = uC, f.payload = t, a != null && (cm(a, "replaceState"), f.callback = a);
        var p = $o(i, f, s);
        p !== null && (Er(p, i, s, u), um(p, i, s)), Al(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ua(e), i = _a(), u = Xo(a), s = Pu(i, u);
        s.tag = am, t != null && (cm(t, "forceUpdate"), s.callback = t);
        var f = $o(a, s, u);
        f !== null && (Er(f, a, u, i), um(f, a, u)), Md(a, u);
      }
    };
    function vC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var h = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Dn) {
            Qn(!0);
            try {
              h = p.shouldComponentUpdate(i, s, f);
            } finally {
              Qn(!1);
            }
          }
          h === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", jt(t) || "Component");
        }
        return h;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !qe(a, i) || !qe(u, s) : !0;
    }
    function tw(e, t, a) {
      var i = e.stateNode;
      {
        var u = jt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Ig.has(t) && (Ig.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", jt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Fg.has(t) && (Fg.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", jt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || _t(p)) && y("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function hC(e, t) {
      t.updater = Qg, e.stateNode = t, po(t, e), t._reactInternalInstance = jg;
    }
    function mC(e, t, a) {
      var i = !1, u = oi, s = oi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Ce && f._context === void 0
        );
        if (!p && !Yg.has(t)) {
          Yg.add(t);
          var h = "";
          f === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? h = " However, it is set to a " + typeof f + "." : f.$$typeof === ie ? h = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", jt(t) || "Component", h);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ur(f);
      else {
        u = xf(e, t, !0);
        var E = t.contextTypes;
        i = E != null, s = i ? wf(e, u) : oi;
      }
      var T = new t(a, s);
      if (e.mode & Dn) {
        Qn(!0);
        try {
          T = new t(a, s);
        } finally {
          Qn(!1);
        }
      }
      var U = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      hC(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && U === null) {
          var L = jt(t) || "Component";
          Hg.has(L) || (Hg.add(L), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", L, T.state === null ? "null" : "undefined", L));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var $ = null, Y = null, J = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? $ = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && ($ = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? J = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (J = "UNSAFE_componentWillUpdate"), $ !== null || Y !== null || J !== null) {
            var Ue = jt(t) || "Component", Je = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Vg.has(Ue) || (Vg.add(Ue), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ue, Je, $ !== null ? `
  ` + $ : "", Y !== null ? `
  ` + Y : "", J !== null ? `
  ` + J : ""));
          }
        }
      }
      return i && F0(e, u, s), T;
    }
    function nw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", dt(e) || "Component"), Qg.enqueueReplaceState(t, t.state, null));
    }
    function yC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = dt(e) || "Component";
          Pg.has(s) || (Pg.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Qg.enqueueReplaceState(t, t.state, null);
      }
    }
    function qg(e, t, a, i) {
      tw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = fC, Ag(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = ur(s);
      else {
        var f = xf(e, t, !0);
        u.context = wf(e, f);
      }
      {
        if (u.state === a) {
          var p = jt(t) || "Component";
          $g.has(p) || ($g.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Dn && tl.recordLegacyContextWarning(e, u), tl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var h = t.getDerivedStateFromProps;
      if (typeof h == "function" && (Wg(e, t, h, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (nw(e, u), om(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var E = gt;
        E |= na, (e.mode & Ha) !== tt && (E |= ra), e.flags |= E;
      }
    }
    function rw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, h = oi;
      if (typeof p == "object" && p !== null)
        h = ur(p);
      else {
        var E = xf(e, t, !0);
        h = wf(e, E);
      }
      var T = t.getDerivedStateFromProps, U = typeof T == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !U && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== h) && yC(e, u, a, h), sC();
      var L = e.memoizedState, $ = u.state = L;
      if (om(e, a, u, i), $ = e.memoizedState, s === a && L === $ && !Yh() && !sm()) {
        if (typeof u.componentDidMount == "function") {
          var Y = gt;
          Y |= na, (e.mode & Ha) !== tt && (Y |= ra), e.flags |= Y;
        }
        return !1;
      }
      typeof T == "function" && (Wg(e, t, T, a), $ = e.memoizedState);
      var J = sm() || vC(e, t, s, a, L, $, h);
      if (J) {
        if (!U && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Ue = gt;
          Ue |= na, (e.mode & Ha) !== tt && (Ue |= ra), e.flags |= Ue;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Je = gt;
          Je |= na, (e.mode & Ha) !== tt && (Je |= ra), e.flags |= Je;
        }
        e.memoizedProps = a, e.memoizedState = $;
      }
      return u.props = a, u.state = $, u.context = h, J;
    }
    function aw(e, t, a, i, u) {
      var s = t.stateNode;
      oC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var h = t.pendingProps, E = s.context, T = a.contextType, U = oi;
      if (typeof T == "object" && T !== null)
        U = ur(T);
      else {
        var L = xf(t, a, !0);
        U = wf(t, L);
      }
      var $ = a.getDerivedStateFromProps, Y = typeof $ == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Y && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== h || E !== U) && yC(t, s, i, U), sC();
      var J = t.memoizedState, Ue = s.state = J;
      if (om(t, i, s, u), Ue = t.memoizedState, f === h && J === Ue && !Yh() && !sm() && !Be)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Aa), !1;
      typeof $ == "function" && (Wg(t, a, $, i), Ue = t.memoizedState);
      var Je = sm() || vC(t, a, p, i, J, Ue, U) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Be;
      return Je ? (!Y && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ue, U), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ue, U)), typeof s.componentDidUpdate == "function" && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Aa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Aa), t.memoizedProps = i, t.memoizedState = Ue), s.props = i, s.state = Ue, s.context = U, Je;
    }
    var Gg, Kg, Xg, Jg, Zg, gC = function(e, t) {
    };
    Gg = !1, Kg = !1, Xg = {}, Jg = {}, Zg = {}, gC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = dt(t) || "Component";
        Jg[a] || (Jg[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Dp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Dn || de) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = dt(e) || "Component";
          Xg[u] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Xg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== A)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var h = f;
          Zn(i, "ref");
          var E = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === E)
            return t.ref;
          var T = function(U) {
            var L = h.refs;
            L === fC && (L = h.refs = {}), U === null ? delete L[E] : L[E] = U;
          };
          return T._stringRef = E, T;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function fm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function dm(e) {
      {
        var t = dt(e) || "Component";
        if (Zg[t])
          return;
        Zg[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function SC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function EC(e) {
      function t(F, Z) {
        if (e) {
          var V = F.deletions;
          V === null ? (F.deletions = [Z], F.flags |= Wt) : V.push(Z);
        }
      }
      function a(F, Z) {
        if (!e)
          return null;
        for (var V = Z; V !== null; )
          t(F, V), V = V.sibling;
        return null;
      }
      function i(F, Z) {
        for (var V = /* @__PURE__ */ new Map(), ce = Z; ce !== null; )
          ce.key !== null ? V.set(ce.key, ce) : V.set(ce.index, ce), ce = ce.sibling;
        return V;
      }
      function u(F, Z) {
        var V = ac(F, Z);
        return V.index = 0, V.sibling = null, V;
      }
      function s(F, Z, V) {
        if (F.index = V, !e)
          return F.flags |= Cd, Z;
        var ce = F.alternate;
        if (ce !== null) {
          var Ae = ce.index;
          return Ae < Z ? (F.flags |= mn, Z) : Ae;
        } else
          return F.flags |= mn, Z;
      }
      function f(F) {
        return e && F.alternate === null && (F.flags |= mn), F;
      }
      function p(F, Z, V, ce) {
        if (Z === null || Z.tag !== ae) {
          var Ae = wE(V, F.mode, ce);
          return Ae.return = F, Ae;
        } else {
          var ke = u(Z, V);
          return ke.return = F, ke;
        }
      }
      function h(F, Z, V, ce) {
        var Ae = V.type;
        if (Ae === ga)
          return T(F, Z, V.props.children, ce, V.key);
        if (Z !== null && (Z.elementType === Ae || // Keep this check inline so it only runs on the false path:
        cR(Z, V) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ae == "object" && Ae !== null && Ae.$$typeof === Xe && SC(Ae) === Z.type)) {
          var ke = u(Z, V.props);
          return ke.ref = Dp(F, Z, V), ke.return = F, ke._debugSource = V._source, ke._debugOwner = V._owner, ke;
        }
        var ot = xE(V, F.mode, ce);
        return ot.ref = Dp(F, Z, V), ot.return = F, ot;
      }
      function E(F, Z, V, ce) {
        if (Z === null || Z.tag !== X || Z.stateNode.containerInfo !== V.containerInfo || Z.stateNode.implementation !== V.implementation) {
          var Ae = _E(V, F.mode, ce);
          return Ae.return = F, Ae;
        } else {
          var ke = u(Z, V.children || []);
          return ke.return = F, ke;
        }
      }
      function T(F, Z, V, ce, Ae) {
        if (Z === null || Z.tag !== ne) {
          var ke = Zo(V, F.mode, ce, Ae);
          return ke.return = F, ke;
        } else {
          var ot = u(Z, V);
          return ot.return = F, ot;
        }
      }
      function U(F, Z, V) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var ce = wE("" + Z, F.mode, V);
          return ce.return = F, ce;
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case pi: {
              var Ae = xE(Z, F.mode, V);
              return Ae.ref = Dp(F, null, Z), Ae.return = F, Ae;
            }
            case Mr: {
              var ke = _E(Z, F.mode, V);
              return ke.return = F, ke;
            }
            case Xe: {
              var ot = Z._payload, ht = Z._init;
              return U(F, ht(ot), V);
            }
          }
          if (_t(Z) || Za(Z)) {
            var rn = Zo(Z, F.mode, V, null);
            return rn.return = F, rn;
          }
          fm(F, Z);
        }
        return typeof Z == "function" && dm(F), null;
      }
      function L(F, Z, V, ce) {
        var Ae = Z !== null ? Z.key : null;
        if (typeof V == "string" && V !== "" || typeof V == "number")
          return Ae !== null ? null : p(F, Z, "" + V, ce);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case pi:
              return V.key === Ae ? h(F, Z, V, ce) : null;
            case Mr:
              return V.key === Ae ? E(F, Z, V, ce) : null;
            case Xe: {
              var ke = V._payload, ot = V._init;
              return L(F, Z, ot(ke), ce);
            }
          }
          if (_t(V) || Za(V))
            return Ae !== null ? null : T(F, Z, V, ce, null);
          fm(F, V);
        }
        return typeof V == "function" && dm(F), null;
      }
      function $(F, Z, V, ce, Ae) {
        if (typeof ce == "string" && ce !== "" || typeof ce == "number") {
          var ke = F.get(V) || null;
          return p(Z, ke, "" + ce, Ae);
        }
        if (typeof ce == "object" && ce !== null) {
          switch (ce.$$typeof) {
            case pi: {
              var ot = F.get(ce.key === null ? V : ce.key) || null;
              return h(Z, ot, ce, Ae);
            }
            case Mr: {
              var ht = F.get(ce.key === null ? V : ce.key) || null;
              return E(Z, ht, ce, Ae);
            }
            case Xe:
              var rn = ce._payload, Bt = ce._init;
              return $(F, Z, V, Bt(rn), Ae);
          }
          if (_t(ce) || Za(ce)) {
            var Jn = F.get(V) || null;
            return T(Z, Jn, ce, Ae, null);
          }
          fm(Z, ce);
        }
        return typeof ce == "function" && dm(Z), null;
      }
      function Y(F, Z, V) {
        {
          if (typeof F != "object" || F === null)
            return Z;
          switch (F.$$typeof) {
            case pi:
            case Mr:
              gC(F, V);
              var ce = F.key;
              if (typeof ce != "string")
                break;
              if (Z === null) {
                Z = /* @__PURE__ */ new Set(), Z.add(ce);
                break;
              }
              if (!Z.has(ce)) {
                Z.add(ce);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ce);
              break;
            case Xe:
              var Ae = F._payload, ke = F._init;
              Y(ke(Ae), Z, V);
              break;
          }
        }
        return Z;
      }
      function J(F, Z, V, ce) {
        for (var Ae = null, ke = 0; ke < V.length; ke++) {
          var ot = V[ke];
          Ae = Y(ot, Ae, F);
        }
        for (var ht = null, rn = null, Bt = Z, Jn = 0, $t = 0, Yn = null; Bt !== null && $t < V.length; $t++) {
          Bt.index > $t ? (Yn = Bt, Bt = null) : Yn = Bt.sibling;
          var da = L(F, Bt, V[$t], ce);
          if (da === null) {
            Bt === null && (Bt = Yn);
            break;
          }
          e && Bt && da.alternate === null && t(F, Bt), Jn = s(da, Jn, $t), rn === null ? ht = da : rn.sibling = da, rn = da, Bt = Yn;
        }
        if ($t === V.length) {
          if (a(F, Bt), Hr()) {
            var Wr = $t;
            Ys(F, Wr);
          }
          return ht;
        }
        if (Bt === null) {
          for (; $t < V.length; $t++) {
            var ci = U(F, V[$t], ce);
            ci !== null && (Jn = s(ci, Jn, $t), rn === null ? ht = ci : rn.sibling = ci, rn = ci);
          }
          if (Hr()) {
            var Da = $t;
            Ys(F, Da);
          }
          return ht;
        }
        for (var Oa = i(F, Bt); $t < V.length; $t++) {
          var pa = $(Oa, F, $t, V[$t], ce);
          pa !== null && (e && pa.alternate !== null && Oa.delete(pa.key === null ? $t : pa.key), Jn = s(pa, Jn, $t), rn === null ? ht = pa : rn.sibling = pa, rn = pa);
        }
        if (e && Oa.forEach(function(qf) {
          return t(F, qf);
        }), Hr()) {
          var Iu = $t;
          Ys(F, Iu);
        }
        return ht;
      }
      function Ue(F, Z, V, ce) {
        var Ae = Za(V);
        if (typeof Ae != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          V[Symbol.toStringTag] === "Generator" && (Kg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Kg = !0), V.entries === Ae && (Gg || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gg = !0);
          var ke = Ae.call(V);
          if (ke)
            for (var ot = null, ht = ke.next(); !ht.done; ht = ke.next()) {
              var rn = ht.value;
              ot = Y(rn, ot, F);
            }
        }
        var Bt = Ae.call(V);
        if (Bt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Jn = null, $t = null, Yn = Z, da = 0, Wr = 0, ci = null, Da = Bt.next(); Yn !== null && !Da.done; Wr++, Da = Bt.next()) {
          Yn.index > Wr ? (ci = Yn, Yn = null) : ci = Yn.sibling;
          var Oa = L(F, Yn, Da.value, ce);
          if (Oa === null) {
            Yn === null && (Yn = ci);
            break;
          }
          e && Yn && Oa.alternate === null && t(F, Yn), da = s(Oa, da, Wr), $t === null ? Jn = Oa : $t.sibling = Oa, $t = Oa, Yn = ci;
        }
        if (Da.done) {
          if (a(F, Yn), Hr()) {
            var pa = Wr;
            Ys(F, pa);
          }
          return Jn;
        }
        if (Yn === null) {
          for (; !Da.done; Wr++, Da = Bt.next()) {
            var Iu = U(F, Da.value, ce);
            Iu !== null && (da = s(Iu, da, Wr), $t === null ? Jn = Iu : $t.sibling = Iu, $t = Iu);
          }
          if (Hr()) {
            var qf = Wr;
            Ys(F, qf);
          }
          return Jn;
        }
        for (var av = i(F, Yn); !Da.done; Wr++, Da = Bt.next()) {
          var Zl = $(av, F, Wr, Da.value, ce);
          Zl !== null && (e && Zl.alternate !== null && av.delete(Zl.key === null ? Wr : Zl.key), da = s(Zl, da, Wr), $t === null ? Jn = Zl : $t.sibling = Zl, $t = Zl);
        }
        if (e && av.forEach(function(gO) {
          return t(F, gO);
        }), Hr()) {
          var yO = Wr;
          Ys(F, yO);
        }
        return Jn;
      }
      function Je(F, Z, V, ce) {
        if (Z !== null && Z.tag === ae) {
          a(F, Z.sibling);
          var Ae = u(Z, V);
          return Ae.return = F, Ae;
        }
        a(F, Z);
        var ke = wE(V, F.mode, ce);
        return ke.return = F, ke;
      }
      function We(F, Z, V, ce) {
        for (var Ae = V.key, ke = Z; ke !== null; ) {
          if (ke.key === Ae) {
            var ot = V.type;
            if (ot === ga) {
              if (ke.tag === ne) {
                a(F, ke.sibling);
                var ht = u(ke, V.props.children);
                return ht.return = F, ht._debugSource = V._source, ht._debugOwner = V._owner, ht;
              }
            } else if (ke.elementType === ot || // Keep this check inline so it only runs on the false path:
            cR(ke, V) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ot == "object" && ot !== null && ot.$$typeof === Xe && SC(ot) === ke.type) {
              a(F, ke.sibling);
              var rn = u(ke, V.props);
              return rn.ref = Dp(F, ke, V), rn.return = F, rn._debugSource = V._source, rn._debugOwner = V._owner, rn;
            }
            a(F, ke);
            break;
          } else
            t(F, ke);
          ke = ke.sibling;
        }
        if (V.type === ga) {
          var Bt = Zo(V.props.children, F.mode, ce, V.key);
          return Bt.return = F, Bt;
        } else {
          var Jn = xE(V, F.mode, ce);
          return Jn.ref = Dp(F, Z, V), Jn.return = F, Jn;
        }
      }
      function Lt(F, Z, V, ce) {
        for (var Ae = V.key, ke = Z; ke !== null; ) {
          if (ke.key === Ae)
            if (ke.tag === X && ke.stateNode.containerInfo === V.containerInfo && ke.stateNode.implementation === V.implementation) {
              a(F, ke.sibling);
              var ot = u(ke, V.children || []);
              return ot.return = F, ot;
            } else {
              a(F, ke);
              break;
            }
          else
            t(F, ke);
          ke = ke.sibling;
        }
        var ht = _E(V, F.mode, ce);
        return ht.return = F, ht;
      }
      function wt(F, Z, V, ce) {
        var Ae = typeof V == "object" && V !== null && V.type === ga && V.key === null;
        if (Ae && (V = V.props.children), typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case pi:
              return f(We(F, Z, V, ce));
            case Mr:
              return f(Lt(F, Z, V, ce));
            case Xe:
              var ke = V._payload, ot = V._init;
              return wt(F, Z, ot(ke), ce);
          }
          if (_t(V))
            return J(F, Z, V, ce);
          if (Za(V))
            return Ue(F, Z, V, ce);
          fm(F, V);
        }
        return typeof V == "string" && V !== "" || typeof V == "number" ? f(Je(F, Z, "" + V, ce)) : (typeof V == "function" && dm(F), a(F, Z));
      }
      return wt;
    }
    var Lf = EC(!0), CC = EC(!1);
    function iw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ac(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ac(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function lw(e, t) {
      for (var a = e.child; a !== null; )
        AD(a, t), a = a.sibling;
    }
    var Op = {}, Io = Ho(Op), kp = Ho(Op), pm = Ho(Op);
    function vm(e) {
      if (e === Op)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function RC() {
      var e = vm(pm.current);
      return e;
    }
    function eS(e, t) {
      ca(pm, t, e), ca(kp, e, e), ca(Io, Op, e);
      var a = Eb(t);
      sa(Io, e), ca(Io, a, e);
    }
    function Mf(e) {
      sa(Io, e), sa(kp, e), sa(pm, e);
    }
    function tS() {
      var e = vm(Io.current);
      return e;
    }
    function TC(e) {
      vm(pm.current);
      var t = vm(Io.current), a = Cb(t, e.type);
      t !== a && (ca(kp, e, e), ca(Io, a, e));
    }
    function nS(e) {
      kp.current === e && (sa(Io, e), sa(kp, e));
    }
    var uw = 0, bC = 1, xC = 1, Np = 2, rl = Ho(uw);
    function rS(e, t) {
      return (e & t) !== 0;
    }
    function Uf(e) {
      return e & bC;
    }
    function aS(e, t) {
      return e & bC | t;
    }
    function ow(e, t) {
      return e | t;
    }
    function Yo(e, t) {
      ca(rl, t, e);
    }
    function Af(e) {
      sa(rl, e);
    }
    function sw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function hm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === K) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || A0(i) || cg(i))
              return t;
          }
        } else if (t.tag === bt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & st) !== Ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Qa = (
      /*   */
      0
    ), pr = (
      /* */
      1
    ), Wl = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), iS = [];
    function lS() {
      for (var e = 0; e < iS.length; e++) {
        var t = iS[e];
        t._workInProgressVersionPrimary = null;
      }
      iS.length = 0;
    }
    function cw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Le = S.ReactCurrentDispatcher, Lp = S.ReactCurrentBatchConfig, uS, zf;
    uS = /* @__PURE__ */ new Set();
    var Xs = ee, nn = null, hr = null, mr = null, mm = !1, Mp = !1, Up = 0, fw = 0, dw = 25, te = null, Oi = null, Wo = -1, oS = !1;
    function Jt() {
      {
        var e = te;
        Oi === null ? Oi = [e] : Oi.push(e);
      }
    }
    function Te() {
      {
        var e = te;
        Oi !== null && (Wo++, Oi[Wo] !== e && pw(e));
      }
    }
    function jf(e) {
      e != null && !_t(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", te, typeof e);
    }
    function pw(e) {
      {
        var t = dt(nn);
        if (!uS.has(t) && (uS.add(t), Oi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Wo; u++) {
            for (var s = Oi[u], f = u === Wo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function fa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function sS(e, t) {
      if (oS)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", te), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, te, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Fe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Pf(e, t, a, i, u, s) {
      Xs = s, nn = t, Oi = e !== null ? e._debugHookTypes : null, Wo = -1, oS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ee, e !== null && e.memoizedState !== null ? Le.current = QC : Oi !== null ? Le.current = WC : Le.current = YC;
      var f = a(i, u);
      if (Mp) {
        var p = 0;
        do {
          if (Mp = !1, Up = 0, p >= dw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, oS = !1, hr = null, mr = null, t.updateQueue = null, Wo = -1, Le.current = qC, f = a(i, u);
        } while (Mp);
      }
      Le.current = Om, t._debugHookTypes = Oi;
      var h = hr !== null && hr.next !== null;
      if (Xs = ee, nn = null, hr = null, mr = null, te = null, Oi = null, Wo = -1, e !== null && (e.flags & cr) !== (t.flags & cr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Tt) !== tt && y("Internal React error: Expected static flag was missing. Please notify the React team."), mm = !1, h)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = Up !== 0;
      return Up = 0, e;
    }
    function wC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ha) !== tt ? t.flags &= ~(du | ra | Cn | gt) : t.flags &= ~(Cn | gt), e.lanes = Ro(e.lanes, a);
    }
    function _C() {
      if (Le.current = Om, mm) {
        for (var e = nn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        mm = !1;
      }
      Xs = ee, nn = null, hr = null, mr = null, Oi = null, Wo = -1, te = null, FC = !1, Mp = !1, Up = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? nn.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function ki() {
      var e;
      if (hr === null) {
        var t = nn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = hr.next;
      var a;
      if (mr === null ? a = nn.memoizedState : a = mr.next, a !== null)
        mr = a, a = mr.next, hr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        hr = e;
        var i = {
          memoizedState: hr.memoizedState,
          baseState: hr.baseState,
          baseQueue: hr.baseQueue,
          queue: hr.queue,
          next: null
        };
        mr === null ? nn.memoizedState = mr = i : mr = mr.next = i;
      }
      return mr;
    }
    function DC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function cS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function fS(e, t, a) {
      var i = Ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = yw.bind(null, nn, s);
      return [i.memoizedState, f];
    }
    function dS(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = hr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var h = f.next, E = p.next;
          f.next = E, p.next = h;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var T = f.next, U = s.baseState, L = null, $ = null, Y = null, J = T;
        do {
          var Ue = J.lane;
          if (Ru(Xs, Ue)) {
            if (Y !== null) {
              var We = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                action: J.action,
                hasEagerState: J.hasEagerState,
                eagerState: J.eagerState,
                next: null
              };
              Y = Y.next = We;
            }
            if (J.hasEagerState)
              U = J.eagerState;
            else {
              var Lt = J.action;
              U = e(U, Lt);
            }
          } else {
            var Je = {
              lane: Ue,
              action: J.action,
              hasEagerState: J.hasEagerState,
              eagerState: J.eagerState,
              next: null
            };
            Y === null ? ($ = Y = Je, L = U) : Y = Y.next = Je, nn.lanes = St(nn.lanes, Ue), Zp(Ue);
          }
          J = J.next;
        } while (J !== null && J !== T);
        Y === null ? L = U : Y.next = $, Fe(U, i.memoizedState) || Vp(), i.memoizedState = U, i.baseState = L, i.baseQueue = Y, u.lastRenderedState = U;
      }
      var wt = u.interleaved;
      if (wt !== null) {
        var F = wt;
        do {
          var Z = F.lane;
          nn.lanes = St(nn.lanes, Z), Zp(Z), F = F.next;
        } while (F !== wt);
      } else
        f === null && (u.lanes = ee);
      var V = u.dispatch;
      return [i.memoizedState, V];
    }
    function pS(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var h = f.next, E = h;
        do {
          var T = E.action;
          p = e(p, T), E = E.next;
        } while (E !== h);
        Fe(p, i.memoizedState) || Vp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function iN(e, t, a) {
    }
    function lN(e, t, a) {
    }
    function vS(e, t, a) {
      var i = nn, u = Ql(), s, f = Hr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), zf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), zf = !0);
      } else {
        if (s = t(), !zf) {
          var p = t();
          Fe(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
        }
        var h = Qm();
        if (h === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ds(h, Xs) || OC(i, t, s);
      }
      u.memoizedState = s;
      var E = {
        value: s,
        getSnapshot: t
      };
      return u.queue = E, Cm(NC.bind(null, i, E, e), [e]), i.flags |= Cn, Ap(pr | Fr, kC.bind(null, i, E, s, t), void 0, null), s;
    }
    function ym(e, t, a) {
      var i = nn, u = ki(), s = t();
      if (!zf) {
        var f = t();
        Fe(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
      }
      var p = u.memoizedState, h = !Fe(p, s);
      h && (u.memoizedState = s, Vp());
      var E = u.queue;
      if (jp(NC.bind(null, i, E, e), [e]), E.getSnapshot !== t || h || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= Cn, Ap(pr | Fr, kC.bind(null, i, E, s, t), void 0, null);
        var T = Qm();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ds(T, Xs) || OC(i, t, s);
      }
      return s;
    }
    function OC(e, t, a) {
      e.flags |= Ss;
      var i = {
        getSnapshot: t,
        value: a
      }, u = nn.updateQueue;
      if (u === null)
        u = DC(), nn.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function kC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, LC(t) && MC(e);
    }
    function NC(e, t, a) {
      var i = function() {
        LC(t) && MC(e);
      };
      return a(i);
    }
    function LC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Fe(a, i);
      } catch {
        return !0;
      }
    }
    function MC(e) {
      var t = Wa(e, it);
      t !== null && Er(t, e, it, cn);
    }
    function gm(e) {
      var t = Ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: cS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = gw.bind(null, nn, a);
      return [t.memoizedState, i];
    }
    function hS(e) {
      return dS(cS);
    }
    function mS(e) {
      return pS(cS);
    }
    function Ap(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = nn.updateQueue;
      if (s === null)
        s = DC(), nn.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function yS(e) {
      var t = Ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Sm(e) {
      var t = ki();
      return t.memoizedState;
    }
    function zp(e, t, a, i) {
      var u = Ql(), s = i === void 0 ? null : i;
      nn.flags |= e, u.memoizedState = Ap(pr | t, a, void 0, s);
    }
    function Em(e, t, a, i) {
      var u = ki(), s = i === void 0 ? null : i, f = void 0;
      if (hr !== null) {
        var p = hr.memoizedState;
        if (f = p.destroy, s !== null) {
          var h = p.deps;
          if (sS(s, h)) {
            u.memoizedState = Ap(t, a, f, s);
            return;
          }
        }
      }
      nn.flags |= e, u.memoizedState = Ap(pr | t, a, f, s);
    }
    function Cm(e, t) {
      return (nn.mode & Ha) !== tt ? zp(du | Cn | Ol, Fr, e, t) : zp(Cn | Ol, Fr, e, t);
    }
    function jp(e, t) {
      return Em(Cn, Fr, e, t);
    }
    function gS(e, t) {
      return zp(gt, Wl, e, t);
    }
    function Rm(e, t) {
      return Em(gt, Wl, e, t);
    }
    function SS(e, t) {
      var a = gt;
      return a |= na, (nn.mode & Ha) !== tt && (a |= ra), zp(a, vr, e, t);
    }
    function Tm(e, t) {
      return Em(gt, vr, e, t);
    }
    function UC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function ES(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = gt;
      return u |= na, (nn.mode & Ha) !== tt && (u |= ra), zp(u, vr, UC.bind(null, t, e), i);
    }
    function bm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Em(gt, vr, UC.bind(null, t, e), i);
    }
    function vw(e, t) {
    }
    var xm = vw;
    function CS(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function wm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (sS(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function RS(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function _m(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (sS(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function TS(e) {
      var t = Ql();
      return t.memoizedState = e, e;
    }
    function AC(e) {
      var t = ki(), a = hr, i = a.memoizedState;
      return jC(t, i, e);
    }
    function zC(e) {
      var t = ki();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return jC(t, a, e);
    }
    function jC(e, t, a) {
      var i = !Oy(Xs);
      if (i) {
        if (!Fe(a, t)) {
          var u = Pd();
          nn.lanes = St(nn.lanes, u), Zp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Vp()), e.memoizedState = a, a;
    }
    function hw(e, t, a) {
      var i = Va();
      Gn(wr(i, dr)), e(!0);
      var u = Lp.transition;
      Lp.transition = {};
      var s = Lp.transition;
      Lp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Gn(i), Lp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && D("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function bS() {
      var e = gm(!1), t = e[0], a = e[1], i = hw.bind(null, a), u = Ql();
      return u.memoizedState = i, [t, i];
    }
    function PC() {
      var e = hS(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    function HC() {
      var e = mS(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    var FC = !1;
    function mw() {
      return FC;
    }
    function xS() {
      var e = Ql(), t = Qm(), a = t.identifierPrefix, i;
      if (Hr()) {
        var u = kx();
        i = ":" + a + "R" + u;
        var s = Up++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = fw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Dm() {
      var e = ki(), t = e.memoizedState;
      return t;
    }
    function yw(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Xo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VC(e))
        BC(t, u);
      else {
        var s = iC(e, t, u, i);
        if (s !== null) {
          var f = _a();
          Er(s, e, i, f), $C(s, t, i);
        }
      }
      IC(e, i);
    }
    function gw(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Xo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VC(e))
        BC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === ee && (s === null || s.lanes === ee)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Le.current, Le.current = al;
            try {
              var h = t.lastRenderedState, E = f(h, a);
              if (u.hasEagerState = !0, u.eagerState = E, Fe(E, h)) {
                Kx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Le.current = p;
            }
          }
        }
        var T = iC(e, t, u, i);
        if (T !== null) {
          var U = _a();
          Er(T, e, i, U), $C(T, t, i);
        }
      }
      IC(e, i);
    }
    function VC(e) {
      var t = e.alternate;
      return e === nn || t !== null && t === nn;
    }
    function BC(e, t) {
      Mp = mm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function $C(e, t, a) {
      if (jd(a)) {
        var i = t.lanes;
        i = Hd(i, e.pendingLanes);
        var u = St(i, a);
        t.lanes = u, To(e, u);
      }
    }
    function IC(e, t, a) {
      Al(e, t);
    }
    var Om = {
      readContext: ur,
      useCallback: fa,
      useContext: fa,
      useEffect: fa,
      useImperativeHandle: fa,
      useInsertionEffect: fa,
      useLayoutEffect: fa,
      useMemo: fa,
      useReducer: fa,
      useRef: fa,
      useState: fa,
      useDebugValue: fa,
      useDeferredValue: fa,
      useTransition: fa,
      useMutableSource: fa,
      useSyncExternalStore: fa,
      useId: fa,
      unstable_isNewReconciler: fe
    }, YC = null, WC = null, QC = null, qC = null, ql = null, al = null, km = null;
    {
      var wS = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, pt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      YC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Jt(), jf(t), CS(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Jt(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Jt(), jf(t), Cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Jt(), jf(a), ES(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Jt(), jf(t), gS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Jt(), jf(t), SS(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Jt(), jf(t);
          var a = Le.current;
          Le.current = ql;
          try {
            return RS(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Jt();
          var i = Le.current;
          Le.current = ql;
          try {
            return fS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Jt(), yS(e);
        },
        useState: function(e) {
          te = "useState", Jt();
          var t = Le.current;
          Le.current = ql;
          try {
            return gm(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Jt(), TS(e);
        },
        useTransition: function() {
          return te = "useTransition", Jt(), bS();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Jt(), vS(e, t, a);
        },
        useId: function() {
          return te = "useId", Jt(), xS();
        },
        unstable_isNewReconciler: fe
      }, WC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Te(), CS(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Te(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Te(), Cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Te(), ES(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Te(), gS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Te(), SS(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Te();
          var a = Le.current;
          Le.current = ql;
          try {
            return RS(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Te();
          var i = Le.current;
          Le.current = ql;
          try {
            return fS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Te(), yS(e);
        },
        useState: function(e) {
          te = "useState", Te();
          var t = Le.current;
          Le.current = ql;
          try {
            return gm(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Te(), TS(e);
        },
        useTransition: function() {
          return te = "useTransition", Te(), bS();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Te(), vS(e, t, a);
        },
        useId: function() {
          return te = "useId", Te(), xS();
        },
        unstable_isNewReconciler: fe
      }, QC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Te(), wm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Te(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Te(), jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Te(), bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Te(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Te(), Tm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Te();
          var a = Le.current;
          Le.current = al;
          try {
            return _m(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Te();
          var i = Le.current;
          Le.current = al;
          try {
            return dS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Te(), Sm();
        },
        useState: function(e) {
          te = "useState", Te();
          var t = Le.current;
          Le.current = al;
          try {
            return hS(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Te(), xm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Te(), AC(e);
        },
        useTransition: function() {
          return te = "useTransition", Te(), PC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Te(), ym(e, t);
        },
        useId: function() {
          return te = "useId", Te(), Dm();
        },
        unstable_isNewReconciler: fe
      }, qC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Te(), wm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Te(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Te(), jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Te(), bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Te(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Te(), Tm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Te();
          var a = Le.current;
          Le.current = km;
          try {
            return _m(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Te();
          var i = Le.current;
          Le.current = km;
          try {
            return pS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Te(), Sm();
        },
        useState: function(e) {
          te = "useState", Te();
          var t = Le.current;
          Le.current = km;
          try {
            return mS(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Te(), xm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Te(), zC(e);
        },
        useTransition: function() {
          return te = "useTransition", Te(), HC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Te(), ym(e, t);
        },
        useId: function() {
          return te = "useId", Te(), Dm();
        },
        unstable_isNewReconciler: fe
      }, ql = {
        readContext: function(e) {
          return wS(), ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", pt(), Jt(), CS(e, t);
        },
        useContext: function(e) {
          return te = "useContext", pt(), Jt(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", pt(), Jt(), Cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", pt(), Jt(), ES(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", pt(), Jt(), gS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", pt(), Jt(), SS(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", pt(), Jt();
          var a = Le.current;
          Le.current = ql;
          try {
            return RS(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", pt(), Jt();
          var i = Le.current;
          Le.current = ql;
          try {
            return fS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", pt(), Jt(), yS(e);
        },
        useState: function(e) {
          te = "useState", pt(), Jt();
          var t = Le.current;
          Le.current = ql;
          try {
            return gm(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", pt(), Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", pt(), Jt(), TS(e);
        },
        useTransition: function() {
          return te = "useTransition", pt(), Jt(), bS();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", pt(), Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", pt(), Jt(), vS(e, t, a);
        },
        useId: function() {
          return te = "useId", pt(), Jt(), xS();
        },
        unstable_isNewReconciler: fe
      }, al = {
        readContext: function(e) {
          return wS(), ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", pt(), Te(), wm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", pt(), Te(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", pt(), Te(), jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", pt(), Te(), bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", pt(), Te(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", pt(), Te(), Tm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", pt(), Te();
          var a = Le.current;
          Le.current = al;
          try {
            return _m(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", pt(), Te();
          var i = Le.current;
          Le.current = al;
          try {
            return dS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", pt(), Te(), Sm();
        },
        useState: function(e) {
          te = "useState", pt(), Te();
          var t = Le.current;
          Le.current = al;
          try {
            return hS(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", pt(), Te(), xm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", pt(), Te(), AC(e);
        },
        useTransition: function() {
          return te = "useTransition", pt(), Te(), PC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", pt(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", pt(), Te(), ym(e, t);
        },
        useId: function() {
          return te = "useId", pt(), Te(), Dm();
        },
        unstable_isNewReconciler: fe
      }, km = {
        readContext: function(e) {
          return wS(), ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", pt(), Te(), wm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", pt(), Te(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", pt(), Te(), jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", pt(), Te(), bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", pt(), Te(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", pt(), Te(), Tm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", pt(), Te();
          var a = Le.current;
          Le.current = al;
          try {
            return _m(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", pt(), Te();
          var i = Le.current;
          Le.current = al;
          try {
            return pS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", pt(), Te(), Sm();
        },
        useState: function(e) {
          te = "useState", pt(), Te();
          var t = Le.current;
          Le.current = al;
          try {
            return mS(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", pt(), Te(), xm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", pt(), Te(), zC(e);
        },
        useTransition: function() {
          return te = "useTransition", pt(), Te(), HC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", pt(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", pt(), Te(), ym(e, t);
        },
        useId: function() {
          return te = "useId", pt(), Te(), Dm();
        },
        unstable_isNewReconciler: fe
      };
    }
    var Qo = C.unstable_now, GC = 0, Nm = -1, Pp = -1, Lm = -1, _S = !1, Mm = !1;
    function KC() {
      return _S;
    }
    function Sw() {
      Mm = !0;
    }
    function Ew() {
      _S = !1, Mm = !1;
    }
    function Cw() {
      _S = Mm, Mm = !1;
    }
    function XC() {
      return GC;
    }
    function JC() {
      GC = Qo();
    }
    function DS(e) {
      Pp = Qo(), e.actualStartTime < 0 && (e.actualStartTime = Qo());
    }
    function ZC(e) {
      Pp = -1;
    }
    function Um(e, t) {
      if (Pp >= 0) {
        var a = Qo() - Pp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Pp = -1;
      }
    }
    function Gl(e) {
      if (Nm >= 0) {
        var t = Qo() - Nm;
        Nm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case j:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case je:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function OS(e) {
      if (Lm >= 0) {
        var t = Qo() - Lm;
        Lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case j:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case je:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Kl() {
      Nm = Qo();
    }
    function kS() {
      Lm = Qo();
    }
    function NS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Js(e, t) {
      return {
        value: e,
        source: t,
        stack: Zu(t),
        digest: null
      };
    }
    function LS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Rw(e, t) {
      return !0;
    }
    function MS(e, t) {
      try {
        var a = Rw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === A)
            return;
          console.error(i);
        }
        var p = u ? dt(u) : null, h = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", E;
        if (e.tag === j)
          E = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = dt(e) || "Anonymous";
          E = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var U = h + `
` + f + `

` + ("" + E);
        console.error(U);
      } catch (L) {
        setTimeout(function() {
          throw L;
        });
      }
    }
    var Tw = typeof WeakMap == "function" ? WeakMap : Map;
    function e1(e, t, a) {
      var i = Pu(cn, a);
      i.tag = Mg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        hD(u), MS(e, t);
      }, i;
    }
    function US(e, t, a) {
      var i = Pu(cn, a);
      i.tag = Mg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          fR(e), MS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        fR(e), MS(e, t), typeof u != "function" && pD(this);
        var h = t.value, E = t.stack;
        this.componentDidCatch(h, {
          componentStack: E !== null ? E : ""
        }), typeof u != "function" && (oa(e.lanes, it) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", dt(e) || "Unknown"));
      }), i;
    }
    function t1(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Tw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = mD.bind(null, e, t, a);
        fr && ev(e, a), t.then(s, s);
      }
    }
    function bw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function xw(e, t) {
      var a = e.tag;
      if ((e.mode & Tt) === tt && (a === N || a === be || a === Ze)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function n1(e) {
      var t = e;
      do {
        if (t.tag === K && sw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function r1(e, t, a, i, u) {
      if ((e.mode & Tt) === tt) {
        if (e === t)
          e.flags |= nr;
        else {
          if (e.flags |= st, a.flags |= Es, a.flags &= ~(Tc | Sa), a.tag === A) {
            var s = a.alternate;
            if (s === null)
              a.tag = hn;
            else {
              var f = Pu(cn, it);
              f.tag = am, $o(a, f, it);
            }
          }
          a.lanes = St(a.lanes, it);
        }
        return e;
      }
      return e.flags |= nr, e.lanes = u, e;
    }
    function ww(e, t, a, i, u) {
      if (a.flags |= Sa, fr && ev(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        xw(a), Hr() && a.mode & Tt && Q0();
        var f = n1(t);
        if (f !== null) {
          f.flags &= ~Mn, r1(f, t, a, e, u), f.mode & Tt && t1(e, s, u), bw(f, e, s);
          return;
        } else {
          if (!Co(u)) {
            t1(e, s, u), pE();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Hr() && a.mode & Tt) {
        Q0();
        var h = n1(t);
        if (h !== null) {
          (h.flags & nr) === Ke && (h.flags |= Mn), r1(h, t, a, e, u), wg(Js(i, a));
          return;
        }
      }
      i = Js(i, a), iD(i);
      var E = t;
      do {
        switch (E.tag) {
          case j: {
            var T = i;
            E.flags |= nr;
            var U = qn(u);
            E.lanes = St(E.lanes, U);
            var L = e1(E, T, U);
            zg(E, L);
            return;
          }
          case A:
            var $ = i, Y = E.type, J = E.stateNode;
            if ((E.flags & st) === Ke && (typeof Y.getDerivedStateFromError == "function" || J !== null && typeof J.componentDidCatch == "function" && !nR(J))) {
              E.flags |= nr;
              var Ue = qn(u);
              E.lanes = St(E.lanes, Ue);
              var Je = US(E, $, Ue);
              zg(E, Je);
              return;
            }
            break;
        }
        E = E.return;
      } while (E !== null);
    }
    function _w() {
      return null;
    }
    var Hp = S.ReactCurrentOwner, il = !1, AS, Fp, zS, jS, PS, Zs, HS, Am;
    AS = {}, Fp = {}, zS = {}, jS = {}, PS = {}, Zs = !1, HS = {}, Am = {};
    function xa(e, t, a, i) {
      e === null ? t.child = CC(t, null, a, i) : t.child = Lf(t, e.child, a, i);
    }
    function Dw(e, t, a, i) {
      t.child = Lf(t, e.child, null, i), t.child = Lf(t, null, a, i);
    }
    function a1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Zi(
          s,
          i,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var f = a.render, p = t.ref, h, E;
      Nf(t, u), Ul(t);
      {
        if (Hp.current = t, Zr(!0), h = Pf(e, t, f, i, p, u), E = Hf(), t.mode & Dn) {
          Qn(!0);
          try {
            h = Pf(e, t, f, i, p, u), E = Hf();
          } finally {
            Qn(!1);
          }
        }
        Zr(!1);
      }
      return pu(), e !== null && !il ? (wC(e, t, u), Hu(e, t, u)) : (Hr() && E && Eg(t), t.flags |= _l, xa(e, t, h, u), t.child);
    }
    function i1(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (MD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Qf(s), t.tag = Ze, t.type = f, BS(t, s), l1(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Zi(
            p,
            i,
            // Resolved props
            "prop",
            jt(s)
          );
        }
        var h = bE(a.type, null, i, t, t.mode, u);
        return h.ref = t.ref, h.return = t, t.child = h, h;
      }
      {
        var E = a.type, T = E.propTypes;
        T && Zi(
          T,
          i,
          // Resolved props
          "prop",
          jt(E)
        );
      }
      var U = e.child, L = qS(e, u);
      if (!L) {
        var $ = U.memoizedProps, Y = a.compare;
        if (Y = Y !== null ? Y : qe, Y($, i) && e.ref === t.ref)
          return Hu(e, t, u);
      }
      t.flags |= _l;
      var J = ac(U, i);
      return J.ref = t.ref, J.return = t, t.child = J, J;
    }
    function l1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Xe) {
          var f = s, p = f._payload, h = f._init;
          try {
            s = h(p);
          } catch {
            s = null;
          }
          var E = s && s.propTypes;
          E && Zi(
            E,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            jt(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (qe(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (il = !1, t.pendingProps = i = T, qS(e, u))
            (e.flags & Es) !== Ke && (il = !0);
          else
            return t.lanes = e.lanes, Hu(e, t, u);
      }
      return FS(e, t, a, i, u);
    }
    function u1(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || R)
        if ((t.mode & Tt) === tt) {
          var f = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, qm(t, a);
        } else if (oa(a, ua)) {
          var U = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = U;
          var L = s !== null ? s.baseLanes : a;
          qm(t, L);
        } else {
          var p = null, h;
          if (s !== null) {
            var E = s.baseLanes;
            h = St(E, a);
          } else
            h = a;
          t.lanes = t.childLanes = ua;
          var T = {
            baseLanes: h,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, qm(t, h), null;
        }
      else {
        var $;
        s !== null ? ($ = St(s.baseLanes, a), t.memoizedState = null) : $ = a, qm(t, $);
      }
      return xa(e, t, u, a), t.child;
    }
    function Ow(e, t, a) {
      var i = t.pendingProps;
      return xa(e, t, i, a), t.child;
    }
    function kw(e, t, a) {
      var i = t.pendingProps.children;
      return xa(e, t, i, a), t.child;
    }
    function Nw(e, t, a) {
      {
        t.flags |= gt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return xa(e, t, s, a), t.child;
    }
    function o1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ta, t.flags |= Rd);
    }
    function FS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Zi(
          s,
          i,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var f;
      {
        var p = xf(t, a, !0);
        f = wf(t, p);
      }
      var h, E;
      Nf(t, u), Ul(t);
      {
        if (Hp.current = t, Zr(!0), h = Pf(e, t, a, i, f, u), E = Hf(), t.mode & Dn) {
          Qn(!0);
          try {
            h = Pf(e, t, a, i, f, u), E = Hf();
          } finally {
            Qn(!1);
          }
        }
        Zr(!1);
      }
      return pu(), e !== null && !il ? (wC(e, t, u), Hu(e, t, u)) : (Hr() && E && Eg(t), t.flags |= _l, xa(e, t, h, u), t.child);
    }
    function s1(e, t, a, i, u) {
      {
        switch (qD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), h = p.state;
            s.updater.enqueueSetState(s, h, null);
            break;
          }
          case !0: {
            t.flags |= st, t.flags |= nr;
            var E = new Error("Simulated error coming from DevTools"), T = qn(u);
            t.lanes = St(t.lanes, T);
            var U = US(t, Js(E, t), T);
            zg(t, U);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var L = a.propTypes;
          L && Zi(
            L,
            i,
            // Resolved props
            "prop",
            jt(a)
          );
        }
      }
      var $;
      Yl(a) ? ($ = !0, Qh(t)) : $ = !1, Nf(t, u);
      var Y = t.stateNode, J;
      Y === null ? (jm(e, t), mC(t, a, i), qg(t, a, i, u), J = !0) : e === null ? J = rw(t, a, i, u) : J = aw(e, t, a, i, u);
      var Ue = VS(e, t, a, J, $, u);
      {
        var Je = t.stateNode;
        J && Je.props !== i && (Zs || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", dt(t) || "a component"), Zs = !0);
      }
      return Ue;
    }
    function VS(e, t, a, i, u, s) {
      o1(e, t);
      var f = (t.flags & st) !== Ke;
      if (!i && !f)
        return u && $0(t, a, !1), Hu(e, t, s);
      var p = t.stateNode;
      Hp.current = t;
      var h;
      if (f && typeof a.getDerivedStateFromError != "function")
        h = null, ZC();
      else {
        Ul(t);
        {
          if (Zr(!0), h = p.render(), t.mode & Dn) {
            Qn(!0);
            try {
              p.render();
            } finally {
              Qn(!1);
            }
          }
          Zr(!1);
        }
        pu();
      }
      return t.flags |= _l, e !== null && f ? Dw(e, t, h, s) : xa(e, t, h, s), t.memoizedState = p.state, u && $0(t, a, !0), t.child;
    }
    function c1(e) {
      var t = e.stateNode;
      t.pendingContext ? V0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && V0(e, t.context, !1), eS(e, t.containerInfo);
    }
    function Lw(e, t, a) {
      if (c1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      oC(e, t), om(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var h = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, E = t.updateQueue;
        if (E.baseState = h, t.memoizedState = h, t.flags & Mn) {
          var T = Js(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return f1(e, t, p, a, T);
        } else if (p !== s) {
          var U = Js(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return f1(e, t, p, a, U);
        } else {
          zx(t);
          var L = CC(t, null, p, a);
          t.child = L;
          for (var $ = L; $; )
            $.flags = $.flags & ~mn | za, $ = $.sibling;
        }
      } else {
        if (Of(), p === s)
          return Hu(e, t, a);
        xa(e, t, p, a);
      }
      return t.child;
    }
    function f1(e, t, a, i, u) {
      return Of(), wg(u), t.flags |= Mn, xa(e, t, a, i), t.child;
    }
    function Mw(e, t, a) {
      TC(t), e === null && xg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = lg(i, u);
      return p ? f = null : s !== null && lg(i, s) && (t.flags |= Xt), o1(e, t), xa(e, t, f, a), t.child;
    }
    function Uw(e, t) {
      return e === null && xg(t), null;
    }
    function Aw(e, t, a, i) {
      jm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, h = p(f);
      t.type = h;
      var E = t.tag = UD(h), T = nl(h, u), U;
      switch (E) {
        case N:
          return BS(t, h), t.type = h = Qf(h), U = FS(null, t, h, T, i), U;
        case A:
          return t.type = h = gE(h), U = s1(null, t, h, T, i), U;
        case be:
          return t.type = h = SE(h), U = a1(null, t, h, T, i), U;
        case ut: {
          if (t.type !== t.elementType) {
            var L = h.propTypes;
            L && Zi(
              L,
              T,
              // Resolved for outer only
              "prop",
              jt(h)
            );
          }
          return U = i1(
            null,
            t,
            h,
            nl(h.type, T),
            // The inner type can have defaults too
            i
          ), U;
        }
      }
      var $ = "";
      throw h !== null && typeof h == "object" && h.$$typeof === Xe && ($ = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h + ". " + ("Lazy element type must resolve to a class or function." + $));
    }
    function zw(e, t, a, i, u) {
      jm(e, t), t.tag = A;
      var s;
      return Yl(a) ? (s = !0, Qh(t)) : s = !1, Nf(t, u), mC(t, a, i), qg(t, a, i, u), VS(null, t, a, !0, s, u);
    }
    function jw(e, t, a, i) {
      jm(e, t);
      var u = t.pendingProps, s;
      {
        var f = xf(t, a, !1);
        s = wf(t, f);
      }
      Nf(t, i);
      var p, h;
      Ul(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var E = jt(a) || "Unknown";
          AS[E] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), AS[E] = !0);
        }
        t.mode & Dn && tl.recordLegacyContextWarning(t, null), Zr(!0), Hp.current = t, p = Pf(null, t, a, u, s, i), h = Hf(), Zr(!1);
      }
      if (pu(), t.flags |= _l, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var T = jt(a) || "Unknown";
        Fp[T] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Fp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var U = jt(a) || "Unknown";
          Fp[U] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", U, U, U), Fp[U] = !0);
        }
        t.tag = A, t.memoizedState = null, t.updateQueue = null;
        var L = !1;
        return Yl(a) ? (L = !0, Qh(t)) : L = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Ag(t), hC(t, p), qg(t, a, u, i), VS(null, t, a, !0, L, i);
      } else {
        if (t.tag = N, t.mode & Dn) {
          Qn(!0);
          try {
            p = Pf(null, t, a, u, s, i), h = Hf();
          } finally {
            Qn(!1);
          }
        }
        return Hr() && h && Eg(t), xa(null, t, p, i), BS(t, a), t.child;
      }
    }
    function BS(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = zr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), PS[u] || (PS[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = jt(t) || "Unknown";
          jS[f] || (y("%s: Function components do not support getDerivedStateFromProps.", f), jS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = jt(t) || "Unknown";
          zS[p] || (y("%s: Function components do not support contextType.", p), zS[p] = !0);
        }
      }
    }
    var $S = {
      dehydrated: null,
      treeContext: null,
      retryLane: kt
    };
    function IS(e) {
      return {
        baseLanes: e,
        cachePool: _w(),
        transitions: null
      };
    }
    function Pw(e, t) {
      var a = null;
      return {
        baseLanes: St(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Hw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return rS(e, Np);
    }
    function Fw(e, t) {
      return Ro(e.childLanes, t);
    }
    function d1(e, t, a) {
      var i = t.pendingProps;
      GD(t) && (t.flags |= st);
      var u = rl.current, s = !1, f = (t.flags & st) !== Ke;
      if (f || Hw(u, e) ? (s = !0, t.flags &= ~st) : (e === null || e.memoizedState !== null) && (u = ow(u, xC)), u = Uf(u), Yo(t, u), e === null) {
        xg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var h = p.dehydrated;
          if (h !== null)
            return Yw(t, h);
        }
        var E = i.children, T = i.fallback;
        if (s) {
          var U = Vw(t, E, T, a), L = t.child;
          return L.memoizedState = IS(a), t.memoizedState = $S, U;
        } else
          return YS(t, E);
      } else {
        var $ = e.memoizedState;
        if ($ !== null) {
          var Y = $.dehydrated;
          if (Y !== null)
            return Ww(e, t, f, i, Y, $, a);
        }
        if (s) {
          var J = i.fallback, Ue = i.children, Je = $w(e, t, Ue, J, a), We = t.child, Lt = e.child.memoizedState;
          return We.memoizedState = Lt === null ? IS(a) : Pw(Lt, a), We.childLanes = Fw(e, a), t.memoizedState = $S, Je;
        } else {
          var wt = i.children, F = Bw(e, t, wt, a);
          return t.memoizedState = null, F;
        }
      }
    }
    function YS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = WS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Vw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, h;
      return (u & Tt) === tt && s !== null ? (p = s, p.childLanes = ee, p.pendingProps = f, e.mode & rt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), h = Zo(a, u, i, null)) : (p = WS(f, u), h = Zo(a, u, i, null)), p.return = e, h.return = e, p.sibling = h, e.child = p, h;
    }
    function WS(e, t, a) {
      return pR(e, t, ee, null);
    }
    function p1(e, t) {
      return ac(e, t);
    }
    function Bw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = p1(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Tt) === tt && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Wt) : p.push(s);
      }
      return t.child = f, f;
    }
    function $w(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, h = {
        mode: "hidden",
        children: a
      }, E;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Tt) === tt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var T = t.child;
        E = T, E.childLanes = ee, E.pendingProps = h, t.mode & rt && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = f.selfBaseDuration, E.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        E = p1(f, h), E.subtreeFlags = f.subtreeFlags & cr;
      var U;
      return p !== null ? U = ac(p, i) : (U = Zo(i, s, u, null), U.flags |= mn), U.return = t, E.return = t, E.sibling = U, t.child = E, U;
    }
    function zm(e, t, a, i) {
      i !== null && wg(i), Lf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = YS(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function Iw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = WS(f, s), h = Zo(i, s, u, null);
      return h.flags |= mn, p.return = t, h.return = t, p.sibling = h, t.child = p, (t.mode & Tt) !== tt && Lf(t, e.child, null, u), h;
    }
    function Yw(e, t, a) {
      return (e.mode & Tt) === tt ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = it) : cg(t) ? e.lanes = mu : e.lanes = ua, null;
    }
    function Ww(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Mn) {
          t.flags &= ~Mn;
          var F = LS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return zm(e, t, f, F);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= st, null;
          var Z = i.children, V = i.fallback, ce = Iw(e, t, Z, V, f), Ae = t.child;
          return Ae.memoizedState = IS(f), t.memoizedState = $S, ce;
        }
      else {
        if (Ux(), (t.mode & Tt) === tt)
          return zm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (cg(u)) {
          var p, h, E;
          {
            var T = Xb(u);
            p = T.digest, h = T.message, E = T.stack;
          }
          var U;
          h ? U = new Error(h) : U = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var L = LS(U, p, E);
          return zm(e, t, f, L);
        }
        var $ = oa(f, e.childLanes);
        if (il || $) {
          var Y = Qm();
          if (Y !== null) {
            var J = Ny(Y, f);
            if (J !== kt && J !== s.retryLane) {
              s.retryLane = J;
              var Ue = cn;
              Wa(e, J), Er(Y, e, J, Ue);
            }
          }
          pE();
          var Je = LS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return zm(e, t, f, Je);
        } else if (A0(u)) {
          t.flags |= st, t.child = e.child;
          var We = yD.bind(null, e);
          return Jb(u, We), null;
        } else {
          jx(t, u, s.treeContext);
          var Lt = i.children, wt = YS(t, Lt);
          return wt.flags |= za, wt;
        }
      }
    }
    function v1(e, t, a) {
      e.lanes = St(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = St(i.lanes, t)), Ng(e.return, t, a);
    }
    function Qw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === K) {
          var u = i.memoizedState;
          u !== null && v1(i, a, e);
        } else if (i.tag === bt)
          v1(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function qw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && hm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Gw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !HS[e])
        if (HS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Kw(e, t) {
      e !== void 0 && !Am[e] && (e !== "collapsed" && e !== "hidden" ? (Am[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Am[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function h1(e, t) {
      {
        var a = _t(e), i = !a && typeof Za(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Xw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (_t(e)) {
          for (var a = 0; a < e.length; a++)
            if (!h1(e[a], a))
              return;
        } else {
          var i = Za(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!h1(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function QS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function m1(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Gw(u), Kw(s, u), Xw(f, u), xa(e, t, f, a);
      var p = rl.current, h = rS(p, Np);
      if (h)
        p = aS(p, Np), t.flags |= st;
      else {
        var E = e !== null && (e.flags & st) !== Ke;
        E && Qw(t, t.child, a), p = Uf(p);
      }
      if (Yo(t, p), (t.mode & Tt) === tt)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var T = qw(t.child), U;
            T === null ? (U = t.child, t.child = null) : (U = T.sibling, T.sibling = null), QS(
              t,
              !1,
              // isBackwards
              U,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var L = null, $ = t.child;
            for (t.child = null; $ !== null; ) {
              var Y = $.alternate;
              if (Y !== null && hm(Y) === null) {
                t.child = $;
                break;
              }
              var J = $.sibling;
              $.sibling = L, L = $, $ = J;
            }
            QS(
              t,
              !0,
              // isBackwards
              L,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            QS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Jw(e, t, a) {
      eS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Lf(t, null, i, a) : xa(e, t, i, a), t.child;
    }
    var y1 = !1;
    function Zw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || y1 || (y1 = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var h = t.type.propTypes;
        h && Zi(h, s, "prop", "Context.Provider");
      }
      if (aC(t, u, p), f !== null) {
        var E = f.value;
        if (Fe(E, p)) {
          if (f.children === s.children && !Yh())
            return Hu(e, t, a);
        } else
          Qx(t, u, a);
      }
      var T = s.children;
      return xa(e, t, T, a), t.child;
    }
    var g1 = !1;
    function e_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (g1 || (g1 = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Nf(t, a);
      var f = ur(i);
      Ul(t);
      var p;
      return Hp.current = t, Zr(!0), p = s(f), Zr(!1), pu(), t.flags |= _l, xa(e, t, p, a), t.child;
    }
    function Vp() {
      il = !0;
    }
    function jm(e, t) {
      (t.mode & Tt) === tt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Hu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ZC(), Zp(t.lanes), oa(a, t.childLanes) ? (iw(e, t), t.child) : null;
    }
    function t_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Wt) : s.push(e), a.flags |= mn, a;
      }
    }
    function qS(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function n_(e, t, a) {
      switch (t.tag) {
        case j:
          c1(t), t.stateNode, Of();
          break;
        case G:
          TC(t);
          break;
        case A: {
          var i = t.type;
          Yl(i) && Qh(t);
          break;
        }
        case X:
          eS(t, t.stateNode.containerInfo);
          break;
        case we: {
          var u = t.memoizedProps.value, s = t.type._context;
          aC(t, s, u);
          break;
        }
        case je:
          {
            var f = oa(a, t.childLanes);
            f && (t.flags |= gt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case K: {
          var h = t.memoizedState;
          if (h !== null) {
            if (h.dehydrated !== null)
              return Yo(t, Uf(rl.current)), t.flags |= st, null;
            var E = t.child, T = E.childLanes;
            if (oa(a, T))
              return d1(e, t, a);
            Yo(t, Uf(rl.current));
            var U = Hu(e, t, a);
            return U !== null ? U.sibling : null;
          } else
            Yo(t, Uf(rl.current));
          break;
        }
        case bt: {
          var L = (e.flags & st) !== Ke, $ = oa(a, t.childLanes);
          if (L) {
            if ($)
              return m1(e, t, a);
            t.flags |= st;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), Yo(t, rl.current), $)
            break;
          return null;
        }
        case Ge:
        case lt:
          return t.lanes = ee, u1(e, t, a);
      }
      return Hu(e, t, a);
    }
    function S1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return t_(e, t, bE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Yh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          il = !0;
        else {
          var s = qS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & st) === Ke)
            return il = !1, n_(e, t, a);
          (e.flags & Es) !== Ke ? il = !0 : il = !1;
        }
      } else if (il = !1, Hr() && Dx(t)) {
        var f = t.index, p = Ox();
        W0(t, p, f);
      }
      switch (t.lanes = ee, t.tag) {
        case Q:
          return jw(e, t, t.type, a);
        case Zt: {
          var h = t.elementType;
          return Aw(e, t, h, a);
        }
        case N: {
          var E = t.type, T = t.pendingProps, U = t.elementType === E ? T : nl(E, T);
          return FS(e, t, E, U, a);
        }
        case A: {
          var L = t.type, $ = t.pendingProps, Y = t.elementType === L ? $ : nl(L, $);
          return s1(e, t, L, Y, a);
        }
        case j:
          return Lw(e, t, a);
        case G:
          return Mw(e, t, a);
        case ae:
          return Uw(e, t);
        case K:
          return d1(e, t, a);
        case X:
          return Jw(e, t, a);
        case be: {
          var J = t.type, Ue = t.pendingProps, Je = t.elementType === J ? Ue : nl(J, Ue);
          return a1(e, t, J, Je, a);
        }
        case ne:
          return Ow(e, t, a);
        case oe:
          return kw(e, t, a);
        case je:
          return Nw(e, t, a);
        case we:
          return Zw(e, t, a);
        case ye:
          return e_(e, t, a);
        case ut: {
          var We = t.type, Lt = t.pendingProps, wt = nl(We, Lt);
          if (t.type !== t.elementType) {
            var F = We.propTypes;
            F && Zi(
              F,
              wt,
              // Resolved for outer only
              "prop",
              jt(We)
            );
          }
          return wt = nl(We.type, wt), i1(e, t, We, wt, a);
        }
        case Ze:
          return l1(e, t, t.type, t.pendingProps, a);
        case hn: {
          var Z = t.type, V = t.pendingProps, ce = t.elementType === Z ? V : nl(Z, V);
          return zw(e, t, Z, ce, a);
        }
        case bt:
          return m1(e, t, a);
        case fn:
          break;
        case Ge:
          return u1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ff(e) {
      e.flags |= gt;
    }
    function E1(e) {
      e.flags |= ta, e.flags |= Rd;
    }
    var C1, GS, R1, T1;
    C1 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === G || u.tag === ae)
          xb(e, u.stateNode);
        else if (u.tag !== X) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, GS = function(e, t) {
    }, R1 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = tS(), h = _b(f, a, s, i, u, p);
        t.updateQueue = h, h && Ff(t);
      }
    }, T1 = function(e, t, a, i) {
      a !== i && Ff(t);
    };
    function Bp(e, t) {
      if (!Hr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Vr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ee, i = Ke;
      if (t) {
        if ((e.mode & rt) !== tt) {
          for (var h = e.selfBaseDuration, E = e.child; E !== null; )
            a = St(a, St(E.lanes, E.childLanes)), i |= E.subtreeFlags & cr, i |= E.flags & cr, h += E.treeBaseDuration, E = E.sibling;
          e.treeBaseDuration = h;
        } else
          for (var T = e.child; T !== null; )
            a = St(a, St(T.lanes, T.childLanes)), i |= T.subtreeFlags & cr, i |= T.flags & cr, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & rt) !== tt) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = St(a, St(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = St(a, St(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function r_(e, t, a) {
      if (Bx() && (t.mode & Tt) !== tt && (t.flags & st) === Ke)
        return Z0(t), Of(), t.flags |= Mn | Sa | nr, !1;
      var i = Jh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Fx(t), Vr(t), (t.mode & rt) !== tt) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Of(), (t.flags & st) === Ke && (t.memoizedState = null), t.flags |= gt, Vr(t), (t.mode & rt) !== tt) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return eC(), !0;
    }
    function b1(e, t, a) {
      var i = t.pendingProps;
      switch (Cg(t), t.tag) {
        case Q:
        case Zt:
        case Ze:
        case N:
        case be:
        case ne:
        case oe:
        case je:
        case ye:
        case ut:
          return Vr(t), null;
        case A: {
          var u = t.type;
          return Yl(u) && Wh(t), Vr(t), null;
        }
        case j: {
          var s = t.stateNode;
          if (Mf(t), yg(t), lS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Jh(t);
            if (f)
              Ff(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Mn) !== Ke) && (t.flags |= Aa, eC());
            }
          }
          return GS(e, t), Vr(t), null;
        }
        case G: {
          nS(t);
          var h = RC(), E = t.type;
          if (e !== null && t.stateNode != null)
            R1(e, t, E, i, h), e.ref !== t.ref && E1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Vr(t), null;
            }
            var T = tS(), U = Jh(t);
            if (U)
              Px(t, h, T) && Ff(t);
            else {
              var L = bb(E, i, h, T, t);
              C1(L, t, !1, !1), t.stateNode = L, wb(L, E, i, h) && Ff(t);
            }
            t.ref !== null && E1(t);
          }
          return Vr(t), null;
        }
        case ae: {
          var $ = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            T1(e, t, Y, $);
          } else {
            if (typeof $ != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var J = RC(), Ue = tS(), Je = Jh(t);
            Je ? Hx(t) && Ff(t) : t.stateNode = Db($, J, Ue, t);
          }
          return Vr(t), null;
        }
        case K: {
          Af(t);
          var We = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Lt = r_(e, t, We);
            if (!Lt)
              return t.flags & nr ? t : null;
          }
          if ((t.flags & st) !== Ke)
            return t.lanes = a, (t.mode & rt) !== tt && NS(t), t;
          var wt = We !== null, F = e !== null && e.memoizedState !== null;
          if (wt !== F && wt) {
            var Z = t.child;
            if (Z.flags |= Dl, (t.mode & Tt) !== tt) {
              var V = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !z);
              V || rS(rl.current, xC) ? aD() : pE();
            }
          }
          var ce = t.updateQueue;
          if (ce !== null && (t.flags |= gt), Vr(t), (t.mode & rt) !== tt && wt) {
            var Ae = t.child;
            Ae !== null && (t.treeBaseDuration -= Ae.treeBaseDuration);
          }
          return null;
        }
        case X:
          return Mf(t), GS(e, t), e === null && Cx(t.stateNode.containerInfo), Vr(t), null;
        case we:
          var ke = t.type._context;
          return kg(ke, t), Vr(t), null;
        case hn: {
          var ot = t.type;
          return Yl(ot) && Wh(t), Vr(t), null;
        }
        case bt: {
          Af(t);
          var ht = t.memoizedState;
          if (ht === null)
            return Vr(t), null;
          var rn = (t.flags & st) !== Ke, Bt = ht.rendering;
          if (Bt === null)
            if (rn)
              Bp(ht, !1);
            else {
              var Jn = lD() && (e === null || (e.flags & st) === Ke);
              if (!Jn)
                for (var $t = t.child; $t !== null; ) {
                  var Yn = hm($t);
                  if (Yn !== null) {
                    rn = !0, t.flags |= st, Bp(ht, !1);
                    var da = Yn.updateQueue;
                    return da !== null && (t.updateQueue = da, t.flags |= gt), t.subtreeFlags = Ke, lw(t, a), Yo(t, aS(rl.current, Np)), t.child;
                  }
                  $t = $t.sibling;
                }
              ht.tail !== null && _n() > Y1() && (t.flags |= st, rn = !0, Bp(ht, !1), t.lanes = Ad);
            }
          else {
            if (!rn) {
              var Wr = hm(Bt);
              if (Wr !== null) {
                t.flags |= st, rn = !0;
                var ci = Wr.updateQueue;
                if (ci !== null && (t.updateQueue = ci, t.flags |= gt), Bp(ht, !0), ht.tail === null && ht.tailMode === "hidden" && !Bt.alternate && !Hr())
                  return Vr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                _n() * 2 - ht.renderingStartTime > Y1() && a !== ua && (t.flags |= st, rn = !0, Bp(ht, !1), t.lanes = Ad);
            }
            if (ht.isBackwards)
              Bt.sibling = t.child, t.child = Bt;
            else {
              var Da = ht.last;
              Da !== null ? Da.sibling = Bt : t.child = Bt, ht.last = Bt;
            }
          }
          if (ht.tail !== null) {
            var Oa = ht.tail;
            ht.rendering = Oa, ht.tail = Oa.sibling, ht.renderingStartTime = _n(), Oa.sibling = null;
            var pa = rl.current;
            return rn ? pa = aS(pa, Np) : pa = Uf(pa), Yo(t, pa), Oa;
          }
          return Vr(t), null;
        }
        case fn:
          break;
        case Ge:
        case lt: {
          dE(t);
          var Iu = t.memoizedState, qf = Iu !== null;
          if (e !== null) {
            var av = e.memoizedState, Zl = av !== null;
            Zl !== qf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !R && (t.flags |= Dl);
          }
          return !qf || (t.mode & Tt) === tt ? Vr(t) : oa(Jl, ua) && (Vr(t), t.subtreeFlags & (mn | gt) && (t.flags |= Dl)), null;
        }
        case Ut:
          return null;
        case vt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function a_(e, t, a) {
      switch (Cg(t), t.tag) {
        case A: {
          var i = t.type;
          Yl(i) && Wh(t);
          var u = t.flags;
          return u & nr ? (t.flags = u & ~nr | st, (t.mode & rt) !== tt && NS(t), t) : null;
        }
        case j: {
          t.stateNode, Mf(t), yg(t), lS();
          var s = t.flags;
          return (s & nr) !== Ke && (s & st) === Ke ? (t.flags = s & ~nr | st, t) : null;
        }
        case G:
          return nS(t), null;
        case K: {
          Af(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Of();
          }
          var p = t.flags;
          return p & nr ? (t.flags = p & ~nr | st, (t.mode & rt) !== tt && NS(t), t) : null;
        }
        case bt:
          return Af(t), null;
        case X:
          return Mf(t), null;
        case we:
          var h = t.type._context;
          return kg(h, t), null;
        case Ge:
        case lt:
          return dE(t), null;
        case Ut:
          return null;
        default:
          return null;
      }
    }
    function x1(e, t, a) {
      switch (Cg(t), t.tag) {
        case A: {
          var i = t.type.childContextTypes;
          i != null && Wh(t);
          break;
        }
        case j: {
          t.stateNode, Mf(t), yg(t), lS();
          break;
        }
        case G: {
          nS(t);
          break;
        }
        case X:
          Mf(t);
          break;
        case K:
          Af(t);
          break;
        case bt:
          Af(t);
          break;
        case we:
          var u = t.type._context;
          kg(u, t);
          break;
        case Ge:
        case lt:
          dE(t);
          break;
      }
    }
    var w1 = null;
    w1 = /* @__PURE__ */ new Set();
    var Pm = !1, Br = !1, i_ = typeof WeakSet == "function" ? WeakSet : Set, Ve = null, Vf = null, Bf = null;
    function l_(e) {
      fu(null, function() {
        throw e;
      }), Ed();
    }
    var u_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & rt)
        try {
          Kl(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function _1(e, t) {
      try {
        qo(vr, e);
      } catch (a) {
        En(e, t, a);
      }
    }
    function KS(e, t, a) {
      try {
        u_(e, a);
      } catch (i) {
        En(e, t, i);
      }
    }
    function o_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        En(e, t, i);
      }
    }
    function D1(e, t) {
      try {
        k1(e);
      } catch (a) {
        En(e, t, a);
      }
    }
    function $f(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ee && _e && e.mode & rt)
              try {
                Kl(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (u) {
            En(e, t, u);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", dt(e));
        } else
          a.current = null;
    }
    function Hm(e, t, a) {
      try {
        a();
      } catch (i) {
        En(e, t, i);
      }
    }
    var O1 = !1;
    function s_(e, t) {
      Rb(e.containerInfo), Ve = t, c_();
      var a = O1;
      return O1 = !1, a;
    }
    function c_() {
      for (; Ve !== null; ) {
        var e = Ve, t = e.child;
        (e.subtreeFlags & vo) !== Ke && t !== null ? (t.return = e, Ve = t) : f_();
      }
    }
    function f_() {
      for (; Ve !== null; ) {
        var e = Ve;
        Kt(e);
        try {
          d_(e);
        } catch (a) {
          En(e, e.return, a);
        }
        Ln();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ve = t;
          return;
        }
        Ve = e.return;
      }
    }
    function d_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Aa) !== Ke) {
        switch (Kt(e), e.tag) {
          case N:
          case be:
          case Ze:
            break;
          case A: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Zs && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = w1;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", dt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case j: {
            {
              var h = e.stateNode;
              Qb(h.containerInfo);
            }
            break;
          }
          case G:
          case ae:
          case X:
          case hn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Ln();
      }
    }
    function ll(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Qa ? Nc(t) : (e & vr) !== Qa && Lc(t), (e & Wl) !== Qa && tv(!0), Hm(t, a, p), (e & Wl) !== Qa && tv(!1), (e & Fr) !== Qa ? Xv() : (e & vr) !== Qa && ho());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function qo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Qa ? Kv(t) : (e & vr) !== Qa && Jv(t);
            var f = s.create;
            (e & Wl) !== Qa && tv(!0), s.destroy = f(), (e & Wl) !== Qa && tv(!1), (e & Fr) !== Qa ? Ld() : (e & vr) !== Qa && Zv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var h = void 0;
                (s.tag & vr) !== Ke ? h = "useLayoutEffect" : (s.tag & Wl) !== Ke ? h = "useInsertionEffect" : h = "useEffect";
                var E = void 0;
                p === null ? E = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? E = `

It looks like you wrote ` + h + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : E = " You returned: " + p, y("%s must not return anything besides a function, which is used for clean-up.%s", h, E);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function p_(e, t) {
      if ((t.flags & gt) !== Ke)
        switch (t.tag) {
          case je: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = XC(), p = t.alternate === null ? "mount" : "update";
            KC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var h = t.return;
            e:
              for (; h !== null; ) {
                switch (h.tag) {
                  case j:
                    var E = h.stateNode;
                    E.passiveEffectDuration += a;
                    break e;
                  case je:
                    var T = h.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                }
                h = h.return;
              }
            break;
          }
        }
    }
    function v_(e, t, a, i) {
      if ((a.flags & br) !== Ke)
        switch (a.tag) {
          case N:
          case be:
          case Ze: {
            if (!Br)
              if (a.mode & rt)
                try {
                  Kl(), qo(vr | pr, a);
                } finally {
                  Gl(a);
                }
              else
                qo(vr | pr, a);
            break;
          }
          case A: {
            var u = a.stateNode;
            if (a.flags & gt && !Br)
              if (t === null)
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(a) || "instance")), a.mode & rt)
                  try {
                    Kl(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(a) || "instance")), a.mode & rt)
                  try {
                    Kl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(a) || "instance")), cC(a, p, u));
            break;
          }
          case j: {
            var h = a.updateQueue;
            if (h !== null) {
              var E = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case G:
                    E = a.child.stateNode;
                    break;
                  case A:
                    E = a.child.stateNode;
                    break;
                }
              cC(a, h, E);
            }
            break;
          }
          case G: {
            var T = a.stateNode;
            if (t === null && a.flags & gt) {
              var U = a.type, L = a.memoizedProps;
              Mb(T, U, L);
            }
            break;
          }
          case ae:
            break;
          case X:
            break;
          case je: {
            {
              var $ = a.memoizedProps, Y = $.onCommit, J = $.onRender, Ue = a.stateNode.effectDuration, Je = XC(), We = t === null ? "mount" : "update";
              KC() && (We = "nested-update"), typeof J == "function" && J(a.memoizedProps.id, We, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Je);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, We, Ue, Je), fD(a);
                var Lt = a.return;
                e:
                  for (; Lt !== null; ) {
                    switch (Lt.tag) {
                      case j:
                        var wt = Lt.stateNode;
                        wt.effectDuration += Ue;
                        break e;
                      case je:
                        var F = Lt.stateNode;
                        F.effectDuration += Ue;
                        break e;
                    }
                    Lt = Lt.return;
                  }
              }
            }
            break;
          }
          case K: {
            R_(e, a);
            break;
          }
          case bt:
          case hn:
          case fn:
          case Ge:
          case lt:
          case vt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Br || a.flags & ta && k1(a);
    }
    function h_(e) {
      switch (e.tag) {
        case N:
        case be:
        case Ze: {
          if (e.mode & rt)
            try {
              Kl(), _1(e, e.return);
            } finally {
              Gl(e);
            }
          else
            _1(e, e.return);
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && o_(e, e.return, t), D1(e, e.return);
          break;
        }
        case G: {
          D1(e, e.return);
          break;
        }
      }
    }
    function m_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === G) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? $b(u) : Yb(i.stateNode, i.memoizedProps);
            } catch (f) {
              En(e, e.return, f);
            }
          }
        } else if (i.tag === ae) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Ib(s) : Wb(s, i.memoizedProps);
            } catch (f) {
              En(e, e.return, f);
            }
        } else if (!((i.tag === Ge || i.tag === lt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function k1(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case G:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & rt)
            try {
              Kl(), u = t(i);
            } finally {
              Gl(e);
            }
          else
            u = t(i);
          typeof u == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", dt(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", dt(e)), t.current = i;
      }
    }
    function y_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function N1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, N1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === G) {
          var a = e.stateNode;
          a !== null && bx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function g_(e) {
      for (var t = e.return; t !== null; ) {
        if (L1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function L1(e) {
      return e.tag === G || e.tag === j || e.tag === X;
    }
    function M1(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || L1(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== G && t.tag !== ae && t.tag !== Ft; ) {
            if (t.flags & mn || t.child === null || t.tag === X)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & mn))
            return t.stateNode;
        }
    }
    function S_(e) {
      var t = g_(e);
      switch (t.tag) {
        case G: {
          var a = t.stateNode;
          t.flags & Xt && (U0(a), t.flags &= ~Xt);
          var i = M1(e);
          JS(e, i, a);
          break;
        }
        case j:
        case X: {
          var u = t.stateNode.containerInfo, s = M1(e);
          XS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function XS(e, t, a) {
      var i = e.tag, u = i === G || i === ae;
      if (u) {
        var s = e.stateNode;
        t ? Hb(a, s, t) : jb(a, s);
      } else if (i !== X) {
        var f = e.child;
        if (f !== null) {
          XS(f, t, a);
          for (var p = f.sibling; p !== null; )
            XS(p, t, a), p = p.sibling;
        }
      }
    }
    function JS(e, t, a) {
      var i = e.tag, u = i === G || i === ae;
      if (u) {
        var s = e.stateNode;
        t ? Pb(a, s, t) : zb(a, s);
      } else if (i !== X) {
        var f = e.child;
        if (f !== null) {
          JS(f, t, a);
          for (var p = f.sibling; p !== null; )
            JS(p, t, a), p = p.sibling;
        }
      }
    }
    var $r = null, ul = !1;
    function E_(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case G: {
                $r = i.stateNode, ul = !1;
                break e;
              }
              case j: {
                $r = i.stateNode.containerInfo, ul = !0;
                break e;
              }
              case X: {
                $r = i.stateNode.containerInfo, ul = !0;
                break e;
              }
            }
            i = i.return;
          }
        if ($r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        U1(e, t, a), $r = null, ul = !1;
      }
      y_(a);
    }
    function Go(e, t, a) {
      for (var i = a.child; i !== null; )
        U1(e, t, i), i = i.sibling;
    }
    function U1(e, t, a) {
      switch (kd(a), a.tag) {
        case G:
          Br || $f(a, t);
        case ae: {
          {
            var i = $r, u = ul;
            $r = null, Go(e, t, a), $r = i, ul = u, $r !== null && (ul ? Vb($r, a.stateNode) : Fb($r, a.stateNode));
          }
          return;
        }
        case Ft: {
          $r !== null && (ul ? Bb($r, a.stateNode) : sg($r, a.stateNode));
          return;
        }
        case X: {
          {
            var s = $r, f = ul;
            $r = a.stateNode.containerInfo, ul = !0, Go(e, t, a), $r = s, ul = f;
          }
          return;
        }
        case N:
        case be:
        case ut:
        case Ze: {
          if (!Br) {
            var p = a.updateQueue;
            if (p !== null) {
              var h = p.lastEffect;
              if (h !== null) {
                var E = h.next, T = E;
                do {
                  var U = T, L = U.destroy, $ = U.tag;
                  L !== void 0 && (($ & Wl) !== Qa ? Hm(a, t, L) : ($ & vr) !== Qa && (Lc(a), a.mode & rt ? (Kl(), Hm(a, t, L), Gl(a)) : Hm(a, t, L), ho())), T = T.next;
                } while (T !== E);
              }
            }
          }
          Go(e, t, a);
          return;
        }
        case A: {
          if (!Br) {
            $f(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && KS(a, t, Y);
          }
          Go(e, t, a);
          return;
        }
        case fn: {
          Go(e, t, a);
          return;
        }
        case Ge: {
          if (
            // TODO: Remove this dead flag
            a.mode & Tt
          ) {
            var J = Br;
            Br = J || a.memoizedState !== null, Go(e, t, a), Br = J;
          } else
            Go(e, t, a);
          break;
        }
        default: {
          Go(e, t, a);
          return;
        }
      }
    }
    function C_(e) {
      e.memoizedState;
    }
    function R_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && ux(s);
          }
        }
      }
    }
    function A1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new i_()), t.forEach(function(i) {
          var u = gD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), fr)
              if (Vf !== null && Bf !== null)
                ev(Bf, Vf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function T_(e, t, a) {
      Vf = a, Bf = e, Kt(t), z1(t, e), Kt(t), Vf = null, Bf = null;
    }
    function ol(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            E_(e, t, s);
          } catch (h) {
            En(s, t, h);
          }
        }
      var f = sc();
      if (t.subtreeFlags & aa)
        for (var p = t.child; p !== null; )
          Kt(p), z1(p, e), p = p.sibling;
      Kt(f);
    }
    function z1(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case N:
        case be:
        case ut:
        case Ze: {
          if (ol(t, e), Xl(e), u & gt) {
            try {
              ll(Wl | pr, e, e.return), qo(Wl | pr, e);
            } catch (ot) {
              En(e, e.return, ot);
            }
            if (e.mode & rt) {
              try {
                Kl(), ll(vr | pr, e, e.return);
              } catch (ot) {
                En(e, e.return, ot);
              }
              Gl(e);
            } else
              try {
                ll(vr | pr, e, e.return);
              } catch (ot) {
                En(e, e.return, ot);
              }
          }
          return;
        }
        case A: {
          ol(t, e), Xl(e), u & ta && i !== null && $f(i, i.return);
          return;
        }
        case G: {
          ol(t, e), Xl(e), u & ta && i !== null && $f(i, i.return);
          {
            if (e.flags & Xt) {
              var s = e.stateNode;
              try {
                U0(s);
              } catch (ot) {
                En(e, e.return, ot);
              }
            }
            if (u & gt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, h = i !== null ? i.memoizedProps : p, E = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    Ub(f, T, E, h, p, e);
                  } catch (ot) {
                    En(e, e.return, ot);
                  }
              }
            }
          }
          return;
        }
        case ae: {
          if (ol(t, e), Xl(e), u & gt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var U = e.stateNode, L = e.memoizedProps, $ = i !== null ? i.memoizedProps : L;
            try {
              Ab(U, $, L);
            } catch (ot) {
              En(e, e.return, ot);
            }
          }
          return;
        }
        case j: {
          if (ol(t, e), Xl(e), u & gt && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
              try {
                lx(t.containerInfo);
              } catch (ot) {
                En(e, e.return, ot);
              }
          }
          return;
        }
        case X: {
          ol(t, e), Xl(e);
          return;
        }
        case K: {
          ol(t, e), Xl(e);
          var J = e.child;
          if (J.flags & Dl) {
            var Ue = J.stateNode, Je = J.memoizedState, We = Je !== null;
            if (Ue.isHidden = We, We) {
              var Lt = J.alternate !== null && J.alternate.memoizedState !== null;
              Lt || rD();
            }
          }
          if (u & gt) {
            try {
              C_(e);
            } catch (ot) {
              En(e, e.return, ot);
            }
            A1(e);
          }
          return;
        }
        case Ge: {
          var wt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Tt
          ) {
            var F = Br;
            Br = F || wt, ol(t, e), Br = F;
          } else
            ol(t, e);
          if (Xl(e), u & Dl) {
            var Z = e.stateNode, V = e.memoizedState, ce = V !== null, Ae = e;
            if (Z.isHidden = ce, ce && !wt && (Ae.mode & Tt) !== tt) {
              Ve = Ae;
              for (var ke = Ae.child; ke !== null; )
                Ve = ke, x_(ke), ke = ke.sibling;
            }
            m_(Ae, ce);
          }
          return;
        }
        case bt: {
          ol(t, e), Xl(e), u & gt && A1(e);
          return;
        }
        case fn:
          return;
        default: {
          ol(t, e), Xl(e);
          return;
        }
      }
    }
    function Xl(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          S_(e);
        } catch (a) {
          En(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & za && (e.flags &= ~za);
    }
    function b_(e, t, a) {
      Vf = a, Bf = t, Ve = e, j1(e, t, a), Vf = null, Bf = null;
    }
    function j1(e, t, a) {
      for (var i = (e.mode & Tt) !== tt; Ve !== null; ) {
        var u = Ve, s = u.child;
        if (u.tag === Ge && i) {
          var f = u.memoizedState !== null, p = f || Pm;
          if (p) {
            ZS(e, t, a);
            continue;
          } else {
            var h = u.alternate, E = h !== null && h.memoizedState !== null, T = E || Br, U = Pm, L = Br;
            Pm = p, Br = T, Br && !L && (Ve = u, w_(u));
            for (var $ = s; $ !== null; )
              Ve = $, j1(
                $,
                // New root; bubble back up to here and stop.
                t,
                a
              ), $ = $.sibling;
            Ve = u, Pm = U, Br = L, ZS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & br) !== Ke && s !== null ? (s.return = u, Ve = s) : ZS(e, t, a);
      }
    }
    function ZS(e, t, a) {
      for (; Ve !== null; ) {
        var i = Ve;
        if ((i.flags & br) !== Ke) {
          var u = i.alternate;
          Kt(i);
          try {
            v_(t, u, i, a);
          } catch (f) {
            En(i, i.return, f);
          }
          Ln();
        }
        if (i === e) {
          Ve = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ve = s;
          return;
        }
        Ve = i.return;
      }
    }
    function x_(e) {
      for (; Ve !== null; ) {
        var t = Ve, a = t.child;
        switch (t.tag) {
          case N:
          case be:
          case ut:
          case Ze: {
            if (t.mode & rt)
              try {
                Kl(), ll(vr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              ll(vr, t, t.return);
            break;
          }
          case A: {
            $f(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && KS(t, t.return, i);
            break;
          }
          case G: {
            $f(t, t.return);
            break;
          }
          case Ge: {
            var u = t.memoizedState !== null;
            if (u) {
              P1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ve = a) : P1(e);
      }
    }
    function P1(e) {
      for (; Ve !== null; ) {
        var t = Ve;
        if (t === e) {
          Ve = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ve = a;
          return;
        }
        Ve = t.return;
      }
    }
    function w_(e) {
      for (; Ve !== null; ) {
        var t = Ve, a = t.child;
        if (t.tag === Ge) {
          var i = t.memoizedState !== null;
          if (i) {
            H1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ve = a) : H1(e);
      }
    }
    function H1(e) {
      for (; Ve !== null; ) {
        var t = Ve;
        Kt(t);
        try {
          h_(t);
        } catch (i) {
          En(t, t.return, i);
        }
        if (Ln(), t === e) {
          Ve = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ve = a;
          return;
        }
        Ve = t.return;
      }
    }
    function __(e, t, a, i) {
      Ve = t, D_(t, e, a, i);
    }
    function D_(e, t, a, i) {
      for (; Ve !== null; ) {
        var u = Ve, s = u.child;
        (u.subtreeFlags & ja) !== Ke && s !== null ? (s.return = u, Ve = s) : O_(e, t, a, i);
      }
    }
    function O_(e, t, a, i) {
      for (; Ve !== null; ) {
        var u = Ve;
        if ((u.flags & Cn) !== Ke) {
          Kt(u);
          try {
            k_(t, u, a, i);
          } catch (f) {
            En(u, u.return, f);
          }
          Ln();
        }
        if (u === e) {
          Ve = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ve = s;
          return;
        }
        Ve = u.return;
      }
    }
    function k_(e, t, a, i) {
      switch (t.tag) {
        case N:
        case be:
        case Ze: {
          if (t.mode & rt) {
            kS();
            try {
              qo(Fr | pr, t);
            } finally {
              OS(t);
            }
          } else
            qo(Fr | pr, t);
          break;
        }
      }
    }
    function N_(e) {
      Ve = e, L_();
    }
    function L_() {
      for (; Ve !== null; ) {
        var e = Ve, t = e.child;
        if ((Ve.flags & Wt) !== Ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ve = u, A_(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ve = e;
          }
        }
        (e.subtreeFlags & ja) !== Ke && t !== null ? (t.return = e, Ve = t) : M_();
      }
    }
    function M_() {
      for (; Ve !== null; ) {
        var e = Ve;
        (e.flags & Cn) !== Ke && (Kt(e), U_(e), Ln());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ve = t;
          return;
        }
        Ve = e.return;
      }
    }
    function U_(e) {
      switch (e.tag) {
        case N:
        case be:
        case Ze: {
          e.mode & rt ? (kS(), ll(Fr | pr, e, e.return), OS(e)) : ll(Fr | pr, e, e.return);
          break;
        }
      }
    }
    function A_(e, t) {
      for (; Ve !== null; ) {
        var a = Ve;
        Kt(a), j_(a, t), Ln();
        var i = a.child;
        i !== null ? (i.return = a, Ve = i) : z_(e);
      }
    }
    function z_(e) {
      for (; Ve !== null; ) {
        var t = Ve, a = t.sibling, i = t.return;
        if (N1(t), t === e) {
          Ve = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ve = a;
          return;
        }
        Ve = i;
      }
    }
    function j_(e, t) {
      switch (e.tag) {
        case N:
        case be:
        case Ze: {
          e.mode & rt ? (kS(), ll(Fr, e, t), OS(e)) : ll(Fr, e, t);
          break;
        }
      }
    }
    function P_(e) {
      switch (e.tag) {
        case N:
        case be:
        case Ze: {
          try {
            qo(vr | pr, e);
          } catch (a) {
            En(e, e.return, a);
          }
          break;
        }
        case A: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            En(e, e.return, a);
          }
          break;
        }
      }
    }
    function H_(e) {
      switch (e.tag) {
        case N:
        case be:
        case Ze: {
          try {
            qo(Fr | pr, e);
          } catch (t) {
            En(e, e.return, t);
          }
          break;
        }
      }
    }
    function F_(e) {
      switch (e.tag) {
        case N:
        case be:
        case Ze: {
          try {
            ll(vr | pr, e, e.return);
          } catch (a) {
            En(e, e.return, a);
          }
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && KS(e, e.return, t);
          break;
        }
      }
    }
    function V_(e) {
      switch (e.tag) {
        case N:
        case be:
        case Ze:
          try {
            ll(Fr | pr, e, e.return);
          } catch (t) {
            En(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var $p = Symbol.for;
      $p("selector.component"), $p("selector.has_pseudo_class"), $p("selector.role"), $p("selector.test_id"), $p("selector.text");
    }
    var B_ = [];
    function $_() {
      B_.forEach(function(e) {
        return e();
      });
    }
    var I_ = S.ReactCurrentActQueue;
    function Y_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function F1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && I_.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var W_ = Math.ceil, eE = S.ReactCurrentDispatcher, tE = S.ReactCurrentOwner, Ir = S.ReactCurrentBatchConfig, sl = S.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), V1 = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), Ni = (
      /*                */
      4
    ), Fu = 0, Ip = 1, ec = 2, Fm = 3, Yp = 4, B1 = 5, nE = 6, Nt = yr, wa = null, Fn = null, gr = ee, Jl = ee, rE = Ho(ee), Sr = Fu, Wp = null, Vm = ee, Qp = ee, Bm = ee, qp = null, qa = null, aE = 0, $1 = 500, I1 = 1 / 0, Q_ = 500, Vu = null;
    function Gp() {
      I1 = _n() + Q_;
    }
    function Y1() {
      return I1;
    }
    var $m = !1, iE = null, If = null, tc = !1, Ko = null, Kp = ee, lE = [], uE = null, q_ = 50, Xp = 0, oE = null, sE = !1, Im = !1, G_ = 50, Yf = 0, Ym = null, Jp = cn, Wm = ee, W1 = !1;
    function Qm() {
      return wa;
    }
    function _a() {
      return (Nt & (Yr | Ni)) !== yr ? _n() : (Jp !== cn || (Jp = _n()), Jp);
    }
    function Xo(e) {
      var t = e.mode;
      if ((t & Tt) === tt)
        return it;
      if ((Nt & Yr) !== yr && gr !== ee)
        return qn(gr);
      var a = Yx() !== Ix;
      if (a) {
        if (Ir.transition !== null) {
          var i = Ir.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Wm === kt && (Wm = Pd()), Wm;
      }
      var u = Va();
      if (u !== kt)
        return u;
      var s = Ob();
      return s;
    }
    function K_(e) {
      var t = e.mode;
      return (t & Tt) === tt ? it : ky();
    }
    function Er(e, t, a, i) {
      ED(), W1 && y("useInsertionEffect must not schedule updates."), sE && (Im = !0), Tu(e, a, i), (Nt & Yr) !== ee && e === wa ? TD(t) : (fr && $d(e, t, a), bD(t), e === wa && ((Nt & Yr) === yr && (Qp = St(Qp, a)), Sr === Yp && Jo(e, gr)), Ga(e, i), a === it && Nt === yr && (t.mode & Tt) === tt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !sl.isBatchingLegacy && (Gp(), Y0()));
    }
    function X_(e, t, a) {
      var i = e.current;
      i.lanes = t, Tu(e, t, a), Ga(e, a);
    }
    function J_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Nt & Yr) !== yr
      );
    }
    function Ga(e, t) {
      var a = e.callbackNode;
      _y(e, t);
      var i = ws(e, e === wa ? gr : ee);
      if (i === ee) {
        a !== null && oR(a), e.callbackNode = null, e.callbackPriority = kt;
        return;
      }
      var u = $n(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(sl.current !== null && a !== mE)) {
        a == null && s !== it && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && oR(a);
      var f;
      if (u === it)
        e.tag === Fo ? (sl.isBatchingLegacy !== null && (sl.didScheduleLegacyUpdate = !0), _x(G1.bind(null, e))) : I0(G1.bind(null, e)), sl.current !== null ? sl.current.push(Vo) : Nb(function() {
          (Nt & (Yr | Ni)) === yr && Vo();
        }), f = null;
      else {
        var p;
        switch (Ns(i)) {
          case xr:
            p = Dc;
            break;
          case dr:
            p = Ra;
            break;
          case qi:
            p = Ci;
            break;
          case Os:
            p = kl;
            break;
          default:
            p = Ci;
            break;
        }
        f = yE(p, Q1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function Q1(e, t) {
      if (Ew(), Jp = cn, Wm = ee, (Nt & (Yr | Ni)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = $u();
      if (i && e.callbackNode !== a)
        return null;
      var u = ws(e, e === wa ? gr : ee);
      if (u === ee)
        return null;
      var s = !Ds(e, u) && !ih(e, u) && !t, f = s ? oD(e, u) : Gm(e, u);
      if (f !== Fu) {
        if (f === ec) {
          var p = zd(e);
          p !== ee && (u = p, f = cE(e, p));
        }
        if (f === Ip) {
          var h = Wp;
          throw nc(e, ee), Jo(e, u), Ga(e, _n()), h;
        }
        if (f === nE)
          Jo(e, u);
        else {
          var E = !Ds(e, u), T = e.current.alternate;
          if (E && !eD(T)) {
            if (f = Gm(e, u), f === ec) {
              var U = zd(e);
              U !== ee && (u = U, f = cE(e, U));
            }
            if (f === Ip) {
              var L = Wp;
              throw nc(e, ee), Jo(e, u), Ga(e, _n()), L;
            }
          }
          e.finishedWork = T, e.finishedLanes = u, Z_(e, f, u);
        }
      }
      return Ga(e, _n()), e.callbackNode === a ? Q1.bind(null, e) : null;
    }
    function cE(e, t) {
      var a = qp;
      if (Kn(e)) {
        var i = nc(e, t);
        i.flags |= Mn, Ex(e.containerInfo);
      }
      var u = Gm(e, t);
      if (u !== ec) {
        var s = qa;
        qa = a, s !== null && q1(s);
      }
      return u;
    }
    function q1(e) {
      qa === null ? qa = e : qa.push.apply(qa, e);
    }
    function Z_(e, t, a) {
      switch (t) {
        case Fu:
        case Ip:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, qa, Vu);
          break;
        }
        case Fm: {
          if (Jo(e, a), Jc(a) && // do not delay if we're inside an act() scope
          !sR()) {
            var i = aE + $1 - _n();
            if (i > 10) {
              var u = ws(e, ee);
              if (u !== ee)
                break;
              var s = e.suspendedLanes;
              if (!Ru(s, a)) {
                _a(), Vd(e, s);
                break;
              }
              e.timeoutHandle = ug(rc.bind(null, e, qa, Vu), i);
              break;
            }
          }
          rc(e, qa, Vu);
          break;
        }
        case Yp: {
          if (Jo(e, a), ah(a))
            break;
          if (!sR()) {
            var f = rh(e, a), p = f, h = _n() - p, E = SD(h) - h;
            if (E > 10) {
              e.timeoutHandle = ug(rc.bind(null, e, qa, Vu), E);
              break;
            }
          }
          rc(e, qa, Vu);
          break;
        }
        case B1: {
          rc(e, qa, Vu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function eD(e) {
      for (var t = e; ; ) {
        if (t.flags & Ss) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Fe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var h = t.child;
        if (t.subtreeFlags & Ss && h !== null) {
          h.return = t, t = h;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Jo(e, t) {
      t = Ro(t, Bm), t = Ro(t, Qp), Fd(e, t);
    }
    function G1(e) {
      if (Cw(), (Nt & (Yr | Ni)) !== yr)
        throw new Error("Should not already be working.");
      $u();
      var t = ws(e, ee);
      if (!oa(t, it))
        return Ga(e, _n()), null;
      var a = Gm(e, t);
      if (e.tag !== Fo && a === ec) {
        var i = zd(e);
        i !== ee && (t = i, a = cE(e, i));
      }
      if (a === Ip) {
        var u = Wp;
        throw nc(e, ee), Jo(e, t), Ga(e, _n()), u;
      }
      if (a === nE)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rc(e, qa, Vu), Ga(e, _n()), null;
    }
    function tD(e, t) {
      t !== ee && (To(e, St(t, it)), Ga(e, _n()), (Nt & (Yr | Ni)) === yr && (Gp(), Vo()));
    }
    function fE(e, t) {
      var a = Nt;
      Nt |= V1;
      try {
        return e(t);
      } finally {
        Nt = a, Nt === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !sl.isBatchingLegacy && (Gp(), Y0());
      }
    }
    function nD(e, t, a, i, u) {
      var s = Va(), f = Ir.transition;
      try {
        return Ir.transition = null, Gn(xr), e(t, a, i, u);
      } finally {
        Gn(s), Ir.transition = f, Nt === yr && Gp();
      }
    }
    function Bu(e) {
      Ko !== null && Ko.tag === Fo && (Nt & (Yr | Ni)) === yr && $u();
      var t = Nt;
      Nt |= V1;
      var a = Ir.transition, i = Va();
      try {
        return Ir.transition = null, Gn(xr), e ? e() : void 0;
      } finally {
        Gn(i), Ir.transition = a, Nt = t, (Nt & (Yr | Ni)) === yr && Vo();
      }
    }
    function K1() {
      return (Nt & (Yr | Ni)) !== yr;
    }
    function qm(e, t) {
      ca(rE, Jl, e), Jl = St(Jl, t);
    }
    function dE(e) {
      Jl = rE.current, sa(rE, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = ee;
      var a = e.timeoutHandle;
      if (a !== og && (e.timeoutHandle = og, kb(a)), Fn !== null)
        for (var i = Fn.return; i !== null; ) {
          var u = i.alternate;
          x1(u, i), i = i.return;
        }
      wa = e;
      var s = ac(e.current, null);
      return Fn = s, gr = Jl = t, Sr = Fu, Wp = null, Vm = ee, Qp = ee, Bm = ee, qp = null, qa = null, Gx(), tl.discardPendingWarnings(), s;
    }
    function X1(e, t) {
      do {
        var a = Fn;
        try {
          if (nm(), _C(), Ln(), tE.current = null, a === null || a.return === null) {
            Sr = Ip, Wp = t, Fn = null;
            return;
          }
          if (Ee && a.mode & rt && Um(a, !0), ze)
            if (pu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              eh(a, i, gr);
            } else
              Mc(a, t, gr);
          ww(e, a.return, a, t, gr), tR(a);
        } catch (u) {
          t = u, Fn === a && a !== null ? (a = a.return, Fn = a) : a = Fn;
          continue;
        }
        return;
      } while (!0);
    }
    function J1() {
      var e = eE.current;
      return eE.current = Om, e === null ? Om : e;
    }
    function Z1(e) {
      eE.current = e;
    }
    function rD() {
      aE = _n();
    }
    function Zp(e) {
      Vm = St(e, Vm);
    }
    function aD() {
      Sr === Fu && (Sr = Fm);
    }
    function pE() {
      (Sr === Fu || Sr === Fm || Sr === ec) && (Sr = Yp), wa !== null && (_s(Vm) || _s(Qp)) && Jo(wa, gr);
    }
    function iD(e) {
      Sr !== Yp && (Sr = ec), qp === null ? qp = [e] : qp.push(e);
    }
    function lD() {
      return Sr === Fu;
    }
    function Gm(e, t) {
      var a = Nt;
      Nt |= Yr;
      var i = J1();
      if (wa !== e || gr !== t) {
        if (fr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (ev(e, gr), u.clear()), tf(e, t);
        }
        Vu = Id(), nc(e, t);
      }
      li(t);
      do
        try {
          uD();
          break;
        } catch (s) {
          X1(e, s);
        }
      while (!0);
      if (nm(), Nt = a, Z1(i), Fn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return yo(), wa = null, gr = ee, Sr;
    }
    function uD() {
      for (; Fn !== null; )
        eR(Fn);
    }
    function oD(e, t) {
      var a = Nt;
      Nt |= Yr;
      var i = J1();
      if (wa !== e || gr !== t) {
        if (fr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (ev(e, gr), u.clear()), tf(e, t);
        }
        Vu = Id(), Gp(), nc(e, t);
      }
      li(t);
      do
        try {
          sD();
          break;
        } catch (s) {
          X1(e, s);
        }
      while (!0);
      return nm(), Z1(i), Nt = a, Fn !== null ? (Rs(), Fu) : (yo(), wa = null, gr = ee, Sr);
    }
    function sD() {
      for (; Fn !== null && !_c(); )
        eR(Fn);
    }
    function eR(e) {
      var t = e.alternate;
      Kt(e);
      var a;
      (e.mode & rt) !== tt ? (DS(e), a = vE(t, e, Jl), Um(e, !0)) : a = vE(t, e, Jl), Ln(), e.memoizedProps = e.pendingProps, a === null ? tR(e) : Fn = a, tE.current = null;
    }
    function tR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Sa) === Ke) {
          Kt(t);
          var u = void 0;
          if ((t.mode & rt) === tt ? u = b1(a, t, Jl) : (DS(t), u = b1(a, t, Jl), Um(t, !1)), Ln(), u !== null) {
            Fn = u;
            return;
          }
        } else {
          var s = a_(a, t);
          if (s !== null) {
            s.flags &= Yv, Fn = s;
            return;
          }
          if ((t.mode & rt) !== tt) {
            Um(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Sa, i.subtreeFlags = Ke, i.deletions = null;
          else {
            Sr = nE, Fn = null;
            return;
          }
        }
        var h = t.sibling;
        if (h !== null) {
          Fn = h;
          return;
        }
        t = i, Fn = t;
      } while (t !== null);
      Sr === Fu && (Sr = B1);
    }
    function rc(e, t, a) {
      var i = Va(), u = Ir.transition;
      try {
        Ir.transition = null, Gn(xr), cD(e, t, a, i);
      } finally {
        Ir.transition = u, Gn(i);
      }
      return null;
    }
    function cD(e, t, a, i) {
      do
        $u();
      while (Ko !== null);
      if (CD(), (Nt & (Yr | Ni)) !== yr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (kc(s), u === null)
        return Nd(), null;
      if (s === ee && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ee, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = kt;
      var f = St(u.lanes, u.childLanes);
      Bd(e, f), e === wa && (wa = null, Fn = null, gr = ee), ((u.subtreeFlags & ja) !== Ke || (u.flags & ja) !== Ke) && (tc || (tc = !0, uE = a, yE(Ci, function() {
        return $u(), null;
      })));
      var p = (u.subtreeFlags & (vo | aa | br | ja)) !== Ke, h = (u.flags & (vo | aa | br | ja)) !== Ke;
      if (p || h) {
        var E = Ir.transition;
        Ir.transition = null;
        var T = Va();
        Gn(xr);
        var U = Nt;
        Nt |= Ni, tE.current = null, s_(e, u), JC(), T_(e, u, s), Tb(e.containerInfo), e.current = u, th(s), b_(u, e, s), mo(), qv(), Nt = U, Gn(T), Ir.transition = E;
      } else
        e.current = u, JC();
      var L = tc;
      if (tc ? (tc = !1, Ko = e, Kp = s) : (Yf = 0, Ym = null), f = e.pendingLanes, f === ee && (If = null), L || iR(e.current, !1), Yi(u.stateNode, i), fr && e.memoizedUpdaters.clear(), $_(), Ga(e, _n()), t !== null)
        for (var $ = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var J = t[Y], Ue = J.stack, Je = J.digest;
          $(J.value, {
            componentStack: Ue,
            digest: Je
          });
        }
      if ($m) {
        $m = !1;
        var We = iE;
        throw iE = null, We;
      }
      return oa(Kp, it) && e.tag !== Fo && $u(), f = e.pendingLanes, oa(f, it) ? (Sw(), e === oE ? Xp++ : (Xp = 0, oE = e)) : Xp = 0, Vo(), Nd(), null;
    }
    function $u() {
      if (Ko !== null) {
        var e = Ns(Kp), t = Ly(qi, e), a = Ir.transition, i = Va();
        try {
          return Ir.transition = null, Gn(t), dD();
        } finally {
          Gn(i), Ir.transition = a;
        }
      }
      return !1;
    }
    function fD(e) {
      lE.push(e), tc || (tc = !0, yE(Ci, function() {
        return $u(), null;
      }));
    }
    function dD() {
      if (Ko === null)
        return !1;
      var e = uE;
      uE = null;
      var t = Ko, a = Kp;
      if (Ko = null, Kp = ee, (Nt & (Yr | Ni)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      sE = !0, Im = !1, nh(a);
      var i = Nt;
      Nt |= Ni, N_(t.current), __(t, t.current, a, e);
      {
        var u = lE;
        lE = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          p_(t, f);
        }
      }
      Cs(), iR(t.current, !0), Nt = i, Vo(), Im ? t === Ym ? Yf++ : (Yf = 0, Ym = t) : Yf = 0, sE = !1, Im = !1, Ll(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function nR(e) {
      return If !== null && If.has(e);
    }
    function pD(e) {
      If === null ? If = /* @__PURE__ */ new Set([e]) : If.add(e);
    }
    function vD(e) {
      $m || ($m = !0, iE = e);
    }
    var hD = vD;
    function rR(e, t, a) {
      var i = Js(a, t), u = e1(e, i, it), s = $o(e, u, it), f = _a();
      s !== null && (Tu(s, it, f), Ga(s, f));
    }
    function En(e, t, a) {
      if (l_(a), tv(!1), e.tag === j) {
        rR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === j) {
          rR(i, e, a);
          return;
        } else if (i.tag === A) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !nR(s)) {
            var f = Js(a, e), p = US(i, f, it), h = $o(i, p, it), E = _a();
            h !== null && (Tu(h, it, E), Ga(h, E));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function mD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = _a();
      Vd(e, a), xD(e), wa === e && Ru(gr, a) && (Sr === Yp || Sr === Fm && Jc(gr) && _n() - aE < $1 ? nc(e, ee) : Bm = St(Bm, a)), Ga(e, u);
    }
    function aR(e, t) {
      t === kt && (t = K_(e));
      var a = _a(), i = Wa(e, t);
      i !== null && (Tu(i, t, a), Ga(i, a));
    }
    function yD(e) {
      var t = e.memoizedState, a = kt;
      t !== null && (a = t.retryLane), aR(e, a);
    }
    function gD(e, t) {
      var a = kt, i;
      switch (e.tag) {
        case K:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case bt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), aR(e, a);
    }
    function SD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : W_(e / 1960) * 1960;
    }
    function ED() {
      if (Xp > q_)
        throw Xp = 0, oE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Yf > G_ && (Yf = 0, Ym = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function CD() {
      tl.flushLegacyContextWarning(), tl.flushPendingUnsafeLifecycleWarnings();
    }
    function iR(e, t) {
      Kt(e), Km(e, ra, F_), t && Km(e, du, V_), Km(e, ra, P_), t && Km(e, du, H_), Ln();
    }
    function Km(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ke ? i = i.child : ((i.flags & t) !== Ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Xm = null;
    function lR(e) {
      {
        if ((Nt & Yr) !== yr || !(e.mode & Tt))
          return;
        var t = e.tag;
        if (t !== Q && t !== j && t !== A && t !== N && t !== be && t !== ut && t !== Ze)
          return;
        var a = dt(e) || "ReactComponent";
        if (Xm !== null) {
          if (Xm.has(a))
            return;
          Xm.add(a);
        } else
          Xm = /* @__PURE__ */ new Set([a]);
        var i = wn;
        try {
          Kt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Kt(e) : Ln();
        }
      }
    }
    var vE;
    {
      var RD = null;
      vE = function(e, t, a) {
        var i = vR(RD, t);
        try {
          return S1(e, t, a);
        } catch (s) {
          if (Ax() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (nm(), _C(), x1(e, t), vR(t, i), t.mode & rt && DS(t), fu(null, S1, null, e, t, a), xy()) {
            var u = Ed();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var uR = !1, hE;
    hE = /* @__PURE__ */ new Set();
    function TD(e) {
      if (Jr && !mw())
        switch (e.tag) {
          case N:
          case be:
          case Ze: {
            var t = Fn && dt(Fn) || "Unknown", a = t;
            if (!hE.has(a)) {
              hE.add(a);
              var i = dt(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case A: {
            uR || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), uR = !0);
            break;
          }
        }
    }
    function ev(e, t) {
      if (fr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          $d(e, i, t);
        });
      }
    }
    var mE = {};
    function yE(e, t) {
      {
        var a = sl.current;
        return a !== null ? (a.push(t), mE) : wc(e, t);
      }
    }
    function oR(e) {
      if (e !== mE)
        return Qv(e);
    }
    function sR() {
      return sl.current !== null;
    }
    function bD(e) {
      {
        if (e.mode & Tt) {
          if (!F1())
            return;
        } else if (!Y_() || Nt !== yr || e.tag !== N && e.tag !== be && e.tag !== Ze)
          return;
        if (sl.current === null) {
          var t = wn;
          try {
            Kt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, dt(e));
          } finally {
            t ? Kt(e) : Ln();
          }
        }
      }
    }
    function xD(e) {
      e.tag !== Fo && F1() && sl.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function tv(e) {
      W1 = e;
    }
    var Li = null, Wf = null, wD = function(e) {
      Li = e;
    };
    function Qf(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        return t === void 0 ? e : t.current;
      }
    }
    function gE(e) {
      return Qf(e);
    }
    function SE(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Me,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function cR(e, t) {
      {
        if (Li === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case A: {
            typeof i == "function" && (u = !0);
            break;
          }
          case N: {
            (typeof i == "function" || s === Xe) && (u = !0);
            break;
          }
          case be: {
            (s === Me || s === Xe) && (u = !0);
            break;
          }
          case ut:
          case Ze: {
            (s === yt || s === Xe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Li(a);
          if (f !== void 0 && f === Li(i))
            return !0;
        }
        return !1;
      }
    }
    function fR(e) {
      {
        if (Li === null || typeof WeakSet != "function")
          return;
        Wf === null && (Wf = /* @__PURE__ */ new WeakSet()), Wf.add(e);
      }
    }
    var _D = function(e, t) {
      {
        if (Li === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        $u(), Bu(function() {
          EE(e.current, i, a);
        });
      }
    }, DD = function(e, t) {
      {
        if (e.context !== oi)
          return;
        $u(), Bu(function() {
          nv(t, e, null, null);
        });
      }
    };
    function EE(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, h = null;
        switch (f) {
          case N:
          case Ze:
          case A:
            h = p;
            break;
          case be:
            h = p.render;
            break;
        }
        if (Li === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var E = !1, T = !1;
        if (h !== null) {
          var U = Li(h);
          U !== void 0 && (a.has(U) ? T = !0 : t.has(U) && (f === A ? T = !0 : E = !0));
        }
        if (Wf !== null && (Wf.has(e) || i !== null && Wf.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || E) {
          var L = Wa(e, it);
          L !== null && Er(L, e, it, cn);
        }
        u !== null && !T && EE(u, t, a), s !== null && EE(s, t, a);
      }
    }
    var OD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return CE(e.current, i, a), a;
      }
    };
    function CE(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case N:
          case Ze:
          case A:
            p = f;
            break;
          case be:
            p = f.render;
            break;
        }
        var h = !1;
        p !== null && t.has(p) && (h = !0), h ? kD(e, a) : i !== null && CE(i, t, a), u !== null && CE(u, t, a);
      }
    }
    function kD(e, t) {
      {
        var a = ND(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case G:
              t.add(i.stateNode);
              return;
            case X:
              t.add(i.stateNode.containerInfo);
              return;
            case j:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function ND(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === G)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var RE;
    {
      RE = !1;
      try {
        var dR = Object.preventExtensions({});
      } catch {
        RE = !0;
      }
    }
    function LD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ke, this.subtreeFlags = Ke, this.deletions = null, this.lanes = ee, this.childLanes = ee, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !RE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var si = function(e, t, a, i) {
      return new LD(e, t, a, i);
    };
    function TE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function MD(e) {
      return typeof e == "function" && !TE(e) && e.defaultProps === void 0;
    }
    function UD(e) {
      if (typeof e == "function")
        return TE(e) ? A : N;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Me)
          return be;
        if (t === yt)
          return ut;
      }
      return Q;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = si(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ke, a.subtreeFlags = Ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & cr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Q:
        case N:
        case Ze:
          a.type = Qf(e.type);
          break;
        case A:
          a.type = gE(e.type);
          break;
        case be:
          a.type = SE(e.type);
          break;
      }
      return a;
    }
    function AD(e, t) {
      e.flags &= cr | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ee, e.lanes = t, e.child = null, e.subtreeFlags = Ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function zD(e, t, a) {
      var i;
      return e === qh ? (i = Tt, t === !0 && (i |= Dn, i |= Ha)) : i = tt, fr && (i |= rt), si(j, null, null, i);
    }
    function bE(e, t, a, i, u, s) {
      var f = Q, p = e;
      if (typeof e == "function")
        TE(e) ? (f = A, p = gE(p)) : p = Qf(p);
      else if (typeof e == "string")
        f = G;
      else
        e:
          switch (e) {
            case ga:
              return Zo(a.children, u, s, t);
            case vi:
              f = oe, u |= Dn, (u & Tt) !== tt && (u |= Ha);
              break;
            case _:
              return jD(a, u, s, t);
            case mt:
              return PD(a, u, s, t);
            case Ot:
              return HD(a, u, s, t);
            case pn:
              return pR(a, u, s, t);
            case sr:
            case Vn:
            case hi:
            case qu:
            case dn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ie:
                    f = we;
                    break e;
                  case Ce:
                    f = ye;
                    break e;
                  case Me:
                    f = be, p = SE(p);
                    break e;
                  case yt:
                    f = ut;
                    break e;
                  case Xe:
                    f = Zt, p = null;
                    break e;
                }
              var h = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var E = i ? dt(i) : null;
                E && (h += `

Check the render method of \`` + E + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h));
            }
          }
      var T = si(f, a, t, u);
      return T.elementType = e, T.type = p, T.lanes = s, T._debugOwner = i, T;
    }
    function xE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = bE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Zo(e, t, a, i) {
      var u = si(ne, e, i, t);
      return u.lanes = a, u;
    }
    function jD(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = si(je, e, i, t | rt);
      return u.elementType = _, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function PD(e, t, a, i) {
      var u = si(K, e, i, t);
      return u.elementType = mt, u.lanes = a, u;
    }
    function HD(e, t, a, i) {
      var u = si(bt, e, i, t);
      return u.elementType = Ot, u.lanes = a, u;
    }
    function pR(e, t, a, i) {
      var u = si(Ge, e, i, t);
      u.elementType = pn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function wE(e, t, a) {
      var i = si(ae, e, null, t);
      return i.lanes = a, i;
    }
    function FD() {
      var e = si(G, null, null, tt);
      return e.elementType = "DELETED", e;
    }
    function VD(e) {
      var t = si(Ft, null, null, tt);
      return t.stateNode = e, t;
    }
    function _E(e, t, a) {
      var i = e.children !== null ? e.children : [], u = si(X, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function vR(e, t) {
      return e === null && (e = si(Q, null, null, tt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function BD(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = og, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = kt, this.eventTimes = ef(ee), this.expirationTimes = ef(cn), this.pendingLanes = ee, this.suspendedLanes = ee, this.pingedLanes = ee, this.expiredLanes = ee, this.mutableReadLanes = ee, this.finishedLanes = ee, this.entangledLanes = ee, this.entanglements = ef(ee), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < gn; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case qh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Fo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function hR(e, t, a, i, u, s, f, p, h, E) {
      var T = new BD(e, t, a, p, h), U = zD(t, s);
      T.current = U, U.stateNode = T;
      {
        var L = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        U.memoizedState = L;
      }
      return Ag(U), T;
    }
    var DE = "18.2.0";
    function $D(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return qr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Mr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var OE, kE;
    OE = !1, kE = {};
    function mR(e) {
      if (!e)
        return oi;
      var t = Ua(e), a = wx(t);
      if (t.tag === A) {
        var i = t.type;
        if (Yl(i))
          return B0(t, i, a);
      }
      return a;
    }
    function ID(e, t) {
      {
        var a = Ua(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Pa(a);
        if (u === null)
          return null;
        if (u.mode & Dn) {
          var s = dt(a) || "Component";
          if (!kE[s]) {
            kE[s] = !0;
            var f = wn;
            try {
              Kt(u), a.mode & Dn ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Kt(f) : Ln();
            }
          }
        }
        return u.stateNode;
      }
    }
    function yR(e, t, a, i, u, s, f, p) {
      var h = !1, E = null;
      return hR(e, t, h, E, a, i, u, s, f);
    }
    function gR(e, t, a, i, u, s, f, p, h, E) {
      var T = !0, U = hR(a, i, T, e, u, s, f, p, h);
      U.context = mR(null);
      var L = U.current, $ = _a(), Y = Xo(L), J = Pu($, Y);
      return J.callback = t ?? null, $o(L, J, Y), X_(U, Y, $), U;
    }
    function nv(e, t, a, i) {
      Gv(t, e);
      var u = t.current, s = _a(), f = Xo(u);
      vu(f);
      var p = mR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Jr && wn !== null && !OE && (OE = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, dt(wn) || "Unknown"));
      var h = Pu(s, f);
      h.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), h.callback = i);
      var E = $o(u, h, f);
      return E !== null && (Er(E, u, f, s), um(E, u, f)), f;
    }
    function Jm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case G:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function YD(e) {
      switch (e.tag) {
        case j: {
          var t = e.stateNode;
          if (Kn(t)) {
            var a = Dy(t);
            tD(t, a);
          }
          break;
        }
        case K: {
          Bu(function() {
            var u = Wa(e, it);
            if (u !== null) {
              var s = _a();
              Er(u, e, it, s);
            }
          });
          var i = it;
          NE(e, i);
          break;
        }
      }
    }
    function SR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = uh(a.retryLane, t));
    }
    function NE(e, t) {
      SR(e, t);
      var a = e.alternate;
      a && SR(a, t);
    }
    function WD(e) {
      if (e.tag === K) {
        var t = go, a = Wa(e, t);
        if (a !== null) {
          var i = _a();
          Er(a, e, t, i);
        }
        NE(e, t);
      }
    }
    function QD(e) {
      if (e.tag === K) {
        var t = Xo(e), a = Wa(e, t);
        if (a !== null) {
          var i = _a();
          Er(a, e, t, i);
        }
        NE(e, t);
      }
    }
    function ER(e) {
      var t = Wv(e);
      return t === null ? null : t.stateNode;
    }
    var CR = function(e) {
      return null;
    };
    function qD(e) {
      return CR(e);
    }
    var RR = function(e) {
      return !1;
    };
    function GD(e) {
      return RR(e);
    }
    var TR = null, bR = null, xR = null, wR = null, _R = null, DR = null, OR = null, kR = null, NR = null;
    {
      var LR = function(e, t, a) {
        var i = t[a], u = _t(e) ? e.slice() : Ct({}, e);
        return a + 1 === t.length ? (_t(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = LR(e[i], t, a + 1), u);
      }, MR = function(e, t) {
        return LR(e, t, 0);
      }, UR = function(e, t, a, i) {
        var u = t[i], s = _t(e) ? e.slice() : Ct({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], _t(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = UR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, AR = function(e, t, a) {
        if (t.length !== a.length) {
          D("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              D("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return UR(e, t, a, 0);
      }, zR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = _t(e) ? e.slice() : Ct({}, e);
        return s[u] = zR(e[u], t, a + 1, i), s;
      }, jR = function(e, t, a) {
        return zR(e, t, 0, a);
      }, LE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      TR = function(e, t, a, i) {
        var u = LE(e, t);
        if (u !== null) {
          var s = jR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ct({}, e.memoizedProps);
          var f = Wa(e, it);
          f !== null && Er(f, e, it, cn);
        }
      }, bR = function(e, t, a) {
        var i = LE(e, t);
        if (i !== null) {
          var u = MR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ct({}, e.memoizedProps);
          var s = Wa(e, it);
          s !== null && Er(s, e, it, cn);
        }
      }, xR = function(e, t, a, i) {
        var u = LE(e, t);
        if (u !== null) {
          var s = AR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ct({}, e.memoizedProps);
          var f = Wa(e, it);
          f !== null && Er(f, e, it, cn);
        }
      }, wR = function(e, t, a) {
        e.pendingProps = jR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Wa(e, it);
        i !== null && Er(i, e, it, cn);
      }, _R = function(e, t) {
        e.pendingProps = MR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Wa(e, it);
        a !== null && Er(a, e, it, cn);
      }, DR = function(e, t, a) {
        e.pendingProps = AR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Wa(e, it);
        i !== null && Er(i, e, it, cn);
      }, OR = function(e) {
        var t = Wa(e, it);
        t !== null && Er(t, e, it, cn);
      }, kR = function(e) {
        CR = e;
      }, NR = function(e) {
        RR = e;
      };
    }
    function KD(e) {
      var t = Pa(e);
      return t === null ? null : t.stateNode;
    }
    function XD(e) {
      return null;
    }
    function JD() {
      return wn;
    }
    function ZD(e) {
      var t = e.findFiberByHostInstance, a = S.ReactCurrentDispatcher;
      return Od({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: TR,
        overrideHookStateDeletePath: bR,
        overrideHookStateRenamePath: xR,
        overrideProps: wR,
        overridePropsDeletePath: _R,
        overridePropsRenamePath: DR,
        setErrorHandler: kR,
        setSuspenseHandler: NR,
        scheduleUpdate: OR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: KD,
        findFiberByHostInstance: t || XD,
        // React Refresh
        findHostInstancesForRefresh: OD,
        scheduleRefresh: _D,
        scheduleRoot: DD,
        setRefreshHandler: wD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: JD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: DE
      });
    }
    var PR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function ME(e) {
      this._internalRoot = e;
    }
    Zm.prototype.render = ME.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ey(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Bn) {
          var i = ER(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      nv(e, t, null, null);
    }, Zm.prototype.unmount = ME.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        K1() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Bu(function() {
          nv(null, e, null, null);
        }), j0(t);
      }
    };
    function eO(e, t) {
      if (!ey(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      HR(e);
      var a = !1, i = !1, u = "", s = PR;
      t != null && (t.hydrate ? D("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === pi && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = yR(e, qh, null, a, i, u, s);
      Vh(f.current, e);
      var p = e.nodeType === Bn ? e.parentNode : e;
      return cp(p), new ME(f);
    }
    function Zm(e) {
      this._internalRoot = e;
    }
    function tO(e) {
      e && hh(e);
    }
    Zm.prototype.unstable_scheduleHydration = tO;
    function nO(e, t, a) {
      if (!ey(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      HR(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", h = PR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
      var E = gR(t, null, e, qh, i, s, f, p, h);
      if (Vh(E.current, e), cp(e), u)
        for (var T = 0; T < u.length; T++) {
          var U = u[T];
          cw(E, U);
        }
      return new Zm(E);
    }
    function ey(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === ri || e.nodeType === iu || !re));
    }
    function rv(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === ri || e.nodeType === iu || e.nodeType === Bn && e.nodeValue === " react-mount-point-unstable "));
    }
    function HR(e) {
      e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Cp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var rO = S.ReactCurrentOwner, FR;
    FR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Bn) {
        var t = ER(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = UE(e), u = !!(i && Po(i));
      u && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function UE(e) {
      return e ? e.nodeType === ri ? e.documentElement : e.firstChild : null;
    }
    function VR() {
    }
    function aO(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var L = Jm(f);
            s.call(L);
          };
        }
        var f = gR(
          t,
          i,
          e,
          Fo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          VR
        );
        e._reactRootContainer = f, Vh(f.current, e);
        var p = e.nodeType === Bn ? e.parentNode : e;
        return cp(p), Bu(), f;
      } else {
        for (var h; h = e.lastChild; )
          e.removeChild(h);
        if (typeof i == "function") {
          var E = i;
          i = function() {
            var L = Jm(T);
            E.call(L);
          };
        }
        var T = yR(
          e,
          Fo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          VR
        );
        e._reactRootContainer = T, Vh(T.current, e);
        var U = e.nodeType === Bn ? e.parentNode : e;
        return cp(U), Bu(function() {
          nv(t, T, a, i);
        }), T;
      }
    }
    function iO(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ty(e, t, a, i, u) {
      FR(a), iO(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = aO(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var h = Jm(f);
            p.call(h);
          };
        }
        nv(t, f, e, u);
      }
      return Jm(f);
    }
    function lO(e) {
      {
        var t = rO.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ea ? e : ID(e, "findDOMNode");
    }
    function uO(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !rv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Cp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ty(null, e, t, !0, a);
    }
    function oO(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !rv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Cp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ty(null, e, t, !1, a);
    }
    function sO(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !rv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !gs(e))
        throw new Error("parentComponent must be a valid React Component");
      return ty(e, t, a, !1, i);
    }
    function cO(e) {
      if (!rv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Cp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = UE(e), i = a && !Po(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Bu(function() {
          ty(null, null, e, !1, function() {
            e._reactRootContainer = null, j0(e);
          });
        }), !0;
      } else {
        {
          var u = UE(e), s = !!(u && Po(u)), f = e.nodeType === ea && rv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Pe(YD), sh(WD), Ms(QD), Wd(Va), fh(ks), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), $v(pb), Cc(fE, nD, Bu);
    function fO(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ey(t))
        throw new Error("Target container is not a DOM element.");
      return $D(e, t, null, a);
    }
    function dO(e, t, a, i) {
      return sO(e, t, a, i);
    }
    var AE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Po, bf, Bh, Ec, hs, fE]
    };
    function pO(e, t) {
      return AE.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), eO(e, t);
    }
    function vO(e, t, a) {
      return AE.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), nO(e, t, a);
    }
    function hO(e) {
      return K1() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Bu(e);
    }
    var mO = ZD({
      findFiberByHostInstance: $s,
      bundleType: 1,
      version: DE,
      rendererPackageName: "react-dom"
    });
    if (!mO && At && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var BR = window.location.protocol;
      /^(https?|file):$/.test(BR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (BR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = AE, Xa.createPortal = fO, Xa.createRoot = pO, Xa.findDOMNode = lO, Xa.flushSync = hO, Xa.hydrate = uO, Xa.hydrateRoot = vO, Xa.render = oO, Xa.unmountComponentAtNode = cO, Xa.unstable_batchedUpdates = fE, Xa.unstable_renderSubtreeIntoContainer = dO, Xa.version = DE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Xa;
}
function yT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yT);
    } catch (v) {
      console.error(v);
    }
  }
}
process.env.NODE_ENV === "production" ? (yT(), qE.exports = _O()) : qE.exports = DO();
var OO = qE.exports, uv = OO;
if (process.env.NODE_ENV === "production")
  sv.createRoot = uv.createRoot, sv.hydrateRoot = uv.hydrateRoot;
else {
  var ry = uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  sv.createRoot = function(v, C) {
    ry.usingClientEntryPoint = !0;
    try {
      return uv.createRoot(v, C);
    } finally {
      ry.usingClientEntryPoint = !1;
    }
  }, sv.hydrateRoot = function(v, C, S) {
    ry.usingClientEntryPoint = !0;
    try {
      return uv.hydrateRoot(v, C, S);
    } finally {
      ry.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function cv() {
  return cv = Object.assign ? Object.assign.bind() : function(v) {
    for (var C = 1; C < arguments.length; C++) {
      var S = arguments[C];
      for (var x in S)
        Object.prototype.hasOwnProperty.call(S, x) && (v[x] = S[x]);
    }
    return v;
  }, cv.apply(this, arguments);
}
var es;
(function(v) {
  v.Pop = "POP", v.Push = "PUSH", v.Replace = "REPLACE";
})(es || (es = {}));
const JR = "popstate";
function kO(v) {
  v === void 0 && (v = {});
  function C(k, D) {
    let {
      pathname: y = "/",
      search: H = "",
      hash: N = ""
    } = uc(k.location.hash.substr(1));
    return !y.startsWith("/") && !y.startsWith(".") && (y = "/" + y), GE(
      "",
      {
        pathname: y,
        search: H,
        hash: N
      },
      // state defaults to `null` because `window.history.state` does
      D.state && D.state.usr || null,
      D.state && D.state.key || "default"
    );
  }
  function S(k, D) {
    let y = k.document.querySelector("base"), H = "";
    if (y && y.getAttribute("href")) {
      let N = k.location.href, A = N.indexOf("#");
      H = A === -1 ? N : N.slice(0, A);
    }
    return H + "#" + (typeof D == "string" ? D : fv(D));
  }
  function x(k, D) {
    Mi(k.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(D) + ")");
  }
  return LO(C, S, x, v);
}
function Dt(v, C) {
  if (v === !1 || v === null || typeof v > "u")
    throw new Error(C);
}
function Mi(v, C) {
  if (!v) {
    typeof console < "u" && console.warn(C);
    try {
      throw new Error(C);
    } catch {
    }
  }
}
function NO() {
  return Math.random().toString(36).substr(2, 8);
}
function ZR(v, C) {
  return {
    usr: v.state,
    key: v.key,
    idx: C
  };
}
function GE(v, C, S, x) {
  return S === void 0 && (S = null), cv({
    pathname: typeof v == "string" ? v : v.pathname,
    search: "",
    hash: ""
  }, typeof C == "string" ? uc(C) : C, {
    state: S,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: C && C.key || x || NO()
  });
}
function fv(v) {
  let {
    pathname: C = "/",
    search: S = "",
    hash: x = ""
  } = v;
  return S && S !== "?" && (C += S.charAt(0) === "?" ? S : "?" + S), x && x !== "#" && (C += x.charAt(0) === "#" ? x : "#" + x), C;
}
function uc(v) {
  let C = {};
  if (v) {
    let S = v.indexOf("#");
    S >= 0 && (C.hash = v.substr(S), v = v.substr(0, S));
    let x = v.indexOf("?");
    x >= 0 && (C.search = v.substr(x), v = v.substr(0, x)), v && (C.pathname = v);
  }
  return C;
}
function LO(v, C, S, x) {
  x === void 0 && (x = {});
  let {
    window: k = document.defaultView,
    v5Compat: D = !1
  } = x, y = k.history, H = es.Pop, N = null, A = Q();
  A == null && (A = 0, y.replaceState(cv({}, y.state, {
    idx: A
  }), ""));
  function Q() {
    return (y.state || {
      idx: null
    }).idx;
  }
  function j() {
    H = es.Pop;
    let oe = Q(), ye = oe == null ? null : oe - A;
    A = oe, N && N({
      action: H,
      location: ne.location,
      delta: ye
    });
  }
  function X(oe, ye) {
    H = es.Push;
    let we = GE(ne.location, oe, ye);
    S && S(we, oe), A = Q() + 1;
    let be = ZR(we, A), je = ne.createHref(we);
    try {
      y.pushState(be, "", je);
    } catch (K) {
      if (K instanceof DOMException && K.name === "DataCloneError")
        throw K;
      k.location.assign(je);
    }
    D && N && N({
      action: H,
      location: ne.location,
      delta: 1
    });
  }
  function G(oe, ye) {
    H = es.Replace;
    let we = GE(ne.location, oe, ye);
    S && S(we, oe), A = Q();
    let be = ZR(we, A), je = ne.createHref(we);
    y.replaceState(be, "", je), D && N && N({
      action: H,
      location: ne.location,
      delta: 0
    });
  }
  function ae(oe) {
    let ye = k.location.origin !== "null" ? k.location.origin : k.location.href, we = typeof oe == "string" ? oe : fv(oe);
    return Dt(ye, "No window.location.(origin|href) available to create URL for href: " + we), new URL(we, ye);
  }
  let ne = {
    get action() {
      return H;
    },
    get location() {
      return v(k, y);
    },
    listen(oe) {
      if (N)
        throw new Error("A history only accepts one active listener");
      return k.addEventListener(JR, j), N = oe, () => {
        k.removeEventListener(JR, j), N = null;
      };
    },
    createHref(oe) {
      return C(k, oe);
    },
    createURL: ae,
    encodeLocation(oe) {
      let ye = ae(oe);
      return {
        pathname: ye.pathname,
        search: ye.search,
        hash: ye.hash
      };
    },
    push: X,
    replace: G,
    go(oe) {
      return y.go(oe);
    }
  };
  return ne;
}
var eT;
(function(v) {
  v.data = "data", v.deferred = "deferred", v.redirect = "redirect", v.error = "error";
})(eT || (eT = {}));
function MO(v, C, S) {
  S === void 0 && (S = "/");
  let x = typeof C == "string" ? uc(C) : C, k = dv(x.pathname || "/", S);
  if (k == null)
    return null;
  let D = gT(v);
  UO(D);
  let y = null;
  for (let H = 0; y == null && H < D.length; ++H)
    y = $O(
      D[H],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      WO(k)
    );
  return y;
}
function gT(v, C, S, x) {
  C === void 0 && (C = []), S === void 0 && (S = []), x === void 0 && (x = "");
  let k = (D, y, H) => {
    let N = {
      relativePath: H === void 0 ? D.path || "" : H,
      caseSensitive: D.caseSensitive === !0,
      childrenIndex: y,
      route: D
    };
    N.relativePath.startsWith("/") && (Dt(N.relativePath.startsWith(x), 'Absolute route path "' + N.relativePath + '" nested under path ' + ('"' + x + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), N.relativePath = N.relativePath.slice(x.length));
    let A = Yu([x, N.relativePath]), Q = S.concat(N);
    D.children && D.children.length > 0 && (Dt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      D.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + A + '".')
    ), gT(D.children, C, Q, A)), !(D.path == null && !D.index) && C.push({
      path: A,
      score: VO(A, D.index),
      routesMeta: Q
    });
  };
  return v.forEach((D, y) => {
    var H;
    if (D.path === "" || !((H = D.path) != null && H.includes("?")))
      k(D, y);
    else
      for (let N of ST(D.path))
        k(D, y, N);
  }), C;
}
function ST(v) {
  let C = v.split("/");
  if (C.length === 0)
    return [];
  let [S, ...x] = C, k = S.endsWith("?"), D = S.replace(/\?$/, "");
  if (x.length === 0)
    return k ? [D, ""] : [D];
  let y = ST(x.join("/")), H = [];
  return H.push(...y.map((N) => N === "" ? D : [D, N].join("/"))), k && H.push(...y), H.map((N) => v.startsWith("/") && N === "" ? "/" : N);
}
function UO(v) {
  v.sort((C, S) => C.score !== S.score ? S.score - C.score : BO(C.routesMeta.map((x) => x.childrenIndex), S.routesMeta.map((x) => x.childrenIndex)));
}
const AO = /^:\w+$/, zO = 3, jO = 2, PO = 1, HO = 10, FO = -2, tT = (v) => v === "*";
function VO(v, C) {
  let S = v.split("/"), x = S.length;
  return S.some(tT) && (x += FO), C && (x += jO), S.filter((k) => !tT(k)).reduce((k, D) => k + (AO.test(D) ? zO : D === "" ? PO : HO), x);
}
function BO(v, C) {
  return v.length === C.length && v.slice(0, -1).every((x, k) => x === C[k]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    v[v.length - 1] - C[C.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function $O(v, C) {
  let {
    routesMeta: S
  } = v, x = {}, k = "/", D = [];
  for (let y = 0; y < S.length; ++y) {
    let H = S[y], N = y === S.length - 1, A = k === "/" ? C : C.slice(k.length) || "/", Q = IO({
      path: H.relativePath,
      caseSensitive: H.caseSensitive,
      end: N
    }, A);
    if (!Q)
      return null;
    Object.assign(x, Q.params);
    let j = H.route;
    D.push({
      // TODO: Can this as be avoided?
      params: x,
      pathname: Yu([k, Q.pathname]),
      pathnameBase: KO(Yu([k, Q.pathnameBase])),
      route: j
    }), Q.pathnameBase !== "/" && (k = Yu([k, Q.pathnameBase]));
  }
  return D;
}
function IO(v, C) {
  typeof v == "string" && (v = {
    path: v,
    caseSensitive: !1,
    end: !0
  });
  let [S, x] = YO(v.path, v.caseSensitive, v.end), k = C.match(S);
  if (!k)
    return null;
  let D = k[0], y = D.replace(/(.)\/+$/, "$1"), H = k.slice(1);
  return {
    params: x.reduce((A, Q, j) => {
      if (Q === "*") {
        let X = H[j] || "";
        y = D.slice(0, D.length - X.length).replace(/(.)\/+$/, "$1");
      }
      return A[Q] = QO(H[j] || "", Q), A;
    }, {}),
    pathname: D,
    pathnameBase: y,
    pattern: v
  };
}
function YO(v, C, S) {
  C === void 0 && (C = !1), S === void 0 && (S = !0), Mi(v === "*" || !v.endsWith("*") || v.endsWith("/*"), 'Route path "' + v + '" will be treated as if it were ' + ('"' + v.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + v.replace(/\*$/, "/*") + '".'));
  let x = [], k = "^" + v.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (y, H) => (x.push(H), "/([^\\/]+)"));
  return v.endsWith("*") ? (x.push("*"), k += v === "*" || v === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : S ? k += "\\/*$" : v !== "" && v !== "/" && (k += "(?:(?=\\/|$))"), [new RegExp(k, C ? void 0 : "i"), x];
}
function WO(v) {
  try {
    return decodeURI(v);
  } catch (C) {
    return Mi(!1, 'The URL path "' + v + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + C + ").")), v;
  }
}
function QO(v, C) {
  try {
    return decodeURIComponent(v);
  } catch (S) {
    return Mi(!1, 'The value for the URL param "' + C + '" will not be decoded because' + (' the string "' + v + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + S + ").")), v;
  }
}
function dv(v, C) {
  if (C === "/")
    return v;
  if (!v.toLowerCase().startsWith(C.toLowerCase()))
    return null;
  let S = C.endsWith("/") ? C.length - 1 : C.length, x = v.charAt(S);
  return x && x !== "/" ? null : v.slice(S) || "/";
}
function qO(v, C) {
  C === void 0 && (C = "/");
  let {
    pathname: S,
    search: x = "",
    hash: k = ""
  } = typeof v == "string" ? uc(v) : v;
  return {
    pathname: S ? S.startsWith("/") ? S : GO(S, C) : C,
    search: XO(x),
    hash: JO(k)
  };
}
function GO(v, C) {
  let S = C.replace(/\/+$/, "").split("/");
  return v.split("/").forEach((k) => {
    k === ".." ? S.length > 1 && S.pop() : k !== "." && S.push(k);
  }), S.length > 1 ? S.join("/") : "/";
}
function PE(v, C, S, x) {
  return "Cannot include a '" + v + "' character in a manually specified " + ("`to." + C + "` field [" + JSON.stringify(x) + "].  Please separate it out to the ") + ("`to." + S + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function ET(v) {
  return v.filter((C, S) => S === 0 || C.route.path && C.route.path.length > 0);
}
function CT(v, C, S, x) {
  x === void 0 && (x = !1);
  let k;
  typeof v == "string" ? k = uc(v) : (k = cv({}, v), Dt(!k.pathname || !k.pathname.includes("?"), PE("?", "pathname", "search", k)), Dt(!k.pathname || !k.pathname.includes("#"), PE("#", "pathname", "hash", k)), Dt(!k.search || !k.search.includes("#"), PE("#", "search", "hash", k)));
  let D = v === "" || k.pathname === "", y = D ? "/" : k.pathname, H;
  if (x || y == null)
    H = S;
  else {
    let j = C.length - 1;
    if (y.startsWith("..")) {
      let X = y.split("/");
      for (; X[0] === ".."; )
        X.shift(), j -= 1;
      k.pathname = X.join("/");
    }
    H = j >= 0 ? C[j] : "/";
  }
  let N = qO(k, H), A = y && y !== "/" && y.endsWith("/"), Q = (D || y === ".") && S.endsWith("/");
  return !N.pathname.endsWith("/") && (A || Q) && (N.pathname += "/"), N;
}
const Yu = (v) => v.join("/").replace(/\/\/+/g, "/"), KO = (v) => v.replace(/\/+$/, "").replace(/^\/*/, "/"), XO = (v) => !v || v === "?" ? "" : v.startsWith("?") ? v : "?" + v, JO = (v) => !v || v === "#" ? "" : v.startsWith("#") ? v : "#" + v;
function ZO(v) {
  return v != null && typeof v.status == "number" && typeof v.statusText == "string" && typeof v.internal == "boolean" && "data" in v;
}
const RT = ["post", "put", "patch", "delete"];
new Set(RT);
const ek = ["get", ...RT];
new Set(ek);
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function oy() {
  return oy = Object.assign ? Object.assign.bind() : function(v) {
    for (var C = 1; C < arguments.length; C++) {
      var S = arguments[C];
      for (var x in S)
        Object.prototype.hasOwnProperty.call(S, x) && (v[x] = S[x]);
    }
    return v;
  }, oy.apply(this, arguments);
}
const vv = /* @__PURE__ */ he.createContext(null);
process.env.NODE_ENV !== "production" && (vv.displayName = "DataRouter");
const t0 = /* @__PURE__ */ he.createContext(null);
process.env.NODE_ENV !== "production" && (t0.displayName = "DataRouterState");
const tk = /* @__PURE__ */ he.createContext(null);
process.env.NODE_ENV !== "production" && (tk.displayName = "Await");
const eu = /* @__PURE__ */ he.createContext(null);
process.env.NODE_ENV !== "production" && (eu.displayName = "Navigation");
const hv = /* @__PURE__ */ he.createContext(null);
process.env.NODE_ENV !== "production" && (hv.displayName = "Location");
const Wu = /* @__PURE__ */ he.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Wu.displayName = "Route");
const n0 = /* @__PURE__ */ he.createContext(null);
process.env.NODE_ENV !== "production" && (n0.displayName = "RouteError");
function nk(v, C) {
  let {
    relative: S
  } = C === void 0 ? {} : C;
  mv() || (process.env.NODE_ENV !== "production" ? Dt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : Dt(!1));
  let {
    basename: x,
    navigator: k
  } = he.useContext(eu), {
    hash: D,
    pathname: y,
    search: H
  } = sy(v, {
    relative: S
  }), N = y;
  return x !== "/" && (N = y === "/" ? x : Yu([x, y])), k.createHref({
    pathname: N,
    search: H,
    hash: D
  });
}
function mv() {
  return he.useContext(hv) != null;
}
function Gf() {
  return mv() || (process.env.NODE_ENV !== "production" ? Dt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : Dt(!1)), he.useContext(hv).location;
}
const TT = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function bT(v) {
  he.useContext(eu).static || he.useLayoutEffect(v);
}
function xT() {
  let {
    isDataRoute: v
  } = he.useContext(Wu);
  return v ? mk() : rk();
}
function rk() {
  mv() || (process.env.NODE_ENV !== "production" ? Dt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : Dt(!1));
  let v = he.useContext(vv), {
    basename: C,
    navigator: S
  } = he.useContext(eu), {
    matches: x
  } = he.useContext(Wu), {
    pathname: k
  } = Gf(), D = JSON.stringify(ET(x).map((N) => N.pathnameBase)), y = he.useRef(!1);
  return bT(() => {
    y.current = !0;
  }), he.useCallback(function(N, A) {
    if (A === void 0 && (A = {}), process.env.NODE_ENV !== "production" && Mi(y.current, TT), !y.current)
      return;
    if (typeof N == "number") {
      S.go(N);
      return;
    }
    let Q = CT(N, JSON.parse(D), k, A.relative === "path");
    v == null && C !== "/" && (Q.pathname = Q.pathname === "/" ? C : Yu([C, Q.pathname])), (A.replace ? S.replace : S.push)(Q, A.state, A);
  }, [C, S, D, k, v]);
}
function sy(v, C) {
  let {
    relative: S
  } = C === void 0 ? {} : C, {
    matches: x
  } = he.useContext(Wu), {
    pathname: k
  } = Gf(), D = JSON.stringify(ET(x).map((y) => y.pathnameBase));
  return he.useMemo(() => CT(v, JSON.parse(D), k, S === "path"), [v, D, k, S]);
}
function ak(v, C) {
  return ik(v, C);
}
function ik(v, C, S) {
  mv() || (process.env.NODE_ENV !== "production" ? Dt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : Dt(!1));
  let {
    navigator: x
  } = he.useContext(eu), {
    matches: k
  } = he.useContext(Wu), D = k[k.length - 1], y = D ? D.params : {}, H = D ? D.pathname : "/", N = D ? D.pathnameBase : "/", A = D && D.route;
  if (process.env.NODE_ENV !== "production") {
    let ye = A && A.path || "";
    yk(H, !A || ye.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + H + '" (under <Route path="' + ye + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + ye + '"> to <Route ') + ('path="' + (ye === "/" ? "*" : ye + "/*") + '">.'));
  }
  let Q = Gf(), j;
  if (C) {
    var X;
    let ye = typeof C == "string" ? uc(C) : C;
    N === "/" || (X = ye.pathname) != null && X.startsWith(N) || (process.env.NODE_ENV !== "production" ? Dt(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + N + '" ') + ('but pathname "' + ye.pathname + '" was given in the `location` prop.')) : Dt(!1)), j = ye;
  } else
    j = Q;
  let G = j.pathname || "/", ae = N === "/" ? G : G.slice(N.length) || "/", ne = MO(v, {
    pathname: ae
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && Mi(A || ne != null, 'No routes matched location "' + j.pathname + j.search + j.hash + '" '), process.env.NODE_ENV !== "production" && Mi(ne == null || ne[ne.length - 1].route.element !== void 0 || ne[ne.length - 1].route.Component !== void 0, 'Matched leaf route at location "' + j.pathname + j.search + j.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let oe = ck(ne && ne.map((ye) => Object.assign({}, ye, {
    params: Object.assign({}, y, ye.params),
    pathname: Yu([
      N,
      // Re-encode pathnames that were decoded inside matchRoutes
      x.encodeLocation ? x.encodeLocation(ye.pathname).pathname : ye.pathname
    ]),
    pathnameBase: ye.pathnameBase === "/" ? N : Yu([
      N,
      // Re-encode pathnames that were decoded inside matchRoutes
      x.encodeLocation ? x.encodeLocation(ye.pathnameBase).pathname : ye.pathnameBase
    ])
  })), k, S);
  return C && oe ? /* @__PURE__ */ he.createElement(hv.Provider, {
    value: {
      location: oy({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, j),
      navigationType: es.Pop
    }
  }, oe) : oe;
}
function lk() {
  let v = hk(), C = ZO(v) ? v.status + " " + v.statusText : v instanceof Error ? v.message : JSON.stringify(v), S = v instanceof Error ? v.stack : null, x = "rgba(200,200,200, 0.5)", k = {
    padding: "0.5rem",
    backgroundColor: x
  }, D = {
    padding: "2px 4px",
    backgroundColor: x
  }, y = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", v), y = /* @__PURE__ */ he.createElement(he.Fragment, null, /* @__PURE__ */ he.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ he.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ he.createElement("code", {
    style: D
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ he.createElement("code", {
    style: D
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ he.createElement(he.Fragment, null, /* @__PURE__ */ he.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ he.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, C), S ? /* @__PURE__ */ he.createElement("pre", {
    style: k
  }, S) : null, y);
}
const uk = /* @__PURE__ */ he.createElement(lk, null);
class ok extends he.Component {
  constructor(C) {
    super(C), this.state = {
      location: C.location,
      revalidation: C.revalidation,
      error: C.error
    };
  }
  static getDerivedStateFromError(C) {
    return {
      error: C
    };
  }
  static getDerivedStateFromProps(C, S) {
    return S.location !== C.location || S.revalidation !== "idle" && C.revalidation === "idle" ? {
      error: C.error,
      location: C.location,
      revalidation: C.revalidation
    } : {
      error: C.error || S.error,
      location: S.location,
      revalidation: C.revalidation || S.revalidation
    };
  }
  componentDidCatch(C, S) {
    console.error("React Router caught the following error during render", C, S);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ he.createElement(Wu.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ he.createElement(n0.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function sk(v) {
  let {
    routeContext: C,
    match: S,
    children: x
  } = v, k = he.useContext(vv);
  return k && k.static && k.staticContext && (S.route.errorElement || S.route.ErrorBoundary) && (k.staticContext._deepestRenderedBoundaryId = S.route.id), /* @__PURE__ */ he.createElement(Wu.Provider, {
    value: C
  }, x);
}
function ck(v, C, S) {
  var x;
  if (C === void 0 && (C = []), S === void 0 && (S = null), v == null) {
    var k;
    if ((k = S) != null && k.errors)
      v = S.matches;
    else
      return null;
  }
  let D = v, y = (x = S) == null ? void 0 : x.errors;
  if (y != null) {
    let H = D.findIndex((N) => N.route.id && (y == null ? void 0 : y[N.route.id]));
    H >= 0 || (process.env.NODE_ENV !== "production" ? Dt(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(y).join(",")) : Dt(!1)), D = D.slice(0, Math.min(D.length, H + 1));
  }
  return D.reduceRight((H, N, A) => {
    let Q = N.route.id ? y == null ? void 0 : y[N.route.id] : null, j = null;
    S && (j = N.route.errorElement || uk);
    let X = C.concat(D.slice(0, A + 1)), G = () => {
      let ae;
      return Q ? ae = j : N.route.Component ? ae = /* @__PURE__ */ he.createElement(N.route.Component, null) : N.route.element ? ae = N.route.element : ae = H, /* @__PURE__ */ he.createElement(sk, {
        match: N,
        routeContext: {
          outlet: H,
          matches: X,
          isDataRoute: S != null
        },
        children: ae
      });
    };
    return S && (N.route.ErrorBoundary || N.route.errorElement || A === 0) ? /* @__PURE__ */ he.createElement(ok, {
      location: S.location,
      revalidation: S.revalidation,
      component: j,
      error: Q,
      children: G(),
      routeContext: {
        outlet: null,
        matches: X,
        isDataRoute: !0
      }
    }) : G();
  }, null);
}
var wT = /* @__PURE__ */ function(v) {
  return v.UseBlocker = "useBlocker", v.UseRevalidator = "useRevalidator", v.UseNavigateStable = "useNavigate", v;
}(wT || {}), pv = /* @__PURE__ */ function(v) {
  return v.UseBlocker = "useBlocker", v.UseLoaderData = "useLoaderData", v.UseActionData = "useActionData", v.UseRouteError = "useRouteError", v.UseNavigation = "useNavigation", v.UseRouteLoaderData = "useRouteLoaderData", v.UseMatches = "useMatches", v.UseRevalidator = "useRevalidator", v.UseNavigateStable = "useNavigate", v.UseRouteId = "useRouteId", v;
}(pv || {});
function r0(v) {
  return v + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function fk(v) {
  let C = he.useContext(vv);
  return C || (process.env.NODE_ENV !== "production" ? Dt(!1, r0(v)) : Dt(!1)), C;
}
function dk(v) {
  let C = he.useContext(t0);
  return C || (process.env.NODE_ENV !== "production" ? Dt(!1, r0(v)) : Dt(!1)), C;
}
function pk(v) {
  let C = he.useContext(Wu);
  return C || (process.env.NODE_ENV !== "production" ? Dt(!1, r0(v)) : Dt(!1)), C;
}
function a0(v) {
  let C = pk(v), S = C.matches[C.matches.length - 1];
  return S.route.id || (process.env.NODE_ENV !== "production" ? Dt(!1, v + ' can only be used on routes that contain a unique "id"') : Dt(!1)), S.route.id;
}
function vk() {
  return a0(pv.UseRouteId);
}
function hk() {
  var v;
  let C = he.useContext(n0), S = dk(pv.UseRouteError), x = a0(pv.UseRouteError);
  return C || ((v = S.errors) == null ? void 0 : v[x]);
}
function mk() {
  let {
    router: v
  } = fk(wT.UseNavigateStable), C = a0(pv.UseNavigateStable), S = he.useRef(!1);
  return bT(() => {
    S.current = !0;
  }), he.useCallback(function(k, D) {
    D === void 0 && (D = {}), process.env.NODE_ENV !== "production" && Mi(S.current, TT), S.current && (typeof k == "number" ? v.navigate(k) : v.navigate(k, oy({
      fromRouteId: C
    }, D)));
  }, [v, C]);
}
const nT = {};
function yk(v, C, S) {
  !C && !nT[v] && (nT[v] = !0, process.env.NODE_ENV !== "production" && Mi(!1, S));
}
function KE(v) {
  process.env.NODE_ENV !== "production" ? Dt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : Dt(!1);
}
function gk(v) {
  let {
    basename: C = "/",
    children: S = null,
    location: x,
    navigationType: k = es.Pop,
    navigator: D,
    static: y = !1
  } = v;
  mv() && (process.env.NODE_ENV !== "production" ? Dt(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : Dt(!1));
  let H = C.replace(/^\/*/, "/"), N = he.useMemo(() => ({
    basename: H,
    navigator: D,
    static: y
  }), [H, D, y]);
  typeof x == "string" && (x = uc(x));
  let {
    pathname: A = "/",
    search: Q = "",
    hash: j = "",
    state: X = null,
    key: G = "default"
  } = x, ae = he.useMemo(() => {
    let ne = dv(A, H);
    return ne == null ? null : {
      location: {
        pathname: ne,
        search: Q,
        hash: j,
        state: X,
        key: G
      },
      navigationType: k
    };
  }, [H, A, Q, j, X, G, k]);
  return process.env.NODE_ENV !== "production" && Mi(ae != null, '<Router basename="' + H + '"> is not able to match the URL ' + ('"' + A + Q + j + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), ae == null ? null : /* @__PURE__ */ he.createElement(eu.Provider, {
    value: N
  }, /* @__PURE__ */ he.createElement(hv.Provider, {
    children: S,
    value: ae
  }));
}
function Sk(v) {
  let {
    children: C,
    location: S
  } = v;
  return ak(XE(C), S);
}
new Promise(() => {
});
function XE(v, C) {
  C === void 0 && (C = []);
  let S = [];
  return he.Children.forEach(v, (x, k) => {
    if (!/* @__PURE__ */ he.isValidElement(x))
      return;
    let D = [...C, k];
    if (x.type === he.Fragment) {
      S.push.apply(S, XE(x.props.children, D));
      return;
    }
    x.type !== KE && (process.env.NODE_ENV !== "production" ? Dt(!1, "[" + (typeof x.type == "string" ? x.type : x.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : Dt(!1)), !x.props.index || !x.props.children || (process.env.NODE_ENV !== "production" ? Dt(!1, "An index route cannot have child routes.") : Dt(!1));
    let y = {
      id: x.props.id || D.join("-"),
      caseSensitive: x.props.caseSensitive,
      element: x.props.element,
      Component: x.props.Component,
      index: x.props.index,
      path: x.props.path,
      loader: x.props.loader,
      action: x.props.action,
      errorElement: x.props.errorElement,
      ErrorBoundary: x.props.ErrorBoundary,
      hasErrorBoundary: x.props.ErrorBoundary != null || x.props.errorElement != null,
      shouldRevalidate: x.props.shouldRevalidate,
      handle: x.props.handle,
      lazy: x.props.lazy
    };
    x.props.children && (y.children = XE(x.props.children, D)), S.push(y);
  }), S;
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ic() {
  return ic = Object.assign ? Object.assign.bind() : function(v) {
    for (var C = 1; C < arguments.length; C++) {
      var S = arguments[C];
      for (var x in S)
        Object.prototype.hasOwnProperty.call(S, x) && (v[x] = S[x]);
    }
    return v;
  }, ic.apply(this, arguments);
}
function i0(v, C) {
  if (v == null)
    return {};
  var S = {}, x = Object.keys(v), k, D;
  for (D = 0; D < x.length; D++)
    k = x[D], !(C.indexOf(k) >= 0) && (S[k] = v[k]);
  return S;
}
const ly = "get", uy = "application/x-www-form-urlencoded";
function cy(v) {
  return v != null && typeof v.tagName == "string";
}
function Ek(v) {
  return cy(v) && v.tagName.toLowerCase() === "button";
}
function Ck(v) {
  return cy(v) && v.tagName.toLowerCase() === "form";
}
function Rk(v) {
  return cy(v) && v.tagName.toLowerCase() === "input";
}
function Tk(v) {
  return !!(v.metaKey || v.altKey || v.ctrlKey || v.shiftKey);
}
function bk(v, C) {
  return v.button === 0 && // Ignore everything but left clicks
  (!C || C === "_self") && // Let browser handle "target=_blank" etc.
  !Tk(v);
}
let ay = null;
function xk() {
  if (ay === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), ay = !1;
    } catch {
      ay = !0;
    }
  return ay;
}
const wk = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function HE(v) {
  return v != null && !wk.has(v) ? (process.env.NODE_ENV !== "production" && Mi(!1, '"' + v + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + uy + '"')), null) : v;
}
function _k(v, C) {
  let S, x, k, D, y;
  if (Ck(v)) {
    let H = v.getAttribute("action");
    x = H ? dv(H, C) : null, S = v.getAttribute("method") || ly, k = HE(v.getAttribute("enctype")) || uy, D = new FormData(v);
  } else if (Ek(v) || Rk(v) && (v.type === "submit" || v.type === "image")) {
    let H = v.form;
    if (H == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let N = v.getAttribute("formaction") || H.getAttribute("action");
    if (x = N ? dv(N, C) : null, S = v.getAttribute("formmethod") || H.getAttribute("method") || ly, k = HE(v.getAttribute("formenctype")) || HE(H.getAttribute("enctype")) || uy, D = new FormData(H, v), !xk()) {
      let {
        name: A,
        type: Q,
        value: j
      } = v;
      if (Q === "image") {
        let X = A ? A + "." : "";
        D.append(X + "x", "0"), D.append(X + "y", "0");
      } else
        A && D.append(A, j);
    }
  } else {
    if (cy(v))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    S = ly, x = null, k = uy, y = v;
  }
  return D && k === "text/plain" && (y = D, D = void 0), {
    action: x,
    method: S.toLowerCase(),
    encType: k,
    formData: D,
    body: y
  };
}
const Dk = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], Ok = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], kk = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset"], Nk = "startTransition", rT = RO[Nk];
function Lk(v) {
  let {
    basename: C,
    children: S,
    future: x,
    window: k
  } = v, D = he.useRef();
  D.current == null && (D.current = kO({
    window: k,
    v5Compat: !0
  }));
  let y = D.current, [H, N] = he.useState({
    action: y.action,
    location: y.location
  }), {
    v7_startTransition: A
  } = x || {}, Q = he.useCallback((j) => {
    A && rT ? rT(() => N(j)) : N(j);
  }, [N, A]);
  return he.useLayoutEffect(() => y.listen(Q), [y, Q]), /* @__PURE__ */ he.createElement(gk, {
    basename: C,
    children: S,
    location: H.location,
    navigationType: H.action,
    navigator: y
  });
}
process.env.NODE_ENV;
const Mk = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Uk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, l0 = /* @__PURE__ */ he.forwardRef(function(C, S) {
  let {
    onClick: x,
    relative: k,
    reloadDocument: D,
    replace: y,
    state: H,
    target: N,
    to: A,
    preventScrollReset: Q
  } = C, j = i0(C, Dk), {
    basename: X
  } = he.useContext(eu), G, ae = !1;
  if (typeof A == "string" && Uk.test(A) && (G = A, Mk))
    try {
      let we = new URL(window.location.href), be = A.startsWith("//") ? new URL(we.protocol + A) : new URL(A), je = dv(be.pathname, X);
      be.origin === we.origin && je != null ? A = je + be.search + be.hash : ae = !0;
    } catch {
      process.env.NODE_ENV !== "production" && Mi(!1, '<Link to="' + A + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let ne = nk(A, {
    relative: k
  }), oe = Hk(A, {
    replace: y,
    state: H,
    target: N,
    preventScrollReset: Q,
    relative: k
  });
  function ye(we) {
    x && x(we), we.defaultPrevented || oe(we);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ he.createElement("a", ic({}, j, {
      href: G || ne,
      onClick: ae || D ? x : ye,
      ref: S,
      target: N
    }))
  );
});
process.env.NODE_ENV !== "production" && (l0.displayName = "Link");
const Ak = /* @__PURE__ */ he.forwardRef(function(C, S) {
  let {
    "aria-current": x = "page",
    caseSensitive: k = !1,
    className: D = "",
    end: y = !1,
    style: H,
    to: N,
    children: A
  } = C, Q = i0(C, Ok), j = sy(N, {
    relative: Q.relative
  }), X = Gf(), G = he.useContext(t0), {
    navigator: ae
  } = he.useContext(eu), ne = ae.encodeLocation ? ae.encodeLocation(j).pathname : j.pathname, oe = X.pathname, ye = G && G.navigation && G.navigation.location ? G.navigation.location.pathname : null;
  k || (oe = oe.toLowerCase(), ye = ye ? ye.toLowerCase() : null, ne = ne.toLowerCase());
  let we = oe === ne || !y && oe.startsWith(ne) && oe.charAt(ne.length) === "/", be = ye != null && (ye === ne || !y && ye.startsWith(ne) && ye.charAt(ne.length) === "/"), je = we ? x : void 0, K;
  typeof D == "function" ? K = D({
    isActive: we,
    isPending: be
  }) : K = [D, we ? "active" : null, be ? "pending" : null].filter(Boolean).join(" ");
  let ut = typeof H == "function" ? H({
    isActive: we,
    isPending: be
  }) : H;
  return /* @__PURE__ */ he.createElement(l0, ic({}, Q, {
    "aria-current": je,
    className: K,
    ref: S,
    style: ut,
    to: N
  }), typeof A == "function" ? A({
    isActive: we,
    isPending: be
  }) : A);
});
process.env.NODE_ENV !== "production" && (Ak.displayName = "NavLink");
const zk = /* @__PURE__ */ he.forwardRef((v, C) => {
  let S = Vk();
  return /* @__PURE__ */ he.createElement(_T, ic({}, v, {
    submit: S,
    ref: C
  }));
});
process.env.NODE_ENV !== "production" && (zk.displayName = "Form");
const _T = /* @__PURE__ */ he.forwardRef((v, C) => {
  let {
    reloadDocument: S,
    replace: x,
    state: k,
    method: D = ly,
    action: y,
    onSubmit: H,
    submit: N,
    relative: A,
    preventScrollReset: Q
  } = v, j = i0(v, kk), X = D.toLowerCase() === "get" ? "get" : "post", G = Bk(y, {
    relative: A
  }), ae = (ne) => {
    if (H && H(ne), ne.defaultPrevented)
      return;
    ne.preventDefault();
    let oe = ne.nativeEvent.submitter, ye = (oe == null ? void 0 : oe.getAttribute("formmethod")) || D;
    N(oe || ne.currentTarget, {
      method: ye,
      replace: x,
      state: k,
      relative: A,
      preventScrollReset: Q
    });
  };
  return /* @__PURE__ */ he.createElement("form", ic({
    ref: C,
    method: X,
    action: G,
    onSubmit: S ? H : ae
  }, j));
});
process.env.NODE_ENV !== "production" && (_T.displayName = "FormImpl");
process.env.NODE_ENV;
var JE;
(function(v) {
  v.UseScrollRestoration = "useScrollRestoration", v.UseSubmit = "useSubmit", v.UseSubmitFetcher = "useSubmitFetcher", v.UseFetcher = "useFetcher";
})(JE || (JE = {}));
var aT;
(function(v) {
  v.UseFetchers = "useFetchers", v.UseScrollRestoration = "useScrollRestoration";
})(aT || (aT = {}));
function jk(v) {
  return v + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Pk(v) {
  let C = he.useContext(vv);
  return C || (process.env.NODE_ENV !== "production" ? Dt(!1, jk(v)) : Dt(!1)), C;
}
function Hk(v, C) {
  let {
    target: S,
    replace: x,
    state: k,
    preventScrollReset: D,
    relative: y
  } = C === void 0 ? {} : C, H = xT(), N = Gf(), A = sy(v, {
    relative: y
  });
  return he.useCallback((Q) => {
    if (bk(Q, S)) {
      Q.preventDefault();
      let j = x !== void 0 ? x : fv(N) === fv(A);
      H(v, {
        replace: j,
        state: k,
        preventScrollReset: D,
        relative: y
      });
    }
  }, [N, H, A, x, k, S, v, D, y]);
}
function Fk() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
function Vk() {
  let {
    router: v
  } = Pk(JE.UseSubmit), {
    basename: C
  } = he.useContext(eu), S = vk();
  return he.useCallback(function(x, k) {
    k === void 0 && (k = {}), Fk();
    let {
      action: D,
      method: y,
      encType: H,
      formData: N,
      body: A
    } = _k(x, C);
    v.navigate(k.action || D, {
      preventScrollReset: k.preventScrollReset,
      formData: N,
      body: A,
      formMethod: k.method || y,
      formEncType: k.encType || H,
      replace: k.replace,
      state: k.state,
      fromRouteId: S
    });
  }, [v, C, S]);
}
function Bk(v, C) {
  let {
    relative: S
  } = C === void 0 ? {} : C, {
    basename: x
  } = he.useContext(eu), k = he.useContext(Wu);
  k || (process.env.NODE_ENV !== "production" ? Dt(!1, "useFormAction must be used inside a RouteContext") : Dt(!1));
  let [D] = k.matches.slice(-1), y = ic({}, sy(v || ".", {
    relative: S
  })), H = Gf();
  if (v == null && (y.search = H.search, D.route.index)) {
    let N = new URLSearchParams(y.search);
    N.delete("index"), y.search = N.toString() ? "?" + N.toString() : "";
  }
  return (!v || v === ".") && D.route.index && (y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index"), x !== "/" && (y.pathname = y.pathname === "/" ? x : Yu([x, y.pathname])), fv(y);
}
var ZE = { exports: {} }, iy = { exports: {} }, an = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function $k() {
  if (iT)
    return an;
  iT = 1;
  var v = typeof Symbol == "function" && Symbol.for, C = v ? Symbol.for("react.element") : 60103, S = v ? Symbol.for("react.portal") : 60106, x = v ? Symbol.for("react.fragment") : 60107, k = v ? Symbol.for("react.strict_mode") : 60108, D = v ? Symbol.for("react.profiler") : 60114, y = v ? Symbol.for("react.provider") : 60109, H = v ? Symbol.for("react.context") : 60110, N = v ? Symbol.for("react.async_mode") : 60111, A = v ? Symbol.for("react.concurrent_mode") : 60111, Q = v ? Symbol.for("react.forward_ref") : 60112, j = v ? Symbol.for("react.suspense") : 60113, X = v ? Symbol.for("react.suspense_list") : 60120, G = v ? Symbol.for("react.memo") : 60115, ae = v ? Symbol.for("react.lazy") : 60116, ne = v ? Symbol.for("react.block") : 60121, oe = v ? Symbol.for("react.fundamental") : 60117, ye = v ? Symbol.for("react.responder") : 60118, we = v ? Symbol.for("react.scope") : 60119;
  function be(K) {
    if (typeof K == "object" && K !== null) {
      var ut = K.$$typeof;
      switch (ut) {
        case C:
          switch (K = K.type, K) {
            case N:
            case A:
            case x:
            case D:
            case k:
            case j:
              return K;
            default:
              switch (K = K && K.$$typeof, K) {
                case H:
                case Q:
                case ae:
                case G:
                case y:
                  return K;
                default:
                  return ut;
              }
          }
        case S:
          return ut;
      }
    }
  }
  function je(K) {
    return be(K) === A;
  }
  return an.AsyncMode = N, an.ConcurrentMode = A, an.ContextConsumer = H, an.ContextProvider = y, an.Element = C, an.ForwardRef = Q, an.Fragment = x, an.Lazy = ae, an.Memo = G, an.Portal = S, an.Profiler = D, an.StrictMode = k, an.Suspense = j, an.isAsyncMode = function(K) {
    return je(K) || be(K) === N;
  }, an.isConcurrentMode = je, an.isContextConsumer = function(K) {
    return be(K) === H;
  }, an.isContextProvider = function(K) {
    return be(K) === y;
  }, an.isElement = function(K) {
    return typeof K == "object" && K !== null && K.$$typeof === C;
  }, an.isForwardRef = function(K) {
    return be(K) === Q;
  }, an.isFragment = function(K) {
    return be(K) === x;
  }, an.isLazy = function(K) {
    return be(K) === ae;
  }, an.isMemo = function(K) {
    return be(K) === G;
  }, an.isPortal = function(K) {
    return be(K) === S;
  }, an.isProfiler = function(K) {
    return be(K) === D;
  }, an.isStrictMode = function(K) {
    return be(K) === k;
  }, an.isSuspense = function(K) {
    return be(K) === j;
  }, an.isValidElementType = function(K) {
    return typeof K == "string" || typeof K == "function" || K === x || K === A || K === D || K === k || K === j || K === X || typeof K == "object" && K !== null && (K.$$typeof === ae || K.$$typeof === G || K.$$typeof === y || K.$$typeof === H || K.$$typeof === Q || K.$$typeof === oe || K.$$typeof === ye || K.$$typeof === we || K.$$typeof === ne);
  }, an.typeOf = be, an;
}
var ln = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lT;
function Ik() {
  return lT || (lT = 1, process.env.NODE_ENV !== "production" && function() {
    var v = typeof Symbol == "function" && Symbol.for, C = v ? Symbol.for("react.element") : 60103, S = v ? Symbol.for("react.portal") : 60106, x = v ? Symbol.for("react.fragment") : 60107, k = v ? Symbol.for("react.strict_mode") : 60108, D = v ? Symbol.for("react.profiler") : 60114, y = v ? Symbol.for("react.provider") : 60109, H = v ? Symbol.for("react.context") : 60110, N = v ? Symbol.for("react.async_mode") : 60111, A = v ? Symbol.for("react.concurrent_mode") : 60111, Q = v ? Symbol.for("react.forward_ref") : 60112, j = v ? Symbol.for("react.suspense") : 60113, X = v ? Symbol.for("react.suspense_list") : 60120, G = v ? Symbol.for("react.memo") : 60115, ae = v ? Symbol.for("react.lazy") : 60116, ne = v ? Symbol.for("react.block") : 60121, oe = v ? Symbol.for("react.fundamental") : 60117, ye = v ? Symbol.for("react.responder") : 60118, we = v ? Symbol.for("react.scope") : 60119;
    function be(ge) {
      return typeof ge == "string" || typeof ge == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      ge === x || ge === A || ge === D || ge === k || ge === j || ge === X || typeof ge == "object" && ge !== null && (ge.$$typeof === ae || ge.$$typeof === G || ge.$$typeof === y || ge.$$typeof === H || ge.$$typeof === Q || ge.$$typeof === oe || ge.$$typeof === ye || ge.$$typeof === we || ge.$$typeof === ne);
    }
    function je(ge) {
      if (typeof ge == "object" && ge !== null) {
        var At = ge.$$typeof;
        switch (At) {
          case C:
            var Tn = ge.type;
            switch (Tn) {
              case N:
              case A:
              case x:
              case D:
              case k:
              case j:
                return Tn;
              default:
                var Nn = Tn && Tn.$$typeof;
                switch (Nn) {
                  case H:
                  case Q:
                  case ae:
                  case G:
                  case y:
                    return Nn;
                  default:
                    return At;
                }
            }
          case S:
            return At;
        }
      }
    }
    var K = N, ut = A, Ze = H, Zt = y, hn = C, Ft = Q, bt = x, fn = ae, Ge = G, lt = S, Ut = D, vt = k, Oe = j, fe = !1;
    function Be(ge) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(ge) || je(ge) === N;
    }
    function R(ge) {
      return je(ge) === A;
    }
    function z(ge) {
      return je(ge) === H;
    }
    function re(ge) {
      return je(ge) === y;
    }
    function me(ge) {
      return typeof ge == "object" && ge !== null && ge.$$typeof === C;
    }
    function de(ge) {
      return je(ge) === Q;
    }
    function ze(ge) {
      return je(ge) === x;
    }
    function Ee(ge) {
      return je(ge) === ae;
    }
    function _e(ge) {
      return je(ge) === G;
    }
    function De(ge) {
      return je(ge) === S;
    }
    function Ie(ge) {
      return je(ge) === D;
    }
    function ft(ge) {
      return je(ge) === k;
    }
    function It(ge) {
      return je(ge) === j;
    }
    ln.AsyncMode = K, ln.ConcurrentMode = ut, ln.ContextConsumer = Ze, ln.ContextProvider = Zt, ln.Element = hn, ln.ForwardRef = Ft, ln.Fragment = bt, ln.Lazy = fn, ln.Memo = Ge, ln.Portal = lt, ln.Profiler = Ut, ln.StrictMode = vt, ln.Suspense = Oe, ln.isAsyncMode = Be, ln.isConcurrentMode = R, ln.isContextConsumer = z, ln.isContextProvider = re, ln.isElement = me, ln.isForwardRef = de, ln.isFragment = ze, ln.isLazy = Ee, ln.isMemo = _e, ln.isPortal = De, ln.isProfiler = Ie, ln.isStrictMode = ft, ln.isSuspense = It, ln.isValidElementType = be, ln.typeOf = je;
  }()), ln;
}
var uT;
function DT() {
  return uT || (uT = 1, process.env.NODE_ENV === "production" ? iy.exports = $k() : iy.exports = Ik()), iy.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var FE, oT;
function Yk() {
  if (oT)
    return FE;
  oT = 1;
  var v = Object.getOwnPropertySymbols, C = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
  function x(D) {
    if (D == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(D);
  }
  function k() {
    try {
      if (!Object.assign)
        return !1;
      var D = new String("abc");
      if (D[5] = "de", Object.getOwnPropertyNames(D)[0] === "5")
        return !1;
      for (var y = {}, H = 0; H < 10; H++)
        y["_" + String.fromCharCode(H)] = H;
      var N = Object.getOwnPropertyNames(y).map(function(Q) {
        return y[Q];
      });
      if (N.join("") !== "0123456789")
        return !1;
      var A = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(Q) {
        A[Q] = Q;
      }), Object.keys(Object.assign({}, A)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return FE = k() ? Object.assign : function(D, y) {
    for (var H, N = x(D), A, Q = 1; Q < arguments.length; Q++) {
      H = Object(arguments[Q]);
      for (var j in H)
        C.call(H, j) && (N[j] = H[j]);
      if (v) {
        A = v(H);
        for (var X = 0; X < A.length; X++)
          S.call(H, A[X]) && (N[A[X]] = H[A[X]]);
      }
    }
    return N;
  }, FE;
}
var VE, sT;
function u0() {
  if (sT)
    return VE;
  sT = 1;
  var v = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return VE = v, VE;
}
var BE, cT;
function OT() {
  return cT || (cT = 1, BE = Function.call.bind(Object.prototype.hasOwnProperty)), BE;
}
var $E, fT;
function Wk() {
  if (fT)
    return $E;
  fT = 1;
  var v = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var C = u0(), S = {}, x = OT();
    v = function(D) {
      var y = "Warning: " + D;
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
  }
  function k(D, y, H, N, A) {
    if (process.env.NODE_ENV !== "production") {
      for (var Q in D)
        if (x(D, Q)) {
          var j;
          try {
            if (typeof D[Q] != "function") {
              var X = Error(
                (N || "React class") + ": " + H + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw X.name = "Invariant Violation", X;
            }
            j = D[Q](y, Q, N, H, null, C);
          } catch (ae) {
            j = ae;
          }
          if (j && !(j instanceof Error) && v(
            (N || "React class") + ": type specification of " + H + " `" + Q + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof j + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), j instanceof Error && !(j.message in S)) {
            S[j.message] = !0;
            var G = A ? A() : "";
            v(
              "Failed " + H + " type: " + j.message + (G ?? "")
            );
          }
        }
    }
  }
  return k.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (S = {});
  }, $E = k, $E;
}
var IE, dT;
function Qk() {
  if (dT)
    return IE;
  dT = 1;
  var v = DT(), C = Yk(), S = u0(), x = OT(), k = Wk(), D = function() {
  };
  process.env.NODE_ENV !== "production" && (D = function(H) {
    var N = "Warning: " + H;
    typeof console < "u" && console.error(N);
    try {
      throw new Error(N);
    } catch {
    }
  });
  function y() {
    return null;
  }
  return IE = function(H, N) {
    var A = typeof Symbol == "function" && Symbol.iterator, Q = "@@iterator";
    function j(R) {
      var z = R && (A && R[A] || R[Q]);
      if (typeof z == "function")
        return z;
    }
    var X = "<<anonymous>>", G = {
      array: ye("array"),
      bigint: ye("bigint"),
      bool: ye("boolean"),
      func: ye("function"),
      number: ye("number"),
      object: ye("object"),
      string: ye("string"),
      symbol: ye("symbol"),
      any: we(),
      arrayOf: be,
      element: je(),
      elementType: K(),
      instanceOf: ut,
      node: Ft(),
      objectOf: Zt,
      oneOf: Ze,
      oneOfType: hn,
      shape: fn,
      exact: Ge
    };
    function ae(R, z) {
      return R === z ? R !== 0 || 1 / R === 1 / z : R !== R && z !== z;
    }
    function ne(R, z) {
      this.message = R, this.data = z && typeof z == "object" ? z : {}, this.stack = "";
    }
    ne.prototype = Error.prototype;
    function oe(R) {
      if (process.env.NODE_ENV !== "production")
        var z = {}, re = 0;
      function me(ze, Ee, _e, De, Ie, ft, It) {
        if (De = De || X, ft = ft || _e, It !== S) {
          if (N) {
            var ge = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ge.name = "Invariant Violation", ge;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var At = De + ":" + _e;
            !z[At] && // Avoid spamming the console because they are often not actionable except for lib authors
            re < 3 && (D(
              "You are manually calling a React.PropTypes validation function for the `" + ft + "` prop on `" + De + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), z[At] = !0, re++);
          }
        }
        return Ee[_e] == null ? ze ? Ee[_e] === null ? new ne("The " + Ie + " `" + ft + "` is marked as required " + ("in `" + De + "`, but its value is `null`.")) : new ne("The " + Ie + " `" + ft + "` is marked as required in " + ("`" + De + "`, but its value is `undefined`.")) : null : R(Ee, _e, De, Ie, ft);
      }
      var de = me.bind(null, !1);
      return de.isRequired = me.bind(null, !0), de;
    }
    function ye(R) {
      function z(re, me, de, ze, Ee, _e) {
        var De = re[me], Ie = vt(De);
        if (Ie !== R) {
          var ft = Oe(De);
          return new ne(
            "Invalid " + ze + " `" + Ee + "` of type " + ("`" + ft + "` supplied to `" + de + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return oe(z);
    }
    function we() {
      return oe(y);
    }
    function be(R) {
      function z(re, me, de, ze, Ee) {
        if (typeof R != "function")
          return new ne("Property `" + Ee + "` of component `" + de + "` has invalid PropType notation inside arrayOf.");
        var _e = re[me];
        if (!Array.isArray(_e)) {
          var De = vt(_e);
          return new ne("Invalid " + ze + " `" + Ee + "` of type " + ("`" + De + "` supplied to `" + de + "`, expected an array."));
        }
        for (var Ie = 0; Ie < _e.length; Ie++) {
          var ft = R(_e, Ie, de, ze, Ee + "[" + Ie + "]", S);
          if (ft instanceof Error)
            return ft;
        }
        return null;
      }
      return oe(z);
    }
    function je() {
      function R(z, re, me, de, ze) {
        var Ee = z[re];
        if (!H(Ee)) {
          var _e = vt(Ee);
          return new ne("Invalid " + de + " `" + ze + "` of type " + ("`" + _e + "` supplied to `" + me + "`, expected a single ReactElement."));
        }
        return null;
      }
      return oe(R);
    }
    function K() {
      function R(z, re, me, de, ze) {
        var Ee = z[re];
        if (!v.isValidElementType(Ee)) {
          var _e = vt(Ee);
          return new ne("Invalid " + de + " `" + ze + "` of type " + ("`" + _e + "` supplied to `" + me + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return oe(R);
    }
    function ut(R) {
      function z(re, me, de, ze, Ee) {
        if (!(re[me] instanceof R)) {
          var _e = R.name || X, De = Be(re[me]);
          return new ne("Invalid " + ze + " `" + Ee + "` of type " + ("`" + De + "` supplied to `" + de + "`, expected ") + ("instance of `" + _e + "`."));
        }
        return null;
      }
      return oe(z);
    }
    function Ze(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? D(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : D("Invalid argument supplied to oneOf, expected an array.")), y;
      function z(re, me, de, ze, Ee) {
        for (var _e = re[me], De = 0; De < R.length; De++)
          if (ae(_e, R[De]))
            return null;
        var Ie = JSON.stringify(R, function(It, ge) {
          var At = Oe(ge);
          return At === "symbol" ? String(ge) : ge;
        });
        return new ne("Invalid " + ze + " `" + Ee + "` of value `" + String(_e) + "` " + ("supplied to `" + de + "`, expected one of " + Ie + "."));
      }
      return oe(z);
    }
    function Zt(R) {
      function z(re, me, de, ze, Ee) {
        if (typeof R != "function")
          return new ne("Property `" + Ee + "` of component `" + de + "` has invalid PropType notation inside objectOf.");
        var _e = re[me], De = vt(_e);
        if (De !== "object")
          return new ne("Invalid " + ze + " `" + Ee + "` of type " + ("`" + De + "` supplied to `" + de + "`, expected an object."));
        for (var Ie in _e)
          if (x(_e, Ie)) {
            var ft = R(_e, Ie, de, ze, Ee + "." + Ie, S);
            if (ft instanceof Error)
              return ft;
          }
        return null;
      }
      return oe(z);
    }
    function hn(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && D("Invalid argument supplied to oneOfType, expected an instance of array."), y;
      for (var z = 0; z < R.length; z++) {
        var re = R[z];
        if (typeof re != "function")
          return D(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(re) + " at index " + z + "."
          ), y;
      }
      function me(de, ze, Ee, _e, De) {
        for (var Ie = [], ft = 0; ft < R.length; ft++) {
          var It = R[ft], ge = It(de, ze, Ee, _e, De, S);
          if (ge == null)
            return null;
          ge.data && x(ge.data, "expectedType") && Ie.push(ge.data.expectedType);
        }
        var At = Ie.length > 0 ? ", expected one of type [" + Ie.join(", ") + "]" : "";
        return new ne("Invalid " + _e + " `" + De + "` supplied to " + ("`" + Ee + "`" + At + "."));
      }
      return oe(me);
    }
    function Ft() {
      function R(z, re, me, de, ze) {
        return lt(z[re]) ? null : new ne("Invalid " + de + " `" + ze + "` supplied to " + ("`" + me + "`, expected a ReactNode."));
      }
      return oe(R);
    }
    function bt(R, z, re, me, de) {
      return new ne(
        (R || "React class") + ": " + z + " type `" + re + "." + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + de + "`."
      );
    }
    function fn(R) {
      function z(re, me, de, ze, Ee) {
        var _e = re[me], De = vt(_e);
        if (De !== "object")
          return new ne("Invalid " + ze + " `" + Ee + "` of type `" + De + "` " + ("supplied to `" + de + "`, expected `object`."));
        for (var Ie in R) {
          var ft = R[Ie];
          if (typeof ft != "function")
            return bt(de, ze, Ee, Ie, Oe(ft));
          var It = ft(_e, Ie, de, ze, Ee + "." + Ie, S);
          if (It)
            return It;
        }
        return null;
      }
      return oe(z);
    }
    function Ge(R) {
      function z(re, me, de, ze, Ee) {
        var _e = re[me], De = vt(_e);
        if (De !== "object")
          return new ne("Invalid " + ze + " `" + Ee + "` of type `" + De + "` " + ("supplied to `" + de + "`, expected `object`."));
        var Ie = C({}, re[me], R);
        for (var ft in Ie) {
          var It = R[ft];
          if (x(R, ft) && typeof It != "function")
            return bt(de, ze, Ee, ft, Oe(It));
          if (!It)
            return new ne(
              "Invalid " + ze + " `" + Ee + "` key `" + ft + "` supplied to `" + de + "`.\nBad object: " + JSON.stringify(re[me], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var ge = It(_e, ft, de, ze, Ee + "." + ft, S);
          if (ge)
            return ge;
        }
        return null;
      }
      return oe(z);
    }
    function lt(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(lt);
          if (R === null || H(R))
            return !0;
          var z = j(R);
          if (z) {
            var re = z.call(R), me;
            if (z !== R.entries) {
              for (; !(me = re.next()).done; )
                if (!lt(me.value))
                  return !1;
            } else
              for (; !(me = re.next()).done; ) {
                var de = me.value;
                if (de && !lt(de[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ut(R, z) {
      return R === "symbol" ? !0 : z ? z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && z instanceof Symbol : !1;
    }
    function vt(R) {
      var z = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : Ut(z, R) ? "symbol" : z;
    }
    function Oe(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var z = vt(R);
      if (z === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return z;
    }
    function fe(R) {
      var z = Oe(R);
      switch (z) {
        case "array":
        case "object":
          return "an " + z;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + z;
        default:
          return z;
      }
    }
    function Be(R) {
      return !R.constructor || !R.constructor.name ? X : R.constructor.name;
    }
    return G.checkPropTypes = k, G.resetWarningCache = k.resetWarningCache, G.PropTypes = G, G;
  }, IE;
}
var YE, pT;
function qk() {
  if (pT)
    return YE;
  pT = 1;
  var v = u0();
  function C() {
  }
  function S() {
  }
  return S.resetWarningCache = C, YE = function() {
    function x(y, H, N, A, Q, j) {
      if (j !== v) {
        var X = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw X.name = "Invariant Violation", X;
      }
    }
    x.isRequired = x;
    function k() {
      return x;
    }
    var D = {
      array: x,
      bigint: x,
      bool: x,
      func: x,
      number: x,
      object: x,
      string: x,
      symbol: x,
      any: x,
      arrayOf: k,
      element: x,
      elementType: x,
      instanceOf: k,
      node: x,
      objectOf: k,
      oneOf: k,
      oneOfType: k,
      shape: k,
      exact: k,
      checkPropTypes: S,
      resetWarningCache: C
    };
    return D.PropTypes = D, D;
  }, YE;
}
if (process.env.NODE_ENV !== "production") {
  var Gk = DT(), Kk = !0;
  ZE.exports = Qk()(Gk.isElement, Kk);
} else
  ZE.exports = qk()();
var Xk = ZE.exports;
const lc = /* @__PURE__ */ vT(Xk);
var Jk = { photo: "https://api.pexels.com/v1/", video: "https://api.pexels.com/videos/", collections: "https://api.pexels.com/v1/collections/" };
function o0(v, C) {
  var S = { method: "GET", headers: { Accept: "application/json", "Content-Type": "application/json", "User-Agent": "Pexels/JavaScript", Authorization: v } }, x = Jk[C];
  return function(k, D) {
    return fetch("" + x + k + "?" + function(y) {
      return Object.keys(y).map(function(H) {
        return H + "=" + y[H];
      }).join("&");
    }(D || {}), S).then(function(y) {
      if (!y.ok)
        throw new Error(y.statusText);
      return y.json();
    });
  };
}
function Zk(v) {
  var C = o0(v, "collections");
  return { all: function(S) {
    return S === void 0 && (S = {}), C("", S);
  }, media: function(S) {
    var x = S.id, k = function(D, y) {
      if (D == null)
        return {};
      var H, N, A = {}, Q = Object.keys(D);
      for (N = 0; N < Q.length; N++)
        y.indexOf(H = Q[N]) >= 0 || (A[H] = D[H]);
      return A;
    }(S, ["id"]);
    return C("" + x, k);
  }, featured: function(S) {
    return S === void 0 && (S = {}), C("featured", S);
  } };
}
function kT(v) {
  return !(!v || !v.photos);
}
var eN = { __proto__: null, isPhotos: kT, isVideos: function(v) {
  return !(!v || !v.videos);
}, isError: function(v) {
  return !!v.error;
} };
function tN(v) {
  var C = o0(v, "photo");
  return { search: function(S) {
    return C("/search", S);
  }, curated: function(S) {
    return S === void 0 && (S = {}), C("/curated", S);
  }, show: function(S) {
    return C("/photos/" + S.id);
  }, random: function() {
    try {
      var S = Math.floor(1e3 * Math.random());
      return Promise.resolve(this.curated({ page: S, per_page: 1 })).then(function(x) {
        return kT(x) ? x.photos[0] : x;
      });
    } catch (x) {
      return Promise.reject(x);
    }
  } };
}
function nN(v) {
  var C = o0(v, "video");
  return { search: function(S) {
    return C("/search", S);
  }, popular: function(S) {
    return S === void 0 && (S = {}), C("/popular", S);
  }, show: function(S) {
    return C("/videos/" + S.id);
  } };
}
function rN(v) {
  if (!v || typeof v != "string")
    throw new TypeError("An ApiKey must be provided when initiating the Pexel's client.");
  return { typeCheckers: eN, photos: tN(v), videos: nN(v), collections: Zk(v) };
}
require("isomorphic-fetch");
function NT({ cartItems: v, setCartItems: C }) {
  const [S, x] = he.useState(""), [k, D] = he.useState("sleeping cats"), y = [...v];
  he.useEffect(() => {
    const G = rN(
      "N3dqF65imJcBmwpebW5wgWt7hI1KlzDyQbZXGYXLMMxIxtt4yaSEAteR"
    );
    k !== "" && G.photos.search({ query: k, orientation: "square", per_page: 15 }).then((ae) => x(ae.photos));
  }, [k]);
  function H() {
    function G(ne) {
      const oe = ne.target.parentElement.nextSibling.src;
      y.indexOf(oe) === -1 && y.unshift([oe, ae]);
    }
    const ae = Math.floor(Math.random() * 10) + 1;
    return /* @__PURE__ */ at.jsxs(at.Fragment, { children: [
      /* @__PURE__ */ at.jsxs("h3", { children: [
        ae,
        "B$"
      ] }),
      /* @__PURE__ */ at.jsxs("button", { className: "label_action", onClick: G, children: [
        "Add",
        /* @__PURE__ */ at.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", children: /* @__PURE__ */ at.jsx("path", { d: "M19 14V16H6V15H5V11H4V8H3V3H1V1H5V4H21V8H20V11H19V12H7V14H19M5 7H6V10H18V7H19V6H5V7M7 17H9V18H10V20H9V21H7V20H6V18H7V17M15 17H17V18H18V20H17V21H15V20H14V18H15V17Z" }) })
      ] })
    ] });
  }
  function N({ data: G }) {
    let ae = "";
    return G && (ae = G.map((ne, oe) => {
      const ye = ne.src.medium;
      return /* @__PURE__ */ at.jsxs(
        "div",
        {
          className: "image",
          onMouseOver: (we) => j(we, oe),
          onMouseOut: (we) => j(we, oe),
          children: [
            /* @__PURE__ */ at.jsx("div", { className: "label", children: /* @__PURE__ */ at.jsx(H, {}) }),
            /* @__PURE__ */ at.jsx("img", { src: ye, className: "photo", alt: "photo" }, ye)
          ]
        },
        ye
      );
    })), N.propTypes = {
      data: lc.array.isRequired
    }, /* @__PURE__ */ at.jsx("div", { className: "container", children: ae });
  }
  function A(G) {
    let ae = "";
    G.target.innerText === "Search" ? ae = G.target.previousSibling.value : ae = G.target.value, ae !== "" && D(ae);
  }
  function Q() {
    D("sleeping cats");
  }
  function j(G, ae) {
    document.querySelectorAll(".label")[ae].classList.add("active");
  }
  const X = () => C(y);
  return /* @__PURE__ */ at.jsxs(at.Fragment, { children: [
    /* @__PURE__ */ at.jsxs("div", { className: "navbar", children: [
      /* @__PURE__ */ at.jsx(
        "svg",
        {
          onClick: Q,
          className: "home",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ at.jsx("path", { d: "M16,8.41L11.5,3.91L4.41,11H6V12L6,19H9V13H14V19H17V11H18.59L17,9.41V6H16V8.41M2,12L11.5,2.5L15,6V5H18V9L21,12H18V20H13V14H10V20H5V12H2Z" })
        }
      ),
      /* @__PURE__ */ at.jsx(
        "input",
        {
          type: "text",
          onKeyDown: (G) => G.key === "Enter" ? A(G) : ""
        }
      ),
      /* @__PURE__ */ at.jsx("button", { className: "search", onClick: A, children: "Search" }),
      /* @__PURE__ */ at.jsx(l0, { to: "cart", onClick: X, children: /* @__PURE__ */ at.jsx(
        "svg",
        {
          className: "cart",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 22 22",
          children: /* @__PURE__ */ at.jsx("path", { d: "M19 14V16H6V15H5V11H4V8H3V3H1V1H5V4H21V8H20V11H19V12H7V14H19M5 7H6V10H18V7H19V6H5V7M7 17H9V18H10V20H9V21H7V20H6V18H7V17M15 17H17V18H18V20H17V21H15V20H14V18H15V17Z" })
        }
      ) })
    ] }),
    /* @__PURE__ */ at.jsx(N, { data: S })
  ] });
}
NT.propTypes = {
  cartItems: lc.array.isRequired,
  setCartItems: lc.func.isRequired
};
function LT({ cartItems: v, setCartItems: C }) {
  const S = xT();
  function x(Q, j) {
    document.querySelectorAll(".label")[j].classList.add("active");
  }
  function k(Q, j) {
    let X = [...v];
    X = X.filter((G) => G !== X[j]), C([...X]);
  }
  function D(Q) {
    const j = Q.target.nextSibling, X = parseInt(j.value);
    X > 0 && (j.value = X - 1);
  }
  function y(Q) {
    const j = Q.target.previousSibling, X = parseInt(j.value);
    j.value = X + 1;
  }
  function H(Q) {
    parseInt(Q.target.value) > 100 && (Q.target.value = 100);
  }
  function N(Q) {
    console.log(Q.target.innerText);
  }
  function A({ data: Q }) {
    let j = "";
    if (Q.length > 0)
      j = Q.map((X, G) => {
        const ae = X[0];
        return /* @__PURE__ */ at.jsxs(
          "div",
          {
            className: "image",
            onMouseOver: (ne) => x(ne, G),
            onMouseOut: (ne) => x(ne, G),
            children: [
              /* @__PURE__ */ at.jsxs("div", { className: "label", children: [
                /* @__PURE__ */ at.jsxs("h3", { children: [
                  X[1],
                  "B$"
                ] }),
                /* @__PURE__ */ at.jsxs("div", { className: "quantity", children: [
                  /* @__PURE__ */ at.jsx("button", { className: "decrement", onClick: D, children: "-" }),
                  /* @__PURE__ */ at.jsx(
                    "input",
                    {
                      type: "text",
                      inputMode: "numeric",
                      defaultValue: "1",
                      onChange: (ne, oe) => H(ne)
                    }
                  ),
                  /* @__PURE__ */ at.jsx("button", { className: "increment", onClick: y, children: "+" })
                ] }),
                /* @__PURE__ */ at.jsxs(
                  "button",
                  {
                    className: "label_action",
                    onClick: (ne) => k(ne, G),
                    children: [
                      "Remove",
                      /* @__PURE__ */ at.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ at.jsx("path", { d: "M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19Z" }) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ at.jsx("img", { src: ae, className: "photo", alt: "photo" }, ae)
            ]
          },
          ae
        );
      });
    else
      return /* @__PURE__ */ at.jsx("div", { className: "cart_container column_flex", children: /* @__PURE__ */ at.jsxs("div", { className: "cart_box column_flex", children: [
        /* @__PURE__ */ at.jsx("h2", { children: "Cart is Empty" }),
        /* @__PURE__ */ at.jsx("button", { onClick: () => S(-1), children: "Go Back" })
      ] }) });
    return /* @__PURE__ */ at.jsxs("div", { className: "cart_page", children: [
      /* @__PURE__ */ at.jsxs("div", { className: "cart_nav", children: [
        /* @__PURE__ */ at.jsx("button", { className: "cart_to_home", onClick: () => S(-1), children: "Home" }),
        /* @__PURE__ */ at.jsx("button", { onClick: N, children: "Place Order" })
      ] }),
      /* @__PURE__ */ at.jsx("div", { className: "container", children: j }, "container")
    ] }, "cart_page");
  }
  return A.propTypes = {
    data: lc.array.isRequired
  }, /* @__PURE__ */ at.jsx(A, { data: v });
}
LT.propTypes = {
  cartItems: lc.array.isRequired,
  setCartItems: lc.func.isRequired
};
function e0({ page: v }) {
  const [C, S] = he.useState([]);
  return /* @__PURE__ */ at.jsx(at.Fragment, { children: v === 0 ? /* @__PURE__ */ at.jsx(NT, { cartItems: C, setCartItems: S }) : /* @__PURE__ */ at.jsx(LT, { cartItems: C, setCartItems: S }) });
}
e0.propTypes = {
  page: lc.number.isRequired
};
sv.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ at.jsx(hT.StrictMode, { children: /* @__PURE__ */ at.jsx(Lk, { children: /* @__PURE__ */ at.jsxs(Sk, { children: [
    /* @__PURE__ */ at.jsx(KE, { path: "/", element: /* @__PURE__ */ at.jsx(e0, { page: 0 }) }),
    /* @__PURE__ */ at.jsx(KE, { path: "/cart", element: /* @__PURE__ */ at.jsx(e0, { page: 1 }) })
  ] }) }) })
);
