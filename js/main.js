(() => {
  "use strict";
  var t,
    e = Object.defineProperty,
    r = (t, r, n) => (
      ((t, r, n) => {
        r in t
          ? e(t, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (t[r] = n);
      })(t, "symbol" != typeof r ? r + "" : r, n),
      n
    ),
    n = class {
      requestAnimationFrame(t) {
        return requestAnimationFrame(t);
      }
      cancelAnimationFrame(t) {
        cancelAnimationFrame(t);
      }
    },
    a = class {
      constructor() {
        r(this, "_lastHandleId", 0), r(this, "_lastImmediate", null);
      }
      requestAnimationFrame(t) {
        return (
          this._lastHandleId >= Number.MAX_SAFE_INTEGER &&
            (this._lastHandleId = 0),
          (this._lastHandleId += 1),
          (this._lastImmediate = setImmediate(() => {
            t(Date.now());
          })),
          this._lastHandleId
        );
      }
      cancelAnimationFrame(t) {
        this._lastImmediate && clearImmediate(this._lastImmediate);
      }
    },
    o = class {
      constructor() {
        r(this, "_strategy"),
          (this._strategy =
            "function" == typeof requestAnimationFrame ? new n() : new a());
      }
      requestAnimationFrame(t) {
        return this._strategy.requestAnimationFrame(t);
      }
      cancelAnimationFrame(t) {
        this._strategy.cancelAnimationFrame(t);
      }
    },
    i = typeof window < "u" && typeof window.document < "u",
    s = "@lottiefiles/dotlottie-web",
    u = "0.24.0",
    l =
      ((t = typeof document < "u" ? document.currentScript?.src : void 0),
      function (e = {}) {
        var r,
          n,
          a = e,
          o = new Promise((t, e) => {
            (r = t), (n = e);
          }),
          i = Object.assign({}, a),
          s = "./this.program",
          u = "";
        typeof document < "u" &&
          document.currentScript &&
          (u = document.currentScript.src),
          t && (u = t),
          (u = u.startsWith("blob:")
            ? ""
            : u.substr(0, u.replace(/[?#].*/, "").lastIndexOf("/") + 1));
        var l,
          c = a.print || console.log.bind(console),
          d = a.printErr || console.error.bind(console);
        Object.assign(a, i),
          (i = null),
          a.arguments && a.arguments,
          a.thisProgram && (s = a.thisProgram),
          a.quit && a.quit,
          a.wasmBinary && (l = a.wasmBinary);
        var h,
          m,
          p,
          f,
          y,
          g,
          v,
          _,
          w,
          C = !1;
        function $() {
          var t = h.buffer;
          (a.HEAP8 = m = new Int8Array(t)),
            (a.HEAP16 = f = new Int16Array(t)),
            (a.HEAPU8 = p = new Uint8Array(t)),
            (a.HEAPU16 = y = new Uint16Array(t)),
            (a.HEAP32 = g = new Int32Array(t)),
            (a.HEAPU32 = v = new Uint32Array(t)),
            (a.HEAPF32 = _ = new Float32Array(t)),
            (a.HEAPF64 = w = new Float64Array(t));
        }
        var b = [],
          F = [],
          L = [],
          P = 0,
          T = null;
        function A(t) {
          a.onAbort?.(t),
            d((t = "Aborted(" + t + ")")),
            (C = !0),
            (t += ". Build with -sASSERTIONS for more info.");
          var e = new WebAssembly.RuntimeError(t);
          throw (n(e), e);
        }
        var M,
          S,
          E = (t) => t.startsWith("data:application/octet-stream;base64,");
        function k(t) {
          if (t == M && l) return new Uint8Array(l);
          throw "both async and sync fetching of the wasm failed";
        }
        function j(t, e, r) {
          return (function (t) {
            return l || "function" != typeof fetch
              ? Promise.resolve().then(() => k(t))
              : fetch(t, { credentials: "same-origin" })
                  .then((e) => {
                    if (!e.ok)
                      throw `failed to load wasm binary file at '${t}'`;
                    return e.arrayBuffer();
                  })
                  .catch(() => k(t));
          })(t)
            .then((t) => WebAssembly.instantiate(t, e))
            .then(r, (t) => {
              d(`failed to asynchronously prepare wasm: ${t}`), A(t);
            });
        }
        E((M = "DotLottiePlayer.wasm")) ||
          ((S = M), (M = a.locateFile ? a.locateFile(S, u) : u + S));
        var D = (t) => {
          for (; t.length > 0; ) t.shift()(a);
        };
        a.noExitRuntime;
        var W = (t) => Ce(t),
          I = () => $e(),
          R = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0,
          O = (t, e, r) => {
            for (var n = e + r, a = e; t[a] && !(a >= n); ) ++a;
            if (a - e > 16 && t.buffer && R) return R.decode(t.subarray(e, a));
            for (var o = ""; e < a; ) {
              var i = t[e++];
              if (128 & i) {
                var s = 63 & t[e++];
                if (192 != (224 & i)) {
                  var u = 63 & t[e++];
                  if (
                    (i =
                      224 == (240 & i)
                        ? ((15 & i) << 12) | (s << 6) | u
                        : ((7 & i) << 18) |
                          (s << 12) |
                          (u << 6) |
                          (63 & t[e++])) < 65536
                  )
                    o += String.fromCharCode(i);
                  else {
                    var l = i - 65536;
                    o += String.fromCharCode(
                      55296 | (l >> 10),
                      56320 | (1023 & l)
                    );
                  }
                } else o += String.fromCharCode(((31 & i) << 6) | s);
              } else o += String.fromCharCode(i);
            }
            return o;
          },
          x = (t, e) => (t ? O(p, t, e) : ""),
          U = 0;
        class H {
          constructor(t) {
            (this.excPtr = t), (this.ptr = t - 24);
          }
          set_type(t) {
            v[(this.ptr + 4) >> 2] = t;
          }
          get_type() {
            return v[(this.ptr + 4) >> 2];
          }
          set_destructor(t) {
            v[(this.ptr + 8) >> 2] = t;
          }
          get_destructor() {
            return v[(this.ptr + 8) >> 2];
          }
          set_caught(t) {
            (t = t ? 1 : 0), (m[this.ptr + 12] = t);
          }
          get_caught() {
            return 0 != m[this.ptr + 12];
          }
          set_rethrown(t) {
            (t = t ? 1 : 0), (m[this.ptr + 13] = t);
          }
          get_rethrown() {
            return 0 != m[this.ptr + 13];
          }
          init(t, e) {
            this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(e);
          }
          set_adjusted_ptr(t) {
            v[(this.ptr + 16) >> 2] = t;
          }
          get_adjusted_ptr() {
            return v[(this.ptr + 16) >> 2];
          }
          get_exception_ptr() {
            if (Fe(this.get_type())) return v[this.excPtr >> 2];
            var t = this.get_adjusted_ptr();
            return 0 !== t ? t : this.excPtr;
          }
        }
        var q = (t) => we(t),
          V = (t) => {
            for (var e = 0, r = 0; r < t.length; ++r) {
              var n = t.charCodeAt(r);
              n <= 127
                ? e++
                : n <= 2047
                  ? (e += 2)
                  : n >= 55296 && n <= 57343
                    ? ((e += 4), ++r)
                    : (e += 3);
            }
            return e;
          },
          z = (t, e, r, n) => {
            if (!(n > 0)) return 0;
            for (var a = r, o = r + n - 1, i = 0; i < t.length; ++i) {
              var s = t.charCodeAt(i);
              if (
                (s >= 55296 &&
                  s <= 57343 &&
                  (s =
                    (65536 + ((1023 & s) << 10)) | (1023 & t.charCodeAt(++i))),
                s <= 127)
              ) {
                if (r >= o) break;
                e[r++] = s;
              } else if (s <= 2047) {
                if (r + 1 >= o) break;
                (e[r++] = 192 | (s >> 6)), (e[r++] = 128 | (63 & s));
              } else if (s <= 65535) {
                if (r + 2 >= o) break;
                (e[r++] = 224 | (s >> 12)),
                  (e[r++] = 128 | ((s >> 6) & 63)),
                  (e[r++] = 128 | (63 & s));
              } else {
                if (r + 3 >= o) break;
                (e[r++] = 240 | (s >> 18)),
                  (e[r++] = 128 | ((s >> 12) & 63)),
                  (e[r++] = 128 | ((s >> 6) & 63)),
                  (e[r++] = 128 | (63 & s));
              }
            }
            return (e[r] = 0), r - a;
          },
          B = {},
          Y = (t) => {
            for (; t.length; ) {
              var e = t.pop();
              t.pop()(e);
            }
          };
        function N(t) {
          return this.fromWireType(v[t >> 2]);
        }
        var G,
          J,
          X,
          Z = {},
          K = {},
          Q = {},
          tt = (t) => {
            throw new G(t);
          },
          et = (t, e, r) => {
            function n(e) {
              var n = r(e);
              n.length !== t.length && tt("Mismatched type converter count");
              for (var a = 0; a < t.length; ++a) at(t[a], n[a]);
            }
            t.forEach(function (t) {
              Q[t] = e;
            });
            var a = new Array(e.length),
              o = [],
              i = 0;
            e.forEach((t, e) => {
              K.hasOwnProperty(t)
                ? (a[e] = K[t])
                : (o.push(t),
                  Z.hasOwnProperty(t) || (Z[t] = []),
                  Z[t].push(() => {
                    (a[e] = K[t]), ++i === o.length && n(a);
                  }));
            }),
              0 === o.length && n(a);
          },
          rt = (t) => {
            for (var e = "", r = t; p[r]; ) e += J[p[r++]];
            return e;
          },
          nt = (t) => {
            throw new X(t);
          };
        function at(t, e, r = {}) {
          if (!("argPackAdvance" in e))
            throw new TypeError(
              "registerType registeredInstance requires argPackAdvance"
            );
          return (function (t, e, r = {}) {
            var n = e.name;
            if (
              (t ||
                nt(`type "${n}" must have a positive integer typeid pointer`),
              K.hasOwnProperty(t))
            ) {
              if (r.ignoreDuplicateRegistrations) return;
              nt(`Cannot register type '${n}' twice`);
            }
            if (((K[t] = e), delete Q[t], Z.hasOwnProperty(t))) {
              var a = Z[t];
              delete Z[t], a.forEach((t) => t());
            }
          })(t, e, r);
        }
        var ot,
          it = (t) => ({
            count: t.count,
            deleteScheduled: t.deleteScheduled,
            preservePointerOnDelete: t.preservePointerOnDelete,
            ptr: t.ptr,
            ptrType: t.ptrType,
            smartPtr: t.smartPtr,
            smartPtrType: t.smartPtrType,
          }),
          st = (t) => {
            nt(t.$$.ptrType.registeredClass.name + " instance already deleted");
          },
          ut = !1,
          lt = (t) => {},
          ct = (t) => {
            (t.count.value -= 1),
              0 === t.count.value &&
                ((t) => {
                  t.smartPtr
                    ? t.smartPtrType.rawDestructor(t.smartPtr)
                    : t.ptrType.registeredClass.rawDestructor(t.ptr);
                })(t);
          },
          dt = (t, e, r) => {
            if (e === r) return t;
            if (void 0 === r.baseClass) return null;
            var n = dt(t, e, r.baseClass);
            return null === n ? null : r.downcast(n);
          },
          ht = {},
          mt = [],
          pt = () => {
            for (; mt.length; ) {
              var t = mt.pop();
              (t.$$.deleteScheduled = !1), t.delete();
            }
          },
          ft = {},
          yt = (t, e) => (
            (!e.ptrType || !e.ptr) &&
              tt("makeClassHandle requires ptr and ptrType"),
            !!e.smartPtrType != !!e.smartPtr &&
              tt("Both smartPtrType and smartPtr must be specified"),
            (e.count = { value: 1 }),
            gt(Object.create(t, { $$: { value: e, writable: !0 } }))
          );
        var gt = (t) =>
          typeof FinalizationRegistry > "u"
            ? ((gt = (t) => t), t)
            : ((ut = new FinalizationRegistry((t) => {
                ct(t.$$);
              })),
              (lt = (t) => ut.unregister(t)),
              (gt = (t) => {
                var e = t.$$;
                if (e.smartPtr) {
                  var r = { $$: e };
                  ut.register(t, r, t);
                }
                return t;
              })(t));
        function vt() {}
        var _t = (t, e) => Object.defineProperty(e, "name", { value: t }),
          wt = (t, e, r) => {
            if (void 0 === t[e].overloadTable) {
              var n = t[e];
              (t[e] = function (...n) {
                return (
                  t[e].overloadTable.hasOwnProperty(n.length) ||
                    nt(
                      `Function '${r}' called with an invalid number of arguments (${n.length}) - expects one of (${t[e].overloadTable})!`
                    ),
                  t[e].overloadTable[n.length].apply(this, n)
                );
              }),
                (t[e].overloadTable = []),
                (t[e].overloadTable[n.argCount] = n);
            }
          },
          Ct = (t, e, r) => {
            a.hasOwnProperty(t)
              ? ((void 0 === r ||
                  (void 0 !== a[t].overloadTable &&
                    void 0 !== a[t].overloadTable[r])) &&
                  nt(`Cannot register public name '${t}' twice`),
                wt(a, t, t),
                a.hasOwnProperty(r) &&
                  nt(
                    `Cannot register multiple overloads of a function with the same number of arguments (${r})!`
                  ),
                (a[t].overloadTable[r] = e))
              : ((a[t] = e), void 0 !== r && (a[t].numArguments = r));
          };
        function $t(t, e, r, n, a, o, i, s) {
          (this.name = t),
            (this.constructor = e),
            (this.instancePrototype = r),
            (this.rawDestructor = n),
            (this.baseClass = a),
            (this.getActualType = o),
            (this.upcast = i),
            (this.downcast = s),
            (this.pureVirtualFunctions = []);
        }
        var bt = (t, e, r) => {
          for (; e !== r; )
            e.upcast ||
              nt(
                `Expected null or instance of ${r.name}, got an instance of ${e.name}`
              ),
              (t = e.upcast(t)),
              (e = e.baseClass);
          return t;
        };
        function Ft(t, e) {
          if (null === e)
            return (
              this.isReference && nt(`null is not a valid ${this.name}`), 0
            );
          e.$$ || nt(`Cannot pass "${Nt(e)}" as a ${this.name}`),
            e.$$.ptr ||
              nt(
                `Cannot pass deleted object as a pointer of type ${this.name}`
              );
          var r = e.$$.ptrType.registeredClass;
          return bt(e.$$.ptr, r, this.registeredClass);
        }
        function Lt(t, e) {
          var r;
          if (null === e)
            return (
              this.isReference && nt(`null is not a valid ${this.name}`),
              this.isSmartPointer
                ? ((r = this.rawConstructor()),
                  null !== t && t.push(this.rawDestructor, r),
                  r)
                : 0
            );
          (!e || !e.$$) && nt(`Cannot pass "${Nt(e)}" as a ${this.name}`),
            e.$$.ptr ||
              nt(
                `Cannot pass deleted object as a pointer of type ${this.name}`
              ),
            !this.isConst &&
              e.$$.ptrType.isConst &&
              nt(
                `Cannot convert argument of type ${e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name} to parameter type ${this.name}`
              );
          var n = e.$$.ptrType.registeredClass;
          if (
            ((r = bt(e.$$.ptr, n, this.registeredClass)), this.isSmartPointer)
          )
            switch (
              (void 0 === e.$$.smartPtr &&
                nt("Passing raw pointer to smart pointer is illegal"),
              this.sharingPolicy)
            ) {
              case 0:
                e.$$.smartPtrType === this
                  ? (r = e.$$.smartPtr)
                  : nt(
                      `Cannot convert argument of type ${e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name} to parameter type ${this.name}`
                    );
                break;
              case 1:
                r = e.$$.smartPtr;
                break;
              case 2:
                if (e.$$.smartPtrType === this) r = e.$$.smartPtr;
                else {
                  var a = e.clone();
                  (r = this.rawShare(
                    r,
                    qt.toHandle(() => a.delete())
                  )),
                    null !== t && t.push(this.rawDestructor, r);
                }
                break;
              default:
                nt("Unsupporting sharing policy");
            }
          return r;
        }
        function Pt(t, e) {
          if (null === e)
            return (
              this.isReference && nt(`null is not a valid ${this.name}`), 0
            );
          e.$$ || nt(`Cannot pass "${Nt(e)}" as a ${this.name}`),
            e.$$.ptr ||
              nt(
                `Cannot pass deleted object as a pointer of type ${this.name}`
              ),
            e.$$.ptrType.isConst &&
              nt(
                `Cannot convert argument of type ${e.$$.ptrType.name} to parameter type ${this.name}`
              );
          var r = e.$$.ptrType.registeredClass;
          return bt(e.$$.ptr, r, this.registeredClass);
        }
        function Tt(t, e, r, n, a, o, i, s, u, l, c) {
          (this.name = t),
            (this.registeredClass = e),
            (this.isReference = r),
            (this.isConst = n),
            (this.isSmartPointer = a),
            (this.pointeeType = o),
            (this.sharingPolicy = i),
            (this.rawGetPointee = s),
            (this.rawConstructor = u),
            (this.rawShare = l),
            (this.rawDestructor = c),
            a || void 0 !== e.baseClass
              ? (this.toWireType = Lt)
              : n
                ? ((this.toWireType = Ft), (this.destructorFunction = null))
                : ((this.toWireType = Pt), (this.destructorFunction = null));
        }
        var At,
          Mt,
          St = (t, e, r) => {
            a.hasOwnProperty(t) || tt("Replacing nonexistent public symbol"),
              void 0 !== a[t].overloadTable && void 0 !== r
                ? (a[t].overloadTable[r] = e)
                : ((a[t] = e), (a[t].argCount = r));
          },
          Et = (t) => At.get(t),
          kt = (t, e) => {
            var r = (t = rt(t)).includes("j")
              ? (
                  (t, e) =>
                  (...r) =>
                    ((t, e, r = []) =>
                      t.includes("j")
                        ? ((t, e, r) => (
                            (t = t.replace(/p/g, "i")),
                            (0, a["dynCall_" + t])(e, ...r)
                          ))(t, e, r)
                        : Et(e)(...r))(t, e, r)
                )(t, e)
              : Et(e);
            return (
              "function" != typeof r &&
                nt(`unknown function pointer with signature ${t}: ${e}`),
              r
            );
          },
          jt = (t) => {
            var e = ge(t),
              r = rt(e);
            return ve(e), r;
          },
          Dt = (t, e) => {
            var r = [],
              n = {};
            throw (
              (e.forEach(function t(e) {
                if (!n[e] && !K[e]) {
                  if (Q[e]) return void Q[e].forEach(t);
                  r.push(e), (n[e] = !0);
                }
              }),
              new Mt(`${t}: ` + r.map(jt).join([", "])))
            );
          },
          Wt = (t, e) => {
            for (var r = [], n = 0; n < t; n++) r.push(v[(e + 4 * n) >> 2]);
            return r;
          };
        function It(t, e, r, n, a, o) {
          var i = e.length;
          i < 2 &&
            nt(
              "argTypes array size mismatch! Must at least get return value and 'this' types!"
            );
          var s = null !== e[1] && null !== r,
            u = (function (t) {
              for (var e = 1; e < t.length; ++e)
                if (null !== t[e] && void 0 === t[e].destructorFunction)
                  return !0;
              return !1;
            })(e),
            l = "void" !== e[0].name,
            c = i - 2,
            d = new Array(c),
            h = [],
            m = [];
          return _t(t, function (...r) {
            var o;
            r.length !== c &&
              nt(
                `function ${t} called with ${r.length} arguments, expected ${c}`
              ),
              (m.length = 0),
              (h.length = s ? 2 : 1),
              (h[0] = a),
              s && ((o = e[1].toWireType(m, this)), (h[1] = o));
            for (var i = 0; i < c; ++i)
              (d[i] = e[i + 2].toWireType(m, r[i])), h.push(d[i]);
            return (function (t) {
              if (u) Y(m);
              else
                for (var r = s ? 1 : 2; r < e.length; r++) {
                  var n = 1 === r ? o : d[r - 2];
                  null !== e[r].destructorFunction &&
                    e[r].destructorFunction(n);
                }
              if (l) return e[0].fromWireType(t);
            })(n(...h));
          });
        }
        var Rt,
          Ot = (t) => {
            let e = (t = t.trim()).indexOf("(");
            return -1 !== e ? t.substr(0, e) : t;
          },
          xt = [],
          Ut = [],
          Ht = (t) => {
            t > 9 && 0 == --Ut[t + 1] && ((Ut[t] = void 0), xt.push(t));
          },
          qt = {
            toValue: (t) => (
              t || nt("Cannot use deleted val. handle = " + t), Ut[t]
            ),
            toHandle: (t) => {
              switch (t) {
                case void 0:
                  return 2;
                case null:
                  return 4;
                case !0:
                  return 6;
                case !1:
                  return 8;
                default: {
                  let e = xt.pop() || Ut.length;
                  return (Ut[e] = t), (Ut[e + 1] = 1), e;
                }
              }
            },
          },
          Vt = {
            name: "emscripten::val",
            fromWireType: (t) => {
              var e = qt.toValue(t);
              return Ht(t), e;
            },
            toWireType: (t, e) => qt.toHandle(e),
            argPackAdvance: 8,
            readValueFromPointer: N,
            destructorFunction: null,
          },
          zt = (t) => at(t, Vt),
          Bt = (t, e, r) => {
            switch (e) {
              case 1:
                return r
                  ? function (t) {
                      return this.fromWireType(m[t]);
                    }
                  : function (t) {
                      return this.fromWireType(p[t]);
                    };
              case 2:
                return r
                  ? function (t) {
                      return this.fromWireType(f[t >> 1]);
                    }
                  : function (t) {
                      return this.fromWireType(y[t >> 1]);
                    };
              case 4:
                return r
                  ? function (t) {
                      return this.fromWireType(g[t >> 2]);
                    }
                  : function (t) {
                      return this.fromWireType(v[t >> 2]);
                    };
              default:
                throw new TypeError(`invalid integer width (${e}): ${t}`);
            }
          },
          Yt = (t, e) => {
            var r = K[t];
            return void 0 === r && nt(`${e} has unknown type ${jt(t)}`), r;
          },
          Nt = (t) => {
            if (null === t) return "null";
            var e = typeof t;
            return "object" === e || "array" === e || "function" === e
              ? t.toString()
              : "" + t;
          },
          Gt = (t, e) => {
            switch (e) {
              case 4:
                return function (t) {
                  return this.fromWireType(_[t >> 2]);
                };
              case 8:
                return function (t) {
                  return this.fromWireType(w[t >> 3]);
                };
              default:
                throw new TypeError(`invalid float width (${e}): ${t}`);
            }
          },
          Jt = (t, e, r) => {
            switch (e) {
              case 1:
                return r ? (t) => m[t] : (t) => p[t];
              case 2:
                return r ? (t) => f[t >> 1] : (t) => y[t >> 1];
              case 4:
                return r ? (t) => g[t >> 2] : (t) => v[t >> 2];
              default:
                throw new TypeError(`invalid integer width (${e}): ${t}`);
            }
          },
          Xt = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0,
          Zt = (t, e) => {
            for (var r = t, n = r >> 1, a = n + e / 2; !(n >= a) && y[n]; ) ++n;
            if ((r = n << 1) - t > 32 && Xt) return Xt.decode(p.subarray(t, r));
            for (var o = "", i = 0; !(i >= e / 2); ++i) {
              var s = f[(t + 2 * i) >> 1];
              if (0 == s) break;
              o += String.fromCharCode(s);
            }
            return o;
          },
          Kt = (t, e, r) => {
            if ((r ?? (r = 2147483647), r < 2)) return 0;
            for (
              var n = e, a = (r -= 2) < 2 * t.length ? r / 2 : t.length, o = 0;
              o < a;
              ++o
            ) {
              var i = t.charCodeAt(o);
              (f[e >> 1] = i), (e += 2);
            }
            return (f[e >> 1] = 0), e - n;
          },
          Qt = (t) => 2 * t.length,
          te = (t, e) => {
            for (var r = 0, n = ""; !(r >= e / 4); ) {
              var a = g[(t + 4 * r) >> 2];
              if (0 == a) break;
              if ((++r, a >= 65536)) {
                var o = a - 65536;
                n += String.fromCharCode(55296 | (o >> 10), 56320 | (1023 & o));
              } else n += String.fromCharCode(a);
            }
            return n;
          },
          ee = (t, e, r) => {
            if ((r ?? (r = 2147483647), r < 4)) return 0;
            for (var n = e, a = n + r - 4, o = 0; o < t.length; ++o) {
              var i = t.charCodeAt(o);
              if (
                (i >= 55296 &&
                  i <= 57343 &&
                  (i =
                    (65536 + ((1023 & i) << 10)) | (1023 & t.charCodeAt(++o))),
                (g[e >> 2] = i),
                (e += 4) + 4 > a)
              )
                break;
            }
            return (g[e >> 2] = 0), e - n;
          },
          re = (t) => {
            for (var e = 0, r = 0; r < t.length; ++r) {
              var n = t.charCodeAt(r);
              n >= 55296 && n <= 57343 && ++r, (e += 4);
            }
            return e;
          },
          ne = [],
          ae = Reflect.construct;
        Rt = () => performance.now();
        var oe = (t) => {
            var e = (t - h.buffer.byteLength + 65535) / 65536;
            try {
              return h.grow(e), $(), 1;
            } catch {}
          },
          ie = {},
          se = () => {
            if (!se.strings) {
              var t = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG:
                  (
                    ("object" == typeof navigator &&
                      navigator.languages &&
                      navigator.languages[0]) ||
                    "C"
                  ).replace("-", "_") + ".UTF-8",
                _: s || "./this.program",
              };
              for (var e in ie) void 0 === ie[e] ? delete t[e] : (t[e] = ie[e]);
              var r = [];
              for (var e in t) r.push(`${e}=${t[e]}`);
              se.strings = r;
            }
            return se.strings;
          },
          ue = [null, [], []],
          le = (t, e) => {
            var r = ue[t];
            0 === e || 10 === e
              ? ((1 === t ? c : d)(O(r, 0)), (r.length = 0))
              : r.push(e);
          },
          ce = (t) =>
            (ce = (() => {
              if (
                "object" == typeof crypto &&
                "function" == typeof crypto.getRandomValues
              )
                return (t) => crypto.getRandomValues(t);
              A("initRandomDevice");
            })())(t),
          de = (t) => t % 4 == 0 && (t % 100 != 0 || t % 400 == 0),
          he = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          me = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        (G = a.InternalError =
          class extends Error {
            constructor(t) {
              super(t), (this.name = "InternalError");
            }
          }),
          (() => {
            for (var t = new Array(256), e = 0; e < 256; ++e)
              t[e] = String.fromCharCode(e);
            J = t;
          })(),
          (X = a.BindingError =
            class extends Error {
              constructor(t) {
                super(t), (this.name = "BindingError");
              }
            }),
          Object.assign(vt.prototype, {
            isAliasOf(t) {
              if (!(this instanceof vt && t instanceof vt)) return !1;
              var e = this.$$.ptrType.registeredClass,
                r = this.$$.ptr;
              t.$$ = t.$$;
              for (
                var n = t.$$.ptrType.registeredClass, a = t.$$.ptr;
                e.baseClass;

              )
                (r = e.upcast(r)), (e = e.baseClass);
              for (; n.baseClass; ) (a = n.upcast(a)), (n = n.baseClass);
              return e === n && r === a;
            },
            clone() {
              if ((this.$$.ptr || st(this), this.$$.preservePointerOnDelete))
                return (this.$$.count.value += 1), this;
              var t = gt(
                Object.create(Object.getPrototypeOf(this), {
                  $$: { value: it(this.$$) },
                })
              );
              return (t.$$.count.value += 1), (t.$$.deleteScheduled = !1), t;
            },
            delete() {
              this.$$.ptr || st(this),
                this.$$.deleteScheduled &&
                  !this.$$.preservePointerOnDelete &&
                  nt("Object already scheduled for deletion"),
                lt(this),
                ct(this.$$),
                this.$$.preservePointerOnDelete ||
                  ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0));
            },
            isDeleted() {
              return !this.$$.ptr;
            },
            deleteLater() {
              return (
                this.$$.ptr || st(this),
                this.$$.deleteScheduled &&
                  !this.$$.preservePointerOnDelete &&
                  nt("Object already scheduled for deletion"),
                mt.push(this),
                1 === mt.length && ot && ot(pt),
                (this.$$.deleteScheduled = !0),
                this
              );
            },
          }),
          (a.getInheritedInstanceCount = () => Object.keys(ft).length),
          (a.getLiveInheritedInstances = () => {
            var t = [];
            for (var e in ft) ft.hasOwnProperty(e) && t.push(ft[e]);
            return t;
          }),
          (a.flushPendingDeletes = pt),
          (a.setDelayFunction = (t) => {
            (ot = t), mt.length && ot && ot(pt);
          }),
          Object.assign(Tt.prototype, {
            getPointee(t) {
              return this.rawGetPointee && (t = this.rawGetPointee(t)), t;
            },
            destructor(t) {
              this.rawDestructor?.(t);
            },
            argPackAdvance: 8,
            readValueFromPointer: N,
            fromWireType: function (t) {
              var e = this.getPointee(t);
              if (!e) return this.destructor(t), null;
              var r = ((t, e) => (
                (e = ((t, e) => {
                  for (
                    void 0 === e && nt("ptr should not be undefined");
                    t.baseClass;

                  )
                    (e = t.upcast(e)), (t = t.baseClass);
                  return e;
                })(t, e)),
                ft[e]
              ))(this.registeredClass, e);
              if (void 0 !== r) {
                if (0 === r.$$.count.value)
                  return (r.$$.ptr = e), (r.$$.smartPtr = t), r.clone();
                var n = r.clone();
                return this.destructor(t), n;
              }
              function a() {
                return this.isSmartPointer
                  ? yt(this.registeredClass.instancePrototype, {
                      ptrType: this.pointeeType,
                      ptr: e,
                      smartPtrType: this,
                      smartPtr: t,
                    })
                  : yt(this.registeredClass.instancePrototype, {
                      ptrType: this,
                      ptr: t,
                    });
              }
              var o,
                i = this.registeredClass.getActualType(e),
                s = ht[i];
              if (!s) return a.call(this);
              o = this.isConst ? s.constPointerType : s.pointerType;
              var u = dt(e, this.registeredClass, o.registeredClass);
              return null === u
                ? a.call(this)
                : this.isSmartPointer
                  ? yt(o.registeredClass.instancePrototype, {
                      ptrType: o,
                      ptr: u,
                      smartPtrType: this,
                      smartPtr: t,
                    })
                  : yt(o.registeredClass.instancePrototype, {
                      ptrType: o,
                      ptr: u,
                    });
            },
          }),
          (Mt = a.UnboundTypeError =
            ((t, e) => {
              var r = _t(e, function (t) {
                (this.name = e), (this.message = t);
                var r = new Error(t).stack;
                void 0 !== r &&
                  (this.stack =
                    this.toString() +
                    "\n" +
                    r.replace(/^Error(:[^\n]*)?\n/, ""));
              });
              return (
                (r.prototype = Object.create(t.prototype)),
                (r.prototype.constructor = r),
                (r.prototype.toString = function () {
                  return void 0 === this.message
                    ? this.name
                    : `${this.name}: ${this.message}`;
                }),
                r
              );
            })(Error, "UnboundTypeError")),
          Ut.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
          (a.count_emval_handles = () => Ut.length / 2 - 5 - xt.length);
        var pe = {
            c: (t, e, r, n) => {
              A(
                `Assertion failed: ${x(t)}, at: ` +
                  [
                    e ? x(e) : "unknown filename",
                    r,
                    n ? x(n) : "unknown function",
                  ]
              );
            },
            d: () =>
              ((t) => {
                var e = U;
                if (!e) return q(0), 0;
                var r = new H(e);
                r.set_adjusted_ptr(e);
                var n = r.get_type();
                if (!n) return q(0), e;
                for (var a in t) {
                  var o = t[a];
                  if (0 === o || o === n) break;
                  var i = r.ptr + 16;
                  if (be(o, n, i)) return q(o), e;
                }
                return q(n), e;
              })([]),
            q: (t, e, r) => {
              throw (new H(t).init(e, r), (U = t));
            },
            h: (t) => {
              throw (U || (U = t), U);
            },
            E: function (t, e, r) {
              return 0;
            },
            W: (t, e) => {},
            T: (t, e) => {},
            X: function (t, e, r) {
              return 0;
            },
            U: (t, e, r, n) => {},
            D: function (t, e, r, n) {},
            V: (t, e) => {},
            A: (t) => {
              var e = B[t];
              delete B[t];
              var r = e.rawConstructor,
                n = e.rawDestructor,
                a = e.fields,
                o = a
                  .map((t) => t.getterReturnType)
                  .concat(a.map((t) => t.setterArgumentType));
              et([t], o, (t) => {
                var o = {};
                return (
                  a.forEach((e, r) => {
                    var n = e.fieldName,
                      i = t[r],
                      s = e.getter,
                      u = e.getterContext,
                      l = t[r + a.length],
                      c = e.setter,
                      d = e.setterContext;
                    o[n] = {
                      read: (t) => i.fromWireType(s(u, t)),
                      write: (t, e) => {
                        var r = [];
                        c(d, t, l.toWireType(r, e)), Y(r);
                      },
                    };
                  }),
                  [
                    {
                      name: e.name,
                      fromWireType: (t) => {
                        var e = {};
                        for (var r in o) e[r] = o[r].read(t);
                        return n(t), e;
                      },
                      toWireType: (t, e) => {
                        for (var a in o)
                          if (!(a in e))
                            throw new TypeError(`Missing field: "${a}"`);
                        var i = r();
                        for (a in o) o[a].write(i, e[a]);
                        return null !== t && t.push(n, i), i;
                      },
                      argPackAdvance: 8,
                      readValueFromPointer: N,
                      destructorFunction: n,
                    },
                  ]
                );
              });
            },
            O: (t, e, r, n, a) => {},
            ea: (t, e, r, n) => {
              at(t, {
                name: (e = rt(e)),
                fromWireType: function (t) {
                  return !!t;
                },
                toWireType: function (t, e) {
                  return e ? r : n;
                },
                argPackAdvance: 8,
                readValueFromPointer: function (t) {
                  return this.fromWireType(p[t]);
                },
                destructorFunction: null,
              });
            },
            z: (t, e, r, n, a, o, i, s, u, l, c, d, h) => {
              (c = rt(c)),
                (o = kt(a, o)),
                s && (s = kt(i, s)),
                l && (l = kt(u, l)),
                (h = kt(d, h));
              var m = ((t) => {
                if (void 0 === t) return "_unknown";
                var e = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                return e >= 48 && e <= 57 ? `_${t}` : t;
              })(c);
              Ct(m, function () {
                Dt(`Cannot construct ${c} due to unbound types`, [n]);
              }),
                et([t, e, r], n ? [n] : [], (e) => {
                  var r, a, i;
                  (e = e[0]),
                    (i = n
                      ? (a = e.registeredClass).instancePrototype
                      : vt.prototype);
                  var u = _t(c, function (...t) {
                      if (Object.getPrototypeOf(this) !== d)
                        throw new X("Use 'new' to construct " + c);
                      if (void 0 === p.constructor_body)
                        throw new X(c + " has no accessible constructor");
                      var e = p.constructor_body[t.length];
                      if (void 0 === e)
                        throw new X(
                          `Tried to invoke ctor of ${c} with invalid number of parameters (${t.length}) - expected (${Object.keys(p.constructor_body).toString()}) parameters instead!`
                        );
                      return e.apply(this, t);
                    }),
                    d = Object.create(i, { constructor: { value: u } });
                  u.prototype = d;
                  var p = new $t(c, u, d, h, a, o, s, l);
                  p.baseClass &&
                    ((r = p.baseClass).__derivedClasses ??
                      (r.__derivedClasses = []),
                    p.baseClass.__derivedClasses.push(p));
                  var f = new Tt(c, p, !0, !1, !1),
                    y = new Tt(c + "*", p, !1, !1, !1),
                    g = new Tt(c + " const*", p, !1, !0, !1);
                  return (
                    (ht[t] = { pointerType: y, constPointerType: g }),
                    St(m, u),
                    [f, y, g]
                  );
                });
            },
            x: (t, e, r, n, a, o) => {
              var i = Wt(e, r);
              (a = kt(n, a)),
                et([], [t], (t) => {
                  var r = `constructor ${(t = t[0]).name}`;
                  if (
                    (void 0 === t.registeredClass.constructor_body &&
                      (t.registeredClass.constructor_body = []),
                    void 0 !== t.registeredClass.constructor_body[e - 1])
                  )
                    throw new X(
                      `Cannot register multiple constructors with identical number of parameters (${e - 1}) for class '${t.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`
                    );
                  return (
                    (t.registeredClass.constructor_body[e - 1] = () => {
                      Dt(`Cannot construct ${t.name} due to unbound types`, i);
                    }),
                    et(
                      [],
                      i,
                      (n) => (
                        n.splice(1, 0, null),
                        (t.registeredClass.constructor_body[e - 1] = It(
                          r,
                          n,
                          null,
                          a,
                          o
                        )),
                        []
                      )
                    ),
                    []
                  );
                });
            },
            i: (t, e, r, n, a, o, i, s, u) => {
              var l = Wt(r, n);
              (e = rt(e)),
                (e = Ot(e)),
                (o = kt(a, o)),
                et([], [t], (t) => {
                  var n = `${(t = t[0]).name}.${e}`;
                  function a() {
                    Dt(`Cannot call ${n} due to unbound types`, l);
                  }
                  e.startsWith("@@") && (e = Symbol[e.substring(2)]),
                    s && t.registeredClass.pureVirtualFunctions.push(e);
                  var u = t.registeredClass.instancePrototype,
                    c = u[e];
                  return (
                    void 0 === c ||
                    (void 0 === c.overloadTable &&
                      c.className !== t.name &&
                      c.argCount === r - 2)
                      ? ((a.argCount = r - 2),
                        (a.className = t.name),
                        (u[e] = a))
                      : (wt(u, e, n), (u[e].overloadTable[r - 2] = a)),
                    et([], l, (a) => {
                      var s = It(n, a, t, o, i);
                      return (
                        void 0 === u[e].overloadTable
                          ? ((s.argCount = r - 2), (u[e] = s))
                          : (u[e].overloadTable[r - 2] = s),
                        []
                      );
                    }),
                    []
                  );
                });
            },
            da: zt,
            B: (t, e, r, n) => {
              function a() {}
              (e = rt(e)),
                (a.values = {}),
                at(t, {
                  name: e,
                  constructor: a,
                  fromWireType: function (t) {
                    return this.constructor.values[t];
                  },
                  toWireType: (t, e) => e.value,
                  argPackAdvance: 8,
                  readValueFromPointer: Bt(e, r, n),
                  destructorFunction: null,
                }),
                Ct(e, a);
            },
            n: (t, e, r) => {
              var n = Yt(t, "enum");
              e = rt(e);
              var a = n.constructor,
                o = Object.create(n.constructor.prototype, {
                  value: { value: r },
                  constructor: { value: _t(`${n.name}_${e}`, function () {}) },
                });
              (a.values[r] = o), (a[e] = o);
            },
            I: (t, e, r) => {
              at(t, {
                name: (e = rt(e)),
                fromWireType: (t) => t,
                toWireType: (t, e) => e,
                argPackAdvance: 8,
                readValueFromPointer: Gt(e, r),
                destructorFunction: null,
              });
            },
            K: (t, e, r, n, a, o, i) => {
              var s = Wt(e, r);
              (t = rt(t)),
                (t = Ot(t)),
                (a = kt(n, a)),
                Ct(
                  t,
                  function () {
                    Dt(`Cannot call ${t} due to unbound types`, s);
                  },
                  e - 1
                ),
                et([], s, (r) => {
                  var n = [r[0], null].concat(r.slice(1));
                  return St(t, It(t, n, null, a, o), e - 1), [];
                });
            },
            p: (t, e, r, n, a) => {
              e = rt(e);
              var o = (t) => t;
              if (0 === n) {
                var i = 32 - 8 * r;
                o = (t) => (t << i) >>> i;
              }
              var s = e.includes("unsigned");
              at(t, {
                name: e,
                fromWireType: o,
                toWireType: s
                  ? function (t, e) {
                      return this.name, e >>> 0;
                    }
                  : function (t, e) {
                      return this.name, e;
                    },
                argPackAdvance: 8,
                readValueFromPointer: Jt(e, r, 0 !== n),
                destructorFunction: null,
              });
            },
            k: (t, e, r) => {
              var n = [
                Int8Array,
                Uint8Array,
                Int16Array,
                Uint16Array,
                Int32Array,
                Uint32Array,
                Float32Array,
                Float64Array,
              ][e];
              function a(t) {
                var e = v[t >> 2],
                  r = v[(t + 4) >> 2];
                return new n(m.buffer, r, e);
              }
              at(
                t,
                {
                  name: (r = rt(r)),
                  fromWireType: a,
                  argPackAdvance: 8,
                  readValueFromPointer: a,
                },
                { ignoreDuplicateRegistrations: !0 }
              );
            },
            L: (t, e) => {
              zt(t);
            },
            ka: (t, e, r, n, a, o, i, s, u, l, c, d) => {
              (r = rt(r)),
                (o = kt(a, o)),
                (s = kt(i, s)),
                (l = kt(u, l)),
                (d = kt(c, d)),
                et(
                  [t],
                  [e],
                  (t) => (
                    (t = t[0]),
                    [new Tt(r, t.registeredClass, !1, !1, !0, t, n, o, s, l, d)]
                  )
                );
            },
            J: (t, e) => {
              var r = "std::string" === (e = rt(e));
              at(t, {
                name: e,
                fromWireType(t) {
                  var e,
                    n = v[t >> 2],
                    a = t + 4;
                  if (r)
                    for (var o = a, i = 0; i <= n; ++i) {
                      var s = a + i;
                      if (i == n || 0 == p[s]) {
                        var u = x(o, s - o);
                        void 0 === e ? (e = u) : ((e += "\0"), (e += u)),
                          (o = s + 1);
                      }
                    }
                  else {
                    var l = new Array(n);
                    for (i = 0; i < n; ++i)
                      l[i] = String.fromCharCode(p[a + i]);
                    e = l.join("");
                  }
                  return ve(t), e;
                },
                toWireType(t, e) {
                  e instanceof ArrayBuffer && (e = new Uint8Array(e));
                  var n,
                    a = "string" == typeof e;
                  a ||
                    e instanceof Uint8Array ||
                    e instanceof Uint8ClampedArray ||
                    e instanceof Int8Array ||
                    nt("Cannot pass non-string to std::string"),
                    (n = r && a ? V(e) : e.length);
                  var o = ye(4 + n + 1),
                    i = o + 4;
                  if (((v[o >> 2] = n), r && a))
                    ((t, e, r) => {
                      z(t, p, e, r);
                    })(e, i, n + 1);
                  else if (a)
                    for (var s = 0; s < n; ++s) {
                      var u = e.charCodeAt(s);
                      u > 255 &&
                        (ve(i),
                        nt(
                          "String has UTF-16 code units that do not fit in 8 bits"
                        )),
                        (p[i + s] = u);
                    }
                  else for (s = 0; s < n; ++s) p[i + s] = e[s];
                  return null !== t && t.push(ve, o), o;
                },
                argPackAdvance: 8,
                readValueFromPointer: N,
                destructorFunction(t) {
                  ve(t);
                },
              });
            },
            y: (t, e, r) => {
              var n, a, o, i;
              (r = rt(r)),
                2 === e
                  ? ((n = Zt), (a = Kt), (i = Qt), (o = (t) => y[t >> 1]))
                  : 4 === e &&
                    ((n = te), (a = ee), (i = re), (o = (t) => v[t >> 2])),
                at(t, {
                  name: r,
                  fromWireType: (t) => {
                    for (var r, a = v[t >> 2], i = t + 4, s = 0; s <= a; ++s) {
                      var u = t + 4 + s * e;
                      if (s == a || 0 == o(u)) {
                        var l = n(i, u - i);
                        void 0 === r ? (r = l) : ((r += "\0"), (r += l)),
                          (i = u + e);
                      }
                    }
                    return ve(t), r;
                  },
                  toWireType: (t, n) => {
                    "string" != typeof n &&
                      nt(`Cannot pass non-string to C++ string type ${r}`);
                    var o = i(n),
                      s = ye(4 + o + e);
                    return (
                      (v[s >> 2] = o / e),
                      a(n, s + 4, o + e),
                      null !== t && t.push(ve, s),
                      s
                    );
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: N,
                  destructorFunction(t) {
                    ve(t);
                  },
                });
            },
            u: (t, e, r, n, a, o) => {
              B[t] = {
                name: rt(e),
                rawConstructor: kt(r, n),
                rawDestructor: kt(a, o),
                fields: [],
              };
            },
            m: (t, e, r, n, a, o, i, s, u, l) => {
              B[t].fields.push({
                fieldName: rt(e),
                getterReturnType: r,
                getter: kt(n, a),
                getterContext: o,
                setterArgumentType: i,
                setter: kt(s, u),
                setterContext: l,
              });
            },
            fa: (t, e) => {
              at(t, {
                isVoid: !0,
                name: (e = rt(e)),
                argPackAdvance: 0,
                fromWireType: () => {},
                toWireType: (t, e) => {},
              });
            },
            Y: (t, e, r) => p.copyWithin(t, e, e + r),
            P: () => {
              throw 1 / 0;
            },
            ia: (t, e, r, n) => (t = ne[t])(null, (e = qt.toValue(e)), r, n),
            R: Ht,
            ha: (t, e, r) => {
              var n = ((t, e) => {
                  for (var r = new Array(t), n = 0; n < t; ++n)
                    r[n] = Yt(v[(e + 4 * n) >> 2], "parameter " + n);
                  return r;
                })(t, e),
                a = n.shift();
              t--;
              var o = new Array(t),
                i = `methodCaller<(${n.map((t) => t.name).join(", ")}) => ${a.name}>`;
              return ((t) => {
                var e = ne.length;
                return ne.push(t), e;
              })(
                _t(i, (e, i, s, u) => {
                  for (var l = 0, c = 0; c < t; ++c)
                    (o[c] = n[c].readValueFromPointer(u + l)),
                      (l += n[c].argPackAdvance);
                  var d = 1 === r ? ae(i, o) : i.apply(e, o);
                  return ((t, e, r) => {
                    var n = [],
                      a = t.toWireType(n, r);
                    return n.length && (v[e >> 2] = qt.toHandle(n)), a;
                  })(a, s, d);
                })
              );
            },
            ja: (t) => {
              t > 9 && (Ut[t + 1] += 1);
            },
            ga: (t) => {
              var e = qt.toValue(t);
              Y(e), Ht(t);
            },
            t: (t, e) => {
              var r = (t = Yt(t, "_emval_take_value")).readValueFromPointer(e);
              return qt.toHandle(r);
            },
            ca: () => {
              A("");
            },
            l: Rt,
            S: (t) => {
              var e,
                r = p.length,
                n = 2147483648;
              if ((t >>>= 0) > n) return !1;
              for (var a = 1; a <= 4; a *= 2) {
                var o = r * (1 + 0.2 / a);
                o = Math.min(o, t + 100663296);
                var i = Math.min(
                  n,
                  (e = Math.max(t, o)) + ((65536 - (e % 65536)) % 65536)
                );
                if (oe(i)) return !0;
              }
              return !1;
            },
            Z: (t, e) => {
              var r = 0;
              return (
                se().forEach((n, a) => {
                  var o = e + r;
                  (v[(t + 4 * a) >> 2] = o),
                    ((t, e) => {
                      for (var r = 0; r < t.length; ++r)
                        m[e++] = t.charCodeAt(r);
                      m[e] = 0;
                    })(n, o),
                    (r += n.length + 1);
                }),
                0
              );
            },
            _: (t, e) => {
              var r = se();
              v[t >> 2] = r.length;
              var n = 0;
              return r.forEach((t) => (n += t.length + 1)), (v[e >> 2] = n), 0;
            },
            w: (t) => 52,
            C: (t, e, r, n) => 52,
            N: function (t, e, r, n, a) {
              return 70;
            },
            v: (t, e, r, n) => {
              for (var a = 0, o = 0; o < r; o++) {
                var i = v[e >> 2],
                  s = v[(e + 4) >> 2];
                e += 8;
                for (var u = 0; u < s; u++) le(t, p[i + u]);
                a += s;
              }
              return (v[n >> 2] = a), 0;
            },
            $: (t, e) => (ce(p.subarray(t, t + e)), 0),
            F: function (t) {
              var e = I();
              try {
                return Et(t)();
              } catch (t) {
                if ((W(e), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            j: function (t, e) {
              var r = I();
              try {
                return Et(t)(e);
              } catch (t) {
                if ((W(r), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            g: function (t, e, r) {
              var n = I();
              try {
                return Et(t)(e, r);
              } catch (t) {
                if ((W(n), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            e: function (t, e, r, n) {
              var a = I();
              try {
                return Et(t)(e, r, n);
              } catch (t) {
                if ((W(a), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            ba: function (t, e, r, n, a) {
              var o = I();
              try {
                return Et(t)(e, r, n, a);
              } catch (t) {
                if ((W(o), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            s: function (t, e, r, n, a, o) {
              var i = I();
              try {
                return Et(t)(e, r, n, a, o);
              } catch (t) {
                if ((W(i), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            G: function (t, e, r, n, a, o, i, s) {
              var u = I();
              try {
                return Et(t)(e, r, n, a, o, i, s);
              } catch (t) {
                if ((W(u), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            r: function (t) {
              var e = I();
              try {
                Et(t)();
              } catch (t) {
                if ((W(e), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            b: function (t, e) {
              var r = I();
              try {
                Et(t)(e);
              } catch (t) {
                if ((W(r), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            a: function (t, e, r) {
              var n = I();
              try {
                Et(t)(e, r);
              } catch (t) {
                if ((W(n), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            f: function (t, e, r, n) {
              var a = I();
              try {
                Et(t)(e, r, n);
              } catch (t) {
                if ((W(a), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            o: function (t, e, r, n, a) {
              var o = I();
              try {
                Et(t)(e, r, n, a);
              } catch (t) {
                if ((W(o), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            H: function (t, e, r, n, a, o) {
              var i = I();
              try {
                Et(t)(e, r, n, a, o);
              } catch (t) {
                if ((W(i), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            aa: function (t, e, r, n, a, o, i) {
              var s = I();
              try {
                Et(t)(e, r, n, a, o, i);
              } catch (t) {
                if ((W(s), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            M: function (t, e, r, n, a, o) {
              var i = I();
              try {
                Pe(t, e, r, n, a, o);
              } catch (t) {
                if ((W(i), t !== t + 0)) throw t;
                _e(1, 0);
              }
            },
            Q: (t, e, r, n, a) =>
              ((t, e, r, n) => {
                var a = v[(n + 40) >> 2],
                  o = {
                    tm_sec: g[n >> 2],
                    tm_min: g[(n + 4) >> 2],
                    tm_hour: g[(n + 8) >> 2],
                    tm_mday: g[(n + 12) >> 2],
                    tm_mon: g[(n + 16) >> 2],
                    tm_year: g[(n + 20) >> 2],
                    tm_wday: g[(n + 24) >> 2],
                    tm_yday: g[(n + 28) >> 2],
                    tm_isdst: g[(n + 32) >> 2],
                    tm_gmtoff: g[(n + 36) >> 2],
                    tm_zone: a ? x(a) : "",
                  },
                  i = x(r),
                  s = {
                    "%c": "%a %b %d %H:%M:%S %Y",
                    "%D": "%m/%d/%y",
                    "%F": "%Y-%m-%d",
                    "%h": "%b",
                    "%r": "%I:%M:%S %p",
                    "%R": "%H:%M",
                    "%T": "%H:%M:%S",
                    "%x": "%m/%d/%y",
                    "%X": "%H:%M:%S",
                    "%Ec": "%c",
                    "%EC": "%C",
                    "%Ex": "%m/%d/%y",
                    "%EX": "%H:%M:%S",
                    "%Ey": "%y",
                    "%EY": "%Y",
                    "%Od": "%d",
                    "%Oe": "%e",
                    "%OH": "%H",
                    "%OI": "%I",
                    "%Om": "%m",
                    "%OM": "%M",
                    "%OS": "%S",
                    "%Ou": "%u",
                    "%OU": "%U",
                    "%OV": "%V",
                    "%Ow": "%w",
                    "%OW": "%W",
                    "%Oy": "%y",
                  };
                for (var u in s) i = i.replace(new RegExp(u, "g"), s[u]);
                var l = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  c = [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ];
                function d(t, e, r) {
                  for (
                    var n = "number" == typeof t ? t.toString() : t || "";
                    n.length < e;

                  )
                    n = r[0] + n;
                  return n;
                }
                function h(t, e) {
                  return d(t, e, "0");
                }
                function p(t, e) {
                  function r(t) {
                    return t < 0 ? -1 : t > 0 ? 1 : 0;
                  }
                  var n;
                  return (
                    0 === (n = r(t.getFullYear() - e.getFullYear())) &&
                      0 === (n = r(t.getMonth() - e.getMonth())) &&
                      (n = r(t.getDate() - e.getDate())),
                    n
                  );
                }
                function f(t) {
                  switch (t.getDay()) {
                    case 0:
                      return new Date(t.getFullYear() - 1, 11, 29);
                    case 1:
                      return t;
                    case 2:
                      return new Date(t.getFullYear(), 0, 3);
                    case 3:
                      return new Date(t.getFullYear(), 0, 2);
                    case 4:
                      return new Date(t.getFullYear(), 0, 1);
                    case 5:
                      return new Date(t.getFullYear() - 1, 11, 31);
                    case 6:
                      return new Date(t.getFullYear() - 1, 11, 30);
                  }
                }
                function y(t) {
                  var e = ((t, e) => {
                      for (var r = new Date(t.getTime()); e > 0; ) {
                        var n = de(r.getFullYear()),
                          a = r.getMonth(),
                          o = (n ? he : me)[a];
                        if (!(e > o - r.getDate()))
                          return r.setDate(r.getDate() + e), r;
                        (e -= o - r.getDate() + 1),
                          r.setDate(1),
                          a < 11
                            ? r.setMonth(a + 1)
                            : (r.setMonth(0),
                              r.setFullYear(r.getFullYear() + 1));
                      }
                      return r;
                    })(new Date(t.tm_year + 1900, 0, 1), t.tm_yday),
                    r = new Date(e.getFullYear(), 0, 4),
                    n = new Date(e.getFullYear() + 1, 0, 4),
                    a = f(r),
                    o = f(n);
                  return p(a, e) <= 0
                    ? p(o, e) <= 0
                      ? e.getFullYear() + 1
                      : e.getFullYear()
                    : e.getFullYear() - 1;
                }
                var _ = {
                  "%a": (t) => l[t.tm_wday].substring(0, 3),
                  "%A": (t) => l[t.tm_wday],
                  "%b": (t) => c[t.tm_mon].substring(0, 3),
                  "%B": (t) => c[t.tm_mon],
                  "%C": (t) => h(((t.tm_year + 1900) / 100) | 0, 2),
                  "%d": (t) => h(t.tm_mday, 2),
                  "%e": (t) => d(t.tm_mday, 2, " "),
                  "%g": (t) => y(t).toString().substring(2),
                  "%G": y,
                  "%H": (t) => h(t.tm_hour, 2),
                  "%I": (t) => {
                    var e = t.tm_hour;
                    return 0 == e ? (e = 12) : e > 12 && (e -= 12), h(e, 2);
                  },
                  "%j": (t) =>
                    h(
                      t.tm_mday +
                        ((t, e) => {
                          for (var r = 0, n = 0; n <= e; r += t[n++]);
                          return r;
                        })(de(t.tm_year + 1900) ? he : me, t.tm_mon - 1),
                      3
                    ),
                  "%m": (t) => h(t.tm_mon + 1, 2),
                  "%M": (t) => h(t.tm_min, 2),
                  "%n": () => "\n",
                  "%p": (t) => (t.tm_hour >= 0 && t.tm_hour < 12 ? "AM" : "PM"),
                  "%S": (t) => h(t.tm_sec, 2),
                  "%t": () => "\t",
                  "%u": (t) => t.tm_wday || 7,
                  "%U": (t) => {
                    var e = t.tm_yday + 7 - t.tm_wday;
                    return h(Math.floor(e / 7), 2);
                  },
                  "%V": (t) => {
                    var e = Math.floor(
                      (t.tm_yday + 7 - ((t.tm_wday + 6) % 7)) / 7
                    );
                    if (
                      ((t.tm_wday + 371 - t.tm_yday - 2) % 7 <= 2 && e++, e)
                    ) {
                      if (53 == e) {
                        var r = (t.tm_wday + 371 - t.tm_yday) % 7;
                        4 != r && (3 != r || !de(t.tm_year)) && (e = 1);
                      }
                    } else {
                      e = 52;
                      var n = (t.tm_wday + 7 - t.tm_yday - 1) % 7;
                      (4 == n || (5 == n && de((t.tm_year % 400) - 1))) && e++;
                    }
                    return h(e, 2);
                  },
                  "%w": (t) => t.tm_wday,
                  "%W": (t) => {
                    var e = t.tm_yday + 7 - ((t.tm_wday + 6) % 7);
                    return h(Math.floor(e / 7), 2);
                  },
                  "%y": (t) => (t.tm_year + 1900).toString().substring(2),
                  "%Y": (t) => t.tm_year + 1900,
                  "%z": (t) => {
                    var e = t.tm_gmtoff;
                    return (
                      (e >= 0 ? "+" : "-") +
                      (
                        "0000" +
                        (e = ((e = Math.abs(e) / 60) / 60) * 100 + (e % 60))
                      ).slice(-4)
                    );
                  },
                  "%Z": (t) => t.tm_zone,
                  "%%": () => "%",
                };
                for (var u in ((i = i.replace(/%%/g, "\0\0")), _))
                  i.includes(u) && (i = i.replace(new RegExp(u, "g"), _[u](o)));
                var w = (function (t, e, r) {
                  var n = V(t) + 1,
                    a = new Array(n);
                  return z(t, a, 0, a.length), a;
                })((i = i.replace(/\0\0/g, "%")));
                return w.length > e
                  ? 0
                  : (((t, e) => {
                      m.set(t, e);
                    })(w, t),
                    w.length - 1);
              })(t, e, r, n),
          },
          fe = (function () {
            var t = { a: pe };
            function e(t, e) {
              return (
                (fe = t.exports),
                (h = fe.la),
                $(),
                (At = fe.pa),
                (function (t) {
                  F.unshift(t);
                })(fe.ma),
                (function (t) {
                  if ((P--, a.monitorRunDependencies?.(P), 0 == P && T)) {
                    var e = T;
                    (T = null), e();
                  }
                })(),
                fe
              );
            }
            if ((P++, a.monitorRunDependencies?.(P), a.instantiateWasm))
              try {
                return a.instantiateWasm(t, e);
              } catch (t) {
                d(`Module.instantiateWasm callback failed with error: ${t}`),
                  n(t);
              }
            return (
              (function (t, e, r, n) {
                return t ||
                  "function" != typeof WebAssembly.instantiateStreaming ||
                  E(e) ||
                  "function" != typeof fetch
                  ? j(e, r, n)
                  : fetch(e, { credentials: "same-origin" }).then((t) =>
                      WebAssembly.instantiateStreaming(t, r).then(
                        n,
                        function (t) {
                          return (
                            d(`wasm streaming compile failed: ${t}`),
                            d("falling back to ArrayBuffer instantiation"),
                            j(e, r, n)
                          );
                        }
                      )
                    );
              })(l, M, t, function (t) {
                e(t.instance);
              }).catch(n),
              {}
            );
          })(),
          ye = (t) => (ye = fe.na)(t),
          ge = (t) => (ge = fe.oa)(t),
          ve = (t) => (ve = fe.qa)(t),
          _e = (t, e) => (_e = fe.ra)(t, e),
          we = (t) => (we = fe.sa)(t),
          Ce = (t) => (Ce = fe.ta)(t),
          $e = () => ($e = fe.ua)(),
          be = (t, e, r) => (be = fe.va)(t, e, r),
          Fe = (t) => (Fe = fe.wa)(t);
        (a.dynCall_iijj = (t, e, r, n, o, i) =>
          (a.dynCall_iijj = fe.xa)(t, e, r, n, o, i)),
          (a.dynCall_vijj = (t, e, r, n, o, i) =>
            (a.dynCall_vijj = fe.ya)(t, e, r, n, o, i)),
          (a.dynCall_jiii = (t, e, r, n) =>
            (a.dynCall_jiii = fe.za)(t, e, r, n)),
          (a.dynCall_jii = (t, e, r) => (a.dynCall_jii = fe.Aa)(t, e, r));
        var Le,
          Pe = (a.dynCall_viiij = (t, e, r, n, o, i) =>
            (Pe = a.dynCall_viiij = fe.Ba)(t, e, r, n, o, i));
        function Te() {
          function t() {
            Le ||
              ((Le = !0),
              (a.calledRun = !0),
              !C &&
                (D(F),
                r(a),
                a.onRuntimeInitialized && a.onRuntimeInitialized(),
                (function () {
                  if (a.postRun)
                    for (
                      "function" == typeof a.postRun &&
                      (a.postRun = [a.postRun]);
                      a.postRun.length;

                    )
                      (t = a.postRun.shift()), L.unshift(t);
                  var t;
                  D(L);
                })()));
          }
          P > 0 ||
            ((function () {
              if (a.preRun)
                for (
                  "function" == typeof a.preRun && (a.preRun = [a.preRun]);
                  a.preRun.length;

                )
                  (t = a.preRun.shift()), b.unshift(t);
              var t;
              D(b);
            })(),
            P > 0) ||
            (a.setStatus
              ? (a.setStatus("Running..."),
                setTimeout(function () {
                  setTimeout(function () {
                    a.setStatus("");
                  }, 1),
                    t();
                }, 1))
              : t());
        }
        if (
          ((a.dynCall_jiji = (t, e, r, n, o) =>
            (a.dynCall_jiji = fe.Ca)(t, e, r, n, o)),
          (a.dynCall_viijii = (t, e, r, n, o, i, s) =>
            (a.dynCall_viijii = fe.Da)(t, e, r, n, o, i, s)),
          (a.dynCall_iiiiij = (t, e, r, n, o, i, s) =>
            (a.dynCall_iiiiij = fe.Ea)(t, e, r, n, o, i, s)),
          (a.dynCall_iiiiijj = (t, e, r, n, o, i, s, u, l) =>
            (a.dynCall_iiiiijj = fe.Fa)(t, e, r, n, o, i, s, u, l)),
          (a.dynCall_iiiiiijj = (t, e, r, n, o, i, s, u, l, c) =>
            (a.dynCall_iiiiiijj = fe.Ga)(t, e, r, n, o, i, s, u, l, c)),
          (T = function t() {
            Le || Te(), Le || (T = t);
          }),
          a.preInit)
        )
          for (
            "function" == typeof a.preInit && (a.preInit = [a.preInit]);
            a.preInit.length > 0;

          )
            a.preInit.pop()();
        return Te(), o;
      }),
    c = class {
      constructor() {
        throw new Error(
          "RendererLoader is a static class and cannot be instantiated."
        );
      }
      static async _tryLoad(t) {
        return await l({ locateFile: () => t });
      }
      static async _loadWithBackup() {
        return (
          this._ModulePromise ||
            (this._ModulePromise = this._tryLoad(this._wasmURL).catch(
              async (t) => {
                let e = `https://unpkg.com/${s}@${u}/dist/dotlottie-player.wasm`;
                console.warn(
                  `Primary WASM load failed from ${this._wasmURL}. Error: ${t.message}`
                ),
                  console.warn(`Attempting to load WASM from backup URL: ${e}`);
                try {
                  return await this._tryLoad(e);
                } catch (e) {
                  throw (
                    (console.error(`Primary WASM URL failed: ${t.message}`),
                    console.error(`Backup WASM URL failed: ${e.message}`),
                    new Error("WASM loading failed from all sources."))
                  );
                }
              }
            )),
          this._ModulePromise
        );
      }
      static async load() {
        return this._loadWithBackup();
      }
      static setWasmUrl(t) {
        (this._wasmURL = t), (this._ModulePromise = null);
      }
    };
  r(c, "_ModulePromise", null),
    r(
      c,
      "_wasmURL",
      `https://cdn.jsdelivr.net/npm/${s}@${u}/dist/dotlottie-player.wasm`
    );
  var d = class {
      constructor() {
        r(this, "_eventListeners", new Map());
      }
      addEventListener(t, e) {
        let r = this._eventListeners.get(t);
        r || ((r = new Set()), this._eventListeners.set(t, r)), r.add(e);
      }
      removeEventListener(t, e) {
        let r = this._eventListeners.get(t);
        r &&
          (e
            ? (r.delete(e), 0 === r.size && this._eventListeners.delete(t))
            : this._eventListeners.delete(t));
      }
      dispatch(t) {
        this._eventListeners.get(t.type)?.forEach((e) => e(t));
      }
      removeAllEventListeners() {
        this._eventListeners.clear();
      }
    },
    h = (t, e) =>
      "reverse" === t
        ? e.Mode.Reverse
        : "bounce" === t
          ? e.Mode.Bounce
          : "reverse-bounce" === t
            ? e.Mode.ReverseBounce
            : e.Mode.Forward,
    m = (t, e) =>
      "contain" === t
        ? e.Fit.Contain
        : "cover" === t
          ? e.Fit.Cover
          : "fill" === t
            ? e.Fit.Fill
            : "fit-height" === t
              ? e.Fit.FitHeight
              : "fit-width" === t
                ? e.Fit.FitWidth
                : e.Fit.None,
    p = (t, e) => {
      let r = new e.VectorFloat();
      return r.push_back(t[0]), r.push_back(t[1]), r;
    },
    f = (t, e) => {
      let r = new e.VectorFloat();
      return 2 !== t.length || (r.push_back(t[0]), r.push_back(t[1])), r;
    },
    y = class {
      constructor(t) {
        r(this, "_canvas"),
          r(this, "_context"),
          r(this, "_eventManager"),
          r(this, "_animationFrameId", null),
          r(this, "_frameManager"),
          r(this, "_dotLottieCore", null),
          r(this, "_wasmModule", null),
          r(this, "_renderConfig", {}),
          r(this, "_isFrozen", !1),
          r(this, "_backgroundColor", null),
          (this._canvas = t.canvas),
          (this._context = this._canvas.getContext("2d")),
          (this._eventManager = new d()),
          (this._frameManager = new o()),
          (this._renderConfig = t.renderConfig ?? {}),
          c
            .load()
            .then((e) => {
              (this._wasmModule = e),
                (this._dotLottieCore = new e.DotLottiePlayer({
                  autoplay: t.autoplay ?? !1,
                  backgroundColor: 0,
                  loopAnimation: t.loop ?? !1,
                  mode: h(t.mode ?? "forward", e),
                  segment: f(t.segment ?? [], e),
                  speed: t.speed ?? 1,
                  useFrameInterpolation: t.useFrameInterpolation ?? !0,
                  marker: t.marker ?? "",
                  layout: t.layout
                    ? { align: p(t.layout.align, e), fit: m(t.layout.fit, e) }
                    : e.createDefaultLayout(),
                })),
                t.data
                  ? this._loadFromData(t.data)
                  : t.src && this._loadFromSrc(t.src),
                t.backgroundColor && this.setBackgroundColor(t.backgroundColor);
            })
            .catch((t) => {
              this._eventManager.dispatch({
                type: "loadError",
                error: new Error(`Failed to load wasm module: ${t}`),
              });
            });
      }
      _loadFromSrc(t) {
        (async function () {
          let e = await fetch(t);
          if (!e.ok)
            throw new Error(
              `Failed to fetch the animation data from URL: ${t}. ${e.status}: ${e.statusText}`
            );
          let r,
            n = (e.headers.get("content-type") ?? "").trim();
          return (
            (r = ["application/json", "text/plain"].some((t) => n.startsWith(t))
              ? await e.text()
              : await e.arrayBuffer()),
            r
          );
        })()
          .then((t) => {
            this._loadFromData(t);
          })
          .catch((e) => {
            this._eventManager.dispatch({
              type: "loadError",
              error: new Error(
                `Failed to load animation data from URL: ${t}. ${e}`
              ),
            });
          });
      }
      _loadFromData(t) {
        if (null === this._dotLottieCore) return;
        let e = this._canvas.width,
          r = this._canvas.height,
          n = !1;
        if ("string" == typeof t)
          n = this._dotLottieCore.loadAnimationData(t, e, r);
        else if (t instanceof ArrayBuffer)
          n = this._dotLottieCore.loadDotLottieData(t, e, r);
        else {
          if ("object" != typeof t)
            return void this._eventManager.dispatch({
              type: "loadError",
              error: new Error(
                "Unsupported data type for animation data. Expected a string or ArrayBuffer."
              ),
            });
          n = this._dotLottieCore.loadAnimationData(JSON.stringify(t), e, r);
        }
        n
          ? (this._eventManager.dispatch({ type: "load" }),
            i && this.resize(),
            this._eventManager.dispatch({
              type: "frame",
              currentFrame: this._dotLottieCore.currentFrame(),
            }),
            this._render(),
            this._dotLottieCore.config().autoplay &&
              (this._dotLottieCore.play(),
              this._dotLottieCore.isPlaying()
                ? (this._eventManager.dispatch({ type: "play" }),
                  (this._animationFrameId =
                    this._frameManager.requestAnimationFrame(
                      this._draw.bind(this)
                    )))
                : console.error(
                    "something went wrong, the animation was suppose to autoplay"
                  )))
          : this._eventManager.dispatch({
              type: "loadError",
              error: new Error("Failed to load animation data"),
            });
      }
      get activeAnimationId() {
        return this._dotLottieCore?.activeAnimationId();
      }
      get activeThemeId() {
        return this._dotLottieCore?.activeThemeId();
      }
      get layout() {
        let t = this._dotLottieCore?.config().layout;
        if (t)
          return {
            align: [t.align.get(0), t.align.get(1)],
            fit: (() => {
              switch (t.fit) {
                case this._wasmModule?.Fit.Contain:
                  return "contain";
                case this._wasmModule?.Fit.Cover:
                  return "cover";
                case this._wasmModule?.Fit.Fill:
                  return "fill";
                case this._wasmModule?.Fit.FitHeight:
                  return "fit-height";
                case this._wasmModule?.Fit.FitWidth:
                  return "fit-width";
                case this._wasmModule?.Fit.None:
                  return "none";
                default:
                  return "contain";
              }
            })(),
          };
      }
      get marker() {
        return this._dotLottieCore?.config().marker;
      }
      get manifest() {
        try {
          let t = this._dotLottieCore?.manifestString();
          if (null === this._dotLottieCore || !t) return null;
          let e = JSON.parse(t);
          return 0 === Object.keys(e).length ? null : e;
        } catch {
          return null;
        }
      }
      get renderConfig() {
        return this._renderConfig;
      }
      get segment() {
        let t = this._dotLottieCore?.config().segment;
        if (t && 2 === t.size()) return [t.get(0), t.get(1)];
      }
      get loop() {
        return this._dotLottieCore?.config().loopAnimation ?? !1;
      }
      get mode() {
        let t = this._dotLottieCore?.config().mode;
        return t === this._wasmModule?.Mode.Reverse
          ? "reverse"
          : t === this._wasmModule?.Mode.Bounce
            ? "bounce"
            : t === this._wasmModule?.Mode.ReverseBounce
              ? "reverse-bounce"
              : "forward";
      }
      get isFrozen() {
        return this._isFrozen;
      }
      get backgroundColor() {
        return this._backgroundColor ?? "";
      }
      get autoplay() {
        return this._dotLottieCore?.config().autoplay ?? !1;
      }
      get useFrameInterpolation() {
        return this._dotLottieCore?.config().useFrameInterpolation ?? !1;
      }
      get speed() {
        return this._dotLottieCore?.config().speed ?? 0;
      }
      get isLoaded() {
        return this._dotLottieCore?.isLoaded() ?? !1;
      }
      get isPlaying() {
        return this._dotLottieCore?.isPlaying() ?? !1;
      }
      get isPaused() {
        return this._dotLottieCore?.isPaused() ?? !1;
      }
      get isStopped() {
        return this._dotLottieCore?.isStopped() ?? !1;
      }
      get currentFrame() {
        return this._dotLottieCore?.currentFrame() ?? 0;
      }
      get loopCount() {
        return this._dotLottieCore?.loopCount() ?? 0;
      }
      get totalFrames() {
        return this._dotLottieCore?.totalFrames() ?? 0;
      }
      get duration() {
        return this._dotLottieCore?.duration() ?? 0;
      }
      get segmentDuration() {
        return this._dotLottieCore?.segmentDuration() ?? 0;
      }
      get canvas() {
        return this._canvas;
      }
      load(t) {
        null === this._dotLottieCore ||
          null === this._wasmModule ||
          (this._dotLottieCore.setConfig({
            autoplay: t.autoplay ?? !1,
            backgroundColor: 0,
            loopAnimation: t.loop ?? !1,
            mode: h(t.mode ?? "forward", this._wasmModule),
            segment: f(t.segment ?? [], this._wasmModule),
            speed: t.speed ?? 1,
            useFrameInterpolation: t.useFrameInterpolation ?? !0,
            marker: t.marker ?? "",
            layout: t.layout
              ? {
                  align: p(t.layout.align, this._wasmModule),
                  fit: m(t.layout.fit, this._wasmModule),
                }
              : this._wasmModule.createDefaultLayout(),
          }),
          t.data
            ? this._loadFromData(t.data)
            : t.src && this._loadFromSrc(t.src),
          this.setBackgroundColor(t.backgroundColor ?? ""));
      }
      _render() {
        if (null === this._dotLottieCore || null === this._context) return !1;
        if (this._dotLottieCore.render()) {
          let t = this._dotLottieCore.buffer(),
            e = new Uint8ClampedArray(
              t,
              0,
              this._canvas.width * this._canvas.height * 4
            ),
            r = null;
          return (
            typeof ImageData > "u"
              ? ((r = this._context.createImageData(
                  this._canvas.width,
                  this._canvas.height
                )),
                r.data.set(e))
              : (r = new ImageData(e, this._canvas.width, this._canvas.height)),
            this._context.putImageData(r, 0, 0),
            this._eventManager.dispatch({
              type: "render",
              currentFrame: this._dotLottieCore.currentFrame(),
            }),
            !0
          );
        }
        return !1;
      }
      _draw() {
        if (
          null === this._dotLottieCore ||
          null === this._context ||
          !this._dotLottieCore.isPlaying()
        )
          return;
        let t = this._dotLottieCore.requestFrame();
        this._dotLottieCore.setFrame(t) &&
          (this._eventManager.dispatch({
            type: "frame",
            currentFrame: this._dotLottieCore.currentFrame(),
          }),
          this._render() &&
            this._dotLottieCore.isComplete() &&
            (this._dotLottieCore.config().loopAnimation
              ? this._eventManager.dispatch({
                  type: "loop",
                  loopCount: this._dotLottieCore.loopCount(),
                })
              : this._eventManager.dispatch({ type: "complete" }))),
          (this._animationFrameId = this._frameManager.requestAnimationFrame(
            this._draw.bind(this)
          ));
      }
      play() {
        if (null === this._dotLottieCore) return;
        let t = this._dotLottieCore.play();
        (this._isFrozen = !1),
          t &&
            (this._eventManager.dispatch({ type: "play" }),
            (this._animationFrameId = this._frameManager.requestAnimationFrame(
              this._draw.bind(this)
            )));
      }
      pause() {
        null !== this._dotLottieCore &&
          this._dotLottieCore.pause() &&
          this._eventManager.dispatch({ type: "pause" });
      }
      stop() {
        null !== this._dotLottieCore &&
          this._dotLottieCore.stop() &&
          (this._eventManager.dispatch({
            type: "frame",
            currentFrame: this._dotLottieCore.currentFrame(),
          }),
          this._render(),
          this._eventManager.dispatch({ type: "stop" }));
      }
      setFrame(t) {
        null === this._dotLottieCore ||
          t < 0 ||
          t > this._dotLottieCore.totalFrames() ||
          (this._dotLottieCore.seek(t) &&
            (this._eventManager.dispatch({
              type: "frame",
              currentFrame: this._dotLottieCore.currentFrame(),
            }),
            this._render()));
      }
      setSpeed(t) {
        null !== this._dotLottieCore &&
          this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            speed: t,
          });
      }
      setBackgroundColor(t) {
        null !== this._dotLottieCore &&
          (this._canvas instanceof HTMLCanvasElement &&
            (this._canvas.style.backgroundColor = t),
          (this._backgroundColor = t));
      }
      setLoop(t) {
        null !== this._dotLottieCore &&
          this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            loopAnimation: t,
          });
      }
      setUseFrameInterpolation(t) {
        null !== this._dotLottieCore &&
          this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            useFrameInterpolation: t,
          });
      }
      addEventListener(t, e) {
        this._eventManager.addEventListener(t, e);
      }
      removeEventListener(t, e) {
        this._eventManager.removeEventListener(t, e);
      }
      destroy() {
        this._dotLottieCore?.delete(),
          (this._dotLottieCore = null),
          (this._context = null),
          this._eventManager.dispatch({ type: "destroy" }),
          this._eventManager.removeAllEventListeners();
      }
      freeze() {
        null !== this._animationFrameId &&
          (this._frameManager.cancelAnimationFrame(this._animationFrameId),
          (this._animationFrameId = null),
          (this._isFrozen = !0),
          this._eventManager.dispatch({ type: "freeze" }));
      }
      unfreeze() {
        null === this._animationFrameId &&
          ((this._animationFrameId = this._frameManager.requestAnimationFrame(
            this._draw.bind(this)
          )),
          (this._isFrozen = !1),
          this._eventManager.dispatch({ type: "unfreeze" }));
      }
      resize() {
        if (i && this._canvas instanceof HTMLCanvasElement) {
          let t =
              this._renderConfig.devicePixelRatio ||
              window.devicePixelRatio ||
              1,
            { height: e, width: r } = this._canvas.getBoundingClientRect();
          (this._canvas.width = r * t), (this._canvas.height = e * t);
        }
        this._dotLottieCore?.resize(this._canvas.width, this._canvas.height) &&
          this._render();
      }
      setSegment(t, e) {
        null === this._dotLottieCore ||
          null === this._wasmModule ||
          this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            segment: f([t, e], this._wasmModule),
          });
      }
      setMode(t) {
        null === this._dotLottieCore ||
          null === this._wasmModule ||
          this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            mode: h(t, this._wasmModule),
          });
      }
      setRenderConfig(t) {
        this._renderConfig = t;
      }
      loadAnimation(t) {
        null !== this._dotLottieCore &&
          (this._dotLottieCore.loadAnimation(
            t,
            this._canvas.width,
            this._canvas.height
          )
            ? (this._eventManager.dispatch({ type: "load" }), this.resize())
            : this._eventManager.dispatch({
                type: "loadError",
                error: new Error(`Failed to animation :${t}`),
              }));
      }
      setMarker(t) {
        null !== this._dotLottieCore &&
          this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            marker: t,
          });
      }
      markers() {
        let t = this._dotLottieCore?.markers();
        if (t) {
          let e = [];
          for (let r = 0; r < t.size(); r += 1) {
            let n = t.get(r);
            e.push({ name: n.name, time: n.time, duration: n.duration });
          }
          return e;
        }
        return [];
      }
      loadTheme(t) {
        if (null === this._dotLottieCore) return !1;
        let e = this._dotLottieCore.loadTheme(t);
        return this._render(), e;
      }
      loadThemeData(t) {
        if (null === this._dotLottieCore) return !1;
        let e = this._dotLottieCore.loadThemeData(t);
        return this._render(), e;
      }
      setLayout(t) {
        null === this._dotLottieCore ||
          null === this._wasmModule ||
          this._dotLottieCore.setConfig({
            ...this._dotLottieCore.config(),
            layout: {
              align: p(t.align, this._wasmModule),
              fit: m(t.fit, this._wasmModule),
            },
          });
      }
      setViewport(t, e, r, n) {
        return (
          null !== this._dotLottieCore &&
          this._dotLottieCore.setViewport(t, e, r, n)
        );
      }
      static setWasmUrl(t) {
        c.setWasmUrl(t);
      }
    };
  new y({
    autoplay: !0,
    loop: !0,
    canvas: document.querySelector(".hero__scrat"),
    src: "/animations/1.json",
  }),
    new y({
      autoplay: !0,
      loop: !0,
      canvas: document.querySelector(".story__illustration canvas"),
      src: "/animations/2.json",
      renderConfig: { devicePixelRatio: 2 },
    }),
    new y({
      autoplay: !0,
      loop: !0,
      canvas: document.querySelector(".buy__anim"),
      src: "/animations/3.json",
      renderConfig: { devicePixelRatio: 2 },
    }),
    new y({
      autoplay: !0,
      loop: !0,
      canvas: document.querySelector(".community__illustration"),
      src: "/animations/4.json",
    }),
    new y({
      autoplay: !0,
      loop: !0,
      canvas: document.querySelector(".bottom-illustration canvas"),
      src: "/animations/5.json",
    }),
    document.querySelectorAll('a[href^="#"]').forEach((t) => {
      try {
        const e = new URL(t.href).hash;
        if (!e) return;
        const r = document.querySelector(e);
        if (!r) return;
        t.addEventListener("click", (t) => {
          t.preventDefault(), t.stopPropagation();
          const { y: e } = r.getBoundingClientRect();
          window.scrollTo({ top: e, behavior: "smooth" });
        });
      } catch (t) {
        console.error(t);
      }
    }),
    document.querySelectorAll(".accordion").forEach((t) => {
      const e = t.querySelector(".accordion__header"),
        r = t.querySelector(".accordion__body").scrollHeight;
      t.style.setProperty("--body-height", r + "px"),
        e.addEventListener("click", (e) => {
          t.classList.toggle("accordion_open");
        });
    }),
    document.querySelectorAll(".contract").forEach((t) => {
      const e = t.querySelector(".contract__value")?.textContent.trim(),
        r = t.querySelector(".contract__btn");
      e &&
        r &&
        r.addEventListener("click", (t) => {
          t.preventDefault(), window.navigator.clipboard.writeText(e);
        });
    });
})();
