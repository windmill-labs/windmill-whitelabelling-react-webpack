var u3 = Object.defineProperty;
var l3 = (Sn, zt, Kr) => zt in Sn ? u3(Sn, zt, { enumerable: !0, configurable: !0, writable: !0, value: Kr }) : Sn[zt] = Kr;
var Je = (Sn, zt, Kr) => l3(Sn, typeof zt != "symbol" ? zt + "" : zt, Kr);
var Tp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ti(Sn) {
  throw new Error('Could not dynamically require "' + Sn + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
(() => {
  var Or, bi, Vn, $n, kr, op, up, lp, vn, $t, Un, cp, dr, Rr, Mr, At, jn, fr, Br, ln, Kn, _n, Pr, hr, Se, ct, Vr;
  var Sn = Object.create, zt = Object.defineProperty, Kr = Object.getOwnPropertyDescriptor, Mp = Object.getOwnPropertyNames, Bp = Object.getPrototypeOf, Pp = Object.prototype.hasOwnProperty;
  ((e) => typeof Ti < "u" ? Ti : typeof Proxy < "u" ? new Proxy(e, { get: (t, n) => (typeof Ti < "u" ? Ti : t)[n] }) : e)(function(e) {
    if (typeof Ti < "u") return Ti.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  });
  var Vp = (e, t) => () => (e && (t = e(e = 0)), t), Hn = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), $p = (e, t) => {
    for (var n in t) zt(e, n, { get: t[n], enumerable: !0 });
  }, Up = (e, t, n, r) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let i of Mp(t))
        !Pp.call(e, i) && i !== n && zt(e, i, { get: () => t[i], enumerable: !(r = Kr(t, i)) || r.enumerable });
    return e;
  }, Va = (e, t, n) => (n = e != null ? Sn(Bp(e)) : {}, Up(!e || !e.__esModule ? zt(n, "default", { value: e, enumerable: !0 }) : n, e)), jp = Hn((e, t) => {
    function n(r, i) {
      if (r != null) return r;
      var s = new Error(i !== void 0 ? i : "Got unexpected " + r);
      throw s.framesToPop = 1, s;
    }
    t.exports = n, t.exports.default = n, Object.defineProperty(t.exports, "__esModule", { value: !0 });
  }), ds = Hn((e, t) => {
    var n = "\\\\/", r = `[^${n}]`, i = "\\.", s = "\\+", a = "\\?", o = "\\/", u = "(?=.)", l = "[^/]", c = `(?:${o}|$)`, f = `(?:^|${o})`, p = `${i}{1,2}${c}`, m = `(?!${i})`, g = `(?!${f}${p})`, y = `(?!${i}{0,1}${c})`, S = `(?!${p})`, C = `[^.${o}]`, w = `${l}*?`, A = "/", T = {
      DOT_LITERAL: i,
      PLUS_LITERAL: s,
      QMARK_LITERAL: a,
      SLASH_LITERAL: o,
      ONE_CHAR: u,
      QMARK: l,
      END_ANCHOR: c,
      DOTS_SLASH: p,
      NO_DOT: m,
      NO_DOTS: g,
      NO_DOT_SLASH: y,
      NO_DOTS_SLASH: S,
      QMARK_NO_DOT: C,
      STAR: w,
      START_ANCHOR: f,
      SEP: A
    }, I = {
      ...T,
      SLASH_LITERAL: `[${n}]`,
      QMARK: r,
      STAR: `${r}*?`,
      DOTS_SLASH: `${i}{1,2}(?:[${n}]|$)`,
      NO_DOT: `(?!${i})`,
      NO_DOTS: `(?!(?:^|[${n}])${i}{1,2}(?:[${n}]|$))`,
      NO_DOT_SLASH: `(?!${i}{0,1}(?:[${n}]|$))`,
      NO_DOTS_SLASH: `(?!${i}{1,2}(?:[${n}]|$))`,
      QMARK_NO_DOT: `[^.${n}]`,
      START_ANCHOR: `(?:^|[${n}])`,
      END_ANCHOR: `(?:[${n}]|$)`,
      SEP: "\\"
    }, O = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    t.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE: O,
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" },
      CHAR_0: 48,
      CHAR_9: 57,
      CHAR_UPPERCASE_A: 65,
      CHAR_LOWERCASE_A: 97,
      CHAR_UPPERCASE_Z: 90,
      CHAR_LOWERCASE_Z: 122,
      CHAR_LEFT_PARENTHESES: 40,
      CHAR_RIGHT_PARENTHESES: 41,
      CHAR_ASTERISK: 42,
      CHAR_AMPERSAND: 38,
      CHAR_AT: 64,
      CHAR_BACKWARD_SLASH: 92,
      CHAR_CARRIAGE_RETURN: 13,
      CHAR_CIRCUMFLEX_ACCENT: 94,
      CHAR_COLON: 58,
      CHAR_COMMA: 44,
      CHAR_DOT: 46,
      CHAR_DOUBLE_QUOTE: 34,
      CHAR_EQUAL: 61,
      CHAR_EXCLAMATION_MARK: 33,
      CHAR_FORM_FEED: 12,
      CHAR_FORWARD_SLASH: 47,
      CHAR_GRAVE_ACCENT: 96,
      CHAR_HASH: 35,
      CHAR_HYPHEN_MINUS: 45,
      CHAR_LEFT_ANGLE_BRACKET: 60,
      CHAR_LEFT_CURLY_BRACE: 123,
      CHAR_LEFT_SQUARE_BRACKET: 91,
      CHAR_LINE_FEED: 10,
      CHAR_NO_BREAK_SPACE: 160,
      CHAR_PERCENT: 37,
      CHAR_PLUS: 43,
      CHAR_QUESTION_MARK: 63,
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      CHAR_RIGHT_CURLY_BRACE: 125,
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      CHAR_SEMICOLON: 59,
      CHAR_SINGLE_QUOTE: 39,
      CHAR_SPACE: 32,
      CHAR_TAB: 9,
      CHAR_UNDERSCORE: 95,
      CHAR_VERTICAL_LINE: 124,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      extglobChars(k) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${k.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      globChars(k) {
        return k === !0 ? I : T;
      }
    };
  }), $a = Hn((e) => {
    var {
      REGEX_BACKSLASH: t,
      REGEX_REMOVE_BACKSLASH: n,
      REGEX_SPECIAL_CHARS: r,
      REGEX_SPECIAL_CHARS_GLOBAL: i
    } = ds();
    e.isObject = (s) => s !== null && typeof s == "object" && !Array.isArray(s), e.hasRegexChars = (s) => r.test(s), e.isRegexChar = (s) => s.length === 1 && e.hasRegexChars(s), e.escapeRegex = (s) => s.replace(i, "\\$1"), e.toPosixSlashes = (s) => s.replace(t, "/"), e.removeBackslashes = (s) => s.replace(n, (a) => a === "\\" ? "" : a), e.supportsLookbehinds = () => {
      let s = process.version.slice(1).split(".").map(Number);
      return s.length === 3 && s[0] >= 9 || s[0] === 8 && s[1] >= 10;
    }, e.escapeLast = (s, a, o) => {
      let u = s.lastIndexOf(a, o);
      return u === -1 ? s : s[u - 1] === "\\" ? e.escapeLast(s, a, u - 1) : `${s.slice(0, u)}\\${s.slice(u)}`;
    }, e.removePrefix = (s, a = {}) => {
      let o = s;
      return o.startsWith("./") && (o = o.slice(2), a.prefix = "./"), o;
    }, e.wrapOutput = (s, a = {}, o = {}) => {
      let u = o.contains ? "" : "^", l = o.contains ? "" : "$", c = `${u}(?:${s})${l}`;
      return a.negated === !0 && (c = `(?:^(?!${c}).*$)`), c;
    }, e.basename = (s, { windows: a } = {}) => a ? s.replace(/[\\/]$/, "").replace(/.*[\\/]/, "") : s.replace(/\/$/, "").replace(/.*\//, "");
  }), Kp = Hn((e, t) => {
    var n = $a(), {
      CHAR_ASTERISK: r,
      CHAR_AT: i,
      CHAR_BACKWARD_SLASH: s,
      CHAR_COMMA: a,
      CHAR_DOT: o,
      CHAR_EXCLAMATION_MARK: u,
      CHAR_FORWARD_SLASH: l,
      CHAR_LEFT_CURLY_BRACE: c,
      CHAR_LEFT_PARENTHESES: f,
      CHAR_LEFT_SQUARE_BRACKET: p,
      CHAR_PLUS: m,
      CHAR_QUESTION_MARK: g,
      CHAR_RIGHT_CURLY_BRACE: y,
      CHAR_RIGHT_PARENTHESES: S,
      CHAR_RIGHT_SQUARE_BRACKET: C
    } = ds(), w = (I) => I === l || I === s, A = (I) => {
      I.isPrefix !== !0 && (I.depth = I.isGlobstar ? 1 / 0 : 1);
    }, T = (I, O) => {
      let k = O || {}, X = I.length - 1, F = k.parts === !0 || k.scanToEnd === !0, j = [], P = [], fe = [], U = I, M = -1, K = 0, Y = 0, Z = !1, se = !1, re = !1, De = !1, Ee = !1, _ = !1, W = !1, G = !1, Q = !1, L = 0, R, ne, ue = { value: "", depth: 0, isGlob: !1 }, Pe = () => M >= X, dt = () => U.charCodeAt(M + 1), ye = () => (R = ne, U.charCodeAt(++M));
      for (; M < X; ) {
        ne = ye();
        let le;
        if (ne === s) {
          W = ue.backslashes = !0, ne = ye(), ne === c && (_ = !0);
          continue;
        }
        if (_ === !0 || ne === c) {
          for (L++; Pe() !== !0 && (ne = ye()); ) {
            if (ne === s) {
              W = ue.backslashes = !0, ye();
              continue;
            }
            if (ne === c) {
              L++;
              continue;
            }
            if (_ !== !0 && ne === o && (ne = ye()) === o) {
              if (Z = ue.isBrace = !0, re = ue.isGlob = !0, Q = !0, F === !0) continue;
              break;
            }
            if (_ !== !0 && ne === a) {
              if (Z = ue.isBrace = !0, re = ue.isGlob = !0, Q = !0, F === !0) continue;
              break;
            }
            if (ne === y && (L--, L === 0)) {
              _ = !1, Z = ue.isBrace = !0, Q = !0;
              break;
            }
          }
          if (F === !0) continue;
          break;
        }
        if (ne === l) {
          if (j.push(M), P.push(ue), ue = { value: "", depth: 0, isGlob: !1 }, Q === !0)
            continue;
          if (R === o && M === K + 1) {
            K += 2;
            continue;
          }
          Y = M + 1;
          continue;
        }
        if (k.noext !== !0 && (ne === m || ne === i || ne === r || ne === g || ne === u) && dt() === f) {
          if (re = ue.isGlob = !0, De = ue.isExtglob = !0, Q = !0, F === !0) {
            for (; Pe() !== !0 && (ne = ye()); ) {
              if (ne === s) {
                W = ue.backslashes = !0, ne = ye();
                continue;
              }
              if (ne === S) {
                re = ue.isGlob = !0, Q = !0;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (ne === r) {
          if (R === r && (Ee = ue.isGlobstar = !0), re = ue.isGlob = !0, Q = !0, F === !0)
            continue;
          break;
        }
        if (ne === g) {
          if (re = ue.isGlob = !0, Q = !0, F === !0) continue;
          break;
        }
        if (ne === p)
          for (; Pe() !== !0 && (le = ye()); ) {
            if (le === s) {
              W = ue.backslashes = !0, ye();
              continue;
            }
            if (le === C) {
              if (se = ue.isBracket = !0, re = ue.isGlob = !0, Q = !0, F === !0) continue;
              break;
            }
          }
        if (k.nonegate !== !0 && ne === u && M === K) {
          G = ue.negated = !0, K++;
          continue;
        }
        if (k.noparen !== !0 && ne === f) {
          if (re = ue.isGlob = !0, F === !0) {
            for (; Pe() !== !0 && (ne = ye()); ) {
              if (ne === f) {
                W = ue.backslashes = !0, ne = ye();
                continue;
              }
              if (ne === S) {
                Q = !0;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (re === !0) {
          if (Q = !0, F === !0) continue;
          break;
        }
      }
      k.noext === !0 && (De = !1, re = !1);
      let Ve = U, $r = "", Ut = "";
      K > 0 && ($r = U.slice(0, K), U = U.slice(K), Y -= K), Ve && re === !0 && Y > 0 ? (Ve = U.slice(0, Y), Ut = U.slice(Y)) : re === !0 ? (Ve = "", Ut = U) : Ve = U, Ve && Ve !== "" && Ve !== "/" && Ve !== U && w(Ve.charCodeAt(Ve.length - 1)) && (Ve = Ve.slice(0, -1)), k.unescape === !0 && (Ut && (Ut = n.removeBackslashes(Ut)), Ve && W === !0 && (Ve = n.removeBackslashes(Ve)));
      let Dt = {
        prefix: $r,
        input: I,
        start: K,
        base: Ve,
        glob: Ut,
        isBrace: Z,
        isBracket: se,
        isGlob: re,
        isExtglob: De,
        isGlobstar: Ee,
        negated: G
      };
      if (k.tokens === !0 && (Dt.maxDepth = 0, w(ne) || P.push(ue), Dt.tokens = P), k.parts === !0 || k.tokens === !0) {
        let le;
        for (let ze = 0; ze < j.length; ze++) {
          let Nn = le ? le + 1 : K, ee = j[ze], Fe = I.slice(Nn, ee);
          k.tokens && (ze === 0 && K !== 0 ? (P[ze].isPrefix = !0, P[ze].value = $r) : P[ze].value = Fe, A(P[ze]), Dt.maxDepth += P[ze].depth), (ze !== 0 || Fe !== "") && fe.push(Fe), le = ee;
        }
        if (le && le + 1 < I.length) {
          let ze = I.slice(le + 1);
          fe.push(ze), k.tokens && (P[P.length - 1].value = ze, A(P[P.length - 1]), Dt.maxDepth += P[P.length - 1].depth);
        }
        Dt.slashes = j, Dt.parts = fe;
      }
      return Dt;
    };
    t.exports = T;
  }), qp = Hn((e, t) => {
    var n = ds(), r = $a(), {
      MAX_LENGTH: i,
      POSIX_REGEX_SOURCE: s,
      REGEX_NON_SPECIAL_CHARS: a,
      REGEX_SPECIAL_CHARS_BACKREF: o,
      REPLACEMENTS: u
    } = n, l = (p, m) => {
      if (typeof m.expandRange == "function") return m.expandRange(...p, m);
      p.sort();
      let g = `[${p.join("-")}]`;
      try {
        new RegExp(g);
      } catch {
        return p.map((y) => r.escapeRegex(y)).join("..");
      }
      return g;
    }, c = (p, m) => `Missing ${p}: "${m}" - use "\\\\${m}" to match literal characters`, f = (p, m) => {
      if (typeof p != "string") throw new TypeError("Expected a string");
      p = u[p] || p;
      let g = { ...m }, y = typeof g.maxLength == "number" ? Math.min(i, g.maxLength) : i, S = p.length;
      if (S > y) throw new SyntaxError(`Input length: ${S}, exceeds maximum allowed length: ${y}`);
      let C = { type: "bos", value: "", output: g.prepend || "" }, w = [C], A = g.capture ? "" : "?:", T = n.globChars(g.windows), I = n.extglobChars(T), {
        DOT_LITERAL: O,
        PLUS_LITERAL: k,
        SLASH_LITERAL: X,
        ONE_CHAR: F,
        DOTS_SLASH: j,
        NO_DOT: P,
        NO_DOT_SLASH: fe,
        NO_DOTS_SLASH: U,
        QMARK: M,
        QMARK_NO_DOT: K,
        STAR: Y,
        START_ANCHOR: Z
      } = T, se = (ee) => `(${A}(?:(?!${Z}${ee.dot ? j : O}).)*?)`, re = g.dot ? "" : P, De = g.dot ? M : K, Ee = g.bash === !0 ? se(g) : Y;
      g.capture && (Ee = `(${Ee})`), typeof g.noext == "boolean" && (g.noextglob = g.noext);
      let _ = {
        input: p,
        index: -1,
        start: 0,
        dot: g.dot === !0,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: !1,
        negated: !1,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: !1,
        tokens: w
      };
      p = r.removePrefix(p, _), S = p.length;
      let W = [], G = [], Q = [], L = C, R, ne = () => _.index === S - 1, ue = _.peek = (ee = 1) => p[_.index + ee], Pe = _.advance = () => p[++_.index], dt = () => p.slice(_.index + 1), ye = (ee = "", Fe = 0) => {
        _.consumed += ee, _.index += Fe;
      }, Ve = (ee) => {
        _.output += ee.output != null ? ee.output : ee.value, ye(ee.value);
      }, $r = () => {
        let ee = 1;
        for (; ue() === "!" && (ue(2) !== "(" || ue(3) === "?"); ) Pe(), _.start++, ee++;
        return ee % 2 === 0 ? !1 : (_.negated = !0, _.start++, !0);
      }, Ut = (ee) => {
        _[ee]++, Q.push(ee);
      }, Dt = (ee) => {
        _[ee]--, Q.pop();
      }, le = (ee) => {
        if (L.type === "globstar") {
          let Fe = _.braces > 0 && (ee.type === "comma" || ee.type === "brace"), J = ee.extglob === !0 || W.length && (ee.type === "pipe" || ee.type === "paren");
          ee.type !== "slash" && ee.type !== "paren" && !Fe && !J && (_.output = _.output.slice(0, -L.output.length), L.type = "star", L.value = "*", L.output = Ee, _.output += L.output);
        }
        if (W.length && ee.type !== "paren" && !I[ee.value] && (W[W.length - 1].inner += ee.value), (ee.value || ee.output) && Ve(ee), L && L.type === "text" && ee.type === "text") {
          L.value += ee.value, L.output = (L.output || "") + ee.value;
          return;
        }
        ee.prev = L, w.push(ee), L = ee;
      }, ze = (ee, Fe) => {
        let J = { ...I[Fe], conditions: 1, inner: "" };
        J.prev = L, J.parens = _.parens, J.output = _.output;
        let be = (g.capture ? "(" : "") + J.open;
        Ut("parens"), le({ type: ee, value: Fe, output: _.output ? "" : F }), le({ type: "paren", extglob: !0, value: Pe(), output: be }), W.push(J);
      }, Nn = (ee) => {
        let Fe = ee.close + (g.capture ? ")" : "");
        if (ee.type === "negate") {
          let J = Ee;
          ee.inner && ee.inner.length > 1 && ee.inner.includes("/") && (J = se(g)), (J !== Ee || ne() || /^\)+$/.test(dt())) && (Fe = ee.close = `)$))${J}`), ee.prev.type === "bos" && ne() && (_.negatedExtglob = !0);
        }
        le({ type: "paren", extglob: !0, value: R, output: Fe }), Dt("parens");
      };
      if (g.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(p)) {
        let ee = !1, Fe = p.replace(
          o,
          (J, be, tt, Et, Ye, jt) => Et === "\\" ? (ee = !0, J) : Et === "?" ? be ? be + Et + (Ye ? M.repeat(Ye.length) : "") : jt === 0 ? De + (Ye ? M.repeat(Ye.length) : "") : M.repeat(tt.length) : Et === "." ? O.repeat(tt.length) : Et === "*" ? be ? be + Et + (Ye ? Ee : "") : Ee : be ? J : `\\${J}`
        );
        return ee === !0 && (g.unescape === !0 ? Fe = Fe.replace(/\\/g, "") : Fe = Fe.replace(/\\+/g, (J) => J.length % 2 === 0 ? "\\\\" : J ? "\\" : "")), Fe === p && g.contains === !0 ? (_.output = p, _) : (_.output = r.wrapOutput(Fe, _, m), _);
      }
      for (; !ne(); ) {
        if (R = Pe(), R === "\0") continue;
        if (R === "\\") {
          let J = ue();
          if (J === "/" && g.bash !== !0 || J === "." || J === ";") continue;
          if (!J) {
            R += "\\", le({ type: "text", value: R });
            continue;
          }
          let be = /^\\+/.exec(dt()), tt = 0;
          if (be && be[0].length > 2 && (tt = be[0].length, _.index += tt, tt % 2 !== 0 && (R += "\\")), g.unescape === !0 ? R = Pe() || "" : R += Pe() || "", _.brackets === 0) {
            le({ type: "text", value: R });
            continue;
          }
        }
        if (_.brackets > 0 && (R !== "]" || L.value === "[" || L.value === "[^")) {
          if (g.posix !== !1 && R === ":") {
            let J = L.value.slice(1);
            if (J.includes("[") && (L.posix = !0, J.includes(":"))) {
              let be = L.value.lastIndexOf("["), tt = L.value.slice(0, be), Et = L.value.slice(be + 2), Ye = s[Et];
              if (Ye) {
                L.value = tt + Ye, _.backtrack = !0, Pe(), !C.output && w.indexOf(L) === 1 && (C.output = F);
                continue;
              }
            }
          }
          (R === "[" && ue() !== ":" || R === "-" && ue() === "]") && (R = `\\${R}`), R === "]" && (L.value === "[" || L.value === "[^") && (R = `\\${R}`), g.posix === !0 && R === "!" && L.value === "[" && (R = "^"), L.value += R, Ve({ value: R });
          continue;
        }
        if (_.quotes === 1 && R !== '"') {
          R = r.escapeRegex(R), L.value += R, Ve({ value: R });
          continue;
        }
        if (R === '"') {
          _.quotes = _.quotes === 1 ? 0 : 1, g.keepQuotes === !0 && le({ type: "text", value: R });
          continue;
        }
        if (R === "(") {
          Ut("parens"), le({ type: "paren", value: R });
          continue;
        }
        if (R === ")") {
          if (_.parens === 0 && g.strictBrackets === !0) throw new SyntaxError(c("opening", "("));
          let J = W[W.length - 1];
          if (J && _.parens === J.parens + 1) {
            Nn(W.pop());
            continue;
          }
          le({ type: "paren", value: R, output: _.parens ? ")" : "\\)" }), Dt("parens");
          continue;
        }
        if (R === "[") {
          if (g.nobracket === !0 || !dt().includes("]")) {
            if (g.nobracket !== !0 && g.strictBrackets === !0)
              throw new SyntaxError(c("closing", "]"));
            R = `\\${R}`;
          } else Ut("brackets");
          le({ type: "bracket", value: R });
          continue;
        }
        if (R === "]") {
          if (g.nobracket === !0 || L && L.type === "bracket" && L.value.length === 1) {
            le({ type: "text", value: R, output: `\\${R}` });
            continue;
          }
          if (_.brackets === 0) {
            if (g.strictBrackets === !0) throw new SyntaxError(c("opening", "["));
            le({ type: "text", value: R, output: `\\${R}` });
            continue;
          }
          Dt("brackets");
          let J = L.value.slice(1);
          if (L.posix !== !0 && J[0] === "^" && !J.includes("/") && (R = `/${R}`), L.value += R, Ve({ value: R }), g.literalBrackets === !1 || r.hasRegexChars(J))
            continue;
          let be = r.escapeRegex(L.value);
          if (_.output = _.output.slice(0, -L.value.length), g.literalBrackets === !0) {
            _.output += be, L.value = be;
            continue;
          }
          L.value = `(${A}${be}|${L.value})`, _.output += L.value;
          continue;
        }
        if (R === "{" && g.nobrace !== !0) {
          Ut("braces");
          let J = {
            type: "brace",
            value: R,
            output: "(",
            outputIndex: _.output.length,
            tokensIndex: _.tokens.length
          };
          G.push(J), le(J);
          continue;
        }
        if (R === "}") {
          let J = G[G.length - 1];
          if (g.nobrace === !0 || !J) {
            le({ type: "text", value: R, output: R });
            continue;
          }
          let be = ")";
          if (J.dots === !0) {
            let tt = w.slice(), Et = [];
            for (let Ye = tt.length - 1; Ye >= 0 && (w.pop(), tt[Ye].type !== "brace"); Ye--)
              tt[Ye].type !== "dots" && Et.unshift(tt[Ye].value);
            be = l(Et, g), _.backtrack = !0;
          }
          if (J.comma !== !0 && J.dots !== !0) {
            let tt = _.output.slice(0, J.outputIndex), Et = _.tokens.slice(J.tokensIndex);
            J.value = J.output = "\\{", R = be = "\\}", _.output = tt;
            for (let Ye of Et) _.output += Ye.output || Ye.value;
          }
          le({ type: "brace", value: R, output: be }), Dt("braces"), G.pop();
          continue;
        }
        if (R === "|") {
          W.length > 0 && W[W.length - 1].conditions++, le({ type: "text", value: R });
          continue;
        }
        if (R === ",") {
          let J = R, be = G[G.length - 1];
          be && Q[Q.length - 1] === "braces" && (be.comma = !0, J = "|"), le({ type: "comma", value: R, output: J });
          continue;
        }
        if (R === "/") {
          if (L.type === "dot" && _.index === _.start + 1) {
            _.start = _.index + 1, _.consumed = "", _.output = "", w.pop(), L = C;
            continue;
          }
          le({ type: "slash", value: R, output: X });
          continue;
        }
        if (R === ".") {
          if (_.braces > 0 && L.type === "dot") {
            L.value === "." && (L.output = O);
            let J = G[G.length - 1];
            L.type = "dots", L.output += R, L.value += R, J.dots = !0;
            continue;
          }
          if (_.braces + _.parens === 0 && L.type !== "bos" && L.type !== "slash") {
            le({ type: "text", value: R, output: O });
            continue;
          }
          le({ type: "dot", value: R, output: O });
          continue;
        }
        if (R === "?") {
          if (!(L && L.value === "(") && g.noextglob !== !0 && ue() === "(" && ue(2) !== "?") {
            ze("qmark", R);
            continue;
          }
          if (L && L.type === "paren") {
            let J = ue(), be = R;
            if (J === "<" && !r.supportsLookbehinds())
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            (L.value === "(" && !/[!=<:]/.test(J) || J === "<" && !/<([!=]|\w+>)/.test(dt())) && (be = `\\${R}`), le({ type: "text", value: R, output: be });
            continue;
          }
          if (g.dot !== !0 && (L.type === "slash" || L.type === "bos")) {
            le({ type: "qmark", value: R, output: K });
            continue;
          }
          le({ type: "qmark", value: R, output: M });
          continue;
        }
        if (R === "!") {
          if (g.noextglob !== !0 && ue() === "(" && (ue(2) !== "?" || !/[!=<:]/.test(ue(3)))) {
            ze("negate", R);
            continue;
          }
          if (g.nonegate !== !0 && _.index === 0) {
            $r();
            continue;
          }
        }
        if (R === "+") {
          if (g.noextglob !== !0 && ue() === "(" && ue(2) !== "?") {
            ze("plus", R);
            continue;
          }
          if (L && L.value === "(" || g.regex === !1) {
            le({ type: "plus", value: R, output: k });
            continue;
          }
          if (L && (L.type === "bracket" || L.type === "paren" || L.type === "brace") || _.parens > 0) {
            le({ type: "plus", value: R });
            continue;
          }
          le({ type: "plus", value: k });
          continue;
        }
        if (R === "@") {
          if (g.noextglob !== !0 && ue() === "(" && ue(2) !== "?") {
            le({ type: "at", extglob: !0, value: R, output: "" });
            continue;
          }
          le({ type: "text", value: R });
          continue;
        }
        if (R !== "*") {
          (R === "$" || R === "^") && (R = `\\${R}`);
          let J = a.exec(dt());
          J && (R += J[0], _.index += J[0].length), le({ type: "text", value: R });
          continue;
        }
        if (L && (L.type === "globstar" || L.star === !0)) {
          L.type = "star", L.star = !0, L.value += R, L.output = Ee, _.backtrack = !0, _.globstar = !0, ye(R);
          continue;
        }
        let ee = dt();
        if (g.noextglob !== !0 && /^\([^?]/.test(ee)) {
          ze("star", R);
          continue;
        }
        if (L.type === "star") {
          if (g.noglobstar === !0) {
            ye(R);
            continue;
          }
          let J = L.prev, be = J.prev, tt = J.type === "slash" || J.type === "bos", Et = be && (be.type === "star" || be.type === "globstar");
          if (g.bash === !0 && (!tt || ee[0] && ee[0] !== "/")) {
            le({ type: "star", value: R, output: "" });
            continue;
          }
          let Ye = _.braces > 0 && (J.type === "comma" || J.type === "brace"), jt = W.length && (J.type === "pipe" || J.type === "paren");
          if (!tt && J.type !== "paren" && !Ye && !jt) {
            le({ type: "star", value: R, output: "" });
            continue;
          }
          for (; ee.slice(0, 3) === "/**"; ) {
            let vi = p[_.index + 4];
            if (vi && vi !== "/") break;
            ee = ee.slice(3), ye("/**", 3);
          }
          if (J.type === "bos" && ne()) {
            L.type = "globstar", L.value += R, L.output = se(g), _.output = L.output, _.globstar = !0, ye(R);
            continue;
          }
          if (J.type === "slash" && J.prev.type !== "bos" && !Et && ne()) {
            _.output = _.output.slice(0, -(J.output + L.output).length), J.output = `(?:${J.output}`, L.type = "globstar", L.output = se(g) + (g.strictSlashes ? ")" : "|$)"), L.value += R, _.globstar = !0, _.output += J.output + L.output, ye(R);
            continue;
          }
          if (J.type === "slash" && J.prev.type !== "bos" && ee[0] === "/") {
            let vi = ee[1] !== void 0 ? "|$" : "";
            _.output = _.output.slice(0, -(J.output + L.output).length), J.output = `(?:${J.output}`, L.type = "globstar", L.output = `${se(g)}${X}|${X}${vi})`, L.value += R, _.output += J.output + L.output, _.globstar = !0, ye(R + Pe()), le({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (J.type === "bos" && ee[0] === "/") {
            L.type = "globstar", L.value += R, L.output = `(?:^|${X}|${se(g)}${X})`, _.output = L.output, _.globstar = !0, ye(R + Pe()), le({ type: "slash", value: "/", output: "" });
            continue;
          }
          _.output = _.output.slice(0, -L.output.length), L.type = "globstar", L.output = se(g), L.value += R, _.output += L.output, _.globstar = !0, ye(R);
          continue;
        }
        let Fe = { type: "star", value: R, output: Ee };
        if (g.bash === !0) {
          Fe.output = ".*?", (L.type === "bos" || L.type === "slash") && (Fe.output = re + Fe.output), le(Fe);
          continue;
        }
        if (L && (L.type === "bracket" || L.type === "paren") && g.regex === !0) {
          Fe.output = R, le(Fe);
          continue;
        }
        (_.index === _.start || L.type === "slash" || L.type === "dot") && (L.type === "dot" ? (_.output += fe, L.output += fe) : g.dot === !0 ? (_.output += U, L.output += U) : (_.output += re, L.output += re), ue() !== "*" && (_.output += F, L.output += F)), le(Fe);
      }
      for (; _.brackets > 0; ) {
        if (g.strictBrackets === !0) throw new SyntaxError(c("closing", "]"));
        _.output = r.escapeLast(_.output, "["), Dt("brackets");
      }
      for (; _.parens > 0; ) {
        if (g.strictBrackets === !0) throw new SyntaxError(c("closing", ")"));
        _.output = r.escapeLast(_.output, "("), Dt("parens");
      }
      for (; _.braces > 0; ) {
        if (g.strictBrackets === !0) throw new SyntaxError(c("closing", "}"));
        _.output = r.escapeLast(_.output, "{"), Dt("braces");
      }
      if (g.strictSlashes !== !0 && (L.type === "star" || L.type === "bracket") && le({ type: "maybe_slash", value: "", output: `${X}?` }), _.backtrack === !0) {
        _.output = "";
        for (let ee of _.tokens)
          _.output += ee.output != null ? ee.output : ee.value, ee.suffix && (_.output += ee.suffix);
      }
      return _;
    };
    f.fastpaths = (p, m) => {
      let g = { ...m }, y = typeof g.maxLength == "number" ? Math.min(i, g.maxLength) : i, S = p.length;
      if (S > y) throw new SyntaxError(`Input length: ${S}, exceeds maximum allowed length: ${y}`);
      p = u[p] || p;
      let {
        DOT_LITERAL: C,
        SLASH_LITERAL: w,
        ONE_CHAR: A,
        DOTS_SLASH: T,
        NO_DOT: I,
        NO_DOTS: O,
        NO_DOTS_SLASH: k,
        STAR: X,
        START_ANCHOR: F
      } = n.globChars(g.windows), j = g.dot ? O : I, P = g.dot ? k : I, fe = g.capture ? "" : "?:", U = { negated: !1, prefix: "" }, M = g.bash === !0 ? ".*?" : X;
      g.capture && (M = `(${M})`);
      let K = (re) => re.noglobstar === !0 ? M : `(${fe}(?:(?!${F}${re.dot ? T : C}).)*?)`, Y = (re) => {
        switch (re) {
          case "*":
            return `${j}${A}${M}`;
          case ".*":
            return `${C}${A}${M}`;
          case "*.*":
            return `${j}${M}${C}${A}${M}`;
          case "*/*":
            return `${j}${M}${w}${A}${P}${M}`;
          case "**":
            return j + K(g);
          case "**/*":
            return `(?:${j}${K(g)}${w})?${P}${A}${M}`;
          case "**/*.*":
            return `(?:${j}${K(g)}${w})?${P}${M}${C}${A}${M}`;
          case "**/.*":
            return `(?:${j}${K(g)}${w})?${C}${A}${M}`;
          default: {
            let De = /^(.*?)\.(\w+)$/.exec(re);
            if (!De) return;
            let Ee = Y(De[1]);
            return Ee ? Ee + C + De[2] : void 0;
          }
        }
      }, Z = r.removePrefix(p, U), se = Y(Z);
      return se && g.strictSlashes !== !0 && (se += `${w}?`), se;
    }, t.exports = f;
  }), Gp = Hn((e, t) => {
    var n = Kp(), r = qp(), i = $a(), s = ds(), a = (u) => u && typeof u == "object" && !Array.isArray(u), o = (u, l, c = !1) => {
      if (Array.isArray(u)) {
        let w = u.map((A) => o(A, l, c));
        return (A) => {
          for (let T of w) {
            let I = T(A);
            if (I) return I;
          }
          return !1;
        };
      }
      let f = a(u) && u.tokens && u.input;
      if (u === "" || typeof u != "string" && !f)
        throw new TypeError("Expected pattern to be a non-empty string");
      let p = l || {}, m = p.windows, g = f ? o.compileRe(u, l) : o.makeRe(u, l, !1, !0), y = g.state;
      delete g.state;
      let S = () => !1;
      if (p.ignore) {
        let w = { ...l, ignore: null, onMatch: null, onResult: null };
        S = o(p.ignore, w, c);
      }
      let C = (w, A = !1) => {
        let { isMatch: T, match: I, output: O } = o.test(w, g, l, { glob: u, posix: m }), k = { glob: u, state: y, regex: g, posix: m, input: w, output: O, match: I, isMatch: T };
        return typeof p.onResult == "function" && p.onResult(k), T === !1 ? (k.isMatch = !1, A ? k : !1) : S(w) ? (typeof p.onIgnore == "function" && p.onIgnore(k), k.isMatch = !1, A ? k : !1) : (typeof p.onMatch == "function" && p.onMatch(k), A ? k : !0);
      };
      return c && (C.state = y), C;
    };
    o.test = (u, l, c, { glob: f, posix: p } = {}) => {
      if (typeof u != "string") throw new TypeError("Expected input to be a string");
      if (u === "") return { isMatch: !1, output: "" };
      let m = c || {}, g = m.format || (p ? i.toPosixSlashes : null), y = u === f, S = y && g ? g(u) : u;
      return y === !1 && (S = g ? g(u) : u, y = S === f), (y === !1 || m.capture === !0) && (m.matchBase === !0 || m.basename === !0 ? y = o.matchBase(u, l, c, p) : y = l.exec(S)), { isMatch: !!y, match: y, output: S };
    }, o.matchBase = (u, l, c) => (l instanceof RegExp ? l : o.makeRe(l, c)).test(i.basename(u)), o.isMatch = (u, l, c) => o(l, c)(u), o.parse = (u, l) => Array.isArray(u) ? u.map((c) => o.parse(c, l)) : r(u, { ...l, fastpaths: !1 }), o.scan = (u, l) => n(u, l), o.compileRe = (u, l, c = !1, f = !1) => {
      if (c === !0) return u.output;
      let p = l || {}, m = p.contains ? "" : "^", g = p.contains ? "" : "$", y = `${m}(?:${u.output})${g}`;
      u && u.negated === !0 && (y = `^(?!${y}).*$`);
      let S = o.toRegex(y, l);
      return f === !0 && (S.state = u), S;
    }, o.makeRe = (u, l, c = !1, f = !1) => {
      if (!u || typeof u != "string") throw new TypeError("Expected a non-empty string");
      let p = l || {}, m = { negated: !1, fastpaths: !0 }, g = "", y;
      return u.startsWith("./") && (u = u.slice(2), g = m.prefix = "./"), p.fastpaths !== !1 && (u[0] === "." || u[0] === "*") && (y = r.fastpaths(u, l)), y === void 0 ? (m = r(u, l), m.prefix = g + (m.prefix || "")) : m.output = y, o.compileRe(m, l, c, f);
    }, o.toRegex = (u, l) => {
      try {
        let c = l || {};
        return new RegExp(u, c.flags || (c.nocase ? "i" : ""));
      } catch (c) {
        if (l && l.debug === !0) throw c;
        return /$^/;
      }
    }, o.constants = s, t.exports = o;
  }), Hp = Hn((e, t) => {
    t.exports = Gp();
  }), El = {};
  $p(El, {
    __debug: () => Oo,
    check: () => r1,
    default: () => yc,
    doc: () => xs,
    format: () => Qa,
    formatWithCursor: () => Bs,
    getSupportInfo: () => Lo,
    util: () => Ls,
    version: () => xo
  });
  function Wp(e) {
    let t = e.indexOf("\r");
    return t >= 0 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
  }
  function Ua(e) {
    switch (e) {
      case "cr":
        return "\r";
      case "crlf":
        return `\r
`;
      default:
        return `
`;
    }
  }
  function yl(e, t) {
    let n;
    switch (t) {
      case `
`:
        n = /\n/g;
        break;
      case "\r":
        n = /\r/g;
        break;
      case `\r
`:
        n = /\r\n/g;
        break;
      default:
        throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
    }
    let r = e.match(n);
    return r ? r.length : 0;
  }
  function zp(e) {
    return Oi(
      !1,
      e,
      /\r\n?/g,
      `
`
    );
  }
  function Yp(e) {
    if (typeof e == "string") return Wn;
    if (Array.isArray(e)) return dn;
    if (!e) return;
    let { type: t } = e;
    if (ro.has(t)) return t;
  }
  function Jp(e) {
    let t = e === null ? "null" : typeof e;
    if (t !== "string" && t !== "object")
      return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
    if (Yn(e)) throw new Error("doc is valid.");
    let n = Object.prototype.toString.call(e);
    if (n !== "[object Object]") return `Unexpected doc '${n}'.`;
    let r = _1([...ro].map((i) => `'${i}'`));
    return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
  }
  function Xp(e, t, n, r) {
    let i = [e];
    for (; i.length > 0; ) {
      let s = i.pop();
      if (s === io) {
        n(i.pop());
        continue;
      }
      n && i.push(s, io);
      let a = Yn(s);
      if (!a) throw new mr(s);
      if ((t == null ? void 0 : t(s)) !== !1)
        switch (a) {
          case dn:
          case Yt: {
            let o = a === dn ? s : s.parts;
            for (let u = o.length, l = u - 1; l >= 0; --l) i.push(o[l]);
            break;
          }
          case It:
            i.push(s.flatContents, s.breakContents);
            break;
          case _t:
            if (r && s.expandedStates)
              for (let o = s.expandedStates.length, u = o - 1; u >= 0; --u)
                i.push(s.expandedStates[u]);
            else i.push(s.contents);
            break;
          case hn:
          case fn:
          case mn:
          case Jt:
          case gn:
            i.push(s.contents);
            break;
          case Wn:
          case zn:
          case pn:
          case Dn:
          case at:
          case Rt:
            break;
          default:
            throw new mr(s);
        }
    }
  }
  function fs(e) {
    return Xt(e), { type: fn, contents: e };
  }
  function qr(e, t) {
    return Xt(t), { type: hn, contents: t, n: e };
  }
  function bl(e, t = {}) {
    return Xt(e), bs(t.expandedStates, !0), { type: _t, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
  }
  function Qp(e) {
    return qr(Number.NEGATIVE_INFINITY, e);
  }
  function Zp(e) {
    return qr({ type: "root" }, e);
  }
  function e2(e) {
    return qr(-1, e);
  }
  function t2(e, t) {
    return bl(e[0], { ...t, expandedStates: e });
  }
  function vl(e) {
    return bs(e), { type: Yt, parts: e };
  }
  function n2(e, t = "", n = {}) {
    return Xt(e), t !== "" && Xt(t), { type: It, breakContents: e, flatContents: t, groupId: n.groupId };
  }
  function r2(e, t) {
    return Xt(e), { type: mn, contents: e, groupId: t.groupId, negate: t.negate };
  }
  function ja(e) {
    return Xt(e), { type: gn, contents: e };
  }
  function _l(e, t) {
    Xt(e), bs(t);
    let n = [];
    for (let r = 0; r < t.length; r++) r !== 0 && n.push(e), n.push(t[r]);
    return n;
  }
  function Nl(e, t, n) {
    Xt(e);
    let r = e;
    if (t > 0) {
      for (let i = 0; i < Math.floor(t / n); ++i) r = fs(r);
      r = qr(t % n, r), r = qr(Number.NEGATIVE_INFINITY, r);
    }
    return r;
  }
  function i2(e, t) {
    return Xt(t), e ? { type: Jt, label: e, contents: t } : t;
  }
  function An(e) {
    var t;
    if (!e) return "";
    if (Array.isArray(e)) {
      let n = [];
      for (let r of e)
        if (Array.isArray(r)) n.push(...An(r));
        else {
          let i = An(r);
          i !== "" && n.push(i);
        }
      return n;
    }
    return e.type === It ? { ...e, breakContents: An(e.breakContents), flatContents: An(e.flatContents) } : e.type === _t ? {
      ...e,
      contents: An(e.contents),
      expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(An)
    } : e.type === Yt ? { type: "fill", parts: e.parts.map(An) } : e.contents ? { ...e, contents: An(e.contents) } : e;
  }
  function s2(e) {
    let t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ new Set();
    return r(An(e));
    function r(s, a, o) {
      var u, l;
      if (typeof s == "string") return JSON.stringify(s);
      if (Array.isArray(s)) {
        let c = s.map(r).filter(Boolean);
        return c.length === 1 ? c[0] : `[${c.join(", ")}]`;
      }
      if (s.type === at) {
        let c = ((u = o == null ? void 0 : o[a + 1]) == null ? void 0 : u.type) === Rt;
        return s.literal ? c ? "literalline" : "literallineWithoutBreakParent" : s.hard ? c ? "hardline" : "hardlineWithoutBreakParent" : s.soft ? "softline" : "line";
      }
      if (s.type === Rt)
        return ((l = o == null ? void 0 : o[a - 1]) == null ? void 0 : l.type) === at && o[a - 1].hard ? void 0 : "breakParent";
      if (s.type === pn) return "trim";
      if (s.type === fn) return "indent(" + r(s.contents) + ")";
      if (s.type === hn)
        return s.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + r(s.contents) + ")" : s.n < 0 ? "dedent(" + r(s.contents) + ")" : s.n.type === "root" ? "markAsRoot(" + r(s.contents) + ")" : "align(" + JSON.stringify(s.n) + ", " + r(s.contents) + ")";
      if (s.type === It)
        return "ifBreak(" + r(s.breakContents) + (s.flatContents ? ", " + r(s.flatContents) : "") + (s.groupId ? (s.flatContents ? "" : ', ""') + `, { groupId: ${i(s.groupId)} }` : "") + ")";
      if (s.type === mn) {
        let c = [];
        s.negate && c.push("negate: true"), s.groupId && c.push(`groupId: ${i(s.groupId)}`);
        let f = c.length > 0 ? `, { ${c.join(", ")} }` : "";
        return `indentIfBreak(${r(s.contents)}${f})`;
      }
      if (s.type === _t) {
        let c = [];
        s.break && s.break !== "propagated" && c.push("shouldBreak: true"), s.id && c.push(`id: ${i(s.id)}`);
        let f = c.length > 0 ? `, { ${c.join(", ")} }` : "";
        return s.expandedStates ? `conditionalGroup([${s.expandedStates.map((p) => r(p)).join(",")}]${f})` : `group(${r(s.contents)}${f})`;
      }
      if (s.type === Yt) return `fill([${s.parts.map((c) => r(c)).join(", ")}])`;
      if (s.type === gn) return "lineSuffix(" + r(s.contents) + ")";
      if (s.type === Dn) return "lineSuffixBoundary";
      if (s.type === Jt) return `label(${JSON.stringify(s.label)}, ${r(s.contents)})`;
      throw new Error("Unknown doc type " + s.type);
    }
    function i(s) {
      if (typeof s != "symbol") return JSON.stringify(String(s));
      if (s in t) return t[s];
      let a = s.description || "symbol";
      for (let o = 0; ; o++) {
        let u = a + (o > 0 ? ` #${o}` : "");
        if (!n.has(u)) return n.add(u), t[s] = `Symbol.for(${JSON.stringify(u)})`;
      }
    }
  }
  function a2(e) {
    return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
  }
  function o2(e) {
    return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9800 && e <= 9811 || e === 9855 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
  }
  function u2(e) {
    if (!e) return 0;
    if (!I1.test(e)) return e.length;
    e = e.replace(F1(), "  ");
    let t = 0;
    for (let n of e) {
      let r = n.codePointAt(0);
      r <= 31 || r >= 127 && r <= 159 || r >= 768 && r <= 879 || (t += w1(r) ? 1 : 2);
    }
    return t;
  }
  function hs(e, t) {
    if (typeof e == "string") return t(e);
    let n = /* @__PURE__ */ new Map();
    return r(e);
    function r(s) {
      if (n.has(s)) return n.get(s);
      let a = i(s);
      return n.set(s, a), a;
    }
    function i(s) {
      switch (Yn(s)) {
        case dn:
          return t(s.map(r));
        case Yt:
          return t({ ...s, parts: s.parts.map(r) });
        case It:
          return t({ ...s, breakContents: r(s.breakContents), flatContents: r(s.flatContents) });
        case _t: {
          let { expandedStates: a, contents: o } = s;
          return a ? (a = a.map(r), o = a[0]) : o = r(o), t({ ...s, contents: o, expandedStates: a });
        }
        case hn:
        case fn:
        case mn:
        case Jt:
        case gn:
          return t({ ...s, contents: r(s.contents) });
        case Wn:
        case zn:
        case pn:
        case Dn:
        case at:
        case Rt:
          return t(s);
        default:
          throw new mr(s);
      }
    }
  }
  function Ka(e, t, n) {
    let r = n, i = !1;
    function s(a) {
      if (i) return !1;
      let o = t(a);
      o !== void 0 && (i = !0, r = o);
    }
    return ys(e, s), r;
  }
  function l2(e) {
    if (e.type === _t && e.break || e.type === at && e.hard || e.type === Rt) return !0;
  }
  function c2(e) {
    return Ka(e, l2, !1);
  }
  function Cl(e) {
    if (e.length > 0) {
      let t = rt(!1, e, -1);
      !t.expandedStates && !t.break && (t.break = "propagated");
    }
    return null;
  }
  function d2(e) {
    let t = /* @__PURE__ */ new Set(), n = [];
    function r(s) {
      if (s.type === Rt && Cl(n), s.type === _t) {
        if (n.push(s), t.has(s)) return !1;
        t.add(s);
      }
    }
    function i(s) {
      s.type === _t && n.pop().break && Cl(n);
    }
    ys(e, r, i, !0);
  }
  function f2(e) {
    return e.type === at && !e.hard ? e.soft ? "" : " " : e.type === It ? e.flatContents : e;
  }
  function h2(e) {
    return hs(e, f2);
  }
  function Tl(e) {
    for (e = [...e]; e.length >= 2 && rt(!1, e, -2).type === at && rt(!1, e, -1).type === Rt; )
      e.length -= 2;
    if (e.length > 0) {
      let t = wi(rt(!1, e, -1));
      e[e.length - 1] = t;
    }
    return e;
  }
  function wi(e) {
    switch (Yn(e)) {
      case fn:
      case mn:
      case _t:
      case gn:
      case Jt: {
        let t = wi(e.contents);
        return { ...e, contents: t };
      }
      case It:
        return { ...e, breakContents: wi(e.breakContents), flatContents: wi(e.flatContents) };
      case Yt:
        return { ...e, parts: Tl(e.parts) };
      case dn:
        return Tl(e);
      case Wn:
        return e.replace(/[\n\r]*$/, "");
      case hn:
      case zn:
      case pn:
      case Dn:
      case at:
      case Rt:
        break;
      default:
        throw new mr(e);
    }
    return e;
  }
  function Sl(e) {
    return wi(m2(e));
  }
  function p2(e) {
    switch (Yn(e)) {
      case Yt:
        if (e.parts.every((t) => t === "")) return "";
        break;
      case _t:
        if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
        if (e.contents.type === _t && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates)
          return e.contents;
        break;
      case hn:
      case fn:
      case mn:
      case gn:
        if (!e.contents) return "";
        break;
      case It:
        if (!e.flatContents && !e.breakContents) return "";
        break;
      case dn: {
        let t = [];
        for (let n of e) {
          if (!n) continue;
          let [r, ...i] = Array.isArray(n) ? n : [n];
          typeof r == "string" && typeof rt(!1, t, -1) == "string" ? t[t.length - 1] += r : t.push(r), t.push(...i);
        }
        return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
      }
      case Wn:
      case zn:
      case pn:
      case Dn:
      case at:
      case Jt:
      case Rt:
        break;
      default:
        throw new mr(e);
    }
    return e;
  }
  function m2(e) {
    return hs(e, (t) => p2(t));
  }
  function g2(e, t = uo) {
    return hs(
      e,
      (n) => typeof n == "string" ? _l(
        t,
        n.split(`
`)
      ) : n
    );
  }
  function D2(e) {
    if (e.type === at) return !0;
  }
  function E2(e) {
    return Ka(e, D2, !1);
  }
  function Al(e, t) {
    return e.type === Jt ? { ...e, contents: t(e.contents) } : t(e);
  }
  function Fl() {
    return { value: "", length: 0, queue: [] };
  }
  function y2(e, t) {
    return qa(e, { type: "indent" }, t);
  }
  function b2(e, t, n) {
    return t === Number.NEGATIVE_INFINITY ? e.root || Fl() : t < 0 ? qa(e, { type: "dedent" }, n) : t ? t.type === "root" ? { ...e, root: e } : qa(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, n) : e;
  }
  function qa(e, t, n) {
    let r = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], i = "", s = 0, a = 0, o = 0;
    for (let g of r)
      switch (g.type) {
        case "indent":
          c(), n.useTabs ? u(1) : l(n.tabWidth);
          break;
        case "stringAlign":
          c(), i += g.n, s += g.n.length;
          break;
        case "numberAlign":
          a += 1, o += g.n;
          break;
        default:
          throw new Error(`Unexpected type '${g.type}'`);
      }
    return p(), { ...e, value: i, length: s, queue: r };
    function u(g) {
      i += "	".repeat(g), s += n.tabWidth * g;
    }
    function l(g) {
      i += " ".repeat(g), s += g;
    }
    function c() {
      n.useTabs ? f() : p();
    }
    function f() {
      a > 0 && u(a), m();
    }
    function p() {
      o > 0 && l(o), m();
    }
    function m() {
      a = 0, o = 0;
    }
  }
  function Ga(e) {
    let t = 0, n = 0, r = e.length;
    e: for (; r--; ) {
      let i = e[r];
      if (i === Jr) {
        n++;
        continue;
      }
      for (let s = i.length - 1; s >= 0; s--) {
        let a = i[s];
        if (a === " " || a === "	") t++;
        else {
          e[r] = i.slice(0, s + 1);
          break e;
        }
      }
    }
    if (t > 0 || n > 0) for (e.length = r + 1; n-- > 0; ) e.push(Jr);
    return t;
  }
  function ps(e, t, n, r, i, s) {
    if (n === Number.POSITIVE_INFINITY) return !0;
    let a = t.length, o = [e], u = [];
    for (; n >= 0; ) {
      if (o.length === 0) {
        if (a === 0) return !0;
        o.push(t[--a]);
        continue;
      }
      let { mode: l, doc: c } = o.pop(), f = Yn(c);
      switch (f) {
        case Wn:
          u.push(c), n -= Ns(c);
          break;
        case dn:
        case Yt: {
          let p = f === dn ? c : c.parts;
          for (let m = p.length - 1; m >= 0; m--) o.push({ mode: l, doc: p[m] });
          break;
        }
        case fn:
        case hn:
        case mn:
        case Jt:
          o.push({ mode: l, doc: c.contents });
          break;
        case pn:
          n += Ga(u);
          break;
        case _t: {
          if (s && c.break) return !1;
          let p = c.break ? Nt : l, m = c.expandedStates && p === Nt ? rt(!1, c.expandedStates, -1) : c.contents;
          o.push({ mode: p, doc: m });
          break;
        }
        case It: {
          let p = (c.groupId ? i[c.groupId] || Qt : l) === Nt ? c.breakContents : c.flatContents;
          p && o.push({ mode: l, doc: p });
          break;
        }
        case at:
          if (l === Nt || c.hard) return !0;
          c.soft || (u.push(" "), n--);
          break;
        case gn:
          r = !0;
          break;
        case Dn:
          if (r) return !1;
          break;
      }
    }
    return !1;
  }
  function ms(e, t) {
    let n = {}, r = t.printWidth, i = Ua(t.endOfLine), s = 0, a = [{ ind: Fl(), mode: Nt, doc: e }], o = [], u = !1, l = [], c = 0;
    for (d2(e); a.length > 0; ) {
      let { ind: p, mode: m, doc: g } = a.pop();
      switch (Yn(g)) {
        case Wn: {
          let y = i !== `
` ? Oi(
            !1,
            g,
            `
`,
            i
          ) : g;
          o.push(y), a.length > 0 && (s += Ns(y));
          break;
        }
        case dn:
          for (let y = g.length - 1; y >= 0; y--) a.push({ ind: p, mode: m, doc: g[y] });
          break;
        case zn:
          if (c >= 2) throw new Error("There are too many 'cursor' in doc.");
          o.push(Jr), c++;
          break;
        case fn:
          a.push({ ind: y2(p, t), mode: m, doc: g.contents });
          break;
        case hn:
          a.push({ ind: b2(p, g.n, t), mode: m, doc: g.contents });
          break;
        case pn:
          s -= Ga(o);
          break;
        case _t:
          switch (m) {
            case Qt:
              if (!u) {
                a.push({ ind: p, mode: g.break ? Nt : Qt, doc: g.contents });
                break;
              }
            case Nt: {
              u = !1;
              let y = { ind: p, mode: Qt, doc: g.contents }, S = r - s, C = l.length > 0;
              if (!g.break && ps(y, a, S, C, n)) a.push(y);
              else if (g.expandedStates) {
                let w = rt(!1, g.expandedStates, -1);
                if (g.break) {
                  a.push({ ind: p, mode: Nt, doc: w });
                  break;
                } else
                  for (let A = 1; A < g.expandedStates.length + 1; A++)
                    if (A >= g.expandedStates.length) {
                      a.push({ ind: p, mode: Nt, doc: w });
                      break;
                    } else {
                      let T = g.expandedStates[A], I = { ind: p, mode: Qt, doc: T };
                      if (ps(I, a, S, C, n)) {
                        a.push(I);
                        break;
                      }
                    }
              } else a.push({ ind: p, mode: Nt, doc: g.contents });
              break;
            }
          }
          g.id && (n[g.id] = rt(!1, a, -1).mode);
          break;
        case Yt: {
          let y = r - s, { parts: S } = g;
          if (S.length === 0) break;
          let [C, w] = S, A = { ind: p, mode: Qt, doc: C }, T = { ind: p, mode: Nt, doc: C }, I = ps(A, [], y, l.length > 0, n, !0);
          if (S.length === 1) {
            I ? a.push(A) : a.push(T);
            break;
          }
          let O = { ind: p, mode: Qt, doc: w }, k = { ind: p, mode: Nt, doc: w };
          if (S.length === 2) {
            I ? a.push(O, A) : a.push(k, T);
            break;
          }
          S.splice(0, 2);
          let X = { ind: p, mode: m, doc: vl(S) }, F = S[0];
          ps({ ind: p, mode: Qt, doc: [C, w, F] }, [], y, l.length > 0, n, !0) ? a.push(X, O, A) : I ? a.push(X, k, A) : a.push(X, k, T);
          break;
        }
        case It:
        case mn: {
          let y = g.groupId ? n[g.groupId] : m;
          if (y === Nt) {
            let S = g.type === It ? g.breakContents : g.negate ? g.contents : fs(g.contents);
            S && a.push({ ind: p, mode: m, doc: S });
          }
          if (y === Qt) {
            let S = g.type === It ? g.flatContents : g.negate ? fs(g.contents) : g.contents;
            S && a.push({ ind: p, mode: m, doc: S });
          }
          break;
        }
        case gn:
          l.push({ ind: p, mode: m, doc: g.contents });
          break;
        case Dn:
          l.length > 0 && a.push({ ind: p, mode: m, doc: vs });
          break;
        case at:
          switch (m) {
            case Qt:
              if (g.hard) u = !0;
              else {
                g.soft || (o.push(" "), s += 1);
                break;
              }
            case Nt:
              if (l.length > 0) {
                a.push({ ind: p, mode: m, doc: g }, ...l.reverse()), l.length = 0;
                break;
              }
              g.literal ? p.root ? (o.push(i, p.root.value), s = p.root.length) : (o.push(i), s = 0) : (s -= Ga(o), o.push(i + p.value), s = p.length);
              break;
          }
          break;
        case Jt:
          a.push({ ind: p, mode: m, doc: g.contents });
          break;
        case Rt:
          break;
        default:
          throw new mr(g);
      }
      a.length === 0 && l.length > 0 && (a.push(...l.reverse()), l.length = 0);
    }
    let f = o.indexOf(Jr);
    if (f !== -1) {
      let p = o.indexOf(Jr, f + 1), m = o.slice(0, f).join(""), g = o.slice(f + 1, p).join(""), y = o.slice(p + 1).join("");
      return { formatted: m + g + y, cursorNodeStart: m.length, cursorNodeText: g };
    }
    return { formatted: o.join("") };
  }
  function v2(e, t, n = 0) {
    let r = 0;
    for (let i = n; i < e.length; ++i) e[i] === "	" ? r = r + t - r % t : r++;
    return r;
  }
  function _2(e) {
    return e !== null && typeof e == "object";
  }
  function* wl(e, t) {
    let { getVisitorKeys: n, filter: r = () => !0 } = t, i = (s) => O1(s) && r(s);
    for (let s of n(e)) {
      let a = e[s];
      if (Array.isArray(a)) for (let o of a) i(o) && (yield o);
      else i(a) && (yield a);
    }
  }
  function* N2(e, t) {
    let n = [e];
    for (let r = 0; r < n.length; r++) {
      let i = n[r];
      for (let s of wl(i, t)) yield s, n.push(s);
    }
  }
  function Ii(e) {
    return (t, n, r) => {
      let i = !!(r != null && r.backwards);
      if (n === !1) return !1;
      let { length: s } = t, a = n;
      for (; a >= 0 && a < s; ) {
        let o = t.charAt(a);
        if (e instanceof RegExp) {
          if (!e.test(o)) return a;
        } else if (!e.includes(o)) return a;
        i ? a-- : a++;
      }
      return a === -1 || a === s ? a : !1;
    };
  }
  function C2(e, t, n) {
    let r = !!(n != null && n.backwards);
    if (t === !1) return !1;
    let i = e.charAt(t);
    if (r) {
      if (e.charAt(t - 1) === "\r" && i === `
`)
        return t - 2;
      if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
        return t - 1;
    } else {
      if (i === "\r" && e.charAt(t + 1) === `
`)
        return t + 2;
      if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
        return t + 1;
    }
    return t;
  }
  function T2(e, t, n = {}) {
    let r = Fn(e, n.backwards ? t - 1 : t, n), i = Xn(e, r, n);
    return r !== i;
  }
  function S2(e) {
    return Array.isArray(e) && e.length > 0;
  }
  function A2(e) {
    return e ? (t) => e(t, po) : M1;
  }
  function F2(e) {
    let t = e.type || e.kind || "(unknown type)", n = String(
      e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || ""
    );
    return n.length > 20 && (n = n.slice(0, 19) + "…"), t + (n ? " " + n : "");
  }
  function Ha(e, t) {
    (e.comments ?? (e.comments = [])).push(t), t.printed = !1, t.nodeDescription = F2(e);
  }
  function Gr(e, t) {
    t.leading = !0, t.trailing = !1, Ha(e, t);
  }
  function gs(e, t, n) {
    t.leading = !1, t.trailing = !1, n && (t.marker = n), Ha(e, t);
  }
  function Hr(e, t) {
    t.leading = !1, t.trailing = !0, Ha(e, t);
  }
  function Wa(e, t) {
    if (As.has(e)) return As.get(e);
    let {
      printer: { getCommentChildNodes: n, canAttachComment: r, getVisitorKeys: i },
      locStart: s,
      locEnd: a
    } = t;
    if (!r) return [];
    let o = ((n == null ? void 0 : n(e, t)) ?? [...wl(e, { getVisitorKeys: Ri(i) })]).flatMap(
      (u) => r(u) ? [u] : Wa(u, t)
    );
    return o.sort((u, l) => s(u) - s(l) || a(u) - a(l)), As.set(e, o), o;
  }
  function Il(e, t, n, r) {
    let { locStart: i, locEnd: s } = n, a = i(t), o = s(t), u = Wa(e, n), l, c, f = 0, p = u.length;
    for (; f < p; ) {
      let m = f + p >> 1, g = u[m], y = i(g), S = s(g);
      if (y <= a && o <= S) return Il(g, t, n, g);
      if (S <= a) {
        l = g, f = m + 1;
        continue;
      }
      if (o <= y) {
        c = g, p = m;
        continue;
      }
      throw new Error("Comment location overlaps with node location");
    }
    if ((r == null ? void 0 : r.type) === "TemplateLiteral") {
      let { quasis: m } = r, g = za(m, t, n);
      l && za(m, l, n) !== g && (l = null), c && za(m, c, n) !== g && (c = null);
    }
    return { enclosingNode: r, precedingNode: l, followingNode: c };
  }
  function w2(e, t) {
    let { comments: n } = e;
    if (delete e.comments, !R1(n) || !t.printer.canAttachComment) return;
    let r = [], {
      locStart: i,
      locEnd: s,
      printer: {
        experimentalFeatures: { avoidAstMutation: a = !1 } = {},
        handleComments: o = {}
      },
      originalText: u
    } = t, { ownLine: l = Fs, endOfLine: c = Fs, remaining: f = Fs } = o, p = n.map((m, g) => ({
      ...Il(e, m, t),
      comment: m,
      text: u,
      options: t,
      ast: e,
      isLastComment: n.length - 1 === g
    }));
    for (let [m, g] of p.entries()) {
      let {
        comment: y,
        precedingNode: S,
        enclosingNode: C,
        followingNode: w,
        text: A,
        options: T,
        ast: I,
        isLastComment: O
      } = g;
      if (T.parser === "json" || T.parser === "json5" || T.parser === "jsonc" || T.parser === "__js_expression" || T.parser === "__ts_expression" || T.parser === "__vue_expression" || T.parser === "__vue_ts_expression") {
        if (i(y) - i(I) <= 0) {
          Gr(I, y);
          continue;
        }
        if (s(y) - s(I) >= 0) {
          Hr(I, y);
          continue;
        }
      }
      let k;
      if (a ? k = [g] : (y.enclosingNode = C, y.precedingNode = S, y.followingNode = w, k = [y, A, T, I, O]), I2(A, T, p, m))
        y.placement = "ownLine", l(...k) || (w ? Gr(w, y) : S ? Hr(S, y) : gs(C || I, y));
      else if (x2(A, T, p, m))
        y.placement = "endOfLine", c(...k) || (S ? Hr(S, y) : w ? Gr(w, y) : gs(C || I, y));
      else if (y.placement = "remaining", !f(...k))
        if (S && w) {
          let X = r.length;
          X > 0 && r[X - 1].followingNode !== w && xl(r, T), r.push(g);
        } else S ? Hr(S, y) : w ? Gr(w, y) : gs(C || I, y);
    }
    if (xl(r, t), !a)
      for (let m of n) delete m.precedingNode, delete m.enclosingNode, delete m.followingNode;
  }
  function I2(e, t, n, r) {
    let { comment: i, precedingNode: s } = n[r], { locStart: a, locEnd: o } = t, u = a(i);
    if (s)
      for (let l = r - 1; l >= 0; l--) {
        let { comment: c, precedingNode: f } = n[l];
        if (f !== s || !mo(e.slice(o(c), u))) break;
        u = a(c);
      }
    return wn(e, u, { backwards: !0 });
  }
  function x2(e, t, n, r) {
    let { comment: i, followingNode: s } = n[r], { locStart: a, locEnd: o } = t, u = o(i);
    if (s)
      for (let l = r + 1; l < n.length; l++) {
        let { comment: c, followingNode: f } = n[l];
        if (f !== s || !mo(e.slice(u, a(c)))) break;
        u = o(c);
      }
    return wn(e, u);
  }
  function xl(e, t) {
    var n, r;
    let i = e.length;
    if (i === 0) return;
    let { precedingNode: s, followingNode: a } = e[0], o = t.locStart(a), u;
    for (u = i; u > 0; --u) {
      let { comment: l, precedingNode: c, followingNode: f } = e[u - 1];
      Ss.strictEqual(c, s), Ss.strictEqual(f, a);
      let p = t.originalText.slice(t.locEnd(l), o);
      if (((r = (n = t.printer).isGap) == null ? void 0 : r.call(n, p, t)) ?? /^[\s(]*$/.test(p))
        o = t.locStart(l);
      else break;
    }
    for (let [l, { comment: c }] of e.entries()) l < u ? Hr(s, c) : Gr(a, c);
    for (let l of [s, a])
      l.comments && l.comments.length > 1 && l.comments.sort((c, f) => t.locStart(c) - t.locStart(f));
    e.length = 0;
  }
  function za(e, t, n) {
    let r = n.locStart(t) - 1;
    for (let i = 1; i < e.length; ++i) if (r < n.locStart(e[i])) return i - 1;
    return 0;
  }
  function L2(e, t) {
    let n = t - 1;
    n = Fn(e, n, { backwards: !0 }), n = Xn(e, n, { backwards: !0 }), n = Fn(e, n, { backwards: !0 });
    let r = Xn(e, n, { backwards: !0 });
    return n !== r;
  }
  function Ll(e, t) {
    let n = e.node;
    return n.printed = !0, t.printer.printComment(e, t);
  }
  function O2(e, t) {
    var n;
    let r = e.node, i = [Ll(e, t)], { printer: s, originalText: a, locStart: o, locEnd: u } = t;
    if ((n = s.isBlockComment) != null && n.call(s, r)) {
      let c = wn(a, u(r)) ? wn(a, o(r), { backwards: !0 }) ? Jn : oo : " ";
      i.push(c);
    } else i.push(Jn);
    let l = Xn(a, Fn(a, u(r)));
    return l !== !1 && wn(a, l) && i.push(Jn), i;
  }
  function k2(e, t, n) {
    var r;
    let i = e.node, s = Ll(e, t), { printer: a, originalText: o, locStart: u } = t, l = (r = a.isBlockComment) == null ? void 0 : r.call(a, i);
    if (n != null && n.hasLineSuffix && !(n != null && n.isBlock) || wn(o, u(i), { backwards: !0 })) {
      let c = ws(o, u(i));
      return { doc: ja([Jn, c ? Jn : "", s]), isBlock: l, hasLineSuffix: !0 };
    }
    return !l || n != null && n.hasLineSuffix ? { doc: [ja([" ", s]), ki], isBlock: l, hasLineSuffix: !0 } : { doc: [" ", s], isBlock: l, hasLineSuffix: !1 };
  }
  function R2(e, t) {
    let n = e.node;
    if (!n) return {};
    let r = t[Symbol.for("printedComments")];
    if ((n.comments || []).filter((o) => !r.has(o)).length === 0)
      return { leading: "", trailing: "" };
    let i = [], s = [], a;
    return e.each(() => {
      let o = e.node;
      if (r != null && r.has(o)) return;
      let { leading: u, trailing: l } = o;
      u ? i.push(O2(e, t)) : l && (a = k2(e, t, a), s.push(a.doc));
    }, "comments"), { leading: i, trailing: s };
  }
  function M2(e, t, n) {
    let { leading: r, trailing: i } = R2(e, n);
    return !r && !i ? t : Al(t, (s) => [r, s, i]);
  }
  function B2(e) {
    let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: n } = e;
    for (let r of t) {
      if (!r.printed && !n.has(r))
        throw new Error(
          'Comment "' + r.value.trim() + '" was not printed. Please report this error!'
        );
      delete r.printed;
    }
  }
  function P2(e) {
    return () => {
    };
  }
  function Ol({ plugins: e = [], showDeprecated: t = !1 } = {}) {
    let n = e.flatMap((i) => i.languages ?? []), r = [];
    for (let i of $2(Object.assign({}, ...e.map(({ options: s }) => s), P1)))
      !t && i.deprecated || (Array.isArray(i.choices) && (t || (i.choices = i.choices.filter((s) => !s.deprecated)), i.name === "parser" && (i.choices = [...i.choices, ...V2(i.choices, n, e)])), i.pluginDefaults = Object.fromEntries(
        e.filter((s) => {
          var a;
          return ((a = s.defaultOptions) == null ? void 0 : a[i.name]) !== void 0;
        }).map((s) => [s.name, s.defaultOptions[i.name]])
      ), r.push(i));
    return { languages: n, options: r };
  }
  function* V2(e, t, n) {
    let r = new Set(e.map((i) => i.value));
    for (let i of t)
      if (i.parsers) {
        for (let s of i.parsers)
          if (!r.has(s)) {
            r.add(s);
            let a = n.find((u) => u.parsers && Object.prototype.hasOwnProperty.call(u.parsers, s)), o = i.name;
            a != null && a.name && (o += ` (plugin: ${a.name})`), yield { value: s, description: o };
          }
      }
  }
  function $2(e) {
    let t = [];
    for (let [n, r] of Object.entries(e)) {
      let i = { name: n, ...r };
      Array.isArray(i.default) && (i.default = rt(!1, i.default, -1).value), t.push(i);
    }
    return t;
  }
  function kl(e, t) {
    if (!t) return;
    let n = V1(t).toLowerCase();
    return e.find(({ filenames: r }) => r == null ? void 0 : r.some((i) => i.toLowerCase() === n)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.some((i) => n.endsWith(i)));
  }
  function U2(e, t) {
    if (t)
      return e.find(({ name: n }) => n.toLowerCase() === t) ?? e.find(({ aliases: n }) => n == null ? void 0 : n.includes(t)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.includes(`.${t}`));
  }
  function j2(e, t) {
    let n = e.plugins.flatMap((i) => i.languages ?? []), r = U2(n, t.language) ?? kl(n, t.physicalFile) ?? kl(n, t.file) ?? (t.physicalFile, void 0);
    return r == null ? void 0 : r.parsers[0];
  }
  function Rl(e, t, n, r) {
    return [
      `Invalid ${Er.default.red(r.key(e))} value.`,
      `Expected ${Er.default.blue(n)},`,
      `but received ${t === yo ? Er.default.gray("nothing") : Er.default.red(r.value(t))}.`
    ].join(" ");
  }
  function Ml({ text: e, list: t }, n) {
    let r = [];
    return e && r.push(`- ${Er.default.blue(e)}`), t && r.push(
      [`- ${Er.default.blue(t.title)}:`].concat(
        t.values.map((i) => Ml(i, n - bo.length).replace(/^|\n/g, `$&${bo}`))
      ).join(`
`)
    ), Bl(r, n);
  }
  function Bl(e, t) {
    if (e.length === 1) return e[0];
    let [n, r] = e, [i, s] = e.map(
      (a) => a.split(
        `
`,
        1
      )[0].length
    );
    return i > t && i > s ? r : n;
  }
  function K2(e, t) {
    if (e === t) return 0;
    let n = e;
    e.length > t.length && (e = t, t = n);
    let r = e.length, i = t.length;
    for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-i); ) r--, i--;
    let s = 0;
    for (; s < r && e.charCodeAt(s) === t.charCodeAt(s); ) s++;
    if (r -= s, i -= s, r === 0) return i;
    let a, o, u, l, c = 0, f = 0;
    for (; c < r; ) _o[c] = e.charCodeAt(s + c), Is[c] = ++c;
    for (; f < i; )
      for (a = t.charCodeAt(s + f), u = f++, o = f, c = 0; c < r; c++)
        l = a === _o[c] ? u : u + 1, u = Is[c], o = Is[c] = u > o ? l > o ? o + 1 : l : l > u ? u + 1 : l;
    return o;
  }
  function q2(e, t) {
    let n = new e(t), r = Object.create(n);
    for (let i of K1) i in t && (r[i] = G2(t[i], n, In.prototype[i].length));
    return r;
  }
  function G2(e, t, n) {
    return typeof e == "function" ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1)) : () => e;
  }
  function Pl({ from: e, to: t }) {
    return { from: [e], to: t };
  }
  function H2(e, t) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let r of e) {
      let i = r[t];
      if (n[i]) throw new Error(`Duplicate ${t} ${JSON.stringify(i)}`);
      n[i] = r;
    }
    return n;
  }
  function W2(e, t) {
    let n = /* @__PURE__ */ new Map();
    for (let r of e) {
      let i = r[t];
      if (n.has(i)) throw new Error(`Duplicate ${t} ${JSON.stringify(i)}`);
      n.set(i, r);
    }
    return n;
  }
  function z2() {
    let e = /* @__PURE__ */ Object.create(null);
    return (t) => {
      let n = JSON.stringify(t);
      return e[n] ? !0 : (e[n] = !0, !1);
    };
  }
  function Y2(e, t) {
    let n = [], r = [];
    for (let i of e) t(i) ? n.push(i) : r.push(i);
    return [n, r];
  }
  function J2(e) {
    return e === Math.floor(e);
  }
  function X2(e, t) {
    if (e === t) return 0;
    let n = typeof e, r = typeof t, i = ["undefined", "object", "boolean", "number", "string"];
    return n !== r ? i.indexOf(n) - i.indexOf(r) : n !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
  }
  function Q2(e) {
    return (...t) => {
      let n = e(...t);
      return typeof n == "string" ? new Error(n) : n;
    };
  }
  function Vl(e) {
    return e === void 0 ? {} : e;
  }
  function $l(e) {
    if (typeof e == "string") return { text: e };
    let { text: t, list: n } = e;
    return Z2((t || n) !== void 0, "Unexpected `expected` result, there should be at least one field."), n ? { text: t, list: { title: n.title, values: n.values.map($l) } } : { text: t };
  }
  function Ul(e, t) {
    return e === !0 ? !0 : e === !1 ? { value: t } : e;
  }
  function jl(e, t, n = !1) {
    return e === !1 ? !1 : e === !0 ? n ? !0 : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? !1 : e;
  }
  function Kl(e, t) {
    return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
  }
  function Ya(e, t) {
    return e === void 0 ? [] : Array.isArray(e) ? e.map((n) => Kl(n, t)) : [Kl(e, t)];
  }
  function ql(e, t) {
    let n = Ya(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
    return n.length === 0 ? { remain: t, redirect: n } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: n } : { redirect: n };
  }
  function Z2(e, t) {
    if (!e) throw new Error(t);
  }
  function em(e, t, { logger: n = !1, isCLI: r = !1, passThrough: i = !1, FlagSchema: s, descriptor: a } = {}) {
    if (r) {
      if (!s) throw new Error("'FlagSchema' option is required.");
      if (!a) throw new Error("'descriptor' option is required.");
    } else a = Dr;
    let o = i ? Array.isArray(i) ? (p, m) => i.includes(p) ? { [p]: m } : void 0 : (p, m) => ({ [p]: m }) : (p, m, g) => {
      let { _: y, ...S } = g.schemas;
      return No(p, m, { ...g, schemas: S });
    }, u = tm(t, { isCLI: r, FlagSchema: s }), l = new tc(u, { logger: n, unknown: o, descriptor: a }), c = n !== !1;
    c && To && (l._hasDeprecationWarned = To);
    let f = l.normalize(e);
    return c && (To = l._hasDeprecationWarned), f;
  }
  function tm(e, { isCLI: t, FlagSchema: n }) {
    let r = [];
    t && r.push(G1.create({ name: "_" }));
    for (let i of e)
      r.push(nm(i, { isCLI: t, optionInfos: e, FlagSchema: n })), i.alias && t && r.push(q1.create({ name: i.alias, sourceName: i.name }));
    return r;
  }
  function nm(e, { isCLI: t, optionInfos: n, FlagSchema: r }) {
    let { name: i } = e, s = { name: i }, a, o = {};
    switch (e.type) {
      case "int":
        a = J1, t && (s.preprocess = Number);
        break;
      case "string":
        a = Co;
        break;
      case "choice":
        a = z1, s.choices = e.choices.map(
          (u) => u != null && u.redirect ? { ...u, redirect: { to: { key: e.name, value: u.redirect } } } : u
        );
        break;
      case "boolean":
        a = W1;
        break;
      case "flag":
        a = r, s.flags = n.flatMap(
          (u) => [u.alias, u.description && u.name, u.oppositeDescription && `no-${u.name}`].filter(
            Boolean
          )
        );
        break;
      case "path":
        a = Co;
        break;
      default:
        throw new Error(`Unexpected type ${e.type}`);
    }
    if (e.exception ? s.validate = (u, l, c) => e.exception(u) || l.validate(u, c) : s.validate = (u, l, c) => u === void 0 || l.validate(u, c), e.redirect && (o.redirect = (u) => u ? {
      to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value }
    } : void 0), e.deprecated && (o.deprecated = !0), t && !e.array) {
      let u = s.preprocess || ((l) => l);
      s.preprocess = (l, c, f) => c.preprocess(u(Array.isArray(l) ? rt(!1, l, -1) : l), f);
    }
    return e.array ? H1.create({
      ...t ? { preprocess: (u) => Array.isArray(u) ? u : [u] } : {},
      ...o,
      valueSchema: a.create(s)
    }) : a.create({ ...s, ...o });
  }
  function Gl(e, t) {
    if (!t) throw new Error("parserName is required.");
    let n = So(!1, e, (i) => i.parsers && Object.prototype.hasOwnProperty.call(i.parsers, t));
    if (n) return n;
    let r = `Couldn't resolve parser "${t}".`;
    throw r += " Plugins must be explicitly added to the standalone bundle.", new go(r);
  }
  function rm(e, t) {
    if (!t) throw new Error("astFormat is required.");
    let n = So(!1, e, (i) => i.printers && Object.prototype.hasOwnProperty.call(i.printers, t));
    if (n) return n;
    let r = `Couldn't find plugin for AST format "${t}".`;
    throw r += " Plugins must be explicitly added to the standalone bundle.", new go(r);
  }
  function Hl({ plugins: e, parser: t }) {
    let n = Gl(e, t);
    return Wl(n, t);
  }
  function Wl(e, t) {
    let n = e.parsers[t];
    return typeof n == "function" ? n() : n;
  }
  function im(e, t) {
    let n = e.printers[t];
    return typeof n == "function" ? n() : n;
  }
  async function sm(e, t = {}) {
    var n;
    let r = { ...e };
    if (!r.parser)
      if (r.filepath) {
        if (r.parser = $1(r, { physicalFile: r.filepath }), !r.parser)
          throw new Do(`No parser could be inferred for file "${r.filepath}".`);
      } else throw new Do("No parser and no file path given, couldn't infer a parser.");
    let i = Ol({ plugins: e.plugins, showDeprecated: !0 }).options, s = {
      ...Ao,
      ...Object.fromEntries(i.filter((p) => p.default !== void 0).map((p) => [p.name, p.default]))
    }, a = Gl(r.plugins, r.parser), o = await Wl(a, r.parser);
    r.astFormat = o.astFormat, r.locEnd = o.locEnd, r.locStart = o.locStart;
    let u = (n = a.printers) != null && n[o.astFormat] ? a : rm(r.plugins, o.astFormat), l = await im(u, o.astFormat);
    r.printer = l;
    let c = u.defaultOptions ? Object.fromEntries(Object.entries(u.defaultOptions).filter(([, p]) => p !== void 0)) : {}, f = { ...s, ...c };
    for (let [p, m] of Object.entries(f)) (r[p] === null || r[p] === void 0) && (r[p] = m);
    return r.parser === "json" && (r.trailingComma = "none"), nc(r, i, { passThrough: Object.keys(Ao), ...t });
  }
  async function am(e, t) {
    let n = await Hl(t), r = n.preprocess ? n.preprocess(e, t) : e;
    t.originalText = r;
    let i;
    try {
      i = await n.parse(r, t, t);
    } catch (s) {
      om(s, e);
    }
    return { text: r, ast: i };
  }
  function om(e, t) {
    let { loc: n } = e;
    if (n) {
      let r = (0, ic.codeFrameColumns)(t, n, { highlightCode: !0 });
      throw e.message += `
` + r, e.codeFrame = r, e;
    }
    throw e;
  }
  async function um(e, t, n, r, i) {
    let {
      embeddedLanguageFormatting: s,
      printer: { embed: a, hasPrettierIgnore: o = () => !1, getVisitorKeys: u }
    } = n;
    if (!a || s !== "auto") return;
    if (a.length > 2)
      throw new Error(
        "printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed"
      );
    let l = Ri(a.getVisitorKeys ?? u), c = [];
    m();
    let f = e.stack;
    for (let { print: g, node: y, pathStack: S } of c)
      try {
        e.stack = S;
        let C = await g(p, t, e, n);
        C && i.set(y, C);
      } catch (C) {
        if (globalThis.PRETTIER_DEBUG) throw C;
      }
    e.stack = f;
    function p(g, y) {
      return lm(g, y, n, r);
    }
    function m() {
      let { node: g } = e;
      if (g === null || typeof g != "object" || o(e)) return;
      for (let S of l(g)) Array.isArray(g[S]) ? e.each(m, S) : e.call(m, S);
      let y = a(e, n);
      if (y) {
        if (typeof y == "function") {
          c.push({ print: y, node: g, pathStack: [...e.stack] });
          return;
        }
        i.set(g, y);
      }
    }
  }
  async function lm(e, t, n, r) {
    let i = await yr({ ...n, ...t, parentParser: n.parser, originalText: e }, { passThrough: !0 }), { ast: s } = await Xr(e, i), a = await r(s, i);
    return Sl(a);
  }
  function cm(e, t) {
    let {
      originalText: n,
      [Symbol.for("comments")]: r,
      locStart: i,
      locEnd: s,
      [Symbol.for("printedComments")]: a
    } = t, { node: o } = e, u = i(o), l = s(o);
    for (let c of r) i(c) >= u && s(c) <= l && a.add(c);
    return n.slice(u, l);
  }
  async function Ds(e, t) {
    ({ ast: e } = await Yl(e, t));
    let n = /* @__PURE__ */ new Map(), r = new L1(e), i = B1(t), s = /* @__PURE__ */ new Map();
    await um(r, o, t, Ds, s);
    let a = await zl(r, t, o, void 0, s);
    return B2(t), a;
    function o(l, c) {
      return l === void 0 || l === r ? u(c) : Array.isArray(l) ? r.call(() => u(c), ...l) : r.call(() => u(c), l);
    }
    function u(l) {
      i(r);
      let c = r.node;
      if (c == null) return "";
      let f = c && typeof c == "object" && l === void 0;
      if (f && n.has(c)) return n.get(c);
      let p = zl(r, t, o, l, s);
      return f && n.set(c, p), p;
    }
  }
  function zl(e, t, n, r, i) {
    var s;
    let { node: a } = e, { printer: o } = t, u;
    return (s = o.hasPrettierIgnore) != null && s.call(o, e) ? u = sc(e, t) : i.has(a) ? u = i.get(a) : u = o.print(e, t, n, r), a === t.cursorNode && (u = Al(u, (l) => [_s, l, _s])), o.printComment && (!o.willPrintOwnComments || !o.willPrintOwnComments(e, t)) && (u = M2(e, u, t)), u;
  }
  async function Yl(e, t) {
    let n = e.comments ?? [];
    t[Symbol.for("comments")] = n, t[Symbol.for("tokens")] = e.tokens ?? [], t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), w2(e, t);
    let {
      printer: { preprocess: r }
    } = t;
    return e = r ? await r(e, t) : e, { ast: e, comments: n };
  }
  function dm(e, t) {
    let { cursorOffset: n, locStart: r, locEnd: i } = t, s = Ri(t.printer.getVisitorKeys), a = (u) => r(u) <= n && i(u) >= n, o = e;
    for (let u of N2(e, { getVisitorKeys: s, filter: a })) o = u;
    return o;
  }
  function fm(e, t) {
    let {
      printer: { massageAstNode: n, getVisitorKeys: r }
    } = t;
    if (!n) return e;
    let i = Ri(r), s = n.ignoredProperties ?? /* @__PURE__ */ new Set();
    return a(e);
    function a(o, u) {
      if (!(o !== null && typeof o == "object")) return o;
      if (Array.isArray(o)) return o.map((p) => a(p, u)).filter(Boolean);
      let l = {}, c = new Set(i(o));
      for (let p in o)
        !Object.prototype.hasOwnProperty.call(o, p) || s.has(p) || (c.has(p) ? l[p] = a(o[p], o) : l[p] = o[p]);
      let f = n(o, l, u);
      if (f !== null) return f ?? l;
    }
  }
  function hm(e, t) {
    let n = [e.node, ...e.parentNodes], r = /* @__PURE__ */ new Set([t.node, ...t.parentNodes]);
    return n.find((i) => Fo.has(i.type) && r.has(i));
  }
  function Jl(e) {
    let t = e.length - 1;
    for (; ; ) {
      let n = e[t];
      if ((n == null ? void 0 : n.type) === "Program" || (n == null ? void 0 : n.type) === "File") t--;
      else break;
    }
    return e.slice(0, t + 1);
  }
  function pm(e, t, { locStart: n, locEnd: r }) {
    let i = e.node, s = t.node;
    if (i === s) return { startNode: i, endNode: s };
    let a = n(e.node);
    for (let u of Jl(t.parentNodes))
      if (n(u) >= a) s = u;
      else break;
    let o = r(t.node);
    for (let u of Jl(e.parentNodes)) {
      if (r(u) <= o) i = u;
      else break;
      if (i === s) break;
    }
    return { startNode: i, endNode: s };
  }
  function Ja(e, t, n, r, i = [], s) {
    let { locStart: a, locEnd: o } = n, u = a(e), l = o(e);
    if (!(t > l || t < u || s === "rangeEnd" && t === u || s === "rangeStart" && t === l)) {
      for (let c of Wa(e, n)) {
        let f = Ja(c, t, n, r, [e, ...i], s);
        if (f) return f;
      }
      if (!r || r(e, i[0])) return { node: e, parentNodes: i };
    }
  }
  function mm(e, t) {
    return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
  }
  function Xl(e, t, n) {
    if (!t) return !1;
    switch (e.parser) {
      case "flow":
      case "babel":
      case "babel-flow":
      case "babel-ts":
      case "typescript":
      case "acorn":
      case "espree":
      case "meriyah":
      case "__babel_estree":
        return mm(t.type, n == null ? void 0 : n.type);
      case "json":
      case "json5":
      case "jsonc":
      case "json-stringify":
        return Fo.has(t.type);
      case "graphql":
        return lc.has(t.kind);
      case "vue":
        return t.tag !== "root";
    }
    return !1;
  }
  function gm(e, t, n) {
    let { rangeStart: r, rangeEnd: i, locStart: s, locEnd: a } = t;
    Ss.ok(i > r);
    let o = e.slice(r, i).search(/\S/), u = o === -1;
    if (!u) for (r += o; i > r && !/\S/.test(e[i - 1]); --i) ;
    let l = Ja(n, r, t, (m, g) => Xl(t, m, g), [], "rangeStart"), c = u ? l : Ja(n, i, t, (m) => Xl(t, m), [], "rangeEnd");
    if (!l || !c) return { rangeStart: 0, rangeEnd: 0 };
    let f, p;
    if (uc(t)) {
      let m = hm(l, c);
      f = m, p = m;
    } else ({ startNode: f, endNode: p } = pm(l, c, t));
    return { rangeStart: Math.min(s(f), s(p)), rangeEnd: Math.max(a(f), a(p)) };
  }
  async function Ql(e, t, n = 0) {
    if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
    let { ast: r, text: i } = await Xr(e, t);
    t.cursorOffset >= 0 && (t.cursorNode = ac(r, t));
    let s = await Ds(r, t);
    n > 0 && (s = Nl([Jn, s], n, t.tabWidth));
    let a = ms(s, t);
    if (n > 0) {
      let u = a.formatted.trim();
      a.cursorNodeStart !== void 0 && (a.cursorNodeStart -= a.formatted.indexOf(u)), a.formatted = u + Ua(t.endOfLine);
    }
    let o = t[Symbol.for("comments")];
    if (t.cursorOffset >= 0) {
      let u, l, c, f, p;
      if (t.cursorNode && a.cursorNodeText ? (u = t.locStart(t.cursorNode), l = i.slice(u, t.locEnd(t.cursorNode)), c = t.cursorOffset - u, f = a.cursorNodeStart, p = a.cursorNodeText) : (u = 0, l = i, c = t.cursorOffset, f = 0, p = a.formatted), l === p)
        return { formatted: a.formatted, cursorOffset: f + c, comments: o };
      let m = l.split("");
      m.splice(c, 0, Io);
      let g = p.split(""), y = (0, v1.diffArrays)(m, g), S = f;
      for (let C of y)
        if (C.removed) {
          if (C.value.includes(Io)) break;
        } else S += C.count;
      return { formatted: a.formatted, cursorOffset: S, comments: o };
    }
    return { formatted: a.formatted, cursorOffset: -1, comments: o };
  }
  async function Dm(e, t) {
    let { ast: n, text: r } = await Xr(e, t), { rangeStart: i, rangeEnd: s } = gm(r, t, n), a = r.slice(i, s), o = Math.min(
      i,
      r.lastIndexOf(
        `
`,
        i
      ) + 1
    ), u = r.slice(o, i).match(/^\s*/)[0], l = Cs(u, t.tabWidth), c = await Ql(
      a,
      {
        ...t,
        rangeStart: 0,
        rangeEnd: Number.POSITIVE_INFINITY,
        cursorOffset: t.cursorOffset > i && t.cursorOffset <= s ? t.cursorOffset - i : -1,
        endOfLine: "lf"
      },
      l
    ), f = c.formatted.trimEnd(), { cursorOffset: p } = t;
    p > s ? p += f.length - a.length : c.cursorOffset >= 0 && (p = c.cursorOffset + i);
    let m = r.slice(0, i) + f + r.slice(s);
    if (t.endOfLine !== "lf") {
      let g = Ua(t.endOfLine);
      p >= 0 && g === `\r
` && (p += yl(
        m.slice(0, p),
        `
`
      )), m = Oi(
        !1,
        m,
        `
`,
        g
      );
    }
    return { formatted: m, cursorOffset: p, comments: c.comments };
  }
  function Xa(e, t, n) {
    return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? n : t;
  }
  function Zl(e, t) {
    let { cursorOffset: n, rangeStart: r, rangeEnd: i } = t;
    return n = Xa(e, n, -1), r = Xa(e, r, 0), i = Xa(e, i, e.length), { ...t, cursorOffset: n, rangeStart: r, rangeEnd: i };
  }
  function e1(e, t) {
    let { cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: s } = Zl(e, t), a = e.charAt(0) === wo;
    if (a && (e = e.slice(1), n--, r--, i--), s === "auto" && (s = Wp(e)), e.includes("\r")) {
      let o = (u) => yl(
        e.slice(0, Math.max(u, 0)),
        `\r
`
      );
      n -= o(n), r -= o(r), i -= o(i), e = zp(e);
    }
    return {
      hasBOM: a,
      text: e,
      options: Zl(e, { ...t, cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: s })
    };
  }
  async function t1(e, t) {
    let n = await Hl(t);
    return !n.hasPragma || n.hasPragma(e);
  }
  async function n1(e, t) {
    let { hasBOM: n, text: r, options: i } = e1(e, await yr(t));
    if (i.rangeStart >= i.rangeEnd && r !== "" || i.requirePragma && !await t1(r, i))
      return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
    let s;
    return i.rangeStart > 0 || i.rangeEnd < r.length ? s = await Dm(r, i) : (!i.requirePragma && i.insertPragma && i.printer.insertPragma && !await t1(r, i) && (r = i.printer.insertPragma(r)), s = await Ql(r, i)), n && (s.formatted = wo + s.formatted, s.cursorOffset >= 0 && s.cursorOffset++), s;
  }
  async function Em(e, t, n) {
    let { text: r, options: i } = e1(e, await yr(t)), s = await Xr(r, i);
    return n && (n.preprocessForPrint && (s.ast = await Yl(s.ast, i)), n.massage && (s.ast = oc(s.ast, i))), s;
  }
  async function ym(e, t) {
    t = await yr(t);
    let n = await Ds(e, t);
    return ms(n, t);
  }
  async function bm(e, t) {
    let n = s2(e), { formatted: r } = await n1(n, { ...t, parser: "__js_expression" });
    return r;
  }
  async function vm(e, t) {
    t = await yr(t);
    let { ast: n } = await Xr(e, t);
    return Ds(n, t);
  }
  async function _m(e, t) {
    return ms(e, await yr(t));
  }
  function Nm(e, t) {
    if (t === !1) return !1;
    if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
      for (let n = t + 2; n < e.length; ++n)
        if (e.charAt(n) === "*" && e.charAt(n + 1) === "/") return n + 2;
    }
    return t;
  }
  function Cm(e, t) {
    return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? ho(e, t) : t;
  }
  function Tm(e, t) {
    let n = null, r = t;
    for (; r !== n; ) n = r, r = Fn(e, r), r = Os(e, r), r = ks(e, r), r = Xn(e, r);
    return r;
  }
  function Sm(e, t) {
    let n = null, r = t;
    for (; r !== n; ) n = r, r = fo(e, r), r = Os(e, r), r = Fn(e, r);
    return r = ks(e, r), r = Xn(e, r), r !== !1 && wn(e, r);
  }
  function Am(e, t) {
    let n = e.lastIndexOf(`
`);
    return n === -1 ? 0 : Cs(e.slice(n + 1).match(/^[\t ]*/)[0], t);
  }
  function Fm(e) {
    if (typeof e != "string") throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  function wm(e, t) {
    let n = e.match(new RegExp(`(${Fm(t)})+`, "g"));
    return n === null ? 0 : n.reduce((r, i) => Math.max(r, i.length / t.length), 0);
  }
  function Im(e, t) {
    let n = Rs(e, t);
    return n === !1 ? "" : e.charAt(n);
  }
  function xm(e, t, n) {
    for (let r = t; r < n; ++r)
      if (e.charAt(r) === `
`)
        return !0;
    return !1;
  }
  function Lm(e, t, n = {}) {
    return Fn(e, n.backwards ? t - 1 : t, n) !== t;
  }
  function Om(e, t, n) {
    let r = t === '"' ? "'" : '"', i = Oi(
      !1,
      e,
      /\\(.)|(["'])/gs,
      (s, a, o) => a === r ? a : o === t ? "\\" + o : o || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(a) ? a : "\\" + a)
    );
    return t + i + t;
  }
  function km(e, t, n) {
    return Rs(e, n(t));
  }
  function Rm(e, t) {
    return arguments.length === 2 || typeof t == "number" ? Rs(e, t) : km(...arguments);
  }
  function Mm(e, t, n) {
    return ws(e, n(t));
  }
  function Bm(e, t) {
    return arguments.length === 2 || typeof t == "number" ? ws(e, t) : Mm(...arguments);
  }
  function Pm(e, t, n) {
    return Ms(e, n(t));
  }
  function Vm(e, t) {
    return arguments.length === 2 || typeof t == "number" ? Ms(e, t) : Pm(...arguments);
  }
  function pr(e, t = 1) {
    return async (...n) => {
      let r = n[t] ?? {}, i = r.plugins ?? [];
      return n[t] = { ...r, plugins: Array.isArray(i) ? i : Object.values(i) }, e(...n);
    };
  }
  async function Qa(e, t) {
    let { formatted: n } = await Bs(e, { ...t, cursorOffset: -1 });
    return n;
  }
  async function r1(e, t) {
    return await Qa(e, t) === e;
  }
  var i1, xi, s1, a1, o1, u1, Za, l1, Wr, Li, eo, zr, c1, d1, f1, Yr, h1, p1, Es, to, m1, g1, D1, E1, y1, no, b1, Oi, v1, Wn, dn, zn, fn, hn, pn, _t, Yt, It, mn, gn, Dn, at, Jt, Rt, ro, Yn, _1, N1, mr, io, ys, so, Xt, bs, C1, ki, T1, vs, ao, oo, S1, Jn, uo, _s, A1, rt, F1, w1, I1, Ns, Nt, Qt, Jr, Cs, gr, lo, Ts, x1, L1, co, Ss, O1, k1, Fn, fo, ho, Xn, wn, R1, po, M1, Ri, As, Fs, mo, ws, B1, go, Do, P1, V1, $1, Dr, Eo, U1, Er, yo, Mi, bo, j1, vo, Is, _o, No, K1, In, q1, G1, H1, W1, z1, Y1, J1, Co, X1, Q1, Z1, ec, tc, To, nc, rc, So, Ao, yr, ic, Xr, sc, ac, oc, uc, Fo, lc, wo, Io, xs, cc, dc, fc, xo, Ls, Os, ks, Rs, Ms, hc, pc, mc, gc, Dc, Ec, Bs, Lo, Oo, yc, $m = Vp(() => {
    i1 = Object.create, xi = Object.defineProperty, s1 = Object.getOwnPropertyDescriptor, a1 = Object.getOwnPropertyNames, o1 = Object.getPrototypeOf, u1 = Object.prototype.hasOwnProperty, Za = (e) => {
      throw TypeError(e);
    }, l1 = (e, t) => () => (e && (t = e(e = 0)), t), Wr = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Li = (e, t) => {
      for (var n in t) xi(e, n, { get: t[n], enumerable: !0 });
    }, eo = (e, t, n, r) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of a1(t))
          !u1.call(e, i) && i !== n && xi(e, i, { get: () => t[i], enumerable: !(r = s1(t, i)) || r.enumerable });
      return e;
    }, zr = (e, t, n) => (n = e != null ? i1(o1(e)) : {}, eo(t || !e || !e.__esModule ? xi(n, "default", { value: e, enumerable: !0 }) : n, e)), c1 = (e) => eo(xi({}, "__esModule", { value: !0 }), e), d1 = (e, t, n) => t.has(e) || Za("Cannot " + n), f1 = (e, t, n) => t.has(e) ? Za("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Yr = (e, t, n) => (d1(e, t, "access private method"), n), h1 = Wr((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t;
      function t() {
      }
      t.prototype = {
        diff: function(r, i) {
          var s, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = a.callback;
          typeof a == "function" && (o = a, a = {}), this.options = a;
          var u = this;
          function l(O) {
            return o ? (setTimeout(function() {
              o(void 0, O);
            }, 0), !0) : O;
          }
          r = this.castInput(r), i = this.castInput(i), r = this.removeEmpty(this.tokenize(r)), i = this.removeEmpty(this.tokenize(i));
          var c = i.length, f = r.length, p = 1, m = c + f;
          a.maxEditLength && (m = Math.min(m, a.maxEditLength));
          var g = (s = a.timeout) !== null && s !== void 0 ? s : 1 / 0, y = Date.now() + g, S = [{ oldPos: -1, lastComponent: void 0 }], C = this.extractCommon(S[0], i, r, 0);
          if (S[0].oldPos + 1 >= f && C + 1 >= c)
            return l([{ value: this.join(i), count: i.length }]);
          var w = -1 / 0, A = 1 / 0;
          function T() {
            for (var O = Math.max(w, -p); O <= Math.min(A, p); O += 2) {
              var k = void 0, X = S[O - 1], F = S[O + 1];
              X && (S[O - 1] = void 0);
              var j = !1;
              if (F) {
                var P = F.oldPos - O;
                j = F && 0 <= P && P < c;
              }
              var fe = X && X.oldPos + 1 < f;
              if (!j && !fe) {
                S[O] = void 0;
                continue;
              }
              if (!fe || j && X.oldPos + 1 < F.oldPos ? k = u.addToPath(F, !0, void 0, 0) : k = u.addToPath(X, void 0, !0, 1), C = u.extractCommon(k, i, r, O), k.oldPos + 1 >= f && C + 1 >= c)
                return l(n(u, k.lastComponent, i, r, u.useLongestToken));
              S[O] = k, k.oldPos + 1 >= f && (A = Math.min(A, O - 1)), C + 1 >= c && (w = Math.max(w, O + 1));
            }
            p++;
          }
          if (o)
            (function O() {
              setTimeout(function() {
                if (p > m || Date.now() > y) return o();
                T() || O();
              }, 0);
            })();
          else
            for (; p <= m && Date.now() <= y; ) {
              var I = T();
              if (I) return I;
            }
        },
        addToPath: function(r, i, s, a) {
          var o = r.lastComponent;
          return o && o.added === i && o.removed === s ? {
            oldPos: r.oldPos + a,
            lastComponent: {
              count: o.count + 1,
              added: i,
              removed: s,
              previousComponent: o.previousComponent
            }
          } : {
            oldPos: r.oldPos + a,
            lastComponent: { count: 1, added: i, removed: s, previousComponent: o }
          };
        },
        extractCommon: function(r, i, s, a) {
          for (var o = i.length, u = s.length, l = r.oldPos, c = l - a, f = 0; c + 1 < o && l + 1 < u && this.equals(i[c + 1], s[l + 1]); )
            c++, l++, f++;
          return f && (r.lastComponent = { count: f, previousComponent: r.lastComponent }), r.oldPos = l, c;
        },
        equals: function(r, i) {
          return this.options.comparator ? this.options.comparator(r, i) : r === i || this.options.ignoreCase && r.toLowerCase() === i.toLowerCase();
        },
        removeEmpty: function(r) {
          for (var i = [], s = 0; s < r.length; s++) r[s] && i.push(r[s]);
          return i;
        },
        castInput: function(r) {
          return r;
        },
        tokenize: function(r) {
          return r.split("");
        },
        join: function(r) {
          return r.join("");
        }
      };
      function n(r, i, s, a, o) {
        for (var u = [], l; i; )
          u.push(i), l = i.previousComponent, delete i.previousComponent, i = l;
        u.reverse();
        for (var c = 0, f = u.length, p = 0, m = 0; c < f; c++) {
          var g = u[c];
          if (g.removed) {
            if (g.value = r.join(a.slice(m, m + g.count)), m += g.count, c && u[c - 1].added) {
              var y = u[c - 1];
              u[c - 1] = u[c], u[c] = y;
            }
          } else {
            if (!g.added && o) {
              var S = s.slice(p, p + g.count);
              S = S.map(function(w, A) {
                var T = a[m + A];
                return T.length > w.length ? T : w;
              }), g.value = r.join(S);
            } else g.value = r.join(s.slice(p, p + g.count));
            p += g.count, g.added || (m += g.count);
          }
        }
        var C = u[f - 1];
        return f > 1 && typeof C.value == "string" && (C.added || C.removed) && r.equals("", C.value) && (u[f - 2].value += C.value, u.pop()), u;
      }
    }), p1 = Wr((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }), e.diffArrays = i, e.arrayDiff = void 0;
      var t = n(h1());
      function n(s) {
        return s && s.__esModule ? s : { default: s };
      }
      var r = new t.default();
      e.arrayDiff = r, r.tokenize = function(s) {
        return s.slice();
      }, r.join = r.removeEmpty = function(s) {
        return s;
      };
      function i(s, a, o) {
        return r.diff(s, a, o);
      }
    }), Es = Wr((e, t) => {
      var n = new Proxy(String, { get: () => n });
      t.exports = n;
    }), to = {}, Li(to, { default: () => g1, shouldHighlight: () => m1 }), D1 = l1(() => {
      m1 = () => !1, g1 = String;
    }), E1 = Wr((e, t) => {
      var n = String, r = function() {
        return {
          isColorSupported: !1,
          reset: n,
          bold: n,
          dim: n,
          italic: n,
          underline: n,
          inverse: n,
          hidden: n,
          strikethrough: n,
          black: n,
          red: n,
          green: n,
          yellow: n,
          blue: n,
          magenta: n,
          cyan: n,
          white: n,
          gray: n,
          bgBlack: n,
          bgRed: n,
          bgGreen: n,
          bgYellow: n,
          bgBlue: n,
          bgMagenta: n,
          bgCyan: n,
          bgWhite: n
        };
      };
      t.exports = r(), t.exports.createColors = r;
    }), y1 = Wr((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }), e.codeFrameColumns = m, e.default = g;
      var t = (D1(), c1(to)), n = i(E1(), !0);
      function r(y) {
        if (typeof WeakMap != "function") return null;
        var S = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap();
        return (r = function(w) {
          return w ? C : S;
        })(y);
      }
      function i(y, S) {
        if (y === null || typeof y != "object" && typeof y != "function")
          return { default: y };
        var C = r(S);
        if (C && C.has(y)) return C.get(y);
        var w = { __proto__: null }, A = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var T in y)
          if (T !== "default" && {}.hasOwnProperty.call(y, T)) {
            var I = A ? Object.getOwnPropertyDescriptor(y, T) : null;
            I && (I.get || I.set) ? Object.defineProperty(w, T, I) : w[T] = y[T];
          }
        return w.default = y, C && C.set(y, w), w;
      }
      var s = n.default, a = (y, S) => (C) => y(S(C)), o;
      function u(y) {
        return y ? (o != null || (o = (0, n.createColors)(!0)), o) : s;
      }
      var l = !1;
      function c(y) {
        return { gutter: y.gray, marker: a(y.red, y.bold), message: a(y.red, y.bold) };
      }
      var f = /\r\n|[\n\r\u2028\u2029]/;
      function p(y, S, C) {
        let w = Object.assign({ column: 0, line: -1 }, y.start), A = Object.assign({}, w, y.end), { linesAbove: T = 2, linesBelow: I = 3 } = C || {}, O = w.line, k = w.column, X = A.line, F = A.column, j = Math.max(O - (T + 1), 0), P = Math.min(S.length, X + I);
        O === -1 && (j = 0), X === -1 && (P = S.length);
        let fe = X - O, U = {};
        if (fe)
          for (let M = 0; M <= fe; M++) {
            let K = M + O;
            if (!k) U[K] = !0;
            else if (M === 0) {
              let Y = S[K - 1].length;
              U[K] = [k, Y - k + 1];
            } else if (M === fe) U[K] = [0, F];
            else {
              let Y = S[K - M].length;
              U[K] = [0, Y];
            }
          }
        else k === F ? k ? U[O] = [k, 0] : U[O] = !0 : U[O] = [k, F - k];
        return { start: j, end: P, markerLines: U };
      }
      function m(y, S, C = {}) {
        let w = (C.highlightCode || C.forceColor) && (0, t.shouldHighlight)(C), A = u(C.forceColor), T = c(A), I = (U, M) => w ? U(M) : M, O = y.split(f), { start: k, end: X, markerLines: F } = p(S, O, C), j = S.start && typeof S.start.column == "number", P = String(X).length, fe = (w ? (0, t.default)(y, C) : y).split(f, X).slice(k, X).map((U, M) => {
          let K = k + 1 + M, Y = ` ${` ${K}`.slice(-P)} |`, Z = F[K], se = !F[K + 1];
          if (Z) {
            let re = "";
            if (Array.isArray(Z)) {
              let De = U.slice(0, Math.max(Z[0] - 1, 0)).replace(/[^\t]/g, " "), Ee = Z[1] || 1;
              re = [
                `
 `,
                I(T.gutter, Y.replace(/\d/g, " ")),
                " ",
                De,
                I(T.marker, "^").repeat(Ee)
              ].join(""), se && C.message && (re += " " + I(T.message, C.message));
            }
            return [
              I(T.marker, ">"),
              I(T.gutter, Y),
              U.length > 0 ? ` ${U}` : "",
              re
            ].join("");
          } else return ` ${I(T.gutter, Y)}${U.length > 0 ? ` ${U}` : ""}`;
        }).join(`
`);
        return C.message && !j && (fe = `${" ".repeat(P + 1)}${C.message}
${fe}`), w ? A.reset(fe) : fe;
      }
      function g(y, S, C, w = {}) {
        if (!l) {
          l = !0;
          let A = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
          {
            let T = new Error(A);
            T.name = "DeprecationWarning", console.warn(new Error(A));
          }
        }
        return C = Math.max(C, 0), m(y, { start: { column: C, line: S } }, w);
      }
    }), no = {}, Li(no, {
      __debug: () => Oo,
      check: () => r1,
      doc: () => xs,
      format: () => Qa,
      formatWithCursor: () => Bs,
      getSupportInfo: () => Lo,
      util: () => Ls,
      version: () => xo
    }), b1 = (e, t, n, r) => {
      if (!(e && t == null))
        return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
    }, Oi = b1, v1 = zr(p1(), 1), Wn = "string", dn = "array", zn = "cursor", fn = "indent", hn = "align", pn = "trim", _t = "group", Yt = "fill", It = "if-break", mn = "indent-if-break", gn = "line-suffix", Dn = "line-suffix-boundary", at = "line", Jt = "label", Rt = "break-parent", ro = /* @__PURE__ */ new Set([zn, fn, hn, pn, _t, Yt, It, mn, gn, Dn, at, Jt, Rt]), Yn = Yp, _1 = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e), N1 = class extends Error {
      constructor(t) {
        super(Jp(t));
        Je(this, "name", "InvalidDocError");
        this.doc = t;
      }
    }, mr = N1, io = {}, ys = Xp, so = () => {
    }, Xt = so, bs = so, C1 = { type: Dn }, ki = { type: Rt }, T1 = { type: pn }, vs = { type: at, hard: !0 }, ao = { type: at, hard: !0, literal: !0 }, oo = { type: at }, S1 = { type: at, soft: !0 }, Jn = [vs, ki], uo = [ao, ki], _s = { type: zn }, A1 = (e, t, n) => {
      if (!(e && t == null))
        return Array.isArray(t) || typeof t == "string" ? t[n < 0 ? t.length + n : n] : t.at(n);
    }, rt = A1, F1 = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g, w1 = (e) => !(a2(e) || o2(e)), I1 = /[^\x20-\x7F]/, Ns = u2, Nt = Symbol("MODE_BREAK"), Qt = Symbol("MODE_FLAT"), Jr = Symbol("cursor"), Cs = v2, x1 = class {
      constructor(e) {
        f1(this, gr), this.stack = [e];
      }
      get key() {
        let { stack: e, siblings: t } = this;
        return rt(!1, e, t === null ? -2 : -4) ?? null;
      }
      get index() {
        return this.siblings === null ? null : rt(!1, this.stack, -2);
      }
      get node() {
        return rt(!1, this.stack, -1);
      }
      get parent() {
        return this.getNode(1);
      }
      get grandparent() {
        return this.getNode(2);
      }
      get isInArray() {
        return this.siblings !== null;
      }
      get siblings() {
        let { stack: e } = this, t = rt(!1, e, -3);
        return Array.isArray(t) ? t : null;
      }
      get next() {
        let { siblings: e } = this;
        return e === null ? null : e[this.index + 1];
      }
      get previous() {
        let { siblings: e } = this;
        return e === null ? null : e[this.index - 1];
      }
      get isFirst() {
        return this.index === 0;
      }
      get isLast() {
        let { siblings: e, index: t } = this;
        return e !== null && t === e.length - 1;
      }
      get isRoot() {
        return this.stack.length === 1;
      }
      get root() {
        return this.stack[0];
      }
      get ancestors() {
        return [...Yr(this, gr, Ts).call(this)];
      }
      getName() {
        let { stack: e } = this, { length: t } = e;
        return t > 1 ? rt(!1, e, -2) : null;
      }
      getValue() {
        return rt(!1, this.stack, -1);
      }
      getNode(e = 0) {
        let t = Yr(this, gr, lo).call(this, e);
        return t === -1 ? null : this.stack[t];
      }
      getParentNode(e = 0) {
        return this.getNode(e + 1);
      }
      call(e, ...t) {
        let { stack: n } = this, { length: r } = n, i = rt(!1, n, -1);
        for (let s of t) i = i[s], n.push(s, i);
        try {
          return e(this);
        } finally {
          n.length = r;
        }
      }
      callParent(e, t = 0) {
        let n = Yr(this, gr, lo).call(this, t + 1), r = this.stack.splice(n + 1);
        try {
          return e(this);
        } finally {
          this.stack.push(...r);
        }
      }
      each(e, ...t) {
        let { stack: n } = this, { length: r } = n, i = rt(!1, n, -1);
        for (let s of t) i = i[s], n.push(s, i);
        try {
          for (let s = 0; s < i.length; ++s) n.push(s, i[s]), e(this, s, i), n.length -= 2;
        } finally {
          n.length = r;
        }
      }
      map(e, ...t) {
        let n = [];
        return this.each((r, i, s) => {
          n[i] = e(r, i, s);
        }, ...t), n;
      }
      match(...e) {
        let t = this.stack.length - 1, n = null, r = this.stack[t--];
        for (let i of e) {
          if (r === void 0) return !1;
          let s = null;
          if (typeof n == "number" && (s = n, n = this.stack[t--], r = this.stack[t--]), i && !i(r, n, s))
            return !1;
          n = this.stack[t--], r = this.stack[t--];
        }
        return !0;
      }
      findAncestor(e) {
        for (let t of Yr(this, gr, Ts).call(this)) if (e(t)) return t;
      }
      hasAncestor(e) {
        for (let t of Yr(this, gr, Ts).call(this)) if (e(t)) return !0;
        return !1;
      }
    }, gr = /* @__PURE__ */ new WeakSet(), lo = function(e) {
      let { stack: t } = this;
      for (let n = t.length - 1; n >= 0; n -= 2) if (!Array.isArray(t[n]) && --e < 0) return n;
      return -1;
    }, Ts = function* () {
      let { stack: e } = this;
      for (let t = e.length - 3; t >= 0; t -= 2) {
        let n = e[t];
        Array.isArray(n) || (yield n);
      }
    }, L1 = x1, co = new Proxy(() => {
    }, { get: () => co }), Ss = co, O1 = _2, k1 = Ii(/\s/), Fn = Ii(" 	"), fo = Ii(",; 	"), ho = Ii(/[^\n\r]/), Xn = C2, wn = T2, R1 = S2, po = /* @__PURE__ */ new Set([
      "tokens",
      "comments",
      "parent",
      "enclosingNode",
      "precedingNode",
      "followingNode"
    ]), M1 = (e) => Object.keys(e).filter((t) => !po.has(t)), Ri = A2, As = /* @__PURE__ */ new WeakMap(), Fs = () => !1, mo = (e) => !/[\S\n\u2028\u2029]/.test(e), ws = L2, B1 = P2, go = class extends Error {
      constructor() {
        super(...arguments);
        Je(this, "name", "ConfigError");
      }
    }, Do = class extends Error {
      constructor() {
        super(...arguments);
        Je(this, "name", "UndefinedParserError");
      }
    }, P1 = {
      cursorOffset: {
        category: "Special",
        type: "int",
        default: -1,
        range: { start: -1, end: 1 / 0, step: 1 },
        description: "Print (to stderr) where a cursor at the given position would move to after formatting.",
        cliCategory: "Editor"
      },
      endOfLine: {
        category: "Global",
        type: "choice",
        default: "lf",
        description: "Which end of line characters to apply.",
        choices: [
          {
            value: "lf",
            description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
          },
          {
            value: "crlf",
            description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
          },
          {
            value: "cr",
            description: "Carriage Return character only (\\r), used very rarely"
          },
          {
            value: "auto",
            description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`
          }
        ]
      },
      filepath: {
        category: "Special",
        type: "path",
        description: "Specify the input filepath. This will be used to do parser inference.",
        cliName: "stdin-filepath",
        cliCategory: "Other",
        cliDescription: "Path to the file to pretend that stdin comes from."
      },
      insertPragma: {
        category: "Special",
        type: "boolean",
        default: !1,
        description: "Insert @format pragma into file's first docblock comment.",
        cliCategory: "Other"
      },
      parser: {
        category: "Global",
        type: "choice",
        default: void 0,
        description: "Which parser to use.",
        exception: (e) => typeof e == "string" || typeof e == "function",
        choices: [
          { value: "flow", description: "Flow" },
          { value: "babel", description: "JavaScript" },
          { value: "babel-flow", description: "Flow" },
          { value: "babel-ts", description: "TypeScript" },
          { value: "typescript", description: "TypeScript" },
          { value: "acorn", description: "JavaScript" },
          { value: "espree", description: "JavaScript" },
          { value: "meriyah", description: "JavaScript" },
          { value: "css", description: "CSS" },
          { value: "less", description: "Less" },
          { value: "scss", description: "SCSS" },
          { value: "json", description: "JSON" },
          { value: "json5", description: "JSON5" },
          { value: "jsonc", description: "JSON with Comments" },
          { value: "json-stringify", description: "JSON.stringify" },
          { value: "graphql", description: "GraphQL" },
          { value: "markdown", description: "Markdown" },
          { value: "mdx", description: "MDX" },
          { value: "vue", description: "Vue" },
          { value: "yaml", description: "YAML" },
          { value: "glimmer", description: "Ember / Handlebars" },
          { value: "html", description: "HTML" },
          { value: "angular", description: "Angular" },
          { value: "lwc", description: "Lightning Web Components" }
        ]
      },
      plugins: {
        type: "path",
        array: !0,
        default: [{ value: [] }],
        category: "Global",
        description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
        exception: (e) => typeof e == "string" || typeof e == "object",
        cliName: "plugin",
        cliCategory: "Config"
      },
      printWidth: {
        category: "Global",
        type: "int",
        default: 80,
        description: "The line length where Prettier will try wrap.",
        range: { start: 0, end: 1 / 0, step: 1 }
      },
      rangeEnd: {
        category: "Special",
        type: "int",
        default: 1 / 0,
        range: { start: 0, end: 1 / 0, step: 1 },
        description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,
        cliCategory: "Editor"
      },
      rangeStart: {
        category: "Special",
        type: "int",
        default: 0,
        range: { start: 0, end: 1 / 0, step: 1 },
        description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`,
        cliCategory: "Editor"
      },
      requirePragma: {
        category: "Special",
        type: "boolean",
        default: !1,
        description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,
        cliCategory: "Other"
      },
      tabWidth: {
        type: "int",
        category: "Global",
        default: 2,
        description: "Number of spaces per indentation level.",
        range: { start: 0, end: 1 / 0, step: 1 }
      },
      useTabs: {
        category: "Global",
        type: "boolean",
        default: !1,
        description: "Indent with tabs instead of spaces."
      },
      embeddedLanguageFormatting: {
        category: "Global",
        type: "choice",
        default: "auto",
        description: "Control how Prettier formats quoted code embedded in the file.",
        choices: [
          {
            value: "auto",
            description: "Format embedded code if Prettier can automatically identify it."
          },
          { value: "off", description: "Never automatically format embedded code." }
        ]
      }
    }, V1 = (e) => String(e).split(/[/\\]/).pop(), $1 = j2, Dr = {
      key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e),
      value(e) {
        if (e === null || typeof e != "object") return JSON.stringify(e);
        if (Array.isArray(e)) return `[${e.map((n) => Dr.value(n)).join(", ")}]`;
        let t = Object.keys(e);
        return t.length === 0 ? "{}" : `{ ${t.map((n) => `${Dr.key(n)}: ${Dr.value(e[n])}`).join(", ")} }`;
      },
      pair: ({ key: e, value: t }) => Dr.value({ [e]: t })
    }, Eo = zr(Es(), 1), U1 = (e, t, { descriptor: n }) => {
      let r = [
        `${Eo.default.yellow(typeof e == "string" ? n.key(e) : n.pair(e))} is deprecated`
      ];
      return t && r.push(
        `we now treat it as ${Eo.default.blue(typeof t == "string" ? n.key(t) : n.pair(t))}`
      ), r.join("; ") + ".";
    }, Er = zr(Es(), 1), yo = Symbol.for("vnopts.VALUE_NOT_EXIST"), Mi = Symbol.for("vnopts.VALUE_UNCHANGED"), bo = " ".repeat(2), j1 = (e, t, n) => {
      let { text: r, list: i } = n.normalizeExpectedResult(n.schemas[e].expected(n)), s = [];
      return r && s.push(Rl(e, t, r, n.descriptor)), i && s.push(
        [Rl(e, t, i.title, n.descriptor)].concat(
          i.values.map((a) => Ml(a, n.loggerPrintWidth))
        ).join(`
`)
      ), Bl(s, n.loggerPrintWidth);
    }, vo = zr(Es(), 1), Is = [], _o = [], No = (e, t, { descriptor: n, logger: r, schemas: i }) => {
      let s = [`Ignored unknown option ${vo.default.yellow(n.pair({ key: e, value: t }))}.`], a = Object.keys(i).sort().find((o) => K2(e, o) < 3);
      a && s.push(`Did you mean ${vo.default.blue(n.key(a))}?`), r.warn(s.join(" "));
    }, K1 = [
      "default",
      "expected",
      "validate",
      "deprecated",
      "forward",
      "redirect",
      "overlap",
      "preprocess",
      "postprocess"
    ], In = class {
      static create(e) {
        return q2(this, e);
      }
      constructor(e) {
        this.name = e.name;
      }
      default(e) {
      }
      expected(e) {
        return "nothing";
      }
      validate(e, t) {
        return !1;
      }
      deprecated(e, t) {
        return !1;
      }
      forward(e, t) {
      }
      redirect(e, t) {
      }
      overlap(e, t, n) {
        return e;
      }
      preprocess(e, t) {
        return e;
      }
      postprocess(e, t) {
        return Mi;
      }
    }, q1 = class extends In {
      constructor(e) {
        super(e), this._sourceName = e.sourceName;
      }
      expected(e) {
        return e.schemas[this._sourceName].expected(e);
      }
      validate(e, t) {
        return t.schemas[this._sourceName].validate(e, t);
      }
      redirect(e, t) {
        return this._sourceName;
      }
    }, G1 = class extends In {
      expected() {
        return "anything";
      }
      validate() {
        return !0;
      }
    }, H1 = class extends In {
      constructor({ valueSchema: e, name: t = e.name, ...n }) {
        super({ ...n, name: t }), this._valueSchema = e;
      }
      expected(e) {
        let { text: t, list: n } = e.normalizeExpectedResult(this._valueSchema.expected(e));
        return {
          text: t && `an array of ${t}`,
          list: n && { title: "an array of the following values", values: [{ list: n }] }
        };
      }
      validate(e, t) {
        if (!Array.isArray(e)) return !1;
        let n = [];
        for (let r of e) {
          let i = t.normalizeValidateResult(this._valueSchema.validate(r, t), r);
          i !== !0 && n.push(i.value);
        }
        return n.length === 0 ? !0 : { value: n };
      }
      deprecated(e, t) {
        let n = [];
        for (let r of e) {
          let i = t.normalizeDeprecatedResult(this._valueSchema.deprecated(r, t), r);
          i !== !1 && n.push(...i.map(({ value: s }) => ({ value: [s] })));
        }
        return n;
      }
      forward(e, t) {
        let n = [];
        for (let r of e) {
          let i = t.normalizeForwardResult(this._valueSchema.forward(r, t), r);
          n.push(...i.map(Pl));
        }
        return n;
      }
      redirect(e, t) {
        let n = [], r = [];
        for (let i of e) {
          let s = t.normalizeRedirectResult(this._valueSchema.redirect(i, t), i);
          "remain" in s && n.push(s.remain), r.push(...s.redirect.map(Pl));
        }
        return n.length === 0 ? { redirect: r } : { redirect: r, remain: n };
      }
      overlap(e, t) {
        return e.concat(t);
      }
    }, W1 = class extends In {
      expected() {
        return "true or false";
      }
      validate(e) {
        return typeof e == "boolean";
      }
    }, z1 = class extends In {
      constructor(e) {
        super(e), this._choices = W2(
          e.choices.map((t) => t && typeof t == "object" ? t : { value: t }),
          "value"
        );
      }
      expected({ descriptor: e }) {
        let t = Array.from(this._choices.keys()).map((i) => this._choices.get(i)).filter(({ hidden: i }) => !i).map((i) => i.value).sort(X2).map(e.value), n = t.slice(0, -2), r = t.slice(-2);
        return {
          text: n.concat(r.join(" or ")).join(", "),
          list: { title: "one of the following values", values: t }
        };
      }
      validate(e) {
        return this._choices.has(e);
      }
      deprecated(e) {
        let t = this._choices.get(e);
        return t && t.deprecated ? { value: e } : !1;
      }
      forward(e) {
        let t = this._choices.get(e);
        return t ? t.forward : void 0;
      }
      redirect(e) {
        let t = this._choices.get(e);
        return t ? t.redirect : void 0;
      }
    }, Y1 = class extends In {
      expected() {
        return "a number";
      }
      validate(e, t) {
        return typeof e == "number";
      }
    }, J1 = class extends Y1 {
      expected() {
        return "an integer";
      }
      validate(e, t) {
        return t.normalizeValidateResult(super.validate(e, t), e) === !0 && J2(e);
      }
    }, Co = class extends In {
      expected() {
        return "a string";
      }
      validate(e) {
        return typeof e == "string";
      }
    }, X1 = Dr, Q1 = No, Z1 = j1, ec = U1, tc = class {
      constructor(e, t) {
        let {
          logger: n = console,
          loggerPrintWidth: r = 80,
          descriptor: i = X1,
          unknown: s = Q1,
          invalid: a = Z1,
          deprecated: o = ec,
          missing: u = () => !1,
          required: l = () => !1,
          preprocess: c = (p) => p,
          postprocess: f = () => Mi
        } = t || {};
        this._utils = {
          descriptor: i,
          logger: n || { warn: () => {
          } },
          loggerPrintWidth: r,
          schemas: H2(e, "name"),
          normalizeDefaultResult: Vl,
          normalizeExpectedResult: $l,
          normalizeDeprecatedResult: jl,
          normalizeForwardResult: Ya,
          normalizeRedirectResult: ql,
          normalizeValidateResult: Ul
        }, this._unknownHandler = s, this._invalidHandler = Q2(a), this._deprecatedHandler = o, this._identifyMissing = (p, m) => !(p in m) || u(p, m), this._identifyRequired = l, this._preprocess = c, this._postprocess = f, this.cleanHistory();
      }
      cleanHistory() {
        this._hasDeprecationWarned = z2();
      }
      normalize(e) {
        let t = {}, n = [this._preprocess(e, this._utils)], r = () => {
          for (; n.length !== 0; ) {
            let i = n.shift(), s = this._applyNormalization(i, t);
            n.push(...s);
          }
        };
        r();
        for (let i of Object.keys(this._utils.schemas)) {
          let s = this._utils.schemas[i];
          if (!(i in t)) {
            let a = Vl(s.default(this._utils));
            "value" in a && n.push({ [i]: a.value });
          }
        }
        r();
        for (let i of Object.keys(this._utils.schemas)) {
          if (!(i in t)) continue;
          let s = this._utils.schemas[i], a = t[i], o = s.postprocess(a, this._utils);
          o !== Mi && (this._applyValidation(o, i, s), t[i] = o);
        }
        return this._applyPostprocess(t), this._applyRequiredCheck(t), t;
      }
      _applyNormalization(e, t) {
        let n = [], { knownKeys: r, unknownKeys: i } = this._partitionOptionKeys(e);
        for (let s of r) {
          let a = this._utils.schemas[s], o = a.preprocess(e[s], this._utils);
          this._applyValidation(o, s, a);
          let u = ({ from: f, to: p }) => {
            n.push(typeof p == "string" ? { [p]: f } : { [p.key]: p.value });
          }, l = ({ value: f, redirectTo: p }) => {
            let m = jl(a.deprecated(f, this._utils), o, !0);
            if (m !== !1)
              if (m === !0)
                this._hasDeprecationWarned(s) || this._utils.logger.warn(this._deprecatedHandler(s, p, this._utils));
              else
                for (let { value: g } of m) {
                  let y = { key: s, value: g };
                  if (!this._hasDeprecationWarned(y)) {
                    let S = typeof p == "string" ? { key: p, value: g } : p;
                    this._utils.logger.warn(this._deprecatedHandler(y, S, this._utils));
                  }
                }
          };
          Ya(a.forward(o, this._utils), o).forEach(u);
          let c = ql(a.redirect(o, this._utils), o);
          if (c.redirect.forEach(u), "remain" in c) {
            let f = c.remain;
            t[s] = s in t ? a.overlap(t[s], f, this._utils) : f, l({ value: f });
          }
          for (let { from: f, to: p } of c.redirect) l({ value: f, redirectTo: p });
        }
        for (let s of i) {
          let a = e[s];
          this._applyUnknownHandler(s, a, t, (o, u) => {
            n.push({ [o]: u });
          });
        }
        return n;
      }
      _applyRequiredCheck(e) {
        for (let t of Object.keys(this._utils.schemas))
          if (this._identifyMissing(t, e) && this._identifyRequired(t))
            throw this._invalidHandler(t, yo, this._utils);
      }
      _partitionOptionKeys(e) {
        let [t, n] = Y2(
          Object.keys(e).filter((r) => !this._identifyMissing(r, e)),
          (r) => r in this._utils.schemas
        );
        return { knownKeys: t, unknownKeys: n };
      }
      _applyValidation(e, t, n) {
        let r = Ul(n.validate(e, this._utils), e);
        if (r !== !0) throw this._invalidHandler(t, r.value, this._utils);
      }
      _applyUnknownHandler(e, t, n, r) {
        let i = this._unknownHandler(e, t, this._utils);
        if (i)
          for (let s of Object.keys(i)) {
            if (this._identifyMissing(s, i)) continue;
            let a = i[s];
            s in this._utils.schemas ? r(s, a) : n[s] = a;
          }
      }
      _applyPostprocess(e) {
        let t = this._postprocess(e, this._utils);
        if (t !== Mi) {
          if (t.delete) for (let n of t.delete) delete e[n];
          if (t.override) {
            let { knownKeys: n, unknownKeys: r } = this._partitionOptionKeys(t.override);
            for (let i of n) {
              let s = t.override[i];
              this._applyValidation(s, i, this._utils.schemas[i]), e[i] = s;
            }
            for (let i of r) {
              let s = t.override[i];
              this._applyUnknownHandler(i, s, e, (a, o) => {
                let u = this._utils.schemas[a];
                this._applyValidation(o, a, u), e[a] = o;
              });
            }
          }
        }
      }
    }, nc = em, rc = (e, t, n) => {
      if (!(e && t == null)) {
        if (t.findLast) return t.findLast(n);
        for (let r = t.length - 1; r >= 0; r--) {
          let i = t[r];
          if (n(i, r, t)) return i;
        }
      }
    }, So = rc, Ao = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null }, yr = sm, ic = zr(y1(), 1), Xr = am, sc = cm, ac = dm, oc = fm, uc = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify", Fo = /* @__PURE__ */ new Set([
      "JsonRoot",
      "ObjectExpression",
      "ArrayExpression",
      "StringLiteral",
      "NumericLiteral",
      "BooleanLiteral",
      "NullLiteral",
      "UnaryExpression",
      "TemplateLiteral"
    ]), lc = /* @__PURE__ */ new Set([
      "OperationDefinition",
      "FragmentDefinition",
      "VariableDefinition",
      "TypeExtensionDefinition",
      "ObjectTypeDefinition",
      "FieldDefinition",
      "DirectiveDefinition",
      "EnumTypeDefinition",
      "EnumValueDefinition",
      "InputValueDefinition",
      "InputObjectTypeDefinition",
      "SchemaDefinition",
      "OperationTypeDefinition",
      "InterfaceTypeDefinition",
      "UnionTypeDefinition",
      "ScalarTypeDefinition"
    ]), wo = "\uFEFF", Io = Symbol("cursor"), xs = {}, Li(xs, { builders: () => cc, printer: () => dc, utils: () => fc }), cc = {
      join: _l,
      line: oo,
      softline: S1,
      hardline: Jn,
      literalline: uo,
      group: bl,
      conditionalGroup: t2,
      fill: vl,
      lineSuffix: ja,
      lineSuffixBoundary: C1,
      cursor: _s,
      breakParent: ki,
      ifBreak: n2,
      trim: T1,
      indent: fs,
      indentIfBreak: r2,
      align: qr,
      addAlignmentToDoc: Nl,
      markAsRoot: Zp,
      dedentToRoot: Qp,
      dedent: e2,
      hardlineWithoutBreakParent: vs,
      literallineWithoutBreakParent: ao,
      label: i2,
      concat: (e) => e
    }, dc = { printDocToString: ms }, fc = {
      willBreak: c2,
      traverseDoc: ys,
      findInDoc: Ka,
      mapDoc: hs,
      removeLines: h2,
      stripTrailingHardline: Sl,
      replaceEndOfLine: g2,
      canBreak: E2
    }, xo = "3.3.2", Ls = {}, Li(Ls, {
      addDanglingComment: () => gs,
      addLeadingComment: () => Gr,
      addTrailingComment: () => Hr,
      getAlignmentSize: () => Cs,
      getIndentSize: () => hc,
      getMaxContinuousCount: () => pc,
      getNextNonSpaceNonCommentCharacter: () => mc,
      getNextNonSpaceNonCommentCharacterIndex: () => Rm,
      getStringWidth: () => Ns,
      hasNewline: () => wn,
      hasNewlineInRange: () => gc,
      hasSpaces: () => Dc,
      isNextLineEmpty: () => Vm,
      isNextLineEmptyAfterIndex: () => Ms,
      isPreviousLineEmpty: () => Bm,
      makeString: () => Ec,
      skip: () => Ii,
      skipEverythingButNewLine: () => ho,
      skipInlineComment: () => Os,
      skipNewline: () => Xn,
      skipSpaces: () => Fn,
      skipToLineEnd: () => fo,
      skipTrailingComment: () => ks,
      skipWhitespace: () => k1
    }), Os = Nm, ks = Cm, Rs = Tm, Ms = Sm, hc = Am, pc = wm, mc = Im, gc = xm, Dc = Lm, Ec = Om, Bs = pr(n1), Lo = pr(Ol, 0), Oo = {
      parse: pr(Em),
      formatAST: pr(ym),
      formatDoc: pr(bm),
      printToDoc: pr(vm),
      printDocToString: pr(_m)
    }, yc = no;
  }), Um = Hn((e, t) => {
    (function(n) {
      function r() {
        var s = n();
        return s.default || s;
      }
      if (typeof e == "object" && typeof t == "object") t.exports = r();
      else {
        var i = typeof globalThis < "u" ? globalThis : typeof Tp < "u" ? Tp : typeof self < "u" ? self : this || {};
        i.prettierPlugins = i.prettierPlugins || {}, i.prettierPlugins.graphql = r();
      }
    })(function() {
      var n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, s = Object.prototype.hasOwnProperty, a = (d, D) => {
        for (var E in D) n(d, E, { get: D[E], enumerable: !0 });
      }, o = (d, D, E, N) => {
        if (typeof D == "object" || typeof D == "function")
          for (let v of i(D))
            !s.call(d, v) && v !== E && n(d, v, { get: () => D[v], enumerable: !(N = r(D, v)) || N.enumerable });
        return d;
      }, u = (d) => o(n({}, "__esModule", { value: !0 }), d), l = {};
      a(l, { languages: () => b8, options: () => N8, parsers: () => hp, printers: () => o3 });
      var c = (d, D, E, N) => {
        if (!(d && D == null))
          return D.replaceAll ? D.replaceAll(E, N) : E.global ? D.replace(E, N) : D.split(E).join(N);
      }, f = c, p = "indent", m = "group", g = "if-break", y = "line", S = "break-parent", C = () => {
      }, w = C;
      function A(d) {
        return { type: p, contents: d };
      }
      function T(d, D = {}) {
        return w(D.expandedStates), {
          type: m,
          id: D.id,
          contents: d,
          break: !!D.shouldBreak,
          expandedStates: D.expandedStates
        };
      }
      function I(d, D = "", E = {}) {
        return { type: g, breakContents: d, flatContents: D, groupId: E.groupId };
      }
      var O = { type: S }, k = { type: y, hard: !0 }, X = { type: y }, F = { type: y, soft: !0 }, j = [k, O];
      function P(d, D) {
        let E = [];
        for (let N = 0; N < D.length; N++) N !== 0 && E.push(d), E.push(D[N]);
        return E;
      }
      function fe(d) {
        return (D, E, N) => {
          let v = !!(N != null && N.backwards);
          if (E === !1) return !1;
          let { length: B } = D, oe = E;
          for (; oe >= 0 && oe < B; ) {
            let Ae = D.charAt(oe);
            if (d instanceof RegExp) {
              if (!d.test(Ae)) return oe;
            } else if (!d.includes(Ae)) return oe;
            v ? oe-- : oe++;
          }
          return oe === -1 || oe === B ? oe : !1;
        };
      }
      var U = fe(" 	"), M = fe(",; 	"), K = fe(/[^\n\r]/);
      function Y(d, D, E) {
        let N = !!(E != null && E.backwards);
        if (D === !1) return !1;
        let v = d.charAt(D);
        if (N) {
          if (d.charAt(D - 1) === "\r" && v === `
`)
            return D - 2;
          if (v === `
` || v === "\r" || v === "\u2028" || v === "\u2029")
            return D - 1;
        } else {
          if (v === "\r" && d.charAt(D + 1) === `
`)
            return D + 2;
          if (v === `
` || v === "\r" || v === "\u2028" || v === "\u2029")
            return D + 1;
        }
        return D;
      }
      var Z = Y;
      function se(d, D, E = {}) {
        let N = U(d, E.backwards ? D - 1 : D, E), v = Z(d, N, E);
        return N !== v;
      }
      var re = se;
      function De(d, D) {
        if (D === !1) return !1;
        if (d.charAt(D) === "/" && d.charAt(D + 1) === "*") {
          for (let E = D + 2; E < d.length; ++E)
            if (d.charAt(E) === "*" && d.charAt(E + 1) === "/") return E + 2;
        }
        return D;
      }
      var Ee = De;
      function _(d, D) {
        return D === !1 ? !1 : d.charAt(D) === "/" && d.charAt(D + 1) === "/" ? K(d, D) : D;
      }
      var W = _;
      function G(d, D) {
        let E = null, N = D;
        for (; N !== E; ) E = N, N = M(d, N), N = Ee(d, N), N = U(d, N);
        return N = W(d, N), N = Z(d, N), N !== !1 && re(d, N);
      }
      var Q = G;
      function L(d) {
        return Array.isArray(d) && d.length > 0;
      }
      var R = L, ne = class extends Error {
        constructor(D, E, N = "type") {
          super(`Unexpected ${E} node ${N}: ${JSON.stringify(D[N])}.`);
          Je(this, "name", "UnexpectedNodeError");
          this.node = D;
        }
      }, ue = ne, Pe = null;
      function dt(d) {
        if (Pe !== null && typeof Pe.property) {
          let D = Pe;
          return Pe = dt.prototype = null, D;
        }
        return Pe = dt.prototype = d ?? /* @__PURE__ */ Object.create(null), new dt();
      }
      var ye = 10;
      for (let d = 0; d <= ye; d++) dt();
      function Ve(d) {
        return dt(d);
      }
      function $r(d, D = "type") {
        Ve(d);
        function E(N) {
          let v = N[D], B = d[v];
          if (!Array.isArray(B))
            throw Object.assign(new Error(`Missing visitor keys for '${v}'.`), { node: N });
          return B;
        }
        return E;
      }
      var Ut = $r, Dt = class {
        constructor(d, D, E) {
          this.start = d.start, this.end = D.end, this.startToken = d, this.endToken = D, this.source = E;
        }
        get [Symbol.toStringTag]() {
          return "Location";
        }
        toJSON() {
          return { start: this.start, end: this.end };
        }
      }, le = class {
        constructor(d, D, E, N, v, B) {
          this.kind = d, this.start = D, this.end = E, this.line = N, this.column = v, this.value = B, this.prev = null, this.next = null;
        }
        get [Symbol.toStringTag]() {
          return "Token";
        }
        toJSON() {
          return { kind: this.kind, value: this.value, line: this.line, column: this.column };
        }
      }, ze = {
        Name: [],
        Document: ["definitions"],
        OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
        VariableDefinition: ["variable", "type", "defaultValue", "directives"],
        Variable: ["name"],
        SelectionSet: ["selections"],
        Field: ["alias", "name", "arguments", "directives", "selectionSet"],
        Argument: ["name", "value"],
        FragmentSpread: ["name", "directives"],
        InlineFragment: ["typeCondition", "directives", "selectionSet"],
        FragmentDefinition: [
          "name",
          "variableDefinitions",
          "typeCondition",
          "directives",
          "selectionSet"
        ],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: ["values"],
        ObjectValue: ["fields"],
        ObjectField: ["name", "value"],
        Directive: ["name", "arguments"],
        NamedType: ["name"],
        ListType: ["type"],
        NonNullType: ["type"],
        SchemaDefinition: ["description", "directives", "operationTypes"],
        OperationTypeDefinition: ["type"],
        ScalarTypeDefinition: ["description", "name", "directives"],
        ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        FieldDefinition: ["description", "name", "arguments", "type", "directives"],
        InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
        InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        UnionTypeDefinition: ["description", "name", "directives", "types"],
        EnumTypeDefinition: ["description", "name", "directives", "values"],
        EnumValueDefinition: ["description", "name", "directives"],
        InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
        DirectiveDefinition: ["description", "name", "arguments", "locations"],
        SchemaExtension: ["directives", "operationTypes"],
        ScalarTypeExtension: ["name", "directives"],
        ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
        InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
        UnionTypeExtension: ["name", "directives", "types"],
        EnumTypeExtension: ["name", "directives", "values"],
        InputObjectTypeExtension: ["name", "directives", "fields"]
      };
      new Set(Object.keys(ze));
      var Nn;
      (function(d) {
        d.QUERY = "query", d.MUTATION = "mutation", d.SUBSCRIPTION = "subscription";
      })(Nn || (Nn = {}));
      var ee = Ut(ze, "kind"), Fe = ee;
      function J(d) {
        return d.loc.start;
      }
      function be(d) {
        return d.loc.end;
      }
      function tt(d) {
        return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(d);
      }
      function Et(d) {
        return `# @format

` + d;
      }
      function Ye(d, D, E) {
        let { node: N } = d;
        if (!N.description) return "";
        let v = [E("description")];
        return N.kind === "InputValueDefinition" && !N.description.block ? v.push(X) : v.push(j), v;
      }
      var jt = Ye;
      function vi(d, D, E) {
        let { node: N } = d;
        switch (N.kind) {
          case "Document":
            return [...P(j, Cn(d, D, E, "definitions")), j];
          case "OperationDefinition": {
            let v = D.originalText[J(N)] !== "{", B = !!N.name;
            return [
              v ? N.operation : "",
              v && B ? [" ", E("name")] : "",
              v && !B && R(N.variableDefinitions) ? " " : "",
              dp(d, E),
              Ft(d, E, N),
              !v && !B ? "" : " ",
              E("selectionSet")
            ];
          }
          case "FragmentDefinition":
            return [
              "fragment ",
              E("name"),
              dp(d, E),
              " on ",
              E("typeCondition"),
              Ft(d, E, N),
              " ",
              E("selectionSet")
            ];
          case "SelectionSet":
            return ["{", A([j, P(j, Cn(d, D, E, "selections"))]), j, "}"];
          case "Field":
            return T([
              N.alias ? [E("alias"), ": "] : "",
              E("name"),
              N.arguments.length > 0 ? T(["(", A([F, P([I("", ", "), F], Cn(d, D, E, "arguments"))]), F, ")"]) : "",
              Ft(d, E, N),
              N.selectionSet ? " " : "",
              E("selectionSet")
            ]);
          case "Name":
            return N.value;
          case "StringValue":
            if (N.block) {
              let v = f(!1, N.value, '"""', String.raw`\"""`).split(`
`);
              return v.length === 1 && (v[0] = v[0].trim()), v.every((B) => B === "") && (v.length = 0), P(j, ['"""', ...v, '"""']);
            }
            return [
              '"',
              f(
                !1,
                f(!1, N.value, /["\\]/g, String.raw`\$&`),
                `
`,
                String.raw`\n`
              ),
              '"'
            ];
          case "IntValue":
          case "FloatValue":
          case "EnumValue":
            return N.value;
          case "BooleanValue":
            return N.value ? "true" : "false";
          case "NullValue":
            return "null";
          case "Variable":
            return ["$", E("name")];
          case "ListValue":
            return T(["[", A([F, P([I("", ", "), F], d.map(E, "values"))]), F, "]"]);
          case "ObjectValue": {
            let v = D.bracketSpacing && N.fields.length > 0 ? " " : "";
            return T(["{", v, A([F, P([I("", ", "), F], d.map(E, "fields"))]), F, I("", v), "}"]);
          }
          case "ObjectField":
          case "Argument":
            return [E("name"), ": ", E("value")];
          case "Directive":
            return [
              "@",
              E("name"),
              N.arguments.length > 0 ? T(["(", A([F, P([I("", ", "), F], Cn(d, D, E, "arguments"))]), F, ")"]) : ""
            ];
          case "NamedType":
            return E("name");
          case "VariableDefinition":
            return [
              E("variable"),
              ": ",
              E("type"),
              N.defaultValue ? [" = ", E("defaultValue")] : "",
              Ft(d, E, N)
            ];
          case "ObjectTypeExtension":
          case "ObjectTypeDefinition":
          case "InputObjectTypeExtension":
          case "InputObjectTypeDefinition":
          case "InterfaceTypeExtension":
          case "InterfaceTypeDefinition": {
            let { kind: v } = N, B = [];
            return v.endsWith("TypeDefinition") ? B.push(jt(d, D, E)) : B.push("extend "), v.startsWith("ObjectType") ? B.push("type") : v.startsWith("InputObjectType") ? B.push("input") : B.push("interface"), B.push(" ", E("name")), !v.startsWith("InputObjectType") && N.interfaces.length > 0 && B.push(" implements ", ...g8(d, D, E)), B.push(Ft(d, E, N)), N.fields.length > 0 && B.push([" {", A([j, P(j, Cn(d, D, E, "fields"))]), j, "}"]), B;
          }
          case "FieldDefinition":
            return [
              jt(d, D, E),
              E("name"),
              N.arguments.length > 0 ? T(["(", A([F, P([I("", ", "), F], Cn(d, D, E, "arguments"))]), F, ")"]) : "",
              ": ",
              E("type"),
              Ft(d, E, N)
            ];
          case "DirectiveDefinition":
            return [
              jt(d, D, E),
              "directive ",
              "@",
              E("name"),
              N.arguments.length > 0 ? T(["(", A([F, P([I("", ", "), F], Cn(d, D, E, "arguments"))]), F, ")"]) : "",
              N.repeatable ? " repeatable" : "",
              " on ",
              ...P(" | ", d.map(E, "locations"))
            ];
          case "EnumTypeExtension":
          case "EnumTypeDefinition":
            return [
              jt(d, D, E),
              N.kind === "EnumTypeExtension" ? "extend " : "",
              "enum ",
              E("name"),
              Ft(d, E, N),
              N.values.length > 0 ? [" {", A([j, P(j, Cn(d, D, E, "values"))]), j, "}"] : ""
            ];
          case "EnumValueDefinition":
            return [jt(d, D, E), E("name"), Ft(d, E, N)];
          case "InputValueDefinition":
            return [
              jt(d, D, E),
              E("name"),
              ": ",
              E("type"),
              N.defaultValue ? [" = ", E("defaultValue")] : "",
              Ft(d, E, N)
            ];
          case "SchemaExtension":
            return [
              "extend schema",
              Ft(d, E, N),
              ...N.operationTypes.length > 0 ? [" {", A([j, P(j, Cn(d, D, E, "operationTypes"))]), j, "}"] : []
            ];
          case "SchemaDefinition":
            return [
              jt(d, D, E),
              "schema",
              Ft(d, E, N),
              " {",
              N.operationTypes.length > 0 ? A([j, P(j, Cn(d, D, E, "operationTypes"))]) : "",
              j,
              "}"
            ];
          case "OperationTypeDefinition":
            return [N.operation, ": ", E("type")];
          case "FragmentSpread":
            return ["...", E("name"), Ft(d, E, N)];
          case "InlineFragment":
            return [
              "...",
              N.typeCondition ? [" on ", E("typeCondition")] : "",
              Ft(d, E, N),
              " ",
              E("selectionSet")
            ];
          case "UnionTypeExtension":
          case "UnionTypeDefinition":
            return T([
              jt(d, D, E),
              T([
                N.kind === "UnionTypeExtension" ? "extend " : "",
                "union ",
                E("name"),
                Ft(d, E, N),
                N.types.length > 0 ? [" =", I("", " "), A([I([X, "| "]), P([X, "| "], d.map(E, "types"))])] : ""
              ])
            ]);
          case "ScalarTypeExtension":
          case "ScalarTypeDefinition":
            return [
              jt(d, D, E),
              N.kind === "ScalarTypeExtension" ? "extend " : "",
              "scalar ",
              E("name"),
              Ft(d, E, N)
            ];
          case "NonNullType":
            return [E("type"), "!"];
          case "ListType":
            return ["[", E("type"), "]"];
          default:
            throw new ue(N, "Graphql", "kind");
        }
      }
      function Ft(d, D, E) {
        if (E.directives.length === 0) return "";
        let N = P(X, d.map(D, "directives"));
        return E.kind === "FragmentDefinition" || E.kind === "OperationDefinition" ? T([X, N]) : [" ", T(A([F, N]))];
      }
      function Cn(d, D, E, N) {
        return d.map(({ isLast: v, node: B }) => {
          let oe = E();
          return !v && Q(D.originalText, be(B)) ? [oe, j] : oe;
        }, N);
      }
      function p8(d) {
        return d.kind !== "Comment";
      }
      function m8(d) {
        let D = d.node;
        if (D.kind === "Comment") return "#" + D.value.trimEnd();
        throw new Error("Not a comment: " + JSON.stringify(D));
      }
      function g8(d, D, E) {
        let { node: N } = d, v = [], { interfaces: B } = N, oe = d.map(E, "interfaces");
        for (let Ae = 0; Ae < B.length; Ae++) {
          let je = B[Ae];
          v.push(oe[Ae]);
          let kt = B[Ae + 1];
          if (kt) {
            let ht = D.originalText.slice(je.loc.end, kt.loc.start).includes("#");
            v.push(" &", ht ? X : " ");
          }
        }
        return v;
      }
      function dp(d, D) {
        let { node: E } = d;
        return R(E.variableDefinitions) ? T(["(", A([F, P([I("", ", "), F], d.map(D, "variableDefinitions"))]), F, ")"]) : "";
      }
      function fp(d, D) {
        d.kind === "StringValue" && d.block && !d.value.includes(`
`) && (D.value = d.value.trim());
      }
      fp.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
      function D8(d) {
        var D;
        let { node: E } = d;
        return (D = E == null ? void 0 : E.comments) == null ? void 0 : D.some((N) => N.value.trim() === "prettier-ignore");
      }
      var E8 = {
        print: vi,
        massageAstNode: fp,
        hasPrettierIgnore: D8,
        insertPragma: Et,
        printComment: m8,
        canAttachComment: p8,
        getVisitorKeys: Fe
      }, y8 = E8, b8 = [
        {
          linguistLanguageId: 139,
          name: "GraphQL",
          type: "data",
          color: "#e10098",
          extensions: [".graphql", ".gql", ".graphqls"],
          tmScope: "source.graphql",
          aceMode: "text",
          parsers: ["graphql"],
          vscodeLanguageIds: ["graphql"]
        }
      ], v8 = {
        bracketSpacing: {
          category: "Common",
          type: "boolean",
          default: !0,
          description: "Print spaces between brackets.",
          oppositeDescription: "Do not print spaces between brackets."
        },
        singleQuote: {
          category: "Common",
          type: "boolean",
          default: !1,
          description: "Use single quotes instead of double quotes."
        },
        proseWrap: {
          category: "Common",
          type: "choice",
          default: "preserve",
          description: "How to wrap prose.",
          choices: [
            { value: "always", description: "Wrap prose if it exceeds the print width." },
            { value: "never", description: "Do not wrap prose." },
            { value: "preserve", description: "Wrap prose as-is." }
          ]
        },
        bracketSameLine: {
          category: "Common",
          type: "boolean",
          default: !1,
          description: "Put > of opening tags on the last line instead of on a new line."
        },
        singleAttributePerLine: {
          category: "Common",
          type: "boolean",
          default: !1,
          description: "Enforce single attribute per line in HTML, Vue and JSX."
        }
      }, _8 = { bracketSpacing: v8.bracketSpacing }, N8 = _8, hp = {};
      a(hp, { graphql: () => a3 });
      function C8(d) {
        return typeof d == "object" && d !== null;
      }
      function T8(d, D) {
        throw new Error("Unexpected invariant triggered.");
      }
      var S8 = /\r\n|[\n\r]/g;
      function cl(d, D) {
        let E = 0, N = 1;
        for (let v of d.body.matchAll(S8)) {
          if (typeof v.index == "number" || T8(), v.index >= D) break;
          E = v.index + v[0].length, N += 1;
        }
        return { line: N, column: D + 1 - E };
      }
      function A8(d) {
        return pp(d.source, cl(d.source, d.start));
      }
      function pp(d, D) {
        let E = d.locationOffset.column - 1, N = "".padStart(E) + d.body, v = D.line - 1, B = d.locationOffset.line - 1, oe = D.line + B, Ae = D.line === 1 ? E : 0, je = D.column + Ae, kt = `${d.name}:${oe}:${je}
`, ht = N.split(/\r\n|[\n\r]/g), Ni = ht[v];
        if (Ni.length > 120) {
          let cn = Math.floor(je / 80), pl = je % 80, wt = [];
          for (let Ci = 0; Ci < Ni.length; Ci += 80) wt.push(Ni.slice(Ci, Ci + 80));
          return kt + mp([
            [`${oe} |`, wt[0]],
            ...wt.slice(1, cn + 1).map((Ci) => ["|", Ci]),
            ["|", "^".padStart(pl)],
            ["|", wt[cn + 1]]
          ]);
        }
        return kt + mp([
          [`${oe - 1} |`, ht[v - 1]],
          [`${oe} |`, Ni],
          ["|", "^".padStart(je)],
          [`${oe + 1} |`, ht[v + 1]]
        ]);
      }
      function mp(d) {
        let D = d.filter(([N, v]) => v !== void 0), E = Math.max(...D.map(([N]) => N.length));
        return D.map(([N, v]) => N.padStart(E) + (v ? " " + v : "")).join(`
`);
      }
      function F8(d) {
        let D = d[0];
        return D == null || "kind" in D || "length" in D ? {
          nodes: D,
          source: d[1],
          positions: d[2],
          path: d[3],
          originalError: d[4],
          extensions: d[5]
        } : D;
      }
      var w8 = class Sp extends Error {
        constructor(D, ...E) {
          var N, v, B;
          let {
            nodes: oe,
            source: Ae,
            positions: je,
            path: kt,
            originalError: ht,
            extensions: Ni
          } = F8(E);
          super(D), this.name = "GraphQLError", this.path = kt ?? void 0, this.originalError = ht ?? void 0, this.nodes = gp(Array.isArray(oe) ? oe : oe ? [oe] : void 0);
          let cn = gp(
            (N = this.nodes) === null || N === void 0 ? void 0 : N.map((wt) => wt.loc).filter((wt) => wt != null)
          );
          this.source = Ae ?? (cn == null || (v = cn[0]) === null || v === void 0 ? void 0 : v.source), this.positions = je ?? (cn == null ? void 0 : cn.map((wt) => wt.start)), this.locations = je && Ae ? je.map((wt) => cl(Ae, wt)) : cn == null ? void 0 : cn.map((wt) => cl(wt.source, wt.start));
          let pl = C8(ht == null ? void 0 : ht.extensions) ? ht == null ? void 0 : ht.extensions : void 0;
          this.extensions = (B = Ni ?? pl) !== null && B !== void 0 ? B : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
            message: { writable: !0, enumerable: !0 },
            name: { enumerable: !1 },
            nodes: { enumerable: !1 },
            source: { enumerable: !1 },
            positions: { enumerable: !1 },
            originalError: { enumerable: !1 }
          }), ht != null && ht.stack ? Object.defineProperty(this, "stack", {
            value: ht.stack,
            writable: !0,
            configurable: !0
          }) : Error.captureStackTrace ? Error.captureStackTrace(this, Sp) : Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: !0,
            configurable: !0
          });
        }
        get [Symbol.toStringTag]() {
          return "GraphQLError";
        }
        toString() {
          let D = this.message;
          if (this.nodes)
            for (let E of this.nodes)
              E.loc && (D += `

` + A8(E.loc));
          else if (this.source && this.locations)
            for (let E of this.locations)
              D += `

` + pp(this.source, E);
          return D;
        }
        toJSON() {
          let D = { message: this.message };
          return this.locations != null && (D.locations = this.locations), this.path != null && (D.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (D.extensions = this.extensions), D;
        }
      };
      function gp(d) {
        return d === void 0 || d.length === 0 ? void 0 : d;
      }
      function ft(d, D, E) {
        return new w8(`Syntax Error: ${E}`, { source: d, positions: [D] });
      }
      var dl;
      (function(d) {
        d.QUERY = "QUERY", d.MUTATION = "MUTATION", d.SUBSCRIPTION = "SUBSCRIPTION", d.FIELD = "FIELD", d.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", d.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", d.INLINE_FRAGMENT = "INLINE_FRAGMENT", d.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", d.SCHEMA = "SCHEMA", d.SCALAR = "SCALAR", d.OBJECT = "OBJECT", d.FIELD_DEFINITION = "FIELD_DEFINITION", d.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", d.INTERFACE = "INTERFACE", d.UNION = "UNION", d.ENUM = "ENUM", d.ENUM_VALUE = "ENUM_VALUE", d.INPUT_OBJECT = "INPUT_OBJECT", d.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
      })(dl || (dl = {}));
      var ce;
      (function(d) {
        d.NAME = "Name", d.DOCUMENT = "Document", d.OPERATION_DEFINITION = "OperationDefinition", d.VARIABLE_DEFINITION = "VariableDefinition", d.SELECTION_SET = "SelectionSet", d.FIELD = "Field", d.ARGUMENT = "Argument", d.FRAGMENT_SPREAD = "FragmentSpread", d.INLINE_FRAGMENT = "InlineFragment", d.FRAGMENT_DEFINITION = "FragmentDefinition", d.VARIABLE = "Variable", d.INT = "IntValue", d.FLOAT = "FloatValue", d.STRING = "StringValue", d.BOOLEAN = "BooleanValue", d.NULL = "NullValue", d.ENUM = "EnumValue", d.LIST = "ListValue", d.OBJECT = "ObjectValue", d.OBJECT_FIELD = "ObjectField", d.DIRECTIVE = "Directive", d.NAMED_TYPE = "NamedType", d.LIST_TYPE = "ListType", d.NON_NULL_TYPE = "NonNullType", d.SCHEMA_DEFINITION = "SchemaDefinition", d.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", d.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", d.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", d.FIELD_DEFINITION = "FieldDefinition", d.INPUT_VALUE_DEFINITION = "InputValueDefinition", d.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", d.UNION_TYPE_DEFINITION = "UnionTypeDefinition", d.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", d.ENUM_VALUE_DEFINITION = "EnumValueDefinition", d.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", d.DIRECTIVE_DEFINITION = "DirectiveDefinition", d.SCHEMA_EXTENSION = "SchemaExtension", d.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", d.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", d.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", d.UNION_TYPE_EXTENSION = "UnionTypeExtension", d.ENUM_TYPE_EXTENSION = "EnumTypeExtension", d.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
      })(ce || (ce = {}));
      function I8(d) {
        return d === 9 || d === 32;
      }
      function us(d) {
        return d >= 48 && d <= 57;
      }
      function Dp(d) {
        return d >= 97 && d <= 122 || d >= 65 && d <= 90;
      }
      function Ep(d) {
        return Dp(d) || d === 95;
      }
      function x8(d) {
        return Dp(d) || us(d) || d === 95;
      }
      function L8(d) {
        var D;
        let E = Number.MAX_SAFE_INTEGER, N = null, v = -1;
        for (let oe = 0; oe < d.length; ++oe) {
          var B;
          let Ae = d[oe], je = O8(Ae);
          je !== Ae.length && (N = (B = N) !== null && B !== void 0 ? B : oe, v = oe, oe !== 0 && je < E && (E = je));
        }
        return d.map((oe, Ae) => Ae === 0 ? oe : oe.slice(E)).slice((D = N) !== null && D !== void 0 ? D : 0, v + 1);
      }
      function O8(d) {
        let D = 0;
        for (; D < d.length && I8(d.charCodeAt(D)); ) ++D;
        return D;
      }
      var $;
      (function(d) {
        d.SOF = "<SOF>", d.EOF = "<EOF>", d.BANG = "!", d.DOLLAR = "$", d.AMP = "&", d.PAREN_L = "(", d.PAREN_R = ")", d.SPREAD = "...", d.COLON = ":", d.EQUALS = "=", d.AT = "@", d.BRACKET_L = "[", d.BRACKET_R = "]", d.BRACE_L = "{", d.PIPE = "|", d.BRACE_R = "}", d.NAME = "Name", d.INT = "Int", d.FLOAT = "Float", d.STRING = "String", d.BLOCK_STRING = "BlockString", d.COMMENT = "Comment";
      })($ || ($ = {}));
      var k8 = class {
        constructor(d) {
          let D = new le($.SOF, 0, 0, 0, 0);
          this.source = d, this.lastToken = D, this.token = D, this.line = 1, this.lineStart = 0;
        }
        get [Symbol.toStringTag]() {
          return "Lexer";
        }
        advance() {
          return this.lastToken = this.token, this.token = this.lookahead();
        }
        lookahead() {
          let d = this.token;
          if (d.kind !== $.EOF)
            do
              if (d.next) d = d.next;
              else {
                let D = M8(this, d.end);
                d.next = D, D.prev = d, d = D;
              }
            while (d.kind === $.COMMENT);
          return d;
        }
      };
      function R8(d) {
        return d === $.BANG || d === $.DOLLAR || d === $.AMP || d === $.PAREN_L || d === $.PAREN_R || d === $.SPREAD || d === $.COLON || d === $.EQUALS || d === $.AT || d === $.BRACKET_L || d === $.BRACKET_R || d === $.BRACE_L || d === $.PIPE || d === $.BRACE_R;
      }
      function _i(d) {
        return d >= 0 && d <= 55295 || d >= 57344 && d <= 1114111;
      }
      function ka(d, D) {
        return yp(d.charCodeAt(D)) && bp(d.charCodeAt(D + 1));
      }
      function yp(d) {
        return d >= 55296 && d <= 56319;
      }
      function bp(d) {
        return d >= 56320 && d <= 57343;
      }
      function Ur(d, D) {
        let E = d.source.body.codePointAt(D);
        if (E === void 0) return $.EOF;
        if (E >= 32 && E <= 126) {
          let N = String.fromCodePoint(E);
          return N === '"' ? `'"'` : `"${N}"`;
        }
        return "U+" + E.toString(16).toUpperCase().padStart(4, "0");
      }
      function nt(d, D, E, N, v) {
        let B = d.line, oe = 1 + E - d.lineStart;
        return new le(D, E, N, B, oe, v);
      }
      function M8(d, D) {
        let E = d.source.body, N = E.length, v = D;
        for (; v < N; ) {
          let B = E.charCodeAt(v);
          switch (B) {
            case 65279:
            case 9:
            case 32:
            case 44:
              ++v;
              continue;
            case 10:
              ++v, ++d.line, d.lineStart = v;
              continue;
            case 13:
              E.charCodeAt(v + 1) === 10 ? v += 2 : ++v, ++d.line, d.lineStart = v;
              continue;
            case 35:
              return B8(d, v);
            case 33:
              return nt(d, $.BANG, v, v + 1);
            case 36:
              return nt(d, $.DOLLAR, v, v + 1);
            case 38:
              return nt(d, $.AMP, v, v + 1);
            case 40:
              return nt(d, $.PAREN_L, v, v + 1);
            case 41:
              return nt(d, $.PAREN_R, v, v + 1);
            case 46:
              if (E.charCodeAt(v + 1) === 46 && E.charCodeAt(v + 2) === 46)
                return nt(d, $.SPREAD, v, v + 3);
              break;
            case 58:
              return nt(d, $.COLON, v, v + 1);
            case 61:
              return nt(d, $.EQUALS, v, v + 1);
            case 64:
              return nt(d, $.AT, v, v + 1);
            case 91:
              return nt(d, $.BRACKET_L, v, v + 1);
            case 93:
              return nt(d, $.BRACKET_R, v, v + 1);
            case 123:
              return nt(d, $.BRACE_L, v, v + 1);
            case 124:
              return nt(d, $.PIPE, v, v + 1);
            case 125:
              return nt(d, $.BRACE_R, v, v + 1);
            case 34:
              return E.charCodeAt(v + 1) === 34 && E.charCodeAt(v + 2) === 34 ? K8(d, v) : V8(d, v);
          }
          if (us(B) || B === 45) return P8(d, v, B);
          if (Ep(B)) return q8(d, v);
          throw ft(
            d.source,
            v,
            B === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : _i(B) || ka(E, v) ? `Unexpected character: ${Ur(d, v)}.` : `Invalid character: ${Ur(d, v)}.`
          );
        }
        return nt(d, $.EOF, N, N);
      }
      function B8(d, D) {
        let E = d.source.body, N = E.length, v = D + 1;
        for (; v < N; ) {
          let B = E.charCodeAt(v);
          if (B === 10 || B === 13) break;
          if (_i(B)) ++v;
          else if (ka(E, v)) v += 2;
          else break;
        }
        return nt(d, $.COMMENT, D, v, E.slice(D + 1, v));
      }
      function P8(d, D, E) {
        let N = d.source.body, v = D, B = E, oe = !1;
        if (B === 45 && (B = N.charCodeAt(++v)), B === 48) {
          if (B = N.charCodeAt(++v), us(B))
            throw ft(d.source, v, `Invalid number, unexpected digit after 0: ${Ur(d, v)}.`);
        } else v = fl(d, v, B), B = N.charCodeAt(v);
        if (B === 46 && (oe = !0, B = N.charCodeAt(++v), v = fl(d, v, B), B = N.charCodeAt(v)), (B === 69 || B === 101) && (oe = !0, B = N.charCodeAt(++v), (B === 43 || B === 45) && (B = N.charCodeAt(++v)), v = fl(d, v, B), B = N.charCodeAt(v)), B === 46 || Ep(B))
          throw ft(d.source, v, `Invalid number, expected digit but got: ${Ur(d, v)}.`);
        return nt(d, oe ? $.FLOAT : $.INT, D, v, N.slice(D, v));
      }
      function fl(d, D, E) {
        if (!us(E)) throw ft(d.source, D, `Invalid number, expected digit but got: ${Ur(d, D)}.`);
        let N = d.source.body, v = D + 1;
        for (; us(N.charCodeAt(v)); ) ++v;
        return v;
      }
      function V8(d, D) {
        let E = d.source.body, N = E.length, v = D + 1, B = v, oe = "";
        for (; v < N; ) {
          let Ae = E.charCodeAt(v);
          if (Ae === 34) return oe += E.slice(B, v), nt(d, $.STRING, D, v + 1, oe);
          if (Ae === 92) {
            oe += E.slice(B, v);
            let je = E.charCodeAt(v + 1) === 117 ? E.charCodeAt(v + 2) === 123 ? $8(d, v) : U8(d, v) : j8(d, v);
            oe += je.value, v += je.size, B = v;
            continue;
          }
          if (Ae === 10 || Ae === 13) break;
          if (_i(Ae)) ++v;
          else if (ka(E, v)) v += 2;
          else throw ft(d.source, v, `Invalid character within String: ${Ur(d, v)}.`);
        }
        throw ft(d.source, v, "Unterminated string.");
      }
      function $8(d, D) {
        let E = d.source.body, N = 0, v = 3;
        for (; v < 12; ) {
          let B = E.charCodeAt(D + v++);
          if (B === 125) {
            if (v < 5 || !_i(N)) break;
            return { value: String.fromCodePoint(N), size: v };
          }
          if (N = N << 4 | ls(B), N < 0) break;
        }
        throw ft(d.source, D, `Invalid Unicode escape sequence: "${E.slice(D, D + v)}".`);
      }
      function U8(d, D) {
        let E = d.source.body, N = vp(E, D + 2);
        if (_i(N)) return { value: String.fromCodePoint(N), size: 6 };
        if (yp(N) && E.charCodeAt(D + 6) === 92 && E.charCodeAt(D + 7) === 117) {
          let v = vp(E, D + 8);
          if (bp(v)) return { value: String.fromCodePoint(N, v), size: 12 };
        }
        throw ft(d.source, D, `Invalid Unicode escape sequence: "${E.slice(D, D + 6)}".`);
      }
      function vp(d, D) {
        return ls(d.charCodeAt(D)) << 12 | ls(d.charCodeAt(D + 1)) << 8 | ls(d.charCodeAt(D + 2)) << 4 | ls(d.charCodeAt(D + 3));
      }
      function ls(d) {
        return d >= 48 && d <= 57 ? d - 48 : d >= 65 && d <= 70 ? d - 55 : d >= 97 && d <= 102 ? d - 87 : -1;
      }
      function j8(d, D) {
        let E = d.source.body;
        switch (E.charCodeAt(D + 1)) {
          case 34:
            return { value: '"', size: 2 };
          case 92:
            return { value: "\\", size: 2 };
          case 47:
            return { value: "/", size: 2 };
          case 98:
            return { value: "\b", size: 2 };
          case 102:
            return { value: "\f", size: 2 };
          case 110:
            return {
              value: `
`,
              size: 2
            };
          case 114:
            return { value: "\r", size: 2 };
          case 116:
            return { value: "	", size: 2 };
        }
        throw ft(d.source, D, `Invalid character escape sequence: "${E.slice(D, D + 2)}".`);
      }
      function K8(d, D) {
        let E = d.source.body, N = E.length, v = d.lineStart, B = D + 3, oe = B, Ae = "", je = [];
        for (; B < N; ) {
          let kt = E.charCodeAt(B);
          if (kt === 34 && E.charCodeAt(B + 1) === 34 && E.charCodeAt(B + 2) === 34) {
            Ae += E.slice(oe, B), je.push(Ae);
            let ht = nt(
              d,
              $.BLOCK_STRING,
              D,
              B + 3,
              L8(je).join(`
`)
            );
            return d.line += je.length - 1, d.lineStart = v, ht;
          }
          if (kt === 92 && E.charCodeAt(B + 1) === 34 && E.charCodeAt(B + 2) === 34 && E.charCodeAt(B + 3) === 34) {
            Ae += E.slice(oe, B), oe = B + 1, B += 4;
            continue;
          }
          if (kt === 10 || kt === 13) {
            Ae += E.slice(oe, B), je.push(Ae), kt === 13 && E.charCodeAt(B + 1) === 10 ? B += 2 : ++B, Ae = "", oe = B, v = B;
            continue;
          }
          if (_i(kt)) ++B;
          else if (ka(E, B)) B += 2;
          else throw ft(d.source, B, `Invalid character within String: ${Ur(d, B)}.`);
        }
        throw ft(d.source, B, "Unterminated string.");
      }
      function q8(d, D) {
        let E = d.source.body, N = E.length, v = D + 1;
        for (; v < N; ) {
          let B = E.charCodeAt(v);
          if (x8(B)) ++v;
          else break;
        }
        return nt(d, $.NAME, D, v, E.slice(D, v));
      }
      function hl(d, D) {
        throw new Error(D);
      }
      function _p(d) {
        return Ra(d, []);
      }
      function Ra(d, D) {
        switch (typeof d) {
          case "string":
            return JSON.stringify(d);
          case "function":
            return d.name ? `[function ${d.name}]` : "[function]";
          case "object":
            return G8(d, D);
          default:
            return String(d);
        }
      }
      function G8(d, D) {
        if (d === null) return "null";
        if (D.includes(d)) return "[Circular]";
        let E = [...D, d];
        if (H8(d)) {
          let N = d.toJSON();
          if (N !== d) return typeof N == "string" ? N : Ra(N, E);
        } else if (Array.isArray(d)) return z8(d, E);
        return W8(d, E);
      }
      function H8(d) {
        return typeof d.toJSON == "function";
      }
      function W8(d, D) {
        let E = Object.entries(d);
        return E.length === 0 ? "{}" : D.length > 2 ? "[" + Y8(d) + "]" : "{ " + E.map(([N, v]) => N + ": " + Ra(v, D)).join(", ") + " }";
      }
      function z8(d, D) {
        if (d.length === 0) return "[]";
        if (D.length > 2) return "[Array]";
        let E = Math.min(10, d.length), N = d.length - E, v = [];
        for (let B = 0; B < E; ++B) v.push(Ra(d[B], D));
        return N === 1 ? v.push("... 1 more item") : N > 1 && v.push(`... ${N} more items`), "[" + v.join(", ") + "]";
      }
      function Y8(d) {
        let D = Object.prototype.toString.call(d).replace(/^\[object /, "").replace(/]$/, "");
        if (D === "Object" && typeof d.constructor == "function") {
          let E = d.constructor.name;
          if (typeof E == "string" && E !== "") return E;
        }
        return D;
      }
      var J8 = globalThis.process && globalThis.process.env.NODE_ENV === "production" ? function(d, D) {
        return d instanceof D;
      } : function(d, D) {
        if (d instanceof D) return !0;
        if (typeof d == "object" && d !== null) {
          var E;
          let N = D.prototype[Symbol.toStringTag], v = Symbol.toStringTag in d ? d[Symbol.toStringTag] : (E = d.constructor) === null || E === void 0 ? void 0 : E.name;
          if (N === v) {
            let B = _p(d);
            throw new Error(`Cannot use ${N} "${B}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
          }
        }
        return !1;
      }, Np = class {
        constructor(d, D = "GraphQL request", E = { line: 1, column: 1 }) {
          typeof d == "string" || hl(!1, `Body must be a string. Received: ${_p(d)}.`), this.body = d, this.name = D, this.locationOffset = E, this.locationOffset.line > 0 || hl(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || hl(!1, "column in locationOffset is 1-indexed and must be positive.");
        }
        get [Symbol.toStringTag]() {
          return "Source";
        }
      };
      function X8(d) {
        return J8(d, Np);
      }
      function Q8(d, D) {
        return new Z8(d, D).parseDocument();
      }
      var Z8 = class {
        constructor(d, D = {}) {
          let E = X8(d) ? d : new Np(d);
          this._lexer = new k8(E), this._options = D, this._tokenCounter = 0;
        }
        parseName() {
          let d = this.expectToken($.NAME);
          return this.node(d, { kind: ce.NAME, value: d.value });
        }
        parseDocument() {
          return this.node(this._lexer.token, {
            kind: ce.DOCUMENT,
            definitions: this.many($.SOF, this.parseDefinition, $.EOF)
          });
        }
        parseDefinition() {
          if (this.peek($.BRACE_L)) return this.parseOperationDefinition();
          let d = this.peekDescription(), D = d ? this._lexer.lookahead() : this._lexer.token;
          if (D.kind === $.NAME) {
            switch (D.value) {
              case "schema":
                return this.parseSchemaDefinition();
              case "scalar":
                return this.parseScalarTypeDefinition();
              case "type":
                return this.parseObjectTypeDefinition();
              case "interface":
                return this.parseInterfaceTypeDefinition();
              case "union":
                return this.parseUnionTypeDefinition();
              case "enum":
                return this.parseEnumTypeDefinition();
              case "input":
                return this.parseInputObjectTypeDefinition();
              case "directive":
                return this.parseDirectiveDefinition();
            }
            if (d)
              throw ft(
                this._lexer.source,
                this._lexer.token.start,
                "Unexpected description, descriptions are supported only on type definitions."
              );
            switch (D.value) {
              case "query":
              case "mutation":
              case "subscription":
                return this.parseOperationDefinition();
              case "fragment":
                return this.parseFragmentDefinition();
              case "extend":
                return this.parseTypeSystemExtension();
            }
          }
          throw this.unexpected(D);
        }
        parseOperationDefinition() {
          let d = this._lexer.token;
          if (this.peek($.BRACE_L))
            return this.node(d, {
              kind: ce.OPERATION_DEFINITION,
              operation: Nn.QUERY,
              name: void 0,
              variableDefinitions: [],
              directives: [],
              selectionSet: this.parseSelectionSet()
            });
          let D = this.parseOperationType(), E;
          return this.peek($.NAME) && (E = this.parseName()), this.node(d, {
            kind: ce.OPERATION_DEFINITION,
            operation: D,
            name: E,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          });
        }
        parseOperationType() {
          let d = this.expectToken($.NAME);
          switch (d.value) {
            case "query":
              return Nn.QUERY;
            case "mutation":
              return Nn.MUTATION;
            case "subscription":
              return Nn.SUBSCRIPTION;
          }
          throw this.unexpected(d);
        }
        parseVariableDefinitions() {
          return this.optionalMany($.PAREN_L, this.parseVariableDefinition, $.PAREN_R);
        }
        parseVariableDefinition() {
          return this.node(this._lexer.token, {
            kind: ce.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken($.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken($.EQUALS) ? this.parseConstValueLiteral() : void 0,
            directives: this.parseConstDirectives()
          });
        }
        parseVariable() {
          let d = this._lexer.token;
          return this.expectToken($.DOLLAR), this.node(d, { kind: ce.VARIABLE, name: this.parseName() });
        }
        parseSelectionSet() {
          return this.node(this._lexer.token, {
            kind: ce.SELECTION_SET,
            selections: this.many($.BRACE_L, this.parseSelection, $.BRACE_R)
          });
        }
        parseSelection() {
          return this.peek($.SPREAD) ? this.parseFragment() : this.parseField();
        }
        parseField() {
          let d = this._lexer.token, D = this.parseName(), E, N;
          return this.expectOptionalToken($.COLON) ? (E = D, N = this.parseName()) : N = D, this.node(d, {
            kind: ce.FIELD,
            alias: E,
            name: N,
            arguments: this.parseArguments(!1),
            directives: this.parseDirectives(!1),
            selectionSet: this.peek($.BRACE_L) ? this.parseSelectionSet() : void 0
          });
        }
        parseArguments(d) {
          let D = d ? this.parseConstArgument : this.parseArgument;
          return this.optionalMany($.PAREN_L, D, $.PAREN_R);
        }
        parseArgument(d = !1) {
          let D = this._lexer.token, E = this.parseName();
          return this.expectToken($.COLON), this.node(D, { kind: ce.ARGUMENT, name: E, value: this.parseValueLiteral(d) });
        }
        parseConstArgument() {
          return this.parseArgument(!0);
        }
        parseFragment() {
          let d = this._lexer.token;
          this.expectToken($.SPREAD);
          let D = this.expectOptionalKeyword("on");
          return !D && this.peek($.NAME) ? this.node(d, {
            kind: ce.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1)
          }) : this.node(d, {
            kind: ce.INLINE_FRAGMENT,
            typeCondition: D ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          });
        }
        parseFragmentDefinition() {
          let d = this._lexer.token;
          return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(d, {
            kind: ce.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          }) : this.node(d, {
            kind: ce.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          });
        }
        parseFragmentName() {
          if (this._lexer.token.value === "on") throw this.unexpected();
          return this.parseName();
        }
        parseValueLiteral(d) {
          let D = this._lexer.token;
          switch (D.kind) {
            case $.BRACKET_L:
              return this.parseList(d);
            case $.BRACE_L:
              return this.parseObject(d);
            case $.INT:
              return this.advanceLexer(), this.node(D, { kind: ce.INT, value: D.value });
            case $.FLOAT:
              return this.advanceLexer(), this.node(D, { kind: ce.FLOAT, value: D.value });
            case $.STRING:
            case $.BLOCK_STRING:
              return this.parseStringLiteral();
            case $.NAME:
              switch (this.advanceLexer(), D.value) {
                case "true":
                  return this.node(D, { kind: ce.BOOLEAN, value: !0 });
                case "false":
                  return this.node(D, { kind: ce.BOOLEAN, value: !1 });
                case "null":
                  return this.node(D, { kind: ce.NULL });
                default:
                  return this.node(D, { kind: ce.ENUM, value: D.value });
              }
            case $.DOLLAR:
              if (d)
                if (this.expectToken($.DOLLAR), this._lexer.token.kind === $.NAME) {
                  let E = this._lexer.token.value;
                  throw ft(
                    this._lexer.source,
                    D.start,
                    `Unexpected variable "$${E}" in constant value.`
                  );
                } else throw this.unexpected(D);
              return this.parseVariable();
            default:
              throw this.unexpected();
          }
        }
        parseConstValueLiteral() {
          return this.parseValueLiteral(!0);
        }
        parseStringLiteral() {
          let d = this._lexer.token;
          return this.advanceLexer(), this.node(d, { kind: ce.STRING, value: d.value, block: d.kind === $.BLOCK_STRING });
        }
        parseList(d) {
          let D = () => this.parseValueLiteral(d);
          return this.node(this._lexer.token, {
            kind: ce.LIST,
            values: this.any($.BRACKET_L, D, $.BRACKET_R)
          });
        }
        parseObject(d) {
          let D = () => this.parseObjectField(d);
          return this.node(this._lexer.token, {
            kind: ce.OBJECT,
            fields: this.any($.BRACE_L, D, $.BRACE_R)
          });
        }
        parseObjectField(d) {
          let D = this._lexer.token, E = this.parseName();
          return this.expectToken($.COLON), this.node(D, { kind: ce.OBJECT_FIELD, name: E, value: this.parseValueLiteral(d) });
        }
        parseDirectives(d) {
          let D = [];
          for (; this.peek($.AT); ) D.push(this.parseDirective(d));
          return D;
        }
        parseConstDirectives() {
          return this.parseDirectives(!0);
        }
        parseDirective(d) {
          let D = this._lexer.token;
          return this.expectToken($.AT), this.node(D, {
            kind: ce.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(d)
          });
        }
        parseTypeReference() {
          let d = this._lexer.token, D;
          if (this.expectOptionalToken($.BRACKET_L)) {
            let E = this.parseTypeReference();
            this.expectToken($.BRACKET_R), D = this.node(d, { kind: ce.LIST_TYPE, type: E });
          } else D = this.parseNamedType();
          return this.expectOptionalToken($.BANG) ? this.node(d, { kind: ce.NON_NULL_TYPE, type: D }) : D;
        }
        parseNamedType() {
          return this.node(this._lexer.token, { kind: ce.NAMED_TYPE, name: this.parseName() });
        }
        peekDescription() {
          return this.peek($.STRING) || this.peek($.BLOCK_STRING);
        }
        parseDescription() {
          if (this.peekDescription()) return this.parseStringLiteral();
        }
        parseSchemaDefinition() {
          let d = this._lexer.token, D = this.parseDescription();
          this.expectKeyword("schema");
          let E = this.parseConstDirectives(), N = this.many($.BRACE_L, this.parseOperationTypeDefinition, $.BRACE_R);
          return this.node(d, {
            kind: ce.SCHEMA_DEFINITION,
            description: D,
            directives: E,
            operationTypes: N
          });
        }
        parseOperationTypeDefinition() {
          let d = this._lexer.token, D = this.parseOperationType();
          this.expectToken($.COLON);
          let E = this.parseNamedType();
          return this.node(d, { kind: ce.OPERATION_TYPE_DEFINITION, operation: D, type: E });
        }
        parseScalarTypeDefinition() {
          let d = this._lexer.token, D = this.parseDescription();
          this.expectKeyword("scalar");
          let E = this.parseName(), N = this.parseConstDirectives();
          return this.node(d, {
            kind: ce.SCALAR_TYPE_DEFINITION,
            description: D,
            name: E,
            directives: N
          });
        }
        parseObjectTypeDefinition() {
          let d = this._lexer.token, D = this.parseDescription();
          this.expectKeyword("type");
          let E = this.parseName(), N = this.parseImplementsInterfaces(), v = this.parseConstDirectives(), B = this.parseFieldsDefinition();
          return this.node(d, {
            kind: ce.OBJECT_TYPE_DEFINITION,
            description: D,
            name: E,
            interfaces: N,
            directives: v,
            fields: B
          });
        }
        parseImplementsInterfaces() {
          return this.expectOptionalKeyword("implements") ? this.delimitedMany($.AMP, this.parseNamedType) : [];
        }
        parseFieldsDefinition() {
          return this.optionalMany($.BRACE_L, this.parseFieldDefinition, $.BRACE_R);
        }
        parseFieldDefinition() {
          let d = this._lexer.token, D = this.parseDescription(), E = this.parseName(), N = this.parseArgumentDefs();
          this.expectToken($.COLON);
          let v = this.parseTypeReference(), B = this.parseConstDirectives();
          return this.node(d, {
            kind: ce.FIELD_DEFINITION,
            description: D,
            name: E,
            arguments: N,
            type: v,
            directives: B
          });
        }
        parseArgumentDefs() {
          return this.optionalMany($.PAREN_L, this.parseInputValueDef, $.PAREN_R);
        }
        parseInputValueDef() {
          let d = this._lexer.token, D = this.parseDescription(), E = this.parseName();
          this.expectToken($.COLON);
          let N = this.parseTypeReference(), v;
          this.expectOptionalToken($.EQUALS) && (v = this.parseConstValueLiteral());
          let B = this.parseConstDirectives();
          return this.node(d, {
            kind: ce.INPUT_VALUE_DEFINITION,
            description: D,
            name: E,
            type: N,
            defaultValue: v,
            directives: B
          });
        }
        parseInterfaceTypeDefinition() {
          let d = this._lexer.token, D = this.parseDescription();
          this.expectKeyword("interface");
          let E = this.parseName(), N = this.parseImplementsInterfaces(), v = this.parseConstDirectives(), B = this.parseFieldsDefinition();
          return this.node(d, {
            kind: ce.INTERFACE_TYPE_DEFINITION,
            description: D,
            name: E,
            interfaces: N,
            directives: v,
            fields: B
          });
        }
        parseUnionTypeDefinition() {
          let d = this._lexer.token, D = this.parseDescription();
          this.expectKeyword("union");
          let E = this.parseName(), N = this.parseConstDirectives(), v = this.parseUnionMemberTypes();
          return this.node(d, {
            kind: ce.UNION_TYPE_DEFINITION,
            description: D,
            name: E,
            directives: N,
            types: v
          });
        }
        parseUnionMemberTypes() {
          return this.expectOptionalToken($.EQUALS) ? this.delimitedMany($.PIPE, this.parseNamedType) : [];
        }
        parseEnumTypeDefinition() {
          let d = this._lexer.token, D = this.parseDescription();
          this.expectKeyword("enum");
          let E = this.parseName(), N = this.parseConstDirectives(), v = this.parseEnumValuesDefinition();
          return this.node(d, {
            kind: ce.ENUM_TYPE_DEFINITION,
            description: D,
            name: E,
            directives: N,
            values: v
          });
        }
        parseEnumValuesDefinition() {
          return this.optionalMany($.BRACE_L, this.parseEnumValueDefinition, $.BRACE_R);
        }
        parseEnumValueDefinition() {
          let d = this._lexer.token, D = this.parseDescription(), E = this.parseEnumValueName(), N = this.parseConstDirectives();
          return this.node(d, {
            kind: ce.ENUM_VALUE_DEFINITION,
            description: D,
            name: E,
            directives: N
          });
        }
        parseEnumValueName() {
          if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
            throw ft(
              this._lexer.source,
              this._lexer.token.start,
              `${Ma(this._lexer.token)} is reserved and cannot be used for an enum value.`
            );
          return this.parseName();
        }
        parseInputObjectTypeDefinition() {
          let d = this._lexer.token, D = this.parseDescription();
          this.expectKeyword("input");
          let E = this.parseName(), N = this.parseConstDirectives(), v = this.parseInputFieldsDefinition();
          return this.node(d, {
            kind: ce.INPUT_OBJECT_TYPE_DEFINITION,
            description: D,
            name: E,
            directives: N,
            fields: v
          });
        }
        parseInputFieldsDefinition() {
          return this.optionalMany($.BRACE_L, this.parseInputValueDef, $.BRACE_R);
        }
        parseTypeSystemExtension() {
          let d = this._lexer.lookahead();
          if (d.kind === $.NAME)
            switch (d.value) {
              case "schema":
                return this.parseSchemaExtension();
              case "scalar":
                return this.parseScalarTypeExtension();
              case "type":
                return this.parseObjectTypeExtension();
              case "interface":
                return this.parseInterfaceTypeExtension();
              case "union":
                return this.parseUnionTypeExtension();
              case "enum":
                return this.parseEnumTypeExtension();
              case "input":
                return this.parseInputObjectTypeExtension();
            }
          throw this.unexpected(d);
        }
        parseSchemaExtension() {
          let d = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("schema");
          let D = this.parseConstDirectives(), E = this.optionalMany($.BRACE_L, this.parseOperationTypeDefinition, $.BRACE_R);
          if (D.length === 0 && E.length === 0) throw this.unexpected();
          return this.node(d, { kind: ce.SCHEMA_EXTENSION, directives: D, operationTypes: E });
        }
        parseScalarTypeExtension() {
          let d = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("scalar");
          let D = this.parseName(), E = this.parseConstDirectives();
          if (E.length === 0) throw this.unexpected();
          return this.node(d, { kind: ce.SCALAR_TYPE_EXTENSION, name: D, directives: E });
        }
        parseObjectTypeExtension() {
          let d = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("type");
          let D = this.parseName(), E = this.parseImplementsInterfaces(), N = this.parseConstDirectives(), v = this.parseFieldsDefinition();
          if (E.length === 0 && N.length === 0 && v.length === 0) throw this.unexpected();
          return this.node(d, {
            kind: ce.OBJECT_TYPE_EXTENSION,
            name: D,
            interfaces: E,
            directives: N,
            fields: v
          });
        }
        parseInterfaceTypeExtension() {
          let d = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("interface");
          let D = this.parseName(), E = this.parseImplementsInterfaces(), N = this.parseConstDirectives(), v = this.parseFieldsDefinition();
          if (E.length === 0 && N.length === 0 && v.length === 0) throw this.unexpected();
          return this.node(d, {
            kind: ce.INTERFACE_TYPE_EXTENSION,
            name: D,
            interfaces: E,
            directives: N,
            fields: v
          });
        }
        parseUnionTypeExtension() {
          let d = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("union");
          let D = this.parseName(), E = this.parseConstDirectives(), N = this.parseUnionMemberTypes();
          if (E.length === 0 && N.length === 0) throw this.unexpected();
          return this.node(d, { kind: ce.UNION_TYPE_EXTENSION, name: D, directives: E, types: N });
        }
        parseEnumTypeExtension() {
          let d = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("enum");
          let D = this.parseName(), E = this.parseConstDirectives(), N = this.parseEnumValuesDefinition();
          if (E.length === 0 && N.length === 0) throw this.unexpected();
          return this.node(d, { kind: ce.ENUM_TYPE_EXTENSION, name: D, directives: E, values: N });
        }
        parseInputObjectTypeExtension() {
          let d = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("input");
          let D = this.parseName(), E = this.parseConstDirectives(), N = this.parseInputFieldsDefinition();
          if (E.length === 0 && N.length === 0) throw this.unexpected();
          return this.node(d, {
            kind: ce.INPUT_OBJECT_TYPE_EXTENSION,
            name: D,
            directives: E,
            fields: N
          });
        }
        parseDirectiveDefinition() {
          let d = this._lexer.token, D = this.parseDescription();
          this.expectKeyword("directive"), this.expectToken($.AT);
          let E = this.parseName(), N = this.parseArgumentDefs(), v = this.expectOptionalKeyword("repeatable");
          this.expectKeyword("on");
          let B = this.parseDirectiveLocations();
          return this.node(d, {
            kind: ce.DIRECTIVE_DEFINITION,
            description: D,
            name: E,
            arguments: N,
            repeatable: v,
            locations: B
          });
        }
        parseDirectiveLocations() {
          return this.delimitedMany($.PIPE, this.parseDirectiveLocation);
        }
        parseDirectiveLocation() {
          let d = this._lexer.token, D = this.parseName();
          if (Object.prototype.hasOwnProperty.call(dl, D.value)) return D;
          throw this.unexpected(d);
        }
        node(d, D) {
          return this._options.noLocation !== !0 && (D.loc = new Dt(d, this._lexer.lastToken, this._lexer.source)), D;
        }
        peek(d) {
          return this._lexer.token.kind === d;
        }
        expectToken(d) {
          let D = this._lexer.token;
          if (D.kind === d) return this.advanceLexer(), D;
          throw ft(this._lexer.source, D.start, `Expected ${Cp(d)}, found ${Ma(D)}.`);
        }
        expectOptionalToken(d) {
          return this._lexer.token.kind === d ? (this.advanceLexer(), !0) : !1;
        }
        expectKeyword(d) {
          let D = this._lexer.token;
          if (D.kind === $.NAME && D.value === d) this.advanceLexer();
          else throw ft(this._lexer.source, D.start, `Expected "${d}", found ${Ma(D)}.`);
        }
        expectOptionalKeyword(d) {
          let D = this._lexer.token;
          return D.kind === $.NAME && D.value === d ? (this.advanceLexer(), !0) : !1;
        }
        unexpected(d) {
          let D = d ?? this._lexer.token;
          return ft(this._lexer.source, D.start, `Unexpected ${Ma(D)}.`);
        }
        any(d, D, E) {
          this.expectToken(d);
          let N = [];
          for (; !this.expectOptionalToken(E); ) N.push(D.call(this));
          return N;
        }
        optionalMany(d, D, E) {
          if (this.expectOptionalToken(d)) {
            let N = [];
            do
              N.push(D.call(this));
            while (!this.expectOptionalToken(E));
            return N;
          }
          return [];
        }
        many(d, D, E) {
          this.expectToken(d);
          let N = [];
          do
            N.push(D.call(this));
          while (!this.expectOptionalToken(E));
          return N;
        }
        delimitedMany(d, D) {
          this.expectOptionalToken(d);
          let E = [];
          do
            E.push(D.call(this));
          while (this.expectOptionalToken(d));
          return E;
        }
        advanceLexer() {
          let { maxTokens: d } = this._options, D = this._lexer.advance();
          if (d !== void 0 && D.kind !== $.EOF && (++this._tokenCounter, this._tokenCounter > d))
            throw ft(
              this._lexer.source,
              D.start,
              `Document contains more that ${d} tokens. Parsing aborted.`
            );
        }
      };
      function Ma(d) {
        let D = d.value;
        return Cp(d.kind) + (D != null ? ` "${D}"` : "");
      }
      function Cp(d) {
        return R8(d) ? `"${d}"` : d;
      }
      function e3(d, D) {
        let E = new SyntaxError(d + " (" + D.loc.start.line + ":" + D.loc.start.column + ")");
        return Object.assign(E, D);
      }
      var t3 = e3;
      function n3(d) {
        let D = [], { startToken: E, endToken: N } = d.loc;
        for (let v = E; v !== N; v = v.next)
          v.kind === "Comment" && D.push({ ...v, loc: { start: v.start, end: v.end } });
        return D;
      }
      var r3 = { allowLegacyFragmentVariables: !0 };
      function i3(d) {
        if ((d == null ? void 0 : d.name) === "GraphQLError") {
          let {
            message: D,
            locations: [E]
          } = d;
          return t3(D, { loc: { start: E }, cause: d });
        }
        return d;
      }
      function s3(d) {
        let D;
        try {
          D = Q8(d, r3);
        } catch (E) {
          throw i3(E);
        }
        return D.comments = n3(D), D;
      }
      var a3 = { parse: s3, astFormat: "graphql", hasPragma: tt, locStart: J, locEnd: be }, o3 = { graphql: y8 };
      return u(l);
    });
  }), jm = class {
    constructor() {
      this.listeners = [], this.unexpectedErrorHandler = function(e) {
        setTimeout(() => {
          throw e.stack ? Ro.isErrorNoTelemetry(e) ? new Ro(
            e.message + `

` + e.stack
          ) : new Error(
            e.message + `

` + e.stack
          ) : e;
        }, 0);
      };
    }
    emit(e) {
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    onUnexpectedError(e) {
      this.unexpectedErrorHandler(e), this.emit(e);
    }
    onUnexpectedExternalError(e) {
      this.unexpectedErrorHandler(e);
    }
  }, Km = new jm();
  function Bi(e) {
    qm(e) || Km.onUnexpectedError(e);
  }
  function bc(e) {
    if (e instanceof Error) {
      let { name: t, message: n } = e, r = e.stacktrace || e.stack;
      return { $isError: !0, name: t, message: n, stack: r, noTelemetry: Ro.isErrorNoTelemetry(e) };
    }
    return e;
  }
  var ko = "Canceled";
  function qm(e) {
    return e instanceof Gm ? !0 : e instanceof Error && e.name === ko && e.message === ko;
  }
  var Gm = class extends Error {
    constructor() {
      super(ko), this.name = this.message;
    }
  }, Ro = class ml extends Error {
    constructor(t) {
      super(t), this.name = "CodeExpectedError";
    }
    static fromError(t) {
      if (t instanceof ml) return t;
      let n = new ml();
      return n.message = t.message, n.stack = t.stack, n;
    }
    static isErrorNoTelemetry(t) {
      return t.name === "CodeExpectedError";
    }
  }, Zt = class Ap extends Error {
    constructor(t) {
      super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, Ap.prototype);
    }
  };
  function Hm(e, t) {
    let n = this, r = !1, i;
    return function() {
      return r || (r = !0, t || (i = e.apply(n, arguments))), i;
    };
  }
  var Ps;
  (function(e) {
    function t(T) {
      return T && typeof T == "object" && typeof T[Symbol.iterator] == "function";
    }
    e.is = t;
    let n = Object.freeze([]);
    function r() {
      return n;
    }
    e.empty = r;
    function* i(T) {
      yield T;
    }
    e.single = i;
    function s(T) {
      return t(T) ? T : i(T);
    }
    e.wrap = s;
    function a(T) {
      return T || n;
    }
    e.from = a;
    function* o(T) {
      for (let I = T.length - 1; I >= 0; I--) yield T[I];
    }
    e.reverse = o;
    function u(T) {
      return !T || T[Symbol.iterator]().next().done === !0;
    }
    e.isEmpty = u;
    function l(T) {
      return T[Symbol.iterator]().next().value;
    }
    e.first = l;
    function c(T, I) {
      let O = 0;
      for (let k of T) if (I(k, O++)) return !0;
      return !1;
    }
    e.some = c;
    function f(T, I) {
      for (let O of T) if (I(O)) return O;
    }
    e.find = f;
    function* p(T, I) {
      for (let O of T) I(O) && (yield O);
    }
    e.filter = p;
    function* m(T, I) {
      let O = 0;
      for (let k of T) yield I(k, O++);
    }
    e.map = m;
    function* g(T, I) {
      let O = 0;
      for (let k of T) yield* I(k, O++);
    }
    e.flatMap = g;
    function* y(...T) {
      for (let I of T) yield* I;
    }
    e.concat = y;
    function S(T, I, O) {
      let k = O;
      for (let X of T) k = I(k, X);
      return k;
    }
    e.reduce = S;
    function* C(T, I, O = T.length) {
      for (I < 0 && (I += T.length), O < 0 ? O += T.length : O > T.length && (O = T.length); I < O; I++)
        yield T[I];
    }
    e.slice = C;
    function w(T, I = Number.POSITIVE_INFINITY) {
      let O = [];
      if (I === 0) return [O, T];
      let k = T[Symbol.iterator]();
      for (let X = 0; X < I; X++) {
        let F = k.next();
        if (F.done) return [O, e.empty()];
        O.push(F.value);
      }
      return [
        O,
        {
          [Symbol.iterator]() {
            return k;
          }
        }
      ];
    }
    e.consume = w;
    async function A(T) {
      let I = [];
      for await (let O of T) I.push(O);
      return Promise.resolve(I);
    }
    e.asyncToArray = A;
  })(Ps || (Ps = {}));
  function c3(e) {
    return e;
  }
  function d3(e, t) {
  }
  function vc(e) {
    if (Ps.is(e)) {
      let t = [];
      for (let n of e)
        if (n)
          try {
            n.dispose();
          } catch (r) {
            t.push(r);
          }
      if (t.length === 1) throw t[0];
      if (t.length > 1) throw new AggregateError(t, "Encountered errors while disposing of store");
      return Array.isArray(e) ? [] : e;
    } else if (e) return e.dispose(), e;
  }
  function Wm(...e) {
    return Vs(() => vc(e));
  }
  function Vs(e) {
    return {
      dispose: Hm(() => {
        e();
      })
    };
  }
  var Mo = (Or = class {
    constructor() {
      this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = !1;
    }
    dispose() {
      this._isDisposed || (this._isDisposed = !0, this.clear());
    }
    get isDisposed() {
      return this._isDisposed;
    }
    clear() {
      if (this._toDispose.size !== 0)
        try {
          vc(this._toDispose);
        } finally {
          this._toDispose.clear();
        }
    }
    add(t) {
      if (!t) return t;
      if (t === this) throw new Error("Cannot register a disposable on itself!");
      return this._isDisposed ? Or.DISABLE_DISPOSED_WARNING || console.warn(
        new Error(
          "Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!"
        ).stack
      ) : this._toDispose.add(t), t;
    }
    deleteAndLeak(t) {
      t && this._toDispose.has(t) && (this._toDispose.delete(t), void 0);
    }
  }, Or.DISABLE_DISPOSED_WARNING = !1, Or), $s = (bi = class {
    constructor() {
      this._store = new Mo(), this._store;
    }
    dispose() {
      this._store.dispose();
    }
    _register(t) {
      if (t === this) throw new Error("Cannot register a disposable on itself!");
      return this._store.add(t);
    }
  }, bi.None = Object.freeze({ dispose() {
  } }), bi), Be = (Vn = class {
    constructor(t) {
      this.element = t, this.next = Vn.Undefined, this.prev = Vn.Undefined;
    }
  }, Vn.Undefined = new Vn(void 0), Vn), zm = class {
    constructor() {
      this._first = Be.Undefined, this._last = Be.Undefined, this._size = 0;
    }
    get size() {
      return this._size;
    }
    isEmpty() {
      return this._first === Be.Undefined;
    }
    clear() {
      let e = this._first;
      for (; e !== Be.Undefined; ) {
        let t = e.next;
        e.prev = Be.Undefined, e.next = Be.Undefined, e = t;
      }
      this._first = Be.Undefined, this._last = Be.Undefined, this._size = 0;
    }
    unshift(e) {
      return this._insert(e, !1);
    }
    push(e) {
      return this._insert(e, !0);
    }
    _insert(e, t) {
      let n = new Be(e);
      if (this._first === Be.Undefined) this._first = n, this._last = n;
      else if (t) {
        let i = this._last;
        this._last = n, n.prev = i, i.next = n;
      } else {
        let i = this._first;
        this._first = n, n.next = i, i.prev = n;
      }
      this._size += 1;
      let r = !1;
      return () => {
        r || (r = !0, this._remove(n));
      };
    }
    shift() {
      if (this._first !== Be.Undefined) {
        let e = this._first.element;
        return this._remove(this._first), e;
      }
    }
    pop() {
      if (this._last !== Be.Undefined) {
        let e = this._last.element;
        return this._remove(this._last), e;
      }
    }
    _remove(e) {
      if (e.prev !== Be.Undefined && e.next !== Be.Undefined) {
        let t = e.prev;
        t.next = e.next, e.next.prev = t;
      } else
        e.prev === Be.Undefined && e.next === Be.Undefined ? (this._first = Be.Undefined, this._last = Be.Undefined) : e.next === Be.Undefined ? (this._last = this._last.prev, this._last.next = Be.Undefined) : e.prev === Be.Undefined && (this._first = this._first.next, this._first.prev = Be.Undefined);
      this._size -= 1;
    }
    *[Symbol.iterator]() {
      let e = this._first;
      for (; e !== Be.Undefined; ) yield e.element, e = e.next;
    }
  }, Ym = globalThis.performance && typeof globalThis.performance.now == "function", _c = class Fp {
    static create(t) {
      return new Fp(t);
    }
    constructor(t) {
      this._now = Ym && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
    }
    stop() {
      this._stopTime = this._now();
    }
    reset() {
      this._startTime = this._now(), this._stopTime = -1;
    }
    elapsed() {
      return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime;
    }
  }, Us;
  (function(e) {
    e.None = () => $s.None;
    function t(U, M) {
      return p(U, () => {
      }, 0, void 0, !0, void 0, M);
    }
    e.defer = t;
    function n(U) {
      return (M, K = null, Y) => {
        let Z = !1, se;
        return se = U(
          (re) => {
            if (!Z) return se ? se.dispose() : Z = !0, M.call(K, re);
          },
          null,
          Y
        ), Z && se.dispose(), se;
      };
    }
    e.once = n;
    function r(U, M) {
      return e.once(e.filter(U, M));
    }
    e.onceIf = r;
    function i(U, M, K) {
      return c((Y, Z = null, se) => U((re) => Y.call(Z, M(re)), null, se), K);
    }
    e.map = i;
    function s(U, M, K) {
      return c(
        (Y, Z = null, se) => U(
          (re) => {
            M(re), Y.call(Z, re);
          },
          null,
          se
        ),
        K
      );
    }
    e.forEach = s;
    function a(U, M, K) {
      return c((Y, Z = null, se) => U((re) => M(re) && Y.call(Z, re), null, se), K);
    }
    e.filter = a;
    function o(U) {
      return U;
    }
    e.signal = o;
    function u(...U) {
      return (M, K = null, Y) => {
        let Z = Wm(...U.map((se) => se((re) => M.call(K, re))));
        return f(Z, Y);
      };
    }
    e.any = u;
    function l(U, M, K, Y) {
      let Z = K;
      return i(U, (se) => (Z = M(Z, se), Z), Y);
    }
    e.reduce = l;
    function c(U, M) {
      let K, Y = {
        onWillAddFirstListener() {
          K = U(Z.fire, Z);
        },
        onDidRemoveLastListener() {
          K == null || K.dispose();
        }
      }, Z = new Kt(Y);
      return M == null || M.add(Z), Z.event;
    }
    function f(U, M) {
      return M instanceof Array ? M.push(U) : M && M.add(U), U;
    }
    function p(U, M, K = 100, Y = !1, Z = !1, se, re) {
      let De, Ee, _, W = 0, G, Q = {
        leakWarningThreshold: se,
        onWillAddFirstListener() {
          De = U((R) => {
            W++, Ee = M(Ee, R), Y && !_ && (L.fire(Ee), Ee = void 0), G = () => {
              let ne = Ee;
              Ee = void 0, _ = void 0, (!Y || W > 1) && L.fire(ne), W = 0;
            }, typeof K == "number" ? (clearTimeout(_), _ = setTimeout(G, K)) : _ === void 0 && (_ = 0, queueMicrotask(G));
          });
        },
        onWillRemoveListener() {
          Z && W > 0 && (G == null || G());
        },
        onDidRemoveLastListener() {
          G = void 0, De.dispose();
        }
      }, L = new Kt(Q);
      return re == null || re.add(L), L.event;
    }
    e.debounce = p;
    function m(U, M = 0, K) {
      return e.debounce(U, (Y, Z) => Y ? (Y.push(Z), Y) : [Z], M, void 0, !0, void 0, K);
    }
    e.accumulate = m;
    function g(U, M = (Y, Z) => Y === Z, K) {
      let Y = !0, Z;
      return a(
        U,
        (se) => {
          let re = Y || !M(se, Z);
          return Y = !1, Z = se, re;
        },
        K
      );
    }
    e.latch = g;
    function y(U, M, K) {
      return [e.filter(U, M, K), e.filter(U, (Y) => !M(Y), K)];
    }
    e.split = y;
    function S(U, M = !1, K = [], Y) {
      let Z = K.slice(), se = U((Ee) => {
        Z ? Z.push(Ee) : De.fire(Ee);
      });
      Y && Y.add(se);
      let re = () => {
        Z == null || Z.forEach((Ee) => De.fire(Ee)), Z = null;
      }, De = new Kt({
        onWillAddFirstListener() {
          se || (se = U((Ee) => De.fire(Ee)), Y && Y.add(se));
        },
        onDidAddFirstListener() {
          Z && (M ? setTimeout(re) : re());
        },
        onDidRemoveLastListener() {
          se && se.dispose(), se = null;
        }
      });
      return Y && Y.add(De), De.event;
    }
    e.buffer = S;
    function C(U, M) {
      return (K, Y, Z) => {
        let se = M(new A());
        return U(
          function(re) {
            let De = se.evaluate(re);
            De !== w && K.call(Y, De);
          },
          void 0,
          Z
        );
      };
    }
    e.chain = C;
    let w = Symbol("HaltChainable");
    class A {
      constructor() {
        this.steps = [];
      }
      map(M) {
        return this.steps.push(M), this;
      }
      forEach(M) {
        return this.steps.push((K) => (M(K), K)), this;
      }
      filter(M) {
        return this.steps.push((K) => M(K) ? K : w), this;
      }
      reduce(M, K) {
        let Y = K;
        return this.steps.push((Z) => (Y = M(Y, Z), Y)), this;
      }
      latch(M = (K, Y) => K === Y) {
        let K = !0, Y;
        return this.steps.push((Z) => {
          let se = K || !M(Z, Y);
          return K = !1, Y = Z, se ? Z : w;
        }), this;
      }
      evaluate(M) {
        for (let K of this.steps) if (M = K(M), M === w) break;
        return M;
      }
    }
    function T(U, M, K = (Y) => Y) {
      let Y = (...De) => re.fire(K(...De)), Z = () => U.on(M, Y), se = () => U.removeListener(M, Y), re = new Kt({ onWillAddFirstListener: Z, onDidRemoveLastListener: se });
      return re.event;
    }
    e.fromNodeEventEmitter = T;
    function I(U, M, K = (Y) => Y) {
      let Y = (...De) => re.fire(K(...De)), Z = () => U.addEventListener(M, Y), se = () => U.removeEventListener(M, Y), re = new Kt({ onWillAddFirstListener: Z, onDidRemoveLastListener: se });
      return re.event;
    }
    e.fromDOMEventEmitter = I;
    function O(U) {
      return new Promise((M) => n(U)(M));
    }
    e.toPromise = O;
    function k(U) {
      let M = new Kt();
      return U.then(
        (K) => {
          M.fire(K);
        },
        () => {
          M.fire(void 0);
        }
      ).finally(() => {
        M.dispose();
      }), M.event;
    }
    e.fromPromise = k;
    function X(U, M) {
      return U((K) => M.fire(K));
    }
    e.forward = X;
    function F(U, M, K) {
      return M(K), U((Y) => M(Y));
    }
    e.runAndSubscribe = F;
    class j {
      constructor(M, K) {
        this._observable = M, this._counter = 0, this._hasChanged = !1;
        let Y = {
          onWillAddFirstListener: () => {
            M.addObserver(this), this._observable.reportChanges();
          },
          onDidRemoveLastListener: () => {
            M.removeObserver(this);
          }
        };
        this.emitter = new Kt(Y), K && K.add(this.emitter);
      }
      beginUpdate(M) {
        this._counter++;
      }
      handlePossibleChange(M) {
      }
      handleChange(M, K) {
        this._hasChanged = !0;
      }
      endUpdate(M) {
        this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
      }
    }
    function P(U, M) {
      return new j(U, M).emitter.event;
    }
    e.fromObservable = P;
    function fe(U) {
      return (M, K, Y) => {
        let Z = 0, se = !1, re = {
          beginUpdate() {
            Z++;
          },
          endUpdate() {
            Z--, Z === 0 && (U.reportChanges(), se && (se = !1, M.call(K)));
          },
          handlePossibleChange() {
          },
          handleChange() {
            se = !0;
          }
        };
        U.addObserver(re), U.reportChanges();
        let De = {
          dispose() {
            U.removeObserver(re);
          }
        };
        return Y instanceof Mo ? Y.add(De) : Array.isArray(Y) && Y.push(De), De;
      };
    }
    e.fromObservableLight = fe;
  })(Us || (Us = {}));
  var Jm = ($n = class {
    constructor(t) {
      this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${$n._idPool++}`, $n.all.add(this);
    }
    start(t) {
      this._stopWatch = new _c(), this.listenerCount = t;
    }
    stop() {
      if (this._stopWatch) {
        let t = this._stopWatch.elapsed();
        this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
      }
    }
  }, $n.all = /* @__PURE__ */ new Set(), $n._idPool = 0, $n), Xm = -1, Qm = (kr = class {
    constructor(t, n, r = (kr._idPool++).toString(16).padStart(3, "0")) {
      this._errorHandler = t, this.threshold = n, this.name = r, this._warnCountdown = 0;
    }
    dispose() {
      var t;
      (t = this._stacks) == null || t.clear();
    }
    check(t, n) {
      let r = this.threshold;
      if (r <= 0 || n < r) return;
      this._stacks || (this._stacks = /* @__PURE__ */ new Map());
      let i = this._stacks.get(t.value) || 0;
      if (this._stacks.set(t.value, i + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
        this._warnCountdown = r * 0.5;
        let [s, a] = this.getMostFrequentStack(), o = `[${this.name}] potential listener LEAK detected, having ${n} listeners already. MOST frequent listener (${a}):`;
        console.warn(o), console.warn(s);
        let u = new eg(o, s);
        this._errorHandler(u);
      }
      return () => {
        let s = this._stacks.get(t.value) || 0;
        this._stacks.set(t.value, s - 1);
      };
    }
    getMostFrequentStack() {
      if (!this._stacks) return;
      let t, n = 0;
      for (let [r, i] of this._stacks) (!t || n < i) && (t = [r, i], n = i);
      return t;
    }
  }, kr._idPool = 1, kr), Zm = class wp {
    static create() {
      let t = new Error();
      return new wp(t.stack ?? "");
    }
    constructor(t) {
      this.value = t;
    }
    print() {
      console.warn(
        this.value.split(
          `
`
        ).slice(2).join(`
`)
      );
    }
  }, eg = class extends Error {
    constructor(e, t) {
      super(e), this.name = "ListenerLeakError", this.stack = t;
    }
  }, tg = class extends Error {
    constructor(e, t) {
      super(e), this.name = "ListenerRefusalError", this.stack = t;
    }
  }, Bo = class {
    constructor(e) {
      this.value = e;
    }
  }, ng = 2, rg, Kt = class {
    constructor(e) {
      var t, n, r, i;
      this._size = 0, this._options = e, this._leakageMon = (t = this._options) != null && t.leakWarningThreshold ? new Qm((e == null ? void 0 : e.onListenerError) ?? Bi, ((n = this._options) == null ? void 0 : n.leakWarningThreshold) ?? Xm) : void 0, this._perfMon = (r = this._options) != null && r._profName ? new Jm(this._options._profName) : void 0, this._deliveryQueue = (i = this._options) == null ? void 0 : i.deliveryQueue;
    }
    dispose() {
      var e, t, n, r;
      this._disposed || (this._disposed = !0, ((e = this._deliveryQueue) == null ? void 0 : e.current) === this && this._deliveryQueue.reset(), this._listeners && (this._listeners = void 0, this._size = 0), (n = (t = this._options) == null ? void 0 : t.onDidRemoveLastListener) == null || n.call(t), (r = this._leakageMon) == null || r.dispose());
    }
    get event() {
      return this._event ?? (this._event = (e, t, n) => {
        var a, o, u, l, c;
        if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
          let f = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
          console.warn(f);
          let p = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], m = new tg(`${f}. HINT: Stack shows most frequent listener (${p[1]}-times)`, p[0]);
          return (((a = this._options) == null ? void 0 : a.onListenerError) || Bi)(m), $s.None;
        }
        if (this._disposed) return $s.None;
        t && (e = e.bind(t));
        let r = new Bo(e), i;
        this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (r.stack = Zm.create(), i = this._leakageMon.check(r.stack, this._size + 1)), this._listeners ? this._listeners instanceof Bo ? (this._deliveryQueue ?? (this._deliveryQueue = new ig()), this._listeners = [this._listeners, r]) : this._listeners.push(r) : ((u = (o = this._options) == null ? void 0 : o.onWillAddFirstListener) == null || u.call(o, this), this._listeners = r, (c = (l = this._options) == null ? void 0 : l.onDidAddFirstListener) == null || c.call(l, this)), this._size++;
        let s = Vs(() => {
          i == null || i(), this._removeListener(r);
        });
        return n instanceof Mo ? n.add(s) : Array.isArray(n) && n.push(s), s;
      }), this._event;
    }
    _removeListener(e) {
      var i, s, a, o;
      if ((s = (i = this._options) == null ? void 0 : i.onWillRemoveListener) == null || s.call(i, this), !this._listeners) return;
      if (this._size === 1) {
        this._listeners = void 0, (o = (a = this._options) == null ? void 0 : a.onDidRemoveLastListener) == null || o.call(a, this), this._size = 0;
        return;
      }
      let t = this._listeners, n = t.indexOf(e);
      if (n === -1)
        throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
      this._size--, t[n] = void 0;
      let r = this._deliveryQueue.current === this;
      if (this._size * ng <= t.length) {
        let u = 0;
        for (let l = 0; l < t.length; l++)
          t[l] ? t[u++] = t[l] : r && (this._deliveryQueue.end--, u < this._deliveryQueue.i && this._deliveryQueue.i--);
        t.length = u;
      }
    }
    _deliver(e, t) {
      var r;
      if (!e) return;
      let n = ((r = this._options) == null ? void 0 : r.onListenerError) || Bi;
      if (!n) {
        e.value(t);
        return;
      }
      try {
        e.value(t);
      } catch (i) {
        n(i);
      }
    }
    _deliverQueue(e) {
      let t = e.current._listeners;
      for (; e.i < e.end; ) this._deliver(t[e.i++], e.value);
      e.reset();
    }
    fire(e) {
      var t, n, r, i;
      if ((t = this._deliveryQueue) != null && t.current && (this._deliverQueue(this._deliveryQueue), (n = this._perfMon) == null || n.stop()), (r = this._perfMon) == null || r.start(this._size), this._listeners)
        if (this._listeners instanceof Bo) this._deliver(this._listeners, e);
        else {
          let s = this._deliveryQueue;
          s.enqueue(this, e, this._listeners.length), this._deliverQueue(s);
        }
      (i = this._perfMon) == null || i.stop();
    }
    hasListeners() {
      return this._size > 0;
    }
  }, ig = class {
    constructor() {
      this.i = -1, this.end = 0;
    }
    enqueue(e, t, n) {
      this.i = 0, this.end = n, this.current = e, this.value = t;
    }
    reset() {
      this.i = this.end, this.current = void 0, this.value = void 0;
    }
  };
  function sg() {
    return globalThis._VSCODE_NLS_MESSAGES;
  }
  function Nc() {
    return globalThis._VSCODE_NLS_LANGUAGE;
  }
  var ag = Nc() === "pseudo" || typeof document < "u" && document.location && document.location.hash.indexOf("pseudo=true") >= 0;
  function og(e, t) {
    let n;
    return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (r, i) => {
      let s = i[0], a = t[s], o = r;
      return typeof a == "string" ? o = a : (typeof a == "number" || typeof a == "boolean" || a === void 0 || a === null) && (o = String(a)), o;
    }), ag && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
  }
  function Le(e, t, ...n) {
    return og(typeof e == "number" ? ug(e, t) : t, n);
  }
  function ug(e, t) {
    var r;
    let n = (r = sg()) == null ? void 0 : r[e];
    if (typeof n != "string") {
      if (typeof t == "string") return t;
      throw new Error(`!!! NLS MISSING: ${e} !!!`);
    }
    return n;
  }
  var Qr = "en", Po = !1, Vo = !1, $o = !1, Cc = !1, Uo = !1, js, jo = Qr, Tc = Qr, lg, en, xn = globalThis, pt;
  typeof xn.vscode < "u" && typeof xn.vscode.process < "u" ? pt = xn.vscode.process : typeof process < "u" && typeof ((op = process == null ? void 0 : process.versions) == null ? void 0 : op.node) == "string" && (pt = process);
  var cg = typeof ((up = pt == null ? void 0 : pt.versions) == null ? void 0 : up.electron) == "string", dg = cg && (pt == null ? void 0 : pt.type) === "renderer";
  if (typeof pt == "object") {
    Po = pt.platform === "win32", Vo = pt.platform === "darwin", $o = pt.platform === "linux", $o && pt.env.SNAP && pt.env.SNAP_REVISION, pt.env.CI || pt.env.BUILD_ARTIFACTSTAGINGDIRECTORY, js = Qr, jo = Qr;
    let e = pt.env.VSCODE_NLS_CONFIG;
    if (e)
      try {
        let t = JSON.parse(e);
        js = t.userLocale, Tc = t.osLocale, jo = t.resolvedLanguage || Qr, lg = (lp = t.languagePack) == null ? void 0 : lp.translationsConfigFile;
      } catch {
      }
    Cc = !0;
  } else
    typeof navigator == "object" && !dg ? (en = navigator.userAgent, Po = en.indexOf("Windows") >= 0, Vo = en.indexOf("Macintosh") >= 0, (en.indexOf("Macintosh") >= 0 || en.indexOf("iPad") >= 0 || en.indexOf("iPhone") >= 0) && navigator.maxTouchPoints && navigator.maxTouchPoints > 0, $o = en.indexOf("Linux") >= 0, (en == null ? void 0 : en.indexOf("Mobi")) >= 0, Uo = !0, jo = Nc() || Qr, js = navigator.language.toLowerCase(), Tc = js) : console.error("Unable to resolve platform.");
  var Pi = Po, fg = Vo, hg = Cc, pg = Uo, mg = Uo && typeof xn.importScripts == "function", gg = mg ? xn.origin : void 0, En = en, Dg = typeof xn.postMessage == "function" && !xn.importScripts;
  (() => {
    if (Dg) {
      let e = [];
      xn.addEventListener("message", (n) => {
        if (n.data && n.data.vscodeScheduleAsyncWork)
          for (let r = 0, i = e.length; r < i; r++) {
            let s = e[r];
            if (s.id === n.data.vscodeScheduleAsyncWork) {
              e.splice(r, 1), s.callback();
              return;
            }
          }
      });
      let t = 0;
      return (n) => {
        let r = ++t;
        e.push({ id: r, callback: n }), xn.postMessage({ vscodeScheduleAsyncWork: r }, "*");
      };
    }
    return (e) => setTimeout(e);
  })();
  var Eg = !!(En && En.indexOf("Chrome") >= 0);
  En && En.indexOf("Firefox") >= 0, !Eg && En && En.indexOf("Safari") >= 0, En && En.indexOf("Edg/") >= 0, En && En.indexOf("Android") >= 0;
  function yg(e) {
    return e;
  }
  var bg = class {
    constructor(e, t) {
      this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = yg) : (this._fn = t, this._computeKey = e.getCacheKey);
    }
    get(e) {
      let t = this._computeKey(e);
      return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
    }
  }, Sc = class {
    constructor(e) {
      this.executor = e, this._didRun = !1;
    }
    get value() {
      if (!this._didRun)
        try {
          this._value = this.executor();
        } catch (e) {
          this._error = e;
        } finally {
          this._didRun = !0;
        }
      if (this._error) throw this._error;
      return this._value;
    }
    get rawValue() {
      return this._value;
    }
  };
  function vg(e) {
    return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
  }
  function _g(e) {
    return e.split(/\r\n|\r|\n/);
  }
  function Ng(e) {
    for (let t = 0, n = e.length; t < n; t++) {
      let r = e.charCodeAt(t);
      if (r !== 32 && r !== 9) return t;
    }
    return -1;
  }
  function Cg(e, t = e.length - 1) {
    for (let n = t; n >= 0; n--) {
      let r = e.charCodeAt(n);
      if (r !== 32 && r !== 9) return n;
    }
    return -1;
  }
  function Ac(e) {
    return e >= 65 && e <= 90;
  }
  function Ks(e) {
    return 55296 <= e && e <= 56319;
  }
  function Ko(e) {
    return 56320 <= e && e <= 57343;
  }
  function Fc(e, t) {
    return (e - 55296 << 10) + (t - 56320) + 65536;
  }
  function Tg(e, t, n) {
    let r = e.charCodeAt(n);
    if (Ks(r) && n + 1 < t) {
      let i = e.charCodeAt(n + 1);
      if (Ko(i)) return Fc(r, i);
    }
    return r;
  }
  var Sg = /^[\t\n\r\x20-\x7E]*$/;
  function Ag(e) {
    return Sg.test(e);
  }
  vn = class {
    static getInstance() {
      return vn._INSTANCE || (vn._INSTANCE = new vn()), vn._INSTANCE;
    }
    constructor() {
      this._data = Fg();
    }
    getGraphemeBreakType(t) {
      if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
      if (t < 127) return 0;
      let n = this._data, r = n.length / 3, i = 1;
      for (; i <= r; )
        if (t < n[3 * i]) i = 2 * i;
        else if (t > n[3 * i + 1]) i = 2 * i + 1;
        else return n[3 * i + 2];
      return 0;
    }
  }, vn._INSTANCE = null;
  function Fg() {
    return JSON.parse(
      "[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]"
    );
  }
  var qo = ($t = class {
    static getInstance(t) {
      return $t.cache.get(Array.from(t));
    }
    static getLocales() {
      return $t._locales.value;
    }
    constructor(t) {
      this.confusableDictionary = t;
    }
    isAmbiguous(t) {
      return this.confusableDictionary.has(t);
    }
    getPrimaryConfusable(t) {
      return this.confusableDictionary.get(t);
    }
    getConfusableCodePoints() {
      return new Set(this.confusableDictionary.keys());
    }
  }, $t.ambiguousCharacterData = new Sc(
    () => JSON.parse(
      '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}'
    )
  ), $t.cache = new bg({ getCacheKey: JSON.stringify }, (t) => {
    function n(c) {
      let f = /* @__PURE__ */ new Map();
      for (let p = 0; p < c.length; p += 2) f.set(c[p], c[p + 1]);
      return f;
    }
    function r(c, f) {
      let p = new Map(c);
      for (let [m, g] of f) p.set(m, g);
      return p;
    }
    function i(c, f) {
      if (!c) return f;
      let p = /* @__PURE__ */ new Map();
      for (let [m, g] of c) f.has(m) && p.set(m, g);
      return p;
    }
    let s = $t.ambiguousCharacterData.value, a = t.filter((c) => !c.startsWith("_") && c in s);
    a.length === 0 && (a = ["_default"]);
    let o;
    for (let c of a) {
      let f = n(s[c]);
      o = i(o, f);
    }
    let u = n(s._common), l = r(u, o);
    return new $t(l);
  }), $t._locales = new Sc(
    () => Object.keys($t.ambiguousCharacterData.value).filter((t) => !t.startsWith("_"))
  ), $t), Go = (Un = class {
    static getRawData() {
      return JSON.parse(
        "[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]"
      );
    }
    static getData() {
      return this._data || (this._data = new Set(Un.getRawData())), this._data;
    }
    static isInvisibleCharacter(t) {
      return Un.getData().has(t);
    }
    static get codePoints() {
      return Un.getData();
    }
  }, Un._data = void 0, Un), Zr, Ho = globalThis.vscode;
  if (typeof Ho < "u" && typeof Ho.process < "u") {
    let e = Ho.process;
    Zr = {
      get platform() {
        return e.platform;
      },
      get arch() {
        return e.arch;
      },
      get env() {
        return e.env;
      },
      cwd() {
        return e.cwd();
      }
    };
  } else
    typeof process < "u" && typeof ((cp = process == null ? void 0 : process.versions) == null ? void 0 : cp.node) == "string" ? Zr = {
      get platform() {
        return process.platform;
      },
      get arch() {
        return process.arch;
      },
      get env() {
        return process.env;
      },
      cwd() {
        return process.env.VSCODE_CWD || process.cwd();
      }
    } : Zr = {
      get platform() {
        return Pi ? "win32" : fg ? "darwin" : "linux";
      },
      get arch() {
      },
      get env() {
        return {};
      },
      cwd() {
        return "/";
      }
    };
  var qs = Zr.cwd, wg = Zr.env, Ig = Zr.platform, xg = 65, Lg = 97, Og = 90, kg = 122, Qn = 46, ot = 47, xt = 92, Zn = 58, Rg = 63, wc = class extends Error {
    constructor(e, t, n) {
      let r;
      typeof t == "string" && t.indexOf("not ") === 0 ? (r = "must not be", t = t.replace(/^not /, "")) : r = "must be";
      let i = e.indexOf(".") !== -1 ? "property" : "argument", s = `The "${e}" ${i} ${r} of type ${t}`;
      s += `. Received type ${typeof n}`, super(s), this.code = "ERR_INVALID_ARG_TYPE";
    }
  };
  function Mg(e, t) {
    if (e === null || typeof e != "object") throw new wc(t, "Object", e);
  }
  function $e(e, t) {
    if (typeof e != "string") throw new wc(t, "string", e);
  }
  var Ln = Ig === "win32";
  function he(e) {
    return e === ot || e === xt;
  }
  function Wo(e) {
    return e === ot;
  }
  function er(e) {
    return e >= xg && e <= Og || e >= Lg && e <= kg;
  }
  function Gs(e, t, n, r) {
    let i = "", s = 0, a = -1, o = 0, u = 0;
    for (let l = 0; l <= e.length; ++l) {
      if (l < e.length) u = e.charCodeAt(l);
      else {
        if (r(u)) break;
        u = ot;
      }
      if (r(u)) {
        if (!(a === l - 1 || o === 1))
          if (o === 2) {
            if (i.length < 2 || s !== 2 || i.charCodeAt(i.length - 1) !== Qn || i.charCodeAt(i.length - 2) !== Qn) {
              if (i.length > 2) {
                let c = i.lastIndexOf(n);
                c === -1 ? (i = "", s = 0) : (i = i.slice(0, c), s = i.length - 1 - i.lastIndexOf(n)), a = l, o = 0;
                continue;
              } else if (i.length !== 0) {
                i = "", s = 0, a = l, o = 0;
                continue;
              }
            }
            t && (i += i.length > 0 ? `${n}..` : "..", s = 2);
          } else
            i.length > 0 ? i += `${n}${e.slice(a + 1, l)}` : i = e.slice(a + 1, l), s = l - a - 1;
        a = l, o = 0;
      } else u === Qn && o !== -1 ? ++o : o = -1;
    }
    return i;
  }
  function Bg(e) {
    return e ? `${e[0] === "." ? "" : "."}${e}` : "";
  }
  function Ic(e, t) {
    Mg(t, "pathObject");
    let n = t.dir || t.root, r = t.base || `${t.name || ""}${Bg(t.ext)}`;
    return n ? n === t.root ? `${n}${r}` : `${n}${e}${r}` : r;
  }
  var yt = {
    resolve(...e) {
      let t = "", n = "", r = !1;
      for (let i = e.length - 1; i >= -1; i--) {
        let s;
        if (i >= 0) {
          if (s = e[i], $e(s, `paths[${i}]`), s.length === 0) continue;
        } else
          t.length === 0 ? s = qs() : (s = wg[`=${t}`] || qs(), (s === void 0 || s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === xt) && (s = `${t}\\`));
        let a = s.length, o = 0, u = "", l = !1, c = s.charCodeAt(0);
        if (a === 1) he(c) && (o = 1, l = !0);
        else if (he(c))
          if (l = !0, he(s.charCodeAt(1))) {
            let f = 2, p = f;
            for (; f < a && !he(s.charCodeAt(f)); ) f++;
            if (f < a && f !== p) {
              let m = s.slice(p, f);
              for (p = f; f < a && he(s.charCodeAt(f)); ) f++;
              if (f < a && f !== p) {
                for (p = f; f < a && !he(s.charCodeAt(f)); ) f++;
                (f === a || f !== p) && (u = `\\\\${m}\\${s.slice(p, f)}`, o = f);
              }
            }
          } else o = 1;
        else
          er(c) && s.charCodeAt(1) === Zn && (u = s.slice(0, 2), o = 2, a > 2 && he(s.charCodeAt(2)) && (l = !0, o = 3));
        if (u.length > 0)
          if (t.length > 0) {
            if (u.toLowerCase() !== t.toLowerCase()) continue;
          } else t = u;
        if (r) {
          if (t.length > 0) break;
        } else if (n = `${s.slice(o)}\\${n}`, r = l, l && t.length > 0) break;
      }
      return n = Gs(n, !r, "\\", he), r ? `${t}\\${n}` : `${t}${n}` || ".";
    },
    normalize(e) {
      $e(e, "path");
      let t = e.length;
      if (t === 0) return ".";
      let n = 0, r, i = !1, s = e.charCodeAt(0);
      if (t === 1) return Wo(s) ? "\\" : e;
      if (he(s))
        if (i = !0, he(e.charCodeAt(1))) {
          let o = 2, u = o;
          for (; o < t && !he(e.charCodeAt(o)); ) o++;
          if (o < t && o !== u) {
            let l = e.slice(u, o);
            for (u = o; o < t && he(e.charCodeAt(o)); ) o++;
            if (o < t && o !== u) {
              for (u = o; o < t && !he(e.charCodeAt(o)); ) o++;
              if (o === t) return `\\\\${l}\\${e.slice(u)}\\`;
              o !== u && (r = `\\\\${l}\\${e.slice(u, o)}`, n = o);
            }
          }
        } else n = 1;
      else
        er(s) && e.charCodeAt(1) === Zn && (r = e.slice(0, 2), n = 2, t > 2 && he(e.charCodeAt(2)) && (i = !0, n = 3));
      let a = n < t ? Gs(e.slice(n), !i, "\\", he) : "";
      return a.length === 0 && !i && (a = "."), a.length > 0 && he(e.charCodeAt(t - 1)) && (a += "\\"), r === void 0 ? i ? `\\${a}` : a : i ? `${r}\\${a}` : `${r}${a}`;
    },
    isAbsolute(e) {
      $e(e, "path");
      let t = e.length;
      if (t === 0) return !1;
      let n = e.charCodeAt(0);
      return he(n) || t > 2 && er(n) && e.charCodeAt(1) === Zn && he(e.charCodeAt(2));
    },
    join(...e) {
      if (e.length === 0) return ".";
      let t, n;
      for (let s = 0; s < e.length; ++s) {
        let a = e[s];
        $e(a, "path"), a.length > 0 && (t === void 0 ? t = n = a : t += `\\${a}`);
      }
      if (t === void 0) return ".";
      let r = !0, i = 0;
      if (typeof n == "string" && he(n.charCodeAt(0))) {
        ++i;
        let s = n.length;
        s > 1 && he(n.charCodeAt(1)) && (++i, s > 2 && (he(n.charCodeAt(2)) ? ++i : r = !1));
      }
      if (r) {
        for (; i < t.length && he(t.charCodeAt(i)); ) i++;
        i >= 2 && (t = `\\${t.slice(i)}`);
      }
      return yt.normalize(t);
    },
    relative(e, t) {
      if ($e(e, "from"), $e(t, "to"), e === t) return "";
      let n = yt.resolve(e), r = yt.resolve(t);
      if (n === r || (e = n.toLowerCase(), t = r.toLowerCase(), e === t)) return "";
      let i = 0;
      for (; i < e.length && e.charCodeAt(i) === xt; ) i++;
      let s = e.length;
      for (; s - 1 > i && e.charCodeAt(s - 1) === xt; ) s--;
      let a = s - i, o = 0;
      for (; o < t.length && t.charCodeAt(o) === xt; ) o++;
      let u = t.length;
      for (; u - 1 > o && t.charCodeAt(u - 1) === xt; ) u--;
      let l = u - o, c = a < l ? a : l, f = -1, p = 0;
      for (; p < c; p++) {
        let g = e.charCodeAt(i + p);
        if (g !== t.charCodeAt(o + p)) break;
        g === xt && (f = p);
      }
      if (p !== c) {
        if (f === -1) return r;
      } else {
        if (l > c) {
          if (t.charCodeAt(o + p) === xt) return r.slice(o + p + 1);
          if (p === 2) return r.slice(o + p);
        }
        a > c && (e.charCodeAt(i + p) === xt ? f = p : p === 2 && (f = 3)), f === -1 && (f = 0);
      }
      let m = "";
      for (p = i + f + 1; p <= s; ++p)
        (p === s || e.charCodeAt(p) === xt) && (m += m.length === 0 ? ".." : "\\..");
      return o += f, m.length > 0 ? `${m}${r.slice(o, u)}` : (r.charCodeAt(o) === xt && ++o, r.slice(o, u));
    },
    toNamespacedPath(e) {
      if (typeof e != "string" || e.length === 0) return e;
      let t = yt.resolve(e);
      if (t.length <= 2) return e;
      if (t.charCodeAt(0) === xt) {
        if (t.charCodeAt(1) === xt) {
          let n = t.charCodeAt(2);
          if (n !== Rg && n !== Qn) return `\\\\?\\UNC\\${t.slice(2)}`;
        }
      } else if (er(t.charCodeAt(0)) && t.charCodeAt(1) === Zn && t.charCodeAt(2) === xt)
        return `\\\\?\\${t}`;
      return e;
    },
    dirname(e) {
      $e(e, "path");
      let t = e.length;
      if (t === 0) return ".";
      let n = -1, r = 0, i = e.charCodeAt(0);
      if (t === 1) return he(i) ? e : ".";
      if (he(i)) {
        if (n = r = 1, he(e.charCodeAt(1))) {
          let o = 2, u = o;
          for (; o < t && !he(e.charCodeAt(o)); ) o++;
          if (o < t && o !== u) {
            for (u = o; o < t && he(e.charCodeAt(o)); ) o++;
            if (o < t && o !== u) {
              for (u = o; o < t && !he(e.charCodeAt(o)); ) o++;
              if (o === t) return e;
              o !== u && (n = r = o + 1);
            }
          }
        }
      } else
        er(i) && e.charCodeAt(1) === Zn && (n = t > 2 && he(e.charCodeAt(2)) ? 3 : 2, r = n);
      let s = -1, a = !0;
      for (let o = t - 1; o >= r; --o)
        if (he(e.charCodeAt(o))) {
          if (!a) {
            s = o;
            break;
          }
        } else a = !1;
      if (s === -1) {
        if (n === -1) return ".";
        s = n;
      }
      return e.slice(0, s);
    },
    basename(e, t) {
      t !== void 0 && $e(t, "suffix"), $e(e, "path");
      let n = 0, r = -1, i = !0, s;
      if (e.length >= 2 && er(e.charCodeAt(0)) && e.charCodeAt(1) === Zn && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t === e) return "";
        let a = t.length - 1, o = -1;
        for (s = e.length - 1; s >= n; --s) {
          let u = e.charCodeAt(s);
          if (he(u)) {
            if (!i) {
              n = s + 1;
              break;
            }
          } else
            o === -1 && (i = !1, o = s + 1), a >= 0 && (u === t.charCodeAt(a) ? --a === -1 && (r = s) : (a = -1, r = o));
        }
        return n === r ? r = o : r === -1 && (r = e.length), e.slice(n, r);
      }
      for (s = e.length - 1; s >= n; --s)
        if (he(e.charCodeAt(s))) {
          if (!i) {
            n = s + 1;
            break;
          }
        } else r === -1 && (i = !1, r = s + 1);
      return r === -1 ? "" : e.slice(n, r);
    },
    extname(e) {
      $e(e, "path");
      let t = 0, n = -1, r = 0, i = -1, s = !0, a = 0;
      e.length >= 2 && e.charCodeAt(1) === Zn && er(e.charCodeAt(0)) && (t = r = 2);
      for (let o = e.length - 1; o >= t; --o) {
        let u = e.charCodeAt(o);
        if (he(u)) {
          if (!s) {
            r = o + 1;
            break;
          }
          continue;
        }
        i === -1 && (s = !1, i = o + 1), u === Qn ? n === -1 ? n = o : a !== 1 && (a = 1) : n !== -1 && (a = -1);
      }
      return n === -1 || i === -1 || a === 0 || a === 1 && n === i - 1 && n === r + 1 ? "" : e.slice(n, i);
    },
    format: Ic.bind(null, "\\"),
    parse(e) {
      $e(e, "path");
      let t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      let n = e.length, r = 0, i = e.charCodeAt(0);
      if (n === 1) return he(i) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
      if (he(i)) {
        if (r = 1, he(e.charCodeAt(1))) {
          let f = 2, p = f;
          for (; f < n && !he(e.charCodeAt(f)); ) f++;
          if (f < n && f !== p) {
            for (p = f; f < n && he(e.charCodeAt(f)); ) f++;
            if (f < n && f !== p) {
              for (p = f; f < n && !he(e.charCodeAt(f)); ) f++;
              f === n ? r = f : f !== p && (r = f + 1);
            }
          }
        }
      } else if (er(i) && e.charCodeAt(1) === Zn) {
        if (n <= 2) return t.root = t.dir = e, t;
        if (r = 2, he(e.charCodeAt(2))) {
          if (n === 3) return t.root = t.dir = e, t;
          r = 3;
        }
      }
      r > 0 && (t.root = e.slice(0, r));
      let s = -1, a = r, o = -1, u = !0, l = e.length - 1, c = 0;
      for (; l >= r; --l) {
        if (i = e.charCodeAt(l), he(i)) {
          if (!u) {
            a = l + 1;
            break;
          }
          continue;
        }
        o === -1 && (u = !1, o = l + 1), i === Qn ? s === -1 ? s = l : c !== 1 && (c = 1) : s !== -1 && (c = -1);
      }
      return o !== -1 && (s === -1 || c === 0 || c === 1 && s === o - 1 && s === a + 1 ? t.base = t.name = e.slice(a, o) : (t.name = e.slice(a, s), t.base = e.slice(a, o), t.ext = e.slice(s, o))), a > 0 && a !== r ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t;
    },
    sep: "\\",
    delimiter: ";",
    win32: null,
    posix: null
  }, Pg = (() => {
    if (Ln) {
      let e = /\\/g;
      return () => {
        let t = qs().replace(e, "/");
        return t.slice(t.indexOf("/"));
      };
    }
    return () => qs();
  })(), bt = {
    resolve(...e) {
      let t = "", n = !1;
      for (let r = e.length - 1; r >= -1 && !n; r--) {
        let i = r >= 0 ? e[r] : Pg();
        $e(i, `paths[${r}]`), i.length !== 0 && (t = `${i}/${t}`, n = i.charCodeAt(0) === ot);
      }
      return t = Gs(t, !n, "/", Wo), n ? `/${t}` : t.length > 0 ? t : ".";
    },
    normalize(e) {
      if ($e(e, "path"), e.length === 0) return ".";
      let t = e.charCodeAt(0) === ot, n = e.charCodeAt(e.length - 1) === ot;
      return e = Gs(e, !t, "/", Wo), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
    },
    isAbsolute(e) {
      return $e(e, "path"), e.length > 0 && e.charCodeAt(0) === ot;
    },
    join(...e) {
      if (e.length === 0) return ".";
      let t;
      for (let n = 0; n < e.length; ++n) {
        let r = e[n];
        $e(r, "path"), r.length > 0 && (t === void 0 ? t = r : t += `/${r}`);
      }
      return t === void 0 ? "." : bt.normalize(t);
    },
    relative(e, t) {
      if ($e(e, "from"), $e(t, "to"), e === t || (e = bt.resolve(e), t = bt.resolve(t), e === t))
        return "";
      let n = 1, r = e.length, i = r - n, s = 1, a = t.length - s, o = i < a ? i : a, u = -1, l = 0;
      for (; l < o; l++) {
        let f = e.charCodeAt(n + l);
        if (f !== t.charCodeAt(s + l)) break;
        f === ot && (u = l);
      }
      if (l === o)
        if (a > o) {
          if (t.charCodeAt(s + l) === ot) return t.slice(s + l + 1);
          if (l === 0) return t.slice(s + l);
        } else i > o && (e.charCodeAt(n + l) === ot ? u = l : l === 0 && (u = 0));
      let c = "";
      for (l = n + u + 1; l <= r; ++l)
        (l === r || e.charCodeAt(l) === ot) && (c += c.length === 0 ? ".." : "/..");
      return `${c}${t.slice(s + u)}`;
    },
    toNamespacedPath(e) {
      return e;
    },
    dirname(e) {
      if ($e(e, "path"), e.length === 0) return ".";
      let t = e.charCodeAt(0) === ot, n = -1, r = !0;
      for (let i = e.length - 1; i >= 1; --i)
        if (e.charCodeAt(i) === ot) {
          if (!r) {
            n = i;
            break;
          }
        } else r = !1;
      return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n);
    },
    basename(e, t) {
      t !== void 0 && $e(t, "ext"), $e(e, "path");
      let n = 0, r = -1, i = !0, s;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t === e) return "";
        let a = t.length - 1, o = -1;
        for (s = e.length - 1; s >= 0; --s) {
          let u = e.charCodeAt(s);
          if (u === ot) {
            if (!i) {
              n = s + 1;
              break;
            }
          } else
            o === -1 && (i = !1, o = s + 1), a >= 0 && (u === t.charCodeAt(a) ? --a === -1 && (r = s) : (a = -1, r = o));
        }
        return n === r ? r = o : r === -1 && (r = e.length), e.slice(n, r);
      }
      for (s = e.length - 1; s >= 0; --s)
        if (e.charCodeAt(s) === ot) {
          if (!i) {
            n = s + 1;
            break;
          }
        } else r === -1 && (i = !1, r = s + 1);
      return r === -1 ? "" : e.slice(n, r);
    },
    extname(e) {
      $e(e, "path");
      let t = -1, n = 0, r = -1, i = !0, s = 0;
      for (let a = e.length - 1; a >= 0; --a) {
        let o = e.charCodeAt(a);
        if (o === ot) {
          if (!i) {
            n = a + 1;
            break;
          }
          continue;
        }
        r === -1 && (i = !1, r = a + 1), o === Qn ? t === -1 ? t = a : s !== 1 && (s = 1) : t !== -1 && (s = -1);
      }
      return t === -1 || r === -1 || s === 0 || s === 1 && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
    },
    format: Ic.bind(null, "/"),
    parse(e) {
      $e(e, "path");
      let t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      let n = e.charCodeAt(0) === ot, r;
      n ? (t.root = "/", r = 1) : r = 0;
      let i = -1, s = 0, a = -1, o = !0, u = e.length - 1, l = 0;
      for (; u >= r; --u) {
        let c = e.charCodeAt(u);
        if (c === ot) {
          if (!o) {
            s = u + 1;
            break;
          }
          continue;
        }
        a === -1 && (o = !1, a = u + 1), c === Qn ? i === -1 ? i = u : l !== 1 && (l = 1) : i !== -1 && (l = -1);
      }
      if (a !== -1) {
        let c = s === 0 && n ? 1 : s;
        i === -1 || l === 0 || l === 1 && i === a - 1 && i === s + 1 ? t.base = t.name = e.slice(c, a) : (t.name = e.slice(c, i), t.base = e.slice(c, a), t.ext = e.slice(i, a));
      }
      return s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = "/"), t;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
  };
  bt.win32 = yt.win32 = yt, bt.posix = yt.posix = bt, Ln ? yt.normalize : bt.normalize;
  var Vg = Ln ? yt.join : bt.join;
  Ln ? yt.resolve : bt.resolve, Ln ? yt.relative : bt.relative, Ln ? yt.dirname : bt.dirname, Ln ? yt.basename : bt.basename, Ln ? yt.extname : bt.extname, Ln ? yt.sep : bt.sep;
  var $g = /^\w[\w\d+.-]*$/, Ug = /^\//, jg = /^\/\//;
  function Kg(e, t) {
    if (!e.scheme && t)
      throw new Error(
        `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`
      );
    if (e.scheme && !$g.test(e.scheme))
      throw new Error("[UriError]: Scheme contains illegal characters.");
    if (e.path) {
      if (e.authority) {
        if (!Ug.test(e.path))
          throw new Error(
            '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
          );
      } else if (jg.test(e.path))
        throw new Error(
          '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
        );
    }
  }
  function qg(e, t) {
    return !e && !t ? "file" : e;
  }
  function Gg(e, t) {
    switch (e) {
      case "https":
      case "http":
      case "file":
        t ? t[0] !== tn && (t = tn + t) : t = tn;
        break;
    }
    return t;
  }
  var we = "", tn = "/", Hg = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, yn = class Ba {
    static isUri(t) {
      return t instanceof Ba ? !0 : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : !1;
    }
    constructor(t, n, r, i, s, a = !1) {
      typeof t == "object" ? (this.scheme = t.scheme || we, this.authority = t.authority || we, this.path = t.path || we, this.query = t.query || we, this.fragment = t.fragment || we) : (this.scheme = qg(t, a), this.authority = n || we, this.path = Gg(this.scheme, r || we), this.query = i || we, this.fragment = s || we, Kg(this, a));
    }
    get fsPath() {
      return zo(this, !1);
    }
    with(t) {
      if (!t) return this;
      let { scheme: n, authority: r, path: i, query: s, fragment: a } = t;
      return n === void 0 ? n = this.scheme : n === null && (n = we), r === void 0 ? r = this.authority : r === null && (r = we), i === void 0 ? i = this.path : i === null && (i = we), s === void 0 ? s = this.query : s === null && (s = we), a === void 0 ? a = this.fragment : a === null && (a = we), n === this.scheme && r === this.authority && i === this.path && s === this.query && a === this.fragment ? this : new ei(n, r, i, s, a);
    }
    static parse(t, n = !1) {
      let r = Hg.exec(t);
      return r ? new ei(r[2] || we, Hs(r[4] || we), Hs(r[5] || we), Hs(r[7] || we), Hs(r[9] || we), n) : new ei(we, we, we, we, we);
    }
    static file(t) {
      let n = we;
      if (Pi && (t = t.replace(/\\/g, tn)), t[0] === tn && t[1] === tn) {
        let r = t.indexOf(tn, 2);
        r === -1 ? (n = t.substring(2), t = tn) : (n = t.substring(2, r), t = t.substring(r) || tn);
      }
      return new ei("file", n, t, we, we);
    }
    static from(t, n) {
      return new ei(t.scheme, t.authority, t.path, t.query, t.fragment, n);
    }
    static joinPath(t, ...n) {
      if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
      let r;
      return Pi && t.scheme === "file" ? r = Ba.file(yt.join(zo(t, !0), ...n)).path : r = bt.join(t.path, ...n), t.with({ path: r });
    }
    toString(t = !1) {
      return Yo(this, t);
    }
    toJSON() {
      return this;
    }
    static revive(t) {
      if (t) {
        if (t instanceof Ba) return t;
        {
          let n = new ei(t);
          return n._formatted = t.external ?? null, n._fsPath = t._sep === xc ? t.fsPath ?? null : null, n;
        }
      } else return t;
    }
  }, xc = Pi ? 1 : void 0, ei = class extends yn {
    constructor() {
      super(...arguments), this._formatted = null, this._fsPath = null;
    }
    get fsPath() {
      return this._fsPath || (this._fsPath = zo(this, !1)), this._fsPath;
    }
    toString(e = !1) {
      return e ? Yo(this, !0) : (this._formatted || (this._formatted = Yo(this, !1)), this._formatted);
    }
    toJSON() {
      let e = { $mid: 1 };
      return this._fsPath && (e.fsPath = this._fsPath, e._sep = xc), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
    }
  }, Lc = {
    58: "%3A",
    47: "%2F",
    63: "%3F",
    35: "%23",
    91: "%5B",
    93: "%5D",
    64: "%40",
    33: "%21",
    36: "%24",
    38: "%26",
    39: "%27",
    40: "%28",
    41: "%29",
    42: "%2A",
    43: "%2B",
    44: "%2C",
    59: "%3B",
    61: "%3D",
    32: "%20"
  };
  function Oc(e, t, n) {
    let r, i = -1;
    for (let s = 0; s < e.length; s++) {
      let a = e.charCodeAt(s);
      if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 45 || a === 46 || a === 95 || a === 126 || t && a === 47 || n && a === 91 || n && a === 93 || n && a === 58)
        i !== -1 && (r += encodeURIComponent(e.substring(i, s)), i = -1), r !== void 0 && (r += e.charAt(s));
      else {
        r === void 0 && (r = e.substr(0, s));
        let o = Lc[a];
        o !== void 0 ? (i !== -1 && (r += encodeURIComponent(e.substring(i, s)), i = -1), r += o) : i === -1 && (i = s);
      }
    }
    return i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e;
  }
  function Wg(e) {
    let t;
    for (let n = 0; n < e.length; n++) {
      let r = e.charCodeAt(n);
      r === 35 || r === 63 ? (t === void 0 && (t = e.substr(0, n)), t += Lc[r]) : t !== void 0 && (t += e[n]);
    }
    return t !== void 0 ? t : e;
  }
  function zo(e, t) {
    let n;
    return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, Pi && (n = n.replace(/\//g, "\\")), n;
  }
  function Yo(e, t) {
    let n = t ? Wg : Oc, r = "", { scheme: i, authority: s, path: a, query: o, fragment: u } = e;
    if (i && (r += i, r += ":"), (s || i === "file") && (r += tn, r += tn), s) {
      let l = s.indexOf("@");
      if (l !== -1) {
        let c = s.substr(0, l);
        s = s.substr(l + 1), l = c.lastIndexOf(":"), l === -1 ? r += n(c, !1, !1) : (r += n(c.substr(0, l), !1, !1), r += ":", r += n(c.substr(l + 1), !1, !0)), r += "@";
      }
      s = s.toLowerCase(), l = s.lastIndexOf(":"), l === -1 ? r += n(s, !1, !0) : (r += n(s.substr(0, l), !1, !0), r += s.substr(l));
    }
    if (a) {
      if (a.length >= 3 && a.charCodeAt(0) === 47 && a.charCodeAt(2) === 58) {
        let l = a.charCodeAt(1);
        l >= 65 && l <= 90 && (a = `/${String.fromCharCode(l + 32)}:${a.substr(3)}`);
      } else if (a.length >= 2 && a.charCodeAt(1) === 58) {
        let l = a.charCodeAt(0);
        l >= 65 && l <= 90 && (a = `${String.fromCharCode(l + 32)}:${a.substr(2)}`);
      }
      r += n(a, !0, !1);
    }
    return o && (r += "?", r += n(o, !1, !1)), u && (r += "#", r += t ? u : Oc(u, !1, !1)), r;
  }
  function kc(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      return e.length > 3 ? e.substr(0, 3) + kc(e.substr(3)) : e;
    }
  }
  var Rc = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
  function Hs(e) {
    return e.match(Rc) ? e.replace(Rc, (t) => kc(t)) : e;
  }
  var tr;
  (function(e) {
    e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.vscodeFileResource = "vscode-file", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.outputChannel = "output";
  })(tr || (tr = {}));
  var zg = "tkn", Yg = class {
    constructor() {
      this._hosts = /* @__PURE__ */ Object.create(null), this._ports = /* @__PURE__ */ Object.create(null), this._connectionTokens = /* @__PURE__ */ Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/";
    }
    setPreferredWebSchema(e) {
      this._preferredWebSchema = e;
    }
    get _remoteResourcesPath() {
      return bt.join(this._serverRootPath, tr.vscodeRemoteResource);
    }
    rewrite(e) {
      if (this._delegate)
        try {
          return this._delegate(e);
        } catch (a) {
          return Bi(a), e;
        }
      let t = e.authority, n = this._hosts[t];
      n && n.indexOf(":") !== -1 && n.indexOf("[") === -1 && (n = `[${n}]`);
      let r = this._ports[t], i = this._connectionTokens[t], s = `path=${encodeURIComponent(e.path)}`;
      return typeof i == "string" && (s += `&${zg}=${encodeURIComponent(i)}`), yn.from({
        scheme: pg ? this._preferredWebSchema : tr.vscodeRemoteResource,
        authority: `${n}:${r}`,
        path: this._remoteResourcesPath,
        query: s
      });
    }
  }, Jg = new Yg(), Xg = "vscode-app", Qg = (dr = class {
    asBrowserUri(t) {
      let n = this.toUri(t);
      return this.uriToBrowserUri(n);
    }
    uriToBrowserUri(t) {
      return t.scheme === tr.vscodeRemote ? Jg.rewrite(t) : t.scheme === tr.file && (hg || gg === `${tr.vscodeFileResource}://${dr.FALLBACK_AUTHORITY}`) ? t.with({
        scheme: tr.vscodeFileResource,
        authority: t.authority || dr.FALLBACK_AUTHORITY,
        query: null,
        fragment: null
      }) : t;
    }
    toUri(t, n) {
      if (yn.isUri(t)) return t;
      if (globalThis._VSCODE_FILE_ROOT) {
        let r = globalThis._VSCODE_FILE_ROOT;
        if (/^\w[\w\d+.-]*:\/\//.test(r)) return yn.joinPath(yn.parse(r, !0), t);
        let i = Vg(r, t);
        return yn.file(i);
      }
      return yn.parse(n.toUrl(t));
    }
  }, dr.FALLBACK_AUTHORITY = Xg, dr), Mc = new Qg(), Bc;
  (function(e) {
    let t = /* @__PURE__ */ new Map([
      ["1", { "Cross-Origin-Opener-Policy": "same-origin" }],
      ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }],
      [
        "3",
        {
          "Cross-Origin-Opener-Policy": "same-origin",
          "Cross-Origin-Embedder-Policy": "require-corp"
        }
      ]
    ]);
    e.CoopAndCoep = Object.freeze(t.get("3"));
    let n = "vscode-coi";
    function r(s) {
      let a;
      typeof s == "string" ? a = new URL(s).searchParams : s instanceof URL ? a = s.searchParams : yn.isUri(s) && (a = new URL(s.toString(!0)).searchParams);
      let o = a == null ? void 0 : a.get(n);
      if (o) return t.get(o);
    }
    e.getHeadersFromQuery = r;
    function i(s, a, o) {
      if (!globalThis.crossOriginIsolated) return;
      let u = a && o ? "3" : o ? "2" : "1";
      s instanceof URLSearchParams ? s.set(n, u) : s[n] = u;
    }
    e.addSearchParam = i;
  })(Bc || (Bc = {}));
  var Jo = "default", Zg = "$initialize", e4 = class {
    constructor(e, t, n, r, i) {
      this.vsWorker = e, this.req = t, this.channel = n, this.method = r, this.args = i, this.type = 0;
    }
  }, Pc = class {
    constructor(e, t, n, r) {
      this.vsWorker = e, this.seq = t, this.res = n, this.err = r, this.type = 1;
    }
  }, t4 = class {
    constructor(e, t, n, r, i) {
      this.vsWorker = e, this.req = t, this.channel = n, this.eventName = r, this.arg = i, this.type = 2;
    }
  }, n4 = class {
    constructor(e, t, n) {
      this.vsWorker = e, this.req = t, this.event = n, this.type = 3;
    }
  }, r4 = class {
    constructor(e, t) {
      this.vsWorker = e, this.req = t, this.type = 4;
    }
  }, i4 = class {
    constructor(e) {
      this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = /* @__PURE__ */ Object.create(null), this._pendingEmitters = /* @__PURE__ */ new Map(), this._pendingEvents = /* @__PURE__ */ new Map();
    }
    setWorkerId(e) {
      this._workerId = e;
    }
    sendMessage(e, t, n) {
      let r = String(++this._lastSentReq);
      return new Promise((i, s) => {
        this._pendingReplies[r] = { resolve: i, reject: s }, this._send(new e4(this._workerId, r, e, t, n));
      });
    }
    listen(e, t, n) {
      let r = null, i = new Kt({
        onWillAddFirstListener: () => {
          r = String(++this._lastSentReq), this._pendingEmitters.set(r, i), this._send(new t4(this._workerId, r, e, t, n));
        },
        onDidRemoveLastListener: () => {
          this._pendingEmitters.delete(r), this._send(new r4(this._workerId, r)), r = null;
        }
      });
      return i.event;
    }
    handleMessage(e) {
      !e || !e.vsWorker || this._workerId !== -1 && e.vsWorker !== this._workerId || this._handleMessage(e);
    }
    createProxyToRemoteChannel(e, t) {
      let n = {
        get: (r, i) => (typeof i == "string" && !r[i] && ($c(i) ? r[i] = (s) => this.listen(e, i, s) : Vc(i) ? r[i] = this.listen(e, i, void 0) : i.charCodeAt(0) === 36 && (r[i] = async (...s) => (await (t == null ? void 0 : t()), this.sendMessage(e, i, s)))), r[i])
      };
      return new Proxy(/* @__PURE__ */ Object.create(null), n);
    }
    _handleMessage(e) {
      switch (e.type) {
        case 1:
          return this._handleReplyMessage(e);
        case 0:
          return this._handleRequestMessage(e);
        case 2:
          return this._handleSubscribeEventMessage(e);
        case 3:
          return this._handleEventMessage(e);
        case 4:
          return this._handleUnsubscribeEventMessage(e);
      }
    }
    _handleReplyMessage(e) {
      if (!this._pendingReplies[e.seq]) {
        console.warn("Got reply to unknown seq");
        return;
      }
      let t = this._pendingReplies[e.seq];
      if (delete this._pendingReplies[e.seq], e.err) {
        let n = e.err;
        e.err.$isError && (n = new Error(), n.name = e.err.name, n.message = e.err.message, n.stack = e.err.stack), t.reject(n);
        return;
      }
      t.resolve(e.res);
    }
    _handleRequestMessage(e) {
      let t = e.req;
      this._handler.handleMessage(e.channel, e.method, e.args).then(
        (n) => {
          this._send(new Pc(this._workerId, t, n, void 0));
        },
        (n) => {
          n.detail instanceof Error && (n.detail = bc(n.detail)), this._send(new Pc(this._workerId, t, void 0, bc(n)));
        }
      );
    }
    _handleSubscribeEventMessage(e) {
      let t = e.req, n = this._handler.handleEvent(
        e.channel,
        e.eventName,
        e.arg
      )((r) => {
        this._send(new n4(this._workerId, t, r));
      });
      this._pendingEvents.set(t, n);
    }
    _handleEventMessage(e) {
      if (!this._pendingEmitters.has(e.req)) {
        console.warn("Got event for unknown req");
        return;
      }
      this._pendingEmitters.get(e.req).fire(e.event);
    }
    _handleUnsubscribeEventMessage(e) {
      if (!this._pendingEvents.has(e.req)) {
        console.warn("Got unsubscribe for unknown req");
        return;
      }
      this._pendingEvents.get(e.req).dispose(), this._pendingEvents.delete(e.req);
    }
    _send(e) {
      let t = [];
      if (e.type === 0)
        for (let n = 0; n < e.args.length; n++)
          e.args[n] instanceof ArrayBuffer && t.push(e.args[n]);
      else e.type === 1 && e.res instanceof ArrayBuffer && t.push(e.res);
      this._handler.sendMessage(e, t);
    }
  };
  function Vc(e) {
    return e[0] === "o" && e[1] === "n" && Ac(e.charCodeAt(2));
  }
  function $c(e) {
    return /^onDynamic/.test(e) && Ac(e.charCodeAt(9));
  }
  var s4 = class {
    constructor(e, t) {
      this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._requestHandlerFactory = t, this._requestHandler = null, this._protocol = new i4({
        sendMessage: (n, r) => {
          e(n, r);
        },
        handleMessage: (n, r, i) => this._handleMessage(n, r, i),
        handleEvent: (n, r, i) => this._handleEvent(n, r, i)
      });
    }
    onmessage(e) {
      this._protocol.handleMessage(e);
    }
    _handleMessage(e, t, n) {
      if (e === Jo && t === Zg) return this.initialize(n[0], n[1], n[2]);
      let r = e === Jo ? this._requestHandler : this._localChannels.get(e);
      if (!r) return Promise.reject(new Error(`Missing channel ${e} on worker thread`));
      if (typeof r[t] != "function")
        return Promise.reject(new Error(`Missing method ${t} on worker thread channel ${e}`));
      try {
        return Promise.resolve(r[t].apply(r, n));
      } catch (i) {
        return Promise.reject(i);
      }
    }
    _handleEvent(e, t, n) {
      let r = e === Jo ? this._requestHandler : this._localChannels.get(e);
      if (!r) throw new Error(`Missing channel ${e} on worker thread`);
      if ($c(t)) {
        let i = r[t].call(r, n);
        if (typeof i != "function")
          throw new Error(`Missing dynamic event ${t} on request handler.`);
        return i;
      }
      if (Vc(t)) {
        let i = r[t];
        if (typeof i != "function") throw new Error(`Missing event ${t} on request handler.`);
        return i;
      }
      throw new Error(`Malformed event name ${t}`);
    }
    getChannel(e) {
      if (!this._remoteChannels.has(e)) {
        let t = this._protocol.createProxyToRemoteChannel(e);
        this._remoteChannels.set(e, t);
      }
      return this._remoteChannels.get(e);
    }
    async initialize(e, t, n) {
      if (this._protocol.setWorkerId(e), this._requestHandlerFactory) {
        this._requestHandler = this._requestHandlerFactory(this);
        return;
      }
      return t && (typeof t.baseUrl < "u" && delete t.baseUrl, typeof t.paths < "u" && typeof t.paths.vs < "u" && delete t.paths.vs, typeof t.trustedTypesPolicy < "u" && delete t.trustedTypesPolicy, t.catchError = !0, globalThis.require.config(t)), import(`${Mc.asBrowserUri(`${n}.js`).toString(!0)}`).then((r) => {
        if (this._requestHandler = r.create(this), !this._requestHandler)
          throw new Error("No RequestHandler!");
      });
    }
  }, nr = class {
    constructor(e, t, n, r) {
      this.originalStart = e, this.originalLength = t, this.modifiedStart = n, this.modifiedLength = r;
    }
    getOriginalEnd() {
      return this.originalStart + this.originalLength;
    }
    getModifiedEnd() {
      return this.modifiedStart + this.modifiedLength;
    }
  };
  function Uc(e, t) {
    return (t << 5) - t + e | 0;
  }
  function a4(e, t) {
    t = Uc(149417, t);
    for (let n = 0, r = e.length; n < r; n++) t = Uc(e.charCodeAt(n), t);
    return t;
  }
  function Xo(e, t, n = 32) {
    let r = n - t, i = ~((1 << r) - 1);
    return (e << t | (i & e) >>> r) >>> 0;
  }
  function jc(e, t = 0, n = e.byteLength, r = 0) {
    for (let i = 0; i < n; i++) e[t + i] = r;
  }
  function o4(e, t, n = "0") {
    for (; e.length < t; ) e = n + e;
    return e;
  }
  function Vi(e, t = 32) {
    return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((n) => n.toString(16).padStart(2, "0")).join("") : o4((e >>> 0).toString(16), t / 4);
  }
  Rr = class {
    constructor() {
      this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1;
    }
    update(t) {
      let n = t.length;
      if (n === 0) return;
      let r = this._buff, i = this._buffLen, s = this._leftoverHighSurrogate, a, o;
      for (s !== 0 ? (a = s, o = -1, s = 0) : (a = t.charCodeAt(0), o = 0); ; ) {
        let u = a;
        if (Ks(a))
          if (o + 1 < n) {
            let l = t.charCodeAt(o + 1);
            Ko(l) ? (o++, u = Fc(a, l)) : u = 65533;
          } else {
            s = a;
            break;
          }
        else Ko(a) && (u = 65533);
        if (i = this._push(r, i, u), o++, o < n) a = t.charCodeAt(o);
        else break;
      }
      this._buffLen = i, this._leftoverHighSurrogate = s;
    }
    _push(t, n, r) {
      return r < 128 ? t[n++] = r : r < 2048 ? (t[n++] = 192 | (r & 1984) >>> 6, t[n++] = 128 | (r & 63) >>> 0) : r < 65536 ? (t[n++] = 224 | (r & 61440) >>> 12, t[n++] = 128 | (r & 4032) >>> 6, t[n++] = 128 | (r & 63) >>> 0) : (t[n++] = 240 | (r & 1835008) >>> 18, t[n++] = 128 | (r & 258048) >>> 12, t[n++] = 128 | (r & 4032) >>> 6, t[n++] = 128 | (r & 63) >>> 0), n >= 64 && (this._step(), n -= 64, this._totalLen += 64, t[0] = t[64], t[1] = t[65], t[2] = t[66]), n;
    }
    digest() {
      return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), Vi(this._h0) + Vi(this._h1) + Vi(this._h2) + Vi(this._h3) + Vi(this._h4);
    }
    _wrapUp() {
      this._buff[this._buffLen++] = 128, jc(this._buff, this._buffLen), this._buffLen > 56 && (this._step(), jc(this._buff));
      let t = 8 * this._totalLen;
      this._buffDV.setUint32(56, Math.floor(t / 4294967296), !1), this._buffDV.setUint32(60, t % 4294967296, !1), this._step();
    }
    _step() {
      let t = Rr._bigBlock32, n = this._buffDV;
      for (let f = 0; f < 64; f += 4) t.setUint32(f, n.getUint32(f, !1), !1);
      for (let f = 64; f < 320; f += 4)
        t.setUint32(
          f,
          Xo(
            t.getUint32(f - 12, !1) ^ t.getUint32(f - 32, !1) ^ t.getUint32(f - 56, !1) ^ t.getUint32(f - 64, !1),
            1
          ),
          !1
        );
      let r = this._h0, i = this._h1, s = this._h2, a = this._h3, o = this._h4, u, l, c;
      for (let f = 0; f < 80; f++)
        f < 20 ? (u = i & s | ~i & a, l = 1518500249) : f < 40 ? (u = i ^ s ^ a, l = 1859775393) : f < 60 ? (u = i & s | i & a | s & a, l = 2400959708) : (u = i ^ s ^ a, l = 3395469782), c = Xo(r, 5) + u + o + l + t.getUint32(f * 4, !1) & 4294967295, o = a, a = s, s = Xo(i, 30), i = r, r = c;
      this._h0 = this._h0 + r & 4294967295, this._h1 = this._h1 + i & 4294967295, this._h2 = this._h2 + s & 4294967295, this._h3 = this._h3 + a & 4294967295, this._h4 = this._h4 + o & 4294967295;
    }
  }, Rr._bigBlock32 = new DataView(new ArrayBuffer(320));
  var Kc = class {
    constructor(e) {
      this.source = e;
    }
    getElements() {
      let e = this.source, t = new Int32Array(e.length);
      for (let n = 0, r = e.length; n < r; n++) t[n] = e.charCodeAt(n);
      return t;
    }
  };
  function u4(e, t, n) {
    return new Gc(new Kc(e), new Kc(t)).ComputeDiff(n).changes;
  }
  var ti = class {
    static Assert(e, t) {
      if (!e) throw new Error(t);
    }
  }, ni = class {
    static Copy(e, t, n, r, i) {
      for (let s = 0; s < i; s++) n[r + s] = e[t + s];
    }
    static Copy2(e, t, n, r, i) {
      for (let s = 0; s < i; s++) n[r + s] = e[t + s];
    }
  }, qc = class {
    constructor() {
      this.m_changes = [], this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824, this.m_originalCount = 0, this.m_modifiedCount = 0;
    }
    MarkNextChange() {
      (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(
        new nr(
          this.m_originalStart,
          this.m_originalCount,
          this.m_modifiedStart,
          this.m_modifiedCount
        )
      ), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824;
    }
    AddOriginalElement(e, t) {
      this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_originalCount++;
    }
    AddModifiedElement(e, t) {
      this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_modifiedCount++;
    }
    getChanges() {
      return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes;
    }
    getReverseChanges() {
      return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes;
    }
  }, Gc = class Si {
    constructor(t, n, r = null) {
      this.ContinueProcessingPredicate = r, this._originalSequence = t, this._modifiedSequence = n;
      let [i, s, a] = Si._getElements(t), [o, u, l] = Si._getElements(n);
      this._hasStrings = a && l, this._originalStringElements = i, this._originalElementsOrHash = s, this._modifiedStringElements = o, this._modifiedElementsOrHash = u, this.m_forwardHistory = [], this.m_reverseHistory = [];
    }
    static _isStringArray(t) {
      return t.length > 0 && typeof t[0] == "string";
    }
    static _getElements(t) {
      let n = t.getElements();
      if (Si._isStringArray(n)) {
        let r = new Int32Array(n.length);
        for (let i = 0, s = n.length; i < s; i++) r[i] = a4(n[i], 0);
        return [n, r, !0];
      }
      return n instanceof Int32Array ? [[], n, !1] : [[], new Int32Array(n), !1];
    }
    ElementsAreEqual(t, n) {
      return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[n] : !0;
    }
    ElementsAreStrictEqual(t, n) {
      if (!this.ElementsAreEqual(t, n)) return !1;
      let r = Si._getStrictElement(this._originalSequence, t), i = Si._getStrictElement(this._modifiedSequence, n);
      return r === i;
    }
    static _getStrictElement(t, n) {
      return typeof t.getStrictElement == "function" ? t.getStrictElement(n) : null;
    }
    OriginalElementsAreEqual(t, n) {
      return this._originalElementsOrHash[t] !== this._originalElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._originalStringElements[n] : !0;
    }
    ModifiedElementsAreEqual(t, n) {
      return this._modifiedElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._modifiedStringElements[t] === this._modifiedStringElements[n] : !0;
    }
    ComputeDiff(t) {
      return this._ComputeDiff(
        0,
        this._originalElementsOrHash.length - 1,
        0,
        this._modifiedElementsOrHash.length - 1,
        t
      );
    }
    _ComputeDiff(t, n, r, i, s) {
      let a = [!1], o = this.ComputeDiffRecursive(t, n, r, i, a);
      return s && (o = this.PrettifyChanges(o)), { quitEarly: a[0], changes: o };
    }
    ComputeDiffRecursive(t, n, r, i, s) {
      for (s[0] = !1; t <= n && r <= i && this.ElementsAreEqual(t, r); ) t++, r++;
      for (; n >= t && i >= r && this.ElementsAreEqual(n, i); ) n--, i--;
      if (t > n || r > i) {
        let f;
        return r <= i ? (ti.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), f = [new nr(t, 0, r, i - r + 1)]) : t <= n ? (ti.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), f = [new nr(t, n - t + 1, r, 0)]) : (ti.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), ti.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), f = []), f;
      }
      let a = [0], o = [0], u = this.ComputeRecursionPoint(t, n, r, i, a, o, s), l = a[0], c = o[0];
      if (u !== null) return u;
      if (!s[0]) {
        let f = this.ComputeDiffRecursive(t, l, r, c, s), p = [];
        return s[0] ? p = [new nr(l + 1, n - (l + 1) + 1, c + 1, i - (c + 1) + 1)] : p = this.ComputeDiffRecursive(l + 1, n, c + 1, i, s), this.ConcatenateChanges(f, p);
      }
      return [new nr(t, n - t + 1, r, i - r + 1)];
    }
    WALKTRACE(t, n, r, i, s, a, o, u, l, c, f, p, m, g, y, S, C, w) {
      let A = null, T = null, I = new qc(), O = n, k = r, X = m[0] - S[0] - i, F = -1073741824, j = this.m_forwardHistory.length - 1;
      do {
        let P = X + t;
        P === O || P < k && l[P - 1] < l[P + 1] ? (f = l[P + 1], g = f - X - i, f < F && I.MarkNextChange(), F = f, I.AddModifiedElement(f + 1, g), X = P + 1 - t) : (f = l[P - 1] + 1, g = f - X - i, f < F && I.MarkNextChange(), F = f - 1, I.AddOriginalElement(f, g + 1), X = P - 1 - t), j >= 0 && (l = this.m_forwardHistory[j], t = l[0], O = 1, k = l.length - 1);
      } while (--j >= -1);
      if (A = I.getReverseChanges(), w[0]) {
        let P = m[0] + 1, fe = S[0] + 1;
        if (A !== null && A.length > 0) {
          let U = A[A.length - 1];
          P = Math.max(P, U.getOriginalEnd()), fe = Math.max(fe, U.getModifiedEnd());
        }
        T = [new nr(P, p - P + 1, fe, y - fe + 1)];
      } else {
        I = new qc(), O = a, k = o, X = m[0] - S[0] - u, F = 1073741824, j = C ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
        do {
          let P = X + s;
          P === O || P < k && c[P - 1] >= c[P + 1] ? (f = c[P + 1] - 1, g = f - X - u, f > F && I.MarkNextChange(), F = f + 1, I.AddOriginalElement(f + 1, g + 1), X = P + 1 - s) : (f = c[P - 1], g = f - X - u, f > F && I.MarkNextChange(), F = f, I.AddModifiedElement(f + 1, g + 1), X = P - 1 - s), j >= 0 && (c = this.m_reverseHistory[j], s = c[0], O = 1, k = c.length - 1);
        } while (--j >= -1);
        T = I.getChanges();
      }
      return this.ConcatenateChanges(A, T);
    }
    ComputeRecursionPoint(t, n, r, i, s, a, o) {
      let u = 0, l = 0, c = 0, f = 0, p = 0, m = 0;
      t--, r--, s[0] = 0, a[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
      let g = n - t + (i - r), y = g + 1, S = new Int32Array(y), C = new Int32Array(y), w = i - r, A = n - t, T = t - r, I = n - i, O = (A - w) % 2 === 0;
      S[w] = t, C[A] = n, o[0] = !1;
      for (let k = 1; k <= g / 2 + 1; k++) {
        let X = 0, F = 0;
        c = this.ClipDiagonalBound(w - k, k, w, y), f = this.ClipDiagonalBound(w + k, k, w, y);
        for (let P = c; P <= f; P += 2) {
          P === c || P < f && S[P - 1] < S[P + 1] ? u = S[P + 1] : u = S[P - 1] + 1, l = u - (P - w) - T;
          let fe = u;
          for (; u < n && l < i && this.ElementsAreEqual(u + 1, l + 1); ) u++, l++;
          if (S[P] = u, u + l > X + F && (X = u, F = l), !O && Math.abs(P - A) <= k - 1 && u >= C[P])
            return s[0] = u, a[0] = l, fe <= C[P] && k <= 1448 ? this.WALKTRACE(w, c, f, T, A, p, m, I, S, C, u, n, s, l, i, a, O, o) : null;
        }
        let j = (X - t + (F - r) - k) / 2;
        if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(X, j))
          return o[0] = !0, s[0] = X, a[0] = F, j > 0 && k <= 1448 ? this.WALKTRACE(w, c, f, T, A, p, m, I, S, C, u, n, s, l, i, a, O, o) : (t++, r++, [new nr(t, n - t + 1, r, i - r + 1)]);
        p = this.ClipDiagonalBound(A - k, k, A, y), m = this.ClipDiagonalBound(A + k, k, A, y);
        for (let P = p; P <= m; P += 2) {
          P === p || P < m && C[P - 1] >= C[P + 1] ? u = C[P + 1] - 1 : u = C[P - 1], l = u - (P - A) - I;
          let fe = u;
          for (; u > t && l > r && this.ElementsAreEqual(u, l); ) u--, l--;
          if (C[P] = u, O && Math.abs(P - w) <= k && u <= S[P])
            return s[0] = u, a[0] = l, fe >= S[P] && k <= 1448 ? this.WALKTRACE(w, c, f, T, A, p, m, I, S, C, u, n, s, l, i, a, O, o) : null;
        }
        if (k <= 1447) {
          let P = new Int32Array(f - c + 2);
          P[0] = w - c + 1, ni.Copy2(S, c, P, 1, f - c + 1), this.m_forwardHistory.push(P), P = new Int32Array(m - p + 2), P[0] = A - p + 1, ni.Copy2(C, p, P, 1, m - p + 1), this.m_reverseHistory.push(P);
        }
      }
      return this.WALKTRACE(w, c, f, T, A, p, m, I, S, C, u, n, s, l, i, a, O, o);
    }
    PrettifyChanges(t) {
      for (let n = 0; n < t.length; n++) {
        let r = t[n], i = n < t.length - 1 ? t[n + 1].originalStart : this._originalElementsOrHash.length, s = n < t.length - 1 ? t[n + 1].modifiedStart : this._modifiedElementsOrHash.length, a = r.originalLength > 0, o = r.modifiedLength > 0;
        for (; r.originalStart + r.originalLength < i && r.modifiedStart + r.modifiedLength < s && (!a || this.OriginalElementsAreEqual(r.originalStart, r.originalStart + r.originalLength)) && (!o || this.ModifiedElementsAreEqual(r.modifiedStart, r.modifiedStart + r.modifiedLength)); ) {
          let l = this.ElementsAreStrictEqual(r.originalStart, r.modifiedStart);
          if (this.ElementsAreStrictEqual(
            r.originalStart + r.originalLength,
            r.modifiedStart + r.modifiedLength
          ) && !l)
            break;
          r.originalStart++, r.modifiedStart++;
        }
        let u = [null];
        if (n < t.length - 1 && this.ChangesOverlap(t[n], t[n + 1], u)) {
          t[n] = u[0], t.splice(n + 1, 1), n--;
          continue;
        }
      }
      for (let n = t.length - 1; n >= 0; n--) {
        let r = t[n], i = 0, s = 0;
        if (n > 0) {
          let f = t[n - 1];
          i = f.originalStart + f.originalLength, s = f.modifiedStart + f.modifiedLength;
        }
        let a = r.originalLength > 0, o = r.modifiedLength > 0, u = 0, l = this._boundaryScore(
          r.originalStart,
          r.originalLength,
          r.modifiedStart,
          r.modifiedLength
        );
        for (let f = 1; ; f++) {
          let p = r.originalStart - f, m = r.modifiedStart - f;
          if (p < i || m < s || a && !this.OriginalElementsAreEqual(p, p + r.originalLength) || o && !this.ModifiedElementsAreEqual(m, m + r.modifiedLength))
            break;
          let g = (p === i && m === s ? 5 : 0) + this._boundaryScore(p, r.originalLength, m, r.modifiedLength);
          g > l && (l = g, u = f);
        }
        r.originalStart -= u, r.modifiedStart -= u;
        let c = [null];
        if (n > 0 && this.ChangesOverlap(t[n - 1], t[n], c)) {
          t[n - 1] = c[0], t.splice(n, 1), n++;
          continue;
        }
      }
      if (this._hasStrings)
        for (let n = 1, r = t.length; n < r; n++) {
          let i = t[n - 1], s = t[n], a = s.originalStart - i.originalStart - i.originalLength, o = i.originalStart, u = s.originalStart + s.originalLength, l = u - o, c = i.modifiedStart, f = s.modifiedStart + s.modifiedLength, p = f - c;
          if (a < 5 && l < 20 && p < 20) {
            let m = this._findBetterContiguousSequence(o, l, c, p, a);
            if (m) {
              let [g, y] = m;
              (g !== i.originalStart + i.originalLength || y !== i.modifiedStart + i.modifiedLength) && (i.originalLength = g - i.originalStart, i.modifiedLength = y - i.modifiedStart, s.originalStart = g + a, s.modifiedStart = y + a, s.originalLength = u - s.originalStart, s.modifiedLength = f - s.modifiedStart);
            }
          }
        }
      return t;
    }
    _findBetterContiguousSequence(t, n, r, i, s) {
      if (n < s || i < s) return null;
      let a = t + n - s + 1, o = r + i - s + 1, u = 0, l = 0, c = 0;
      for (let f = t; f < a; f++)
        for (let p = r; p < o; p++) {
          let m = this._contiguousSequenceScore(f, p, s);
          m > 0 && m > u && (u = m, l = f, c = p);
        }
      return u > 0 ? [l, c] : null;
    }
    _contiguousSequenceScore(t, n, r) {
      let i = 0;
      for (let s = 0; s < r; s++) {
        if (!this.ElementsAreEqual(t + s, n + s)) return 0;
        i += this._originalStringElements[t + s].length;
      }
      return i;
    }
    _OriginalIsBoundary(t) {
      return t <= 0 || t >= this._originalElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._originalStringElements[t]);
    }
    _OriginalRegionIsBoundary(t, n) {
      if (this._OriginalIsBoundary(t) || this._OriginalIsBoundary(t - 1)) return !0;
      if (n > 0) {
        let r = t + n;
        if (this._OriginalIsBoundary(r - 1) || this._OriginalIsBoundary(r)) return !0;
      }
      return !1;
    }
    _ModifiedIsBoundary(t) {
      return t <= 0 || t >= this._modifiedElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[t]);
    }
    _ModifiedRegionIsBoundary(t, n) {
      if (this._ModifiedIsBoundary(t) || this._ModifiedIsBoundary(t - 1)) return !0;
      if (n > 0) {
        let r = t + n;
        if (this._ModifiedIsBoundary(r - 1) || this._ModifiedIsBoundary(r)) return !0;
      }
      return !1;
    }
    _boundaryScore(t, n, r, i) {
      let s = this._OriginalRegionIsBoundary(t, n) ? 1 : 0, a = this._ModifiedRegionIsBoundary(r, i) ? 1 : 0;
      return s + a;
    }
    ConcatenateChanges(t, n) {
      let r = [];
      if (t.length === 0 || n.length === 0) return n.length > 0 ? n : t;
      if (this.ChangesOverlap(t[t.length - 1], n[0], r)) {
        let i = new Array(t.length + n.length - 1);
        return ni.Copy(t, 0, i, 0, t.length - 1), i[t.length - 1] = r[0], ni.Copy(n, 1, i, t.length, n.length - 1), i;
      } else {
        let i = new Array(t.length + n.length);
        return ni.Copy(t, 0, i, 0, t.length), ni.Copy(n, 0, i, t.length, n.length), i;
      }
    }
    ChangesOverlap(t, n, r) {
      if (ti.Assert(
        t.originalStart <= n.originalStart,
        "Left change is not less than or equal to right change"
      ), ti.Assert(
        t.modifiedStart <= n.modifiedStart,
        "Left change is not less than or equal to right change"
      ), t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
        let i = t.originalStart, s = t.originalLength, a = t.modifiedStart, o = t.modifiedLength;
        return t.originalStart + t.originalLength >= n.originalStart && (s = n.originalStart + n.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= n.modifiedStart && (o = n.modifiedStart + n.modifiedLength - t.modifiedStart), r[0] = new nr(i, s, a, o), !0;
      } else return r[0] = null, !1;
    }
    ClipDiagonalBound(t, n, r, i) {
      if (t >= 0 && t < i) return t;
      let s = r, a = i - r - 1, o = n % 2 === 0;
      if (t < 0) {
        let u = s % 2 === 0;
        return o === u ? 0 : 1;
      } else {
        let u = a % 2 === 0;
        return o === u ? i - 1 : i - 2;
      }
    }
  }, Ue = class jr {
    constructor(t, n) {
      this.lineNumber = t, this.column = n;
    }
    with(t = this.lineNumber, n = this.column) {
      return t === this.lineNumber && n === this.column ? this : new jr(t, n);
    }
    delta(t = 0, n = 0) {
      return this.with(this.lineNumber + t, this.column + n);
    }
    equals(t) {
      return jr.equals(this, t);
    }
    static equals(t, n) {
      return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
    }
    isBefore(t) {
      return jr.isBefore(this, t);
    }
    static isBefore(t, n) {
      return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column;
    }
    isBeforeOrEqual(t) {
      return jr.isBeforeOrEqual(this, t);
    }
    static isBeforeOrEqual(t, n) {
      return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column <= n.column;
    }
    static compare(t, n) {
      let r = t.lineNumber | 0, i = n.lineNumber | 0;
      if (r === i) {
        let s = t.column | 0, a = n.column | 0;
        return s - a;
      }
      return r - i;
    }
    clone() {
      return new jr(this.lineNumber, this.column);
    }
    toString() {
      return "(" + this.lineNumber + "," + this.column + ")";
    }
    static lift(t) {
      return new jr(t.lineNumber, t.column);
    }
    static isIPosition(t) {
      return t && typeof t.lineNumber == "number" && typeof t.column == "number";
    }
    toJSON() {
      return { lineNumber: this.lineNumber, column: this.column };
    }
  }, ve = class Xe {
    constructor(t, n, r, i) {
      t > r || t === r && n > i ? (this.startLineNumber = r, this.startColumn = i, this.endLineNumber = t, this.endColumn = n) : (this.startLineNumber = t, this.startColumn = n, this.endLineNumber = r, this.endColumn = i);
    }
    isEmpty() {
      return Xe.isEmpty(this);
    }
    static isEmpty(t) {
      return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
    }
    containsPosition(t) {
      return Xe.containsPosition(this, t);
    }
    static containsPosition(t, n) {
      return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
    }
    static strictContainsPosition(t, n) {
      return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
    }
    containsRange(t) {
      return Xe.containsRange(this, t);
    }
    static containsRange(t, n) {
      return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
    }
    strictContainsRange(t) {
      return Xe.strictContainsRange(this, t);
    }
    static strictContainsRange(t, n) {
      return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
    }
    plusRange(t) {
      return Xe.plusRange(this, t);
    }
    static plusRange(t, n) {
      let r, i, s, a;
      return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (s = n.endLineNumber, a = n.endColumn) : n.endLineNumber === t.endLineNumber ? (s = n.endLineNumber, a = Math.max(n.endColumn, t.endColumn)) : (s = t.endLineNumber, a = t.endColumn), new Xe(r, i, s, a);
    }
    intersectRanges(t) {
      return Xe.intersectRanges(this, t);
    }
    static intersectRanges(t, n) {
      let r = t.startLineNumber, i = t.startColumn, s = t.endLineNumber, a = t.endColumn, o = n.startLineNumber, u = n.startColumn, l = n.endLineNumber, c = n.endColumn;
      return r < o ? (r = o, i = u) : r === o && (i = Math.max(i, u)), s > l ? (s = l, a = c) : s === l && (a = Math.min(a, c)), r > s || r === s && i > a ? null : new Xe(r, i, s, a);
    }
    equalsRange(t) {
      return Xe.equalsRange(this, t);
    }
    static equalsRange(t, n) {
      return !t && !n ? !0 : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
    }
    getEndPosition() {
      return Xe.getEndPosition(this);
    }
    static getEndPosition(t) {
      return new Ue(t.endLineNumber, t.endColumn);
    }
    getStartPosition() {
      return Xe.getStartPosition(this);
    }
    static getStartPosition(t) {
      return new Ue(t.startLineNumber, t.startColumn);
    }
    toString() {
      return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
    }
    setEndPosition(t, n) {
      return new Xe(this.startLineNumber, this.startColumn, t, n);
    }
    setStartPosition(t, n) {
      return new Xe(t, n, this.endLineNumber, this.endColumn);
    }
    collapseToStart() {
      return Xe.collapseToStart(this);
    }
    static collapseToStart(t) {
      return new Xe(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
    }
    collapseToEnd() {
      return Xe.collapseToEnd(this);
    }
    static collapseToEnd(t) {
      return new Xe(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
    }
    delta(t) {
      return new Xe(
        this.startLineNumber + t,
        this.startColumn,
        this.endLineNumber + t,
        this.endColumn
      );
    }
    static fromPositions(t, n = t) {
      return new Xe(t.lineNumber, t.column, n.lineNumber, n.column);
    }
    static lift(t) {
      return t ? new Xe(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
    }
    static isIRange(t) {
      return t && typeof t.startLineNumber == "number" && typeof t.startColumn == "number" && typeof t.endLineNumber == "number" && typeof t.endColumn == "number";
    }
    static areIntersectingOrTouching(t, n) {
      return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn);
    }
    static areIntersecting(t, n) {
      return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn <= n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn <= t.startColumn);
    }
    static compareRangesUsingStarts(t, n) {
      if (t && n) {
        let r = t.startLineNumber | 0, i = n.startLineNumber | 0;
        if (r === i) {
          let s = t.startColumn | 0, a = n.startColumn | 0;
          if (s === a) {
            let o = t.endLineNumber | 0, u = n.endLineNumber | 0;
            if (o === u) {
              let l = t.endColumn | 0, c = n.endColumn | 0;
              return l - c;
            }
            return o - u;
          }
          return s - a;
        }
        return r - i;
      }
      return (t ? 1 : 0) - (n ? 1 : 0);
    }
    static compareRangesUsingEnds(t, n) {
      return t.endLineNumber === n.endLineNumber ? t.endColumn === n.endColumn ? t.startLineNumber === n.startLineNumber ? t.startColumn - n.startColumn : t.startLineNumber - n.startLineNumber : t.endColumn - n.endColumn : t.endLineNumber - n.endLineNumber;
    }
    static spansMultipleLines(t) {
      return t.endLineNumber > t.startLineNumber;
    }
    toJSON() {
      return this;
    }
  };
  function Hc(e) {
    return e < 0 ? 0 : e > 255 ? 255 : e | 0;
  }
  function ri(e) {
    return e < 0 ? 0 : e > 4294967295 ? 4294967295 : e | 0;
  }
  var l4 = class Ip {
    constructor(t) {
      let n = Hc(t);
      this._defaultValue = n, this._asciiMap = Ip._createAsciiMap(n), this._map = /* @__PURE__ */ new Map();
    }
    static _createAsciiMap(t) {
      let n = new Uint8Array(256);
      return n.fill(t), n;
    }
    set(t, n) {
      let r = Hc(n);
      t >= 0 && t < 256 ? this._asciiMap[t] = r : this._map.set(t, r);
    }
    get(t) {
      return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue;
    }
    clear() {
      this._asciiMap.fill(this._defaultValue), this._map.clear();
    }
  }, c4 = class {
    constructor(e, t, n) {
      let r = new Uint8Array(e * t);
      for (let i = 0, s = e * t; i < s; i++) r[i] = n;
      this._data = r, this.rows = e, this.cols = t;
    }
    get(e, t) {
      return this._data[e * this.cols + t];
    }
    set(e, t, n) {
      this._data[e * this.cols + t] = n;
    }
  }, d4 = class {
    constructor(e) {
      let t = 0, n = 0;
      for (let i = 0, s = e.length; i < s; i++) {
        let [a, o, u] = e[i];
        o > t && (t = o), a > n && (n = a), u > n && (n = u);
      }
      t++, n++;
      let r = new c4(n, t, 0);
      for (let i = 0, s = e.length; i < s; i++) {
        let [a, o, u] = e[i];
        r.set(a, o, u);
      }
      this._states = r, this._maxCharCode = t;
    }
    nextState(e, t) {
      return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t);
    }
  }, Qo = null;
  function f4() {
    return Qo === null && (Qo = new d4([
      [1, 104, 2],
      [1, 72, 2],
      [1, 102, 6],
      [1, 70, 6],
      [2, 116, 3],
      [2, 84, 3],
      [3, 116, 4],
      [3, 84, 4],
      [4, 112, 5],
      [4, 80, 5],
      [5, 115, 9],
      [5, 83, 9],
      [5, 58, 10],
      [6, 105, 7],
      [6, 73, 7],
      [7, 108, 8],
      [7, 76, 8],
      [8, 101, 9],
      [8, 69, 9],
      [9, 58, 10],
      [10, 47, 11],
      [11, 47, 12]
    ])), Qo;
  }
  var $i = null;
  function h4() {
    if ($i === null) {
      $i = new l4(0);
      let e = ` 	<>'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…`;
      for (let n = 0; n < e.length; n++) $i.set(e.charCodeAt(n), 1);
      let t = ".,;:";
      for (let n = 0; n < t.length; n++) $i.set(t.charCodeAt(n), 2);
    }
    return $i;
  }
  var p4 = class gl {
    static _createLink(t, n, r, i, s) {
      let a = s - 1;
      do {
        let o = n.charCodeAt(a);
        if (t.get(o) !== 2) break;
        a--;
      } while (a > i);
      if (i > 0) {
        let o = n.charCodeAt(i - 1), u = n.charCodeAt(a);
        (o === 40 && u === 41 || o === 91 && u === 93 || o === 123 && u === 125) && a--;
      }
      return {
        range: { startLineNumber: r, startColumn: i + 1, endLineNumber: r, endColumn: a + 2 },
        url: n.substring(i, a + 1)
      };
    }
    static computeLinks(t, n = f4()) {
      let r = h4(), i = [];
      for (let s = 1, a = t.getLineCount(); s <= a; s++) {
        let o = t.getLineContent(s), u = o.length, l = 0, c = 0, f = 0, p = 1, m = !1, g = !1, y = !1, S = !1;
        for (; l < u; ) {
          let C = !1, w = o.charCodeAt(l);
          if (p === 13) {
            let A;
            switch (w) {
              case 40:
                m = !0, A = 0;
                break;
              case 41:
                A = m ? 0 : 1;
                break;
              case 91:
                y = !0, g = !0, A = 0;
                break;
              case 93:
                y = !1, A = g ? 0 : 1;
                break;
              case 123:
                S = !0, A = 0;
                break;
              case 125:
                A = S ? 0 : 1;
                break;
              case 39:
              case 34:
              case 96:
                f === w ? A = 1 : f === 39 || f === 34 || f === 96 ? A = 0 : A = 1;
                break;
              case 42:
                A = f === 42 ? 1 : 0;
                break;
              case 124:
                A = f === 124 ? 1 : 0;
                break;
              case 32:
                A = y ? 0 : 1;
                break;
              default:
                A = r.get(w);
            }
            A === 1 && (i.push(gl._createLink(r, o, s, c, l)), C = !0);
          } else if (p === 12) {
            let A;
            w === 91 ? (g = !0, A = 0) : A = r.get(w), A === 1 ? C = !0 : p = 13;
          } else p = n.nextState(p, w), p === 0 && (C = !0);
          C && (p = 1, m = !1, g = !1, S = !1, c = l + 1, f = w), l++;
        }
        p === 13 && i.push(gl._createLink(r, o, s, c, u));
      }
      return i;
    }
  };
  function m4(e) {
    return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : p4.computeLinks(e);
  }
  var g4 = (Mr = class {
    constructor() {
      this._defaultValueSet = [
        ["true", "false"],
        ["True", "False"],
        ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"],
        ["public", "protected", "private"]
      ];
    }
    navigateValueSet(t, n, r, i, s) {
      if (t && n) {
        let a = this.doNavigateValueSet(n, s);
        if (a) return { range: t, value: a };
      }
      if (r && i) {
        let a = this.doNavigateValueSet(i, s);
        if (a) return { range: r, value: a };
      }
      return null;
    }
    doNavigateValueSet(t, n) {
      let r = this.numberReplace(t, n);
      return r !== null ? r : this.textReplace(t, n);
    }
    numberReplace(t, n) {
      let r = Math.pow(10, t.length - (t.lastIndexOf(".") + 1)), i = Number(t), s = parseFloat(t);
      return !isNaN(i) && !isNaN(s) && i === s ? i === 0 && !n ? null : (i = Math.floor(i * r), i += n ? r : -r, String(i / r)) : null;
    }
    textReplace(t, n) {
      return this.valueSetsReplace(this._defaultValueSet, t, n);
    }
    valueSetsReplace(t, n, r) {
      let i = null;
      for (let s = 0, a = t.length; i === null && s < a; s++) i = this.valueSetReplace(t[s], n, r);
      return i;
    }
    valueSetReplace(t, n, r) {
      let i = t.indexOf(n);
      return i >= 0 ? (i += r ? 1 : -1, i < 0 ? i = t.length - 1 : i %= t.length, t[i]) : null;
    }
  }, Mr.INSTANCE = new Mr(), Mr), Wc = Object.freeze(function(e, t) {
    let n = setTimeout(e.bind(t), 0);
    return {
      dispose() {
        clearTimeout(n);
      }
    };
  }), Ws;
  (function(e) {
    function t(n) {
      return n === e.None || n === e.Cancelled || n instanceof zs ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
    }
    e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: Us.None }), e.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: Wc });
  })(Ws || (Ws = {}));
  var zs = class {
    constructor() {
      this._isCancelled = !1, this._emitter = null;
    }
    cancel() {
      this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled ? Wc : (this._emitter || (this._emitter = new Kt()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = null);
    }
  }, D4 = class {
    constructor(e) {
      this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
    }
    get token() {
      return this._token || (this._token = new zs()), this._token;
    }
    cancel() {
      this._token ? this._token instanceof zs && this._token.cancel() : this._token = Ws.Cancelled;
    }
    dispose(e = !1) {
      var t;
      e && this.cancel(), (t = this._parentListener) == null || t.dispose(), this._token ? this._token instanceof zs && this._token.dispose() : this._token = Ws.None;
    }
  }, Zo = class {
    constructor() {
      this._keyCodeToStr = [], this._strToKeyCode = /* @__PURE__ */ Object.create(null);
    }
    define(e, t) {
      this._keyCodeToStr[e] = t, this._strToKeyCode[t.toLowerCase()] = e;
    }
    keyCodeToStr(e) {
      return this._keyCodeToStr[e];
    }
    strToKeyCode(e) {
      return this._strToKeyCode[e.toLowerCase()] || 0;
    }
  }, Ys = new Zo(), eu = new Zo(), tu = new Zo(), E4 = new Array(230), y4 = /* @__PURE__ */ Object.create(null), b4 = /* @__PURE__ */ Object.create(null);
  (function() {
    let e = "", t = [
      [1, 0, "None", 0, "unknown", 0, "VK_UNKNOWN", e, e],
      [1, 1, "Hyper", 0, e, 0, e, e, e],
      [1, 2, "Super", 0, e, 0, e, e, e],
      [1, 3, "Fn", 0, e, 0, e, e, e],
      [1, 4, "FnLock", 0, e, 0, e, e, e],
      [1, 5, "Suspend", 0, e, 0, e, e, e],
      [1, 6, "Resume", 0, e, 0, e, e, e],
      [1, 7, "Turbo", 0, e, 0, e, e, e],
      [1, 8, "Sleep", 0, e, 0, "VK_SLEEP", e, e],
      [1, 9, "WakeUp", 0, e, 0, e, e, e],
      [0, 10, "KeyA", 31, "A", 65, "VK_A", e, e],
      [0, 11, "KeyB", 32, "B", 66, "VK_B", e, e],
      [0, 12, "KeyC", 33, "C", 67, "VK_C", e, e],
      [0, 13, "KeyD", 34, "D", 68, "VK_D", e, e],
      [0, 14, "KeyE", 35, "E", 69, "VK_E", e, e],
      [0, 15, "KeyF", 36, "F", 70, "VK_F", e, e],
      [0, 16, "KeyG", 37, "G", 71, "VK_G", e, e],
      [0, 17, "KeyH", 38, "H", 72, "VK_H", e, e],
      [0, 18, "KeyI", 39, "I", 73, "VK_I", e, e],
      [0, 19, "KeyJ", 40, "J", 74, "VK_J", e, e],
      [0, 20, "KeyK", 41, "K", 75, "VK_K", e, e],
      [0, 21, "KeyL", 42, "L", 76, "VK_L", e, e],
      [0, 22, "KeyM", 43, "M", 77, "VK_M", e, e],
      [0, 23, "KeyN", 44, "N", 78, "VK_N", e, e],
      [0, 24, "KeyO", 45, "O", 79, "VK_O", e, e],
      [0, 25, "KeyP", 46, "P", 80, "VK_P", e, e],
      [0, 26, "KeyQ", 47, "Q", 81, "VK_Q", e, e],
      [0, 27, "KeyR", 48, "R", 82, "VK_R", e, e],
      [0, 28, "KeyS", 49, "S", 83, "VK_S", e, e],
      [0, 29, "KeyT", 50, "T", 84, "VK_T", e, e],
      [0, 30, "KeyU", 51, "U", 85, "VK_U", e, e],
      [0, 31, "KeyV", 52, "V", 86, "VK_V", e, e],
      [0, 32, "KeyW", 53, "W", 87, "VK_W", e, e],
      [0, 33, "KeyX", 54, "X", 88, "VK_X", e, e],
      [0, 34, "KeyY", 55, "Y", 89, "VK_Y", e, e],
      [0, 35, "KeyZ", 56, "Z", 90, "VK_Z", e, e],
      [0, 36, "Digit1", 22, "1", 49, "VK_1", e, e],
      [0, 37, "Digit2", 23, "2", 50, "VK_2", e, e],
      [0, 38, "Digit3", 24, "3", 51, "VK_3", e, e],
      [0, 39, "Digit4", 25, "4", 52, "VK_4", e, e],
      [0, 40, "Digit5", 26, "5", 53, "VK_5", e, e],
      [0, 41, "Digit6", 27, "6", 54, "VK_6", e, e],
      [0, 42, "Digit7", 28, "7", 55, "VK_7", e, e],
      [0, 43, "Digit8", 29, "8", 56, "VK_8", e, e],
      [0, 44, "Digit9", 30, "9", 57, "VK_9", e, e],
      [0, 45, "Digit0", 21, "0", 48, "VK_0", e, e],
      [1, 46, "Enter", 3, "Enter", 13, "VK_RETURN", e, e],
      [1, 47, "Escape", 9, "Escape", 27, "VK_ESCAPE", e, e],
      [1, 48, "Backspace", 1, "Backspace", 8, "VK_BACK", e, e],
      [1, 49, "Tab", 2, "Tab", 9, "VK_TAB", e, e],
      [1, 50, "Space", 10, "Space", 32, "VK_SPACE", e, e],
      [0, 51, "Minus", 88, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"],
      [0, 52, "Equal", 86, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"],
      [0, 53, "BracketLeft", 92, "[", 219, "VK_OEM_4", "[", "OEM_4"],
      [0, 54, "BracketRight", 94, "]", 221, "VK_OEM_6", "]", "OEM_6"],
      [0, 55, "Backslash", 93, "\\", 220, "VK_OEM_5", "\\", "OEM_5"],
      [0, 56, "IntlHash", 0, e, 0, e, e, e],
      [0, 57, "Semicolon", 85, ";", 186, "VK_OEM_1", ";", "OEM_1"],
      [0, 58, "Quote", 95, "'", 222, "VK_OEM_7", "'", "OEM_7"],
      [0, 59, "Backquote", 91, "`", 192, "VK_OEM_3", "`", "OEM_3"],
      [0, 60, "Comma", 87, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"],
      [0, 61, "Period", 89, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"],
      [0, 62, "Slash", 90, "/", 191, "VK_OEM_2", "/", "OEM_2"],
      [1, 63, "CapsLock", 8, "CapsLock", 20, "VK_CAPITAL", e, e],
      [1, 64, "F1", 59, "F1", 112, "VK_F1", e, e],
      [1, 65, "F2", 60, "F2", 113, "VK_F2", e, e],
      [1, 66, "F3", 61, "F3", 114, "VK_F3", e, e],
      [1, 67, "F4", 62, "F4", 115, "VK_F4", e, e],
      [1, 68, "F5", 63, "F5", 116, "VK_F5", e, e],
      [1, 69, "F6", 64, "F6", 117, "VK_F6", e, e],
      [1, 70, "F7", 65, "F7", 118, "VK_F7", e, e],
      [1, 71, "F8", 66, "F8", 119, "VK_F8", e, e],
      [1, 72, "F9", 67, "F9", 120, "VK_F9", e, e],
      [1, 73, "F10", 68, "F10", 121, "VK_F10", e, e],
      [1, 74, "F11", 69, "F11", 122, "VK_F11", e, e],
      [1, 75, "F12", 70, "F12", 123, "VK_F12", e, e],
      [1, 76, "PrintScreen", 0, e, 0, e, e, e],
      [1, 77, "ScrollLock", 84, "ScrollLock", 145, "VK_SCROLL", e, e],
      [1, 78, "Pause", 7, "PauseBreak", 19, "VK_PAUSE", e, e],
      [1, 79, "Insert", 19, "Insert", 45, "VK_INSERT", e, e],
      [1, 80, "Home", 14, "Home", 36, "VK_HOME", e, e],
      [1, 81, "PageUp", 11, "PageUp", 33, "VK_PRIOR", e, e],
      [1, 82, "Delete", 20, "Delete", 46, "VK_DELETE", e, e],
      [1, 83, "End", 13, "End", 35, "VK_END", e, e],
      [1, 84, "PageDown", 12, "PageDown", 34, "VK_NEXT", e, e],
      [1, 85, "ArrowRight", 17, "RightArrow", 39, "VK_RIGHT", "Right", e],
      [1, 86, "ArrowLeft", 15, "LeftArrow", 37, "VK_LEFT", "Left", e],
      [1, 87, "ArrowDown", 18, "DownArrow", 40, "VK_DOWN", "Down", e],
      [1, 88, "ArrowUp", 16, "UpArrow", 38, "VK_UP", "Up", e],
      [1, 89, "NumLock", 83, "NumLock", 144, "VK_NUMLOCK", e, e],
      [1, 90, "NumpadDivide", 113, "NumPad_Divide", 111, "VK_DIVIDE", e, e],
      [1, 91, "NumpadMultiply", 108, "NumPad_Multiply", 106, "VK_MULTIPLY", e, e],
      [1, 92, "NumpadSubtract", 111, "NumPad_Subtract", 109, "VK_SUBTRACT", e, e],
      [1, 93, "NumpadAdd", 109, "NumPad_Add", 107, "VK_ADD", e, e],
      [1, 94, "NumpadEnter", 3, e, 0, e, e, e],
      [1, 95, "Numpad1", 99, "NumPad1", 97, "VK_NUMPAD1", e, e],
      [1, 96, "Numpad2", 100, "NumPad2", 98, "VK_NUMPAD2", e, e],
      [1, 97, "Numpad3", 101, "NumPad3", 99, "VK_NUMPAD3", e, e],
      [1, 98, "Numpad4", 102, "NumPad4", 100, "VK_NUMPAD4", e, e],
      [1, 99, "Numpad5", 103, "NumPad5", 101, "VK_NUMPAD5", e, e],
      [1, 100, "Numpad6", 104, "NumPad6", 102, "VK_NUMPAD6", e, e],
      [1, 101, "Numpad7", 105, "NumPad7", 103, "VK_NUMPAD7", e, e],
      [1, 102, "Numpad8", 106, "NumPad8", 104, "VK_NUMPAD8", e, e],
      [1, 103, "Numpad9", 107, "NumPad9", 105, "VK_NUMPAD9", e, e],
      [1, 104, "Numpad0", 98, "NumPad0", 96, "VK_NUMPAD0", e, e],
      [1, 105, "NumpadDecimal", 112, "NumPad_Decimal", 110, "VK_DECIMAL", e, e],
      [0, 106, "IntlBackslash", 97, "OEM_102", 226, "VK_OEM_102", e, e],
      [1, 107, "ContextMenu", 58, "ContextMenu", 93, e, e, e],
      [1, 108, "Power", 0, e, 0, e, e, e],
      [1, 109, "NumpadEqual", 0, e, 0, e, e, e],
      [1, 110, "F13", 71, "F13", 124, "VK_F13", e, e],
      [1, 111, "F14", 72, "F14", 125, "VK_F14", e, e],
      [1, 112, "F15", 73, "F15", 126, "VK_F15", e, e],
      [1, 113, "F16", 74, "F16", 127, "VK_F16", e, e],
      [1, 114, "F17", 75, "F17", 128, "VK_F17", e, e],
      [1, 115, "F18", 76, "F18", 129, "VK_F18", e, e],
      [1, 116, "F19", 77, "F19", 130, "VK_F19", e, e],
      [1, 117, "F20", 78, "F20", 131, "VK_F20", e, e],
      [1, 118, "F21", 79, "F21", 132, "VK_F21", e, e],
      [1, 119, "F22", 80, "F22", 133, "VK_F22", e, e],
      [1, 120, "F23", 81, "F23", 134, "VK_F23", e, e],
      [1, 121, "F24", 82, "F24", 135, "VK_F24", e, e],
      [1, 122, "Open", 0, e, 0, e, e, e],
      [1, 123, "Help", 0, e, 0, e, e, e],
      [1, 124, "Select", 0, e, 0, e, e, e],
      [1, 125, "Again", 0, e, 0, e, e, e],
      [1, 126, "Undo", 0, e, 0, e, e, e],
      [1, 127, "Cut", 0, e, 0, e, e, e],
      [1, 128, "Copy", 0, e, 0, e, e, e],
      [1, 129, "Paste", 0, e, 0, e, e, e],
      [1, 130, "Find", 0, e, 0, e, e, e],
      [1, 131, "AudioVolumeMute", 117, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", e, e],
      [1, 132, "AudioVolumeUp", 118, "AudioVolumeUp", 175, "VK_VOLUME_UP", e, e],
      [1, 133, "AudioVolumeDown", 119, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", e, e],
      [1, 134, "NumpadComma", 110, "NumPad_Separator", 108, "VK_SEPARATOR", e, e],
      [0, 135, "IntlRo", 115, "ABNT_C1", 193, "VK_ABNT_C1", e, e],
      [1, 136, "KanaMode", 0, e, 0, e, e, e],
      [0, 137, "IntlYen", 0, e, 0, e, e, e],
      [1, 138, "Convert", 0, e, 0, e, e, e],
      [1, 139, "NonConvert", 0, e, 0, e, e, e],
      [1, 140, "Lang1", 0, e, 0, e, e, e],
      [1, 141, "Lang2", 0, e, 0, e, e, e],
      [1, 142, "Lang3", 0, e, 0, e, e, e],
      [1, 143, "Lang4", 0, e, 0, e, e, e],
      [1, 144, "Lang5", 0, e, 0, e, e, e],
      [1, 145, "Abort", 0, e, 0, e, e, e],
      [1, 146, "Props", 0, e, 0, e, e, e],
      [1, 147, "NumpadParenLeft", 0, e, 0, e, e, e],
      [1, 148, "NumpadParenRight", 0, e, 0, e, e, e],
      [1, 149, "NumpadBackspace", 0, e, 0, e, e, e],
      [1, 150, "NumpadMemoryStore", 0, e, 0, e, e, e],
      [1, 151, "NumpadMemoryRecall", 0, e, 0, e, e, e],
      [1, 152, "NumpadMemoryClear", 0, e, 0, e, e, e],
      [1, 153, "NumpadMemoryAdd", 0, e, 0, e, e, e],
      [1, 154, "NumpadMemorySubtract", 0, e, 0, e, e, e],
      [1, 155, "NumpadClear", 131, "Clear", 12, "VK_CLEAR", e, e],
      [1, 156, "NumpadClearEntry", 0, e, 0, e, e, e],
      [1, 0, e, 5, "Ctrl", 17, "VK_CONTROL", e, e],
      [1, 0, e, 4, "Shift", 16, "VK_SHIFT", e, e],
      [1, 0, e, 6, "Alt", 18, "VK_MENU", e, e],
      [1, 0, e, 57, "Meta", 91, "VK_COMMAND", e, e],
      [1, 157, "ControlLeft", 5, e, 0, "VK_LCONTROL", e, e],
      [1, 158, "ShiftLeft", 4, e, 0, "VK_LSHIFT", e, e],
      [1, 159, "AltLeft", 6, e, 0, "VK_LMENU", e, e],
      [1, 160, "MetaLeft", 57, e, 0, "VK_LWIN", e, e],
      [1, 161, "ControlRight", 5, e, 0, "VK_RCONTROL", e, e],
      [1, 162, "ShiftRight", 4, e, 0, "VK_RSHIFT", e, e],
      [1, 163, "AltRight", 6, e, 0, "VK_RMENU", e, e],
      [1, 164, "MetaRight", 57, e, 0, "VK_RWIN", e, e],
      [1, 165, "BrightnessUp", 0, e, 0, e, e, e],
      [1, 166, "BrightnessDown", 0, e, 0, e, e, e],
      [1, 167, "MediaPlay", 0, e, 0, e, e, e],
      [1, 168, "MediaRecord", 0, e, 0, e, e, e],
      [1, 169, "MediaFastForward", 0, e, 0, e, e, e],
      [1, 170, "MediaRewind", 0, e, 0, e, e, e],
      [1, 171, "MediaTrackNext", 124, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", e, e],
      [1, 172, "MediaTrackPrevious", 125, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", e, e],
      [1, 173, "MediaStop", 126, "MediaStop", 178, "VK_MEDIA_STOP", e, e],
      [1, 174, "Eject", 0, e, 0, e, e, e],
      [1, 175, "MediaPlayPause", 127, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", e, e],
      [
        1,
        176,
        "MediaSelect",
        128,
        "LaunchMediaPlayer",
        181,
        "VK_MEDIA_LAUNCH_MEDIA_SELECT",
        e,
        e
      ],
      [1, 177, "LaunchMail", 129, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", e, e],
      [1, 178, "LaunchApp2", 130, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", e, e],
      [1, 179, "LaunchApp1", 0, e, 0, "VK_MEDIA_LAUNCH_APP1", e, e],
      [1, 180, "SelectTask", 0, e, 0, e, e, e],
      [1, 181, "LaunchScreenSaver", 0, e, 0, e, e, e],
      [1, 182, "BrowserSearch", 120, "BrowserSearch", 170, "VK_BROWSER_SEARCH", e, e],
      [1, 183, "BrowserHome", 121, "BrowserHome", 172, "VK_BROWSER_HOME", e, e],
      [1, 184, "BrowserBack", 122, "BrowserBack", 166, "VK_BROWSER_BACK", e, e],
      [1, 185, "BrowserForward", 123, "BrowserForward", 167, "VK_BROWSER_FORWARD", e, e],
      [1, 186, "BrowserStop", 0, e, 0, "VK_BROWSER_STOP", e, e],
      [1, 187, "BrowserRefresh", 0, e, 0, "VK_BROWSER_REFRESH", e, e],
      [1, 188, "BrowserFavorites", 0, e, 0, "VK_BROWSER_FAVORITES", e, e],
      [1, 189, "ZoomToggle", 0, e, 0, e, e, e],
      [1, 190, "MailReply", 0, e, 0, e, e, e],
      [1, 191, "MailForward", 0, e, 0, e, e, e],
      [1, 192, "MailSend", 0, e, 0, e, e, e],
      [1, 0, e, 114, "KeyInComposition", 229, e, e, e],
      [1, 0, e, 116, "ABNT_C2", 194, "VK_ABNT_C2", e, e],
      [1, 0, e, 96, "OEM_8", 223, "VK_OEM_8", e, e],
      [1, 0, e, 0, e, 0, "VK_KANA", e, e],
      [1, 0, e, 0, e, 0, "VK_HANGUL", e, e],
      [1, 0, e, 0, e, 0, "VK_JUNJA", e, e],
      [1, 0, e, 0, e, 0, "VK_FINAL", e, e],
      [1, 0, e, 0, e, 0, "VK_HANJA", e, e],
      [1, 0, e, 0, e, 0, "VK_KANJI", e, e],
      [1, 0, e, 0, e, 0, "VK_CONVERT", e, e],
      [1, 0, e, 0, e, 0, "VK_NONCONVERT", e, e],
      [1, 0, e, 0, e, 0, "VK_ACCEPT", e, e],
      [1, 0, e, 0, e, 0, "VK_MODECHANGE", e, e],
      [1, 0, e, 0, e, 0, "VK_SELECT", e, e],
      [1, 0, e, 0, e, 0, "VK_PRINT", e, e],
      [1, 0, e, 0, e, 0, "VK_EXECUTE", e, e],
      [1, 0, e, 0, e, 0, "VK_SNAPSHOT", e, e],
      [1, 0, e, 0, e, 0, "VK_HELP", e, e],
      [1, 0, e, 0, e, 0, "VK_APPS", e, e],
      [1, 0, e, 0, e, 0, "VK_PROCESSKEY", e, e],
      [1, 0, e, 0, e, 0, "VK_PACKET", e, e],
      [1, 0, e, 0, e, 0, "VK_DBE_SBCSCHAR", e, e],
      [1, 0, e, 0, e, 0, "VK_DBE_DBCSCHAR", e, e],
      [1, 0, e, 0, e, 0, "VK_ATTN", e, e],
      [1, 0, e, 0, e, 0, "VK_CRSEL", e, e],
      [1, 0, e, 0, e, 0, "VK_EXSEL", e, e],
      [1, 0, e, 0, e, 0, "VK_EREOF", e, e],
      [1, 0, e, 0, e, 0, "VK_PLAY", e, e],
      [1, 0, e, 0, e, 0, "VK_ZOOM", e, e],
      [1, 0, e, 0, e, 0, "VK_NONAME", e, e],
      [1, 0, e, 0, e, 0, "VK_PA1", e, e],
      [1, 0, e, 0, e, 0, "VK_OEM_CLEAR", e, e]
    ], n = [], r = [];
    for (let i of t) {
      let [s, a, o, u, l, c, f, p, m] = i;
      if (r[a] || (r[a] = !0, y4[o] = a, b4[o.toLowerCase()] = a), !n[u]) {
        if (n[u] = !0, !l)
          throw new Error(`String representation missing for key code ${u} around scan code ${o}`);
        Ys.define(u, l), eu.define(u, p || l), tu.define(u, m || p || l);
      }
      c && (E4[c] = u);
    }
  })();
  var zc;
  (function(e) {
    function t(o) {
      return Ys.keyCodeToStr(o);
    }
    e.toString = t;
    function n(o) {
      return Ys.strToKeyCode(o);
    }
    e.fromString = n;
    function r(o) {
      return eu.keyCodeToStr(o);
    }
    e.toUserSettingsUS = r;
    function i(o) {
      return tu.keyCodeToStr(o);
    }
    e.toUserSettingsGeneral = i;
    function s(o) {
      return eu.strToKeyCode(o) || tu.strToKeyCode(o);
    }
    e.fromUserSettings = s;
    function a(o) {
      if (o >= 98 && o <= 113) return null;
      switch (o) {
        case 16:
          return "Up";
        case 18:
          return "Down";
        case 15:
          return "Left";
        case 17:
          return "Right";
      }
      return Ys.keyCodeToStr(o);
    }
    e.toElectronAccelerator = a;
  })(zc || (zc = {}));
  function v4(e, t) {
    let n = (t & 65535) << 16 >>> 0;
    return (e | n) >>> 0;
  }
  var _4 = class Wt extends ve {
    constructor(t, n, r, i) {
      super(t, n, r, i), this.selectionStartLineNumber = t, this.selectionStartColumn = n, this.positionLineNumber = r, this.positionColumn = i;
    }
    toString() {
      return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
    }
    equalsSelection(t) {
      return Wt.selectionsEqual(this, t);
    }
    static selectionsEqual(t, n) {
      return t.selectionStartLineNumber === n.selectionStartLineNumber && t.selectionStartColumn === n.selectionStartColumn && t.positionLineNumber === n.positionLineNumber && t.positionColumn === n.positionColumn;
    }
    getDirection() {
      return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? 0 : 1;
    }
    setEndPosition(t, n) {
      return this.getDirection() === 0 ? new Wt(this.startLineNumber, this.startColumn, t, n) : new Wt(t, n, this.startLineNumber, this.startColumn);
    }
    getPosition() {
      return new Ue(this.positionLineNumber, this.positionColumn);
    }
    getSelectionStart() {
      return new Ue(this.selectionStartLineNumber, this.selectionStartColumn);
    }
    setStartPosition(t, n) {
      return this.getDirection() === 0 ? new Wt(t, n, this.endLineNumber, this.endColumn) : new Wt(this.endLineNumber, this.endColumn, t, n);
    }
    static fromPositions(t, n = t) {
      return new Wt(t.lineNumber, t.column, n.lineNumber, n.column);
    }
    static fromRange(t, n) {
      return n === 0 ? new Wt(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : new Wt(t.endLineNumber, t.endColumn, t.startLineNumber, t.startColumn);
    }
    static liftSelection(t) {
      return new Wt(
        t.selectionStartLineNumber,
        t.selectionStartColumn,
        t.positionLineNumber,
        t.positionColumn
      );
    }
    static selectionsArrEqual(t, n) {
      if (t && !n || !t && n) return !1;
      if (!t && !n) return !0;
      if (t.length !== n.length) return !1;
      for (let r = 0, i = t.length; r < i; r++) if (!this.selectionsEqual(t[r], n[r])) return !1;
      return !0;
    }
    static isISelection(t) {
      return t && typeof t.selectionStartLineNumber == "number" && typeof t.selectionStartColumn == "number" && typeof t.positionLineNumber == "number" && typeof t.positionColumn == "number";
    }
    static createWithDirection(t, n, r, i, s) {
      return s === 0 ? new Wt(t, n, r, i) : new Wt(r, i, t, n);
    }
  };
  function N4(e) {
    return typeof e == "string";
  }
  var Yc = /* @__PURE__ */ Object.create(null);
  function h(e, t) {
    if (N4(t)) {
      let n = Yc[t];
      if (n === void 0) throw new Error(`${e} references an unknown codicon: ${t}`);
      t = n;
    }
    return Yc[e] = t, { id: e };
  }
  var C4 = {
    add: h("add", 6e4),
    plus: h("plus", 6e4),
    gistNew: h("gist-new", 6e4),
    repoCreate: h("repo-create", 6e4),
    lightbulb: h("lightbulb", 60001),
    lightBulb: h("light-bulb", 60001),
    repo: h("repo", 60002),
    repoDelete: h("repo-delete", 60002),
    gistFork: h("gist-fork", 60003),
    repoForked: h("repo-forked", 60003),
    gitPullRequest: h("git-pull-request", 60004),
    gitPullRequestAbandoned: h("git-pull-request-abandoned", 60004),
    recordKeys: h("record-keys", 60005),
    keyboard: h("keyboard", 60005),
    tag: h("tag", 60006),
    gitPullRequestLabel: h("git-pull-request-label", 60006),
    tagAdd: h("tag-add", 60006),
    tagRemove: h("tag-remove", 60006),
    person: h("person", 60007),
    personFollow: h("person-follow", 60007),
    personOutline: h("person-outline", 60007),
    personFilled: h("person-filled", 60007),
    gitBranch: h("git-branch", 60008),
    gitBranchCreate: h("git-branch-create", 60008),
    gitBranchDelete: h("git-branch-delete", 60008),
    sourceControl: h("source-control", 60008),
    mirror: h("mirror", 60009),
    mirrorPublic: h("mirror-public", 60009),
    star: h("star", 60010),
    starAdd: h("star-add", 60010),
    starDelete: h("star-delete", 60010),
    starEmpty: h("star-empty", 60010),
    comment: h("comment", 60011),
    commentAdd: h("comment-add", 60011),
    alert: h("alert", 60012),
    warning: h("warning", 60012),
    search: h("search", 60013),
    searchSave: h("search-save", 60013),
    logOut: h("log-out", 60014),
    signOut: h("sign-out", 60014),
    logIn: h("log-in", 60015),
    signIn: h("sign-in", 60015),
    eye: h("eye", 60016),
    eyeUnwatch: h("eye-unwatch", 60016),
    eyeWatch: h("eye-watch", 60016),
    circleFilled: h("circle-filled", 60017),
    primitiveDot: h("primitive-dot", 60017),
    closeDirty: h("close-dirty", 60017),
    debugBreakpoint: h("debug-breakpoint", 60017),
    debugBreakpointDisabled: h("debug-breakpoint-disabled", 60017),
    debugHint: h("debug-hint", 60017),
    terminalDecorationSuccess: h("terminal-decoration-success", 60017),
    primitiveSquare: h("primitive-square", 60018),
    edit: h("edit", 60019),
    pencil: h("pencil", 60019),
    info: h("info", 60020),
    issueOpened: h("issue-opened", 60020),
    gistPrivate: h("gist-private", 60021),
    gitForkPrivate: h("git-fork-private", 60021),
    lock: h("lock", 60021),
    mirrorPrivate: h("mirror-private", 60021),
    close: h("close", 60022),
    removeClose: h("remove-close", 60022),
    x: h("x", 60022),
    repoSync: h("repo-sync", 60023),
    sync: h("sync", 60023),
    clone: h("clone", 60024),
    desktopDownload: h("desktop-download", 60024),
    beaker: h("beaker", 60025),
    microscope: h("microscope", 60025),
    vm: h("vm", 60026),
    deviceDesktop: h("device-desktop", 60026),
    file: h("file", 60027),
    fileText: h("file-text", 60027),
    more: h("more", 60028),
    ellipsis: h("ellipsis", 60028),
    kebabHorizontal: h("kebab-horizontal", 60028),
    mailReply: h("mail-reply", 60029),
    reply: h("reply", 60029),
    organization: h("organization", 60030),
    organizationFilled: h("organization-filled", 60030),
    organizationOutline: h("organization-outline", 60030),
    newFile: h("new-file", 60031),
    fileAdd: h("file-add", 60031),
    newFolder: h("new-folder", 60032),
    fileDirectoryCreate: h("file-directory-create", 60032),
    trash: h("trash", 60033),
    trashcan: h("trashcan", 60033),
    history: h("history", 60034),
    clock: h("clock", 60034),
    folder: h("folder", 60035),
    fileDirectory: h("file-directory", 60035),
    symbolFolder: h("symbol-folder", 60035),
    logoGithub: h("logo-github", 60036),
    markGithub: h("mark-github", 60036),
    github: h("github", 60036),
    terminal: h("terminal", 60037),
    console: h("console", 60037),
    repl: h("repl", 60037),
    zap: h("zap", 60038),
    symbolEvent: h("symbol-event", 60038),
    error: h("error", 60039),
    stop: h("stop", 60039),
    variable: h("variable", 60040),
    symbolVariable: h("symbol-variable", 60040),
    array: h("array", 60042),
    symbolArray: h("symbol-array", 60042),
    symbolModule: h("symbol-module", 60043),
    symbolPackage: h("symbol-package", 60043),
    symbolNamespace: h("symbol-namespace", 60043),
    symbolObject: h("symbol-object", 60043),
    symbolMethod: h("symbol-method", 60044),
    symbolFunction: h("symbol-function", 60044),
    symbolConstructor: h("symbol-constructor", 60044),
    symbolBoolean: h("symbol-boolean", 60047),
    symbolNull: h("symbol-null", 60047),
    symbolNumeric: h("symbol-numeric", 60048),
    symbolNumber: h("symbol-number", 60048),
    symbolStructure: h("symbol-structure", 60049),
    symbolStruct: h("symbol-struct", 60049),
    symbolParameter: h("symbol-parameter", 60050),
    symbolTypeParameter: h("symbol-type-parameter", 60050),
    symbolKey: h("symbol-key", 60051),
    symbolText: h("symbol-text", 60051),
    symbolReference: h("symbol-reference", 60052),
    goToFile: h("go-to-file", 60052),
    symbolEnum: h("symbol-enum", 60053),
    symbolValue: h("symbol-value", 60053),
    symbolRuler: h("symbol-ruler", 60054),
    symbolUnit: h("symbol-unit", 60054),
    activateBreakpoints: h("activate-breakpoints", 60055),
    archive: h("archive", 60056),
    arrowBoth: h("arrow-both", 60057),
    arrowDown: h("arrow-down", 60058),
    arrowLeft: h("arrow-left", 60059),
    arrowRight: h("arrow-right", 60060),
    arrowSmallDown: h("arrow-small-down", 60061),
    arrowSmallLeft: h("arrow-small-left", 60062),
    arrowSmallRight: h("arrow-small-right", 60063),
    arrowSmallUp: h("arrow-small-up", 60064),
    arrowUp: h("arrow-up", 60065),
    bell: h("bell", 60066),
    bold: h("bold", 60067),
    book: h("book", 60068),
    bookmark: h("bookmark", 60069),
    debugBreakpointConditionalUnverified: h("debug-breakpoint-conditional-unverified", 60070),
    debugBreakpointConditional: h("debug-breakpoint-conditional", 60071),
    debugBreakpointConditionalDisabled: h("debug-breakpoint-conditional-disabled", 60071),
    debugBreakpointDataUnverified: h("debug-breakpoint-data-unverified", 60072),
    debugBreakpointData: h("debug-breakpoint-data", 60073),
    debugBreakpointDataDisabled: h("debug-breakpoint-data-disabled", 60073),
    debugBreakpointLogUnverified: h("debug-breakpoint-log-unverified", 60074),
    debugBreakpointLog: h("debug-breakpoint-log", 60075),
    debugBreakpointLogDisabled: h("debug-breakpoint-log-disabled", 60075),
    briefcase: h("briefcase", 60076),
    broadcast: h("broadcast", 60077),
    browser: h("browser", 60078),
    bug: h("bug", 60079),
    calendar: h("calendar", 60080),
    caseSensitive: h("case-sensitive", 60081),
    check: h("check", 60082),
    checklist: h("checklist", 60083),
    chevronDown: h("chevron-down", 60084),
    chevronLeft: h("chevron-left", 60085),
    chevronRight: h("chevron-right", 60086),
    chevronUp: h("chevron-up", 60087),
    chromeClose: h("chrome-close", 60088),
    chromeMaximize: h("chrome-maximize", 60089),
    chromeMinimize: h("chrome-minimize", 60090),
    chromeRestore: h("chrome-restore", 60091),
    circleOutline: h("circle-outline", 60092),
    circle: h("circle", 60092),
    debugBreakpointUnverified: h("debug-breakpoint-unverified", 60092),
    terminalDecorationIncomplete: h("terminal-decoration-incomplete", 60092),
    circleSlash: h("circle-slash", 60093),
    circuitBoard: h("circuit-board", 60094),
    clearAll: h("clear-all", 60095),
    clippy: h("clippy", 60096),
    closeAll: h("close-all", 60097),
    cloudDownload: h("cloud-download", 60098),
    cloudUpload: h("cloud-upload", 60099),
    code: h("code", 60100),
    collapseAll: h("collapse-all", 60101),
    colorMode: h("color-mode", 60102),
    commentDiscussion: h("comment-discussion", 60103),
    creditCard: h("credit-card", 60105),
    dash: h("dash", 60108),
    dashboard: h("dashboard", 60109),
    database: h("database", 60110),
    debugContinue: h("debug-continue", 60111),
    debugDisconnect: h("debug-disconnect", 60112),
    debugPause: h("debug-pause", 60113),
    debugRestart: h("debug-restart", 60114),
    debugStart: h("debug-start", 60115),
    debugStepInto: h("debug-step-into", 60116),
    debugStepOut: h("debug-step-out", 60117),
    debugStepOver: h("debug-step-over", 60118),
    debugStop: h("debug-stop", 60119),
    debug: h("debug", 60120),
    deviceCameraVideo: h("device-camera-video", 60121),
    deviceCamera: h("device-camera", 60122),
    deviceMobile: h("device-mobile", 60123),
    diffAdded: h("diff-added", 60124),
    diffIgnored: h("diff-ignored", 60125),
    diffModified: h("diff-modified", 60126),
    diffRemoved: h("diff-removed", 60127),
    diffRenamed: h("diff-renamed", 60128),
    diff: h("diff", 60129),
    diffSidebyside: h("diff-sidebyside", 60129),
    discard: h("discard", 60130),
    editorLayout: h("editor-layout", 60131),
    emptyWindow: h("empty-window", 60132),
    exclude: h("exclude", 60133),
    extensions: h("extensions", 60134),
    eyeClosed: h("eye-closed", 60135),
    fileBinary: h("file-binary", 60136),
    fileCode: h("file-code", 60137),
    fileMedia: h("file-media", 60138),
    filePdf: h("file-pdf", 60139),
    fileSubmodule: h("file-submodule", 60140),
    fileSymlinkDirectory: h("file-symlink-directory", 60141),
    fileSymlinkFile: h("file-symlink-file", 60142),
    fileZip: h("file-zip", 60143),
    files: h("files", 60144),
    filter: h("filter", 60145),
    flame: h("flame", 60146),
    foldDown: h("fold-down", 60147),
    foldUp: h("fold-up", 60148),
    fold: h("fold", 60149),
    folderActive: h("folder-active", 60150),
    folderOpened: h("folder-opened", 60151),
    gear: h("gear", 60152),
    gift: h("gift", 60153),
    gistSecret: h("gist-secret", 60154),
    gist: h("gist", 60155),
    gitCommit: h("git-commit", 60156),
    gitCompare: h("git-compare", 60157),
    compareChanges: h("compare-changes", 60157),
    gitMerge: h("git-merge", 60158),
    githubAction: h("github-action", 60159),
    githubAlt: h("github-alt", 60160),
    globe: h("globe", 60161),
    grabber: h("grabber", 60162),
    graph: h("graph", 60163),
    gripper: h("gripper", 60164),
    heart: h("heart", 60165),
    home: h("home", 60166),
    horizontalRule: h("horizontal-rule", 60167),
    hubot: h("hubot", 60168),
    inbox: h("inbox", 60169),
    issueReopened: h("issue-reopened", 60171),
    issues: h("issues", 60172),
    italic: h("italic", 60173),
    jersey: h("jersey", 60174),
    json: h("json", 60175),
    kebabVertical: h("kebab-vertical", 60176),
    key: h("key", 60177),
    law: h("law", 60178),
    lightbulbAutofix: h("lightbulb-autofix", 60179),
    linkExternal: h("link-external", 60180),
    link: h("link", 60181),
    listOrdered: h("list-ordered", 60182),
    listUnordered: h("list-unordered", 60183),
    liveShare: h("live-share", 60184),
    loading: h("loading", 60185),
    location: h("location", 60186),
    mailRead: h("mail-read", 60187),
    mail: h("mail", 60188),
    markdown: h("markdown", 60189),
    megaphone: h("megaphone", 60190),
    mention: h("mention", 60191),
    milestone: h("milestone", 60192),
    gitPullRequestMilestone: h("git-pull-request-milestone", 60192),
    mortarBoard: h("mortar-board", 60193),
    move: h("move", 60194),
    multipleWindows: h("multiple-windows", 60195),
    mute: h("mute", 60196),
    noNewline: h("no-newline", 60197),
    note: h("note", 60198),
    octoface: h("octoface", 60199),
    openPreview: h("open-preview", 60200),
    package: h("package", 60201),
    paintcan: h("paintcan", 60202),
    pin: h("pin", 60203),
    play: h("play", 60204),
    run: h("run", 60204),
    plug: h("plug", 60205),
    preserveCase: h("preserve-case", 60206),
    preview: h("preview", 60207),
    project: h("project", 60208),
    pulse: h("pulse", 60209),
    question: h("question", 60210),
    quote: h("quote", 60211),
    radioTower: h("radio-tower", 60212),
    reactions: h("reactions", 60213),
    references: h("references", 60214),
    refresh: h("refresh", 60215),
    regex: h("regex", 60216),
    remoteExplorer: h("remote-explorer", 60217),
    remote: h("remote", 60218),
    remove: h("remove", 60219),
    replaceAll: h("replace-all", 60220),
    replace: h("replace", 60221),
    repoClone: h("repo-clone", 60222),
    repoForcePush: h("repo-force-push", 60223),
    repoPull: h("repo-pull", 60224),
    repoPush: h("repo-push", 60225),
    report: h("report", 60226),
    requestChanges: h("request-changes", 60227),
    rocket: h("rocket", 60228),
    rootFolderOpened: h("root-folder-opened", 60229),
    rootFolder: h("root-folder", 60230),
    rss: h("rss", 60231),
    ruby: h("ruby", 60232),
    saveAll: h("save-all", 60233),
    saveAs: h("save-as", 60234),
    save: h("save", 60235),
    screenFull: h("screen-full", 60236),
    screenNormal: h("screen-normal", 60237),
    searchStop: h("search-stop", 60238),
    server: h("server", 60240),
    settingsGear: h("settings-gear", 60241),
    settings: h("settings", 60242),
    shield: h("shield", 60243),
    smiley: h("smiley", 60244),
    sortPrecedence: h("sort-precedence", 60245),
    splitHorizontal: h("split-horizontal", 60246),
    splitVertical: h("split-vertical", 60247),
    squirrel: h("squirrel", 60248),
    starFull: h("star-full", 60249),
    starHalf: h("star-half", 60250),
    symbolClass: h("symbol-class", 60251),
    symbolColor: h("symbol-color", 60252),
    symbolConstant: h("symbol-constant", 60253),
    symbolEnumMember: h("symbol-enum-member", 60254),
    symbolField: h("symbol-field", 60255),
    symbolFile: h("symbol-file", 60256),
    symbolInterface: h("symbol-interface", 60257),
    symbolKeyword: h("symbol-keyword", 60258),
    symbolMisc: h("symbol-misc", 60259),
    symbolOperator: h("symbol-operator", 60260),
    symbolProperty: h("symbol-property", 60261),
    wrench: h("wrench", 60261),
    wrenchSubaction: h("wrench-subaction", 60261),
    symbolSnippet: h("symbol-snippet", 60262),
    tasklist: h("tasklist", 60263),
    telescope: h("telescope", 60264),
    textSize: h("text-size", 60265),
    threeBars: h("three-bars", 60266),
    thumbsdown: h("thumbsdown", 60267),
    thumbsup: h("thumbsup", 60268),
    tools: h("tools", 60269),
    triangleDown: h("triangle-down", 60270),
    triangleLeft: h("triangle-left", 60271),
    triangleRight: h("triangle-right", 60272),
    triangleUp: h("triangle-up", 60273),
    twitter: h("twitter", 60274),
    unfold: h("unfold", 60275),
    unlock: h("unlock", 60276),
    unmute: h("unmute", 60277),
    unverified: h("unverified", 60278),
    verified: h("verified", 60279),
    versions: h("versions", 60280),
    vmActive: h("vm-active", 60281),
    vmOutline: h("vm-outline", 60282),
    vmRunning: h("vm-running", 60283),
    watch: h("watch", 60284),
    whitespace: h("whitespace", 60285),
    wholeWord: h("whole-word", 60286),
    window: h("window", 60287),
    wordWrap: h("word-wrap", 60288),
    zoomIn: h("zoom-in", 60289),
    zoomOut: h("zoom-out", 60290),
    listFilter: h("list-filter", 60291),
    listFlat: h("list-flat", 60292),
    listSelection: h("list-selection", 60293),
    selection: h("selection", 60293),
    listTree: h("list-tree", 60294),
    debugBreakpointFunctionUnverified: h("debug-breakpoint-function-unverified", 60295),
    debugBreakpointFunction: h("debug-breakpoint-function", 60296),
    debugBreakpointFunctionDisabled: h("debug-breakpoint-function-disabled", 60296),
    debugStackframeActive: h("debug-stackframe-active", 60297),
    circleSmallFilled: h("circle-small-filled", 60298),
    debugStackframeDot: h("debug-stackframe-dot", 60298),
    terminalDecorationMark: h("terminal-decoration-mark", 60298),
    debugStackframe: h("debug-stackframe", 60299),
    debugStackframeFocused: h("debug-stackframe-focused", 60299),
    debugBreakpointUnsupported: h("debug-breakpoint-unsupported", 60300),
    symbolString: h("symbol-string", 60301),
    debugReverseContinue: h("debug-reverse-continue", 60302),
    debugStepBack: h("debug-step-back", 60303),
    debugRestartFrame: h("debug-restart-frame", 60304),
    debugAlt: h("debug-alt", 60305),
    callIncoming: h("call-incoming", 60306),
    callOutgoing: h("call-outgoing", 60307),
    menu: h("menu", 60308),
    expandAll: h("expand-all", 60309),
    feedback: h("feedback", 60310),
    gitPullRequestReviewer: h("git-pull-request-reviewer", 60310),
    groupByRefType: h("group-by-ref-type", 60311),
    ungroupByRefType: h("ungroup-by-ref-type", 60312),
    account: h("account", 60313),
    gitPullRequestAssignee: h("git-pull-request-assignee", 60313),
    bellDot: h("bell-dot", 60314),
    debugConsole: h("debug-console", 60315),
    library: h("library", 60316),
    output: h("output", 60317),
    runAll: h("run-all", 60318),
    syncIgnored: h("sync-ignored", 60319),
    pinned: h("pinned", 60320),
    githubInverted: h("github-inverted", 60321),
    serverProcess: h("server-process", 60322),
    serverEnvironment: h("server-environment", 60323),
    pass: h("pass", 60324),
    issueClosed: h("issue-closed", 60324),
    stopCircle: h("stop-circle", 60325),
    playCircle: h("play-circle", 60326),
    record: h("record", 60327),
    debugAltSmall: h("debug-alt-small", 60328),
    vmConnect: h("vm-connect", 60329),
    cloud: h("cloud", 60330),
    merge: h("merge", 60331),
    export: h("export", 60332),
    graphLeft: h("graph-left", 60333),
    magnet: h("magnet", 60334),
    notebook: h("notebook", 60335),
    redo: h("redo", 60336),
    checkAll: h("check-all", 60337),
    pinnedDirty: h("pinned-dirty", 60338),
    passFilled: h("pass-filled", 60339),
    circleLargeFilled: h("circle-large-filled", 60340),
    circleLarge: h("circle-large", 60341),
    circleLargeOutline: h("circle-large-outline", 60341),
    combine: h("combine", 60342),
    gather: h("gather", 60342),
    table: h("table", 60343),
    variableGroup: h("variable-group", 60344),
    typeHierarchy: h("type-hierarchy", 60345),
    typeHierarchySub: h("type-hierarchy-sub", 60346),
    typeHierarchySuper: h("type-hierarchy-super", 60347),
    gitPullRequestCreate: h("git-pull-request-create", 60348),
    runAbove: h("run-above", 60349),
    runBelow: h("run-below", 60350),
    notebookTemplate: h("notebook-template", 60351),
    debugRerun: h("debug-rerun", 60352),
    workspaceTrusted: h("workspace-trusted", 60353),
    workspaceUntrusted: h("workspace-untrusted", 60354),
    workspaceUnknown: h("workspace-unknown", 60355),
    terminalCmd: h("terminal-cmd", 60356),
    terminalDebian: h("terminal-debian", 60357),
    terminalLinux: h("terminal-linux", 60358),
    terminalPowershell: h("terminal-powershell", 60359),
    terminalTmux: h("terminal-tmux", 60360),
    terminalUbuntu: h("terminal-ubuntu", 60361),
    terminalBash: h("terminal-bash", 60362),
    arrowSwap: h("arrow-swap", 60363),
    copy: h("copy", 60364),
    personAdd: h("person-add", 60365),
    filterFilled: h("filter-filled", 60366),
    wand: h("wand", 60367),
    debugLineByLine: h("debug-line-by-line", 60368),
    inspect: h("inspect", 60369),
    layers: h("layers", 60370),
    layersDot: h("layers-dot", 60371),
    layersActive: h("layers-active", 60372),
    compass: h("compass", 60373),
    compassDot: h("compass-dot", 60374),
    compassActive: h("compass-active", 60375),
    azure: h("azure", 60376),
    issueDraft: h("issue-draft", 60377),
    gitPullRequestClosed: h("git-pull-request-closed", 60378),
    gitPullRequestDraft: h("git-pull-request-draft", 60379),
    debugAll: h("debug-all", 60380),
    debugCoverage: h("debug-coverage", 60381),
    runErrors: h("run-errors", 60382),
    folderLibrary: h("folder-library", 60383),
    debugContinueSmall: h("debug-continue-small", 60384),
    beakerStop: h("beaker-stop", 60385),
    graphLine: h("graph-line", 60386),
    graphScatter: h("graph-scatter", 60387),
    pieChart: h("pie-chart", 60388),
    bracket: h("bracket", 60175),
    bracketDot: h("bracket-dot", 60389),
    bracketError: h("bracket-error", 60390),
    lockSmall: h("lock-small", 60391),
    azureDevops: h("azure-devops", 60392),
    verifiedFilled: h("verified-filled", 60393),
    newline: h("newline", 60394),
    layout: h("layout", 60395),
    layoutActivitybarLeft: h("layout-activitybar-left", 60396),
    layoutActivitybarRight: h("layout-activitybar-right", 60397),
    layoutPanelLeft: h("layout-panel-left", 60398),
    layoutPanelCenter: h("layout-panel-center", 60399),
    layoutPanelJustify: h("layout-panel-justify", 60400),
    layoutPanelRight: h("layout-panel-right", 60401),
    layoutPanel: h("layout-panel", 60402),
    layoutSidebarLeft: h("layout-sidebar-left", 60403),
    layoutSidebarRight: h("layout-sidebar-right", 60404),
    layoutStatusbar: h("layout-statusbar", 60405),
    layoutMenubar: h("layout-menubar", 60406),
    layoutCentered: h("layout-centered", 60407),
    target: h("target", 60408),
    indent: h("indent", 60409),
    recordSmall: h("record-small", 60410),
    errorSmall: h("error-small", 60411),
    terminalDecorationError: h("terminal-decoration-error", 60411),
    arrowCircleDown: h("arrow-circle-down", 60412),
    arrowCircleLeft: h("arrow-circle-left", 60413),
    arrowCircleRight: h("arrow-circle-right", 60414),
    arrowCircleUp: h("arrow-circle-up", 60415),
    layoutSidebarRightOff: h("layout-sidebar-right-off", 60416),
    layoutPanelOff: h("layout-panel-off", 60417),
    layoutSidebarLeftOff: h("layout-sidebar-left-off", 60418),
    blank: h("blank", 60419),
    heartFilled: h("heart-filled", 60420),
    map: h("map", 60421),
    mapHorizontal: h("map-horizontal", 60421),
    foldHorizontal: h("fold-horizontal", 60421),
    mapFilled: h("map-filled", 60422),
    mapHorizontalFilled: h("map-horizontal-filled", 60422),
    foldHorizontalFilled: h("fold-horizontal-filled", 60422),
    circleSmall: h("circle-small", 60423),
    bellSlash: h("bell-slash", 60424),
    bellSlashDot: h("bell-slash-dot", 60425),
    commentUnresolved: h("comment-unresolved", 60426),
    gitPullRequestGoToChanges: h("git-pull-request-go-to-changes", 60427),
    gitPullRequestNewChanges: h("git-pull-request-new-changes", 60428),
    searchFuzzy: h("search-fuzzy", 60429),
    commentDraft: h("comment-draft", 60430),
    send: h("send", 60431),
    sparkle: h("sparkle", 60432),
    insert: h("insert", 60433),
    mic: h("mic", 60434),
    thumbsdownFilled: h("thumbsdown-filled", 60435),
    thumbsupFilled: h("thumbsup-filled", 60436),
    coffee: h("coffee", 60437),
    snake: h("snake", 60438),
    game: h("game", 60439),
    vr: h("vr", 60440),
    chip: h("chip", 60441),
    piano: h("piano", 60442),
    music: h("music", 60443),
    micFilled: h("mic-filled", 60444),
    repoFetch: h("repo-fetch", 60445),
    copilot: h("copilot", 60446),
    lightbulbSparkle: h("lightbulb-sparkle", 60447),
    robot: h("robot", 60448),
    sparkleFilled: h("sparkle-filled", 60449),
    diffSingle: h("diff-single", 60450),
    diffMultiple: h("diff-multiple", 60451),
    surroundWith: h("surround-with", 60452),
    share: h("share", 60453),
    gitStash: h("git-stash", 60454),
    gitStashApply: h("git-stash-apply", 60455),
    gitStashPop: h("git-stash-pop", 60456),
    vscode: h("vscode", 60457),
    vscodeInsiders: h("vscode-insiders", 60458),
    codeOss: h("code-oss", 60459),
    runCoverage: h("run-coverage", 60460),
    runAllCoverage: h("run-all-coverage", 60461),
    coverage: h("coverage", 60462),
    githubProject: h("github-project", 60463),
    mapVertical: h("map-vertical", 60464),
    foldVertical: h("fold-vertical", 60464),
    mapVerticalFilled: h("map-vertical-filled", 60465),
    foldVerticalFilled: h("fold-vertical-filled", 60465),
    goToSearch: h("go-to-search", 60466),
    percentage: h("percentage", 60467),
    sortPercentage: h("sort-percentage", 60467),
    attach: h("attach", 60468)
  }, T4 = {
    dialogError: h("dialog-error", "error"),
    dialogWarning: h("dialog-warning", "warning"),
    dialogInfo: h("dialog-info", "info"),
    dialogClose: h("dialog-close", "close"),
    treeItemExpanded: h("tree-item-expanded", "chevron-down"),
    treeFilterOnTypeOn: h("tree-filter-on-type-on", "list-filter"),
    treeFilterOnTypeOff: h("tree-filter-on-type-off", "list-selection"),
    treeFilterClear: h("tree-filter-clear", "close"),
    treeItemLoading: h("tree-item-loading", "loading"),
    menuSelection: h("menu-selection", "check"),
    menuSubmenu: h("menu-submenu", "chevron-right"),
    menuBarMore: h("menubar-more", "more"),
    scrollbarButtonLeft: h("scrollbar-button-left", "triangle-left"),
    scrollbarButtonRight: h("scrollbar-button-right", "triangle-right"),
    scrollbarButtonUp: h("scrollbar-button-up", "triangle-up"),
    scrollbarButtonDown: h("scrollbar-button-down", "triangle-down"),
    toolBarMore: h("toolbar-more", "more"),
    quickInputBack: h("quick-input-back", "arrow-left"),
    dropDownButton: h("drop-down-button", 60084),
    symbolCustomColor: h("symbol-customcolor", 60252),
    exportIcon: h("export", 60332),
    workspaceUnspecified: h("workspace-unspecified", 60355),
    newLine: h("newline", 60394),
    thumbsDownFilled: h("thumbsdown-filled", 60435),
    thumbsUpFilled: h("thumbsup-filled", 60436),
    gitFetch: h("git-fetch", 60445),
    lightbulbSparkleAutofix: h("lightbulb-sparkle-autofix", 60447),
    debugBreakpointPending: h("debug-breakpoint-pending", 60377)
  }, ae = { ...C4, ...T4 }, Jc = class {
    constructor() {
      this._tokenizationSupports = /* @__PURE__ */ new Map(), this._factories = /* @__PURE__ */ new Map(), this._onDidChange = new Kt(), this.onDidChange = this._onDidChange.event, this._colorMap = null;
    }
    handleChange(e) {
      this._onDidChange.fire({ changedLanguages: e, changedColorMap: !1 });
    }
    register(e, t) {
      return this._tokenizationSupports.set(e, t), this.handleChange([e]), Vs(() => {
        this._tokenizationSupports.get(e) === t && (this._tokenizationSupports.delete(e), this.handleChange([e]));
      });
    }
    get(e) {
      return this._tokenizationSupports.get(e) || null;
    }
    registerFactory(e, t) {
      var r;
      (r = this._factories.get(e)) == null || r.dispose();
      let n = new S4(this, e, t);
      return this._factories.set(e, n), Vs(() => {
        let i = this._factories.get(e);
        !i || i !== n || (this._factories.delete(e), i.dispose());
      });
    }
    async getOrCreate(e) {
      let t = this.get(e);
      if (t) return t;
      let n = this._factories.get(e);
      return !n || n.isResolved ? null : (await n.resolve(), this.get(e));
    }
    isResolved(e) {
      if (this.get(e)) return !0;
      let t = this._factories.get(e);
      return !!(!t || t.isResolved);
    }
    setColorMap(e) {
      this._colorMap = e, this._onDidChange.fire({
        changedLanguages: Array.from(this._tokenizationSupports.keys()),
        changedColorMap: !0
      });
    }
    getColorMap() {
      return this._colorMap;
    }
    getDefaultBackground() {
      return this._colorMap && this._colorMap.length > 2 ? this._colorMap[2] : null;
    }
  }, S4 = class extends $s {
    get isResolved() {
      return this._isResolved;
    }
    constructor(e, t, n) {
      super(), this._registry = e, this._languageId = t, this._factory = n, this._isDisposed = !1, this._resolvePromise = null, this._isResolved = !1;
    }
    dispose() {
      this._isDisposed = !0, super.dispose();
    }
    async resolve() {
      return this._resolvePromise || (this._resolvePromise = this._create()), this._resolvePromise;
    }
    async _create() {
      let e = await this._factory.tokenizationSupport;
      this._isResolved = !0, e && !this._isDisposed && this._register(this._registry.register(this._languageId, e));
    }
  }, A4 = class {
    constructor(e, t, n) {
      this.offset = e, this.type = t, this.language = n, this._tokenBrand = void 0;
    }
    toString() {
      return "(" + this.offset + ", " + this.type + ")";
    }
  }, Xc;
  (function(e) {
    e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
  })(Xc || (Xc = {}));
  var Qc;
  (function(e) {
    let t = /* @__PURE__ */ new Map();
    t.set(0, ae.symbolMethod), t.set(1, ae.symbolFunction), t.set(2, ae.symbolConstructor), t.set(3, ae.symbolField), t.set(4, ae.symbolVariable), t.set(5, ae.symbolClass), t.set(6, ae.symbolStruct), t.set(7, ae.symbolInterface), t.set(8, ae.symbolModule), t.set(9, ae.symbolProperty), t.set(10, ae.symbolEvent), t.set(11, ae.symbolOperator), t.set(12, ae.symbolUnit), t.set(13, ae.symbolValue), t.set(15, ae.symbolEnum), t.set(14, ae.symbolConstant), t.set(15, ae.symbolEnum), t.set(16, ae.symbolEnumMember), t.set(17, ae.symbolKeyword), t.set(27, ae.symbolSnippet), t.set(18, ae.symbolText), t.set(19, ae.symbolColor), t.set(20, ae.symbolFile), t.set(21, ae.symbolReference), t.set(22, ae.symbolCustomColor), t.set(23, ae.symbolFolder), t.set(24, ae.symbolTypeParameter), t.set(25, ae.account), t.set(26, ae.issues);
    function n(s) {
      let a = t.get(s);
      return a || (console.info("No codicon found for CompletionItemKind " + s), a = ae.symbolProperty), a;
    }
    e.toIcon = n;
    let r = /* @__PURE__ */ new Map();
    r.set("method", 0), r.set("function", 1), r.set("constructor", 2), r.set("field", 3), r.set("variable", 4), r.set("class", 5), r.set("struct", 6), r.set("interface", 7), r.set("module", 8), r.set("property", 9), r.set("event", 10), r.set("operator", 11), r.set("unit", 12), r.set("value", 13), r.set("constant", 14), r.set("enum", 15), r.set("enum-member", 16), r.set("enumMember", 16), r.set("keyword", 17), r.set("snippet", 27), r.set("text", 18), r.set("color", 19), r.set("file", 20), r.set("reference", 21), r.set("customcolor", 22), r.set("folder", 23), r.set("type-parameter", 24), r.set("typeParameter", 24), r.set("account", 25), r.set("issue", 26);
    function i(s, a) {
      let o = r.get(s);
      return typeof o > "u" && !a && (o = 9), o;
    }
    e.fromString = i;
  })(Qc || (Qc = {}));
  var Zc;
  (function(e) {
    e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
  })(Zc || (Zc = {}));
  var ed;
  (function(e) {
    e[e.Automatic = 0] = "Automatic", e[e.PasteAs = 1] = "PasteAs";
  })(ed || (ed = {}));
  var td;
  (function(e) {
    e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
  })(td || (td = {}));
  var nd;
  (function(e) {
    e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
  })(nd || (nd = {})), Le("Array", "array"), Le("Boolean", "boolean"), Le("Class", "class"), Le("Constant", "constant"), Le("Constructor", "constructor"), Le("Enum", "enumeration"), Le("EnumMember", "enumeration member"), Le("Event", "event"), Le("Field", "field"), Le("File", "file"), Le("Function", "function"), Le("Interface", "interface"), Le("Key", "key"), Le("Method", "method"), Le("Module", "module"), Le("Namespace", "namespace"), Le("Null", "null"), Le("Number", "number"), Le("Object", "object"), Le("Operator", "operator"), Le("Package", "package"), Le("Property", "property"), Le("String", "string"), Le("Struct", "struct"), Le("TypeParameter", "type parameter"), Le("Variable", "variable");
  var rd;
  (function(e) {
    let t = /* @__PURE__ */ new Map();
    t.set(0, ae.symbolFile), t.set(1, ae.symbolModule), t.set(2, ae.symbolNamespace), t.set(3, ae.symbolPackage), t.set(4, ae.symbolClass), t.set(5, ae.symbolMethod), t.set(6, ae.symbolProperty), t.set(7, ae.symbolField), t.set(8, ae.symbolConstructor), t.set(9, ae.symbolEnum), t.set(10, ae.symbolInterface), t.set(11, ae.symbolFunction), t.set(12, ae.symbolVariable), t.set(13, ae.symbolConstant), t.set(14, ae.symbolString), t.set(15, ae.symbolNumber), t.set(16, ae.symbolBoolean), t.set(17, ae.symbolArray), t.set(18, ae.symbolObject), t.set(19, ae.symbolKey), t.set(20, ae.symbolNull), t.set(21, ae.symbolEnumMember), t.set(22, ae.symbolStruct), t.set(23, ae.symbolEvent), t.set(24, ae.symbolOperator), t.set(25, ae.symbolTypeParameter);
    function n(r) {
      let i = t.get(r);
      return i || (console.info("No codicon found for SymbolKind " + r), i = ae.symbolProperty), i;
    }
    e.toIcon = n;
  })(rd || (rd = {})), At = class {
    static fromValue(t) {
      switch (t) {
        case "comment":
          return At.Comment;
        case "imports":
          return At.Imports;
        case "region":
          return At.Region;
      }
      return new At(t);
    }
    constructor(t) {
      this.value = t;
    }
  }, At.Comment = new At("comment"), At.Imports = new At("imports"), At.Region = new At("region");
  var id;
  (function(e) {
    e[e.AIGenerated = 1] = "AIGenerated";
  })(id || (id = {}));
  var sd;
  (function(e) {
    e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
  })(sd || (sd = {}));
  var ad;
  (function(e) {
    function t(n) {
      return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
    }
    e.is = t;
  })(ad || (ad = {}));
  var od;
  (function(e) {
    e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
  })(od || (od = {})), new Jc(), new Jc();
  var ud;
  (function(e) {
    e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
  })(ud || (ud = {}));
  var ld;
  (function(e) {
    e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled";
  })(ld || (ld = {}));
  var cd;
  (function(e) {
    e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
  })(cd || (cd = {}));
  var dd;
  (function(e) {
    e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
  })(dd || (dd = {}));
  var fd;
  (function(e) {
    e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Snippet = 27] = "Snippet";
  })(fd || (fd = {}));
  var hd;
  (function(e) {
    e[e.Deprecated = 1] = "Deprecated";
  })(hd || (hd = {}));
  var pd;
  (function(e) {
    e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
  })(pd || (pd = {}));
  var md;
  (function(e) {
    e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW";
  })(md || (md = {}));
  var gd;
  (function(e) {
    e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo";
  })(gd || (gd = {}));
  var Dd;
  (function(e) {
    e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
  })(Dd || (Dd = {}));
  var Ed;
  (function(e) {
    e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
  })(Ed || (Ed = {}));
  var yd;
  (function(e) {
    e[e.None = 0] = "None", e[e.Keep = 1] = "Keep", e[e.Brackets = 2] = "Brackets", e[e.Advanced = 3] = "Advanced", e[e.Full = 4] = "Full";
  })(yd || (yd = {}));
  var bd;
  (function(e) {
    e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter", e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter", e[e.accessibilitySupport = 2] = "accessibilitySupport", e[e.accessibilityPageSize = 3] = "accessibilityPageSize", e[e.ariaLabel = 4] = "ariaLabel", e[e.ariaRequired = 5] = "ariaRequired", e[e.autoClosingBrackets = 6] = "autoClosingBrackets", e[e.autoClosingComments = 7] = "autoClosingComments", e[e.screenReaderAnnounceInlineSuggestion = 8] = "screenReaderAnnounceInlineSuggestion", e[e.autoClosingDelete = 9] = "autoClosingDelete", e[e.autoClosingOvertype = 10] = "autoClosingOvertype", e[e.autoClosingQuotes = 11] = "autoClosingQuotes", e[e.autoIndent = 12] = "autoIndent", e[e.automaticLayout = 13] = "automaticLayout", e[e.autoSurround = 14] = "autoSurround", e[e.bracketPairColorization = 15] = "bracketPairColorization", e[e.guides = 16] = "guides", e[e.codeLens = 17] = "codeLens", e[e.codeLensFontFamily = 18] = "codeLensFontFamily", e[e.codeLensFontSize = 19] = "codeLensFontSize", e[e.colorDecorators = 20] = "colorDecorators", e[e.colorDecoratorsLimit = 21] = "colorDecoratorsLimit", e[e.columnSelection = 22] = "columnSelection", e[e.comments = 23] = "comments", e[e.contextmenu = 24] = "contextmenu", e[e.copyWithSyntaxHighlighting = 25] = "copyWithSyntaxHighlighting", e[e.cursorBlinking = 26] = "cursorBlinking", e[e.cursorSmoothCaretAnimation = 27] = "cursorSmoothCaretAnimation", e[e.cursorStyle = 28] = "cursorStyle", e[e.cursorSurroundingLines = 29] = "cursorSurroundingLines", e[e.cursorSurroundingLinesStyle = 30] = "cursorSurroundingLinesStyle", e[e.cursorWidth = 31] = "cursorWidth", e[e.disableLayerHinting = 32] = "disableLayerHinting", e[e.disableMonospaceOptimizations = 33] = "disableMonospaceOptimizations", e[e.domReadOnly = 34] = "domReadOnly", e[e.dragAndDrop = 35] = "dragAndDrop", e[e.dropIntoEditor = 36] = "dropIntoEditor", e[e.emptySelectionClipboard = 37] = "emptySelectionClipboard", e[e.experimentalWhitespaceRendering = 38] = "experimentalWhitespaceRendering", e[e.extraEditorClassName = 39] = "extraEditorClassName", e[e.fastScrollSensitivity = 40] = "fastScrollSensitivity", e[e.find = 41] = "find", e[e.fixedOverflowWidgets = 42] = "fixedOverflowWidgets", e[e.folding = 43] = "folding", e[e.foldingStrategy = 44] = "foldingStrategy", e[e.foldingHighlight = 45] = "foldingHighlight", e[e.foldingImportsByDefault = 46] = "foldingImportsByDefault", e[e.foldingMaximumRegions = 47] = "foldingMaximumRegions", e[e.unfoldOnClickAfterEndOfLine = 48] = "unfoldOnClickAfterEndOfLine", e[e.fontFamily = 49] = "fontFamily", e[e.fontInfo = 50] = "fontInfo", e[e.fontLigatures = 51] = "fontLigatures", e[e.fontSize = 52] = "fontSize", e[e.fontWeight = 53] = "fontWeight", e[e.fontVariations = 54] = "fontVariations", e[e.formatOnPaste = 55] = "formatOnPaste", e[e.formatOnType = 56] = "formatOnType", e[e.glyphMargin = 57] = "glyphMargin", e[e.gotoLocation = 58] = "gotoLocation", e[e.hideCursorInOverviewRuler = 59] = "hideCursorInOverviewRuler", e[e.hover = 60] = "hover", e[e.inDiffEditor = 61] = "inDiffEditor", e[e.inlineSuggest = 62] = "inlineSuggest", e[e.inlineEdit = 63] = "inlineEdit", e[e.letterSpacing = 64] = "letterSpacing", e[e.lightbulb = 65] = "lightbulb", e[e.lineDecorationsWidth = 66] = "lineDecorationsWidth", e[e.lineHeight = 67] = "lineHeight", e[e.lineNumbers = 68] = "lineNumbers", e[e.lineNumbersMinChars = 69] = "lineNumbersMinChars", e[e.linkedEditing = 70] = "linkedEditing", e[e.links = 71] = "links", e[e.matchBrackets = 72] = "matchBrackets", e[e.minimap = 73] = "minimap", e[e.mouseStyle = 74] = "mouseStyle", e[e.mouseWheelScrollSensitivity = 75] = "mouseWheelScrollSensitivity", e[e.mouseWheelZoom = 76] = "mouseWheelZoom", e[e.multiCursorMergeOverlapping = 77] = "multiCursorMergeOverlapping", e[e.multiCursorModifier = 78] = "multiCursorModifier", e[e.multiCursorPaste = 79] = "multiCursorPaste", e[e.multiCursorLimit = 80] = "multiCursorLimit", e[e.occurrencesHighlight = 81] = "occurrencesHighlight", e[e.overviewRulerBorder = 82] = "overviewRulerBorder", e[e.overviewRulerLanes = 83] = "overviewRulerLanes", e[e.padding = 84] = "padding", e[e.pasteAs = 85] = "pasteAs", e[e.parameterHints = 86] = "parameterHints", e[e.peekWidgetDefaultFocus = 87] = "peekWidgetDefaultFocus", e[e.placeholder = 88] = "placeholder", e[e.definitionLinkOpensInPeek = 89] = "definitionLinkOpensInPeek", e[e.quickSuggestions = 90] = "quickSuggestions", e[e.quickSuggestionsDelay = 91] = "quickSuggestionsDelay", e[e.readOnly = 92] = "readOnly", e[e.readOnlyMessage = 93] = "readOnlyMessage", e[e.renameOnType = 94] = "renameOnType", e[e.renderControlCharacters = 95] = "renderControlCharacters", e[e.renderFinalNewline = 96] = "renderFinalNewline", e[e.renderLineHighlight = 97] = "renderLineHighlight", e[e.renderLineHighlightOnlyWhenFocus = 98] = "renderLineHighlightOnlyWhenFocus", e[e.renderValidationDecorations = 99] = "renderValidationDecorations", e[e.renderWhitespace = 100] = "renderWhitespace", e[e.revealHorizontalRightPadding = 101] = "revealHorizontalRightPadding", e[e.roundedSelection = 102] = "roundedSelection", e[e.rulers = 103] = "rulers", e[e.scrollbar = 104] = "scrollbar", e[e.scrollBeyondLastColumn = 105] = "scrollBeyondLastColumn", e[e.scrollBeyondLastLine = 106] = "scrollBeyondLastLine", e[e.scrollPredominantAxis = 107] = "scrollPredominantAxis", e[e.selectionClipboard = 108] = "selectionClipboard", e[e.selectionHighlight = 109] = "selectionHighlight", e[e.selectOnLineNumbers = 110] = "selectOnLineNumbers", e[e.showFoldingControls = 111] = "showFoldingControls", e[e.showUnused = 112] = "showUnused", e[e.snippetSuggestions = 113] = "snippetSuggestions", e[e.smartSelect = 114] = "smartSelect", e[e.smoothScrolling = 115] = "smoothScrolling", e[e.stickyScroll = 116] = "stickyScroll", e[e.stickyTabStops = 117] = "stickyTabStops", e[e.stopRenderingLineAfter = 118] = "stopRenderingLineAfter", e[e.suggest = 119] = "suggest", e[e.suggestFontSize = 120] = "suggestFontSize", e[e.suggestLineHeight = 121] = "suggestLineHeight", e[e.suggestOnTriggerCharacters = 122] = "suggestOnTriggerCharacters", e[e.suggestSelection = 123] = "suggestSelection", e[e.tabCompletion = 124] = "tabCompletion", e[e.tabIndex = 125] = "tabIndex", e[e.unicodeHighlighting = 126] = "unicodeHighlighting", e[e.unusualLineTerminators = 127] = "unusualLineTerminators", e[e.useShadowDOM = 128] = "useShadowDOM", e[e.useTabStops = 129] = "useTabStops", e[e.wordBreak = 130] = "wordBreak", e[e.wordSegmenterLocales = 131] = "wordSegmenterLocales", e[e.wordSeparators = 132] = "wordSeparators", e[e.wordWrap = 133] = "wordWrap", e[e.wordWrapBreakAfterCharacters = 134] = "wordWrapBreakAfterCharacters", e[e.wordWrapBreakBeforeCharacters = 135] = "wordWrapBreakBeforeCharacters", e[e.wordWrapColumn = 136] = "wordWrapColumn", e[e.wordWrapOverride1 = 137] = "wordWrapOverride1", e[e.wordWrapOverride2 = 138] = "wordWrapOverride2", e[e.wrappingIndent = 139] = "wrappingIndent", e[e.wrappingStrategy = 140] = "wrappingStrategy", e[e.showDeprecated = 141] = "showDeprecated", e[e.inlayHints = 142] = "inlayHints", e[e.editorClassName = 143] = "editorClassName", e[e.pixelRatio = 144] = "pixelRatio", e[e.tabFocusMode = 145] = "tabFocusMode", e[e.layoutInfo = 146] = "layoutInfo", e[e.wrappingInfo = 147] = "wrappingInfo", e[e.defaultColorDecorators = 148] = "defaultColorDecorators", e[e.colorDecoratorsActivatedOn = 149] = "colorDecoratorsActivatedOn", e[e.inlineCompletionsAccessibilityVerbose = 150] = "inlineCompletionsAccessibilityVerbose";
  })(bd || (bd = {}));
  var vd;
  (function(e) {
    e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
  })(vd || (vd = {}));
  var _d;
  (function(e) {
    e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
  })(_d || (_d = {}));
  var Nd;
  (function(e) {
    e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
  })(Nd || (Nd = {}));
  var Cd;
  (function(e) {
    e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
  })(Cd || (Cd = {}));
  var Td;
  (function(e) {
    e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent";
  })(Td || (Td = {}));
  var Sd;
  (function(e) {
    e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
  })(Sd || (Sd = {}));
  var Ad;
  (function(e) {
    e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
  })(Ad || (Ad = {}));
  var Fd;
  (function(e) {
    e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
  })(Fd || (Fd = {}));
  var wd;
  (function(e) {
    e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
  })(wd || (wd = {}));
  var nu;
  (function(e) {
    e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
  })(nu || (nu = {}));
  var ru;
  (function(e) {
    e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
  })(ru || (ru = {}));
  var iu;
  (function(e) {
    e[e.Unnecessary = 1] = "Unnecessary", e[e.Deprecated = 2] = "Deprecated";
  })(iu || (iu = {}));
  var Id;
  (function(e) {
    e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
  })(Id || (Id = {}));
  var xd;
  (function(e) {
    e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
  })(xd || (xd = {}));
  var Ld;
  (function(e) {
    e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR";
  })(Ld || (Ld = {}));
  var Od;
  (function(e) {
    e[e.AIGenerated = 1] = "AIGenerated";
  })(Od || (Od = {}));
  var kd;
  (function(e) {
    e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
  })(kd || (kd = {}));
  var Rd;
  (function(e) {
    e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER";
  })(Rd || (Rd = {}));
  var Md;
  (function(e) {
    e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
  })(Md || (Md = {}));
  var Bd;
  (function(e) {
    e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
  })(Bd || (Bd = {}));
  var Pd;
  (function(e) {
    e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
  })(Pd || (Pd = {}));
  var Vd;
  (function(e) {
    e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom";
  })(Vd || (Vd = {}));
  var $d;
  (function(e) {
    e[e.None = 0] = "None", e[e.Text = 1] = "Text", e[e.Blocks = 2] = "Blocks";
  })($d || ($d = {}));
  var Ud;
  (function(e) {
    e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate";
  })(Ud || (Ud = {}));
  var jd;
  (function(e) {
    e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible";
  })(jd || (jd = {}));
  var su;
  (function(e) {
    e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
  })(su || (su = {}));
  var Kd;
  (function(e) {
    e.Off = "off", e.OnCode = "onCode", e.On = "on";
  })(Kd || (Kd = {}));
  var qd;
  (function(e) {
    e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
  })(qd || (qd = {}));
  var Gd;
  (function(e) {
    e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
  })(Gd || (Gd = {}));
  var Hd;
  (function(e) {
    e[e.Deprecated = 1] = "Deprecated";
  })(Hd || (Hd = {}));
  var Wd;
  (function(e) {
    e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid";
  })(Wd || (Wd = {}));
  var zd;
  (function(e) {
    e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin";
  })(zd || (zd = {}));
  var Yd;
  (function(e) {
    e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
  })(Yd || (Yd = {}));
  var Jd;
  (function(e) {
    e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent";
  })(Jd || (Jd = {}));
  var F4 = (jn = class {
    static chord(t, n) {
      return v4(t, n);
    }
  }, jn.CtrlCmd = 2048, jn.Shift = 1024, jn.Alt = 512, jn.WinCtrl = 256, jn);
  function w4() {
    return {
      editor: void 0,
      languages: void 0,
      CancellationTokenSource: D4,
      Emitter: Kt,
      KeyCode: nu,
      KeyMod: F4,
      Position: Ue,
      Range: ve,
      Selection: _4,
      SelectionDirection: su,
      MarkerSeverity: ru,
      MarkerTag: iu,
      Uri: yn,
      Token: A4
    };
  }
  var I4 = (fr = class {
    static getChannel(t) {
      return t.getChannel(fr.CHANNEL_NAME);
    }
    static setChannel(t, n) {
      t.setChannel(fr.CHANNEL_NAME, n);
    }
  }, fr.CHANNEL_NAME = "editorWorkerHost", fr), Xd, x4 = class {
    constructor() {
      this[Xd] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
    }
    clear() {
      this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
    }
    isEmpty() {
      return !this._head && !this._tail;
    }
    get size() {
      return this._size;
    }
    get first() {
      var e;
      return (e = this._head) == null ? void 0 : e.value;
    }
    get last() {
      var e;
      return (e = this._tail) == null ? void 0 : e.value;
    }
    has(e) {
      return this._map.has(e);
    }
    get(e, t = 0) {
      let n = this._map.get(e);
      if (n) return t !== 0 && this.touch(n, t), n.value;
    }
    set(e, t, n = 0) {
      let r = this._map.get(e);
      if (r) r.value = t, n !== 0 && this.touch(r, n);
      else {
        switch (r = { key: e, value: t, next: void 0, previous: void 0 }, n) {
          case 0:
            this.addItemLast(r);
            break;
          case 1:
            this.addItemFirst(r);
            break;
          case 2:
            this.addItemLast(r);
            break;
          default:
            this.addItemLast(r);
            break;
        }
        this._map.set(e, r), this._size++;
      }
      return this;
    }
    delete(e) {
      return !!this.remove(e);
    }
    remove(e) {
      let t = this._map.get(e);
      if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value;
    }
    shift() {
      if (!this._head && !this._tail) return;
      if (!this._head || !this._tail) throw new Error("Invalid list");
      let e = this._head;
      return this._map.delete(e.key), this.removeItem(e), this._size--, e.value;
    }
    forEach(e, t) {
      let n = this._state, r = this._head;
      for (; r; ) {
        if (t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this), this._state !== n)
          throw new Error("LinkedMap got modified during iteration.");
        r = r.next;
      }
    }
    keys() {
      let e = this, t = this._state, n = this._head, r = {
        [Symbol.iterator]() {
          return r;
        },
        next() {
          if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
          if (n) {
            let i = { value: n.key, done: !1 };
            return n = n.next, i;
          } else return { value: void 0, done: !0 };
        }
      };
      return r;
    }
    values() {
      let e = this, t = this._state, n = this._head, r = {
        [Symbol.iterator]() {
          return r;
        },
        next() {
          if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
          if (n) {
            let i = { value: n.value, done: !1 };
            return n = n.next, i;
          } else return { value: void 0, done: !0 };
        }
      };
      return r;
    }
    entries() {
      let e = this, t = this._state, n = this._head, r = {
        [Symbol.iterator]() {
          return r;
        },
        next() {
          if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
          if (n) {
            let i = { value: [n.key, n.value], done: !1 };
            return n = n.next, i;
          } else return { value: void 0, done: !0 };
        }
      };
      return r;
    }
    [(Xd = Symbol.toStringTag, Symbol.iterator)]() {
      return this.entries();
    }
    trimOld(e) {
      if (e >= this.size) return;
      if (e === 0) {
        this.clear();
        return;
      }
      let t = this._head, n = this.size;
      for (; t && n > e; ) this._map.delete(t.key), t = t.next, n--;
      this._head = t, this._size = n, t && (t.previous = void 0), this._state++;
    }
    trimNew(e) {
      if (e >= this.size) return;
      if (e === 0) {
        this.clear();
        return;
      }
      let t = this._tail, n = this.size;
      for (; t && n > e; ) this._map.delete(t.key), t = t.previous, n--;
      this._tail = t, this._size = n, t && (t.next = void 0), this._state++;
    }
    addItemFirst(e) {
      if (!this._head && !this._tail) this._tail = e;
      else if (this._head) e.next = this._head, this._head.previous = e;
      else throw new Error("Invalid list");
      this._head = e, this._state++;
    }
    addItemLast(e) {
      if (!this._head && !this._tail) this._head = e;
      else if (this._tail) e.previous = this._tail, this._tail.next = e;
      else throw new Error("Invalid list");
      this._tail = e, this._state++;
    }
    removeItem(e) {
      if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
      else if (e === this._head) {
        if (!e.next) throw new Error("Invalid list");
        e.next.previous = void 0, this._head = e.next;
      } else if (e === this._tail) {
        if (!e.previous) throw new Error("Invalid list");
        e.previous.next = void 0, this._tail = e.previous;
      } else {
        let t = e.next, n = e.previous;
        if (!t || !n) throw new Error("Invalid list");
        t.previous = n, n.next = t;
      }
      e.next = void 0, e.previous = void 0, this._state++;
    }
    touch(e, t) {
      if (!this._head || !this._tail) throw new Error("Invalid list");
      if (!(t !== 1 && t !== 2)) {
        if (t === 1) {
          if (e === this._head) return;
          let n = e.next, r = e.previous;
          e === this._tail ? (r.next = void 0, this._tail = r) : (n.previous = r, r.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
        } else if (t === 2) {
          if (e === this._tail) return;
          let n = e.next, r = e.previous;
          e === this._head ? (n.previous = void 0, this._head = n) : (n.previous = r, r.next = n), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
        }
      }
    }
    toJSON() {
      let e = [];
      return this.forEach((t, n) => {
        e.push([n, t]);
      }), e;
    }
    fromJSON(e) {
      this.clear();
      for (let [t, n] of e) this.set(t, n);
    }
  }, L4 = class extends x4 {
    constructor(e, t = 1) {
      super(), this._limit = e, this._ratio = Math.min(Math.max(0, t), 1);
    }
    get limit() {
      return this._limit;
    }
    set limit(e) {
      this._limit = e, this.checkTrim();
    }
    get(e, t = 2) {
      return super.get(e, t);
    }
    peek(e) {
      return super.get(e, 0);
    }
    set(e, t) {
      return super.set(e, t, 2), this;
    }
    checkTrim() {
      this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
    }
  }, O4 = class extends L4 {
    constructor(e, t = 1) {
      super(e, t);
    }
    trim(e) {
      this.trimOld(e);
    }
    set(e, t) {
      return super.set(e, t), this.checkTrim(), this;
    }
  }, k4 = class {
    constructor() {
      this.map = /* @__PURE__ */ new Map();
    }
    add(e, t) {
      let n = this.map.get(e);
      n || (n = /* @__PURE__ */ new Set(), this.map.set(e, n)), n.add(t);
    }
    delete(e, t) {
      let n = this.map.get(e);
      n && (n.delete(t), n.size === 0 && this.map.delete(e));
    }
    forEach(e, t) {
      let n = this.map.get(e);
      n && n.forEach(t);
    }
    get(e) {
      return this.map.get(e) || /* @__PURE__ */ new Set();
    }
  };
  new O4(10);
  function R4(e) {
    let t = [];
    for (; Object.prototype !== e; )
      t = t.concat(Object.getOwnPropertyNames(e)), e = Object.getPrototypeOf(e);
    return t;
  }
  function Qd(e) {
    let t = [];
    for (let n of R4(e)) typeof e[n] == "function" && t.push(n);
    return t;
  }
  function M4(e, t) {
    let n = (i) => function() {
      let s = Array.prototype.slice.call(arguments, 0);
      return t(i, s);
    }, r = {};
    for (let i of e) r[i] = n(i);
    return r;
  }
  var Zd;
  (function(e) {
    e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
  })(Zd || (Zd = {}));
  var ef;
  (function(e) {
    e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
  })(ef || (ef = {}));
  var tf;
  (function(e) {
    e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
  })(tf || (tf = {}));
  function B4(e, t, n, r, i) {
    if (r === 0) return !0;
    let s = t.charCodeAt(r - 1);
    if (e.get(s) !== 0 || s === 13 || s === 10) return !0;
    if (i > 0) {
      let a = t.charCodeAt(r);
      if (e.get(a) !== 0) return !0;
    }
    return !1;
  }
  function P4(e, t, n, r, i) {
    if (r + i === n) return !0;
    let s = t.charCodeAt(r + i);
    if (e.get(s) !== 0 || s === 13 || s === 10) return !0;
    if (i > 0) {
      let a = t.charCodeAt(r + i - 1);
      if (e.get(a) !== 0) return !0;
    }
    return !1;
  }
  function V4(e, t, n, r, i) {
    return B4(e, t, n, r, i) && P4(e, t, n, r, i);
  }
  var $4 = class {
    constructor(e, t) {
      this._wordSeparators = e, this._searchRegex = t, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
    }
    reset(e) {
      this._searchRegex.lastIndex = e, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
    }
    next(e) {
      let t = e.length, n;
      do {
        if (this._prevMatchStartIndex + this._prevMatchLength === t || (n = this._searchRegex.exec(e), !n))
          return null;
        let r = n.index, i = n[0].length;
        if (r === this._prevMatchStartIndex && i === this._prevMatchLength) {
          if (i === 0) {
            Tg(e, t, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
            continue;
          }
          return null;
        }
        if (this._prevMatchStartIndex = r, this._prevMatchLength = i, !this._wordSeparators || V4(this._wordSeparators, e, t, r, i))
          return n;
      } while (n);
      return null;
    }
  };
  function U4(e, t = "Unreachable") {
    throw new Error(t);
  }
  function Js(e) {
    if (!e()) {
      debugger;
      e(), Bi(new Zt("Assertion Failed"));
    }
  }
  function nf(e, t) {
    let n = 0;
    for (; n < e.length - 1; ) {
      let r = e[n], i = e[n + 1];
      if (!t(r, i)) return !1;
      n++;
    }
    return !0;
  }
  var j4 = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
  function K4(e = "") {
    let t = "(-?\\d*\\.\\d\\w*)|([^";
    for (let n of j4) e.indexOf(n) >= 0 || (t += "\\" + n);
    return t += "\\s]+)", new RegExp(t, "g");
  }
  var rf = K4();
  function sf(e) {
    let t = rf;
    if (e && e instanceof RegExp)
      if (e.global) t = e;
      else {
        let n = "g";
        e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n);
      }
    return t.lastIndex = 0, t;
  }
  var af = new zm();
  af.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 });
  function au(e, t, n, r, i) {
    if (t = sf(t), i || (i = Ps.first(af)), n.length > i.maxLen) {
      let l = e - i.maxLen / 2;
      return l < 0 ? l = 0 : r += l, n = n.substring(l, e + i.maxLen / 2), au(e, t, n, r, i);
    }
    let s = Date.now(), a = e - 1 - r, o = -1, u = null;
    for (let l = 1; !(Date.now() - s >= i.timeBudget); l++) {
      let c = a - i.windowSize * l;
      t.lastIndex = Math.max(0, c);
      let f = q4(t, n, a, o);
      if (!f && u || (u = f, c <= 0)) break;
      o = c;
    }
    if (u) {
      let l = { word: u[0], startColumn: r + 1 + u.index, endColumn: r + 1 + u.index + u[0].length };
      return t.lastIndex = 0, l;
    }
    return null;
  }
  function q4(e, t, n, r) {
    let i;
    for (; i = e.exec(t); ) {
      let s = i.index || 0;
      if (s <= n && e.lastIndex >= n) return i;
      if (r > 0 && s > r) return null;
    }
    return null;
  }
  var G4 = class {
    static computeUnicodeHighlights(e, t, n) {
      let r = n ? n.startLineNumber : 1, i = n ? n.endLineNumber : e.getLineCount(), s = new of(t), a = s.getCandidateCodePoints(), o;
      a === "allNonBasicAscii" ? o = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g") : o = new RegExp(`${H4(Array.from(a))}`, "g");
      let u = new $4(null, o), l = [], c = !1, f, p = 0, m = 0, g = 0;
      e: for (let y = r, S = i; y <= S; y++) {
        let C = e.getLineContent(y), w = C.length;
        u.reset(0);
        do
          if (f = u.next(C), f) {
            let A = f.index, T = f.index + f[0].length;
            if (A > 0) {
              let X = C.charCodeAt(A - 1);
              Ks(X) && A--;
            }
            if (T + 1 < w) {
              let X = C.charCodeAt(T - 1);
              Ks(X) && T++;
            }
            let I = C.substring(A, T), O = au(A + 1, rf, C, 0);
            O && O.endColumn <= A + 1 && (O = null);
            let k = s.shouldHighlightNonBasicASCII(I, O ? O.word : null);
            if (k !== 0) {
              if (k === 3 ? p++ : k === 2 ? m++ : k === 1 ? g++ : U4(), l.length >= 1e3) {
                c = !0;
                break e;
              }
              l.push(new ve(y, A + 1, y, T + 1));
            }
          }
        while (f);
      }
      return {
        ranges: l,
        hasMore: c,
        ambiguousCharacterCount: p,
        invisibleCharacterCount: m,
        nonBasicAsciiCharacterCount: g
      };
    }
    static computeUnicodeHighlightReason(e, t) {
      let n = new of(t);
      switch (n.shouldHighlightNonBasicASCII(e, null)) {
        case 0:
          return null;
        case 2:
          return { kind: 1 };
        case 3: {
          let r = e.codePointAt(0), i = n.ambiguousCharacters.getPrimaryConfusable(r), s = qo.getLocales().filter((a) => !qo.getInstance(/* @__PURE__ */ new Set([...t.allowedLocales, a])).isAmbiguous(r));
          return { kind: 0, confusableWith: String.fromCodePoint(i), notAmbiguousInLocales: s };
        }
        case 1:
          return { kind: 2 };
      }
    }
  };
  function H4(e, t) {
    return `[${vg(e.map((n) => String.fromCodePoint(n)).join(""))}]`;
  }
  var of = class {
    constructor(e) {
      this.options = e, this.allowedCodePoints = new Set(e.allowedCodePoints), this.ambiguousCharacters = qo.getInstance(new Set(e.allowedLocales));
    }
    getCandidateCodePoints() {
      if (this.options.nonBasicASCII) return "allNonBasicAscii";
      let e = /* @__PURE__ */ new Set();
      if (this.options.invisibleCharacters)
        for (let t of Go.codePoints) uf(String.fromCodePoint(t)) || e.add(t);
      if (this.options.ambiguousCharacters)
        for (let t of this.ambiguousCharacters.getConfusableCodePoints()) e.add(t);
      for (let t of this.allowedCodePoints) e.delete(t);
      return e;
    }
    shouldHighlightNonBasicASCII(e, t) {
      let n = e.codePointAt(0);
      if (this.allowedCodePoints.has(n)) return 0;
      if (this.options.nonBasicASCII) return 1;
      let r = !1, i = !1;
      if (t)
        for (let s of t) {
          let a = s.codePointAt(0), o = Ag(s);
          r = r || o, !o && !this.ambiguousCharacters.isAmbiguous(a) && !Go.isInvisibleCharacter(a) && (i = !0);
        }
      return !r && i ? 0 : this.options.invisibleCharacters && !uf(e) && Go.isInvisibleCharacter(n) ? 2 : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(n) ? 3 : 0;
    }
  };
  function uf(e) {
    return e === " " || e === `
` || e === "	";
  }
  var Xs = class {
    constructor(e, t, n) {
      this.changes = e, this.moves = t, this.hitTimeout = n;
    }
  }, W4 = class {
    constructor(e, t) {
      this.lineRangeMapping = e, this.changes = t;
    }
  }, Oe = class Tn {
    static addRange(t, n) {
      let r = 0;
      for (; r < n.length && n[r].endExclusive < t.start; ) r++;
      let i = r;
      for (; i < n.length && n[i].start <= t.endExclusive; ) i++;
      if (r === i) n.splice(r, 0, t);
      else {
        let s = Math.min(t.start, n[r].start), a = Math.max(t.endExclusive, n[i - 1].endExclusive);
        n.splice(r, i - r, new Tn(s, a));
      }
    }
    static tryCreate(t, n) {
      if (!(t > n)) return new Tn(t, n);
    }
    static ofLength(t) {
      return new Tn(0, t);
    }
    static ofStartAndLength(t, n) {
      return new Tn(t, t + n);
    }
    constructor(t, n) {
      if (this.start = t, this.endExclusive = n, t > n)
        throw new Zt(`Invalid range: ${this.toString()}`);
    }
    get isEmpty() {
      return this.start === this.endExclusive;
    }
    delta(t) {
      return new Tn(this.start + t, this.endExclusive + t);
    }
    deltaStart(t) {
      return new Tn(this.start + t, this.endExclusive);
    }
    deltaEnd(t) {
      return new Tn(this.start, this.endExclusive + t);
    }
    get length() {
      return this.endExclusive - this.start;
    }
    toString() {
      return `[${this.start}, ${this.endExclusive})`;
    }
    contains(t) {
      return this.start <= t && t < this.endExclusive;
    }
    join(t) {
      return new Tn(Math.min(this.start, t.start), Math.max(this.endExclusive, t.endExclusive));
    }
    intersect(t) {
      let n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
      if (n <= r) return new Tn(n, r);
    }
    intersects(t) {
      let n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
      return n < r;
    }
    isBefore(t) {
      return this.endExclusive <= t.start;
    }
    isAfter(t) {
      return this.start >= t.endExclusive;
    }
    slice(t) {
      return t.slice(this.start, this.endExclusive);
    }
    substring(t) {
      return t.substring(this.start, this.endExclusive);
    }
    clip(t) {
      if (this.isEmpty) throw new Zt(`Invalid clipping range: ${this.toString()}`);
      return Math.max(this.start, Math.min(this.endExclusive - 1, t));
    }
    clipCyclic(t) {
      if (this.isEmpty) throw new Zt(`Invalid clipping range: ${this.toString()}`);
      return t < this.start ? this.endExclusive - (this.start - t) % this.length : t >= this.endExclusive ? this.start + (t - this.start) % this.length : t;
    }
    forEach(t) {
      for (let n = this.start; n < this.endExclusive; n++) t(n);
    }
  };
  function ii(e, t) {
    let n = Ui(e, t);
    return n === -1 ? void 0 : e[n];
  }
  function Ui(e, t, n = 0, r = e.length) {
    let i = n, s = r;
    for (; i < s; ) {
      let a = Math.floor((i + s) / 2);
      t(e[a]) ? i = a + 1 : s = a;
    }
    return i - 1;
  }
  function z4(e, t) {
    let n = ou(e, t);
    return n === e.length ? void 0 : e[n];
  }
  function ou(e, t, n = 0, r = e.length) {
    let i = n, s = r;
    for (; i < s; ) {
      let a = Math.floor((i + s) / 2);
      t(e[a]) ? s = a : i = a + 1;
    }
    return i;
  }
  var lf = (Br = class {
    constructor(t) {
      this._array = t, this._findLastMonotonousLastIdx = 0;
    }
    findLastMonotonous(t) {
      if (Br.assertInvariants) {
        if (this._prevFindLastPredicate) {
          for (let r of this._array)
            if (this._prevFindLastPredicate(r) && !t(r))
              throw new Error(
                "MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate."
              );
        }
        this._prevFindLastPredicate = t;
      }
      let n = Ui(this._array, t, this._findLastMonotonousLastIdx);
      return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
    }
  }, Br.assertInvariants = !1, Br), _e = class qn {
    static fromRangeInclusive(t) {
      return new qn(t.startLineNumber, t.endLineNumber + 1);
    }
    static joinMany(t) {
      if (t.length === 0) return [];
      let n = new Qs(t[0].slice());
      for (let r = 1; r < t.length; r++) n = n.getUnion(new Qs(t[r].slice()));
      return n.ranges;
    }
    static join(t) {
      if (t.length === 0) throw new Zt("lineRanges cannot be empty");
      let n = t[0].startLineNumber, r = t[0].endLineNumberExclusive;
      for (let i = 1; i < t.length; i++)
        n = Math.min(n, t[i].startLineNumber), r = Math.max(r, t[i].endLineNumberExclusive);
      return new qn(n, r);
    }
    static ofLength(t, n) {
      return new qn(t, t + n);
    }
    static deserialize(t) {
      return new qn(t[0], t[1]);
    }
    constructor(t, n) {
      if (t > n) throw new Zt(`startLineNumber ${t} cannot be after endLineNumberExclusive ${n}`);
      this.startLineNumber = t, this.endLineNumberExclusive = n;
    }
    contains(t) {
      return this.startLineNumber <= t && t < this.endLineNumberExclusive;
    }
    get isEmpty() {
      return this.startLineNumber === this.endLineNumberExclusive;
    }
    delta(t) {
      return new qn(this.startLineNumber + t, this.endLineNumberExclusive + t);
    }
    deltaLength(t) {
      return new qn(this.startLineNumber, this.endLineNumberExclusive + t);
    }
    get length() {
      return this.endLineNumberExclusive - this.startLineNumber;
    }
    join(t) {
      return new qn(
        Math.min(this.startLineNumber, t.startLineNumber),
        Math.max(this.endLineNumberExclusive, t.endLineNumberExclusive)
      );
    }
    toString() {
      return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
    }
    intersect(t) {
      let n = Math.max(this.startLineNumber, t.startLineNumber), r = Math.min(this.endLineNumberExclusive, t.endLineNumberExclusive);
      if (n <= r) return new qn(n, r);
    }
    intersectsStrict(t) {
      return this.startLineNumber < t.endLineNumberExclusive && t.startLineNumber < this.endLineNumberExclusive;
    }
    overlapOrTouch(t) {
      return this.startLineNumber <= t.endLineNumberExclusive && t.startLineNumber <= this.endLineNumberExclusive;
    }
    equals(t) {
      return this.startLineNumber === t.startLineNumber && this.endLineNumberExclusive === t.endLineNumberExclusive;
    }
    toInclusiveRange() {
      return this.isEmpty ? null : new ve(
        this.startLineNumber,
        1,
        this.endLineNumberExclusive - 1,
        Number.MAX_SAFE_INTEGER
      );
    }
    toExclusiveRange() {
      return new ve(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
    }
    mapToLineArray(t) {
      let n = [];
      for (let r = this.startLineNumber; r < this.endLineNumberExclusive; r++) n.push(t(r));
      return n;
    }
    forEach(t) {
      for (let n = this.startLineNumber; n < this.endLineNumberExclusive; n++) t(n);
    }
    serialize() {
      return [this.startLineNumber, this.endLineNumberExclusive];
    }
    includes(t) {
      return this.startLineNumber <= t && t < this.endLineNumberExclusive;
    }
    toOffsetRange() {
      return new Oe(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
    }
  }, Qs = class Ai {
    constructor(t = []) {
      this._normalizedRanges = t;
    }
    get ranges() {
      return this._normalizedRanges;
    }
    addRange(t) {
      if (t.length === 0) return;
      let n = ou(this._normalizedRanges, (i) => i.endLineNumberExclusive >= t.startLineNumber), r = Ui(this._normalizedRanges, (i) => i.startLineNumber <= t.endLineNumberExclusive) + 1;
      if (n === r) this._normalizedRanges.splice(n, 0, t);
      else if (n === r - 1) {
        let i = this._normalizedRanges[n];
        this._normalizedRanges[n] = i.join(t);
      } else {
        let i = this._normalizedRanges[n].join(this._normalizedRanges[r - 1]).join(t);
        this._normalizedRanges.splice(n, r - n, i);
      }
    }
    contains(t) {
      let n = ii(this._normalizedRanges, (r) => r.startLineNumber <= t);
      return !!n && n.endLineNumberExclusive > t;
    }
    intersects(t) {
      let n = ii(this._normalizedRanges, (r) => r.startLineNumber < t.endLineNumberExclusive);
      return !!n && n.endLineNumberExclusive > t.startLineNumber;
    }
    getUnion(t) {
      if (this._normalizedRanges.length === 0) return t;
      if (t._normalizedRanges.length === 0) return this;
      let n = [], r = 0, i = 0, s = null;
      for (; r < this._normalizedRanges.length || i < t._normalizedRanges.length; ) {
        let a = null;
        if (r < this._normalizedRanges.length && i < t._normalizedRanges.length) {
          let o = this._normalizedRanges[r], u = t._normalizedRanges[i];
          o.startLineNumber < u.startLineNumber ? (a = o, r++) : (a = u, i++);
        } else
          r < this._normalizedRanges.length ? (a = this._normalizedRanges[r], r++) : (a = t._normalizedRanges[i], i++);
        s === null ? s = a : s.endLineNumberExclusive >= a.startLineNumber ? s = new _e(
          s.startLineNumber,
          Math.max(s.endLineNumberExclusive, a.endLineNumberExclusive)
        ) : (n.push(s), s = a);
      }
      return s !== null && n.push(s), new Ai(n);
    }
    subtractFrom(t) {
      let n = ou(this._normalizedRanges, (a) => a.endLineNumberExclusive >= t.startLineNumber), r = Ui(this._normalizedRanges, (a) => a.startLineNumber <= t.endLineNumberExclusive) + 1;
      if (n === r) return new Ai([t]);
      let i = [], s = t.startLineNumber;
      for (let a = n; a < r; a++) {
        let o = this._normalizedRanges[a];
        o.startLineNumber > s && i.push(new _e(s, o.startLineNumber)), s = o.endLineNumberExclusive;
      }
      return s < t.endLineNumberExclusive && i.push(new _e(s, t.endLineNumberExclusive)), new Ai(i);
    }
    toString() {
      return this._normalizedRanges.map((t) => t.toString()).join(", ");
    }
    getIntersection(t) {
      let n = [], r = 0, i = 0;
      for (; r < this._normalizedRanges.length && i < t._normalizedRanges.length; ) {
        let s = this._normalizedRanges[r], a = t._normalizedRanges[i], o = s.intersect(a);
        o && !o.isEmpty && n.push(o), s.endLineNumberExclusive < a.endLineNumberExclusive ? r++ : i++;
      }
      return new Ai(n);
    }
    getWithDelta(t) {
      return new Ai(this._normalizedRanges.map((n) => n.delta(t)));
    }
  };
  ln = class {
    static betweenPositions(t, n) {
      return t.lineNumber === n.lineNumber ? new ln(0, n.column - t.column) : new ln(n.lineNumber - t.lineNumber, n.column - 1);
    }
    static ofRange(t) {
      return ln.betweenPositions(t.getStartPosition(), t.getEndPosition());
    }
    static ofText(t) {
      let n = 0, r = 0;
      for (let i of t)
        i === `
` ? (n++, r = 0) : r++;
      return new ln(n, r);
    }
    constructor(t, n) {
      this.lineCount = t, this.columnCount = n;
    }
    isGreaterThanOrEqualTo(t) {
      return this.lineCount !== t.lineCount ? this.lineCount > t.lineCount : this.columnCount >= t.columnCount;
    }
    createRange(t) {
      return this.lineCount === 0 ? new ve(t.lineNumber, t.column, t.lineNumber, t.column + this.columnCount) : new ve(t.lineNumber, t.column, t.lineNumber + this.lineCount, this.columnCount + 1);
    }
    addToPosition(t) {
      return this.lineCount === 0 ? new Ue(t.lineNumber, t.column + this.columnCount) : new Ue(t.lineNumber + this.lineCount, this.columnCount + 1);
    }
    toString() {
      return `${this.lineCount},${this.columnCount}`;
    }
  }, ln.zero = new ln(0, 0);
  var Y4 = class {
    constructor(e, t) {
      this.range = e, this.text = t;
    }
    toSingleEditOperation() {
      return { range: this.range, text: this.text };
    }
  }, si = class Fi {
    static inverse(t, n, r) {
      let i = [], s = 1, a = 1;
      for (let u of t) {
        let l = new Fi(new _e(s, u.original.startLineNumber), new _e(a, u.modified.startLineNumber));
        l.modified.isEmpty || i.push(l), s = u.original.endLineNumberExclusive, a = u.modified.endLineNumberExclusive;
      }
      let o = new Fi(new _e(s, n + 1), new _e(a, r + 1));
      return o.modified.isEmpty || i.push(o), i;
    }
    static clip(t, n, r) {
      let i = [];
      for (let s of t) {
        let a = s.original.intersect(n), o = s.modified.intersect(r);
        a && !a.isEmpty && o && !o.isEmpty && i.push(new Fi(a, o));
      }
      return i;
    }
    constructor(t, n) {
      this.original = t, this.modified = n;
    }
    toString() {
      return `{${this.original.toString()}->${this.modified.toString()}}`;
    }
    flip() {
      return new Fi(this.modified, this.original);
    }
    join(t) {
      return new Fi(this.original.join(t.original), this.modified.join(t.modified));
    }
    toRangeMapping() {
      let t = this.original.toInclusiveRange(), n = this.modified.toInclusiveRange();
      if (t && n) return new On(t, n);
      if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
        if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1))
          throw new Zt("not a valid diff");
        return new On(
          new ve(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1),
          new ve(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1)
        );
      } else
        return new On(
          new ve(
            this.original.startLineNumber - 1,
            Number.MAX_SAFE_INTEGER,
            this.original.endLineNumberExclusive - 1,
            Number.MAX_SAFE_INTEGER
          ),
          new ve(
            this.modified.startLineNumber - 1,
            Number.MAX_SAFE_INTEGER,
            this.modified.endLineNumberExclusive - 1,
            Number.MAX_SAFE_INTEGER
          )
        );
    }
    toRangeMapping2(t, n) {
      if (cf(this.original.endLineNumberExclusive, t) && cf(this.modified.endLineNumberExclusive, n))
        return new On(
          new ve(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1),
          new ve(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1)
        );
      if (!this.original.isEmpty && !this.modified.isEmpty)
        return new On(
          ve.fromPositions(
            new Ue(this.original.startLineNumber, 1),
            ai(new Ue(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)
          ),
          ve.fromPositions(
            new Ue(this.modified.startLineNumber, 1),
            ai(new Ue(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)
          )
        );
      if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1)
        return new On(
          ve.fromPositions(
            ai(new Ue(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t),
            ai(new Ue(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)
          ),
          ve.fromPositions(
            ai(new Ue(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n),
            ai(new Ue(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)
          )
        );
      throw new Zt();
    }
  };
  function ai(e, t) {
    if (e.lineNumber < 1) return new Ue(1, 1);
    if (e.lineNumber > t.length) return new Ue(t.length, t[t.length - 1].length + 1);
    let n = t[e.lineNumber - 1];
    return e.column > n.length + 1 ? new Ue(e.lineNumber, n.length + 1) : e;
  }
  function cf(e, t) {
    return e >= 1 && e <= t.length;
  }
  var ji = class Pa extends si {
    static fromRangeMappings(t) {
      let n = _e.join(t.map((i) => _e.fromRangeInclusive(i.originalRange))), r = _e.join(t.map((i) => _e.fromRangeInclusive(i.modifiedRange)));
      return new Pa(n, r, t);
    }
    constructor(t, n, r) {
      super(t, n), this.innerChanges = r;
    }
    flip() {
      var t;
      return new Pa(
        this.modified,
        this.original,
        (t = this.innerChanges) == null ? void 0 : t.map((n) => n.flip())
      );
    }
    withInnerChangesFromLineRanges() {
      return new Pa(this.original, this.modified, [this.toRangeMapping()]);
    }
  }, On = class xp {
    static assertSorted(t) {
      for (let n = 1; n < t.length; n++) {
        let r = t[n - 1], i = t[n];
        if (!(r.originalRange.getEndPosition().isBeforeOrEqual(i.originalRange.getStartPosition()) && r.modifiedRange.getEndPosition().isBeforeOrEqual(i.modifiedRange.getStartPosition())))
          throw new Zt("Range mappings must be sorted");
      }
    }
    constructor(t, n) {
      this.originalRange = t, this.modifiedRange = n;
    }
    toString() {
      return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
    }
    flip() {
      return new xp(this.modifiedRange, this.originalRange);
    }
    toTextEdit(t) {
      let n = t.getValueOfRange(this.modifiedRange);
      return new Y4(this.originalRange, n);
    }
  }, J4 = 3, X4 = class {
    computeDiff(e, t, n) {
      var a;
      let r = new e5(e, t, {
        maxComputationTime: n.maxComputationTimeMs,
        shouldIgnoreTrimWhitespace: n.ignoreTrimWhitespace,
        shouldComputeCharChanges: !0,
        shouldMakePrettyDiff: !0,
        shouldPostProcessCharChanges: !0
      }).computeDiff(), i = [], s = null;
      for (let o of r.changes) {
        let u;
        o.originalEndLineNumber === 0 ? u = new _e(o.originalStartLineNumber + 1, o.originalStartLineNumber + 1) : u = new _e(o.originalStartLineNumber, o.originalEndLineNumber + 1);
        let l;
        o.modifiedEndLineNumber === 0 ? l = new _e(o.modifiedStartLineNumber + 1, o.modifiedStartLineNumber + 1) : l = new _e(o.modifiedStartLineNumber, o.modifiedEndLineNumber + 1);
        let c = new ji(
          u,
          l,
          (a = o.charChanges) == null ? void 0 : a.map(
            (f) => new On(
              new ve(
                f.originalStartLineNumber,
                f.originalStartColumn,
                f.originalEndLineNumber,
                f.originalEndColumn
              ),
              new ve(
                f.modifiedStartLineNumber,
                f.modifiedStartColumn,
                f.modifiedEndLineNumber,
                f.modifiedEndColumn
              )
            )
          )
        );
        s && (s.modified.endLineNumberExclusive === c.modified.startLineNumber || s.original.endLineNumberExclusive === c.original.startLineNumber) && (c = new ji(
          s.original.join(c.original),
          s.modified.join(c.modified),
          s.innerChanges && c.innerChanges ? s.innerChanges.concat(c.innerChanges) : void 0
        ), i.pop()), i.push(c), s = c;
      }
      return Js(
        () => nf(
          i,
          (o, u) => u.original.startLineNumber - o.original.endLineNumberExclusive === u.modified.startLineNumber - o.modified.endLineNumberExclusive && o.original.endLineNumberExclusive < u.original.startLineNumber && o.modified.endLineNumberExclusive < u.modified.startLineNumber
        )
      ), new Xs(i, [], r.quitEarly);
    }
  };
  function df(e, t, n, r) {
    return new Gc(e, t, n).ComputeDiff(r);
  }
  var ff = class {
    constructor(e) {
      let t = [], n = [];
      for (let r = 0, i = e.length; r < i; r++) t[r] = lu(e[r], 1), n[r] = cu(e[r], 1);
      this.lines = e, this._startColumns = t, this._endColumns = n;
    }
    getElements() {
      let e = [];
      for (let t = 0, n = this.lines.length; t < n; t++)
        e[t] = this.lines[t].substring(this._startColumns[t] - 1, this._endColumns[t] - 1);
      return e;
    }
    getStrictElement(e) {
      return this.lines[e];
    }
    getStartLineNumber(e) {
      return e + 1;
    }
    getEndLineNumber(e) {
      return e + 1;
    }
    createCharSequence(e, t, n) {
      let r = [], i = [], s = [], a = 0;
      for (let o = t; o <= n; o++) {
        let u = this.lines[o], l = e ? this._startColumns[o] : 1, c = e ? this._endColumns[o] : u.length + 1;
        for (let f = l; f < c; f++) r[a] = u.charCodeAt(f - 1), i[a] = o + 1, s[a] = f, a++;
        !e && o < n && (r[a] = 10, i[a] = o + 1, s[a] = u.length + 1, a++);
      }
      return new Q4(r, i, s);
    }
  }, Q4 = class {
    constructor(e, t, n) {
      this._charCodes = e, this._lineNumbers = t, this._columns = n;
    }
    toString() {
      return "[" + this._charCodes.map(
        (e, t) => (e === 10 ? "\\n" : String.fromCharCode(e)) + `-(${this._lineNumbers[t]},${this._columns[t]})`
      ).join(", ") + "]";
    }
    _assertIndex(e, t) {
      if (e < 0 || e >= t.length) throw new Error("Illegal index");
    }
    getElements() {
      return this._charCodes;
    }
    getStartLineNumber(e) {
      return e > 0 && e === this._lineNumbers.length ? this.getEndLineNumber(e - 1) : (this._assertIndex(e, this._lineNumbers), this._lineNumbers[e]);
    }
    getEndLineNumber(e) {
      return e === -1 ? this.getStartLineNumber(e + 1) : (this._assertIndex(e, this._lineNumbers), this._charCodes[e] === 10 ? this._lineNumbers[e] + 1 : this._lineNumbers[e]);
    }
    getStartColumn(e) {
      return e > 0 && e === this._columns.length ? this.getEndColumn(e - 1) : (this._assertIndex(e, this._columns), this._columns[e]);
    }
    getEndColumn(e) {
      return e === -1 ? this.getStartColumn(e + 1) : (this._assertIndex(e, this._columns), this._charCodes[e] === 10 ? 1 : this._columns[e] + 1);
    }
  }, Zs = class Lp {
    constructor(t, n, r, i, s, a, o, u) {
      this.originalStartLineNumber = t, this.originalStartColumn = n, this.originalEndLineNumber = r, this.originalEndColumn = i, this.modifiedStartLineNumber = s, this.modifiedStartColumn = a, this.modifiedEndLineNumber = o, this.modifiedEndColumn = u;
    }
    static createFromDiffChange(t, n, r) {
      let i = n.getStartLineNumber(t.originalStart), s = n.getStartColumn(t.originalStart), a = n.getEndLineNumber(t.originalStart + t.originalLength - 1), o = n.getEndColumn(t.originalStart + t.originalLength - 1), u = r.getStartLineNumber(t.modifiedStart), l = r.getStartColumn(t.modifiedStart), c = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), f = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1);
      return new Lp(i, s, a, o, u, l, c, f);
    }
  };
  function Z4(e) {
    if (e.length <= 1) return e;
    let t = [e[0]], n = t[0];
    for (let r = 1, i = e.length; r < i; r++) {
      let s = e[r], a = s.originalStart - (n.originalStart + n.originalLength), o = s.modifiedStart - (n.modifiedStart + n.modifiedLength);
      Math.min(a, o) < J4 ? (n.originalLength = s.originalStart + s.originalLength - n.originalStart, n.modifiedLength = s.modifiedStart + s.modifiedLength - n.modifiedStart) : (t.push(s), n = s);
    }
    return t;
  }
  var uu = class Op {
    constructor(t, n, r, i, s) {
      this.originalStartLineNumber = t, this.originalEndLineNumber = n, this.modifiedStartLineNumber = r, this.modifiedEndLineNumber = i, this.charChanges = s;
    }
    static createFromDiffResult(t, n, r, i, s, a, o) {
      let u, l, c, f, p;
      if (n.originalLength === 0 ? (u = r.getStartLineNumber(n.originalStart) - 1, l = 0) : (u = r.getStartLineNumber(n.originalStart), l = r.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (c = i.getStartLineNumber(n.modifiedStart) - 1, f = 0) : (c = i.getStartLineNumber(n.modifiedStart), f = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), a && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && s()) {
        let m = r.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1), g = i.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
        if (m.getElements().length > 0 && g.getElements().length > 0) {
          let y = df(m, g, s, !0).changes;
          o && (y = Z4(y)), p = [];
          for (let S = 0, C = y.length; S < C; S++) p.push(Zs.createFromDiffChange(y[S], m, g));
        }
      }
      return new Op(u, l, c, f, p);
    }
  }, e5 = class {
    constructor(e, t, n) {
      this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.originalLines = e, this.modifiedLines = t, this.original = new ff(e), this.modified = new ff(t), this.continueLineDiff = hf(n.maxComputationTime), this.continueCharDiff = hf(
        n.maxComputationTime === 0 ? 0 : Math.min(n.maxComputationTime, 5e3)
      );
    }
    computeDiff() {
      if (this.original.lines.length === 1 && this.original.lines[0].length === 0)
        return this.modified.lines.length === 1 && this.modified.lines[0].length === 0 ? { quitEarly: !1, changes: [] } : {
          quitEarly: !1,
          changes: [
            {
              originalStartLineNumber: 1,
              originalEndLineNumber: 1,
              modifiedStartLineNumber: 1,
              modifiedEndLineNumber: this.modified.lines.length,
              charChanges: void 0
            }
          ]
        };
      if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0)
        return {
          quitEarly: !1,
          changes: [
            {
              originalStartLineNumber: 1,
              originalEndLineNumber: this.original.lines.length,
              modifiedStartLineNumber: 1,
              modifiedEndLineNumber: 1,
              charChanges: void 0
            }
          ]
        };
      let e = df(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), t = e.changes, n = e.quitEarly;
      if (this.shouldIgnoreTrimWhitespace) {
        let a = [];
        for (let o = 0, u = t.length; o < u; o++)
          a.push(
            uu.createFromDiffResult(
              this.shouldIgnoreTrimWhitespace,
              t[o],
              this.original,
              this.modified,
              this.continueCharDiff,
              this.shouldComputeCharChanges,
              this.shouldPostProcessCharChanges
            )
          );
        return { quitEarly: n, changes: a };
      }
      let r = [], i = 0, s = 0;
      for (let a = -1, o = t.length; a < o; a++) {
        let u = a + 1 < o ? t[a + 1] : null, l = u ? u.originalStart : this.originalLines.length, c = u ? u.modifiedStart : this.modifiedLines.length;
        for (; i < l && s < c; ) {
          let f = this.originalLines[i], p = this.modifiedLines[s];
          if (f !== p) {
            {
              let m = lu(f, 1), g = lu(p, 1);
              for (; m > 1 && g > 1; ) {
                let y = f.charCodeAt(m - 2), S = p.charCodeAt(g - 2);
                if (y !== S) break;
                m--, g--;
              }
              (m > 1 || g > 1) && this._pushTrimWhitespaceCharChange(r, i + 1, 1, m, s + 1, 1, g);
            }
            {
              let m = cu(f, 1), g = cu(p, 1), y = f.length + 1, S = p.length + 1;
              for (; m < y && g < S; ) {
                let C = f.charCodeAt(m - 1), w = f.charCodeAt(g - 1);
                if (C !== w) break;
                m++, g++;
              }
              (m < y || g < S) && this._pushTrimWhitespaceCharChange(r, i + 1, m, y, s + 1, g, S);
            }
          }
          i++, s++;
        }
        u && (r.push(
          uu.createFromDiffResult(
            this.shouldIgnoreTrimWhitespace,
            u,
            this.original,
            this.modified,
            this.continueCharDiff,
            this.shouldComputeCharChanges,
            this.shouldPostProcessCharChanges
          )
        ), i += u.originalLength, s += u.modifiedLength);
      }
      return { quitEarly: n, changes: r };
    }
    _pushTrimWhitespaceCharChange(e, t, n, r, i, s, a) {
      if (this._mergeTrimWhitespaceCharChange(e, t, n, r, i, s, a)) return;
      let o;
      this.shouldComputeCharChanges && (o = [new Zs(t, n, t, r, i, s, i, a)]), e.push(new uu(t, t, i, i, o));
    }
    _mergeTrimWhitespaceCharChange(e, t, n, r, i, s, a) {
      let o = e.length;
      if (o === 0) return !1;
      let u = e[o - 1];
      return u.originalEndLineNumber === 0 || u.modifiedEndLineNumber === 0 ? !1 : u.originalEndLineNumber === t && u.modifiedEndLineNumber === i ? (this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new Zs(t, n, t, r, i, s, i, a)), !0) : u.originalEndLineNumber + 1 === t && u.modifiedEndLineNumber + 1 === i ? (u.originalEndLineNumber = t, u.modifiedEndLineNumber = i, this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new Zs(t, n, t, r, i, s, i, a)), !0) : !1;
    }
  };
  function lu(e, t) {
    let n = Ng(e);
    return n === -1 ? t : n + 1;
  }
  function cu(e, t) {
    let n = Cg(e);
    return n === -1 ? t : n + 2;
  }
  function hf(e) {
    if (e === 0) return () => !0;
    let t = Date.now();
    return () => Date.now() - t < e;
  }
  function t5(e, t, n = (r, i) => r === i) {
    if (e === t) return !0;
    if (!e || !t || e.length !== t.length) return !1;
    for (let r = 0, i = e.length; r < i; r++) if (!n(e[r], t[r])) return !1;
    return !0;
  }
  function* n5(e, t) {
    let n, r;
    for (let i of e) r !== void 0 && t(r, i) ? n.push(i) : (n && (yield n), n = [i]), r = i;
    n && (yield n);
  }
  function r5(e, t) {
    for (let n = 0; n <= e.length; n++)
      t(n === 0 ? void 0 : e[n - 1], n === e.length ? void 0 : e[n]);
  }
  function i5(e, t) {
    for (let n = 0; n < e.length; n++)
      t(n === 0 ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1]);
  }
  function s5(e, t) {
    for (let n of t) e.push(n);
  }
  var du;
  (function(e) {
    function t(s) {
      return s < 0;
    }
    e.isLessThan = t;
    function n(s) {
      return s <= 0;
    }
    e.isLessThanOrEqual = n;
    function r(s) {
      return s > 0;
    }
    e.isGreaterThan = r;
    function i(s) {
      return s === 0;
    }
    e.isNeitherLessOrGreaterThan = i, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
  })(du || (du = {}));
  function ea(e, t) {
    return (n, r) => t(e(n), e(r));
  }
  var ta = (e, t) => e - t;
  function a5(e) {
    return (t, n) => -e(t, n);
  }
  Kn = class {
    constructor(t) {
      this.iterate = t;
    }
    toArray() {
      let t = [];
      return this.iterate((n) => (t.push(n), !0)), t;
    }
    filter(t) {
      return new Kn((n) => this.iterate((r) => t(r) ? n(r) : !0));
    }
    map(t) {
      return new Kn((n) => this.iterate((r) => n(t(r))));
    }
    findLast(t) {
      let n;
      return this.iterate((r) => (t(r) && (n = r), !0)), n;
    }
    findLastMaxBy(t) {
      let n, r = !0;
      return this.iterate((i) => ((r || du.isGreaterThan(t(i, n))) && (r = !1, n = i), !0)), n;
    }
  }, Kn.empty = new Kn((t) => {
  });
  var oi = class Dl {
    static trivial(t, n) {
      return new Dl([new Lt(Oe.ofLength(t.length), Oe.ofLength(n.length))], !1);
    }
    static trivialTimedOut(t, n) {
      return new Dl([new Lt(Oe.ofLength(t.length), Oe.ofLength(n.length))], !0);
    }
    constructor(t, n) {
      this.diffs = t, this.hitTimeout = n;
    }
  }, Lt = class Gn {
    static invert(t, n) {
      let r = [];
      return r5(t, (i, s) => {
        r.push(
          Gn.fromOffsetPairs(
            i ? i.getEndExclusives() : br.zero,
            s ? s.getStarts() : new br(n, (i ? i.seq2Range.endExclusive - i.seq1Range.endExclusive : 0) + n)
          )
        );
      }), r;
    }
    static fromOffsetPairs(t, n) {
      return new Gn(new Oe(t.offset1, n.offset1), new Oe(t.offset2, n.offset2));
    }
    static assertSorted(t) {
      let n;
      for (let r of t) {
        if (n && !(n.seq1Range.endExclusive <= r.seq1Range.start && n.seq2Range.endExclusive <= r.seq2Range.start))
          throw new Zt("Sequence diffs must be sorted");
        n = r;
      }
    }
    constructor(t, n) {
      this.seq1Range = t, this.seq2Range = n;
    }
    swap() {
      return new Gn(this.seq2Range, this.seq1Range);
    }
    toString() {
      return `${this.seq1Range} <-> ${this.seq2Range}`;
    }
    join(t) {
      return new Gn(this.seq1Range.join(t.seq1Range), this.seq2Range.join(t.seq2Range));
    }
    delta(t) {
      return t === 0 ? this : new Gn(this.seq1Range.delta(t), this.seq2Range.delta(t));
    }
    deltaStart(t) {
      return t === 0 ? this : new Gn(this.seq1Range.deltaStart(t), this.seq2Range.deltaStart(t));
    }
    deltaEnd(t) {
      return t === 0 ? this : new Gn(this.seq1Range.deltaEnd(t), this.seq2Range.deltaEnd(t));
    }
    intersect(t) {
      let n = this.seq1Range.intersect(t.seq1Range), r = this.seq2Range.intersect(t.seq2Range);
      if (!(!n || !r)) return new Gn(n, r);
    }
    getStarts() {
      return new br(this.seq1Range.start, this.seq2Range.start);
    }
    getEndExclusives() {
      return new br(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
    }
  }, br = (_n = class {
    constructor(t, n) {
      this.offset1 = t, this.offset2 = n;
    }
    toString() {
      return `${this.offset1} <-> ${this.offset2}`;
    }
    delta(t) {
      return t === 0 ? this : new _n(this.offset1 + t, this.offset2 + t);
    }
    equals(t) {
      return this.offset1 === t.offset1 && this.offset2 === t.offset2;
    }
  }, _n.zero = new _n(0, 0), _n.max = new _n(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), _n), fu = (Pr = class {
    isValid() {
      return !0;
    }
  }, Pr.instance = new Pr(), Pr), o5 = class {
    constructor(e) {
      if (this.timeout = e, this.startTime = Date.now(), this.valid = !0, e <= 0)
        throw new Zt("timeout must be positive");
    }
    isValid() {
      if (!(Date.now() - this.startTime < this.timeout) && this.valid) {
        this.valid = !1;
        debugger;
      }
      return this.valid;
    }
  }, hu = class {
    constructor(e, t) {
      this.width = e, this.height = t, this.array = [], this.array = new Array(e * t);
    }
    get(e, t) {
      return this.array[e + t * this.width];
    }
    set(e, t, n) {
      this.array[e + t * this.width] = n;
    }
  };
  function pu(e) {
    return e === 32 || e === 9;
  }
  var pf = (hr = class {
    static getKey(t) {
      let n = this.chrKeys.get(t);
      return n === void 0 && (n = this.chrKeys.size, this.chrKeys.set(t, n)), n;
    }
    constructor(t, n, r) {
      this.range = t, this.lines = n, this.source = r, this.histogram = [];
      let i = 0;
      for (let s = t.startLineNumber - 1; s < t.endLineNumberExclusive - 1; s++) {
        let a = n[s];
        for (let u = 0; u < a.length; u++) {
          i++;
          let l = a[u], c = hr.getKey(l);
          this.histogram[c] = (this.histogram[c] || 0) + 1;
        }
        i++;
        let o = hr.getKey(`
`);
        this.histogram[o] = (this.histogram[o] || 0) + 1;
      }
      this.totalCount = i;
    }
    computeSimilarity(t) {
      let n = 0, r = Math.max(this.histogram.length, t.histogram.length);
      for (let i = 0; i < r; i++) n += Math.abs((this.histogram[i] ?? 0) - (t.histogram[i] ?? 0));
      return 1 - n / (this.totalCount + t.totalCount);
    }
  }, hr.chrKeys = /* @__PURE__ */ new Map(), hr), u5 = class {
    compute(e, t, n = fu.instance, r) {
      if (e.length === 0 || t.length === 0) return oi.trivial(e, t);
      let i = new hu(e.length, t.length), s = new hu(e.length, t.length), a = new hu(e.length, t.length);
      for (let m = 0; m < e.length; m++)
        for (let g = 0; g < t.length; g++) {
          if (!n.isValid()) return oi.trivialTimedOut(e, t);
          let y = m === 0 ? 0 : i.get(m - 1, g), S = g === 0 ? 0 : i.get(m, g - 1), C;
          e.getElement(m) === t.getElement(g) ? (m === 0 || g === 0 ? C = 0 : C = i.get(m - 1, g - 1), m > 0 && g > 0 && s.get(m - 1, g - 1) === 3 && (C += a.get(m - 1, g - 1)), C += r ? r(m, g) : 1) : C = -1;
          let w = Math.max(y, S, C);
          if (w === C) {
            let A = m > 0 && g > 0 ? a.get(m - 1, g - 1) : 0;
            a.set(m, g, A + 1), s.set(m, g, 3);
          } else
            w === y ? (a.set(m, g, 0), s.set(m, g, 1)) : w === S && (a.set(m, g, 0), s.set(m, g, 2));
          i.set(m, g, w);
        }
      let o = [], u = e.length, l = t.length;
      function c(m, g) {
        (m + 1 !== u || g + 1 !== l) && o.push(new Lt(new Oe(m + 1, u), new Oe(g + 1, l))), u = m, l = g;
      }
      let f = e.length - 1, p = t.length - 1;
      for (; f >= 0 && p >= 0; )
        s.get(f, p) === 3 ? (c(f, p), f--, p--) : s.get(f, p) === 1 ? f-- : p--;
      return c(-1, -1), o.reverse(), new oi(o, !1);
    }
  }, mf = class {
    compute(e, t, n = fu.instance) {
      if (e.length === 0 || t.length === 0) return oi.trivial(e, t);
      let r = e, i = t;
      function s(g, y) {
        for (; g < r.length && y < i.length && r.getElement(g) === i.getElement(y); ) g++, y++;
        return g;
      }
      let a = 0, o = new l5();
      o.set(0, s(0, 0));
      let u = new c5();
      u.set(0, o.get(0) === 0 ? null : new gf(null, 0, 0, o.get(0)));
      let l = 0;
      e: for (; ; ) {
        if (a++, !n.isValid()) return oi.trivialTimedOut(r, i);
        let g = -Math.min(a, i.length + a % 2), y = Math.min(a, r.length + a % 2);
        for (l = g; l <= y; l += 2) {
          let S = l === y ? -1 : o.get(l + 1), C = l === g ? -1 : o.get(l - 1) + 1, w = Math.min(Math.max(S, C), r.length), A = w - l;
          if (w > r.length || A > i.length) continue;
          let T = s(w, A);
          o.set(l, T);
          let I = w === S ? u.get(l + 1) : u.get(l - 1);
          if (u.set(l, T !== w ? new gf(I, w, A, T - w) : I), o.get(l) === r.length && o.get(l) - l === i.length)
            break e;
        }
      }
      let c = u.get(l), f = [], p = r.length, m = i.length;
      for (; ; ) {
        let g = c ? c.x + c.length : 0, y = c ? c.y + c.length : 0;
        if ((g !== p || y !== m) && f.push(new Lt(new Oe(g, p), new Oe(y, m))), !c) break;
        p = c.x, m = c.y, c = c.prev;
      }
      return f.reverse(), new oi(f, !1);
    }
  }, gf = class {
    constructor(e, t, n, r) {
      this.prev = e, this.x = t, this.y = n, this.length = r;
    }
  }, l5 = class {
    constructor() {
      this.positiveArr = new Int32Array(10), this.negativeArr = new Int32Array(10);
    }
    get(e) {
      return e < 0 ? (e = -e - 1, this.negativeArr[e]) : this.positiveArr[e];
    }
    set(e, t) {
      if (e < 0) {
        if (e = -e - 1, e >= this.negativeArr.length) {
          let n = this.negativeArr;
          this.negativeArr = new Int32Array(n.length * 2), this.negativeArr.set(n);
        }
        this.negativeArr[e] = t;
      } else {
        if (e >= this.positiveArr.length) {
          let n = this.positiveArr;
          this.positiveArr = new Int32Array(n.length * 2), this.positiveArr.set(n);
        }
        this.positiveArr[e] = t;
      }
    }
  }, c5 = class {
    constructor() {
      this.positiveArr = [], this.negativeArr = [];
    }
    get(e) {
      return e < 0 ? (e = -e - 1, this.negativeArr[e]) : this.positiveArr[e];
    }
    set(e, t) {
      e < 0 ? (e = -e - 1, this.negativeArr[e] = t) : this.positiveArr[e] = t;
    }
  }, na = class {
    constructor(e, t, n) {
      this.lines = e, this.range = t, this.considerWhitespaceChanges = n, this.elements = [], this.firstElementOffsetByLineIdx = [], this.lineStartOffsets = [], this.trimmedWsLengthsByLineIdx = [], this.firstElementOffsetByLineIdx.push(0);
      for (let r = this.range.startLineNumber; r <= this.range.endLineNumber; r++) {
        let i = e[r - 1], s = 0;
        r === this.range.startLineNumber && this.range.startColumn > 1 && (s = this.range.startColumn - 1, i = i.substring(s)), this.lineStartOffsets.push(s);
        let a = 0;
        if (!n) {
          let u = i.trimStart();
          a = i.length - u.length, i = u.trimEnd();
        }
        this.trimmedWsLengthsByLineIdx.push(a);
        let o = r === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - s - a, i.length) : i.length;
        for (let u = 0; u < o; u++) this.elements.push(i.charCodeAt(u));
        r < this.range.endLineNumber && (this.elements.push(
          10
        ), this.firstElementOffsetByLineIdx.push(this.elements.length));
      }
    }
    toString() {
      return `Slice: "${this.text}"`;
    }
    get text() {
      return this.getText(new Oe(0, this.length));
    }
    getText(e) {
      return this.elements.slice(e.start, e.endExclusive).map((t) => String.fromCharCode(t)).join("");
    }
    getElement(e) {
      return this.elements[e];
    }
    get length() {
      return this.elements.length;
    }
    getBoundaryScore(e) {
      let t = Ef(e > 0 ? this.elements[e - 1] : -1), n = Ef(e < this.elements.length ? this.elements[e] : -1);
      if (t === 7 && n === 8) return 0;
      if (t === 8) return 150;
      let r = 0;
      return t !== n && (r += 10, t === 0 && n === 1 && (r += 1)), r += Df(t), r += Df(n), r;
    }
    translateOffset(e, t = "right") {
      let n = Ui(this.firstElementOffsetByLineIdx, (i) => i <= e), r = e - this.firstElementOffsetByLineIdx[n];
      return new Ue(
        this.range.startLineNumber + n,
        1 + this.lineStartOffsets[n] + r + (r === 0 && t === "left" ? 0 : this.trimmedWsLengthsByLineIdx[n])
      );
    }
    translateRange(e) {
      let t = this.translateOffset(e.start, "right"), n = this.translateOffset(e.endExclusive, "left");
      return n.isBefore(t) ? ve.fromPositions(n, n) : ve.fromPositions(t, n);
    }
    findWordContaining(e) {
      if (e < 0 || e >= this.elements.length || !mu(this.elements[e])) return;
      let t = e;
      for (; t > 0 && mu(this.elements[t - 1]); ) t--;
      let n = e;
      for (; n < this.elements.length && mu(this.elements[n]); ) n++;
      return new Oe(t, n);
    }
    countLinesIn(e) {
      return this.translateOffset(e.endExclusive).lineNumber - this.translateOffset(e.start).lineNumber;
    }
    isStronglyEqual(e, t) {
      return this.elements[e] === this.elements[t];
    }
    extendToFullLines(e) {
      let t = ii(this.firstElementOffsetByLineIdx, (r) => r <= e.start) ?? 0, n = z4(this.firstElementOffsetByLineIdx, (r) => e.endExclusive <= r) ?? this.elements.length;
      return new Oe(t, n);
    }
  };
  function mu(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90 || e >= 48 && e <= 57;
  }
  var d5 = { 0: 0, 1: 0, 2: 0, 3: 10, 4: 2, 5: 30, 6: 3, 7: 10, 8: 10 };
  function Df(e) {
    return d5[e];
  }
  function Ef(e) {
    return e === 10 ? 8 : e === 13 ? 7 : pu(e) ? 6 : e >= 97 && e <= 122 ? 0 : e >= 65 && e <= 90 ? 1 : e >= 48 && e <= 57 ? 2 : e === -1 ? 3 : e === 44 || e === 59 ? 5 : 4;
  }
  function f5(e, t, n, r, i, s) {
    let { moves: a, excludedChanges: o } = p5(e, t, n, s);
    if (!s.isValid()) return [];
    let u = e.filter((c) => !o.has(c)), l = m5(u, r, i, t, n, s);
    return s5(a, l), a = g5(a), a = a.filter((c) => {
      let f = c.original.toOffsetRange().slice(t).map((p) => p.trim());
      return f.join(`
`).length >= 15 && h5(f, (p) => p.length >= 2) >= 2;
    }), a = D5(e, a), a;
  }
  function h5(e, t) {
    let n = 0;
    for (let r of e) t(r) && n++;
    return n;
  }
  function p5(e, t, n, r) {
    let i = [], s = e.filter((u) => u.modified.isEmpty && u.original.length >= 3).map((u) => new pf(u.original, t, u)), a = new Set(
      e.filter((u) => u.original.isEmpty && u.modified.length >= 3).map((u) => new pf(u.modified, n, u))
    ), o = /* @__PURE__ */ new Set();
    for (let u of s) {
      let l = -1, c;
      for (let f of a) {
        let p = u.computeSimilarity(f);
        p > l && (l = p, c = f);
      }
      if (l > 0.9 && c && (a.delete(c), i.push(new si(u.range, c.range)), o.add(u.source), o.add(c.source)), !r.isValid())
        return { moves: i, excludedChanges: o };
    }
    return { moves: i, excludedChanges: o };
  }
  function m5(e, t, n, r, i, s) {
    let a = [], o = new k4();
    for (let p of e)
      for (let m = p.original.startLineNumber; m < p.original.endLineNumberExclusive - 2; m++) {
        let g = `${t[m - 1]}:${t[m + 1 - 1]}:${t[m + 2 - 1]}`;
        o.add(g, { range: new _e(m, m + 3) });
      }
    let u = [];
    e.sort(ea((p) => p.modified.startLineNumber, ta));
    for (let p of e) {
      let m = [];
      for (let g = p.modified.startLineNumber; g < p.modified.endLineNumberExclusive - 2; g++) {
        let y = `${n[g - 1]}:${n[g + 1 - 1]}:${n[g + 2 - 1]}`, S = new _e(g, g + 3), C = [];
        o.forEach(y, ({ range: w }) => {
          for (let T of m)
            if (T.originalLineRange.endLineNumberExclusive + 1 === w.endLineNumberExclusive && T.modifiedLineRange.endLineNumberExclusive + 1 === S.endLineNumberExclusive) {
              T.originalLineRange = new _e(
                T.originalLineRange.startLineNumber,
                w.endLineNumberExclusive
              ), T.modifiedLineRange = new _e(
                T.modifiedLineRange.startLineNumber,
                S.endLineNumberExclusive
              ), C.push(T);
              return;
            }
          let A = { modifiedLineRange: S, originalLineRange: w };
          u.push(A), C.push(A);
        }), m = C;
      }
      if (!s.isValid()) return [];
    }
    u.sort(a5(ea((p) => p.modifiedLineRange.length, ta)));
    let l = new Qs(), c = new Qs();
    for (let p of u) {
      let m = p.modifiedLineRange.startLineNumber - p.originalLineRange.startLineNumber, g = l.subtractFrom(p.modifiedLineRange), y = c.subtractFrom(p.originalLineRange).getWithDelta(m), S = g.getIntersection(y);
      for (let C of S.ranges) {
        if (C.length < 3) continue;
        let w = C, A = C.delta(-m);
        a.push(new si(A, w)), l.addRange(w), c.addRange(A);
      }
    }
    a.sort(ea((p) => p.original.startLineNumber, ta));
    let f = new lf(e);
    for (let p = 0; p < a.length; p++) {
      let m = a[p], g = f.findLastMonotonous((O) => O.original.startLineNumber <= m.original.startLineNumber), y = ii(e, (O) => O.modified.startLineNumber <= m.modified.startLineNumber), S = Math.max(
        m.original.startLineNumber - g.original.startLineNumber,
        m.modified.startLineNumber - y.modified.startLineNumber
      ), C = f.findLastMonotonous(
        (O) => O.original.startLineNumber < m.original.endLineNumberExclusive
      ), w = ii(e, (O) => O.modified.startLineNumber < m.modified.endLineNumberExclusive), A = Math.max(
        C.original.endLineNumberExclusive - m.original.endLineNumberExclusive,
        w.modified.endLineNumberExclusive - m.modified.endLineNumberExclusive
      ), T;
      for (T = 0; T < S; T++) {
        let O = m.original.startLineNumber - T - 1, k = m.modified.startLineNumber - T - 1;
        if (O > r.length || k > i.length || l.contains(k) || c.contains(O) || !yf(r[O - 1], i[k - 1], s))
          break;
      }
      T > 0 && (c.addRange(new _e(m.original.startLineNumber - T, m.original.startLineNumber)), l.addRange(new _e(m.modified.startLineNumber - T, m.modified.startLineNumber)));
      let I;
      for (I = 0; I < A; I++) {
        let O = m.original.endLineNumberExclusive + I, k = m.modified.endLineNumberExclusive + I;
        if (O > r.length || k > i.length || l.contains(k) || c.contains(O) || !yf(r[O - 1], i[k - 1], s))
          break;
      }
      I > 0 && (c.addRange(
        new _e(m.original.endLineNumberExclusive, m.original.endLineNumberExclusive + I)
      ), l.addRange(
        new _e(m.modified.endLineNumberExclusive, m.modified.endLineNumberExclusive + I)
      )), (T > 0 || I > 0) && (a[p] = new si(
        new _e(m.original.startLineNumber - T, m.original.endLineNumberExclusive + I),
        new _e(m.modified.startLineNumber - T, m.modified.endLineNumberExclusive + I)
      ));
    }
    return a;
  }
  function yf(e, t, n) {
    if (e.trim() === t.trim()) return !0;
    if (e.length > 300 && t.length > 300) return !1;
    let r = new mf().compute(
      new na([e], new ve(1, 1, 1, e.length), !1),
      new na([t], new ve(1, 1, 1, t.length), !1),
      n
    ), i = 0, s = Lt.invert(r.diffs, e.length);
    for (let u of s)
      u.seq1Range.forEach((l) => {
        pu(e.charCodeAt(l)) || i++;
      });
    function a(u) {
      let l = 0;
      for (let c = 0; c < e.length; c++) pu(u.charCodeAt(c)) || l++;
      return l;
    }
    let o = a(e.length > t.length ? e : t);
    return i / o > 0.6 && o > 10;
  }
  function g5(e) {
    if (e.length === 0) return e;
    e.sort(ea((n) => n.original.startLineNumber, ta));
    let t = [e[0]];
    for (let n = 1; n < e.length; n++) {
      let r = t[t.length - 1], i = e[n], s = i.original.startLineNumber - r.original.endLineNumberExclusive, a = i.modified.startLineNumber - r.modified.endLineNumberExclusive;
      if (s >= 0 && a >= 0 && s + a <= 2) {
        t[t.length - 1] = r.join(i);
        continue;
      }
      t.push(i);
    }
    return t;
  }
  function D5(e, t) {
    let n = new lf(e);
    return t = t.filter((r) => {
      let i = n.findLastMonotonous(
        (a) => a.original.startLineNumber < r.original.endLineNumberExclusive
      ) || new si(new _e(1, 1), new _e(1, 1)), s = ii(e, (a) => a.modified.startLineNumber < r.modified.endLineNumberExclusive);
      return i !== s;
    }), t;
  }
  function bf(e, t, n) {
    let r = n;
    return r = vf(e, t, r), r = vf(e, t, r), r = E5(e, t, r), r;
  }
  function vf(e, t, n) {
    if (n.length === 0) return n;
    let r = [];
    r.push(n[0]);
    for (let s = 1; s < n.length; s++) {
      let a = r[r.length - 1], o = n[s];
      if (o.seq1Range.isEmpty || o.seq2Range.isEmpty) {
        let u = o.seq1Range.start - a.seq1Range.endExclusive, l;
        for (l = 1; l <= u && !(e.getElement(o.seq1Range.start - l) !== e.getElement(o.seq1Range.endExclusive - l) || t.getElement(o.seq2Range.start - l) !== t.getElement(o.seq2Range.endExclusive - l)); l++) ;
        if (l--, l === u) {
          r[r.length - 1] = new Lt(
            new Oe(a.seq1Range.start, o.seq1Range.endExclusive - u),
            new Oe(a.seq2Range.start, o.seq2Range.endExclusive - u)
          );
          continue;
        }
        o = o.delta(-l);
      }
      r.push(o);
    }
    let i = [];
    for (let s = 0; s < r.length - 1; s++) {
      let a = r[s + 1], o = r[s];
      if (o.seq1Range.isEmpty || o.seq2Range.isEmpty) {
        let u = a.seq1Range.start - o.seq1Range.endExclusive, l;
        for (l = 0; l < u && !(!e.isStronglyEqual(o.seq1Range.start + l, o.seq1Range.endExclusive + l) || !t.isStronglyEqual(o.seq2Range.start + l, o.seq2Range.endExclusive + l)); l++) ;
        if (l === u) {
          r[s + 1] = new Lt(
            new Oe(o.seq1Range.start + u, a.seq1Range.endExclusive),
            new Oe(o.seq2Range.start + u, a.seq2Range.endExclusive)
          );
          continue;
        }
        l > 0 && (o = o.delta(l));
      }
      i.push(o);
    }
    return r.length > 0 && i.push(r[r.length - 1]), i;
  }
  function E5(e, t, n) {
    if (!e.getBoundaryScore || !t.getBoundaryScore) return n;
    for (let r = 0; r < n.length; r++) {
      let i = r > 0 ? n[r - 1] : void 0, s = n[r], a = r + 1 < n.length ? n[r + 1] : void 0, o = new Oe(i ? i.seq1Range.endExclusive + 1 : 0, a ? a.seq1Range.start - 1 : e.length), u = new Oe(i ? i.seq2Range.endExclusive + 1 : 0, a ? a.seq2Range.start - 1 : t.length);
      s.seq1Range.isEmpty ? n[r] = _f(s, e, t, o, u) : s.seq2Range.isEmpty && (n[r] = _f(s.swap(), t, e, u, o).swap());
    }
    return n;
  }
  function _f(e, t, n, r, i) {
    let s = 1;
    for (; e.seq1Range.start - s >= r.start && e.seq2Range.start - s >= i.start && n.isStronglyEqual(e.seq2Range.start - s, e.seq2Range.endExclusive - s) && s < 100; )
      s++;
    s--;
    let a = 0;
    for (; e.seq1Range.start + a < r.endExclusive && e.seq2Range.endExclusive + a < i.endExclusive && n.isStronglyEqual(e.seq2Range.start + a, e.seq2Range.endExclusive + a) && a < 100; )
      a++;
    if (s === 0 && a === 0) return e;
    let o = 0, u = -1;
    for (let l = -s; l <= a; l++) {
      let c = e.seq2Range.start + l, f = e.seq2Range.endExclusive + l, p = e.seq1Range.start + l, m = t.getBoundaryScore(p) + n.getBoundaryScore(c) + n.getBoundaryScore(f);
      m > u && (u = m, o = l);
    }
    return e.delta(o);
  }
  function y5(e, t, n) {
    let r = [];
    for (let i of n) {
      let s = r[r.length - 1];
      if (!s) {
        r.push(i);
        continue;
      }
      i.seq1Range.start - s.seq1Range.endExclusive <= 2 || i.seq2Range.start - s.seq2Range.endExclusive <= 2 ? r[r.length - 1] = new Lt(s.seq1Range.join(i.seq1Range), s.seq2Range.join(i.seq2Range)) : r.push(i);
    }
    return r;
  }
  function b5(e, t, n) {
    let r = Lt.invert(n, e.length), i = [], s = new br(0, 0);
    function a(o, u) {
      if (o.offset1 < s.offset1 || o.offset2 < s.offset2) return;
      let l = e.findWordContaining(o.offset1), c = t.findWordContaining(o.offset2);
      if (!l || !c) return;
      let f = new Lt(l, c), p = f.intersect(u), m = p.seq1Range.length, g = p.seq2Range.length;
      for (; r.length > 0; ) {
        let y = r[0];
        if (!(y.seq1Range.intersects(f.seq1Range) || y.seq2Range.intersects(f.seq2Range))) break;
        let S = e.findWordContaining(y.seq1Range.start), C = t.findWordContaining(y.seq2Range.start), w = new Lt(S, C), A = w.intersect(y);
        if (m += A.seq1Range.length, g += A.seq2Range.length, f = f.join(w), f.seq1Range.endExclusive >= y.seq1Range.endExclusive)
          r.shift();
        else break;
      }
      m + g < (f.seq1Range.length + f.seq2Range.length) * 2 / 3 && i.push(f), s = f.getEndExclusives();
    }
    for (; r.length > 0; ) {
      let o = r.shift();
      o.seq1Range.isEmpty || (a(o.getStarts(), o), a(o.getEndExclusives().delta(-1), o));
    }
    return v5(n, i);
  }
  function v5(e, t) {
    let n = [];
    for (; e.length > 0 || t.length > 0; ) {
      let r = e[0], i = t[0], s;
      r && (!i || r.seq1Range.start < i.seq1Range.start) ? s = e.shift() : s = t.shift(), n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= s.seq1Range.start ? n[n.length - 1] = n[n.length - 1].join(s) : n.push(s);
    }
    return n;
  }
  function _5(e, t, n) {
    let r = n;
    if (r.length === 0) return r;
    let i = 0, s;
    do {
      s = !1;
      let a = [r[0]];
      for (let o = 1; o < r.length; o++) {
        let u = function(f, p) {
          let m = new Oe(c.seq1Range.endExclusive, l.seq1Range.start);
          return e.getText(m).replace(/\s/g, "").length <= 4 && (f.seq1Range.length + f.seq2Range.length > 5 || p.seq1Range.length + p.seq2Range.length > 5);
        }, l = r[o], c = a[a.length - 1];
        u(c, l) ? (s = !0, a[a.length - 1] = a[a.length - 1].join(l)) : a.push(l);
      }
      r = a;
    } while (i++ < 10 && s);
    return r;
  }
  function N5(e, t, n) {
    let r = n;
    if (r.length === 0) return r;
    let i = 0, s;
    do {
      s = !1;
      let o = [r[0]];
      for (let u = 1; u < r.length; u++) {
        let l = function(p, m) {
          let g = new Oe(f.seq1Range.endExclusive, c.seq1Range.start);
          if (e.countLinesIn(g) > 5 || g.length > 500) return !1;
          let y = e.getText(g).trim();
          if (y.length > 20 || y.split(/\r\n|\r|\n/).length > 1) return !1;
          let S = e.countLinesIn(p.seq1Range), C = p.seq1Range.length, w = t.countLinesIn(p.seq2Range), A = p.seq2Range.length, T = e.countLinesIn(m.seq1Range), I = m.seq1Range.length, O = t.countLinesIn(m.seq2Range), k = m.seq2Range.length, X = 2 * 40 + 50;
          function F(j) {
            return Math.min(j, X);
          }
          return Math.pow(Math.pow(F(S * 40 + C), 1.5) + Math.pow(F(w * 40 + A), 1.5), 1.5) + Math.pow(Math.pow(F(T * 40 + I), 1.5) + Math.pow(F(O * 40 + k), 1.5), 1.5) > (X ** 1.5) ** 1.5 * 1.3;
        }, c = r[u], f = o[o.length - 1];
        l(f, c) ? (s = !0, o[o.length - 1] = o[o.length - 1].join(c)) : o.push(c);
      }
      r = o;
    } while (i++ < 10 && s);
    let a = [];
    return i5(r, (o, u, l) => {
      let c = u;
      function f(C) {
        return C.length > 0 && C.trim().length <= 3 && u.seq1Range.length + u.seq2Range.length > 100;
      }
      let p = e.extendToFullLines(u.seq1Range), m = e.getText(new Oe(p.start, u.seq1Range.start));
      f(m) && (c = c.deltaStart(-m.length));
      let g = e.getText(new Oe(u.seq1Range.endExclusive, p.endExclusive));
      f(g) && (c = c.deltaEnd(g.length));
      let y = Lt.fromOffsetPairs(o ? o.getEndExclusives() : br.zero, l ? l.getStarts() : br.max), S = c.intersect(y);
      a.length > 0 && S.getStarts().equals(a[a.length - 1].getEndExclusives()) ? a[a.length - 1] = a[a.length - 1].join(S) : a.push(S);
    }), a;
  }
  var Nf = class {
    constructor(e, t) {
      this.trimmedHash = e, this.lines = t;
    }
    getElement(e) {
      return this.trimmedHash[e];
    }
    get length() {
      return this.trimmedHash.length;
    }
    getBoundaryScore(e) {
      let t = e === 0 ? 0 : Cf(this.lines[e - 1]), n = e === this.lines.length ? 0 : Cf(this.lines[e]);
      return 1e3 - (t + n);
    }
    getText(e) {
      return this.lines.slice(e.start, e.endExclusive).join(`
`);
    }
    isStronglyEqual(e, t) {
      return this.lines[e] === this.lines[t];
    }
  };
  function Cf(e) {
    let t = 0;
    for (; t < e.length && (e.charCodeAt(t) === 32 || e.charCodeAt(t) === 9); ) t++;
    return t;
  }
  var C5 = class {
    constructor() {
      this.dynamicProgrammingDiffing = new u5(), this.myersDiffingAlgorithm = new mf();
    }
    computeDiff(e, t, n) {
      if (e.length <= 1 && t5(e, t, (T, I) => T === I)) return new Xs([], [], !1);
      if (e.length === 1 && e[0].length === 0 || t.length === 1 && t[0].length === 0)
        return new Xs(
          [
            new ji(new _e(1, e.length + 1), new _e(1, t.length + 1), [
              new On(
                new ve(1, 1, e.length, e[e.length - 1].length + 1),
                new ve(1, 1, t.length, t[t.length - 1].length + 1)
              )
            ])
          ],
          [],
          !1
        );
      let r = n.maxComputationTimeMs === 0 ? fu.instance : new o5(n.maxComputationTimeMs), i = !n.ignoreTrimWhitespace, s = /* @__PURE__ */ new Map();
      function a(T) {
        let I = s.get(T);
        return I === void 0 && (I = s.size, s.set(T, I)), I;
      }
      let o = e.map((T) => a(T.trim())), u = t.map((T) => a(T.trim())), l = new Nf(o, e), c = new Nf(u, t), f = l.length + c.length < 1700 ? this.dynamicProgrammingDiffing.compute(
        l,
        c,
        r,
        (T, I) => e[T] === t[I] ? t[I].length === 0 ? 0.1 : 1 + Math.log(1 + t[I].length) : 0.99
      ) : this.myersDiffingAlgorithm.compute(l, c, r), p = f.diffs, m = f.hitTimeout;
      p = bf(l, c, p), p = _5(l, c, p);
      let g = [], y = (T) => {
        if (i)
          for (let I = 0; I < T; I++) {
            let O = S + I, k = C + I;
            if (e[O] !== t[k]) {
              let X = this.refineDiff(e, t, new Lt(new Oe(O, O + 1), new Oe(k, k + 1)), r, i);
              for (let F of X.mappings) g.push(F);
              X.hitTimeout && (m = !0);
            }
          }
      }, S = 0, C = 0;
      for (let T of p) {
        Js(() => T.seq1Range.start - S === T.seq2Range.start - C);
        let I = T.seq1Range.start - S;
        y(I), S = T.seq1Range.endExclusive, C = T.seq2Range.endExclusive;
        let O = this.refineDiff(e, t, T, r, i);
        O.hitTimeout && (m = !0);
        for (let k of O.mappings) g.push(k);
      }
      y(e.length - S);
      let w = Tf(g, e, t), A = [];
      return n.computeMoves && (A = this.computeMoves(w, e, t, o, u, r, i)), Js(() => {
        function T(O, k) {
          if (O.lineNumber < 1 || O.lineNumber > k.length) return !1;
          let X = k[O.lineNumber - 1];
          return !(O.column < 1 || O.column > X.length + 1);
        }
        function I(O, k) {
          return !(O.startLineNumber < 1 || O.startLineNumber > k.length + 1 || O.endLineNumberExclusive < 1 || O.endLineNumberExclusive > k.length + 1);
        }
        for (let O of w) {
          if (!O.innerChanges) return !1;
          for (let k of O.innerChanges)
            if (!(T(k.modifiedRange.getStartPosition(), t) && T(k.modifiedRange.getEndPosition(), t) && T(k.originalRange.getStartPosition(), e) && T(k.originalRange.getEndPosition(), e)))
              return !1;
          if (!I(O.modified, t) || !I(O.original, e)) return !1;
        }
        return !0;
      }), new Xs(w, A, m);
    }
    computeMoves(e, t, n, r, i, s, a) {
      return f5(e, t, n, r, i, s).map((o) => {
        let u = this.refineDiff(
          t,
          n,
          new Lt(o.original.toOffsetRange(), o.modified.toOffsetRange()),
          s,
          a
        ), l = Tf(u.mappings, t, n, !0);
        return new W4(o, l);
      });
    }
    refineDiff(e, t, n, r, i) {
      let s = S5(n).toRangeMapping2(e, t), a = new na(e, s.originalRange, i), o = new na(t, s.modifiedRange, i), u = a.length + o.length < 500 ? this.dynamicProgrammingDiffing.compute(a, o, r) : this.myersDiffingAlgorithm.compute(a, o, r), l = u.diffs;
      return l = bf(a, o, l), l = b5(a, o, l), l = y5(a, o, l), l = N5(a, o, l), { mappings: l.map((f) => new On(a.translateRange(f.seq1Range), o.translateRange(f.seq2Range))), hitTimeout: u.hitTimeout };
    }
  };
  function Tf(e, t, n, r = !1) {
    let i = [];
    for (let s of n5(
      e.map((a) => T5(a, t, n)),
      (a, o) => a.original.overlapOrTouch(o.original) || a.modified.overlapOrTouch(o.modified)
    )) {
      let a = s[0], o = s[s.length - 1];
      i.push(
        new ji(
          a.original.join(o.original),
          a.modified.join(o.modified),
          s.map((u) => u.innerChanges[0])
        )
      );
    }
    return Js(
      () => !r && i.length > 0 && (i[0].modified.startLineNumber !== i[0].original.startLineNumber || n.length - i[i.length - 1].modified.endLineNumberExclusive !== t.length - i[i.length - 1].original.endLineNumberExclusive) ? !1 : nf(
        i,
        (s, a) => a.original.startLineNumber - s.original.endLineNumberExclusive === a.modified.startLineNumber - s.modified.endLineNumberExclusive && s.original.endLineNumberExclusive < a.original.startLineNumber && s.modified.endLineNumberExclusive < a.modified.startLineNumber
      )
    ), i;
  }
  function T5(e, t, n) {
    let r = 0, i = 0;
    e.modifiedRange.endColumn === 1 && e.originalRange.endColumn === 1 && e.originalRange.startLineNumber + r <= e.originalRange.endLineNumber && e.modifiedRange.startLineNumber + r <= e.modifiedRange.endLineNumber && (i = -1), e.modifiedRange.startColumn - 1 >= n[e.modifiedRange.startLineNumber - 1].length && e.originalRange.startColumn - 1 >= t[e.originalRange.startLineNumber - 1].length && e.originalRange.startLineNumber <= e.originalRange.endLineNumber + i && e.modifiedRange.startLineNumber <= e.modifiedRange.endLineNumber + i && (r = 1);
    let s = new _e(e.originalRange.startLineNumber + r, e.originalRange.endLineNumber + 1 + i), a = new _e(e.modifiedRange.startLineNumber + r, e.modifiedRange.endLineNumber + 1 + i);
    return new ji(s, a, [e]);
  }
  function S5(e) {
    return new si(
      new _e(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1),
      new _e(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1)
    );
  }
  var Sf = { getLegacy: () => new X4(), getDefault: () => new C5() };
  function rr(e, t) {
    let n = Math.pow(10, t);
    return Math.round(e * n) / n;
  }
  var it = class {
    constructor(e, t, n, r = 1) {
      this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, e)) | 0, this.g = Math.min(255, Math.max(0, t)) | 0, this.b = Math.min(255, Math.max(0, n)) | 0, this.a = rr(Math.max(Math.min(1, r), 0), 3);
    }
    static equals(e, t) {
      return e.r === t.r && e.g === t.g && e.b === t.b && e.a === t.a;
    }
  }, vr = class cs {
    constructor(t, n, r, i) {
      this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = rr(Math.max(Math.min(1, n), 0), 3), this.l = rr(Math.max(Math.min(1, r), 0), 3), this.a = rr(Math.max(Math.min(1, i), 0), 3);
    }
    static equals(t, n) {
      return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a;
    }
    static fromRGBA(t) {
      let n = t.r / 255, r = t.g / 255, i = t.b / 255, s = t.a, a = Math.max(n, r, i), o = Math.min(n, r, i), u = 0, l = 0, c = (o + a) / 2, f = a - o;
      if (f > 0) {
        switch (l = Math.min(c <= 0.5 ? f / (2 * c) : f / (2 - 2 * c), 1), a) {
          case n:
            u = (r - i) / f + (r < i ? 6 : 0);
            break;
          case r:
            u = (i - n) / f + 2;
            break;
          case i:
            u = (n - r) / f + 4;
            break;
        }
        u *= 60, u = Math.round(u);
      }
      return new cs(u, l, c, s);
    }
    static _hue2rgb(t, n, r) {
      return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (n - t) * 6 * r : r < 1 / 2 ? n : r < 2 / 3 ? t + (n - t) * (2 / 3 - r) * 6 : t;
    }
    static toRGBA(t) {
      let n = t.h / 360, { s: r, l: i, a: s } = t, a, o, u;
      if (r === 0) a = o = u = i;
      else {
        let l = i < 0.5 ? i * (1 + r) : i + r - i * r, c = 2 * i - l;
        a = cs._hue2rgb(c, l, n + 1 / 3), o = cs._hue2rgb(c, l, n), u = cs._hue2rgb(c, l, n - 1 / 3);
      }
      return new it(Math.round(a * 255), Math.round(o * 255), Math.round(u * 255), s);
    }
  }, ra = class kp {
    constructor(t, n, r, i) {
      this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = rr(Math.max(Math.min(1, n), 0), 3), this.v = rr(Math.max(Math.min(1, r), 0), 3), this.a = rr(Math.max(Math.min(1, i), 0), 3);
    }
    static equals(t, n) {
      return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
    }
    static fromRGBA(t) {
      let n = t.r / 255, r = t.g / 255, i = t.b / 255, s = Math.max(n, r, i), a = Math.min(n, r, i), o = s - a, u = s === 0 ? 0 : o / s, l;
      return o === 0 ? l = 0 : s === n ? l = ((r - i) / o % 6 + 6) % 6 : s === r ? l = (i - n) / o + 2 : l = (n - r) / o + 4, new kp(Math.round(l * 60), u, s, t.a);
    }
    static toRGBA(t) {
      let { h: n, s: r, v: i, a: s } = t, a = i * r, o = a * (1 - Math.abs(n / 60 % 2 - 1)), u = i - a, [l, c, f] = [0, 0, 0];
      return n < 60 ? (l = a, c = o) : n < 120 ? (l = o, c = a) : n < 180 ? (c = a, f = o) : n < 240 ? (c = o, f = a) : n < 300 ? (l = o, f = a) : n <= 360 && (l = a, f = o), l = Math.round((l + u) * 255), c = Math.round((c + u) * 255), f = Math.round((f + u) * 255), new it(l, c, f, s);
    }
  }, gu = (Se = class {
    static fromHex(t) {
      return Se.Format.CSS.parseHex(t) || Se.red;
    }
    static equals(t, n) {
      return !t && !n ? !0 : !t || !n ? !1 : t.equals(n);
    }
    get hsla() {
      return this._hsla ? this._hsla : vr.fromRGBA(this.rgba);
    }
    get hsva() {
      return this._hsva ? this._hsva : ra.fromRGBA(this.rgba);
    }
    constructor(t) {
      if (t)
        if (t instanceof it) this.rgba = t;
        else if (t instanceof vr) this._hsla = t, this.rgba = vr.toRGBA(t);
        else if (t instanceof ra) this._hsva = t, this.rgba = ra.toRGBA(t);
        else throw new Error("Invalid color ctor argument");
      else throw new Error("Color needs a value");
    }
    equals(t) {
      return !!t && it.equals(this.rgba, t.rgba) && vr.equals(this.hsla, t.hsla) && ra.equals(this.hsva, t.hsva);
    }
    getRelativeLuminance() {
      let t = Se._relativeLuminanceForComponent(this.rgba.r), n = Se._relativeLuminanceForComponent(this.rgba.g), r = Se._relativeLuminanceForComponent(this.rgba.b), i = 0.2126 * t + 0.7152 * n + 0.0722 * r;
      return rr(i, 4);
    }
    static _relativeLuminanceForComponent(t) {
      let n = t / 255;
      return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
    }
    isLighter() {
      return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128;
    }
    isLighterThan(t) {
      let n = this.getRelativeLuminance(), r = t.getRelativeLuminance();
      return n > r;
    }
    isDarkerThan(t) {
      let n = this.getRelativeLuminance(), r = t.getRelativeLuminance();
      return n < r;
    }
    lighten(t) {
      return new Se(new vr(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
    }
    darken(t) {
      return new Se(new vr(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
    }
    transparent(t) {
      let { r: n, g: r, b: i, a: s } = this.rgba;
      return new Se(new it(n, r, i, s * t));
    }
    isTransparent() {
      return this.rgba.a === 0;
    }
    isOpaque() {
      return this.rgba.a === 1;
    }
    opposite() {
      return new Se(new it(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
    }
    makeOpaque(t) {
      if (this.isOpaque() || t.rgba.a !== 1) return this;
      let { r: n, g: r, b: i, a: s } = this.rgba;
      return new Se(
        new it(
          t.rgba.r - s * (t.rgba.r - n),
          t.rgba.g - s * (t.rgba.g - r),
          t.rgba.b - s * (t.rgba.b - i),
          1
        )
      );
    }
    toString() {
      return this._toString || (this._toString = Se.Format.CSS.format(this)), this._toString;
    }
    static getLighterColor(t, n, r) {
      if (t.isLighterThan(n)) return t;
      r = r || 0.5;
      let i = t.getRelativeLuminance(), s = n.getRelativeLuminance();
      return r = r * (s - i) / s, t.lighten(r);
    }
    static getDarkerColor(t, n, r) {
      if (t.isDarkerThan(n)) return t;
      r = r || 0.5;
      let i = t.getRelativeLuminance(), s = n.getRelativeLuminance();
      return r = r * (i - s) / i, t.darken(r);
    }
  }, Se.white = new Se(new it(255, 255, 255, 1)), Se.black = new Se(new it(0, 0, 0, 1)), Se.red = new Se(new it(255, 0, 0, 1)), Se.blue = new Se(new it(0, 0, 255, 1)), Se.green = new Se(new it(0, 255, 0, 1)), Se.cyan = new Se(new it(0, 255, 255, 1)), Se.lightgrey = new Se(new it(211, 211, 211, 1)), Se.transparent = new Se(new it(0, 0, 0, 0)), Se);
  (function(e) {
    (function(t) {
      (function(n) {
        function r(m) {
          return m.rgba.a === 1 ? `rgb(${m.rgba.r}, ${m.rgba.g}, ${m.rgba.b})` : e.Format.CSS.formatRGBA(m);
        }
        n.formatRGB = r;
        function i(m) {
          return `rgba(${m.rgba.r}, ${m.rgba.g}, ${m.rgba.b}, ${+m.rgba.a.toFixed(2)})`;
        }
        n.formatRGBA = i;
        function s(m) {
          return m.hsla.a === 1 ? `hsl(${m.hsla.h}, ${(m.hsla.s * 100).toFixed(2)}%, ${(m.hsla.l * 100).toFixed(2)}%)` : e.Format.CSS.formatHSLA(m);
        }
        n.formatHSL = s;
        function a(m) {
          return `hsla(${m.hsla.h}, ${(m.hsla.s * 100).toFixed(2)}%, ${(m.hsla.l * 100).toFixed(
            2
          )}%, ${m.hsla.a.toFixed(2)})`;
        }
        n.formatHSLA = a;
        function o(m) {
          let g = m.toString(16);
          return g.length !== 2 ? "0" + g : g;
        }
        function u(m) {
          return `#${o(m.rgba.r)}${o(m.rgba.g)}${o(m.rgba.b)}`;
        }
        n.formatHex = u;
        function l(m, g = !1) {
          return g && m.rgba.a === 1 ? e.Format.CSS.formatHex(m) : `#${o(m.rgba.r)}${o(m.rgba.g)}${o(m.rgba.b)}${o(Math.round(m.rgba.a * 255))}`;
        }
        n.formatHexA = l;
        function c(m) {
          return m.isOpaque() ? e.Format.CSS.formatHex(m) : e.Format.CSS.formatRGBA(m);
        }
        n.format = c;
        function f(m) {
          let g = m.length;
          if (g === 0 || m.charCodeAt(0) !== 35) return null;
          if (g === 7) {
            let y = 16 * p(m.charCodeAt(1)) + p(m.charCodeAt(2)), S = 16 * p(m.charCodeAt(3)) + p(m.charCodeAt(4)), C = 16 * p(m.charCodeAt(5)) + p(m.charCodeAt(6));
            return new e(new it(y, S, C, 1));
          }
          if (g === 9) {
            let y = 16 * p(m.charCodeAt(1)) + p(m.charCodeAt(2)), S = 16 * p(m.charCodeAt(3)) + p(m.charCodeAt(4)), C = 16 * p(m.charCodeAt(5)) + p(m.charCodeAt(6)), w = 16 * p(m.charCodeAt(7)) + p(m.charCodeAt(8));
            return new e(new it(y, S, C, w / 255));
          }
          if (g === 4) {
            let y = p(m.charCodeAt(1)), S = p(m.charCodeAt(2)), C = p(m.charCodeAt(3));
            return new e(new it(16 * y + y, 16 * S + S, 16 * C + C));
          }
          if (g === 5) {
            let y = p(m.charCodeAt(1)), S = p(m.charCodeAt(2)), C = p(m.charCodeAt(3)), w = p(m.charCodeAt(4));
            return new e(new it(16 * y + y, 16 * S + S, 16 * C + C, (16 * w + w) / 255));
          }
          return null;
        }
        n.parseHex = f;
        function p(m) {
          switch (m) {
            case 48:
              return 0;
            case 49:
              return 1;
            case 50:
              return 2;
            case 51:
              return 3;
            case 52:
              return 4;
            case 53:
              return 5;
            case 54:
              return 6;
            case 55:
              return 7;
            case 56:
              return 8;
            case 57:
              return 9;
            case 97:
              return 10;
            case 65:
              return 10;
            case 98:
              return 11;
            case 66:
              return 11;
            case 99:
              return 12;
            case 67:
              return 12;
            case 100:
              return 13;
            case 68:
              return 13;
            case 101:
              return 14;
            case 69:
              return 14;
            case 102:
              return 15;
            case 70:
              return 15;
          }
          return 0;
        }
      })(t.CSS || (t.CSS = {}));
    })(e.Format || (e.Format = {}));
  })(gu);
  function Af(e) {
    let t = [];
    for (let n of e) {
      let r = Number(n);
      (r || r === 0 && n.replace(/\s/g, "") !== "") && t.push(r);
    }
    return t;
  }
  function Du(e, t, n, r) {
    return { red: e / 255, blue: n / 255, green: t / 255, alpha: r };
  }
  function Ki(e, t) {
    let n = t.index, r = t[0].length;
    if (!n) return;
    let i = e.positionAt(n);
    return {
      startLineNumber: i.lineNumber,
      startColumn: i.column,
      endLineNumber: i.lineNumber,
      endColumn: i.column + r
    };
  }
  function A5(e, t) {
    if (!e) return;
    let n = gu.Format.CSS.parseHex(t);
    if (n) return { range: e, color: Du(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a) };
  }
  function Ff(e, t, n) {
    if (!e || t.length !== 1) return;
    let r = t[0].values(), i = Af(r);
    return { range: e, color: Du(i[0], i[1], i[2], n ? i[3] : 1) };
  }
  function wf(e, t, n) {
    if (!e || t.length !== 1) return;
    let r = t[0].values(), i = Af(r), s = new gu(new vr(i[0], i[1] / 100, i[2] / 100, n ? i[3] : 1));
    return { range: e, color: Du(s.rgba.r, s.rgba.g, s.rgba.b, s.rgba.a) };
  }
  function qi(e, t) {
    return typeof e == "string" ? [...e.matchAll(t)] : e.findMatches(t);
  }
  function F5(e) {
    let t = [], n = qi(
      e,
      /\b(rgb|rgba|hsl|hsla)(\([0-9\s,.\%]*\))|(#)([A-Fa-f0-9]{3})\b|(#)([A-Fa-f0-9]{4})\b|(#)([A-Fa-f0-9]{6})\b|(#)([A-Fa-f0-9]{8})\b/gm
    );
    if (n.length > 0)
      for (let r of n) {
        let i = r.filter((u) => u !== void 0), s = i[1], a = i[2];
        if (!a) continue;
        let o;
        if (s === "rgb") {
          let u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
          o = Ff(Ki(e, r), qi(a, u), !1);
        } else if (s === "rgba") {
          let u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
          o = Ff(Ki(e, r), qi(a, u), !0);
        } else if (s === "hsl") {
          let u = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
          o = wf(Ki(e, r), qi(a, u), !1);
        } else if (s === "hsla") {
          let u = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
          o = wf(Ki(e, r), qi(a, u), !0);
        } else s === "#" && (o = A5(Ki(e, r), s + a));
        o && t.push(o);
      }
    return t;
  }
  function w5(e) {
    return !e || typeof e.getValue != "function" || typeof e.positionAt != "function" ? [] : F5(e);
  }
  var If = new RegExp("\\bMARK:\\s*(.*)$", "d"), I5 = /^-+|-+$/g;
  function x5(e, t) {
    var r;
    let n = [];
    if (t.findRegionSectionHeaders && ((r = t.foldingRules) != null && r.markers)) {
      let i = L5(e, t);
      n = n.concat(i);
    }
    if (t.findMarkSectionHeaders) {
      let i = O5(e);
      n = n.concat(i);
    }
    return n;
  }
  function L5(e, t) {
    let n = [], r = e.getLineCount();
    for (let i = 1; i <= r; i++) {
      let s = e.getLineContent(i), a = s.match(t.foldingRules.markers.start);
      if (a) {
        let o = {
          startLineNumber: i,
          startColumn: a[0].length + 1,
          endLineNumber: i,
          endColumn: s.length + 1
        };
        if (o.endColumn > o.startColumn) {
          let u = { range: o, ...xf(s.substring(a[0].length)), shouldBeInComments: !1 };
          (u.text || u.hasSeparatorLine) && n.push(u);
        }
      }
    }
    return n;
  }
  function O5(e) {
    let t = [], n = e.getLineCount();
    for (let r = 1; r <= n; r++) {
      let i = e.getLineContent(r);
      k5(i, r, t);
    }
    return t;
  }
  function k5(e, t, n) {
    If.lastIndex = 0;
    let r = If.exec(e);
    if (r) {
      let i = r.indices[1][0] + 1, s = r.indices[1][1] + 1, a = { startLineNumber: t, startColumn: i, endLineNumber: t, endColumn: s };
      if (a.endColumn > a.startColumn) {
        let o = { range: a, ...xf(r[1]), shouldBeInComments: !0 };
        (o.text || o.hasSeparatorLine) && n.push(o);
      }
    }
  }
  function xf(e) {
    e = e.trim();
    let t = e.startsWith("-");
    return e = e.replace(I5, ""), { text: e, hasSeparatorLine: t };
  }
  var Lf;
  (function(e) {
    async function t(r) {
      let i, s = await Promise.all(
        r.map(
          (a) => a.then(
            (o) => o,
            (o) => {
              i || (i = o);
            }
          )
        )
      );
      if (typeof i < "u") throw i;
      return s;
    }
    e.settled = t;
    function n(r) {
      return new Promise(async (i, s) => {
        try {
          await r(i, s);
        } catch (a) {
          s(a);
        }
      });
    }
    e.withAsyncBody = n;
  })(Lf || (Lf = {})), ct = class {
    static fromArray(t) {
      return new ct((n) => {
        n.emitMany(t);
      });
    }
    static fromPromise(t) {
      return new ct(async (n) => {
        n.emitMany(await t);
      });
    }
    static fromPromises(t) {
      return new ct(async (n) => {
        await Promise.all(t.map(async (r) => n.emitOne(await r)));
      });
    }
    static merge(t) {
      return new ct(async (n) => {
        await Promise.all(
          t.map(async (r) => {
            for await (let i of r) n.emitOne(i);
          })
        );
      });
    }
    constructor(t, n) {
      this._state = 0, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new Kt(), queueMicrotask(async () => {
        let r = {
          emitOne: (i) => this.emitOne(i),
          emitMany: (i) => this.emitMany(i),
          reject: (i) => this.reject(i)
        };
        try {
          await Promise.resolve(t(r)), this.resolve();
        } catch (i) {
          this.reject(i);
        } finally {
          r.emitOne = void 0, r.emitMany = void 0, r.reject = void 0;
        }
      });
    }
    [Symbol.asyncIterator]() {
      let t = 0;
      return {
        next: async () => {
          do {
            if (this._state === 2) throw this._error;
            if (t < this._results.length) return { done: !1, value: this._results[t++] };
            if (this._state === 1) return { done: !0, value: void 0 };
            await Us.toPromise(this._onStateChanged.event);
          } while (!0);
        },
        return: async () => {
          var n;
          return (n = this._onReturn) == null || n.call(this), { done: !0, value: void 0 };
        }
      };
    }
    static map(t, n) {
      return new ct(async (r) => {
        for await (let i of t) r.emitOne(n(i));
      });
    }
    map(t) {
      return ct.map(this, t);
    }
    static filter(t, n) {
      return new ct(async (r) => {
        for await (let i of t) n(i) && r.emitOne(i);
      });
    }
    filter(t) {
      return ct.filter(this, t);
    }
    static coalesce(t) {
      return ct.filter(t, (n) => !!n);
    }
    coalesce() {
      return ct.coalesce(this);
    }
    static async toPromise(t) {
      let n = [];
      for await (let r of t) n.push(r);
      return n;
    }
    toPromise() {
      return ct.toPromise(this);
    }
    emitOne(t) {
      this._state === 0 && (this._results.push(t), this._onStateChanged.fire());
    }
    emitMany(t) {
      this._state === 0 && (this._results = this._results.concat(t), this._onStateChanged.fire());
    }
    resolve() {
      this._state === 0 && (this._state = 1, this._onStateChanged.fire());
    }
    reject(t) {
      this._state === 0 && (this._state = 2, this._error = t, this._onStateChanged.fire());
    }
  }, ct.EMPTY = ct.fromArray([]);
  var R5 = class {
    constructor(e) {
      this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
    }
    insertValues(e, t) {
      e = ri(e);
      let n = this.values, r = this.prefixSum, i = t.length;
      return i === 0 ? !1 : (this.values = new Uint32Array(n.length + i), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + i), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }
    setValue(e, t) {
      return e = ri(e), t = ri(t), this.values[e] === t ? !1 : (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0);
    }
    removeValues(e, t) {
      e = ri(e), t = ri(t);
      let n = this.values, r = this.prefixSum;
      if (e >= n.length) return !1;
      let i = n.length - e;
      return t >= i && (t = i), t === 0 ? !1 : (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }
    getTotalSum() {
      return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
    }
    getPrefixSum(e) {
      return e < 0 ? 0 : (e = ri(e), this._getPrefixSum(e));
    }
    _getPrefixSum(e) {
      if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
      let t = this.prefixSumValidIndex[0] + 1;
      t === 0 && (this.prefixSum[0] = this.values[0], t++), e >= this.values.length && (e = this.values.length - 1);
      for (let n = t; n <= e; n++) this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
      return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e), this.prefixSum[e];
    }
    getIndexOf(e) {
      e = Math.floor(e), this.getTotalSum();
      let t = 0, n = this.values.length - 1, r = 0, i = 0, s = 0;
      for (; t <= n; )
        if (r = t + (n - t) / 2 | 0, i = this.prefixSum[r], s = i - this.values[r], e < s)
          n = r - 1;
        else if (e >= i) t = r + 1;
        else break;
      return new M5(r, e - s);
    }
  }, M5 = class {
    constructor(e, t) {
      this.index = e, this.remainder = t, this._prefixSumIndexOfResultBrand = void 0, this.index = e, this.remainder = t;
    }
  }, B5 = class {
    constructor(e, t, n, r) {
      this._uri = e, this._lines = t, this._eol = n, this._versionId = r, this._lineStarts = null, this._cachedTextValue = null;
    }
    dispose() {
      this._lines.length = 0;
    }
    get version() {
      return this._versionId;
    }
    getText() {
      return this._cachedTextValue === null && (this._cachedTextValue = this._lines.join(this._eol)), this._cachedTextValue;
    }
    onEvents(e) {
      e.eol && e.eol !== this._eol && (this._eol = e.eol, this._lineStarts = null);
      let t = e.changes;
      for (let n of t)
        this._acceptDeleteRange(n.range), this._acceptInsertText(new Ue(n.range.startLineNumber, n.range.startColumn), n.text);
      this._versionId = e.versionId, this._cachedTextValue = null;
    }
    _ensureLineStarts() {
      if (!this._lineStarts) {
        let e = this._eol.length, t = this._lines.length, n = new Uint32Array(t);
        for (let r = 0; r < t; r++) n[r] = this._lines[r].length + e;
        this._lineStarts = new R5(n);
      }
    }
    _setLineText(e, t) {
      this._lines[e] = t, this._lineStarts && this._lineStarts.setValue(e, this._lines[e].length + this._eol.length);
    }
    _acceptDeleteRange(e) {
      if (e.startLineNumber === e.endLineNumber) {
        if (e.startColumn === e.endColumn) return;
        this._setLineText(
          e.startLineNumber - 1,
          this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.startLineNumber - 1].substring(e.endColumn - 1)
        );
        return;
      }
      this._setLineText(
        e.startLineNumber - 1,
        this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)
      ), this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber), this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber);
    }
    _acceptInsertText(e, t) {
      if (t.length === 0) return;
      let n = _g(t);
      if (n.length === 1) {
        this._setLineText(
          e.lineNumber - 1,
          this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1)
        );
        return;
      }
      n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(
        e.lineNumber - 1,
        this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]
      );
      let r = new Uint32Array(n.length - 1);
      for (let i = 1; i < n.length; i++)
        this._lines.splice(e.lineNumber + i - 1, 0, n[i]), r[i - 1] = n[i].length + this._eol.length;
      this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r);
    }
  }, P5 = class {
    constructor() {
      this._models = /* @__PURE__ */ Object.create(null);
    }
    getModel(e) {
      return this._models[e];
    }
    getModels() {
      let e = [];
      return Object.keys(this._models).forEach((t) => e.push(this._models[t])), e;
    }
    $acceptNewModel(e) {
      this._models[e.url] = new V5(yn.parse(e.url), e.lines, e.EOL, e.versionId);
    }
    $acceptModelChanged(e, t) {
      this._models[e] && this._models[e].onEvents(t);
    }
    $acceptRemovedModel(e) {
      this._models[e] && delete this._models[e];
    }
  }, V5 = class extends B5 {
    get uri() {
      return this._uri;
    }
    get eol() {
      return this._eol;
    }
    getValue() {
      return this.getText();
    }
    findMatches(e) {
      let t = [];
      for (let n = 0; n < this._lines.length; n++) {
        let r = this._lines[n], i = this.offsetAt(new Ue(n + 1, 1)), s = r.matchAll(e);
        for (let a of s) (a.index || a.index === 0) && (a.index = a.index + i), t.push(a);
      }
      return t;
    }
    getLinesContent() {
      return this._lines.slice(0);
    }
    getLineCount() {
      return this._lines.length;
    }
    getLineContent(e) {
      return this._lines[e - 1];
    }
    getWordAtPosition(e, t) {
      let n = au(e.column, sf(t), this._lines[e.lineNumber - 1], 0);
      return n ? new ve(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null;
    }
    words(e) {
      let t = this._lines, n = this._wordenize.bind(this), r = 0, i = "", s = 0, a = [];
      return {
        *[Symbol.iterator]() {
          for (; ; )
            if (s < a.length) {
              let o = i.substring(a[s].start, a[s].end);
              s += 1, yield o;
            } else if (r < t.length) i = t[r], a = n(i, e), s = 0, r += 1;
            else break;
        }
      };
    }
    getLineWords(e, t) {
      let n = this._lines[e - 1], r = this._wordenize(n, t), i = [];
      for (let s of r)
        i.push({
          word: n.substring(s.start, s.end),
          startColumn: s.start + 1,
          endColumn: s.end + 1
        });
      return i;
    }
    _wordenize(e, t) {
      let n = [], r;
      for (t.lastIndex = 0; (r = t.exec(e)) && r[0].length !== 0; )
        n.push({ start: r.index, end: r.index + r[0].length });
      return n;
    }
    getValueInRange(e) {
      if (e = this._validateRange(e), e.startLineNumber === e.endLineNumber)
        return this._lines[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1);
      let t = this._eol, n = e.startLineNumber - 1, r = e.endLineNumber - 1, i = [];
      i.push(this._lines[n].substring(e.startColumn - 1));
      for (let s = n + 1; s < r; s++) i.push(this._lines[s]);
      return i.push(this._lines[r].substring(0, e.endColumn - 1)), i.join(t);
    }
    offsetAt(e) {
      return e = this._validatePosition(e), this._ensureLineStarts(), this._lineStarts.getPrefixSum(e.lineNumber - 2) + (e.column - 1);
    }
    positionAt(e) {
      e = Math.floor(e), e = Math.max(0, e), this._ensureLineStarts();
      let t = this._lineStarts.getIndexOf(e), n = this._lines[t.index].length;
      return { lineNumber: 1 + t.index, column: 1 + Math.min(t.remainder, n) };
    }
    _validateRange(e) {
      let t = this._validatePosition({ lineNumber: e.startLineNumber, column: e.startColumn }), n = this._validatePosition({ lineNumber: e.endLineNumber, column: e.endColumn });
      return t.lineNumber !== e.startLineNumber || t.column !== e.startColumn || n.lineNumber !== e.endLineNumber || n.column !== e.endColumn ? {
        startLineNumber: t.lineNumber,
        startColumn: t.column,
        endLineNumber: n.lineNumber,
        endColumn: n.column
      } : e;
    }
    _validatePosition(e) {
      if (!Ue.isIPosition(e)) throw new Error("bad position");
      let { lineNumber: t, column: n } = e, r = !1;
      if (t < 1) t = 1, n = 1, r = !0;
      else if (t > this._lines.length)
        t = this._lines.length, n = this._lines[t - 1].length + 1, r = !0;
      else {
        let i = this._lines[t - 1].length + 1;
        n < 1 ? (n = 1, r = !0) : n > i && (n = i, r = !0);
      }
      return r ? { lineNumber: t, column: n } : e;
    }
  }, $5 = (Vr = class {
    constructor() {
      this._workerTextModelSyncServer = new P5();
    }
    dispose() {
    }
    _getModel(t) {
      return this._workerTextModelSyncServer.getModel(t);
    }
    _getModels() {
      return this._workerTextModelSyncServer.getModels();
    }
    $acceptNewModel(t) {
      this._workerTextModelSyncServer.$acceptNewModel(t);
    }
    $acceptModelChanged(t, n) {
      this._workerTextModelSyncServer.$acceptModelChanged(t, n);
    }
    $acceptRemovedModel(t) {
      this._workerTextModelSyncServer.$acceptRemovedModel(t);
    }
    async $computeUnicodeHighlights(t, n, r) {
      let i = this._getModel(t);
      return i ? G4.computeUnicodeHighlights(i, n, r) : {
        ranges: [],
        hasMore: !1,
        ambiguousCharacterCount: 0,
        invisibleCharacterCount: 0,
        nonBasicAsciiCharacterCount: 0
      };
    }
    async $findSectionHeaders(t, n) {
      let r = this._getModel(t);
      return r ? x5(r, n) : [];
    }
    async $computeDiff(t, n, r, i) {
      let s = this._getModel(t), a = this._getModel(n);
      return !s || !a ? null : ia.computeDiff(s, a, r, i);
    }
    static computeDiff(t, n, r, i) {
      let s = i === "advanced" ? Sf.getDefault() : Sf.getLegacy(), a = t.getLinesContent(), o = n.getLinesContent(), u = s.computeDiff(a, o, r), l = u.changes.length > 0 ? !1 : this._modelsAreIdentical(t, n);
      function c(f) {
        return f.map((p) => {
          var m;
          return [
            p.original.startLineNumber,
            p.original.endLineNumberExclusive,
            p.modified.startLineNumber,
            p.modified.endLineNumberExclusive,
            (m = p.innerChanges) == null ? void 0 : m.map((g) => [
              g.originalRange.startLineNumber,
              g.originalRange.startColumn,
              g.originalRange.endLineNumber,
              g.originalRange.endColumn,
              g.modifiedRange.startLineNumber,
              g.modifiedRange.startColumn,
              g.modifiedRange.endLineNumber,
              g.modifiedRange.endColumn
            ])
          ];
        });
      }
      return {
        identical: l,
        quitEarly: u.hitTimeout,
        changes: c(u.changes),
        moves: u.moves.map((f) => [
          f.lineRangeMapping.original.startLineNumber,
          f.lineRangeMapping.original.endLineNumberExclusive,
          f.lineRangeMapping.modified.startLineNumber,
          f.lineRangeMapping.modified.endLineNumberExclusive,
          c(f.changes)
        ])
      };
    }
    static _modelsAreIdentical(t, n) {
      let r = t.getLineCount(), i = n.getLineCount();
      if (r !== i) return !1;
      for (let s = 1; s <= r; s++) {
        let a = t.getLineContent(s), o = n.getLineContent(s);
        if (a !== o) return !1;
      }
      return !0;
    }
    async $computeMoreMinimalEdits(t, n, r) {
      let i = this._getModel(t);
      if (!i) return n;
      let s = [], a;
      n = n.slice(0).sort((u, l) => {
        if (u.range && l.range) return ve.compareRangesUsingStarts(u.range, l.range);
        let c = u.range ? 0 : 1, f = l.range ? 0 : 1;
        return c - f;
      });
      let o = 0;
      for (let u = 1; u < n.length; u++)
        ve.getEndPosition(n[o].range).equals(ve.getStartPosition(n[u].range)) ? (n[o].range = ve.fromPositions(
          ve.getStartPosition(n[o].range),
          ve.getEndPosition(n[u].range)
        ), n[o].text += n[u].text) : (o++, n[o] = n[u]);
      n.length = o + 1;
      for (let { range: u, text: l, eol: c } of n) {
        if (typeof c == "number" && (a = c), ve.isEmpty(u) && !l) continue;
        let f = i.getValueInRange(u);
        if (l = l.replace(/\r\n|\n|\r/g, i.eol), f === l) continue;
        if (Math.max(l.length, f.length) > ia._diffLimit) {
          s.push({ range: u, text: l });
          continue;
        }
        let p = u4(f, l, r), m = i.offsetAt(ve.lift(u).getStartPosition());
        for (let g of p) {
          let y = i.positionAt(m + g.originalStart), S = i.positionAt(m + g.originalStart + g.originalLength), C = {
            text: l.substr(g.modifiedStart, g.modifiedLength),
            range: {
              startLineNumber: y.lineNumber,
              startColumn: y.column,
              endLineNumber: S.lineNumber,
              endColumn: S.column
            }
          };
          i.getValueInRange(C.range) !== C.text && s.push(C);
        }
      }
      return typeof a == "number" && s.push({
        eol: a,
        text: "",
        range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 }
      }), s;
    }
    async $computeLinks(t) {
      let n = this._getModel(t);
      return n ? m4(n) : null;
    }
    async $computeDefaultDocumentColors(t) {
      let n = this._getModel(t);
      return n ? w5(n) : null;
    }
    async $textualSuggest(t, n, r, i) {
      let s = new _c(), a = new RegExp(r, i), o = /* @__PURE__ */ new Set();
      e: for (let u of t) {
        let l = this._getModel(u);
        if (l) {
          for (let c of l.words(a))
            if (!(c === n || !isNaN(Number(c))) && (o.add(c), o.size > ia._suggestionsLimit))
              break e;
        }
      }
      return { words: Array.from(o), duration: s.elapsed() };
    }
    async $computeWordRanges(t, n, r, i) {
      let s = this._getModel(t);
      if (!s) return /* @__PURE__ */ Object.create(null);
      let a = new RegExp(r, i), o = /* @__PURE__ */ Object.create(null);
      for (let u = n.startLineNumber; u < n.endLineNumber; u++) {
        let l = s.getLineWords(u, a);
        for (let c of l) {
          if (!isNaN(Number(c.word))) continue;
          let f = o[c.word];
          f || (f = [], o[c.word] = f), f.push({
            startLineNumber: u,
            startColumn: c.startColumn,
            endLineNumber: u,
            endColumn: c.endColumn
          });
        }
      }
      return o;
    }
    async $navigateValueSet(t, n, r, i, s) {
      let a = this._getModel(t);
      if (!a) return null;
      let o = new RegExp(i, s);
      n.startColumn === n.endColumn && (n = {
        startLineNumber: n.startLineNumber,
        startColumn: n.startColumn,
        endLineNumber: n.endLineNumber,
        endColumn: n.endColumn + 1
      });
      let u = a.getValueInRange(n), l = a.getWordAtPosition({ lineNumber: n.startLineNumber, column: n.startColumn }, o);
      if (!l) return null;
      let c = a.getValueInRange(l);
      return g4.INSTANCE.navigateValueSet(n, u, l, c, r);
    }
  }, Vr._diffLimit = 1e5, Vr._suggestionsLimit = 1e4, Vr), ia = class extends $5 {
    constructor(e, t) {
      super(), this._host = e, this._foreignModuleFactory = t, this._foreignModule = null;
    }
    async $ping() {
      return "pong";
    }
    $loadForeignModule(e, t, n) {
      let r = {
        host: M4(n, (i, s) => this._host.$fhr(i, s)),
        getMirrorModels: () => this._getModels()
      };
      return this._foreignModuleFactory ? (this._foreignModule = this._foreignModuleFactory(r, t), Promise.resolve(Qd(this._foreignModule))) : new Promise((i, s) => {
        let a = (o) => {
          this._foreignModule = o.create(r, t), i(Qd(this._foreignModule));
        };
        import(`${Mc.asBrowserUri(`${e}.js`).toString(!0)}`).then(a).catch(s);
      });
    }
    $fmr(e, t) {
      if (!this._foreignModule || typeof this._foreignModule[e] != "function")
        return Promise.reject(new Error("Missing requestHandler or method: " + e));
      try {
        return Promise.resolve(this._foreignModule[e].apply(this._foreignModule, t));
      } catch (n) {
        return Promise.reject(n);
      }
    }
  };
  typeof importScripts == "function" && (globalThis.monaco = w4());
  var Eu = !1;
  function Of(e) {
    if (Eu) return;
    Eu = !0;
    let t = new s4(
      (n) => {
        globalThis.postMessage(n);
      },
      (n) => new ia(I4.getChannel(n), e)
    );
    globalThis.onmessage = (n) => {
      t.onmessage(n.data);
    };
  }
  globalThis.onmessage = (e) => {
    Eu || Of(null);
  };
  function Ne(e, t) {
    throw new Error(t);
  }
  function kn(e) {
    return typeof e == "object" && e !== null;
  }
  function Ot(e, t) {
    throw new Error(t ?? "Unexpected invariant triggered.");
  }
  var U5 = /\r\n|[\n\r]/g;
  function yu(e, t) {
    let n = 0, r = 1;
    for (let i of e.body.matchAll(U5)) {
      if (typeof i.index == "number" || Ot(), i.index >= t) break;
      n = i.index + i[0].length, r += 1;
    }
    return { line: r, column: t + 1 - n };
  }
  function j5(e) {
    return kf(e.source, yu(e.source, e.start));
  }
  function kf(e, t) {
    let n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, s = e.locationOffset.line - 1, a = t.line + s, o = t.line === 1 ? n : 0, u = t.column + o, l = `${e.name}:${a}:${u}
`, c = r.split(/\r\n|[\n\r]/g), f = c[i];
    if (f.length > 120) {
      let p = Math.floor(u / 80), m = u % 80, g = [];
      for (let y = 0; y < f.length; y += 80) g.push(f.slice(y, y + 80));
      return l + Rf([
        [`${a} |`, g[0]],
        ...g.slice(1, p + 1).map((y) => ["|", y]),
        ["|", "^".padStart(m)],
        ["|", g[p + 1]]
      ]);
    }
    return l + Rf([
      [`${a - 1} |`, c[i - 1]],
      [`${a} |`, f],
      ["|", "^".padStart(u)],
      [`${a + 1} |`, c[i + 1]]
    ]);
  }
  function Rf(e) {
    let t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
    return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
  }
  function K5(e) {
    let t = e[0];
    return t == null || "kind" in t || "length" in t ? {
      nodes: t,
      source: e[1],
      positions: e[2],
      path: e[3],
      originalError: e[4],
      extensions: e[5]
    } : t;
  }
  var q = class Rp extends Error {
    constructor(t, ...n) {
      var r, i, s;
      let { nodes: a, source: o, positions: u, path: l, originalError: c, extensions: f } = K5(n);
      super(t), this.name = "GraphQLError", this.path = l ?? void 0, this.originalError = c ?? void 0, this.nodes = Mf(Array.isArray(a) ? a : a ? [a] : void 0);
      let p = Mf(
        (r = this.nodes) === null || r === void 0 ? void 0 : r.map((g) => g.loc).filter((g) => g != null)
      );
      this.source = o ?? (p == null || (i = p[0]) === null || i === void 0 ? void 0 : i.source), this.positions = u ?? (p == null ? void 0 : p.map((g) => g.start)), this.locations = u && o ? u.map((g) => yu(o, g)) : p == null ? void 0 : p.map((g) => yu(g.source, g.start));
      let m = kn(c == null ? void 0 : c.extensions) ? c == null ? void 0 : c.extensions : void 0;
      this.extensions = (s = f ?? m) !== null && s !== void 0 ? s : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
        message: { writable: !0, enumerable: !0 },
        name: { enumerable: !1 },
        nodes: { enumerable: !1 },
        source: { enumerable: !1 },
        positions: { enumerable: !1 },
        originalError: { enumerable: !1 }
      }), c != null && c.stack ? Object.defineProperty(this, "stack", { value: c.stack, writable: !0, configurable: !0 }) : Error.captureStackTrace ? Error.captureStackTrace(this, Rp) : Object.defineProperty(this, "stack", {
        value: Error().stack,
        writable: !0,
        configurable: !0
      });
    }
    get [Symbol.toStringTag]() {
      return "GraphQLError";
    }
    toString() {
      let t = this.message;
      if (this.nodes)
        for (let n of this.nodes)
          n.loc && (t += `

` + j5(n.loc));
      else if (this.source && this.locations)
        for (let n of this.locations)
          t += `

` + kf(this.source, n);
      return t;
    }
    toJSON() {
      let t = { message: this.message };
      return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
    }
  };
  function Mf(e) {
    return e === void 0 || e.length === 0 ? void 0 : e;
  }
  function ut(e, t, n) {
    return new q(`Syntax Error: ${n}`, { source: e, positions: [t] });
  }
  var q5 = class {
    constructor(e, t, n) {
      this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n;
    }
    get [Symbol.toStringTag]() {
      return "Location";
    }
    toJSON() {
      return { start: this.start, end: this.end };
    }
  }, Bf = class {
    constructor(e, t, n, r, i, s) {
      this.kind = e, this.start = t, this.end = n, this.line = r, this.column = i, this.value = s, this.prev = null, this.next = null;
    }
    get [Symbol.toStringTag]() {
      return "Token";
    }
    toJSON() {
      return { kind: this.kind, value: this.value, line: this.line, column: this.column };
    }
  }, Pf = {
    Name: [],
    Document: ["definitions"],
    OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
    Variable: ["name"],
    SelectionSet: ["selections"],
    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
    Argument: ["name", "value"],
    FragmentSpread: ["name", "directives"],
    InlineFragment: ["typeCondition", "directives", "selectionSet"],
    FragmentDefinition: [
      "name",
      "variableDefinitions",
      "typeCondition",
      "directives",
      "selectionSet"
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ["values"],
    ObjectValue: ["fields"],
    ObjectField: ["name", "value"],
    Directive: ["name", "arguments"],
    NamedType: ["name"],
    ListType: ["type"],
    NonNullType: ["type"],
    SchemaDefinition: ["description", "directives", "operationTypes"],
    OperationTypeDefinition: ["type"],
    ScalarTypeDefinition: ["description", "name", "directives"],
    ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
    InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
    InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
    UnionTypeDefinition: ["description", "name", "directives", "types"],
    EnumTypeDefinition: ["description", "name", "directives", "values"],
    EnumValueDefinition: ["description", "name", "directives"],
    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
    DirectiveDefinition: ["description", "name", "arguments", "locations"],
    SchemaExtension: ["directives", "operationTypes"],
    ScalarTypeExtension: ["name", "directives"],
    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
    UnionTypeExtension: ["name", "directives", "types"],
    EnumTypeExtension: ["name", "directives", "values"],
    InputObjectTypeExtension: ["name", "directives", "fields"]
  }, G5 = new Set(Object.keys(Pf));
  function bu(e) {
    let t = e == null ? void 0 : e.kind;
    return typeof t == "string" && G5.has(t);
  }
  var Ct;
  (function(e) {
    e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
  })(Ct || (Ct = {}));
  var te;
  (function(e) {
    e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
  })(te || (te = {}));
  var b;
  (function(e) {
    e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
  })(b || (b = {}));
  function vu(e) {
    return e === 9 || e === 32;
  }
  function Gi(e) {
    return e >= 48 && e <= 57;
  }
  function Vf(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90;
  }
  function _u(e) {
    return Vf(e) || e === 95;
  }
  function $f(e) {
    return Vf(e) || Gi(e) || e === 95;
  }
  function H5(e) {
    var t;
    let n = Number.MAX_SAFE_INTEGER, r = null, i = -1;
    for (let a = 0; a < e.length; ++a) {
      var s;
      let o = e[a], u = W5(o);
      u !== o.length && (r = (s = r) !== null && s !== void 0 ? s : a, i = a, a !== 0 && u < n && (n = u));
    }
    return e.map((a, o) => o === 0 ? a : a.slice(n)).slice((t = r) !== null && t !== void 0 ? t : 0, i + 1);
  }
  function W5(e) {
    let t = 0;
    for (; t < e.length && vu(e.charCodeAt(t)); ) ++t;
    return t;
  }
  function z5(e, t) {
    let n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, s = r.length > 1 && r.slice(1).every((m) => m.length === 0 || vu(m.charCodeAt(0))), a = n.endsWith('\\"""'), o = e.endsWith('"') && !a, u = e.endsWith("\\"), l = o || u, c = !i || e.length > 70 || l || s || a, f = "", p = i && vu(e.charCodeAt(0));
    return (c && !p || s) && (f += `
`), f += n, (c || l) && (f += `
`), '"""' + f + '"""';
  }
  var V;
  (function(e) {
    e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
  })(V || (V = {}));
  var Y5 = class {
    constructor(e) {
      let t = new Bf(V.SOF, 0, 0, 0, 0);
      this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0;
    }
    get [Symbol.toStringTag]() {
      return "Lexer";
    }
    advance() {
      return this.lastToken = this.token, this.token = this.lookahead();
    }
    lookahead() {
      let e = this.token;
      if (e.kind !== V.EOF)
        do
          if (e.next) e = e.next;
          else {
            let t = X5(this, e.end);
            e.next = t, t.prev = e, e = t;
          }
        while (e.kind === V.COMMENT);
      return e;
    }
  };
  function J5(e) {
    return e === V.BANG || e === V.DOLLAR || e === V.AMP || e === V.PAREN_L || e === V.PAREN_R || e === V.SPREAD || e === V.COLON || e === V.EQUALS || e === V.AT || e === V.BRACKET_L || e === V.BRACKET_R || e === V.BRACE_L || e === V.PIPE || e === V.BRACE_R;
  }
  function ui(e) {
    return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
  }
  function sa(e, t) {
    return Uf(e.charCodeAt(t)) && jf(e.charCodeAt(t + 1));
  }
  function Uf(e) {
    return e >= 55296 && e <= 56319;
  }
  function jf(e) {
    return e >= 56320 && e <= 57343;
  }
  function _r(e, t) {
    let n = e.source.body.codePointAt(t);
    if (n === void 0) return V.EOF;
    if (n >= 32 && n <= 126) {
      let r = String.fromCodePoint(n);
      return r === '"' ? `'"'` : `"${r}"`;
    }
    return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
  }
  function Qe(e, t, n, r, i) {
    let s = e.line, a = 1 + n - e.lineStart;
    return new Bf(t, n, r, s, a, i);
  }
  function X5(e, t) {
    let n = e.source.body, r = n.length, i = t;
    for (; i < r; ) {
      let s = n.charCodeAt(i);
      switch (s) {
        case 65279:
        case 9:
        case 32:
        case 44:
          ++i;
          continue;
        case 10:
          ++i, ++e.line, e.lineStart = i;
          continue;
        case 13:
          n.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
          continue;
        case 35:
          return Q5(e, i);
        case 33:
          return Qe(e, V.BANG, i, i + 1);
        case 36:
          return Qe(e, V.DOLLAR, i, i + 1);
        case 38:
          return Qe(e, V.AMP, i, i + 1);
        case 40:
          return Qe(e, V.PAREN_L, i, i + 1);
        case 41:
          return Qe(e, V.PAREN_R, i, i + 1);
        case 46:
          if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46)
            return Qe(e, V.SPREAD, i, i + 3);
          break;
        case 58:
          return Qe(e, V.COLON, i, i + 1);
        case 61:
          return Qe(e, V.EQUALS, i, i + 1);
        case 64:
          return Qe(e, V.AT, i, i + 1);
        case 91:
          return Qe(e, V.BRACKET_L, i, i + 1);
        case 93:
          return Qe(e, V.BRACKET_R, i, i + 1);
        case 123:
          return Qe(e, V.BRACE_L, i, i + 1);
        case 124:
          return Qe(e, V.PIPE, i, i + 1);
        case 125:
          return Qe(e, V.BRACE_R, i, i + 1);
        case 34:
          return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? i7(e, i) : e7(e, i);
      }
      if (Gi(s) || s === 45) return Z5(e, i, s);
      if (_u(s)) return s7(e, i);
      throw ut(
        e.source,
        i,
        s === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : ui(s) || sa(n, i) ? `Unexpected character: ${_r(e, i)}.` : `Invalid character: ${_r(e, i)}.`
      );
    }
    return Qe(e, V.EOF, r, r);
  }
  function Q5(e, t) {
    let n = e.source.body, r = n.length, i = t + 1;
    for (; i < r; ) {
      let s = n.charCodeAt(i);
      if (s === 10 || s === 13) break;
      if (ui(s)) ++i;
      else if (sa(n, i)) i += 2;
      else break;
    }
    return Qe(e, V.COMMENT, t, i, n.slice(t + 1, i));
  }
  function Z5(e, t, n) {
    let r = e.source.body, i = t, s = n, a = !1;
    if (s === 45 && (s = r.charCodeAt(++i)), s === 48) {
      if (s = r.charCodeAt(++i), Gi(s))
        throw ut(e.source, i, `Invalid number, unexpected digit after 0: ${_r(e, i)}.`);
    } else i = Nu(e, i, s), s = r.charCodeAt(i);
    if (s === 46 && (a = !0, s = r.charCodeAt(++i), i = Nu(e, i, s), s = r.charCodeAt(i)), (s === 69 || s === 101) && (a = !0, s = r.charCodeAt(++i), (s === 43 || s === 45) && (s = r.charCodeAt(++i)), i = Nu(e, i, s), s = r.charCodeAt(i)), s === 46 || _u(s))
      throw ut(e.source, i, `Invalid number, expected digit but got: ${_r(e, i)}.`);
    return Qe(e, a ? V.FLOAT : V.INT, t, i, r.slice(t, i));
  }
  function Nu(e, t, n) {
    if (!Gi(n)) throw ut(e.source, t, `Invalid number, expected digit but got: ${_r(e, t)}.`);
    let r = e.source.body, i = t + 1;
    for (; Gi(r.charCodeAt(i)); ) ++i;
    return i;
  }
  function e7(e, t) {
    let n = e.source.body, r = n.length, i = t + 1, s = i, a = "";
    for (; i < r; ) {
      let o = n.charCodeAt(i);
      if (o === 34) return a += n.slice(s, i), Qe(e, V.STRING, t, i + 1, a);
      if (o === 92) {
        a += n.slice(s, i);
        let u = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? t7(e, i) : n7(e, i) : r7(e, i);
        a += u.value, i += u.size, s = i;
        continue;
      }
      if (o === 10 || o === 13) break;
      if (ui(o)) ++i;
      else if (sa(n, i)) i += 2;
      else throw ut(e.source, i, `Invalid character within String: ${_r(e, i)}.`);
    }
    throw ut(e.source, i, "Unterminated string.");
  }
  function t7(e, t) {
    let n = e.source.body, r = 0, i = 3;
    for (; i < 12; ) {
      let s = n.charCodeAt(t + i++);
      if (s === 125) {
        if (i < 5 || !ui(r)) break;
        return { value: String.fromCodePoint(r), size: i };
      }
      if (r = r << 4 | Hi(s), r < 0) break;
    }
    throw ut(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
  }
  function n7(e, t) {
    let n = e.source.body, r = Kf(n, t + 2);
    if (ui(r)) return { value: String.fromCodePoint(r), size: 6 };
    if (Uf(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
      let i = Kf(n, t + 8);
      if (jf(i)) return { value: String.fromCodePoint(r, i), size: 12 };
    }
    throw ut(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
  }
  function Kf(e, t) {
    return Hi(e.charCodeAt(t)) << 12 | Hi(e.charCodeAt(t + 1)) << 8 | Hi(e.charCodeAt(t + 2)) << 4 | Hi(e.charCodeAt(t + 3));
  }
  function Hi(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
  }
  function r7(e, t) {
    let n = e.source.body;
    switch (n.charCodeAt(t + 1)) {
      case 34:
        return { value: '"', size: 2 };
      case 92:
        return { value: "\\", size: 2 };
      case 47:
        return { value: "/", size: 2 };
      case 98:
        return { value: "\b", size: 2 };
      case 102:
        return { value: "\f", size: 2 };
      case 110:
        return {
          value: `
`,
          size: 2
        };
      case 114:
        return { value: "\r", size: 2 };
      case 116:
        return { value: "	", size: 2 };
    }
    throw ut(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
  }
  function i7(e, t) {
    let n = e.source.body, r = n.length, i = e.lineStart, s = t + 3, a = s, o = "", u = [];
    for (; s < r; ) {
      let l = n.charCodeAt(s);
      if (l === 34 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34) {
        o += n.slice(a, s), u.push(o);
        let c = Qe(
          e,
          V.BLOCK_STRING,
          t,
          s + 3,
          H5(u).join(`
`)
        );
        return e.line += u.length - 1, e.lineStart = i, c;
      }
      if (l === 92 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34 && n.charCodeAt(s + 3) === 34) {
        o += n.slice(a, s), a = s + 1, s += 4;
        continue;
      }
      if (l === 10 || l === 13) {
        o += n.slice(a, s), u.push(o), l === 13 && n.charCodeAt(s + 1) === 10 ? s += 2 : ++s, o = "", a = s, i = s;
        continue;
      }
      if (ui(l)) ++s;
      else if (sa(n, s)) s += 2;
      else throw ut(e.source, s, `Invalid character within String: ${_r(e, s)}.`);
    }
    throw ut(e.source, s, "Unterminated string.");
  }
  function s7(e, t) {
    let n = e.source.body, r = n.length, i = t + 1;
    for (; i < r; ) {
      let s = n.charCodeAt(i);
      if ($f(s)) ++i;
      else break;
    }
    return Qe(e, V.NAME, t, i, n.slice(t, i));
  }
  function z(e) {
    return aa(e, []);
  }
  function aa(e, t) {
    switch (typeof e) {
      case "string":
        return JSON.stringify(e);
      case "function":
        return e.name ? `[function ${e.name}]` : "[function]";
      case "object":
        return a7(e, t);
      default:
        return String(e);
    }
  }
  function a7(e, t) {
    if (e === null) return "null";
    if (t.includes(e)) return "[Circular]";
    let n = [...t, e];
    if (o7(e)) {
      let r = e.toJSON();
      if (r !== e) return typeof r == "string" ? r : aa(r, n);
    } else if (Array.isArray(e)) return l7(e, n);
    return u7(e, n);
  }
  function o7(e) {
    return typeof e.toJSON == "function";
  }
  function u7(e, t) {
    let n = Object.entries(e);
    return n.length === 0 ? "{}" : t.length > 2 ? "[" + c7(e) + "]" : "{ " + n.map(([r, i]) => r + ": " + aa(i, t)).join(", ") + " }";
  }
  function l7(e, t) {
    if (e.length === 0) return "[]";
    if (t.length > 2) return "[Array]";
    let n = Math.min(10, e.length), r = e.length - n, i = [];
    for (let s = 0; s < n; ++s) i.push(aa(e[s], t));
    return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
  }
  function c7(e) {
    let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
    if (t === "Object" && typeof e.constructor == "function") {
      let n = e.constructor.name;
      if (typeof n == "string" && n !== "") return n;
    }
    return t;
  }
  var d7 = globalThis.process && !0, nn = d7 ? function(e, t) {
    return e instanceof t;
  } : function(e, t) {
    if (e instanceof t) return !0;
    if (typeof e == "object" && e !== null) {
      var n;
      let r = t.prototype[Symbol.toStringTag], i = Symbol.toStringTag in e ? e[Symbol.toStringTag] : (n = e.constructor) === null || n === void 0 ? void 0 : n.name;
      if (r === i) {
        let s = z(e);
        throw new Error(`Cannot use ${r} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return !1;
  }, qf = class {
    constructor(e, t = "GraphQL request", n = { line: 1, column: 1 }) {
      typeof e == "string" || Ne(!1, `Body must be a string. Received: ${z(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || Ne(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || Ne(!1, "column in locationOffset is 1-indexed and must be positive.");
    }
    get [Symbol.toStringTag]() {
      return "Source";
    }
  };
  function f7(e) {
    return nn(e, qf);
  }
  function oa(e, t) {
    return new Gf(e, t).parseDocument();
  }
  function h7(e, t) {
    let n = new Gf(e, t);
    n.expectToken(V.SOF);
    let r = n.parseValueLiteral(!1);
    return n.expectToken(V.EOF), r;
  }
  var Gf = class {
    constructor(e, t = {}) {
      let n = f7(e) ? e : new qf(e);
      this._lexer = new Y5(n), this._options = t, this._tokenCounter = 0;
    }
    parseName() {
      let e = this.expectToken(V.NAME);
      return this.node(e, { kind: b.NAME, value: e.value });
    }
    parseDocument() {
      return this.node(this._lexer.token, {
        kind: b.DOCUMENT,
        definitions: this.many(V.SOF, this.parseDefinition, V.EOF)
      });
    }
    parseDefinition() {
      if (this.peek(V.BRACE_L)) return this.parseOperationDefinition();
      let e = this.peekDescription(), t = e ? this._lexer.lookahead() : this._lexer.token;
      if (t.kind === V.NAME) {
        switch (t.value) {
          case "schema":
            return this.parseSchemaDefinition();
          case "scalar":
            return this.parseScalarTypeDefinition();
          case "type":
            return this.parseObjectTypeDefinition();
          case "interface":
            return this.parseInterfaceTypeDefinition();
          case "union":
            return this.parseUnionTypeDefinition();
          case "enum":
            return this.parseEnumTypeDefinition();
          case "input":
            return this.parseInputObjectTypeDefinition();
          case "directive":
            return this.parseDirectiveDefinition();
        }
        if (e)
          throw ut(
            this._lexer.source,
            this._lexer.token.start,
            "Unexpected description, descriptions are supported only on type definitions."
          );
        switch (t.value) {
          case "query":
          case "mutation":
          case "subscription":
            return this.parseOperationDefinition();
          case "fragment":
            return this.parseFragmentDefinition();
          case "extend":
            return this.parseTypeSystemExtension();
        }
      }
      throw this.unexpected(t);
    }
    parseOperationDefinition() {
      let e = this._lexer.token;
      if (this.peek(V.BRACE_L))
        return this.node(e, {
          kind: b.OPERATION_DEFINITION,
          operation: Ct.QUERY,
          name: void 0,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet()
        });
      let t = this.parseOperationType(), n;
      return this.peek(V.NAME) && (n = this.parseName()), this.node(e, {
        kind: b.OPERATION_DEFINITION,
        operation: t,
        name: n,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet()
      });
    }
    parseOperationType() {
      let e = this.expectToken(V.NAME);
      switch (e.value) {
        case "query":
          return Ct.QUERY;
        case "mutation":
          return Ct.MUTATION;
        case "subscription":
          return Ct.SUBSCRIPTION;
      }
      throw this.unexpected(e);
    }
    parseVariableDefinitions() {
      return this.optionalMany(V.PAREN_L, this.parseVariableDefinition, V.PAREN_R);
    }
    parseVariableDefinition() {
      return this.node(this._lexer.token, {
        kind: b.VARIABLE_DEFINITION,
        variable: this.parseVariable(),
        type: (this.expectToken(V.COLON), this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(V.EQUALS) ? this.parseConstValueLiteral() : void 0,
        directives: this.parseConstDirectives()
      });
    }
    parseVariable() {
      let e = this._lexer.token;
      return this.expectToken(V.DOLLAR), this.node(e, { kind: b.VARIABLE, name: this.parseName() });
    }
    parseSelectionSet() {
      return this.node(this._lexer.token, {
        kind: b.SELECTION_SET,
        selections: this.many(V.BRACE_L, this.parseSelection, V.BRACE_R)
      });
    }
    parseSelection() {
      return this.peek(V.SPREAD) ? this.parseFragment() : this.parseField();
    }
    parseField() {
      let e = this._lexer.token, t = this.parseName(), n, r;
      return this.expectOptionalToken(V.COLON) ? (n = t, r = this.parseName()) : r = t, this.node(e, {
        kind: b.FIELD,
        alias: n,
        name: r,
        arguments: this.parseArguments(!1),
        directives: this.parseDirectives(!1),
        selectionSet: this.peek(V.BRACE_L) ? this.parseSelectionSet() : void 0
      });
    }
    parseArguments(e) {
      let t = e ? this.parseConstArgument : this.parseArgument;
      return this.optionalMany(V.PAREN_L, t, V.PAREN_R);
    }
    parseArgument(e = !1) {
      let t = this._lexer.token, n = this.parseName();
      return this.expectToken(V.COLON), this.node(t, { kind: b.ARGUMENT, name: n, value: this.parseValueLiteral(e) });
    }
    parseConstArgument() {
      return this.parseArgument(!0);
    }
    parseFragment() {
      let e = this._lexer.token;
      this.expectToken(V.SPREAD);
      let t = this.expectOptionalKeyword("on");
      return !t && this.peek(V.NAME) ? this.node(e, {
        kind: b.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(!1)
      }) : this.node(e, {
        kind: b.INLINE_FRAGMENT,
        typeCondition: t ? this.parseNamedType() : void 0,
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet()
      });
    }
    parseFragmentDefinition() {
      let e = this._lexer.token;
      return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(e, {
        kind: b.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet()
      }) : this.node(e, {
        kind: b.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet()
      });
    }
    parseFragmentName() {
      if (this._lexer.token.value === "on") throw this.unexpected();
      return this.parseName();
    }
    parseValueLiteral(e) {
      let t = this._lexer.token;
      switch (t.kind) {
        case V.BRACKET_L:
          return this.parseList(e);
        case V.BRACE_L:
          return this.parseObject(e);
        case V.INT:
          return this.advanceLexer(), this.node(t, { kind: b.INT, value: t.value });
        case V.FLOAT:
          return this.advanceLexer(), this.node(t, { kind: b.FLOAT, value: t.value });
        case V.STRING:
        case V.BLOCK_STRING:
          return this.parseStringLiteral();
        case V.NAME:
          switch (this.advanceLexer(), t.value) {
            case "true":
              return this.node(t, { kind: b.BOOLEAN, value: !0 });
            case "false":
              return this.node(t, { kind: b.BOOLEAN, value: !1 });
            case "null":
              return this.node(t, { kind: b.NULL });
            default:
              return this.node(t, { kind: b.ENUM, value: t.value });
          }
        case V.DOLLAR:
          if (e)
            if (this.expectToken(V.DOLLAR), this._lexer.token.kind === V.NAME) {
              let n = this._lexer.token.value;
              throw ut(
                this._lexer.source,
                t.start,
                `Unexpected variable "$${n}" in constant value.`
              );
            } else throw this.unexpected(t);
          return this.parseVariable();
        default:
          throw this.unexpected();
      }
    }
    parseConstValueLiteral() {
      return this.parseValueLiteral(!0);
    }
    parseStringLiteral() {
      let e = this._lexer.token;
      return this.advanceLexer(), this.node(e, { kind: b.STRING, value: e.value, block: e.kind === V.BLOCK_STRING });
    }
    parseList(e) {
      let t = () => this.parseValueLiteral(e);
      return this.node(this._lexer.token, {
        kind: b.LIST,
        values: this.any(V.BRACKET_L, t, V.BRACKET_R)
      });
    }
    parseObject(e) {
      let t = () => this.parseObjectField(e);
      return this.node(this._lexer.token, {
        kind: b.OBJECT,
        fields: this.any(V.BRACE_L, t, V.BRACE_R)
      });
    }
    parseObjectField(e) {
      let t = this._lexer.token, n = this.parseName();
      return this.expectToken(V.COLON), this.node(t, { kind: b.OBJECT_FIELD, name: n, value: this.parseValueLiteral(e) });
    }
    parseDirectives(e) {
      let t = [];
      for (; this.peek(V.AT); ) t.push(this.parseDirective(e));
      return t;
    }
    parseConstDirectives() {
      return this.parseDirectives(!0);
    }
    parseDirective(e) {
      let t = this._lexer.token;
      return this.expectToken(V.AT), this.node(t, {
        kind: b.DIRECTIVE,
        name: this.parseName(),
        arguments: this.parseArguments(e)
      });
    }
    parseTypeReference() {
      let e = this._lexer.token, t;
      if (this.expectOptionalToken(V.BRACKET_L)) {
        let n = this.parseTypeReference();
        this.expectToken(V.BRACKET_R), t = this.node(e, { kind: b.LIST_TYPE, type: n });
      } else t = this.parseNamedType();
      return this.expectOptionalToken(V.BANG) ? this.node(e, { kind: b.NON_NULL_TYPE, type: t }) : t;
    }
    parseNamedType() {
      return this.node(this._lexer.token, { kind: b.NAMED_TYPE, name: this.parseName() });
    }
    peekDescription() {
      return this.peek(V.STRING) || this.peek(V.BLOCK_STRING);
    }
    parseDescription() {
      if (this.peekDescription()) return this.parseStringLiteral();
    }
    parseSchemaDefinition() {
      let e = this._lexer.token, t = this.parseDescription();
      this.expectKeyword("schema");
      let n = this.parseConstDirectives(), r = this.many(V.BRACE_L, this.parseOperationTypeDefinition, V.BRACE_R);
      return this.node(e, {
        kind: b.SCHEMA_DEFINITION,
        description: t,
        directives: n,
        operationTypes: r
      });
    }
    parseOperationTypeDefinition() {
      let e = this._lexer.token, t = this.parseOperationType();
      this.expectToken(V.COLON);
      let n = this.parseNamedType();
      return this.node(e, { kind: b.OPERATION_TYPE_DEFINITION, operation: t, type: n });
    }
    parseScalarTypeDefinition() {
      let e = this._lexer.token, t = this.parseDescription();
      this.expectKeyword("scalar");
      let n = this.parseName(), r = this.parseConstDirectives();
      return this.node(e, {
        kind: b.SCALAR_TYPE_DEFINITION,
        description: t,
        name: n,
        directives: r
      });
    }
    parseObjectTypeDefinition() {
      let e = this._lexer.token, t = this.parseDescription();
      this.expectKeyword("type");
      let n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), s = this.parseFieldsDefinition();
      return this.node(e, {
        kind: b.OBJECT_TYPE_DEFINITION,
        description: t,
        name: n,
        interfaces: r,
        directives: i,
        fields: s
      });
    }
    parseImplementsInterfaces() {
      return this.expectOptionalKeyword("implements") ? this.delimitedMany(V.AMP, this.parseNamedType) : [];
    }
    parseFieldsDefinition() {
      return this.optionalMany(V.BRACE_L, this.parseFieldDefinition, V.BRACE_R);
    }
    parseFieldDefinition() {
      let e = this._lexer.token, t = this.parseDescription(), n = this.parseName(), r = this.parseArgumentDefs();
      this.expectToken(V.COLON);
      let i = this.parseTypeReference(), s = this.parseConstDirectives();
      return this.node(e, {
        kind: b.FIELD_DEFINITION,
        description: t,
        name: n,
        arguments: r,
        type: i,
        directives: s
      });
    }
    parseArgumentDefs() {
      return this.optionalMany(V.PAREN_L, this.parseInputValueDef, V.PAREN_R);
    }
    parseInputValueDef() {
      let e = this._lexer.token, t = this.parseDescription(), n = this.parseName();
      this.expectToken(V.COLON);
      let r = this.parseTypeReference(), i;
      this.expectOptionalToken(V.EQUALS) && (i = this.parseConstValueLiteral());
      let s = this.parseConstDirectives();
      return this.node(e, {
        kind: b.INPUT_VALUE_DEFINITION,
        description: t,
        name: n,
        type: r,
        defaultValue: i,
        directives: s
      });
    }
    parseInterfaceTypeDefinition() {
      let e = this._lexer.token, t = this.parseDescription();
      this.expectKeyword("interface");
      let n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), s = this.parseFieldsDefinition();
      return this.node(e, {
        kind: b.INTERFACE_TYPE_DEFINITION,
        description: t,
        name: n,
        interfaces: r,
        directives: i,
        fields: s
      });
    }
    parseUnionTypeDefinition() {
      let e = this._lexer.token, t = this.parseDescription();
      this.expectKeyword("union");
      let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
      return this.node(e, {
        kind: b.UNION_TYPE_DEFINITION,
        description: t,
        name: n,
        directives: r,
        types: i
      });
    }
    parseUnionMemberTypes() {
      return this.expectOptionalToken(V.EQUALS) ? this.delimitedMany(V.PIPE, this.parseNamedType) : [];
    }
    parseEnumTypeDefinition() {
      let e = this._lexer.token, t = this.parseDescription();
      this.expectKeyword("enum");
      let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
      return this.node(e, {
        kind: b.ENUM_TYPE_DEFINITION,
        description: t,
        name: n,
        directives: r,
        values: i
      });
    }
    parseEnumValuesDefinition() {
      return this.optionalMany(V.BRACE_L, this.parseEnumValueDefinition, V.BRACE_R);
    }
    parseEnumValueDefinition() {
      let e = this._lexer.token, t = this.parseDescription(), n = this.parseEnumValueName(), r = this.parseConstDirectives();
      return this.node(e, { kind: b.ENUM_VALUE_DEFINITION, description: t, name: n, directives: r });
    }
    parseEnumValueName() {
      if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
        throw ut(
          this._lexer.source,
          this._lexer.token.start,
          `${ua(this._lexer.token)} is reserved and cannot be used for an enum value.`
        );
      return this.parseName();
    }
    parseInputObjectTypeDefinition() {
      let e = this._lexer.token, t = this.parseDescription();
      this.expectKeyword("input");
      let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
      return this.node(e, {
        kind: b.INPUT_OBJECT_TYPE_DEFINITION,
        description: t,
        name: n,
        directives: r,
        fields: i
      });
    }
    parseInputFieldsDefinition() {
      return this.optionalMany(V.BRACE_L, this.parseInputValueDef, V.BRACE_R);
    }
    parseTypeSystemExtension() {
      let e = this._lexer.lookahead();
      if (e.kind === V.NAME)
        switch (e.value) {
          case "schema":
            return this.parseSchemaExtension();
          case "scalar":
            return this.parseScalarTypeExtension();
          case "type":
            return this.parseObjectTypeExtension();
          case "interface":
            return this.parseInterfaceTypeExtension();
          case "union":
            return this.parseUnionTypeExtension();
          case "enum":
            return this.parseEnumTypeExtension();
          case "input":
            return this.parseInputObjectTypeExtension();
        }
      throw this.unexpected(e);
    }
    parseSchemaExtension() {
      let e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("schema");
      let t = this.parseConstDirectives(), n = this.optionalMany(V.BRACE_L, this.parseOperationTypeDefinition, V.BRACE_R);
      if (t.length === 0 && n.length === 0) throw this.unexpected();
      return this.node(e, { kind: b.SCHEMA_EXTENSION, directives: t, operationTypes: n });
    }
    parseScalarTypeExtension() {
      let e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("scalar");
      let t = this.parseName(), n = this.parseConstDirectives();
      if (n.length === 0) throw this.unexpected();
      return this.node(e, { kind: b.SCALAR_TYPE_EXTENSION, name: t, directives: n });
    }
    parseObjectTypeExtension() {
      let e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("type");
      let t = this.parseName(), n = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), i = this.parseFieldsDefinition();
      if (n.length === 0 && r.length === 0 && i.length === 0) throw this.unexpected();
      return this.node(e, {
        kind: b.OBJECT_TYPE_EXTENSION,
        name: t,
        interfaces: n,
        directives: r,
        fields: i
      });
    }
    parseInterfaceTypeExtension() {
      let e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("interface");
      let t = this.parseName(), n = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), i = this.parseFieldsDefinition();
      if (n.length === 0 && r.length === 0 && i.length === 0) throw this.unexpected();
      return this.node(e, {
        kind: b.INTERFACE_TYPE_EXTENSION,
        name: t,
        interfaces: n,
        directives: r,
        fields: i
      });
    }
    parseUnionTypeExtension() {
      let e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("union");
      let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseUnionMemberTypes();
      if (n.length === 0 && r.length === 0) throw this.unexpected();
      return this.node(e, { kind: b.UNION_TYPE_EXTENSION, name: t, directives: n, types: r });
    }
    parseEnumTypeExtension() {
      let e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("enum");
      let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseEnumValuesDefinition();
      if (n.length === 0 && r.length === 0) throw this.unexpected();
      return this.node(e, { kind: b.ENUM_TYPE_EXTENSION, name: t, directives: n, values: r });
    }
    parseInputObjectTypeExtension() {
      let e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("input");
      let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseInputFieldsDefinition();
      if (n.length === 0 && r.length === 0) throw this.unexpected();
      return this.node(e, {
        kind: b.INPUT_OBJECT_TYPE_EXTENSION,
        name: t,
        directives: n,
        fields: r
      });
    }
    parseDirectiveDefinition() {
      let e = this._lexer.token, t = this.parseDescription();
      this.expectKeyword("directive"), this.expectToken(V.AT);
      let n = this.parseName(), r = this.parseArgumentDefs(), i = this.expectOptionalKeyword("repeatable");
      this.expectKeyword("on");
      let s = this.parseDirectiveLocations();
      return this.node(e, {
        kind: b.DIRECTIVE_DEFINITION,
        description: t,
        name: n,
        arguments: r,
        repeatable: i,
        locations: s
      });
    }
    parseDirectiveLocations() {
      return this.delimitedMany(V.PIPE, this.parseDirectiveLocation);
    }
    parseDirectiveLocation() {
      let e = this._lexer.token, t = this.parseName();
      if (Object.prototype.hasOwnProperty.call(te, t.value)) return t;
      throw this.unexpected(e);
    }
    node(e, t) {
      return this._options.noLocation !== !0 && (t.loc = new q5(e, this._lexer.lastToken, this._lexer.source)), t;
    }
    peek(e) {
      return this._lexer.token.kind === e;
    }
    expectToken(e) {
      let t = this._lexer.token;
      if (t.kind === e) return this.advanceLexer(), t;
      throw ut(this._lexer.source, t.start, `Expected ${Hf(e)}, found ${ua(t)}.`);
    }
    expectOptionalToken(e) {
      return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
    }
    expectKeyword(e) {
      let t = this._lexer.token;
      if (t.kind === V.NAME && t.value === e) this.advanceLexer();
      else throw ut(this._lexer.source, t.start, `Expected "${e}", found ${ua(t)}.`);
    }
    expectOptionalKeyword(e) {
      let t = this._lexer.token;
      return t.kind === V.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
    }
    unexpected(e) {
      let t = e ?? this._lexer.token;
      return ut(this._lexer.source, t.start, `Unexpected ${ua(t)}.`);
    }
    any(e, t, n) {
      this.expectToken(e);
      let r = [];
      for (; !this.expectOptionalToken(n); ) r.push(t.call(this));
      return r;
    }
    optionalMany(e, t, n) {
      if (this.expectOptionalToken(e)) {
        let r = [];
        do
          r.push(t.call(this));
        while (!this.expectOptionalToken(n));
        return r;
      }
      return [];
    }
    many(e, t, n) {
      this.expectToken(e);
      let r = [];
      do
        r.push(t.call(this));
      while (!this.expectOptionalToken(n));
      return r;
    }
    delimitedMany(e, t) {
      this.expectOptionalToken(e);
      let n = [];
      do
        n.push(t.call(this));
      while (this.expectOptionalToken(e));
      return n;
    }
    advanceLexer() {
      let { maxTokens: e } = this._options, t = this._lexer.advance();
      if (e !== void 0 && t.kind !== V.EOF && (++this._tokenCounter, this._tokenCounter > e))
        throw ut(
          this._lexer.source,
          t.start,
          `Document contains more that ${e} tokens. Parsing aborted.`
        );
    }
  };
  function ua(e) {
    let t = e.value;
    return Hf(e.kind) + (t != null ? ` "${t}"` : "");
  }
  function Hf(e) {
    return J5(e) ? `"${e}"` : e;
  }
  function ir(e, t) {
    let [n, r] = t ? [e, t] : [void 0, e], i = " Did you mean ";
    n && (i += n + " ");
    let s = r.map((u) => `"${u}"`);
    switch (s.length) {
      case 0:
        return "";
      case 1:
        return i + s[0] + "?";
      case 2:
        return i + s[0] + " or " + s[1] + "?";
    }
    let a = s.slice(0, 5), o = a.pop();
    return i + a.join(", ") + ", or " + o + "?";
  }
  function Wf(e) {
    return e;
  }
  function Nr(e, t) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let r of e) n[t(r)] = r;
    return n;
  }
  function Cr(e, t, n) {
    let r = /* @__PURE__ */ Object.create(null);
    for (let i of e) r[t(i)] = n(i);
    return r;
  }
  function Rn(e, t) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let r of Object.keys(e)) n[r] = t(e[r], r);
    return n;
  }
  function Cu(e, t) {
    let n = 0, r = 0;
    for (; n < e.length && r < t.length; ) {
      let i = e.charCodeAt(n), s = t.charCodeAt(r);
      if (la(i) && la(s)) {
        let a = 0;
        do
          ++n, a = a * 10 + i - Tu, i = e.charCodeAt(n);
        while (la(i) && a > 0);
        let o = 0;
        do
          ++r, o = o * 10 + s - Tu, s = t.charCodeAt(r);
        while (la(s) && o > 0);
        if (a < o) return -1;
        if (a > o) return 1;
      } else {
        if (i < s) return -1;
        if (i > s) return 1;
        ++n, ++r;
      }
    }
    return e.length - t.length;
  }
  var Tu = 48, p7 = 57;
  function la(e) {
    return !isNaN(e) && Tu <= e && e <= p7;
  }
  function Tr(e, t) {
    let n = /* @__PURE__ */ Object.create(null), r = new m7(e), i = Math.floor(e.length * 0.4) + 1;
    for (let s of t) {
      let a = r.measure(s, i);
      a !== void 0 && (n[s] = a);
    }
    return Object.keys(n).sort((s, a) => {
      let o = n[s] - n[a];
      return o !== 0 ? o : Cu(s, a);
    });
  }
  var m7 = class {
    constructor(e) {
      this._input = e, this._inputLowerCase = e.toLowerCase(), this._inputArray = zf(this._inputLowerCase), this._rows = [
        new Array(e.length + 1).fill(0),
        new Array(e.length + 1).fill(0),
        new Array(e.length + 1).fill(0)
      ];
    }
    measure(e, t) {
      if (this._input === e) return 0;
      let n = e.toLowerCase();
      if (this._inputLowerCase === n) return 1;
      let r = zf(n), i = this._inputArray;
      if (r.length < i.length) {
        let l = r;
        r = i, i = l;
      }
      let s = r.length, a = i.length;
      if (s - a > t) return;
      let o = this._rows;
      for (let l = 0; l <= a; l++) o[0][l] = l;
      for (let l = 1; l <= s; l++) {
        let c = o[(l - 1) % 3], f = o[l % 3], p = f[0] = l;
        for (let m = 1; m <= a; m++) {
          let g = r[l - 1] === i[m - 1] ? 0 : 1, y = Math.min(c[m] + 1, f[m - 1] + 1, c[m - 1] + g);
          if (l > 1 && m > 1 && r[l - 1] === i[m - 2] && r[l - 2] === i[m - 1]) {
            let S = o[(l - 2) % 3][m - 2];
            y = Math.min(y, S + 1);
          }
          y < p && (p = y), f[m] = y;
        }
        if (p > t) return;
      }
      let u = o[s % 3][a];
      return u <= t ? u : void 0;
    }
  };
  function zf(e) {
    let t = e.length, n = new Array(t);
    for (let r = 0; r < t; ++r) n[r] = e.charCodeAt(r);
    return n;
  }
  function qt(e) {
    if (e == null) return /* @__PURE__ */ Object.create(null);
    if (Object.getPrototypeOf(e) === null) return e;
    let t = /* @__PURE__ */ Object.create(null);
    for (let [n, r] of Object.entries(e)) t[n] = r;
    return t;
  }
  function g7(e) {
    return `"${e.replace(D7, E7)}"`;
  }
  var D7 = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
  function E7(e) {
    return y7[e.charCodeAt(0)];
  }
  var y7 = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "\\t",
    "\\n",
    "\\u000B",
    "\\f",
    "\\r",
    "\\u000E",
    "\\u000F",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001A",
    "\\u001B",
    "\\u001C",
    "\\u001D",
    "\\u001E",
    "\\u001F",
    "",
    "",
    '\\"',
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\\\",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\u007F",
    "\\u0080",
    "\\u0081",
    "\\u0082",
    "\\u0083",
    "\\u0084",
    "\\u0085",
    "\\u0086",
    "\\u0087",
    "\\u0088",
    "\\u0089",
    "\\u008A",
    "\\u008B",
    "\\u008C",
    "\\u008D",
    "\\u008E",
    "\\u008F",
    "\\u0090",
    "\\u0091",
    "\\u0092",
    "\\u0093",
    "\\u0094",
    "\\u0095",
    "\\u0096",
    "\\u0097",
    "\\u0098",
    "\\u0099",
    "\\u009A",
    "\\u009B",
    "\\u009C",
    "\\u009D",
    "\\u009E",
    "\\u009F"
  ], li = Object.freeze({});
  function sr(e, t, n = Pf) {
    let r = /* @__PURE__ */ new Map();
    for (let C of Object.values(b)) r.set(C, ca(t, C));
    let i, s = Array.isArray(e), a = [e], o = -1, u = [], l = e, c, f, p = [], m = [];
    do {
      o++;
      let C = o === a.length, w = C && u.length !== 0;
      if (C) {
        if (c = m.length === 0 ? void 0 : p[p.length - 1], l = f, f = m.pop(), w)
          if (s) {
            l = l.slice();
            let T = 0;
            for (let [I, O] of u) {
              let k = I - T;
              O === null ? (l.splice(k, 1), T++) : l[k] = O;
            }
          } else {
            l = Object.defineProperties({}, Object.getOwnPropertyDescriptors(l));
            for (let [T, I] of u) l[T] = I;
          }
        o = i.index, a = i.keys, u = i.edits, s = i.inArray, i = i.prev;
      } else if (f) {
        if (c = s ? o : a[o], l = f[c], l == null) continue;
        p.push(c);
      }
      let A;
      if (!Array.isArray(l)) {
        var g, y;
        bu(l) || Ne(!1, `Invalid AST Node: ${z(l)}.`);
        let T = C ? (g = r.get(l.kind)) === null || g === void 0 ? void 0 : g.leave : (y = r.get(l.kind)) === null || y === void 0 ? void 0 : y.enter;
        if (A = T == null ? void 0 : T.call(t, l, c, f, p, m), A === li) break;
        if (A === !1) {
          if (!C) {
            p.pop();
            continue;
          }
        } else if (A !== void 0 && (u.push([c, A]), !C))
          if (bu(A)) l = A;
          else {
            p.pop();
            continue;
          }
      }
      if (A === void 0 && w && u.push([c, l]), C) p.pop();
      else {
        var S;
        i = { inArray: s, index: o, keys: a, edits: u, prev: i }, s = Array.isArray(l), a = s ? l : (S = n[l.kind]) !== null && S !== void 0 ? S : [], o = -1, u = [], f && m.push(f), f = l;
      }
    } while (i !== void 0);
    return u.length !== 0 ? u[u.length - 1][1] : e;
  }
  function Yf(e) {
    let t = new Array(e.length).fill(null), n = /* @__PURE__ */ Object.create(null);
    for (let r of Object.values(b)) {
      let i = !1, s = new Array(e.length).fill(void 0), a = new Array(e.length).fill(void 0);
      for (let u = 0; u < e.length; ++u) {
        let { enter: l, leave: c } = ca(e[u], r);
        i || (i = l != null || c != null), s[u] = l, a[u] = c;
      }
      if (!i) continue;
      let o = {
        enter(...u) {
          let l = u[0];
          for (let f = 0; f < e.length; f++)
            if (t[f] === null) {
              var c;
              let p = (c = s[f]) === null || c === void 0 ? void 0 : c.apply(e[f], u);
              if (p === !1) t[f] = l;
              else if (p === li) t[f] = li;
              else if (p !== void 0) return p;
            }
        },
        leave(...u) {
          let l = u[0];
          for (let f = 0; f < e.length; f++)
            if (t[f] === null) {
              var c;
              let p = (c = a[f]) === null || c === void 0 ? void 0 : c.apply(e[f], u);
              if (p === li) t[f] = li;
              else if (p !== void 0 && p !== !1) return p;
            } else t[f] === l && (t[f] = null);
        }
      };
      n[r] = o;
    }
    return n;
  }
  function ca(e, t) {
    let n = e[t];
    return typeof n == "object" ? n : typeof n == "function" ? { enter: n, leave: void 0 } : { enter: e.enter, leave: e.leave };
  }
  function st(e) {
    return sr(e, v7);
  }
  var b7 = 80, v7 = {
    Name: { leave: (e) => e.value },
    Variable: { leave: (e) => "$" + e.name },
    Document: {
      leave: (e) => ie(
        e.definitions,
        `

`
      )
    },
    OperationDefinition: {
      leave(e) {
        let t = ge("(", ie(e.variableDefinitions, ", "), ")"), n = ie([e.operation, ie([e.name, t]), ie(e.directives, " ")], " ");
        return (n === "query" ? "" : n + " ") + e.selectionSet;
      }
    },
    VariableDefinition: {
      leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + ge(" = ", n) + ge(" ", ie(r, " "))
    },
    SelectionSet: { leave: ({ selections: e }) => rn(e) },
    Field: {
      leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
        let s = ge("", e, ": ") + t, a = s + ge("(", ie(n, ", "), ")");
        return a.length > b7 && (a = s + ge(
          `(
`,
          da(
            ie(
              n,
              `
`
            )
          ),
          `
)`
        )), ie([a, ie(r, " "), i], " ");
      }
    },
    Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
    FragmentSpread: { leave: ({ name: e, directives: t }) => "..." + e + ge(" ", ie(t, " ")) },
    InlineFragment: {
      leave: ({ typeCondition: e, directives: t, selectionSet: n }) => ie(["...", ge("on ", e), ie(t, " "), n], " ")
    },
    FragmentDefinition: {
      leave: ({
        name: e,
        typeCondition: t,
        variableDefinitions: n,
        directives: r,
        selectionSet: i
      }) => `fragment ${e}${ge("(", ie(n, ", "), ")")} on ${t} ${ge("", ie(r, " "), " ")}` + i
    },
    IntValue: { leave: ({ value: e }) => e },
    FloatValue: { leave: ({ value: e }) => e },
    StringValue: { leave: ({ value: e, block: t }) => t ? z5(e) : g7(e) },
    BooleanValue: { leave: ({ value: e }) => e ? "true" : "false" },
    NullValue: { leave: () => "null" },
    EnumValue: { leave: ({ value: e }) => e },
    ListValue: { leave: ({ values: e }) => "[" + ie(e, ", ") + "]" },
    ObjectValue: { leave: ({ fields: e }) => "{" + ie(e, ", ") + "}" },
    ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
    Directive: { leave: ({ name: e, arguments: t }) => "@" + e + ge("(", ie(t, ", "), ")") },
    NamedType: { leave: ({ name: e }) => e },
    ListType: { leave: ({ type: e }) => "[" + e + "]" },
    NonNullType: { leave: ({ type: e }) => e + "!" },
    SchemaDefinition: {
      leave: ({ description: e, directives: t, operationTypes: n }) => ge(
        "",
        e,
        `
`
      ) + ie(["schema", ie(t, " "), rn(n)], " ")
    },
    OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ": " + t },
    ScalarTypeDefinition: {
      leave: ({ description: e, name: t, directives: n }) => ge(
        "",
        e,
        `
`
      ) + ie(["scalar", t, ie(n, " ")], " ")
    },
    ObjectTypeDefinition: {
      leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => ge(
        "",
        e,
        `
`
      ) + ie(["type", t, ge("implements ", ie(n, " & ")), ie(r, " "), rn(i)], " ")
    },
    FieldDefinition: {
      leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => ge(
        "",
        e,
        `
`
      ) + t + (Jf(n) ? ge(
        `(
`,
        da(
          ie(
            n,
            `
`
          )
        ),
        `
)`
      ) : ge("(", ie(n, ", "), ")")) + ": " + r + ge(" ", ie(i, " "))
    },
    InputValueDefinition: {
      leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => ge(
        "",
        e,
        `
`
      ) + ie([t + ": " + n, ge("= ", r), ie(i, " ")], " ")
    },
    InterfaceTypeDefinition: {
      leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => ge(
        "",
        e,
        `
`
      ) + ie(["interface", t, ge("implements ", ie(n, " & ")), ie(r, " "), rn(i)], " ")
    },
    UnionTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, types: r }) => ge(
        "",
        e,
        `
`
      ) + ie(["union", t, ie(n, " "), ge("= ", ie(r, " | "))], " ")
    },
    EnumTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, values: r }) => ge(
        "",
        e,
        `
`
      ) + ie(["enum", t, ie(n, " "), rn(r)], " ")
    },
    EnumValueDefinition: {
      leave: ({ description: e, name: t, directives: n }) => ge(
        "",
        e,
        `
`
      ) + ie([t, ie(n, " ")], " ")
    },
    InputObjectTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, fields: r }) => ge(
        "",
        e,
        `
`
      ) + ie(["input", t, ie(n, " "), rn(r)], " ")
    },
    DirectiveDefinition: {
      leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) => ge(
        "",
        e,
        `
`
      ) + "directive @" + t + (Jf(n) ? ge(
        `(
`,
        da(
          ie(
            n,
            `
`
          )
        ),
        `
)`
      ) : ge("(", ie(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + ie(i, " | ")
    },
    SchemaExtension: {
      leave: ({ directives: e, operationTypes: t }) => ie(["extend schema", ie(e, " "), rn(t)], " ")
    },
    ScalarTypeExtension: {
      leave: ({ name: e, directives: t }) => ie(["extend scalar", e, ie(t, " ")], " ")
    },
    ObjectTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: r }) => ie(["extend type", e, ge("implements ", ie(t, " & ")), ie(n, " "), rn(r)], " ")
    },
    InterfaceTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: r }) => ie(["extend interface", e, ge("implements ", ie(t, " & ")), ie(n, " "), rn(r)], " ")
    },
    UnionTypeExtension: {
      leave: ({ name: e, directives: t, types: n }) => ie(["extend union", e, ie(t, " "), ge("= ", ie(n, " | "))], " ")
    },
    EnumTypeExtension: {
      leave: ({ name: e, directives: t, values: n }) => ie(["extend enum", e, ie(t, " "), rn(n)], " ")
    },
    InputObjectTypeExtension: {
      leave: ({ name: e, directives: t, fields: n }) => ie(["extend input", e, ie(t, " "), rn(n)], " ")
    }
  };
  function ie(e, t = "") {
    var n;
    return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
  }
  function rn(e) {
    return ge(
      `{
`,
      da(
        ie(
          e,
          `
`
        )
      ),
      `
}`
    );
  }
  function ge(e, t, n = "") {
    return t != null && t !== "" ? e + t + n : "";
  }
  function da(e) {
    return ge(
      "  ",
      e.replace(
        /\n/g,
        `
  `
      )
    );
  }
  function Jf(e) {
    var t;
    return (t = e == null ? void 0 : e.some(
      (n) => n.includes(`
`)
    )) !== null && t !== void 0 ? t : !1;
  }
  function Su(e, t) {
    switch (e.kind) {
      case b.NULL:
        return null;
      case b.INT:
        return parseInt(e.value, 10);
      case b.FLOAT:
        return parseFloat(e.value);
      case b.STRING:
      case b.ENUM:
      case b.BOOLEAN:
        return e.value;
      case b.LIST:
        return e.values.map((n) => Su(n, t));
      case b.OBJECT:
        return Cr(
          e.fields,
          (n) => n.name.value,
          (n) => Su(n.value, t)
        );
      case b.VARIABLE:
        return t == null ? void 0 : t[e.name.value];
    }
  }
  function sn(e) {
    if (e != null || Ne(!1, "Must provide name."), typeof e == "string" || Ne(!1, "Expected name to be a string."), e.length === 0)
      throw new q("Expected name to be a non-empty string.");
    for (let t = 1; t < e.length; ++t)
      if (!$f(e.charCodeAt(t)))
        throw new q(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);
    if (!_u(e.charCodeAt(0))) throw new q(`Names must start with [_a-zA-Z] but "${e}" does not.`);
    return e;
  }
  function _7(e) {
    if (e === "true" || e === "false" || e === "null")
      throw new q(`Enum values cannot be named: ${e}`);
    return sn(e);
  }
  function Au(e) {
    return Gt(e) || Ie(e) || ke(e) || Mt(e) || Tt(e) || Ke(e) || Ze(e) || Te(e);
  }
  function Gt(e) {
    return nn(e, Mn);
  }
  function Ie(e) {
    return nn(e, Ht);
  }
  function N7(e) {
    if (!Ie(e)) throw new Error(`Expected ${z(e)} to be a GraphQL Object type.`);
    return e;
  }
  function ke(e) {
    return nn(e, ar);
  }
  function C7(e) {
    if (!ke(e)) throw new Error(`Expected ${z(e)} to be a GraphQL Interface type.`);
    return e;
  }
  function Mt(e) {
    return nn(e, fa);
  }
  function Tt(e) {
    return nn(e, or);
  }
  function Ke(e) {
    return nn(e, zi);
  }
  function Ze(e) {
    return nn(e, mt);
  }
  function Te(e) {
    return nn(e, pe);
  }
  function Bt(e) {
    return Gt(e) || Tt(e) || Ke(e) || Fu(e) && Bt(e.ofType);
  }
  function Sr(e) {
    return Gt(e) || Ie(e) || ke(e) || Mt(e) || Tt(e) || Fu(e) && Sr(e.ofType);
  }
  function ci(e) {
    return Gt(e) || Tt(e);
  }
  function Pt(e) {
    return Ie(e) || ke(e) || Mt(e);
  }
  function bn(e) {
    return ke(e) || Mt(e);
  }
  function T7(e) {
    if (!bn(e)) throw new Error(`Expected ${z(e)} to be a GraphQL abstract type.`);
    return e;
  }
  var mt = class {
    constructor(e) {
      Au(e) || Ne(!1, `Expected ${z(e)} to be a GraphQL type.`), this.ofType = e;
    }
    get [Symbol.toStringTag]() {
      return "GraphQLList";
    }
    toString() {
      return "[" + String(this.ofType) + "]";
    }
    toJSON() {
      return this.toString();
    }
  }, pe = class {
    constructor(e) {
      Xf(e) || Ne(!1, `Expected ${z(e)} to be a GraphQL nullable type.`), this.ofType = e;
    }
    get [Symbol.toStringTag]() {
      return "GraphQLNonNull";
    }
    toString() {
      return String(this.ofType) + "!";
    }
    toJSON() {
      return this.toString();
    }
  };
  function Fu(e) {
    return Ze(e) || Te(e);
  }
  function Xf(e) {
    return Au(e) && !Te(e);
  }
  function S7(e) {
    if (!Xf(e)) throw new Error(`Expected ${z(e)} to be a GraphQL nullable type.`);
    return e;
  }
  function wu(e) {
    if (e) return Te(e) ? e.ofType : e;
  }
  function A7(e) {
    return Gt(e) || Ie(e) || ke(e) || Mt(e) || Tt(e) || Ke(e);
  }
  function qe(e) {
    if (e) {
      let t = e;
      for (; Fu(t); ) t = t.ofType;
      return t;
    }
  }
  function Qf(e) {
    return typeof e == "function" ? e() : e;
  }
  function Zf(e) {
    return typeof e == "function" ? e() : e;
  }
  var Mn = class {
    constructor(e) {
      var t, n, r, i;
      let s = (t = e.parseValue) !== null && t !== void 0 ? t : Wf;
      this.name = sn(e.name), this.description = e.description, this.specifiedByURL = e.specifiedByURL, this.serialize = (n = e.serialize) !== null && n !== void 0 ? n : Wf, this.parseValue = s, this.parseLiteral = (r = e.parseLiteral) !== null && r !== void 0 ? r : (a, o) => s(Su(a, o)), this.extensions = qt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (i = e.extensionASTNodes) !== null && i !== void 0 ? i : [], e.specifiedByURL == null || typeof e.specifiedByURL == "string" || Ne(
        !1,
        `${this.name} must provide "specifiedByURL" as a string, but got: ${z(
          e.specifiedByURL
        )}.`
      ), e.serialize == null || typeof e.serialize == "function" || Ne(
        !1,
        `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
      ), e.parseLiteral && (typeof e.parseValue == "function" && typeof e.parseLiteral == "function" || Ne(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`));
    }
    get [Symbol.toStringTag]() {
      return "GraphQLScalarType";
    }
    toConfig() {
      return {
        name: this.name,
        description: this.description,
        specifiedByURL: this.specifiedByURL,
        serialize: this.serialize,
        parseValue: this.parseValue,
        parseLiteral: this.parseLiteral,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes
      };
    }
    toString() {
      return this.name;
    }
    toJSON() {
      return this.toString();
    }
  }, Ht = class {
    constructor(e) {
      var t;
      this.name = sn(e.name), this.description = e.description, this.isTypeOf = e.isTypeOf, this.extensions = qt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._fields = () => th(e), this._interfaces = () => eh(e), e.isTypeOf == null || typeof e.isTypeOf == "function" || Ne(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${z(e.isTypeOf)}.`);
    }
    get [Symbol.toStringTag]() {
      return "GraphQLObjectType";
    }
    getFields() {
      return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
    }
    getInterfaces() {
      return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
    }
    toConfig() {
      return {
        name: this.name,
        description: this.description,
        interfaces: this.getInterfaces(),
        fields: rh(this.getFields()),
        isTypeOf: this.isTypeOf,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes
      };
    }
    toString() {
      return this.name;
    }
    toJSON() {
      return this.toString();
    }
  };
  function eh(e) {
    var t;
    let n = Qf((t = e.interfaces) !== null && t !== void 0 ? t : []);
    return Array.isArray(n) || Ne(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`), n;
  }
  function th(e) {
    let t = Zf(e.fields);
    return di(t) || Ne(
      !1,
      `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
    ), Rn(t, (n, r) => {
      var i;
      di(n) || Ne(!1, `${e.name}.${r} field config must be an object.`), n.resolve == null || typeof n.resolve == "function" || Ne(
        !1,
        `${e.name}.${r} field resolver must be a function if provided, but got: ${z(
          n.resolve
        )}.`
      );
      let s = (i = n.args) !== null && i !== void 0 ? i : {};
      return di(s) || Ne(!1, `${e.name}.${r} args must be an object with argument names as keys.`), {
        name: sn(r),
        description: n.description,
        type: n.type,
        args: nh(s),
        resolve: n.resolve,
        subscribe: n.subscribe,
        deprecationReason: n.deprecationReason,
        extensions: qt(n.extensions),
        astNode: n.astNode
      };
    });
  }
  function nh(e) {
    return Object.entries(e).map(([t, n]) => ({
      name: sn(t),
      description: n.description,
      type: n.type,
      defaultValue: n.defaultValue,
      deprecationReason: n.deprecationReason,
      extensions: qt(n.extensions),
      astNode: n.astNode
    }));
  }
  function di(e) {
    return kn(e) && !Array.isArray(e);
  }
  function rh(e) {
    return Rn(e, (t) => ({
      description: t.description,
      type: t.type,
      args: ih(t.args),
      resolve: t.resolve,
      subscribe: t.subscribe,
      deprecationReason: t.deprecationReason,
      extensions: t.extensions,
      astNode: t.astNode
    }));
  }
  function ih(e) {
    return Cr(
      e,
      (t) => t.name,
      (t) => ({
        description: t.description,
        type: t.type,
        defaultValue: t.defaultValue,
        deprecationReason: t.deprecationReason,
        extensions: t.extensions,
        astNode: t.astNode
      })
    );
  }
  function Wi(e) {
    return Te(e.type) && e.defaultValue === void 0;
  }
  var ar = class {
    constructor(e) {
      var t;
      this.name = sn(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = qt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._fields = th.bind(void 0, e), this._interfaces = eh.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || Ne(
        !1,
        `${this.name} must provide "resolveType" as a function, but got: ${z(e.resolveType)}.`
      );
    }
    get [Symbol.toStringTag]() {
      return "GraphQLInterfaceType";
    }
    getFields() {
      return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
    }
    getInterfaces() {
      return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
    }
    toConfig() {
      return {
        name: this.name,
        description: this.description,
        interfaces: this.getInterfaces(),
        fields: rh(this.getFields()),
        resolveType: this.resolveType,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes
      };
    }
    toString() {
      return this.name;
    }
    toJSON() {
      return this.toString();
    }
  }, fa = class {
    constructor(e) {
      var t;
      this.name = sn(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = qt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._types = F7.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || Ne(
        !1,
        `${this.name} must provide "resolveType" as a function, but got: ${z(e.resolveType)}.`
      );
    }
    get [Symbol.toStringTag]() {
      return "GraphQLUnionType";
    }
    getTypes() {
      return typeof this._types == "function" && (this._types = this._types()), this._types;
    }
    toConfig() {
      return {
        name: this.name,
        description: this.description,
        types: this.getTypes(),
        resolveType: this.resolveType,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes
      };
    }
    toString() {
      return this.name;
    }
    toJSON() {
      return this.toString();
    }
  };
  function F7(e) {
    let t = Qf(e.types);
    return Array.isArray(t) || Ne(
      !1,
      `Must provide Array of types or a function which returns such an array for Union ${e.name}.`
    ), t;
  }
  var or = class {
    constructor(e) {
      var t;
      this.name = sn(e.name), this.description = e.description, this.extensions = qt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._values = typeof e.values == "function" ? e.values : sh(this.name, e.values), this._valueLookup = null, this._nameLookup = null;
    }
    get [Symbol.toStringTag]() {
      return "GraphQLEnumType";
    }
    getValues() {
      return typeof this._values == "function" && (this._values = sh(this.name, this._values())), this._values;
    }
    getValue(e) {
      return this._nameLookup === null && (this._nameLookup = Nr(this.getValues(), (t) => t.name)), this._nameLookup[e];
    }
    serialize(e) {
      this._valueLookup === null && (this._valueLookup = new Map(this.getValues().map((n) => [n.value, n])));
      let t = this._valueLookup.get(e);
      if (t === void 0) throw new q(`Enum "${this.name}" cannot represent value: ${z(e)}`);
      return t.name;
    }
    parseValue(e) {
      if (typeof e != "string") {
        let n = z(e);
        throw new q(`Enum "${this.name}" cannot represent non-string value: ${n}.` + ha(this, n));
      }
      let t = this.getValue(e);
      if (t == null)
        throw new q(`Value "${e}" does not exist in "${this.name}" enum.` + ha(this, e));
      return t.value;
    }
    parseLiteral(e, t) {
      if (e.kind !== b.ENUM) {
        let r = st(e);
        throw new q(`Enum "${this.name}" cannot represent non-enum value: ${r}.` + ha(this, r), {
          nodes: e
        });
      }
      let n = this.getValue(e.value);
      if (n == null) {
        let r = st(e);
        throw new q(`Value "${r}" does not exist in "${this.name}" enum.` + ha(this, r), {
          nodes: e
        });
      }
      return n.value;
    }
    toConfig() {
      let e = Cr(
        this.getValues(),
        (t) => t.name,
        (t) => ({
          description: t.description,
          value: t.value,
          deprecationReason: t.deprecationReason,
          extensions: t.extensions,
          astNode: t.astNode
        })
      );
      return {
        name: this.name,
        description: this.description,
        values: e,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes
      };
    }
    toString() {
      return this.name;
    }
    toJSON() {
      return this.toString();
    }
  };
  function ha(e, t) {
    let n = e.getValues().map((i) => i.name), r = Tr(t, n);
    return ir("the enum value", r);
  }
  function sh(e, t) {
    return di(t) || Ne(!1, `${e} values must be an object with value names as keys.`), Object.entries(t).map(
      ([n, r]) => (di(r) || Ne(
        !1,
        `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${z(
          r
        )}.`
      ), {
        name: _7(n),
        description: r.description,
        value: r.value !== void 0 ? r.value : n,
        deprecationReason: r.deprecationReason,
        extensions: qt(r.extensions),
        astNode: r.astNode
      })
    );
  }
  var zi = class {
    constructor(e) {
      var t, n;
      this.name = sn(e.name), this.description = e.description, this.extensions = qt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this.isOneOf = (n = e.isOneOf) !== null && n !== void 0 ? n : !1, this._fields = w7.bind(void 0, e);
    }
    get [Symbol.toStringTag]() {
      return "GraphQLInputObjectType";
    }
    getFields() {
      return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
    }
    toConfig() {
      let e = Rn(this.getFields(), (t) => ({
        description: t.description,
        type: t.type,
        defaultValue: t.defaultValue,
        deprecationReason: t.deprecationReason,
        extensions: t.extensions,
        astNode: t.astNode
      }));
      return {
        name: this.name,
        description: this.description,
        fields: e,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes,
        isOneOf: this.isOneOf
      };
    }
    toString() {
      return this.name;
    }
    toJSON() {
      return this.toString();
    }
  };
  function w7(e) {
    let t = Zf(e.fields);
    return di(t) || Ne(
      !1,
      `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
    ), Rn(
      t,
      (n, r) => (!("resolve" in n) || Ne(
        !1,
        `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`
      ), {
        name: sn(r),
        description: n.description,
        type: n.type,
        defaultValue: n.defaultValue,
        deprecationReason: n.deprecationReason,
        extensions: qt(n.extensions),
        astNode: n.astNode
      })
    );
  }
  function ah(e) {
    return Te(e.type) && e.defaultValue === void 0;
  }
  function oh(e, t) {
    return e === t ? !0 : Te(e) && Te(t) || Ze(e) && Ze(t) ? oh(e.ofType, t.ofType) : !1;
  }
  function fi(e, t, n) {
    return t === n ? !0 : Te(n) ? Te(t) ? fi(e, t.ofType, n.ofType) : !1 : Te(t) ? fi(e, t.ofType, n) : Ze(n) ? Ze(t) ? fi(e, t.ofType, n.ofType) : !1 : Ze(t) ? !1 : bn(n) && (ke(t) || Ie(t)) && e.isSubType(n, t);
  }
  function Iu(e, t, n) {
    return t === n ? !0 : bn(t) ? bn(n) ? e.getPossibleTypes(t).some((r) => e.isSubType(n, r)) : e.isSubType(t, n) : bn(n) ? e.isSubType(n, t) : !1;
  }
  var xu = 2147483647, Lu = -2147483648, I7 = new Mn({
    name: "Int",
    description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
    serialize(e) {
      let t = Yi(e);
      if (typeof t == "boolean") return t ? 1 : 0;
      let n = t;
      if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n))
        throw new q(`Int cannot represent non-integer value: ${z(t)}`);
      if (n > xu || n < Lu)
        throw new q("Int cannot represent non 32-bit signed integer value: " + z(t));
      return n;
    },
    parseValue(e) {
      if (typeof e != "number" || !Number.isInteger(e))
        throw new q(`Int cannot represent non-integer value: ${z(e)}`);
      if (e > xu || e < Lu)
        throw new q(`Int cannot represent non 32-bit signed integer value: ${e}`);
      return e;
    },
    parseLiteral(e) {
      if (e.kind !== b.INT)
        throw new q(`Int cannot represent non-integer value: ${st(e)}`, { nodes: e });
      let t = parseInt(e.value, 10);
      if (t > xu || t < Lu)
        throw new q(`Int cannot represent non 32-bit signed integer value: ${e.value}`, {
          nodes: e
        });
      return t;
    }
  }), uh = new Mn({
    name: "Float",
    description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
    serialize(e) {
      let t = Yi(e);
      if (typeof t == "boolean") return t ? 1 : 0;
      let n = t;
      if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n))
        throw new q(`Float cannot represent non numeric value: ${z(t)}`);
      return n;
    },
    parseValue(e) {
      if (typeof e != "number" || !Number.isFinite(e))
        throw new q(`Float cannot represent non numeric value: ${z(e)}`);
      return e;
    },
    parseLiteral(e) {
      if (e.kind !== b.FLOAT && e.kind !== b.INT)
        throw new q(`Float cannot represent non numeric value: ${st(e)}`, e);
      return parseFloat(e.value);
    }
  }), Ge = new Mn({
    name: "String",
    description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
    serialize(e) {
      let t = Yi(e);
      if (typeof t == "string") return t;
      if (typeof t == "boolean") return t ? "true" : "false";
      if (typeof t == "number" && Number.isFinite(t)) return t.toString();
      throw new q(`String cannot represent value: ${z(e)}`);
    },
    parseValue(e) {
      if (typeof e != "string") throw new q(`String cannot represent a non string value: ${z(e)}`);
      return e;
    },
    parseLiteral(e) {
      if (e.kind !== b.STRING)
        throw new q(`String cannot represent a non string value: ${st(e)}`, { nodes: e });
      return e.value;
    }
  }), lt = new Mn({
    name: "Boolean",
    description: "The `Boolean` scalar type represents `true` or `false`.",
    serialize(e) {
      let t = Yi(e);
      if (typeof t == "boolean") return t;
      if (Number.isFinite(t)) return t !== 0;
      throw new q(`Boolean cannot represent a non boolean value: ${z(t)}`);
    },
    parseValue(e) {
      if (typeof e != "boolean")
        throw new q(`Boolean cannot represent a non boolean value: ${z(e)}`);
      return e;
    },
    parseLiteral(e) {
      if (e.kind !== b.BOOLEAN)
        throw new q(`Boolean cannot represent a non boolean value: ${st(e)}`, { nodes: e });
      return e.value;
    }
  }), lh = new Mn({
    name: "ID",
    description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
    serialize(e) {
      let t = Yi(e);
      if (typeof t == "string") return t;
      if (Number.isInteger(t)) return String(t);
      throw new q(`ID cannot represent value: ${z(e)}`);
    },
    parseValue(e) {
      if (typeof e == "string") return e;
      if (typeof e == "number" && Number.isInteger(e)) return e.toString();
      throw new q(`ID cannot represent value: ${z(e)}`);
    },
    parseLiteral(e) {
      if (e.kind !== b.STRING && e.kind !== b.INT)
        throw new q("ID cannot represent a non-string and non-integer value: " + st(e), {
          nodes: e
        });
      return e.value;
    }
  }), pa = Object.freeze([Ge, I7, uh, lt, lh]);
  function x7(e) {
    return pa.some(({ name: t }) => e.name === t);
  }
  function Yi(e) {
    if (kn(e)) {
      if (typeof e.valueOf == "function") {
        let t = e.valueOf();
        if (!kn(t)) return t;
      }
      if (typeof e.toJSON == "function") return e.toJSON();
    }
    return e;
  }
  function ch(e) {
    return nn(e, Bn);
  }
  var Bn = class {
    constructor(e) {
      var t, n;
      this.name = sn(e.name), this.description = e.description, this.locations = e.locations, this.isRepeatable = (t = e.isRepeatable) !== null && t !== void 0 ? t : !1, this.extensions = qt(e.extensions), this.astNode = e.astNode, Array.isArray(e.locations) || Ne(!1, `@${e.name} locations must be an Array.`);
      let r = (n = e.args) !== null && n !== void 0 ? n : {};
      kn(r) && !Array.isArray(r) || Ne(!1, `@${e.name} args must be an object with argument names as keys.`), this.args = nh(r);
    }
    get [Symbol.toStringTag]() {
      return "GraphQLDirective";
    }
    toConfig() {
      return {
        name: this.name,
        description: this.description,
        locations: this.locations,
        args: ih(this.args),
        isRepeatable: this.isRepeatable,
        extensions: this.extensions,
        astNode: this.astNode
      };
    }
    toString() {
      return "@" + this.name;
    }
    toJSON() {
      return this.toString();
    }
  }, dh = new Bn({
    name: "include",
    description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
    locations: [te.FIELD, te.FRAGMENT_SPREAD, te.INLINE_FRAGMENT],
    args: { if: { type: new pe(lt), description: "Included when true." } }
  }), fh = new Bn({
    name: "skip",
    description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
    locations: [te.FIELD, te.FRAGMENT_SPREAD, te.INLINE_FRAGMENT],
    args: { if: { type: new pe(lt), description: "Skipped when true." } }
  }), L7 = "No longer supported", Ou = new Bn({
    name: "deprecated",
    description: "Marks an element of a GraphQL schema as no longer supported.",
    locations: [
      te.FIELD_DEFINITION,
      te.ARGUMENT_DEFINITION,
      te.INPUT_FIELD_DEFINITION,
      te.ENUM_VALUE
    ],
    args: {
      reason: {
        type: Ge,
        description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
        defaultValue: L7
      }
    }
  }), hh = new Bn({
    name: "specifiedBy",
    description: "Exposes a URL that specifies the behavior of this scalar.",
    locations: [te.SCALAR],
    args: {
      url: {
        type: new pe(Ge),
        description: "The URL that specifies the behavior of this scalar."
      }
    }
  }), ph = new Bn({
    name: "oneOf",
    description: "Indicates exactly one field must be supplied and this field must not be `null`.",
    locations: [te.INPUT_OBJECT],
    args: {}
  }), hi = Object.freeze([dh, fh, Ou, hh, ph]);
  function O7(e) {
    return typeof e == "object" && typeof (e == null ? void 0 : e[Symbol.iterator]) == "function";
  }
  function Ji(e, t) {
    if (Te(t)) {
      let n = Ji(e, t.ofType);
      return (n == null ? void 0 : n.kind) === b.NULL ? null : n;
    }
    if (e === null) return { kind: b.NULL };
    if (e === void 0) return null;
    if (Ze(t)) {
      let n = t.ofType;
      if (O7(e)) {
        let r = [];
        for (let i of e) {
          let s = Ji(i, n);
          s != null && r.push(s);
        }
        return { kind: b.LIST, values: r };
      }
      return Ji(e, n);
    }
    if (Ke(t)) {
      if (!kn(e)) return null;
      let n = [];
      for (let r of Object.values(t.getFields())) {
        let i = Ji(e[r.name], r.type);
        i && n.push({ kind: b.OBJECT_FIELD, name: { kind: b.NAME, value: r.name }, value: i });
      }
      return { kind: b.OBJECT, fields: n };
    }
    if (ci(t)) {
      let n = t.serialize(e);
      if (n == null) return null;
      if (typeof n == "boolean") return { kind: b.BOOLEAN, value: n };
      if (typeof n == "number" && Number.isFinite(n)) {
        let r = String(n);
        return mh.test(r) ? { kind: b.INT, value: r } : { kind: b.FLOAT, value: r };
      }
      if (typeof n == "string")
        return Tt(t) ? { kind: b.ENUM, value: n } : t === lh && mh.test(n) ? { kind: b.INT, value: n } : { kind: b.STRING, value: n };
      throw new TypeError(`Cannot convert value to AST: ${z(n)}.`);
    }
    Ot(!1, "Unexpected input type: " + z(t));
  }
  var mh = /^-?(?:0|[1-9][0-9]*)$/, ku = new Ht({
    name: "__Schema",
    description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
    fields: () => ({
      description: { type: Ge, resolve: (e) => e.description },
      types: {
        description: "A list of all types supported by this server.",
        type: new pe(new mt(new pe(an))),
        resolve(e) {
          return Object.values(e.getTypeMap());
        }
      },
      queryType: {
        description: "The type that query operations will be rooted at.",
        type: new pe(an),
        resolve: (e) => e.getQueryType()
      },
      mutationType: {
        description: "If this server supports mutation, the type that mutation operations will be rooted at.",
        type: an,
        resolve: (e) => e.getMutationType()
      },
      subscriptionType: {
        description: "If this server support subscription, the type that subscription operations will be rooted at.",
        type: an,
        resolve: (e) => e.getSubscriptionType()
      },
      directives: {
        description: "A list of all directives supported by this server.",
        type: new pe(new mt(new pe(gh))),
        resolve: (e) => e.getDirectives()
      }
    })
  }), gh = new Ht({
    name: "__Directive",
    description: `A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,
    fields: () => ({
      name: { type: new pe(Ge), resolve: (e) => e.name },
      description: { type: Ge, resolve: (e) => e.description },
      isRepeatable: { type: new pe(lt), resolve: (e) => e.isRepeatable },
      locations: { type: new pe(new mt(new pe(Dh))), resolve: (e) => e.locations },
      args: {
        type: new pe(new mt(new pe(ma))),
        args: { includeDeprecated: { type: lt, defaultValue: !1 } },
        resolve(e, { includeDeprecated: t }) {
          return t ? e.args : e.args.filter((n) => n.deprecationReason == null);
        }
      }
    })
  }), Dh = new or({
    name: "__DirectiveLocation",
    description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
    values: {
      QUERY: { value: te.QUERY, description: "Location adjacent to a query operation." },
      MUTATION: { value: te.MUTATION, description: "Location adjacent to a mutation operation." },
      SUBSCRIPTION: {
        value: te.SUBSCRIPTION,
        description: "Location adjacent to a subscription operation."
      },
      FIELD: { value: te.FIELD, description: "Location adjacent to a field." },
      FRAGMENT_DEFINITION: {
        value: te.FRAGMENT_DEFINITION,
        description: "Location adjacent to a fragment definition."
      },
      FRAGMENT_SPREAD: {
        value: te.FRAGMENT_SPREAD,
        description: "Location adjacent to a fragment spread."
      },
      INLINE_FRAGMENT: {
        value: te.INLINE_FRAGMENT,
        description: "Location adjacent to an inline fragment."
      },
      VARIABLE_DEFINITION: {
        value: te.VARIABLE_DEFINITION,
        description: "Location adjacent to a variable definition."
      },
      SCHEMA: { value: te.SCHEMA, description: "Location adjacent to a schema definition." },
      SCALAR: { value: te.SCALAR, description: "Location adjacent to a scalar definition." },
      OBJECT: { value: te.OBJECT, description: "Location adjacent to an object type definition." },
      FIELD_DEFINITION: {
        value: te.FIELD_DEFINITION,
        description: "Location adjacent to a field definition."
      },
      ARGUMENT_DEFINITION: {
        value: te.ARGUMENT_DEFINITION,
        description: "Location adjacent to an argument definition."
      },
      INTERFACE: {
        value: te.INTERFACE,
        description: "Location adjacent to an interface definition."
      },
      UNION: { value: te.UNION, description: "Location adjacent to a union definition." },
      ENUM: { value: te.ENUM, description: "Location adjacent to an enum definition." },
      ENUM_VALUE: {
        value: te.ENUM_VALUE,
        description: "Location adjacent to an enum value definition."
      },
      INPUT_OBJECT: {
        value: te.INPUT_OBJECT,
        description: "Location adjacent to an input object type definition."
      },
      INPUT_FIELD_DEFINITION: {
        value: te.INPUT_FIELD_DEFINITION,
        description: "Location adjacent to an input object field definition."
      }
    }
  }), an = new Ht({
    name: "__Type",
    description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
    fields: () => ({
      kind: {
        type: new pe(bh),
        resolve(e) {
          if (Gt(e)) return xe.SCALAR;
          if (Ie(e)) return xe.OBJECT;
          if (ke(e)) return xe.INTERFACE;
          if (Mt(e)) return xe.UNION;
          if (Tt(e)) return xe.ENUM;
          if (Ke(e)) return xe.INPUT_OBJECT;
          if (Ze(e)) return xe.LIST;
          if (Te(e)) return xe.NON_NULL;
          Ot(!1, `Unexpected type: "${z(e)}".`);
        }
      },
      name: { type: Ge, resolve: (e) => "name" in e ? e.name : void 0 },
      description: { type: Ge, resolve: (e) => "description" in e ? e.description : void 0 },
      specifiedByURL: {
        type: Ge,
        resolve: (e) => "specifiedByURL" in e ? e.specifiedByURL : void 0
      },
      fields: {
        type: new mt(new pe(Eh)),
        args: { includeDeprecated: { type: lt, defaultValue: !1 } },
        resolve(e, { includeDeprecated: t }) {
          if (Ie(e) || ke(e)) {
            let n = Object.values(e.getFields());
            return t ? n : n.filter((r) => r.deprecationReason == null);
          }
        }
      },
      interfaces: {
        type: new mt(new pe(an)),
        resolve(e) {
          if (Ie(e) || ke(e)) return e.getInterfaces();
        }
      },
      possibleTypes: {
        type: new mt(new pe(an)),
        resolve(e, t, n, { schema: r }) {
          if (bn(e)) return r.getPossibleTypes(e);
        }
      },
      enumValues: {
        type: new mt(new pe(yh)),
        args: { includeDeprecated: { type: lt, defaultValue: !1 } },
        resolve(e, { includeDeprecated: t }) {
          if (Tt(e)) {
            let n = e.getValues();
            return t ? n : n.filter((r) => r.deprecationReason == null);
          }
        }
      },
      inputFields: {
        type: new mt(new pe(ma)),
        args: { includeDeprecated: { type: lt, defaultValue: !1 } },
        resolve(e, { includeDeprecated: t }) {
          if (Ke(e)) {
            let n = Object.values(e.getFields());
            return t ? n : n.filter((r) => r.deprecationReason == null);
          }
        }
      },
      ofType: { type: an, resolve: (e) => "ofType" in e ? e.ofType : void 0 },
      isOneOf: {
        type: lt,
        resolve: (e) => {
          if (Ke(e)) return e.isOneOf;
        }
      }
    })
  }), Eh = new Ht({
    name: "__Field",
    description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
    fields: () => ({
      name: { type: new pe(Ge), resolve: (e) => e.name },
      description: { type: Ge, resolve: (e) => e.description },
      args: {
        type: new pe(new mt(new pe(ma))),
        args: { includeDeprecated: { type: lt, defaultValue: !1 } },
        resolve(e, { includeDeprecated: t }) {
          return t ? e.args : e.args.filter((n) => n.deprecationReason == null);
        }
      },
      type: { type: new pe(an), resolve: (e) => e.type },
      isDeprecated: { type: new pe(lt), resolve: (e) => e.deprecationReason != null },
      deprecationReason: { type: Ge, resolve: (e) => e.deprecationReason }
    })
  }), ma = new Ht({
    name: "__InputValue",
    description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
    fields: () => ({
      name: { type: new pe(Ge), resolve: (e) => e.name },
      description: { type: Ge, resolve: (e) => e.description },
      type: { type: new pe(an), resolve: (e) => e.type },
      defaultValue: {
        type: Ge,
        description: "A GraphQL-formatted string representing the default value for this input value.",
        resolve(e) {
          let { type: t, defaultValue: n } = e, r = Ji(n, t);
          return r ? st(r) : null;
        }
      },
      isDeprecated: { type: new pe(lt), resolve: (e) => e.deprecationReason != null },
      deprecationReason: { type: Ge, resolve: (e) => e.deprecationReason }
    })
  }), yh = new Ht({
    name: "__EnumValue",
    description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
    fields: () => ({
      name: { type: new pe(Ge), resolve: (e) => e.name },
      description: { type: Ge, resolve: (e) => e.description },
      isDeprecated: { type: new pe(lt), resolve: (e) => e.deprecationReason != null },
      deprecationReason: { type: Ge, resolve: (e) => e.deprecationReason }
    })
  }), xe;
  (function(e) {
    e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.INPUT_OBJECT = "INPUT_OBJECT", e.LIST = "LIST", e.NON_NULL = "NON_NULL";
  })(xe || (xe = {}));
  var bh = new or({
    name: "__TypeKind",
    description: "An enum describing what kind of type a given `__Type` is.",
    values: {
      SCALAR: { value: xe.SCALAR, description: "Indicates this type is a scalar." },
      OBJECT: {
        value: xe.OBJECT,
        description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
      },
      INTERFACE: {
        value: xe.INTERFACE,
        description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
      },
      UNION: {
        value: xe.UNION,
        description: "Indicates this type is a union. `possibleTypes` is a valid field."
      },
      ENUM: {
        value: xe.ENUM,
        description: "Indicates this type is an enum. `enumValues` is a valid field."
      },
      INPUT_OBJECT: {
        value: xe.INPUT_OBJECT,
        description: "Indicates this type is an input object. `inputFields` is a valid field."
      },
      LIST: {
        value: xe.LIST,
        description: "Indicates this type is a list. `ofType` is a valid field."
      },
      NON_NULL: {
        value: xe.NON_NULL,
        description: "Indicates this type is a non-null. `ofType` is a valid field."
      }
    }
  }), Xi = {
    name: "__schema",
    type: new pe(ku),
    description: "Access the current type schema of this server.",
    args: [],
    resolve: (e, t, n, { schema: r }) => r,
    deprecationReason: void 0,
    extensions: /* @__PURE__ */ Object.create(null),
    astNode: void 0
  }, Qi = {
    name: "__type",
    type: an,
    description: "Request the type information of a single type.",
    args: [
      {
        name: "name",
        description: void 0,
        type: new pe(Ge),
        defaultValue: void 0,
        deprecationReason: void 0,
        extensions: /* @__PURE__ */ Object.create(null),
        astNode: void 0
      }
    ],
    resolve: (e, { name: t }, n, { schema: r }) => r.getType(t),
    deprecationReason: void 0,
    extensions: /* @__PURE__ */ Object.create(null),
    astNode: void 0
  }, Zi = {
    name: "__typename",
    type: new pe(Ge),
    description: "The name of the current Object type at runtime.",
    args: [],
    resolve: (e, t, n, { parentType: r }) => r.name,
    deprecationReason: void 0,
    extensions: /* @__PURE__ */ Object.create(null),
    astNode: void 0
  }, ga = Object.freeze([ku, gh, Dh, an, Eh, ma, yh, bh]);
  function vh(e) {
    return ga.some(({ name: t }) => e.name === t);
  }
  function k7(e) {
    return nn(e, Ru);
  }
  function R7(e) {
    if (!k7(e)) throw new Error(`Expected ${z(e)} to be a GraphQL schema.`);
    return e;
  }
  var Ru = class {
    constructor(e) {
      var t, n;
      this.__validationErrors = e.assumeValid === !0 ? [] : void 0, kn(e) || Ne(!1, "Must provide configuration object."), !e.types || Array.isArray(e.types) || Ne(!1, `"types" must be Array if provided but got: ${z(e.types)}.`), !e.directives || Array.isArray(e.directives) || Ne(!1, `"directives" must be Array if provided but got: ${z(e.directives)}.`), this.description = e.description, this.extensions = qt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._queryType = e.query, this._mutationType = e.mutation, this._subscriptionType = e.subscription, this._directives = (n = e.directives) !== null && n !== void 0 ? n : hi;
      let r = new Set(e.types);
      if (e.types != null) for (let i of e.types) r.delete(i), on(i, r);
      this._queryType != null && on(this._queryType, r), this._mutationType != null && on(this._mutationType, r), this._subscriptionType != null && on(this._subscriptionType, r);
      for (let i of this._directives) if (ch(i)) for (let s of i.args) on(s.type, r);
      on(ku, r), this._typeMap = /* @__PURE__ */ Object.create(null), this._subTypeMap = /* @__PURE__ */ Object.create(null), this._implementationsMap = /* @__PURE__ */ Object.create(null);
      for (let i of r) {
        if (i == null) continue;
        let s = i.name;
        if (s || Ne(!1, "One of the provided types for building the Schema is missing a name."), this._typeMap[s] !== void 0)
          throw new Error(
            `Schema must contain uniquely named types but contains multiple types named "${s}".`
          );
        if (this._typeMap[s] = i, ke(i)) {
          for (let a of i.getInterfaces())
            if (ke(a)) {
              let o = this._implementationsMap[a.name];
              o === void 0 && (o = this._implementationsMap[a.name] = { objects: [], interfaces: [] }), o.interfaces.push(i);
            }
        } else if (Ie(i)) {
          for (let a of i.getInterfaces())
            if (ke(a)) {
              let o = this._implementationsMap[a.name];
              o === void 0 && (o = this._implementationsMap[a.name] = { objects: [], interfaces: [] }), o.objects.push(i);
            }
        }
      }
    }
    get [Symbol.toStringTag]() {
      return "GraphQLSchema";
    }
    getQueryType() {
      return this._queryType;
    }
    getMutationType() {
      return this._mutationType;
    }
    getSubscriptionType() {
      return this._subscriptionType;
    }
    getRootType(e) {
      switch (e) {
        case Ct.QUERY:
          return this.getQueryType();
        case Ct.MUTATION:
          return this.getMutationType();
        case Ct.SUBSCRIPTION:
          return this.getSubscriptionType();
      }
    }
    getTypeMap() {
      return this._typeMap;
    }
    getType(e) {
      return this.getTypeMap()[e];
    }
    getPossibleTypes(e) {
      return Mt(e) ? e.getTypes() : this.getImplementations(e).objects;
    }
    getImplementations(e) {
      return this._implementationsMap[e.name] ?? { objects: [], interfaces: [] };
    }
    isSubType(e, t) {
      let n = this._subTypeMap[e.name];
      if (n === void 0) {
        if (n = /* @__PURE__ */ Object.create(null), Mt(e)) for (let r of e.getTypes()) n[r.name] = !0;
        else {
          let r = this.getImplementations(e);
          for (let i of r.objects) n[i.name] = !0;
          for (let i of r.interfaces) n[i.name] = !0;
        }
        this._subTypeMap[e.name] = n;
      }
      return n[t.name] !== void 0;
    }
    getDirectives() {
      return this._directives;
    }
    getDirective(e) {
      return this.getDirectives().find((t) => t.name === e);
    }
    toConfig() {
      return {
        description: this.description,
        query: this.getQueryType(),
        mutation: this.getMutationType(),
        subscription: this.getSubscriptionType(),
        types: Object.values(this.getTypeMap()),
        directives: this.getDirectives(),
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes,
        assumeValid: this.__validationErrors !== void 0
      };
    }
  };
  function on(e, t) {
    let n = qe(e);
    if (!t.has(n)) {
      if (t.add(n), Mt(n)) for (let r of n.getTypes()) on(r, t);
      else if (Ie(n) || ke(n)) {
        for (let r of n.getInterfaces()) on(r, t);
        for (let r of Object.values(n.getFields())) {
          on(r.type, t);
          for (let i of r.args) on(i.type, t);
        }
      } else if (Ke(n)) for (let r of Object.values(n.getFields())) on(r.type, t);
    }
    return t;
  }
  function M7(e) {
    if (R7(e), e.__validationErrors) return e.__validationErrors;
    let t = new P7(e);
    V7(t), $7(t), U7(t);
    let n = t.getErrors();
    return e.__validationErrors = n, n;
  }
  function B7(e) {
    let t = M7(e);
    if (t.length !== 0)
      throw new Error(
        t.map((n) => n.message).join(`

`)
      );
  }
  var P7 = class {
    constructor(e) {
      this._errors = [], this.schema = e;
    }
    reportError(e, t) {
      let n = Array.isArray(t) ? t.filter(Boolean) : t;
      this._errors.push(new q(e, { nodes: n }));
    }
    getErrors() {
      return this._errors;
    }
  };
  function V7(e) {
    let t = e.schema, n = t.getQueryType();
    if (!n) e.reportError("Query root type must be provided.", t.astNode);
    else if (!Ie(n)) {
      var r;
      e.reportError(
        `Query root type must be Object type, it cannot be ${z(n)}.`,
        (r = Mu(t, Ct.QUERY)) !== null && r !== void 0 ? r : n.astNode
      );
    }
    let i = t.getMutationType();
    if (i && !Ie(i)) {
      var s;
      e.reportError(
        `Mutation root type must be Object type if provided, it cannot be ${z(i)}.`,
        (s = Mu(t, Ct.MUTATION)) !== null && s !== void 0 ? s : i.astNode
      );
    }
    let a = t.getSubscriptionType();
    if (a && !Ie(a)) {
      var o;
      e.reportError(
        `Subscription root type must be Object type if provided, it cannot be ${z(a)}.`,
        (o = Mu(t, Ct.SUBSCRIPTION)) !== null && o !== void 0 ? o : a.astNode
      );
    }
  }
  function Mu(e, t) {
    var n;
    return (n = [e.astNode, ...e.extensionASTNodes].flatMap((r) => {
      var i;
      return (i = r == null ? void 0 : r.operationTypes) !== null && i !== void 0 ? i : [];
    }).find((r) => r.operation === t)) === null || n === void 0 ? void 0 : n.type;
  }
  function $7(e) {
    for (let n of e.schema.getDirectives()) {
      if (!ch(n)) {
        e.reportError(`Expected directive but got: ${z(n)}.`, n == null ? void 0 : n.astNode);
        continue;
      }
      Ar(e, n);
      for (let r of n.args)
        if (Ar(e, r), Bt(r.type) || e.reportError(
          `The type of @${n.name}(${r.name}:) must be Input Type but got: ${z(r.type)}.`,
          r.astNode
        ), Wi(r) && r.deprecationReason != null) {
          var t;
          e.reportError(`Required argument @${n.name}(${r.name}:) cannot be deprecated.`, [
            Bu(r.astNode),
            (t = r.astNode) === null || t === void 0 ? void 0 : t.type
          ]);
        }
    }
  }
  function Ar(e, t) {
    t.name.startsWith("__") && e.reportError(
      `Name "${t.name}" must not begin with "__", which is reserved by GraphQL introspection.`,
      t.astNode
    );
  }
  function U7(e) {
    let t = J7(e), n = e.schema.getTypeMap();
    for (let r of Object.values(n)) {
      if (!A7(r)) {
        e.reportError(`Expected GraphQL named type but got: ${z(r)}.`, r.astNode);
        continue;
      }
      vh(r) || Ar(e, r), Ie(r) || ke(r) ? (j7(e, r), K7(e, r)) : Mt(r) ? H7(e, r) : Tt(r) ? W7(e, r) : Ke(r) && (z7(e, r), t(r));
    }
  }
  function j7(e, t) {
    let n = Object.values(t.getFields());
    n.length === 0 && e.reportError(`Type ${t.name} must define one or more fields.`, [
      t.astNode,
      ...t.extensionASTNodes
    ]);
    for (let a of n) {
      if (Ar(e, a), !Sr(a.type)) {
        var r;
        e.reportError(
          `The type of ${t.name}.${a.name} must be Output Type but got: ${z(a.type)}.`,
          (r = a.astNode) === null || r === void 0 ? void 0 : r.type
        );
      }
      for (let o of a.args) {
        let u = o.name;
        if (Ar(e, o), !Bt(o.type)) {
          var i;
          e.reportError(
            `The type of ${t.name}.${a.name}(${u}:) must be Input Type but got: ${z(o.type)}.`,
            (i = o.astNode) === null || i === void 0 ? void 0 : i.type
          );
        }
        if (Wi(o) && o.deprecationReason != null) {
          var s;
          e.reportError(`Required argument ${t.name}.${a.name}(${u}:) cannot be deprecated.`, [
            Bu(o.astNode),
            (s = o.astNode) === null || s === void 0 ? void 0 : s.type
          ]);
        }
      }
    }
  }
  function K7(e, t) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let r of t.getInterfaces()) {
      if (!ke(r)) {
        e.reportError(
          `Type ${z(t)} must only implement Interface types, it cannot implement ${z(r)}.`,
          es(t, r)
        );
        continue;
      }
      if (t === r) {
        e.reportError(
          `Type ${t.name} cannot implement itself because it would create a circular reference.`,
          es(t, r)
        );
        continue;
      }
      if (n[r.name]) {
        e.reportError(`Type ${t.name} can only implement ${r.name} once.`, es(t, r));
        continue;
      }
      n[r.name] = !0, G7(e, t, r), q7(e, t, r);
    }
  }
  function q7(e, t, n) {
    let r = t.getFields();
    for (let u of Object.values(n.getFields())) {
      let l = u.name, c = r[l];
      if (!c) {
        e.reportError(
          `Interface field ${n.name}.${l} expected but ${t.name} does not provide it.`,
          [u.astNode, t.astNode, ...t.extensionASTNodes]
        );
        continue;
      }
      if (!fi(e.schema, c.type, u.type)) {
        var i, s;
        e.reportError(
          `Interface field ${n.name}.${l} expects type ${z(u.type)} but ${t.name}.${l} is type ${z(
            c.type
          )}.`,
          [
            (i = u.astNode) === null || i === void 0 ? void 0 : i.type,
            (s = c.astNode) === null || s === void 0 ? void 0 : s.type
          ]
        );
      }
      for (let f of u.args) {
        let p = f.name, m = c.args.find((g) => g.name === p);
        if (!m) {
          e.reportError(
            `Interface field argument ${n.name}.${l}(${p}:) expected but ${t.name}.${l} does not provide it.`,
            [f.astNode, c.astNode]
          );
          continue;
        }
        if (!oh(f.type, m.type)) {
          var a, o;
          e.reportError(
            `Interface field argument ${n.name}.${l}(${p}:) expects type ${z(f.type)} but ${t.name}.${l}(${p}:) is type ${z(m.type)}.`,
            [
              (a = f.astNode) === null || a === void 0 ? void 0 : a.type,
              (o = m.astNode) === null || o === void 0 ? void 0 : o.type
            ]
          );
        }
      }
      for (let f of c.args) {
        let p = f.name;
        !u.args.find((m) => m.name === p) && Wi(f) && e.reportError(
          `Object field ${t.name}.${l} includes required argument ${p} that is missing from the Interface field ${n.name}.${l}.`,
          [f.astNode, u.astNode]
        );
      }
    }
  }
  function G7(e, t, n) {
    let r = t.getInterfaces();
    for (let i of n.getInterfaces())
      r.includes(i) || e.reportError(
        i === t ? `Type ${t.name} cannot implement ${n.name} because it would create a circular reference.` : `Type ${t.name} must implement ${i.name} because it is implemented by ${n.name}.`,
        [...es(n, i), ...es(t, n)]
      );
  }
  function H7(e, t) {
    let n = t.getTypes();
    n.length === 0 && e.reportError(`Union type ${t.name} must define one or more member types.`, [
      t.astNode,
      ...t.extensionASTNodes
    ]);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i of n) {
      if (r[i.name]) {
        e.reportError(`Union type ${t.name} can only include type ${i.name} once.`, _h(t, i.name));
        continue;
      }
      r[i.name] = !0, Ie(i) || e.reportError(
        `Union type ${t.name} can only include Object types, it cannot include ${z(i)}.`,
        _h(t, String(i))
      );
    }
  }
  function W7(e, t) {
    let n = t.getValues();
    n.length === 0 && e.reportError(`Enum type ${t.name} must define one or more values.`, [
      t.astNode,
      ...t.extensionASTNodes
    ]);
    for (let r of n) Ar(e, r);
  }
  function z7(e, t) {
    let n = Object.values(t.getFields());
    n.length === 0 && e.reportError(`Input Object type ${t.name} must define one or more fields.`, [
      t.astNode,
      ...t.extensionASTNodes
    ]);
    for (let s of n) {
      if (Ar(e, s), !Bt(s.type)) {
        var r;
        e.reportError(
          `The type of ${t.name}.${s.name} must be Input Type but got: ${z(s.type)}.`,
          (r = s.astNode) === null || r === void 0 ? void 0 : r.type
        );
      }
      if (ah(s) && s.deprecationReason != null) {
        var i;
        e.reportError(`Required input field ${t.name}.${s.name} cannot be deprecated.`, [
          Bu(s.astNode),
          (i = s.astNode) === null || i === void 0 ? void 0 : i.type
        ]);
      }
      t.isOneOf && Y7(t, s, e);
    }
  }
  function Y7(e, t, n) {
    if (Te(t.type)) {
      var r;
      n.reportError(
        `OneOf input field ${e.name}.${t.name} must be nullable.`,
        (r = t.astNode) === null || r === void 0 ? void 0 : r.type
      );
    }
    t.defaultValue !== void 0 && n.reportError(`OneOf input field ${e.name}.${t.name} cannot have a default value.`, t.astNode);
  }
  function J7(e) {
    let t = /* @__PURE__ */ Object.create(null), n = [], r = /* @__PURE__ */ Object.create(null);
    return i;
    function i(s) {
      if (t[s.name]) return;
      t[s.name] = !0, r[s.name] = n.length;
      let a = Object.values(s.getFields());
      for (let o of a)
        if (Te(o.type) && Ke(o.type.ofType)) {
          let u = o.type.ofType, l = r[u.name];
          if (n.push(o), l === void 0) i(u);
          else {
            let c = n.slice(l), f = c.map((p) => p.name).join(".");
            e.reportError(
              `Cannot reference Input Object "${u.name}" within itself through a series of non-null fields: "${f}".`,
              c.map((p) => p.astNode)
            );
          }
          n.pop();
        }
      r[s.name] = void 0;
    }
  }
  function es(e, t) {
    let { astNode: n, extensionASTNodes: r } = e;
    return (n != null ? [n, ...r] : r).flatMap((i) => {
      var s;
      return (s = i.interfaces) !== null && s !== void 0 ? s : [];
    }).filter((i) => i.name.value === t.name);
  }
  function _h(e, t) {
    let { astNode: n, extensionASTNodes: r } = e;
    return (n != null ? [n, ...r] : r).flatMap((i) => {
      var s;
      return (s = i.types) !== null && s !== void 0 ? s : [];
    }).filter((i) => i.name.value === t);
  }
  function Bu(e) {
    var t;
    return e == null || (t = e.directives) === null || t === void 0 ? void 0 : t.find((n) => n.name.value === Ou.name);
  }
  function Vt(e, t) {
    switch (t.kind) {
      case b.LIST_TYPE: {
        let n = Vt(e, t.type);
        return n && new mt(n);
      }
      case b.NON_NULL_TYPE: {
        let n = Vt(e, t.type);
        return n && new pe(n);
      }
      case b.NAMED_TYPE:
        return e.getType(t.name.value);
    }
  }
  var Nh = class {
    constructor(e, t, n) {
      this._schema = e, this._typeStack = [], this._parentTypeStack = [], this._inputTypeStack = [], this._fieldDefStack = [], this._defaultValueStack = [], this._directive = null, this._argument = null, this._enumValue = null, this._getFieldDef = n ?? X7, t && (Bt(t) && this._inputTypeStack.push(t), Pt(t) && this._parentTypeStack.push(t), Sr(t) && this._typeStack.push(t));
    }
    get [Symbol.toStringTag]() {
      return "TypeInfo";
    }
    getType() {
      if (this._typeStack.length > 0) return this._typeStack[this._typeStack.length - 1];
    }
    getParentType() {
      if (this._parentTypeStack.length > 0)
        return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
    getInputType() {
      if (this._inputTypeStack.length > 0)
        return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
    getParentInputType() {
      if (this._inputTypeStack.length > 1)
        return this._inputTypeStack[this._inputTypeStack.length - 2];
    }
    getFieldDef() {
      if (this._fieldDefStack.length > 0) return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
    getDefaultValue() {
      if (this._defaultValueStack.length > 0)
        return this._defaultValueStack[this._defaultValueStack.length - 1];
    }
    getDirective() {
      return this._directive;
    }
    getArgument() {
      return this._argument;
    }
    getEnumValue() {
      return this._enumValue;
    }
    enter(e) {
      let t = this._schema;
      switch (e.kind) {
        case b.SELECTION_SET: {
          let r = qe(this.getType());
          this._parentTypeStack.push(Pt(r) ? r : void 0);
          break;
        }
        case b.FIELD: {
          let r = this.getParentType(), i, s;
          r && (i = this._getFieldDef(t, r, e), i && (s = i.type)), this._fieldDefStack.push(i), this._typeStack.push(Sr(s) ? s : void 0);
          break;
        }
        case b.DIRECTIVE:
          this._directive = t.getDirective(e.name.value);
          break;
        case b.OPERATION_DEFINITION: {
          let r = t.getRootType(e.operation);
          this._typeStack.push(Ie(r) ? r : void 0);
          break;
        }
        case b.INLINE_FRAGMENT:
        case b.FRAGMENT_DEFINITION: {
          let r = e.typeCondition, i = r ? Vt(t, r) : qe(this.getType());
          this._typeStack.push(Sr(i) ? i : void 0);
          break;
        }
        case b.VARIABLE_DEFINITION: {
          let r = Vt(t, e.type);
          this._inputTypeStack.push(Bt(r) ? r : void 0);
          break;
        }
        case b.ARGUMENT: {
          var n;
          let r, i, s = (n = this.getDirective()) !== null && n !== void 0 ? n : this.getFieldDef();
          s && (r = s.args.find((a) => a.name === e.name.value), r && (i = r.type)), this._argument = r, this._defaultValueStack.push(r ? r.defaultValue : void 0), this._inputTypeStack.push(Bt(i) ? i : void 0);
          break;
        }
        case b.LIST: {
          let r = wu(this.getInputType()), i = Ze(r) ? r.ofType : r;
          this._defaultValueStack.push(void 0), this._inputTypeStack.push(Bt(i) ? i : void 0);
          break;
        }
        case b.OBJECT_FIELD: {
          let r = qe(this.getInputType()), i, s;
          Ke(r) && (s = r.getFields()[e.name.value], s && (i = s.type)), this._defaultValueStack.push(s ? s.defaultValue : void 0), this._inputTypeStack.push(Bt(i) ? i : void 0);
          break;
        }
        case b.ENUM: {
          let r = qe(this.getInputType()), i;
          Tt(r) && (i = r.getValue(e.value)), this._enumValue = i;
          break;
        }
      }
    }
    leave(e) {
      switch (e.kind) {
        case b.SELECTION_SET:
          this._parentTypeStack.pop();
          break;
        case b.FIELD:
          this._fieldDefStack.pop(), this._typeStack.pop();
          break;
        case b.DIRECTIVE:
          this._directive = null;
          break;
        case b.OPERATION_DEFINITION:
        case b.INLINE_FRAGMENT:
        case b.FRAGMENT_DEFINITION:
          this._typeStack.pop();
          break;
        case b.VARIABLE_DEFINITION:
          this._inputTypeStack.pop();
          break;
        case b.ARGUMENT:
          this._argument = null, this._defaultValueStack.pop(), this._inputTypeStack.pop();
          break;
        case b.LIST:
        case b.OBJECT_FIELD:
          this._defaultValueStack.pop(), this._inputTypeStack.pop();
          break;
        case b.ENUM:
          this._enumValue = null;
          break;
      }
    }
  };
  function X7(e, t, n) {
    let r = n.name.value;
    if (r === Xi.name && e.getQueryType() === t) return Xi;
    if (r === Qi.name && e.getQueryType() === t) return Qi;
    if (r === Zi.name && Pt(t)) return Zi;
    if (Ie(t) || ke(t)) return t.getFields()[r];
  }
  function Ch(e, t) {
    return {
      enter(...n) {
        let r = n[0];
        e.enter(r);
        let i = ca(t, r.kind).enter;
        if (i) {
          let s = i.apply(t, n);
          return s !== void 0 && (e.leave(r), bu(s) && e.enter(s)), s;
        }
      },
      leave(...n) {
        let r = n[0], i = ca(t, r.kind).leave, s;
        return i && (s = i.apply(t, n)), e.leave(r), s;
      }
    };
  }
  function Q7(e) {
    return e.kind === b.OPERATION_DEFINITION || e.kind === b.FRAGMENT_DEFINITION;
  }
  function Z7(e) {
    return e.kind === b.SCHEMA_DEFINITION || ts(e) || e.kind === b.DIRECTIVE_DEFINITION;
  }
  function ts(e) {
    return e.kind === b.SCALAR_TYPE_DEFINITION || e.kind === b.OBJECT_TYPE_DEFINITION || e.kind === b.INTERFACE_TYPE_DEFINITION || e.kind === b.UNION_TYPE_DEFINITION || e.kind === b.ENUM_TYPE_DEFINITION || e.kind === b.INPUT_OBJECT_TYPE_DEFINITION;
  }
  function e9(e) {
    return e.kind === b.SCHEMA_EXTENSION || Pu(e);
  }
  function Pu(e) {
    return e.kind === b.SCALAR_TYPE_EXTENSION || e.kind === b.OBJECT_TYPE_EXTENSION || e.kind === b.INTERFACE_TYPE_EXTENSION || e.kind === b.UNION_TYPE_EXTENSION || e.kind === b.ENUM_TYPE_EXTENSION || e.kind === b.INPUT_OBJECT_TYPE_EXTENSION;
  }
  function Th(e) {
    return {
      Document(t) {
        for (let n of t.definitions)
          if (!Q7(n)) {
            let r = n.kind === b.SCHEMA_DEFINITION || n.kind === b.SCHEMA_EXTENSION ? "schema" : '"' + n.name.value + '"';
            e.reportError(new q(`The ${r} definition is not executable.`, { nodes: n }));
          }
        return !1;
      }
    };
  }
  function t9(e) {
    return {
      Field(t) {
        let n = e.getParentType();
        if (n && !e.getFieldDef()) {
          let r = e.getSchema(), i = t.name.value, s = ir("to use an inline fragment on", n9(r, n, i));
          s === "" && (s = ir(r9(n, i))), e.reportError(new q(`Cannot query field "${i}" on type "${n.name}".` + s, { nodes: t }));
        }
      }
    };
  }
  function n9(e, t, n) {
    if (!bn(t)) return [];
    let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ Object.create(null);
    for (let a of e.getPossibleTypes(t))
      if (a.getFields()[n]) {
        r.add(a), i[a.name] = 1;
        for (let o of a.getInterfaces()) {
          var s;
          o.getFields()[n] && (r.add(o), i[o.name] = ((s = i[o.name]) !== null && s !== void 0 ? s : 0) + 1);
        }
      }
    return [...r].sort((a, o) => {
      let u = i[o.name] - i[a.name];
      return u !== 0 ? u : ke(a) && e.isSubType(a, o) ? -1 : ke(o) && e.isSubType(o, a) ? 1 : Cu(a.name, o.name);
    }).map((a) => a.name);
  }
  function r9(e, t) {
    if (Ie(e) || ke(e)) {
      let n = Object.keys(e.getFields());
      return Tr(t, n);
    }
    return [];
  }
  function i9(e) {
    return {
      InlineFragment(t) {
        let n = t.typeCondition;
        if (n) {
          let r = Vt(e.getSchema(), n);
          if (r && !Pt(r)) {
            let i = st(n);
            e.reportError(
              new q(`Fragment cannot condition on non composite type "${i}".`, { nodes: n })
            );
          }
        }
      },
      FragmentDefinition(t) {
        let n = Vt(e.getSchema(), t.typeCondition);
        if (n && !Pt(n)) {
          let r = st(t.typeCondition);
          e.reportError(
            new q(`Fragment "${t.name.value}" cannot condition on non composite type "${r}".`, {
              nodes: t.typeCondition
            })
          );
        }
      }
    };
  }
  function s9(e) {
    return {
      ...Sh(e),
      Argument(t) {
        let n = e.getArgument(), r = e.getFieldDef(), i = e.getParentType();
        if (!n && r && i) {
          let s = t.name.value, a = r.args.map((u) => u.name), o = Tr(s, a);
          e.reportError(
            new q(`Unknown argument "${s}" on field "${i.name}.${r.name}".` + ir(o), { nodes: t })
          );
        }
      }
    };
  }
  function Sh(e) {
    let t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : hi;
    for (let a of r) t[a.name] = a.args.map((o) => o.name);
    let i = e.getDocument().definitions;
    for (let a of i)
      if (a.kind === b.DIRECTIVE_DEFINITION) {
        var s;
        let o = (s = a.arguments) !== null && s !== void 0 ? s : [];
        t[a.name.value] = o.map((u) => u.name.value);
      }
    return {
      Directive(a) {
        let o = a.name.value, u = t[o];
        if (a.arguments && u)
          for (let l of a.arguments) {
            let c = l.name.value;
            if (!u.includes(c)) {
              let f = Tr(c, u);
              e.reportError(
                new q(`Unknown argument "${c}" on directive "@${o}".` + ir(f), { nodes: l })
              );
            }
          }
        return !1;
      }
    };
  }
  function Ah(e) {
    let t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : hi;
    for (let s of r) t[s.name] = s.locations;
    let i = e.getDocument().definitions;
    for (let s of i)
      s.kind === b.DIRECTIVE_DEFINITION && (t[s.name.value] = s.locations.map((a) => a.value));
    return {
      Directive(s, a, o, u, l) {
        let c = s.name.value, f = t[c];
        if (!f) {
          e.reportError(new q(`Unknown directive "@${c}".`, { nodes: s }));
          return;
        }
        let p = a9(l);
        p && !f.includes(p) && e.reportError(new q(`Directive "@${c}" may not be used on ${p}.`, { nodes: s }));
      }
    };
  }
  function a9(e) {
    let t = e[e.length - 1];
    switch ("kind" in t || Ot(), t.kind) {
      case b.OPERATION_DEFINITION:
        return o9(t.operation);
      case b.FIELD:
        return te.FIELD;
      case b.FRAGMENT_SPREAD:
        return te.FRAGMENT_SPREAD;
      case b.INLINE_FRAGMENT:
        return te.INLINE_FRAGMENT;
      case b.FRAGMENT_DEFINITION:
        return te.FRAGMENT_DEFINITION;
      case b.VARIABLE_DEFINITION:
        return te.VARIABLE_DEFINITION;
      case b.SCHEMA_DEFINITION:
      case b.SCHEMA_EXTENSION:
        return te.SCHEMA;
      case b.SCALAR_TYPE_DEFINITION:
      case b.SCALAR_TYPE_EXTENSION:
        return te.SCALAR;
      case b.OBJECT_TYPE_DEFINITION:
      case b.OBJECT_TYPE_EXTENSION:
        return te.OBJECT;
      case b.FIELD_DEFINITION:
        return te.FIELD_DEFINITION;
      case b.INTERFACE_TYPE_DEFINITION:
      case b.INTERFACE_TYPE_EXTENSION:
        return te.INTERFACE;
      case b.UNION_TYPE_DEFINITION:
      case b.UNION_TYPE_EXTENSION:
        return te.UNION;
      case b.ENUM_TYPE_DEFINITION:
      case b.ENUM_TYPE_EXTENSION:
        return te.ENUM;
      case b.ENUM_VALUE_DEFINITION:
        return te.ENUM_VALUE;
      case b.INPUT_OBJECT_TYPE_DEFINITION:
      case b.INPUT_OBJECT_TYPE_EXTENSION:
        return te.INPUT_OBJECT;
      case b.INPUT_VALUE_DEFINITION: {
        let n = e[e.length - 3];
        return "kind" in n || Ot(), n.kind === b.INPUT_OBJECT_TYPE_DEFINITION ? te.INPUT_FIELD_DEFINITION : te.ARGUMENT_DEFINITION;
      }
      default:
        Ot(!1, "Unexpected kind: " + z(t.kind));
    }
  }
  function o9(e) {
    switch (e) {
      case Ct.QUERY:
        return te.QUERY;
      case Ct.MUTATION:
        return te.MUTATION;
      case Ct.SUBSCRIPTION:
        return te.SUBSCRIPTION;
    }
  }
  function u9(e) {
    return {
      FragmentSpread(t) {
        let n = t.name.value;
        e.getFragment(n) || e.reportError(new q(`Unknown fragment "${n}".`, { nodes: t.name }));
      }
    };
  }
  function Fh(e) {
    let t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
    for (let s of e.getDocument().definitions) ts(s) && (r[s.name.value] = !0);
    let i = [...Object.keys(n), ...Object.keys(r)];
    return {
      NamedType(s, a, o, u, l) {
        let c = s.name.value;
        if (!n[c] && !r[c]) {
          var f;
          let p = (f = l[2]) !== null && f !== void 0 ? f : o, m = p != null && l9(p);
          if (m && wh.includes(c)) return;
          let g = Tr(c, m ? wh.concat(i) : i);
          e.reportError(new q(`Unknown type "${c}".` + ir(g), { nodes: s }));
        }
      }
    };
  }
  var wh = [...pa, ...ga].map((e) => e.name);
  function l9(e) {
    return "kind" in e && (Z7(e) || e9(e));
  }
  function c9(e) {
    let t = 0;
    return {
      Document(n) {
        t = n.definitions.filter((r) => r.kind === b.OPERATION_DEFINITION).length;
      },
      OperationDefinition(n) {
        !n.name && t > 1 && e.reportError(
          new q("This anonymous operation must be the only defined operation.", { nodes: n })
        );
      }
    };
  }
  function d9(e) {
    var t, n, r;
    let i = e.getSchema(), s = (t = (n = (r = i == null ? void 0 : i.astNode) !== null && r !== void 0 ? r : i == null ? void 0 : i.getQueryType()) !== null && n !== void 0 ? n : i == null ? void 0 : i.getMutationType()) !== null && t !== void 0 ? t : i == null ? void 0 : i.getSubscriptionType(), a = 0;
    return {
      SchemaDefinition(o) {
        if (s) {
          e.reportError(
            new q("Cannot define a new schema within a schema extension.", { nodes: o })
          );
          return;
        }
        a > 0 && e.reportError(new q("Must provide only one schema definition.", { nodes: o })), ++a;
      }
    };
  }
  var f9 = 3;
  function h9(e) {
    function t(n, r = /* @__PURE__ */ Object.create(null), i = 0) {
      if (n.kind === b.FRAGMENT_SPREAD) {
        let s = n.name.value;
        if (r[s] === !0) return !1;
        let a = e.getFragment(s);
        if (!a) return !1;
        try {
          return r[s] = !0, t(a, r, i);
        } finally {
          r[s] = void 0;
        }
      }
      if (n.kind === b.FIELD && (n.name.value === "fields" || n.name.value === "interfaces" || n.name.value === "possibleTypes" || n.name.value === "inputFields") && (i++, i >= f9))
        return !0;
      if ("selectionSet" in n && n.selectionSet) {
        for (let s of n.selectionSet.selections) if (t(s, r, i)) return !0;
      }
      return !1;
    }
    return {
      Field(n) {
        if ((n.name.value === "__schema" || n.name.value === "__type") && t(n))
          return e.reportError(new q("Maximum introspection depth exceeded", { nodes: [n] })), !1;
      }
    };
  }
  function p9(e) {
    let t = /* @__PURE__ */ Object.create(null), n = [], r = /* @__PURE__ */ Object.create(null);
    return {
      OperationDefinition: () => !1,
      FragmentDefinition(s) {
        return i(s), !1;
      }
    };
    function i(s) {
      if (t[s.name.value]) return;
      let a = s.name.value;
      t[a] = !0;
      let o = e.getFragmentSpreads(s.selectionSet);
      if (o.length !== 0) {
        r[a] = n.length;
        for (let u of o) {
          let l = u.name.value, c = r[l];
          if (n.push(u), c === void 0) {
            let f = e.getFragment(l);
            f && i(f);
          } else {
            let f = n.slice(c), p = f.slice(0, -1).map((m) => '"' + m.name.value + '"').join(", ");
            e.reportError(
              new q(
                `Cannot spread fragment "${l}" within itself` + (p !== "" ? ` via ${p}.` : "."),
                { nodes: f }
              )
            );
          }
          n.pop();
        }
        r[a] = void 0;
      }
    }
  }
  function m9(e) {
    let t = /* @__PURE__ */ Object.create(null);
    return {
      OperationDefinition: {
        enter() {
          t = /* @__PURE__ */ Object.create(null);
        },
        leave(n) {
          let r = e.getRecursiveVariableUsages(n);
          for (let { node: i } of r) {
            let s = i.name.value;
            t[s] !== !0 && e.reportError(
              new q(
                n.name ? `Variable "$${s}" is not defined by operation "${n.name.value}".` : `Variable "$${s}" is not defined.`,
                { nodes: [i, n] }
              )
            );
          }
        }
      },
      VariableDefinition(n) {
        t[n.variable.name.value] = !0;
      }
    };
  }
  function Ih(e) {
    let t = [], n = [];
    return {
      OperationDefinition(r) {
        return t.push(r), !1;
      },
      FragmentDefinition(r) {
        return n.push(r), !1;
      },
      Document: {
        leave() {
          let r = /* @__PURE__ */ Object.create(null);
          for (let i of t)
            for (let s of e.getRecursivelyReferencedFragments(i)) r[s.name.value] = !0;
          for (let i of n) {
            let s = i.name.value;
            r[s] !== !0 && e.reportError(new q(`Fragment "${s}" is never used.`, { nodes: i }));
          }
        }
      }
    };
  }
  function g9(e) {
    let t = [];
    return {
      OperationDefinition: {
        enter() {
          t = [];
        },
        leave(n) {
          let r = /* @__PURE__ */ Object.create(null), i = e.getRecursiveVariableUsages(n);
          for (let { node: s } of i) r[s.name.value] = !0;
          for (let s of t) {
            let a = s.variable.name.value;
            r[a] !== !0 && e.reportError(
              new q(
                n.name ? `Variable "$${a}" is never used in operation "${n.name.value}".` : `Variable "$${a}" is never used.`,
                { nodes: s }
              )
            );
          }
        }
      },
      VariableDefinition(n) {
        t.push(n);
      }
    };
  }
  function Vu(e) {
    switch (e.kind) {
      case b.OBJECT:
        return { ...e, fields: D9(e.fields) };
      case b.LIST:
        return { ...e, values: e.values.map(Vu) };
      case b.INT:
      case b.FLOAT:
      case b.STRING:
      case b.BOOLEAN:
      case b.NULL:
      case b.ENUM:
      case b.VARIABLE:
        return e;
    }
  }
  function D9(e) {
    return e.map((t) => ({ ...t, value: Vu(t.value) })).sort((t, n) => Cu(t.name.value, n.name.value));
  }
  function xh(e) {
    return Array.isArray(e) ? e.map(([t, n]) => `subfields "${t}" conflict because ` + xh(n)).join(" and ") : e;
  }
  function E9(e) {
    let t = new C9(), n = /* @__PURE__ */ new Map();
    return {
      SelectionSet(r) {
        let i = y9(e, n, t, e.getParentType(), r);
        for (let [[s, a], o, u] of i) {
          let l = xh(a);
          e.reportError(
            new q(
              `Fields "${s}" conflict because ${l}. Use different aliases on the fields to fetch both if this was intentional.`,
              { nodes: o.concat(u) }
            )
          );
        }
      }
    };
  }
  function y9(e, t, n, r, i) {
    let s = [], [a, o] = ya(e, t, r, i);
    if (v9(e, s, t, n, a), o.length !== 0)
      for (let u = 0; u < o.length; u++) {
        Da(e, s, t, n, !1, a, o[u]);
        for (let l = u + 1; l < o.length; l++) Ea(e, s, t, n, !1, o[u], o[l]);
      }
    return s;
  }
  function Da(e, t, n, r, i, s, a) {
    let o = e.getFragment(a);
    if (!o) return;
    let [u, l] = ju(e, n, o);
    if (s !== u) {
      $u(e, t, n, r, i, s, u);
      for (let c of l) r.has(c, a, i) || (r.add(c, a, i), Da(e, t, n, r, i, s, c));
    }
  }
  function Ea(e, t, n, r, i, s, a) {
    if (s === a || r.has(s, a, i)) return;
    r.add(s, a, i);
    let o = e.getFragment(s), u = e.getFragment(a);
    if (!o || !u) return;
    let [l, c] = ju(e, n, o), [f, p] = ju(e, n, u);
    $u(e, t, n, r, i, l, f);
    for (let m of p) Ea(e, t, n, r, i, s, m);
    for (let m of c) Ea(e, t, n, r, i, m, a);
  }
  function b9(e, t, n, r, i, s, a, o) {
    let u = [], [l, c] = ya(e, t, i, s), [f, p] = ya(e, t, a, o);
    $u(e, u, t, n, r, l, f);
    for (let m of p) Da(e, u, t, n, r, l, m);
    for (let m of c) Da(e, u, t, n, r, f, m);
    for (let m of c) for (let g of p) Ea(e, u, t, n, r, m, g);
    return u;
  }
  function v9(e, t, n, r, i) {
    for (let [s, a] of Object.entries(i))
      if (a.length > 1)
        for (let o = 0; o < a.length; o++)
          for (let u = o + 1; u < a.length; u++) {
            let l = Lh(e, n, r, !1, s, a[o], a[u]);
            l && t.push(l);
          }
  }
  function $u(e, t, n, r, i, s, a) {
    for (let [o, u] of Object.entries(s)) {
      let l = a[o];
      if (l)
        for (let c of u)
          for (let f of l) {
            let p = Lh(e, n, r, i, o, c, f);
            p && t.push(p);
          }
    }
  }
  function Lh(e, t, n, r, i, s, a) {
    let [o, u, l] = s, [c, f, p] = a, m = r || o !== c && Ie(o) && Ie(c);
    if (!m) {
      let w = u.name.value, A = f.name.value;
      if (w !== A) return [[i, `"${w}" and "${A}" are different fields`], [u], [f]];
      if (!_9(u, f)) return [[i, "they have differing arguments"], [u], [f]];
    }
    let g = l == null ? void 0 : l.type, y = p == null ? void 0 : p.type;
    if (g && y && Uu(g, y))
      return [[i, `they return conflicting types "${z(g)}" and "${z(y)}"`], [u], [f]];
    let S = u.selectionSet, C = f.selectionSet;
    if (S && C) {
      let w = b9(e, t, n, m, qe(g), S, qe(y), C);
      return N9(w, i, u, f);
    }
  }
  function _9(e, t) {
    let n = e.arguments, r = t.arguments;
    if (n === void 0 || n.length === 0) return r === void 0 || r.length === 0;
    if (r === void 0 || r.length === 0 || n.length !== r.length) return !1;
    let i = new Map(r.map(({ name: s, value: a }) => [s.value, a]));
    return n.every((s) => {
      let a = s.value, o = i.get(s.name.value);
      return o === void 0 ? !1 : Oh(a) === Oh(o);
    });
  }
  function Oh(e) {
    return st(Vu(e));
  }
  function Uu(e, t) {
    return Ze(e) ? Ze(t) ? Uu(e.ofType, t.ofType) : !0 : Ze(t) ? !0 : Te(e) ? Te(t) ? Uu(e.ofType, t.ofType) : !0 : Te(t) ? !0 : ci(e) || ci(t) ? e !== t : !1;
  }
  function ya(e, t, n, r) {
    let i = t.get(r);
    if (i) return i;
    let s = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
    kh(e, n, r, s, a);
    let o = [s, Object.keys(a)];
    return t.set(r, o), o;
  }
  function ju(e, t, n) {
    let r = t.get(n.selectionSet);
    if (r) return r;
    let i = Vt(e.getSchema(), n.typeCondition);
    return ya(e, t, i, n.selectionSet);
  }
  function kh(e, t, n, r, i) {
    for (let s of n.selections)
      switch (s.kind) {
        case b.FIELD: {
          let a = s.name.value, o;
          (Ie(t) || ke(t)) && (o = t.getFields()[a]);
          let u = s.alias ? s.alias.value : a;
          r[u] || (r[u] = []), r[u].push([t, s, o]);
          break;
        }
        case b.FRAGMENT_SPREAD:
          i[s.name.value] = !0;
          break;
        case b.INLINE_FRAGMENT: {
          let a = s.typeCondition, o = a ? Vt(e.getSchema(), a) : t;
          kh(e, o, s.selectionSet, r, i);
          break;
        }
      }
  }
  function N9(e, t, n, r) {
    if (e.length > 0)
      return [
        [t, e.map(([i]) => i)],
        [n, ...e.map(([, i]) => i).flat()],
        [r, ...e.map(([, , i]) => i).flat()]
      ];
  }
  var C9 = class {
    constructor() {
      this._data = /* @__PURE__ */ new Map();
    }
    has(e, t, n) {
      var r;
      let [i, s] = e < t ? [e, t] : [t, e], a = (r = this._data.get(i)) === null || r === void 0 ? void 0 : r.get(s);
      return a === void 0 ? !1 : n ? !0 : n === a;
    }
    add(e, t, n) {
      let [r, i] = e < t ? [e, t] : [t, e], s = this._data.get(r);
      s === void 0 ? this._data.set(r, /* @__PURE__ */ new Map([[i, n]])) : s.set(i, n);
    }
  };
  function T9(e) {
    return {
      InlineFragment(t) {
        let n = e.getType(), r = e.getParentType();
        if (Pt(n) && Pt(r) && !Iu(e.getSchema(), n, r)) {
          let i = z(r), s = z(n);
          e.reportError(
            new q(
              `Fragment cannot be spread here as objects of type "${i}" can never be of type "${s}".`,
              { nodes: t }
            )
          );
        }
      },
      FragmentSpread(t) {
        let n = t.name.value, r = S9(e, n), i = e.getParentType();
        if (r && i && !Iu(e.getSchema(), r, i)) {
          let s = z(i), a = z(r);
          e.reportError(
            new q(
              `Fragment "${n}" cannot be spread here as objects of type "${s}" can never be of type "${a}".`,
              { nodes: t }
            )
          );
        }
      }
    };
  }
  function S9(e, t) {
    let n = e.getFragment(t);
    if (n) {
      let r = Vt(e.getSchema(), n.typeCondition);
      if (Pt(r)) return r;
    }
  }
  function A9(e) {
    let t = e.getSchema(), n = /* @__PURE__ */ Object.create(null);
    for (let i of e.getDocument().definitions) ts(i) && (n[i.name.value] = i);
    return {
      ScalarTypeExtension: r,
      ObjectTypeExtension: r,
      InterfaceTypeExtension: r,
      UnionTypeExtension: r,
      EnumTypeExtension: r,
      InputObjectTypeExtension: r
    };
    function r(i) {
      let s = i.name.value, a = n[s], o = t == null ? void 0 : t.getType(s), u;
      if (a ? u = F9[a.kind] : o && (u = w9(o)), u) {
        if (u !== i.kind) {
          let l = I9(i.kind);
          e.reportError(new q(`Cannot extend non-${l} type "${s}".`, { nodes: a ? [a, i] : i }));
        }
      } else {
        let l = Object.keys({ ...n, ...t == null ? void 0 : t.getTypeMap() }), c = Tr(s, l);
        e.reportError(
          new q(`Cannot extend type "${s}" because it is not defined.` + ir(c), { nodes: i.name })
        );
      }
    }
  }
  var F9 = {
    [b.SCALAR_TYPE_DEFINITION]: b.SCALAR_TYPE_EXTENSION,
    [b.OBJECT_TYPE_DEFINITION]: b.OBJECT_TYPE_EXTENSION,
    [b.INTERFACE_TYPE_DEFINITION]: b.INTERFACE_TYPE_EXTENSION,
    [b.UNION_TYPE_DEFINITION]: b.UNION_TYPE_EXTENSION,
    [b.ENUM_TYPE_DEFINITION]: b.ENUM_TYPE_EXTENSION,
    [b.INPUT_OBJECT_TYPE_DEFINITION]: b.INPUT_OBJECT_TYPE_EXTENSION
  };
  function w9(e) {
    if (Gt(e)) return b.SCALAR_TYPE_EXTENSION;
    if (Ie(e)) return b.OBJECT_TYPE_EXTENSION;
    if (ke(e)) return b.INTERFACE_TYPE_EXTENSION;
    if (Mt(e)) return b.UNION_TYPE_EXTENSION;
    if (Tt(e)) return b.ENUM_TYPE_EXTENSION;
    if (Ke(e)) return b.INPUT_OBJECT_TYPE_EXTENSION;
    Ot(!1, "Unexpected type: " + z(e));
  }
  function I9(e) {
    switch (e) {
      case b.SCALAR_TYPE_EXTENSION:
        return "scalar";
      case b.OBJECT_TYPE_EXTENSION:
        return "object";
      case b.INTERFACE_TYPE_EXTENSION:
        return "interface";
      case b.UNION_TYPE_EXTENSION:
        return "union";
      case b.ENUM_TYPE_EXTENSION:
        return "enum";
      case b.INPUT_OBJECT_TYPE_EXTENSION:
        return "input object";
      default:
        Ot(!1, "Unexpected kind: " + z(e));
    }
  }
  function x9(e) {
    return {
      ...Rh(e),
      Field: {
        leave(t) {
          var n;
          let r = e.getFieldDef();
          if (!r) return !1;
          let i = new Set(
            (n = t.arguments) === null || n === void 0 ? void 0 : n.map((s) => s.name.value)
          );
          for (let s of r.args)
            if (!i.has(s.name) && Wi(s)) {
              let a = z(s.type);
              e.reportError(
                new q(
                  `Field "${r.name}" argument "${s.name}" of type "${a}" is required, but it was not provided.`,
                  { nodes: t }
                )
              );
            }
        }
      }
    };
  }
  function Rh(e) {
    var t;
    let n = /* @__PURE__ */ Object.create(null), r = e.getSchema(), i = (t = r == null ? void 0 : r.getDirectives()) !== null && t !== void 0 ? t : hi;
    for (let o of i) n[o.name] = Nr(o.args.filter(Wi), (u) => u.name);
    let s = e.getDocument().definitions;
    for (let o of s)
      if (o.kind === b.DIRECTIVE_DEFINITION) {
        var a;
        let u = (a = o.arguments) !== null && a !== void 0 ? a : [];
        n[o.name.value] = Nr(u.filter(L9), (l) => l.name.value);
      }
    return {
      Directive: {
        leave(o) {
          let u = o.name.value, l = n[u];
          if (l) {
            var c;
            let f = (c = o.arguments) !== null && c !== void 0 ? c : [], p = new Set(f.map((m) => m.name.value));
            for (let [m, g] of Object.entries(l))
              if (!p.has(m)) {
                let y = Au(g.type) ? z(g.type) : st(g.type);
                e.reportError(
                  new q(
                    `Directive "@${u}" argument "${m}" of type "${y}" is required, but it was not provided.`,
                    { nodes: o }
                  )
                );
              }
          }
        }
      }
    };
  }
  function L9(e) {
    return e.type.kind === b.NON_NULL_TYPE && e.defaultValue == null;
  }
  function O9(e) {
    return {
      Field(t) {
        let n = e.getType(), r = t.selectionSet;
        if (n) {
          if (ci(qe(n))) {
            if (r) {
              let i = t.name.value, s = z(n);
              e.reportError(
                new q(
                  `Field "${i}" must not have a selection since type "${s}" has no subfields.`,
                  { nodes: r }
                )
              );
            }
          } else if (!r) {
            let i = t.name.value, s = z(n);
            e.reportError(
              new q(
                `Field "${i}" of type "${s}" must have a selection of subfields. Did you mean "${i} { ... }"?`,
                { nodes: t }
              )
            );
          }
        }
      }
    };
  }
  function ur(e, t, n) {
    if (e) {
      if (e.kind === b.VARIABLE) {
        let r = e.name.value;
        if (n == null || n[r] === void 0) return;
        let i = n[r];
        return i === null && Te(t) ? void 0 : i;
      }
      if (Te(t)) return e.kind === b.NULL ? void 0 : ur(e, t.ofType, n);
      if (e.kind === b.NULL) return null;
      if (Ze(t)) {
        let r = t.ofType;
        if (e.kind === b.LIST) {
          let s = [];
          for (let a of e.values)
            if (Mh(a, n)) {
              if (Te(r)) return;
              s.push(null);
            } else {
              let o = ur(a, r, n);
              if (o === void 0) return;
              s.push(o);
            }
          return s;
        }
        let i = ur(e, r, n);
        return i === void 0 ? void 0 : [i];
      }
      if (Ke(t)) {
        if (e.kind !== b.OBJECT) return;
        let r = /* @__PURE__ */ Object.create(null), i = Nr(e.fields, (s) => s.name.value);
        for (let s of Object.values(t.getFields())) {
          let a = i[s.name];
          if (!a || Mh(a.value, n)) {
            if (s.defaultValue !== void 0) r[s.name] = s.defaultValue;
            else if (Te(s.type)) return;
            continue;
          }
          let o = ur(a.value, s.type, n);
          if (o === void 0) return;
          r[s.name] = o;
        }
        if (t.isOneOf) {
          let s = Object.keys(r);
          if (s.length !== 1 || r[s[0]] === null) return;
        }
        return r;
      }
      if (ci(t)) {
        let r;
        try {
          r = t.parseLiteral(e, n);
        } catch {
          return;
        }
        return r === void 0 ? void 0 : r;
      }
      Ot(!1, "Unexpected input type: " + z(t));
    }
  }
  function Mh(e, t) {
    return e.kind === b.VARIABLE && (t == null || t[e.name.value] === void 0);
  }
  function k9(e, t, n) {
    var r;
    let i = {}, s = (r = t.arguments) !== null && r !== void 0 ? r : [], a = Nr(s, (o) => o.name.value);
    for (let o of e.args) {
      let u = o.name, l = o.type, c = a[u];
      if (!c) {
        if (o.defaultValue !== void 0) i[u] = o.defaultValue;
        else if (Te(l))
          throw new q(`Argument "${u}" of required type "${z(l)}" was not provided.`, { nodes: t });
        continue;
      }
      let f = c.value, p = f.kind === b.NULL;
      if (f.kind === b.VARIABLE) {
        let g = f.name.value;
        if (n == null || !R9(n, g)) {
          if (o.defaultValue !== void 0) i[u] = o.defaultValue;
          else if (Te(l))
            throw new q(
              `Argument "${u}" of required type "${z(
                l
              )}" was provided the variable "$${g}" which was not provided a runtime value.`,
              { nodes: f }
            );
          continue;
        }
        p = n[g] == null;
      }
      if (p && Te(l))
        throw new q(`Argument "${u}" of non-null type "${z(l)}" must not be null.`, { nodes: f });
      let m = ur(f, l, n);
      if (m === void 0) throw new q(`Argument "${u}" has invalid value ${st(f)}.`, { nodes: f });
      i[u] = m;
    }
    return i;
  }
  function ns(e, t, n) {
    var r;
    let i = (r = t.directives) === null || r === void 0 ? void 0 : r.find((s) => s.name.value === e.name);
    if (i) return k9(e, i, n);
  }
  function R9(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function M9(e, t, n, r, i) {
    let s = /* @__PURE__ */ new Map();
    return Ku(e, t, n, r, i, s, /* @__PURE__ */ new Set()), s;
  }
  function Ku(e, t, n, r, i, s, a) {
    for (let o of i.selections)
      switch (o.kind) {
        case b.FIELD: {
          if (!qu(n, o)) continue;
          let u = B9(o), l = s.get(u);
          l !== void 0 ? l.push(o) : s.set(u, [o]);
          break;
        }
        case b.INLINE_FRAGMENT: {
          if (!qu(n, o) || !Bh(e, o, r)) continue;
          Ku(e, t, n, r, o.selectionSet, s, a);
          break;
        }
        case b.FRAGMENT_SPREAD: {
          let u = o.name.value;
          if (a.has(u) || !qu(n, o)) continue;
          a.add(u);
          let l = t[u];
          if (!l || !Bh(e, l, r)) continue;
          Ku(e, t, n, r, l.selectionSet, s, a);
          break;
        }
      }
  }
  function qu(e, t) {
    let n = ns(fh, t, e);
    if ((n == null ? void 0 : n.if) === !0) return !1;
    let r = ns(dh, t, e);
    return (r == null ? void 0 : r.if) !== !1;
  }
  function Bh(e, t, n) {
    let r = t.typeCondition;
    if (!r) return !0;
    let i = Vt(e, r);
    return i === n ? !0 : bn(i) ? e.isSubType(i, n) : !1;
  }
  function B9(e) {
    return e.alias ? e.alias.value : e.name.value;
  }
  function P9(e) {
    return {
      OperationDefinition(t) {
        if (t.operation === "subscription") {
          let n = e.getSchema(), r = n.getSubscriptionType();
          if (r) {
            let i = t.name ? t.name.value : null, s = /* @__PURE__ */ Object.create(null), a = e.getDocument(), o = /* @__PURE__ */ Object.create(null);
            for (let l of a.definitions) l.kind === b.FRAGMENT_DEFINITION && (o[l.name.value] = l);
            let u = M9(n, o, s, r, t.selectionSet);
            if (u.size > 1) {
              let l = [...u.values()].slice(1).flat();
              e.reportError(
                new q(
                  i != null ? `Subscription "${i}" must select only one top level field.` : "Anonymous Subscription must select only one top level field.",
                  { nodes: l }
                )
              );
            }
            for (let l of u.values())
              l[0].name.value.startsWith("__") && e.reportError(
                new q(
                  i != null ? `Subscription "${i}" must not select an introspection top level field.` : "Anonymous Subscription must not select an introspection top level field.",
                  { nodes: l }
                )
              );
          }
        }
      }
    };
  }
  function Gu(e, t) {
    let n = /* @__PURE__ */ new Map();
    for (let r of e) {
      let i = t(r), s = n.get(i);
      s === void 0 ? n.set(i, [r]) : s.push(r);
    }
    return n;
  }
  function V9(e) {
    return {
      DirectiveDefinition(r) {
        var i;
        let s = (i = r.arguments) !== null && i !== void 0 ? i : [];
        return n(`@${r.name.value}`, s);
      },
      InterfaceTypeDefinition: t,
      InterfaceTypeExtension: t,
      ObjectTypeDefinition: t,
      ObjectTypeExtension: t
    };
    function t(r) {
      var i;
      let s = r.name.value, a = (i = r.fields) !== null && i !== void 0 ? i : [];
      for (let u of a) {
        var o;
        let l = u.name.value, c = (o = u.arguments) !== null && o !== void 0 ? o : [];
        n(`${s}.${l}`, c);
      }
      return !1;
    }
    function n(r, i) {
      let s = Gu(i, (a) => a.name.value);
      for (let [a, o] of s)
        o.length > 1 && e.reportError(
          new q(`Argument "${r}(${a}:)" can only be defined once.`, {
            nodes: o.map((u) => u.name)
          })
        );
      return !1;
    }
  }
  function Ph(e) {
    return { Field: t, Directive: t };
    function t(n) {
      var r;
      let i = (r = n.arguments) !== null && r !== void 0 ? r : [], s = Gu(i, (a) => a.name.value);
      for (let [a, o] of s)
        o.length > 1 && e.reportError(
          new q(`There can be only one argument named "${a}".`, { nodes: o.map((u) => u.name) })
        );
    }
  }
  function $9(e) {
    let t = /* @__PURE__ */ Object.create(null), n = e.getSchema();
    return {
      DirectiveDefinition(r) {
        let i = r.name.value;
        if (n != null && n.getDirective(i)) {
          e.reportError(
            new q(`Directive "@${i}" already exists in the schema. It cannot be redefined.`, {
              nodes: r.name
            })
          );
          return;
        }
        return t[i] ? e.reportError(
          new q(`There can be only one directive named "@${i}".`, { nodes: [t[i], r.name] })
        ) : t[i] = r.name, !1;
      }
    };
  }
  function Vh(e) {
    let t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : hi;
    for (let o of r) t[o.name] = !o.isRepeatable;
    let i = e.getDocument().definitions;
    for (let o of i) o.kind === b.DIRECTIVE_DEFINITION && (t[o.name.value] = !o.repeatable);
    let s = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
    return {
      enter(o) {
        if (!("directives" in o) || !o.directives) return;
        let u;
        if (o.kind === b.SCHEMA_DEFINITION || o.kind === b.SCHEMA_EXTENSION) u = s;
        else if (ts(o) || Pu(o)) {
          let l = o.name.value;
          u = a[l], u === void 0 && (a[l] = u = /* @__PURE__ */ Object.create(null));
        } else u = /* @__PURE__ */ Object.create(null);
        for (let l of o.directives) {
          let c = l.name.value;
          t[c] && (u[c] ? e.reportError(
            new q(`The directive "@${c}" can only be used once at this location.`, {
              nodes: [u[c], l]
            })
          ) : u[c] = l);
        }
      }
    };
  }
  function U9(e) {
    let t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
    return { EnumTypeDefinition: i, EnumTypeExtension: i };
    function i(s) {
      var a;
      let o = s.name.value;
      r[o] || (r[o] = /* @__PURE__ */ Object.create(null));
      let u = (a = s.values) !== null && a !== void 0 ? a : [], l = r[o];
      for (let c of u) {
        let f = c.name.value, p = n[o];
        Tt(p) && p.getValue(f) ? e.reportError(
          new q(
            `Enum value "${o}.${f}" already exists in the schema. It cannot also be defined in this type extension.`,
            { nodes: c.name }
          )
        ) : l[f] ? e.reportError(
          new q(`Enum value "${o}.${f}" can only be defined once.`, { nodes: [l[f], c.name] })
        ) : l[f] = c.name;
      }
      return !1;
    }
  }
  function j9(e) {
    let t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
    return {
      InputObjectTypeDefinition: i,
      InputObjectTypeExtension: i,
      InterfaceTypeDefinition: i,
      InterfaceTypeExtension: i,
      ObjectTypeDefinition: i,
      ObjectTypeExtension: i
    };
    function i(s) {
      var a;
      let o = s.name.value;
      r[o] || (r[o] = /* @__PURE__ */ Object.create(null));
      let u = (a = s.fields) !== null && a !== void 0 ? a : [], l = r[o];
      for (let c of u) {
        let f = c.name.value;
        K9(n[o], f) ? e.reportError(
          new q(
            `Field "${o}.${f}" already exists in the schema. It cannot also be defined in this type extension.`,
            { nodes: c.name }
          )
        ) : l[f] ? e.reportError(
          new q(`Field "${o}.${f}" can only be defined once.`, { nodes: [l[f], c.name] })
        ) : l[f] = c.name;
      }
      return !1;
    }
  }
  function K9(e, t) {
    return Ie(e) || ke(e) || Ke(e) ? e.getFields()[t] != null : !1;
  }
  function q9(e) {
    let t = /* @__PURE__ */ Object.create(null);
    return {
      OperationDefinition: () => !1,
      FragmentDefinition(n) {
        let r = n.name.value;
        return t[r] ? e.reportError(
          new q(`There can be only one fragment named "${r}".`, { nodes: [t[r], n.name] })
        ) : t[r] = n.name, !1;
      }
    };
  }
  function $h(e) {
    let t = [], n = /* @__PURE__ */ Object.create(null);
    return {
      ObjectValue: {
        enter() {
          t.push(n), n = /* @__PURE__ */ Object.create(null);
        },
        leave() {
          let r = t.pop();
          r || Ot(), n = r;
        }
      },
      ObjectField(r) {
        let i = r.name.value;
        n[i] ? e.reportError(
          new q(`There can be only one input field named "${i}".`, { nodes: [n[i], r.name] })
        ) : n[i] = r.name;
      }
    };
  }
  function G9(e) {
    let t = /* @__PURE__ */ Object.create(null);
    return {
      OperationDefinition(n) {
        let r = n.name;
        return r && (t[r.value] ? e.reportError(
          new q(`There can be only one operation named "${r.value}".`, {
            nodes: [t[r.value], r]
          })
        ) : t[r.value] = r), !1;
      },
      FragmentDefinition: () => !1
    };
  }
  function H9(e) {
    let t = e.getSchema(), n = /* @__PURE__ */ Object.create(null), r = t ? {
      query: t.getQueryType(),
      mutation: t.getMutationType(),
      subscription: t.getSubscriptionType()
    } : {};
    return { SchemaDefinition: i, SchemaExtension: i };
    function i(s) {
      var a;
      let o = (a = s.operationTypes) !== null && a !== void 0 ? a : [];
      for (let u of o) {
        let l = u.operation, c = n[l];
        r[l] ? e.reportError(
          new q(`Type for ${l} already defined in the schema. It cannot be redefined.`, {
            nodes: u
          })
        ) : c ? e.reportError(new q(`There can be only one ${l} type in schema.`, { nodes: [c, u] })) : n[l] = u;
      }
      return !1;
    }
  }
  function W9(e) {
    let t = /* @__PURE__ */ Object.create(null), n = e.getSchema();
    return {
      ScalarTypeDefinition: r,
      ObjectTypeDefinition: r,
      InterfaceTypeDefinition: r,
      UnionTypeDefinition: r,
      EnumTypeDefinition: r,
      InputObjectTypeDefinition: r
    };
    function r(i) {
      let s = i.name.value;
      if (n != null && n.getType(s)) {
        e.reportError(
          new q(
            `Type "${s}" already exists in the schema. It cannot also be defined in this type definition.`,
            { nodes: i.name }
          )
        );
        return;
      }
      return t[s] ? e.reportError(
        new q(`There can be only one type named "${s}".`, { nodes: [t[s], i.name] })
      ) : t[s] = i.name, !1;
    }
  }
  function z9(e) {
    return {
      OperationDefinition(t) {
        var n;
        let r = (n = t.variableDefinitions) !== null && n !== void 0 ? n : [], i = Gu(r, (s) => s.variable.name.value);
        for (let [s, a] of i)
          a.length > 1 && e.reportError(
            new q(`There can be only one variable named "$${s}".`, {
              nodes: a.map((o) => o.variable.name)
            })
          );
      }
    };
  }
  function Y9(e) {
    let t = {};
    return {
      OperationDefinition: {
        enter() {
          t = {};
        }
      },
      VariableDefinition(n) {
        t[n.variable.name.value] = n;
      },
      ListValue(n) {
        let r = wu(e.getParentInputType());
        if (!Ze(r)) return Fr(e, n), !1;
      },
      ObjectValue(n) {
        let r = qe(e.getInputType());
        if (!Ke(r)) return Fr(e, n), !1;
        let i = Nr(n.fields, (s) => s.name.value);
        for (let s of Object.values(r.getFields()))
          if (!i[s.name] && ah(s)) {
            let a = z(s.type);
            e.reportError(
              new q(`Field "${r.name}.${s.name}" of required type "${a}" was not provided.`, {
                nodes: n
              })
            );
          }
        r.isOneOf && J9(e, n, r, i, t);
      },
      ObjectField(n) {
        let r = qe(e.getParentInputType());
        if (!e.getInputType() && Ke(r)) {
          let i = Tr(n.name.value, Object.keys(r.getFields()));
          e.reportError(
            new q(`Field "${n.name.value}" is not defined by type "${r.name}".` + ir(i), {
              nodes: n
            })
          );
        }
      },
      NullValue(n) {
        let r = e.getInputType();
        Te(r) && e.reportError(new q(`Expected value of type "${z(r)}", found ${st(n)}.`, { nodes: n }));
      },
      EnumValue: (n) => Fr(e, n),
      IntValue: (n) => Fr(e, n),
      FloatValue: (n) => Fr(e, n),
      StringValue: (n) => Fr(e, n),
      BooleanValue: (n) => Fr(e, n)
    };
  }
  function Fr(e, t) {
    let n = e.getInputType();
    if (!n) return;
    let r = qe(n);
    if (!ci(r)) {
      let i = z(n);
      e.reportError(new q(`Expected value of type "${i}", found ${st(t)}.`, { nodes: t }));
      return;
    }
    try {
      if (r.parseLiteral(t, void 0) === void 0) {
        let i = z(n);
        e.reportError(new q(`Expected value of type "${i}", found ${st(t)}.`, { nodes: t }));
      }
    } catch (i) {
      let s = z(n);
      i instanceof q ? e.reportError(i) : e.reportError(
        new q(`Expected value of type "${s}", found ${st(t)}; ` + i.message, {
          nodes: t,
          originalError: i
        })
      );
    }
  }
  function J9(e, t, n, r, i) {
    var s;
    let a = Object.keys(r);
    if (a.length !== 1) {
      e.reportError(
        new q(`OneOf Input Object "${n.name}" must specify exactly one key.`, { nodes: [t] })
      );
      return;
    }
    let o = (s = r[a[0]]) === null || s === void 0 ? void 0 : s.value, u = !o || o.kind === b.NULL, l = (o == null ? void 0 : o.kind) === b.VARIABLE;
    if (u) {
      e.reportError(new q(`Field "${n.name}.${a[0]}" must be non-null.`, { nodes: [t] }));
      return;
    }
    if (l) {
      let c = o.name.value;
      i[c].type.kind !== b.NON_NULL_TYPE && e.reportError(
        new q(
          `Variable "${c}" must be non-nullable to be used for OneOf Input Object "${n.name}".`,
          { nodes: [t] }
        )
      );
    }
  }
  function X9(e) {
    return {
      VariableDefinition(t) {
        let n = Vt(e.getSchema(), t.type);
        if (n !== void 0 && !Bt(n)) {
          let r = t.variable.name.value, i = st(t.type);
          e.reportError(
            new q(`Variable "$${r}" cannot be non-input type "${i}".`, { nodes: t.type })
          );
        }
      }
    };
  }
  function Q9(e) {
    let t = /* @__PURE__ */ Object.create(null);
    return {
      OperationDefinition: {
        enter() {
          t = /* @__PURE__ */ Object.create(null);
        },
        leave(n) {
          let r = e.getRecursiveVariableUsages(n);
          for (let { node: i, type: s, defaultValue: a } of r) {
            let o = i.name.value, u = t[o];
            if (u && s) {
              let l = e.getSchema(), c = Vt(l, u.type);
              if (c && !Z9(l, c, u.defaultValue, s, a)) {
                let f = z(c), p = z(s);
                e.reportError(
                  new q(`Variable "$${o}" of type "${f}" used in position expecting type "${p}".`, {
                    nodes: [u, i]
                  })
                );
              }
            }
          }
        }
      },
      VariableDefinition(n) {
        t[n.variable.name.value] = n;
      }
    };
  }
  function Z9(e, t, n, r, i) {
    if (Te(r) && !Te(t)) {
      if (!(n != null && n.kind !== b.NULL) && i === void 0) return !1;
      let s = r.ofType;
      return fi(e, t, s);
    }
    return fi(e, t, r);
  }
  var e6 = Object.freeze([h9]), Uh = Object.freeze([
    Th,
    G9,
    c9,
    P9,
    Fh,
    i9,
    X9,
    O9,
    t9,
    q9,
    u9,
    Ih,
    T9,
    p9,
    z9,
    m9,
    g9,
    Ah,
    Vh,
    s9,
    Ph,
    Y9,
    x9,
    Q9,
    E9,
    $h,
    ...e6
  ]), t6 = Object.freeze([d9, H9, W9, U9, j9, V9, $9, Fh, Ah, Vh, A9, Sh, Ph, $h, Rh]), jh = class {
    constructor(e, t) {
      this._ast = e, this._fragments = void 0, this._fragmentSpreads = /* @__PURE__ */ new Map(), this._recursivelyReferencedFragments = /* @__PURE__ */ new Map(), this._onError = t;
    }
    get [Symbol.toStringTag]() {
      return "ASTValidationContext";
    }
    reportError(e) {
      this._onError(e);
    }
    getDocument() {
      return this._ast;
    }
    getFragment(e) {
      let t;
      if (this._fragments) t = this._fragments;
      else {
        t = /* @__PURE__ */ Object.create(null);
        for (let n of this.getDocument().definitions)
          n.kind === b.FRAGMENT_DEFINITION && (t[n.name.value] = n);
        this._fragments = t;
      }
      return t[e];
    }
    getFragmentSpreads(e) {
      let t = this._fragmentSpreads.get(e);
      if (!t) {
        t = [];
        let n = [e], r;
        for (; r = n.pop(); )
          for (let i of r.selections)
            i.kind === b.FRAGMENT_SPREAD ? t.push(i) : i.selectionSet && n.push(i.selectionSet);
        this._fragmentSpreads.set(e, t);
      }
      return t;
    }
    getRecursivelyReferencedFragments(e) {
      let t = this._recursivelyReferencedFragments.get(e);
      if (!t) {
        t = [];
        let n = /* @__PURE__ */ Object.create(null), r = [e.selectionSet], i;
        for (; i = r.pop(); )
          for (let s of this.getFragmentSpreads(i)) {
            let a = s.name.value;
            if (n[a] !== !0) {
              n[a] = !0;
              let o = this.getFragment(a);
              o && (t.push(o), r.push(o.selectionSet));
            }
          }
        this._recursivelyReferencedFragments.set(e, t);
      }
      return t;
    }
  }, n6 = class extends jh {
    constructor(e, t, n) {
      super(e, n), this._schema = t;
    }
    get [Symbol.toStringTag]() {
      return "SDLValidationContext";
    }
    getSchema() {
      return this._schema;
    }
  }, r6 = class extends jh {
    constructor(e, t, n, r) {
      super(t, r), this._schema = e, this._typeInfo = n, this._variableUsages = /* @__PURE__ */ new Map(), this._recursiveVariableUsages = /* @__PURE__ */ new Map();
    }
    get [Symbol.toStringTag]() {
      return "ValidationContext";
    }
    getSchema() {
      return this._schema;
    }
    getVariableUsages(e) {
      let t = this._variableUsages.get(e);
      if (!t) {
        let n = [], r = new Nh(this._schema);
        sr(
          e,
          Ch(r, {
            VariableDefinition: () => !1,
            Variable(i) {
              n.push({ node: i, type: r.getInputType(), defaultValue: r.getDefaultValue() });
            }
          })
        ), t = n, this._variableUsages.set(e, t);
      }
      return t;
    }
    getRecursiveVariableUsages(e) {
      let t = this._recursiveVariableUsages.get(e);
      if (!t) {
        t = this.getVariableUsages(e);
        for (let n of this.getRecursivelyReferencedFragments(e))
          t = t.concat(this.getVariableUsages(n));
        this._recursiveVariableUsages.set(e, t);
      }
      return t;
    }
    getType() {
      return this._typeInfo.getType();
    }
    getParentType() {
      return this._typeInfo.getParentType();
    }
    getInputType() {
      return this._typeInfo.getInputType();
    }
    getParentInputType() {
      return this._typeInfo.getParentInputType();
    }
    getFieldDef() {
      return this._typeInfo.getFieldDef();
    }
    getDirective() {
      return this._typeInfo.getDirective();
    }
    getArgument() {
      return this._typeInfo.getArgument();
    }
    getEnumValue() {
      return this._typeInfo.getEnumValue();
    }
  };
  function Kh(e, t, n = Uh, r, i = new Nh(e)) {
    var s;
    let a = (s = r == null ? void 0 : r.maxErrors) !== null && s !== void 0 ? s : 100;
    t || Ne(!1, "Must provide document."), B7(e);
    let o = Object.freeze({}), u = [], l = new r6(e, t, i, (f) => {
      if (u.length >= a)
        throw u.push(new q("Too many validation errors, error limit reached. Validation aborted.")), o;
      u.push(f);
    }), c = Yf(n.map((f) => f(l)));
    try {
      sr(t, Ch(i, c));
    } catch (f) {
      if (f !== o) throw f;
    }
    return u;
  }
  function i6(e, t, n = t6) {
    let r = [], i = new n6(e, t, (a) => {
      r.push(a);
    }), s = n.map((a) => a(i));
    return sr(e, Yf(s)), r;
  }
  function s6(e) {
    let t = i6(e);
    if (t.length !== 0)
      throw new Error(
        t.map((n) => n.message).join(`

`)
      );
  }
  function a6(e) {
    return {
      Field(t) {
        let n = e.getFieldDef(), r = n == null ? void 0 : n.deprecationReason;
        if (n && r != null) {
          let i = e.getParentType();
          i != null || Ot(), e.reportError(new q(`The field ${i.name}.${n.name} is deprecated. ${r}`, { nodes: t }));
        }
      },
      Argument(t) {
        let n = e.getArgument(), r = n == null ? void 0 : n.deprecationReason;
        if (n && r != null) {
          let i = e.getDirective();
          if (i != null)
            e.reportError(
              new q(`Directive "@${i.name}" argument "${n.name}" is deprecated. ${r}`, { nodes: t })
            );
          else {
            let s = e.getParentType(), a = e.getFieldDef();
            s != null && a != null || Ot(), e.reportError(
              new q(`Field "${s.name}.${a.name}" argument "${n.name}" is deprecated. ${r}`, {
                nodes: t
              })
            );
          }
        }
      },
      ObjectField(t) {
        let n = qe(e.getParentInputType());
        if (Ke(n)) {
          let r = n.getFields()[t.name.value], i = r == null ? void 0 : r.deprecationReason;
          i != null && e.reportError(
            new q(`The input field ${n.name}.${r.name} is deprecated. ${i}`, { nodes: t })
          );
        }
      },
      EnumValue(t) {
        let n = e.getEnumValue(), r = n == null ? void 0 : n.deprecationReason;
        if (n && r != null) {
          let i = qe(e.getInputType());
          i != null || Ot(), e.reportError(
            new q(`The enum value "${i.name}.${n.name}" is deprecated. ${r}`, { nodes: t })
          );
        }
      }
    };
  }
  function qh(e, t) {
    kn(e) && kn(e.__schema) || Ne(
      !1,
      `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${z(
        e
      )}.`
    );
    let n = e.__schema, r = Cr(
      n.types,
      (F) => F.name,
      (F) => p(F)
    );
    for (let F of [...pa, ...ga]) r[F.name] && (r[F.name] = F);
    let i = n.queryType ? c(n.queryType) : null, s = n.mutationType ? c(n.mutationType) : null, a = n.subscriptionType ? c(n.subscriptionType) : null, o = n.directives ? n.directives.map(X) : [];
    return new Ru({
      description: n.description,
      query: i,
      mutation: s,
      subscription: a,
      types: Object.values(r),
      directives: o,
      assumeValid: t == null ? void 0 : t.assumeValid
    });
    function u(F) {
      if (F.kind === xe.LIST) {
        let j = F.ofType;
        if (!j) throw new Error("Decorated type deeper than introspection query.");
        return new mt(u(j));
      }
      if (F.kind === xe.NON_NULL) {
        let j = F.ofType;
        if (!j) throw new Error("Decorated type deeper than introspection query.");
        let P = u(j);
        return new pe(S7(P));
      }
      return l(F);
    }
    function l(F) {
      let j = F.name;
      if (!j) throw new Error(`Unknown type reference: ${z(F)}.`);
      let P = r[j];
      if (!P)
        throw new Error(
          `Invalid or incomplete schema, unknown type: ${j}. Ensure that a full introspection query is used in order to build a client schema.`
        );
      return P;
    }
    function c(F) {
      return N7(l(F));
    }
    function f(F) {
      return C7(l(F));
    }
    function p(F) {
      if (F != null && F.name != null && F.kind != null)
        switch (F.kind) {
          case xe.SCALAR:
            return m(F);
          case xe.OBJECT:
            return y(F);
          case xe.INTERFACE:
            return S(F);
          case xe.UNION:
            return C(F);
          case xe.ENUM:
            return w(F);
          case xe.INPUT_OBJECT:
            return A(F);
        }
      let j = z(F);
      throw new Error(
        `Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${j}.`
      );
    }
    function m(F) {
      return new Mn({ name: F.name, description: F.description, specifiedByURL: F.specifiedByURL });
    }
    function g(F) {
      if (F.interfaces === null && F.kind === xe.INTERFACE) return [];
      if (!F.interfaces) {
        let j = z(F);
        throw new Error(`Introspection result missing interfaces: ${j}.`);
      }
      return F.interfaces.map(f);
    }
    function y(F) {
      return new Ht({
        name: F.name,
        description: F.description,
        interfaces: () => g(F),
        fields: () => T(F)
      });
    }
    function S(F) {
      return new ar({
        name: F.name,
        description: F.description,
        interfaces: () => g(F),
        fields: () => T(F)
      });
    }
    function C(F) {
      if (!F.possibleTypes) {
        let j = z(F);
        throw new Error(`Introspection result missing possibleTypes: ${j}.`);
      }
      return new fa({
        name: F.name,
        description: F.description,
        types: () => F.possibleTypes.map(c)
      });
    }
    function w(F) {
      if (!F.enumValues) {
        let j = z(F);
        throw new Error(`Introspection result missing enumValues: ${j}.`);
      }
      return new or({
        name: F.name,
        description: F.description,
        values: Cr(
          F.enumValues,
          (j) => j.name,
          (j) => ({ description: j.description, deprecationReason: j.deprecationReason })
        )
      });
    }
    function A(F) {
      if (!F.inputFields) {
        let j = z(F);
        throw new Error(`Introspection result missing inputFields: ${j}.`);
      }
      return new zi({
        name: F.name,
        description: F.description,
        fields: () => O(F.inputFields),
        isOneOf: F.isOneOf
      });
    }
    function T(F) {
      if (!F.fields) throw new Error(`Introspection result missing fields: ${z(F)}.`);
      return Cr(F.fields, (j) => j.name, I);
    }
    function I(F) {
      let j = u(F.type);
      if (!Sr(j)) {
        let P = z(j);
        throw new Error(`Introspection must provide output type for fields, but received: ${P}.`);
      }
      if (!F.args) {
        let P = z(F);
        throw new Error(`Introspection result missing field args: ${P}.`);
      }
      return {
        description: F.description,
        deprecationReason: F.deprecationReason,
        type: j,
        args: O(F.args)
      };
    }
    function O(F) {
      return Cr(F, (j) => j.name, k);
    }
    function k(F) {
      let j = u(F.type);
      if (!Bt(j)) {
        let fe = z(j);
        throw new Error(`Introspection must provide input type for arguments, but received: ${fe}.`);
      }
      let P = F.defaultValue != null ? ur(h7(F.defaultValue), j) : void 0;
      return {
        description: F.description,
        type: j,
        defaultValue: P,
        deprecationReason: F.deprecationReason
      };
    }
    function X(F) {
      if (!F.args) {
        let j = z(F);
        throw new Error(`Introspection result missing directive args: ${j}.`);
      }
      if (!F.locations) {
        let j = z(F);
        throw new Error(`Introspection result missing directive locations: ${j}.`);
      }
      return new Bn({
        name: F.name,
        description: F.description,
        isRepeatable: F.isRepeatable,
        locations: F.locations.slice(),
        args: O(F.args)
      });
    }
  }
  function o6(e, t, n) {
    var r, i, s, a;
    let o = [], u = /* @__PURE__ */ Object.create(null), l = [], c, f = [];
    for (let _ of t.definitions)
      if (_.kind === b.SCHEMA_DEFINITION) c = _;
      else if (_.kind === b.SCHEMA_EXTENSION) f.push(_);
      else if (ts(_)) o.push(_);
      else if (Pu(_)) {
        let W = _.name.value, G = u[W];
        u[W] = G ? G.concat([_]) : [_];
      } else _.kind === b.DIRECTIVE_DEFINITION && l.push(_);
    if (Object.keys(u).length === 0 && o.length === 0 && l.length === 0 && f.length === 0 && c == null)
      return e;
    let p = /* @__PURE__ */ Object.create(null);
    for (let _ of e.types) p[_.name] = w(_);
    for (let _ of o) {
      var m;
      let W = _.name.value;
      p[W] = (m = Gh[W]) !== null && m !== void 0 ? m : Ee(_);
    }
    let g = {
      query: e.query && S(e.query),
      mutation: e.mutation && S(e.mutation),
      subscription: e.subscription && S(e.subscription),
      ...c && P([c]),
      ...P(f)
    };
    return {
      description: (r = c) === null || r === void 0 || (i = r.description) === null || i === void 0 ? void 0 : i.value,
      ...g,
      types: Object.values(p),
      directives: [...e.directives.map(C), ...l.map(M)],
      extensions: /* @__PURE__ */ Object.create(null),
      astNode: (s = c) !== null && s !== void 0 ? s : e.astNode,
      extensionASTNodes: e.extensionASTNodes.concat(f),
      assumeValid: (a = n == null ? void 0 : n.assumeValid) !== null && a !== void 0 ? a : !1
    };
    function y(_) {
      return Ze(_) ? new mt(y(_.ofType)) : Te(_) ? new pe(y(_.ofType)) : S(_);
    }
    function S(_) {
      return p[_.name];
    }
    function C(_) {
      let W = _.toConfig();
      return new Bn({ ...W, args: Rn(W.args, j) });
    }
    function w(_) {
      if (vh(_) || x7(_)) return _;
      if (Gt(_)) return I(_);
      if (Ie(_)) return O(_);
      if (ke(_)) return k(_);
      if (Mt(_)) return X(_);
      if (Tt(_)) return T(_);
      if (Ke(_)) return A(_);
      Ot(!1, "Unexpected type: " + z(_));
    }
    function A(_) {
      var W;
      let G = _.toConfig(), Q = (W = u[G.name]) !== null && W !== void 0 ? W : [];
      return new zi({
        ...G,
        fields: () => ({ ...Rn(G.fields, (L) => ({ ...L, type: y(L.type) })), ...Z(Q) }),
        extensionASTNodes: G.extensionASTNodes.concat(Q)
      });
    }
    function T(_) {
      var W;
      let G = _.toConfig(), Q = (W = u[_.name]) !== null && W !== void 0 ? W : [];
      return new or({
        ...G,
        values: { ...G.values, ...se(Q) },
        extensionASTNodes: G.extensionASTNodes.concat(Q)
      });
    }
    function I(_) {
      var W;
      let G = _.toConfig(), Q = (W = u[G.name]) !== null && W !== void 0 ? W : [], L = G.specifiedByURL;
      for (let ne of Q) {
        var R;
        L = (R = Hh(ne)) !== null && R !== void 0 ? R : L;
      }
      return new Mn({ ...G, specifiedByURL: L, extensionASTNodes: G.extensionASTNodes.concat(Q) });
    }
    function O(_) {
      var W;
      let G = _.toConfig(), Q = (W = u[G.name]) !== null && W !== void 0 ? W : [];
      return new Ht({
        ...G,
        interfaces: () => [..._.getInterfaces().map(S), ...re(Q)],
        fields: () => ({ ...Rn(G.fields, F), ...K(Q) }),
        extensionASTNodes: G.extensionASTNodes.concat(Q)
      });
    }
    function k(_) {
      var W;
      let G = _.toConfig(), Q = (W = u[G.name]) !== null && W !== void 0 ? W : [];
      return new ar({
        ...G,
        interfaces: () => [..._.getInterfaces().map(S), ...re(Q)],
        fields: () => ({ ...Rn(G.fields, F), ...K(Q) }),
        extensionASTNodes: G.extensionASTNodes.concat(Q)
      });
    }
    function X(_) {
      var W;
      let G = _.toConfig(), Q = (W = u[G.name]) !== null && W !== void 0 ? W : [];
      return new fa({
        ...G,
        types: () => [..._.getTypes().map(S), ...De(Q)],
        extensionASTNodes: G.extensionASTNodes.concat(Q)
      });
    }
    function F(_) {
      return { ..._, type: y(_.type), args: _.args && Rn(_.args, j) };
    }
    function j(_) {
      return { ..._, type: y(_.type) };
    }
    function P(_) {
      let W = {};
      for (let Q of _) {
        var G;
        let L = (G = Q.operationTypes) !== null && G !== void 0 ? G : [];
        for (let R of L) W[R.operation] = fe(R.type);
      }
      return W;
    }
    function fe(_) {
      var W;
      let G = _.name.value, Q = (W = Gh[G]) !== null && W !== void 0 ? W : p[G];
      if (Q === void 0) throw new Error(`Unknown type: "${G}".`);
      return Q;
    }
    function U(_) {
      return _.kind === b.LIST_TYPE ? new mt(U(_.type)) : _.kind === b.NON_NULL_TYPE ? new pe(U(_.type)) : fe(_);
    }
    function M(_) {
      var W;
      return new Bn({
        name: _.name.value,
        description: (W = _.description) === null || W === void 0 ? void 0 : W.value,
        locations: _.locations.map(({ value: G }) => G),
        isRepeatable: _.repeatable,
        args: Y(_.arguments),
        astNode: _
      });
    }
    function K(_) {
      let W = /* @__PURE__ */ Object.create(null);
      for (let L of _) {
        var G;
        let R = (G = L.fields) !== null && G !== void 0 ? G : [];
        for (let ne of R) {
          var Q;
          W[ne.name.value] = {
            type: U(ne.type),
            description: (Q = ne.description) === null || Q === void 0 ? void 0 : Q.value,
            args: Y(ne.arguments),
            deprecationReason: ba(ne),
            astNode: ne
          };
        }
      }
      return W;
    }
    function Y(_) {
      let W = _ ?? [], G = /* @__PURE__ */ Object.create(null);
      for (let L of W) {
        var Q;
        let R = U(L.type);
        G[L.name.value] = {
          type: R,
          description: (Q = L.description) === null || Q === void 0 ? void 0 : Q.value,
          defaultValue: ur(L.defaultValue, R),
          deprecationReason: ba(L),
          astNode: L
        };
      }
      return G;
    }
    function Z(_) {
      let W = /* @__PURE__ */ Object.create(null);
      for (let L of _) {
        var G;
        let R = (G = L.fields) !== null && G !== void 0 ? G : [];
        for (let ne of R) {
          var Q;
          let ue = U(ne.type);
          W[ne.name.value] = {
            type: ue,
            description: (Q = ne.description) === null || Q === void 0 ? void 0 : Q.value,
            defaultValue: ur(ne.defaultValue, ue),
            deprecationReason: ba(ne),
            astNode: ne
          };
        }
      }
      return W;
    }
    function se(_) {
      let W = /* @__PURE__ */ Object.create(null);
      for (let L of _) {
        var G;
        let R = (G = L.values) !== null && G !== void 0 ? G : [];
        for (let ne of R) {
          var Q;
          W[ne.name.value] = {
            description: (Q = ne.description) === null || Q === void 0 ? void 0 : Q.value,
            deprecationReason: ba(ne),
            astNode: ne
          };
        }
      }
      return W;
    }
    function re(_) {
      return _.flatMap((W) => {
        var G, Q;
        return (G = (Q = W.interfaces) === null || Q === void 0 ? void 0 : Q.map(fe)) !== null && G !== void 0 ? G : [];
      });
    }
    function De(_) {
      return _.flatMap((W) => {
        var G, Q;
        return (G = (Q = W.types) === null || Q === void 0 ? void 0 : Q.map(fe)) !== null && G !== void 0 ? G : [];
      });
    }
    function Ee(_) {
      var W;
      let G = _.name.value, Q = (W = u[G]) !== null && W !== void 0 ? W : [];
      switch (_.kind) {
        case b.OBJECT_TYPE_DEFINITION: {
          var L;
          let ye = [_, ...Q];
          return new Ht({
            name: G,
            description: (L = _.description) === null || L === void 0 ? void 0 : L.value,
            interfaces: () => re(ye),
            fields: () => K(ye),
            astNode: _,
            extensionASTNodes: Q
          });
        }
        case b.INTERFACE_TYPE_DEFINITION: {
          var R;
          let ye = [_, ...Q];
          return new ar({
            name: G,
            description: (R = _.description) === null || R === void 0 ? void 0 : R.value,
            interfaces: () => re(ye),
            fields: () => K(ye),
            astNode: _,
            extensionASTNodes: Q
          });
        }
        case b.ENUM_TYPE_DEFINITION: {
          var ne;
          let ye = [_, ...Q];
          return new or({
            name: G,
            description: (ne = _.description) === null || ne === void 0 ? void 0 : ne.value,
            values: se(ye),
            astNode: _,
            extensionASTNodes: Q
          });
        }
        case b.UNION_TYPE_DEFINITION: {
          var ue;
          let ye = [_, ...Q];
          return new fa({
            name: G,
            description: (ue = _.description) === null || ue === void 0 ? void 0 : ue.value,
            types: () => De(ye),
            astNode: _,
            extensionASTNodes: Q
          });
        }
        case b.SCALAR_TYPE_DEFINITION: {
          var Pe;
          return new Mn({
            name: G,
            description: (Pe = _.description) === null || Pe === void 0 ? void 0 : Pe.value,
            specifiedByURL: Hh(_),
            astNode: _,
            extensionASTNodes: Q
          });
        }
        case b.INPUT_OBJECT_TYPE_DEFINITION: {
          var dt;
          let ye = [_, ...Q];
          return new zi({
            name: G,
            description: (dt = _.description) === null || dt === void 0 ? void 0 : dt.value,
            fields: () => Z(ye),
            astNode: _,
            extensionASTNodes: Q,
            isOneOf: u6(_)
          });
        }
      }
    }
  }
  var Gh = Nr([...pa, ...ga], (e) => e.name);
  function ba(e) {
    let t = ns(Ou, e);
    return t == null ? void 0 : t.reason;
  }
  function Hh(e) {
    let t = ns(hh, e);
    return t == null ? void 0 : t.url;
  }
  function u6(e) {
    return !!ns(ph, e);
  }
  function Wh(e, t) {
    e != null && e.kind === b.DOCUMENT || Ne(!1, "Must provide valid Document AST."), (t == null ? void 0 : t.assumeValid) !== !0 && (t == null ? void 0 : t.assumeValidSDL) !== !0 && s6(e);
    let n = o6(
      {
        description: void 0,
        types: [],
        directives: [],
        extensions: /* @__PURE__ */ Object.create(null),
        extensionASTNodes: [],
        assumeValid: !1
      },
      e,
      t
    );
    if (n.astNode == null)
      for (let i of n.types)
        switch (i.name) {
          case "Query":
            n.query = i;
            break;
          case "Mutation":
            n.mutation = i;
            break;
          case "Subscription":
            n.subscription = i;
            break;
        }
    let r = [...n.directives, ...hi.filter((i) => n.directives.every((s) => s.name !== i.name))];
    return new Ru({ ...n, directives: r });
  }
  function wr(e) {
    let t = Object.keys(e), n = t.length, r = new Array(n);
    for (let i = 0; i < n; ++i) r[i] = e[t[i]];
    return r;
  }
  function Me(e, t) {
    return l6(t, zh(e.string));
  }
  function l6(e, t) {
    if (!t || t.trim() === "" || t.trim() === ":" || t.trim() === "{")
      return Hu(e, (r) => !r.isDeprecated);
    let n = e.map((r) => ({ proximity: c6(zh(r.label), t), entry: r }));
    return Hu(
      Hu(n, (r) => r.proximity <= 2),
      (r) => !r.entry.isDeprecated
    ).sort(
      (r, i) => (r.entry.isDeprecated ? 1 : 0) - (i.entry.isDeprecated ? 1 : 0) || r.proximity - i.proximity || r.entry.label.length - i.entry.label.length
    ).map((r) => r.entry);
  }
  function Hu(e, t) {
    let n = e.filter(t);
    return n.length === 0 ? e : n;
  }
  function zh(e) {
    return e.toLowerCase().replaceAll(/\W/g, "");
  }
  function c6(e, t) {
    let n = d6(t, e);
    return e.length > t.length && (n -= e.length - t.length - 1, n += e.indexOf(t) === 0 ? 0 : 0.5), n;
  }
  function d6(e, t) {
    let n, r, i = [], s = e.length, a = t.length;
    for (n = 0; n <= s; n++) i[n] = [n];
    for (r = 1; r <= a; r++) i[0][r] = r;
    for (n = 1; n <= s; n++)
      for (r = 1; r <= a; r++) {
        let o = e[n - 1] === t[r - 1] ? 0 : 1;
        i[n][r] = Math.min(i[n - 1][r] + 1, i[n][r - 1] + 1, i[n - 1][r - 1] + o), n > 1 && r > 1 && e[n - 1] === t[r - 2] && e[n - 2] === t[r - 1] && (i[n][r] = Math.min(i[n][r], i[n - 2][r - 2] + o));
      }
    return i[s][a];
  }
  var f6 = (e) => ` {
   $1
}`, va = (e, t, n) => {
    if (!t) return n ?? e;
    let r = qe(t);
    return Ie(r) || Ke(r) || Ze(r) || bn(r) ? e + f6() : n ?? e;
  }, Yh = (e, t, n) => {
    if (Ze(t)) {
      let r = qe(t.ofType);
      return e + `[${va("", r, "$1")}]`;
    }
    return va(e, t, n);
  }, h6 = (e) => {
    let t = e.args.filter((n) => n.type.toString().endsWith("!"));
    if (t.length)
      return e.name + `(${t.map((n, r) => `${n.name}: $${r + 1}`)}) ${va(
        "",
        e.type,
        `
`
      )}`;
  }, Jh;
  (function(e) {
    function t(n) {
      return typeof n == "string";
    }
    e.is = t;
  })(Jh || (Jh = {}));
  var Wu;
  (function(e) {
    function t(n) {
      return typeof n == "string";
    }
    e.is = t;
  })(Wu || (Wu = {}));
  var Xh;
  (function(e) {
    e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
    function t(n) {
      return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
    }
    e.is = t;
  })(Xh || (Xh = {}));
  var _a;
  (function(e) {
    e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
    function t(n) {
      return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
    }
    e.is = t;
  })(_a || (_a = {}));
  var un;
  (function(e) {
    function t(r, i) {
      return r === Number.MAX_VALUE && (r = _a.MAX_VALUE), i === Number.MAX_VALUE && (i = _a.MAX_VALUE), { line: r, character: i };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.objectLiteral(i) && x.uinteger(i.line) && x.uinteger(i.character);
    }
    e.is = n;
  })(un || (un = {}));
  var He;
  (function(e) {
    function t(r, i, s, a) {
      if (x.uinteger(r) && x.uinteger(i) && x.uinteger(s) && x.uinteger(a))
        return { start: un.create(r, i), end: un.create(s, a) };
      if (un.is(r) && un.is(i)) return { start: r, end: i };
      throw new Error(
        "Range#create called with invalid arguments[".concat(r, ", ").concat(i, ", ").concat(s, ", ").concat(a, "]")
      );
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.objectLiteral(i) && un.is(i.start) && un.is(i.end);
    }
    e.is = n;
  })(He || (He = {}));
  var Na;
  (function(e) {
    function t(r, i) {
      return { uri: r, range: i };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.objectLiteral(i) && He.is(i.range) && (x.string(i.uri) || x.undefined(i.uri));
    }
    e.is = n;
  })(Na || (Na = {}));
  var Qh;
  (function(e) {
    function t(r, i, s, a) {
      return { targetUri: r, targetRange: i, targetSelectionRange: s, originSelectionRange: a };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.objectLiteral(i) && He.is(i.targetRange) && x.string(i.targetUri) && He.is(i.targetSelectionRange) && (He.is(i.originSelectionRange) || x.undefined(i.originSelectionRange));
    }
    e.is = n;
  })(Qh || (Qh = {}));
  var zu;
  (function(e) {
    function t(r, i, s, a) {
      return { red: r, green: i, blue: s, alpha: a };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.objectLiteral(i) && x.numberRange(i.red, 0, 1) && x.numberRange(i.green, 0, 1) && x.numberRange(i.blue, 0, 1) && x.numberRange(i.alpha, 0, 1);
    }
    e.is = n;
  })(zu || (zu = {}));
  var Zh;
  (function(e) {
    function t(r, i) {
      return { range: r, color: i };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.objectLiteral(i) && He.is(i.range) && zu.is(i.color);
    }
    e.is = n;
  })(Zh || (Zh = {}));
  var e0;
  (function(e) {
    function t(r, i, s) {
      return { label: r, textEdit: i, additionalTextEdits: s };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.objectLiteral(i) && x.string(i.label) && (x.undefined(i.textEdit) || Pn.is(i)) && (x.undefined(i.additionalTextEdits) || x.typedArray(i.additionalTextEdits, Pn.is));
    }
    e.is = n;
  })(e0 || (e0 = {}));
  var t0;
  (function(e) {
    e.Comment = "comment", e.Imports = "imports", e.Region = "region";
  })(t0 || (t0 = {}));
  var n0;
  (function(e) {
    function t(r, i, s, a, o, u) {
      var l = { startLine: r, endLine: i };
      return x.defined(s) && (l.startCharacter = s), x.defined(a) && (l.endCharacter = a), x.defined(o) && (l.kind = o), x.defined(u) && (l.collapsedText = u), l;
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.objectLiteral(i) && x.uinteger(i.startLine) && x.uinteger(i.startLine) && (x.undefined(i.startCharacter) || x.uinteger(i.startCharacter)) && (x.undefined(i.endCharacter) || x.uinteger(i.endCharacter)) && (x.undefined(i.kind) || x.string(i.kind));
    }
    e.is = n;
  })(n0 || (n0 = {}));
  var Yu;
  (function(e) {
    function t(r, i) {
      return { location: r, message: i };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.defined(i) && Na.is(i.location) && x.string(i.message);
    }
    e.is = n;
  })(Yu || (Yu = {}));
  var r0;
  (function(e) {
    e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
  })(r0 || (r0 = {}));
  var i0;
  (function(e) {
    e.Unnecessary = 1, e.Deprecated = 2;
  })(i0 || (i0 = {}));
  var s0;
  (function(e) {
    function t(n) {
      var r = n;
      return x.objectLiteral(r) && x.string(r.href);
    }
    e.is = t;
  })(s0 || (s0 = {}));
  var Ca;
  (function(e) {
    function t(r, i, s, a, o, u) {
      var l = { range: r, message: i };
      return x.defined(s) && (l.severity = s), x.defined(a) && (l.code = a), x.defined(o) && (l.source = o), x.defined(u) && (l.relatedInformation = u), l;
    }
    e.create = t;
    function n(r) {
      var i, s = r;
      return x.defined(s) && He.is(s.range) && x.string(s.message) && (x.number(s.severity) || x.undefined(s.severity)) && (x.integer(s.code) || x.string(s.code) || x.undefined(s.code)) && (x.undefined(s.codeDescription) || x.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (x.string(s.source) || x.undefined(s.source)) && (x.undefined(s.relatedInformation) || x.typedArray(s.relatedInformation, Yu.is));
    }
    e.is = n;
  })(Ca || (Ca = {}));
  var pi;
  (function(e) {
    function t(r, i) {
      for (var s = [], a = 2; a < arguments.length; a++) s[a - 2] = arguments[a];
      var o = { title: r, command: i };
      return x.defined(s) && s.length > 0 && (o.arguments = s), o;
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.defined(i) && x.string(i.title) && x.string(i.command);
    }
    e.is = n;
  })(pi || (pi = {}));
  var Pn;
  (function(e) {
    function t(s, a) {
      return { range: s, newText: a };
    }
    e.replace = t;
    function n(s, a) {
      return { range: { start: s, end: s }, newText: a };
    }
    e.insert = n;
    function r(s) {
      return { range: s, newText: "" };
    }
    e.del = r;
    function i(s) {
      var a = s;
      return x.objectLiteral(a) && x.string(a.newText) && He.is(a.range);
    }
    e.is = i;
  })(Pn || (Pn = {}));
  var mi;
  (function(e) {
    function t(r, i, s) {
      var a = { label: r };
      return i !== void 0 && (a.needsConfirmation = i), s !== void 0 && (a.description = s), a;
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.objectLiteral(i) && x.string(i.label) && (x.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (x.string(i.description) || i.description === void 0);
    }
    e.is = n;
  })(mi || (mi = {}));
  var vt;
  (function(e) {
    function t(n) {
      var r = n;
      return x.string(r);
    }
    e.is = t;
  })(vt || (vt = {}));
  var lr;
  (function(e) {
    function t(s, a, o) {
      return { range: s, newText: a, annotationId: o };
    }
    e.replace = t;
    function n(s, a, o) {
      return { range: { start: s, end: s }, newText: a, annotationId: o };
    }
    e.insert = n;
    function r(s, a) {
      return { range: s, newText: "", annotationId: a };
    }
    e.del = r;
    function i(s) {
      var a = s;
      return Pn.is(a) && (mi.is(a.annotationId) || vt.is(a.annotationId));
    }
    e.is = i;
  })(lr || (lr = {}));
  var Ta;
  (function(e) {
    function t(r, i) {
      return { textDocument: r, edits: i };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.defined(i) && Aa.is(i.textDocument) && Array.isArray(i.edits);
    }
    e.is = n;
  })(Ta || (Ta = {}));
  var rs;
  (function(e) {
    function t(r, i, s) {
      var a = { kind: "create", uri: r };
      return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
    }
    e.create = t;
    function n(r) {
      var i = r;
      return i && i.kind === "create" && x.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || x.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || x.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || vt.is(i.annotationId));
    }
    e.is = n;
  })(rs || (rs = {}));
  var is;
  (function(e) {
    function t(r, i, s, a) {
      var o = { kind: "rename", oldUri: r, newUri: i };
      return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (o.options = s), a !== void 0 && (o.annotationId = a), o;
    }
    e.create = t;
    function n(r) {
      var i = r;
      return i && i.kind === "rename" && x.string(i.oldUri) && x.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || x.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || x.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || vt.is(i.annotationId));
    }
    e.is = n;
  })(is || (is = {}));
  var ss;
  (function(e) {
    function t(r, i, s) {
      var a = { kind: "delete", uri: r };
      return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
    }
    e.create = t;
    function n(r) {
      var i = r;
      return i && i.kind === "delete" && x.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || x.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || x.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || vt.is(i.annotationId));
    }
    e.is = n;
  })(ss || (ss = {}));
  var Ju;
  (function(e) {
    function t(n) {
      var r = n;
      return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every(function(i) {
        return x.string(i.kind) ? rs.is(i) || is.is(i) || ss.is(i) : Ta.is(i);
      }));
    }
    e.is = t;
  })(Ju || (Ju = {}));
  var Sa = function() {
    function e(t, n) {
      this.edits = t, this.changeAnnotations = n;
    }
    return e.prototype.insert = function(t, n, r) {
      var i, s;
      if (r === void 0 ? i = Pn.insert(t, n) : vt.is(r) ? (s = r, i = lr.insert(t, n, r)) : (this.assertChangeAnnotations(this.changeAnnotations), s = this.changeAnnotations.manage(r), i = lr.insert(t, n, s)), this.edits.push(i), s !== void 0)
        return s;
    }, e.prototype.replace = function(t, n, r) {
      var i, s;
      if (r === void 0 ? i = Pn.replace(t, n) : vt.is(r) ? (s = r, i = lr.replace(t, n, r)) : (this.assertChangeAnnotations(this.changeAnnotations), s = this.changeAnnotations.manage(r), i = lr.replace(t, n, s)), this.edits.push(i), s !== void 0)
        return s;
    }, e.prototype.delete = function(t, n) {
      var r, i;
      if (n === void 0 ? r = Pn.del(t) : vt.is(n) ? (i = n, r = lr.del(t, n)) : (this.assertChangeAnnotations(this.changeAnnotations), i = this.changeAnnotations.manage(n), r = lr.del(t, i)), this.edits.push(r), i !== void 0)
        return i;
    }, e.prototype.add = function(t) {
      this.edits.push(t);
    }, e.prototype.all = function() {
      return this.edits;
    }, e.prototype.clear = function() {
      this.edits.splice(0, this.edits.length);
    }, e.prototype.assertChangeAnnotations = function(t) {
      if (t === void 0)
        throw new Error("Text edit change is not configured to manage change annotations.");
    }, e;
  }(), a0 = function() {
    function e(t) {
      this._annotations = t === void 0 ? /* @__PURE__ */ Object.create(null) : t, this._counter = 0, this._size = 0;
    }
    return e.prototype.all = function() {
      return this._annotations;
    }, Object.defineProperty(e.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.manage = function(t, n) {
      var r;
      if (vt.is(t) ? r = t : (r = this.nextId(), n = t), this._annotations[r] !== void 0)
        throw new Error("Id ".concat(r, " is already in use."));
      if (n === void 0) throw new Error("No annotation provided for id ".concat(r));
      return this._annotations[r] = n, this._size++, r;
    }, e.prototype.nextId = function() {
      return this._counter++, this._counter.toString();
    }, e;
  }();
  (function() {
    function e(t) {
      var n = this;
      this._textEditChanges = /* @__PURE__ */ Object.create(null), t !== void 0 ? (this._workspaceEdit = t, t.documentChanges ? (this._changeAnnotations = new a0(t.changeAnnotations), t.changeAnnotations = this._changeAnnotations.all(), t.documentChanges.forEach(function(r) {
        if (Ta.is(r)) {
          var i = new Sa(r.edits, n._changeAnnotations);
          n._textEditChanges[r.textDocument.uri] = i;
        }
      })) : t.changes && Object.keys(t.changes).forEach(function(r) {
        var i = new Sa(t.changes[r]);
        n._textEditChanges[r] = i;
      })) : this._workspaceEdit = {};
    }
    return Object.defineProperty(e.prototype, "edit", {
      get: function() {
        return this.initDocumentChanges(), this._changeAnnotations !== void 0 && (this._changeAnnotations.size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()), this._workspaceEdit;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getTextEditChange = function(t) {
      if (Aa.is(t)) {
        if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
          throw new Error("Workspace edit is not configured for document changes.");
        var n = { uri: t.uri, version: t.version }, r = this._textEditChanges[n.uri];
        if (!r) {
          var i = [], s = { textDocument: n, edits: i };
          this._workspaceEdit.documentChanges.push(s), r = new Sa(i, this._changeAnnotations), this._textEditChanges[n.uri] = r;
        }
        return r;
      } else {
        if (this.initChanges(), this._workspaceEdit.changes === void 0)
          throw new Error("Workspace edit is not configured for normal text edit changes.");
        var r = this._textEditChanges[t];
        if (!r) {
          var i = [];
          this._workspaceEdit.changes[t] = i, r = new Sa(i), this._textEditChanges[t] = r;
        }
        return r;
      }
    }, e.prototype.initDocumentChanges = function() {
      this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new a0(), this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
    }, e.prototype.initChanges = function() {
      this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null));
    }, e.prototype.createFile = function(t, n, r) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
        throw new Error("Workspace edit is not configured for document changes.");
      var i;
      mi.is(n) || vt.is(n) ? i = n : r = n;
      var s, a;
      if (i === void 0 ? s = rs.create(t, r) : (a = vt.is(i) ? i : this._changeAnnotations.manage(i), s = rs.create(t, r, a)), this._workspaceEdit.documentChanges.push(s), a !== void 0)
        return a;
    }, e.prototype.renameFile = function(t, n, r, i) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
        throw new Error("Workspace edit is not configured for document changes.");
      var s;
      mi.is(r) || vt.is(r) ? s = r : i = r;
      var a, o;
      if (s === void 0 ? a = is.create(t, n, i) : (o = vt.is(s) ? s : this._changeAnnotations.manage(s), a = is.create(t, n, i, o)), this._workspaceEdit.documentChanges.push(a), o !== void 0)
        return o;
    }, e.prototype.deleteFile = function(t, n, r) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
        throw new Error("Workspace edit is not configured for document changes.");
      var i;
      mi.is(n) || vt.is(n) ? i = n : r = n;
      var s, a;
      if (i === void 0 ? s = ss.create(t, r) : (a = vt.is(i) ? i : this._changeAnnotations.manage(i), s = ss.create(t, r, a)), this._workspaceEdit.documentChanges.push(s), a !== void 0)
        return a;
    }, e;
  })();
  var o0;
  (function(e) {
    function t(r) {
      return { uri: r };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.defined(i) && x.string(i.uri);
    }
    e.is = n;
  })(o0 || (o0 = {}));
  var u0;
  (function(e) {
    function t(r, i) {
      return { uri: r, version: i };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.defined(i) && x.string(i.uri) && x.integer(i.version);
    }
    e.is = n;
  })(u0 || (u0 = {}));
  var Aa;
  (function(e) {
    function t(r, i) {
      return { uri: r, version: i };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.defined(i) && x.string(i.uri) && (i.version === null || x.integer(i.version));
    }
    e.is = n;
  })(Aa || (Aa = {}));
  var l0;
  (function(e) {
    function t(r, i, s, a) {
      return { uri: r, languageId: i, version: s, text: a };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.defined(i) && x.string(i.uri) && x.string(i.languageId) && x.integer(i.version) && x.string(i.text);
    }
    e.is = n;
  })(l0 || (l0 = {}));
  var Xu;
  (function(e) {
    e.PlainText = "plaintext", e.Markdown = "markdown";
    function t(n) {
      var r = n;
      return r === e.PlainText || r === e.Markdown;
    }
    e.is = t;
  })(Xu || (Xu = {}));
  var as;
  (function(e) {
    function t(n) {
      var r = n;
      return x.objectLiteral(n) && Xu.is(r.kind) && x.string(r.value);
    }
    e.is = t;
  })(as || (as = {}));
  var c0;
  (function(e) {
    e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
  })(c0 || (c0 = {}));
  var gi;
  (function(e) {
    e.PlainText = 1, e.Snippet = 2;
  })(gi || (gi = {}));
  var d0;
  (function(e) {
    e.Deprecated = 1;
  })(d0 || (d0 = {}));
  var f0;
  (function(e) {
    function t(r, i, s) {
      return { newText: r, insert: i, replace: s };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return i && x.string(i.newText) && He.is(i.insert) && He.is(i.replace);
    }
    e.is = n;
  })(f0 || (f0 = {}));
  var Ir;
  (function(e) {
    e.asIs = 1, e.adjustIndentation = 2;
  })(Ir || (Ir = {}));
  var h0;
  (function(e) {
    function t(n) {
      var r = n;
      return r && (x.string(r.detail) || r.detail === void 0) && (x.string(r.description) || r.description === void 0);
    }
    e.is = t;
  })(h0 || (h0 = {}));
  var p0;
  (function(e) {
    function t(n) {
      return { label: n };
    }
    e.create = t;
  })(p0 || (p0 = {}));
  var m0;
  (function(e) {
    function t(n, r) {
      return { items: n || [], isIncomplete: !!r };
    }
    e.create = t;
  })(m0 || (m0 = {}));
  var Fa;
  (function(e) {
    function t(r) {
      return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    e.fromPlainText = t;
    function n(r) {
      var i = r;
      return x.string(i) || x.objectLiteral(i) && x.string(i.language) && x.string(i.value);
    }
    e.is = n;
  })(Fa || (Fa = {}));
  var g0;
  (function(e) {
    function t(n) {
      var r = n;
      return !!r && x.objectLiteral(r) && (as.is(r.contents) || Fa.is(r.contents) || x.typedArray(r.contents, Fa.is)) && (n.range === void 0 || He.is(n.range));
    }
    e.is = t;
  })(g0 || (g0 = {}));
  var D0;
  (function(e) {
    function t(n, r) {
      return r ? { label: n, documentation: r } : { label: n };
    }
    e.create = t;
  })(D0 || (D0 = {}));
  var E0;
  (function(e) {
    function t(n, r) {
      for (var i = [], s = 2; s < arguments.length; s++) i[s - 2] = arguments[s];
      var a = { label: n };
      return x.defined(r) && (a.documentation = r), x.defined(i) ? a.parameters = i : a.parameters = [], a;
    }
    e.create = t;
  })(E0 || (E0 = {}));
  var y0;
  (function(e) {
    e.Text = 1, e.Read = 2, e.Write = 3;
  })(y0 || (y0 = {}));
  var b0;
  (function(e) {
    function t(n, r) {
      var i = { range: n };
      return x.number(r) && (i.kind = r), i;
    }
    e.create = t;
  })(b0 || (b0 = {}));
  var v0;
  (function(e) {
    e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
  })(v0 || (v0 = {}));
  var _0;
  (function(e) {
    e.Deprecated = 1;
  })(_0 || (_0 = {}));
  var N0;
  (function(e) {
    function t(n, r, i, s, a) {
      var o = { name: n, kind: r, location: { uri: s, range: i } };
      return a && (o.containerName = a), o;
    }
    e.create = t;
  })(N0 || (N0 = {}));
  var C0;
  (function(e) {
    function t(n, r, i, s) {
      return s !== void 0 ? { name: n, kind: r, location: { uri: i, range: s } } : { name: n, kind: r, location: { uri: i } };
    }
    e.create = t;
  })(C0 || (C0 = {}));
  var T0;
  (function(e) {
    function t(r, i, s, a, o, u) {
      var l = { name: r, detail: i, kind: s, range: a, selectionRange: o };
      return u !== void 0 && (l.children = u), l;
    }
    e.create = t;
    function n(r) {
      var i = r;
      return i && x.string(i.name) && x.number(i.kind) && He.is(i.range) && He.is(i.selectionRange) && (i.detail === void 0 || x.string(i.detail)) && (i.deprecated === void 0 || x.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
    }
    e.is = n;
  })(T0 || (T0 = {}));
  var S0;
  (function(e) {
    e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
  })(S0 || (S0 = {}));
  var wa;
  (function(e) {
    e.Invoked = 1, e.Automatic = 2;
  })(wa || (wa = {}));
  var A0;
  (function(e) {
    function t(r, i, s) {
      var a = { diagnostics: r };
      return i != null && (a.only = i), s != null && (a.triggerKind = s), a;
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.defined(i) && x.typedArray(i.diagnostics, Ca.is) && (i.only === void 0 || x.typedArray(i.only, x.string)) && (i.triggerKind === void 0 || i.triggerKind === wa.Invoked || i.triggerKind === wa.Automatic);
    }
    e.is = n;
  })(A0 || (A0 = {}));
  var F0;
  (function(e) {
    function t(r, i, s) {
      var a = { title: r }, o = !0;
      return typeof i == "string" ? (o = !1, a.kind = i) : pi.is(i) ? a.command = i : a.edit = i, o && s !== void 0 && (a.kind = s), a;
    }
    e.create = t;
    function n(r) {
      var i = r;
      return i && x.string(i.title) && (i.diagnostics === void 0 || x.typedArray(i.diagnostics, Ca.is)) && (i.kind === void 0 || x.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || pi.is(i.command)) && (i.isPreferred === void 0 || x.boolean(i.isPreferred)) && (i.edit === void 0 || Ju.is(i.edit));
    }
    e.is = n;
  })(F0 || (F0 = {}));
  var w0;
  (function(e) {
    function t(r, i) {
      var s = { range: r };
      return x.defined(i) && (s.data = i), s;
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.defined(i) && He.is(i.range) && (x.undefined(i.command) || pi.is(i.command));
    }
    e.is = n;
  })(w0 || (w0 = {}));
  var I0;
  (function(e) {
    function t(r, i) {
      return { tabSize: r, insertSpaces: i };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.defined(i) && x.uinteger(i.tabSize) && x.boolean(i.insertSpaces);
    }
    e.is = n;
  })(I0 || (I0 = {}));
  var x0;
  (function(e) {
    function t(r, i, s) {
      return { range: r, target: i, data: s };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.defined(i) && He.is(i.range) && (x.undefined(i.target) || x.string(i.target));
    }
    e.is = n;
  })(x0 || (x0 = {}));
  var L0;
  (function(e) {
    function t(r, i) {
      return { range: r, parent: i };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.objectLiteral(i) && He.is(i.range) && (i.parent === void 0 || e.is(i.parent));
    }
    e.is = n;
  })(L0 || (L0 = {}));
  var O0;
  (function(e) {
    e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator";
  })(O0 || (O0 = {}));
  var k0;
  (function(e) {
    e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
  })(k0 || (k0 = {}));
  var R0;
  (function(e) {
    function t(n) {
      var r = n;
      return x.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
    }
    e.is = t;
  })(R0 || (R0 = {}));
  var M0;
  (function(e) {
    function t(r, i) {
      return { range: r, text: i };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return i != null && He.is(i.range) && x.string(i.text);
    }
    e.is = n;
  })(M0 || (M0 = {}));
  var B0;
  (function(e) {
    function t(r, i, s) {
      return { range: r, variableName: i, caseSensitiveLookup: s };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return i != null && He.is(i.range) && x.boolean(i.caseSensitiveLookup) && (x.string(i.variableName) || i.variableName === void 0);
    }
    e.is = n;
  })(B0 || (B0 = {}));
  var P0;
  (function(e) {
    function t(r, i) {
      return { range: r, expression: i };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return i != null && He.is(i.range) && (x.string(i.expression) || i.expression === void 0);
    }
    e.is = n;
  })(P0 || (P0 = {}));
  var V0;
  (function(e) {
    function t(r, i) {
      return { frameId: r, stoppedLocation: i };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.defined(i) && He.is(r.stoppedLocation);
    }
    e.is = n;
  })(V0 || (V0 = {}));
  var Qu;
  (function(e) {
    e.Type = 1, e.Parameter = 2;
    function t(n) {
      return n === 1 || n === 2;
    }
    e.is = t;
  })(Qu || (Qu = {}));
  var Zu;
  (function(e) {
    function t(r) {
      return { value: r };
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.objectLiteral(i) && (i.tooltip === void 0 || x.string(i.tooltip) || as.is(i.tooltip)) && (i.location === void 0 || Na.is(i.location)) && (i.command === void 0 || pi.is(i.command));
    }
    e.is = n;
  })(Zu || (Zu = {}));
  var $0;
  (function(e) {
    function t(r, i, s) {
      var a = { position: r, label: i };
      return s !== void 0 && (a.kind = s), a;
    }
    e.create = t;
    function n(r) {
      var i = r;
      return x.objectLiteral(i) && un.is(i.position) && (x.string(i.label) || x.typedArray(i.label, Zu.is)) && (i.kind === void 0 || Qu.is(i.kind)) && i.textEdits === void 0 || x.typedArray(i.textEdits, Pn.is) && (i.tooltip === void 0 || x.string(i.tooltip) || as.is(i.tooltip)) && (i.paddingLeft === void 0 || x.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || x.boolean(i.paddingRight));
    }
    e.is = n;
  })($0 || ($0 = {}));
  var U0;
  (function(e) {
    function t(n) {
      var r = n;
      return x.objectLiteral(r) && Wu.is(r.uri) && x.string(r.name);
    }
    e.is = t;
  })(U0 || (U0 = {}));
  var j0;
  (function(e) {
    function t(s, a, o, u) {
      return new p6(s, a, o, u);
    }
    e.create = t;
    function n(s) {
      var a = s;
      return !!(x.defined(a) && x.string(a.uri) && (x.undefined(a.languageId) || x.string(a.languageId)) && x.uinteger(a.lineCount) && x.func(a.getText) && x.func(a.positionAt) && x.func(a.offsetAt));
    }
    e.is = n;
    function r(s, a) {
      for (var o = s.getText(), u = i(a, function(g, y) {
        var S = g.range.start.line - y.range.start.line;
        return S === 0 ? g.range.start.character - y.range.start.character : S;
      }), l = o.length, c = u.length - 1; c >= 0; c--) {
        var f = u[c], p = s.offsetAt(f.range.start), m = s.offsetAt(f.range.end);
        if (m <= l) o = o.substring(0, p) + f.newText + o.substring(m, o.length);
        else throw new Error("Overlapping edit");
        l = p;
      }
      return o;
    }
    e.applyEdits = r;
    function i(s, a) {
      if (s.length <= 1) return s;
      var o = s.length / 2 | 0, u = s.slice(0, o), l = s.slice(o);
      i(u, a), i(l, a);
      for (var c = 0, f = 0, p = 0; c < u.length && f < l.length; ) {
        var m = a(u[c], l[f]);
        m <= 0 ? s[p++] = u[c++] : s[p++] = l[f++];
      }
      for (; c < u.length; ) s[p++] = u[c++];
      for (; f < l.length; ) s[p++] = l[f++];
      return s;
    }
  })(j0 || (j0 = {}));
  var p6 = function() {
    function e(t, n, r, i) {
      this._uri = t, this._languageId = n, this._version = r, this._content = i, this._lineOffsets = void 0;
    }
    return Object.defineProperty(e.prototype, "uri", {
      get: function() {
        return this._uri;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "languageId", {
      get: function() {
        return this._languageId;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "version", {
      get: function() {
        return this._version;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getText = function(t) {
      if (t) {
        var n = this.offsetAt(t.start), r = this.offsetAt(t.end);
        return this._content.substring(n, r);
      }
      return this._content;
    }, e.prototype.update = function(t, n) {
      this._content = t.text, this._version = n, this._lineOffsets = void 0;
    }, e.prototype.getLineOffsets = function() {
      if (this._lineOffsets === void 0) {
        for (var t = [], n = this._content, r = !0, i = 0; i < n.length; i++) {
          r && (t.push(i), r = !1);
          var s = n.charAt(i);
          r = s === "\r" || s === `
`, s === "\r" && i + 1 < n.length && n.charAt(i + 1) === `
` && i++;
        }
        r && n.length > 0 && t.push(n.length), this._lineOffsets = t;
      }
      return this._lineOffsets;
    }, e.prototype.positionAt = function(t) {
      t = Math.max(Math.min(t, this._content.length), 0);
      var n = this.getLineOffsets(), r = 0, i = n.length;
      if (i === 0) return un.create(0, t);
      for (; r < i; ) {
        var s = Math.floor((r + i) / 2);
        n[s] > t ? i = s : r = s + 1;
      }
      var a = r - 1;
      return un.create(a, t - n[a]);
    }, e.prototype.offsetAt = function(t) {
      var n = this.getLineOffsets();
      if (t.line >= n.length) return this._content.length;
      if (t.line < 0) return 0;
      var r = n[t.line], i = t.line + 1 < n.length ? n[t.line + 1] : this._content.length;
      return Math.max(Math.min(r + t.character, i), r);
    }, Object.defineProperty(e.prototype, "lineCount", {
      get: function() {
        return this.getLineOffsets().length;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(), x;
  (function(e) {
    var t = Object.prototype.toString;
    function n(m) {
      return typeof m < "u";
    }
    e.defined = n;
    function r(m) {
      return typeof m > "u";
    }
    e.undefined = r;
    function i(m) {
      return m === !0 || m === !1;
    }
    e.boolean = i;
    function s(m) {
      return t.call(m) === "[object String]";
    }
    e.string = s;
    function a(m) {
      return t.call(m) === "[object Number]";
    }
    e.number = a;
    function o(m, g, y) {
      return t.call(m) === "[object Number]" && g <= m && m <= y;
    }
    e.numberRange = o;
    function u(m) {
      return t.call(m) === "[object Number]" && -2147483648 <= m && m <= 2147483647;
    }
    e.integer = u;
    function l(m) {
      return t.call(m) === "[object Number]" && 0 <= m && m <= 2147483647;
    }
    e.uinteger = l;
    function c(m) {
      return t.call(m) === "[object Function]";
    }
    e.func = c;
    function f(m) {
      return m !== null && typeof m == "object";
    }
    e.objectLiteral = f;
    function p(m, g) {
      return Array.isArray(m) && m.every(g);
    }
    e.typedArray = p;
  })(x || (x = {}));
  var el = class {
    constructor(e) {
      this._start = 0, this._pos = 0, this.getStartOfToken = () => this._start, this.getCurrentPosition = () => this._pos, this.eol = () => this._sourceText.length === this._pos, this.sol = () => this._pos === 0, this.peek = () => this._sourceText.charAt(this._pos) || null, this.next = () => {
        let t = this._sourceText.charAt(this._pos);
        return this._pos++, t;
      }, this.eat = (t) => {
        if (this._testNextCharacter(t))
          return this._start = this._pos, this._pos++, this._sourceText.charAt(this._pos - 1);
      }, this.eatWhile = (t) => {
        let n = this._testNextCharacter(t), r = !1;
        for (n && (r = n, this._start = this._pos); n; )
          this._pos++, n = this._testNextCharacter(t), r = !0;
        return r;
      }, this.eatSpace = () => this.eatWhile(/[\s\u00a0]/), this.skipToEnd = () => {
        this._pos = this._sourceText.length;
      }, this.skipTo = (t) => {
        this._pos = t;
      }, this.match = (t, n = !0, r = !1) => {
        let i = null, s = null;
        return typeof t == "string" ? (s = new RegExp(t, r ? "i" : "g").test(
          this._sourceText.slice(this._pos, this._pos + t.length)
        ), i = t) : t instanceof RegExp && (s = this._sourceText.slice(this._pos).match(t), i = s == null ? void 0 : s[0]), s != null && (typeof t == "string" || s instanceof Array && this._sourceText.startsWith(s[0], this._pos)) ? (n && (this._start = this._pos, i && i.length && (this._pos += i.length)), s) : !1;
      }, this.backUp = (t) => {
        this._pos -= t;
      }, this.column = () => this._pos, this.indentation = () => {
        let t = this._sourceText.match(/\s*/), n = 0;
        if (t && t.length !== 0) {
          let r = t[0], i = 0;
          for (; r.length > i; ) r.charCodeAt(i) === 9 ? n += 2 : n++, i++;
        }
        return n;
      }, this.current = () => this._sourceText.slice(this._start, this._pos), this._sourceText = e;
    }
    _testNextCharacter(e) {
      let t = this._sourceText.charAt(this._pos), n = !1;
      return typeof e == "string" ? n = t === e : n = e instanceof RegExp ? e.test(t) : e(t), n;
    }
  };
  function We(e) {
    return { ofRule: e };
  }
  function Ce(e, t) {
    return { ofRule: e, isList: !0, separator: t };
  }
  function m6(e, t) {
    let n = e.match;
    return e.match = (r) => {
      let i = !1;
      return n && (i = n(r)), i && t.every((s) => s.match && !s.match(r));
    }, e;
  }
  function tl(e, t) {
    return { style: t, match: (n) => n.kind === e };
  }
  function de(e, t) {
    return { style: t || "punctuation", match: (n) => n.kind === "Punctuation" && n.value === e };
  }
  var g6 = (e) => e === " " || e === "	" || e === "," || e === `
` || e === "\r" || e === "\uFEFF" || e === " ", D6 = {
    Name: /^[_A-Za-z][_0-9A-Za-z]*/,
    Punctuation: /^(?:!|\$|\(|\)|\.\.\.|:|=|&|@|\[|]|\{|\||\})/,
    Number: /^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,
    String: /^(?:"""(?:\\"""|[^"]|"[^"]|""[^"])*(?:""")?|"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?)/,
    Comment: /^#.*/
  }, E6 = {
    Document: [Ce("Definition")],
    Definition(e) {
      switch (e.value) {
        case "{":
          return "ShortQuery";
        case "query":
          return "Query";
        case "mutation":
          return "Mutation";
        case "subscription":
          return "Subscription";
        case "fragment":
          return b.FRAGMENT_DEFINITION;
        case "schema":
          return "SchemaDef";
        case "scalar":
          return "ScalarDef";
        case "type":
          return "ObjectTypeDef";
        case "interface":
          return "InterfaceDef";
        case "union":
          return "UnionDef";
        case "enum":
          return "EnumDef";
        case "input":
          return "InputDef";
        case "extend":
          return "ExtendDef";
        case "directive":
          return "DirectiveDef";
      }
    },
    ShortQuery: ["SelectionSet"],
    Query: [
      gt("query"),
      We(Re("def")),
      We("VariableDefinitions"),
      Ce("Directive"),
      "SelectionSet"
    ],
    Mutation: [
      gt("mutation"),
      We(Re("def")),
      We("VariableDefinitions"),
      Ce("Directive"),
      "SelectionSet"
    ],
    Subscription: [
      gt("subscription"),
      We(Re("def")),
      We("VariableDefinitions"),
      Ce("Directive"),
      "SelectionSet"
    ],
    VariableDefinitions: [de("("), Ce("VariableDefinition"), de(")")],
    VariableDefinition: ["Variable", de(":"), "Type", We("DefaultValue")],
    Variable: [de("$", "variable"), Re("variable")],
    DefaultValue: [de("="), "Value"],
    SelectionSet: [de("{"), Ce("Selection"), de("}")],
    Selection(e, t) {
      return e.value === "..." ? t.match(/[\s\u00a0,]*(on\b|@|{)/, !1) ? "InlineFragment" : "FragmentSpread" : t.match(/[\s\u00a0,]*:/, !1) ? "AliasedField" : "Field";
    },
    AliasedField: [
      Re("property"),
      de(":"),
      Re("qualifier"),
      We("Arguments"),
      Ce("Directive"),
      We("SelectionSet")
    ],
    Field: [Re("property"), We("Arguments"), Ce("Directive"), We("SelectionSet")],
    Arguments: [de("("), Ce("Argument"), de(")")],
    Argument: [Re("attribute"), de(":"), "Value"],
    FragmentSpread: [de("..."), Re("def"), Ce("Directive")],
    InlineFragment: [de("..."), We("TypeCondition"), Ce("Directive"), "SelectionSet"],
    FragmentDefinition: [
      gt("fragment"),
      We(m6(Re("def"), [gt("on")])),
      "TypeCondition",
      Ce("Directive"),
      "SelectionSet"
    ],
    TypeCondition: [gt("on"), "NamedType"],
    Value(e) {
      switch (e.kind) {
        case "Number":
          return "NumberValue";
        case "String":
          return "StringValue";
        case "Punctuation":
          switch (e.value) {
            case "[":
              return "ListValue";
            case "{":
              return "ObjectValue";
            case "$":
              return "Variable";
            case "&":
              return "NamedType";
          }
          return null;
        case "Name":
          switch (e.value) {
            case "true":
            case "false":
              return "BooleanValue";
          }
          return e.value === "null" ? "NullValue" : "EnumValue";
      }
    },
    NumberValue: [tl("Number", "number")],
    StringValue: [
      {
        style: "string",
        match: (e) => e.kind === "String",
        update(e, t) {
          t.value.startsWith('"""') && (e.inBlockstring = !t.value.slice(3).endsWith('"""'));
        }
      }
    ],
    BooleanValue: [tl("Name", "builtin")],
    NullValue: [tl("Name", "keyword")],
    EnumValue: [Re("string-2")],
    ListValue: [de("["), Ce("Value"), de("]")],
    ObjectValue: [de("{"), Ce("ObjectField"), de("}")],
    ObjectField: [Re("attribute"), de(":"), "Value"],
    Type(e) {
      return e.value === "[" ? "ListType" : "NonNullType";
    },
    ListType: [de("["), "Type", de("]"), We(de("!"))],
    NonNullType: ["NamedType", We(de("!"))],
    NamedType: [y6("atom")],
    Directive: [de("@", "meta"), Re("meta"), We("Arguments")],
    DirectiveDef: [
      gt("directive"),
      de("@", "meta"),
      Re("meta"),
      We("ArgumentsDef"),
      gt("on"),
      Ce("DirectiveLocation", de("|"))
    ],
    InterfaceDef: [
      gt("interface"),
      Re("atom"),
      We("Implements"),
      Ce("Directive"),
      de("{"),
      Ce("FieldDef"),
      de("}")
    ],
    Implements: [gt("implements"), Ce("NamedType", de("&"))],
    DirectiveLocation: [Re("string-2")],
    SchemaDef: [gt("schema"), Ce("Directive"), de("{"), Ce("OperationTypeDef"), de("}")],
    OperationTypeDef: [Re("keyword"), de(":"), Re("atom")],
    ScalarDef: [gt("scalar"), Re("atom"), Ce("Directive")],
    ObjectTypeDef: [
      gt("type"),
      Re("atom"),
      We("Implements"),
      Ce("Directive"),
      de("{"),
      Ce("FieldDef"),
      de("}")
    ],
    FieldDef: [Re("property"), We("ArgumentsDef"), de(":"), "Type", Ce("Directive")],
    ArgumentsDef: [de("("), Ce("InputValueDef"), de(")")],
    InputValueDef: [Re("attribute"), de(":"), "Type", We("DefaultValue"), Ce("Directive")],
    UnionDef: [gt("union"), Re("atom"), Ce("Directive"), de("="), Ce("UnionMember", de("|"))],
    UnionMember: ["NamedType"],
    EnumDef: [gt("enum"), Re("atom"), Ce("Directive"), de("{"), Ce("EnumValueDef"), de("}")],
    EnumValueDef: [Re("string-2"), Ce("Directive")],
    InputDef: [gt("input"), Re("atom"), Ce("Directive"), de("{"), Ce("InputValueDef"), de("}")],
    ExtendDef: [gt("extend"), "ExtensionDefinition"],
    ExtensionDefinition(e) {
      switch (e.value) {
        case "schema":
          return b.SCHEMA_EXTENSION;
        case "scalar":
          return b.SCALAR_TYPE_EXTENSION;
        case "type":
          return b.OBJECT_TYPE_EXTENSION;
        case "interface":
          return b.INTERFACE_TYPE_EXTENSION;
        case "union":
          return b.UNION_TYPE_EXTENSION;
        case "enum":
          return b.ENUM_TYPE_EXTENSION;
        case "input":
          return b.INPUT_OBJECT_TYPE_EXTENSION;
      }
    },
    [b.SCHEMA_EXTENSION]: ["SchemaDef"],
    [b.SCALAR_TYPE_EXTENSION]: ["ScalarDef"],
    [b.OBJECT_TYPE_EXTENSION]: ["ObjectTypeDef"],
    [b.INTERFACE_TYPE_EXTENSION]: ["InterfaceDef"],
    [b.UNION_TYPE_EXTENSION]: ["UnionDef"],
    [b.ENUM_TYPE_EXTENSION]: ["EnumDef"],
    [b.INPUT_OBJECT_TYPE_EXTENSION]: ["InputDef"]
  };
  function gt(e) {
    return { style: "keyword", match: (t) => t.kind === "Name" && t.value === e };
  }
  function Re(e) {
    return {
      style: e,
      match: (t) => t.kind === "Name",
      update(t, n) {
        t.name = n.value;
      }
    };
  }
  function y6(e) {
    return {
      style: e,
      match: (t) => t.kind === "Name",
      update(t, n) {
        var r;
        !((r = t.prevState) === null || r === void 0) && r.prevState && (t.name = n.value, t.prevState.prevState.type = n.value);
      }
    };
  }
  function K0(e = { eatWhitespace: (t) => t.eatWhile(g6), lexRules: D6, parseRules: E6, editorConfig: {} }) {
    return {
      startState() {
        let t = {
          level: 0,
          step: 0,
          name: null,
          kind: null,
          type: null,
          rule: null,
          needsSeparator: !1,
          prevState: null
        };
        return os(e.parseRules, t, b.DOCUMENT), t;
      },
      token(t, n) {
        return b6(t, n, e);
      }
    };
  }
  function b6(e, t, n) {
    var r;
    if (t.inBlockstring)
      return e.match(/.*"""/) ? (t.inBlockstring = !1, "string") : (e.skipToEnd(), "string");
    let { lexRules: i, parseRules: s, eatWhitespace: a, editorConfig: o } = n;
    if (t.rule && t.rule.length === 0 ? rl(t) : t.needsAdvance && (t.needsAdvance = !1, il(t, !0)), e.sol()) {
      let c = (o == null ? void 0 : o.tabSize) || 2;
      t.indentLevel = Math.floor(e.indentation() / c);
    }
    if (a(e)) return "ws";
    let u = _6(i, e);
    if (!u) return e.match(/\S+/) || e.match(/\s/), os(nl, t, "Invalid"), "invalidchar";
    if (u.kind === "Comment") return os(nl, t, "Comment"), "comment";
    let l = q0({}, t);
    if (u.kind === "Punctuation") {
      if (/^[{([]/.test(u.value))
        t.indentLevel !== void 0 && (t.levels = (t.levels || []).concat(t.indentLevel + 1));
      else if (/^[})\]]/.test(u.value)) {
        let c = t.levels = (t.levels || []).slice(0, -1);
        t.indentLevel && c.length > 0 && c.at(-1) < t.indentLevel && (t.indentLevel = c.at(-1));
      }
    }
    for (; t.rule; ) {
      let c = typeof t.rule == "function" ? t.step === 0 ? t.rule(u, e) : null : t.rule[t.step];
      if (t.needsSeparator && (c = c == null ? void 0 : c.separator), c) {
        if (c.ofRule && (c = c.ofRule), typeof c == "string") {
          os(s, t, c);
          continue;
        }
        if (!((r = c.match) === null || r === void 0) && r.call(c, u))
          return c.update && c.update(t, u), u.kind === "Punctuation" ? il(t, !0) : t.needsAdvance = !0, c.style;
      }
      v6(t);
    }
    return q0(t, l), os(nl, t, "Invalid"), "invalidchar";
  }
  function q0(e, t) {
    let n = Object.keys(t);
    for (let r = 0; r < n.length; r++) e[n[r]] = t[n[r]];
    return e;
  }
  var nl = { Invalid: [], Comment: [] };
  function os(e, t, n) {
    if (!e[n]) throw new TypeError("Unknown rule: " + n);
    t.prevState = Object.assign({}, t), t.kind = n, t.name = null, t.type = null, t.rule = e[n], t.step = 0, t.needsSeparator = !1;
  }
  function rl(e) {
    e.prevState && (e.kind = e.prevState.kind, e.name = e.prevState.name, e.type = e.prevState.type, e.rule = e.prevState.rule, e.step = e.prevState.step, e.needsSeparator = e.prevState.needsSeparator, e.prevState = e.prevState.prevState);
  }
  function il(e, t) {
    var n;
    if (G0(e) && e.rule) {
      let r = e.rule[e.step];
      if (r.separator) {
        let { separator: i } = r;
        if (e.needsSeparator = !e.needsSeparator, !e.needsSeparator && i.ofRule) return;
      }
      if (t) return;
    }
    for (e.needsSeparator = !1, e.step++; e.rule && !(Array.isArray(e.rule) && e.step < e.rule.length); )
      rl(e), e.rule && (G0(e) ? !((n = e.rule) === null || n === void 0) && n[e.step].separator && (e.needsSeparator = !e.needsSeparator) : (e.needsSeparator = !1, e.step++));
  }
  function G0(e) {
    let t = Array.isArray(e.rule) && typeof e.rule[e.step] != "string" && e.rule[e.step];
    return t && t.isList;
  }
  function v6(e) {
    for (; e.rule && !(Array.isArray(e.rule) && e.rule[e.step].ofRule); ) rl(e);
    e.rule && il(e, !1);
  }
  function _6(e, t) {
    let n = Object.keys(e);
    for (let r = 0; r < n.length; r++) {
      let i = t.match(e[n[r]]);
      if (i && i instanceof Array) return { kind: n[r], value: i[0] };
    }
  }
  function Ia(e, t) {
    let n = e.split(`
`), r = K0(), i = r.startState(), s = "", a = new el("");
    for (let o = 0; o < n.length; o++) {
      for (a = new el(n[o]); !a.eol() && (s = r.token(a, i), t(a, i, s, o) !== "BREAK"); ) ;
      t(a, i, s, o), i.kind || (i = r.startState());
    }
    return {
      start: a.getStartOfToken(),
      end: a.getCurrentPosition(),
      string: a.current(),
      state: i,
      style: s
    };
  }
  var cr;
  (function(e) {
    e.TYPE_SYSTEM = "TYPE_SYSTEM", e.EXECUTABLE = "EXECUTABLE", e.UNKNOWN = "UNKNOWN";
  })(cr || (cr = {}));
  var N6 = [
    b.SCHEMA_DEFINITION,
    b.OPERATION_TYPE_DEFINITION,
    b.SCALAR_TYPE_DEFINITION,
    b.OBJECT_TYPE_DEFINITION,
    b.INTERFACE_TYPE_DEFINITION,
    b.UNION_TYPE_DEFINITION,
    b.ENUM_TYPE_DEFINITION,
    b.INPUT_OBJECT_TYPE_DEFINITION,
    b.DIRECTIVE_DEFINITION,
    b.SCHEMA_EXTENSION,
    b.SCALAR_TYPE_EXTENSION,
    b.OBJECT_TYPE_EXTENSION,
    b.INTERFACE_TYPE_EXTENSION,
    b.UNION_TYPE_EXTENSION,
    b.ENUM_TYPE_EXTENSION,
    b.INPUT_OBJECT_TYPE_EXTENSION
  ], C6 = (e) => {
    let t = cr.UNKNOWN;
    if (e)
      try {
        sr(oa(e), {
          enter(n) {
            if (n.kind === "Document") {
              t = cr.EXECUTABLE;
              return;
            }
            return N6.includes(n.kind) ? (t = cr.TYPE_SYSTEM, li) : !1;
          }
        });
      } catch {
        return t;
      }
    return t;
  };
  function T6(e, t) {
    return t != null && t.endsWith(".graphqls") ? cr.TYPE_SYSTEM : C6(e);
  }
  function S6(e, t, n = 0) {
    let r = null, i = null, s = null, a = Ia(e, (o, u, l, c) => {
      if (!(c !== t.line || o.getCurrentPosition() + n < t.character + 1))
        return r = l, i = Object.assign({}, u), s = o.current(), "BREAK";
    });
    return {
      start: a.start,
      end: a.end,
      string: s || a.string,
      state: i || a.state,
      style: r || a.style
    };
  }
  function H0(e, t, n, r, i) {
    let s = S6(e, t, 1);
    if (!s) return null;
    let a = s.state.kind === "Invalid" ? s.state.prevState : s.state;
    if (!a) return null;
    let o = F6(n, s.state), u = (i == null ? void 0 : i.mode) || T6(e, i == null ? void 0 : i.uri);
    return { token: s, state: a, typeInfo: o, mode: u };
  }
  function W0(e, t, n) {
    return n === Xi.name && e.getQueryType() === t ? Xi : n === Qi.name && e.getQueryType() === t ? Qi : n === Zi.name && Pt(t) ? Zi : "getFields" in t ? t.getFields()[n] : null;
  }
  function z0(e, t) {
    let n = [], r = e;
    for (; r != null && r.kind; ) n.push(r), r = r.prevState;
    for (let i = n.length - 1; i >= 0; i--) t(n[i]);
  }
  function A6(e) {
    let t;
    return z0(e, (n) => {
      switch (n.kind) {
        case "Query":
        case "ShortQuery":
        case "Mutation":
        case "Subscription":
        case "FragmentDefinition":
          t = n;
          break;
      }
    }), t;
  }
  function F6(e, t) {
    let n, r, i, s, a, o, u, l, c, f, p;
    return z0(t, (m) => {
      var g;
      switch (m.kind) {
        case H.QUERY:
        case "ShortQuery":
          f = e.getQueryType();
          break;
        case H.MUTATION:
          f = e.getMutationType();
          break;
        case H.SUBSCRIPTION:
          f = e.getSubscriptionType();
          break;
        case H.INLINE_FRAGMENT:
        case H.FRAGMENT_DEFINITION:
          m.type && (f = e.getType(m.type));
          break;
        case H.FIELD:
        case H.ALIASED_FIELD: {
          !f || !m.name ? a = null : (a = c ? W0(e, c, m.name) : null, f = a ? a.type : null);
          break;
        }
        case H.SELECTION_SET:
          c = qe(f);
          break;
        case H.DIRECTIVE:
          i = m.name ? e.getDirective(m.name) : null;
          break;
        case H.INTERFACE_DEF:
          m.name && (u = null, p = new ar({ name: m.name, interfaces: [], fields: {} }));
          break;
        case H.OBJECT_TYPE_DEF:
          m.name && (p = null, u = new Ht({ name: m.name, interfaces: [], fields: {} }));
          break;
        case H.ARGUMENTS: {
          if (m.prevState)
            switch (m.prevState.kind) {
              case H.FIELD:
                r = a && a.args;
                break;
              case H.DIRECTIVE:
                r = i && i.args;
                break;
              case H.ALIASED_FIELD: {
                let A = (g = m.prevState) === null || g === void 0 ? void 0 : g.name;
                if (!A) {
                  r = null;
                  break;
                }
                let T = c ? W0(e, c, A) : null;
                if (!T) {
                  r = null;
                  break;
                }
                r = T.args;
                break;
              }
              default:
                r = null;
                break;
            }
          else r = null;
          break;
        }
        case H.ARGUMENT:
          if (r) {
            for (let A = 0; A < r.length; A++)
              if (r[A].name === m.name) {
                n = r[A];
                break;
              }
          }
          o = n == null ? void 0 : n.type;
          break;
        case H.VARIABLE_DEFINITION:
        case H.VARIABLE:
          f = o;
          break;
        case H.ENUM_VALUE:
          let y = qe(o);
          s = y instanceof or ? y.getValues().find((A) => A.value === m.name) : null;
          break;
        case H.LIST_VALUE:
          let S = wu(o);
          o = S instanceof mt ? S.ofType : null;
          break;
        case H.OBJECT_VALUE:
          let C = qe(o);
          l = C instanceof zi ? C.getFields() : null;
          break;
        case H.OBJECT_FIELD:
          let w = m.name && l ? l[m.name] : null;
          o = w == null ? void 0 : w.type, a = w, f = a ? a.type : null;
          break;
        case H.NAMED_TYPE:
          m.name && (f = e.getType(m.name));
          break;
      }
    }), {
      argDef: n,
      argDefs: r,
      directiveDef: i,
      enumValue: s,
      fieldDef: a,
      inputType: o,
      objectFieldDefs: l,
      parentType: c,
      type: f,
      interfaceDef: p,
      objectTypeDef: u
    };
  }
  var w6 = {
    ALIASED_FIELD: "AliasedField",
    ARGUMENTS: "Arguments",
    SHORT_QUERY: "ShortQuery",
    QUERY: "Query",
    MUTATION: "Mutation",
    SUBSCRIPTION: "Subscription",
    TYPE_CONDITION: "TypeCondition",
    INVALID: "Invalid",
    COMMENT: "Comment",
    SCHEMA_DEF: "SchemaDef",
    SCALAR_DEF: "ScalarDef",
    OBJECT_TYPE_DEF: "ObjectTypeDef",
    OBJECT_VALUE: "ObjectValue",
    LIST_VALUE: "ListValue",
    INTERFACE_DEF: "InterfaceDef",
    UNION_DEF: "UnionDef",
    ENUM_DEF: "EnumDef",
    ENUM_VALUE: "EnumValue",
    FIELD_DEF: "FieldDef",
    INPUT_DEF: "InputDef",
    INPUT_VALUE_DEF: "InputValueDef",
    ARGUMENTS_DEF: "ArgumentsDef",
    EXTEND_DEF: "ExtendDef",
    EXTENSION_DEFINITION: "ExtensionDefinition",
    DIRECTIVE_DEF: "DirectiveDef",
    IMPLEMENTS: "Implements",
    VARIABLE_DEFINITIONS: "VariableDefinitions",
    TYPE: "Type",
    VARIABLE: "Variable"
  }, H = Object.assign(Object.assign({}, b), w6), me;
  (function(e) {
    e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
  })(me || (me = {}));
  var sl = { command: "editor.action.triggerSuggest", title: "Suggestions" }, I6 = (e) => {
    let t = [];
    if (e)
      try {
        sr(oa(e), {
          FragmentDefinition(n) {
            t.push(n);
          }
        });
      } catch {
        return [];
      }
    return t;
  };
  function x6(e, t, n, r, i, s) {
    var a;
    let o = Object.assign(Object.assign({}, s), { schema: e }), u = H0(t, n, e, r, s);
    if (!u) return [];
    let { state: l, typeInfo: c, mode: f, token: p } = u, { kind: m, step: g, prevState: y } = l;
    if (m === H.DOCUMENT) return f === cr.TYPE_SYSTEM ? L6(p) : f === cr.EXECUTABLE ? O6(p) : k6(p);
    if (m === H.EXTEND_DEF) return R6(p);
    if (((a = y == null ? void 0 : y.prevState) === null || a === void 0 ? void 0 : a.kind) === H.EXTENSION_DEFINITION && l.name)
      return Me(p, []);
    if ((y == null ? void 0 : y.kind) === b.SCALAR_TYPE_EXTENSION)
      return Me(
        p,
        Object.values(e.getTypeMap()).filter(Gt).map((C) => ({ label: C.name, kind: me.Function }))
      );
    if ((y == null ? void 0 : y.kind) === b.OBJECT_TYPE_EXTENSION)
      return Me(
        p,
        Object.values(e.getTypeMap()).filter((C) => Ie(C) && !C.name.startsWith("__")).map((C) => ({ label: C.name, kind: me.Function }))
      );
    if ((y == null ? void 0 : y.kind) === b.INTERFACE_TYPE_EXTENSION)
      return Me(
        p,
        Object.values(e.getTypeMap()).filter(ke).map((C) => ({ label: C.name, kind: me.Function }))
      );
    if ((y == null ? void 0 : y.kind) === b.UNION_TYPE_EXTENSION)
      return Me(
        p,
        Object.values(e.getTypeMap()).filter(Mt).map((C) => ({ label: C.name, kind: me.Function }))
      );
    if ((y == null ? void 0 : y.kind) === b.ENUM_TYPE_EXTENSION)
      return Me(
        p,
        Object.values(e.getTypeMap()).filter((C) => Tt(C) && !C.name.startsWith("__")).map((C) => ({ label: C.name, kind: me.Function }))
      );
    if ((y == null ? void 0 : y.kind) === b.INPUT_OBJECT_TYPE_EXTENSION)
      return Me(
        p,
        Object.values(e.getTypeMap()).filter(Ke).map((C) => ({ label: C.name, kind: me.Function }))
      );
    if (m === H.IMPLEMENTS || m === H.NAMED_TYPE && (y == null ? void 0 : y.kind) === H.IMPLEMENTS)
      return P6(p, l, e, t, c);
    if (m === H.SELECTION_SET || m === H.FIELD || m === H.ALIASED_FIELD) return M6(p, c, o);
    if (m === H.ARGUMENTS || m === H.ARGUMENT && g === 0) {
      let { argDefs: C } = c;
      if (C)
        return Me(
          p,
          C.map((w) => {
            var A;
            return {
              label: w.name,
              insertText: Yh(w.name + ": ", w.type),
              insertTextMode: Ir.adjustIndentation,
              insertTextFormat: gi.Snippet,
              command: sl,
              labelDetails: { detail: " " + String(w.type) },
              documentation: (A = w.description) !== null && A !== void 0 ? A : void 0,
              kind: me.Variable,
              type: w.type
            };
          })
        );
    }
    if ((m === H.OBJECT_VALUE || m === H.OBJECT_FIELD && g === 0) && c.objectFieldDefs) {
      let C = wr(c.objectFieldDefs), w = m === H.OBJECT_VALUE ? me.Value : me.Field;
      return Me(
        p,
        C.map((A) => {
          var T;
          return {
            label: A.name,
            detail: String(A.type),
            documentation: (T = A == null ? void 0 : A.description) !== null && T !== void 0 ? T : void 0,
            kind: w,
            type: A.type,
            insertText: Yh(A.name + ": ", A.type),
            insertTextMode: Ir.adjustIndentation,
            insertTextFormat: gi.Snippet,
            command: sl
          };
        })
      );
    }
    if (m === H.ENUM_VALUE || m === H.LIST_VALUE && g === 1 || m === H.OBJECT_FIELD && g === 2 || m === H.ARGUMENT && g === 2)
      return B6(p, c, t, e);
    if (m === H.VARIABLE && g === 1) {
      let C = qe(c.inputType), w = J0(t, e, p);
      return Me(
        p,
        w.filter((A) => A.detail === (C == null ? void 0 : C.name))
      );
    }
    if (m === H.TYPE_CONDITION && g === 1 || m === H.NAMED_TYPE && y != null && y.kind === H.TYPE_CONDITION)
      return V6(p, c, e);
    if (m === H.FRAGMENT_SPREAD && g === 1) return $6(p, c, e, t, Array.isArray(i) ? i : I6(i));
    let S = X0(l);
    return S.kind === H.FIELD_DEF ? Me(
      p,
      Object.values(e.getTypeMap()).filter((C) => Sr(C) && !C.name.startsWith("__")).map((C) => ({
        label: C.name,
        kind: me.Function,
        insertText: s != null && s.fillLeafsOnComplete ? C.name + `
` : C.name,
        insertTextMode: Ir.adjustIndentation
      }))
    ) : S.kind === H.INPUT_VALUE_DEF && g === 2 ? Me(
      p,
      Object.values(e.getTypeMap()).filter((C) => Bt(C) && !C.name.startsWith("__")).map((C) => ({
        label: C.name,
        kind: me.Function,
        insertText: s != null && s.fillLeafsOnComplete ? C.name + `
$1` : C.name,
        insertTextMode: Ir.adjustIndentation,
        insertTextFormat: gi.Snippet
      }))
    ) : m === H.VARIABLE_DEFINITION && g === 2 || m === H.LIST_TYPE && g === 1 || m === H.NAMED_TYPE && y && (y.kind === H.VARIABLE_DEFINITION || y.kind === H.LIST_TYPE || y.kind === H.NON_NULL_TYPE) ? K6(p, e) : m === H.DIRECTIVE ? q6(p, l, e) : m === H.DIRECTIVE_DEF ? G6(p, l, e) : [];
  }
  var al = [
    { label: "type", kind: me.Function },
    { label: "interface", kind: me.Function },
    { label: "union", kind: me.Function },
    { label: "input", kind: me.Function },
    { label: "scalar", kind: me.Function },
    { label: "schema", kind: me.Function }
  ], Y0 = [
    { label: "query", kind: me.Function },
    { label: "mutation", kind: me.Function },
    { label: "subscription", kind: me.Function },
    { label: "fragment", kind: me.Function },
    { label: "{", kind: me.Constructor }
  ];
  function L6(e) {
    return Me(e, [{ label: "extend", kind: me.Function }, ...al]);
  }
  function O6(e) {
    return Me(e, Y0);
  }
  function k6(e) {
    return Me(e, [{ label: "extend", kind: me.Function }, ...Y0, ...al]);
  }
  function R6(e) {
    return Me(e, al);
  }
  function M6(e, t, n) {
    var r;
    if (t.parentType) {
      let { parentType: i } = t, s = [];
      return "getFields" in i && (s = wr(i.getFields())), Pt(i) && s.push(Zi), i === ((r = n == null ? void 0 : n.schema) === null || r === void 0 ? void 0 : r.getQueryType()) && s.push(Xi, Qi), Me(
        e,
        s.map((a, o) => {
          var u;
          let l = {
            sortText: String(o) + a.name,
            label: a.name,
            detail: String(a.type),
            documentation: (u = a.description) !== null && u !== void 0 ? u : void 0,
            deprecated: !!a.deprecationReason,
            isDeprecated: !!a.deprecationReason,
            deprecationReason: a.deprecationReason,
            kind: me.Field,
            labelDetails: { detail: " " + a.type.toString() },
            type: a.type
          };
          return n != null && n.fillLeafsOnComplete && (l.insertText = h6(a), l.insertText || (l.insertText = va(
            a.name,
            a.type,
            a.name + (e.state.needsAdvance ? "" : `
`)
          )), l.insertText && (l.insertTextFormat = gi.Snippet, l.insertTextMode = Ir.adjustIndentation, l.command = sl)), l;
        })
      );
    }
    return [];
  }
  function B6(e, t, n, r) {
    let i = qe(t.inputType), s = J0(n, r, e).filter((a) => a.detail === (i == null ? void 0 : i.name));
    if (i instanceof or) {
      let a = i.getValues();
      return Me(
        e,
        a.map((o) => {
          var u;
          return {
            label: o.name,
            detail: String(i),
            documentation: (u = o.description) !== null && u !== void 0 ? u : void 0,
            deprecated: !!o.deprecationReason,
            isDeprecated: !!o.deprecationReason,
            deprecationReason: o.deprecationReason,
            kind: me.EnumMember,
            type: i
          };
        }).concat(s)
      );
    }
    return i === lt ? Me(
      e,
      s.concat([
        {
          label: "true",
          detail: String(lt),
          documentation: "Not false.",
          kind: me.Variable,
          type: lt
        },
        {
          label: "false",
          detail: String(lt),
          documentation: "Not true.",
          kind: me.Variable,
          type: lt
        }
      ])
    ) : s;
  }
  function P6(e, t, n, r, i) {
    if (t.needsSeparator) return [];
    let s = n.getTypeMap(), a = wr(s).filter(ke), o = a.map(({ name: p }) => p), u = /* @__PURE__ */ new Set();
    Ia(r, (p, m) => {
      var g, y, S, C, w;
      if (m.name && (m.kind === H.INTERFACE_DEF && !o.includes(m.name) && u.add(m.name), m.kind === H.NAMED_TYPE && ((g = m.prevState) === null || g === void 0 ? void 0 : g.kind) === H.IMPLEMENTS)) {
        if (i.interfaceDef) {
          if (!((y = i.interfaceDef) === null || y === void 0) && y.getInterfaces().find(({ name: I }) => I === m.name))
            return;
          let A = n.getType(m.name), T = (S = i.interfaceDef) === null || S === void 0 ? void 0 : S.toConfig();
          i.interfaceDef = new ar(
            Object.assign(Object.assign({}, T), {
              interfaces: [...T.interfaces, A || new ar({ name: m.name, fields: {} })]
            })
          );
        } else if (i.objectTypeDef) {
          if (!((C = i.objectTypeDef) === null || C === void 0) && C.getInterfaces().find(({ name: I }) => I === m.name))
            return;
          let A = n.getType(m.name), T = (w = i.objectTypeDef) === null || w === void 0 ? void 0 : w.toConfig();
          i.objectTypeDef = new Ht(
            Object.assign(Object.assign({}, T), {
              interfaces: [...T.interfaces, A || new ar({ name: m.name, fields: {} })]
            })
          );
        }
      }
    });
    let l = i.interfaceDef || i.objectTypeDef, c = ((l == null ? void 0 : l.getInterfaces()) || []).map(({ name: p }) => p), f = a.concat([...u].map((p) => ({ name: p }))).filter(({ name: p }) => p !== (l == null ? void 0 : l.name) && !c.includes(p));
    return Me(
      e,
      f.map((p) => {
        let m = { label: p.name, kind: me.Interface, type: p };
        return p != null && p.description && (m.documentation = p.description), m;
      })
    );
  }
  function V6(e, t, n, r) {
    let i;
    if (t.parentType)
      if (bn(t.parentType)) {
        let s = T7(t.parentType), a = n.getPossibleTypes(s), o = /* @__PURE__ */ Object.create(null);
        for (let u of a) for (let l of u.getInterfaces()) o[l.name] = l;
        i = a.concat(wr(o));
      } else i = [t.parentType];
    else {
      let s = n.getTypeMap();
      i = wr(s).filter((a) => Pt(a) && !a.name.startsWith("__"));
    }
    return Me(
      e,
      i.map((s) => {
        let a = qe(s);
        return { label: String(s), documentation: (a == null ? void 0 : a.description) || "", kind: me.Field };
      })
    );
  }
  function $6(e, t, n, r, i) {
    if (!r) return [];
    let s = n.getTypeMap(), a = A6(e.state), o = j6(r);
    i && i.length > 0 && o.push(...i);
    let u = o.filter(
      (l) => s[l.typeCondition.name.value] && !(a && a.kind === H.FRAGMENT_DEFINITION && a.name === l.name.value) && Pt(t.parentType) && Pt(s[l.typeCondition.name.value]) && Iu(n, t.parentType, s[l.typeCondition.name.value])
    );
    return Me(
      e,
      u.map((l) => ({
        label: l.name.value,
        detail: String(s[l.typeCondition.name.value]),
        documentation: `fragment ${l.name.value} on ${l.typeCondition.name.value}`,
        labelDetails: { detail: `fragment ${l.name.value} on ${l.typeCondition.name.value}` },
        kind: me.Field,
        type: s[l.typeCondition.name.value]
      }))
    );
  }
  var U6 = (e, t) => {
    var n, r, i, s, a, o, u, l, c, f;
    if (((n = e.prevState) === null || n === void 0 ? void 0 : n.kind) === t) return e.prevState;
    if (((i = (r = e.prevState) === null || r === void 0 ? void 0 : r.prevState) === null || i === void 0 ? void 0 : i.kind) === t)
      return e.prevState.prevState;
    if (((o = (a = (s = e.prevState) === null || s === void 0 ? void 0 : s.prevState) === null || a === void 0 ? void 0 : a.prevState) === null || o === void 0 ? void 0 : o.kind) === t)
      return e.prevState.prevState.prevState;
    if (((f = (c = (l = (u = e.prevState) === null || u === void 0 ? void 0 : u.prevState) === null || l === void 0 ? void 0 : l.prevState) === null || c === void 0 ? void 0 : c.prevState) === null || f === void 0 ? void 0 : f.kind) === t)
      return e.prevState.prevState.prevState.prevState;
  };
  function J0(e, t, n) {
    let r = null, i, s = /* @__PURE__ */ Object.create({});
    return Ia(e, (a, o) => {
      var u;
      if ((o == null ? void 0 : o.kind) === H.VARIABLE && o.name && (r = o.name), (o == null ? void 0 : o.kind) === H.NAMED_TYPE && r) {
        let l = U6(o, H.TYPE);
        l != null && l.type && (i = t.getType(l == null ? void 0 : l.type));
      }
      if (r && i && !s[r]) {
        let l = n.string === "$" || ((u = n == null ? void 0 : n.state) === null || u === void 0 ? void 0 : u.kind) === "Variable" ? r : "$" + r;
        s[r] = {
          detail: i.toString(),
          insertText: l,
          label: "$" + r,
          rawInsert: l,
          type: i,
          kind: me.Variable
        }, r = null, i = null;
      }
    }), wr(s);
  }
  function j6(e) {
    let t = [];
    return Ia(e, (n, r) => {
      r.kind === H.FRAGMENT_DEFINITION && r.name && r.type && t.push({
        kind: H.FRAGMENT_DEFINITION,
        name: { kind: b.NAME, value: r.name },
        selectionSet: { kind: H.SELECTION_SET, selections: [] },
        typeCondition: { kind: H.NAMED_TYPE, name: { kind: b.NAME, value: r.type } }
      });
    }), t;
  }
  function K6(e, t, n) {
    let r = t.getTypeMap(), i = wr(r).filter(Bt);
    return Me(
      e,
      i.map((s) => ({ label: s.name, documentation: (s == null ? void 0 : s.description) || "", kind: me.Variable }))
    );
  }
  function q6(e, t, n, r) {
    var i;
    if (!((i = t.prevState) === null || i === void 0) && i.kind) {
      let s = n.getDirectives().filter((a) => H6(t.prevState, a));
      return Me(
        e,
        s.map((a) => ({ label: a.name, documentation: (a == null ? void 0 : a.description) || "", kind: me.Function }))
      );
    }
    return [];
  }
  function G6(e, t, n, r) {
    let i = n.getDirectives().find((s) => s.name === t.name);
    return Me(
      e,
      (i == null ? void 0 : i.args.map((s) => ({ label: s.name, documentation: s.description || "", kind: me.Field }))) || []
    );
  }
  function H6(e, t) {
    if (!(e != null && e.kind)) return !1;
    let { kind: n, prevState: r } = e, { locations: i } = t;
    switch (n) {
      case H.QUERY:
        return i.includes(te.QUERY);
      case H.MUTATION:
        return i.includes(te.MUTATION);
      case H.SUBSCRIPTION:
        return i.includes(te.SUBSCRIPTION);
      case H.FIELD:
      case H.ALIASED_FIELD:
        return i.includes(te.FIELD);
      case H.FRAGMENT_DEFINITION:
        return i.includes(te.FRAGMENT_DEFINITION);
      case H.FRAGMENT_SPREAD:
        return i.includes(te.FRAGMENT_SPREAD);
      case H.INLINE_FRAGMENT:
        return i.includes(te.INLINE_FRAGMENT);
      case H.SCHEMA_DEF:
        return i.includes(te.SCHEMA);
      case H.SCALAR_DEF:
        return i.includes(te.SCALAR);
      case H.OBJECT_TYPE_DEF:
        return i.includes(te.OBJECT);
      case H.FIELD_DEF:
        return i.includes(te.FIELD_DEFINITION);
      case H.INTERFACE_DEF:
        return i.includes(te.INTERFACE);
      case H.UNION_DEF:
        return i.includes(te.UNION);
      case H.ENUM_DEF:
        return i.includes(te.ENUM);
      case H.ENUM_VALUE:
        return i.includes(te.ENUM_VALUE);
      case H.INPUT_DEF:
        return i.includes(te.INPUT_OBJECT);
      case H.INPUT_VALUE_DEF:
        switch (r == null ? void 0 : r.kind) {
          case H.ARGUMENTS_DEF:
            return i.includes(te.ARGUMENT_DEFINITION);
          case H.INPUT_DEF:
            return i.includes(te.INPUT_FIELD_DEFINITION);
        }
    }
    return !1;
  }
  function X0(e) {
    return e.prevState && e.kind && [H.NAMED_TYPE, H.LIST_TYPE, H.TYPE, H.NON_NULL_TYPE].includes(e.kind) ? X0(e.prevState) : e;
  }
  Va(jp());
  function St(e, t) {
    e.push(t);
  }
  function ol(e, t) {
    Te(t) ? (ol(e, t.ofType), St(e, "!")) : Ze(t) ? (St(e, "["), ol(e, t.ofType), St(e, "]")) : St(e, t.name);
  }
  function xa(e, t, n) {
    let r = [], i = "type" in e ? e.type : e;
    return "type" in e && e.description && (St(r, e.description), St(
      r,
      `

`
    )), St(r, W6(i, t)), n ? (St(
      r,
      `
`
    ), St(r, n)) : !Gt(i) && "description" in i && i.description ? (St(
      r,
      `
`
    ), St(r, i.description)) : "ofType" in i && !Gt(i.ofType) && "description" in i.ofType && i.ofType.description && (St(
      r,
      `
`
    ), St(r, i.ofType.description)), r.join("");
  }
  function W6(e, t) {
    let n = [];
    return t && St(n, "```graphql\n"), ol(n, e), t && St(n, "\n```"), n.join("");
  }
  var z6 = {
    Int: { type: "integer" },
    String: { type: "string" },
    Float: { type: "number" },
    ID: { type: "string" },
    Boolean: { type: "boolean" },
    DateTime: { type: "string" }
  }, Y6 = class {
    constructor() {
      this.set = /* @__PURE__ */ new Set();
    }
    mark(e) {
      return this.set.has(e) ? !1 : (this.set.add(e), !0);
    }
  };
  function ul(e, t) {
    var n, r;
    let i = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null), a = "type" in e ? e.type : e, o = Te(a) ? a.ofType : a, u = Te(a);
    if (Gt(o))
      !((n = t == null ? void 0 : t.scalarSchemas) === null || n === void 0) && n[o.name] ? i = JSON.parse(JSON.stringify(t.scalarSchemas[o.name])) : i.type = ["string", "number", "boolean", "integer"], u || (Array.isArray(i.type) ? i.type.push("null") : i.type ? i.type = [i.type, "null"] : i.enum ? i.enum.push(null) : i.oneOf ? i.oneOf.push({ type: "null" }) : i = { oneOf: [i, { type: "null" }] });
    else if (Tt(o)) i.enum = o.getValues().map((c) => c.name), u || i.enum.push(null);
    else if (Ze(o)) {
      u ? i.type = "array" : i.type = ["array", "null"];
      let { definition: c, definitions: f } = ul(o.ofType, t);
      if (i.items = c, f) for (let p of Object.keys(f)) s[p] = f[p];
    } else if (Ke(o) && (u ? i.$ref = `#/definitions/${o.name}` : i.oneOf = [{ $ref: `#/definitions/${o.name}` }, { type: "null" }], !((r = t == null ? void 0 : t.definitionMarker) === null || r === void 0) && r.mark(o.name))) {
      let c = o.getFields(), f = { type: "object", properties: {}, required: [] };
      f.description = xa(o), t != null && t.useMarkdownDescription && (f.markdownDescription = xa(o, !0));
      for (let p of Object.keys(c)) {
        let m = c[p], { required: g, definition: y, definitions: S } = ul(m, t);
        if (f.properties[p] = y, g && f.required.push(p), S)
          for (let [C, w] of Object.entries(S)) s[C] = w;
      }
      s[o.name] = f;
    }
    "defaultValue" in e && e.defaultValue !== void 0 && (i.default = e.defaultValue);
    let { description: l } = i;
    return i.description = xa(e, !1, l), t != null && t.useMarkdownDescription && (i.markdownDescription = xa(e, !0, l)), { required: u, definition: i, definitions: s };
  }
  function J6(e, t) {
    var n;
    let r = {
      $schema: "http://json-schema.org/draft-04/schema",
      type: "object",
      properties: {},
      required: []
    }, i = Object.assign(Object.assign({}, t), {
      definitionMarker: new Y6(),
      scalarSchemas: Object.assign(Object.assign({}, z6), t == null ? void 0 : t.scalarSchemas)
    });
    if (e)
      for (let [s, a] of Object.entries(e)) {
        let { definition: o, required: u, definitions: l } = ul(a, i);
        r.properties[s] = o, u && ((n = r.required) === null || n === void 0 || n.push(s)), l && (r.definitions = Object.assign(Object.assign({}, r == null ? void 0 : r.definitions), l));
      }
    return r;
  }
  var Q0 = class {
    constructor(e, t) {
      this.containsPosition = (n) => this.start.line === n.line ? this.start.character <= n.character : this.end.line === n.line ? this.end.character >= n.character : this.start.line <= n.line && this.end.line >= n.line, this.start = e, this.end = t;
    }
    setStart(e, t) {
      this.start = new xr(e, t);
    }
    setEnd(e, t) {
      this.end = new xr(e, t);
    }
  }, xr = class {
    constructor(e, t) {
      this.lessThanOrEqualTo = (n) => this.line < n.line || this.line === n.line && this.character <= n.character, this.line = e, this.character = t;
    }
    setLine(e) {
      this.line = e;
    }
    setCharacter(e) {
      this.character = e;
    }
  };
  function X6(e, t, n, r, i) {
    let s = Uh.filter((a) => !(a === Ih || a === Th || r));
    return n && Array.prototype.push.apply(s, n), Kh(e, t, s).filter((a) => {
      if (a.message.includes("Unknown directive") && a.nodes) {
        let o = a.nodes[0];
        if (o && o.kind === b.DIRECTIVE) {
          let u = o.name.value;
          if (u === "arguments" || u === "argumentDefinitions") return !1;
        }
      }
      return !0;
    });
  }
  function Q6(e, t) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let r of t.definitions)
      if (r.kind === "OperationDefinition") {
        let { variableDefinitions: i } = r;
        if (i)
          for (let { variable: s, type: a } of i) {
            let o = Vt(e, a);
            o ? n[s.name.value] = o : a.kind === b.NAMED_TYPE && a.name.value === "Float" && (n[s.name.value] = uh);
          }
      }
    return n;
  }
  function Z6(e, t) {
    let n = t ? Q6(t, e) : void 0, r = [];
    return sr(e, {
      OperationDefinition(i) {
        r.push(i);
      }
    }), { variableToType: n, operations: r };
  }
  var La = { Error: "Error", Warning: "Warning", Information: "Information", Hint: "Hint" }, ll = { [La.Error]: 1, [La.Warning]: 2, [La.Information]: 3, [La.Hint]: 4 }, Oa = (e, t) => {
    if (!e) throw new Error(t);
  };
  function e8(e, t = null, n, r, i) {
    var s, a;
    let o = null, u = "";
    i && (u = typeof i == "string" ? i : i.reduce(
      (c, f) => c + st(f) + `

`,
      ""
    ));
    let l = u ? `${e}

${u}` : e;
    try {
      o = oa(l);
    } catch (c) {
      if (c instanceof q) {
        let f = ep(
          (a = (s = c.locations) === null || s === void 0 ? void 0 : s[0]) !== null && a !== void 0 ? a : { line: 0, column: 0 },
          l
        );
        return [{ severity: ll.Error, message: c.message, source: "GraphQL: Syntax", range: f }];
      }
      throw c;
    }
    return t8(o, t, n, r);
  }
  function t8(e, t = null, n, r) {
    if (!t) return [];
    let i = X6(t, e, n, r).flatMap((a) => Z0(a, ll.Error, "Validation")), s = Kh(t, e, [a6]).flatMap((a) => Z0(a, ll.Warning, "Deprecation"));
    return i.concat(s);
  }
  function Z0(e, t, n) {
    if (!e.nodes) return [];
    let r = [];
    for (let [i, s] of e.nodes.entries()) {
      let a = s.kind !== "Variable" && "name" in s && s.name !== void 0 ? s.name : "variable" in s && s.variable !== void 0 ? s.variable : s;
      if (a) {
        Oa(e.locations, "GraphQL validation error requires locations.");
        let o = e.locations[i], u = n8(a), l = o.column + (u.end - u.start);
        r.push({
          source: `GraphQL: ${n}`,
          message: e.message,
          severity: t,
          range: new Q0(new xr(o.line - 1, o.column - 1), new xr(o.line - 1, l))
        });
      }
    }
    return r;
  }
  function ep(e, t) {
    let n = K0(), r = n.startState(), i = t.split(`
`);
    Oa(i.length >= e.line, "Query text must have more lines than where the error happened");
    let s = null;
    for (let l = 0; l < e.line; l++)
      for (s = new el(i[l]); !s.eol() && n.token(s, r) !== "invalidchar"; ) ;
    Oa(s, "Expected Parser stream to be available.");
    let a = e.line - 1, o = s.getStartOfToken(), u = s.getCurrentPosition();
    return new Q0(new xr(a, o), new xr(a, u));
  }
  function n8(e) {
    let t = e.loc;
    return Oa(t, "Expected ASTNode to have a location."), t;
  }
  function r8(e, t, n, r, i) {
    let s = Object.assign(Object.assign({}, i), { schema: e }), a = H0(t, n, e);
    if (!a) return "";
    let { typeInfo: o, token: u } = a, { kind: l, step: c } = u.state;
    if (l === "Field" && c === 0 && o.fieldDef || l === "AliasedField" && c === 2 && o.fieldDef || l === "ObjectField" && c === 0 && o.fieldDef) {
      let f = [];
      return Di(f, s), i8(f, o, s), Ei(f, s), yi(f, s, o.fieldDef), f.join("").trim();
    }
    if (l === "Directive" && c === 1 && o.directiveDef) {
      let f = [];
      return Di(f, s), np(f, o), Ei(f, s), yi(f, s, o.directiveDef), f.join("").trim();
    }
    if (l === "Variable" && o.type) {
      let f = [];
      return Di(f, s), Lr(f, o, s, o.type), Ei(f, s), yi(f, s, o.type), f.join("").trim();
    }
    if (l === "Argument" && c === 0 && o.argDef) {
      let f = [];
      return Di(f, s), s8(f, o, s), Ei(f, s), yi(f, s, o.argDef), f.join("").trim();
    }
    if (l === "EnumValue" && o.enumValue && "description" in o.enumValue) {
      let f = [];
      return Di(f, s), a8(f, o, s), Ei(f, s), yi(f, s, o.enumValue), f.join("").trim();
    }
    if (l === "NamedType" && o.type && "description" in o.type) {
      let f = [];
      return Di(f, s), Lr(f, o, s, o.type), Ei(f, s), yi(f, s, o.type), f.join("").trim();
    }
    return "";
  }
  function Di(e, t) {
    t.useMarkdown && et(e, "```graphql\n");
  }
  function Ei(e, t) {
    t.useMarkdown && et(e, "\n```");
  }
  function i8(e, t, n) {
    tp(e, t, n), rp(e, t, n, t.type);
  }
  function tp(e, t, n) {
    if (!t.fieldDef) return;
    let r = t.fieldDef.name;
    r.slice(0, 2) !== "__" && (Lr(e, t, n, t.parentType), et(e, ".")), et(e, r);
  }
  function np(e, t, n) {
    if (!t.directiveDef) return;
    let r = "@" + t.directiveDef.name;
    et(e, r);
  }
  function s8(e, t, n) {
    if (t.directiveDef ? np(e, t) : t.fieldDef && tp(e, t, n), !t.argDef) return;
    let { name: r } = t.argDef;
    et(e, "("), et(e, r), rp(e, t, n, t.inputType), et(e, ")");
  }
  function rp(e, t, n, r) {
    et(e, ": "), Lr(e, t, n, r);
  }
  function a8(e, t, n) {
    if (!t.enumValue) return;
    let { name: r } = t.enumValue;
    Lr(e, t, n, t.inputType), et(e, "."), et(e, r);
  }
  function Lr(e, t, n, r) {
    r && (r instanceof pe ? (Lr(e, t, n, r.ofType), et(e, "!")) : r instanceof mt ? (et(e, "["), Lr(e, t, n, r.ofType), et(e, "]")) : et(e, r.name));
  }
  function yi(e, t, n) {
    if (!n) return;
    let r = typeof n.description == "string" ? n.description : null;
    r && (et(
      e,
      `

`
    ), et(e, r)), o8(e, t, n);
  }
  function o8(e, t, n) {
    if (!n) return;
    let r = n.deprecationReason || null;
    r && (et(
      e,
      `

`
    ), et(e, "Deprecated: "), et(e, r));
  }
  function et(e, t) {
    e.push(t);
  }
  var u8 = Va(Hp()), ip = (e, t) => {
    let {
      schema: n,
      documentAST: r,
      introspectionJSON: i,
      introspectionJSONString: s,
      buildSchemaOptions: a,
      documentString: o
    } = e;
    if (n) return n;
    if (s) {
      let u = JSON.parse(s);
      return qh(u, a);
    }
    if (o && t) {
      let u = t(o);
      return Wh(u, a);
    }
    if (i) return qh(i, a);
    if (r) return Wh(r, a);
    throw new Error("no schema supplied");
  }, l8 = /* @__PURE__ */ new Map(), c8 = class {
    constructor({
      parser: e,
      schemas: t,
      parseOptions: n,
      externalFragmentDefinitions: r,
      customValidationRules: i,
      fillLeafsOnComplete: s,
      completionSettings: a
    }) {
      Je(this, "_parser", oa);
      Je(this, "_schemas", []);
      Je(this, "_schemaCache", l8);
      Je(this, "_schemaLoader", ip);
      Je(this, "_parseOptions");
      Je(this, "_customValidationRules");
      Je(this, "_externalFragmentDefinitionNodes", null);
      Je(this, "_externalFragmentDefinitionsString", null);
      Je(this, "_completionSettings");
      Je(this, "getCompletion", (e, t, n) => {
        let r = this.getSchemaForFile(e);
        return !t || t.length < 1 || !(r != null && r.schema) ? [] : x6(r.schema, t, n, void 0, this.getExternalFragmentDefinitions(), {
          uri: e,
          ...this._completionSettings
        });
      });
      Je(this, "getDiagnostics", (e, t, n) => {
        let r = this.getSchemaForFile(e);
        return !t || t.trim().length < 2 || !(r != null && r.schema) ? [] : e8(
          t,
          r.schema,
          n ?? this._customValidationRules,
          !1,
          this.getExternalFragmentDefinitions()
        );
      });
      Je(this, "getHover", (e, t, n, r) => {
        let i = this.getSchemaForFile(e);
        if (i && (t == null ? void 0 : t.length) > 3) return r8(i.schema, t, n, void 0, { useMarkdown: !0, ...r });
      });
      Je(this, "getVariablesJSONSchema", (e, t, n) => {
        let r = this.getSchemaForFile(e);
        if (r && t.length > 3)
          try {
            let i = this.parse(t), s = Z6(i, r.schema);
            if (s != null && s.variableToType)
              return J6(s.variableToType, { ...n, scalarSchemas: r.customScalarSchemas });
          } catch {
          }
        return null;
      });
      this._schemaLoader = ip, t && (this._schemas = t, this._cacheSchemas()), e && (this._parser = e), this._completionSettings = { ...a, fillLeafsOnComplete: (a == null ? void 0 : a.fillLeafsOnComplete) ?? s }, n && (this._parseOptions = n), i && (this._customValidationRules = i), r && (Array.isArray(r) ? this._externalFragmentDefinitionNodes = r : this._externalFragmentDefinitionsString = r);
    }
    _cacheSchemas() {
      for (let e of this._schemas) this._cacheSchema(e);
    }
    _cacheSchema(e) {
      let t = this._schemaLoader(e, this.parse.bind(this));
      return this._schemaCache.set(e.uri, { ...e, schema: t });
    }
    getSchemaForFile(e) {
      var n;
      if (!((n = this._schemas) != null && n.length)) return;
      if (this._schemas.length === 1) return this._schemaCache.get(this._schemas[0].uri);
      let t = this._schemas.find(
        (r) => r.fileMatch ? r.fileMatch.some((i) => (0, u8.default)(i)(e)) : !1
      );
      if (t)
        return this._schemaCache.get(t.uri) || this._cacheSchema(t).get(t.uri);
    }
    getExternalFragmentDefinitions() {
      if (!this._externalFragmentDefinitionNodes && this._externalFragmentDefinitionsString) {
        let e = [];
        try {
          sr(this._parser(this._externalFragmentDefinitionsString), {
            FragmentDefinition(t) {
              e.push(t);
            }
          });
        } catch {
          throw new Error(`Failed parsing externalFragmentDefinitions string:
${this._externalFragmentDefinitionsString}`);
        }
        this._externalFragmentDefinitionNodes = e;
      }
      return this._externalFragmentDefinitionNodes;
    }
    async updateSchemas(e) {
      this._schemas = e, this._cacheSchemas();
    }
    updateSchema(e) {
      let t = this._schemas.findIndex((n) => n.uri === e.uri);
      if (t < 0) {
        console.warn("updateSchema could not find a schema in your config by that URI", e.uri);
        return;
      }
      this._schemas[t] = e, this._cacheSchema(e);
    }
    addSchema(e) {
      this._schemas.push(e), this._cacheSchema(e);
    }
    parse(e, t) {
      return this._parser(e, t || this._parseOptions);
    }
  };
  function sp(e) {
    return {
      startLineNumber: e.start.line + 1,
      startColumn: e.start.character + 1,
      endLineNumber: e.end.line + 1,
      endColumn: e.end.character + 1
    };
  }
  function ap(e) {
    return new xr(e.lineNumber - 1, e.column - 1);
  }
  function d8(e, t) {
    let n = {
      label: e.label,
      insertText: e == null ? void 0 : e.insertText,
      sortText: e.sortText,
      filterText: e == null ? void 0 : e.filterText,
      documentation: e.documentation,
      detail: e.detail,
      range: t ? sp(t) : void 0,
      kind: e.kind
    };
    return e.insertTextFormat && (n.insertTextFormat = e.insertTextFormat), e.insertTextMode && (n.insertTextMode = e.insertTextMode), e.command && (n.command = { ...e.command, id: e.command.command }), e.labelDetails && (n.labelDetails = e.labelDetails), n;
  }
  function f8(e) {
    return {
      startLineNumber: e.range.start.line + 1,
      endLineNumber: e.range.end.line + 1,
      startColumn: e.range.start.character + 1,
      endColumn: e.range.end.character,
      message: e.message,
      severity: 5,
      code: e.code || void 0
    };
  }
  var h8 = class {
    constructor(e, t) {
      Je(this, "_ctx");
      Je(this, "_languageService");
      Je(this, "_formattingOptions");
      this._ctx = e, this._languageService = new c8(t.languageConfig), this._formattingOptions = t.formattingOptions;
    }
    async doValidation(e) {
      var t;
      try {
        let n = (t = this._getTextModel(e)) == null ? void 0 : t.getValue();
        return n ? this._languageService.getDiagnostics(e, n).map(f8) : [];
      } catch (n) {
        return console.error(n), [];
      }
    }
    async doComplete(e, t) {
      var n;
      try {
        let r = (n = this._getTextModel(e)) == null ? void 0 : n.getValue();
        if (!r) return [];
        let i = ap(t);
        return this._languageService.getCompletion(e, r, i).map((s) => d8(s));
      } catch (r) {
        return console.error(r), [];
      }
    }
    async doHover(e, t) {
      var n;
      try {
        let r = (n = this._getTextModel(e)) == null ? void 0 : n.getValue();
        if (!r) return null;
        let i = ap(t);
        return {
          content: this._languageService.getHover(e, r, i),
          range: sp(ep({ column: i.character, line: i.line }, r))
        };
      } catch (r) {
        return console.error(r), null;
      }
    }
    async doGetVariablesJSONSchema(e) {
      let t = this._getTextModel(e), n = t == null ? void 0 : t.getValue();
      if (!t || !n) return null;
      let r = this._languageService.getVariablesJSONSchema(e, n, { useMarkdownDescription: !0 });
      return r ? (r.$id = "monaco://variables-schema.json", r.title = "GraphQL Variables", r) : null;
    }
    async doFormat(e) {
      var s;
      let t = this._getTextModel(e), n = t == null ? void 0 : t.getValue();
      if (!t || !n) return null;
      let r = await Promise.resolve().then(() => ($m(), El)), i = await Promise.resolve().then(() => Va(Um()));
      return r.format(n, {
        parser: "graphql",
        plugins: [i],
        ...(s = this._formattingOptions) == null ? void 0 : s.prettierConfig
      });
    }
    _getTextModel(e) {
      let t = this._ctx.getMirrorModels();
      for (let n of t) if (n.uri.toString() === e) return n;
      return null;
    }
    doUpdateSchema(e) {
      return this._languageService.updateSchema(e);
    }
    doUpdateSchemas(e) {
      return this._languageService.updateSchemas(e);
    }
  };
  self.onmessage = () => {
    Of((e, t) => new h8(e, t));
  };
})();
